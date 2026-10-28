# Verification tracker: `01-foundations/06-category-theory/07-operads/03-little-intervals.html`

<!-- source: 01-foundations/06-category-theory/07-operads/03-little-intervals.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definition, proposition, theorem, proof, and the fundamental group theorem) is logically sound: the operad structure, contractibility of components, the action of C_1 on ΩX, and the group structure on π_0 ΩX are correctly argued with appropriate citations. The issues found are confined to the remark and supplement: the recognition theorem is stated more strongly than the literature supports (missing cofibrancy/CW hypotheses), the Novikov–Boone supplement loosely calls the fundamental group 'non-computable' when it is the word problem that is undecidable, and the hypcheck comment about allowing all embeddings is misleading since components would then fail to be contractible.

## Issues

### ISSUE-0001 [Open] Recognition theorem statement is imprecise/overstated
- **Category:** Supplement/remark error
- **Location:** remark cat:sec-lin-loops (A_∞ 構造とモーア・ループ), item 3
- **Detail:** The recognition theorem as stated ("arc-connected Y with a C_1-algebra structure and π_0 Y a group ⟹ Y ≃ Ω Z for some Z") is not correct as stated. The May/Stasheff recognition theorem requires more: typically Y must be a grouplike algebra over an A_∞ (or E_1) operad AND satisfy additional cofibrancy/well-pointedness or be of the homotopy type of a CW complex; more importantly, the classical recognition theorem for A_∞ spaces gives a delooping only under the grouplike condition together with the space being (homotopy equivalent to) a CW complex / cofibrant algebra. Simply "arc-connected + π_0 a group" is insufficient in general (e.g. non-CW or non-cofibrant algebras). The statement is stated more strongly than the literature supports.
- **Proposed fix:** State: "Recognition theorem (Stasheff, May): if Y is a grouplike A_∞-space (equivalently a grouplike algebra over C_1) whose underlying space has the homotopy type of a CW complex (or is a cofibrant algebra), then Y is homotopy equivalent to a loop space ΩZ."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Novikov–Boone and 4-manifold claim imprecise
- **Category:** Supplement/remark error
- **Location:** supplement cat:sec-lin-pi1 (計算の観点)
- **Detail:** The supplement says every finitely presented group appears as the fundamental group of a 4-manifold and that the word problem is undecidable (Novikov–Boone). The 4-manifold realization is correct (every finitely presented group is π_1 of a closed 4-manifold), and Novikov–Boone undecidability is correct. However the phrasing "有限単体複体の基本群は有限表示群で、すべての有限表示群が（4 次元多様体の基本群として）現れ" is fine, but the claim that the word problem is undecidable "in general" is correct. The only imprecision: it says "基本群は一般には計算不可能な対象" — this is a loose statement; the fundamental group itself is a computable invariant of a finite complex, what is undecidable is the word problem. This is an overstatement.
- **Proposed fix:** Rephrase: "The fundamental group of a finite simplicial complex is a finitely presented group, and every finitely presented group arises as π_1 of a closed 4-manifold; the word problem for finitely presented groups is undecidable in general (Novikov–Boone)."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Hypcheck comment on allowing all embeddings is imprecise
- **Category:** Supplement/remark error
- **Location:** hypcheck cat:sec-lin-loops, bullet on affineness
- **Detail:** The hypcheck says: "If one allows all continuous embeddings, composition is still closed but the proof of contractibility of components becomes harder." This is imprecise: if one allows all continuous embeddings (not necessarily affine), the resulting operad is not the little intervals operad and its components are generally NOT contractible in the same way; in fact the space of all embeddings is not equivalent to C_1. The claim that composition is closed is true, but the statement that contractibility is merely "harder" is misleading — the components are not contractible for arbitrary embeddings, so the analogy fails.
- **Proposed fix:** Replace with: "Restricting to affine embeddings is what makes each component convex and hence contractible; for arbitrary continuous embeddings the components need not be contractible."
- **Reported:** 2026-10-28 (10fede1)
