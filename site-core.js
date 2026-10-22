/*
 * site-core.js — ページ原稿（Markdown + 数式 + 定理環境）の解析・番号付け・描画の中核。
 * ブラウザ（site.js）とビルドスクリプト（tools/build.js）が同じコードを使うので、
 * 定理番号はどちらで計算しても一致する。
 *
 * 原稿の書式は AUTHORING.md を参照。
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.MathCore = factory();
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var MATH_OPEN = '', MATH_CLOSE = '';
  var REF_OPEN = '', REF_CLOSE = '';
  var DISPLAY_ENVS = ['equation', 'equation*', 'align', 'align*', 'gather', 'gather*',
    'multline', 'multline*', 'eqnarray', 'eqnarray*', 'alignat', 'alignat*', 'CD'];
  var REF_CMDS = ['ref', 'eqref', 'nameref', 'numref', 'fullref', 'tref', 'term'];

  function escapeHtml(s) {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;')
      .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  /* ------------------------------------------------------------------ *
   * 属性 {#label .cls keywords="..."} の解析
   * ------------------------------------------------------------------ */
  var ATTR_RE = /\s*(\{(?:#|\.|[A-Za-z_-]+=)(?:[^{}"]|"[^"]*")*\})\s*$/;
  function parseAttrs(s) {
    var out = { label: null, classes: [], keywords: '' };
    if (!s) return out;
    s = s.replace(/^\{|\}$/g, '');
    var re = /#([^\s#.{}="]+)|\.([A-Za-z0-9_-]+)|([A-Za-z_-]+)="([^"]*)"/g, m;
    while ((m = re.exec(s))) {
      if (m[1]) out.label = m[1];
      else if (m[2]) out.classes.push(m[2]);
      else if (m[3]) out[m[3]] = m[4];
    }
    return out;
  }
  function splitTitleAttrs(rest) {
    var m = ATTR_RE.exec(rest || '');
    if (!m) return { title: (rest || '').trim(), attrs: parseAttrs('') };
    return { title: rest.slice(0, m.index).trim(), attrs: parseAttrs(m[1]) };
  }

  /* ------------------------------------------------------------------ *
   * ブロック構造の解析
   *   ::: theorem タイトル {#label keywords="..."}
   *   本文
   *   :::
   * ------------------------------------------------------------------ */
  var OPEN_RE = /^\s{0,3}(:{3,})\s*([A-Za-z]+)\b\s*(.*?)\s*$/;
  var CLOSE_RE = /^\s{0,3}:{3,}\s*$/;
  var FENCE_RE = /^\s{0,3}(```+|~~~+)/;

  function parseBlocks(src) {
    src = String(src || '').replace(/\r\n?/g, '\n');
    var lines = src.split('\n');
    var rootNode = { kind: 'root', children: [], rawLines: [] };
    var stack = [rootNode];
    var page = { title: '', label: null, keywords: '' };
    var mdBuf = [];
    var inFence = null;
    var titleFound = false;

    function top() { return stack[stack.length - 1]; }
    function flush() {
      if (mdBuf.length) {
        var text = mdBuf.join('\n');
        if (text.trim()) top().children.push({ kind: 'md', text: text });
        mdBuf = [];
      }
    }
    function pushRaw(line) {
      for (var i = 1; i < stack.length; i++) stack[i].rawLines.push(line);
    }

    for (var i = 0; i < lines.length; i++) {
      var line = lines[i];
      var fm = FENCE_RE.exec(line);
      if (inFence) {
        if (fm && fm[1].charAt(0) === inFence.charAt(0) && fm[1].length >= inFence.length &&
            /^\s*(```+|~~~+)\s*$/.test(line)) inFence = null;
        mdBuf.push(line); pushRaw(line); continue;
      }
      if (fm) { inFence = fm[1]; mdBuf.push(line); pushRaw(line); continue; }

      if (!titleFound && stack.length === 1) {
        var tm = /^#\s+(.+?)\s*$/.exec(line);
        if (tm) {
          var ta = splitTitleAttrs(tm[1]);
          page.title = ta.title; page.label = ta.attrs.label; page.keywords = ta.attrs.keywords || '';
          titleFound = true; continue;
        }
      }
      var om = OPEN_RE.exec(line);
      if (om) {
        flush();
        var sp = splitTitleAttrs(om[3]);
        pushRaw(line);
        var node = {
          kind: 'env', type: om[2].toLowerCase(), title: sp.title,
          label: sp.attrs.label, keywords: sp.attrs.keywords || '',
          attrs: sp.attrs, children: [], rawLines: [], line: i + 1
        };
        top().children.push(node);
        stack.push(node);
        continue;
      }
      if (CLOSE_RE.test(line) && stack.length > 1) {
        flush();
        var closed = stack.pop();
        closed.raw = closed.rawLines.join('\n');
        delete closed.rawLines;
        pushRaw(line);
        continue;
      }
      mdBuf.push(line); pushRaw(line);
    }
    flush();
    var unclosed = [];
    while (stack.length > 1) {
      var n = stack.pop(); n.raw = n.rawLines.join('\n'); delete n.rawLines; unclosed.push(n);
    }
    return { page: page, children: rootNode.children, unclosed: unclosed };
  }

  /* ------------------------------------------------------------------ *
   * 数式・参照の抽出（Markdown に壊されないよう退避する）
   * ------------------------------------------------------------------ */
  function findClosing(s, from, token) {
    var i = from;
    while (i < s.length) {
      var j = s.indexOf(token, i);
      if (j < 0) return -1;
      // 直前のバックスラッシュの個数が奇数ならエスケープ
      var k = j - 1, bs = 0;
      while (k >= 0 && s.charAt(k) === '\\') { bs++; k--; }
      if (bs % 2 === 0 || token.charAt(0) === '\\') return j;
      i = j + 1;
    }
    return -1;
  }

  function extractMath(text) {
    var maths = [], refs = [], index = [], out = '';
    var s = String(text), i = 0, n = s.length;
    var lineStart = true;
    while (i < n) {
      var c = s.charAt(i);
      // コードブロック
      if (lineStart) {
        var fm = /^\s{0,3}(```+|~~~+)[^\n]*\n?/.exec(s.slice(i));
        if (fm) {
          var fence = fm[1];
          var endRe = new RegExp('\\n\\s{0,3}' + fence.charAt(0).replace(/[~`]/, '\\$&') + '{' + fence.length + ',}\\s*(\\n|$)');
          var rest = s.slice(i + fm[0].length - 1);
          var em = endRe.exec(rest);
          var endIdx = em ? i + fm[0].length - 1 + em.index + em[0].length : n;
          out += s.slice(i, endIdx); i = endIdx; lineStart = true; continue;
        }
      }
      lineStart = false;
      if (c === '\n') { out += c; i++; lineStart = true; continue; }
      // インラインコード
      if (c === '`') {
        var m = /^`+/.exec(s.slice(i))[0];
        var close = s.indexOf(m, i + m.length);
        if (close > 0) { out += s.slice(i, close + m.length); i = close + m.length; continue; }
        out += m; i += m.length; continue;
      }
      if (c === '\\') {
        var nx = s.charAt(i + 1);
        if (nx === '$') { out += '\\$'; i += 2; continue; }
        if (nx === '[' || nx === '(') {
          var tok = nx === '[' ? '\\]' : '\\)';
          var e = s.indexOf(tok, i + 2);
          if (e > 0) {
            pushMath(s.slice(i + 2, e), nx === '[');
            i = e + 2; continue;
          }
        }
        var bm = /^\\begin\{([A-Za-z*]+)\}/.exec(s.slice(i, i + 40));
        if (bm && DISPLAY_ENVS.indexOf(bm[1]) >= 0) {
          var endTok = '\\end{' + bm[1] + '}';
          var e2 = s.indexOf(endTok, i);
          if (e2 > 0) { pushMath(s.slice(i, e2 + endTok.length), true); i = e2 + endTok.length; continue; }
        }
        var im = /^\\index\{([^{}]+)\}/.exec(s.slice(i, i + 200));
        if (im) {
          var parts = im[1].split('|');
          index.push({ term: parts[0].trim(), reading: (parts[1] || '').trim() });
          i += im[0].length; continue;
        }
        var rm = /^\\(ref|eqref|nameref|numref|fullref|tref|term)(?:\[([^\]]*)\])?\{([^{}]+)\}/.exec(s.slice(i, i + 300));
        if (rm) {
          refs.push({ cmd: rm[1], label: rm[3].trim(), text: rm[2] != null ? rm[2].trim() : null });
          out += REF_OPEN + (refs.length - 1) + REF_CLOSE;
          i += rm[0].length; continue;
        }
        out += c + nx; i += 2; continue;
      }
      if (c === '$') {
        if (s.charAt(i + 1) === '$') {
          var e3 = findClosing(s, i + 2, '$$');
          if (e3 > 0) { pushMath(s.slice(i + 2, e3), true); i = e3 + 2; continue; }
          out += '$$'; i += 2; continue;
        }
        var e4 = findClosing(s, i + 1, '$');
        // 空行をまたぐインライン数式は認めない
        if (e4 > 0 && !/\n\s*\n/.test(s.slice(i + 1, e4))) {
          pushMath(s.slice(i + 1, e4), false); i = e4 + 1; continue;
        }
        out += '$'; i++; continue;
      }
      out += c; i++;
    }
    return { text: out, maths: maths, refs: refs, index: index };

    function pushMath(tex, display) {
      var label = null;
      if (display) {
        var lm = /\\label\{([^{}]+)\}/.exec(tex);
        if (lm) { label = lm[1].trim(); tex = tex.replace(lm[0], ''); }
      }
      maths.push({ tex: tex, display: display, label: label });
      out += MATH_OPEN + (maths.length - 1) + MATH_CLOSE;
    }
  }

  /* ------------------------------------------------------------------ *
   * 番号付け：ページ内の番号付き環境と \label 付きディスプレイ数式に
   * 共通のカウンタ「節番号.通し番号」を振る
   * ------------------------------------------------------------------ */
  var HEADING_LABEL_RE = /^\s{0,3}(#{2,6})\s+(.*?)\s*\{#([^\s{}]+)\}\s*$/;

  function numberTree(parsed, secnum, envs) {
    var counter = 0, labels = [], byLabel = {};
    function walk(nodes, parentEnv, inAttached) {
      var lastNumbered = null;
      nodes.forEach(function (node) {
        if (node.kind === 'md') {
          var ex = node._ex || (node._ex = extractMath(node.text));
          ex.maths.forEach(function (m) {
            if (m.label) {
              counter++;
              m.num = secnum ? secnum + '.' + counter : String(counter);
              labels.push({ label: m.label, type: 'equation', num: m.num, title: '', tex: m.tex, env: parentEnv });
            }
          });
          // 見出しラベル
          var inF = false;
          node.text.split('\n').forEach(function (ln) {
            if (FENCE_RE.test(ln)) inF = !inF;
            if (inF) return;
            var hm = HEADING_LABEL_RE.exec(ln);
            if (hm) labels.push({ label: hm[3], type: 'section', num: '', title: hm[2], level: hm[1].length });
          });
        } else if (node.kind === 'env') {
          while (envs[node.type] && envs[node.type].alias) node.type = envs[node.type].alias;
          var def = envs[node.type] || { num: false };
          if (node.type === 'restate') {
            // 同じページの先に述べた主張を、同じ番号で再掲する
            var tl = (node.attrs && node.attrs.ref) || node.title;
            node.target = byLabel[tl] || null;
            node.targetLabel = tl;
            if (node.target) lastNumbered = node.target;
            return;
          }
          if (def.num && !inAttached) {
            counter++;
            node.num = secnum ? secnum + '.' + counter : String(counter);
            lastNumbered = node;
          } else if (def.attached) {
            node.of = lastNumbered || parentEnv;
          }
          if (node.label) {
            byLabel[node.label] = node;
            labels.push({ label: node.label, type: node.type, num: node.num || '', title: node.title,
              keywords: node.keywords, refname: (node.attrs && node.attrs.refname) || '', refscope: (node.attrs && node.attrs.refscope) || '', node: node });
          }
          var nextParent = (def.num && !inAttached) ? node : (def.attached ? (node.of || parentEnv) : parentEnv);
          walk(node.children, nextParent, inAttached || !!def.attached);
        }
      });
    }
    walk(parsed.children, null, false);
    return labels;
  }

  /* ------------------------------------------------------------------ *
   * 検索用テキスト処理
   * ------------------------------------------------------------------ */
  function stripMarkdown(s) {
    return String(s)
      .replace(/^\s{0,3}:{3,}.*$/gm, ' ')
      .replace(/```[\s\S]*?```/g, ' ')
      .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
      .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
      .replace(/<[^>]+>/g, ' ')
      .replace(/[*_]{1,3}(\S[^*_]*?)[*_]{1,3}/g, '$1')
      .replace(/^\s{0,3}#{1,6}\s+/gm, '')
      .replace(/\{#[^}]*\}/g, '')
      .replace(/^\s*[-+*]\s+/gm, '')
      .replace(/^\s*\d+\.\s+/gm, '')
      .replace(/\|/g, ' ');
  }

  function normalizeText(s) {
    s = String(s || '');
    if (s.normalize) s = s.normalize('NFKC');
    return s.toLowerCase().replace(/\s+/g, ' ');
  }

  // 同義語の正規表現は作るのに時間がかかるので、同義語の表ごとに 1 回だけ作って使い回す
  var _synFor = null, _synRe = null;
  function synonymRegexes(synonyms) {
    if (_synFor !== synonyms) {
      _synFor = synonyms;
      _synRe = synonyms.map(function (p) {
        return [new RegExp(p[0].replace(/[\\{}|]/g, '\\$&') + '(?![A-Za-z])', 'g'), p[1]];
      });
    }
    return _synRe;
  }
  function normalizeTex(tex, synonyms, macros) {
    var s = String(tex || '');
    if (s.normalize) s = s.normalize('NFKC');
    // 装飾・空白の除去
    s = s.replace(/\\(left|right|big|Big|bigg|Bigg)(l|r|m)?(?![A-Za-z])/g, '')
      .replace(/\\(displaystyle|textstyle|scriptstyle|limits|nolimits)(?![A-Za-z])/g, '')
      .replace(/\\[,;:! ]/g, '').replace(/\\q?quad(?![A-Za-z])/g, '').replace(/~/g, '');
    // マクロ展開（引数なしのもののみ）
    if (macros) {
      s = s.replace(/\\[A-Za-z]+/g, function (m) {
        var v = macros[m];
        return (v && v.indexOf('#') < 0) ? v : m;
      });
    }
    // \operatorname{Hom}, \mathrm{d} などは中身だけにする
    s = s.replace(/\\(operatorname\*?|mathrm|text|textrm|textup|mbox|mathit|textit)\s*\{([^{}]*)\}/g, '$2');
    // 同義語
    if (synonyms) {
      synonymRegexes(synonyms).forEach(function (p) { s = s.replace(p[0], p[1]); });
    }
    s = s.replace(/\s+/g, '');
    // 1 文字・1 コマンドだけを囲む波括弧を外す: a_{n} -> a_n
    var prev;
    do { prev = s; s = s.replace(/\{(\\[A-Za-z]+|[^{}\\])\}/g, '$1'); } while (s !== prev);
    return s;
  }

  // 生の原稿テキストを「本文テキスト」と「数式の配列」に分ける
  function splitForSearch(raw) {
    var ex = extractMath(raw);
    var text = ex.text.replace(new RegExp(MATH_OPEN + '(\\d+)' + MATH_CLOSE, 'g'), ' ')
      .replace(new RegExp(REF_OPEN + '(\\d+)' + REF_CLOSE, 'g'), ' ');
    return { text: stripMarkdown(text), maths: ex.maths.map(function (m) { return m.tex; }) };
  }

  /* ------------------------------------------------------------------ *
   * 描画（marked と katex を注入して使う）
   * ------------------------------------------------------------------ */
  function createRenderer(opts) {
    var marked = opts.marked, katex = opts.katex, macros = opts.macros || {};
    var envs = opts.envs;
    var resolve = opts.resolveRef || function () { return null; };
    var onMathError = opts.onMathError || function () {};
    var headingCount = 0, envCount = 0;

    var mk = new marked.Marked({ gfm: true, breaks: false });
    mk.use({
      renderer: {
        heading: function (tok) {
          var html = this.parser.parseInline(tok.tokens);
          var id = null;
          var m = /\s*\{#([^\s{}]+)\}\s*$/.exec(html);
          if (m) { id = m[1]; html = html.slice(0, m.index); }
          if (!id) id = 'sec-' + (++headingCount);
          return '<h' + tok.depth + ' id="' + escapeHtml(id) + '" class="mn-h">' + html +
            '<a class="mn-anchor" href="#' + escapeHtml(id) + '" aria-label="この見出しへのリンク">#</a></h' + tok.depth + '>\n';
        },
        // コードブロック：```svg（図）と ```python（プログラムの表示）を特別に扱う
        code: function (tok) {
          var info = String(tok.lang || '').trim(), lang = info.split(/\s+/)[0].toLowerCase();
          var caption = info.slice(lang.length).trim();
          if (lang === 'svg') return figureHtml(tok.text, caption);
          if (lang === 'python' || lang === 'py') return pythonHtml(tok.text, caption);
          return false;   // それ以外は marked の既定の描画
        }
      }
    });

    // 図（インライン SVG）。原稿に書けるのは SVG の図形だけにし、スクリプトなどは取り除く。
    function sanitizeSvg(src) {
      var t = String(src);
      t = t.replace(/<\s*(script|foreignObject|iframe|object|embed|style)[\s\S]*?<\s*\/\s*\1\s*>/gi, '');
      t = t.replace(/<\s*(script|foreignObject|iframe|object|embed|style)[^>]*\/?>/gi, '');
      t = t.replace(/\son[a-z]+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, '');
      t = t.replace(/(href|xlink:href)\s*=\s*("\s*javascript:[^"]*"|'\s*javascript:[^']*')/gi, '');
      var a = t.search(/<svg[\s>]/i), b = t.lastIndexOf('</svg>');
      if (a < 0 || b < a) return '';
      return t.slice(a, b + 6);
    }
    function figureHtml(src, caption) {
      var svg = sanitizeSvg(src);
      if (!svg) return '<pre><code>' + escapeHtml(src) + '</code></pre>';
      return '<figure class="mn-fig">' + svg + (caption ? '<figcaption>' + renderInline(caption) + '</figcaption>' : '') + '</figure>\n';
    }
    // Python 風の表示（キーワード・コメント・数の簡単な色分けだけ）
    var PY_KW = /^(for|while|if|elif|else|in|range|def|return|and|or|not|pass|break|True|False|None)$/;
    function pythonHtml(src, caption) {
      var out = '', re = /(#[^\n]*)|([A-Za-z_][A-Za-z_0-9]*)|(\d+)|([\s\S])/g, m;
      while ((m = re.exec(src))) {
        if (m[1]) out += '<span class="mn-tok-com">' + escapeHtml(m[1]) + '</span>';
        else if (m[2]) out += PY_KW.test(m[2]) ? '<span class="mn-tok-kw">' + m[2] + '</span>' : escapeHtml(m[2]);
        else if (m[3]) out += '<span class="mn-tok-num">' + m[3] + '</span>';
        else out += escapeHtml(m[4]);
      }
      return '<figure class="mn-code">' + (caption ? '<figcaption>' + renderInline(caption) + '</figcaption>' : '') +
        '<pre class="mn-code-py"><code>' + out.replace(/\n$/, '') + '</code></pre></figure>\n';
    }

    function renderTex(m) {
      var tex = m.tex;
      if (m.display && m.num) tex = tex + '\\tag{' + m.num + '}';
      try {
        var html = katex.renderToString(tex, {
          displayMode: m.display, throwOnError: true, macros: Object.assign({}, macros),
          strict: 'ignore', trust: false
        });
        if (m.display && m.label) html = '<span class="mn-eq-anchor" id="' + escapeHtml(m.label) + '"></span>' + html;
        return html;
      } catch (err) {
        onMathError(err, m);
        return '<span class="mn-math-error" title="' + escapeHtml(err.message) + '">' + escapeHtml(tex) + '</span>';
      }
    }

    // 項目参照：\ref{ラベル.N} は、ラベルの環境の中の番号つき箇条書きの N 番目（アンカー ラベル.N）を指す
    var onItemRef = opts.onItemRef || function () {};
    function renderRef(r) {
      var im = ITEM_REF.exec(r.label), item = null;
      if (im) { item = im[2]; r = { cmd: r.cmd, label: im[1], text: r.text, item: item }; onItemRef(im[1], item); }
      var info = resolve(r.label, r);
      if (!info) {
        if (r.text) return '<span class="mn-xref-planned" data-label="' + escapeHtml(r.label) + '" title="未執筆（ラベル ' + escapeHtml(r.label) + '）">' + renderInline(r.text) + '</span>';
        return '<span class="mn-ref-missing" title="未定義のラベル">??' + escapeHtml(r.label) + '</span>';
      }
      // \term[語]{ラベル}：用語リンク（自動の用語リンクと同じ見た目）。同じ語が文脈で別の意味になるとき（「次元」がクルル次元か
      // ベクトル空間の次元か、など）に、出現ごとに定義を指定する。被参照リストには数えない
      if (r.cmd === 'term' && !info.planned) {
        return '<a class="mn-xref mn-term" href="' + escapeHtml(info.href) + '" data-label="' + escapeHtml(r.label) + '">' + renderInline(r.text || info.title || r.label) + '</a>';
      }
      if (info.planned) {
        return '<span class="mn-xref-planned" data-label="' + escapeHtml(r.label) + '" title="未執筆（ラベル ' + escapeHtml(r.label) + '）。書かれると自動でリンクになります">' +
          renderInline(r.text || info.title || r.label) + '</span>';
      }
      var text;
      var tname = info.typeName || '';
      if (r.cmd === 'eqref') text = '(' + info.num + ')';
      else if (r.cmd === 'numref') text = info.num || info.title;
      else if (r.cmd === 'nameref') text = info.title || (tname + ' ' + info.num);
      else if (r.cmd === 'fullref') text = (info.prefix || '') + tname + ' ' + info.num + (info.title ? '（' + info.title + '）' : '');
      else if (r.text) text = r.text;
      // 有名な定理・頻出の補題は番号でなく名前で表示する（属性 refname）。\tref は名前を持つ項目でも「種類 番号」で表示する（直前に名前を書いたとき用）
      // refscope="field"（参照が多いだけで、名前が分野の文脈に頼るもの）は、他の分野からの参照では番号で表示する
      else if (info.refname && r.cmd !== 'tref' && !(info.refscope === 'field' && info.otherField)) text = info.refname;
      else if (!info.num && info.type !== 'equation' && info.type !== 'section' && info.type !== 'page') text = info.title || tname;
      else {
        if (info.type === 'equation') text = '(' + info.num + ')';
        else if (info.type === 'section' || info.type === 'page') text = info.title;
        else text = (info.prefix || '') + tname + ' ' + info.num;
      }
      var href = info.href;
      if (item) {
        var key = /^\d+$/.test(item) ? item : '(' + item + ')';
        if (!r.text && r.cmd !== 'eqref') text += (text === info.refname ? ' ' : ' の ') + key;
        var hash = '#' + r.label;
        if (href.slice(-hash.length) === hash) href = href + '.' + item;
      }
      var titleHtml = /[$\\]/.test(text) ? renderInline(text) : escapeHtml(text);
      return '<a class="mn-xref' + (info.external ? ' mn-xref--ext' : '') +
        '" data-type="' + escapeHtml(info.type) + '" href="' + escapeHtml(href) + '" data-label="' + escapeHtml(r.label) + '"' +
        (item ? ' data-item="' + item + '"' : '') + '>' + titleHtml + '</a>';
    }

    function restore(html, ex) {
      html = html.replace(new RegExp(MATH_OPEN + '(\\d+)' + MATH_CLOSE, 'g'), function (_, k) {
        return renderTex(ex.maths[+k]);
      });
      html = html.replace(new RegExp(REF_OPEN + '(\\d+)' + REF_CLOSE, 'g'), function (_, k) {
        return renderRef(ex.refs[+k]);
      });
      return html;
    }

    var SHORT = { yes: ['mn-yes', '○', '成り立つ'], no: ['mn-no', '×', '成り立たない'], partial: ['mn-partial', '△', '条件付き'], open: ['mn-partial', '?', '未解決'] };
    function shortcodes(t) {
      return t.replace(/:(yes|no|partial|open):/g, function (_, k) {
        var d = SHORT[k]; return '<span class="' + d[0] + '" title="' + d[2] + '">' + d[1] + '</span>';
      });
    }
    function renderMarkdown(text, ex) {
      ex = ex || extractMath(text);
      return restore(mk.parse(shortcodes(ex.text)), ex);
    }
    function renderInline(text) {
      var ex = extractMath(text);
      return restore(mk.parseInline(shortcodes(ex.text)), ex);
    }

    function envHead(node, def) {
      var h = '<span class="mn-env-name">' + escapeHtml(def.name) +
        (node.num ? ' <span class="mn-env-num">' + escapeHtml(node.num) + '</span>' : '') + '</span>';
      if (node.title) h += ' <span class="mn-env-title">（' + renderInline(node.title) + '）</span>';
      else if (def.attached && !def.minor && node.type !== 'hypcheck' && node.of && node.of.num) {
        var ofDef = envs[node.of.type] || { name: '' };
        h += ' <span class="mn-env-of">（' + escapeHtml(ofDef.name + ' ' + node.of.num) + '）</span>';
      }
      if (!def.fold) h += '.';
      return h;
    }

    // 環境の直下の番号つき箇条書き（入れ子でないもの）の各項目に id「ラベル.N」を付ける（N は表示される番号）
    // 項目は 3 つの書き方を認める：番号つき箇条書き「1. …」（キーは番号）、箇条書き「- (a) …」、段落の頭の「(1) …」「**(a) …**」
    // （キーは括弧の中：数字・英小文字 1 字・ローマ数字）。
    function addItemIds(html, label, seen) {
      var depth = 0, stack = [], out = '', last = 0, re = /<(\/?)(ol|ul|li|p)\b([^>]*)>/g, m;
      function put(tag, key, attrs) {
        var id = label + '.' + key;
        if (seen[id] || /\bid=/.test(attrs)) return;
        seen[id] = 1;
        out += html.slice(last, m.index) + '<' + tag + ' id="' + escapeHtml(id) + '" class="mn-item"' + attrs + '>';
        last = re.lastIndex;
      }
      while ((m = re.exec(html))) {
        var close = m[1] === '/', tag = m[2];
        if (tag === 'ol' || tag === 'ul') {
          if (!close) { depth++; var st = /\bstart="(\d+)"/.exec(m[3]); stack.push({ tag: tag, n: st ? +st[1] - 1 : 0 }); }
          else { depth--; stack.pop(); }
          continue;
        }
        if (close) continue;
        var km = ITEM_HEAD.exec(html.slice(re.lastIndex, re.lastIndex + 40));
        if (tag === 'li' && depth === 1 && stack[0] && stack[0].tag === 'ol') put('li', ++stack[0].n, m[3]);
        else if (tag === 'li' && depth === 1 && stack[0] && km) put('li', km[1], m[3]);
        else if (tag === 'p' && depth === 0 && km) put('p', km[1], m[3]);
      }
      return last ? out + html.slice(last) : html;
    }

    // 「意図・直感」は直前の定義・定理などの枠の中に入れて表示する
    function renderNodes(nodes) {
      var out = [];
      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        if (node.kind === 'env' && node.type !== 'restate' && !(envs[node.type] || {}).attached) {
          var intu = [];
          while (i + 1 < nodes.length && nodes[i + 1].kind === 'env' && nodes[i + 1].type === 'intuition') intu.push(nodes[++i]);
          node._intu = intu;
        }
        out.push(renderOne(node));
      }
      return out.join('');
    }
    function renderOne(node) {
      {
        if (node.kind === 'md') {
          var mdHtml = renderMarkdown(node.text, node._ex);
          return node._itemOf ? addItemIds(mdHtml, node._itemOf.label, node._itemOf.seen) : mdHtml;
        }
        var def = envs[node.type] || { name: node.type, num: false, kind: 'rem' };
        envCount++;
        if (node.type === 'restate') {
          var t = node.target;
          if (!t) return '<div class="mn-env" data-kind="rem"><span class="mn-ref-missing">再掲の対象ラベル ??' + escapeHtml(node.targetLabel || '') + '</span></div>';
          var tdef = envs[t.type] || def;
          var saveH = headingCount, saveE = envCount;
          var tbody = renderNodes(t.children);
          headingCount = saveH; envCount = saveE;
          return '<div class="mn-env mn-restate" id="restate-' + escapeHtml(t.label || '') + '" data-env="' + escapeHtml(t.type) + '" data-kind="' + escapeHtml(tdef.kind) + '">' +
            '<div class="mn-env-head">' + envHead(t, tdef) + ' <span class="mn-restate-tag">再掲</span>' +
            (t.label ? ' <a class="mn-restate-back" href="#' + escapeHtml(t.label) + '">最初の主張へ ↑</a>' : '') + '</div>' +
            '<div class="mn-env-body">' + tbody + '</div></div>\n';
        }
        var id = ' id="' + escapeHtml(node.label || ('env-' + envCount)) + '"';
        var cls = 'mn-env' + (node.attrs && node.attrs.classes.length ? ' ' + node.attrs.classes.map(function (c) { return 'mn-u-' + escapeHtml(c); }).join(' ') : '');
        var labelChip = node.label ? '<button class="mn-label" data-copy="\\ref{' + escapeHtml(node.label) +
          '}" title="クリックで \\ref{' + escapeHtml(node.label) + '} をコピー">' + escapeHtml(node.label) + '</button>' : '';
        var kids = node.children, tail = [];
        if (node.type === 'proof') {
          // 末尾の「前提条件の使用箇所」は ∎ の後ろに置く
          while (kids.length && kids[kids.length - 1].kind === 'env' && kids[kids.length - 1].type === 'hypcheck') {
            tail.unshift(kids[kids.length - 1]); kids = kids.slice(0, -1);
          }
        }
        if (node.label) {
          var itemOf = { label: node.label, seen: {} };
          kids.forEach(function (k) { if (k.kind === 'md') k._itemOf = itemOf; });
        }
        var body = renderNodes(kids);
        if (node.type === 'proof') {
          if (/<\/p>\s*$/.test(body)) body = body.replace(/<\/p>\s*$/, '<span class="mn-qed" aria-label="証明終わり">∎</span></p>\n');
          else body += '<p class="mn-qed-line"><span class="mn-qed" aria-label="証明終わり">∎</span></p>';
          body += renderNodes(tail);
        }
        var attrs = id + ' data-env="' + escapeHtml(node.type) + '" data-kind="' + escapeHtml(def.kind) + '"' + (def.minor ? ' data-minor="1"' : '');
        var back = node.label ? '<div class="mn-backrefs" data-for="' + escapeHtml(node.label) + '"></div>' : '';
        if (node._intu && node._intu.length) back = '<div class="mn-env-inner">' + node._intu.map(renderOne).join('') + '</div>' + back;
        if (def.fold) {
          return '<details class="' + cls + ' mn-fold"' + attrs + '>' +
            '<summary class="mn-env-head">' + envHead(node, def) + '<span class="mn-fold-hint" aria-hidden="true"></span>' + labelChip + '</summary>' +
            '<div class="mn-env-body">' + body + '</div>' + back + '</details>\n';
        }
        return '<div class="' + cls + '"' + attrs + '>' +
          '<div class="mn-env-head">' + envHead(node, def) + labelChip + '</div>' +
          '<div class="mn-env-body">' + body + '</div>' + back + '</div>\n';
      }
    }

    return {
      renderNodes: renderNodes, renderMarkdown: renderMarkdown, renderInline: renderInline,
      renderTex: renderTex, resetCounters: function () { headingCount = 0; envCount = 0; }
    };
  }

  /* ---------- 用語のリンク ----------
   * termDefs：用語 -> 定義のラベルの配列（build.js が定義・構成・公理の索引語から作る）。
   * scan(text) は本文から用語の出現を左から最長一致で探し、pick(term, ページ番号) はどの定義に結ぶかを決める。
   *   同じページ → 同じ系列 → 同じ第 2 階層 → 同じ分野（この 3 つはサイトの並びでこのページより前のページの定義だけ）
   *   → このページが（2 段以内で）前提にしているページ。
   *   どれにも当たらなければ結ばない（別分野の同名の語、例えば準同型の「グラフ」を圏論の「グラフ」に結ばないため）。
   * 「定理」「仮定」のような一般的すぎる語は除く。 */
  // 項目参照 \ref{ラベル.キー}（キーは番号・英小文字 1 字・ローマ数字）と、HTML の段落・項目の頭の「(キー)」
  var ITEM_REF = /^(.+)\.(\d+|[a-z]|[ivx]+)$/;
  var ITEM_HEAD = /^\s*(?:<strong>)?\s*[(（](\d+|[a-z]|[ivx]+)[)）]/;
  var TERM_STOP = {};
  ('定理 公理 仮定 変数 言語 構造 解釈 同値 高さ 領域 否定 略記 項数 証拠 解消 矛盾 様相 定義 記号 演算 関係 写像 関数 集合 性質 条件 命題 補題 ' +
   '自然 標準 自明 有限 無限 完全 分離 導出 妥当 充足 モデル 極大 極小 部分 全体 成分 次数 長さ 大きさ 個数 作用 生成 拡大 分解 表現 同型 順序 ' +
   '証明 推論 計算 定数 関数記号 述語 理論 体系 対象 射 構成 拡張 制限 埋め込み 同一視 対応 等しい 一致 存在 一意 因子 分割 小さい 大きい 境界 閉じている 閉じた 規則 ' +
   // 日常語として地の文に頻出し、リンクにすると邪魔な語（2026-10-22 ユーザー指摘）
   'すべての 満たす 存在する 交わる 交わらない 内容 符号 記述 適用 表示 内部 外部 強い 弱い 粗い 名前 計算する 定義する 最小 最小の 最大 最大の ' +
   'ちょうど一つ 一対一 等式 単位 近似 独立 状態 覆う 張る 勝つ 死ぬ 移動 並び 適切 有効 深さ 判断 形成 候補 翻訳 実現 文脈 サイト 包含 世界 真理 ' +
   '実数 素数 剰余 後者 前者 指数 中心 代数 置換 向き 双対 図式 一様 単純 特性 年齢 宇宙 燃料 命令 走行 受理 拒否 停止 収穫 整除 正しい 導ける ただ一通りに パラメータ 代数的 持ち上げ').split(' ').forEach(function (w) { TERM_STOP[w] = 1; });
  var TERM_PREFIX = '冪非半準反余双逆単不無超亜擬';
  // 基礎の系列：ここで定義された語（単射・部分集合・選択公理・コンパクト・関手など）は、どの分野のページからでも結ぶ。
  // 2 文字の語は語の一部に当たりやすいので、TERM_BASE_SHORT にあるものだけ。候補が複数あれば分類番号の近い分野を選ぶ。
  var TERM_BASE = ['03-mathematical-logic/03E-set-theory/01-basics/', '54-general-topology/54A-generalities/',
    '54-general-topology/54D-general-properties/01-separation-compactness/', '26-real-functions/26A-functions-of-one-variable/',
    '15-linear-algebra/15A-basic-linear-algebra/', '26-real-functions/26B-functions-of-several-variables/01-multivariable-calculus/',
    '55-algebraic-topology/55P-homotopy-theory/01-fundamental-group/', '18-category-theory/18G-homological-algebra/01-abelian-categories/', '20-group-theory/20K-abelian-groups/', '20-group-theory/20A-foundations/01-groups/',
    '13-commutative-algebra/13A-general-commutative-ring-theory/01-basics/', '16-associative-rings/16D-modules/01-module-theory/',
    '18-category-theory/18A-general-theory/01-basics/', '12-field-theory/12F-field-extensions/01-extensions/'];
  var TERM_BASE_SHORT = {};
  '単射 全射 関手 基底 次元 加群 連続 直積 直和 逆像 閉包 近傍 有界 上限 下限 上界 下界 可算 同相 距離 位数 整域 標数'.split(' ').forEach(function (w) { TERM_BASE_SHORT[w] = 1; });
  // 他の分野の定義へ結ぶと意味が違うもの（2026-10-22 に分野をまたぐ用語リンク 628 組を確認して決めた）。
  // 「ラベル#語」→ 結ばない分野（ディレクトリの第 1 階層の番号。'*' はその定義の分野以外すべて）。同じ分野の中では常に結ぶ。
  var TERM_XF_DENY = {
    'cat:graph#グラフ': '*', 'cat:subobject#共通部分': '*', 'cat:category#定義域': '*', 'cat:preserve-limits#連続': '*',
    'calc:function-limit#連続': '*', 'calc:function-limit#連続関数': '13 14 18 30 54 55', 'set:transitive-set#推移的': '*',
    'set:rank#ランク': '*', 'at:covering#ファイバー': '03 11 12 13 14 16 18 20 54', 'lin:inner-product#ノルム': '11 12 13 18 20',
    'lin:eigen-def#トレース': '03 11 12', 'grp:gcd#互いに素': '18 54 55', 'ring:ideal-sum-product#互いに素': '03',
    'ha:homology#サイクル': '12 16 20 26', 'mod:ring-presentation#コード': '*', 'calc:pullback#引き戻し': '*',
    'cat:monoid-object#準同型': '*', 'set:finitary-closure#閉包': '*', 'set:cofinal-map#非有界': '*', 'set:order-isomorphism#自己同型': '*',
    'set:order-isomorphism#同型写像': '*', 'ring:degree#位数': '*', 'grp:abelian-group#位数': '26 30', 'calc:differential-form#k 形式': '*',
    'calc:differential-form#微分形式': '11 12 13 14 18', 'ag:algebraic-set#イデアル': '*', 'cat:etale-topology-ring#エタール': '*',
    'lin:adjoint#エルミート': '03 11', 'calc:trig-functions#オイラーの公式': '*', 'set:class#クラス': '12 13 26 54',
    'ag:scheme-properties-def#ネーター': '*', 'set:boolean-algebra#交わり': '*', 'ring:gcd-content#原始的': '*',
    'grp:free-abelian#基底': '*', 'calc:cauchy-construction#完備化': '11 12 14 16 18', 'ring:formal-derivative#導関数': '*',
    'ring:local-property-def#局所的': '*', 'calc:general-power#指数法則': '*', 'ring:normal-domain#正規化': '15',
    'set:free-bound-variable#自由変数': '15', 'top:adjunction-space#貼り合わせ': '18', 'fld:separable-polynomial#分離的': '55',
    'cat:reflective-subcategory#反射的': '03 54', 'cat:category#結合律': '03 20', 'ag:weil-divisor#素因子': '*',
    'ag:divisor-class-group#主因子': '*', 'grp:direct-product#直積': '26 54 55', 'mod:direct-sum#直積': '26 54 55', 'grp:element-order#位数': '26 30'
  };
  // 自動では結ばない語と分野：同じ分野の中で意味が文脈によって変わる語。原稿で出現ごとに \term[語]{ラベル} で指定する。
  // 値は分野番号の並び。'!' で始まるときは「その分野以外すべて」（2026-10-22 ユーザー指示：次元・部分空間はその都度確認）
  var TERM_NO_AUTO = { '次元': '13 14', '部分空間': '!15 54', '互いに素': '20', '位数': '30' };
  function noAuto(term, f) {
    var d = TERM_NO_AUTO[term]; if (!d) return false;
    var hit = (' ' + d.replace(/^!/, '') + ' ').indexOf(' ' + f + ' ') >= 0;
    return d.charAt(0) === '!' ? !hit : hit;
  }
  function isBase(dir) { return TERM_BASE.some(function (b) { return String(dir || '').indexOf(b) === 0; }); }
  function createTermLinker(termDefs, labels, pages) {
    // 動詞・形容詞の形の語（「矛盾する」「自由である」「すべての」など）も地の文に紛れるので結ばない
    var keys = Object.keys(termDefs || {}).filter(function (t) { return !TERM_STOP[t] && !/^[(（]/.test(t) && !/(する|である|ない|の|な)$/.test(t); })
      .sort(function (a, b) { return b.length - a.length; });
    var re = keys.length ? new RegExp(keys.map(function (k) { return k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }).join('|'), 'g') : null;
    function second(dir) { return String(dir || '').split('/').slice(0, 2).join('/'); }
    function field(dir) { return String(dir || '').split('/')[0]; }
    function denied(l, term, P, Q) {
      var d = TERM_XF_DENY[l + '#' + term], f = field(P.dir);
      return !!d && f !== field(Q.dir) && (d === '*' || (' ' + d + ' ').indexOf(' ' + f.split('-')[0] + ' ') >= 0);
    }
    // 候補（拒否されたものを除く）。プレビューで「ほかの分野の定義」として並べるのにも使う
    function candidates(term, pageIdx) {
      var P = pages[pageIdx];
      return (termDefs[term] || []).map(function (l) { return { l: l, p: labels[l] ? labels[l].p : null }; })
        .filter(function (x) { return x.p != null && pages[x.p] && !(P && denied(x.l, term, P, pages[x.p])); });
    }
    function pick(term, pageIdx, depSet) {
      var cands = termDefs[term]; if (!cands) return null;
      var short = term.length <= 2, P = pages[pageIdx];
      if (P && noAuto(term, field(P.dir).split('-')[0])) return null;
      var info = candidates(term, pageIdx);
      if (P) {
        var tiers = [
          function (x) { return x.p === pageIdx; },
          function (x) { return x.p < pageIdx && pages[x.p].dir === P.dir; },
          function (x) { return x.p < pageIdx && second(pages[x.p].dir) === second(P.dir); },
          function (x) { return x.p < pageIdx && field(pages[x.p].dir) === field(P.dir); },
          function (x) { return !short && !!(depSet && depSet[x.p]); }
        ];
        for (var i = 0; i < tiers.length; i++) {
          var hit = info.filter(tiers[i]);
          if (hit.length) return hit.sort(function (a, b) { return a.p - b.p; })[0].l;
        }
        // 基礎の系列の定義。候補が複数あれば、題にその語をそのまま含む定義（その語が主題の定義）を優先し、
        // それでも複数あれば分類番号の近い分野を選ぶ
        if (!short || TERM_BASE_SHORT[term]) {
          var fn = parseInt(field(P.dir), 10) || 0;
          var base = info.filter(function (x) { return isBase(pages[x.p].dir); });
          var titled = base.filter(function (x) { return String(labels[x.l].ti || '').indexOf(term) >= 0; });
          if (titled.length) base = titled;
          if (base.length) return base.sort(function (a, b) {
            return Math.abs((parseInt(field(pages[a.p].dir), 10) || 0) - fn) - Math.abs((parseInt(field(pages[b.p].dir), 10) || 0) - fn) || a.p - b.p;
          })[0].l;
        }
      }
      return null;
    }
    // ページどうしの前提（backrefs のうち主張・証明・記法の欄からの参照）から、pageIdx が steps 段以内で前提にするページの集合を作る
    var fwdCache = null, fwdOf = null;
    function pageDeps(backrefs, pageIdx, steps) {
      if (fwdOf !== backrefs) { fwdCache = pageFwd(backrefs); fwdOf = backrefs; }
      var fwd = fwdCache;
      var set = {}, frontier = [pageIdx];
      for (var k = 0; k < (steps || 2); k++) {
        var next = [];
        frontier.forEach(function (i) { Object.keys(fwd[i] || {}).forEach(function (j) { j = +j; if (!set[j] && j !== pageIdx) { set[j] = 1; next.push(j); } }); });
        frontier = next;
      }
      return { set: set, fwd: fwd };
    }
    function pageFwd(backrefs) {
      var fwd = {};
      Object.keys(backrefs || {}).forEach(function (target) {
        var T = labels[target]; if (!T) return;
        backrefs[target].forEach(function (b) {
          var role = b[4] || '';
          if ((role === 's' || role === 'p' || role === 'n') && b[0] !== T.p) (fwd[b[0]] = fwd[b[0]] || {})[T.p] = 1;
        });
      });
      return fwd;
    }
    function scan(text) {
      var out = [];
      if (!re || !text) return out;
      re.lastIndex = 0;
      var m;
      while ((m = re.exec(text))) {
        // 直前が意味を変える接頭の字（冪零・非可換・半単純・準同型・単連結・余核・双対…）なら、語の一部なので結ばない
        // （例：「冪零イデアル」の中の「零イデアル」、「非可換」の中の「可換」）
        if (m.index > 0 && TERM_PREFIX.indexOf(text.charAt(m.index - 1)) >= 0) { re.lastIndex = m.index + 1; continue; }
        out.push({ i: m.index, len: m[0].length, term: m[0] });
      }
      return out;
    }
    // プレビューで選べる「ほかの定義」：同じ分野の定義と基礎の系列の定義だけ（遠い分野の同名の別概念は出さない）
    function alternatives(term, pageIdx, chosen) {
      var P = pages[pageIdx];
      return candidates(term, pageIdx).filter(function (x) {
        return x.l !== chosen && (field(pages[x.p].dir) === field(P.dir) || isBase(pages[x.p].dir));
      }).map(function (x) { return x.l; });
    }
    return { scan: scan, pick: pick, candidates: candidates, alternatives: alternatives, pageDeps: pageDeps, size: keys.length };
  }

  return {
    parseBlocks: parseBlocks, extractMath: extractMath, numberTree: numberTree,
    createRenderer: createRenderer, splitForSearch: splitForSearch,
    normalizeText: normalizeText, normalizeTex: normalizeTex, stripMarkdown: stripMarkdown,
    escapeHtml: escapeHtml, REF_CMDS: REF_CMDS, createTermLinker: createTermLinker, ITEM_REF: ITEM_REF, TERM_NO_AUTO: TERM_NO_AUTO,
    MATH_OPEN: MATH_OPEN, MATH_CLOSE: MATH_CLOSE
  };
});
