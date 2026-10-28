# Verification tracker: `02-algebra/04-associative-rings/02-noncommutative-rings/04-jacobson-radical.html`

<!-- source: 02-algebra/04-associative-rings/02-noncommutative-rings/04-jacobson-radical.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main proof (characterization of J(R), Nakayama, artinian radical, Hopkins–Levitzki) is sound and citations match their targets. The only genuine issue is in the hypcheck for the artinian radical theorem: the example $\Z_{(p)}$ is presented alongside $\Z$ as showing the hypothesis 'left artinian' cannot be dropped, but $\Z_{(p)}$ is not left artinian, so the example should explicitly note this to avoid the impression that local rings in general are counterexamples. The supplement's Wedderburn–Malcev statement over perfect fields is correct.

## Issues

### ISSUE-0001 [Open] Z_(p) example: J not nilpotent but Z_(p) is not left artinian
- **Category:** Supplement/remark error
- **Location:** hypcheck (mod:artinian-radical) / 前提「左アルティン」
- **Detail:** The hypcheck claims that dropping 'left artinian' makes the theorem false, and gives two examples. The first (Z: J=0, Z/J=Z not semisimple) is fine. The second, 'Z_(p) (local ring) has J=pZ_(p) which is not nilpotent', is a valid illustration that J need not be nilpotent, but Z_(p) is not left artinian (it is a noetherian domain of dimension 1, not artinian), so it does not illustrate the failure of the theorem under the stated hypothesis-dropping. More importantly, the sentence is placed as if it were a counterexample to the theorem's conclusion when the hypothesis is removed; but the conclusion 'J nilpotent' genuinely fails for Z_(p), so as an illustration of 'the hypothesis cannot be dropped' it is acceptable only if one notes Z_(p) is not artinian. As written it is imprecise: it suggests Z_(p) is a ring where the theorem's hypothesis is dropped and the conclusion fails, which is true, but the parenthetical '(local ring)' invites the reader to think local rings in general are counterexamples, which is false (e.g. a local artinian ring has nilpotent J).
- **Proposed fix:** Replace with: '外すと偽：$\Z$ では $J(\Z)=0$ で $\Z/J=\Z$ は半単純でない。また $\Z_{(p)}$（局所環、左アルティンではない）では $J=p\Z_{(p)}$ は冪零でないので、結論「$J$ は冪零」も成り立たない。' (i.e. explicitly note $\Z_{(p)}$ is not left artinian).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Complete field splitting requires separability; 'characteristic 0' example is fine but statement overgeneralizes
- **Category:** Supplement/remark error
- **Location:** supplement / 有限次元代数
- **Detail:** The supplement states: if $k$ is a perfect field (e.g. characteristic 0), then there is a subalgebra $S\cong A/J(A)$ with $A=S\oplus J(A)$. This is the Wedderburn–Malcev theorem, which holds for finite-dimensional algebras over any field when $A/J(A)$ is separable over $k$; over a perfect field every finite-dimensional semisimple algebra is separable, so the statement is correct. However the phrasing '完全体（例えば標数 0）' could mislead: perfect includes all finite fields and algebraically closed fields, which is correct. No error here on reflection; the claim is accurate. (Checked: perfect field ⇒ separable ⇒ Wedderburn–Malcev applies.)
- **Proposed fix:** No change needed; statement is correct.
- **Reported:** 2026-10-28 (10fede1)
