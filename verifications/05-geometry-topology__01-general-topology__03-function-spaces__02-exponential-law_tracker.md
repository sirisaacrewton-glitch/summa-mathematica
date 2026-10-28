# Verification tracker: `05-geometry-topology/01-general-topology/03-function-spaces/02-exponential-law.html`

<!-- source: 05-geometry-topology/01-general-topology/03-function-spaces/02-exponential-law.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, theorems, proofs, hypcheck) is logically sound: the tube lemma for compact subsets, the exponential map continuity, evaluation continuity, bijectivity, the finer-than-compact-open proposition, and the exponential law proof all check out, and the hypcheck correctly identifies where local compactness and Hausdorffness are used. The genuine problems are confined to the supplement: the adjunction direction is stated backwards ($-\times X$ is the left adjoint, not $C_{c}(X,-)$), and the Arens–Dugundji existence claim is stated more strongly than warranted. The example environments (uniform/pointwise topologies) and the $\mathbb{Q}$ counterexample are correct.

## Issues

### ISSUE-0001 [Open] Adjunction direction reversed in supplement
- **Category:** Supplement/remark error
- **Location:** supplement, '高い視点から：指数法則は随伴'
- **Detail:** The supplement claims that for locally compact Hausdorff $X$ the functor $-\times X$ is left adjoint to $C_{c}(X,-)$, i.e. $\mathbf{Top}(Z\times X,Y)\cong\mathbf{Top}(Z,C_{c}(X,Y))$. This is the wrong direction: the bijection $\mathbf{Top}(Z\times X,Y)\cong\mathbf{Top}(Z,C_{c}(X,Y))$ exhibits $-\times X$ as the LEFT adjoint and $C_{c}(X,-)$ as the RIGHT adjoint. The stated hom-set isomorphism is correct, but the sentence '$-\times X$ が $C_{c}(X,-)$ の左随伴である' is backwards. (Also, strictly, the bijection holds on the subcategory where the exponential law applies, but the direction error is the main issue.)
- **Proposed fix:** Replace with: '関手 $-\times X$ が $C_{c}(X,-)$ の左随伴であり、$C_{c}(X,-)$ が $-\times X$ の右随伴であること（$\mathbf{Top}(Z\times X,Y)\cong\mathbf{Top}(Z,C_{c}(X,Y))$）を言っている。評価写像はこの随伴の余単位にあたる。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Arens–Dugundji attribution for existence of admissible-and-splitting topology
- **Category:** Supplement/remark error
- **Location:** supplement, '似た定理'
- **Detail:** The supplement states that a topology both making $\Phi(f)$ always continuous (splitting) and making evaluation continuous (admissible) exists exactly when $X$ is locally compact (Hausdorff case), attributed to 'Arens–Dugundji theory'. The characterization that the compact-open topology is admissible iff $X$ is locally compact Hausdorff is due to Arens (1946) and Dugundji; however the precise statement 'both properties hold iff $X$ locally compact' needs care: the compact-open topology is always splitting, and it is admissible precisely when $X$ is locally compact Hausdorff (for Hausdorff $X$). The phrasing 'ちょうど $X$ が局所コンパクトのとき' is acceptable for Hausdorff $X$, but the claim as written ('両方を満たす位相が存在するのは、ちょうど $X$ が局所コンパクトのとき') is imprecise because a splitting-and-admissible topology can exist even when $X$ is not locally compact (e.g. by taking a finer admissible topology that is still splitting is not automatic, but the existence question is subtle). This is stated more strongly than the literature supports.
- **Proposed fix:** Restrict the claim to the compact-open topology: 'コンパクト開位相が評価写像を連続にする（admissible である）のは、$X$ が局所コンパクトハウスドルフのときに限ることが知られている（Arens–Dugundji）。'
- **Reported:** 2026-10-28 (8ccef3d)
