# Verification tracker: `01-foundations/06-category-theory/02-monoidal-categories/03-simplicial.html`

<!-- source: 01-foundations/06-category-theory/02-monoidal-categories/03-simplicial.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the universal-monoid theorem, the normal form lemma, the presentation proposition and the chain-complex proposition are all sound, and the hypcheck comments are accurate. The only genuine problem found is in the supplement's 'similar theorem' paragraph, which misdescribes the free monoidal category on one object and thereby overstates the analogy with Δ as the free strict monoidal category on one monoid. The remaining supplement items (CW/cellular homology, comonad bar construction, the four faces of Δ) are accurate.

## Issues

### ISSUE-0001 [Open] Wrong direction of the analogy between Δ and the free monoidal category
- **Category:** Supplement/remark error
- **Location:** supplement / 類似の定理
- **Detail:** The supplement says that \ref{cat:delta-universal-monoid} is analogous to \ref{cat:free-monoidal-category} and that 'W is the free monoidal category on one object, Δ is the free strict monoidal category on one monoid'. The second half is correct (Δ is the free strict monoidal category containing a monoid, i.e. the universal monoid). But the first half is wrong: the free monoidal category on one object is the category of finite ordinals with *all* functions (or, in the strict case, the discrete category of natural numbers with addition), not the free monoidal category on a monoid. The two universal properties are different: one is 'free monoidal category on one object' (no monoid structure assumed), the other is 'free strict monoidal category on one monoid'. Stating them as 'similar' in this symmetric way misstates the free-monoidal-category universal property.
- **Proposed fix:** Replace with: '\ref{cat:delta-universal-monoid} is the monoid-analogue of \ref{cat:free-monoidal-category}: the free monoidal category on one object freely adjoins an object, whereas Δ is the free strict monoidal category on one *monoid* (an object equipped with μ, η). Both say that a free structure admits a combinatorial description, but the structures being freely generated differ (an object versus a monoid).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Δ is not a full subcategory of Cat on finite ordinals as categories
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から (b)
- **Detail:** Item (b) claims Δ is '(b) the full subcategory of Cat consisting of finite ordinals viewed as categories'. This is false: viewing n = {0,...,n-1} as a category (a poset), the monotone maps n→n' are exactly the functors, so the full subcategory of Cat on these objects is indeed Δ — but only if one restricts to those objects. However the statement as written ('有限順序数を圏とみた Cat の充満部分圏') is actually correct for the poset-category reading. The genuine imprecision is that this identification requires viewing each ordinal as a *poset category*, and the full subcategory of Cat on all finite ordinals (including 0) with functors = monotone maps is exactly Δ; this is fine. No error here on re-checking.
- **Proposed fix:** No change needed; the statement is correct when ordinals are read as poset categories.
- **Reported:** 2026-10-28 (10fede1)
