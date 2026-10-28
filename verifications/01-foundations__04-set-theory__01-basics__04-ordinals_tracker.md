# Verification tracker: `01-foundations/04-set-theory/01-basics/04-ordinals.html`

<!-- source: 01-foundations/04-set-theory/01-basics/04-ordinals.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct and well-organized. The main genuine problem is the example claiming that the existence of ω is equivalent to the Axiom of Infinity, which overstates the relationship (only one direction holds). The supplement about V_{ω+ω} as a Z-model witness is also imprecise, since V_{ω+ω} does contain ω+ω as an element, so it is not a valid counterexample to the theorem in Z. Other supplements and remarks (Foundation equivalence, ≤ notation, Burali-Forti history) are acceptable.

## Issues

### ISSUE-0001 [Open] Claim that existence of ω is equivalent to the Axiom of Infinity
- **Category:** Supplement/remark error
- **Location:** example (after set:limit-ordinal)
- **Detail:** The example states that the existence of the least limit ordinal ω is equivalent to the Axiom of Infinity. This is false as stated: the Axiom of Infinity (as usually formulated, e.g. ∃x(∅∈x ∧ ∀y∈x (y∪{y}∈x))) asserts the existence of an inductive set, which is far stronger than merely the existence of ω. The existence of ω is provable from Infinity, but Infinity is not provable from the existence of ω (an inductive set is not obtainable from ω without further axioms). So the two are not equivalent; only the implication 'Infinity ⇒ ω exists' holds.
- **Proposed fix:** Replace with: 「ここまでの公理（無限公理なし）では、極限順序数が存在することは証明できない。最小の極限順序数 $\omega$ の存在は無限公理から従う（逆に $\omega$ の存在から無限公理は導けない）。詳細は \fullref[ω]{set:omega} を参照。」
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] V_{ω+ω} as a model of Z and ω+ω not an element
- **Category:** Supplement/remark error
- **Location:** supplement (after set:ordinal-type)
- **Detail:** The supplement claims that in Z (ZF without Replacement) the theorem cannot be proved, citing V_{ω+ω} as a model of Z in which a well-ordering of type ω+ω exists but the ordinal ω+ω itself is not an element. This is imprecise/incorrect: V_{ω+ω} satisfies Z (indeed Z plus more), but it does contain ω+ω as an element, since ω+ω < ω+ω and V_{ω+ω} contains all ordinals below ω+ω. The correct witness for failure of the theorem in Z is a model where some well-ordering has no ordinal type in the model; V_{ω+ω} is not such a witness for the specific ordinal ω+ω. The stated counterexample is therefore not a counterexample.
- **Proposed fix:** Replace the example with a correct statement, e.g.: 「置換公理を除いたツェルメロ集合論 $\mathsf{Z}$ ではこの定理は証明できないことが知られている。たとえば $V_{\omega+\omega}$ は $\mathsf{Z}$ のモデルだが、型 $\omega+\omega$ をもつ整列集合の順序型 $\omega+\omega$ が $V_{\omega+\omega}$ に属するかどうかは別問題であり、この例を反例として用いることはできない。反例には置換公理が本質的に必要となる別のモデル構成を要する。」
- **Reported:** 2026-10-28 (8ccef3d)
