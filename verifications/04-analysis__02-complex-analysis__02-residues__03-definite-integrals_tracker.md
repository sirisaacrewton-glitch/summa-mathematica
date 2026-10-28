# Verification tracker: `04-analysis/02-complex-analysis/02-residues/03-definite-integrals.html`

<!-- source: 04-analysis/02-complex-analysis/02-residues/03-definite-integrals.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect residue value cited for πcot(πz)/z² at 0
- **Category:** Supplement/remark error
- **Location:** cx:residue-series / example 1
- **Detail:** The example states that the residue of πcot(πz)/z² at 0 is -π²/3, citing cx:residue-computation example 3. But the Laurent expansion πcot(πz)/z² = 1/z³ - (π²/3)(1/z) - (π⁴/45)z - ... gives residue -π²/3 at 0. This is correct. However, the example then writes Σ_{n≠0} 1/n² + (-π²/3) = 0, i.e. 2Σ_{n≥1}1/n² = π²/3, which is consistent. So the value -π²/3 is actually correct. Let me recheck: πcot(πz) = 1/z - (π²/3)z - (π⁴/45)z³ - ..., so πcot(πz)/z² = 1/z³ - (π²/3)(1/z) - (π⁴/45)z - ..., residue at 0 is -π²/3. Correct. And example 2: πcot(πz)/z⁴ = 1/z⁵ - (π²/3)(1/z³) - (π⁴/45)(1/z) - ..., residue at 0 is -π⁴/45. Correct. So these are fine.
- **Proposed fix:** No change needed; the cited residues are correct.
- **Reported:** 2026-10-28 (10fede1)
