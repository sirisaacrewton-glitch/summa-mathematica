# Verification tracker: `05-geometry-topology/01-general-topology/03-function-spaces/02-exponential-law.html`

<!-- source: 05-geometry-topology/01-general-topology/03-function-spaces/02-exponential-law.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, the exponential-map continuity theorem, evaluation continuity, the exponential law with its two-step proof, and the $\mathbb{Q}$ counterexample) is logically sound: the tube lemma for compact subsets is correctly derived, the shrinking lemma and local compactness are used with the right hypotheses, and the hypcheck accurately tracks where local compactness and Hausdorffness enter. The only genuine problems are in the supplement: the Arens–Dugundji paragraph overstates/imprecisely states the relationship between the compact-open topology and the topology making $\Phi$ continuous, and the 'higher viewpoint' paragraph attributes an adjunction to a corollary that only gives a bijection, omitting the naturality that is actually needed.

## Issues

### ISSUE-0001 [Open] Arens–Dugundji attribution and the 'weaker topology' claim
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says that the topology making $\Phi(f)$ always continuous is weaker than the compact-open topology, and that a topology satisfying both conditions exists exactly when $X$ is locally compact (Hausdorff), attributed to Arens–Dugundji. Two problems. (1) The 'weaker' direction is stated without the needed hypothesis: the topology making all $\Phi(f)$ continuous is the weakest such topology, and it is weaker than the compact-open topology only when the compact-open topology itself has that property, i.e. essentially when $X$ is locally compact Hausdorff; in general the two are incomparable. (2) The Arens–Dugundji theory concerns the existence of an admissible (splitting) topology, i.e. one making the evaluation map continuous; the statement that a topology making both $\Phi$ and $\mathrm{ev}$ continuous exists exactly for locally compact Hausdorff $X$ is not the standard formulation and is imprecise (the compact-open topology is admissible precisely when $X$ is locally compact Hausdorff, but 'both conditions' as phrased mixes the two different topologies).
- **Proposed fix:** Replace with: 'The topology making every $\Phi(f)$ continuous is the weakest topology with that property; when $X$ is locally compact Hausdorff it coincides with (and is thus weaker than or equal to) the compact-open topology. A topology on $C(X,Y)$ making the evaluation map continuous (an admissible topology) exists in general, but the compact-open topology is admissible exactly when $X$ is locally compact Hausdorff (Arens–Dugundji theory).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Adjunction direction in the 'higher viewpoint' paragraph
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The text says $\ref{top:exponential-bijective} shows that $-\times X$ is left adjoint to $C_{c}(X,-)$. The bijection $\mathbf{Top}(Z\times X,Y)\cong\mathbf{Top}(Z,C_{c}(X,Y))$ is natural in $Z$ and $Y$ only when $X$ is locally compact Hausdorff, and it does exhibit $-\times X\dashv C_{c}(X,-)$; this part is correct. However the sentence 'the evaluation map is the counit of this adjunction' is correct only up to the fact that the counit is $\mathrm{ev}\colon C_{c}(X,Y)\times X\to Y$, which requires $X$ locally compact Hausdorff — fine — but the paragraph omits that naturality (not merely bijectivity) is what yields the adjunction, and the cited result \ref{top:exponential-bijective} only gives a bijection of hom-sets, not naturality. Citing it as establishing an adjunction is an overstatement of what that corollary proves.
- **Proposed fix:** State: 'The bijection $\mathbf{Top}(Z\times X,Y)\cong\mathbf{Top}(Z,C_{c}(X,Y))$ is natural in $Z$ and $Y$ (this naturality is what makes $-\times X$ left adjoint to $C_{c}(X,-)$); the evaluation map is the counit. The bijection itself is \ref{top:exponential-bijective}; naturality follows from the functoriality of $\Phi$ and $\Psi$.'
- **Reported:** 2026-10-28 (10fede1)
