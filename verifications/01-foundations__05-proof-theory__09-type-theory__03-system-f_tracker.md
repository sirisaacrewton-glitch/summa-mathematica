# Verification tracker: `01-foundations/05-proof-theory/09-type-theory/03-system-f.html`

<!-- source: 01-foundations/05-proof-theory/09-type-theory/03-system-f.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, the reducibility-candidate construction, the strong normalization proof, and the data-type/representability results) is essentially correct. The genuine problems are concentrated in the remarks and supplement: the claim that strong normalization of System F is unprovable in second-order arithmetic is false (it is provable there; the independence is from first-order PA/PRA), the characterization of representable functions via full $\mathsf{Z}_{2}$ is overstated (the correct match is predicative second-order arithmetic), the existential encoding omits the side condition $\beta\notin\mathrm{FTV}(A)$, and the parametricity remark misattributes a syntactic normalization fact to Reynolds' parametricity. These should be corrected; the proofs themselves need no change.

## Issues

### ISSUE-0001 [Open] Strong normalization of System F is provable in second-order arithmetic
- **Category:** Supplement/remark error
- **Location:** remark (after logic:f-strong-normalization), item 1
- **Detail:** The remark claims that strong normalization of System F cannot be proved in second-order arithmetic, because consistency of second-order arithmetic would follow. This is false. Girard's strong normalization proof is formalizable in second-order arithmetic (indeed in $\mathsf{PA}_{2}$/$\mathsf{Z}_{2}$); the standard result is that it cannot be carried out in much weaker systems (e.g. primitive recursive arithmetic or first-order Peano arithmetic). The stated claim is a misstatement of the known independence result.
- **Proposed fix:** Replace with: "この非可述的な定義は二階算術では正当だが、より弱い体系（原始再帰的算術や一階のペアノ算術など）では使えない。実際、System F の強正規化は一階ペアノ算術では証明できないことが知られている。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Representable functions are not exactly those provably total in full second-order arithmetic
- **Category:** Supplement/remark error
- **Location:** remark (after logic:f-representable)
- **Detail:** The remark states that the functions representable in System F are exactly the recursive functions whose totality is provable in full second-order arithmetic $\mathsf{Z}_{2}$ (with full comprehension). This is wrong: the functions provably total in $\mathsf{Z}_{2}$ are far more extensive (e.g. by the standard result, provably total functions of $\mathsf{Z}_{2}$ include fast-growing functions beyond those of System F). The correct characterization is that System F represents exactly the functions provably total in second-order arithmetic with comprehension restricted to formulas without second-order quantifiers (predicative comprehension), or equivalently the functions provably total in $\mathsf{PA}$ extended appropriately; the remark's identification with full $\mathsf{Z}_{2}$ overstates the result.
- **Proposed fix:** Replace with: "System F で表現可能な関数は、二階算術のうち二階の量化を含まない内包公理のみをもつ体系（可述的二階算術）で全域性が証明できる再帰関数とちょうど一致することが知られている（ジラールの表現定理）。体系 T は $\PA$ に、System F はこの可述的二階算術に対応する。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Existential encoding in the supplement is incorrect
- **Category:** Supplement/remark error
- **Location:** supplement, 関連する結果, 二階命題論理
- **Detail:** The supplement gives the encoding of $\exists\alpha.A$ as $\forall\beta.(\forall\alpha.(A\to\beta))\to\beta$. This is not the standard Russell–Prawitz encoding and is not equivalent to $\exists\alpha.A$: the standard encoding is $\forall\beta.(\forall\alpha.(A\to\beta))\to\beta$ only when the outer quantifier is over the *proposition* variable and the inner over the type variable, but as written the inner $\forall\alpha$ binds the type variable while $\beta$ is a proposition variable, and the formula as stated does not capture existential quantification over types correctly (the correct form is $\forall\beta.(\forall\alpha.(A\to\beta))\to\beta$ with $\beta$ not free in $A$, which is what is intended, but the text's parenthetical attribution and the surrounding list conflate propositional and type quantifiers). More importantly, the disjunction encoding $\forall\alpha.(A\to\alpha)\to(B\to\alpha)\to\alpha$ and the existential encoding are stated as if all four connectives are on the same footing, but the existential requires the side condition $\beta\notin\mathrm{FTV}(A)$, which is omitted.
- **Proposed fix:** Add the side condition: "$\exists\alpha.A$ は $\forall\beta.(\forall\alpha.(A\to\beta))\to\beta$（$\beta\notin\mathrm{FTV}(A)$）で定義できる。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Parametricity attribution to Church-style System F is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement, 高い視点から：多相性と自然性
- **Detail:** The supplement says that the fact that the only closed normal form of type $\forall\alpha.\alpha\to\alpha$ is the identity 'can be shown from Reynolds' parametricity in Church-style System F'. Parametricity (the abstraction theorem) is a semantic result about the *Curry-style* (or generally typed) polymorphic lambda calculus; the statement that the only closed normal inhabitant of $\forall\alpha.\alpha\to\alpha$ is the identity is a purely syntactic fact provable by normalization/induction, not a consequence of parametricity. Attributing it to parametricity in 'Church-style' System F is misleading.
- **Proposed fix:** Replace with: "$\forall\alpha.\alpha\to\alpha$ の閉じた正規形の項が本質的に恒等関数だけであることは、正規化を用いた構文論的な議論で示せる。これはレイノルズのパラメトリシティ（自由定理）が述べる一様性の最も簡単な現れである。"
- **Reported:** 2026-10-28 (8ccef3d)
