# Verification tracker: `01-foundations/04-set-theory/01-basics/08-cantor-theorem.html`

<!-- source: 01-foundations/04-set-theory/01-basics/08-cantor-theorem.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem, its proof, the corollaries and their proofs are correct, and the hypcheck remarks (including the remark that the argument is intuitionistically valid and that no choice is used) are accurate. The only genuine problem is in the final supplement bullet, which overstates the equivalence between 'a fixed-point-free self-map of $Y$ exists' and '$Y$ has at least two elements'; in ZF the reverse implication fails (amorphous sets). All other supplements, examples and stated-only claims check out: the Lawvere connection, the halting/Gödel analogy, the injection-vs-surjection asymmetry remark, and the Russell-set discussion are all correct.

## Issues

### ISSUE-0001 [Open] Incorrect claim that 'no fixed-point map' is equivalent to 'Y has at least 2 elements'
- **Category:** Supplement/remark error
- **Location:** supplement (一般形) / last bullet '一般形で Y を 1 点集合にする'
- **Detail:** The supplement claims: for $Y\neq\varnothing$, the hypothesis 'there is a map $\sigma\colon Y\to Y$ with no fixed point' is equivalent to '$Y$ has at least 2 elements'. This is false in ZF (the ambient theory of the page). A fixed-point-free self-map of $Y$ is exactly a choice function for the family of sets $Y\setminus\{y\}$ ($y\in Y$), which exists iff $Y$ admits a fixed-point-free permutation-like splitting; for a 2-element set this needs no choice, but for an amorphous set (a set that cannot be split into two infinite pieces, consistent with ZF) every self-map has a fixed point, so a set with $\ge 2$ elements may admit no fixed-point-free self-map. Even the direction '$Y$ has $\ge 2$ elements $\Rightarrow$ fixed-point-free $\sigma$ exists' fails for amorphous $Y$. The forward direction (fixed-point-free $\sigma$ implies $Y$ has $\ge 2$ elements, since a singleton has a fixed point) is fine.
- **Proposed fix:** Replace the parenthetical with: '不動点のない $\sigma$ の存在は $Y$ が 2 元以上であることを含意する（1 点集合ではすべての自己写像が不動点をもつ）。逆は ZF では一般に成り立たない（$Y$ が 2 元以上でも不動点のない自己写像をもたない集合がありうる）。ZF に「$Y$ は 2 元以上」を仮定として加えれば、$Y$ が 2 元集合の像をもつとは限らないため、なお $\sigma$ の存在は別に仮定する必要がある。' In English: 'The existence of a fixed-point-free $\sigma$ implies $Y$ has at least two elements (a singleton has only the identity, which has a fixed point). The converse fails in ZF: a set with at least two elements need not admit a fixed-point-free self-map (e.g. an amorphous set, consistent with ZF). Hence the hypothesis cannot be replaced by "$Y$ has at least 2 elements".'
- **Reported:** 2026-10-28 (10fede1)
