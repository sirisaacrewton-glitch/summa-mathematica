# Verification tracker: `01-foundations/05-proof-theory/06-second-order-arithmetic/01-language-and-subsystems.html`

<!-- source: 01-foundations/05-proof-theory/06-second-order-arithmetic/01-language-and-subsystems.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the definitions of L₂, the hierarchy, the big five, the RCA₀ basic facts, and the ω-model characterizations (RCA₀ ↔ Turing ideals, ACA₀ ↔ jump ideals) are accurate, and the proofs are sound. The main concerns are in the supplement: the conservation statement conflates the IΣ₁-conservation with the Π⁰₂-conservation over PRA, and the informal characterization of Π¹₁-CA₀ as 'deciding well-orderings' is imprecise. The proof-theoretic ordinal list is standard and acceptable. No issues in the theorems, propositions, or their proofs were found.

## Issues

### ISSUE-0001 [Open] RCA₀ is not a Π⁰₂-conservative extension of PRA
- **Category:** Supplement/remark error
- **Location:** supplement / 保存性
- **Detail:** The supplement claims that RCA₀ and WKL₀ are conservative extensions of PRA for Π⁰₂ sentences (and of IΣ₁). The standard result (Harrington, Friedman) is that WKL₀ is Π¹₁-conservative over RCA₀, and that RCA₀ and WKL₀ are Π⁰₂-conservative over PRA — but the sentence as written attributes the Π⁰₂/PRA conservation to both RCA₀ and WKL₀ jointly with the IΣ₁ claim in a way that conflates two distinct results. More importantly, RCA₀ is conservative over IΣ₁ for all arithmetic sentences (it is an extension of IΣ₁ with the same first-order consequences), whereas the Π⁰₂-conservation over PRA is the Friedman result for RCA₀ and WKL₀. The phrasing 'したがって Π⁰₂ 文について PRA の保存拡大' applied to both is imprecise: RCA₀'s first-order part is IΣ₁, and PRA is strictly weaker than IΣ₁, so 'conservative over PRA for Π⁰₂ sentences' is a separate nontrivial theorem, not a consequence of the IΣ₁ statement.
- **Proposed fix:** State separately: 'RCA₀ and WKL₀ have first-order part IΣ₁ (so they are conservative over IΣ₁ for all arithmetic sentences); moreover, by Friedman's theorem, RCA₀ and WKL₀ are Π⁰₂-conservative over PRA.' Do not present the Π⁰₂/PRA conservation as following from the IΣ₁ conservation.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Π¹₁-CA₀ characterized as 'deciding well-orderings'
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement says Π¹₁-CA₀ corresponds to 'the world where one can decide whether a relation is a well-ordering'. This is inaccurate: Π¹₁-CA₀ allows forming sets defined by Π¹₁ formulas (equivalently, iterating the hyperjump / closure under hyperjump), i.e. it can define the set of (codes of) well-orderings, but 'deciding well-ordering' is not the right characterization and is misleading — the ability to decide WO is more naturally tied to having the set WO as an element, which Π¹₁-CA₀ does provide, but the phrase suggests a decision procedure, which no subsystem of second-order arithmetic provides. The characterization overstates what the system does.
- **Proposed fix:** Replace with: 'Π¹₁-CA₀ is the world in which sets defined by Π¹₁ formulas (such as the set of codes of well-orderings, or the hyperjump of any set) are available.'
- **Reported:** 2026-10-28 (8ccef3d)
