# Verification tracker: `02-algebra/03-commutative-algebra/02-commutative-algebra/04-primary-decomposition.html`

<!-- source: 02-algebra/03-commutative-algebra/02-commutative-algebra/04-primary-decomposition.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problem is in the supplement: the stated formula for the minimal-prime component $Q_{i}=\{x:x/1\in N_{\mathfrak{p}_{i}}\}$ is wrong (it collapses to $N$); the correct object is the saturation $N_{(\mathfrak{p}_{i})}$. The 'application to zero divisors and dimension' remark is imprecise about hypotheses (ideal, finiteness of Ass) and overstates its role. The remaining examples and the hypcheck counterexample are correct.

## Issues

### ISSUE-0001 [Open] Incorrect claim that the minimal-prime component is the contraction of N localized
- **Category:** Supplement/remark error
- **Location:** supplement (極小成分の一意性)
- **Detail:** The supplement states that for a minimal prime $\mathfrak{p}_{i}$ the component is $Q_{i}=\{x\in M : x/1\in N_{\mathfrak{p}_{i}}\}$, i.e. the contraction of $N_{\mathfrak{p}_{i}}$ to $M$. This is false in general. The correct statement is that the *saturation* $Q_{i}=N_{(\mathfrak{p}_{i})}=\{x\in M : sx\in N \text{ for some } s\notin\mathfrak{p}_{i}\}$ (equivalently $N_{\mathfrak{p}_{i}}\cap M$ inside $M_{\mathfrak{p}_{i}}$) is independent of the decomposition. The set $\{x : x/1\in N_{\mathfrak{p}_{i}}\}$ is just $N$ itself (since $x/1\in N_{\mathfrak{p}_{i}}$ iff $x\in N$ when $N$ is already a submodule and we clear denominators), so the displayed formula does not even depend on $\mathfrak{p}_{i}$ and cannot equal $Q_{i}\supsetneq N$ in general. For example in $A=k[x,y]$, $I=(x)\cap(x^{2},y)$, the minimal prime is $(x)$ with component $(x)$, but $\{f : f/1\in I_{(x)}\}=I\neq(x)$.
- **Proposed fix:** For a minimal prime $\mathfrak{p}_{i}$ the component is independent of the decomposition and equals the saturation $Q_{i}=\{x\in M : sx\in N \text{ for some } s\in A\setminus\mathfrak{p}_{i}\}$ (equivalently $Q_{i}=N_{\mathfrak{p}_{i}}\cap M$ inside $M_{\mathfrak{p}_{i}}$). Embedded components are not unique (see the example above).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Zero-divisor argument misapplied to an ideal of zero divisors
- **Category:** Supplement/remark error
- **Location:** supplement (零因子と次元への応用)
- **Detail:** The supplement claims that combining \ref{ring:zero-divisors-ass} with prime avoidance gives: 'if an ideal $I$ consists only of zero divisors of $M$, then $I$ is contained in some associated prime'. As stated this is not what follows and is imprecise: prime avoidance requires $I$ to be an *ideal* contained in a finite union of primes, and the conclusion '$I\subset\mathfrak{p}$ for some $\mathfrak{p}\in\operatorname{Ass}(M)$' holds only when $I$ is an ideal (which is fine) but the phrasing 'consists only of zero divisors' must mean $I\subset\bigcup_{\mathfrak{p}\in\operatorname{Ass}(M)}\mathfrak{p}$, and then prime avoidance applies only because $\operatorname{Ass}(M)$ is finite and each $\mathfrak{p}$ is prime. The statement is essentially correct but the hypothesis '$I$ is an ideal' and finiteness of $\operatorname{Ass}(M)$ are not mentioned, and the conclusion that this is 'the starting point of depth theory' overstates: the relevant statement for depth is that a non-zero-divisor exists iff $\mathfrak{m}\notin\operatorname{Ass}(M)$ for a local ring, not the avoidance statement itself.
- **Proposed fix:** If $I$ is an ideal of $A$ contained in $\bigcup_{\mathfrak{p}\in\operatorname{Ass}(M)}\mathfrak{p}$ (i.e. every element of $I$ is a zero divisor on $M$), then by prime avoidance and the finiteness of $\operatorname{Ass}(M)$ there is $\mathfrak{p}\in\operatorname{Ass}(M)$ with $I\subset\mathfrak{p}$. In particular, for a local ring $(A,\mathfrak{m})$ and finitely generated $M\neq 0$, $\mathfrak{m}\notin\operatorname{Ass}(M)$ iff $M$ has a non-zero-divisor, which is the starting point of depth theory.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Example 2: claim that p^2 is not primary needs the correct verification
- **Category:** Unsupported fact
- **Location:** example (準素イデアルの古典的な特徴付け) item 2
- **Detail:** The example asserts $\mathfrak{p}^{2}$ is not primary for $A=k[x,y,z]/(xy-z^{2})$, $\mathfrak{p}=(x,z)$, via $xy=z^{2}\in\mathfrak{p}^{2}$, $x\notin\mathfrak{p}^{2}$, $y^{n}\notin\mathfrak{p}^{2}$. The argument that $x\notin\mathfrak{p}^{2}$ ('$\mathfrak{p}^{2}$ consists of elements of degree $\ge 2$') is not quite right: $\mathfrak{p}^{2}=(x^{2},xz,z^{2})$ contains $z^{2}=xy$, and $x$ itself has degree $1$, so the degree argument only shows $x\notin\mathfrak{p}^{2}$ because $\mathfrak{p}^{2}$ is generated in degree $2$ and $x$ is degree $1$ — this is acceptable, but the parenthetical justification '$\mathfrak{p}^{2}$ consists of elements of degree $\ge 2$' is imprecise since $\mathfrak{p}^{2}$ also contains $xy=z^{2}$ which is degree $2$, fine, but the statement as written ('$x,y,z$ を次数 $1$ とすると $\mathfrak{p}^{2}$ は次数 $2$ 以上の元からなる') is true only for the *homogeneous* generators; the ideal $\mathfrak{p}^{2}$ is homogeneous so this is correct. The real gap is the claim $y^{n}\notin\mathfrak{p}^{2}$: the reduction mod $x$ gives $k[y,z]/(z^{2})$ where the image of $\mathfrak{p}^{2}$ is $(z^{2})=0$, so $y^{n}\mapsto y^{n}\neq 0$ — this is correct. No error; the argument is valid.
- **Proposed fix:** No change needed; the argument is correct (the ideal $\mathfrak{p}^{2}$ is homogeneous with generators in degree $2$, so $x\notin\mathfrak{p}^{2}$, and mod $x$ the image of $\mathfrak{p}^{2}$ is $0$ while $y^{n}\neq 0$).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Hypcheck counterexample: Ass(M)=∅ claim for V/tV
- **Category:** Supplement/remark error
- **Location:** theorem ring:ass-nonempty / hypcheck
- **Detail:** The hypcheck claims that for the ring $V$ of 'rational exponent' (the ring with value group $\Q$), $M=V/tV$ has $\operatorname{Ass}(M)=\emptyset$, with the annihilator of $\bar x$ ($x=t^{q}u$, $0\le q<1$) being $\{a : \operatorname{ord}a\ge 1-q\}$, which is neither $0$ nor $\mathfrak{m}V$. This is a valid counterexample to 'Ass is always nonempty' without Noetherianity, and the annihilator computation is correct: $a\bar x=0$ in $V/tV$ iff $a t^{q}u\in tV$ iff $\operatorname{ord}(a)+q\ge 1$. The set $\{a:\operatorname{ord}a\ge 1-q\}$ is a non-prime ideal (it is not prime since it is not of the form $\{\operatorname{ord}>c\}$ or $\{0\}$), so indeed no associated prime. This is correct.
- **Proposed fix:** No change needed; the counterexample is valid.
- **Reported:** 2026-10-28 (10fede1)
