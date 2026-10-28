# Verification tracker: `01-foundations/05-proof-theory/01-sequent-calculus/04-equivalence-of-systems.html`

<!-- source: 01-foundations/05-proof-theory/01-sequent-calculus/04-equivalence-of-systems.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem and its proofs are essentially correct, and the cited lemmas are used consistently. The problems are confined to the side remarks: the global-convention remark asserts a false equivalence between provability of a formula and of its universal closure for open formulas, and the supplement overstates the role of Negri–von Plato left rules for cut elimination with equality. Both should be corrected as indicated.

## Issues

### ISSUE-0001 [Open] Incorrect claim that the global convention matches local derivability for general formulas
- **Category:** Supplement/remark error
- **Location:** pt:eqs-global-remark
- **Detail:** The remark claims that for a general (possibly open) formula $\varphi$, $\vdash_{\mathrm{ND}}\forall\vec{x}\,\varphi\iff\vdash_{\mathrm{ND}}\varphi$ via $\forall$I and $\forall$E, and that this makes the global convention ("$S\vdash\varphi$ means the universal closure is provable") agree with the local derivability. The direction $\vdash\varphi\Rightarrow\vdash\forall\vec{x}\varphi$ is fine, but the converse $\vdash\forall\vec{x}\varphi\Rightarrow\vdash\varphi$ is not justified: from a derivation of $\forall\vec{x}\varphi$ one gets $\varphi$ only by $\forall$E, which yields $\varphi[t/x]$ for a term $t$, not $\varphi$ itself with the free variable. Indeed $\vdash\forall x\,P(x)\to P(x)$ holds but $\not\vdash P(x)$ in a system without free-variable generalization on open formulas. So the stated equivalence is false in general, and the claim that the global convention coincides with local derivability for open $\varphi$ is overstated.
- **Proposed fix:** Replace the sentence with: "For a sentence $\varphi$ the two definitions coincide. For a general formula $\varphi$ with free variables $\vec{x}$, the global convention reads $\vdash_{\mathrm{ND}}\forall\vec{x}\,\varphi$, which is stronger than the local $\vdash_{\mathrm{ND}}\varphi$; only the implication $\vdash_{\mathrm{ND}}\varphi\Rightarrow\vdash_{\mathrm{ND}}\forall\vec{x}\,\varphi$ holds (by $\forall$I when $\vec{x}$ are not free in any open assumption, which is the case for a closed derivation)."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Overstated claim about Negri–von Plato and cut elimination with equality
- **Category:** Supplement/remark error
- **Location:** supplement (関連する結果)
- **Detail:** The supplement says that to make cut elimination hold in a system with equality one needs devices such as adding equality as a left rule (Negri–von Plato). This is imprecise: cut elimination for LK with equality is standard already with reflexivity and replacement initial sequents (the cut-elimination theorem extends to the equality initial sequents, since these are atomic and the reduction steps go through). Negri–von Plato's left-rule treatment is a convenience for proof search / contraction admissibility, not a necessity for cut elimination. The statement as written suggests cut elimination fails without such a device, which is not the case.
- **Proposed fix:** Rephrase as: "Cut elimination for LK with equality holds already with the reflexivity and replacement initial sequents (the standard reduction extends since these are atomic). Presenting equality by left rules (Negri–von Plato) is a device that makes the equality rules more uniform and facilitates proof search and admissibility of contraction, but it is not required for cut elimination itself."
- **Reported:** 2026-10-28 (10fede1)
