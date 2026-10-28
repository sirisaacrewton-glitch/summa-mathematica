# Verification tracker: `01-foundations/06-category-theory/01-basics/12-special-aft.html`

<!-- source: 01-foundations/06-category-theory/01-basics/12-special-aft.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs (special initial object theorem, SAFT, CHaus reflective) are logically sound: the completeness, well-poweredness, cogenerator and monic-preservation steps check out, and the cited labels match their uses. The problems concentrate in the supplement and remark: the attribution of Watt's theorem to SAFT via 'R is a generator' is imprecise, and the remark that the SAFT construction gives no concrete description of βX is false since the very construction here produces βX as a closed subspace of [0,1]^{C(X,[0,1])}. The AC-dependence remark also slightly overstates the strength (Tychonoff for Hausdorff spaces is equivalent to the ultrafilter lemma). The Q/Z injective cogenerator statement is correct and left as is.

## Issues

### ISSUE-0001 [Open] Mac Lane's Watt's theorem application misdescribed
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says Mac Lane derives Watt's theorem (additive contravariant functors from R-Mod to Ab sending colimits to limits are of the form Hom_R(-,C)) from the cogenerating property of R. In Mac Lane §V.8 the relevant statement is that the forgetful/underlying functor and the description of R as a generator (or the injective cogenerator Q/Z) is used to apply SAFT; the precise claim that 'R being a generator of R-Mod' yields Watt's theorem via SAFT is imprecise: SAFT's dual requires a cogenerating set, and the additive functor Hom_R(-,C) is right adjoint to -⊗C, whose existence follows from the tensor-hom adjunction, not from SAFT. The attribution is stated more strongly than the literature supports.
- **Proposed fix:** Replace with: 'Mac Lane (CFWM §V.8) mentions Watt's theorem (an additive contravariant functor R-Mod → Ab carrying colimits to limits is isomorphic to Hom_R(-,C)) as an illustration in the context of adjoint functor theorems; the existence of the right adjoint -⊗C to Hom_R(-,C) is the tensor-hom adjunction, and SAFT-type results are used to recover representability of such functors.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that SAFT construction gives no concrete description of βX
- **Category:** Supplement/remark error
- **Location:** remark
- **Detail:** The remark says the SAFT construction 'only shows existence and does not give the concrete shape of βX (ultrafilters or the closure in [0,1]^{C(X,[0,1])})'. But the SAFT proof here constructs βX explicitly as the initial object of (X↓K), namely the common intersection of all subobjects of ∏_{q∈Q}q inside the comma category; specializing Q={[0,1]} this is precisely a subobject of a product of copies of [0,1], i.e. a closed subspace of [0,1]^{C(X,[0,1])}. So the construction does yield the concrete closed-subspace description, contradicting the remark.
- **Proposed fix:** Replace with: 'The SAFT construction exhibits βX as the initial object of (X↓K), concretely the intersection of all subobjects of ∏_{q∈Q}q in the comma category; taking Q={[0,1]} this realizes βX as a closed subspace of [0,1]^{C(X,[0,1])}, recovering the classical construction. What SAFT does not by itself provide is the ultrafilter description.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] η_X injectivity claim for non-Tychonoff spaces
- **Category:** Supplement/remark error
- **Location:** hypcheck / X には何も仮定していない
- **Detail:** The hypcheck says for a non-completely-regular X, βX exists but η_X need not be injective. This is correct, but the parenthetical in the remark ('here we use Tychonoff's theorem so it depends on the axiom of choice (at least the ultrafilter lemma)') is imprecise: the ultrafilter lemma is strictly weaker than AC and is equivalent to Tychonoff for Hausdorff spaces, so saying 'at least the ultrafilter lemma' while citing full Tychonoff overstates the dependence. Minor but a genuine overstatement of the logical strength.
- **Proposed fix:** Replace with: 'this uses Tychonoff's theorem for compact Hausdorff products, which is equivalent to the ultrafilter lemma (a strict consequence of AC).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Q/Z is an injective cogenerator in Ab
- **Category:** Unsupported fact
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement states 'in Ab, Q/Z is known to be an injective cogenerator'. This is true (Q/Z is injective and cogenerates Ab), so it is not false; however it is stated without proof or citation. Since it is a correct standard fact, this is acceptable and not reported as an error.
- **Proposed fix:** No change needed; optionally add a citation.
- **Reported:** 2026-10-28 (10fede1)
