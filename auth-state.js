/*
 * auth-state.js — 学習機能のプラン（Free / Pro）の状態
 *
 * 試作段階では、プランは次の順で決まる（サーバー側の認証はまだない）：
 *   1. URL の ?plan=free / ?plan=pro（指定するとブラウザに記憶する）
 *   2. localStorage の sm_plan_tier
 *   3. 既定値 'free'
 * 将来 Supabase Auth と Cloudflare Pages Functions に差し替えるときは、getPlan() と fetchProContent() の
 * 中身だけを「JWT の検証結果」と「サーバーが権限に応じて返す JSON」に置き換える。呼び出し側（learn.js）は変えない。
 *
 * 注意：この試作の判定はブラウザ側だけで行うので、誰でも ?plan=pro で切り替えられる。
 * Pro 用の教材データ（api/pro-content/*.json）も公開リポジトリにある限り誰でも読める。課金の保護にはならない。
 */
(function () {
  'use strict';
  var KEY = 'sm_plan_tier', PLANS = { free: 1, pro: 1 };
  var listeners = [];
  function store(k, v) {
    try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; }
  }
  (function fromUrl() {
    try {
      var p = new URLSearchParams(location.search).get('plan');
      if (p && PLANS[p]) store(KEY, p);
    } catch (e) {}
  })();
  function getPlan() { var p = store(KEY); return PLANS[p] ? p : 'free'; }
  function setPlan(p) {
    if (!PLANS[p] || p === getPlan()) return;
    store(KEY, p);
    document.documentElement.setAttribute('data-plan', p);
    listeners.forEach(function (f) { try { f(p); } catch (e) {} });
  }
  document.documentElement.setAttribute('data-plan', getPlan());
  // 別のタブでプランを切り替えたときも追従する
  window.addEventListener('storage', function (ev) {
    if (ev.key !== KEY) return;
    var p = getPlan();
    document.documentElement.setAttribute('data-plan', p);
    listeners.forEach(function (f) { try { f(p); } catch (e) {} });
  });

  /* 権限ごとの上限（サーバー側の判定に移すときも、この値を返す API にすればよい） */
  var LIMITS = { free: { pins: 1 }, pro: { pins: Infinity } };

  /* Pro 用の教材データを取得する。
   * 試作：静的ファイル api/pro-content/<id>.json を読み、Free のときは access が "pro" の項目の中身を除いて返す
   * （サーバー実装では、この「除く」処理を Pages Functions のミドルウェアが行う）。 */
  function contentId(pageLabel) { return String(pageLabel).replace(/[^A-Za-z0-9_-]+/g, '--'); }
  function fetchProContent(root, pageLabel) {
    var url = root + 'api/pro-content/' + contentId(pageLabel) + '.json';
    return fetch(url, { credentials: 'same-origin' }).then(function (r) {
      if (!r.ok) throw new Error('HTTP ' + r.status);
      return r.json();
    }).then(function (data) {
      if (getPlan() === 'pro') return data;
      var out = JSON.parse(JSON.stringify(data));
      (out.items || []).forEach(function (it) {
        if (it.access === 'pro') { it.locked = true; it.teaser = it.teaser || (it.steps ? { steps: it.steps.slice(0, 1) } : null); delete it.steps; delete it.solution; }
      });
      if (out.video && out.video.access === 'pro') { out.video.locked = true; delete out.video.src; }
      return out;
    });
  }

  window.SMAuth = {
    getPlan: getPlan,
    isPro: function () { return getPlan() === 'pro'; },
    setPlan: setPlan,
    onChange: function (f) { listeners.push(f); },
    limit: function (name) { return (LIMITS[getPlan()] || LIMITS.free)[name]; },
    fetchProContent: fetchProContent,
    contentId: contentId
  };
})();
