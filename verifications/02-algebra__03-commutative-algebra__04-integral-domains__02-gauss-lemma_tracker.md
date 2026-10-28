# Verification tracker: `02-algebra/03-commutative-algebra/04-integral-domains/02-gauss-lemma.html`

<!-- source: 02-algebra/03-commutative-algebra/04-integral-domains/02-gauss-lemma.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 8 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Z[2i] is not an integral domain counterexample as stated; also Z[√-3] claim
- **Category:** Supplement/remark error
- **Location:** ring:gauss-irreducible / hypcheck
- **Detail:** The hypcheck claims that $A=\Z[2i]$ is an integral domain but not a UFD, and that $x^{2}+1$ is irreducible over $A[x]$ while reducible over $K=\Q(i)$. This is correct: $\Z[2i]\subset\Q(i)$ is a subring, an integral domain, and $\pm i\notin\Z[2i]$. However, the claim that $\Z[2i]$ is not a UFD is asserted without justification. Indeed $\Z[2i]$ is not integrally closed (it is not a UFD), but the text gives no argument. This is a minor gap in a side comment; the counterexample itself (irreducibility comparison failing) is valid regardless of UFD status. Not a genuine error since the counterexample only needs a non-UFD domain, which is true.
- **Proposed fix:** No change needed; the counterexample is valid. Optionally add: '$\Z[2i]$ is not integrally closed, hence not a UFD.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Z[√-3] not integrally closed claim in integral-closedness supplement
- **Category:** Supplement/remark error
- **Location:** supplement (整閉性)
- **Detail:** The supplement states that $\Z[\sqrt{-3}]$ fails integral closedness because $(1+\sqrt{-3})/2$ is a root of the monic $x^{2}-x+1$. This is correct: $(1+\sqrt{-3})/2$ satisfies $x^{2}-x+1=0$ and lies in the fraction field $\Q(\sqrt{-3})$ but not in $\Z[\sqrt{-3}]$. The claim that $\Z[2i]$ fails integral closedness via $i$ root of $x^{2}+1$ is also correct. Both are valid.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] x^4+1 reducible mod every prime
- **Category:** Supplement/remark error
- **Location:** ring:prob-eisenstein-shift / solution
- **Detail:** The solution claims '$x^{4}+1$ is reducible modulo every prime $p$'. This is a well-known true fact: $x^{4}+1=\Phi_{8}(x)$ and $\Phi_{8}$ is reducible mod every prime (since $(\Z/8)^{\times}$ is not cyclic of order $\varphi(8)=4$ in a way that... more precisely, $x^{4}+1$ factors mod every prime because $8\nmid p-1$ for all primes $p$ except those $\equiv 1 \pmod 8$, and even then it factors; indeed $x^{4}+1$ is reducible mod all primes). This is correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Power series supplement: PID A[[x]] is UFD
- **Category:** Supplement/remark error
- **Location:** supplement (冪級数環では)
- **Detail:** The supplement states that for a PID $A$, $A[[x]]$ is a UFD, citing \see{ring:power-series-ufd}. This is a known true theorem (if $A$ is a PID then $A[[x]]$ is a UFD). The citation is a \see (non-logical pointer), which is appropriate. The claim that $K[[x_1,\dots,x_n]]$ is a regular local ring hence UFD is correct. The Samuel counterexample reference is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] High-level viewpoint: fiber being irreducible line
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement says the fiber over $(p)$ of $\Spec A[x]\to\Spec A$ is the irreducible line $\mathbb{A}^{1}_{A/p}$. This is correct: the fiber is $\Spec((A/p)[x])=\mathbb{A}^{1}_{A/p}$, which is irreducible since $(A/p)[x]$ is a domain. The identification of '$pA[x]$ prime' with 'extension of $(p)$ is prime' is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Eisenstein hypcheck: 2x^2+2x example
- **Category:** Supplement/remark error
- **Location:** ring:eisenstein / hypcheck
- **Detail:** The hypcheck for '$p\nmid a_{n}$' gives the example $2x^{2}+2x=2x(x+1)$ with $p=2$, saying 'the degree drops'. Here $a_{n}=2$, $p=2$ divides $a_{n}$, so $\bar\pi(f)$ has degree $<n$. The example correctly illustrates that dropping $p\nmid a_{n}$ breaks the argument. However, note $2x^2+2x$ is not primitive and the criterion's conclusion is about $K[x]$ irreducibility; over $\Q$, $2x^2+2x=2x(x+1)$ is indeed reducible, so it is a valid counterexample to the conclusion. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Eisenstein hypcheck: x^2-4 example
- **Category:** Supplement/remark error
- **Location:** ring:eisenstein / hypcheck
- **Detail:** The hypcheck for '$p^{2}\nmid a_{0}$' gives $x^{2}-4=(x-2)(x+2)$ with $p=2$: $2\mid -4$ but $4\mid -4$, and $x^{2}-4$ is reducible over $\Q$. Also $p\nmid a_{n}=1$ holds. So this correctly shows the hypothesis $p^{2}\nmid a_{0}$ cannot be dropped. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Z[2i] is not a UFD (asserted in hypcheck)
- **Category:** Unsupported fact
- **Location:** ring:gauss-irreducible / hypcheck
- **Detail:** The hypcheck asserts '$A=\Z[2i]$ (integral domain but not a UFD)'. The non-UFD claim is not justified. While true ($\Z[2i]$ is not integrally closed, hence not a UFD), the text provides no argument. This is a side comment making an unproven claim. However, the counterexample to the irreducibility comparison does not actually require $\Z[2i]$ to be a non-UFD—it only requires it to be a domain where the comparison fails, which is demonstrated. The parenthetical '(not a UFD)' is an unsupported assertion but is true.
- **Proposed fix:** Either remove '(not a UFD)' or justify: '$\Z[2i]$ is not integrally closed (the element $i$ of its fraction field is a root of the monic $x^{2}+1$ but is not in $\Z[2i]$), hence not a UFD.'
- **Reported:** 2026-10-28 (10fede1)
