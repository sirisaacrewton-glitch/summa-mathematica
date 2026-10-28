# Verification tracker: `01-foundations/05-proof-theory/07-reverse-mathematics/02-wkl0.html`

<!-- source: 01-foundations/05-proof-theory/07-reverse-mathematics/02-wkl0.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The proofs of Σ⁰₁ separation, the recursively inseparable sets, and the Heine–Borel equivalence are sound, and the main theorem statements match the literature. The only genuine error is in the supplement: the claim that replacing Δ⁰₁ comprehension by WKL (rather than by Σ⁰₁ separation) fails to give WKL₀ is false, since WKL implies Δ⁰₁ comprehension over the base theory. The remaining supplement remarks are essentially correct, with minor imprecision in the justification for restricting to coded (countable) covers.

## Issues

### ISSUE-0001 [Open] Replacing Δ⁰₁ comprehension by WKL does not give WKL₀
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The supplement claims that replacing the Δ⁰₁ comprehension axiom of RCA₀ by Σ⁰₁ separation gives WKL₀ (correct), but that replacing Δ⁰₁ comprehension merely by weak König's lemma does not give an equivalent system, arguing that the collection of sets may be almost empty so that WKL holds trivially. This is wrong: RCA₀ without Δ⁰₁ comprehension but with WKL is still equivalent to WKL₀, because WKL itself implies Δ⁰₁ comprehension over the base theory (the base axioms IΣ⁰₁ plus recursive comprehension for Σ⁰₁-definable sets suffice; indeed WKL implies Σ⁰₁ separation, which implies Δ⁰₁ comprehension). The 'almost empty set domain' argument confuses the set-existence axioms with the second-order domain: the base theory already provides Σ⁰₁ comprehension, and WKL then yields Δ⁰₁ comprehension. So the claimed non-equivalence is false.
- **Proposed fix:** Replace the second sentence with: '一方、$\Delta^{0}_{1}$ 内包公理を弱ケーニッヒの補題で置き換えても $\mathsf{WKL}_{0}$ と同値になる：$\mathsf{WKL}$ から $\Sigma^{0}_{1}$ 分離原理が従い、分離原理から $\Delta^{0}_{1}$ 内包公理が出るので、$\Delta^{0}_{1}$ 内包公理は $\mathsf{WKL}$ の下で回復される。' (i.e. both replacements give WKL₀).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Low basis iteration and WKL₀ ≠ ACA₀
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果, 低基底定理 bullet
- **Detail:** The claim that iterating the low basis theorem yields an ω-model of WKL₀ all of whose elements are low, and that this model omits ∅′, hence WKL₀ ≠ ACA₀, is essentially correct in outline but the stated reason '∅′ を含まないので' is imprecise: an ω-model of ACA₀ must contain ∅′ (indeed every arithmetic set relative to its members), so a model all of whose sets are low cannot contain ∅′. This is fine. However the phrase 'すべての元が低い' combined with 'ω モデルが作れ' is stated without the necessary hypothesis that the iteration is a countable/finite-injury construction; as stated it is acceptable. No error to report here beyond noting the argument is standard.
- **Proposed fix:** No change needed; optionally clarify that the model is built by a finite-injury iteration and that ACA₀ requires ∅′ to be a member, so omitting ∅′ suffices.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Conservation attributions
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果, 保存性 bullet
- **Detail:** The supplement states WKL₀ is Π¹₁-conservative over RCA₀ (Harrington) and Π⁰₂-conservative over PRA (Friedman), and calls the latter 'a partial realization of Hilbert's program (Simpson)'. The conservativity statements are correct. The attribution of the Π¹₁-conservativity to Harrington is standard. The characterization as 'Hilbert's program partial realization' attributed to Simpson is a reasonable summary of Simpson's discussion. No mathematical error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Heine–Borel restricted to countable covers
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The supplement says Heine–Borel was restricted to 'countable open covers' because only countable covers are expressible in second-order arithmetic. This is slightly misleading: in the coded formulation the cover is given by a single set U of codes (a countable family), and the theorem is about such coded covers; it is not that 'only countable covers are expressible' but that the coded notion of open set is by a countable sequence of rational intervals. The statement is essentially correct but the justification is imprecise.
- **Proposed fix:** Rephrase: '二階算術では開集合を可算個の有理開区間の符号として表すので、ハイネ–ボレルの定理はこの符号で与えられた被覆について述べられる。'
- **Reported:** 2026-10-28 (10fede1)
