# Verification tracker: `02-algebra/05-field-theory/01-extensions/04-algebraic-closure.html`

<!-- source: 02-algebra/05-field-theory/01-extensions/04-algebraic-closure.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Countable field case still needs some choice / claim overstated
- **Category:** Supplement/remark error
- **Location:** supplement / 選択公理について
- **Detail:** The supplement claims that for a countable field one can avoid the axiom of choice by arranging the variables countably and carrying out the construction concretely. This is imprecise: the Artin construction still requires taking a maximal ideal (or a quotient by a maximal ideal) in a countably generated polynomial ring, and Krull's theorem (maximal ideal existence) itself relies on AC/Zorn in general. Even for countable coefficient fields, the polynomial ring in countably many variables is countable, but producing a maximal ideal containing I is not constructive in ZF; the standard construction uses choice. So the statement that AC can be avoided is overstated.
- **Proposed fix:** Replace with: 'For a countable field $K$, the polynomial ring $K[x_{1},x_{2},\dots]$ in countably many variables is countable, so the algebraic closure can be built as a countable union of countable sets; however, the step choosing a maximal ideal containing $I$ still uses the maximal ideal theorem (a weak form of AC). Thus only the use of Zorn's lemma for the chain construction is avoided, not all choice.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Embedding statement needs algebraic extension hypothesis
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** The supplement says \ref{fld:embedding-algebraic-closure} shows that for a finite extension (more generally algebraic extension) L/K there always exists a K-embedding into \bar K. The theorem indeed requires L/K algebraic; the parenthetical 'more generally algebraic extension' is correct, but the phrasing 'finite extension (more generally algebraic extension)' could be read as claiming it for arbitrary extensions. Since the theorem is stated for algebraic L/K, the sentence is acceptable but should be precise: for transcendental L/K a K-embedding into \bar K need not exist (e.g. K=\Q, L=\Q(t), \bar K=\bar\Q).
- **Proposed fix:** Rewrite: 'For an algebraic extension $L/K$ (in particular a finite extension), there always exists a $K$-embedding $L\hookrightarrow\bar K$; this fails for transcendental extensions, e.g. $\Q(t)$ has no $\Q$-embedding into $\bar\Q$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] C is the algebraic closure of R
- **Category:** Unsupported fact
- **Location:** example / item 1
- **Detail:** The example states that the algebraic closure of $\R$ is $\C$. This is true, but it relies on the fact that every element of $\C$ is algebraic over $\R$ (degree at most 2) and that $\C$ is algebraically closed (fundamental theorem of algebra). The text cites the fundamental theorem for $\C$ being algebraically closed, and the algebraicity over $\R$ is elementary, so the claim is justified, but the reasoning is not spelled out. This is a minor gap rather than a false statement.
- **Proposed fix:** Add: '$\C/\R$ is algebraic since $\C=\R(i)$ with $i^{2}=-1$, and $\C$ is algebraically closed by the fundamental theorem of algebra, so $\C$ is the algebraic closure of $\R$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Grothendieck Galois theory starting point overstated
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** The supplement says that the action of $\operatorname{Aut}(\bar K/K)$ on $\Hom_{K}(L,\bar K)$ is the starting point of Grothendieck-style Galois theory. This is a reasonable heuristic, but the precise statement of Grothendieck Galois theory concerns the category of finite étale algebras and the absolute Galois group as a profinite group acting on finite sets; the set $\Hom_{K}(L,\bar K)$ with the automorphism action is the classical Galois correspondence, not specifically the Grothendieck formulation. The claim is not false but is imprecise as a characterization of the 'starting point'.
- **Proposed fix:** Soften to: 'This action is a classical precursor of the Galois correspondence; Grothendieck's formulation recasts it as an equivalence between finite étale $K$-algebras and finite sets with a continuous action of the absolute Galois group.'
- **Reported:** 2026-10-28 (10fede1)
