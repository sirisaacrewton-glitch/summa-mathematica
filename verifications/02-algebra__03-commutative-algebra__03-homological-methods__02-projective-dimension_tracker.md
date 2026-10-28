# Verification tracker: `02-algebra/03-commutative-algebra/03-homological-methods/02-projective-dimension.html`

<!-- source: 02-algebra/03-commutative-algebra/03-homological-methods/02-projective-dimension.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is logically sound: the proofs of the Betti-number theorem, the pd/Tor characterization, Auslander's lemma on global dimension, and the Auslander–Buchsbaum formula are correct, and the hypcheck comments are accurate (including the counterexample showing pd M < ∞ cannot be dropped). The only genuine issue is a slightly overstated/misleading comparison in the supplement between Hilbert's syzygy theorem and the local-ring inequality pd M ≤ pd k, which conflates the global-dimension statement with a weaker local inequality.

## Issues

### ISSUE-0001 [Open] Hilbert syzygy theorem misattributed to graded modules over polynomial ring with bound n
- **Category:** Supplement/remark error
- **Location:** supplement (ヒルベルトのシジジー定理)
- **Detail:** The supplement states that a finitely generated graded module over k[x_1,...,x_n] has a graded free resolution of length ≤ n. This is correct (Hilbert syzygy theorem). However the claim that 'the same argument as minimal free resolutions over local rings works for graded modules' is imprecise: the graded case requires the graded Nakayama lemma and the fact that kernels of graded maps are graded, and the bound n comes from the Koszul complex / global dimension of the polynomial ring, not from the local-ring minimal-resolution argument per se. More importantly, the sentence 'これは「pd_A k = n（例 i=d）と ring:pd-tor-k.2」の次数付き版' is misleading: ring:pd-tor-k.2 is the inequality pd M ≤ pd k over a local ring, whereas the Hilbert syzygy theorem is the statement gl.dim k[x_1,...,x_n] = n, which is stronger (it gives the bound for all modules, not just via pd k). The comparison understates the theorem and conflates two different statements.
- **Proposed fix:** Replace with: '**Hilbert's syzygy theorem.** A finitely generated graded module over k[x_1,...,x_n] has a graded free resolution of length at most n. Equivalently, the global dimension of k[x_1,...,x_n] is n. This is the graded analogue of the fact (over a local ring) that gl.dim A = pd_A k when the latter is finite; the bound n comes from the Koszul complex on x_1,...,x_n, and the minimal-resolution argument carries over to the graded setting using the graded Nakayama lemma.'
- **Reported:** 2026-10-28 (8ccef3d)
