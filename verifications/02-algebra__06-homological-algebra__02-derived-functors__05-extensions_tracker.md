# Verification tracker: `02-algebra/06-homological-algebra/02-derived-functors/05-extensions.html`

<!-- source: 02-algebra/06-homological-algebra/02-derived-functors/05-extensions.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Yoneda Ext requires enough projectives or injectives
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that Yoneda Ext can be defined without projective objects, so it makes sense in abelian categories that do not have enough projectives. This is misleading: the Yoneda construction of Ext^n as equivalence classes of n-fold exact sequences works in any abelian category, but the identification of this construction with the derived-functor Ext^n (and hence the group structure and the long exact sequences) requires the category to have enough projectives or enough injectives. Without that hypothesis the two notions can differ, so the statement as written is overstated.
- **Proposed fix:** Yoneda Ext is defined by n-fold exact sequences without choosing projective resolutions, so it makes sense in any abelian category. It agrees with the derived-functor Ext^n when the category has enough projectives or enough injectives; without that hypothesis the two can differ.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Group extensions classified by H^2 need the abelian kernel
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says that equivalence classes of group extensions of Π by a Π-module A with prescribed conjugation are classified by H^2(Π,A). This is correct only when A is abelian (a Π-module). The phrasing 'A を正規部分群とする' together with 'Π 加群 A' is fine, but the subsequent explanation that 'the central object is a group rather than a module' suggests the classification holds for non-abelian kernels, which is false: for non-abelian A the classification is by non-abelian H^2 (a pointed set, not a group). The sentence 'group extensions are classified by H^2 = Ext^2_{ZΠ}(Z,A) because the central object is a group' is imprecise.
- **Proposed fix:** For an abelian normal subgroup A with a prescribed Π-module structure, equivalence classes of extensions are classified by H^2(Π,A) ≅ Ext^2_{ZΠ}(Z,A). For non-abelian A the classification is by the non-abelian H^2, which is only a pointed set.
- **Reported:** 2026-10-28 (10fede1)
