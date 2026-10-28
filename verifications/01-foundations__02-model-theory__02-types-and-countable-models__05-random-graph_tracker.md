# Verification tracker: `01-foundations/02-model-theory/02-types-and-countable-models/05-random-graph.html`

<!-- source: 01-foundations/02-model-theory/02-types-and-countable-models/05-random-graph.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is logically sound: the extension axioms, the Rado graph construction, the ω-categoricity/completeness proof via back-and-forth and Vaught's test, the almost-sure lemma, and the 0–1 law are all correctly argued, and the hypchecks accurately track where each hypothesis is used. The only genuine concerns are in the supplement: the claim about the p = N^{-α} zero-one law (Shelah–Spencer) is stated too strongly and imprecisely, and the Fraïssé-limit characterization slightly conflates universality with homogeneity. Both are medium-confidence supplement issues; no proof-level or citation-level errors were found.

## Issues

### ISSUE-0001 [Open] Incorrect claim about p = N^{-α} zero-one law
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement claims that for edge probability p = p(N) = N^{-α}, the 0–1 law holds when α is irrational but may fail when α is rational. This is a garbled version of the Shelah–Spencer result. The actual theorem (Shelah–Spencer 1988) concerns p = N^{-α} with α irrational: then the random graph G(N, p) has a first-order limit theory (a 0–1 law holds). For rational α the situation is more subtle and the limit theory need not exist / the 0–1 law can fail. But the statement as written ("α irrational ⇒ 0–1 law holds, rational ⇒ may fail") is stated too strongly and imprecisely: the Shelah–Spencer theorem requires α irrational AND in a certain range (0 < α < 1, and specifically the result is about the existence of a limit theory for irrational α, with the 0–1 law holding in that regime). The blanket claim that for every irrational α the 0–1 law holds is not what the literature supports, and the rational case is not simply "may fail" but is genuinely different. This is an overstated/imprecise attribution.
- **Proposed fix:** Replace with: "$p=p(N)$ を $N$ とともに変える場合（たとえば $p=N^{-\alpha}$, $0<\alpha<1$）は、$\alpha$ が無理数なら極限理論が存在して 0–1 法則が成り立つが、有理数の場合は極限理論が存在しないことがある（シェラ–スペンサー）。ここでは扱わない。"
- **Reported:** 2026-10-28 (8ccef3d)
