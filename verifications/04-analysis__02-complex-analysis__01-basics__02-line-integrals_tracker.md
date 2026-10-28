# Verification tracker: `04-analysis/02-complex-analysis/01-basics/02-line-integrals.html`

<!-- source: 04-analysis/02-complex-analysis/01-basics/02-line-integrals.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Star-shaped claim about Cauchy theorem is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says that on star-shaped domains condition 3 always holds, citing \ref{cx:page-cauchy-theorem}. This is only true for holomorphic $f$ (Cauchy's theorem for star-shaped domains). The surrounding discussion is about general continuous $f$ (the supplement explicitly notes that 3⇒1 does not use holomorphicity), so as written the sentence reads as if every continuous function on a star-shaped domain satisfies 3, which is false (e.g. $\bar z$ on a disk). The hypothesis '$f$ holomorphic' must be stated.
- **Proposed fix:** For holomorphic $f$ on a star-shaped domain, condition 3 always holds (\ref{cx:page-cauchy-theorem}); more generally it holds on simply connected domains (\ref{cx:page-winding-number}). For merely continuous $f$ this is false in general.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Gradient-field characterization needs a continuity/hypothesis check
- **Category:** Supplement/remark error
- **Location:** supplement / 類似の定理
- **Detail:** The claim that '$f$ has a primitive iff both real vector fields $(u,-v)$ and $(v,u)$ are gradient fields' is essentially correct via \ref{cx:contour-integral-real} and \ref{vec:conservative-field}, but the cited theorem \ref{vec:conservative-field} characterizes gradient fields by path-independence/vanishing of closed-curve integrals, which requires the fields to be continuous (they are, since $f$ is continuous). The statement is acceptable but should mention that the equivalence is with 'gradient field' in the sense of the cited theorem (continuous field with path-independent line integral), to avoid the false reading that a primitive of $f$ is the same as $f$ itself being a gradient field.
- **Proposed fix:** By \ref{cx:contour-integral-real}, $f=u+iv$ has a primitive on $D$ iff the continuous vector fields $(u,-v)$ and $(v,u)$ both have path-independent line integrals on $D$ (equivalently, are gradient fields in the sense of \ref{vec:conservative-field}).
- **Reported:** 2026-10-28 (10fede1)
