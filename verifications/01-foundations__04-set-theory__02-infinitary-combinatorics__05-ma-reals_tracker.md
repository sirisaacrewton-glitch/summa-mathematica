# Verification tracker: `01-foundations/04-set-theory/02-infinitary-combinatorics/05-ma-reals.html`

<!-- source: 01-foundations/04-set-theory/02-infinitary-combinatorics/05-ma-reals.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the main theorems (set:ma-baire, set:ma-measure, set:ma-compact-ccc, set:ma-locally-compact-ccc, set:baire-compact, set:ma-ccc-fip, set:ma-ccc-product) have sound proofs with hypotheses properly verified, and the cited labels match their uses. The issues found are confined to supplements: the claim that the complete-metric Baire theorem follows from the same poset argument is imprecise (the poset of open sets is not c.c.c. in general), and the additivity statement for the null and meager ideals should explicitly invoke MA for all kappa<2^{aleph_0}. The Luzin set remark is essentially correct but could be worded more precisely. No logical gaps or missing hypotheses were found in the proofs themselves.

## Issues

### ISSUE-0001 [Open] Baire category for complete metric spaces via the same poset argument is not justified
- **Category:** Supplement/remark error
- **Location:** supplement after set:baire-compact
- **Detail:** The supplement claims that the complete-metric-space case of the Baire category theorem can be shown by the same poset argument, merely restricting conditions to 'open balls of radius at most 1/n'. This is imprecise: the poset of nonempty open sets ordered by inclusion is not c.c.c. in a general complete metric space, so the MA-based argument of set:ma-compact-ccc does not transfer directly; one needs a different poset (e.g. closed balls with a fixed radius, or the standard nested-ball argument), and the statement as written suggests the compact proof carries over verbatim.
- **Proposed fix:** Replace with: 'The complete-metric-space case can also be proved by a poset argument, but not with the poset of all nonempty open sets (which need not be c.c.c.); instead one uses, for each n, the poset of closed balls of radius at most 1/n ordered by inclusion, together with the nested-intersection property of complete metric spaces.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that the additivity of the null and meager ideals is 2^{aleph_0} under MA is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement after set:ma-measure
- **Detail:** The supplement states that set:ma-baire and set:ma-measure show that the additivity of both the meager ideal and the null ideal equals 2^{aleph_0} under MA. What the theorems actually give is add(null)=add(meager)=2^{aleph_0} only in the sense that fewer than 2^{aleph_0} sets have null/meager union; but MA alone (without knowing 2^{aleph_0} is regular, or without MA for all kappa<2^{aleph_0}) does not literally give add = 2^{aleph_0} as an equality of the additivity number unless one uses that MA holds for all kappa<2^{aleph_0}. The equality add(null)=2^{aleph_0} requires the additional fact that MA(kappa) holds for every kappa<2^{aleph_0}, which is true under MA, but the supplement should state this explicitly rather than asserting the equality as an immediate consequence.
- **Proposed fix:** Replace with: 'Under MA, since MA(kappa) holds for every kappa<2^{aleph_0}, both the meager ideal and the null ideal have additivity 2^{aleph_0}: fewer than 2^{aleph_0} meager (resp. null) sets have meager (resp. null) union, while 2^{aleph_0} singletons cover R.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Luzin set size claim under MA needs the correct hypothesis
- **Category:** Supplement/remark error
- **Location:** supplement after set:ma-small-sets-null-meager
- **Detail:** The supplement says that under MA, a Luzin set (an uncountable set meeting every nowhere dense set countably) must have size 2^{aleph_0}, because a set of size <2^{aleph_0} is meager. This is correct only if the Luzin set is uncountable and MA holds; but the argument uses that a set of size <2^{aleph_0} is meager, which requires MA(kappa) for kappa=|Y|, i.e. kappa<2^{aleph_0}, which is available under MA. The statement is essentially correct but the phrase 'if there is a Luzin set' should note that Luzin sets are uncountable by definition and that the conclusion is that its cardinality is exactly 2^{aleph_0}. As written it is acceptable; no change strictly needed, but the wording 'its size must be 2^{aleph_0}' should clarify uncountability is part of the definition.
- **Proposed fix:** Clarify: 'Under MA, any Luzin set (uncountable, meeting every nowhere dense set in at most countably many points) has cardinality exactly 2^{aleph_0}, since a set of size <2^{aleph_0} is meager and hence a countable union of nowhere dense sets, so its intersection with each nowhere dense set would be countable only if the set itself were countable.'
- **Reported:** 2026-10-28 (10fede1)
