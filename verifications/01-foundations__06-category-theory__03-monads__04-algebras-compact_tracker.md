# Verification tracker: `01-foundations/06-category-theory/03-monads/04-algebras-compact.html`

<!-- source: 01-foundations/06-category-theory/03-monads/04-algebras-compact.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems (varieties are monadic, CHaus is monadic) and their proofs are essentially correct, with the Beck condition-2 argument properly carried out and the closure-operator verification valid. The genuine problems are concentrated in the side material: the supplement's claim that integral domains and Noetherian rings lack free objects (hence are non-monadic for that reason) is false, and the ultrafilter-monad fact contains an unverified historical attribution and a slightly loose description of the algebra structure. The finitary-monad remark is acceptable.

## Issues

### ISSUE-0001 [Open] Integral domains and Noetherian rings do have free objects
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that forgetful functors for structures with conditional axioms (fields, integral domains, Noetherian rings) are not monadic, "many of them have no left adjoint". For integral domains and Noetherian rings this is false: the forgetful functor from integral domains (resp. Noetherian rings) to Set does have a left adjoint (free commutative ring without zero divisors modulo a maximal ideal avoiding the generators; free Noetherian ring exists). So the parenthetical "many have no left adjoint" is wrong for these examples. Only fields genuinely fail to have a free object on more than one generator.
- **Proposed fix:** Restrict the claim to fields: "条件付きの公理をもつ構造の忘却関手はモナド的でないことが多い。たとえば体の圏の忘却関手は左随伴をもたない（2元以上の集合上の自由な体が存在しない）。整域やネーター環は条件付きの公理をもつが、自由対象は存在し、モナド的でないことは別の理由（条件付き等式がベックの定理の条件を満たさないこと）による。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Ultrafilter monad algebras described too loosely
- **Category:** Unsupported fact
- **Location:** cat:ultrafilter-monad
- **Detail:** The fact states the algebras are "maps βX→X sending each ultrafilter to a limit point, satisfying the monad axioms". As stated this is imprecise: an arbitrary choice of a limit point for each ultrafilter need not satisfy the monad axioms; the algebra structure is precisely a map βX→X that is a monad algebra (equivalently a compact Hausdorff convergence structure). The phrasing "各超フィルターに極限点を一つ対応させる写像で、モナドの公理を満たすもの" is acceptable, but the sentence "コンパクト性は極限の存在、ハウスドルフ性は一意性" combined with the earlier description could mislead; more importantly the attribution "E. Manes 1969 (未確認)" is stated without verification. The mathematical content (algebras = compact Hausdorff spaces) is correct, but the unverified attribution is a stated-only claim.
- **Proposed fix:** State the result cleanly: "このモナド（超フィルターのモナド）の代数の圏はコンパクトハウスドルフ空間の圏と同値（実際同型）である。代数構造 βX→X は各超フィルターにその収束点を対応させる写像で、モナドの公理が収束の公理に対応する。" Remove or verify the historical attribution.
- **Reported:** 2026-10-28 (8ccef3d)
