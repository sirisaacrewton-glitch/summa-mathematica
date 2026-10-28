# Verification tracker: `01-foundations/05-proof-theory/09-type-theory/05-lambek.html`

<!-- source: 01-foundations/05-proof-theory/09-type-theory/05-lambek.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is a careful development of the syntactic category, generic model, completeness, universality, and Lambek's theorem. The proofs are essentially correct. The main problems are in the supplement: the claim that dropping η yields weak products/exponentials is an overstatement, and the attribution/statement of Joyal's lemma about classical logic collapsing to a preorder is false in the stated generality. The Friedman fact is essentially correct but should make the full type hierarchy and the infinite base type explicit. No issues in the previously reported list (none).

## Issues

### ISSUE-0001 [Open] Dropping η does not yield weak products/exponentials
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement claims that the syntactic category of a theory without η has 'existence but not uniqueness' of products and exponentials, i.e. weak products/weak exponentials. This is false. In the proof of \ref{logic:cl-ccc}, the uniqueness of the pairing and of the transpose is established using the η equations (product η in Step 2, function η in Step 4). Without η, the syntactic category need not even have products or exponentials in the ordinary sense; it only has a weaker structure (a 'weakly cartesian closed' / non-unique structure), and the mere existence of the universal maps is not guaranteed either. The claim overstates what is preserved.
- **Proposed fix:** η 等式を外した理論の構文圏では、積や冪の普遍性（一意性）が一般には成り立ち、通常の意味での積・冪をもたないことがある（弱い意味の積・冪しかもたない）。η 等式は転置や組の一意性を導くために本質的である。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Joyal's lemma mischaracterized
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement says that adding classical logic (double-negation elimination) and interpreting it in a cartesian closed category with \neg A := (A\to 0) and an initial object 0 makes the category collapse to a preorder (Boolean algebra), attributing this to 'Joyal's lemma'. Joyal's lemma (in the topos-theoretic literature) states that if a topos satisfies the law of excluded middle / is Boolean in a suitable sense then it is a Boolean topos; more precisely, a topos in which every subobject is complemented (or in which the subobject classifier is Boolean) is a Boolean topos, and the internal logic is classical. It does not say that any cartesian closed category with an initial object and double-negation elimination collapses to a preorder. The statement as written is both misattributed and false in the stated generality (e.g. Boolean topoi are cartesian closed with initial objects and satisfy classical logic without being preorders).
- **Proposed fix:** 古典論理をデカルト閉圏で素朴に解釈しようとすると、始対象 0 と \neg A := (A\to 0) の下で二重否定除去を課すことは、一般には圏を前順序に潰すことを意味しない（ブール束やブールトポスは反例）。古典論理の圏論的意味論には、線形論理や継続を用いた別の定式化が必要である（詳細は範囲外）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Friedman's completeness theorem statement
- **Category:** Unsupported fact
- **Location:** logic:friedman-completeness
- **Detail:** The fact states that for the pure simply typed lambda calculus with a single base type and only →, βη-equality is complete for the single interpretation in Set with the base type interpreted as an infinite set. Friedman's theorem (1975) is usually stated for the full type hierarchy over an infinite set, and it requires the base type to be infinite; the statement here is essentially correct but the phrase '集合論的な関数の全体の階層' should make explicit that all finite types over the infinite set are interpreted (the full set-theoretic hierarchy), and that the result concerns equations between terms of the pure calculus. As written it is acceptable, but the attribution and hypotheses should be made precise: the base type must be infinite, and the interpretation is the full type hierarchy (all higher types as full function spaces).
- **Proposed fix:** 基本型を無限集合（例えば \mathbb{N}）と解釈し、高階型を集合論的な関数空間の全体として解釈する完全な型階層（full type hierarchy）を考える。この単一の解釈について、→ だけの純粋な単純型付きラムダ計算の βη 等式は完全である。H. Friedman, Equality between functionals (Logic Colloquium, Lecture Notes in Mathematics 453, Springer, 1975) による。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Internal language intuition: product type vs base type
- **Category:** Supplement/remark error
- **Location:** intuition (内部言語)
- **Detail:** The intuition says that the type \ulcorner a\urcorner \times \ulcorner b\urcorner and the base type \ulcorner a\times b\urcorner are different types but have the same interpretation a\times b. This is correct, but the surrounding claim that 'C の中の推論を、元を使った集合のような書き方で行える' is imprecise: the internal language does not give actual elements, only terms and provable equalities. This is a minor imprecision, not a mathematical error; I do not report it as an error.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Step 3 of cl-category: substitution lemma application
- **Category:** Logical gap
- **Location:** logic:cl-category / Step 3
- **Detail:** In Step 3 the proof writes P[N/z][M/y] = P[M/y][N[M/y]/z] = P[N[M/y]/z], invoking the substitution lemma with z ≠ y and z ∉ FV(M). The equality P[N/z][M/y] = P[M/y][N[M/y]/z] requires that y ∉ FV(P) (so that substituting M for y does not capture z) and that z ∉ FV(M) (so that N[M/y] is well-defined after substituting M for y). The text says 'P の自由変数は高々 z なので y ∉ FV(P)' which is fine, but it should also note z ∉ FV(M) is guaranteed because M has type B in context x:A and z:C is a fresh variable not occurring in M. This is a minor omission, not a genuine gap; the argument is correct. I do not report it.
- **Reported:** 2026-10-28 (10fede1)
