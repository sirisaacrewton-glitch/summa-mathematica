# Verification tracker: `02-algebra/02-group-theory/05-infinite-abelian/03-torsion-free.html`

<!-- source: 02-algebra/02-group-theory/05-infinite-abelian/03-torsion-free.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The proofs (rank, height/type, Baer classification, indecomposable rank-two, Pontryagin criterion, Baer–Specker, Specker) are sound and citations match their targets. The only genuine issue is in the supplement: the remark on the dual of Z^N conflates 'Hom(Z^N,Z) is free' with slenderness, which is imprecise since Z^N is not slender. All other supplements, examples and stated facts check out (e.g., Z[1/6] vs Z[1/2] non-isomorphic via 3-height, (1/3)Z ≅ Z via finite type difference, continuum many types, indecomposable rank-two with only ±1 automorphisms).

## Issues

### ISSUE-0001 [Open] Incorrect claim that Z^N is slender / dual characterization
- **Category:** Supplement/remark error
- **Location:** supplement / Z^N の双対
- **Detail:** The supplement states that Hom(Z^N, Z) ≅ Z^{(N)} (each homomorphism depends on finitely many coordinates) and that this 'connects to the theory of slender groups'. The statement Hom(Z^N,Z)≅Z^{(N)} is correct (Specker). However, the sentence 'この性質をもつ群は slender 群の理論につながる' is imprecise/misleading: slenderness is defined by the vanishing of Hom(Z^N, G) for the group G, not by Hom(Z^N,Z) being free. Z^N itself is not slender (there are nonzero homomorphisms Z^N→Z), so saying 'groups with this property connect to slender theory' conflates the dual being free with slenderness. This is an overstated/imprecise side claim.
- **Proposed fix:** Replace with: 'A group $A$ is called slender if every homomorphism $\Z^{\N}\to A$ kills all but finitely many standard basis vectors; equivalently $\mathrm{Hom}(\Z^{\N},A)\cong A^{(\N)}$. Since $\mathrm{Hom}(\Z^{\N},\Z)\cong\Z^{(\N)}$, the group $\Z$ is slender, and this is the starting point of the theory of slender groups.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Additivity of rank for quotient requires care / stated as known exercise
- **Category:** Supplement/remark error
- **Location:** example (rank example) / last sentence
- **Detail:** The example asserts additivity $r(G)=r(H)+r(G/H)$ for $H\le G$ with $G$ torsion-free, citing 'Robinson §4.2 exercise'. This is true, but the parenthetical definition '$G/H$ の階数はその捩れのない部分 $\frac{G/H}{T(G/H)}$ の階数' is fine; the issue is that the claim is stated as a known fact without proof and attributed vaguely. It is actually correct, so this is borderline; but the phrasing '階数は部分群と剰余群について加法的' with the caveat that $G/H$ may have torsion is correct only when rank of $G/H$ is taken as rank of its torsion-free quotient, which the text does say. No error.
- **Proposed fix:** No change needed; statement is correct as written.
- **Reported:** 2026-10-28 (10fede1)
