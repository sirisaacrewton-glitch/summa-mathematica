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
  function typing(t) { return t && (/INPUT|TEXTAREA|SELECT/.test(t.tagName) || t.isContentEditable); }

  /* ---------- 参照の向きを逆にした表（前提＝この項目が参照している項目） ---------- */
  var FWD = null;
  function forward() {
    if (FWD) return FWD;
    FWD = {};
    var B = (S && S.index.backrefs) || {}, L = (S && S.index.labels) || {};
    Object.keys(B).forEach(function (target) {
      var T = L[target];
      if (!T || !CORE_TYPES[T.t]) return;
      B[target].forEach(function (b) {
        var from = b[1];
        if (!from || from === target) return;
        (FWD[from] = FWD[from] || []).indexOf(target) < 0 && FWD[from].push(target);
      });
    });
    return FWD;
  }
  function prereqs(label) { return (forward()[label] || []).slice(); }
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
    ['付箋ドック', '1 件まで', '無制限・並べ替え・浮かせて比較・セットの保存'],
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
      p.push(item); savePins(p);
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
  function cardHtml(p, collapsed) {
    if (PHONE.matches) collapsed = false;   // スマホは「全文」と「閉じた（ピンのボタンだけ）」の 2 段階
    return '<div class="mn-pin-card' + (collapsed ? ' is-min' : '') + '" data-pin-id="' + esc(p.id) + '"' + (isPro() ? ' draggable="true"' : '') + '>' +
      '<div class="mn-pin-head" role="button" tabindex="0" title="クリックで最小化／展開">' +
        (isPro() ? '<span class="mn-pin-grip" aria-hidden="true" title="ドラッグで並べ替え">⠿</span>' : '') +
        '<span class="mn-pin-kind">' + esc(p.kind) + '</span><span class="mn-pin-title">' + (p.title ? S.renderer.renderInline(p.title) : '') + '</span>' +
        '<span class="mn-pin-acts">' +
          '<a class="mn-pin-act" href="' + esc(p.url) + '" title="この項目へ移動">↗</a>' +
          '<button type="button" class="mn-pin-act" data-float title="画面上に浮かせる（ドラッグで移動）">⧉</button>' +
          '<button type="button" class="mn-pin-act" data-unpin title="固定を外す">✕</button>' +
        '</span></div>' +
      '<div class="mn-pin-mini">' + firstMath(p.htmlContent) + '</div>' +
      '<div class="mn-pin-body mn-prose">' + p.htmlContent + '<div class="mn-pin-where">' + esc(p.sectionPath) + '</div></div></div>';
  }
  function ensureDock() {
    if (dock) return;
    dock = el('<aside class="mn-dock" aria-label="付箋ドック" hidden><div class="mn-dock-head"></div><div class="mn-dock-list"></div></aside>');
    dockTab = el('<button type="button" class="mn-dock-tab" aria-label="付箋ドックを開く（p）" title="付箋ドック（p）"></button>');
    document.body.appendChild(dock); document.body.appendChild(dockTab);
    dockTab.addEventListener('click', function () { toggleDock(); });
    dock.addEventListener('click', onDockClick);
    // スマホ：見出し部分を下へスワイプして閉じる
    var y0 = null, dy = 0;
    dock.addEventListener('touchstart', function (ev) {
      if (!PHONE.matches || !ev.target.closest('.mn-dock-head') || ev.target.closest('button')) { y0 = null; return; }
      y0 = ev.touches[0].clientY; dy = 0;
    }, { passive: true });
    dock.addEventListener('touchmove', function (ev) {
      if (y0 === null) return;
      dy = Math.max(0, ev.touches[0].clientY - y0);
      dock.style.transform = 'translateY(' + dy + 'px)'; if (ev.cancelable) ev.preventDefault();
    }, { passive: false });
    dock.addEventListener('touchend', function () {
      if (y0 === null) return;
      y0 = null;
      if (dy > 70) closeDock();
      else { var from = dock.style.transform; dock.style.transform = ''; if (dy) anim(dock, [{ transform: from }, { transform: 'translateY(0)' }], 200); }
    });
    dock.addEventListener('keydown', function (ev) {
      if ((ev.key === 'Enter' || ev.key === ' ') && ev.target.classList.contains('mn-pin-head') && !PHONE.matches) { ev.preventDefault(); toggleMin(ev.target.parentNode); }
    });
    // Pro：ドラッグで並べ替え
    var dragId = null;
    dock.addEventListener('dragstart', function (ev) {
      var c = ev.target.closest && ev.target.closest('.mn-pin-card'); if (!c || !isPro()) return;
      dragId = c.getAttribute('data-pin-id'); c.classList.add('is-drag');
      try { ev.dataTransfer.setData('text/plain', dragId); ev.dataTransfer.effectAllowed = 'move'; } catch (e) {}
    });
    dock.addEventListener('dragover', function (ev) { if (dragId) ev.preventDefault(); });
    dock.addEventListener('drop', function (ev) {
      if (!dragId) return; ev.preventDefault();
      var over = ev.target.closest('.mn-pin-card'), p = pins();
      var from = p.findIndex(function (x) { return x.id === dragId; });
      var to = over ? p.findIndex(function (x) { return x.id === over.getAttribute('data-pin-id'); }) : p.length - 1;
      if (from >= 0 && to >= 0 && from !== to) { var it = p.splice(from, 1)[0]; p.splice(to, 0, it); savePins(p); }
      dragId = null;
    });
    dock.addEventListener('dragend', function () { dragId = null; dock.querySelectorAll('.is-drag').forEach(function (c) { c.classList.remove('is-drag'); }); });
  }
  function renderDock() {
    ensureDock();
    var p = pins(), lim = A.limit('pins');
    var count = lim === Infinity ? p.length + ' 件' : p.length + '/' + lim;
    var mins = getJSON('sm_pin_min', {});
    dock.querySelector('.mn-dock-head').innerHTML =
      '<span class="mn-dock-title">📌 ピン留め中 <span class="mn-dock-count">(' + count + ')</span></span>' +
      '<span class="mn-dock-tools">' +
        (p.length > 1 ? '<button type="button" class="mn-textbtn" data-min-all>すべて最小化</button>' : '') +
        '<button type="button" class="mn-textbtn' + (isPro() ? '' : ' is-locked') + '" data-sets>' + (isPro() ? 'セット' : '🔒 セット') + '</button>' +
        '<button type="button" class="mn-iconbtn" data-close-dock aria-label="ドックを閉じる">✕</button></span>';
    var list = dock.querySelector('.mn-dock-list');
    list.innerHTML = p.length ? p.map(function (x) { return cardHtml(x, mins[x.id]); }).join('') :
      '<p class="mn-dock-empty">定義や定理の見出しの <span aria-hidden="true">📌</span> ボタン、または参照プレビューの「📌 固定」で、項目をここに並べておけます。ページを移動しても残ります。</p>' +
      (isPro() ? '' : '<p class="mn-dock-empty">無料プランでは 1 件まで。<button type="button" class="mn-textbtn" data-see-pro>Pro なら無制限</button></p>');
    dockTab.innerHTML = '<span aria-hidden="true">📌</span><span class="mn-dock-tab-n">' + (p.length ? p.length : '') + '</span><span class="mn-dock-tab-text">ピン留め' + (p.length ? ' (' + p.length + ')' : '') + '</span>';
    dockTab.hidden = !p.length && dock.hidden;
  }
  function onDockClick(ev) {
    var card = ev.target.closest('.mn-pin-card'), id = card && card.getAttribute('data-pin-id');
    if (ev.target.closest('[data-close-dock]')) { closeDock(); return; }
    if (ev.target.closest('[data-see-pro]')) { proModal('付箋ドックは Pro プランで無制限に使えます。'); return; }
    if (ev.target.closest('[data-min-all]')) {
      var mins = {}; pins().forEach(function (x) { mins[x.id] = 1; }); setJSON('sm_pin_min', mins);
      dock.querySelectorAll('.mn-pin-card:not(.is-min)').forEach(function (c) { toggleMin(c); }); return;
    }
    if (ev.target.closest('[data-sets]')) { if (isPro()) setsModal(); else proModal('付箋のセット（分野ごとの組み合わせ）の保存は Pro プランの機能です。'); return; }
    if (!card) return;
    if (ev.target.closest('[data-unpin]')) { unpin(id); return; }
    if (ev.target.closest('[data-float]')) { floatCard(id); return; }
    if (ev.target.closest('a')) return;
    if (ev.target.closest('.mn-pin-head')) {
      if (PHONE.matches) return;
      var m = getJSON('sm_pin_min', {}); if (m[id]) delete m[id]; else m[id] = 1; setJSON('sm_pin_min', m);
      toggleMin(card);
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
    renderDock(); cancelOut(dock);
    dock.hidden = false; dockTab.hidden = false; dockTab.setAttribute('aria-expanded', 'true');
    document.documentElement.classList.add('mn-dock-open');
    if (wasHidden) anim(dock, dockFrames(), PHONE.matches ? 340 : 280);
    if (!focusless) { var h = dock.querySelector('.mn-pin-head, [data-close-dock]'); if (h) h.focus(); }
  }
  function closeDock() {
    if (!dock || dock.hidden || dock._out) return;
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
  /* 付箋を画面上に浮かせる（ドラッグで移動。閉じるとドックに戻る） */
  function floatCard(id) {
    var p = pins().find(function (x) { return x.id === id; }); if (!p) return;
    var w = el('<div class="mn-float" role="dialog" aria-label="' + esc(p.kind) + '">' + cardHtml(p, false) + '</div>');
    var n = floats.length;
    w.style.left = Math.max(8, window.innerWidth - 460 - 24 * n) + 'px';
    w.style.top = (90 + 24 * n) + 'px';
    document.body.appendChild(w); floats.push(w);
    anim(w, [{ opacity: 0, transform: 'scale(.96)' }, { opacity: 1, transform: 'none' }], 220);
    w.querySelector('[data-float]').remove();
    w.querySelector('[data-unpin]').setAttribute('title', '閉じる（ドックには残ります）');
    w.addEventListener('click', function (ev) {
      if (ev.target.closest('[data-unpin]')) { w.remove(); floats.splice(floats.indexOf(w), 1); }
    });
    var head = w.querySelector('.mn-pin-head'), sx, sy, ox, oy, moving = false;
    head.addEventListener('pointerdown', function (ev) {
      if (ev.target.closest('.mn-pin-acts')) return;
      moving = true; sx = ev.clientX; sy = ev.clientY; ox = w.offsetLeft; oy = w.offsetTop;
      head.setPointerCapture(ev.pointerId); ev.preventDefault();
    });
    head.addEventListener('pointermove', function (ev) {
      if (!moving) return;
      w.style.left = Math.min(window.innerWidth - 80, Math.max(0, ox + ev.clientX - sx)) + 'px';
      w.style.top = Math.min(window.innerHeight - 40, Math.max(0, oy + ev.clientY - sy)) + 'px';
    });
    head.addEventListener('pointerup', function () { moving = false; });
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
    if (!Object.keys(u).length) return;
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
   * 機能 D：学習ルート（前提の樹形図）
   * ===================================================================== */
  function ancestry(goal, maxNodes) {
    var L = S.index.labels, nodes = {}, order = [], queue = [goal];
    nodes[goal] = true; order.push(goal);
    while (queue.length && order.length < maxNodes) {
      var x = queue.shift();
      prereqs(x).forEach(function (y) {
        if (nodes[y] || !L[y] || !CORE_TYPES[L[y].t] || order.length >= maxNodes) return;
        nodes[y] = true; order.push(y); queue.push(y);
      });
    }
    var level = {};
    function lv(x, stack) {
      if (level[x] != null) return level[x];
      if (stack[x]) return 0;      // 参照の輪（まれ）は切る
      stack[x] = 1;
      var m = -1;
      prereqs(x).forEach(function (y) { if (nodes[y]) m = Math.max(m, lv(y, stack)); });
      delete stack[x];
      return (level[x] = m + 1);
    }
    order.forEach(function (x) { lv(x, {}); });
    var edges = [];
    order.forEach(function (x) { prereqs(x).forEach(function (y) { if (nodes[y]) edges.push([y, x]); }); });
    return { order: order, level: level, edges: edges, truncated: order.length >= maxNodes };
  }
  function openRoadmap(goal) {
    var g = ancestry(goal, 60), u = understood(), pro = isPro();
    var byLv = [];
    g.order.forEach(function (x) { (byLv[g.level[x]] = byLv[g.level[x]] || []).push(x); });
    var done = g.order.filter(function (x) { return u[x]; }).length;
    var pct = Math.round(100 * done / g.order.length);
    var goals = getJSON('sm_goals', []);
    var reg = goals.indexOf(goal) >= 0;
    var head = '<div class="mn-rm-bar">' +
      (pro ? '<div class="mn-rm-progress" title="理解済み ' + done + ' / ' + g.order.length + '"><span style="width:' + pct + '%"></span></div><span class="mn-rm-pct">理解済み ' + done + ' / ' + g.order.length + '（' + pct + '%）</span>' +
        '<button type="button" class="mn-btn mn-btn-quiet" data-goal>' + (reg ? '★ マイ・ロードマップに登録済み' : '☆ この目標をマイ・ロードマップに登録') + '</button>'
        : '<span class="mn-rm-pct mn-muted">🔒 達成率・未習得の強調・目標の登録は Pro プランの機能です。</span><button type="button" class="mn-textbtn" data-see-pro>Pro について</button>') +
      '</div>';
    var rows = byLv.map(function (xs, i) {
      return '<div class="mn-rm-row" data-lv="' + i + '"><div class="mn-rm-step">Step ' + (i + 1) + '</div><div class="mn-rm-nodes">' + xs.map(function (x) {
        var r = S.resolveRef(x), cls = 'mn-rm-node' + (x === goal ? ' is-goal' : '') + (pro && u[x] ? ' is-done' : '') + (pro && !u[x] && x !== goal ? ' is-unmet' : '');
        return '<a class="mn-xref ' + cls + '" data-label="' + esc(x) + '" data-node="' + esc(x) + '" href="' + esc(r.href) + '">' +
          '<span class="mn-rm-k">' + S.renderer.renderInline(refText(x)) + (pro && u[x] ? ' ✓' : '') + '</span>' +
          (r.title ? '<span class="mn-rm-t">' + S.renderer.renderInline(r.title) + '</span>' : '') + '</a>';
      }).join('') + '</div></div>';
    }).join('');
    var m = openModal('学習ルート：' + refText(goal), head +
      '<p class="mn-muted mn-rm-note">この項目に至るまでに使われている定義・定理を、参照関係から自動で並べました（上から順に読めば前提がそろいます）。' +
      (g.truncated ? '項目が多いので、近いものから 60 件までを表示しています。' : '') + '</p>' +
      '<div class="mn-rm-graph"><svg class="mn-rm-edges" aria-hidden="true"></svg>' + rows + '</div>', { wide: true });
    m.addEventListener('click', function (ev) {
      if (ev.target.closest('[data-see-pro]')) { proModal('学習ルートの進捗管理は Pro プランの機能です。'); return; }
      if (ev.target.closest('[data-goal]')) {
        var gs = getJSON('sm_goals', []), i = gs.indexOf(goal);
        if (i >= 0) gs.splice(i, 1); else gs.push(goal);
        setJSON('sm_goals', gs); openRoadmap(goal);
      }
    });
    var draw = function () { drawEdges(m.querySelector('.mn-rm-graph'), g.edges); };
    requestAnimationFrame(draw);
    window.addEventListener('resize', draw, { once: true });
  }
  function drawEdges(graph, edges) {
    if (!graph) return;
    var svg = graph.querySelector('.mn-rm-edges'), base = graph.getBoundingClientRect();
    svg.setAttribute('width', graph.scrollWidth); svg.setAttribute('height', graph.scrollHeight);
    var pos = {};
    graph.querySelectorAll('[data-node]').forEach(function (n) {
      var r = n.getBoundingClientRect();
      pos[n.getAttribute('data-node')] = { x: r.left - base.left + r.width / 2, top: r.top - base.top, bottom: r.bottom - base.top };
    });
    svg.innerHTML = edges.map(function (e) {
      var a = pos[e[0]], b = pos[e[1]]; if (!a || !b) return '';
      var y1 = a.bottom, y2 = b.top, my = (y1 + y2) / 2;
      return '<path d="M' + a.x + ' ' + y1 + ' C ' + a.x + ' ' + my + ', ' + b.x + ' ' + my + ', ' + b.x + ' ' + y2 + '"/>';
    }).join('');
  }

  /* =====================================================================
   * 機能 C：直感イントロ（ページ冒頭）と イメージ動画の枠
   * ===================================================================== */
  function manifestFor() {
    var M = window.SM_LEARN_MANIFEST || {};
    return S && M[S.page] || null;
  }
  function pageLabel() { var h = S.article.querySelector('.mn-page-head h1[id]'); return h ? h.id : ''; }
  function mountIntuition(mf) {
    if (!mf || !mf.intuition) return;
    var I = mf.intuition;
    var slot = el('<section class="mn-intuition-slot mn-learn-x" data-page-id="' + esc(pageLabel()) + '" aria-label="直感イメージ"></section>');
    slot.innerHTML = '<div class="mn-intu-text"><div class="mn-intu-k">💡 直感イメージ<span class="mn-intu-sub">（' + esc(I.question || 'なぜこの概念が必要か？') + '）</span></div>' +
      '<div class="mn-prose">' + S.renderer.renderMarkdown(I.text || '') + '</div></div>' +
      '<div class="mn-intu-video" data-video-state="loading"><div class="mn-video-frame"><div class="mn-video-skeleton"></div></div>' +
      '<div class="mn-video-cap">🎬 ' + esc(I.videoTitle || '1 分イメージ動画') + '</div></div>';
    var head = S.article.querySelector('.mn-page-head');
    head.parentNode.insertBefore(slot, head.nextSibling);
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
        (it.type === 'puzzle' ? '🧩 自分で証明を組み立ててみる' : '🎮 ' + S.renderer.renderInline(it.label || '体感ミニゲーム')) + '</button>' +
        (free ? '<span class="mn-free-badge">無料お試し</span>' : (isPro() ? '' : '<span class="mn-pro-badge">Pro</span>')) +
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
    body.innerHTML = '<div class="mn-ia-skeleton">読み込み中…</div>';
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
  function decorateProofs() {
    S.article.querySelectorAll('.mn-prose details.mn-env[data-env="proof"]').forEach(function (d) {
      var body = d.querySelector(':scope > .mn-env-body'); if (!body) return;
      var steps = [].filter.call(body.children, function (c) { return c.tagName === 'P' && /^Step\s*\d/.test((c.querySelector('strong') || {}).textContent || ''); });
      if (steps.length < 3 || body.querySelector('.mn-stepper')) return;
      var bar = el('<div class="mn-stepper mn-learn-x"><button type="button" class="mn-textbtn" data-stepper>' + (isPro() ? '▶ 1 ステップずつ読む' : '🔒 1 ステップずつ読む（Pro）') + '</button></div>');
      body.insertBefore(bar, body.firstChild);
      bar.addEventListener('click', function (ev) {
        if (!ev.target.closest('[data-stepper]')) return;
        if (!isPro()) { proModal('証明を 1 ステップずつ表示する読み方は Pro プランの機能です。'); return; }
        var all = [].slice.call(body.children).filter(function (c) { return c !== bar; });
        var idx = all.indexOf(steps[0]), shown = 1;
        function apply() {
          var cut = shown < steps.length ? all.indexOf(steps[shown]) : all.length;
          all.forEach(function (c, i) { c.classList.toggle('mn-step-hidden', i >= cut && i > idx - 1 && i >= all.indexOf(steps[0])); });
          bar.innerHTML = shown < steps.length
            ? '<button type="button" class="mn-btn" data-next>次のステップ（' + (shown + 1) + ' / ' + steps.length + '）</button> <button type="button" class="mn-textbtn" data-all>すべて表示</button>'
            : '<span class="mn-muted">全 ' + steps.length + ' ステップを表示しました。</span>';
        }
        apply();
        bar.onclick = function (e2) {
          if (e2.target.closest('[data-next]')) { shown++; apply(); }
          else if (e2.target.closest('[data-all]')) { shown = steps.length; apply(); }
        };
      }, { once: true });
    });
  }

  /* =====================================================================
   * 開発用の Free / Pro 切替（テーマ切替の隣）
   * ===================================================================== */
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
      mountInteractiveSlots(mf);
      decorateProofs();
      if (mf && mf.intuition) withContent(renderVideo);
    }
    renderDock();
  }
  function onReady(ev) {
    S = ev.detail || window.MathSite;
    if (!S || !S.article) return;
    mountPlanSwitch();
    mountAll();
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
      if ((e.key === 'p' || e.key === 'P') && !e.metaKey && !e.ctrlKey && !e.altKey && !typing(e.target) && !modalEl) { e.preventDefault(); toggleDock(); }
    });
    // 別のタブでピン留め・理解済みを変えたときも反映する
    window.addEventListener('storage', function (e) {
      if (e.key === 'sm_pinned_items') { renderDock(); refreshPinButtons(); }
      if (e.key === 'sm_understood') refreshUnderstoodUI();
    });
    A.onChange(function () { closeModal(); floats.forEach(function (w) { w.remove(); }); floats = []; mountAll(); toast('表示を ' + (isPro() ? 'Pro' : 'Free') + ' に切り替えました（開発用）'); });
  }
  window.SMLearn = { pin: pinLabel, openDock: openDock, openRoadmap: openRoadmap, proModal: proModal };
  if (window.MathSite) onReady({ detail: window.MathSite }); else document.addEventListener('mn:ready', onReady);
})();
