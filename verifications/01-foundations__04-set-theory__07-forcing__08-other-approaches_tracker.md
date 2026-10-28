# Verification tracker: `01-foundations/04-set-theory/07-forcing/08-other-approaches.html`

<!-- source: 01-foundations/04-set-theory/07-forcing/08-other-approaches.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely a faithful summary of Kunen's overview, and the one proved result (Proposition 8.1, conservativity of the c.t.m. constant) is correct. The genuine problems concentrate in the historical/remark material: the infinite-distributivity sentence is asserted to be valid while the text itself later exhibits a Boolean-valued interpretation making it false (a direct contradiction); the Kleene–Post discussion mislabels Turing-incomparable reals as 'recursively incomparable', which is false since every real is comparable with the computable reals; and the Rasiowa–Sikorski / uncountable-language completeness remark is imprecise and overstated. The strong/weak forcing remark is essentially correct but would benefit from noting the M-relativization. No issues were found in the proofs or in the cited-label usage.

## Issues

### ISSUE-0001 [Open] Infinite distributivity formula is not valid
- **Category:** Supplement/remark error
- **Location:** History section, the sentence introducing the infinite distributivity law (the displayed formula with p_{ni})
- **Detail:** The text claims that the displayed sentence φ = ⋀_{n∈ω}⋁_{i∈2} p_{ni} → ⋁_{f∈{}^ω2}⋀_{n∈ω} p_{n f(n)} is valid (妥当). It is not valid in the intended reading. The disjunction on the right ranges over f ∈ {}^ω2 ∩ V, i.e. only over functions in the ground model, whereas the left side allows the sequence ⟨p_{n0},p_{n1}⟩_{n} to be an arbitrary (possibly generic) branch. In the regular-open algebra of Fn(ω,2) with p_{ni} = {f : f(n)=i}, the antecedent has truth value 1 (for each n the union of the two sets is everything), while the consequent has truth value 0 (no ground-model f meets every set). So the sentence has truth value 0, i.e. it is not valid. The text itself later says 'φ はある適当なブール値の解釈で真理値 0 をとる', which directly contradicts the earlier claim that φ is valid. The correct statement is that φ is valid in the two-valued (standard) semantics but not derivable in the usual infinitary inference rules, and its failure is witnessed by a Boolean-valued interpretation.
- **Proposed fix:** Replace 'φ は妥当だが通常の無限論理の推論規則では導出できない' with: 'φ は二値意味論では妥当だが（各 n で分岐 ⟨p_{n0},p_{n1}⟩ を選べばよい）、通常の無限論理の推論規則では導出できない。そのことは、φ がある適当なブール値の解釈で真理値 0 をとることから分かる'.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Kleene–Post functions are not recursively incomparable
- **Category:** Supplement/remark error
- **Location:** History section, the paragraph on recursion theory (Kleene–Post)
- **Detail:** The text says that with P = Fn(2×ω,2) and G generic over M, the encoded reals f_{0},f_{1} are '再帰的に比較不能' (recursively incomparable). This is false: f_{0} and f_{1} are reals, and every real is Turing-comparable with the computable reals (e.g. 0 is recursive, so f_{i} ≥_{T} 0). What the genericity argument gives is that f_{0} and f_{1} are Turing-incomparable (neither is recursive in the other), i.e. they form a minimal pair over the ground model / are mutually generic. The phrase '再帰的に比較不能' should be '互いに再帰的でない（チューリング比較不能）'.
- **Proposed fix:** Replace 'すると f_{0} と f_{1} は再帰的に比較不能である' with 'すると f_{0} と f_{1} は互いに他方から再帰的に計算できず、したがってチューリング次数として比較不能である'.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Rasiowa–Sikorski attribution and 'non-countable language' claim
- **Category:** Supplement/remark error
- **Location:** History section, model theory paragraph (Rasiowa–Sikorski, Karp)
- **Detail:** Two problems. (i) The text says the Boolean-valued proof of the completeness theorem is 'ラシオワ–シコルスキ（1963）による'. The standard attribution is Rasiowa–Sikorski's book 'The Mathematics of Metamathematics' (1963), but the completeness proof via Boolean-valued models and the Rasiowa–Sikorski lemma is usually credited to Rasiowa–Sikorski and, for the Boolean-valued model approach specifically, to Rasiowa–Sikorski / Scott; the bare date attribution is at least imprecise. More seriously, (ii) the claim 'ブール値モデルを使うと、非可算の言語についての類似の完全性定理は成り立たないことが知られていた' is stated too strongly and is misleading: for a fixed non-countable language, compactness/completeness can fail, but the precise statement (the Rasiowa–Sikorski lemma requires countably many dense sets, hence a countable language / countably many formulas) should be given. As written it suggests a blanket impossibility for all uncountable languages, which is not what the literature supports.
- **Proposed fix:** Replace with: 'ゲーデルの完全性定理のラシオワ–シコルスキによる証明の一つは、まず理論のブール値モデルを作り、次にラシオワ–シコルスキの補題（可算個の稠密集合に対するフィルターの存在）を適用して二値のモデルを与える準同型を得るものであった。この方法は可算個の論理式しかもたない（可算言語の）理論に対して完全性を与えるが、非可算個の論理式をもつ理論に対してはラシオワ–シコルスキの補題がそのままでは使えず、同様の完全性は一般には成り立たない'.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Strong forcing does not respect logical equivalence — example needs qualification
- **Category:** Supplement/remark error
- **Location:** History section, paragraph on weak/strong forcing
- **Detail:** The text states 'たとえば p⊩_{s}¬¬φ は p⊩_{s}φ を導かない'. This is correct for strong forcing in general, but the surrounding sentence '⊩ と異なり ⊩_{s} は論理的同値を尊重しない' together with the example can mislead: the failure of p⊩_{s}¬¬φ ⇒ p⊩_{s}φ is exactly the failure of double-negation elimination, and it holds only because strong forcing is defined by a direct recursion on formulas (not by the generic-filter semantics). The claim as stated is acceptable, but the accompanying assertion that weak forcing 'は ⊩_{s} を使って p⊩φ :⟺ p⊩_{s}¬¬φ と定義された' should note that this definition requires the ground model M and is not the same as the modern V-based ⊩^{*}. This is a precision issue rather than a falsehood; flagging as medium.
- **Proposed fix:** Add after the definition: '（この定義は M に相対化された ⊩_{s} を用いるもので、V 上で直接定義される ⊩^{*} とは異なることに注意）'.
- **Reported:** 2026-10-28 (8ccef3d)
