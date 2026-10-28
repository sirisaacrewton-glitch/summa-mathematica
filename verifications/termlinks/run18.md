# Term-link check

- Date: 2026-10-28, model deepseek-chat; groups checked: 2235 of 2235; default fits: 1590; problems: 645
- Usage: 3342 calls, 1990352 prompt tokens (1009658 cache hits), 65437 completion tokens

Each entry: the term, the series, the definition the linker chose (NG), and the first candidate that fits (fix with \term[語]{label} or a rule in tools/terms.json), or none.

## 「上限」 in 01-foundations/01-general-logic/01-propositional-logic
- Default: `calc:supremum` → **fits: `set:order-dedekind-complete`**
- Pages: 04-intuitionistic.html
- Sentence: - 前順序（反射的・推移的な関係）、半順序、束（二元の上限・下限をもつ半順序）の用語は標準的なものを使う。前順序の間の随伴（ガロア接続）は \ref{cat:prob-galois-connection} のとおり。
  - `calc:supremum`: NG — Here "上限" refers to the least upper bound (join) in a partially ordered set/lattice, which is the same general notion as the card's supremum, but the card defines it specifically for subsets of a totally ordered set, whereas here it is a binary join in a poset—an extension beyond the card's definition.
  - `set:order-dedekind-complete`: OK

## 「互いに素」 in 01-foundations/01-general-logic/01-propositional-logic
- Default: `grp:gcd` → **no candidate fits**
- Pages: 05-intuitionistic-kripke.html
- Sentence: $r_{2}$ で $r_{2}\nVdash\psi$ となるものがある。\ref{logic:ikripke-generated} から、$W_{1}\defeq{\uparrow}r_{1}$, $W_{2}\defeq{\uparrow}r_{2}$ に制限しても強制は変わらない。$W_{1},W_{2}$ を互いに素な集合と見て（必要なら付け替える）、新しい状態 $r$ を加えた $W\defeq\{r\}\sqcup W_{1}\sqcup W_{2}$ に、$W_{i}$ の中の順序と「$r\le$ すべて」で半順序を入れ、$V(p)\defeq V_{1}(p)\sqcup V_{2}(p)$ とする（$r\notin V(
  - `grp:gcd`: NG — Here "互いに素" means disjoint sets, not coprime integers as defined in the card.
  - `pt:prime`: NG — Here "互いに素" means disjoint sets, not the number-theoretic coprime relation defined in the card.
  - `grp:cycle`: NG — Here "互いに素" means disjoint sets, not disjoint permutations as defined in the card.

## 「半順序」 in 01-foundations/01-general-logic/01-propositional-logic
- Default: `set:total-order` → **fits: `set:forcing-poset`**
- Pages: 03-compactness.html, 04-intuitionistic.html, 05-intuitionistic-kripke.html
- Sentence: 任意の半順序集合 $(P,\le)$ の順序は全順序に延長できることを、「有限の半順序は全順序に延長できる」ことを使ってコンパクト性定理から示せ。
  - `set:total-order`: NG — the sentence uses the non-strict order relation $\le$ (a reflexive partial order), whereas the card defines a strict partial order with irreflexivity.
  - `set:forcing-poset`: OK

## 「推移的」 in 01-foundations/01-general-logic/01-propositional-logic
- Default: `set:transitive-set` → **fits: `logic:relation-properties`**
- Pages: 04-intuitionistic.html, 05-intuitionistic-kripke.html
- Sentence: - 前順序（反射的・推移的な関係）、半順序、束（二元の上限・下限をもつ半順序）の用語は標準的なものを使う。前順序の間の随伴（ガロア接続）は \ref{cat:prob-galois-connection} のとおり。
  - `set:transitive-set`: NG — Here "推移的" describes a binary relation (transitivity), not a set being transitive as defined in the card.
  - `logic:relation-properties`: OK

## 「上限」 in 01-foundations/01-general-logic/02-first-order-logic
- Default: `calc:supremum` → **no candidate fits**
- Pages: 07-completeness.html
- Sentence: タルスキ代数）。完全な無矛盾集合は、この代数の超フィルターにあたり、リンデンバウムの補題は「フィルターは超フィルターに拡張できる」という事実の特別な場合である。命題論理では、完全性定理はブール代数の\ref{top:stone-representation}とほぼ同じ内容になる。一階述語論理では、量化子に対応する無限の上限・下限（$\forall x\,\varphi$ が代入例 $\varphi[t/x]$ の下限であること）を保つ超フィルターを選ぶ必要があり、ヘンキン公理がその役割を果たしている。
  - `calc:supremum`: NG — Here "上限・下限" refers to infinitary joins/meets (suprema/infima) in a Boolean algebra or Lindenbaum algebra, not the least upper bound of a subset of a totally ordered field as defined in the card.
  - `set:order-dedekind-complete`: NG — Here 上限 refers to an infimum/lower bound (下限) in a lattice-theoretic sense, not the least upper bound defined in the card.
  - `logic:rm-analysis-defs`: NG — Here "上限" means the supremum (least upper bound) of a set of truth values in a Boolean algebra, not the supremum of a real sequence as defined in the card.

## 「互いに素」 in 01-foundations/01-general-logic/02-first-order-logic
- Default: `grp:gcd` → **no candidate fits**
- Pages: 01-syntax.html
- Sentence: athrm{Con}_{\mathcal{L}}$, $\mathrm{Fun}_{\mathcal{L}}$, $\mathrm{Rel}_{\mathcal{L}}$ と、論理記号・補助記号の集合 $\{\bot,\to,\forall,=,\mathtt{(},\mathtt{)},\mathtt{,}\}$ は互いに素であるとする。これらすべての和集合を $\mathcal{L}$ の**アルファベット** $A_{\mathcal{L}}$ という。
  - `grp:gcd`: NG — Here "互いに素" means pairwise disjoint sets, not coprime integers as defined in the card.
  - `pt:prime`: NG — Here "互いに素" means pairwise disjoint sets, not the number-theoretic coprime relation defined in the card.
  - `grp:cycle`: NG — Here "互いに素" means pairwise disjoint sets, not disjoint permutations as defined in the card.

## 「推論規則」 in 01-foundations/01-general-logic/02-first-order-logic
- Default: `logic:deduction-system` → **fits: `pt:pa-x`**
- Pages: 04-natural-deduction.html
- Sentence: 式、略記（$\neg\varphi\defeq\varphi\to\bot$ など）、自由変数は \ref{logic:formula}, \ref{logic:abbreviations}, \ref{logic:free-variables} のとおり。原始記号は $\bot,\to,\forall,=$ なので、推論規則もこの四つについてだけ定める。$\neg,\wedge,\vee,\exists$ の規則は \ref{logic:page-derived-rules} で導く。
  - `logic:deduction-system`: NG — 「推論規則」は導出を構成する規則全般を指す語であり、カードが定義する「導出」そのものではない。
  - `pt:pa-x`: OK

## 「準同型」 in 01-foundations/01-general-logic/02-first-order-logic
- Default: `ring:homomorphism` → **fits: `cat:t-algebra`**
- Pages: 02-substitution.html, 03-semantics.html
- Sentence: **高い視点.** 代入 $[s/x]$ は、項全体のなす自由な代数（\ref{logic:unique-readability-terms} の後の補足）の上で、生成元 $x$ の行き先を $s$ と決めて延ばした準同型である。論理式への代入が単純な準同型にならないのは、量化子 $\forall x$ が $x$ を「生成元から外す」操作だからである。
  - `ring:homomorphism`: NG — Here "準同型" refers to a homomorphism of free algebras (term algebras), not a ring homomorphism as defined in the card.
  - `cat:t-algebra`: OK

## 「上限」 in 01-foundations/01-general-logic/03-modal-logic
- Default: `calc:supremum` → **no candidate fits**
- Pages: 04-completeness-decidability.html
- Sentence: L}$ のそれぞれについて、**有限の**適切なフレームに関する完全性定理を証明する：定理でない論理式 $D$ には、それを偽にする有限のモデルがある。構成は、$D$ の部分論理式とその否定だけからなる「小さな」極大無矛盾集合を世界とし、到達可能性関係を体系ごとに工夫して定める。モデルの大きさが $D$ から計算できる上限で抑えられるので、各体系は**決定可能**である。最後に、$\mathsf{GL}$ は有限の**木**についても完全であることを示す。
  - `calc:supremum`: NG — Here "上限" means an upper bound on the size of the model (a numerical bound), not the least upper bound (supremum) of a subset as defined in the card.
  - `set:order-dedekind-complete`: NG — Here "上限" means an upper bound on the model size computed from $D$, not the least upper bound (supremum) defined in the card.
  - `logic:rm-analysis-defs`: NG — Here "上限" means an upper bound on the model size computable from D, not the least upper bound (supremum) of a real sequence as defined in the card.

## 「互いに素」 in 01-foundations/01-general-logic/03-modal-logic
- Default: `grp:gcd` → **no candidate fits**
- Pages: 06-trees-for-gl.html, 07-incomplete-modal-logic.html
- Sentence: **Step 1（モデル）.** $W_{C}$ たちを互いに素にとり、新しい点 $w$ を加えて $W\defeq\{w\}\cup\bigcup_{C}W_{C}$、$R\defeq\bigcup_{C}R_{C}\cup\{(w,x):x\in\bigcup_{C}W_{C}\}$、$V\defeq\bigcup_{C}V_{C}\cup\{(w,p):\mathsf{T}p
  - `grp:gcd`: NG — Here "互いに素" means pairwise disjoint sets, not coprime integers as defined in the card.
  - `pt:prime`: NG — Here "互いに素" means pairwise disjoint sets, not the number-theoretic coprime relation defined in the card.
  - `grp:cycle`: NG — Here "互いに素" means pairwise disjoint sets, not disjoint permutations as defined in the card.

## 「推論規則」 in 01-foundations/01-general-logic/03-modal-logic
- Default: `logic:deduction-system` → **fits: `pt:pa-x`**
- Pages: 01-normal-modal-logics.html
- Sentence: - 本ページの証明体系はヒルベルト流（公理と推論規則による有限列）である。命題論理・一階述語論理の系列では自然演繹を使ったが、様相論理では必然化則を自然演繹の規則として扱うのが簡単でないため、慣例に従ってヒルベルト流をとる。
  - `logic:deduction-system`: NG — 「推論規則」はヒルベルト流の公理系における規則（例：必然化則）を指し、カードが定義する「導出」という概念とは異なる。
  - `pt:pa-x`: OK

## 「有界」 in 01-foundations/01-general-logic/03-modal-logic
- Default: `calc:supremum` → **no candidate fits**
- Pages: 03-kripke-semantics.html
- Sentence: {logic:cwf-not-first-order}）。逆に、様相論理式は世界の近くしか見られない（連続性定理）ので、「逆整礎」単独のように局所的に判定できない性質は書けない（\ref{logic:cwf-not-modal}）。様相論理は「到達関係を少しずつたどる」視点から構造を見る言語であり、モデル理論でいえば、有界な量化子だけを使う一階論理の断片（ガードされた断片）に近い。
  - `calc:supremum`: NG — Here "有界" describes bounded quantifiers (quantifiers restricted to a range), not a subset being bounded above and below in an ordered set.
  - `logic:rm-analysis-defs`: NG — Here "有界" modifies quantifiers (bounded quantification), not a real sequence as defined in the card.

## 「無矛盾」 in 01-foundations/01-general-logic/03-modal-logic
- Default: `logic:prop-deduction` → **no candidate fits**
- Pages: 01-normal-modal-logics.html, 02-gl-axioms.html, 03-kripke-semantics.html, 04-completeness-decidability.html, 05-canonical-models.html, 07-incomplete-modal-logic.html
- Sentence: き最小限の性質を集めたのが正規様相論理 $\mathsf{K}$ で、読みに応じて公理を加える。$\Diamond\varphi=\neg\Box\neg\varphi$ は「$\varphi$ の否定が必然ではない」、すなわち「$\varphi$ は可能」と読む。証明可能性の読みでは「$\varphi$ は（理論と）無矛盾」である。
  - `logic:prop-deduction`: NG — In the card, 無矛盾 means a set of formulas does not derive ⊥, whereas here it means φ is consistent with a theory, a different (though related) notion.
  - `logic:derivability`: NG — Here "無矛盾" describes a formula being consistent with a theory, not a set of formulas being consistent (i.e., not deriving ⊥) as defined in the card.
  - `logic:pdl-axioms`: NG — Here "無矛盾" means consistency of a formula with a theory in provability logic, not the card's definition of a finite set $X$ being consistent as $\vdash\neg\bigwedge X$ does not hold.
  - `logic:ltl-axioms`: NG — Here "無矛盾" means "consistent with the theory" (i.e., φ is not refutable), whereas the card defines it as a finite set X such that not ⊢ ¬⋀X, a different notion.
  - `set:formal-deduction`: NG — Here "無矛盾" describes a formula being consistent with a theory (unprovability of its negation), not a set of sentences being syntactically consistent as defined in the card.

## 「証明可能」 in 01-foundations/01-general-logic/03-modal-logic
- Default: `logic:derivability` → **no candidate fits**
- Pages: 01-normal-modal-logics.html, 02-gl-axioms.html, 03-kripke-semantics.html
- Sentence: 命題論理に一項の結合子 $\Box$（「必然的に」「証明可能である」などと読む）を加えた**様相論理**を、ヒルベルト流の体系として定める。すべての恒真式と分配公理 $\Box(\varphi\to\psi)\to(\Box\varphi\to\Box\psi)$ を含み、モーダスポネンス・必然化則・一様代入則で閉じた論理式の集合を**正規様相論理**という。本ページでは、正規
  - `logic:derivability`: NG — the card defines derivability (導出可能) for first-order logic, not the modal notion of provability (証明可能) used here.
  - `set:formal-deduction`: NG — Here "証明可能" is used as a reading of the modal operator □ in modal logic, not the formal-provability relation S⊢φ defined in the card.

## 「連続」 in 01-foundations/01-general-logic/03-modal-logic
- Default: `top:continuous` → **no candidate fits**
- Pages: 06-trees-for-gl.html
- Sentence: {(w,x):x\in\bigcup_{C}W_{C}\}$、$V\defeq\bigcup_{C}V_{C}\cup\{(w,p):\mathsf{T}p\in\Delta\}$ とする。有限・推移的・非反射的な木である。各 $W_{C}$ の点から見える世界は $\mathcal{M}_{C}$ の中と同じなので、連続性（\ref{logic:generated-submodel}）より $W_{C}$ の点での真理は $\mathcal{M}_{C}$ と同じ。
  - `top:continuous`: NG — Here "連続性" refers to continuity of truth/valuation across generated submodels in modal logic, not the topological continuity of a map between topological spaces defined in the card.
  - `comp:monotone-continuous`: NG — Here "連続性" refers to continuity of a generated submodel map in modal logic, not the fixed-point continuity of a function on power sets defined in the card.
  - `cx:limit-continuity`: NG — This "連続性" refers to continuity of a modal-logical truth/valuation across generated submodels, not the ε-δ continuity of a complex function defined in the card.

## 「閉包」 in 01-foundations/01-general-logic/03-modal-logic
- Default: `set:finitary-closure` → **no candidate fits**
- Pages: 01-normal-modal-logics.html, 03-kripke-semantics.html, 04-completeness-decidability.html
- Sentence: 分配公理・$\mathrm{Ax}$ を含む正規様相論理とする。証明 $\varphi_{1},\dots,\varphi_{n}$ の各 $\varphi_{k}$ が $\Lambda$ に属することを $k$ に関する帰納法で示せばよい。公理なら仮定から、モーダスポネンスと必然化則の場合は $\Lambda$ の閉包性と帰納法の仮定から従う。
  - `set:finitary-closure`: NG — Here "閉包性" refers to closure of a modal logic under inference rules (modus ponens and necessitation), not the set-theoretic closure of a subset under finitary operations defined in the card.
  - `logic:ltl-size`: NG — Here "閉包性" refers to closure of a logic under inference rules (modus ponens, necessitation), not the closure set CL(A) of subformulas defined in the card.
  - `logic:ctl-closure`: NG — Here "閉包性" refers to closure of a logic under modus ponens and necessitation rules, not the specific closure set CL(A) of subformulas defined in the card.
  - `set:pred-closure`: NG — Here "閉包性" refers to closure properties of a modal logic Λ under rules like necessitation, not the set-theoretic closure cl(A,x,R) defined in the card.
  - `top:interior-closure`: NG — Here "閉包性" means closure under rules (closedness of the logic), not the topological closure of a set.

## 「上界」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `set:chain-maximal` → **no candidate fits**
- Pages: 01-bisimulation.html
- Sentence: したがって証明可能性問題）は PSPACE 完全である（R. E. Ladner, The computational complexity of provability in systems of modal propositional logic, SIAM Journal on Computing, 1977）。上界は $\mathsf{K}$ について \ref{logic:k-pspace} で示した。PSPACE 困難性の証明（真偽の量化つきブール式 \ref{comp:tqbf-complete} からの還元）は本サイト未収録。
  - `set:chain-maximal`: NG — Here "上界" means an upper bound on computational complexity (an upper bound on the resources needed), not an upper bound of a subset in a partially ordered set as defined in the card.
  - `calc:supremum`: NG — Here "上界" means an upper bound on computational complexity (an upper bound on the resources needed), not an upper bound of a subset in an ordered set as defined in the card.

## 「付値」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `logic:truth-assignment` → **fits: `logic:kripke-model`**
- Pages: 01-bisimulation.html, 02-geach-logics.html, 04-pdl-completeness.html
- Sentence: $\mathcal{G}$ の上のモデル $\mathcal{N}=(W',R',V')$ と $w'\in W'$ をとる。$\mathcal{F}$ の上の付値を $V\defeq\{(w,p):(f(w),p)\in V'\}$ と定めると、$f$ はモデル $(W,R,V)$ から $\mathcal{N}$ への有界射になる（条件 1 は $V$ の定義、2・3 はフレームの有界射の条件）。$f$ は全射なので $f(w)=w'$ となる $w$ がある。$\mathc
  - `logic:truth-assignment`: NG — Here "付値" (valuation) is a map assigning truth values to propositional variables in a Kripke model, which is essentially the same notion as the card's truth-value assignment $v\colon\mathrm{PV}\to\{0,1\}$ (a special case with the set of propositional variables and values $\{0,1\}$), so it does match.
  - `logic:assignment`: NG — Here "付値" (valuation) is a map assigning truth values to propositional variables in a Kripke model, not a variable assignment $v\colon\mathrm{Var}\to M$ as defined in the card.
  - `logic:kripke-model`: OK

## 「定義域」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `set:relation` → **no candidate fits**
- Pages: 14-hoare-arithmetic.html
- Sentence: **Step 2.** 【主張：枚挙できれば $K$ が決定可能になる】 妥当な三つ組の全体が帰納的に枚挙できれば、計算可能な写像 $e\mapsto\{\top\}P_{e}\{\bot\}$ による逆像として、$K$ の補集合も帰納的に枚挙できる（Σ₁）。$K$ 自身も計算可能な部分関数の定義域なので Σ₁（\ref{comp:halting-L}、\ref{comp:sigma1-recognizable.1}）。両方が Σ₁ なら $K$ は Δ₁ で、\ref{comp:sigma1-recognizable.2} から決定可能となり、\ref{comp:halting-L} に反する。
  - `set:relation`: NG — Here 定義域 means the domain of a partial computable function, not the domain of a relation as defined in the card.
  - `logic:rm-continuous-code`: NG — Here "定義域" refers to the domain of a computable partial function, not the domain of a continuous function as defined in the card.

## 「推移的」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `logic:relation-properties` → **no candidate fits**
- Pages: 01-bisimulation.html, 02-geach-logics.html
- Sentence: - **推移的**：$[w]R^{t}[v]\iff$ すべての $\Box B\in\Sigma$ で、$w\models\Box B$ なら $v\models\Box B$ かつ $v\models B$。
  - `logic:relation-properties`: NG — Here "推移的" names a relation $R^{t}$ defined by a modal condition, not the transitivity property $wRx \land xRy \Rightarrow wRy$ defined in the card.
  - `set:transitive-set`: NG — This "推移的" describes a relation's transitivity in modal logic, not a set being transitive (every element being a subset).
  - `grp:faithful-transitive`: NG — This "推移的" is a relation on Kripke frames/models, not a group action being transitive.

## 「推論規則」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `logic:deduction-system` → **fits: `pt:pa-x`**
- Pages: 04-pdl-completeness.html, 05-ltl.html, 06-ctl.html, 10-mu-calculus-logic.html, 13-hoare-logic.html
- Sentence: 推論規則はモーダスポネンス（$A$ と $A\to B$ から $B$）と**必然化**（$A$ から $[\alpha]A$。$\alpha$ はどのプログラムでもよい）の二つとする。公理から推論規則で得られる論理式を**定理**といい、$\vdash A$ と書く。$\vdash\neg\bigwedge X$ でない有限
  - `logic:deduction-system`: NG — 「推論規則」は規則の一般概念であり、カードが定義する「導出」という特定の帰納的対象ではない。
  - `pt:pa-x`: OK

## 「決定可能」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `comp:L-computable` → **no candidate fits**
- Pages: 01-bisimulation.html, 14-hoare-arithmetic.html
- Sentence: ー–ミルナーの定理**、\tref{logic:hennessy-milner}）。このページでは双模倣を道具に、モデルを**木に展開**する方法と、モデルを有限に**フィルトレーション**で縮める方法を整え、\tref{logic:page-modal-completeness} で示した七つの体系の健全性・完全性・決定可能性を、計算量まで含めて見直す。$\mathsf{S5}$ の充足可能性は NP 完全（\tref{logic:s5-np-complete}）、$\mathsf{K}$ の充足可能性は PSPACE に属する（\tref{logic:k-pspace}。PSPACE 完全であること、すなわち下界は証明せず事実として述べ
  - `comp:L-computable`: NG — the sentence uses "決定可能性" (decidability of logics), not the card's notion of a set being decidable via its characteristic function.
  - `comp:recognizable-decidable`: NG — “決定可能” here refers to decidability of modal logics (a property of a set of formulas), not the card’s notion of a language being decided by a Turing machine.

## 「準同型」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `ring:homomorphism` → **fits: `cat:t-algebra`**
- Pages: 01-bisimulation.html
- Sentence: クリプキモデルは集合 $W$ と写像 $W\to\mathcal{P}(W)\times\mathcal{P}(\mathrm{PV})$（$w\mapsto(\text{後続の集合},\text{真な命題変数の集合})$）の組、すなわち冪集合関手を使った**余代数**とみなせる。この見方では、有界射はちょうど余代数の準同型（写像と構造が可換になるもの）であり、双模倣は二つの余代数の間の「スパン」として統一的に定義できる。遷移系・オートマトン・ストリームなどの振る舞いの同値を同じ形で扱う枠組み（余代数の理論）の出発点である。
  - `ring:homomorphism`: NG — This "準同型" is a coalgebra homomorphism (commuting with the coalgebra structure map), not a ring homomorphism as defined in the card.
  - `cat:t-algebra`: OK

## 「無矛盾」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `logic:pdl-axioms` → **fits: `logic:prop-deduction`**
- Pages: 04-pdl-completeness.html, 06-ctl.html
- Sentence: $X\subset\Phi$ が無矛盾で、各 $B\in\Sigma$ について $B\in X$ または $\neg B\in X$ となるとき、$X$ を**極大**という。極大な集合全体を $W$ とする。$w\in W$ について $\widehat{w}\defeq\bigwedge w$、$Y\subset W$ について $\widehat{
  - `logic:pdl-axioms`: NG — In the card, 無矛盾 is defined only for finite sets X as not proving the negation of their conjunction, whereas the sentence applies it to an arbitrary subset X of Φ without the finiteness restriction.
  - `logic:prop-deduction`: OK

## 「計算可能」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `comp:L-computable` → **fits: `comp:mapping-reducible`**
- Pages: 14-hoare-arithmetic.html
- Sentence: > 参考：『コンピュータサイエンスにおける様相論理』（ユーザー指定の参考書。本文のテキストは未入手のため、構成は標準的な内容によった）。証明には計算可能性の系列のプログラミング言語 L（\ref{comp:page-language-L}）と燃料つきの実行（\ref{comp:fuel-semantics}）、表現可能性定理（\ref{comp:decidable-representable}）、停止問題（\ref{comp:halting-L}）を使う。
  - `comp:L-computable`: NG — Here "計算可能性" refers to the general notion of computability (the series/topic of computability), not specifically to the card's defined notion of an L-computable partial function.
  - `comp:mapping-reducible`: OK

## 「辞書式順序」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `set:well-order-sum-product-def` → **no candidate fits**
- Pages: 05-ltl.html
- Sentence: 段階 $s=0,1,2,\dots$ で有限列を延ばす。段階 $s$ の初めの列の最後を $x$ とし、$l\defeq(s\bmod r)+1$ とする（$r=0$ なら何もしない）。$E_{l}\in x$ なら、\ref{logic:ltl-fulfil} の列のうち長さが最小で、そのうち（$W$ の並べ方による辞書式順序で）最初のものを $x$ の後につなぐ。最後に、\ref{logic:ltl-successor.2} で最後の元の後続のうち最初のものを一つつなぐ。各段階で列は 1 以上延びるので、極限として無限列 $\pi$ が得られる。
  - `set:well-order-sum-product-def`: NG — It refers to a lexicographic order on finite sequences (words), not the lexicographic product of two well-ordered sets defined in the card.
  - `top:double-arrow`: NG — This "辞書式順序" is a lexicographic order on finite sequences (words) used to pick the first sequence, not the lexicographic order on $[0,1]\times\{0,1\}$ defining the double arrow space.

## 「上界」 in 01-foundations/02-model-theory/01-elementary-extensions
- Default: `set:chain-maximal` → **no candidate fits**
- Pages: 06-ordered-fields.html, 07-sturm.html, 08-rcf-qe.html
- Sentence: athrm{RCF}$ を考える。本ページでは $\mathrm{RCF}$ を「多項式について中間値の定理が成り立つ順序体」として公理化し（\ref{model:rcf}）、後の\ref{model:page-sturm}とタルスキの量化子消去（\ref{model:page-rcf-qe}）で使う多項式の性質（根の上界、根のない区間での符号の一定性、ロルの定理と平均値の定理）を、公理だけから導く。また、実閉体の中で部分体の上に代数的な元全体がまた実閉体になること（\ref{model:relative-algebraic-closure-rcf}）を示し、実代数的数の体が実閉体であることを確かめる。
  - `set:chain-maximal`: NG — Here "上界" refers to an upper bound for the roots of a polynomial (a numeric bound), not the order-theoretic upper bound of a subset in a poset as defined in the card.
  - `calc:supremum`: NG — Here "上界" refers to an upper bound for the roots of a polynomial, not the upper bound of a subset of an ordered set as defined in the card.

## 「上限」 in 01-foundations/02-model-theory/01-elementary-extensions
- Default: `calc:supremum` → **no candidate fits**
- Pages: 01-elementary-substructures.html, 06-ordered-fields.html, 09-o-minimality.html
- Sentence: - **$\kappa\ge\lvert M\rvert+\lvert\mathcal{L}\rvert$**：Step 1 の言語の濃度の評価と、Step 3 の下降定理の上限。$\kappa<\lvert M\rvert$ では $M$ を $N$ に埋め込めない。
  - `calc:supremum`: NG — Here "上限" means an upper bound on a quantity (a bound in the sense of a limit/estimate), not the least upper bound (supremum) of a subset of an ordered set as defined in the card.
  - `set:order-dedekind-complete`: NG — Here 上限 means an upper bound on a value (a maximum limit), not the least upper bound (supremum) defined in the card.
  - `logic:rm-analysis-defs`: NG — Here "上限" means an upper bound on a cardinal/quantity in the proof, not the least upper bound (supremum) of a real sequence as defined in the card.

## 「原子論理式」 in 01-foundations/02-model-theory/01-elementary-extensions
- Default: `logic:prop-formula` → **fits: `logic:formula`**
- Pages: 01-elementary-substructures.html, 02-elementary-chains.html, 03-quantifier-elimination.html, 04-acf.html, 05-ef-games.html, 08-rcf-qe.html
- Sentence: **2.** $\forall$ を含まない論理式は $\bot$ と原子論理式から $\to$ だけで作られる。$\bot$ は両辺偽。$t=s$ は 1 から。$P(t_{1},\dots,t_{n})$ は、1 より両辺で同じ組 $(a_{1},\dots,a_{n})\in N^{n}$ が現れ、$P^{\mathcal{N}}=P^{\mathcal{M}}\cap N^{n}$ から従
  - `logic:prop-formula`: NG — In this sentence "原子論理式" refers to atomic formulas of first-order predicate logic (including relation symbols like \(P(t_{1},\dots,t_{n})\) and equalities \(t=s\)), not the propositional atomic formulas defined in the card as elements of \(\Phi_{0}=\mathrm{PV}\cup\{\bot\}\).
  - `logic:formula`: OK

## 「合成」 in 01-foundations/02-model-theory/01-elementary-extensions
- Default: `logic:pdl-syntax` → **fits: `cat:category`**
- Pages: 02-elementary-chains.html
- Sentence: （$\mathcal{A}_{n}\preccurlyeq\mathcal{A}_{n+1}$, $\mathcal{B}_{n}\models T$）を作る。Step 1 を $\mathcal{A}_{n}$ に使えるのは、$\mathcal{A}_{n}\equiv\mathcal{M}$（初等埋め込みの合成）で $\mathcal{A}_{n}\models T_{\forall\exists}$ だからである。各段の構成で選択を繰り返すので、従属選択の原理（選択公理から従う）を使う。
  - `logic:pdl-syntax`: NG — Here "合成" refers to composition of elementary embeddings, not the PDL program composition operator.
  - `logic:while-program`: NG — Here "合成" refers to composition of elementary embeddings, not the sequential composition of while-programs defined in the card.
  - `set:relation-composition`: NG — Here "合成" refers to the composition of elementary embeddings (a composition of functions/maps), not the composition of relations as defined in the card.
  - `cat:category`: OK

## 「推移的」 in 01-foundations/02-model-theory/01-elementary-extensions
- Default: `logic:relation-properties` → **fits: `set:transitive-set`**
- Pages: 01-elementary-substructures.html
- Sentence: る。とくに、$M$ で「非可算」と判定される集合 $a$ を $A$ に入れておけば、$a$ を含む可算な初等部分構造 $\mathcal{N}$ があり、$\mathcal{N}$ でも $a$ は「非可算」だが、$\mathcal{N}$ の中にある $a$ の $E$-元は可算個しかない。集合論では同様の議論が、推移的モデルとモストフスキ崩壊を組み合わせて使われる。
  - `logic:relation-properties`: NG — Here "推移的モデル" refers to a transitive set/model in set theory (a set closed under elements), not the transitivity property of a relation R as defined in the card.
  - `set:transitive-set`: OK

## 「論理式」 in 01-foundations/02-model-theory/01-elementary-extensions
- Default: `logic:prop-formula` → **fits: `logic:formula`**
- Pages: 01-elementary-substructures.html, 02-elementary-chains.html, 03-quantifier-elimination.html, 04-acf.html, 05-ef-games.html, 08-rcf-qe.html, 09-o-minimality.html
- Sentence: ・割り当て・充足・縮小と拡大・同型写像は \ref{logic:structure}, \ref{logic:assignment}, \ref{logic:satisfaction}, \ref{logic:reduct-lemma}, \ref{logic:isomorphism-invariance} のとおり。論理式の基本記号は $\bot,=,P,\to,\forall$ で、$\neg,\wedge,\vee,\exists$ は略記（\ref{logic:abbreviation-semantics}）。
  - `logic:prop-formula`: NG — This sentence is about first-order predicate logic formulas (with symbols like =, P, ∀), not propositional logic formulas as defined in the card.
  - `logic:formula`: OK

## 「閉包」 in 01-foundations/02-model-theory/01-elementary-extensions
- Default: `logic:ltl-size` → **no candidate fits**
- Pages: 01-elementary-substructures.html, 02-elementary-chains.html, 07-sturm.html, 08-rcf-qe.html
- Sentence: を主張した。本ページでは、与えられた構造 $\mathcal{M}$ の**内部に**、$\mathcal{M}$ と「同じことが同じ元について成り立つ」小さい部分構造（**初等部分構造**）を見つける。判定法は**タルスキ–ヴォートの判定法**で、構成の道具は、存在量化子の証拠を選ぶ**スコーレム関数**と、集合論の閉包補題（\ref{set:closure-lemma}）である。最後に、コンパクト性と組み合わせて、大きい**初等拡大**を作る上昇版を示す。
  - `logic:ltl-size`: NG — Here 閉包 refers to the set-theoretic closure lemma (closure under functions), not the closure CL(A) of an LTL formula defined in the card.
  - `logic:ctl-closure`: NG — Here 閉包 refers to the set-theoretic closure lemma (closure under Skolem functions), not the CTL formula closure set CL(A) defined in the card.
  - `set:finitary-closure`: NG — Here "閉包" refers to the set-theoretic closure lemma used to build Skolem hulls, not the closure of a set under a family of finite-arity operations as defined in the card.
  - `set:pred-closure`: NG — Here "閉包" refers to the set-theoretic closure lemma (closure under functions), not the well-founded relation closure cl(A,x,R) defined in the card.
  - `top:interior-closure`: NG — Here "閉包" refers to the set-theoretic closure lemma (closure under functions), not the topological closure of a subset.

## 「原子論理式」 in 01-foundations/02-model-theory/02-types-and-countable-models
- Default: `logic:prop-formula` → **fits: `logic:formula`**
- Pages: 02-countable-models.html, 03-saturated-models.html, 06-fraisse-limits.html
- Sentence: $\vec{a}$ の型 $\mathrm{tp}(\vec{a})$ は、量化子消去（\ref{model:dlo-qe}）より、それに含まれる量化子のない論理式で決まる：任意の $\varphi\in\mathrm{tp}(\vec{a})$ と同値な量化子のない $\psi$ がある。量化子のない論理式の真偽は、原子論理式 $x_{i}<x_{j}$, $x_{i}=x_{j}$ の真偽で決まる（\ref{model:qf-dnf} の証明）。その組み合わせは高々 $2^{2n^{2}}$ 通りなので、$S_{n}(\mathrm{DLO})$ は有限である。\ref{model:ryll-nardzewski.2} $\Rightar
  - `logic:prop-formula`: NG — This "原子論理式" refers to atomic formulas of a first-order language (like $x_{i}<x_{j}$), not the propositional atomic formulas defined in the card.
  - `logic:formula`: OK

## 「完備化」 in 01-foundations/02-model-theory/02-types-and-countable-models
- Default: `calc:cauchy-construction` → **fits: `top:completion`**
- Pages: 06-fraisse-limits.html, 08-rational-urysohn.html
- Sentence: **似た定理.** フライッセ極限のもう一つの重要な例は**ウリゾーン空間**（有理数距離の有限距離空間のクラスの極限 \ref{model:page-rational-urysohn} の完備化）で、すべての可分距離空間を含む普遍的な距離空間であることが知られている（有理版の存在・一意性・普遍性は \ref{model:rational-urysohn-unique}, \ref{model:rational-urysohn-universal}）。フライッセ理論は、自己同型群の力学（ケクリス–ペシュトフ–ト
  - `calc:cauchy-construction`: NG — the card defines the construction of the reals as a completion of the rationals, but the term "完備化" in the sentence refers to the completion of a metric space (Urysohn space), a different notion.
  - `ring:completion`: NG — This "完備化" is metric-space completion (Cauchy completion), not the $I$-adic completion of a module defined in the card.
  - `top:completion`: OK

## 「有限生成」 in 01-foundations/02-model-theory/02-types-and-countable-models
- Default: `mod:generated-submodule` → **fits: `grp:generated-subgroup`**
- Pages: 06-fraisse-limits.html
- Sentence: **前提を変えると.** 関数記号のある言語では、有限生成構造のクラスについて同じ定理が成り立つことが知られている。たとえば有限群のクラスは HP, JEP, AP をもち、そのフライッセ極限はホールの普遍局所有限群であるとされる（ここでは確かめていない）。言語が無限でも、同型類が可算個なら存在と一意性は成り立つが、$\omega$ 範疇性は一般に失われる。
  - `mod:generated-submodule`: NG — This use of 有限生成 refers to finitely generated structures in model theory, not finitely generated modules over a ring as defined in the card.
  - `grp:generated-subgroup`: OK

## 「経路」 in 01-foundations/02-model-theory/02-types-and-countable-models
- Default: `logic:ctl-semantics` → **no candidate fits**
- Pages: 08-rational-urysohn.html
- Sentence: l:fraisse-theorem}と同じく、ここでも (i) 有限部分空間のクラスが\term[部分空間]{top:subspace}で閉じ（HP）、(ii) 二つの空間を共通に埋め込め（JEP）、(iii) 融合できる（AP：二つの一点拡張は、\ref{model:katetov-extension} と同じ「最短経路の距離」で融合できる）ことが、拡張性をもつ極限の存在を支えている。ランダムグラフ（\ref{model:page-random-graph}）や有理数の順序（\ref{model:cantor-dlo}）と同じ型の「最も一般的な」可算構造である。
  - `logic:ctl-semantics`: NG — Here "経路" means a shortest path in a metric/graph sense, not the CTL path defined as an infinite sequence of states satisfying $\pi(i)R\pi(i+1)$.
  - `logic:erdos-rado-tree`: NG — Here "経路" means a shortest path in a metric/graph sense, not the finite sequence σ_{j} defined in the Erdős–Rado tree card.

## 「論理式」 in 01-foundations/02-model-theory/02-types-and-countable-models
- Default: `logic:prop-formula` → **fits: `logic:formula`**
- Pages: 01-types-omitting.html, 02-countable-models.html, 03-saturated-models.html, 04-indiscernibles.html, 07-vaught-never-two.html
- Sentence: 構造の元の組 $\vec{a}$ が満たす論理式の全体を、$\vec{a}$ の**型**という。型は「元の組がもちうる一階の性質の一覧」で、モデルの違いは、どの型を**実現**しどの型を**省略**するかで測られる。本ページでは、型の基本事項（実現、完全型、孤立型）を整え、可算の言語について**型の省略定理**（\tref{model:omitting-types
  - `logic:prop-formula`: NG — This is about first-order formulas and types in model theory, not propositional logic formulas over a fixed set PV.
  - `logic:formula`: OK

## 「辞書式順序」 in 01-foundations/02-model-theory/02-types-and-countable-models
- Default: `set:well-order-sum-product-def` → **no candidate fits**
- Pages: 02-countable-models.html, 04-indiscernibles.html
- Sentence: $\mathrm{Th}(\Z,<)$ は $\omega$ 範疇的でないことを、$(\Z,<)$ と $(\Z\times\Z,<_{\mathrm{lex}})$（辞書式順序）を比べて示せ。（$(\Z\times\Z,<_{\mathrm{lex}})\equiv(\Z,<)$ は認めてよい。）
  - `set:well-order-sum-product-def`: NG — It refers to the lexicographic order on $\Z\times\Z$, not the well-order product $\mathbf{A}\otimes\mathbf{B}$ defined on well-ordered sets.
  - `top:double-arrow`: NG — It refers to the lexicographic order on $\Z\times\Z$, not the specific order on $[0,1]\times\{0,1\}$ defining the double arrow space.

## 「順序数の和」 in 01-foundations/02-model-theory/02-types-and-countable-models
- Default: `set:ordinal-addition` → **no candidate fits**
- Pages: 03-saturated-models.html
- Sentence: - 基数 $\kappa$ について $\kappa^{+}$ は次の基数で、選択公理のもとで正則である（\ref{set:successor-regular}）：$\kappa^{+}$ 未満の長さの列の上界は $\kappa^{+}$ 未満で、濃度 $\le\kappa$ の集合の $\kappa^{+}$ 未満の順序数の和は $\kappa^{+}$ 未満。
  - `set:ordinal-addition`: NG — Here "順序数の和" refers to a sum of order types indexed below $\kappa^{+}$ (an iterated ordinal sum), not the binary ordinal addition $\alpha+\beta$ defined by the card.
  - `cat:simplicial-category`: NG — This "順序数の和" refers to the sum of ordinals in set theory (an ordinal arithmetic operation), not the monoidal sum functor $+\colon\Delta\times\Delta\to\Delta$ on the simplex category defined in the card.

## 「上限」 in 01-foundations/02-model-theory/03-ultraproducts
- Default: `calc:supremum` → **no candidate fits**
- Pages: 01-ultraproducts.html
- Sentence: 明の比較.** \ref{logic:compactness} の証明は「充足可能でない $\Rightarrow$ 矛盾が導ける（完全性）$\Rightarrow$ 導出は有限の前提しか使わない」と、構文論を経由する。ここでの証明は、有限部分のモデルたちを「多数決」で貼り合わせて直接モデルを作る。前者はモデルの濃度の上限 $\lvert\mathcal{L}\rvert+\aleph_{0}$ も同時に与えるが、後者で作られる超積は一般に大きい。濃度を小さくするには、\ref{model:downward-lowenheim-skolem}を後から適用すればよい。
  - `calc:supremum`: NG — Here "上限" means an upper bound on the cardinality (a maximum possible value), not the least upper bound (supremum) of a subset as defined in the card.
  - `set:order-dedekind-complete`: NG — Here 上限 means an upper bound on the cardinality (a supremum/bound in the sense of size), not the least upper bound of a bounded subset in a total order as defined in the card.
  - `logic:rm-analysis-defs`: NG — Here "上限" means an upper bound on the cardinality of a model, not the least upper bound (supremum) of a real sequence as defined in the card.

## 「論理式」 in 01-foundations/02-model-theory/03-ultraproducts
- Default: `logic:prop-formula` → **fits: `logic:formula`**
- Pages: 01-ultraproducts.html, 02-ultrapower-saturation.html
- Sentence: 構造の族から「添字の大多数で成り立つことが成り立つ」ような一つの構造を作る方法が**超積**である。「大多数」を測る道具が**超フィルター**で、**ウォシュの定理**は、論理式が超積で成り立つことと、成り立つ添字の集合が超フィルターに属することが同値であることを主張する。これを使うと、\ref{logic:compactness}を、証明体系も完全性定理も使わずに、意味論だけで証明できる。命題論理での同じ議論（\ref{logic:page-prop-compactness} の証明 3）の
  - `logic:prop-formula`: NG — This "論理式" refers to first-order formulas in model theory (Łoś's theorem), not the propositional formulas defined by the card.
  - `logic:formula`: OK

## 「連続」 in 01-foundations/02-model-theory/03-ultraproducts
- Default: `top:continuous` → **no candidate fits**
- Pages: 01-ultraproducts.html
- Sentence: 単項超フィルターが $I$ の点、非単項超フィルターが「無限遠の点」にあたる。超積 $\prod_{i}\mathcal{M}_{i}/U$ は、族 $i\mapsto\mathcal{M}_{i}$ の、点 $U\in\beta I$ での「極限」とみなせる。ウォシュの定理は「真理値はこの極限操作と可換である」という連続性の主張であり、コンパクト性定理の名前との関係（\tref{logic:compactness} の後の補足）もこの見方から理解できる。これらは一般的な見方として述べられるもので、本サイトでは圏論的な定式化の詳細は扱わない。
  - `top:continuous`: NG — Here "連続性" refers to a truth-value/limit operation commuting (a continuity heuristic in model theory), not the topological continuity of a map between topological spaces defined in the card.
  - `comp:monotone-continuous`: NG — Here "連続性" refers to a continuity/commutation property in model theory (truth values commuting with an ultralimit), not the monotone/continuous map on $\mathcal{P}(\Sigma^{\ast})^{n}$ defined in the card.
  - `cx:limit-continuity`: NG — Here "連続性" refers to a metaphorical continuity of truth values under an ultralimit, not the epsilon-delta continuity of a complex function defined in the card.

## 「閉包」 in 01-foundations/02-model-theory/03-ultraproducts
- Default: `logic:ltl-size` → **no candidate fits**
- Pages: 01-ultraproducts.html
- Sentence: l:ultrafilter-basic.1}, \ref[3]{model:ultrafilter-basic.3}）。ただのフィルター $\mathcal{F}$ で作った**被約積** $\prod_{i}\mathcal{M}_{i}/\mathcal{F}$ では、Step 1–3 と、Step 6 の上方への閉包は成り立つが、Step 4 が崩れ、否定を含む論理式で定理が成り立たない。
  - `logic:ltl-size`: NG — Here "閉包" refers to closure under an upward operation on a filter (upper closure), not the closure CL(A) of a logical formula defined in the card.
  - `logic:ctl-closure`: NG — Here "閉包" refers to closure under an upward operation (upward closure of a set/filter), not the minimal formula-closed set CL(A) defined in the card.
  - `set:finitary-closure`: NG — Here "閉包" refers to upward closure of a filter (closure under supersets), not the closure of a set under a set of finitary operations as defined in the card.
  - `set:pred-closure`: NG — Here "閉包" refers to closure of a set under an operation (upward closure), not the well-founded set-theoretic closure cl(A,x,R) defined in the card.
  - `top:interior-closure`: NG — Here "閉包" refers to closure under an operation (upward closure of a set), not the topological closure of a subset.

## 「ランク」 in 01-foundations/02-model-theory/04-uncountable-categoricity
- Default: `logic:ctl-fulfil-sets` → **no candidate fits**
- Pages: 07-morley.html
- Sentence: 0}$ 範疇性を型空間の有限性で特徴づける。モーリーの定理は非可算範疇性を「$\omega$ 安定性 ＋ ヴォート対の非存在」で特徴づける。両方を満たす理論（完全に範疇的な理論）には、無限集合、標数 $p$ の無限体上のベクトル空間などがあり、代数的閉体は非可算でのみ範疇的である。モーリーの定理の証明で導入された概念（ランク、強極小集合、素モデル）は、シェラハの分類理論や、ザイルバー・フルショフスキーの幾何的モデル理論の出発点になったとされる。
  - `logic:ctl-fulfil-sets`: NG — In the sentence, ランク refers to a model-theoretic rank (Morley rank), not the minimal k for v∈G^A_k defined in the card.
  - `logic:attractor`: NG — This "ランク" refers to Morley rank in model theory, not the parity-game rank defined in the card.
  - `comp:tree-rank`: NG — Here "ランク" refers to Morley rank in model theory, not the rank of a well-founded tree as defined in the card.
  - `set:rank`: NG — Here "ランク" refers to Morley rank in model theory, not the set-theoretic rank of a well-founded set.
  - `set:relation-rank`: NG — Here "ランク" refers to Morley rank in model theory, not the rank of a well-founded relation.
  - `pt:world-rank`: NG — This "ランク" refers to Morley rank in model theory, not the rank of a world in a finite transitive irreflexive frame.

## 「上界」 in 01-foundations/02-model-theory/04-uncountable-categoricity
- Default: `set:chain-maximal` → **no candidate fits**
- Pages: 05-strongly-minimal.html, 06-dimension.html, 07-morley.html
- Sentence: model:minimal-formula}）：定義可能な部分集合がすべて有限か補有限であり、その性質がどの初等拡大でも保たれる無限集合である。代数的閉体全体はその典型である。本ページでは、**代数的閉包**（\ref{model:algebraic-closure}）を定義し、強極小性が「有限か補有限かの判定に一様な上界があること」と同値であること（\ref{model:strongly-minimal-uniform}）、$\omega$ 安定な理論のモデルには極小な論理式があること（\ref{model:minimal-exists}）、ヴォート対がなければ極小な論理式は強極小であること（\ref{model:minimal-st
  - `set:chain-maximal`: NG — Here "上界" refers to a uniform bound on the size of finite/complement-finite sets, not an upper bound of a subset in a poset as defined in the card.
  - `calc:supremum`: NG — Here "上界" refers to a uniform bound on the size of finite/complement-finite sets in a model-theoretic context, not the order-theoretic upper bound of a subset of a totally ordered set as defined in the card.

## 「上限」 in 01-foundations/02-model-theory/04-uncountable-categoricity
- Default: `calc:supremum` → **no candidate fits**
- Pages: 08-morley-rank.html
- Sentence: **1 ⇒ 2.** $\mathcal{M}\models T$ を固定する。$\mathcal{L}_{M}$ 論理式は集合をなすので、$\infty$ でない階数全体の上限 $\beta$ があり、$\alpha_{0}\defeq\beta+1$ とおく。階数が $\ge\alpha_{0}$ の論理式は階数 $\infty$ である。$\Phi\defeq\{\varphi:\mathrm{RM}(\varphi)=\infty\}$ が空でないとして、二分木の補題（\tref{mo
  - `calc:supremum`: NG — Here "上限" refers to the supremum of a set of ordinal ranks in model theory, which is the same order-theoretic notion of least upper bound defined in the card.
  - `set:order-dedekind-complete`: NG — Here 上限 means the supremum of a set of ordinals (ranks), which is the same general notion of least upper bound as in the definition, so it matches.
  - `logic:rm-analysis-defs`: NG — Here "上限" means the least upper bound of a set of ordinals/ranks, not the upper bound of a real sequence as defined in the card.

## 「代入」 in 01-foundations/02-model-theory/04-uncountable-categoricity
- Default: `logic:substitution` → **no candidate fits**
- Pages: 01-stability.html
- Sentence: \vec{s}(a_{\vec{y}})/A)=\mathrm{tp}(\vec{s}(a_{\vec{z}})/A)$ である。実際、$A$ 上の論理式 $\varphi(\vec{v},a_{1},\dots,a_{l})$ について、$a_{j}=t_{a_{j}}(a_{\vec{i}_{a_{j}}})$ を代入すると、$\varphi(\vec{s}(a_{\vec{y}}),\vec{a})$ は、$\vec{y}$ と $\vec{x}\defeq\vec{i}_{a_{1}}\cdots\vec{i}_{a_{l}}$（$X$ の元）の成分を並べた組についての $\mathcal{L}^{\mathrm{Sk}}$ 論
  - `logic:substitution`: NG — This is model-theoretic substitution of tuples into formulas, not the syntactic term/ formula substitution operation defined in the card.
  - `logic:modal-substitution`: NG — This "代入" refers to substituting terms into a first-order formula in a model-theoretic context, not the modal-logic substitution map σ: PV → MForm defined in the card.
  - `logic:mu-substitution`: NG — This "代入" is substitution of elements/terms into a formula in a model-theoretic (Skolem) context, not the capture-avoiding syntactic substitution $A[B/X]$ of the modal $\mu$-calculus defined in the card.
  - `logic:lambda-substitution`: NG — This use of 代入 refers to substituting terms into a first-order formula (model theory), not the capture-avoiding substitution of the untyped lambda calculus defined in the card.

## 「充足可能」 in 01-foundations/02-model-theory/04-uncountable-categoricity
- Default: `logic:tautology` → **fits: `logic:model`**
- Pages: 05-strongly-minimal.html
- Sentence: $\Sigma$ の有限部分は充足可能である：それが含む $\exists^{>k}$ の最大の $k$ をとる。仮定から、あるモデル $\mathcal{M}$ と $\vec{b}\in M$ で $k<\lvert\psi(\mathcal{M},\vec{b})\rvert<\infty$ となるものがある。上昇レーヴェンハイム–スコーレムの定理で
  - `logic:tautology`: NG — Here "充足可能" refers to satisfiability of a set of first-order sentences in a model (semantic satisfiability in a structure), not the propositional truth-assignment satisfiability defined in the card.
  - `logic:model`: OK

## 「原子論理式」 in 01-foundations/02-model-theory/04-uncountable-categoricity
- Default: `logic:prop-formula` → **fits: `logic:formula`**
- Pages: 03-vaught-pairs.html
- Sentence: $f\defeq\bigcup_{k}f_{k}$ は全単射で、すべての有限組の型を保つので、とくに原子論理式を保ち、同型である。
  - `logic:prop-formula`: NG — Here "atomic formula" refers to atomic formulas of first-order/predicate logic (involving terms and predicates), not the propositional atomic formulas defined in the card.
  - `logic:formula`: OK

## 「合成」 in 01-foundations/02-model-theory/04-uncountable-categoricity
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 02-omega-stable.html, 07-morley.html
- Sentence: **Step 1（孤立の合成）.** $\mathrm{tp}(\vec{e}/A)$ が $\chi(\vec{y})$ で孤立し、$\mathrm{tp}(b/A\vec{e})$ が $\theta(x,\vec{e})$（$A$ のパラメータを含んでよい）で孤立するなら、$\mathrm{tp}(b\vec{e}/A)$ は $\chi(
  - `logic:pdl-syntax`: NG — Here "合成" refers to composing types (isolated types), not the PDL program composition operation α;β defined in the card.
  - `logic:while-program`: NG — Here "合成" refers to composing types/tuples in model theory, not the sequential composition of while-programs defined in the card.
  - `set:relation-composition`: NG — This "合成" refers to composing types in model theory, not the composition of two relations as defined in the card.
  - `cat:category`: NG — This "合成" refers to composing types (isolated types) in model theory, not composition of morphisms in a category as defined in the card.
  - `cat:non-symmetric-operad`: NG — This "合成" refers to composing types (isolated types) in model theory, not the operad composition operation γ defined in the card.

## 「後続」 in 01-foundations/02-model-theory/04-uncountable-categoricity
- Default: `logic:ctl-semantics` → **no candidate fits**
- Pages: 02-omega-stable.html, 03-vaught-pairs.html, 04-no-vaught-pairs.html
- Sentence: a}:\alpha<\gamma\}$ を構成可能な並べ方とし、初等的な $f\colon A\to N'$ をとる。$f_{\alpha}\colon A\cup B_{\alpha}\to N'$ を、$f_{0}\defeq f$ から初等的に延ばしていく。極限では和集合（有限組は途中の段に含まれるので初等的）。後続段：$\mathrm{tp}(b_{\alpha}/A\cup B_{\alpha})$ を孤立させる $\theta(x,\vec{d})$（$\vec{d}\subseteq A\cup B_{\alpha}$）をとる。$\mathcal{M}\models\exists x\,\theta(x,\vec{d})$
  - `logic:ctl-semantics`: NG — Here "後続段" means "successor stage" in a transfinite construction, not a successor state in a CTL Kripke model.
  - `logic:ctl-successor-def`: NG — Here "後続段" means a successor stage in a transfinite construction, not the modal-logic successor relation on worlds defined in the card.
  - `logic:parity-game`: NG — Here "後続段" means "successor stage" in a transfinite construction, not a successor vertex in a parity game arena.

## 「推移的」 in 01-foundations/02-model-theory/04-uncountable-categoricity
- Default: `logic:relation-properties` → **no candidate fits**
- Pages: 08-morley-rank.html
- Sentence: }$ 論理式 $\psi(x)$ のパラメータの有限集合を $F$ とすると、$F$ を固定する $G$ の元は $\psi(\mathcal{M})$ を保つ（同型は論理式の真偽を保つ）。$G$ のうち $F$ を固定する元は、$P\setminus F$ と $\neg P\setminus F$ のそれぞれの上で推移的に働くので、$\psi(\mathcal{M})\setminus F$ は、$P\setminus F$, $\neg P\setminus F$ のそれぞれを丸ごと含むか、交わらない。よって $\psi(\mathcal{M})$ は、$P$ の有限・補有限部分集合と、$\neg P$ の有限・補有限部分集合の和で
  - `logic:relation-properties`: NG — Here "推移的" describes a group action being transitive on a set, not a binary relation on $W$ being transitive.
  - `set:transitive-set`: NG — Here "推移的に働く" means the group acts transitively on a set, not that the set is transitive in the ordinal/set-theoretic sense of the definition card.
  - `grp:faithful-transitive`: NG — Here "推移的に働く" refers to a group acting transitively on each of the two sets $P\setminus F$ and $\neg P\setminus F$, which matches the card's definition of a transitive action (for every $x,y$ there is $g$ with $g\cdot x=y$).

## 「有界」 in 01-foundations/02-model-theory/04-uncountable-categoricity
- Default: `calc:supremum` → **no candidate fits**
- Pages: 08-morley-rank.html
- Sentence: 階数 $\alpha$ の論理式 $\psi\vdash\varphi$ が**有界**であるとは、$\psi$ の $d$ 分割が存在する $d$ に上限があることをいう。
  - `calc:supremum`: NG — This "bounded" refers to a property of a formula/partition having an upper bound on $d$, not the order-theoretic boundedness (having both upper and lower bounds) defined in the card.
  - `logic:rm-analysis-defs`: NG — This "bounded" refers to a bounded rank/d-degree of formulas in reverse mathematics, not a bounded real sequence as defined in the card.

## 「次元」 in 01-foundations/02-model-theory/04-uncountable-categoricity
- Default: `lin:dimension` → **no candidate fits**
- Pages: 05-strongly-minimal.html, 06-dimension.html, 07-morley.html, 08-morley-rank.html
- Sentence: **似た定理.** 代数的閉包は、体論の代数閉包の一般化である。$\mathrm{acl}$ は一般に「交換法則」を満たさないが、強極小集合の中では満たし、線形代数の一次独立・次元と同じ理論が展開できる（次ページ）。o 極小構造（順序構造で定義可能な $1$ 変数集合が区間の有限和になるもの）でも同様の理論があることが知られている。
  - `lin:dimension`: NG — Here "次元" refers to the dimension notion in linear algebra (matroid-like independence theory), which is the same notion as the vector-space dimension defined in the card.
  - `cat:trace-dimension`: NG — Here "次元" refers to the dimension in linear algebra (basis cardinality), not the categorical trace/dimension of a self-map defined via duality in a monoidal category.
  - `ring:krull-dimension`: NG — Here "次元" refers to the dimension in linear algebra (basis cardinality), not the Krull dimension of a ring defined in the card.
  - `ag:dimension`: NG — Here "次元" refers to the dimension in linear algebra (dimension of a vector space/matroid), not the dimension of a topological space defined via chains of irreducible closed subsets.

## 「論理式」 in 01-foundations/02-model-theory/04-uncountable-categoricity
- Default: `logic:prop-formula` → **fits: `logic:formula`**
- Pages: 01-stability.html, 02-omega-stable.html, 03-vaught-pairs.html, 04-no-vaught-pairs.html, 05-strongly-minimal.html, 06-dimension.html, 07-morley.html, 08-morley-rank.html
- Sentence: 、$S_{n}^{\mathcal{M}}(A)$ は $A$ 上の $n$ 変数の完全型の全体である（\ref{model:saturated}）。組 $\vec{b}$ の $A$ 上の型を $\mathrm{tp}^{\mathcal{M}}(\vec{b}/A)$ と書く。$\mathcal{L}_{A}$ の論理式は $\lvert A\rvert+\aleph_{0}$ 個なので $\lvert S_{n}^{\mathcal{M}}(A)\rvert\le2^{\lvert A\rvert+\aleph_{0}}$。
  - `logic:prop-formula`: NG — Here "論理式" means formulas of the expanded language $\mathcal{L}_{A}$ in first-order (predicate) logic, not propositional formulas built from $\mathrm{PV}$ as defined in the card.
  - `logic:formula`: OK

## 「閉包」 in 01-foundations/02-model-theory/04-uncountable-categoricity
- Default: `logic:ltl-size` → **no candidate fits**
- Pages: 06-dimension.html
- Sentence: **似た定理.** 交換法則を満たす閉包作用素（単調・冪等・有限性・交換）を**前幾何**（マトロイド）といい、線形代数（一次従属）、体論（代数的従属）、グラフ理論（閉路）に共通の構造である。ザイルバーの三分法予想（強極小集合の前幾何は自明・ベクトル空間的・体的のいずれか）は、一般には否定された（フルショフスキーの構成）が、ザリスキー幾何などの条件のもとでは
  - `logic:ltl-size`: NG — This "閉包作用素" is a closure operator in matroid/pregeometry theory (monotone, idempotent, finitary, exchange), not the syntactic closure CL(A) of an LTL formula defined in the card.
  - `logic:ctl-closure`: NG — This "閉包作用素" is a closure operator in matroid/pregeometry theory (monotone, idempotent, finitary, exchange), not the CTL closure set CL(A) of subformulas defined in the card.
  - `set:finitary-closure`: NG — This "閉包作用素" is a closure operator in the order-theoretic/topological sense (monotone, idempotent, finitary, exchange), not the set-theoretic closure of a subset under a family of finitary operations defined in the card.
  - `set:pred-closure`: NG — This “閉包” refers to a closure operator (monotone, idempotent, finitary, exchange), not the set-theoretic closure cl(A,x,R) defined in the card.
  - `top:interior-closure`: NG — Here "閉包" refers to a closure operator in matroid/pregeometry theory, not the topological closure of a subset defined in the card.

## 「プログラム」 in 01-foundations/03-computation/01-automata
- Default: `logic:pdl-syntax` → **fits: `logic:while-program`**
- Pages: 06-fixed-points.html
- Sentence: - *クリーネの（第二）再帰定理*（\tref{comp:second-recursion-theorem}, \tref{comp:recursion-theorem}）：プログラムの**コード**の上の不動点で、順序や距離を使わず、対角化で得られる。
  - `logic:pdl-syntax`: NG — Here "プログラム" refers to computer programs in general (codes of programs), not the inductively defined PDL programs of the card.
  - `logic:while-program`: OK

## 「代入」 in 01-foundations/03-computation/01-automata
- Default: `logic:substitution` → **no candidate fits**
- Pages: 02-regular-expressions.html, 06-fixed-points.html
- Sentence: 2. $X$ を解とする。$X=AX\cup B$ を $n$ 回代入すると（$n$ に関する帰納法と分配法則）、
  - `logic:substitution`: NG — This is iterative substitution of an expression into an equation, not the formal substitution of a term for a variable in first-order logic terms/formulas.
  - `logic:modal-substitution`: NG — This "代入" means substituting an expression into an equation iteratively, not the modal-logic substitution map σ on propositional variables defined in the card.
  - `logic:mu-substitution`: NG — This "代入" means repeatedly substituting an expression into an equation, not the capture-avoiding substitution of a formula for a variable in a modal μ-formula as defined in the card.
  - `logic:lambda-substitution`: NG — This "代入" means substituting an expression into an equation repeatedly, not the lambda-calculus substitution operation \(M[N/x]\) defined on the card.

## 「合成」 in 01-foundations/03-computation/01-automata
- Default: `logic:pdl-syntax` → **fits: `set:relation-composition`**
- Pages: 01-finite-automata.html
- Sentence: で記述できる言語のことであり、代数的には「$\Sigma^{\ast}$ から有限モノイドへの準同型の、ある部分集合の逆像」として特徴づけられる（統語モノイド）。NFA は、写像の代わりに $Q\to\mathcal{P}(Q)$ という「多価な写像」（関係）を使う機械で、部分集合構成は、関係の合成を冪集合の上の写像の合成に直す操作――圏論で言えば冪集合モナドのクライスリ圏から集合の圏への移行――に当たる。たとえれば、NFA は分身の術を使える旅人で、部分集合構成は「すべての分身の居場所を一枚の地図に書き込みながら一人で旅をする」ことである。
  - `logic:pdl-syntax`: NG — Here "合成" refers to composition of relations (relation composition), not the PDL program composition operator α;β defined in the card.
  - `logic:while-program`: NG — Here "合成" refers to composition of relations/maps in automata theory, not the sequential composition P;Q of while programs defined in the card.
  - `set:relation-composition`: OK

## 「推論規則」 in 01-foundations/03-computation/01-automata
- Default: `logic:deduction-system` → **no candidate fits**
- Pages: 02-regular-expressions.html
- Sentence: - *クリーネ代数.* 正規表現の間の等式は、$\cup,\circ,{}^{\ast},\varnothing,\varepsilon$ についての有限個の公理と、アーデンの補題に当たる推論規則（$ax+b\le x\Rightarrow a^{\ast}b\le x$）から導けることが知られている（コーゼンによるクリーネ代数の完全性）。問題 \ref{comp:prob-arden-ends-01} の二つの式が等しいことも、この体系で導ける。
  - `logic:deduction-system`: NG — This "推論規則" refers to an inference rule in Kleene algebra (Arden's lemma), not the natural deduction derivation rules defined in the card.
  - `pt:pa-x`: NG — Here "推論規則" refers to an inference rule of Kleene algebra (Arden's lemma), not the inference rules of the sequent calculus PA(X) defined in the card.

## 「準同型」 in 01-foundations/03-computation/01-automata
- Default: `ring:homomorphism` → **fits: `grp:homomorphism`**
- Pages: 01-finite-automata.html
- Sentence:  を対応させ、\ref{comp:delta-hat} により自由モノイド $\Sigma^{\ast}$ の $Q$ への（右）作用を与える。正規言語とは、有限集合への作用と、その部分集合 $F$ と、一点 $q_{0}$ で記述できる言語のことであり、代数的には「$\Sigma^{\ast}$ から有限モノイドへの準同型の、ある部分集合の逆像」として特徴づけられる（統語モノイド）。NFA は、写像の代わりに $Q\to\mathcal{P}(Q)$ という「多価な写像」（関係）を使う機械で、部分集合構成は、関係の合成を冪集合の上の写像の合成に直す操作――圏論で言えば冪集合モナドのクライスリ圏から集合の圏への移行――に当たる。たとえれば
  - `ring:homomorphism`: NG — Here "準同型" refers to a monoid homomorphism between free monoids, not a ring homomorphism as defined in the card.
  - `cat:t-algebra`: NG — Here "準同型" means a monoid homomorphism between monoids, not a homomorphism of T-algebras as defined in the card.
  - `grp:homomorphism`: OK

## 「経路」 in 01-foundations/03-computation/01-automata
- Default: `logic:ctl-semantics` → **no candidate fits**
- Pages: 02-regular-expressions.html
- Sentence: - **DFA であること**：\ref{comp:dfa-equations} で $\hat{\delta}(i,av)=\hat{\delta}(\delta(i,a),v)$ を使った。NFA でも、$X_{i}$ を「$i$ から受理状態に至る経路のラベル全体」とし、$\varepsilon$ 遷移を除いておけば同じ形の方程式が得られる。
  - `logic:ctl-semantics`: NG — Here "経路" means a path in an automaton (a sequence of transitions), not a path in a CTL Kripke model as defined in the card.
  - `logic:erdos-rado-tree`: NG — Here "経路" means a path in an automaton (a sequence of transitions), not the Erdős–Rado tree path σ_{j} defined in the card.

## 「連続」 in 01-foundations/03-computation/01-automata
- Default: `top:continuous` → **no candidate fits**
- Pages: 05-cfl-pumping.html
- Sentence: ^{\ast}1^{\ast}0^{\ast}1^{\ast})=\{0^{m}1^{n}0^{m}1^{n}:m,n\ge0\}$ も文脈自由。反復長 $p$ をとり $s\defeq0^{p}1^{p}0^{p}1^{p}=uvxyz$ とする。$\lvert vxy\rvert\le p$ なので、$vxy$ は連続する二つのブロック（$0^{p}$ と $1^{p}$ など）の範囲に収まる。$v$ か $y$ が二種類の文字を含めば $uv^{2}xy^{2}z$ は $0^{\ast}1^{\ast}0^{\ast}1^{\ast}$ の形でない。そうでなければ、$vy$ が触れるのは高々二つの隣り合うブロックで、繰り返すとそ
  - `top:continuous`: NG — Here "連続する" means "consecutive/adjacent" (blocks), not the topological notion of a continuous map.
  - `comp:monotone-continuous`: NG — Here "連続する" means "consecutive/adjacent" blocks, not the continuity of a function as defined in the card.
  - `cx:limit-continuity`: NG — Here "連続する" means "consecutive/adjacent" (blocks), not the continuity of a complex function defined in the card.

## 「閉包」 in 01-foundations/03-computation/01-automata
- Default: `logic:ltl-size` → **no candidate fits**
- Pages: 01-finite-automata.html, 02-regular-expressions.html, 07-deterministic-cfl.html
- Sentence: - **$\varepsilon$ 閉包**：開始状態 $E(\{q_{0}\})$ と $\delta'$ の両方に $E$ を入れたことで、$\varepsilon$ 遷移がどの時点に入っても追跡できる（\ref{comp:reach-recursion}）。
  - `logic:ltl-size`: NG — This "ε閉包" is the epsilon-closure of an automaton's state set, not the closure CL(A) of a logical formula defined in the card.
  - `logic:ctl-closure`: NG — This "$\varepsilon$ 閉包" is the epsilon-closure of an automaton state set, not the modal-logic closure set $\mathrm{CL}(A)$ defined in the card.
  - `set:finitary-closure`: NG — Here "閉包" refers to the ε-closure of a state set in an automaton, not the closure of a subset under finitary operations as defined in the card.
  - `set:pred-closure`: NG — Here "$\varepsilon$ 閉包" refers to the epsilon-closure of an automaton state set, not the well-founded-set closure $\mathrm{cl}(\mathbf{A},x,\mathbf{R})$ defined in the card.
  - `top:interior-closure`: NG — Here "閉包" refers to ε-closure in automata theory, not the topological closure of a subset.

## 「プログラム」 in 01-foundations/03-computation/02-computability
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 01-language-L.html, 03-ackermann.html, 04-recursive-functions.html, 05-register-machines.html, 07-turing-completeness.html, 09-reducibility.html, 11-universal-smn.html, 12-recursion-theorem.html, 13-models-summary.html
- Sentence: する。L は、変数への代入（$0$ の代入、$1$ を足す、$1$ を引く、変数の写し）、逐次実行、回数を決めた繰り返し $\mathtt{for}$、条件つきの繰り返し $\mathtt{while}$ だけをもつ小さな言語である。チューリング機械（\ref{comp:turing-machine}）よりも、普段書くプログラムに近いので直感的にとらえやすい。L で計算できる部分関数を**計算可能**と呼び（\ref{comp:L-computable}）、後のページで、原始再帰関数（$\mathtt{while}$ を除いた L）、一般再帰関数、レジスタ機械、チューリング機械と比べる。
  - `logic:pdl-syntax`: NG — the sentence uses "プログラム" for programs in a small imperative language L, not the inductively defined PDL programs built from atomic programs with composition, choice, iteration, and test.
  - `logic:while-program`: NG — While the sentence's "プログラム" refers to programs in a small language L that includes `for` loops, the card defines "プログラム" as a specific inductively generated while-program grammar that has no `for` construct, so the term as used is broader than the card's definition.

## 「上限」 in 01-foundations/03-computation/02-computability
- Default: `calc:supremum` → **no candidate fits**
- Pages: 01-language-L.html, 02-primitive-recursive.html, 03-ackermann.html, 04-recursive-functions.html, 05-register-machines.html, 07-turing-completeness.html
- Sentence: - 変数の値を自然数に限ったので、L のプログラムは「無限に大きいメモリをもつ機械」の模型である。変数の値に上限 $N$ を設けると（$N$ を超える足し算は $N$ に止める、など）、状態は有限個しかなく、計算できるものは本質的に有限オートマトン（\ref{comp:dfa}）と同じ程度になる。
  - `calc:supremum`: NG — Here "上限" means an imposed maximum value or cap on variables, not the least upper bound (supremum) of a set as defined in the card.
  - `set:order-dedekind-complete`: NG — Here 上限 means an upper bound/limit placed on variable values, not the least upper bound (supremum) defined in the card.
  - `logic:rm-analysis-defs`: NG — Here "上限" means an upper bound/limit on variable values, not the least upper bound (supremum) of a real sequence as defined in the card.

## 「代入」 in 01-foundations/03-computation/02-computability
- Default: `logic:substitution` → **no candidate fits**
- Pages: 01-language-L.html, 02-primitive-recursive.html, 04-recursive-functions.html, 11-universal-smn.html, 12-recursion-theorem.html
- Sentence: 本ページから、計算可能性を**プログラミング言語 L** によって定義する。L は、変数への代入（$0$ の代入、$1$ を足す、$1$ を引く、変数の写し）、逐次実行、回数を決めた繰り返し $\mathtt{for}$、条件つきの繰り返し $\mathtt{while}$ だけをもつ小さな言語である。チューリング機械（\ref{comp:turing-machine}）よりも、普段書くプログラムに近いので直感的
  - `logic:substitution`: NG — This "代入" refers to assignment operations in a programming language, not the substitution of a term for a variable in first-order logic.
  - `logic:modal-substitution`: NG — This "代入" refers to assignment in a programming language, not the substitution map on modal logic formulas defined in the card.
  - `logic:mu-substitution`: NG — This "代入" refers to assignment of values to variables in a programming language, not substitution of a formula for a variable in a modal μ-calculus formula.
  - `logic:lambda-substitution`: NG — This "代入" refers to assignment to a variable in a programming language, not the capture-avoiding substitution of a term for a variable in lambda calculus.

## 「合成」 in 01-foundations/03-computation/02-computability
- Default: `logic:pdl-syntax` → **fits: `logic:while-program`**
- Pages: 01-language-L.html, 02-primitive-recursive.html, 03-ackermann.html, 04-recursive-functions.html, 06-turing-machines.html, 10-mapping-reducibility.html, 11-universal-smn.html, 13-models-summary.html
- Sentence: こと（\ref{comp:L-determinism}）、現れない変数は書き換えられないこと（\ref{comp:L-locality}）、$\mathtt{for}$ だけのプログラムは必ず停止すること（\ref{comp:for-total}）を示し、よく使う命令の略記（\tref{comp:L-macros}）と合成についての閉包性（\ref{comp:L-composition}）を準備する。
  - `logic:pdl-syntax`: NG — Here "合成" refers to composition of loop programs/commands in a programming language, not the PDL program composition operator α;β defined in the card.
  - `logic:while-program`: OK

## 「有界」 in 01-foundations/03-computation/02-computability
- Default: `calc:supremum` → **fits: `logic:rm-analysis-defs`**
- Pages: 02-primitive-recursive.html, 07-turing-completeness.html, 11-universal-smn.html
- Sentence: for ループに直すだけである。他方向（\ref{comp:for-to-pr}）では、for ループが状態の各成分を**同時に**更新することを、組のコード化（\ref{comp:pairing-pr}）で一つの原始再帰にまとめる（\ref{comp:simultaneous-recursion}）。その準備として、有界な量化と有界な最小化についての閉包性（\ref{comp:pr-closure}）を示す。
  - `calc:supremum`: NG — Here "有界な量化" means bounded quantification in computability theory, not the order-theoretic boundedness of a set in an ordered field.
  - `logic:rm-analysis-defs`: OK

## 「直積」 in 01-foundations/03-computation/02-computability
- Default: `set:cartesian-product` → **no candidate fits**
- Pages: 08-decidability.html
- Sentence: 3. 対称差 $(L(B)\cap\overline{L(C)})\cup(\overline{L(B)}\cap L(C))$ を認識する DFA $D$ を直積構成（\ref{comp:dfa-boolean}）で作り、2 の判定機で $L(D)=\varnothing$ かどうかを判定する。
  - `set:cartesian-product`: NG — Here "直積" refers to the product construction of DFAs (直積構成), not the Cartesian product of two sets as defined in the card.
  - `grp:direct-product`: NG — Here 直積 refers to the product construction of DFAs, not the direct product of groups defined in the card.
  - `mod:direct-sum`: NG — This "直積" refers to the product construction of DFAs, not the direct product of modules defined in the card.

## 「論理式」 in 01-foundations/03-computation/02-computability
- Default: `logic:prop-formula` → **fits: `logic:formula`**
- Pages: 06-turing-machines.html
- Sentence: - *再帰関数との関係.* 自然数上の部分関数がチューリング機械で計算可能であることと、μ 再帰的（原始再帰関数から合成・原始再帰・最小化で得られる）であることは同値であることが知られている。不完全性定理の系列の $\Sigma$ 論理式による定義可能性（\ref{pt:page-peano-arithmetic}）とも結びつく。
  - `logic:prop-formula`: NG — Here "論理式" refers to Σ-formulas in first-order arithmetic, not propositional formulas over a fixed PV.
  - `logic:formula`: OK

## 「閉包」 in 01-foundations/03-computation/02-computability
- Default: `logic:ltl-size` → **no candidate fits**
- Pages: 01-language-L.html, 02-primitive-recursive.html, 04-recursive-functions.html, 07-turing-completeness.html, 11-universal-smn.html
- Sentence: {comp:L-determinism}）、現れない変数は書き換えられないこと（\ref{comp:L-locality}）、$\mathtt{for}$ だけのプログラムは必ず停止すること（\ref{comp:for-total}）を示し、よく使う命令の略記（\tref{comp:L-macros}）と合成についての閉包性（\ref{comp:L-composition}）を準備する。
  - `logic:ltl-size`: NG — Here "閉包性" refers to closure under composition of a programming language, not the closure CL(A) of a logical formula defined in the card.
  - `logic:ctl-closure`: NG — Here 閉包性 refers to closure under composition of a programming language, not the modal-logic closure set CL(A) defined in the card.
  - `set:finitary-closure`: NG — Here "閉包性" refers to closure under composition of a program class, not the set-theoretic closure of a subset under a family of finitary operations defined in the card.
  - `set:pred-closure`: NG — Here "閉包性" means closure property (closed under composition), not the transitive closure set cl(A,x,R) defined in the card.
  - `top:interior-closure`: NG — Here "閉包性" means closure under composition, not the topological closure of a set.

## 「プログラム」 in 01-foundations/03-computation/03-advanced-computability
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 06-hyperarithmetic.html, 11-rice-shapiro.html, 12-index-set-completeness.html
- Sentence: 意性から直ちに出る。「⊇」は、前々ページの層別（\ref{comp:delta11-criterion}）で $\Delta^{1}_{1}$ 集合の木の深さを計算可能な $\alpha$ 未満に押さえ、深さ $\alpha$ 未満であることを、整列順序に沿ったジャンプの塔で一段ずつ判定することで示す。その判定を一つのプログラムにまとめるのに、再帰定理（\tref{comp:second-recursion-theorem}）を使う（**実効的超限再帰**）。
  - `logic:pdl-syntax`: NG — Here "プログラム" refers to a computer program in computability theory (an effective procedure), not the inductively defined PDL program of the card.
  - `logic:while-program`: NG — Here "プログラム" refers to a general computer program used in an effective transfinite recursion argument, not specifically a while-program as inductively defined in the card.

## 「代入」 in 01-foundations/03-computation/03-advanced-computability
- Default: `logic:substitution` → **no candidate fits**
- Pages: 02-turing-reducibility.html, 03-analytical-hierarchy.html, 04-boundedness.html, 05-pi11-prewellordering.html
- Sentence: U_{n}\}$ とする。$\{x:(x,x)\in U_{n}\}$ は $\Sigma_{n}$（決定可能な関係の変数を同じにしても決定可能）なので $D$ は $\Pi_{n}$。$D$ が $\Sigma_{n}$ なら、ある $e$ で $D=\{x:(e,x)\in U_{n}\}$ となり、$x=e$ を代入すると $e\in D\iff(e,e)\in U_{n}\iff e\notin D$ で矛盾する。後半：$D\in\Pi_{n}\subseteq\Delta_{n+1}$ で $D\notin\Sigma_{n}$ なので $\Sigma_{n}\neq\Delta_{n+1}$。$\overline{D}\in
  - `logic:substitution`: NG — Here "代入" means substituting a value into a variable in an informal mathematical argument, not the formal syntactic substitution operation on terms/formulas defined in the card.
  - `logic:modal-substitution`: NG — Here "代入" means substituting a value for a variable in an arithmetic/computability-theoretic expression, not the modal-logic map σ on propositional variables defined in the card.
  - `logic:mu-substitution`: NG — This use of 代入 refers to substituting a value (x=e) into a formula, not the capture-avoiding substitution of a formula for a variable defined in the card.
  - `logic:lambda-substitution`: NG — Here "代入" means substituting a value into a variable in a logical formula, not the lambda-calculus substitution operation defined in the card.

## 「半順序」 in 01-foundations/03-computation/03-advanced-computability
- Default: `set:total-order` → **fits: `set:forcing-poset`**
- Pages: 08-friedberg-muchnik.html
- Sentence: *似た定理.** \ref{comp:prob-fm-noncomputable-ce} の構成はポストの単純集合の構成に近く、ポスト自身は単純集合が $\varnothing'$ と $m$ 同値でないことを示したが、$T$ 同値でないことまでは示せなかったとされる。フリードバーグ–ムチニクの定理は、認識可能な次数の半順序が線形順序でないことも示している。
  - `set:total-order`: NG — Here 半順序 refers to a partial order on Turing degrees (a preorder/degree structure), not the strict partial order on a set defined by the card.
  - `set:forcing-poset`: OK

## 「原子論理式」 in 01-foundations/03-computation/03-advanced-computability
- Default: `logic:prop-formula` → **fits: `logic:formula`**
- Pages: 01-logical-theories.html
- Sentence: 言語を、3 項関係記号 $P$ だけからなるものとし、構造 $\mathcal{N}_{+}\defeq(\N,P^{\mathcal{N}_{+}})$, $P^{\mathcal{N}_{+}}\defeq\{(a,b,c):a+b=c\}$ を考える（加法を関数記号で書いた理論は、各原子論理式を $P$ と存在量化子で書き直す計算可能な翻訳によりこれに帰着する）。
  - `logic:prop-formula`: NG — This is about atomic formulas of a first-order language (a 3-place relation symbol P), not the propositional atomic formulas defined in the card.
  - `logic:formula`: OK

## 「合成」 in 01-foundations/03-computation/03-advanced-computability
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 05-pi11-prewellordering.html, 10-creative-sets.html
- Sentence: **正規化が必要な理由.** 関係 $\le^{*}_{\varphi},<^{*}_{\varphi}$ は $\varphi$ の値の大小だけで決まるので、$\varphi$ に任意の狭義増加な順序数値関数を合成しても変わらない。たとえば $\varphi'(x)\defeq\omega_{1}+\varphi(x)$ も $\Pi^{1}_{1}$ ノルムだが、値はすべて $\omega_{1}^{\mathrm{CK}}$ を超える。正規化はこの任意性を取り除き、Step 3 で隙間のない値域を使えるようにする。
  - `logic:pdl-syntax`: NG — Here "合成" means composing functions (function composition), not the PDL program composition operator defined in the card.
  - `logic:while-program`: NG — Here "合成" means composing functions (function composition), not the sequential composition of programs defined in the card.
  - `set:relation-composition`: NG — Here 合成 refers to composing functions (applying an order-preserving function to φ), not the composition of relations defined in the card.
  - `cat:category`: NG — Here "合成" means composing a function with an order-preserving function, not the composition of morphisms in a category as defined by the card.
  - `cat:non-symmetric-operad`: NG — Here "合成" means composing functions (applying one function to the output of another), not the operad composition operation γ on P(k).

## 「定義域」 in 01-foundations/03-computation/03-advanced-computability
- Default: `set:relation` → **no candidate fits**
- Pages: 07-post-theorem.html, 10-creative-sets.html, 11-rice-shapiro.html
- Sentence: $T_{M}(x,t,D)$ を「$D$ は有限な部分関数の符号で、$M$ を入力 $x$ の上で、問い合わせ $y$ には $D(y)$ で答えながら $t$ 段だけ模倣すると、すべての問い合わせが $D$ の定義域に属し、その間に受理する」とする。模倣は有限段なので $T_{M}$ は決定可能。
  - `set:relation`: NG — Here 定義域 refers to the domain of a partial function (a set of inputs), not the domain of a relation as a set of ordered pairs.
  - `logic:rm-continuous-code`: NG — Here "定義域" refers to the domain of a finite partial function (a set of inputs on which it is defined), not the domain of a continuous real function as defined in the card.

## 「後続」 in 01-foundations/03-computation/03-advanced-computability
- Default: `logic:ctl-semantics` → **no candidate fits**
- Pages: 06-hyperarithmetic.html
- Sentence: - **「⇒」で $\gamma=\lvert T_{s}\rvert$ をとったこと**：$\beta$ が極限でも後続でも同じ議論で済む。極限と後続の場合分けが要らないことが、次の定理で「前の段すべて」をまとめて参照する H 集合の定義（極限でもジャンプをとる）と噛み合う。
  - `logic:ctl-semantics`: NG — Here "後続" means a successor ordinal in the context of ordinals, not a successor state in a CTL Kripke model.
  - `logic:ctl-successor-def`: NG — Here "後続" means a successor ordinal in set theory, not the successor relation on worlds in the modal logic definition.
  - `logic:parity-game`: NG — Here "後続" means "successor" (as opposed to limit) in the context of ordinals, not a successor vertex in a parity game arena.

## 「時点表示」 in 01-foundations/03-computation/03-advanced-computability
- Default: `comp:pda` → **fits: `comp:tm-configuration`**
- Pages: 01-logical-theories.html
- Sentence: （要点を示す。各段は定型的な検証である。）$D=L(M)$ とする。$M$ の時点表示 $uqv$ を、状態とテープ記号に番号を付けて、有限列のコード（\ref{pt:finseq}）で自然数として表す。
  - `comp:pda`: NG — This "時点表示" is a Turing machine instantaneous description (uqv), not the PDA configuration triple (q,x,γ) defined in the card.
  - `comp:tm-configuration`: OK

## 「標準モデル」 in 01-foundations/03-computation/03-advanced-computability
- Default: `logic:ikripke-canonical` → **no candidate fits**
- Pages: 01-logical-theories.html
- Sentence: - 算術の言語、標準モデル $\mathcal{N}$、$\Sigma$ 論理式、有限列のコード、再帰で定義される関数の $\Sigma$ 定義可能性、タルスキの定理は不完全性定理の系列（\ref{pt:page-peano-arithmetic}, \ref{pt:page-sequence-coding}, \ref{pt:sigma-re
  - `logic:ikripke-canonical`: NG — In the sentence, 標準モデル refers to the standard model of arithmetic $\mathcal{N}$, not the canonical Kripke model $\mathcal{M}_{\mathrm{c}}$ defined in the card.
  - `logic:generic-model-def`: NG — This "standard model" refers to the standard model of arithmetic (the natural numbers), not the term model of a theory in the categorical/type-theoretic sense defined in the card.

## 「直積」 in 01-foundations/03-computation/03-advanced-computability
- Default: `set:cartesian-product` → **no candidate fits**
- Pages: 01-logical-theories.html
- Sentence: - DFA・NFA、部分集合構成、直積構成は \ref{comp:page-finite-automata} のとおり。TM、決定可能・認識可能、符号化は \ref{comp:page-turing-machines} のとおり。
  - `set:cartesian-product`: NG — Here "直積構成" refers to the product construction on automata (a construction combining two automata), not the set-theoretic Cartesian product of two sets as defined in the card.
  - `grp:direct-product`: NG — Here "直積" refers to the product construction on automata (DFA/NFA), not the direct product of groups defined in the card.
  - `mod:direct-sum`: NG — Here "直積" refers to the product construction of automata, not the direct product of modules defined in the card.

## 「真理値」 in 01-foundations/03-computation/03-advanced-computability
- Default: `logic:truth-assignment` → **no candidate fits**
- Pages: 13-low-basis.html
- Sentence: $\PA$ の完全な無矛盾拡大全体は、ある計算可能な二分木の道全体と対応することが知られている（文を並べ、長さ $n$ 以下の証明で矛盾が出ない真理値の割り当てを木の元とする）。これを認めて、$\PA$ の低い完全な無矛盾拡大があることを示せ。
  - `logic:truth-assignment`: NG — Here「真理値の割り当て」refers to a truth assignment (a map on propositional variables), not the truth value $\bar{v}(\varphi)$ of a formula defined by the card.
  - `set:truth-value`: NG — Here "真理値の割り当て" refers to a truth assignment (Boolean valuation) of sentences, not the Boolean-valued-model truth value defined in the card.

## 「計算可能」 in 01-foundations/03-computation/03-advanced-computability
- Default: `comp:computable-functional-relation` → **no candidate fits**
- Pages: 03-analytical-hierarchy.html, 04-boundedness.html, 05-pi11-prewellordering.html, 06-hyperarithmetic.html, 07-post-theorem.html, 08-friedberg-muchnik.html, 09-low-simple.html, 10-creative-sets.html, 11-rice-shapiro.html, 12-index-set-completeness.html, 13-low-basis.html, 14-difference-hierarchy.html
- Sentence: hierarchy}）。最も重要なのは一番下の $\Pi^{1}_{1}$ で、$\Pi^{1}_{1}$ の関係は「ある計算可能な木が**整礎**である（無限の枝をもたない）」という形にまとめられる（**$\Pi^{1}_{1}$ 標準形**、\ref{comp:pi11-normal-form}）。系として、整礎な計算可能木の指数全体 $\mathrm{WT}$ は $\Pi^{1}_{1}$ 完全で、$\Sigma^{1}_{1}$ ではない（\ref{comp:wt-complete}）。
  - `comp:computable-functional-relation`: NG — Here "計算可能" modifies "木" (a computable tree), meaning the tree's set of finite sequences is decidable/computable, not the computable relation on functions defined in the card.
  - `comp:L-computable`: NG — Here "計算可能" modifies "木" (a computable tree), i.e. a tree whose set of codes is computable, not the notion of a computable partial function defined in the card.
  - `comp:mapping-reducible`: NG — Here "計算可能" modifies "木" (a computable tree, i.e., a tree with a computable set of codes), not a function $f\colon\Sigma^{\ast}\to\Sigma^{\ast}$ as in the card's definition of a computable function.

## 「論理式」 in 01-foundations/03-computation/03-advanced-computability
- Default: `logic:prop-formula` → **fits: `logic:formula`**
- Pages: 01-logical-theories.html, 02-turing-reducibility.html, 03-analytical-hierarchy.html, 07-post-theorem.html
- Sentence: \mathrm{Th}(\mathcal{M})$（真な文全体）が決定可能であるとは、文が $\mathcal{M}$ で真かどうかをアルゴリズムで判定できることである。本ページでは、自然数の加法だけの理論 $\mathrm{Th}(\N,+)$ が決定可能であること（\ref{comp:presburger}）を、各論理式を二進表記の列を読む有限オートマトンに翻訳して示す。一方、乗法を加えた $\mathrm{Th}(\N,+,\cdot)$ は決定可能でない（\ref{comp:arithmetic-undecidable}）。こちらは、チューリング機械の計算が算術の $\Sigma$ 論理式で表せること（\ref{comp:tm-s
  - `logic:prop-formula`: NG — Here “論理式” means a first-order formula of arithmetic, not a propositional formula as defined in the card.
  - `logic:formula`: OK

## 「辞書式順序」 in 01-foundations/03-computation/03-advanced-computability
- Default: `set:well-order-sum-product-def` → **no candidate fits**
- Pages: 04-boundedness.html
- Sentence: 辞書式順序に似ているが、「延長は元の列より前（小さい）」とする点が違う。したがって空列 $\langle\rangle$ が最大元で、木を「子を左から順に、親を子のすべての後に」並べることになる（後行順）。この並べ方では、木の枝をたどることが下降列をたどることになる。
  - `set:well-order-sum-product-def`: NG — 辞書式順序 here refers to a lexicographic order on sequences, not the lexicographic product of two well-ordered sets defined in the card.
  - `top:double-arrow`: NG — This sentence uses "辞書式順序" for a different order on sequences (where extensions come before the original), not the lexicographic order on $[0,1]\times\{0,1\}$ defined in the card.

## 「連続」 in 01-foundations/03-computation/03-advanced-computability
- Default: `comp:monotone-continuous` → **no candidate fits**
- Pages: 11-rice-shapiro.html, 14-difference-hierarchy.html
- Sentence: 向き（\ref{comp:rice-shapiro-converse} の関数版）も、有限関数の標準符号を使えば同じ議論で成り立つ（\ref{comp:rice-shapiro-functions-converse}）。全域関数の性質については、クライゼル–ラコンブ–ショーンフィールドの定理（計算可能な汎関数は実効的に連続）が対応することが知られている（ここでは扱わない）。
  - `comp:monotone-continuous`: NG — Here "連続" refers to effective continuity of computable functionals (Kleene–Lacombe–Schoenfield), not monotonicity/continuity of a map on $\mathcal{P}(\Sigma^{\ast})^{n}$ as defined in the card.
  - `cx:limit-continuity`: NG — This "連続" refers to effective continuity of computable functionals in computability theory, not the epsilon-delta continuity of complex functions defined in the card.
  - `top:continuous`: NG — Here "連続" refers to effective continuity of computable functionals in computability theory, not topological continuity of maps between topological spaces as defined in the card.

## 「閉包」 in 01-foundations/03-computation/03-advanced-computability
- Default: `logic:ltl-size` → **no candidate fits**
- Pages: 03-analytical-hierarchy.html, 04-boundedness.html, 05-pi11-prewellordering.html, 06-hyperarithmetic.html
- Sentence: - 可算選択公理は、メタレベル（本当の数学）で関係のクラスの閉包性を示すのに使っただけで、対象としての計算には現れない。
  - `logic:ltl-size`: NG — Here "閉包性" refers to closure properties of a class of relations in the metatheory, not the closure CL(A) of a logical formula defined in the card.
  - `logic:ctl-closure`: NG — Here "閉包性" refers to closure properties of a class of relations in the metatheory, not the specific CTL closure set CL(A) defined in the card.
  - `set:finitary-closure`: NG — Here "閉包性" refers to closure properties of a class of relations, not the minimal closed superset defined in the card.
  - `set:pred-closure`: NG — Here "閉包性" refers to closure properties of a class of relations, not the specific set-theoretic closure $\mathrm{cl}(\mathbf{A},x,\mathbf{R})$ defined in the card.
  - `top:interior-closure`: NG — Here "閉包性" means closure property of a class of relations, not the topological closure of a subset.

## 「ノルム」 in 01-foundations/03-computation/04-complexity
- Default: `comp:pi11-norm` → **fits: `calc:norm`**
- Pages: 07-probabilistic-quantum.html
- Sentence: - 複素ベクトル空間 $\C^{N}$ の標準内積 $\langle u,v\rangle=\sum_{i}\overline{u_{i}}v_{i}$、ノルム $\lVert v\rVert$、ユニタリ行列（$U^{\ast}U=I$）、テンソル積 $\otimes$ を使う。
  - `comp:pi11-norm`: NG — This "ノルム" is the norm of a complex vector space (a distance-like function on vectors), not a function from a set of naturals to ordinals as in the definition card.
  - `lin:inner-product`: NG — ノルム is defined from the inner product as $\|v\|=\sqrt{\langle v,v\rangle}$, but the card's defined term is 内積, not ノルム itself.
  - `calc:norm`: OK

## 「プログラム」 in 01-foundations/03-computation/04-complexity
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 01-time-complexity.html, 08-circuits.html, 13-primality-branching.html
- Sentence: **高い視点から：多項式という「単位」.** 多項式の全体は、和・積・合成で閉じた最小の「自然な」関数のクラスの一つで、プログラムを部品として組み合わせても多項式時間は保たれる（多項式時間の手続きを多項式回呼んでも多項式時間）。これは、原始再帰関数が合成と原始再帰で閉じていたこと（\ref{comp:page-primitive-recursive}）の計算量版である。比喩で言えば、P は「入力が二倍になっても、かかる時間が定数倍にしか増えない」
  - `logic:pdl-syntax`: NG — Here "プログラム" refers to computational procedures/algorithms in complexity theory, not the inductively defined PDL programs of the card.
  - `logic:while-program`: NG — Here "プログラム" refers to computational procedures in general (polynomial-time algorithms), not the specific while-program syntax defined in the card.

## 「上界」 in 01-foundations/03-computation/04-complexity
- Default: `set:chain-maximal` → **no candidate fits**
- Pages: 08-circuits.html, 10-interactive-proofs.html, 12-approximation-cryptography.html, 15-ladner.html
- Sentence: - **数え上げの上界**：ゲートの入力の選び方を「入力変数・定数・すべてのゲート」から選ぶとして多めに数えた。前のゲートだけに制限しても上界は成り立つ。
  - `set:chain-maximal`: NG — Here "上界" means an upper bound on a count (a numerical estimate), not an upper bound of a subset in a partially ordered set as defined in the card.
  - `calc:supremum`: NG — Here "上界" means an upper bound on a count (an estimate), not the order-theoretic upper bound of a subset of a totally ordered set as defined in the card.

## 「上限」 in 01-foundations/03-computation/04-complexity
- Default: `calc:supremum` → **no candidate fits**
- Pages: 02-np.html, 04-space-complexity.html, 06-hierarchy.html, 14-ph-karp-lipton.html
- Sentence: - **時間の多項式の上限 $n^{k}$**：\ref{comp:cook-levin} で、表の大きさ（$T\times m$）を多項式にするのに使った。これがヘッドの到達範囲と行数を同時に抑える。
  - `calc:supremum`: NG — Here "上限" means an upper bound in the sense of a polynomial bound on time, not the least upper bound (supremum) of a subset of an ordered set as defined in the card.
  - `set:order-dedekind-complete`: NG — Here "上限" means an upper bound (a polynomial bound $n^{k}$), not the least upper bound (supremum) defined in the card.
  - `logic:rm-analysis-defs`: NG — Here "上限" means an upper bound (a polynomial bound $n^{k}$), not the least upper bound (supremum) of a real sequence defined in the card.

## 「代入」 in 01-foundations/03-computation/04-complexity
- Default: `logic:substitution` → **no candidate fits**
- Pages: 04-space-complexity.html, 10-interactive-proofs.html, 13-primality-branching.html
- Sentence: 上限）まで $df(n)$ 段なので、$\lvert\Phi_{t}\rvert=O(f(n)^{2})$ で、多項式時間で書き出せる。$w\mapsto\Phi_{2^{df(n)}}(\vec{c}_{\mathrm{start}},\vec{c}_{\mathrm{acc}})$（開始と受理の時点表示を定数として代入したもの）が還元で、$t$ に関する帰納法で $\Phi_{t}$ の意味が正しいことから $w\in A\iff$ この文が真。
  - `logic:substitution`: NG — This "代入" means substituting constants into a formula/representation, not the formal term/expression substitution operation defined in the card.
  - `logic:modal-substitution`: NG — Here "代入" means substituting constants into a formula (an assignment of values), not the modal-logic substitution map σ: PV → MForm defined in the card.
  - `logic:mu-substitution`: NG — Here "代入" means substituting constants into a formula (plugging in start/accept configurations), not the capture-avoiding substitution of a formula for a variable defined in the card.
  - `logic:lambda-substitution`: NG — Here "代入" means substituting constants into a formula (plugging in values), not the lambda-calculus capture-avoiding substitution defined in the card.

## 「充足可能」 in 01-foundations/03-computation/04-complexity
- Default: `logic:tautology` → **no candidate fits**
- Pages: 02-np.html, 08-circuits.html, 14-ph-karp-lipton.html, 15-ladner.html
- Sentence:  が多項式時間で決定できる言語のクラスと一致する（\ref{comp:np-ntm}）。本ページでは、多項式時間の写像還元（\ref{comp:poly-reduction}）を定め、NP の中で最も難しい問題である **NP 完全**問題（\ref{comp:np-complete}）を導入する。主定理は、命題論理の充足可能性問題 SAT が NP 完全であるという**クック–レヴィンの定理**（\tref{comp:cook-levin}）である。さらに、論理式を節の長さ 3 以下の連言標準形に直す変換（\ref{comp:tseitin}）で、3SAT も NP 完全であることを示す（\ref{comp:3sat-complete}）
  - `logic:tautology`: NG — Here "充足可能性" refers to the satisfiability problem (SAT) for propositional formulas, which matches the card's notion of a formula set being satisfiable, so it is the same notion.
  - `logic:model`: NG — one short English sentence why
  - `logic:modal-satisfiable`: NG — This "充足可能性" refers to propositional logic satisfiability (SAT), not the modal-logic satisfiability defined in the card.
  - `logic:pdl-semantics`: NG — Here "充足可能" (satisfiable) refers to the satisfiability of propositional logic formulas (SAT), not the PDL-specific notion of satisfiability defined in the card.
  - `logic:ltl-semantics`: NG — the sentence uses "充足可能性" (satisfiability of propositional logic / SAT), not the LTL notion of "充足可能" defined in the card.
  - `logic:ctl-semantics`: NG — Here "充足可能" (satisfiable) refers to propositional satisfiability (SAT), not the CTL notion of being true in some state of some model.
  - `logic:mu-semantics`: NG — Here "充足可能" (satisfiable) refers to the propositional satisfiability problem SAT, not the modal μ-calculus notion of satisfiability defined in the card.

## 「合成」 in 01-foundations/03-computation/04-complexity
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 01-time-complexity.html, 02-np.html, 11-parallel.html, 13-primality-branching.html
- Sentence: **高い視点から：多項式という「単位」.** 多項式の全体は、和・積・合成で閉じた最小の「自然な」関数のクラスの一つで、プログラムを部品として組み合わせても多項式時間は保たれる（多項式時間の手続きを多項式回呼んでも多項式時間）。これは、原始再帰関数が合成と原始再帰で閉じていたこと（\ref{comp:page-primitive-recursive}）の計算量版である。比喩で言えば、P は「
  - `logic:pdl-syntax`: NG — Here "合成" refers to composition of functions/polynomials, not the PDL program composition operator α;β defined in the card.
  - `logic:while-program`: NG — Here "合成" refers to composition of polynomials/functions, not the sequential composition of while programs defined in the card.
  - `set:relation-composition`: NG — Here 合成 refers to composition of functions/algorithms (computational complexity), not the composition of binary relations defined in the card.
  - `cat:category`: NG — Here "合成" refers to composition of functions/procedures in computational complexity, not the composition of morphisms in a category as defined in the card.
  - `cat:non-symmetric-operad`: NG — Here "合成" means composition of functions/procedures (computational composition), not the operad composition operation γ defined in the card.

## 「有界」 in 01-foundations/03-computation/04-complexity
- Default: `calc:supremum` → **no candidate fits**
- Pages: 15-ladner.html
- Sentence: T に長さ $n^{H(n)}$ の詰め物を付けた言語 $\mathrm{SAT}_{H}$（\ref{comp:padded-sat}）を使う証明を示す。$H$ は非常にゆっくり増える関数で、「$\mathrm{SAT}_{H}$ を速く解く機械が見つかれば増加をやめる」ように定める（**遅延対角化**）。$H$ が有界なら $\mathrm{SAT}_{H}$ は SAT と本質的に同じで、$H$ が非有界なら詰め物が長すぎて SAT を還元できない。
  - `calc:supremum`: NG — Here "有界" describes a function $H$ being bounded (bounded above), not a subset of an ordered set having an upper bound as defined in the card.
  - `logic:rm-analysis-defs`: NG — Here "有界" describes the function $H$ being bounded, not a real sequence being bounded as in the card's definition.

## 「相対化」 in 01-foundations/03-computation/04-complexity
- Default: `comp:oracle-classes` → **no candidate fits**
- Pages: 06-hierarchy.html, 07-probabilistic-quantum.html
- Sentence: 限して行う。系として $\mathrm{NL}\subsetneq\mathrm{PSPACE}$、$\mathrm{P}\subsetneq\mathrm{EXPTIME}$ が得られる（\ref{comp:hierarchy-separations}）。一方で、P 対 NP 問題は対角線論法では解けないことが、**相対化**の議論で示される：神託 $A$ で $\mathrm{P}^{A}=\mathrm{NP}^{A}$ となるもの（\ref{comp:bgs-equal}）と、神託 $B$ で $\mathrm{P}^{B}\neq\mathrm{NP}^{B}$ となるもの（\ref{comp:bgs-separate}）がある
  - `comp:oracle-classes`: NG — 「相対化」は神託機械の存在によって分離が保存されるかという議論を指し、カードが定義する神託付き計算量クラス $\mathrm{P}^{A}$ そのものの定義ではない。
  - `set:relativization`: NG — This "相対化" refers to relativization with respect to an oracle in computability/complexity theory, not the relativization of a formula to a class M defined in the card.

## 「経路」 in 01-foundations/03-computation/04-complexity
- Default: `logic:ctl-semantics` → **no candidate fits**
- Pages: 07-probabilistic-quantum.html, 11-parallel.html
- Sentence: **高い視点から：確率から振幅へ.** 確率的計算の一歩は、確率分布（非負の成分の和が $1$ のベクトル）に**確率行列**を掛ける操作で、量子計算の一歩は、振幅のベクトル（二乗の和が $1$ のベクトル）に**ユニタリ行列**を掛ける操作である。どちらも計算の結果は「すべての計算の経路の重みの和」（\ref{comp:bqp-in-pspace} の経路和）で決まるが、確率の重みは常に非負で足し合わされるだけなのに対し、振幅の重みは正にも負にもなり、経路どうしが**干渉**して打ち消し合う（問題 \ref{comp:prob-hadamard-twice}）。量子アルゴリズムの技術は、正しい答えに至
  - `logic:ctl-semantics`: NG — Here "経路" means a computational path in a sum-over-paths sense, not a path in a CTL Kripke model as defined in the card.
  - `logic:erdos-rado-tree`: NG — Here "経路" means a computational path in a sum-over-paths sense, not the finite sequence σ_{j} defined in the Erdős–Rado tree card.

## 「連続」 in 01-foundations/03-computation/04-complexity
- Default: `comp:monotone-continuous` → **no candidate fits**
- Pages: 10-interactive-proofs.html
- Sentence: **高い視点から：算術化は「論理を代数に埋め込む」.** 真理値 $\{0,1\}$ は有限体の中の二点にすぎず、論理式を多項式に置き換えると、その多項式は $\{0,1\}$ の外でも値をもつ。比喩で言えば、白黒の写真（論理式）を、色の濃淡まで連続的に記録した写真（多項式）に変換するようなもので、一か所の嘘（誤った多項式）は、ほとんどすべての点で値の違いとして現れる（異なる低次の多項式はほとんどの点で異なる）。検証者は乱数で選んだ一点を見るだけで、証明者の嘘を高い確率で見破れる。
  - `comp:monotone-continuous`: NG — Here "連続" means continuous in the everyday/analytic sense (a continuous-tone photograph), not the fixed-point definition of continuity for monotone set functions.
  - `cx:limit-continuity`: NG — Here "連続的に" means "continuously" in an informal/figurative sense (smoothly, without discrete jumps), not the precise ε-δ definition of continuity of a complex function.
  - `top:continuous`: NG — Here "連続的に" means "continuously" in the everyday sense of a gradual, analog recording, not the topological notion of a continuous map between topological spaces.

## 「上界」 in 01-foundations/03-computation/05-algorithmic-randomness
- Default: `set:chain-maximal` → **no candidate fits**
- Pages: 01-kolmogorov.html, 02-prefix-free-complexity.html
- Sentence: )$ とは、$x$ を出力するチューリング機械とその入力の組の最短の記述の長さである（\ref{comp:kolmogorov-complexity}）。$0^{1000}$ のように規則的な文字列は短く記述でき、規則のない文字列は自分自身を書くより短くは記述できない（**非圧縮**）。本ページでは、$K$ の基本的な上界、記述方式の選び方によらず定数の差しか生じないこと（**最適性**、\ref{comp:kolmogorov-optimality}）、各長さに非圧縮な文字列が存在すること（\ref{comp:incompressible-exist}）、$K$ が計算可能でないこと（\ref{comp:k-uncomputable}
  - `set:chain-maximal`: NG — Here "上界" means an upper bound on the value of Kolmogorov complexity $K$, not an upper bound of a subset in a partially ordered set as defined in the card.
  - `calc:supremum`: NG — Here "上界" means an upper bound on the Kolmogorov complexity values (a bound on a quantity), not the order-theoretic upper bound of a subset of a totally ordered set as defined in the card.

## 「標準モデル」 in 01-foundations/03-computation/05-algorithmic-randomness
- Default: `logic:ikripke-canonical` → **no candidate fits**
- Pages: 05-chaitin-incompleteness.html
- Sentence: 算術の言語で「$K(x)>n$」や「$\omega_{i}=b$」を表す文を書くことができ、標準モデルで正しい（健全な）認識可能な理論 $T$ について、$T$ が証明するそれらの文の全体は（証明を枚挙して）認識可能な集合になる。この意味で、以下の結果は算術の理論についての不完全性定理を与える（文の構成はここでは確かめていない）。
  - `logic:ikripke-canonical`: NG — This "標準モデル" refers to the standard model of arithmetic, not the canonical Kripke model of prime theories defined in the card.
  - `logic:generic-model-def`: NG — This "standard model" refers to the standard model of arithmetic, not the term model of a theory in the simply typed lambda calculus defined in the card.

## 「決定可能」 in 01-foundations/03-computation/05-algorithmic-randomness
- Default: `comp:L-computable` → **no candidate fits**
- Pages: 03-martin-lof.html, 04-martingales.html, 05-chaitin-incompleteness.html
- Sentence: _{s}<(q_{n+1}+2^{-n-1})-(q_{n+1}-2^{-n-1})=2^{-n}$。長さ $n$ 以下の $p$ で段階 $s$ までに停止していないものは、決して停止しない（停止すれば $\Omega\ge\Omega_{s}+2^{-n}$ となる）。よって $\mathrm{dom}(U)$ は決定可能になる。一方、$1^{e}0\in\mathrm{dom}(M)\iff e\in K$ となる接頭辞なしの機械 $M$（定義域 $\{1^{e}0:e\in K\}$ は接頭辞なし）があり、$M=M_{d}$ として $1^{e}0\in\mathrm{dom}(M)\iff1^{d}01^{e}0\in\mathr
  - `comp:L-computable`: NG — Here "決定可能" is used in the computability-theoretic sense of a decidable set (characteristic function computable), which matches the card's definition.
  - `comp:recognizable-decidable`: NG — Here "決定可能" is used for the domain of a universal machine being decidable, which matches the card's definition of a decidable (recursive) language, so it is the same notion.

## 「計算可能」 in 01-foundations/03-computation/05-algorithmic-randomness
- Default: `comp:L-computable` → **no candidate fits**
- Pages: 01-kolmogorov.html, 02-prefix-free-complexity.html, 03-martin-lof.html, 04-martingales.html, 05-chaitin-incompleteness.html
- Sentence: は記述できない（**非圧縮**）。本ページでは、$K$ の基本的な上界、記述方式の選び方によらず定数の差しか生じないこと（**最適性**、\ref{comp:kolmogorov-optimality}）、各長さに非圧縮な文字列が存在すること（\ref{comp:incompressible-exist}）、$K$ が計算可能でないこと（\ref{comp:k-uncomputable}）を示す。
  - `comp:L-computable`: NG — Here "計算可能" is used of the function $K$ (Kolmogorov complexity) being computable, which matches the card's notion of a computable partial function.
  - `comp:mapping-reducible`: NG — Here "計算可能でない" negates the property of being computable, which is exactly the notion defined in the card (a function computable by a TM), so the term is used with the defined meaning.
  - `comp:computable-functional-relation`: NG — Here "計算可能" is used in the general computability sense (K is not computable), not the specific definition of a computable relation with function oracles.

## 「辞書式順序」 in 01-foundations/03-computation/05-algorithmic-randomness
- Default: `set:well-order-sum-product-def` → **no candidate fits**
- Pages: 02-prefix-free-complexity.html, 03-martin-lof.html
- Sentence: - 文字列と自然数を、長さ優先の辞書式順序 $\varepsilon,0,1,00,01,\dots$ で同一視する。計算可能な部分関数 $\{0,1\}^{\ast}\rightharpoonup\{0,1\}^{\ast}$ は、この同一視で \ref{comp:page-language-L} の意味で定める（\ref{comp:L-equals-tm}
  - `set:well-order-sum-product-def`: NG — It refers to a length-first lexicographic order on strings, not the lexicographic product order on well-ordered sets defined in the card.
  - `top:double-arrow`: NG — It refers to the lexicographic order on strings with length priority, not the lexicographic order on $[0,1]\times\{0,1\}$ used to define the double arrow space.

## 「プログラム」 in 01-foundations/03-computation/06-lambda-calculus
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 05-partial-definability.html
- Sentence: - 部分関数、$\downarrow$, $\uparrow$, $\simeq$、計算可能な部分関数、各プログラムの標準形（\ref{comp:normal-form-program}）は \ref{comp:page-recursive-functions} のとおり。
  - `logic:pdl-syntax`: NG — This "プログラム" refers to programs in computability theory (partial recursive functions and their normal forms), not PDL programs defined by the card.
  - `logic:while-program`: NG — Here "プログラム" refers to programs in computability theory (partial recursive functions and their normal forms), not the while-programs defined by the card.

## 「合成」 in 01-foundations/03-computation/06-lambda-calculus
- Default: `logic:pdl-syntax` → **fits: `cat:category`**
- Pages: 02-lambda-definability.html, 03-combinatory-logic.html, 04-normalization.html, 05-partial-definability.html
- Sentence: 3. $\lambda f.\underline{n}(\underline{m}f)$。$\underline{m}f\twoheadrightarrow_{\beta}\lambda x.f^{m}x$ なので、$(\lambda x.f^{m}x)$ を $n$ 回合成した $\lambda x.f^{nm}x$ に簡約される（$n$ に関する帰納法：$\underline{n}G\twoheadrightarrow_{\beta}\lambda x.G^{n}x$ で、$G=\lambda x.f^{m}x$ のとき $G^{n}x\twoheadrightarrow_{\beta
  - `logic:pdl-syntax`: NG — Here "合成" refers to composing a function with itself n times (function iteration), not the PDL program composition operator α;β defined in the card.
  - `logic:while-program`: NG — Here "合成" means function composition (iterating a lambda term), not the sequential composition of while-programs defined in the card.
  - `set:relation-composition`: NG — Here "合成" refers to repeated composition of a function (Church numeral iteration), not the composition of two relations as defined in the card.
  - `cat:category`: OK

## 「決定可能」 in 01-foundations/03-computation/06-lambda-calculus
- Default: `comp:L-computable` → **fits: `comp:recognizable-decidable`**
- Pages: 02-lambda-definability.html, 05-partial-definability.html
- Sentence: p:tuple-code} と同様）。α 同値類の代表として、束縛変数を出現の位置で決まる名前に付け替えたものをとれば、二つのコードが同じ項を表すかは計算可能に判定できる。一段の簡約 $M\to_{\beta}N$ は、$M$ の基を一つ選んで代入を行う有限の操作なので、関係「$N$ は $M$ から一段で得られる」は決定可能で、$M$ から一段で得られる項は有限個で計算可能に列挙できる。
  - `comp:L-computable`: NG — Here "決定可能" is used for a binary relation on term codes (decidable by a computable procedure), not for a subset of $\N^{k}$ having a computable characteristic function as defined in the card.
  - `comp:recognizable-decidable`: OK

## 「辞書式順序」 in 01-foundations/03-computation/06-lambda-calculus
- Default: `set:well-order-sum-product-def` → **no candidate fits**
- Pages: 05-partial-definability.html
- Sentence: $M\to_{h}^{\ast}\lambda\vec{x}.N$ の長さ $r$ と $n$ の組 $(r,n)$ に関する辞書式順序の帰納法で示す。$n=0$ なら主張は仮定そのもの。$n\ge1$ とする。
  - `set:well-order-sum-product-def`: NG — It refers to the dictionary order on pairs of natural numbers, not the order on a Cartesian product of two well-ordered sets defined in the card.
  - `top:double-arrow`: NG — Here "辞書式順序" refers to the lexicographic order on pairs of natural numbers used for induction, not the lexicographic order on $[0,1]\times\{0,1\}$ defining the double arrow space.

## 「互いに素」 in 01-foundations/04-set-theory/01-basics
- Default: `grp:gcd` → **no candidate fits**
- Pages: 13-konig.html
- Sentence: - **選択公理**：Step 1（単射 $g_{i}$ の同時選択）と Step 2（$A_{i}$ が交わるとき、どの $A_{i}$ に属させるかを一意に決める）で使った。$A_{i}$ が互いに素で、単射 $g_{i}$ が標準的に与えられていれば不要である。
  - `grp:gcd`: NG — Here "互いに素" means pairwise disjoint sets, not coprime integers as defined in the card.
  - `pt:prime`: NG — Here "互いに素" describes the sets $A_{i}$ being pairwise disjoint, not the number-theoretic coprime relation defined in the card.
  - `grp:cycle`: NG — Here "互いに素" describes a family of sets being pairwise disjoint, not permutations with disjoint supports as defined in the card.

## 「内包公理」 in 01-foundations/04-set-theory/01-basics
- Default: `set:ax-comprehension` → **no candidate fits**
- Pages: 01-axioms-overview.html, 02-extensionality-comprehension.html, 08-cantor-theorem.html
- Sentence: 1. **NBG**（フォン・ノイマン＝ベルナイス＝ゲーデル）は、集合については $\ZF$ の公理を満たし、クラスの内包公理 $\exists X\,\forall y\,(y\in X\leftrightarrow\varphi(y))$ を、$\varphi$ の**束縛変数が集合だけを動く**場合に限って認める体系である。NBG は $\ZF$ の保存拡大であり（集合の変数だけを含む文について NBG $\vdash\varphi\i
  - `set:ax-comprehension`: NG — This is the class comprehension axiom of NBG, not the separation (分出) axiom schema described in the card.
  - `pt:l2-axioms`: NG — This is the class comprehension axiom of NBG set theory, not the second-order arithmetic comprehension axiom scheme defined in the card.

## 「後続」 in 01-foundations/04-set-theory/01-basics
- Default: `logic:ctl-semantics` → **no candidate fits**
- Pages: 04-ordinals.html, 05-natural-numbers.html, 06-classes-recursion.html, 09-cardinal-arithmetic.html, 10-axiom-of-choice.html, 11-cardinal-exponentiation.html
- Sentence: **超限帰納法の三つの場合.** この三分類（$0$・後続・極限）は、超限帰納法・超限再帰で定義や証明を場合分けする際の基本形になる（\ref{set:transfinite-induction}, \ref{set:transfinite-recursion}）。
  - `logic:ctl-semantics`: NG — Here "後続" means a successor ordinal in the 0/successor/limit trichotomy, not a successor state in a CTL Kripke model.
  - `logic:ctl-successor-def`: NG — Here "後続" means a successor ordinal in set theory, not the successor relation on worlds in the modal logic definition.
  - `logic:parity-game`: NG — Here "後続" means a successor ordinal (the case after 0 and before limit ordinals), not a graph successor vertex as defined in the parity game card.

## 「推移的」 in 01-foundations/04-set-theory/01-basics
- Default: `set:transitive-set` → **fits: `logic:relation-properties`**
- Pages: 04-ordinals.html, 05-natural-numbers.html, 07-cardinals.html, 09-cardinal-arithmetic.html, 10-axiom-of-choice.html
- Sentence: - $(A,R)$ が**全順序**（\fullref[全順序]{set:total-order}）とは、$R$ が $A$ 上で推移的・非反射的で、三分律 $\forall x,y\in A\,(x=y\lor xRy\lor yRx)$ を満たすこと（狭義の順序で考え、$R\subseteq A\times A$ は要求しない）。**整列順序**（\fullref[整列順序]{set:well-order}）とは、さらに $A$ の空でない任意の部
  - `set:transitive-set`: NG — Here "推移的" describes a relation $R$ (transitivity of a relation), not a set whose elements are subsets of it.
  - `logic:relation-properties`: OK

## 「推論規則」 in 01-foundations/04-set-theory/01-basics
- Default: `logic:deduction-system` → **fits: `pt:pa-x`**
- Pages: 01-axioms-overview.html
- Sentence: hi$ の**形式的証明**とは、論理式の有限列 $\varphi_{1},\dots,\varphi_{n}$ であって、$\varphi_{n}$ が $\varphi$ であり、各 $\varphi_{i}$ が「$S$ の元」「論理公理」「$\varphi_{1},\dots,\varphi_{i-1}$ から推論規則で得られるもの」のいずれかであるものをいう（論理公理と推論規則は純粋に記号の形だけで定義される。詳しくは \see{logic:deduction-system}）。そのようなものがあるとき $S\vdash\varphi$ と書く。$\varphi$ が文でない論理式のときは、$S\vdash\varphi$ は $
  - `logic:deduction-system`: NG — the card defines natural deduction derivations, not the inference rules of a Hilbert-style proof system mentioned in the sentence.
  - `pt:pa-x`: OK

## 「整礎」 in 01-foundations/04-set-theory/01-basics
- Default: `comp:tree-well-founded` → **fits: `set:well-founded-relation`**
- Pages: 06-classes-recursion.html, 10-axiom-of-choice.html
- Sentence: **一般化.** 同じ議論は、整礎かつ集合的（各元の「前者」全体が集合）な関係 $\mathbf{R}$ 上の帰納法に一般化される。基礎の公理のもとでは $\in$ 自身がそのような関係であり、「$\in$-帰納法」が使える（\ref{set:cumulative-hierarchy}）。
  - `comp:tree-well-founded`: NG — Here "整礎" describes a well-founded relation in general, not specifically a tree with no infinite branch as defined in the card.
  - `set:well-founded-relation`: OK

## 「有界」 in 01-foundations/04-set-theory/01-basics
- Default: `calc:supremum` → **no candidate fits**
- Pages: 13-konig.html
- Sentence: とでは冪 $\kappa^{\lambda}$ は $\kappa$, $\kappa^{+}$, $\lambda^{+}$ のどれかであり、どれになるかは $\lambda$ と $\kappa$、$\cf(\kappa)$ の大小だけで決まる。(3) は「長さ $\lambda$ の列は $\kappa$ の中で有界」なので $\kappa$ より小さい部分の冪を集めれば済むこと、(2) は「ケーニッヒの定理が冪を押し上げる」ことを表している。
  - `calc:supremum`: NG — Here "有界" refers to a sequence of length λ being bounded in κ (order-theoretic boundedness of a subset/range), which matches the card's notion of a subset being bounded above; however the card defines bounded as both upper and lower bounded, while here only an upper bound is meant, so it is at most a partial/variant match rather than the defined notion.
  - `logic:rm-analysis-defs`: NG — Here "有界" refers to a sequence being bounded in the cardinal κ (a set-theoretic/order notion), not the definition of a bounded real sequence via a rational bound b.

## 「連続」 in 01-foundations/04-set-theory/01-basics
- Default: `comp:monotone-continuous` → **no candidate fits**
- Pages: 06-classes-recursion.html, 09-cardinal-arithmetic.html, 13-konig.html
- Sentence: クラス関数 $\mathbf{f}\colon\mathbf{ON}\to\mathbf{ON}$ が**正規**であるとは、狭義増加（$\beta<\gamma\Rightarrow\mathbf{f}(\beta)<\mathbf{f}(\gamma)$）であり、かつ連続（任意の極限順序数 $\lambda$ について $\mathbf{f}(\lambda)=\sup\{\mathbf{f}(\xi)\mid\xi<\lambda\}$）であることをいう。
  - `comp:monotone-continuous`: NG — This is continuity of an ordinal function (preservation of suprema at limit ordinals), not the fixed-point definition of continuity for functions on sets of languages.
  - `cx:limit-continuity`: NG — This "連続" refers to continuity of an ordinal function at limit ordinals, not the ε-δ continuity of a complex function defined in the card.
  - `top:continuous`: NG — This is continuity of an ordinal function (preserving suprema at limit ordinals), not continuity of a map between topological spaces as defined in the card.

## 「閉包」 in 01-foundations/04-set-theory/01-basics
- Default: `logic:ltl-size` → **no candidate fits**
- Pages: 04-ordinals.html
- Sentence: 「元の元は元」という閉包条件。$\in$ を「下にある」と読むと、推移的集合とは $\in$ に関して下に閉じた集合、つまり $\in$ についての「始切片」である。順序数はこの性質を順序の側から見たもので、「自分より小さいものはすべて自分の元」になっている。
  - `logic:ltl-size`: NG — This "closure condition" refers to transitivity of sets under $\in$, not the LTL formula closure $\mathrm{CL}(A)$ defined in the card.
  - `logic:ctl-closure`: NG — This “closure” refers to a set being transitive/closed under the membership relation, not the modal-logic closure set CL(A) defined in the card.
  - `set:finitary-closure`: NG — Here "閉包条件" refers to a closure property (transitivity under $\in$), not the minimal closed superset defined in the card.
  - `set:pred-closure`: NG — Here "閉包条件" refers to a closure property (being closed under taking elements), not the set-theoretic closure cl(A,x,R) defined in the card.
  - `top:interior-closure`: NG — Here "閉包条件" refers to closure under an operation (closure property), not the topological closure of a set.

## 「閉包」 in 01-foundations/04-set-theory/01-basics
- Default: `set:finitary-closure` → **no candidate fits**
- Pages: 10-axiom-of-choice.html
- Sentence: の言い換えがある。本ページではまず、ZF の中で「任意の集合は整列可能」「選択関数の存在」「直積の非空性」「ツォルンの補題」「ハウスドルフの極大原理」が互いに同値であることを、省略なしに証明する。そのあと AC を仮定し、基数の理論で AC が効いてくる場面（任意の集合が濃度をもつこと、全射と濃度、和集合の濃度の評価、閉包補題）を扱う。どこで AC を使い、どこは ZF で済むかを毎回はっきりさせる。
  - `set:finitary-closure`: NG — Here "閉包補題" refers to a closure lemma in cardinal arithmetic, not the closure of a set under finite operations as defined in the card.
  - `logic:ltl-size`: NG — Here "閉包補題" refers to a closure lemma in cardinal arithmetic under AC, not the closure CL(A) of an LTL formula defined in the card.
  - `logic:ctl-closure`: NG — Here "閉包" refers to a closure lemma in cardinal arithmetic under AC, not the modal-logic closure set CL(A) defined in the card.
  - `set:pred-closure`: NG — Here “閉包補題” refers to a closure lemma in cardinal arithmetic, not the transitive closure cl(A,x,R) defined in the card.
  - `top:interior-closure`: NG — Here "閉包補題" refers to a closure lemma in set theory/cardinal arithmetic, not the topological closure of a subset defined in the card.

## 「c.c.c.」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `set:ccc-poset` → **fits: `set:ccc-space`**
- Pages: 03-martin-axiom.html
- Sentence: - 位相空間の可算鎖条件（c.c.c.）は \ref{set:ccc-space}、可算個の有限集合の Δ システム補題は \tref{set:delta-system-lemma} を参照。
  - `set:ccc-poset`: NG — the card defines c.c.c. for a partial order via countable antichains, while the sentence uses it for a topological space (countable chain condition on its poset of open sets), which is a different though related notion.
  - `set:ccc-space`: OK

## 「上限」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `calc:supremum` → **no candidate fits**
- Pages: 02-ccc-spaces.html, 05-ma-reals.html, 06-ma-equivalents.html
- Sentence: $G_{i}^{0}$ に入るか否かで 2 値化される）と、$g_{\alpha}=g_{\beta}$ から「$\alpha$ 座標が $G_{\alpha}^{0}$、$\beta$ 座標が $G_{\beta}^{1}$」の基本開集合が $D$ を避ける。したがって \ref{set:hmp-theorem} の上限 $2^{\aleph_{0}}$ は最良である。
  - `calc:supremum`: NG — Here "上限" means an upper bound on a numerical value (the best possible bound), not the least upper bound (supremum) of a subset as defined in the card.
  - `set:order-dedekind-complete`: NG — Here "上限" means an upper bound on a numerical value (the best possible bound), not the least upper bound of a bounded subset in a totally ordered set as defined in the card.
  - `logic:rm-analysis-defs`: NG — Here "上限" means an upper bound on a cardinal value (the best possible bound), not the least upper bound of a real sequence as defined in the card.

## 「互いに素」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `grp:gcd` → **no candidate fits**
- Pages: 01-almost-disjoint.html, 06-ma-equivalents.html, 08-trees.html, 09-suslin-kurepa.html, 11-ulam-fodor.html
- Sentence: 互いに素な集合族は、無限の世界ではあまり多くとれない。$\kappa$ の空でない部分集合を互いに素に並べれば、高々 $\kappa$ 個しかない。ところが「交わりが小さい」（濃度 $\kappa$ 未満）ことだけを要求すると、$\kappa$ の部分集合を $\kappa$ 個よりずっと多く、ときには $2^{\kappa}
  - `grp:gcd`: NG — In the sentence "互いに素" describes pairwise disjoint sets, not coprime integers as defined in the card.
  - `pt:prime`: NG — Here "互いに素" refers to pairwise disjoint sets (empty intersection), not the number-theoretic coprime relation defined in the card.
  - `grp:cycle`: NG — Here "互いに素" refers to pairwise disjoint sets, not disjoint permutations as defined in the card.

## 「半順序」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `set:total-order` → **fits: `set:forcing-poset`**
- Pages: 01-almost-disjoint.html, 02-ccc-spaces.html
- Sentence: 概素族**である。後半では逆向きの現象、すなわち「小さい集合をたくさん集めると、その中に、どの 2 つの交わりも同じ集合になる大きな部分族が必ず含まれる」という **Δ システム補題**を示す。Δ システム補題は、次のページの可算鎖条件の直積の議論（\ref{set:ccc-product-finite}）や、強制法で半順序が可算鎖条件をもつことを示すときの基本的な道具である。
  - `set:total-order`: NG — Here "半順序" refers to a forcing poset (a set with a preorder/partial order used in set theory), not the strict partial order defined by the card's non-reflexivity and transitivity conditions.
  - `set:forcing-poset`: OK

## 「可算鎖条件」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `set:ccc-poset` → **fits: `set:ccc-space`**
- Pages: 03-martin-axiom.html
- Sentence: - 位相空間の可算鎖条件（c.c.c.）は \ref{set:ccc-space}、可算個の有限集合の Δ システム補題は \tref{set:delta-system-lemma} を参照。
  - `set:ccc-poset`: NG — the card defines c.c.c. for a partial order via countable antichains, while the sentence refers to the topological-space version (countable families of disjoint open sets), a different though analogous notion.
  - `set:ccc-space`: OK

## 「完備化」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `calc:cauchy-construction` → **no candidate fits**
- Pages: 06-ma-equivalents.html, 07-suslin-problem.html
- Sentence: そのための道具として、ブール代数・正則開集合代数・半順序のブール完備化をこのページで導入する。
  - `calc:cauchy-construction`: NG — This is about Boolean algebra completion, not the Cauchy-sequence construction of the reals.
  - `ring:completion`: NG — This "ブール完備化" (Boolean completion) is a different notion from the $I$-adic completion defined in the card.
  - `top:completion`: NG — This is the Boolean completion of a partial order, not the metric-space completion defined in the card.

## 「後続」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `logic:ctl-semantics` → **no candidate fits**
- Pages: 08-trees.html, 10-club-filter.html, 12-diamond.html
- Sentence: **Step 7（$\alpha=0$ と後続段階）.** $s_{0}=\varnothing$ とおく。(i)(iii) は明らかで (ii) は空虚に成り立つ。$s_{\alpha}$ が与えられたとき、$n=\min(\omega\setminus\ran s_{\alpha})$（(iii) より存在）として $s_{\alpha+1}=s_{\alph
  - `logic:ctl-semantics`: NG — Here "後続段階" means "successor stage" in a transfinite recursion, not a successor state in a CTL Kripke model.
  - `logic:ctl-successor-def`: NG — Here「後続段階」means "successor stage" in an ordinal/transfinite recursion, not the modal-logic successor relation $\mathrm{succ}(w)$ defined in the card.
  - `logic:parity-game`: NG — Here "後続段階" (successor stage) refers to the ordinal successor stage in a transfinite construction, not the graph-theoretic successor vertex defined in the card.

## 「推移的」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `set:transitive-set` → **fits: `logic:relation-properties`**
- Pages: 03-martin-axiom.html, 06-ma-equivalents.html, 08-trees.html, 09-suslin-kurepa.html
- Sentence: - **反射律**：Step 3。**推移律**：Step 2。**反対称律**：Step 2 で $p\ne r$ を示すのに使った。反対称律がなければ、$p\le q\le p$, $p\ne q$ のとき $p<q<p$ だが $p\not<p$ となり、$<$ は推移的でない。
  - `set:transitive-set`: NG — Here "推移的" describes a strict order relation (<) being transitive, not a set being transitive as defined in the card.
  - `logic:relation-properties`: OK

## 「次元」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `lin:dimension` → **no candidate fits**
- Pages: 07-suslin-problem.html
- Sentence: を使って、各段階で「これまでに選んだ可算個の点を避ける」開区間を見つけ、その中に点 $b_{\alpha}$ を 1 つ選んで区間を左右に割る。左右の半分を縦横にとった長方形 $(a_{\alpha},b_{\alpha})\times(b_{\alpha},c_{\alpha})$ は、どの 2 つも交わらない。1 次元では区間 $(a_{\alpha},c_{\alpha})$ どうしは重なりうるが、2 次元にすると「$b_{\xi}$ が $(a_{\alpha},c_{\alpha})$ の左にあるか右にあるか」で縦か横に必ず分離される、というのが仕掛けである。
  - `lin:dimension`: NG — Here "1次元" and "2次元" refer to the topological/geometric dimension of intervals and rectangles, not the dimension of a vector space as defined in the card.
  - `cat:trace-dimension`: NG — Here "次元" means the topological/geometric dimension (1次元, 2次元), not the categorical dimension $\dim a$ defined via trace in a monoidal category.
  - `ring:krull-dimension`: NG — Here "次元" refers to the geometric dimension of the plane (1次元/2次元), not the Krull dimension of a ring.
  - `ag:dimension`: NG — Here「1次元」「2次元」means the dimension of the ambient Euclidean space (number of coordinates), not the supremum of lengths of chains of irreducible closed subsets as defined in the card.

## 「正規」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `set:normal-function` → **no candidate fits**
- Pages: 11-ulam-fodor.html
- Sentence: ppa)$。実際、閉非有界 $C_{\alpha}\subseteq X_{\alpha}$ を選べば $\mathop{\Delta}C_{\alpha}\subseteq\mathop{\Delta}X_{\alpha}$。$\kappa$ 上のフィルターで、この性質（対角共通部分で閉じていること）をもつものを**正規**という。$\kappa$ 上の正規フィルターで、すべての末端 $(\alpha,\kappa)$（$\alpha<\kappa$）を含むものは $\mathrm{Cub}(\kappa)$ を含むことが知られており、$\mathrm{Cub}(\kappa)$ はそのような正規フィルターのうち最小のものである。（末
  - `set:normal-function`: NG — This use defines a normal filter on $\kappa$, not a normal class function $\mathbf{f}\colon\mathbf{ON}\to\mathbf{ON}$.
  - `lin:adjoint`: NG — This "正規" refers to normal filters on a cardinal κ, not normal operators (which commute with their adjoint) as defined in the card.
  - `fld:normal`: NG — This "正規" refers to normal filters on a cardinal κ, not normal field extensions.
  - `top:separation-axioms`: NG — Here "正規" refers to a normal filter on a cardinal κ, not the normal (T₄) separation axiom for topological spaces.

## 「直積」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `set:cartesian-product` → **no candidate fits**
- Pages: 01-almost-disjoint.html, 02-ccc-spaces.html, 05-ma-reals.html
- Sentence: ずっと多く、ときには $2^{\kappa}$ 個も並べることができる。これが**概素族**である。後半では逆向きの現象、すなわち「小さい集合をたくさん集めると、その中に、どの 2 つの交わりも同じ集合になる大きな部分族が必ず含まれる」という **Δ システム補題**を示す。Δ システム補題は、次のページの可算鎖条件の直積の議論（\ref{set:ccc-product-finite}）や、強制法で半順序が可算鎖条件をもつことを示すときの基本的な道具である。
  - `set:cartesian-product`: NG — Here "直積" refers to the product of forcing posets/partial orders (a product construction), not the Cartesian product of two sets as defined in the card.
  - `grp:direct-product`: NG — Here "直積" refers to the product of partial orders in forcing/ccc arguments, not the direct product of groups defined in the card.
  - `mod:direct-sum`: NG — Here "直積" refers to the product of forcing posets (a set-theoretic product order), not the direct product of modules defined in the card.

## 「辞書式順序」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `set:well-order-sum-product-def` → **no candidate fits**
- Pages: 02-ccc-spaces.html, 07-suslin-problem.html, 09-suslin-kurepa.html
- Sentence: n,t)\mid n<\omega,\ t\in{}^{({}^{n}2)}\omega\}$ が可算であることを示せば、$E$ はその像なので可算である（可算集合 $T$ の単射 $T\to\omega$ を使い、各点に番号が最小の添字を対応させれば単射 $E\to\omega$ が得られる）。${}^{n}2$ を辞書式順序で $u_{0},\dots,u_{2^{n}-1}$ と並べ、$(n,t)$ に長さ $2^{n}$ の列 $\langle t(u_{0}),\dots,t(u_{2^{n}-1})\rangle\in{}^{<\omega}\omega$ を対応させる。列の長さから $n$ が、成分から $t$ が復元できるので
  - `set:well-order-sum-product-def`: NG — It refers to the lexicographic order on finite binary sequences, not the order product of two well-ordered sets defined in the card.
  - `top:double-arrow`: NG — It refers to the lexicographic order on the finite set ${}^{n}2$, not the lexicographic order on $[0,1]\times\{0,1\}$ used to define the double arrow space.

## 「連結」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `set:concatenation` → **fits: `top:connected`**
- Pages: 07-suslin-problem.html
- Sentence: 2. ススリン線があれば、稠密で、空でないどの開集合も可分でないススリン線がある。さらに、端点がなく連結なススリン線がある。
  - `set:concatenation`: NG — Here "連結" means connected (a topological property), not concatenation of sequences.
  - `pt:sequence-operations`: NG — Here "連結" means connected (topological connectedness), not concatenation of finite sequences as defined in the card.
  - `top:connected`: OK

## 「連続」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `comp:monotone-continuous` → **no candidate fits**
- Pages: 02-ccc-spaces.html, 05-ma-reals.html, 10-club-filter.html, 11-ulam-fodor.html
- Sentence: c.c.c. は開基だけで判定でき、稠密部分空間・開部分空間・連続像に遺伝する。
  - `comp:monotone-continuous`: NG — Here "連続" refers to a continuous map in topology (continuous image), not the continuity of a function on a powerset lattice defined in the card.
  - `cx:limit-continuity`: NG — Here "連続" refers to a continuous map between topological spaces, not the complex-function continuity defined in the card.
  - `top:continuous`: NG — Here "連続像" means the image of a set under a continuous map, not the property of a map being continuous as defined in the card.

## 「連続関数」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `calc:function-limit` → **fits: `cx:limit-continuity`**
- Pages: 11-ulam-fodor.html
- Sentence: **$\omega_{1}$ 上の連続関数は最終的に定数.** （AC）$\omega_{1}$ に順序位相（\ref{top:order-topology}）を入れ、$F\colon\omega_{1}\to\R$ を連続とする。このとき、ある $\beta<\omega_{1}$ について $F$ は $(\beta,\omega_{1})$ 上で定数であ
  - `calc:function-limit`: NG — This is continuity in the order topology on the ordinal $\omega_{1}$, not the real-analysis $\varepsilon$-$\delta$ continuity of a function $f\colon D\to\mathbb{R}$.
  - `logic:rm-continuous-code`: NG — This is a continuous function in the topological sense on the ordinal space $\omega_{1}$, not the "sign of a continuous function" (a set of rational quadruples) defined in the card.
  - `cx:limit-continuity`: OK

## 「閉包」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `set:finitary-closure` → **fits: `top:interior-closure`**
- Pages: 02-ccc-spaces.html, 03-martin-axiom.html, 05-ma-reals.html, 06-ma-equivalents.html, 09-suslin-kurepa.html, 11-ulam-fodor.html, 12-diamond.html, 15-luzin-sets.html
- Sentence: - **位相空間** $X$ の開集合、閉集合、閉包 $\overline{A}$、内部 $\operatorname{int}A$、連続写像、同相写像は通常の意味（\ref{top:topological-space}）。開集合族 $\mathcal{B}$ が $X$ の**開基**であるとは、任意の開集合 $U$ と $x\in U$ に対し $x\in B\su
  - `set:finitary-closure`: NG — This "closure" is the topological closure $\overline{A}$ of a set, not the closure of a set under a family of finitary operations as defined in the card.
  - `logic:ltl-size`: NG — This "閉包" is the topological closure $\overline{A}$, not the LTL formula closure $\mathrm{CL}(A)$ defined in the card.
  - `logic:ctl-closure`: NG — This "閉包" is the topological closure $\overline{A}$, not the CTL formula closure set $\mathrm{CL}(A)$ defined in the card.
  - `set:pred-closure`: NG — This "閉包" is the topological closure $\overline{A}$, not the well-founded-set closure $\mathrm{cl}(\mathbf{A},x,\mathbf{R})$ defined in the card.
  - `top:interior-closure`: OK

## 「合成」 in 01-foundations/04-set-theory/03-well-founded-sets
- Default: `set:relation-composition` → **fits: `cat:category`**
- Pages: 02-size-of-wf.html
- Sentence: - $\mathcal{B}\to\mathcal{P}(t)$, $S\mapsto S\setminus\{t\}$ は全単射（逆写像は $T\mapsto T\cup\{t\}$）。これと $b_{t}$、および $k\mapsto2^{t}+k$ を合成したものが $b_{t+1}\restr{\mathcal{B}}$ である。$k\mapsto2^{t}+k$ は単射（左簡約律 \ref{set:ordinal-addition-laws.6}）で、$2^{t}=\{k\mid k<2^{t}\}$ を $C=\{2^{t}+k\mid k<2^{t}\}$ の上
  - `set:relation-composition`: NG — Here "合成" refers to composition of functions/maps, not the composition of relations defined in the card.
  - `logic:pdl-syntax`: NG — Here "合成" means composition of functions/maps, not the PDL program composition operator defined in the card.
  - `logic:while-program`: NG — Here "合成" means composition of functions/maps, not the sequential composition of while-programs defined in the card.
  - `cat:category`: OK

## 「整礎」 in 01-foundations/04-set-theory/03-well-founded-sets
- Default: `comp:tree-well-founded` → **no candidate fits**
- Pages: 01-cumulative-hierarchy.html, 02-size-of-wf.html
- Sentence: (1) の「$\Leftarrow$」が本質的：**元がすべて整礎なら、その集合自身も整礎**である。元のランクの上限 $\sigma$ をとれば、元はすべて段階 $\sigma$ までに現れているので、集合自身は段階 $\sigma+1$ で作られる。ここで元が「集合だけある」こと（置換公理で上限がとれること）が効いている。
  - `comp:tree-well-founded`: NG — Here "整礎" refers to well-foundedness of sets in the cumulative hierarchy (every element well-founded implies the set is well-founded), not to a tree having no infinite branch as defined in the card.
  - `set:well-founded-relation`: NG — Here "整礎" describes sets being well-founded in the cumulative hierarchy sense (all elements well-founded implies the set is well-founded), not a relation being well-founded on a set as defined in the card.
  - `set:well-founded-class-relation`: NG — Here "整礎" describes individual sets being well-founded (having a rank), not a class relation being well-founded as defined in the card.

## 「相対化」 in 01-foundations/04-set-theory/03-well-founded-sets
- Default: `comp:oracle-classes` → **fits: `set:relativization`**
- Pages: 04-foundation.html
- Sentence: 中では基礎の公理も成り立つ。これは $\mathbf{WF}$ が $\bigcup$, $\mathcal{P}$, 対などの操作で閉じていること（\ref{set:wf-closure}）と \ref{set:wf-subset} から従う。したがって $\ZF^{-}$ が無矛盾なら $\ZF$ も無矛盾である。相対化の形式的な扱いは \ref{set:wf-relativization} で扱う。
  - `comp:oracle-classes`: NG — This "相対化" refers to relativization in set theory (restricting formulas to the well-founded sets), not the oracle-machine complexity classes P^A/NP^A defined in the card.
  - `set:relativization`: OK

## 「辞書式順序」 in 01-foundations/04-set-theory/03-well-founded-sets
- Default: `set:well-order-sum-product-def` → **no candidate fits**
- Pages: 02-size-of-wf.html, 05-wf-recursion.html, 06-mostowski.html
- Sentence: n-bound} から直ちに可算である。しかし AC なしでは、可算個の有限集合（たとえば 2 元集合）の和が可算とは限らない。ここでは各 $R(n)$ の数え方 $F_{n}$ を**一斉に**定義したので AC が不要になった。Kunen は、$R(n)$ の整列順序から $R(n+1)={}^{R(n)}2$ の辞書式順序を作ることを帰納的にくり返して、同じことを示している。
  - `set:well-order-sum-product-def`: NG — It refers to the lexicographic order on function spaces \({}^{R(n)}2\), not the lexicographic product of two well-ordered sets defined in the card.
  - `top:double-arrow`: NG — Here 辞書式順序 refers to the lexicographic order on the function space ${}^{R(n)}2$, not the lexicographic order on $[0,1]\times\{0,1\}$ defining the double arrow space.

## 「連続」 in 01-foundations/04-set-theory/03-well-founded-sets
- Default: `comp:monotone-continuous` → **fits: `top:continuous`**
- Pages: 02-size-of-wf.html
- Sentence: *Step 3（同相）.* $U\in\mathcal{T}$ なら $f^{-1}[U]\in\mathcal{T}'$ なので $f$ は連続。$V\in\mathcal{T}'$ なら $V=f^{-1}[U]$（$U\in\mathcal{T}$）で、$(f^{-1})^{-1}[V]=f[V]=U\in\mathcal{T}$ なので $f^{-1}$ も連続。
  - `comp:monotone-continuous`: NG — This "連続" refers to continuity of a map between topological spaces, not the fixed-point definition of continuity on power sets.
  - `cx:limit-continuity`: NG — This is continuity of maps between topological spaces, not the complex-function ε-δ definition on a subset of ℂ.
  - `top:continuous`: OK

## 「閉包」 in 01-foundations/04-set-theory/03-well-founded-sets
- Default: `set:finitary-closure` → **no candidate fits**
- Pages: 01-cumulative-hierarchy.html, 02-size-of-wf.html
- Sentence: } の操作では閉じている（\ref{set:r-limit-closure}）。しかし (1) の性質はもたない：$R(\lambda)\subseteq R(\lambda)$ だが $R(\lambda)\notin R(\lambda)$（$\rank(R(\lambda))=\lambda$）。(1) は単なる閉包性よりはるかに強い。
  - `set:finitary-closure`: NG — Here "閉包性" refers to a set being closed under operations (closure property), not the minimal closed superset called 閉包 in the card.
  - `logic:ltl-size`: NG — Here 閉包 refers to closure under an operation (set-theoretic closure / closedness), not the LTL formula closure CL(A) defined in the card.
  - `logic:ctl-closure`: NG — Here 閉包 refers to closure of a set under an operation (set-theoretic closure), not the CTL closure set CL(A) defined in the card.
  - `set:pred-closure`: NG — Here "閉包" refers to closure under an operation (closedness of a set under a function), not the transitive closure $\mathrm{cl}(\mathbf{A},x,\mathbf{R})$ defined in the card.
  - `top:interior-closure`: NG — Here "閉包" refers to closure under an operation (closure property), not the topological closure of a subset.

## 「プログラム」 in 01-foundations/04-set-theory/04-consistency-proofs
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 03-more-absoluteness.html
- Sentence: **高い視点から：整礎性が「内部の計算」を正しくする.** 再帰で定義される関数の絶対性（\ref{set:absolute-wf-recursion}）は、推移的なモデルの住人が同じ漸化式で計算すれば同じ答えを得る、ということである。これは計算機科学で、同じプログラムをどの環境で実行しても（必要なデータがそろっていれば）同じ結果を返す、という「参照透過性」に似ている。整礎性は「計算が必ず止まること」、推移性は「必要なデータ（前者の集合）がすべて手元にあること」にあたる。冪集合はこの意味で「計算」ではなく、環境の大きさそのものに依存するので絶対的でない。
  - `logic:pdl-syntax`: NG — Here "プログラム" is used in the general computer-science sense of a program/algorithm, not the inductively defined PDL program built from atomic programs with composition, choice, iteration, and test.
  - `logic:while-program`: NG — Here "プログラム" is used in the general computer-science sense of a program whose execution is environment-independent, not specifically the inductively defined while-program syntax of Definition 13.1.

## 「上限」 in 01-foundations/04-set-theory/04-consistency-proofs
- Default: `set:order-dedekind-complete` → **no candidate fits**
- Pages: 03-more-absoluteness.html, 05-reflection.html
- Sentence: **(a)** $\beta$ に関する再帰（\ref{set:ordinal-exponentiation}）で、各段の操作（積、上限 $\bigcup$、場合分け）は絶対的なので \ref{set:absolute-wf-recursion}（$\mathbf{R}=\in$, $\mathbf{A}=\mathbf{ON}$）。**(b)** $\rank(x)=\sup\{\rank(y)+1:y\in x\}$ という $x$ に関する $\
  - `set:order-dedekind-complete`: NG — Here the term 上限 refers to the supremum operation $\bigcup$ in ordinal exponentiation, not the definition of Dedekind completeness.
  - `logic:rm-analysis-defs`: NG — Here "上限" means the supremum of a set of ordinals (the union $\bigcup$), not the least upper bound of a real sequence as defined in the card.
  - `calc:supremum`: NG — Here "上限" means the supremum of a set of ordinals (least upper bound), which matches the card's definition of 上限 as the least upper bound of a subset of a totally ordered set.

## 「代入」 in 01-foundations/04-set-theory/04-consistency-proofs
- Default: `logic:substitution` → **no candidate fits**
- Pages: 02-absoluteness.html
- Sentence: 以後、このように絶対的な論理式に絶対的な演算を代入し、有界量化子と命題結合子を施して得られる論理式が絶対的であることを「代入による」と言う。
  - `logic:substitution`: NG — This "代入" refers to substituting operations into formulas to build absolute formulas, not the syntactic substitution of a term for a variable defined in the card.
  - `logic:modal-substitution`: NG — Here "代入" refers to substituting operations into absolute formulas, not the map σ from propositional variables to modal formulas defined in the card.
  - `logic:mu-substitution`: NG — This "代入" refers to substituting operations into absolute formulas, not the capture-avoiding substitution of a formula for a variable defined in the card.
  - `logic:lambda-substitution`: NG — This "代入" refers to substituting operations into formulas in the arithmetic hierarchy, not the lambda-calculus substitution operation defined in the card.

## 「合成」 in 01-foundations/04-set-theory/04-consistency-proofs
- Default: `set:relation-composition` → **no candidate fits**
- Pages: 02-absoluteness.html, 03-more-absoluteness.html, 05-reflection.html
- Sentence: 第一・第三の同値は、合成した式の展開 $\exists\vec{u}\,(\bigwedge_{i}u_{i}=G_{i}(\vec{y})\land\varphi(\vec{u}))$ を相対化したものと、$\forall\vec{y}\,\exists!u\,(u=G_{i}(\vec{y}))$ が $\mathbf{M}$, $\ma
  - `set:relation-composition`: NG — Here "合成" refers to composing/substituting formulas (a syntactic operation on expressions), not the composition of two relations as defined in the card.
  - `logic:pdl-syntax`: NG — Here "合成" refers to composing formulas/functions (substitution), not the PDL program composition operator α;β defined in the card.
  - `logic:while-program`: NG — Here "合成" refers to composing formulas/functions (substitution into expressions), not the sequential composition of while-programs defined in the card.
  - `cat:category`: NG — Here "合成" refers to composing/substituting formulas (composition of expressions), not composition of morphisms in a category as defined in the card.
  - `cat:non-symmetric-operad`: NG — This "合成" refers to composing formulas/functions in model theory, not the operad composition operation γ defined in the card.

## 「推移的」 in 01-foundations/04-set-theory/04-consistency-proofs
- Default: `set:transitive-set` → **no candidate fits**
- Pages: 01-relativization.html, 02-absoluteness.html, 03-more-absoluteness.html, 04-h-kappa.html, 05-reflection.html, 06-appendices.html
- Sentence: 、しかもゲーデルの第二不完全性定理により $\ZF$ の中では形式化できない。しかし同じ考え方を**相対化**として定式化すると、「$\ZF^{-}$ が無矛盾なら $\ZF$ も無矛盾」のような**相対無矛盾性**の結果が得られる。本ページでは、論理式のクラスへの相対化を定義し、相対無矛盾性の基本補題を示したうえで、推移的なクラスで各公理が成り立つための簡単な十分条件を与え、$\mathbf{WF}$ と $R(\omega)$ が $\ZF-\mathrm{Inf}$ のモデルであることを示す。無限公理は定義された記号 $0$ と $S$ を含むので、その扱いは絶対性（次ページ）を待つ。（Kunen 第 IV 章 §1–2 に対応する
  - `set:transitive-set`: NG — Here "推移的なクラス" refers to a transitive class (a class closed under elements), not a transitive set as defined in the card; the notion is the class analogue, not the set definition given.
  - `logic:relation-properties`: NG — Here "推移的" describes a class (transitive class: if $x\in C$ and $y\in x$ then $y\in C$), not a binary relation being transitive as defined in the card.
  - `grp:faithful-transitive`: NG — Here "推移的" refers to a transitive class in set theory (closed under elements), not a transitive group action.

## 「有界」 in 01-foundations/04-set-theory/04-consistency-proofs
- Default: `calc:supremum` → **no candidate fits**
- Pages: 02-absoluteness.html, 04-h-kappa.html
- Sentence: とくに $S=\emptyset$ として、論理的に同値な論理式は同時に絶対的である。$\forall x\in y\,\chi$ は $\lnot\exists x\in y\,\lnot\chi$ と論理的に同値なので、有界な全称量化子も（推移的なクラスについて）絶対性を保つ。$x\subseteq y$（$\forall z\,(z\in x\to z\in y)$）は Δ₀ 論理式 $\lnot\exists z\in x\,\lnot(z\in y)$ と論理的に同値なので、推移的な $\mathbf{M}$ について絶対的である。
  - `calc:supremum`: NG — Here "有界" modifies a quantifier (bounded quantifier), not a subset being bounded above/below in an ordered set.
  - `logic:rm-analysis-defs`: NG — Here "有界" modifies a quantifier (bounded universal quantifier), not a real sequence as in the card's definition.

## 「直和」 in 01-foundations/04-set-theory/04-consistency-proofs
- Default: `mod:direct-sum` → **no candidate fits**
- Pages: 04-h-kappa.html
- Sentence:  \ref{set:transitive-closure-basic.6} より $\operatorname{trcl}(\{x,y\})=\{x,y\}\cup\operatorname{trcl}(x)\cup\operatorname{trcl}(y)$。整列可能な集合 $A,B$ の和 $A\cup B$ は直和 $A\sqcup B$ に単射で埋め込め、直和は整列可能で濃度 $\lvert A\rvert+\lvert B\rvert$（\ref{set:cardinal-sum-product}）をもつ。$\kappa$ 未満の二つの基数の和は、両方有限なら有限（\ref{set:finite-cardinal-arith
  - `mod:direct-sum`: NG — This use of 直和 refers to the disjoint union of sets, not the direct sum of modules defined in the card.
  - `rep:constructions`: NG — This "直和" is the disjoint union of sets, not the direct sum of representations defined in the card.

## 「直積」 in 01-foundations/04-set-theory/04-consistency-proofs
- Default: `set:cartesian-product` → **no candidate fits**
- Pages: 02-absoluteness.html, 03-more-absoluteness.html
- Sentence: をいう。推移的なモデルについて絶対的な論理式・関数をたくさん知っていれば、モデルの中で公理や命題が成り立つかを、定義を展開せずに確かめられる。本ページでは、有界量化子だけをもつ論理式（**Δ₀ 論理式**）が推移的なクラスについて絶対的であることを示し、それをもとに集合論の基本的な関係・演算（対、和、共通部分、順序対、直積、関係、関数など）が $\ZF^{-}-\mathrm{P}-\mathrm{Inf}$ の推移的なモデルについて絶対的であることを示す。応用として、$R(\omega)$ で無限公理の否定と選択公理が成り立つことを示し、$\mathrm{Con}(\ZF^{-})\to\mathrm{Con}(\ZFC-\mathr
  - `set:cartesian-product`: NG — Here 直積 refers to the Cartesian product operation as an absolute set-theoretic function on a transitive model, not the specific definition of the product set \(A\times B\) given in the card.
  - `grp:direct-product`: NG — This “直積” refers to the Cartesian product in set theory, not the direct product of groups defined in the card.
  - `mod:direct-sum`: NG — Here “直積” refers to the Cartesian product of sets in set theory, not the direct product of modules defined in the card.

## 「結合子」 in 01-foundations/04-set-theory/04-consistency-proofs
- Default: `logic:weak-reduction` → **no candidate fits**
- Pages: 02-absoluteness.html
- Sentence: 以後、このように絶対的な論理式に絶対的な演算を代入し、有界量化子と命題結合子を施して得られる論理式が絶対的であることを「代入による」と言う。
  - `logic:weak-reduction`: NG — Here "結合子" means a logical connective (命題結合子), not a variable-free CL term as defined in the card.
  - `cat:monoidal-category`: NG — Here "結合子" means logical connective (命題結合子), not the associator natural isomorphism of a monoidal category.

## 「表現可能」 in 01-foundations/04-set-theory/04-consistency-proofs
- Default: `cat:representable-functor` → **fits: `comp:representable`**
- Pages: 06-appendices.html
- Sentence: ash\mathrm{CON}(\ulcorner\ZFC+I\urcorner)$ で、\ref{set:second-incompleteness-zf} より $\ZFC+I$ は矛盾する。すると $\ZFC+I$ からの矛盾の導出が実際に存在し、それが導出であることは $\ZFC$ で証明できる（再帰的な関係の表現可能性。Kunen 第 I 章 §14 による事実）ので $\ZFC\vdash\lnot\mathrm{CON}(\ulcorner\ZFC+I\urcorner)$ となり、$\ZFC$ は矛盾する。
  - `cat:representable-functor`: NG — This "表現可能性" is the representability of recursive relations in arithmetic (Kunen), not the category-theoretic representable functor of the card.
  - `comp:representable`: OK

## 「閉包」 in 01-foundations/04-set-theory/04-consistency-proofs
- Default: `set:finitary-closure` → **no candidate fits**
- Pages: 01-relativization.html, 05-reflection.html
- Sentence: - 累積階層 $R(\alpha)$、整礎集合のクラス $\mathbf{WF}$、ランク、$x\in\mathbf{WF}\iff x\subseteq\mathbf{WF}$（\ref{set:wf-subset}）、$\mathbf{WF}$ と $R(\lambda)$ の閉包性（\ref{set:wf-closure}, \ref{set:r-limit-closure}）、$R(n)$ の有限性（\ref{set:r-n-finite}）は \ref{set:page-cumulative-hierarchy}, \ref{set:page-size-of-wf} のとおり。
  - `set:finitary-closure`: NG — Here "閉包性" refers to closure properties of the class WF and the sets R(λ) under operations, not the minimal closed superset (closure) of a set under a family of finitary operations defined in the card.
  - `logic:ltl-size`: NG — Here "閉包性" refers to closure properties of the cumulative hierarchy and WF (being closed under certain operations), not the specific syntactic closure CL(A) of an LTL formula defined in the card.
  - `logic:ctl-closure`: NG — Here "閉包性" refers to closure properties of the cumulative hierarchy and WF (set-theoretic closure), not the modal-logic closure set CL(A) defined in the card.
  - `set:pred-closure`: NG — Here "閉包性" refers to closure properties of the class WF and R(λ), not the specific closure cl(A,x,R) defined in the card.
  - `top:interior-closure`: NG — Here "閉包性" means closure property (being closed under an operation), not the topological closure of a set.

## 「推移的」 in 01-foundations/04-set-theory/05-definability
- Default: `set:transitive-set` → **fits: `logic:relation-properties`**
- Pages: 01-formalizing-definability.html, 02-ordinal-definable.html
- Sentence: hrm{Df}(A,n)$ を、$\ZF$ の中の一つの演算として定義する。構文論を形式化する代わりに、基本的な関係から出発して、補集合・共通部分・射影（$\lnot$, $\land$, $\exists$ に対応）で閉じた最小の集まりとして定めるのである。さらにその枚挙 $\mathrm{En}$ を定め、それらが推移的なモデルについて絶対的であることを示す。これは次ページの順序数定義可能集合と、第 VI 章の構成可能集合の土台になる。本ページの議論はすべて $\ZF-\mathrm{P}$ の中で行い、選択公理は（明記した \ref{set:downward-lst} を除いて）使わない。（Kunen 第 V 章冒頭と §1 に対応
  - `set:transitive-set`: NG — Here "推移的なモデル" means a transitive model (a model whose domain is a transitive set), which is the same notion as the card's definition of a transitive set applied to the model's underlying set.
  - `logic:relation-properties`: OK

## 「ランク」 in 01-foundations/04-set-theory/06-constructible-sets
- Default: `set:rank` → **no candidate fits**
- Pages: 01-basic-properties-of-l.html, 02-zf-in-l.html, 03-ac-gch-in-l.html, 04-diamond-in-l.html
- Sentence: $x\in \mathbf{L}$ について、$x\in L_{\beta+1}$ となる最小の $\beta$ を $x$ の **$\mathbf{L}$-ランク**といい、$\rho(x)$ と書く。
  - `set:rank`: NG — It defines the rank relative to the constructible hierarchy \(L\) (the \(\mathbf{L}\)-rank \(\rho(x)\)), not the rank in the cumulative hierarchy \(\mathbf{WF}\) given by the card.
  - `logic:ctl-fulfil-sets`: NG — It defines the L-rank of a set x in Gödel's constructible hierarchy, not the rank of a vertex in the CTL satisfaction-set construction.
  - `logic:attractor`: NG — It defines a different notion: the least level $\beta$ at which $x$ enters the constructible hierarchy $\mathbf{L}$, not the parity-game attractor rank.
  - `comp:tree-rank`: NG — This defines the L-rank of a set in Gödel's constructible hierarchy, not the rank of a node in a well-founded tree.
  - `set:relation-rank`: NG — This defines the L-rank (a different notion from the well-founded relation rank defined in the card).
  - `pt:world-rank`: NG — This defines the constructible-hierarchy rank of a set, not the rank of a world in a finite transitive irreflexive frame.

## 「上限」 in 01-foundations/04-set-theory/06-constructible-sets
- Default: `set:order-dedekind-complete` → **no candidate fits**
- Pages: 04-diamond-in-l.html
- Sentence: なる最小の順序数とする。これは $\omega_{1}$ 未満にとれる：$L_{\rho_{k}}$ は可算（\ref{set:l-alpha-size}）なので値 $H_{mn}(s)$ は可算個で、各値の $\mathbf{L}$-ランクは $\omega_{1}$ 未満、$\omega_{1}$ は正則なのでその上限は $\omega_{1}$ 未満。$\rho\defeq\sup_{k}\rho_{k}<\omega_{1}$（同じく正則性）は極限で、$L_{\rho}=\bigcup_{k}L_{\rho_{k}}$ は各 $H_{mn}$ で閉じている。よって $\rho\in C_{1}$、$\rho>\xi$。
  - `set:order-dedekind-complete`: NG — Here 上限 means the supremum of a set of ordinals (least upper bound), which is the same general notion as in the card, but the card defines Dedekind completeness of a linear order, not the term 上限 itself; the term is used with its ordinary meaning, not as the defined notion.
  - `logic:rm-analysis-defs`: NG — Here "上限" means the supremum of a set of ordinals, not the least upper bound of a real sequence as defined in the card.
  - `calc:supremum`: NG — Here "上限" means the supremum of a set of ordinals, which matches the card's definition of least upper bound in a totally ordered set.

## 「後続」 in 01-foundations/04-set-theory/06-constructible-sets
- Default: `logic:ctl-semantics` → **no candidate fits**
- Pages: 01-basic-properties-of-l.html, 02-zf-in-l.html, 04-diamond-in-l.html
- Sentence: - AC は極限の場合の \ref{set:union-bound} と、後続の場合の \ref{set:definable-power-basic.4} で使った。Kunen によれば、この補題は AC なしでも証明できる（Kunen 第 VI 章の演習 1。$L_{\alpha}$ の具体的な整列順序を作ることによると考えられるが、本サイトでは確かめていない）。
  - `logic:ctl-semantics`: NG — Here "後続" means "successor" in the set-theoretic/ordinal sense (successor case), not the CTL successor state defined in the card.
  - `logic:ctl-successor-def`: NG — Here "後続" means "successor" in the set-theoretic sense (successor ordinal/cardinal), not the modal-logic successor relation on worlds defined in the card.
  - `logic:parity-game`: NG — Here "後続" means "successor" in the set-theoretic sense (successor ordinal/cardinal), not the graph-theoretic successor vertices defined in the parity game card.

## 「有界」 in 01-foundations/04-set-theory/06-constructible-sets
- Default: `calc:supremum` → **no candidate fits**
- Pages: 02-zf-in-l.html, 03-ac-gch-in-l.html
- Sentence: rown}\langle x\rangle=s\cup\{\langle\dom(s),x\rangle\}$ も絶対的（\ref{set:absolute-relations-functions}）。したがって $F$ は（$A$ を範囲とする分出で定まり）絶対的で、$T_{A}$ も（$\omega$ を範囲とする有界な量化と絶対的な演算で書けるので）絶対的。像をとる操作は $M$ の置換公理のもとで絶対的（\ref{set:df-absolute} の証明の Step 3 と同じ）なので、$\mathcal{D}$ は絶対的である。
  - `calc:supremum`: NG — Here "有界な量化" means bounded quantification (a logical notion), not the order-theoretic boundedness of a set defined in the card.
  - `logic:rm-analysis-defs`: NG — Here "有界" refers to bounded quantification over $\omega$ in set theory, not a bounded real sequence as defined in the card.

## 「正則」 in 01-foundations/04-set-theory/06-constructible-sets
- Default: `set:regular-cardinal` → **no candidate fits**
- Pages: 02-zf-in-l.html, 03-ac-gch-in-l.html, 04-diamond-in-l.html
- Sentence: $\ZF-\mathrm{P}+\mathbf{V}=\mathbf{L}$ の推移的な集合モデルの例として、正則な $\kappa>\omega$ についての $L_{\kappa}$ がある（次ページで示す）。
  - `set:regular-cardinal`: NG — Here 正則 modifies the cardinal κ in the sense of a regular cardinal (κ is a limit ordinal with cf(κ)=κ), which matches the card's definition of 正則基数, so it is the same notion.
  - `cx:holomorphic`: NG — Here "正則" refers to a regular cardinal in set theory, not a holomorphic (complex-differentiable) function.
  - `top:separation-axioms`: NG — Here "正則" means a regular cardinal, not the topological regularity (separation axiom) defined in the card.
  - `ag:regular-function`: NG — This "正則" refers to a regular cardinal in set theory, not a regular function on a quasi-affine variety.
  - `ag:quasi-projective-regular`: NG — This "正則" refers to a regular cardinal in set theory, not a regular function on a quasi-projective variety.

## 「無矛盾」 in 01-foundations/04-set-theory/06-constructible-sets
- Default: `set:formal-deduction` → **no candidate fits**
- Pages: 01-basic-properties-of-l.html, 02-zf-in-l.html, 03-ac-gch-in-l.html
- Sentence: 演習 2）。さらに $\mathcal{P}(\omega)\subseteq R(\omega+1)$ であり、$\omega$ のすべての部分集合が $\mathbf{L}$ に属すると考える理由はない。$\mathcal{P}(\omega)\not\subseteq \mathbf{L}$（第 VII 章により無矛盾）なら、すべての $\alpha>\omega$ について $L_{\alpha}\neq R(\alpha)$ である。一方 $\mathbf{V}=\mathbf{L}$ も無矛盾であり（次ページ）、そのとき $\alpha=\beth_{\alpha}$ なら $L_{\alpha}=R(\alpha)$ となる
  - `set:formal-deduction`: NG — Here "無矛盾" means the statement is consistent (not contradictory) with the theory, not the defined property of a sentence set $S$ being syntactically consistent via $\mathrm{Con}(S)$.
  - `logic:prop-deduction`: NG — Here "無矛盾" means the statement is consistent with the axioms (not refutable), not the defined notion of a set of formulas being consistent (not deriving ⊥).
  - `logic:derivability`: NG — Here "無矛盾" means consistent (not contradictory) as a property of a set of formulas, but the sentence uses it to describe a set-theoretic statement being consistent, which is a different notion from derivability/consistency in natural deduction.
  - `logic:pdl-axioms`: NG — Here "無矛盾" means consistent (not contradictory) in the set-theoretic sense, not the PDL definition of a finite set $X$ with $\nvdash\neg\bigwedge X$.
  - `logic:ltl-axioms`: NG — Here "無矛盾" means consistent (not contradictory) in the set-theoretic sense, not the LTL definition of a finite set \(X\) with \(\nvdash\neg\bigwedge X\).

## 「辞書式順序」 in 01-foundations/04-set-theory/06-constructible-sets
- Default: `set:well-order-sum-product-def` → **no candidate fits**
- Pages: 03-ac-gch-in-l.html
- Sentence: 鍵となる考え方は次のとおりである。$L_{\alpha}$ の整列順序があれば ${}^{n}L_{\alpha}$ に辞書式順序が誘導され、$L_{\alpha+1}=\mathcal{D}(L_{\alpha})$ の元は「$L_{\alpha}$ の有限列 $s$ と、可算個の定義の仕方の一つ」で定まるので、その組を比べることで $L_{\alpha+1}$ を整列できる。厳密には $\mathrm{Df}$ の枚挙 $\mathrm{En
  - `set:well-order-sum-product-def`: NG — 辞書式順序 here is the lexicographic order on finite sequences, not the order on a product A×B defined by the card's 辞書式積.
  - `top:double-arrow`: NG — It refers to the general lexicographic order on finite sequences, not the specific lexicographic order on $[0,1]\times\{0,1\}$ defining the double arrow space.

## 「連続」 in 01-foundations/04-set-theory/06-constructible-sets
- Default: `comp:monotone-continuous` → **no candidate fits**
- Pages: 03-ac-gch-in-l.html
- Sentence:  $\alpha^{+}$ より小さい。したがって $A$ は $\alpha^{+}$ より前に構成済みである。フラクタル図形の任意の部分を拡大すると全体と同じ形が現れるように、$\mathbf{L}$ の小さな模型は $\mathbf{L}$ の始切片そのものになる。この硬さ（剛性）が、$\mathbf{L}$ で連続体の大きさが最小になる（GCH）理由である。
  - `comp:monotone-continuous`: NG — Here "連続体" (continuum) refers to the cardinality of the real line, not the continuity property of a function defined in the card.
  - `cx:limit-continuity`: NG — Here "連続体" (continuum) refers to the cardinality of the real numbers, not the continuity of a complex function as defined in the card.
  - `top:continuous`: NG — Here "連続体" (continuum) refers to the cardinality of the real line, not a continuous map between topological spaces.

## 「閉包」 in 01-foundations/04-set-theory/06-constructible-sets
- Default: `set:finitary-closure` → **no candidate fits**
- Pages: 01-basic-properties-of-l.html, 04-diamond-in-l.html
- Sentence: を示す。$E^{0}=0$。$m<n$ なら $E^{m+1}=E^{m}\cup\mathrm{Diag}_{=}(A,n+1,n,m)$ で、上の和の閉包性による。よって $E^{n}\in\mathrm{Df}(A,n+1)$ で、任意の $s\in{}^{n}A$ について
  - `set:finitary-closure`: NG — Here "閉包性" refers to closure of a set under unions (union-closure), not the closure of a set under a family of finitary operations as defined in the card.
  - `logic:ltl-size`: NG — Here "閉包性" refers to closure properties of a sum/union operation, not the closure CL(A) of a logical formula defined in the card.
  - `logic:ctl-closure`: NG — This "閉包性" refers to closure of a union under a diagonal operation, not the minimal formula-closed set CL(A) defined in the card.
  - `set:pred-closure`: NG — Here "閉包性" refers to closure under a union operation, not the transitive closure cl(A,x,R) defined in the card.
  - `top:interior-closure`: NG — Here "閉包性" refers to closure under an operation (closedness of a set of functions under composition), not the topological closure of a subset.

## 「c.c.c.」 in 01-foundations/04-set-theory/07-forcing
- Default: `set:ccc-space` → **fits: `set:ccc-poset`**
- Pages: 01-generic-extensions.html, 03-zfc-in-mg.html, 04-finite-partial-functions.html, 05-larger-partial-functions.html
- Sentence: $M[G]$ が $\ZFC$ 以外にどんな公理を満たすかは、$M$ の中で $\PP$ が満たす組合せ論的性質に非常に敏感であり、その性質の多くは絶対的でない。たとえば c.c.c.（\ref{set:ccc-poset}）を考える。$M$ が c.t.m. で $\PP\in M$ なら、$\mathbf{V}$ では $\PP$ は可算なので自明に c.c.c. だが、$M$ の中では c.c.c. でないことがありうる。$M$ の中では第 II 章の様々な c.c.c. な半順序や、c.c.
  - `set:ccc-space`: NG — In this sentence c.c.c. is a property of the partial order $\PP$ (countable antichains), not of a topological space as in the card.
  - `set:ccc-poset`: OK

## 「上限」 in 01-foundations/04-set-theory/07-forcing
- Default: `set:order-dedekind-complete` → **no candidate fits**
- Pages: 03-zfc-in-mg.html, 04-finite-partial-functions.html, 05-larger-partial-functions.html, 06-boolean-valued-models.html, 07-further-results.html
- Sentence: - $M$ の公理は、分出（$\rho,\tau$）、置換（Step 1 の上限）、冪集合（$S$）、選択（$\dom(\sigma)$ の枚挙）のそれぞれで、$M[G]$ の対応する公理を示すのに使った。
  - `set:order-dedekind-complete`: NG — Here「上限」refers to the bound used in the replacement axiom step (a supremum of ordinals/ranks), not the definition of Dedekind completeness for a linear order.
  - `logic:rm-analysis-defs`: NG — Here "上限" refers to the least upper bound used in the Replacement axiom step of the forcing construction, not the supremum of a real sequence as defined in the card.
  - `calc:supremum`: NG — Here "上限" refers to an upper bound on the number of steps in a construction, not the least upper bound (supremum) of a subset of an ordered set.

## 「代入」 in 01-foundations/04-set-theory/07-forcing
- Default: `logic:substitution` → **no candidate fits**
- Pages: 01-generic-extensions.html, 08-other-approaches.html
- Sentence: **高い視点から：未知数を含む式としての名前.** $\PP$-名前は、$M$ の住人にとって「未知数 $G$ を含む式」である。代数学で体 $K$ 上の多項式 $f(X)\in K[X]$ は、$X$ に値を代入するまで具体的な数を表さないが、$K$ の中で書き下せる。同様に名前 $\tau\in M^{\PP}$ は $M$ の中で書き下せ、ジェネリックな $G$ を「代入」して初めて $\tau_{G}$ という集合になる。$M[G]$ は $K[X]$ に $X=a$ を代入して得られる拡大体 $K(a)$ の類似であり
  - `logic:substitution`: NG — This "代入" refers to substituting a generic filter/value into a name in forcing, not the syntactic substitution of terms/variables in first-order logic defined by the card.
  - `logic:modal-substitution`: NG — This "代入" refers to substituting a value for a variable in algebra/forcing, not the modal-logic substitution map on propositional variables defined in the card.
  - `logic:mu-substitution`: NG — This "代入" refers to substituting a generic filter/value into a name (forcing), not the capture-avoiding syntactic substitution of formulas defined in the card.
  - `logic:lambda-substitution`: NG — This "代入" refers to substituting a generic filter G into a P-name in forcing, not lambda-calculus term substitution.

## 「半順序」 in 01-foundations/04-set-theory/07-forcing
- Default: `set:total-order` → **fits: `set:forcing-poset`**
- Pages: 01-generic-extensions.html, 04-finite-partial-functions.html, 05-larger-partial-functions.html, 06-boolean-valued-models.html, 07-further-results.html
- Sentence: - 半順序（強制法の意味で）$\langle\PP,\le\rangle$（反射律と推移律を満たし、反対称律は要求しない）、両立・非両立 $p\perp q$、稠密集合、フィルターは \ref{set:forcing-poset}, \ref{set:compatible}, \ref{set:dense-set}, \ref{
  - `set:total-order`: NG — In forcing, a partial order is a reflexive and transitive relation without antisymmetry, whereas the card defines a strict partial order as irreflexive and transitive.
  - `set:forcing-poset`: OK

## 「完備化」 in 01-foundations/04-set-theory/07-forcing
- Default: `calc:cauchy-construction` → **no candidate fits**
- Pages: 06-boolean-valued-models.html, 08-other-approaches.html
- Sentence: - ブール代数（\ref{set:boolean-algebra}。補元は $-a$、$\mathbb{B}^{+}=\mathbb{B}\setminus\{\mathbf{0}\}$）、完備ブール代数（\ref{set:complete-boolean-algebra}）、ブール完備化（\ref{set:boolean-completion}）は第 II 章のとおり。
  - `calc:cauchy-construction`: NG — the sentence refers to Boolean completion, not the Cauchy-sequence construction of the reals.
  - `ring:completion`: NG — This "ブール完備化" (Boolean completion) is a different notion from the $I$-adic completion defined in the card.
  - `top:completion`: NG — Here "完備化" refers to the Boolean completion of a Boolean algebra, not the metric-space completion defined in the card.

## 「後続」 in 01-foundations/04-set-theory/07-forcing
- Default: `logic:ctl-semantics` → **no candidate fits**
- Pages: 04-finite-partial-functions.html, 05-larger-partial-functions.html
- Sentence:  が $M$ の正則基数なら、$\cf(\alpha)^{M[G]}=\cf(\alpha)^{M}=\alpha$ なので $\alpha$ は $M[G]$ の正則基数（\ref{set:regular-is-cardinal}）。$\beta>\omega$ が $M$ の極限基数なら、$M$ の正則な（実際には後続の：\ref{set:successor-regular}）基数は $\beta$ で非有界であり、それらは $M[G]$ でも正則、したがって基数である。$\beta$ はそれらの上限なので、$M[G]$ でも基数である（\ref{set:successor-cardinal-basic.3}）。$M$ の無限基数は
  - `logic:ctl-semantics`: NG — Here "後続" means successor cardinal/ordinal in set theory, not a successor state in a CTL Kripke model.
  - `logic:ctl-successor-def`: NG — Here "後続" means successor (as in successor cardinal), not the modal-logic successor relation defined in the card.
  - `logic:parity-game`: NG — Here "後続" means successor (as in successor cardinal), not a graph successor vertex as defined in the parity game card.

## 「推論規則」 in 01-foundations/04-set-theory/07-forcing
- Default: `logic:deduction-system` → **no candidate fits**
- Pages: 08-other-approaches.html
- Sentence: （命題記号 $p_{ni}$ をもつ長さ $2^{\omega}$ の文。Kunen の本文ではこの式が判読できなかったので、説明から復元した）とすると、$\varphi$ は妥当だが通常の無限論理の推論規則では導出できない。$\varphi$ はある適当なブール値の解釈で真理値 $\mathbf{0}$ をとるからである：$2^{\omega}$ の正則開集合代数（$\mathrm{Fn}(\omega,2)$ の完備化。演習 G9）で、$p_{ni}$ に真理値 $\{f\in{}^{\omega}2:f(n)=i\}
  - `logic:deduction-system`: NG — the sentence uses 推論規則 for inference rules of infinitary logic, not the specific inductively defined natural-deduction derivations of definition 4.1.
  - `pt:pa-x`: NG — Here "推論規則" refers to the inference rules of ordinary infinitary logic, not the specific one-sided sequent calculus rules defining PA(X).

## 「有界」 in 01-foundations/04-set-theory/07-forcing
- Default: `calc:supremum` → **no candidate fits**
- Pages: 03-zfc-in-mg.html, 04-finite-partial-functions.html, 05-larger-partial-functions.html
- Sentence: の計算で確かめられる。$M[G]$ の場合、元は「$G$ を含む $M$ の名前」で表され、集合論の公理（分出・置換・冪集合）で閉じることは名前の操作で確かめられる。ただし集合論では「有理式」にあたる名前の集まりが巨大（真のクラス）なので、置換や冪集合で必要な名前を $M$ の**集合**に集められること（ランクによる有界化、$\mathcal{P}(\dom(\sigma)\times\PP)^{M}$）が鍵になる。
  - `calc:supremum`: NG — Here "有界化" means bounding by a set/rank in forcing, not the order-theoretic boundedness (upper/lower bounds) defined in the card.
  - `logic:rm-analysis-defs`: NG — Here "有界" means boundedness of a collection of names by rank (bounded in the set-theoretic sense), not the boundedness of a real sequence defined in the card.

## 「連続」 in 01-foundations/04-set-theory/07-forcing
- Default: `comp:monotone-continuous` → **no candidate fits**
- Pages: 04-finite-partial-functions.html
- Sentence: とくに $M$ が GCH を満たせば、$M$ の中で $\cf(\kappa)>\omega$ なら $\kappa^{\omega}=\kappa$（\ref{set:gch-exponentiation.3}）。したがって連続体は、共終数が $\omega$ でないものなら何でもよいことが無矛盾である（ケーニッヒの補題 \ref{set:konig-cofinality-power} より $\cf(2^{\omega})>\omega$ なので、これは最善である：$\cf(2^{\omega})=\omega$ なら $(2^{\omeg
  - `comp:monotone-continuous`: NG — Here "連続" refers to the continuum (連続体, the set of reals), not the continuity of a function as defined in the card.
  - `cx:limit-continuity`: NG — Here "連続体" (continuum) is the set of real numbers, not the continuity of a function as defined in the card.
  - `top:continuous`: NG — Here "連続体" (continuum) refers to the real line/cardinality of the continuum, not a continuous map between topological spaces.

## 「閉包」 in 01-foundations/04-set-theory/07-forcing
- Default: `set:finitary-closure` → **no candidate fits**
- Pages: 06-boolean-valued-models.html
- Sentence: mathbb{B}$ は、半順序 $\PP$ の正則開集合代数として得られる（\ref{set:boolean-completion}）。真理値 $\lVert\varphi\rVert$ は「$\varphi$ が成り立つ条件の集まり」を位相空間の正則開集合として表したもので、$\lnot$ が補元（正則開集合では「閉包の補集合の内部」）、$\exists$ が上限（和の正則化）に対応する。二値の論理では命題は真か偽のどちらかだが、ブール値モデルでは命題は $\mathbb{B}$ の値をとり、ジェネリックなフィルター $G$（$\mathbb{B}$ の $M$ 上の超フィルター）は「どの値を真とみなすか」を一つ選んで二値化する操作
  - `set:finitary-closure`: NG — This "閉包" is the topological closure of a set (closure of an open set), not the closure of a set under a family of finitary operations as defined in the card.
  - `logic:ltl-size`: NG — Here "閉包" means the topological closure of a regular open set, not the set of subformulas plus X(C U D) defined in the card.
  - `logic:ctl-closure`: NG — Here 閉包 means topological closure (closure of a set), not the smallest set of subformulas closed under the given CTL conditions.
  - `set:pred-closure`: NG — Here 閉包 means the topological closure of a set, not the well-founded recursive closure cl(A,x,R) defined in the card.
  - `top:interior-closure`: NG — Here 閉包 appears only inside the compound expression「閉包の補集合の内部」describing the regular-open complement, not as the term being defined by the card.

## 「c.c.c.」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `set:ccc-space` → **fits: `set:ccc-poset`**
- Pages: 01-products.html, 02-cohen-model.html, 03-kurepa-independence.html, 05-iterated-forcing.html, 06-ma-consistency.html, 07-countable-iterations.html
- Sentence: **関連する結果.** 積の補題から、$\PP_{1}\in M$ の性質が $M[G_{0}]$ でも保たれるかどうか（たとえば c.c.c. や閉性）が問題になる。一般に c.c.c. な p.o. の積は c.c.c. とは限らないが、$\mathrm{MA}(\omega_{1})$ のもとでは c.c.c. な p.o. の積は c.c.c. であることが知られている（一般にはこう言われている。本サイトでは扱っていない）。
  - `set:ccc-space`: NG — In this sentence c.c.c. is a property of partial orders (forcing notions), not of topological spaces as in the card.
  - `set:ccc-poset`: OK

## 「イデアル」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `set:ideal` → **no candidate fits**
- Pages: 05-iterated-forcing.html, 06-ma-consistency.html, 07-countable-iterations.html
- Sentence: ——この二段階の拡大を、$M$ の中の一つの p.o. $\PP*\pi$ による一段階の拡大として実現する。$\mathbb{Q}\notin M$ でもよい点が積（\ref{set:page-products}）との違いである。これを超限回繰り返したものが**反復強制**であり、極限段階では条件の「台」を指定されたイデアルに制限する。主な結果は、二段階反復の分解定理（\ref{set:two-step-factor}）、κ-c.c. の二段階での保存（\ref{set:two-step-cc}）と有限台反復での保存（\ref{set:fs-iteration-cc}）、および「小さい集合は途中の段階に現れる」こと（\ref{set:it
  - `set:ideal`: NG — This "イデアル" refers to an ideal on the set of forcing conditions used to restrict supports in iterated forcing, not the set-theoretic ideal (a family of subsets of a nonempty set closed under unions and subsets) defined in the card.
  - `ring:ideal`: NG — Here "イデアル" refers to an ideal on a forcing poset (a set of conditions), not an ideal of a commutative ring as defined in the card.

## 「上限」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `set:order-dedekind-complete` → **fits: `calc:supremum`**
- Pages: 05-iterated-forcing.html
- Sentence: とおき（$\bigcup\sigma$ は $\sigma$ の上限）、各 $\alpha\in E$ について $p_{\alpha}\Vdash\check{\alpha}=\bigcup\sigma$ となる $p_{\alpha}$ を選ぶ（$M$ の中の AC）。$\alpha\neq\alpha'$ なら $p_{\alpha}\perp p_{\alpha'}$：共通の拡
  - `set:order-dedekind-complete`: NG — the term 上限 here denotes the supremum of a set σ in the forcing order, which is the same notion of least upper bound used in the definition of Dedekind completeness.
  - `logic:rm-analysis-defs`: NG — Here "上限" means the least upper bound (supremum) of a set σ, whereas the card defines it only for a real sequence (x_{n}), so the notion is not the same.
  - `calc:supremum`: OK

## 「互いに素」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `grp:gcd` → **no candidate fits**
- Pages: 07-countable-iterations.html
- Sentence: $1\le\lambda\le\omega$ とし、$\omega_{1}$ を $\lambda$ 個の互いに素な非可算集合 $x_{i}$（$i<\lambda$）に分割する。$\{x_{i}:i<\lambda\}$ は $\omega_{1}$ 上の極大概素族であることを示せ。
  - `grp:gcd`: NG — Here "互いに素" means pairwise disjoint sets, not coprime integers as defined in the card.
  - `pt:prime`: NG — Here "互いに素" means pairwise disjoint sets, not the number-theoretic coprime relation defined in the card.
  - `grp:cycle`: NG — Here "互いに素" means pairwise disjoint sets, not disjoint permutations as defined in the card.

## 「半順序」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `set:total-order` → **fits: `set:forcing-poset`**
- Pages: 05-iterated-forcing.html, 06-ma-consistency.html
- Sentence: - $M$ は $\ZFC$ の c.t.m.。p.o.（強制法の意味の半順序、\ref{set:forcing-poset}）は狭義でなくてよい：$p\le p'\le p$ でも $p=p'$ とは限らない。
  - `set:total-order`: NG — Here "半順序" refers to a forcing poset with a reflexive preorder, not the strict partial order defined in the card.
  - `set:forcing-poset`: OK

## 「基数の和」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `set:cardinal-sum-product` → **fits: `set:cardinal-sum-general`**
- Pages: 04-easton-forcing.html
- Sentence:  p\restr{\dom(E^{-}_{\lambda})},p\restr{\dom(E^{+}_{\lambda})}\rangle$ が同型である。制限は 3 の (a)〜(c) を保ち、逆に二つの成分を合わせたものも (c) を満たす（正則な $\lambda'$ について、$\lambda'$ 未満の二つの基数の和は $\lambda'$ 未満）。順序と $\mathbf{1}$ は成分ごとなので保たれる。
  - `set:cardinal-sum-product`: NG — Here "基数の和" refers to the sum of two cardinals less than λ' being less than λ' (a property of cardinal addition), which is the same notion defined in the card, so it matches.
  - `set:cardinal-sum-general`: OK

## 「完備化」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `calc:cauchy-construction` → **no candidate fits**
- Pages: 05-iterated-forcing.html
- Sentence: **有限台反復の「標準性」.** 同じ p.o. を表す名前は多数ある。$\mathbf{1}\Vdash\pi=\pi'$（最大元と順序の一致も含めて）でも $\PP*\pi$ と $\PP*\pi'$ は同型とは限らないが、同型な完備化をもつ（同じ完備ブール代数に稠密に埋め込める、\ref{set:dense-embedding}）。これを $\PP\approx\mathbb{Q}$ と書くと、$\mathbf{1}\Vdash\pi=\pi'$ なら $M$ で $\PP*\pi\approx\PP*\pi'$ であり、無限の反復でも有限台なら同
  - `calc:cauchy-construction`: NG — This "完備化" refers to Boolean-algebra completion in forcing theory, not the construction of the reals via Cauchy sequences.
  - `ring:completion`: NG — This "完備化" refers to Boolean algebra completion (dense embedding into a complete Boolean algebra), not the $I$-adic completion of a module.
  - `top:completion`: NG — This "完備化" refers to the completion of a partial order (a complete Boolean algebra), not the completion of a metric space as defined in the card.

## 「後続」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `logic:ctl-semantics` → **no candidate fits**
- Pages: 05-iterated-forcing.html, 07-countable-iterations.html
- Sentence: $\mathcal{J}$ はイデアルで有限集合を含むので、すべての $\xi$ と $p\in\PP_{\xi}$ について $\mathrm{supt}(p)\in\mathcal{J}$ である（極限段階でしか定義に含めていないが）。実際 $\xi$ についての帰納法で、後続段階では $\mathrm{supt}(p)\subseteq\mathrm{supt}(p\restr{\xi})\cup\{\xi\}$ で、$\{\xi\}\in\mathcal{J}$（$\xi<\alpha$ の有限集合）とイデアルの和と部分集合についての閉性を使えばよい。
  - `logic:ctl-semantics`: NG — Here "後続段階" means "successor stage" in an induction on ordinals, not a successor state in a CTL Kripke model.
  - `logic:ctl-successor-def`: NG — Here "後続段階" means "successor stage" in a transfinite induction, not the modal-logic successor relation on worlds defined in the card.
  - `logic:parity-game`: NG — Here "後続段階" means successor stage in transfinite induction, not a successor vertex in a parity game arena.

## 「推移的」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `set:transitive-set` → **fits: `logic:relation-properties`**
- Pages: 05-iterated-forcing.html, 06-ma-consistency.html
- Sentence: $r\le p$ より $r\Vdash\tau\le_{\pi}\sigma$、$\langle r,\rho\rangle\le\langle q,\tau\rangle$ より $r\Vdash\rho\le_{\pi}\tau$。$\mathbf{1}\Vdash$「$\le_{\pi}$ は $\pi$ 上の推移的な関係」なので、$r\Vdash\rho\le_{\pi}\sigma$ かつ $r\Vdash\sigma\in\pi$（$\le_{\pi}$ は $\pi\times\pi$ の部分集合であることが強制されている）。よって $\langle r,\sigma\rangle\in\PP*\pi$ で、$r\le r
  - `set:transitive-set`: NG — Here "推移的" describes a relation (transitivity of ≤_{π}), not a set being transitive as defined in the card.
  - `logic:relation-properties`: OK

## 「標準的な名前」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `set:ad-standard-name` → **fits: `set:check-name`**
- Pages: 07-countable-iterations.html
- Sentence:  かつ $\omega_{1}$-閉な p.o. で強制することである。本ページでは、(i) 名前が「$\omega$ 列について充満」なら可算台反復は $\omega_{1}$-閉であること（\ref{set:cs-iteration-closed}）、(ii) $\omega_{1}$ 上の概素集合の p.o. を標準的な名前で反復すると $\omega_{2}$-c.c. が保たれること（\ref{set:cs-ad-cc}）を示し、応用として、CH のもとで $2^{\omega_{1}}$ を大きくしつつ、大きさが $\omega_{1}$ と $2^{\omega_{1}}$ の真に間にある $\omega_{1}$ 上の極大概素族
  - `set:ad-standard-name`: NG — the sentence uses "標準的な名前" only as a generic phrase for names in an iteration, not the specific $\mathbb{Q}_{\tau}$ standard $\PP$-name defined on the card.
  - `set:check-name`: OK

## 「直積」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `set:cartesian-product` → **no candidate fits**
- Pages: 01-products.html, 04-easton-forcing.html, 05-iterated-forcing.html, 07-countable-iterations.html
- Sentence: **高い視点から：直積と逐次的な構成.** 積の補題は、テンソル積 $A\otimes B$ を「まず $A$ を係数に拡大し、その上で $B$ を拡大する」$(A\otimes_{K}K')\otimes\cdots$ と見る代数学の状況に似ている。$\PP_{0}\times\PP_{1}$ による強制は二つの独立な情報を同時に付け加え
  - `set:cartesian-product`: NG — Here "直積" refers to the product of forcing posets $\PP_{0}\times\PP_{1}$ (a set-theoretic product with coordinatewise order), not the set-theoretic Cartesian product $A\times B$ of definition 2.20.
  - `grp:direct-product`: NG — This use of 直積 refers to a product of forcing notions/sets, not the direct product of groups defined in the card.
  - `mod:direct-sum`: NG — Here "直積" refers to the Cartesian product of projective spaces $\PP_{0}\times\PP_{1}$ (a set-theoretic product), not the direct product of $R$-modules defined in the card.

## 「連続」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `comp:monotone-continuous` → **no candidate fits**
- Pages: 03-kurepa-independence.html
- Sentence: 先は決まらない（(3), (5)）」ことを使って、条件の二分木 $\langle p_{s}:s\in{}^{<\omega}2\rangle$ を作り、そこから $T$ の一つのレベルに $2^{\omega}$ 個の点を埋め込むことである。これはカントール集合 ${}^{\omega}2$ をある空間に埋め込んで「連続体濃度の部分集合をもつ」ことを示す、完全集合の議論（完全集合性質の証明など）と同じ形である。閉性は「二分木の枝ごとに極限の条件がとれる」ことを保証し、レベルの可算性が $2^{\omega}$ 個の点を受け入れられないことで矛盾が生じる。
  - `comp:monotone-continuous`: NG — Here "連続" refers to the continuum (連続体濃度, cardinality of the continuum), not continuity of a function as defined in the card.
  - `cx:limit-continuity`: NG — This "連続" refers to the cardinality of the continuum (連続体濃度), not continuity of a complex function as defined in the card.
  - `top:continuous`: NG — Here "連続" refers to the continuum (連続体濃度, cardinality of the continuum), not a continuous map between topological spaces.

## 「閉包」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `set:finitary-closure` → **no candidate fits**
- Pages: 03-kurepa-independence.html, 06-ma-consistency.html
- Sentence: に長さ $\omega_{1}$ の鎖（道）をもたない。\ref{set:destroy-suslin-tree} の $\PP$（$T$ のよく刈り込まれた部分木 $T'$ を逆さにしたもの）は $M$ で c.c.c. であり、ジェネリックな $G$ は $T'$ の長さ $\omega_{1}$ の鎖で、その下方閉包は $T$ の道である。この道は $M$ に属さない（$M$ には $T$ の道がない）。$\PP$ は $\omega_{1}$-閉でない（よく刈り込まれた $\omega_{1}$-ススリン木は $\omega_{1}$-閉になりえない：\ref{set:page-forcing-further} の注意）ので、シ
  - `set:finitary-closure`: NG — Here "下方閉包" (downward closure) refers to the downward closure of a chain in a tree, not the closure of a set under finitary operations as defined in the card.
  - `logic:ltl-size`: NG — Here "下方閉包" (downward closure) is a set-theoretic/forcing notion, not the closure of an LTL formula defined in the card.
  - `logic:ctl-closure`: NG — Here “閉包” means the downward closure of a chain in a tree (a set-theoretic order notion), not the modal-logic set $\mathrm{CL}(A)$ of subformulas defined in the card.
  - `set:pred-closure`: NG — Here "下方閉包" (downward closure) means the downward closure of a chain in a tree, not the transitive closure cl(A,x,R) defined in the card.
  - `top:interior-closure`: NG — Here "下方閉包" (downward closure) means the downward closure of a set in a tree/poset, not the topological closure of a subset of a topological space as defined in the card.

## 「原子論理式」 in 01-foundations/05-proof-theory/01-sequent-calculus
- Default: `logic:prop-formula` → **fits: `logic:formula`**
- Pages: 01-alpha-equivalence.html, 02-sequent-calculus.html, 03-cut-elimination.html, 04-equivalence-of-systems.html, 05-maehara-interpolation.html, 06-beth-definability.html, 07-herbrand.html
- Sentence: の変数も含む）を $\pi$ で書き換えるものとして、構造的再帰で定める：$\pi\cdot x\defeq\pi(x)$、$\pi\cdot c\defeq c$、$\pi\cdot f(t_{1},\dots,t_{n})\defeq f(\pi\cdot t_{1},\dots,\pi\cdot t_{n})$、原子論理式と $\to$ は成分ごと、
  - `logic:prop-formula`: NG — This sentence is about first-order predicate logic terms and formulas, not propositional logic, so "atomic formula" here refers to a different notion than the card's definition.
  - `logic:formula`: OK

## 「推論規則」 in 01-foundations/05-proof-theory/01-sequent-calculus
- Default: `logic:deduction-system` → **fits: `pt:pa-x`**
- Pages: 02-sequent-calculus.html
- Sentence: ゲンツェンのシーケント計算 $\mathsf{LK}$ を、構造規則（弱化・縮約）を推論規則に吸収した形（一般に G3 型と呼ばれる形）で定義し、その構造的性質を示す。中心は、導出の高さを増やさずに、(1) 項を代入する（固有変数の一斉付け替えを含む、\ref{pt:lk-substitution}）、(2) 論理式を加える（弱化、\ref{pt:lk-weakening}）、(3) 規則を逆にたどる（反転、
  - `logic:deduction-system`: NG — the card defines the notion of a derivation (導出), not inference rules (推論規則); the term refers to rules of the sequent calculus LK, which is a different notion.
  - `pt:pa-x`: OK

## 「縮約」 in 01-foundations/05-proof-theory/01-sequent-calculus
- Default: `set:complete-embedding` → **no candidate fits**
- Pages: 02-sequent-calculus.html, 03-cut-elimination.html, 05-maehara-interpolation.html, 07-herbrand.html
- Sentence: ゲンツェンのシーケント計算 $\mathsf{LK}$ を、構造規則（弱化・縮約）を推論規則に吸収した形（一般に G3 型と呼ばれる形）で定義し、その構造的性質を示す。中心は、導出の高さを増やさずに、(1) 項を代入する（固有変数の一斉付け替えを含む、\ref{pt:lk-substitution}）、(2) 論理式を加える（弱化、\ref{pt:lk-weakening}）、(3) 規則を逆にた
  - `set:complete-embedding`: NG — Here "縮約" refers to the structural rule of contraction in sequent calculus, not the reduction of a condition in the forcing definition.
  - `ring:extension-contraction`: NG — This "縮約" refers to the structural rule of contraction in sequent calculus, not the contraction of an ideal under a ring homomorphism.

## 「証明可能」 in 01-foundations/05-proof-theory/01-sequent-calculus
- Default: `logic:derivability` → **fits: `set:formal-deduction`**
- Pages: 07-herbrand.html
- Sentence: 一階述語論理の証明可能性は、一般には命題論理に帰着しない。しかし、全称論理式 $\forall\vec{x}\,B$（$B$ は量化子を含まない）だけからなる前件の場合には帰着する：$\forall\vec{x}\,B\Rightarrow$ がカットなしで導出できることと、有限個の**代入例** $B(\vec{t}_{1}),\dots
  - `logic:derivability`: NG — 証明可能 is not defined in the card; the card defines 導出可能 (derivability), and 証明可能 is a distinct notion (provability) not introduced there.
  - `set:formal-deduction`: OK

## 「論理式」 in 01-foundations/05-proof-theory/01-sequent-calculus
- Default: `logic:prop-formula` → **fits: `logic:formula`**
- Pages: 01-alpha-equivalence.html, 02-sequent-calculus.html, 03-cut-elimination.html, 04-equivalence-of-systems.html, 05-maehara-interpolation.html, 06-beth-definability.html, 07-herbrand.html
- Sentence: $\forall x\,P(x)$ と $\forall y\,P(y)$ は、束縛変数の名前が違うだけで「同じ」論理式である。この同一視を**α 同値**という。本ページでは α 同値を、**変数の入れ替え（互換）**を使って定義し（\ref{pt:alpha-equivalence}）、それが同値関係であることを循環なしに示す（\ref{pt:alpha-equivalence-relation}）。その上で、代入による特徴づけ（\
  - `logic:prop-formula`: NG — This sentence uses "論理式" for first-order formulas with quantifiers, while the card defines only propositional formulas.
  - `logic:formula`: OK

## 「プログラム」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 04-representability.html, 10-second-incompleteness-lob.html
- Sentence: $ はともに半決定可能である。$K=\mathrm{dom}(\varphi_{a})$, $\N\setminus K=\mathrm{dom}(\varphi_{b})$ として、$t=0,1,2,\dots$ の順に $T_{1}(a,m,t)$ と $T_{1}(b,m,t)$ を調べ、先に成り立った方で答えるプログラムは $\chi_{K}$ を計算する。これは \ref{comp:halting-L} に矛盾する。
  - `logic:pdl-syntax`: NG — This "プログラム" refers to a general algorithm/Turing machine program, not the inductively defined PDL programs of the card.
  - `logic:while-program`: NG — Here "プログラム" refers to a general algorithm/Turing-machine procedure for computing a characteristic function, not specifically a while-program as inductively defined in the card.

## 「上限」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `set:order-dedekind-complete` → **no candidate fits**
- Pages: 02-beta-function.html, 03-sequence-coding.html, 05-arithmetization.html
- Sentence: $\mathrm{Rm}(x,d,r)\defeq(r<d\wedge\exists q<S(x)\,(x=q\cdot d+r))\vee(d=0\wedge r=x)$ とおく。\ref{pt:division} より $\PA$ で関数的で（$q\le q\cdot d\le x$ なので量化子の上限は制限にならない）、有界な論理式なので Δ 論理式である（\ref{pt:sigma-closure}）。定める関数を $\mathrm{rm}(x,d)$ と書く（$\mathrm{rm}(x,0)=x$ と約束している）。$d\mid x\defeq\exists q\,(q\cdot d=x)$ とおく。問題 \
  - `set:order-dedekind-complete`: NG — Here「上限」means an upper bound (quantifier bound), not the least upper bound (supremum) defined in the card.
  - `logic:rm-analysis-defs`: NG — Here "上限" means an upper bound on quantifiers (quantifier bounding), not the supremum of a real sequence as defined in the card.
  - `calc:supremum`: NG — Here "上限" means an upper bound on quantifiers (bounded quantifiers), not the least upper bound of a set as defined in the card.

## 「代入」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `logic:substitution` → **no candidate fits**
- Pages: 01-peano-arithmetic.html, 04-representability.html, 05-arithmetization.html, 06-derivability-d1-d2.html, 07-formalized-sigma1-completeness.html, 08-diagonal-first-incompleteness.html
- Sentence: m{O2}$ は「$m<n+1\iff m<n$ または $m=n$」）。帰納法の公理：$y_{i}$ に値 $b_{i}$ を割り当てた割り当てを $u$ とし、$A\defeq\{n\in\N:\mathcal{N},u[x\mapsto n]\models\varphi\}$ とおく。前件が成り立つなら、意味論的代入補題（\ref{logic:semantic-substitution}）より $0\in A$ かつ「$n\in A\Rightarrow n+1\in A$」なので、自然数の帰納法により $A=\N$、すなわち後件 $\forall x\,\varphi$ が成り立つ。無矛盾性は \ref{logic:satisf
  - `logic:substitution`: NG — the term appears only inside the proper name "意味論的代入補題" (semantic substitution lemma), not as the operation defined by the card.
  - `logic:modal-substitution`: NG — This "代入" refers to semantic assignment/variable interpretation in first-order logic, not the syntactic substitution map on modal formulas defined in the card.
  - `logic:mu-substitution`: NG — This "代入" refers to semantic assignment/substitution in the satisfaction relation (semantic substitution lemma), not the syntactic capture-avoiding substitution of formulas defined in the card.
  - `logic:lambda-substitution`: NG — This "代入" refers to semantic substitution (assignment modification in model theory), not the lambda-calculus syntactic substitution defined in the card.

## 「原子論理式」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `logic:prop-formula` → **fits: `logic:formula`**
- Pages: 01-peano-arithmetic.html, 04-representability.html, 05-arithmetization.html, 06-derivability-d1-d2.html, 07-formalized-sigma1-completeness.html
- Sentence: 不完全性定理の対象となる理論**ペアノ算術** $\PA$ を定め、その基本的な性質を調べる。中心となるのは **Σ 完全性**、すなわち「真な Σ 文は $\PA$ で証明できる」という定理である。Σ 文は、有界でない全称量化子と否定を（原子論理式の否定を除いて）含まない文で、「ある計算が停止する」「ある文に証明がある」といった主張はこの形で書ける。後のページで、証明可能性述語が Σ 論理式で書けること（\ref{pt:page-arithmetization}）と組み合わせて、導出可能性条件の証明に使う。
  - `logic:prop-formula`: NG — This is about atomic formulas in first-order arithmetic (Σ formulas), not the propositional-logic definition of atomic formula as an element of Φ₀.
  - `logic:formula`: OK

## 「合成」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `logic:pdl-syntax` → **fits: `set:relation-composition`**
- Pages: 03-sequence-coding.html, 04-representability.html, 05-arithmetization.html, 08-diagonal-first-incompleteness.html
- Sentence: が成り立つ。また、Σ 関数の合成は Σ 関数である。
  - `logic:pdl-syntax`: NG — Here "合成" refers to composition of Σ functions, not the PDL program composition operator α;β defined in the card.
  - `logic:while-program`: NG — Here "合成" refers to composition of Σ functions, not the sequential composition of while programs defined in the card.
  - `set:relation-composition`: OK

## 「推論規則」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `logic:deduction-system` → **fits: `pt:pa-x`**
- Pages: 04-representability.html, 06-derivability-d1-d2.html
- Sentence: **原始再帰的算術 $\mathsf{PRA}$**：言語にすべての原始再帰関数の記号をもち、それらの定義の等式（\ref{comp:primitive-recursive.1}〜\ref[5]{comp:primitive-recursive.5} を等式として書いたもの）と、量化子を含まない論理式についての帰納法の推論規則「$\varphi(0)$ と $\varphi(x)\to\varphi(S(x))$ から $\varphi(x)$」をもつ、量化子を使わない体系。スコーレム（1923）に始まり、テイトは「有限の立場の数学」の形式化とみなせると論じた。
  - `logic:deduction-system`: NG — 「推論規則」 refers to inference rules in general, whereas the card defines a specific notion, 導出 (derivation), not inference rules.
  - `pt:pa-x`: OK

## 「整礎」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `comp:tree-well-founded` → **fits: `set:well-founded-relation`**
- Pages: 10-second-incompleteness-lob.html
- Sentence: 理は、十分に強い無矛盾な理論は自分の無矛盾性を知り得ないという、理論の自己認識の限界を述べている。レーブの定理はそれをさらに一般化し、理論が自分の健全性を信じられるのは「すでに知っていること」についてだけだと言う。様相論理の側から見ると、$\Box(\Box p\to p)\to\Box p$ は「到達可能性関係の逆が整礎」という帰納法の原理だった（\ref{logic:gl}）。算術では、証明可能性の「一段深い」層（証明についての証明）への入れ子が無限に下降できない、ということに当たる。実際、この直観を正確にしたのが、$\mathsf{GL}$ が算術の証明可能性の論理として完全であるというソロヴェイの定理（\ref{pt:page-
  - `comp:tree-well-founded`: NG — Here 整礎 refers to the converse of the accessibility relation being well-founded in modal logic, not to a tree having no infinite branch as defined in the card.
  - `set:well-founded-relation`: OK

## 「有界」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `calc:supremum` → **no candidate fits**
- Pages: 01-peano-arithmetic.html, 02-beta-function.html, 04-representability.html, 07-formalized-sigma1-completeness.html, 09-rosser-tarski.html
- Sentence: 不完全性定理の対象となる理論**ペアノ算術** $\PA$ を定め、その基本的な性質を調べる。中心となるのは **Σ 完全性**、すなわち「真な Σ 文は $\PA$ で証明できる」という定理である。Σ 文は、有界でない全称量化子と否定を（原子論理式の否定を除いて）含まない文で、「ある計算が停止する」「ある文に証明がある」といった主張はこの形で書ける。後のページで、証明可能性述語が Σ 論理式で書けること（\ref{pt:page-arithmetization}）と組み合わせて、導出可能性条件の証明に使う。
  - `calc:supremum`: NG — Here "有界" modifies a quantifier (bounded quantifier), not a subset being bounded above/below in an ordered set.
  - `logic:rm-analysis-defs`: NG — Here "有界" modifies a quantifier (bounded quantifier), not a real sequence as in the card's definition.

## 「正則」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `set:regular-cardinal` → **no candidate fits**
- Pages: 04-representability.html
- Sentence: 証明は二段に分かれる。まず計算論の側で、全域的な計算可能関数は、和・積・大小の特性関数から**合成と（正則な）最小化だけで**作れることを示す（\ref{pt:kleene-class-computable}）。原始再帰は、ゲーデルの β 関数（\ref{pt:beta}）で最小化に置き換えられる。次に算術の側で、この二つの操作が $\mathsf{Q}$ での表現可能性を保つことを示す（\ref{comp:represe
  - `set:regular-cardinal`: NG — Here "正則な最小化" means regular (proper) minimization in computability theory, not the set-theoretic notion of a regular ordinal.
  - `cx:holomorphic`: NG — Here "正則" refers to regular minimization in computability theory, not complex differentiability.
  - `top:separation-axioms`: NG — Here "正則" refers to regular minimization in computability theory, not the topological separation axiom.
  - `ag:regular-function`: NG — Here "正則な最小化" is the recursion-theoretic regular minimization (a total/well-defined minimization operator), not a regular function on a quasi-affine variety.
  - `ag:quasi-projective-regular`: NG — Here "正則な最小化" refers to regular minimization in computability theory, not a regular function on a quasi-projective variety.

## 「正規」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `set:normal-function` → **no candidate fits**
- Pages: 06-derivability-d1-d2.html
- Sentence: 1・D2 は、様相論理の必然化則と分配公理（\ref{logic:normal-modal-logic}）にちょうど対応する。この対応により、様相論理の $\Box$ を $\mathrm{Bew}$ と読む算術的解釈が意味をもつ（\ref{pt:page-arithmetical-soundness}）。1, 2 は正規性（\tref{logic:normality.1}, \ref[3]{logic:normality.3}）の算術版である。
  - `set:normal-function`: NG — Here "正規性" refers to normality of modal logic (the necessitation rule and distribution axiom), not the set-theoretic notion of a normal function on ordinals.
  - `lin:adjoint`: NG — Here "正規" refers to normality of modal logic (the necessitation rule and distribution axiom), not a normal operator on an inner product space.
  - `fld:normal`: NG — This "正規" refers to normality of modal logic (the necessitation rule and distribution axiom), not normal field extensions.
  - `top:separation-axioms`: NG — Here "正規" refers to normality of modal logic (the necessitation rule), not the topological normal separation axiom.

## 「生成元」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `grp:generated-subgroup` → **no candidate fits**
- Pages: 01-peano-arithmetic.html, 07-formalized-sigma1-completeness.html
- Sentence: 性質「$\N$ に値をとる**すべての**割り当て $v$ について $\mathcal{N},v\models\varphi\Rightarrow\mathcal{M},d\circ v\models\varphi$」をもつ論理式の集合が、狭義の Σ 論理式の定義の生成元を含み、各操作で閉じていることを示せば、最小性より狭義の Σ 論理式はすべてこの性質をもつ。
  - `grp:generated-subgroup`: NG — Here 生成元 means a generating set of a class of formulas, not a generating set of a group as defined in the card.
  - `grp:presentation`: NG — Here "生成元" refers to the generators of a closure/inductive definition, not the generators of a group presentation.

## 「計算可能関数」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `comp:L-computable` → **fits: `comp:mapping-reducible`**
- Pages: 03-sequence-coding.html, 04-representability.html
- Sentence: 再帰的でないが、二重の列を使えば Σ 論理式で定義でき、$\PA$ で関数的であることも示せる、とされる（Boolos 第 2 章。本サイトでは詳細を確認していない）。一方、Σ 論理式で定義される全域関数のうち $\PA$ で関数的と証明できるものには限りがある（どの $\PA$ で関数的な Σ 関数よりも速く増加する計算可能関数がある）ことが知られている、とされる。
  - `comp:L-computable`: NG — Here "計算可能関数" refers to computable total functions in general (used in a comparison with PA-provably functional Σ-functions), not specifically L-computable functions as defined in the card.
  - `comp:mapping-reducible`: OK

## 「証明可能」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `logic:derivability` → **fits: `set:formal-deduction`**
- Pages: 01-peano-arithmetic.html, 05-arithmetization.html, 06-derivability-d1-d2.html, 07-formalized-sigma1-completeness.html, 08-diagonal-first-incompleteness.html, 09-rosser-tarski.html, 10-second-incompleteness-lob.html
- Sentence: $\PA$ を定め、その基本的な性質を調べる。中心となるのは **Σ 完全性**、すなわち「真な Σ 文は $\PA$ で証明できる」という定理である。Σ 文は、有界でない全称量化子と否定を（原子論理式の否定を除いて）含まない文で、「ある計算が停止する」「ある文に証明がある」といった主張はこの形で書ける。後のページで、証明可能性述語が Σ 論理式で書けること（\ref{pt:page-arithmetization}）と組み合わせて、導出可能性条件の証明に使う。
  - `logic:derivability`: NG — 証明可能 is the proof-theoretic notion of provability, whereas the card defines 導出可能 (derivability) in natural deduction; these are related but not the same notion.
  - `set:formal-deduction`: OK

## 「論理式」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `logic:prop-formula` → **fits: `logic:formula`**
- Pages: 01-peano-arithmetic.html, 02-beta-function.html, 03-sequence-coding.html, 04-representability.html, 05-arithmetization.html, 06-derivability-d1-d2.html, 07-formalized-sigma1-completeness.html, 08-diagonal-first-incompleteness.html, 09-rosser-tarski.html
- Sentence: - 導出可能性 $\Sigma\vdash\varphi$ は一階述語論理の自然演繹による（\ref{logic:derivability}）。\ref{logic:completeness}より、文の集合 $T$ と論理式 $\varphi$ について、$T\vdash\varphi$ は「$T$ のすべてのモデル $\mathcal{M}$ とすべての割り当て $v$ で $\mathcal{M},v\models\varphi$」と同値である。
  - `logic:prop-formula`: NG — Here "論理式" refers to a formula of first-order predicate logic, not the propositional formulas defined in the card.
  - `logic:formula`: OK

## 「閉包」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `logic:ltl-size` → **no candidate fits**
- Pages: 02-beta-function.html
- Sentence: **Step 2（閉包性）.** (a) $i\in G$ なら任意の $q$ で $q\cdot i\in G$（等式に $q$ を掛ける）。(b) $i,i'\in G$、$i'\le i$ なら $i\dot{-}i'\in G$。実際、$a\cdot x+i=b\cdot y$、$a\cdot x'+i'=b\cdot y'$、$i
  - `logic:ltl-size`: NG — Here "閉包性" refers to closure properties of a set G under operations, not the closure CL(A) of a logical formula defined in the card.
  - `logic:ctl-closure`: NG — Here 閉包性 refers to closure properties of a set G under multiplication and truncated subtraction, not the modal-logic closure set CL(A) defined in the card.
  - `set:finitary-closure`: NG — Here "閉包性" refers to closure properties of a set G under operations, not the minimal closed superset (closure) defined in the card.
  - `set:pred-closure`: NG — Here “閉包性” refers to closure properties of a set G under operations, not the transitive closure cl(A,x,R) defined in the card.
  - `top:interior-closure`: NG — Here 閉包性 refers to closure under operations (closedness of a set under multiplication/subtraction), not the topological closure of a subset.

## 「上限」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `set:order-dedekind-complete` → **no candidate fits**
- Pages: 05-fixed-point-second-proof.html, 06-interpolation.html
- Sentence: 前ページの例 $A=\Box p\to\Box\neg p$ では $n=2$ で、不動点 $\Box^{2}\bot\to\Box\bot$ の次数 $2$ はこの上限に一致し、次数 $1$ の不動点はない（\ref{pt:fixed-point-degree}）。
  - `set:order-dedekind-complete`: NG — Here 上限 refers to the maximum degree of fixed points in a modal logic context, not the least upper bound of a bounded subset in a total order.
  - `logic:rm-analysis-defs`: NG — Here "上限" means an upper bound on possible degrees (a maximum value), not the supremum of a real sequence as defined in the card.
  - `calc:supremum`: NG — Here "上限" refers to an upper bound on the possible degree of fixed points (a maximum value in a different context), not the least upper bound of a subset of an ordered set as defined in the card.

## 「合成」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `logic:pdl-syntax` → **fits: `cat:category`**
- Pages: 07-solovay.html
- Sentence: のコードを作る関数を $\sigma_{j}(y)$ とする（$\mathrm{sub}$, $\mathrm{num}$ と論理記号のコードを組み立てる関数の合成なので Σ 関数。$\exists,\le$ は略記を展開する）。$i\in W'$ について
  - `logic:pdl-syntax`: NG — Here "合成" refers to composition of functions (building codes), not the PDL program composition operator α;β defined in the card.
  - `logic:while-program`: NG — Here "合成" means composition of functions, not the sequential composition of while programs defined in the card.
  - `set:relation-composition`: NG — Here 合成 refers to composition of functions (building a code by combining functions), not the composition of relations defined in the card.
  - `cat:category`: OK

## 「完備」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `set:complete-boolean-algebra` → **no candidate fits**
- Pages: 04-fixed-point-theorem.html
- Sentence: 段下（$R$ で到達可能な、ランクの小さい世界）」でしか参照しない。したがって $A$-トレースの計算のように、ランク $0$ の世界から順に $p$ の値が一意に決まっていく。これは、距離空間で「後の値が前の値だけで決まる」写像が縮小写像になり、バナッハの不動点定理で一意の不動点をもつのと同じ構造である（逆整礎性が「完備性」、$\Box$ による一段の遅れが「縮小」にあたる）。実際、逆整礎な関係の上の再帰的定義が一意の解をもつという定理（集合論の整礎再帰定理）が、ここでは各モデルの中で働いている。不動点定理は、この「各モデルでの一意の解」が一つの論理式 $H$ で一様に書けることを主張し、算術では「自己言及の方程式は、自己言及を含まな
  - `set:complete-boolean-algebra`: NG — Here "完備性" refers to well-foundedness/converse well-foundedness of a relation (analogous to metric completeness), not the existence of suprema and infima in a Boolean algebra.
  - `cat:limit`: NG — Here "完備性" refers to well-foundedness/completeness of a relation in the recursion-theoretic sense, not the category-theoretic completeness (having all limits) defined in the card.
  - `ring:completion`: NG — Here "完備性" refers to well-foundedness/completeness of a relation in the Banach fixed-point analogy, not the $I$-adic completion of a module.
  - `top:complete-metric`: NG — Here "完備性" refers to reverse well-foundedness (a set-theoretic/order notion), not metric completeness of a metric space as defined in the card.
  - `top:cauchy-filter`: NG — Here "完備性" refers to well-foundedness/inverse well-foundedness in a fixed-point analogy, not the convergence of all Cauchy filters in a uniform space.
  - `ag:proper`: NG — Here 完備性 refers to well-foundedness/completeness of a relation in logic, not a proper scheme over a field.

## 「推論規則」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `logic:deduction-system` → **fits: `pt:pa-x`**
- Pages: 01-arithmetical-soundness.html, 08-gls-uniform-completeness.html
- Sentence: $\mathsf{GL}$ の定理すべてと、形 $\Box A\to A$ の様相論理式すべてを公理とし、推論規則をモーダスポネンスだけとする体系を $\mathsf{GLS}$ という。
  - `logic:deduction-system`: NG — 「推論規則」 refers to inference rules generally (here modus ponens), not the specific inductive definition of 導出 (derivation) given in the card.
  - `pt:pa-x`: OK

## 「整礎」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `comp:tree-well-founded` → **fits: `set:well-founded-class-relation`**
- Pages: 04-fixed-point-theorem.html
- Sentence: 界から順に $p$ の値が一意に決まっていく。これは、距離空間で「後の値が前の値だけで決まる」写像が縮小写像になり、バナッハの不動点定理で一意の不動点をもつのと同じ構造である（逆整礎性が「完備性」、$\Box$ による一段の遅れが「縮小」にあたる）。実際、逆整礎な関係の上の再帰的定義が一意の解をもつという定理（集合論の整礎再帰定理）が、ここでは各モデルの中で働いている。不動点定理は、この「各モデルでの一意の解」が一つの論理式 $H$ で一様に書けることを主張し、算術では「自己言及の方程式は、自己言及を含まない明示的な解をもつ」ことになる。
  - `comp:tree-well-founded`: NG — Here "整礎" appears only inside the compound "逆整礎" (reverse well-foundedness), which is a different notion from the card's definition of a well-founded tree (a tree with no infinite branch).
  - `set:well-founded-relation`: NG — the sentence uses "逆整礎" (reverse well-founded) for the converse relation, not the well-foundedness of $R$ itself as defined in the card.
  - `set:well-founded-class-relation`: OK

## 「正規」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `set:normal-function` → **no candidate fits**
- Pages: 04-fixed-point-theorem.html, 06-interpolation.html, 08-gls-uniform-completeness.html
- Sentence: - 様相論理式、一様代入 $C[H/p]$、命題的付値と恒真式（\ref{logic:modal-tautology}）、正規性、$\boxdot C\defeq C\wedge\Box C$（\ref{logic:boxdot}）、\ref{logic:k4-boxdot}、第二置換定理とその系（\ref{logic:second-substitution}, \ref{logic:second-substitution-corollary
  - `set:normal-function`: NG — This "正規" refers to normal modal logic (normality), not a strictly increasing continuous class function on the ordinals.
  - `lin:adjoint`: NG — Here "正規" refers to normality of modal logic, not normal operators on an inner product space.
  - `fld:normal`: NG — This "正規" refers to normal modal logic (normality), not the field-theoretic notion of a normal extension defined in the card.
  - `top:separation-axioms`: NG — Here "正規" refers to normality of modal logic (normal modal logic), not the topological normal separation axiom.

## 「決定可能」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `comp:L-computable` → **no candidate fits**
- Pages: 01-arithmetical-soundness.html, 02-letterless-normal-form.html, 05-fixed-point-second-proof.html, 07-solovay.html, 08-gls-uniform-completeness.html
- Sentence: 可能性述語が満たす性質のうち、命題論理の組み合わせで表せる部分がすべて $\mathsf{GL}$ に含まれることの半分を述べ、ソロヴェイの定理が残りの半分を与える。すると、証明可能性についての問い（たとえば「無矛盾性の無矛盾性は証明できるか」）は、有限の手続きで決定できる様相論理の問い（$\mathsf{GL}$ は決定可能。\ref{logic:page-modal-completeness}）に変わる。これは、群の元についての等式の問いが、群の公理から導けるかどうかの問いに変わるのと似ている：$\mathsf{GL}$ は「証明可能性」という構造の等式論である。$\mathsf{GL}$ と $\mathsf{GLS}$ の違いは、「
  - `comp:L-computable`: NG — This "決定可能" refers to decidability of a modal logic (a set of formulas), not the card's notion of a subset of $\N^{k}$ being decidable via its characteristic function.
  - `comp:recognizable-decidable`: NG — This "決定可能" refers to decidability of a modal logic (a set of formulas), not the computability-theoretic notion of a language being decided by a Turing machine as defined in the card.

## 「無矛盾」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `logic:prop-deduction` → **fits: `set:formal-deduction`**
- Pages: 01-arithmetical-soundness.html, 02-letterless-normal-form.html, 03-reflection-incompactness.html, 04-fixed-point-theorem.html, 05-fixed-point-second-proof.html, 06-interpolation.html, 07-solovay.html
- Sentence: 以下、文 $S$ について「$S$ は証明可能」を $\mathrm{Bew}(\Godel{S})$、「$S$ は $\PA$ と無矛盾」を $\neg\mathrm{Bew}(\Godel{\neg S})$ で表す。$\mathsf{GL}$ の定理 $A$ から、\ref{pt:gl-arithmetical-soundness} により、$A$ の任意の翻訳が $\PA$ の定理として得られる。
  - `logic:prop-deduction`: NG — Here "S is consistent with PA" means PA does not prove ¬S, which is a different notion from the card's definition of a theory being consistent (not deriving ⊥).
  - `logic:derivability`: NG — Here "S is consistent with PA" means PA plus S is consistent, not that the set Σ is consistent in the card's sense.
  - `logic:pdl-axioms`: NG — Here "無矛盾" means consistency of S with PA (i.e., PA does not prove ¬S), not the card's definition of a finite set X being consistent as ¬⋀X not provable in PDL.
  - `logic:ltl-axioms`: NG — Here "無矛盾" means consistency of the theory PA (no proof of contradiction), not the card's definition of a finite set being consistent in LTL.
  - `set:formal-deduction`: OK

## 「直和」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `mod:direct-sum` → **no candidate fits**
- Pages: 08-gls-uniform-completeness.html
- Sentence: は内部の観測者（$\PA$）の知識、$\mathsf{GLS}$ は外部の観測者（標準模型）の知識で、外部の観測者は「内部の観測者の証明は正しい」という一段上の信頼（反映原理）だけを余分に持っている。一様な解釈は、あらゆる可能な反例を一つの算術的世界に並べて同時に演じさせる「万能の舞台」であり、クリプキモデルの非交和（直和）がその骨組みである。
  - `mod:direct-sum`: NG — This "直和" refers to the disjoint union (coproduct) of Kripke models, not the direct sum of modules defined in the card.
  - `rep:constructions`: NG — Here "直和" refers to the disjoint union (非交和) of Kripke models, not the direct sum of representations defined in the card.

## 「証明可能」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `logic:derivability` → **fits: `set:formal-deduction`**
- Pages: 01-arithmetical-soundness.html, 02-letterless-normal-form.html, 04-fixed-point-theorem.html, 05-fixed-point-second-proof.html, 07-solovay.html, 08-gls-uniform-completeness.html
- Sentence: 様相論理の $\Box$ を「$\PA$ で証明可能」と読むとき、どの様相論理の原理が正しいか。これを正確に問うために、命題変数に算術の文を割り当てる**算術的解釈**を定める。本ページでは、$\mathsf{GL}$ の定理はどの算術的解釈のもとでも $\PA$ で証明でき（**算術的健全性**）、$\mathsf{GL}$ に反映原理 $\Box A\to A$ を
  - `logic:derivability`: NG — Here "証明可能" refers to provability in PA (a different, arithmetized notion), not the card's derivability relation $\Sigma\vdash\varphi$ in natural deduction.
  - `set:formal-deduction`: OK

## 「連続」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `comp:monotone-continuous` → **no candidate fits**
- Pages: 08-gls-uniform-completeness.html
- Sentence: t\mathrm{Sub}(A)\rvert}$ 以下の有限反例モデルが機械的に見つかる（\ref{logic:modal-fmp-decidability}）。反例の世界 $w$ から生成された部分モデルをとり、世界を、ランクの小さい順（\ref{pt:world-rank}）に、その時点で未使用の最小の正の整数から連続して番号付けする。ランクの小さい世界ほど番号が小さいので、$iR_{k}j$ なら $\rho(j)<\rho(i)$ から $j<i$。これを非定理の列挙の順に行えば 1 を満たす列が得られ（非定理は無限にある：たとえば $\Box^{m}\bot$ はどれも非定理）、各段の計算は原始再帰的である。
  - `comp:monotone-continuous`: NG — Here "連続して" means "consecutively" (numbering in succession), not the continuity of a monotone function on a powerset lattice.
  - `cx:limit-continuity`: NG — Here "連続して" means "consecutively/continuously in sequence," not the analytic notion of a continuous function defined in the card.
  - `top:continuous`: NG — Here "連続して" means "consecutively/in succession," not the topological notion of a continuous map.

## 「閉包」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `logic:ltl-size` → **no candidate fits**
- Pages: 07-solovay.html
- Sentence: - $\PA$、Σ 論理式・Δ 論理式と閉包性（\ref{pt:sigma-formula}, \ref{pt:sigma-closure}）、モデルの中の帰納法（\ref{pt:model-induction}）と最小数原理（\ref{pt:pa-strong-induction}）は \ref{pt:page-peano-arithmetic} のとおり。$
  - `logic:ltl-size`: NG — Here "閉包性" refers to closure properties of Σ/Δ formulas in arithmetic, not the LTL closure set CL(A) defined in the card.
  - `logic:ctl-closure`: NG — Here 閉包性 refers to closure properties of Σ/Δ formulas in Peano arithmetic, not the CTL closure set CL(A) defined in the card.
  - `set:finitary-closure`: NG — Here "閉包性" refers to closure properties of a set of formulas under logical operations, not the minimal closed superset defined in the card.
  - `set:pred-closure`: NG — Here "閉包性" refers to closure properties of Σ/Δ formulas under logical operations, not the set-theoretic closure cl(A,x,R) defined in the card.
  - `top:interior-closure`: NG — Here "閉包性" refers to closure properties of formulas under logical operations, not the topological closure of a subset.

## 「上限」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `set:order-dedekind-complete` → **no candidate fits**
- Pages: 01-grz.html, 06-glb-fixed-point.html
- Sentence: $\mathsf{Grz}$ は決定可能で（9 と、有限フレームの大きさの上限）、「証明可能で真」と読んだときに常に証明可能な論理式と常に真な論理式は一致する。
  - `set:order-dedekind-complete`: NG — Here「上限」means an upper bound on the size of finite frames, not the least upper bound (supremum) defined in the Dedekind-completeness card.
  - `logic:rm-analysis-defs`: NG — Here "上限" means an upper bound on the size of finite frames, not the least upper bound (supremum) of a real sequence as defined in the card.
  - `calc:supremum`: NG — Here "上限" means an upper bound on the size of finite frames, not the least upper bound (supremum) of a subset of a totally ordered set as defined in the card.

## 「内包公理」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `set:ax-comprehension` → **fits: `pt:l2-axioms`**
- Pages: 03-analysis.html
- Sentence: - 内包公理図式：$X$ を自由に含まない任意の論理式 $A(x)$（一階・二階のパラメータを含んでよい）についての $\exists X\,\forall x\,(Xx\leftrightarrow A(x))$
  - `set:ax-comprehension`: NG — This is the second-order comprehension axiom schema, whereas the card defines the first-order separation (subset) axiom schema.
  - `pt:l2-axioms`: OK

## 「帰納法の公理」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `pt:peano-arithmetic` → **fits: `pt:l2-axioms`**
- Pages: 03-analysis.html
- Sentence: - 帰納法の公理（一つの二階論理式）$X0\land\forall x\,(Xx\to XSx)\to\forall x\,Xx$、
  - `pt:peano-arithmetic`: NG — This is the second-order induction axiom, whereas the card defines the first-order induction axiom schema with a separate formula for each $\varphi$.
  - `pt:l2-axioms`: OK

## 「後続」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `logic:ctl-semantics` → **no candidate fits**
- Pages: 01-grz.html, 03-analysis.html, 04-glb-semantics.html, 05-glb-completeness.html, 06-glb-fixed-point.html
- Sentence:  n,\ x\in W\}\cup R$ とし、新しい世界 $i$ の命題変数の値は $0$ と同じとする（$U$）。$\mathcal{N}\defeq(X,Q,U)$ は有限・推移的・非反射的で、$n\,Q\,(n-1)\,Q\cdots Q\,1\,Q\,0$。世界 $i+1$（$0\le i<n$）の $Q$-後続者は、$i$ と $i$ の $Q$-後続者である。
  - `logic:ctl-semantics`: NG — Here "後続者" refers to successors under the relation Q in a finite transitive irreflexive Kripke model, not specifically the CTL model's total relation R as defined in the card.
  - `logic:ctl-successor-def`: NG — Here "後続者" means the successors under the relation \(Q\) (i.e., worlds reachable by \(Q\)), whereas the card defines \(\mathrm{succ}(w)\) via the relation \(w\to v\) based on consistency of \(\widehat{w}\wedge\mathbf{EX}\widehat{v}\), a different notion.
  - `logic:parity-game`: NG — Here "後続者" means a successor world in a Kripke model (an element related by the accessibility relation Q), not the graph-theoretic successor vertex w with (v,w)∈E in a parity game arena.

## 「推論規則」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `logic:deduction-system` → **fits: `pt:pa-x`**
- Pages: 03-analysis.html, 04-glb-semantics.html
- Sentence: 2. **$\mathrm{An}_{\omega}$** の定理とは、解析学のすべての公理を含み、通常の論理の推論規則と $\omega$ 規則で閉じたすべての集合に属する文のことをいう。$\omega\vdash F$ で $F$ が $\mathrm{An}_{\omega}$ の定理であることを表し、$F$ は**$\omega$ 規則のもとで（解析学で）証明可能**であるという。
  - `logic:deduction-system`: NG — 「推論規則」は推論の規則一般を指す語で、カードが定義する「導出」という特定の帰納的対象とは異なる。
  - `pt:pa-x`: OK

## 「整礎」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `comp:tree-well-founded` → **fits: `set:well-founded-relation`**
- Pages: 02-set-theory.html
- Sentence: - $M$ 自身（のスコーレム拡張）の有限部分構造を順に延ばすと、$X$ の無限下降列が $\mathbf{V}$ にある。整礎性は推移的モデルについて絶対的なので、$X$ は $N$ の中でも整礎でない。$N$ を $\mathbf{L}^{N}$ に取り替えて選択公理を使うと、$N$ の中に無限下降列がとれる。
  - `comp:tree-well-founded`: NG — Here 整礎 refers to well-foundedness of a relation (no infinite descending sequence), not to a tree having no branch as defined in the card.
  - `set:well-founded-relation`: OK

## 「標準モデル」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `logic:ikripke-canonical` → **no candidate fits**
- Pages: 03-analysis.html
- Sentence: $\mathrm{An}_{\omega}$ の定理はすべて真である（標準モデル、すなわち二階の変数がすべての部分集合を動くモデルで）。また $\Theta(x)$ は標準モデルで $\Theta$ を正しく定義する。
  - `logic:ikripke-canonical`: NG — This "標準モデル" refers to the standard model of second-order arithmetic (with second-order variables ranging over all subsets), not the canonical Kripke model of prime theories defined in the card.
  - `logic:generic-model-def`: NG — This "標準モデル" refers to the standard model of second-order arithmetic (variables ranging over all subsets), not the term model of a type theory defined in the card.

## 「標準形」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `pt:letterless-normal-form-def` → **no candidate fits**
- Pages: 02-set-theory.html, 03-analysis.html, 05-glb-completeness.html, 06-glb-fixed-point.html
- Sentence: - $\ZF$ の公理と $\chi$ を、新しい述語記号を使ったスコーレムの $\forall\exists$ 標準形の文 $\theta_{1},\theta_{2},\dots$ に書き換える（$\theta_{i}$ のモデルの $\in$ への縮約は元の公理のモデルになり、元の公理のモデルは $\theta_{i}$ のモデルに拡張できる）。
  - `pt:letterless-normal-form-def`: NG — This "標準形" refers to Skolem normal form in first-order logic, not the letterless modal normal form defined in the card.
  - `at:box-map`: NG — This "標準形" refers to Skolem normal form in logic, not the standard-form sphere map defined in the card.

## 「次元」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `lin:dimension` → **no candidate fits**
- Pages: 02-set-theory.html
- Sentence: **高い視点から：モデルの「高さ」が作るフレーム.** 算術の場合、ソロヴェイの証明は「証明の長さ」という一次元の時間に沿って点を動かした。集合論の場合は、推移的モデルの**高さ** $o(M)$ がその役割を果たす。宇宙 $R(\kappa)$ は高さで一列に並び、低いものは高いものの元になるので、見えるものは高さだけで決まり、フレームは全順序になる。推移的モデルは同じ高さのものが多数あり、互いを元として含まないが、Jense
  - `lin:dimension`: NG — This "次元" refers to a one-dimensional timeline in set theory, not the dimension of a vector space as defined in the card.
  - `cat:trace-dimension`: NG — Here "次元" (dimension) refers to the height $o(M)$ of a transitive model in set theory, not the categorical trace/dimension $\dim a$ of a dualizable object.
  - `ring:krull-dimension`: NG — one short English sentence why
  - `ag:dimension`: NG — Here "次元" is used metaphorically for a one-dimensional timeline of proof length, not the topological dimension defined in the card.

## 「正規」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `set:normal-function` → **no candidate fits**
- Pages: 01-grz.html
- Sentence: - 様相論理式、正規様相論理、公理による体系（\ref{logic:modal-hilbert-system}）、$\mathsf{K},\mathsf{K4},\mathsf{T},\mathsf{S4},\mathsf{S5}$、正規性、恒真式による推論、$\boxdot A\defeq A\wedge\Box A$、\ref{logic:k4-boxdot} は \ref{logic:page-normal-modal-logics} のとおり。
  - `set:normal-function`: NG — This "正規" refers to normal modal logics, not the increasing and continuous class function on ordinals defined in the card.
  - `lin:adjoint`: NG — Here「正規」refers to normal modal logic, not a normal operator on an inner product space.
  - `fld:normal`: NG — Here "正規" refers to normal modal logics, not normal field extensions.
  - `top:separation-axioms`: NG — Here "正規" refers to normal modal logic, not the topological separation axiom for closed sets.

## 「無矛盾」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `logic:prop-deduction` → **fits: `logic:derivability`**
- Pages: 01-grz.html, 02-set-theory.html, 03-analysis.html, 04-glb-semantics.html, 05-glb-completeness.html
- Sentence: したがって $Y$ は無矛盾で、$Y\subset x$ となる $x\in W$ がある。$\Box E_{i}\in x$ より $wQx$。$\Box(C\to\Box C)\in x\setminus w$ なので $xQw$ でない。よって $wRx$。$\neg C\in x$ より $C\notin x$、帰納法の仮定より $x\n
  - `logic:prop-deduction`: NG — Here "無矛盾" (consistent) is used of a set/frame element $Y$ in a modal-logic completeness proof, meaning it has no contradiction derivable, which matches the card's definition of a set $\Sigma$ being consistent ($\Sigma\not\vdash\bot$).
  - `logic:derivability`: OK

## 「相対化」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `comp:oracle-classes` → **fits: `set:relativization`**
- Pages: 02-set-theory.html
- Sentence: - 集合論側：累積階層 $R(\alpha)$、推移的モデル、絶対性、\ref{set:mostowski}、形式化された充足関係 $\models$ と相対化の一致（\ref{set:relativization-vs-satisfaction}）、$L_{\alpha}$ の絶対性（\ref{set:l-absolute}）、$\ZF+\mathbf{V}=\mathbf{L}$ の推移的モデルは $L_{o(M)}$ の形であること（\ref{set:v-eq-l-mo
  - `comp:oracle-classes`: NG — Here "相対化" refers to relativization in set theory (restricting formulas to a class/model), not the oracle-based complexity classes P^A/NP^A defined in the card.
  - `set:relativization`: OK

## 「縮約」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `set:complete-embedding` → **no candidate fits**
- Pages: 02-set-theory.html
- Sentence: - $\ZF$ の公理と $\chi$ を、新しい述語記号を使ったスコーレムの $\forall\exists$ 標準形の文 $\theta_{1},\theta_{2},\dots$ に書き換える（$\theta_{i}$ のモデルの $\in$ への縮約は元の公理のモデルになり、元の公理のモデルは $\theta_{i}$ のモデルに拡張できる）。
  - `set:complete-embedding`: NG — Here "縮約" means the restriction/reduct of a model to the original language (model-theoretic reduct), not the reduction of a condition $q$ to a condition $p$ in $\PP$ as defined in the card.
  - `ring:extension-contraction`: NG — Here "縮約" refers to restricting a model's interpretation to the original language (a model-theoretic reduct), not the contraction of an ideal under a ring homomorphism.

## 「証明可能」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `logic:derivability` → **fits: `set:formal-deduction`**
- Pages: 01-grz.html, 02-set-theory.html, 03-analysis.html, 04-glb-semantics.html, 05-glb-completeness.html, 06-glb-fixed-point.html
- Sentence: $\Box$ を「証明可能」と読むと $\Box p\to p$ は常に証明可能ではない。しかし $\Box A$ を「$A$ は証明可能で、しかも真」と読めば、$\mathsf{S4}$ の定理はすべて保たれる。本ページでは、この読み方のもとで常に証明可能な様相論理式、常に真な様相論理式が、ともにちょうどグジェゴルチクの体系 $\mathsf
  - `logic:derivability`: NG — 証明可能 is used for provability in modal logic (and in the sense of "provable formula"), whereas the card defines 導出可能 (derivability from a set of formulas), not the same notion.
  - `set:formal-deduction`: OK

## 「論理式」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `logic:prop-formula` → **fits: `logic:formula`**
- Pages: 01-grz.html, 02-set-theory.html, 03-analysis.html, 04-glb-semantics.html, 05-glb-completeness.html, 06-glb-fixed-point.html
- Sentence: フレームで妥当な論理式の集合は正規様相論理なので、グジェゴルチクの公理が妥当であることを示せばよい。モデル $\mathcal{M}$ をとり、$E\defeq\Box(\Box(p\to\Box p)\to p)$ とおいて
  - `logic:prop-formula`: NG — This is a modal logic formula (with □), not a propositional-logic formula over the fixed PV with only ⊥ and → as defined in the card.
  - `logic:formula`: OK

## 「連結」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `pt:sequence-operations` → **no candidate fits**
- Pages: 02-set-theory.html, 03-analysis.html, 04-glb-semantics.html
- Sentence: - *区分的連結性*（$wR_{\mathsf{J}}x$, $wR_{\mathsf{J}}y$ なら $xR_{\mathsf{J}}y$, $x=y$, $yR_{\mathsf{J}}x$ のいずれか）。そうでないとすると、$\Box B\in x$, $B\notin y$ となる $B$、$\Box C\in y$, $C
  - `pt:sequence-operations`: NG — Here "連結" refers to connectedness of a relation (区分的連結性), not concatenation of finite sequences as defined in the card.
  - `set:concatenation`: NG — This "連結" refers to connectedness of a relation, not concatenation of sequences.
  - `top:connected`: NG — This "連結" refers to a property of an accessibility relation in modal logic (piecewise connectedness), not topological connectedness of a space or subset.

## 「連続」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `comp:monotone-continuous` → **no candidate fits**
- Pages: 02-set-theory.html
- Sentence: f{set:v-eq-l-models-unique}）、到達不能基数 $\kappa$ について $R(\kappa)$ が $\ZFC$ のモデルであること（\ref{set:inaccessible-model}）と到達不能性の絶対性（\ref{set:inaccessible-absolute}）、強制法による連続体の値の調整（\ref{set:continuum-kappa}）は第 I〜VII 章のとおり。$o(M)\defeq M\cap\mathbf{ON}$ は推移的集合 $M$ の高さ。
  - `comp:monotone-continuous`: NG — Here "連続" refers to the continuum (連続体, the cardinality of the reals), not continuity of a function as defined in the card.
  - `cx:limit-continuity`: NG — Here "連続体" (continuum) refers to the set-theoretic continuum, not a continuous function as defined in the card.
  - `top:continuous`: NG — Here "連続" is part of "連続体" (continuum), not the topological notion of a continuous map.

## 「上界」 in 01-foundations/05-proof-theory/05-quantified-provability-logic
- Default: `set:chain-maximal` → **no candidate fits**
- Pages: 01-quantified-provability-logic.html, 03-vardanyan.html
- Sentence: は、述語記号と量化子をもつ様相論理式（**量化様相論理**）について同じ問いを考え、答えが極端に否定的であることを示す：常に証明可能な文の集合は $\Pi^{0}_{2}$ 完全（ヴァルダニャン）、常に真な文の集合は算術的でない（アルテモフ）。本ページでは、量化様相論理式の算術的な翻訳を定義し、二つの集合の複雑さの**上界**と簡単な例を示す（\ref{pt:qml-upper-bounds}, \ref{pt:barcan}）。あわせて、後のページで使う相対化された算術的階層の事項をまとめる（\ref{pt:relative-hierarchy}）。本系列は Boolos 第 17・18 章に沿うが、証明は自分の言葉で組み立て直す。
  - `set:chain-maximal`: NG — Here "上界" means an upper bound on the complexity of sets (a bound in the arithmetic hierarchy), not an upper bound of a subset in a partially ordered set as defined in the card.
  - `calc:supremum`: NG — Here "上界" means an upper bound on complexity (a bound in the arithmetic hierarchy), not an upper bound of a subset of a totally ordered set as defined in the card.

## 「上限」 in 01-foundations/05-proof-theory/05-quantified-provability-logic
- Default: `set:order-dedekind-complete` → **no candidate fits**
- Pages: 02-artemov.html
- Sentence: 変数を上限とする有界量化子だけを使う狭義の Σ 論理式 $F(\vec{x})$（\ref{pt:sigma-formula}。$\forall z<t$ は $\exists w\,(w=t\wedge\forall z<w)$ と書き直して、上限が変数であるとしてよい）について
  - `set:order-dedekind-complete`: NG — Here「上限」means an upper bound (the bound variable serving as the limit of quantification), not the least upper bound / supremum defined in the card.
  - `logic:rm-analysis-defs`: NG — Here "上限" means an upper bound (of a bounded quantifier), not the least upper bound defined in the card.
  - `calc:supremum`: NG — Here "上限" means an upper bound of a quantifier's range (a bound variable), not the least upper bound of a set as defined in the card.

## 「原子論理式」 in 01-foundations/05-proof-theory/05-quantified-provability-logic
- Default: `logic:prop-formula` → **fits: `logic:formula`**
- Pages: 01-quantified-provability-logic.html, 02-artemov.html, 03-vardanyan.html, 04-one-predicate-letter.html
- Sentence: 1. $F$ の構成に関する帰納法。原子論理式では、$\pi^{\ast}$ の自由変数 $v_{0},\dots,v_{n-1}$ がちょうど $x_{1},\dots,x_{n}$ に置き換わる。$\Box$ では $\mathrm{FV}(\mathrm{Bew}[G])=\mathrm{FV}(G)$（\ref{pt:bew-bracket}、自由変数に数
  - `logic:prop-formula`: NG — This "原子論理式" refers to atomic formulas of a first-order language (built from predicates like π*), not the propositional atomic formulas defined as elements of Φ₀ = PV ∪ {⊥}.
  - `logic:formula`: OK

## 「定義域」 in 01-foundations/05-proof-theory/05-quantified-provability-logic
- Default: `set:relation` → **no candidate fits**
- Pages: 01-quantified-provability-logic.html
- Sentence: 1. 述語記号の集合を定義域とする写像 $\ast$ で、各 $n$ 項述語記号 $\pi$ に、自由変数がちょうど $v_{0},\dots,v_{n-1}$ である $\mathcal{L}_{\mathrm{ar}}$ の論理式 $\pi^{\ast}$ を割り当てるものを**実現**という。QML の論理式 $F$ に現れる述語記号をすべ
  - `set:relation`: NG — Here 定義域 is the domain of a mapping (a set of predicate symbols), not the domain of a relation as defined in the card.
  - `logic:rm-continuous-code`: NG — Here 定義域 means the domain of a map (a set of predicate symbols), not the domain of a continuous function as defined in the card.

## 「時点表示」 in 01-foundations/05-proof-theory/05-quantified-provability-logic
- Default: `comp:pda` → **fits: `comp:tm-configuration`**
- Pages: 01-quantified-provability-logic.html
- Sentence: 神託機械の停止する計算（各問い合わせへの答えを含めた時点表示の有限列）の符号を $k$ とする。計算 $k$ が集合 $A$ について**正しい**とは、その中のすべての問い合わせ「$n\in?$」への答えが、$n\in A$ のとき「はい」、そうでないとき「いいえ」であることをいう。$T^{A}(e,\vec{i},k)$ を「$k$ は符号 $e$ の神託機械の入力 $\v
  - `comp:pda`: NG — This "時点表示" refers to a snapshot/configuration of an oracle machine computation, not the PDA instantaneous description defined in the card.
  - `comp:tm-configuration`: OK

## 「標準モデル」 in 01-foundations/05-proof-theory/05-quantified-provability-logic
- Default: `logic:ikripke-canonical` → **no candidate fits**
- Pages: 01-quantified-provability-logic.html, 02-artemov.html, 03-vardanyan.html
- Sentence: - 算術の言語 $\mathcal{L}_{\mathrm{ar}}=\{0,S,+,\cdot\}$、$\PA$、標準モデル $\mathcal{N}$、Σ 論理式、証明可能性述語 $\mathrm{Bew}$、自由変数に数項を代入した $\mathrm{Bew}[F]$（\ref{pt:bew-bracket}）とその D1・D2（\ref{pt:bew-bracket-nec}, \ref{pt:bew-bracket-mp}）、形式化
  - `logic:ikripke-canonical`: NG — Here "標準モデル" refers to the standard model of arithmetic (the natural numbers), not the canonical Kripke model of prime theories defined in the card.
  - `logic:generic-model-def`: NG — This "standard model" is the usual arithmetic structure $\mathcal{N}$ for $\mathcal{L}_{\mathrm{ar}}$, not the term model $\mathcal{G}$ of $\mathbf{Cl}(T)$ defined in the card.

## 「決定可能」 in 01-foundations/05-proof-theory/05-quantified-provability-logic
- Default: `comp:L-computable` → **no candidate fits**
- Pages: 01-quantified-provability-logic.html, 02-artemov.html, 03-vardanyan.html, 04-one-predicate-letter.html
- Sentence: 命題の証明可能性論理では、命題変数に算術の文を割り当てたとき常に証明可能な様相論理式は $\mathsf{GL}$ で、常に真なものは $\mathsf{GLS}$ でちょうど公理化され、どちらも決定可能だった（\ref{pt:page-solovay}, \ref{pt:page-gls-uniform-completeness}）。本系列では、述語記号と量化子をもつ様相論理式（**量化様相論理**）について同じ問いを考え、答えが極端に否定的であることを示す：常に証明可能な文の集合は $\Pi^{0}_{2}$ 完全
  - `comp:L-computable`: NG — Here "決定可能" refers to decidability of a modal logic (a set of formulas), not the card's notion of a subset of $\N^{k}$ having a computable characteristic function.
  - `comp:recognizable-decidable`: NG — Here "決定可能" refers to decidability of modal logics (a set of formulas being recursive), not a Turing machine deciding a language as defined in the card.

## 「無矛盾」 in 01-foundations/05-proof-theory/05-quantified-provability-logic
- Default: `logic:prop-deduction` → **fits: `logic:derivability`**
- Pages: 02-artemov.html, 04-one-predicate-letter.html
- Sentence: $\PA$ の中で、$D^{\ast}$ を仮定する。$(\Diamond\top)^{\ast}$ は $\neg\mathrm{Bew}(\Godel{\bot})$、すなわち $\PA$ の無矛盾性である。$A^{\ast}$ を例にとる。機械 $u$：「$x,y,z$ が与えられたら、$\PA$ の証明を順に調べ、$A^{\ast}(x,y,z)$ の証明か $\neg A^{\ast}(x,y,z)$ の証明（数項を代入したもの）を探す。前者が先に見つかれば $0$、後者なら $1$ を出力する」。排中律よ
  - `logic:prop-deduction`: NG — Here "無矛盾性" refers to the consistency of PA (no proof of ⊥), which matches the card's definition of 無矛盾 as Σ⊬⊥, so it is the same notion.
  - `logic:derivability`: OK

## 「相対化」 in 01-foundations/05-proof-theory/05-quantified-provability-logic
- Default: `comp:oracle-classes` → **no candidate fits**
- Pages: 03-vardanyan.html
- Sentence: - QML、実現、翻訳、常に証明可能・常に真、上界（\ref{pt:qml-upper-bounds}）、相対化された階層・$T^{A}$ とその基本性質（\ref{pt:relative-t-basic}）・完全集合（\ref{pt:relative-hierarchy}, \ref{pt:complete-not-sigma}）、$V$ と $V_{r}$（\ref{pt:truth-set-facts}）は \ref{pt
  - `comp:oracle-classes`: NG — 「相対化」は神託機械による計算量クラスの定義ではなく、概念・結果を神託に関して一般化する操作を指す。
  - `set:relativization`: NG — This is a table-of-contents/list entry merely naming the topic "相対化された階層" (relativized hierarchy), not a use of the term with the definition's meaning.

## 「結合子」 in 01-foundations/05-proof-theory/05-quantified-provability-logic
- Default: `logic:weak-reduction` → **no candidate fits**
- Pages: 02-artemov.html
- Sentence: . 原子論理式の平坦化を $\widehat{t=s}\defeq\exists w\,(\Phi_{t}(w)\wedge\Phi_{s}(w))$、$\widehat{Gt}\defeq\exists w\,(\Phi_{t}(w)\wedge Gw)$ とし、$\widehat{\phantom{F}}$ を論理結合子と量化子と可換に延ばす。$\hat{F}$ の原子論理式は次の 6 種類だけである：
  - `logic:weak-reduction`: NG — Here "論理結合子" means logical connective, not a variable-free CL term (combinator).
  - `cat:monoidal-category`: NG — Here "結合子" means logical connective, not the associator natural isomorphism of a monoidal category.

## 「証明可能」 in 01-foundations/05-proof-theory/05-quantified-provability-logic
- Default: `logic:derivability` → **fits: `set:formal-deduction`**
- Pages: 01-quantified-provability-logic.html, 02-artemov.html, 03-vardanyan.html, 04-one-predicate-letter.html
- Sentence: - 算術の言語 $\mathcal{L}_{\mathrm{ar}}=\{0,S,+,\cdot\}$、$\PA$、標準モデル $\mathcal{N}$、Σ 論理式、証明可能性述語 $\mathrm{Bew}$、自由変数に数項を代入した $\mathrm{Bew}[F]$（\ref{pt:bew-bracket}）とその D1・D2（\ref{pt:bew-bracket-nec}, \ref{pt:bew-bracket-mp}）、形式化された Σ 完全性 $\PA\vdash F\to
  - `logic:derivability`: NG — 証明可能 is the proof-theoretic notion of provability (⊢), whereas the card defines 導出可能 (derivability) and 無矛盾性 (consistency), not 証明可能.
  - `set:formal-deduction`: OK

## 「論理式」 in 01-foundations/05-proof-theory/05-quantified-provability-logic
- Default: `logic:prop-formula` → **no candidate fits**
- Pages: 01-quantified-provability-logic.html, 02-artemov.html, 03-vardanyan.html, 04-one-predicate-letter.html
- Sentence: **述語記号** $\pi$（それぞれ項数 $n\ge1$ をもつ）を可算無限個用意する。**量化様相論理式**（QML の論理式）を次で帰納的に定める：$\bot$、変数 $x_{1},\dots,x_{n}$ と $n$ 項述語記号 $\pi$ による $\pi x_{1}\cdots x_{n}$ は論理式で、$F,G$ が論理式なら $(F\to G)$, $\forall x\,F$, $\Box F$ も論理式。関数記号・定数記号・等
  - `logic:prop-formula`: NG — This defines quantified modal formulas, a different inductive class from propositional formulas over a fixed set of propositional variables.
  - `logic:formula`: NG — This defines quantified modal logic formulas with a modal operator □, a different notion from the card's first-order logic formulas.
  - `logic:pdl-syntax`: NG — This defines quantified modal logic formulas, not PDL formulas built from propositional variables and atomic programs.
  - `logic:ltl-syntax`: NG — This defines quantified modal logic formulas (QML), a different language from the propositional LTL formulas in the card.
  - `logic:ctl-syntax`: NG — This defines quantified modal logic formulas (QML), not CTL formulas as in the card.
  - `logic:mu-formula`: NG — This "論理式" is the set of quantified modal logic formulas defined inductively, not the μ-calculus formulas of definition 8.3.
  - `set:first-order-language`: NG — This is a different inductive definition of "quantified modal formula" in a modal predicate language, not the set-theoretic formula notion defined in the card.
  - `pt:omega-language`: NG — This defines quantified modal logic formulas with predicate symbols and □, not the arithmetic language formulas of the card.

## 「イデアル」 in 01-foundations/05-proof-theory/06-second-order-arithmetic
- Default: `set:ideal` → **no candidate fits**
- Pages: 01-language-and-subsystems.html, 02-aca0-conservativity.html
- Sentence: $\mathcal{S}\subseteq\mathcal{P}(\N)$ を空でないとする。ω モデル $\mathcal{S}$ が $\mathsf{RCA}_{0}$ のモデルであることと、$\mathcal{S}$ が**チューリングイデアル**であること、すなわち次の二条件をみたすことは同値である。
  - `set:ideal`: NG — It refers to a Turing ideal, a special kind of ideal on the natural numbers closed under Turing reducibility, not the general set-theoretic ideal defined by the card.
  - `ring:ideal`: NG — Here "イデアル" is part of "チューリングイデアル" (a Turing ideal, a set of sets closed under Turing reducibility and joins), not a ring-theoretic ideal as defined in the card.

## 「合成」 in 01-foundations/05-proof-theory/06-second-order-arithmetic
- Default: `logic:pdl-syntax` → **fits: `set:relation-composition`**
- Pages: 01-language-and-subsystems.html
- Sentence: 5. 全域関数の全体は、合成・原始再帰・（全域性が保証された）最小化で閉じている。
  - `logic:pdl-syntax`: NG — Here "合成" means composition of total functions, not the PDL program composition operator α;β defined in the card.
  - `logic:while-program`: NG — Here "合成" refers to composition of total functions, not the sequential composition of while programs defined in the card.
  - `set:relation-composition`: OK

## 「完備」 in 01-foundations/05-proof-theory/06-second-order-arithmetic
- Default: `set:complete-boolean-algebra` → **no candidate fits**
- Pages: 01-language-and-subsystems.html
- Sentence: 応（\ref{logic:page-rm-rca0} で扱う）は、一般に次のように言われている。$\mathsf{RCA}_{0}$：計算可能な数学（中間値の定理など）。$\mathsf{WKL}_{0}$：コンパクト性（$[0,1]$ のハイネ–ボレルの定理、連続関数の最大値）。$\mathsf{ACA}_{0}$：完備性・列のコンパクト性（ボルツァーノ–ワイエルシュトラスの定理）。$\mathsf{ATR}_{0}$：可算整列順序の比較可能性、記述集合論の一部。$\Pi^{1}_{1}\text{-}\mathsf{CA}_{0}$：カントール–ベンディクソンの定理など。
  - `set:complete-boolean-algebra`: NG — Here "完備性" refers to completeness of the real numbers (e.g., Bolzano–Weierstrass), not completeness of a Boolean algebra as defined in the card.
  - `cat:limit`: NG — Here "完備性" refers to completeness of a metric/order structure (Cauchy completeness / order completeness) in reverse mathematics, not the category-theoretic completeness of having all small limits.
  - `ring:completion`: NG — Here "完備性" refers to completeness of the real numbers/order (e.g., Bolzano–Weierstrass), not the $I$-adic completion of a module.
  - `top:complete-metric`: NG — Here "完備性" refers to completeness of the real line in reverse mathematics (equivalent to Bolzano–Weierstrass), not the metric-space completeness defined by convergence of all Cauchy sequences, though the notions are related.
  - `top:cauchy-filter`: NG — Here "完備性" refers to completeness of the real numbers (order/sequential completeness), not completeness of a uniform space as in the card.
  - `ag:proper`: NG — Here "完備性" refers to completeness of the real numbers (order completeness), not the algebraic-geometry notion of a proper scheme over a field.

## 「有界」 in 01-foundations/05-proof-theory/06-second-order-arithmetic
- Default: `calc:supremum` → **no candidate fits**
- Pages: 01-language-and-subsystems.html, 03-choice-and-transfinite.html
- Sentence: 1. 原子論理式から命題結合子と有界数量化子 $\forall n<t$, $\exists n<t$（$n$ は $t$ に現れない）だけで作る論理式を**有界な論理式**、または $\Sigma^{0}_{0}$（$=\Pi^{0}_{0}$）論理式という。集合変数は自由に（パラメータとして）現れてよい。
  - `calc:supremum`: NG — This "有界" refers to bounded quantifiers in logic, not boundedness of a subset in an ordered set.
  - `logic:rm-analysis-defs`: NG — Here "有界" modifies logical formulas (bounded quantification), not a real sequence as in the card's definition of bounded sequence.

## 「標準モデル」 in 01-foundations/05-proof-theory/06-second-order-arithmetic
- Default: `logic:ikripke-canonical` → **no candidate fits**
- Pages: 02-aca0-conservativity.html
- Sentence: \ref{pt:definable-expansion} を標準モデル $M=\N$ に適用すると、$\mathrm{Def}(\N)$ は算術的集合全体 $\mathrm{ARITH}$ になることを確かめ、\ref{pt:omega-aca0} の「$\mathrm{ARITH}$ は $\mathsf{ACA}_{0}$ の ω モデルである」の別証明になっていることを説明せよ。
  - `logic:ikripke-canonical`: NG — This "標準モデル" refers to the standard model of arithmetic $\mathbb{N}$, not the canonical Kripke model of prime theories defined in the card.
  - `logic:generic-model-def`: NG — This "standard model" refers to the standard model of arithmetic $\mathbb{N}$, not the term model/standard model of a theory in the Lambek-style categorical structure defined in the card.

## 「相対化」 in 01-foundations/05-proof-theory/06-second-order-arithmetic
- Default: `comp:oracle-classes` → **fits: `set:relativization`**
- Pages: 01-language-and-subsystems.html
- Sentence: ($\Leftarrow$) 算術的論理式（パラメータ $X_{1},\dots,X_{k}\in\mathcal{S}$）で定義される集合は、$X\defeq X_{1}\oplus\cdots\oplus X_{k}$ について、ある $n$ で $X^{(n)}$ から計算可能である（算術的階層の相対化：\ref{comp:hierarchy-theorem} の神託付きの形）。$X\in\mathcal{S}$、跳躍で閉じているので $X^{(n)}\in\mathcal{S}$、チューリングイデアルなのでその集合も $\mathcal{S}$ に属する。
  - `comp:oracle-classes`: NG — 「相対化」は神託付き計算量クラスを定義する用語ではなく、算術的階層を神託付きの形に一般化する操作を指している。
  - `set:relativization`: OK

## 「結合子」 in 01-foundations/05-proof-theory/06-second-order-arithmetic
- Default: `logic:weak-reduction` → **no candidate fits**
- Pages: 01-language-and-subsystems.html
- Sentence: $（自然数の集合を動く）、定数 $0,1$、二項演算 $+,\cdot$、関係 $<$, $=$（数の間）と $\in$（数と集合の間）からなる。**項**は数変数と $0,1$ から $+,\cdot$ で作り、**原子論理式**は $t=s$, $t<s$, $t\in X$ の形とする。論理式は原子論理式から命題結合子、**数量化子** $\forall n,\exists n$、**集合量化子** $\forall X,\exists X$ で作る。集合の等号 $X=Y$ は $\forall n\,(n\in X\leftrightarrow n\in Y)$ の略記とする。
  - `logic:weak-reduction`: NG — Here "結合子" means logical connective (propositional connective), not a variable-free CL term (combinator).
  - `cat:monoidal-category`: NG — Here "結合子" means logical connective (命題結合子), not the associativity isomorphism of a monoidal category.

## 「計算可能」 in 01-foundations/05-proof-theory/06-second-order-arithmetic
- Default: `comp:L-computable` → **fits: `comp:mapping-reducible`**
- Pages: 01-language-and-subsystems.html, 03-choice-and-transfinite.html
- Sentence: 入する。これらは**逆数学**（\ref{logic:page-rm-rca0}）で、定理を証明するのに必要十分な公理を測る物差しとして使われる。後半では、最も弱い $\mathsf{RCA}_{0}$ の中での基本的な議論（\ref{pt:rca0-basic}）と、標準的な自然数をもつモデル（**ω モデル**）が計算可能性の言葉で特徴づけられること（\ref{pt:omega-rca0}, \ref{pt:omega-aca0}）を示す。
  - `comp:L-computable`: NG — the term appears only inside the compound noun「計算可能性」 (computability), not as the defined adjective「計算可能な部分関数」.
  - `comp:mapping-reducible`: OK

## 「論理式」 in 01-foundations/05-proof-theory/06-second-order-arithmetic
- Default: `logic:prop-formula` → **fits: `logic:formula`**
- Pages: 01-language-and-subsystems.html, 02-aca0-conservativity.html, 03-choice-and-transfinite.html
- Sentence:  $X,Y,Z,\dots$（自然数の集合を動く）、定数 $0,1$、二項演算 $+,\cdot$、関係 $<$, $=$（数の間）と $\in$（数と集合の間）からなる。**項**は数変数と $0,1$ から $+,\cdot$ で作り、**原子論理式**は $t=s$, $t<s$, $t\in X$ の形とする。論理式は原子論理式から命題結合子、**数量化子** $\forall n,\exists n$、**集合量化子** $\forall X,\exists X$ で作る。集合の等号 $X=Y$ は $\forall n\,(n\in X\leftrightarrow n\in Y)$ の略記とする。
  - `logic:prop-formula`: NG — This sentence defines formulas of a first-order language with quantifiers, not the propositional formulas of the card.
  - `logic:formula`: OK

## 「連続関数」 in 01-foundations/05-proof-theory/06-second-order-arithmetic
- Default: `logic:rm-continuous-code` → **no candidate fits**
- Pages: 01-language-and-subsystems.html
- Sentence: **二階算術**は、自然数と、自然数の**集合**の二種類の対象を扱う理論である。実数・連続関数・可算な代数的構造などは自然数の集合で符号化できるので、通常の数学の多くの部分（解析学、可算代数、組合せ論）がこの言語で表せる。本ページでは、二階算術の言語と構造（\ref{pt:l2-language}）、論理式の階層（\ref{pt:l2-hierarchy}）を定め、集合の存在を主張する**内包公理**の強さに応
  - `logic:rm-continuous-code`: NG — This is a general mention of continuous functions as encodable objects, not the specific definition of a continuous function's sign (符号) given in the card.
  - `calc:function-limit`: NG — Here "連続関数" refers to continuous functions as encodable mathematical objects in second-order arithmetic, not the specific definition of continuity at a point given in the card.
  - `cx:limit-continuity`: NG — This is a general informal use of "continuous function" in the context of second-order arithmetic, not the specific complex-analysis definition of continuity of a complex function on a set $A\subset\C$.

## 「飽和」 in 01-foundations/05-proof-theory/06-second-order-arithmetic
- Default: `model:saturated` → **no candidate fits**
- Pages: 03-choice-and-transfinite.html
- Sentence: $\Sigma^{1}_{1}\text{-}\mathsf{AC}_{0}$ の保存性.* $\Sigma^{1}_{1}\text{-}\mathsf{AC}_{0}$ は $\Pi^{1}_{2}$ 文について $\mathsf{ACA}_{0}$ の保存拡大である（バーワイズ–シュリップ）。証明には**再帰的に飽和なモデル**が使われる（田中の本の §3.2）。
  - `model:saturated`: NG — Here "飽和" refers to recursively saturated models in second-order arithmetic, not the model-theoretic κ-saturation defined in the card.
  - `top:saturated-set`: NG — Here "飽和なモデル" refers to recursively saturated models in model theory, not the saturated-set notion relative to a surjection in the card.

## 「イデアル」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `set:ideal` → **no candidate fits**
- Pages: 03-aca0.html
- Sentence: f{RCA}_{0}$ の上で同値であることが知られている（ジャンプの定義と、相対化した枚挙定理の $\mathsf{RCA}_{0}$ での形式化が必要になるので、本サイトでは示していない）。\ref{pt:omega-aca0} で、$\mathsf{ACA}_{0}$ の ω モデルがジャンプで閉じたチューリングイデアルであることを見たが、上の定理はその「体系の中での」版である。
  - `set:ideal`: NG — Here "イデアル" refers to a Turing ideal (a collection of sets closed under Turing reducibility and join), not the set-theoretic ideal defined on a set $A$ with $\varnothing\in\mathcal{I}$ and $A\notin\mathcal{I}$.
  - `ring:ideal`: NG — Here "イデアル" refers to a Turing ideal (a collection of sets closed under Turing reducibility and join), not an ideal of a commutative ring as defined in the card.

## 「プログラム」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 02-wkl0.html, 05-harrington-forcing.html, 06-friedman.html
- Sentence:  の保存拡大であり（ハーリントン）、$\Pi^{0}_{2}$ 文について $\mathsf{PRA}$ の保存拡大である（フリードマン）。したがって、$\mathsf{WKL}_{0}$ で証明できる算術の $\Pi^{0}_{2}$ 文は有限の立場（$\mathsf{PRA}$）で正当化でき、これは**ヒルベルトのプログラムの部分的な実現**と呼ばれている（シンプソン）。保存性の証明は \ref{pt:page-soa-wkl0-conservation} で扱う予定である。
  - `logic:pdl-syntax`: NG — Here "プログラム" refers to Hilbert's program (a foundational research program), not a program in propositional dynamic logic.
  - `logic:while-program`: NG — Here "プログラム" refers to Hilbert's program (ヒルベルトのプログラム), a foundational research program, not a while-program as defined in the card.

## 「上界」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `set:chain-maximal` → **fits: `calc:supremum`**
- Pages: 02-wkl0.html, 03-aca0.html, 04-ramsey.html, 05-harrington-forcing.html
- Sentence: 1 は \ref{logic:heine-borel-wkl}、$\mathsf{WKL}\Rightarrow$ 2 は \ref{logic:wkl-uniform-continuity}。$\mathsf{WKL}\Rightarrow$ 3〜5 は、2 と同様に有限部分被覆から値の上界を計算し、さらに「最大値をとらない」と仮定して上限の近くの値をとる点の被覆を作り、有限部分被覆から上限より小さい上界が得られて矛盾する、という議論による（田中の本の定理 2.16）。逆向き（2〜5 から $\mathsf{WKL}$）は、$\mathsf{WKL}$ が成り立たないと仮定し、道をもたない無限二分木 $T
  - `set:chain-maximal`: NG — Here "上界" refers to an upper bound of the values of a function (a bound on real numbers), not an upper bound of a subset in a partially ordered set as defined in the card.
  - `calc:supremum`: OK

## 「合成」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 01-rca0-analysis.html, 04-ramsey.html, 06-friedman.html
- Sentence: **極限の構成.** $c_{k}\defeq\alpha_{g(k+1)}$ とする（原始再帰的な操作の合成なので関数として存在する）。$m\defeq g(k+1)$, $m'\defeq g(k+i+1)$ とすると、(1) から二つの区間は共通の点 $z$ をもち、$\beta_{m}-\alpha_{m}<2^{-k-1}$, $\beta_{m'}-\alpha_{m'}<2^{-k-i-1}$ なので
  - `logic:pdl-syntax`: NG — Here "合成" refers to composition of primitive recursive operations/functions, not the PDL program composition operator α;β defined in the card.
  - `logic:while-program`: NG — Here "合成" means composition of functions/operations, not the sequential composition of while programs defined in the card.
  - `set:relation-composition`: NG — Here "合成" refers to composition of primitive recursive operations/functions, not composition of relations as defined in the card.
  - `cat:category`: NG — Here "合成" refers to composition of primitive recursive operations/functions, not composition of morphisms in a category as defined in the card.
  - `cat:non-symmetric-operad`: NG — Here "合成" means composition of primitive recursive operations (functions), not the operad composition operation γ on the sets P(k).

## 「完備」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `set:complete-boolean-algebra` → **fits: `top:complete-metric`**
- Pages: 01-rca0-analysis.html, 03-aca0.html
- Sentence: 田中の本と Simpson の本によれば、ほかに次の定理も $\mathsf{RCA}_{0}$ で証明できることが知られている：縮小写像についてのバナッハの不動点定理、完備可分距離空間のベールの範疇定理、代数学の基本定理、「無矛盾で完全な（可算言語の）理論はモデルをもつ」。いずれも、存在を主張する対象を**計算する手続き**（探索や近似）が具体的に書けるという共通点をもつ。一方、二次元以上のブラウワーの不動点定理や、$[0,1]$ 上の連続関数の最大値の存在は、$\mathsf{RCA}
  - `set:complete-boolean-algebra`: NG — Here "完備" modifies "可分距離空間" (complete separable metric space), meaning Cauchy-completeness of a metric space, not the completeness of a Boolean algebra (existence of all sups and infs).
  - `cat:limit`: NG — Here "完備" means complete (Cauchy-complete) metric space, not the category-theoretic completeness of having all limits.
  - `ring:completion`: NG — Here "完備" means complete as a metric space (Cauchy sequences converge), not the \(I\)-adic completeness of a module defined in the card.
  - `top:complete-metric`: OK

## 「有界」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `calc:supremum` → **no candidate fits**
- Pages: 01-rca0-analysis.html, 02-wkl0.html
- Sentence: 「同値類で最小の代表」は、有界な量化子で定義できる（対 $(m,n)$ のコードより小さい対を調べればよい）ので、$\Sigma^{0}_{0}$ 内包公理で $\mathbb{Z},\mathbb{Q}$ は集合として存在する。$\mathbb{Q}$ が順序体の公理を満たすことは、$\mathsf{RCA}_{0}$ の一階の部分（$\math
  - `calc:supremum`: NG — Here "有界な量化子" means a bounded quantifier in logic, not a bounded set in the order-theoretic sense defined by the card.
  - `logic:rm-analysis-defs`: NG — Here "有界な量化子" means a bounded quantifier, not a bounded sequence as defined in the card.

## 「有界」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `logic:rm-analysis-defs` → **no candidate fits**
- Pages: 03-aca0.html, 04-ramsey.html, 05-harrington-forcing.html, 06-friedman.html
- Sentence: > 主な資料は田中一之『逆数学と 2 階算術』第 2 章 §2.4 前半（定理 2.20, 2.23–2.25）。証明は自分の言葉で組み立て直し、有界 $\Sigma^{0}_{1}$ 内包公理、単射の値域から $\Sigma^{0}_{1}$ 内包公理を導く部分、および $\mathsf{ACA}_{0}$ から各定理を導く部分は補って書いた。
  - `logic:rm-analysis-defs`: NG — Here "有界" modifies the comprehension axiom (bounded $\Sigma^{0}_{1}$ comprehension), not a bounded real sequence as defined in the card.
  - `calc:supremum`: NG — Here "有界" modifies the comprehension axiom schema (bounded $\Sigma^{0}_{1}$ comprehension), meaning bounded quantification, not the order-theoretic boundedness of a set as defined in the card.

## 「極限」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `logic:rm-sequence-limit` → **no candidate fits**
- Pages: 01-rca0-analysis.html, 03-aca0.html, 05-harrington-forcing.html
- Sentence: **極限の構成.** $c_{k}\defeq\alpha_{g(k+1)}$ とする（原始再帰的な操作の合成なので関数として存在する）。$m\defeq g(k+1)$, $m'\defeq g(k+i+1)$ とすると、(1) から二つの区間は共通の点 $z$ をもち、$\beta_{m}-\alpha_{m}<2^{-k
  - `logic:rm-sequence-limit`: NG — one short English sentence why
  - `cat:limit`: NG — This use of 極限 refers to a limit of a sequence of intervals in analysis, not the universal cone (categorical limit) defined in the card.

## 「標準モデル」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `logic:ikripke-canonical` → **no candidate fits**
- Pages: 06-friedman.html
- Sentence: $\theta(x,y)$ を有界な論理式とし、$\mathsf{WKL}_{0}\vdash\forall x\,\exists y\,\theta(x,y)$ とする。原始再帰的関数 $f$ で、すべての $n\in\N$ について $\theta(n,f(n))$ が（標準モデルで）成り立つものがあることを示せ。ただし、「$\mathsf{PRA}\vdash\forall x\,\exists y\,\theta(x,y)$ なら、そのような原始再帰的関数がある」こと（エルブランの定理などによる）は既知としてよい。
  - `logic:ikripke-canonical`: NG — This "standard model" refers to the standard model of arithmetic (the usual natural numbers), not the canonical Kripke model of prime theories defined in the card.
  - `logic:generic-model-def`: NG — This "standard model" refers to the standard model of arithmetic (the usual natural numbers), not the term model of a type theory defined in the card.

## 「標準形」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `pt:letterless-normal-form-def` → **no candidate fits**
- Pages: 03-aca0.html
- Sentence: $\vee,\to,\forall$ は $\neg,\wedge,\exists$ で表せるので、これで帰納法が完了し、1 が従う。この証明では冠頭標準形への変形を使っていない（有界な量化子を非有界な量化子の外に出す操作は、$\Sigma^{0}_{1}$ 帰納法だけでは一般にできないので、構成についての帰納法にした）。
  - `pt:letterless-normal-form-def`: NG — This "標準形" refers to prenex normal form (冠頭標準形) in arithmetic formulas, not the letterless modal normal form defined in the card.
  - `at:box-map`: NG — This "標準形" refers to prenex normal form in logic, not the standard-form sphere map defined in the card.

## 「次元」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `lin:dimension` → **no candidate fits**
- Pages: 01-rca0-analysis.html, 02-wkl0.html
- Sentence: athsf{RCA}_{0}$ で証明できることが知られている：縮小写像についてのバナッハの不動点定理、完備可分距離空間のベールの範疇定理、代数学の基本定理、「無矛盾で完全な（可算言語の）理論はモデルをもつ」。いずれも、存在を主張する対象を**計算する手続き**（探索や近似）が具体的に書けるという共通点をもつ。一方、二次元以上のブラウワーの不動点定理や、$[0,1]$ 上の連続関数の最大値の存在は、$\mathsf{RCA}_{0}$ では証明できず、$\mathsf{WKL}_{0}$ と同値になる（\ref{logic:page-rm-wkl0}）。
  - `lin:dimension`: NG — Here "次元" refers to the dimension of Euclidean space (二次元以上 = two or more dimensions), not the dimension of a vector space as defined in the card.
  - `cat:trace-dimension`: NG — Here "次元" refers to topological/algebraic dimension (e.g., "二次元以上" meaning dimension two or higher), not the monoidal-category trace/dimension defined in the card.
  - `ring:krull-dimension`: NG — Here "次元" refers to topological/algebraic dimension in the context of fixed point theorems (e.g., "二次元以上"), not Krull dimension of a ring.
  - `ag:dimension`: NG — Here "次元" refers to the dimension of Euclidean space (二次元以上, i.e., two or more dimensions), not the dimension of a topological space defined via chains of irreducible closed subsets.

## 「正則」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `set:regular-cardinal` → **no candidate fits**
- Pages: 06-friedman.html
- Sentence: - *カービー–パリスの理論.* 半正則切断より強い条件をもつ切断も研究されており、たとえば**強切断**は $\PA$ のモデルを与え、パリス–ハーリントンの定理の証明に使われることが知られている。切断に課す「正則性」の強さが、得られる帰納法の強さに対応していると言われている。
  - `set:regular-cardinal`: NG — Here "正則性" refers to a regularity condition on cuts in models of arithmetic, not the set-theoretic notion of a regular ordinal.
  - `cx:holomorphic`: NG — Here "正則" refers to regularity conditions on cuts in models of arithmetic (a different notion), not complex differentiability of a function.
  - `top:separation-axioms`: NG — Here "正則" refers to regularity conditions on cuts in models of arithmetic, not the topological separation axiom for closed sets and points.
  - `ag:regular-function`: NG — This "正則" refers to regularity conditions on cuts in models of Peano arithmetic, not to regular functions on quasi-affine varieties.
  - `ag:quasi-projective-regular`: NG — This "正則" refers to regularity conditions on cuts in models of arithmetic (Kirby–Paris theory), not to regular functions on quasi-projective varieties.

## 「正規」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `set:normal-function` → **no candidate fits**
- Pages: 05-harrington-forcing.html
- Sentence: > 主な資料は田中一之『逆数学と 2 階算術』第 3 章 §3.3（命題 3.19、補題 3.20–3.24、定理 3.25）。証明は自分の言葉で組み立て直し、稠密集合 $E_{k}$ の稠密性、$\Sigma^{0}_{1}$ 論理式の正規形、$D_{b}$ の稠密性の証明の細部を補って書いた。
  - `set:normal-function`: NG — Here "正規形" (normal form) refers to a normal form of a $\Sigma^{0}_{1}$ formula, not a normal (increasing and continuous) class function on the ordinals.
  - `lin:adjoint`: NG — Here「正規形」means normal form of a Σ⁰₁ formula, not the normal operator (f*f=ff*) defined in the card.
  - `fld:normal`: NG — Here "正規形" (normal form) refers to a normal form of a $\Sigma^{0}_{1}$ formula in logic, not the field-theoretic notion of a normal extension.
  - `top:separation-axioms`: NG — Here "正規形" means "normal form" of a logical formula, not the normal/separation axiom for topological spaces.

## 「無矛盾」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `logic:prop-deduction` → **fits: `logic:derivability`**
- Pages: 01-rca0-analysis.html, 02-wkl0.html, 05-harrington-forcing.html
- Sentence: 田中の本と Simpson の本によれば、ほかに次の定理も $\mathsf{RCA}_{0}$ で証明できることが知られている：縮小写像についてのバナッハの不動点定理、完備可分距離空間のベールの範疇定理、代数学の基本定理、「無矛盾で完全な（可算言語の）理論はモデルをもつ」。いずれも、存在を主張する対象を**計算する手続き**（探索や近似）が具体的に書けるという共通点をもつ。一方、二次元以上のブラウワーの不動点定理や、$[0,1]$ 上の連続関数の最大値の存在は、$\mathsf{RCA}_{0}$ では証明できず、$\mathsf{WKL}_{
  - `logic:prop-deduction`: NG — Here "無矛盾" refers to a consistent theory in the model-theoretic sense (having a model), not the proof-theoretic definition via natural deduction derivations in the card.
  - `logic:derivability`: OK

## 「相対化」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `comp:oracle-classes` → **no candidate fits**
- Pages: 03-aca0.html
- Sentence: 1. **ジャンプとの関係.** 計算可能性理論の言葉では、2 は「任意の集合 $X$ について $X$ のジャンプ $X'$（\ref{pt:omega-aca0}）が存在する」と $\mathsf{RCA}_{0}$ の上で同値であることが知られている（ジャンプの定義と、相対化した枚挙定理の $\mathsf{RCA}_{0}$ での形式化が必要になるので、本サイトでは示していない）。\ref{pt:omega-aca0} で、$\mathsf{ACA}_{0}$ の ω モデルがジャンプで閉じたチューリングイデアルであることを見たが、上の定理はその「体系の中での」版である。
  - `comp:oracle-classes`: NG — 「相対化」here refers to relativizing computability-theoretic notions to an oracle set (e.g., relativized enumeration theorem), not the definition of oracle complexity classes P^A/NP^A.
  - `set:relativization`: NG — Here "相対化" refers to relativizing computability/enumeration (oracle relativization), not the set-theoretic relativization of a formula to a class M defined in the card.

## 「計算可能」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `comp:L-computable` → **fits: `comp:mapping-reducible`**
- Pages: 01-rca0-analysis.html, 02-wkl0.html, 03-aca0.html, 04-ramsey.html, 05-harrington-forcing.html
- Sentence: }_{0}$ 内包公理で $\mathbb{Z},\mathbb{Q}$ は集合として存在する。$\mathbb{Q}$ が順序体の公理を満たすことは、$\mathsf{RCA}_{0}$ の一階の部分（$\mathrm{I}\Sigma_{1}$ を含む）での通常の計算で確かめられる。以下、有理数の四則と大小の比較は計算可能（$\Sigma^{0}_{0}$ で定義できる）である。
  - `comp:L-computable`: NG — Here "計算可能" refers to arithmetic operations on rationals being computable (definable by a $\Sigma^{0}_{0}$ formula), not to partial functions computed by L-programs as defined in the card.
  - `comp:mapping-reducible`: OK

## 「論理式」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `logic:prop-formula` → **fits: `logic:formula`**
- Pages: 01-rca0-analysis.html, 02-wkl0.html, 03-aca0.html, 04-ramsey.html, 05-harrington-forcing.html, 06-friedman.html
- Sentence: **ではなく、集合（関数）についての**述語**である。$\mathbb{R}$ を同値類で割ることはできないので、$=_{\mathbb{R}}$ をそのまま等号の代わりに使う。$=_{\mathbb{R}}$ は $\Pi^{0}_{1}$、$<_{\mathbb{R}}$ は $\Sigma^{0}_{1}$ の論理式である。この非対称性が、実数の大小を「計算で決められない」ことの形式的な表れになっている。
  - `logic:prop-formula`: NG — Here "論理式" refers to formulas of second-order arithmetic (with predicates like $=_{\mathbb{R}}$ and $<_{\mathbb{R}}$), not propositional formulas over a fixed set $\mathrm{PV}$ as defined in the card.
  - `logic:formula`: OK

## 「辞書式順序」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `set:well-order-sum-product-def` → **no candidate fits**
- Pages: 05-harrington-forcing.html
- Sentence: が存在する。$\sigma=1^{b+1}$ では $T_{\sigma}=T$ なので $S_{b}\neq\varnothing$。$S_{b}$ の辞書式順序（$0<1$）で最小の元を $\sigma_{0}$ とする。$T_{\sigma_{0}}\le T$ は無限なので $P$ に属する。$T_{\sigma_{0}}\in D_{b}$ を示す。$a\le b$ をとる。
  - `set:well-order-sum-product-def`: NG — It refers to the lexicographic order on binary strings, not the lexicographic product of two well-ordered sets defined in the card.
  - `top:double-arrow`: NG — Here "辞書式順序" refers to the lexicographic order on binary strings, not the lexicographic order on $[0,1]\times\{0,1\}$ used to define the double arrow space.

## 「連続」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `comp:monotone-continuous` → **fits: `cx:limit-continuity`**
- Pages: 01-rca0-analysis.html, 02-wkl0.html
- Sentence: と定める（**二分法**）。$\Pi^{0}_{1}$ 帰納法で、すべての $n$ について $f(p_{n})<0<f(q_{n})$。区間縮小法で $x=\lim p_{n}=\lim q_{n}$ がある。$f(x)>0$ なら、連続性（符号の 4 と定義域の条件）から $x$ のある有理数の近傍で $f>0$ となり、十分大きい $n$ で $p_{n}$ がその近傍に入って $f(p_{n})<0$ に反する。$f(x)<0$ も同様。よって $f(x)=0$。
  - `comp:monotone-continuous`: NG — Here "連続" refers to continuity of a real-valued function in the usual epsilon-delta/topological sense, not the fixed-point definition about monotone/continuous maps on power sets of $\Sigma^{\ast}$.
  - `cx:limit-continuity`: OK

## 「上限」 in 01-foundations/05-proof-theory/08-ordinal-analysis
- Default: `logic:rm-analysis-defs` → **fits: `calc:supremum`**
- Pages: 01-epsilon0.html, 03-gentzen-bound.html, 04-gentzen-wellordering.html, 05-goodstein.html
- Sentence: **順序数解析**は、算術の体系 $T$ が「どれだけ長い整列順序について超限帰納法を証明できるか」を順序数で測る。ペアノ算術 $\PA$ の場合、その限界は**$\varepsilon_{0}$**（$\omega,\omega^{\omega},\omega^{\omega^{\omega}},\dots$ の上限）である（ゲンツェン、\ref{pt:page-gentzen-bound}）。本ページでは、その準備として、順序数の**カントール標準形**（\ref{pt:cantor-normal-form}）を示し、$\varepsilon_{0}$ を定義してその基本性質（\ref{pt:epsilon0-basic}）を調
  - `logic:rm-analysis-defs`: NG — Here "上限" means the supremum (limit) of the sequence $\omega,\omega^{\omega},\dots$, not the upper bound of a real sequence as defined in the card.
  - `set:order-dedekind-complete`: NG — Here 上限 means the supremum (least upper bound) of the sequence $\omega,\omega^{\omega},\dots$, which is exactly the notion defined in the card, so it matches.
  - `calc:supremum`: OK

## 「合成」 in 01-foundations/05-proof-theory/08-ordinal-analysis
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 02-omega-logic.html, 05-goodstein.html
- Sentence: - **$2^{\gamma}+2^{\gamma}\le2^{\alpha}$**：\ref{pt:omega-cut-elimination} で、二つの前提を簡約で合成した高さを抑えるのに使った（$\gamma<\alpha$ から $\gamma+1\le\alpha$）。
  - `logic:pdl-syntax`: NG — Here "合成" refers to combining two derivation heights by ordinal addition, not to the PDL program composition operator α;β defined in the card.
  - `logic:while-program`: NG — Here "合成" means combining two premises in a proof, not the sequential composition P;Q of while-programs.
  - `set:relation-composition`: NG — Here "合成" refers to combining two premises in a proof (a logical/derivation composition), not the composition of two relations as defined in the card.
  - `cat:category`: NG — Here "合成" means combining two premises in a proof (cut elimination), not the composition of morphisms in a category.
  - `cat:non-symmetric-operad`: NG — This "合成" refers to combining two proof heights in cut elimination, not the operad composition operation γ defined in the card.

## 「有界」 in 01-foundations/05-proof-theory/08-ordinal-analysis
- Default: `logic:rm-analysis-defs` → **no candidate fits**
- Pages: 01-epsilon0.html
- Sentence: **1.** 定義の各条件は、成分 $a_{i},b_{j}$（$a,b$ より小さい数）についての $\mathrm{OT}$ と $\prec$ の値と、有界な量化子だけを使って書けるので、特性関数の組（$\mathrm{OT}$ と、対 $(a,b)$ についての $\prec$ を一つの関数にまとめる）は累積再帰で定義され、原始再帰的である（\ref{pt:course-of-values}）。
  - `logic:rm-analysis-defs`: NG — Here "有界な量化子" means bounded quantifiers in logic, not a bounded real sequence as defined in the card.
  - `calc:supremum`: NG — Here "有界な量化子" means bounded quantifiers in logic, not the order-theoretic boundedness of a set defined in the card.

## 「極限」 in 01-foundations/05-proof-theory/08-ordinal-analysis
- Default: `logic:rm-sequence-limit` → **no candidate fits**
- Pages: 01-epsilon0.html, 04-gentzen-wellordering.html, 05-goodstein.html
- Sentence: a<\omega$）。同様に $\eta<\omega^{\beta'}\cdot m'$ とすると、$\xi+\eta<\omega^{\beta'}\cdot m+\omega^{\beta'}\cdot m'=\omega^{\beta'}\cdot(m+m')<\omega^{\beta}$。$\beta$ が極限のとき：連続性から $\omega^{\beta}=\sup_{\beta'<\beta}\omega^{\beta'}$ なので、$\xi,\eta<\omega^{\beta'}$ となる $\beta'<\beta$ があり、帰納法の仮定から $\xi+\eta<\omega^{\beta'}\le\omega^
  - `logic:rm-sequence-limit`: NG — Here "極限" refers to a limit ordinal (β is a limit ordinal), not the limit of a real sequence as defined in the card.
  - `cat:limit`: NG — Here "極限" refers to a limit ordinal (a continuity/supremum case in ordinal arithmetic), not the category-theoretic universal cone limit defined in the card.

## 「標準モデル」 in 01-foundations/05-proof-theory/08-ordinal-analysis
- Default: `logic:ikripke-canonical` → **no candidate fits**
- Pages: 01-epsilon0.html, 02-omega-logic.html
- Sentence: 以下、$\alpha,\beta,\gamma$ は $\mathrm{OT}$ の元を、$<$ は $\prec$ を、$+$ は $\hat{+}$ を、$\omega^{\alpha}\cdot n$ は $\hat{\omega}^{\alpha}\cdot n$ を表すとする。次の性質は（標準モデルで）成り立つ。
  - `logic:ikripke-canonical`: NG — This "標準モデル" refers to the standard model of ordinal notation (ordinals under $\prec$ and $\hat{+}$), not the canonical Kripke model of prime theories defined in the card.
  - `logic:generic-model-def`: NG — This "標準モデル" refers to the standard model of ordinal notation (OT) under \(\prec\) and \(\hat{+}\), not the term model \(\mathcal{G}\) of \(\mathbf{Cl}(T)\) defined in the card.

## 「標準形」 in 01-foundations/05-proof-theory/08-ordinal-analysis
- Default: `pt:letterless-normal-form-def` → **no candidate fits**
- Pages: 01-epsilon0.html, 02-omega-logic.html, 03-gentzen-bound.html, 05-goodstein.html, 06-hydra.html
- Sentence: PA$ の場合、その限界は**$\varepsilon_{0}$**（$\omega,\omega^{\omega},\omega^{\omega^{\omega}},\dots$ の上限）である（ゲンツェン、\ref{pt:page-gentzen-bound}）。本ページでは、その準備として、順序数の**カントール標準形**（\ref{pt:cantor-normal-form}）を示し、$\varepsilon_{0}$ を定義してその基本性質（\ref{pt:epsilon0-basic}）を調べる。最後に、$\varepsilon_{0}$ 未満の順序数を自然数で符号化し、$\varepsilon_{0}$ と同型な**原始再帰
  - `pt:letterless-normal-form-def`: NG — This "標準形" refers to Cantor normal form for ordinals, not the normal form of closed modal formulas defined in the card.
  - `at:box-map`: NG — This "標準形" refers to Cantor normal form for ordinals, not the standard form map \(S_{\varepsilon}\) in the definition card.

## 「無矛盾」 in 01-foundations/05-proof-theory/08-ordinal-analysis
- Default: `logic:prop-deduction` → **fits: `logic:derivability`**
- Pages: 03-gentzen-bound.html, 04-gentzen-wellordering.html
- Sentence: - *ゲンツェンの無矛盾性証明.* ゲンツェン（1936）は、$\PA$ の証明に順序数を割り当て、カットを減らす変換で順序数が減ることを示して、$\mathsf{PRA}$ に $\varepsilon_{0}$ までの（量化子のない論理式についての）超限帰納法を加えた体系で $\mathrm{Con}(\PA)$ を証明した。本ページの方
  - `logic:prop-deduction`: NG — This use refers to Gentzen's consistency proof for PA (a metamathematical property of a theory), not the card's definition of a set of formulas being consistent in propositional natural deduction.
  - `logic:derivability`: OK

## 「縮約」 in 01-foundations/05-proof-theory/08-ordinal-analysis
- Default: `set:complete-embedding` → **no candidate fits**
- Pages: 02-omega-logic.html
- Sentence: 2. 主論理式を前提に残す形にしたので、縮約（同じ論理式を二度使うこと）は自動的に許される。シーケントが集合なので、交換も不要である。
  - `set:complete-embedding`: NG — Here "縮約" means contraction in proof theory (using the same formula twice), not the reduction of a condition to a poset as defined in the card.
  - `ring:extension-contraction`: NG — Here "縮約" means contraction in a proof-theoretic sense (using the same formula twice), not the contraction of an ideal under a ring homomorphism as defined in the card.

## 「証明可能」 in 01-foundations/05-proof-theory/08-ordinal-analysis
- Default: `logic:derivability` → **fits: `set:formal-deduction`**
- Pages: 03-gentzen-bound.html, 05-goodstein.html, 06-hydra.html
- Sentence: - *証明可能な再帰関数.* 同じ方法で、$\PA$ で全域性が証明できる関数が、$\varepsilon_{0}$ 未満の順序数で添字付けた急増加階層（ハーディ階層など）の関数で抑えられることが示せる（新井の本の §8.4.3）。
  - `logic:derivability`: NG — 「証明可能」はここではPAで全域性が証明できる関数を指し、カードが定義する導出可能性（$\Sigma\vdash\varphi$）とは異なる概念である。
  - `set:formal-deduction`: OK

## 「連続」 in 01-foundations/05-proof-theory/08-ordinal-analysis
- Default: `comp:monotone-continuous` → **no candidate fits**
- Pages: 01-epsilon0.html, 05-goodstein.html
- Sentence: le\beta$ なら $\alpha+\delta=\beta$ となる $\delta$ が一意）；指数法則 $\omega^{\beta+\gamma}=\omega^{\beta}\cdot\omega^{\gamma}$；$\beta\mapsto\omega^{\beta}$ は**正規関数**（狭義増加で連続。\ref{set:normal-function}, \ref{set:normal-function-basic}）で、$\beta\le\omega^{\beta}$。
  - `comp:monotone-continuous`: NG — Here "連続" refers to continuity of an ordinal function in the order topology, not the fixed-point definition for set-valued maps on $\mathcal{P}(\Sigma^{\ast})^{n}$.
  - `cx:limit-continuity`: NG — Here "連続" refers to continuity of an ordinal function in the order topology, not the complex-function continuity defined in the card.
  - `top:continuous`: NG — Here "連続" refers to a normal function on ordinals being continuous in the order topology, not a continuous map between topological spaces as defined in the card.

## 「閉包」 in 01-foundations/05-proof-theory/08-ordinal-analysis
- Default: `logic:ltl-size` → **no candidate fits**
- Pages: 02-omega-logic.html, 03-gentzen-bound.html
- Sentence: -basic}, \ref{set:ordinal-exponentiation-laws}）。$\beta<\alpha$ なら $2^{\beta}<2^{\alpha}$、$2^{\beta}+2^{\beta}=2^{\beta}\cdot2=2^{\beta+1}$。$\varepsilon_{0}$ とその閉包性は \ref{pt:epsilon0-basic}。
  - `logic:ltl-size`: NG — Here "閉包性" refers to closure properties of ε₀ (e.g., under addition/exponentiation), not the LTL formula closure set CL(A) defined in the card.
  - `logic:ctl-closure`: NG — Here "閉包性" refers to closure properties of the ordinal ε₀ (closed under exponentiation/addition), not the modal-logic closure set CL(A) defined in the card.
  - `set:finitary-closure`: NG — Here "閉包性" refers to closure properties of $\varepsilon_{0}$ (e.g., being closed under exponentiation/addition), not the set-theoretic closure of a subset under a family of finitary operations defined in the card.
  - `set:pred-closure`: NG — Here "閉包性" refers to closure properties of $\varepsilon_{0}$ (being closed under certain operations), not the set-theoretic closure $\mathrm{cl}(\mathbf{A},x,\mathbf{R})$ defined in the card.
  - `top:interior-closure`: NG — Here "閉包性" refers to closure properties of ε₀ (being closed under certain operations), not the topological closure of a set.

## 「シーケント」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `pt:lk` → **fits: `pt:g-omega`**
- Pages: 01-simply-typed.html
- Sentence: は項の上では β 簡約 $(\lambda x.M)N\to_{\beta}M[N/x]$ そのものである。したがって、正規形の項は回り道のない導出（**正規な導出**）に対応する。次の強正規化定理は、どんな導出も、回り道の除去をどの順序で行っても有限回で正規な導出に至ることを示す。これは自然演繹の**正規化定理**（シーケント計算のカット除去 \ref{pt:page-cut-elimination} に当たる）の、含意の部分の証明になっている。
  - `pt:lk`: NG — In the sentence, "シーケント" refers to sequent calculus derivations/proofs (the calculus), not a sequent as a pair of multisets of formulas.
  - `pt:g-omega`: OK

## 「プログラム」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 01-simply-typed.html, 02-system-t.html, 03-system-f.html, 05-lambek.html
- Sentence: **高い視点から：証明は計算である.** カリー＝ハワード対応は、「$A$ の証明」と「型 $A$ のプログラム」が同じものであると言う。$A\to B$ の証明は「$A$ の証明を $B$ の証明に変換する手続き」（ブラウワー–ハイティング–コルモゴロフ解釈）で、モーダス・ポネンスはその手続きの実行（関数適用）、証明の回り道の除去は計算（β 簡約）である。圏論的には、単純型付きラムダ計算（に η 等式を加えたもの）は**デカル
  - `logic:pdl-syntax`: NG — Here "プログラム" means a term in the simply typed lambda calculus (a proof/type-theoretic computation), not a program built from atomic programs via composition, choice, iteration, and test as in the PDL definition.
  - `logic:while-program`: NG — Here "プログラム" refers to programs in the Curry–Howard correspondence (typed lambda calculus), not the while-programs defined in the card.

## 「ホモトピー」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `at:homotopy` → **no candidate fits**
- Pages: 01-simply-typed.html, 05-lambek.html, 06-dependent-types.html
- Sentence: - *ホモトピー型理論.* 依存型理論の型を空間、項を点、恒等型を道とみなす解釈がある（\ref{logic:page-identity-types}, \ref{logic:page-hott}）。
  - `at:homotopy`: NG — Here "ホモトピー" is part of the compound term "ホモトピー型理論" (homotopy type theory), naming a field of type theory, not a continuous map H as defined in the card.
  - `logic:homotopy-funext`: NG — the sentence uses "ホモトピー型理論" (homotopy type theory) as a field name, not the homotopy relation $f\sim g$ defined in the card.

## 「上限」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `logic:rm-analysis-defs` → **no candidate fits**
- Pages: 01-simply-typed.html
- Sentence: - 項 $M$ が**強正規化可能**とは、$M=M_{0}\to_{\beta}M_{1}\to_{\beta}\cdots$ という無限の簡約列がないことをいい、その全体を $\mathrm{SN}$ と書く。$M\in\mathrm{SN}$ なら、$M$ からの簡約列の長さの上限 $\nu(M)$ がある（$M$ から一段で得られる項は有限個なので、ケーニヒの補題による）。
  - `logic:rm-analysis-defs`: NG — Here "上限" means the supremum (least upper bound) of the lengths of reduction sequences, which matches the card's definition of supremum of a real sequence only loosely; the card defines 上限 for a sequence $(x_{n})$, not for a set of lengths, so the notion is not the same.
  - `set:order-dedekind-complete`: NG — Here 上限 means the supremum (least upper bound) of the lengths of reduction sequences, which is the same notion as defined in the card (least upper bound of a bounded subset), so it matches.
  - `calc:supremum`: NG — Here "上限" means the supremum (least upper bound) of the set of lengths of reduction sequences, which matches the card's definition of 上限 as the least upper bound of a subset of a totally ordered set.

## 「代入」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `logic:substitution` → **fits: `logic:lambda-substitution`**
- Pages: 01-simply-typed.html, 02-system-t.html, 03-system-f.html, 04-ccc-semantics.html, 05-lambek.html, 06-dependent-types.html, 07-identity-types.html
- Sentence: - ラムダ項、自由変数、代入、代入の補題、$\to_{\beta}$, $\twoheadrightarrow_{\beta}$、正規形は \ref{logic:page-lambda-calculus} のとおり。
  - `logic:substitution`: NG — This "代入" refers to substitution in lambda terms, not the first-order logic substitution on terms and formulas defined in the card.
  - `logic:modal-substitution`: NG — This "代入" refers to substitution in lambda calculus (lambda terms), not the modal-logic substitution map σ: PV → MForm defined in the card.
  - `logic:mu-substitution`: NG — This refers to substitution in lambda calculus, not the capture-avoiding substitution for modal mu-calculus formulas defined in the card.
  - `logic:lambda-substitution`: OK

## 「切断」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `pt:m-finite-cut` → **no candidate fits**
- Pages: 07-identity-types.html
- Sentence: ,y:B(y)$ は**違う型**の元なので、そのままでは等しいかどうかを問えない。$p$ に沿って $f\,x$ を $B(y)$ へ運んでから比べる、というのが $\mathrm{apd}$ である。ホモトピーの言葉では、$B$ は $A$ 上のファイバー空間、$\mathrm{tr}$ は道の持ち上げ、$f$ は切断で、$\mathrm{apd}_{f}(p)$ は「$p$ の上にある $f$ の道」である。
  - `pt:m-finite-cut`: NG — Here "切断" means a section of a fibration (homotopy type theory), not a cut/initial segment of a model of PRA.
  - `cat:monic-epic`: NG — Here "切断" means a section of a fibration (a continuous choice of a point in each fiber), not the section of a split monomorphism as defined in the card.

## 「半順序」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `set:total-order` → **no candidate fits**
- Pages: 05-lambek.html
- Sentence: {Cl}(T)$ で「$A$ から $B$ への射があるか」だけを見ると、$\wedge,\to,\top$ だけの直観主義命題論理（基本型を命題変数とみる）の導出可能性の前順序になる。これを同値な論理式で割ったものは、デカルト閉な前順序、すなわち $\wedge$, $\Rightarrow$, $\top$ をもつ半順序である（例：論理式の圏、\ref{cat:cartesian-closed} の例 4）。構文圏は、この「導けるかどうか」の情報に「どう導くか（証明）」の情報を加えたものである。
  - `set:total-order`: NG — Here 半順序 refers to a partial order (reflexive/antisymmetric/transitive), whereas the card defines a strict partial order (irreflexive, transitive).
  - `set:forcing-poset`: NG — In the sentence, 半順序 refers to a partial order (antisymmetric preorder), whereas the card defines a preorder (reflexive and transitive relation) without requiring antisymmetry.

## 「合成」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 02-system-t.html, 03-system-f.html, 04-ccc-semantics.html, 05-lambek.html, 06-dependent-types.html, 07-identity-types.html, 08-univalence.html
- Sentence: 原始再帰関数の定義（\ref{comp:primitive-recursive}）についての帰納法。ゼロ関数 $\lambda\vec{x}.0$、後者 $\mathrm{S}$、射影 $\lambda\vec{x}.x_{i}$ は明らか。合成 $f(\vec{x})=g(h_{1}(\vec{x}),\dots,h_{m}(\vec{x}))$ は $\lambda\vec{x}.G(H_{1}\vec{x})\cdots(H_{m}\vec{x})$（各 $H_{i}\vec{x}$ はまず数項に簡約し、それから $G$ を簡約する）。原始再帰 $h(\
  - `logic:pdl-syntax`: NG — This “合成” refers to composition of primitive recursive functions, not the PDL program composition operator α;β defined in the card.
  - `logic:while-program`: NG — Here "合成" refers to composition of primitive recursive functions, not the sequential composition of while programs defined in the card.
  - `set:relation-composition`: NG — Here "合成" refers to composition of functions in primitive recursion, not the composition of relations defined in the card.
  - `cat:category`: NG — Here "合成" refers to composition of primitive recursive functions, not composition of morphisms in a category.
  - `cat:non-symmetric-operad`: NG — This "合成" refers to composition of primitive recursive functions, not the operad composition operation defined in the card.

## 「整礎」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `comp:tree-well-founded` → **fits: `set:well-founded-relation`**
- Pages: 02-system-t.html
- Sentence: の辞書式順序（自然数の対なので整礎）による帰納法で示す。$\mathrm{R}\,U\,V\,t$ は中立（引数を三つもつ）なので、(CR3) により、一段の簡約先がすべて $\mathrm{Red}_{A}$ に属することを示せばよい。簡約先は次のどれかである。
  - `comp:tree-well-founded`: NG — Here 整礎 refers to a well-founded ordering on pairs of natural numbers, not to a tree having no infinite branch as defined in the card.
  - `set:well-founded-relation`: OK

## 「標準形」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `pt:letterless-normal-form-def` → **no candidate fits**
- Pages: 02-system-t.html
- Sentence: **2.** 任意の項は、$\lambda x_{1}\cdots x_{m}.\,h\,M_{1}\cdots M_{k}$（$h$ は変数か定数。**頭部標準形**）か、$\lambda\vec{x}.(\lambda y.P)Q\,M_{1}\cdots M_{k}$（β 基を頭にもつ）の形をしている（項の構成についての帰納法）。$M$ を型 $\mathrm{N}$ の閉じた正規形とすると、後者は正規形でなく、$m\ge1$ なら型は矢印型なので、$M=h\,M_{1}\
  - `pt:letterless-normal-form-def`: NG — This "標準形" is head normal form in lambda calculus, not the letterless modal logic normal form defined in the card.
  - `at:box-map`: NG — This "標準形" refers to head normal form in lambda calculus, not the standard form map \(S_{\varepsilon}\) in the definition card.

## 「次元」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `lin:dimension` → **no candidate fits**
- Pages: 08-univalence.html
- Sentence: **高い視点から：同値は空間のホモトピー同値.** 型を空間、道を道とみると、同値 $A\simeq B$ はホモトピー同値、h レベルは「何次元以上のホモトピー群が消えるか」に当たる：命題は空か一点（に可縮）、集合は各連結成分が可縮な空間（離散空間）、亜群は 2 次以上のホモトピー群が消える空間である。一価性公理は、宇宙 $\mathcal{U}$ を「型を点とし、同値を道とする空間」（分類空間）にする公理だと言える。比喩で言えば、集合論の数学は「誰が誰である
  - `lin:dimension`: NG — Here "次元" refers to homotopy group dimension (何次元以上のホモトピー群), not the dimension of a vector space as defined in the card.
  - `cat:trace-dimension`: NG — Here "次元" refers to homotopy dimension (the level at which homotopy groups vanish), not the categorical trace/dimension of an object defined in the card.
  - `ring:krull-dimension`: NG — Here "次元" refers to homotopy-theoretic dimension (levels of homotopy groups), not the Krull dimension of a ring defined in the card.
  - `ag:dimension`: NG — Here「次元」refers to homotopy dimension (the level at which homotopy groups vanish), not the Krull dimension of a topological space defined via chains of irreducible closed subsets.

## 「正規」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `set:normal-function` → **no candidate fits**
- Pages: 01-simply-typed.html, 02-system-t.html, 03-system-f.html, 05-lambek.html
- Sentence: 去）に対応する。本ページでは、簡約で型が保たれること（\ref{logic:subject-reduction}）と、型の付く項はどの順序で簡約しても必ず停止すること（**強正規化定理**、\tref{logic:strong-normalization}）をテイトの方法で示す。系として、含意だけの直観主義論理の証明は正規形に直せることが分かる。
  - `set:normal-function`: NG — Here "正規" refers to normal forms in proof theory/λ-calculus, not the set-theoretic notion of a normal function on ordinals.
  - `lin:adjoint`: NG — This "正規" refers to normal forms in logic/term rewriting, not normal operators on inner product spaces.
  - `fld:normal`: NG — This "正規" refers to normal forms in proof theory, not normal field extensions.
  - `top:separation-axioms`: NG — This "正規" refers to normal forms in proof theory, not the normal/separation axiom for topological spaces.

## 「決定可能」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `comp:L-computable` → **no candidate fits**
- Pages: 07-identity-types.html, 08-univalence.html
- Sentence: **前提を変えると.** 恒等型に**反映規則**（$p:a=b$ から $a\equiv b$ を導く）を加えた**外延的型理論**では、UIP と関数外延性が成り立つが、型の検査（$a:A$ かどうかの判定）が決定不能になることが知られている。本ページの**内包的**な恒等型は、型検査の決定可能性を保つ代わりに、等しさが豊かな構造（高次の亜群）をもつ。
  - `comp:L-computable`: NG — This "決定可能" refers to decidability of type checking in type theory, not the computability of a set's characteristic function as defined in the card.
  - `comp:recognizable-decidable`: NG — Here "決定可能" refers to decidability of type checking in type theory, not the computability-theoretic notion of a language being decidable by a Turing machine as defined in the card.

## 「直和」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `mod:direct-sum` → **no candidate fits**
- Pages: 01-simply-typed.html
- Sentence: - *対応の拡張.* 連言は対の型 $A\times B$、選言は直和型 $A+B$、偽 $\bot$ は空の型に対応し、直観主義命題論理全体が型付きラムダ計算に対応する。量化子は依存型（マルティン＝レーフ型理論）に、古典論理は継続（コール/cc の型が パースの法則）に対応することが知られている。
  - `mod:direct-sum`: NG — Here "直和" refers to the disjoint union (sum type) of types in type theory, not the direct sum of modules as defined in the card.
  - `rep:constructions`: NG — Here "直和" refers to the disjoint union (sum type) of types in type theory, not the direct sum of representations defined in the card.

## 「直積」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `set:cartesian-product` → **fits: `mod:direct-sum`**
- Pages: 06-dependent-types.html
- Sentence: $\prod_{x:A}B(x)$ の元は、各 $x$ に「その $x$ ごとに異なる型」$B(x)$ の元を選ぶ関数である。集合論で言えば直積 $\prod_{x\in A}B(x)$（選択関数全体）に当たるので、「依存積」とも呼ばれる。$\Pi\mathrm{E}$ の結論の型 $B(a)$ が引数 $a$ によって変わる点が、単純型との違いである。
  - `set:cartesian-product`: NG — It refers to an indexed/dependent product (set of choice functions), which is a generalization of the binary Cartesian product defined in the card, not that same notion.
  - `grp:direct-product`: NG — This is the dependent product (set-theoretic product over a family of sets), not the direct product of groups with componentwise operation.
  - `mod:direct-sum`: OK

## 「縮約」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `set:complete-embedding` → **no candidate fits**
- Pages: 02-system-t.html
- Sentence: ts-reducible}（$\mathrm{S},\mathrm{R}$）から還元可能である。$\to\mathrm{I}$ の場合に使う \ref{logic:reducibility-abstraction} は、(CR1)–(CR3) と「$(\lambda x.M)N$ は中立で、その一段の簡約先は β 基の縮約か部分項の簡約に限る」ことだけを使うので、T でもそのまま成り立つ。変数を代入して、型の付く項は還元可能、CR1 から強正規化可能。
  - `set:complete-embedding`: NG — This "縮約" refers to a β-reduction step in lambda calculus, not the forcing-theoretic contraction of a condition q to a condition p in a partial order.
  - `ring:extension-contraction`: NG — This "縮約" refers to β-reduction (contraction) in lambda calculus, not the contraction of an ideal under a ring homomorphism as defined in the card.

## 「自由変数」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `logic:free-variables` → **fits: `logic:lambda-term`**
- Pages: 01-simply-typed.html, 03-system-f.html, 04-ccc-semantics.html, 05-lambek.html
- Sentence: - ラムダ項、自由変数、代入、代入の補題、$\to_{\beta}$, $\twoheadrightarrow_{\beta}$、正規形は \ref{logic:page-lambda-calculus} のとおり。
  - `logic:free-variables`: NG — This refers to free variables of lambda terms, not the free-variable set of first-order logic formulas defined in the card.
  - `logic:mu-preformula`: NG — This refers to free variables of lambda terms, not the free-variable set FV defined for pre-formulas in the modal mu-calculus card.
  - `logic:lambda-term`: OK

## 「論理式」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `pt:omega-language` → **fits: `logic:prop-formula`**
- Pages: 01-simply-typed.html, 02-system-t.html, 04-ccc-semantics.html, 05-lambek.html
- Sentence: 命題変数と $\to$ だけからなる論理式について、判断 $\Delta\vdash A$（$\Delta$ は論理式の有限集合）を次の規則で導かれるものとする：$A\in\Delta$ なら $\Delta\vdash A$；$\Delta,A\vdash B$ なら $\Delta\vdash A\to B$（$\to$ 導入）；$\Delta\vdash
  - `pt:omega-language`: NG — This card defines formulas built from literals using ∧, ∨, ∀, ∃ (with → as an abbreviation), whereas the sentence's formulas are built from propositional variables and →, a different notion.
  - `logic:prop-formula`: OK

## 「辞書式順序」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `set:well-order-sum-product-def` → **no candidate fits**
- Pages: 02-system-t.html
- Sentence: の辞書式順序（自然数の対なので整礎）による帰納法で示す。$\mathrm{R}\,U\,V\,t$ は中立（引数を三つもつ）なので、(CR3) により、一段の簡約先がすべて $\mathrm{Red}_{A}$ に属することを示せばよい。簡約先は次のどれかである。
  - `set:well-order-sum-product-def`: NG — “辞書式順序” here is a lexicographic order on pairs of natural numbers, not the card’s lexicographic product of two well-ordered sets.
  - `top:double-arrow`: NG — This use of 辞書式順序 refers to the well-founded lexicographic order on pairs of natural numbers, not the specific lexicographic order on $[0,1]\times\{0,1\}$ defining the double arrow space.

## 「連続」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `comp:monotone-continuous` → **fits: `top:continuous`**
- Pages: 07-identity-types.html
- Sentence: ractible} は、位相空間で「一端を固定した道の空間は可縮」（道を始点に向かって縮める）という事実に当たり、道帰納法の正当性の幾何的な理由になっている。比喩で言えば、恒等型は「等しいかどうか」ではなく「どのように等しいか（どの道で移れるか）」を記録する型であり、群の法則は「道を一周して戻ることと、動かないことは、連続的に変形すれば同じ」ということである。
  - `comp:monotone-continuous`: NG — Here "連続" refers to continuous deformation of paths in a topological space, not the continuity of a function on power sets of strings defined in the card.
  - `cx:limit-continuity`: NG — This "連続" refers to continuous deformation of paths in a topological space, not the ε-δ continuity of a complex function defined in the card.
  - `top:continuous`: OK

## 「上限」 in 01-foundations/06-category-theory/01-basics
- Default: `calc:supremum` → **no candidate fits**
- Pages: 06-limits.html, 10-adjoint-functor-theorem.html
- Sentence: 4. **半順序.** 積は下限（最大下界）、余積は上限。極限は「錐の頂点のうち最大のもの」で、存在するとは限らない。
  - `calc:supremum`: NG — Here "上限" means the least upper bound in a partial order (supremum of a poset), whereas the card defines it for a subset of a totally ordered set $K$; the notion is generalized, not the same or a special case.
  - `set:order-dedekind-complete`: NG — In the sentence 上限 means the least upper bound of a subset in a partial order, which is the same notion as in the card's definition of Dedekind completeness.
  - `logic:rm-analysis-defs`: NG — Here 上限 means the least upper bound (supremum) in a partial order, whereas the card defines it for a real sequence as a specific bound with an approximation condition.

## 「反射的」 in 01-foundations/06-category-theory/01-basics
- Default: `cat:reflective-subcategory` → **fits: `logic:relation-properties`**
- Pages: 01-categories.html, 08-equivalence.html, 11-adjoints-topology.html
- Sentence: 6. **前順序.** 集合 $P$ 上の反射的かつ推移的な関係 $\le$（前順序）に対し、$\operatorname{Ob}=P$, $\operatorname{Mor}=\{(p,q):p\le q\}$, $\operatorname{dom}(p,q)=p$, $\operatorname{cod}(p,q)=q$, $(q,r)\circ(p,q)=
  - `cat:reflective-subcategory`: NG — Here "反射的" refers to a reflexive relation (containing the diagonal), not a reflective subcategory with a left adjoint inclusion functor.
  - `logic:relation-properties`: OK

## 「生成元」 in 01-foundations/06-category-theory/01-basics
- Default: `grp:generated-subgroup` → **no candidate fits**
- Pages: 02-functors.html, 04-comma-free-quotient.html, 05-yoneda.html, 07-adjunctions.html, 08-equivalence.html, 10-adjoint-functor-theorem.html
- Sentence: 関手 $S$ と $T$ を $\mathbf{C}$ の二つの「絵」とみると、自然変換は一方の絵を他方の絵へ、すべての射と両立するように移す方法である。数学で「自然な同型」と言うとき、それは「基底や生成元のような恣意的な選択に依らずに定まり、したがってすべての射と両立する同型」という意味であり、自然変換の自然性の条件がそれを正確に表している。
  - `grp:generated-subgroup`: NG — Here "生成元" refers to generators of an algebraic structure in general (e.g., a module or algebra), not specifically the generating set of a group as defined in the card.
  - `grp:presentation`: NG — Here "生成元" refers to generators of an algebraic structure in general (basis/generators chosen arbitrarily), not specifically the generators $X$ of a group presentation as defined in the card.

## 「直和」 in 01-foundations/06-category-theory/01-basics
- Default: `mod:direct-sum` → **no candidate fits**
- Pages: 06-limits.html, 07-adjunctions.html, 11-adjoints-topology.html
- Sentence: 1. **$\mathbf{Set}$.** 積は直積集合と射影、余積は直和（交わらない和）$\coprod_{i}a_{i}=\bigcup_{i}\{i\}\times a_{i}$。$f,g\colon a\to b$ の等化子は部分集合 $\{x\in a:f(x)=g(x)\}$ とその包含、余等化子は $b$ を「$f(x)$ と $g(x)$ を同一視する最小の同値関係」で割った
  - `mod:direct-sum`: NG — This is the coproduct (disjoint union) in the category of sets, not the direct sum of modules defined in the card.
  - `rep:constructions`: NG — In the sentence, 直和 refers to the disjoint union (coproduct) in the category of sets, not the direct sum of representations defined in the card.

## 「直積」 in 01-foundations/06-category-theory/01-basics
- Default: `grp:direct-product` → **fits: `set:cartesian-product`**
- Pages: 01-categories.html, 03-constructions.html, 05-yoneda.html, 06-limits.html, 07-adjunctions.html, 09-adjoints-limits.html, 11-adjoints-topology.html, 12-special-aft.html
- Sentence: 条件 1〜5 は、集合論の基本的な操作（対、直積、冪集合、和集合、無限集合、置換による像）で $\mathcal{U}$ の外に出ないことを言っている。したがって、実数・群・位相空間など通常の構成はすべて $\mathcal{U}$ の中で行え、$\mathcal{U}$ を「ふつうの数学の世界」とみなせる。$\mathcal{U}$ 自身は小さくない（下の \re
  - `grp:direct-product`: NG — Here "直積" refers to the Cartesian product of sets, not the direct product of groups with componentwise operation as defined in the card.
  - `set:cartesian-product`: OK

## 「テンソル積」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `ha:tensor-product` → **no candidate fits**
- Pages: 11-symmetric-monoidal-closed.html
- Sentence: 対称モノイダル閉圏（閉圏。\ref{cat:closed-category}）は、「テンソル積 $\otimes$」と「準同型の空間 $[b,c]$」が随伴 $\mathbf{V}(a\otimes b,c)\cong\mathbf{V}(a,[b,c])$ で結ばれた圏で、集合と写像・加群とテンソル積・ベクトル空間の線形代数に共通する構造を抜き出したものである。このページでは、内部 hom の計算規則（カリー
  - `ha:tensor-product`: NG — This is the tensor product in a symmetric monoidal closed category, a general categorical notion, not the specific tensor product of modules over a ring defined by the card.
  - `rep:constructions`: NG — This use refers to the general tensor product in a symmetric monoidal closed category, not specifically the representation tensor product defined by the card.

## 「トレース」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `lin:eigen-def` → **fits: `cat:trace-dimension`**
- Pages: 05-closed-categories.html
- Sentence: **続き.** 内部 hom の計算規則（カリー化・余極限の保存）、双対対象・コンパクト閉圏・トレースは \ref{cat:page-symmetric-monoidal-closed} で扱う。
  - `lin:eigen-def`: NG — This "トレース" refers to the trace in a compact closed / monoidal category (a categorical trace), not the matrix trace defined in the card.
  - `pt:trace`: NG — This "トレース" refers to the trace in compact closed categories, not the trace of a closed modal formula defined by structural recursion on $B$.
  - `cat:trace-dimension`: OK

## 「ホモトピー」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `at:homotopy` → **no candidate fits**
- Pages: 08-braids.html
- Sentence: 紐として記憶される（$\gamma_{b,a}\gamma_{a,b}\neq1$）。3 次元以上では越え方の区別も連続変形で消え、置換だけが残る（$\gamma_{b,a}\gamma_{a,b}=1$）。これは、平面の $n$ 点の配置空間の基本群が組紐群、3 次元以上ではそれが対称群になることの圏論的な影であり、ホモトピー論では $E_{1}$, $E_{2}$, $E_{\infty}$ 代数（の 1 次元の切り落とし）という形で一般化されるとされる（ここでは扱わない）。
  - `at:homotopy`: NG — Here "ホモトピー論" refers to homotopy theory as a field, not a homotopy between two continuous maps as defined in the card.
  - `logic:homotopy-funext`: NG — Here "ホモトピー" refers to homotopy theory/continuous deformation in topology, not the specific type-theoretic homotopy $f\sim g$ defined in the card.

## 「共通部分」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `cat:subobject` → **fits: `set:intersection-difference`**
- Pages: 05-closed-categories.html
- Sentence: **1.** 条件「すべての $C$ で $A\cap C$ が閉」は、有限個の和と任意個の共通部分で保たれる（$\varnothing$ と全体も満たす）。$A$ が $Y$ で閉なら、$C$ はコンパクトなので閉で、$A\cap C$ は閉。$KY$ の位相は細かいので、ハウスドルフ性は受け継がれ、$\varepsilon_{Y}$ は連続。
  - `cat:subobject`: NG — Here "共通部分" means the set-theoretic intersection of subsets, not the pullback of a family of subobjects in a category.
  - `set:intersection-difference`: OK

## 「単位元」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `grp:group` → **no candidate fits**
- Pages: 01-monoidal.html, 02-monoids-actions.html
- Sentence: 対象が一つの厳密モノイダル圏は、集合（射の全体）と二つの二項演算 $\circ$, $\square$ で、交換法則 $(f'\square g')\circ(f\square g)=(f'\circ f)\square(g'\circ g)$ を満たし共通の単位元 $1_{e}$ をもつものと同じであることを確かめ、このとき $\circ=\square$ で、可換であることを示せ（エックマン–ヒルトンの議論）。
  - `grp:group`: NG — This "単位元" is the common identity element of two binary operations in a strict monoidal category, not the identity element of a group as defined in the card.
  - `ring:ring`: NG — Here "単位元" refers to the common identity element of two binary operations in a monoidal category, not the multiplicative identity $1$ of a ring as defined in the card.

## 「反射的」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `cat:reflective-subcategory` → **no candidate fits**
- Pages: 04-cartesian-closed.html
- Sentence: - *反射的対象.* $D\cong D^{D}$ となる対象 $D$（型なしラムダ計算のモデル。\ref{logic:page-lambda-calculus}）があるデカルト閉圏では、ローヴェアの定理から $D$ のすべての自己射が不動点をもつ。これは型なしラムダ計算の\term[不動点結合子]{logic:fixed-poi
  - `cat:reflective-subcategory`: NG — This "反射的" refers to reflexive objects (D ≅ D^D) in a cartesian closed category, not to reflective subcategories as defined in the card.
  - `logic:relation-properties`: NG — This "反射的対象" (reflexive object) is a category-theory notion defined by $D\cong D^{D}$, not the reflexivity of a relation $R$ on $W$.

## 「忠実」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `cat:full-faithful` → **fits: `mod:annihilator`**
- Pages: 01-monoidal.html, 09-doctrinal-adjunction.html
- Sentence: **Step 0（忠実性）.** $1_{e}\square f=1_{e}\square g$ なら $f=g$：$\lambda$ の自然性から $f=\lambda_{y}\circ(1_{e}\square f)\circ\lambda_{x}^{-1}$。同様に $f\square1_{e}=g\square1_{e}$ なら $
  - `cat:full-faithful`: NG — Here "忠実性" refers to the faithfulness property of the functor λ (injectivity on hom-sets), which matches the card's definition of 忠実, so it is the same notion.
  - `grp:faithful-transitive`: NG — Here "忠実" (faithful) describes a functor preserving the identity condition, not a group action being faithful as defined in the card.
  - `mod:annihilator`: OK

## 「構造射」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `ring:algebra` → **no candidate fits**
- Pages: 07-symmetric-coherence.html, 08-braids.html, 09-doctrinal-adjunction.html
- Sentence: ダル圏は、対象が自然数 $n$、射 $n\to n$ が $\mathfrak{S}_{n}$ の元、$n\neq m$ なら射なし、という置換の圏であることが、ここでの議論（$\mathfrak{S}_{n}$ の関係と $\gamma$ の関係の一致）から従う（普遍性の確認は略す）。比喩で言えば、対称モノイダル圏の構造射は「紐を自由に通り抜けられるあやとり」で、どう絡めても結局は両端の対応（置換）しか記憶されない。紐が互いに通り抜けられない（3 次元の）世界にすると、絡み方そのもの（組紐）が記憶され、それが次ページの組紐モノイダル圏である。
  - `ring:algebra`: NG — Here "構造射" refers to the structure morphisms of a symmetric monoidal category (braiding/associativity/unit constraints), not the structure homomorphism $\iota_{B}:A\to B$ of an algebra over a ring.
  - `cat:t-algebra`: NG — Here 構造射 refers to the structure morphisms (symmetry/braiding) of a symmetric monoidal category, not the structure map $h\colon Tx\to x$ of a T-algebra.

## 「次元」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `lin:dimension` → **no candidate fits**
- Pages: 03-simplicial.html, 06-monoidal-functors.html, 07-symmetric-coherence.html, 08-braids.html
- Sentence: - 本ページでは順序数 $n$ を集合 $\{0,1,\dots,n-1\}$ とみる（Mac Lane の記法。位相幾何では $[n]=\{0,\dots,n\}$ と書くことが多く、次元が一つずれる）。
  - `lin:dimension`: NG — Here "次元" refers to the shift in indexing convention between ordinal notation and topological notation, not the dimension of a vector space as defined in the card.
  - `cat:trace-dimension`: NG — Here "次元" refers to the topological/order dimension of a simplex (shifted by one), not the categorical dimension $\dim a=\operatorname{tr}(1_{a})$ defined in the card.
  - `ring:krull-dimension`: NG — Here "次元" refers to the dimension shift between ordinal notation conventions, not the Krull dimension of a ring defined in the card.
  - `ag:dimension`: NG — Here "次元" refers to the shift in indexing between the ordinal $n$ and the set $\{0,\dots,n\}$, not the dimension of a topological space as defined in the card.

## 「生成元」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `grp:generated-subgroup` → **fits: `grp:presentation`**
- Pages: 07-symmetric-coherence.html, 08-braids.html
- Sentence: da,\varrho,\gamma$ から組み立てた二つの射は、文字の並べ替えとして同じなら等しい。証明は、厳密化（\ref{cat:strictification}）で結合と単位を等式にし（\ref{cat:braiding-strictification}）、隣り合う文字の入れ替えだけに帰着させ、最後に対称群の**生成元と関係**（\ref{cat:coxeter-presentation}）を使う。副産物として、組紐の単位の公理が六角形の等式から従うこと（\ref{cat:braided-unit-redundant}）も得る。
  - `grp:generated-subgroup`: NG — Here "生成元" refers to generators of a symmetric group given with relations (a presentation), not specifically the subgroup generated by a subset as defined in the card.
  - `grp:presentation`: OK

## 「直積」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `grp:direct-product` → **no candidate fits**
- Pages: 01-monoidal.html
- Sentence: 集合の直積 $\times$、アーベル群のテンソル積 $\otimes$ は、結合律と単位律を「等式」としてではなく「標準的な同型」として満たす。たとえば $A\otimes(B\otimes C)\cong(A\otimes B)\otimes C$ である。このような「同型を除いて結合的な積」をもつ圏が**モノイダル圏**（
  - `grp:direct-product`: NG — Here 直積 refers to the Cartesian product of sets, not the group direct product with componentwise operation defined in the card.
  - `set:cartesian-product`: NG — Here "直積" refers to the Cartesian product of sets, which matches the card's definition of the direct product of sets.
  - `mod:direct-sum`: NG — It refers to the Cartesian product of sets, not the direct product of a family of left R-modules defined in the card.

## 「論理式」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `set:first-order-language` → **fits: `logic:prop-formula`**
- Pages: 04-cartesian-closed.html
- Sentence: 4. **論理式の圏.** 直観主義命題論理の論理式を「$p$ から $q$ が導ける」で前順序にしたもの（を同値な論理式で割ったもの）は、$\wedge$ を積、$\to$ を冪とするハイティング代数である。デカルト閉圏の射の合成と型付きラムダ計算の項の代入が対応することは、カリー＝ハワード対応の圏論的な形である（\ref{logi
  - `set:first-order-language`: NG — This “論理式” refers to formulas of intuitionistic propositional logic, not the set-theoretic formulas defined in the card.
  - `logic:prop-formula`: OK

## 「逆像」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `set:function` → **no candidate fits**
- Pages: 03-simplicial.html
- Sentence: **Step 4（厳密モノイダル）.** $f+g$ の各点の逆像の大きさの列は、$f$ と $g$ の列を並べたものなので $F(f+g)=Ff\square Fg$。$F\mu=\mu'^{(2)}=\mu'$、$F\eta=\mu'^{(0)}=\eta'$。
  - `set:function`: NG — Here "逆像" (inverse image) refers to the preimage of a point under a map, which matches the card's definition of inverse image $f^{-1}[D]$ (with $D$ a singleton), so it is the same notion.
  - `cat:inverse-image`: NG — Here "逆像" means the preimage of a point under a map (fiber), not the inverse image sheaf/presheaf defined in the card.

## 「連続」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `cat:preserve-limits` → **no candidate fits**
- Pages: 03-simplicial.html, 05-closed-categories.html, 07-symmetric-coherence.html, 08-braids.html
- Sentence: $f$ は単調なので、各 $f^{-1}(i)$ は連続した区間で、$i$ の順に左から並ぶ：$f^{-1}(i)=\{m_{0}+\cdots+m_{i-1},\dots,m_{0}+\cdots+m_{i}-1\}$。右辺の和は、$i$ 番目の区間（長さ $m_{i}$、空でもよい）を $n$ の $i$ 番目の点に送る写像なので、$f$ に等しい。
  - `cat:preserve-limits`: NG — Here "連続" means "contiguous/consecutive" (about intervals), not the category-theoretic notion of a continuous functor preserving limits.
  - `comp:monotone-continuous`: NG — Here "連続した区間" means a contiguous interval, not the continuity of a function as defined in the card.
  - `cx:limit-continuity`: NG — Here "連続した区間" means a contiguous interval, not the continuity of a function as defined in the card.
  - `top:continuous`: NG — Here "連続した区間" means "contiguous interval," not the topological notion of a continuous map.

## 「互いに素」 in 01-foundations/06-category-theory/03-monads
- Default: `ring:ideal-sum-product` → **no candidate fits**
- Pages: 04-algebras-compact.html
- Sentence: {top:compact-basic}）。一点集合は閉：$w=e(y)$ について $c(\{w\})=e(\overline{\{y\}})=e(\{y\})=\{w\}$（$Y$ はハウスドルフなので一点は閉）。$w_{1}\neq w_{2}$ について、$e^{-1}(w_{i})$ は閉集合の逆像なので閉で、互いに素。$Y$ は正規（\ref{top:compact-hausdorff-normal}）なので、互いに素な開集合 $U_{i}\supseteq e^{-1}(w_{i})$ がある。$C_{i}\defeq Y\setminus U_{i}$ は閉で $C_{1}\cup C_{2}=Y$、$e(C_{i})$ は閉
  - `ring:ideal-sum-product`: NG — Here "互いに素" means disjoint closed sets in a topological space, not coprime ideals summing to the whole ring.
  - `pt:prime`: NG — Here "互いに素" means disjoint (the closed sets \(e^{-1}(w_{i})\) are disjoint), not the number-theoretic coprime relation defined in the card.
  - `grp:cycle`: NG — In the sentence, "互いに素" means disjoint (of closed sets), not disjoint supports of permutations as defined in the card.

## 「共通部分」 in 01-foundations/06-category-theory/03-monads
- Default: `cat:subobject` → **fits: `set:intersection-difference`**
- Pages: 04-algebras-compact.html
- Sentence: 等式で割る）.** $\mathrm{Tm}(X)$ 上の合同関係（演算と両立する同値関係）で、$E$ の等式 $u\approx v$ の変数に項を代入したものの組 $(u(t_{1},\dots),v(t_{1},\dots))$ をすべて含む最小のものを $\equiv_{E}$ とする（そのような合同関係全体の共通部分）。$FX\defeq\mathrm{Tm}(X)/{\equiv_{E}}$ は $\Omega$ 代数で、$E$ を満たす：$u_{FX}([t_{1}],\dots)=[u(t_{1},\dots)]=[v(t_{1},\dots)]=v_{FX}([t_{1}],\dots)$。
  - `cat:subobject`: NG — Here "共通部分" means the intersection of a family of congruence relations (a set-theoretic meet), not the pullback of a family of subobjects in a category as defined in the card.
  - `set:intersection-difference`: OK

## 「単位元」 in 01-foundations/06-category-theory/03-monads
- Default: `grp:group` → **fits: `ring:ring`**
- Pages: 01-monads-algebras.html, 05-comonads-homology.html
- Sentence: モノイド $(M,\cdot,e)$ の定義で、集合 $M$ を自己関手 $T$ に、直積 $M\times M$ を合成 $T\circ T$ に、乗法 $M\times M\to M$ を $\mu\colon T^{2}\Rightarrow T$ に、単位元 $1\to M$ を $\eta\colon1\Rightarrow T$ に置き換えたものである。プログラムの言葉では、$Tx$ は「$x$ 型の値を、何らかの付加情報（非決定性、例外、状態など）つきで返す計算」、$\eta$ は「付加情報なしで値を返す」、$\mu$ は「計算を返す計算を一つの計算に平らにする」操
  - `grp:group`: NG — Here "単位元" refers to the unit of a monad (the natural transformation $\eta$), not the identity element of a group as defined in the card.
  - `ring:ring`: OK

## 「完備」 in 01-foundations/06-category-theory/03-monads
- Default: `cat:limit` → **no candidate fits**
- Pages: 01-monads-algebras.html
- Sentence: X}^{T}$ と忘却関手が、$T$ を与える随伴をなす（\ref{cat:eilenberg-moore-adjunction}）。さらに、$T$ を与えるどの随伴からも $\mathbf{X}^{T}$ への**比較関手**がただ一つある（\ref{cat:comparison-functor}）。群・環上の加群・完備束などは、それぞれ適当なモナドの代数として捉え直せる。
  - `cat:limit`: NG — Here "完備束" (complete lattice) means a lattice with all joins/meets, not a category being complete (having all limits); it is a different notion.
  - `set:complete-boolean-algebra`: NG — Here "完備" modifies "束" (lattice) meaning a complete lattice, not a complete Boolean algebra as defined in the card.
  - `ring:completion`: NG — Here "完備" means complete lattice (order-theoretic completeness), not the adic completeness of a module defined in the card.
  - `top:complete-metric`: NG — Here "完備" modifies "束" (lattice), meaning a complete lattice, not a complete metric space as defined in the card.
  - `top:cauchy-filter`: NG — Here "完備束" means a complete lattice (order-theoretic completeness), not completeness of a uniform space as defined in the card.
  - `ag:proper`: NG — Here "完備" means complete lattice (order-theoretic completeness), not a proper scheme over a field.

## 「推移律」 in 01-foundations/06-category-theory/03-monads
- Default: `set:total-order` → **fits: `set:forcing-poset`**
- Pages: 01-monads-algebras.html
- Sentence: **Step 2（半順序）.** 反射律：$h\{x,x\}=h\{x\}=x$。反対称律：$h\{x,y\}=y$ かつ $h\{y,x\}=x$ なら $x=y$（集合 $\{x,y\}=\{y,x\}$）。推移律：$h\{x,y\}=y$, $h\{y,z\}=z$ のとき、Step 1 で
  - `set:total-order`: NG — the card defines a strict partial order with the transitivity law \(xRy\land yRz\to xRz\), whereas the sentence uses 推移律 for a non-strict order relation (reflexive/antisymmetric setting), so the notion differs.
  - `set:forcing-poset`: OK

## 「極限」 in 01-foundations/06-category-theory/03-monads
- Default: `cat:limit` → **no candidate fits**
- Pages: 04-algebras-compact.html
- Sentence: at:algebras-monadic}）。もう一つは、それとは一見無関係な**コンパクトハウスドルフ空間**の圏の忘却関手 $\mathbf{CHaus}\to\mathbf{Set}$ もモナド的であること（\ref{cat:chaus-monadic}）である。後者は、コンパクトハウスドルフ空間を「超フィルターの極限をとる演算をもつ代数系」とみなせることを意味する。
  - `cat:limit`: NG — Here "極限" refers to the limit of an ultrafilter (a topological/convergence notion), not the categorical limit of a diagram as defined in the card.
  - `logic:rm-sequence-limit`: NG — This "極限" refers to limits of ultrafilters in compact Hausdorff spaces, not the limit of a real sequence as defined in the card.

## 「直積」 in 01-foundations/06-category-theory/03-monads
- Default: `grp:direct-product` → **fits: `set:cartesian-product`**
- Pages: 01-monads-algebras.html, 04-algebras-compact.html
- Sentence: モノイド $(M,\cdot,e)$ の定義で、集合 $M$ を自己関手 $T$ に、直積 $M\times M$ を合成 $T\circ T$ に、乗法 $M\times M\to M$ を $\mu\colon T^{2}\Rightarrow T$ に、単位元 $1\to M$ を $\eta\colon1\Rightarrow T$ に置き換えたものである。プログラムの言葉では、$Tx$ は「$x$
  - `grp:direct-product`: NG — This is the Cartesian product of a set with itself as a monoid, not the direct product of groups with componentwise group operation as defined in the card.
  - `set:cartesian-product`: OK

## 「連続」 in 01-foundations/06-category-theory/03-monads
- Default: `cat:preserve-limits` → **no candidate fits**
- Pages: 03-beck.html, 04-algebras-compact.html
- Sentence: し、対 $f=g=1_{D}$ を考える。$Gf=Gg=1$ の余等化子 $1_{GD}$ は（$s=t=1$ で）分裂余等化子である。ところが $Gc=GD$, $Ge=1_{GD}$ となる $(c,e)$ は、$(D,1_{D})$ と $(I,\ \text{恒等写像}\ D\to I)$（離散空間からの写像は連続）の二つがあり、創出の「ちょうど一つ」が破れる。
  - `cat:preserve-limits`: NG — Here "連続" means a continuous map between topological spaces (the map from a discrete space), not a functor preserving all small limits.
  - `comp:monotone-continuous`: NG — Here "連続" refers to continuity of a map between topological spaces (a map from a discrete space), not the fixed-point-theoretic continuity of a function on power sets.
  - `cx:limit-continuity`: NG — Here "連続" refers to continuity of a map from a discrete space in topology, not the complex-function continuity defined in the card.
  - `top:continuous`: NG — Here "連続" refers to continuity of a map from a discrete space, which is a special case of the card's notion of continuous map between topological spaces, so it matches.

## 「閉包」 in 01-foundations/06-category-theory/03-monads
- Default: `top:interior-closure` → **no candidate fits**
- Pages: 01-monads-algebras.html, 04-algebras-compact.html
- Sentence: 4. **前順序の閉包作用素.** 前順序 $P$（を圏とみたもの）のモナドは、単調写像 $T$ で $x\le Tx$, $TTx\le Tx$ を満たすものと同じである（前順序では図式は自動的に可換）。$x\le Tx$ から $Tx\le TTx$ なので、$P$ が半順序なら $TTx=Tx$：モナドは**閉包作用素**にほかならな
  - `top:interior-closure`: NG — This "closure operator" is a monad/idempotent monotone map in order theory, not the topological closure of a subset defined in the card.
  - `logic:ltl-size`: NG — This "閉包作用素" is a closure operator in order theory (monad on a preorder), not the LTL formula closure set CL(A) defined in the card.
  - `logic:ctl-closure`: NG — This “閉包” refers to a closure operator/monad on a preorder, not the CTL closure set CL(A) defined in the card.
  - `set:pred-closure`: NG — one short English sentence why

## 「射影」 in 01-foundations/06-category-theory/04-kan-extensions
- Default: `cat:product` → **fits: `cat:category-of-elements`**
- Pages: 03-kan.html
- Sentence: - コンマ圏 $(c\downarrow K)$：対象は $(f,m)$（$f\colon c\to Km$）、射 $(f,m)\to(f',m')$ は $h\colon m\to m'$ で $Kh\circ f=f'$ となるもの。射影 $Q\colon(c\downarrow K)\to\mathbf{M}$, $(f,m)\mapsto m$（\ref{cat:comma-category}）。双対に $(K\downarrow c)$ と射影 $P$。
  - `cat:product`: NG — Here "射影" refers to a projection functor from a comma category, not the projection morphisms of a categorical product as defined in the card.
  - `cat:category-of-elements`: OK

## 「幾何学的実現」 in 01-foundations/06-category-theory/04-kan-extensions
- Default: `cat:tensor-as-coend` → **fits: `cat:classifying-space`**
- Pages: 02-ends.html
- Sentence: apsto\Delta^{n}$ について、$\int^{n}X_{n}\times\Delta^{n}$（$X_{n}\times\Delta^{n}$ は $X_{n}$ 個の $\Delta^{n}$ の直和）は、$n$ 単体ごとに標準単体を一つずつとり、面と退化の作用素に従って貼り合わせた空間で、$X$ の**幾何学的実現**と呼ばれる（Mac Lane の記述による）。
  - `cat:tensor-as-coend`: NG — 「幾何学的実現」はコエンドとして定義されるが、カードが定義する「関手のテンソル積」という用語そのものではなく、その具体例・構成物を指す別概念である。
  - `cat:classifying-space`: OK

## 「有界」 in 01-foundations/06-category-theory/04-kan-extensions
- Default: `calc:supremum` → **no candidate fits**
- Pages: 01-filtered-colimits.html
- Sentence: 付き圏の注意（有限の図式は錐の底になる）に使った。無限の積とは交換しない：$\mathbf{J}=\mathbb{N}$, $F(p,n)=\{0,\dots,n\}$（$p\in\mathbb{N}$ は離散）では、左辺は $\mathrm{Colim}_{n}\{0,\dots,n\}^{\mathbb{N}}$（有界な列）、右辺は $\mathbb{N}^{\mathbb{N}}$ で一致しない。
  - `calc:supremum`: NG — Here "有界" describes bounded sequences in the product space, not a subset being bounded above/below in an ordered field as defined in the card.
  - `logic:rm-analysis-defs`: NG — Here "有界な列" means bounded sequences in the order-theoretic/topological sense of a bounded set of natural numbers, not the real-sequence boundedness defined in the card.

## 「有限生成」 in 01-foundations/06-category-theory/04-kan-extensions
- Default: `mod:generated-submodule` → **fits: `grp:generated-subgroup`**
- Pages: 04-pointwise-kan.html
- Sentence: orking Mathematician* 第 X 章 §4–§7。随伴がカン拡張であることの逆向き（\ref{cat:adjoint-as-kan.2}）で Mac Lane が「二つの表示の一致」として済ませた三角等式の確認は、転置の一意性で補った。$\mathbf{Ab}$ の稠密性の例で Mac Lane が「有限生成なので準同型」とした部分も補った。
  - `mod:generated-submodule`: NG — Here "有限生成" refers to finitely generated abelian groups, not the module-theoretic notion defined in the card (though it is a special case, the sentence's context is about abelian groups/density, and the term is used in a different categorical setting).
  - `grp:generated-subgroup`: OK

## 「準同型」 in 01-foundations/06-category-theory/04-kan-extensions
- Default: `cat:monoid-object` → **fits: `grp:homomorphism`**
- Pages: 01-filtered-colimits.html, 02-ends.html, 04-pointwise-kan.html
- Sentence: る。$k,k'$ を共通の $l$ に移したのち、\ref{cat:filtered-colimit-set.2} を $a,a'$ の像と $b,b'$ の像に使い、さらに共通の $w\colon l\to m$ にまとめると、$m$ 段で $a$ と $a'$ の像、$b$ と $b'$ の像がそれぞれ一致する。群準同型は積を保つので $ab$ と $a'b'$ の像も $m$ 段で一致し、$\pi_{k}(ab)=\pi_{k'}(a'b')$。
  - `cat:monoid-object`: NG — Here "準同型" refers to a group homomorphism (群準同型), not a monoid homomorphism in a monoidal category.
  - `cat:t-algebra`: NG — Here "準同型" refers to a group homomorphism (群準同型), not a homomorphism of T-algebras as defined in the card.
  - `grp:homomorphism`: OK

## 「生成元」 in 01-foundations/06-category-theory/04-kan-extensions
- Default: `grp:generated-subgroup` → **no candidate fits**
- Pages: 01-filtered-colimits.html
- Sentence: **Step 2（余極限）.** $\mathbf{Set}$ の余極限は $\bigsqcup Fj$ を「$(j,x)\sim(k,(Fu)x)$（$u\colon j\to k$）」で生成される同値関係で割ったものである（余積と余等化子による構成の双対）。$\approx$ はこの生成元を含み（$u$ と $1_{k}$ をとる）、逆に $(Fu)x=(Fv)y$ なら $(j,x)\sim(l,(Fu)x)=(l,(Fv)y)\sim(k,y)$ なので、$\approx$ は生成された関係に含まれる。$\approx$ は同値関係なので、両者は一致する。
  - `grp:generated-subgroup`: NG — Here "生成元" refers to generators of an equivalence relation, not a generating set of a group as defined in the card.
  - `grp:presentation`: NG — Here "生成元" refers to generators of an equivalence relation, not group generators as in the definition card.

## 「直和」 in 01-foundations/06-category-theory/04-kan-extensions
- Default: `mod:direct-sum` → **no candidate fits**
- Pages: 02-ends.html
- Sentence: \mathbf{Set}$（\ref{cat:simplicial-object}）と標準単体の関手 $n\mapsto\Delta^{n}$ について、$\int^{n}X_{n}\times\Delta^{n}$（$X_{n}\times\Delta^{n}$ は $X_{n}$ 個の $\Delta^{n}$ の直和）は、$n$ 単体ごとに標準単体を一つずつとり、面と退化の作用素に従って貼り合わせた空間で、$X$ の**幾何学的実現**と呼ばれる（Mac Lane の記述による）。
  - `mod:direct-sum`: NG — Here "直和" means the coproduct (disjoint union) of spaces/simplicial sets, not the direct sum of modules defined in the card.
  - `rep:constructions`: NG — Here "直和" means the coproduct (disjoint union) of spaces in topology, not the direct sum of representations defined in the card.

## 「単位元」 in 01-foundations/06-category-theory/05-higher-categories
- Default: `grp:group` → **fits: `ring:ring`**
- Pages: 01-internal-categories.html, 05-crossed-modules.html
- Sentence: $\eta$ は唯一の対象を単位元 $1\in C_{0}$ に、唯一の射を $1\in C_{1}$（$=i(1)$）に送る関手、$\nu$ は対象と射の逆元をとる写像で、同様に準同型性から関手（合成の保存は $m(g^{-1},f^{-1})=m(g,f)^{-1}$、これも $m$ の準同型性）。群の公理は $C_{0}$, $C_{1}$ でそ
  - `grp:group`: NG — Here "単位元" refers to the identity element of a category (an object/identity morphism), not the identity element of a group as defined in the card.
  - `ring:ring`: OK

## 「幾何学的実現」 in 01-foundations/06-category-theory/05-higher-categories
- Default: `cat:tensor-as-coend` → **fits: `cat:classifying-space`**
- Pages: 02-nerve-realization.html
- Sentence: 2. **幾何学的実現.** $K\colon\Delta_{+}\to\mathbf{Top}$ を標準単体 $n+1\mapsto\Delta^{n}$ とすると、$N_{K}$ は特異単体的集合（\ref{cat:simplicial-object} の例 1）で、実現 $\lvert-\rvert$ は単体的集合の**幾何学的実現*
  - `cat:tensor-as-coend`: NG — 「幾何学的実現」は単体的集合の実現（geometric realization）を指し、関手のテンソル積（coend）の定義とは異なる概念である。
  - `cat:classifying-space`: OK

## 「次元」 in 01-foundations/06-category-theory/05-higher-categories
- Default: `cat:trace-dimension` → **no candidate fits**
- Pages: 03-2-categories.html, 05-crossed-modules.html
- Sentence: 小さい 2 圏、2 関手、2 自然変換は（2 自然変換の成分ごとの合成を縦、ひげ付けを使った合成を横として）2 圏 $2\text{-}\mathbf{Cat}$ をなし、変形を加えると 3 次元の構造（3 圏）をなす、と Mac Lane は述べている（確かめは読者に委ねられており、ここでも確かめていない）。一般に、2 圏は「hom が $\mathbf{Cat}$ の対象である圏」（$\mathbf{Cat}$ 豊穣圏、\ref{cat:closed-category}）であり、3 圏は hom が $2\
  - `cat:trace-dimension`: NG — Here "次元" refers to the dimension of a higher category (3-dimensional structure), not the trace-based dimension of a dualizable object defined in the card.
  - `lin:dimension`: NG — Here "次元" refers to the dimension of higher categorical structure (3-dimensional structure/3-category), not the dimension of a vector space as defined in the card.
  - `ring:krull-dimension`: NG — This “次元” refers to the dimension of higher categories (3-dimensional structure), not Krull dimension of a ring.
  - `ag:dimension`: NG — This "次元" refers to the dimension of higher category structure (3-dimensional structure/3-category), not the Krull dimension of a topological space defined in the card.

## 「生成元」 in 01-foundations/06-category-theory/05-higher-categories
- Default: `grp:generated-subgroup` → **fits: `grp:presentation`**
- Pages: 02-nerve-realization.html, 04-bicategories.html
- Sentence: **似た定理.** 元の圏（\ref{cat:page-elements}）上の余極限による実現は、コエンドによる左カン拡張の公式（\ref{cat:lan-coend}）の言い換えである。$\mathbf{Cat}$ の神経の場合、実現は単体的集合から生成元と関係で圏を作る操作（基本圏）になることが知られている。ドルド–カンの対応（単体的アーベル群と鎖複体）も、同じ型の随伴から得られることが知られている。
  - `grp:generated-subgroup`: NG — Here "生成元" refers to generators of a category presented by generators and relations (the fundamental category of a simplicial set), not the group-theoretic generating set defined in the card.
  - `grp:presentation`: OK

## 「連続」 in 01-foundations/06-category-theory/05-higher-categories
- Default: `cat:preserve-limits` → **fits: `top:continuous`**
- Pages: 01-internal-categories.html
- Sentence: 3. $\mathbf{E}=\mathbf{Top}$ の内部圏は**位相圏**（対象と射が位相空間で、構造写像が連続）。たとえば位相群は $C_{0}=1$ の位相圏で逆元が連続なもの。
  - `cat:preserve-limits`: NG — Here "連続" means continuous as a map between topological spaces, not a functor preserving limits.
  - `comp:monotone-continuous`: NG — Here "連続" refers to continuity of structure maps between topological spaces, not the fixed-point-theoretic continuity of a function on power sets defined in the card.
  - `cx:limit-continuity`: NG — This "連続" refers to continuous maps between topological spaces in a topological category, not the complex-function continuity defined in the card.
  - `top:continuous`: OK

## 「テンソル積」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `rep:constructions` → **no candidate fits**
- Pages: 05-ribbon-tangles.html, 06-hopf.html, 07-tannaka.html
- Sentence: {N}$、$\mathbf{TL}(n,m)$ を $P(n,m)$ を基底とする自由 $k$ 加群とし、合成を「$D\in P(n,m)$ の上に $E\in P(m,l)$ を積み、中央の $m$ 点でつないで、できた閉じた輪 $c$ 個を消して $\delta^{c}$ を掛ける」の $k$ 双線形な延長とする。テンソル積は横の並置（$n\otimes m=n+m$）。
  - `rep:constructions`: NG — Here "テンソル積" denotes horizontal juxtaposition of diagrams (a monoidal/tensor product of the diagram algebra), not the tensor product of representations defined in the card.
  - `ha:tensor-product`: NG — Here "テンソル積" denotes horizontal juxtaposition of diagrams (a monoidal/tensor product of a diagrammatic category), not the tensor product of modules defined by the balanced-map universal property.

## 「乗法」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `cat:monad` → **fits: `ring:ring`**
- Pages: 04-rigid-pivotal.html
- Sentence: - **ピボタル構造のモノイダル性**：巡回性（\ref{cat:trace-cyclic}）には $\delta$ の自然性だけを使い、モノイダル性は使っていない。モノイダル性は、トレースの乗法性 $\operatorname{tr}(f\otimes g)=\operatorname{tr}(f)\operatorname{tr}(g)$ を（組紐をもつ場合などに）示すときに要る。
  - `cat:monad`: NG — Here "乗法性" refers to multiplicativity of the trace (a product-preserving property), not the monad multiplication natural transformation μ.
  - `ring:ring`: OK

## 「位数」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `grp:abelian-group` → **no candidate fits**
- Pages: 07-tannaka.html
- Sentence: ga'F\cong\omega$ がモノイダルな同型）は存在しない：存在すれば $\operatorname{Aut}^{\otimes}(\omega)\cong\operatorname{Aut}^{\otimes}(\omega')$、すなわち $D_{4}\cong Q_{8}$ となり矛盾（$D_{4}$ は位数 2 の元を 5 個、$Q_{8}$ は 1 個もつ）。モノイダル構造は、指標表（融合規則）より多くの情報（結合子の情報）を持っている。実際、$\operatorname{Rep}(D_{4})$ と $\operatorname{Rep}(Q_{8})$ はファイバー関手との両立を課さなくてもモノイダル圏として同値で
  - `grp:abelian-group`: NG — Here “位数” means the order of an element (number of elements in the cyclic subgroup it generates), not the order $\abs{G}$ of a group as defined in the card.
  - `grp:element-order`: NG — Here "位数" refers to the order of a group element (counting elements of order 2 in $D_{4}$ and $Q_{8}$), which matches the card's definition of the order of an element.
  - `cx:isolated-singularity`: NG — Here "位数" means the order (number of elements) of a group, not the order of a pole as defined in the card.
  - `cx:elliptic-function`: NG — Here "位数" means the order (number of elements) of a group, not the number of poles of an elliptic function.

## 「余単位」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `cat:unit-counit` → **no candidate fits**
- Pages: 06-hopf.html
- Sentence: 群 $G$ の表現どうしのテンソル積が再び表現になるのは、群環 $k[G]$ に「余積」$g\mapsto g\otimes g$ があるからである。一般に、代数 $H$ の加群の圏に、台のベクトル空間のテンソル積を使ったモノイダル構造を入れることと、$H$ に**双代数**の構造（余積と余単位）を入れることは同じである。さらに、**対合射**（アンチポード）があるとき（**ホップ代数**）有限次元加群の圏は剛性になり、**$R$ 行列**があるとき（**準三角ホップ代数**）組紐モノイダル圏になる。
  - `cat:unit-counit`: NG — Here "余単位" is the counit of a coalgebra/bialgebra (a linear map \(H\to k\)), not the counit of an adjunction defined in the card.
  - `cat:comonad`: NG — Here "余単位" is the counit of a coalgebra/bialgebra structure (a linear map \(H\to k\)), not the counit natural transformation \(L\Rightarrow 1_{\mathbf{X}}\) of a comonad.

## 「左作用」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `cat:monoid-action` → **fits: `grp:group-action`**
- Pages: 03-string-diagrams.html
- Sentence: \cong R$。両側加群 $M$ について、$R\otimes_{R}M\cong M$ と $M\otimes_{R}R\cong M$ を通すと、$s\otimes1_{M}$ は左からの $s$ の作用、$1_{M}\otimes s$ は右からの $s$ の作用である。$M=\mathbb{Q}[t]$ に、左作用を通常の掛け算、右作用を $m\cdot r\defeq m\,r(-t)$ で入れる（$t\mapsto-t$ は環の自己同型なので両側加群）。$s=t$ について、左作用は $m\mapsto tm$、右作用は $m\mapsto-tm$ で異なる。したがって $s\otimes1_{M}\neq1_{M}\oti
  - `cat:monoid-action`: NG — This is a ring/module left action (scalar multiplication), not a monoid object acting on an object in a monoidal category as defined in the card.
  - `grp:group-action`: OK

## 「構造射」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `cat:t-algebra` → **no candidate fits**
- Pages: 01-enriched.html, 02-day-convolution.html, 03-string-diagrams.html, 04-rigid-pivotal.html, 06-hopf.html
- Sentence: tegory}, \ref{cat:symmetric-monoidal}）。既存のページの $\square$, $e$ をここでは $\otimes$, $I$ と書く。コヒーレンス定理（\tref{cat:coherence}, \ref{cat:symmetric-coherence-general}）により、構造射 $\alpha,\lambda,\varrho$ は省略して書くことがある（省略した等式はコヒーレンスで保証される）。
  - `cat:t-algebra`: NG — Here "構造射" refers to the associator and unitors of a symmetric monoidal category, not the structure map of a T-algebra.
  - `ring:algebra`: NG — Here "構造射" refers to the associativity/unit coherence morphisms α, λ, ϱ of a symmetric monoidal category, not the structure homomorphism ι_B of an algebra over a ring.

## 「次元」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `cat:trace-dimension` → **no candidate fits**
- Pages: 03-string-diagrams.html, 04-rigid-pivotal.html, 05-ribbon-tangles.html, 06-hopf.html, 07-tannaka.html
- Sentence: - 組紐モノイダル圏では、図式は 3 次元（平面と奥行き）の組紐の図式になり、値は 3 次元空間の（端点を固定した）アイソトピーで不変になる。対称モノイダル圏では 4 次元以上で、交差の上下が区別できなくなる。この次元の上昇はオペラッド $E_{1}\subset E_{2}\subset E_{3}$（\ref{cat:page-little-disks}）
  - `cat:trace-dimension`: NG — Here "次元" refers to the spatial dimension (3次元, 4次元) of braid diagrams, not the categorical dimension $\dim a$ defined via trace.
  - `lin:dimension`: NG — This "次元" refers to the spatial dimension of braid diagrams (3D/4D), not the dimension of a vector space as defined in the card.
  - `ring:krull-dimension`: NG — Here "次元" refers to the spatial dimension of braid diagrams in a monoidal category, not the Krull dimension of a ring.
  - `ag:dimension`: NG — This "次元" refers to the spatial dimension of braid diagrams (3D/4D), not the dimension of a topological space defined via chains of irreducible closed subsets.

## 「準同型」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `cat:monoid-object` → **fits: `ring:homomorphism`**
- Pages: 06-hopf.html, 07-tannaka.html
- Sentence: 3. **包絡環** $U(\mathfrak{g})$（リー代数 $\mathfrak{g}$）：$x\in\mathfrak{g}$ について $\Delta(x)=x\otimes1+1\otimes x$, $\varepsilon(x)=0$, $S(x)=-x$（これらが代数準同型（$S$ は反準同型）として延びることは包絡環の普遍性による。本サイト未収録）。
  - `cat:monoid-object`: NG — This "準同型" refers to algebra homomorphisms between enveloping algebras, not homomorphisms of monoids in a monoidal category.
  - `cat:t-algebra`: NG — This "準同型" refers to algebra homomorphisms of the enveloping algebra, not homomorphisms of T-algebras.
  - `grp:homomorphism`: NG — This is an algebra homomorphism (a different notion), not a group homomorphism as defined in the card.
  - `ring:homomorphism`: OK

## 「直積」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `grp:direct-product` → **fits: `set:cartesian-product`**
- Pages: 02-day-convolution.html, 07-tannaka.html
- Sentence: 群 $G$ 上の関数 $f,g$ の畳み込み $(f*g)(c)=\sum_{ab=c}f(a)g(b)$ は、デイ畳み込みの式で、和をコエンドに、$a\otimes b=c$ を射 $c\to a\otimes b$ の集合に、数の積を集合の直積に置き換えたものである。比喩で言えば、デイ畳み込みは「モノイダル圏の掛け算の表を、前層という『重み付きの対象の分布』に線形に（余極限を保つように）延長する」操作で、米田埋め込みは「点への集中した分布（デルタ関数）」に当たる。デルタ関数どうしの畳み込みが積の点のデルタ関数になること（$\delta_{a}*\delta_
  - `grp:direct-product`: NG — Here 直積 refers to the Cartesian product of sets (集合の直積), not the direct product of groups with componentwise group operation as defined in the card.
  - `set:cartesian-product`: OK

## 「結合子」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `cat:monoidal-category` → **no candidate fits**
- Pages: 02-day-convolution.html, 06-hopf.html, 07-tannaka.html
- Sentence: **Step 1（結合子）.** \ref{cat:day-universal} の Step 3 から、$\widehat{\mathbf{C}}((F\circledast G)\circledast K,H)$ と $\widehat{\mathbf{C}}(F\circledast(G\circledast K),H)$ は、それぞれ
  - `cat:monoidal-category`: NG — Here "結合子" refers to a proof step (a combining/gluing step), not the associator natural isomorphism of a monoidal category.
  - `logic:weak-reduction`: NG — Here "結合子" refers to a composition/combining morphism in category theory, not a variable-free CL term.

## 「連続」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `cat:preserve-limits` → **fits: `top:continuous`**
- Pages: 01-enriched.html, 03-string-diagrams.html, 05-ribbon-tangles.html, 07-tannaka.html
- Sentence: 5. $\mathbf{V}=(\mathbf{CGHaus},\times,\ast)$（コンパクト生成ハウスドルフ空間、デカルト閉。\ref{cat:cghaus-ccc}）：$\mathbf{V}$ 圏は「射の空間」に位相が入り合成が連続な圏。$\mathbf{V}$ 自身（写像空間 $[X,Y]$）が典型。台の圏の射 $\ast\to[X,Y]$ は連続写像。
  - `cat:preserve-limits`: NG — Here「連続」describes a continuous map (合成が連続), not a functor preserving limits.
  - `comp:monotone-continuous`: NG — This "連続" refers to continuity of a topological map (composition being continuous), not the monotone/continuous fixed-point property of functions on power sets.
  - `cx:limit-continuity`: NG — This "連続" refers to continuity of maps between compactly generated Hausdorff spaces (a topological notion), not the complex-function continuity defined in the card.
  - `top:continuous`: OK

## 「閉包」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `top:interior-closure` → **no candidate fits**
- Pages: 05-ribbon-tangles.html
- Sentence: 組紐 $\beta\in B_{2}$ の閉包（上端と下端をつなぐ）の括弧は、$\mathbf{TL}(2,2)$ の元 $x\cdot1_{2}+y\cdot e$ の閉包 $(x\delta^{2}+y\delta)/\delta$ で計算できる（$1_{2}$ の閉包は 2 個の輪、$e$ の閉包は 1 個の輪）。
  - `top:interior-closure`: NG — This "closure" refers to connecting the top and bottom strands of a braid (a trace/closure operation in knot theory), not the topological closure of a subset.
  - `logic:ltl-size`: NG — This "閉包" is the braid/tangle closure (joining endpoints), not the set of subformulas plus X(U) defined in the card.
  - `logic:ctl-closure`: NG — This "閉包" is the closure of a braid/tangle (joining endpoints), not the minimal formula-closed set CL(A) defined in the card.
  - `set:pred-closure`: NG — This "closure" is the braid/tangle closure (joining top and bottom strands), not the set-theoretic transitive closure defined in the card.

## 「切断」 in 01-foundations/06-category-theory/07-operads
- Default: `cat:monic-epic` → **no candidate fits**
- Pages: 07-infinite-loop.html
- Sentence: lus E\cong Q\oplus E$ で、$E\oplus E'\cong R^{n}$ となる $E'$ を加える）。$P\oplus R\cong R^{n+1}$ だが $P\not\cong R^{n}$ となる環と加群があり（安定自由だが自由でない。たとえば実数係数の 2 次元球面上の連続関数環の接束の切断の加群）、$\iota$ は単射でない（本サイト未収録の例）。
  - `cat:monic-epic`: NG — Here "切断" means a section of a vector bundle (a continuous choice of tangent vector), not the categorical section/retraction notion defined in the card.
  - `pt:m-finite-cut`: NG — Here "切断" means a section of a vector bundle (接束の切断), not an initial segment of a model of PRA.

## 「単位律」 in 01-foundations/06-category-theory/07-operads
- Default: `cat:category` → **no candidate fits**
- Pages: 02-operads.html, 03-little-intervals.html, 05-eckmann-hilton.html
- Sentence: 2. （単位律）$\gamma(1;d)=d$、$\gamma(c;1,\dots,1)=c$。
  - `cat:category`: NG — This "単位律" is a unit law for a polycategory-like operation γ, not the identity-law condition (C3) in the definition of a category.
  - `cat:monad`: NG — This "単位律" is a unit law for a bicategory composition, not the monad unit law defined in the card.

## 「射影」 in 01-foundations/06-category-theory/07-operads
- Default: `cat:product` → **no candidate fits**
- Pages: 01-loops-suspensions.html, 07-infinite-loop.html
- Sentence: **Step 2（$S^{n}\approx(\R^{n})^{*}$）.** $n\ge2$ では立体射影（\ref{top:rn-one-point}）で $N\leftrightarrow\infty$。$n=1$ は Step 1。
  - `cat:product`: NG — Here "射影" refers to stereographic projection, not the projection morphisms of a categorical product.
  - `cat:category-of-elements`: NG — Here "射影" refers to stereographic projection, not the projection functor from a category of elements.
  - `grp:direct-product`: NG — Here "射影" refers to stereographic projection, not the group-theoretic projection map defined in the card.

## 「次元」 in 01-foundations/06-category-theory/07-operads
- Default: `cat:trace-dimension` → **no candidate fits**
- Pages: 02-operads.html, 03-little-intervals.html, 04-little-disks.html, 05-eckmann-hilton.html, 06-e2-braided.html, 07-infinite-loop.html
- Sentence: 4. **ベクトル空間のオペラッド**（$\times$ を $\otimes$ に変える）：リー代数のオペラッド $\mathrm{Lie}$ は、$\mathrm{Lie}(k)$ が自由リー代数の中の $k$ 変数の多重線形な元の空間（次元 $(k-1)!$）であるもの。
  - `cat:trace-dimension`: NG — Here "次元" means the dimension of a vector space (the number $(k-1)!$), not the categorical dimension $\dim a=\operatorname{tr}(1_{a})$ defined in the card.
  - `lin:dimension`: NG — Here "次元" refers to the dimension of a space of multilinear elements in a free Lie algebra, not the dimension of a vector space as defined by the cardinality of a basis in the card.
  - `ring:krull-dimension`: NG — Here "次元" refers to the dimension of a vector space (the dimension of the space of multilinear elements), not the Krull dimension of a ring defined in the card.
  - `ag:dimension`: NG — Here "次元" refers to the dimension of a vector space (the dimension of the space of multilinear elements), not the dimension of a topological space defined via chains of irreducible closed subsets.

## 「準同型」 in 01-foundations/06-category-theory/07-operads
- Default: `cat:monoid-object` → **fits: `grp:homomorphism`**
- Pages: 05-eckmann-hilton.html, 06-e2-braided.html, 07-infinite-loop.html
- Sentence: 2. 群の圏 $\mathbf{Grp}$ の群対象（群の準同型を積とする群）はアーベル群と同じもの。
  - `cat:monoid-object`: NG — Here "準同型" refers to group homomorphisms (morphisms in $\mathbf{Grp}$), not the monoid homomorphisms defined in the card.
  - `cat:t-algebra`: NG — This “準同型” refers to group homomorphisms, not homomorphisms of T-algebras as defined in the card.
  - `grp:homomorphism`: OK

## 「直積」 in 01-foundations/06-category-theory/07-operads
- Default: `grp:direct-product` → **no candidate fits**
- Pages: 01-loops-suspensions.html, 02-operads.html, 05-eckmann-hilton.html
- Sentence: 基点付き空間の圏 $\mathbf{Top}_{*}$ では、直積 $Z\times Y$ の代わりに、二つの「軸」$Z\vee Y$ をつぶした**スマッシュ積** $Z\wedge Y$（\ref{cat:smash-product}）が、基点付き写像の空間 $\mathrm{Map}_{*}(Y,X)$ の左随伴になる（\ref{cat:smash-hom-adjunction
  - `grp:direct-product`: NG — This “直積” refers to the product in the category of based topological spaces, not the direct product of groups defined in the card.
  - `set:cartesian-product`: NG — In this sentence 直積 refers to the product in the category of based spaces (the based product), not the set-theoretic Cartesian product defined in the card.
  - `mod:direct-sum`: NG — This "直積" refers to the product in the category of pointed topological spaces (with basepoints identified), not the direct product of modules defined in the card.

## 「連続」 in 01-foundations/06-category-theory/07-operads
- Default: `cat:preserve-limits` → **fits: `top:continuous`**
- Pages: 01-loops-suspensions.html, 02-operads.html, 03-little-intervals.html, 04-little-disks.html, 05-eckmann-hilton.html, 06-e2-braided.html
- Sentence: **Step 1（商を通る写像）.** 基点を保つ連続写像 $g\colon Z\wedge Y\to X$ に $f\defeq g\circ q\colon Z\times Y\to X$ を対応させる。$f$ は連続で $f[Z\vee Y]=\{*_{X}\}$。逆に、連続写像 $f\colon Z\times Y\to X$ で $f[Z\vee Y]=\{*_{X}\}$ となるものは、$q$ の各点の逆像 $q^{-1}(w)$（$w\in Z\wedge Y$）の上で一定なので $f=g\circ q$ となる写像 $g
  - `cat:preserve-limits`: NG — Here "連続" means continuous (topological continuity of maps), not the category-theoretic notion of a functor preserving all small limits.
  - `comp:monotone-continuous`: NG — This "連続" refers to continuity of a topological map between spaces, not the order-theoretic continuity of a function on power sets defined in the card.
  - `cx:limit-continuity`: NG — This "連続" refers to continuity of maps between topological spaces, not the ε-δ continuity of complex functions defined in the card.
  - `top:continuous`: OK

## 「サイクル」 in 01-foundations/06-category-theory/08-sheaf-cohomology
- Default: `ha:homology` → **no candidate fits**
- Pages: 05-flasque-cech.html, 06-singular-comparison.html
- Sentence: を考えると、計算により $dh+hd=1$（$p=0$ では $h(c)\defeq c_{j}\in F(V)$ で、$-1$ 次の項を含めて）。よって $V$ 上の複体は完全。茎の元は $x$ のある近傍 $V\subset U_{j}$ 上の切断で表されるので、茎の複体も完全（コサイクル $c_{x}$ を $V$ 上のコサイクルで表し、$c=d(hc)$）。
  - `ha:homology`: NG — In the sentence "サイクル" refers to a cocycle (element of the kernel of the differential in a cochain complex), which is the dual/cohomological variant of the cycle notion defined in the card, but here it is used as "コサイクル" (cocycle) in a sheaf/cochain context, not the chain-complex cycle $Z_{n}(C)$ defined in the card.
  - `cx:cycle`: NG — Here "サイクル" refers to a cocycle in a cochain complex, not a formal sum of closed curves.

## 「上界」 in 01-foundations/06-category-theory/08-sheaf-cohomology
- Default: `calc:supremum` → **fits: `set:chain-maximal`**
- Pages: 06-singular-comparison.html
- Sentence: おく（鎖なので一意）。$z$ の近傍 $N$ で有限個の $K_{\lambda}$ としか交わらないものをとると、そのうち $J$ に入る有限個はある $J_{\alpha}$ に入るので $N\cap K_{J}=N\cap K_{J_{\alpha}}$ で $t=t_{\alpha}$。よって $t$ は連続で上界。ツォルンの補題から極大元 $(J,t)$ がある（$(\emptyset,\text{空写像})$ があるので空でない）。
  - `calc:supremum`: NG — Here "上界" refers to an upper bound of a chain in a partially ordered set (for Zorn's lemma), not the upper bound of a subset of a totally ordered field as defined in the card.
  - `set:chain-maximal`: OK

## 「共通部分」 in 01-foundations/06-category-theory/08-sheaf-cohomology
- Default: `cat:subobject` → **fits: `set:intersection-difference`**
- Pages: 01-presheaves-sheaves.html, 03-direct-inverse-image.html, 06-singular-comparison.html
- Sentence: （2 元以上）について $F(U)=A$（制限は恒等写像）は層でない：$F(\emptyset)=A$ は 1 点でない（空の被覆の条件に反する）。$\emptyset$ を除いて考えても、交わらない空でない開集合 $U_{1},U_{2}$ があれば、$a\neq b$ を $U_{1},U_{2}$ に置いた族は（共通部分 $\emptyset$ 上で）両立するのに、$U_{1}\cup U_{2}$ 上の切断に貼り合わない。
  - `cat:subobject`: NG — Here "共通部分" refers to the intersection of open sets (the empty set), not the pullback of a family of subobjects as defined in the card.
  - `set:intersection-difference`: OK

## 「切断」 in 01-foundations/06-category-theory/08-sheaf-cohomology
- Default: `cat:monic-epic` → **no candidate fits**
- Pages: 01-presheaves-sheaves.html, 02-sheafification.html, 03-direct-inverse-image.html, 04-abelian-sheaves.html, 05-flasque-cech.html, 06-singular-comparison.html
- Sentence: 位相空間 $X$ の各開集合 $U$ に「$U$ 上の関数（切断）」の集合 $F(U)$ を、小さい開集合への制限と両立するように対応させたものが**前層**で、局所的に与えられた切断が一意に貼り合わさるものが**層**である（\ref{cat:sheaf-space}）。層は「局所的な情報から大域的な情報を組み立てる」ための言葉で、点 $x$ の近くだけを見る**茎** $F_{
  - `cat:monic-epic`: NG — Here "切断" means a section of a sheaf (a function on an open set), not a split monomorphism's section in the categorical sense.
  - `pt:m-finite-cut`: NG — This "切断" means a section of a sheaf in topology, not a cut (initial segment closed under successor) in a model of arithmetic.

## 「射影」 in 01-foundations/06-category-theory/08-sheaf-cohomology
- Default: `cat:product` → **no candidate fits**
- Pages: 02-sheafification.html, 05-flasque-cech.html
- Sentence: 前層 $F$ について、集合 $\operatorname{Et}(F)\defeq\bigsqcup_{x\in X}F_{x}$ と、射影 $p:\operatorname{Et}(F)\to X$（$F_{x}$ を $x$ に送る）を考える。開集合 $U$ と $s\in F(U)$ について $[U,s]\defeq\{s_{x} : x\in U\}$ とおき、これらを開基とする位相を入れたものを $F$ の**エタール空間**という。
  - `cat:product`: NG — Here "射影" means the projection map of a disjoint union (sending each stalk to its base point), not the projection morphism from a categorical product as defined in the card.
  - `cat:category-of-elements`: NG — This "射影" is the étale-space projection map sending stalks to points, not the projection functor from a category of elements to the base category.
  - `grp:direct-product`: NG — This "射影" is a projection map from the étalé space to the base space, not the coordinate projection $p_{i}(g_{1},\dots,g_{n})\defeq g_{i}$ defined in the card.

## 「有限生成」 in 01-foundations/06-category-theory/08-sheaf-cohomology
- Default: `mod:generated-submodule` → **no candidate fits**
- Pages: 05-flasque-cech.html
- Sentence: **計算の観点.** 有限な開被覆と、各交わりで値が有限生成アーベル群の層について、チェック複体は有限生成自由加群（の積）の複体で、コホモロジーは整数行列のスミス標準形（\ref{mod:smith-pr-euclidean}）で計算できる（原始再帰的）。ルレイの定理は「良い被覆」さえ見つければ層コホモロジーが有限の線形代数に帰着することを述べている。
  - `mod:generated-submodule`: NG — Here "有限生成" modifies abelian groups (a sheaf of finitely generated abelian groups), not a module generated by a finite set as defined in the card.
  - `grp:generated-subgroup`: NG — Here "有限生成" modifies an abelian group (a sheaf of finitely generated abelian groups), not a group generated by a finite generating set in the sense of the card's group-theoretic definition.
  - `ring:generated-ideal-def`: NG — Here "有限生成" modifies an abelian group (a sheaf of finitely generated abelian groups), not an ideal in a commutative ring, so it is a different notion.

## 「次元」 in 01-foundations/06-category-theory/08-sheaf-cohomology
- Default: `cat:trace-dimension` → **fits: `ag:dimension`**
- Pages: 04-abelian-sheaves.html, 06-singular-comparison.html
- Sentence: **チェックコホモロジー**と比較する（\ref{cat:leray-theorem}）。開集合がすべてパラコンパクトで局所可縮な空間では $H^{q}(X,\underline{\mathbb{Z}})$ は特異コホモロジーと一致する（\ref{cat:sheaf-singular-comparison}）。$n$ 次元の多様体では $q>n$ で消えること（グロタンディークの消滅定理の位相版）は知られている（本サイト未収録）。
  - `cat:trace-dimension`: NG — Here "次元" means the dimension of a manifold (topological dimension), not the categorical dimension $\dim a$ defined via trace in a monoidal category.
  - `lin:dimension`: NG — Here "次元" refers to the dimension of a manifold (topological dimension), not the dimension of a vector space as defined in the card.
  - `ring:krull-dimension`: NG — Here "次元" refers to the dimension of a manifold (topological dimension), not the Krull dimension of a ring defined in the card.
  - `ag:dimension`: OK

## 「逆像」 in 01-foundations/06-category-theory/08-sheaf-cohomology
- Default: `set:function` → **fits: `cat:inverse-image`**
- Pages: 01-presheaves-sheaves.html, 02-sheafification.html
- Sentence: **高い視点.** 茎をとる関手 $F\mapsto F_{x}$ は、点 $x\colon\{*\}\to X$ に沿った逆像（\ref{cat:page-direct-inverse-image}）で、有限の極限と任意の余極限を保つ。トポスの言葉では、点はこのような「茎の関手」として定義される。
  - `set:function`: NG — This "逆像" is the inverse image functor along a point in a topos/site-theoretic sense, not the set-theoretic inverse image $f^{-1}[D]$ defined in the card.
  - `cat:inverse-image`: OK

## 「連続」 in 01-foundations/06-category-theory/08-sheaf-cohomology
- Default: `cat:preserve-limits` → **fits: `cx:limit-continuity`**
- Pages: 01-presheaves-sheaves.html, 02-sheafification.html, 03-direct-inverse-image.html, 04-abelian-sheaves.html, 06-singular-comparison.html
- Sentence: 空の被覆（$I=\emptyset$, $U=\emptyset$）に条件を使うと、空の族は両立するので、$F(\emptyset)$ はちょうど一点である。例：$X$ 上の実数値連続関数 $F(U)=C(U,\mathbb{R})$ は層（連続性は局所的な性質で、関数は貼り合わせられる）。有界な連続関数の前層は一般に層でない（局所的に有界でも全体で有界とは限らない）。
  - `cat:preserve-limits`: NG — Here "連続" means continuous (as in continuous functions), not the category-theoretic notion of a functor preserving limits.
  - `comp:monotone-continuous`: NG — Here "連続" refers to continuity of real-valued functions (topological continuity), not the fixed-point-theoretic continuity of a map on power sets defined in the card.
  - `cx:limit-continuity`: OK

## 「イデアル」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `ring:ideal` → **no candidate fits**
- Pages: 02-sheaf-topos.html
- Sentence: - 冪対象の証明で $P$ が任意の前層でよかった（$Q$ が層なら $Q^{P}$ は層）ことは、層の圏が前層の圏の中で「冪のイデアル」（exponential ideal）になっている、と言い表されることが知られている。
  - `ring:ideal`: NG — Here "イデアル" is part of the phrase "冪のイデアル" (exponential ideal), a category-theoretic notion unrelated to the ring-theoretic ideal defined in the card.
  - `set:ideal`: NG — This is the category-theoretic "exponential ideal," not a set-theoretic ideal as defined in the card.

## 「ホモトピー」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `at:homotopy` → **no candidate fits**
- Pages: 09-etale-site.html
- Sentence: $\operatorname{Spec}K$ はザリスキ位相では 1 点だが、エタール位相で見ると「1 点に対称性 $G$ が付いた空間」になる：層は一つの集合ではなく、$G$ が連続に作用する集合である。これは、軌道空間 $\ast/\!/G$（ホモトピー論の分類空間 $BG$）の上の局所系に当たる。比喩で言えば、ザリスキ位相は「$K$ の元を見る目」、エタール位相は「$K$ の代数的閉包の中で、$K$ からは区別できない共役な元たちの入れ替え」まで見る目で、ガロア群はその「見えない内部の対称性」である。
  - `at:homotopy`: NG — Here "ホモトピー論" refers to homotopy theory as a field, not a homotopy between continuous maps as defined in the card.
  - `logic:homotopy-funext`: NG — This use of ホモトピー refers to homotopy theory/classifying spaces in algebraic topology, not the type-theoretic homotopy defined as a pointwise identity type between dependent functions.

## 「上限」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `calc:supremum` → **no candidate fits**
- Pages: 04-presheaf-heyting.html
- Sentence: - **ハイティング代数**は、最大元・最小元・二項の上限 $\vee$・下限 $\wedge$ をもつ束で、$c\wedge a\le b\iff c\le(a\Rightarrow b)$ を満たす二項演算 $\Rightarrow$ をもつもの（\ref{cat:page-cartesian-closed} の例 3）。$\neg a\defeq(a\Rightarro
  - `calc:supremum`: NG — This "上限" is the least upper bound (join) in a lattice, a special case of the ordered-set supremum, so it matches the card's notion.
  - `set:order-dedekind-complete`: NG — In the sentence 上限 means the binary join operation $\vee$ in a lattice, not the least upper bound of a bounded nonempty subset as defined in the card.
  - `logic:rm-analysis-defs`: NG — In the sentence 上限 refers to the join (least upper bound) operation in a lattice, not the least upper bound of a real sequence as defined in the card.

## 「切断」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `cat:monic-epic` → **no candidate fits**
- Pages: 06-site-sheafification.html, 08-giraud-theorem.html, 09-etale-site.html
- Sentence: **層化は 1 回で済むことがある.** $P$ が分離的なら $P^{+}$ がすでに層（\ref{cat:plus-separated.3}）。空間の場合はエタール空間の切断が直接層になる。
  - `cat:monic-epic`: NG — Here「切断」means a section of an étale space (a continuous right inverse), not the categorical notion of a split monomorphism/section defined in the card.
  - `pt:m-finite-cut`: NG — Here "切断" means a section of an étale space, not a cut (initial segment) of a model of PRA.

## 「加群」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `mod:module` → **no candidate fits**
- Pages: 09-etale-site.html
- Sentence: アーベル群の対象どうしも圏同値で対応するので、小エタールサイト上のアーベル群の層は**連続な $G$ 加群**（作用が連続なアーベル群）と対応し、大域切断 $\Gamma$ は不変部分 $M\mapsto M^{G}$ に対応する。したがってエタールコホモロジー $H^{q}_{\mathrm{et}}(\operatorname{Spec}K,-)$（\ref{cat:sheaf-cohomology} と同様に右導来関
  - `mod:module`: NG — Here "加群" means a module over the group ring / a $G$-module (a continuous $G$-module), not a module over a ring $R$ as in the card's definition of left $R$-module.
  - `ag:o-module`: NG — Here "加群" refers to a continuous \(G\)-module (a module with a group action), not an \(\mathcal{O}_{X}\)-module over a ringed space as defined in the card.

## 「右随伴」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `cat:adjunction` → **no candidate fits**
- Pages: 01-presheaf-topos.html, 04-presheaf-heyting.html, 06-site-sheafification.html
- Sentence: **Step 5.** 有限積は各点ごとに存在する（記法）。Step 3, 4 は、$(Q^{P},\mathrm{ev})$ が \ref{cat:exponential-universal} の普遍性をもつことを言っているので、$-\times P$ は右随伴 $(-)^{P}$ をもつ。
  - `cat:adjunction`: NG — It says $-\times P$ has a right adjoint $(-)^{P}$, but the card defines $G$ as the right adjoint of $F$ when $F\dashv G$, so $(-)^{P}$ is the right adjoint, not $-\times P$.
  - `cat:adjunction-in-2-category`: NG — In the sentence "右随伴" refers to the right adjoint of the functor $-\times P$, i.e. the functor $(-)^{P}$ is the right adjoint, whereas the card defines "右随伴" as the right adjoint $g$ of a given $f$; here the term is used for the functor $(-)^{P}$ being a right adjoint, which matches the notion (a right adjoint), so it is the same notion.

## 「導関数」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `calc:derivative` → **no candidate fits**
- Pages: 09-etale-site.html
- Sentence: 2. **標準エタール代数**：$A$ 代数 $B=(A[x]/(f))_{g}$（$f$ はモニック、導関数 $f'$ の像が $B$ で可逆）を標準エタールという。$A$ 代数 $B$ が**エタール**であるとは、ザリスキ被覆 $B\to B_{h_{i}}$ で各 $B_{h_{i}}$ がある $A_{g_{i}}$（$(g_{i})=A$ のザリスキ被覆の一員）上の標準エタール代数となるものがあることをいう。
  - `calc:derivative`: NG — Here "導関数" means the formal derivative of the polynomial f, not the derivative function defined via a limit as in the card.
  - `cx:holomorphic`: NG — Here "導関数" means the formal derivative of the polynomial f, not the derivative function of a complex-analytic function as defined in the card.

## 「生成系」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `mod:generated-submodule` → **fits: `cat:internal-equivalence-relation`**
- Pages: 05-sites.html
- Sentence: **グロタンディーク・トポスとジローの定理.** サイト上の層の圏と圏同値な圏を**グロタンディーク・トポス**という。ジローの定理は、グロタンディーク・トポスを「小さい生成系をもち、余極限が引き戻しで安定で、余積が交わらず、同値関係が有効な、局所的に小さい圏」として内在的に特徴づける（公理は \ref{cat:giraud-axioms}、証明は \ref{cat:sheaves-giraud} と \ref{cat:giraud-theorem}）。
  - `mod:generated-submodule`: NG — This "生成系" (generating set of a Grothendieck topos) is a different notion from the module-theoretic generating system defined in the card.
  - `cat:internal-equivalence-relation`: OK

## 「直和」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `mod:direct-sum` → **no candidate fits**
- Pages: 07-giraud-axioms.html
- Sentence: **Step 1（$\mathbf{Set}$）.** 交わらない余積（直和の二つの成分の共通部分は空、入射は単射）と安定性（$Y\to\bigsqcup X_{i}$ について $Y=\bigsqcup f^{-1}(X_{i})$）。エピ射は全射で、全射 $e$ は核対（$e(x)=e(x')$ の組）の余等化子（商集合）。全射の引き戻しは全射。同値関係 $R\subset A\times
  - `mod:direct-sum`: NG — Here "直和" refers to the disjoint union (coproduct) in the category of sets, not the direct sum of modules defined in the card.
  - `rep:constructions`: NG — Here "直和" refers to the disjoint union (coproduct) in the category of sets, not the direct sum of representations defined in the card.

## 「直積」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `grp:direct-product` → **fits: `mod:direct-sum`**
- Pages: 09-etale-site.html
- Sentence: - エタールは合成と係数拡大で閉じ、エタール $A$ 代数の間の射もエタールで、3 はグロタンディーク位相を定める。$A=K$ が体なら、エタール $K$ 代数は有限エタール代数（\ref{fld:etale-algebra}）の直積と同じで、3 は上の小エタールサイトと同値な層の圏を与える（標準エタール $K$ 代数は、$f$ が分離的な部分の積 $K[x]/(f)$ の局所化で、\ref{fld:etale-equivalent} のエタール代数）。
  - `grp:direct-product`: NG — Here "直積" refers to a direct product of finite étale algebras (a ring-theoretic product), not the direct product of groups defined in the card.
  - `set:cartesian-product`: NG — Here "直積" refers to a product of finite étale algebras (a categorical/algebraic product), not the set-theoretic Cartesian product of two sets defined in the card.
  - `mod:direct-sum`: OK

## 「稠密」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `cat:dense-functor` → **no candidate fits**
- Pages: 05-sites.html, 07-giraud-axioms.html, 08-giraud-theorem.html
- Sentence: 部分前層 $A\subset B$ が **$J$ 稠密**であるとは、各 $b\in B(d)$ について $S_{b}\defeq\{g:e\to d : b\cdot g\in A(e)\}$ が $J(d)$ に入ることをいう。このとき、$J$ 層 $Q$ について、制限 $\widehat{\mathbf{C}}(B,Q)\to\widehat{\mathbf{C
  - `cat:dense-functor`: NG — This is a different notion: a subpresheaf being dense with respect to a Grothendieck topology $J$, not a functor being dense in the sense of having a colimit representation.
  - `set:dense-set`: NG — This is a different notion: density of a subpresheaf with respect to a Grothendieck topology \(J\), not density of a subset of a partial order.
  - `set:separable-subset`: NG — This is a different notion: "J-dense" for a subpresheaf is defined via a Grothendieck topology J, not topological density in a space.
  - `pt:tree-forcing`: NG — This is a different notion: a subsheaf being dense with respect to a Grothendieck topology \(J\), not density of a subset of forcing conditions in a poset.
  - `top:separable-space`: NG — This is a different notion: "J-dense" in presheaf/topology (a sieve/matching-family condition), not the topological density $\overline{D}=X$.

## 「結合子」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `cat:monoidal-category` → **no candidate fits**
- Pages: 04-presheaf-heyting.html
- Sentence: **高い視点から：論理結合子は随伴.** ローヴェアは、論理結合子と量化子が随伴として特徴づけられることを指摘した。$\wedge$ は対角の右随伴、$\Rightarrow$ は $-\wedge A$ の右随伴、$\exists$ と $\forall$ は代入（引き戻し）の左右の随伴である。前層のトポスでは、これらが具体的な集合の操作として
  - `cat:monoidal-category`: NG — Here "結合子" means logical connective, not the associativity isomorphism of a monoidal category.
  - `logic:weak-reduction`: NG — Here "論理結合子" means logical connective, not a variable-free CL term (combinator).

## 「被覆」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `cat:continuous-gsets` → **no candidate fits**
- Pages: 09-etale-site.html
- Sentence: 体 $K$ の有限エタール代数（\ref{fld:etale-algebra}）を「$\operatorname{Spec}K$ 上の被覆空間」とみなし、射の族が「全射的」であるときに被覆とすると、サイト（**小エタールサイト**）が得られる。グロタンディークのガロア理論（\ref{fld:grothendieck-galois}）によりこのサイトは有限な連続 $G$ 集合の圏（$G=\operatorname{Gal}(\Omega/K)$）と同値で、その上の層の圏は**連続な $G$ 集合の圏**と
  - `cat:continuous-gsets`: NG — This use of 被覆 refers to a covering family in the small étale site (surjective families of étale morphisms), not the definition card's notion of a sieve covering in the full subcategory of finite continuous G-sets.
  - `at:covering`: NG — This is a Grothendieck topology covering (a family of morphisms), not a covering map in the sense of the card's definition.

## 「転置」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `cat:adjunction` → **no candidate fits**
- Pages: 01-presheaf-topos.html, 03-topos-basics.html
- Sentence: **Step 3（転置の構成）.** $\varphi\colon R\times P\to Q$ について、$r\in R(c)$ に対し
  - `cat:adjunction`: NG — Here 転置 refers to the transpose/currying of a map $\varphi\colon R\times P\to Q$ (a bijection between $\mathbf{Set}(R\times P,Q)$ and $\mathbf{Set}(R,Q^{P})$), not the adjunction transpose $\varphi(f)$ between hom-sets $\mathbf{A}(Fx,a)\cong\mathbf{X}(x,Ga)$ defined in the card.
  - `lin:dual-space`: NG — Here "転置" refers to transposing a map of the form R×P→Q (currying/adjunction), not the dual-space transpose f*:W*→V* defined in the card.

## 「逆像」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `cat:inverse-image` → **fits: `set:function`**
- Pages: 01-presheaf-topos.html, 04-presheaf-heyting.html
- Sentence: )$ で、すべての $s\in\Omega(1)$ について $a^{\ast}(u(s))=v(a^{\ast}s)$ を満たす組である。$\Omega(0)=\{\emptyset,\{1_{0}\}\}$ で、$a^{\ast}$ による\term[逆像]{set:function}は $\emptyset$ の逆像が $\{\emptyset\}$（1 点）、$\{1_{0}\}$ の逆像が $\{\{a\},t_{1}\}$（2 点）。$v$ を決めると、$u(\emptyset)$ は $v(\emptyset)$ の逆像から、$u(\{a\})$ と $u(t_{1})$ は $v(\{1_{0}\})$ の逆像から自由に
  - `cat:inverse-image`: NG — This "逆像" refers to the set-theoretic preimage of a function (linked to set:function), not the sheaf-theoretic inverse image functor defined in the card.
  - `set:function`: OK

## 「連続」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `cat:preserve-limits` → **no candidate fits**
- Pages: 05-sites.html, 09-etale-site.html
- Sentence: **位相の例.** スキームのエタール位相（エタール射の全射族で覆う）、平坦位相、群の作用の圏の位相などがある。副有限群 $G$ について、連続な $G$ 集合の圏はある位相の層の圏と同値で、体 $k$ の有限エタール代数の圏（\ref{fld:grothendieck-galois}）の反対圏に適切な位相を入れたサイトの層の圏は、$\operatorname{Gal}(k^{\mathrm{sep}}/k)$ の連続な作用をもつ集合の圏と同値になる（グロタン
  - `cat:preserve-limits`: NG — Here "連続" means continuous (as in continuous action of a profinite group), not the category-theoretic notion of a functor preserving all small limits.
  - `comp:monotone-continuous`: NG — Here "連続" refers to continuity of a group action on a set (a topological/limit condition), not the fixed-point monotone/continuous map definition on power sets.
  - `cx:limit-continuity`: NG — Here "連続" refers to continuity of a group action on a set (a topological/group-theoretic notion), not continuity of a complex function as defined in the card.
  - `top:continuous`: NG — Here "連続" refers to a continuous action of a profinite group (with its profinite topology), not a continuous map between topological spaces as defined in the card.

## 「頂点」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `cat:simplex-edges` → **no candidate fits**
- Pages: 02-sheaf-topos.html
- Sentence: $\mathbf{Sh}(X)$ は充満部分圏なので、$\widehat{\mathcal{O}(X)}$ での極限錐で頂点が層のものは $\mathbf{Sh}(X)$ でも極限錐である。
  - `cat:simplex-edges`: NG — Here "頂点" means the apex (vertex) of a limit cone in category theory, not a vertex of a simplicial set as defined in the card.
  - `surf:vertex`: NG — This "頂点" means the vertex (apex) of a cone in category theory, not a vertex of a plane curve defined by $\kappa'(t)=0$.

## 「定義域」 in 02-algebra/01-linear-algebra/01-vector-spaces
- Default: `set:relation` → **no candidate fits**
- Pages: 02-linear-maps.html
- Sentence: 線形写像は基底の行き先だけで決まり、基底を固定すると行列と一対一に対応して、合成は行列の積になる。核と像の次元の和は定義域の次元（**次元定理**）で、これから有限次元では単射・全射・全単射が同値になる。商空間と双対空間を定義し、転置写像と零化空間の次元から「行の階数＝列の階数」を導く。
  - `set:relation`: NG — Here 定義域 means the domain of a linear map, not the domain of a relation as defined in the card.
  - `logic:rm-continuous-code`: NG — Here "定義域" refers to the domain of a linear map between vector spaces, not the domain of a continuous real function as defined in the card.

## 「準同型」 in 02-algebra/01-linear-algebra/01-vector-spaces
- Default: `grp:homomorphism` → **fits: `mod:submodule-homomorphism`**
- Pages: 01-spaces-bases.html
- Sentence: - 体 $k$ 上の**ベクトル空間**とは $k$ 加群のこと（\ref{mod:module}）。部分加群を**部分空間**、加群の準同型を**線形写像**という。部分加群・生成された部分加群・直和・同型定理は \ref{mod:submodule-basic}, \ref{mod:generated-submodule}, \ref{mod:direct-sum}, \ref{mod:isomorphism-theorems}。
  - `grp:homomorphism`: NG — Here "準同型" refers to a module homomorphism (linear map), not a group homomorphism as defined in the card.
  - `cat:t-algebra`: NG — Here "準同型" refers to homomorphisms of modules/vector spaces, not homomorphisms of T-algebras as defined in the card.
  - `ring:homomorphism`: NG — Here "準同型" refers to a homomorphism of modules (linear map), not a ring homomorphism as defined in the card.
  - `mod:submodule-homomorphism`: OK

## 「転置」 in 02-algebra/01-linear-algebra/01-vector-spaces
- Default: `lin:dual-space` → **no candidate fits**
- Pages: 02-linear-maps.html
- Sentence: 可換環 $A$ 上の自由加群 $A^{n}\to A^{m}$ も行列で表され、\ref{lin:matrix-correspondence}・\ref{lin:change-of-basis} の変換公式・双対の転置（3）は同じ証明で成り立つ。しかし次元定理は成り立たない（$\mathbb{Z}\xrightarrow{2}\mathbb{Z}$ は単射で全射でない）。PID 上の行列の同値類は階数ではなく**単因子**で分類される（\ref{mod:smith-normal-form}）。また有限生成加群の自己準同型については「
  - `lin:dual-space`: NG — This "転置" refers to the transpose of a matrix over a commutative ring (dual/transpose in the module setting), not the transpose of a linear map between vector spaces defined in the card.
  - `cat:adjunction`: NG — Here 転置 refers to the transpose of a matrix/linear map, not the adjunction transpose φ(f) of a morphism under F ⊣ G.

## 「ノルム」 in 02-algebra/01-linear-algebra/02-determinants
- Default: `lin:inner-product` → **fits: `calc:norm`**
- Pages: 01-definitions.html
- Sentence: 用（基底によらない定義）、(D4) 第 1 列についての余因子展開による帰納的定義、の同値性を示す。(D3) から乗法性 $\det(AB)=\det A\det B$ が直ちに従う。体上では (D5) 掃き出し法のピボットの積、(D6) 乗法的で基本行列に対する値が決まった関数、とも一致する。固有値・外積代数・体積・ノルムによる定義は後の頁で扱う（最後の注意に一覧）。
  - `lin:inner-product`: NG — ノルム is only mentioned as a later definition of determinant, not defined by the inner-product card.
  - `comp:pi11-norm`: NG — Here "ノルム" refers to a vector/matrix norm (as in determinant defined via volume and norm), not the computability-theoretic norm function from a set of naturals to ordinals.
  - `calc:norm`: OK

## 「有限生成」 in 02-algebra/01-linear-algebra/02-determinants
- Default: `grp:generated-subgroup` → **fits: `ring:generated-ideal-def`**
- Pages: 01-definitions.html, 02-properties.html
- Sentence: - **自由であること**：\ref{lin:det-endomorphism} で $\operatorname{Alt}^{n}(M)$ が階数 1 の自由加群であることに使う。有限生成射影加群では、局所的に自由なので同じ定義が局所的に通る。
  - `grp:generated-subgroup`: NG — Here "有限生成" modifies a module (有限生成射影加群), not a group, so it is not the group-theoretic notion defined in the card.
  - `ring:generated-ideal-def`: OK

## 「生成元」 in 02-algebra/01-linear-algebra/02-determinants
- Default: `grp:generated-subgroup` → **no candidate fits**
- Pages: 03-minors.html
- Sentence: の集合が同じでなければ $0$（同じでない行に対応する列が $0$）、同じなら $\prod_{i\in I}d_{i}$。$d_{1}\mid d_{2}\mid\cdots$ から、これらはすべて $d_{1}\cdots d_{k}$ の倍数で、$I=[k]$ でちょうど $d_{1}\cdots d_{k}$。生成元の比 $d_{k}=(d_{1}\cdots d_{k})/(d_{1}\cdots d_{k-1})$ は単元倍を除いて決まる（$d_{1}\cdots d_{k-1}\neq0$ のとき；$0$ ならそれ以降はすべて $0$）。
  - `grp:generated-subgroup`: NG — Here "生成元" refers to the generators $d_{i}$ of an ideal/module (invariant factors), not generators of a group as defined in the card.
  - `grp:presentation`: NG — Here "生成元" refers to generators of an ideal/module in a decomposition context, not the generators of a group presentation as defined in the card.

## 「転置」 in 02-algebra/01-linear-algebra/02-determinants
- Default: `lin:dual-space` → **no candidate fits**
- Pages: 01-definitions.html, 02-properties.html, 03-minors.html
- Sentence: 行列式は、列について多重線形で、同じ列が二つあれば 0 になり、単位行列で 1 になる、という三つの性質だけでただ一つに決まる。転置しても値は変わらない。
  - `lin:dual-space`: NG — Here "転置" refers to matrix transpose, not the transpose of a linear map between dual spaces as defined in the card.
  - `cat:adjunction`: NG — This "転置" refers to matrix transpose, not the adjunction's transposition of a morphism.

## 「互いに素」 in 02-algebra/01-linear-algebra/03-eigen
- Default: `grp:gcd` → **fits: `pt:prime`**
- Pages: 02-jordan.html
- Sentence: **Step 1（分解）.** $(t-\lambda_{i})^{m_{i}}$ はどの二つも互いに素なので、\ref{lin:kernel-decomposition} とケーリー–ハミルトンから $k^{n}=\ker\chi_{X}(X)=\bigoplus\tilde{V}_{i}$。$X$ は $(X-\lambda_{i})^{m_{i}}$ と可換なので $\tilde{V}_{i}$ を保ち、定義から 
  - `grp:gcd`: NG — Here "互いに素" refers to polynomials being coprime (sharing no common factor), not integers being relatively prime as defined in the card.
  - `pt:prime`: OK

## 「有限生成」 in 02-algebra/01-linear-algebra/03-eigen
- Default: `ring:generated-ideal-def` → **fits: `mod:generated-submodule`**
- Pages: 01-eigenvalues.html
- Sentence: **前提を弱めると.** ケーリー–ハミルトンは、有限生成加群の自己準同型についての「行列式のトリック」（\ref{ring:determinant-trick}）に一般化され、中山の補題の証明に使われる。固有多項式の係数 $e_{k}(X)$ は $\operatorname{tr}\Lambda^{k}X$ に等しい（\ref{lin:page-exterior}）。
  - `ring:generated-ideal-def`: NG — Here "有限生成" modifies a module (有限生成加群), not an ideal as defined in the card.
  - `grp:generated-subgroup`: NG — Here "有限生成" modifies a module (有限生成加群), not a group, so it is not the group-theoretic notion defined in the card.
  - `mod:generated-submodule`: OK

## 「有限生成」 in 02-algebra/01-linear-algebra/03-eigen
- Default: `grp:generated-subgroup` → **fits: `mod:generated-submodule`**
- Pages: 02-jordan.html
- Sentence: - PID 上の有限生成加群の構造定理（単因子形・素因子形とその一意性）、スミス標準形、$k[t]$ 加群と相似の対応は \ref{mod:pid-structure}, \ref{mod:pid-structure-unique}, \ref{mod:smith-normal-form}, \ref{mod:prob-k-x-modules
  - `grp:generated-subgroup`: NG — Here "有限生成" modifies modules over a PID, not groups, so it is a different notion (finitely generated module) than the group-theoretic definition on the card.
  - `ring:generated-ideal-def`: NG — Here "有限生成" modifies 加群 (modules), not ideals, so it is a different notion from the card's finitely generated ideal.
  - `mod:generated-submodule`: OK

## 「生成元」 in 02-algebra/01-linear-algebra/03-eigen
- Default: `grp:generated-subgroup` → **no candidate fits**
- Pages: 01-eigenvalues.html, 02-jordan.html, 03-functions.html
- Sentence: 体 $k$ 上の $X\in M_{n}(k)$ について、$\{f\in k[t] : f(X)=0\}$ は $0$ でないイデアルで、そのモニックな生成元 $\mu_{X}$ を**最小多項式**という。
  - `grp:generated-subgroup`: NG — Here "生成元" means a generator of an ideal in a polynomial ring, not a generating set of a group as defined in the card.
  - `grp:presentation`: NG — Here "生成元" refers to a generator of an ideal in a polynomial ring, not a generator of a group presentation.

## 「転置」 in 02-algebra/01-linear-algebra/03-eigen
- Default: `lin:dual-space` → **no candidate fits**
- Pages: 02-jordan.html, 03-functions.html, 04-exercises.html
- Sentence: **Step 3（3）.** $tI-{}^{t}X={}^{t}(tI-X)$ で、転置しても小行列式の集合は変わらない（\ref{lin:det-characterization.4}）ので、行列式イデアルが一致する。
  - `lin:dual-space`: NG — Here "転置" refers to the transpose of a matrix (${}^{t}X$), not the transpose of a linear map $f^{*}:W^{*}\to V^{*}$ defined in the card.
  - `cat:adjunction`: NG — Here "転置" refers to matrix transpose, not the adjunction's transposed morphism φ(f).

## 「連続」 in 02-algebra/01-linear-algebra/03-eigen
- Default: `top:continuous` → **no candidate fits**
- Pages: 03-functions.html
- Sentence: **似た定理.** ゲルシュゴリンの定理は列についても成り立ち（転置）、各連結成分に含まれる固有値の個数は円板の個数に等しいことも知られている（連続性による議論）。
  - `top:continuous`: NG — Here "連続性" refers to the continuous dependence of eigenvalues on matrix entries (a continuity argument), not the topological notion of a continuous map between topological spaces.
  - `comp:monotone-continuous`: NG — Here "連続性" refers to continuity of eigenvalues as functions of matrix entries, not the fixed-point continuity of set functions defined in the card.
  - `cx:limit-continuity`: NG — Here "連続性" refers to the continuous dependence of eigenvalues on matrix entries (a continuity argument), not the definition of a function being continuous at a point as in the card.

## 「正規」 in 02-algebra/01-linear-algebra/04-forms
- Default: `lin:adjoint` → **no candidate fits**
- Pages: 02-inner-product.html, 03-exercises.html
- Sentence: langle e_{i},v\rangle e_{i}$ は $V=W\oplus W^{\perp}$ に沿った射影で、$\|v-P_{W}v\|<\|v-w\|$（$w\in W$, $w\neq P_{W}v$）。$W=\operatorname{Col}(X)$ なら $P_{W}v=Xc$ の $c$ は**正規方程式** $X^{*}Xc=X^{*}v$ の解。
  - `lin:adjoint`: NG — Here 正規 refers to the normal equations, not a normal operator as defined in the card.
  - `set:normal-function`: NG — Here "正規" refers to the normal equations in linear algebra, not a normal (strictly increasing and continuous) class function on the ordinals.
  - `fld:normal`: NG — Here "正規" refers to the normal equations in linear algebra, not a normal field extension.
  - `top:separation-axioms`: NG — Here "正規" is part of "正規方程式" (normal equation) in linear algebra, not the normal/separation axiom for topological spaces.

## 「自己同型」 in 02-algebra/01-linear-algebra/04-forms
- Default: `ring:homomorphism` → **no candidate fits**
- Pages: 01-bilinear.html
- Sentence: 双線形形式は線形写像 $B^{\flat}:V\to V^{*}$ と同じもので、合同 ${}^{t}PGP$ は「$V$ と $V^{*}$ を同時に基底変換する」ことにあたる（相似 $P^{-1}XP$ が $V\to V$ の変換であるのと対照的）。非退化な対称形式の自己同型群が直交群 $\mathrm{O}(B)$、非退化な交代形式の自己同型群がシンプレクティック群 $\mathrm{Sp}_{2m}$ で、古典群の分類はこの二種類（とエルミート形式によるユニタリ群）の形式の分類に帰着する。パフィアンは $\mathrm{Sp}_{2m}\subset\mathrm{SL}_{2m}$（
  - `ring:homomorphism`: NG — Here "自己同型群" refers to automorphisms of a bilinear form (linear maps preserving the form), not ring automorphisms as defined in the card.
  - `grp:homomorphism`: NG — Here "自己同型群" refers to automorphisms of a bilinear/symplectic form (isometries preserving the form), not automorphisms of a group as defined in the card.

## 「連続関数」 in 02-algebra/01-linear-algebra/04-forms
- Default: `calc:function-limit` → **no candidate fits**
- Pages: 02-inner-product.html
- Sentence: もとでの転置である。スペクトル定理は「正規作用素の可換な $*$ 部分環 $\mathbb{C}[X,X^{*}]$ は、固有空間への直交射影で張られる $\mathbb{C}^{r}$ と同型」すなわち有限集合（スペクトル）上の関数環であることを言い、ゲルファント–ナイマルクの定理（可換 C* 環はコンパクト空間上の連続関数環）の有限次元版である。特異値分解は、両側のユニタリ群 $\mathrm{U}(m)\times\mathrm{U}(n)$ による $M_{m\times n}$ の軌道が特異値の列で分類されることを言う。比喩で言えば、正規作用素は直交する方向ごとに独立に伸び縮みする（回転を含む）変換で、一般の変換は特異値分解によっ
  - `calc:function-limit`: NG — Here "連続関数環" means the ring of continuous functions on a compact space, not the real-analysis notion of a continuous function defined on a subset of R.
  - `logic:rm-continuous-code`: NG — Here "連続関数環" means the ring of continuous functions on a compact space, not the specific notion of a continuous function's "sign" (符号) defined in the card.
  - `cx:limit-continuity`: NG — Here "連続関数" refers to continuous functions on a compact space in the Gelfant–Naimark theorem, i.e., the general topological notion of continuous function, not the complex-function continuity at a point defined in the card.

## 「上界」 in 02-algebra/01-linear-algebra/05-multilinear
- Default: `calc:supremum` → **no candidate fits**
- Pages: 03-applications.html
- Sentence: 3. $2\times2$ 行列の積を表すテンソル（$M_{2}\otimes M_{2}\otimes M_{2}$ の元）の階数は $7$ で（ストラッセンの上界とウィノグラードの下界）、これが掛け算 7 回の行列積アルゴリズムを与える。一般の行列積の計算量の指数 $\omega$ の決定は未解決の問題である。
  - `calc:supremum`: NG — Here "上界" refers to an upper bound on the rank of the tensor (a bound on computational complexity), not the order-theoretic upper bound of a subset of a totally ordered set as defined in the card.
  - `set:chain-maximal`: NG — Here "上界" means an upper bound on the rank (an upper estimate), not an upper bound of a subset in a partially ordered set as defined in the card.

## 「対称」 in 02-algebra/01-linear-algebra/05-multilinear
- Default: `lin:bilinear-form` → **no candidate fits**
- Pages: 01-tensor.html, 02-exterior.html, 03-applications.html
- Sentence: テンソル積は、双線形写像という非線形な対象を線形写像に変える普遍的な構成で、圏論的には加群の圏を**対称モノイダル閉圏**（$\operatorname{Hom}$ が右随伴）にする（\ref{ha:tensor-hom-adjunction}）。有限次元ベクトル空間の圏では各対象が双対 $V^{*}$ をもち、$V^{*}\otimes V\to k$（縮約）と $k\to V\otimes V^{*}$（恒等写像）が
  - `lin:bilinear-form`: NG — Here "対称" is part of "対称モノイダル閉圏" (symmetric monoidal closed category), not the symmetry of a bilinear form.
  - `lin:adjoint`: NG — Here「対称」 is part of「対称モノイダル閉圏」 (symmetric monoidal closed category), not the self-adjoint/Hermitian-symmetric operator meaning defined in the card.

## 「有限生成」 in 02-algebra/01-linear-algebra/05-multilinear
- Default: `ring:generated-ideal-def` → **fits: `mod:generated-submodule`**
- Pages: 02-exterior.html
- Sentence: 2. $M$ が有限生成自由なら、$\langle\varphi_{1}\wedge\dots\wedge\varphi_{k},v_{1}\wedge\dots\wedge v_{k}\rangle\defeq\det(\varphi_{i}(v_{j}))$ は完全な対を与え、$\Lambda^{k}(M^{*})\cong(\Lambd
  - `ring:generated-ideal-def`: NG — Here "有限生成" modifies the module $M$ (finitely generated module), not an ideal as defined in the card.
  - `grp:generated-subgroup`: NG — Here "有限生成" modifies a module (有限生成自由), not a group as defined in the card, so it is a different notion.
  - `mod:generated-submodule`: OK

## 「正規」 in 02-algebra/01-linear-algebra/05-multilinear
- Default: `lin:adjoint` → **no candidate fits**
- Pages: 03-applications.html
- Sentence: **Step 2（2）.** 前半は定義、後半は \ref{lin:exterior-basis} の展開 $v_{1}\wedge\dots\wedge v_{k}=\sum_{I}\det X_{I,[k]}e_{I}$ と正規直交性（あるいは $G={}^{t}XX$ とコーシー–ビネ）。
  - `lin:adjoint`: NG — Here「正規」is part of「正規直交性」meaning orthonormality, not the normal operator (f*f=ff*) defined in the card.
  - `set:normal-function`: NG — Here "正規" is part of "正規直交性" (orthonormality) in linear algebra, not the set-theoretic notion of a normal function on ordinals.
  - `fld:normal`: NG — Here "正規" is part of "正規直交性" (orthonormality), not the field-theoretic notion of a normal extension.
  - `top:separation-axioms`: NG — Here "正規" means "orthonormal" (正規直交性), not the normal/separation axiom for topological spaces.

## 「生成元」 in 02-algebra/01-linear-algebra/05-multilinear
- Default: `grp:generated-subgroup` → **fits: `grp:presentation`**
- Pages: 02-exterior.html
- Sentence: **Step 1（1）.** 生成元 $m$, $n$ が可換なので、生成される代数は可換。普遍性は \ref{lin:tensor-algebra} の $\Phi$ が、$B$ が可換なので $m\otimes n-n\otimes m$ を消すことから。
  - `grp:generated-subgroup`: NG — Here "生成元" refers to generators of an algebra (elements m, n generating a commutative algebra), not generators of a group as defined in the card.
  - `grp:presentation`: OK

## 「転置」 in 02-algebra/01-linear-algebra/05-multilinear
- Default: `lin:dual-space` → **no candidate fits**
- Pages: 01-tensor.html
- Sentence: s}(v)w_{s}$ の像は $\langle w_{1},\dots,w_{r}\rangle$ に含まれ、$\varphi_{s}$ が一次独立なので $(\varphi_{s}(v))_{s}$ は $k^{r}$ 全体を動き（$V\to k^{r}$, $v\mapsto(\varphi_{s}(v))$ の転置が単射：\ref{lin:dual-properties}）、像はちょうど $\langle w_{s}\rangle$、階数 $r$。とくに $t\neq0$ なら $\Theta(t)\neq0$ で単射。有限階数の $f$ は、像の基底 $w_{1},\dots,w_{r}$ と $f(v)=\sum\varph
  - `lin:dual-space`: NG — Here "転置" refers to the transpose of a linear map $V\to k^{r}$ (i.e., the dual/transpose map), which matches the card's definition of the transpose $f^{*}$ of a linear map, so it is the same notion.
  - `cat:adjunction`: NG — Here "転置" refers to the transpose of a linear map (a matrix/linear-algebra notion), not the transpose of a morphism under an adjunction as defined in the card.

## 「辞書式順序」 in 02-algebra/01-linear-algebra/05-multilinear
- Default: `set:well-order-sum-product-def` → **no candidate fits**
- Pages: 01-tensor.html
- Sentence: 1. 基底 $b_{i}\otimes c_{j}$（辞書式順序）に関する $f\otimes g$ の行列は**クロネッカー積** $X\otimes Y\defeq(x_{ij}Y)_{i,j}$（$pq\times pq$ のブロック行列）。
  - `set:well-order-sum-product-def`: NG — Here "辞書式順序" refers to an ordering on basis elements used to arrange a matrix, not the lexicographic product order on a product of well-ordered sets defined in the card.
  - `top:double-arrow`: NG — Here "辞書式順序" refers to the lexicographic ordering of index pairs for matrix blocks, not the lexicographic order topology on $[0,1]\times\{0,1\}$ defining the double arrow space.

## 「推移律」 in 02-algebra/02-group-theory/01-groups
- Default: `set:total-order` → **no candidate fits**
- Pages: 03-cosets-lagrange.html
- Sentence: **Step 1（同値関係）.** 反射律：$x^{-1}x=e\in H$。対称律：$x^{-1}y\in H$ なら、部分群は逆元で閉じるので $(x^{-1}y)^{-1}=y^{-1}x\in H$（\ref{grp:group-basic.2}）。推移律：$x^{-1}y\in H$, $y^{-1}z\in H$ なら、積で閉じるので $x^{-1}z=(x^{-1}y)(y^{-1}z)\in H$。
  - `set:total-order`: NG — Here 推移律 refers to transitivity of an equivalence relation (a subgroup coset relation), not the transitivity condition in the definition of a partial order.
  - `set:forcing-poset`: NG — This is the transitivity of an equivalence relation on a group, not the transitivity condition in the definition of a partial order.

## 「推移的」 in 02-algebra/02-group-theory/01-groups
- Default: `grp:faithful-transitive` → **no candidate fits**
- Pages: 07-extensions.html
- Sentence: - 推移的：$S,T\in\mathcal{T}$ について、$a^{m}=d(S,T)^{-1}$ となる $a\in N$ をとる。Step 1 の関係式から $d(aS,T)=d(aS,S)\,d(S,T)=a^{m}d(S,T)=e$、すなわち $a\cdot[S]=[T]$。
  - `grp:faithful-transitive`: NG — This "推移的" refers to a property of a distance/translation action on a building (there exists \(a\) with \(a\cdot[S]=[T]\)), not the group-action definition of transitivity on a set \(X\) given in the card.
  - `logic:relation-properties`: NG — Here "推移的" is used as a label for a step in a distance computation, not as the transitivity property of a relation $R$ on $W$.

## 「閉包」 in 02-algebra/02-group-theory/01-groups
- Default: `top:interior-closure` → **no candidate fits**
- Pages: 04-normal-quotient.html
- Sentence: 2. $\overline{S}\defeq\ang{\{gsg^{-1} : g\in G,\ s\in S\}}$ は $S$ を含む $G$ の正規部分群のうち最小のものである（$S$ の**正規閉包**）。
  - `top:interior-closure`: NG — Here "閉包" refers to the normal closure (smallest normal subgroup containing $S$), not the topological closure of a subset.
  - `logic:ltl-size`: NG — This "正規閉包" is the normal closure of a subset in group theory, not the closure CL(A) of a logical formula defined in the card.
  - `logic:ctl-closure`: NG — This "閉包" refers to the normal closure of a subset in a group, not the CTL closure set CL(A) defined in the card.
  - `set:pred-closure`: NG — This "正規閉包" (normal closure) is the smallest normal subgroup containing $S$, not the set-theoretic closure $\mathrm{cl}(\mathbf{A},x,\mathbf{R})$ defined in the card.

## 「上限」 in 02-algebra/02-group-theory/02-group-actions
- Default: `calc:supremum` → **no candidate fits**
- Pages: 02-class-equation.html
- Sentence:    - 大きさの上限：$\mathcal{C}(x)$ の大きさは $(D_{4}:Z_{D_{4}}(x))$ で、$Z_{D_{4}}(x)$ は $\ang{x}$ と $Z(D_{4})=\{e,r^{2}\}$ を含む。$x=r$ なら $\ang{r}$ は位数 $4$、$x=s$ なら $\{e,s,r^{2},r^{2}s
  - `calc:supremum`: NG — Here "上限" means an upper bound on size in a loose, non-technical sense, not the least upper bound (supremum) of a subset of a totally ordered set as defined in the card.
  - `set:order-dedekind-complete`: NG — Here 上限 means an upper bound on size (a maximum value), not the least upper bound (supremum) defined in the card.
  - `logic:rm-analysis-defs`: NG — Here "上限" means an upper bound on size in group theory, not the least upper bound of a real sequence as defined in the card.

## 「射影」 in 02-algebra/02-group-theory/02-group-actions
- Default: `grp:direct-product` → **no candidate fits**
- Pages: 06-simplicity-an.html
- Sentence: **Step 3（$N\cap A_{n}=\{e\}$）.** 自然な射影 $S_{n}\to S_{n}/A_{n}$ を $N$ に制限したものは、核が $N\cap A_{n}=\{e\}$ なので単射で、$\abs{N}\le\abs{S_{n}/A_{n}}=2$。$\abs{N}=2$ なら、位数 $2$ の正規部分群は中心に含まれる（\ref{grp:prob-normal-o
  - `grp:direct-product`: NG — Here "射影" means the natural quotient map $S_{n}\to S_{n}/A_{n}$, not the coordinate projection $p_{i}$ defined in the card.
  - `cat:product`: NG — Here "射影" means the quotient map to a coset space, not the projection morphisms of a categorical product.
  - `cat:category-of-elements`: NG — This "射影" is the natural quotient projection $S_{n}\to S_{n}/A_{n}$, not the projection $\pi_{P}\colon\int P\to\mathbf{C}$ from the category of elements.

## 「ファイバー積」 in 02-algebra/02-group-theory/03-sylow
- Default: `grp:subdirect-product` → **no candidate fits**
- Pages: 05-subgroups-of-products.html
- Sentence: である（商群 $Q\defeq G_{2}/N_{2}$ 上の**ファイバー積**）。
  - `grp:subdirect-product`: NG — ファイバー積 (fiber product) is a categorical construction, not the same notion as 部分直積 (subdirect product) defined by the projection-surjectivity condition.
  - `cat:product`: NG — In this sentence "fiber product" refers to a fiber product of groups over a quotient group, which is a special case of the categorical pullback defined in the card, so it matches.

## 「上限」 in 02-algebra/02-group-theory/03-sylow
- Default: `calc:supremum` → **no candidate fits**
- Pages: 06-preservation-table.html
- Sentence: 15. 可解群の無限直積は、成分の導来長が有界なら可解だが、有界でなければ可解でない（\ref{grp:gpt-solvable-products}）。導来長が上限なく大きくなる有限可解群の列がある（\ref{grp:fact-derived-length}）。
  - `calc:supremum`: NG — Here "上限" means an upper bound on the sequence of derived lengths (a supremum/limit notion), not the least upper bound of a subset as defined in the card.
  - `set:order-dedekind-complete`: NG — Here「上限」means an upper bound (a supremum value that grows without bound), not the least-upper-bound notion defined in the Dedekind-completeness card.
  - `logic:rm-analysis-defs`: NG — Here "上限" means an upper bound on the derived lengths (a supremum/unbounded growth), not the least upper bound of a real sequence as defined in the card.

## 「有界」 in 02-algebra/02-group-theory/03-sylow
- Default: `calc:supremum` → **no candidate fits**
- Pages: 06-preservation-table.html
- Sentence: 15. 可解群の無限直積は、成分の導来長が有界なら可解だが、有界でなければ可解でない（\ref{grp:gpt-solvable-products}）。導来長が上限なく大きくなる有限可解群の列がある（\ref{grp:fact-derived-length}）。
  - `calc:supremum`: NG — Here "有界" refers to the boundedness of the derived lengths of group components, not the order-theoretic boundedness (upper/lower bounds in a totally ordered set) defined in the card.
  - `logic:rm-analysis-defs`: NG — Here "有界" refers to the boundedness of the derived lengths of the group factors, not to a bounded real sequence as defined in the card.

## 「生成元」 in 02-algebra/02-group-theory/03-sylow
- Default: `grp:generated-subgroup` → **fits: `grp:presentation`**
- Pages: 02-sylow-applications.html, 04-solvable-nilpotent.html, 05-subgroups-of-products.html, 06-preservation-table.html
- Sentence: **Step 6（3：存在）.** $U$ の生成元 $u$ をとり、$\theta(k)\defeq u^{k}$ とすると単射準同型 $\Z/p\Z\to\Aut(\Z/q\Z)$ で、半直積 $\Z/q\Z\rtimes_{\theta}\Z/p\Z$ は位数 $pq$ の非可換群（\ref{grp:semidirect-group}）。$\Z/pq\Z$ は可換
  - `grp:generated-subgroup`: NG — Here "生成元" means a generator (single element) of the group $U$, whereas the card defines "生成元の集合" as a generating set of $G$; a single element is a special case, but the card's term is the set of generators, so the usage differs.
  - `grp:presentation`: OK

## 「上限」 in 02-algebra/02-group-theory/04-finite-abelian
- Default: `calc:supremum` → **no candidate fits**
- Pages: 02-minimal-decomposition.html
- Sentence: **Step 4（上限 $t\le r$）.** 同じ巡回分解に \ref{grp:p-rank-count} を使うと $r_{p}(A)=\#\{i : p\mid n_{i}\}$。各 $n_{i}>1$ は少なくとも一つの素因数をもつので、$i$ ごとに素因数の個数 $\omega(n_{i})\ge 1$ を数えて
  - `calc:supremum`: NG — Here "上限" is used as a bound on a step/index (an upper limit in a counting argument), not the least upper bound of a subset of an ordered set.
  - `set:order-dedekind-complete`: NG — Here「上限」is used as an upper bound (bound on a value), not the least upper bound (supremum) defined in the card.
  - `logic:rm-analysis-defs`: NG — Here "上限" means an upper bound (of a sum/count), not the least upper bound of a real sequence as defined in the card.

## 「有限生成」 in 02-algebra/02-group-theory/04-finite-abelian
- Default: `grp:generated-subgroup` → **fits: `ring:generated-ideal-def`**
- Pages: 01-structure.html, 02-minimal-decomposition.html
- Sentence: > 環論（単項イデアル整域上の加群の構造定理）を使わず、群論だけで証明した。有限生成アーベル群の場合は補足で述べる。
  - `grp:generated-subgroup`: NG — Here "有限生成" modifies abelian groups (finitely generated abelian groups), not the group-theoretic notion of a finitely generated group defined in the card.
  - `ring:generated-ideal-def`: OK

## 「次元」 in 02-algebra/02-group-theory/04-finite-abelian
- Default: `lin:dimension` → **no candidate fits**
- Pages: 01-structure.html, 02-minimal-decomposition.html
- Sentence: e^{2\pi ix}$ は $\Q/\Z$ から $\mathbb{C}^{\times}$ の有限位数の元（1 の冪根）全体への同型なので、$\hat A$ は $\Hom(A,\mathbb{C}^{\times})$（有限群 $A$ の像は有限位数の元からなる）と同じものである。表現論ではこちらの形で使う（1 次元の表現）。
  - `lin:dimension`: NG — This "次元" refers to the dimension of a representation (1-dimensional representation), not the dimension of a vector space as defined in the card.
  - `cat:trace-dimension`: NG — Here "次元" refers to the dimension of a representation (1-dimensional representation), not the categorical dimension defined via trace in the card.
  - `ring:krull-dimension`: NG — Here "次元" refers to the dimension of a representation (1-dimensional representation), not the Krull dimension of a ring.
  - `ag:dimension`: NG — Here "1 次元の表現" means a one-dimensional representation (vector-space dimension), not the Krull dimension of a topological space defined in the card.

## 「上限」 in 02-algebra/02-group-theory/05-infinite-abelian
- Default: `calc:supremum` → **no candidate fits**
- Pages: 02-divisible.html
- Sentence: **Step 2（2）.** $H\le P$ とする。$H$ に属する $b_{n}$ の倍数の位数に上限がなければ、各 $n$ について $H$ は位数 $p^{k}\ge p^{n}$ の元 $x$ を含む。$x\in\ang{b_{k}}$ で位数 $p^{k}$ なので $x$ は巡回群 $\ang{b_{k}}$ を生成し（\ref{grp:subgroups-cyclic.2}：位数 $p^{k}$ の部分群は
  - `calc:supremum`: NG — Here "上限" refers to an upper bound on the orders (a bound in the sense of unboundedness), not the least upper bound (supremum) of a subset as defined in the card.
  - `set:order-dedekind-complete`: NG — Here 上限 refers to the supremum of a set of orders (a least upper bound in a general sense), not specifically the Dedekind-completeness property of a totally ordered set defined in the card.
  - `logic:rm-analysis-defs`: NG — Here 上限 refers to the supremum of a set of orders (a set of natural numbers), not the supremum of a real sequence as defined in the card.

## 「位数」 in 02-algebra/02-group-theory/05-infinite-abelian
- Default: `grp:abelian-group` → **fits: `grp:element-order`**
- Pages: 01-free-abelian.html, 02-divisible.html, 04-pure-bounded.html, 05-ext-whitehead.html
- Sentence: - 元の位数は \ref{grp:element-order}。位数有限の元を**捩れ元**という。
  - `grp:abelian-group`: NG — This "位数" refers to the order of an element, not the order (cardinality) of a group as defined in the card.
  - `grp:element-order`: OK

## 「有界」 in 02-algebra/02-group-theory/05-infinite-abelian
- Default: `calc:supremum` → **no candidate fits**
- Pages: 04-pure-bounded.html
- Sentence: 直和因子は「どの整数で割れるかを、部分群の中で判定しても群全体で判定しても同じ」という性質をもつ。この性質だけを取り出したのが**純部分群**で、直和因子の一般化である。このページでは、純部分群を道具にして、元の位数が有界なアーベル群は巡回群の直和であること（\ref{grp:bounded-structure}）、有界な純部分群は直和因子であること（\ref{grp:pure-bounded-summand}）を示す。応用として、捩れ部分群が直和因子にならない例（\ref{grp:torsion-not-summand}）を作る。最後
  - `calc:supremum`: NG — Here "有界" refers to bounded order of group elements, not boundedness of a subset in an ordered set as defined in the card.
  - `logic:rm-analysis-defs`: NG — Here "有界" modifies an abelian group (bounded exponent), not a real sequence as in the card's definition.

## 「連続」 in 02-algebra/02-group-theory/05-infinite-abelian
- Default: `top:continuous` → **no candidate fits**
- Pages: 05-ext-whitehead.html
- Sentence: 濃度 $\aleph_{1}$ の群 $A$ を、可算部分群の連続な増大列 $A_{0}\subseteq A_{1}\subseteq\cdots$（長さ $\omega_{1}$）で尽くす。W 群の可算部分群は自由（\ref{grp:fact-stein}）なので、問題は「各段の自由な群をどう貼り合わせるか」にある。$V=L$ のもとでは、◇ 型の原理（\ref{set:page
  - `top:continuous`: NG — Here "連続" means continuous (order-theoretically, an increasing continuous chain), not topological continuity of a map between topological spaces.
  - `comp:monotone-continuous`: NG — Here "連続な増大列" means a continuous increasing sequence (each stage is the union of earlier ones), not continuity of a function between power sets as defined in the card.
  - `cx:limit-continuity`: NG — Here "連続" means "continuous" in the sense of an increasing continuous chain of subgroups (a set-theoretic/order-theoretic notion), not continuity of a complex function as defined in the card.

## 「位数」 in 02-algebra/02-group-theory/06-presentations
- Default: `grp:abelian-group` → **no candidate fits**
- Pages: 01-free-groups.html, 02-presentations.html
- Sentence: 等写像なので互いに逆（\ref{grp:homomorphism-basic.6}）。別証明：$F(X)\cong F(Y)$ なら可換化も同型で $\Z^{\abs{X}}\cong\Z^{\abs{Y}}$、$2$ で割ると $(\Z/2\Z)^{\abs{X}}\cong(\Z/2\Z)^{\abs{Y}}$ で位数を比べて $\abs{X}=\abs{Y}$。
  - `grp:abelian-group`: NG — Here "位数" refers to the cardinality (order) of the sets $X$ and $Y$, not the order of a group as defined in the card.
  - `grp:element-order`: NG — Here "位数" refers to the cardinality (order) of a group, not the order of an element as defined in the card.
  - `cx:isolated-singularity`: NG — Here "位数" means the cardinality (order) of a group, not the order of a pole as defined in the card.
  - `cx:elliptic-function`: NG — Here 位数 means the cardinality (order) of a group, not the number of poles of an elliptic function.

## 「射影」 in 02-algebra/02-group-theory/06-presentations
- Default: `grp:direct-product` → **no candidate fits**
- Pages: 02-presentations.html
- Sentence: - 正規部分群・正規閉包・剰余群・自然な射影は \ref{grp:normal-subgroup}, \ref{grp:normal-closure}, \ref{grp:quotient-group}。準同型・生成元で決まること・分解定理・第一同型定理は \ref{grp:homomorphism}, \ref{grp:homomorphism-basic},
  - `grp:direct-product`: NG — Here "射影" refers to the natural projection map from a group to a quotient group, not the coordinate projection $p_{i}$ defined in the card.
  - `cat:product`: NG — Here "射影" refers to the natural projection map from a group to its quotient group, not the projection morphisms of a categorical product.
  - `cat:category-of-elements`: NG — This "射影" refers to the natural projection in group theory (quotient groups), not the projection functor from a category of elements.

## 「閉包」 in 02-algebra/02-group-theory/06-presentations
- Default: `top:interior-closure` → **no candidate fits**
- Pages: 02-presentations.html
- Sentence: 群を「生成元」と、それらが満たすべき「関係式」で指定する方法を**群の表示**という。形式的には、自由群 $F(X)$（\ref{grp:free-group}）を、関係式の集合 $R$ の正規閉包で割った剰余群 $\ang{X\mid R}$ として定義する（\ref{grp:presentation}）。**フォン・ディックの定理**（\tref{grp:von-dyck}）は、生成元の行き先が関係式を満たしさえすれば準同型が作れることを保証する。これを使うと、ある群がある表示をもつことを「表示から作った群の
  - `top:interior-closure`: NG — Here "閉包" refers to the normal closure of a set of relations in a group, not the topological closure of a subset.
  - `logic:ltl-size`: NG — This "閉包" is the normal closure of a set of relations in a group, not the closure CL(A) of a logical formula defined in the card.
  - `logic:ctl-closure`: NG — This “閉包” is the normal closure (normal subgroup generated by relations) in group theory, not the modal-logic closure set CL(A) defined in the card.
  - `set:pred-closure`: NG — This "閉包" is the normal closure (normal subgroup generated by relations), not the transitive closure cl(A,x,R) defined in the card.

## 「ノルム」 in 02-algebra/02-group-theory/07-representations
- Default: `calc:norm` → **no candidate fits**
- Pages: 05-integrality.html
- Sentence: - ガロア拡大のノルムが共役の積であることは \ref{fld:norm-trace-embeddings}、円分体 $\Q(\zeta_{m})/\Q$ がガロア拡大であることは \ref{fld:cyclotomic-galois}。
  - `calc:norm`: NG — This "ノルム" is the field norm of a Galois extension (product of conjugates), not the vector-space norm defined in the card.
  - `comp:pi11-norm`: NG — This "ノルム" is the field-theoretic norm (product of conjugates), not a function from a set of naturals to ordinals as defined in the card.

## 「位数」 in 02-algebra/02-group-theory/07-representations
- Default: `grp:abelian-group` → **fits: `grp:element-order`**
- Pages: 02-characters.html, 03-character-tables.html, 04-induced.html, 05-integrality.html
- Sentence: 2（2）.** $\mathbb{C}$ は代数閉体なので $\rho(g)$ は上三角化でき、対角成分 $\lambda_{1},\dots,\lambda_{n}$（$n=\dim V$）が固有多項式の根（重複度込み）で、$\chi(g)=\sum\lambda_{j}$。$g^{m}=1$（$m$ は $g$ の位数）なので $\rho(g)^{m}$ は単位行列で、上三角行列の冪の対角成分 $\lambda_{j}^{m}$ は $1$。よって $\lvert\lambda_{j}\rvert=1$ で、三角不等式から $\lvert\chi(g)\rvert\le n$。
  - `grp:abelian-group`: NG — Here "位数" means the order of a group element (the least $m$ with $g^{m}=1$), not the order $\abs{G}$ of a group as defined in the card.
  - `grp:element-order`: OK

## 「基底」 in 02-algebra/02-group-theory/07-representations
- Default: `grp:free-abelian` → **fits: `mod:free-module`**
- Pages: 01-representations.html, 02-characters.html, 03-character-tables.html, 04-induced.html, 05-integrality.html
- Sentence: 表現 $V$ は $k[G]$ 加群で（\ref{mod:group-ring-modules}）、表現の準同型・部分表現・既約表現は、それぞれ $k[G]$ 準同型・部分加群・単純加群のことである。したがって環と加群の一般論がそのまま使える。$V$ の基底をとれば $\rho(g)$ は行列になり、表現は群準同型 $G\to\GL_{n}(k)$ である（基底の取り替えは同値な表現を与える）。
  - `grp:free-abelian`: NG — Here "基底" means a basis of the vector space $V$ over $k$, not a basis of an abelian group as a free abelian group.
  - `mod:free-module`: OK

## 「射影」 in 02-algebra/02-group-theory/07-representations
- Default: `grp:direct-product` → **no candidate fits**
- Pages: 02-characters.html
- Sentence: 表現 $V$ について $e\defeq\frac{1}{\lvert G\rvert}\sum_{g\in G}\rho(g)$ は $V$ から $V^{G}$ への射影（$e^{2}=e$、像は $V^{G}$）で、
  - `grp:direct-product`: NG — Here "射影" means an idempotent linear projection onto the invariant subspace, not the coordinate projection map defined in the card.
  - `cat:product`: NG — This "射影" means an idempotent linear projection onto invariants, not the projection morphisms of a categorical product.
  - `cat:category-of-elements`: NG — Here "射影" means an idempotent linear projection onto a fixed-point subspace, not the projection functor from a category of elements.

## 「指標」 in 02-algebra/02-group-theory/07-representations
- Default: `grp:dual-group` → **fits: `rep:character`**
- Pages: 01-representations.html
- Sentence: }k\nmid\lvert G\rvert$ ならすべての表現は既約表現の直和に分かれる。このページでは表現の基本的な例と、直和・テンソル積・双対・$\Hom$ という構成を定義し、シューアの補題を表現の言葉で述べ直す。次のページ（\ref{rep:page-characters}）では、表現を「トレースの関数」である指標で調べる。
  - `grp:dual-group`: NG — Here "指標" means the character (trace function) of a representation, not a homomorphism to $\Q/\Z$ as in the card.
  - `rep:character`: OK

## 「推移的」 in 02-algebra/02-group-theory/07-representations
- Default: `grp:faithful-transitive` → **no candidate fits**
- Pages: 03-character-tables.html
- Sentence: 既約指標、列＝共役類」に並べたものを**指標表**という。指標表は直交関係（\ref{rep:orthogonality}, \ref{rep:characters-basis}）を満たす正方行列で、少ない手がかりから全体が決まることが多い。このページでは、1 次元の指標（可換化と双対群）、剰余群からの持ち上げ、2 重推移的な作用、という三つの道具を用意し、$D_{4}$, $Q_{8}$, $A_{4}$, $S_{4}$ の指標表を計算する。また、指標表から正規部分群がすべて読み取れることを示す。
  - `grp:faithful-transitive`: NG — Here "推移的" modifies "作用" (a doubly transitive action), which is the group-action notion defined in the card, so it matches.
  - `logic:relation-properties`: NG — Here "推移的" describes a group action (2-transitive action), not a binary relation on a set as defined in the card.

## 「有限生成」 in 02-algebra/02-group-theory/07-representations
- Default: `grp:generated-subgroup` → **no candidate fits**
- Pages: 05-integrality.html
- Sentence: - 整な元・整閉包（整な元の和・積は整）・整であることの特徴付け（有限生成加群に含まれれば整）は \ref{ring:integral-def}, \ref{ring:integral-closure}, \ref{ring:integral-criterion}。$\Z$ は UFD なので正規で（\ref{ring:ufd-normal}）、$\Q$ の元で $\Z$ 上整なものは整数。
  - `grp:generated-subgroup`: NG — Here "有限生成" refers to finitely generated modules (integral elements lying in a finitely generated module), not finitely generated groups as defined in the card.
  - `ring:generated-ideal-def`: NG — Here "有限生成" modifies a module (有限生成加群), not an ideal, so it is a different notion from the card's finitely generated ideal.
  - `mod:generated-submodule`: NG — Here "有限生成加群" refers to a module being finitely generated over a ring in the integrality criterion, which matches the card's definition of a finitely generated module.

## 「生成元」 in 02-algebra/02-group-theory/07-representations
- Default: `grp:generated-subgroup` → **no candidate fits**
- Pages: 01-representations.html, 05-integrality.html
- Sentence: es gw$ は双線形写像 $(v,w)\mapsto gv\otimes gw$ から得られる線形写像 $\rho(g)\otimes\sigma(g)$ で、$(\rho(g)\otimes\sigma(g))(\rho(h)\otimes\sigma(h))=\rho(gh)\otimes\sigma(gh)$（生成元で確かめる）、$g=1$ で恒等写像。$\Hom$：$(g(hf))(v)=g\,(hf)(g^{-1}v)=gh\,f(h^{-1}g^{-1}v)=((gh)f)(v)$。
  - `grp:generated-subgroup`: NG — Here "生成元" refers to generators of a group action/representation (checking on generators), not the generating set of a subgroup as defined in the card.
  - `grp:presentation`: NG — Here "生成元" refers to generators of a group action/representation being checked on generators, not the generators $X$ of a group presentation as defined in the card.

## 「閉包」 in 02-algebra/02-group-theory/07-representations
- Default: `top:interior-closure` → **no candidate fits**
- Pages: 05-integrality.html
- Sentence: - 可解群とその閉包性は \ref{grp:solvable-group}, \ref{grp:solvable-closure}、シロー部分群の存在は \tref{grp:sylow-existence}、$p$ 群の中心は \ref{grp:p-group-center}。
  - `top:interior-closure`: NG — Here "閉包性" means closure properties (being closed under operations), not the topological closure of a set.
  - `logic:ltl-size`: NG — Here "閉包" refers to closure properties of solvable groups, not the closure set of an LTL formula defined in the card.
  - `logic:ctl-closure`: NG — Here 閉包性 refers to closure properties of solvable groups, not the modal-logic closure set CL(A) defined in the card.
  - `set:pred-closure`: NG — Here "閉包性" means closure properties of solvable groups, not the set-theoretic closure $\mathrm{cl}(\mathbf{A},x,\mathbf{R})$ defined in the card.

## 「互いに素」 in 02-algebra/03-commutative-algebra/01-basics
- Default: `ring:ideal-sum-product` → **fits: `pt:prime`**
- Pages: 01-rings-ideals.html, 02-quotient-rings.html
- Sentence: **Step 3（3：二項係数）.** $0<k<p$ について $p\mid\binom{p}{k}$ を示す。$k!\,(p-k)!\binom{p}{k}=p!$ で、右辺は $p$ で割り切れる。一方 $k!\,(p-k)!$ は $p$ より小さい正の整数の積で、$p$ は素数なので各因子と互いに素であり、ユークリッドの補題（\ref{grp:bezout-euclid.4}）を因子の個数についての帰納法で使うと $\gcd(p,k!\,(p-k)!)=1$。再びユークリッドの補題から $p\mid\binom{p}{k}$。
  - `ring:ideal-sum-product`: NG — Here "互いに素" means coprime integers (gcd = 1), not the ideal-theoretic notion of comaximal ideals (I + J = A).
  - `pt:prime`: OK

## 「冪級数」 in 02-algebra/03-commutative-algebra/01-basics
- Default: `calc:power-series` → **no candidate fits**
- Pages: 04-polynomial-rings.html
- Sentence: **多項式環** $A[x]$ と**形式的冪級数環** $A[[x]]$ は、可換環論で最も基本的な環の作り方である。このページでは、係数の列として両者を厳密に構成し（\ref{ring:power-series-ring}）、多項式環の普遍性（\ref{ring:polynomial-universal}）、次数と整域性（\ref{ring:polynomial-
  - `calc:power-series`: NG — This is the formal power series ring over a commutative ring, not a real power series centered at a real number with a convergence radius.
  - `cx:complex-power-series`: NG — This is a formal power series over a general commutative ring, not a complex power series with a convergence radius.

## 「有界」 in 02-algebra/03-commutative-algebra/01-basics
- Default: `calc:supremum` → **no candidate fits**
- Pages: 03-prime-maximal.html
- Sentence: スドルフ性は、異なる点 $x_{0}\neq x_{1}$ の $\mathfrak{m}_{x_{0}}\neq\mathfrak{m}_{x_{1}}$ を示すのに使う：ウリゾーンの補題から $f(x_{0})=0$, $f(x_{1})=1$ となる連続関数がある。コンパクト性を外すと偽：$C(\R)$ で、台が有界な連続関数全体を含む極大イデアル（\ref{ring:maximal-ideal-existence}）はどの $\mathfrak{m}_{x}$ とも異なる。）
  - `calc:supremum`: NG — Here "有界" modifies the support of a function (bounded support), not a subset being bounded above/below in an ordered set as defined in the card.
  - `logic:rm-analysis-defs`: NG — Here "有界" describes the support of a continuous function (bounded support), not a bounded sequence as defined in the card.

## 「有限生成」 in 02-algebra/03-commutative-algebra/01-basics
- Default: `ring:generated-ideal-def` → **no candidate fits**
- Pages: 04-polynomial-rings.html, 06-ideal-arithmetic.html
- Sentence: n B$ について、$A$ の像と $b_{1},\dots,b_{n}$ を含む最小の部分環を $A[b_{1},\dots,b_{n}]$ と書き、$b_{1},\dots,b_{n}$ で**生成された部分代数**という。$B=A[b_{1},\dots,b_{n}]$ となる有限個の元があるとき、$B$ を**有限生成 $A$ 代数**（**有限型**の $A$ 代数）という。
  - `ring:generated-ideal-def`: NG — Here "有限生成" modifies an $A$-algebra (finite generation as an algebra), not an ideal generated by a finite set as defined in the card.
  - `grp:generated-subgroup`: NG — This is about finitely generated algebras over a ring, not finitely generated groups as defined in the card.
  - `mod:generated-submodule`: NG — This is about finitely generated algebras over a ring, not finitely generated modules as defined in the card.

## 「生成元」 in 02-algebra/03-commutative-algebra/01-basics
- Default: `grp:generated-subgroup` → **no candidate fits**
- Pages: 01-rings-ideals.html, 06-ideal-arithmetic.html
- Sentence: J$ は \ref{ring:generated-ideal.1} からイデアル。$IJ$ は生成されたイデアルなのでイデアル。$a\in I$, $b\in J$ なら $ab\in I$（$I$ はイデアル）かつ $ab=ba\in J$ なので $ab\in I\cap J$。$I\cap J$ はイデアルなので生成元を含めば $IJ\subset I\cap J$。
  - `grp:generated-subgroup`: NG — Here "生成元" refers to generators of an ideal in ring theory, not generators of a group as defined in the card.
  - `grp:presentation`: NG — Here "生成元" refers to generators of an ideal in ring theory, not generators of a group presentation as defined in the card.

## 「トレース」 in 02-algebra/03-commutative-algebra/02-commutative-algebra
- Default: `lin:eigen-def` → **no candidate fits**
- Pages: 03-integral-extensions.html, 10-integral-closure-finiteness.html
- Sentence: **続き.** 整閉包の商体・トレース・有限性・ネーターの有限性定理・付値環による特徴付けは \ref{ring:page-integral-closure-finiteness}、クルル＝秋月の定理・ネーター正規整域の構造・正規性のセールの判定法は \ref{ring:page-krull-akizuki-normality} で扱う。
  - `lin:eigen-def`: NG — Here "トレース" refers to the field trace in integral closure theory, not the matrix trace defined in the card.
  - `pt:trace`: NG — This "トレース" refers to the field trace in commutative algebra (integral closure), not the trace of a closed modal formula defined on subsets of ℕ.
  - `cat:trace-dimension`: NG — Here "トレース" refers to the field trace in commutative algebra/integral closure, not the categorical trace of a self-morphism defined on the card.

## 「ノルム」 in 02-algebra/03-commutative-algebra/02-commutative-algebra
- Default: `calc:norm` → **no candidate fits**
- Pages: 10-integral-closure-finiteness.html
- Sentence: 正規環 $A$（商体 $K$）と $K$ の有限次拡大 $L$ について、$A$ の $L$ における整閉包 $B$ を調べる。$B$ の商体は $L$ で（\ref{ring:clearing-denominators}）、$B$ の元の最小多項式・トレース・ノルムは $A$ に属する（\ref{ring:integral-trace-norm}）。$L/K$ が分離的なら、トレース形式の非退化性から $B$ は有限生成 $A$ 加群になり（\ref{ring:integral-closure-finite}）、$A$ が PID なら階数 $[L:K]$ の自由加群になる。代数
  - `calc:norm`: NG — Here "ノルム" refers to the field norm of a finite extension (the determinant of multiplication), not a vector-space norm satisfying the three axioms.
  - `comp:pi11-norm`: NG — This "ノルム" is the field norm (trace/norm of algebraic extensions), not a function from a set of naturals to ordinals as in the card.

## 「上限」 in 02-algebra/03-commutative-algebra/02-commutative-algebra
- Default: `calc:supremum` → **no candidate fits**
- Pages: 05-nullstellensatz.html, 08-dimension-theory.html, 09-principal-ideal-theorem.html
- Sentence: 非常に大きい（マイヤーとマイヤー、1982 年）。弱形の零点定理の「$V(g_{1},\dots,g_{r})=\emptyset$ か」は「$1\in(g_{1},\dots,g_{r})$ か」と同じである。有効零点定理（$1=\sum h_{i}g_{i}$ の $h_{i}$ の次数の、変数の数について単指数の上限。コラール、1988 年など）により、これは大きな一次方程式系の可解性に帰着する。いずれも本サイト未収録。
  - `calc:supremum`: NG — Here "上限" means an upper bound on the degrees (a bound), not the least upper bound (supremum) of a set as defined in the card.
  - `set:order-dedekind-complete`: NG — Here 上限 means an upper bound on the degrees (a bound), not the least upper bound (supremum) defined in the card.
  - `logic:rm-analysis-defs`: NG — Here "上限" means an upper bound on the degrees of the h_i (a bound in the effective Nullstellensatz), not the supremum of a real sequence as defined in the card.

## 「位数」 in 02-algebra/03-commutative-algebra/02-commutative-algebra
- Default: `ring:degree` → **fits: `grp:abelian-group`**
- Pages: 04-primary-decomposition.html, 13-local-global.html
- Sentence: **Step 1.** $\operatorname{Ann}(x)=n\Z$（$n$ は $x$ の位数）が素イデアルになるのは $n$ が素数のとき。$p\mid\abs{M}$ ならコーシーの定理から位数 $p$ の元があり $p\Z\in\operatorname{Ass}$。逆に位数 $p$ の元があれば $p\mid\abs{M}$（ラグランジュ）。$0$ は零化イデアルにならない（有限群の元は有限位数）。
  - `ring:degree`: NG — Here 位数 means the order of a group element, not the order (valuation) of a power series as defined in the card.
  - `grp:abelian-group`: OK

## 「冪級数」 in 02-algebra/03-commutative-algebra/02-commutative-algebra
- Default: `calc:power-series` → **no candidate fits**
- Pages: 02-noetherian-artinian.html, 07-completion.html, 12-operations-commute.html
- Sentence: イデアルの昇鎖が必ず止まる環を**ネーター環**、降鎖が必ず止まる環を**アルティン環**という（\ref{ring:noetherian-artinian-def}）。ネーター環ではすべてのイデアルが有限生成であり（\ref{ring:noetherian-module}）、多項式環・冪級数環・剰余環・局所化をとってもネーター性は保たれる。とくに**ヒルベルトの基底定理**（\tref{ring:hilbert-basis}）により、体上の有限生成代数はネーター環で、代数幾何の対象はすべてこの枠に入る。一方アルティン環は非常に制限された環で、「ネーターかつ素イデアルがすべて極大」と同値であり（\ref{r
  - `calc:power-series`: NG — Here "冪級数環" (power series ring) refers to a ring of formal power series, not the convergent power series with a radius of convergence defined in the card.
  - `cx:complex-power-series`: NG — Here "冪級数環" means a formal power series ring, not a convergent complex power series with a radius of convergence as defined in the card.

## 「準同型」 in 02-algebra/03-commutative-algebra/02-commutative-algebra
- Default: `ring:homomorphism` → **fits: `mod:submodule-homomorphism`**
- Pages: 01-local-properties.html, 07-completion.html, 12-operations-commute.html, 13-local-global.html
- Sentence: 環の局所化（\ref{ring:page-localization}）を加群に広げたものが**分数加群** $S^{-1}M$ である（\ref{ring:module-localization}）。局所化は完全列を完全列に移し（\ref{ring:localization-exact}）、そのため「$M=0$」「準同型が単射・全射」「平坦」といった性質は、各素イデアル（あるいは各極大イデアル）での局所化で確かめれば足りる（\ref{ring:local-properties}）。このように局所化で判定できる性質を**局所的性質**といい、可換環論の多くの議論は「局所化して局所環の問題に帰着する」という形をとる。局所環で最も強力な道具
  - `ring:homomorphism`: NG — Here "準同型" refers to a homomorphism of modules (in the context of exact sequences and localization), not specifically a ring homomorphism as defined in the card.
  - `cat:t-algebra`: NG — Here "準同型" refers to a homomorphism of modules in commutative algebra, not a homomorphism of T-algebras as defined in the card.
  - `grp:homomorphism`: NG — Here "準同型" refers to a homomorphism of modules (or rings), not specifically a group homomorphism as defined in the card.
  - `mod:submodule-homomorphism`: OK

## 「生成元」 in 02-algebra/03-commutative-algebra/02-commutative-algebra
- Default: `grp:generated-subgroup` → **no candidate fits**
- Pages: 01-local-properties.html, 03-integral-extensions.html, 05-nullstellensatz.html, 06-filtrations.html, 07-completion.html, 08-dimension-theory.html, 11-krull-akizuki-normality.html, 12-operations-commute.html, 13-local-global.html
- Sentence: a)E$ をみたす（線形代数と同じ式。成分の多項式としての恒等式）。左から掛けると、各 $k$ で $(\det\Delta)m_{k}=\sum_{i}(\operatorname{adj}\Delta)_{ki}\sum_{j}\Delta_{ij}m_{j}=0$。よって $\det\Delta$ は $M$ の生成元を $0$ に送るので、$\End(M)$ の元として $0$。
  - `grp:generated-subgroup`: NG — Here "生成元" refers to generators of the module $M$ (module generators), not generators of a group as defined in the card.
  - `grp:presentation`: NG — Here "生成元" refers to generators of the module $M$ over a ring, not generators of a group presentation as defined in the card.

## 「ホモトピー」 in 02-algebra/03-commutative-algebra/03-homological-methods
- Default: `at:homotopy` → **no candidate fits**
- Pages: 01-koszul-depth.html
- Sentence: は可換、$A$ は環、$M$ は $A$ 加群。鎖複体・ホモロジー・長完全列は \ref{ha:chain-complex}, \ref{ha:homology}, \ref{ha:long-exact-sequence}、連結射のジグザグの公式は \ref{ha:connecting-natural}、鎖ホモトピーとホモトピー不変性は \ref{ha:chain-homotopy}, \ref{ha:homotopy-invariance}。鎖複体の微分は $d$ と書き、次数を下げる（$d\colon C_{p}\to C_{p-1}$）。
  - `at:homotopy`: NG — This "ホモトピー" refers to chain homotopy between chain maps, not the homotopy of continuous maps defined in the card.
  - `logic:homotopy-funext`: NG — This is the homotopy of chain complexes (chain homotopy), a different notion from the type-theoretic homotopy of functions defined in the card.

## 「上限」 in 02-algebra/03-commutative-algebra/03-homological-methods
- Default: `calc:supremum` → **no candidate fits**
- Pages: 02-projective-dimension.html, 03-serre-regularity.html
- Sentence: （AC）ネーター局所環 $(A,\mathfrak{m},k)$ の大域次元（すべての加群の射影次元の上限。\ref{ha:projective-dimension}）は $\operatorname{pd}_{A}k$ に等しい。
  - `calc:supremum`: NG — Here "上限" means the supremum (least upper bound) of a set of numbers, which matches the card's definition of 上限 as the least upper bound of a subset of a totally ordered set.
  - `set:order-dedekind-complete`: NG — Here「上限」means the supremum (least upper bound) of a set of numbers, not the Dedekind-completeness property of a totally ordered set defined in the card.
  - `logic:rm-analysis-defs`: NG — Here "上限" means the supremum (least upper bound) of a set of projective dimensions, whereas the card defines it as the supremum of a real sequence.

## 「準同型」 in 02-algebra/03-commutative-algebra/03-homological-methods
- Default: `ring:homomorphism` → **fits: `mod:submodule-homomorphism`**
- Pages: 01-koszul-depth.html
- Sentence: 3. $A$ 準同型 $\varphi\colon M\to N$ は鎖写像 $K(\boldsymbol{x};\varphi)\colon K(\boldsymbol{x};M)\to K(\boldsymbol{x};N)$ を誘導し（各成分で $\varphi$ を施す）、$A$ 加群の短完全列 $0\to M'\to M\to 
  - `ring:homomorphism`: NG — Here 準同型 refers to a homomorphism of modules (A-module homomorphism), not a ring homomorphism as defined in the card.
  - `cat:t-algebra`: NG — This "準同型" is a homomorphism of $A$-modules, not a homomorphism of T-algebras as defined in the card.
  - `grp:homomorphism`: NG — This is a homomorphism of modules over a ring, not a group homomorphism as defined in the card.
  - `mod:submodule-homomorphism`: OK

## 「生成元」 in 02-algebra/03-commutative-algebra/03-homological-methods
- Default: `grp:generated-subgroup` → **no candidate fits**
- Pages: 01-koszul-depth.html, 02-projective-dimension.html, 03-serre-regularity.html, 04-regular-ufd.html
- Sentence: 特に $\operatorname{depth}_{I}M\le n$ で、$n-h$ は $I$ の生成元の取り方によらない。
  - `grp:generated-subgroup`: NG — Here "生成元" refers to generators of an ideal $I$ in a ring/module context, not generators of a group as defined in the card.
  - `grp:presentation`: NG — Here "生成元" refers to generators of the ideal $I$ in a module-theoretic context, not generators $X$ of a group presentation as defined in the card.

## 「零点集合」 in 02-algebra/03-commutative-algebra/03-homological-methods
- Default: `ring:algebraic-set` → **fits: `ag:algebraic-set`**
- Pages: 01-koszul-depth.html
- Sentence: **高い視点：導来的な零点集合.** \ref{ring:koszul-order-independent.3} から $H_{p}(\boldsymbol{x};A)\cong\operatorname{Tor}_{p}^{\mathbb{Z}[t_{1},\dots,t_{n}]}(A,\mathbb{Z})$ である。幾何的には、写像 $\o
  - `ring:algebraic-set`: NG — 零点集合 is used here in a homological/derived sense (a derived zero locus), not the classical algebraic set $V(S)$ defined by the card.
  - `ag:algebraic-set`: OK

## 「ノルム」 in 02-algebra/03-commutative-algebra/04-integral-domains
- Default: `calc:norm` → **no candidate fits**
- Pages: 01-euclid-pid-ufd.html, 05-dedekind.html
- Sentence: **Step 1（ノルム）.** $N(x+y\sqrt{-5})=x^{2}+5y^{2}$ は非負整数で乗法的。$A^{\times}=\{\pm1\}$（\ref{ring:prob-quadratic-units-negative}）で、これは $N=1$ の元。
  - `calc:norm`: NG — Here "ノルム" refers to a multiplicative norm on a ring (an integer-valued map on $\mathbb{Z}[\sqrt{-5}]$), not a vector-space norm satisfying homogeneity and the triangle inequality.
  - `comp:pi11-norm`: NG — This "norm" is the field norm \(N(x+y\sqrt{-5})=x^{2}+5y^{2}\), not a function from a set \(A\subseteq\N\) to ordinals as in the card.

## 「位数」 in 02-algebra/03-commutative-algebra/04-integral-domains
- Default: `ring:degree` → **no candidate fits**
- Pages: 04-valuation-rings.html, 05-dedekind.html
- Sentence: **Step 1（1）.** $v(1)=v(1)+v(1)$ から $v(1)=0$、$v(-1)\cdot 2=v(1)=0$ で全順序群には位数 $2$ の元がない（$\gamma>0$ なら $2\gamma>\gamma>0$）ので $v(-1)=0$。和と積で閉じることは付値の条件から。$x\in K^{\times}$ について $v(x)+v(x^{-1})=0$ なので一方は $\ge 0$。単元 $\iff v(x)\ge 0$ かつ $v(x^
  - `ring:degree`: NG — Here "位数" means the order of an element in a group (order 2), not the minimum exponent of a power series as defined in the card.
  - `grp:abelian-group`: NG — Here "位数" means the order of an element (the least positive $n$ with $a^{n}=1$), not the order/cardinality of a group as defined in the card.
  - `grp:element-order`: NG — Here "位数" refers to the order of an element in an ordered group (no element of order 2), which matches the card's definition of the order of a group element.
  - `cx:isolated-singularity`: NG — Here “位数” means the order of an element in an ordered group, not the order (pole degree) of a pole as defined in the card.
  - `cx:elliptic-function`: NG — Here 位数 means the order of an element in an ordered group, not the number of poles of an elliptic function.

## 「冪級数」 in 02-algebra/03-commutative-algebra/04-integral-domains
- Default: `calc:power-series` → **no candidate fits**
- Pages: 02-gauss-lemma.html, 07-classification.html, 08-preservation-table.html, 09-counterexamples.html
- Sentence: **冪級数環では.** $A$ が一意分解環でも $A[[x]]$ は一意分解環とは限らない（サミュエル。\ref{ring:samuel-power-series}。構成はこのサイトでは扱っていない）。一方、体 $K$ 上の $K[[x_{1},\dots,x_{n}]]$ は正則局所環なので一意分解環（\ref{ring:r
  - `calc:power-series`: NG — Here 冪級数 refers to a formal power series ring (a ring-theoretic object), not a convergent power series centered at a real number with a radius of convergence.
  - `cx:complex-power-series`: NG — It refers to the formal power series ring $A[[x]]$, not a convergent complex power series with a radius of convergence.

## 「フィルトレーション」 in 02-algebra/03-commutative-algebra/05-regular-cm
- Default: `ring:filtration` → **no candidate fits**
- Pages: 04-gorenstein.html
- Sentence: - 素イデアルによるフィルトレーション（\ref{ring:prime-filtration}）$0=M_{0}\subset\cdots\subset M_{n}=M$, $M_{i}/M_{i-1}\cong A/\mathfrak{p}_{i}$ では、$A/\mathfrak{p}_{i}$ が $M$ の部分商なので $\mathfrak{p}_
  - `ring:filtration`: NG — This "フィルトレーション" is an ascending chain of submodules with prime quotients, not the descending ideal-filtration \(M=M_{0}\supset M_{1}\supset\cdots\) with \(IM_{n}\subset M_{n+1}\) defined in the card.
  - `logic:filtration`: NG — This is a filtration of a module by prime ideals in commutative algebra, not the modal-logic filtration of a Kripke model defined in the card.

## 「上界」 in 02-algebra/03-commutative-algebra/05-regular-cm
- Default: `set:chain-maximal` → **no candidate fits**
- Pages: 02-depth.html
- Sentence: 1. 正則局所環 $A$ では $\operatorname{depth}A=\dim A$（正則なパラメーター系が正則列で、長さ $\dim A$。\ref{ring:depth-le-dim} の上界と合わせて）。
  - `set:chain-maximal`: NG — Here「上界」means an upper bound for the inequality \(\operatorname{depth}A\le \dim A\), not an upper bound of a subset in a partially ordered set as defined in the card.
  - `calc:supremum`: NG — Here "上界" means an upper bound for the inequality depth A ≤ dim A, not the order-theoretic upper bound of a subset as defined in the card.

## 「上限」 in 02-algebra/03-commutative-algebra/05-regular-cm
- Default: `calc:supremum` → **no candidate fits**
- Pages: 02-depth.html
- Sentence: ng:prime-avoidance}、中山の補題は \tref{ring:nakayama}、加群の\term[次元]{ring:krull-dimension} $\dim M\defeq\dim A/\operatorname{Ann}M$（$=\operatorname{Supp}M$ の素イデアルの鎖の長さの上限）、次元論は \tref{ring:page-dimension-theory}。
  - `calc:supremum`: NG — Here "上限" means the supremum (least upper bound) of lengths of chains of prime ideals, which is a specific numerical supremum, not the general order-theoretic notion of upper bound/supremum of a subset as defined in the card.
  - `set:order-dedekind-complete`: NG — Here 上限 means the supremum (least upper bound) of lengths of chains of prime ideals, which is the same notion of supremum defined in the card, not a different meaning.
  - `logic:rm-analysis-defs`: NG — Here "上限" means the supremum (least upper bound) of lengths of chains of prime ideals, not the supremum of a real sequence as defined in the card.

## 「互いに素」 in 02-algebra/03-commutative-algebra/05-regular-cm
- Default: `ring:ideal-sum-product` → **fits: `pt:prime`**
- Pages: 01-regular-local-rings.html
- Sentence: ることを $i$ の帰納法で示す。$C_{i-1}\cong\prod_{s}F_{s}$（$F_{s}\supset k$ は体）なら $C_{i}\cong C_{i-1}[t]/(g_{i})\cong\prod_{s}F_{s}[t]/(g_{i})$。$g_{i}$ は $k[t]$ で $g_{i}'$ と互いに素（$ug_{i}+vg_{i}'=1$）なので $F_{s}[t]$ でも分離的で、相異なるモニック既約因子の積に分かれ、\ref{ring:chinese-remainder}から $F_{s}[t]/(g_{i})$ は体の直積。よって $R/Q=C_{n}$ は体の有限直積で、そのイデアル $P/Q$ は（各成分
  - `ring:ideal-sum-product`: NG — Here "互いに素" means coprime polynomials (a Bézout relation), not coprime ideals summing to the whole ring.
  - `pt:prime`: OK

## 「冪級数」 in 02-algebra/03-commutative-algebra/05-regular-cm
- Default: `calc:power-series` → **no candidate fits**
- Pages: 05-operations-invariance.html
- Sentence: /tB$）、$\dim A[t]=\dim A+1$（\ref{ring:polynomial-dimension}）、被約・整域・正規（\ref{ring:preservation-table}、逆は $A\subset A[t]$ が部分環であることと $A=A[t]\cap\Frac A$）も多項式環で保たれる。冪級数環 $A[[t]]$ でも、ネーター局所環 $A$ について正則・CM・ゴレンシュタインは保たれることが知られている（$A$ が完備なら $A[[t]]$ は $A[t]_{(\mathfrak{m},t)}$ の完備化なので、この定理と次の \ref{ring:completion-invariance} から従う。
  - `calc:power-series`: NG — Here 冪級数環 means the formal power series ring, not a power series with a convergence radius.
  - `cx:complex-power-series`: NG — Here "冪級数環" means the formal power series ring, not a convergent complex power series with a radius of convergence.

## 「分離的」 in 02-algebra/03-commutative-algebra/05-regular-cm
- Default: `ring:completion` → **fits: `fld:separable-polynomial`**
- Pages: 01-regular-local-rings.html
- Sentence: **Step 2（全射）.** $\alpha_{j}\defeq\bar x_{j}\in L$ は $k$ 上分離的で、その最小多項式 $g_{j}\in k[t]$ について $g_{j}(x_{j})\in P$、$D(g_{j}(x_{j}))=g_{j}'(\alpha_{j})e_{j}$ で $g_{j}'(\alpha_{j})\neq 0$（\ref{fld:separable-criterion}）。よって $e_
  - `ring:completion`: NG — Here "分離的" means separable (of an element over a field, i.e. its minimal polynomial has distinct roots), not the $I$-adic separatedness of a module defined in the card.
  - `set:separative`: NG — Here "分離的" means separable (in the field-theoretic sense, about minimal polynomials and derivatives), not the order-theoretic notion of a separable partial order.
  - `cat:separated-presheaf`: NG — Here "分離的" means separable (in the field-theoretic sense), not the presheaf separation property.
  - `mod:separable-algebra`: NG — Here "分離的" refers to an element being separable over a field (its minimal polynomial has distinct roots), not to a separable algebra as defined in the card.
  - `fld:separable-polynomial`: OK

## 「有限次元」 in 02-algebra/03-commutative-algebra/05-regular-cm
- Default: `lin:dimension` → **no candidate fits**
- Pages: 04-gorenstein.html, 05-operations-invariance.html
- Sentence: いずれも $\mathfrak{m}$ は変数の像で生成され、$A$ は有限次元なのでアルティン局所環（\ref{ring:prob-finite-dim-algebra}）。ソークルは「すべての変数を掛けて $0$ になる元」。
  - `lin:dimension`: NG — Here "finite-dimensional" refers to the algebra $A$ being finite-dimensional as a vector space over a field, which is exactly the card's notion of finite dimension (a special case of the vector-space definition).
  - `at:cw-complex`: NG — Here "有限次元" refers to a finite-dimensional algebra over a field, not a finite-dimensional CW complex as defined in the card.

## 「上限」 in 02-algebra/04-associative-rings/01-module-theory
- Default: `calc:supremum` → **no candidate fits**
- Pages: 06-pid-modules.html
- Sentence: と、どの演算（特に割り算）が原始再帰的かで決まる。下の例 \ref{mod:smith-not-pr-example} はユークリッド環（体）でさえ、割り算が原始再帰的でない表示では原始再帰的に計算できないことを示す。したがって境目は「ユークリッド環か PID か」ではなく、「割り算（またはベズーの係数）が原始再帰的な上限つきで求まるか」である。
  - `calc:supremum`: NG — Here "上限" means an upper bound/limit on computational complexity, not the least upper bound of a set as defined in the card.
  - `set:order-dedekind-complete`: NG — Here「上限」means an upper bound/limit on computational complexity, not the least upper bound (supremum) defined in the Dedekind-completeness card.
  - `logic:rm-analysis-defs`: NG — Here "上限" means an upper bound on computability/complexity, not the supremum of a real sequence as defined in the card.

## 「互いに素」 in 02-algebra/04-associative-rings/01-module-theory
- Default: `grp:gcd` → **fits: `ring:ideal-sum-product`**
- Pages: 04-tensor-products.html, 05-flatness.html, 06-pid-modules.html
- Sentence: $\C\cong\R[x]/(x^{2}+1)$（\ref{ring:polynomial-quotients}）なので、2 から $\C\otimes_{\R}\C\cong\C[x]/(x^{2}+1)=\C[x]/((x-i)(x+i))$ で、$(x-i)+(x+i)\ni 2i$ は単元なので二つのイデアルは互いに素、\ref{ring:chinese-remainder}から $\cong\C[x]/(x-i)\times\C[x]/(x+i)\cong\C\times\C$。体どうしのテンソル積は体とは限らず、整域ですらない。
  - `grp:gcd`: NG — Here "互いに素" refers to coprime ideals (their sum is the whole ring), not the gcd-of-integers notion defined in the card.
  - `pt:prime`: NG — Here "互いに素" refers to coprime ideals (their sum is the whole ring), not the number-theoretic relation RelPrime(a,b) defined on the card.
  - `grp:cycle`: NG — Here "互いに素" refers to coprime ideals, not disjoint supports of permutations.
  - `ring:ideal-sum-product`: OK

## 「忠実」 in 02-algebra/04-associative-rings/01-module-theory
- Default: `mod:annihilator` → **no candidate fits**
- Pages: 05-flatness.html
- Sentence: だけで判定する方法**（\ref{mod:flat-ideal-criterion}）を、指標加群（\ref{mod:character-module}）を使って示し、$\Z$ 上では平坦であることとねじれがないことが同値であることを導く（\ref{mod:flat-z}）。最後に、テンソル積が完全性を「反映」する**忠実平坦**な加群を特徴付ける（\ref{mod:faithfully-flat}）。局所化が平坦であることは、加群の局所化を導入する \ref{ring:page-local-properties} で扱う。
  - `mod:annihilator`: NG — Here "忠実" modifies "平坦" as part of the compound term "忠実平坦" (faithfully flat), not the module-theoretic notion of a faithful module (Ann(M)=0) defined in the card.
  - `cat:full-faithful`: NG — Here "忠実" is part of the term "忠実平坦" (faithfully flat) in module theory, not the category-theoretic notion of a faithful functor defined in the card.
  - `grp:faithful-transitive`: NG — Here "忠実" is part of "忠実平坦" (faithfully flat) in module theory, not faithfulness of a group action.

## 「決定可能」 in 02-algebra/04-associative-rings/01-module-theory
- Default: `comp:L-computable` → **no candidate fits**
- Pages: 06-pid-modules.html
- Sentence: 環 $A$ の**表示**とは、自然数の部分集合 $C$（元の**コード**の集合）から $A$ への全射 $c\mapsto[c]$ のことをいう。$C$ が決定可能で、$+,-,\times$ に対応する $C$ 上の関数と、関係「$[c]=[c']$」が計算可能なとき**計算可能な表示**、これらがすべて原始再帰的なとき**原始再帰的な表示**という。行列はコードの組として扱う。
  - `comp:L-computable`: NG — Here "決定可能" refers to a subset of natural numbers having a computable characteristic function, which matches the card's definition, but the sentence uses it for a set of codes in a computability-theoretic representation context—this is the same notion, so it should be ok; however, the term is applied to a subset of ℕ (codes), consistent with the card, so the answer is ok.
  - `comp:recognizable-decidable`: NG — Here "決定可能" refers to a decidable subset of natural numbers in computability theory, which is the same notion as the card's "決定可能" (decidable language recognized by a decider TM), so it matches.

## 「準同型」 in 02-algebra/04-associative-rings/01-module-theory
- Default: `mod:submodule-homomorphism` → **fits: `grp:homomorphism`**
- Pages: 01-modules.html, 02-exact-sequences.html, 03-projective-injective.html, 04-tensor-products.html, 05-flatness.html, 06-pid-modules.html
- Sentence: - 群論から、可換群・部分群・剰余群・準同型定理・対応定理・第二・第三同型定理（\ref{grp:abelian-group}, \ref{grp:quotient-group}, \ref{grp:first-isomorphism}, \ref{grp:correspondence}, \ref{grp:second-isomorphism}, \ref{g
  - `mod:submodule-homomorphism`: NG — This "準同型" refers to group homomorphisms from group theory, not the \(R\)-module homomorphism defined in the card.
  - `cat:t-algebra`: NG — This occurrence refers to group homomorphisms in group theory, not homomorphisms of T-algebras as defined in the card.
  - `grp:homomorphism`: OK

## 「生成元」 in 02-algebra/04-associative-rings/01-module-theory
- Default: `grp:generated-subgroup` → **no candidate fits**
- Pages: 01-modules.html, 06-pid-modules.html
- Sentence: 2. $K[x]$ 加群としての $(V,T)$（\ref{mod:module-examples.6}）で、$\operatorname{Ann}(V)$ は $f(T)=0$ となる多項式全体であり、$V$ が有限次元なら $0$ でない（ケイリー＝ハミルトンの定理）。その単項生成元が $T$ の最小多項式である。
  - `grp:generated-subgroup`: NG — Here "生成元" refers to a generator of an ideal/annihilator (a single polynomial generating Ann(V)), not a generating set of a group as defined in the card.
  - `grp:presentation`: NG — Here "生成元" refers to a generator of an ideal/annihilator in module theory, not a generator of a group presentation.

## 「計算可能」 in 02-algebra/04-associative-rings/01-module-theory
- Default: `comp:L-computable` → **no candidate fits**
- Pages: 06-pid-modules.html
- Sentence: 環 $A$ の**表示**とは、自然数の部分集合 $C$（元の**コード**の集合）から $A$ への全射 $c\mapsto[c]$ のことをいう。$C$ が決定可能で、$+,-,\times$ に対応する $C$ 上の関数と、関係「$[c]=[c']$」が計算可能なとき**計算可能な表示**、これらがすべて原始再帰的なとき**原始再帰的な表示**という。行列はコードの組として扱う。
  - `comp:L-computable`: NG — Here "計算可能" refers to computability of functions on codes in a computability-theoretic sense, which matches the card's notion of computable partial functions (a special case), so it is the same notion.
  - `comp:mapping-reducible`: NG — Here "計算可能" refers to computability of functions/relations on codes in computable algebra (via Turing machines), which matches the card's notion of a computable function, so it is the same notion.
  - `comp:computable-functional-relation`: NG — This "計算可能" refers to computable functions/relations on codes in a computable presentation of a ring, not the oracle-machine definition of a computable relation on functions given in the card.

## 「イデアル」 in 02-algebra/04-associative-rings/02-noncommutative-rings
- Default: `ring:ideal` → **no candidate fits**
- Pages: 01-noncommutative-rings.html, 03-wedderburn-artin.html, 04-jacobson-radical.html
- Sentence: 掛け算の順序を入れ替えられない環を**非可換環**という。行列環 $M_{n}(R)$、加群の自己準同型環 $\End_{R}(M)$、四元数体 $\mathbb{H}$、群環などがその代表で、線形代数・表現論・作用素環で自然に現れる。可換環との最初の違いはイデアルで、左から掛けて閉じるもの・右から掛けて閉じるもの・両方の三種類を区別する必要がある（\ref{mod:one-sided-ideal}）。このページでは、行列環の両側イデアルが係数環の両側イデアルと一対一に対応すること（\ref{mod:matrix-ideals}）を示して、斜体上の行列環が**単純環**であること
  - `ring:ideal`: NG — In a noncommutative ring, the term refers to one-sided or two-sided ideals, whereas the card defines an ideal only for commutative rings.
  - `set:ideal`: NG — This is a ring-theoretic ideal (a subgroup closed under multiplication by ring elements), not a set-theoretic ideal on a set $A$ as defined in the card.

## 「互いに素」 in 02-algebra/04-associative-rings/02-noncommutative-rings
- Default: `grp:gcd` → **no candidate fits**
- Pages: 05-maschke.html, 07-wedderburn-principal.html
- Sentence: $\mathbb{R}[\Z/3]\cong\mathbb{R}[x]/(x^{3}-1)$（前問と同様）で、$x^{3}-1=(x-1)(x^{2}+x+1)$ は互いに素な既約因子の積なので、中国剰余定理から $\cong\mathbb{R}[x]/(x-1)\times\mathbb{R}[x]/(x^{2}+x+1)\cong\mathbb{R}\times\mathbb{C}$。単純加群は $\mathbb{R}$（1 次元）と $\mathbb{C}$（2 次元）の 2 個で、
  - `grp:gcd`: NG — Here "互いに素" describes coprime polynomials (no common factor), not coprime integers as defined in the card.
  - `pt:prime`: NG — Here "互いに素" describes coprime polynomials (no common factor), not the integer relation RelPrime(a,b) defined on the card.
  - `grp:cycle`: NG — Here "互いに素" means coprime polynomials (no common factor), not disjoint supports of permutations.
  - `ring:ideal-sum-product`: NG — Here "互いに素" describes coprime polynomials (a gcd condition), not ideals summing to the whole ring as defined in the card.

## 「位数」 in 02-algebra/04-associative-rings/02-noncommutative-rings
- Default: `grp:abelian-group` → **fits: `grp:element-order`**
- Pages: 01-noncommutative-rings.html, 02-semisimple-modules.html, 03-wedderburn-artin.html, 05-maschke.html
- Sentence: $n\ge 1$ について $\Phi_{n}(x)\defeq\prod(x-\zeta)$（$\zeta$ は位数がちょうど $n$ の $1$ の複素 $n$ 乗根全体を走る）とおくと、
  - `grp:abelian-group`: NG — Here "位数" refers to the order of a root of unity (its multiplicative order), not the order $\abs{G}$ of a group as defined in the card.
  - `grp:element-order`: OK

## 「有界」 in 02-algebra/04-associative-rings/02-noncommutative-rings
- Default: `calc:supremum` → **no candidate fits**
- Pages: 04-jacobson-radical.html
- Sentence: k}}S_{\lambda}$ が作れる）。有限個の単純加群の直和は昇鎖条件もみたす（部分加群の長さ $\ell$ が \ref{mod:semisimple-multiplicity} で定まり、\ref{mod:semisimple-ring-corollaries} の Step 4 と同じ議論で真の昇鎖の長さが有界）。
  - `calc:supremum`: NG — Here "有界" refers to the length of a strictly ascending chain being bounded, not to a subset being bounded above and below in an ordered set.
  - `logic:rm-analysis-defs`: NG — Here "有界" refers to the length of a strictly increasing chain of submodules being bounded, not to a real sequence being bounded as defined in the card.

## 「次元」 in 02-algebra/04-associative-rings/02-noncommutative-rings
- Default: `lin:dimension` → **no candidate fits**
- Pages: 02-semisimple-modules.html, 03-wedderburn-artin.html, 05-maschke.html, 06-density-commutativity.html, 07-wedderburn-principal.html
- Sentence: > Anderson–Fuller *Rings and Categories of Modules* §9 を参考にした。重複度の一意性は、組成列（ジョルダン＝ヘルダー）を使わず、$\Hom(T,M)$ の次元で数える形にした。
  - `lin:dimension`: NG — Here "次元" refers to the dimension of the vector space $\Hom(T,M)$, which is exactly the linear-algebra notion of dimension defined in the card.
  - `cat:trace-dimension`: NG — Here "次元" refers to the dimension of a vector space $\Hom(T,M)$, not the categorical dimension $\dim a$ of a dualizable object defined in the card.
  - `ring:krull-dimension`: NG — Here "次元" refers to the dimension of the vector space $\Hom(T,M)$, not the Krull dimension of a ring.
  - `ag:dimension`: NG — Here "次元" refers to the dimension of the vector space Hom(T,M), not the Krull dimension of a topological space defined in the card.

## 「逆像」 in 02-algebra/04-associative-rings/02-noncommutative-rings
- Default: `set:function` → **no candidate fits**
- Pages: 07-wedderburn-principal.html
- Sentence: /J$ は半単純で根基 $0$ なので $J(A')\subset J/J^{2}$、逆に冪零な両側イデアルは根基に含まれる。\ref{mod:nil-in-radical}）で、$(J/J^{2})^{2}=0$。Step 2 から部分代数 $B/J^{2}\subset A'$（$B\supset J^{2}$ は逆像）で $B/J^{2}\cong A/J$。
  - `set:function`: NG — Here "逆像" refers to the preimage of a subalgebra under a quotient map, which is a special case of the card's inverse image $f^{-1}[D]=\{x\in A\mid f(x)\in D\}$.
  - `cat:inverse-image`: NG — Here "逆像" means the preimage of a subalgebra under a quotient map, not the (direct/inverse) image of a sheaf or presheaf defined in the card.

## 「上限」 in 02-algebra/05-field-theory/01-extensions
- Default: `calc:supremum` → **no candidate fits**
- Pages: 07-finite-fields.html
- Sentence: $d=[K:\mathbb{F}_{p}]$）で、塔の公式 $n=[L:K]d$ から $d\mid n$。$K$ の元は $a^{p^{d}}=a$ をみたし（\ref{fld:finite-field-classification.1}）、その個数 $p^{d}$ は方程式 $x^{p^{d}}-x$ の根の個数の上限に等しいので、$K=\{a\in L : a^{p^{d}}=a\}$。よって $p^{d}$ 元の部分体は高々一つ。
  - `calc:supremum`: NG — Here "上限" means an upper bound on the number of roots (a bound), not the least upper bound (supremum) defined in the card.
  - `set:order-dedekind-complete`: NG — Here "上限" means an upper bound on the number of roots, not the least upper bound (supremum) defined in the card.
  - `logic:rm-analysis-defs`: NG — Here "上限" means an upper bound on the number of roots (a bound), not the least upper bound (supremum) of a real sequence as defined in the card.

## 「位数」 in 02-algebra/05-field-theory/01-extensions
- Default: `grp:abelian-group` → **no candidate fits**
- Pages: 03-splitting-fields.html, 06-separable.html, 07-finite-fields.html
- Sentence: s}）。一意性の証明の核心は「体の同型 $\sigma\colon K\to K'$ は、根を対応する根に移すことで単拡大へ延長できる」こと（\ref{fld:extension-simple}）で、延長の個数は拡大次数以下になる（\ref{fld:extension-count}）。この個数の評価は、のちにガロア群の位数を拡大次数で抑えるのに使う。
  - `grp:abelian-group`: NG — Here "位数" refers to the order (number of elements) of a Galois group, which matches the card's definition of the order of a group.
  - `grp:element-order`: NG — Here "位数" refers to the order (cardinality) of a Galois group, not the order of a group element as defined in the card.
  - `cx:isolated-singularity`: NG — Here "位数" means the order (cardinality) of a Galois group, not the order of a pole as defined in the card.
  - `cx:elliptic-function`: NG — Here "位数" means the order (size) of a Galois group, not the number of poles of an elliptic function.

## 「加群」 in 02-algebra/05-field-theory/01-extensions
- Default: `mod:module` → **no candidate fits**
- Pages: 02-algebraic-extensions.html
- Sentence: **高い視点.** \ref{fld:finite-algebraic.3} は、環論の「有限生成かつ整 ⇔ 有限加群」（\ref{ring:page-integral-extensions}）の体の場合である：体上では「代数的」と「整」は同じ（最小多項式をモニックにできる）。相対代数閉包は整閉包の類似で、\ref{fld:page-algebraic-closure}は「代数拡大で、それ以上代数的に大きくできない」体として次の次のペ
  - `mod:module`: NG — Here "加群" is used as part of "有限加群" meaning a finitely generated module over a field (i.e., a finite-dimensional vector space), which is a special case of the module notion defined in the card, so it matches.
  - `ag:o-module`: NG — Here "加群" refers to a module over a ring in the context of integral extensions (finite module over a ring), not specifically an \(\mathcal{O}_{X}\)-module on a ringed space as defined in the card.

## 「有限生成」 in 02-algebra/05-field-theory/01-extensions
- Default: `ring:generated-ideal-def` → **fits: `mod:generated-submodule`**
- Pages: 02-algebraic-extensions.html
- Sentence: **高い視点.** \ref{fld:finite-algebraic.3} は、環論の「有限生成かつ整 ⇔ 有限加群」（\ref{ring:page-integral-extensions}）の体の場合である：体上では「代数的」と「整」は同じ（最小多項式をモニックにできる）。相対代数閉包は整閉包の類似で、\ref{fld:page-algebraic-closure}は「代数拡大で、それ以上代数的に大きくできない
  - `ring:generated-ideal-def`: NG — Here "有限生成" refers to a finitely generated algebra (ring), not a finitely generated ideal as defined in the card.
  - `grp:generated-subgroup`: NG — Here "有限生成" refers to a finitely generated ring/algebra (or field extension), not a finitely generated group as defined in the card.
  - `mod:generated-submodule`: OK

## 「生成元」 in 02-algebra/05-field-theory/01-extensions
- Default: `grp:generated-subgroup` → **no candidate fits**
- Pages: 01-degree.html, 04-algebraic-closure.html, 06-separable.html, 07-finite-fields.html
- Sentence: **Step 2（生成元）.** $\gamma=\sqrt{2}+\sqrt{3}$ とすると $\gamma^{-1}=\sqrt{3}-\sqrt{2}$（積が $1$）なので $\sqrt{3}=(\gamma+\gamma^{-1})/2$, $\sqrt{2}=(\gamma-\gamma^{-1})/2\in\Q(\gamma)
  - `grp:generated-subgroup`: NG — Here "生成元" refers to a field generator of the extension $\Q(\gamma)$, not a generating set of a group as defined in the card.
  - `grp:presentation`: NG — Here "生成元" refers to a field generator (an element generating a field extension), not a generator of a group presentation as defined in the card.

## 「閉包」 in 02-algebra/05-field-theory/01-extensions
- Default: `top:interior-closure` → **no candidate fits**
- Pages: 05-normal.html, 06-separable.html
- Sentence: ）。有限次拡大については、「ある多項式の分解体である」「代数閉包への $K$ 埋め込みがすべて $L$ を $L$ に写す」と同値である（\ref{fld:normal-equivalent}）。正規性は、ガロア拡大の二つの条件（正規・分離）の一方で、「共役な元がすべて揃っている」ことを表す。有限次拡大は、その**正規閉包**（\ref{fld:normal-closure}）に含まれる。
  - `top:interior-closure`: NG — Here "閉包" is part of "正規閉包" (normal closure of a field extension), a different notion from the topological closure defined in the card.
  - `logic:ltl-size`: NG — This "正規閉包" (normal closure) is a field-theoretic notion, not the LTL formula closure defined in the card.
  - `logic:ctl-closure`: NG — Here 閉包 refers to the normal closure of a field extension, not the modal-logic closure set CL(A) defined in the card.
  - `set:pred-closure`: NG — one short English sentence why

## 「ノルム」 in 02-algebra/05-field-theory/02-galois-theory
- Default: `calc:norm` → **no candidate fits**
- Pages: 04-norm-kummer.html
- Sentence: 有限次拡大 $L/K$ のノルム $N_{L/K}$ とトレース $\operatorname{Tr}_{L/K}$ は、元の掛け算を $K$ 線形写像とみたときの行列式とトレースである（\ref{ring:trace-norm}）。このページではまず、それらを $\Omega$ への埋め込みで書き表し、拡大の塔について推移的であることを示す。次に*
  - `calc:norm`: NG — This is the field norm of a finite extension, not a norm on a real vector space satisfying the three axioms.
  - `comp:pi11-norm`: NG — This "norm" is the field norm of a finite extension, not a function from a set of naturals to ordinals as in the definition card.

## 「互いに素」 in 02-algebra/05-field-theory/02-galois-theory
- Default: `grp:gcd` → **no candidate fits**
- Pages: 03-cyclotomic.html
- Sentence: $(x^{n}-1)'=nx^{n-1}$ で、$K$ の中で $n\neq 0$ なので $x^{n}-1$ と互いに素（$x\cdot nx^{n-1}-n(x^{n}-1)=n$）、分離的（\ref{fld:separable-criterion.1}）。よって根は $n$ 個で、積と逆元で閉じるので $L^{\times}$ の位数 $n$ の部分群、巡回群（\ref{fld:finite-multiplicative-cycli
  - `grp:gcd`: NG — Here "互いに素" is used for polynomials (coprime in K[x]), not for integers a,b as defined in the card.
  - `pt:prime`: NG — Here "互いに素" refers to two polynomials being coprime (sharing no common factor), not the integer relation RelPrime(a,b) defined on the card.
  - `grp:cycle`: NG — Here "互いに素" means coprime polynomials (gcd 1), not disjoint supports of permutations.
  - `ring:ideal-sum-product`: NG — Here "互いに素" means coprime polynomials (gcd 1), not coprime ideals summing to the whole ring.

## 「位数」 in 02-algebra/05-field-theory/02-galois-theory
- Default: `grp:abelian-group` → **no candidate fits**
- Pages: 01-artin.html, 02-fundamental-theorem.html, 03-cyclotomic.html, 04-norm-kummer.html, 05-solvability.html, 06-discriminant.html, 07-constructions.html
- Sentence: 3. $x^{3}-2$ の分解体 $L=\Q(\sqrt[3]{2},\omega)$：$[L:\Q]=6$ でガロア（標数 $0$ の分解体）。$\operatorname{Gal}(L/\Q)$ は根 $\sqrt[3]{2}\omega^{k}$（$k=0,1,2$）の置換として忠実に作用し、位数 $6$ なので $S_{3}$ 全体と同型。
  - `grp:abelian-group`: NG — Here "位数" means the order (number of elements) of the Galois group, whereas the card defines it as the order of a group $G$; the usage is the same notion applied to $\operatorname{Gal}(L/\Q)$, so it actually matches.
  - `grp:element-order`: NG — Here "位数" means the order (number of elements) of the Galois group, not the order of a group element as defined in the card.
  - `cx:isolated-singularity`: NG — Here "位数" means the order (number of elements) of a group, not the order of a pole as defined in the card.
  - `cx:elliptic-function`: NG — Here "位数" means the order (number of elements) of a group, not the number of poles of an elliptic function.

## 「有界」 in 02-algebra/05-field-theory/02-galois-theory
- Default: `calc:supremum` → **no candidate fits**
- Pages: 07-constructions.html
- Sentence: 次数 $1$ 以上の複素係数の多項式が $\mathbb{C}$ に根をもつことを、$\frac{1}{P}$ が有界な整関数になることとリウヴィルの定理から示した（\ref{cx:fundamental-theorem-algebra}）。これは $\mathbb{C}$ が代数閉体であることにほかならない。
  - `calc:supremum`: NG — Here "有界" refers to a bounded function (bounded range in $\mathbb{C}$), not a bounded subset of an ordered set as defined in the card.
  - `logic:rm-analysis-defs`: NG — Here "有界" refers to a bounded entire function (bounded in absolute value on $\mathbb{C}$), not to a bounded real sequence as defined in the card.

## 「次元」 in 02-algebra/05-field-theory/02-galois-theory
- Default: `lin:dimension` → **no candidate fits**
- Pages: 04-norm-kummer.html
- Sentence: なら $q=1$ で $\operatorname{Tr}=\sum_{i}\sigma_{i}$。\ref{fld:dedekind-independence}から、相異なる $\sigma_{i}$ の係数 $1$ の和は $0$ 写像でない。$\operatorname{Tr}$ は $K$ 線形で値は $1$ 次元の $K$ にあるので、$0$ でなければ全射。
  - `lin:dimension`: NG — Here "1次元" refers to the dimension of the field $K$ as a vector space over itself, which is the same notion of dimension (a special case), so it matches the card's definition.
  - `cat:trace-dimension`: NG — Here "1次元" refers to the dimension of a vector space over $K$, not the categorical dimension $\dim a$ of a dualizable object defined in the card.
  - `ring:krull-dimension`: NG — Here "次元" refers to the dimension of a vector space over $K$ (a 1-dimensional $K$-vector space), not the Krull dimension of a ring defined in the card.
  - `ag:dimension`: NG — Here "1次元" refers to the dimension of a vector space over $K$, not the Krull dimension of a topological space defined in the card.

## 「生成元」 in 02-algebra/05-field-theory/02-galois-theory
- Default: `grp:generated-subgroup` → **fits: `grp:presentation`**
- Pages: 01-artin.html, 03-cyclotomic.html, 04-norm-kummer.html, 05-solvability.html, 07-constructions.html
- Sentence: 前半：$L$ は分離多項式 $f\in K[x]\subset M[x]$ の $M$ 上の分解体でもある（\ref{fld:galois-equivalent.3}）。後半：正規閉包は $L$ の生成元の最小多項式（分離的）の積の分解体（\ref{fld:normal-closure} の Step 1）で、Step 2 と同じく分離多項式にとれる。
  - `grp:generated-subgroup`: NG — Here "生成元" refers to generators of a field extension (elements generating $L$ over $M$), not generators of a group as defined in the card.
  - `grp:presentation`: OK

## 「辞書式順序」 in 02-algebra/05-field-theory/02-galois-theory
- Default: `set:well-order-sum-product-def` → **no candidate fits**
- Pages: 06-discriminant.html
- Sentence: **Step 1（辞書式順序）.** 単項式 $x^{a}=x_{1}^{a_{1}}\cdots x_{n}^{a_{n}}$ を指数の辞書式順序で比べる。$g\neq0$ の最大の単項式を**先頭項** $c\,x^{\lambda}$ と書く。積の先頭項は先頭項の積（$A$ に零因子があっても、$e_{k}$ の先頭項の係数は $1$ なの
  - `set:well-order-sum-product-def`: NG — It refers to the lexicographic order on exponent vectors in \(\mathbb{N}^{n}\), not the order on a product \(A\times B\) defined by the card.
  - `top:double-arrow`: NG — This is the lexicographic order on exponent vectors, not the lexicographic order on $[0,1]\times\{0,1\}$ used to define the double arrow space.

## 「閉包」 in 02-algebra/05-field-theory/02-galois-theory
- Default: `top:interior-closure` → **no candidate fits**
- Pages: 01-artin.html, 05-solvability.html, 07-constructions.html
- Sentence: （AC）$L/K$ がガロア拡大で $K\subset M\subset L$ なら、$L/M$ はガロア拡大。また、有限次分離拡大 $L/K$ の正規閉包（\ref{fld:normal-closure}）はガロア拡大（**ガロア閉包**）。
  - `top:interior-closure`: NG — Here "閉包" refers to the normal closure (ガロア閉包) of a field extension, not the topological closure of a subset.
  - `logic:ltl-size`: NG — This "閉包" refers to the Galois/normal closure of a field extension, not the closure CL(A) of a logical formula defined in the card.
  - `logic:ctl-closure`: NG — Here "閉包" refers to the normal/Galois closure of a field extension, not the modal-logic closure set CL(A) defined in the card.
  - `set:pred-closure`: NG — Here "閉包" refers to the normal/Galois closure of a field extension, not the set-theoretic closure cl(A,x,R) defined in the card.

## 「次元」 in 02-algebra/05-field-theory/03-advanced-galois-theory
- Default: `lin:dimension` → **no candidate fits**
- Pages: 02-etale-algebras.html
- Sentence: 体 $K$ 上の有限次元可換代数で、有限次分離拡大の直積と同型なものを**エタール代数**（有限分離代数）という。分離性は体の性質として定義したが（\ref{fld:separable-polynomial}）、エタール代数の言葉では「代数閉包へ係数拡大すると被約になる」「代数閉包への埋め込みがちょうど次元の個数だけある」と、元をとらずに言い換えられる。この言い換えで、ガロア拡大は「$L\otimes_{K}L\cong L^{[L:K]}$ となる拡大」、つまり「自分自身で係数拡大すると完全に分解する拡大」として特徴付けられる。次のページの\ref{fld:page-grothendieck-galois}では、エター
  - `lin:dimension`: NG — Here "次元" refers to the dimension of an algebra over a field (its vector space dimension), which is the same notion as the card's dimension of a vector space.
  - `cat:trace-dimension`: NG — Here "次元" means the dimension of a finite-dimensional algebra over a field, not the categorical dimension $\dim a=\operatorname{tr}(1_{a})$ defined in the card.
  - `ring:krull-dimension`: NG — Here "次元" refers to the dimension of a finite-dimensional algebra over a field (vector space dimension), not the Krull dimension of a ring defined in the card.
  - `ag:dimension`: NG — Here "次元" means the dimension of a finite-dimensional algebra over a field (a vector space dimension), not the topological dimension of a space defined via chains of irreducible closed subsets.

## 「逆極限」 in 02-algebra/05-field-theory/03-advanced-galois-theory
- Default: `cat:limit` → **fits: `ring:inverse-limit`**
- Pages: 04-infinite-galois.html
- Sentence: 無限次の代数拡大でも、正規かつ分離的なら**ガロア拡大**と呼ぶ。そのガロア群は、有限次の部分拡大のガロア群の逆極限（**射有限群**）で、自然な位相（**クルル位相**）をもつコンパクト群になる。基本定理は「中間体 ↔ 部分群」ではなく「中間体 ↔ **閉**部分群」の形でだけ成り立つ。実際、有限体の代数閉包のガロア群 $\hat\Z$ では、フロベニウスが生成する部分群 $\Z$ は稠密だが閉でなく、固定体は全体の固定体 $\m
  - `cat:limit`: NG — This "逆極限" (inverse limit) is the category-theoretic limit of an inverse system of finite groups, which is a special case of the limit defined in the card, so it does match.
  - `ring:inverse-limit`: OK

## 「連続」 in 02-algebra/05-field-theory/03-advanced-galois-theory
- Default: `top:continuous` → **no candidate fits**
- Pages: 03-grothendieck-galois.html, 04-infinite-galois.html
- Sentence: **無限版.** $L$ を分離閉包 $K^{\mathrm{sep}}$ にとると、$K$ 上のすべてのエタール代数の圏が、絶対ガロア群 $\operatorname{Gal}(K^{\mathrm{sep}}/K)$（射有限群。\ref{fld:page-infinite-galois}）が連続に作用する有限集合の圏と反変同値になることが知られている（本サイト未収録）。
  - `top:continuous`: NG — Here "連続" describes a continuous action of a profinite group on finite sets, not a continuous map between topological spaces as defined in the card.
  - `comp:monotone-continuous`: NG — Here "連続" refers to a continuous group action of a profinite group, not monotonicity/continuity of a map on power sets as in the card.
  - `cx:limit-continuity`: NG — Here "連続" describes a continuous action of a profinite group on finite sets (a topological-group notion), not continuity of a complex function as defined in the card.

## 「閉包」 in 02-algebra/05-field-theory/03-advanced-galois-theory
- Default: `top:interior-closure` → **no candidate fits**
- Pages: 01-galois-connection.html, 03-grothendieck-galois.html, 04-infinite-galois.html
- Sentence: - $\mathcal{P}(X)$ は集合 $X$ の冪集合。半順序集合の間の随伴（$f(p)\le q\iff p\le g(q)$）と閉包作用素は \ref{cat:prob-galois-connection}。
  - `top:interior-closure`: NG — Here 閉包作用素 refers to a closure operator in order theory, not the topological closure of a subset defined in the card.
  - `logic:ltl-size`: NG — This "閉包" refers to a closure operator in order theory, not the closure set CL(A) of an LTL formula defined in the card.
  - `logic:ctl-closure`: NG — Here 閉包 refers to a closure operator in order theory (Galois connections), not the CTL formula closure set CL(A) defined in the card.
  - `set:pred-closure`: NG — one short English sentence why

## 「分離的」 in 02-algebra/05-field-theory/04-transcendental-extensions
- Default: `fld:separable-polynomial` → **no candidate fits**
- Pages: 02-separably-generated.html
- Sentence: 有限生成拡大 $L/K$ に、$L/K(B)$ が**分離的**な代数拡大になる超越基底 $B$（**分離超越基底**）があるとき、$L/K$ は**分離生成**であるという。標数 $0$ ではすべての有限生成拡大が分離生成だが、標数 $p$ では超越基底の選び方が重要で、$\mathbb{F}_{p}(x)$ の超越基底 $\{x^{p}\}$ のように分離的でないものもある
  - `fld:separable-polynomial`: NG — Here "分離的" describes the algebraic extension $L/K(B)$, which matches the card's definition of a separable extension, so it is the same notion.
  - `set:separative`: NG — This "分離的" refers to separable field extensions, not the separable partial order defined in the card.
  - `cat:separated-presheaf`: NG — This "分離的" refers to separable field extensions, not the separability condition for presheaves defined in the card.
  - `ring:completion`: NG — This "分離的" refers to separable field extensions, not the separatedness of a module under the \(I\)-adic topology.
  - `mod:separable-algebra`: NG — This "separable" refers to separable field extensions, not the separable algebra notion defined by the card.
  - `ag:separated`: NG — This "分離的" refers to separable field extensions, not the scheme morphism notion of being separated (分離射) defined in the card.

## 「有限生成」 in 02-algebra/05-field-theory/04-transcendental-extensions
- Default: `ring:generated-ideal-def` → **no candidate fits**
- Pages: 01-transcendence-basis.html, 02-separably-generated.html
- Sentence: - **選択公理**：超越基底の存在（ツォルンの補題）と、無限の場合の濃度の比較（基数の積）で使う。有限生成の拡大では使わない。
  - `ring:generated-ideal-def`: NG — Here "有限生成" refers to field extensions being finitely generated, not ideals in a commutative ring.
  - `grp:generated-subgroup`: NG — In the sentence "有限生成" modifies field extensions (finitely generated extensions), not finitely generated groups as defined in the card.
  - `mod:generated-submodule`: NG — Here "有限生成" refers to finitely generated field extensions, not finitely generated modules as defined in the card.

## 「次元」 in 02-algebra/05-field-theory/04-transcendental-extensions
- Default: `lin:dimension` → **fits: `ring:krull-dimension`**
- Pages: 01-transcendence-basis.html, 02-separably-generated.html
- Sentence: 2. 体上有限生成な整域 $A$ の次元は $\operatorname{trdeg}_{K}\operatorname{Frac}A$（ネーターの正規化 \ref{ring:noether-normalization} で $A$ が $K[y_{1},\dots,y_{d}]$ 上整になるとき、$y_{i}$ が超越基底）。
  - `lin:dimension`: NG — This "次元" is the Krull dimension of a ring (transcendence degree), not the dimension of a vector space as defined in the card.
  - `cat:trace-dimension`: NG — This "次元" is the Krull dimension of a ring, not the categorical dimension $\dim a=\operatorname{tr}(1_{a})$ defined in the card.
  - `ring:krull-dimension`: OK

## 「生成元」 in 02-algebra/05-field-theory/04-transcendental-extensions
- Default: `grp:generated-subgroup` → **no candidate fits**
- Pages: 01-transcendence-basis.html, 02-separably-generated.html
- Sentence: **代数的.** $L$ は $K(B)$ 上代数的なので $L(C)$ は $K(B\cup C)$ 上代数的（生成元 $L$ の元が代数的。\ref{fld:relative-algebraic-closure}）、$M$ は $L(C)$ 上代数的なので、推移性から $M$ は $K(B\cup C)$ 上代数的。
  - `grp:generated-subgroup`: NG — Here "生成元" refers to generators of a field extension over a base field, not generators of a group as defined in the card.
  - `grp:presentation`: NG — This "生成元" refers to field generators in a field extension, not the generators of a group presentation as defined in the card.

## 「閉包」 in 02-algebra/05-field-theory/04-transcendental-extensions
- Default: `top:interior-closure` → **no candidate fits**
- Pages: 01-transcendence-basis.html
- Sentence: **一般化.** 交換の性質をもつ閉包作用素（マトロイド）一般について、基底の存在と濃度の一意性が同じ証明で成り立つ。ベクトル空間の一次従属（\ref{mod:vector-space-dimension}）とこのページの代数的従属はその二つの例である。
  - `top:interior-closure`: NG — This "閉包作用素" refers to a closure operator in matroid theory, not the topological closure of a subset defined in the card.
  - `logic:ltl-size`: NG — This "閉包作用素" refers to a closure operator in matroid theory, not the LTL formula closure set CL(A) defined in the card.
  - `logic:ctl-closure`: NG — This "閉包作用素" refers to a closure operator in matroid theory, not the CTL closure set CL(A) defined in the card.
  - `set:pred-closure`: NG — This "閉包作用素" refers to a closure operator in matroid theory, not the set-theoretic closure cl(A,x,R) defined in the card.

## 「ホモトピー」 in 02-algebra/06-homological-algebra/01-abelian-categories
- Default: `at:homotopy` → **no candidate fits**
- Pages: 04-chain-complexes.html
- Sentence: 渡される」ことを表す。比喩で言えば、三本の水路 $A$, $B$, $C$ が並んで流れているとき、$C$ でせき止められた水（$H_{n}(C)$ の元）は、行き場を失った分だけ一段下の $A$ に溢れ出す（$\delta_{n}$）。圏論的には、$H_{n}$ は鎖複体の圏からの加法関手で、鎖ホモトピーで割った圏（ホモトピー圏）を経由し、長完全列はその「三角形」の構造の影である。
  - `at:homotopy`: NG — This use refers to chain homotopy in homological algebra, not the topological homotopy of continuous maps defined in the card.
  - `logic:homotopy-funext`: NG — This use of ホモトピー refers to chain homotopy in homological algebra, not the type-theoretic homotopy defined as a pointwise identity type.

## 「推移律」 in 02-algebra/06-homological-algebra/01-abelian-categories
- Default: `set:total-order` → **no candidate fits**
- Pages: 03-diagram-lemmas.html
- Sentence: 反射律（$u=v=1$）と対称律は明らか。推移律：$xu=yv$, $yw=zr$（$u,v,w,r$ エピ）とし、$v$ と $w$ の引き戻し（$vv'=ww'$ となる $v',w'$）をとると、\ref{ha:pullback-epi} から $v',w'$ はエピ。$x(uv')=yvv'=yww'=z(rw')$ で、$uv'$, $rw'$ はエピ。$
  - `set:total-order`: NG — This "推移律" is the transitivity of a composition relation in a category-theoretic pullback argument, not the transitivity condition on a relation $R$ in a partially ordered set as defined in the card.
  - `set:forcing-poset`: NG — This "推移律" is the transitivity property of a composition relation in a category-theoretic pullback argument, not the transitivity axiom of a forcing poset as defined in the card.

## 「準同型」 in 02-algebra/06-homological-algebra/01-abelian-categories
- Default: `cat:monoid-object` → **fits: `grp:homomorphism`**
- Pages: 01-additive.html, 05-freyd-mitchell.html
- Sentence: アーベル群や加群の圏では、準同型の和が定義でき、直積と直和が一致し、核と余核がある。本ページでは、これらの性質を圏の言葉で取り出す。零対象をもつ圏では**零射**と**核・余核**が定義でき（\ref{ha:kernel-cokernel}）、核と余核はガロア接続をなす。hom 集合がアーベル群で合成が双線形な圏（**前加法圏**、\ref{ha:p
  - `cat:monoid-object`: NG — Here "準同型" refers to homomorphisms of abelian groups/modules, not monoid homomorphisms in a monoidal category.
  - `cat:t-algebra`: NG — Here "準同型" refers to homomorphisms of abelian groups/modules, not T-algebra homomorphisms as defined in the card.
  - `grp:homomorphism`: OK

## 「被覆」 in 02-algebra/06-homological-algebra/01-abelian-categories
- Default: `cat:continuous-gsets` → **no candidate fits**
- Pages: 03-diagram-lemmas.html
- Sentence: **高い視点から：メンバーは「一般化された元」.** メンバー $x\colon s\to a$ は、米田の補題の見方では「$s$ をパラメータとする $a$ の元の族」である。エピ射による同一視は「パラメータを細かく取り替えても同じ元」とみることに当たり、代数幾何の「平坦な被覆で局所的に」という考え方と同じ形をしている。比喩で言えば、元を直接つかめない部屋でも、「懐中電灯（射）で照らした像」を、照らし方の違い（エピ射）を除いて比べれば、元があるのと同じように推論できる、ということである。
  - `cat:continuous-gsets`: NG — Here "被覆" refers to a covering in algebraic geometry (flat coverings), not the Grothendieck topology covering sieve defined in the card.
  - `at:covering`: NG — Here "被覆" refers to a flat covering in algebraic geometry (a cover in the sense of Grothendieck topologies), not a covering map as defined in the card.

## 「逆像」 in 02-algebra/06-homological-algebra/01-abelian-categories
- Default: `cat:inverse-image` → **fits: `set:function`**
- Pages: 01-additive.html
- Sentence: 2. 基点付き集合の圏では、一点集合が零対象で、$f$ の核は基点の逆像の包含。エピ射は核で決まらない（$\mathbf{Grp}$ とは違う）。
  - `cat:inverse-image`: NG — Here "逆像" means the preimage of a point under a map of pointed sets, not the (pre)sheaf inverse image functor defined in the card.
  - `set:function`: OK

## 「閉包」 in 02-algebra/06-homological-algebra/01-abelian-categories
- Default: `top:interior-closure` → **no candidate fits**
- Pages: 05-freyd-mitchell.html
- Sentence: **Step 2（閉包）.** 対象の集合 $S_{0}\defeq S\cup\{0\}$ とし、$S_{n+1}$ を $S_{n}$ に、$S_{n}$ の対象の間の射 $f$ すべての $k_{f}$, $c_{f}$ と、$a,b\in S_{n}$ のすべての $a\oplus b$ を加えたものとする。$\mathbf{A}$
  - `top:interior-closure`: NG — Here "閉包" refers to closing a set under operations (a closure under operations), not the topological closure of a subset.
  - `logic:ltl-size`: NG — This "閉包" is a closure of a set under operations, not the closure CL(A) of a logical formula defined in the card.
  - `logic:ctl-closure`: NG — This "閉包" refers to a closure construction in a stepwise set-building process, not the minimal set of subformulas closed under the CTL closure conditions defined in the card.
  - `set:pred-closure`: NG — This "閉包" refers to a closure construction in a stepwise set-generation process, not the transitive closure $\mathrm{cl}(\mathbf{A},x,\mathbf{R})$ defined by iterated predecessors in the card.

## 「上界」 in 02-algebra/06-homological-algebra/02-derived-functors
- Default: `calc:supremum` → **fits: `set:chain-maximal`**
- Pages: 04-injective-modules.html
- Sentence: \subseteq M'\subseteq N$ は部分加群、$f'\colon M'\to E$ は $f$ の延長）全体に、「$M'\subseteq M''$ かつ $f''|_{M'}=f'$」で順序を入れる。$(M,f)$ を含むので空でなく、鎖 $(M'_{\lambda},f'_{\lambda})$ の上界は和集合 $\bigcup M'_{\lambda}$（鎖なので部分加群）と、各 $M'_{\lambda}$ 上で $f'_{\lambda}$ に一致する写像（鎖なので矛盾なく定まり、準同型）である。\ref{set:zorn}から極大元 $(M',f')$ がある。
  - `calc:supremum`: NG — Here "上界" refers to an upper bound of a chain in a partially ordered set (for Zorn's lemma), not the upper bound of a subset of a totally ordered field as defined in the card.
  - `set:chain-maximal`: OK

## 「切断」 in 02-algebra/06-homological-algebra/02-derived-functors
- Default: `cat:monic-epic` → **no candidate fits**
- Pages: 09-delta-functors.html
- Sentence: **似た定理.** 普遍 δ 関手の考え方は、層のコホモロジー（大域切断関手の右導来関手）を、チェックのコホモロジーなど別の方法で計算したものと比較するときの標準的な道具である、と一般に言われている。
  - `cat:monic-epic`: NG — Here "切断" means a global section of a sheaf, not a section (splitting monomorphism) in the category-theoretic sense defined by the card.
  - `pt:m-finite-cut`: NG — Here "切断" means a section of a sheaf (global section functor), not a cut/initial segment of a model of PRA as defined in the card.

## 「忠実」 in 02-algebra/06-homological-algebra/02-derived-functors
- Default: `cat:full-faithful` → **fits: `mod:annihilator`**
- Pages: 06-tensor-tor.html
- Sentence: - 可換環上のテンソル積の計算（交換・結合・剰余・スカラーの拡大）は \tref{mod:page-tensor-products}、平坦性のイデアルによる判定と忠実平坦性は \ref{mod:page-flatness}。
  - `cat:full-faithful`: NG — Here「忠実」modifies 平坦性 (faithful flatness), a module-theoretic notion, not the faithfulness of a functor defined in the card.
  - `grp:faithful-transitive`: NG — Here "忠実" is part of "忠実平坦性" (faithfully flat), a module-theoretic notion, not faithfulness of a group action.
  - `mod:annihilator`: OK

## 「有限生成」 in 02-algebra/06-homological-algebra/02-derived-functors
- Default: `ring:generated-ideal-def` → **fits: `mod:generated-submodule`**
- Pages: 06-tensor-tor.html
- Sentence: 有限生成の自由右 $R$ 加群 $R^{k}$ は平坦であることを示せ。
  - `ring:generated-ideal-def`: NG — Here "有限生成" modifies a module (finitely generated module), not an ideal as defined in the card.
  - `grp:generated-subgroup`: NG — Here "finitely generated" refers to a module over a ring, not a group as defined in the card.
  - `mod:generated-submodule`: OK

## 「次元」 in 02-algebra/06-homological-algebra/02-derived-functors
- Default: `cat:trace-dimension` → **no candidate fits**
- Pages: 07-ext-injective.html, 08-projective-dimension.html, 09-delta-functors.html
- Sentence: ves}）ので、第二変数 $b$ の**入射分解**を使って $\mathrm{Hom}_{R}(a,-)$ の右導来関手としても定義できる（\ref{ha:ext-injective-def}）。本ページでは、二つの定義が同じ群を与えること（**Ext の平衡性**、\ref{ha:ext-balance}）を、**次元ずらし**の議論で示す。系として、$b$ が入射的であることと $\mathrm{Ext}^{1}(-,b)=0$ が同値であること（\ref{ha:ext-injective-criterion}）を得る。
  - `cat:trace-dimension`: NG — Here "次元ずらし" (dimension shifting) refers to a homological algebra technique, not the categorical dimension defined in the card.
  - `lin:dimension`: NG — Here "次元ずらし" refers to a dimension shift in homological algebra, not the dimension of a vector space as defined in the card.
  - `ring:krull-dimension`: NG — Here "次元" is part of "次元ずらし" (dimension shifting) in homological algebra, not Krull dimension or height of a prime ideal.
  - `ag:dimension`: NG — Here「次元ずらし」means a dimension shift in homological algebra, not the topological dimension defined in the card.

## 「準同型」 in 02-algebra/06-homological-algebra/02-derived-functors
- Default: `cat:monoid-object` → **fits: `grp:homomorphism`**
- Pages: 01-projective-resolutions.html, 03-tor-ext.html, 04-injective-modules.html, 05-extensions.html, 06-tensor-tor.html, 09-delta-functors.html
- Sentence: $P\neq0$ を有限アーベル群、$m\defeq\lvert P\rvert$ とし、$P$ を生成する元 $p_{1},\dots,p_{k}$ をとる。$Q\defeq(\mathbb{Z}/m^{2})^{k}$ から $P$ への準同型 $\pi$ を、第 $i$ 成分の生成元を $p_{i}$ に送るものとして定める（$m^{2}p_{i}=0$ なので定まる）。$\pi$ は全射で、$\mathbf{FinAb}$ で全射はエピ射である。
  - `cat:monoid-object`: NG — Here "準同型" means a group homomorphism between abelian groups, not a monoid homomorphism in a monoidal category as defined in the card.
  - `cat:t-algebra`: NG — Here "準同型" means a group homomorphism between abelian groups, not a homomorphism of T-algebras.
  - `grp:homomorphism`: OK

## 「ノルム」 in 03-number-theory/01-algebraic-number-theory/01-number-fields
- Default: `calc:norm` → **no candidate fits**
- Pages: 01-rings-of-integers.html, 02-prime-decomposition.html, 03-decomposition-inertia.html, 04-ramification-discriminant.html, 06-class-group.html, 07-units.html
- Sentence: - トレースとノルム（掛け算写像のトレースと行列式）、共役による表示、トレース形式の非退化性は \ref{ring:trace-norm}, \ref{ring:trace-conjugates}。整な元のトレース・ノルム・最小多項式は $A$ に入る（$A$ 正規）は \ref{ring:integral-trace-norm}。整閉包の有限性（PID 上なら自由）は \ref{ring:integral-closure-finite}。
  - `calc:norm`: NG — Here "ノルム" refers to the field norm of an algebraic element (trace and norm in ring theory), not the norm on a real vector space defined in the card.
  - `comp:pi11-norm`: NG — This "ノルム" is the field-theoretic norm (trace and norm of multiplication maps), not a function from a set of naturals to ordinals.

## 「上界」 in 03-number-theory/01-algebraic-number-theory/01-number-fields
- Default: `set:chain-maximal` → **no candidate fits**
- Pages: 02-prime-decomposition.html
- Sentence: **Step 4（指数の上界）.** $\prod_{i}\mathfrak{P}_{i}^{e_{i}}\subset p\mathcal{O}_{K}+\prod_{i}g_{i}(\theta)^{e_{i}}\mathcal{O}_{K}$（積を展開すると、$p$ を因子に含まない項は $\prod g_{i}(\theta)^{e_{i
  - `set:chain-maximal`: NG — Here "上界" means an upper bound on exponents (a numerical bound), not an upper bound of a subset in a partially ordered set as defined in the card.
  - `calc:supremum`: NG — Here "上界" means an upper bound on the exponents \(e_{i}\), not an upper bound of a subset in an ordered set as defined in the card.

## 「互いに素」 in 03-number-theory/01-algebraic-number-theory/01-number-fields
- Default: `grp:gcd` → **fits: `pt:prime`**
- Pages: 01-rings-of-integers.html, 02-prime-decomposition.html, 08-p-adic.html
- Sentence: ルの分解は \tref{nt:page-prime-decomposition} で扱う）。一般の円分体 $\mathbb{Q}(\zeta_{n})$ でも $\mathcal{O}=\mathbb{Z}[\zeta_{n}]$ であることが知られている（本サイト未収録。素数冪の場合は上と同様の議論、一般には判別式が互いに素な体の合成の議論による）。
  - `grp:gcd`: NG — Here "互いに素" describes discriminants being coprime, not integers $a,b$ with $\gcd(a,b)=1$ as defined in the card.
  - `pt:prime`: OK

## 「位数」 in 03-number-theory/01-algebraic-number-theory/01-number-fields
- Default: `grp:abelian-group` → **no candidate fits**
- Pages: 01-rings-of-integers.html, 03-decomposition-inertia.html, 04-ramification-discriminant.html, 05-quadratic-cyclotomic.html, 06-class-group.html
- Sentence: **Step 1（背理法の設定）.** $p$ が指数を割り切るとすると、$\mathcal{O}_{K}/\mathbb{Z}[\theta]$ は位数 $p$ の元をもつ（コーシーの定理 \tref{grp:cauchy}）ので、$\xi\in\mathcal{O}_{K}\setminus\mathbb{Z}[\theta]$ で $p\xi\in\mathbb{Z}[\theta]$ となるものがある。$\xi=(a_{0}+a_{1}\theta+\dots+
  - `grp:abelian-group`: NG — Here "位数" means the order of an element (the smallest positive n with p·x=0), not the order |G| of a group as defined in the card.
  - `grp:element-order`: NG — Here "位数" means the order (size) of a quotient group/ring, not the order of a single group element as defined in the card.
  - `cx:isolated-singularity`: NG — Here "位数" means the order of an element in a finite abelian group, not the order (pole order) of a pole as defined in the card.
  - `cx:elliptic-function`: NG — In the sentence, 位数 means the order of a group element, not the number of poles of an elliptic function.

## 「分離的」 in 03-number-theory/01-algebraic-number-theory/01-number-fields
- Default: `ring:completion` → **fits: `fld:separable-polynomial`**
- Pages: 08-p-adic.html
- Sentence: **Step 6（4）.** $K\cong\mathbb{Q}[x]/(f)$ なので $K\otimes\mathbb{Q}_{p}\cong\mathbb{Q}_{p}[x]/(f)$。$f$ は分離的なので既約因子は相異なり、中国剰余定理で $\mathbb{Q}_{p}[x]/(f)\cong\prod_{j}\mathbb{Q}_{p}[x]/(f_{j}^{\mathrm{loc}})$（体の積）。有限個の体の積として書く方法は、極大イデアル（成分の一つを $0$ にするもの）の集合と、その剰余体で決まるので
  - `ring:completion`: NG — Here "分離的" refers to a separable polynomial (having distinct roots), not the $I$-adic separatedness of a module defined in the card.
  - `set:separative`: NG — Here "分離的" means separable (a polynomial with distinct roots), not the order-theoretic notion of a separable partial order.
  - `cat:separated-presheaf`: NG — Here "分離的" refers to a separable polynomial (having distinct roots), not the separability condition of a presheaf.
  - `mod:separable-algebra`: NG — Here "分離的" refers to the polynomial $f$ being separable (having distinct roots), not to an algebra being separable in the sense of the card's definition.
  - `fld:separable-polynomial`: OK

## 「推移律」 in 03-number-theory/01-algebraic-number-theory/01-number-fields
- Default: `set:total-order` → **no candidate fits**
- Pages: 02-prime-decomposition.html
- Sentence: **Step 2（正規）.** $\mathcal{O}_{K}$ は $\mathbb{Z}$ の $K$ における整閉包で、整閉包の推移律（\ref{ring:integral-closure}）から $K$ の元で $\mathcal{O}_{K}$ 上整なものは $\mathbb{Z}$ 上整、すなわち $\mathcal{O}_{K}$ に入る。$\operatorname{Frac}\mathcal{O}_{K}=K$（\ref{nt:integ
  - `set:total-order`: NG — This "推移律" refers to transitivity of integral closure of rings, not the transitivity condition in the definition of a partial order.
  - `set:forcing-poset`: NG — This "推移律" refers to transitivity of integral closure in ring theory, not the transitivity axiom in the definition of a partial order.

## 「有限生成」 in 03-number-theory/01-algebraic-number-theory/01-number-fields
- Default: `mod:generated-submodule` → **no candidate fits**
- Pages: 06-class-group.html
- Sentence: ** 類 $c$ をとり、$c^{-1}$ の整イデアル $\mathfrak{a}$ をとる（分数イデアル $\mathfrak{c}$ について、$0\neq d\in\mathbb{Z}$ で $d\mathfrak{c}\subset\mathcal{O}_{K}$ となるもの：$\mathfrak{c}$ は有限生成で、生成元の分母を払う）。\ref{nt:small-norm-element} の $\alpha\in\mathfrak{a}$ について $\alpha\mathcal{O}_{K}\subset\mathfrak{a}$ なので、含むは割るから $\alpha\mathcal{O}_{K}=\mathfrak{
  - `mod:generated-submodule`: NG — Here "有限生成" describes a fractional ideal as a module over the ring of integers, which is the same module-theoretic notion of finite generation defined in the card.
  - `grp:generated-subgroup`: NG — Here "有限生成" refers to a finitely generated ideal/module in algebraic number theory, not a finitely generated group as defined in the card.
  - `ring:generated-ideal-def`: NG — Here "有限生成" refers to a fractional ideal being finitely generated as a module, not specifically to an ideal generated by a finite set as defined in the card.

## 「有限生成」 in 03-number-theory/01-algebraic-number-theory/01-number-fields
- Default: `grp:generated-subgroup` → **no candidate fits**
- Pages: 07-units.html
- Sentence: **前提を弱めると.** 有限個の素イデアルの集合 $S$ を加えた **$S$ 単数**（$S$ の外では単元）の群は $\mu_{K}\times\mathbb{Z}^{r+|S|}$ と同型である（同じ方法で、$S$ の素イデアルでの付値の座標を加える）。関数体では、単数群は定数体の乗法群と有限生成自由群の積になる（無限遠の点の個数で階数が決まる）。
  - `grp:generated-subgroup`: NG — Here “有限生成” describes a free group (finite rank), not a group having a finite generating set as defined in the card.
  - `ring:generated-ideal-def`: NG — Here "有限生成" modifies a free group (a finitely generated group), not an ideal generated by a finite set, so it is a different notion.
  - `mod:generated-submodule`: NG — Here "有限生成自由群" means a finitely generated free group, not a finitely generated module as defined in the card.

## 「次元」 in 03-number-theory/01-algebraic-number-theory/01-number-fields
- Default: `lin:dimension` → **fits: `ring:krull-dimension`**
- Pages: 01-rings-of-integers.html, 02-prime-decomposition.html, 07-units.html, 08-p-adic.html
- Sentence: $\operatorname{Spec}\mathcal{O}_{K}$ は 1 次元のスキームで、$\operatorname{Spec}\mathbb{Z}$ 上の有限な被覆（\ref{ag:fibers-gaussian} の $\mathbb{Z}[i]$ のように、各素数でのファイバーが有限個の点）である。整数環を決めることは、方程式 $f(\theta)=0$ が定める（特異点をもちうる）曲
  - `lin:dimension`: NG — Here "次元" refers to the Krull dimension of a scheme, not the dimension of a vector space as defined in the card.
  - `cat:trace-dimension`: NG — Here "次元" means the Krull dimension of a scheme, not the categorical dimension defined via trace in a dualizable object.
  - `ring:krull-dimension`: OK

## 「生成元」 in 03-number-theory/01-algebraic-number-theory/01-number-fields
- Default: `grp:generated-subgroup` → **no candidate fits**
- Pages: 03-decomposition-inertia.html, 06-class-group.html, 07-units.html
- Sentence: **Step 2（2：よい代表元）.** $\kappa(\mathfrak{P})^{\times}$ の生成元 $\bar{a}$ をとる（\ref{fld:finite-field-properties.1}）。$\kappa(\mathfrak{P})=\mathbb{F}_{p}(\bar{a})$。中国剰余定理で $a\in\mathcal{O}_{K}$ を、$a\equiv\bar{a}\pmod{\mathfra
  - `grp:generated-subgroup`: NG — Here "生成元" means a generator of the multiplicative group $\kappa(\mathfrak{P})^{\times}$ (a single element generating a group), whereas the card defines "生成元" as a generating set $S$ of a group $G$; a single element is a special case, but the card's notion is a set of generators, and the sentence uses it for one element generating a multiplicative group — this is the same notion (a special case), so it should be ok.
  - `grp:presentation`: NG — Here "生成元" means a generator of the multiplicative group $\kappa(\mathfrak{P})^{\times}$, not a generator in a group presentation as defined in the card.

## 「直和」 in 03-number-theory/01-algebraic-number-theory/01-number-fields
- Default: `mod:direct-sum` → **no candidate fits**
- Pages: 08-p-adic.html
- Sentence: **Step 4（2：階数）.** $\hat{\mathcal{O}}_{\mathfrak{P}_{i}}$ は 1 から有限生成 $\mathbb{Z}_{p}$ 加群（$\mathbb{Z}_{p}^{n}$ の直和因子）で、整域なので捩れがなく、PID $\mathbb{Z}_{p}$ 上自由（\ref{mod:pid-submodule-free}）。階数は $\dim_{\mathbb{F}_{p}}\hat{\mathcal{O}}_{\mathfrak{P}_{i}}/p=\dim_{\mathbb{F}_{p}}\ma
  - `mod:direct-sum`: NG — Here "直和因子" (direct summand) refers to a module that is a direct summand of a free module, which is a related but distinct notion from the definition of direct sum of a family of modules.
  - `rep:constructions`: NG — Here "直和因子" means a direct summand of a module, not the direct sum of representations defined in the card.

## 「引き戻し」 in 04-analysis/01-real-analysis/01-real-numbers
- Default: `calc:pullback` → **no candidate fits**
- Pages: 01-ordered-fields.html
- Sentence: n\mathbb{Q}$ なので、$\sigma_{\pm}(a+b\sqrt2)\defeq a\pm b\sqrt2\in\mathbb{R}$ はどちらも単射な環準同型。$x>_{\pm}y\iff\sigma_{\pm}(x)>\sigma_{\pm}(y)$ は順序体の順序（$\mathbb{R}$ の順序の引き戻し）で、$>_{+}$ では $\sqrt2>0$、$>_{-}$ では $\sqrt2<0$。
  - `calc:pullback`: NG — Here "引き戻し" refers to pulling back an order on ℝ via the maps σ_{±}, not the pullback of a differential form as defined in the card.
  - `cat:product`: NG — Here "引き戻し" refers to pulling back an order along a map (preimage of a relation), not the categorical fiber product/pullback defined in the card.

## 「次元」 in 04-analysis/01-real-analysis/01-real-numbers
- Default: `lin:dimension` → **no candidate fits**
- Pages: 05-series.html
- Sentence: - $\mathbb{R}$ では、すべての再配列が収束すること（**無条件収束**）と絶対収束は同値である（\ref{calc:absolute-rearrangement} とリーマンの再配列定理）。無限次元のバナッハ空間では、無条件収束するが絶対収束しない級数が必ず存在する（ドヴォレツキー–ロジャースの定理、知られている）。
  - `lin:dimension`: NG — Here "次元" refers to the dimension of a Banach space (infinite-dimensional), which is the same vector-space dimension notion defined by the card, so it matches.
  - `cat:trace-dimension`: NG — Here "次元" refers to the dimension of a Banach space (infinite-dimensional), not the categorical dimension defined via trace in the card.
  - `ring:krull-dimension`: NG — This "次元" refers to the dimension of a Banach space (infinite-dimensional), not the Krull dimension of a ring defined in the card.
  - `ag:dimension`: NG — Here "次元" refers to the dimension of a Banach space (a linear-algebraic/topological notion), not the dimension of a topological space defined via chains of irreducible closed subsets.

## 「自己同型」 in 04-analysis/01-real-analysis/01-real-numbers
- Default: `ring:homomorphism` → **no candidate fits**
- Pages: 03-construction.html
- Sentence: $\mathbb{Q}(\sqrt2)$ の体の自己同型 $a+b\sqrt2\mapsto a-b\sqrt2$ は、\ref{calc:complete-ordered-field-unique.3} の議論（正の元は平方）がなぜ使えないかを示す例であることを説明せよ。
  - `ring:homomorphism`: NG — It is a field automorphism, not a ring automorphism as defined for rings \(A,B\) in the card (though a field is a ring, the card's definition is for ring homomorphisms and the term here is used in the field-theoretic sense).
  - `grp:homomorphism`: NG — This is an automorphism of a field, not of a group as defined in the card.

## 「連続」 in 04-analysis/01-real-analysis/01-real-numbers
- Default: `calc:function-limit` → **no candidate fits**
- Pages: 01-ordered-fields.html, 02-continuity-axioms.html, 03-construction.html, 04-sequences.html, 06-exercises.html
- Sentence: 実数の性質は、「四則演算ができる」（体）、「大小が比べられ、演算と両立する」（順序体）、「すき間がない」（連続の公理）の三段に分けて理解できる。このページでは前の二段を扱う。任意の順序体が有理数体 $\mathbb{Q}$ を含むこと、「自然数がいくらでも大きくなる」という**アルキメデスの原理**とその言い換え、それが成り立たない順序体（無限小を含む体）の例、そして第三段で使う上限・下限の定義を述べる。次ページ \ref[連
  - `calc:function-limit`: NG — Here "連続" refers to the completeness axiom of the real numbers (order completeness), not continuity of a function as defined in the card.
  - `comp:monotone-continuous`: NG — Here "連続" refers to the completeness axiom of the real numbers (order-theoretic continuity), not continuity of a function between powersets as defined in the card.
  - `cx:limit-continuity`: NG — Here "連続" refers to the completeness axiom (連続の公理) of the real numbers, not continuity of a complex function as defined in the card.
  - `top:continuous`: NG — Here "連続" refers to the completeness axiom (連続の公理) of the real numbers, not continuity of a map between topological spaces.

## 「次元」 in 04-analysis/01-real-analysis/02-calculus
- Default: `lin:dimension` → **no candidate fits**
- Pages: 05-fundamental-theorem.html, 10-gamma.html
- Sentence: **高い視点.** 基本定理は、微分 $d$ と積分 $\int$ が互いに逆であるという、一次元のストークスの定理 $\int_{[a,b]}dF=\int_{\partial[a,b]}F=F(b)-F(a)$ であり、多様体の上のストークスの定理に一般化される（多様体論で扱う予定）。比喩で言えば、積分は「各瞬間の速度を足し合わせて全体の移動距離を出す」操作で、基本定理は「移動距離は出発点と到着点の位置の差だけ
  - `lin:dimension`: NG — Here "一次元" means one-dimensional (the dimension of the interval [a,b]), which is the linear-algebra notion of dimension defined in the card.
  - `cat:trace-dimension`: NG — Here "次元" means the dimension of an interval/manifold (one-dimensional), not the categorical dimension $\dim a$ defined via trace in a monoidal category.
  - `ring:krull-dimension`: NG — Here "次元" refers to the dimension of an interval/manifold in calculus (one-dimensional Stokes' theorem), not the Krull dimension of a ring.
  - `ag:dimension`: NG — Here "一次元" means one-dimensional (the interval [a,b]), not the dimension of a topological space as defined in the card.

## 「上限」 in 04-analysis/01-real-analysis/03-multivariable-calculus
- Default: `calc:supremum` → **no candidate fits**
- Pages: 01-euclidean-space.html, 05-multiple-integrals.html, 08-parameter-integrals.html
- Sentence: \sum_{j}a_{ij}x_{j}$ で、コーシー–シュワルツから $|\sum_{j}a_{ij}x_{j}|^{2}\le(\sum_{j}a_{ij}^{2})|x|^{2}$。$i$ について足すと $|Ax|^{2}\le(\sum_{i,j}a_{ij}^{2})|x|^{2}$。$|x|\le1$ で上限をとって右の不等式。左：$x=e_{j}$ とすると $|Ae_{j}|\ge|a_{ij}|$ なので $\|A\|\ge|a_{ij}|$。
  - `calc:supremum`: NG — Here "上限" means the supremum taken over $|x|\le 1$ (an operator norm), not the least upper bound of a subset as defined in the card.
  - `set:order-dedekind-complete`: NG — Here "上限" means the supremum taken over $\|x\|\le 1$ (the operator norm), not the least upper bound of a bounded subset as defined in the Dedekind-completeness card.
  - `logic:rm-analysis-defs`: NG — Here "上限" means the supremum taken over all $x$ with $|x|\le 1$ (an operator norm), not the least upper bound of a real sequence as defined in the card.

## 「体積」 in 04-analysis/01-real-analysis/03-multivariable-calculus
- Default: `calc:jordan-measurable` → **no candidate fits**
- Pages: 05-multiple-integrals.html, 06-fubini.html, 07-change-of-variables.html, 08-parameter-integrals.html, 09-differential-forms.html, 11-exercises.html
- Sentence: - **直方体**：$R=\prod_{i=1}^{n}[a_{i},b_{i}]$（$a_{i}\le b_{i}$）を閉直方体、$\prod(a_{i},b_{i})$ を開直方体といい、どちらも**体積** $v(R)\defeq\prod_{i}(b_{i}-a_{i})$ をもつ。$\operatorname{int}R$ は内部。
  - `calc:jordan-measurable`: NG — Here "体積" refers to the volume of a rectangle (product of side lengths), not the Jordan measure of a Jordan-measurable set as defined in the card.
  - `nt:lattice`: NG — This "体積" is the elementary volume of a rectangular box, not the covolume of a lattice defined in the card.

## 「完備化」 in 04-analysis/01-real-analysis/03-multivariable-calculus
- Default: `calc:cauchy-construction` → **fits: `top:completion`**
- Pages: 10-limit-interchange.html
- Sentence: $(m,n)\mapsto a_{mn}$ を $(\N\cup\{\infty\})^{2}$ の角 $(\infty,\infty)$ まで連続に延長できるかという問題である。一様収束はその延長が存在するための条件で、一様構造（\ref{top:page-uniform-spaces}）の言葉では「一様連続な写像は完備化に延長できる」（\ref{top:uniform-extension}）の一例と見なせる。
  - `calc:cauchy-construction`: NG — This sentence uses "完備化" in the sense of the completion of a uniform space (a general topological construction), not the specific construction of the reals via Cauchy sequences of rationals defined in the card.
  - `ring:completion`: NG — This "完備化" refers to the completion of a uniform space, not the $I$-adic completion of a module defined in the card.
  - `top:completion`: OK

## 「導関数」 in 04-analysis/01-real-analysis/03-multivariable-calculus
- Default: `calc:derivative` → **fits: `cx:holomorphic`**
- Pages: 02-differentiability.html, 03-higher-derivatives.html, 04-inverse-implicit.html, 08-parameter-integrals.html, 10-limit-interchange.html
- Sentence: $ は「$f(a+h)-f(a)$ を $h$ の 1 次式 $f'(a)h$ で近似したときの係数」と読み直せる。多変数では、この「1 次式」を**線形写像**に置き換えたものが**全微分**である。このページでは全微分を定義し、偏微分・方向微分との関係（全微分可能なら偏微分はすべて存在するが、逆は成り立たない）、偏導関数が連続なら全微分可能であること、**連鎖律**、**平均値の不等式**を示す。前ページ（\ref{calc:page-euclidean-space}）の作用素ノルムを使う。
  - `calc:derivative`: NG — the sentence uses 導関数 only inside 偏導関数 (partial derivative), which is a different notion from the card's derivative function.
  - `cx:holomorphic`: OK

## 「体積」 in 04-analysis/01-real-analysis/04-vector-analysis
- Default: `calc:jordan-measurable` → **no candidate fits**
- Pages: 02-surface-integrals.html, 04-exercises.html
- Sentence: $\sqrt{\det({}^{t}AA)}$ は、$a_{1},\dots,a_{k}$ の張る $k$ 次元平行体の $k$ 次元体積である。補題はそれを「座標 $k$ 平面 $\{x_{I}\}$ への射影の（符号付き）体積 $dx_{I}(a)$ の 2 乗和の平方根」と表す：$k=1$ なら三平方の定理、$k=2$, $n=3$ なら「平行四辺形の面積の 2 乗は、3 つの座標平面への射影の面積の 2 乗の和」（ド・グアの定理の一般化）。$k=
  - `calc:jordan-measurable`: NG — Here "体積" means the k-dimensional volume of a parallelepiped in R^n, not the Jordan measure of a bounded set defined via the characteristic function.
  - `nt:lattice`: NG — Here "体積" means the k-dimensional volume of a parallelepiped in general, not the covolume of a lattice defined in the card.

## 「外積」 in 04-analysis/01-real-analysis/04-vector-analysis
- Default: `calc:wedge-product` → **no candidate fits**
- Pages: 02-surface-integrals.html
- Sentence: int\sqrt{\det({}^{t}D\varphi\,D\varphi)}$（**グラム行列式**の平方根）で、これはコーシー–ビネの公式から「各座標 $k$ 平面への射影の面積の 2 乗和の平方根」に等しい（前ページまでの $dx_{I}$ を使って書ける）。$\mathbb{R}^{3}$ の曲面では、これは外積 $|\varphi_{u}\times\varphi_{v}|$ である。面積がパラメータの取り方によらないことを変数変換公式から示し、関数の**面積分**、ベクトル場の**流束**を定義して、流束が 2 形式の積分と一致することを示す。
  - `calc:wedge-product`: NG — Here "外積" refers to the cross product of vectors in $\mathbb{R}^{3}$ ($\varphi_{u}\times\varphi_{v}$), not the wedge product of alternating forms defined in the card.
  - `lin:exterior-algebra`: NG — Here "外積" refers to the cross product of vectors in $\mathbb{R}^{3}$, not the exterior product (wedge product) defined on the exterior algebra.

## 「導関数」 in 04-analysis/01-real-analysis/04-vector-analysis
- Default: `calc:derivative` → **no candidate fits**
- Pages: 01-curves-line-integrals.html
- Sentence: - 全微分・連鎖律・勾配 \ref{calc:total-derivative}, \ref{calc:multivariable-chain-rule}, \ref{calc:gradient}、平均値の不等式 \tref{calc:mean-value-inequality}、偏導関数が連続なら微分可能 \ref{calc:continuous-partials-differentiable}。
  - `calc:derivative`: NG — Here "偏導関数" (partial derivative) is a different notion from the single-variable derivative function defined in the card.
  - `cx:holomorphic`: NG — Here "導関数" appears only as part of "偏導関数" (partial derivative), which is a different notion from the complex derivative defined in the card.

## 「次元」 in 04-analysis/01-real-analysis/04-vector-analysis
- Default: `lin:dimension` → **no candidate fits**
- Pages: 02-surface-integrals.html, 03-integral-theorems.html
- Sentence: 曲線の長さ（\ref{vec:c1-curve-length}）の 2 次元以上の類似として、パラメータで表された曲面の**面積**を定義する。曲線の長さが $\int|\gamma'|$ だったのに対し、$k$ 次元のパラメータ曲面 $\varphi$ の面積は $\int\sqrt{\det({}^{t}D\varphi\,D\varphi)}$（**グラム行列式**の平方根）で、これはコ
  - `lin:dimension`: NG — Here "次元" refers to the dimension of a parameter domain (2次元以上, k次元) in the sense of Euclidean/coordinate dimension, not the dimension of a vector space as defined in the card.
  - `cat:trace-dimension`: NG — This "次元" means spatial dimension (2次元以上), not the categorical dimension defined in the card.
  - `ring:krull-dimension`: NG — The term "次元" here refers to the dimension of a parameterized surface in geometry/calculus, not the Krull dimension of a ring.
  - `ag:dimension`: NG — Here "次元" refers to the dimension of a parameterized surface (the number of parameters, e.g., 2-dimensional), not the dimension of a topological space defined via chains of irreducible closed subsets.

## 「連続」 in 04-analysis/01-real-analysis/04-vector-analysis
- Default: `calc:function-limit` → **no candidate fits**
- Pages: 01-curves-line-integrals.html, 02-surface-integrals.html, 03-integral-theorems.html
- Sentence: - 全微分・連鎖律・勾配 \ref{calc:total-derivative}, \ref{calc:multivariable-chain-rule}, \ref{calc:gradient}、平均値の不等式 \tref{calc:mean-value-inequality}、偏導関数が連続なら微分可能 \ref{calc:continuous-partials-differentiable}。
  - `calc:function-limit`: NG — Here "連続" refers to partial derivatives being continuous (a property of functions), which matches the definition of continuity of a function, so it is the same notion.
  - `comp:monotone-continuous`: NG — This "連続" refers to continuity of partial derivatives in calculus, not the fixed-point continuity of functions on power sets defined in the card.
  - `cx:limit-continuity`: NG — Here "連続" refers to continuity of partial derivatives in multivariable real analysis, not continuity of a complex function as defined in the card.
  - `top:continuous`: NG — Here "連続" refers to partial derivatives being continuous (real-analysis continuity of functions on Euclidean space), not the topological notion of a continuous map between topological spaces defined in the card.

## 「ノルム」 in 04-analysis/02-complex-analysis/01-basics
- Default: `lin:inner-product` → **fits: `calc:norm`**
- Pages: 02-line-integrals.html
- Sentence: $\C=\R^{2}$ とみると、複素数の絶対値はユークリッドのノルムで、複素数値の積分は $\R^{2}$ 値の積分と同じものである。\ref{vec:vector-integral-inequality} を使う（区分的に連続なら区間ごとに使い、三角不等式で足す）。
  - `lin:inner-product`: NG — ノルム is only defined in the card as $\|v\|=\sqrt{\langle v,v\rangle}$ derived from the inner product, whereas the sentence uses it as the Euclidean norm on $\R^{2}$; this is a special case of the same notion, so it should be ok—wait, the card does define the norm via the inner product, and the Euclidean norm is exactly that special case, so the meaning matches.
  - `comp:pi11-norm`: NG — This "ノルム" means the Euclidean norm (absolute value) on $\R^{2}$, not a function from a subset of $\N$ to ordinals as in the definition card.
  - `calc:norm`: OK

## 「導関数」 in 04-analysis/02-complex-analysis/01-basics
- Default: `cx:holomorphic` → **no candidate fits**
- Pages: 01-power-series.html, 02-line-integrals.html, 03-cauchy-theorem.html, 04-cauchy-formula.html, 05-singularities.html, 06-exercises.html
- Sentence: - 実 2 変数の写像の全微分 \ref{calc:total-derivative}、偏導関数が連続なら微分可能 \ref{calc:continuous-partials-differentiable}、連鎖律 \ref{calc:multivariable-chain-rule}、微分が $0$ なら定数 \ref{calc:zero-derivative-constant}。
  - `cx:holomorphic`: NG — Here "導関数" refers to partial derivatives of real multivariable maps, not the complex derivative defined in the card.
  - `calc:derivative`: NG — Here "導関数" appears only inside the compound term "偏導関数" (partial derivative), which is a different notion from the ordinary derivative defined in the card.

## 「有界」 in 04-analysis/02-complex-analysis/01-basics
- Default: `calc:supremum` → **no candidate fits**
- Pages: 01-power-series.html, 03-cauchy-theorem.html, 04-cauchy-formula.html, 05-singularities.html, 06-exercises.html
- Sentence: 3. $\cos(iy)=\cosh y\defeq\frac{e^{y}+e^{-y}}{2}$ で、$\cos$ は $\C$ で有界でない。
  - `calc:supremum`: NG — Here "有界" means bounded as a function on $\C$ (bounded range), not the order-theoretic boundedness of a subset of an ordered set defined in the card.
  - `logic:rm-analysis-defs`: NG — Here "有界" means bounded as a function on $\mathbb{C}$, not the boundedness of a real sequence defined in the card.

## 「冪級数」 in 04-analysis/02-complex-analysis/02-residues
- Default: `cx:complex-power-series` → **fits: `calc:power-series`**
- Pages: 02-residue-theorem.html
- Sentence: **3（1 を含む）.** $(z-a)^{m}f(z)=\sum_{n\ge-m}c_{n}(z-a)^{n+m}$ は $a$ の近くで冪級数（除去可能）で、$(z-a)^{m-1}$ の係数が $c_{-1}$。テイラー係数の公式（\ref{cx:power-series-holomorphic.3}）から主張。$m=1$ が 1。
  - `cx:complex-power-series`: NG — It refers to a Laurent series with negative powers, not a power series of the form $\sum_{n\ge0}c_{n}(z-a)^{n}$.
  - `calc:power-series`: OK

## 「次元」 in 04-analysis/02-complex-analysis/02-residues
- Default: `lin:dimension` → **no candidate fits**
- Pages: 01-winding-number.html
- Sentence: 1}(\C\setminus\{a\})\cong\mathbb{Z}$）であり、零ホモローグはその類が $U$ の 1 次ホモロジーで $0$ であることに対応する（平面の開集合 $U$ では、$H_{1}(U)$ の類が $U$ の外の各点のまわりの回転数で判定できることが知られている。アレクサンダー双対性の 2 次元の場合にあたる。未収録）。積分 $\int_{\Gamma}f\,dz$ は、閉 1 形式 $f\,dz$ とホモロジー類の対で、コーシーの定理は「正則関数の微分形式 $f\,dz$ は閉形式である」ことと同じ内容である。
  - `lin:dimension`: NG — Here "次元" refers to the dimension of a homology/dual setting (2-dimensional case of Alexander duality), not the dimension of a vector space as defined in the card.
  - `cat:trace-dimension`: NG — This sentence uses "次元" in the sense of dimension of a homology/cohomology context (2-dimensional case of Alexander duality), not the monoidal-category dimension defined as the trace of the identity morphism.
  - `ring:krull-dimension`: NG — one short English sentence why
  - `ag:dimension`: NG — This sentence uses "次元" as the dimension of a homology/dual setting (2-dimensional case of Alexander duality), not the Krull-type dimension of a topological space defined via chains of irreducible closed subsets.

## 「連続」 in 04-analysis/02-complex-analysis/02-residues
- Default: `cx:limit-continuity` → **no candidate fits**
- Pages: 01-winding-number.html, 02-residue-theorem.html, 03-definite-integrals.html, 04-harmonic.html
- Sentence: - 積分記号下の微分（パラメータ積分の連続性）\ref{calc:differentiation-under-integral.1}、連続関数の累次積分の順序交換 \ref{calc:fubini-continuous}、測度 0 の集合 \ref{calc:measure-zero-rn}, \ref{calc:measure-zero-rn-propert
  - `cx:limit-continuity`: NG — This "連続" refers to continuity of functions in real analysis (parameter integrals, iterated integrals), not the complex-function continuity defined in the card.
  - `comp:monotone-continuous`: NG — Here "連続" refers to continuity of functions/integrals in real analysis, not the continuity of a map on $\mathcal{P}(\Sigma^{\ast})^{n}$ defined in the card.
  - `top:continuous`: NG — Here "連続" refers to continuity of functions on Euclidean spaces in real analysis (parameter integrals, iterated integrals), not the general topological definition of a continuous map between topological spaces.

## 「定義域」 in 04-analysis/02-complex-analysis/03-global
- Default: `set:relation` → **no candidate fits**
- Pages: 01-representations.html
- Sentence: は有理型で、$\operatorname{Re}z>0$ では関数等式を $n+1$ 回使って $\Gamma(z)$ と一致する。$\Gamma_{(n)}$ と $\Gamma_{(n')}$ は共通の定義域で一致する（一致の定理）ので、これらをつないで $\C$ 上の有理型関数を得る。一意性は一致の定理から。
  - `set:relation`: NG — Here "定義域" refers to the domain of a meromorphic function (a subset of $\C$), not the domain of a relation as a set of ordered pairs.
  - `logic:rm-continuous-code`: NG — Here "定義域" refers to the domain of a meromorphic function on $\mathbb{C}$, not the domain of a continuous real function as defined in the card.

## 「導関数」 in 04-analysis/02-complex-analysis/03-global
- Default: `cx:holomorphic` → **no candidate fits**
- Pages: 01-representations.html, 03-normal-families.html, 06-elliptic-functions.html
- Sentence: は実のガンマ関数の積分（\ref{calc:gamma-basic.1}）で上から抑えられ、絶対収束する。$\Gamma_{N}(z)\defeq\int_{1/N}^{N}t^{z-1}e^{-t}dt$ は整関数である：被積分関数 $t^{z-1}e^{-t}$ の実部・虚部は $(x,y,t)$ について連続な偏導関数をもち、各 $t$ でコーシー–リーマンの方程式を満たす。積分記号下の微分（\ref{calc:differentiation-under-integral}）から $\Gamma_{N}$ の実部・虚部も連続な偏導関数をもち、同じ方程式を満たすので、\ref{cx:cr-consequences.1} から正則。$\
  - `cx:holomorphic`: NG — The term "導関数" does not appear in the sentence; it discusses partial derivatives (偏導関数) of real/imaginary parts, not the complex derivative function defined in the card.
  - `calc:derivative`: NG — Here "偏導関数" means partial derivative of a function of several real variables, not the derivative function $a\mapsto f'(a)$ defined in the card.

## 「有界」 in 04-analysis/02-complex-analysis/03-global
- Default: `calc:supremum` → **no candidate fits**
- Pages: 01-representations.html, 03-normal-families.html, 04-riemann-mapping.html, 05-analytic-continuation.html, 06-elliptic-functions.html, 07-exercises.html
- Sentence:  は同じ極と主要部（$n$ で $\frac{1}{(z-n)^{2}}$）をもつ。右辺は補正なしで広義一様収束する。差は整関数で、周期 $1$ をもち、帯 $0\le\operatorname{Re}z\le1$ で $|\operatorname{Im}z|\to\infty$ のとき両方とも $0$ に近づくので有界、リウヴィルの定理から定数 $0$。よって $\frac{\pi^{2}}{\sin^{2}\pi z}=\sum_{n\in\mathbb{Z}}\frac{1}{(z-n)^{2}}$。
  - `calc:supremum`: NG — Here "有界" means bounded on the strip as a function (bounded in absolute value), not the order-theoretic boundedness of a subset of an ordered set defined in the card.
  - `logic:rm-analysis-defs`: NG — Here "有界" describes a function on a strip tending to 0 at infinity, not a bounded real sequence as defined in the card.

## 「生成元」 in 04-analysis/02-complex-analysis/03-global
- Default: `grp:generated-subgroup` → **no candidate fits**
- Pages: 02-mobius.html
- Sentence: **Step 2（生成元）.** 平行移動と回転拡大は円を円、直線を直線に写す。反転 $w=\frac1z$ では、$z=\frac1w$ を代入して $|w|^{2}$ を掛けると $A+\bar B\bar w+Bw+C|w|^{2}=0$ で、同じ形（係数の役割が入れ替わる、判別条件 $|B|^{2}>AC$ も同じ）。$z=0$ と 
  - `grp:generated-subgroup`: NG — Here "生成元" refers to generators of a transformation group (Möbius transformations), not specifically to a generating set of a group as defined in the card, though it is a related but different usage.
  - `grp:presentation`: NG — Here "生成元" refers to generators of a transformation group (Möbius transformations), not the generators $X$ of a group presentation as defined in the card.

## 「自己同型」 in 04-analysis/02-complex-analysis/03-global
- Default: `grp:homomorphism` → **no candidate fits**
- Pages: 02-mobius.html, 04-riemann-mapping.html, 07-exercises.html
- Sentence: $T(z)=\frac{az+b}{cz+d}$ の形の写像（**一次分数変換**、メビウス変換）は、リーマン球面の上の全単射で、円と直線を円と直線に写し、角度を保つ。このページでは、一次分数変換の基本性質（行列との対応、円の保存、複比）を整えたうえで、正則関数の基本的な領域の**自己同型群**（自分自身への双正則写像の全体）を決定する。中心となる道具は**シュワルツの補題**（単位円板から単位円板への正則写像で原点を止めるものは、原点からの距離を縮める）で、これから単位円板の自己同型はすべて一次分数変換であることが分かる。平面・リーマン球面・上半平面についても同様の決定を行う。
  - `grp:homomorphism`: NG — Here "自己同型群" refers to the group of biholomorphic self-maps of a domain in complex analysis, not the automorphism group of a group as defined in the card.
  - `ring:homomorphism`: NG — Here "自己同型" means a biholomorphic map of a domain onto itself, not a ring automorphism as defined in the card.

## 「フィルター」 in 05-geometry-topology/01-general-topology/01-topological-spaces
- Default: `set:boolean-ccc-filter` → **fits: `set:poset-filter`**
- Pages: 05-nets-filters.html
- Sentence: 閉包や連続性を点列の収束で特徴づけられた。一般の位相空間では点列では足りないが、添字を自然数から**有向集合**に広げた**ネット**（有向点族）を使えば、同じ特徴づけが成り立つ（\ref{top:net-closure}, \ref{top:net-continuity}）。ネットと同じ働きをするもう一つの道具が**フィルター**で（\ref{top:filter-convergence}）、超フィルターはコンパクト性とチコノフの定理の証明で中心的な役割を果たす（\ref{top:ultrafilter-cluster}）。第一可算な空間では、点列で十分である（\ref{top:sequences-first-countable}）。
  - `set:boolean-ccc-filter`: NG — This "フィルター" is a topological filter on a space, not a filter in a Boolean algebra as defined by the card.
  - `set:poset-filter`: OK

## 「生成元」 in 05-geometry-topology/01-general-topology/01-topological-spaces
- Default: `grp:generated-subgroup` → **no candidate fits**
- Pages: 03-bases-neighborhoods.html
- Sentence: **高い視点から：開基は位相の「生成元」.** 準開基は群の生成元、開基は生成元の積（ここでは有限共通部分）に当たる。位相 $\mathcal{O}$ は準開基から「有限の共通部分と任意の和」で生成される。比喩で言えば、準開基は「基本的な観測」（たとえば「$x>a$」「$x<b$」）で、開基はそれを有限個組み合わせた観測、開集合はその任意個の選言である。第
  - `grp:generated-subgroup`: NG — Here 生成元 is used metaphorically for a subbase generating a topology, not the group-theoretic generating set defined in the card.
  - `grp:presentation`: NG — Here "生成元" is used metaphorically for a subbase generating a topology, not the group generators in a group presentation.

## 「部分空間」 in 05-geometry-topology/01-general-topology/01-topological-spaces
- Default: `lin:vector-space` → **fits: `top:subspace`**
- Pages: 02-closure-interior.html, 03-bases-neighborhoods.html
- Sentence: 4. 可分性は部分空間に遺伝しない（\ref{top:niemytzki-plane} は可分だが、非可算な離散部分空間をもつ）。距離空間では遺伝する（\ref{top:second-countable}）。
  - `lin:vector-space`: NG — Here "部分空間" means a subspace of a topological space, not a vector subspace as defined in the card.
  - `top:subspace`: OK

## 「生成元」 in 05-geometry-topology/01-general-topology/02-constructions
- Default: `grp:generated-subgroup` → **no candidate fits**
- Pages: 02-quotients.html
- Sentence: $g$ と $h$ を合わせた写像 $[g,h]\colon X\sqcup Y\to Z$ は連続（直和位相は二つの包含の終位相）。$[g,h](a)=h(a)=g(f(a))=[g,h](f(a))$ なので、$[g,h]$ は生成元 $a\sim f(a)$ を保ち、「$[g,h]$ の値が等しい」という同値関係は $\sim$ を含む（最小性）。よって $[g,h]$ はファイバー上で一定で、\ref{top:quotient-universal} から連続な $\varphi$ が一意に定まる。
  - `grp:generated-subgroup`: NG — Here "生成元" refers to generators of an equivalence relation (the relations $a\sim f(a)$), not a generating set of a group as defined in the card.
  - `grp:presentation`: NG — Here "生成元" refers to generators of an equivalence relation (the elements a ~ f(a)), not generators of a group presentation.

## 「直和」 in 05-geometry-topology/01-general-topology/02-constructions
- Default: `mod:direct-sum` → **no candidate fits**
- Pages: 02-quotients.html
- Sentence: 位相空間 $X$, $Y$、閉部分空間 $A\subseteq X$、連続写像 $f\colon A\to Y$ について、直和空間 $X\sqcup Y$ 上で $a\sim f(a)$（$a\in A$）が生成する同値関係による商空間を $Y\cup_{f}X$ と書き、$X$ を $f$ に沿って $Y$ に**接着**した空間という。
  - `mod:direct-sum`: NG — Here "直和" refers to the disjoint union (coproduct) of topological spaces, not the direct sum of modules defined in the card.
  - `rep:constructions`: NG — Here "直和" refers to the disjoint union (coproduct) of topological spaces, not the direct sum of representations defined in the card.

## 「貼り合わせ」 in 05-geometry-topology/01-general-topology/02-constructions
- Default: `top:adjunction-space` → **no candidate fits**
- Pages: 02-quotients.html
- Sentence: 図形の一部を「貼り合わせる」操作を位相で表したのが**商空間**である。区間の両端を同一視すると円になり、正方形の対辺を同一視するとトーラスになる。商空間の位相は、射影を連続にする最強の位相（前ページまでの**終位相**、\ref{top:final-topology}）として定まり（\ref{top:quotient-topology}）、
  - `top:adjunction-space`: NG — 「貼り合わせ」 here refers to the general operation of identifying points via a quotient space, whereas the card defines the specific adjunction space construction gluing along a map \(f\colon A\to Y\).
  - `cat:site-sheaf`: NG — Here "貼り合わせる" refers to the geometric/topological operation of gluing spaces together (forming quotient spaces), not the sheaf-theoretic gluing of a compatible family to a section.

## 「有限次元」 in 05-geometry-topology/01-general-topology/03-function-spaces
- Default: `lin:dimension` → **no candidate fits**
- Pages: 03-ascoli.html
- Sentence: コンパクト空間 $X$ 上の連続写像の空間 $C(X,Y)$（一様収束位相）で、どのような部分集合がコンパクトな閉包をもつか。有限次元空間なら「有界閉」が答えだが、関数空間では有界だけでは足りない（$x^{n}$ の列は $[0,1]$ 上で有界だが、一様収束する部分列をもたない）。不足しているのは「関数たちが一斉に連続であること」すなわち**同等連続性**（\ref{top:equicontinuous}）で、**アスコリ–アルツェラの定理**（\
  - `lin:dimension`: NG — Here "有限次元空間" refers to a finite-dimensional topological/function space in the sense of having a finite basis, which matches the card's definition of finite-dimensional vector space, so it is the same notion.
  - `at:cw-complex`: NG — Here "有限次元" refers to a finite-dimensional space in the sense of linear/topological dimension, not a finite-dimensional CW complex as defined in the card.

## 「貼り合わせ」 in 05-geometry-topology/01-general-topology/03-function-spaces
- Default: `top:adjunction-space` → **no candidate fits**
- Pages: 04-stone-weierstrass.html, 05-ascoli-general.html
- Sentence: tref{top:weierstrass-approximation}）。証明は、$\sqrt{t}$ の多項式近似（\ref{top:sqrt-approximation}）から閉包が $\max$, $\min$ で閉じることを導き（\ref{top:closure-lattice}）、コンパクト性で局所的な近似を貼り合わせる。
  - `top:adjunction-space`: NG — Here "貼り合わせる" means gluing local approximations together (patching), not forming an adjunction/quotient space by gluing along a map.
  - `cat:site-sheaf`: NG — Here "貼り合わせる" means gluing local approximations together in the sense of patching/combining, not the technical sheaf-theoretic notion of a "gluing" (貼り合わせ) of a compatible family defined in the card.

## 「完備」 in 05-geometry-topology/01-general-topology/04-properties
- Default: `top:complete-metric` → **no candidate fits**
- Pages: 05-connectedness.html, 06-urysohn-tietze.html
- Sentence: - **上限の性質（実数の完備性）**：区間 ⇒ 連結の核心。$\mathbb{Q}$ では偽：$\mathbb{Q}=(\mathbb{Q}\cap(-\infty,\sqrt{2}))\sqcup(\mathbb{Q}\cap(\sqrt{2},\infty))$ で、$\mathbb{Q}$ は連結でない（しかも順序の意味では「区間」）。
  - `top:complete-metric`: NG — This "完備性" refers to the least-upper-bound (order) completeness of the reals, not the metric completeness defined by convergence of Cauchy sequences.
  - `set:complete-boolean-algebra`: NG — Here "完備" refers to the completeness of the real numbers (order-completeness/Dedekind completeness), not the completeness of a Boolean algebra as defined in the card.
  - `cat:limit`: NG — Here "完備" refers to the completeness of the real numbers (order completeness), not the category-theoretic completeness defined in the card.
  - `ring:completion`: NG — This "完備" refers to order completeness of the real numbers, not the $I$-adic completion of a module.
  - `top:cauchy-filter`: NG — Here "完備" refers to the least-upper-bound (order) completeness of the reals, not the convergence of all Cauchy filters in a uniform space.
  - `ag:proper`: NG — Here "完備" means completeness of the real numbers (order/least-upper-bound property), not a proper scheme over a field as defined in the card.

## 「定義域」 in 05-geometry-topology/01-general-topology/04-properties
- Default: `set:relation` → **fits: `logic:rm-continuous-code`**
- Pages: 03-tychonoff.html
- Sentence: 包含 $\{0,1\}\subseteq[0,1]$ の直積 $\{0,1\}^{\N}\to[0,1]^{\N}$ は連続な単射（普遍性）で、定義域はコンパクト、値域はハウスドルフなので埋め込み（\ref{top:compact-to-hausdorff}）で、像はコンパクトなので閉（\ref{top:compact-hausdorff-closed}）。
  - `set:relation`: NG — Here 定義域 refers to the domain of a continuous injection between function spaces (a map's domain), not the domain of a relation as a set of ordered pairs.
  - `logic:rm-continuous-code`: OK

## 「論理式」 in 05-geometry-topology/01-general-topology/04-properties
- Default: `logic:formula` → **fits: `logic:prop-formula`**
- Pages: 03-tychonoff.html
- Sentence: 4. **命題論理のコンパクト性.** 命題変数の集合 $P$ について、付値の空間 $\{0,1\}^{P}$ はコンパクトで、論理式 $\varphi$ を満たす付値の集合 $[\varphi]$ は閉集合（$\varphi$ に現れる有限個の変数の値だけで決まる）。有限充足可能な論理式の集合 $\Sigma$ について $\{[\varphi]:\varphi\in\Sigma\}$ は有限交叉性をもち、共通部分の元が $\Sigma$ を満たす
  - `logic:formula`: NG — This is propositional logic, not the first-order language $\mathcal{L}$ with terms, predicates, and quantifiers defined in the card.
  - `logic:prop-formula`: OK

## 「貼り合わせ」 in 05-geometry-topology/01-general-topology/04-properties
- Default: `top:adjunction-space` → **no candidate fits**
- Pages: 05-connectedness.html, 08-paracompactness.html
- Sentence: おく。$p\in P$。$P$ は開：$x\in P$ と $B(x,\varepsilon)\subseteq U$ について、$B(x,\varepsilon)$ の点 $y$ は線分 $t\mapsto(1-t)x+ty$（球は凸）で $x$ と結べ、道をつなげると（$[0,1/2]$ と $[1/2,1]$ で貼り合わせ、\ref{top:pasting-lemma}）$p$ から $y$ への道ができる。$U\setminus P$ も同様に開。連結性から $P=U$。
  - `top:adjunction-space`: NG — Here "貼り合わせ" refers to gluing paths along a shared endpoint (pasting lemma), not the topological adjunction/attaching space defined in the card.
  - `cat:site-sheaf`: NG — Here "貼り合わせ" refers to gluing paths along a shared endpoint (topological pasting), not the sheaf-theoretic gluing of a compatible family to a section.

## 「上界」 in 05-geometry-topology/01-general-topology/05-advanced-properties
- Default: `calc:supremum` → **fits: `set:chain-maximal`**
- Pages: 06-beta-n.html
- Sentence: **上界.** $\Phi$ は連続関数 $\N\to[0,1]$ 全体、すなわち $[0,1]^{\N}$ で、濃度 $\mathfrak{c}^{\aleph_{0}}=\mathfrak{c}$。$\beta\N\subseteq[0,1]^{\Phi}$ なので $\lvert\beta\N\rvert\le\math
  - `calc:supremum`: NG — This occurrence is a section heading/label, not a use of the mathematical notion of upper bound defined in the card.
  - `set:chain-maximal`: OK

## 「可分」 in 05-geometry-topology/01-general-topology/05-advanced-properties
- Default: `top:separable-space` → **fits: `set:separable-subset`**
- Pages: 02-cantor-set.html, 03-perfect-maps.html, 06-beta-n.html, 09-michael-selection.html, 10-preservation.html, 12-implication-map.html
- Sentence: **Step 1（ヒルベルト立方体への埋め込み）.** $X$ は可分なので稠密な点列 $(p_{n})$ がある。$e\colon X\to[0,1]^{\N}$, $e(x)\defeq(\min\{1,d(x,p_{n})\})_{n}$ は連続（各成分が連続）。単射：$x\ne y$ なら $\varepsilon\defeq\min\{1,d(x,y)\}/2$ に対し $d(
  - `top:separable-space`: NG — 可分 means having a countable dense subset, but the sentence asserts a dense sequence, which is a stronger/different claim (a countable dense set need not be enumerable as a sequence with the stated property).
  - `set:separable-subset`: OK

## 「有界」 in 05-geometry-topology/01-general-topology/05-advanced-properties
- Default: `calc:supremum` → **no candidate fits**
- Pages: 05-countable-compactness.html, 06-beta-n.html, 09-michael-selection.html, 10-preservation.html, 12-implication-map.html
- Sentence: コンパクト性（\ref{top:compact}）を弱めた性質として、可算な開被覆についてだけ有限部分被覆を要求する**可算コンパクト性**、点列が収束部分列をもつことを要求する**点列コンパクト性**、実数値連続関数が有界であることを要求する**擬コンパクト性**がある（\ref{top:countably-compact}）。距離空間ではこれらはすべてコンパクト性と一致する（\ref{top:compact-metric-equivalents}）が、一般の位相空間では異なる。本ページでは、可算コンパクト性の言い換え（\ref{top
  - `calc:supremum`: NG — Here "有界" refers to a real-valued continuous function being bounded, not a subset of an ordered set being bounded above and below as defined in the card.
  - `logic:rm-analysis-defs`: NG — Here "有界" refers to a continuous real-valued function being bounded, not to a real sequence being bounded as defined in the card.

## 「正則」 in 05-geometry-topology/01-general-topology/05-advanced-properties
- Default: `top:separation-axioms` → **no candidate fits**
- Pages: 03-perfect-maps.html, 08-michael.html, 10-preservation.html, 12-implication-map.html
- Sentence: p-criteria}）。**完全写像**（\ref{top:perfect-map}）は、閉写像でかつ各点の逆像がコンパクトなもので、コンパクトハウスドルフ空間の商写像の典型である。本ページでは、閉写像の逆像による特徴づけ（\ref{top:closed-map-fibers}）から始めて、完全写像がハウスドルフ性・正則性・局所コンパクト性・第二可算性（**重み**）を保つこと（\ref{top:perfect-preserves}）を示し、可分距離空間の完全写像による像が距離化可能であること（\see{top:perfect-image-metrizable}）を導く。特に、コンパクト距離空間を閉な同値関係で割った商はコンパクト距離
  - `top:separation-axioms`: NG — Here “正則性” refers to a property preserved by perfect maps (regularity of spaces), which matches the card’s 正則 separation axiom notion.
  - `set:regular-cardinal`: NG — Here 正則性 refers to the regularity (T3) separation axiom in topology, not the order-theoretic notion of a regular ordinal.
  - `cx:holomorphic`: NG — Here "正則性" refers to the regularity (T3) separation axiom in topology, not complex differentiability.
  - `ag:regular-function`: NG — Here "正則性" refers to the regularity (T3) separation axiom in topology, not the regularity of a function as a quotient of polynomials in algebraic geometry.
  - `ag:quasi-projective-regular`: NG — Here "正則性" refers to the separation axiom (regularity) in topology, not the regularity of a function on a quasi-projective variety as defined in the card.

## 「準同型」 in 05-geometry-topology/01-general-topology/05-advanced-properties
- Default: `grp:homomorphism` → **no candidate fits**
- Pages: 01-stone-duality.html, 11-operations-commute.html
- Sentence: - ブール代数の**準同型**は、$\wedge$, $\vee$, $-$, $\mathbf{0}$, $\mathbf{1}$ を保つ写像。全単射な準同型を**同型**という。
  - `grp:homomorphism`: NG — This is a Boolean algebra homomorphism, not a group homomorphism as defined in the card.
  - `cat:t-algebra`: NG — This is a Boolean algebra homomorphism, not a homomorphism of T-algebras as defined in the card.
  - `ring:homomorphism`: NG — It defines a Boolean algebra homomorphism, not a homomorphism of rings as in the card.
  - `mod:submodule-homomorphism`: NG — This is a Boolean algebra homomorphism, not an \(R\)-module homomorphism as defined in the card.

## 「直和」 in 05-geometry-topology/01-general-topology/05-advanced-properties
- Default: `mod:direct-sum` → **no candidate fits**
- Pages: 10-preservation.html, 11-operations-commute.html
- Sentence: - 操作：部分空間（\ref{top:subspace}）、直積（\ref{top:product-topology}。因子はすべて空でないとする）、**直和**（**位相和**：集合の非交和 $\bigsqcup_{i}X_{i}$ に、各 $X_{i}$ との共通部分が $X_{i}$ で開である集合を開集合とする位相を入れたもの。各 $X_{i}$ は開かつ閉）、商空間（\ref{top:quotient-topology}）、連続像（連続な全射の値域）、開写像・閉写
  - `mod:direct-sum`: NG — This is the topological direct sum (disjoint union with the sum topology), not the module-theoretic direct sum defined in the card.
  - `rep:constructions`: NG — This "直和" refers to the topological sum (disjoint union topology), not the direct sum of representations defined in the card.

## 「互いに素」 in 05-geometry-topology/01-general-topology/06-metric-spaces
- Default: `ring:ideal-sum-product` → **fits: `pt:prime`**
- Pages: 09-baire-space-nn.html
- Sentence: **Step 4（互いに素にする）.** $D'_{n}\defeq C_{n}\setminus(C_{0}\cup\dots\cup C_{n-1})$ とおく。閉開集合の有限個の和・差は閉開なので $D'_{n}$ は閉開、$D'_{n}\subset C_{n}$ なので $\operatorname{diam}D'_{n}<\vare
  - `ring:ideal-sum-product`: NG — Here "互いに素" means pairwise disjoint sets (set-theoretic disjointness), not the ideal-theoretic notion that I+J=A.
  - `pt:prime`: OK

## 「定義域」 in 05-geometry-topology/01-general-topology/06-metric-spaces
- Default: `set:relation` → **no candidate fits**
- Pages: 08-dugundji.html
- Sentence: - **定義域.** 定義域を正規空間に広げると、$\R$ や $\R^{n}$ 値ならティーツェの定理（\ref{top:tietze}）で延長できるが、線形な拡張作用素（\ref{top:dugundji-linear}）は一般に存在しない。たとえば $\beta\N$ の閉集合 $\beta\N\setminus\N$（\re
  - `set:relation`: NG — This "定義域" refers to the domain of a function/extension problem in topology, not the domain of a relation as defined in the card.
  - `logic:rm-continuous-code`: NG — This "定義域" refers to the domain of a continuous function in general topology, not specifically the domain defined via the sign relation Φ in the card.

## 「有界」 in 05-geometry-topology/01-general-topology/06-metric-spaces
- Default: `calc:supremum` → **fits: `logic:rm-analysis-defs`**
- Pages: 01-completeness.html, 02-baire.html, 03-compact-metric.html, 05-complete-metrizability.html, 07-nowhere-differentiable.html, 08-dugundji.html, 11-hyperspaces.html
- Sentence: > 資料：内田伏一『集合と位相』§26。完備化の構成は、コーシー列の同値類による方法ではなく、有界連続関数の空間への埋め込み（クラトフスキー埋め込み）を用いた。文章は本サイトで書き下ろした。
  - `calc:supremum`: NG — Here "有界" modifies "連続関数" (bounded continuous functions), meaning bounded as a function, not the boundedness of a subset of an ordered set as defined in the card.
  - `logic:rm-analysis-defs`: OK

## 「次元」 in 05-geometry-topology/01-general-topology/06-metric-spaces
- Default: `lin:dimension` → **no candidate fits**
- Pages: 08-dugundji.html, 12-fractals.html
- Sentence: \ref{top:tietze}は、正規空間の閉集合上の連続関数を $\R$ や $\R^{n}$ に値をとるまま全体へ延長する。距離空間に限ると、値域をはるかに広く、任意の**ノルム空間**（無限次元でもよい）にとれ、しかも延長の値を元の関数の値の**凸包**の中に収められる。さらに延長の仕方を関数によらずに固定でき、延長は関数について線形になる。これが**デュグンジの拡張定理**（J. Dugundji, 1951）である。証明の道具は、ストーンの定理（距離空間のパラコンパクト性、\tref{top:stone-
  - `lin:dimension`: NG — Here “次元” refers to the dimension of a normed space (possibly infinite-dimensional), which is the same vector-space dimension notion defined by the card.
  - `cat:trace-dimension`: NG — Here "次元" refers to the dimension of a normed space (possibly infinite-dimensional), not the categorical dimension $\dim a=\operatorname{tr}(1_{a})$ defined in the card.
  - `ring:krull-dimension`: NG — one short English sentence why
  - `ag:dimension`: NG — Here "次元" refers to the dimension of a normed space (linear/algebraic-topological sense), not the Krull dimension of a topological space defined via chains of irreducible closed subsets.

## 「貼り合わせ」 in 05-geometry-topology/01-general-topology/06-metric-spaces
- Default: `top:adjunction-space` → **no candidate fits**
- Pages: 12-fractals.html
- Sentence: ら：フラクタルは「形の空間」の不動点.** 一点の位置を決める方程式 $x=f(x)$ の解がバナッハの不動点定理で得られるように、形を決める方程式 $A=f_{1}(A)\cup\dots\cup f_{m}(A)$ の解が、超空間の中の不動点として得られる。比喩で言えば、「全体は、それ自身の縮小コピー $m$ 枚を貼り合わせたもの」という設計図だけで形がただ一つに決まる、ということで、コピー機で縮小コピーを貼り合わせる操作を繰り返すと、最初に置いた紙の絵柄によらず同じ図形に近づいていく。圏論的には、$\mathcal{K}$ は（像をとる操作と和集合で）モナド的な構造をもち、$F$ はその上の「代数の作用」として読める。
  - `top:adjunction-space`: NG — Here "貼り合わせ" refers to gluing reduced copies of a set together (union of images), not the topological adjunction/quotient space construction defined in the card.
  - `cat:site-sheaf`: NG — Here "貼り合わせ" means gluing geometric copies together, not the sheaf-theoretic gluing of a compatible family to a section.

## 「部分空間」 in 05-geometry-topology/01-general-topology/06-metric-spaces
- Default: `top:subspace` → **no candidate fits**
- Pages: 01-completeness.html, 02-baire.html, 04-metrization.html, 05-complete-metrizability.html, 08-dugundji.html, 09-baire-space-nn.html, 10-cech-completeness.html
- Sentence: 有理数列がその例である。コーシー列がすべて収束する空間を**完備**という（\ref{top:complete-metric}）。完備性は解析学の存在定理（縮小写像の不動点定理 \tref{top:banach-fixed-point}、ベールのカテゴリー定理など）の土台である。また、どの距離空間も、完備な空間の稠密な部分空間として「穴を埋める」ことができ、その埋め方は本質的に一意である（**完備化**、\ref{top:completion}）。
  - `top:subspace`: NG — Here "部分空間" means a subspace of a metric space (a subset with the induced metric), not specifically the topological subspace with the relative topology defined in the card.
  - `lin:vector-space`: NG — Here "部分空間" means a subspace of a metric space (a subset with the induced metric), not a vector subspace as defined in the card.

## 「全有界」 in 05-geometry-topology/01-general-topology/07-uniform-spaces
- Default: `top:totally-bounded` → **fits: `top:unif-totally-bounded`**
- Pages: 02-pseudometrics.html
- Sentence: f{top:countable-base-metrizable} の位相版として、位相空間が距離化可能であることと、可算基をもつハウスドルフな一様構造から来ることは同値になる。これと比べて、\ref{top:urysohn-metrization}は第二可算性という別の条件を使う。一様構造を一つ固定しないと「完備」や「全有界」は語れない（\ref{top:ex-arctan-uniformity}）。
  - `top:totally-bounded`: NG — Here "全有界" refers to boundedness with respect to a uniform structure, not the metric ε-net definition on the card.
  - `top:unif-totally-bounded`: OK

## 「有界」 in 05-geometry-topology/01-general-topology/07-uniform-spaces
- Default: `calc:supremum` → **fits: `logic:rm-analysis-defs`**
- Pages: 03-uniform-completeness.html
- Sentence: x_{n}\defeq n$ について $d'(x_{m},x_{n})=\lvert\arctan m-\arctan n\rvert\to0$（$\arctan n\to\pi/2$）なのでコーシー列だが、$\mathbb{R}$ のどの点にも $d'$ で収束しない（$d'$ の位相は通常の位相で、$(n)$ は有界でない）。$\arctan\colon(\mathbb{R},d')\to(-\pi/2,\pi/2)$ は等長で、像は $[-\pi/2,\pi/2]$ で稠密、$[-\pi/2,\pi/2]$ は完備（閉区間）。よって完備化は $[-\pi/2,\pi/2]$（$\mathbb{R}$ に $\pm\infty$ 
  - `calc:supremum`: NG — Here "有界" refers to boundedness in a metric space (the sequence $(n)$ is not bounded under $d'$), not the order-theoretic boundedness of a subset of a totally ordered set defined in the card.
  - `logic:rm-analysis-defs`: OK

## 「集積点」 in 05-geometry-topology/01-general-topology/07-uniform-spaces
- Default: `top:boundary` → **fits: `top:filter-convergence`**
- Pages: 03-uniform-completeness.html, 04-dieudonne-completion.html
- Sentence: - フィルター、その収束と集積点、像フィルター、コンパクト性のフィルターによる言い換え、超フィルターは \ref{top:filter-convergence}, \ref{top:image-filter}, \ref{top:compact-equivalents}, \ref{top:ultrafilter-cluster} のとおり。距離空間
  - `top:boundary`: NG — Here "集積点" refers to cluster points of filters, a different notion from accumulation points of a subset defined via neighborhoods meeting $A\setminus\{x\}$.
  - `top:net`: NG — the sentence refers to cluster points of filters, whereas the card defines the term only for nets.
  - `top:filter-convergence`: OK

## 「上限」 in 05-geometry-topology/01-general-topology/08-counterexamples
- Default: `calc:supremum` → **no candidate fits**
- Pages: 02-sorgenfrey.html, 03-tychonoff-plank.html, 04-double-arrow.html
- Sentence: **前提を変えると.** 半開区間を $(a,b]$ にした上限位相も同じ性質をもつ。$\R_{\ell}$ は**完全正規**（閉集合がすべて $G_{\delta}$）でもあることが知られている。ゾルゲンフライ平面の正規でないことは、\ref{top:page-niemytzki}と同じくジョーンズの補題による。正規空間とコンパクト空間の直積は正規とは限らないが、パラコンパクト
  - `calc:supremum`: NG — Here "上限位相" (upper limit topology) uses 上限 as part of a compound term meaning "upper limit," not the supremum of a set as defined in the card.
  - `set:order-dedekind-complete`: NG — Here "上限" is part of the compound term "上限位相" (upper limit topology), not the least-upper-bound notion defined in the card.
  - `logic:rm-analysis-defs`: NG — Here "上限" is part of "上限位相" (upper limit topology), a topological term, not the supremum of a real sequence as defined in the card.

## 「完備」 in 05-geometry-topology/01-general-topology/08-counterexamples
- Default: `top:complete-metric` → **no candidate fits**
- Pages: 04-double-arrow.html
- Sentence: より弱い可分性と第一可算性を両方もっても、コンパクトハウスドルフ空間は距離化可能とは限らない。その典型例が**アレクサンドロフの二重矢印空間**（\ref{top:double-arrow}）で、区間 $[0,1]$ の各点を「上の矢印」と「下の矢印」の二点に分け、辞書式順序の順序位相を入れたものである。本ページでは、完備な全順序の順序位相はコンパクトであること（\ref{top:complete-order-compact}）を示し、二重矢印空間がコンパクトハウスドルフ・可分・第一可算でありながら、ゾルゲンフライ直線を部分空間に含むために距離化可能でないこと（\ref{top:double-arrow-properties}）を示す。
  - `top:complete-metric`: NG — Here "完備" refers to order-completeness (Dedekind completeness) of a linear order, not metric completeness of a metric space as defined in the card.
  - `set:complete-boolean-algebra`: NG — Here "完備" refers to order-completeness (Dedekind completeness) of a linear order, not completeness of a Boolean algebra.
  - `cat:limit`: NG — Here "完備" refers to order-completeness (Dedekind completeness) of a linear order, not the category-theoretic completeness of having all limits.
  - `ring:completion`: NG — Here "完備" refers to order-completeness (Dedekind completeness) of a linear order, not the \(I\)-adic completion of a module.
  - `top:cauchy-filter`: NG — Here "完備" refers to order-completeness (Dedekind completeness) of a linear order, not completeness of a uniform space as defined in the card.
  - `ag:proper`: NG — Here "完備" refers to a complete (Dedekind-complete) linear order in topology, not a proper scheme over a field as defined in the card.

## 「有界」 in 05-geometry-topology/01-general-topology/09-topological-groups
- Default: `calc:supremum` → **no candidate fits**
- Pages: 02-group-uniformities.html
- Sentence: **似た定理.** \ref{top:uniform-homomorphism} は、ノルム空間の間の線形写像で「連続 $\iff$ 原点で連続 $\iff$ 一様連続（有界）」となることの一般化である。コンパクトな位相群では左右の一様構造は一致し（コンパクトハウスドルフ空間の一様構造は一意なので、\ref{top:compact-unique-uniformity}）、連続関数は自動的に両側で一様連続になる。
  - `calc:supremum`: NG — Here "有界" refers to a bounded linear map (bounded operator), not a bounded subset of an ordered set as defined in the card.
  - `logic:rm-analysis-defs`: NG — Here "有界" refers to a bounded linear map (bounded operator) between normed spaces, not a bounded sequence as defined in the card.

## 「正規」 in 05-geometry-topology/01-general-topology/09-topological-groups
- Default: `top:separation-axioms` → **no candidate fits**
- Pages: 01-topological-groups.html
- Sentence: **1.** $(x,y)\mapsto xy^{-1}$ は連続で $H\times H$ を $H$ に写すので、$\overline{H\times H}=\overline{H}\times\overline{H}$ を $\overline{H}$ に写す。正規なら各 $g$ について $x\mapsto gxg^{-1}$ は同相写像で $H$ を $H$ に写すので $\overline{H}$ を $\overline{H}$ に写す。
  - `top:separation-axioms`: NG — Here "正規" refers to a normal subgroup (or normality of a subgroup), not the normal/separation axiom for topological spaces.
  - `set:normal-function`: NG — Here "正規" refers to a normal subgroup (group theory), not a normal function on the ordinals as defined in the card.
  - `lin:adjoint`: NG — Here 正規 means "normal" as in a normal subgroup/topological group, not a normal operator on an inner product space.
  - `fld:normal`: NG — This use of 正規 refers to a normal subgroup in topology/group theory, not a normal field extension as defined in the card.

## 「部分空間」 in 05-geometry-topology/01-general-topology/09-topological-groups
- Default: `top:subspace` → **no candidate fits**
- Pages: 01-topological-groups.html
- Sentence: 2. $GL_{n}(\mathbb{R})\subseteq\mathbb{R}^{n^{2}}$（部分空間）：積の成分は多項式、逆行列の成分は余因子を行列式で割った有理式（分母は $GL_{n}$ 上で $0$ でない）なので連続。
  - `top:subspace`: NG — Here "部分空間" means a subset/subspace in the linear-algebraic or set-theoretic sense (a subset of $\mathbb{R}^{n^{2}}$), not a topological subspace with the relative topology as defined in the card.
  - `lin:vector-space`: NG — GL_{n}(\mathbb{R}) is not a subspace of \mathbb{R}^{n^{2}} since it does not contain 0 and is not closed under addition.

## 「互いに素」 in 05-geometry-topology/02-algebraic-topology/01-homotopy
- Default: `ring:ideal-sum-product` → **no candidate fits**
- Pages: 02-covering-spaces.html
- Sentence: 連続な全射 $p\colon E\to B$ が**被覆**（被覆写像）であるとは、各点 $b\in B$ に開近傍 $U$ があって、$p^{-1}(U)$ が互いに素な開集合 $V_{\lambda}$（$\lambda\in\Lambda$）の和で、各 $p\restriction V_{\lambda}\colon V_{\lambda}\to U$ が同相写像となることをいう。このような $U$ を**標準近傍**（均等に被覆される近傍）、$V_{\lambda}$ を $U
  - `ring:ideal-sum-product`: NG — Here "互いに素" means pairwise disjoint open sets, not coprime ideals summing to the whole ring.
  - `pt:prime`: NG — Here「互いに素」means pairwise disjoint open sets, not the number-theoretic coprime relation defined in the card.
  - `grp:cycle`: NG — Here "互いに素" means pairwise disjoint open sets, not disjoint permutations as defined in the card.

## 「完全列」 in 05-geometry-topology/02-algebraic-topology/01-homotopy
- Default: `ha:exact-sequence` → **fits: `mod:exact-sequence`**
- Pages: 01-fundamental-group.html, 04-homotopy-groups.html, 05-fibrations.html, 06-hurewicz-whitehead.html
- Sentence: mathbb{Z}$ は「$S^{1}$ はアイレンベルグ–マクレーン空間 $K(\mathbb{Z},1)$ である」ことの 1 次元部分である（高次のホモトピー群も消える。\ref[高次ホモトピー群]{at:page-homotopy-groups}）。写像度は層の言葉でも読める：$S^{1}$ 上の連続関数の層の完全列 $0\to\underline{\mathbb{Z}}\to\mathcal{C}(-,\mathbb{R})\xrightarrow{p}\mathcal{C}(-,S^{1})\to1$ の連結準同型 $\Gamma(S^{1},\mathcal{C}(-,S^{1}))\to H^{1}(S^{1};\math
  - `ha:exact-sequence`: NG — This is a short exact sequence of sheaves, which is a special case of an exact sequence, so it matches the definition.
  - `mod:exact-sequence`: OK

## 「定義域」 in 05-geometry-topology/02-algebraic-topology/01-homotopy
- Default: `set:relation` → **no candidate fits**
- Pages: 01-fundamental-group.html
- Sentence: - **定義域と値域が $D^{2}$**：Step 2 の判別式（$|x|\le1$）と Step 3（$|f(x)|\le1$）に使った。$D^{2}$ と同相な空間（閉三角形など）でも成り立つ（同相で移す）。開円板では偽：$x\mapsto\frac{x+e_{1}}{2}$ は開円板 $\{|x|<1\}$ を自分自身に移す
  - `set:relation`: NG — Here "定義域" refers to the domain of a function (the interval $D$), not the domain of a relation as defined in the card.
  - `logic:rm-continuous-code`: NG — Here 定義域 refers to the domain of a map on a disk (a set), not the specific real-analysis notion of a real number belonging to the domain of a continuous function defined via the sign relation Φ.

## 「有限生成」 in 05-geometry-topology/02-algebraic-topology/01-homotopy
- Default: `mod:generated-submodule` → **no candidate fits**
- Pages: 04-homotopy-groups.html
- Sentence: 単連結な有限単体複体の高次ホモトピー群 $\pi_{n}$ は有限生成アーベル群で、計算可能である（ブラウンの定理、1957 として知られている）。ただし計算量は一般に非常に大きい。基本群が自明でないと、$\pi_{1}$ の自明性すら決定不能（\ref{at:page-van-kampen} の計算の観点）なので、事情は大きく異なる。球面のホモトピー群 $\pi_{k}(S^{n})$
  - `mod:generated-submodule`: NG — Here "有限生成" modifies an abelian group (a \(\mathbb{Z}\)-module), which is exactly the module-theoretic notion defined in the card, so it matches.
  - `grp:generated-subgroup`: NG — Here "有限生成" modifies an abelian group (a Z-module), not a group generated by a finite subset as in the card's group-theoretic definition.
  - `ring:generated-ideal-def`: NG — Here "有限生成" describes a finitely generated abelian group (a group-theoretic notion), not a finitely generated ideal of a commutative ring as defined in the card.

## 「標準形」 in 05-geometry-topology/02-algebraic-topology/01-homotopy
- Default: `at:box-map` → **no candidate fits**
- Pages: 04-homotopy-groups.html, 06-hurewicz-whitehead.html
- Sentence: - CW 複体の位相とホモトピー拡張性質 \tref{at:page-cw-topology}, \ref{at:cw-hep}、立方体の三角形分割 \ref{at:subdivision-complex}、胞体近似定理 \tref{at:cellular-approximation}、球面の写像の標準形とホップの定理 \tref{at:page-sphere-maps}。
  - `at:box-map`: NG — This is a table-of-contents entry listing a section title, not a use of the term with the mathematical meaning defined in the card.
  - `pt:letterless-normal-form-def`: NG — This "標準形" refers to a normal form for maps between spheres in topology, not the letterless modal-logic normal form defined in the card.

## 「次元」 in 05-geometry-topology/02-algebraic-topology/01-homotopy
- Default: `lin:dimension` → **no candidate fits**
- Pages: 01-fundamental-group.html, 03-van-kampen.html, 04-homotopy-groups.html, 05-fibrations.html, 06-hurewicz-whitehead.html
- Sentence: たものが元で、積は道をつなぐことで与えられる。基本群は連続写像について関手的で、ホモトピーで変わらない。主定理は**円周の基本群が $\mathbb{Z}$** であること（\tref{at:fundamental-group-circle}）で、閉道が原点の周りを何回まわるか（写像度）がそれを与える。応用として 2 次元のブラウワーの不動点定理、代数学の基本定理、$n\ge2$ での $S^{n}$ の単連結性と $\mathbb{R}^{2}\not\cong\mathbb{R}^{n}$（$n\ne2$）を示す。
  - `lin:dimension`: NG — Here "2 次元" means topological dimension (dimension of a space), not the dimension of a vector space as defined in the card.
  - `cat:trace-dimension`: NG — Here "次元" means topological dimension (as in "2次元"), not the categorical dimension defined by the trace of the identity.
  - `ring:krull-dimension`: NG — Here "次元" is part of "2 次元" (dimension of a space in topology), not the Krull dimension of a ring defined in the card.
  - `ag:dimension`: NG — Here "2 次元" means the dimension of a space (topological/geometric dimension), not the Krull dimension of a topological space defined via chains of irreducible closed subsets.

## 「生成元」 in 05-geometry-topology/02-algebraic-topology/01-homotopy
- Default: `grp:generated-subgroup` → **no candidate fits**
- Pages: 01-fundamental-group.html, 02-covering-spaces.html, 03-van-kampen.html, 06-hurewicz-whitehead.html
- Sentence: を与え、$[\omega_{1}]$ が生成元である。とくに $S^{1}$ は可縮でなく、$\pi_{1}(\mathbb{R}^{2}\setminus\{0\})\cong\mathbb{Z}$。
  - `grp:generated-subgroup`: NG — Here "生成元" means a generator of the fundamental group $\pi_{1}$, not a generating set of a group in the sense of the subgroup generated by a subset $S$ as defined in the card.
  - `grp:presentation`: NG — Here "生成元" refers to a generator of a fundamental group, not the generators $X$ in a group presentation as defined in the card.

## 「短完全列」 in 05-geometry-topology/02-algebraic-topology/01-homotopy
- Default: `ha:exact-sequence` → **no candidate fits**
- Pages: 05-fibrations.html
- Sentence: **高い視点.** ファイブレーションは「ホモトピーの意味での束」で、その長完全列はホモトピー論における短完全列の役割を果たす。道の空間のファイブレーション $\Omega B\to PB\to B$（$PB$ は基点から出る道の空間で可縮）からは $\pi_{n}(\Omega B)\cong\pi_{n+1}(B)$ が従う（知られている：$\Omega B$ のホモトピー群が 1 次ずれて $B$ のホモトピー群になる。\
  - `ha:exact-sequence`: NG — It uses "short exact sequence" loosely/analogically for a long exact sequence in homotopy theory, not the abelian-category short exact sequence \(0\to a\to b\to c\to0\).
  - `mod:exact-sequence`: NG — It uses "短完全列" metaphorically for a long exact sequence's role in homotopy theory, not the module-theoretic short exact sequence \(0\to L\to M\to N\to 0\) defined in the card.

## 「自己同型」 in 05-geometry-topology/02-algebraic-topology/01-homotopy
- Default: `grp:homomorphism` → **no candidate fits**
- Pages: 02-covering-spaces.html
- Sentence: ファン・カンペンの定理]{at:page-van-kampen}）で、$a\mapsto(1\,2)$, $b\mapsto(1\,3)$ で定まる $\{1,2,3\}$ への推移的作用の安定化群 $H$ は指数 3、$N(H)/H$ は $\{1,2,3\}$ の $\mathfrak{S}_{3}$ 集合としての自己同型群で自明。対応する 3 葉の被覆の被覆変換群は自明である。
  - `grp:homomorphism`: NG — Here "自己同型群" refers to the automorphism group of a set with an $\mathfrak{S}_{3}$-action (a permutation-set automorphism), not a group automorphism as defined in the card.
  - `ring:homomorphism`: NG — Here "自己同型群" means the automorphism group of a set with a group action (a permutation group), not an automorphism of a ring as defined in the card.

## 「貼り付け写像」 in 05-geometry-topology/02-algebraic-topology/01-homotopy
- Default: `at:wedge-attaching` → **fits: `at:cw-complex`**
- Pages: 03-van-kampen.html, 06-hurewicz-whitehead.html
- Sentence:  $V$ の基本群を、$U\cap V$ の基本群に沿って「貼り合わせた」群（融合積）になる。これが**ファン・カンペンの定理**で、群の表示（\ref{grp:presentation}）を通して基本群を計算する主要な道具である。応用として、円周の束（ブーケ）の基本群が自由群であること、2 次元の胞体を貼ると基本群が貼り付け写像の正規閉包で割られること、3 次元以上の胞体は基本群を変えないこと、任意の有限表示群が 2 次元の複体の基本群になること、閉曲面の基本群を示す。
  - `at:wedge-attaching`: NG — one short English sentence why
  - `at:cw-complex`: OK

## 「貼り合わせ」 in 05-geometry-topology/02-algebraic-topology/01-homotopy
- Default: `top:adjunction-space` → **no candidate fits**
- Pages: 01-fundamental-group.html, 02-covering-spaces.html, 03-van-kampen.html, 04-homotopy-groups.html, 06-hurewicz-whitehead.html
- Sentence: - 位相空間・連続写像・同相写像は \ref{top:homeomorphism}、直積位相は \ref{top:product-topology}、商位相は \ref{top:quotient-topology}。貼り合わせ補題 \tref{top:pasting-lemma}（有限個の閉集合で覆われていれば、各制限が連続なら全体も連続）を何度も使う。
  - `top:adjunction-space`: NG — This "貼り合わせ補題" refers to the pasting/gluing lemma for continuous maps, not the adjunction space construction defined in the card.
  - `cat:site-sheaf`: NG — Here "貼り合わせ補題" refers to the pasting/gluing lemma for continuous maps on closed sets, not the gluing of a compatible family in a sheaf.

## 「辞書式順序」 in 05-geometry-topology/02-algebraic-topology/01-homotopy
- Default: `set:well-order-sum-product-def` → **no candidate fits**
- Pages: 05-fibrations.html
- Sentence: **Step 1（持ち上げ）.** \ref{at:path-lifting} の証明は $I\times I$ を格子に分けて辞書式の順に持ち上げたが、$I^{k}\times I$ でも同じに進む：格子の小立方体を、最後の座標（時間）を最優先にした辞書式順序で並べると、小立方体とそれまでの小立方体の和との共通部分は、その立方体の「下側の面」（各座標で番号が $1$ より大きい方向の下の面）の和で、すべて最小の角を含むので連結。持ち上げの一意性（\ref{at:unique-lifting}）で貼り合わせられる。与えられた $\tilde G_{0}$ と一致することは、$
  - `set:well-order-sum-product-def`: NG — It refers to a lexicographic order on grid cubes prioritizing the last coordinate, not the specific order-theoretic product $\mathbf{A}\otimes\mathbf{B}$ defined on $A\times B$.
  - `top:double-arrow`: NG — It refers to a lexicographic order on grid cubes in a proof, not the specific lexicographic order on $[0,1]\times\{0,1\}$ defining the double arrow space.

## 「閉包」 in 05-geometry-topology/02-algebraic-topology/01-homotopy
- Default: `top:interior-closure` → **no candidate fits**
- Pages: 02-covering-spaces.html, 03-van-kampen.html
- Sentence: | 分離閉包 $k^{\mathrm{sep}}$ | 普遍被覆 $\tilde B$ |
  - `top:interior-closure`: NG — Here "閉包" is part of "分離閉包" (separable closure), a field-theoretic notion, not the topological closure of a subset defined in the card.
  - `logic:ltl-size`: NG — Here "閉包" refers to a separable closure of a field, not the closure CL(A) of a logical formula defined in the card.
  - `logic:ctl-closure`: NG — Here "閉包" refers to a separable closure of a field, not the CTL closure set CL(A) defined in the card.
  - `set:pred-closure`: NG — Here "閉包" is part of "分離閉包" (separable closure), a field-theoretic notion, not the set-theoretic closure cl(A,x,R) defined in the card.

## 「ノルム」 in 05-geometry-topology/02-algebraic-topology/02-homology
- Default: `lin:inner-product` → **fits: `calc:norm`**
- Pages: 05-degree.html
- Sentence: 1：$H(x,t)\defeq\frac{(1-t)f(x)-tx}{|(1-t)f(x)-tx|}$。分母が $0$ なら $(1-t)f(x)=tx$ で、ノルムをとると $1-t=t$、すなわち $t=\frac12$ で $f(x)=x$ となり仮定に反する。$H$ は $f$ から $a$ へのホモトピー。2：$\frac{(1-t)f(x)+tx}{|\cdots|}$ で同様（分母が $0$ なら $f(x)=-x$）。最後：$n$ が偶数なら $(-1)^{n+1}
  - `lin:inner-product`: NG — ノルム is only defined in the card as the derived quantity $\|v\|=\sqrt{\langle v,v\rangle}$; the sentence uses it as a general norm in a homotopy formula, not the inner-product-induced norm defined by the card.
  - `comp:pi11-norm`: NG — Here "ノルム" means the norm of a vector (Euclidean norm), not a function from a set of naturals to ordinals as in the definition card.
  - `calc:norm`: OK

## 「ファイバー」 in 05-geometry-topology/02-algebraic-topology/02-homology
- Default: `at:covering` → **fits: `at:serre-fibration`**
- Pages: 07-cw-topology.html
- Sentence: 関数 $(\phi^{n-1}_{s},(\chi^{\alpha}_{s})_{\alpha})$ は連続で、$\partial D_{\alpha}$ の上で $\chi^{\alpha}_{s}=\psi_{s}=\phi^{n-1}_{s}\circ\varphi_{\alpha}$ なので $q_{n}$ のファイバーの上で一定。商写像の普遍性から $\phi^{n}_{s}$ は連続。(i)・(ii)・(iv) は Step 2 (e) から成り立つ。
  - `at:covering`: NG — Here "ファイバー" refers to the fiber of the map $q_{n}$ in a general quotient/identification sense, not specifically the preimage $p^{-1}(b)$ of a covering map as defined in the card.
  - `cat:discrete-fibration`: NG — Here "ファイバー" refers to the preimage/fiber of a map $q_{n}$ (a point-preimage set), not the fiber $p^{-1}(c)$ of a discrete fibration functor as defined in the card.
  - `at:serre-fibration`: OK

## 「ホモトピー」 in 05-geometry-topology/02-algebraic-topology/02-homology
- Default: `at:homotopy` → **no candidate fits**
- Pages: 01-simplicial.html, 02-singular.html, 03-excision.html, 04-jordan-brouwer.html, 05-degree.html, 06-cellular.html, 07-cw-topology.html, 08-simplicial-singular.html, 09-approximation.html, 10-sphere-maps.html, 11-axioms.html, 12-uniqueness-infinite.html, 13-kunneth.html, 14-manifold-complexes.html
- Sentence: サイクル・ホモロジーは \ref{ha:chain-complex}, \ref{ha:homology}（アーベル群の圏で使う：$Z_{n}=\ker\partial_{n}$, $B_{n}=\operatorname{im}\partial_{n+1}$, $H_{n}=Z_{n}/B_{n}$）。鎖ホモトピーとホモトピー不変性は \ref{ha:chain-homotopy}, \ref{ha:homotopy-invariance}。
  - `at:homotopy`: NG — This "ホモトピー" refers to chain homotopy between chain maps in homological algebra, not a continuous homotopy between continuous maps of topological spaces as defined in the card.
  - `logic:homotopy-funext`: NG — This "ホモトピー" refers to chain homotopy in homological algebra, not the type-theoretic homotopy defined as a pointwise identity type between dependent functions.

## 「上限」 in 05-geometry-topology/02-algebraic-topology/02-homology
- Default: `calc:supremum` → **no candidate fits**
- Pages: 07-cw-topology.html
- Sentence: 1}(y)$ とする。$\Phi_{\alpha}^{-1}(U)$ は $z$ を含む開集合なので、$\delta>0$ を $B(z,\delta)\subset\mathring D_{\alpha}\cap\Phi_{\alpha}^{-1}(U)$ となるようにとる（たとえば、そのような $\delta$ の上限の半分と 1 の小さい方）。$N^{m}\defeq\Phi_{\alpha}(B(z,\delta))$ は $X^{m}$ の開集合（\ref{at:cw-closed-criterion.3}）で $U$ に含まれ、$X^{m-1}$ と交わらない。$H^{m}(\Phi_{\alpha}(w),t)\defeq
  - `calc:supremum`: NG — Here "上限" refers to the supremum of a set of admissible δ values, which matches the card's definition of 上限 (least upper bound), so it is the same notion.
  - `set:order-dedekind-complete`: NG — Here 上限 refers to the supremum of a set of admissible δ values (a real number), not the order-theoretic least upper bound of a bounded subset as defined in the Dedekind-complete card.
  - `logic:rm-analysis-defs`: NG — Here "上限" means the supremum of a set of admissible δ values, not the upper bound (supremum) of a real sequence as defined in the card.

## 「互いに素」 in 05-geometry-topology/02-algebraic-topology/02-homology
- Default: `ring:ideal-sum-product` → **fits: `pt:prime`**
- Pages: 11-axioms.html
- Sentence: 有限 CW 複体 $X$ について、$H_{n}(X;\mathbb{Q})=0$ がすべての $n\ge1$ で成り立ち、ある素数 $p$ で $H_{n}(X;\mathbb{F}_{p})=0$（すべての $n\ge1$）なら、$H_{n}(X)$（$n\ge1$）は $p$ と互いに素な位数の有限群であることを示せ。
  - `ring:ideal-sum-product`: NG — Here "互いに素" means coprime (the order is not divisible by p), not the ideal-theoretic notion of comaximal ideals.
  - `pt:prime`: OK

## 「位数」 in 05-geometry-topology/02-algebraic-topology/02-homology
- Default: `grp:abelian-group` → **no candidate fits**
- Pages: 11-axioms.html, 14-manifold-complexes.html
- Sentence: 有限 CW 複体 $X$ について、$H_{n}(X;\mathbb{Q})=0$ がすべての $n\ge1$ で成り立ち、ある素数 $p$ で $H_{n}(X;\mathbb{F}_{p})=0$（すべての $n\ge1$）なら、$H_{n}(X)$（$n\ge1$）は $p$ と互いに素な位数の有限群であることを示せ。
  - `grp:abelian-group`: NG — Here "位数" means the order (cardinality) of a finite group, which matches the card's definition of 位数 as |G|.
  - `grp:element-order`: NG — Here "位数" means the order (cardinality) of a finite group $H_{n}(X)$, not the order of an element in a group as defined in the card.
  - `cx:isolated-singularity`: NG — Here "位数" means the order (cardinality) of a finite group, not the order of a pole as defined in the card.
  - `cx:elliptic-function`: NG — Here "位数" means the order (cardinality) of a finite group, not the number of poles of an elliptic function.

## 「定義域」 in 05-geometry-topology/02-algebraic-topology/02-homology
- Default: `set:relation` → **no candidate fits**
- Pages: 06-cellular.html, 08-simplicial-singular.html, 09-approximation.html, 10-sphere-maps.html
- Sentence: $q\colon S^{k-1}\to\mathbb{R}P^{k-1}$ と両立するので、連続写像 $\mathbb{R}P^{k-1}\cup_{q}D^{k}\to\mathbb{R}P^{k}$ を誘導する。これは全単射（$x_{k+1}\ne0$ の類は $x_{k+1}>0$ の代表をただ 1 つもつ）で、定義域はコンパクト（$\mathbb{R}P^{k-1}\sqcup D^{k}$ の像）、値域はハウスドルフ（$S^{k}$ の異なる 2 つの類 $\{\pm x\}$, $\{\pm y\}$ は、4 点の距離の最小値の半分を半径とする球の和で分離できる）なので同相（\ref{top:compact-to-hausdo
  - `set:relation`: NG — Here 定義域 refers to the domain of a continuous map (a function), not the domain of a relation as defined in the card.
  - `logic:rm-continuous-code`: NG — Here "定義域" refers to the domain of a continuous map between topological spaces, not the specific notion of the domain of a real-valued function defined via a sign (符号) condition in the card.

## 「標準形」 in 05-geometry-topology/02-algebraic-topology/02-homology
- Default: `at:box-map` → **no candidate fits**
- Pages: 01-simplicial.html, 10-sphere-maps.html, 11-axioms.html
- Sentence: - 置換の符号 \ref{grp:sign}。PID 上の自由加群の部分加群は自由（\ref{mod:pid-submodule-free}）、スミス標準形 \ref{mod:smith-normal-form}、次元定理 \tref{lin:rank-nullity}。
  - `at:box-map`: NG — Here "標準形" refers to Smith normal form of matrices, not the standard-form map \(S_{\varepsilon}\) defined in the card.
  - `pt:letterless-normal-form-def`: NG — This "標準形" refers to Smith normal form of matrices, not the letterless normal form of modal formulas defined in the card.

## 「次元」 in 05-geometry-topology/02-algebraic-topology/02-homology
- Default: `lin:dimension` → **no candidate fits**
- Pages: 01-simplicial.html, 03-excision.html, 04-jordan-brouwer.html, 05-degree.html, 06-cellular.html, 07-cw-topology.html, 08-simplicial-singular.html, 09-approximation.html, 10-sphere-maps.html, 11-axioms.html, 12-uniqueness-infinite.html, 13-kunneth.html, 14-manifold-complexes.html
- Sentence: 基本群は 1 次元の「穴」（ほどけない輪）を捉えたが、群が非可換で計算が難しく、高次元の穴は見えない（$n\ge2$ で $S^{n}$ は単連結）。**ホモロジー**は、空間を単体（点・線分・三角形・四面体…）に分け、「境界をもたない組合せ（サイクル）のうち、何かの境界になっていないもの」をアーベル群として数える。このページでは単体複
  - `lin:dimension`: NG — Here "次元" refers to the dimension of holes in a topological space (homology/homotopy degree), not the dimension of a vector space as defined in the card.
  - `cat:trace-dimension`: NG — Here "次元" refers to the topological dimension of holes (1-dimensional holes, higher-dimensional holes), not the categorical dimension $\dim a$ of an object in a monoidal category.
  - `ring:krull-dimension`: NG — This "次元" refers to the dimension of holes in topology (homology), not the Krull dimension of a ring.
  - `ag:dimension`: NG — Here "次元" refers to the geometric dimension of holes/spheres (e.g., 1-dimensional holes, higher-dimensional holes), not the dimension of a topological space defined as the supremum of lengths of chains of irreducible closed subsets.

## 「準同型」 in 05-geometry-topology/02-algebraic-topology/02-homology
- Default: `mod:submodule-homomorphism` → **no candidate fits**
- Pages: 11-axioms.html
- Sentence: 2. **（ホモトピー）** 対の写像として（各時刻で $A$ を $B$ に写す）ホモトープな写像は同じ準同型を誘導する。
  - `mod:submodule-homomorphism`: NG — This "準同型" refers to a homomorphism induced on homotopy or homology groups, not an \(R\)-module homomorphism as defined in the card.
  - `cat:t-algebra`: NG — Here "準同型" refers to a homomorphism induced by homotopic maps in a homotopy-theoretic context, not a homomorphism of T-algebras as defined in the card.
  - `grp:homomorphism`: NG — Here "準同型" refers to an induced homomorphism between homotopy or homology groups, not the group homomorphism defined in the card.
  - `ring:homomorphism`: NG — This "準同型" refers to a homomorphism induced on homotopy or homology groups, not a ring homomorphism as defined in the card.

## 「生成元」 in 05-geometry-topology/02-algebraic-topology/02-homology
- Default: `grp:generated-subgroup` → **no candidate fits**
- Pages: 01-simplicial.html, 03-excision.html, 05-degree.html, 08-simplicial-singular.html, 11-axioms.html, 13-kunneth.html
- Sentence: **Step 1（1）.** 生成元は単体ごとに分かれるので、1 つの単体 $\sigma=\{v_{0},\dots,v_{n}\}$ について調べればよい。$\sigma$ の並べ方 $(v_{\pi(0)},\dots)$ を $\operatorname{sgn}(\pi)$ に送る準同型は関係を $0$ に送り（$\operatorname{s
  - `grp:generated-subgroup`: NG — Here "生成元" refers to the vertices/faces generating a simplex in a chain complex, not a generating set of a group as defined in the card.
  - `grp:presentation`: NG — This "生成元" refers to the vertices generating a simplex in a chain group, not the generators of a group presentation as defined in the card.

## 「生成元」 in 05-geometry-topology/02-algebraic-topology/02-homology
- Default: `grp:presentation` → **no candidate fits**
- Pages: 06-cellular.html
- Sentence: - $u_{m}$ を $H_{m}(D^{m},\partial D^{m})\cong\mathbb{Z}$ の生成元として 1 つ固定し、$s_{m-1}\defeq\partial u_{m}\in\tilde H_{m-1}(S^{m-1})$（生成元）とする。
  - `grp:presentation`: NG — Here "生成元" refers to a generator of a homology group, not a generator in a group presentation as defined in the card.
  - `grp:generated-subgroup`: NG — Here "生成元" means a generator of a homology group (an element generating a cyclic group), not a generating set of a group as defined in the card.

## 「貼り合わせ」 in 05-geometry-topology/02-algebraic-topology/02-homology
- Default: `top:adjunction-space` → **no candidate fits**
- Pages: 01-simplicial.html, 03-excision.html, 04-jordan-brouwer.html, 06-cellular.html, 07-cw-topology.html, 09-approximation.html, 12-uniqueness-infinite.html, 14-manifold-complexes.html
- Sentence: 単体複体の条件 (b) は計算には強すぎることが多い（トーラスの三角形分割には少なくとも 7 頂点が要ることが知られている）。面の貼り合わせ方だけを記録する、次の一般化を使う。
  - `top:adjunction-space`: NG — 「貼り合わせ」 here refers to gluing faces of a simplicial complex, not the adjunction space construction of Definition 2.9.
  - `cat:site-sheaf`: NG — Here "貼り合わせ" refers to gluing faces of a simplicial complex, not the sheaf-theoretic amalgamation of a compatible family.

## 「部分複体」 in 05-geometry-topology/02-algebraic-topology/02-homology
- Default: `at:simplicial-complex` → **fits: `at:subcomplex`**
- Pages: 09-approximation.html, 11-axioms.html, 12-uniqueness-infinite.html, 14-manifold-complexes.html
- Sentence: - CW 複体とその位相 \ref{at:cw-complex}, \ref{at:page-cw-topology}（部分複体 \ref{at:subcomplex}、閉集合の判定 \tref{at:cw-closed-criterion}、直積の上の連続性 \tref{at:cw-coherent-product}、有限部分複体 \ref{at:cw-finite-subcomplex}、ホモトピー拡張性質 \ref{at:cw-hep}）
  - `at:simplicial-complex`: NG — This "部分複体" refers to a subcomplex of a CW complex, not a subset of a simplicial complex satisfying condition (a).
  - `at:subcomplex`: OK

## 「互いに素」 in 05-geometry-topology/02-algebraic-topology/03-cohomology
- Default: `ring:ideal-sum-product` → **no candidate fits**
- Pages: 04-counterexamples.html
- Sentence: =P_{1}$、$V$ では $P=Q$（補集合は $S_{<}$。$b\notin V$ なので $V$ の中での閉包の共通部分は $J$）、$U\cap V$ では $P=P_{1}$ に使う。$U\cap V$ の残りの 2 成分 $S_{<}$ と $S_{>}\cup c_{2}$ は、$U\cap V$ の互いに素な開集合（$S$ の点の十分小さい近傍は $S$ の点しか含まない）なので、道で結べない。）
  - `ring:ideal-sum-product`: NG — Here "互いに素" means disjoint (open sets), not the ideal-theoretic notion of comaximal ideals.
  - `pt:prime`: NG — Here "互いに素" means disjoint (non-intersecting) open sets in topology, not the number-theoretic coprime relation defined in the card.
  - `grp:cycle`: NG — Here "互いに素" means disjoint open sets, not disjoint supports of permutations.

## 「写像度」 in 05-geometry-topology/02-algebraic-topology/03-cohomology
- Default: `at:degree-loop` → **fits: `at:degree`**
- Pages: 01-singular-cohomology.html, 05-orientation.html
- Sentence: プ積により環の構造をもつ、という利点がある。このページでは定義と**普遍係数定理**、公理の成立を示し、層の理論のページ（\ref{cat:page-singular-comparison}）で引用した二つの事実 (H)・(S) を証明する。応用として、$\mathbb{Z}/2$ 係数の「転送」の完全列から、奇写像の写像度が奇数であることと**ボルスク–ウラムの定理**を導く。
  - `at:degree-loop`: NG — This "写像度" refers to the degree of an odd map between spheres (a homological/cohomological degree), not the winding number of a loop $S^{1}\to S^{1}$ defined in the card.
  - `at:degree`: OK

## 「有限生成」 in 05-geometry-topology/02-algebraic-topology/03-cohomology
- Default: `mod:generated-submodule` → **no candidate fits**
- Pages: 02-cup-product.html, 06-poincare-duality.html
- Sentence: s S^{2}$ と $S^{2}\vee S^{2}\vee S^{4}$ も区別できる（前者では 2 次の 2 つの生成元の積が $H^{4}$ の生成元になる。これはコホモロジーのキュネットの定理 $H^{*}(X\times Y)\cong H^{*}(X)\otimes H^{*}(Y)$（$H^{*}$ が有限生成自由なとき）から従い、知られている）。カップ積の非自明性は、ホップ不変量（$S^{2n-1}\to S^{n}$ の写像を区別する）や、リュステルニク–シュニレルマン圏数の下界（カップ長）にも使われる（本サイト未収録）。
  - `mod:generated-submodule`: NG — Here "有限生成" modifies the cohomology ring $H^{*}$ (as a graded ring/module over coefficients), not a module over a ring $R$ generated by a subset $X$ as defined in the card.
  - `grp:generated-subgroup`: NG — Here "有限生成" modifies the cohomology ring $H^{*}$ (finitely generated as a module/ring), not a finitely generated group as defined in the card.
  - `ring:generated-ideal-def`: NG — Here "有限生成" refers to a cohomology ring being finitely generated as a module/ring, not to an ideal generated by a finite set in a commutative ring.

## 「次元」 in 05-geometry-topology/02-algebraic-topology/03-cohomology
- Default: `lin:dimension` → **no candidate fits**
- Pages: 01-singular-cohomology.html, 05-orientation.html, 06-poincare-duality.html
- Sentence: 5. **（次元）** $H^{n}(\ast;G)=G$（$n=0$）、$0$（$n\ne0$）。
  - `lin:dimension`: NG — This "次元" refers to cohomological degree n, not the dimension of a vector space as defined in the card.
  - `cat:trace-dimension`: NG — This "次元" refers to cohomology degree $n$, not the categorical dimension $\dim a$ defined as the trace of the identity.
  - `ring:krull-dimension`: NG — This "次元" refers to cohomological degree $n$ in group cohomology, not Krull dimension of a ring.
  - `ag:dimension`: NG — This "次元" refers to the degree $n$ of a cohomology group, not the dimension of a topological space as defined in the card.

## 「生成元」 in 05-geometry-topology/02-algebraic-topology/03-cohomology
- Default: `grp:generated-subgroup` → **no candidate fits**
- Pages: 02-cup-product.html, 04-counterexamples.html, 05-orientation.html
- Sentence: 3. $(\alpha\cup\beta)(U)=\alpha(a)\beta(b)=1$, $(\alpha\cup\beta)(L)=\alpha(b)\beta(a)=0$ なので $\alpha\cup\beta$ は $H^{2}$ の生成元。同様に $\beta\cup\alpha\mapsto0-1=-1$、$\alpha\cup\alpha\mapsto0-0=0$、$\beta\cup\beta\mapsto0$。
  - `grp:generated-subgroup`: NG — Here "生成元" means a generator of the cohomology group $H^{2}$ (an element generating it), not a generating set of a group as defined in the card.
  - `grp:presentation`: NG — Here "生成元" means a generator of the cohomology group $H^{2}$, not a generator in a group presentation as defined in the card.

## 「生成元」 in 05-geometry-topology/02-algebraic-topology/03-cohomology
- Default: `grp:presentation` → **no candidate fits**
- Pages: 06-poincare-duality.html
- Sentence: H_{0}(\mathbb{R}^{n})\cong R$（添加写像）で $\varepsilon(\mu_{B}\cap\varphi)=\varphi(\mu_{B})$（次数 $n$ の単体と次数 $n$ のコチェインのキャップ積は、値 $\varphi(\sigma)$ を係数とする点）。$\mu_{B}$ は生成元なので $\varphi\mapsto\varphi(\mu_{B})$ は同型。開直方体 $\prod(a_{i},b_{i})$ は $\mathbb{R}^{n}$ と同相（座標ごとの同相 $(a,b)\cong\mathbb{R}$）で、向きの同相写像は双対写像と両立するので同型。
  - `grp:presentation`: NG — Here "生成元" means a generator of the homology group $H_{0}(\mathbb{R}^{n})$ as a module/group, not a generator in a group presentation as defined in the card.
  - `grp:generated-subgroup`: NG — Here "生成元" means a generator of a homology group (a single element generating the group), not a generating set of a group as defined in the card.

## 「貼り合わせ」 in 05-geometry-topology/02-algebraic-topology/03-cohomology
- Default: `top:adjunction-space` → **fits: `cat:site-sheaf`**
- Pages: 03-cech-comparison.html, 06-poincare-duality.html
- Sentence: 特異コホモロジーは「単体からの写像」、チェックコホモロジーは「開被覆の重なり方」、層コホモロジーは「局所的な関数の貼り合わせ」から作られ、定義はまったく異なる。このページでは、**良い被覆**（有限個の共通部分がすべて可縮か空）をもつ空間では、その被覆のチェックコホモロジーが特異コホモロジーに一致することを、チェック方向と特異方向の二重複体を使って直接示す。層コホモロジーとの一致（\ref{cat:sheaf-singular-compar
  - `top:adjunction-space`: NG — Here "貼り合わせ" refers to gluing local functions (sheaf gluing), not the topological attaching/adjunction space defined in the card.
  - `cat:site-sheaf`: OK

## 「逆像」 in 05-geometry-topology/02-algebraic-topology/03-cohomology
- Default: `set:function` → **no candidate fits**
- Pages: 03-cech-comparison.html, 04-counterexamples.html, 05-orientation.html
- Sentence: a}$ が空なら成分は $0$、空でなければ可縮で、(H)（\ref{at:cohomology-sheaf-facts}）から $0\to A\to S^{0}(U_{\sigma};A)\to S^{1}(U_{\sigma};A)\to\cdots$（$A$ は定数コチェイン）は完全。直積が完全であるには各成分で逆像を同時に選ぶ必要があるが、$U_{\sigma}$ ごとに可縮化のホモトピーを 1 つ固定すると、プリズム作用素の双対と 1 点の余鎖複体の縮約から、添加列の縮約（$\delta h+h\delta=1$）が明示的に得られる。よって $C^{p}\defeq\prod_{\sigma}\underline{A}(U_{
  - `set:function`: NG — Here "逆像" refers to choosing preimages of elements under a map in a cochain/cohomology construction, not the set-theoretic inverse image $f^{-1}[D]$ defined in the card.
  - `cat:inverse-image`: NG — Here “逆像” refers to choosing preimages of elements under a map, not the sheaf-theoretic inverse image functor \(f^{-1}G\) defined in the card.

## 「逆極限」 in 05-geometry-topology/02-algebraic-topology/03-cohomology
- Default: `cat:limit` → **no candidate fits**
- Pages: 04-counterexamples.html
- Sentence: 1. $\check H^{1}(\mathbb{H};\mathbb{Z})\cong\bigoplus_{n\ge1}\mathbb{Z}$（可算）。$\mathbb{H}$ は有限個の円周のブーケ $\bigvee_{n\le N}C_{n}$ の逆極限で、コンパクト空間のチェックコホモロジーは逆極限を余極限に移す（連続性）ことによる。
  - `cat:limit`: NG — 「逆極限」は図式の極限（圏論的極限）ではなく、逆系の射影極限を指す別の概念である。
  - `ring:inverse-limit`: NG — Here the term refers to an inverse limit of topological spaces (a limit in the category of spaces), not the inverse limit of modules defined on the card.

## 「定義域」 in 05-geometry-topology/03-algebraic-geometry/01-varieties
- Default: `set:relation` → **no candidate fits**
- Pages: 02-affine-varieties.html, 05-rational-maps.html, 07-curves.html
- Sentence: 3. 二つの正則関数が空でない開集合上で一致すれば、それらの定義域の共通部分全体で一致する（**一致の原理**）。
  - `set:relation`: NG — Here "定義域" means the domain of a holomorphic function (its set of definition), not the domain of a relation as defined in the card.
  - `logic:rm-continuous-code`: NG — Here "定義域" refers to the domain of a holomorphic (regular) function, not the domain of a continuous real function as defined in the card.

## 「有限次元」 in 05-geometry-topology/03-algebraic-geometry/01-varieties
- Default: `lin:dimension` → **no candidate fits**
- Pages: 07-curves.html
- Sentence: e Y$ の点は、$\mathfrak{m}_{P}$ の上にある $\tilde B$ の極大イデアルで、\ref{ring:lying-over}から存在する。それらは $\mathfrak{m}_{P}\tilde B$ 上の素イデアルで、$\tilde B/\mathfrak{m}_{P}\tilde B$ は有限次元 $k$ 代数（$\tilde B$ は有限生成 $A(Y)$ 加群）なので、有限個。
  - `lin:dimension`: NG — Here "finite-dimensional" describes a finitely generated algebra over a field, not a vector space's dimension as defined in the card.
  - `at:cw-complex`: NG — Here "finite-dimensional" refers to a finite-dimensional algebra over a field $k$, not to a finite-dimensional CW complex as defined in the card.

## 「有限生成」 in 05-geometry-topology/03-algebraic-geometry/01-varieties
- Default: `mod:generated-submodule` → **fits: `ring:generated-ideal-def`**
- Pages: 04-dimension.html, 05-rational-maps.html, 07-curves.html
- Sentence: 多様体の**\term[次元]{ag:dimension}**を「既約な閉部分集合の鎖の長さの上限」と位相的に定義すると、アフィン多様体では座標環のクルル次元に等しく、さらに関数体の超越次数に等しい。この等式から、次元は空でない開集合で変わらず、射影多様体でも標準アフィン被覆から計算できる。さらに有限生成整域は**鎖状**（素イデアルの極大な鎖の長さがすべて等しい）なので、余次元と次元の足し算が成り立つ。超曲面は余次元 1 で、超曲面との交わりは次元を高々 1 しか下げない。最後に、一般のネーター環では鎖状性が成り立たない永田の例と、グロタンディークがそれに対して導入した「普遍鎖状」の概念に触れる。
  - `mod:generated-submodule`: NG — Here "有限生成" modifies a ring (有限生成整域, a finitely generated algebra/domain), not a module with a finite generating set as defined in the card.
  - `grp:generated-subgroup`: NG — Here "有限生成" modifies a ring (finitely generated integral domain), not a group generated by a finite set as defined in the card.
  - `ring:generated-ideal-def`: OK

## 「無限遠点」 in 05-geometry-topology/03-algebraic-geometry/01-varieties
- Default: `top:one-point-compactification` → **no candidate fits**
- Pages: 07-curves.html
- Sentence: $\mathbb{P}^{1}$ の関数体は $k(t)$ で、$C_{k(t)}$ の元は $k[t]_{(t-a)}$（$a\in k$、$\mathbb{P}^{1}$ の点 $(1:a)$）と $k[t^{-1}]_{(t^{-1})}$（無限遠点 $(0:1)$）。実際、$k(t)$ の DVR で $k$ を含むものは、$t$ を含めば $k[t]$ を含み \ref{ag:affine-curve-valuations} から $k[t]_{(t-a)}$、含まなければ $t^{-1}\in\mathfrak{m}$ で無限遠点のもの。$C_{K}$ と 
  - `top:one-point-compactification`: NG — Here "無限遠点" refers to the point $(0:1)$ of the projective line $\mathbb{P}^{1}$, not to the adjoined point $\infty$ in a one-point compactification.
  - `cx:riemann-sphere`: NG — 無限遠点 here is the point $(0:1)$ of the projective line $\mathbb{P}^{1}$, not the point $\infty$ in the one-point compactification $\widehat{\C}=\C\cup\{\infty\}$ of the Riemann sphere.

## 「生成元」 in 05-geometry-topology/03-algebraic-geometry/01-varieties
- Default: `grp:generated-subgroup` → **no candidate fits**
- Pages: 02-affine-varieties.html, 03-projective-varieties.html, 06-nonsingular.html
- Sentence: **計算の観点.** 射 $X\to Y$ は座標の多項式（またはその商）の組で与えられ、それが $Y$ に入ることは $I(Y)$ の生成元への代入で確かめられる（有限回の多項式の計算）。二つのアフィン多様体が同型かの判定は、有限生成整域の同型問題で、一般には難しい（決定可能性は本サイト未収録）。
  - `grp:generated-subgroup`: NG — Here "生成元" refers to generators of an ideal $I(Y)$ in a polynomial ring, not generators of a group as defined in the card.
  - `grp:presentation`: NG — Here "生成元" refers to generators of the ideal $I(Y)$ in a polynomial ring, not generators of a group presentation as defined in the card.

## 「辞書式順序」 in 05-geometry-topology/03-algebraic-geometry/01-varieties
- Default: `set:well-order-sum-product-def` → **no candidate fits**
- Pages: 03-projective-varieties.html
- Sentence: **計算の観点.** 射影閉包のイデアル（斉次化イデアル）は、次数付き辞書式順序のグレブナー基底を斉次化すれば得られることが知られている（本サイト未収録）。
  - `set:well-order-sum-product-def`: NG — 辞書式順序 here refers to a monomial order in polynomial rings, not the lexicographic product order on well-ordered sets defined in the card.
  - `top:double-arrow`: NG — This "辞書式順序" is a monomial order on polynomials in computational algebra, not the lexicographic order on the set $[0,1]\times\{0,1\}$ used to define the double arrow space.

## 「イデアル」 in 05-geometry-topology/03-algebraic-geometry/02-schemes
- Default: `ag:algebraic-set` → **fits: `ring:ideal`**
- Pages: 01-spectrum.html, 03-properties.html, 05-quasi-coherent.html, 06-proj.html, 07-divisors.html, 08-cohomology.html
- Sentence: 4. **冪零元**：$k[x]/(x^{2})$ の Spec は 1 点だが、構造層は $k$ ではなく $k[x]/(x^{2})$ で、「接ベクトルの方向」を記録する。根基でないイデアルを区別するには、点の集合ではなく環の層が必要である。
  - `ag:algebraic-set`: NG — Here "イデアル" refers to an arbitrary ideal of a ring (a nilpotent/non-radical ideal), not the specific ideal $I(Y)$ of functions vanishing on a subset $Y\subset k^{n}$ defined in the card.
  - `set:ideal`: NG — This "イデアル" is a ring-theoretic ideal (a subset of a ring closed under addition and multiplication by ring elements), not the set-theoretic ideal on a set $A$ defined in the card.
  - `ring:ideal`: OK

## 「オイラー標数」 in 05-geometry-topology/03-algebraic-geometry/02-schemes
- Default: `ag:degree-divisor` → **no candidate fits**
- Pages: 09-riemann-roch.html
- Sentence: で決まる（**リーマン–ロッホの定理**）。証明は、因子を 1 点ずつ動かす短完全列と、オイラー標数の加法性による。系として、主因子の次数が $0$ であることやリーマンの不等式を導く。セール双対性 $H^{1}(\mathcal{L}(D))\cong H^{0}(\mathcal{L}(K-D))^{\vee}$ を加えると古典的な形になる（双対性は本サイト未収録）。
  - `ag:degree-divisor`: NG — the card defines the Euler characteristic χ(D)=h^{0}(D)-h^{1}(D) of a divisor, while the sentence uses the Euler characteristic's additivity for short exact sequences, a different (though related) notion.
  - `surf:triangulation`: NG — Here "オイラー標数" refers to the Euler characteristic of a divisor/line bundle (additivity in short exact sequences), not the Euler characteristic of a triangulation of a surface defined in the card.

## 「サイクル」 in 05-geometry-topology/03-algebraic-geometry/02-schemes
- Default: `ha:homology` → **no candidate fits**
- Pages: 02-schemes.html, 03-properties.html, 04-separated-proper.html, 08-cohomology.html
- Sentence: \to U_{ji}$ で、$\varphi_{ii}=1$ と、$\varphi_{ij}(U_{ij}\cap U_{ik})=U_{ji}\cap U_{jk}$ および $U_{ij}\cap U_{ik}$ 上で $\varphi_{ik}=\varphi_{jk}\circ\varphi_{ij}$（**コサイクル条件**）をみたすものが与えられると、スキーム $X$ と開埋め込み $\psi_{i}:X_{i}\to X$ で、$X=\bigcup\psi_{i}(X_{i})$, $\psi_{i}(U_{ij})=\psi_{i}(X_{i})\cap\psi_{j}(X_{j})$, $U_{ij}$ 上で $\psi_
  - `ha:homology`: NG — In the sentence, "サイクル" appears only as part of "コサイクル条件" (cocycle condition), which is a different notion from the cycle (kernel of the boundary map) defined in the card.
  - `cx:cycle`: NG — Here "サイクル" is part of "コサイクル条件" (cocycle condition) in scheme gluing, not a formal sum of closed curves as defined in the card.

## 「上限」 in 05-geometry-topology/03-algebraic-geometry/02-schemes
- Default: `calc:supremum` → **no candidate fits**
- Pages: 04-separated-proper.html
- Sentence: **計算の観点.** \ref{ag:elimination-theorem} の証明は実際に計算できる：$d$ を増やしながら $\Phi_{d,b}$ の階数を調べると、像 $\pi(Z)$ の方程式（小行列式）が得られる。$d$ の上限は、実効的な零点定理（次数の評価）から与えられることが知られている。一般にはグレブナー基底による消去（変数 $x$ を消去する順序）で $\pi(Z)$ の閉包の方程式を計算するが、アフィンの場合は閉包しか得られず（\ref{ag:affine-line-not-proper}）、射影的な場合に限って像そのものが得られ
  - `calc:supremum`: NG — Here "上限" means an upper bound on the degree $d$ (a numerical bound), not the least upper bound (supremum) of a subset of an ordered set as defined in the card.
  - `set:order-dedekind-complete`: NG — Here "上限" means an upper bound on the integer $d$ (a bound in the degree-increase loop), not the least upper bound of a bounded subset as defined in the Dedekind-completeness card.
  - `logic:rm-analysis-defs`: NG — Here "上限" means an upper bound on the degree $d$, not the supremum of a real sequence as defined in the card.

## 「互いに素」 in 05-geometry-topology/03-algebraic-geometry/02-schemes
- Default: `ring:ideal-sum-product` → **no candidate fits**
- Pages: 05-quasi-coherent.html
- Sentence: だが連接でない**：$A=k[x]$, $M=k(x)$ とすると、$\widetilde{M}$ は準連接だが、$k(x)$ は有限生成 $k[x]$ 加群でない（有限個の生成元 $p_{i}/q_{i}$ で生成されるなら、すべての元の分母は $\prod q_{i}$ を割り切るが、$\prod q_{i}$ と互いに素な既約多項式 $r$ について $1/r$ はそうならない）ので連接でない（\ref{ag:coherent-affine}）。
  - `ring:ideal-sum-product`: NG — Here "互いに素" means coprime polynomials (sharing no common factor), not the ideal-theoretic notion of comaximal ideals (I+J=A).
  - `pt:prime`: NG — Here "互いに素" means coprime polynomials (sharing no common factor), not the number-theoretic RelPrime relation on integers defined in the card.
  - `grp:gcd`: NG — Here "互いに素" is used for polynomials being coprime (sharing no common factor), not for integers $a,b$ with $\gcd(a,b)=1$ as defined in the card.
  - `grp:cycle`: NG — Here "互いに素" means coprime (relatively prime) polynomials, not disjoint supports of permutations.

## 「完全列」 in 05-geometry-topology/03-algebraic-geometry/02-schemes
- Default: `mod:exact-sequence` → **no candidate fits**
- Pages: 07-divisors.html
- Sentence: \tref{ring:nagata-criterion}（ネーター整域 $A$ と素元 $x$ について、$A_{x}$ が一意分解環なら $A$ も）は、正規な場合には除去完全列の言い換えである：$Z=V(x)$ は素因子で $[Z]=[\operatorname{div}x]=0$、$U=D(x)=\operatorname{Spec}A_{x}$ なので、\ref{ag:cl-excision} から $\operatorname{Cl}(\operatorname{Spec}A)\con
  - `mod:exact-sequence`: NG — Here "除去完全列" refers to an excision exact sequence in algebraic K-theory/Chow groups, not the module-theoretic exact sequence of the definition card.
  - `ha:exact-sequence`: NG — Here "除去完全列" refers to the excision exact sequence in divisor class groups, not the abelian-category notion of an exact sequence of morphisms defined in the card.

## 「有限生成」 in 05-geometry-topology/03-algebraic-geometry/02-schemes
- Default: `ring:generated-ideal-def` → **no candidate fits**
- Pages: 03-properties.html, 06-proj.html
- Sentence: 有限型**：$Y$ のアフィン開被覆 $\{\operatorname{Spec}B_{i}\}$ と、各 $f^{-1}(\operatorname{Spec}B_{i})$ のアフィン開被覆 $\{\operatorname{Spec}A_{ij}\}_{j}$ で、$A_{ij}$ が（$f^{\#}$ による）有限生成 $B_{i}$ 代数となるものがある。
  - `ring:generated-ideal-def`: NG — Here "有限生成" modifies a $B_{i}$-algebra (finitely generated algebra), not an ideal generated by a finite set as in the card.
  - `grp:generated-subgroup`: NG — Here "有限生成" modifies algebras over a ring (finitely generated algebra), not finitely generated groups as defined in the card.
  - `mod:generated-submodule`: NG — Here "有限生成" modifies algebras over a ring (finitely generated as a $B_{i}$-algebra), not finitely generated modules as defined in the card.

## 「有限生成」 in 05-geometry-topology/03-algebraic-geometry/02-schemes
- Default: `mod:generated-submodule` → **fits: `ring:generated-ideal-def`**
- Pages: 05-quasi-coherent.html, 08-cohomology.html, 09-riemann-roch.html
- Sentence: 接**であるとは、$X$ のアフィン開被覆 $U_{i}=\operatorname{Spec}A_{i}$ と $A_{i}$ 加群 $M_{i}$ で $\mathcal{F}|_{U_{i}}\cong\widetilde{M_{i}}$ となるものがあることをいう。$X$ がネーターで、$M_{i}$ をすべて有限生成にとれるとき**連接**という。
  - `mod:generated-submodule`: NG — This use of "有限生成" refers to finitely generated modules over rings in the context of coherent sheaves, which is the same module-theoretic notion defined in the card.
  - `grp:generated-subgroup`: NG — This use of 有限生成 refers to finitely generated modules over rings, not finitely generated groups as defined in the card.
  - `ring:generated-ideal-def`: OK

## 「正則」 in 05-geometry-topology/03-algebraic-geometry/02-schemes
- Default: `ag:regular-function` → **fits: `cx:holomorphic`**
- Pages: 04-separated-proper.html, 07-divisors.html, 09-riemann-roch.html
- Sentence: 。$\mathbb{P}^{1}$ の真の閉集合は、$0$ でない斉次多項式の零点集合を含む集合の共通部分で、2 変数の $0$ でない斉次多項式の零点は有限個（$k$ 上で一次式の積に分解する）なので有限集合。既約な有限集合は 1 点。よって $\varphi$ は定数で、$\mathcal{O}(Y)=k$（定数は正則）。
  - `ag:regular-function`: NG — Here "正則" refers to a regular function on a projective variety $Y$, whereas the card defines regularity only for functions on open subsets of a quasi-affine variety $X\subset\mathbb{A}^{n}$.
  - `set:regular-cardinal`: NG — Here "正則" means regular as a function (a morphism/regular map), not the set-theoretic regular ordinal defined in the card.
  - `cx:holomorphic`: OK

## 「準同型」 in 05-geometry-topology/03-algebraic-geometry/02-schemes
- Default: `grp:homomorphism` → **no candidate fits**
- Pages: 03-properties.html
- Sentence: $i$ は閉集合への同相なので、$i(x)$ の近傍 $W$ について $i^{-1}(W)$ は $x$ の近傍の共終な系をなし、$(i_{*}\mathcal{O})_{i(x)}=\mathcal{O}_{\operatorname{Spec}A/I,x}$。$\mathfrak{p}\in V(I)$ では茎の準同型は $A_{\mathfrak{p}}\to(A/I)_{\mathfrak{p}}$, $a/s\mapsto\bar{a}/\bar{s}$ で全射。$\mathfrak{p}\notin V(I)$ では、$\mathfrak{p}$ の近傍 $D(g)$ で $V(I)$ と交わらないものがあり、$(i_{*}
  - `grp:homomorphism`: NG — Here "準同型" refers to a homomorphism of stalks/local rings in algebraic geometry, not the group homomorphism defined in the card.
  - `cat:t-algebra`: NG — Here "準同型" refers to a homomorphism of stalks/local rings in algebraic geometry, not a homomorphism of T-algebras.
  - `ring:homomorphism`: NG — Here "準同型" refers to a homomorphism of stalks/local rings in algebraic geometry, not specifically a ring homomorphism between rings $A$ and $B$ as defined in the card (though it is a ring homomorphism of local rings, the term is used in a different categorical/sheaf-theoretic context).
  - `mod:submodule-homomorphism`: NG — This "準同型" refers to a homomorphism of stalks of ringed spaces (a ring homomorphism), not an \(R\)-module homomorphism as defined in the card.

## 「生成元」 in 05-geometry-topology/03-algebraic-geometry/02-schemes
- Default: `grp:generated-subgroup` → **no candidate fits**
- Pages: 02-schemes.html, 03-properties.html, 05-quasi-coherent.html, 06-proj.html, 07-divisors.html
- Sentence: **計算の観点.** アフィンスキームの射は環準同型で、有限表示の環なら生成元の像（有限個の元）を与え、関係式が保たれることを確かめれば射が決まる。
  - `grp:generated-subgroup`: NG — Here "生成元" refers to generators of a ring (as a ring/algebra), not generators of a group as defined in the card.
  - `grp:presentation`: NG — Here "生成元" refers to generators of a ring (in the context of ring homomorphisms and affine schemes), not generators of a group presentation as defined in the card.

## 「定義域」 in 05-geometry-topology/04-differential-geometry/01-curves
- Default: `set:relation` → **fits: `logic:rm-continuous-code`**
- Pages: 01-curves-frenet.html
- Sentence: 2})$ のまま（\ref{surf:curvature-invariance.1}）。$a^{2}+b^{2}=1/(\kappa^{2}+\tau^{2})$ なので、これは $\kappa$, $\tau$ に等しい。\ref{surf:fundamental-theorem-curves.2} から結論が従う（定義域は平行移動 $s\mapsto s+\text{定数}$ で合わせる。常らせんは全区間 $\mathbb{R}$ で定義されているので、制限すればよい）。
  - `set:relation`: NG — Here 定義域 refers to the domain of a curve's parameter (an interval of definition), not the domain of a relation as defined in the card.
  - `logic:rm-continuous-code`: OK

## 「ノルム」 in 05-geometry-topology/04-differential-geometry/02-surfaces
- Default: `lin:inner-product` → **fits: `calc:norm`**
- Pages: 04-geodesics.html
- Sentence: )-F(y)|\le\Lambda|x-y|$ となるものがある】$W$ は開なので $\bar B\subset W$ となる $r$ がある。$\bar B$ はコンパクト（\ref{top:heine-borel}）で、$|F|$ と $\|DF\|$（作用素ノルムは $M_{N}(\mathbb{R})$ 上のノルムなので連続、\ref{calc:operator-norm-properties.5}）は連続なので最大値 $M$, $\Lambda$ をとる（\ref{top:extreme-value}）。$\bar B$ は凸なので\ref{calc:mean-value-inequality} から $\Lambda$ がリ
  - `lin:inner-product`: NG — The card defines 内積 (inner product) and only mentions ノルム as a derived quantity $\|v\|=\sqrt{\langle v,v\rangle}$; the term ノルム itself (operator norm here) is not the notion defined by the card.
  - `comp:pi11-norm`: NG — This "ノルム" refers to an operator/matrix norm in real analysis, not the norm function from a set of naturals to ordinals defined in the card.
  - `calc:norm`: OK

## 「写像度」 in 05-geometry-topology/04-differential-geometry/02-surfaces
- Default: `at:degree-loop` → **fits: `at:degree`**
- Pages: 06-gauss-bonnet-global.html
- Sentence: **高い視点.** 左辺は計量（局所的な量）、右辺は位相（大域的な量）であり、ガウス＝ボネの定理は「曲率の積分は位相不変量」という形の定理の原型である。ガウス写像を使うと、$\mathbb{R}^{3}$ の閉曲面では $\iint K\,dA$ はガウス写像 $N\colon S\to S^{2}$ の写像度の $4\pi$ 倍でもある（\ref{surf:gauss-map-area} で $K$ はガウス写像の面積の拡大率）。
  - `at:degree-loop`: NG — This "写像度" is the degree of the Gauss map between surfaces (a map $S\to S^{2}$), not the degree of a closed loop $\gamma\colon S^{1}\to S^{1}$ defined in the card.
  - `at:degree`: OK

## 「定義域」 in 05-geometry-topology/04-differential-geometry/02-surfaces
- Default: `set:relation` → **no candidate fits**
- Pages: 06-gauss-bonnet-global.html
- Sentence: 向き $N$ があれば、どの点のまわりにも正の向きの局所パラメータ表示がある：$f$ の単位法ベクトル $n$ は $N\circ f$ か $-N\circ f$ で、$\langle n,N\circ f\rangle$ は連続で $\pm1$ の値をとるので、連結な定義域（たとえば円板）では一定。$-N\circ f$ なら座標 $u^{1},u^{2}$ を入れ替える（\ref{surf:reparametrization-tangent.2}）。
  - `set:relation`: NG — Here "定義域" means the domain of a parametrization (a surface patch), not the domain of a relation as defined in the card.
  - `logic:rm-continuous-code`: NG — Here "定義域" refers to the domain of a parametrization $f$ (a subset of $\mathbb{R}^2$), not the domain of a continuous real function as defined in the card.

## 「次元」 in 05-geometry-topology/04-differential-geometry/02-surfaces
- Default: `lin:dimension` → **no candidate fits**
- Pages: 01-regular-surfaces.html, 03-theorema-egregium.html, 04-geodesics.html, 06-gauss-bonnet-global.html
- Sentence: {p}S=\nabla F(p)^{\perp}$】局所パラメータ表示 $f$ について $F(f(u))=a$ を微分すると、連鎖律から $\langle\nabla F(f(u)),f_{i}(u)\rangle=0$。よって $T_{p}S\subset\nabla F(p)^{\perp}$ で、両辺とも 2 次元なので等しい。
  - `lin:dimension`: NG — Here "次元" refers to the dimension of a tangent plane as a real manifold (2-dimensional), not the dimension of a vector space over a field as defined in the card.
  - `cat:trace-dimension`: NG — Here "次元" means the dimension of a manifold (2-dimensional), not the categorical dimension $\dim a$ defined via trace in the card.
  - `ring:krull-dimension`: NG — Here "次元" refers to the dimension of a tangent plane/vector space (linear algebra dimension), not the Krull dimension of a ring defined in the card.
  - `ag:dimension`: NG — Here "次元" refers to the dimension of a tangent plane as a vector space (2-dimensional), not the dimension of a topological space defined via chains of irreducible closed subsets.

## 「貼り合わせ」 in 05-geometry-topology/04-differential-geometry/02-surfaces
- Default: `top:adjunction-space` → **no candidate fits**
- Pages: 01-regular-surfaces.html
- Sentence: この系列では $\mathbb{R}^{3}$ の中の曲面を調べる。曲線を区間からの写像として扱ったのと同じく、まず平面の開集合からの写像として**曲面片**を定め、その接平面と単位法線を定義する。次に、曲面片を貼り合わせてできる部分集合として**正則曲面**を定め、貼り合わせの写像が自動的に滑らかになることを逆関数定理で示す。後半では、曲面の上の長さ・角・面積を測る道具である**第一基本形式**を導入する。第一基本形式は曲面の「内在的な」幾何（曲面に住む者が測れる量）の基礎であり、次のページ以降の曲率の議論、とくにガウスの驚異の定理の
  - `top:adjunction-space`: NG — This “貼り合わせ” refers to gluing surface patches via smooth transition maps in differential geometry, not the topological quotient/adjunction space defined in the card.
  - `cat:site-sheaf`: NG — Here "貼り合わせ" means gluing surface patches together geometrically, not the sheaf-theoretic amalgamation of a compatible family defined in the card.

