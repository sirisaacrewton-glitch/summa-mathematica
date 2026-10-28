# Verification tracker: `01-foundations/01-general-logic/01-propositional-logic/05-intuitionistic-kripke.html`

<!-- source: 01-foundations/01-general-logic/01-propositional-logic/05-intuitionistic-kripke.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The core definitions, the soundness and completeness proofs, the truth lemma, the prime-extension lemma and the disjunction-property argument are logically sound and correctly cite the listed results. The genuine problems are confined to the supplement: the decidability justification via the 2^{n} bound is not a finite procedure as stated, the S4/Gödel-translation correspondence is overstated, and the arrow-category example is identified with the two-world countermodel more strongly than is warranted. All three are side-comment (kind 5) issues; no proof-level gaps were found.

## Issues

### ISSUE-0001 [Open] Finite model bound 2^n does not yield a decision procedure
- **Category:** Supplement/remark error
- **Location:** supplement / 有限モデル性と決定可能性
- **Detail:** The supplement claims that because of \ref{logic:prob-ikr-finite} one can decide derivability by checking all models with at most 2^{n} states. But the number of models on at most 2^{n} states over the (countably infinite) set PV is infinite, and the problem only bounds the number of states, not the number of propositional variables or valuations. So the stated procedure is not finite and does not establish decidability as described. (Decidability of NJ is true, but this justification is wrong.)
- **Proposed fix:** Replace with: "\ref{logic:prob-ikr-finite} shows that a countermodel can be taken with at most $2^{n}$ states, where $n$ is the number of subformulas. Since only the propositional variables occurring in $\varphi$ matter (others may be assigned $\emptyset$), there are finitely many such models up to isomorphism, so derivability in NJ is decidable."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Gödel translation correspondence stated too strongly
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理 (S4 bullet)
- **Detail:** The bullet says the S4 Kripke semantics corresponds to intuitionistic Kripke semantics via the Gödel translation, and that persistence 'amounts to looking only at formulas prefixed by \Box'. The correct statement is that IPC is embedded into S4 via the Gödel translation (provability-level correspondence), and that intuitionistic Kripke models correspond to S4 models that are reflexive, transitive and where the valuation is persistent (i.e. the forcing of atoms is monotone), not merely 'looking at boxed formulas'. As written the correspondence claim is imprecise/overstated.
- **Proposed fix:** Replace with: "The Gödel translation embeds IPC into the modal logic S4, and intuitionistic Kripke models correspond to S4 Kripke models whose relation is a partial order (reflexive, transitive, antisymmetric) with a persistent (monotone) valuation of atoms."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Arrow-category example identified with the two-world countermodel
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から (last sentence)
- **Detail:** The supplement asserts that the arrow-category example of \ref{cat:page-presheaf-topos} 'is the same as' the two-state Kripke model of \ref{logic:ikripke-countermodel}. The arrow category (the presheaf topos on the two-object chain) is a topos of presheaves, whereas the countermodel is a particular Kripke model with a specific valuation V(p)={w_1}. They share the underlying poset but are not 'the same'; the identification is at best a loose analogy and is stated as fact.
- **Proposed fix:** Replace with: "the arrow-category example of \ref{cat:page-presheaf-topos} is the presheaf topos over the two-element chain, which underlies the two-state Kripke model of \ref{logic:ikripke-countermodel}."
- **Reported:** 2026-10-28 (8ccef3d)
