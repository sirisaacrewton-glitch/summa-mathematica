# Verification tracker: `01-foundations/04-set-theory/07-forcing/02-forcing-relation.html`

<!-- source: 01-foundations/04-set-theory/07-forcing/02-forcing-relation.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main text is logically sound: the definition of $\Vdash^{*}$, the density lemma, the truth lemma, and the forcing theorem are correctly proved, and the citations match their targets. The problems are confined to the supplement. The first bullet of the supplement wrongly claims that definability fails when $M$ is uncountable; in fact definability is a theorem of $\ZFC$ and countability is used only to obtain a generic filter. The sheaf-theoretic analogy also misidentifies dense sets with open covers. Both should be corrected.

## Issues

### ISSUE-0001 [Open] Uncountable M does not make the forcing relation vacuous
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The supplement claims that if $M$ is not countable then $\Vdash$ can become vacuously true (no generic $G$ exists, so every $p$ forces every $\varphi$), and hence definability fails. This is wrong. The definition of $p\Vdash\varphi$ quantifies over all $M$-generic $G$ with $p\in G$; if there are none, then indeed $p\Vdash\varphi$ holds for all $\varphi$ in $\mathbf{V}$. But the definability theorem is a theorem of $\ZFC$ proved inside $\mathbf{V}$ (or in $M$), and it does not require the existence of a generic filter: the equivalence $p\Vdash\varphi\iff(p\Vdash^{*}\varphi)^{M}$ is established by the argument in the proof of \ref{set:forcing-theorem}, where the generic $G$ used in the ($\Rightarrow$) direction is obtained only under the assumption that $M$ is countable. In the actual proof, countability is used only to produce one generic $G$ for the contradiction; the resulting equivalence is a statement about $M$ and $\PP$ that holds regardless. More precisely, if $M$ is a c.t.m. and $\PP\in M$, then for each $\varphi$ the set $\{p:p\Vdash\varphi\}$ is definable in $M$; the proof of the ($\Rightarrow$) direction can be carried out in $\mathbf{V}$ using the fact that $M$ is a set model and the forcing relation is absolute, or by relativizing the argument to a countable elementary submodel. The claim that definability fails for uncountable $M$ is false: the definability lemma is a theorem of $\ZFC$ and does not depend on countability of $M$. The only role of countability is to ensure that generic filters exist, so that the truth lemma has content.
- **Proposed fix:** Replace the bullet with: "The countability of $M$ is used only to guarantee the existence of a generic $G$ (\ref{set:generic-exists}), which is needed for the truth lemma and for the ($\Rightarrow$) direction of \ref{set:forcing-theorem.1} as written. The definability lemma itself, $p\Vdash\varphi\iff(p\Vdash^{*}\varphi)^{M}$, is a theorem of $\ZFC$ about $M$ and $\PP$ and does not require $M$ to be countable; if no generic filter exists, both sides are simply evaluated in $\mathbf{V}$ and the equivalence still holds by the absoluteness argument."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Sheaf-theoretic analogy is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement says that a dense set below $p$ corresponds to an open cover of $U$, and that \ref{set:forcing-star-dense} corresponds to the statement that truth is local and glues over an open cover. This is a loose analogy, but as stated it is misleading: in the sheaf/topos picture, a condition $p$ corresponds to an open set (or a basic open), and a dense set below $p$ corresponds to a dense open set, not to an open cover in the usual sense. The gluing property for sheaves is about compatible sections on an open cover, whereas \ref{set:forcing-star-dense} is about the equivalence between $p\Vdash\varphi$ and density of $\{r:r\Vdash\varphi\}$ below $p$. The statement that $\Vdash$ is a special case of the internal logic of a sheaf topos (Kripke–Joyal semantics) is correct in spirit, but the specific identification of dense sets with open covers is not accurate.
- **Proposed fix:** Replace with: "In the sheaf-theoretic picture, a condition $p$ corresponds to a basic open set, and a dense set below $p$ corresponds to a dense open set rather than an open cover. The gluing property of sheaves is analogous to the fact that truth of a formula is determined by its truth on a dense set of conditions (\ref{set:forcing-star-dense}), but the correspondence is only an analogy."
- **Reported:** 2026-10-28 (10fede1)
