# Verification tracker: `02-algebra/02-group-theory/01-groups/04-normal-quotient.html`

<!-- source: 02-algebra/02-group-theory/01-groups/04-normal-quotient.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the proofs of normality equivalences, the generator test, the quotient group construction, the center and commutator results are sound, and the counterexamples (the affine group of Q showing the inverse-conjugation hypothesis cannot be dropped, the D_3 non-normal subgroup, the D_3 quotient showing the center hypothesis) are genuine. Two issues were found, both in supplements: a corrupted/broken reference `\nef{grp:abelianization-universal}` and an imprecise justification of solvability of D_n that omits the termination of the derived series.

## Issues

### ISSUE-0001 [Open] Broken reference in abelianization supplement
- **Category:** Supplement/remark error
- **Location:** supplement (可換化) after grp:dihedral-commutator
- **Detail:** The supplement contains `(
  ef{grp:abelianization-universal})`, which is a corrupted `\ref` (the backslash and `r` are lost). The label `grp:abelianization-universal` is not in the cited-label table, so the reference is broken and points to a nonexistent result. This is a mechanical/link error in a side comment.
- **Proposed fix:** Replace `(
  ef{grp:abelianization-universal})` with a correct reference, e.g. `(\ref{grp:page-homomorphism-theorems})`, or state the universality without a broken link.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Solvability of D_n claimed from abelian subgroup is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (可解群へ) after grp:dihedral-commutator
- **Detail:** The supplement says '上の例から $D_{n}$ は可解である（$\ang{r^{2}}$ は可換）'. The commutator subgroup is $\ang{r^{2}}$, which is abelian, but solvability requires the derived series to terminate: one needs that $[\ang{r^{2}},\ang{r^{2}}]=\{e\}$ (true since $\ang{r^{2}}$ is cyclic) and that $D_{n}/\ang{r^{2}}$ is abelian (shown in the example). The parenthetical '($\ang{r^{2}}$ は可換)' alone does not establish solvability; the argument should note that $[G,G]=\ang{r^{2}}$ is abelian, so $[[G,G],[G,G]]=\{e\}$, hence the derived series reaches $\{e\}$ in two steps.
- **Proposed fix:** State: '$[D_{n},D_{n}]=\ang{r^{2}}$ is cyclic, hence abelian, so $[[D_{n},D_{n}],[D_{n},D_{n}]]=\{e\}$; the derived series reaches $\{e\}$ in two steps and $D_{n}$ is solvable.'
- **Reported:** 2026-10-28 (8ccef3d)
