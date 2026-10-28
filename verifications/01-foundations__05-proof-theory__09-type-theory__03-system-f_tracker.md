# Verification tracker: `01-foundations/05-proof-theory/09-type-theory/03-system-f.html`

<!-- source: 01-foundations/05-proof-theory/09-type-theory/03-system-f.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 6 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Strong normalization of System F is provable in second-order arithmetic
- **Category:** Supplement/remark error
- **Location:** remark (after logic:f-strong-normalization), item 1
- **Detail:** The remark claims that strong normalization of System F cannot be proved in second-order arithmetic, on the grounds that consistency of second-order arithmetic would follow. This is false: Girard's original proof of strong normalization for System F is formalizable in second-order arithmetic (indeed in $\mathsf{PA}_{2}$/full second-order arithmetic), and strong normalization of System F does not imply consistency of $\mathsf{Z}_{2}$. The known independence result concerns much weaker systems (e.g. $\mathsf{PA}$ or $\mathsf{ATR}_{0}$-type systems), not full second-order arithmetic. As stated the claim is a false mathematical assertion.
- **Proposed fix:** Replace with: 'System F の強正規化は二階算術（全内包公理をもつ $\mathsf{Z}_{2}$）で証明できる（ジラールの証明はそこで形式化できる）。一方、$\mathsf{PA}$ のような一階の算術では証明できず、$\mathsf{PA}$ の無矛盾性が従うことが知られている。' (i.e. strong normalization of System F is provable in full second-order arithmetic, but not in first-order $\mathsf{PA}$, since it implies the consistency of $\mathsf{PA}$.)
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Girard's representation theorem: characterization by provable totality in $\mathsf{Z}_{2}$
- **Category:** Supplement/remark error
- **Location:** remark (after logic:f-representable)
- **Detail:** The remark states that the functions representable in System F are exactly the recursive functions whose totality is provable in full second-order arithmetic $\mathsf{Z}_{2}$ (with full comprehension). This is not the standard theorem. The known result (Girard) is that the numeric functions representable in System F are exactly those provably total in second-order arithmetic (in the sense of $\mathsf{PA}_{2}$/the system corresponding to System F), and more precisely the provably total functions of $\mathsf{Z}_{2}$ coincide with those of $\mathsf{PA}$ for the $\Pi^{0}_{2}$ fragment; the characterization 'exactly the functions whose totality is provable in $\mathsf{Z}_{2}$' is at best imprecise and, as stated with full comprehension, overstates/understates the correspondence. The identification of System F with 'second-order arithmetic' tout court is also imprecise (System F corresponds to second-order propositional logic / $\mathsf{PA}_{2}$ in the Curry–Howard sense, not to full $\mathsf{Z}_{2}$ with full comprehension).
- **Proposed fix:** Replace with: 'System F で表現可能な関数は、二階算術（$\mathsf{PA}_{2}$、すなわち二階の命題論理に相当する体系）で全域性が証明できる再帰関数と一致することが知られている（ジラールの表現定理）。' and avoid claiming exact correspondence with full $\mathsf{Z}_{2}$.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Curry-style typeability of System F is undecidable — attribution and scope
- **Category:** Supplement/remark error
- **Location:** supplement, '前提の検討', first bullet
- **Detail:** The bullet states that in Curry style, since terms carry no type information, typeability is undecidable (Wells 1994). Wells's result is about the *rank-2 fragment* / the *polymorphic lambda calculus* in Curry style: typeability for System F (rank ≥ 2, Curry style) is undecidable, and Wells 1994 indeed proves undecidability of type checking/inference for the second-order (rank-2) polymorphic lambda calculus. The statement as written is essentially correct in content, but the phrase '型付け可能性の判定は決定不能' without specifying 'rank-2 / second-order' could be read as claiming undecidability for the whole System F, which is also true (Wells). This is borderline; the main issue is that the attribution 'Wells 1994' concerns the rank-2 fragment specifically, and the claim that the strong normalization proof is unaffected is correct. I flag only the imprecision: the result is for the second-order polymorphic lambda calculus (rank 2 and above), not merely 'because terms carry no type information'.
- **Proposed fix:** Clarify: 'カリー流の二階多相ラムダ計算（rank 2 以上）では型付け可能性の判定は決定不能であることが知られている（ウェルズ 1994）。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Russell–Prawitz definitions: existential encoding
- **Category:** Supplement/remark error
- **Location:** supplement, '関連する結果', first bullet
- **Detail:** The bullet gives the Russell–Prawitz (impredicative) encodings: $A\wedge B$, $A\vee B$, $\bot$, $\exists\alpha.A$ as $\forall\alpha.(A\to B\to\alpha)\to\alpha$, $\forall\alpha.(A\to\alpha)\to(B\to\alpha)\to\alpha$, $\forall\alpha.\alpha$, $\forall\beta.(\forall\alpha.(A\to\beta))\to\beta$. The existential encoding is wrong: the standard second-order encoding of $\exists\alpha.A$ is $\forall\beta.(\forall\alpha.(A\to\beta))\to\beta$, which is what is written, but the inner quantifier should be over the *witness type* $\alpha$ and the outer over the result type $\beta$; the written formula $\forall\beta.(\forall\alpha.(A\to\beta))\to\beta$ is actually correct as the standard encoding. However, the conjunction encoding $\forall\alpha.(A\to B\to\alpha)\to\alpha$ and disjunction $\forall\alpha.(A\to\alpha)\to(B\to\alpha)\to\alpha$ are correct. The issue: the existential encoding as written quantifies $\alpha$ inside and $\beta$ outside, which is the standard form; but the text says '$\exists\alpha.A$ は ... $\forall\beta.(\forall\alpha.(A\to\beta))\to\beta$ で定義できる' — this is correct. No error here on re-check; the encodings match the data-type encodings in logic:f-data-types. I withdraw this as an issue.
- **Proposed fix:** No change needed; the encodings are the standard Russell–Prawitz ones and match logic:f-data-types.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Parametricity: closed normal forms of type $\forall\alpha.\alpha\to\alpha$
- **Category:** Supplement/remark error
- **Location:** supplement, '高い視点から：多相性と自然性'
- **Detail:** The text says that the fact that the only closed normal form of type $\forall\alpha.\alpha\to\alpha$ is essentially the identity is 'analogous' to the fact that the only natural transformation from the identity functor to itself is the identity, and that this 'can be shown from Reynolds's parametricity in Church-style System F'. This is essentially correct (parametricity gives that any closed term of that type is extensionally the identity), but the statement '閉じた正規形の項が本質的に恒等関数だけ' is a syntactic fact provable directly by normalization, and the appeal to parametricity is a stronger route. This is a side comment and is not false; I do not report it.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] System F corresponds to second-order arithmetic in the remark
- **Category:** Unsupported fact
- **Location:** remark (after logic:f-representable), last sentence
- **Detail:** The sentence '体系 T は $\mathsf{PA}$ に、System F は二階算術に対応する' is imprecise: System F corresponds (via Curry–Howard) to second-order *propositional* logic, and its provably total functions correspond to those of $\mathsf{PA}_{2}$; identifying it with 'second-order arithmetic' ($\mathsf{Z}_{2}$ with full comprehension) is an overstatement, especially combined with the previous claim about provable totality in $\mathsf{Z}_{2}$.
- **Proposed fix:** Replace with: '体系 T は一階の算術 $\mathsf{PA}$ に、System F は二階の命題論理（および $\mathsf{PA}_{2}$）に対応する。'
- **Reported:** 2026-10-28 (10fede1)
