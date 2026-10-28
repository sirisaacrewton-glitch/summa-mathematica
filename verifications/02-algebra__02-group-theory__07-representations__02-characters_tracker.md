# Verification tracker: `02-algebra/02-group-theory/07-representations/02-characters.html`

<!-- source: 02-algebra/02-group-theory/07-representations/02-characters.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main proofs (orthogonality, basis theorem, column orthogonality) are sound. The only genuine issues are in the supplement: the positive-characteristic remark is imprecise about the hypothesis (semisimplicity/characteristic 0) and the example 'p 個の直和は指標 0' is ambiguous; and the Grothendieck-ring remark overstates what Theorem 1 literally says. The Peter-Weyl remark is acceptable.

## Issues

### ISSUE-0001 [Open] Positive-characteristic claim about characters determining representations is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (一般の体では)
- **Detail:** The supplement says: '標数 0 なら指標は表現を決めるが、正標数では χ_V = χ_W でも V ≇ W となりうる（p 個の直和は指標 0）'. The parenthetical example is misleading: 'p 個の直和は指標 0' presumably means the direct sum of p copies of the trivial representation has character 0 in characteristic p. But this only holds when the trivial representation is the *trivial* (identity) representation, whose character is the constant function 1, so p·1 = 0. As stated it is ambiguous and, more importantly, the claim 'in characteristic 0 characters determine representations' is only true for semisimple (e.g. finite group over a field of characteristic 0, or more generally when Maschke applies) — over a field of characteristic 0 this is fine for finite groups, but the sentence as written ('標数 0 なら') omits the semisimplicity/finite-group hypothesis. Also the example 'p 個の直和は指標 0' should specify it is p copies of the trivial representation.
- **Proposed fix:** Replace with: '標数 $0$ の体上では（有限群の表現は完全可約なので）指標は表現を同型を除いて決める。しかし正標数 $p\mid\lvert G\rvert$ では完全可約性が崩れ、$\chi_{V}=\chi_{W}$ でも $V\not\cong W$ となりうる。例えば標数 $p$ で自明表現の $p$ 個の直和は指標が恒等的に $0$ になる。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Grothendieck ring statement: 'theorem 1 says this is an isomorphism' is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement says the map [V] ↦ χ_V from the representation ring (Grothendieck group) to the class-function ring is a ring homomorphism, and '定理 1 は、これが C を係数にすると同型であることを述べている'. Theorem 1 (rep:characters-basis) states that irreducible characters form an orthonormal *basis* of Cl(G), i.e. they are linearly independent and span. This does imply that the map from the representation ring tensored with C to Cl(G) is an isomorphism of vector spaces, but the representation ring itself (with integer coefficients) maps to the *integer* lattice spanned by characters, not onto all of Cl(G); and calling it 'C を係数にすると同型' is a statement about the complexified representation ring, which is not literally what Theorem 1 states (Theorem 1 is about a basis of Cl(G), not about the representation ring). The claim is essentially correct but stated more strongly/imprecisely than Theorem 1 supports: Theorem 1 gives that {χ_i} is a basis, hence the complexified representation ring is isomorphic to Cl(G), but this requires the additional fact that the χ_i span the representation ring's complexification, which follows but is not literally 'Theorem 1'.
- **Proposed fix:** Replace with: '定理 1（$\chi_{1},\dots,\chi_{r}$ が $\operatorname{Cl}(G)$ の基底）から、表現環を $\mathbb{C}$ で係数拡大したものは $\operatorname{Cl}(G)$ に環として同型である。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Peter-Weyl attribution: finite-group version needs care
- **Category:** Supplement/remark error
- **Location:** supplement (フーリエ解析としての解釈)
- **Detail:** The supplement says '非可換群では、類関数については指標で展開でき、一般の関数については行列成分 ρ_i(g)_{ab} で展開できる（ピーター＝ワイルの定理の有限群版）'. For a finite group, the matrix coefficients of irreducible representations do span the space of all functions on G (this is the finite Peter-Weyl / Wedderburn theorem), so the statement is correct. However, the phrase '類関数については指標で展開でき' is fine, and '一般の関数については行列成分で展開できる' is correct. No error here; but the parenthetical 'ピーター＝ワイルの定理の有限群版' is a reasonable attribution. This is not an error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
