# Verification tracker: `02-algebra/03-commutative-algebra/04-integral-domains/07-classification.html`

<!-- source: 02-algebra/03-commutative-algebra/04-integral-domains/07-classification.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Z[√-5] is not a normal Noetherian domain that is not GCD
- **Category:** Supplement/remark error
- **Location:** supplement (図にないクラス)
- **Detail:** The supplement lists $\Z[\sqrt{-5}]$ as an example of a 'normal Noetherian domain that is not a GCD domain'. But $\Z[\sqrt{-5}]$ is not normal (it is not integrally closed; the page's own table and Step 3/Step 5 use $\Z[\sqrt{-5}]$ as a non-GCD example, and \ref{ring:non-normal-examples} shows $\Z[\sqrt{5}]$ is not normal; $\Z[\sqrt{-5}]$ is likewise non-normal since $\sqrt{-5}$ is integral over it but not in it). So the example fails the 'normal' requirement.
- **Proposed fix:** Replace with a correct example of a normal Noetherian domain that is not a GCD domain, e.g. $K[x,y,z]/(x^{2}+y^{2}-z^{2})$ or $\Z[\sqrt{-5}][x]$ is not normal either; use instead $K[x,y,z]/(xy-z^{2})$ (a normal Noetherian non-UFD, hence not GCD) or simply state 'a normal Noetherian domain that is not a GCD domain (e.g. $K[x,y,z]/(xy-z^{2})$)' and remove $\Z[\sqrt{-5}]$ from this role.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Z[√-5][x] is not normal
- **Category:** Supplement/remark error
- **Location:** supplement (図にないクラス)
- **Detail:** The supplement claims $\Z[\sqrt{-5}][x]$ is an example of a 'normal but neither Prufer nor GCD' domain. Since $\Z[\sqrt{-5}]$ is not normal, neither is $\Z[\sqrt{-5}][x]$ (normality passes to and from polynomial extensions: $A[x]$ is normal iff $A$ is normal). Hence this is not a normal domain.
- **Proposed fix:** Use a genuinely normal example, e.g. $K[x,y,z]/(xy-z^{2})$ (normal, Noetherian, not a UFD hence not GCD, and not Prufer since it is not a valuation-type/1-dimensional local), or $K[x,y]$ localized appropriately; state 'a normal domain that is neither Prufer nor GCD, e.g. $K[x,y,z]/(xy-z^{2})$'.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Krull domain characterization overstated
- **Category:** Supplement/remark error
- **Location:** supplement (図にないクラス)
- **Detail:** The supplement describes a Krull domain as a domain 'containing both UFDs and Dedekind domains, having unique factorization of divisors'. While Krull domains do contain UFDs and Dedekind domains, the phrase '因子の一意分解をもつ' (unique factorization of divisors) is imprecise: a Krull domain is one where every nonzero element is contained in only finitely many height-one primes and the localization at each is a DVR, with the divisor class group measuring failure of unique factorization. Saying it 'has unique factorization of divisors' is only true when the class group is trivial.
- **Proposed fix:** State: 'A Krull domain is an integral domain that is an intersection of DVRs, satisfies the ascending chain condition on divisorial ideals, and in which every nonzero element lies in only finitely many height-one primes; it contains all UFDs and all Dedekind domains. Unique factorization of divisors holds iff its divisor class group is trivial.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] K[x_1,x_2,...] is a UFD but the parenthetical justification is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (図にないクラス)
- **Detail:** The claim that $K[x_{1},x_{2},\dots]$ is a UFD but not Noetherian is correct. However the parenthetical 'each element lies in some $K[x_{1},\dots,x_{n}]$, a UFD there, and the factorization does not change when variables are added' needs the additional point that a factorization in $K[x_{1},\dots,x_{n}]$ remains a factorization (with the same irreducibles) in the larger ring, which is true because these are polynomial extensions and irreducibles stay irreducible; this is essentially fine but the argument as stated glosses over why uniqueness is preserved across the directed union. This is a minor imprecision, not a falsehood.
- **Proposed fix:** Add: 'and since $K[x_{1},\dots,x_{n}]\subset K[x_{1},\dots,x_{m}]$ is a polynomial extension for $m>n$, an irreducible factorization in the smaller ring remains an irreducible factorization in the larger one, so the factorization is well defined in the union.'
- **Reported:** 2026-10-28 (8ccef3d)
