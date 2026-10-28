# Verification tracker: `01-foundations/03-computation/04-complexity/01-time-complexity.html`

<!-- source: 01-foundations/03-computation/04-complexity/01-time-complexity.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 6 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Hartmanis–Hennie bound misstated as o(n log n)
- **Category:** Supplement/remark error
- **Location:** remark after comp:ex-0k1k-time
- **Detail:** The remark claims that languages decided by a single-tape decider in time o(n log n) are exactly the regular languages. The Hartmanis–Hennie theorem (1965) states that if a language is decided by a single-tape TM in time t(n) with t(n) = o(n log n) and t(n) is 'time-constructible' (or at least satisfies a mild condition), then the language is regular. As stated without any constructibility/regularity condition on t, the claim is slightly overstated. Also the parenthetical description of the O(n log n) algorithm ('delete every other 0 and 1 and compare parity of counts each round') is vague but not false. The main issue is the missing hypothesis on t(n).
- **Proposed fix:** 時間 $o(n\log n)$ の単一テープの判定機が決定する言語は正規言語に限ることが知られている（ハートマニスとヘニーによる。ただし $t(n)$ が時間構成可能であるなどの緩やかな条件の下で）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that quantum computers may refute the extended Church–Turing thesis is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果
- **Detail:** The supplement says '量子計算機がこれに反するかどうかは未解決である'. The standard extended Church–Turing thesis concerns simulation with polynomial overhead by a *deterministic* TM. It is known (Shor) that quantum computers solve factoring in polynomial time, and factoring is not known to be in P; but whether quantum computation can be simulated by a deterministic TM in polynomial time is equivalent to whether BQP ⊆ P, which is generally believed false but not proven. Saying it is '未解決' whether quantum computers '反する' is acceptable only if phrased as the open problem BQP ⊆ P; as written it is vague but arguably not false. However, the more precise and standard statement is that it is unknown whether BQP ⊆ P (and widely expected that quantum computers do violate the extended thesis). This is borderline; I flag it as imprecise rather than false.
- **Proposed fix:** 量子計算機が多項式時間で解ける問題（例えば因数分解）が P に含まれるか、すなわち $\mathrm{BQP}\subseteq\mathrm{P}$ かどうかは未解決である（多くの研究者は成り立たないと予想している）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] P closed under composition/calling polynomially many times — statement about 'polynomial time procedures called polynomially many times'
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement says '多項式時間の手続きを多項式回呼んでも多項式時間'. This is true only if the number of calls is polynomially bounded in the *input length* and each call is on an input of polynomial length. As stated it is essentially correct for the standard composition of polynomial-time functions, but the phrase '多項式回' without specifying 'in the input length' is imprecise. Also 'P は入力が二倍になっても時間が定数倍にしか増えない問題のクラス' is a heuristic metaphor, not a precise claim; it is acceptable as a metaphor. I do not flag the metaphor. The composition claim is standard and true; I do not flag it.
- **Proposed fix:** （変更不要、または「入力長について多項式回」と明記する）
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Claim that unary RELPRIME is in P by trial division — correct but the remark about binary is the point
- **Category:** Supplement/remark error
- **Location:** hypcheck / 二進表記
- **Detail:** The hypcheck says '一進表記なら、素朴に 1,…,x で割ってみる方法でも多項式時間になってしまう'. This is correct: in unary the input length is x, so trial division up to x is polynomial in the input length. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Linear speedup theorem justification for O(·) in TIME
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討
- **Detail:** The supplement says TIME(t(n)) does not depend on constant factors, justified by the linear speedup theorem ('by packing symbols so one step processes several cells, time can be reduced by any constant factor'). This is essentially correct for the linear speedup theorem, but the linear speedup theorem requires t(n) to be at least linear (or the machine to have enough time); more precisely, for any c > 0 and any TM M running in time t(n), there is an equivalent TM running in time ε·t(n) + n + 2 (for sufficiently large t). The statement as given is a fair summary. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] CYK speedup by matrix multiplication attributed vaguely
- **Category:** Unsupported fact
- **Location:** supplement / 関連する結果
- **Detail:** The supplement states '*行列の積による CYK の高速化*（ヴァリアント）が知られている'. This is true: Valiant (1975) showed that CFG recognition can be reduced to Boolean matrix multiplication, giving subcubic algorithms. The attribution to 'ヴァリアント' (Valiant) is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
