# Verification tracker: `01-foundations/04-set-theory/01-basics/08-cantor-theorem.html`

<!-- source: 01-foundations/04-set-theory/01-basics/08-cantor-theorem.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem, its corollaries and the proofs are correct, and the citations match their targets. The problems are confined to the supplements: the 'general form' of Lawvere's argument is stated without the necessary hypothesis that $Y$ be nonempty (it fails for $Y=\varnothing$), and the remark about replacing maps by relations is imprecise/vacuous as written. Both are fixable by adding the missing hypothesis and by restating the relation remark precisely.

## Issues

### ISSUE-0001 [Open] The general form's proof omits the requirement that Y be nonempty
- **Category:** Supplement/remark error
- **Location:** supplement (一般形) / proof of the general form
- **Detail:** The supplement claims: if $\sigma\colon Y\to Y$ has no fixed point, then for any set $X$ there is no surjection $F\colon X\to Y^{X}$. This is false when $Y=\varnothing$: then $Y^{X}=\varnothing^{X}$ is a singleton for every $X$ (the empty map), so the unique map $X\to Y^{X}$ is surjective whenever $X\neq\varnothing$. The proof breaks down because $g(x)=\sigma(F(x)(x))$ presupposes that $F(x)(x)\in Y$ exists, i.e. that $Y\neq\varnothing$ (and $X\neq\varnothing$). Note also that the later bullet in the same supplement says the hypothesis on $\sigma$ is equivalent to '$Y$ has at least 2 elements' only when $Y\neq\varnothing$, which shows the author is aware of the empty case but did not carry the hypothesis into the general statement.
- **Proposed fix:** State the general form as: 'Let $Y$ be a nonempty set and $\sigma\colon Y\to Y$ a map without fixed points. Then for every set $X$ there is no surjection $F\colon X\to Y^{X}$.' (For $Y=\varnothing$ and $X\neq\varnothing$ the unique map $X\to\varnothing^{X}$ is surjective, so the nonemptiness of $Y$ is essential.)
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] The claim that 'a relation covers all subsets' is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると) / bullet '写像を関係に替える'
- **Detail:** The bullet says: if $X\neq\varnothing$, then a relation $X\times\mathcal{P}(X)$ 'covers' every subset. As written this is trivially true for any relation (every subset is a second coordinate of some pair), so it does not express the intended contrast with the functional case. The intended point is that for every relation $R\subseteq X\times\mathcal{P}(X)$ there is some $A\in\mathcal{P}(X)$ with no $x$ such that $(x,A)\in R$ and $x\in A$ (or $x\notin A$), i.e. the diagonal set can be avoided only because $f(d)$ is single-valued. The statement as phrased is either vacuous or, if read as 'every subset is hit by the diagonal-compatible condition', false.
- **Proposed fix:** Replace with: 'For a relation $R\subseteq X\times\mathcal{P}(X)$ the diagonal set $D=\{x\in X\mid (x,\{x\})\notin R\}$ need not be a counterexample, since $R$ may relate $x$ to several subsets at once; the argument uses that $f(d)$ is a single set. Concretely, the relation $R=X\times\mathcal{P}(X)$ relates every $x$ to every subset, so no subset is missed.'
- **Reported:** 2026-10-28 (8ccef3d)
