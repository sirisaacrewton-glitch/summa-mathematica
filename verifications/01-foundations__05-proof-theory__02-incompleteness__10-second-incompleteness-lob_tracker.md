# Verification tracker: `01-foundations/05-proof-theory/02-incompleteness/10-second-incompleteness-lob.html`

<!-- source: 01-foundations/05-proof-theory/02-incompleteness/10-second-incompleteness-lob.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the formalized first incompleteness lemma, the second incompleteness theorem, Löb's theorem and its formalization are proved with the stated D1–D3 and diagonalization, and the hypcheck is accurate. The main genuine problems are in the side remarks: the citation pt:godel-first.2 has no corresponding label (and part 2 needs the ω-consistency form), and the remark wrongly says Rosser's predicate fails D1–D3 as a whole when in fact only D3 fails. A minor gap appears in the solution of pt:prob-lob-converse where the use of modus ponens and tautology-provability should be made explicit.

## Issues

### ISSUE-0001 [Open] Reference to pt:godel-first.2 does not exist in the label table
- **Category:** Improper link
- **Location:** pt:godel-second / proof, Step 2
- **Detail:** The proof of part 2 cites \ref{pt:godel-first.2}, but the label table only lists pt:godel-first.1 (theorem 8.5, Gödel's first incompleteness theorem). There is no pt:godel-first.2 entry, so the citation target is not established. Moreover, part 2 requires the ω-consistency form of the first incompleteness theorem (that PA does not prove ¬G under ω-consistency), which is a distinct statement from the plain consistency form in pt:godel-first.1.
- **Proposed fix:** Cite the correct label for the ω-consistency half of Gödel's first incompleteness theorem (the statement that if PA is ω-consistent then PA \nvdash \neg G), or add that statement explicitly: "By the ω-consistency part of Gödel's first incompleteness theorem, PA is ω-consistent implies PA \nvdash \neg G."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Rosser's predicate claimed not to satisfy D1–D3
- **Category:** Supplement/remark error
- **Location:** pt:sec-second-incompleteness / remark, third bullet
- **Detail:** The remark says the Rosser provability predicate Bew^{R} (\ref{pt:rosser-sentence}) is an example of a predicate that does not satisfy D1–D3. This is false: the Rosser provability predicate satisfies D1 and D2 (and is Σ_{1}-complete), and it is precisely because it fails D3 that the second incompleteness theorem does not apply to it. Stating that it fails the conditions as a whole is misleading; the essential point is that D3 fails while D1, D2 hold.
- **Proposed fix:** Replace with: "The Rosser provability predicate \mathrm{Bew}^{R} (\ref{pt:rosser-sentence}) satisfies D1 and D2 but not D3; this is why the argument above does not yield the unprovability of the Rosser consistency statement."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Converse of Löb's theorem stated as 'trivial' without the D1 justification being the right one
- **Category:** Supplement/remark error
- **Location:** pt:prob-lob-converse / solution
- **Detail:** The solution says: if PA \vdash S then from the tautology S \to (\Box S \to S) we get PA \vdash \Box S \to S. But \Box S is an abbreviation for \mathrm{Bew}(\Godel{S}), and the tautology S \to (\Box S \to S) is a formula in the language; to conclude PA \vdash \Box S \to S one needs that PA proves the tautology and then uses modus ponens with PA \vdash S. This is correct, but the phrase 'from the tautology' skips the step that PA \vdash S is used. More importantly, the problem statement asks to verify 'PA \vdash S implies PA \vdash \Box S \to S' is trivial; the solution is acceptable but the reasoning should explicitly invoke that PA proves all tautologies and modus ponens. This is a minor gap, not a falsehood.
- **Proposed fix:** Add: "Since PA proves the tautology S \to (\Box S \to S) and PA \vdash S, modus ponens gives PA \vdash \Box S \to S."
- **Reported:** 2026-10-28 (8ccef3d)
