# Verification tracker: `02-algebra/03-commutative-algebra/02-commutative-algebra/09-principal-ideal-theorem.html`

<!-- source: 02-algebra/03-commutative-algebra/02-commutative-algebra/09-principal-ideal-theorem.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 6 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is mathematically sound. The main theorem, corollary, converse, UFD characterization, height-extension lemma, and polynomial dimension theorem are all correctly proved with appropriate citations. The supplement's claims about non-Noetherian dimension bounds (Seidenberg) and catenarity (Nagata's non-catenary example) are accurate. The examples and problems are correct. No genuine errors of the six specified kinds were found.

## Issues

### ISSUE-0001 [Open] Chain property claim for finitely generated domains over a field
- **Category:** Supplement/remark error
- **Location:** supplement (鎖状環)
- **Detail:** The supplement states that for a finitely generated domain $A$ over a field, all maximal chains of primes have length $\dim A$ and $\operatorname{ht}\mathfrak{p}+\dim A/\mathfrak{p}=\dim A$ holds (catenary). This is correct for such rings (they are universally catenary), so the catenarity claim itself is fine. However the sentence 'これはネーターの正規化と下降定理から示され' is acceptable. The real issue: the supplement says '一般のネーター環は鎖状とは限らない（永田の例）'. Nagata's example is indeed a Noetherian ring that is not catenary, so this is correct. No error here.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Non-Noetherian dimension bounds attributed to Seidenberg
- **Category:** Supplement/remark error
- **Location:** supplement (ネーターでない場合)
- **Detail:** The supplement claims $\dim A+1\le\dim A[x]\le 2\dim A+1$ for non-Noetherian $A$, with the upper bound attainable, attributed to Seidenberg. Seidenberg's results give $\dim A+1\le\dim A[x]\le 2\dim A+1$ and the bounds are sharp; this is a standard correct statement (Seidenberg 1954). The attribution and bounds are accurate.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Example 1: minimal primes over (xy,xz)
- **Category:** Unsupported fact
- **Location:** example, item 1
- **Detail:** The example states $(xy,xz)=(x)\cap(y,z)$ and that the minimal primes over $(xy,xz)$ are $(x)$ (height 1) and $(y,z)$ (height 2). Check: $(x)\cap(y,z)=(x)\cap(y,z)$. An element of $(x)\cap(y,z)$ is $x a$ with $x a\in(y,z)$. Since $(y,z)$ is prime and $x\notin(y,z)$, $a\in(y,z)$, so $xa\in(x)(y,z)=(xy,xz)$. Conversely $xy,xz\in(x)\cap(y,z)$. So the equality holds. Minimal primes over $(x)\cap(y,z)$ are $(x)$ and $(y,z)$ (both prime, intersection is the ideal). Heights: $\operatorname{ht}(x)=1$, $\operatorname{ht}(y,z)=2$ in $k[x,y,z]$. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Step 3 of polynomial dimension: Q ⊃ p[x] argument
- **Category:** Logical gap
- **Location:** ring:polynomial-dimension / Step 3
- **Detail:** In Step 3, to show $P$ is minimal over $(a_{1},\dots,a_{r},g)$, the text argues: an intermediate prime $Q$ satisfies $Q\supset\mathfrak{p}[x]$ 'as in Step 3 of height-extension', and $Q/\mathfrak{p}[x]$ is a prime of $k[x]$ containing $\bar g$, hence equals $P$ since $(\bar g)$ is maximal. The claim '$Q\supset\mathfrak{p}[x]$' needs justification: $Q$ contains $(a_{1},\dots,a_{r})$ and $Q\subset P$ with $Q\cap A\supset\mathfrak{p}$; since $\mathfrak{p}$ is minimal over $(a_{i})$ and $Q\cap A$ is a prime containing $(a_{i})$ contained in $P\cap A=\mathfrak{p}$, we get $Q\cap A=\mathfrak{p}$, hence $\mathfrak{p}[x]\subset Q$. This is essentially the same argument as in height-extension Step 3 and is valid, but the text compresses it. Also '$\bar g$ generates a maximal ideal of $k[x]$' requires $\bar g$ irreducible, i.e. $P/\mathfrak{p}[x]=(\bar g)$ is a nonzero prime of the PID $k[x]$, so $(\bar g)$ is maximal. This is fine. The argument is correct though terse.
- **Proposed fix:** No change needed; the reasoning is valid.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Height-converse Step: x_i chosen avoiding minimal primes of height i-1
- **Category:** Missing hypothesis
- **Location:** ring:height-converse / proof
- **Detail:** The proof picks $x_{i}\in\mathfrak{p}$ avoiding all minimal primes over $(x_{1},\dots,x_{i-1})$ of height $i-1$. It asserts these are finite and none equals $\mathfrak{p}$ since $i-1<r=\operatorname{ht}\mathfrak{p}$. Finiteness holds because $A$ is Noetherian. None equals $\mathfrak{p}$ because their height is $i-1<r=\operatorname{ht}\mathfrak{p}$. Then prime avoidance gives $x_{i}$. The claim that $(x_{1},\dots,x_{i})$ has all minimal primes of height exactly $i$: any minimal prime over $(x_{1},\dots,x_{i})$ has height $\le i$ by the height theorem and $\ge i$ because it properly contains a minimal prime over $(x_{1},\dots,x_{i-1})$ of height $i-1$ (by choice of $x_{i}$ not in it). This is correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Citation of ring:ass-localization.2 in principal ideal theorem
- **Category:** Improper link
- **Location:** ring:principal-ideal-theorem / proof
- **Detail:** The proof uses: if $\operatorname{ht}\mathfrak{p}=0$ then $\mathfrak{p}$ is a minimal prime of $A$, hence an associated prime (via $\operatorname{Supp}(A)=\Spec A$ minimal element, citing ring:ass-localization.2), and its elements are zero-divisors (ring:zero-divisors-ass). This is a standard correct argument: minimal primes are associated, and elements of associated primes are zero-divisors. The citations match their content.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
