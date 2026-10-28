# Verification tracker: `01-foundations/03-computation/05-algorithmic-randomness/05-chaitin-incompleteness.html`

<!-- source: 01-foundations/03-computation/05-algorithmic-randomness/05-chaitin-incompleteness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 14 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect claim that Omega's bits result shows almost all bits are random facts
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says the Omega-bits result shows that Omega is such that 'for any sound theory, almost all digits are random facts'. This is imprecise/overstated. The theorem (comp:chaitin-omega-bits) only says that a fixed sound c.e. theory determines only finitely many digits of Omega; it does not say that 'almost all digits are random facts' in any precise sense. Moreover, 'almost all' is misleading: the theorem gives no quantitative bound on how many digits can be determined, and the set of determined digits can be any finite set depending on the theory. The phrase 'almost all digits are random facts' is not a consequence of the theorem and is not a standard formulation.
- **Proposed fix:** Replace with: 'The result on the digits of $\Omega$ shows that for any fixed sound c.e. theory, only finitely many digits of $\Omega$ can be determined; equivalently, all but finitely many digits of $\Omega$ are beyond the reach of any single such theory.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Misleading claim about Sigma_1 soundness and Chaitin's theorem
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement states that if soundness is weakened to consistency, Chaitin's theorem 'does not hold in general' (a consistent theory may prove false lower bounds), but that for $\Sigma_{1}$-sound arithmetic theories a similar conclusion is obtained. This is essentially correct in spirit, but the phrase '同様の結論が得られることが知られている' is vague and potentially misleading: the standard result is that for a $\Sigma_{1}$-sound c.e. theory, there is a constant $L$ such that the theory proves no statement $K(x)>n$ with $n\ge L$ (this is the usual Chaitin theorem, which already requires soundness, and $\Sigma_{1}$-soundness suffices because the statements $K(x)>n$ are $\Pi_{1}$ and $\Sigma_{1}$-soundness implies truth of $\Pi_{1}$ statements proved). The statement as written is not false, but the contrast with 'consistency' is imprecise: consistency alone does not suffice, and $\Sigma_{1}$-soundness is a strengthening of consistency. This is a minor imprecision rather than a clear error; however, the claim that 'a consistent theory may prove false lower bounds' is correct, and the $\Sigma_{1}$-sound case is standard. I would not report this as a genuine error, but note the imprecision.
- **Proposed fix:** Clarify: 'If soundness is weakened to mere consistency, the conclusion can fail, since a consistent theory may prove false lower bounds $K(x)>n$. For $\Sigma_{1}$-sound c.e. theories, however, the same conclusion holds, because such theories prove only true $\Pi_{1}$ statements, and $K(x)>n$ is $\Pi_{1}$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Overstated interpretation of L proportional to information content
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says $L$ can be taken proportional to the 'information content' (length of description of the machine enumerating the theory), and that this is often interpreted as 'a theory cannot prove complexity much exceeding its own complexity'. The proof shows $L$ is bounded by a constant depending on the description length of the enumeration machine, but the relationship is additive (a constant $c_{B}$), not 'proportional'. The phrase '比例して' (proportional) is inaccurate; it should be 'up to an additive constant' or 'bounded by a constant depending on'. This is a genuine imprecision in a side comment.
- **Proposed fix:** Replace '比例して取れる' with '加法定数を除いて、理論を枚挙する機械の記述の長さで抑えられる' (i.e., $L$ is bounded by a constant depending on the description length of the enumeration machine, up to an additive constant).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Berry paradox attribution and comparison with Godel
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says Godel's first incompleteness theorem is by diagonalization (liar paradox) while Chaitin's theorem is by Berry's paradox. This is a standard and essentially correct comparison. However, the statement that Chaitin's theorem is 'by Berry's paradox' is a heuristic; the actual proof uses a machine $B$ searching for a proof of a lower bound, which is indeed the Berry paradox idea. This is acceptable as a heuristic remark. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Analogy about 10 kg package and envelope
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The analogy: 'a certificate from an inspection station guaranteeing this package weighs more than 10 kg cannot arrive in an envelope lighter than the inspection station itself.' This is a loose analogy and not a mathematical claim; it is intended as intuition. It is not false in its intended heuristic sense. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Remark on arithmetization of K(x)>n and omega_i=b
- **Category:** Unsupported fact
- **Location:** remark (comp:sec-ch-notation)
- **Detail:** The remark states that one can write arithmetic sentences expressing 'K(x)>n' and 'omega_i=b', and that for a sound c.e. theory T, the set of such sentences proved by T is c.e. This is correct: K(x)>n is a Pi_1 statement (for fixed x,n) and omega_i=b is a Pi_1 statement (since Omega's digits are limiting computable), and the set of theorems of a c.e. theory is c.e. The remark explicitly says the construction of the sentences is not verified here, which is acceptable. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Proof of Chaitin's theorem: B may not halt for all inputs
- **Category:** Logical gap
- **Location:** comp:chaitin-k / proof
- **Detail:** The proof defines B: on input bin(n), enumerate T and output x when finding the first pair (x,m) with m>=n. It then says 'if T contains such a pair for all n, then B halts on all inputs'. This is correct under the assumption. The argument then derives a contradiction. The structure is: assume for all n there is (x,m) in T with m>=n; then B halts on all inputs; then K(y_n) <= log n + 1 + c_B; but soundness gives K(y_n) > m >= n; contradiction for large n. This is valid. The conclusion 'there is L such that no pair with m>=L is in T' follows by taking L to be an n for which no pair (x,m) with m>=n exists. This is correct. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Proof of Omega bits theorem: V_n is a Martin-Lof test
- **Category:** Logical gap
- **Location:** comp:chaitin-omega-bits / proof
- **Detail:** The proof constructs V_n as the set of strings of length N_n matching the first n specified bits. It claims lambda([V_n]) = 2^{-n}. This is correct if the n specified positions are distinct, which they are by construction (new positions each time). The sets V_n are uniformly c.e. (indeed computable). The proof says Omega's binary expansion belongs to all [V_n] by soundness. This is correct: soundness ensures the bits b_j are correct. Then Omega is not Martin-Lof random, contradicting comp:omega-random. This is valid. One subtlety: the Martin-Lof test definition typically requires V_n to be c.e. subsets of {0,1}^* with lambda([V_n]) <= 2^{-n}, and the sets here are finite (hence c.e.) with exact measure 2^{-n}. This is fine. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] Use of comp:omega-random requires Omega to be Martin-Lof random
- **Category:** Missing hypothesis
- **Location:** comp:chaitin-omega-bits / proof
- **Detail:** The proof cites comp:omega-random (Omega is random) to conclude a contradiction with the existence of a Martin-Lof test that Omega fails. This is the correct use: comp:omega-random states Omega is Martin-Lof random, and the constructed test would show it is not. The hypotheses of comp:omega-random (Omega is the halting probability of a prefix-free machine) are satisfied by the definition comp:chaitin-omega. No missing hypothesis.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0010 [Open] Citation of comp:k-uncomputable in proof of Chaitin's theorem
- **Category:** Improper link
- **Location:** comp:chaitin-k / proof
- **Detail:** The proof says 'the same as in the proof of comp:k-uncomputable' to justify K(y_n) <= log_2 n + 1 + c_B. The cited theorem comp:k-uncomputable is 'K is uncomputable', whose proof indeed uses the bound K(y) <= log n + c for y = B(bin(n)). The citation is to the proof technique, which is legitimate. The label table confirms comp:k-uncomputable is theorem 1.7 'K の計算不能性'. The use is appropriate. No improper link.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0011 [Open] Citation of comp:incompressible-exist for infinite strings with K(x)>L
- **Category:** Improper link
- **Location:** comp:chaitin-k / proof (second half)
- **Detail:** The proof says for each length ell there is x with K(x) >= ell by comp:incompressible-exist, so taking one for each ell > L gives infinitely many. comp:incompressible-exist states existence of incompressible strings (for each n, there is x of length n with K(x) >= n). This indeed yields infinitely many x with K(x) > L. The citation is correct. No improper link.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0012 [Open] Hypcheck comment on L bound
- **Category:** Supplement/remark error
- **Location:** comp:chaitin-k / hypcheck
- **Detail:** The hypcheck says 'the constant L is bounded by the length of the code of B, i.e., the description length of the machine enumerating T (the smallest n with log_2 n + 1 + c_B < n)'. This is essentially correct: L can be taken as any n such that log_2 n + 1 + c_B < n, and such n exists. The phrase 'bounded by' is slightly loose but acceptable. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0013 [Open] Problem solution: finite set T is decidable and sound
- **Category:** Supplement/remark error
- **Location:** comp:prob-ch-finite-omega / solution
- **Detail:** The solution says the finite set T = {(i, omega_i): i <= k} is decidable and sound, and that 'computable' here is in a non-uniform sense (values written down). This is correct: a finite set is decidable, and soundness holds because the values are the true bits. The explanation that the theorem only says finitely many digits can be determined by one theory, and the bound depends on the theory, is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0014 [Open] Problem solution: deriving uncomputability of K from Chaitin
- **Category:** Supplement/remark error
- **Location:** comp:prob-ch-uncomputable / solution
- **Detail:** The solution: if K were computable, T = {(x,n): K(x)>n} would be decidable (hence c.e.) and sound. By Chaitin's theorem, there is L such that no pair with n>=L is in T, but there is x with K(x)>L (second half), so (x,L) in T, contradiction. This is correct. One subtlety: the second half of Chaitin's theorem says there are infinitely many x with K(x)>L, so indeed (x,L) in T. The argument is valid. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
