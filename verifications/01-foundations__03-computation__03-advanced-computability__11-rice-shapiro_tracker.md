# Verification tracker: `01-foundations/03-computation/03-advanced-computability/11-rice-shapiro.html`

<!-- source: 01-foundations/03-computation/03-advanced-computability/11-rice-shapiro.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Kleene–Lacombe–Schoenfield mischaracterized as 'computable functionals are effectively continuous'
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says the Kleene–Lacombe–Schoenfield theorem states that 'computable functionals are effectively continuous' (計算可能な汎関数は実効的に連続). The actual theorem is about computable functionals on Baire space (or on the computable reals): a computable functional is continuous on its domain, and continuity is effective in the sense that a modulus of continuity can be computed from the functional and a finite approximation. The phrasing 'computable functionals are effectively continuous' is imprecise/overstated: continuity holds only on the domain of the functional, and 'effectively continuous' needs the precise statement (there is a computable modulus functional). As stated it is a vague and slightly false claim.
- **Proposed fix:** Replace with: 'クライゼル–ラコンブ–ショーンフィールドの定理：計算可能な汎関数 $F$ はその定義域上で連続であり、しかも連続性は実効的である（$F$ と有限近似から連続性の modulus が計算できる）。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that c.e. index sets correspond exactly to open sets in the Scott topology is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement states that, viewing c.e. sets as points and finite sets as basic neighborhoods (Scott topology), 'recognizable index sets correspond exactly to open sets' (認識可能な指数集合はちょうど開集合に対応する). This is not literally correct: the Scott-open subsets of the c.e. sets (or of $\mathcal{P}(\omega)$) are exactly the sets that are upward closed and compact (i.e., determined by finite information), but not every such open set has a c.e. index set. The correspondence is between c.e. index sets and *effectively* open sets (open sets with a c.e. presentation), not all open sets. As stated ('ちょうど開集合に対応する') it overstates the result.
- **Proposed fix:** Replace with: '認識可能集合を点、有限部分集合を基本近傍とみる（スコット位相）と、認識可能な指数集合はちょうど「実効的に開な集合」（開集合であって、その基本近傍による表示が計算可能に列挙できるもの）に対応する。'
- **Reported:** 2026-10-28 (8ccef3d)
