# Verification tracker: `01-foundations/05-proof-theory/02-incompleteness/07-formalized-sigma1-completeness.html`

<!-- source: 01-foundations/05-proof-theory/02-incompleteness/07-formalized-sigma1-completeness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Π 文の真理についての過度に強い主張
- **Category:** Supplement/remark error
- **Location:** supplement (pt:page-formalized-sigma-completeness)
- **Detail:** The supplement claims that the truth of a Π sentence "contains infinite information ('does not halt on every input')" and that "a proof cannot be assembled from a finite record." This is overstated: many true Π sentences (e.g. Con(PA), or ∀x (x+0=x)) are provable in PA, and their proofs are finite objects. The real point is only that there is no uniform mechanical procedure that, from the truth of an arbitrary true Π sentence, produces a PA-proof; it is not that Π truth is intrinsically unprovable or requires infinite information. As stated, the sentence is false.
- **Proposed fix:** Π 文の真理を「すべての入力で停止しない」という形で表すには無限の情報が要るように見えるため、真な Σ 文の場合のような「有限の計算記録から証明を機械的に組み立てる」一様な手続きは存在しない（実際、真な Π 文のうち PA で証明できるものも多いが、真理から証明への一様な構成はない）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] 問題の解答における「真な Π 文」の記述
- **Category:** Supplement/remark error
- **Location:** pt:prob-fsc-pi-fails / solution
- **Detail:** The solution says "これは真な Π 文 Con の否定で、PA が N で健全なら起こらない（PA が単に無矛盾なだけの場合も、この文は PA で証明できないことが知られているが、それには別の議論が要る）". The parenthetical is imprecise/incorrect as a justification: if PA is consistent, Bew(⌜⊥⌝) is not provable in PA precisely because PA is consistent (a proof of ⊥ would make PA inconsistent), and this is exactly the content of Gödel's second incompleteness theorem, not a separate deeper fact. The phrasing suggests consistency alone is insufficient, which is wrong: consistency of PA already implies PA ⊬ Bew(⌜⊥⌝) (equivalently PA ⊬ ¬Con).
- **Proposed fix:** これは真な Π 文 Con の否定であり、PA が無矛盾なら PA は偽の文を証明しない（PA ⊬ Bew(⌜⊥⌝) はまさに第二不完全性定理の内容で、PA の無矛盾性から従う）。
- **Reported:** 2026-10-28 (10fede1)
