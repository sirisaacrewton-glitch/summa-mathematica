# Verification tracker: `01-foundations/02-model-theory/04-uncountable-categoricity/06-dimension.html`

<!-- source: 01-foundations/02-model-theory/04-uncountable-categoricity/06-dimension.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] DLO example does not illustrate failure of exchange
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement claims that exchange fails for general definable sets and offers DLO as an example, but then states that in DLO acl(A)=A and exchange holds trivially. So DLO is not an example where exchange fails; it only illustrates that x=x is not minimal and that independent tuples do not have a unique type. The sentence '交換法則は一般の定義可能集合では成り立たない。たとえば DLO では…交換法則は自明に成り立つ' is internally contradictory as an illustration of failure.
- **Proposed fix:** Rewrite: '交換法則は極小でない定義可能集合では一般に成り立たない（例：稠密順序の理論で φ(x)=x=x とすると acl(A)=A なので交換法則自体は自明に成り立つが、x=x は極小でなく、独立な組の型は一つに決まらない（a<b と a>b）。強極小性が独立な組の型の一意性に効いている）。' I.e. separate the two points: exchange can hold while minimality fails, and it is minimality/strong minimality that is needed for the type-uniqueness conclusion.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Zilber trichotomy attribution imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (似た定理)
- **Detail:** The text says Zilber's trichotomy conjecture 'is false in general (Hrushovski's construction) but holds under conditions such as Zariski geometries'. This is imprecise: Hrushovski's construction gives counterexamples to the *strongly minimal set* trichotomy for general (non-Zariski) strongly minimal sets, and the Zariski-geometry theorem (Hrushovski–Zilber) is a classification of Zariski geometries, not literally 'the trichotomy holds under Zariski conditions'. Also '前幾何（マトロイド）' conflates pregeometry with matroid; a pregeometry satisfying finite character gives a matroid, but they are not identical notions.
- **Proposed fix:** State: 'ザイルバーの三分法予想（強極小集合の前幾何が自明・ベクトル空間的・体的のいずれか）は一般の強極小集合についてはフルショフスキーの構成により否定された。ザリスキー幾何（Hrushovski–Zilber）のような幾何的・モデル理論的条件下では分類が成り立つ。' And replace '前幾何（マトロイド）' with '前幾何（有限性を満たすときマトロイドを定める）'.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Dimension equality does not give canonical identification of strongly minimal sets
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から)
- **Detail:** The claim 'これにより、次元が同じ二つの強極小集合は、基底を対応させるだけで同一視できる' is overstated. Equal dimension gives that bases have the same cardinality and that any bijection between bases extends to an elementary map (by \ref{model:independent-same-type}), but this requires the two sets to live in models of the same theory with matching parameters, and it does not produce a canonical/unique identification; the identification depends on the chosen bijection and on the ambient models. Two strongly minimal sets of the same dimension in different theories need not be 'identified' at all.
- **Proposed fix:** Replace with: '次元が同じでパラメータが対応していれば、基底の間の任意の全単射は初等的写像に延びる（\ref{model:independent-same-type}）。ただしこの同一視は基底の選び方と周囲のモデルに依存し、標準的な同一視を与えるものではない。'
- **Reported:** 2026-10-28 (10fede1)
