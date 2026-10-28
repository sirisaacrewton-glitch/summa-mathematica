# Verification tracker: `01-foundations/04-set-theory/01-basics/01-axioms-overview.html`

<!-- source: 01-foundations/04-set-theory/01-basics/01-axioms-overview.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problems are in the supplements and stated-only facts: the Berry paradox example has a wrong word count (the defining phrase is longer than 40 words, so the paradox as stated fails), the NF consistency remark is outdated/imprecise (Jensen 1969), the MK fact should make the consistency hypothesis explicit, and the claim that Foundation is never used for ordinals/cardinals is overstated. No logical gaps or improper links were found in the proofs.

## Issues

### ISSUE-0001 [Open] Berry's paradox example miscounts words
- **Category:** Supplement/remark error
- **Location:** supplement in set:sec-why-axioms
- **Detail:** The supplement says 「40 語以下の日本語で定義できない最小の正の整数」 is defined 「いまちょうど 40 語以下で定義してしまった」. But the phrase itself contains more than 40 words (counting 語 as words: 「40」「語」「以下」「の」「日本語」「で」「定義」「できない」「最小」「の」「正」「の」「整数」 is already 13, and the full sentence with 「…で定義できない最小の正の整数」 is well over 40). The Berry paradox requires the defining phrase to be strictly shorter than the bound; as stated the count is wrong, so the paradox does not actually arise. The standard fix is to use a bound larger than the length of the phrase (e.g. 100 語) or to say 「この文は 40 語以下である」 with a correct count.
- **Proposed fix:** Replace with: 「100 語以下の日本語で定義できない最小の正の整数」は、いま 100 語以下（実際にはもっと少ない語数）で定義してしまった（ベリーのパラドックス）。— i.e. choose a bound strictly larger than the number of words in the defining phrase.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] NF consistency status stated as long-open
- **Category:** Supplement/remark error
- **Location:** supplement in set:sec-other-set-theories
- **Detail:** The supplement says 「NF の無矛盾性は長く未解決の問題であった」. This is imprecise/outdated: NF's consistency relative to ZF (more precisely, to ZF plus suitable large-cardinal/stratified assumptions) was established by Jensen (1969) via NFU and by showing Con(ZF) implies Con(NF) under additional hypotheses; the relative consistency of NF to ZF was proved by Jensen (1969) (NF is consistent if ZF plus an inaccessible-like assumption is). The claim that it 「長く未解決」 is at best misleading and, as a bare statement, overstated. Also the sentence 「普遍集合が存在し」 is correct for NF, but the surrounding claim about consistency should be corrected.
- **Proposed fix:** Replace with: 「NF の無矛盾性は Jensen (1969) により ZF に（ある種の強仮定を加えた体系に）相対的に証明された」 (NF is equiconsistent with ZF plus suitable assumptions; NFU is equiconsistent with ZF, Jensen 1969).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] MK proves Con(ZF) and is not finitely axiomatizable
- **Category:** Unsupported fact
- **Location:** fact set:nbg-mk, item 2
- **Detail:** Item 2 states MK proves Con(ZF) and cannot be finitely axiomatized. The finite non-axiomatizability of MK is correct (MK is not finitely axiomatizable, since it proves Con(ZF) and by Gödel's second incompleteness a finitely axiomatizable consistent extension of ZF cannot prove Con(ZF)). However, the claim that MK proves Con(ZF) needs the hypothesis that ZF is consistent / that MK is consistent; as stated unconditionally it is slightly too strong. More importantly, the fact asserts 「MK は Con(ZF) を証明する」 without noting the metatheoretic caveat, and the finite-axiomatizability claim relies on this. This is a minor overstatement but worth flagging.
- **Proposed fix:** State: 「MK は ZF の無矛盾性（Con(ZF)）を証明する（したがって Gödel の第二不完全性定理により、ZF が無矛盾なら MK は有限公理化できない）」, making the consistency hypothesis explicit.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Foundation not needed for ordinary mathematics — overstated
- **Category:** Supplement/remark error
- **Location:** intuition set:ax-foundation
- **Detail:** The intuition says 「通常の数学の展開（順序数・基数・実数の構成など）には基礎の公理はまったく使われない」. This is an overstatement: the construction of ordinals and the cumulative hierarchy, and the identification of ordinals as transitive sets well-ordered by ∈, typically uses Foundation (or at least the von Neumann ordinal definition relies on it to exclude non-well-founded sets). While much of ordinary mathematics can be done in ZF minus Foundation, saying it is 「まったく使われない」 for 順序数・基数 is imprecise.
- **Proposed fix:** Soften to: 「通常の数学の展開の多くは基礎の公理なしでも行えるが、順序数や累積階層の標準的な扱いでは基礎の公理が用いられることが多い」.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Compactness equivalence claim in supplement
- **Category:** Supplement/remark error
- **Location:** supplement after set:deduction-finite
- **Detail:** The supplement says 「証明を意味論的に定義する流儀ではこの命題は深い定理（コンパクト性定理）になる」. This is essentially correct (the finitary compactness of semantic consequence is the compactness theorem), but the phrasing 「この命題」 refers to the syntactic finiteness proposition; the semantic analogue is indeed compactness. This is acceptable and not an error. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
