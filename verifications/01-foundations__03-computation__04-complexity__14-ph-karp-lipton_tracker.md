# Verification tracker: `01-foundations/03-computation/04-complexity/14-ph-karp-lipton.html`

<!-- source: 01-foundations/03-computation/04-complexity/14-ph-karp-lipton.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems (quantifier characterization, oracle characterization, Karp–Lipton) and their proofs are essentially correct, and the hypcheck comments are accurate. The problems are confined to the supplement: the claim that Karp–Lipton can be improved to PH = ZPP^{NP} is false/overstated, and the PSPACE/EXP collapse statements and their attribution to Meyer are imprecise. No issues were found in the proofs or in the cited links.

## Issues

### ISSUE-0001 [Open] Karp–Lipton cannot be improved to PH = ZPP^{NP}
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that the conclusion of the Karp–Lipton theorem can be improved to a collapse to a class smaller than Σ_{2}^{P}, such as PH = ZPP^{NP}. This is false. The known strengthenings of Karp–Lipton (e.g. the Sengupta–Cai / Köbler–Watanabe results) give collapses such as PH = S_{2}^{P} (or ZPP^{NP} ⊆ ... under stronger hypotheses), but the standard statement NP ⊆ P/poly ⇒ PH = Σ_{2}^{P} is not known to be improvable to PH = ZPP^{NP}; indeed ZPP^{NP} ⊆ Σ_{2}^{P} ∩ Π_{2}^{P}, and a collapse to ZPP^{NP} would be a strictly stronger conclusion not established by the Karp–Lipton hypothesis. As stated (a definite claim that such an improvement 'is known'), this is an unsupported/overstated assertion.
- **Proposed fix:** Replace with: 'It is known that the conclusion can be strengthened to PH = S_{2}^{P} (and hence to PH = ZPP^{NP} under the additional hypothesis that NP ⊆ P/poly implies the relevant derandomization); the precise optimal collapse is not known. Here we only prove PH = Σ_{2}^{P}.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] PSPACE ⊆ P/poly and EXP ⊆ P/poly collapses attributed to Meyer are misstated
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement states 'PSPACE ⊆ P/poly ⇒ PSPACE = Σ_{2}^{P}' and 'EXP ⊆ P/poly ⇒ EXP = Σ_{2}^{P}' (attributed to Meyer). The correct classical results (Karp–Lipton / Meyer) are: PSPACE ⊆ P/poly ⇒ PSPACE = Σ_{2}^{P} ∩ Π_{2}^{P} (indeed PSPACE = Σ_{2}^{P}, since PSPACE is closed under complement and Σ_{2}^{P} ⊆ PSPACE, so this part is actually fine), but the EXP statement is wrong as written: the known result is EXP ⊆ P/poly ⇒ EXP = Σ_{2}^{P} is NOT the standard statement; the standard Meyer theorem is EXP ⊆ P/poly ⇒ EXP = Σ_{2}^{P} (this is in fact correct because EXP is closed under complement and Σ_{2}^{P} ⊆ EXP). However the PSPACE statement as literally written ('PSPACE = Σ_{2}^{P}') is correct only because PSPACE is complement-closed; the more precise standard statement is PSPACE = Σ_{2}^{P} = Π_{2}^{P}. The attribution and the exact equalities need to be stated precisely; as written the claim 'PSPACE = Σ_{2}^{P}' is acceptable but the pairing with EXP and the attribution to Meyer alone is imprecise (the PSPACE result is usually attributed to Karp–Lipton, the EXP result to Meyer).
- **Proposed fix:** Rewrite: 'Similarly, PSPACE ⊆ P/poly implies PSPACE = Σ_{2}^{P} = Π_{2}^{P} (Karp–Lipton), and EXP ⊆ P/poly implies EXP = Σ_{2}^{P} = Π_{2}^{P} (Meyer).'
- **Reported:** 2026-10-28 (10fede1)
