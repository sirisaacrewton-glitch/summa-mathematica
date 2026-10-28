# Verification tracker: `01-foundations/01-general-logic/03-modal-logic/03-kripke-semantics.html`

<!-- source: 01-foundations/01-general-logic/03-modal-logic/03-kripke-semantics.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect claim that converse well-foundedness is definable by modal formula plus transitivity
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から)
- **Detail:** The supplement says that converse well-foundedness is a property that 'cannot be written in first-order logic, and can be written only by combining a modal formula (Löb's axiom) with transitivity'. This is imprecise/overstated: the modal formula $\Box(\Box p\to p)\to\Box p$ corresponds exactly to 'transitive and converse well-founded' (frame-correspondence.5), so the modal formula alone (without separately conjoining transitivity) already characterizes the conjunction. The phrasing suggests transitivity must be added as an extra conjunct, which contradicts the cited theorem. Also the sentence 'converse well-foundedness alone cannot be written' is correct (cwf-not-modal), but the contrast drawn is misleading.
- **Proposed fix:** Replace with: 'Reflexivity and transitivity are first-order definable; converse well-foundedness alone is not first-order definable (\ref{logic:cwf-not-first-order}) and not modally definable (\ref{logic:cwf-not-modal}), but the conjunction "transitive and converse well-founded" is exactly characterized by the single modal formula $\Box(\Box p\to p)\to\Box p$ (\ref{logic:frame-correspondence.5}).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Guarded fragment comparison is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から)
- **Detail:** The claim that modal logic is 'close to the guarded fragment, a fragment of first-order logic using only bounded quantifiers' is loose. The standard correspondence is that the standard translation of modal logic lands in the guarded fragment (or the two-variable fragment), and the guarded fragment is characterized by guarded (not merely 'bounded') quantification. Calling it 'bounded quantifiers' is imprecise but the identification with the guarded fragment is essentially the accepted result; this is borderline. Given the instruction to prefer no report over speculative ones, this is flagged only as imprecision.
- **Proposed fix:** Replace 'bounded quantifiers' with 'guarded quantifiers', and state: 'the standard translation embeds modal logic into the guarded fragment (indeed the two-variable guarded fragment) of first-order logic.'
- **Reported:** 2026-10-28 (10fede1)
