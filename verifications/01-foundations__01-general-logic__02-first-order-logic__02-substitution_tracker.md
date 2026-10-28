# Verification tracker: `01-foundations/01-general-logic/02-first-order-logic/02-substitution.html`

<!-- source: 01-foundations/01-general-logic/02-first-order-logic/02-substitution.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Simultaneous vs sequential substitution claim in supplement
- **Category:** Supplement/remark error
- **Location:** supplement / 同時代入
- **Detail:** The supplement claims that when the substituted terms are constants or fresh variables, simultaneous and sequential substitution coincide, and that this follows by iterating \ref{logic:substitution-commutation}. The commutation proposition requires the side condition $x\neq y$ and $x\notin\mathrm{var}(r)$; iterating it for arbitrary fresh variables/constants is not immediate, and more importantly the claim as stated is imprecise: sequential substitution $\varphi[s_{1}/x_{1}]\cdots[s_{n}/x_{n}]$ with fresh variables $s_{i}$ does coincide with simultaneous substitution only because the $s_{i}$ contain no $x_{j}$; this is correct but the justification via commutation is not the natural one and the commutation hypotheses ($x\notin\mathrm{var}(r)$) are not verified. The statement is essentially true but the cited justification is a mismatch.
- **Proposed fix:** Replace the justification: 'When each $s_{i}$ is a constant or a variable not among $x_{1},\dots,x_{n}$, the terms $s_{i}$ contain none of the $x_{j}$, so no later substitution rewrites inside an earlier $s_{i}$; hence the sequential substitutions act on disjoint occurrences and coincide with the simultaneous substitution (provable directly by induction on formulas).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Higher-viewpoint claim about substitution as homomorphism
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** The supplement says substitution $[s/x]$ on terms is the homomorphism extending $x\mapsto s$, and that substitution on formulas fails to be a homomorphism because $\forall x$ 'removes $x$ from the generators'. The term part is correct. The formula part is misleading: $[s/x]$ on formulas is not even a function on the term algebra in the required sense, and the phrase 'removes $x$ from the generators' is not a precise mathematical statement (the quantifier binds $x$, it does not remove a generator). This is an overstated/imprecise side comment.
- **Proposed fix:** Rephrase: 'Substitution $[s/x]$ on terms is the unique homomorphism of the free term algebra sending the generator $x$ to $s$ and fixing all other generators and constants. On formulas, $[s/x]$ is defined by recursion and is not induced by a homomorphism of the term algebra, because under $\forall x$ the variable $x$ is bound and the clause $ (\forall x\,\alpha)[s/x]=\forall x\,\alpha$ discards the substitution; this is exactly where capture can occur.'
- **Reported:** 2026-10-28 (8ccef3d)
