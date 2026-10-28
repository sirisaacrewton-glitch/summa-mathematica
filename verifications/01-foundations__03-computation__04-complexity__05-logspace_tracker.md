# Verification tracker: `01-foundations/03-computation/04-complexity/05-logspace.html`

<!-- source: 01-foundations/03-computation/04-complexity/05-logspace.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is mathematically sound overall: the definitions, the NL ⊆ P proof, the log-space reduction composition lemma, the NL-completeness of PATH, and the Immerman–Szelepcsenyi proof are correct. The main genuine problem is in the supplement: the generalization NSPACE(f) = coNSPACE(f) is stated for all f ≥ log n without the required space-constructibility hypothesis. A minor attribution imprecision (Reingold 2005 vs. 2008) is also noted. The descriptive-complexity remark is essentially correct and not reported as an error.

## Issues

### ISSUE-0001 [Open] Immerman–Szelepcsenyi generalization stated without the space-constructibility hypothesis
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The supplement claims the proof gives NSPACE(f(n)) = coNSPACE(f(n)) for all f(n) ≥ log n (that are space-computable). The standard Immerman–Szelepcsenyi theorem requires f to be space-constructible (and f(n) ≥ log n). The parenthetical '(領域で計算できる)' is vague and, as written, the sentence asserts the result for 'all f ≥ log n', which is false without space-constructibility. The precise statement must require f space-constructible.
- **Proposed fix:** For every space-constructible f with f(n) ≥ log n, NSPACE(f(n)) = coNSPACE(f(n)). In particular, the context-sensitive languages (recognized by linear-bounded automata) are closed under complement, which is known as the solution of Kuroda's 'second LBA problem'.
- **Reported:** 2026-10-28 (8ccef3d)
