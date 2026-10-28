# Verification tracker: `01-foundations/03-computation/06-lambda-calculus/01-untyped-lambda.html`

<!-- source: 01-foundations/03-computation/06-lambda-calculus/01-untyped-lambda.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is mathematically sound overall: the Church–Rosser proof via parallel reduction and complete development is correct, the substitution lemma and its use in the parallel-substitution lemma are correctly stated with the needed side conditions, the fixed-point theorem and its remark distinguishing $Y$ from Turing's $\Theta$ are accurate, and the problems/solutions are correct. The only genuine issue is in the closing supplement, where the categorical discussion conflates '$D\cong D^{D}$ in a cartesian closed category' with the correct notion of a reflexive object and overstates the role of Lawvere's fixed-point theorem; the Cantor remark itself is correct for $\mathbf{Set}$ but the surrounding phrasing is imprecise. No logical gaps, missing hypotheses, or improper links were found.

## Issues

### ISSUE-0001 [Open] Cantor's theorem does not force D to be a singleton in Set
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement claims that in the category of sets, an object $D$ with $D\cong D^{D}$ can only be a one-point set, citing Cantor's theorem. Cantor's theorem only rules out $D\cong D^{D}$ for sets with at least two elements when $D^{D}$ is the set of *all* functions $D\to D$. But the standard models of the untyped lambda calculus are not in $\mathbf{Set}$ with all functions; they live in domains (e.g. Scott's $D_{\infty}$) where $D^{D}$ is the set of continuous functions. The statement as written is imprecise: it is true that no set $D$ with $|D|\ge 2$ satisfies $D\cong D^{D}$ in $\mathbf{Set}$, but the phrasing '集合の圏ではカントールの定理によりこれは一点集合しかありえない' is correct only under that reading; the surrounding sentence 'type-free lambda calculus models are objects of a cartesian closed category with $D\cong D^{D}$' then contradicts it unless one notes the ambient category is not $\mathbf{Set}$. The claim is essentially correct but the juxtaposition is misleading; more importantly, the assertion that such a $D$ 'can only be a one-point set' in $\mathbf{Set}$ is true, so this is borderline. The real issue: the supplement says the model is 'an object $D$ of a cartesian closed category with $D\cong D^{D}$', which is not sufficient — one needs a reflexive object / a ccc with a retraction $D^{D}\triangleleft D$, and in a general ccc such objects exist (e.g. in $\mathbf{Set}^{op}$-like or in the effective topos). Stating it as 'cartesian closed category with $D\cong D^{D}$' overstates: a ccc with an object isomorphic to its own function space need not exist, and the correct notion is a reflexive object. Also 'ローヴェアの不動点定理の典型例' — Lawvere's fixed-point theorem concerns a point-surjective map $A\to B^{A}$; the connection to $Y$ is via the diagonal argument, which is fine, but calling $Y$ 'the typical example of Lawvere's fixed point theorem' is an overstatement since Lawvere's theorem is about cartesian closed categories and the $Y$ combinator is a syntactic analogue.
- **Proposed fix:** Replace with: '圏論的には、型なしラムダ計算のモデルはデカルト閉圏の対象 $D$ で $D^{D}$ が $D$ の retract になるもの（reflexive object）として定式化される。集合の圏では $|D|\ge 2$ ならカントールの定理により $D\cong D^{D}$ は成り立たないので、モデルは領域などの別の圏で構成する必要がある（スコットの $D_{\infty}$）。自己適用 $xx$ と不動点定理はこの reflexive object の存在と表裏一体で、ローヴェアの不動点定理の一例と見ることもできる。'
- **Reported:** 2026-10-28 (10fede1)
