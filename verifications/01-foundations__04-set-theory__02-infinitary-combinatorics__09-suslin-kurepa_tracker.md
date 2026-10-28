# Verification tracker: `01-foundations/04-set-theory/02-infinitary-combinatorics/09-suslin-kurepa.html`

<!-- source: 01-foundations/04-set-theory/02-infinitary-combinatorics/09-suslin-kurepa.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs (Suslin tree ↔ Suslin line, MA(ω₁) ⇒ no Suslin tree, Kurepa tree ↔ Kurepa family) are logically sound, with hypotheses properly tracked in the hypcheck environments. The genuine problems concentrate in the supplements: the 'Aronszajn line' remark overstates what the naive lexicographic construction gives; the KH independence remark garbles Silver's collapse and the '$\omega_{2}$ is a Kurepa tree' phrasing; and the Baumgartner–Malitz–Reinhardt attribution is imprecise about the hypothesis. These are reported as supplement errors with medium confidence.

## Issues

### ISSUE-0001 [Open] Aronszajn line from an Aronszajn tree: claimed properties are wrong
- **Category:** Supplement/remark error
- **Location:** supplement (アロンシャイン線), after set:suslin-tree-line proof
- **Detail:** The supplement claims that the (⇒) construction applied to an Aronszajn tree yields a line containing no subset isomorphic to $\omega_{1}$, to $\omega_{1}^{*}$, or to an uncountable subset of the reals. This is false as stated. The lexicographic order on maximal chains of an Aronszajn tree is not in general an Aronszajn line: it may well contain a copy of $\omega_{1}$ (e.g. if the tree has a branch-like chain of type $\omega_{1}$ below which everything is linear, or more simply the construction does not preclude an increasing $\omega_{1}$-sequence). The standard construction of an Aronszajn line from an Aronszajn tree requires additional care (e.g. taking a tree with no uncountable chains and using a suitable lexicographic order on the whole tree, or the Baumgartner/Aronszajn-tree-to-line construction), and the naive 'maximal chains of an Aronszajn tree' does not automatically avoid $\omega_{1}$-subsets. Also the attribution 'Kunen, Set Theory, Chapter II Exercise 32' is stated as showing the line has no increasing or decreasing $\omega_{1}$-sequence and all separable subspaces are scattered; this is a stronger claim than the construction supports.
- **Proposed fix:** Replace with: 'The (⇒) construction uses Suslinity only twice (countable antichains for c.c.c., countable chains for $h(C)<\omega_{1}$). For an Aronszajn tree the resulting lexicographic order on maximal chains is a non-separable linear order, but it need not be an Aronszajn line; to obtain an Aronszajn line one needs an additional argument (e.g. a tree with no uncountable chains together with a suitable ordering), and the precise statement should be checked against Kunen, Set Theory, Chapter II, Exercise 32 before being asserted.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Independence of KH: Silver's collapse and 'cannot be removed' claim imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (独立性) under set:kurepa-trivial
- **Detail:** The supplement states that $\lnot\mathrm{KH}$ is consistent assuming an inaccessible (Silver 1971, Levy collapse of the inaccessible to $\omega_{2}$) and that 'this assumption cannot be removed ($\omega_{2}$ is a Kurepa tree if $\omega_{2}$ is not inaccessible in $L$)'. The parenthetical is misstated: the correct statement is that if $\omega_{2}$ is not inaccessible in $L$ (equivalently, $\omega_{2}$ is not a cardinal in $L$, or $\omega_{2}^{L}<\omega_{2}$), then there is a Kurepa tree (a tree of the form $\{f\restriction\alpha : \alpha<\omega_{2}, f\in\ldots\}$ built from $L$), but the phrasing '$\omega_{2}$ is a Kurepa tree' is literally false ($\omega_{2}$ is an ordinal, not a tree). Also the claim that the inaccessible hypothesis 'cannot be removed' for the consistency of $\lnot$KH is a genuine theorem (Silver), but the justification given is garbled.
- **Proposed fix:** Rewrite: 'The consistency of $\lnot\mathrm{KH}$ follows from the existence of an inaccessible cardinal (Silver 1971: Levy-collapse the inaccessible to $\omega_{2}$). This hypothesis is necessary: if $\omega_{2}$ is not inaccessible in $L$ (i.e. $\omega_{2}^{L}<\omega_{2}$), then a Kurepa tree can be built from $L$, so $\lnot\mathrm{KH}$ implies $\omega_{2}$ is inaccessible in $L$.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Claim that all Aronszajn trees are special under MA(ω₁) misattributed
- **Category:** Supplement/remark error
- **Location:** supplement (より強い結論) under set:ma-no-suslin-tree
- **Detail:** The supplement asserts that under $\mathrm{MA}(\omega_{1})$ every Aronszajn tree is special, attributed to Baumgartner–Malitz–Reinhardt, and that Kunen Chapter II Exercise 41 attributes it to Baumgartner in the form $\mathrm{MA}+\lnot\mathrm{CH}$. The actual theorem of Baumgartner–Malitz–Reinhardt is that $\mathrm{MA}(\omega_{1})$ implies every Aronszajn tree is special — this is correct — but the further claim that 'special Aronszajn trees are not Suslin trees (supplement to \ref{set:aronszajn-exists})' is used to conclude this strengthens the theorem. That is fine, but the attribution to 'Kunen Chapter II Exercise 41 in the form MA + ¬CH' is imprecise: the standard reference is Baumgartner, Malitz, Reinhardt, 'Embedding trees in the rationals' (1970), and the result is stated for $\mathrm{MA}(\omega_{1})$ alone, not $\mathrm{MA}+\lnot\mathrm{CH}$. The parenthetical attribution risks misstating the hypothesis.
- **Proposed fix:** Rewrite: 'Under $\mathrm{MA}(\omega_{1})$ every Aronszajn tree is special (Baumgartner–Malitz–Reinhardt 1970; see also Kunen, Set Theory, Chapter II). Since a special Aronszajn tree has no uncountable antichain and hence is not Suslin, this strengthens the theorem.'
- **Reported:** 2026-10-28 (8ccef3d)
