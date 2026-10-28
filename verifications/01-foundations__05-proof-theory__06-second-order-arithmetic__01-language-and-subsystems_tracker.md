# Verification tracker: `01-foundations/05-proof-theory/06-second-order-arithmetic/01-language-and-subsystems.html`

<!-- source: 01-foundations/05-proof-theory/06-second-order-arithmetic/01-language-and-subsystems.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 8 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct in its proofs, but the supplement and remarks contain several substantive errors: the characterization of Π¹₁-CA₀ as deciding well-orderings, the conservativity claims (WKL₀ is not conservative over IΣ₁), the proof-theoretic ordinal attribution for WKL₀, the garbled RCA*₀ description, and most seriously the remark claiming that RCA₀-provably total functions are exactly primitive recursive and that Ackermann totality is unprovable in RCA₀ (both false, since RCA₀ contains IΣ₁ which proves Ackermann totality). The hypcheck claim that Σ⁰₁-CA yields ACA₀ is also false. These should be corrected.

## Issues

### ISSUE-0001 [Open] Π¹₁-CA₀ mischaracterized as 'deciding well-orderings'
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement says Π¹₁-CA₀ corresponds to 'a world where one can decide whether a relation is a well-ordering'. This is wrong: Π¹₁-CA₀ gives comprehension for Π¹₁ formulas, i.e. the ability to form the set of X such that WO(X) (or the set of indices of well-founded trees), not to decide well-ordering. Deciding WO is impossible even in full Z₂ (WO is Π¹₁-complete and not Δ¹₁). The correct characterization is that Π¹₁-CA₀ allows forming sets defined by a single universal set quantifier, e.g. the set of (codes of) well-orderings.
- **Proposed fix:** Π¹₁-CA₀ は「Π¹₁ 論理式で定義できる集合、たとえば整列順序（のコード）全体の集合を作れる世界」に当たる（整列順序かどうかを判定できるわけではない）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] RCA₀/WKL₀ are not Π⁰₂-conservative over PRA
- **Category:** Supplement/remark error
- **Location:** supplement / 保存性
- **Detail:** The claim 'RCA₀ and WKL₀ are conservative extensions of IΣ₁, hence of PRA for Π⁰₂ sentences' is incorrect. The known results: RCA₀ is Π⁰₂-conservative over PRA (and conservative over IΣ₁ for all first-order sentences); WKL₀ is Π¹₁-conservative over RCA₀ and Π⁰₂-conservative over PRA, but WKL₀ is NOT conservative over IΣ₁ (it proves e.g. Con(IΣ₁)-type statements / totality facts beyond IΣ₁). So 'conservative over IΣ₁, hence over PRA for Π⁰₂' conflates the two systems and misattributes the Π⁰₂-conservativity of WKL₀ to conservativity over IΣ₁.
- **Proposed fix:** RCA₀ は一階の算術の文について IΣ₁ の保存拡大であり、Π⁰₂ 文について PRA の保存拡大である。WKL₀ は RCA₀ の Π¹₁ 保存拡大であり、Π⁰₂ 文について PRA の保存拡大である（ハーリントン、フリードマン）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Proof-theoretic ordinal of WKL₀
- **Category:** Supplement/remark error
- **Location:** supplement / 証明論的順序数
- **Detail:** Listing WKL₀ with proof-theoretic ordinal ω^ω is imprecise/misleading: WKL₀ is Π¹₁-conservative over RCA₀, so its Π¹₁ (and Π⁰₂) consequences have the same ordinal ω^ω, but WKL₀ itself proves new Π¹₁ statements (e.g. separation) and its full proof-theoretic ordinal is not ω^ω in the usual sense; the standard statement is that RCA₀ has ordinal ω^ω and WKL₀ is Π¹₁-conservative over it. Stating 'WKL₀ has proof-theoretic ordinal ω^ω' without the conservativity qualification is an overstatement.
- **Proposed fix:** RCA₀ の証明論的順序数は ω^ω であり、WKL₀ は RCA₀ の Π¹₁ 保存拡大である（したがって Π¹₁ 帰結の順序数は同じ ω^ω）。ACA₀ は ε₀、ATR₀ は Γ₀ を証明論的順序数にもつ。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] RCA*₀ description
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討
- **Detail:** The description of RCA*₀ as 'RCA₀ with Σ⁰₁ induction weakened to the induction axiom, plus totality of exponentiation' is garbled. The standard system RCA*₀ (Simpson–Smith) is RCA₀ with Σ⁰₁ induction replaced by the induction axiom (i.e. only Δ⁰₁/Σ⁰₀ induction) together with the totality of exponentiation; the phrase '指数関数の全域性を加える' is right but the weakening described ('集合についての帰納法の公理だけに弱めた') already is the induction axiom, so the sentence is redundant/confused. More importantly, RCA*₀ is not simply 'weaker RCA₀ plus exp'; it is a distinct system whose exact relationship requires care.
- **Proposed fix:** RCA₀ の Σ⁰₁ 帰納法を帰納法の公理（集合についての帰納法）に弱め、指数関数の全域性を加えた体系 RCA*₀（シンプソン–スミス）も研究されている。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] RCA₀-provably total functions are exactly primitive recursive
- **Category:** Unsupported fact
- **Location:** remark after pt:rca0-basic (item 5 remark)
- **Detail:** The remark claims that the functions whose totality is provable in RCA₀ are exactly the primitive recursive functions. This is false: RCA₀ proves totality of functions far beyond primitive recursive, e.g. Ackermann function is not provably total in RCA₀? Actually RCA₀ proves totality of the Ackermann function (it is provable in IΣ₁, and RCA₀ ⊇ IΣ₁ for first-order statements). The correct characterization is that the provably total functions of RCA₀ are exactly the primitive recursive functions? No — RCA₀ proves totality of all primitive recursive functions and more (e.g. Ackermann), since IΣ₁ proves totality of Ackermann. The provably total functions of RCA₀ are exactly those provably total in IΣ₁, which include the Ackermann function. So the remark's claim is false, and the subsequent claim that RCA₀ cannot prove totality of Ackermann is also false.
- **Proposed fix:** RCA₀ で全域性が証明できる関数は、IΣ₁ で全域性が証明できる関数全体であり、原始再帰関数だけでなくアッカーマン関数のような関数も含む。したがってアッカーマン関数の全域性は RCA₀ で証明できる。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Ackermann totality not provable in RCA₀
- **Category:** Unsupported fact
- **Location:** remark after pt:rca0-basic (item 5 remark)
- **Detail:** The remark states that the existence of the graph of the Ackermann function is provable in RCA₀ but its totality is not. This is false: the Ackermann function is primitive recursive in the sense of being provable total in IΣ₁ (in fact in PRA), and RCA₀ contains IΣ₁ for first-order arithmetic, so RCA₀ proves totality of Ackermann. The example is wrong.
- **Proposed fix:** アッカーマン関数の全域性は IΣ₁（したがって RCA₀）で証明できる。RCA₀ で全域性が証明できない関数の例としては、たとえば急成長階層の十分高い段階や、IΣ₁ で全域性が証明できない関数を挙げる必要がある。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Σ⁰₁ comprehension equivalent to ACA₀
- **Category:** Supplement/remark error
- **Location:** hypcheck / Δ⁰₁-CA の仮定
- **Detail:** The hypcheck says 'Σ⁰₁ comprehension makes the system equivalent to ACA₀'. This is false: RCA₀ + Σ⁰₁-CA is much weaker than ACA₀; in fact Σ⁰₁-CA is already provable in RCA₀? No — RCA₀ has Δ⁰₁-CA, and Σ⁰₁-CA is strictly stronger than Δ⁰₁-CA but still far weaker than ACA₀ (it is implied by ACA₀ but does not imply it). The correct statement is that Σ⁰₁-CA is not provable in RCA₀ but is much weaker than ACA₀; e.g. RCA₀ + Σ⁰₁-CA does not prove ACA₀.
- **Proposed fix:** Σ⁰₁ 内包公理は RCA₀ では証明できないが、ACA₀ よりずっと弱い（ACA₀ を含意しない）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Wrong reference for finite sequence coding
- **Category:** Improper link
- **Location:** pt:wkl-atr-axioms / definition, first sentence
- **Detail:** The definition cites \ref{pt:rca0-basic.3} for 'finite sequences are coded by numbers'. Item 3 of pt:rca0-basic does mention coding of finite sequences, so this is acceptable; however the citation is to a proposition proved later in the page, which is fine. Not an error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
