# Verification tracker: `01-foundations/04-set-theory/01-basics/06-classes-recursion.html`

<!-- source: 01-foundations/04-set-theory/01-basics/06-classes-recursion.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Kunen's convention for 0^λ at limit ordinals
- **Category:** Supplement/remark error
- **Location:** supplement (0 の極限冪についての約束)
- **Detail:** The supplement claims that Kunen defines the limit case of ordinal exponentiation by sup regardless of base, so that 0^ω = 1. This is false. In Kunen's *Set Theory* (Definition I.9.15 / the ordinal arithmetic section), ordinal exponentiation is defined with the special case 0^λ = 0 for limit λ (equivalently, 0^β = 0 for β > 0), matching the standard convention. The claim that Kunen's convention gives 0^ω = 1 misattributes a nonstandard convention to Kunen.
- **Proposed fix:** Replace with: "Kunen も本ページと同じく $\beta\ge1$ で $0^{\beta}=0$ となるよう極限の場合の $\alpha=0$ を別扱いにしている（$0^{\lambda}=0$）。$\alpha\ge1$ では $\sup$ による定義と一致する。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Cantor normal form requires ordinal division, not multiplication laws item 9
- **Category:** Supplement/remark error
- **Location:** supplement (カントールの標準形)
- **Detail:** The supplement says the Cantor normal form can be shown by repeatedly applying the exponentiation laws and "割り算（\ref{set:ordinal-multiplication-laws.9}）". The cited item is a property of ordinal multiplication (division-type decomposition), but the standard proof of Cantor normal form requires the division algorithm for ordinals (division with remainder: for α>0, β, there exist unique γ, ρ with β = α·γ + ρ, ρ < α), which is a separate result. Citing only a multiplication-law item as the tool is imprecise; moreover the claim that the exponentiation laws plus this item suffice is not justified. This is a side-comment imprecision.
- **Proposed fix:** State: "本ページの冪の法則と、順序数の割り算（除法の原理：$\alpha>0$ に対し任意の $\beta$ は $\beta=\alpha\cdot\gamma+\rho$, $\rho<\alpha$ と一意に表せる）を $\omega^{\beta}$ で繰り返し使って示せる。"
- **Reported:** 2026-10-28 (10fede1)
