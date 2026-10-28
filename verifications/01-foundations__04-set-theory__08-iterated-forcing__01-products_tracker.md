# Verification tracker: `01-foundations/04-set-theory/08-iterated-forcing/01-products.html`

<!-- source: 01-foundations/04-set-theory/08-iterated-forcing/01-products.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] MA(ω1) does not imply products of c.c.c. posets are c.c.c.
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果
- **Detail:** The supplement claims that under MA(ω₁) the product of c.c.c. p.o.s is c.c.c. This is false. MA(ω₁) is itself equivalent to the statement that the product of any family of c.c.c. p.o.s of size < 2^{ℵ₀} is c.c.c. (the product form of MA), but for arbitrary (even two) c.c.c. p.o.s the product need not be c.c.c. even under MA(ω₁). For example, under MA(ω₁) one can have c.c.c. p.o.s whose product collapses ω₁ (e.g. a Suslin tree forcing is c.c.c. and its square is not c.c.c.; more generally the two-step iteration of c.c.c. forcing can fail c.c.c.). The correct statement is that MA(ω₁) is equivalent to: the product of fewer than 2^{ℵ₀} c.c.c. p.o.s is c.c.c. (and this requires the size restriction).
- **Proposed fix:** 一般に c.c.c. な p.o. の積は c.c.c. とは限らない。しかし $\mathrm{MA}(\omega_{1})$ は「サイズが $2^{\aleph_{0}}$ 未満の c.c.c. な p.o. の族の積は c.c.c. である」ことと同値であることが知られている（積の形の MA）。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] P1 ∈ M is not what makes 1⇒2 work; the point is P1 is a check-name
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The supplement says that in 1⇒2 of the product lemma, 'P₁ ∈ M (P₁ belongs to the base model) is essential'. This is imprecise/misleading. The proof of 1⇒2 uses that D ∈ M[G₀] is a name τ ∈ M^{P₀} and that P₁ is a fixed p.o. of M so that 'q₁ ∈ τ' and 'q₁ ≤₁ r₁' are decided in M. The essential point is that the second stage is the trivial name Q̇ = P̌₁ (a check-name), i.e. P₁ is not modified by G₀; merely 'P₁ ∈ M' is not the operative hypothesis (any p.o. in M is in M). The statement as written overstates/obscures the real hypothesis.
- **Proposed fix:** 積の補題の 1 ⇒ 2 では、第二段階が $M$ の固定された p.o. $\PP_{1}$ の標準的な名前 $\check{\PP}_{1}$ で与えられていること（つまり $\PP_{1}$ が $G_{0}$ によって変形されないこと）が本質的である。一般の二段階反復では第二段階は $M[G_{0}]$ に属する名前 $\dot{\mathbb{Q}}$ で与えられ、$\PP_{0}\times\PP_{1}$ はその特別な場合（$\dot{\mathbb{Q}}=\check{\PP}_{1}$）である。
- **Reported:** 2026-10-28 (8ccef3d)
