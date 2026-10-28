# Verification tracker: `01-foundations/03-computation/04-complexity/10-interactive-proofs.html`

<!-- source: 01-foundations/03-computation/04-complexity/10-interactive-proofs.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 29 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is a careful treatment of interactive proofs, with correct proofs of GNI ∈ IP, IP ⊆ PSPACE, TQBF ∈ IP, and IP = PSPACE. The supplements and remarks are mostly accurate; the only borderline imprecisions are the loose connection between MIP = NEXP and the PCP theorem, and the unqualified zero-knowledge claim for GNI (which is honest-verifier zero-knowledge). Neither is a clear mathematical error, so no issues are reported. All previously reported issues (none) are moot.

## Issues

### ISSUE-0001 [Open] Public-coin claim: IP unchanged is true, but the attribution/statement is fine; check MIP=NEXP and PCP link
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement states that restricting to public coins does not change IP (Goldwasser–Sipser), that MIP = NEXP (Babai–Fortnow–Lund), and that the latter connects to the PCP theorem. The public-coin statement IP = public-coin IP is correct (Goldwasser–Sipser). MIP = NEXP is correct (Babai–Fortnow–Lund). However, the sentence 'the latter connects to the PCP theorem' is imprecise: the PCP theorem is not a consequence of MIP = NEXP; rather MIP = NEXP is proved via PCP-type techniques (or the two are related but the PCP theorem is about NP, not NEXP). This is a mild overstatement but arguably acceptable as a loose pointer. Given the instruction to prefer no report over speculative ones, this is borderline; I will not report it.
- **Proposed fix:** No change needed; if desired, rephrase to 'the proof of the latter uses PCP-type ideas'.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Zero-knowledge claim for graph non-isomorphism
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says the GNI proof system is a typical example of a zero-knowledge proof ('the verifier learns nothing other than non-isomorphism'). The standard GNI protocol described (with the verifier choosing i and π and the prover answering j) is indeed a zero-knowledge proof for GNI, but only against an honest verifier (honest-verifier zero-knowledge); it is not known to be zero-knowledge against malicious verifiers in the plain model without additional assumptions. The statement 'the verifier learns nothing other than non-isomorphism' is thus slightly overstated as stated without qualification. However, in many textbooks this protocol is presented as the canonical example of (honest-verifier) zero-knowledge, and the claim is commonly accepted in that sense. This is borderline; I will not report it as a definite error.
- **Proposed fix:** No change needed; optionally qualify as 'honest-verifier zero-knowledge'.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] IP ⊆ PSPACE proof compared to AP ⊆ PSPACE: 'sum (average)' vs 'max'
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says the IP ⊆ PSPACE proof is the same depth-first game-tree evaluation as AP ⊆ PSPACE, differing only in that at the verifier's random nodes one takes 'sum (average)' instead of 'max'. This is essentially correct: at the verifier's nodes the count C(M) is the sum over the verifier's messages (since the verifier's randomness is averaged), and at the prover's nodes it is the max. The phrase 'sum (average)' is accurate. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Bertrand's postulate bound q ≤ 2n^4 and trial division up to sqrt(2) n^2
- **Category:** Unsupported fact
- **Location:** comp:tqbf-in-ip / Step 3
- **Detail:** Step 3 claims: find the smallest prime q ≥ n^4; q ≤ 2n^4 follows from Bertrand's postulate; testing each candidate by trial division up to sqrt(2) n^2 gives polynomial time. Bertrand's postulate states there is a prime between N and 2N for N > 1. Taking N = n^4 gives a prime q with n^4 ≤ q < 2n^4, so q ≤ 2n^4 is correct. Trial division up to sqrt(q) ≤ sqrt(2) n^2 is correct. The number of candidates is at most n^4, each tested in O(sqrt(2) n^2) divisions, giving O(n^6) time, polynomial. This is correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Soundness error bound in TQBF ∈ IP: k·n^{-3} ≤ 1/n requires n ≥ 6 and k ≤ n^2
- **Category:** Logical gap
- **Location:** comp:tqbf-in-ip / 健全性
- **Detail:** The soundness analysis bounds the error by k·(n/q) with q ≥ n^4, so n/q ≤ n^{-3}, and k ≤ n^2, giving k·n^{-3} ≤ n^{-1}. For n ≥ 6 this is ≤ 1/6 < 1/3. The proof handles n < 6 separately ('n < 6 の入力は検証者が直接決定する'). So the bound is fine. However, the text writes 'k·n^{-3} ≤ n^2·n^{-3} = 1/n ≤ 1/6 < 1/3', which requires n ≥ 6; this is consistent with the earlier handling of n < 6. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Degree bound in Step 2: degree of f_i in y_i is at most n, but after R the degree is 1 and after Q it is 2 — need to check the claim 'at most n'
- **Category:** Logical gap
- **Location:** comp:tqbf-in-ip / Step 2
- **Detail:** Step 2 claims each f_i, viewed as a polynomial in the variable y_i (the variable bound last), has degree at most n. The argument: p_φ has each variable degree ≤ n; after the R-block R_{x_1}...R_{x_j} all free variables have degree 1; the following Q_j x_j product makes each variable degree ≤ 2; the next R-block returns to degree 1. This is a bit loose: the degree in y_i just before it is bound by Q_i is at most 2 (after the preceding R-block made it 1, then Q_i multiplies two copies giving degree 2). So the degree of f_i in y_i is at most 2, certainly ≤ n. The bound 'at most n' is thus valid (though not tight). The soundness uses 'degree ≤ n' for the difference g - h, which holds. No error, but the argument is slightly imprecise; it is not a genuine gap since the bound holds.
- **Proposed fix:** No change needed; optionally tighten to 'degree at most 2'.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Step 4: at stage i, the verifier checks v = g(0)g(1) etc. using the current v, but v is the claim about f_{i-1}; the indexing must be consistent
- **Category:** Logical gap
- **Location:** comp:tqbf-in-ip / Step 4
- **Detail:** The procedure: at stage 0 the prover sends f_0, verifier sets v = f_0 and rejects if v ≠ 1. At stage i (i=1,...,k) the prover sends g(z) claiming to be f_i with previous random assignments substituted. The verifier checks v = g(0)g(1) (for ∀), etc., where v is the current claim about f_{i-1}. This is consistent: f_{i-1} = f_i[y_i:=0]·f_i[y_i:=1] for ∀, so v should equal g(0)g(1). The indexing is correct. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Step 4: for S_i = R, the verifier checks v = (1-a)g(0) + a g(1) where a is the current assignment to y_i; but for R the variable y_i is being re-randomized, and the 'old value' a must be the value assigned earlier
- **Category:** Logical gap
- **Location:** comp:tqbf-in-ip / Step 4
- **Detail:** For S_i = R, the linearization operator R_{y_i} applied to f_i gives (1-y_i) f_i[y_i:=0] + y_i f_i[y_i:=1], and the verifier checks v = (1-a)g(0) + a g(1) where a is the current value assigned to y_i (from an earlier stage). This is correct: the R operator is applied at the point where y_i already has a value a from the earlier quantification, and R re-randomizes it. The text says 'a is the random number currently assigned to y_i' and 'if S_i = R, replace the old value'. This is consistent. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] Citation of comp:alternation-theorem in supplement
- **Category:** Improper link
- **Location:** supplement / 似た定理
- **Detail:** The supplement cites \ref{comp:alternation-theorem} (交代計算の基本定理, theorem 9.7) for 'AP ⊆ PSPACE'. The alternation theorem typically states AP = PSPACE, which includes AP ⊆ PSPACE. So the citation is appropriate. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0010 [Open] Problem solution: existence of prime q > max(k, 2^m) and n^4 with O(n + log k) bits via Bertrand
- **Category:** Unsupported fact
- **Location:** comp:prob-ip-sum-check / solution
- **Detail:** The solution says: use a prime q larger than max(k, 2^m) and n^4; such a prime exists with O(n + log k) bits by Bertrand's postulate; the prover sends q and a short primality certificate (Pratt certificate, checkable in polynomial time). This is correct: Bertrand gives a prime between N and 2N for N = max(k, 2^m, n^4), which has O(n + log k) bits. Pratt certificates are checkable in polynomial time. The claim that F_q equality f_0 = k is equivalent to integer equality requires q > 2^m ≥ f_0 and q > k, which holds. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0011 [Open] Problem solution: soundness error m·n/q ≤ n^2/n^4
- **Category:** Unsupported fact
- **Location:** comp:prob-ip-sum-check / solution
- **Detail:** The solution bounds the error by m·n/q ≤ n^2/n^4. Here m ≤ n (number of variables ≤ formula length), and q ≥ n^4, so m·n/q ≤ n·n/n^4 = n^2/n^4 = 1/n^2. Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0012 [Open] Remark: NP ⊆ IP and BPP ⊆ IP, error reduction by repetition
- **Category:** Supplement/remark error
- **Location:** remark (after comp:interactive-proof)
- **Detail:** The remark states NP ⊆ IP (prover sends certificate, verifier uses no randomness) and BPP ⊆ IP (verifier ignores prover). Both are correct. It also says error probability can be reduced by independent repetitions and majority vote, citing comp:amplification, and notes the prover may answer differently each round but the per-round acceptance bound still applies. This is correct for the soundness side (each round the cheating prover's acceptance is ≤ 1/3 regardless of strategy, and repetitions are independent since verifier's randomness is fresh). For completeness, the honest prover achieves ≥ 2/3 each round, and majority vote amplifies. The statement is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0013 [Open] GNI protocol soundness: probability both correct is 1/4 ≤ 1/3
- **Category:** Supplement/remark error
- **Location:** comp:gni-in-ip / proof, 健全性
- **Detail:** The proof runs the protocol twice independently and accepts if both correct. For G_1 ≅ G_2, each round the cheating prover's success probability is 1/2, so both correct is 1/4 ≤ 1/3. This is correct. Completeness: for G_1 ≇ G_2, the prover always answers correctly, acceptance probability 1. Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0014 [Open] IP ⊆ PSPACE: the recurrence for C(M) at verifier's node sums over messages, but the verifier's message is determined by r, and R(M) partitions by m; the max over P is over strategies that may depend on M
- **Category:** Logical gap
- **Location:** comp:ip-in-pspace / proof, 漸化式
- **Detail:** The proof defines C(M) = max_P #{r ∈ R(M): continuing from M, V↔P accepts}. At a verifier node, R(M) splits by the verifier's next message m, and C(M) = Σ_m C(M#m). This is correct because the prover can choose a different response for each m (the prover sees m). At a prover node, C(M) = max_m C(M#m). This is correct. The claim 'the prover can choose a different response for each part, so the max is the sum of the maxima' is correct. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0015 [Open] IP ⊆ PSPACE: space bound — storing intermediate sums up to 2^{p(n)} needs p(n)+1 bits, and recursion depth p(n), but the number of branches at each level could be exponential; however DFS uses polynomial space
- **Category:** Logical gap
- **Location:** comp:ip-in-pspace / proof, 計算
- **Detail:** The proof says the recursion depth is at most p(n) (number of messages), and at each level one stores the current message (p(n) bits) and intermediate sum/max values (integers ≤ 2^{p(n)}, p(n)+1 bits), so polynomial space. This is correct for depth-first evaluation: at each level of recursion we store O(p(n)) bits, and depth is p(n), giving O(p(n)^2) space. The branching factor (number of possible messages, up to 2^{p(n)}) does not increase space because DFS explores one branch at a time. Correct. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0016 [Open] IP ⊆ PSPACE: deciding C(∅) ≥ 2^{p(n)}/2 vs the definition thresholds 2/3 and 1/3
- **Category:** Logical gap
- **Location:** comp:ip-in-pspace / proof, 判定
- **Detail:** The proof says: if w ∈ A then C(∅)/2^{p(n)} ≥ 2/3, if w ∉ A then ≤ 1/3; so decide by C(∅) ≥ 2^{p(n)}/2. Since 2/3 > 1/2 > 1/3, the threshold 1/2 separates the two cases. Correct. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0017 [Open] Arithmetization definition: degree in each variable ≤ length of φ
- **Category:** Unsupported fact
- **Location:** comp:arithmetization
- **Detail:** The definition says: substituting 0,1 gives the truth value, and the degree in each variable is at most the length of φ. This is correct: each variable appears at most once per occurrence, and the operations ¬, ∧, ∨ do not increase the degree beyond the number of occurrences, which is ≤ length. Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0018 [Open] Prenex form lemma: the equivalence (Qx α) ∘ β ≡ Qx (α ∘ β) requires x not free in β, and renaming bound variables is needed; the proof mentions this
- **Category:** Logical gap
- **Location:** comp:prenex-tqbf / proof
- **Detail:** The proof renames bound variables to distinct new variables, then applies the equivalences. The side condition 'x does not appear in β' is stated. The claim that length does not increase and the number of operations is O(length^2) is plausible. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0019 [Open] TQBF ∈ IP: Step 1 operator sequence and k = m + m(m+1)/2 ≤ n^2 for n ≥ 3
- **Category:** Logical gap
- **Location:** comp:tqbf-in-ip / Step 1
- **Detail:** The sequence has m quantifiers and R-blocks of sizes 1,2,...,m, total m + m(m+1)/2. For m ≤ n, this is ≤ n + n(n+1)/2 ≤ n^2 for n ≥ 3. The proof states k ≤ n^2 for n ≥ 3, and handles n < 6 separately. Correct. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0020 [Open] TQBF ∈ IP: f_0 is constant and equals 1 if ψ true, 0 if false — need to verify the R operators preserve {0,1} values and the quantifiers act as AND/OR
- **Category:** Logical gap
- **Location:** comp:tqbf-in-ip / Step 1
- **Detail:** The proof states R preserves values on {0,1} and makes y_{i+1} linear; ∀,∃ act as AND/OR on {0,1}. This is correct: R applied to a function already {0,1}-valued at the point gives the same value, and the linear interpolation (1-y)f(0)+y f(1) at y ∈ {0,1} gives f(0) or f(1). The quantifiers ∀,∃ correspond to product and the ∗ operation (which is OR on {0,1}). So f_0 is the truth value. Correct. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0021 [Open] TQBF ∈ IP: soundness — if g = h (correct polynomial) then the check fails because v is wrong; but v could coincidentally equal the correct value even if the claim is wrong
- **Category:** Logical gap
- **Location:** comp:tqbf-in-ip / 健全性
- **Detail:** The soundness argument: if the sent g equals the correct polynomial h, then the right-hand side of the check equals the correct value, which differs from the wrong v, so reject. If g ≠ h, then g(r) = h(r) for at most n values of r, probability ≤ n/q. If g(r) ≠ h(r), then the next claim v = g(r) is also wrong. This is the standard argument. One subtlety: the claim 'v is wrong' means v ≠ f_{i-1}(current assignment). The check compares v with the expression in g; if g = h, the expression equals f_{i-1}, so v ≠ expression, reject. Correct. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0022 [Open] TQBF ∈ IP: the final check computes p_φ at the random assignments and compares with v; if the claim is wrong, direct computation rejects — but the verifier must compute p_φ in polynomial time
- **Category:** Logical gap
- **Location:** comp:tqbf-in-ip / Step 4, 最後
- **Detail:** The verifier computes p_φ at the assigned random values. p_φ has degree ≤ n in each variable and size O(n), so evaluation takes O(n) field operations (or O(n^2) with naive evaluation). Polynomial time. Correct. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0023 [Open] TQBF ∈ IP: completeness — the honest prover sends the correct f_i, and all checks hold; but the prover must compute f_i, which may be exponential; however the prover is unbounded
- **Category:** Logical gap
- **Location:** comp:tqbf-in-ip / 完全性
- **Detail:** The prover is computationally unbounded, so it can compute f_i. The completeness argument is correct. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0024 [Open] Shamir's theorem: A ≤_P TQBF uses TQBF PSPACE-completeness; the verifier computes f(w) and runs the TQBF protocol; but the TQBF protocol's soundness is for TQBF, and the reduction preserves membership
- **Category:** Logical gap
- **Location:** comp:ip-pspace / proof
- **Detail:** The proof: A ∈ PSPACE implies A ≤_P TQBF (by TQBF PSPACE-completeness). The verifier computes f(w) and runs the TQBF ∈ IP protocol on f(w). Since f(w) has polynomial length, the whole thing is polynomial time. Soundness: if w ∉ A then f(w) ∉ TQBF, so the TQBF protocol rejects with probability ≥ 2/3. Correct. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0025 [Open] Problem: #SAT ∈ IP via sum-check; the solution says 'linearization is unnecessary because sum does not increase degree'
- **Category:** Unsupported fact
- **Location:** comp:prob-ip-sum-check / solution
- **Detail:** The solution says each variable's degree is ≤ n and 'sum does not increase degree, so linearization is unnecessary'. This is correct: summing over a variable does not increase the degree in the remaining variables. However, the prover sends g(z) ≈ f_i(r_1,...,r_{i-1},z), and the verifier checks v = g(0)+g(1). The degree of g in z is ≤ n, so the Schwartz–Zippel bound applies. Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0026 [Open] Problem: #SAT ∈ IP — the verifier needs q > 2^m to ensure f_0 = k as integers; but q is chosen by the prover and sent with a certificate; the verifier must check q > max(k, 2^m) and q > n^4
- **Category:** Unsupported fact
- **Location:** comp:prob-ip-sum-check / solution
- **Detail:** The solution says use a prime q larger than max(k, 2^m) and n^4, and the prover sends q with a Pratt certificate. The verifier checks q is prime and q > max(k, 2^m, n^4). This ensures f_0 ≤ 2^m < q and k < q, so f_0 = k in F_q iff equal as integers. Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0027 [Open] Problem: #SAT ∈ IP — the soundness error m·n/q ≤ n^2/n^4; but q could be as small as just above max(k, 2^m, n^4), and if 2^m is large, q is large, so the bound holds
- **Category:** Unsupported fact
- **Location:** comp:prob-ip-sum-check / solution
- **Detail:** The error bound m·n/q with q ≥ n^4 gives ≤ m·n/n^4 ≤ n^2/n^4 = 1/n^2 (since m ≤ n). Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0028 [Open] Supplement: 'MIP = NEXP' and 'PCP theorem' connection
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement states MIP = NEXP (Babai–Fortnow–Lund) and that 'the latter connects to the PCP theorem (NP proofs can be checked by reading a constant number of bits at random)'. The PCP theorem is indeed about NP, and MIP = NEXP is a separate result. The phrase 'the latter connects to the PCP theorem' is vague but not false: the techniques are related, and MIP = NEXP is often proved via PCP-like ideas. However, strictly, the PCP theorem is not a consequence of MIP = NEXP, and the parenthetical definition of PCP is correct. This is a minor imprecision, not a clear error. I will not report it.
- **Proposed fix:** No change needed; optionally clarify that the PCP theorem concerns NP and is proved by related techniques.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0029 [Open] Supplement: 'the verifier learns nothing other than non-isomorphism' for GNI
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** As noted, the GNI protocol is honest-verifier zero-knowledge, not necessarily zero-knowledge against malicious verifiers without additional setup. The statement is a common simplification. Borderline; not reporting as a definite error.
- **Proposed fix:** No change needed; optionally qualify as honest-verifier zero-knowledge.
- **Reported:** 2026-10-28 (10fede1)
