# Verification tracker: `01-foundations/03-computation/05-algorithmic-randomness/05-chaitin-incompleteness.html`

<!-- source: 01-foundations/03-computation/05-algorithmic-randomness/05-chaitin-incompleteness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs (Chaitin's incompleteness theorem, the Ω-bits theorem, and the two problems) are logically sound: the machine B construction, the use of soundness, the Martin-Löf test argument, and the incompressible-string existence are all correctly applied, and the cited labels match their uses. The genuine problems are confined to the supplement and hypcheck side comments: the 'almost all bits are random facts' characterization of the Ω result is an overstatement, the Σ₁-soundness remark is too vague to be a precise claim, and the hypcheck's statement that L is bounded by the description length conflates L with the constant c_B. No issues in the proofs themselves.

## Issues

### ISSUE-0001 [Open] Ω bits result mischaracterized as 'almost all bits are random facts'
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement claims that the Ω-bits result shows Ω is such that 'for any sound theory, almost all bits are random facts'. This is a misstatement. The theorem (\ref{comp:chaitin-omega-bits}) says only that a sound c.e. theory determines finitely many bits of Ω; it says nothing about 'almost all bits being random facts', and 'random fact' is not a defined notion here. Moreover, the finitely-many-bits statement is a consequence of Ω's Martin-Löf randomness (\ref{comp:omega-random}), not a statement that each bit is individually random. The phrasing overstates and imprecisely describes the content.
- **Proposed fix:** Replace with: 'Ω の桁についての結果は、健全な理論が Ω の桁を有限個しか決定できないことを示す。これは Ω のマルチン＝レーフランダム性（\ref{comp:omega-random}）の帰結であり、Ω の桁の列が（どの健全な理論にとっても）圧縮不可能に近い仕方で並んでいることの現れである。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that Σ₁-sound theories give the same conclusion is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says that for Σ₁-sound arithmetic theories 'a similar conclusion is obtained'. This is vague and potentially misleading: the Chaitin bound for a sound complexity theory is about provable lower bounds on K(x); for a Σ₁-sound theory the relevant statement is that the set of provable 'K(x)>n' statements is bounded, which requires the theory to be Σ₁-sound with respect to the Σ₁ formula expressing 'K(x)>n'. As stated ('同様の結論が得られることが知られている') it is too loose to be a precise mathematical claim and could be read as asserting the full theorem under mere Σ₁-soundness without specifying the formula class.
- **Proposed fix:** Replace with: '算術の理論 T が Σ_{1} 健全（Σ_{1} 文について健全）であれば、「K(x)>n」を表す Σ_{1} 文について同様の上界が成り立つ。すなわち T が証明する K(x)>n なる文の n は有界である。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Hypcheck comment on L being bounded by description length is imprecise
- **Category:** Supplement/remark error
- **Location:** hypcheck (comp:chaitin-k proof)
- **Detail:** The hypcheck says 'L は B の符号の長さ、すなわち T を枚挙する機械の記述の長さで抑えられる（log₂n+1+c_B<n となる最小の n）'. The constant c_B depends on the description length of B, which in turn depends on the enumeration machine for T, but the phrase 'L is bounded by the length of the code of B' conflates L with c_B. In fact L is the least n with log₂ n + 1 + c_B < n, which is roughly c_B + log₂ c_B, not c_B itself. The parenthetical is correct but the preceding sentence 'L は…記述の長さで抑えられる' is loose (L exceeds c_B).
- **Proposed fix:** Replace with: '定数 L は c_{B}（B の符号の長さ、すなわち T を枚挙する機械の記述の長さに依存する定数）を用いて、\log_{2}n+1+c_{B}<n となる最小の n として取れる。'
- **Reported:** 2026-10-28 (8ccef3d)
