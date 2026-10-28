# Verification tracker: `02-algebra/03-commutative-algebra/02-commutative-algebra/01-local-properties.html`

<!-- source: 02-algebra/03-commutative-algebra/02-commutative-algebra/01-local-properties.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect claim that rank is locally constant for arbitrary finitely generated projective modules
- **Category:** Supplement/remark error
- **Location:** supplement (局所的に自由) in ring:page-local-properties
- **Detail:** The supplement states that $\mathfrak{p}\mapsto\operatorname{rank}P_{\mathfrak{p}}$ is a locally constant function on $\Spec A$ for a finitely generated projective module $P$. This is false in general: local constancy requires $P$ to be of finite presentation (or $A$ to be connected / $\Spec A$ connected, or $P$ finitely generated projective over a ring where rank is well-defined). Over a general commutative ring, a finitely generated projective module can have rank jumping between components; more importantly, without finite presentation the rank function need not be locally constant on $\Spec A$ when $\Spec A$ is disconnected. The standard statement is: for a finitely generated projective module, $\operatorname{rank}P_{\mathfrak{p}}$ is locally constant on each connected component of $\Spec A$ (equivalently, $P$ has constant rank on connected components). The claim as written (locally constant on all of $\Spec A$) is only true when $\Spec A$ is connected or when one restricts to connected components.
- **Proposed fix:** Replace with: "$\mathfrak{p}\mapsto\operatorname{rank}P_{\mathfrak{p}}$ is a locally constant function on each connected component of $\Spec A$ (i.e., constant on connected components); when $\Spec A$ is connected, $P$ has a well-defined rank."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Overstated Serre–Swan correspondence claim
- **Category:** Supplement/remark error
- **Location:** supplement (局所的に自由) in ring:page-local-properties
- **Detail:** The supplement says "geometrically $P$ corresponds to a vector bundle on $\Spec A$ (the algebraic version of the Serre–Swan correspondence)". The Serre–Swan theorem is specifically about modules over $C(X)$ (or $C^{\infty}$) corresponding to vector bundles over a compact Hausdorff space (or smooth manifold). The algebraic statement that finitely generated projective $A$-modules correspond to vector bundles on $\Spec A$ is the standard algebro-geometric dictionary (finitely generated projective = locally free of finite rank), not literally "Serre–Swan". Calling it "the algebraic version of Serre–Swan" is imprecise/misattributed.
- **Proposed fix:** Replace with: "geometrically $P$ corresponds to a vector bundle (locally free sheaf of finite rank) on $\Spec A$; this is the algebraic analogue of the Serre–Swan theorem."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Finitely generated flat over Noetherian local ring is free — attribution to Tor/Nakayama
- **Category:** Unsupported fact
- **Location:** supplement (ネーター局所環上の平坦加群) in ring:page-local-properties
- **Detail:** The statement "a finitely generated flat module over a Noetherian local ring is free" is correct. However, the parenthetical "(reduce to Nakayama's lemma using Tor)" is a vague and slightly misleading justification: the standard proof uses that a finitely generated flat module over a local ring is free (which holds for any local ring, not just Noetherian), or via the fact that flat + finitely presented over local implies free. The claim itself is fine, but the stated reduction is imprecise. More importantly, the claim that this is "the fact used in the hypcheck of \ref{mod:flat-z}" cannot be verified from this page and is a cross-reference assertion that may be inaccurate.
- **Proposed fix:** State: "A finitely generated flat module over a local ring is free (in particular over a Noetherian local ring)." Remove or soften the unverifiable cross-reference to the hypcheck of \ref{mod:flat-z} unless confirmed.
- **Reported:** 2026-10-28 (10fede1)
