# Verification tracker: `01-foundations/04-set-theory/03-well-founded-sets/05-wf-recursion.html`

<!-- source: 01-foundations/04-set-theory/03-well-founded-sets/05-wf-recursion.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Height bound uses unstated well-orderability and is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement after set:relation-rank-basic (ランクの値域)
- **Detail:** The supplement claims: if |A|=κ then the height of (A,R) is < κ^{+}, and adds that the argument uses that A is well-orderable. Two problems. (1) The parenthetical justification is wrong: the range of the rank function is the image of A, so its cardinality is ≤ κ; the bound then follows from the fact that an ordinal of cardinality ≤ κ is < κ^{+}, which needs no well-ordering of A (the image is already a set of ordinals, hence well-ordered). (2) More importantly, the statement 'height < κ^{+}' is only true when κ is an aleph (an initial ordinal), i.e. when A is well-orderable; for a general set A of cardinality κ in ZF without choice, κ^{+} need not be defined as an aleph and the claim is not meaningful. The remark as written asserts the bound unconditionally while relegating well-orderability to a parenthetical, which is imprecise.
- **Proposed fix:** **ランクの値域.** (3) の順序数を $(A,R)$ の**高さ**という。$A$ が整列可能で $|A|=\kappa$（$\kappa$ をアレフととる）なら、高さは $\kappa^{+}$ より小さい：ランク関数の値域は $A$ の像なので濃度が $\kappa$ 以下の順序数の集合であり、濃度 $\kappa$ 以下の順序数は $\kappa^{+}$ 未満である。整列可能性を仮定しない一般の $A$ については、高さは $A$ の像の順序型として定まる順序数であり、$\kappa^{+}$ という形の評価はできない。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Kunen exercise attribution for reflection principle
- **Category:** Supplement/remark error
- **Location:** supplement after set:wf-minimal-element-zf (反映原理として)
- **Detail:** The supplement says the proof is 'a typical use of the Lévy–Montague reflection principle' and cites 'Kunen, Ch. III, Exercise 17'. The proof given is a direct ω-iteration of a reflecting ordinal, not an instance of the Lévy–Montague reflection theorem (which reflects a finite list of formulas across the whole hierarchy). Calling it 'a typical use of the reflection principle' overstates the connection; the argument is a bespoke 'reflection' construction. The attribution is at best loose and the claim that this is 'the reflection principle' is imprecise.
- **Proposed fix:** **反映原理との関係.** この証明は、「$\mathbf{X}$ に前者をもつかどうか」という性質を、ある集合 $R(\gamma)$ が正しく反映するように $\gamma$ を $\omega$ 回押し上げている。レヴィ＝モンタギューの反映原理そのもの（有限個の論理式を反映する順序数の存在）の適用ではないが、同じ「反映する順序数を押し上げる」アイデアの初等的な一例である。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that ∈-recursion needs ∈-induction schema without Infinity
- **Category:** Supplement/remark error
- **Location:** supplement after set:wf-recursion (無限公理を除くと)
- **Detail:** The supplement states: 'If one adopts the ∈-induction schema as an axiom, then recursion over ∈ can be justified without the axiom of infinity (Kunen, Ch. III, Exercise 19).' This is misleading. The construction of G(x) via approximations d_{x} = {x} ∪ cl(x) uses ω (the finite iteration defining cl(x)); without Infinity, cl(x) need not be a set, and adopting ∈-induction as a schema does not by itself supply the finite iterations needed to build the approximations. The recursion theorem over ∈ (set-like, well-founded) still requires the existence of the finite predecessor closures, which is exactly what Infinity provides here. So the claim that ∈-induction alone suffices is not supported.
- **Proposed fix:** **無限公理を除くと.** $\ZF^{-}-\mathrm{P}-\mathrm{Inf}$ では $\mathrm{cl}(x)$ が作れないため、この証明は通らない。$\in$-帰納法の図式を公理として採っても、近似を作るための有限回の前者閉包 $\mathrm{cl}(x)$ の存在は別途必要であり、無限公理（あるいは $\omega$ の存在）を仮定しない限り本定理の証明は正当化されない。
- **Reported:** 2026-10-28 (10fede1)
