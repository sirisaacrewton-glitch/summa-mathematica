#!/usr/bin/env node
/* 自動の用語リンクの一覧（DeepSeek での意味の確認用。scripts/termcheck.py が読む）
 *
 *   node tools/term-links.js [ページのパス ...] > units.json
 *
 * ページの原稿（地の文）で、用語リンク（site-core.js の createTermLinker）が自動で結ぶ語を、
 * ブラウザと同じ規則で選んだ定義（既定の候補）と、ほかの候補（candidates の順）とともに出力する。
 * 同じページの同じ語は同じ定義に結ばれる（ページごとに pick をキャッシュする）ので、(ページ, 語) ごとに 1 件。
 * 数式・コード・参照・見出し・環境の見出し行・その語を定義している環境の中は対象外。 */
'use strict';
var fs = require('fs'), path = require('path'), vm = require('vm');
var ROOT = path.join(__dirname, '..');
var win = {};
vm.runInNewContext(fs.readFileSync(path.join(ROOT, 'site-index.js'), 'utf8'), { window: win });
var IDX = win.MATH_INDEX;
var Core = require(path.join(ROOT, 'site-core.js'));
Core.setTermRules(IDX.termRules);
var linker = Core.createTermLinker(IDX.terms, IDX.labels, IDX.pages);

function blank(s) { return s.replace(/[^\n]/g, ' '); }
function prose(src) {
  return src
    .replace(/```[\s\S]*?```/g, blank)
    .replace(/\$\$[\s\S]*?\$\$/g, blank)
    .replace(/\$[^$\n]*\$/g, blank)
    .replace(/`[^`\n]*`/g, blank)
    .replace(/\\(?:ref|tref|nameref|fullref|eqref|see|term)(?:\[[^\]]*\])?\{[^}]*\}/g, blank)
    .replace(/<[^>\n]*>/g, blank)
    .replace(/^(?:::: .*|#.*)$/gm, blank);
}

var want = process.argv.slice(2);
var out = [];
IDX.pages.forEach(function (P, i) {
  if (want.length && want.indexOf(P.path) < 0) return;
  var html;
  try { html = fs.readFileSync(path.join(ROOT, P.path), 'utf8'); } catch (e) { return; }
  var m = /<script type="text\/markdown" id="source">([\s\S]*?)<\/script>/.exec(html);
  if (!m) return;
  var src = m[1], text = prose(src);
  // 各位置を含む環境のラベル（その語を定義している環境の中は結ばないため）
  var envAt = [], stack = [], pos = 0;
  src.split('\n').forEach(function (ln) {
    var h = /^::: (\w+)(.*)$/.exec(ln);
    if (h) { var lab = /\{#([^ }]+)/.exec(h[2]); stack.push(lab ? lab[1] : null); }
    else if (/^:::\s*$/.test(ln)) stack.pop();
    var cur = stack.filter(Boolean);
    envAt.push({ from: pos, to: pos + ln.length, labels: cur.slice() });
    pos += ln.length + 1;
  });
  function labelsAt(p) { for (var k = 0; k < envAt.length; k++) if (p <= envAt[k].to) return envAt[k].labels; return []; }
  var deps = linker.pageDeps(IDX.backrefs, i, 2).set;
  var done = {};
  linker.scan(text).forEach(function (h) {
    if (done[h.term]) return;
    var l = linker.pick(h.term, i, deps);
    if (!l) return;
    if (labelsAt(h.i).indexOf(l) >= 0) return;          // 定義している環境の中
    var L = IDX.labels[l]; if (!L || L.planned) return;
    done[h.term] = 1;
    var cands = linker.candidates(h.term, i).map(function (x) { return x.l; }).filter(function (x) { return x !== l; });
    var a = Math.max(0, src.lastIndexOf('\n', h.i - 1) + 1), b = src.indexOf('\n', h.i); if (b < 0) b = src.length;
    var line = src.slice(a, b);
    var off = h.i - a, ctx = line.slice(Math.max(0, off - 160), off + h.len + 160);
    out.push({ page: P.path, term: h.term, label: l, others: cands, context: ctx });
  });
});
process.stdout.write(JSON.stringify(out, null, 1));
