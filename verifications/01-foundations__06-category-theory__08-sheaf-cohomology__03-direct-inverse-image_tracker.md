# Verification tracker: `01-foundations/06-category-theory/08-sheaf-cohomology/03-direct-inverse-image.html`

<!-- source: 01-foundations/06-category-theory/08-sheaf-cohomology/03-direct-inverse-image.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (direct/inverse image, adjunction, stalk computation, etale pullback, extension by zero) is logically sound. The genuine problems are concentrated in the supplement: the claim that $f^{-1}$ preserves finite limits for an arbitrary continuous map is false (it holds only when $f$ is, e.g., an open map), and the resulting assertion that $(f^{-1}\dashv f_{*})$ is always a geometric morphism is therefore wrong. The Verdier duality sentence also overstates the hypotheses under which $f_{!}$ and $f^{!}$ exist. The closed-embedding remark is essentially correct but could be sharpened.

## Issues

### ISSUE-0001 [Open] f^{-1} does not preserve finite limits in general
- **Category:** Supplement/remark error
- **Location:** supplement / 完全性
- **Detail:** The supplement claims that f^{-1} preserves finite limits because its stalks are G_{f(x)} and 'taking stalks commutes with finite limits'. This is false in general: for a sheaf on a general topological space, the stalk functor preserves finite limits only when the space is locally nice (e.g. the point has a basis of open sets whose ... actually stalks of sheaves on a topological space do commute with finite limits, but the inverse image f^{-1} does NOT preserve finite limits in general — it preserves finite limits only when f is an open map (or more generally when the pullback of etale spaces behaves well). The standard correct statement: f^{-1} preserves all colimits (left adjoint) and finite limits iff f is 'flat', which for topological spaces holds when f is an open map; in general f^{-1} need not be left exact. The claim that f^{-1} is exact (preserves finite limits) for arbitrary continuous f is wrong.
- **Proposed fix:** Replace with: '$f^{-1}$ is a left adjoint, hence preserves all colimits. It preserves finite limits (i.e. is left exact) when $f$ is an open map; for a general continuous map $f$ this can fail. When $f^{-1}$ is left exact, $(f^{-1}\dashv f_{*})$ is a geometric morphism of topoi.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] f_{*} left exact claim needs the sheaf-theoretic setting
- **Category:** Supplement/remark error
- **Location:** supplement / 完全性
- **Detail:** The supplement says '$f_{*}$ is a right adjoint so preserves limits, but generally not colimits; on abelian sheaves $f_{*}$ is left exact but not right exact.' The left-exactness of $f_{*}$ on abelian sheaves is correct (it preserves kernels and finite limits as a right adjoint), so this part is fine. However the preceding sentence lumps this together with the false exactness claim for $f^{-1}$; the overall paragraph asserts that $(f^{-1}\dashv f_{*})$ is a geometric morphism for arbitrary $f$, which requires $f^{-1}$ left exact — not true in general.
- **Proposed fix:** State: '$f_{*}$ is a right adjoint, hence left exact and preserves limits, but generally not colimits. $f^{-1}$ preserves colimits; it is left exact (so that $(f^{-1}\dashv f_{*})$ is a geometric morphism) when $f$ is an open map.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Verdier duality attribution for f_{!} and f^{!}
- **Category:** Supplement/remark error
- **Location:** supplement / f_{!} と f^{!}
- **Detail:** The supplement states that for a general continuous map between locally compact spaces there is a compactly supported direct image $f_{!}$ with a right adjoint $f^{!}$ in the derived category (Verdier duality), and that extension by zero is the case of an open embedding. This is imprecise: $f_{!}$ (compactly supported pushforward) is defined for maps that are, e.g., separated and of finite type / proper-like hypotheses, and the existence of the right adjoint $f^{!}$ requires $f$ to be, e.g., a proper or more generally a 'nice' map (Verdier duality holds under finiteness hypotheses such as $f$ proper or $f$ of finite cohomological dimension). Stating it for 'general continuous maps between locally compact spaces' overstates the literature.
- **Proposed fix:** Restrict to the standard hypotheses: 'For a continuous map $f$ between locally compact spaces that is, e.g., proper (or more generally under suitable finiteness hypotheses), there is a compactly supported direct image $f_{!}$ with a right adjoint $f^{!}$ on the derived category (Verdier duality). Extension by zero is the case of an open embedding.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Closed embedding i_{!}=i_{*} remark
- **Category:** Supplement/remark error
- **Location:** hypcheck
- **Detail:** The hypcheck says 'for a closed embedding one may regard $i_{!}=i_{*}$'. For a closed embedding $i:Z\to X$, the extension by zero $i_{!}$ (as a functor on sheaves on $Z$ to sheaves on $X$) does agree with $i_{*}$ on the level of sheaves, since $i_{*}$ already has zero stalks off $Z$. This is correct, but the statement is presented as 'known (not on this site)' without the caveat that this is special to closed embeddings and that $i_{!}$ here is the *sheaf-theoretic* extension (not the derived/compactly-supported one). As stated it is acceptable; no change strictly required, but the identification should be flagged as the sheaf-level statement.
- **Proposed fix:** Clarify: 'For a closed embedding $i$, the sheaf-level extension by zero satisfies $i_{!}\cong i_{*}$ (both have zero stalks off $Z$ and agree on $Z$).'
- **Reported:** 2026-10-28 (8ccef3d)
