# Verification tracker: `01-foundations/06-category-theory/04-kan-extensions/03-kan.html`

<!-- source: 01-foundations/06-category-theory/04-kan-extensions/03-kan.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definition, pointwise formula theorem and its proof, existence corollary, fully-faithful corollary, and the worked examples) is logically sound: the steps in the proof of cat:ran-pointwise correctly verify functoriality, naturality, the counit identity, and uniqueness, and the fully-faithful corollary correctly uses the initial-object argument. The genuine problem is in the supplement: the 'non-existence' example using discrete categories and a non-surjective K is mathematically false, since in discrete categories the pointwise (co)limit is just a (co)product over the fiber and always exists (empty product = terminal, empty coproduct = initial). This should be corrected or removed.

## Issues

### ISSUE-0001 [Open] Discrete-category non-existence claim is wrong
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that when M, C, A are all discrete categories, A has at least two objects, and K is not surjective, the Kan extension may fail to exist because the value at a point of C\K(M) cannot be chosen universally in A. This is false. For discrete categories, a functor is just a function and a natural transformation is a pointwise inequality. The right Kan extension always exists: (Ran_K T)(c) = lim over (c↓K) of T, which for discrete categories is the product of T(m) over all m with K(m)=c; if the fiber is empty this is the terminal object (the empty product), which exists in any discrete category with a terminal object. Similarly the left Kan extension is the coproduct over the fiber, i.e. the initial object for empty fibers. So no non-existence arises from K not being surjective. The cited 'Mac Lane X.3 Exercise 3' does not support this claim as stated.
- **Proposed fix:** Replace with a correct statement, e.g.: 'Kan extensions can fail to exist when the relevant limits/colimits do not exist in A. For instance, if A is a discrete category with two objects and M, C are discrete, then for K not surjective the right Kan extension at a point c with empty fiber would require a terminal object of A; if A lacks one, Ran_K T does not exist.' (Or simply delete the paragraph.)
- **Reported:** 2026-10-28 (8ccef3d)
