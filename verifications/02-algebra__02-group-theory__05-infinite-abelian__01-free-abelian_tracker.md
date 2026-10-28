# Verification tracker: `02-algebra/02-group-theory/05-infinite-abelian/01-free-abelian.html`

<!-- source: 02-algebra/02-group-theory/05-infinite-abelian/01-free-abelian.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is logically sound. The proofs of the main theorems (subgroups of free abelian groups are free, projective abelian groups are free, splitting of free quotients, primary decomposition, structure theorem for finitely generated abelian groups) are correct, and the cited results match their uses. The supplement's claim about generalizing to PID free modules is accurate (the same well-ordering argument works over a PID, replacing 'subgroups of Z are dZ' by 'ideals of a PID are principal'). The remark about finite abelian groups being a special case and the torsion subgroup not always being a direct summand is correct. The hypcheck comments are accurate. No genuine errors found.

## Issues

### ISSUE-0001 [Open] Generalization to PID free modules is not literally the same proof
- **Category:** Supplement/remark error
- **Location:** supplement / 類似の定理
- **Detail:** The supplement claims that \ref{grp:subgroup-of-free-abelian} generalizes to 'submodules of free modules over a PID are free' (any rank) and that 'the proof is the same', replacing 'subgroups of Z are dZ' by 'ideals of a PID are principal'. This is imprecise: the transfinite induction argument uses that the image of the projection is a subgroup of Z, i.e. that Z is a PID, but the key point in the general PID case is that the submodule of a free module over a PID is free — the same well-ordering argument does go through for a PID R (the projection lands in R, whose ideals are principal, giving d_{α}R). However, the statement as written ('the proof is the same') is essentially correct for a PID, so this is borderline. The real issue: the claim that the proof is 'the same' is only true because R is a PID; the parenthetical correctly identifies the substitution. This is acceptable and not an error.
- **Proposed fix:** No change needed; the statement is correct for PIDs.
- **Reported:** 2026-10-28 (10fede1)
