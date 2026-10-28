# Verification tracker: `01-foundations/01-general-logic/04-modal-logic-cs/14-hoare-arithmetic.html`

<!-- source: 01-foundations/01-general-logic/04-modal-logic-cs/14-hoare-arithmetic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the expressiveness proof (Steps 1–3 of logic:n-expressive) and the non-enumerability proof are sound, and the simulation lemma is fine. The main genuine problem is an improper citation in Step 2 of logic:hoare-n-not-re to a non-existent label comp:sigma1-recognizable.2; the Δ₁/decidability step needs a correct reference or an inline argument. Two remarks are slightly imprecise (the attribution of Th(N)'s non-r.e.-ness to 'the same argument as Step 2', and the phrasing of Remark 2), which are minor but worth correcting.

## Issues

### ISSUE-0001 [Open] Citation to non-existent label comp:sigma1-recognizable.2
- **Category:** Improper link
- **Location:** theorem logic:hoare-n-not-re, Step 2
- **Detail:** Step 2 cites \ref{comp:sigma1-recognizable.2}, but the label table only lists comp:sigma1-recognizable.1 (theorem 2.7, Kleene normal form / Σ₁ and recognizability). There is no item 2 of that result in the table, so the citation target does not exist / does not say what is used. The claim needed is "if K and its complement are both Σ₁ (r.e.), then K is decidable", which is the standard Post/Δ₁ argument, not a consequence of the Kleene normal form theorem as listed.
- **Proposed fix:** Replace the citation with a correct one, e.g. cite the result establishing that a set that is both r.e. and co-r.e. is decidable (Post's theorem / closure of Δ₁ under complement), or add the one-line argument: if K is enumerated by a computable procedure and its complement too, run both enumerations in parallel until one of them lists the given e; this decides K.
- **Reported:** 2026-10-28 (8ccef3d)
**Opus Rebuttal:** The cited item exists and says exactly what is used (the earlier label table listed only one item per result; this was a bug in the verifier, now fixed: the table quotes every cited item). comp:sigma1-recognizable.2 is: a relation is $\Delta_{1}$ iff it is decidable.

### ISSUE-0002 [Open] Remark 1: Th(N) not r.e. attributed to 'same argument as Step 2'
- **Category:** Supplement/remark error
- **Location:** remark, item 1
- **Detail:** Remark 1 says Th(N) is not recursively enumerable and that this follows "by the same argument as Step 2". Step 2's argument is specific to the set of valid Hoare triples (via the reduction from K and its complement). The non-r.e.-ness of Th(N) is a different fact (it follows from the undecidability of Th(N) plus the fact that Th(N) is complete, so if it were r.e. it would be decidable, contradicting e.g. Gödel). Saying "the same argument as Step 2" is imprecise: Step 2 uses both Σ₁ directions (K and complement), which is not literally the argument for Th(N).
- **Proposed fix:** Reword: "Th(N) is not recursively enumerable: if it were r.e., then since Th(N) is complete (for every sentence φ, exactly one of φ, ¬φ is in Th(N)), we could decide membership in Th(N) by enumerating it and its negation-closure in parallel, contradicting the undecidability of Th(N) (Gödel)."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Remark 2: restricting consequence rule to PA-provable implications
- **Category:** Supplement/remark error
- **Location:** remark, item 2
- **Detail:** Remark 2 claims that restricting the premise of the consequence rule to "PA ⊢ φ → φ'" yields a mechanically checkable system that is not complete for N. This is stated without qualification. The system so restricted is indeed mechanically checkable (PA-provability is r.e.), and by the theorem it cannot be complete for N — this part is fine. However, the remark as written is slightly overstated: it is not merely "not complete"; the correct statement is that no such r.e. system can be sound and complete for N (the theorem's second sentence). As a standalone remark it is acceptable but the phrasing "is not complete" understates that soundness+completeness is impossible, which is the actual content.
- **Proposed fix:** Reword: "Conversely, the system obtained by restricting the premise of the consequence rule to 'PA ⊢ φ → φ'' is mechanically checkable (PA-provability is r.e.), but by the theorem it cannot be both sound and complete for N."
- **Reported:** 2026-10-28 (8ccef3d)
