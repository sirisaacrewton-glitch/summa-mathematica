# Verification tracker: `01-foundations/05-proof-theory/03-provability-logic/04-fixed-point-theorem.html`

<!-- source: 01-foundations/05-proof-theory/03-provability-logic/04-fixed-point-theorem.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 6 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Claim that A=p shows modalization is necessary is not a genuine counterexample
- **Category:** Supplement/remark error
- **Location:** supplement (前提の検討), first bullet
- **Detail:** The supplement says that for $A=p$ there is no $H$ with $\vdash\boxdot(p\leftrightarrow A)\leftrightarrow\boxdot(p\leftrightarrow H)$. But $A=p$ gives $p\leftrightarrow A$ which is a tautology, so $\boxdot(p\leftrightarrow A)$ is a theorem; taking $H=\top$ gives $\boxdot(p\leftrightarrow\top)$, which is also a theorem (since $p\leftrightarrow\top$ is not a tautology, but $\boxdot(p\leftrightarrow\top)=\Box(p\leftrightarrow\top)$... actually $p\leftrightarrow\top$ is equivalent to $p$, so $\Box p$ is not a theorem). The intended reading is that no $H$ works, but the argument as stated is imprecise: for $A=p$, $\boxdot(p\leftrightarrow A)=\boxdot\top$ is a theorem, and one must argue no $H$ gives $\vdash\boxdot\top\leftrightarrow\boxdot(p\leftrightarrow H)$, i.e. $\vdash\boxdot(p\leftrightarrow H)$. This is true but the text's phrasing '恒真で...同値でない' conflates $p\leftrightarrow A$ being a tautology with the boxdot statement. The claim is essentially correct but the justification is garbled.
- **Proposed fix:** For $A=p$ we have $\vdash\boxdot(p\leftrightarrow A)$ (since $p\leftrightarrow p$ is a tautology), whereas for no formula $H$ free of $p$ is $\vdash\boxdot(p\leftrightarrow H)$: if $\vdash\boxdot(p\leftrightarrow H)$ then substituting $p\mapsto\top$ gives $\vdash H$, and substituting $p\mapsto\bot$ gives $\vdash\neg H$, whence $\mathsf{GL}$ would be inconsistent, which it is not (it is sound). Hence no fixed point exists.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim about A=¬p needs correction
- **Category:** Supplement/remark error
- **Location:** supplement (前提の検討), first bullet
- **Detail:** The supplement states that for $A=\neg p$, $\boxdot(p\leftrightarrow\neg p)$ is equivalent to $\bot$. Indeed $p\leftrightarrow\neg p$ is a contradiction, so $\boxdot(p\leftrightarrow\neg p)$ is equivalent to $\boxdot\bot$, which is not equivalent to $\bot$ in GL (GL does not prove $\Box\bot\to\bot$; in fact $\neg\Box\bot$ is consistent). So the statement '$\boxdot(p\leftrightarrow\neg p)$ は $\bot$ と同値' is false: it is equivalent to $\boxdot\bot=\bot\wedge\Box\bot$, i.e. to $\bot$... wait $\boxdot\bot=\bot\wedge\Box\bot=\bot$. Actually $\boxdot\bot$ is $\bot\wedge\Box\bot$ which is $\bot$. So $\boxdot(p\leftrightarrow\neg p)$ is equivalent to $\bot$. This is correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that fixed point theorem is specific to GL
- **Category:** Supplement/remark error
- **Location:** supplement (前提の検討), second bullet
- **Detail:** The supplement says '不動点定理は GL に特有の性質であり'. This is an overstatement: de Jongh–Sambin fixed point theorems exist for many modal logics (e.g., K4, GL, and various extensions; there are fixed point theorems for provability logics and for other modal systems such as K4, GL.3, etc.). Saying it is 'specific to GL' is imprecise/overstated.
- **Proposed fix:** The fixed point theorem holds for GL and its extensions; the essential ingredient is the Löb axiom (converse well-foundedness), which appears as the minimal-rank argument in Step 1 of Goldfarb's lemma and Step 3 of the first proof.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Banach fixed point analogy overstated
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から)
- **Detail:** The analogy with Banach's fixed point theorem is presented as 'the same structure'. This is a loose analogy, not a precise mathematical statement; calling inverse well-foundedness 'completeness' and the box 'contraction' is heuristic. As a side comment it risks being read as a theorem. It is not literally Banach's theorem (no metric, no contraction constant).
- **Proposed fix:** This is only a heuristic analogy: inverse well-foundedness plays the role of completeness and the modal operator the role of a contraction, but no metric or contraction constant is present; the precise statement is the well-founded recursion theorem on each model.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Remark on Boolos Chapter 8 example of degrees 2 and 5
- **Category:** Unsupported fact
- **Location:** remark 分解の選び方
- **Detail:** The remark claims Boolos Chapter 8 contains an example where two decompositions of the same $A$ yield fixed points of modal degree 2 and 5. This is a specific attribution that should be verified; if inaccurate it is a misattribution. Without verification this is a risky factual claim.
- **Proposed fix:** Verify the exact example in Boolos, The Logic of Provability, Chapter 8; if it cannot be confirmed, replace with a generic statement that different decompositions can yield fixed points of different modal degrees (all equivalent by uniqueness).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Claim that fixed point degree bounded by n is deferred to next page
- **Category:** Supplement/remark error
- **Location:** text after pt:fixed-point-degree
- **Detail:** The sentence '不動点は常に様相次数が A の □ 部分論理式の個数 n 以下のものがとれる（次ページの第二証明）' is stated without proof here and attributed to a next page. This is a stated-only claim; it is true (standard result), but as stated without proof on this page it is an unsupported assertion. However it is flagged as proven on the next page, so acceptable as a pointer.
- **Proposed fix:** No change needed (it is explicitly deferred to the second proof on the next page).
- **Reported:** 2026-10-28 (10fede1)
