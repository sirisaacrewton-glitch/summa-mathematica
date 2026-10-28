# Verification tracker: `01-foundations/01-general-logic/02-first-order-logic/02-substitution.html`

<!-- source: 01-foundations/01-general-logic/02-first-order-logic/02-substitution.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Simultaneous vs sequential substitution claim needs the terms to be constants or fresh variables
- **Category:** Supplement/remark error
- **Location:** supplement (同時代入) / logic:page-substitution
- **Detail:** The supplement says that in this series multiple substitutions are only used when the substituted terms are constant symbols or fresh variables, and that in that case simultaneous and sequential substitution coincide, verifiable by repeated use of \ref{logic:substitution-commutation}. The commutation proposition requires the side condition $x\neq y$ and $x\notin\mathrm{var}(r)$ (and for formulas the condition $y\notin\mathrm{BV}(\varphi)$ or $y\notin\mathrm{var}(s)$). If the substituted terms are merely 'fresh variables' this is fine, but the statement as written ('constant symbols or fresh variables') is imprecise: for sequential substitution to equal simultaneous substitution one needs the substituted terms to contain none of the variables being substituted (e.g. constants, or variables not among $x_{1},\dots,x_{n}$), and the commutation lemma's hypotheses must actually be checked. As stated the justification is too quick and the condition is not the right one.
- **Proposed fix:** State the precise condition: if each $s_{i}$ contains none of $x_{1},\dots,x_{n}$ (in particular if all $s_{i}$ are constants or variables outside $\{x_{1},\dots,x_{n}\}$), then the simultaneous substitution $\varphi[\vec{s}/\vec{x}]$ equals any sequential substitution $\varphi[s_{\sigma(1)}/x_{\sigma(1)}]\cdots[s_{\sigma(n)}/x_{\sigma(n)}]$; this follows by repeated application of \ref{logic:substitution-commutation}, whose hypotheses $x_{i}\neq x_{j}$ and $x_{i}\notin\mathrm{var}(s_{j})$ are satisfied under this condition.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] The 'high-level view' claim that substitution on formulas is not a homomorphism is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点) / logic:page-substitution
- **Detail:** The supplement says substitution $[s/x]$ is a homomorphism of the free algebra of terms extending $x\mapsto s$, and that substitution on formulas is not a simple homomorphism 'because the quantifier $\forall x$ removes $x$ from the generators'. The first part is correct. The second sentence is misleading: substitution $[s/x]$ on formulas is in fact a homomorphism for the connectives ($\bot$, $\to$, $=$, predicate symbols), and it fails to be a homomorphism of the term algebra only at the quantifier clause, where the case distinction $y=x$ vs $y\neq x$ appears. Saying it is 'not a simple homomorphism because $\forall x$ removes $x$ from the generators' is an imprecise/overstated explanation rather than a correct statement.
- **Proposed fix:** Replace with: 'Substitution $[s/x]$ on formulas is a homomorphism for all connectives and atomic formulas; the only clause that is not the obvious homomorphic extension is the quantifier case, where $(\forall y\,\alpha)[s/x]$ equals $\forall y\,\alpha$ if $y=x$ and $\forall y\,(\alpha[s/x])$ otherwise. Thus $[s/x]$ is not induced by a single homomorphism of the free algebra on all generators, because the quantifier binds $x$.'
- **Reported:** 2026-10-28 (10fede1)
