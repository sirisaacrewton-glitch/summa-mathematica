# Verification tracker: `01-foundations/03-computation/03-advanced-computability/13-low-basis.html`

<!-- source: 01-foundations/03-computation/03-advanced-computability/13-low-basis.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 6 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Step 3: q_e ∈ X' iff accept forced is not justified
- **Category:** Logical gap
- **Location:** comp:low-basis / Step 3
- **Detail:** The proof asserts `q_{e} \in X' \iff` accept was forced at stage e. But `q_{e} \in X'` means `M^{X}` halts on `w`. Step 1 only shows: if accept was forced then `M^{X}` accepts `w` (halts), and if reject was forced then `M^{X}` does not accept `w`. The reverse direction (if `M^{X}` halts then accept was forced) is not established. Indeed, if reject was forced, `M^{X}` does not accept `w`, but `M^{X}` could still halt and reject `w` (output 0), in which case `q_{e} \in X'` holds even though reject was forced. So the biconditional fails as stated; the argument needs the standard trick of considering both the halting question and its outcome, or using that `M^{X}` halting on `w` is itself a Σ_1 fact decidable from ∅' via the tree.
- **Proposed fix:** Replace the last sentence of Step 3 with: For each `q_{e}=\langle M,w\rangle`, whether `M^{X}` halts on `w` is a Σ_1 statement about `X`, hence decidable from `X'`; but we must show it is decidable from ∅'. Use the standard argument: at stage e, ask ∅' whether `U_{e}` is infinite. If infinite, force non-halting, so `q_{e}\notin X'`. If finite, force halting, so `q_{e}\in X'`. In both cases the membership `q_{e}\in X'` is determined by the ∅'-computable answer to the Π_1 question, so `X'\le_{\mathrm{T}}\varnothing'`. (Note: when accept is forced, `M^{X}` halts, so `q_{e}\in X'`; when reject is forced, `M^{X}` does not halt on `w` by the use principle, so `q_{e}\notin X'`. The biconditional must be stated as `q_{e}\in X' \iff` accept forced, justified by the use principle in the reject case, not merely by 'does not accept'.)
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Step 1 reject case: non-acceptance vs non-halting
- **Category:** Logical gap
- **Location:** comp:low-basis / Step 1
- **Detail:** In the reject case, Step 1 concludes only that `M^{X}` does not accept `w`. To conclude `q_{e}\notin X'` (i.e. `M^{X}` does not halt on `w`), one needs that `M^{X}` does not halt at all. This follows from the use principle: if `M^{X}` halted, it would halt within some `n` steps using only `X\restr n`, so `X\restr n\notin U_{e}`, contradicting `X\restr n\in U_{e}` for all n. This argument is missing and is essential for Step 3.
- **Proposed fix:** Add to Step 1 (reject case): Since `X\restr n\in U_{e}` for all n, if `M^{X}` halted on `w` it would do so within some `n` steps using only `X\restr n` (use principle), giving `X\restr n\notin U_{e}`, a contradiction. Hence `M^{X}` does not halt on `w`, so `q_{e}\notin X'`.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] comp:jump-properties.2 cited but not in label table
- **Category:** Improper link
- **Location:** comp:low-basis-corollary / proof
- **Detail:** The corollary proof cites `\ref{comp:jump-properties.2}`, but the label table only lists `comp:jump-properties.3`. The reference to item 2 of ジャンプの性質 is not among the provided cited labels, so its content cannot be verified; the claim `\varnothing''\le_{\mathrm{T}}\varnothing'` is false, which is what the citation is meant to contradict.
- **Proposed fix:** Verify that `comp:jump-properties.2` states `\varnothing''\not\le_{\mathrm{T}}\varnothing'` (the jump is strictly increasing / `\varnothing'<_{\mathrm{T}}\varnothing''`). If so, keep the citation; otherwise cite the correct item establishing `\varnothing''\not\le_{\mathrm{T}}\varnothing'`.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Hyperimmune-free path claim overstated
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement states that one can also obtain a path that is 'hyperimmune-free' (ハイパー免疫自由). The standard result (Jockusch–Soare) is that every nonempty Π^0_1 class (infinite computable tree) has a hyperimmune-free (and even hyperimmune-free low) path, but the phrasing here lists it as an additional separate property alongside 'avoiding a given noncomputable C', which conflates distinct results. More importantly, the claim that a path avoiding a given noncomputable set C can always be found is false in general: if C is itself a path forced by the tree (e.g., the tree has a unique path equal to C), no path avoids C. The avoidance result requires C to be noncomputable and the tree to have continuum many paths, or similar hypotheses.
- **Proposed fix:** Correct to: 'By relativization, every B-computable infinite binary tree has a path X with X' ≤_T B'. Moreover, every infinite computable binary tree has a hyperimmune-free path (Jockusch–Soare); and if the tree has continuum many paths, then for any noncomputable C there is a path not computing C (a basis/avoidance result requiring the tree to be 'rich enough').' State the avoidance result with its necessary hypothesis (e.g. the tree has 2^{ℵ_0} paths, or C is not itself a path of the tree).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Low basis as 'best possible' answer overstated
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The sentence 'low is one best answer to how simple a path can be made' is imprecise: low is an upper bound on the jump, not a simplicity notion of the path itself; a low path can be computationally complex (e.g. of high degree below ∅' is impossible, but low paths can still be non-computable and even of various degrees). Calling it 'the best answer' overstates; the precise statement is that low is the strongest jump-bounding property obtainable uniformly from ∅'.
- **Proposed fix:** Rephrase: 'Since a computable path cannot generally be obtained, the low basis theorem gives a sharp uniform bound on the jump of a path: one can always find a path X with X' ≤_T ∅', and this bound on the jump cannot in general be improved to X ≤_T ∅.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] WKL_0 does not prove ACA_0 attribution
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says that from the low basis theorem one builds an ω-model of WKL_0 all of whose elements are low, and that this shows WKL_0 does not prove ACA_0. The ω-model of low sets does satisfy WKL_0 and not ACA_0, which is correct in substance, but the claim 'all elements are low' requires that the model be closed under the relevant operations; the standard construction gives an ω-model of WKL_0 consisting of low sets, and this does show WKL_0 ⊬ ACA_0. This is essentially correct but the phrasing 'all elements are low' should specify the model is the collection of low sets (which is closed under Turing reducibility and join, hence an ω-model).
- **Proposed fix:** Clarify: 'The collection of low sets forms an ω-model of WKL_0 (it is closed under ≤_T and join), and since ∅' is not low, this model does not satisfy ACA_0; hence WKL_0 does not prove ACA_0.'
- **Reported:** 2026-10-28 (10fede1)
