# Verification tracker: `02-algebra/02-group-theory/07-representations/03-character-tables.html`

<!-- source: 02-algebra/02-group-theory/07-representations/03-character-tables.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the tools (diagonalizability, kernel of a character, lifting, normal subgroups from the table, double transitivity) and the worked tables for D_4, Q_8, A_4, S_4 check out, and the cited labels match their uses. Two issues remain: the proof of 'normal subgroups from the character table' states the inclusion in the wrong direction (the argument as written gives the trivial direction), and the supplement's Galois-permutes-rows statement omits the requirement that m be a multiple of the exponent so that all values lie in Q(ζ_m).

## Issues

### ISSUE-0001 [Open] Kernel of regular representation of G/N is N, but the summands' kernels are in G
- **Category:** Logical gap
- **Location:** rep:normal-subgroups-from-table / proof
- **Detail:** The proof says the kernel of C[G/N] (viewed as a G-representation) is exactly N, then decomposes it into irreducibles and claims 'the kernel of the direct sum is the intersection of the kernels of the components', concluding N contains the intersection of the Ker χ_i. But the kernel of a G-representation is a subgroup of G, and the kernel of C[G/N] as a G-representation is N (correct). The decomposition into G-irreducibles gives summands whose kernels Ker χ_i satisfy ∩Ker χ_i = N. The text's phrasing 'N はそれらの Ker χ_i の共通部分を含む' (N contains the intersection) is backwards: it should be that N equals/contains... Actually ∩Ker χ_i = N, so N ⊇ ∩Ker χ_i is trivially equality; the needed inclusion N ⊆ ∩Ker χ_i (each summand with N in kernel) is what gives N ⊆ ∩Ker χ_i, combined with ∩Ker χ_i ⊆ N gives equality. The direction stated ('N contains the intersection') is the trivial/wrong direction and does not establish N = ∩Ker χ_i.
- **Proposed fix:** Since each irreducible summand of C[G/N] has N in its kernel, N ⊆ ∩_{i} Ker χ_i. Conversely the kernel of the whole representation C[G/N] is N, and the kernel of a direct sum is the intersection of the kernels of the summands, so ∩_{i} Ker χ_i ⊆ N. Hence N = ∩_{i} Ker χ_i.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Galois group permutes rows claim needs the values to lie in Q(ζ_m) with m the exponent
- **Category:** Supplement/remark error
- **Location:** supplement / 指標表に現れる数
- **Detail:** The supplement states that Gal(Q(ζ_m)/Q) permutes the rows of the character table. This is only true when m is a common multiple of the orders of all group elements (e.g. the exponent of G) and all character values lie in Q(ζ_m); for a general m the Galois action need not preserve the set of irreducible characters (it permutes them only if Q(ζ_m) contains all values). As stated with unspecified m it is imprecise.
- **Proposed fix:** Take m to be a multiple of the exponent of G (so that all character values lie in Q(ζ_m)). Then each σ ∈ Gal(Q(ζ_m)/Q) sends the character χ to σ∘χ, which is again an irreducible character, so Galois acts on the set of irreducible characters, permuting the rows of the character table.
- **Reported:** 2026-10-28 (8ccef3d)
