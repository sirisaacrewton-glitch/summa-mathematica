# Verification tracker: `01-foundations/06-category-theory/02-monoidal-categories/09-doctrinal-adjunction.html`

<!-- source: 01-foundations/06-category-theory/02-monoidal-categories/09-doctrinal-adjunction.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem and its proof are logically sound: the transposes are correctly computed, the associativity and unit axioms are reduced to those of F using invertibility of F_{2}, F_{0}, and the hypcheck accurately lists the uses of strong monoidality and the adjunction. The worked example and the two problems/solutions are correct. The only genuine problems are in the supplement: the unqualified 'one-to-one correspondence' between monoidal structures on U and comonoidal structures on F overstates Kelly's doctrinal adjunction (compatibility with unit/counit is required), and the remark linking limit preservation to the 'product case' is a misleading overstatement of a merely heuristic analogy.

## Issues

### ISSUE-0001 [Open] Claim that U-monoidal structures correspond bijectively to comonoidal structures on F
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement states that for an adjunction F ⊣ U, monoidal-functor structures on U correspond one-to-one (via mates) with comonoidal-functor structures on F. This is not correct as stated. The mate correspondence gives a bijection between lax monoidal structures on U and colax (opmonoidal) structures on F only when one restricts to structures compatible with the adjunction in the doctrinal sense; more precisely, the correct statement (Kelly's doctrinal adjunction) is that colax monoidal structures on F correspond to lax monoidal structures on U *together with* the compatibility that the mates of the structure maps are the given ones — but a bare colax structure on F does not automatically produce a lax structure on U, and vice versa, without the coherence with η and ε. The unqualified 'one-to-one correspondence' overstates the result.
- **Proposed fix:** Replace with: 'More generally, for an adjunction $F\dashv U$, lax monoidal structures on $U$ and colax (opmonoidal) structures on $F$ that are compatible with the unit and counit (i.e. form a doctrinal adjunction) correspond to each other via mates. In particular, if $F$ carries a strong monoidal structure, then $U$ inherits a lax monoidal structure, and the adjunction is monoidal in the 2-category of monoidal categories precisely when this structure on $F$ is strong (Kelly 1974).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Misleading claim that right adjoint preserving limits is 'the product case' background
- **Category:** Supplement/remark error
- **Location:** supplement (似た定理)
- **Detail:** The supplement says that 'the right adjoint preserving limits (\ref{cat:adjoints-preserve-limits}) is the background of the product case of this theorem.' This is imprecise: the doctrinal adjunction theorem does not follow from, nor is it a special case of, the fact that right adjoints preserve limits. Preservation of limits concerns the underlying functor, whereas the monoidal structure maps $U_{2}$ are extra data not obtained from limit preservation. The connection is only heuristic.
- **Proposed fix:** Replace with: 'The fact that right adjoints preserve limits (\ref{cat:adjoints-preserve-limits}) is only a heuristic analogy here: it explains why, when $\square'$ is a cartesian product, the comparison map $U_{2}$ becomes an isomorphism, but the monoidal structure maps themselves are not obtained from limit preservation.'
- **Reported:** 2026-10-28 (8ccef3d)
