#!/usr/bin/env node
/*
 * tools/build.js — サイトのビルド & 検査
 *
 *   node tools/build.js            ビルド（ページの外枠の正規化、索引 site-index.js、各フォルダの index.html を生成）
 *   node tools/build.js --check    ビルドせずに検査のみ（ラベル重複・未定義参照・KaTeX エラー）
 *   node tools/build.js --quiet    警告の詳細を省略
 *   node tools/build.js --only 06-topology   指定フォルダ以下の問題だけ報告（ビルドは全体）
 *
 * 依存: Node.js のみ（vendor/ の KaTeX と marked を読み込む）。
 */
'use strict';
var fs = require('fs');
var path = require('path');

var ROOT = path.resolve(__dirname, '..');
var CONFIG = require(path.join(ROOT, 'config.js'));
var Core = require(path.join(ROOT, 'site-core.js'));
var katex = require(path.join(ROOT, 'vendor/katex/katex.min.js'));
var marked = require(path.join(ROOT, 'vendor/marked.min.js'));

var args = process.argv.slice(2);
var CHECK_ONLY = args.indexOf('--check') >= 0;
var QUIET = args.indexOf('--quiet') >= 0;
var ONLY = (function () { var i = args.indexOf('--only'); return i >= 0 ? args[i + 1] : null; })();

var SKIP_DIRS = { vendor: 1, tools: 1, node_modules: 1, assets: 1, learn: 1, api: 1, pv: 1, 'search-body': 1 };
var SOURCE_RE = /<script type="text\/markdown" id="source">([\s\S]*?)<\/script>/;

function readJSON(p) { try { return JSON.parse(fs.readFileSync(p, 'utf8')); } catch (e) { return null; } }
function posix(p) { return p.split(path.sep).join('/'); }
function stripPrefix(name) { return name.replace(/^\d+[-_]/, '').replace(/\.html$/, ''); }

/* ---------------- 1. ツリーを走査 ---------------- */
var pages = [];   // {path, abs, dir, title, sec, src}
function walkDir(absDir, relDir, depth) {
  var meta = readJSON(path.join(absDir, '_meta.json')) || {};
  var node = {
    kind: 'dir', path: relDir ? relDir + '/' : '', name: path.basename(absDir),
    title: meta.title || (relDir ? stripPrefix(path.basename(absDir)) : CONFIG.SITE_TITLE),
    abbr: meta.abbr || meta.title || stripPrefix(path.basename(absDir)),
    en: meta.en || '', description: meta.description || '', intro: meta.intro || '',
    msc: meta.msc || '', id: meta.id || '', prereq: meta.prereq || [], groups: meta.groups || null, also: meta.also || [], alsoKids: [], alsoIn: [], children: [],
    // transparent：表示上この階層を飛ばし、子を親の直下に並べる（住所は MSC のまま）。order：兄弟フォルダの表示順（小さいほど先。省略は名前順の後）
    transparent: !!meta.transparent, order: typeof meta.order === 'number' ? meta.order : null,
    // field：分野（第 2 階層）の分類番号（MSC の 2 桁。"03" など）。用語リンクの規則（tools/terms.json の @03 など）で使う
    field: meta.field || '',
    // aliases：検索で分類名として引く別名（例：代数的位相幾何学 → 代数トポロジー）。2026-10-23 ユーザー指示
    aliases: meta.aliases || []
  };
  var entries = fs.readdirSync(absDir, { withFileTypes: true })
    .filter(function (e) { return e.name.charAt(0) !== '.' && e.name.charAt(0) !== '_'; })
    .sort(function (a, b) { return a.name.localeCompare(b.name, 'en', { numeric: true }); });
  var sec = 0;
  entries.forEach(function (e) {
    var abs = path.join(absDir, e.name);
    var rel = relDir ? relDir + '/' + e.name : e.name;
    if (e.isDirectory()) {
      if (depth === 0 && SKIP_DIRS[e.name]) return;
      node.children.push(walkDir(abs, rel, depth + 1));
    } else if (depth > 0 && /\.html$/.test(e.name) && e.name !== 'index.html') {
      var html = fs.readFileSync(abs, 'utf8');
      var m = SOURCE_RE.exec(html);
      if (!m) { warn(rel, 'ページ原稿 <script type="text/markdown" id="source"> がありません（スキップ）'); return; }
      sec++;
      var pg = { path: rel, abs: abs, dirNode: node, sec: sec, src: unescapeSource(m[1]) };
      pg.idx = pages.length; pages.push(pg);
      node.children.push({ kind: 'page', idx: pg.idx });
    }
  });
  // order の指定があるフォルダは表示順を変える（指定のないものは名前順のまま後ろに）
  if (node.children.some(function (c) { return c.kind === 'dir' && c.order !== null; })) {
    var dirs = node.children.filter(function (c) { return c.kind === 'dir'; });
    var ord = function (c) { return c.order === null ? Infinity : c.order; };
    dirs = dirs.map(function (c, i) { return [c, i]; }).sort(function (a, b) { return (ord(a[0]) - ord(b[0])) || (a[1] - b[1]); }).map(function (x) { return x[0]; });
    var di = 0;
    node.children = node.children.map(function (c) { return c.kind === 'dir' ? dirs[di++] : c; });
  }
  return node;
}

// 原稿内に </script> を書きたい場合は <\/script> と書く
function unescapeSource(s) { return s.replace(/^\n/, '').replace(/\s+$/, '') + '\n'; }

var problems = [];
function warn(where, msg) { problems.push({ where: where, msg: msg }); }

var tree = walkDir(ROOT, '', 0);

// 表示の簡略化：ページを直接もたず、子フォルダが 1 つだけのフォルダの、その子に solo 印を付ける。
// solo のフォルダはメニューとパンくずで飛ばす（住所・ラベル・概要ページはそのまま）。
(function markSolo(node, isRoot) {
  var subs = node.children.filter(function (c) { return c.kind === 'dir'; });
  var hasLeaf = node.children.some(function (c) { return c.kind === 'page'; });
  // ページのない（空の）子フォルダは数えない（メニュー・検索の分野選択でも出さないため）
  var full = subs.filter(function (c) { return countPages(c) > 0; });
  // 2026-10-22：ディレクトリの構成をそのまま表示に使うことにしたので、子が一つでも飛ばさない（ユーザー指示）
  // _meta.json の "transparent": true のフォルダも同じ仕組みで飛ばす（子が複数あっても、子をすべて親の直下に並べる）
  full.forEach(function (c) { if (c.transparent) c.solo = true; });
  subs.forEach(function (c) { markSolo(c, false); });
})(tree, true);

// 各ディレクトリに祖先情報を付ける
(function attach(node, crumbs) {
  node.crumbs = crumbs;
  node.children.forEach(function (c) {
    if (c.kind === 'dir') attach(c, crumbs.concat([c.solo ? { title: c.title, path: c.path, s: 1, t: c.transparent ? 1 : undefined } : { title: c.title, path: c.path }]));
    else pages[c.idx].crumbs = crumbs;
  });
})(tree, []);

// 分野の番号：フォルダのパス → field（祖先のうち最も近い field をもつフォルダの値）
var FIELD_MAP = {};
(function fm(node, cur) {
  if (node.field) { cur = node.field; FIELD_MAP[node.path] = cur; }
  node.children.forEach(function (c) { if (c.kind === 'dir') fm(c, cur); });
})(tree, '');
function fieldOfPath(p) {
  var best = '', code = '';
  Object.keys(FIELD_MAP).forEach(function (d) { if (p.indexOf(d) === 0 && d.length > best.length) { best = d; code = FIELD_MAP[d]; } });
  return code || p.split('/')[0].split('-')[0];
}

// フォルダの id（_meta.json の "id"）→ ノード。前提知識（"prereq"）の参照先に使う
var dirById = {};
(function collect(node) {
  if (node.id) {
    if (dirById[node.id]) warn(node.path + '_meta.json', 'フォルダ id "' + node.id + '" が重複しています（' + dirById[node.id].path + ' と）');
    else dirById[node.id] = node;
  }
  node.children.forEach(function (c) { if (c.kind === 'dir') collect(c); });
})(tree);

// 別の場所にも表示する（_meta.json の "also"）。住所（フォルダの位置）はそのままで、
// メニューと概要ページでは、指定した親フォルダの子としても表示する。
// 指定はフォルダ id か、第 1・第 2 階層の分類記号（"18", "18A"）。
(function resolveAlso() {
  var byCode = {};
  tree.children.forEach(function (d) {
    if (d.kind !== 'dir') return;
    byCode[d.name.split('-')[0]] = d;
    d.children.forEach(function (e) { if (e.kind === 'dir') byCode[e.name.split('-')[0]] = e; });
  });
  (function walk(node) {
    (node.also || []).forEach(function (t) {
      var target = dirById[t] || byCode[t];
      var where = node.path + '_meta.json';
      if (!target) { warn(where, '"also" の行き先 "' + t + '" が見つかりません（フォルダ id か分類記号で書く）'); return; }
      if (node.path.indexOf(target.path) === 0) { warn(where, '"also" の行き先 "' + t + '" は自分の祖先です（すでにその下に表示されています）'); return; }
      target.alsoKids.push(node); node.alsoIn.push(target);
    });
    node.children.forEach(function (c) { if (c.kind === 'dir') walk(c); });
  })(tree);
})();

