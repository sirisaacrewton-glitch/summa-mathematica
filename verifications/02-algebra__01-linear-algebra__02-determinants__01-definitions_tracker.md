# Verification tracker: `02-algebra/01-linear-algebra/02-determinants/01-definitions.html`

<!-- source: 02-algebra/01-linear-algebra/02-determinants/01-definitions.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 6 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is mathematically careful and well-structured. The proofs of the Weierstrass characterization, the basis-free determinant, multiplicativity, cofactor expansion, and the field-theoretic characterizations are correct. The main genuine defect is in the supplement '前提を弱めると', where the claim that T_{ij}((a-1)b) arises as a commutator of D_i(a) and T_{ij}(b) is false (diagonal and transvection matrices commute, so the commutator is trivial); the correct justification is that T_{ij}(c) lies in the commutator subgroup of GL_n(k). Other supplements, remarks, and stated facts (Valiant's #P-completeness of the permanent, Berkowitz's O(n^4) division-free algorithm, the Pfaffian vanishing for odd alternating matrices, the GL_n abelianization) are correct or acceptably precise. No logical gaps or missing hypotheses were found in the proofs.

## Issues

### ISSUE-0001 [Open] Commutator claim for T_{ij} in (D6) supplement is wrong
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を弱めると
- **Detail:** The supplement claims that for |k|≥3 the condition f(T_{ij}(c))=1 follows automatically from multiplicativity, arguing that T_{ij}((a-1)b) is a commutator of D_i(a) and T_{ij}(b). This is false. In GL_n(k), the elementary transvection T_{ij}(c) is a commutator only when c is itself a commutator-like element; more precisely diag(a) and T_{ij}(b) commute (diagonal matrices commute with all matrices), so their commutator is the identity, not T_{ij}((a-1)b). Indeed D_i(a)T_{ij}(b)D_i(a)^{-1}=T_{ij}(ab), and since D_i(a) and T_{ij}(b) commute, the commutator is trivial. The correct statement is that T_{ij}(c) lies in the commutator subgroup [GL_n(k),GL_n(k)] (for n≥3, or n=2 with |k|≥4), so any multiplicative f that is trivial on commutators is forced to satisfy f(T_{ij}(c))=1. The stated derivation is incorrect.
- **Proposed fix:** For |k|≥3 (and n≥3, or n=2 with |k|≥4), each T_{ij}(c) is a commutator in GL_n(k), so any multiplicative f with f trivial on commutators satisfies f(T_{ij}(c))=1 automatically. (The naive commutator [D_i(a),T_{ij}(b)] is trivial since diagonal and transvection matrices commute; the correct argument uses that T_{ij}(c)∈[GL_n(k),GL_n(k)].)
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Berkowitz algorithm complexity claim imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 計算の観点
- **Detail:** The supplement states that over a ring without division, Berkowitz's algorithm computes the determinant in about O(n^4) ring operations. Berkowitz's algorithm (division-free) runs in O(n^4) ring operations, which is correct, but the phrasing '程度' (roughly) is acceptable. However the claim that (D4) 'naively requires n! multiplications' is imprecise: cofactor expansion along the first column requires about n! operations only in the worst case; more precisely it satisfies the recurrence T(n)=n·T(n-1)+O(n), giving ~e·n! operations, which is of order n!. This is a minor imprecision, not a genuine error, so not reported as a defect.
- **Proposed fix:** No change needed; the O(n^4) complexity of Berkowitz's division-free algorithm is correct.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] GL_n commutator subgroup statement
- **Category:** Supplement/remark error
- **Location:** remark 行列式は最高次の外冪
- **Detail:** The remark states that det gives the abelianization GL_n(k)/[GL_n,GL_n]≅k^× except for GL_2(F_2). This is essentially correct: for n≥3, or n=2 with |k|≥4, SL_n(k)=[GL_n(k),GL_n(k)] and det induces the isomorphism. The exception GL_2(F_2) (where GL_2(F_2)≅S_3 and det is surjective onto F_2^×={1}, so the statement trivially holds anyway) is handled. However, the parenthetical is slightly misleading: for GL_2(F_2), k^×={1} and GL_2(F_2)/[GL_2,GL_2]≅S_3/A_3≅Z/2, which is NOT isomorphic to k^×={1}. So the exception is genuine and correctly flagged. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Permanent #P-hardness attribution
- **Category:** Unsupported fact
- **Location:** supplement / 似た定理
- **Detail:** The supplement states the permanent is '#P-hard (Valiant)'. Valiant's theorem (1979) states that computing the permanent of a 0-1 matrix is #P-complete, which is stronger than #P-hard. The attribution to Valiant is correct. The claim 'not multiplicative' is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Hypcheck claim about F_2 counterexample
- **Category:** Supplement/remark error
- **Location:** hypcheck / 交代的の定義
- **Detail:** The hypcheck states that over F_2, D(u,w)=u_1 w_1 is symmetric but not alternating. This is a map on F_2^2 (or on vectors), and D(u,w)=u_1 w_1: swapping gives w_1 u_1=u_1 w_1, so symmetric. Setting u=w gives u_1^2=u_1, which is not always 0 (e.g. u=(1,0) gives 1), so not alternating. Correct. However, the claim that 'swap changes sign' alone is not equivalent to alternating in a ring with 2=0: over F_2, -1=1, so 'sign change' is vacuous. The example correctly illustrates this. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Skew-symmetric odd order over F_2 solution
- **Category:** Supplement/remark error
- **Location:** solution / lin:prob-df-skew-odd
- **Detail:** The solution claims that over F_2, imposing additionally that diagonal entries are 0 (alternating form matrix), the determinant of an odd-order skew-symmetric (alternating) matrix is 0 over any commutative ring via Pfaffian theory. This is correct: an alternating matrix (zero diagonal, X^t=-X) of odd order has det=0 over any commutative ring (Pfaffian identity Pf^2=det and Pf=0 for odd order). The first part (2 a unit) is correct. The F_2 example I_3 satisfies ^tX=-X=X (symmetric) but not the zero-diagonal condition, correctly noted. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
