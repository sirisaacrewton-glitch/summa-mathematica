# Verification tracker: `05-geometry-topology/03-algebraic-geometry/02-schemes/09-riemann-roch.html`

<!-- source: 05-geometry-topology/03-algebraic-geometry/02-schemes/09-riemann-roch.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem, its proof, the point-by-point exact sequence, and the corollaries (degree of principal divisors, Riemann inequality) are logically sound, and the cited labels match their uses. The genuine problems are concentrated in the remarks/supplements: the monomial description of the basis of $H^{2}(\mathbb{P}^{2},\mathcal{O}(-d))$ is wrong (the exponents should be nonnegative summing to $d-3$), and the supplement's claims about Goppa codes and the Brill-Noether algorithm are imprecise/overstated. The historical attributions and the topological-genus remark are essentially correct but loosely worded.

## Issues

### ISSUE-0001 [Open] Incorrect count of monomials for H^2(P^2, O(-d))
- **Category:** Supplement/remark error
- **Location:** remark 平面曲線の種数と非特異射影モデル, item 1
- **Detail:** The remark claims the basis of $H^{2}(\mathbb{P}^{2},\mathcal{O}(-d))$ consists of monomials $x_{0}^{a_{0}}x_{1}^{a_{1}}x_{2}^{a_{2}}$ with $a_{i}\le -1$ and $\sum a_{i}=-d$. But $H^{2}(\mathbb{P}^{2},\mathcal{O}(-d))$ is dual to $H^{0}(\mathbb{P}^{2},\mathcal{O}(d-3))$, whose monomial basis has $a_{i}\ge 0$ and $\sum a_{i}=d-3$. The stated condition ($a_{i}\le -1$, sum $=-d$) describes a different (dual) set and does not give $(d-1)(d-2)/2$ in general; e.g. for $d=1$ there are no such monomials, yet $h^{2}(\mathcal{O}(-1))=1$. The count is thus wrong as stated.
- **Proposed fix:** Replace with: $H^{2}(\mathbb{P}^{2},\mathcal{O}(-d))\cong H^{0}(\mathbb{P}^{2},\mathcal{O}(d-3))^{\vee}$, whose basis is the monomials $x_{0}^{a_{0}}x_{1}^{a_{1}}x_{2}^{a_{2}}$ with $a_{i}\ge0$ and $\sum a_{i}=d-3$; their number is $\binom{d-1}{2}=(d-1)(d-2)/2$.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Riemann-Roch does not directly give Goppa bound
- **Category:** Supplement/remark error
- **Location:** supplement 計算の観点
- **Detail:** The supplement states that the dimension and minimum distance estimates of algebraic geometry (Goppa) codes are obtained 'directly' from Riemann-Roch. In fact Riemann-Roch gives the dimension of the code, but the minimum distance bound (the Goppa/designed distance bound $d\ge n-\deg D$) comes from the fact that a nonzero section of $\mathcal{L}(D)$ has at most $\deg D$ zeros, not from Riemann-Roch itself. Calling it 'directly from Riemann-Roch' is imprecise/overstated.
- **Proposed fix:** Rewrite as: 'Riemann-Roch gives the dimension $\ell(D)-\ell(D-G)$ of the Goppa code, while the minimum-distance bound $d\ge n-\deg D$ follows from the fact that a nonzero section of $\mathcal{L}(D)$ vanishes at at most $\deg D$ points.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Brill-Noether algorithm mischaracterized
- **Category:** Supplement/remark error
- **Location:** supplement 計算の観点
- **Detail:** The supplement says $\ell(D)$ can be computed by writing the pole-order conditions as linear equations, citing 'the Brill-Noether algorithm'. The Brill-Noether algorithm is a specific algorithm (via adjunction/plane curve models) for computing Weierstrass semigroups and related data, not the generic name for the elementary linear-algebra computation of $\ell(D)$. The attribution is misleading.
- **Proposed fix:** Replace 'ブリル–ネーターのアルゴリズムなど' with a correct reference, e.g. 'Riemann-Roch and, for explicit computation, the theory of adjoint series / Brill-Noether theory for special divisors', or simply drop the specific attribution and say the linear-algebra computation is standard.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Tate/Weil analogy attribution imprecise
- **Category:** Supplement/remark error
- **Location:** supplement 似た定理
- **Detail:** The supplement attributes the number-field analogue of Riemann-Roch (with infinite places) to 'Tate's paper and Weil's Basic Number Theory'. The classical adelic Riemann-Roch for number fields is due to Tate's thesis (1950) and is presented in Weil's book, but the statement as phrased ('Tate's paper or Weil's Basic Number Theory') is vague and could be read as attributing the result to Weil. This is a minor historical imprecision but the claim is essentially correct; flagging only because the attribution is loose.
- **Proposed fix:** State: 'The adelic Riemann-Roch theorem for number fields (including infinite places) is due to Tate (Tate's thesis) and is treated in Weil, Basic Number Theory.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Genus equals topological genus via GAGA and Hodge theory
- **Category:** Unsupported fact
- **Location:** remark 平面曲線の種数と非特異射影モデル, item 2
- **Detail:** The remark states that for $k=\mathbb{C}$, $g$ equals the topological genus (number of holes), 'known by GAGA and Hodge theory'. This is true, but the justification is imprecise: the equality $\dim H^{1}(X,\mathcal{O}_{X})=\dim H^{0}(X,\Omega^{1})$ (Hodge symmetry $h^{1,0}=h^{0,1}$) plus GAGA gives the comparison with the topological genus. As stated it is a correct fact with a loose justification; not a genuine error, so not reported as a problem.
- **Proposed fix:** No change needed; optionally clarify that $g=h^{1,0}=h^{0,1}$ via Hodge theory and GAGA identifies algebraic and analytic cohomology.
- **Reported:** 2026-10-28 (10fede1)
