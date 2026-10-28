# Verification tracker: `01-foundations/05-proof-theory/05-quantified-provability-logic/04-one-predicate-letter.html`

<!-- source: 01-foundations/05-proof-theory/05-quantified-provability-logic/04-one-predicate-letter.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is a careful reconstruction of Vardanyan's theorem for one monadic predicate letter. The main proof structure (encoding lemma, truth corollary, B' relabeling, and the two completeness directions) is sound, and the cited labels match their uses. The genuine problems are confined to side remarks: the proof of \ref{pt:one-letter-B-prime} gives a wrong reason for '$B(x)$ true everywhere' (it should be vacuous truth of $\neg\theta$, not '$\theta$ false so $B$ true' as if immediate), and several supplement/hypcheck sentences overstate or misattribute the mechanism by which provability of the disjunctions tracks emptiness of the intersections $C(\cdot)$, and misdescribe the jump from decidable monadic logic to $\Pi^{0}_{2}$-completeness. These are imprecision/overstatement issues rather than errors in the theorem itself.

## Issues

### ISSUE-0001 [Open] B(x) is not true at every x
- **Category:** Supplement/remark error
- **Location:** pt:one-letter-B-prime / proof, first sentence
- **Detail:** The proof of \ref{pt:one-letter-B-prime} asserts "\ref{pt:magic-formula-properties.3} より $\theta$ はどこでも偽なので $B(x)$ はすべての $x$ で真". This is false. $B(x)\defeq\forall w\,(w\in C(x)\to\neg\theta(w))$; since $\theta$ is false everywhere, $\neg\theta(w)$ holds for all $w$, so $B(x)$ is indeed true for all $x$ — but the stated reason is wrong in a way that matters: the argument as written would also make $B'(x)$ true everywhere, contradicting the very next claim that $B'(x)\iff D(x-10)$ for $x\ge10$. The correct reason is that $\theta$ is false everywhere, hence $\neg\theta(w)$ is true for every $w$, hence $B(x)$ holds vacuously. The sentence conflates "$\theta$ false everywhere" with "$B$ true everywhere" without noting that $B$'s truth is exactly the vacuous truth of $\neg\theta$ on $C(x)$.
- **Proposed fix:** Replace with: "By \ref{pt:magic-formula-properties.3}, $\theta(w)$ is false for every $w$, so $\neg\theta(w)$ holds for every $w$; hence $B(x)\defeq\forall w\,(w\in C(x)\to\neg\theta(w))$ is true for every $x$ (vacuously, since the consequent always holds). Therefore for $x\ge10$, $B'(x)\iff B(x)\wedge D(x-10)\iff D(x-10)$."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Hypcheck claims Bew[∨B(c)] provability is governed by emptiness of ∩C(c), but this only holds under consistency
- **Category:** Supplement/remark error
- **Location:** hypcheck, bullet 魔法の論理式
- **Detail:** The hypcheck says "証明可能性 $\mathrm{Bew}[\bigvee B(c)]$ は「$\bigcap C(c)$ の中に $\theta$ の真になる点がない」ことの証明可能性になり、それが集合の共通部分の空性で決まる". As stated this is imprecise: $\bigvee_{c}B(c)$ is provably equivalent (in $\PA$) to "no $w\in\bigcap_{c}C(c)$ satisfies $\theta$" only because $\theta$ is functional (\ref{pt:magic-formula-properties.1}); and the passage from "$\bigcap C(c)=\emptyset$" to "$\PA\vdash\bigvee B(c)$" requires that $\PA$ proves the relevant arithmetic facts about the $C$'s, not merely that the intersection is empty in the standard model. The encoding lemma establishes the equivalence only for the specific $C$'s and specific $P(\vec x)$, via explicit $\PA$-proofs; the general slogan overstates it.
- **Proposed fix:** Rewrite as: "For the specific families $C(\cdot)$ and relations $P$ considered, $\PA\vdash\bigvee_{c}B(c)\leftrightarrow$ 'no $w\in\bigcap_{c}C(c)$ satisfies $\theta$' (using functionality of $\theta$, \ref{pt:magic-formula-properties.1}); and the emptiness/non-emptiness of the relevant finite intersections is provable in $\PA$ from the defining equations of the $C$'s. This is what makes $\mathrm{Bew}[\bigvee B(c)]$ track the combinatorial emptiness of $\bigcap C(c)$."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Claim that adding one box jumps undecidability to Π⁰₂-complete is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement, 関連する結果
- **Detail:** The supplement states: "様相 $\Box$ を一段加えるだけで、決定不能性の程度が $\Pi^{0}_{2}$ 完全まで跳ね上がることになる". Two problems: (i) the fragment $\{G\}$ with no nested boxes is not 'pure predicate logic without $\Box$'; the comparison is between monadic predicate logic (decidable) and the quantified provability logic fragment with one monadic letter and unnested boxes. (ii) The set of always-provable sentences is $\Pi^{0}_{2}$-complete, but the set of always-true sentences is only $\Pi^{0}_{1}$-complete in $V$; saying 'the degree of undecidability jumps to $\Pi^{0}_{2}$-complete' without specifying which set (always provable vs. always true) is imprecise, and 'just adding one level of $\Box$' misdescribes the move from pure monadic logic to QML.
- **Proposed fix:** Rewrite as: "Monadic predicate logic without $\Box$ has a decidable set of validities. In contrast, in the quantified provability logic fragment with a single monadic predicate letter and unnested $\Box$, the set of always-provable sentences is $\Pi^{0}_{2}$-complete and the set of always-true sentences is $\Pi^{0}_{1}$-complete in $V$ (\ref{pt:vardanyan-one-letter})."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Claim that F=B' is true at every point but Bew[B(0)∨B(x)] depends on PA's knowledge of θ's falsity is misleading
- **Category:** Supplement/remark error
- **Location:** supplement, 高い視点から
- **Detail:** The supplement says "$F=B'$ はどの点でも真だが、$\mathrm{Bew}[B(0)\vee B(x)]$ が証明可能かどうかは、$\PA$ が $\theta$ の偽をどこまで知っているかに依存する". This is misleading: $B(0)\vee B(x)$ is a sentence (no free variable after substituting numerals), and whether $\PA\vdash B(0)\vee B(x)$ depends on the combinatorial emptiness of $C(0)\cap C(x)$ (which $\PA$ decides), not on '$\PA$'s knowledge of $\theta$'s falsity'. Indeed $\PA$ cannot prove $\neg\exists y\,\theta(y)$ (Problem \ref{pt:prob-magic-consistency}), yet $\PA$ does prove each relevant disjunction or its negation according to the intersection. The phrase attributes the dependence to the wrong source.
- **Proposed fix:** Rewrite as: "$F=B'$ is true at every point, but whether $\PA\vdash B(0)\vee B(x)$ holds is governed by whether the finite intersection $C(0)\cap C(x)$ is empty, which $\PA$ decides from the defining equations of the $C$'s — even though $\PA$ cannot prove $\neg\exists y\,\theta(y)$."
- **Reported:** 2026-10-28 (8ccef3d)
