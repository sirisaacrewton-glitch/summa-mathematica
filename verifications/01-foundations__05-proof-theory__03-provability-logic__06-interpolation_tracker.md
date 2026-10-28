# Verification tracker: `01-foundations/05-proof-theory/03-provability-logic/06-interpolation.html`

<!-- source: 01-foundations/05-proof-theory/03-provability-logic/06-interpolation.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem, lemmas and proofs (interpolation, truth lemma, Beth, Bernardi, third proof) are logically sound and the citations match their targets. The problems concentrate in the supplement: the claim that K4 has Craig interpolation is false, and the Galois-theory analogy is imprecise and misattributes the mechanism to Bernardi's lemma rather than to interpolation. No issues found in the proofs or in the stated-only facts elsewhere.

## Issues

### ISSUE-0001 [Open] Incorrect claim that K, K4, S4, S5 all have interpolation
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果
- **Detail:** The supplement states that Craig interpolation holds for K, K4, S4, S5. This is false for K4: K4 does not have Craig interpolation (it fails interpolation; e.g. it is well known that K4 lacks interpolation, unlike K, S4, S5 which do have it). The claim is stated as a known fact and is wrong for K4.
- **Proposed fix:** Replace with: "$\mathsf{K}$, $\mathsf{S4}$, $\mathsf{S5}$ などでは成り立つことが知られているが、$\mathsf{K4}$ では補間定理は成り立たない（一般的にはこう言われているが、本サイトでは証明していない）。" (i.e. K, S4, S5 have interpolation, but K4 does not.)
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Mischaracterization of the analogy to Galois theory
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement says the Beth idea is 'like the principle in algebra that if a root of a polynomial is fixed by the Galois group action then it can be written as a rational expression in the coefficients.' The correct Galois-theoretic statement is that an element fixed by the whole Galois group lies in the base field (fixed field theorem), not that it is 'a rational expression in the coefficients' in the loose sense stated; more importantly the analogy as phrased ('root fixed by the Galois group ⇒ rational expression in coefficients') conflates the fixed-field statement with a definability statement and is imprecise. Also the sentence attributes the 'Bernardi lemma' as the mechanism, but the definability here comes from interpolation, not from Bernardi's lemma; the parenthetical '(ベルナルディの補題)' is a misattribution in this context.
- **Proposed fix:** Rewrite: "これは代数における「ガロア群の作用で動かない元は基礎体に属する」（固定体定理）という原理に似ている：ここでは「$p$ を $q$ に取り替える」操作の下で $p$ が動かないこと（$D\wedge D'\to(p\leftrightarrow q)$）が、補間定理を通じて $p$ が共通語彙で定義できることを導く。"
- **Reported:** 2026-10-28 (10fede1)
