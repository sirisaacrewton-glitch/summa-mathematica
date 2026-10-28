# Verification tracker: `02-algebra/02-group-theory/05-infinite-abelian/02-divisible.html`

<!-- source: 02-algebra/02-group-theory/05-infinite-abelian/02-divisible.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 19 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is mathematically sound overall. The proofs of the Prüfer group properties, Baer's theorem on divisible summands, the maximal divisible subgroup, the structure theorem, the embedding corollary, and both problems are correct, with hypotheses (AC, p-group, divisibility) properly tracked in the hypcheck. The supplement statements (Kulikov's theorem, Pontryagin duality with the p-adic integers) are accurate. The only genuine defect found is a minor mis-citation in Step 4 of the structure theorem, where the fact $\Z(p^{\infty})[p]=\ang{b_{1}}$ is attributed to item 2 of the Prüfer properties proposition rather than item 1.

## Issues

### ISSUE-0001 [Open] Pontryagin dual of Prüfer group is the p-adic integers, not stated correctly
- **Category:** Supplement/remark error
- **Location:** supplement (有限生成アーベル群との双対性)
- **Detail:** The supplement says 'ポントリャーギン双対では $p$ 進整数環 $\Z_{p}$ と対応する'. The Pontryagin dual of $\Z(p^{\infty})$ is indeed the $p$-adic integers $\Z_{p}$ (with the profinite/p-adic topology), so the statement is correct as far as it goes. However, the sentence is fine. No issue here.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Kulikov's theorem statement: 'finite number of Prüfer groups and finite cyclic groups'
- **Category:** Supplement/remark error
- **Location:** supplement (最小条件)
- **Detail:** The supplement states: '部分群の降鎖条件をみたすアーベル群は、有限個のプリューファー群と有限巡回群の直和であることが知られている（クロシュの定理）'. This is a correct statement of Kulikov's theorem for abelian groups satisfying the descending chain condition (minimal condition): such a group is a direct sum of finitely many Prüfer groups and finitely many finite cyclic groups. The attribution to Robinson §4.2 is plausible. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Step 2 of Prüfer properties: uniqueness of subgroup of order p^k
- **Category:** Logical gap
- **Location:** grp:pruefer-properties / Step 2
- **Detail:** In Step 2, the argument uses that a cyclic group of order $p^{k}$ has a unique subgroup of order $p^{n}$ for each $n\le k$, citing \ref{grp:subgroups-cyclic.2}. The cited theorem (巡回群の部分群) states that subgroups of a cyclic group are cyclic and for each divisor there is a unique subgroup. This is used correctly. The claim 'x generates $\ang{b_{k}}$' follows since $x$ has order $p^{k}$ and lies in the cyclic group $\ang{b_{k}}$ of order $p^{k}$. This is fine.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Step 2 of Prüfer properties: P[p^n] = <b_n> justification
- **Category:** Logical gap
- **Location:** grp:pruefer-properties / Step 2
- **Detail:** The text claims $P[p^{n}]=\ang{b_{n}}$ with the parenthetical '($P[p^{n}]$ の元 $m/p^{k}+\Z$ は $p^{n}m/p^{k}\in\Z$、すなわち $\ang{b_{n}}$ の元)'. This shows $P[p^{n}]\subseteq\ang{b_{n}}$; the reverse inclusion is clear since $b_{n}$ has order $p^{n}$. The argument is correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Example 4: free abelian group is reduced
- **Category:** Unsupported fact
- **Location:** example (item 4)
- **Detail:** The example claims a nonzero free abelian group $F$ is reduced, arguing that a nonzero $d$ divisible by all $2^{k}$ is impossible because the coefficients in a basis representation cannot be divisible by all $2^{k}$. This is correct: if $d=\sum a_{i}e_{i}$ with finitely many nonzero integer coefficients, then $d$ divisible by $2^{k}$ for all $k$ forces each $a_{i}=0$. The reasoning is sound.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Step 4 of structure theorem: E contains element of order p
- **Category:** Logical gap
- **Location:** grp:divisible-structure / Step 4
- **Detail:** In the surjectivity argument, the text says 'if $E\neq0$ then $E$ contains an element $e$ of order $p$'. $E$ is a subgroup of the $p$-group $G_{p}$, so every nonzero element has order a power of $p$; taking $e$ to be a suitable multiple gives order $p$. This is valid (and the hypcheck notes the '$p$群' hypothesis is used here). Fine.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Problem 2 solution: G/G[p] ≅ pG
- **Category:** Logical gap
- **Location:** grp:prob-div-infinite-proper / solution
- **Detail:** The solution uses '$G/G[p]\cong pG$' when $G$ is a $p$-group. The map $G\to pG$, $g\mapsto pg$ has kernel $G[p]$ and is surjective onto $pG$ by definition, so this is correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Problem 2 solution: infinite subgroup G[p] must equal G
- **Category:** Logical gap
- **Location:** grp:prob-div-infinite-proper / solution
- **Detail:** The solution argues: if $G\neq pG$ then $pG$ is a proper subgroup hence finite, and from $G/G[p]\cong pG$ it concludes $G[p]$ is infinite; then 'an infinite subgroup $G[p]$ is not a proper subgroup, so $G=G[p]$'. This uses the hypothesis that every proper subgroup is finite: an infinite subgroup cannot be proper. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] Problem 2 solution: linear independence of chosen x_n
- **Category:** Logical gap
- **Location:** grp:prob-div-infinite-proper / solution
- **Detail:** The solution claims that choosing $x_{n+1}\notin\ang{x_{1},\dots,x_{n}}$ yields a linearly independent set $\{x_{n}\}$ over $\mathbb{F}_{p}$. Since $G=G[p]$ is an $\mathbb{F}_{p}$-vector space and $\ang{x_{1},\dots,x_{n}}$ is the $\mathbb{F}_{p}$-span, choosing each new element outside the span gives linear independence. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0010 [Open] Problem 2 solution: <x_2,x_3,...> is infinite proper subgroup
- **Category:** Logical gap
- **Location:** grp:prob-div-infinite-proper / solution
- **Detail:** The solution concludes $\ang{x_{2},x_{3},\dots}$ is an infinite proper subgroup not containing $x_{1}$, contradicting the hypothesis. Since the $x_{n}$ are linearly independent, this span is infinite and excludes $x_{1}$. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0011 [Open] Problem 1 solution: |Q^{(I)}| = |I| for infinite I
- **Category:** Logical gap
- **Location:** grp:prob-div-reals / solution
- **Detail:** The solution uses $\lvert\mathbb{Q}^{(I)}\rvert=\lvert I\rvert$ for infinite $I$ to conclude $\lvert I\rvert=2^{\aleph_{0}}$. Since $\lvert\mathbb{Q}^{(I)}\rvert=\max(\aleph_{0},\lvert I\rvert)=\lvert I\rvert$ for infinite $I$, and $\lvert\R\rvert=2^{\aleph_{0}}$, this gives $\lvert I\rvert=2^{\aleph_{0}}$. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0012 [Open] Problem 1 solution: C^×/T dimension
- **Category:** Logical gap
- **Location:** grp:prob-div-reals / solution
- **Detail:** The solution states $\C^{\times}/T$ is torsion-free divisible of cardinality $2^{\aleph_{0}}$ so its $\mathbb{Q}$-dimension is $2^{\aleph_{0}}$. A torsion-free divisible group of cardinality $2^{\aleph_{0}}$ is a $\mathbb{Q}$-vector space of cardinality $2^{\aleph_{0}}$; since $\lvert\mathbb{Q}^{(I)}\rvert=\lvert I\rvert$ for infinite $I$, dimension $=2^{\aleph_{0}}$. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0013 [Open] Problem 1 solution: J_p is one point for C^×
- **Category:** Logical gap
- **Location:** grp:prob-div-reals / solution
- **Detail:** The solution says $\C^{\times}[p]$ consists of $p$-th roots of unity, of order $p$, so $J_{p}$ is a single point. Indeed $\C^{\times}[p]\cong\Z/p$ has $\mathbb{F}_{p}$-dimension 1, so $\lvert J_{p}\rvert=1$. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0014 [Open] Corollary Step 1: G ∩ T(D) = 0 for torsion-free G
- **Category:** Logical gap
- **Location:** grp:divisible-embedding / Step 1
- **Detail:** The corollary proof uses that if $G$ is torsion-free and $G\le D$, then $G\cap T(D)=0$. Any element of $G\cap T(D)$ is torsion (in $T(D)$) and in $G$ (torsion-free), hence zero. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0015 [Open] Corollary Step 2: G ⊆ D_p
- **Category:** Logical gap
- **Location:** grp:divisible-embedding / Step 2
- **Detail:** The proof claims for a $p$-group $G\le D$ that $G\subseteq T(D)$ and further $G\subseteq D_{p}$. Since $G$ is a $p$-group, every element lies in the $p$-primary component $D_{p}$ of $T(D)$. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0016 [Open] Maximal divisible subgroup Step 1: D(G) divisible
- **Category:** Logical gap
- **Location:** grp:maximal-divisible / Step 1
- **Detail:** The proof shows any $x=d_{1}+\cdots+d_{k}$ with $d_{i}\in D_{i}$ divisible subgroups is $n$-divisible: writing $d_{i}=ny_{i}$ with $y_{i}\in D_{i}$, $x=n(y_{1}+\cdots+y_{k})$ and $y_{1}+\cdots+y_{k}\in D(G)$. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0017 [Open] Structure theorem Step 2: G_p is a direct summand of T hence divisible
- **Category:** Logical gap
- **Location:** grp:divisible-structure / Step 2
- **Detail:** The proof states each $G_{p}$ is a direct summand of $T$ hence divisible, with the parenthetical argument that for $x\in G_{p}$ and $ny=x$ with $y=\sum y_{q}$, comparing primary components gives $ny_{p}=x$. This is correct: a direct summand of a divisible group is divisible.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0018 [Open] Structure theorem Step 4: Q[p] basis and α well-defined
- **Category:** Logical gap
- **Location:** grp:divisible-structure / Step 4
- **Detail:** The proof sets $Q=\Z(p^{\infty})^{(J_{p})}$ and claims $Q[p]$ has basis $\{c_{j}\}$ using $\Z(p^{\infty})[p]=\ang{b_{1}}$ from \ref{grp:pruefer-properties.2}. Note: the citation is to item 2 of the proposition, but the fact $\Z(p^{\infty})[p]=\ang{b_{1}}$ is item 1 (which states $\ang{b_{n}}\cong\Z/p^{n}$ and $P=\bigcup\ang{b_{n}}$). Item 2 states that proper subgroups are the $\ang{b_{n}}$. The needed fact ($P[p]=\ang{b_{1}}$) follows from item 1, not item 2. This is a minor mis-citation.
- **Proposed fix:** Cite \ref{grp:pruefer-properties.1} instead of \ref{grp:pruefer-properties.2}: from item 1, $P[p]=\ang{b_{1}}$ since $b_{1}$ has order $p$ and $P=\bigcup\ang{b_{n}}$.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0019 [Open] Mis-citation of Prüfer properties item in Step 4
- **Category:** Improper link
- **Location:** grp:divisible-structure / Step 4
- **Detail:** The text cites \ref{grp:pruefer-properties.2} for '$\Z(p^{\infty})[p]=\ang{b_{1}}$', but item 2 of that proposition is about proper subgroups being the $\ang{b_{n}}$. The correct reference is item 1.
- **Proposed fix:** Replace \ref{grp:pruefer-properties.2} with \ref{grp:pruefer-properties.1}.
- **Reported:** 2026-10-28 (10fede1)
