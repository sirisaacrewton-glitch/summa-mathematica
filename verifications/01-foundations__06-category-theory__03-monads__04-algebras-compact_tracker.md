# Verification tracker: `01-foundations/06-category-theory/03-monads/04-algebras-compact.html`

<!-- source: 01-foundations/06-category-theory/03-monads/04-algebras-compact.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main proofs (varieties are monadic, CHaus is monadic) are essentially correct and the cited labels match their uses. The remaining genuine problems are in the supplement: the claim that integral domains and Noetherian rings lack free objects (ISSUE-0001, still open), the loose description of ultrafilter-monad algebras (ISSUE-0002, still open), and the imprecise use of complete Boolean algebras as an example of a missing free algebra and the finitary-monad/Lawvere-theory remark.

## Issues

### ISSUE-0001 [Open] Integral domains and Noetherian rings do have free objects
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that forgetful functors for structures with conditional axioms (fields, integral domains, Noetherian rings) are not monadic, "many of them have no left adjoint". For integral domains and Noetherian rings this is false: the forgetful functor from integral domains (resp. Noetherian rings) to Set does have a left adjoint (free commutative ring without zero divisors modulo a maximal ideal avoiding the generators; free Noetherian ring exists). So the parenthetical "many have no left adjoint" is wrong for these examples. Only fields genuinely fail to have a free object on more than one generator.
- **Proposed fix:** Restrict the claim to fields: "条件付きの公理をもつ構造の忘却関手はモナド的でないことが多い。たとえば体の圏の忘却関手は左随伴をもたない（2元以上の集合上の自由な体が存在しない）。整域やネーター環は条件付きの公理をもつが、自由対象は存在し、モナド的でないことは別の理由（条件付き等式がベックの定理の条件を満たさないこと）による。"
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still says structures with conditional axioms (fields, integral domains, Noetherian rings) have forgetful functors that are not monadic and 'many have no left adjoint'; for integral domains and Noetherian rings a left adjoint does exist, so the parenthetical remains false.

### ISSUE-0002 [Open] Ultrafilter monad algebras described too loosely
- **Category:** Unsupported fact
- **Location:** cat:ultrafilter-monad
- **Detail:** The fact states the algebras are "maps βX→X sending each ultrafilter to a limit point, satisfying the monad axioms". As stated this is imprecise: an arbitrary choice of a limit point for each ultrafilter need not satisfy the monad axioms; the algebra structure is precisely a map βX→X that is a monad algebra (equivalently a compact Hausdorff convergence structure). The phrasing "各超フィルターに極限点を一つ対応させる写像で、モナドの公理を満たすもの" is acceptable, but the sentence "コンパクト性は極限の存在、ハウスドルフ性は一意性" combined with the earlier description could mislead; more importantly the attribution "E. Manes 1969 (未確認)" is stated without verification. The mathematical content (algebras = compact Hausdorff spaces) is correct, but the unverified attribution is a stated-only claim.
- **Proposed fix:** State the result cleanly: "このモナド（超フィルターのモナド）の代数の圏はコンパクトハウスドルフ空間の圏と同値（実際同型）である。代数構造 βX→X は各超フィルターにその収束点を対応させる写像で、モナドの公理が収束の公理に対応する。" Remove or verify the historical attribution.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The fact still describes algebras loosely as 'maps sending each ultrafilter to a limit point satisfying the monad axioms'; the attribution to Manes (1969) is now given with a precise reference, which is acceptable, but the loose phrasing of the algebra structure remains imprecise.

### ISSUE-0003 [Open] Complete Boolean algebras do not show free algebras may fail to be sets
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that when infinitary operations are allowed the free algebra may fail to be a set, citing complete Boolean algebras. The free complete Boolean algebra on a set of generators does exist as a set (it is a large but genuine set); what fails is that the forgetful functor from complete Boolean algebras to Set has no left adjoint (Gaifman–Hales). So the example does not illustrate 'free algebra is not a set'.
- **Proposed fix:** Replace with: '無限の演算を許すと、自由代数が存在しなくなることがある（完備ブール代数の圏の忘却関手は左随伴をもたない、Gaifman–Hales）。'
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0004 [Open] Finitely presentable monads vs Lawvere theories
- **Category:** Supplement/remark error
- **Location:** supplement / 類似の定理
- **Detail:** The supplement says the algebras of a *finitary* monad on Set form a variety of algebras 'for some type and equations'. This is correct only for monads of finite rank (finitary monads), and the parenthetical '有限個の変数の項で決まるもの' is a vague rendering; as stated ('有限的') it is acceptable, but the claim that the ultrafilter monad is 'not finitary' and hence has infinitary operations is correct. No error if '有限的' means finitary; flagging only the imprecision that finitary monads correspond to Lawvere theories with finite products, not merely 'some type and equations'.
- **Proposed fix:** State precisely: '有限階のモナド（有限個の変数をもつ項で演算が定まるもの）の代数の圏は、有限積をもつローヴェア理論のモデル、すなわちある型と等式の代数系の圏と同型になる。'
- **Reported:** 2026-10-28 (048145a)
