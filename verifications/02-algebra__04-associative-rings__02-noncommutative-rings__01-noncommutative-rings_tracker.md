# Verification tracker: `02-algebra/04-associative-rings/02-noncommutative-rings/01-noncommutative-rings.html`

<!-- source: 02-algebra/04-associative-rings/02-noncommutative-rings/01-noncommutative-rings.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Jacobson's commutativity theorem misstated (missing finiteness / no nonzero nil ideals)
- **Category:** Supplement/remark error
- **Location:** supplement (ウェダーバーンの小定理の周辺)
- **Detail:** The supplement states Jacobson's commutativity theorem as: "every ring in which for each x there is n(x)≥2 with x^{n(x)}=x is commutative". As stated this is false without further hypotheses. The classical Jacobson theorem requires the ring to have no nonzero nil ideals (or to be finite, or a division ring, etc.). Counterexample: the ring R = F_2 ⊕ V where V is a nonzero F_2-vector space with V^2=0 (square-zero ideal). Every element x satisfies x^3=x (indeed x^2∈{0,1} and x^3=x), yet R is commutative here — but more importantly the stated hypothesis alone does not force commutativity in general; the standard statement needs the 'no nonzero nil ideal' hypothesis. Also the claim that it is a 'generalization' of Wedderburn's little theorem is only true in the sense that a finite division ring satisfies the hypothesis and has no nil ideals; the bare hypothesis as written is not sufficient. The cited theorem \tref{mod:jacobson-commutativity} presumably states the correct hypotheses, so the supplement's paraphrase is imprecise/overstated.
- **Proposed fix:** ジェイコブソンの可換性定理「零でない両側イデアルがすべて冪零でない（非零冪零イデアルをもたない）環で、すべての元 $x$ がある $n(x)\ge 2$ で $x^{n(x)}=x$ をみたすものは可換」はこの定理の一般化で、\tref{mod:jacobson-commutativity} で稠密性定理を使って証明する。（有限可除環はこの仮定をみたすので、ウェダーバーンの小定理はその特別な場合。）
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Yoneda remark: End_R(R) vs Hom_R(R,-) natural transformations
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement says \ref{mod:endomorphism-opposite} (which gives End_R(R) ≅ R^{op}) 'can be regarded as the simplest case of the Yoneda lemma: the endomorphisms of the representable functor Hom_R(R,-) are given by right multiplication by elements of R, and composition reverses'. By Yoneda, natural endomorphisms of Hom_R(R,-) are given by End_R(R) acting by precomposition, i.e. End(Hom_R(R,-)) ≅ End_R(R) ≅ R^{op}. The statement is essentially correct in content, but the phrase 'right multiplication by elements of R' is the identification via the isomorphism End_R(R)≅R^{op}; strictly the natural transformations correspond to endomorphisms of R (left R-linear maps), which are right multiplications. This is acceptable, but the claim that composition 'reverses' is the source of the op; it is fine. No genuine error — but the identification should be stated as End(Hom_R(R,-)) ≅ End_R(R) ≅ R^{op} to be precise.
- **Proposed fix:** 米田の補題により、表現可能関手 $\Hom_{R}(R,-)$ の自己自然変換のなす環は $\End_{R}(R)\cong R^{\mathrm{op}}$ に同型である（自己準同型は右からの掛け算で与えられ、合成の向きが反転する）。
- **Reported:** 2026-10-28 (10fede1)
