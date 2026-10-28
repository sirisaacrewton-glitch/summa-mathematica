# Verification tracker: `01-foundations/05-proof-theory/07-reverse-mathematics/02-wkl0.html`

<!-- source: 01-foundations/05-proof-theory/07-reverse-mathematics/02-wkl0.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Replacing Δ⁰₁ comprehension by WKL does not give WKL₀
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The supplement claims that replacing the Δ⁰₁ comprehension axiom of RCA₀ by Σ⁰₁ separation yields a system equivalent to WKL₀, and that replacing Δ⁰₁ comprehension by WKL alone does not. The first claim is correct (RCA₀ + Σ⁰₁-SEP = WKL₀ since Σ⁰₁-SEP implies Δ⁰₁-CA). But the second claim is stated misleadingly: RCA₀ without Δ⁰₁-CA is not even a system in which WKL makes sense as usually formulated, and the parenthetical justification ("the collection domain may be almost empty so WKL holds trivially") is imprecise — WKL is a statement about trees coded as sets, and without Δ⁰₁-CA one cannot even prove basic closure facts. The contrast as stated ("replacing Δ⁰₁-CA by WKL alone does not give equivalence") is not a meaningful mathematical claim about subsystems of second-order arithmetic and is stated too strongly.
- **Proposed fix:** Replace with: "RCA₀ with Δ⁰₁ comprehension replaced by Σ⁰₁ separation is equivalent to WKL₀ (Σ⁰₁-SEP implies Δ⁰₁-CA). Note that Δ⁰₁-CA is needed to develop basic coding (e.g. closure of the set of codes of a tree under initial segments); WKL alone, without Δ⁰₁-CA, is not a well-behaved subsystem, so the equivalence is properly stated over RCA₀."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Low basis iteration and ω-models omitting ∅′
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果, low basis bullet
- **Detail:** The claim "iterating this gives an ω-model of WKL₀ all of whose elements are low, and since it does not contain ∅′ we get WKL₀ ≠ ACA₀" is imprecise. The standard construction (low basis theorem iterated along a tree of attempts) yields an ω-model of WKL₀ consisting of low sets, and such a model cannot contain ∅′ because ∅′ is not low (∅′ is not low: (∅′)′ = ∅′′ >_T ∅′). This part is fine, but the phrase "all of whose elements are low" combined with "does not contain ∅′" needs the explicit reason: ∅′ is not low. As written the inference "does not contain ∅′ so WKL₀ ≠ ACA₀" skips the justification that ACA₀ requires ∅′ (or that every ω-model of ACA₀ is closed under the Turing jump and hence contains ∅′).
- **Proposed fix:** Add the missing justification: "Every ω-model of ACA₀ is closed under the Turing jump, hence contains ∅′; since ∅′ is not low ((∅′)′ >_T ∅′), a low ω-model of WKL₀ omits ∅′ and therefore is not a model of ACA₀, giving WKL₀ ≠ ACA₀."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Conservation of WKL₀ over PRA attributed to Friedman and Hilbert program remark
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果, conservation bullet
- **Detail:** The bullet states WKL₀ is Π¹₁-conservative over RCA₀ (Harrington) and Π⁰₂-conservative over PRA (Friedman), then says this is "called a partial realization of Hilbert's program (Simpson)". The conservativity results are correctly attributed (Friedman for Π⁰₂ over PRA; Harrington for Π¹₁ over RCA₀). However, the phrase "called a partial realization of Hilbert's program" is an overstatement: conservativity of WKL₀ over PRA is usually described as a partial realization of Hilbert's program *for that particular theory*, and the standard reference is Simpson's book, but the claim as stated (unqualified) is stronger than the literature supports — it is a specific technical result, not a general realization.
- **Proposed fix:** Rephrase: "This Π⁰₂-conservativity is often cited (e.g. Simpson, Subsystems of Second Order Arithmetic) as a partial realization of Hilbert's program for the fragment of analysis formalized in WKL₀."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Heine–Borel restricted to countable covers
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The bullet says Heine–Borel was restricted to "countable open covers" because only countable covers are expressible in second-order arithmetic. This is imprecise: in second-order arithmetic an open cover is given by a code (a set of codes of rational intervals), which is a countable family, but the restriction is not merely a limitation of expressibility — it is the correct formulation because the general (uncountable) Heine–Borel theorem is not provable in WKL₀ and the coded version is the one equivalent to WKL. The phrasing suggests the restriction is a technical convenience rather than an essential feature of the reverse-mathematics result.
- **Proposed fix:** Rephrase: "In second-order arithmetic an open cover is represented by a code, i.e. a countable family of rational intervals; this coded (countable) form of Heine–Borel is the one equivalent to WKL over RCA₀. The unrestricted statement for arbitrary families of open sets is not a statement of second-order arithmetic."
- **Reported:** 2026-10-28 (8ccef3d)