/* ---------------- 索引語 ---------------- */
// {term, reading} の配列。env の index="用語|よみ, …"、本文中の \index{用語|よみ}、定義環境の太字
var INDEX_BOLD_TYPES = { definition: 1, notation: 1, axiom: 1, construction: 1 };
function parseIndexAttr(str) {
  return String(str || '').split(/[,、]/).map(function (t) {
    var ps = t.split('|'); return { term: ps[0].trim(), reading: (ps[1] || '').trim() };
  }).filter(function (x) { return x.term; });
}
function mdIndex(text, bold) {
  var ex = Core.extractMath(text), out = ex.index.slice();
  if (bold) {
    var re = /\*\*([^*\n]{1,40}?)\*\*/g, m;
    while ((m = re.exec(ex.text))) {
      if (/[\uE000-\uE003]/.test(m[1])) continue;
      out.push({ term: m[1].trim(), reading: '' });
    }
  }
  return out;
}
function envIndex(node) {
  var out = parseIndexAttr(node.attrs && node.attrs.index);
  var bold = !!INDEX_BOLD_TYPES[node.type];
  (function walk(ns) {
    ns.forEach(function (c) {
      if (c.kind === 'md') out = out.concat(mdIndex(c.text, bold));
      // 付属ブロック（証明など）の中の \index も親の環境に集める
      else if (c.kind === 'env' && (CONFIG.ENVIRONMENTS[c.type] || {}).attached) walk(c.children);
    });
  })(node.children);
  if (node.title && bold) out.push({ term: node.title.replace(/\$[^$]*\$/g, '').trim(), reading: '' });
  return dedupeIndex(out);
}
function dedupeIndex(arr) {
  var seen = {}, out = [];
  arr.forEach(function (x) {
    if (!x.term) return;
    if (seen[x.term]) { if (!seen[x.term].reading && x.reading) seen[x.term].reading = x.reading; return; }
    seen[x.term] = { term: x.term, reading: x.reading }; out.push(seen[x.term]);
  });
  return out;
}

/* ---------------- 2. 解析と番号付け ---------------- */
var labels = {};      // label -> {p, t, n, ti, e, tex}
var altDeps = {};     // 主張のラベル -> [{t: 別証明の題, d: [その中で使う結果のラベル]}]（2026-10-22）
var entries = [];     // 検索エントリ
function addEntry(e) { entries.push(e); return entries.length - 1; }
// 定理などの名前が標準的な名前（人名の定理・「〜の定理／補題／公式／不等式／原理」・有名な定理の refname）か、サイト独自の説明的な名前か（2026-10-23 ユーザー指示）。
// 検索では、標準的な名前だけを「語を含む定理名」の段に出し、サイト独自の名前は主張の一部として扱う。環境の属性 name="std" / name="own" で個別に指定できる
var NAMED_TYPES = { theorem: 1, proposition: 1, lemma: 1, corollary: 1, fact: 1, counterexample: 1 };
var STD_NAME_SUFFIX = /(定理|補題|公式|不等式|原理|恒等式|判定法|議論|予想|公理|パラドックス|論法|の構成|双対性|双対)(（[^）]*）)?$/;
// 「モナドの」「ホモロジーの」のような専門用語のカタカナと人名は見分けられないので、人名は末尾の括弧書き（「…（マイケル）」）だけで見る。人名の定理はたいてい「〜の定理／補題」の形で上の規則に当たる
var STD_NAME_PERSON = /（[ァ-ヶー]{2,}[^）]*）$/;
function isStdName(node) {
  var a = node.attrs || {}, t = String(node.title || '').trim();
  if (a.name === 'std') return true;
  if (a.name === 'own') return false;
  if (!t) return false;
  if (a.refname && a.refscope !== 'field') return true;
  return STD_NAME_SUFFIX.test(t) || STD_NAME_PERSON.test(t);
}

pages.forEach(function (pg) {
  var parsed = Core.parseBlocks(pg.src);
  pg.parsed = parsed;
  pg.title = parsed.page.title || stripPrefix(path.basename(pg.path));
  pg.keywords = parsed.page.keywords || '';
  pg.subject = pg.dirNode.abbr;
  pg.dirPath = pg.dirNode.path;
  if (!parsed.page.title) warn(pg.path, 'ページタイトル（先頭の "# タイトル" 行）がありません');
  parsed.unclosed.forEach(function (n) { warn(pg.path, '閉じられていない環境 ' + n.type + '（' + n.line + '行目）'); });

  var ls = Core.numberTree(parsed, String(pg.sec), CONFIG.ENVIRONMENTS);
  if (parsed.page.label) ls.unshift({ label: parsed.page.label, type: 'page', num: '', title: pg.title });

  // 検索エントリ: ページ
  addEntry({ p: pg.idx, t: 'page', n: '', l: parsed.page.label || '', ti: pg.title, k: pg.keywords,
    x: introText(parsed.children) });

  // 検索エントリ: 環境・地の文（a = ページ内アンカー。site-core.js の描画と同じ順序で数える）
  var heading = '', anchor = '', envOrd = 0, headCount = 0;
  (function walk(nodes, depth) {
    nodes.forEach(function (node) {
      if (node.kind === 'md') {
        splitByHeadings(node.text).forEach(function (ch) {
          if (ch.heading) {
            heading = ch.heading;
            anchor = ch.label || ('sec-' + (++headCount));
          }
          if (depth > 0) return;
          var ix = dedupeIndex(mdIndex(ch.body, false));
          if (!heading) return;   // 最初の見出しより前の導入文はページのエントリに含まれている
          if (ch.body.trim().length > 20) {
            addEntry({ p: pg.idx, t: 'text', n: '', l: ch.label || '', ti: heading, k: '', x: ch.body, a: anchor, ix: ix });
          } else if (ch.heading) {
            addEntry({ p: pg.idx, t: 'section', n: '', l: ch.label || '', ti: ch.heading, k: '', x: ch.body, a: anchor, ix: ix });
          }
        });
        return;
      }
      if (node.kind !== 'env') return;
      envOrd++;
      if (node.type === 'restate') {
        if (!node.target) warn(pg.path, '再掲の対象ラベル "' + (node.targetLabel || '') + '" がこのページの前方にありません（' + node.line + '行目）');
        return;
      }
      if (!CONFIG.ENVIRONMENTS[node.type]) warn(pg.path, '未知の環境名 "' + node.type + '"（' + node.line + '行目）');
      var of = node.of ? { n: node.of.num || '', t: node.of.type, ti: node.of.title || '', l: node.of.label || '' } : null;
      node._entry = addEntry({ p: pg.idx, t: node.type, n: node.num || '', l: node.label || '',
        ti: node.title || '', k: node.keywords || '', x: node.raw || '', of: of, h: heading,
        a: node.label || ('env-' + envOrd), ix: envIndex(node), sn: NAMED_TYPES[node.type] && isStdName(node) ? 1 : undefined });
      walk(node.children, depth + 1);
    });
  })(parsed.children, 0);

  ls.forEach(function (L) {
    if (!/^[A-Za-z0-9][A-Za-z0-9:._\/+-]*$/.test(L.label)) warn(pg.path, 'ラベル "' + L.label + '" に使えない文字があります（英数字と : . _ - / + のみ）');
    if (labels[L.label]) {
      var other = pages[labels[L.label].p];
      warn(pg.path, 'ラベル "' + L.label + '" が重複しています（' + other.path + ' と）');
      return;
    }
    var rec = { p: pg.idx, t: L.type, n: L.num || '', ti: L.title || '' };
    if (L.refname) rec.rn = L.refname;
    if (L.refscope) rec.rs = L.refscope;
    if (L.node && L.node._entry != null) rec.e = L.node._entry;
    if (L.type === 'equation') rec.tex = L.tex;
    if (L.type === 'page') rec.ti = pg.title;
    labels[L.label] = rec;
  });
});

