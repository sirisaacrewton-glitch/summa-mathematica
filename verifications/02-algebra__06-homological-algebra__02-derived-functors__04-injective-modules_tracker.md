# Verification tracker: `02-algebra/06-homological-algebra/02-derived-functors/04-injective-modules.html`

<!-- source: 02-algebra/06-homological-algebra/02-derived-functors/04-injective-modules.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (Baer's criterion, divisible ⟺ injective, enough injectives via coinduced modules, Q/Z cogenerator) is logically sound and the citations match their targets. The only genuine problems are in the supplement: the Pontryagin-duality sentence is imprecise about the scope of the duality, and the 'Bass–Pappakriakopoulos' attribution for the noetherian/direct-sum-of-injectives theorem is a garbled misattribution (correctly Bass's theorem). Both are medium-confidence supplement issues; no proof-level gaps were found.

## Issues

### ISSUE-0001 [Open] Pontryagin duality claim restricted to finite abelian groups is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says 'the maps to Q/Z give the Pontryagin dual (A ↦ Hom(A, Q/Z)) for finite abelian groups'. The map A ↦ Hom(A, Q/Z) is the Pontryagin dual for all abelian groups (with the compact-open topology on the dual), and for finite abelian groups it is a duality (A ≅ Hom(Hom(A,Q/Z),Q/Z)). As stated ('与える') it is vague but the restriction to finite groups suggests the duality only holds there, which is misleading; also the double-dual statement is what makes it a duality, not merely the assignment.
- **Proposed fix:** For every abelian group $A$, $A^{\vee}\defeq\mathrm{Hom}(A,\mathbb{Q}/\mathbb{Z})$ is the Pontryagin dual; the natural map $A\to A^{\vee\vee}$ is an isomorphism when $A$ is finite (more generally when $A$ is a finite direct sum of copies of $\mathbb{Q}/\mathbb{Z}$-dualizable groups), so on finite abelian groups $A\mapsto A^{\vee}$ is a duality.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Bass–Papp–Chrysostomos attribution and statement of noetherian injective-sum theorem
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement states: 'over a noetherian ring, a direct sum of injective modules is injective, and the converse holds (Bass–Pappakriakopoulos theorem)'. The correct attribution is Bass (for 'noetherian ⟺ direct sums of injectives are injective'), often called Bass–Papp's theorem; the name 'Bass–Pappakriakopoulos' is a garbled/misattributed name. The mathematical content (noetherian ⟺ arbitrary direct sums of injective modules are injective) is correct, but the attribution is wrong.
- **Proposed fix:** Over a ring $R$, arbitrary direct sums of injective left $R$-modules are injective if and only if $R$ is left noetherian (Bass's theorem, sometimes Bass–Papp).
- **Reported:** 2026-10-28 (8ccef3d)
