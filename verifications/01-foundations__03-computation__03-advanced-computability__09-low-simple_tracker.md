# Verification tracker: `01-foundations/03-computation/03-advanced-computability/09-low-simple.html`

<!-- source: 01-foundations/03-computation/03-advanced-computability/09-low-simple.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main proofs (Post's simple set, limit lemma, low simple set via finite injury, Dekker's deficiency set) are sound. The issues found are confined to the supplement: the high-set definition incorrectly adds the condition $A\le_{\mathrm{T}}\varnothing'$, which is not part of the definition of high sets and is false in general; and the low basis theorem is loosely attributed to nonstandard models of arithmetic in addition to reverse mathematics. Both are side-comment errors of kind 5 and should be corrected.

## Issues

### ISSUE-0001 [Open] Low basis theorem misattributed to reverse mathematics context
- **Category:** Supplement/remark error
- **Location:** supplement (似た定理)
- **Detail:** The supplement states that the low basis theorem (every nonempty Π⁰₁ class has a low member) is important in nonstandard models of arithmetic and reverse mathematics, citing logic:page-rm-wkl0. The low basis theorem is indeed equivalent to WKL₀ over RCA₀, so the reverse mathematics claim is fine. However, the parenthetical attributes the low basis theorem as a fact 'important in reverse mathematics' — this is correct. The concern is the phrasing '算術の非標準モデルや逆数学（低基底定理…）でも重要である' which lumps the low basis theorem under both nonstandard models and reverse math. The low basis theorem's role in nonstandard models is not standard; it is a reverse-math/recursion-theory result. This is an imprecise/overstated side claim.
- **Proposed fix:** Restrict the claim: 'The low basis theorem (every nonempty $\Pi^{0}_{1}$ class has a low member) is equivalent to WKL$_0$ over RCA$_0$ and is important in reverse mathematics (see \ref{logic:page-rm-wkl0}).' Remove the nonstandard-models attribution unless a specific reference is given.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] High set definition conflates condition
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement defines high sets as those with $A''\equiv_{\mathrm{T}}\varnothing''$ and parenthetically adds '($A\le_{\mathrm{T}}\varnothing'$)'. A high set is by definition a set with $A'\equiv_{\mathrm{T}}\varnothing''$ (equivalently $A''\equiv_{\mathrm{T}}\varnothing''$), and high sets need NOT be computable from $\varnothing'$; in fact high sets are typically not low, and the class of high sets is not contained in $\Delta_2$. The parenthetical '$A\le_{\mathrm{T}}\varnothing'$' is false as a general property of high sets.
- **Proposed fix:** Define high sets as those with $A'\equiv_{\mathrm{T}}\varnothing''$ (equivalently $A''\equiv_{\mathrm{T}}\varnothing''$), and drop the incorrect parenthetical '$A\le_{\mathrm{T}}\varnothing'$'. If a restriction to $\Delta_2$ sets is intended, state it explicitly: 'among $\Delta_2$ sets, the dual of low is high, $A'\equiv_{\mathrm{T}}\varnothing''$'.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Post's theorem attribution for simple sets not m-complete
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement says 'ポストは単純集合が $\varnothing'$ と $m$ 同値でないことを示した' (Post showed simple sets are not m-equivalent to $\varnothing'$). This is correct in substance (Post showed simple sets are not m-complete), and it cites comp:simple-not-complete. This is fine. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
