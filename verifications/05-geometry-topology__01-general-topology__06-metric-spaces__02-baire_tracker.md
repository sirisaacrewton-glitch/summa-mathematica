# Verification tracker: `05-geometry-topology/01-general-topology/06-metric-spaces/02-baire.html`

<!-- source: 05-geometry-topology/01-general-topology/06-metric-spaces/02-baire.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is mathematically sound overall: the definitions, the equivalence proposition, the Baire category theorem proof (both the complete metric and locally compact Hausdorff cases), the corollary on uncountable complete metric spaces, the uniform boundedness theorem, and the two problems are all correct, with hypotheses properly verified and citations matching their targets. The only issues found are minor imprecisions in the supplement's historical attributions (the Oxtoby reference for non-Baire products and the precise formulation of Blair's DC equivalence), both of medium confidence and not affecting the logical content.

## Issues

### ISSUE-0001 [Open] Oxtoby attribution for non-Baire products
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says that a product of Baire spaces need not be Baire and attributes the beginning of this line of research to "J. C. Oxtoby's 1961 paper". Oxtoby's 1961 paper ("Cartesian products of Baire spaces", Fund. Math. 49) is indeed about products of Baire spaces, but the standard counterexample to the product of two Baire spaces being Baire is due to Cohen (1976) / Debs, and the Oxtoby reference is imprecise as to what it establishes. More importantly, the claim as stated ("ベール空間の直積はベール空間とは限らない") is correct, but the historical attribution is vague and potentially misleading. This is a side-comment attribution issue.
- **Proposed fix:** Replace with: "一方、ベール空間の直積はベール空間とは限らない（2つのベール空間の積がベール空間にならない例は Cohen (1976) による。Oxtoby (1961) はベール空間の積の研究の初期のものである）。ここでは扱わない。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Blair 1977 equivalence statement
- **Category:** Supplement/remark error
- **Location:** supplement / 選択公理について
- **Detail:** The supplement states that over ZF, "complete metric spaces are Baire" is equivalent to DC (C. E. Blair, 1977). Blair's 1977 paper ("The Baire category theorem implies the principle of dependent choices", Bull. Acad. Polon. Sci.) proves that the Baire category theorem for complete metric spaces implies DC, and the converse is classical. The statement is essentially correct, but the precise formulation matters: it is the statement that every complete metric space is a Baire space (equivalently, the Baire category theorem) that is equivalent to DC. As written it is acceptable, but the attribution should be precise about what is equivalent.
- **Proposed fix:** Clarify: "$\ZF$ 上で、「すべての完備距離空間はベール空間である」（ベールのカテゴリー定理）は DC と同値であることが知られている（DC ⇒ ベール性は古典的、逆は C. E. Blair, 1977）。"
- **Reported:** 2026-10-28 (8ccef3d)
