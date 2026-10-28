# Verification tracker: `01-foundations/03-computation/03-advanced-computability/12-index-set-completeness.html`

<!-- source: 01-foundations/03-computation/03-advanced-computability/12-index-set-completeness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems (FIN $\Sigma_{2}$-complete, TOT $\Pi_{2}$-complete, COF $\Sigma_{3}$-complete) and their proofs, including the movable-marker argument and the hypcheck, are logically sound; the corollary and problems are correct. The genuine problems are confined to the supplement: the claim that all reductions can be taken injective (so $\le_{1}$-completeness follows) is not justified by the proofs, and the assertion that $\Sigma_{n}$-complete sets are Turing equivalent to $\varnothing^{(n)}$ is supported only by a citation to the (unrelativized) Post theorem, which does not cover general $n$.

## Issues

### ISSUE-0001 [Open] One-one reducibility claim: reductions are not all injective
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement claims that all reductions on this page can be taken injective, so the same completeness holds for one-one reducibility $\le_{1}$. This is false as stated. The reductions built here (e.g. $g(x)$ for FIN, $f(x)$ for TOT, $g(x)$ for COF) are obtained from the smn theorem and are not injective; the $s^{1}_{1}$ function can be chosen injective, but the resulting index $g(x)$ need not be injective in $x$. Moreover, $\Sigma_{n}$-completeness under $\le_{1}$ is a strictly stronger property than under $\le_{\mathrm{m}}$, and the standard results (FIN $\Sigma_{2}$-complete, TOT $\Pi_{2}$-complete, COF $\Sigma_{3}$-complete) are stated for $\le_{\mathrm{m}}$. The blanket assertion that 'the same completeness holds' for $\le_{1}$ is not justified and is not what the proofs deliver.
- **Proposed fix:** Replace with: 'Even if one uses one-one reducibility $\le_{1}$ instead of many-one reducibility, the completeness statements in this page remain true, but this requires a separate argument: the reductions constructed here via the smn theorem are not automatically injective, and one must verify injectivity (or use the fact that $\Sigma_{n}$-complete sets are also $\le_{1}$-complete) separately.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Turing-equivalence of Sigma_n-complete sets with 0^(n) needs the relativized Post theorem
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement states that, viewed under Turing reducibility, every $\Sigma_{n}$-complete set is Turing equivalent to $\varnothing^{(n)}$, citing the Post theorem page and problems 7.5/7.6. The Post theorem (comp:post-theorem) as cited concerns the characterization of $\Sigma_{1}$-complete/creative sets and does not by itself give $\Sigma_{n}$-complete $\equiv_{T}\varnothing^{(n)}$ for general $n$; that requires the relativized Post theorem or a separate argument (e.g. $\varnothing^{(n)}$ is $\Sigma_{n}$-complete and $\le_{\mathrm{m}}$-completeness implies $\equiv_{T}$). The citation is thus not adequate for the general-$n$ claim as written.
- **Proposed fix:** Either restrict the claim to $n=1$ ('for $n=1$, $\Sigma_{1}$-complete sets are Turing equivalent to $\varnothing'$'), or add the missing justification: '$\varnothing^{(n)}$ is $\Sigma_{n}$-complete, and since $\le_{\mathrm{m}}$-completeness gives $C\le_{\mathrm{m}}\varnothing^{(n)}$ and $\varnothing^{(n)}\le_{\mathrm{m}}C$, we get $C\equiv_{T}\varnothing^{(n)}$.'
- **Reported:** 2026-10-28 (8ccef3d)
