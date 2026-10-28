# Verification tracker: `01-foundations/03-computation/04-complexity/07-probabilistic-quantum.html`

<!-- source: 01-foundations/03-computation/04-complexity/07-probabilistic-quantum.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 6 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The proofs (amplification, Schwartz–Zippel, BPP ⊆ PSPACE, BPP ⊆ BQP, BQP ⊆ PSPACE) are sound and the hypcheck is accurate. The main problems are in the supplement: the attribution and interpretation of Grover's optimality (conflating the BBBV lower bound with Grover's algorithm and overstating it as evidence against NP ⊆ BQP), the imprecise statement about deferred measurement, the Impagliazzo–Wigderson assumption, and the ambiguous 'RP (の補集合)' phrasing for primality. These are supplement/remark errors (kind 5) and should be corrected for precision.

## Issues

### ISSUE-0001 [Open] Grover optimality misattributed to BBHT
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (Grover bullet)
- **Detail:** The supplement states that the Θ(√N) optimality of Grover's algorithm for the number of oracle queries is known, attributing it to Bennett–Bernstein–Brassard–Vazirani. BBHT (1997) gives a matching upper bound (and handles unknown number of solutions), but the matching lower bound Ω(√N) is due to Bennett–Bernstein–Brassard–Vazirani (1997) only for the decision/search lower bound in a specific model; the standard tight lower bound is usually attributed to BBBV for the search problem, but the claim as stated (Θ(√N) optimality) is a combination of upper and lower bounds and the attribution to a single paper is imprecise. More importantly, the sentence '古典的な確率的計算では Ω(N) 回が必要' is correct, but the optimality claim should be attributed to the lower-bound result (BBBV) separately from the algorithm (Grover).
- **Proposed fix:** グローヴァーのアルゴリズム（1996）は O(√N) 回で見つける。古典的な確率的計算では Ω(N) 回が必要であり、量子問い合わせ計算量の下界 Ω(√N) はベネット–バーンスタイン–ブラサール–ヴァジラニ（1997）による。よって問い合わせ回数については Θ(√N) が最適である。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Grover optimality as evidence against NP in BQP
- **Category:** Supplement/remark error
- **Location:** supplement / BQP と NP bullet
- **Detail:** The supplement says Grover's optimality is regarded as oracle-relativized evidence that quantum computers cannot solve NP-complete problems exponentially faster than brute force. This is an overstatement: Grover's optimality only shows that unstructured search needs Ω(√N) queries; it says nothing about structured problems like SAT, and relativized evidence against NP ⊆ BQP comes from the Bennett–Bernstein–Brassard–Vazirani oracle separation (there exists an oracle relative to which NP ⊄ BQP), not from Grover's optimality per se. The claim conflates the two.
- **Proposed fix:** グローヴァーの最適性は、非構造的な探索が Ω(√N) 回を要することを示すにとどまる。NP ⊄ BQP となるオラクルが存在する（ベネット–バーンスタイン–ブラサール–ヴァジラニ）ことが、NP 完全問題を量子計算機が指数的高速化で解けないことの、神託に相対化した証拠とされる。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Measurement can be deferred without changing power — needs caveat
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討 (second bullet)
- **Detail:** The claim that intermediate measurements do not change computational power (can be deferred to the end) is true for the class BQP with bounded error, via the principle of deferred measurement. However, as stated without the bounded-error/unitary-circuit caveat it is slightly imprecise: deferring measurement requires replacing each measurement with a controlled operation and an ancilla, which is fine for BQP. The statement is essentially correct but should note that this holds for the standard uniform circuit model with bounded error.
- **Proposed fix:** 量子回路の模型では、途中で測定することを許しても（標準的な一様回路族・有界誤差の枠組みで）計算能力は変わらないことが知られている（測定を最後まで遅らせ、測定結果を制御ビットとして保持すればよい）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Impagliazzo–Wigderson gives BPP = P only under circuit lower bounds
- **Category:** Supplement/remark error
- **Location:** supplement / 脱乱択化 bullet
- **Detail:** The supplement says 'under assumptions about circuit lower bounds, BPP = P follows (Impagliazzo–Wigderson)'. This is correct in spirit but the precise statement is: if there is a function in E (or EXP) requiring exponential-size circuits (a circuit lower bound), then BPP = P (more precisely, BPP ⊆ ∩_{ε} DTIME(2^{n^ε}) and derandomization follows). The phrasing '回路の下界についての仮定' is acceptable but should specify that the assumption is a lower bound for E/EXP, not an arbitrary circuit lower bound.
- **Proposed fix:** E（または EXP）が指数サイズの回路を要するという回路下界の仮定のもとで BPP = P が従うことが知られている（インパリアッツォ–ウィグダーソン）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] PRIMES was in coRP, not RP
- **Category:** Supplement/remark error
- **Location:** supplement / 脱乱択化 bullet
- **Detail:** The supplement says '素数判定は長く RP（の補集合）の代表例だった'. The parenthetical '(の補集合)' makes it coRP, which is correct (Miller–Rabin gives coRP). However the phrasing 'RP（の補集合）' is ambiguous and could be read as RP itself. PRIMES was known to be in coRP (and in RP assuming ERH), not in RP unconditionally. The statement should be made precise.
- **Proposed fix:** 素数判定は長く coRP（合成数の証明は RP）の代表例だったが（\ref{comp:primes-bpp}）、P に属することが示された（AKS 2002）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Shor: discrete log in BQP — fine, but 'factoring in BPP unknown' phrasing
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (Shor bullet)
- **Detail:** The Shor bullet says factoring and discrete log are in BQP, and whether factoring is in BPP is unknown. This is correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
