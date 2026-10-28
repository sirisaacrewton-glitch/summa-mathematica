# Verification tracker: `02-algebra/03-commutative-algebra/01-basics/06-ideal-arithmetic.html`

<!-- source: 02-algebra/03-commutative-algebra/01-basics/06-ideal-arithmetic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problem is in the remark '二つの分配法則は同値': the displayed derivation of D2 from D1 contains an invalid algebraic step (the third line does not follow from the second), even though the equivalence itself is true. All other supplements, remarks, examples and stated facts (radical/sum counterexample, colon counterexamples, extension/contraction counterexamples, the End(I) computations, the cusp example, the Z distributivity problem) check out correctly, including the hypotheses of the cited results.

## Issues

### ISSUE-0001 [Open] D1⇒D2 derivation uses D1 with wrong substitution
- **Category:** Supplement/remark error
- **Location:** remark 二つの分配法則は同値
- **Detail:** The displayed computation claims to derive D2 from D1 using only the lattice laws, but the second line applies D1 to $(I+J)\cap K$ (i.e. $X\cap(Y+Z)$ with $X=I+J$, $Y=I$, $Z=K$), which gives $(I+J)\cap K = (I+J)\cap I + (I+J)\cap K$... actually D1 gives $(I+J)\cap(I+K)=(I+J)\cap I+(I+J)\cap K$. The first line is fine. But the second line writes $(I+J)\cap K = K\cap I+K\cap J$, which is D1 applied to $K\cap(I+J)$ — that is legitimate. However the third line '$=(I+(I\cap K))+(J\cap K)$' is wrong: from line 2, $I+(K\cap I+K\cap J)$; using absorption $I+(I\cap K)=I$ gives $I+(K\cap J)$, not $(I+(I\cap K))+(J\cap K)$. The displayed equality chain is not a valid derivation as written; the intermediate step silently drops the $I\cap K$ term incorrectly. The overall claim (D1⇔D2 in a lattice) is true, but the given computation is not a correct proof.
- **Proposed fix:** Replace the computation with a correct one: assuming D1, $(I+J)\cap(I+K)=((I+J)\cap I)+((I+J)\cap K)=I+((I+J)\cap K)=I+(I\cap K)+(J\cap K)=I+(J\cap K)$, using D1 in the first and third equalities and absorption in the second and last. (Note $(I+J)\cap K=(I\cap K)+(J\cap K)$ by D1.)
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Prüfer domain characterization stated for integral domains without finiteness caveat
- **Category:** Supplement/remark error
- **Location:** supplement (分配的なのはどんな環か)
- **Detail:** The supplement states that for an integral domain, distributivity of the ideal lattice is equivalent to being a Prüfer domain, citing \ref{ring:prufer-distributive}. This is a standard theorem and is fine as stated, but the claim 'デデキント環・PID・付値環はその例' is correct. No error here; however the statement that '$k[x,y]$ is not Prüfer by the counterexample above' is correct. This item is actually fine — not reporting.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
