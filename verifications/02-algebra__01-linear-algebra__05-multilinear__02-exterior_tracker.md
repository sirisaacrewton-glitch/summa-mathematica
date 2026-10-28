# Verification tracker: `02-algebra/01-linear-algebra/05-multilinear/02-exterior.html`

<!-- source: 02-algebra/01-linear-algebra/05-multilinear/02-exterior.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Pfaffian sign/coefficient in dim 4
- **Category:** Supplement/remark error
- **Location:** lin:plucker / Step 3
- **Detail:** Step 3 claims the coefficient of $e_{1}\wedge e_{2}\wedge e_{3}\wedge e_{4}$ in $\omega\wedge\omega$ equals the Pfaffian $\operatorname{Pf}(p_{ij})$. Actually $\omega\wedge\omega = 2(p_{12}p_{34}-p_{13}p_{24}+p_{14}p_{23})\,e_{1}\wedge e_{2}\wedge e_{3}\wedge e_{4}$, and the Pfaffian of the $4\times4$ matrix is $p_{12}p_{34}-p_{13}p_{24}+p_{14}p_{23}$. So the coefficient is $2\operatorname{Pf}$, not $\operatorname{Pf}$. The parenthetical 'the coefficient is the Pfaffian' is imprecise/false.
- **Proposed fix:** Replace with: 'The coefficient is $2\operatorname{Pf}(p_{ij})$, twice the Pfaffian (\ref{lin:pfaffian}); the Plücker relation is exactly $\operatorname{Pf}(p_{ij})=0$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Char 2: wedge-square criterion and divided power
- **Category:** Supplement/remark error
- **Location:** hypcheck / 標数 ≠2
- **Detail:** The hypcheck says in characteristic 2 '$\omega\wedge\omega=0$ always holds and decomposability is decided by the divided square $\omega^{(2)}$'. The first part is correct, but the claim that decomposability is decided by $\omega^{(2)}$ is imprecise: in characteristic 2, $\omega^{(2)}=0$ for every bivector (since $\omega\wedge\omega=2\omega^{(2)}=0$), so the divided square does not detect decomposability. The correct statement is that the criterion $\omega\wedge\omega=0$ fails to be sufficient in characteristic 2 (e.g. $e_{1}\wedge e_{2}+e_{3}\wedge e_{4}$ has $\omega\wedge\omega=0$ but is not decomposable), and one needs a different criterion.
- **Proposed fix:** Replace with: 'In characteristic 2, $\omega\wedge\omega=0$ holds for every $\omega$, so it no longer characterizes decomposability (e.g. $e_{1}\wedge e_{2}+e_{3}\wedge e_{4}$ is not decomposable); a different criterion is needed.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Lambda^2(Z/2)^2 computation
- **Category:** Supplement/remark error
- **Location:** hypcheck / 自由であること
- **Detail:** The hypcheck states $\Lambda^{2}(\mathbb{Z}/2\oplus\mathbb{Z}/2)\cong\mathbb{Z}/2$. But $\mathbb{Z}/2\oplus\mathbb{Z}/2$ is a 2-dimensional vector space over $\mathbb{F}_{2}$, so $\Lambda^{2}$ of it is 1-dimensional over $\mathbb{F}_{2}$, i.e. $\cong\mathbb{Z}/2$ — this is correct as a group, but the example is meant to illustrate that $\Lambda^{k}M$ is 'complicated' for non-free modules, whereas here $M$ is free over $\mathbb{Z}/2$ (just not free over $\mathbb{Z}$). As a $\mathbb{Z}$-module example it is misleading: the point should be that over $\mathbb{Z}$, $\Lambda^{2}(\mathbb{Z}/2\oplus\mathbb{Z}/2)$ as a $\mathbb{Z}$-module is $\mathbb{Z}/2$, which is consistent with the basis theorem applied over the ring $\mathbb{Z}/2$, not an illustration of failure of freeness. The example does not demonstrate the claimed phenomenon.
- **Proposed fix:** Replace with a genuine non-free example, e.g.: 'For a non-free module the exterior power need not be free: e.g. $\Lambda^{2}(\mathbb{Z}/2\oplus\mathbb{Z}/2)\cong\mathbb{Z}/2$ as a $\mathbb{Z}$-module is not free, and $\Lambda^{2}(\mathbb{Q})=0$ as a $\mathbb{Z}$-module.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Sym^k rank formula for free module
- **Category:** Supplement/remark error
- **Location:** lin:symmetric-algebra / statement 2
- **Detail:** Statement 2 says $\operatorname{Sym}^{k}M$ is free of rank $\binom{n+k-1}{k}$ for $M$ free of rank $n$. This is correct. However the proof Step 2 argues via Yoneda that $\operatorname{Sym}(A^{n})\cong A[x_{1},\dots,x_{n}]$; this is fine. No error here — but the claim '$\operatorname{Sym}^{k}M$ has rank $\binom{n+k-1}{k}$' requires $M$ free, which is stated. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Hodge dual identification in R^3
- **Category:** Supplement/remark error
- **Location:** supplement / 計算の観点
- **Detail:** The supplement says '$\Lambda^{2}\mathbb{R}^{3}\cong\mathbb{R}^{3}$ (Hodge dual) ... the wedge product becomes the cross product $v\times w$'. This is imprecise: the wedge $v\wedge w\in\Lambda^{2}\mathbb{R}^{3}$ corresponds to the cross product only after applying the Hodge star $\star:\Lambda^{2}\mathbb{R}^{3}\to\Lambda^{1}\mathbb{R}^{3}\cong\mathbb{R}^{3}$, and the identification depends on the orientation and inner product. Saying '$\Lambda^{2}\mathbb{R}^{3}\cong\mathbb{R}^{3}$ through Hodge dual, the wedge product is the cross product' conflates $\Lambda^{2}$ with $\Lambda^{1}$ without mentioning the star map explicitly; as stated it is imprecise.
- **Proposed fix:** Replace with: 'In $\mathbb{R}^{3}$, via the Hodge star $\star:\Lambda^{2}\mathbb{R}^{3}\to\Lambda^{1}\mathbb{R}^{3}\cong\mathbb{R}^{3}$ (which depends on the orientation and inner product), the wedge product $v\wedge w$ corresponds to the cross product $v\times w$.'
- **Reported:** 2026-10-28 (10fede1)
