# Verification tracker: `04-analysis/02-complex-analysis/03-global/07-exercises.html`

<!-- source: 04-analysis/02-complex-analysis/03-global/07-exercises.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Degree count of R for wp(2z) is imprecise
- **Category:** Supplement/remark error
- **Location:** cx:ex-el-3 / solution
- **Detail:** The argument that $R(\wp)$ has order $2d$ because 'each value is taken twice by $\wp$' is not a valid general statement: $\wp$ takes each value twice counting multiplicity on the torus, but the order of $R(\wp)$ equals $2d$ only when $R$ has no pole at $\infty$ coinciding with the pole of $\wp$; more carefully, the order of $R(\wp)$ is $2\deg(\text{denominator})$ if $R=P/Q$ in lowest terms with $Q$ nonconstant, and equals $2d$ where $d=\max(\deg P,\deg Q)$ only when $\deg Q=d$. If $\deg P>\deg Q$, then $R(\wp)$ has a pole of order $2(\deg P-\deg Q)$ at $z=0$ from the polynomial part, so the order is $2\deg P$, not $2d$ in the stated sense. The conclusion $d=4$ happens to be right, but the justification 'order $=2d$' is not generally valid.
- **Proposed fix:** Replace with: 'If $R=P/Q$ in lowest terms, the poles of $R(\wp(z))$ occur where $\wp(z)$ is a pole of $R$, i.e. at the zeros of $Q(\wp(z))$; since $Q$ has degree $\deg Q$ and $\wp$ is 2-to-1, this gives order $2\deg Q$ at $z=0$ (plus possible poles from the polynomial part if $\deg P>\deg Q$). Since $\wp(2z)$ has a pole only at $z\in\frac12\Lambda$ of order 2, we need $\deg Q=1$ and no polynomial part, so $R$ is a Möbius-type function of $\wp$; but then $\wp(2z)$ would have only 2 poles, contradicting the 4 distinct poles $0,\eta_{1},\eta_{2},\eta_{3}$. Hence $R$ must be expressed with $\wp(2z)$ having poles at all four half-periods, forcing $\deg Q=4$ (or $\deg P=4$), so $d=4$.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Case (i) argument about intersecting images
- **Category:** Logical gap
- **Location:** cx:ex-rm-3 / solution
- **Detail:** In case (i), $p\in A$ and $p=f(z_{1})$ with $z_{1}\neq0$. The solution says the images of disjoint small disks around $0$ and $z_{1}$ are both neighborhoods of $p$ (by open mapping), hence intersect, contradicting injectivity of $f$ on $\mathbb{D}^{*}$. But the disk around $0$ is not contained in $\mathbb{D}^{*}$; $f$ is only injective on $\mathbb{D}^{*}$, and the image of a small punctured disk around $0$ need not be a neighborhood of $p$. The correct argument: since $f$ is injective on $\mathbb{D}^{*}$ and $f(0)=p=f(z_{1})$, $f$ is not injective on $\mathbb{D}$; but a non-injective holomorphic map can still be locally injective. The proper argument uses that $f$ on $\mathbb{D}$ is injective near $z_{1}$ (since $f'(z_{1})\neq0$ as $f$ is locally biholomorphic on $\mathbb{D}^{*}$), so $f$ maps a small disk $U$ around $z_{1}$ bijectively onto a neighborhood $V$ of $p$; then $f^{-1}(V)\cap\mathbb{D}^{*}$ contains points near $0$ (since $f\to p$ as $z\to0$), giving two preimages of some value, contradicting injectivity on $\mathbb{D}^{*}$. The stated reasoning is incomplete.
- **Proposed fix:** Replace with: 'Since $f$ is biholomorphic on $\mathbb{D}^{*}$, $f'(z_{1})\neq0$, so $f$ maps a small disk $U\subset\mathbb{D}^{*}$ around $z_{1}$ bijectively onto a neighborhood $V$ of $p$. Since $f(z)\to p$ as $z\to0$, there is $z_{2}\in\mathbb{D}^{*}\setminus U$ close to $0$ with $f(z_{2})\in V$. Then $f(z_{2})=f(z)$ for some $z\in U$, $z\neq z_{2}$, contradicting injectivity of $f$ on $\mathbb{D}^{*}$.'
- **Reported:** 2026-10-28 (8ccef3d)
