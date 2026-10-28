# Verification tracker: `05-geometry-topology/01-general-topology/01-topological-spaces/05-nets-filters.html`

<!-- source: 05-geometry-topology/01-general-topology/01-topological-spaces/05-nets-filters.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 6 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is mathematically sound overall. The proofs of the net/filter convergence theorems, the correspondence proposition, and the ultrafilter cluster point theorem are correct, and the hypcheck remarks about choice are essentially accurate. The only genuine issue is a supplement remark claiming that the forward direction of the net-closure characterization 'generally fails without choice', which overstates the role of choice: the statement is provable in ZF, only the particular proof uses choice. All other supplements, examples, and stated facts check out.

## Issues

### ISSUE-0001 [Open] Claim that net-closure '⇒' fails without choice is overstated
- **Category:** Supplement/remark error
- **Location:** supplement / 選択公理 bullet
- **Detail:** The supplement says the '⇒' direction of \ref{top:net-closure} 'は、選択なしでは一般に成り立たない形をしている（ネットの点を選ぶ必要がある）'. This is misleading. The forward direction (x∈cl A ⇒ some net in A converges to x) is provable in ZF: one can use the directed set of pairs (N, a) with a∈N∩A ordered appropriately, or use the neighborhood filter itself as index without choosing points. The statement that it 'generally fails without choice' is not supported; only the specific construction that picks one point per neighborhood uses choice. The contrast with the filter formulation is fine, but the claim that the theorem direction fails without choice is an overstatement.
- **Proposed fix:** Replace with: 'The proof above of \ref{top:net-closure}「⇒」picks one point x_{N} from each N∩A, which uses the axiom of choice. However, the statement itself is provable in ZF (e.g. index the net by pairs (N,a) with a∈N∩A). The filter reformulation x∈\overline{A} ⇔ {N∩A : N∈\mathcal{N}(x)} is a filter base is choice-free and makes the point transparent.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Moore–Smith attribution date and Kelley remark
- **Category:** Supplement/remark error
- **Location:** supplement / 類似の概念
- **Detail:** The text states 'ネットの考え方は、ムーア–スミスの収束論（1922）に由来し'. Moore–Smith convergence is usually dated to Moore and Smith's 1922 paper 'A general theory of limits' — this is correct. However the phrasing 'ケリーの教科書で標準になった' is acceptable. No error here; but the claim that filters are due to Cartan (1937) is correct (Cartan 1937). This bullet is fine.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] ω_{1}+1 example: 'countable set's sup is below ω_{1}'
- **Category:** Supplement/remark error
- **Location:** supplement / 点列では足りない例
- **Detail:** The parenthetical '（可算集合の上限は \omega_{1} 未満、\ref{set:page-cofinality}）' is correct for countable subsets of ω_{1} (since ω_{1} is regular uncountable, a countable set of countable ordinals is bounded below ω_{1}). This is fine. The example itself is correct: ω_{1} is in the closure of [0,ω_{1}) but no sequence of countable ordinals converges to ω_{1}. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Hypcheck claim that cluster-subnet theorem holds in ZF
- **Category:** Supplement/remark error
- **Location:** top:cluster-subnet / hypcheck
- **Detail:** The hypcheck says 'この定理は \ZF で成り立つ' for the equivalence 'x is a cluster point of a net iff some subnet converges to x'. The '⇒' direction constructs E = {(d,N): x_{d}∈N} and needs, for directedness, to find d≥d_{3} with x_{d}∈N_{1}∩N_{2}; this is just an existence statement (no choice function needed), and the upper bound (d, N_{1}∩N_{2}) is exhibited. The '⇐' direction also only uses existence. So the ZF claim is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Filter convergence definition: neighborhood filter is a filter requires N(x) nonempty and closed under finite intersections
- **Category:** Supplement/remark error
- **Location:** top:filter-convergence
- **Detail:** The definition asserts '近傍系 \mathcal{N}(x) はフィルターで'. This is true provided filters are required to be nonempty and not contain ∅, and neighborhoods are closed under finite intersections and upward closed — standard. Fine.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Riemann sum as a net over partitions
- **Category:** Unsupported fact
- **Location:** example 3
- **Detail:** The example says the Riemann sum over partitions (with sample points) ordered by refinement is a net on ℝ and the Riemann integral is its limit. This is essentially correct for Riemann-integrable functions: the directed set of tagged partitions ordered by refinement, and the net of Riemann sums converges to the integral iff the function is Riemann integrable. The statement is acceptable as stated (it says 'リーマン積分はその極限である' which presumes integrability). Minor imprecision but not a genuine error.
- **Proposed fix:** Optionally add 'for a Riemann-integrable function' to be precise.
- **Reported:** 2026-10-28 (10fede1)
