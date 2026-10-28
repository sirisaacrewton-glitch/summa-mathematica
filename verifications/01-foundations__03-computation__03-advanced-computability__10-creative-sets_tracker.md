# Verification tracker: `01-foundations/03-computation/03-advanced-computability/10-creative-sets.html`

<!-- source: 01-foundations/03-computation/03-advanced-computability/10-creative-sets.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs (productive/creative basics, creative ⇔ m-complete, Myhill isomorphism, 1-completeness, computable isomorphism to K) are logically sound, and the cited labels match their uses. The only genuine problem found is a historical/definitional overstatement in the supplement about how Post introduced simple sets; everything else checked out.

## Issues

### ISSUE-0001 [Open] Post's simple set was not introduced as 'c.e. non-computable not m-complete'
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that Post introduced simple sets as 'c.e. non-decidable sets that are not m-complete'. Historically Post (1944) introduced simple sets as c.e. sets whose complement is immune (infinite but containing no infinite c.e. subset); the point was to exhibit a c.e. non-computable set whose complement is not c.e., i.e. a non-decidable c.e. set not Turing-complete in the sense of having no c.e. complement. The characterization 'not m-complete' is a derived consequence (via productivity), not the definitional motivation, and the phrasing overstates/misattributes the historical intent.
- **Proposed fix:** 単純集合はポストが「補集合が無限だが認識可能な無限部分集合を含まない認識可能集合」として導入したもので、その補集合が認識可能でないことから非決定可能であり、生産的でないので $m$ 完全でもない。チューリング還元については単純集合では不十分で、$m$ 完全でもチューリング完全でもない認識可能集合の存在（\ref{comp:friedberg-muchnik}）が必要だった。
- **Reported:** 2026-10-28 (8ccef3d)
