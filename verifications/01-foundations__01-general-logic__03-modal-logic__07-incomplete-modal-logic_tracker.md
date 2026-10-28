# Verification tracker: `01-foundations/01-general-logic/03-modal-logic/07-incomplete-modal-logic.html`

<!-- source: 01-foundations/01-general-logic/03-modal-logic/07-incomplete-modal-logic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 6 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main mathematical content (Berk's theorem, Magari's theorem via the Cresswell model, non-closure under Löb's rule, and Lewis's theorem) is essentially correct. The genuine problems are mechanical citation errors: several \ref's point to labels not in the table (logic:frame-correspondence.2, logic:normality.5, logic:normality.1) where the correct targets are logic:frame-correspondence.5 and logic:normality.3, plus two overstated/imprecise side remarks (the general-frame claim in the supplement and the historical degree/variable-count claim). No logical gaps in the proofs were found.

## Issues

### ISSUE-0001 [Open] Wrong citation for frame correspondence of 4
- **Category:** Improper link
- **Location:** logic:magari-theorem / proof
- **Detail:** The proof cites \ref{logic:frame-correspondence.2} for the claim that transitivity makes \Box p\to\Box\Box p valid. But the label table lists logic:frame-correspondence.5 as the frame-correspondence theorem (theorem 3.11); logic:frame-correspondence.2 is not in the table and, by numbering, would correspond to a different property (not transitivity/axiom 4). The citation is mechanically wrong.
- **Proposed fix:** Replace \ref{logic:frame-correspondence.2} with the correct item of \ref{logic:frame-correspondence} that states transitivity corresponds to axiom 4 (i.e. the item for \Box p\to\Box\Box p), or cite \ref{logic:frame-correspondence.5} together with the specific item.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Wrong citation in problem solution
- **Category:** Improper link
- **Location:** logic:prob-incomp-canonical / solution
- **Detail:** The solution cites \ref{logic:frame-correspondence.2} for the fact that transitivity of the canonical frame makes \Box p\to\Box\Box p valid. As above, the frame-correspondence theorem is logic:frame-correspondence.5 (theorem 3.11); logic:frame-correspondence.2 is not the transitivity/axiom-4 correspondence. The reference is mechanically inserted to the wrong item.
- **Proposed fix:** Cite the correct item of \ref{logic:frame-correspondence} establishing that transitivity corresponds to \Box p\to\Box\Box p (or \ref{logic:frame-correspondence.5} with the specific item).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Undefined label logic:normality.5
- **Category:** Improper link
- **Location:** logic:h-not-lob-closed / Step 1 and Step 3 of lewis-theorem
- **Detail:** The proof cites \ref{logic:normality.5} (in Step 1 of h-not-lob-closed and in Step 3 of lewis-theorem). The label table only lists logic:normality.3 (theorem 1.13, 正規性). logic:normality.5 is not among the cited labels, so the citation cannot be verified against the table and is likely a wrong/mechanical link; the needed fact (K proves \Box(A\to B)\to(\Box A\to\Box B) and the distribution/necessitation closure) is what logic:normality.3 provides.
- **Proposed fix:** Replace \ref{logic:normality.5} with \ref{logic:normality.3} (or the correct item of the normality theorem that gives the K-distribution axiom \Box(A\to B)\to(\Box A\to\Box B)).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Undefined label logic:normality.1
- **Category:** Improper link
- **Location:** logic:prob-incomp-hk4 / solution
- **Detail:** The solution cites \ref{logic:normality.1} to derive \Box C\to\Box(\Box p\leftrightarrow\Box\Box p) from C\to(\Box p\leftrightarrow\Box\Box p). The label table lists only logic:normality.3 (theorem 1.13). logic:normality.1 is not in the table, so the citation is unverifiable and likely a wrong mechanical link; the step needs the rule/axiom that K proves \Box(A\to B)\to(\Box A\to\Box B) (normality/distribution).
- **Proposed fix:** Replace \ref{logic:normality.1} with \ref{logic:normality.3} (the normality theorem giving distribution), which is the result actually used.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Overstated claim about general frames in supplement
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から)
- **Detail:** The supplement says that power-set algebras coming from frames cannot characterize H, and that 'a general frame' such as the algebra of finite-or-cofinite sets is needed. This is imprecise/overstated: H is validated by the Cresswell model, whose underlying frame is an ordinary Kripke frame; the finite-or-cofinite algebra is the algebra of definable sets of that model, not a separate 'general frame' required because power-set algebras fail. The statement conflates 'the logic is not characterized by a class of Kripke frames' with 'a general frame is needed', and the phrase '一般のフレーム（一般フレーム）' is misleading since the Cresswell model is a Kripke model on an ordinary frame.
- **Proposed fix:** Rewrite as: 'H is not characterized by any class of Kripke frames (it is Kripke-incomplete), although it is validated by the single Kripke model C. The algebra of definable subsets of C is the finite-or-cofinite algebra; this shows that the validity of H cannot be captured by frame-validity, i.e. by the power-set algebras of frames, and one must pass to richer algebraic or general-frame semantics.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Imprecise historical claim about degree-2/degree-3 incompleteness
- **Category:** Supplement/remark error
- **Location:** remark after lewis-theorem
- **Detail:** The remark states that before Magari's theorem, incomplete systems were known with 'degree 2 and two propositional variables, or degree 3 and one propositional variable'. The degree-2 two-variable example is essentially H itself (Henkin's axiom \Box(p\leftrightarrow\Box p)\to\Box p is degree 2 with one variable), so attributing a degree-2 two-variable example to pre-Magari literature is inconsistent with the page's own claim that H is the simplest. The precise historical record (e.g. van Benthem, Boolos Ch. 11) concerns degree-2/degree-3 examples but the variable counts as stated are not accurate.
- **Proposed fix:** Soften to: 'Before Magari's theorem, incomplete modal logics were already known via axioms of degree 2 or 3 (see Boolos, Ch. 11); the precise minimality claims about the number of propositional variables are not verified here.'
- **Reported:** 2026-10-28 (10fede1)