function introText(children) {
  for (var i = 0; i < children.length; i++) {
    if (children[i].kind === 'md') {
      var t = children[i].text.split(/\n\s*#{2,6}\s/)[0];
      return t.slice(0, 1200);
    }
  }
  return '';
}

function splitByHeadings(text) {
  var out = [], cur = { heading: '', label: '', body: '' }, inF = false;
  text.split('\n').forEach(function (ln) {
    if (/^\s{0,3}(```|~~~)/.test(ln)) inF = !inF;
    var hm = !inF && /^\s{0,3}#{2,6}\s+(.*?)\s*$/.exec(ln);
    if (hm) {
      if (cur.heading || cur.body.trim()) out.push(cur);
      var lm = /\s*\{#([^\s{}]+)\}\s*$/.exec(hm[1]);
      cur = { heading: lm ? hm[1].slice(0, lm.index) : hm[1], label: lm ? lm[1] : '', body: '' };
    } else cur.body += ln + '\n';
  });
  if (cur.heading || cur.body.trim()) out.push(cur);
  return out;
}

/* ---------------- ラベル台帳（labels.json） ---------------- */
// 記事中のリンクはすべてパスではなくラベルで書く。まだ書かれていない記事への参照は
// 「予定（planned）」として台帳に載り、その記事が書かれた時点で自動的にリンクになる。
var REG_PATH = path.join(ROOT, 'labels.json');
var oldReg = (readJSON(REG_PATH) || {}).labels || {};
var planned = {};   // label -> {ti, from: {pagePath:1}}
Object.keys(oldReg).forEach(function (k) {
  if (oldReg[k].status === 'planned' && !labels[k]) planned[k] = { ti: oldReg[k].title || '', from: {}, manual: !!oldReg[k].manual };
});

/* 用語のリンク：定義系の環境（定義・構成・公理）の索引語（太字の語と index 属性）→ その環境のラベル。
 * 本文中の用語を定義へのリンクにする（site.js）のと、主張の中の用語を学習ルートの前提に数える（下の termDeps）のに使う。
 * 1 文字の語・数式を含む語は、誤って他の語の一部に当たりやすいので除く。 */
var TERM_DEF_TYPES = { definition: 1, construction: 1, axiom: 1 };
var termDefs = {};   // term -> [label, ...]
entries.forEach(function (e) {
  if (!TERM_DEF_TYPES[e.t] || !e.l) return;
  (e.ix || []).forEach(function (x) {
    var t = String(x.term).normalize('NFKC').trim();
    if (t.length < 2 || /[$\\{}^_\uE000-\uF8FF]/.test(t) || /^[0-9\s.()（）]+$/.test(t)) return;
    var L = termDefs[t] || (termDefs[t] = []);
    if (L.indexOf(e.l) < 0) L.push(e.l);
  });
});
var pageInfo = pages.map(function (pg) { return { path: pg.path, dir: pg.dirPath }; });
// 用語リンクの規則は tools/terms.json で一元管理する（ブラウザには site-index.js の termRules として渡す）
var TERM_RULES = readJSON(path.join(ROOT, 'tools', 'terms.json')) || {};
// 系列の前提（_meta.json の prereq）：系列のパス → 前提の系列のパス。用語リンクで、前提の系列の定義は後ろにあっても結ぶ（2026-10-22）
var SERIES_PRE = {};
Object.keys(dirById).forEach(function (id) {
  var d = dirById[id]; if (!d.prereq || !d.prereq.length) return;
  var ps = d.prereq.map(function (q) { return dirById[q.dir] ? dirById[q.dir].path : null; }).filter(Boolean);
  if (ps.length) SERIES_PRE[d.path] = ps;
});
var TERM_RULES_BROWSER = { stop: TERM_RULES.stop || [], prefix: TERM_RULES.prefix || '', base: TERM_RULES.base || [], baseShort: TERM_RULES.baseShort || [], xfDeny: TERM_RULES.xfDeny || {}, noAuto: TERM_RULES.noAuto || {}, fieldMap: FIELD_MAP, seriesPre: SERIES_PRE };
Core.setTermRules(TERM_RULES_BROWSER);
var termLinker = Core.createTermLinker(termDefs, labels, pageInfo);
var tdeps = {};   // 主張（番号付き環境）のラベル -> その主張に現れる用語の定義のラベル（学習ルートの「主張の前提」に加える）
var stmtTexts = [];   // 主張の本文（参照の検査のあとで用語を探す。ページどうしの前提が要るため）

/* ---------------- 3. 参照の検査と被参照リスト ---------------- */
var backrefs = {};   // label -> [[pageIdx, fromLabel, fromType, fromNum, role]]
// role：参照がどこに書かれているか。's' 主張（番号付き環境の本文・題）、'p' 証明（proof・solution）、
// 'n' 記法と定義の確認（notation）、'm' 付属（intuition・example・supplement・hypcheck）、'' 環境の外の地の文。
// 学習ルートでは、項目どうしは 's' と 'p'、ページどうしは 's'・'p'・'n' を前提として扱う。
var ROLE_RANK = { s: 4, p: 3, a: 2.5, n: 2, m: 1, '': 0, x: -1 };   // x：\see による案内（前提には数えない）
var mathErrors = 0, unresolved = 0;
// 項目参照（\ref{ラベル.キー}）の検査用：環境ごとの項目のキーの集合と、参照された項目
var itemKeys = {}, itemRefs = [];

function typeName(t) {
  if (t === 'equation') return '式';
  if (t === 'section') return '節';
  if (t === 'page') return 'ページ';
  return (CONFIG.ENVIRONMENTS[t] || { name: t }).name;
}

pages.forEach(function (pg) {
  var currentFrom = null, currentRole = '', currentAlt = null;
  var renderer = Core.createRenderer({
    marked: marked, katex: katex, macros: CONFIG.KATEX_MACROS, envs: CONFIG.ENVIRONMENTS,
    resolveRef: function (label, r) {
      var L = labels[label];
      if (!L) {
        var P = planned[label] || (planned[label] = { ti: '', from: {} });
        if (r && r.text && !P.ti) P.ti = r.text;
        P.from[pg.path] = 1;
        return { planned: true, title: P.ti || (r && r.text) || '', type: 'planned' };
      }
      var from = currentFrom;
      if (!(r && r.cmd === 'term') && !(from && from.label === label)) {
        var list = (backrefs[label] = backrefs[label] || []);
        var sig = pg.idx + '|' + (from ? (from.label || from.num || '') : '');
        var hit = list.filter(function (b) { return b.sig === sig; })[0];
        // \see{L}：表示は \ref と同じだが、論理の依存ではない案内（「〜は後で扱う」「詳細は〜」）。役割 x として記録し、前提・ロードマップ・順序の点検に数えない
        var role = r && r.cmd === 'see' ? 'x' : currentRole;
        if (currentAlt && !(r && r.cmd === 'see') && currentAlt.d.indexOf(label) < 0) currentAlt.d.push(label);
        if (!hit) list.push({ sig: sig, v: [pg.idx, from ? (from.label || '') : '', from ? from.type : '', from ? (from.num || '') : '', role] });
        else if (ROLE_RANK[role] > ROLE_RANK[hit.v[4]]) hit.v[4] = role;   // 主張と証明の両方にあれば主張を優先
      }
      return { type: L.t, num: L.n, title: L.ti, refname: L.rn || '', refscope: L.rs || '', typeName: typeName(L.t), href: '#', prefix: '', secName: pages[L.p] ? pages[L.p].subject + ' §' + pages[L.p].sec : '' };
    },
    onItemRef: function (label, n) { itemRefs.push({ label: label, n: n, path: pg.path }); },
    onMathError: function (err, m) {
      mathErrors++;
      warn(pg.path, 'KaTeX エラー: ' + err.message.replace(/\s+/g, ' ').slice(0, 160) + '  ⟵  ' + m.tex.replace(/\s+/g, ' ').slice(0, 120));
    }
  });
  // 環境ごとに「どこから参照したか」を追跡しながら描画
  (function walk(nodes, fromEnv, role, parentEnv) {
    nodes.forEach(function (node) {
      if (node.kind === 'md') {
        if (parentEnv && parentEnv.label) {
          // 環境の直下の項目：番号つき箇条書き（行頭の「N. 」。番号は start から数え直す）、箇条書き「- (a) 」、段落の頭の「(1) 」「**(a) 」
          var K = itemKeys[parentEnv.label] = itemKeys[parentEnv.label] || {}, cnt = null;
          node.text.split('\n').forEach(function (ln, i, all) {
            var om = /^(\d+)\. /.exec(ln);
            if (om) { cnt = cnt === null ? +om[1] : cnt + 1; K[cnt] = 1; return; }
            if (/^\S/.test(ln) && !/^[-*] /.test(ln) && (i === 0 || !all[i - 1].trim())) cnt = null;   // 箇条書きの外の段落で番号が切れる
            var pm = /^(?:[-*] |\*\*)?\s*[(（](\d+|[a-z]|[ivx]+)[)）]/.exec(ln);
            if (pm && (/^[-*] /.test(ln) || i === 0 || !all[i - 1].trim())) K[pm[1]] = 1;
          });
        }
        currentFrom = fromEnv; currentRole = role; renderer.renderMarkdown(node.text);
        if (role === 's' && fromEnv && fromEnv.label) stmtTexts.push({ label: fromEnv.label, p: pg.idx, text: node.text });
        return;
      }
      if (node.kind !== 'env') return;
      var def = CONFIG.ENVIRONMENTS[node.type] || {};
      var from = def.num ? node : (node.of || fromEnv);
      // hypcheck（前提の使用箇所）の参照は主に反例への言及なので、前提ではなく付属として扱う
      var r = def.num ? 's' : (def.minor || node.type === 'hypcheck') ? 'm' : def.attached ? 'p' : node.type === 'notation' ? 'n' : role;
      if (role === 'm') r = 'm';   // 付属ブロックの中はずっと付属
      // 題名が「別証明」で始まる証明（2026-10-22 ユーザー指示）：役割 a。主証明の前提には数えず、別のルートとして記録する
      if (node.type === 'proof' && /^別証明/.test(node.title || '')) r = 'a';
      // 別証明ごとに、その中で使う結果を記録する（学習ルートで証明のルートを選べるように）
      var prevAlt = currentAlt;
      if (r === 'a' && from && from.label) { currentAlt = { t: node.title, d: [] }; (altDeps[from.label] = altDeps[from.label] || []).push(currentAlt); }
      currentFrom = from; currentRole = r;
      if (node.title) renderer.renderInline(node.title);
      walk(node.children, from, r, node);
      currentAlt = prevAlt;
    });
  })(pg.parsed.children, null, '', null);
});

// 文脈で意味が変わるかもしれない用語の検出（2026-10-22 ユーザー指示）：同じ語の定義が同じ分野に複数ある、または複数の分野にある語で、
// まだ確認していないもの（tools/terms.json の reviewed にも noAuto にもないもの）を報告する。
// 確認したら、同じページ・同じ系列の定義が選ばれれば正しい語は reviewed に足し、同じページの中でも意味が変わる語は TERM_NO_AUTO に足して
// 原稿で出現ごとに \term[語]{ラベル} を付ける。
// 参照リンクの表示名を、同じ文の中で本文にも書いていないかの検査（2026-10-22 ユーザー指示：「ヘネシー–ミルナーの定理（ヘネシー–ミルナーの定理）」のように
// 二度出さない）。\ref が名前（refname）やページ・節の題で表示されるとき、同じ文（括弧の外の「。」で区切る）の前後にその名前があれば報告する。
// 直し方：「名前（\ref{L}）」は \ref{L} だけにする。名前を本文に残したいときは \tref{L}（定理は「定理 1.9」、ページ・節は「分野 §n」で表示）にする。
(function checkDuplicateRefNames() {
  function sameSentence(seg) {
    var dep = 0;
    for (var i = 0; i < seg.length; i++) {
      var ch = seg[i];
      if (ch === '（' || ch === '(') dep++;
      else if (ch === '）' || ch === ')') dep = Math.max(0, dep - 1);
      else if ((ch === '。' || ch === '\n') && dep === 0) return false;
    }
    return true;
  }
  pages.forEach(function (pg) {
    var src = pg.src, re = /\\(ref|nameref|see)\{([^{}]+)\}/g, r;
    while ((r = re.exec(src))) {
      var lab = r[2].replace(/\.(\d+|[a-z]|[ivx]+)$/, ''), L = labels[lab]; if (!L) continue;
      var D = r[1] === 'nameref' ? L.ti : (L.rn || ((L.t === 'section' || L.t === 'page') ? (L.t === 'page' ? pages[L.p].title : L.ti) : ''));
      if (!D || D.replace(/\s/g, '').length < 3) continue;
      var rx = new RegExp(Array.from(D).filter(function (c) { return !/\s/.test(c); }).map(function (c) {
        return /[–—−-]/.test(c) ? '[–—−-]' : c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      }).join('(?:\\*\\*|\\s|\\$|\\\\math[a-z]+\\{|\\})*'), 'g');
      var hit = false, m, w0 = Math.max(0, r.index - 90), bw = src.slice(w0, r.index), aw = src.slice(r.index + r[0].length, r.index + r[0].length + 70);
      var ok = function (str, idx) { var pc = idx > 0 ? str[idx - 1] : ''; return !/[一-鿿゠-ヿ]/.test(pc); };   // 「局所連結性」の中の「連結性」は数えない
      while (!hit && (m = rx.exec(bw))) if (ok(bw, m.index) && sameSentence(bw.slice(m.index + m[0].length))) hit = true;
      rx.lastIndex = 0;
      while (!hit && (m = rx.exec(aw))) if (ok(aw, m.index) && sameSentence(aw.slice(0, m.index))) hit = true;
      if (hit) warn(pg.path, '参照の表示名「' + D + '」が同じ文に二度出る：\\' + r[1] + '{' + r[2] + '}（名前（\\ref）なら \\ref だけに、名前を残すなら \\tref に）');
    }
  });
})();

(function checkAmbiguousTerms() {
  var reviewed = {}; (TERM_RULES.reviewed || []).forEach(function (k) { reviewed[k] = 1; });
  Object.keys(termDefs).forEach(function (t) {
    if (Core.termNoAuto()[t]) return;
    var fields = {};
    termDefs[t].forEach(function (l) { var L = labels[l]; if (!L) return; var f = fieldOfPath(pages[L.p].path); (fields[f] = fields[f] || []).push(l); });
    var keys = Object.keys(fields), report = [];
    keys.forEach(function (f) { if (fields[f].length > 1 && !reviewed[t + '@' + f]) report.push(t + '@' + f + '（' + fields[f].join(', ') + '）'); });
    if (keys.length > 1 && !reviewed[t + '@*']) report.push(t + '@*（' + keys.join(', ') + ' の分野に定義）');
    if (process.env.TERM_REVIEW_DUMP) report.forEach(function (r) { (global.__rev = global.__rev || []).push(r.split('（')[0]); });
    report.forEach(function (r) { warn('tools/terms.json', '文脈で意味が変わるかもしれない用語：' + r + '。確認して reviewed か noAuto に足す'); });
  });
  if (process.env.TERM_REVIEW_DUMP) fs.writeFileSync(process.env.TERM_REVIEW_DUMP, JSON.stringify(global.__rev || []));
})();

itemRefs.forEach(function (x) {
  if (!labels[x.label]) return;   // ラベル自体の未定義は別に報告される
  if (!(itemKeys[x.label] || {})[x.n]) {
    warn(x.path, '項目参照 \\ref{' + x.label + '.' + x.n + '}：' + x.label + ' の直下に項目 ' + x.n + ' がありません（ある項目：' + (Object.keys(itemKeys[x.label] || {}).join(', ') || 'なし') + '）');
  }
});

Object.keys(planned).forEach(function (k) {
  var P = planned[k];
  if (!P.ti && Object.keys(P.from).length) {
    Object.keys(P.from).forEach(function (pp) {
      warn(pp, '未執筆のラベル "' + k + '" に表示名がありません。\\ref[表示名]{' + k + '} と書くか、labels.json の title を埋めてください');
    });
  }
});

/* ---------------- 用語索引 ---------------- */
var ROWS = [['あ', 'あいうえおぁぃぅぇぉゔ'], ['か', 'かきくけこがぎぐげご'], ['さ', 'さしすせそざじずぜぞ'], ['た', 'たちつてとだぢづでどっ'],
  ['な', 'なにぬねの'], ['は', 'はひふへほばびぶべぼぱぴぷぺぽ'], ['ま', 'まみむめも'], ['や', 'やゆよゃゅょ'], ['ら', 'らりるれろ'], ['わ', 'わをんゎ']];
function toHira(str) { return String(str).replace(/[\u30a1-\u30f6]/g, function (c) { return String.fromCharCode(c.charCodeAt(0) - 0x60); }); }
function sortKey(t) { return toHira((t.reading || t.term).normalize('NFKC')).toLowerCase(); }
function groupOf(t) {
  var c = sortKey(t).charAt(0);
  for (var i = 0; i < ROWS.length; i++) if (ROWS[i][1].indexOf(c) >= 0) return ROWS[i][0] + '行';
  if (/[a-z]/.test(c)) return c.toUpperCase();
  if (/[\u3040-\u309f]/.test(c)) return 'その他';
  return '読み未登録';
}
var terms = {};   // term -> {term, reading, refs: [entryIdx]}
entries.forEach(function (e, i) {
  (e.ix || []).forEach(function (x) {
    var T = terms[x.term] || (terms[x.term] = { term: x.term, reading: '', refs: [] });
    if (!T.reading && x.reading) T.reading = x.reading;
    if (T.refs.indexOf(i) < 0) T.refs.push(i);
  });
});
function glossarySource() {
  var list = Object.keys(terms).map(function (k) { return terms[k]; });
  var order = ROWS.map(function (r) { return r[0] + '行'; }).concat('ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''), ['その他', '読み未登録']);
  var groups = {};
  list.forEach(function (t) { (groups[groupOf(t)] = groups[groupOf(t)] || []).push(t); });
  var s = '# 用語索引 {#site:glossary keywords="index, 索引, glossary"}\n\n';
  s += '定義・定理に付けられた索引語の一覧です（' + list.length + ' 語）。各項目からその用語が現れる定義・定理へ移動できます。\n\n';
  var present = order.filter(function (g) { return groups[g]; });
  if (present.length) s += '<p class="mn-gloss-jump">' + present.map(function (g) { return '<a href="#gl-' + encodeURIComponent(g) + '">' + g + '</a>'; }).join(' ') + '</p>\n\n';
  present.forEach(function (g) {
    s += '## ' + g + ' {#gl-' + encodeURIComponent(g) + '}\n\n';
    groups[g].sort(function (a, b) { return sortKey(a).localeCompare(sortKey(b), 'ja'); }).forEach(function (t) {
      var links = t.refs.map(function (i) {
        var e = entries[i], pg = pages[e.p];
        if (e.l && labels[e.l] && labels[e.l].p === e.p) return '\\fullref{' + e.l + '}';
        var txt = (e.ti || typeName(e.t)).replace(/[\[\]]/g, '');
        return '[' + pg.subject + ' §' + pg.sec + ' ' + txt + '](' + pg.path + (e.a ? '#' + e.a : '') + ')';
      });
      s += '- **' + t.term + '**' + (t.reading ? '（' + t.reading + '）' : '') + '：' + links.join('、') + '\n';
    });
    s += '\n';
  });
  if (!list.length) s += 'まだ索引語がありません。\n';
  return s;
}

var backOut = {};
Object.keys(backrefs).forEach(function (k) {
  if (backrefs[k].length) backOut[k] = backrefs[k].map(function (b) { return b.v; });
});
// 主張の中の用語 → 定義（site.js が本文で結ぶのと同じ規則）
(function () {
  var depCache = {};
  stmtTexts.forEach(function (st) {
    var deps = depCache[st.p] || (depCache[st.p] = termLinker.pageDeps(backOut, st.p, 2).set);
    var mine = tdeps[st.label] || [];
    termLinker.scan(Core.extractMath(st.text).text).forEach(function (h) {
      var l = termLinker.pick(h.term, st.p, deps);
      if (l && l !== st.label && mine.indexOf(l) < 0) mine.push(l);
    });
    if (mine.length) tdeps[st.label] = mine;
  });
})();

/* ---------------- 3.4 表示用の大分野（ルートの _meta.json の groups） ---------------- */
// codes の要素は第 1 階層の 2 桁（"03"）か、第 2 階層を束ねた表示用の見出し
// { "title": "圏論", "codes": ["18A", "18B"] }（例：18 を圏論とホモロジー代数に分けて見せる）。
// どこにも入らないフォルダは「その他」に出る。
var NAV_GROUPS = (function () {
  // 2026-10-22：第 1 階層のフォルダ（大分野）をそのまま大分野の見出しにし、その子（分野）を項目にする（ディレクトリ＝表示）
  if (!tree.groups) {
    return tree.children.filter(function (c) { return c.kind === 'dir'; }).map(function (d) {
      return { title: d.title, en: d.en || '', href: d.path + 'index.html', items: d.children.filter(function (c) { return c.kind === 'dir'; }).map(function (e) {
        return { title: e.title, en: e.en || '', d: e.description || '', paths: [e.path], href: e.path + 'index.html', n: countPages(e) };
      }) };
    });
  }
  var isDir = function (c) { return c.kind === 'dir'; };
  var code = function (d) { return d.name.split('-')[0]; };
  var l1 = tree.children.filter(isDir), byCode = {}, l2ByCode = {};
  l1.forEach(function (d) { byCode[code(d)] = d; d.children.filter(isDir).forEach(function (e) { l2ByCode[code(e)] = { node: e, parent: d }; }); });
  var usedL1 = {}, usedL2 = {}, splitL1 = {};
  var item = function (title, en, d, dirs, virt) {
    return { title: title, en: en || '', d: d || '', paths: dirs.map(function (x) { return x.path; }),
      href: dirs[0].path + 'index.html', n: dirs.reduce(function (a, x) { return a + countPages(x); }, 0), v: virt ? 1 : undefined };
  };
  var groups = tree.groups.map(function (g) {
    return { title: g.title, en: g.en || '', items: g.codes.map(function (c) {
      if (typeof c === 'string') {
        var d = byCode[c]; if (!d) { warn('_meta.json', '大分野「' + g.title + '」の分類 ' + c + ' のフォルダがありません'); return null; }
        usedL1[d.path] = 1; return item(d.title, d.en, d.description, [d], false);
      }
      var ds = c.codes.map(function (k) { if (!l2ByCode[k]) warn('_meta.json', '見出し「' + c.title + '」の分類 ' + k + ' のフォルダがありません'); return l2ByCode[k]; }).filter(Boolean);
      if (!ds.length) return null;
      ds.forEach(function (x) { usedL2[x.node.path] = 1; splitL1[x.parent.path] = 1; });
      return item(c.title, c.en, c.description, ds.map(function (x) { return x.node; }), true);
    }).filter(Boolean) };
  });
  var rest = [];
  l1.forEach(function (d) {
    if (usedL1[d.path]) return;
    if (!splitL1[d.path]) { rest.push(item(d.title, d.en, d.description, [d], false)); return; }
    d.children.filter(isDir).forEach(function (e) { if (!usedL2[e.path]) rest.push(item(e.title, e.en, e.description, [e], true)); });
  });
  if (rest.length) groups.push({ title: 'その他', en: '', items: rest });
  return groups;
})();

/* ---------------- 3.5 前提知識（_meta.json の prereq）の検査 ---------------- */
// prereq の各項目: { "dir": "<フォルダ id>", "from": §番号 or ラベル, "to": §番号 or ラベル, "note": "補足" }
// from/to を省くとフォルダ全体。to を省くと from の 1 ページだけ。
function dirPages(dir) { return dir.children.filter(function (c) { return c.kind === 'page'; }).map(function (c) { return pages[c.idx]; }); }
function resolveSec(dir, v) {
  if (v == null || v === '') return null;
  if (typeof v === 'number') return { sec: v, pg: dirPages(dir).filter(function (p) { return p.sec === v; })[0] || null };
  var L = labels[v];
  if (L && pages[L.p].dirNode === dir) return { sec: pages[L.p].sec, pg: pages[L.p] };
  return undefined;
}
(function checkPrereq(node) {
  (node.prereq || []).forEach(function (it, i) {
    var where = node.path + '_meta.json';
    var d = dirById[it.dir];
    if (!d) { warn(where, '前提知識 ' + (i + 1) + ' 番目: フォルダ id "' + it.dir + '" がありません'); return; }
    ['from', 'to'].forEach(function (k) {
      if (resolveSec(d, it[k]) === undefined) warn(where, '前提知識 ' + (i + 1) + ' 番目: ' + k + ' のラベル "' + it[k] + '" が ' + d.path + ' のページにありません');
    });
  });
  node.children.forEach(function (c) { if (c.kind === 'dir') checkPrereq(c); });
})(tree);

/* ---------------- 3.6 依存関係の検査（2026-10-22 ユーザー指示：後ろの結果を使っている箇所・前提知識にない系列を使っている箇所を洗い出す） ----------------
 * 依存に数えるのは、主張（s）と証明（p）からの参照で、注意・事実・問題・例・表・補足からの参照、\see（x）、別証明（a）は除く。
 * 1. 定理単位の輪  2. ページ単位の輪  3. 同じ系列の後ろのページへの依存 は「問題」として報告する。
 * 4. 前提知識（_meta.json の prereq を祖先も含めて推移的にたどったもの）にない系列への依存は件数だけ表示し、DEP_REPORT=1 で一覧を出す。 */
(function checkDependencies() {
  var NONESS = { remark: 1, fact: 1, problem: 1, table: 1, example: 1, supplement: 1, solution: 1, intuition: 1, exercise: 1 };
  var RES = { theorem: 1, lemma: 1, proposition: 1, corollary: 1, definition: 1, construction: 1, counterexample: 1 };
  var edges = [];   // {a: 参照元ページ, b: 参照先ページ, from, to, ft}
  Object.keys(backrefs).forEach(function (t) {
    var T = labels[t]; if (!T) return;
    backrefs[t].forEach(function (b) {
      var v = b.v, role = v[4];
      if (role !== 's' && role !== 'p') return;
      if (NONESS[v[2]] || NONESS[T.t]) return;   // 問題や注意への言及は依存に数えない
      edges.push({ a: v[0], b: T.p, from: v[1], to: t, ft: v[2], tt: T.t });
    });
  });
  function tarjan(nodes, succ) {
    var idx = 0, st = [], on = {}, ix = {}, low = {}, out = [];
    function sc(v) {
      ix[v] = low[v] = idx++; st.push(v); on[v] = 1;
      (succ[v] || []).forEach(function (w) {
        if (ix[w] == null) { sc(w); low[v] = Math.min(low[v], low[w]); } else if (on[w]) low[v] = Math.min(low[v], ix[w]);
      });
      if (low[v] === ix[v]) { var c = [], w; do { w = st.pop(); delete on[w]; c.push(w); } while (w !== v); if (c.length > 1) out.push(c); }
    }
    nodes.forEach(function (v) { if (ix[v] == null) sc(v); });
    return out;
  }
  // 1. 定理単位
  var ls = {}, lnodes = {};
  edges.forEach(function (e) { if (!e.from || !labels[e.from] || !RES[labels[e.from].t] || !RES[e.tt] || e.from === e.to) return; (ls[e.from] = ls[e.from] || []).push(e.to); lnodes[e.from] = lnodes[e.to] = 1; });
  tarjan(Object.keys(lnodes), ls).forEach(function (c) { warn(pages[labels[c[0]].p].path, '定理の依存に輪があります：' + c.join(' ↔ ') + '（案内なら \\see、別の証明なら「別証明」に）'); });
  // 2. ページ単位
  var ps = {}, pnodes = {};
  edges.forEach(function (e) { if (e.a === e.b) return; (ps[e.a] = ps[e.a] || []).push(String(e.b)); pnodes[e.a] = pnodes[e.b] = 1; });
  tarjan(Object.keys(pnodes), ps).forEach(function (c) { warn(pages[+c[0]].path, 'ページの依存に輪があります：' + c.map(function (i) { return pages[+i].path; }).join(' ↔ ')); });
  // 3. 同じ系列の後ろのページ
  edges.forEach(function (e) {
    var A = pages[e.a], B = pages[e.b];
    if (A.dirNode === B.dirNode && B.sec > A.sec) warn(A.path, (e.from || '記法') + ' が後ろのページ（§' + B.sec + '）の ' + e.to + ' を使っています（案内なら \\see、問題なら「先取りしてよい」と明記、本当の依存なら順序を変える）');
  });
  // 4. 前提知識にない系列
  function seriesOf(node) { var p = node.path; while (p) { var d = byPath[p]; if (d && d.id) return d; p = p.replace(/[^\/]+\/$/, ''); } return null; }
  var byPath = {};
  (function collect(n) { byPath[n.path] = n; n.children.forEach(function (c) { if (c.kind === 'dir') collect(c); }); })(tree);
  var clo = {};
  function closure(d) {
    if (clo[d.id]) return clo[d.id];
    var out = {}; clo[d.id] = out; out[d.id] = 1; var stack = [d];
    while (stack.length) {
      var x = stack.pop(), p = x.path;
      while (p) { var n = byPath[p]; if (n) (n.prereq || []).forEach(function (it) { var y = dirById[it.dir]; if (y && !out[y.id]) { out[y.id] = 1; stack.push(y); } }); p = p.replace(/[^\/]+\/$/, ''); }
    }
    return out;
  }
  var missing = {};
  edges.forEach(function (e) {
    var A = seriesOf(pages[e.a].dirNode), B = seriesOf(pages[e.b].dirNode);
    if (!A || !B || A === B || closure(A)[B.id]) return;
    if (A.path.indexOf(B.path) === 0 || B.path.indexOf(A.path) === 0) return;
    var k = A.id + ' → ' + B.id; (missing[k] = missing[k] || []).push(pages[e.a].path.split('/').pop() + ' ' + (e.from || '記法') + ' → ' + e.to);
  });
  var mk = Object.keys(missing);
  if (mk.length) {
    console.log('[前提知識にない系列への依存 ' + mk.length + ' 組（' + mk.reduce(function (s, k) { return s + missing[k].length; }, 0) + ' か所）— DEP_REPORT=1 で一覧。2 か所以上なら _meta.json の prereq に足すか、順序を見直す]');
    if (process.env.DEP_REPORT) mk.sort().forEach(function (k) { console.log('  ' + k + '（' + missing[k].length + '）'); missing[k].forEach(function (x) { console.log('      ' + x); }); });
  }
})();

function prereqSource(node) {
  if (!node.prereq || !node.prereq.length) return '';
  var r = relRoot(node.path + 'index.html');
  var s = '## 前提知識\n\n';
  node.prereq.forEach(function (it) {
    var d = dirById[it.dir]; if (!d) return;
    var names = d.crumbs.filter(function (c) { return !c.t; }).slice(-2).map(function (c) { return c.title; }).join(' › ');
    var line = '- [' + names + '](' + r + d.path + 'index.html)';
    var a = resolveSec(d, it.from), b = resolveSec(d, it.to);
    var secLink = function (x) { return x.pg ? '[§' + x.sec + '](' + r + x.pg.path + ')' : '§' + x.sec; };
    if (a && b && b.sec !== a.sec) {
      line += ' ' + secLink(a) + '〜' + secLink(b);
      var ts = [a, b].filter(function (x) { return x.pg; }).map(function (x) { return x.pg.title; });
      if (ts.length === 2) line += '（' + ts[0] + ' 〜 ' + ts[1] + '）';
      else if (!ts.length) line += '（未執筆）';
    } else if (a) {
      line += ' ' + secLink(a) + (a.pg ? '（' + a.pg.title + '）' : '（未執筆）');
    } else {
      var n = dirPages(d).length;
      line += n ? '（全体、' + n + ' ページ）' : '（全体、未執筆）';
    }
    if (it.note) line += '：' + it.note;
    s += line + '\n';
  });
  return s + '\n';
}

/* ---------------- 4. 出力 ---------------- */
function relRoot(relPath) {
  var depth = relPath.split('/').length - 1;
  var s = ''; for (var i = 0; i < depth; i++) s += '../'; return s;
}

// トップページのタイトル（サイト名だけ。副題があれば添える）
function homeTitle() {
  return CONFIG.SITE_TITLE + (CONFIG.SITE_SUBTITLE ? '（' + CONFIG.SITE_SUBTITLE + '）' : '');
}

// CSS・JS の URL に中身から作った版番号（?v=…）を付ける。中身が変わると URL が変わるので、
// ブラウザや GitHub Pages のキャッシュに古いファイルが残っていても、更新がすぐ反映される。
// site-index.js は毎回のビルドで中身（built の時刻）が変わるので付けない（付けると全ページが毎回変わる）。
var VER_CACHE = {};
function asset(r, rel) {
  if (!(rel in VER_CACHE)) {
    try { VER_CACHE[rel] = require('crypto').createHash('md5').update(fs.readFileSync(path.join(ROOT, rel))).digest('hex').slice(0, 8); }
    catch (e) { VER_CACHE[rel] = ''; }
  }
  return r + rel + (VER_CACHE[rel] ? '?v=' + VER_CACHE[rel] : '');
}

function pageHtml(opts) {
  var r = opts.root;
  return '<!DOCTYPE html>\n<html lang="ja">\n<head>\n<meta charset="utf-8">\n' +
    '<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
    '<title>' + Core.escapeHtml(opts.kind === 'home' ? homeTitle() : opts.title + ' | ' + CONFIG.SITE_TITLE) + '</title>\n' +
    // サイトのアイコン（墨と金のメダル）：PNG は SVG を表示できないブラウザ用、apple-touch-icon はホーム画面用
    '<link rel="icon" href="' + r + 'assets/favicon-32.png" sizes="32x32" type="image/png">\n' +
    '<link rel="icon" href="' + r + 'assets/favicon.svg" type="image/svg+xml">\n' +
    '<link rel="apple-touch-icon" href="' + r + 'assets/apple-touch-icon.png">\n' +
    '<link rel="stylesheet" href="' + asset(r, 'vendor/katex/katex.min.css') + '">\n' +
    '<link rel="stylesheet" href="' + asset(r, 'style.css') + '">\n' +
    '<script>try{var t=localStorage.getItem("mn-theme");if(t)document.documentElement.dataset.theme=t;}catch(e){}</script>\n' +
    '</head>\n<body data-root="' + r + '" data-page="' + Core.escapeHtml(opts.path) + '" data-kind="' + opts.kind + '">\n' +
    '<!-- ページ原稿（Markdown）。この script 要素の中だけを編集してください。外側は tools/build.js が自動生成します。 -->\n' +
    '<script type="text/markdown" id="source">\n' + opts.src.replace(/\s+$/, '') + '\n</script>\n' +
    '<noscript>このサイトの表示には JavaScript が必要です。</noscript>\n' +
    '<script src="' + asset(r, 'vendor/katex/katex.min.js') + '"></script>\n' +
    '<script src="' + asset(r, 'vendor/marked.min.js') + '"></script>\n' +
    '<script src="' + asset(r, 'config.js') + '"></script>\n' +
    '<script src="' + asset(r, 'auth-state.js') + '"></script>\n' +
    '<script src="' + asset(r, 'site-core.js') + '"></script>\n' +
    '<script src="' + r + 'site-index.js"></script>\n' +
    '<script src="' + asset(r, 'search.js') + '"></script>\n' +
    '<script src="' + asset(r, 'site.js') + '"></script>\n' +
    // 学習機能（ピン留め・直感イメージ・ロードマップ・証明パズル）。manifest はページごとの差し込み設定
    '<script src="' + asset(r, 'learn/manifest.js') + '"></script>\n' +
    // 概要ページだけ：分野の紹介と系列の目標
    (opts.kind === 'dir' ? '<script src="' + asset(r, 'learn/guides.js') + '"></script>\n' : '') +
    '<script src="' + asset(r, 'learn.js') + '"></script>\n' +
    '</body>\n</html>\n';
}

function write(abs, content) {
  var old = fs.existsSync(abs) ? fs.readFileSync(abs, 'utf8') : null;
  if (old !== content) fs.writeFileSync(abs, content);
}

function jsTree(node, isAlso) {
  // isAlso：別の場所への表示（"also"）として出す写し。x: 1 の印を付け、写しの中ではさらに写しを出さない
  var c = node.children.map(function (c) { return c.kind === 'dir' ? jsTree(c, isAlso) : { k: 'p', i: c.idx }; });
  if (!isAlso) node.alsoKids.forEach(function (a) { var t = jsTree(a, true); t.x = 1; c.push(t); });
  return {
    k: 'd', path: node.path, title: node.title, abbr: node.abbr, en: node.en, d: node.description,
    al: node.aliases && node.aliases.length ? node.aliases : undefined,
    s: node.solo ? 1 : undefined, c: c,
    // 系列の id と前提知識（_meta.json の prereq の dir）。ページのロードマップで、ほかの系列を系列単位でたどるのに使う
    id: node.id || undefined, pre: node.prereq && node.prereq.length ? node.prereq.map(function (q) { return q.dir; }) : undefined
  };
}

// 生成されるフォルダ概要ページの原稿
function dirSource(node) {
  var s = '# ' + node.title + (node.en ? '（' + node.en + '）' : '') + '\n\n';
  if (node.description) s += node.description + '\n\n';
  if (node.intro) s += node.intro + '\n\n';
  if (node.msc) s += '<p class="mn-msc">MSC2020: ' + Core.escapeHtml(node.msc) + '</p>\n\n';
  if (node.alsoIn.length) {
    var r0 = relRoot(node.path + 'index.html');
    s += '<p class="mn-also">関連する分野：' + node.alsoIn.map(function (t) {
      return '<a href="' + r0 + t.path + 'index.html">' + Core.escapeHtml(t.title) + '</a>';
    }).join('、') + '（この系列はそこからも表示されます）</p>\n\n';
  }
  s += prereqSource(node);
  var subdirs = node.children.filter(function (c) { return c.kind === 'dir'; });
  var leaves = node.children.filter(function (c) { return c.kind === 'page'; });
  // 子が solo（ページのある子フォルダが一つだけ）なら、その中身を直接並べる（メニュー・パンくずと同じく一段飛ばす）
  var pre = '';
  while (node.path && !leaves.length) {
    var soloKid = subdirs.filter(function (c) { return c.solo && !c.transparent; })[0];
    if (!soloKid) break;
    pre += soloKid.name + '/';
    subdirs = soloKid.children.filter(function (c) { return c.kind === 'dir'; });
    leaves = soloKid.children.filter(function (c) { return c.kind === 'page'; });
  }
  // transparent の子は、その子（孫）を直接並べる
  subdirs = [].concat.apply([], subdirs.map(function (c) {
    return c.transparent ? c.children.filter(function (k) { return k.kind === 'dir'; }) : [c];
  }));
  function card(d) {
    return '<a class="mn-card" href="' + d.name + '/index.html"><span class="mn-card-title">' + Core.escapeHtml(d.title) +
      '</span>' + (d.en ? '<span class="mn-card-en">' + Core.escapeHtml(d.en) + '</span>' : '') +
      '<span class="mn-card-desc">' + Core.escapeHtml(d.description || '') + '</span><span class="mn-card-count">' + countPages(d) + ' ページ</span></a>\n';
  }
  if (!node.path && NAV_GROUPS && subdirs.length) {
    // トップページ：大分野（サイト独自のまとまり）ごとに、ページのある分野だけカードで示す。空の分野は最後にまとめる
    var empties = [];
    NAV_GROUPS.forEach(function (g) {
      var full = g.items.filter(function (it) { return it.n > 0; });
      g.items.forEach(function (it) { if (!it.n) empties.push(it); });
      if (!full.length) return;
      s += '## ' + g.title + (g.en ? '（' + g.en + '）' : '') + '\n\n<div class="mn-cards">\n' + full.map(function (it) {
        return '<a class="mn-card" href="' + it.href + '"><span class="mn-card-title">' + Core.escapeHtml(it.title) +
          '</span>' + (it.en ? '<span class="mn-card-en">' + Core.escapeHtml(it.en) + '</span>' : '') +
          '<span class="mn-card-desc">' + Core.escapeHtml(it.d || '') + '</span><span class="mn-card-count">' + it.n + ' ページ</span></a>\n';
      }).join('') + '</div>\n\n';
    });
    if (empties.length) {
      s += '## 準備中の分野\n\n<p class="mn-empty">' + empties.map(function (it) {
        return '<a href="' + it.href + '">' + Core.escapeHtml(it.title) + '</a>';
      }).join('　') + '</p>\n\n';
    }
    subdirs = [];
  }
  var alsoKids = node.path ? node.alsoKids : [];
  if (subdirs.length || alsoKids.length) {
    s += '## 分野\n\n<div class="mn-cards">\n';
    subdirs.forEach(function (d) {
      var n = countPages(d);
      s += '<a class="mn-card" href="' + d.path.slice(node.path.length) + 'index.html"><span class="mn-card-title">' + Core.escapeHtml(d.title) +
        '</span>' + (d.en ? '<span class="mn-card-en">' + Core.escapeHtml(d.en) + '</span>' : '') +
        '<span class="mn-card-desc">' + Core.escapeHtml(d.description || '') + '</span><span class="mn-card-count">' + n + ' ページ</span></a>\n';
    });
    var r1 = relRoot(node.path + 'index.html');
    alsoKids.forEach(function (d) {
      var home = d.crumbs.filter(function (c) { return !c.s; }).slice(0, -1).map(function (c) { return c.title; }).join(' › ');
      s += '<a class="mn-card mn-card-also" href="' + r1 + d.path + 'index.html"><span class="mn-card-title">' + Core.escapeHtml(d.title) +
        '</span>' + (d.en ? '<span class="mn-card-en">' + Core.escapeHtml(d.en) + '</span>' : '') +
        '<span class="mn-card-desc">' + Core.escapeHtml(d.description || '') + '</span><span class="mn-card-count">' +
        countPages(d) + ' ページ・所在：' + Core.escapeHtml(home) + '</span></a>\n';
    });
    s += '</div>\n\n';
  }
  if (!subdirs.length && !leaves.length && node.path) s += '<p class="mn-empty">このフォルダにはまだページがありません。</p>\n';
  if (leaves.length) {
    s += '## 目次\n\n<ol class="mn-dirtoc">\n';
    leaves.forEach(function (c) {
      var pg = pages[c.idx];
      var main = entries.filter(function (e) {
        return e.p === pg.idx && e.l && e.ti && /^(theorem|proposition|definition|lemma|corollary)$/.test(e.t);
      }).slice(0, 12);
      s += '<li value="' + pg.sec + '"><a href="' + pre + path.basename(pg.path) + '">§' + pg.sec + ' ' + Core.escapeHtml(pg.title) + '</a>';
      if (main.length) {
        s += '<ul class="mn-dirtoc-items">' + main.map(function (e) {
          return '<li><span class="mn-dirtoc-kind">' + typeName(e.t) + ' ' + e.n + '</span> ' +
            '<span class="mn-dirtoc-title">' + e.ti + '</span></li>';
        }).join('') + '</ul>';
      }
      s += '</li>\n';
    });
    s += '</ol>\n';
  }
  return s;
}
function countPages(node) {
  return node.children.reduce(function (a, c) { return a + (c.kind === 'page' ? 1 : countPages(c)); }, 0);
}

if (!CHECK_ONLY) {
  pages.forEach(function (pg) {
    write(pg.abs, pageHtml({ root: relRoot(pg.path), path: pg.path, title: pg.title, src: pg.src, kind: 'page' }));
  });
  (function genDirs(node) {
    var rel = node.path + 'index.html';
    write(path.join(ROOT, rel), pageHtml({ root: relRoot(rel), path: rel, title: node.title, src: dirSource(node), kind: node.path ? 'dir' : 'home' }));
    node.children.forEach(function (c) { if (c.kind === 'dir') genDirs(c); });
  })(tree);
  write(path.join(ROOT, 'glossary.html'), pageHtml({ root: '', path: 'glossary.html', title: '用語索引', src: glossarySource(), kind: 'glossary' }));
  // ラベル台帳
  var reg = {};
  Object.keys(labels).sort().forEach(function (k) {
    var L = labels[k], pg = pages[L.p];
    reg[k] = { status: 'defined', type: L.t, title: L.ti || '', num: L.n || '', page: pg.path };
  });
  Object.keys(planned).sort().forEach(function (k) {
    var P = planned[k];
    if (!Object.keys(P.from).length && !P.manual) return;   // どこからも参照されなくなった予定ラベルは消す
    reg[k] = { status: 'planned', title: P.ti || '', referencedFrom: Object.keys(P.from).sort() };
    if (P.manual) reg[k].manual = true;
  });
  write(REG_PATH, JSON.stringify({
    '説明': 'サイト全体のラベル台帳（tools/build.js が自動更新）。defined = 定義済み、planned = 参照されているが未執筆。' +
      'planned の title は未執筆のあいだリンクの代わりに表示される名前。手で planned を追加するときは "manual": true を付けると参照がなくても残る。',
    labels: reg
  }, null, 2) + '\n');
  write(path.join(ROOT, 'search.html'), pageHtml({ root: '', path: 'search.html', title: '検索', src: '# 検索\n', kind: 'search' }));

  var index = {
    built: new Date().toISOString(),
    tree: jsTree(tree),
    groups: NAV_GROUPS,
    pages: pages.map(function (pg) {
      return { path: pg.path, title: pg.title, sec: pg.sec, dir: pg.dirPath, subj: pg.subject, k: pg.keywords,
        crumbs: pg.crumbs };
    }),
    labels: labels,
    planned: Object.keys(planned).reduce(function (o, k) { o[k] = { ti: planned[k].ti }; return o; }, {}),
    backrefs: backOut,
    terms: termDefs,
    termRules: TERM_RULES_BROWSER,
    altDeps: altDeps,
    tdeps: tdeps,
    entries: []   // 検索用の本文は search-index.js に分けた（必要になったときに読み込む）
  };
  write(path.join(ROOT, 'site-index.js'),
    '/* 自動生成ファイル（tools/build.js）。編集しないでください。 */\nwindow.MATH_INDEX = ' + JSON.stringify(index) + ';\n');
  // 参照プレビュー用の本文をページごとの小さなファイルに分ける（他ページのプレビューのために 16 MB の search-index.js を
  // 読み込むと遅いため。2026-10-22 ユーザー指摘）。pv/<ページ番号>.js：{ ラベル: 本文, '#page': ページ冒頭の本文 }
  if (!fs.existsSync(path.join(ROOT, 'pv'))) fs.mkdirSync(path.join(ROOT, 'pv'));
  var pvByPage = {};
  entries.forEach(function (e) {
    var o = pvByPage[e.p] = pvByPage[e.p] || {};
    if (e.t === 'page') o['#page'] = (e.x || '').slice(0, 900);
    else if (e.l && labels[e.l] && labels[e.l].p === e.p && !(e.l in o)) o[e.l] = e.x || '';
  });
  pages.forEach(function (pg) {
    write(path.join(ROOT, 'pv', pg.idx + '.js'),
      '/* 自動生成ファイル（tools/build.js）。編集しないでください。 */\n' +
      '(window.SM_PV = window.SM_PV || {})[' + pg.idx + '] = ' + JSON.stringify(pvByPage[pg.idx] || {}) + ';\n');
  });
  // 検索用の索引（2026-10-22 ユーザー指示：重くならないように分ける）。
  //   search-index.js：本文（x）以外。題・索引語・読み・キーワードで、これだけで検索の結果を出せる。各項目の b は本文のファイルの鍵。
  //   search-body/<分野番号>.js：その分野の項目の本文 { 項目番号: 本文 }。検索を開いたあと並行して読み込み、届いた分から本文の一致を加える。
  if (!fs.existsSync(path.join(ROOT, 'search-body'))) fs.mkdirSync(path.join(ROOT, 'search-body'));
  var bodies = {};
  // 題のない項目（証明・解答・前提の使用箇所・直感・地の文）は本文がないと検索に当たらないので、項目ごと本文側に置く
  var BODY_ONLY = { proof: 1, hypcheck: 1, solution: 1, intuition: 1, text: 1 };
  var head = [];
  entries.forEach(function (e, i) {
    var segs = pages[e.p] ? pages[e.p].path.split('/') : ['x'];
    var key = segs[0].split('-')[0] + (segs[1] ? '-' + segs[1].split('-')[0] : '');   // 分野（第 2 階層）ごとに分ける
    var h = {};   // 空の値は省く（ブラウザ側で既定値に戻す）
    Object.keys(e).forEach(function (k) {
      var v = e[k];
      if (k === 'x' || v === '' || v == null || (Array.isArray(v) && !v.length)) return;
      if (k === 'a' && v === e.l) return;
      h[k] = v;
    });
    h.i = i; h.b = key;
    var B = bodies[key] = bodies[key] || { x: {}, e: [] };
    if (BODY_ONLY[e.t]) { if (e.x) h.x = e.x; B.e.push(h); }
    else { head.push(h); if (e.x) B.x[i] = e.x; }
  });
  var bodyKeys = Object.keys(bodies).sort();
  fs.readdirSync(path.join(ROOT, 'search-body')).forEach(function (f) { if (/\.js$/.test(f) && bodyKeys.indexOf(f.replace(/\.js$/, '')) < 0) fs.unlinkSync(path.join(ROOT, 'search-body', f)); });
  bodyKeys.forEach(function (k) {
    write(path.join(ROOT, 'search-body', k + '.js'),
      '/* 自動生成ファイル（tools/build.js）。編集しないでください。 */\n' +
      '(window.SM_SB = window.SM_SB || {})[' + JSON.stringify(k) + '] = ' + JSON.stringify(bodies[k]) + ';\n');
  });
  write(path.join(ROOT, 'search-index.js'),
    '/* 自動生成ファイル（tools/build.js）。編集しないでください。 */\n' +
    '(window.MATH_INDEX = window.MATH_INDEX || {}).entryHeads = ' + JSON.stringify(head) + ';\n' +
    'window.MATH_INDEX.entryCount = ' + entries.length + ';\n' +
    'window.MATH_INDEX.bodyKeys = ' + JSON.stringify(bodyKeys) + ';\n');
}

/* ---------------- 5. 報告 ---------------- */
// 直感（intuition）のない主張の数（2026-10-23 ユーザー指示：主張の内容を日本語で検索できるよう、定義・定理などにはやさしい日本語の直感を付ける。
// INTUITION_REPORT=1 で系列ごとの一覧）
(function intuitionReport() {
  // 対象：定義と主要な定理（theorem、または refname をもつもの）。主要な定理の証明（Step が 3 つ以上）に【主張】があるかも数える
  var total = 0, missing = 0, ptotal = 0, pmissing = 0, bySeries = {};
  function major(e) { return e.t === 'theorem' || (NAMED_TYPES[e.t] && labels[e.l] && labels[e.l].rn); }
  entries.forEach(function (e, i) {
    if (e.t !== 'definition' && !major(e)) return;
    var dp = pages[e.p].dirPath, rec = bySeries[dp] || (bySeries[dp] = { i: 0, c: 0 });
    total++;
    var nx = entries[i + 1];
    if (!(nx && nx.t === 'intuition' && nx.of)) { missing++; rec.i++; }
    if (e.t === 'definition') return;
    for (var k = i + 1; k < Math.min(entries.length, i + 6); k++) {
      var p = entries[k];
      if (p.t !== 'proof' || !p.of || p.of.l !== e.l) continue;
      if (((p.x || '').match(/\*\*Step \d/g) || []).length < 3) break;
      ptotal++;
      if ((p.x || '').indexOf('【主張：') < 0) { pmissing++; rec.c++; }
      break;
    }
  });
  if (QUIET) return;
  console.log('\n[直感のない定義・主要な定理 ' + missing + ' / ' + total + ' 件、【主張】のない主要な定理の証明（Step 3 つ以上） ' + pmissing + ' / ' + ptotal + ' 件 — INTUITION_REPORT=1 で系列ごと]');
  if (process.env.INTUITION_REPORT) Object.keys(bySeries).sort().forEach(function (k) { var r = bySeries[k]; if (r.i || r.c) console.log('  ' + k + '  直感 ' + r.i + '・主張 ' + r.c); });
})();
var plannedKeys = Object.keys(planned);
if (plannedKeys.length && !QUIET) {
  console.log('\n[未執筆（予定）のラベル ' + plannedKeys.length + ' 件 — 記事が書かれると自動でリンクになります]');
  plannedKeys.sort().forEach(function (k) { console.log('  - ' + k + (planned[k].ti ? '  「' + planned[k].ti + '」' : '') + '  ← ' + Object.keys(planned[k].from).join(', ')); });
}
var shown = problems.filter(function (p) { return !ONLY || p.where.indexOf(ONLY) === 0; });
var byFile = {};
shown.forEach(function (p) { (byFile[p.where] = byFile[p.where] || []).push(p.msg); });
if (!QUIET) Object.keys(byFile).forEach(function (f) {
  console.log('\n[' + f + ']');
  byFile[f].forEach(function (m) { console.log('  - ' + m); });
});
console.log('\n' + (CHECK_ONLY ? '検査' : 'ビルド') + '完了: ' + pages.length + ' ページ, ' + Object.keys(labels).length +
  ' ラベル, ' + entries.length + ' 検索エントリ / 問題 ' + shown.length + ' 件' +
  '（未定義参照 ' + unresolved + ', KaTeX エラー ' + mathErrors + '）' + (ONLY ? ' [--only ' + ONLY + ']' : ''));
process.exitCode = shown.length ? 1 : 0;
