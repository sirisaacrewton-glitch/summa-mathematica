# Verification tracker: `02-algebra/03-commutative-algebra/04-integral-domains/09-counterexamples.html`

<!-- source: 02-algebra/03-commutative-algebra/04-integral-domains/09-counterexamples.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Hypcheck claim that bounded block sizes give finite dimension is imprecise
- **Category:** Supplement/remark error
- **Location:** ring:nagata-infinite-dimension / hypcheck
- **Detail:** The hypcheck says 'if the block sizes were bounded, then dim R would be finite'. This is not what the construction gives. If the block sizes are bounded by some d, then each p_{i} has height at most d, so dim R <= d, which is finite — that part is fine. However the statement as written ('大きさが有界なら dim R は有限') is true but the reason is not merely boundedness of block sizes; it is that the heights of the p_{i} are uniformly bounded. More importantly, the claim is stated as if boundedness of block sizes is the essential hypothesis, whereas the actual essential point is that the heights of the p_{i} are unbounded. This is a minor imprecision but the sentence is essentially correct. On reflection this is not a genuine error.
- **Proposed fix:** No change needed; the statement is correct as written.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim about Q-bar tensor Q-bar having infinitely many idempotents
- **Category:** Unsupported fact
- **Location:** ring:tensor-not-noetherian / hypcheck
- **Detail:** The hypcheck states that \bar{\Q}\otimes_{\Q}\bar{\Q} has infinitely many idempotents and is not Noetherian. This is a known result, but the statement 'has infinitely many idempotents' needs care: \bar{\Q}\otimes_{\Q}\bar{\Q} is a ring whose idempotents correspond to clopen subsets of the spectrum, and indeed it has infinitely many idempotents (e.g. from distinct embeddings / Galois automorphisms of finite subextensions). The claim is true and standard. However, the phrase 'is known' without a reference in a page that otherwise cites sources is acceptable as a side remark. Not a genuine error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Supplement lists four methods but method (4) 'rational value group' is not used on this page
- **Category:** Supplement/remark error
- **Location:** supplement (ring:page-counterexamples)
- **Detail:** The supplement claims the counterexamples on this page are made by four methods, including '(4) using the value group of the rationals (breaking discreteness)'. No counterexample on this page uses a value group or breaks discreteness; the page's examples use infinite variables, quadratic integer rings, and tensor products. The claim '本ページの反例の多くは...四つの方法で作られている' is therefore overstated/imprecise: method (4) does not appear on this page at all, and method (3) (non-separability/non-algebraic-closedness) is only tangentially relevant (the tensor example uses infinite transcendence degree, not non-separability).
- **Proposed fix:** Rewrite as: '本ページの反例は主に (1) 変数を無限個にする（ネーター性・次元を壊す）、(2) 二次の整数環で整数論的な障害を作る（一意分解性・単項性を壊す）、(3) 体のテンソル積で被約性・整域性を壊す、の三つの方法で作られている。' Remove the value-group item or mark it as a method used elsewhere.
- **Reported:** 2026-10-28 (10fede1)
