# Verification tracker: `02-algebra/02-group-theory/01-groups/05-homomorphism-theorems.html`

<!-- source: 02-algebra/02-group-theory/01-groups/05-homomorphism-theorems.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The only genuine error is in the category-theory supplement: it says abelianization is the left adjoint of the inclusion Ab→Grp, but abelianization is left adjoint to the inclusion, i.e. the inclusion is the right adjoint. The hypcheck counterexample in the correspondence theorem is actually valid (π(4Z)={0+2Z} and its preimage is 2Z≠4Z), so no issue there. All other statements, proofs, and citations appear consistent with the cited labels.

## Issues

### ISSUE-0001 [Open] Incorrect claim that the inclusion Ab→Grp has a left adjoint
- **Category:** Supplement/remark error
- **Location:** supplement (圏論の言葉で) after grp:abelianization-universal
- **Detail:** The supplement states that abelianization G↦G/[G,G] is the left adjoint of the inclusion functor Ab→Grp. This is wrong: the inclusion Ab→Grp has a RIGHT adjoint (the abelianization functor), i.e. abelianization is left adjoint to the inclusion, equivalently the inclusion is right adjoint to abelianization. The universal property (every homomorphism G→A with A abelian factors uniquely through G/[G,G]) is exactly the statement that abelianization is left adjoint to the inclusion functor Ab→Grp, so the inclusion is the right adjoint, not the left adjoint.
- **Proposed fix:** 可換化の普遍性は、可換化 $G\mapsto G/[G,G]$ が包含関手 $\Ab\to\Grp$ の**左随伴**であること（同値に、包含関手が可換化の右随伴であること）を意味する（\ref{cat:page-adjunctions}）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Wrong counterexample in hypcheck: π(4Z) is not {0+2Z}
- **Category:** Supplement/remark error
- **Location:** grp:correspondence / hypcheck
- **Detail:** The hypcheck illustrates the necessity of N⊆K with G=Z, N=2Z, K=4Z, claiming π(K)={0+2Z} and its inverse image is 2Z≠4Z. But π:Z→Z/2Z maps 4Z onto {0+2Z} only if 4Z⊆2Z, which holds, so π(4Z)={0+2Z} indeed; however the inverse image of {0+2Z} is 2Z, and 4Z⊊2Z, so the example does show π^{-1}(π(K))≠K. The issue is that the claim 'π(K)={0+2Z}' is correct but the example is fine as a counterexample to π^{-1}(π(K))=K. Actually the example is valid: π(4Z)={0+2Z} since 4Z⊆2Z, and π^{-1}({0+2Z})=2Z≠4Z. So the counterexample is correct. No error.
- **Proposed fix:** No change needed; the counterexample is valid.
- **Reported:** 2026-10-28 (10fede1)
