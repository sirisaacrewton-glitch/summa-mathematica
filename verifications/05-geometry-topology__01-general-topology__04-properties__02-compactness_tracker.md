# Verification tracker: `05-geometry-topology/01-general-topology/04-properties/02-compactness.html`

<!-- source: 05-geometry-topology/01-general-topology/04-properties/02-compactness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, equivalences, basic properties, tube lemma, Heine–Borel, extreme value) is logically sound. The genuine problems concentrate in the supplement: the claim that $\omega_{1}$ is sequentially compact is false, the claim that Tychonoff's theorem is equivalent to AC is false (it is equivalent to the ultrafilter lemma, strictly weaker), and the non-Hausdorff remark conflates the two failures. A hypcheck comment is also imprecise. No previously reported issues exist.

## Issues

### ISSUE-0001 [Open] ω₁ is not sequentially compact
- **Category:** Supplement/remark error
- **Location:** supplement (点列コンパクト性)
- **Detail:** The supplement claims that the ordinal space $\omega_{1}$ is sequentially compact but not compact. In fact $\omega_{1}$ (with the order topology) is not sequentially compact: the sequence $n \mapsto n$ (or any strictly increasing sequence of countable ordinals) has no convergent subsequence, since a countable sequence of countable ordinals is bounded below $\omega_{1}$ and hence cannot converge to $\omega_{1}$, while it also has no other cluster point. What is true is that $\omega_{1}$ is countably compact / limit-point compact (every infinite subset has a limit point) but not compact, and it is not sequentially compact. So the example is wrong.
- **Proposed fix:** Replace with a correct example: e.g. "$\omega_{1}$ is countably compact (every countable open cover has a finite subcover) but not compact; it is not sequentially compact either. A space that is sequentially compact but not compact is $\omega_{1}+1$ minus ... " — or simply state: "点列コンパクト性は一般にはコンパクト性と異なる。例えば $\{0,1\}^{\R}$ はコンパクトだが点列コンパクトでない。逆に点列コンパクトだがコンパクトでない例も存在する（例えば $\omega_{1}$ に一点を加えた空間の適切な変形）。距離空間では二つは一致する。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Tychonoff's theorem is not equivalent to AC
- **Category:** Supplement/remark error
- **Location:** supplement (類似の定理)
- **Detail:** The supplement states that the generalization of finite-product compactness to infinite products (Tychonoff's theorem) "is equivalent to the axiom of choice". This is false: Tychonoff's theorem is strictly weaker than AC (it is equivalent to the Boolean prime ideal theorem / ultrafilter lemma, which is strictly weaker than full AC). The statement overstates the logical strength.
- **Proposed fix:** 無限個の直積についての 1 の一般化が\ref{top:tychonoff}で、これは選択公理より弱い超フィルター補題（ブール素イデアル定理）と同値である（選択公理からは導けるが、逆は成り立たない）。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Compact subsets need not be closed; intersection claim needs care
- **Category:** Supplement/remark error
- **Location:** supplement (ハウスドルフ性を外すと)
- **Detail:** The claim "コンパクト集合は閉とは限らず（補有限位相）、二つのコンパクト集合の共通部分がコンパクトとは限らない" is acceptable as a statement that Hausdorff is needed, but the parenthetical only justifies the first part. More importantly, in the cofinite topology every subset is compact, so the intersection of two compact sets there IS compact; the second claim needs a genuine example (e.g. in a non-Hausdorff space two compact sets whose intersection is not compact). As written it suggests the cofinite topology witnesses both failures, which is false.
- **Proposed fix:** コンパクト集合は閉とは限らない（補有限位相の無限集合では任意の部分集合がコンパクトで、閉でないものもある）。またハウスドルフ性を外すと二つのコンパクト集合の共通部分がコンパクトになるとは限らない（反例は別途、非ハウスドルフ空間で与えられる）。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Hypcheck comment on 5⇒3 overstated
- **Category:** Supplement/remark error
- **Location:** top:compact-equivalents / hypcheck
- **Detail:** The hypcheck says that without the ultrafilter lemma, "すべての超フィルターが収束する" is "自明に近い（単項超フィルターしかないことがありうる）ので、コンパクト性を導かない". This is imprecise: in ZF it is not the case that only principal ultrafilters can exist in general; the correct statement is that without some choice principle one cannot prove that every filter extends to an ultrafilter, so condition 5 may hold vacuously or fail to capture compactness. The phrasing "単項超フィルターしかないことがありうる" as a general fact is misleading.
- **Proposed fix:** **5 ⇒ 3** は超フィルター補題を使う。超フィルター補題がない（選択公理が使えない）世界では、任意のフィルターが超フィルターに拡張できるとは限らないため、「すべての超フィルターが収束する」からコンパクト性を導くこの論法は使えない。
- **Reported:** 2026-10-28 (8ccef3d)
