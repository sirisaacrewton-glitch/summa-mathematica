# Verification tracker: `05-geometry-topology/03-algebraic-geometry/01-varieties/04-dimension.html`

<!-- source: 05-geometry-topology/03-algebraic-geometry/01-varieties/04-dimension.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Spec of a DVR is not a counterexample to openness of dimension
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that for non-finite-type schemes an open subset can have different dimension from the whole, and gives `Spec` of a DVR as an example: "1-dimensional but the open set consisting only of the generic point is 0-dimensional". But the generic point's closure is the whole scheme, so the open set {generic point} is irreducible of dimension 0, while the whole scheme has dimension 1. This is a genuine example of an open subset of smaller dimension, but the phrasing "有限型でないスキームでは" (for non-finite-type schemes) is misleading: the DVR example is affine (finite type over itself), and the phenomenon is really about non-*open* subsets or non-generic open sets. More importantly, the claim as stated is imprecise: for any scheme, dimension of an open subset can be smaller (e.g. a closed point's complement), but the standard fact is that for *irreducible* schemes, nonempty open subsets have the same dimension. The example is correct as a counterexample to "open subsets always have the same dimension" but the framing "有限型でない" is wrong since Spec of a DVR is finite type over itself and the failure is not about finite type.
- **Proposed fix:** Replace with: "一般のスキームでは開集合の次元が全体と異なることがある（例：$\operatorname{Spec}$ of a DVR は 1 次元だが、閉点の補集合である生成点だけの開集合は 0 次元）。ただし既約なスキームでは空でない開集合は同じ次元をもつ。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Nagata example does not show local vs global mismatch
- **Category:** Supplement/remark error
- **Location:** remark 永田の反例と普遍鎖状性 / item 1
- **Detail:** The remark says Nagata's example and the infinite-dimensional Noetherian ring "both show that dimension theory differs between 'local information near a point' and 'global information'". But Nagata's catenary counterexample is a Noetherian local domain where maximal chains of primes have different lengths — this is a failure of catenarity, not a local-vs-global discrepancy. The infinite-dimensional Noetherian ring shows dimension can be infinite, again not a local/global mismatch. The characterization is inaccurate.
- **Proposed fix:** Replace with: "いずれも、素イデアルの鎖の長さが素イデアルの選び方に依存しうること（鎖状性の失敗）や、次元が有限でないことがあることを示す。"
- **Reported:** 2026-10-28 (8ccef3d)
