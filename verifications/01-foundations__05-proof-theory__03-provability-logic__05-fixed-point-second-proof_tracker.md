# Verification tracker: `01-foundations/05-proof-theory/03-provability-logic/05-fixed-point-second-proof.html`

<!-- source: 01-foundations/05-proof-theory/03-provability-logic/05-fixed-point-second-proof.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Citation of normality.1 which is not in the label table
- **Category:** Improper link
- **Location:** pt:box-p-or-p / proof Step 2
- **Detail:** The proof cites \ref{logic:normality.1} twice, but the label table only lists logic:normality.2 (theorem 1.13 正規性). If logic:normality.1 is a separate item of that theorem it may be fine, but as given the citation target is not confirmed to state the rule used (⊢ C→D implies ⊢ □C→□D). This is a mechanical-looking link to an unverified item.
- **Proposed fix:** Cite the item that actually states the rule: replace \ref{logic:normality.1} with the correct label (e.g. \ref{logic:normality.2} if that item contains the monotonicity/necessitation rule ⊢ C→D ⇒ ⊢ □C→□D), or add the missing label to the table.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that the upper bound cannot be the modal degree of A
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The supplement says \ref{pt:fixed-point-degree} shows the upper bound cannot be taken to be the modal degree of A. But the modal degree of A is at most the number of □-headed subformulas (each □ adds one level), so a bound n = #(□-subformulas) is already ≥ d(A); the proposition only shows the fixed point's degree can exceed d(A), not that n cannot be replaced by d(A) in the sense claimed. The statement as written is imprecise/overstated about what pt:fixed-point-degree establishes.
- **Proposed fix:** Rephrase: 'The bound n is the number of □-headed subformulas of A, not the modal degree of A; \ref{pt:fixed-point-degree} shows that the modal degree of a fixed point can exceed the modal degree of A, so no bound in terms of d(A) alone (smaller than n) is available in general.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Bisimulation characterization stated with wrong depth parameter
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果
- **Detail:** The supplement asserts that 'being indistinguishable by formulas of depth m' is equivalent to 'the existence of an m-step bisimulation'. The standard result is that agreement on all formulas of modal degree ≤ m corresponds to the existence of a level-(m+1) (or m-fold) bisimulation in the precise Hennessy–Milner sense; the exact indexing and the requirement that the vocabulary be finite must be stated. As written the depth parameter is off by one and the finite-vocabulary hypothesis is only implicit.
- **Proposed fix:** State precisely: 'For a finite set of propositional variables, two worlds satisfy the same formulas of modal degree ≤ m iff they are related by an m-step (level-m) bisimulation, where an m-step bisimulation relates worlds whose m-fold unfolding agrees.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Unverified claim about Boolos's open question
- **Category:** Unsupported fact
- **Location:** remark 開いた問い
- **Detail:** The remark attributes to Boolos (Chapter 8) the question of finding an interesting necessary and sufficient condition for B to have a fixed point, and says the resolution status is unconfirmed. This is a historical/attribution claim stated without proof; if misattributed it is an unsupported fact. It should be either verified or softened.
- **Proposed fix:** Either cite the exact passage in Boolos, The Logic of Provability, Ch. 8, or soften to: 'Boolos discusses (Ch. 8) the problem of characterizing which formulas have fixed points; we do not address the general characterization here.'
- **Reported:** 2026-10-28 (10fede1)
