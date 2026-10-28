# Verification tracker: `01-foundations/04-set-theory/07-forcing/03-zfc-in-mg.html`

<!-- source: 01-foundations/04-set-theory/07-forcing/03-zfc-in-mg.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] V≠L corollary uses splitting, not just non-membership of G
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet (set:ctm-v-neq-l)
- **Detail:** The supplement claims that \ref{set:ctm-v-neq-l} uses only that \PP satisfies \eqref{set:eq-splitting}. But the proof of set:ctm-v-neq-l uses only that G\notin M (via set:generic-not-in-m), and the example \PP=\mathrm{Fn}(\omega,2) is chosen for that. The splitting condition \eqref{set:eq-splitting} is not used anywhere in that proof; it is a property relevant to other arguments (e.g. showing G\notin M for specific posets). So the statement overstates/incorrectly identifies the hypothesis actually used.
- **Proposed fix:** Replace with: "\ref{set:ctm-v-neq-l} only uses that the generic filter satisfies $G\notin M$ (\ref{set:generic-not-in-m}); for example $\PP=\mathrm{Fn}(\omega,2)$ works. No c.c.c. or splitting condition is needed for this corollary."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that the class of names with μ_G⊆σ_G is not a set in M
- **Category:** Supplement/remark error
- **Location:** hypcheck, last bullet
- **Detail:** The hypcheck says that the collection of all μ with μ_G⊆σ_G (or μ_G=0) is 'usually not contained in a set of M' (Kunen VII Exercise A9). As stated this is imprecise: the collection {μ∈M^P : μ_G⊆σ_G} is a definable class in M, and for the trivial/typical case it is actually a set in M (indeed the whole proof shows a set S∈M of such names exists). What Kunen's exercise concerns is that the set of all names whose interpretation is a subset of σ_G need not itself be a member of M in the naive sense, but the phrasing 'μ_G=0' makes the claim false (the empty-set name is a single element, and the class of names with μ_G=0 is a set in M). The parenthetical '(あるいは μ_G=0)' is wrong.
- **Proposed fix:** Rewrite: "The key point is that one cannot in general take $S$ to be the class of *all* $\mu\in M^{\PP}$ with $\mu_{G}\subseteq\sigma_{G}$ (this class depends on $G$ and need not be a set in $M$); instead one uses the $M$-definable set $S=\{\tau:\dom(\tau)\subseteq\dom(\sigma)\}$ of names, which suffices." Remove the '(あるいは μ_G=0)' clause.
- **Reported:** 2026-10-28 (10fede1)
