# Verification tracker: `01-foundations/03-computation/03-advanced-computability/09-low-simple.html`

<!-- source: 01-foundations/03-computation/03-advanced-computability/09-low-simple.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main construction (Post's simple set, limit lemma, low simple set via finite injury, Dekker's deficiency set) is logically sound and the proofs check out. The genuine problems are concentrated in the supplement: the characterization of high sets wrongly includes the hypothesis $A\le_{\mathrm{T}}\varnothing'$, the description of the limit lemma as giving finitely-changing approximations is false (that characterizes computable sets, not $\Delta_{2}$), and the low basis theorem remark is loosely worded. No issues in the theorem statements or proofs themselves.

## Issues

### ISSUE-0001 [Open] High sets characterization misstated
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement says a high set is one with $A''\equiv_{\mathrm{T}}\varnothing''$ and parenthetically adds $(A\le_{\mathrm{T}}\varnothing')$. The condition $A\le_{\mathrm{T}}\varnothing'$ (i.e. $A$ is $\Delta_{2}$) is not part of the definition of high; high sets are simply those with $A'\equiv_{\mathrm{T}}\varnothing''$ (equivalently $A''\equiv_{\mathrm{T}}\varnothing''$). Many high sets are not $\Delta_{2}$ (e.g. $\varnothing''$ itself is high and not $\le_{\mathrm{T}}\varnothing'$). The parenthetical is a false extra hypothesis.
- **Proposed fix:** Replace with: 低集合の双対として、$A'\equiv_{\mathrm{T}}\varnothing''$（同値に $A''\equiv_{\mathrm{T}}\varnothing''$）となる**高**集合や、$A^{(n)}\equiv_{\mathrm{T}}\varnothing^{(n)}$ となる $\mathrm{low}_{n}$ 集合の階層が考えられる。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Limit lemma mischaracterized as characterizing Δ2 sets by finitely-changing approximations
- **Category:** Supplement/remark error
- **Location:** supplement (似た定理)
- **Detail:** The supplement states the limit lemma characterizes $\Delta_{2}$ sets as those with a computable approximation that changes only finitely many times. That is wrong: the limit lemma gives approximations that may change infinitely often (only requiring convergence to a limit). Approximations with a bounded number of changes characterize the computable sets, not $\Delta_{2}$. The sentence conflates the limit lemma with the difference hierarchy (which bounds the number of changes and yields $n$-c.e. sets).
- **Proposed fix:** Replace with: 極限補題は、$\Delta_{2}$ の集合（\ref{comp:post-theorem}）を「計算可能な近似をもち、各点で極限が存在する」集合として特徴づける。近似の変化の回数に上限 $n$ を付けると、差の階層（$n$-c.e. 集合）が得られる（\tref{comp:page-difference-hierarchy}）。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Low basis theorem misattributed to reverse mathematics context
- **Category:** Supplement/remark error
- **Location:** supplement (似た定理)
- **Detail:** The supplement says low sets are important in nonstandard models of arithmetic and in reverse mathematics, citing the low basis theorem (every nonempty $\Pi^{0}_{1}$ class has a low member) with a pointer to the WKL0 page. The low basis theorem is a computability-theoretic result; its reverse-mathematics content is that it is provable in WKL0 (indeed equivalent to it over RCA0). Stating it as a fact 'important in reverse mathematics' with the parenthetical definition is acceptable, but the claim that the low basis theorem itself is a reverse-mathematics result about nonstandard models is imprecise. However, the pointer to the WKL0 page is legitimate since the low basis theorem is equivalent to WKL0. This is borderline; the main issue is the loose grouping.
- **Proposed fix:** Clarify: 低集合は、算術の非標準モデルでも現れ、また逆数学では低基底定理（空でない $\Pi^{0}_{1}$ クラスは低な元をもつ）が WKL$_0$ と同値であることが知られている（\ref{logic:page-rm-wkl0} を参照）。
- **Reported:** 2026-10-28 (8ccef3d)
