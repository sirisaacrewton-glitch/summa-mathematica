# Verification tracker: `02-algebra/02-group-theory/01-groups/04-normal-quotient.html`

<!-- source: 02-algebra/02-group-theory/01-groups/04-normal-quotient.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is logically sound: the proofs of normality equivalences, the generator test, normal closure, quotient group, product with normal subgroup, center, cyclic-quotient theorem, and commutator subgroup all check out, and the hypcheck counterexamples (the affine group on Q, D_3 with H={e,s}, D_3 with N=<r>) are correct. The only genuine problems are in the supplements: a broken/unknown reference (`\nef{grp:abelianization-universal}`) in the abelianization supplement, and an imprecise justification of solvability of D_n that omits the key step that the abelian factor has trivial commutator subgroup. No issues in the main theorems or examples were found.

## Issues

### ISSUE-0001 [Open] Broken reference in abelianization supplement
- **Category:** Supplement/remark error
- **Location:** supplement (可換化) after grp:dihedral-commutator
- **Detail:** The supplement contains the text `（
  ef{grp:abelianization-universal}）`. The backslash is missing (`ef` instead of `\ref`), so the reference is broken and will not render as a link. Moreover, the label `grp:abelianization-universal` does not appear in the cited-label table, so the target is unknown/unverifiable.
- **Proposed fix:** Replace `（
  ef{grp:abelianization-universal}）` with a correct reference to an existing result, e.g. `（\ref{grp:commutator-properties.2} より）`, or remove the reference if no such result exists on the site.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Solvability of D_n: derived series claim needs the abelian factor
- **Category:** Supplement/remark error
- **Location:** supplement (可解群へ) after grp:dihedral-commutator
- **Detail:** The supplement says '上の例から $D_{n}$ は可解である（$\ang{r^{2}}$ は可換）'. This is essentially correct but imprecise: solvability requires the derived series $D_{n}\supseteq[D_{n},D_{n}]=\ang{r^{2}}\supseteq[[D_{n},D_{n}],[D_{n},D_{n}]]\supseteq\cdots$ to reach $\{e\}$ in finitely many steps. Since $\ang{r^{2}}$ is abelian (cyclic), its commutator subgroup is trivial, so the series reaches $\{e\}$ after two steps. The parenthetical only notes commutativity of $\ang{r^{2}}$ without stating that this makes the next commutator subgroup trivial, which is the actual reason the series terminates.
- **Proposed fix:** 上の例から $D_{n}$ は可解である：$[D_{n},D_{n}]=\ang{r^{2}}$ は巡回群ゆえ可換で、$[[D_{n},D_{n}],[D_{n},D_{n}]]=\{e\}$。よって導来列は 2 回で $\{e\}$ に達する。
- **Reported:** 2026-10-28 (10fede1)
