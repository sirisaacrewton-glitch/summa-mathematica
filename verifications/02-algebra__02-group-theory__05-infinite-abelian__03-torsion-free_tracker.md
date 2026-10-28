# Verification tracker: `02-algebra/02-group-theory/05-infinite-abelian/03-torsion-free.html`

<!-- source: 02-algebra/02-group-theory/05-infinite-abelian/03-torsion-free.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (rank, height/type, Baer's classification, the rank-two indecomposable example, Pontryagin's criterion, Baer–Specker and Specker's theorem) is logically sound: proofs check out, citations match their targets, and the hypcheck comments are accurate. The only genuine problems are in the supplement: the type-order characterization of subgroup embedding is imprecisely stated (needs the 'there exist representatives with componentwise $\le$' formulation), and the claim about indecomposable groups of arbitrary countable rank is stated more strongly than the cited construction supports without an explicit limiting argument. Both are medium-confidence supplement issues; no proof-level errors were found.

## Issues

### ISSUE-0001 [Open] Type order characterization of embedding is misstated
- **Category:** Supplement/remark error
- **Location:** supplement / 型と準同型
- **Detail:** The supplement claims that for rank-one torsion-free groups $G,H$, $G$ embeds in $H$ iff $\mathbf{t}(G)\le\mathbf{t}(H)$ (componentwise with finitely many exceptions). This is not correct as stated. The correct Baer criterion is: $G$ is isomorphic to a subgroup of $H$ iff there is a representative $\chi$ of $\mathbf{t}(G)$ and a representative $\psi$ of $\mathbf{t}(H)$ with $\chi\le\psi$ componentwise (i.e. $\mathbf{t}(G)\le\mathbf{t}(H)$ in the order where one may choose representatives). The phrase '成分ごとの大小で、有限個の差を許したもの' is ambiguous and, read literally as comparing the types themselves componentwise up to finite differences, is false: e.g. $\Z$ (type $(0,0,\dots)$) embeds in $\Z[1/2]$ (type $(\infty,0,\dots)$), consistent, but the naive reading would also wrongly allow comparisons that ignore the direction of finite differences. The statement needs the precise 'there exist representatives with $\chi\le\psi$' formulation.
- **Proposed fix:** For rank-one torsion-free $G,H$: $G$ is isomorphic to a subgroup of $H$ iff there exist height sequences $\chi$ with $\mathbf{t}(\chi)=\mathbf{t}(G)$ and $\psi$ with $\mathbf{t}(\psi)=\mathbf{t}(H)$ such that $\chi_{i}\le\psi_{i}$ for all $i$ (where $\infty$ is the largest value). Equivalently, $\mathbf{t}(G)\le\mathbf{t}(H)$ in the order on types defined by choosing representatives with $\chi\le\psi$ componentwise.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Indecomposable groups of arbitrary countable rank: 'countable rank' claim
- **Category:** Supplement/remark error
- **Location:** supplement / 高い階数
- **Detail:** The supplement says that by increasing the primes in \ref{grp:indecomposable-rank-two} one obtains indecomposable torsion-free groups of any countable rank. The construction in the theorem uses three primes $p,q,r$ and gives rank two; the standard generalization (using $n$ primes and vectors $u_{1},\dots,u_{n}$ with relations) does produce indecomposable groups of arbitrary finite rank $n$, and countable rank can be obtained by a direct limit, but the bare phrase '任意の可算な階数' (any countable rank, including infinite countable rank) is stated without the necessary limiting argument and is stronger than what the cited construction directly yields. As stated it is an unsupported strengthening.
- **Proposed fix:** By increasing the number of primes in the construction of \ref{grp:indecomposable-rank-two} (using $n$ distinct primes and $n$ basis vectors with the relation vector $(1,\dots,1)$), one obtains indecomposable torsion-free groups of every finite rank $n\ge2$; taking a suitable direct limit yields indecomposable groups of countable infinite rank.
- **Reported:** 2026-10-28 (8ccef3d)
