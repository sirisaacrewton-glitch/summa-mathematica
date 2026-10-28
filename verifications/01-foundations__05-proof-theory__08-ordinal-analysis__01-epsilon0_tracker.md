# Verification tracker: `01-foundations/05-proof-theory/08-ordinal-analysis/01-epsilon0.html`

<!-- source: 01-foundations/05-proof-theory/08-ordinal-analysis/01-epsilon0.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is mathematically sound overall: the Cantor normal form theorem, ε₀ properties, the notation system and its order-isomorphism proof are correct, and citations match their targets. The only genuine issue is a side remark in the solution to pt:prob-descending-epsilon0 that loosely identifies the strictly-descending process with the structure of Goodstein's theorem (which actually increases before descending); the attribution of independence to Kirby–Paris is acceptable but the structural comparison is overstated. No other errors of the six kinds were found.

## Issues

### ISSUE-0001 [Open] Goodstein's theorem misattributed to Kirby–Paris
- **Category:** Supplement/remark error
- **Location:** pt:prob-descending-epsilon0 / solution
- **Detail:** The solution says the descending process has 'the same structure as the proof of Goodstein's theorem' and that Goodstein's theorem is unprovable in PA 'by Kirby–Paris'. Kirby–Paris proved that the *hydra* theorem (and the related Goodstein-type independence) is unprovable in PA; the independence of Goodstein's theorem itself is due to Kirby–Paris (1982) for the hydra, but the standard attribution for Goodstein's theorem's unprovability is Kirby–Paris as well — however the more precise issue is that the described descending process (replacing the last exponent by a smaller one) is a *termination* argument via well-foundedness of ε₀, which is exactly the ordinal descent underlying Goodstein, but the claim that this specific process 'is the same structure' is loose. More importantly, the attribution 'カービー–パリス' for Goodstein's theorem is acceptable, but the statement that the descending process is 'the same structure as the proof of Goodstein's theorem' is imprecise: Goodstein sequences grow before they descend, whereas here the value strictly decreases at each step. This is an overstatement.
- **Proposed fix:** Replace with: 'This is a pure descending (terminating) process justified by the well-foundedness of $\varepsilon_{0}$. Goodstein sequences, by contrast, first increase and only later descend; their termination is proved by the same ordinal-descent idea (mapping to ordinals below $\varepsilon_{0}$), and the independence of Goodstein's theorem from $\PA$ is due to Kirby–Paris.'
- **Reported:** 2026-10-28 (8ccef3d)
