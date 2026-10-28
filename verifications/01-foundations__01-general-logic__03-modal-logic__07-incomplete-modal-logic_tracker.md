# Verification tracker: `01-foundations/01-general-logic/03-modal-logic/07-incomplete-modal-logic.html`

<!-- source: 01-foundations/01-general-logic/03-modal-logic/07-incomplete-modal-logic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 3

## Summary of the last run

The three improper-link issues are resolved by the corrected label table and the rebuttals are valid. The main remaining problem is the remark claiming H is 'simplest' in variable count, which is stronger than Lewis's theorem supports (ISSUE-0004 remains open). Two further side-comment issues are flagged: the unverified historical attribution and the imprecise algebraic remark in the supplement. The proofs themselves (Berk, Magari, Cresswell, Lewis) appear logically sound.

## Issues

### ISSUE-0001 [Ignored: Valid Rebuttal] Citation of normality.5 which is not in the label table
- **Category:** Improper link
- **Location:** logic:h-not-lob-closed / Step 1 and Step 3
- **Detail:** Step 1 and Step 3 cite \ref{logic:normality.5}, but the label table only lists logic:normality.3 (theorem 1.13, 正規性). The target logic:normality.5 is not among the cited labels, so the citation cannot be verified against the table and may point to a nonexistent or wrong item. The intended content (distribution of \Box over conjunctions / necessitation inside \Box) is presumably part of the normality theorem, but the specific item is unverified.
- **Proposed fix:** Replace \ref{logic:normality.5} with the correct label from the normality page (e.g. \ref{logic:normality.3} if the needed distributivity/necessitation facts are items of theorem 1.13), or add the missing label to the citation table so the reference resolves.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The label table now quotes logic:normality.5 as the distribution-of-Box-over-conjunctions principle, which is exactly what Steps 1 and 3 use.
**Opus Rebuttal:** The cited item exists and says exactly what is used (the earlier label table listed only one item per result; this was a bug in the verifier, now fixed: the table quotes every cited item). logic:normality.5 is: if $\vdash\varphi_{1}\wedge\cdots\wedge\varphi_{n}\to\psi$ then $\vdash\Box\varphi_{1}\wedge\cdots\wedge\Box\varphi_{n}\to\Box\psi$.

### ISSUE-0002 [Ignored: Valid Rebuttal] Citation of normality.1 in the solution of prob-incomp-hk4
- **Category:** Improper link
- **Location:** logic:prob-incomp-hk4 / solution
- **Detail:** The solution cites \ref{logic:normality.1}, which is not in the label table (only logic:normality.3 is listed). The step uses it to derive \Box C \to \Box(\Box p \leftrightarrow \Box\Box p) from (i), i.e. a monotonicity/necessitation-inside-\Box principle; the target is unverified.
- **Proposed fix:** Cite the correct label for the normality/monotonicity fact used (e.g. \ref{logic:normality.3} if it contains the rule A\to B \vdash \Box A\to\Box B), or add the referenced label to the table.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — logic:normality.1 is now quoted as the monotonicity rule (from ⊢φ→ψ infer ⊢□φ→□ψ), which is exactly what the solution uses.
**Opus Rebuttal:** The cited item exists and says exactly what is used (the earlier label table listed only one item per result; this was a bug in the verifier, now fixed: the table quotes every cited item). logic:normality.1 is: if $\vdash\varphi\to\psi$ then $\vdash\Box\varphi\to\Box\psi$.

### ISSUE-0003 [Ignored: Valid Rebuttal] Citation of frame-correspondence.2 not in the label table
- **Category:** Improper link
- **Location:** logic:magari-theorem / proof and logic:prob-incomp-canonical / solution
- **Detail:** Both the Magari theorem proof and the canonical-model problem solution cite \ref{logic:frame-correspondence.2}, but the label table lists only logic:frame-correspondence.5 (theorem 3.11, フレームの対応). The item .2 is not verifiable; the text uses it for 'transitivity validates 4' and for the model-level direction, which may or may not be what item 2 states.
- **Proposed fix:** Replace \ref{logic:frame-correspondence.2} with the correct label (e.g. \ref{logic:frame-correspondence.5} if that theorem covers the 4/transitivity correspondence), or add the label to the citation table.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — logic:frame-correspondence.2 is now quoted as F⊨□p→□□p iff R transitive, matching both uses (Magari proof and canonical-model problem).
**Opus Rebuttal:** The cited item exists and says exactly what is used (the earlier label table listed only one item per result; this was a bug in the verifier, now fixed: the table quotes every cited item). logic:frame-correspondence.2 is: $\mathcal{F}\models\Box p\to\Box\Box p\iff R$ is transitive.

