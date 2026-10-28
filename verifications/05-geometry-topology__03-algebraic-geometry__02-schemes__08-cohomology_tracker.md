# Verification tracker: `05-geometry-topology/03-algebraic-geometry/02-schemes/08-cohomology.html`

<!-- source: 05-geometry-topology/03-algebraic-geometry/02-schemes/08-cohomology.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Grothendieck vanishing stated for non-Noetherian spaces
- **Category:** Supplement/remark error
- **Location:** remark 高次のコホモロジー
- **Detail:** The remark states that for a Noetherian topological space $X$ and any abelian sheaf $F$, $H^{q}(X,F)=0$ for $q>\dim X$. Grothendieck's vanishing theorem requires $X$ to be a Noetherian *scheme* (or at least a locally Noetherian space with a structure sheaf / a Noetherian space of finite Krull dimension in the scheme sense) and $F$ a sheaf of $\mathcal{O}_{X}$-modules (quasi-coherent suffices). For a bare Noetherian topological space with an arbitrary abelian sheaf the statement is false in general: the relevant dimension is the Krull dimension of the scheme, and the result is a theorem about quasi-coherent sheaves on Noetherian schemes, not arbitrary abelian sheaves on Noetherian spaces. As written the hypothesis is too weak.
- **Proposed fix:** More generally, for a Noetherian *scheme* $X$ and a quasi-coherent sheaf $F$ on $X$, one has $H^{q}(X,F)=0$ for $q>\dim X$ (**Grothendieck's vanishing theorem**; not covered on this site).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Serre's criterion misstated as requiring only $H^{1}=0$
- **Category:** Supplement/remark error
- **Location:** remark セールの FAC とグロタンディークの東北論文, item 3
- **Detail:** The remark claims: for a Noetherian scheme $X$, if $H^{1}=0$ for all quasi-coherent sheaves (coherent ideal sheaves suffice), then $X$ is affine (Serre's criterion). Serre's criterion requires the vanishing of *all* higher cohomology $H^{q}$ ($q\ge1$), not just $H^{1}$. Vanishing of $H^{1}$ alone for all quasi-coherent sheaves does not characterize affineness in general; the standard statement is that $X$ is affine iff $H^{q}(X,\mathcal{F})=0$ for all $q>0$ and all quasi-coherent $\mathcal{F}$ (equivalently all coherent ideal sheaves).
- **Proposed fix:** Conversely, a Noetherian scheme $X$ is affine if and only if $H^{q}(X,\mathcal{F})=0$ for all $q\ge1$ and all quasi-coherent sheaves $\mathcal{F}$ (coherent ideal sheaves suffice) (**Serre's criterion**; not covered on this site).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Serre finiteness/vanishing attributed to projective schemes without properness
- **Category:** Supplement/remark error
- **Location:** supplement 前提を変えると
- **Detail:** The supplement states Serre's finiteness and vanishing theorem for 'projective schemes' as: $H^{q}(X,\mathcal{F})$ finitely generated and $H^{q}(X,\mathcal{F}(n))=0$ for $n\gg0$ ($q\ge1$). This is correct for a projective (hence proper) scheme over a Noetherian ring with $\mathcal{F}$ coherent, but the statement as written omits the essential hypotheses: $X$ must be projective over a Noetherian ring (or field) and $\mathcal{F}$ coherent, and $\mathcal{F}(n)$ requires a fixed ample line bundle. Without these the claim is false (e.g. over a non-Noetherian base, or for non-coherent sheaves).
- **Proposed fix:** For a projective scheme $X$ over a Noetherian ring $A$ with a fixed ample line bundle $\mathcal{O}(1)$, and a coherent sheaf $\mathcal{F}$ on $X$, Serre's finiteness and vanishing theorems hold: $H^{q}(X,\mathcal{F})$ is a finitely generated $A$-module for all $q$, and $H^{q}(X,\mathcal{F}(n))=0$ for $n\gg0$ and $q\ge1$ (not covered on this site).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] GAGA attribution imprecise
- **Category:** Supplement/remark error
- **Location:** supplement 似た定理
- **Detail:** The supplement says 'for projective varieties, Serre's GAGA shows algebraic and analytic cohomology of coherent sheaves agree.' GAGA is due to Serre, but the attribution 'Serre's GAGA' is fine; however the statement should specify a projective variety over $\mathbb{C}$ (or a proper $\mathbb{C}$-scheme) and coherent algebraic/analytic sheaves. As written ('projective varieties') it is essentially correct but omits the base field $\mathbb{C}$ and the coherence hypothesis, which are essential.
- **Proposed fix:** For a projective variety $X$ over $\mathbb{C}$ and a coherent algebraic sheaf $\mathcal{F}$, Serre's GAGA theorem shows that the algebraic cohomology $H^{q}(X,\mathcal{F})$ agrees with the cohomology of the associated analytic coherent sheaf.
- **Reported:** 2026-10-28 (10fede1)
