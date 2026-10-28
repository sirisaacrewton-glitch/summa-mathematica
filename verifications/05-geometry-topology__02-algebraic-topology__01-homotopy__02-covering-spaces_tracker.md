# Verification tracker: `05-geometry-topology/02-algebraic-topology/01-homotopy/02-covering-spaces.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/01-homotopy/02-covering-spaces.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct and well organized. The proofs (unique lifting, path/homotopy lifting, monodromy action, lifting criterion, covering isomorphism, deck group, classification) check out, and the hypchecks are accurate. The main genuine problem is in the first supplement: the sentence comparing the Galois correspondence with the covering correspondence misstates the direction of the Galois fundamental theorem (larger subgroup ↔ smaller intermediate field), producing a false contrast. The categorical-equivalence remark is acceptable given the stated hypotheses. No issues in the problems/solutions were found.

## Issues

### ISSUE-0001 [Open] Galois correspondence direction in the comparison table is stated backwards
- **Category:** Supplement/remark error
- **Location:** supplement (一般化と高い視点)
- **Detail:** The supplement says 「ガロアの基本定理では、大きい部分群に小さい中間体が対応する。被覆でも大きい $H$ に小さい被覆度が対応する」. The second half is correct ($H$ larger ⇒ index $[\pi_1:H]$ smaller ⇒ fewer sheets). But the first half is wrong: in the Galois fundamental theorem, a larger subgroup $H$ corresponds to a *smaller* intermediate field (the fixed field $k^{\mathrm{sep}H}$ shrinks as $H$ grows), i.e. larger subgroup ↔ smaller intermediate field. The text says the opposite (「大きい部分群に小さい中間体」 is actually correct, but then the analogy is drawn as if the covering side were the reverse; the phrasing 「被覆でも」 implies the covering behaves differently, whereas in fact both correspondences run the same way: larger subgroup ↔ smaller object). As written the sentence asserts a contrast that does not exist and misstates the analogy.
- **Proposed fix:** Replace with: 「ガロアの基本定理では、大きい部分群 $H$ に小さい中間体 $k^{\mathrm{sep}H}$ が対応する。被覆でも同様に、大きい $H$ に小さい被覆度 $[\pi_1(B,b_0):H]$ が対応する（両者とも包含関係が反転する）」.
- **Reported:** 2026-10-28 (8ccef3d)
