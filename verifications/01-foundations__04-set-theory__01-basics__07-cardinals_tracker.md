# Verification tracker: `01-foundations/04-set-theory/01-basics/07-cardinals.html`

<!-- source: 01-foundations/04-set-theory/01-basics/07-cardinals.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main proof (Schröder–Bernstein without choice, cardinality, cardinals, pigeonhole) is logically sound and the citations match their targets. The genuine problems are concentrated in the supplements: the claim that the surjection version of Schröder–Bernstein is unprovable in ZF is false (it is a ZF theorem), and the accompanying 'counterexample' is internally inconsistent; the H(ω_{1}) remark is imprecise about which axioms hold in ZF; the Knaster–Tarski fixed-point description is slightly imprecise; and the intuitionistic-logic remark overstates what is known. The free-group remark is correct.

## Issues

### ISSUE-0001 [Open] Incorrect claim that the surjection version is unprovable in ZF
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると) / 全射の場合
- **Detail:** The supplement claims that 'if there are surjections A→B and B→A then A≈B' is not provable in ZF alone. This is false: the dual Schröder–Bernstein theorem for surjections is a theorem of ZF (it follows from the ordinary Schröder–Bernstein theorem applied to the partitions induced by the two surjections, or directly by a Knaster–Tarski-style argument; no choice is needed). The counterexample offered is also not a counterexample: the set B = P(ω)×{0} ∪ ω_{1}×{1} is a union of two sets each of which surjects onto P(ω) (ω_{1} surjects onto P(ω) by hypothesis, and P(ω)×2 ≈ P(ω)), so B surjects onto P(ω); and P(ω) surjects onto B since P(ω) ≈ P(ω)×2 and P(ω) surjects onto ω_{1} (as ω_{1} injects into P(ω)). But then the surjection version would give P(ω) ≈ B, contradicting the very assumption that ω_{1} does not inject into P(ω). So the 'counterexample' is internally inconsistent.
- **Proposed fix:** Replace the bullet by: '*全射の場合*：「全射 $A\to B$ と全射 $B\to A$ があれば $A\approx B$」は $\ZF$ で証明できる（各全射のファイバーへの分割に通常のシュレーダー＝ベルンシュタインの定理を適用する。選択公理は不要）。選択公理が必要になるのは「全射から単射（切断）を作る」操作のほうである（\ref{set:surjection-cardinality}）。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] H(ω_{1}) does not satisfy all axioms of ZFC except Power Set
- **Category:** Supplement/remark error
- **Location:** supplement in set:finite-set
- **Detail:** The supplement asserts that H(ω_{1}) satisfies all axioms of ZFC except Power Set and that every set in it is countable. H(ω_{1}) satisfies ZFC minus Power Set only if one assumes that every set of hereditarily countable sets is countable, i.e. that ω_{1} is regular, which requires some choice; in ZF alone H(ω_{1}) need not model Replacement/Collection, and 'every set is countable' inside it is not automatic. The claim as stated (a ZFC fact cited to Kunen) is imprecise about the metatheory and about which axioms hold.
- **Proposed fix:** State it as: 'なお、$\ZFC$ から冪集合の公理を除いた理論（ただし $\omega_{1}$ の正則性を含む十分強い形）のモデルとして遺伝的に可算な集合全体 $H(\omega_{1})$ があり、その中ではすべての集合が可算である（Kunen, *Set Theory*, 第 IV 章）。したがって冪集合の公理を除く $\ZF$ からは非可算集合の存在は証明できない。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Kurepa/Knaster–Tarski attribution and fixed-point formula
- **Category:** Supplement/remark error
- **Location:** supplement (冪集合を使う証明)
- **Detail:** The map Φ(X)=A∖g[B∖f[X]] is monotone on P(A), and its least fixed point is ⋂{X⊆A | Φ(X)⊆X}; this part is correct. However the text calls it 'a special case of the Knaster–Tarski fixed point theorem', which is a misattribution: the Knaster–Tarski theorem concerns complete lattices and monotone maps and gives the least fixed point as the infimum of the pre-fixed points, which is exactly what is used, so the attribution is acceptable; but the parenthetical 'たとえば ⋂{X⊆A | Φ(X)⊆X}' is stated as an example of a fixed point rather than as the least one, which is imprecise (the intersection is the least fixed point, not an arbitrary one).
- **Proposed fix:** Write: 'その最小不動点 $X=\bigcap\{X\subseteq A\mid \Phi(X)\subseteq X\}$ をとれば…（クナスター＝タルスキの不動点定理の特別な場合）'.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Intuitionist claim about Schröder–Bernstein implying excluded middle
- **Category:** Supplement/remark error
- **Location:** supplement (論理を変えると)
- **Detail:** The claim that in intuitionistic logic the theorem 'implies excluded middle' and is therefore unprovable is stated too strongly. What is known is that the Schröder–Bernstein theorem is not provable in intuitionistic set theory (e.g. in IZF or CZF) and that certain intuitionistic formulations do imply forms of excluded middle; but the bare statement 'implies excluded middle' without specifying the theory and formulation is an overstatement.
- **Proposed fix:** Write: '直観主義論理（IZF など）では Step 2 の場合分けができず、本定理は一般には証明できない（適切な定式化のもとでは排中律のある形を含意することが知られている）。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Free groups of rank 2 and 3: embedding claim needs care
- **Category:** Supplement/remark error
- **Location:** supplement (構造を保つ写像の場合)
- **Detail:** The statement that free groups of rank 2 and 3 embed in each other as subgroups but are not isomorphic is correct (F_{2} embeds in F_{3} and F_{3} embeds in F_{2} since F_{2} contains a free subgroup of rank 3, e.g. generated by a^{2}, b^{2}, ab). No error here; but the parallel with [0,1] and (0,1) is fine. This is not an issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
