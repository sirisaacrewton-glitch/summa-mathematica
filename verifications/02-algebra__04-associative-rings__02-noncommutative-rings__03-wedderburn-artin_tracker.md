# Verification tracker: `02-algebra/04-associative-rings/02-noncommutative-rings/03-wedderburn-artin.html`

<!-- source: 02-algebra/04-associative-rings/02-noncommutative-rings/03-wedderburn-artin.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine issue is an improper/undefined citation in Step 6(b) of the Wedderburn–Artin proof: \ref{mod:simple-characterization} should be \ref{mod:simple-characterization.1}, since only the latter label exists in the table. The supplement's Morita-equivalence sentence is imprecise (it should say left modules and identify the equivalence Mod(M_n(D)) ≃ Mod(D)); the Maschke application is correct. Proofs otherwise check out: the finite-sum argument, the endomorphism-ring computation, the uniqueness via multiplicity, and the corollaries are all sound.

## Issues

### ISSUE-0001 [Open] Reference to mod:simple-characterization (label not in table; should be .1)
- **Category:** Improper link
- **Location:** mod:wedderburn-artin / Step 6(b)
- **Detail:** Step 6(b) cites \ref{mod:simple-characterization} to conclude that a simple R-module S is isomorphic to R/L. The label table only contains mod:simple-characterization.1 (proposition 2.2, 単純加群の特徴付け). The bare label is not among the cited labels, so the citation is mechanically wrong/undefined; the intended target is item 1 of proposition 2.2.
- **Proposed fix:** Replace \ref{mod:simple-characterization} with \ref{mod:simple-characterization.1}.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Morita equivalence direction stated incorrectly
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** The supplement says 'M_{n}(D) と D の加群の圏は同値' (the module category of M_{n}(D) is equivalent to that of D). This is wrong: the category of left M_{n}(D)-modules is equivalent to the category of left D-modules (via V ↦ D^{n}⊗_D V, i.e. the simple module D^{n} corresponds to D), but the correct statement is that M_{n}(D) is Morita equivalent to D, i.e. Mod-M_{n}(D) ≃ Mod-D. As written ('M_{n}(D) と D の加群の圏'), it is ambiguous but the natural reading—comparing the module categories of the rings M_{n}(D) and D—is actually correct only if one means the rings are Morita equivalent. However the phrase 'D の加群の圏' with D a division ring: left modules over D are just vector spaces, and left modules over M_{n}(D) are equivalent to them, so the claim is correct. The imprecision is that it should specify left modules and that the equivalence is between Mod(M_{n}(D)) and Mod(D), not between 'M_{n}(D)' and 'D' as objects. This is a minor imprecision rather than a falsehood; still, the statement 'M_{n}(D) と D の加群の圏は同値' should be made precise.
- **Proposed fix:** Replace with: '森田同値：左 M_{n}(D) 加群の圏と左 D 加群の圏は同値である（単純加群 D^{n} が D に対応する）。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Maschke application: |G| = sum n_i^2 needs irreducibles over C and is fine, but the claim about k[G] semisimple requires char k ∤ |G|
- **Category:** Supplement/remark error
- **Location:** supplement / 群環への応用
- **Detail:** The supplement states: if |G| is not divisible by char k then k[G] is semisimple (Maschke), and for k = C, |G| = Σ n_i^2 where n_i are the dimensions of irreducible representations. This is correct. However, the citation \ref{mod:page-maschke} is a page pointer, and the statement '|G| = Σ n_i^2' relies on the fact that over C the division rings appearing are C (algebraically closed), which is justified by mod:semisimple-algebra-closed. The claim is correct as stated. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
