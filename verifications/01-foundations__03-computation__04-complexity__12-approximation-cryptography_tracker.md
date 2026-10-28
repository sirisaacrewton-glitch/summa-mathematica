# Verification tracker: `01-foundations/03-computation/04-complexity/12-approximation-cryptography.html`

<!-- source: 01-foundations/03-computation/04-complexity/12-approximation-cryptography.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (approximation algorithms, one-time pad, key-length proposition, one-way function proposition, RSA correctness) is logically sound: proofs are complete, hypotheses are verified, and citations match their targets. The genuine problems are concentrated in the supplement: the König's-theorem sentence misstates the equality (it holds for maximum matching / minimum cover, not for arbitrary matching and cover), and the claim that the same proof yields inversion under NP ⊆ BPP is asserted without justification and is not supported by the given argument. A minor imprecision in the OWF/PRG attribution is also noted.

## Issues

### ISSUE-0001 [Open] König's theorem misstated as equality of matching and cover sizes
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says that in bipartite graphs the inequality "matching size ≤ vertex cover size" (from Step 5 of comp:vc-2-approx) becomes an equality. This is false as stated: Step 5's inequality |M| ≤ |Y| holds for every matching M and every vertex cover Y, and in a bipartite graph a small matching and a large cover can coexist (e.g. a path with 3 vertices: a single edge is a matching of size 1, but the minimum cover has size 2). König's theorem says that the *maximum* matching size equals the *minimum* vertex cover size, not that the inequality is an equality for arbitrary M and Y.
- **Proposed fix:** In bipartite graphs, König's theorem states that the maximum size of a matching equals the minimum size of a vertex cover; i.e., the inequality |M| ≤ |Y| of Step 5 becomes an equality when M is a maximum matching and Y is a minimum vertex cover.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that the same proof works under NP ⊆ BPP is unsupported/wrong
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that "with the same proof, using coin tosses to make the error small enough, one can show inversion also under NP ⊆ BPP". The proof of comp:one-way-implies-p-ne-np uses a *deterministic* polynomial-time decider for the NP language B and inverts with probability 1. If only NP ⊆ BPP were assumed, the decider would be randomized and could err on some prefixes; the greedy bit-by-bit reconstruction would then not guarantee success with probability 1, and the claimed conclusion (that no one-way function exists under NP ⊆ BPP) is not established by this argument. The statement is asserted without proof and is at best a delicate, unproven claim.
- **Proposed fix:** Delete this sentence, or replace it with: "The proof above uses a deterministic polynomial-time algorithm for B; it does not directly extend to the assumption NP ⊆ BPP, since a randomized decider may err on the prefixes used in the reconstruction."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Imprecise claim that one-way functions are equivalent to PRGs
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement states that the existence of one-way functions is *equivalent* to the existence of pseudorandom generators (Håstad–Impagliazzo–Levin–Luby). The HILL/Luby theorem gives that one-way functions imply pseudorandom generators (and PRGs trivially imply one-way functions), so the equivalence is essentially correct, but the attribution conflates two results: HILL proved OWF ⇒ PRG, and Luby (with the HILL framework) the converse direction is trivial. This is a minor attribution imprecision rather than a mathematical error; flagged only because the sentence is stated as a bare fact.
- **Proposed fix:** The existence of one-way functions is equivalent to the existence of pseudorandom generators: one-way functions imply pseudorandom generators (Håstad–Impagliazzo–Levin), and a pseudorandom generator is easily seen to be a one-way function.
- **Reported:** 2026-10-28 (8ccef3d)
