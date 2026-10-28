# Verification tracker: `02-algebra/01-linear-algebra/02-determinants/03-minors.html`

<!-- source: 02-algebra/01-linear-algebra/02-determinants/03-minors.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Gram determinant formula uses wrong minor index
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement states $\det({}^{t}XX)=\sum_{K}(\det X_{K,[m]})^{2}$ for $X\in M_{m\times n}$. But ${}^{t}XX$ is $n\times n$, so its determinant is only defined when $m=n$; for $m<n$ the left side is not a scalar determinant. The Cauchy–Binet expansion of $\det({}^{t}XX)$ (with ${}^{t}X$ of size $n\times m$ and $X$ of size $m\times n$) sums over $K\subset[n]$ with $|K|=m$ of $\det({}^{t}X)_{[n],K}\det X_{K,[n]}$, i.e. $\sum_{|K|=m}(\det X_{[m],K})^{2}$, not $\det X_{K,[m]}$ (which is not even square).
- **Proposed fix:** For $X\in M_{m\times n}$ with $m\le n$, Cauchy–Binet gives $$\det({}^{t}XX)=\sum_{K\subset[n],\,|K|=m}(\det X_{[m],K})^{2}.$$ (When $m=n$ this is $\det(X)^{2}$.)
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Determinantal variety claim: rank ≤ r is common zero set of (r+1)-minors
- **Category:** Supplement/remark error
- **Location:** remark 小行列式は外冪の行列成分
- **Detail:** The remark says the set of matrices of rank $\le r$ is the common zero set of the $(r+1)$-minors. This is correct over a field, but the remark is placed in a page that otherwise works over commutative rings, and over a general ring the vanishing of all $(r+1)$-minors does not imply rank $\le r$ (e.g. over $\mathbb{Z}/6$, a matrix can have all 2-minors zero yet not have rank $\le1$ in the usual sense). More importantly, the parenthetical '階数は近くで下がらない' (rank does not drop nearby) is the opposite of lower semicontinuity: lower semicontinuity means rank can only go up on a neighborhood, i.e. rank does not increase nearby / the set where rank $\le r$ is closed. The phrasing '下に半連続（パラメータを動かすと階数は近くで下がらない）' is self-contradictory: lower semicontinuity means the rank can only jump up, so it does not decrease — but the stated justification 'rank does not drop nearby' describes upper semicontinuity.
- **Proposed fix:** Over a field $k$, the set $\{X : \operatorname{rank}X\le r\}$ is the common zero locus of all $(r+1)$-minors (a determinantal variety), and since this is a closed condition, rank is lower semicontinuous: on a neighborhood of $X$ the rank is $\ge \operatorname{rank}X$ (it can only jump up, not down).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] McCoy's theorem statement: zero divisor vs non-regular element
- **Category:** Unsupported fact
- **Location:** remark 可換環上の階数
- **Detail:** The remark states McCoy's theorem as: $Xy=0$ has a nonzero solution iff the annihilator of $I_{n}(X)$ is nonzero, and for square matrices this is equivalent to '$\det X$ is a zero divisor'. For a general commutative ring, McCoy's theorem gives a nonzero solution iff $\det X$ is a non-regular element (a zero divisor in the total ring of fractions sense), which for a Noetherian ring or a ring where regular elements are units in the total quotient ring coincides with 'zero divisor', but in general 'zero divisor' is not the right notion (the correct statement uses non-regular elements). The parenthetical overstates the equivalence.
- **Proposed fix:** For $X\in M_{n}(A)$ over a commutative ring $A$, $Xy=0$ has a nonzero solution iff $\det X$ is a non-regular element (equivalently, $\det X$ is a zero divisor when $A$ is Noetherian, or more generally when every non-unit is a zero divisor).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Hypcheck example over Z/6 mislabels the failure
- **Category:** Supplement/remark error
- **Location:** hypcheck / 体であること
- **Detail:** The hypcheck says over $\mathbb{Z}/6$ the elements $(2)$ and $(3)$ both give nonzero 1-minors but the map is neither injective nor surjective. As a $1\times1$ matrix over $\mathbb{Z}/6$, the map $x\mapsto 2x$ (or $3x$) is neither injective nor surjective, and indeed has a nonzero 1-minor, so the example is valid as an illustration that 'nonzero minor' does not imply invertibility over a ring. However the phrasing '$(2)$ と $(3)$ はともに 0 でない 1 次小行列式をもつ' is confusing: it should say the $1\times1$ matrices $(2)$ and $(3)$ each have a nonzero entry but are not invertible, so rank is not detected by nonzero minors. This is a minor imprecision, not a mathematical error, but the example as written does not clearly exhibit a single matrix failing both injectivity and surjectivity.
- **Proposed fix:** Over $\mathbb{Z}/6$, the $1\times1$ matrix $(2)$ has a nonzero 1-minor but the map $x\mapsto 2x$ is neither injective nor surjective (similarly for $(3)$), showing that over a ring 'nonzero minor' does not detect rank.
- **Reported:** 2026-10-28 (10fede1)