### ISSUE-0004 [Open] Claim that H is 'simplest' in number of propositional variables is imprecise
- **Category:** Supplement/remark error
- **Location:** remark after logic:lewis-theorem
- **Detail:** The remark asserts H is 'most simple' both in degree and in number of propositional variables among incomplete systems. Lewis's theorem only guarantees completeness for degree-1 axioms; it does not establish that no incomplete system with a single variable and degree 1 exists, nor that H is minimal in variable count. The claim '次数についても命題変数の個数についても、最も単純な不完全な体系' is stronger than what is proved (only that H has degree 2 and one variable, and that degree-1 axioms are complete).
- **Proposed fix:** Weaken to: 'H is an incomplete system whose axiom has degree 2 and uses a single propositional variable; by Lewis's theorem no degree-1 axiom can yield an incomplete normal logic, so H is minimal with respect to degree. Minimality with respect to the number of propositional variables is not claimed here.'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The remark still asserts H is 'simplest' both in degree and in number of propositional variables; Lewis's theorem only shows degree-1 axioms are complete, which does not establish minimality in variable count or that no other one-variable incomplete system exists.

### ISSUE-0005 [Open] Claim that H is 'simplest' in number of propositional variables is overstated
- **Category:** Supplement/remark error
- **Location:** remark after logic:lewis-theorem
- **Detail:** The remark states that H, being 'one variable, degree 2', is the simplest incomplete system both in degree and in number of propositional variables. Lewis's theorem only guarantees that degree-1 axioms yield complete systems; it says nothing about minimality in the number of propositional variables, nor that no incomplete system with a single variable and degree 1 (or fewer variables) exists. The claim is stronger than what is proved.
- **Proposed fix:** Replace with: 'Thus H, with one propositional variable and degree 2, is incomplete, while by Lewis's theorem every system axiomatized by degree-1 axioms is complete; so incompleteness first appears at degree 2, and H is a minimal example in degree with a single variable.' Do not claim minimality in variable count.
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0006 [Open] Historical attribution about earlier incomplete systems is unverifiable and imprecise
- **Category:** Supplement/remark error
- **Location:** remark after logic:lewis-theorem
- **Detail:** The remark says that before Magari's theorem, incomplete systems with 'degree 2 and two variables, or degree 3 and one variable' were known (Boolos ch. 11, original not checked). This is a historical claim stated without verification and is imprecise; it should not be presented as established fact.
- **Proposed fix:** Either remove the historical sentence or mark it explicitly as unverified hearsay: 'It is sometimes said (e.g. in Boolos, ch. 11) that incomplete systems with degree 2 and two variables, or degree 3 and one variable, were known earlier; this site has not verified the original sources.'
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0007 [Open] Supplement claim that H cannot be characterized by powerset algebras is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement at end of page
- **Detail:** The supplement says that among modal algebras, 'those coming from frames' (powerset algebras) cannot characterize H, and that a general frame with a 'finite-or-cofinite algebra' is needed. This conflates Kripke-frame incompleteness with algebraic (general-frame) semantics: H is complete with respect to general frames (every normal modal logic is), and the statement that powerset algebras 'cannot characterize H' is at best vague and potentially misleading, since H is validated by the Cresswell frame's powerset algebra as a Kripke frame.
- **Proposed fix:** Rephrase: 'H is not characterized by any class of Kripke frames (it is Kripke-incomplete), although it is complete with respect to general frames; the Cresswell model shows that the finite-or-cofinite algebra of truth sets is needed to validate H while refuting 4.'
- **Reported:** 2026-10-28 (048145a)
