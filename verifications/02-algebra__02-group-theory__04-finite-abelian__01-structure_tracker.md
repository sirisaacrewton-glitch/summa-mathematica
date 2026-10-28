# Verification tracker: `02-algebra/02-group-theory/04-finite-abelian/01-structure.html`

<!-- source: 02-algebra/02-group-theory/04-finite-abelian/01-structure.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect claim that Hom(Q/Z,Q/Z) is uncountable
- **Category:** Supplement/remark error
- **Location:** grp:finite-abelian-duality / hypcheck (前提「有限」)
- **Detail:** The hypcheck states that $\hat{\hat{\Z}}=\Hom(\Q/\Z,\Q/\Z)$ is not isomorphic to $\Z$ and adds that $\Hom(\Q/\Z,\Q/\Z)$ is uncountable. The non-isomorphism is correct, but the parenthetical justification is false: $\Hom(\Q/\Z,\Q/\Z)$ is the Pontryagin dual of the discrete torsion group $\Q/\Z$, hence is compact and, being a closed subset of $(\Q/\Z)^{\Q/\Z}$ with $\Q/\Z$ countable, is a compact metric space, so it has cardinality at most $2^{\aleph_{0}}$; in fact it is isomorphic to the profinite completion $\hat{\Z}=\prod_{p}\Z_{p}$, which is uncountable but not 'uncountable' in the sense of being larger than continuum. More importantly, the claim as written ('$\Hom(\Q/\Z,\Q/\Z)$ is uncountable') is true but the reason given (that this is why it is not isomorphic to $\Z$) is misleading: $\Z$ is countable, so uncountability does suffice to show non-isomorphism. The real problem is that the statement is imprecise: $\Hom(\Q/\Z,\Q/\Z)\cong\hat{\Z}$ (profinite completion), which is indeed uncountable, so the claim is technically true. However, the phrasing 'is uncountable' as a justification is fine. Re-examining: the claim is actually correct. No error.
- **Proposed fix:** No change needed; the statement is correct.
- **Reported:** 2026-10-28 (10fede1)
