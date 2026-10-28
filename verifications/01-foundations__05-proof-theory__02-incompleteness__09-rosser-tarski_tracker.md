# Verification tracker: `01-foundations/05-proof-theory/02-incompleteness/09-rosser-tarski.html`

<!-- source: 01-foundations/05-proof-theory/02-incompleteness/09-rosser-tarski.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem and its proof (Rosser's theorem) are essentially correct, and the Tarski theorem proof is fine. The genuine problems concentrate in the remarks and the corollary: the remark on D3 wrongly states that the Rosser provability predicate fails D3 (it satisfies D1 and D3 but not D2), and its parenthetical justification for the failure of the second incompleteness theorem for Bew^R is false (PA does not prove ¬Bew^R(⊥)). The corollary on truth vs. provability overstates that 'neither Σ nor Π' is a special case of Tarski part 1, and the remark on Δ-representability misattributes the two-sided representation to Σ-completeness alone.

## Issues

### ISSUE-0001 [Open] Rosser provability predicate does satisfy D3 (and D2)
- **Category:** Supplement/remark error
- **Location:** remark ロッサー文と D3
- **Detail:** The remark claims that $\mathrm{Bew}^{R}$ satisfies D1 and the 'falsification property' but 'generally does not satisfy D2・D3'. This is wrong: the Rosser provability predicate satisfies D3, i.e. $\PA\vdash\mathrm{Bew}^{R}(\Godel{\sigma})\to\mathrm{Bew}^{R}(\Godel{\mathrm{Bew}^{R}(\Godel{\sigma})})$ (and also D2). Indeed $\mathrm{Bew}^{R}(x)$ is $\Sigma_{1}$, so by $\Sigma$-completeness $\PA\vdash\mathrm{Bew}^{R}(\Godel{\sigma})\to\mathrm{Bew}^{R}(\Godel{\mathrm{Bew}^{R}(\Godel{\sigma})})$ holds; the standard fact is that the Rosser predicate satisfies D1 and D3 but fails D2. The remark as written is a false claim about which derivability conditions hold.
- **Proposed fix:** Replace with: 'ロッサーの証明可能性述語 $\mathrm{Bew}^{R}$ は D1 と D3 を満たすが、D2（$\PA\vdash\mathrm{Bew}^{R}(\Godel{\sigma\to\tau})\to(\mathrm{Bew}^{R}(\Godel{\sigma})\to\mathrm{Bew}^{R}(\Godel{\tau}))$）は一般に満たさないことが知られている。' (i.e. it satisfies D1 and D3, but not D2 in general).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Second incompleteness for Bew^R: the parenthetical justification is wrong
- **Category:** Supplement/remark error
- **Location:** remark ロッサー文と D3
- **Detail:** The remark says that stating the second incompleteness theorem for $\mathrm{Bew}^{R}$ fails because '$\PA\vdash\neg\mathrm{Bew}^{R}(\Godel{\bot})$'. This is incorrect: since $\PA$ is consistent, $\PA\nvdash\neg\mathrm{Bew}^{R}(\Godel{\bot})$ (if it did, $\PA$ would prove its own consistency in the Rosser sense, contradicting the very failure being described). The correct reason the second incompleteness theorem fails for $\mathrm{Bew}^{R}$ is that $\mathrm{Bew}^{R}$ does not satisfy D2, so the Hilbert–Bernays–Löb derivability conditions break down; the formalized consistency statement $\neg\mathrm{Bew}^{R}(\Godel{\bot})$ is not provably equivalent to the usual one.
- **Proposed fix:** Replace the parenthetical with: '第二不完全性定理を $\mathrm{Bew}^{R}$ に対して素朴に述べると成り立たない。その理由は $\mathrm{Bew}^{R}$ が D2 を満たさないため、レーブの導出可能性条件が崩れることにある（$\PA\vdash\neg\mathrm{Bew}^{R}(\Godel{\bot})$ ではない）。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Truth set is neither Σ nor Π definable — needs the correct justification
- **Category:** Supplement/remark error
- **Location:** corollary 真理と証明可能性の分離 / proof
- **Detail:** The corollary states the set of codes of sentences true in $\mathcal{N}$ is definable by neither a $\Sigma$ nor a $\Pi$ formula, and the proof says 'this is a special case of Tarski's theorem 1'. Tarski's theorem 1 only gives non-definability by an arbitrary formula; the sharper 'neither Σ nor Π' claim requires an additional argument (if the truth set were $\Sigma$-definable then its complement would be $\Pi$-definable, and one uses closure/undefinability to derive a contradiction; more directly, a $\Sigma$ definition of truth would make the set of false sentences $\Pi$-definable, contradicting Tarski applied to the negation). As stated, 'special case of part 1' is not literally correct because part 1 rules out all formulas, not specifically Σ/Π, and the corollary's sharper claim is not a direct instantiation.
- **Proposed fix:** Change the proof of the first half to: 'If the truth set were $\Sigma$-definable by some $T(x)$, then its complement (the set of false sentences) would be $\Pi$-definable by $\neg T(x)$, hence definable; but by Tarski's theorem the truth set is not definable at all, and applying Tarski to $\neg T$ yields a contradiction. The same argument rules out $\Pi$-definability.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Claim that Bew satisfies D1 but not the second condition — imprecise
- **Category:** Supplement/remark error
- **Location:** remark after proposition 証明可能性は Δ で表現できない
- **Detail:** The remark says '$\mathrm{Bew}$ satisfies the first condition (D1) but not the second'. This is correct for the second condition ($\PA\nvdash\sigma\Rightarrow\PA\vdash\neg\mathrm{Bew}(\Godel{\sigma})$ fails by consistency), but the phrasing 'Δ 論理式で定義される集合は、Σ 完全性により両方の条件を満たす形で「表現」される' is misleading: Σ-completeness gives only the positive direction; the negative direction for Δ sets requires decidability of the defining relation, which holds for Δ formulas but is not a consequence of Σ-completeness alone. The justification attributes the two-sided representation to Σ-completeness, which only yields one side.
- **Proposed fix:** Replace with: 'Δ 論理式で定義される集合は、Σ 完全性（正の方向）と、Δ 論理式の否定も Σ であること（負の方向）により両方向で表現される。'
- **Reported:** 2026-10-28 (8ccef3d)
