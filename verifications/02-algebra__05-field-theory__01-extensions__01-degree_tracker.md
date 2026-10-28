# Verification tracker: `02-algebra/05-field-theory/01-extensions/01-degree.html`

<!-- source: 02-algebra/05-field-theory/01-extensions/01-degree.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is logically sound: the proofs of the prime field proposition, the tower law, the minimal polynomial properties, the simple extension structure, Kronecker's theorem, and the corollary all follow correctly from the cited results, and the worked problems are correct. The only genuine problems are two imprecise statements in the closing supplement: the unqualified analogy between the tower law and group index multiplicativity (valid only for finite Galois extensions), and the paraphrase of Kronecker's construction that omits the irreducibility hypothesis needed for the quotient to be a field.

## Issues

### ISSUE-0001 [Open] Tower law analogy with group index is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement says the tower law is 'very similar' to the multiplicativity of group index $(G:K)=(G:H)(H:K)$ and that in Galois theory 'these two correspond'. The analogy is only valid for finite Galois extensions, where $[L:K]=|\mathrm{Gal}(L/K)|$ and the tower law becomes the index formula for the subgroup $\mathrm{Gal}(L/M)\subset\mathrm{Gal}(L/K)$. For general (non-Galois) extensions the degree $[L:K]$ is not a group index, so the unqualified statement is overstated. Also the index formula itself requires $K\subset H\subset G$ with finite indices.
- **Proposed fix:** For a finite Galois extension $L/K$ with intermediate field $M$, $\mathrm{Gal}(L/M)$ is a subgroup of $\mathrm{Gal}(L/K)$ and $[L:K]=|\mathrm{Gal}(L/K)|$, so the tower law $[L:K]=[L:M][M:K]$ becomes exactly the index formula $(\mathrm{Gal}(L/K):\mathrm{Gal}(L/M))\,(\mathrm{Gal}(L/M):1)$; this correspondence is the basis of the fundamental theorem of Galois theory. For non-Galois extensions the degree is not a group index, so the analogy is only formal.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Kronecker construction description omits irreducibility requirement
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement describes Kronecker's construction as 'if $f=0$ has no solution, treat $x$ formally as a solution and take the quotient ring with $f$ set to $0$'. Taken literally, $K[x]/(f)$ is a field (so that $x$ can be 'treated as a solution in a field') only when $f$ is irreducible; for reducible $f$ the quotient is not a field and the construction does not produce an extension field in which $f$ has a root. The theorem itself (fld:kronecker) correctly requires $f$ irreducible, but the supplement's paraphrase drops this hypothesis.
- **Proposed fix:** For an irreducible $f\in K[x]$, the quotient $K[x]/(f)$ is a field in which the class of $x$ is a root of $f$; this is the idea of 'if $f=0$ has no solution, adjoin a formal root by setting $f$ to $0$'. (For a general nonconstant $g$, one first takes an irreducible factor of $g$.)
- **Reported:** 2026-10-28 (10fede1)
