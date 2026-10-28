# Verification tracker: `05-geometry-topology/03-algebraic-geometry/02-schemes/08-cohomology.html`

<!-- source: 05-geometry-topology/03-algebraic-geometry/02-schemes/08-cohomology.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Grothendieck vanishing stated for non-Noetherian spaces
- **Category:** Supplement/remark error
- **Location:** remark 高次のコホモロジー
- **Detail:** The remark states that for a Noetherian topological space $X$ and any abelian sheaf $F$, $H^{q}(X,F)=0$ for $q>\dim X$. This is false as stated: Grothendieck vanishing requires $X$ to be a Noetherian *scheme* (or at least a locally Noetherian space with finite Krull dimension in the scheme sense) and $F$ quasi-coherent; for a general abelian sheaf on a Noetherian topological space the statement fails (e.g.\ constant sheaves on a Noetherian space of dimension 0 with infinitely many points, or $H^{q}$ of arbitrary sheaves can be nonzero beyond the topological dimension). The dimension must be the Krull dimension of the scheme, and quasi-coherence is essential.
- **Proposed fix:** Replace with: "More generally, for a Noetherian scheme $X$ and a quasi-coherent sheaf $F$, $H^{q}(X,F)=0$ for $q>\dim X$ (Grothendieck's vanishing theorem)."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Serre duality pairing described as 'perfect' without finite-generation hypothesis
- **Category:** Supplement/remark error
- **Location:** remark 射影空間のコホモロジー, item (d)
- **Detail:** Item (d) claims $H^{r}(\mathcal{O}(m))\times H^{0}(\mathcal{O}(-m-r-1))\to H^{r}(\mathcal{O}(-r-1))\cong A$ is a 'perfect pairing'. Over a general (non-field, possibly non-Noetherian) ring $A$, the natural statement is that the multiplication map $H^{0}(\mathcal{O}(-m-r-1))\to H^{r}(\mathcal{O}(m))^{\vee}$ (or the corresponding Hom) is an isomorphism; calling it a 'perfect pairing' requires $H^{r}(\mathcal{O}(m))$ to be a finitely generated projective $A$-module (true here since it is free, so the pairing is fine), but the phrase 'perfect pair (prototype of Serre duality)' is imprecise: Serre duality is a duality between $H^{q}$ and $\mathrm{Ext}^{r-q}$, not merely a pairing of $H^{r}$ with $H^{0}$. The claim as written is acceptable only because both sides are free; the description as 'Serre duality prototype' overstates it.
- **Proposed fix:** State precisely: "the natural map $H^{0}(X,\mathcal{O}(-m-r-1))\to \mathrm{Hom}_{A}(H^{r}(X,\mathcal{O}(m)),H^{r}(X,\mathcal{O}(-r-1)))$ is an isomorphism (both modules are free), which is the prototype of Serre duality."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Hartshorne Noetherian hypothesis mischaracterized
- **Category:** Supplement/remark error
- **Location:** hypcheck, ネーター性
- **Detail:** The hypcheck says Hartshorne assumes Noetherian 'to pass through the proof that $\widetilde{I}$ for an injective $I$ is flasque'. Hartshorne's proof of the vanishing theorem (III.3.5, via Cartan's lemma / the Godement-style argument) does not require Noetherian hypotheses for the affine vanishing itself; the Noetherian assumption in Hartshorne is used elsewhere (e.g.\ for coherence and finiteness statements). The attribution is imprecise and could mislead.
- **Proposed fix:** Rephrase: "Hartshorne's treatment assumes Noetherian hypotheses for convenience (coherence, finiteness), but the affine vanishing theorem itself holds for arbitrary rings, as shown here."
- **Reported:** 2026-10-28 (8ccef3d)
