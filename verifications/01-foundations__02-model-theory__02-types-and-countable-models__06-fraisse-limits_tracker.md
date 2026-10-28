# Verification tracker: `01-foundations/02-model-theory/02-types-and-countable-models/06-fraisse-limits.html`

<!-- source: 01-foundations/02-model-theory/02-types-and-countable-models/06-fraisse-limits.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, Fraïssé theorem, proof, examples, corollary, problems) is logically sound. The genuine problems are concentrated in the supplement: the identification of the Urysohn space as the Fraïssé limit of finite rational metric spaces is incorrect (that limit is the rational Urysohn space), the attribution of the Hall universal locally finite group as the limit of all finite groups is misapplied, and the remark on ω-categoricity for infinite languages is overstated.

## Issues

### ISSUE-0001 [Open] Urysohn space is not the Fraïssé limit of finite metric spaces with rational distances
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement states that the Urysohn space is the Fraïssé limit of the class of finite metric spaces with rational distances (and calls it the completion of the rational Urysohn space). This is wrong: the Fraïssé limit of finite rational-distance metric spaces is the rational Urysohn space itself (a countable structure), not the (complete, uncountable) Urysohn space. The Urysohn space is the completion of the rational Urysohn space, but it is not a Fraïssé limit in the countable-model sense (it is uncountable and not the limit of that finite class). The sentence conflates the two.
- **Proposed fix:** The Fraïssé limit of the class of finite metric spaces with rational distances is the **rational Urysohn space** (a countable ultrahomogeneous metric space); the (complete) Urysohn space is its completion, and is a universal separable metric space.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Fraïssé limit of finite groups is not the Hall universal locally finite group
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that the class of finite groups has HP, JEP, AP and that its Fraïssé limit is the Hall universal locally finite group. The Hall universal locally finite group is the Fraïssé limit of the class of *finite groups all of whose subgroups are contained in a fixed finite group* (equivalently, the locally finite groups with bounded finite subgroups), not of all finite groups. The Fraïssé limit of all finite groups is a different object (the universal, homogeneous, locally finite group built from all finite groups), and the class of all finite groups does not have the amalgamation property in the relevant sense for this identification. The attribution to Hall is thus misapplied.
- **Proposed fix:** For a fixed finite group $H$, the class of finite groups all of whose subgroups are isomorphic to subgroups of $H$ has HP, JEP, AP, and its Fraïssé limit is the Hall universal locally finite group for $H$. The class of all finite groups does not have a Fraïssé limit in the same sense.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] ω-categoricity need not fail for infinite languages with countably many isomorphism types
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement asserts that if the language is infinite but the class has countably many isomorphism types, existence and uniqueness hold but ω-categoricity is 'generally lost'. This is imprecise/overstated: ω-categoricity can still hold (e.g. a countable structure with countably many types in an infinite language may still be ω-categorical). The claim that it is 'generally lost' is not a theorem and is stated too strongly.
- **Proposed fix:** If the language is infinite but the class has only countably many isomorphism types, existence and uniqueness of the Fraïssé limit still hold; however, ω-categoricity of its theory is no longer guaranteed and must be checked separately.
- **Reported:** 2026-10-28 (8ccef3d)
