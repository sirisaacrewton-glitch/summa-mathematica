# Verification tracker: `01-foundations/04-set-theory/02-infinitary-combinatorics/13-diamond-plus.html`

<!-- source: 01-foundations/04-set-theory/02-infinitary-combinatorics/13-diamond-plus.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, lemmas, the Kurepa family construction, the ◇⁻ = ◇ equivalence, and the corollaries) is logically sound: the ◇⁺-to-Kurepa-family argument correctly uses both halves of ◇⁺, the trace-counting in Step 2 is valid, and the ◇⁻-to-◇ diagonal argument is correct. The problems are concentrated in the supplements: the refutation of ◇! contains an incorrect containment (the two guessing sets are disjoint, not bounded), the consistency/attribution remarks about V=L and Kunen's chapter, the claim that ¬KH requires an inaccessible (overstated), and the general-κ formulation of ◇_κ (wrong bound on candidate size and a wrong cross-reference). These should be corrected; the proofs themselves need no change.

## Issues

### ISSUE-0001 [Open] ◇! refutation: intersection of the two club sets is not shown to be contained in δ+1
- **Category:** Supplement/remark error
- **Location:** supplement (◇⁺ section, first paragraph)
- **Detail:** The argument claims $\{\alpha\mid A\cap\alpha=A_{\alpha}\}\cap\{\alpha\mid B\cap\alpha=A_{\alpha}\}\subseteq\delta+1$ where $\delta=\min((A\setminus B)\cup(B\setminus A))$. This is false: for $\alpha>\delta$ the two traces $A\cap\alpha$ and $B\cap\alpha$ are indeed different, but that only shows the two sets are disjoint, not that they are bounded. The correct conclusion is that the intersection is empty, and since $C_{A}\cap C_{B}$ is club (hence nonempty) and is contained in the intersection, we get a contradiction. As written, the containment in $\delta+1$ is unjustified (and would in fact imply the intersection is bounded, which is a different, unproved claim).
- **Proposed fix:** Replace the sentence by: "実際、$A\ne B$ とし $\delta=\min((A\setminus B)\cup(B\setminus A))$ とおくと、$\alpha>\delta$ では $A\cap\alpha\ne B\cap\alpha$ なので $\{\alpha\mid A\cap\alpha=A_{\alpha}\}\cap\{\alpha\mid B\cap\alpha=A_{\alpha}\}=\varnothing$ である。一方、両者がそれぞれ閉非有界集合 $C_{A},C_{B}$ を含むなら $C_{A}\cap C_{B}$ は閉非有界（\ref{set:club-filter-complete}）で空でなく、$C_{A}\cap C_{B}\subseteq\varnothing$ に矛盾する。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that ¬KH requires an inaccessible is stated too strongly
- **Category:** Supplement/remark error
- **Location:** supplement (◇⁺ section, "無矛盾性", last sentence)
- **Detail:** The text says "$\lnot\mathrm{KH}$ の無矛盾性には到達不能基数が必要である". This is not a theorem of ZFC in the form stated: what is known is that the consistency of $\mathrm{GCH}+\lnot\mathrm{KH}$ (equivalently, the failure of KH together with GCH) requires an inaccessible, via Lévy collapse; but $\lnot\mathrm{KH}$ alone is consistent with ZFC without any large cardinal assumption (e.g. KH fails in $L$ under some hypotheses, and more simply $\lnot\mathrm{KH}$ follows from $2^{\aleph_{0}}\ge\aleph_{2}$ type arguments in some models). The blanket statement "requires an inaccessible" is an overstatement.
- **Proposed fix:** Replace by: "$\mathrm{GCH}+\lnot\mathrm{KH}$ の無矛盾性（したがって $\mathrm{GCH}$ のもとでの $\lnot\mathrm{KH}$）には到達不能基数の無矛盾性が必要であるとされる（レヴィ崩壊による）。$\lnot\mathrm{KH}$ 単独ではこの限りでない。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] General regular κ: the equivalence with ◇_κ is misstated (candidate size and stationarity)
- **Category:** Supplement/remark error
- **Location:** supplement (last paragraph, "一般の正則基数")
- **Detail:** The supplement claims that for regular $\kappa>\omega$, $\Diamond_{\kappa}$ is equivalent to the principle with $\mathcal{A}_{\alpha}\subseteq\mathcal{P}(\alpha)$, $|\mathcal{A}_{\alpha}|\le|\alpha|$, hitting stationarily many $\alpha<\kappa$. This is not the standard formulation: the usual $\Diamond_{\kappa}$ (Jensen) requires $\mathcal{A}_{\alpha}\subseteq\mathcal{P}(\alpha)$ with $|\mathcal{A}_{\alpha}|\le\kappa$ (or $<\kappa$ depending on convention) and the guessing set to be stationary in $\kappa$; the bound $|\alpha|$ is too small in general (for $\alpha<\kappa$ with $\alpha$ singular, $|\alpha|<\kappa$ may be much smaller than $\kappa$, and the equivalence with $\Diamond_{\kappa}$ fails with this bound). Also the parenthetical reference "\ref{set:diamond-ch} の補足" points to a lemma about ◇ implying CH, not to a definition of $\Diamond_{\kappa}$.
- **Proposed fix:** Correct to: "正則基数 $\kappa>\omega$ について、$\Diamond_{\kappa}$ は「$\mathcal{A}_{\alpha}\subseteq\mathcal{P}(\alpha)$, $\lvert\mathcal{A}_{\alpha}\rvert\le\kappa$ で、任意の $A\subseteq\kappa$ について $\{\alpha<\kappa\mid A\cap\alpha\in\mathcal{A}_{\alpha}\}$ が $\kappa$ で定常」という主張と同値である（Kunen 第 II 章演習 53 の一般化）。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] ◇⁺ does not imply CH via the stated argument without the second half; hypcheck comment is fine but the supplement's claim that ◇⁺ is 'weaker than the impossible ◇!' needs care
- **Category:** Supplement/remark error
- **Location:** supplement (◇⁺ section, first paragraph, last sentence)
- **Detail:** The sentence "◇⁺ はこの不可能な原理を、各段階の予想を可算個に増やすことで無矛盾なものに弱めたものである" suggests ◇⁺ is obtained from ◇! merely by allowing countably many guesses. But ◇⁺ also weakens the hitting requirement from "contains a club" to "is a club" (i.e. the guessing set itself is club, not merely contains one), and adds the $C\cap\alpha$ condition. The comparison is imprecise: ◇! with countably many guesses per stage would still be refuted by a similar diagonal argument (two sets differing at $\delta$ cannot both be guessed cofinally often at club many stages with the same countable family only if the family is a singleton; with countably many guesses the refutation no longer applies, so the statement is essentially correct but the phrase 'weakens by increasing guesses' omits the change from 'contains a club' to 'is a club').
- **Proposed fix:** Clarify: "◇⁺ は、予想を可算個に増やし、かつ的中を『閉非有界集合を含む』から『それ自身が閉非有界集合である』に強め、さらに $C\cap\alpha$ の予想を加えた原理であり、◇! の単純な弱化ではない。"
- **Reported:** 2026-10-28 (8ccef3d)
