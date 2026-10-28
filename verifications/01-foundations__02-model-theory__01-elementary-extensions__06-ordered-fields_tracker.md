# Verification tracker: `01-foundations/02-model-theory/01-elementary-extensions/06-ordered-fields.html`

<!-- source: 01-foundations/02-model-theory/01-elementary-extensions/06-ordered-fields.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, lemmas, Rolle/MVT, relative algebraic closure) is logically sound; the proofs correctly invoke the cited results and the hypcheck is accurate. The genuine problems are confined to the supplement: the equivalence of axiomatizations is stated imprecisely (omitting the formal-real / not-algebraically-closed requirement), and the elementary-equivalence claim between $\mathbb{R}$ and $\mathbb{R}_{\mathrm{alg}}$ is stated without restricting to the ordered-ring language. Both are medium-confidence overstatements in side remarks.

## Issues

### ISSUE-0001 [Open] RCF axiomatization by IVT alone is not equivalent to the other listed conditions
- **Category:** Supplement/remark error
- **Location:** supplement / 他の公理化
- **Detail:** The supplement claims that, for an ordered field, the intermediate value axiom is equivalent to (a) 'positive elements are squares and odd-degree polynomials have roots' and (b) 'no proper algebraic extension admits an extension of the order'. As stated, the IVT axiom alone (without the ordered-field axioms being part of the equivalence) is not equivalent to these: the equivalence requires the ordered-field axioms plus the additional conditions. More importantly, condition (a) alone (squares + odd-degree roots) is not by itself equivalent to real closedness unless one also assumes the field is not algebraically closed / that -1 is not a square, or equivalently that the field is formally real; e.g. an algebraically closed field trivially satisfies 'positive elements are squares' vacuously only if no order exists, but for ordered fields the correct statement of Artin–Schreier is: an ordered field is real closed iff it has no proper algebraic extension to an ordered field, iff every positive element is a square and every odd-degree polynomial has a root AND the field is not algebraically closed (i.e. -1 is not a square). The phrasing '「正の元は平方で、奇数次の多項式は根をもつ」（...の逆）とも...同値' is imprecise because it omits the requirement that the field be formally real (not algebraically closed).
- **Proposed fix:** For an ordered field $K$, the following are equivalent: (i) $K$ satisfies the intermediate value axiom for polynomials; (ii) $K$ is formally real (i.e. $-1$ is not a sum of squares, equivalently $-1$ is not a square in $K$) and every positive element is a square and every odd-degree polynomial has a root in $K$; (iii) $K$ admits no proper algebraic extension to an ordered field. (Artin–Schreier theory; the equivalence uses that $K(\sqrt{-1})$ is algebraically closed.)
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that R and R_alg satisfy the same first-order sentences needs the language restriction
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement says that by completeness of RCF, $\mathbb{R}$ and $\mathbb{R}_{\mathrm{alg}}$ satisfy the same first-order sentences. This is only true for sentences in the language $\mathcal{L}_{\mathrm{or}}$ of ordered rings. In an expanded language (e.g. with a predicate for being algebraic, or a constant naming a transcendental), they differ. As stated without restricting the language, the claim is overstated.
- **Proposed fix:** By the completeness of RCF, $\mathbb{R}$ and $\mathbb{R}_{\mathrm{alg}}$ satisfy the same first-order sentences in the language $\mathcal{L}_{\mathrm{or}}=\{0,1,+,-,\cdot,<\}$ of ordered rings (they are elementarily equivalent as $\mathcal{L}_{\mathrm{or}}$-structures).
- **Reported:** 2026-10-28 (8ccef3d)
