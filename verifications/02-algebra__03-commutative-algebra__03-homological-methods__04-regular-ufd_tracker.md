# Verification tracker: `02-algebra/03-commutative-algebra/03-homological-methods/04-regular-ufd.html`

<!-- source: 02-algebra/03-commutative-algebra/03-homological-methods/04-regular-ufd.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] The supplement's claim about (x) and p^(2) is wrong
- **Category:** Supplement/remark error
- **Location:** supplement (ring:sec-ru-power-series / final supplement)
- **Detail:** The supplement claims that in the cone $z^{2}=xy$, the ideal $(x)$ is 'a single equation $x=0$' and corresponds to $\mathfrak{p}^{(2)}$. But $\mathfrak{p}=(x,z)$, so $\mathfrak{p}^{(2)}=(x^{2},xz,z^{2})=(x^{2},xz,xy)=x\cdot(x,z,y)$, which is strictly larger than $(x)$ (it contains $z^{2}=xy$ and $xz$ but $(x)$ does not contain $xz$). So $(x)\neq\mathfrak{p}^{(2)}$. Moreover $(x)$ is not $\mathfrak{p}$-primary: $z\cdot z=xy\in(x)$ with $z\notin(x)$, so $(x)$ is not primary, hence not a symbolic power of $\mathfrak{p}$. The parenthetical '($z^{2}=0$ on $x=0$)' also misdescribes the situation: on $x=0$ the equation becomes $z^{2}=0$, so $x=0$ is not reduced there, which is precisely why $(x)$ is not $\mathfrak{p}$-primary. The claim is false as stated.
- **Proposed fix:** Replace with: 'In the cone $z^{2}=xy$, the line $x=z=0$ ($\mathfrak{p}$) is not defined by one equation (Step 3). The principal ideal $(x)$ is not $\mathfrak{p}$-primary: $z^{2}=xy\in(x)$ but $z\notin(x)$, so $(x)$ is not a symbolic power of $\mathfrak{p}$; indeed $\mathfrak{p}^{(2)}=(x^{2},xz,z^{2})=x(x,y,z)\supsetneq(x)$. This reflects that the divisor $x=0$ is not Cartier at the singular point.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] The claim that the class group is trivial is imprecise for non-normal rings
- **Category:** Supplement/remark error
- **Location:** supplement (first sentence)
- **Detail:** The supplement says 'being a UFD is equivalent to the divisor class group $\operatorname{Cl}(A)$ being trivial'. For a general (not necessarily normal) Noetherian domain this is false: the usual divisor class group is only well behaved for normal domains, and for non-normal rings the class group can be trivial while the ring is not a UFD. The equivalence 'UFD $\Leftrightarrow$ $\operatorname{Cl}(A)=0$' requires $A$ to be normal (e.g. a Krull domain). Since the theorem's rings are regular local, hence normal, the statement is true in context, but as written it is stated too generally.
- **Proposed fix:** Replace with: 'For a normal Noetherian domain $A$, being a UFD is equivalent to the divisor class group $\operatorname{Cl}(A)$ being trivial.' (Regular local rings are normal, so this applies.)
- **Reported:** 2026-10-28 (8ccef3d)
