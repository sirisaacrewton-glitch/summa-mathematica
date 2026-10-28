# Verification tracker: `02-algebra/05-field-theory/04-transcendental-extensions/02-separably-generated.html`

<!-- source: 02-algebra/05-field-theory/04-transcendental-extensions/02-separably-generated.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Derivation dimension equals transcendence degree only for separably generated extensions
- **Category:** Supplement/remark error
- **Location:** supplement / 微分による特徴付け
- **Detail:** The supplement states that for a separably generated L/K, dim_L Der_K(L,L) equals the transcendence degree. This is correct for finitely generated separably generated extensions, but the statement as written omits the finite generation hypothesis. More importantly, the parenthetical claim that 'the partial derivatives with respect to each element of a separating transcendence basis form a basis' is imprecise: the derivations ∂/∂b_{i} on K(B) extend to L, but they do not by themselves form a basis of Der_K(L,L) unless one accounts for the algebraic part; the correct statement is that dim_L Der_K(L,L) = trdeg_K L for finitely generated separably generated L/K, and the derivations corresponding to a separating transcendence basis are linearly independent but span only after extension. The claim is essentially correct in the finitely generated case but stated without the finite generation hypothesis.
- **Proposed fix:** For a finitely generated separably generated extension $L/K$, $\dim_{L}\operatorname{Der}_{K}(L,L)=\operatorname{trdeg}_{K}L$; the derivations extending $\partial/\partial b_{i}$ for a separating transcendence basis $B=\{b_{1},\dots,b_{d}\}$ are linearly independent over $L$ and, together with the algebraic part, span $\operatorname{Der}_{K}(L,L)$.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] MacLane criterion attribution and statement
- **Category:** Supplement/remark error
- **Location:** supplement / マクレーンの判定法
- **Detail:** The supplement attributes to MacLane (1939) the criterion that a finitely generated extension L/K of a field K of characteristic p is separably generated iff L and K^{1/p} are linearly disjoint over K. The linear disjointness criterion for separable generation is standard, but the precise attribution to MacLane 1939 and the exact form (linear disjointness with K^{1/p} in a common algebraic closure) should be verified; MacLane's 1939 paper 'Modular fields' treats separable generation and the criterion is often attributed to him, so this is likely acceptable. However, the statement as given omits that L must be finitely generated (which is stated) and that the linear disjointness is over K inside a common extension; the phrase '共通の代数閉包の中で' is fine. This is borderline; I flag it only for the attribution precision.
- **Proposed fix:** State: 'A finitely generated extension $L/K$ of a field $K$ of characteristic $p$ is separably generated if and only if $L$ and $K^{1/p}$ are linearly disjoint over $K$ (inside a common algebraic closure). This is MacLane's criterion (MacLane, 1939).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Summary claims decomposition into finite separable and purely transcendental
- **Category:** Supplement/remark error
- **Location:** supplement / 体論の系列のまとめ
- **Detail:** The summary says transcendental extensions are reduced to algebraic extension theory via 'the decomposition into a finite separable extension and a purely transcendental extension' (有限次分離拡大と純超越拡大への分解). This is only true for finitely generated extensions of a perfect field (the main theorem), and even then L/K(B) is a finite separable algebraic extension, not necessarily that L is a finite separable extension of a purely transcendental one in the naive sense — the decomposition is L ⊃ K(B) purely transcendental and L/K(B) finite separable. The statement as written overstates: it omits the perfect field and finite generation hypotheses, and '有限次' (finite degree) is only guaranteed when L is finitely generated over K(B), which holds since L is finitely generated over K.
- **Proposed fix:** For a finitely generated extension $L/K$ of a perfect field $K$, one has $K\subset K(B)\subset L$ with $K(B)/K$ purely transcendental and $L/K(B)$ finite separable; this reduces the study of such transcendental extensions to algebraic extension theory.
- **Reported:** 2026-10-28 (8ccef3d)
