# Verification tracker: `02-algebra/01-linear-algebra/03-eigen/02-jordan.html`

<!-- source: 02-algebra/01-linear-algebra/03-eigen/02-jordan.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Generalized Jordan block description is wrong
- **Category:** Supplement/remark error
- **Location:** supplement (前提を弱めると)
- **Detail:** The supplement says that for each power q^e of an irreducible polynomial one gets a 'generalized Jordan cell' obtained by arranging C(q) along the diagonal and putting 1's below it. This is not correct: the elementary divisor q^e corresponds to the companion matrix C(q^e) of the single polynomial q^e (a block of size e·deg q), not to a block-diagonal arrangement of e copies of C(q) with subdiagonal 1's. The described object is not the rational canonical form block for q^e, and the description is imprecise/incorrect.
- **Proposed fix:** Replace with: 'In elementary-divisor form, each irreducible power $q^{e}$ corresponds to the companion block $C(q^{e})$ of size $e\deg q$; over an algebraic closure this block further splits into $\deg q$ Jordan blocks of size $e$ (one for each root of $q$).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Schur decomposition cited as replacement for Jordan form
- **Category:** Supplement/remark error
- **Location:** supplement (計算の観点)
- **Detail:** The claim that Schur decomposition (unitary triangularization) is used 'instead of' the Jordan form in floating point is overstated. Schur form gives a triangular matrix, not a canonical form classifying similarity classes, and it does not replace the Jordan form's role; it is used for eigenvalue computation, not as a substitute canonical form. The statement as written is imprecise.
- **Proposed fix:** Replace with: 'In floating-point computation the Jordan form is not used because it is numerically unstable; instead one computes the Schur decomposition (unitary triangularization) for eigenvalue problems, which is numerically stable, though it does not give a canonical form.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Perfect-field Jordan–Chevalley statement
- **Category:** Supplement/remark error
- **Location:** hypcheck (完全体)
- **Detail:** The hypcheck states that over a perfect field the Jordan–Chevalley decomposition holds 'with S diagonalizable over the algebraic closure' even when the characteristic polynomial does not split. This is essentially correct (additive Jordan–Chevalley decomposition over perfect fields), but the phrasing 'S は代数閉包上で対角化可能' combined with 'X = S + N with SN = NS' needs the semisimple part to be defined via the separable/additive decomposition; as stated it is acceptable. However the accompanying claim '完全でない体では成り立たない例がある' is correct. No change strictly required, but the statement should specify that S is semisimple (diagonalizable over the algebraic closure) and N nilpotent with SN=NS, which is the standard additive Jordan–Chevalley decomposition. Since the current wording already conveys this, this is borderline; flagging only the imprecision that 'S は代数閉包上で対角化可能' alone does not pin down S uniquely without the separability condition.
- **Proposed fix:** Clarify: 'over a perfect field $k$, every $X$ admits a unique decomposition $X=S+N$ with $S$ semisimple (diagonalizable over $\bar{k}$), $N$ nilpotent, $SN=NS$, and $S,N$ polynomials in $X$; over imperfect fields such a decomposition can fail.'
- **Reported:** 2026-10-28 (8ccef3d)
