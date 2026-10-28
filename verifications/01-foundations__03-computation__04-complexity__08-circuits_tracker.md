# Verification tracker: `01-foundations/03-computation/04-complexity/08-circuits.html`

<!-- source: 01-foundations/03-computation/04-complexity/08-circuits.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine issue is that the theorem comp:time-to-size claims the circuit family can be output in polynomial time in t(n) without assuming t is time-constructible or computable, while the proof only patches this informally in a parenthetical remark; this should be stated as a hypothesis. The supplement's description of NC omits the polynomial-size and uniformity conditions, which is an imprecise/overstated claim. Other checked items (Shannon lower bound counting, padding argument, head-bound argument, Karp–Lipton statement, P/poly remark, CIRCUIT-SAT proof, Tseitin corollary) are correct.

## Issues

### ISSUE-0001 [Open] NC is not defined as depth O(log^k n) circuit families in the supplement
- **Category:** Supplement/remark error
- **Location:** supplement, '似た定理' paragraph
- **Detail:** The supplement says '深さ O(log^k n) の回路族のクラス NC は ... で扱う'. Strictly, NC is the class of languages decided by uniform circuit families of polynomial size and polylogarithmic depth, i.e. NC = ∪_k NC^k where NC^k has depth O(log^k n) and polynomial size. The supplement omits the polynomial-size requirement and the uniformity condition. As stated, 'depth O(log^k n) circuit families' alone would include families of exponential size, which is not NC. This is an imprecise/overstated claim in a supplement.
- **Proposed fix:** Replace with: '深さ $O(\log^{k}n)$ かつ多項式の大きさをもつ一様な回路族のクラス $\mathrm{NC}$ は \tref{comp:page-parallel} で扱う。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Time-to-size proof: the claim that t(n) can be computed in polynomial time is assumed without justification
- **Category:** Logical gap
- **Location:** comp:time-to-size / proof, size paragraph
- **Detail:** The proof says 't(n) が時間構成可能でなくても、M を 1^n の上で動かして T を得る代わりに、t の値を計算できることを仮定する。以下の応用では t は多項式'. The theorem statement says '1^n から C_n を t(n) の多項式時間で書き出せる'. If t is not time-constructible, computing t(n) may not be possible in polynomial time in t(n). The proof acknowledges this by assuming t is computable, and notes that in applications t is polynomial. However, the theorem statement as written claims the circuit can be written out in polynomial time in t(n) without assuming t is time-constructible or computable. This is a gap: the theorem should either assume t is time-constructible (or computable in polynomial time in t(n)), or restrict the polynomial-time output claim. The proof's parenthetical remark is an informal patch, not a hypothesis in the theorem. This is a genuine missing hypothesis.
- **Proposed fix:** Add to the theorem statement: 'さらに、$t$ が時間構成可能（または $1^{n}$ から $t(n)$ を $t(n)$ の多項式時間で計算できる）なら、$1^{n}$ から $C_{n}$ を $t(n)$ の多項式時間で書き出せる。'
- **Reported:** 2026-10-28 (8ccef3d)
