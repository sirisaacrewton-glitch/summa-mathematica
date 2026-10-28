# Verification tracker: `01-foundations/04-set-theory/07-forcing/04-finite-partial-functions.html`

<!-- source: 01-foundations/04-set-theory/07-forcing/04-finite-partial-functions.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] König's lemma does not imply cf(κ)>ω from κ^ω=κ
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, third bullet
- **Detail:** The supplement claims that the hypothesis (κ^ω=κ)^M of set:continuum-kappa implies cf(κ)>ω by König's lemma. This is false: König's theorem gives κ^{cf κ}>κ, so if cf(κ)=ω then κ^ω>κ, but the converse implication is not what is stated. The correct statement is the contrapositive: if cf(κ)=ω then κ^ω>κ, so κ^ω=κ implies cf(κ)>ω. As written ("ケーニッヒの補題から cf(κ)>ω を含意する") the direction is reversed and the claim is false as a logical implication from the hypothesis alone without invoking the contrapositive of König.
- **Proposed fix:** Replace with: "\ref{set:continuum-kappa} の仮定 $(\kappa^{\omega}=\kappa)^{M}$ は、ケーニッヒの補題（\ref{set:konig-cofinality-power} の対偶：$\cf(\kappa)=\omega$ なら $\kappa^{\omega}>\kappa$）より $\cf(\kappa)>\omega$ を含意する。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] κ-c.c. preserves only regular cardinals ≥ κ, not all cardinals ≥ κ
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The supplement says a κ-c.c. p.o. (in M) preserves regular cardinals ≥ κ "by the same method". The approximation argument gives: if f: α→β is cofinal with α<β and β regular, then the range is covered by a union of <κ many sets each of size <κ, giving |S|<κ≤β, contradiction. This requires β to be regular (so that a subset of size <β is bounded) and β≥κ. The statement as written omits the regularity requirement on the preserved cardinal, which is essential; without it the claim (preserving all cardinals ≥κ) is false in general.
- **Proposed fix:** Replace with: "より一般に、$M$ の中で $\kappa$-c.c. な p.o. は $\kappa$ 以上の正則基数を保つことが同じ方法で示せる（Kunen 第 VII 章 §6 で扱われる）。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that cf(2^ω)>ω is 'best possible' is imprecise
- **Category:** Supplement/remark error
- **Location:** set:continuum-kappa, sentence after the proof
- **Detail:** The text states that by König's lemma cf(2^ω)>ω, so 'this is best possible: if cf(2^ω)=ω then (2^ω)^ω=2^ω, a contradiction'. The parenthetical argument is muddled: (2^ω)^ω=2^ω is actually a theorem of ZFC (for infinite 2^ω), not a contradiction; the contradiction comes from König's theorem κ^{cf κ}>κ applied to κ=2^ω, i.e. (2^ω)^ω>2^ω when cf(2^ω)=ω. As written the justification is incorrect.
- **Proposed fix:** Replace the parenthetical with: "（ケーニッヒの補題 \ref{set:konig-cofinality-power} を $\kappa=2^{\omega}$ に適用すると $(2^{\omega})^{\cf(2^{\omega})}>2^{\omega}$ であり、$\cf(2^{\omega})=\omega$ なら $(2^{\omega})^{\omega}=2^{\omega}$ となって矛盾するので $\cf(2^{\omega})>\omega$ である。よってこれは最善である。）"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Easton's theorem stated without the regularity restriction
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果
- **Detail:** The supplement says the values of 2^κ for regular cardinals can be assigned 'simultaneously (within the constraints of monotonicity and König's lemma) arbitrarily'. Easton's theorem applies only to regular cardinals κ and requires the assigned function to be monotone and to satisfy König's constraint κ<cf(F(κ)); the text does mention monotonicity and König but the phrase '正則基数の冪 2^κ の値を…任意に指定できる' is acceptable only for regular κ, which is stated. However the additional constraint that the assignment must be nondecreasing and satisfy cf(F(κ))>κ is only loosely gestured at; more importantly the claim that these are the only constraints is correct for regular cardinals but the sentence could be read as covering singular cardinals. Since the next sentence correctly restricts Silver to singular cardinals, this is borderline; the main genuine imprecision is that Easton requires F to be a function on regular cardinals with κ<cf(F(κ)), which the text summarizes as 'König's lemma constraint' — acceptable. No change strictly required.
- **Proposed fix:** Optionally clarify: "正則基数 $\kappa$ に対する $2^{\kappa}$ の値を、単調性とケーニッヒの制約 $\cf(2^{\kappa})>\kappa$ の範囲で同時に任意に指定できる（イーストンの定理）。"
- **Reported:** 2026-10-28 (10fede1)
