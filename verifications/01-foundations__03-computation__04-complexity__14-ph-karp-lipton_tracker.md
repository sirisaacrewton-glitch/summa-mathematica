# Verification tracker: `01-foundations/03-computation/04-complexity/14-ph-karp-lipton.html`

<!-- source: 01-foundations/03-computation/04-complexity/14-ph-karp-lipton.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems (quantifier characterization, oracle characterization, Karp–Lipton) and their proofs are logically sound, and the problem solutions are correct. The genuine problems are confined to the supplement: the PSPACE/EXP-in-P/poly collapse statements are stated too strongly (they should be equalities with Σ₂^P ∩ Π₂^P, not Σ₂^P alone), and the 'improvement to ZPP^NP' is imprecisely phrased as a collapse to a smaller class rather than the equality Σ₂^P = ZPP^NP.

## Issues

### ISSUE-0001 [Open] PSPACE/EXP in P/poly collapse claims are misstated
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement claims that if PSPACE ⊆ P/poly then PSPACE = Σ₂^P, and if EXP ⊆ P/poly then EXP = Σ₂^P (attributed to Meyer). These are not correct as stated. The standard results are: if PSPACE ⊆ P/poly then PSPACE = Σ₂^P ∩ Π₂^P (equivalently PH = PSPACE, i.e. the hierarchy collapses to PSPACE), and if EXP ⊆ P/poly then EXP = Σ₂^P ∩ Π₂^P (PH collapses to EXP). The equality with Σ₂^P alone is not what the literature supports; the collapse is to the second level of PH, i.e. Σ₂^P = Π₂^P, and PSPACE/EXP equal that class, not Σ₂^P alone. Stating 'PSPACE = Σ₂^P' is stronger than justified.
- **Proposed fix:** If $\mathrm{PSPACE}\subseteq\mathrm{P}/\mathrm{poly}$ then $\mathrm{PSPACE}=\Sigma_{2}^{\mathrm{P}}\cap\Pi_{2}^{\mathrm{P}}$ (so $\mathrm{PH}=\mathrm{PSPACE}$); if $\mathrm{EXP}\subseteq\mathrm{P}/\mathrm{poly}$ then $\mathrm{EXP}=\Sigma_{2}^{\mathrm{P}}\cap\Pi_{2}^{\mathrm{P}}$ (so $\mathrm{PH}=\mathrm{EXP}$).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Karp–Lipton improvement to ZPP^NP is misattributed/misstated
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement says the conclusion of Karp–Lipton can be improved to a collapse to a class smaller than Σ₂^P, e.g. PH = ZPP^NP. The known improvement (Karp–Lipton / Cai) is that NP ⊆ P/poly implies PH = Σ₂^P = ZPP^NP (i.e. Σ₂^P = ZPP^NP), not that PH collapses to ZPP^NP as a class strictly smaller than Σ₂^P in general. The phrasing 'smaller class than Σ₂^P' is imprecise: the correct statement is Σ₂^P = ZPP^NP (equivalently PH = ZPP^NP), which is an equality, not a collapse to a strictly smaller class.
- **Proposed fix:** The conclusion can be sharpened to $\Sigma_{2}^{\mathrm{P}}=\mathrm{ZPP}^{\mathrm{NP}}$ (hence $\mathrm{PH}=\mathrm{ZPP}^{\mathrm{NP}}$) when $\mathrm{NP}\subseteq\mathrm{P}/\mathrm{poly}$.
- **Reported:** 2026-10-28 (8ccef3d)
