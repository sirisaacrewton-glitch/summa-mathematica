# Verification tracker: `02-algebra/03-commutative-algebra/02-commutative-algebra/04-primary-decomposition.html`

<!-- source: 02-algebra/03-commutative-algebra/02-commutative-algebra/04-primary-decomposition.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct and well organized. The main genuine problem is in the supplement: the claim that an ideal consisting of zero divisors lies in an associated prime uses prime avoidance on a possibly infinite union, which requires finiteness of Ass(M) (finitely generated module over a Noetherian ring). Two further points in the proof of the Lasker-Noether theorem (Step 2) and in Example 2 need sharper justification, though the underlying statements are true. No issues with citations or missing hypotheses in the main theorems were found.

## Issues

### ISSUE-0001 [Open] Zero-divisor union argument misapplied to an ideal
- **Category:** Supplement/remark error
- **Location:** supplement (零因子と次元への応用)
- **Detail:** The supplement claims that combining \ref{ring:zero-divisors-ass} with prime avoidance shows: if an ideal $I$ consists only of zero divisors on $M$, then $I$ is contained in some associated prime. But \ref{ring:zero-divisors-ass} says the set of zero divisors equals $\bigcup_{\mathfrak{p}\in\operatorname{Ass}(M)}\mathfrak{p}$, and prime avoidance only applies to a finite union of primes. For a general (not finitely generated) module $M$, $\operatorname{Ass}(M)$ need not be finite, so the union may be infinite and prime avoidance does not apply. The statement is only valid when $\operatorname{Ass}(M)$ is finite (e.g. $M$ finitely generated over a Noetherian ring, via \ref{ring:prime-filtration}). As written the claim is false in general.
- **Proposed fix:** Restrict to the finitely generated case: "If $M$ is a finitely generated module over a Noetherian ring, then $\operatorname{Ass}(M)$ is finite (\ref{ring:prime-filtration}); hence, by \ref{ring:zero-divisors-ass} and prime avoidance (\ref{ring:prime-avoidance}), an ideal $I$ consisting only of zero divisors on $M$ is contained in some associated prime."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Irreducible implies primary: intersection claim needs justification
- **Category:** Supplement/remark error
- **Location:** ring:primary-decomposition / Step 2
- **Detail:** Step 2 asserts that for $A\bar x\cong A/\mathfrak{p}$ and $A\bar y\cong A/\mathfrak{q}$ with $\mathfrak{p}\neq\mathfrak{q}$, the intersection $A\bar x\cap A\bar y$ has no nonzero element whose annihilator equals $\mathfrak{p}$ or $\mathfrak{q}$, hence is $0$. This is asserted without proof and is not immediate: one must argue that a nonzero $z\in A\bar x\cap A\bar y$ would have $\operatorname{Ann}(z)\supset\mathfrak{p}+\mathfrak{q}$, and since $\mathfrak{p}\neq\mathfrak{q}$ are prime, $\mathfrak{p}+\mathfrak{q}$ strictly contains $\mathfrak{p}$, so $\operatorname{Ann}(z)\neq\mathfrak{p}$ (and similarly $\neq\mathfrak{q}$); but this only shows the annihilator is neither, not that the intersection is zero. The correct argument is that $A\bar x\cap A\bar y$ is a nonzero submodule of $A/\mathfrak{p}$ whose associated primes would have to include $\mathfrak{p}$, contradicting that its elements' annihilators avoid $\mathfrak{p}$; this needs to be spelled out.
- **Proposed fix:** Replace with: "If $0\neq z\in A\bar x\cap A\bar y$, then $\operatorname{Ann}(z)\supset\mathfrak{p}+\mathfrak{q}\supsetneq\mathfrak{p}$, so $\operatorname{Ann}(z)\neq\mathfrak{p}$; but $A\bar x\cong A/\mathfrak{p}$ is a domain, so every nonzero element of $A\bar x$ has annihilator exactly $\mathfrak{p}$ — a contradiction. Hence $A\bar x\cap A\bar y=0$."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Example 2: $y^{n}\notin\mathfrak{p}^{2}$ argument via quotient is imprecise
- **Category:** Supplement/remark error
- **Location:** example (item 2)
- **Detail:** The example claims $y^{n}\notin\mathfrak{p}^{2}$ by setting $x=0$ and noting the image of $\mathfrak{p}^{2}$ in $k[y,z]/(z^{2})$ is $0$ while the image of $y^{n}$ is nonzero. But $\mathfrak{p}=(x,z)$, so $\mathfrak{p}^{2}=(x^{2},xz,z^{2})$; setting $x=0$ gives image $(z^{2})=0$ in $k[y,z]/(z^{2})$, correct, and $y^{n}\mapsto y^{n}\neq 0$, correct. However the reduction "$x=0$" is a specialization that is only valid because the quotient map $k[x,y,z]/(xy-z^{2})\to k[y,z]/(z^{2})$ (sending $x\mapsto 0$) is a well-defined ring homomorphism; this is fine, but the parenthetical also asserts $x\notin\mathfrak{p}^{2}$ via a grading argument that requires the grading to be compatible with the relation $xy=z^{2}$ (all terms degree 2), which holds. The claim is essentially correct but the justification that $\mathfrak{p}^{2}$ consists of elements of degree $\ge 2$ needs the grading on the quotient to be well defined, which should be stated.
- **Proposed fix:** Add: "The grading $\deg x=\deg y=\deg z=1$ is compatible with $xy-z^{2}$ (homogeneous of degree 2), so it descends to $A$; then $\mathfrak{p}^{2}$ is generated in degree $\ge 2$, whence $x\notin\mathfrak{p}^{2}$."
- **Reported:** 2026-10-28 (8ccef3d)
