# Verification tracker: `01-foundations/03-computation/04-complexity/08-circuits.html`

<!-- source: 01-foundations/03-computation/04-complexity/08-circuits.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 2 / Resolved: 1 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] NC is not defined as depth O(log^k n) circuit families in the supplement
- **Category:** Supplement/remark error
- **Location:** supplement, '似た定理' paragraph
- **Detail:** The supplement says '深さ O(log^k n) の回路族のクラス NC は ... で扱う'. Strictly, NC is the class of languages decided by uniform circuit families of polynomial size and polylogarithmic depth, i.e. NC = ∪_k NC^k where NC^k has depth O(log^k n) and polynomial size. The supplement omits the polynomial-size requirement and the uniformity condition. As stated, 'depth O(log^k n) circuit families' alone would include families of exponential size, which is not NC. This is an imprecise/overstated claim in a supplement.
- **Proposed fix:** Replace with: '深さ $O(\log^{k}n)$ かつ多項式の大きさをもつ一様な回路族のクラス $\mathrm{NC}$ は \tref{comp:page-parallel} で扱う。'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still says '深さ O(log^k n) の回路族のクラス NC', omitting the polynomial-size and uniformity requirements; the imprecision remains.

### ISSUE-0002 [Resolved] Time-to-size proof: the claim that t(n) can be computed in polynomial time is assumed without justification
- **Category:** Logical gap
- **Location:** comp:time-to-size / proof, size paragraph
- **Detail:** The proof says 't(n) が時間構成可能でなくても、M を 1^n の上で動かして T を得る代わりに、t の値を計算できることを仮定する。以下の応用では t は多項式'. The theorem statement says '1^n から C_n を t(n) の多項式時間で書き出せる'. If t is not time-constructible, computing t(n) may not be possible in polynomial time in t(n). The proof acknowledges this by assuming t is computable, and notes that in applications t is polynomial. However, the theorem statement as written claims the circuit can be written out in polynomial time in t(n) without assuming t is time-constructible or computable. This is a gap: the theorem should either assume t is time-constructible (or computable in polynomial time in t(n)), or restrict the polynomial-time output claim. The proof's parenthetical remark is an informal patch, not a hypothesis in the theorem. This is a genuine missing hypothesis.
- **Proposed fix:** Add to the theorem statement: 'さらに、$t$ が時間構成可能（または $1^{n}$ から $t(n)$ を $t(n)$ の多項式時間で計算できる）なら、$1^{n}$ から $C_{n}$ を $t(n)$ の多項式時間で書き出せる。'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Resolved — The theorem statement now explicitly conditions the polynomial-time output on being able to compute t(n) in polynomial time in t(n) (e.g. t polynomial), matching the proof's assumption.

### ISSUE-0003 [Open] P/poly remark: constant circuits for an undecidable language is wrong
- **Category:** Supplement/remark error
- **Location:** remark after comp:time-to-size
- **Detail:** The remark claims that the undecidable language {1^n : the machine coded by n halts on empty tape} is decided by a circuit family of constant circuits (0 or 1) at each n. This is false: a constant circuit C_n outputs the same bit for all inputs of length n, but the language contains only the single string 1^n of length n (and not other length-n strings), so no constant circuit decides it. The intended point (that P/poly allows non-uniform advice and contains undecidable languages) is correct, but the example as stated is not a valid circuit family deciding that language.
- **Proposed fix:** Replace with a correct example: the language {1^n : the machine coded by n halts on empty tape} is decided by the circuit family where C_n is the constant-1 circuit if the n-th machine halts on empty tape and the constant-0 circuit otherwise; since the language contains only strings of the form 1^n, a constant circuit on length n suffices (it must output 1 on 1^n and 0 on all other length-n strings, which is consistent because 1^n is the only relevant string). More precisely, define A = {1^n : M_n halts on empty tape}; then C_n = constant 1 if n in the set, constant 0 otherwise, decides A because for w of length n, w in A iff w = 1^n and n in the set.
- **Reported:** 2026-10-28 (048145a)
