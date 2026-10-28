# Verification tracker: `01-foundations/05-proof-theory/04-provability-logic-extensions/06-glb-fixed-point.html`

<!-- source: 01-foundations/05-proof-theory/04-provability-logic-extensions/06-glb-fixed-point.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem, its proof, the character-agreement lemma, and the corollary are logically sound and correctly cite the listed results. The genuine problems are concentrated in the side remarks and the example: the claim that all Ignatiev normal-form formulas $D\alpha$ are false is plainly wrong (they are the analogues of $\Box^{n}\bot$ and take varying truth values); the remark on not adding boxes gives an imprecise justification for the $[1]$-rewrite of GL; and the ω-provability example conflates $\neg\mathrm{ωBew}(\Godel{\bot})$ with the ω-consistency of $\PA$.

## Issues

### ISSUE-0001 [Open] Dα are not all false
- **Category:** Supplement/remark error
- **Location:** remark イグナチェフの標準形
- **Detail:** The remark claims "$D\alpha$ はすべて偽なので、標準形から真偽が読み取れる" (all $D\alpha$ are false). This is false. In Ignatiev's/Boolos's letterless normal form for GLB, the closed formulas $D\alpha$ (indexed by ordinals $\alpha<\omega^{\omega}$) are not all false; they are the analogues of $\Box^{n}\bot$ in GL, and their truth values vary with $\alpha$ (e.g. the analogue of $\Box^{n}\bot$ is true for some $n$ and false for others). If all $D\alpha$ were false, the normal form would collapse and could not distinguish truth values, contradicting the stated purpose of reading off truth values. The correct statement is that each closed formula is equivalent to a truth-functional combination of the $D\alpha$, and the truth value of each $D\alpha$ is determined (computable) from $\alpha$, so the truth value of the whole formula can be read off.
- **Proposed fix:** Replace "$D\alpha$ はすべて偽なので、標準形から真偽が読み取れる" with: "各 $D\alpha$ の真理値は $\alpha$ から機械的に計算でき（$\mathsf{GL}$ における $\Box^{n}\bot$ の真理値が $n$ から決まるのと同様）、したがって標準形から論理式全体の真偽が読み取れる。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that GLB contains the [1]-rewrite of GL is imprecise
- **Category:** Supplement/remark error
- **Location:** remark 箱を増やさない不動点
- **Detail:** The remark asserts that $\mathsf{GLB}$ contains the system obtained by rewriting $\Box$ in $\mathsf{GL}$ as $[1]$, justifying this by "$[1]$ satisfies the distribution axiom, L\"ob's axiom, and necessitation." But $\mathsf{GLB}$'s axioms for $[1]$ alone do not by themselves give the L\"ob axiom for $[1]$ in the form $[1]([1]A\to A)\to[1]A$; the L\"ob-type principle for $[1]$ in GLB is the mixed axiom involving $\Box$ (e.g. $\Box A\to[1]A$ together with L\"ob for $\Box$). The claim that the pure $[1]$-version of GL is a sublogic needs the specific GLB axioms, and the parenthetical justification ("$[1]$ satisfies distribution, L\"ob, necessitation") is not accurate as stated: the L\"ob axiom for $[1]$ alone is not an axiom of GLB. This makes the justification for the second half ("if $A$ contains no $\Box$, $H$ can be chosen without $\Box$") rest on an imprecise premise.
- **Proposed fix:** Replace the parenthetical with an accurate justification: "$\mathsf{GLB}$ の $[1]$ に関する公理（分配則・必然化則・$\Box A\to[1]A$ および $[1]$ に対する L\"ob 型の公理）により、$\Box$ を $[1]$ に書き換えた $\mathsf{GL}$ の定理はすべて $\mathsf{GLB}$ で導出できる" — or, if the pure $[1]$-L\"ob is not derivable, restrict the claim accordingly.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] ω-consistency self-reference example conflates truth of ω-consistency with a provability statement
- **Category:** Supplement/remark error
- **Location:** example ω 証明可能性についての自己言及
- **Detail:** The example states that the fixed point of $A=\neg[1]p$ is $\neg[1]\bot$ and that the arithmetic sentence "I am not ω-provable" is $\PA$-equivalent to "$\PA$ is ω-consistent" ($\neg\mathrm{ωBew}(\Godel{\bot})$). But $\neg[1]\bot$ translates to "$\PA$ does not prove $\bot$ by ω-rule", i.e. $\neg\mathrm{ωBew}(\Godel{\bot})$, which is a statement about ω-provability of $\bot$, not literally the assertion that $\PA$ is ω-consistent. ω-consistency of $\PA$ is a different (stronger in general) statement than $\neg\mathrm{ωBew}(\Godel{\bot})$; identifying them is an overstatement. The parenthetical gloss "($\PA$ は ω 無矛盾)" attached to $\neg\mathrm{ωBew}(\Godel{\bot})$ is therefore imprecise.
- **Proposed fix:** Replace "$\PA$ は ω 無矛盾" with the precise reading: "$\PA$ が ω 規則で $\bot$ を証明しない", i.e. $\neg\mathrm{ωBew}(\Godel{\bot})$, and note that this is not in general the same as the ω-consistency of $\PA$.
- **Reported:** 2026-10-28 (8ccef3d)
