# Verification tracker: `05-geometry-topology/02-algebraic-topology/02-homology/06-cellular.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/02-homology/06-cellular.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 6 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct and well organized. The main issues are in the supplements: the lens-space homology claim is stated too strongly for general $L(p;q_{1},\dots,q_{n})$ (only standard lens spaces have the stated homology), the spectral-sequence remark is imprecise about degeneration, and the Δ-complex coefficient remark conflates simplicial and cellular chain complexes. The lens-space non-homotopy-equivalence example is true but unsupported. Two proof steps (skeleton-pairs Step 1 and cellular-boundary-formula Step 4) have minor gaps in the deformation-retract and inverse-continuity arguments that should be filled in. No circularity or improper links were found; the cited labels match their uses.

## Issues

### ISSUE-0001 [Open] Lens space homology claim is false for general L(p;q_1,...,q_n)
- **Category:** Supplement/remark error
- **Location:** supplement (一般化と注意)
- **Detail:** The supplement states that every lens space $L(p;q_{1},\dots,q_{n})=S^{2n-1}/(\mathbb{Z}/p)$ has $H_{k}=\mathbb{Z}/p$ for odd $k$ with $0<k<2n-1$. This is only true for the standard lens spaces $L(p;1,\dots,1)$ (or more generally when the action is free and the quotient has the standard cell structure with trivial/degree-$p$ boundary maps). For general parameters $q_{i}$ the integral homology can differ: e.g. $L(p;q)$ with $n=2$ has $H_{1}=\mathbb{Z}/p$ but the higher homology depends on $q$; more importantly the claim as stated (all lens spaces have identical homology in all odd degrees) is not correct in general. The statement is stated more strongly than the literature supports.
- **Proposed fix:** Restrict the claim: 'The standard lens spaces $L(p;1,\dots,1)=S^{2n-1}/(\mathbb{Z}/p)$ have one cell in each dimension and $H_{k}=\mathbb{Z}/p$ for odd $k$ with $0<k<2n-1$ (and $H_{0}=H_{2n-1}=\mathbb{Z}$). For general $L(p;q_{1},\dots,q_{n})$ the integral homology depends on the $q_{i}$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Spectral sequence E^1 term description is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement says the cellular chain complex is the $E^{1}$ term of the spectral sequence of the skeletal filtration with $E^{1}_{p,q}=H_{p+q}(X^{p},X^{p-1})$, concentrated at $q=0$, degenerating at $E^{2}$. This is essentially correct for the Atiyah-Hirzebruch/Serre spectral sequence of the filtration, but the phrasing '$E^{1}$ 項で... $E^{1}_{p,q}=H_{p+q}(X^{p},X^{p-1})$ が $q=0$ に集中する' conflates the page $E^{1}$ with the chain complex $C_{p}=H_{p}(X^{p},X^{p-1})$: indeed $E^{1}_{p,q}=H_{p+q}(X^{p},X^{p-1})$ vanishes for $q\ne0$ by \ref{at:skeleton-pairs.3}, so $E^{1}_{p,0}=H_{p}(X^{p},X^{p-1})=C^{\mathrm{CW}}_{p}$, and $d^{1}$ is the cellular boundary. This is correct, but the sentence 'ために $E^{2}$ で退化する' is slightly misleading: the spectral sequence degenerates at $E^{2}$ only because all higher differentials vanish for degree reasons (the filtration is finite-dimensional and the $E^{1}$ page is concentrated on one row). The claim is acceptable but the wording '退化する' should be qualified.
- **Proposed fix:** Clarify: 'Since $E^{1}_{p,q}=H_{p+q}(X^{p},X^{p-1})=0$ for $q\ne0$ (by \ref{at:skeleton-pairs.3}), the spectral sequence is concentrated in the row $q=0$, so $E^{1}_{p,0}=C^{\mathrm{CW}}_{p}$ with $d^{1}$ the cellular boundary, and all higher differentials vanish; hence $E^{2}=E^{\infty}$ and the spectral sequence computes $H_{*}(X)$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that coefficients are ±1 or 0 for Δ-complexes is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement 計算の観点
- **Detail:** The supplement says 'Δ 複体や単体複体では係数は $\pm1$ と $0$ に限られ、組合せ的に読み取れる'. For a Δ-complex the cellular boundary coefficients (degrees of attaching maps) are indeed $\pm1$ or $0$ when the attaching maps are the standard simplicial ones, but the statement as written is about the cellular boundary formula coefficients $d_{\alpha\beta}$, which for a general CW structure on a simplicial complex need not be $\pm1,0$. More importantly, the claim is only true for the *simplicial* chain complex (incidence numbers), not for an arbitrary cellular decomposition. The sentence should specify that this refers to the simplicial chain complex of a Δ-complex, where incidence numbers are $0,\pm1$.
- **Proposed fix:** Rewrite: 'For a Δ-complex (or simplicial complex) the *simplicial* chain complex has incidence numbers in $\{0,\pm1\}$, read off combinatorially; the cellular chain complex of an arbitrary CW structure on the same space need not have this property.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Lens spaces with same homology and fundamental group but not homotopy equivalent
- **Category:** Unsupported fact
- **Location:** supplement (一般化と注意)
- **Detail:** The supplement states '$L(p;q)$ たちはホモロジー（や基本群）が同じでもホモトピー同値でない例を含む'. This is a classical fact (e.g. $L(7;1)$ and $L(7;2)$ have isomorphic homology and fundamental group but are not homotopy equivalent, distinguished by Reidemeister torsion / linking form). The statement is true but is asserted without proof or citation ('本サイト未収録' applies to lens spaces generally). Since it is a stated-only fact in a supplement, it should be flagged as needing justification or a reference; as stated it is correct but unsupported.
- **Proposed fix:** Add a reference or qualify: 'For example $L(7;1)$ and $L(7;2)$ have isomorphic homology and fundamental group but are not homotopy equivalent (distinguished by Reidemeister torsion); see standard references.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Step 1 of skeleton-pairs proof: deformation retract argument is sketched
- **Category:** Logical gap
- **Location:** at:skeleton-pairs / Step 1
- **Detail:** Step 1 claims $X^{n}\setminus\{\text{centers}\}$ deformation retracts onto $X^{n-1}$ via the radial deformation, citing \ref{top:homotopy-on-quotient}. The argument is essentially correct but the sentence '各円板の上の放射状の変形 $((1-t)r+t)z$ は $q\restriction W$ を通って $X^{n}\setminus\{\text{中心}\}$ の変位ホモトピーに降りる' is terse: one must check that the homotopy is constant on the identifications (i.e., on $\partial D^{n}_{\alpha}$ it is the identity, and on $X^{n-1}$ it is the identity), which is true but not spelled out. This is a minor gap, not a fatal error.
- **Proposed fix:** Add: 'The homotopy $H_{t}(z)=((1-t)r+t)z$ fixes $\partial D^{n}_{\alpha}$ pointwise and is the identity on $X^{n-1}$, hence is compatible with the quotient map $q$ and descends to a homotopy on $X^{n}\setminus\{\text{centers}\}$ by \ref{top:homotopy-on-quotient}.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Step 4 of cellular-boundary-formula: inverse map continuity argument incomplete
- **Category:** Logical gap
- **Location:** at:cellular-boundary-formula / Step 4
- **Detail:** Step 4 asserts $\bar\Phi_{\beta}$ is a homeomorphism, with the inverse constructed via a map from $X^{n-2}\sqcup\bigsqcup_{\gamma}D_{\gamma}$ to $D^{n-1}/\partial D^{n-1}$ that is the quotient map on $D_{\beta}$ and constant elsewhere, descending through the quotient. The continuity of this descended map requires that it be constant on the identifications $x\sim\varphi_{\gamma}(x)$ for $x\in\partial D_{\gamma}$, which holds because $\varphi_{\gamma}(\partial D_{\gamma})\subset X^{n-2}$ maps to the basepoint. This is correct but the verification is not written out; also one must confirm $\Phi_{\beta}$ maps $\partial D^{n-1}$ into $X^{n-1}\setminus e_{\beta}$, which is true since $\Phi_{\beta}(\partial D^{n-1})=\varphi_{\beta}(\partial D^{n-1})\subset X^{n-2}$. Minor gap.
- **Proposed fix:** Add: 'The descended map is well defined because $\varphi_{\gamma}(\partial D_{\gamma})\subset X^{n-2}$ is sent to the basepoint, and it is continuous by \ref{top:quotient-universal}; it is inverse to $\bar\Phi_{\beta}$.'
- **Reported:** 2026-10-28 (10fede1)
