# Verification tracker: `01-foundations/03-computation/01-automata/06-fixed-points.html`

<!-- source: 01-foundations/03-computation/01-automata/06-fixed-points.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Kleene fixed point theorem stated for ω-complete posets but needs continuity
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討
- **Detail:** The supplement says Kleene's fixed point theorem holds on any poset with a least element and suprema of increasing chains (ω-complete poset). But the theorem requires the map to be continuous (ω-continuous), not merely monotone. On an ω-complete poset a monotone map need not have its iteration reach a fixed point at ω; the very next bullet correctly notes that weakening continuity to monotonicity requires transfinite iteration. So the first bullet's claim that the theorem holds 'with the same proof' on an ω-complete poset is imprecise: it holds for ω-continuous maps on an ω-complete poset (or for monotone maps on a complete lattice via transfinite iteration).
- **Proposed fix:** Kleene's fixed point theorem holds for an ω-continuous map on a poset with a least element and suprema of increasing chains (an ω-complete poset); the same proof applies. (For merely monotone maps one needs a complete lattice and transfinite iteration.)
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Lawvere fixed point theorem misstated as 'pointwise surjective'
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement states Lawvere's fixed point theorem as: in a cartesian closed category, if $A\to B^{A}$ is 'pointwise surjective' (点ごとに全射) then every endomorphism of $B$ has a fixed point. The correct hypothesis is that the evaluation/transpose map $A\to B^{A}$ is a surjection on points (a 'weakly point-surjective' map, i.e. every $g\colon A\to B$ is $\mathrm{ev}\circ\langle f,a\rangle$ for some $a$). The phrase 'pointwise surjective' is ambiguous and, read literally, is not the standard hypothesis; the standard statement is that a point-surjective (weakly point-surjective) map $A\to B^{A}$ forces every $g\colon B\to B$ to have a fixed point. As written the hypothesis is unclear/incorrect.
- **Proposed fix:** In a cartesian closed category, if there is a point-surjective (weakly point-surjective) map $A\to B^{A}$ — i.e. every morphism $A\to B$ factors as $\mathrm{ev}\circ\langle f,a\rangle$ for some point $a$ — then every endomorphism $g\colon B\to B$ has a fixed point.
- **Reported:** 2026-10-28 (10fede1)
