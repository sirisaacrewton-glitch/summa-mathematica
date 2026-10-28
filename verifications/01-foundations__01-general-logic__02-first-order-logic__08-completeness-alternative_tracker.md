# Verification tracker: `01-foundations/01-general-logic/02-first-order-logic/08-completeness-alternative.html`

<!-- source: 01-foundations/01-general-logic/02-first-order-logic/08-completeness-alternative.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems (prop-derivation-lift, alt-axioms-consistent, valuation-term-model, reduction-to-propositional, completeness-via-konig) are logically sound and their proofs check out; the hypcheck comments are accurate. The genuine problems are confined to the side remarks: the historical remark on Gödel's original proof misdescribes its method, and the supplement overstates the scope of the reduction to uncountable languages. Both are medium-confidence supplement/remark errors; no proof-level gaps were found.

## Issues

### ISSUE-0001 [Open] Remark on Gödel's original proof mischaracterizes it as a reduction to propositional satisfiability
- **Category:** Supplement/remark error
- **Location:** logic:goedel-original-remark
- **Detail:** The remark claims Gödel's 1929/1930 completeness proof worked by converting sentences to prenex normal form, introducing witnesses as new variables, building a sequence of finitely many propositional formulas, and reducing first-order satisfiability to countably many propositional satisfiability problems. This is not an accurate description of Gödel's proof. Gödel's dissertation proof proceeds by a syntactic reduction: he shows that if a formula is satisfiable in some domain then it is satisfiable in a countable domain (or in the natural numbers), using a Skolem-type argument, and then reduces to the propositional case via a valuation on the (countably many) instances. The specific mechanism described (witnesses as new variables, finite sequences of propositional formulas, König's lemma style) is closer to Herbrand/gentzen-style or later textbook presentations, not Gödel's original. The hedge 'とされる' does not save it because the substantive claim is wrong.
- **Proposed fix:** Rewrite: 「ゲーデルの最初の完全性定理の証明（1929年の学位論文と1930年の論文）は、与えられた論理式が或る領域で充足可能ならば可算領域（自然数領域）でも充足可能であることを示し、その後で可算個の命題論理式の充足可能性に帰着させる、という構成的なものであった。本ページの証明は、この『命題論理への帰着』のアイデアを、冠頭標準形の代わりにヘンキンの証拠を使って行ったものである。」
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that the reduction uses ultrafilters in the general (uncountable) case is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (三つの証明の比較, item (2))
- **Detail:** The supplement says that in the general (uncountable) case the reduction to propositional logic uses ultrafilters, citing the proof 3 of logic:page-prop-compactness. But the reduction theorem logic:reduction-to-propositional is stated only for a countable language L, and the term-model theorem logic:valuation-term-model requires a valuation on PV_{L*}. For uncountable languages the propositional compactness via ultrafilters gives satisfiability of A, but the term model construction still needs the Henkin witnesses and the countable enumeration (x_k, φ_k); the reduction as presented does not directly extend. The remark overstates the scope of the method.
- **Proposed fix:** Restrict the claim: 「(2) 命題論理への帰着（本ページ）：一階の問題を命題論理のコンパクト性の問題に変える。可算言語の場合はケーニッヒの補題で足りる。一般の言語では命題論理のコンパクト性に超フィルターを用いるが、本ページの項モデル構成は可算言語を前提としている。」
- **Reported:** 2026-10-28 (8ccef3d)
