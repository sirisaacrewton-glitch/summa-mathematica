# Verification tracker: `01-foundations/03-computation/05-algorithmic-randomness/01-kolmogorov.html`

<!-- source: 01-foundations/03-computation/05-algorithmic-randomness/01-kolmogorov.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Prefix-free complexity does not improve the coefficient 2 to a log term
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The supplement claims that in prefix complexity the coefficient 2 in $K(xy)\le 2K(x)+K(y)+c$ can be improved to a $\log$ term. This is wrong. The coefficient 2 in item 3 comes from the self-delimiting encoding $\overline{d(x)}$ of the first description, and prefix complexity does not remove this: the standard subadditivity bound for prefix complexity is $K(xy)\le K(x)+K(y)+O(\log\min(K(x),K(y)))$, which still has coefficient 1 on each of $K(x)$ and $K(y)$, not a replacement of $2K(x)$ by $K(x)+O(\log)$. The statement as written is an overstatement not supported by the literature.
- **Proposed fix:** Replace with: 「接頭辞のない（自己区切りの）記述方式を使う接頭辞複雑性では、連接について $K(xy)\le K(x)+K(y)+O(\log\min(K(x),K(y)))$ という形の上界が成り立ち、係数 $2$ は現れない（各項の係数は $1$ で、代わりに対数的な誤差項が加わる）。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Chaitin incompleteness: 'cannot prove any statement of the form K(x)>L_T' is too strong
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果, first bullet
- **Detail:** The supplement states that a consistent r.e. theory $T$ containing arithmetic has a constant $L_{T}$ such that $T$ proves no statement of the form "$K(x)>L_{T}$". As stated this is false: for any fixed $x$ with $K(x)>L_{T}$, the true sentence "$K(x)>L_{T}$" is a $\Sigma_{1}$ (indeed decidable-in-principle) statement, and a sufficiently strong theory can prove it for that particular concrete $x$ (e.g. by exhibiting a long incompressible string). Chaitin's theorem says there is $L_{T}$ such that $T$ cannot prove "$K(x)>L_{T}$" for any $x$ — but the constant depends on $T$ and the correct formulation restricts to statements provably of that form uniformly, i.e. $T$ proves no sentence $\forall$-style bounding all $x$, or more precisely: there is $L_{T}$ such that for no $x$ does $T$ prove $K(x)>L_{T}$ where $L_{T}$ exceeds the complexity of $T$'s axioms. The parenthetical "almost all $x$ satisfy this form" is fine, but the universal 'no statement of this form' with a single fixed $L_{T}$ independent of $x$ is the standard correct statement only when $L_{T}$ is chosen larger than the description length of $T$; the phrasing as given is imprecise/overstated.
- **Proposed fix:** Rewrite: 「無矛盾で認識可能な公理系 $T$（算術を含む）に対し、$T$ の記述長より十分大きい定数 $L_{T}$ が存在し、$T$ は『$K(x)>L_{T}$』という形の文を（どの $x$ についても）証明できない。実際にはほとんどすべての $x$ がこの形の真な文を満たす。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Schnorr–Levin: initial segments almost incompressible — needs 'all n' and prefix complexity, and the equivalence is with ML-randomness only for the correct formulation
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果, second bullet
- **Detail:** The claim that an infinite sequence is Martin-Löf random iff all its initial segments are 'almost incompressible' in the prefix-complexity sense is the Schnorr–Levin theorem, which is correct, but the precise statement requires $K(x_{1:n})\ge n - O(1)$ (i.e. $K(x_{1:n})\ge n-c$ for a fixed constant $c$ and all $n$), not merely 'almost incompressible' with an unspecified slack. As worded ('ほぼ非圧縮') it is vague but not strictly false; however combined with the attribution it risks being read as allowing a slack growing with $n$, which would be false. This is borderline; flagging as imprecision.
- **Proposed fix:** Make precise: 「無限列がマルティン＝レーフ・ランダムであることと、接頭辞複雑性 $K$ について定数 $c$ が存在し全ての $n$ で $K(x_{1:n})\ge n-c$ となることは同値である（シュノア–レヴィン）。」
- **Reported:** 2026-10-28 (10fede1)
