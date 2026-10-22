/*
 * learn.js — 学習機能（付箋ドック・理解済みチェック・前提の確認・学習ルート・直感イントロ・証明パズル・体感ミニゲーム）
 *
 * site.js が本文を描画し終えたとき（mn:ready イベント）に、描画済みの DOM へ部品を差し込む。原稿・site-core.js には触れない。
 * プラン（Free / Pro）は auth-state.js の SMAuth で判定する。教材データは
 *   - learn/manifest.js（window.SM_LEARN_MANIFEST。ページごとの直感テキストと差し込み位置。同期で読むので画面がずれない）
 *   - api/pro-content/<ページのラベル>.json（パズルの手順など。SMAuth.fetchProContent で取得）
 * から読む。ブラウザに保存するもの（localStorage）：
 *   sm_pinned_items（付箋）, sm_pin_sets（付箋のセット。Pro）, sm_understood（理解済み）, sm_goals（目標。Pro）, sm_plan_tier（プラン）
 * クラス名はサイトの決まりに合わせて mn- 接頭辞を使う。
 */
(function () {
  'use strict';
  var A = window.SMAuth || { isPro: function () { return false; }, getPlan: function () { return 'free'; }, onChange: function () {}, limit: function () { return 1; } };
  var C = window.MATH_CONFIG || { ENVIRONMENTS: {} };
  var ENVS = C.ENVIRONMENTS || {};
  var S = null;                 // site.js が公開する window.MathSite
  var CORE_TYPES = { axiom: 1, definition: 1, notation: 1, theorem: 1, proposition: 1, lemma: 1, corollary: 1, fact: 1, construction: 1 };
  var PIN_KINDS = { def: 1, thm: 1, fact: 1, cex: 1 };

  /* ---------- 保存 ---------- */
  function getJSON(k, d) { try { var v = JSON.parse(localStorage.getItem(k)); return v == null ? d : v; } catch (e) { return d; } }
  function setJSON(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } }
  function esc(s) { return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function el(html) { var t = document.createElement('div'); t.innerHTML = html.trim(); return t.firstChild; }
  function isPro() { return A.isPro(); }
  /* ---------- 動き（すべて Web Animations。動きを減らす設定では一瞬で切り替える） ---------- */
  var REDUCED = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var PHONE = window.matchMedia ? matchMedia('(max-width: 768px)') : { matches: false };   // ドックが下からのシートになる幅
  var EASE = 'cubic-bezier(.22,.61,.36,1)';
  function anim(node, frames, dur) { if (REDUCED || !node || !node.animate) return null; return node.animate(frames, { duration: dur, easing: EASE }); }
  // 出ていく動き：終わってから done（途中で入り直したら node._out を cancel する）
  function animOut(node, frames, dur, done) {
    var a = anim(node, frames, dur);
    if (!a) { done(); return; }
    node._out = a;
    a.onfinish = function () { if (node._out === a) { node._out = null; done(); } };
  }
  function cancelOut(node) { if (node && node._out) { node._out.cancel(); node._out = null; return true; } return false; }
  // 高さを補間して開閉する（折りたたみ・付箋の最小化・演習の本体）
  function animHeight(node, from, to, dur) {
    var a = anim(node, [{ height: from + 'px', overflow: 'hidden' }, { height: to + 'px', overflow: 'hidden' }], dur || Math.min(380, 200 + Math.abs(to - from) * 0.25));
    return a;
  }
  // 並べ替えの前後で要素の位置を補間する（FLIP）
  function flip(nodes, mutate) {
    var first = new Map(); nodes.forEach(function (n) { first.set(n, n.getBoundingClientRect().top); });
    mutate();
    if (REDUCED) return;
    nodes.forEach(function (n) {
      var d = first.get(n) - n.getBoundingClientRect().top;
      if (d) anim(n, [{ transform: 'translateY(' + d + 'px)' }, { transform: 'none' }], 240);
    });
  }
  /* ---------- 表示の設定（学習向けの補助を最初から開くか、たたんでおくか） ----------
   * intro：ページ冒頭の直感イメージ（と動画）、roadmap：ここまでのロードマップ、intuition：定理ごとの「意図・直感」。
   * たたんでも見出しの 1 行は残るので、研究者が新しい分野を学ぶときなどはその場で開ける。
   * prereq：定理の上の「この定理が使う未チェックの項目」（'open' 表示／'closed' 非表示。2026-10-22 ユーザー指示で追加）。 */
  var PREF_DEFAULT = { intro: 'open', roadmap: 'open', intuition: 'closed', prereq: 'open' };
  function prefs() { var p = getJSON('sm_prefs', {}); var o = {}; Object.keys(PREF_DEFAULT).forEach(function (k) { o[k] = p[k] === 'open' || p[k] === 'closed' ? p[k] : PREF_DEFAULT[k]; }); return o; }
  function setPref(k, v) { var p = prefs(); p[k] = v; setJSON('sm_prefs', p); applyPrefs(); }
  function applyPrefs() {
    if (!S || !S.article) return;
    var P = prefs();
    var intro = S.article.querySelector('details.mn-intuition-slot'); if (intro) intro.open = P.intro === 'open';
    var pm = S.article.querySelector('details.mn-pagemap'); if (pm && pm.open !== (P.roadmap === 'open')) pm.open = P.roadmap === 'open';
    var all = S.store && S.store('mn-open-folds') === '1';
    S.article.querySelectorAll('.mn-prose details.mn-env[data-env="intuition"]').forEach(function (d) { d.open = all || P.intuition === 'open'; });
    renderPrereqAlerts();
  }
  function typing(t) { return t && (/INPUT|TEXTAREA|SELECT/.test(t.tagName) || t.isContentEditable); }

  /* ---------- 参照の向きを逆にした表（前提＝この項目が参照している項目） ----------
   * build.js が参照ごとに「どこに書かれていたか」（role）を記録している：
   *   's' 主張の中、'p' 証明の中、'n' 記法と定義の確認、'm' 例・補足など、'' 地の文。
   * 項目の前提として使うのは 's' と 'p' だけ（例・補足での言及は前提ではない）。 */
  var FWD = null, PFWD = null;
  var RANK = { s: 2, p: 1 };
  function forward() {
    if (FWD) return FWD;
    FWD = {};
    var B = (S && S.index.backrefs) || {}, L = (S && S.index.labels) || {};
    Object.keys(B).forEach(function (target) {
      var T = L[target];
      if (!T || !CORE_TYPES[T.t]) return;
      B[target].forEach(function (b) {
        var from = b[1], role = b[4] || '';
        if (!from || from === target || !RANK[role]) return;
        var m = FWD[from] = FWD[from] || {};
        if (!m[target] || RANK[role] > RANK[m[target]]) m[target] = role;
      });
    });
    // 主張の中の用語（本文で定義へのリンクになる語）も「主張の前提」に数える
    var TD = (S && S.index.tdeps) || {};
    Object.keys(TD).forEach(function (from) {
      TD[from].forEach(function (t) {
        if (t === from || !L[t] || !CORE_TYPES[L[t].t]) return;
        (FWD[from] = FWD[from] || {})[t] = 's';
      });
    });
    return FWD;
  }
  // kind：'s'（主張が使う）、'p'（証明だけが使う）、省略で両方
  function prereqs(label, kind) {
    var m = forward()[label] || {};
    return Object.keys(m).filter(function (t) { return !kind || m[t] === kind; });
  }
  // ページどうしの前提：ページ A の主張・証明・記法の欄がページ B の項目を参照していれば、B は A の前提。重みは参照の数
  function pageForward() {
    if (PFWD) return PFWD;
    PFWD = {};
    var B = (S && S.index.backrefs) || {}, L = (S && S.index.labels) || {};
    Object.keys(B).forEach(function (target) {
      var T = L[target]; if (!T) return;
      B[target].forEach(function (b) {
        var role = b[4] || '';
        if (role !== 's' && role !== 'p' && role !== 'n') return;
        if (b[0] === T.p) return;
        var m = PFWD[b[0]] = PFWD[b[0]] || {};
        m[T.p] = (m[T.p] || 0) + 1;
      });
    });
    return PFWD;
  }
  function refText(label) {
    var r = S.resolveRef(label);
    if (!r || r.planned) return label;
    return (r.prefix || '') + r.typeName + (r.num ? ' ' + r.num : '');
  }
  function xref(label, extraClass, inner) {
    var r = S.resolveRef(label);
    if (!r || r.planned) return '<span class="mn-xref-planned">' + esc(label) + '</span>';
    return '<a class="mn-xref' + (extraClass ? ' ' + extraClass : '') + '" href="' + esc(r.href) + '" data-label="' + esc(label) + '">' +
      (inner != null ? inner : S.renderer.renderInline(refText(label))) + '</a>';
  }

  /* ---------- 理解済みチェック ---------- */
  function understood() { return getJSON('sm_understood', {}); }
  function isUnderstood(label) { return !!understood()[label]; }
  function setUnderstood(label, v) {
    var u = understood();
    if (v) u[label] = Date.now(); else delete u[label];
    setJSON('sm_understood', u);
    refreshUnderstoodUI();
  }

  /* ---------- モーダル・トースト ---------- */
  var modalEl = null, lastFocus = null;
  function closeModal(instant) {
    if (!modalEl) return;
    var m = modalEl; modalEl = null;
    document.documentElement.classList.remove('mn-modal-open');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
    if (instant) { m.remove(); return; }
    m.style.pointerEvents = 'none';
    anim(m.querySelector('.mn-learn-modal-scrim'), [{ opacity: 1 }, { opacity: 0 }], 180);
    animOut(m.querySelector('.mn-learn-modal-box'), [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: 'translateY(8px) scale(.985)' }], 180, function () { m.remove(); });
  }
  function openModal(title, bodyHtml, opts) {
    var again = !!modalEl;
    closeModal(true);
    lastFocus = document.activeElement;
    opts = opts || {};
    modalEl = el('<div class="mn-learn-modal' + (opts.wide ? ' is-wide' : '') + '" role="dialog" aria-modal="true" aria-label="' + esc(title) + '">' +
      '<div class="mn-learn-modal-scrim" data-close></div>' +
      '<div class="mn-learn-modal-box"><div class="mn-learn-modal-head"><span class="mn-learn-modal-title">' + esc(title) + '</span>' +
      '<button type="button" class="mn-iconbtn mn-learn-modal-close" data-close aria-label="閉じる">✕</button></div>' +
      '<div class="mn-learn-modal-body">' + bodyHtml + '</div></div></div>');
    document.body.appendChild(modalEl);
    document.documentElement.classList.add('mn-modal-open');
    if (!again) {   // 開き直し（セット画面の更新など）では動かさない
      anim(modalEl.querySelector('.mn-learn-modal-scrim'), [{ opacity: 0 }, { opacity: 1 }], 220);
      anim(modalEl.querySelector('.mn-learn-modal-box'), [{ opacity: 0, transform: 'translateY(14px) scale(.98)' }, { opacity: 1, transform: 'none' }], 280);
    }
    modalEl.addEventListener('click', function (ev) { if (ev.target.closest('[data-close]')) closeModal(); });
    var f = modalEl.querySelector('.mn-learn-modal-body button, .mn-learn-modal-close'); if (f) f.focus();
    return modalEl;
  }
  var toastEl = null;
  function toast(msg) {
    // 前の通知は下へ引っ込めて、新しい通知を下から滑らかに出す
    if (toastEl) { var old = toastEl; clearTimeout(old._t); animOut(old, [{ opacity: 1, transform: 'translate(-50%, 0)' }, { opacity: 0, transform: 'translate(-50%, 16px)' }], 180, function () { old.remove(); }); }
    var t = toastEl = el('<div class="mn-toast" role="status">' + msg + '</div>');
    document.body.appendChild(t);
    anim(t, [{ opacity: 0, transform: 'translate(-50%, 28px) scale(.97)' }, { opacity: 1, transform: 'translate(-50%, 0) scale(1)' }], 360);
    t._t = setTimeout(function () {
      animOut(t, [{ opacity: 1, transform: 'translate(-50%, 0)' }, { opacity: 0, transform: 'translate(-50%, 24px)' }], 320, function () { t.remove(); if (toastEl === t) toastEl = null; });
    }, 2600);
  }
  /* Pro の案内（派手な広告にせず、何が使えるようになるかを淡々と示す） */
  var PRO_FEATURES = [
    ['付箋ドック', '1 件まで（浮かせて本文と比較できる）', '無制限・複数を浮かせて比較・セットの保存'],
    ['学習ルート', '樹形図の閲覧', '達成率・未習得の強調・目標の登録'],
    ['証明パズル・体感ゲーム', '各分野の最初の 1 問', 'すべての問題'],
    ['直感イメージ動画', '冒頭 15 秒', '全編'],
    ['証明の読み方', '全文表示', '1 ステップずつの段階表示・広告なし']
  ];
  function proModal(reason) {
    var rows = PRO_FEATURES.map(function (r) { return '<tr><th>' + esc(r[0]) + '</th><td>' + esc(r[1]) + '</td><td>' + esc(r[2]) + '</td></tr>'; }).join('');
    var m = openModal('Pro プラン', (reason ? '<p class="mn-pro-reason">' + reason + '</p>' : '') +
      '<p>定義・定理・証明・検索・索引は、これまでどおりすべて無料で読めます。Pro プランでは、読むための道具が増えます。</p>' +
      '<table class="mn-pro-table"><thead><tr><th></th><th>無料</th><th>Pro</th></tr></thead><tbody>' + rows + '</tbody></table>' +
      '<p class="mn-pro-note">試作版のため、決済はまだありません。画面右上の「Free / Pro」切替（開発用）で両方の表示を確かめられます。</p>' +
      '<div class="mn-learn-actions"><button type="button" class="mn-btn" data-dev-pro>（開発用）Pro に切り替える</button><button type="button" class="mn-btn mn-btn-quiet" data-close>閉じる</button></div>');
    m.querySelector('[data-dev-pro]').addEventListener('click', function () { closeModal(); A.setPlan('pro'); });
  }

  /* =====================================================================
   * 機能 A：付箋ドック（Free 1 件 / Pro 無制限）
   * ===================================================================== */
  var dock = null, dockTab = null, floats = [];
  function pins() { return getJSON('sm_pinned_items', []); }
  function savePins(p) { setJSON('sm_pinned_items', p); renderDock(); refreshPinButtons(); }
  function isPinned(id) { return pins().some(function (p) { return p.id === id; }); }
  function pinData(label, cb) {
    var d = S.previewData(label);
    if (!d) return;
    if (d.loading && window.MathEntries) { window.MathEntries.load(function () { pinData(label, cb); }); return; }
    cb(d);
  }
  function pinLabel(label) {
    if (isPinned(label)) { openDock(true); highlightCard(label); return; }
    pinData(label, function (d) {
      var p = pins(), lim = A.limit('pins');
      var item = { id: d.id, kind: d.kind, title: d.title, sectionPath: d.sectionPath, url: d.url, htmlContent: d.htmlContent, t: Date.now() };
      if (p.length >= lim) {
        var m = openModal('ピン留めの上限', '<p><strong>無料プランでは 1 件までピン留めできます。</strong> いまの付箋を入れ替えるか、Pro プランで複数の定義を並べて証明を読みましょう。</p>' +
          '<div class="mn-pin-swap"><div><span class="mn-pin-swap-k">いまの付箋</span>' + esc(p[0].kind) + ' ' + esc(p[0].title) + '</div><div><span class="mn-pin-swap-k">新しい付箋</span>' + esc(item.kind) + ' ' + esc(item.title) + '</div></div>' +
          '<div class="mn-learn-actions"><button type="button" class="mn-btn" data-swap>いまピン留めを入れ替える</button><button type="button" class="mn-btn mn-btn-quiet" data-see-pro>Pro プランを見る</button></div>');
        m.querySelector('[data-swap]').addEventListener('click', function () { closeModal(); savePins([item]); if (!PHONE.matches) openDock(true); toast('📌 付箋を入れ替えました'); });
        m.querySelector('[data-see-pro]').addEventListener('click', function () { proModal('付箋ドックは Pro プランで無制限に使えます。'); });
        return;
      }
      p.unshift(item); savePins(p);   // 新しく固定したものを一番上に
      if (PHONE.matches && dock.hidden) {   // スマホは画面を覆わないよう、下のボタンを弾ませて知らせるだけ
        anim(dockTab, [{ transform: 'translateX(-50%) scale(1)' }, { transform: 'translateX(-50%) scale(1.14)' }, { transform: 'translateX(-50%) scale(1)' }], 420);
        toast('📌 ' + esc(item.kind) + ' を固定しました（下の「ピン留め」で表示）');
      } else {
        openDock(true); highlightCard(label);
        toast('📌 ' + esc(item.kind) + ' を付箋ドックに固定しました（<kbd>p</kbd> で開閉）');
      }
    });
  }
  function unpin(id) {
    floats.filter(function (w) { return w._pid === id; }).forEach(function (w) { closeFloat(w, true); });
    var done = function () { savePins(pins().filter(function (p) { return p.id !== id; })); };
    var c = dock && !dock.hidden && dock.querySelector('.mn-pin-card[data-pin-id="' + (window.CSS && CSS.escape ? CSS.escape(id) : id) + '"]');
    if (!c || REDUCED) { done(); return; }
    var h = c.offsetHeight;
    c.style.pointerEvents = 'none';
    animOut(c, [{ opacity: 1, height: h + 'px', marginBottom: '8px', overflow: 'hidden' }, { opacity: 0, height: '0px', marginBottom: '0px', overflow: 'hidden', transform: 'translateX(24px)' }], 240, done);
  }

  function firstMath(html) {
    var t = document.createElement('div'); t.innerHTML = html;
    var m = t.querySelector('.katex-display') || t.querySelector('.katex');
    if (m) return m.outerHTML;
    var tx = (t.textContent || '').trim();
    return esc(tx.length > 60 ? tx.slice(0, 60) + '…' : tx);
  }
  /* 付箋のカード：見出し（種類と題）と本文だけ。ボタンは置かない。
   * 外す・並べ替えるは「編集」（長押しでも入る。iPhone のホーム画面と同じ操作）で行う。所在の行がその項目へのリンク。 */
  /* 付箋の中のリンク：固定したページからの相対パスで保存されているので、別のページ（トップページなど）で開くと 404 になる。
   * 表示するたびに、ラベルから今のページ基準のリンクを作り直す（2026-10-22 ユーザー指摘）。下の「開く →」も同じ */
  function pinHref(p) { var i = S.resolveRef && S.resolveRef(p.id); return i && !i.planned ? i.href : p.url; }
  function whereHtml(p) { return '<a class="mn-pin-where" href="' + esc(pinHref(p)) + '" title="' + esc(p.sectionPath || '') + '">開く →</a>'; }
  function fixPinLinks(root) {
    if (!S.resolveRef) return;
    root.querySelectorAll('a[data-label]').forEach(function (a) {
      var l = a.getAttribute('data-label'), i = S.resolveRef(l);
      if (!i || i.planned) return;
      var href = i.href, item = a.getAttribute('data-item'), hash = '#' + l;
      if (item && href.slice(-hash.length) === hash) href += '.' + item;
      a.setAttribute('href', href);
    });
  }
  function cardHtml(p, collapsed) {
    return '<div class="mn-pin-card' + (collapsed ? ' is-min' : '') + '" data-pin-id="' + esc(p.id) + '">' +
      '<div class="mn-pin-head" role="button" tabindex="0" title="クリックで畳む／広げる・長押しで並べ替え">' +
        '<span class="mn-pin-kind">' + esc(p.kind) + '</span><span class="mn-pin-title">' + (p.title ? S.renderer.renderInline(p.title) : '') + '</span>' +
        '<button type="button" class="mn-pin-x" data-unpin aria-label="固定を外す" title="固定を外す"></button></div>' +
      '<div class="mn-pin-body mn-prose">' + p.htmlContent +
        whereHtml(p) + '</div></div>';
  }
  function ensureDock() {
    if (dock) return;
    dock = el('<aside class="mn-dock" aria-label="付箋ドック" hidden><div class="mn-dock-resize" role="separator" aria-orientation="vertical" aria-label="ドックの幅を変える" title="ドラッグで幅を変える・ダブルクリックで元の幅"></div><div class="mn-dock-head"></div><div class="mn-dock-list"></div></aside>');
    dockTab = el('<button type="button" class="mn-dock-tab" aria-label="付箋ドックを開く（p）" title="付箋ドック（p）・ドラッグで移動・ダブルクリックで元の位置"></button>');
    document.body.appendChild(dock); document.body.appendChild(dockTab);
    dockTab.addEventListener('click', function () { if (dockTab._moved) { dockTab._moved = false; return; } toggleDock(); });
    wireTabDrag();
    wireDockResize();
    dock.addEventListener('click', onDockClick);
    // スマホ：見出し（上端のつまみ）を上下にドラッグすると、指に合わせて高さが連続的に変わる（段階なし）。
    // 指を離した位置の高さで止まる。勢いよく下へ払うと閉じ、上へ払うといちばん高くなる。かなり下げても閉じる
    var y0 = null, h0 = 0, hNow = 0, vel = 0, lastY = 0, lastT = 0, rafH = 0;
    dock.addEventListener('touchstart', function (ev) {
      if (!PHONE.matches || !ev.target.closest('.mn-dock-head') || ev.target.closest('button, .mn-dock-menu')) { y0 = null; return; }
      y0 = lastY = ev.touches[0].clientY; lastT = Date.now(); vel = 0; h0 = hNow = dock.offsetHeight;
      dock.classList.add('is-resizing');
    }, { passive: true });
    dock.addEventListener('touchmove', function (ev) {
      if (y0 === null) return;
      var y = ev.touches[0].clientY, t = Date.now();
      if (t > lastT) vel = 0.7 * vel + 0.3 * ((y - lastY) / (t - lastT));   // px/ms、下向きが正（なめらかにした速度）
      lastY = y; lastT = t;
      hNow = Math.max(56, Math.min(window.innerHeight * SHEET_MAX, h0 - (y - y0)));
      // 動かしている間はドックの高さだけを変える（ページ全体の余白 --mn-sheet-h は離したときに 1 回だけ変える。
      // 毎回変えると本文全体（KaTeX を含む）の再レイアウトが指の動きごとに起きて重い）。描画はフレームごとに 1 回
      if (!rafH) rafH = requestAnimationFrame(function () { rafH = 0; dock.style.height = hNow + 'px'; });
      if (ev.cancelable) ev.preventDefault();
    }, { passive: false });
    dock.addEventListener('touchend', function () {
      if (y0 === null) return;
      y0 = null; dock.classList.remove('is-resizing');
      if (rafH) { cancelAnimationFrame(rafH); rafH = 0; dock.style.height = hNow + 'px'; }
      var vh = window.innerHeight, frac = hNow / vh;
      if (vel > 0.9 || frac < 0.14) { closeDock(); return; }   // 下へ払う・ほとんど下げた：閉じる
      if (vel < -0.9) frac = SHEET_MAX;                           // 上へ払う：いちばん高く
      setSheetHeight(Math.max(SHEET_MIN, Math.min(SHEET_MAX, frac)), hNow);
    });
    dock.addEventListener('keydown', function (ev) {
      if ((ev.key === 'Enter' || ev.key === ' ') && ev.target.classList.contains('mn-pin-head')) { ev.preventDefault(); toggleMin(ev.target.parentNode); }
    });
    wireCards();
  }
  /* ---------- 付箋カードの操作（編集モードはなく、カードはそのままの大きさで）----------
   *   長押し（0.4 秒）       → カードが持ち上がり、上下にドラッグして並べ替え。一覧の端に近づくと自動でスクロールする
   *   横にスワイプ（タッチ）  → 外す（縦の動きは一覧のスクロールのまま）
   *   すぐにドラッグ（マウス）→ 本文側へ出すと浮かせる（並べ替え中でもドックの外へ出せば浮かせる）
   *   クリック・タップ       → 見出しなら畳む／広げる。PC は見出しの × で外す */
  function wireCards() {
    var list = dock.querySelector('.mn-dock-list');
    var g = null;   // いまの操作
    function cards() { return [].slice.call(list.querySelectorAll('.mn-pin-card')); }
    function startDrag() {
      var all = cards(), card = g.card;
      g.mode = 'drag';
      g.from = g.to = all.indexOf(card);
      g.scroll0 = list.scrollTop; g.yStart = g.lastY;
      g.slots = all.map(function (c) { return { el: c, top: c.offsetTop, h: c.offsetHeight }; });
      g.dockLeft = dock.getBoundingClientRect().left;
      list.classList.add('is-sorting');
      card.classList.add('is-drag');
      card._noClick = true;
      if (navigator.vibrate) try { navigator.vibrate(8); } catch (e) {}
      requestAnimationFrame(autoScroll);
    }
    function layoutDrag() {
      var d = g, dy = d.lastY - d.yStart + (list.scrollTop - d.scroll0);
      d.card.style.translate = '0 ' + dy + 'px';
      var me = d.slots[d.from], center = me.top + me.h / 2 + dy, to = 0;
      d.slots.forEach(function (sl, i) { if (i !== d.from && center > sl.top + sl.h / 2) to++; });
      if (to === d.to) return;
      d.to = to;
      var gap = me.h + 8;
      d.slots.forEach(function (sl, i) {
        if (i === d.from) return;
        var shift = (d.from < to && i > d.from && i <= to) ? -gap : (d.from > to && i >= to && i < d.from) ? gap : 0;
        sl.el.style.translate = shift ? '0 ' + shift + 'px' : '';
      });
    }
    // 一覧の上端・下端に近いあいだ、なめらかにスクロールし続ける（近いほど速く）
    function autoScroll() {
      if (!g || g.mode !== 'drag') return;
      var r = list.getBoundingClientRect(), y = g.lastY, edge = 56, v = 0;
      if (y < r.top + edge) v = -Math.min(18, (r.top + edge - y) / 3);
      else if (y > r.bottom - edge) v = Math.min(18, (y - (r.bottom - edge)) / 3);
      if (v) { var before = list.scrollTop; list.scrollTop += v; if (list.scrollTop !== before) layoutDrag(); }
      requestAnimationFrame(autoScroll);
    }
    function finishDrag() {
      var d = g;
      list.classList.remove('is-sorting');
      d.card.classList.remove('is-drag');
      cards().forEach(function (c) { c.style.translate = ''; });
      if (d.to !== d.from) {
        var p = pins(), i = p.findIndex(function (x) { return x.id === d.id; });
        if (i >= 0) { var it = p.splice(i, 1)[0]; p.splice(d.to, 0, it); savePins(p); }
      }
    }
    function toFloat(ev) {
      // マウスでドックの外（本文側）へ出したら浮かせる
      cards().forEach(function (c) { c.style.translate = ''; });
      list.classList.remove('is-sorting'); g.card.classList.remove('is-drag');
      g.mode = 'float';
      g.float = floatCard(g.id, { x: ev.clientX - 60, y: ev.clientY - 18 });
      if (!g.float) g.mode = 'none';
    }
    function onMove(ev) {
      if (!g || ev.pointerId !== g.pid) return;
      var dx = ev.clientX - g.x0, dy = ev.clientY - g.y0;
      g.lastX = ev.clientX; g.lastY = ev.clientY;
      if (g.mode === 'press') {
        if (Math.abs(dx) + Math.abs(dy) < 8) return;
        clearTimeout(g.timer);
        if (g.type === 'mouse') { g.mode = 'pull'; g.card._noClick = true; }
        else if (Math.abs(dx) > Math.abs(dy) * 1.2) { g.mode = 'swipe'; g.w = g.card.offsetWidth; g.card.classList.add('is-swipe'); g.card._noClick = true; }
        else { g = null; return; }   // 縦の動き：一覧のスクロールに任せる
      }
      if (g.mode === 'swipe') {
        g.card.style.translate = dx + 'px 0';
        g.card.style.opacity = String(Math.max(0.3, 1 - Math.abs(dx) / g.w));
        g.card.classList.toggle('is-armed', Math.abs(dx) > g.w * 0.3);
        g.dx = dx;
      } else if (g.mode === 'pull') {
        g.card.style.translate = Math.min(0, dx) + 'px ' + dy * 0.2 + 'px';
        if (ev.clientX < dock.getBoundingClientRect().left - 12) { g.card.style.translate = ''; toFloat(ev); }
      } else if (g.mode === 'drag') {
        if (g.type === 'mouse' && ev.clientX < g.dockLeft - 12) { toFloat(ev); return; }
        layoutDrag();
      } else if (g.mode === 'float' && g.float) placeFloat(g.float, ev.clientX - 60, ev.clientY - 18);
      if (ev.cancelable) ev.preventDefault();
    }
    function onUp(ev) {
      if (!g || (ev && ev.pointerId !== g.pid)) return;
      var cur = g; clearTimeout(cur.timer);
      window.removeEventListener('pointermove', onMove); window.removeEventListener('pointerup', onUp); window.removeEventListener('pointercancel', onCancel);
      if (cur.mode === 'drag') finishDrag();
      else if (cur.mode === 'swipe') {
        var c = cur.card, dx = cur.dx || 0;
        c.classList.remove('is-swipe', 'is-armed');
        if (Math.abs(dx) > cur.w * 0.3) {
          animOut(c, [{ translate: dx + 'px 0', opacity: c.style.opacity || 1 }, { translate: (dx < 0 ? -1 : 1) * (cur.w + 40) + 'px 0', opacity: 0 }], 180, function () {
            c.style.translate = ''; c.style.opacity = ''; c.style.visibility = 'hidden'; unpin(cur.id);
          });
        } else {
          var from = c.style.translate; c.style.translate = ''; c.style.opacity = '';
          anim(c, [{ translate: from }, { translate: '0 0' }], 180);
        }
      } else if (cur.mode === 'pull') { cur.card.style.translate = ''; }
      else if (cur.mode === 'float') { saveFloats(); closeDock(); }
      g = null;
    }
    function onCancel(ev) {   // ブラウザがスクロールを始めたときなど：元に戻す
      if (!g) return;
      if (g.mode === 'swipe') { g.dx = 0; }
      onUp(ev);
    }
    list.addEventListener('pointerdown', function (ev) {
      var card = ev.target.closest('.mn-pin-card');
      if (!card || ev.button > 0 || ev.target.closest('[data-unpin]') || g) return;
      g = { card: card, id: card.getAttribute('data-pin-id'), pid: ev.pointerId, type: ev.pointerType, x0: ev.clientX, y0: ev.clientY, lastX: ev.clientX, lastY: ev.clientY, mode: 'press' };
      g.timer = setTimeout(function () { if (g && g.mode === 'press') startDrag(); }, 400);
      window.addEventListener('pointermove', onMove, { passive: false });
      window.addEventListener('pointerup', onUp);
      window.addEventListener('pointercancel', onCancel);
    });
    // 並べ替え・スワイプ中は一覧やページがスクロールしないように（iOS は touchmove を止める必要がある）
    list.addEventListener('touchmove', function (ev) { if (g && (g.mode === 'drag' || g.mode === 'swipe') && ev.cancelable) ev.preventDefault(); }, { passive: false });
    list.addEventListener('contextmenu', function (ev) { if (ev.target.closest('.mn-pin-card')) ev.preventDefault(); });
    // ブラウザ標準のドラッグ（リンクや文字を引っぱる動作）は使わない
    list.addEventListener('dragstart', function (ev) { if (ev.target.closest && ev.target.closest('.mn-pin-card')) ev.preventDefault(); });
  }

  /* ---------- 浮かせた付箋（本文と見比べるため） ----------
   * PC：カードをドックから本文側へドラッグすると、その位置に浮かぶ。見出しをドラッグで移動、右下で大きさを変えられる。
   * スマホ：ドックのカードをタップすると、画面上部に浮かぶ（見出しのタップで畳む）。
   * 浮かせた付箋はページを移っても残る（localStorage sm_floats）。 */
  function placeFloat(w, x, y) {
    w.style.left = Math.min(window.innerWidth - 120, Math.max(0, x)) + 'px';
    w.style.top = Math.min(window.innerHeight - 44, Math.max(0, y)) + 'px';
  }
  function saveFloats() {
    setJSON('sm_floats', floats.map(function (w) {
      return { id: w._pid, x: w.offsetLeft, y: w.offsetTop, w: w.offsetWidth, h: w.style.height ? w.offsetHeight : 0, min: w.classList.contains('is-min') };
    }));
  }
  function floatCard(id, pos) {
    var p = pins().find(function (x) { return x.id === id; }); if (!p) return null;
    var old = floats.filter(function (w) { return w._pid === id; })[0];
    if (old) { if (pos && !PHONE.matches) placeFloat(old, pos.x, pos.y); anim(old, [{ scale: 1.04 }, { scale: 1 }], 220); return old; }
    if (PHONE.matches) return null;   // 小さい画面では浮かせない
    if (!isPro() && floats.length >= 1) floats.slice().forEach(function (w) { closeFloat(w, true); });
    var w = el('<div class="mn-float" role="dialog" aria-label="' + esc(p.kind + ' ' + (p.title || '')) + '">' +
      '<div class="mn-float-head" title="ドラッグで移動・クリックで畳む"><span class="mn-pin-kind">' + esc(p.kind) + '</span><span class="mn-pin-title">' + (p.title ? S.renderer.renderInline(p.title) : '') + '</span>' +
      '<button type="button" class="mn-float-close" aria-label="閉じる（付箋ドックには残ります）" title="閉じる（付箋ドックには残ります）"></button></div>' +
      '<div class="mn-float-body mn-prose">' + p.htmlContent + whereHtml(p) + '</div></div>');
    w._pid = id; fixPinLinks(w);
    document.body.appendChild(w); floats.push(w);
    if (!PHONE.matches) {
      var n = floats.length - 1;
      if (pos) placeFloat(w, pos.x, pos.y);
      else placeFloat(w, window.innerWidth - 470 - 24 * n, 80 + 24 * n);
      if (pos && pos.w) w.style.width = pos.w + 'px';
      if (pos && pos.h) w.style.height = pos.h + 'px';
    }
    if (pos && pos.min) w.classList.add('is-min');
    anim(w, PHONE.matches ? [{ transform: 'translateY(-16px)', opacity: 0 }, { transform: 'none', opacity: 1 }] : [{ opacity: 0, transform: 'scale(.96)' }, { opacity: 1, transform: 'none' }], 240);
    var head = w.querySelector('.mn-float-head'), sx, sy, ox, oy, moving = false, movedF = false;
    head.addEventListener('pointerdown', function (ev) {
      if (ev.target.closest('.mn-float-close') || PHONE.matches) return;
      moving = true; movedF = false; sx = ev.clientX; sy = ev.clientY; ox = w.offsetLeft; oy = w.offsetTop;
      head.setPointerCapture(ev.pointerId); ev.preventDefault();
    });
    head.addEventListener('pointermove', function (ev) {
      if (!moving) return;
      if (Math.abs(ev.clientX - sx) + Math.abs(ev.clientY - sy) > 3) movedF = true;
      placeFloat(w, ox + ev.clientX - sx, oy + ev.clientY - sy);
    });
    head.addEventListener('pointerup', function () { if (moving) { moving = false; saveFloats(); } });
    w.addEventListener('click', function (ev) {
      if (ev.target.closest('.mn-float-close')) { closeFloat(w); return; }
      if (ev.target.closest('.mn-float-head') && !movedF) {
        var from = w.offsetHeight; w.classList.toggle('is-min'); animHeight(w, from, w.offsetHeight, 220); saveFloats();
      }
    });
    if (window.ResizeObserver && !PHONE.matches) {
      var t = null; new ResizeObserver(function () { clearTimeout(t); t = setTimeout(saveFloats, 300); }).observe(w);
    }
    saveFloats();
    return w;
  }
  function closeFloat(w, instant) {
    floats.splice(floats.indexOf(w), 1); saveFloats();
    if (instant) { w.remove(); return; }
    animOut(w, [{ opacity: 1, transform: 'none' }, { opacity: 0, transform: PHONE.matches ? 'translateY(-12px)' : 'scale(.96)' }], 180, function () { w.remove(); });
  }
  function restoreFloats() {
    floats.slice().forEach(function (w) { w.remove(); }); floats = [];
    if (PHONE.matches) return;   // 小さい画面では浮かせない（ドックの高さ調整で見比べる）
    var ids = pins().map(function (p) { return p.id; });
    getJSON('sm_floats', []).forEach(function (f) { if (ids.indexOf(f.id) >= 0) floatCard(f.id, f); });
  }
  function allMin() { var m = getJSON('sm_pin_min', {}), p = pins(); return p.length > 0 && p.every(function (x) { return m[x.id]; }); }
  // すべての付箋を「見出しだけ」と「全文」で一斉に切り替える
  function toggleAllMin() {
    var toMin = !allMin(), m = {};
    pins().forEach(function (x) { if (toMin) m[x.id] = 1; });
    setJSON('sm_pin_min', m);
    dock.querySelectorAll('.mn-pin-card').forEach(function (c) { if (c.classList.contains('is-min') !== toMin) toggleMin(c); });
    renderDockHead();
  }
  function renderDockHead() {
    var p = pins(), lim = A.limit('pins');
    var count = lim === Infinity ? p.length + ' 件' : p.length + '/' + lim;
    dock.querySelector('.mn-dock-head').innerHTML =
      '<span class="mn-dock-title">📌 ピン留め <span class="mn-dock-count">(' + count + ')</span></span><span class="mn-dock-tools">' +
        (p.length ? '<button type="button" class="mn-textbtn" data-min-toggle>' + (allMin() ? '全文表示' : '見出しだけ') + '</button>' : '') +
        '<button type="button" class="mn-iconbtn mn-dock-more" data-menu aria-haspopup="true" aria-expanded="false" aria-label="そのほかの操作" title="そのほかの操作">⋯</button>' +
        '<button type="button" class="mn-iconbtn" data-close-dock aria-label="ドックを閉じる">✕</button></span>' +
      '<div class="mn-dock-menu" role="menu" hidden>' +
        '<button type="button" role="menuitem" data-sets>' + (isPro() ? 'セットの保存・呼び出し' : '🔒 セットの保存・呼び出し（Pro）') + '</button>' +
        (p.length ? '<button type="button" role="menuitem" class="mn-clear-all" data-clear-all>すべて外す</button>' : '') + '</div>';
  }
  /* PC：ドックの左端をドラッグして幅を変える（260px〜画面の 6 割。保存する。ダブルクリックで既定の幅） */
  function applyDockWidth() {
    var w = getJSON('sm_dock_w', null), root = document.documentElement;
    if (PHONE.matches || !w) { root.style.removeProperty('--mn-dock-w'); return; }
    root.style.setProperty('--mn-dock-w', Math.round(Math.max(260, Math.min(window.innerWidth * 0.6, w))) + 'px');
  }
  function wireDockResize() {
    var h = dock.querySelector('.mn-dock-resize'), st = null;
    h.addEventListener('pointerdown', function (ev) {
      if (PHONE.matches || ev.button > 0) return;
      st = { x: ev.clientX, w: dock.offsetWidth };
      h.setPointerCapture(ev.pointerId); ev.preventDefault();
      document.documentElement.classList.add('mn-dock-resizing');
    });
    // ドラッグ中はドックの幅だけを変え（フレームごとに 1 回）、本文側の余白（--mn-dock-w）と保存は離したときに 1 回だけ行う
    var rafW = 0, wNow = 0;
    function clampW(w) { return Math.round(Math.max(260, Math.min(window.innerWidth * 0.6, w))); }
    h.addEventListener('pointermove', function (ev) {
      if (!st) return;
      wNow = clampW(st.w + (st.x - ev.clientX));
      if (!rafW) rafW = requestAnimationFrame(function () { rafW = 0; dock.style.width = wNow + 'px'; });
    });
    h.addEventListener('pointerup', function () {
      if (!st) return;
      st = null; document.documentElement.classList.remove('mn-dock-resizing');
      if (rafW) { cancelAnimationFrame(rafW); rafW = 0; }
      if (wNow) { setJSON('sm_dock_w', wNow); wNow = 0; }
      dock.style.width = ''; applyDockWidth();
    });
    h.addEventListener('dblclick', function () { localStorage.removeItem('sm_dock_w'); applyDockWidth(); });
    window.addEventListener('resize', applyDockWidth);
    applyDockWidth();
  }
  /* PC：開くボタンはドラッグで好きな位置へ動かせる（位置はブラウザに保存。既定はドックの ✕ と同じ右上） */
  function placeTab() {
    var pos = getJSON('sm_tab_pos', null);
    if (PHONE.matches || !pos) { dockTab.style.left = dockTab.style.top = dockTab.style.right = ''; return; }
    dockTab.style.left = Math.max(4, Math.min(window.innerWidth - dockTab.offsetWidth - 4, pos.x)) + 'px';
    dockTab.style.top = Math.max(4, Math.min(window.innerHeight - dockTab.offsetHeight - 4, pos.y)) + 'px';
    dockTab.style.right = 'auto';
  }
  function wireTabDrag() {
    var st = null;
    dockTab.addEventListener('pointerdown', function (ev) {
      if (PHONE.matches || ev.button > 0) return;
      var r = dockTab.getBoundingClientRect();
      st = { x: ev.clientX, y: ev.clientY, ox: r.left, oy: r.top, moved: false };
      dockTab.setPointerCapture(ev.pointerId);
    });
    dockTab.addEventListener('pointermove', function (ev) {
      if (!st) return;
      var dx = ev.clientX - st.x, dy = ev.clientY - st.y;
      if (!st.moved && Math.abs(dx) + Math.abs(dy) < 5) return;
      st.moved = true;
      setJSON('sm_tab_pos', { x: st.ox + dx, y: st.oy + dy });
      placeTab();
    });
    dockTab.addEventListener('pointerup', function () { if (st && st.moved) dockTab._moved = true; st = null; });
    dockTab.addEventListener('dblclick', function () { localStorage.removeItem('sm_tab_pos'); placeTab(); });   // ダブルクリックで元の位置へ
    window.addEventListener('resize', placeTab);
    requestAnimationFrame(placeTab);
  }
  /* スマホのドックの高さ（画面の高さに対する割合）。本文の下側にも同じだけ余白を足し、最後まで読めるようにする */
  var SHEET_MIN = 0.2, SHEET_MAX = 0.92;
  function sheetFrac() { var f = +getJSON('sm_sheet_h', 0.55); return f >= SHEET_MIN && f <= SHEET_MAX ? f : 0.55; }
  function setSheetHeight(frac, fromPx) {
    setJSON('sm_sheet_h', frac);
    var px = Math.round(window.innerHeight * frac);
    document.documentElement.style.setProperty('--mn-sheet-h', px + 'px');
    if (dock) {
      dock.style.height = '';
      if (fromPx != null && Math.abs(fromPx - px) > 2) anim(dock, [{ height: fromPx + 'px' }, { height: px + 'px' }], 240);
    }
  }
  function renderDock() {
    ensureDock();
    var p = pins();
    var mins = getJSON('sm_pin_min', {});
    renderDockHead();
    var list = dock.querySelector('.mn-dock-list');
    list.innerHTML = p.length ? p.map(function (x) { return cardHtml(x, mins[x.id]); }).join('') +
      '<p class="mn-dock-hint">' + (PHONE.matches ? '上端のつまみで高さを変えられます。見出しのタップで畳む。横にスワイプで外す。長押しして上下に動かすと並べ替え。'
        : '見出しのクリックで畳む。× で外す。長押ししてから上下に動かすと並べ替え。すぐに本文側へドラッグすると、好きな位置に浮かせられます。') + '</p>' :
      '<p class="mn-dock-empty">定義や定理の見出しの <span aria-hidden="true">📌</span> ボタン、または参照プレビューの「📌 固定」で、項目をここに並べておけます。ページを移動しても残ります。</p>' +
      (isPro() ? '' : '<p class="mn-dock-empty">無料プランでは 1 件まで。<button type="button" class="mn-textbtn" data-see-pro>Pro なら無制限</button></p>');
    fixPinLinks(list);
    dockTab.innerHTML = '<span aria-hidden="true">📌</span><span class="mn-dock-tab-n">' + (p.length ? p.length : '') + '</span><span class="mn-dock-tab-text">ピン留め' + (p.length ? ' (' + p.length + ')' : '') + '</span>';
    dockTab.hidden = !p.length && dock.hidden;
  }
  function onDockClick(ev) {
    var card = ev.target.closest('.mn-pin-card'), id = card && card.getAttribute('data-pin-id');
    if (ev.target.closest('[data-close-dock]')) { closeDock(); return; }
    if (ev.target.closest('[data-see-pro]')) { proModal('付箋ドックは Pro プランで無制限に使えます。'); return; }
    var mb = ev.target.closest('[data-menu]');
    if (mb) { var menu = dock.querySelector('.mn-dock-menu'); menu.hidden = !menu.hidden; mb.setAttribute('aria-expanded', !menu.hidden); return; }
    if (!ev.target.closest('.mn-dock-menu')) { var mn = dock.querySelector('.mn-dock-menu'); if (mn && !mn.hidden) mn.hidden = true; }
    if (ev.target.closest('[data-min-toggle]')) { toggleAllMin(); return; }
    var ca = ev.target.closest('[data-clear-all]');
    if (ca) {
      // 一括で外す：誤操作を防ぐため 2 回押しで確定（3 秒で元に戻る）
      if (!ca.classList.contains('is-confirm')) {
        ca.classList.add('is-confirm'); ca.textContent = 'もう一度押すと全部外す';
        clearTimeout(ca._t); ca._t = setTimeout(function () { ca.classList.remove('is-confirm'); ca.textContent = 'すべて外す'; }, 3000);
        return;
      }
      var n = pins().length;
      floats.slice().forEach(function (w) { closeFloat(w, true); });
      savePins([]);
      toast('📌 ' + n + ' 件の固定を外しました');
      return;
    }
    if (ev.target.closest('[data-sets]')) { if (isPro()) setsModal(); else proModal('付箋のセット（分野ごとの組み合わせ）の保存は Pro プランの機能です。'); return; }
    if (!card) return;
    if (ev.target.closest('[data-unpin]')) { unpin(id); return; }
    if (card._noClick) { card._noClick = false; ev.preventDefault(); return; }   // 並べ替え・スワイプ・引き出しの直後のクリックは無視
    if (ev.target.closest('a')) return;
    if (ev.target.closest('.mn-pin-head')) {
      var m = getJSON('sm_pin_min', {}); if (m[id]) delete m[id]; else m[id] = 1; setJSON('sm_pin_min', m);
      toggleMin(card); renderDockHead();
    }
  }
  // 付箋の最小化・展開（高さを補間）
  function toggleMin(card) {
    var from = card.offsetHeight;
    card.classList.toggle('is-min');
    var to = card.offsetHeight;
    animHeight(card, from, to, 260);
  }
  function setsModal() {
    var sets = getJSON('sm_pin_sets', {});
    var names = Object.keys(sets);
    var m = openModal('付箋のセット', '<p>いま並べている付箋を名前を付けて保存し、あとで呼び出せます（分野ごとの「定義の組」など）。</p>' +
      '<div class="mn-set-new"><input type="text" class="mn-input" placeholder="セットの名前（例：位相・コンパクト性）" maxlength="40"><button type="button" class="mn-btn" data-save>保存</button></div>' +
      (names.length ? '<ul class="mn-set-list">' + names.map(function (n) {
        return '<li><span>' + esc(n) + '（' + sets[n].length + ' 件）</span><button type="button" class="mn-textbtn" data-load="' + esc(n) + '">呼び出す</button><button type="button" class="mn-textbtn" data-del="' + esc(n) + '">削除</button></li>';
      }).join('') + '</ul>' : '<p class="mn-muted">保存したセットはまだありません。</p>'));
    m.addEventListener('click', function (ev) {
      var b;
      if (ev.target.closest('[data-save]')) {
        var name = m.querySelector('input').value.trim(); if (!name) return;
        sets[name] = pins(); setJSON('sm_pin_sets', sets); setsModal(); toast('セット「' + esc(name) + '」を保存しました');
      } else if ((b = ev.target.closest('[data-load]'))) { savePins(sets[b.getAttribute('data-load')] || []); closeModal(); openDock(true); }
      else if ((b = ev.target.closest('[data-del]'))) { delete sets[b.getAttribute('data-del')]; setJSON('sm_pin_sets', sets); setsModal(); }
    });
  }
  function dockFrames() {
    return PHONE.matches ? [{ transform: 'translateY(100%)' }, { transform: 'translateY(0)' }]
      : [{ opacity: 0, transform: 'translateX(28px)' }, { opacity: 1, transform: 'translateX(0)' }];
  }
  function openDock(focusless) {
    var wasHidden = dock ? dock.hidden || !!dock._out : true;
    if (PHONE.matches) setSheetHeight(sheetFrac());
    renderDock(); cancelOut(dock);
    dock.hidden = false; dockTab.hidden = false; dockTab.setAttribute('aria-expanded', 'true');
    document.documentElement.classList.add('mn-dock-open');
    if (wasHidden) anim(dock, dockFrames(), PHONE.matches ? 340 : 280);
    if (!focusless) { var h = dock.querySelector('.mn-pin-head, [data-close-dock]'); if (h) h.focus(); }
  }
  function closeDock() {
    if (!dock || dock.hidden || dock._out) return;
    var menu = dock.querySelector('.mn-dock-menu'); if (menu) menu.hidden = true;
    dockTab.setAttribute('aria-expanded', 'false');
    var cur = getComputedStyle(dock).transform, f = dockFrames().reverse();
    if (cur && cur !== 'none') f[0] = { transform: cur };   // スワイプで途中まで下げた位置から続ける
    dock.style.transform = '';
    animOut(dock, f, PHONE.matches ? 260 : 200, function () {
      dock.hidden = true;
      document.documentElement.classList.remove('mn-dock-open');
      dockTab.hidden = !pins().length;
      if (!dockTab.hidden) anim(dockTab, [{ opacity: 0, transform: PHONE.matches ? 'translate(-50%, 12px)' : 'translateY(12px)' }, { opacity: 1, transform: PHONE.matches ? 'translate(-50%, 0)' : 'translateY(0)' }], 220);
    });
  }
  function toggleDock() { ensureDock(); if (dock.hidden || dock._out) openDock(); else closeDock(); }
  function highlightCard(id) {
    var c = dock && dock.querySelector('.mn-pin-card[data-pin-id="' + (window.CSS && CSS.escape ? CSS.escape(id) : id) + '"]');
    if (!c) return;
    c.classList.remove('is-min'); c.scrollIntoView({ block: 'nearest' });
    c.classList.remove('is-flash'); void c.offsetWidth; c.classList.add('is-flash');
  }
  /* =====================================================================
   * 本文の見出しに付けるボタン（📌 固定・✓ 理解した・🗺️ 学習ルート）
   * ===================================================================== */
  function envLabel(env) {
    var id = env.id || '';
    if (!id || /^(env-|restate-)/.test(id)) return null;
    return id;
  }
  function decorateEnvs() {
    if (!S || !S.article) return;
    S.article.querySelectorAll('.mn-prose .mn-env[id]').forEach(function (env) {
      var label = envLabel(env), kind = env.getAttribute('data-kind'), type = env.getAttribute('data-env');
      if (!label || !PIN_KINDS[kind] || env.closest('.mn-popover')) return;
      var head = env.querySelector(':scope > .mn-env-head');
      if (!head || head.querySelector('.mn-learn-tools')) return;
      var tools = el('<span class="mn-learn-tools mn-learn-x"></span>');
      tools.innerHTML =
        '<button type="button" class="mn-ltool mn-ltool-ok" data-understood="' + esc(label) + '" aria-pressed="false" title="理解したら印を付ける（ブラウザに保存）">✓<span class="mn-ltool-text"> 理解した</span></button>' +
        '<button type="button" class="mn-ltool" data-pin="' + esc(label) + '" title="付箋ドックに固定（p で開閉）">📌</button>' +
        (CORE_TYPES[type] && prereqs(label).length ? '<button type="button" class="mn-ltool" data-roadmap="' + esc(label) + '" title="ここまでの学習ルート">🗺️</button>' : '');
      var chip = head.querySelector('.mn-label');
      if (chip) head.insertBefore(tools, chip); else head.appendChild(tools);
    });
    refreshUnderstoodUI(); refreshPinButtons();
  }
  function refreshPinButtons() {
    if (!S || !S.article) return;
    S.article.querySelectorAll('[data-pin]').forEach(function (b) {
      var on = isPinned(b.getAttribute('data-pin'));
      b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', on);
    });
  }
  function refreshUnderstoodUI() {
    if (!S || !S.article) return;
    var u = understood();
    S.article.querySelectorAll('[data-understood]').forEach(function (b) {
      var on = !!u[b.getAttribute('data-understood')];
      b.classList.toggle('is-on', on); b.setAttribute('aria-pressed', on);
      var env = b.closest('.mn-env'); if (env) env.classList.toggle('is-understood', on);
    });
    renderPrereqAlerts();
  }

  /* =====================================================================
   * 機能 C：前提の確認（未チェックの前提を定理の上に表示）
   * 理解済みチェックを一度も使っていない人には出さない（全部の定理に警告が並ぶのを避ける）。
   * ===================================================================== */
  function renderPrereqAlerts() {
    if (!S || !S.article) return;
    S.article.querySelectorAll('.mn-prereq-alert').forEach(function (x) { x.remove(); });
    var u = understood();
    if (!Object.keys(u).length || prefs().prereq === 'closed') return;
    S.article.querySelectorAll('.mn-prose .mn-env[data-kind="thm"][id]').forEach(function (env) {
      var label = envLabel(env); if (!label || u[label]) return;
      var miss = prereqs(label).filter(function (l) { return !u[l]; });
      if (!miss.length) return;
      var shown = miss.slice(0, 6).map(function (l) { return xref(l); }).join(' ');
      var box = el('<div class="mn-prereq-alert mn-learn-x" role="note"><span class="mn-prereq-k">⚠️ 前提の確認</span>この定理（とその証明）が使う未チェックの項目：' + shown +
        (miss.length > 6 ? ' ほか ' + (miss.length - 6) + ' 件' : '') + '<span class="mn-prereq-hint">（ホバーで内容を確認、📌 で固定できます）</span></div>');
      var head = env.querySelector(':scope > .mn-env-head');
      head.parentNode.insertBefore(box, head.nextSibling);
    });
  }

  /* =====================================================================
   * 機能 D：学習ルート
   * 参照関係をすべてさかのぼると量が膨れ、しかもそれは「このサイトが選んだ証明」に依存する。そこで
   *   ・主張を読むのに要る前提（主張の中の参照）は最後までさかのぼって自動で並べる（証明の選び方によらない）
   *   ・証明で使う結果は 1 段だけ並べ、＋ボタンでその項目の前提を 1 段ずつ広げる
   *   ・「すべてさかのぼる」で従来の厳密な図（詳細表示）にもできる
   * ページの冒頭（記法と定義の確認の下）には、同じ描き方でページ単位の「ここまでのロードマップ」を出す。
   * （立体表示は試したが、2026-10-21 ユーザー判断で平面に戻した）
   * ===================================================================== */
  function isCore(x) { var L = S.index.labels[x]; return !!(L && CORE_TYPES[L.t]); }
  /* 段に分けた図の共通部分：ids（表示する点）、deps(x)（表示中の前提）から段を決めて、上が遠い前提・下が目標になるよう並べる */
  function layers(ids, deps) {
    var set = {}, level = {};
    ids.forEach(function (x) { set[x] = 1; });
    function lv(x, stack) {
      if (level[x] != null) return level[x];
      if (stack[x]) return 0;   // 参照の輪（まれ）は切る
      stack[x] = 1;
      var m = -1;
      deps(x).forEach(function (y) { if (set[y]) m = Math.max(m, lv(y, stack)); });
      delete stack[x];
      return (level[x] = m + 1);
    }
    ids.forEach(function (x) { lv(x, {}); });
    var rows = [];
    ids.forEach(function (x) { (rows[level[x]] = rows[level[x]] || []).push(x); });
    var edges = [];
    ids.forEach(function (x) { deps(x).forEach(function (y) { if (set[y]) edges.push([y, x]); }); });
    return { rows: rows.filter(Boolean), edges: edges };
  }
  // 段の HTML。rows[0] が最も基礎、最後が目標。depth は目標からの段数（立体表示で奥行きに使う）
  function layeredHtml(rows, nodeHtml, stepName) {
    var n = rows.length;
    return '<div class="mn-rm-graph"><svg class="mn-rm-edges" aria-hidden="true"></svg>' + rows.map(function (xs, i) {
      return '<div class="mn-rm-row" data-depth="' + (n - 1 - i) + '"><div class="mn-rm-step">' + stepName(i, n) + '</div><div class="mn-rm-nodes">' +
        xs.map(nodeHtml).join('') + '</div></div>';
    }).join('') + '</div>';
  }
  // 線を引く。点の位置はレイアウト上の位置（offset）で測る（変形やスクロールの影響を受けない）
  function relPos(n, root) {
    var x = 0, y = 0;
    while (n && n !== root) { x += n.offsetLeft; y += n.offsetTop; n = n.offsetParent; }
    return { x: x, y: y };
  }
  function drawEdges(graph, edges, roleOf) {
    if (!graph) return;
    var svg = graph.querySelector('.mn-rm-edges');
    svg.setAttribute('width', graph.scrollWidth); svg.setAttribute('height', graph.scrollHeight);
    var pos = {};
    graph.querySelectorAll('[data-node]').forEach(function (n) {
      var p = relPos(n, graph);
      pos[n.getAttribute('data-node')] = { x: p.x + n.offsetWidth / 2, top: p.y, bottom: p.y + n.offsetHeight };
    });
    svg.innerHTML = edges.map(function (e) {
      var a = pos[e[0]], b = pos[e[1]]; if (!a || !b) return '';
      var y1 = a.bottom, y2 = b.top, my = (y1 + y2) / 2;
      var cls = roleOf ? roleOf(e[0], e[1]) : '';
      return '<path' + (cls ? ' class="is-' + cls + '"' : '') + ' d="M' + a.x + ' ' + y1 + ' C ' + a.x + ' ' + my + ', ' + b.x + ' ' + my + ', ' + b.x + ' ' + y2 + '"/>';
    }).join('');
  }
  function watchEdges(box, draw) {
    requestAnimationFrame(draw);
    if (window.ResizeObserver) { var ro = new ResizeObserver(function () { draw(); }); ro.observe(box); return ro; }
    window.addEventListener('resize', draw);
  }
  /* ---------- 項目の学習ルート（モーダル） ---------- */
  function statementClosure(goal, cap) {
    var seen = {}, out = [], q = [goal];
    seen[goal] = 1;
    while (q.length && out.length < cap) {
      var x = q.shift();
      prereqs(x, 's').forEach(function (y) { if (!seen[y] && isCore(y) && out.length < cap) { seen[y] = 1; out.push(y); q.push(y); } });
    }
    return out;
  }
  function openRoadmap(goal) {
    var shown = {}, how = {}, CAP = 90;
    shown[goal] = 1; how[goal] = 'goal';
    statementClosure(goal, 40).forEach(function (y) { shown[y] = 1; how[y] = 's'; });
    prereqs(goal, 'p').forEach(function (y) { if (isCore(y) && !shown[y]) { shown[y] = 1; how[y] = 'p'; } });
    var m = openModal('学習ルート：' + refText(goal), '<div class="mn-rm-body"></div>', { wide: true });
    var body = m.querySelector('.mn-rm-body'), ro = null;
    function hidden(x) { return prereqs(x).filter(function (y) { return isCore(y) && !shown[y]; }); }
    function render() {
      var ids = Object.keys(shown), u = understood(), pro = isPro();
      var g = layers(ids, function (x) { return prereqs(x); });
      var done = ids.filter(function (x) { return u[x]; }).length, pct = Math.round(100 * done / ids.length);
      var reg = getJSON('sm_goals', []).indexOf(goal) >= 0;
      var full = ids.length >= CAP || !ids.some(function (x) { return hidden(x).length; });
      body.innerHTML = '<div class="mn-rm-bar">' +
        (pro ? '<div class="mn-rm-progress" title="理解済み ' + done + ' / ' + ids.length + '"><span style="width:' + pct + '%"></span></div><span class="mn-rm-pct">理解済み ' + done + ' / ' + ids.length + '（' + pct + '%）</span>' +
          '<button type="button" class="mn-btn mn-btn-quiet" data-goal>' + (reg ? '★ マイ・ロードマップに登録済み' : '☆ この目標をマイ・ロードマップに登録') + '</button>'
          : '<span class="mn-rm-pct mn-muted">🔒 達成率・未習得の強調・目標の登録は Pro プランの機能です。</span><button type="button" class="mn-textbtn" data-see-pro>Pro について</button>') +
        '</div>' +
        '<div class="mn-rm-legend"><span class="mn-rm-lg is-s">主張を読むのに必要（自動でさかのぼる）</span><span class="mn-rm-lg is-p">証明で使う（＋で 1 段ずつ広げる）</span>' +
        (full ? '' : '<button type="button" class="mn-textbtn" data-expand-all>すべてさかのぼる（詳細）</button>') + '</div>' +
        '<p class="mn-muted mn-rm-note">これはこのサイトが選んだ証明に沿った前提で、理解の道筋はほかにもありえます。主張を読むのに要るものだけを最後までたどり、証明で使うものは必要な分だけ広げてください。' +
        (ids.length >= CAP ? '項目が多いので ' + CAP + ' 件で打ち切りました。' : '') + '</p>' +
        '<div class="mn-map-wrap">' + layeredHtml(g.rows, function (x) {
          var r = S.resolveRef(x), hid = hidden(x).length;
          var cls = 'mn-rm-node is-' + how[x] + (pro && u[x] ? ' is-done' : '') + (pro && !u[x] && x !== goal ? ' is-unmet' : '');
          return '<div class="' + cls + '" data-node="' + esc(x) + '"><a class="mn-xref mn-rm-link" data-label="' + esc(x) + '" href="' + esc(r.href) + '">' +
            '<span class="mn-rm-k">' + S.renderer.renderInline(refText(x)) + (pro && u[x] ? ' ✓' : '') + '</span>' +
            (r.title ? '<span class="mn-rm-t">' + S.renderer.renderInline(r.title) + '</span>' : '') + '</a>' +
            (hid && ids.length < CAP ? '<button type="button" class="mn-rm-more" data-expand="' + esc(x) + '" title="この項目の前提を 1 段広げる">＋' + hid + '</button>' : '') + '</div>';
        }, function (i, n) { return i === n - 1 ? '目標' : 'Step ' + (i + 1); }) + '</div>';
      var graph = body.querySelector('.mn-rm-graph');
      var draw = function () { drawEdges(graph, g.edges, function (y, x) { return (forward()[x] || {})[y] === 's' ? 's' : 'p'; }); };
      if (ro && ro.disconnect) ro.disconnect();
      ro = watchEdges(graph, draw);
    }
    function add(x) { hidden(x).forEach(function (y) { if (Object.keys(shown).length < CAP) { shown[y] = 1; how[y] = how[y] || 'p'; } }); }
    m.addEventListener('click', function (ev) {
      var b;
      if (ev.target.closest('[data-see-pro]')) { proModal('学習ルートの進捗管理は Pro プランの機能です。'); return; }
      if (ev.target.closest('[data-goal]')) {
        var gs = getJSON('sm_goals', []), i = gs.indexOf(goal);
        if (i >= 0) gs.splice(i, 1); else gs.push(goal);
        setJSON('sm_goals', gs); render(); return;
      }
      if ((b = ev.target.closest('[data-expand]'))) { add(b.getAttribute('data-expand')); render(); return; }
      if (ev.target.closest('[data-expand-all]')) {
        for (var guard = 0; guard < 30; guard++) {
          var before = Object.keys(shown).length;
          Object.keys(shown).forEach(add);
          if (Object.keys(shown).length === before || before >= CAP) break;
        }
        render();
      }
    });
    render();
  }

  /* ---------- ページ単位の「ここまでのロードマップ」（記法と定義の確認の下） ----------
   * 同じ系列の中は、このページがたどる前提のページを 1 ページずつ並べる（参照関係から）。
   * ほかの系列は 1 つの点にまとめ、系列の前提知識（_meta.json の prereq）にそって系列単位でさかのぼる。
   * （ページ単位でほかの分野までたどると、量が多く、証明の選び方に引きずられるため。2026-10-21 ユーザー判断） */
  var DIRS = null;
  function dirIndex() {
    if (DIRS) return DIRS;
    DIRS = { byPath: {}, byId: {} };
    (function walk(n, parents) {
      if (n.k !== 'd') return;
      var label = parents.filter(function (x) { return x && !x.s; }).map(function (x) { return x.title; });
      if (n.path) {
        var d = { path: n.path, title: n.title, abbr: n.abbr, id: n.id, pre: n.pre || [], field: label.slice(-1)[0] || '' };
        DIRS.byPath[n.path] = d; if (n.id) DIRS.byId[n.id] = d;
      }
      (n.c || []).forEach(function (c) { if (c.k === 'd' && !c.x) walk(c, n.path ? parents.concat([n]) : parents); });
    })(S.index.tree, []);
    return DIRS;
  }
  function mountPageMap() {
    var IDX = S.index, me = S.pageIndex;
    if (me == null || me < 0 || !IDX.pages[me]) return;
    var anchor = S.article.querySelector('.mn-prose .mn-env[data-env="notation"]');
    if (!anchor) return;
    var PF = pageForward(), D = dirIndex(), mySeries = IDX.pages[me].dir;
    var depsOf = function (i) { return Object.keys(PF[i] || {}).map(Number); };
    // 1. 同じ系列の中で、このページがたどる前提のページ（推移的に）
    var inSeries = {}, q = [me]; inSeries[me] = 1;
    while (q.length) {
      var x = q.shift();
      depsOf(x).forEach(function (j) { if (!inSeries[j] && IDX.pages[j] && IDX.pages[j].dir === mySeries) { inSeries[j] = 1; q.push(j); } });
    }
    var pageIds = Object.keys(inSeries).map(Number);
    // 2. それらのページが参照するほかの系列（参照の数を数える）、と自分の系列の前提知識
    var seriesRef = {}, pageToSeries = {};
    pageIds.forEach(function (i) {
      depsOf(i).forEach(function (j) {
        var P = IDX.pages[j]; if (!P || P.dir === mySeries || !D.byPath[P.dir]) return;
        seriesRef[P.dir] = (seriesRef[P.dir] || 0) + (PF[i][j] || 1);
        (pageToSeries[i] = pageToSeries[i] || {})[P.dir] = 1;
      });
    });
    var mine = D.byPath[mySeries];
    (mine && mine.pre || []).forEach(function (id) { var d = D.byId[id]; if (d && d.path !== mySeries && !seriesRef[d.path]) seriesRef[d.path] = 0; });
    var totalOther = Object.keys(seriesRef).length;
    if (pageIds.length < 2 && !totalOther) return;
    var shownSeries = {}; Object.keys(seriesRef).forEach(function (p) { shownSeries[p] = 1; });
    var depth = 1;
    // 系列内の「最初の」ページ（系列内に前提がないページ）：自分の系列の前提知識とつなぐ
    var roots = pageIds.filter(function (i) { return !depsOf(i).some(function (j) { return inSeries[j] && j !== i; }); });
    function deps(id) {
      if (id.charAt(0) === 'p') {
        var i = +id.slice(1), out = depsOf(i).filter(function (j) { return inSeries[j] && j !== i; }).map(function (j) { return 'p' + j; });
        Object.keys(pageToSeries[i] || {}).forEach(function (d) { if (shownSeries[d]) out.push('d' + d); });
        if (roots.indexOf(i) >= 0 && mine) mine.pre.forEach(function (pid) { var d = D.byId[pid]; if (d && shownSeries[d.path] && out.indexOf('d' + d.path) < 0) out.push('d' + d.path); });
        return out;
      }
      var dd = D.byPath[id.slice(1)];
      return (dd && dd.pre || []).map(function (pid) { var d = D.byId[pid]; return d && shownSeries[d.path] ? 'd' + d.path : null; }).filter(Boolean);
    }
    function hiddenPre() {
      var n = {};
      Object.keys(shownSeries).forEach(function (p) { (D.byPath[p].pre || []).forEach(function (pid) { var d = D.byId[pid]; if (d && !shownSeries[d.path] && d.path !== mySeries) n[d.path] = 1; }); });
      return Object.keys(n);
    }
    var open = prefs().roadmap === 'open';   // 既定は表示の設定（⚙）。ページ上で開閉しても設定は変えない
    var box = el('<details class="mn-pagemap mn-learn-x"' + (open ? ' open' : '') + '><summary><span class="mn-pagemap-k">🗺️ ここまでのロードマップ</span>' +
      '<span class="mn-pagemap-sub">この系列のページ ' + (pageIds.length - 1) + ' 件・ほかの系列 ' + totalOther + ' 件</span></summary><div class="mn-pagemap-body"></div></details>');
    anchor.parentNode.insertBefore(box, anchor.nextSibling);
    box.addEventListener('toggle', function () { if (box.open) render(); });
    var bodyEl = box.querySelector('.mn-pagemap-body'), ro = null;
    function render() {
      if (!box.open) return;
      var ids = pageIds.map(function (i) { return 'p' + i; }).concat(Object.keys(shownSeries).map(function (p) { return 'd' + p; }));
      var g = layers(ids, deps), more = hiddenPre();
      bodyEl.innerHTML = '<p class="mn-muted mn-pagemap-note">この系列の中は、このページが参照をたどって使うページを 1 ページずつ並べました。ほかの系列は 1 つの点にまとめ、各系列の「前提知識」にそってさかのぼれます（上ほど基礎）。</p>' +
        '<div class="mn-map-wrap">' + layeredHtml(g.rows, function (id) {
          if (id.charAt(0) === 'p') {
            var i = +id.slice(1), P = IDX.pages[i]; if (!P) return '';
            var here = i === me;
            return '<div class="mn-rm-node mn-pm-node' + (here ? ' is-goal' : '') + '" data-node="' + id + '"><a class="mn-rm-link" href="' + esc(S.root + P.path) + '"' + (here ? ' aria-current="page"' : '') + '>' +
              '<span class="mn-rm-k">' + esc((P.subj || '') + (P.sec ? ' §' + P.sec : '')) + '</span><span class="mn-rm-t">' + S.renderer.renderInline(P.title || '') + '</span></a></div>';
          }
          var d = D.byPath[id.slice(1)], n = seriesRef[d.path];
          return '<div class="mn-rm-node mn-pm-node mn-pm-series" data-node="' + esc(id) + '"><a class="mn-rm-link" href="' + esc(S.root + d.path + 'index.html') + '"' +
            (n ? ' title="このページの系列から ' + n + ' 回参照"' : ' title="系列の前提知識"') + '>' +
            '<span class="mn-rm-k">' + esc(d.field || '系列') + '</span><span class="mn-rm-t">' + esc(d.title) + '</span></a></div>';
        }, function (i, n) { return i === n - 1 ? '現在地' : (n - 1 - i) + ' 段前'; }) + '</div>' +
        '<div class="mn-learn-actions">' + (more.length ? '<button type="button" class="mn-textbtn" data-pm-more>系列の前提知識をさらにさかのぼる（＋' + more.length + '）</button>' : '') +
        (depth > 1 ? '<button type="button" class="mn-textbtn" data-pm-reset>最初の表示に戻す</button>' : '') + '</div>';
      var graph = bodyEl.querySelector('.mn-rm-graph');
      if (ro && ro.disconnect) ro.disconnect();
      ro = watchEdges(graph, function () { drawEdges(graph, g.edges); });
    }
    box.addEventListener('click', function (ev) {
      if (ev.target.closest('[data-pm-more]')) { hiddenPre().forEach(function (p) { shownSeries[p] = 1; }); depth++; render(); return; }
      if (ev.target.closest('[data-pm-reset]')) { shownSeries = {}; Object.keys(seriesRef).forEach(function (p) { shownSeries[p] = 1; }); depth = 1; render(); }
    });
    render();
  }

  /* =====================================================================
   * 機能 C：直感イントロ（ページ冒頭）と イメージ動画の枠
   * ===================================================================== */
  function manifestFor() {
    var M = window.SM_LEARN_MANIFEST || {};
    return S && M[S.page] || null;
  }
  function pageLabel() { var h = S.article.querySelector('.mn-page-head h1[id]'); return h ? h.id : ''; }
  function mountIntuition(mf, after) {
    if (!mf || !mf.intuition) return null;
    var I = mf.intuition, field = I.kind === 'field', series = I.kind === 'series';
    var aria = field ? 'この分野で学ぶこと' : series ? 'この系列の目標' : '直感イメージ';
    var slot = el('<details class="mn-intuition-slot mn-learn-x' + (field ? ' mn-intu-field' : '') + (series ? ' mn-intu-series' : '') + '" data-page-id="' + esc(pageLabel()) + '" aria-label="' + aria + '"' + (prefs().intro === 'open' ? ' open' : '') + '></details>');
    var head = field ? '🧭 この分野で学ぶこと' : series ? '🎯 この系列の目標' + (I.title ? '<span class="mn-intu-sub">（' + esc(I.title) + '）</span>' : '') :
      '💡 直感イメージ<span class="mn-intu-sub">（' + esc(I.question || 'なぜこの概念が必要か？') + '）</span>';
    slot.innerHTML = '<summary class="mn-intu-k">' + head + '</summary>' +
      '<div class="mn-intu-grid"><div class="mn-intu-text"><div class="mn-prose">' + S.renderer.renderMarkdown(I.text || '') + '</div></div>' +
      (series ? '' : '<div class="mn-intu-video" data-video-state="loading"><div class="mn-video-frame"><div class="mn-video-skeleton"></div></div>' +
      '<div class="mn-video-cap">🎬 ' + esc(I.videoTitle || '1 分イメージ動画') + '</div></div>') + '</div>';
    var ref = after || S.article.querySelector('.mn-page-head');
    ref.parentNode.insertBefore(slot, ref.nextSibling);
    return slot;
  }
  /* 概要ページ（フォルダの index.html）の案内：learn/guides.js（概要ページだけで読む）の分野の紹介と系列の目標。
   * 子が一つしかなく一段飛ばして中身を直接並べるフォルダ（solo）では、飛ばした先の系列の目標も続けて出す */
  function guidesFor() {
    var G = window.SM_LEARN_GUIDES || {}, M = window.SM_LEARN_MANIFEST || {}, out = [];
    var own = (M[S.page] && M[S.page].intuition) || G[S.page];
    if (own) out.push(own);
    function count(n) { return n.k === 'p' ? 1 : (n.c || []).reduce(function (a, c) { return a + (c.x ? 0 : count(c)); }, 0); }
    function find(n, path) {
      if (n.k !== 'd') return null;
      if (n.path === path) return n;
      for (var i = 0; i < (n.c || []).length; i++) { var r = find(n.c[i], path); if (r) return r; }
      return null;
    }
    var node = S.index && find(S.index.tree, S.page.replace(/index\.html$/, ''));
    while (node && node.path) {
      if ((node.c || []).some(function (c) { return c.k === 'p'; })) break;
      var kids = (node.c || []).filter(function (c) { return c.k === 'd' && !c.x && count(c) > 0; });
      if (kids.length !== 1) break;
      node = kids[0];
      var g = G[node.path + 'index.html'];
      if (g && out.indexOf(g) < 0) out.push(g);
    }
    return out;
  }
  function renderVideo(data) {
    var box = S.article.querySelector('.mn-intu-video'); if (!box) return;
    var v = data && data.video, frame = box.querySelector('.mn-video-frame');
    box.setAttribute('data-video-state', 'ready');
    if (!v) { frame.innerHTML = '<div class="mn-video-ph">動画はまだありません</div>'; return; }
    if (v.src && !v.locked) {
      frame.innerHTML = '<video controls preload="metadata"' + (v.poster ? ' poster="' + esc(S.root + v.poster) + '"' : '') + ' src="' + esc(S.root + v.src) + '"></video>';
      return;
    }
    // 動画ファイルがない（未制作）か、Free で全編がロックされている
    frame.innerHTML = '<div class="mn-video-ph">' +
      (v.posterSvg ? '<div class="mn-video-poster">' + v.posterSvg + '</div>' : '') +
      '<div class="mn-video-ph-text">' + (v.src === undefined && !v.locked ? '動画は制作中です（枠のみの試作）' :
        (isPro() ? '動画は制作中です（Pro では全編を再生できる予定）' : '冒頭 ' + (v.previewSeconds || 15) + ' 秒を無料で再生できます（動画は制作中）。全編は Pro プランで。')) + '</div>' +
      (isPro() ? '' : '<button type="button" class="mn-textbtn" data-see-pro>Pro について</button>') + '</div>';
    var b = frame.querySelector('[data-see-pro]'); if (b) b.addEventListener('click', function () { proModal('各節の解説アニメーション（全編）は Pro プランの機能です。'); });
  }

  /* =====================================================================
   * 機能 E：差し込み型の演習（証明パズル・体感ミニゲーム）
   * ===================================================================== */
  function targetBlockEnd(label) {
    var env = document.getElementById(label);
    if (!env || !S.article.contains(env)) return null;
    var end = env;
    // 直後の証明（proof）までを 1 まとまりとみなす
    for (var n = env.nextElementSibling; n && n.matches('.mn-env[data-env="proof"], .mn-env[data-minor]'); n = n.nextElementSibling) { end = n; if (n.matches('[data-env="proof"]')) break; }
    return end;
  }
  function proofOf(label) {
    var env = document.getElementById(label);
    for (var n = env && env.nextElementSibling; n && n.matches('.mn-env'); n = n.nextElementSibling) if (n.matches('[data-env="proof"]')) return n;
    return null;
  }
  function mountInteractiveSlots(mf) {
    (mf && mf.interactive || []).forEach(function (it) {
      var end = targetBlockEnd(it.target); if (!end) return;
      var slot = el('<div class="mn-interactive-slot mn-learn-x" data-target-id="' + esc(it.target) + '" data-item="' + esc(it.id) + '"></div>');
      var free = it.access === 'free';
      slot.innerHTML = '<div class="mn-ia-bar"><button type="button" class="mn-ia-open" aria-expanded="false">' +
        (it.type === 'puzzle' ? '🧩 自分で証明を組み立ててみる' : it.type === 'quiz' ? '⭕ ' + S.renderer.renderInline(it.label || '○× ゲーム') : '🎮 ' + S.renderer.renderInline(it.label || '体感ミニゲーム')) + '</button>' +
        (it.type === 'quiz' ? '' : free ? '<span class="mn-free-badge">無料お試し</span>' : (isPro() ? '' : '<span class="mn-pro-badge">Pro</span>')) +
        '<span class="mn-ia-sub">' + esc(it.summary || '') + '</span></div><div class="mn-ia-body" hidden></div>';
      end.parentNode.insertBefore(slot, end.nextSibling);
      slot.querySelector('.mn-ia-open').addEventListener('click', function () { toggleInteractive(slot, it); });
    });
  }
  var content = null, contentWaiters = [], contentState = 0;
  function withContent(cb) {
    if (contentState === 2) { cb(content); return; }
    contentWaiters.push(cb);
    if (contentState === 1) return;
    contentState = 1;
    A.fetchProContent(S.root, pageLabel()).then(function (d) { content = d; }, function () { content = null; })
      .then(function () { contentState = 2; contentWaiters.splice(0).forEach(function (f) { f(content); }); });
  }
  function toggleInteractive(slot, it) {
    var body = slot.querySelector('.mn-ia-body'), btn = slot.querySelector('.mn-ia-open');
    var open = body.hidden || !!body._out;
    btn.setAttribute('aria-expanded', open);
    var proof = proofOf(it.target);
    if (!open) {
      animOut(body, [{ height: body.offsetHeight + 'px', opacity: 1, overflow: 'hidden' }, { height: '0px', opacity: 0, overflow: 'hidden' }], 260, function () { body.hidden = true; });
      if (proof) proof.classList.remove('mn-puzzle-hidden');
      return;
    }
    cancelOut(body);
    body.hidden = false;
    if (it.type === 'quiz') {   // ○× ゲームはページの表から問題を作るので、教材データを読み込まない
      renderQuiz(body, it);
      animHeight(body, 0, body.offsetHeight);
      return;
    }
    body.innerHTML = '<div class="mn-ia-skeleton" role="status"><span class="mn-sr-only">読み込み中…</span><div class="mn-skel-line" style="width:70%"></div><div class="mn-skel-line"></div><div class="mn-skel-line" style="width:56%"></div></div>';
    var start = 0;   // 閉じた状態（高さ 0）から、読み込み後の高さまで伸ばす
    withContent(function (data) {
      if (body.hidden) return;
      var running = body.getAnimations ? body.getAnimations()[0] : null;
      if (running) { start = body.offsetHeight; running.cancel(); }
      fill(data);
      animHeight(body, start, body.offsetHeight);
    });
    if (body.innerHTML.indexOf('mn-ia-skeleton') >= 0) animHeight(body, 0, body.offsetHeight, 200);
    function fill(data) {
      var item = data && (data.items || []).find(function (x) { return x.id === it.id; });
      if (!item) { body.innerHTML = '<p class="mn-muted">教材データを読み込めませんでした。</p>'; return; }
      if (item.type === 'puzzle') { if (proof && !item.locked) proof.classList.add('mn-puzzle-hidden'); renderPuzzle(body, item, it); }
      else if (item.type === 'minigame') renderMinigame(body, item);
    }
  }

  /* ---------- 証明パズル ---------- */
  function shuffled(n) {
    var a = []; for (var i = 0; i < n; i++) a.push(i);
    for (var k = 0; k < 20; k++) {    // 正解の順と一致しない並びになるまで混ぜる
      for (var j = n - 1; j > 0; j--) { var r = Math.floor(Math.random() * (j + 1)), t = a[j]; a[j] = a[r]; a[r] = t; }
      if (a.some(function (x, i) { return x !== i; })) break;
    }
    return a;
  }
  function stepCard(st, idx, extra) {
    return '<li class="mn-pz-card' + (extra || '') + '" data-step="' + idx + '" draggable="true" tabindex="0">' +
      '<span class="mn-pz-grip" aria-hidden="true">⠿</span><div class="mn-pz-text mn-prose">' + S.renderer.renderMarkdown(st.text) + '</div>' +
      ((st.uses || []).length ? '<div class="mn-pz-uses">' + st.uses.map(function (l) { return '<span class="mn-pz-badge">使う：' + xref(l) + '</span>'; }).join('') + '</div>' : '') +
      '<span class="mn-pz-move"><button type="button" class="mn-pz-mv" data-mv="-1" aria-label="上へ">↑</button><button type="button" class="mn-pz-mv" data-mv="1" aria-label="下へ">↓</button></span></li>';
  }
  function renderPuzzle(body, item, it) {
    if (item.locked) { renderLockedPuzzle(body, item, it); return; }
    var steps = item.steps, order = shuffled(steps.length);
    body.innerHTML = '<p class="mn-pz-intro">' + S.renderer.renderInline(item.intro || '証明の手順がばらばらになっています。正しい論理の順に並べ替えてください（ドラッグ、または ↑↓、スマホはカードを 2 つ順にタップで入れ替え）。') + '</p>' +
      '<ol class="mn-pz-list">' + order.map(function (i) { return stepCard(steps[i], i); }).join('') + '</ol>' +
      '<div class="mn-learn-actions"><button type="button" class="mn-btn" data-judge>判定する</button><button type="button" class="mn-btn mn-btn-quiet" data-reset>混ぜ直す</button><button type="button" class="mn-btn mn-btn-quiet" data-show-proof>元の証明を表示</button></div>' +
      '<div class="mn-pz-result" aria-live="polite"></div>';
    var list = body.querySelector('.mn-pz-list');
    wireSortable(list);
    body.querySelector('[data-reset]').addEventListener('click', function () { renderPuzzle(body, item, it); });
    body.querySelector('[data-show-proof]').addEventListener('click', function () { var p = proofOf(it.target); if (p) { p.classList.remove('mn-puzzle-hidden'); p.open = true; p.scrollIntoView({ block: 'nearest' }); } });
    body.querySelector('[data-judge]').addEventListener('click', function () {
      var cur = [].map.call(list.children, function (c) { return +c.getAttribute('data-step'); });
      var res = body.querySelector('.mn-pz-result');
      list.querySelectorAll('.mn-pz-card').forEach(function (c) { c.classList.remove('is-wrong', 'is-ok'); });
      // 正解の判定：各手順について、それが前提とする手順（needs）がすべて前に来ていれば正しい。
      // 論理的に入れ替え可能な手順（互いに依存しない手順）の順序は問わない。
      var bad = -1;
      for (var i = 0; i < cur.length && bad < 0; i++) {
        var before = cur.slice(0, i);
        if ((steps[cur[i]].needs || []).some(function (k) { return before.indexOf(k) < 0; })) bad = i;
      }
      if (bad < 0) {
        list.querySelectorAll('.mn-pz-card').forEach(function (c) { c.classList.add('is-ok'); });
        res.innerHTML = '<div class="mn-pz-ok">正解です。論理の流れがつながりました。<strong>' + esc(refText(it.target)) + '</strong> に「✓ 理解済み」を付けました。</div>';
        setUnderstood(it.target, true);
        var p = proofOf(it.target); if (p) p.classList.remove('mn-puzzle-hidden');
        return;
      }
      // 最初に順序が崩れている位置のカード：それが使う手順がまだ前に来ていない、などのヒントを出す
      var card = list.children[bad], st = steps[cur[bad]];
      card.classList.add('is-wrong');
      var placed = cur.slice(0, bad), missing = (st.needs || []).filter(function (k) { return placed.indexOf(k) < 0; });
      var hint = '「' + plain(st.text) + '」には、まだ前に来ていない「' + plain(steps[missing[0]].text) + '」が必要です。' + (st.hint ? 'ヒント：' + S.renderer.renderInline(st.hint) : '');
      res.innerHTML = '<div class="mn-pz-ng">' + (bad + 1) + ' 番目で論理がつながりません。' + hint + '</div>';
    });
  }
  function plain(md) { var t = document.createElement('div'); t.innerHTML = S.renderer.renderMarkdown(md); t.querySelectorAll('.katex-mathml').forEach(function (m) { m.remove(); }); var s = (t.textContent || '').replace(/\s+/g, ' ').trim(); return s.length > 40 ? s.slice(0, 40) + '…' : s; }
  function renderLockedPuzzle(body, item, it) {
    var first = item.teaser && item.teaser.steps && item.teaser.steps[0];
    var n = item.stepCount || 5;
    var ph = ''; for (var i = 1; i < n; i++) ph += '<li class="mn-pz-card is-locked" aria-hidden="true"><span class="mn-pz-lockline"></span></li>';
    body.innerHTML = '<p class="mn-pz-intro">最初の手順を「1 番目」に置いてみましょう。続きの手順は Pro プランで開きます。</p>' +
      '<ol class="mn-pz-list">' + (first ? stepCard(first, 0, ' is-teaser') : '') + ph + '</ol>' +
      '<div class="mn-learn-actions"><button type="button" class="mn-btn" data-place>この手順を 1 番目に置く</button></div><div class="mn-pz-result"></div>';
    body.querySelector('[data-place]').addEventListener('click', function () {
      body.querySelector('.mn-pz-card').classList.add('is-ok');
      body.querySelector('.mn-pz-result').innerHTML = '<div class="mn-pz-ok">1 番目は正解です。残り ' + (n - 1) + ' 手順の組み立てと判定は Pro プランで続けられます。 <button type="button" class="mn-textbtn" data-see-pro>Pro について</button></div>';
      body.querySelector('[data-see-pro]').addEventListener('click', function () { proModal('すべての定理の証明パズルは Pro プランの機能です。'); });
    });
  }
  /* 並べ替え：ドラッグ（マウス）、↑↓ ボタン（キーボード）、2 枚タップで入れ替え（タッチ） */
  function wireSortable(list) {
    var drag = null, tapSel = null;
    list.addEventListener('dragstart', function (ev) { drag = ev.target.closest('.mn-pz-card'); if (drag) { drag.classList.add('is-drag'); try { ev.dataTransfer.setData('text/plain', ''); } catch (e) {} } });
    list.addEventListener('dragover', function (ev) {
      if (!drag) return; ev.preventDefault();
      var over = ev.target.closest('.mn-pz-card'); if (!over || over === drag) return;
      var r = over.getBoundingClientRect(), ref = ev.clientY < r.top + r.height / 2 ? over : over.nextSibling;
      if (ref === drag || ref === drag.nextSibling || list._flipping) return;
      list._flipping = true;
      flip([].slice.call(list.children), function () { list.insertBefore(drag, ref); });
      setTimeout(function () { list._flipping = false; }, 120);
    });
    list.addEventListener('dragend', function () { if (drag) drag.classList.remove('is-drag'); drag = null; });
    list.addEventListener('click', function (ev) {
      var mv = ev.target.closest('[data-mv]');
      var card = ev.target.closest('.mn-pz-card');
      if (!card || ev.target.closest('a')) return;
      if (mv) {
        var d = +mv.getAttribute('data-mv');
        flip([].slice.call(list.children), function () {
          if (d < 0 && card.previousElementSibling) list.insertBefore(card, card.previousElementSibling);
          if (d > 0 && card.nextElementSibling) list.insertBefore(card.nextElementSibling, card);
        });
        card.querySelector('[data-mv="' + d + '"]').focus();
        return;
      }
      if (!tapSel) { tapSel = card; card.classList.add('is-sel'); return; }
      if (tapSel !== card) {
        var a = tapSel, b = card, an = a.nextSibling === b ? a : a.nextSibling;
        flip([].slice.call(list.children), function () { list.insertBefore(a, b); list.insertBefore(b, an); });
      }
      tapSel.classList.remove('is-sel'); tapSel = null;
    });
  }

  /* ---------- 体感ミニゲーム：開被覆と有限部分被覆 ---------- */
  /* ---------- ○× ゲーム ----------
   * 問題はページに描かれた表から作る（表を直せばゲームも直る）。manifest の項目：
   *   tables: [{ label: 表のラベル, mode: 'grid' | 'rows', q: '「{row}」は「{col}」で保たれる？', notes: 備考のラベル, why: 説明の列 }]
   *     grid：1 列目が行の名前、2 列目以降の各欄の ○×△ が答え（△ は「いつもとは限らない」ので ×）。欄の「(n)」は notes の n 番目の項目を説明に使う。
   *     rows：各行の mark 列（既定 1）の ○×△ が答え（印のない表は answer: 'yes' | 'no' で一律）、why 列（既定 2）が説明。q の {row} は 1 列目、{c1}・{c2}… は 2 列目以降。skip に合う行は出さない。
   *   items: [{ q: 問題（Markdown）, a: 'yes' | 'no', why: 説明（Markdown） }]（表にない問題を足す）
   *   yes / no：○・× のボタンの説明、count：1 回の問題数 */
  function quizPool(it) {
    var pool = [];
    (it.tables || []).forEach(function (t) {
      var env = document.getElementById(t.label), table = env && env.querySelector('table');
      if (!table) return;
      var heads = [].map.call(table.querySelectorAll('thead th'), function (th) { return th.innerHTML; });
      var notes = t.notes && document.getElementById(t.notes);
      var items = notes ? notes.querySelectorAll('ol > li') : [];
      table.querySelectorAll('tbody tr').forEach(function (tr) {
        var cells = tr.children; if (!cells.length) return;
        var rowHtml = cells[0].innerHTML;
        function add(cell, qHtml, whyHtml) {
          var m = cell.querySelector('.mn-yes, .mn-no, .mn-partial'); if (!m) return;
          var t2 = m.getAttribute('title') || '';
          if (t2 === '未解決') return;   // 「?」の欄は出題しない
          var a = m.classList.contains('mn-yes') ? 'yes' : 'no';
          pool.push({ q: qHtml, a: a, partial: m.classList.contains('mn-partial'), why: whyHtml });
        }
        if ((t.mode || 'grid') === 'grid') {
          for (var c = 1; c < cells.length; c++) {
            var n = /\((\d+)\)/.exec(cells[c].textContent), why = n && items[+n[1] - 1] ? items[+n[1] - 1].innerHTML : '';
            add(cells[c], (t.q || '「{row}」は「{col}」で保たれる？').replace('{row}', rowHtml).replace('{col}', heads[c] || ''), why);
          }
        } else {
          if (t.skip && new RegExp(t.skip).test(cells[0].textContent)) return;
          var mc = t.mark || 1, wc = t.why || 2, q = (t.q || '{row}').replace('{row}', rowHtml);
          for (var i = 1; i < cells.length; i++) q = q.replace('{c' + i + '}', cells[i].innerHTML);
          var why = cells[wc] ? cells[wc].innerHTML : '';
          if (t.answer) pool.push({ q: q, a: t.answer, partial: false, why: why });   // 印のない表（すべて成り立つ・すべて成り立たない）
          else if (cells[mc]) add(cells[mc], q, why);
        }
      });
    });
    (it.items || []).forEach(function (x) {
      pool.push({ q: S.renderer.renderInline(x.q), a: x.a === 'yes' ? 'yes' : 'no', partial: false, why: S.renderer.renderInline(x.why || '') });
    });
    return pool;
  }
  function shuffle(a) { for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t; } return a; }
  function renderQuiz(body, it) {
    var pool = quizPool(it);
    if (!pool.length) { body.innerHTML = '<p class="mn-muted">問題を作れませんでした。</p>'; return; }
    var N = Math.min(it.count || 10, pool.length), yesLab = it.yes || 'いつも成り立つ', noLab = it.no || '成り立たない例がある';
    var best = getJSON('sm_quiz_best', {}), round, k, score, wrong;
    function start(list) { round = list; k = 0; score = 0; wrong = []; show(); }
    function fresh() { start(shuffle(pool.slice()).slice(0, N)); }
    function show() {
      var x = round[k];
      body.innerHTML = '<div class="mn-qz" tabindex="-1">' +
        '<div class="mn-qz-head"><span class="mn-qz-num">第 ' + (k + 1) + ' 問 / ' + round.length + '</span><span class="mn-qz-score">正解 ' + score + '</span></div>' +
        '<div class="mn-qz-bar"><i style="width:' + (100 * k / round.length) + '%"></i></div>' +
        '<div class="mn-qz-card"><div class="mn-qz-q">' + x.q + '</div>' +
        '<div class="mn-qz-btns"><button type="button" class="mn-qz-ans" data-a="yes"><b>○</b><small>' + esc(yesLab) + '</small></button>' +
        '<button type="button" class="mn-qz-ans" data-a="no"><b>×</b><small>' + esc(noLab) + '</small></button></div>' +
        '<div class="mn-qz-fb" hidden></div></div><p class="mn-qz-keys">キー操作：O で ○、X で ×、Enter で次へ</p></div>';
      var card = body.querySelector('.mn-qz-card');
      anim(card, [{ opacity: 0, transform: 'translateY(8px)' }, { opacity: 1, transform: 'none' }], 240);
      body.querySelectorAll('.mn-qz-ans').forEach(function (b) { b.addEventListener('click', function () { answer(b.getAttribute('data-a')); }); });
      var box = body.querySelector('.mn-qz'); box.addEventListener('keydown', onKey);
      if (k > 0) box.focus({ preventScroll: true });
    }
    function onKey(e) {
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      var key = e.key.toLowerCase(), fb = body.querySelector('.mn-qz-fb');
      if (fb && fb.hidden && (key === 'o' || key === 'x')) { e.preventDefault(); e.stopPropagation(); answer(key === 'o' ? 'yes' : 'no'); }
      else if (fb && !fb.hidden && key === 'enter') { e.preventDefault(); next(); }
    }
    function answer(a) {
      var x = round[k], ok = a === x.a, fb = body.querySelector('.mn-qz-fb');
      if (!fb.hidden) return;
      if (ok) score++; else wrong.push(x);
      body.querySelectorAll('.mn-qz-ans').forEach(function (b) {
        b.disabled = true;
        var v = b.getAttribute('data-a');
        if (v === x.a) b.classList.add('is-correct');
        if (v === a && !ok) b.classList.add('is-wrong');
      });
      body.querySelector('.mn-qz-score').textContent = '正解 ' + score;
      fb.innerHTML = '<p class="mn-qz-verdict ' + (ok ? 'is-ok' : 'is-ng') + '">' + (ok ? '正解' : '不正解') + '：答えは ' + (x.a === 'yes' ? '○' : '×') +
        (x.partial ? '（△：条件付きでだけ成り立つ）' : '') + '</p>' + (x.why ? '<div class="mn-qz-why">' + x.why + '</div>' : '') +
        '<button type="button" class="mn-btn mn-qz-next">' + (k + 1 < round.length ? '次の問題 →' : '結果を見る') + '</button>';
      fb.hidden = false;
      var h0 = body.offsetHeight;
      anim(fb, [{ opacity: 0 }, { opacity: 1 }], 220);
      animHeight(body, h0 - fb.offsetHeight, body.offsetHeight, 240);
      var nb = fb.querySelector('.mn-qz-next'); nb.addEventListener('click', next); nb.focus({ preventScroll: true });
    }
    function next() {
      k++;
      var h0 = body.offsetHeight;
      if (k < round.length) show(); else finish();
      animHeight(body, h0, body.offsetHeight, 240);
    }
    function finish() {
      var prev = best[it.id] || 0;
      if (round.length === N && score > prev) { best[it.id] = score; setJSON('sm_quiz_best', best); }
      var msg = score === round.length ? '全問正解！' : score >= round.length * 0.7 ? 'よくできました。' : '表をもう一度眺めてから挑戦してみよう。';
      body.innerHTML = '<div class="mn-qz mn-qz-end"><p class="mn-qz-result"><b>' + score + '</b> / ' + round.length + '</p><p>' + msg +
        (round.length === N ? '（これまでの最高 ' + Math.max(prev, score) + ' / ' + N + '）' : '') + '</p>' +
        '<div class="mn-qz-endbtns">' + (wrong.length ? '<button type="button" class="mn-btn" data-retry>間違えた ' + wrong.length + ' 問をもう一度</button>' : '') +
        '<button type="button" class="mn-btn" data-again>新しい ' + N + ' 問</button></div></div>';
      anim(body.querySelector('.mn-qz-result'), [{ transform: 'scale(.8)', opacity: 0 }, { transform: 'none', opacity: 1 }], 320);
      var r = body.querySelector('[data-retry]'); if (r) r.addEventListener('click', function () { var h0 = body.offsetHeight; start(shuffle(wrong.slice())); animHeight(body, h0, body.offsetHeight, 240); });
      body.querySelector('[data-again]').addEventListener('click', function () { var h0 = body.offsetHeight; fresh(); animHeight(body, h0, body.offsetHeight, 240); });
    }
    fresh();
  }

  function renderMinigame(body, item) {
    if (item.locked) { body.innerHTML = '<p>このミニゲームは Pro プランで遊べます。 <button type="button" class="mn-textbtn" data-see-pro>Pro について</button></p>'; body.querySelector('[data-see-pro]').addEventListener('click', function () { proModal(); }); return; }
    if (item.game !== 'cover-interval') { body.innerHTML = '<p class="mn-muted">未対応のミニゲームです。</p>'; return; }
    body.innerHTML = '<p class="mn-mg-intro">' + S.renderer.renderInline(item.intro || '') + '</p>' +
      '<div class="mn-mg-controls">' +
        '<label><input type="radio" name="mg-space" value="half" checked> 区間 $(0,1]$（$0$ を含まない）</label>' +
        '<label><input type="radio" name="mg-space" value="closed"> 区間 $[0,1]$（$0$ を含む）</label>' +
        '<label class="mn-mg-range">選んだ開区間の個数 $N$：<input type="range" min="1" max="40" value="4" data-n><output data-n-out>4</output></label>' +
        '<label class="mn-mg-range" data-eps-wrap>$0$ を含む開区間の半径 $\\varepsilon$：<input type="range" min="1" max="50" value="12" data-eps><output data-eps-out>0.12</output></label>' +
      '</div><svg class="mn-mg-svg" viewBox="0 0 640 210" role="img" aria-label="区間と開被覆の図"></svg><div class="mn-mg-msg" aria-live="polite"></div>';
    body.querySelectorAll('.mn-mg-intro, .mn-mg-controls label').forEach(function (n) { renderMathIn(n); });
    var svg = body.querySelector('svg'), nIn = body.querySelector('[data-n]'), eIn = body.querySelector('[data-eps]');
    function draw() {
      var closed = body.querySelector('input[name="mg-space"]:checked').value === 'closed';
      var N = +nIn.value, eps = +eIn.value / 100;
      body.querySelector('[data-n-out]').textContent = N;
      body.querySelector('[data-eps-out]').textContent = eps.toFixed(2);
      body.querySelector('[data-eps-wrap]').hidden = !closed;
      var X0 = 40, W = 560, sx = function (x) { return X0 + x * W; };
      var out = '<line class="mn-mg-axis" x1="' + sx(0) + '" y1="40" x2="' + sx(1) + '" y2="40"/>' +
        '<circle class="mn-mg-end' + (closed ? ' is-closed' : '') + '" cx="' + sx(0) + '" cy="40" r="5"/><circle class="mn-mg-end is-closed" cx="' + sx(1) + '" cy="40" r="5"/>' +
        '<text class="mn-mg-tick" x="' + sx(0) + '" y="24">0</text><text class="mn-mg-tick" x="' + sx(1) + '" y="24">1</text>';
      // 被覆 U_n = (1/n, 2)（1 から右へはみ出す）：選んだ N 個は U_1,…,U_N で、和は (1/N, 2)
      var row = 0;
      for (var n = 1; n <= Math.min(N, 12); n++, row++) {
        var y = 64 + row * 9;
        out += '<line class="mn-mg-set" x1="' + sx(1 / n) + '" y1="' + y + '" x2="' + (sx(1) + 24) + '" y2="' + y + '"/><circle class="mn-mg-open" cx="' + sx(1 / n) + '" cy="' + y + '" r="2.5"/>';
      }
      if (N > 12) out += '<text class="mn-mg-tick" x="' + (sx(1) + 30) + '" y="' + (64 + 11 * 9) + '">… U_' + N + '</text>';
      var gapEnd = 1 / N, covered;
      if (closed) {
        // [0,1] の被覆：U_n に加えて (−ε, ε) が必要（0 を覆う元がないと被覆にならない）
        var y0 = 64 + Math.min(N, 12) * 9 + 8;
        out += '<line class="mn-mg-set is-eps" x1="' + sx(0) + '" y1="' + y0 + '" x2="' + sx(eps) + '" y2="' + y0 + '"/><circle class="mn-mg-open" cx="' + sx(eps) + '" cy="' + y0 + '" r="2.5"/>';
        covered = gapEnd < eps;
        if (!covered) out += '<rect class="mn-mg-gap" x="' + sx(eps) + '" y="32" width="' + (sx(gapEnd) - sx(eps)) + '" height="16"/>';
      } else {
        covered = false;
        out += '<rect class="mn-mg-gap" x="' + sx(0) + '" y="32" width="' + (sx(gapEnd) - sx(0)) + '" height="16"/>';
      }
      svg.innerHTML = out;
      var msg = body.querySelector('.mn-mg-msg');
      if (closed) msg.innerHTML = covered
        ? '覆えました：$(-\\varepsilon,\\varepsilon)$ と $U_{1},\\dots,U_{N}$ の有限個で $[0,1]$ 全体が覆われます（$1/N<\\varepsilon$）。$0$ を含む集合が $0$ の近くを「まとめて」覆うので、残りは有限個で足ります。'
        : 'まだ隙間 $[\\varepsilon,1/N]$ があります。$N$ を増やすと、ある有限の $N$（$N>1/\\varepsilon$）で必ず覆えます。';
      else msg.innerHTML = '隙間 $(0,1/N]$ が残ります。$N$ をいくら大きくしても有限個では覆えません：$(0,1]$ はこの開被覆 $\\{U_{n}\\}$ について有限部分被覆をもたないので、コンパクトではありません。抜けている点 $0$ の近くで、集合がどんどん小さくなっていくのが原因です。';
      renderMathIn(msg);
    }
    body.addEventListener('input', draw); body.addEventListener('change', draw);
    draw();
  }
  /* $…$ を KaTeX で描く（小さな部品用） */
  function renderMathIn(node) {
    if (!window.katex) return;
    var walker = document.createTreeWalker(node, NodeFilter.SHOW_TEXT), list = [];
    while (walker.nextNode()) if (/\$[^$]+\$/.test(walker.currentNode.nodeValue)) list.push(walker.currentNode);
    list.forEach(function (t) {
      var frag = document.createDocumentFragment(), parts = t.nodeValue.split(/(\$[^$]+\$)/);
      parts.forEach(function (p) {
        if (/^\$[^$]+\$$/.test(p)) { var s = document.createElement('span'); try { window.katex.render(p.slice(1, -1), s, { throwOnError: false, macros: C.KATEX_MACROS }); } catch (e) { s.textContent = p; } frag.appendChild(s); }
        else if (p) frag.appendChild(document.createTextNode(p));
      });
      t.parentNode.replaceChild(frag, t);
    });
  }

  /* =====================================================================
   * 証明の段階表示（Pro）
   * ===================================================================== */
  /* 証明を「Step 1」「Step 2」… の段落で区切り、1 ステップだけを表示して前へ・次へで進む（2026-10-22 ユーザー指示：
   * 下に増えていくのではなく、本当に 1 ステップずつ）。Step 1 より前の段落（方針など）はいつも表示する。
   * 最後のステップには、その後ろの段落と前提の確認（hypcheck）も含める。全体表示といつでも行き来できる。
   * 操作：ボタン、←／→ キー（最後に操作した証明）、スマホは本文を左右にスワイプ。 */
  var activeStepper = null;
  function decorateProofs() {
    S.article.querySelectorAll('.mn-prose details.mn-env[data-env="proof"]').forEach(function (d) {
      var body = d.querySelector(':scope > .mn-env-body'); if (!body) return;
      var steps = [].filter.call(body.children, function (c) { return c.tagName === 'P' && /^Step\s*\d/.test((c.querySelector('strong') || {}).textContent || ''); });
      if (steps.length < 3 || body.querySelector('.mn-stepper')) return;
      var bar = el('<div class="mn-stepper mn-learn-x" role="group" aria-label="証明の段階表示"></div>');
      body.insertBefore(bar, body.firstChild);
      // 前提条件の使用箇所（hypcheck）はステップに含めず、別に扱う
      var hyp = body.querySelector(':scope > [data-env="hypcheck"]');
      var all = [].slice.call(body.children).filter(function (c) { return c !== bar && c !== hyp; });
      var first = all.indexOf(steps[0]);
      var seg = all.map(function (c, i) {
        if (i < first) return -1;
        var k = 0; while (k + 1 < steps.length && all.indexOf(steps[k + 1]) <= i) k++;
        return k;
      });
      var on = false, cur = 0, revealed = {}, showHyp = false;
      // 各ステップの見出し（太字の「Step 2（…）.」）と主張（【主張：…】、なければ null）
      var labels = steps.map(function (st) { var b = st.querySelector('strong'); return b ? b.innerHTML : ''; });
      var claims = steps.map(function (st) { return st.querySelector('.mn-step-claim'); });
      // 理由を見る前に見せる部分：段落の頭から主張の終わりまで（記号の導入などの準備を主張の前に書けば、それも見える）
      var heads = steps.map(function (st, k) {
        if (!claims[k]) return '';
        var c = st.cloneNode(true), cl = c.querySelector('.mn-step-claim'), n = cl;
        while (n && n !== c) { while (n.nextSibling) n.parentNode.removeChild(n.nextSibling); n = n.parentNode; }
        return c.innerHTML;
      });
      // hypcheck の項目のうち、そのステップの番号に触れているもの（「Step 3」「Step 3・4」など）
      var hypItems = hyp ? [].slice.call(hyp.querySelectorAll('li')) : [];
      function hypFor(k) {
        var re = new RegExp('Step\\s*(?:[0-9]+\\s*[・,、]\\s*)*' + (k + 1) + '(?![0-9])');
        return hypItems.filter(function (li) { return re.test(li.textContent); });
      }
      var past = el('<div class="mn-step-past mn-learn-x" hidden></div>'), quiz = el('<div class="mn-step-quiz mn-learn-x" hidden></div>');
      var stepHyp = el('<div class="mn-step-hyp mn-learn-x" hidden></div>');
      function pastItem(k) { return '<span class="mn-step-label">' + labels[k] + '</span>' + (claims[k] ? ' <span class="mn-step-claim">' + claims[k].innerHTML + '</span>' : ''); }
      function lastBlock(k) { var lb = null; all.forEach(function (c, i) { if (seg[i] === k) lb = c; }); return lb; }
      function render() {
        if (!on) {
          all.forEach(function (c) { c.classList.remove('mn-step-hidden'); });
          if (hyp) hyp.classList.remove('mn-step-hidden');
          past.hidden = quiz.hidden = stepHyp.hidden = true;
          bar.classList.remove('is-on');
          bar.innerHTML = '<button type="button" class="mn-textbtn mn-step-start" data-start>' + (isPro() ? '1 ステップずつ読む' : '🔒 1 ステップずつ読む（Pro）') + '</button>';
          return;
        }
        var hideCur = !!claims[cur] && !revealed[cur];
        all.forEach(function (c, i) { c.classList.toggle('mn-step-hidden', seg[i] >= 0 && (seg[i] !== cur || hideCur)); });
        // 主張のあるステップは、準備と主張だけを見せ、理由は自分で確かめてから開く
        if (hideCur) {
          quiz.innerHTML = '<p>' + heads[cur] + '</p><p class="mn-step-quiz-hint">自分で確かめてから理由を開いてください。</p>' +
            '<button type="button" class="mn-textbtn" data-reveal>理由を開く</button>';
          body.insertBefore(quiz, steps[cur]); quiz.hidden = false;
        } else quiz.hidden = true;
        // このステップで使った前提（理由を見た後に）
        var hs = hideCur ? [] : hypFor(cur);
        if (hs.length) {
          stepHyp.innerHTML = '<div class="mn-step-hyp-k">このステップで使う前提</div><ul>' + hs.map(function (li) { return '<li>' + li.innerHTML + '</li>'; }).join('') + '</ul>';
          var lb = lastBlock(cur); body.insertBefore(stepHyp, lb ? lb.nextSibling : null); stepHyp.hidden = false;
        } else stepHyp.hidden = true;
        // 前提の使用箇所の全体：最後のステップの理由まで見たとき、またはバーから開いたとき
        var atEnd = cur === steps.length - 1 && !hideCur;
        if (hyp) hyp.classList.toggle('mn-step-hidden', !(atEnd || showHyp));
        // これまでのステップの見出しと主張（流れを見失わないように）
        if (cur > 0) {
          past.innerHTML = '<div class="mn-step-past-k">これまで</div><ol>' + steps.slice(0, cur).map(function (_, k) { return '<li>' + pastItem(k) + '</li>'; }).join('') + '</ol>';
          body.insertBefore(past, steps[0]); past.hidden = false;
        } else past.hidden = true;
        bar.classList.add('is-on');
        var dots = steps.map(function (_, k) { return '<button type="button" class="mn-step-dot' + (k === cur ? ' is-cur' : '') + (revealed[k] || !claims[k] ? ' is-done' : '') + '" data-go="' + k + '" aria-label="Step ' + (k + 1) + ' へ"></button>'; }).join('');
        bar.innerHTML =
          '<button type="button" class="mn-textbtn" data-prev' + (cur === 0 ? ' disabled' : '') + ' aria-label="前のステップ">◀</button>' +
          '<span class="mn-step-pos">' + (cur + 1) + ' / ' + steps.length + '</span>' +
          '<button type="button" class="mn-textbtn" data-next' + (cur === steps.length - 1 ? ' disabled' : '') + ' aria-label="次のステップ">▶</button>' +
          '<span class="mn-step-dots">' + dots + '</span>' +
          (claims[cur] && revealed[cur] ? '<button type="button" class="mn-textbtn" data-hide>理由を隠す</button>' : '') +
          (hyp && !atEnd ? '<button type="button" class="mn-textbtn" data-hyp>' + (showHyp ? '前提を閉じる' : '前提') + '</button>' : '') +
          '<button type="button" class="mn-textbtn" data-all>全体表示</button>';
        if (!REDUCED_L) all.forEach(function (x, i) { if (seg[i] === cur && x.animate && !x.classList.contains('mn-step-hidden')) x.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 160, easing: 'ease-out' }); });
        var r = bar.getBoundingClientRect();
        if (r.top < 0 || r.top > window.innerHeight - 60) bar.scrollIntoView({ block: 'nearest', behavior: REDUCED_L ? 'auto' : 'smooth' });
      }
      function go(k) { cur = Math.max(0, Math.min(steps.length - 1, k)); activeStepper = api; render(); }
      function start() {
        if (!isPro()) { proModal('証明を 1 ステップずつ表示する読み方は Pro プランの機能です。'); return; }
        d.open = true; on = true; go(0);
      }
      var api = { prev: function () { if (on) go(cur - 1); }, next: function () { if (on) go(cur + 1); }, el: d };
      bar.addEventListener('click', function (ev) {
        var t = ev.target.closest('button'); if (!t || t.disabled) return;
        if (t.hasAttribute('data-start')) start();
        else if (t.hasAttribute('data-prev')) go(cur - 1);
        else if (t.hasAttribute('data-next')) go(cur + 1);
        else if (t.hasAttribute('data-go')) go(+t.getAttribute('data-go'));
        else if (t.hasAttribute('data-hide')) { revealed[cur] = false; render(); }
        else if (t.hasAttribute('data-hyp')) { showHyp = !showHyp; render(); }
        else if (t.hasAttribute('data-all')) { on = false; activeStepper = null; render(); }
      });
      quiz.addEventListener('click', function (ev) { if (ev.target.closest('[data-reveal]')) { revealed[cur] = true; activeStepper = api; render(); } });
      // 証明の見出しの横に「1 ステップずつ」：閉じた証明から直接段階表示で開く
      var sum = d.querySelector(':scope > summary');
      if (sum) {
        var qb = el('<button type="button" class="mn-step-quick mn-learn-x" title="この証明を 1 ステップずつ読む">' + (isPro() ? '1 ステップずつ' : '🔒 1 ステップずつ') + '</button>');
        var hint = sum.querySelector('.mn-fold-hint');
        sum.insertBefore(qb, hint ? hint.nextSibling : null);
        qb.addEventListener('click', function (ev) { ev.preventDefault(); ev.stopPropagation(); start(); });
      }
      // スマホ：本文を左右にスワイプして前へ・次へ（縦のスクロールは邪魔しない）
      var sx = null, sy = 0;
      body.addEventListener('touchstart', function (ev) { if (!on) return; sx = ev.touches[0].clientX; sy = ev.touches[0].clientY; }, { passive: true });
      body.addEventListener('touchend', function (ev) {
        if (!on || sx === null) return;
        var t = ev.changedTouches[0], dx = t.clientX - sx, dy = t.clientY - sy; sx = null;
        if (Math.abs(dx) > 60 && Math.abs(dx) > 2 * Math.abs(dy)) go(cur + (dx < 0 ? 1 : -1));
      });
      render();
    });
  }
  var REDUCED_L = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.addEventListener('keydown', function (ev) {
    if (!activeStepper || typing(ev.target) || ev.metaKey || ev.ctrlKey || ev.altKey) return;
    if (!activeStepper.el.open) return;
    if (ev.key === 'ArrowRight') { ev.preventDefault(); activeStepper.next(); }
    else if (ev.key === 'ArrowLeft') { ev.preventDefault(); activeStepper.prev(); }
  });

  /* =====================================================================
   * 開発用の Free / Pro 切替（テーマ切替の隣）
   * ===================================================================== */
  /* ⚙ 表示の設定（テーマ切替の隣） */
  var setPanel = null;
  function mountSettings() {
    var theme = S.app.querySelector('.mn-theme-toggle');
    if (!theme || S.app.querySelector('.mn-settings-btn')) return;
    var b = el('<button type="button" class="mn-iconbtn mn-settings-btn" aria-haspopup="dialog" aria-expanded="false" title="設定" aria-label="設定">' +
      // 歯車の形は Feather Icons（MIT ライセンス）の settings による
      '<svg class="mn-ico" viewBox="0 0 24 24" width="21" height="21" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">' +
      '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg></button>');
    theme.parentNode.insertBefore(b, theme);
    b.addEventListener('click', function (ev) { ev.stopPropagation(); if (setPanel) closeSettings(); else openSettings(b); });
  }
  function settingsHtml() {
    var P = prefs();
    function row(k, label, sub) {
      return '<div class="mn-set-row"><div><div class="mn-set-label">' + label + '</div><div class="mn-set-sub">' + sub + '</div></div>' +
        '<div class="mn-seg" role="radiogroup" aria-label="' + esc(label) + '">' +
        '<button type="button" role="radio" aria-checked="' + (P[k] === 'open') + '" data-pref="' + k + '" data-v="open">開く</button>' +
        '<button type="button" role="radio" aria-checked="' + (P[k] === 'closed') + '" data-pref="' + k + '" data-v="closed">たたむ</button></div></div>';
    }
    var themeNow = document.documentElement.dataset.theme || 'auto';
    function seg(attr, cur, opts) {
      return '<div class="mn-seg" role="radiogroup">' + opts.map(function (o) {
        return '<button type="button" role="radio" aria-checked="' + (cur === o[0]) + '" ' + attr + '="' + o[0] + '">' + o[1] + '</button>';
      }).join('') + '</div>';
    }
    return '<div class="mn-set-title">設定</div>' +
      '<div class="mn-set-row"><div><div class="mn-set-label">テーマ</div><div class="mn-set-sub">自動は端末の設定に合わせる</div></div>' +
        seg('data-theme-set', themeNow, [['light', 'ライト'], ['dark', 'ダーク'], ['auto', '自動']]) + '</div>' +
      '<div class="mn-set-sec">学習の補助を最初から</div>' +
      row('intro', '直感イメージ・動画', 'ページ冒頭の「なぜこの概念が必要か」') +
      row('roadmap', 'ここまでのロードマップ', '記法と定義の確認の下の地図') +
      row('intuition', '意図・直感', '定義・定理ごとの直感の説明と図') +
      '<div class="mn-set-presets"><button type="button" class="mn-textbtn" data-preset="learn">学習向け：すべて開く</button><button type="button" class="mn-textbtn" data-preset="research">研究向け：すべてたたむ</button></div>' +
      '<p class="mn-set-note">たたんでも見出しの 1 行は残るので、必要なときはその場で開けます。設定はこのブラウザに保存されます。</p>' +
      '<div class="mn-set-sec">前提の確認</div>' +
      '<div class="mn-set-row"><div><div class="mn-set-label">未チェックの項目</div><div class="mn-set-sub">定理の上の「この定理が使う未チェックの項目」</div></div>' +
        '<div class="mn-seg" role="radiogroup" aria-label="未チェックの項目">' +
        '<button type="button" role="radio" aria-checked="' + (P.prereq === 'open') + '" data-pref="prereq" data-v="open">表示</button>' +
        '<button type="button" role="radio" aria-checked="' + (P.prereq === 'closed') + '" data-pref="prereq" data-v="closed">非表示</button></div></div>' +
      '<div class="mn-set-row mn-set-dev"><div><div class="mn-set-label">プラン（開発用）</div><div class="mn-set-sub">試作の表示確認用</div></div>' +
        seg('data-plan-set', A.getPlan(), [['free', 'Free'], ['pro', 'Pro']]) + '</div>';
  }
  function openSettings(btn) {
    setPanel = el('<div class="mn-settings" role="dialog" aria-label="表示の設定">' + settingsHtml() + '</div>');
    document.body.appendChild(setPanel);
    var r = btn.getBoundingClientRect();
    setPanel.style.top = (r.bottom + 8) + 'px';
    setPanel.style.right = Math.max(8, window.innerWidth - r.right) + 'px';
    btn.setAttribute('aria-expanded', 'true');
    anim(setPanel, [{ opacity: 0, transform: 'translateY(-6px)' }, { opacity: 1, transform: 'none' }], 180);
    setPanel.addEventListener('click', function (ev) {
      var t = ev.target.closest('[data-pref]'), pr = ev.target.closest('[data-preset]'), th = ev.target.closest('[data-theme-set]'), pl = ev.target.closest('[data-plan-set]');
      if (th) {
        var v = th.getAttribute('data-theme-set');
        if (v === 'auto') { delete document.documentElement.dataset.theme; try { localStorage.removeItem('mn-theme'); } catch (e) {} }
        else { document.documentElement.dataset.theme = v; try { localStorage.setItem('mn-theme', v); } catch (e) {} }
      }
      else if (pl) { A.setPlan(pl.getAttribute('data-plan-set')); }
      else if (t) setPref(t.getAttribute('data-pref'), t.getAttribute('data-v'));
      else if (pr) { var v = pr.getAttribute('data-preset') === 'learn' ? 'open' : 'closed'; var q = prefs(); q.intro = q.roadmap = q.intuition = v; setJSON('sm_prefs', q); applyPrefs(); }
      else return;
      setPanel.innerHTML = settingsHtml();
    });
  }
  function closeSettings() {
    if (!setPanel) return;
    var p = setPanel; setPanel = null;
    var b = S.app.querySelector('.mn-settings-btn'); if (b) b.setAttribute('aria-expanded', 'false');
    animOut(p, [{ opacity: 1 }, { opacity: 0 }], 140, function () { p.remove(); });
  }
  function mountPlanSwitch() {
    var theme = S.app.querySelector('.mn-theme-toggle');
    if (!theme || S.app.querySelector('.mn-plan-switch')) return;
    var b = el('<button type="button" class="mn-plan-switch" title="開発用：Free / Pro の表示を切り替える"></button>');
    theme.parentNode.insertBefore(b, theme);
    function label() { b.innerHTML = '<span class="mn-plan-dev">開発用</span><span class="' + (isPro() ? '' : 'is-on') + '">Free</span>/<span class="' + (isPro() ? 'is-on' : '') + '">Pro</span>'; b.setAttribute('aria-label', '開発用プラン切替（現在 ' + A.getPlan() + '）'); }
    label();
    b.addEventListener('click', function () { A.setPlan(isPro() ? 'free' : 'pro'); });
    A.onChange(function () { label(); });
  }

  /* =====================================================================
   * 組み立て
   * ===================================================================== */
  function mountAll() {
    S.article.querySelectorAll('.mn-learn-x').forEach(function (x) { x.remove(); });
    S.article.querySelectorAll('.mn-puzzle-hidden').forEach(function (x) { x.classList.remove('mn-puzzle-hidden'); });
    content = null; contentState = 0;
    var mf = S.kind === 'page' ? manifestFor() : null;
    if (S.kind === 'page') {
      mountIntuition(mf);
      decorateEnvs();
      mountPageMap();
      mountInteractiveSlots(mf);
      decorateProofs();
      if (mf && mf.intuition) withContent(renderVideo);
      applyPrefs();
    } else if (S.kind === 'dir') {
      // 分野の概要ページ：「この分野で学ぶこと」と分野全体の動画の枠（動画は未制作）。系列の概要ページ：「この系列の目標」
      var prev = null;
      guidesFor().forEach(function (g) { prev = mountIntuition({ intuition: g }, prev) || prev; });
      renderVideo({ video: {} });
    }
    renderDock();
  }
  function onReady(ev) {
    S = ev.detail || window.MathSite;
    if (!S || !S.article) return;
    mountSettings();   // テーマ切替と Free/Pro（開発用）は設定の中に置く
    mountAll();
    document.addEventListener('pointerdown', function (e) { if (setPanel && !e.target.closest('.mn-settings, .mn-settings-btn')) closeSettings(); });
    restoreFloats();
    // ドックは本文と重ならない（PC は本文を左へ寄せる、スマホは下に高さを決めて出す）ので、外をクリックしても閉じない。閉じるのは ✕・p・スマホは下へ下げる
    // クリック：見出しのボタン・プレビューの「📌 固定」
    document.addEventListener('click', function (e) {
      var b;
      if ((b = e.target.closest('[data-pin-label]'))) { e.preventDefault(); pinLabel(b.getAttribute('data-pin-label')); return; }
      if ((b = e.target.closest('[data-pin]')) && S.article.contains(b)) { e.preventDefault(); e.stopPropagation(); if (isPinned(b.getAttribute('data-pin'))) unpin(b.getAttribute('data-pin')); else pinLabel(b.getAttribute('data-pin')); return; }
      if ((b = e.target.closest('[data-understood]')) && S.article.contains(b)) { e.preventDefault(); e.stopPropagation(); setUnderstood(b.getAttribute('data-understood'), !isUnderstood(b.getAttribute('data-understood'))); return; }
      if ((b = e.target.closest('[data-roadmap]')) && S.article.contains(b)) { e.preventDefault(); e.stopPropagation(); openRoadmap(b.getAttribute('data-roadmap')); }
    }, true);
    // p：ドックの開閉（入力中・修飾キー付きは除く）。Esc：モーダルを閉じる
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modalEl) { e.preventDefault(); closeModal(); return; }
      if (e.key === 'Escape' && setPanel) { e.preventDefault(); closeSettings(); return; }
      if ((e.key === 'p' || e.key === 'P') && !e.metaKey && !e.ctrlKey && !e.altKey && !typing(e.target) && !modalEl) { e.preventDefault(); toggleDock(); }
    });
    // 別のタブでピン留め・理解済みを変えたときも反映する
    window.addEventListener('storage', function (e) {
      if (e.key === 'sm_pinned_items') { renderDock(); refreshPinButtons(); restoreFloats(); }
      if (e.key === 'sm_understood') refreshUnderstoodUI();
    });
    A.onChange(function () { if (setPanel) setPanel.innerHTML = settingsHtml(); closeModal(); mountAll(); restoreFloats(); toast('表示を ' + (isPro() ? 'Pro' : 'Free') + ' に切り替えました（開発用）'); });
  }
  window.SMLearn = { pin: pinLabel, openDock: openDock, openRoadmap: openRoadmap, proModal: proModal };
  if (window.MathSite) onReady({ detail: window.MathSite }); else document.addEventListener('mn:ready', onReady);
})();
