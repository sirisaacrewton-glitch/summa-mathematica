# Verification tracker: `01-foundations/06-category-theory/04-kan-extensions/04-pointwise-kan.html`

<!-- source: 01-foundations/06-category-theory/04-kan-extensions/04-pointwise-kan.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs (coend formula, right-adjoint preservation, pointwise characterization, density criterion, adjunction-as-Kan) are essentially correct. The genuine problems are concentrated in the supplement and remark: the codensity characterization of density is stated with the wrong variance (right vs. left Kan extension), the remark identifying the right Kan formula with 'the Yoneda lemma itself' conflates the end formula for natural transformations with the Yoneda lemma and asserts an equality that fails for non-representable T, and the example's claim that Z⊕Z alone suffices is an unjustified aside. No issues in the previously reported list.

## Issues

### ISSUE-0001 [Open] Codensity characterization of density is misstated
- **Category:** Supplement/remark error
- **Location:** supplement (一般化) / cat:page-pointwise-kan
- **Detail:** The supplement claims that K is codense iff (1_C, 1_K) is a pointwise right Kan extension of K along K. This is wrong: (1_C, 1_K) being a right Kan extension of K along K is the condition that K is *dense* (each c is the canonical colimit of (K↓c)), not codense. Codensity corresponds instead to (1_C, 1_K) being a pointwise *left* Kan extension of K along K (equivalently, the identity being a right Kan extension of K along K in the appropriate variance). The problem cat:prob-pk-codense itself uses the (c↓K) limit formula, which is the codense condition, so the supplement's identification with 'pointwise right Kan extension' is inconsistent with the page's own problem and with the standard statement.
- **Proposed fix:** Replace with: '稠密性（\ref{cat:dense-functor}：$K$ が稠密であることは $(1_{\mathbf{C}},1_{K})$ が $K$ の $K$ に沿った各点的な左カン拡張であること、双対に余稠密であることは $(1_{\mathbf{C}},1_{K})$ が $K$ の $K$ に沿った各点的な右カン拡張であること）'.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Remark on right Kan extension formula via Yoneda is imprecise
- **Category:** Supplement/remark error
- **Location:** remark after cat:lan-coend
- **Detail:** The remark states that for K=1_C, A=Set, Ran_K T(c)=∫_m Set(C(c,m),Tm)=Nat(C(c,-),T) 'is the Yoneda lemma itself'. The identification ∫_m Set(C(c,m),Tm) ≅ Nat(C(c,-),T) is the end formula for natural transformations (cat:nat-as-end), not the Yoneda lemma; the Yoneda lemma would give Nat(C(c,-),T) ≅ Tc only when T is representable (T = C(-,a) giving C(c,a)). As stated, the equality Nat(C(c,-),T)=Tc is false for a general T (e.g. T=constant functor). The claim overstates the role of the Yoneda lemma.
- **Proposed fix:** Rewrite: '...$Tc=\int_{m}\mathbf{Set}(\mathbf{C}(c,m),Tm)=\mathrm{Nat}(\mathbf{C}(c,-),T)$ となる（自然変換のエンド表示、\ref{cat:nat-as-end}）。$T$ が表現可能 $T=\mathbf{C}(-,a)$ のときは米田の補題により $\mathrm{Nat}(\mathbf{C}(c,-),\mathbf{C}(-,a))\cong\mathbf{C}(c,a)$ となる。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Claim that Z⊕Z suffices for the density of f.g. abelian groups
- **Category:** Supplement/remark error
- **Location:** example 2 (finite generated abelian groups dense), last bullet
- **Detail:** The example asserts that 'the object Z⊕Z alone (and Z) suffices' to detect naturality, because abelian groups are determined by a binary operation. But the surjectivity argument uses homomorphisms from Z^2 to A for arbitrary A, and the naturality of τ must be checked against all maps Z→A and Z^2→A; restricting the test objects to Z and Z^2 does not by itself establish that τ comes from a homomorphism for all f.g. A, since the naturality square for a general f.g. N and x:N→A is used in the proof (the step τ_N(x)(n)=τ_Z(x n̂)(1)). The parenthetical is at best a heuristic and is stated as a fact ('証明が示すように'), which is not justified by the given proof.
- **Proposed fix:** Delete the bullet, or replace with: 'この議論では任意の有限生成アーベル群 $N$ への射 $x\colon N\to A$ に関する自然性を用いている（$\mathbb{Z}$ と $\mathbb{Z}^{2}$ だけでは $\tau_{N}$ の決定は示せない）。'
- **Reported:** 2026-10-28 (8ccef3d)
