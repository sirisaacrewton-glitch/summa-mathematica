# Verification tracker: `01-foundations/03-computation/02-computability/02-primitive-recursive.html`

<!-- source: 01-foundations/03-computation/02-computability/02-primitive-recursive.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs (PR = for-computable, pairing, simultaneous recursion, closure properties) are logically sound and the citations match their targets. The problems and solutions are correct. The genuine issues concentrate in the supplement: the claim that parameter-free recursion alone generates all primitive recursive functions (attributed to Robinson) is incorrect as stated, the Meyer–Ritchie hierarchy indexing (E^{n+1}) is off by one relative to the standard E_n correspondence, and the Σ-definability remark should be stated as Δ_0-definability for precision.

## Issues

### ISSUE-0001 [Open] Robinson's restriction claim is misstated
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The supplement claims that restricting primitive recursion to the parameter-free form (f(0)=c, f(y+1)=h(y,f(y))) still yields the same class PR, attributing this to Robinson. This is false: parameter-free recursion alone (with composition) does not generate all primitive recursive functions — e.g. functions requiring genuine parameter recursion such as addition's dependence on a parameter cannot be recovered without a coding argument that itself needs parameter recursion or simultaneous recursion. The standard result (Raphael Robinson) is about a different restricted schema, not simply 'parameter-free recursion gives the same class'. As stated the claim is overstated/incorrect.
- **Proposed fix:** Replace with: 'It is known (R. M. Robinson) that a suitably restricted recursion schema — allowing only certain unary recursions together with composition and a pairing/coding apparatus — still generates the same class of primitive recursive functions; the naive restriction to parameter-free recursion f(0)=c, f(y+1)=h(y,f(y)) alone does not suffice. This site does not verify these claims.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Loop-depth hierarchy indexing may be off
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果, first bullet
- **Detail:** The supplement states that the class L_n of functions computable by for-programs with nesting depth ≤ n coincides with the Grzegorczyk class E^{n+1} for n≥2 (Meyer–Ritchie 1967). The standard Meyer–Ritchie correspondence is that loop programs of nesting depth n compute exactly the Grzegorczyk class E_n (with the usual indexing E_0 ⊂ E_1 ⊂ E_2 ⊂ ...), and the strict increase holds for the whole hierarchy. The shift by one (E^{n+1}) is an imprecise/overstated indexing claim that is not justified and conflicts with the standard statement.
- **Proposed fix:** State: 'The class L_n of functions computable by for-programs of nesting depth ≤ n is strictly increasing in n and coincides with the Grzegorczyk class E_n (Meyer–Ritchie 1967). This site does not prove it.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Σ-definability claim needs a boundedness/Δ_0 qualifier
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果, second bullet
- **Detail:** The supplement says primitive recursive functions are definable in PA by Σ formulas and their recursion equations are provable in PA. The graph of a primitive recursive function is Δ_0 (bounded) definable, hence both Σ and Π; saying merely 'Σ formula' is acceptable but the stronger implicit claim that the defining Σ formula captures the function in all models requires the bounded (Δ_0) form. As written it is imprecise but not false; however combined with 'the recursion equations are provable in PA' the intended content is the Δ_0 representability, which should be stated precisely.
- **Proposed fix:** State: 'Every primitive recursive function is Δ_0-definable (hence Σ-definable) in PA, and PA proves the defining recursion equations; this Δ_0 representability is what is used in the incompleteness theorem.'
- **Reported:** 2026-10-28 (10fede1)
