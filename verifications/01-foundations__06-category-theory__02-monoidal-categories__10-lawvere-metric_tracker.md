# Verification tracker: `01-foundations/06-category-theory/02-monoidal-categories/10-lawvere-metric.html`

<!-- source: 01-foundations/06-category-theory/02-monoidal-categories/10-lawvere-metric.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems, proofs, and hypcheck are logically sound: the closed-structure adjunction, the enriched Yoneda lemma, and the isometry corollary are correctly argued, and the problem solutions are correct. The only genuine concerns are in the supplement: the comparison with the Kuratowski embedding ignores the boundedness hypothesis of \ref{cat:metric-yoneda-embedding.2}, and the Cauchy-completion remark glosses over the need to quotient by distance-zero points. Both are medium-confidence imprecisions rather than outright errors.

## Issues

### ISSUE-0001 [Open] Kuratowski embedding attribution and boundedness
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says \ref{cat:metric-yoneda-embedding.2} is 'the same form as the Kuratowski embedding used in the construction of the completion (proof of \ref{top:completion-exists})'. But \ref{cat:metric-yoneda-embedding.2} requires $X$ bounded to land in $\ell^{\infty}(X)$; the Kuratowski embedding used for completion works for arbitrary metric spaces (via $d(a,\cdot)-d(x_{0},\cdot)$ or into bounded functions). Calling them 'the same form' without noting the boundedness restriction is imprecise, and the completion construction does not use the bounded-only version.
- **Proposed fix:** The Kuratowski embedding used in the completion construction applies to arbitrary metric spaces (e.g. $a\mapsto d(a,\cdot)-d(x_{0},\cdot)$ into $\ell^{\infty}(X)$), whereas \ref{cat:metric-yoneda-embedding.2} as stated requires $X$ bounded; the two coincide in form only after this adjustment.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Lawvere's Cauchy completion claim overstated
- **Category:** Supplement/remark error
- **Location:** supplement / 完備化
- **Detail:** The supplement states Lawvere showed that the Cauchy completion of a metric space coincides with the enriched-category Cauchy completion. This is a known result but the phrasing 'とされる' (is said to) plus the specific identification of 'all adjoint modules representable' is a strong claim; more importantly, the enriched Cauchy completion of a Lawvere metric space generally yields a category (with possibly multiple points at distance 0), not literally the classical metric completion unless one quotients by $d(a,b)=0$. Stating they 'coincide' without this caveat is imprecise.
- **Proposed fix:** Lawvere observed that the enriched Cauchy completion (the extension in which every adjoint module is representable) of a Lawvere metric space corresponds to the classical Cauchy completion after identifying points at distance $0$; for a genuine metric space (where $d(a,b)=0\Rightarrow a=b$) the two coincide.
- **Reported:** 2026-10-28 (8ccef3d)
