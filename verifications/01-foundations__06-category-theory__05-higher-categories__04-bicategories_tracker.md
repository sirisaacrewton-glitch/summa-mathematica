# Verification tracker: `01-foundations/06-category-theory/05-higher-categories/04-bicategories.html`

<!-- source: 01-foundations/06-category-theory/05-higher-categories/04-bicategories.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Monads in the bicategory of relations are not preorders
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から)
- **Detail:** The supplement claims that a monad in the bicategory of relations (spans restricted to injective maps) is a preorder. This is false. A monad in $\mathbf{Rel}$ on a set $X$ is a reflexive transitive relation on $X$, i.e. a preorder on $X$ (a relation $R\subseteq X\times X$ with $1\subseteq R$ and $R\circ R\subseteq R$). That is a preorder *structure on the fixed set $X$*, not a preorder (which is a set equipped with a preorder). The statement as written ("a monad ... is a preorder") conflates the relation with the ordered set; more importantly, the parenthetical "spans restricted to injective maps" does not give the bicategory of relations in the usual sense unless one also passes to the opposite/dual conventions, and the identification of the monad's carrier with the underlying set is missing. The claim is at best imprecise and at worst false as stated.
- **Proposed fix:** Replace with: "関係の双圏（集合を対象とし、関係を 1 射とする双圏）の中のモナドは、集合 $X$ 上の反射的かつ推移的な関係、すなわち $X$ 上の前順序構造にあたる。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Bicategory coherence / strictification attribution and content
- **Category:** Supplement/remark error
- **Location:** supplement (似た定理)
- **Detail:** The supplement states that every bicategory is equivalent (in an appropriate sense) to a 2-category, attributing this to "Mac Lane–Paré 1985". The strictification of bicategories (every bicategory is biequivalent to a 2-category) is due to Mac Lane (for the coherence/strictification of bicategories) and is standard; the attribution "Mac Lane–Paré 1985" is not the standard reference for bicategory strictification (Mac Lane–Paré is about coherence for bicategories, but the strictification theorem itself is usually attributed to Mac Lane 1963 / Bénabou, and the precise statement "biequivalent to a 2-category" is standard). The claim is essentially correct in content but the attribution is imprecise/overstated as a specific 1985 Mac Lane–Paré result. Since the instruction is to flag misattributions in supplements, this is worth correcting.
- **Proposed fix:** Replace the attribution with: "（双圏のコヒーレンス定理。マックレーンによる。ここでは証明しない）"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Lax functors from the terminal bicategory are monads — needs the correct direction of the comparison 2-cells
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement says a lax functor from the terminal bicategory $\mathbf{1}$ to $\mathbf{B}$ is exactly a monad in $\mathbf{B}$. This is correct for *lax* functors with comparison 2-cells $F_{g,f}\colon Fg\ast Ff\Rightarrow F(g\ast f)$ and $F_{a}\colon 1_{Fa}\Rightarrow F1_{a}$ pointing in the direction stated. However, the text writes the comparison cells as $F_{g,f}\colon Fg\ast Ff\Rightarrow F(g\ast f)$ and $F_{a}\colon1_{Fa}\Rightarrow F1_{a}$, which is the *lax* direction, and then says "the same computation as \ref{cat:monoidal-functor-monoids}". But \ref{cat:monoidal-functor-monoids} concerns *strong* monoidal functors preserving monoids, whose comparison cells point the other way ($F(g\ast f)\Rightarrow Fg\ast Ff$). The analogy is therefore misleading: the monad structure on $F(\ast)$ uses the lax comparison cells in the direction given, and the unit/counit come from $F_{\ast}$ and the identity comparison, not from the strong-monoidal preservation result. The statement is not false but the cited analogy is imprecise.
- **Proposed fix:** Replace the parenthetical with: "（定義を書き下せば、$F(\ast)$ 上のモナドの乗法は $F_{\ast,\ast}\colon F\ast\ast F\ast\Rightarrow F(\ast\ast\ast)$ と $F(\mathrm{id})$ から得られ、単位は $F_{\ast}\colon1\Rightarrow F(\ast)$ から得られる）"
- **Reported:** 2026-10-28 (10fede1)
