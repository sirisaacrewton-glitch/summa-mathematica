# Verification tracker: `01-foundations/06-category-theory/07-operads/01-loops-suspensions.html`

<!-- source: 01-foundations/06-category-theory/07-operads/01-loops-suspensions.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems, proofs, and hypchecks are logically sound: the smash–hom adjunction, the suspension–loop adjunction, the one-point-compactification smash lemma, and the sphere-suspension proposition are correctly argued with appropriate hypotheses (local compact Hausdorff for $Y$, compact Hausdorff for $S^{1}$). The problems lie in the supplement: it incorrectly claims the smash product in $\mathbf{Top}_{*}$ is not associative (it is associative up to homeomorphism; what fails is the closed monoidal structure), and it overstates that $-\wedge Y$ has no right adjoint for non-locally-compact $Y$ without justification. Both should be corrected.

## Issues

### ISSUE-0001 [Open] Smash product in Top_* is not associative — overstated/incorrect claim
- **Category:** Supplement/remark error
- **Location:** supplement, 「前提を変えると」
- **Detail:** The supplement says 「$\mathbf{Top}_{*}$ ではスマッシュ積は一般には結合的でないことが知られている」. This is a well-known false statement: the smash product of pointed spaces is associative up to canonical (pointed) homeomorphism, $(X\wedge Y)\wedge Z\cong X\wedge(Y\wedge Z)$, since both are the quotient of $X\times Y\times Z$ collapsing the union of the coordinate subspaces. What fails in $\mathbf{Top}_{*}$ is not associativity but the *closed* symmetric monoidal structure (the adjunction $-\wedge Y\dashv\mathrm{Map}_{*}(Y,-)$ fails for non-locally-compact $Y$). So the claim is a genuine error.
- **Proposed fix:** Replace with: 「一方、$\mathbf{Top}_{*}$ ではスマッシュ積は（標準的な同相の意味で）結合的かつ対称であるが、$Y$ が局所コンパクトでないと $-\wedge Y\dashv\mathrm{Map}_{*}(Y,-)$ が成り立たないため、閉対称モノイダル構造にはならない（ここでは確かめていない）。」
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that $-\wedge Y$ has no right adjoint for non-locally-compact $Y$ is too strong
- **Category:** Supplement/remark error
- **Location:** supplement, 「前提を変えると」
- **Detail:** The supplement states that if $Y$ is not locally compact, the exponential map is not generally bijective and 「$-\wedge Y$ は右随伴をもたないことがある」. The failure of the exponential bijection does not by itself show that $-\wedge Y$ lacks a right adjoint; the adjunction could fail for other reasons or could conceivably hold with a different right adjoint. The statement is asserted without proof and is stronger than what the cited exponential-law page supports (that page only shows the exponential map fails to be bijective).
- **Proposed fix:** Weaken to: 「$Y$ が局所コンパクトでないと、指数写像は一般に全単射にならず（\ref{top:page-exponential-law}）、上の証明で用いた随伴の構成はそのままでは通用しない。」
- **Reported:** 2026-10-28 (8ccef3d)
