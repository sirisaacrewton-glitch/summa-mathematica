# Verification tracker: `01-foundations/04-set-theory/03-well-founded-sets/03-well-founded-relations.html`

<!-- source: 01-foundations/04-set-theory/03-well-founded-sets/03-well-founded-relations.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, lemma 3.3, proposition 3.4, lemma 3.5, lemma 3.6, transitive closure lemma, theorem 3.9, corollary) is logically sound and its citations match the label table. The genuine problems are confined to supplements: an imprecise justification for why $>$ on $\omega$ has no cycles, a misleading remark about the class-intersection characterization of $\operatorname{trcl}$, and an overstated claim about Zermelo set theory's inability to produce transitive supersets. No issues in the previously reported list.

## Issues

### ISSUE-0001 [Open] Incorrect claim that > on ω has no cycles because it is transitive and irreflexive
- **Category:** Supplement/remark error
- **Location:** supplement after set:wf-relation-basic (「(4) の逆は成り立たない」)
- **Detail:** The supplement says 「$\omega$ 上の $>$ には輪がない（$>$ は推移的かつ非反射的だから）」. Transitivity plus irreflexivity does not by itself rule out cycles of length $\ge 2$: a relation can be transitive and irreflexive yet contain $xRy$ and $yRx$ (then transitivity gives $xRx$, contradicting irreflexivity, so actually transitivity+irreflexivity does rule out 2-cycles — but the stated reason is still the wrong justification for the general 'no cycle' claim, and more importantly the parenthetical is a non-sequitur as written). The correct reason $>$ on $\omega$ has no cycles is that $>$ is a strict order (asymmetric), i.e. $m>n$ implies not $n>m$; a cycle would force $n>n$. The justification given is imprecise/incorrect as a derivation.
- **Proposed fix:** Replace with: 「$\omega$ 上の $>$ には輪がない（$>$ は非対称、すなわち $m>n$ ならば $n>m$ でないから。輪があれば推移性より $n>n$ となって矛盾する）」.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that trcl(A) is the intersection over all transitive supersets needs power set — but the class-intersection is fine as a class
- **Category:** Supplement/remark error
- **Location:** supplement after set:transitive-closure-basic (「推移閉包の共通部分としての特徴づけ」)
- **Detail:** The supplement says one 'wants to say' $\operatorname{trcl}(A)$ is the intersection of all transitive supersets, but 'that collection is a proper class so this is not a set definition', and that writing it as an intersection over $\mathcal{P}(\operatorname{trcl}(A))$ requires the power set axiom. This is misleading: the intersection $\bigcap\{T\mid A\subseteq T,\ T\text{ transitive}\}$ is perfectly well-defined as a class (via the formula $x\in\bigcap\iff\forall T\,(A\subseteq T\land T\text{ transitive}\to x\in T)$), and (1)–(3) already prove $\operatorname{trcl}(A)$ equals this class-intersection without any power set. The statement that 'this as-is is not a set definition' overstates the difficulty; the real point is only that to present it as a set you need a known member, which (1)–(3) supply.
- **Proposed fix:** Rephrase: 「(1)〜(3) により $\operatorname{trcl}(A)$ は $A$ を含む推移的集合すべての共通部分（クラスとして定義される）に一致する。集合として書き下すには一つの推移的上界（例えば $\operatorname{trcl}(A)$ 自身）があればよく、$\operatorname{trcl}(A)=\bigcap\{T\in\mathcal{P}(\operatorname{trcl}(A))\mid A\subseteq T,\ T\text{ は推移的}\}$ と書ける」.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Claim that Z (Zermelo) cannot prove every set is contained in a transitive set
- **Category:** Supplement/remark error
- **Location:** supplement after set:transitive-closure (「公理を減らすと」)
- **Detail:** The supplement asserts that in Zermelo set theory Z (without Replacement) 'it cannot be proved that every set is contained in a transitive set', citing Mathias. This is stated too strongly/imprecisely: in Z one can prove every set is contained in a transitive set (e.g. $A\subseteq V_{\omega+n}$ for suitable $n$, using power set and infinity), and $\operatorname{trcl}(A)$ exists in Z for every set (the finite iterations $\bigcup^{n}A$ are available by Replacement-free recursion on the finite ordinals, and their union by Union/Infinity). What fails in Z is not the existence of a transitive superset but statements requiring $\omega$-recursion with unbounded Replacement in more general settings. The claim as written is false for Z.
- **Proposed fix:** Correct to: 「置換公理を除いたツェルメロの体系 Z でも、各集合 $A$ に対し $\operatorname{trcl}(A)$（有限回の和集合の和）は存在し、$A$ を含む推移的集合は存在する。置換公理が本質的に効くのは、より一般の（クラス関数による）$\omega$ 回の反復をひとまとめにする場合である」.
- **Reported:** 2026-10-28 (8ccef3d)
