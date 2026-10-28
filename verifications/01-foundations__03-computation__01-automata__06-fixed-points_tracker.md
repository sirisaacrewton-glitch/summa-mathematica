# Verification tracker: `01-foundations/03-computation/01-automata/06-fixed-points.html`

<!-- source: 01-foundations/03-computation/01-automata/06-fixed-points.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs (Knaster–Tarski, Kleene, contraction, CFG least fixed point, Arden corollary) are logically sound and the citations match their targets. The genuine problems are concentrated in the supplement and hypcheck: the Kleene fixed point theorem is stated for ω-complete posets without requiring a least element; the Lawvere fixed point theorem statement has an imprecise domain/codomain description; the hypcheck's remark that complement is 'not even monotone' conflates antitonicity with non-monotonicity; and Kleene's first recursion theorem is described as applying to merely continuous functionals rather than computable (effective) ones.

## Issues

### ISSUE-0001 [Open] Kleene fixed point theorem stated for ω-complete posets without bottom
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討
- **Detail:** The supplement says Kleene's fixed point theorem holds on any poset with a least element and suprema of increasing chains (ω-complete poset). But the iteration starts from the least element ⊥, so a least element is required; an ω-complete poset need not have one (e.g. the reals, or Z). The statement as written is missing the bottom-element hypothesis.
- **Proposed fix:** Replace with: 「クリーネの不動点定理は、最小元 $\bot$ をもち上向きの鎖の上限をもつ半順序（$\omega$ 完備半順序）で、$\bot$ からの反復の上限として同じ証明で成り立つ。」
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Lawvere fixed point theorem misstated (domain/codomain)
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement states Lawvere's theorem as: in a cartesian closed category, if $A\to B^{A}$ is 'pointwise surjective' then every endomorphism of $B$ has a fixed point. The correct statement concerns a point-surjective map $A\to B^{A}$ (equivalently $A\times A\to B$); the conclusion is that every endomorphism $B\to B$ has a fixed point. The phrase '$A\to B^{A}$ が点ごとに全射' is the right domain but the surrounding wording ('$B$ の任意の自己射') is fine; however the parenthetical reading as '対偶' is imprecise: the contrapositive is that if $B$ has a fixed-point-free endomorphism (e.g. $\neg$), then no point-surjective $A\to B^{A}$ exists. This is essentially correct but the statement '$A\to B^{A}$ が点ごとに全射' should be '$A\times A\to B$ に対応する写像 $A\to B^{A}$ が点ごとに全射'. Minor imprecision, but the direction of the exponential is a genuine error risk.
- **Proposed fix:** Rewrite: 「デカルト閉圏において、写像 $A\to B^{A}$（すなわち $A\times A\to B$）が点ごとに全射なら、$B$ の任意の自己射 $B\to B$ は不動点をもつ。対偶として、不動点をもたない自己射（例：$\neg$）が存在すれば、点ごとに全射な $A\to B^{A}$ は存在しない。」
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Claim that complement is 'not even monotone' is imprecise
- **Category:** Supplement/remark error
- **Location:** hypcheck / 単調性・連続性
- **Detail:** The hypcheck says 'complement is not even monotone (the equation $X=\Sigma^{\ast}\setminus X$ has no solution)'. Complement is antitone (order-reversing), not 'not monotone' in the sense of failing monotonicity arbitrarily; and the parenthetical about no solution is a separate fact. The claim conflates antitonicity with non-monotonicity. Also the equation $X=\Sigma^{\ast}\setminus X$ indeed has no solution, which is correct, but the reason given ('complement is not even monotone') does not establish it.
- **Proposed fix:** Replace with: 「補集合は反単調（順序を逆転する）であり単調ではない。たとえば $X=\Sigma^{\ast}\setminus X$ は解をもたない（$w\in X$ と $w\notin X$ が同値になる）。」
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Kleene's first recursion theorem described as 'continuous functional'
- **Category:** Supplement/remark error
- **Location:** supplement / クリーネの第一再帰定理
- **Detail:** The supplement says the least fixed point of a 'computable functional (a continuous map from partial functions to partial functions)' is a computable partial function. Kleene's first recursion theorem requires the functional to be effective (computable), not merely continuous; continuity alone does not guarantee the least fixed point is computable. The text does say 'computable functional' but then parenthetically equates it with 'continuous map', which is the error: continuity is necessary but not sufficient.
- **Proposed fix:** Replace the parenthetical with: 「計算可能な汎関数（計算可能で連続な写像）の最小不動点は計算可能な部分関数である」, dropping the identification of 'computable' with 'continuous'.
- **Reported:** 2026-10-28 (8ccef3d)
