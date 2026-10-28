# Verification tracker: `01-foundations/04-set-theory/08-iterated-forcing/07-countable-iterations.html`

<!-- source: 01-foundations/04-set-theory/08-iterated-forcing/07-countable-iterations.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the main lemmas (countable-support closure, ω₂-c.c. preservation for standard names, and the P₁ application) are sound, and the previously reported issues list is empty. The genuine problems found are confined to side remarks/justifications: (1) the ω₁-closure proof of ℚ_𝒜 justifies countability of ⋃_{ξ<γ}s_ξ by 'countable union of countable sets' although the union is over γ<ω₁ (conclusion still true, justification wrong); (2) the hypcheck's claim that finite-support infinite iterations with nontrivial components are 'usually' not ω₁-closed is overstated; (3) the SL₀-under-MA remark cites set:ma-ad, which is about almost disjoint families on ω, not the Solomon/splitting lemma. No logical gaps, missing hypotheses, or circularity were found in the proofs.

## Issues

### ISSUE-0001 [Open] ω₁-closure of Q_A proof uses 'countable union of countable sets' but the union is over γ<ω₁
- **Category:** Supplement/remark error
- **Location:** set:ad-omega-one-closed-cc / proof, ω₁-閉 part
- **Detail:** The proof writes: 's≔⋃_{ξ}s_{ξ}, F≔⋃_{ξ}F_{ξ} とおく（可算個の可算集合の和なので可算）'. But the index set is γ<ω₁, i.e. an uncountable (ω₁-sized) union of countable sets. The conclusion |s|,|F|≤ω₁ is still correct (each s_ξ is countable, so the union has size ≤ω₁·ω=ω₁), but the justification 'countable union of countable sets' is wrong as stated. This is a side comment/justification error inside a proof, but it is a genuine false justification.
- **Proposed fix:** Replace with: 's≔⋃_{ξ<γ}s_{ξ}, F≔⋃_{ξ<γ}F_{ξ}; since γ<ω₁ and each s_{ξ}, F_{ξ} is countable, |s|,|F|≤ω₁·ω=ω₁, so ⟨s,F⟩∈ℚ_{𝒜}.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that finite-support infinite iteration is 'usually' not ω₁-closed is imprecise
- **Category:** Supplement/remark error
- **Location:** set:cs-iteration-closed / hypcheck, first bullet
- **Detail:** The hypcheck says: '有限台の無限反復は、非自明な成分をもつなら ω₁-閉にならないのが普通である'. This is stated as a general tendency but is not accurate as a mathematical claim: a finite-support iteration of ω₁-closed posets with nontrivial components can still be ω₁-closed in many cases (e.g. finite-support iteration of σ-closed posets is σ-closed; the failure of ω₁-closure for finite supports is not automatic merely from having nontrivial components). The parenthetical is hedged ('本サイトでは一般には確かめていない') but the substantive claim '非自明な成分をもつなら...ならない' is overstated.
- **Proposed fix:** Replace with: 'With finite supports the union ⋃_{n}supt(p^{n}) need not be finite, so this argument does not apply; whether ω₁-closure is preserved depends on the specific posets (it can fail, but is not automatic merely from having nontrivial components).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] SL₀/MA remark and P₁↔SL₁ attribution need checking
- **Category:** Supplement/remark error
- **Location:** set:sec-cs-application, paragraph after set:cs-p1-theorem (SL₁ discussion)
- **Detail:** The text states 'ω 上の類似 SL₀ は MA のもとで成り立つ（第 II 章。set:ma-ad を参照）' and 'van Douwen の結果により CH のもとで P₁↔SL₁'. The citation set:ma-ad is 'MA の帰結（概素集合について）' which concerns almost disjoint families on ω, not the Solomon/SL₀ lemma about splitting families; using it as the reference for 'SL₀ holds under MA' is a misdirected pointer. The van Douwen attribution is plausible but the SL₀ reference is wrong.
- **Proposed fix:** Either cite the correct result for SL₀ under MA (Solomon's lemma / splitting families), or remove the parenthetical citation to set:ma-ad and state 'SL₀ (the ω-analogue) follows from MA' without pointing to the almost-disjoint MA consequence.
- **Reported:** 2026-10-28 (10fede1)
