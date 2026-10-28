# Verification tracker: `01-foundations/06-category-theory/08-sheaf-cohomology/04-abelian-sheaves.html`

<!-- source: 01-foundations/06-category-theory/08-sheaf-cohomology/04-abelian-sheaves.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Sheafification does not preserve finite limits
- **Category:** Supplement/remark error
- **Location:** remark 層化はアーベル圏を「局所化」する
- **Detail:** The remark claims that the sheafification functor $(-)^{+}$ is a left adjoint of the inclusion and "preserves finite limits" (有限の極限を保つ). This is false: a left adjoint preserves colimits, not limits. Sheafification preserves finite limits only when the site is left exact (e.g. a topological space with the open-set topology, where finite limits of presheaves are computed sectionwise and sheafification does preserve them). But the statement as written, in a remark about localisation of abelian categories, is at best imprecise and, stated without the left-exactness hypothesis, false in general. Moreover, the parenthetical justification "(\ref{cat:page-sheafification} の補足)" is a pointer to a supplement, not a proof, and the claim is not needed for the localisation discussion.
- **Proposed fix:** Replace with: "層化 $(-)^{+}$ は包含の左随伴で、余極限を保つ。位相空間の開集合のなすサイトは左完全なので、有限極限も保つ（\ref{cat:page-sheafification} の補足）。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Injective O-modules are flasque: attribution and use
- **Category:** Supplement/remark error
- **Location:** supplement 前提を変えると
- **Detail:** The supplement states that injective $\mathcal{O}$-modules are flasque and flasque sheaves are $\Gamma$-acyclic, and that cohomology computed in $\mathbf{Mod}(\mathcal{O})$ agrees with that in $\mathbf{Ab}(X)$. The agreement statement is correct, but the stated reason is incomplete: flasque $\mathcal{O}$-modules being $\Gamma$-acyclic is a statement about $\Gamma$ on $\mathbf{Mod}(\mathcal{O})$, and the comparison of the two cohomologies requires that the inclusion $\mathbf{Mod}(\mathcal{O})\to\mathbf{Ab}(X)$ sends injectives to $\Gamma$-acyclics (which is what the flasque remark supplies) and that it is exact. The sentence as written asserts the conclusion "一致することが知られている" while giving only part of the argument, and the parenthetical "本サイト未収録" hides the missing step. This is an overstated/imprecise claim in a supplement.
- **Proposed fix:** Rewrite: "入射的 $\mathcal{O}$ 加群は脆弱層で、脆弱層は $\Gamma$ 非輪状である。包含関手 $\mathbf{Mod}(\mathcal{O})\to\mathbf{Ab}(X)$ は完全で入射対象を $\Gamma$ 非輪状対象に写すので、グロタンディークスペクトル系列の退化により両者のコホモロジーは一致する（本サイト未収録）。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Vanishing above dimension n needs paracompactness
- **Category:** Supplement/remark error
- **Location:** supplement 計算の手段
- **Detail:** The supplement says "$n$ 次元の多様体では $q>n$ で消えること（グロタンディークの消滅定理の位相版）は知られている". For a topological $n$-manifold this is true for sheaf cohomology with coefficients in a locally constant sheaf (or more generally for locally free sheaves), but the statement as written ("$H^{q}$ vanishes for $q>n$") is stated for arbitrary coefficient sheaves without qualification, which is false: e.g. skyscraper sheaves or arbitrary sheaves can have cohomology in high degrees. Also the attribution "グロタンディークの消滅定理の位相版" is imprecise; the relevant statement is that a paracompact space of covering dimension $n$ has $H^{q}(X,F)=0$ for $q>n$ for sheaves of abelian groups (Grothendieck, Tohoku, or Godement), which does hold for arbitrary $F$ on a paracompact space of dimension $n$. The manifold case is fine if paracompactness is assumed, but the sentence omits the coefficient/dimension hypotheses.
- **Proposed fix:** Rewrite: "パラコンパクトで被覆次元 $n$ の空間 $X$ と任意の層 $F$ に対し $q>n$ で $H^{q}(X,F)=0$（グロタンディークの消滅定理）。特に $n$ 次元多様体では $q>n$ で消える（本サイト未収録）。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Ab(X) has no enough projectives: needs a hypothesis
- **Category:** Unsupported fact
- **Location:** supplement ホモロジー代数の道案内との関係
- **Detail:** The supplement asserts "$\mathbf{Ab}(X)$ は一般に十分な射影対象をもたない（$X$ が 1 点でない典型的な空間で。本サイト未収録）". This is true for many spaces (e.g. $S^{1}$, compact manifolds), but the phrase "$X$ が 1 点でない典型的な空間" is vague and the claim is not true for all non-point spaces: for a discrete space $X$, $\mathbf{Ab}(X)\cong\prod_{x}\mathbf{Ab}$ has enough projectives. So the statement as written ("一般に...もたない") is acceptable as a generic claim but the parenthetical suggests it holds for every non-point space, which is false.
- **Proposed fix:** Rewrite: "$\mathbf{Ab}(X)$ は一般に十分な射影対象をもたない（例えば $X=S^{1}$ などの連結な多様体では。離散空間では十分な射影対象をもつ。本サイト未収録）。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Step 3 of enough injectives: naturality of the Hom isomorphism
- **Category:** Logical gap
- **Location:** cat:ab-sheaves-enough-injectives / Step 3
- **Detail:** Step 3 concludes $\beta\circ\mu=\alpha$ from the componentwise equations $\beta_{x}\circ\mu_{x}=\alpha_{x}$ by invoking that the isomorphism $\operatorname{Hom}(F,I)\cong\prod_{x}\operatorname{Hom}(F_{x},I_{x})$ is natural. This is correct in substance, but the naturality needed is in the first variable $F$ (contravariant), and the text only says "自然なので、合成と両立する" without specifying which naturality. Since the isomorphism is built from $\operatorname{Hom}(F,x_{*}I_{x})\cong\operatorname{Hom}(F_{x},I_{x})$ (natural in $F$) and the product universal property, the argument is fine, but the step should state that the identification is natural in $F$, i.e. compatible with precomposition by $\mu$. This is a minor gap in the written argument rather than a mathematical error.
- **Proposed fix:** Add: "$\operatorname{Hom}(-,I)\cong\prod_{x}\operatorname{Hom}((-)_{x},I_{x})$ は第一変数について自然（前層の射による引き戻しと両立する）ので、各 $x$ で $\beta_{x}\mu_{x}=\alpha_{x}$ なら $\beta\mu=\alpha$。"
- **Reported:** 2026-10-28 (10fede1)
