# Verification tracker: `02-algebra/04-associative-rings/02-noncommutative-rings/01-noncommutative-rings.html`

<!-- source: 02-algebra/04-associative-rings/02-noncommutative-rings/01-noncommutative-rings.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, the matrix-ideal theorem, quaternions, endomorphism/opposite ring, and the Wedderburn little theorem proof with its cyclotomic lemma) is logically sound; the proof steps and citations check out. The genuine problems are confined to the closing supplement: the paraphrase of Jacobson's commutativity theorem omits essential hypotheses (finiteness or boundedness of the exponents), making it false as stated, and the Yoneda remark is imprecise about the variance/op appearing in End_R(R). Both are side comments, consistent with errors concentrating in supplements.

## Issues

### ISSUE-0001 [Open] Jacobson commutativity theorem misstated (missing finiteness / division-ring condition)
- **Category:** Supplement/remark error
- **Location:** supplement / ウェダーバーンの小定理の周辺
- **Detail:** The supplement states Jacobson's commutativity theorem as: "every ring in which each element x satisfies x^{n(x)}=x for some n(x)≥2 is commutative". As stated this is false without further hypotheses. For instance a division ring D in which every element is algebraic over its center (e.g. the quaternion division ring over R, where each x satisfies a quadratic) satisfies x^{n(x)}=x for suitable n(x) depending on x, yet is noncommutative. Jacobson's theorem requires the ring to be finite, or more generally that the set {n(x)} be bounded (or that the ring have no infinite set of orthogonal idempotents / be a division ring with bounded exponent). The cited theorem mod:jacobson-commutativity presumably states the correct hypotheses; the supplement's paraphrase drops them.
- **Proposed fix:** ジェイコブソンの可換性定理「各元 $x$ に対し $x^{n(x)}=x$ となる $n(x)\ge 2$ が（$x$ に依存してよいが）とれ、かつそのような $n(x)$ が全体で有界である環は可換」はこの定理の一般化で、\tref{mod:jacobson-commutativity} で稠密性定理を使って証明する。（有界性の仮定を落とすと、$\mathbb{R}$ 上の四元数体のように各元が中心上代数的な非可換可除環が反例になる。）
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Yoneda remark: End_R(R) is not the endomorphism monoid of the representable functor in the needed variance
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** The remark claims \ref{mod:endomorphism-opposite} (End_R(R) ≅ R^op) is the simplest case of the Yoneda lemma, saying the endomorphisms of the representable functor Hom_R(R,-) are given by right multiplication and composition reverses. By Yoneda, natural endomorphisms of Hom_R(R,-) correspond to End_R(R) with its usual composition, i.e. to R^op; but the identification "right multiplication by elements of R" with reversed composition is exactly the op-twist, so the statement as phrased conflates the functor's endomorphism ring with R rather than R^op. The correct Yoneda statement is Nat(Hom_R(R,-), Hom_R(R,-)) ≅ End_R(R) ≅ R^op, and the reversal is a consequence of the left-action convention, not of Yoneda itself. As written the remark is imprecise about which ring the endomorphisms form.
- **Proposed fix:** 米田の補題によれば表現可能関手 $\Hom_{R}(R,-)$ の自己自然変換の成す環は $\End_{R}(R)$、すなわち $R^{\mathrm{op}}$ である。写像を左に書く約束のため、$R$ の元の右からの掛け算が自己自然変換を与え、合成の向きが逆になって $R^{\mathrm{op}}$ が現れる。
- **Reported:** 2026-10-28 (8ccef3d)
