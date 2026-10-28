# Verification tracker: `01-foundations/06-category-theory/04-kan-extensions/02-ends.html`

<!-- source: 01-foundations/06-category-theory/04-kan-extensions/02-ends.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is mathematically sound overall: the definitions of wedge/end/coend, the end-as-limit and Fubini theorems, the parameter theorem, and the co-Yoneda proof are correct, and the hypcheck correctly notes the need for inner ends at all (p,q). The only genuine problems are in the supplement: the Day–Kelly attribution for enriched ends is imprecise (Kelly/Street is the right source for the general theory), and the delta-function analogy for co-Yoneda is stated more strongly ('same form') than warranted since co-Yoneda is a coend. Both are minor and confined to side remarks.

## Issues

### ISSUE-0001 [Open] Day–Kelly attribution for enriched ends is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (一般化)
- **Detail:** The supplement says that in enriched category theory over a closed category the set of natural transformations is defined as the hom object $\int_{c}[Uc,Vc]$ and that 'ends are a basic tool of enriched category theory (due to Day–Kelly, per Mac Lane's remark)'. The end formula for enriched natural transformations and the general theory of enriched ends/coends are due to Kelly (and Street), notably Kelly's 'Basic Concepts of Enriched Category Theory'; Day–Kelly is specifically about (co)ends in enriched functor categories / Day convolution. Attributing the general enriched end formalism to Day–Kelly is a misattribution. Also the phrase 'the set of natural transformations is ... a hom object' is slightly off: the hom object is the end, and the set of natural transformations is recovered by applying the monoidal unit hom.
- **Proposed fix:** In an enriched category over a closed (or monoidal closed) category, the hom object of natural transformations is defined as the end $\int_{c}[Uc,Vc]$; the ordinary set of natural transformations is recovered as $\mathbf{V}(I,\int_{c}[Uc,Vc])$. The general theory of enriched ends and coends is due to Kelly (and Street); Day–Kelly concerns (co)ends in enriched functor categories (Day convolution).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Delta-function analogy for co-Yoneda is loose
- **Category:** Supplement/remark error
- **Location:** supplement (類似の定理)
- **Detail:** The supplement claims the co-Yoneda lemma 'has the same form' as $f(a)=\int\delta(a-c)f(c)\,dc$. The co-Yoneda isomorphism is $\int^{c}\mathbf{C}(c,a)\times Fc\cong Fa$, a coend (a quotient/colimit), whereas the delta-function identity is an ordinary integral (an end-like/limit operation) with $\delta(a-c)$ symmetric. The analogy is suggestive but the stated 'same form' is imprecise: the co-Yoneda formula is a coend, not an integral of the displayed convolution form, and $\mathbf{C}(c,a)$ plays the role of $\delta(a-c)$ only heuristically.
- **Proposed fix:** The co-Yoneda lemma $\int^{c}\mathbf{C}(c,a)\times Fc\cong Fa$ is analogous to the delta-function identity $f(a)=\int\delta(a-c)f(c)\,dc$, with $\mathbf{C}(c,a)$ playing the role of the 'delta function' $\delta(a-c)$; note that the co-Yoneda side is a coend (a colimit), so the analogy is heuristic rather than an identity of the same form.
- **Reported:** 2026-10-28 (8ccef3d)
