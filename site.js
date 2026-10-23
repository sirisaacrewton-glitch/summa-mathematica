/*
 * site.js — ページの描画・ナビゲーション・相互参照プレビュー・広告枠
 *
 * DOM 構造（CSS はすべて mn- 接頭辞のクラスと data 属性だけを対象にする）:
 *   .mn-app[data-nav=hidden|pinned|open]
 *     header.mn-topbar
 *     div.mn-layout
 *       nav.mn-drawer        … 分類ツリー（ハンバーガーで開閉）
 *       div.mn-scrim         … オーバーレイ時の背景
 *       main.mn-main         … パンくず・本文・ページ送り・広告枠
 *       aside.mn-rail        … 目次・広告枠（広い画面のみ）
 */
(function () {
  'use strict';
  var C = window.MATH_CONFIG, Core = window.MathCore;
  var IDX = window.MATH_INDEX || { tree: { c: [] }, pages: [], labels: {}, entries: [], backrefs: {} };
  var body = document.body;
  var ROOT = body.getAttribute('data-root') || '';
  var PAGE = body.getAttribute('data-page') || '';
  var KIND = body.getAttribute('data-kind') || 'page';
  var pageIdx = -1;
  IDX.pages.forEach(function (p, i) { if (p.path === PAGE) pageIdx = i; });
  var PG = IDX.pages[pageIdx] || null;
  var esc = Core.escapeHtml;
  var WIDE = window.matchMedia ? matchMedia('(min-width: 1100px)') : { matches: true, addListener: function () {} };
  var PHONE = window.matchMedia ? matchMedia('(max-width: 640px)') : { matches: false };

  function store(k, v) {
    try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; }
  }
  function typeName(t) {
    if (t === 'equation') return '式';
    if (t === 'section') return '節';
    if (t === 'page') return 'ページ';
    return (C.ENVIRONMENTS[t] || { name: t }).name;
  }

  /* ---------- 参照の解決 ---------- */
  var localLabels = {};
  /* ---------- 用語を定義へのリンクにする ----------
   * 本文中の主要な用語（定義・構成・公理の太字の語）を、その定義へのリンクにする（表示は語そのまま。「定義 5.5」などは付けない）。
   * ホバーで定義を確認でき、📌 で固定できる。どの定義に結ぶかは site-core.js の createTermLinker の規則。
   * 同じ語は、各環境（定理・証明など）と各節の地の文で最初の 1 回だけ結ぶ（全部に付けるとうるさいため）。
   * 数式・既存のリンク・見出し・環境の題・その語を定義している環境の中は対象外。 */
  function linkTerms(article) {
    if (!IDX.terms || KIND !== 'page' || !window.MathCore || !MathCore.createTermLinker) return;
    if (MathCore.setTermRules) MathCore.setTermRules(IDX.termRules);
    var linker = MathCore.createTermLinker(IDX.terms, IDX.labels, IDX.pages);
    if (!linker.size) return;
    var deps = linker.pageDeps(IDX.backrefs, pageIdx, 2).set;
    var prose = article.querySelector('.mn-prose'); if (!prose) return;
    var SKIP = 'a, code, pre, .katex, svg, h1, h2, h3, h4, h5, h6, .mn-env-head, summary, .mn-label, .mn-backrefs, .mn-toc-inline, .mn-learn-x, .mn-qed';   // 図（svg）の中の文字はリンクにできない
    // 地の文の「節」：直前の h2 を鍵にする
    var sectionOf = new Map(), cur = null;
    [].forEach.call(prose.children, function (c) { if (c.tagName === 'H2') cur = c; sectionOf.set(c, cur || prose); });
    var linked = new Map();   // 鍵（環境または節） -> {label: 1}
    var pickCache = {};
    var walker = document.createTreeWalker(prose, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) { return n.nodeValue.trim() && !(n.parentNode.closest && n.parentNode.closest(SKIP)) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT; }
    });
    var nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
    function keyOf(n) {
      var env = n.closest ? n.closest('.mn-env') : null;
      if (env) return env;
      var top = n; while (top && top.parentNode !== prose) top = top.parentNode;
      return sectionOf.get(top) || prose;
    }
    // 原稿で \term[語]{ラベル} と意味を指定した語は、同じ環境・節の中では自動のリンクで別の意味に結ばない（2026-10-22）
    var explicit = new Map();
    [].forEach.call(prose.querySelectorAll('a.mn-term'), function (a) {
      var k = keyOf(a), m = explicit.get(k); if (!m) explicit.set(k, m = {});
      m[a.textContent] = 1;
    });
    nodes.forEach(function (tn) {
      var hits = linker.scan(tn.nodeValue); if (!hits.length) return;
      var env = tn.parentNode.closest('.mn-env');
      var key = env;
      if (!key) { var top = tn.parentNode; while (top && top.parentNode !== prose) top = top.parentNode; key = sectionOf.get(top) || prose; }
      var seen = linked.get(key); if (!seen) linked.set(key, seen = {});
      var frag = null, last = 0, text = tn.nodeValue;
      hits.forEach(function (h) {
        var l = h.term in pickCache ? pickCache[h.term] : (pickCache[h.term] = linker.pick(h.term, pageIdx, deps));
        if (!l || seen[l]) return;
        if ((explicit.get(key) || {})[h.term]) return;
        if (env && (env.id === l || env.closest('[id="' + l.replace(/"/g, '') + '"]'))) return;   // 定義している環境の中は結ばない
        var info = resolveRef(l); if (!info || info.planned) return;
        seen[l] = 1;
        frag = frag || document.createDocumentFragment();
        if (h.i > last) frag.appendChild(document.createTextNode(text.slice(last, h.i)));
        var a = document.createElement('a');
        a.className = 'mn-xref mn-term'; a.href = info.href; a.setAttribute('data-label', l);
        // 同じ語の別の定義（意味が違うと分かっている他分野の定義は candidates の段階で除かれている）。プレビューで選べるようにする
        var alt = linker.alternatives(h.term, pageIdx, l)
          .filter(function (x) { var ai = resolveRef(x); return ai && !ai.planned; });
        if (alt.length) a.setAttribute('data-alt', alt.slice(0, 6).join(' '));
        a.textContent = text.substr(h.i, h.len);
        frag.appendChild(a);
        last = h.i + h.len;
      });
      if (!frag) return;
      if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
      tn.parentNode.replaceChild(frag, tn);
    });
  }
  function resolveRef(label) {
    var L = localLabels[label];
    if (L) return { type: L.type, num: L.num, title: L.title, refname: L.refname || '', refscope: L.refscope || '', typeName: typeName(L.type), href: '#' + label, prefix: '', external: false };
    var G = IDX.labels[label];
    if (!G) {
      var P = IDX.planned && IDX.planned[label];
      return P ? { planned: true, title: P.ti, type: 'planned' } : null;
    }
    var pg = IDX.pages[G.p];
    var same = G.p === pageIdx;
    return {
      type: G.t, num: G.n, title: G.t === 'page' ? pg.title : G.ti, refname: G.rn || '', typeName: typeName(G.t),
      href: same ? '#' + label : ROOT + pg.path + (G.t === 'page' ? '' : '#' + label),
      prefix: (!PG || pg.dir !== PG.dir) ? pg.subj + ' ' : '', external: !same,
      secName: pg.subj + ' §' + pg.sec, refscope: G.rs || '', otherField: !PG || pg.dir.split('/').slice(0, 2).join('/') !== PG.dir.split('/').slice(0, 2).join('/')
    };
  }
  var renderer = Core.createRenderer({
    marked: window.marked, katex: window.katex, macros: C.KATEX_MACROS, envs: C.ENVIRONMENTS,
    resolveRef: resolveRef,
    onMathError: function (err, m) { if (window.console) console.warn('KaTeX:', err.message, m.tex); }
  });

  /* ---------- レイアウト ---------- */
  function buildLayout() {
    var src = document.getElementById('source');
    var text = src ? src.textContent : '';
    var app = document.createElement('div');
    app.className = 'mn-app';
    app.innerHTML =
      '<a class="mn-skip" href="#mn-main">本文へ移動</a>' +
      '<header class="mn-topbar">' +
        '<button type="button" class="mn-iconbtn mn-nav-toggle" aria-controls="mn-drawer" aria-expanded="false" title="分類メニュー">' +
          '<span class="mn-burger" aria-hidden="true"><span></span><span></span><span></span></span><span class="mn-vh">分類メニュー</span></button>' +
        '<a class="mn-brand" href="' + ROOT + 'index.html" title="トップページ" aria-label="トップページ（' + esc(C.SITE_TITLE) + '）"><img class="mn-brand-icon" src="' + ROOT + 'assets/favicon.svg" alt="" width="28" height="28">' +
          '<span class="mn-brand-text">' + esc(C.SITE_TITLE) + '</span></a>' +
        '<button type="button" class="mn-search-trigger" aria-label="検索">' +
          '<span class="mn-search-trigger-icon"><svg class="mn-ico" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 21 21"/></svg></span><span class="mn-search-trigger-text">定理・用語・数式を検索</span><kbd>/</kbd></button>' +
        '<button type="button" class="mn-iconbtn mn-theme-toggle" title="ライト/ダーク切替" aria-label="ライト/ダーク切替">' +
          '<span aria-hidden="true">◐</span></button>' +
      '</header>' +
      '<div class="mn-layout">' +
        '<nav class="mn-drawer" id="mn-drawer" aria-label="分類">' +
          '<div class="mn-drawer-head"><span class="mn-drawer-title">分類</span>' +
          '<button type="button" class="mn-iconbtn mn-drawer-close" aria-label="メニューを閉じる">✕</button></div>' +
          '<div class="mn-quick"><a href="' + ROOT + 'index.html">ホーム</a><a href="' + ROOT + 'glossary.html">用語索引</a><a href="' + ROOT + 'search.html">詳しい検索</a></div>' +
          '<div class="mn-tree"></div></nav>' +
        '<div class="mn-scrim" aria-hidden="true"></div>' +
        '<main class="mn-main" id="mn-main" tabindex="-1">' +
          '<div class="mn-crumbs"></div>' +
          '<nav class="mn-pager-top" aria-label="前後のページ（上）"></nav>' +
          '<div class="mn-ad" data-ad-slot="top" hidden></div>' +
          '<article class="mn-article"></article>' +
          '<div class="mn-ad" data-ad-slot="bottom" hidden></div>' +
          '<nav class="mn-pager" aria-label="前後のページ"></nav>' +
          '<footer class="mn-footer">' + esc(C.SITE_TITLE) + (IDX.built ? ' ・ 索引更新 ' + esc(IDX.built.slice(0, 10)) : '') + '</footer>' +
        '</main>' +
        '<aside class="mn-rail" aria-label="このページの目次">' +
          '<div class="mn-toc"></div>' +
          '<div class="mn-ad" data-ad-slot="rail" hidden></div>' +
        '</aside>' +
      '</div>' +
      '<div class="mn-popover" role="tooltip" hidden></div>';
    body.appendChild(app);
    return { text: text, app: app };
  }

  /* ---------- ナビゲーション（分類ツリー） ---------- */
  var app;
  function navState() { return app.getAttribute('data-nav'); }
  function setNav(state) {
    app.setAttribute('data-nav', state);
    var open = state === 'open' || state === 'pinned';
    app.querySelector('.mn-nav-toggle').setAttribute('aria-expanded', open);
    document.documentElement.classList.toggle('mn-lock', state === 'open' && !WIDE.matches);
  }
  function initNav() {
    var pinned = store('mn-nav-pinned') === '1';
    setNav(WIDE.matches && pinned ? 'pinned' : 'hidden');
    app.querySelector('.mn-nav-toggle').addEventListener('click', function () {
      if (WIDE.matches) {
        // 広い画面：左カラムとして表示／非表示を切り替え、状態を記憶
        var next = navState() === 'pinned' ? 'hidden' : 'pinned';
        store('mn-nav-pinned', next === 'pinned' ? '1' : '0');
        setNav(next);
      } else {
        setNav(navState() === 'open' ? 'hidden' : 'open');
        if (navState() === 'open') app.querySelector('.mn-drawer-close').focus();
      }
    });
    app.querySelector('.mn-drawer-close').addEventListener('click', function () {
      if (WIDE.matches) store('mn-nav-pinned', '0');
      setNav('hidden');
    });
    app.querySelector('.mn-scrim').addEventListener('click', function () { setNav('hidden'); });
    document.addEventListener('keydown', function (ev) { if (ev.key === 'Escape' && navState() === 'open') setNav('hidden'); });
    var onChange = function () { setNav(WIDE.matches && store('mn-nav-pinned') === '1' ? 'pinned' : 'hidden'); };
    if (WIDE.addEventListener) WIDE.addEventListener('change', onChange); else WIDE.addListener(onChange);
  }

  // 行の左の ▸ ボタン（線で描いたシェブロン）。メニューバーと分野ピッカーで共通の形
  var CHEVRON = '<svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true" focusable="false"><path d="M6 3.5 10.5 8 6 12.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  function hasPages(n) { return (n.c || []).some(function (c) { return c.k !== 'd' || hasPages(c); }); }
  function findDir(p) {
    var hit = null;
    (function walk(n) { (n.c || []).forEach(function (c) { if (hit || c.k !== 'd') return; if (c.path === p) hit = c; else if (p.indexOf(c.path) === 0) walk(c); }); })(IDX.tree || { c: [] });
    return hit;
  }
  // 表示用の見出しで束ねた第 2 階層 → その見出し（パンくずで第 1 階層の代わりに出す）
  var VIRT = {};
  (IDX.groups || []).forEach(function (g) { g.items.forEach(function (it) { if (it.v) it.paths.forEach(function (p) { VIRT[p] = it; }); }); });
  function renderTree(el) {
    // 表示の約束：ページのないフォルダは出さない。solo のフォルダ（親の唯一の子）は飛ばして中身を同じ深さに出す。
    // 第 1 階層はトップの _meta.json の groups（大分野）ごとに見出しを付けて並べる。
    function node(n, depth) {
      var html = '';
      (n.c || []).forEach(function (c) {
        if (c.k === 'd' && !hasPages(c)) return;
        if (c.k === 'd' && c.s) { html += node(c, depth); return; }
        if (c.k === 'd') {
          // c.x：別の場所にあるフォルダの写し（_meta.json の "also"）。開いた状態にはせず、印を付ける
          var here = !c.x && PAGE.indexOf(c.path) === 0, empty = !hasPages(c), kids = (c.c || []).length > 0;
          html += '<details class="mn-tree-dir' + (empty ? ' is-empty' : '') + (c.x ? ' is-also' : '') + '" data-depth="' + depth + '"' + (here ? ' open' : '') + '>' +
            '<summary tabindex="-1">' +
              (kids ? '<button type="button" class="mn-tree-toggle" aria-expanded="' + here + '" aria-label="' + esc(c.title) + ' を展開">' + CHEVRON + '</button>'
                    : '<span class="mn-tree-spacer" aria-hidden="true"></span>') +
              '<a class="mn-tree-link" href="' + ROOT + c.path + 'index.html"' + (PAGE === c.path + 'index.html' ? ' aria-current="page"' : '') +
                (empty ? ' title="まだページがありません"' : (c.x ? ' title="別の分野にある系列（関連として表示）"' : '')) + '>' + esc(c.title) + '</a></summary>' +
            '<div class="mn-tree-children">' + node(c, depth + 1) + '</div></details>';
        } else {
          var p = IDX.pages[c.i];
          html += '<a class="mn-tree-page" href="' + ROOT + p.path + '"' + (p.path === PAGE ? ' aria-current="page"' : '') + '>' +
            '<span class="mn-tree-spacer" aria-hidden="true"></span>' +
            '<span class="mn-tree-sec">' + p.sec + '</span><span class="mn-tree-title">' + renderer.renderInline(p.title) + '</span></a>';
        }
      });
      return html;
    }
    var T = IDX.tree || { c: [] };
    if (IDX.groups) {
      var out = '';
      IDX.groups.forEach(function (g) {
        var inner = '';
        g.items.forEach(function (it) {
          var dirs = it.paths.map(findDir).filter(Boolean);
          if (!it.v) { inner += node({ c: dirs }, 0); return; }
          // 表示用の見出し（例：18 のうち 18A・18B を「圏論」として見せる）
          var kids = node({ c: dirs.length === 1 ? dirs[0].c : dirs }, 1);
          if (!kids) return;
          var here = it.paths.some(function (p) { return PAGE.indexOf(p) === 0; });
          inner += '<details class="mn-tree-dir" data-depth="0"' + (here ? ' open' : '') + '><summary tabindex="-1">' +
            '<button type="button" class="mn-tree-toggle" aria-expanded="' + here + '" aria-label="' + esc(it.title) + ' を展開">' + CHEVRON + '</button>' +
            '<a class="mn-tree-link" href="' + ROOT + it.href + '">' + esc(it.title) + '</a></summary>' +
            '<div class="mn-tree-children">' + kids + '</div></details>';
        });
        if (inner) out += '<div class="mn-tree-group">' + (g.href ? '<a href="' + ROOT + g.href + '">' + esc(g.title) + '</a>' : esc(g.title)) + '</div>' + inner;
      });
      el.innerHTML = out;
    } else el.innerHTML = node(T, 0);
    el.addEventListener('click', function (ev) {
      var t = ev.target.closest('.mn-tree-toggle');
      var sum = ev.target.closest('summary');
      if (!t) { if (sum && !ev.target.closest('a')) ev.preventDefault(); return; }   // 行の余白では開閉しない
      ev.preventDefault();
      var d = t.closest('details'), want = d._anim ? !d._target : !d.open;
      t.setAttribute('aria-expanded', want);
      if (REDUCED || !Element.prototype.animate) d.open = want; else animateDetails(d, want);
    });
    el.addEventListener('toggle', function (ev) {
      var d = ev.target, t = d.querySelector && d.querySelector(':scope > summary > .mn-tree-toggle');
      if (t && !d._anim) t.setAttribute('aria-expanded', d.open);
    }, true);
  }

  function renderCrumbs(el) {
    if (KIND === 'home') { el.remove(); return; }
    var crumbs = PG ? PG.crumbs : null;
    if (!crumbs) {
      var segs = PAGE.split('/').slice(0, -1), acc = '';
      crumbs = [];
      (function find(n, i) {
        (n.c || []).forEach(function (c) {
          if (c.k === 'd' && c.path === acc + segs[i] + '/') { crumbs.push({ title: c.title, path: c.path, s: c.s }); acc = c.path; if (i + 1 < segs.length) find(c, i + 1); }
        });
      })(IDX.tree || { c: [] }, 0);
      crumbs = crumbs.slice(0, -1);
    }
    // 表示用の見出しで束ねられた第 2 階層の上の第 1 階層は、その見出しに置き換える
    crumbs = crumbs.map(function (c, i) {
      var nx = crumbs[i + 1], v = nx && VIRT[nx.path];
      // 見出しが第 2 階層一つだけを束ねるとき（例：03E を「集合論」として出す）は、同じ名前が二度出ないよう飛ばす
      return v && i === 0 ? { title: v.title, path: v.href.replace(/index\.html$/, ''), s: v.paths.length === 1 ? 1 : 0 } : c;
    });
    var parts = ['<a href="' + ROOT + 'index.html">ホーム</a>'].concat(crumbs.filter(function (c) { return !c.s; }).map(function (c) {
      return '<a href="' + ROOT + c.path + 'index.html">' + esc(c.title) + '</a>';
    }));
    el.innerHTML = '<ol>' + parts.map(function (p) { return '<li>' + p + '</li>'; }).join('') + '</ol>';
    el.setAttribute('aria-label', 'パンくずリスト');
  }

  /* ---------- 本文 ---------- */
  function renderArticle(el, text) {
    var parsed = Core.parseBlocks(text);
    var sec = PG ? String(PG.sec) : '';
    Core.numberTree(parsed, sec, C.ENVIRONMENTS).forEach(function (L) { localLabels[L.label] = L; });
    if (parsed.page.label) localLabels[parsed.page.label] = { type: 'page', num: '', title: parsed.page.title };
    renderer.resetCounters();
    var title = parsed.page.title || document.title;
    // 題字の 2 行表示：トップページは config.js のサイト名と副題、フォルダ概要ページは「日本語名（英語名）」を分ける
    var hero = KIND === 'home' ? [C.SITE_TITLE, C.SITE_SUBTITLE]
      : KIND === 'dir' ? (/^(.+?)（([^（）]+)）$/.exec(title) || [null, title, '']).slice(1) : null;
    el.innerHTML = '<header class="mn-page-head">' +
      // トップページ：題名の上に完全版のメダル（assets/medal.svg）を大きく出す
      (KIND === 'home' ? '<img class="mn-hero-medal" src="' + ROOT + 'assets/medal.svg" width="512" height="512" alt="Summa Mathematica のメダル" decoding="async">' : '') +
      (PG ? '<div class="mn-page-sec">' + esc(PG.subj) + ' §' + PG.sec + '</div>' : '') +
      (hero
        // トップページ・フォルダ概要ページ：題名と副題（日本語名・英語名）を 2 行に分けて飾る
        ? '<h1 class="mn-hero"><span class="mn-hero-title">' + esc(hero[0]) + '</span>' +
          (hero[1] ? '<span class="mn-hero-sub">' + esc(hero[1]) + '</span>' : '') + '</h1></header>'
        : '<h1' + (parsed.page.label ? ' id="' + esc(parsed.page.label) + '"' : '') + '>' + renderer.renderInline(title) + '</h1></header>') +
      '<div class="mn-page-tools"></div>' +
      '<div class="mn-toc-inline"></div>' +
      '<div class="mn-prose">' + renderer.renderNodes(parsed.children) + '</div>';
    if (KIND === 'search' && window.MathSearch) {
      var box = document.createElement('div'); box.className = 'mn-search-page';
      el.appendChild(box); window.MathSearch.renderSearchPage(box);
    }
    el.setAttribute('data-kind', KIND);
    return parsed;
  }

  /* 証明・一般化などの折りたたみ。「すべて開く」の状態はブラウザに記憶 */
  function initFolds(article) {
    var folds = article.querySelectorAll('.mn-prose details.mn-fold');
    var tools = article.querySelector('.mn-page-tools');
    if (!folds.length) { tools.remove(); return; }
    var openAll = store('mn-open-folds') === '1';
    tools.innerHTML = '<button type="button" class="mn-textbtn mn-fold-all"></button>';
    var btn = tools.querySelector('button');
    function apply(v) {
      folds.forEach(function (d) { d.open = v; });
      btn.textContent = v ? '証明・補足をすべて閉じる' : '証明・補足をすべて開く';
      btn.setAttribute('aria-pressed', v);
    }
    apply(openAll);
    btn.addEventListener('click', function () { openAll = !openAll; store('mn-open-folds', openAll ? '1' : '0'); apply(openAll); });
  }

  function fillBackrefs(root) {
    root.querySelectorAll('.mn-backrefs[data-for]').forEach(function (div) {
      var list = IDX.backrefs[div.getAttribute('data-for')];
      if (!list || !list.length) { div.remove(); return; }
      var items = list.map(function (b) {
        var pg = IDX.pages[b[0]];
        var href = (b[0] === pageIdx ? '' : ROOT + pg.path) + (b[1] ? '#' + b[1] : '');
        var prefix = (!PG || pg.dir !== PG.dir) ? pg.subj + ' ' : '';
        var txt = b[2] ? prefix + typeName(b[2]) + ' ' + b[3] : prefix + '§' + pg.sec + ' ' + pg.title;
        return '<a class="mn-xref" href="' + esc(href || '#') + '"' + (b[1] ? ' data-label="' + esc(b[1]) + '"' : '') + '>' + renderer.renderInline(txt) + '</a>';
      });
      div.innerHTML = '<details><summary>この結果を参照している箇所（' + items.length + '）</summary><p>' + items.join('、') + '</p></details>';
    });
  }

  function buildToc(rail, inline, article) {
    var hs = article.querySelectorAll('.mn-prose h2.mn-h, .mn-prose h3.mn-h');
    if (hs.length < 2) { rail.remove(); inline.remove(); return; }
    var items = '';
    hs.forEach(function (h) {
      var clone = h.cloneNode(true); var a = clone.querySelector('.mn-anchor'); if (a) a.remove();
      items += '<li data-level="' + h.tagName.slice(1) + '"><a href="#' + esc(h.id) + '">' + clone.innerHTML + '</a></li>';
    });
    rail.innerHTML = '<div class="mn-toc-title">このページの内容</div><ol>' + items + '</ol>';
    inline.innerHTML = '<details><summary>このページの内容</summary><ol>' + items + '</ol></details>';
    var links = rail.querySelectorAll('a');
    if ('IntersectionObserver' in window) {
      var obs = new IntersectionObserver(function (ents) {
        ents.forEach(function (en) {
          if (en.isIntersecting) links.forEach(function (l) {
            if (l.getAttribute('href') === '#' + en.target.id) l.setAttribute('aria-current', 'true'); else l.removeAttribute('aria-current');
          });
        });
      }, { rootMargin: '-10% 0px -80% 0px' });
      hs.forEach(function (h) { obs.observe(h); });
    }
  }

  function buildPager(el) {
    if (pageIdx < 0) { el.remove(); return; }
    var prev = IDX.pages[pageIdx - 1], next = IDX.pages[pageIdx + 1];
    function link(p, rel, label) {
      if (!p) return '<span class="mn-pager-gap"></span>';
      return '<a class="mn-pager-link" rel="' + rel + '" href="' + ROOT + p.path + '"><span class="mn-pager-dir">' + label + '</span>' +
        '<span class="mn-pager-sub">' + esc(p.subj) + ' §' + p.sec + '</span><span class="mn-pager-title">' + renderer.renderInline(p.title) + '</span></a>';
    }
    el.innerHTML = link(prev, 'prev', '← 前へ') + link(next, 'next', '次へ →');
  }

  function buildPagerTop(el) {
    if (!el) return;
    if (pageIdx < 0) { el.remove(); return; }
    var prev = IDX.pages[pageIdx - 1], next = IDX.pages[pageIdx + 1];
    function link(p, rel, label) {
      if (!p) return '<span class="mn-pager-top-gap"></span>';
      return '<a class="mn-pager-top-link" rel="' + rel + '" href="' + ROOT + p.path + '" title="' + esc(p.subj) + ' §' + p.sec + '">' +
        (rel === 'prev' ? '← ' : '') + '<span class="mn-pager-top-title">' + renderer.renderInline(p.title) + '</span>' + (rel === 'next' ? ' →' : '') + '</a>';
    }
    el.innerHTML = link(prev, 'prev') + link(next, 'next');
  }

  /* ---------- 広告枠 ---------- */
  function fillSlot(slot, html, minH) {
    if (!html) return;
    slot.removeAttribute('hidden');
    slot.style.minHeight = (minH || 0) + 'px';
    slot.innerHTML = '<div class="mn-ad-label">広告</div><div class="mn-ad-body"></div>';
    var bodyEl = slot.querySelector('.mn-ad-body');
    var tmp = document.createElement('div'); tmp.innerHTML = html;
    [].slice.call(tmp.childNodes).forEach(function (n) {
      if (n.nodeName === 'SCRIPT') {
        var s = document.createElement('script');
        [].slice.call(n.attributes).forEach(function (a) { s.setAttribute(a.name, a.value); });
        s.text = n.text; bodyEl.appendChild(s);
      } else bodyEl.appendChild(n);
    });
  }
  function initAds(article) {
    var A = C.ADS || {};
    if (!A.enabled) return;
    if (window.SMAuth && window.SMAuth.isPro()) return;   // Pro プランは広告なし
    var slots = A.slots || {}, mh = A.minHeight || {};
    ['top', 'bottom', 'rail'].forEach(function (k) {
      var el = app.querySelector('[data-ad-slot="' + k + '"]');
      if (el) fillSlot(el, slots[k], mh[k]);
    });
    if (slots.inArticle && KIND === 'page') {
      var every = A.inArticleEvery || 3;
      var hs = article.querySelectorAll('.mn-prose > h2.mn-h');
      for (var i = every; i < hs.length; i += every) {
        var slot = document.createElement('div');
        slot.className = 'mn-ad'; slot.setAttribute('data-ad-slot', 'inArticle');
        hs[i].parentNode.insertBefore(slot, hs[i]);
        fillSlot(slot, slots.inArticle, mh.inArticle);
      }
    }
  }

  /* ---------- 参照プレビュー ----------
   * 他ページの項目の本文は search-index.js（大きい）から作るので、一度描画した本文を Map と sessionStorage に
   * 保存し、同じセッションの 2 回目以降は「読み込み中」を出さずに表示する（キーは索引の更新時刻ごと）。 */
  var pop, popTimer, hideTimer, popFor = null, popLabel = null, popItems = null, popStack = [];
  var PV_KEY = 'sm_pv_cache', PV_MAX = 300, pvMem = new Map();
  (function loadPvCache() {
    try {
      var o = JSON.parse(sessionStorage.getItem(PV_KEY) || 'null');
      if (o && o.b === IDX.built && o.m) Object.keys(o.m).forEach(function (k) { pvMem.set(k, o.m[k]); });
    } catch (e) {}
  })();
  var pvSaveTimer = null;
  function pvPut(label, html) {
    if (!html || /mn-pv-loading/.test(html)) return;
    pvMem.delete(label); pvMem.set(label, html);
    while (pvMem.size > PV_MAX) pvMem.delete(pvMem.keys().next().value);
    clearTimeout(pvSaveTimer);
    pvSaveTimer = setTimeout(function () {
      var m = {}; pvMem.forEach(function (v, k) { m[k] = v; });
      try { sessionStorage.setItem(PV_KEY, JSON.stringify({ b: IDX.built, m: m })); } catch (e) {}
    }, 300);
  }
  /* 項目参照のプレビュー：本文のうち、最初の番号つき箇条書きより前（共通の前提）と、指定した項目だけを残す。
   * it = { list: [項目番号…], focus: 指している項目 }。指定した項目が見つからなければ null（全文を出す）。 */
  function itemsOnly(html, it) {
    // 項目の書き方は 3 通り（site-core.js の addItemIds と同じ）：番号つき箇条書き、箇条書き「- (a) …」、段落の頭の「(1) …」。
    // 段落型の項目では、次の項目の段落までの数式・段落もその項目に含める。
    var KEY = /^\s*[(（](\d+|[a-z]|[ivx]+)[)）]/;
    var box = document.createElement('div'); box.innerHTML = html;
    var nodes = [].slice.call(box.childNodes), want = {}, lastSel = -1, hidden = 0, owner = null, drop = [];
    it.list.forEach(function (n) { want[n] = 1; });
    function mark(el, key) { if (String(it.focus) === key && it.list.length > 1) el.classList.add('mn-item-focus'); }
    nodes.forEach(function (n, i) {
      if (n.nodeType !== 1) { if (owner && !owner.sel) drop.push(n); return; }
      if (n.tagName === 'OL' || n.tagName === 'UL') {
        var k = parseInt(n.getAttribute('start'), 10) || 1, any = false, has = false;
        [].slice.call(n.children).forEach(function (li) {
          if (li.tagName !== 'LI') return;
          var km = n.tagName === 'OL' ? null : KEY.exec(li.textContent);
          var key = n.tagName === 'OL' ? String(k++) : km && km[1];
          if (!key) return;
          has = true;
          if (want[key]) { any = true; if (n.tagName === 'OL') li.value = +key; mark(li, key); }
          else { li.remove(); hidden++; }
        });
        if (has) { owner = null; if (any) lastSel = i; else drop.push(n); return; }
      } else if (n.tagName === 'P' && KEY.test(n.textContent)) {
        var key2 = KEY.exec(n.textContent)[1];
        owner = { sel: !!want[key2] };
        if (owner.sel) { lastSel = i; mark(n, key2); } else { drop.push(n); hidden++; }
        return;
      }
      if (owner) { if (owner.sel) lastSel = i; else drop.push(n); }
    });
    if (lastSel < 0) return null;
    nodes.forEach(function (n, i) { if (i > lastSel) { if (n.nodeType === 1 && drop.indexOf(n) < 0) hidden++; n.remove(); } });
    drop.forEach(function (n) { if (n.parentNode) n.remove(); });
    return { html: box.innerHTML, hidden: hidden };
  }
  /* 参照 a が項目参照なら、同じカード（環境、なければ段落）の中にある同じラベルの項目参照をまとめる。
   * 証明のように本文が「**Step 1.** …」「**(2)** …」などの太字で始まる段落で区切られているときは、その区切り（ステップ）の中だけでまとめる
   * （別のステップで参照するときは、プレビューを一度閉じて開き直すので、まとめても画面を占めるだけ）。 */
  function isStepStart(el) {
    if (el.tagName !== 'P') return false;
    var f = el.firstChild;
    while (f && f.nodeType === 3 && !f.nodeValue.trim()) f = f.nextSibling;
    return !!f && f.nodeName === 'STRONG';
  }
  function itemScope(a) {
    var card = a.closest('.mn-env, .mn-pv-body');
    if (!card) return [a.closest('p, li, td') || a.parentNode];
    var body = card.classList.contains('mn-env') ? card.querySelector(':scope > .mn-env-body') : card;
    if (!body || !body.contains(a)) return [card];
    var top = a; while (top.parentNode !== body) top = top.parentNode;
    var blocks = [].slice.call(body.children);
    if (!blocks.some(isStepStart)) return [card];
    var i = blocks.indexOf(top), s = i, e = i + 1;
    while (s > 0 && !isStepStart(blocks[s])) s--;
    while (e < blocks.length && !isStepStart(blocks[e])) e++;
    return blocks.slice(s, e);
  }
  function itemsFor(a) {
    var n = a && a.getAttribute && a.getAttribute('data-item');
    if (!n) return null;
    var label = a.getAttribute('data-label'), set = {};
    set[n] = 1;
    itemScope(a).forEach(function (sc) {
      sc.querySelectorAll('a.mn-xref[data-item]').forEach(function (b) { if (b.getAttribute('data-label') === label) set[b.getAttribute('data-item')] = 1; });
    });
    return { focus: n, list: Object.keys(set).sort(function (x, y) { return /^\d+$/.test(x) && /^\d+$/.test(y) ? x - y : x < y ? -1 : x > y ? 1 : 0; }) };
  }
  /* 参照プレビュー用の本文をページ単位で読み込む（pv/<ページ番号>.js、数 KB〜数十 KB）。同じページは一度だけ */
  var pvLoading = {};
  function loadPv(p, cb) {
    if (window.SM_PV && window.SM_PV[p]) { if (cb) cb(); return; }
    var L = pvLoading[p];
    if (L) { if (cb) L.push(cb); return; }
    L = pvLoading[p] = cb ? [cb] : [];
    var sc = document.createElement('script');
    sc.src = ROOT + 'pv/' + p + '.js?v=' + encodeURIComponent(IDX.built || '');
    sc.async = true;
    sc.onload = sc.onerror = function () { var fs = pvLoading[p]; delete pvLoading[p]; window.SM_PV = window.SM_PV || {}; if (!window.SM_PV[p]) window.SM_PV[p] = {}; fs.forEach(function (f) { f(); }); };
    document.head.appendChild(sc);
  }
  function prefetchPv(a) {
    var G = IDX.labels[labelOf(a)];
    if (G && G.p !== pageIdx && !pvMem.has(labelOf(a))) loadPv(G.p);
  }
  function previewHtml(label, it) {
    var L = localLabels[label], G = IDX.labels[label];
    var info = resolveRef(label);
    if (!info) return null;
    var isNamed = info.type === 'section' || info.type === 'page';
    // 見出し：左に種類と題、右に操作（📌 固定・開く）、下に所在。flex で並べ、題が長くても操作が下線に重ならないようにする
    var head = '<div class="mn-pv-head"><div class="mn-pv-headline"><span class="mn-pv-kind">' + esc((info.prefix || '') + info.typeName + (info.num ? ' ' + info.num : '')) + '</span>' +
      (info.title ? ' <span class="mn-pv-title">' + renderer.renderInline(info.title) + '</span>' : '') + '</div>' +
      '<div class="mn-pv-actions"><a class="mn-pv-go" href="' + esc(info.href) + '">開く →</a></div><!--where--></div>';
    var bodyHtml = '';
    if (L && info.type !== 'page') {
      var target = document.getElementById(label);
      if (target) {
        if (info.type === 'equation') bodyHtml = target.nextElementSibling ? target.nextElementSibling.outerHTML : '';
        else if (info.type === 'section') {
          var sib = target.nextElementSibling, n = 0;
          while (sib && n < 2 && !/^H[1-6]$/.test(sib.tagName)) { bodyHtml += sib.outerHTML; sib = sib.nextElementSibling; n++; }
        } else { var b = target.querySelector('.mn-env-body'); bodyHtml = b ? b.innerHTML : ''; }
      }
    } else if (G && pvMem.has(label)) {
      var pgc = IDX.pages[G.p];
      bodyHtml = pvMem.get(label);
      head = head.replace('<!--where-->', '<div class="mn-pv-where">' + esc(pgc.subj) + ' §' + pgc.sec + ' ' + esc(pgc.title) + '</div>');
    } else if (G) {
      var pg = IDX.pages[G.p];
      var chunk = window.SM_PV && window.SM_PV[G.p];
      if (G.t === 'equation') bodyHtml = renderer.renderTex({ tex: G.tex, display: true, num: G.n });
      // ページごとの小さなプレビュー用ファイル（pv/<ページ番号>.js）から描く。未読み込みなら読み込んでから描き直す
      else if (chunk && (G.t === 'page' ? '#page' in chunk : label in chunk)) {
        var src = G.t === 'page' ? chunk['#page'] : chunk[label];
        bodyHtml = isNamed ? renderer.renderMarkdown(src.slice(0, 900)) : renderer.renderNodes(Core.parseBlocks(src).children);
      }
      else if (!chunk && (G.e != null || isNamed)) {
        bodyHtml = '<div class="mn-pv-loading" role="status"><span class="mn-sr-only">読み込み中…</span><div class="mn-skel-line"></div><div class="mn-skel-line"></div><div class="mn-skel-line" style="width:64%"></div></div>';
        var want0 = label;
        loadPv(G.p, function () { if (popFor && popLabel === want0) { if (popStack.length) setPopContent(want0, popItems); else showPop(popFor); } });
      }
      else if (G.e != null && window.MathEntries && !window.MathEntries.ready()) {
        // 本文の索引がまだ読み込まれていない：読み込み後に表示し直す
        bodyHtml = '<div class="mn-pv-loading" role="status"><span class="mn-sr-only">読み込み中…</span><div class="mn-skel-line"></div><div class="mn-skel-line"></div><div class="mn-skel-line" style="width:64%"></div></div>';
        var want = label;
        window.MathEntries.load(function () { if (popFor && popLabel === want) { if (popStack.length) setPopContent(want, popItems); else showPop(popFor); } });
      }
      else if (G.e != null && IDX.entries[G.e]) bodyHtml = renderer.renderNodes(Core.parseBlocks(IDX.entries[G.e].x || '').children);
      else if (isNamed) {
        for (var i = 0; i < IDX.entries.length; i++) {
          var e = IDX.entries[i];
          if (e && e.p === G.p && (G.t === 'page' ? e.t === 'page' : e.l === label)) { bodyHtml = renderer.renderMarkdown((e.x || '').slice(0, 900)); break; }
        }
      }
      head = head.replace('<!--where-->', '<div class="mn-pv-where">' + esc(pg.subj) + ' §' + pg.sec + ' ' + esc(pg.title) + '</div>');
      pvPut(label, bodyHtml);
    }
    // 固定（ピン留め）ボタンは「開く →」の左隣。学習機能（learn.js）が読み込まれているときだけ出す
    if (window.SMLearn && info.type !== 'equation' && info.type !== 'section') {
      head = head.replace('<a class="mn-pv-go"', '<button type="button" class="mn-pv-pin" data-pin-label="' + esc(label) + '" title="この項目を付箋ドックに固定">📌 固定</button><a class="mn-pv-go"');
    }
    var part = it && bodyHtml && !/mn-pv-loading/.test(bodyHtml) ? itemsOnly(bodyHtml, it) : null;
    if (part) {
      head = head.replace('</span>', ' の ' + it.list.map(function (k) { return /^\d+$/.test(k) ? k : '(' + k + ')'; }).join(', ') + '</span>');
      if (it.list.length === 1) head = head.replace('href="' + esc(info.href) + '"', 'href="' + esc(itemHref(info.href, label, it.list[0])) + '"');
      return head + '<div class="mn-pv-body mn-prose mn-pv-part">' + part.html +
        (part.hidden ? '<button type="button" class="mn-pv-all">全体を表示（ほかに ' + part.hidden + ' 項目・段落）</button>' : '') + '</div>' +
        (part.hidden ? '<div class="mn-pv-body mn-prose mn-pv-full" hidden>' + bodyHtml + '</div>' : '');
    }
    return head + '<div class="mn-pv-body mn-prose">' + bodyHtml + '</div>';
  }
  function itemHref(href, label, n) { var h = '#' + label; return href.slice(-h.length) === h ? href + '.' + n : href; }
  /* プレビューの中身（ピン留め・学習機能で使う） */
  function previewData(label) {
    var info = resolveRef(label);
    if (!info || info.planned) return null;
    var html = previewHtml(label) || '';
    var tmp = document.createElement('div'); tmp.innerHTML = html;
    var b = tmp.querySelector('.mn-pv-body'), w = tmp.querySelector('.mn-pv-where');
    tmp.querySelectorAll('[id]').forEach(function (x) { x.removeAttribute('id'); });
    var G = IDX.labels[label], pg = G ? IDX.pages[G.p] : PG;
    return {
      id: label, kind: info.typeName + (info.num ? ' ' + info.num : ''), title: info.title || '',
      url: info.href.charAt(0) === '#' ? ROOT + (PG ? PG.path : '') + info.href : info.href,
      sectionPath: pg ? pg.subj + ' §' + pg.sec + ' ' + pg.title : (w ? w.textContent : ''),
      htmlContent: b ? b.innerHTML : '', loading: !!(b && b.querySelector('.mn-pv-loading'))
    };
  }
  /* 用語の別の定義（同じ語を定義している他の項目）へのリンク。クリックでプレビューがその定義に切り替わる */
  function altHtml(ls) {
    return '<div class="mn-pv-alt"><span class="mn-pv-alt-k">ほかの定義：</span>' + ls.map(function (l) {
      var i = resolveRef(l); if (!i) return '';
      return '<a class="mn-xref" data-label="' + esc(l) + '" href="' + esc(i.href) + '">' + esc((i.prefix || '') + i.typeName + (i.num ? ' ' + i.num : '')) +
        (i.title ? '（' + renderer.renderInline(i.title) + '）' : '') + '</a>';
    }).join('、') + '</div>';
  }
  function labelOf(a) { return a.getAttribute('data-label') || a.getAttribute('data-pv-label'); }
  function showPop(a, keepStack) {
    var label = typeof a === 'string' ? a : labelOf(a);
    var it = typeof a === 'string' ? popItems : itemsFor(a);
    var html = previewHtml(label, it);
    var alt = typeof a !== 'string' && a.getAttribute('data-alt');
    if (html && alt) html += altHtml(alt.split(' '));
    if (!html) return;
    if (typeof a !== 'string') popFor = a;
    if (!keepStack) popStack = [];
    popLabel = label; popItems = it;
    if (popStack.length) html = '<button type="button" class="mn-pv-back" title="前のプレビューに戻る">← 戻る</button>' + html;
    var wasHidden = pop.hasAttribute('hidden') || !!pop._out;
    if (pop._out) { pop._out.cancel(); pop._out = null; }
    pop.innerHTML = html;
    pop.querySelectorAll('[id]').forEach(function (x) { x.removeAttribute('id'); });
    pop.removeAttribute('hidden');
    if (PHONE.matches) {
      pop.classList.add('is-sheet'); pop.style.cssText = ''; applySheetHeight();
      if (wasHidden) popAnim([{ transform: 'translateY(100%)' }, { transform: 'translateY(0)' }], 340);
      else popAnim([{ opacity: .4 }, { opacity: 1 }], 160);
      return;
    }
    pop.classList.remove('is-sheet'); pop.style.height = ''; pop.style.maxHeight = '';
    if (wasHidden) popAnim([{ opacity: 0, transform: 'translateY(6px) scale(.985)' }, { opacity: 1, transform: 'none' }], 200);
    else popAnim([{ opacity: .5 }, { opacity: 1 }], 140);
    var r = a.getBoundingClientRect();
    var pw = Math.min(560, window.innerWidth - 24);
    pop.style.width = pw + 'px';
    pop.style.left = Math.min(Math.max(12, r.left), window.innerWidth - pw - 12) + 'px';
    var ph = pop.offsetHeight, top = r.bottom + 8;
    if (top + ph > window.innerHeight - 8 && r.top - ph - 8 > 8) top = r.top - ph - 8;
    pop.style.top = Math.max(8, top) + 'px';
  }
  /* プレビューの出入りのアニメーション：スマホは下から滑らかにせり上がるシート、PC は小さく浮き上がる。
   * 閉じるときも逆向きに動かしてから隠す（動きを減らす設定では一瞬で切り替える）。 */
  var POP_EASE = 'cubic-bezier(.22,.61,.36,1)';
  function popAnim(frames, dur) { if (REDUCED || !pop.animate) return null; return pop.animate(frames, { duration: dur, easing: POP_EASE }); }
  function hidePop() {
    popFor = null; popLabel = null; popStack = [];
    if (pop.hasAttribute('hidden') || pop._out) return;
    var sheet = pop.classList.contains('is-sheet');
    var cur = getComputedStyle(pop).transform;   // スワイプで途中まで下げた位置から続ける
    var a = popAnim(sheet ? [{ transform: cur === 'none' ? 'translateY(0)' : cur }, { transform: 'translateY(100%)' }]
      : [{ opacity: 1 }, { opacity: 0, transform: 'translateY(4px)' }], sheet ? 260 : 140);
    pop.style.transform = '';
    if (!a) { pop.setAttribute('hidden', ''); return; }
    pop._out = a;
    a.onfinish = function () { if (pop._out === a) { pop._out = null; pop.setAttribute('hidden', ''); } };
  }
  /* スマホのシートは下へスワイプして閉じられる（中身が一番上までスクロールされているときだけ）。
   * 上端のつまみ（上 28px）をドラッグすると高さを連続に変えられ、変えた高さは次のプレビューにも引き継ぐ。小さくしすぎると閉じる。 */
  var sheetH = null, SHEET_MIN = 140;
  function applySheetHeight() { if (sheetH) { pop.style.maxHeight = 'none'; pop.style.height = sheetH + 'px'; } }
  function initSheetSwipe() {
    var y0 = null, dy = 0, rs = null;
    pop.addEventListener('touchstart', function (ev) {
      if (!pop.classList.contains('is-sheet')) { y0 = null; rs = null; return; }
      var t = ev.touches[0];
      if (t.clientY - pop.getBoundingClientRect().top < 28) { rs = { y: t.clientY, h: pop.offsetHeight }; y0 = null; return; }
      rs = null;
      if (pop.scrollTop > 0) { y0 = null; return; }
      y0 = t.clientY; dy = 0;
    }, { passive: true });
    pop.addEventListener('touchmove', function (ev) {
      if (rs) {
        var h = Math.min(window.innerHeight * 0.92, rs.h - (ev.touches[0].clientY - rs.y));
        pop.style.maxHeight = 'none'; pop.style.height = Math.max(60, h) + 'px';
        if (ev.cancelable) ev.preventDefault();
        return;
      }
      if (y0 === null) return;
      dy = ev.touches[0].clientY - y0;
      if (dy > 0) { pop.style.transform = 'translateY(' + dy + 'px)'; if (ev.cancelable) ev.preventDefault(); }
      else { pop.style.transform = ''; y0 = null; }
    }, { passive: false });
    pop.addEventListener('touchend', function () {
      if (rs) {
        rs = null;
        var h = pop.offsetHeight;
        if (h < SHEET_MIN) { hidePop(); return; }
        sheetH = h;
        return;
      }
      if (y0 === null) return;
      y0 = null;
      if (dy > 80) hidePop();
      else if (dy > 0) {
        var from = pop.style.transform; pop.style.transform = '';
        popAnim([{ transform: from }, { transform: 'translateY(0)' }], 200);
      }
    });
  }
  /* プレビューの中の参照をクリックすると、プレビュー自体をその項目に切り替える（1 段階のネスト。戻るボタン付き） */
  function setPopContent(label, it) {
    var html = previewHtml(label, it);
    if (!html) return false;
    var forward = popStack.length > 0 && popStack[popStack.length - 1].label !== label;
    popLabel = label; popItems = it || null;
    pop.innerHTML = (popStack.length ? '<button type="button" class="mn-pv-back" title="前のプレビューに戻る">← 戻る</button>' : '') + html;
    pop.querySelectorAll('[id]').forEach(function (x) { x.removeAttribute('id'); });
    pop.scrollTop = 0;
    // 入れ子に進むときは右から、戻るときは左から中身が入ってくる
    if (!REDUCED && pop.firstElementChild && pop.animate) [].forEach.call(pop.children, function (c) {
      c.animate([{ opacity: 0, transform: 'translateX(' + (forward ? 14 : -14) + 'px)' }, { opacity: 1, transform: 'none' }], { duration: 200, easing: POP_EASE });
    });
    return true;
  }
  function drillTo(label, it) {
    if (!popFor || !label || (label === popLabel && !it)) return;
    popStack = [{ label: popLabel, it: popItems }];   // ネストは 1 段階まで：戻り先は常に最初の項目
    if (!setPopContent(label, it)) popStack = [];
  }
  function initPopovers() {
    pop = app.querySelector('.mn-popover');
    initSheetSwipe();
    var touch = false;
    document.addEventListener('touchstart', function () { touch = true; }, { passive: true });
    var PV_SEL = 'a.mn-xref[data-label], [data-pv-label]';
    document.addEventListener('mouseover', function (ev) {
      if (touch || !ev.target.closest) return;
      var a = ev.target.closest(PV_SEL);
      if (a && !pop.contains(a)) { prefetchPv(a); clearTimeout(hideTimer); clearTimeout(popTimer); popTimer = setTimeout(function () { showPop(a); }, 220); }
      else if (ev.target.closest('.mn-popover')) clearTimeout(hideTimer);
    });
    document.addEventListener('mouseout', function (ev) {
      if (touch || !ev.target.closest) return;
      if (ev.target.closest(PV_SEL) || ev.target.closest('.mn-popover')) { clearTimeout(popTimer); hideTimer = setTimeout(hidePop, 260); }
    });
    // タッチ端末：1 回目のタップでプレビュー、「開く」で移動
    document.addEventListener('click', function (ev) {
      if (!ev.target.closest) return;
      if (ev.target.closest('.mn-pv-back')) {
        ev.preventDefault();
        var back = popStack.pop();
        if (back) setPopContent(back.label, back.it);
        return;
      }
      if (ev.target.closest('.mn-pv-all')) {
        // 項目だけのプレビューを全文に切り替える
        ev.preventDefault();
        var full = pop.querySelector('.mn-pv-full'), part = pop.querySelector('.mn-pv-part');
        if (full && part) { part.remove(); full.removeAttribute('hidden'); }
        return;
      }
      var a = ev.target.closest('a.mn-xref[data-label]');
      if (a && pop.contains(a)) { ev.preventDefault(); drillTo(a.getAttribute('data-label'), itemsFor(a)); return; }
      if (a && touch && popFor !== a && !pop.contains(a)) { ev.preventDefault(); showPop(a); return; }
      if (!ev.target.closest('.mn-popover') && !a) hidePop();
    });
    document.addEventListener('keydown', function (ev) { if (ev.key === 'Escape') hidePop(); });
    window.addEventListener('scroll', function () { if (popFor && !touch) hidePop(); }, { passive: true });
  }

  /* ---------- 折りたたみの開閉アニメーション ----------
   * <details> は標準では一瞬で開閉するので、高さを補間して滑らかにする（開くとき・閉じるとき両方）。
   * 動きを減らす設定（prefers-reduced-motion）では何もしない。 */
  var REDUCED = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var FOLD_SEL = 'details.mn-fold, details.mn-tree-dir, .mn-toc-inline details, .mn-backrefs details, details.mn-sform-more, details.mn-sform-order';
  function closedHeight(d) {
    var cs = getComputedStyle(d), sum = d.querySelector(':scope > summary');
    return sum.offsetHeight + ['paddingTop', 'paddingBottom', 'borderTopWidth', 'borderBottomWidth']
      .reduce(function (a, k) { return a + (parseFloat(cs[k]) || 0); }, 0);
  }
  function animateDetails(d, opening) {
    var start = d.getBoundingClientRect().height;      // 途中で逆向きに切り替えても、今の高さから続ける
    if (d._anim) { d._anim.cancel(); d._anim = null; }
    d._target = opening;
    d.open = true;
    var end = opening ? d.getBoundingClientRect().height : closedHeight(d);
    var dur = Math.min(420, 220 + Math.abs(end - start) * 0.25);   // 長い証明ほど少しだけ長く（上限 0.42 秒）
    d.style.overflow = 'hidden';
    var anim = d.animate([{ height: start + 'px' }, { height: end + 'px' }], { duration: dur, easing: 'cubic-bezier(.22,.61,.36,1)' });
    d._anim = anim;
    if (opening) [].slice.call(d.children).forEach(function (c) {
      if (c.tagName !== 'SUMMARY') c.animate([{ opacity: 0, transform: 'translateY(-4px)' }, { opacity: 1, transform: 'none' }], { duration: dur, easing: 'ease-out' });
    });
    anim.onfinish = function () {
      if (d._anim !== anim) return;
      d._anim = null; d.style.overflow = '';
      d.open = opening;
    };
  }
  function initFoldAnimation() {
    if (REDUCED || !Element.prototype.animate) return;
    document.addEventListener('click', function (ev) {
      var sum = ev.target.closest && ev.target.closest('summary');
      if (!sum || ev.defaultPrevented) return;
      var d = sum.parentElement;
      if (!d || !d.matches(FOLD_SEL)) return;
      if (ev.target.closest('a, button, .mn-label')) return;   // 見出し内のリンク・ボタンはそのまま
      ev.preventDefault();
      var want = d._anim ? !d._target : !d.open;
      animateDetails(d, want);
    });
  }

  /* ---------- その他 ---------- */
  function initLabels(root) {
    root.addEventListener('click', function (ev) {
      var chip = ev.target.closest('.mn-label');
      if (!chip) return;
      ev.preventDefault();
      var done = function () { chip.classList.add('is-copied'); setTimeout(function () { chip.classList.remove('is-copied'); }, 900); };
      if (navigator.clipboard) navigator.clipboard.writeText(chip.getAttribute('data-copy')).then(done, done); else done();
    });
  }
  function initTheme() {
    app.querySelector('.mn-theme-toggle').addEventListener('click', function () {
      var cur = document.documentElement.dataset.theme ||
        (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      var next = cur === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      store('mn-theme', next);
    });
  }
  function flashTarget() {
    if (!location.hash) return;
    var el = document.getElementById(decodeURIComponent(location.hash.slice(1)));
    if (!el) return;
    for (var p = el; p; p = p.parentElement) if (p.tagName === 'DETAILS') p.open = true;
    el.scrollIntoView({ block: 'start' });
    var box = el.classList.contains('mn-eq-anchor') ? el.nextElementSibling : el;
    if (box) { box.classList.remove('is-flash'); void box.offsetWidth; box.classList.add('is-flash'); }
    if (navState() === 'open') setNav('hidden');
  }

  /* 検索結果から移動してきたとき、ページ内の該当箇所をすべて目立たせる（約 2.5 秒） */
  function applySearchHighlight(article) {
    var data = null;
    try { data = JSON.parse(sessionStorage.getItem('mn-hl') || 'null'); sessionStorage.removeItem('mn-hl'); } catch (e) {}
    if (!data || Date.now() - data.t > 60000 || !window.MathSearch) return;
    var prose = article.querySelector('.mn-prose') || article;
    var marks = [];
    var re = data.terms && data.terms.length ? window.MathSearch.termRegex(data.terms, data.cs) : null;
    if (re) {
      var walker = document.createTreeWalker(prose, NodeFilter.SHOW_TEXT, {
        acceptNode: function (n) {
          if (!n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
          for (var p = n.parentNode; p && p !== prose; p = p.parentNode) {
            if (p.classList && (p.classList.contains('katex') || p.classList.contains('mn-label'))) return NodeFilter.FILTER_REJECT;
            if (p.tagName === 'SCRIPT' || p.tagName === 'STYLE') return NodeFilter.FILTER_REJECT;
          }
          return NodeFilter.FILTER_ACCEPT;
        }
      });
      var nodes = [];
      while (walker.nextNode()) nodes.push(walker.currentNode);
      nodes.forEach(function (n) {
        re.lastIndex = 0;
        if (!re.test(n.nodeValue)) return;
        re.lastIndex = 0;
        var frag = document.createDocumentFragment(), text = n.nodeValue, last = 0, m;
        while ((m = re.exec(text))) {
          if (m.index > last) frag.appendChild(document.createTextNode(text.slice(last, m.index)));
          var mk = document.createElement('mark'); mk.className = 'mn-hl'; mk.textContent = m[0];
          frag.appendChild(mk); marks.push(mk);
          last = m.index + m[0].length;
          if (!m[0].length) re.lastIndex++;
        }
        if (last < text.length) frag.appendChild(document.createTextNode(text.slice(last)));
        n.parentNode.replaceChild(frag, n);
      });
    }
    (data.tex || []).forEach(function (t) {
      if (!t) return;
      prose.querySelectorAll('annotation[encoding="application/x-tex"]').forEach(function (an) {
        if (window.MathSearch.normTex(an.textContent).indexOf(t) >= 0) {
          var k = an.closest('.katex'); if (k) { k.classList.add('mn-hl-math'); marks.push(k); }
        }
      });
    });
    if (!marks.length) return;
    // 折りたたみの中にあるものも見えるように開く
    marks.forEach(function (mk) { for (var p = mk.parentElement; p && p !== prose; p = p.parentElement) if (p.tagName === 'DETAILS') p.open = true; });
    if (!location.hash) marks[0].scrollIntoView({ block: 'center' });
    setTimeout(function () { marks.forEach(function (mk) { mk.classList.add('is-fading'); }); }, 2500);
    setTimeout(function () {
      marks.forEach(function (mk) {
        if (mk.tagName === 'MARK') { var t = document.createTextNode(mk.textContent); mk.parentNode.replaceChild(t, mk); }
        else mk.classList.remove('mn-hl-math', 'is-fading');
      });
      prose.normalize();
    }, 3600);
  }

  function main() {
    var L = buildLayout();
    app = L.app;
    var article = app.querySelector('.mn-article');
    var parsed = renderArticle(article, L.text);
    document.title = KIND === 'home'
      ? C.SITE_TITLE + (C.SITE_SUBTITLE ? '（' + C.SITE_SUBTITLE + '）' : '')
      : (parsed.page.title || '') + ' | ' + C.SITE_TITLE;
    renderTree(app.querySelector('.mn-tree'));
    renderCrumbs(app.querySelector('.mn-crumbs'));
    fillBackrefs(article);
    linkTerms(article);
    initFolds(article);
    buildToc(app.querySelector('.mn-toc'), article.querySelector('.mn-toc-inline'), article);
    buildPager(app.querySelector('.mn-pager'));
    buildPagerTop(app.querySelector('.mn-pager-top'));
    initNav();
    initPopovers();
    initLabels(article);
    initFoldAnimation();
    initTheme();
    initAds(article);
    var railAd = app.querySelector('.mn-rail [data-ad-slot]');
    if (!app.querySelector('.mn-rail .mn-toc') && (!railAd || railAd.hasAttribute('hidden'))) app.classList.add('mn-no-rail');
    app.querySelector('.mn-search-trigger').addEventListener('click', function () { window.MathSearch && window.MathSearch.open(); });
    window.addEventListener('hashchange', function () { applySearchHighlight(article); flashTarget(); });
    // 同じページ内の結果へ移動したとき（ハッシュが変わらない場合を含む）に search.js から呼ばれる
    window.MathSiteRefresh = function () { applySearchHighlight(article); flashTarget(); };
    setTimeout(function () { applySearchHighlight(article); flashTarget(); }, 0);
    window.MathSite = {
      root: ROOT, page: PAGE, kind: KIND, pageInfo: PG, pageIndex: pageIdx, index: IDX, app: app, article: article,
      renderer: renderer, resolveRef: resolveRef, typeName: typeName, previewData: previewData, store: store,
      loadPreview: function (label, cb) { var G = IDX.labels[label]; if (G && !(window.SM_PV && window.SM_PV[G.p])) loadPv(G.p, cb); else cb(); }
    };
    try { document.dispatchEvent(new CustomEvent('mn:ready', { detail: window.MathSite })); } catch (e) {}
    if (!window.MATH_INDEX) article.insertAdjacentHTML('afterbegin', '<div class="mn-warn">site-index.js が見つかりません。<code>node tools/build.js</code> を実行してください。</div>');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', main); else main();
})();
