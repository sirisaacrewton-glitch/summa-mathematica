# Verification tracker: `01-foundations/01-general-logic/04-modal-logic-cs/02-geach-logics.html`

<!-- source: 01-foundations/01-general-logic/04-modal-logic-cs/02-geach-logics.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The frame-correspondence theorem, the examples, the compactness argument for converse well-foundedness, and the filtration decidability proof are sound. The main genuine problem is in the decidability remark: it asserts that decidability of finitely axiomatized Geach logics is 'unknown/unconfirmed', which is false — such logics are decidable via the finite model property (Sahlqvist). This should be corrected. Other side remarks (seriality/reflexivity preservation, partial functionality failing under filtration) are accurate.

## Issues

### ISSUE-0001 [Open] Density is not preserved by filtration, but the remark's reason is imprecise; more importantly the claim about 'arrows existing' conditions
- **Category:** Supplement/remark error
- **Location:** logic:sec-geach-decidability / remark
- **Detail:** The remark states that conditions requiring 'an arrow exists' (seriality, reflexivity) are preserved by any filtration because filtration condition 2 ('no arrows deleted') holds. This is correct for seriality and reflexivity. However the remark also says density 'requires an intermediate point' and so 'the same argument cannot be used as is' — that is fine. The genuinely problematic sentence is the final one: 'For whether Kα by finitely many Geach axioms is always decidable, the site could not confirm reliable literature (unknown).' This is a false claim of ignorance: it is a well-known theorem (via Sahlqvist/finite model property or via the fact that finitely axiomatized Geach logics have the finite model property) that every logic Kα with α finite is decidable. Stating it as 'unknown' is an overstated/imprecise claim in a remark.
- **Proposed fix:** Replace the final sentence with: 'Actually, every Kα with α finite is decidable: each Geach axiom is a Sahlqvist formula, and finitely many Sahlqvist axioms yield a logic with the finite model property (hence decidability). The filtration argument above is only one route; for conditions not preserved by the standard filtrations one uses a filtration tailored to the condition, or the Sahlqvist finite-model-property theorem.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] McKinsey axiom attribution and 'not first-order definable'
- **Category:** Unsupported fact
- **Location:** logic:mckinsey-fact
- **Detail:** The fact states the McKinsey axiom's frame class is not first-order definable, attributed to Goldblatt and van Benthem around 1975. The non-first-order-definability of the McKinsey axiom is standard (van Benthem; also Goldblatt), so the mathematical content is fine. The attribution 'around 1975 independently' is somewhat loose but defensible. However the further claim 'therefore ◇□p→□◇p cannot be expressed by a set of Geach axioms' does not follow merely from non-first-order-definability: Geach axioms correspond to first-order conditions, so a Geach axiomatization would give a first-order definition — this inference is valid. So the only issue is the slightly overstated attribution; this is borderline. I will not report it as it is essentially correct.
- **Proposed fix:** No change needed; optionally soften to 'shown by van Benthem and Goldblatt in the 1970s'.
- **Reported:** 2026-10-28 (10fede1)
