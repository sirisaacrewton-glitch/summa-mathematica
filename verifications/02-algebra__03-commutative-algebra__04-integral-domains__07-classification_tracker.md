# Verification tracker: `02-algebra/03-commutative-algebra/04-integral-domains/07-classification.html`

<!-- source: 02-algebra/03-commutative-algebra/04-integral-domains/07-classification.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Z[√-5] is not a normal Noetherian domain
- **Category:** Supplement/remark error
- **Location:** supplement (図にないクラス)
- **Detail:** The supplement lists $\Z[\sqrt{-5}]$ as an example of a 'GCD でないが正規なネーター整域' (a normal Noetherian domain that is not a GCD domain). But $\Z[\sqrt{-5}]$ is not normal: it is not integrally closed in its fraction field $\Q(\sqrt{-5})$, since $(1+\sqrt{-5})/2$ is integral over $\Z[\sqrt{-5}]$ but not in it. Indeed the page's own table (Step 3) uses $\Z[\sqrt{-5}]$ as an example of a Dedekind domain that is not a GCD domain, and Dedekind domains are normal — so the supplement contradicts the table. The claim that it is 'normal' is false.
- **Proposed fix:** Replace the example: '**GCD でないが正規なネーター整域**' should use a genuinely normal non-GCD example, e.g. $K[x,y,z]/(x^{2}+y^{2}+z^{2})$ over a field $K$ of characteristic $\neq 2$ (a normal Noetherian UFD that is not a GCD domain is impossible since UFD $\subset$ GCD; use instead a normal Noetherian domain that is not a UFD, such as $K[x,y,z]/(xy-z^{2})$). Do not cite $\Z[\sqrt{-5}]$ as normal.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Z[√-5][x] is not Prufer
- **Category:** Supplement/remark error
- **Location:** supplement (図にないクラス)
- **Detail:** The supplement claims $\Z[\sqrt{-5}][x]$ is an example of a '正規だがプリューファーでも GCD でもない整域' (normal but neither Prufer nor GCD). Two problems: (1) $\Z[\sqrt{-5}]$ is not normal, so $\Z[\sqrt{-5}][x]$ is not normal either (polynomial extension preserves non-normality). (2) More importantly, $\Z[\sqrt{-5}]$ is a Dedekind domain, hence Prufer, and a polynomial ring over a Prufer domain is Prufer, so $\Z[\sqrt{-5}][x]$ IS a Prufer domain. The claim that it is not Prufer is false.
- **Proposed fix:** Remove this example or replace it with a correct one. A normal domain that is neither Prufer nor GCD: e.g. $K[x,y]$ is normal (UFD) but not Prufer (not a Bezout domain, since $(x,y)$ is not principal) and is a GCD domain, so it fails the 'not GCD' part. Use instead a normal Noetherian domain that is not a GCD domain, e.g. $K[x,y,z]/(xy-z^{2})$ (normal, not UFD hence not GCD), which is not Prufer since it is Noetherian and not Dedekind.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Krull domain description imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (図にないクラス)
- **Detail:** The supplement describes a 'クルル整域' as '一意分解環とデデキント環を共通に含む、「因子の一意分解」をもつ整域'. While it is true that UFDs and Dedekind domains are Krull domains, the characterization 'factorization into divisors is unique' is imprecise: a Krull domain is characterized by being an intersection of DVRs (satisfying the finite character condition), equivalently a domain whose height-one localizations are DVRs and which is a locally finite intersection. The phrase '因子の一意分解' is vague and could be misread as unique factorization of elements, which Krull domains need not have.
- **Proposed fix:** State precisely: 'クルル整域とは、高さ1の素イデアルによる局所化がすべて離散付値環で、かつ有限個を除き自明となる付値による交わりとして表される整域（イデアルの因子分解が一意的）である。一意分解環もデデキント環もクルル整域である。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] K[x1,x2,...] is a UFD but not Noetherian - correct, but citation check
- **Category:** Supplement/remark error
- **Location:** supplement (図にないクラス)
- **Detail:** The claim that $K[x_{1},x_{2},\dots]$ is a UFD but not Noetherian is correct. However, the parenthetical justification 'each element lies in some $K[x_{1},\dots,x_{n}]$ which is a UFD, and the factorization does not change when variables are added' is essentially correct but the citation to '\ref{ring:noetherian-exact} の後の例' for non-Noetherianness should be verified; the ideal $(x_{1},x_{2},\dots)$ is not finitely generated, which is the standard argument. This is a minor point and the statement is true, so no correction needed beyond confirming the citation exists.
- **Proposed fix:** No change needed; optionally add the explicit reason: 'the ideal $(x_{1},x_{2},\dots)$ is not finitely generated, so the ring is not Noetherian.'
- **Reported:** 2026-10-28 (10fede1)
