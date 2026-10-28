# Verification tracker: `01-foundations/05-proof-theory/02-incompleteness/09-rosser-tarski.html`

<!-- source: 01-foundations/05-proof-theory/02-incompleteness/09-rosser-tarski.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Rosser provability predicate and D3 / second incompleteness
- **Category:** Supplement/remark error
- **Location:** remark ロッサー文と D3
- **Detail:** The remark claims that for the Rosser provability predicate $\mathrm{Bew}^{R}$, 'D2・D3 は一般に満たさないことが知られている' and that the second incompleteness theorem stated for $\mathrm{Bew}^{R}$ fails because $\PA\vdash\neg\mathrm{Bew}^{R}(\Godel{\bot})$. The claim $\PA\vdash\neg\mathrm{Bew}^{R}(\Godel{\bot})$ is correct (if $\PA$ is consistent, no proof of $\bot$ exists, so $\mathrm{Bew}^{R}(\Godel{\bot})$ is false and refutable). However, the blanket assertion that D3 'generally fails' is imprecise: the standard fact is that the Rosser predicate satisfies D1 and D2 but not D3 (the D3-like property fails), and the remark's phrasing 'D2・D3 は一般に満たさない' is both vague and partly wrong (D2 does hold for $\mathrm{Bew}^{R}$). Also the remark hedges with 'とされる（本サイトでは未確認）', which is an unsupported/overstated side comment.
- **Proposed fix:** Replace with: 'The Rosser provability predicate $\mathrm{Bew}^{R}$ satisfies D1 and D2, but the derivability condition D3 ($\PA\vdash\mathrm{Bew}^{R}(\Godel{\sigma})\to\mathrm{Bew}^{R}(\Godel{\mathrm{Bew}^{R}(\Godel{\sigma})})$) fails in general. Consequently the second incompleteness theorem, stated with $\mathrm{Bew}^{R}$ in place of $\mathrm{Bew}$, does not hold: since $\PA$ is consistent, $\PA\vdash\neg\mathrm{Bew}^{R}(\Godel{\bot})$, so $\mathrm{Bew}^{R}$ cannot express unprovability of $\bot$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Truth set is neither Σ nor Π definable — needs the set to be arithmetically definable
- **Category:** Supplement/remark error
- **Location:** corollary 真理と証明可能性の分離 / proof
- **Detail:** The corollary states that the set of codes of sentences true in $\mathcal{N}$ 'is definable neither by a Σ formula nor by a Π formula'. Tarski's theorem (part 1) only rules out definability by an arbitrary formula $T(x)$ of the language, hence in particular by Σ or Π formulas — this part is fine. But the proof says '前半はタルスキの定理の 1 の特別な場合である', which is correct only because Σ and Π formulas are formulas. The real issue is the second sentence: 'したがって両者は異なり、$\PA$ は健全なので…真だが証明できない文がある'. The conclusion that the true-sentence set differs from the provable-sentence set and that a true unprovable sentence exists is correct, but the argument as written conflates 'the true set is not Σ-definable' with 'it is not equal to the Σ-definable provable set' — this is valid since $\mathrm{Bew}$ is Σ and the true set is not Σ. This part is acceptable. No error here beyond wording; not reporting.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
