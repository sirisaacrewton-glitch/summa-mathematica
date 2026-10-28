# Verification tracker: `01-foundations/01-general-logic/01-propositional-logic/04-intuitionistic.html`

<!-- source: 01-foundations/01-general-logic/01-propositional-logic/04-intuitionistic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the definition of NJ, the soundness and completeness proofs via the Lindenbaum–Tarski algebra, and the non-derivability of excluded middle, double-negation elimination and Peirce's law are all sound, and the hypcheck items are accurate. The main problems are in the supplement: the identification of Heyting algebras with Cartesian closed preorders ignores that coproducts and an initial object are extra structure, and the Glivenko example is misdescribed. The finite model property remark is essentially correct but the decidability inference should mention effectivity. No issues in the proved theorems were found.

## Issues

### ISSUE-0001 [Open] Heyting algebra as a Cartesian closed preorder: coproducts and initial object
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement claims that a Heyting algebra is exactly a preorder viewed as a Cartesian closed category, with $\wedge$ the product, $\Rightarrow$ the exponential, $\vee$ the coproduct and $0$ the initial object. A Cartesian closed preorder (with finite products) is a Heyting algebra only in the sense of having finite meets and relative pseudo-complements; it need not have finite joins or a least element. So $\vee$ being a coproduct and $0$ being initial are extra structure, not consequences of being Cartesian closed. The statement 'ハイティング代数は、前順序をデカルト閉圏と見たものにほかならない' is therefore overstated/imprecise.
- **Proposed fix:** A Heyting algebra is the same thing as a preorder that is Cartesian closed (with finite products) and additionally has finite coproducts (a least element $0$ and binary joins $\vee$); under this identification $\wedge$ is the product, $\Rightarrow$ the exponential, $\vee$ the coproduct and $0$ the initial object. Cartesian closedness alone gives only finite meets and relative pseudo-complements.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Gödel–Gentzen translation direction and the example cited
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理 (グリヴェンコの定理)
- **Detail:** The supplement states Glivenko's theorem as: if $\vdash_{\mathsf{K}}\varphi$ then $\vdash_{\mathsf{I}}\neg\neg\varphi$, and cites \ref{logic:prob-ipc-double-negation.3} ($\vdash_{\mathsf{I}}\neg\neg(p\vee\neg p)$) as an example. That example is not an instance of Glivenko's theorem: $p\vee\neg p$ is a classical tautology, so Glivenko would give $\vdash_{\mathsf{I}}\neg\neg(p\vee\neg p)$, which is indeed true, but the cited problem item is proved directly in NJ and does not illustrate the passage from $\mathsf{K}$ to $\mathsf{I}$. More importantly, the statement as written is correct for propositional logic, but the parenthetical 'ここでは一般の場合を確かめていない' combined with calling the cited item 'その例' misrepresents what the example shows. The example only shows a formula whose double negation is intuitionistically provable, not the Glivenko translation applied to a classical derivation.
- **Proposed fix:** Glivenko's theorem: for propositional formulas, $\vdash_{\mathsf{K}}\varphi$ implies $\vdash_{\mathsf{I}}\neg\neg\varphi$. A genuine example is $\varphi=p\vee\neg p$: classically $\vdash_{\mathsf{K}}p\vee\neg p$, and correspondingly $\vdash_{\mathsf{I}}\neg\neg(p\vee\neg p)$ (Problem 4.11(3)). Note that the converse direction and the generalization to predicate logic require care (for predicate logic Glivenko's theorem holds, but the translation is not the same as the double-negation translation used for the Gödel–Gentzen result).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Finite model property attribution
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると (有限モデル性)
- **Detail:** The supplement says: if $\varphi$ is not derivable in NJ then there is a finite Heyting algebra in which it does not take value $1$, and hence derivability in NJ is decidable. This is true (IPC has the finite model property w.r.t. finite Heyting algebras), but the phrasing 'これから NJ の導出可能性は決定可能である' is slightly too quick: decidability follows because one can effectively enumerate finite Heyting algebras and formulas, but the supplement does not note that the finite model property must be effective (which it is). This is a minor imprecision rather than a falsehood; however, the claim as stated ('知られている') is correct. No change strictly required, but the inference should mention effectivity.
- **Proposed fix:** If $\varphi$ is not derivable in NJ, then there is a finite Heyting algebra and a valuation making $\bar{v}(\varphi)\neq1$ (finite model property). Since finite Heyting algebras and valuations can be effectively enumerated, this yields a decision procedure for derivability in NJ.
- **Reported:** 2026-10-28 (10fede1)
