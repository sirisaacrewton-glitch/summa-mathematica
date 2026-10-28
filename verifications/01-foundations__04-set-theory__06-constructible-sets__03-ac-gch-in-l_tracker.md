# Verification tracker: `01-foundations/04-set-theory/06-constructible-sets/03-ac-gch-in-l.html`

<!-- source: 01-foundations/04-set-theory/06-constructible-sets/03-ac-gch-in-l.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Wrong use of regularity in L(κ)=H(κ) (⊇)
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, third bullet (referring to set:l-kappa-eq-h-kappa)
- **Detail:** The supplement claims that regularity of κ is used in the (⊇) direction of set:l-kappa-eq-h-kappa to find α<κ with A⊆L_{α}. In the actual proof, regularity is used to get sup{ρ(a)+1 : a∈A} < κ from |A|<κ; the step A∈L_{α^{+}} and α^{+}≤κ uses that κ is a cardinal (and |α|<κ), not regularity. So the stated use of regularity is imprecise/misattributed.
- **Proposed fix:** In the (⊇) direction of \ref{set:l-kappa-eq-h-kappa}, regularity of $\kappa$ is used to conclude $\sup\{\rho(a)+1:a\in A\}<\kappa$ from $\lvert A\rvert<\kappa$; the step $A\in L_{\alpha^{+}}\subseteq L_{\kappa}$ then uses that $\kappa$ is a cardinal (so $\alpha^{+}\le\kappa$).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Overstated attribution of fine structure to Jensen
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果, second bullet
- **Detail:** The supplement says that a refinement of the argument of set:l-subsets-early 'became the starting point of Jensen's fine structure theory'. The condensation argument (Gödel's condensation lemma) is due to Gödel and is a basic tool; Jensen's fine structure theory (1972) is a much more specific development (Σ_{n}-hierarchies, projecta, standard parameters, the □ principle, etc.). Calling the condensation argument itself the starting point of fine structure is an overstatement, though hedged with 'it is generally said'.
- **Proposed fix:** The condensation argument (Gödel's condensation lemma) underlying \ref{set:l-subsets-early} is a basic tool in the study of $\mathbf{L}$; Jensen's fine structure theory refines this analysis of the initial segments $L_{\alpha}$ (projecta, standard parameters, $\Sigma_{n}$-hierarchies) and is a much later and more specific development.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Imprecise claim that L's small models are exactly its initial segments
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から：自己相似性と凝縮
- **Detail:** The supplement states 'just as zooming into any part of a fractal reveals the same shape as the whole, small models of L are the initial segments of L themselves'. This is imprecise: only sufficiently elementary substructures (satisfying a finite fragment) condense to some L_{δ}; arbitrary small transitive models or substructures of L need not be of the form L_{δ}. The statement as written ('small models of L are the initial segments of L') is stronger than what condensation gives.
- **Proposed fix:** Just as zooming into any part of a fractal reveals a shape similar to the whole, taking a small elementary substructure of $\mathbf{L}$ (satisfying a sufficiently large finite fragment of ZF) and collapsing it yields an initial segment $L_{\delta}$ of $\mathbf{L}$; this self-similarity (condensation) is what makes $\mathbf{L}$ rigid.
- **Reported:** 2026-10-28 (10fede1)
