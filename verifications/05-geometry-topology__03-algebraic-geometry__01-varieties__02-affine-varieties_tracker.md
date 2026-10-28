# Verification tracker: `05-geometry-topology/03-algebraic-geometry/01-varieties/02-affine-varieties.html`

<!-- source: 05-geometry-topology/03-algebraic-geometry/01-varieties/02-affine-varieties.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is logically sound: the proofs of the sheaf property, the principal-open-set theorem, and the anti-equivalence are correct, and citations match their targets. The only issues are two imprecise side comments: the hypcheck's attribution of where reducedness/integrality is used, and the supplement's vague remark on decidability of the isomorphism problem for finitely generated algebras. No genuine gaps, missing hypotheses, or wrong citations were found.

## Issues

### ISSUE-0001 [Open] Hypcheck claim that parts 1–2 need only reducedness is imprecise
- **Category:** Supplement/remark error
- **Location:** hypcheck / 既約性（整域性）
- **Detail:** The hypcheck says that parts 1 and 2 of the principal-open-set theorem hold with only reducedness (not integrality). Part 2 (stalk = A(Y)_{m_P}) is fine for reduced Y, but part 1 (O(D(f)) ≅ A(Y)_f) is not: the injectivity argument in Step 1 uses that fg vanishes on Y implies fg=0 in B, which for a reduced but non-irreducible Y only gives fg ∈ I(Y), i.e. fg = 0 in B = A/I(Y) — that part is fine. However the surjectivity (Steps 3–4) uses that B is a domain when passing to B_f and identifying g_i/f^N; more importantly the statement O_Y(D(f)) ≅ A(Y)_f genuinely requires Y affine (irreducible) — for a reducible closed set the sheaf on D(f) is still A(Y)_f by the same argument, so the claim is essentially correct. The real imprecision is the parenthetical justification: it attributes the need for reducedness to Step 1, whereas Step 1 needs only that I(Y) is radical (which holds for any algebraic set by the Nullstellensatz), and the integrality is used in Step 6 (function field) and in the identification of B_f. As stated the comment is misleading about where each hypothesis is used.
- **Proposed fix:** Rewrite the hypcheck item as: "**Irreducibility (domain):** used in the coincidence principle (\ref{ag:regular-functions-sheaf.3}) and in the definition of the function field (part 3). Parts 1 and 2 hold more generally for any algebraic set Y (with A(Y) = A/I(Y) reduced), since Step 1 only needs I(Y) to be radical; integrality is needed for part 3."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Decidability remark about isomorphism of finitely generated k-algebras is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 計算の観点
- **Detail:** The supplement says deciding whether two affine varieties are isomorphic 'is the isomorphism problem for finitely generated domains, which is in general difficult (decidability not covered on this site)'. This is vague and slightly misleading: for finitely generated algebras over an algebraically closed field the isomorphism problem is decidable (it reduces to a decidable problem, unlike the general ring case). Stating it as an open/hard decidability question overstates the difficulty.
- **Proposed fix:** Replace with: "Deciding whether two affine varieties are isomorphic is the isomorphism problem for finitely generated k-algebras; it is decidable in principle but computationally hard in practice."
- **Reported:** 2026-10-28 (10fede1)
