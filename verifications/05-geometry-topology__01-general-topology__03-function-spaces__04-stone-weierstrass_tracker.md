# Verification tracker: `05-geometry-topology/01-general-topology/03-function-spaces/04-stone-weierstrass.html`

<!-- source: 05-geometry-topology/01-general-topology/03-function-spaces/04-stone-weierstrass.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem, lemmas, and proofs are logically sound. The most serious problem is in the supplement's treatment of the non-unital case: the claim that a point-separating subalgebra vanishing at one point has closure {f : f(x_0)=0} is false without the additional hypothesis that A has no other common zero, since a subalgebra vanishing at two points has a strictly smaller closure. The complex case counterexample is essentially correct.

## Issues

### ISSUE-0001 [Open] Non-unital case: 'vanishing at one point' closure claim is wrong
- **Category:** Supplement/remark error
- **Location:** supplement / 定数を含まない場合
- **Detail:** The supplement claims that a point-separating subalgebra which vanishes at some point x_0 has closure {f : f(x_0)=0}. This is false as stated: the closure is {f : f(x_0)=0} only if A separates points AND for every x≠x_0 there is g∈A with g(x)≠0 (i.e. A does not vanish at any other point). If A vanishes at two points x_0 and x_1, the closure is contained in {f : f(x_0)=f(x_1)=0}, which is strictly smaller. The correct statement of the non-unital Stone–Weierstrass theorem requires that A separates points and that for each x there is g∈A with g(x)≠0 (no common zero), in which case the closure is all of C(X); the 'vanishing at exactly one point' case is a special case of this.
- **Proposed fix:** Replace with: 'If A separates points and has no common zero (for every x there is g∈A with g(x)≠0), then A is dense. If A separates points and vanishes at exactly one point x_0 (and at no other point), then the closure of A is {f : f(x_0)=0}. In general, if A separates points and Z = {x : g(x)=0 for all g∈A} is the common zero set, the closure of A is {f : f|_Z = 0}.'
- **Reported:** 2026-10-28 (8ccef3d)
