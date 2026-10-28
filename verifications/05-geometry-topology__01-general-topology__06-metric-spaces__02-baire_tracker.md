# Verification tracker: `05-geometry-topology/01-general-topology/06-metric-spaces/02-baire.html`

<!-- source: 05-geometry-topology/01-general-topology/06-metric-spaces/02-baire.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 11 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is a careful treatment of the Baire category theorem. I checked every supplement, remark, intuition, hypcheck and stated-only fact: the attributions (Oxtoby 1961 for non-Baire products, Blair 1977 for the DC equivalence, Banach–Mazurkiewicz 1931 for generic nowhere differentiability) are all correct, and the measure/meager comparison is accurate. The proofs (both parts of the Baire theorem, the equivalences, the uniform boundedness principle, the uncountability corollary, and the two problems) are logically sound, with hypotheses (completeness, local compactness, DC) properly tracked in the hypcheck. I found no genuine errors of the six kinds.

## Issues

### ISSUE-0001 [Open] Oxtoby attribution for non-Baire products
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says that a product of Baire spaces need not be Baire and attributes the beginning of this line of research to "J. C. Oxtoby's 1961 paper". Oxtoby's 1961 paper ("Cartesian products of Baire spaces", Fund. Math. 49) is indeed the standard source for the result that a product of two Baire spaces need not be Baire, so the attribution is essentially correct. However, the phrasing "に始まる研究がある" (research beginning with) is vague; the concrete result is due to Oxtoby (1961), and the statement as written is acceptable. No genuine error here.
- **Proposed fix:** No change needed; optionally state explicitly: "Oxtoby (1961) showed that a product of two Baire spaces need not be Baire."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Blair 1977 equivalence of Baire theorem and DC
- **Category:** Supplement/remark error
- **Location:** supplement / 選択公理について
- **Detail:** The supplement states that over ZF, "every complete metric space is a Baire space" is equivalent to DC, attributed to C. E. Blair, 1977. This is a correct and well-known result (Blair, "The Baire category theorem implies the principle of dependent choices", Bull. Acad. Polon. Sci. 1977). The statement is accurate.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Banach–Mazurkiewicz 1931 generic differentiability claim
- **Category:** Supplement/remark error
- **Location:** supplement / 類似の定理
- **Detail:** The supplement says that in C([0,1],R) the set of functions differentiable at no point is comeager (residual), hence nonempty, attributed to Banach and Mazurkiewicz, 1931. This is a standard and correct result (Banach 1931, Mazurkiewicz 1931 independently). The statement is accurate.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] R decomposes into meager plus null set
- **Category:** Supplement/remark error
- **Location:** supplement / 測度との比較
- **Detail:** The supplement says R can be split into a meager set and a null set, citing the problem. This is correct (the classical decomposition). The statement is accurate.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Step 1 of Baire theorem: nested closed balls and limit in W
- **Category:** Logical gap
- **Location:** top:baire-category / proof Step 1
- **Detail:** The proof claims x ∈ W ∩ ⋂ U_n because x_m ∈ B̄(x_{n+1},r_{n+1}) ⊆ B(x_1,r_1) ⊆ W ∩ U_1 for m ≥ n+1. But the nesting gives B̄(x_{n+1},r_{n+1}) ⊆ B(x_n,r_n) ⊆ ... ⊆ B(x_1,r_1), and B(x_1,r_1) ⊆ W ∩ U_1 only if the open ball B(x_1,r_1) is contained in W ∩ U_1. The construction only ensures B̄(x_1,r_1) ⊆ W ∩ U_1, which does imply B(x_1,r_1) ⊆ W ∩ U_1. So this is fine. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Step 2: compactness via finite intersection property
- **Category:** Logical gap
- **Location:** top:baire-category / proof Step 2
- **Detail:** The proof uses that a decreasing sequence of nonempty closed subsets of a compact set has nonempty intersection, citing top:compact-equivalents (finite intersection property). This is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Example 2: Q is not G_delta uses Baire theorem on R
- **Category:** Missing hypothesis
- **Location:** example / item 2
- **Detail:** The example argues that if Q = ⋂ U_n with U_n open, then each U_n is dense open (since it contains Q), and intersecting with R∖{q_k} (also dense open) gives empty intersection, contradicting the Baire category theorem for R. This is correct: R is complete, hence Baire. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Hypcheck: Q is not Baire because Q = ⋃{q}
- **Category:** Unsupported fact
- **Location:** top:baire-category / hypcheck (完備性)
- **Detail:** The hypcheck says Q is not complete and indeed not Baire, since Q = ⋃_q {q} with each singleton nowhere dense. In Q, singletons are closed with empty interior, hence nowhere dense, so Q is meager in itself; since Q is a nonempty open subset of itself, this contradicts Baire-ness. Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] Hypcheck: Q counterexample for uniform boundedness
- **Category:** Unsupported fact
- **Location:** top:uniform-boundedness-baire / hypcheck (ベール性)
- **Detail:** The hypcheck says if X = Q the conclusion may fail. This is a vague but true statement (Q is not Baire, and one can construct pointwise bounded continuous families on Q not uniformly bounded on any nonempty open set). It is stated cautiously ("ことがある"). Acceptable.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0010 [Open] Problem 2 solution: W is not meager uses Baire property of X
- **Category:** Logical gap
- **Location:** top:prob-countable-complete-isolated / solution
- **Detail:** The solution says W = ⋃_n (W ∩ {x_n}), and since X is Baire, by top:baire-space-equivalents.3 W is not meager, so some singleton {x_n} ⊆ W is not nowhere dense. This uses that a nonempty open subset W of a Baire space is not meager in X (equivalently, not meager in itself). The cited item 3 says nonempty open sets are of second category, which is exactly this. Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0011 [Open] Citation of top:meager-basic.1 in problem solution
- **Category:** Improper link
- **Location:** top:prob-meager-null / solution
- **Detail:** The solution cites top:meager-basic.1 to conclude R∖U_k is a nowhere dense closed set. Item 1 states N nowhere dense iff X∖N̄ is dense open, and closed F nowhere dense iff int F = ∅. Here U_k is dense open, so R∖U_k is closed with empty interior, hence nowhere dense. This is a correct use of item 1. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
