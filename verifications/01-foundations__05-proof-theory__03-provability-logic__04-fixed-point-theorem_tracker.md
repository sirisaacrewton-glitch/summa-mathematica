# Verification tracker: `01-foundations/05-proof-theory/03-provability-logic/04-fixed-point-theorem.html`

<!-- source: 01-foundations/05-proof-theory/03-provability-logic/04-fixed-point-theorem.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, uniqueness proposition, Goldfarb's lemma, the special-case trace proof, and the first proof) is logically sound and the citations match their targets. The genuine problems are concentrated in the supplement and remark: the claim that $A=p$ shows modalization cannot be dropped is false (since $A=p$ has fixed point $\top$), the remark's specific 'degrees 2 and 5' claim and the description of the first proof's fixed point are imprecise/unsupported, and the Banach fixed point analogy is overstated. These are supplement/remark errors of kind 5.

## Issues

### ISSUE-0001 [Open] Claim that A=p shows modalization is necessary is wrong
- **Category:** Supplement/remark error
- **Location:** supplement (前提の検討), first bullet
- **Detail:** The supplement claims that for $A=p$ the formula $p\leftrightarrow A$ is a tautology and that no $p$-free $H$ satisfies $\vdash\boxdot(p\leftrightarrow H)\leftrightarrow\boxdot(p\leftrightarrow A)$. But $A=p$ gives $p\leftrightarrow A$ tautological, so $\boxdot(p\leftrightarrow A)$ is a theorem; taking $H=\top$ gives $\vdash\boxdot(p\leftrightarrow\top)\leftrightarrow\boxdot(p\leftrightarrow A)$ since both sides are theorems. So $A=p$ actually has a fixed point ($\top$), and this is not a valid example showing modalization cannot be dropped. (The second example $A=\neg p$ is fine: $\boxdot(p\leftrightarrow\neg p)$ is equivalent to $\bot$.)
- **Proposed fix:** Replace the $A=p$ example with a correct one, e.g.: "$A=p$ は $H=\top$ を不動点にもつので反例にならない。$A=\Box p\to p$ のような非様相化の例では..." or simply delete the $A=p$ sentence and keep only the $A=\neg p$ example, noting that $\boxdot(p\leftrightarrow\neg p)$ is equivalent to $\bot$ so no fixed point exists.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Wrong claim about modal degree of fixed points in remark
- **Category:** Supplement/remark error
- **Location:** remark 分解の選び方
- **Detail:** The remark says that different decompositions of the same $A$ can yield fixed points of very different modal degree, citing Boolos Ch.8 with an example giving degrees 2 and 5. But by uniqueness (\ref{pt:fixed-point-uniqueness.2}) any two fixed points are $\mathsf{GL}$-provably equivalent, and for closed formulas provable equivalence forces equal traces; the modal degree of a closed formula is not determined by its trace, so two provably equivalent closed formulas can indeed have different degrees. However the specific claim that Boolos gives an example with degrees 2 and 5 for the same $A$ is not verifiable and the phrasing 'greatly varies' is an overstatement that is not supported. More importantly, the parenthetical '(同値ではある。\ref{pt:fixed-point-uniqueness.2})' is correct, but the claim that the first proof's fixed point 'looks like $A$' with fixed points substituted is imprecise: the first proof substitutes $H_{i}$ into $\Box D_{i}$, not into $p$'s occurrences.
- **Proposed fix:** Soften to: "分解は一意でなく、選び方によって得られる不動点の様相次数は変わりうる（いずれも $\mathsf{GL}$ で同値。\ref{pt:fixed-point-uniqueness.2}）。Boolos 第 8 章には、同じ $A$ に対して様相次数の異なる二つの（同値な）不動点が得られる例がある。" and remove the specific '2 and 5' claim unless verified.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Banach fixed point analogy is misleading
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から)
- **Detail:** The supplement claims the fixed point theorem is 'the same structure' as the Banach fixed point theorem, with 'well-foundedness = completeness' and '$\Box$ delay = contraction'. This is a loose analogy, not a precise correspondence: Banach's theorem requires a contraction on a complete metric space and gives a unique fixed point by iteration; here the 'iteration' is the trace computation which terminates because of well-foundedness, and there is no metric or contraction constant. Calling well-foundedness 'completeness' is inaccurate (well-foundedness corresponds to no infinite descending sequences, not metric completeness). The claim that 'the fixed point theorem says the per-model unique solution is uniformly writable by one formula $H$' is essentially correct, but the surrounding analogy overstates the correspondence.
- **Proposed fix:** Rephrase as an analogy only: "これは、整礎関係上の再帰的定義が一意の解をもつという事実の類似物である（バナッハの縮小写像定理との類比は直観的なもので、厳密な対応ではない）。不動点定理は、この各モデルでの一意の解が一つの論理式 $H$ で一様に書けることを主張する。"
- **Reported:** 2026-10-28 (8ccef3d)
