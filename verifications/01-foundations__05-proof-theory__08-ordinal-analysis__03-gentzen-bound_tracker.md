# Verification tracker: `01-foundations/05-proof-theory/08-ordinal-analysis/03-gentzen-bound.html`

<!-- source: 01-foundations/05-proof-theory/08-ordinal-analysis/03-gentzen-bound.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (embedding lemma, prg cut elimination, boundedness lemma, Gentzen bound and corollary) is logically sound and its citations match the label table; the proofs and hypcheck are acceptable. The genuine problems concentrate in the supplement: the claim that the uniform-TI bound transfers to individual instances is a logical non sequitur, and the historical/technical remarks (Gentzen 1936 formulation, attribution of the ω-rule method to Schütte, and the Hardy/fast-growing hierarchy bound for provably total functions) are imprecise or overstated. No issues were found in the theorem/proof environments themselves.

## Issues

### ISSUE-0001 [Open] Uniform TI does not imply the individual-instance bound
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The bullet claims that since the individual case follows from the uniform case by substituting A for X, "the bound for the uniform case is also a bound for the individual case." This is a non sequitur. The uniform statement PA(X) ⊢ TI[≺] is *stronger* than the individual statement PA ⊢ Prog[≺,A] → ∀x A(x); a stronger hypothesis yields a weaker conclusion, so the bound obtained from the uniform hypothesis does not transfer to the individual hypothesis. (Indeed the individual case is the weaker assumption, so it could in principle allow larger order types.) The parenthetical hedge contradicts the main assertion and does not repair it.
- **Proposed fix:** Replace with: "一様な超限帰納法 TI[≺] が PA(X) で証明できれば、X に任意の論理式 A を代入して個別の超限帰納法 Prog[≺,A]→∀x A(x) が PA で証明できる。したがって一様な場合の限界（|≺|<ε₀）は個別の場合にもそのまま成り立つ。逆は一般には成り立たず、個別の論理式についての限界は一様な場合より強い制限を与えうる（別の議論を要する）。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Gentzen 1936 did not use PRA plus transfinite induction
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果, ゲンツェンの無矛盾性証明
- **Detail:** The text says Gentzen (1936) proved Con(PA) in "PRA plus transfinite induction up to ε₀ (for quantifier-free formulas)." Gentzen's original 1936 consistency proof used primitive recursive arithmetic together with transfinite induction up to ε₀ (over a primitive recursive well-ordering); the precise calibration as "PRA + TI(ε₀) restricted to quantifier-free formulas" is a later sharpening (e.g. Kreisel), and the parenthetical restriction is not part of Gentzen's original statement. As written the attribution is imprecise/overstated.
- **Proposed fix:** Replace with: "ゲンツェン（1936）は、PA の証明に ε₀ 未満の順序数を割り当て、カットを減らす変換で順序数が減ることを示して、原始再帰算術に ε₀ までの超限帰納法を加えた体系で Con(PA) を証明した。（ε₀ までの超限帰納法を量化子のない論理式に制限すれば十分であることは後の精密化による。）"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Wrong attribution of the ω-rule presentation to Schütte
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果, ゲンツェンの無矛盾性証明
- **Detail:** The sentence "本ページの方法（ω 規則による無限の導出）は、シュッテらによる後の整理である" attributes the ω-rule/infinite-derivation method to Schütte. The ω-rule and infinite derivations go back to Hilbert–Bernays (and Tait, Lopez-Escobar); Schütte's contribution is the cut-elimination for ω-logic and the ordinal analysis via the ω-rule, not the introduction of the method. The attribution as stated is historically inaccurate.
- **Proposed fix:** Replace with: "本ページの方法（ω 規則による無限の導出とそのカット除去）は、ヒルベルト–ベルナイスの ω 規則に始まり、シュッテらによるカット除去の整備を経て定式化されたものである。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Hardy hierarchy bound for provably total functions is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果, 証明可能な再帰関数
- **Detail:** The claim that functions whose totality is provable in PA are bounded by functions of the fast-growing (or Hardy) hierarchy indexed below ε₀ is stated too loosely: the correct statement is that every PA-provably total recursive function is eventually dominated by some F_{α} with α<ε₀ (equivalently, is primitive recursive in some such F_{α}); it is not true that a single fixed index below ε₀ bounds all of them, and the Hardy hierarchy H_{α} with α<ε₀ consists of functions that are themselves primitive recursive, so it cannot dominate all PA-provably total functions (e.g. Ackermann-type functions). The parenthetical "ハーディ階層など" is thus misleading.
- **Proposed fix:** Replace with: "同じ方法で、PA で全域性が証明できる再帰関数は、ε₀ 未満の順序数で添字付けた急増加階層 F_{α}（α<ε₀）のいずれかで最終的に支配される（より正確には、ある α<ε₀ について F_{α} で原始再帰的に計算できる）ことが示せる（新井の本の §8.4.3）。"
- **Reported:** 2026-10-28 (8ccef3d)
