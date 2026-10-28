# Verification tracker: `05-geometry-topology/01-general-topology/08-counterexamples/02-sorgenfrey.html`

<!-- source: 05-geometry-topology/01-general-topology/08-counterexamples/02-sorgenfrey.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (Lindelöf, normality, compact subsets countable, Sorgenfrey plane non-normal/non-Lindelöf via Jones's lemma) is logically sound and the citations match their targets. The genuine problems are confined to the supplement: the Jones's-lemma bound on closed discrete sets is stated with a strict inequality that the lemma does not give, the paracompact-times-compact theorem is stated without the needed Hausdorff/regularity hypothesis, and the complete-normality remark conflates complete normality with perfect normality.

## Issues

### ISSUE-0001 [Open] Jones's lemma does not bound closed discrete sets by the continuum
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement claims that in a separable normal space every closed discrete set has cardinality less than the continuum, citing Jones's lemma. Jones's lemma gives $2^{|D|}\le 2^{\aleph_{0}}$ for a closed discrete $D$ in a separable normal space, i.e. $|D|\le 2^{\aleph_{0}}$ (at most continuum), not strictly less than the continuum. The strict inequality is not what the lemma yields.
- **Proposed fix:** 可分正規空間の閉離散集合の濃度は高々連続体 $2^{\aleph_{0}}$ である（ジョーンズの補題）。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Paracompact times compact is paracompact: needs Hausdorff/regularity
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The statement 'the product of a paracompact space and a compact space is paracompact (hence normal)' is not true for arbitrary paracompact spaces; the standard theorem requires the paracompact factor to be Hausdorff (or regular), and 'hence normal' additionally requires $T_{1}$/regularity. As stated without hypotheses it is false.
- **Proposed fix:** ハウスドルフ（あるいは正則 $T_{1}$）なパラコンパクト空間とコンパクト空間の直積はパラコンパクト（したがって正規）であることが知られている。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Upper limit topology 'has the same properties' is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The upper limit topology (basis $(a,b]$) is homeomorphic to $\R_{\ell}$ via $x\mapsto -x$, so it shares the same topological properties, but the phrasing 'same properties' is loose. More importantly the supplement then asserts $\R_{\ell}$ is 'completely normal (all closed sets are $G_{\delta}$)'. Complete normality and 'every closed set is $G_{\delta}$' (perfect normality) are distinct notions; conflating them in parentheses is an error. The Sorgenfrey line is indeed perfectly normal, but the parenthetical definition misidentifies complete normality.
- **Proposed fix:** $\R_{\ell}$ は完全正規かつ完全正規（perfectly normal、すなわち閉集合がすべて $G_{\delta}$）であることが知られている。
- **Reported:** 2026-10-28 (8ccef3d)
