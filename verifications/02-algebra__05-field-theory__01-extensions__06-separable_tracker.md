# Verification tracker: `02-algebra/05-field-theory/01-extensions/06-separable.html`

<!-- source: 02-algebra/05-field-theory/01-extensions/06-separable.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is logically sound: the proofs of the separability criterion, perfect-field theorem, separable-degree properties, purely inseparable proposition, and primitive element theorem all check out, and the hypcheck counterexample (F_p(s,t) with p-th roots) is correct. The only genuine issue is a slightly loose statement in the supplement identifying L⊗_K Ω with Ω^{[L:K]} without restricting to the separable case; the reducedness criterion itself is correct. No missing hypotheses, improper links, or unsupported facts were found.

## Issues

### ISSUE-0001 [Open] Separability characterized by reducedness of L⊗_K Ω is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement claims `L/K separable ⇔ L⊗_{K}Ω is reduced (in fact Ω^{[L:K]})`. The reducedness criterion is correct, but the parenthetical identification `L⊗_{K}Ω ≅ Ω^{[L:K]}` holds only when L/K is separable (then it is a product of [L:K] copies of Ω). The sentence as written attaches the isomorphism to the whole equivalence, which is fine only in the separable direction; more importantly, the cited `ring:tensor-not-reduced` is about reducedness not being preserved by tensor products, which supports the non-separable direction (nilpotents appear) but does not establish the separable case. The claim is essentially correct but stated loosely; the isomorphism part should be restricted explicitly to the separable case.
- **Proposed fix:** テンソル積の言葉では、$L/K$ が分離的 $\iff L\otimes_{K}\Omega$ が被約であり、分離的なときは実際 $L\otimes_{K}\Omega\cong\Omega^{[L:K]}$ となる。非分離なら冪零元が現れる（\ref{ring:tensor-not-reduced}。\ref{fld:page-etale-algebras} で扱う）。
- **Reported:** 2026-10-28 (8ccef3d)
