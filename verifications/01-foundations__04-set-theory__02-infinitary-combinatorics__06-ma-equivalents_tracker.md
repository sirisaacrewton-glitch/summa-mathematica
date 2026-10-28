# Verification tracker: `01-foundations/04-set-theory/02-infinitary-combinatorics/06-ma-equivalents.html`

<!-- source: 01-foundations/04-set-theory/02-infinitary-combinatorics/06-ma-equivalents.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Local compactness version: intersection is not dense in general
- **Category:** Supplement/remark error
- **Location:** supplement (局所コンパクト版) after set:ma-equivalents
- **Detail:** The supplement claims that for a locally compact c.c.c. Hausdorff space the intersection of κ dense open sets is dense, arguing by taking a nonempty open O' with compact closure inside a given nonempty open O and applying (d) to cl O'. But (d) only yields that the intersection meets cl O' (i.e. is nonempty in cl O'), not that it meets O'. The intersection of the dense open sets with cl O' is dense open in cl O', so (d) gives a point in cl O' belonging to all V_α, but that point may lie in cl O' \ O', i.e. in the boundary, and hence not in O. So the conclusion 'dense' does not follow; only 'nonempty' (or: the intersection meets every nonempty open set whose closure is compact, which is weaker than density). The stated density claim is not justified by the given argument.
- **Proposed fix:** Replace the claim by the correct statement: '(d) implies that in a locally compact c.c.c. Hausdorff space the intersection of κ dense open sets is nonempty (indeed meets every nonempty open set with compact closure): given a nonempty open O, choose a nonempty open O' with cl O' compact and cl O' ⊆ O; the sets V_α ∩ cl O' are dense open in the compact c.c.c. space cl O', so by (d) their intersection is nonempty, giving a point of O belonging to all V_α.' Do not assert density without an additional argument (e.g. regularity plus the fact that the intersection is itself dense open is not available here).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Counterexample for dropping c.c.c. is misattributed / misstated
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると) after set:ma-equivalents
- **Detail:** The supplement asserts that (ω_1+1)^ω is compact Hausdorff and is a union of ℵ_1 closed nowhere dense sets, citing Kunen Ch. II Exercise 11. As stated this is not correct: (ω_1+1)^ω is a product of compact spaces, hence compact Hausdorff, and it is a union of ℵ_1 closed nowhere dense sets only under additional set-theoretic hypotheses or with a different space; in ZFC the standard example showing that c.c.c. cannot be dropped is a different construction (e.g. 2^{ω_1} or a suitable product), and the bare claim that (ω_1+1)^ω is such a union is not a ZFC theorem in the form stated. The attribution and the exact statement are unreliable as written.
- **Proposed fix:** Either delete the sentence, or replace it by a correct ZFC statement, e.g.: 'Without c.c.c., (d) already fails for κ = ℵ_1: the space 2^{ω_1} is compact Hausdorff and is the union of ℵ_1 closed nowhere dense sets {x : x(α) = 0} (α < ω_1), each with empty interior, so the intersection of the complementary dense open sets is empty.' Verify the exact reference before citing Kunen.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Uniqueness of Boolean completion: h∘i_1 = i_2 is too strong
- **Category:** Supplement/remark error
- **Location:** supplement (一意性) after set:separative-completion
- **Detail:** The supplement states that the Boolean completion is unique up to isomorphism with h∘i_1 = i_2, and gives h(b) = ⋁{i_2(p) : i_1(p) ≤ b}. For a non-separative poset the map i is not injective and does not reflect order, so an isomorphism h with h∘i_1 = i_2 need not exist; what is true in general is uniqueness up to isomorphism of the complete Boolean algebras together with the induced map on the dense images (i.e. h[i_1[P]] = i_2[P] and h respects the completion), or h∘i_1 = i_2 only when the embeddings are the canonical dense ones and one works with the generated subalgebras. The formula h(b) = ⋁{i_2(p) : i_1(p) ≤ b} defines a map but the equality h∘i_1 = i_2 requires i_1 to reflect order (separativity), which is not assumed in the theorem.
- **Proposed fix:** State uniqueness as: 'the complete Boolean algebras B_1, B_2 are isomorphic via h(b) = ⋁{i_2(p) : i_1(p) ≤ b}, and this h satisfies h[i_1[P]] = i_2[P]; if P is separative (so that i_1, i_2 are order-reflecting embeddings) then moreover h∘i_1 = i_2.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Example: ro(P) = {∅, P} claimed for all-consistent posets
- **Category:** Supplement/remark error
- **Location:** example (すべての元が両立する場合) after set:boolean-completion
- **Detail:** The example claims that if any two elements of P are compatible then ro(P) = {∅, P} and i(p) = 1 for all p. This is correct only when P is directed in the strong sense used (every two elements have a common lower bound) AND the topology is the down-set topology; but the argument given ('every open neighbourhood of q meets U, so q ∈ cl U, hence int cl U = P') requires that every q has all its basic neighbourhoods N_q meeting U, which holds since U is nonempty and downward closed and any u ∈ U, q have a common lower bound r ≤ u, q with r ∈ U ∩ N_q. That part is fine. However the conclusion ro(P) = {∅, P} fails if P has a least element or if the topology is not the one described; more importantly, the claim 'i is neither injective nor order-reflecting' together with 'ro(P) = {∅,P}' is only valid when P ≠ ∅ and the compatibility is total; for P = ω_1 with the usual order this is correct. The statement as written is acceptable for the specific example but the general assertion 'ro(P) = {∅, P}' for arbitrary all-compatible P is imprecise when P has isolated points in the down-set topology (e.g. if P has a minimum 0, then N_0 = {0} is open and clopen, giving more than two regular opens).
- **Proposed fix:** Restrict the claim: 'If P is such that every two elements have a common lower bound and P has no minimal element isolated in the down-set topology (e.g. P = ω_1), then ro(P) = {∅, P} and i is constant equal to 1.' Or add the hypothesis that P is directed and has no least element.
- **Reported:** 2026-10-28 (8ccef3d)
