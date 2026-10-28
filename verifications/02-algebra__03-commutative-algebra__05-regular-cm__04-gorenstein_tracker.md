# Verification tracker: `02-algebra/03-commutative-algebra/05-regular-cm/04-gorenstein.html`

<!-- source: 02-algebra/03-commutative-algebra/05-regular-cm/04-gorenstein.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Bass's conjecture attribution: Peskine–Szpiro and Roberts
- **Category:** Supplement/remark error
- **Location:** supplement / バスの予想
- **Detail:** The supplement states that Bass's conjecture (if a finitely generated nonzero module of finite injective dimension exists, then A is Cohen–Macaulay) was proved using the New Intersection Theorem by Peskine–Szpiro and Roberts. This is a misattribution. The implication 'existence of a nonzero finitely generated module of finite injective dimension implies A is Cohen–Macaulay' is a theorem of Bass (Bass's conjecture, proved by Bass himself in the 1960s for the case at hand; the general statement that a local ring admitting a nonzero finitely generated module of finite injective dimension is Cohen–Macaulay is due to Bass). The New Intersection Theorem (Peskine–Szpiro in equal characteristic, Roberts in general) is a different deep result about intersections of modules and dimension, and is not the standard proof of this statement. Attributing it to Peskine–Szpiro and Roberts via the New Intersection Theorem is historically and mathematically inaccurate.
- **Proposed fix:** Replace with: 「入射次元が有限な有限生成加群 $M\neq 0$ が存在すれば $A$ は CM であること（バスの予想、バス自身により証明済み）は、このページでは $M=A$ の場合（\ref{ring:bass-theorem.2}）だけを示した。」 (i.e. attribute the general statement to Bass, not to Peskine–Szpiro/Roberts and the New Intersection Theorem).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Frobenius algebra characterization of artinian Gorenstein rings
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** The supplement says that in dimension 0, 'socle one-dimensional' means 'A is its own dual (injective hull)', and that in the language of finite-dimensional algebras this is 'close to' the notion of a Frobenius algebra ($A\cong\Hom_{k}(A,k)$). This is imprecise/overstated: for a finite-dimensional local $k$-algebra, being Gorenstein (socle 1-dimensional) is exactly the condition of being a Frobenius algebra, not merely 'close to' it. A finite-dimensional algebra is Frobenius iff the left regular module is isomorphic to its $k$-dual, and for a local artinian ring this is equivalent to $\dim_{k}\operatorname{Soc}A=1$. Saying it is 'close to' understates an exact equivalence.
- **Proposed fix:** Replace with: 「0 次元では『ソークルが 1 次元』は $A$ が自分自身の双対 $\Hom_{k}(A,k)$ に同型であること、すなわち $A$ がフロベニウス代数であることと同値である。」
- **Reported:** 2026-10-28 (8ccef3d)
