# Verification tracker: `01-foundations/04-set-theory/01-basics/04-ordinals.html`

<!-- source: 01-foundations/04-set-theory/01-basics/04-ordinals.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The proofs on this page are careful and well-supported by the cited results; the ordinal basics, the well-ordering theorem, Burali-Forti, and the sup/min results are logically sound. The genuine problems are concentrated in the supplements and examples: (1) the claim that $V_{\omega+\omega}$ is a model of $\mathsf{Z}$ in which $\omega+\omega$ is missing is false, since $\omega+\omega\in V_{\omega+\omega}$; (2) the Foundation-based characterization of ordinals as 'transitive sets whose elements are transitive' is false without linearity (counterexample $\{\varnothing,\{\{\varnothing\}\}\}$); (3) the statement that existence of a limit ordinal is 'equivalent to the Axiom of Infinity' is imprecise and should refer specifically to $\omega$/inductive sets. No issues were found in the proved theorems themselves.

## Issues

### ISSUE-0001 [Open] Z (Zermelo set theory) cannot prove the order-type theorem — claim about V_{ω+ω}
- **Category:** Supplement/remark error
- **Location:** supplement after set:ordinal-type (「置換公理を外すと」)
- **Detail:** The supplement claims that in Zermelo set theory $\mathsf{Z}$ (ZF minus Replacement) the theorem fails, and offers $V_{\omega+\omega}$ as a model of $\mathsf{Z}$ in which the well-ordering of type $\omega+\omega$ exists but the ordinal $\omega+\omega$ is not an element. This is wrong: $V_{\omega+\omega}$ satisfies Zermelo set theory and contains $\omega+\omega$ as an element (indeed $\omega+\omega\in V_{\omega+\omega}$ since $\omega+\omega$ has rank $\omega+\omega$, and $V_{\omega+\omega}$ contains all sets of rank $<\omega+\omega$). So $V_{\omega+\omega}$ is not a counterexample; the standard fact is that $V_{\omega+\omega}$ is a model of $\mathsf{Z}$ in which the theorem holds for all its well-orderings. The genuine failure of the theorem in $\mathsf{Z}$ requires a different model (e.g. $V_{\omega\cdot 2}$ or a model built so that some well-ordering's type is not a set), and the specific example given is false.
- **Proposed fix:** Replace the example with a correct one, e.g.: "In $\mathsf{Z}$ the theorem can fail: in the model $V_{\omega\cdot 2}$ (or $V_{\omega+\omega}$ is *not* such a model, since $\omega+\omega\in V_{\omega+\omega}$), one can have a definable well-ordering whose order type is not realized by any set in the model. The standard reference is that $\mathsf{Z}$ does not prove the well-ordering theorem's order-type existence; $V_{\omega+\omega}$ satisfies the theorem for all its internal well-orderings." At minimum, delete the false claim that $\omega+\omega\notin V_{\omega+\omega}$.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Foundation-free characterization of ordinals is misstated
- **Category:** Supplement/remark error
- **Location:** supplement after set:ordinal-basic (「基礎の公理を仮定すると」)
- **Detail:** The supplement says: under Foundation, "ordinal ⇔ transitive set all of whose elements are also transitive" (with well-orderedness by $\in$ following automatically). This is imprecise/false as stated: a transitive set all of whose elements are transitive need not be linearly ordered by $\in$ even with Foundation. For example, with Foundation, $x=\{\varnothing,\{\{\varnothing\}\}\}$ is transitive and both its elements are transitive, yet $\varnothing$ and $\{\{\varnothing\}\}$ are $\in$-incomparable, so $x$ is not an ordinal. The correct characterization under Foundation is: $x$ is an ordinal iff $x$ is transitive, linearly ordered by $\in$, and every element of $x$ is transitive (equivalently, $x$ is a transitive set of transitive sets that is linearly ordered by $\in$). The claim that well-orderedness follows automatically from transitivity alone is false.
- **Proposed fix:** Correct to: "Under Foundation, $x$ is an ordinal iff $x$ is a transitive set, every element of $x$ is transitive, and $\in$ is a linear order on $x$ (equivalently, $x$ is a transitive set of transitive sets linearly ordered by $\in$). Foundation then upgrades linear order to well-order. Transitivity alone (even with all elements transitive) does not suffice: $\{\varnothing,\{\{\varnothing\}\}\}$ is a counterexample."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that existence of a limit ordinal is equivalent to Infinity
- **Category:** Supplement/remark error
- **Location:** example under set:limit-ordinal
- **Detail:** The example states: "With the axioms so far (without Infinity), the existence of a limit ordinal cannot be proved. The existence of the least limit ordinal $\omega$ is equivalent to the Axiom of Infinity." The second sentence is overstated: the Axiom of Infinity (as usually formulated, e.g. existence of an inductive set) implies the existence of $\omega$, but the existence of *some* limit ordinal is not literally equivalent to Infinity in the sense of being interderivable over the other axioms in the exact form stated — one must be careful about which formulation of Infinity is meant. More importantly, the assertion "equivalent to the Axiom of Infinity" is imprecise: what is equivalent (over the remaining axioms) is the existence of an inductive set / of $\omega$, not merely of an arbitrary limit ordinal (e.g. one could postulate a limit ordinal without postulating $\omega$ as a set in some formulations). The safe correct statement is: the existence of $\omega$ (equivalently, of an inductive set) is exactly the Axiom of Infinity, and without it no limit ordinal can be proved to exist.
- **Proposed fix:** Replace with: "Without the Axiom of Infinity no limit ordinal can be proved to exist. The existence of the least limit ordinal $\omega$ is precisely the content of the Axiom of Infinity (existence of an inductive set)."
- **Reported:** 2026-10-28 (10fede1)
