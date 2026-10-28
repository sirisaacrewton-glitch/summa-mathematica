# Verification tracker: `01-foundations/03-computation/06-lambda-calculus/01-untyped-lambda.html`

<!-- source: 01-foundations/03-computation/06-lambda-calculus/01-untyped-lambda.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is mathematically sound: the Church–Rosser proof via parallel reduction and complete development (Takahashi's method) is correct, the triangle lemma case analysis is complete, the substitution lemma and its use in the parallel-substitution lemma are correctly justified, and the fixed-point theorem and its remark about $Y$ versus Turing's $\Theta$ are accurate. The problems and solutions are correct. The only point worth flagging is a mild imprecision in the categorical aside in the supplement, where 'model = object with $D\cong D^{D}$' is stated without the reflexive-object/retraction structure; this is a minor overstatement rather than a false claim, so confidence is medium.

## Issues

### ISSUE-0001 [Open] Categorical model claim: only the one-point set in Set
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement says that a model of the untyped lambda calculus is an object $D$ of a cartesian closed category with $D\cong D^{D}$, and that in the category of sets Cantor's theorem forces this to be a one-point set. The first part is imprecise: a model of the untyped lambda calculus is not merely an object with $D\cong D^{D}$; one needs a reflexive object with an application map $D\times D\to D$ satisfying the $\lambda$-algebra (or at least combinatory-algebra) axioms, i.e. a retraction $D^{D}\triangleleft D$ together with the required equations. The second part is also imprecise: Cantor's theorem shows there is no bijection $D\cong D^{D}$ for any set $D$ with at least two elements, so the only set with such a bijection is indeed a one-point set; but the phrasing '集合の圏ではカントールの定理によりこれは一点集合しかありえない' suggests that the one-point set is a model, which it is (trivially), yet the surrounding sentence conflates 'object with $D\cong D^{D}$' with 'model'. The claim as stated is acceptable in substance but overstated/imprecise about what a model requires.
- **Proposed fix:** Replace with: 'Categorically, a model of the untyped lambda calculus is a reflexive object $D$ in a cartesian closed category, i.e. an object with maps $D\to D^{D}$ and $D^{D}\to D$ satisfying the $\lambda$-algebra axioms (in particular $D$ is a retract of $D^{D}$). In the category of sets, Cantor's theorem shows that no set with at least two elements satisfies $D\cong D^{D}$, so the only set-theoretic solution is the one-point set; genuine models require a non-classical setting such as Scott domains.'
- **Reported:** 2026-10-28 (8ccef3d)
