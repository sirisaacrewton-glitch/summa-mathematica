# Verification tracker: `01-foundations/06-category-theory/09-topos-theory/07-giraud-axioms.html`

<!-- source: 01-foundations/06-category-theory/09-topos-theory/07-giraud-axioms.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Step 4 of giraud-basic: e×_Z e is not shown to be a pullback of e along an epimorphism
- **Category:** Logical gap
- **Location:** cat:giraud-basic / Step 4
- **Detail:** The proof claims that $e\times_{Z}e:Y\times_{Z}Y\to W\times_{Z}W$ is a composite of two pullbacks of $e$ (hence epi by (G3) and part 2). But the first factor $Y\times_{Z}Y\to W\times_{Z}Y$ is the pullback of $e$ along $W\times_{Z}Y\to W$ only if the square commutes appropriately; more importantly the second factor $W\times_{Z}Y\to W\times_{Z}W$ is the pullback of $e:Y\to W$? No: $e$ maps $Y\to W$, and pulling back $e$ along $W\times_{Z}W\to W$ (a projection) gives $Y\times_{W}(W\times_{Z}W)$, not $W\times_{Z}Y$. The identification of the two factors as pullbacks of $e$ is not justified; the argument as written does not establish that $e\times_{Z}e$ is epi.
- **Proposed fix:** Replace with: Since $e$ is a coequalizer of $p_{1},p_{2}:K\rightrightarrows Y$ and pullbacks preserve coequalizers here (or directly: $e\times_{Z}e$ is the coequalizer of $(p_{1}\times 1),(p_{2}\times 1):K\times_{Z}Y\rightrightarrows Y\times_{Z}Y$ because $e$ is a stable regular epi by (G3)), $e\times_{Z}e$ is a regular epimorphism, hence epi. Then $\pi_{1}(e\times e)=\pi_{2}(e\times e)$ and epimorphy give $\pi_{1}=\pi_{2}$, so $m$ is monic.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Step 3 of sheaves-giraud: a(0) is initial but disjointness needs the pullback to be initial in the sheaf category
- **Category:** Logical gap
- **Location:** cat:sheaves-giraud / Step 3
- **Detail:** The computation $A\times_{\mathbf{a}(A\sqcup B)}B=\mathbf{a}(A\times_{A\sqcup B}B)=\mathbf{a}(0)$ is correct, and $\mathbf{a}(0)$ is initial since $\mathbf{a}$ is a left adjoint. This part is fine. However the claim that the inclusions are monic 'because $\mathbf{a}$ preserves monomorphisms (whose kernel pair is the diagonal)' is stated but the preservation of monomorphisms by $\mathbf{a}$ is not established on this page nor cited; it is used as if immediate.
- **Proposed fix:** Add justification: a left adjoint preserves monomorphisms, since $f$ monic iff the diagonal $X\to X\times X$ ... more precisely, $\mathbf{a}$ preserves monomorphisms because monomorphisms are detected by the kernel pair being the diagonal and $\mathbf{a}$ preserves finite limits (it is left exact), so $\mathbf{a}$ sends the diagonal pullback square to a pullback square, whence $\mathbf{a}(X_i)\to\mathbf{a}(\coprod X)$ is monic.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Remark: 'the sum and product coincide' is not why Ab fails Giraud
- **Category:** Supplement/remark error
- **Location:** remark 「集合のようにふるまう圏」
- **Detail:** The remark says Ab fails because 'sum and product coincide, and in an additive world disjoint sums are not stable'. This is imprecise: in Ab the biproduct $\mathbb{Z}\oplus\mathbb{Z}$ is a coproduct whose inclusions are monic and whose components have zero intersection (so disjointness holds); what fails is pullback-stability of the coproduct, as the example correctly shows. The phrase 'sum and product coincide' is not the precise reason and could mislead.
- **Proposed fix:** Replace with: 'Ab fails because its coproducts, though disjoint, are not stable under pullback: pulling back the biproduct $\mathbb{Z}\oplus\mathbb{Z}$ along the diagonal does not recover $\mathbb{Z}$ as a coproduct of the two zero components. Additive categories have finite biproducts, and this additive structure is incompatible with pullback-stable disjoint coproducts.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Example: 'quotient maps are not stable under pullback' stated without reference and slightly imprecise
- **Category:** Unsupported fact
- **Location:** example ジローの公理をみたさない圏 / item 2
- **Detail:** The claim that quotient maps in Top are not stable under pullback is true, but the parenthetical '(本サイト未収録)' merely notes it is not in the site; the statement is asserted without proof or citation. It is a genuine known fact, so this is borderline; but the identification 'epimorphisms that are coequalizers = quotient maps' should be made precise: in Top the regular epimorphisms are exactly the quotient maps, and these are not pullback-stable.
- **Proposed fix:** State: 'In $\mathbf{Top}$ the regular epimorphisms are exactly the quotient maps, and these are not stable under pullback (a standard counterexample: the quotient $\mathbb{R}\to\mathbb{R}/\mathbb{Q}$-type identifications, or the inclusion of a non-quotient subspace). Hence (G3) fails.' Provide the explicit counterexample or cite a standard reference.
- **Reported:** 2026-10-28 (10fede1)
