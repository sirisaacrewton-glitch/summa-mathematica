# Verification tracker: `02-algebra/03-commutative-algebra/02-commutative-algebra/10-integral-closure-finiteness.html`

<!-- source: 02-algebra/03-commutative-algebra/02-commutative-algebra/10-integral-closure-finiteness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is logically sound. The proofs of the main theorems (clearing denominators, trace/norm, finiteness of integral closure in separable extensions, Noether finiteness, Chevalley extension, integral closure as intersection of valuation rings) check out, and the cited labels match their uses. The supplement about the ring of integers being a free Z-module of rank [L:Q] and a Dedekind domain is correct. The hypcheck's claim that the axiom of choice is unused is defensible because only finitely many polynomials need to be split. No genuine errors of the six specified kinds were found.

## Issues

### ISSUE-0001 [Open] Hypcheck claim that AC is not used is questionable
- **Category:** Supplement/remark error
- **Location:** hypcheck (ring:noether-finiteness)
- **Detail:** The hypcheck states '選択公理：使っていない（代数閉包の代わりに十分大きな分解体の中で議論できる）'. However, Step 3 adds q-th roots of finitely many elements of k and of the coefficients; constructing such roots and the finite extension k' requires choosing roots in an algebraic closure, and more importantly the proof invokes ring:integral-closure-finite (Step 2) whose proof uses dual bases and trace nondegeneracy—these are fine without AC. The real concern: the statement 'not used' is an overstatement since the existence of an algebraic closure / splitting field for finitely many polynomials is provable in ZF, so this is arguably acceptable. This is borderline; I will not report it as it is defensible.
- **Proposed fix:** No change needed; the claim is defensible since only finitely many polynomials are split and finite splitting fields exist in ZF.
- **Reported:** 2026-10-28 (10fede1)
