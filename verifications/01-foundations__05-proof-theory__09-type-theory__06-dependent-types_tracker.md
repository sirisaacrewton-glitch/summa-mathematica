# Verification tracker: `01-foundations/05-proof-theory/09-type-theory/06-dependent-types.html`

<!-- source: 01-foundations/05-proof-theory/09-type-theory/06-dependent-types.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the Π and Σ definitions, the projection proposition and its proof, the type-theoretic choice theorem and its proof, and the basic inductive types are all sound. The main problems are in the supplement: the claim that the type-theoretic choice axiom is an isomorphism 'Π distributes over Σ' (it is only a map in general), and the conflation of Diaconescu–Goodman–Myhill (which concerns the set-theoretic axiom of choice) with the truncated type-theoretic choice principle. The Girard attribution is acceptable.

## Issues

### ISSUE-0001 [Open] Π distributes over Σ only as a map, not an isomorphism
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement claims that the type-theoretic choice axiom is the statement that 'Π distributes over Σ' ($\prod\sum\cong\sum\prod$), and identifies it with the set-theoretic equation $\prod_{x\in A}\coprod_{y\in B}R_{x,y}\cong\coprod_{f\colon A\to B}\prod_{x\in A}R_{x,f(x)}$. This is false in general. The choice axiom only gives a map $\prod_{x}\sum_{y}R(x,y)\to\sum_{f}\prod_{x}R(x,f x)$; the reverse map exists, but they are not mutually inverse without function extensionality and, more importantly, the forward direction is not an isomorphism in general (the composite is not the identity without additional hypotheses such as the truncated/propositional reading). In the set-theoretic form, $\prod_{x\in A}\coprod_{y\in B}R_{x,y}\cong\coprod_{f\colon A\to B}\prod_{x\in A}R_{x,f(x)}$ is not an equation that holds for arbitrary $R$; it holds only when each fiber is a singleton (i.e. when $R$ is a graph of a function), which is exactly the situation where the choice is trivial. The 'counting' metaphor is therefore misleading.
- **Proposed fix:** Replace with: 'In this view the type-theoretic choice axiom gives a canonical map $\prod_{x:A}\sum_{y:B}R(x,y)\to\sum_{f:A\to B}\prod_{x:A}R(x,f\,x)$, which is the type-theoretic analogue of the set-theoretic implication $\forall x\exists y\,R(x,y)\to\exists f\forall x\,R(x,f(x))$. It is not an isomorphism in general; the two types are equivalent only under additional hypotheses (e.g. when the fibers are propositions and one assumes function extensionality).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Diaconescu–Goodman–Myhill attribution and statement
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says that when $\exists$ is read as a propositional truncation, the choice principle 'becomes a strong principle close to the set-theoretic axiom of choice', and that 'the relation between the choice principle and the law of excluded middle is known as an analogue of the Diaconescu–Goodman–Myhill theorem (the axiom of choice implies the law of excluded middle; the topos form)'. This conflates two distinct results. Diaconescu's theorem (and Goodman–Myhill's) states that the *set-theoretic* axiom of choice (or the full choice in a topos) implies the law of excluded middle; it does not say that the truncated type-theoretic choice principle implies LEM. In fact, in Martin-Löf type theory with propositional truncation, the truncated choice principle is *not* known to imply LEM in general, and the relationship is subtle. The claim as stated is an overstatement/misattribution.
- **Proposed fix:** Replace with: 'When $\exists$ is read via propositional truncation $\Vert\sum_{x:A}P(x)\Vert$, the choice principle above is not derivable in general; it becomes a genuinely stronger principle. Diaconescu's theorem (and its topos-theoretic form, Goodman–Myhill) shows that the *set-theoretic* axiom of choice implies the law of excluded middle; the analogous question for the truncated type-theoretic choice principle is more delicate and depends on the ambient system.'
- **Reported:** 2026-10-28 (8ccef3d)
