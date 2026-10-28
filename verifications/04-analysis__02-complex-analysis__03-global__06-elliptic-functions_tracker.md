# Verification tracker: `04-analysis/02-complex-analysis/03-global/06-elliptic-functions.html`

<!-- source: 04-analysis/02-complex-analysis/03-global/06-elliptic-functions.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Map to elliptic curve is not injective on (C/Λ)\{0} as stated
- **Category:** Supplement/remark error
- **Location:** supplement (楕円曲線との関係)
- **Detail:** The supplement says that z ↦ (℘(z), ℘'(z)) maps (C/Λ)\{0} onto E and that '℘ takes each value at the 2 points ±z and the sign of ℘' distinguishes them, so this map is bijective'. This is imprecise: ℘ is 2-to-1 only for generic values; at the branch values e_{1}, e_{2}, e_{3} (the half-periods) ℘ takes the value with multiplicity 2 at a single point, and ℘' vanishes there. So the map is injective on (C/Λ)\{0} (since ℘(z)=℘(w) implies w≡±z, and ℘'(z)=0 only at half-periods where z≡-z), but the justification 'each value at 2 points ±z' is false at the half-periods. Also the claim that the map is onto E is asserted without argument (it follows from the properness/compactness or from the fact that ℘ attains every value). The bijectivity statement itself is correct, but the stated reason is wrong.
- **Proposed fix:** Replace with: '℘(z)=℘(w) implies w≡±z (mod Λ), and ℘'(z)=0 only at the half-periods, where z≡-z; hence z↦(℘(z),℘'(z)) is injective on (C/Λ)\{0}. Since ℘ is a nonconstant elliptic function it attains every value (Liouville), so the image is all of E; sending 0 to the point at infinity gives a bijection C/Λ ≅ E.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Historical attribution of elliptic functions to Abel and Jacobi in the 1820s
- **Category:** Supplement/remark error
- **Location:** supplement (歴史)
- **Detail:** The supplement states that elliptic functions were introduced by Abel and Jacobi in the 1820s as inverse functions of the elliptic arc-length integral. This is essentially correct (Abel 1827–1828, Jacobi 1827, 'Fundamenta nova' 1829), but the specific integral displayed, ∫ dx/√((1-x²)(1-k²x²)), is the Legendre normal form; the inversion was carried out for this Legendre form, which is accurate. The attribution is broadly correct and not overstated. No error.
- **Proposed fix:** No change needed; the historical statement is accurate.
- **Reported:** 2026-10-28 (10fede1)
