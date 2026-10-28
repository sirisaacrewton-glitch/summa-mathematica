# Verification tracker: `02-algebra/02-group-theory/07-representations/03-character-tables.html`

<!-- source: 02-algebra/02-group-theory/07-representations/03-character-tables.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The two previously reported issues remain open: the normal-subgroup proof states the trivial inclusion direction rather than the needed one, and the Galois supplement omits the requirement that m be a common multiple of element orders. Among the side comments, the S_n integrality justification is genuinely wrong (g and g^k are not generally conjugate in S_n; the correct reason is that classes are real). Two minor gaps concern the D_4 dimension count (needs the number of conjugacy classes to pin down a single 2-dim irreducible) and the S_4 lift argument (should note the 4-cycle is not in V_4).

## Issues

### ISSUE-0001 [Open] Kernel of regular representation of G/N is N, but the summands' kernels are in G
- **Category:** Logical gap
- **Location:** rep:normal-subgroups-from-table / proof
- **Detail:** The proof says the kernel of C[G/N] (viewed as a G-representation) is exactly N, then decomposes it into irreducibles and claims 'the kernel of the direct sum is the intersection of the kernels of the components', concluding N contains the intersection of the Ker χ_i. But the kernel of a G-representation is a subgroup of G, and the kernel of C[G/N] as a G-representation is N (correct). The decomposition into G-irreducibles gives summands whose kernels Ker χ_i satisfy ∩Ker χ_i = N. The text's phrasing 'N はそれらの Ker χ_i の共通部分を含む' (N contains the intersection) is backwards: it should be that N equals/contains... Actually ∩Ker χ_i = N, so N ⊇ ∩Ker χ_i is trivially equality; the needed inclusion N ⊆ ∩Ker χ_i (each summand with N in kernel) is what gives N ⊆ ∩Ker χ_i, combined with ∩Ker χ_i ⊆ N gives equality. The direction stated ('N contains the intersection') is the trivial/wrong direction and does not establish N = ∩Ker χ_i.
- **Proposed fix:** Since each irreducible summand of C[G/N] has N in its kernel, N ⊆ ∩_{i} Ker χ_i. Conversely the kernel of the whole representation C[G/N] is N, and the kernel of a direct sum is the intersection of the kernels of the summands, so ∩_{i} Ker χ_i ⊆ N. Hence N = ∩_{i} Ker χ_i.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The proof still says 'N contains the intersection of the Ker χ_i', which is the trivial direction; the needed conclusion is the reverse inclusion (intersection ⊆ N), which follows from ∩Ker χ_i = N but is not correctly argued as written.

### ISSUE-0002 [Open] Galois group permutes rows claim needs the values to lie in Q(ζ_m) with m the exponent
- **Category:** Supplement/remark error
- **Location:** supplement / 指標表に現れる数
- **Detail:** The supplement states that Gal(Q(ζ_m)/Q) permutes the rows of the character table. This is only true when m is a common multiple of the orders of all group elements (e.g. the exponent of G) and all character values lie in Q(ζ_m); for a general m the Galois action need not preserve the set of irreducible characters (it permutes them only if Q(ζ_m) contains all values). As stated with unspecified m it is imprecise.
- **Proposed fix:** Take m to be a multiple of the exponent of G (so that all character values lie in Q(ζ_m)). Then each σ ∈ Gal(Q(ζ_m)/Q) sends the character χ to σ∘χ, which is again an irreducible character, so Galois acts on the set of irreducible characters, permuting the rows of the character table.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still states Gal(Q(ζ_m)/Q) permutes the rows without specifying that m is a common multiple of element orders (e.g. the exponent) so that all character values lie in Q(ζ_m); as stated it is imprecise.

### ISSUE-0003 [Open] S_n character integrality justification is wrong
- **Category:** Supplement/remark error
- **Location:** supplement / 指標表に現れる数
- **Detail:** The supplement claims all S_n characters are integers because 'g and g^k (k coprime to the order) are conjugate'. This is false: in S_n, g and g^k are conjugate only when g^k has the same cycle type as g, which fails in general (e.g. a 4-cycle and its square, a product of two 4-cycles, etc.). The correct reason is that every element of S_n is conjugate to its powers g^k for k coprime to the order only for certain classes; the actual reason characters of S_n are integers is that every conjugacy class is real (g is conjugate to g^{-1} in S_n), so characters are real, and being algebraic integers they are rational integers. The stated justification is incorrect.
- **Proposed fix:** Replace the parenthetical with: '($S_{n}$ では各 $g$ は $g^{-1}$ と共役、すなわちすべての共役類が実類なので指標は実数値。指標は代数的整数でもあるから整数。本サイト未収録)' — i.e. because every conjugacy class of S_n is real (g conjugate to g^{-1}), characters are real, hence rational integers.
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0004 [Open] D_4 irreducible count: '8-4=4=2^2' does not by itself force a single 2-dim irreducible
- **Category:** Logical gap
- **Location:** example D_4 と Q_8
- **Detail:** The text argues the remaining sum of squares is 4=2^2, concluding there is exactly one 2-dimensional irreducible. But 4 could also be 1+1+1+1 (four more linear characters) or 1+1+... ; the sum-of-squares argument alone does not exclude other decompositions. One needs the additional fact that there are exactly 5 conjugacy classes (hence exactly 5 irreducibles), so after the 4 linear ones only one remains, of dimension 2. The count of conjugacy classes is stated but not used to justify the number of irreducibles.
- **Proposed fix:** Add: '共役類が 5 個なので既約指標もちょうど 5 個。1 次元が 4 個だから残りは 1 個で、次元の二乗和 $8-4=4$ より次元は 2。'
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0005 [Open] S_4 2-dim lift: claim that a 4-cycle maps to a transposition needs justification
- **Category:** Logical gap
- **Location:** example S_4
- **Detail:** The text asserts the 2-dimensional character value at (1 2 3 4) is 0 because 'a 4-cycle maps to an element of order 2, i.e. a transposition'. The map S_4 → S_3 on the three partitions has kernel V_4; a 4-cycle has order 4, its image has order dividing 4 and, since V_4 has exponent 2 and the 4-cycle is not in V_4, the image has order 2 (a transposition). This is correct but the reasoning '位数 2 の元、すなわち互換' skips verifying the image is not the identity; it should note the 4-cycle is not in V_4. Minor gap.
- **Proposed fix:** Add: '$(1\,2\,3\,4)\notin V_{4}$ なので像は単位元でなく、位数は 4 を割り 2 以下、よって位数 2 の元（互換）。'
- **Reported:** 2026-10-28 (048145a)
