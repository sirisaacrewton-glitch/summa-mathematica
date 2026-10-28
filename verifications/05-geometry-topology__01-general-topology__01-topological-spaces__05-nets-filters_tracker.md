# Verification tracker: `05-geometry-topology/01-general-topology/01-topological-spaces/05-nets-filters.html`

<!-- source: 05-geometry-topology/01-general-topology/01-topological-spaces/05-nets-filters.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the net/filter definitions, the closure and continuity characterizations, the cluster-point/subnet theorem, the first-countable proposition, and the ultrafilter-cluster theorem are all sound, and the hypcheck comments are accurate. The main genuine problem is in the supplement: the assertion that the net-closure '⇒' direction fails without choice is false—the result is a ZF theorem, and the text's own correspondence proposition shows how to build the net without choice. A secondary, milder imprecision concerns the ω₁ example's justification (regularity of ω₁). No issues in the proofs or citations were found.

## Issues

### ISSUE-0001 [Open] Claim that net-closure's ⇒ direction fails without choice
- **Category:** Supplement/remark error
- **Location:** supplement (選択公理 bullet)
- **Detail:** The supplement says the '⇒' direction of \ref{top:net-closure} 'is a form that generally fails without choice (one must choose points of the net)'. This is misleading: the net-closure theorem is provable in ZF. Indeed the proof given uses only choosing one point from each nonempty set N∩A; but one can instead use the canonical net indexed by N(x) with a definable choice, or more simply the filter formulation. In fact x∈cl(A) iff {N∩A : N∈N(x)} is a filter base is a ZF theorem, and from a filter base one builds a net without choice (as in the correspondence proposition, where the text itself notes '選択は不要'). So the statement that the ⇒ direction 'generally fails without choice' is false; the theorem holds in ZF.
- **Proposed fix:** Replace with: 'The ⇒ direction of \ref{top:net-closure} as written appears to use choice to pick x_{N}∈N∩A, but the statement itself is provable in ZF: x∈cl(A) iff {N∩A : N∈N(x)} is a filter base, and from this filter base one constructs a net converging to x without any choice (cf. the correspondence proposition, where no choice is needed). Thus the net-closure characterization does not require choice.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] ω₁ example: 'sequences below ω₁ do not converge to ω₁' needs the correct justification
- **Category:** Supplement/remark error
- **Location:** supplement (点列では足りない例 bullet)
- **Detail:** The claim that a sequence of ordinals below ω₁ does not converge to ω₁ is correct, but the stated reason 'the supremum of a countable set is below ω₁' is the right idea only because ω₁ is regular (uncountable cofinality). The citation \ref{set:page-cofinality} supports this, so the mathematical content is fine; however the phrasing '可算集合の上限は ω₁ 未満' is correct precisely because ω₁ has uncountable cofinality, which should be stated. As written it is acceptable but slightly imprecise about why countability matters (a countable set of ordinals below ω₁ has supremum < ω₁ since ω₁ is regular). This is borderline; flagging as medium.
- **Proposed fix:** State explicitly: 'since ω₁ is regular (has uncountable cofinality), the supremum of any countable set of ordinals below ω₁ is again below ω₁, so no sequence from below ω₁ converges to ω₁.'
- **Reported:** 2026-10-28 (8ccef3d)
