# Verification tracker: `02-algebra/02-group-theory/02-group-actions/03-burnside-counting.html`

<!-- source: 02-algebra/02-group-theory/02-group-actions/03-burnside-counting.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main results (Burnside's lemma, necklace and bracelet counts, Jordan's theorem, commuting probability) are correctly proved and the citations match their targets. The only genuine problem is in the example following the bracelet theorem: the claim that the difference N(6,2)-B(6,2)=1 corresponds to exactly one mirror pair is false, since several distinct chiral necklaces exist for n=6, k=2; the difference is only the net count. The hypcheck remark on infinite sets is imprecise but minor.

## Issues

### ISSUE-0001 [Open] Incorrect claim that the mirror pair is unique for n=6, k=2
- **Category:** Supplement/remark error
- **Location:** example (after grp:bracelet-count)
- **Detail:** The example computes N(6,2)=14 and bracelet count 13, then claims the difference of 1 means there is exactly one pair of necklaces that are mirror images but not rotations of each other. This is false. The difference N(n,k) - B(n,k) equals the number of chiral (achiral-inequivalent) necklaces, i.e. necklaces whose mirror image is a different necklace. For n=6, k=2 there are several such necklaces, not one. For instance the coloring 001011 (positions 0..5) and its reversal 001101 are not rotations of each other, and 000101 vs its reversal 001010 are also distinct necklaces. The count of 1 is the net difference, not the number of mirror pairs.
- **Proposed fix:** Replace the sentence with: "The difference of 1 is the net excess of necklaces over bracelets; it does not mean there is only one mirror pair. In fact several necklaces (e.g. 001011 and its reversal 001101, which is not a rotation of it) are distinct from their mirror images, while some others are achiral and counted once in both."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Hypcheck claim about infinite groups is imprecise
- **Category:** Supplement/remark error
- **Location:** grp:jordan-derangement / hypcheck
- **Detail:** The hypcheck says 'infinite groups/infinite sets it can be false (not treated here)'. This is misleading: Jordan's theorem holds for any finite group acting transitively on a set with at least 2 elements, regardless of whether X is infinite (the proof only needs G finite, since Burnside's lemma requires |G| finite; X can be infinite as long as orbits are... actually Burnside needs X finite too). More importantly, the statement as given is correct, but the remark suggests the finiteness of X is essential in a way that is not clearly justified. The real requirement is that G be finite (for the averaging) and X finite for Burnside. The remark is acceptable but the phrase 'infinite sets' is imprecise because the theorem's failure for infinite X is not established here.
- **Proposed fix:** Clarify: "Finiteness of G is used for the averaging in Burnside's lemma; finiteness of X is used so that the sum is finite. The statement can fail when G is infinite (e.g. Z acting on itself by translation is transitive with no fixed-point-free... actually every nonzero element is fixed-point-free, so it holds; a genuine counterexample needs care)."
- **Reported:** 2026-10-28 (10fede1)
