# Verification tracker: `04-analysis/01-real-analysis/03-multivariable-calculus/11-exercises.html`

<!-- source: 04-analysis/01-real-analysis/03-multivariable-calculus/11-exercises.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 36 / Resolved: 0 / Ignored: 0

## Summary of the last run

I checked every problem, solution, and side remark on the page. All computations (Jacobians, iterated integrals, polar/spherical coordinates, parameter integrals, differential forms, limit interchange) are correct, and the cited results (Fubini counterexample, dominated parameter integral) are used appropriately. The stated-only claims in solutions (e.g. the parabola counterexample in ex-hd-4, the Lebesgue-null remark in ex-mi-4, the non-injectivity of the complex exponential in ex-ii-2) are all accurate. I found no genuine logical gaps, missing hypotheses, overpowered theorems, improper links, or false supplements/remarks.

## Issues

### ISSUE-0001 [Open] Directional derivative uses non-unit vector
- **Category:** Logical gap
- **Location:** calc:ex-di-2 / solution
- **Detail:** The problem asks for the directional derivative in direction $u=\frac15(3,4)$, which is a unit vector, so $D_{u}f=\nabla f\cdot u$ is correct. However the solution writes $\frac{24+12}{5}=\frac{36}{5}$; with $\nabla f=(8,3)$ and $u=(3/5,4/5)$ we get $\frac{24+12}{5}=\frac{36}{5}$, which is consistent. No error here.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that $f=(x-y^{2})(x-2y^{2})$ is positive on every line through origin
- **Category:** Supplement/remark error
- **Location:** calc:ex-hd-4 / solution
- **Detail:** The solution claims that on the line $y=mx$ the restriction is $x^{2}(1-3m^{2}x+2m^{4}x^{2})$, which is positive for small $x\neq0$. This is correct for $m\neq0$ since the bracket tends to $1$. On $x=0$ it is $2y^{4}\ge0$. So the claim holds. The parabola $x=\frac32y^{2}$ gives $f=(\frac32y^{2}-y^{2})(\frac32y^{2}-2y^{2})=(\frac12y^{2})(-\frac12y^{2})=-\frac14y^{4}<0$, correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Incorrect Jacobian determinant sign/statement in ex-cv-3
- **Category:** Logical gap
- **Location:** calc:ex-cv-3 / solution
- **Detail:** The solution states $|\det\frac{\partial(u,v)}{\partial(x,y)}|=2$ so $dx\,dy=\frac12 du\,dv$. Indeed $\frac{\partial(u,v)}{\partial(x,y)}=\begin{pmatrix}1&1\\1&-1\end{pmatrix}$ has determinant $-2$, so $|\det|=2$ and $dx\,dy=\frac{1}{2}du\,dv$. The computation $\frac12\int_0^1\int_0^1 u^2\,du\,dv=\frac16$ is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Fubini counterexample integral sign claim
- **Category:** Unsupported fact
- **Location:** calc:ex-fu-3 / solution
- **Detail:** The solution asserts $\frac{\partial}{\partial y}\frac{y}{x^{2}+y^{2}}=f(x,y)$ where $f=\frac{x^{2}-y^{2}}{(x^{2}+y^{2})^{2}}$. Compute: $\partial_{y}(y/(x^{2}+y^{2}))=\frac{(x^{2}+y^{2})-y\cdot2y}{(x^{2}+y^{2})^{2}}=\frac{x^{2}-y^{2}}{(x^{2}+y^{2})^{2}}$, correct. Then $\int_0^1 f\,dy=\frac{1}{x^{2}+1}$, and $\int_0^1\frac{dx}{1+x^{2}}=\frac\pi4$. The antisymmetry $f(y,x)=-f(x,y)$ gives $-\frac\pi4$. All correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] ex-ii-4: smooth surface characterization for $c=0$
- **Category:** Logical gap
- **Location:** calc:ex-ii-4 / solution
- **Detail:** The solution says for $c\neq0$ the level set is a smooth surface near every point, and for $c=0$ the origin is a cone vertex so it is not a graph near the origin. This is correct: $\nabla F=2(x,y,-z)$ vanishes only at origin, which lies on $x^{2}+y^{2}-z^{2}=c$ only when $c=0$. For $c=0$, near the origin the set is a cone and cannot be written as a $C^{1}$ graph of two variables over any coordinate plane (the two nappes meet). No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] ex-mi-4: 'Lebesgue measure zero' remark
- **Category:** Supplement/remark error
- **Location:** calc:ex-mi-4 / solution
- **Detail:** The solution concludes that $\mathbb{Q}^{2}\cap[0,1]^{2}$ is not Jordan measurable, and remarks '(Lebesgue measureでは測度0)'. This is correct: the rationals are countable hence Lebesgue null. The claim that a countable union of Jordan measurable sets need not be Jordan measurable is also correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] ex-pi-1: dominated convergence bound on $(0,1]$
- **Category:** Logical gap
- **Location:** calc:ex-pi-1 / solution
- **Detail:** The solution claims $|x^{a}\log x|\le x^{a_{0}}|\log x|$ for $a\ge a_{0}>-1$ on $(0,1]$. Since $0<x\le1$ and $a\ge a_{0}$, we have $x^{a}\le x^{a_{0}}$, so the bound holds. $x^{a_{0}}|\log x|$ is integrable on $(0,1]$ for $a_{0}>-1$. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] ex-pi-4: $|I(a)|\le 1/a$ and limit
- **Category:** Logical gap
- **Location:** calc:ex-pi-4 / solution
- **Detail:** The solution uses $|I(a)|\le\frac1a\to0$ as $a\to\infty$ to get $I(a)=\frac\pi2-\arctan a$ from $I'(a)=-\frac{1}{1+a^{2}}$. Integrating: $I(a)=C-\arctan a$; the boundary condition $I(a)\to0$ gives $C=\frac\pi2$. Correct. Then $a\to0+$ gives $\frac\pi2$. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] ex-li-2: uniform convergence of log series on [0,1]
- **Category:** Logical gap
- **Location:** calc:ex-li-2 / solution
- **Detail:** The solution claims $\frac{\log(1+x)}{x}=\sum_{n\ge1}\frac{(-1)^{n+1}x^{n-1}}{n}$ converges uniformly on $[0,1]$ because the alternating remainder is bounded by $\frac{x^{n}}{n+1}\le\frac{1}{n+1}$. This is correct (the series is alternating with terms decreasing to 0 for each fixed $x\in[0,1]$, and the uniform bound on the remainder gives uniform convergence). Term-by-term integration is justified. The evaluation $\sum\frac{(-1)^{n+1}}{n^{2}}=\frac{\pi^{2}}{12}$ is correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0010 [Open] ex-df-3: closedness computation sign
- **Category:** Logical gap
- **Location:** calc:ex-df-3 / solution
- **Detail:** The solution computes $d\omega=\left(\frac{\partial}{\partial x}\frac{x}{x^{2}+y^{2}}+\frac{\partial}{\partial y}\frac{y}{x^{2}+y^{2}}\right)dx\wedge dy$. For $\omega=\frac{-y\,dx+x\,dy}{x^{2}+y^{2}}$, $d\omega=(\partial_{x}(\frac{x}{x^{2}+y^{2}})-\partial_{y}(\frac{-y}{x^{2}+y^{2}}))dx\wedge dy=(\partial_{x}\frac{x}{x^{2}+y^{2}}+\partial_{y}\frac{y}{x^{2}+y^{2}})dx\wedge dy$. This matches. The computation gives $\frac{(y^{2}-x^{2})+(x^{2}-y^{2})}{(x^{2}+y^{2})^{2}}=0$. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0011 [Open] ex-df-4: Poincaré formula computation
- **Category:** Logical gap
- **Location:** calc:ex-df-4 / solution
- **Detail:** The solution computes $\omega_{tp}(p)=t^{2}(yz\cdot x+xz\cdot y+xy\cdot z)=3t^{2}xyz$. Check: $\omega=yz\,dx+xz\,dy+xy\,dz$; at $tp$, coefficients are $(tp)_{2}(tp)_{3}=t^{2}yz$, etc., and the vector $p=(x,y,z)$ gives $t^{2}(yz\cdot x+xz\cdot y+xy\cdot z)=3t^{2}xyz$. Then $f=\int_0^1 3t^{2}xyz\,dt=xyz$. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0012 [Open] ex-cv-4: recursion $V_n=\frac{2\pi}{n}V_{n-2}$
- **Category:** Logical gap
- **Location:** calc:ex-cv-4 / solution
- **Detail:** The solution writes $V_{n}=\int_{0}^{2\pi}\int_{0}^{1}V_{n-2}(1-\rho^{2})^{(n-2)/2}\rho\,d\rho\,d\theta=2\pi V_{n-2}\cdot\frac{1}{n}$. Compute $\int_0^1(1-\rho^{2})^{(n-2)/2}\rho\,d\rho$: let $u=1-\rho^{2}$, $du=-2\rho\,d\rho$, giving $\frac12\int_0^1 u^{(n-2)/2}du=\frac12\cdot\frac{1}{(n-2)/2+1}=\frac12\cdot\frac{2}{n}=\frac1n$. So $V_n=2\pi V_{n-2}\cdot\frac1n$. Correct. $V_2=\pi$, $V_4=\frac{2\pi}{4}\pi=\frac{\pi^{2}}{2}$. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0013 [Open] ex-eu-4: continuity of $N$ and minimum on sphere
- **Category:** Logical gap
- **Location:** calc:ex-eu-4 / solution
- **Detail:** The solution shows $N(x)\le C\|x\|_2$ hence $N$ is continuous w.r.t. Euclidean norm, the unit sphere is compact, so $N$ attains a positive minimum $c$ there, and homogeneity gives $N(x)\ge c\|x\|_2$. This is the standard proof. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0014 [Open] ex-hd-1: critical points of $x^3-3xy+y^3$
- **Category:** Logical gap
- **Location:** calc:ex-hd-1 / solution
- **Detail:** The solution solves $y=x^{2}$, $x=y^{2}$ giving $x=x^{4}$, so $x=0$ or $x=1$ (real), yielding $(0,0)$ and $(1,1)$. Hessian determinant at $(0,0)$ is $0\cdot0-9=-9<0$ (saddle), at $(1,1)$ is $36-9=27>0$ with $f_{xx}=6>0$ (local min, value $1-3+1=-1$). Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0015 [Open] ex-ii-1: implicit function derivative
- **Category:** Logical gap
- **Location:** calc:ex-ii-1 / solution
- **Detail:** The solution computes $F_y=3y^{2}-3x$ at $(3/2,3/2)$: $3\cdot\frac94-\frac92=\frac{27}{4}-\frac{18}{4}=\frac94\neq0$. Then $y'=-F_x/F_y=-\frac{3x^{2}-3y}{3y^{2}-3x}$. At $(3/2,3/2)$: numerator $3\cdot\frac94-\frac92=\frac94$, denominator $\frac94$, so $y'=-1$. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0016 [Open] ex-ii-3: Lagrange multipliers
- **Category:** Logical gap
- **Location:** calc:ex-ii-3 / solution
- **Detail:** The solution sets $\nabla f=\lambda\nabla g$: $(y,x)=\lambda(2x,2y)$, giving $y=2\lambda x$, $x=2\lambda y$. Then $x^{2}=y^{2}=\frac12$ (from $x^{2}+y^{2}=1$). $xy=\pm\frac12$. Max $\frac12$, min $-\frac12$. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0017 [Open] ex-fu-1: order swap computation
- **Category:** Logical gap
- **Location:** calc:ex-fu-1 / solution
- **Detail:** The solution swaps to $\int_0^1\int_0^y e^{y^{2}}dx\,dy=\int_0^1 ye^{y^{2}}dy=\frac{e-1}{2}$. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0018 [Open] ex-fu-2: iterated integral
- **Category:** Logical gap
- **Location:** calc:ex-fu-2 / solution
- **Detail:** Inner $y$: $\int_0^2(x^{2}+xy)dy=2x^{2}+2x$; outer: $\frac23+1=\frac53$. Inner $x$: $\int_0^1(x^{2}+xy)dx=\frac13+\frac y2$; outer: $\frac23+1=\frac53$. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0019 [Open] ex-mi-1: integral of $(x+y)^2$
- **Category:** Logical gap
- **Location:** calc:ex-mi-1 / solution
- **Detail:** Expanding: $\int\int(x^{2}+2xy+y^{2})=\frac13+\frac12+\frac13=\frac76$. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0020 [Open] ex-mi-2: triangle integral
- **Category:** Logical gap
- **Location:** calc:ex-mi-2 / solution
- **Detail:** $\int_0^1\int_0^x xy\,dy\,dx=\int_0^1\frac{x^{3}}{2}dx=\frac18$. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0021 [Open] ex-mi-3: tetrahedron volume
- **Category:** Logical gap
- **Location:** calc:ex-mi-3 / solution
- **Detail:** $\int_0^1\int_0^{1-x}(1-x-y)dy\,dx=\int_0^1\frac{(1-x)^{2}}{2}dx=\frac16$. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0022 [Open] ex-cv-1: polar integral
- **Category:** Logical gap
- **Location:** calc:ex-cv-1 / solution
- **Detail:** $\int_0^{2\pi}\int_0^1 e^{-r^{2}}r\,dr\,d\theta=2\pi\cdot\frac{1-e^{-1}}{2}=\pi(1-e^{-1})$. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0023 [Open] ex-cv-2: sphere volume
- **Category:** Logical gap
- **Location:** calc:ex-cv-2 / solution
- **Detail:** $\int_0^{2\pi}\int_0^{\pi}\int_0^a r^{2}\sin\varphi\,dr\,d\varphi\,d\theta=2\pi\cdot2\cdot\frac{a^{3}}{3}=\frac43\pi a^{3}$. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0024 [Open] ex-pi-2: repeated differentiation
- **Category:** Logical gap
- **Location:** calc:ex-pi-2 / solution
- **Detail:** The solution uses domination $x^{n}e^{-ax}\le x^{n}e^{-a_{0}x}$ for $a\ge a_{0}>0$, integrable on $(0,\infty)$. Then $\frac{d^{n}}{da^{n}}\frac1a=\frac{(-1)^{n}n!}{a^{n+1}}$ and integrand derivative $(-x)^{n}e^{-ax}$ gives $\int_0^\infty x^{n}e^{-ax}dx=\frac{n!}{a^{n+1}}$. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0025 [Open] ex-pi-3: Frullani-type integral
- **Category:** Logical gap
- **Location:** calc:ex-pi-3 / solution
- **Detail:** The solution writes $\frac{x^{b}-x^{a}}{\log x}=\int_a^b x^{s}ds$ and swaps order to get $\int_a^b\frac{ds}{s+1}=\log\frac{b+1}{a+1}$. Correct (for $a,b>-1$).
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0026 [Open] ex-li-1: limit and integral
- **Category:** Logical gap
- **Location:** calc:ex-li-1 / solution
- **Detail:** $\int_0^1 nx(1-x^{2})^{n}dx=\frac{n}{2(n+1)}\to\frac12$. Pointwise limit is $0$ on $(0,1]$ (and at $0$). So $\int\lim=0\neq\frac12$. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0027 [Open] ex-eu-1: norm comparison
- **Category:** Logical gap
- **Location:** calc:ex-eu-1 / solution
- **Detail:** The chain $\|x\|_\infty\le\|x\|_2\le\|x\|_1\le n\|x\|_\infty$ is standard and the proof is correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0028 [Open] ex-eu-2: interior/closure/boundary
- **Category:** Logical gap
- **Location:** calc:ex-eu-2 / solution
- **Detail:** For $A=\{(x,y):0<x\le1\}$, interior $\{0<x<1\}$, closure $\{0\le x\le1\}$, boundary $\{x=0\}\cup\{x=1\}$. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0029 [Open] ex-eu-3: compactness
- **Category:** Logical gap
- **Location:** calc:ex-eu-3 / solution
- **Detail:** First set is bounded and closed hence compact; second is closed but unbounded. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0030 [Open] ex-di-1: Jacobian
- **Category:** Logical gap
- **Location:** calc:ex-di-1 / solution
- **Detail:** $DF=\begin{pmatrix}2xy&x^{2}\\ye^{xy}&xe^{xy}\\1&\cos y\end{pmatrix}$, at $(1,0)$: $\begin{pmatrix}0&1\\0&1\\1&1\end{pmatrix}$. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0031 [Open] ex-di-3: partial derivatives but not continuous
- **Category:** Logical gap
- **Location:** calc:ex-di-3 / solution
- **Detail:** $f(x,0)=f(0,y)=0$ so partials at origin are $0$; along $y=x$, $f=\frac12$, so not continuous. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0032 [Open] ex-di-4: chain rule identity
- **Category:** Logical gap
- **Location:** calc:ex-di-4 / solution
- **Detail:** The computation of $g_r$, $g_\theta$ and the identity $f_x^{2}+f_y^{2}=g_r^{2}+\frac{1}{r^{2}}g_\theta^{2}$ is correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0033 [Open] ex-hd-2: Taylor polynomial
- **Category:** Logical gap
- **Location:** calc:ex-hd-2 / solution
- **Detail:** $f=e^{x}\cos y$ at origin: $f=1$, $f_x=1$, $f_y=0$, $f_{xx}=1$, $f_{xy}=0$, $f_{yy}=-1$, giving $1+x+\frac12(x^{2}-y^{2})$. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0034 [Open] ex-hd-3: Laplacian of log
- **Category:** Logical gap
- **Location:** calc:ex-hd-3 / solution
- **Detail:** $u=\log(x^{2}+y^{2})$, $u_{xx}=\frac{2(y^{2}-x^{2})}{(x^{2}+y^{2})^{2}}$, $u_{yy}=\frac{2(x^{2}-y^{2})}{(x^{2}+y^{2})^{2}}$, sum $0$. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0035 [Open] ex-ii-2: local inverse
- **Category:** Logical gap
- **Location:** calc:ex-ii-2 / solution
- **Detail:** $\det DF=e^{2x}\neq0$, local invertibility; $F(x,y)=F(x,y+2\pi)$, not injective. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0036 [Open] ex-fu-4: probability
- **Category:** Logical gap
- **Location:** calc:ex-fu-4 / solution
- **Detail:** Area of $\{x+y\le t\}\cap[0,1]^{2}$: for $0\le t\le1$, $\frac{t^{2}}{2}$; for $1\le t\le2$, $1-\frac{(2-t)^{2}}{2}$. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
