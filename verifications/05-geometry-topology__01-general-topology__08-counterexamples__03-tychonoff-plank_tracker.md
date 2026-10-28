# Verification tracker: `05-geometry-topology/01-general-topology/08-counterexamples/03-tychonoff-plank.html`

<!-- source: 05-geometry-topology/01-general-topology/08-counterexamples/03-tychonoff-plank.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 11 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Order topology is not always hereditarily normal
- **Category:** Supplement/remark error
- **Location:** supplement / 「前提を変えると」
- **Detail:** The supplement claims that the order topology on any totally ordered set is always hereditarily normal. This is false: the Sorgenfrey line is the order topology of a lexicographically ordered set (or more simply, the deleted Tychonoff plank T itself is a subspace of the order topology of the product order on [0,ω_{1}]×[0,ω], and T is not normal). In fact the standard correct statement is that the order topology of a *well-ordered* set (an ordinal) is hereditarily normal (indeed hereditarily collectionwise normal / monotonically normal), not of an arbitrary total order. The claim as written contradicts the very theorem of this page.
- **Proposed fix:** Replace with: 「順序数（整列集合）の順序位相はつねに遺伝的正規であることが知られている（一般の全順序集合では成り立たない：ゾルゲンフライ直線はある全順序集合の順序位相であり、また欠けたチコノフの板自身が全順序集合の直積順序の部分空間として反例になる）。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Sorgenfrey line is not an example of completely regular non-normal space
- **Category:** Supplement/remark error
- **Location:** supplement / 「似た定理」
- **Detail:** The supplement lists the Niemytzki plane, the Sorgenfrey plane, and the deleted Tychonoff plank as examples of completely regular but non-normal spaces. The Sorgenfrey *line* is normal (indeed hereditarily normal/perfectly normal); it is the Sorgenfrey *plane* that is non-normal. The text does say ゾルゲンフライ平面 (plane), which is correct, so this particular listing is fine. However, the preceding sentence in the same supplement says the Sorgenfrey line is hereditarily normal, which is correct, so no error here. (No issue.)
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Niemytzki plane and Sorgenfrey plane use Jones' lemma, but the plank does not
- **Category:** Supplement/remark error
- **Location:** supplement / 「似た定理」
- **Detail:** The claim that the Niemytzki plane and Sorgenfrey plane are shown non-normal via separability and Jones' lemma is essentially correct (both are separable but have a closed discrete subspace of size continuum, so Jones' lemma applies). The contrast with the plank using cf(ω_{1}) is also correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Every completely regular space embeds in a compact Hausdorff space
- **Category:** Supplement/remark error
- **Location:** supplement / 「似た定理」
- **Detail:** The statement that every completely regular space is a subspace of a compact Hausdorff space (via the Stone–Čech compactification) is correct, and the conclusion that the plank is a typical example of 'subspace of a normal space need not be normal' is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Step 3: α_{n} chosen so that (α_{n},ω_{1}]×{n}⊆U needs justification
- **Category:** Logical gap
- **Location:** top:tychonoff-plank-not-normal / Step 3
- **Detail:** The step asserts that since (ω_{1},n)∈U and n is isolated in [0,ω], there is α_{n}<ω_{1} with (α_{n},ω_{1}]×{n}⊆U. This is correct: a basic neighborhood of (ω_{1},n) in the product is (δ,ω_{1}]×(m,ω]∩[0,ω] = (δ,ω_{1}]×{n} since n is isolated, so taking α_{n}=δ works. The argument is valid. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Step 3: β=α+1 and (β,ω)∈B
- **Category:** Logical gap
- **Location:** top:tychonoff-plank-not-normal / Step 3
- **Detail:** With α=sup_{n}α_{n}<ω_{1} and β=α+1<ω_{1}, we have (β,n)∈U for all n since (α_{n},ω_{1}]×{n}⊆U and β>α_{n}. Also (β,ω)∈B⊆V. Since β is isolated in [0,ω_{1}) (successor ordinal), {β}×(m,ω]⊆V for some m. Then (β,m+1)∈U∩V. This is correct. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Use of countable choice in sup of countably many α_{n}
- **Category:** Missing hypothesis
- **Location:** notation / Step 3
- **Detail:** The notation section notes that the supremum of countably many β_{n}<ω_{1} is <ω_{1}, using the axiom of choice (countable choice). In Step 3, α=sup_{n}α_{n} requires choosing α_{n} for each n<ω, which uses countable choice. This is acknowledged in the notation. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Citation of top:heine-borel for finite products of compact spaces
- **Category:** Improper link
- **Location:** top:tychonoff-plank-not-normal / Step 1
- **Detail:** The text cites \ref{top:heine-borel} (title: 有限個の直積とハイネ＝ボレルの定理) for the fact that a finite product of compact spaces is compact. According to the label table, this theorem is about finite products and Heine–Borel, so the citation is appropriate. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] Hypcheck: [0,ω]×[0,ω] minus corner is metrizable and normal
- **Category:** Unsupported fact
- **Location:** hypcheck / cf(ω_{1})>ω
- **Detail:** The hypcheck states that replacing ω_{1} by ω, the space [0,ω]×[0,ω] minus the corner is metrizable and hence normal. This is correct: [0,ω] is a countable compact metric space (homeomorphic to {0}∪{1/n}), so the product is metrizable, and removing a point preserves metrizability. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0010 [Open] Hypcheck: closures of A and B meet at the corner in P
- **Category:** Unsupported fact
- **Location:** hypcheck / 角を除くこと
- **Detail:** The hypcheck says the closures of A and B in P meet at the corner (ω_{1},ω). This is correct: any neighborhood of the corner meets both A and B. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0011 [Open] Problem solution: [0,ω_{1}) is normal 'as cited'
- **Category:** Logical gap
- **Location:** top:prob-tpl-normal-subspace / solution
- **Detail:** The solution says [0,ω_{1}) is normal because it is the order topology of a totally ordered set, 'known (cited here)'. But the page does not actually cite a result establishing that order topologies of totally ordered sets are normal; moreover that general statement is false (see the supplement issue). The correct justification is that [0,ω_{1}) is a subspace of the compact Hausdorff (hence normal) space [0,ω_{1}], but normality is not hereditary in general, so this does not directly apply. A correct argument: [0,ω_{1}) is a linearly ordered set whose order topology is normal (ordinal spaces are normal), or use that [0,ω_{1}) is collectionwise normal. The solution's parenthetical 'ここでは引用' points to no actual cited result, leaving a gap.
- **Proposed fix:** Replace the justification with: 「[0,ω_{1}) は順序数空間であり、順序数空間は正規（実際には遺伝的収集正規）である。あるいは [0,ω_{1}) が距離化可能でないことを認めた上で、整列集合の順序位相が正規であるという標準的事実を用いる。」 and add a proper citation or a short proof.
- **Reported:** 2026-10-28 (10fede1)
