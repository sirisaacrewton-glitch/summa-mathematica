# Verification tracker: `05-geometry-topology/01-general-topology/05-advanced-properties/04-quotient-products.html`

<!-- source: 05-geometry-topology/01-general-topology/05-advanced-properties/04-quotient-products.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect claim that −×Z being a right adjoint makes q×1_Z a quotient map
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says that the condition that Z is locally compact Hausdorff is deeply related to '−×Z having a right adjoint (mapping space C_c(Z,−))', and that 'the left adjoint preserves colimits, in particular coequalizers (quotients), so q×1_Z becomes a quotient map'. This is confused. If −×Z is a left adjoint, then it preserves colimits, so it sends the coequalizer diagram defining q to a coequalizer diagram, which is exactly the statement that q×1_Z is a quotient map. But the text calls −×Z a right adjoint and then says 'the left adjoint preserves colimits'. Moreover, in the exponential law, the functor −×Z is the LEFT adjoint of C_c(Z,−), not the right adjoint. So the parenthetical identification of −×Z as a right adjoint is wrong, and the argument as written is internally inconsistent.
- **Proposed fix:** The condition that Z is locally compact Hausdorff is equivalent to the functor $-\times Z$ having a right adjoint (the mapping space $C_{c}(Z,-)$), i.e. to $-\times Z$ being a left adjoint. A left adjoint preserves colimits, in particular coequalizers (quotients), so $q\times1_{Z}$ is a quotient map.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Kuratowski theorem stated for Hausdorff spaces but proof needs T1; 'Y T1 suffices' is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement states the converse direction as: for a continuous map f between Hausdorff spaces, f is perfect iff f×1_Z is closed for all Z, and adds 'Y being T1 suffices'. The page's own theorem (top:kuratowski-perfect) is stated with the hypothesis that Y is T1 (not Hausdorff), and the proof indeed only uses T1 (to make fibers closed). Saying 'Y being T1 suffices' as a parenthetical after stating the Hausdorff version is at best redundant and at worst suggests the Hausdorff hypothesis is the main one with T1 an add-on. More importantly, the statement as written omits that f must be a continuous surjection (perfect maps are by definition surjective); without surjectivity the equivalence fails. This is an imprecise/overstated restatement.
- **Proposed fix:** Conversely to \ref{top:perfect-times-identity.1}: for a continuous surjection $f\colon X\to Y$ with $Y$ a $T_{1}$ space, $f$ is perfect iff $f\times1_{Z}$ is closed for every space $Z$ (Kuratowski's theorem, \tref{top:kuratowski-perfect}).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that arbitrary products of perfect maps are perfect attributed to Komiyama problem 6.15
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement asserts 'it is also known that arbitrary products of perfect maps are perfect (Komiyama problem 6.15; for infinite products one uses Tychonoff's theorem)'. This is a stated-only fact with a specific attribution. While the statement (arbitrary products of perfect maps are perfect) is true, the attribution to 'problem 6.15' together with the parenthetical about Tychonoff is a side claim that is not verified anywhere on the page and is stated more strongly than the cited source supports (the page's own reference note cites 問題 6.15 for a different purpose). Since it is an unsupported attribution in a supplement, it should either be proved or softened.
- **Proposed fix:** It is also true that arbitrary products of perfect maps are perfect (the product of closed maps is closed, and a product of compact fibers is compact by Tychonoff's theorem).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Remark: metric cone distance formula and continuity claim
- **Category:** Supplement/remark error
- **Location:** remark (top:cone-not-metrizable)
- **Detail:** The remark states that Komiyama considers the metric cone with distance d~([x,s],[y,t]) = min{1−s,1−t} d(x,y) + |s−t| and notes that the identity map from the topological cone to the metric cone is a continuous bijection but not generally a homeomorphism. As written, the formula min{1−s,1−t} d(x,y) + |s−t| is not a metric on the cone in general: it fails to identify the apex properly unless one also collapses, and more importantly for the apex (s=t=1) the term min{1−s,1−t}=0 gives d~=0 for all x,y, which is correct for the apex, but the formula as given does not define a pseudometric that separates points of the base correctly without the standard normalization; the standard formula is d~([x,s],[y,t]) = (1−max{s,t}) d(x,y) + |s−t| or similar. The stated formula min{1−s,1−t} is asymmetric in a way that does not yield a metric (it is not symmetric under swapping the two points when s≠t in the first factor combined with |s−t|). This is an imprecise/incorrect formula in a remark.
- **Proposed fix:** Use the standard formula $\tilde d([x,s],[y,t]) = (1-\max\{s,t\})\,d(x,y) + |s-t|$ (or the symmetric form $\min\{1-s,1-t\}\,d(x,y)+|s-t|$ only after verifying symmetry), and state that the identity from the topological cone to the metric cone is a continuous bijection that need not be a homeomorphism.
- **Reported:** 2026-10-28 (10fede1)
