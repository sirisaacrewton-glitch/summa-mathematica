# Verification tracker: `01-foundations/03-computation/04-complexity/12-approximation-cryptography.html`

<!-- source: 01-foundations/03-computation/04-complexity/12-approximation-cryptography.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The proofs of the 2-approximation for vertex cover, the local-search 1/2-approximation for MAX-CUT, the one-time pad, the key-length lower bound, the OWF ⇒ P ≠ NP proposition, and RSA correctness are all sound. The main problems are in the supplement: the claim that the OWF ⇒ P ≠ NP argument can be adapted under NP ⊆ BPP is false (the n-step reconstruction accumulates error and cannot be made negligible), and the König's theorem sentence is imprecise about which inequality becomes an equality. The HILL attribution is correct.

## Issues

### ISSUE-0001 [Open] Incorrect claim about NP ⊆ BPP implying invertibility
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement states that 'by the same proof, if we use coin flips to make the error sufficiently small, we can show inversion even under NP ⊆ BPP'. This is false. The proof of Proposition 12.10 uses B ∈ P to decide membership of ⟨y,u0⟩ deterministically at each step. If B is only in BPP, each of the n steps has a small error probability, and the union bound over n steps gives error n·ε, which cannot be made negligible by 'making the error sufficiently small' with a fixed polynomial-time budget (to get negligible total error one would need each step's error below n^{-k}, requiring a BPP algorithm with negligible error, which is not what NP ⊆ BPP provides). Moreover, the standard result is that one-way functions exist iff P ≠ NP is not known; the correct statement relating average-case hardness is that OWF existence implies (and is implied by) certain average-case hardness assumptions, not NP ⊆ BPP. The claim as stated is an unsupported and incorrect strengthening.
- **Proposed fix:** Replace with: 'The same argument shows that if B ∈ P (not merely B ∈ BPP) then f is invertible in polynomial time; with only NP ⊆ BPP the n-step reconstruction accumulates error and the argument does not go through, so no such conclusion is available.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] König's theorem statement conflates matching number and cover number
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says 'the inequality matching size ≤ cover size from Step 5 of Theorem 12.3 becomes an equality in bipartite graphs (König's theorem)'. König's theorem states that in a bipartite graph the maximum matching size equals the minimum vertex cover size. The inequality in Step 5 is |M| ≤ |Y| for any matching M and any vertex cover Y; equality for the maximum matching and minimum cover is exactly König. The phrasing 'the inequality ... becomes an equality' is imprecise because it is not the same M and Y in general; but more importantly, the statement as written could be read as claiming equality for every matching and every cover, which is false. The intended claim (max matching = min cover in bipartite graphs) is correct, but the sentence as written is imprecise/overstated.
- **Proposed fix:** Rewrite: 'The inequality |M| ≤ |Y| (matching size ≤ cover size) from Step 5 of Theorem 12.3 is tight for bipartite graphs: by König's theorem the maximum matching size equals the minimum vertex cover size.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that one-way functions are equivalent to pseudorandom generators
- **Category:** Unsupported fact
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement states 'the existence of one-way functions is equivalent to the existence of pseudorandom generators (Håstad–Impagliazzo–Levin–Luby)'. The HILL theorem proves that the existence of one-way functions implies the existence of pseudorandom generators (and the converse, PRG ⇒ OWF, is elementary). So the equivalence is correct. However, the attribution 'Håstad–Impagliazzo–Levin–Luby' is the standard attribution for the OWF ⇒ PRG direction, and the converse is trivial; the statement is essentially correct. No error here.
- **Proposed fix:** No change needed; the statement is correct as attributed.
- **Reported:** 2026-10-28 (10fede1)
