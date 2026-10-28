# Verification tracker: `01-foundations/03-computation/05-algorithmic-randomness/02-prefix-free-complexity.html`

<!-- source: 01-foundations/03-computation/05-algorithmic-randomness/02-prefix-free-complexity.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is mathematically sound overall: the Kraft inequality, the optimal prefix-free machine, the Kraft–Chaitin theorem and the coding corollary are proved correctly, and the bounds in comp:prefix-bounds are correct. The only genuine concerns are in the supplement: the non-computability of Ω is cited to the Martin-Löf randomness page, which does not establish it, and the symmetry-of-information identity is stated without clarifying the conditioning notation. Both are minor and confined to side remarks.

## Issues

### ISSUE-0001 [Open] Ω is not shown to be non-computable via the cited page
- **Category:** Supplement/remark error
- **Location:** supplement / チャイティンの Ω
- **Detail:** The supplement claims Ω is not computable and cites \ref{comp:page-martin-lof} (Martin-Löf randomness page). That page is about Martin-Löf randomness, not about the uncomputability of Ω; the citation does not support the claim. Moreover the statement is asserted without proof. The claim itself is true, but the justification is a wrong pointer.
- **Proposed fix:** Either remove the citation and state it as a known fact with a correct reference, or replace with: 'Ω is left-c.e. but not computable (this follows from the fact that from Ω one could decide the halting problem / from a left-c.e. approximation one could solve the halting set).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Symmetry of information stated with H(x) as conditioning
- **Category:** Supplement/remark error
- **Location:** supplement / 対称性
- **Detail:** The stated identity H(x,y)=H(x)+H(y|x,H(x))+O(1) is a correct form of symmetry of information (Gács), but the supplement presents it as a bare 'known' fact without noting that the analogous identity with plain K fails; as written it is acceptable, but the conditioning on H(x) (a number, not a string) should be clarified. This is borderline; the main concern is that it is stated without any indication of the meaning of H(y|x,H(x)).
- **Proposed fix:** Clarify: 'H(y \mid x, H(x))' means the prefix-free complexity of y given the pair (x, the integer H(x)) as oracle-free auxiliary input, i.e. H(y \mid \langle x, H(x)\rangle) up to O(1).
- **Reported:** 2026-10-28 (8ccef3d)
