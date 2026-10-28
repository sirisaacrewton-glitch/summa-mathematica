# Verification tracker: `01-foundations/04-set-theory/03-well-founded-sets/04-foundation.html`

<!-- source: 01-foundations/04-set-theory/03-well-founded-sets/04-foundation.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problem is in the intuition of set:ordinal-foundation: the two-Quine-atom example $A=\{a,b\}$ is claimed to be transitive, which is false ($b\in a\in A$ but $b\notin A$), so it fails to illustrate the point. The single Quine atom already suffices. Other supplements (Rieger–Bernays, DC, Kunen Exercise 19, the $\in$-induction alternative proof) were checked and are acceptable.

## Issues

### ISSUE-0001 [Open] Quine atom example: {a,b} is not transitive
- **Category:** Supplement/remark error
- **Location:** set:ordinal-foundation / intuition (「局所的な条件だけでは足りないもの」)
- **Detail:** The intuition claims that if two distinct Quine atoms $a=\{a\}$, $b=\{b\}$ exist, then $A=\{a,b\}$ is transitive and $\in_{A}=\{(a,a),(b,b)\}$ satisfies transitivity, but $a,b$ are incomparable. This is false: $A=\{a,b\}$ is not transitive, since $a\in A$ and $b\in a$ but $b\notin A$ (similarly $a\notin A$ from $b$). So the example does not satisfy the local hypotheses (transitivity of $A$), and cannot serve as a counterexample to 'local conditions suffice'.
- **Proposed fix:** Replace with a correct example: e.g. take $A=\{a,b\}$ where $a=\{a\}$ and $b=\{b\}$; then $A$ is *not* transitive, so it does not satisfy the local hypotheses. A correct illustration of the insufficiency of the local conditions without Foundation is the single Quine atom $x=\{x\}$: it is transitive and $\in_{x}=\{(x,x)\}$ is transitive, yet $x$ is not an ordinal (it violates irreflexivity). If a two-element example is desired, note that any transitive set containing two distinct Quine atoms must also contain their elements, which forces $a\in b$ or $b\in a$, contradicting $a=\{a\}$, $b=\{b\}$; hence no such $A$ exists.
- **Reported:** 2026-10-28 (8ccef3d)
