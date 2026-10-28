# Verification tracker: `01-foundations/04-set-theory/07-forcing/02-forcing-relation.html`

<!-- source: 01-foundations/04-set-theory/07-forcing/02-forcing-relation.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, the recursion justifying $\Vdash^{*}$, \ref{set:forcing-star-dense}, \ref{set:forcing-star-truth}, and \ref{set:forcing-theorem}) is logically sound, and the cited labels match their use. The genuine problems are confined to the supplement: the claim that definability fails for uncountable $M$ is false (countability is only needed for the existence of generic filters, not for the equivalence), and the sheaf-theoretic analogy misdescribes the direction of \ref{set:forcing-star-dense}. Both are correctable by rewording.

## Issues

### ISSUE-0001 [Open] Claim that definability fails without countability is false
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The supplement claims that if $M$ is not countable then $\Vdash$ can become vacuously true (no generic $G$ exists, so every $p$ forces every $\varphi$) and hence definability fails. This is wrong. The definition of $p\Vdash\varphi$ is a genuine statement in $\mathbf{V}$ (a universal statement over all generic filters); it is not relativized to $M$'s satisfaction. The equivalence $p\Vdash\varphi\iff(p\Vdash^{*}\varphi)^{M}$ is a theorem of $\ZFC$ proved for arbitrary c.t.m. $M$; the countability of $M$ is used only to guarantee that generic filters exist (via \ref{set:generic-exists}), not for the equivalence itself. Indeed the proof of \ref{set:forcing-theorem.1} ($\Rightarrow$) uses a generic $G$ only to derive a contradiction, and the statement '$\{p:p\Vdash\varphi\}\in M$' holds regardless. The claim that 'definability fails' for uncountable $M$ is a false overstatement.
- **Proposed fix:** Replace with: 'The countability of $M$ (existence of a generic $G$, \ref{set:generic-exists}) is used in the ($\Rightarrow$) direction of \ref{set:forcing-theorem.1} to produce a generic filter for the contradiction argument. The equivalence $p\Vdash\varphi\iff(p\Vdash^{*}\varphi)^{M}$ itself is a theorem of $\ZFC$ for any c.t.m. $M$; countability only ensures that generic filters exist so that $\Vdash$ is not vacuous. In particular $\{p:p\Vdash\varphi\}\in M$ holds for every c.t.m. $M$.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Sheaf/coverage analogy misidentifies the gluing direction
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement says that \ref{set:forcing-star-dense} corresponds to 'truth is a local property: true on an open cover implies true globally' (gluing). But \ref{set:forcing-star-dense} states the opposite direction: if $p\Vdash^{*}\varphi$ then every $r\le p$ forces $\varphi$ (truth passes to refinements/restrictions), i.e. truth is local in the sense of being preserved when restricting to a smaller condition. The 'gluing' direction (local truth on a cover implies global truth) is not what \ref{set:forcing-star-dense} says; it would correspond rather to the density/maximality property. As stated the identification of \ref{set:forcing-star-dense} with 'true on an open cover implies true globally' is imprecise/incorrect.
- **Proposed fix:** Replace with: '\ref{set:forcing-star-dense} corresponds to the fact that truth is preserved under restriction to a smaller condition (a refinement), analogous to a section over $U$ restricting to a section over $V\subset U$; the converse gluing direction (local truth on a cover implies global truth) is a separate property of the sheaf/topos semantics.'
- **Reported:** 2026-10-28 (8ccef3d)
