# Verification tracker: `01-foundations/04-set-theory/04-consistency-proofs/02-absoluteness.html`

<!-- source: 01-foundations/04-set-theory/04-consistency-proofs/02-absoluteness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The proofs and citations on this page are essentially correct: the Δ₀ absoluteness machinery, the absoluteness of basic notions and of relations/functions, the R(ω) model theorem and the relative consistency corollary are all sound, and the cited labels match their use. The only genuine problems are in the closing supplement: the characterization of Δ₀ formulas as inspecting only 'finite depth' is inaccurate (iterated bounded quantifiers can reach arbitrary depth below the parameters), and the 'transitive classes = open sets' analogy is presented more strongly than warranted. Both should be softened/corrected as proposed.

## Issues

### ISSUE-0001 [Open] Δ₀ formulas are not literally 'local to finite depth'
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から：Δ₀ は「局所的な」性質
- **Detail:** The supplement claims that a Δ₀ formula 'only inspects the elements of the parameters, elements of elements, … to finite depth'. This is imprecise: a bounded quantifier `∃x∈y` ranges over all elements of `y`, and iterating bounded quantifiers (e.g. `∃x∈y ∃z∈x …`) can reach elements of arbitrarily large rank below `rank(y)`, not just a fixed finite depth. What is true is that the quantifiers are bounded by sets already available, so the truth depends only on the transitive closure of the parameters (which is contained in any transitive class containing them). The 'finite depth' phrasing is a false characterization.
- **Proposed fix:** Δ₀ 論理式の量化はすでに与えられた集合（パラメータの元、その元、…）に制限されているので、その真偽はパラメータの推移的閉包のみに依存する。推移的なクラスはパラメータの推移的閉包をすべて含むため、その中の住人は Δ₀ の性質を正しく判定できる。（「有限の深さだけを調べる」という言い方は正確ではない：有界量化子を繰り返せばパラメータよりランクの低い任意の深さに到達しうる。）
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Transitive classes as 'open sets' analogy is misleading
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The analogy 'transitive classes are open sets with respect to the membership relation' is not a correct mathematical statement: the membership relation is not a topology, and transitivity (∀x∈M ∀y∈x (y∈M)) is a closure-under-elements condition, not an openness condition. Presenting it as if it were a precise correspondence overstates the analogy.
- **Proposed fix:** This is only a heuristic analogy: transitivity (every element of a member of M is again in M) plays a role similar to 'being closed downward', so that Δ₀ properties, whose quantifiers stay inside the parameters, are preserved. It is not a literal topological statement.
- **Reported:** 2026-10-28 (10fede1)
