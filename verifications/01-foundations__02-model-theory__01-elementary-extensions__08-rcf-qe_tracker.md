# Verification tracker: `01-foundations/02-model-theory/01-elementary-extensions/08-rcf-qe.html`

<!-- source: 01-foundations/02-model-theory/01-elementary-extensions/08-rcf-qe.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem, its proof, and the corollaries are logically sound: the QE test is applied correctly, the two cases (nonzero gcd vs. all-zero) are handled, and the appeal to root-count transfer, sign-constancy, Rolle, and Cauchy bound is legitimate. The lemmas (common fraction field, literal normal form) are correct. The supplements are mostly accurate; the only borderline point is the Wilkie sentence, which conflates the non-QE observation with Wilkie's o-minimality/model-completeness result and states it without citation, but it is not false. I found no genuine logical gap, missing hypothesis, overpowered theorem, improper link, or false stated fact worth reporting with high confidence.

## Issues

### ISSUE-0001 [Open] Wilkie: exp field is model complete but not known to be o-minimal via QE claim
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement states that $(\mathbb{R},+,\cdot,<,\exp)$ 'has no quantifier elimination but is model complete and o-minimal (Wilkie, 1996)'. Wilkie's theorem indeed gives o-minimality (and model completeness) of $\mathbb{R}_{\exp}$, and it is true that the theory does not admit quantifier elimination in the language with exp (a standard fact, since exp is not definable by QE in that language / the field is not QE in that signature). However the phrasing '量化子消去をもたないが、モデル完全で o 極小' attributes all three to Wilkie 1996; the non-QE part is a separate observation, and more importantly the statement as written is acceptable. The real issue: it is stated as a bare fact without proof and without citation, and the non-quantifier-elimination claim is not attributed. This is a minor imprecision rather than a falsehood.
- **Proposed fix:** 指数関数を加えた $(\mathbb{R},+,\cdot,<,\exp)$ は（この言語では）量化子消去をもたないが、ウィルキー（1996）によりモデル完全かつ o 極小であることが知られている。
- **Reported:** 2026-10-28 (8ccef3d)
