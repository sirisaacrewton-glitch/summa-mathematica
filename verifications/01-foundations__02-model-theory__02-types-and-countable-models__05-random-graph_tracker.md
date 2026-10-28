# Verification tracker: `01-foundations/02-model-theory/02-types-and-countable-models/05-random-graph.html`

<!-- source: 01-foundations/02-model-theory/02-types-and-countable-models/05-random-graph.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect claim about p = N^{-α} and irrational α
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement claims that for p = p(N) = N^{-α}, the 0–1 law holds when α is irrational but may fail when α is rational. This is a garbled version of the Shelah–Spencer result. The actual theorem (Shelah–Spencer 1988) concerns p = N^{-α} with α irrational: then the random graph G(N, p) has a 0–1 law (the almost-sure theory is the theory of the random graph, and every first-order sentence has probability tending to 0 or 1). For rational α the situation is different and the 0–1 law can fail (e.g. α = 1 gives the appearance of isolated vertices etc.), but the statement as written — 'α irrational ⇒ 0–1 law, α rational ⇒ may fail' — is stated with the wrong quantifier structure and, more importantly, the claim that the 0–1 law holds for irrational α is only true in the specific Shelah–Spencer setting with the correct normalization; as stated ('N^{-α}') it is imprecise because for α > 2 or α < 0 the graph is respectively empty/dense and the statement needs the threshold range. The sentence is stated more strongly/imprecisely than the literature supports.
- **Proposed fix:** Replace with: 'If p = p(N) varies with N, the situation is delicate. Shelah–Spencer showed that for p = N^{-α} with α irrational (in the appropriate range 0 < α < ...), a 0–1 law holds, while for rational α it can fail. We do not treat this here.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Fráïssé limit characterization stated too strongly
- **Category:** Supplement/remark error
- **Location:** supplement (似た定理)
- **Detail:** The supplement says the random graph is 'the Fraïssé limit of all finite graphs (the unique countable homogeneous graph containing all finite graphs)'. The Rado graph is indeed the Fraïssé limit of the class of all finite graphs, and it is the unique countable homogeneous graph that is universal for finite graphs. However, the parenthetical 'the unique countable homogeneous graph containing all finite graphs' is imprecise: uniqueness of the Fraïssé limit requires the amalgamation property (which finite graphs have), and the Rado graph is the unique countable homogeneous graph that is universal; but 'homogeneous' alone plus 'contains all finite graphs' does not pin it down without the extension property. The claim is essentially correct but the phrasing 'unique countable homogeneous graph containing all finite graphs' is slightly overstated/imprecise.
- **Proposed fix:** Replace with: 'The random graph is the Fraïssé limit of the class of all finite graphs: the unique (up to isomorphism) countable homogeneous graph that is universal for finite graphs, equivalently the unique countable graph satisfying all extension axioms.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] 0–1 law for general finite relational languages attributed loosely
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement states that for a general finite relational language the same extension-axiom argument gives a 0–1 law, attributing it to 'Fagin, Glebskii et al.' This is correct for finite relational languages (Fagin 1976; Glebskii et al. 1969), but the phrase 'the same extension axioms' is imprecise: for a general finite relational language the extension axioms must be formulated for each relation symbol and each finite pattern, and the 0–1 law holds for all finite relational languages. The attribution is fine, but the statement 'the same extension axioms' is slightly loose. This is a minor imprecision rather than a falsehood.
- **Proposed fix:** Replace with: 'For any finite relational language, an analogous family of extension axioms (one for each finite pattern of relations) yields a 0–1 law (Glebskii et al., Fagin).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Monkey/typewriter analogy overstated
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から)
- **Detail:** The analogy 'as a monkey typing forever produces every text, randomly drawing edges produces every finite adjacency type' is a heuristic, but stated as if it were a precise statement. The precise content is that the extension axioms hold almost surely, which is what the proof shows. The analogy is not false as a metaphor, but the sentence 'randomly drawing edges produces every finite adjacency type' is only true almost surely in the limit, not for any particular random graph. This is a side comment that is imprecise.
- **Proposed fix:** Replace with: 'Just as a monkey typing forever produces every finite text with probability 1, the random graph process produces every finite adjacency type almost surely in the limit; this is made precise by the extension axioms.'
- **Reported:** 2026-10-28 (10fede1)
