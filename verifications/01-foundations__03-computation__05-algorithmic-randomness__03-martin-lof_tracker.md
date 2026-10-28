# Verification tracker: `01-foundations/03-computation/05-algorithmic-randomness/03-martin-lof.html`

<!-- source: 01-foundations/03-computation/05-algorithmic-randomness/03-martin-lof.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 11 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The proofs of the universal test, Levin–Schnorr, Omega's non-computability and Omega's randomness are sound. The main concern is in the supplement: the Miller–Yu theorem is stated with H(n) (prefix-free complexity of the length) rather than the standard K(n) (plain complexity of the length); while the two differ only by O(log n), the standard statement uses K(n), so the stated form is imprecise. Other supplement claims (Kucera–Gács, Schnorr randomness, invariance of the 2^{-n} threshold, Chaitin incompleteness) are essentially correct. No genuine logical gaps or missing hypotheses were found in the proofs.

## Issues

### ISSUE-0001 [Open] Miller–Yu theorem stated with wrong complexity term
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (ミラー–ユーの定理)
- **Detail:** The supplement states that X is random iff K(X\restr n) ≥ n − H(n) − O(1) for all n. The Miller–Yu theorem (equivalence of Martin-Löf randomness with plain Kolmogorov complexity) is usually stated as K(X\restr n) ≥ n − K(n) − O(1), i.e. the correction term is the plain complexity K(n) of the length, not the prefix-free complexity H(n). Since K(n) and H(n) differ by at most O(log n) (indeed K(n) ≤ H(n) + O(1) and H(n) ≤ K(n) + 2 log K(n) + O(1)), the two forms are equivalent up to an additive O(log n) absorbed into O(1)? No — the O(1) cannot absorb an O(log n) discrepancy, so the stated form with H(n) is not literally the standard statement and is at least imprecise. The standard statement uses K(n).
- **Proposed fix:** Replace with: *ミラー–ユーの定理.* $X$ がランダムであることと、$K(X\restr n)\ge n-K(n)-O(1)$ がすべての $n$ で成り立つことは同値である（ここで $K$ は通常の（接頭辞なしでない）コルモゴロフ複雑性）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Chaitin incompleteness: 'no statement of form H(x)>c_T provable' needs care
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (不完全性との関係)
- **Detail:** The claim that a sound c.e. theory T cannot prove any statement of the form 'H(x) > c_T' is essentially Chaitin's theorem, but as stated it is slightly off: the correct statement is that there is a constant c_T such that T proves no statement 'H(x) > c_T' for any specific string x (with H the prefix-free complexity relative to a fixed universal machine). The phrasing 'H(x)>c_T の形の文を一つも証明できない' is acceptable if c_T is fixed and x ranges over strings, which matches. However the parenthetical 'ほとんどの x でそれが真であるにもかかわらず' is fine. This is essentially correct; no change strictly required, but the constant depends on the choice of universal machine and on T being sound and c.e. — the text does say 健全で計算可能に公理化された. This is acceptable.
- **Proposed fix:** No change needed; optionally clarify that c_T depends on the universal machine and on T.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Kucera–Gács theorem phrasing
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (クチェラ–ガーチの定理)
- **Detail:** The statement 'どんな列も、あるランダムな列から計算できる' is the Kucera–Gács theorem and is correct: every sequence is Turing reducible to some Martin-Löf random sequence. This is accurate.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Changing 2^{-n} to any computable null sequence
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討
- **Detail:** The claim that replacing 2^{-n} by any computable sequence converging to 0 leaves the notion of randomness unchanged is correct (standard: the class of Martin-Löf tests is invariant under such changes, via taking subsequences / padding). This is accurate.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Schnorr randomness vs Martin-Löf
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討
- **Detail:** The claim that requiring the tests to be uniformly decidable (or requiring the measures to be computable) yields a strictly weaker randomness notion (Schnorr randomness) is correct. This is accurate.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Hypcheck: 'for every sequence K(X\restr n) ≤ n − log n infinitely often'
- **Category:** Unsupported fact
- **Location:** hypcheck / 接頭辞なし複雑性 H を使ったこと
- **Detail:** The hypcheck states: 'どんな列についても K(X\restr n) ≤ n − log n となる n が無限にあることが知られている（マルチン＝レーフ）'. This is a known result (Martin-Löf: for every sequence, K(X\restr n) ≤ n − K(n) + O(1), and since K(n) can be as large as log n + 2 log log n, one gets K(X\restr n) ≤ n − log n infinitely often). The statement is essentially correct but the attribution and precise form are loose: the correct statement is K(X\restr n) ≤ n − K(n) + O(1) for all n, which implies K(X\restr n) ≤ n − log n for infinitely many n. As stated it is true. Acceptable.
- **Proposed fix:** No change needed; optionally state the sharper K(X\restr n) ≤ n − K(n) + O(1).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Omega-random proof: g well-defined and H(x)>n argument
- **Category:** Logical gap
- **Location:** comp:omega-random / proof
- **Detail:** In the proof, g(τ) is defined as the first string not in O, where O is the set of outputs U(p) for p of length ≤ n that have halted by stage s. The claim H(x) > n requires that x is not the output of any program of length ≤ n. But H(x) > n means there is no p with |p| < ... actually H(x) > n means no p of length ≤ n? H(x) is the length of the shortest program, so H(x) > n means no program of length ≤ n outputs x. The proof argues x is not among outputs of length-≤n programs that halted by stage s, and by the Omega-Ω_s < 2^{-n} argument all length-≤n halting programs have halted by stage s. This is correct. However, there is a subtlety: g must be prefix-free / the machine M(p)=g(U(p)) requires g to be computable and the composition to be prefix-free. Since dom(U) is prefix-free, M is prefix-free. This is fine. The step 'H(x)>n' is justified. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Levin–Schnorr forward direction: strict inequality and V_c measure
- **Category:** Logical gap
- **Location:** comp:levin-schnorr / proof (ランダム ⇒ 圧縮できない)
- **Detail:** The proof writes λ([V_c]) ≤ Σ_{σ∈V_c} 2^{-|σ|} < Σ_σ 2^{-H(σ)-c} ≤ 2^{-c}. The strict inequality '<' is problematic: for σ ∈ V_c we have H(σ) < |σ| - c, i.e. |σ| > H(σ) + c, so 2^{-|σ|} < 2^{-H(σ)-c}. Summing over σ ∈ V_c gives Σ_{σ∈V_c} 2^{-|σ|} < Σ_{σ∈V_c} 2^{-H(σ)-c} ≤ Σ_σ 2^{-H(σ)-c} ≤ 2^{-c}. So the strict inequality holds termwise and the sum is finite, so it is fine. Actually the displayed chain has '<' between Σ_{σ∈V_c}2^{-|σ|} and Σ_σ 2^{-H(σ)-c}; this is valid since each term of the left sum is strictly less than the corresponding term on the right and the right sum converges. Acceptable.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] Universal test proof: W_{e,m} enumeration and hat construction
- **Category:** Logical gap
- **Location:** comp:universal-ml-test / proof
- **Detail:** The proof defines Ŵ_{e,m} by enumerating W_{e,m} and skipping σ if adding it would push the measure above 2^{-m}. It claims λ([Ŵ_{e,m}]) ≤ 2^{-m} and that if λ([W_{e,m}]) ≤ 2^{-m} then Ŵ_{e,m} = W_{e,m}. The latter: if λ([W_{e,m}]) ≤ 2^{-m}, then every finite subset has measure ≤ 2^{-m}, so nothing is skipped — correct. The measure bound: the greedy procedure ensures the measure of the finite set never exceeds 2^{-m}, and the limit is ≤ 2^{-m} — correct. The uniformity: the construction is uniform in e, m — correct. The claim V_{n+e+1} ⊆ U_n: since V_m = W_{e,m} = Ŵ_{e,m}, we have Ŵ_{e,n+e+1} = V_{n+e+1} ⊆ U_n. Correct. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0010 [Open] Omega not computable: prefix-free machine M with domain {1^e 0 : e ∈ K}
- **Category:** Logical gap
- **Location:** comp:omega-not-computable / proof
- **Detail:** The proof constructs a prefix-free machine M with domain {1^e 0 : e ∈ K}. This set is prefix-free (strings of form 1^e 0 are pairwise incomparable). M is a prefix-free machine, so M = M_d for some d, and 1^e 0 ∈ dom(M) iff 1^d 0 1^e 0 ∈ dom(U). This uses the standard simulation: U simulates M_d on input q by reading 1^d 0 then q. This is correct. Then K decidable, contradiction. Fine.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0011 [Open] Citation of comp:prob-kraft-plain in hypcheck
- **Category:** Improper link
- **Location:** hypcheck / 接頭辞なし複雑性 H を使ったこと
- **Detail:** The hypcheck cites 問題 \ref{comp:prob-kraft-plain} for the claim that Σ_σ 2^{-K(σ)} diverges. According to the label table, comp:prob-kraft-plain is problem 2.9 on the prefix-free complexity page. Whether that problem indeed asks to show Σ 2^{-K(σ)} diverges is not verifiable from the table, but the title is empty. This is a plausible citation. No clear error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
