# Verification tracker: `01-foundations/04-set-theory/01-basics/06-classes-recursion.html`

<!-- source: 01-foundations/04-set-theory/01-basics/06-classes-recursion.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Kunen's convention for 0^λ at limit ordinals
- **Category:** Supplement/remark error
- **Location:** supplement (0 の極限冪についての約束)
- **Detail:** The supplement claims that Kunen defines the limit case of ordinal exponentiation by sup regardless of base, so that 0^ω = 1. This is false. In Kunen's Set Theory (and in standard treatments), ordinal exponentiation is defined so that 0^λ = 0 for limit λ (equivalently 0^β = 0 for β > 0). The sup-based definition sup{0^n | n<ω} = sup{1,0} = 1 is not Kunen's convention. The attribution is wrong.
- **Proposed fix:** Remove the attribution to Kunen, or correct it: 'Some authors define the limit case by sup for all bases, which would give 0^ω = 1; this is not the convention used here (nor Kunen's).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Cantor normal form requires ordinal division, not multiplication laws item 9
- **Category:** Supplement/remark error
- **Location:** supplement (カントールの標準形)
- **Detail:** The supplement says the Cantor normal form can be shown using the exponentiation laws and 'division (\ref{set:ordinal-multiplication-laws.9})'. The cited item is a property of ordinal multiplication, not a division algorithm; the existence/uniqueness of the CNF requires the division algorithm for ordinals (division with remainder by ω^β), which is a separate result. Citing multiplication-laws.9 as 'division' is an improper/misleading reference for the argument.
- **Proposed fix:** Replace with a correct pointer: '...using the exponentiation laws together with the division algorithm for ordinals (division with remainder by ω^β), applied repeatedly.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] ε_0 as least fixed point of β↦ω^β
- **Category:** Supplement/remark error
- **Location:** supplement (不動点)
- **Detail:** The claim that the least fixed point of β↦ω^β is ε_0 = sup{ω, ω^ω, ω^{ω^ω}, ...} is correct, but the supplement states it as a bare assertion without proof and without a citation. Since it is a nontrivial fact (it requires showing the sup is a fixed point and is least), stating it without justification is an unsupported claim in a supplement.
- **Proposed fix:** Either add a one-line justification: 'The sequence α_0=ω, α_{n+1}=ω^{α_n} is increasing; its sup ε_0 satisfies ω^{ε_0}=sup_n ω^{α_n}=ε_0 by continuity, and any fixed point δ≥ω satisfies α_n≤δ for all n, hence ε_0≤δ.' or cite a result establishing it.
- **Reported:** 2026-10-28 (8ccef3d)
