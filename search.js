/*
 * search.js — サイト内検索（数式対応）
 *
 * 画面ではキーワード・分野・数式・除外語・完全一致・種類をフォームで指定する。
 * キーワード欄には上級者向けに次の書式も書ける（フォームの条件と併用可）:
 *   "語句"（完全一致）  -語（除外）  $\pi_1$（数式）  type:thm,lem  in:位相  label:set:
 */
(function () {
  'use strict';
  var C = window.MATH_CONFIG, Core = window.MathCore;
  var IDX = window.MATH_INDEX || { pages: [], entries: [], labels: {} };
  var prepared = null;

  var TYPE_WEIGHT = {
    dir: 1.6, page: 1.6, definition: 1.45, theorem: 1.45, proposition: 1.3, lemma: 1.2, corollary: 1.2,
    axiom: 1.4, fact: 1.1, construction: 1.1, example: 1.0, counterexample: 1.05, remark: 0.9,
    table: 1.1, section: 1.0, text: 0.75, proof: 0.6, hypcheck: 0.65, supplement: 0.8, intuition: 0.85, solution: 0.6, problem: 0.9,
    notation: 1.0, exercise: 0.8, summary: 0.8, equation: 1.0
  };

  function typeName(t) {
    if (t === 'dir') return '分類';
    if (t === 'page') return 'ページ';
    if (t === 'text') return '本文';
    if (t === 'section') return '節';
    if (t === 'equation') return '式';
    return (C.ENVIRONMENTS[t] || { name: t }).name;
  }

  /* 文字の正規化：全角半角（NFKC）、カタカナ→ひらがな、（区別しない場合は）小文字化 */
  function kana(s) { return s.replace(/[\u30a1-\u30f6]/g, function (c) { return String.fromCharCode(c.charCodeAt(0) - 0x60); }); }
  function fold(s, cs) {
    s = String(s || '');
    if (s.normalize) s = s.normalize('NFKC');
    if (!cs) s = s.toLowerCase();
    return kana(s).replace(/\s+/g, ' ');
  }
  var CUR_PAGE = (document.body && document.body.getAttribute('data-page')) || '';
  // 読み（ふりがな）→ 用語 の辞書（索引語の読みから作る）
  var READINGS = null;
  function readings() {
    if (READINGS) return READINGS;
    READINGS = [];
    var seen = {};
    IDX.entries.forEach(function (e) {
      if (!e) return;
      (e.ix || []).forEach(function (x) {
        if (!x.reading || seen[x.term]) return;
        seen[x.term] = 1;
        READINGS.push({ r: fold(x.reading), term: x.term });
      });
    });
    return READINGS;
  }
  // 定義語の索引（site-index.js の terms：語 → その語を定義するラベル）を、ラベル → 定義している語（正規化済み）に引き直す
  var DEFINED = null;
  var DEF_TYPES = { definition: 1, construction: 1, axiom: 1 };
  function definedTerms(label) {
    if (!label) return [];
    if (!DEFINED) {
      DEFINED = {};
      var T = IDX.terms || {};
      // 区別の括弧書き（「既約（位相空間）」の「（位相空間）」）は語の一部ではないので除く。除かないと「位相空間」で既約の定義が部分一致してしまう
      function base(t) { return String(t).normalize('NFKC').trim().replace(/\s*[（(][^（）()]*[）)]\s*$/, ''); }
      Object.keys(T).forEach(function (term) {
        var ft = fold(base(term));
        (T[term] || []).forEach(function (l) { var L = DEFINED[l] || (DEFINED[l] = []); if (ft && L.indexOf(ft) < 0) L.push(ft); });
      });
      // 定義語の索引は用語リンク用に 1 文字の語（群・環・体）を除いているので、同じ元（定義の環境の索引語）から補う
      (IDX.entries || []).forEach(function (e) {
        if (!e || !e.l || !DEF_TYPES[e.t]) return;
        (e.ix || []).forEach(function (x) {
          var t = String(x.term || '').normalize('NFKC').trim();
          if (!t || /[$\\{}^_]/.test(t)) return;
          var L = DEFINED[e.l] || (DEFINED[e.l] = []), fu = fold(base(t));
          if (fu && L.indexOf(fu) < 0) L.push(fu);
        });
      });
    }
    return DEFINED[label] || [];
  }
  function loose(x) { return String(x || '').replace(/的/g, ''); }
  function isKanaOnly(w) { return /^[\u3041-\u309f\u30fcー]+$/.test(w); }

  // 項目一つ分の検索用の正規化（本文が後から届いた項目は、届いたときにこれで作り直す）
  var whereOf = {};   // 所在の文字列はページごとに同じなので、ページごとに 1 回だけ正規化する
  function pageWhere(p, pg) {
    if (!(p in whereOf)) {
      var crumbs = (pg.crumbs || []).map(function (c) { return c.title; }).join(' ');
      whereOf[p] = Core.normalizeText(crumbs + ' ' + (pg.subj || '') + ' ' + (pg.path || '') + ' ' + (pg.title || ''));
    }
    return whereOf[p];
  }
  function prepRow(e, i) {
    var pg = IDX.pages[e.p] || {};
    var sb = Core.splitForSearch(e.x || '');
    var st = Core.splitForSearch(e.ti || '');
    var ni = (e.ix || []).map(function (x) { return fold(x.term + (x.reading ? ' ' + x.reading : '')); });
    return {
      i: i, e: e, pg: pg,
      rawT: st.text + ' ' + (e.k || ''), rawB: sb.text,
      rawI: (e.ix || []).map(function (x) { return x.term + (x.reading ? ' ' + x.reading : ''); }),
      nt: fold(st.text + ' ' + (e.k || '')),
      ntt: fold(st.text).trim().replace(/[（(][^）)]*[）)]$/, '').trim(),   // 題だけ（末尾の括弧書きを除く）。完全一致の判定用
      ni: ni, nis: splitIx(ni),
      nl: (e.l || '').toLowerCase(),
      nb: fold(sb.text),
      ntm: st.maths.map(norm).join('\u0001'),
      nm: sb.maths.map(norm).join('\u0001'),
      where: pageWhere(e.p, pg),
      pt: fold(pg.title || ''), rawP: pg.title || ''
    };
  }
  var prepPos = {};
  function updatePrepared(i) {
    if (!prepared || !IDX.entries[i]) return;
    var row = prepRow(IDX.entries[i], i);
    if (i in prepPos) prepared[prepPos[i]] = row; else { prepPos[i] = prepared.length; prepared.push(row); }
  }
  // 検索用に正規化した索引（索引の読み込み時に 1 回だけ作り、以後の検索では使い回す）
  function prepare() {
    if (prepared) return prepared;
    var t0 = window.performance ? performance.now() : 0;
    prepared = []; prepPos = {};
    IDX.entries.forEach(function (e, i) { if (!e) return; prepPos[i] = prepared.length; prepared.push(prepRow(e, i)); });
    // 式ラベルもエントリとして追加
    Object.keys(IDX.labels).forEach(function (l) {
      var L = IDX.labels[l];
      if (L.t !== 'equation') return;
      var pg = IDX.pages[L.p] || {};
      prepared.push({
        i: -1, e: { p: L.p, t: 'equation', n: L.n, l: l, ti: '', k: '', x: '$$' + L.tex + '$$', a: l }, pg: pg,
        nt: '', ni: [], nis: [], rawT: '', rawB: '', rawI: [], rawP: pg.title || '', nl: l.toLowerCase(), nb: '', ntm: '', nm: norm(L.tex),
        where: pageWhere(L.p, pg),
        pt: fold(pg.title || '')
      });
    });
    // 分類（大分野・分野・系列のフォルダ）もエントリとして追加する（2026-10-23 ユーザー指示：分類名で引いてその概要ページへ飛べるように）。
    // 題は名前、英語名と別名（_meta.json の aliases）は索引語の扱い、本文は説明文、所在は祖先の名前。
    (function walk(n, anc) {
      (n.c || []).forEach(function (c) {
        if (c.k !== 'd' || c.x) return;
        var names = [c.en || ''].concat(c.al || []).filter(Boolean);
        var pg = { path: c.path + 'index.html', title: c.title, subj: anc.join(' › '), crumbs: anc.map(function (t) { return { title: t }; }), sec: '' };
        var nal = [fold(c.title)].concat(names.map(function (x) { return fold(x); }));
        prepared.push({
          i: -2, e: { p: -1, t: 'dir', n: '', l: '', ti: c.title, en: c.en || '', k: names.join(' '), x: c.d || '', a: '', ix: [], depth: anc.length }, pg: pg,
          nt: fold(c.title + ' ' + names.join(' ')), ntt: fold(c.title).trim(), nal: nal,
          ni: nal.slice(1), nis: splitIx(nal.slice(1)), rawT: c.title + ' ' + names.join(' '), rawB: c.d || '', rawI: names, rawP: c.title,
          nl: '', nb: fold(c.d || ''), ntm: '', nm: '',
          where: Core.normalizeText(anc.join(' ') + ' ' + c.path + ' ' + c.title), pt: fold(c.title)
        });
        walk(c, anc.concat([c.title]));
      });
    })(IDX.tree || { c: [] }, []);
    if (window.performance && window.console) console.debug('[search] 索引の準備 ' + Math.round(performance.now() - t0) + ' ms（' + prepared.length + ' 項目）');
    return prepared;
  }
  // 索引語「用語 よみ」を、用語の部分とよみの部分に分けておく（scoreWord で検索のたびに split しないため）
  function splitIx(ni) {
    return ni.map(function (x) { var sp = x.split(' '); return [sp[0], sp.slice(1).join(' ')]; });
  }
  // TeX の正規化は同じ式に何度もかかる（結果の抜粋など）ので、結果を覚えておく
  var NORM_MEMO = Object.create(null);
  function norm(t) {
    t = String(t || '');
    var v = NORM_MEMO[t];
    if (v === undefined) v = NORM_MEMO[t] = Core.normalizeTex(t, C.TEX_SYNONYMS, C.KATEX_MACROS);
    return v;
  }

  /* ---------- クエリ解析 ---------- */
  // ひらがな（またはカタカナ）だけの語は、読みが一致する索引語でも探す（例：べきしゅうごう → 冪集合）
  function addAlts(t) {
    if (t.kind !== 'text' || !t.txt || !isKanaOnly(t.txt)) return;
    var alts = [], exact = [];
    readings().forEach(function (R) {
      if (R.r === t.txt || (t.txt.length >= 3 && R.r.indexOf(t.txt) === 0)) alts.push(R.term);
      if (R.r === t.txt) exact.push(R.term);   // 読みが検索語そのものの用語（完全一致の判定に使う。前方一致の別表記は使わない）
    });
    if (alts.length) t.alts = alts;
    if (exact.length) t.exactAlts = exact;
  }
  function parseQuery(q) {
    var out = { terms: [], neg: [], types: null, where: [], label: null, raw: q };
    var re = /(-?)(?:"([^"]+)"|\$([^$]+)\$|(\S+))/g, m;
    while ((m = re.exec(q))) {
      var neg = !!m[1], phrase = m[2], tex = m[3], word = m[4];
      if (word && !neg) {
        var fm = /^(type|t|in|label|l):(.*)$/i.exec(word);
        if (fm) {
          var key = fm[1].toLowerCase(), val = fm[2];
          if (key === 'type' || key === 't') {
            out.types = (out.types || []).concat(val.split(/[,|]/).filter(Boolean).map(function (v) {
              v = v.toLowerCase(); return C.TYPE_ALIASES[v] || C.TYPE_ALIASES[fm[2]] || v;
            }));
            if (out.types.indexOf('theorem') >= 0 && val.indexOf('!') < 0) { /* 定理のみ */ }
          } else if (key === 'in') out.where.push(Core.normalizeText(val));
          else out.label = val.toLowerCase();
          continue;
        }
      }
      var t;
      if (tex != null) t = { kind: 'tex', s: tex, tex: norm(tex) };
      else if (phrase != null) t = { kind: 'text', s: phrase, txt: fold(phrase), txtC: fold(phrase, true) };
      else {
        var texlike = /[\\^_{}]/.test(word);
        t = { kind: texlike ? 'tex' : 'text', s: word, txt: fold(word), txtC: fold(word, true), tex: norm(word) };
      }
      addAlts(t);
      (neg ? out.neg : out.terms).push(t);
    }
    return out;
  }

  function fieldsCS(r) {
    if (!r._cs) {
      var ni = r.rawI.map(function (x) { return fold(x, true); });
      r._cs = { nt: fold(r.rawT, true), nb: fold(r.rawB, true), ni: ni, nis: splitIx(ni), pt: fold(r.rawP, true) };
    }
    return r._cs;
  }
  function countOcc(hay, needle) {
    if (!needle) return 0;
    var c = 0, i = hay.indexOf(needle);
    while (i >= 0 && c < 20) { c++; i = hay.indexOf(needle, i + needle.length); }
    return c;
  }

  function scoreTerm(r, t) {
    var s = 0;
    if (t.kind === 'tex') {
      if (r.ntm.indexOf(t.tex) >= 0) s += 9;
      var c = countOcc(r.nm, t.tex);
      if (c) s += 4 + Math.log(1 + c);
      if (t.txt && !/[\\^_{}]/.test(t.s)) { // 英単語を数式扱いした場合の保険
        if (r.nt.indexOf(t.txt) >= 0) s += 8;
        if (r.nb.indexOf(t.txt) >= 0) s += 1;
      }
      return s;
    }
    var cs = !!(t.cs);
    var best = scoreWord(r, cs ? t.txtC : t.txt, cs);
    // 読みから得た別表記は、項目ごとに正規化し直さないよう、語ごとに 1 回だけ正規化しておく
    var af = cs ? (t._altsC || (t._altsC = (t.alts || []).map(function (a) { return fold(a, true); })))
                : (t._alts || (t._alts = (t.alts || []).map(function (a) { return fold(a); })));
    for (var k = 0; k < af.length; k++) best = Math.max(best, 0.95 * scoreWord(r, af[k], cs));
    return best;
  }
  function scoreWord(r, w, cs) {
    if (!w) return 0;
    var s = 0, F = cs ? fieldsCS(r) : r;
    // 索引語（用語索引に載っている語）との一致を重く見る
    for (var k = 0; k < F.ni.length; k++) {
      if (F.ni[k] === w || F.nis[k][0] === w || F.nis[k][1] === w) { s += 14; break; }
      if (F.ni[k].indexOf(w) >= 0) { s += 7; break; }
    }
    if (F.nt.indexOf(w) >= 0) { s += 10; if (F.nt.trim() === w) s += 6; else if (F.nt.indexOf(w) === 0) s += 2; }
    if (!cs && r.nl.indexOf(w) >= 0) s += 6;
    var cb = countOcc(F.nb, w);
    if (cb) s += 1.5 + Math.log(1 + cb);
    if (F.pt.indexOf(w) >= 0) s += 1.2;
    if (/^[a-z]{2,}$/.test(w) && (r.nm.indexOf('\\' + w) >= 0 || r.ntm.indexOf(w) >= 0)) s += 1.5;
    // 「的」の有無を区別しない一致（「代数位相幾何」で「代数的位相幾何学」を引く。2026-10-23 ユーザー指示）。題・索引語・ページ名だけで見る
    if (!s && !cs) {
      var wl = loose(w);
      if (wl) {
        if (r.lz === undefined) r.lz = loose(r.nt + '\u0001' + (r.ni || []).join('\u0001') + '\u0001' + (r.pt || ''));
        if (r.lz.indexOf(wl) >= 0) s += 8;
      }
    }
    return s;
  }

  // 一致する場所（2026-10-23 ユーザー指示）：'title' は題・名前・索引語・キーワードで、'body' は本文で、すべての語が一致するもの
  function locOk(r, pq) {
    var words = pq.terms.filter(function (t) { return t.kind === 'text' && t.txt; });
    if (!words.length) return true;
    return words.every(function (t) {
      var cands = [t.txt].concat((t.alts || []).map(function (a) { return fold(a); }));
      return cands.some(function (w) {
        var wl = loose(w);
        if (pq.loc === 'body') return r.nb.indexOf(w) >= 0;
        if (pq.loc === 'stmt') return !!STMT[r.e.t] && (r.nb.indexOf(w) >= 0 || (r.nt || '').indexOf(w) >= 0 || (wl && loose(r.nb + r.nt).indexOf(wl) >= 0));
        var names = [r.nt, r.pt || ''].concat(r.ni || [], r.nal || []);
        return names.some(function (x) { return x && (x.indexOf(w) >= 0 || (wl && loose(x).indexOf(wl) >= 0)); });
      });
    });
  }
  var STMT = { definition: 1, theorem: 1, proposition: 1, lemma: 1, corollary: 1, fact: 1, axiom: 1, counterexample: 1, construction: 1 };
  // 証明のステップの主張（【主張：…】）を取り出す（正規化して行に覚えておく）
  function stepClaims(r) {
    if (r._claims) return r._claims;
    var out = [], re = /【主張：([\s\S]*?)】/g, m, x = r.e.x || '';
    while ((m = re.exec(x))) out.push(fold(Core.stripMarkdown(m[1])));
    return (r._claims = out);
  }
  var genericCache = null, genericN = -1;
  function genericSections(rows) {
    if (genericCache && genericN === rows.length) return genericCache;
    var cnt = {};
    rows.forEach(function (r) { if (r.e.t === 'section' && r.ntt) cnt[r.ntt] = (cnt[r.ntt] || 0) + 1; });
    genericCache = {}; genericN = rows.length;
    Object.keys(cnt).forEach(function (k) { if (cnt[k] >= 5) genericCache[k] = 1; });
    return genericCache;
  }
  function filterOk(r, pq) {
    if (pq.types && pq.types.indexOf(rowType(r)) < 0) return false;
    for (var i = 0; i < pq.where.length; i++) if (r.where.indexOf(pq.where[i]) < 0) return false;
    if (pq.dirs && pq.dirs.length && !pq.dirs.some(function (d) { return (r.pg.path || '').indexOf(d) === 0; })) return false;
    if (pq.label && r.nl.indexOf(pq.label) !== 0) return false;
    for (var j = 0; j < pq.neg.length; j++) if (scoreTerm(r, pq.neg[j]) > 0) return false;
    return true;
  }

  function bigrams(s) {
    var out = {}; s = s.replace(/\s+/g, '');
    for (var i = 0; i < s.length - 1; i++) out[s.substr(i, 2)] = 1;
    return out;
  }
  function dice(a, b) {
    var ka = Object.keys(a), kb = Object.keys(b); if (!ka.length || !kb.length) return 0;
    var inter = 0; ka.forEach(function (k) { if (b[k]) inter++; });
    return 2 * inter / (ka.length + kb.length);
  }

  /*
   * search(query, opts)
   *   query: 文字列（上級者向けの書式も可）または
   *          { q: キーワード, exact: 完全一致, tex: 数式, exclude: 除外語, types: [...], dirs: [フォルダのパス...] }
   */
  function buildQuery(query) {
    if (typeof query === 'string' || query == null) return parseQuery(query || '');
    var q = query.q || '';
    var pq = query.exact && q.trim() ? parseQuery('"' + q.replace(/"/g, '') + '"') : parseQuery(q);
    if (query.tex && query.tex.trim()) {
      var t = query.tex.trim().replace(/^\$+|\$+$/g, '');
      pq.terms.push({ kind: 'tex', s: t, tex: norm(t) });
    }
    (query.exclude || '').split(/[\s　]+/).filter(Boolean).forEach(function (w) {
      pq.neg.push({ kind: /[\\^_{}]/.test(w) ? 'tex' : 'text', s: w, txt: fold(w), txtC: fold(w, true), tex: norm(w) });
    });
    if (query.types && query.types.length) {
      var ts = query.types.slice(), sel = { def: ts.indexOf('termdef') >= 0, use: ts.indexOf('termuse') >= 0 };
      ts = ts.filter(function (t) { return t !== 'termdef' && t !== 'termuse'; });
      // 「語の定義」「語を使う定義」はどちらも定義の環境（定義・構成・公理）を対象にし、段を決めたあとで振り分ける
      if (sel.def || sel.use) { ts = ts.concat(['definition', 'construction', 'axiom']); pq.defSel = sel; }
      pq.types = (pq.types || []).concat(ts);
    }
    if (query.dirs && query.dirs.length) pq.dirs = expandDirs(query.dirs);
    if (query.mode === 'any') pq.mode = 'any';
    if (query.loc === 'title' || query.loc === 'body' || query.loc === 'stmt') pq.loc = query.loc;
    if (query.cs) {
      pq.cs = true;
      pq.terms.concat(pq.neg).forEach(function (t) { t.cs = true; });
    }
    return pq;
  }

  function search(query, opts) {
    opts = opts || {};
    var pq = buildQuery(query);
    var rows = prepare();
    var hasFilter = pq.types || pq.where.length || pq.label || (pq.dirs && pq.dirs.length);
    if (!pq.terms.length && !hasFilter) return { results: [], pq: pq, fuzzy: false };
    var res = [];
    var anyMode = pq.mode === 'any';
    rows.forEach(function (r) {
      if (!filterOk(r, pq)) return;
      if (pq.loc && !locOk(r, pq)) return;
      var total = 0, hits = 0;
      for (var i = 0; i < pq.terms.length; i++) {
        var s = scoreTerm(r, pq.terms[i]);
        if (s <= 0) { if (anyMode) continue; return; }
        total += s; hits++;
      }
      if (anyMode && pq.terms.length && !hits) return;
      if (anyMode) total *= 1 + hits;   // 多くの語に一致するものを上に
      if (!pq.terms.length) total = 1;
      if (r.e.l) total += 0.3;
      total *= TYPE_WEIGHT[r.e.t] || 1;
      res.push({ r: r, s: total });
    });
    var fuzzy = false;
    if (!res.length && pq.terms.length) {
      // あいまい検索（文字 bigram の Dice 係数）
      fuzzy = true;
      var qb = bigrams(pq.terms.map(function (t) { return t.txt || t.s; }).join(''));
      rows.forEach(function (r) {
        if (!filterOk(r, pq)) return;
        var d = Math.max(dice(qb, bigrams(r.nt)), 0.8 * dice(qb, bigrams(r.nl)));
        if (d > 0.34) res.push({ r: r, s: d * (TYPE_WEIGHT[r.e.t] || 1) });
      });
    }
    // 検索語にぴったり一致する項目（題か索引語が検索語そのもの）を一番上に、次に現在のページの結果（2026-10-22 ユーザー指示）
    var words = pq.terms.filter(function (t) { return t.kind === 'text' && t.txt; });
    var whole = words.map(function (t) { return t.txt; }).join('');
    var wholeAlts = words.length === 1 ? (words[0].exactAlts || []).map(function (a) { return fold(a); }) : [];
    function exactness(r) {
      if (!whole) return 0;
      var cand = [whole].concat(wholeAlts);
      for (var i = 0; i < cand.length; i++) {
        var w = cand[i];
        if (r.ntt === w) return 2;
      }
      for (var i2 = 0; i2 < cand.length; i2++) {
        for (var k = 0; k < (r.nis || []).length; k++) if (r.nis[k][0] === cand[i2] || r.ni[k] === cand[i2]) return 1;   // 索引語だけが一致
      }
      return 0;
    }
    // 並べ方（2026-10-23 ユーザー指示）：
    //   5 その語をぴったり定義している箇所（定義語の索引 IDX.terms で、検索語そのものを定義しているラベル）
    //   4 定理・命題・補題・系などで、名前（題）が検索語を含むもの（名前が完全に一致・短いものが先）
    //   3 分類（大分野・分野・系列）とページで、名前（分類は英語名・別名も）が検索語を含むもの
    //   2 検索語を含む語を定義している箇所（定義語の索引で部分一致）
    //   1 それ以外（本文などだけに出てくるもの）
    // 定義の題は定義する語そのものでないことが多いので、定義の判定には題ではなく定義語の索引を使う。
    var wordCands = words.map(function (t) { return [t.txt].concat((t.alts || []).map(function (a) { return fold(a); })); });
    function hasAll(strs) {
      return wordCands.length > 0 && wordCands.every(function (c) { return c.some(function (w) { var wl = loose(w); return strs.some(function (x) { return x.indexOf(w) >= 0 || (wl && loose(x).indexOf(wl) >= 0); }); }); });
    }
    function hasAny(strs) {
      return wordCands.some(function (c) { return c.some(function (w) { var wl = loose(w); return strs.some(function (x) { return x.indexOf(w) >= 0 || (wl && loose(x).indexOf(wl) >= 0); }); }); });
    }
    var exactCands = [whole].concat(wholeAlts);
    var NAMED = { theorem: 1, proposition: 1, lemma: 1, corollary: 1, fact: 1, axiom: 1, counterexample: 1, construction: 1 };
    // 定型の節（「記法と定義の確認」「問題」など、多くのページにある同じ名前の節）は見出しとして数えない
    var genericSec = genericSections(rows);
    function closeness(names) {
      var nm = names.filter(function (n) { return hasAll([n]); });
      if (!nm.length || !whole) return 0;
      return Math.round(100 * loose(whole).length / Math.min.apply(null, nm.map(function (n) { return loose(n).length || 1; })));
    }
    res.forEach(function (x) {
      var r = x.r, t = r.e.t, dt = definedTerms(r.e.l);
      x.here = !!CUR_PAGE && r.pg.path === CUR_PAGE;
      x.ex = 0; x.th = 0; x.cl = 0; x.gr = 0;
      x.st = STMT[t] ? 1 : 0;   // 主張（定義・定理など）での一致。本文などの段で、証明・補足だけの一致より先に出す
      if (fuzzy || !wordCands.length) { x.tier = 0; return; }
      // 5 語の定義：その語（完全一致）か、その語を含む語（部分一致）を定義している箇所。完全一致が先。その語を使うだけの定義はここに入らない
      if (dt.length && exactCands.some(function (w) { return dt.indexOf(w) >= 0 || dt.some(function (d) { return loose(d) === loose(w) && loose(w); }); })) { x.tier = 5; x.ex = 1; return; }
      // 部分一致は、一つの定義語の中にすべての語がそろっているときだけ（語が別々の定義語に散っているものは数えない。語の順番は問わない）
      if (dt.length && dt.some(function (d) { return hasAll([d]); })) { x.tier = 5; x.cl = closeness(dt.filter(function (d) { return hasAll([d]); })); return; }
      // 「いずれかを含む」では語ごとに定義を引く（「群 環」なら群の定義と環の定義）
      if (anyMode && dt.length && wordCands.some(function (c) { return c.some(function (w) { return dt.some(function (d) { return d === w || (loose(w) && loose(d) === loose(w)); }); }); })) { x.tier = 5; x.ex = 1; return; }
      if (anyMode && dt.length && dt.some(function (d) { return hasAny([d]); })) { x.tier = 5; x.cl = closeness(dt.filter(function (d) { return hasAny([d]); })); return; }
      if (NAMED[t] && hasAll([r.ntt || ''])) {
        x.tier = 4; x.ex = exactCands.indexOf(r.ntt) >= 0 ? 1 : 0; x.cl = closeness([r.ntt]); return;
      }
      if (t === 'dir' || t === 'page' || (t === 'section' && !genericSec[r.ntt])) {
        var names = t === 'dir' ? r.nal : t === 'page' ? [r.pt || ''] : [r.ntt || ''];
        x.gr = t === 'dir' ? (r.e.depth || 0) : t === 'page' ? 3 : 4;   // 粗い順（大分野・分野・系列 → 記事 → 節）
        if (hasAll(names)) {
          x.tier = 3; x.ex = exactCands.some(function (w) { return names.some(function (n) { return n === w || (loose(w) && loose(n) === loose(w)); }); }) ? 1 : 0;
          x.th = hasAll([names[0]]) ? 1 : 0;   // 名前そのもの（別名・英語名でなく）が含む
          x.cl = closeness(x.th ? [names[0]] : names);
          return;
        }
        x.tier = 1; return;
      }
      // 2 語を含む主張：定義・定理などの本文（主張）や、証明のステップの【主張：…】に語が出てくるもの
      if (STMT[t] && hasAll([r.nb || '', r.ntt || ''])) { x.tier = 2; return; }
      if (t === 'proof' && hasAll(stepClaims(r))) { x.tier = 2; return; }
      x.tier = 1;
    });
    if (pq.defSel && !(pq.defSel.def && pq.defSel.use) && wordCands.length && !fuzzy) {
      // 語の定義だけ／語を使う定義だけ（定義の環境で、語の定義の段（5）に入ったかどうか）。他の種類の行はそのまま
      res = res.filter(function (x) {
        if (!DEF_TYPES[x.r.e.t]) return true;
        return x.tier === 5 ? pq.defSel.def : pq.defSel.use;
      });
    }
    res.sort(function (a, b) { return (b.tier - a.tier) || (b.ex - a.ex) || (b.th - a.th) || (b.cl - a.cl) || (a.gr - b.gr) || (b.st - a.st) || (b.here - a.here) || (b.s - a.s) || (a.r.e.p - b.r.e.p); });
    return { results: res.slice(0, opts.limit || 60), total: res.length, pq: pq, fuzzy: fuzzy };
  }

  /* ---------- 結果の描画 ---------- */
  var katexOpts = { throwOnError: false, macros: Object.assign({}, C.KATEX_MACROS), strict: 'ignore' };
  function tex(s, display) {
    try { return katex.renderToString(s, Object.assign({ displayMode: !!display }, katexOpts)); }
    catch (e) { return Core.escapeHtml(s); }
  }
  // 検索語を（大文字小文字の設定・ひらがな/カタカナの違い・読みの別表記を考慮して）探す正規表現
  function termRegex(terms, cs) {
    var parts = [];
    terms.forEach(function (w) {
      if (!w) return;
      var p = '';
      for (var i = 0; i < w.length; i++) {
        var c = w.charAt(i), code = w.charCodeAt(i);
        if (code >= 0x3041 && code <= 0x3096) p += '[' + c + String.fromCharCode(code + 0x60) + ']';
        else if (code >= 0x30a1 && code <= 0x30f6) p += '[' + String.fromCharCode(code - 0x60) + c + ']';
        else p += c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      }
      parts.push(p);
    });
    if (!parts.length) return null;
    parts.sort(function (a, b) { return b.length - a.length; });
    return new RegExp('(' + parts.join('|') + ')', cs ? 'g' : 'gi');
  }
  function textTerms(pq) {
    var out = [];
    pq.terms.forEach(function (t) {
      if (t.kind !== 'text' || !t.s) return;
      out.push(t.s.normalize ? t.s.normalize('NFKC') : t.s);
      (t.alts || []).forEach(function (a) { out.push(a); });
    });
    return out;
  }
  function highlight(text, pq) {
    var html = Core.escapeHtml(text);
    var re = termRegex(textTerms(pq).map(Core.escapeHtml), !!pq.cs);
    return re ? html.replace(re, '<mark>$1</mark>') : html;
  }
  function renderInlineTitle(s, pq) {
    var ex = Core.extractMath(s || '');
    var parts = ex.text.split(/(\d+)/);
    var html = '';
    for (var i = 0; i < parts.length; i++) {
      if (i % 2 === 0) html += highlight(parts[i].replace(/\d+/g, '…'), pq);
      else html += tex(ex.maths[+parts[i]].tex, false);
    }
    return html;
  }

  function refText(label) {
    var L = IDX.labels[label];
    if (!L) return '??';
    if (L.t === 'equation') return '(' + L.n + ')';
    if (L.t === 'section' || L.t === 'page') return L.ti;
    return typeName(L.t) + ' ' + L.n;
  }

  function snippet(r, pq, budget) {
    budget = budget || 170;
    var ex = Core.extractMath(r.e.x || '');
    var text = Core.stripMarkdown(ex.text);
    var toks = [], re = /(\d+)|(\d+)/g, last = 0, m;
    while ((m = re.exec(text))) {
      if (m.index > last) toks.push({ k: 't', s: text.slice(last, m.index) });
      if (m[1] != null) toks.push({ k: 'm', m: ex.maths[+m[1]] });
      else toks.push({ k: 't', s: refText(ex.refs[+m[2]].label) });
      last = m.index + m[0].length;
    }
    if (last < text.length) toks.push({ k: 't', s: text.slice(last) });
    toks.forEach(function (t) { if (t.k === 't') t.s = t.s.replace(/\s+/g, ' '); });
    // 最初にヒットしたトークンを探す
    var hit = 0, found = false;
    for (var i = 0; i < toks.length && !found; i++) {
      var tk = toks[i];
      for (var j = 0; j < pq.terms.length; j++) {
        var t = pq.terms[j];
        if (tk.k === 't' && t.txt && (fold(tk.s).indexOf(t.txt) >= 0 || (t.alts || []).some(function (a) { return fold(tk.s).indexOf(fold(a)) >= 0; }))) { hit = i; found = true; break; }
        if (tk.k === 'm' && t.tex && norm(tk.m.tex).indexOf(t.tex) >= 0) { hit = i; found = true; break; }
      }
    }
    function len(t) { return t.k === 't' ? t.s.length : Math.min(60, t.m.tex.length * 0.5); }
    var from = hit, to = hit, used = len(toks[hit] || { k: 't', s: '' });
    while (used < budget && (from > 0 || to < toks.length - 1)) {
      if (from > 0 && (hit - from) < 2) { from--; used += len(toks[from]); }
      else if (to < toks.length - 1) { to++; used += len(toks[to]); }
      else if (from > 0) { from--; used += len(toks[from]); }
    }
    var html = from > 0 ? '… ' : '';
    for (var k = from; k <= to && k < toks.length; k++) {
      var tk2 = toks[k];
      if (tk2.k === 't') {
        var s = tk2.s;
        if (k === hit && s.length > budget) {
          var t0 = pq.terms[0] && pq.terms[0].txt, pos = t0 ? Math.max(0, fold(s).indexOf(t0)) : 0;
          var st = Math.max(0, pos - 50); s = (st > 0 ? '…' : '') + s.slice(st, st + budget);
        } else if (k !== hit && s.length > 90) s = (k < hit ? '…' + s.slice(-80) : s.slice(0, 80) + '…');
        html += highlight(s, pq);
      } else {
        var isHit = pq.terms.some(function (t) { return t.tex && norm(tk2.m.tex).indexOf(t.tex) >= 0; });
        var mt = tk2.m.tex.replace(/\\tag\{[^}]*\}/g, '');
        html += '<span class="mn-snip-math' + (isHit ? ' mn-hit' : '') + '">' + tex(mt.length > 260 ? mt.slice(0, 0) + '\\cdots' : mt, false) + '</span>';
      }
    }
    if (to < toks.length - 1) html += ' …';
    return html;
  }

  function resultHref(r, root) {
    var e = r.e, pg = r.pg;
    var a = e.a || e.l || '';
    return root + pg.path + (a ? '#' + a : '');
  }

  function renderResult(item, pq, root, active) {
    var r = item.r, e = r.e, pg = r.pg;
    var badge = typeName(e.t) + (e.n ? ' ' + e.n : '');
    var title;
    if (e.t === 'dir') {
      badge = ['大分野', '分野', '系列'][e.depth] || '分類';
      title = renderInlineTitle(e.ti, pq) + (e.en ? ' <span class="mn-result-en">' + highlight(e.en, pq) + '</span>' : '');
    }
    else if (e.t === 'page') title = '§' + pg.sec + ' ' + renderInlineTitle(pg.title, pq);
    else if ((C.ENVIRONMENTS[e.t] || {}).attached && !e.ti) {
      title = e.of ? typeName(e.of.t) + ' ' + e.of.n + (e.of.ti ? '（' + renderInlineTitle(e.of.ti, pq) + '）' : '') + ' の' + typeName(e.t) : typeName(e.t);
    } else title = e.ti ? renderInlineTitle(e.ti, pq) : (e.h ? renderInlineTitle(e.h, pq) : '');
    var crumb = e.t === 'dir' ? Core.escapeHtml(pg.subj || 'トップ') : Core.escapeHtml(pg.subj || '') + ' › §' + pg.sec + ' ' + renderInlineTitle(pg.title || '', { terms: [] });
    return '<a class="mn-result' + (active ? ' is-active' : '') + '" href="' + Core.escapeHtml(resultHref(r, root)) + '">' +
      '<div class="mn-result-top"><span class="mn-badge" data-type="' + e.t + '">' + Core.escapeHtml(badge) + '</span>' +
      '<span class="mn-result-title"' + (e.l && e.t !== 'page' && e.t !== 'section' && IDX.labels[e.l] ? ' data-pv-label="' + Core.escapeHtml(e.l) + '"' : '') + '>' + title + '</span>' + (item.here ? '<span class="mn-here">このページ</span>' : '') +
      (e.l ? '<span class="mn-result-label">' + Core.escapeHtml(e.l) + '</span>' : '') + '</div>' +
      '<div class="mn-result-where">' + crumb + '</div>' +
      '<div class="mn-result-snip">' + snippet(r, pq) + '</div></a>';
  }

  /* ---------- 検索フォーム（モーダルと検索ページで共通） ---------- */
  // 種類の絞り込み（2026-10-23 ユーザー指示：定理・命題・補題・系はまとめる。分類（大分野・分野・系列）も選べる）。値はカンマ区切りで複数の種類を表す
  // 並びは結果の段に合わせる（2026-10-23 ユーザー指示）。定義は「語の定義」（検索語を定義しているもの）と「語を使う定義」（検索語を使うだけのもの）に分ける
  var TYPE_CHIPS = [
    ['termdef', '語の定義'], ['termuse', '語を使う定義'], ['theorem,proposition,lemma,corollary', '定理・命題・補題・系'],
    ['bigfield,field,series,page,section', '見出し（分類・記事・節）'],
    ['proof', '証明'], ['example', '例'], ['supplement,remark,intuition', '補足・注意'], ['counterexample', '反例'], ['problem', '問題'],
    ['equation', '式']
  ];
  var DIR_TYPES = ['bigfield', 'field', 'series'];   // 分類の行の種類（深さ 0・1・2）
  function rowType(r) { return r.e.t === 'dir' ? (DIR_TYPES[r.e.depth] || 'series') : r.e.t; }
  function root() { return document.body.getAttribute('data-root') || ''; }

  /* ---------- 検索用の本文（search-index.js）の遅延読み込み ---------- */
  // site-index.js には本文を入れず、検索を開いたとき（参照のプレビューで本文が要るときも）に初めて読み込む（2026-10-22 ユーザー指示で二段に分けた）。
  //   search-index.js：本文以外（題・索引語・読み・キーワード）。これが届いたら検索できる（headReady）。
  //   search-body/<鍵>.js：分野ごとの本文と、題のない項目（証明・解答など）。並行して読み込み、届いた分から索引に加える。
  //   MathEntries.load(cb) は従来どおり、本文がすべて届いてから cb を呼ぶ（参照のプレビュー・付箋用）。
  var headState = (IDX.entries && IDX.entries.length) ? 2 : 0, entriesState = headState, headWaiters = [], entriesWaiters = [], bodyKeys = [], bodyDone = 0, bodyListener = null;
  function fillEntry(h) {
    var e = {}; Object.keys(h).forEach(function (k) { e[k] = h[k]; });
    e.n = e.n || ''; e.l = e.l || ''; e.ti = e.ti || ''; e.k = e.k || ''; e.of = e.of || null; e.h = e.h || '';
    e.a = e.a || e.l; e.ix = e.ix || []; e.x = e.x || '';
    return e;
  }
  function addScript(src, onload, onerror) {
    var sc = document.createElement('script'); sc.src = src; sc.onload = onload; sc.onerror = onerror; document.head.appendChild(sc);
  }
  function loadHead(cb) {
    if (headState === 2) { if (cb) cb(); return; }
    if (cb) headWaiters.push(cb);
    if (headState === 1) return;
    headState = 1;
    var v = IDX.built ? '?v=' + encodeURIComponent(IDX.built) : '';   // 索引を作り直したら URL が変わる（古いキャッシュを使わない）
    addScript(root() + 'search-index.js' + v, function () {
      var M = window.MATH_INDEX || {};
      IDX.entries = new Array(M.entryCount || 0);
      (M.entryHeads || []).forEach(function (h) { IDX.entries[h.i] = fillEntry(h); });
      bodyKeys = M.bodyKeys || [];
      headState = 2; prepared = null; READINGS = null; DEFINED = null;
      headWaiters.splice(0).forEach(function (f) { try { f(); } catch (e) {} });
      if (!bodyKeys.length) { entriesState = 2; entriesWaiters.splice(0).forEach(function (f) { try { f(); } catch (e) {} }); return; }
      bodyKeys.forEach(function (k) {
        addScript(root() + 'search-body/' + k + '.js' + v, function () {
          var B = (window.SM_SB || {})[k] || { x: {}, e: [] };
          Object.keys(B.x || {}).forEach(function (i) { if (IDX.entries[i]) { IDX.entries[i].x = B.x[i]; updatePrepared(+i); } });
          (B.e || []).forEach(function (h) { IDX.entries[h.i] = fillEntry(h); updatePrepared(h.i); });
          bodyDone++;
          if (bodyDone === bodyKeys.length) {
            entriesState = 2;
            entriesWaiters.splice(0).forEach(function (f) { try { f(); } catch (e) {} });
          }
          if (bodyListener) bodyListener(bodyDone, bodyKeys.length);
        }, function () { bodyDone++; if (bodyListener) bodyListener(bodyDone, bodyKeys.length); });
      });
    }, function () { headState = 0; });
  }
  function loadEntries(cb) {
    if (entriesState === 2) { if (cb) cb(); return; }
    if (cb) entriesWaiters.push(cb);
    loadHead();
  }
  function entriesReady() { return entriesState === 2; }
  function headReady() { return headState === 2; }
  window.MathEntries = { load: loadEntries, ready: entriesReady };
  // 索引の読み込み中は、結果の形をした灰色の枠に光の波を流して待たせる（スケルトン表示）
  var LOADING_HTML = '<div class="mn-skel-list" role="status" aria-live="polite"><span class="mn-sr-only">検索用の索引を読み込んでいます…</span>' +
    [0, 1, 2, 3, 4, 5].map(function (i) {
      return '<div class="mn-skel-result" aria-hidden="true"><div class="mn-skel-line is-title" style="width:' + [46, 62, 38, 55, 41, 58][i] + '%"></div>' +
        '<div class="mn-skel-line is-where" style="width:' + [28, 22, 33, 25, 30, 20][i] + '%"></div>' +
        '<div class="mn-skel-line"></div><div class="mn-skel-line" style="width:' + [82, 74, 88, 69, 79, 85][i] + '%"></div></div>';
    }).join('') + '</div>';
  // 日本語入力（IME）で変換を確定するための Enter かどうか。
  // isComposing（多くのブラウザ）、keyCode 229（Safari など）、変換確定の直後（compositionend から少しの間）を見る。
  var lastCompositionEnd = 0;
  document.addEventListener('compositionend', function () { lastCompositionEnd = Date.now(); }, true);
  function isImeEnter(ev) {
    return ev.isComposing || ev.keyCode === 229 || Date.now() - lastCompositionEnd < 80;
  }
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

  /* ---------- 分野の選択（階層メニュー） ----------
   * 広い画面：macOS のメニューのように、項目にマウスを乗せると右に子メニューが開く。
   * 狭い画面：1 階層ずつ表示し、「‹ 戻る」で上の階層へ。
   * 子をもつ分野を選ぶときは、子メニュー先頭の「〇〇 全体」を選ぶ。 */
  // 分野の木は、メニュー（☰）と同じ表示上の階層で作る（site.js の renderTree と同じ規則）：
  //   第 1 層は大分野（_meta.json の groups）、その下は groups の項目（第 1 階層のフォルダ、または表示用の見出し）。
  //   solo のフォルダ（親の唯一の子）は飛ばし、"also" の写しは出さない。
  //   表示用の見出しと大分野は実在のフォルダでないので、"@" で始まる仮のキーをもち、dirs に含むフォルダの一覧をもつ。
  //   フォルダの階層を変えたら、メニュー・トップページ・パンくずと一緒に、ここ（検索の分野選択）も確かめること。
  var DIRS = {};   // key -> {node, parent}。node.dirs はその分野が含む実在のフォルダのパス
  var DTREE = (function () {
    var T = IDX.tree || { c: [] };
    function findDir(p) {
      var hit = null;
      (function walk(n) { (n.c || []).forEach(function (c) { if (hit || c.k !== 'd') return; if (c.path === p) hit = c; else if (p.indexOf(c.path) === 0) walk(c); }); })(T);
      return hit;
    }
    function wrap(raw, title) {
      var kids = [];
      (raw.c || []).forEach(function (c) {
        if (c.k !== 'd') { kids.push(c); return; }
        if (c.x) return;
        if (c.s) { wrap(c).c.forEach(function (k) { kids.push(k); }); return; }
        kids.push(wrap(c));
      });
      return { k: 'd', path: raw.path, title: title || raw.title, en: raw.en || '', c: kids, dirs: [raw.path] };
    }
    if (!IDX.groups) return wrap(T);
    var root = { k: 'd', path: '', title: '', c: [], dirs: [] };
    IDX.groups.forEach(function (g, gi) {
      var gn = { k: 'd', path: '@' + gi + '/', title: g.title, en: g.en || '', c: [], dirs: [] };
      g.items.forEach(function (it, ii) {
        var raws = it.paths.map(findDir).filter(Boolean), n;
        if (!raws.length) return;
        if (raws.length === 1) n = wrap(raws[0], it.v ? it.title : null);
        else n = { k: 'd', path: '@' + gi + '.' + ii + '/', title: it.title, en: it.en || '', c: raws.map(function (r) { return wrap(r); }), dirs: it.paths.slice() };
        gn.c.push(n); gn.dirs = gn.dirs.concat(n.dirs);
      });
      if (gn.c.length) root.c.push(gn);
    });
    return root;
  })();
  (function walk(n, parent) {
    (n.c || []).forEach(function (c) { if (c.k === 'd') { DIRS[c.path] = { node: c, parent: parent }; walk(c, c); } });
  })(DTREE, null);
  // 分野の選択キー（URL の in= にも入る）を、絞り込みに使う実在のフォルダのパスに展開する
  function expandDirs(keys) {
    var out = [];
    keys.forEach(function (k) { if (DIRS[k]) out = out.concat(DIRS[k].node.dirs); else out.push(k); });
    return out;
  }
  function hasPagesAny(n) { return (n.c || []).some(function (c) { return c.k !== 'd' || hasPagesAny(c); }); }
  function subdirs(n) { return ((n && n.c) || []).filter(function (c) { return c.k === 'd' && !c.x && hasPagesAny(c); }); }
  function dirLabel(path) {
    if (!path || !DIRS[path]) return 'すべての分野';
    var names = [], d = DIRS[path];
    while (d) { names.unshift(d.node.title); d = d.parent ? DIRS[d.parent.path] : null; }
    return names.join(' › ');
  }
  var NARROW = window.matchMedia ? matchMedia('(max-width: 640px)') : { matches: false };

  function createDirPicker(host, onChange) {
    var value = '';
    host.innerHTML = '<button type="button" class="mn-dirpick-btn" aria-haspopup="tree" aria-expanded="false">' +
      '<span class="mn-dirpick-label">すべての分野</span><span class="mn-dirpick-caret" aria-hidden="true">▾</span></button>';
    var btn = host.querySelector('button'), labelEl = host.querySelector('.mn-dirpick-label');
    var menu = document.createElement('div');
    menu.className = 'mn-menu'; menu.hidden = true;
    document.body.appendChild(menu);
    var esc = Core.escapeHtml;
    function isNarrow() { return NARROW.matches; }
    function ancestorsOf(path) {
      var chain = [], d = DIRS[path];
      while (d) { chain.unshift(d.node); d = d.parent ? DIRS[d.parent.path] : null; }
      return chain;
    }

    /* ===== 広い画面：カスケードメニュー（クリックで選択、カーソルで子を横に展開） ===== */
    var path = [], hoverTimer = null;
    function itemHtml(n, depth) {
      var kids = subdirs(n);
      var inPath = value && (value === n.path || value.indexOf(n.path) === 0);
      return '<button type="button" role="menuitem" class="mn-menu-item' + (kids.length ? ' has-sub' : '') +
        (value === n.path ? ' is-current' : (inPath ? ' is-ancestor' : '')) + (path[depth] === n ? ' is-open' : '') +
        '" data-path="' + esc(n.path) + '" data-depth="' + depth + '">' +
        '<span class="mn-menu-text">' + esc(n.title) + '</span>' + (kids.length ? '<span class="mn-menu-chev" aria-hidden="true">›</span>' : '') + '</button>';
    }
    function columnHtml(parent, depth) {
      var head = parent ? '' : '<button type="button" role="menuitem" class="mn-menu-item mn-menu-all' + (!value ? ' is-current' : '') +
        '" data-select="" data-depth="0"><span class="mn-menu-text">すべての分野</span></button><div class="mn-menu-sep"></div>';
      return '<div class="mn-menu-col" role="menu" data-depth="' + depth + '">' + head +
        subdirs(parent || DTREE).map(function (n) { return itemHtml(n, depth); }).join('') + '</div>';
    }
    function renderCascade() {
      var cols = [columnHtml(null, 0)];
      path.forEach(function (n, i) { cols.push(columnHtml(n, i + 1)); });
      var firstOpen = !menu.classList.contains('mn-menu--cascade');
      var fa = document.activeElement, focusPath = fa && menu.contains(fa) ? fa.getAttribute('data-path') : null;
      var prevHTML = [].slice.call(menu.querySelectorAll('.mn-menu-col')).map(function (c) { return c.getAttribute('data-key'); });
      menu.className = 'mn-menu mn-menu--cascade';
      menu.innerHTML = cols.join('');
      // 新しく開いた列だけをふわっと出す（開き直しでない列は動かさない）
      [].slice.call(menu.querySelectorAll('.mn-menu-col')).forEach(function (c, k) {
        var key = k === 0 ? 'root' : path[k - 1].path;
        c.setAttribute('data-key', key);
        if (firstOpen || prevHTML[k] !== key) c.classList.add('is-new');
      });
      layoutCascade();
      if (focusPath) { var f = menu.querySelector('.mn-menu-item[data-path="' + focusPath + '"]'); if (f) f.focus({ preventScroll: true }); }
    }
    // 子メニューは、開いた項目がその中ほどに来る高さに置く（下にだけ伸びると、斜めに動かしたとき閉じてしまうため）
    function layoutCascade() {
      var r = btn.getBoundingClientRect();
      var top0 = Math.min(r.bottom + 4, window.innerHeight - 160);
      menu.style.left = Math.max(8, r.left) + 'px'; menu.style.top = top0 + 'px'; menu.style.right = 'auto';
      var cols = [].slice.call(menu.querySelectorAll('.mn-menu-col')), x = 0, prevTop = 0;
      cols.forEach(function (c, k) {
        c.style.left = x + 'px';
        var top = 0;
        if (k > 0) {
          // 子メニューは開いた項目の高さから始め、カーソルが外れないよう項目の約半分だけ上にはみ出させる
          var it = cols[k - 1].querySelector('.is-open');
          var itTop = it ? prevTop + it.offsetTop - cols[k - 1].scrollTop : prevTop;
          var itH = it ? it.offsetHeight : 32, h = c.offsetHeight;
          top = itTop - 6 - Math.round(itH * 0.5);
          top = Math.min(top, window.innerHeight - 8 - top0 - h);  // 下にはみ出すときだけ上へずらす
          top = Math.max(top, 8 - top0);                          // 画面の上にははみ出さない
        }
        c.style.top = top + 'px';
        prevTop = top;
        x += c.offsetWidth + 4;
      });
      // 右にはみ出すなら全体を左へ
      var over = menu.getBoundingClientRect().left + x - window.innerWidth + 8;
      if (over > 0) menu.style.left = Math.max(8, parseFloat(menu.style.left) - over) + 'px';
    }
    function openSub(it) {
      var depth = +it.getAttribute('data-depth'), n = DIRS[it.getAttribute('data-path')].node;
      if (path[depth] === n && path.length === depth + 1) return;
      path = path.slice(0, depth).concat(subdirs(n).length ? [n] : []);
      renderCascade();
    }
    menu.addEventListener('mouseover', function (ev) {
      if (isNarrow()) return;
      var it = ev.target.closest('.mn-menu-item');
      if (!it) return;
      clearTimeout(hoverTimer);
      var depth = +it.getAttribute('data-depth');
      // すでに開いている子メニューへ向かって斜めに動く途中で、別の項目をかすめても切り替わらないよう少し待つ
      hoverTimer = setTimeout(function () {
        if (it.hasAttribute('data-path')) openSub(it);
        else if (path.length > depth) { path = path.slice(0, depth); renderCascade(); }
      }, path.length > depth ? 220 : 60);
    });
    menu.addEventListener('mouseleave', function () { clearTimeout(hoverTimer); });

    /* ===== 狭い画面：下に展開するツリー（左の ▸ で展開、名前で選択。同じ階層で開けるのは 1 つ） ===== */
    var openSet = {}, filterText = '';
    var CHEV = '<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false"><path d="M6 3.5 10.5 8 6 12.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>';
    function hasPages(n) { return (n.c || []).some(function (c) { return c.k !== 'd' || hasPages(c); }); }
    function treeRows(n, depth) {
      return subdirs(n).map(function (c) {
        var kids = subdirs(c), open = !!openSet[c.path];
        return '<div class="mn-tree-row' + (value === c.path ? ' is-current' : '') + (hasPages(c) ? '' : ' is-empty') + '" style="--depth:' + depth + '">' +
          (kids.length ? '<button type="button" class="mn-tree-exp' + (open ? ' is-open' : '') + '" data-expand="' + esc(c.path) +
            '" aria-expanded="' + open + '" aria-label="' + esc(c.title) + ' を展開">' + CHEV + '</button>'
            : '<span class="mn-tree-spacer" aria-hidden="true"></span>') +
          '<button type="button" class="mn-tree-pick" data-select="' + esc(c.path) + '">' + esc(c.title) + '</button></div>' +
          (kids.length && open ? '<div class="mn-tree-kids">' + treeRows(c, depth + 1) + '</div>' : '');
      }).join('');
    }
    function filterRows() {
      var q = fold(filterText.trim()), out = [];
      Object.keys(DIRS).forEach(function (p) {
        var t = DIRS[p].node.title;
        if (fold(t).indexOf(q) >= 0 || fold(DIRS[p].node.en || '').indexOf(q) >= 0) out.push(p);
      });
      if (!out.length) return '<div class="mn-tree-none">該当する分野がありません</div>';
      return out.map(function (p) {
        return '<div class="mn-tree-row' + (value === p ? ' is-current' : '') + '" style="--depth:0"><button type="button" class="mn-tree-pick" data-select="' + esc(p) + '">' +
          '<span class="mn-tree-path">' + esc(dirLabel(p).split(' › ').slice(0, -1).join(' › ')) + '</span>' + esc(DIRS[p].node.title) + '</button></div>';
      }).join('');
    }
    function renderTree(keepFilterFocus) {
      menu.className = 'mn-menu mn-menu--tree';
      if (!menu.querySelector('.mn-tree-filter')) {
        menu.innerHTML = '<div class="mn-tree-panel is-new"><input type="search" class="mn-tree-filter" placeholder="分野名で絞り込む" aria-label="分野名で絞り込む">' +
          '<div class="mn-tree-list"></div></div>';
        // 入力のたびに描き直すと重いので、入力が少し途切れてから描く
        var filterTimer = null;
        menu.querySelector('.mn-tree-filter').addEventListener('input', function (e) {
          var v = e.target.value;
          clearTimeout(filterTimer);
          filterTimer = setTimeout(function () { filterText = v; if (!menu.hidden) renderTree(true); }, 180);
        });
      }
      var list = menu.querySelector('.mn-tree-list');
      list.innerHTML = filterText.trim() ? filterRows() :
        '<div class="mn-tree-row' + (!value ? ' is-current' : '') + '" style="--depth:0"><span class="mn-tree-spacer" aria-hidden="true"></span><button type="button" class="mn-tree-pick mn-tree-all" data-select="">すべての分野</button></div>' +
        treeRows(DTREE, 0);
      var r = btn.getBoundingClientRect();
      menu.style.left = '8px'; menu.style.right = '8px';
      menu.style.top = (r.bottom + 4) + 'px';
      menu.style.maxHeight = Math.max(200, window.innerHeight - r.bottom - 12) + 'px';
    }
    function toggleExpand(p) {
      var n = DIRS[p].node, parent = DIRS[p].parent;
      if (openSet[p]) { Object.keys(openSet).forEach(function (k) { if (k.indexOf(p) === 0) delete openSet[k]; }); }
      else {
        // 同じ階層で開いているもの（とその子孫）を閉じる
        subdirs(parent || DTREE).forEach(function (sib) {
          Object.keys(openSet).forEach(function (k) { if (k.indexOf(sib.path) === 0) delete openSet[k]; });
        });
        openSet[n.path] = true;
      }
      renderTree();
      // 開いた子の一覧を下へ滑らかに展開
      var btnEl = menu.querySelector('[data-expand="' + p.replace(/"/g, '\\"') + '"]');
      if (btnEl) {   // 描き直した直後に旧状態→新状態へ切り替え、▸ の回転を見せる
        btnEl.classList.toggle('is-open', !openSet[p]); void btnEl.offsetWidth; btnEl.classList.toggle('is-open', !!openSet[p]);
      }
      var kids = btnEl && btnEl.parentNode.nextElementSibling;
      if (openSet[p] && kids && kids.classList.contains('mn-tree-kids') && kids.animate &&
          !(window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches)) {
        var h = kids.offsetHeight;
        kids.animate([{ height: '0px', opacity: 0 }, { height: h + 'px', opacity: 1 }], { duration: Math.min(380, 200 + h * 0.3), easing: 'cubic-bezier(.22,.61,.36,1)' });
      }
    }

    /* ===== 共通 ===== */
    function open() {
      if (isNarrow()) {
        openSet = {}; filterText = '';
        if (value) ancestorsOf(value).forEach(function (n) { if (subdirs(n).length && n.path !== value) openSet[n.path] = true; });
        menu.innerHTML = '';
        menu.hidden = false; renderTree();
        var cur = menu.querySelector('.mn-tree-row.is-current');
        if (cur) cur.scrollIntoView({ block: 'center' });
      } else {
        path = value ? ancestorsOf(value).filter(function (n) { return n.path !== value && subdirs(n).length; }) : [];
        menu.className = 'mn-menu'; menu.hidden = false; renderCascade();
        var c = menu.querySelector('.is-current') || menu.querySelector('.mn-menu-item');
        if (c) c.focus({ preventScroll: true });
      }
      btn.setAttribute('aria-expanded', 'true');
    }
    function close(refocus) {
      if (menu.hidden) return;
      clearTimeout(hoverTimer);
      menu.hidden = true; btn.setAttribute('aria-expanded', 'false');
      if (refocus) btn.focus();
    }
    function select(v) {
      value = v; labelEl.textContent = dirLabel(v); btn.classList.toggle('is-set', !!v);
      close(true); onChange();
    }
    btn.addEventListener('click', function () { if (menu.hidden) open(); else close(); });
    menu.addEventListener('click', function (ev) {
      var ex = ev.target.closest('[data-expand]');
      if (ex) { toggleExpand(ex.getAttribute('data-expand')); return; }
      var pick = ev.target.closest('[data-select]');
      if (pick) { select(pick.getAttribute('data-select')); return; }
      var it = ev.target.closest('.mn-menu-item[data-path]');
      if (it) select(it.getAttribute('data-path'));   // 広い画面：クリックでその分野を選ぶ
    });
    menu.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape') { ev.preventDefault(); ev.stopPropagation(); close(true); return; }
      if (isNarrow()) return;
      var it = document.activeElement;
      if (!it || !menu.contains(it) || !it.classList.contains('mn-menu-item')) return;
      var col = it.closest('.mn-menu-col'), items = [].slice.call(col.querySelectorAll('.mn-menu-item')), i = items.indexOf(it);
      if (ev.key === 'ArrowDown') { ev.preventDefault(); items[(i + 1) % items.length].focus(); }
      else if (ev.key === 'ArrowUp') { ev.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
      else if (ev.key === 'ArrowRight' && it.classList.contains('has-sub')) {
        ev.preventDefault(); openSub(it);
        var f = menu.querySelector('.mn-menu-col:last-child .mn-menu-item'); if (f) f.focus();
      } else if (ev.key === 'ArrowLeft' && path.length) {
        ev.preventDefault(); var d = path.length - 1; path.pop(); renderCascade();
        var b = menu.querySelector('.mn-menu-col[data-depth="' + d + '"] .mn-menu-item[data-path="' + (it.closest('.mn-menu-col') ? '' : '') + '"]');
        var back = menu.querySelector('.mn-menu-col[data-depth="' + d + '"] .is-ancestor, .mn-menu-col[data-depth="' + d + '"] .mn-menu-item');
        if (back) back.focus();
      } else if (ev.key === 'Enter') { ev.preventDefault(); it.click(); }
    });
    document.addEventListener('keydown', function (ev) {
      if (ev.key === 'Escape' && !menu.hidden) { ev.preventDefault(); ev.stopPropagation(); close(true); }
    }, true);
    document.addEventListener('mousedown', function (ev) { if (!menu.hidden && !menu.contains(ev.target) && !host.contains(ev.target)) close(); });
    document.addEventListener('touchstart', function (ev) { if (!menu.hidden && !menu.contains(ev.target) && !host.contains(ev.target)) close(); }, { passive: true });
    window.addEventListener('resize', function () { if (!menu.hidden) { if (isNarrow()) renderTree(); else renderCascade(); } });
    return { get: function () { return value; }, set: function (v) { value = DIRS[v] ? v : ''; labelEl.textContent = dirLabel(value); btn.classList.toggle('is-set', !!value); } };
  }

  // 「条件を指定」の開閉。PC・スマホとも既定で開き、開閉はブラウザに覚える。
  function moreKey() { return 'mn-sform-open'; }
  function moreOpen() {
    var s = store(moreKey());
    return s != null ? s === '1' : true;
  }
  function formHtml(id) {
    return '<form class="mn-sform" role="search" autocomplete="off" onsubmit="return false">' +
      '<div class="mn-sform-main">' +
        '<span class="mn-sform-icon"><svg class="mn-ico" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><circle cx="10.5" cy="10.5" r="6.5"/><path d="M15.5 15.5 21 21"/></svg></span>' +
        '<span class="mn-sform-qwrap"><input class="mn-sform-q" type="search" name="q" placeholder="キーワード（例：コンパクト、べきしゅうごう、Tychonoff）" aria-label="キーワード" spellcheck="false">' +
        '<button type="button" class="mn-sform-clear" title="入力を全部消す" aria-label="入力を全部消す" hidden><svg class="mn-ico" viewBox="0 0 24 24" width="14" height="14" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"><path d="M6 6l12 12M18 6 6 18"/></svg></button></span>' +
        '<button type="button" class="mn-sform-go" title="検索する（Enter）">検索</button>' +
      '</div>' +
      '<div class="mn-sform-hint"><kbd>Enter</kbd> か「検索」で検索。↑↓ で結果を選び <kbd>Shift</kbd>+<kbd>Enter</kbd> でその項目を開く</div>' +
      '<div class="mn-sform-opts">' +
      '<details class="mn-sform-more" data-kind="' + id + '"' + (moreOpen(id) ? ' open' : '') + '>' +
        '<summary>条件を指定</summary>' +
        '<div class="mn-sform-grid">' +
          '<div class="mn-field"><span class="mn-field-label">分野</span><div class="mn-dirpick"></div></div>' +
          '<label class="mn-field"><span class="mn-field-label">数式を含む</span><input name="tex" type="text" placeholder="例：\\pi_1(S^1)、\\otimes" spellcheck="false"></label>' +
          '<label class="mn-field"><span class="mn-field-label">除外する語</span><input name="exclude" type="text" placeholder="スペース区切り" spellcheck="false"></label>' +
          '<div class="mn-field"><span class="mn-field-label">複数の語を入れたとき</span><div class="mn-seg" role="radiogroup">' +
            '<button type="button" class="mn-seg-btn is-on" data-mode="all" role="radio" aria-checked="true">すべて含む</button>' +
            '<button type="button" class="mn-seg-btn" data-mode="any" role="radio" aria-checked="false">いずれかを含む</button></div></div>' +
          '<div class="mn-field"><span class="mn-field-label">一致する場所</span><div class="mn-seg mn-seg-loc" role="radiogroup">' +
            '<button type="button" class="mn-seg-btn is-on" data-loc="" role="radio" aria-checked="true">すべて</button>' +
            '<button type="button" class="mn-seg-btn" data-loc="title" role="radio" aria-checked="false">題・名前</button>' +
            '<button type="button" class="mn-seg-btn" data-loc="stmt" role="radio" aria-checked="false">主張</button>' +
            '<button type="button" class="mn-seg-btn" data-loc="body" role="radio" aria-checked="false">本文</button></div></div>' +
          '<div class="mn-checks"><label class="mn-check"><input type="checkbox" name="exact"> 語句を完全一致で探す</label>' +
          '<label class="mn-check"><input type="checkbox" name="cs"> 英字の大文字・小文字を区別する</label></div>' +
        '</div>' +
        '<div class="mn-tex-preview" aria-live="polite"></div>' +
        '<fieldset class="mn-chips"><legend>種類</legend>' +
          '<button type="button" class="mn-chip is-on" data-type="">すべて</button>' +
          TYPE_CHIPS.map(function (t) { return '<button type="button" class="mn-chip" data-type="' + t[0] + '" aria-pressed="false">' + t[1] + '</button>'; }).join('') +
        '</fieldset>' +
      '</details>' +
      '<div class="mn-order-wrap">' +
        '<button type="button" class="mn-order-open" aria-haspopup="dialog" aria-expanded="false">並び順</button>' +
        '<div class="mn-order-pop" role="dialog" aria-label="検索結果の並び順" hidden>' +
          '<div class="mn-order-title">検索結果の段の順番</div>' +
          '<p class="mn-order-note">↑↓ で入れ替えると、すぐ結果に反映され、このブラウザに記憶されます。</p>' +
          '<ol class="mn-order-list"></ol>' +
          '<div class="mn-order-foot"><button type="button" class="mn-order-reset">初期の順に戻す</button><button type="button" class="mn-order-close">閉じる</button></div>' +
        '</div>' +
      '</div>' +
      '</div>' +
    '</form>';
  }

  // フォームを初期化し、読み取り関数などを返す。
  // 検索は Enter か「検索」ボタンのときだけ行う（入力・種類・分野などを変えただけでは検索しない。次の検索に反映される）。
  function bindForm(form) {
    var q = form.querySelector('[name=q]'), tex = form.querySelector('[name=tex]'),
      ex = form.querySelector('[name=exclude]'), exact = form.querySelector('[name=exact]'), csBox = form.querySelector('[name=cs]'),
      pv = form.querySelector('.mn-tex-preview'),
      more = form.querySelector('.mn-sform-more');
    var chips = [].slice.call(form.querySelectorAll('.mn-chip'));
    var dir = createDirPicker(form.querySelector('.mn-dirpick'), function () {});
    var segs = [].slice.call(form.querySelectorAll('.mn-seg-btn[data-mode]')), mode = 'all';
    var locs = [].slice.call(form.querySelectorAll('.mn-seg-btn[data-loc]')), loc = '';
    function setLoc(m) {
      loc = m === 'title' || m === 'body' || m === 'stmt' ? m : '';
      locs.forEach(function (b) { var on = b.getAttribute('data-loc') === loc; b.classList.toggle('is-on', on); b.setAttribute('aria-checked', on); });
    }
    locs.forEach(function (b) { b.addEventListener('click', function () { setLoc(b.getAttribute('data-loc')); }); });
    var olist = form.querySelector('.mn-order-list'), orderListeners = [];
    function drawOrder() {
      var o = groupOrder();
      olist.innerHTML = o.map(function (t, i) {
        return '<li data-tier="' + t + '"><span class="mn-order-name">' + ORDER_NAMES[t] + '</span>' +
          '<button type="button" class="mn-order-btn" data-dir="-1" aria-label="上へ"' + (i === 0 ? ' disabled' : '') + '>↑</button>' +
          '<button type="button" class="mn-order-btn" data-dir="1" aria-label="下へ"' + (i === o.length - 1 ? ' disabled' : '') + '>↓</button></li>';
      }).join('');
    }
    function saveOrder(o) { store(ORDER_KEY, JSON.stringify(o)); drawOrder(); orderListeners.forEach(function (f) { f(); }); }
    olist.addEventListener('click', function (ev) {
      var b = ev.target.closest && ev.target.closest('.mn-order-btn'); if (!b) return;
      var t = +b.closest('li').getAttribute('data-tier'), o = groupOrder(), i = o.indexOf(t), j = i + (+b.getAttribute('data-dir'));
      if (j < 0 || j >= o.length) return;
      o[i] = o[j]; o[j] = t; saveOrder(o);
    });
    form.querySelector('.mn-order-reset').addEventListener('click', function () { saveOrder([5, 4, 3, 2, 1]); });
    // 並び順は小窓（ポップオーバー）で指定する（2026-10-23 ユーザー指示：条件の欄を開いても位置が動かないように）
    var obtn = form.querySelector('.mn-order-open'), opop = form.querySelector('.mn-order-pop');
    function setPop(open) { opop.hidden = !open; obtn.setAttribute('aria-expanded', open); obtn.classList.toggle('is-on', open); }
    obtn.addEventListener('click', function (ev) { ev.stopPropagation(); setPop(opop.hidden); });
    form.querySelector('.mn-order-close').addEventListener('click', function () { setPop(false); obtn.focus(); });
    var owrap = form.querySelector('.mn-order-wrap');
    // 小窓の中の ↑↓ は押すと描き直されて文書から外れるので、closest ではなく押した時点の経路で外側かどうかを判定する
    document.addEventListener('click', function (ev) { if (!opop.hidden && (ev.composedPath ? ev.composedPath() : []).indexOf(owrap) < 0) setPop(false); });
    document.addEventListener('keydown', function (ev) { if (ev.key === 'Escape' && !opop.hidden) { setPop(false); obtn.focus(); } });
    drawOrder();
    function setMode(m) {
      mode = m === 'any' ? 'any' : 'all';
      segs.forEach(function (b) { var on = b.getAttribute('data-mode') === mode; b.classList.toggle('is-on', on); b.setAttribute('aria-checked', on); });
    }
    segs.forEach(function (b) { b.addEventListener('click', function () { setMode(b.getAttribute('data-mode')); }); });
    function preview() {
      var t = tex.value.trim().replace(/^\$+|\$+$/g, '');
      pv.innerHTML = t ? '<span class="mn-tex-preview-label">プレビュー</span> ' + renderTexSafe(t) : '';
    }
    chips.forEach(function (c) {
      c.addEventListener('click', function () {
        if (!c.getAttribute('data-type')) chips.forEach(function (x) { x.classList.toggle('is-on', x === c); x.setAttribute('aria-pressed', x === c); });
        else {
          c.classList.toggle('is-on');
          c.setAttribute('aria-pressed', c.classList.contains('is-on'));
          var any = chips.some(function (x) { return x.getAttribute('data-type') && x.classList.contains('is-on'); });
          chips[0].classList.toggle('is-on', !any);
        }
      });
    });
    // 数式のプレビューは入力が少し途切れてから描く（検索はしない）
    // 検索窓の × ：入力を全部消す（検索はしない。Enter で検索し直す）
    var clr = form.querySelector('.mn-sform-clear');
    function syncClear() { clr.hidden = !q.value; }
    q.addEventListener('input', syncClear);
    clr.addEventListener('mousedown', function (ev) { ev.preventDefault(); });   // 入力欄のフォーカスを外さない
    clr.addEventListener('click', function () { q.value = ''; syncClear(); q.focus(); });
    var pvTimer = null;
    tex.addEventListener('input', function () { clearTimeout(pvTimer); pvTimer = setTimeout(preview, 200); });
    more.addEventListener('toggle', function () { store(moreKey(more.getAttribute('data-kind')), more.open ? '1' : '0'); });
    return {
      q: q, go: form.querySelector('.mn-sform-go'),
      read: function () {
        return {
          q: q.value, tex: tex.value, exclude: ex.value, exact: exact.checked, cs: csBox.checked, mode: mode,
          dirs: dir.get() ? [dir.get()] : [],
          types: [].concat.apply([], chips.filter(function (x) { return x.getAttribute('data-type') && x.classList.contains('is-on'); })
            .map(function (x) { return x.getAttribute('data-type').split(','); })),
          loc: loc
        };
      },
      write: function (v) {
        q.value = v.q || ''; tex.value = v.tex || ''; ex.value = v.exclude || ''; exact.checked = !!v.exact; csBox.checked = !!v.cs;
        dir.set((v.dirs && v.dirs[0]) || '');
        setMode(v.mode);
        var ts = v.types || [];
        chips.forEach(function (x) { var t = x.getAttribute('data-type'); x.classList.toggle('is-on', t ? t.split(',').every(function (u) { return ts.indexOf(u) >= 0; }) : !ts.length); });
        setLoc(v.loc);
        preview(); syncClear();
      },
      onOrder: function (f) { orderListeners.push(f); },
      isEmpty: function (v) { return !(v.q.trim() || v.tex.trim() || v.types.length || v.dirs.length); }
    };
  }
  function renderTexSafe(t) {
    try { return katex.renderToString(t, { throwOnError: true, macros: Object.assign({}, C.KATEX_MACROS), strict: 'ignore' }); }
    catch (e) { return '<span class="mn-tex-preview-err">数式として解釈できません</span>'; }
  }
  function toParams(v) {
    var p = new URLSearchParams();
    if (v.q) p.set('q', v.q); if (v.tex) p.set('tex', v.tex); if (v.exclude) p.set('ex', v.exclude);
    if (v.exact) p.set('exact', '1'); if (v.types.length) p.set('type', v.types.join(','));
    if (v.dirs.length) p.set('in', v.dirs[0]);
    if (v.mode === 'any') p.set('mode', 'any');
    if (v.cs) p.set('cs', '1');
    if (v.loc) p.set('loc', v.loc);
    return p.toString();
  }
  function fromParams(sp) {
    return { q: sp.get('q') || '', tex: sp.get('tex') || '', exclude: sp.get('ex') || '', exact: sp.get('exact') === '1',
      types: (sp.get('type') || '').split(',').filter(Boolean), dirs: sp.get('in') ? [sp.get('in')] : [], mode: sp.get('mode') || 'all', cs: sp.get('cs') === '1', loc: sp.get('loc') || '' };
  }

  var EMPTY_HELP = '<div class="mn-search-help">' +
    '<p><b>キーワード</b>に定理名や用語を入れると、定義・定理・本文と<a href="' + (document.body.getAttribute('data-root') || '') + 'glossary.html">用語索引</a>から探します。英語名（例：Tychonoff）でも見つかります。' +
    'スペースで区切って複数の語を入れられます（「すべての語を含む」か「いずれかの語を含む」を選べます）。</p>' +
    '<p><b>数式を含む</b>には LaTeX で数式を書きます（例：<code>\\pi_1(S^1)</code>）。空白や括弧の付け方、<code>\\le</code> と <code>\\leq</code> などの違いは気にしなくて大丈夫です。</p>' +
    '<p><b>種類</b>のボタンで「語の定義だけ」（検索語を定義しているもの）「語を使う定義だけ」「定理・命題・補題・系だけ」「見出し（分類・記事・節）だけ」のように絞り込めます（複数選択可）。<b>一致する場所</b>で題・名前だけ、定義・定理の主張だけ、本文だけの一致に絞れます。</p>' +
    '<p>結果は「語の定義」「名前を含む定理など」「見出し」「語を含む主張」「それ以外」の段に分かれます。<b>並び順</b>で段の順番を入れ替えられ、このブラウザに記憶されます。</p>' +
    '<p>日本語は<b>ふりがな</b>でも探せます（例：「べきしゅうごう」で「冪集合」）。いま開いているページの結果は一番上に出ます。</p>' +
    '<p>条件を入力・選択してから <kbd>Enter</kbd> か「検索」ボタンを押すと検索します（漢字変換の確定の <kbd>Enter</kbd> では検索しません）。</p>' +
    '<p class="mn-search-kbd"><kbd>/</kbd> でどこからでも検索、<kbd>↑</kbd><kbd>↓</kbd> で選んで <kbd>Shift</kbd>+<kbd>Enter</kbd> で開きます。</p></div>';

  /* ---------- 移動先で検索語を目立たせるための受け渡し ---------- */
  var lastPQ = null;
  function rememberHighlight(href) {
    if (!lastPQ) return;
    var texs = lastPQ.terms.filter(function (t) { return t.kind === 'tex'; }).map(function (t) { return t.tex; });
    try {
      sessionStorage.setItem('mn-hl', JSON.stringify({ terms: textTerms(lastPQ), tex: texs, cs: !!lastPQ.cs, t: Date.now() }));
    } catch (e) {}
  }
  function go(a) {
    if (!a) return;
    rememberHighlight();
    var href = a.getAttribute('href');
    var target = new URL(href, location.href);
    if (target.pathname === location.pathname) {
      if (target.hash === location.hash && window.MathSiteRefresh) window.MathSiteRefresh();
      else location.hash = target.hash;   // hashchange で強調される
      return;
    }
    location.href = href;
  }
  document.addEventListener('click', function (ev) {
    var a = ev.target.closest && ev.target.closest('a.mn-result');
    if (!a) return;
    rememberHighlight();
    var target = new URL(a.getAttribute('href'), location.href);
    if (target.pathname === location.pathname && target.hash === location.hash && window.MathSiteRefresh) {
      setTimeout(window.MathSiteRefresh, 0);
    }
  }, true);

  /* 結果は最初の PAGE_SIZE 件だけ描き、「さらに表示」で PAGE_SIZE 件ずつ足す（KaTeX も描いた分だけ） */
  var PAGE_SIZE = 50;
  function moreButtonHtml(box) {
    var rest = box._out.results.length - box._shown;
    return rest > 0 ? '<button type="button" class="mn-search-more mn-search-showmore">さらに表示（残り ' + rest + ' 件）</button>' : '';
  }
  // 検索語が用語（定義された語）とちょうど一致するとき、その語のすべての意味（全分野の定義）を結果の先頭に並べる（2026-10-22 ユーザー指示：
  // 同じ語の別の意味まで網羅する）。用語と定義の対応は site-index.js の terms（原稿の定義から自動で集めたもの）を使うので、本文の索引を待たずに出せる。
  function meaningsHtml(pq) {
    var words = (pq.terms || []).filter(function (t) { return t.kind === 'text' && t.txt; });
    if (words.length !== 1 || !IDX.terms) return '';
    var w = words[0], cands = [w.s || w.txt].concat(w.alts || []), term = null;
    for (var i = 0; i < cands.length && !term; i++) if (IDX.terms[cands[i]]) term = cands[i];
    if (!term) {
      var f = fold(w.txt);
      Object.keys(IDX.terms).some(function (k) { if (fold(k) === f) { term = k; return true; } return false; });
    }
    if (!term) return '';
    var labs = IDX.terms[term].filter(function (l) { return IDX.labels[l]; });
    if (!labs.length) return '';
    var items = labs.map(function (l) {
      var L = IDX.labels[l], pg = IDX.pages[L.p] || {};
      var field = (pg.crumbs || []).filter(function (c) { return !c.t; }).map(function (c) { return c.title; })[1] || '';   // [0] は大分野、[1] が分野（2026-10-22 のディレクトリ再編から）
      return '<li><a class="mn-xref" href="' + root() + pg.path + '#' + Core.escapeHtml(l) + '" data-label="' + Core.escapeHtml(l) + '">' +
        Core.escapeHtml((L.ti || term)) + '</a> <span class="mn-meaning-where">' + Core.escapeHtml(field + (field ? ' › ' : '') + (pg.subj || '') + ' §' + pg.sec) + '</span></li>';
    }).join('');
    return '<div class="mn-meanings"><div class="mn-meanings-k">「' + Core.escapeHtml(term) + '」の定義' + (labs.length > 1 ? '（' + labs.length + ' 通りの意味）' : '') + '</div><ul>' + items + '</ul></div>';
  }
  // 段ごとにまとめて表示する（2026-10-23 ユーザー指示：部分一致の定義などが、前の段の多い結果に埋もれないように）。
  // 各段は最初の数件だけを出し、「この段をさらに表示」で足す。あいまい検索のときは段に分けない。
  var GROUPS = [
    { t: 5, h: function (q) { return '「' + q + '」の定義（完全一致 → 部分一致）'; }, n: 5 },
    { t: 4, h: function (q) { return '名前に「' + q + '」を含む定理・命題・補題など'; }, n: 5 },
    { t: 3, h: function (q) { return '名前に「' + q + '」を含む見出し（分類・記事・節）'; }, n: 5 },
    { t: 2, h: function (q) { return '「' + q + '」を含む主張（定義・定理の本文、証明のステップ）'; }, n: 5 },
    { t: 1, h: function () { return 'それ以外での一致'; }, n: 5 }
  ];
  var GROUP_STEP = 20;
  // 段の並び順（2026-10-23 ユーザー指示：どの段を先に出すか選べるようにし、ブラウザに記憶する）
  var ORDER_KEY = 'mn-search-order', ORDER_NAMES = { 5: '語の定義', 4: '名前を含む定理・補題など', 3: '名前を含む見出し', 2: '語を含む主張', 1: 'それ以外' };
  function groupOrder() {
    var o = null;
    try { o = JSON.parse(store(ORDER_KEY) || 'null'); } catch (e) {}
    var def = [5, 4, 3, 2, 1];
    if (!Array.isArray(o) || o.length !== def.length || def.some(function (t) { return o.indexOf(t) < 0; })) return def;
    return o;
  }
  function groupsInOrder() {
    var byT = {}; GROUPS.forEach(function (G) { byT[G.t] = G; });
    return groupOrder().map(function (t) { return byT[t]; });
  }
  function groupMoreHtml(box, t) {
    var g = box._groups[t], rest = g.items.length - g.shown;
    return rest > 0 ? '<button type="button" class="mn-search-more mn-search-groupmore" data-tier="' + t + '">この段をさらに表示（残り ' + rest + ' 件）</button>' : '';
  }
  function showGrouped(box, out) {
    var q = (out.pq.terms || []).filter(function (t) { return t.kind === 'text'; }).map(function (t) { return t.s; }).join(' ');
    box._groups = {};
    var html = '<div class="mn-search-count">' + out.total + ' 件</div>';
    groupsInOrder().forEach(function (G) {
      var items = out.results.filter(function (x) { return x.tier === G.t; });
      if (!items.length) return;
      var g = box._groups[G.t] = { items: items, shown: Math.min(G.n, items.length) };
      html += '<section class="mn-result-group" data-tier="' + G.t + '"><div class="mn-result-group-h">' + Core.escapeHtml(G.h(q)) + '<span class="mn-result-group-n">' + items.length + ' 件</span></div>' +
        items.slice(0, g.shown).map(function (it) { return renderResult(it, out.pq, root(), false); }).join('') + groupMoreHtml(box, G.t) + '</section>';
    });
    box.innerHTML = html;
  }
  function showGroupMore(box, btn) {
    var t = +btn.getAttribute('data-tier'), g = box._groups && box._groups[t];
    if (!g) return;
    var from = g.shown, to = Math.min(from + GROUP_STEP, g.items.length);
    g.shown = to;
    btn.insertAdjacentHTML('beforebegin', g.items.slice(from, to).map(function (it) { return renderResult(it, box._out.pq, root(), false); }).join(''));
    var next = groupMoreHtml(box, t);
    if (next) btn.outerHTML = next; else btn.remove();
  }
  function showResults(box, out) {
    box._out = out;
    if (out.results.length && !out.fuzzy && out.results.some(function (x) { return x.tier > 0; })) { box._shown = 0; showGrouped(box, out); return; }
    var mean = meaningsHtml(out.pq || {});
    if (!out.results.length) { box._shown = 0; box.innerHTML = mean + '<div class="mn-search-empty">該当する項目が見つかりませんでした。語を減らすか、条件を外してみてください。</div>'; return; }
    box._shown = Math.min(PAGE_SIZE, out.results.length);
    box.innerHTML = mean + '<div class="mn-search-count">' + out.total + ' 件' + (out.fuzzy ? '（完全に一致するものがないため、近い候補を表示）' : '') + '</div>' +
      out.results.slice(0, box._shown).map(function (it) { return renderResult(it, out.pq, root(), false); }).join('') +
      moreButtonHtml(box);
  }
  function showMore(box) {
    var out = box._out, btn = box.querySelector('.mn-search-showmore');
    if (!out || !btn) return;
    var from = box._shown, to = Math.min(from + PAGE_SIZE, out.results.length);
    box._shown = to;
    btn.insertAdjacentHTML('beforebegin', out.results.slice(from, to).map(function (it) { return renderResult(it, out.pq, root(), false); }).join(''));
    var next = moreButtonHtml(box);
    if (next) btn.outerHTML = next; else btn.remove();
  }
  function bindMore(box) {
    box.addEventListener('click', function (ev) {
      if (ev.target.closest && ev.target.closest('.mn-search-showmore')) { ev.preventDefault(); showMore(box); }
      var gb = ev.target.closest && ev.target.closest('.mn-search-groupmore');
      if (gb) { ev.preventDefault(); showGroupMore(box, gb); }
    });
  }
  /* ---------- 検索の入口 ----------
   * 検索は PC・スマホとも検索ページ（search.html）で行う（小窓は使わない）。
   * ヘッダーの検索ボタン・/・Ctrl+K で検索ページへ移る。検索ページにいるときは検索窓に移る。 */
  var pageQ = null;   // 検索ページの検索窓（検索ページでだけ設定される）
  function open(v) {
    if (pageQ) {
      if (v) pageQ.value = typeof v === 'string' ? v : (v.q || '');
      pageQ.focus(); pageQ.select();
      return;
    }
    var p = v ? toParams(Object.assign({ q: '', tex: '', exclude: '', types: [], dirs: [] }, typeof v === 'string' ? { q: v } : v)) : '';
    location.href = root() + 'search.html' + (p ? '?' + p : '');
  }
  function close() {}
  document.addEventListener('keydown', function (ev) {
    var t = ev.target, typing = t && (/INPUT|TEXTAREA|SELECT/.test(t.tagName) || t.isContentEditable);
    if ((ev.key === 'k' && (ev.metaKey || ev.ctrlKey)) || (ev.key === '/' && !typing)) { ev.preventDefault(); open(); }
  });

  /* ---------- 検索ページ（search.html） ---------- */
  function renderSearchPage(container) {
    container.innerHTML = formHtml('page') + '<div class="mn-search-results mn-search-results--page"></div>';
    var res = container.querySelector('.mn-search-results');
    var f = bindForm(container.querySelector('form'));
    // 検索窓と「検索」ボタンはヘッダーに置く（PC・スマホとも）。ヘッダーには、ほかに「上に戻る」ボタンだけを置く。
    // 条件の指定と結果の一覧は、ページと一緒にスクロールする。
    var bar = document.querySelector('.mn-topbar'), qbox = container.querySelector('.mn-sform-main');
    if (bar && qbox) {
      var slot = document.createElement('div');
      slot.className = 'mn-topbar-search';
      slot.appendChild(qbox);
      slot.insertAdjacentHTML('beforeend', '<button type="button" class="mn-iconbtn mn-totop" title="上に戻る" aria-label="上に戻る">' +
        '<svg class="mn-ico" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5.5 11.5 12 5l6.5 6.5"/></svg></button>');
      bar.appendChild(slot);
      bar.classList.add('mn-topbar--search');
      var app0 = bar.closest('.mn-app'); if (app0) app0.classList.add('mn-searchmode');
      slot.querySelector('.mn-totop').addEventListener('click', function () {
        var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
        window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
      });
    }
    pageQ = f.q;
    bindMore(res);
    f.onOrder(function () { if (res._out) showResults(res, res._out); });
    f.write(fromParams(new URLSearchParams(location.search)));
    loadHead();   // 検索ページを開いたら索引を読み込んでおく
    function run() {
      var v = f.read();
      if (!f.isEmpty(v) && !headReady()) { res.innerHTML = LOADING_HTML; loadHead(run); return; }
      if (f.isEmpty(v)) res.innerHTML = EMPTY_HELP;
      else {
        var t0 = window.performance ? performance.now() : 0;
        var out = search(v, { limit: 1e9 }); lastPQ = out.pq; showResults(res, out);
        // 本文がまだ届いていなければ、題・索引語での結果を先に出し、本文が届いたら出し直す
        if (!entriesReady()) {
          res.insertAdjacentHTML('afterbegin', '<p class="mn-muted mn-body-loading" role="status">本文を読み込んでいます（' + bodyDone + ' / ' + bodyKeys.length + '）。題・索引語の一致を先に表示しています。</p>');
          bodyListener = function (d, n) {
            var note = res.querySelector('.mn-body-loading'); if (note) note.textContent = '本文を読み込んでいます（' + d + ' / ' + n + '）。題・索引語の一致を先に表示しています。';
            if (d === n) { bodyListener = null; run(); }
          };
        }
        if (window.performance && window.console) console.debug('[search] 検索と描画 ' + Math.round(performance.now() - t0) + ' ms（' + out.total + ' 件）');
      }
      if (typeof psel !== 'undefined') { psel = 0; pmark(); }
      try { history.replaceState(null, '', location.pathname + (toParams(v) ? '?' + toParams(v) : '')); } catch (e) {}
    }
    run();
    f.q.focus();
    // キー操作：検索窓（ヘッダー）と条件のフォームのどこにフォーカスがあっても
    //   ↑↓ で結果を選び、Shift+Enter で選んだ結果を開く。入力欄の Enter は検索し直す。
    var psel = 0;
    function pitems() { return res.querySelectorAll('.mn-result'); }
    function pmark() {
      var items = pitems();
      [].forEach.call(items, function (it, k) { it.classList.toggle('is-active', k === psel); });
      return items;
    }
    function pmove(d) {
      var items = pitems();
      if (!items.length) return;
      psel = (psel + d + items.length) % items.length;
      pmark();
      items[psel].scrollIntoView({ block: 'nearest' });
    }
    pmark();
    var form0 = container.querySelector('form');
    function onKey(ev) {
      var inForm = form0.contains(ev.target) || (qbox && qbox.contains(ev.target));
      if (!inForm) return;
      if (ev.key === 'ArrowDown' || ev.key === 'ArrowUp') {
        if (ev.target.closest && ev.target.closest('.mn-dirpick')) return;   // 分野の選択メニューは自分で↑↓を使う
        ev.preventDefault(); pmove(ev.key === 'ArrowDown' ? 1 : -1); return;
      }
      if (ev.key !== 'Enter' || isImeEnter(ev)) return;   // 漢字変換の確定には反応しない
      if (ev.shiftKey) { ev.preventDefault(); go(pitems()[psel] || pitems()[0]); return; }
      if (ev.target.tagName === 'INPUT') { ev.preventDefault(); f.go.click(); }
    }
    container.addEventListener('keydown', onKey);
    if (qbox && !container.contains(qbox)) qbox.addEventListener('keydown', onKey);
    // 検索ページの「検索」ボタン：検索して結果の先頭へ移る
    f.go.addEventListener('click', function () {
      run();
      // 検索したことが分かるように、件数の表示を一瞬強調して結果の先頭へ移る
      var c = res.querySelector('.mn-search-count');
      if (c) { c.classList.remove('is-flash'); void c.offsetWidth; c.classList.add('is-flash'); }
      if (res.scrollIntoView) res.scrollIntoView({ block: 'start', behavior: 'smooth' });
    });
  }

  window.MathSearch = { search: search, open: open, close: close, parseQuery: parseQuery, renderSearchPage: renderSearchPage, termRegex: termRegex, normTex: norm };
})();
