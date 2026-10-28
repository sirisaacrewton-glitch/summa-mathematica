# Verification tracker: `01-foundations/02-model-theory/01-elementary-extensions/08-rcf-qe.html`

<!-- source: 01-foundations/02-model-theory/01-elementary-extensions/08-rcf-qe.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main proof (Tarski's theorem via the QE test, root-count transfer, and Rolle/sign-constancy) is sound, and the corollaries (completeness, model completeness, o-minimality, decidability) are properly justified. The only genuine issue is in the supplement: the attribution of model completeness and o-minimality of $\mathbb{R}_{\exp}$ to Wilkie (1996) is imprecise—Wilkie proved o-minimality, and model completeness follows via Macintyre–Wilkie–Marker. The Hilbert 17th problem and Tarski–Seidenberg remarks are essentially correct.

## Issues

### ISSUE-0001 [Open] Exponential field is not known to be model complete / o-minimal in the stated form
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement states that $(\mathbb{R},+,\cdot,<,\exp)$ has no quantifier elimination but is model complete and o-minimal (Wilkie 1996). Wilkie's theorem is that the theory of $(\mathbb{R},+,\cdot,<,\exp)$ is o-minimal (and model complete). However, the claim that it 'has no quantifier elimination' is stated without qualification; more importantly, the attribution conflates: Wilkie (1996) proved o-minimality of $\mathbb{R}_{\exp}$; model completeness follows from o-minimality plus QE in an expanded language (via the Macintyre–Wilkie–Marker work). The statement as written attributes both model completeness and o-minimality directly to Wilkie 1996, which is imprecise. Also, o-minimality of $\mathbb{R}_{\exp}$ is a deep theorem, and the parenthetical attribution should be to Wilkie for o-minimality.
- **Proposed fix:** 指数関数を加えた $(\mathbb{R},+,\cdot,<,\exp)$ は量化子消去をもたないが、o 極小である（ウィルキー、1996）。o 極小性からモデル完全性も従う（Macintyre–Wilkie–Marker による）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Hilbert's 17th problem attribution and model-completeness proof
- **Category:** Supplement/remark error
- **Location:** supplement / ヒルベルトの第 17 問題
- **Detail:** The supplement says 'a proof using model completeness is known (Robinson)'. Artin (1927) proved Hilbert's 17th problem using the real Nullstellensatz / Artin–Schreier theory of real closed fields, not model completeness. Abraham Robinson gave a model-theoretic proof of Hilbert's 17th problem via model completeness of RCF, so the attribution to Robinson is essentially correct, but the phrasing 'is known (Artin, 1927)' followed by 'a proof using model completeness is known (Robinson)' is acceptable. However, the statement 'every polynomial nonnegative everywhere on a real closed field is a sum of squares of rational functions' requires the polynomial to be nonnegative on the whole field; this is correct. The issue is minor; the attribution is essentially fine. No change strictly needed, but the claim that Artin's proof is separate from model completeness is correct.
- **Proposed fix:** No change required; optionally clarify that Artin's original proof used the real Nullstellensatz and Robinson later gave a model-completeness-based proof.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Tarski–Seidenberg as 'projection of semialgebraic is semialgebraic'
- **Category:** Supplement/remark error
- **Location:** supplement / 多変数の定義可能集合
- **Detail:** The supplement says the projection of a semialgebraic set is semialgebraic (Tarski–Seidenberg) and that this is quantifier elimination restated geometrically. This is correct. The claim that semialgebraic sets admit finite cell decomposition is also correct. No error.
- **Proposed fix:** No change required.
- **Reported:** 2026-10-28 (10fede1)
