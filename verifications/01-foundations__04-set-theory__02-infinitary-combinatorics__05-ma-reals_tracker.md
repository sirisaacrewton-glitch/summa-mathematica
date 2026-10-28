# Verification tracker: `01-foundations/04-set-theory/02-infinitary-combinatorics/05-ma-reals.html`

<!-- source: 01-foundations/04-set-theory/02-infinitary-combinatorics/05-ma-reals.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs (set:ma-baire, set:ma-measure, set:null-poset-ccc, set:ma-compact-ccc, set:ma-locally-compact-ccc, set:baire-compact, set:ma-ccc-fip, set:ma-ccc-product) are logically sound, with hypotheses properly verified and citations matching their targets. The genuine problems concentrate in the supplements: the Kunen exercise citation and the 'not meager' claim for ${}^{\omega_{1}}[0,1]$, the overstated 'c.c.c. implies countable-coordinate reduction' remark, and the imprecise statement about measures of unions of $\kappa$ measurable sets. These are reported as supplement/remark errors of medium confidence.

## Issues

### ISSUE-0001 [Open] Kunen exercise reference for union of κ meager sets in compact ccc space
- **Category:** Supplement/remark error
- **Location:** supplement of set:ma-compact-ccc, paragraph 'set:ma-baire との違い'
- **Detail:** The supplement claims that for $X={}^{\omega_{1}}[0,1]$ there are $\aleph_{1}$ nowhere dense closed sets $K_{\alpha}=\{f\mid f(\alpha)=0\}$ whose union is not meager, citing Kunen Ch. II Exercise 12. But each $K_{\alpha}$ is closed with empty interior (nowhere dense), and the union $\bigcup_{\alpha<\omega_{1}}K_{\alpha}$ is exactly the set of $f$ that vanish at some coordinate. This union is meager by definition (a countable union? no—an $\aleph_{1}$-union of nowhere dense sets is not automatically meager). The real issue: the claim that this union is 'not meager' is asserted without proof and is misattributed; moreover the subsequent argument (using ccc to reduce to countably many coordinates $S$ and Baire in ${}^{S}[0,1]$) actually shows that the intersection of countably many dense open sets meets the complement, i.e. it argues about a different statement. The stated conclusion 'there are $\aleph_{1}$ nowhere dense closed sets whose union is not meager' is not established by the given reasoning and the reference is imprecise.
- **Proposed fix:** Replace with a precise statement: 'In $X={}^{\omega_{1}}[0,1]$ (compact, c.c.c., Hausdorff), the $\aleph_{1}$ closed nowhere dense sets $K_{\alpha}=\{f\mid f(\alpha)=0\}$ have union $\bigcup_{\alpha}K_{\alpha}$ which is meager, yet $X$ itself is not the union of $\kappa$ meager sets in the sense of \ref{set:ma-baire}; the correct contrast is that the conclusion of \ref{set:ma-compact-ccc} (nonempty intersection of $\kappa$ dense open sets) does not upgrade to additivity of the meager ideal, since $X$ is c.c.c. but the meager ideal is not $\kappa$-additive here.' Or remove the Kunen exercise citation and the unsupported 'not meager' claim.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that ccc dense open sets depend on countably many coordinates
- **Category:** Supplement/remark error
- **Location:** supplement of set:ma-compact-ccc, last paragraph
- **Detail:** The text asserts: 'c.c.c. により任意の稠密開集合が可算個の開箱の和である稠密開集合を含み、したがって可算個の稠密開集合はまとめて可算個の座標 $S\subseteq\omega_{1}$ にしか依存しない稠密開集合にまで縮められる'. This is not correct in general: c.c.c. does not imply that every dense open set contains a dense open set depending on countably many coordinates (that would essentially make the space countably supported, which fails for e.g. ${}^{\omega_{1}}[0,1]$—a c.c.c. space where $\{f\mid f(\alpha)=0\}$ type sets are not countably supported). The reduction to countably many coordinates requires a $\Delta$-system / countable-support argument specific to the product structure, not merely c.c.c.
- **Proposed fix:** Replace with: 'For the product ${}^{\omega_{1}}[0,1]$, a direct $\Delta$-system argument on the finite supports of basic open sets shows that countably many dense open sets can be refined to a dense open set depending on countably many coordinates $S$; this uses the product structure, not c.c.c. alone.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] MA(κ) additivity of null ideal stated as 'measure of union equals sup of countable partial sums'
- **Category:** Supplement/remark error
- **Location:** supplement of set:ma-measure
- **Detail:** The supplement says: 'MA(κ) のもとで κ 個のルベーグ可測集合の和は可測であり、その測度は可算個の部分和の測度に等しいことも示せる'. For arbitrary $\kappa$ many measurable sets, the measure of the union is the supremum over finite (or countable) partial unions only if the family is directed/increasing; for a general family of $\kappa$ measurable sets this equality can fail (e.g. $\kappa$ many singletons: sup of countable partial sums is $\aleph_{0}$-many points' measure $=0$, but the union may have positive measure if $\kappa=2^{\aleph_{0}}$). The statement as written is false without an increasing/directed hypothesis.
- **Proposed fix:** Restrict to the intended case: 'MA(κ) implies that the union of $\kappa$ many Lebesgue null sets is null; more generally, for an increasing (directed) family $\langle A_{\alpha}\mid\alpha<\kappa\rangle$ of measurable sets, $\mu(\bigcup_{\alpha}A_{\alpha})=\sup_{\alpha}\mu(A_{\alpha})$.'
- **Reported:** 2026-10-28 (8ccef3d)
