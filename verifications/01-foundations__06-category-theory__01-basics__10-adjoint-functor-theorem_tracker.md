# Verification tracker: `01-foundations/06-category-theory/01-basics/10-adjoint-functor-theorem.html`

<!-- source: 01-foundations/06-category-theory/01-basics/10-adjoint-functor-theorem.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Remark claims injectivity of X→UF(X) follows from maps into groups 'passing through the unit'
- **Category:** Supplement/remark error
- **Location:** remark after cat:free-group-via-aft
- **Detail:** The remark says injectivity of the generator map X→UF(X) follows because for x≠y a group H and a map X→UH separating them 'passes through the unit' (単位を経由する). This phrasing is confused: the argument should be that the map X→UH factors as U(φ)∘η for the induced homomorphism φ: F(X)→H, and since U(φ)(η(x))≠U(φ)(η(y)) we get η(x)≠η(y). As written ('単位を経由する' = passes through the unit/identity) the justification is not the correct one and is misleading.
- **Proposed fix:** Replace with: 'たとえば生成元の写像 η: X→UF(X) が単射であることは次のように分かる。x≠y に対し、二元 x,y を異なる元に移す群 H と写像 h: X→UH をとる（例えば H を位数 2 の群や自由群にとる）。普遍性により h = U(φ)∘η となる準同型 φ: F(X)→H が一意に存在する。h(x)≠h(y) より U(φ)(η(x))≠U(φ)(η(y))、したがって η(x)≠η(y)。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that free fields do not exist 'for the same reason as example 4' is imprecise
- **Category:** Unsupported fact
- **Location:** cat:free-group-via-aft / hypcheck
- **Detail:** The hypcheck says '体では成り立たず、実際、自由な体は存在しない（\ref{cat:universal-arrow} の例 4 と同じ理由で、標数が定まらない）'. The forgetful functor Field→Set does have a left adjoint in the sense that free fields (free field on a set, as a field with a map from the set) do exist; what fails is that there is no left adjoint to the forgetful functor to Set in the strict sense because there is no initial field (fields of different characteristics), i.e. the category of fields has no initial object. Saying '自由な体は存在しない' is at best ambiguous and the reason given (標数が定まらない) actually shows only that Field has no initial object / the forgetful functor has no left adjoint, not that free fields fail to exist.
- **Proposed fix:** Replace with: '体の圏では、忘却関手 Field→Set は左随伴をもたない。実際、体の圏は始対象をもたない（標数 0 の体と標数 p の体の間に射がない）ので、空集合上の自由対象が存在しない。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Counterexample 2 attribution to Gelfand–Hales and Solovay is vague and the statement about 'forgetful functor from complete Boolean algebras' needs care
- **Category:** Supplement/remark error
- **Location:** cat:aft-counterexample / item 2
- **Detail:** Item 2 states as a 'fact' that the forgetful functor from the category of complete Boolean algebras to Set is continuous with complete domain but has no left adjoint, citing Gelfand–Hales and 'Solovay's argument' in Mac Lane V §6. The standard counterexample (Mac Lane V.6) is that the forgetful functor from complete Boolean algebras (or from complete atomic Boolean algebras / from compact Hausdorff spaces) to Set has no left adjoint because there is no free complete Boolean algebra on infinitely many generators (Gaifman–Hales). The statement is essentially correct but the phrase '可算集合が生成する完備ブール代数がいくらでも大きくなる' is imprecise: the point is that there is no free complete Boolean algebra on countably many generators, since the free complete Boolean algebra on ℵ_{0} generators would have to be a proper class / arbitrarily large. As stated it is acceptable but the justification is loose.
- **Proposed fix:** Clarify: '完備ブール代数の圏から Set への忘却関手は連続で定義域は完備だが左随伴をもたない。理由は可算個の生成元をもつ自由完備ブール代数が存在しないこと（ゲイフマン–ヘイルズ）で、これは Mac Lane 第 V 章 §6 でソロヴェイの議論として言及されている。'
- **Reported:** 2026-10-28 (8ccef3d)
