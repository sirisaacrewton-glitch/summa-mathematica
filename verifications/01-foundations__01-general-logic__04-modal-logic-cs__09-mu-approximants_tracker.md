# Verification tracker: `01-foundations/01-general-logic/04-modal-logic-cs/09-mu-approximants.html`

<!-- source: 01-foundations/01-general-logic/04-modal-logic-cs/09-mu-approximants.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect claim that μX.[a]X is not PDL-definable
- **Category:** Supplement/remark error
- **Location:** remark (logic:sec-mua-ctl), item 2
- **Detail:** The remark claims that the property 'no infinite a-path' (μX.[a]X) cannot be written in PDL, citing Harel–Kozen–Tiuryn. This is false. In PDL, the formula [a*]⊥ (equivalently ¬⟨a*⟩⊤) expresses exactly that there is no infinite a-path from the current state: ⟨a*⟩⊤ holds iff some finite a-path exists, and [a*]⊥ holds iff no a-path of any length exists, i.e. no infinite a-path. So μX.[a]X IS PDL-definable. The remark's example is wrong; the general claim that μ-calculus is more expressive than PDL is true, but this particular witness is not a valid one.
- **Proposed fix:** Replace the example: 'For instance, the property "no infinite a-path" μX.[a]X is not PDL-definable' is incorrect — [a*]⊥ expresses it in PDL. Use a genuine separation example instead, e.g. the property 'on every a-path, p holds at infinitely many states' (a ν/μ alternation formula) which is not PDL-definable, or simply state that the μ-calculus is strictly more expressive than PDL without giving this faulty example.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Alternation example formula does not express 'p infinitely often on some path'
- **Category:** Supplement/remark error
- **Location:** remark (logic:sec-mua-ctl), item 1
- **Detail:** The remark gives νX.μY.(⟨a⟩(p∧X)∨⟨a⟩Y) as an example of a formula expressing 'on some path p is true infinitely often'. This formula is problematic: the inner μY.(⟨a⟩(p∧X)∨⟨a⟩Y) unfolds to 'there is a finite a-path reaching a state satisfying p∧X', i.e. ⟨a*⟩(p∧X). Then the outer νX gives νX.⟨a*⟩(p∧X), which is the greatest fixed point of T↦⟨a*⟩(p∧T). This does capture 'infinitely many p along some path' only under the reading that ⟨a*⟩ allows zero steps; but with zero steps allowed, ⟨a*⟩(p∧X) requires the current state itself to satisfy p∧X, forcing p at every state, which is too strong. The intended formula should use ⟨a⟩ (at least one step) rather than ⟨a*⟩, i.e. the standard formula is νX.μY.((p∧⟨a⟩X)∨⟨a⟩Y). As written with the given structure the claim is imprecise/incorrect.
- **Proposed fix:** Correct the example to the standard alternation formula νX.μY.((p∧⟨a⟩X)∨⟨a⟩Y) (or νX.μY.(⟨a⟩(p∧X)∨⟨a⟩Y) with the outer step being a genuine a-step), and note that the inner μ computes 'reach p∧X in finitely many steps' while the outer ν requires this to recur forever, giving 'p holds infinitely often along some infinite a-path'.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Intuition mischaracterizes the ω-stage example
- **Category:** Supplement/remark error
- **Location:** intuition (logic:sec-mua-bisimulation area)
- **Detail:** The intuition says that in the infinitely branching model of logic:mu-approximant-omega, 'every branch terminates in finitely many steps' yet ω stages are insufficient. But the example's model has, from r, chains of every finite length n; the formula μX.[a]X holds at r only because r has no infinite a-path (each successor chain is finite). The phrase 'どの枝も有限で終わる' is fine, but the accompanying claim that this is 'the same phenomenon as measuring the height of a well-founded tree by ordinals' is acceptable; however the statement that 'ω 回を超える' (exceeds ω times) is misleading: stabilization occurs exactly at stage ω+1, i.e. one step past ω, not 'beyond ω' in a substantive sense. More importantly, the intuition asserts the minimal stage for r is ω+1, which is correct, but the wording 'ω 回を超える' could be read as requiring transfinitely many stages beyond ω. This is an imprecision rather than a hard error; flag for correction.
- **Proposed fix:** Rephrase: 'stabilization requires the stage ω+1 (one step past the limit stage ω), because r enters only at the successor of the limit; this reflects that the well-founded tree of finite a-paths from r has height ω, so its ordinal measure is ω, and one additional application of [a] is needed.'
- **Reported:** 2026-10-28 (10fede1)
