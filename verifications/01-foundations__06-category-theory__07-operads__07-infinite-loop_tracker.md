# Verification tracker: `01-foundations/06-category-theory/07-operads/07-infinite-loop.html`

<!-- source: 01-foundations/06-category-theory/07-operads/07-infinite-loop.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the Grothendieck group construction, its universal property, K_{0} examples, and the classifying-space proposition are sound. The main genuine problem is in the hypcheck, which falsely claims that braided (E_{2}) structure 'stops at E_{2} and does not give an infinite loop space' — E_{2} spaces are already infinite loop spaces. Secondary imprecisions concern the K_{1}(R)=GL(R)^{ab} statement (needs the stable limit), the K_{0}(Z[G]) 'class number' remark, and the π_{0}BC phrasing. No logical gaps or missing hypotheses were found in the proofs.

## Issues

### ISSUE-0001 [Open] Braided monoidal categories also give E∞ (infinite loop) spaces
- **Category:** Supplement/remark error
- **Location:** hypcheck (cat:sec-ilp-notation hypcheck), third bullet
- **Detail:** The hypcheck claims that with only a braid (not a symmetry) the higher structure 'stops at E_{2} and does not give an infinite loop space'. This is false: by the recognition principle, an E_{2} (braided) space is already an infinite loop space (a 2-fold loop space is an n-fold loop space for all n, since Ω^{2}X ≃ Ω^{n}Ω^{n-2}X). The braided monoidal category gives a 2-fold loop space, hence an infinite loop space. The distinction between E_{2} and E_{∞} is not 'finite vs infinite loop' but the multiplicative structure (E_{2} gives a double loop space, E_{∞} a spectrum / connective E_{∞}-ring structure).
- **Proposed fix:** Replace with: '対称性は $\pi_{0}^{\cong}\mathbf{C}$ の可換性に使った。組紐だけでも同型類のモノイドは可換で $K_{0}$ は定義でき、分類空間は $E_{2}$ 空間（2 重ループ空間、従って無限ループ空間）になるが、$E_{\infty}$ 構造（スペクトラム・可換環スペクトラム）は得られない。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] K_{0}(Z[G]) 'includes class number computation' is imprecise/false
- **Category:** Supplement/remark error
- **Location:** supplement (cat:sec-ilp-grothendieck supplement)
- **Detail:** The supplement says K_{0}(Z[G]) for a finite group 'includes the computation of the class number'. This is misleading: K_{0}(Z[G]) is the Grothendieck group of finitely generated projective Z[G]-modules, which is essentially the class group of the maximal order (via the Swan/Jacobinski theorem, K_{0}(Z[G]) ≅ Z ⊕ Cl(Z[G]) up to the defect group / Swan subgroup), not the class number of a number field. The class number appears in K_{0} of rings of integers, not of group rings in this naive way. The statement conflates different invariants.
- **Proposed fix:** Replace with: 'たとえば $K_{0}(\mathbb{Z}[G])$（有限群の整数群環）は、極大整環の類群やスワン部分群と関係し、計算は一般には難しい。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] K_{1}(R) = GL(R)^{ab} stated without the stable/limit caveat
- **Category:** Unsupported fact
- **Location:** remark item 5 (cat:sec-ilp-classifying remark)
- **Detail:** The remark states K_{1}(R) = GL(R)^{ab}. For Quillen's K_{1} this is correct only with GL(R) = colim_n GL_{n}(R) (the stable general linear group), i.e. K_{1}(R) = GL(R)^{ab} where GL(R) is the stable limit, or equivalently K_{1}(R) = GL(R)/E(R) with the commutator subgroup. As written 'GL(R)^{ab}' without specifying the stable limit and the Whitehead lemma is imprecise; for non-stable GL_{n} it is false in general.
- **Proposed fix:** Replace with: '$K_{1}(R) = GL(R)^{\mathrm{ab}}$（$GL(R)=\operatorname{colim}_{n}GL_{n}(R)$ は安定一般線型群、ホワイトヘッドの補題による）。'
- **Reported:** 2026-10-28 (8ccef3d)
