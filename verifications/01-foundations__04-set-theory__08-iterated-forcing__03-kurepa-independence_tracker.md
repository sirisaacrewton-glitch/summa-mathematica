# Verification tracker: `01-foundations/04-set-theory/08-iterated-forcing/03-kurepa-independence.html`

<!-- source: 01-foundations/04-set-theory/08-iterated-forcing/03-kurepa-independence.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect claim about ω₂ tree property and weak compactness in L
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果
- **Detail:** The supplement states that 'ω₂ having the tree property is equiconsistent with ω₂ being weakly compact in L'. This is imprecise/false as stated. The correct classical result (Silver, Mitchell) is that the tree property at ω₂ is equiconsistent with the existence of a weakly compact cardinal, and that if ω₂ has the tree property then ω₂ is weakly compact in L (or more precisely, ω₂ is a weakly compact cardinal in L). The phrasing 'ω₂ が L で弱コンパクトであることと等無矛盾' conflates 'ω₂ is weakly compact in L' (a consequence) with an equiconsistency statement, and the vague hedge '一般にはこう言われている' signals uncertainty. The statement as written is not a correct equiconsistency claim.
- **Proposed fix:** Replace with: 'For example, the tree property at $\omega_{2}$ is equiconsistent with the existence of a weakly compact cardinal (Silver, Mitchell); moreover, if $\omega_{2}$ has the tree property then $\omega_{2}$ is weakly compact in $\mathbf{L}$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that ω₁-closed forcing adds no new branches to ω₁-trees of level size < 2^ω
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The supplement claims: 'if PP is ω₁-closed, then no new branches are added to ω₁-trees whose level size is less than 2^ω (same proof)'. The Silver lemma's proof uses countability of levels (|Lev_γ(T)| ≥ 2^ω contradicts countability). The generalization to levels of size < 2^ω is not justified by 'the same proof': the argument produces 2^ω distinct elements b_f at level γ, which contradicts |Lev_γ(T)| < 2^ω only if the b_f are genuinely distinct in M and the level has size < 2^ω. This does go through if levels have size < 2^ω, but the phrase 'same proof' is misleading because the proof as written relies on countability, and the correct threshold is < 2^ω, not countability. More importantly, the claim as stated is essentially correct but the parenthetical '同じ証明' is imprecise since the contradiction step must be rephrased. This is borderline; the substantive issue is that the stated threshold '< 2^ω' is correct but the proof does not literally carry over without modification.
- **Proposed fix:** State: 'if $\PP$ is $\omega_{1}$-closed, then no new branches are added to an $\omega_{1}$-tree all of whose levels have size $<2^{\omega}$; the proof is the same except that the final contradiction uses $|\operatorname{Lev}_{\gamma}(T)|\ge 2^{\omega}$ directly rather than countability.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that ¬KH implies ω₂ is inaccessible in L
- **Category:** Unsupported fact
- **Location:** page introduction (before 記法と定義の確認)
- **Detail:** The introduction asserts '¬KH は ω₂ が L で到達不能であることを導く（Kunen 第 VII 章の演習）' and concludes Con(ZFC+¬KH) ↔ Con(ZFC + ∃ strong inaccessible). The direction '¬KH implies ω₂ is inaccessible in L' is a known result but is stated without proof and attributed vaguely to 'Kunen Chapter VII exercise'. The equiconsistency Con(ZFC+¬KH) ↔ Con(ZFC+∃ inaccessible) is a genuine theorem (Silver), but the specific claim that ¬KH forces ω₂ to be inaccessible in L needs the correct hypothesis: it is ω₂ being a weakly compact (hence inaccessible) cardinal in L that follows, and this requires that ω₂ is not collapsed. As stated it is a strong claim presented as a parenthetical exercise reference without verification of the exact statement.
- **Proposed fix:** State precisely: 'If KH fails, then $\omega_{2}$ is a weakly compact (in particular inaccessible) cardinal in $\mathbf{L}$; hence $\mathrm{Con}(\ZFC+\lnot\mathrm{KH})$ implies $\mathrm{Con}(\ZFC+\exists\kappa\,(\kappa\text{ weakly compact}))$, and combined with \ref{set:not-kh-from-inaccessible} gives the equiconsistency with a strongly inaccessible cardinal.'
- **Reported:** 2026-10-28 (10fede1)
