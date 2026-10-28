# Verification tracker: `01-foundations/01-general-logic/02-first-order-logic/05-soundness.html`

<!-- source: 01-foundations/01-general-logic/02-first-order-logic/05-soundness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Intuitionistic system without RAA is not sound for classical semantics
- **Category:** Supplement/remark error
- **Location:** supplement / 直観主義論理
- **Detail:** The supplement claims that the system obtained by removing RAA (and adding explosion as a separate rule) is intuitionistic natural deduction, and that the proof with the RAA case removed shows this system is sound with respect to the classical (Tarskian) semantics. This is false: intuitionistic logic is not sound for classical semantics. For example $\vdash\neg\neg\varphi\to\varphi$ holds classically but is not intuitionistically derivable, and indeed the classical semantics validates classical tautologies not provable intuitionistically. Removing the RAA case from the soundness proof only shows soundness of the *classical* system restricted to derivations not using RAA; it does not establish that the intuitionistic system is sound for classical semantics (which would require classical semantics to validate every intuitionistic theorem, which is false).
- **Proposed fix:** The system obtained by removing RAA (with explosion added as a separate rule) is intuitionistic natural deduction. The proof above, with the RAA case omitted, shows that this system is sound for the classical (Tarskian) semantics only in the weak sense that every derivation not using RAA is classically valid; it does NOT show that the intuitionistic system is sound for classical semantics, since classical semantics validates formulas (e.g. $\neg\neg\varphi\to\varphi$) that are not intuitionistically derivable. For intuitionistic logic one uses Kripke (or Beth) semantics, for which soundness and completeness are known (not treated in this series).
- **Reported:** 2026-10-28 (8ccef3d)
