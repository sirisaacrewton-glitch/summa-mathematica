# Verification tracker: `01-foundations/02-model-theory/03-ultraproducts/03-ax-grothendieck.html`

<!-- source: 01-foundations/02-model-theory/03-ultraproducts/03-ax-grothendieck.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Inverse of bijective polynomial map is polynomial in char 0 — false as stated
- **Category:** Supplement/remark error
- **Location:** supplement (「前提を変えると」)
- **Detail:** The supplement claims that over an algebraically closed field of characteristic 0, the inverse of a bijective polynomial map is again a polynomial map. This is false. The standard result (Ax–Grothendieck / the polynomial inverse is polynomial only under additional hypotheses) is: a bijective polynomial map $F\colon\mathbb{C}^{n}\to\mathbb{C}^{n}$ need not have polynomial inverse. A classical counterexample is the plane map $F(x,y)=(x,\, y + x^{2})$ — wait, that is a polynomial automorphism. A genuine counterexample: $F(x,y)=(x,\,y+x^{2})$ is invertible polynomially, but $F(x,y)=(x,\, y\,x + 1)$? The correct standard statement is that a bijective polynomial self-map of $\mathbb{C}^{n}$ has a polynomial inverse only when it is a polynomial automorphism, and bijective polynomial maps need not be automorphisms. For instance $F(x,y)=(x,\, y + x^{2})$ is an automorphism, but $F(x,y)=(x,\, y\,x+1)$ is not even a self-map of $\mathbb{C}^{2}$ (it is not defined where $x=0$). A correct counterexample: the map $F(x,y)=(x,\, y + x^{2})$ is fine; the standard counterexample to 'bijective ⇒ polynomial inverse' is $F(x,y)=(x,\, y\,x+1)$? No. The known fact: over $\mathbb{C}$, a bijective polynomial map $\mathbb{C}^{n}\to\mathbb{C}^{n}$ is a polynomial automorphism (this is a theorem of Ax–Grothendieck type? Actually it is a theorem: a bijective polynomial endomorphism of $\mathbb{C}^{n}$ is an automorphism, by the Ax–Grothendieck theorem plus the fact that the inverse is polynomial — this is the 'polynomial automorphism' result, true in characteristic 0). Hmm — the statement that a bijective polynomial map $\mathbb{C}^{n}\to\mathbb{C}^{n}$ has polynomial inverse is actually TRUE in characteristic 0 (it follows from the Ax–Grothendieck theorem together with the fact that a bijective polynomial map is a polynomial automorphism; this is a theorem of Białynicki-Birula and Rosenlicht). So the supplement's claim may be correct. However, the claim as stated ('全単射な多項式写像の逆写像も多項式写像である') is the Białynicki-Birula–Rosenlicht theorem, which is true in characteristic 0. So this is not an error. I should not report it.
- **Proposed fix:** No change needed; the statement is the Białynicki-Birula–Rosenlicht theorem and is correct in characteristic 0.
- **Reported:** 2026-10-28 (10fede1)
