# Verification tracker: `01-foundations/06-category-theory/07-operads/07-infinite-loop.html`

<!-- source: 01-foundations/06-category-theory/07-operads/07-infinite-loop.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 5 / Resolved: 1 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Braided monoidal categories also give E∞ (infinite loop) spaces
- **Category:** Supplement/remark error
- **Location:** hypcheck (cat:sec-ilp-notation hypcheck), third bullet
- **Detail:** The hypcheck claims that with only a braid (not a symmetry) the higher structure 'stops at E_{2} and does not give an infinite loop space'. This is false: by the recognition principle, an E_{2} (braided) space is already an infinite loop space (a 2-fold loop space is an n-fold loop space for all n, since Ω^{2}X ≃ Ω^{n}Ω^{n-2}X). The braided monoidal category gives a 2-fold loop space, hence an infinite loop space. The distinction between E_{2} and E_{∞} is not 'finite vs infinite loop' but the multiplicative structure (E_{2} gives a double loop space, E_{∞} a spectrum / connective E_{∞}-ring structure).
- **Proposed fix:** Replace with: '対称性は $\pi_{0}^{\cong}\mathbf{C}$ の可換性に使った。組紐だけでも同型類のモノイドは可換で $K_{0}$ は定義でき、分類空間は $E_{2}$ 空間（2 重ループ空間、従って無限ループ空間）になるが、$E_{\infty}$ 構造（スペクトラム・可換環スペクトラム）は得られない。'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The hypcheck still says that with only a braid the higher structure 'stops at E_{2} and does not give an infinite loop space', which is false: a 2-fold loop space is an n-fold loop space for all n, so an E_{2} space is already an infinite loop space; the E_{2}/E_{∞} distinction is about multiplicative structure, not finiteness of the loop spectrum.

### ISSUE-0002 [Open] K_{0}(Z[G]) 'includes class number computation' is imprecise/false
- **Category:** Supplement/remark error
- **Location:** supplement (cat:sec-ilp-grothendieck supplement)
- **Detail:** The supplement says K_{0}(Z[G]) for a finite group 'includes the computation of the class number'. This is misleading: K_{0}(Z[G]) is the Grothendieck group of finitely generated projective Z[G]-modules, which is essentially the class group of the maximal order (via the Swan/Jacobinski theorem, K_{0}(Z[G]) ≅ Z ⊕ Cl(Z[G]) up to the defect group / Swan subgroup), not the class number of a number field. The class number appears in K_{0} of rings of integers, not of group rings in this naive way. The statement conflates different invariants.
- **Proposed fix:** Replace with: 'たとえば $K_{0}(\mathbb{Z}[G])$（有限群の整数群環）は、極大整環の類群やスワン部分群と関係し、計算は一般には難しい。'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still claims K_{0}(Z[G]) for finite G 'includes the computation of the class number', conflating the Grothendieck group of projective Z[G]-modules (related to the class group of the maximal order / Swan subgroup) with the class number of a number field.

### ISSUE-0003 [Resolved] K_{1}(R) = GL(R)^{ab} stated without the stable/limit caveat
- **Category:** Unsupported fact
- **Location:** remark item 5 (cat:sec-ilp-classifying remark)
- **Detail:** The remark states K_{1}(R) = GL(R)^{ab}. For Quillen's K_{1} this is correct only with GL(R) = colim_n GL_{n}(R) (the stable general linear group), i.e. K_{1}(R) = GL(R)^{ab} where GL(R) is the stable limit, or equivalently K_{1}(R) = GL(R)/E(R) with the commutator subgroup. As written 'GL(R)^{ab}' without specifying the stable limit and the Whitehead lemma is imprecise; for non-stable GL_{n} it is false in general.
- **Proposed fix:** Replace with: '$K_{1}(R) = GL(R)^{\mathrm{ab}}$（$GL(R)=\operatorname{colim}_{n}GL_{n}(R)$ は安定一般線型群、ホワイトヘッドの補題による）。'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Resolved — Remark item 5 now writes K_{1}(R)=GL(R)^{ab} with GL(R) defined as the stable limit ∪_{n}GL_{n}(R), which is the correct statement.

### ISSUE-0004 [Open] π_{0}BC is a commutative monoid only under the group-completion/H-space structure, and 'if C is a groupoid' is the wrong hypothesis
- **Category:** Supplement/remark error
- **Location:** remark (cat:sec-ilp-classifying remark), item 1
- **Detail:** Item 1 states that π_{0}BC is the commutative monoid of isomorphism classes 'if C is a groupoid'. But π_{0}BC is always the set of isomorphism classes (connected components) of C regardless of whether C is a groupoid; the groupoid condition is irrelevant to this. What requires care is that π_{0}BC carries a commutative monoid structure from ⊗, which holds for any symmetric monoidal C. The parenthetical hypothesis is spurious and misleading.
- **Proposed fix:** Replace '（$\mathbf{C}$ が亜群なら）同型類の可換モノイド' with '同型類のなす可換モノイド（$\otimes$ から誘導される）'.
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0005 [Open] Group-completion homology localization attributed to McDuff–Segal 1976
- **Category:** Unsupported fact
- **Location:** remark (cat:sec-ilp-classifying remark), item 2
- **Detail:** Item 2 attributes the group-completion theorem (π_{0}ΩBY=K(π_{0}Y) and homology becoming localization inverting π_{0}Y) to 'D. McDuff–G. Segal, 1976'. The group-completion theorem is due to Quillen (1971, unpublished) and Segal (1973, 'Configuration-spaces and iterated loop-spaces'); McDuff–Segal 1976 ('Homology fibrations and the group-completion theorem') gives a homotopy-theoretic criterion. The attribution as stated is imprecise, and the π_{0} statement requires Y to be a homotopy-commutative monoid (an E_{∞} or at least grouplike-after-completion condition).
- **Proposed fix:** Attribute the group-completion theorem to D. Quillen and G. Segal (1973), with McDuff–Segal (1976) giving the homology-fibration criterion; state it for a homotopy-commutative monoid Y.
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0006 [Open] Step 1 of the proof of the classifying-space proposition: |Δ[1]| via co-Yoneda gives the representable, not Δ^{1} as a space without the standard identification
- **Category:** Logical gap
- **Location:** cat:classifying-space-basic / Step 1
- **Detail:** Step 1 computes |N2|=|Δ[1]| using the co-Yoneda lemma to get ∫^{n}Δ([n],[1])×Δ^{n}≅Δ^{1}. The co-Yoneda lemma gives ∫^{n}Δ([n],[1])×Δ^{n}≅Δ^{1} where Δ^{1} here is the simplicial set Δ[1] (the represented simplicial set), not automatically the topological standard 1-simplex. The identification of the geometric realization of the represented simplicial set Δ[1] with the topological interval [0,1] is exactly what is being asserted and is not supplied by co-Yoneda alone; it requires |Δ[n]|≅Δ^{n} (the Yoneda/realization compatibility), which is not cited.
- **Proposed fix:** Add: by the co-Yoneda lemma and the fact that geometric realization sends the represented simplicial set Δ[n] to the standard simplex Δ^{n} (i.e. |Δ[-]|≅Δ^{-}), we get |Δ[1]|≅Δ^{1}=[0,1].
- **Reported:** 2026-10-28 (048145a)
