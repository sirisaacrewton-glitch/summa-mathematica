# Verification tracker: `04-analysis/02-complex-analysis/01-basics/04-cauchy-formula.html`

<!-- source: 04-analysis/02-complex-analysis/01-basics/04-cauchy-formula.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect claim that the Galois-theoretic proof uses only the intermediate value theorem for reals
- **Category:** Supplement/remark error
- **Location:** cx:fundamental-theorem-algebra / hypcheck (別証明)
- **Detail:** The hypcheck says the analytic proof (Liouville) is the main one and that the Galois-theoretic proof 'keeps analysis to the real intermediate value theorem only, doing the rest by algebra'. But the cited fld:fundamental-theorem-algebra proof uses two real facts: every odd-degree real polynomial has a real root (which is the intermediate value theorem) AND every complex number has a square root. The latter is not the intermediate value theorem; it requires more (e.g. polar form / existence of real square roots via completeness). So the description of what analysis is used is imprecise/overstated.
- **Proposed fix:** Replace with: 'The Galois-theoretic proof uses two facts about the reals: every odd-degree real polynomial has a real root (intermediate value theorem) and every complex number has a square root (existence of real square roots, via completeness). The rest is algebra (fundamental theorem of Galois theory and Sylow's theorem).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that the identity theorem alone yields e^{z+w}=e^z e^w for all complex z,w
- **Category:** Supplement/remark error
- **Location:** cx:sec-cf-identity / supplement (関数等式の延長)
- **Detail:** The supplement says identities like sin^2 z + cos^2 z = 1 and e^{z+w}=e^z e^w follow 'from the real identity by the identity theorem alone'. For e^{z+w}=e^z e^w one must fix one variable and vary the other; the identity theorem applies in one variable at a time, so a two-variable argument (fix w real, extend in z; then fix z complex, extend in w) is needed. Saying it follows 'by the identity theorem alone' is imprecise about the quantifier structure, though the conclusion is true.
- **Proposed fix:** State: 'For a two-variable identity such as e^{z+w}=e^z e^w, fix w real and apply the identity theorem in z to extend to all complex z; then fix z complex and apply it in w. Thus the real identity extends to all complex z,w.'
- **Reported:** 2026-10-28 (8ccef3d)
