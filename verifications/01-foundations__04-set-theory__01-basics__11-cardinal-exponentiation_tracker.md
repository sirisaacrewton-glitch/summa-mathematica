# Verification tracker: `01-foundations/04-set-theory/01-basics/11-cardinal-exponentiation.html`

<!-- source: 01-foundations/04-set-theory/01-basics/11-cardinal-exponentiation.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Wrong justification for 2^{aleph_0} ≠ aleph_omega
- **Category:** Supplement/remark error
- **Location:** supplement after set:ch-independence / 'ZFC で決まること'
- **Detail:** The supplement claims that König's theorem gives cf(2^{aleph_0}) > aleph_0, 'so 2^{aleph_0} ≠ aleph_omega'. The inequality cf(2^{aleph_0}) > aleph_0 is correct, but it does not exclude aleph_omega: aleph_omega is a limit cardinal of cofinality aleph_0, so cf(aleph_omega) = aleph_0, which is not > aleph_0. The correct reason 2^{aleph_0} ≠ aleph_omega is König's theorem in the form 2^{aleph_0} ≠ aleph_omega (i.e. cf(2^{aleph_0}) > aleph_0 combined with cf(aleph_omega) = aleph_0), or directly König's inequality aleph_omega^{aleph_0} > aleph_omega. As written, the stated implication is a non sequitur.
- **Proposed fix:** ケーニッヒの定理から $\cf(2^{\aleph_{0}})>\aleph_{0}$（\ref{set:konig-cf-power}）であり、一方 $\cf(\aleph_{\omega})=\aleph_{0}$ なので $2^{\aleph_{0}}\neq\aleph_{\omega}$ である（より直接にはケーニッヒの不等式 $\aleph_{\omega}^{\aleph_{0}}>\aleph_{\omega}$ からも従う）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Easton's theorem overstated as 'no constraints other than monotonicity and cf'
- **Category:** Supplement/remark error
- **Location:** supplement after set:ch-independence / 'ZFC で決まること'
- **Detail:** The supplement says that for the function κ ↦ 2^κ on regular cardinals, 'there are no constraints beyond monotonicity and this constraint (cf(2^κ) > κ)'. Easton's theorem concerns only regular cardinals and requires monotonicity (κ ≤ λ ⟹ 2^κ ≤ 2^λ) and König's constraint cf(2^κ) > κ; but it does not say anything about singular cardinals, and the statement as phrased ('正則基数上の関数') is acceptable only if restricted to regular cardinals. However the sentence '単調性とこの制約以外に ZFC から従う制約がない' is imprecise: Easton's theorem also requires that the prescribed function be defined on regular cardinals and satisfy 2^κ ≥ κ^+ (which follows from Cantor), and the constraint is cf(2^κ) > κ, not merely cf(2^{aleph_0}) > aleph_0. The phrasing 'この制約' refers to the single instance at aleph_0, which is not the general Easton constraint. This is an overstatement/imprecision.
- **Proposed fix:** 正則基数上の関数 $\kappa\mapsto 2^{\kappa}$ については、単調性（$\kappa\le\lambda\Rightarrow 2^{\kappa}\le 2^{\lambda}$）とケーニッヒの制約 $\cf(2^{\kappa})>\kappa$ を満たす任意の関数がイーストンの定理（\ref{set:easton}）により ZFC と両立する（ただし特異基数での値は別問題である）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Strong limit characterization: 'ω or beth_gamma' needs the cardinal to be a limit cardinal
- **Category:** Supplement/remark error
- **Location:** supplement after set:beth-properties / '強極限基数'
- **Detail:** The supplement states: '逆に無限の強極限基数は ω か、極限順序数 γ についての beth_γ の形をしている'. This is correct for infinite strong limit cardinals, but the phrase '無限の強極限基数' should be read as an infinite cardinal that is a strong limit. The claim is true, but the proof sketch given only shows that beth_gamma is a strong limit; the converse direction ('逆に') is asserted without argument. Since this is a supplement, the converse should be justified: if κ is an infinite strong limit cardinal, then either κ = ω or κ is a limit cardinal, and then κ = beth_gamma for some limit γ (by induction using that κ is a strong limit). The statement is not false, but it is stated without proof and the '逆に' direction is not established. This is a minor gap in a side remark.
- **Proposed fix:** 逆に $\kappa$ を無限の強極限基数とすると、$\kappa=\omega$ か、または $\kappa$ は極限基数で、超限帰納法により $\kappa=\beth_{\gamma}$ となる極限順序数 $\gamma$ が存在する（$\kappa$ が強極限であることから $\beth_{\alpha}<\kappa$ なる $\alpha$ の上限をとればよい）。
- **Reported:** 2026-10-28 (10fede1)
