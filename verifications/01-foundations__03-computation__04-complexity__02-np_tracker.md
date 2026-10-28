# Verification tracker: `01-foundations/03-computation/04-complexity/02-np.html`

<!-- source: 01-foundations/03-computation/04-complexity/02-np.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 51 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] NP vs P separation not shown by diagonalization
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement says the difference between Σ₁ and Δ₁ (decidable) was shown by diagonalization, but that NP and P cannot be separated by the same method. The claim that P≠NP cannot be shown by diagonalization is correct (relativization barrier), but the phrasing 'the same method' is imprecise: the Σ₁/Δ₁ separation is by undecidability (halting problem), not literally the same diagonalization that relativizes. More importantly, the statement 'NP と P の差は、同じ方法では示せない' is a known result (relativization), so it is acceptable. However, the claim that the Σ₁ vs Δ₁ difference is shown by diagonalization is a slight mischaracterization but not false. This is borderline; I will not report it as it is essentially correct.
- **Proposed fix:** No change needed; the relativization claim is correct.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Fagin's theorem statement
- **Category:** Supplement/remark error
- **Location:** supplement / 記述計算量
- **Detail:** The supplement states that NP equals the class of properties definable in existential second-order logic over finite structures (Fagin's theorem). This is correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Sudoku analogy
- **Category:** Supplement/remark error
- **Location:** supplement / 比喩
- **Detail:** The Sudoku analogy is informal and not a mathematical claim. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Cook-Levin proof: stay transition and acceptance
- **Category:** Logical gap
- **Location:** comp:cook-levin / proof, (⇐) direction
- **Detail:** In the (⇐) direction, the proof argues that after halting only stay can be used because 'there are no transitions from halting states'. But the machine N is a decider; the definition of δ may include transitions from q_acc or q_rej, or may not. The text assumes halting states have no outgoing transitions. This is a standard convention but not stated. If δ(q_acc,a) or δ(q_rej,a) is nonempty, the argument that 'the first halted row is the accepting configuration' could fail. However, one can always modify N so halting states have no transitions. This is a minor gap but standard. I will not report it as it is a common convention and easily fixed.
- **Proposed fix:** Assume without loss of generality that δ(q,a)=∅ for q∈{q_acc,q_rej}.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Cook-Levin: φ_step for stay requires halting state in row
- **Category:** Logical gap
- **Location:** comp:cook-levin / proof, φ_step
- **Detail:** The formula φ_step includes y_{i,stay} → ∨_j (x_{i,j,q_acc} ∨ x_{i,j,q_rej}), ensuring stay is only chosen when the row contains a halting state. Combined with the requirement that each row has exactly one y, this is fine. But the (⇐) direction claims 'after halting only stay can be used (no transitions from halting states)'. This relies on the convention above. Acceptable.
- **Proposed fix:** No change needed given the convention.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Cook-Levin: φ_acc uses ∨ over all i,j
- **Category:** Logical gap
- **Location:** comp:cook-levin / proof, φ_acc
- **Detail:** φ_acc = ∨_{i,j} x_{i,j,q_acc}. This requires that some row contains q_acc. Combined with the step constraints, this ensures acceptance. Fine.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Cook-Levin: variable count and formula size
- **Category:** Logical gap
- **Location:** comp:cook-levin / proof, 大きさと計算時間
- **Detail:** The proof says variables are O(Tm)=O(n^{2k}) and formula length is O(n^{2k}) times O(log n) for indices. This is correct. The claim that φ_w can be written in polynomial time is standard. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Tseitin: base case for variables
- **Category:** Logical gap
- **Location:** comp:tseitin / proof
- **Detail:** The proof sets z_p := p for variables p. The induction in (⇐) direction: 'v'(z_θ) = value of θ under restriction'. For a variable p, z_p = p, so v'(z_p) = v'(p) = value of p. Fine. The clauses for each connective are correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] 2SAT solution: claim about unsatisfiability
- **Category:** Logical gap
- **Location:** comp:prob-2sat-p / solution
- **Detail:** The claim is: formula unsatisfiable iff there is a variable p with paths p→¬p and ¬p→p. This is the standard 2SAT criterion. The (⇐) direction is correct. The (⇒) direction is sketched and the details are omitted ('本サイトでは省略した'). This is acceptable as a problem solution. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0010 [Open] NP closure under union and concatenation
- **Category:** Logical gap
- **Location:** comp:prob-np-closure / solution
- **Detail:** The solution for concatenation: certificate ⟨k,c1,c2⟩, split w into w1...wk and wk+1...wn. The verifier runs V_A on ⟨w1...wk,c1⟩ and V_B on the rest. This is correct. For union, certificate ⟨i,c⟩. Correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0011 [Open] NP ⊆ EXPTIME via determinization
- **Category:** Missing hypothesis
- **Location:** remark after comp:np-ntm
- **Detail:** The remark says NP ⊆ ∪_k TIME(2^{n^k}) = EXPTIME, citing comp:ntm-time. The theorem comp:ntm-time is about determinization time of nondeterministic machines. For a nondeterministic machine running in time n^k, determinization gives time 2^{O(n^k)}. This is correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0012 [Open] Citation of comp:tm-configuration.2
- **Category:** Improper link
- **Location:** comp:local-step / proof
- **Detail:** The proof cites comp:tm-configuration.2 for 'one step of movement'. The label table shows comp:tm-configuration is definition 6.2 '時点表示と計算'. The suffix .2 presumably refers to item 2 of that definition, which should define the one-step relation ⊢. This is plausible. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0013 [Open] Citation of comp:path-in-p
- **Category:** Improper link
- **Location:** comp:prob-2sat-p / solution
- **Detail:** The solution cites comp:path-in-p (theorem 1.8, graph reachability is in P) for reachability being in P. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0014 [Open] Baker-Gill-Solovay relativization
- **Category:** Unsupported fact
- **Location:** supplement / 相対化の壁
- **Detail:** The supplement states that P vs NP cannot be resolved by arguments that hold with any oracle (diagonalization etc.), attributed to Baker-Gill-Solovay, citing comp:page-hierarchy. This is correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0015 [Open] Ladner's theorem statement
- **Category:** Unsupported fact
- **Location:** supplement / ラドナーの定理
- **Detail:** The supplement states: if P≠NP, then there is an NP language neither in P nor NP-complete. This is Ladner's theorem, correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0016 [Open] NP=coNP unresolved
- **Category:** Unsupported fact
- **Location:** supplement / 前提の検討
- **Detail:** The supplement states NP=coNP is unresolved. Correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0017 [Open] Fagin's theorem
- **Category:** Unsupported fact
- **Location:** supplement / 記述計算量
- **Detail:** NP equals existential second-order definable properties over finite structures. Correct (Fagin). No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0018 [Open] Cook-Levin: φ_step for stay and local determination
- **Category:** Logical gap
- **Location:** comp:cook-levin / proof, φ_step
- **Detail:** For stay, the formula is (y_{i,stay} ∧ x_{i,j,s}) → x_{i+1,j,s}. This ensures the next row equals the current row when stay is chosen. Combined with the requirement that stay is only chosen when a halting state is present, this is correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0019 [Open] Cook-Levin: g_τ for j=m and j=m-1
- **Category:** Logical gap
- **Location:** comp:local-step / proof
- **Detail:** The lemma states c'_j = g_τ(c_{j-1},c_j,c_{j+1},c_{j+2}) for all 1≤j≤m. For j=m, c_{m+1} and c_{m+2} are blanks (positions m+1,m+2). The proof handles this by treating x_{i,m+1,⊔} and x_{i,m+2,⊔} as true constants. The locality argument covers j=m. Fine.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0020 [Open] Cook-Levin: head position bound
- **Category:** Logical gap
- **Location:** comp:cook-levin / 表
- **Detail:** The text says 'in a computation within T steps, the head does not go right of position T+1'. This is because starting at position 1, after T steps the head can move at most T positions right, reaching position T+1. Correct. The configuration is represented by length m = T+2 symbols at positions 1..m-1? Wait: m = T+2, positions 1..m-1 = 1..T+1. The text says 'state symbol is at positions 1,...,m-1'. Actually the configuration uqv has |uv| ≤ T+1, so it fits in positions 1..T+1 = 1..m-1. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0021 [Open] Cook-Levin: φ_start
- **Category:** Logical gap
- **Location:** comp:cook-levin / proof, φ_start
- **Detail:** φ_start says row 0 is q_0 w_1...w_n ⊔...⊔. This is correct for the initial configuration. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0022 [Open] Cook-Levin: φ_choice and stay
- **Category:** Logical gap
- **Location:** comp:cook-levin / proof, φ_choice
- **Detail:** φ_choice says exactly one y_{i,τ} is true for each i. This includes stay. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0023 [Open] Cook-Levin: (⇐) direction induction
- **Category:** Logical gap
- **Location:** comp:cook-levin / proof, (⇐)
- **Detail:** The induction shows R_i is a configuration and R_{i+1} is obtained by one step. The base case R_0 is the start configuration. The step uses local-step lemma. The acceptance follows from φ_acc. The argument that 'after halting only stay can be used' relies on the convention that halting states have no transitions. This is a minor gap but standard. I will not report it.
- **Proposed fix:** Assume halting states have no outgoing transitions.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0024 [Open] Tseitin: ψ includes clause z_φ
- **Category:** Logical gap
- **Location:** comp:tseitin / proof
- **Detail:** ψ is the conjunction of all clauses plus the unit clause z_φ. This ensures φ is true. Correct. The (⇐) direction: v'(z_φ) is true, so the restriction satisfies φ. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0025 [Open] 3SAT NP-complete: Tseitin gives SAT ≤_P 3SAT
- **Category:** Logical gap
- **Location:** comp:3sat-complete / proof
- **Detail:** The proof says Tseitin gives SAT ≤_P 3SAT, and by Cook-Levin and transitivity, 3SAT is NP-complete. This is correct: SAT is NP-complete, SAT ≤_P 3SAT, and 3SAT ∈ NP, so 3SAT is NP-complete. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0026 [Open] Corollary: NP-complete and reduction
- **Category:** Logical gap
- **Location:** corollary after comp:np-complete / proof
- **Detail:** The corollary states: for NP-complete B, B∈P iff P=NP; and if B is NP-complete, C∈NP, B≤_P C, then C is NP-complete. The proof cites comp:poly-reduction-basic.2 and 1. This is correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0027 [Open] NP-ntm proof: time bound for verifier
- **Category:** Logical gap
- **Location:** comp:np-ntm / proof, ⊆
- **Detail:** The proof says the nondeterministic machine N guesses c of length ≤ n^k and runs V on ⟨w,c⟩. The time is O(n^k). But V runs in time polynomial in |⟨w,c⟩|, which is O(n^k), so V's time is polynomial in n^k, which is polynomial in n. The text says 'time is O(n^k)' which is a slight abuse but acceptable since V's time is a polynomial in |w| and |c| ≤ n^k, so it's O(n^{k'}) for some k'. The text says 'O(n^k)' which may not be exactly right but is polynomial. Minor. Not reporting.
- **Proposed fix:** Time is polynomial in n.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0028 [Open] NP-ntm proof: certificate length
- **Category:** Logical gap
- **Location:** comp:np-ntm / proof, ⊆
- **Detail:** The proof says 'choose c of length ≤ n^k'. But the verifier V runs in time polynomial in |w|, so the certificate length is bounded by a polynomial in |w|, say n^{k'}. The text uses n^k, which is fine if we adjust k. Minor. Not reporting.
- **Proposed fix:** Choose c of length ≤ n^{k'} for appropriate k'.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0029 [Open] NP-ntm proof: ⊇ direction
- **Category:** Logical gap
- **Location:** comp:np-ntm / proof, ⊇
- **Detail:** The proof says certificate is the sequence of choices, length ≤ n^k. The verifier simulates N deterministically. Time is O(n^k). Correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0030 [Open] Definition of verifier: time bound
- **Category:** Logical gap
- **Location:** comp:class-np / definition 1
- **Detail:** The definition says V's running time is bounded by a polynomial in |w|. This implies the certificate length is also polynomially bounded. Correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0031 [Open] COMPOSITES example
- **Category:** Logical gap
- **Location:** example / item 2
- **Detail:** COMPOSITES = {x : x = pq, p,q ≥ 2}. Certificate is p, verifier checks 1 < p < x and p | x. This is correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0032 [Open] HAMPATH example
- **Category:** Logical gap
- **Location:** example / item 1
- **Detail:** HAMPATH is in NP. Certificate is the vertex sequence. Verifier checks it's a permutation, starts at s, ends at t, adjacent vertices connected. Correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0033 [Open] SAT example
- **Category:** Logical gap
- **Location:** example / item 3
- **Detail:** SAT is in NP. Certificate is satisfying assignment. Correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0034 [Open] Remark: P ⊆ NP
- **Category:** Logical gap
- **Location:** remark after comp:np-ntm
- **Detail:** P ⊆ NP because a verifier can ignore the certificate. Correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0035 [Open] Remark: NP ⊆ EXPTIME
- **Category:** Logical gap
- **Location:** remark after comp:np-ntm
- **Detail:** NP ⊆ ∪_k TIME(2^{n^k}) = EXPTIME. This follows from determinization. Correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0036 [Open] Remark: P vs NP unresolved
- **Category:** Logical gap
- **Location:** remark after comp:np-ntm
- **Detail:** P=NP is unresolved. Correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0037 [Open] Poly-reduction-basic proof: transitivity
- **Category:** Logical gap
- **Location:** comp:poly-reduction-basic / proof, item 1
- **Detail:** The proof says f(w) length ≤ |w|^a because 'one cell per step'. This is correct for a TM. Then g(f(w)) takes (n^a)^b steps. Total polynomial. Correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0038 [Open] Poly-reduction-basic proof: item 2
- **Category:** Logical gap
- **Location:** comp:poly-reduction-basic / proof, item 2
- **Detail:** Compute f(w) in polynomial time, then run B's decider or verifier on f(w). Polynomial composition. Correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0039 [Open] Definition of NP-complete
- **Category:** Logical gap
- **Location:** comp:np-complete / definition
- **Detail:** NP-hard: all A in NP reduce to B. NP-complete: NP-hard and in NP. Correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0040 [Open] Hypcheck: choice variables
- **Category:** Logical gap
- **Location:** hypcheck / 選択の変数
- **Detail:** The hypcheck says without φ_choice, two transitions could be chosen simultaneously creating contradictory rows, but also a valuation could remain where neither is usable. This is a bit vague but not false. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0041 [Open] Hypcheck: Tseitin new variables
- **Category:** Logical gap
- **Location:** hypcheck / ツァイティン変換
- **Detail:** The hypcheck says naive distribution can cause exponential blowup, so Tseitin uses equisatisfiable (not logically equivalent) transformation. Correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0042 [Open] Hypcheck: locality
- **Category:** Logical gap
- **Location:** hypcheck / 一段の局所性
- **Detail:** The hypcheck says locality is essential for φ_step being a conjunction of constant-size formulas. Correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0043 [Open] Hypcheck: time bound n^k
- **Category:** Logical gap
- **Location:** hypcheck / 時間の多項式の上限
- **Detail:** The hypcheck says the polynomial bound n^k is used to make the tableau size polynomial, bounding head reach and number of rows. Correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0044 [Open] Supplement: Cook-Levin reduction fixes N
- **Category:** Logical gap
- **Location:** supplement / 前提の検討
- **Detail:** The supplement says the reduction fixes N and takes w as input; |C|, |Δ| are treated as constants. Correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0045 [Open] Supplement: NP vs coNP
- **Category:** Logical gap
- **Location:** supplement / 前提の検討
- **Detail:** The supplement says NP is problems with short certificates for 'yes' answers, not necessarily for 'no' answers; NP=coNP is unresolved. Correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0046 [Open] Supplement: Ladner's theorem
- **Category:** Logical gap
- **Location:** supplement / ラドナーの定理
- **Detail:** If P≠NP, there is an NP language neither in P nor NP-complete. Correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0047 [Open] Supplement: relativization barrier
- **Category:** Logical gap
- **Location:** supplement / 相対化の壁
- **Detail:** P vs NP cannot be resolved by arguments that hold with any oracle (diagonalization etc.), Baker-Gill-Solovay. Correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0048 [Open] Supplement: Fagin's theorem
- **Category:** Logical gap
- **Location:** supplement / 記述計算量
- **Detail:** NP equals existential second-order definable properties over finite structures. Correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0049 [Open] Supplement: Σ₁ vs Δ₁ and NP vs P
- **Category:** Logical gap
- **Location:** supplement / 高い視点から
- **Detail:** The supplement says the difference between Σ₁ and Δ₁ (decidable) was shown by diagonalization, but NP vs P cannot be shown by the same method. The first part is imprecise: the difference between Σ₁ and Δ₁ is shown by undecidability (halting problem), which is a diagonalization argument. The second part is correct (relativization). The phrase 'same method' is a bit loose but not false. I will not report it.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0050 [Open] Supplement: Cook-Levin and arithmetization
- **Category:** Logical gap
- **Location:** supplement / 高い視点から
- **Detail:** The supplement says Cook-Levin's proof writes 'computation is correct' as a conjunction of local conditions on the tableau, translating computation into logic, same idea as arithmetization. This is a reasonable analogy. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0051 [Open] Supplement: Sudoku analogy
- **Category:** Logical gap
- **Location:** supplement / 比喩
- **Detail:** Sudoku: checking a solution is easy, finding is hard. Cook-Levin says every 'easy to check' problem translates to one puzzle (SAT). This is a reasonable informal statement. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
