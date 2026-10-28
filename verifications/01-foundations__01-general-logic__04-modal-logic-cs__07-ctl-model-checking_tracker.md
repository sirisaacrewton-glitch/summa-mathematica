# Verification tracker: `01-foundations/01-general-logic/04-modal-logic-cs/07-ctl-model-checking.html`

<!-- source: 01-foundations/01-general-logic/04-modal-logic-cs/07-ctl-model-checking.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 8 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Fairness model checking complexity claim
- **Category:** Supplement/remark error
- **Location:** remark / item 2
- **Detail:** The remark states that CTL model checking under fairness constraints can be done in polynomial time 'of the order of the product of the formula, model, and number of constraints' (CTL の論理式・モデル・制約の個数の積の程度). The standard result (Clarke–Emerson–Sistla 1986, Emerson–Lei 1986) is that CTL model checking with fairness constraints is polynomial, but the complexity is typically stated as O(|F|·|S|·|R|·|constraints|) or similar; the phrase 'product of the number of constraints' is vague but not clearly false. However, the more precise issue: the standard algorithm for CTL with fairness is polynomial but the exact bound involves the number of fairness constraints multiplied into the per-subformula cost, which is consistent with the stated 'product'. This is borderline; the claim is essentially correct as a polynomial-time statement. I will not report this as it is not clearly false.
- **Proposed fix:** No change needed; the statement is a standard known result.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] LTL and CTL* PSPACE-completeness attribution
- **Category:** Supplement/remark error
- **Location:** remark / item 3
- **Detail:** The remark states LTL model checking is PSPACE-complete (Sistla–Clarke 1985) and CTL* model checking is also PSPACE-complete. This is correct: Sistla–Clarke 1985 established PSPACE-completeness of LTL satisfiability/model checking, and CTL* model checking is PSPACE-complete (Emerson–Halpern). The attribution and claims are accurate.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Intuition: naive fixed-point iteration cost
- **Category:** Supplement/remark error
- **Location:** intuition
- **Detail:** The intuition says that doing the iteration of \ref{logic:finite-fixpoint} naively costs O(|S|·(|S|+|R|)) per fixed point because each round scans everything. This is correct: |S| rounds each costing O(|S|+|R|). The claim that the queue-based approach makes it linear is also correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Intuition: nested fixed points and mu-calculus
- **Category:** Supplement/remark error
- **Location:** intuition
- **Detail:** The intuition states that for general mu-calculus formulas with nested least/greatest fixed points, the iteration count multiplies according to nesting depth, and reducing this is the problem of mu-calculus model checking (parity games). This is a correct high-level statement: naive evaluation of nested fixed points gives a product over nesting depth, and parity games capture the complexity. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Solution to iteration-length problem: iteration count
- **Category:** Unsupported fact
- **Location:** logic:prob-ctlmc-iteration-length / solution
- **Detail:** The solution claims that for the chain model with states 0,...,n, R={(i,i+1):i<n}∪{(n,n)}, C true on 0,...,n-1 and false on n, the greatest fixed point iteration Z'_{k} decreases one element at a time and requires n+1=|S| iterations, with Z'_{n+1}=∅. Let us verify: τ(Z)=X_C∩pre_∃(Z). Z'_0=S={0,...,n}. Z'_1=X_C∩pre_∃(S)=X_C∩S=X_C={0,...,n-1} (since every state has a successor in S; state n has successor n∈S, states i<n have i+1∈S). Z'_2=X_C∩pre_∃({0,...,n-1})={0,...,n-2} (state n-1's only successor is n∉Z'_1, so n-1 drops; others have successor in Z'_1). Indeed Z'_k={0,...,n-k} for k≤n, and Z'_{n}={0}, Z'_{n+1}=X_C∩pre_∃({0})=∅ (state 0's successor 1∉{0}). So Z'_{n+1}=∅, requiring n+1 iterations. |S|=n+1, so n+1=|S| iterations. The claim 'requires n+1=|S| iterations' is correct. The problem asks for 'nearly |S|-1 iterations'; the answer gives |S| iterations, which is consistent (nearly |S|-1). No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] CheckEG Step 2 (ii): invariant P⊂Z argument
- **Category:** Logical gap
- **Location:** logic:ctl-eu-eg-correct / Step 2
- **Detail:** In Step 2 (ii), the proof argues: 'Q に入るのは c(t)=0、すなわち Z の中に後続がない t である。Z⊃P で、t∈P なら \ref{logic:ctl-fixpoints.3} の Step 2 から P の中に後続があるので、t∉P。よって P の元は除かれない。' The reasoning: if t∈P, then t has a successor in P (by the fixed-point characterization), and since P⊂Z (inductive hypothesis), that successor is in Z, so c(t)≥1, so t is not enqueued, hence not removed. This is correct as an inductive invariant: initially P⊂Z=X_C holds (since P⊂X_C). When t is removed, t∉P, so removing it preserves P⊂Z. The argument is valid. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] CheckEG Step 2 (iii): termination gives Z⊂τ(Z)
- **Category:** Logical gap
- **Location:** logic:ctl-eu-eg-correct / Step 2
- **Detail:** Step 2 (iii) argues: at termination Q is empty, so every element of Z has a successor in Z (any element whose c became 0 was enqueued and removed). Combined with Z⊂X_C, Z⊂τ(Z). Then by \ref{logic:finite-fixpoint.2}, Z⊂P. This is correct: the invariant c(s)=|{t∈Z:sRt}| for s∈Z is maintained, and at termination no s∈Z has c(s)=0 (else it would be in Q, but Q is empty and such elements are removed). So every s∈Z has a successor in Z, giving Z⊂pre_∃(Z), and Z⊂X_C, so Z⊂τ(Z). Then greatest fixed point property gives Z⊂P. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Theorem ctl-fixpoints Step 1: use of ctl-valid.3 and ctl-valid.4
- **Category:** Logical gap
- **Location:** logic:ctl-fixpoints / Step 1
- **Detail:** Step 1 cites \ref{logic:ctl-valid.3} and \ref{logic:ctl-valid.4}, but these labels are not in the provided label table (only logic:ctl-valid.2 is listed). The text says '\ref{logic:ctl-valid.3}・\ref{logic:ctl-valid.4} の証明はこのモデルの中だけで通る'. These labels presumably refer to soundness of EU/AU rules or similar on the CTL page. Since they are not in the table, I cannot verify they say what is used. However, the label table only lists labels cited from other pages that are relevant; the absence may just mean they weren't included. Given the instruction to check improper links against the label table, and these labels are absent, this could be an improper link. But the table is described as 'a table of the cited labels' — if logic:ctl-valid.3 and .4 are cited, they should appear. Their absence suggests either they don't exist or the table is incomplete. I'll flag cautiously: the citation to logic:ctl-valid.3 and logic:ctl-valid.4 cannot be verified and these labels are not in the provided table.
- **Proposed fix:** Verify that logic:ctl-valid.3 and logic:ctl-valid.4 exist on the CTL page and state the unfolding/soundness principles used (e.g., that E(C U D) satisfies the unfolding and is contained in any pre-fixed point). If they do not exist, replace with a direct argument: the set E satisfies E = X_D ∪ (X_C ∩ pre_∃(E)) and any Y with τ(Y)⊂Y contains E by induction on the length of the finite witness path.
- **Reported:** 2026-10-28 (10fede1)
