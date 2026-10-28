# Verification tracker: `01-foundations/04-set-theory/07-forcing/01-generic-extensions.html`

<!-- source: 01-foundations/04-set-theory/07-forcing/01-generic-extensions.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Non-existence of generic filter for M=V is misattributed to eq-splitting
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The supplement claims that if $M=\mathbf{V}$ then for a $\PP$ satisfying \eqref{set:eq-splitting} no filter meeting all dense sets in $M$ exists, justified by the same argument as \ref{set:generic-not-in-m}. But \ref{set:generic-not-in-m} only shows $G\notin M$; when $M=\mathbf{V}$ this is vacuous (no set is outside $\mathbf{V}$). The actual reason no $M$-generic filter exists is that $D_{p}=\{q:q\perp p\}$ (or $\PP\setminus\{q:q\le p\}$) is a dense set in $M=\mathbf{V}$ that any filter must miss for some $p$. The cited argument does not establish the claim.
- **Proposed fix:** Replace with: 'If $M=\mathbf{V}$ (or any model containing all dense sets), no $M$-generic filter exists: for any $p\in\PP$ the set $D_{p}=\{q\in\PP: q\perp p\}$ is dense (given \eqref{set:eq-splitting}), and a filter meeting $D_{p}$ cannot contain $p$; since a filter is nonempty it contains some $p$, contradiction.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that name theory uses no order is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, third bullet
- **Detail:** The bullet says 'the theory of names does not use the order of $\PP$; the order first matters in the forcing relation on the next page.' But the definition of $\PP$-name uses $p\in\PP$ (the underlying set), and more importantly the value $\mathrm{val}(\tau,G)$ and results like \ref{set:check-name-val} use $\mathbf{1}\in G$, which is a property of the order (maximal element) and the filter. Also \ref{set:generic-not-in-m} uses compatibility ($\perp$), which is defined via the order. So the order is already used on this page.
- **Proposed fix:** Weaken to: 'The definition of $\PP$-name itself refers only to the underlying set $\PP$, not to $\le$; but the value $\mathrm{val}(\tau,G)$ and the lemmas on this page already use $\mathbf{1}\in G$ and compatibility. The forcing relation on the next page makes systematic use of $\le$.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Overstated analogy: generic filter 'is not any particular set in M'
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The analogy states that $G$ 'satisfies every dense request in $M$ but is not any particular set in $M$ (\ref{set:generic-not-in-m})'. However \ref{set:generic-not-in-m} requires the splitting condition \eqref{set:eq-splitting}; without it a generic filter can belong to $M$ (as the text itself notes via Kunen exercise A1). The parenthetical citation thus overstates the generality of $G\notin M$.
- **Proposed fix:** Add the hypothesis: 'provided $\PP$ satisfies \eqref{set:eq-splitting}, $G\notin M$ (\ref{set:generic-not-in-m}); in general a generic filter may lie in $M$.'
- **Reported:** 2026-10-28 (8ccef3d)
