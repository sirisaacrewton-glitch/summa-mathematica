# Verification tracker: `02-algebra/01-linear-algebra/01-vector-spaces/01-spaces-bases.html`

<!-- source: 02-algebra/01-linear-algebra/01-vector-spaces/01-spaces-bases.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the proofs of the sum/direct-sum proposition, the basis characterization, basis existence/extension via Zorn, and the dimension properties are sound, and the hypcheck comments are accurate. The main genuine problems are in the example/remark side claims: the Erdős–Kaplansky dimension formula for $k^{\mathbb{N}}$ is stated without the necessary hypothesis that $k$ is infinite (it fails for finite fields), and the choice-related remark about Hamel bases and non-measurable sets is imprecise about the role of choice. The skew-field supplement is essentially correct but its justification is slightly overstated. No logical gaps or missing hypotheses were found in the proved results.

## Issues

### ISSUE-0001 [Open] Erdős–Kaplansky: dim k^N = |k|^{aleph_0} needs |k| infinite
- **Category:** Supplement/remark error
- **Location:** lin:dimension-examples / item 3
- **Detail:** The Erdős–Kaplansky theorem states that for an infinite field $k$, $\dim_{k} k^{\mathbb{N}} = |k|^{\aleph_{0}}$. For a finite field $k$ (e.g. $k=\mathbb{F}_{2}$) the formula fails: $|k^{\mathbb{N}}| = |k|^{\aleph_{0}} = \aleph_{0}$, and since $k^{\mathbb{N}}$ is an infinite-dimensional vector space over a finite field, its dimension is $\aleph_{0}$, not $|k|^{\aleph_{0}}$ read as a cardinal power in the naive sense — more precisely the stated equality $\dim k^{\mathbb{N}} = |k|^{\aleph_{0}}$ is only valid when $|k|$ is infinite (the theorem requires $k$ infinite). The claim as written is stated without the hypothesis that $k$ is infinite.
- **Proposed fix:** State: 'For an infinite field $k$, $\dim_{k} k^{\mathbb{N}} = |k|^{\aleph_{0}}$ (Erdős–Kaplansky theorem). In particular, if $k$ is uncountable, $k^{\mathbb{N}}$ has no countable basis.' (For finite $k$, $\dim_{k} k^{\mathbb{N}} = \aleph_{0}$.)
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Blass 1984: 'every vector space has a basis' equivalent to AC — attribution and statement
- **Category:** Supplement/remark error
- **Location:** remark 選択公理との関係
- **Detail:** The statement that 'every vector space has a basis' is equivalent to AC over ZF is correct (Blass, 1984, 'Existence of bases implies the axiom of choice'). However, the remark also asserts 'ZF では R の Q 上の基底の存在は証明できず' — this is correct (it is not provable in ZF), but the phrasing 'ハメル基底があるとルベーグ可測でない集合が作れる' is stated as a known fact without the caveat that this construction requires choice (a well-ordering or similar). More importantly, the claim that the existence of a Hamel basis yields a non-Lebesgue-measurable set is a theorem of ZFC (via Vitali-type arguments using the basis), but it is not literally 'if a Hamel basis exists then a non-measurable set exists' in ZF alone without additional choice — the standard derivation uses the basis plus choice to select representatives. This is an imprecise/overstated side claim.
- **Proposed fix:** Rephrase: 'In ZF the existence of a $\mathbb{Q}$-basis of $\mathbb{R}$ is not provable; assuming such a basis (a Hamel basis), one can construct a non-Lebesgue-measurable set (Vitali-type argument).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Skew-field supplement: 'dimension uniqueness' for division rings
- **Category:** Supplement/remark error
- **Location:** supplement 前提を変えると
- **Detail:** The supplement claims that over a skew field (division ring) the proofs carry over 'by reading coefficients as multiplied from the left', so that basis existence, extension, and uniqueness of dimension all hold. This is true for division rings (a division ring is a division ring, and free modules over a division ring have well-defined rank), but the phrase '証明は係数を左から掛けるように読み替えれば同じ' glosses over the fact that for a non-commutative division ring the notion of 'linear combination' must consistently use left scalar multiplication and the argument in lin:basis-characterization Step 1 uses $c^{-1}$ on the left; this is fine, but the claim that '次元の一意性' holds requires the rank-invariance theorem for division rings, which is not the cited mod:rank-invariance (that is for commutative rings). The statement is essentially correct but the justification via the cited commutative-ring result is not applicable; as a side claim it is acceptable but slightly overstated in claiming the same proof works verbatim.
- **Proposed fix:** Add: 'For a division ring $D$, free $D$-modules have a well-defined rank (the exchange lemma argument goes through with left scalar multiplication), so the same conclusions hold.'
- **Reported:** 2026-10-28 (8ccef3d)
