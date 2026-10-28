# Verification tracker: `01-foundations/03-computation/02-computability/05-register-machines.html`

<!-- source: 01-foundations/03-computation/02-computability/05-register-machines.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs (rm-to-L simulation, L-to-rm translation and correctness, equivalence corollary) are logically sound, with hypotheses (zero register, working registers per nesting depth, closed blocks) properly tracked in the hypcheck. The problems and solutions are correct. The genuine issues are confined to the supplement: the Minsky 2-counter-machine encoding description is mathematically confused (the prime-factorization-per-register picture does not match the actual 2-counter simulation), and the bounded-register remark is slightly overstated. No issues in the proofs or citations.

## Issues

### ISSUE-0001 [Open] Minsky 2-counter machine encoding claim is imprecise/wrong
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (ミンスキーの 2 カウンタ機械)
- **Detail:** The supplement claims that restricting to 2 registers still computes all computable functions provided input m is given as 2^m and output n read as 2^n, and describes encoding registers as 2^{r_0}3^{r_1}5^{r_2}... using a second register to multiply/divide by 3. This is confused: (a) with only 2 counters you cannot store an arbitrary product 2^{r_0}3^{r_1}5^{r_2}... in one counter and manipulate individual prime factors using a second counter — the standard Minsky result is that 2-counter machines (with the input/output coding 2^m, 2^n) compute all partial computable functions, but the encoding is of the *whole computation* into a single number, not a per-register prime factorization maintained during the run. The described mechanism ('multiply by 3', 'test divisibility by 3 and divide') requires the number to be held in a counter and a second counter to do the division, which does not correspond to the actual 2-counter simulation. As stated, the construction is not correct.
- **Proposed fix:** Replace with: 'レジスタを 2 個に制限した 2 カウンタ機械でも、入力 m を 2^{m}、出力 n を 2^{n} として与える符号化のもとで、すべての計算可能関数を計算できる（Minsky 1967）。証明は、計算の各段階（プログラムカウンタと全レジスタの値）を一つの自然数に符号化し、2 個のカウンタでその符号化を更新するシミュレーションによる。本サイトでは示していない。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Bounded-register machine equals finite automaton: overstated
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討 (レジスタの値に上限がないことは本質的)
- **Detail:** The claim 'a machine with finitely many registers each bounded is only as powerful as a finite automaton (finitely many configurations)' is essentially right for recognition, but stated as 'same level of ability' it is imprecise: such a machine computes exactly the functions computable by a finite-state device, i.e. functions depending only on a bounded amount of the input, and in particular cannot even compute m_1+m_2. The parenthetical justification (finitely many configurations) is correct, but the phrasing '有限オートマトンと同じ程度の能力しかない' without specifying that this means it cannot compute unbounded functions (e.g. addition) is an overstatement of what is shown. This is borderline; the core claim is true.
- **Proposed fix:** Make precise: '値に上限のあるレジスタを有限個しかもたない機械は、様相が有限個しかないので、計算できる関数は入力の有限個の情報しか使えない（たとえば m_{1}+m_{2} すら計算できない）。'
- **Reported:** 2026-10-28 (8ccef3d)
