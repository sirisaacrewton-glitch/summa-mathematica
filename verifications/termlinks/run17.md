# Term-link check

- Date: 2026-10-28, model deepseek-chat; groups checked: 105; default fits: 76; problems: 29
- Usage: 152 calls, 99883 prompt tokens (26240 cache hits), 2816 completion tokens

Each entry: the term, the series, the definition the linker chose (NG), and the first candidate that fits (fix with \term[語]{label} or a rule in tools/terms.json), or none.

## 「辞書式順序」 in 01-foundations/01-general-logic/01-propositional-logic
- Default: `set:well-order-sum-product-def` → **no candidate fits**
- Pages: 01-syntax-semantics.html
- Sentence: 言）.** $S\defeq\{\vec{a}:F(\vec{a})=1\}$ とし、$\varphi\defeq\bigvee_{\vec{a}\in S}\chi_{\vec{a}}$（$S=\varnothing$ なら $\varphi\defeq\bot$）とおく（選言の順序は $\{0,1\}^{n}$ の辞書式順序で固定する）。$\bar{v}(\varphi)=1\iff$ ある $\vec{a}\in S$ で $\bar{v}(\chi_{\vec{a}})=1\iff(v(p_{1}),\dots,v(p_{n}))\in S\iff F(v(p_{1}),\dots,v(p_{n}))=1$。略記を展開すれば $\va
  - `set:well-order-sum-product-def`: NG — It refers to the lexicographic order on $\{0,1\}^{n}$, not the order product $\mathbf{A}\otimes\mathbf{B}$ of well-ordered sets defined in the card.
  - `top:double-arrow`: NG — It refers to the lexicographic order on $\{0,1\}^{n}$, not the specific lexicographic order on $[0,1]\times\{0,1\}$ defining the double arrow space.

## 「準同型」 in 01-foundations/01-general-logic/01-propositional-logic
- Default: `ring:homomorphism` → **fits: `grp:homomorphism`**
- Pages: 01-syntax-semantics.html
- Sentence: $ 個の命題変数の論理式の同値類全体は、$2^{2^{n}}$ 個の元からなるブール代数になり、関数的完全性はこれが $\{0,1\}^{n}\to\{0,1\}$ の写像全体（$n$ 変数の真理関数全体）と一致することを述べている。真理値割り当て $v$ は、このブール代数から二元ブール代数 $\{0,1\}$ への準同型にあたる。後で導出可能性で割った代数（リンデンバウム代数）も同じものになることが、完全性定理（\ref{logic:page-prop-completeness}）の内容である。
  - `ring:homomorphism`: NG — Here "準同型" refers to a Boolean algebra homomorphism (preserving the Boolean operations), not a ring homomorphism as defined in the card.
  - `cat:t-algebra`: NG — Here "準同型" means a Boolean algebra homomorphism, not a homomorphism of T-algebras as defined in the card.
  - `grp:homomorphism`: OK

## 「超フィルター」 in 01-foundations/01-general-logic/01-propositional-logic
- Default: `set:boolean-ccc-filter` → **fits: `model:ultrafilter`**
- Pages: 03-compactness.html
- Sentence: 論理式の集合が充足可能であるための必要十分条件は、その有限部分集合がすべて充足可能であることである。この**コンパクト性定理**を三つの方法で証明する。(1) 完全性定理から、(2) 命題変数が可算個のときにケーニッヒの補題から（選択公理を使わない）、(3) 一般の場合に超フィルターから（純粋に意味論的に）。三つ目の証明は、一階述語論理の\ref{model:page-ultraproducts}の原型である。最後に、無限グラフの彩色への応用を述べる。
  - `set:boolean-ccc-filter`: NG — Here "超フィルター" refers to set-theoretic ultrafilters on a set (used to build ultraproducts), not ultrafilters on a Boolean algebra as defined in the card.
  - `model:ultrafilter`: OK

## 「半順序」 in 01-foundations/01-general-logic/01-propositional-logic
- Default: `set:total-order` → **fits: `set:forcing-poset`**
- Pages: 03-compactness.html, 04-intuitionistic.html, 05-intuitionistic-kripke.html
- Sentence: 任意の半順序集合 $(P,\le)$ の順序は全順序に延長できることを、「有限の半順序は全順序に延長できる」ことを使ってコンパクト性定理から示せ。
  - `set:total-order`: NG — the card defines strict partial order with irreflexivity, whereas the sentence uses the non-strict order $\le$ on a poset.
  - `set:forcing-poset`: OK

## 「推移的」 in 01-foundations/01-general-logic/01-propositional-logic
- Default: `set:transitive-set` → **fits: `logic:relation-properties`**
- Pages: 04-intuitionistic.html, 05-intuitionistic-kripke.html
- Sentence: - 前順序（反射的・推移的な関係）、半順序、束（二元の上限・下限をもつ半順序）の用語は標準的なものを使う。前順序の間の随伴（ガロア接続）は \ref{cat:prob-galois-connection} のとおり。
  - `set:transitive-set`: NG — Here "推移的" describes a binary relation (transitivity), not a set whose elements are subsets of it.
  - `logic:relation-properties`: OK

## 「上限」 in 01-foundations/01-general-logic/01-propositional-logic
- Default: `calc:supremum` → **no candidate fits**
- Pages: 04-intuitionistic.html
- Sentence: - 前順序（反射的・推移的な関係）、半順序、束（二元の上限・下限をもつ半順序）の用語は標準的なものを使う。前順序の間の随伴（ガロア接続）は \ref{cat:prob-galois-connection} のとおり。
  - `calc:supremum`: NG — Here "上限" refers to the least upper bound of two elements in a lattice (join), not the supremum of a subset as defined in the card.
  - `set:order-dedekind-complete`: NG — The sentence uses 上限 as part of the standard term for a least upper bound in a poset/lattice, which matches the notion (supremum) referenced in the definition, but the term here is not being used to define Dedekind completeness; it is a general lattice-theoretic usage, so it does not have the meaning defined by the card.
  - `logic:rm-analysis-defs`: NG — Here "上限" refers to the least upper bound (join) in a partially ordered set/lattice, not the supremum of a real sequence as defined in the card.

## 「互いに素」 in 01-foundations/01-general-logic/01-propositional-logic
- Default: `grp:gcd` → **no candidate fits**
- Pages: 05-intuitionistic-kripke.html
- Sentence: $r_{2}$ で $r_{2}\nVdash\psi$ となるものがある。\ref{logic:ikripke-generated} から、$W_{1}\defeq{\uparrow}r_{1}$, $W_{2}\defeq{\uparrow}r_{2}$ に制限しても強制は変わらない。$W_{1},W_{2}$ を互いに素な集合と見て（必要なら付け替える）、新しい状態 $r$ を加えた $W\defeq\{r\}\sqcup W_{1}\sqcup W_{2}$ に、$W_{i}$ の中の順序と「$r\le$ すべて」で半順序を入れ、$V(p)\defeq V_{1}(p)\sqcup V_{2}(p)$ とする（$r\notin V(
  - `grp:gcd`: NG — Here "互いに素" means disjoint sets, not coprime integers as defined in the card.
  - `pt:prime`: NG — Here "互いに素" means disjoint sets, not the number-theoretic coprime relation defined in the card.
  - `grp:cycle`: NG — Here "互いに素" means disjoint sets, not disjoint permutations as defined in the card.

## 「互いに素」 in 01-foundations/01-general-logic/02-first-order-logic
- Default: `grp:gcd` → **no candidate fits**
- Pages: 01-syntax.html
- Sentence: athrm{Con}_{\mathcal{L}}$, $\mathrm{Fun}_{\mathcal{L}}$, $\mathrm{Rel}_{\mathcal{L}}$ と、論理記号・補助記号の集合 $\{\bot,\to,\forall,=,\mathtt{(},\mathtt{)},\mathtt{,}\}$ は互いに素であるとする。これらすべての和集合を $\mathcal{L}$ の**アルファベット** $A_{\mathcal{L}}$ という。
  - `grp:gcd`: NG — Here "互いに素" means the sets are pairwise disjoint, not that two integers have gcd 1.
  - `pt:prime`: NG — Here "互いに素" means pairwise disjoint sets, not the number-theoretic coprime relation defined in the card.
  - `grp:cycle`: NG — Here "互いに素" means pairwise disjoint sets, not disjoint permutations as defined in the card.

## 「生成元」 in 01-foundations/01-general-logic/02-first-order-logic
- Default: `grp:generated-subgroup` → **fits: `grp:presentation`**
- Pages: 01-syntax.html, 02-substitution.html
- Sentence: **高い視点.** 読み方の一意性は、項全体が関数記号を演算とする「自由な代数」（変数と定数記号から、関数記号を当てはめる以外の関係を一切課さずに作った代数）になっている、という主張である。次の構造的再帰の定理は、その代数の普遍性（どんな代数への写像も、生成元での値を決めればただ一つに延びる）の言い換えにあたる。
  - `grp:generated-subgroup`: NG — Here "生成元" refers to generators of a free algebra (elements whose values determine a homomorphism), not specifically a generating set of a group as defined in the card.
  - `grp:presentation`: OK

## 「準同型」 in 01-foundations/01-general-logic/02-first-order-logic
- Default: `ring:homomorphism` → **fits: `cat:t-algebra`**
- Pages: 02-substitution.html, 03-semantics.html
- Sentence: **高い視点.** 代入 $[s/x]$ は、項全体のなす自由な代数（\ref{logic:unique-readability-terms} の後の補足）の上で、生成元 $x$ の行き先を $s$ と決めて延ばした準同型である。論理式への代入が単純な準同型にならないのは、量化子 $\forall x$ が $x$ を「生成元から外す」操作だからである。
  - `ring:homomorphism`: NG — Here "準同型" refers to a homomorphism of free algebras (term algebras), not a ring homomorphism as defined in the card.
  - `cat:t-algebra`: OK

## 「推論規則」 in 01-foundations/01-general-logic/02-first-order-logic
- Default: `logic:deduction-system` → **fits: `pt:pa-x`**
- Pages: 04-natural-deduction.html
- Sentence: 式、略記（$\neg\varphi\defeq\varphi\to\bot$ など）、自由変数は \ref{logic:formula}, \ref{logic:abbreviations}, \ref{logic:free-variables} のとおり。原始記号は $\bot,\to,\forall,=$ なので、推論規則もこの四つについてだけ定める。$\neg,\wedge,\vee,\exists$ の規則は \ref{logic:page-derived-rules} で導く。
  - `logic:deduction-system`: NG — the card defines a specific derivation system (natural deduction) and its rules, not the general notion of "inference rule" mentioned in the sentence.
  - `pt:pa-x`: OK

## 「上限」 in 01-foundations/01-general-logic/02-first-order-logic
- Default: `calc:supremum` → **no candidate fits**
- Pages: 07-completeness.html
- Sentence: タルスキ代数）。完全な無矛盾集合は、この代数の超フィルターにあたり、リンデンバウムの補題は「フィルターは超フィルターに拡張できる」という事実の特別な場合である。命題論理では、完全性定理はブール代数の\ref{top:stone-representation}とほぼ同じ内容になる。一階述語論理では、量化子に対応する無限の上限・下限（$\forall x\,\varphi$ が代入例 $\varphi[t/x]$ の下限であること）を保つ超フィルターを選ぶ必要があり、ヘンキン公理がその役割を果たしている。
  - `calc:supremum`: NG — Here "上限・下限" refers to joins/meets (suprema/infima) in a Boolean algebra or quantifier semantics, not the least upper bound of a subset of a totally ordered field as defined in the card.
  - `set:order-dedekind-complete`: NG — Here 上限 refers to an infimum/lower bound of a set of formulas in a Lindenbaum algebra, not the least upper bound of a bounded subset of a linear order as defined in the card.
  - `logic:rm-analysis-defs`: NG — Here "上限" means the supremum (least upper bound) of a set of truth values in a Boolean algebra, not the supremum of a real sequence as defined in the card.

## 「証明可能」 in 01-foundations/01-general-logic/03-modal-logic
- Default: `logic:derivability` → **no candidate fits**
- Pages: 01-normal-modal-logics.html, 02-gl-axioms.html, 03-kripke-semantics.html
- Sentence: 命題論理に一項の結合子 $\Box$（「必然的に」「証明可能である」などと読む）を加えた**様相論理**を、ヒルベルト流の体系として定める。すべての恒真式と分配公理 $\Box(\varphi\to\psi)\to(\Box\varphi\to\Box\psi)$ を含み、モーダスポネンス・必然化則・一様代入則で閉じた論理式の集合を**正規様相論理**という。本ページでは、正規
  - `logic:derivability`: NG — the card defines derivability (導出可能) in first-order logic, not the modal notion of provability (証明可能) used here.
  - `set:formal-deduction`: NG — Here "証明可能" is used as a reading of the modal operator □ in modal logic, not the formal-provability relation S⊢φ defined by the card.

## 「推論規則」 in 01-foundations/01-general-logic/03-modal-logic
- Default: `logic:deduction-system` → **fits: `pt:pa-x`**
- Pages: 01-normal-modal-logics.html
- Sentence: - 本ページの証明体系はヒルベルト流（公理と推論規則による有限列）である。命題論理・一階述語論理の系列では自然演繹を使ったが、様相論理では必然化則を自然演繹の規則として扱うのが簡単でないため、慣例に従ってヒルベルト流をとる。
  - `logic:deduction-system`: NG — 「推論規則」は規則一般を指す語で、カードが定義する「導出」という特定の帰納的対象ではない。
  - `pt:pa-x`: OK

## 「無矛盾」 in 01-foundations/01-general-logic/03-modal-logic
- Default: `logic:prop-deduction` → **no candidate fits**
- Pages: 01-normal-modal-logics.html, 02-gl-axioms.html, 03-kripke-semantics.html, 04-completeness-decidability.html, 05-canonical-models.html, 07-incomplete-modal-logic.html
- Sentence: き最小限の性質を集めたのが正規様相論理 $\mathsf{K}$ で、読みに応じて公理を加える。$\Diamond\varphi=\neg\Box\neg\varphi$ は「$\varphi$ の否定が必然ではない」、すなわち「$\varphi$ は可能」と読む。証明可能性の読みでは「$\varphi$ は（理論と）無矛盾」である。
  - `logic:prop-deduction`: NG — In the sentence "無矛盾" means consistency of a formula with a theory (provability reading), not the card's definition of a set of formulas being consistent (not deriving ⊥).
  - `logic:derivability`: NG — Here "無矛盾" describes a formula being consistent with a theory, not a set of formulas being consistent (i.e., not deriving ⊥) as defined in the card.
  - `logic:pdl-axioms`: NG — Here "無矛盾" means "consistent with the theory" in the provability reading, not the card's definition of a finite set $X$ with $\vdash\neg\bigwedge X$ being false.
  - `logic:ltl-axioms`: NG — Here 無矛盾 means "consistent with the theory" (the formula is not refutable), not the card's definition of a finite set $X$ being consistent as $\vdash\neg\bigwedge X$ not holding.
  - `set:formal-deduction`: NG — Here "無矛盾" means φ is consistent with the theory (unprovable negation), not the card's definition of a theory S being consistent (no φ with both S⊢φ and S⊢¬φ).

## 「閉包」 in 01-foundations/01-general-logic/03-modal-logic
- Default: `set:finitary-closure` → **no candidate fits**
- Pages: 01-normal-modal-logics.html, 03-kripke-semantics.html, 04-completeness-decidability.html
- Sentence: 分配公理・$\mathrm{Ax}$ を含む正規様相論理とする。証明 $\varphi_{1},\dots,\varphi_{n}$ の各 $\varphi_{k}$ が $\Lambda$ に属することを $k$ に関する帰納法で示せばよい。公理なら仮定から、モーダスポネンスと必然化則の場合は $\Lambda$ の閉包性と帰納法の仮定から従う。
  - `set:finitary-closure`: NG — Here "閉包性" refers to closure of a modal logic under inference rules (modus ponens and necessitation), not the set-theoretic closure of a subset under finitary operations defined in the card.
  - `logic:ltl-size`: NG — Here "閉包性" refers to closure of a logic under modus ponens and necessitation, not the closure set CL(A) of subformulas defined in the card.
  - `logic:ctl-closure`: NG — Here "閉包性" refers to closure of a logic under modus ponens and necessitation (closure properties of a set of formulas), not the specific minimal set CL(A) defined in the card.
  - `set:pred-closure`: NG — Here "閉包性" refers to closure properties of a modal logic (being closed under modus ponens and necessitation), not the set-theoretic closure $\mathrm{cl}(\mathbf{A},x,\mathbf{R})$ defined in the card.
  - `top:interior-closure`: NG — Here "閉包性" refers to closure under inference rules (modus ponens and necessitation), not the topological closure of a set.

## 「有界」 in 01-foundations/01-general-logic/03-modal-logic
- Default: `calc:supremum` → **no candidate fits**
- Pages: 03-kripke-semantics.html
- Sentence: {logic:cwf-not-first-order}）。逆に、様相論理式は世界の近くしか見られない（連続性定理）ので、「逆整礎」単独のように局所的に判定できない性質は書けない（\ref{logic:cwf-not-modal}）。様相論理は「到達関係を少しずつたどる」視点から構造を見る言語であり、モデル理論でいえば、有界な量化子だけを使う一階論理の断片（ガードされた断片）に近い。
  - `calc:supremum`: NG — Here "有界" describes bounded quantifiers in logic, not boundedness of a subset in an ordered set as defined in the card.
  - `logic:rm-analysis-defs`: NG — Here "有界" modifies quantifiers (bounded quantification), not a real sequence as in the card's definition.

## 「上限」 in 01-foundations/01-general-logic/03-modal-logic
- Default: `calc:supremum` → **no candidate fits**
- Pages: 04-completeness-decidability.html
- Sentence: L}$ のそれぞれについて、**有限の**適切なフレームに関する完全性定理を証明する：定理でない論理式 $D$ には、それを偽にする有限のモデルがある。構成は、$D$ の部分論理式とその否定だけからなる「小さな」極大無矛盾集合を世界とし、到達可能性関係を体系ごとに工夫して定める。モデルの大きさが $D$ から計算できる上限で抑えられるので、各体系は**決定可能**である。最後に、$\mathsf{GL}$ は有限の**木**についても完全であることを示す。
  - `calc:supremum`: NG — Here "上限" means an upper bound on the size of the model (a numerical bound), not the least upper bound (supremum) of a subset as defined in the card.
  - `set:order-dedekind-complete`: NG — Here「上限」means an upper bound on the model's size, not the least upper bound (supremum) defined in the card.
  - `logic:rm-analysis-defs`: NG — Here "上限" means an upper bound on the model size computed from D, not the least upper bound (supremum) of a real sequence as defined in the card.

## 「互いに素」 in 01-foundations/01-general-logic/03-modal-logic
- Default: `grp:gcd` → **no candidate fits**
- Pages: 06-trees-for-gl.html, 07-incomplete-modal-logic.html
- Sentence: **Step 1（モデル）.** $W_{C}$ たちを互いに素にとり、新しい点 $w$ を加えて $W\defeq\{w\}\cup\bigcup_{C}W_{C}$、$R\defeq\bigcup_{C}R_{C}\cup\{(w,x):x\in\bigcup_{C}W_{C}\}$、$V\defeq\bigcup_{C}V_{C}\cup\{(w,p):\mathsf{T}p
  - `grp:gcd`: NG — Here "互いに素" means pairwise disjoint sets, not coprime integers as defined in the card.
  - `pt:prime`: NG — Here "互いに素" means pairwise disjoint sets, not the number-theoretic coprime relation defined in the card.
  - `grp:cycle`: NG — Here "互いに素" describes the sets \(W_{C}\) being pairwise disjoint, not permutations with disjoint supports as defined in the card.

## 「連続」 in 01-foundations/01-general-logic/03-modal-logic
- Default: `top:continuous` → **no candidate fits**
- Pages: 06-trees-for-gl.html
- Sentence: {(w,x):x\in\bigcup_{C}W_{C}\}$、$V\defeq\bigcup_{C}V_{C}\cup\{(w,p):\mathsf{T}p\in\Delta\}$ とする。有限・推移的・非反射的な木である。各 $W_{C}$ の点から見える世界は $\mathcal{M}_{C}$ の中と同じなので、連続性（\ref{logic:generated-submodel}）より $W_{C}$ の点での真理は $\mathcal{M}_{C}$ と同じ。
  - `top:continuous`: NG — Here "連続性" refers to the continuity of truth/valuation across generated submodels in modal logic, not the topological continuity of a map between topological spaces defined in the card.
  - `comp:monotone-continuous`: NG — Here "連続性" refers to continuity of a generated submodel map in modal logic, not the fixed-point monotone/continuous function definition on power sets.
  - `cx:limit-continuity`: NG — Here "連続性" refers to the continuity/preservation property of generated submodels in modal logic, not the ε-δ continuity of a complex function defined in the card.

## 「決定可能」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `comp:L-computable` → **fits: `comp:recognizable-decidable`**
- Pages: 01-bisimulation.html, 14-hoare-arithmetic.html
- Sentence: ー–ミルナーの定理**、\tref{logic:hennessy-milner}）。このページでは双模倣を道具に、モデルを**木に展開**する方法と、モデルを有限に**フィルトレーション**で縮める方法を整え、\tref{logic:page-modal-completeness} で示した七つの体系の健全性・完全性・決定可能性を、計算量まで含めて見直す。$\mathsf{S5}$ の充足可能性は NP 完全（\tref{logic:s5-np-complete}）、$\mathsf{K}$ の充足可能性は PSPACE に属する（\tref{logic:k-pspace}。PSPACE 完全であること、すなわち下界は証明せず事実として述べ
  - `comp:L-computable`: NG — the term is used as "decidability" of a logic (satisfiability problem), not the computability-theoretic decidability of a set of natural numbers defined by a characteristic function.
  - `comp:recognizable-decidable`: OK

## 「付値」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `logic:truth-assignment` → **fits: `logic:kripke-model`**
- Pages: 01-bisimulation.html, 02-geach-logics.html, 04-pdl-completeness.html
- Sentence: $\mathcal{G}$ の上のモデル $\mathcal{N}=(W',R',V')$ と $w'\in W'$ をとる。$\mathcal{F}$ の上の付値を $V\defeq\{(w,p):(f(w),p)\in V'\}$ と定めると、$f$ はモデル $(W,R,V)$ から $\mathcal{N}$ への有界射になる（条件 1 は $V$ の定義、2・3 はフレームの有界射の条件）。$f$ は全射なので $f(w)=w'$ となる $w$ がある。$\mathc
  - `logic:truth-assignment`: NG — Here "付値" (valuation) is a map assigning truth values to propositional variables in a Kripke model, which is essentially the same notion as the truth-value assignment $v\colon\mathrm{PV}\to\{0,1\}$ defined in the card.
  - `logic:assignment`: NG — Here "付値" (valuation) is a map assigning truth values to propositional variables in a Kripke model, not a variable assignment $v\colon\mathrm{Var}\to M$ into a structure's domain.
  - `logic:kripke-model`: OK

## 「準同型」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `ring:homomorphism` → **no candidate fits**
- Pages: 01-bisimulation.html
- Sentence: クリプキモデルは集合 $W$ と写像 $W\to\mathcal{P}(W)\times\mathcal{P}(\mathrm{PV})$（$w\mapsto(\text{後続の集合},\text{真な命題変数の集合})$）の組、すなわち冪集合関手を使った**余代数**とみなせる。この見方では、有界射はちょうど余代数の準同型（写像と構造が可換になるもの）であり、双模倣は二つの余代数の間の「スパン」として統一的に定義できる。遷移系・オートマトン・ストリームなどの振る舞いの同値を同じ形で扱う枠組み（余代数の理論）の出発点である。
  - `ring:homomorphism`: NG — Here "準同型" refers to a coalgebra homomorphism (a map commuting with the coalgebra structure), not a ring homomorphism as defined in the card.
  - `cat:t-algebra`: NG — Here "準同型" refers to coalgebra homomorphisms (commuting with the coalgebra structure), not T-algebra homomorphisms as defined in the card.
  - `grp:homomorphism`: NG — Here "準同型" refers to a coalgebra homomorphism (a map commuting with coalgebra structure), not a group homomorphism as defined in the card.
  - `mod:submodule-homomorphism`: NG — Here "準同型" means a coalgebra homomorphism (a map commuting with the coalgebra structure), not an R-module homomorphism as defined in the card.

## 「推移的」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `logic:relation-properties` → **no candidate fits**
- Pages: 01-bisimulation.html, 02-geach-logics.html
- Sentence: - **推移的**：$[w]R^{t}[v]\iff$ すべての $\Box B\in\Sigma$ で、$w\models\Box B$ なら $v\models\Box B$ かつ $v\models B$。
  - `logic:relation-properties`: NG — In the sentence, "推移的" describes a relation $R^{t}$ defined by a modal condition, not the usual transitivity property $wRx \land xRy \Rightarrow wRy$ given in the card.
  - `set:transitive-set`: NG — This "推移的" describes a relation on worlds in modal logic, not a set all of whose elements are subsets of it.
  - `grp:faithful-transitive`: NG — This "推移的" is a relation on Kripke frames/models, not a group action being transitive.

## 「上界」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `set:chain-maximal` → **no candidate fits**
- Pages: 01-bisimulation.html
- Sentence: したがって証明可能性問題）は PSPACE 完全である（R. E. Ladner, The computational complexity of provability in systems of modal propositional logic, SIAM Journal on Computing, 1977）。上界は $\mathsf{K}$ について \ref{logic:k-pspace} で示した。PSPACE 困難性の証明（真偽の量化つきブール式 \ref{comp:tqbf-complete} からの還元）は本サイト未収録。
  - `set:chain-maximal`: NG — Here "上界" means an upper bound on computational complexity (an upper bound on the resources needed), not an upper bound of a subset in a partially ordered set as defined in the card.
  - `calc:supremum`: NG — Here "上界" means an upper bound on computational complexity (an upper bound on the resources needed), not an upper bound of a subset in an ordered set as defined in the card.

## 「推論規則」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `logic:deduction-system` → **fits: `pt:pa-x`**
- Pages: 04-pdl-completeness.html, 05-ltl.html, 06-ctl.html, 10-mu-calculus-logic.html, 13-hoare-logic.html
- Sentence: 推論規則はモーダスポネンス（$A$ と $A\to B$ から $B$）と**必然化**（$A$ から $[\alpha]A$。$\alpha$ はどのプログラムでもよい）の二つとする。公理から推論規則で得られる論理式を**定理**といい、$\vdash A$ と書く。$\vdash\neg\bigwedge X$ でない有限
  - `logic:deduction-system`: NG — 「推論規則」は導出を構成する推論ステップ一般を指す語であり、カードが定義する「導出」そのものではない。
  - `pt:pa-x`: OK

## 「無矛盾」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `logic:pdl-axioms` → **fits: `logic:prop-deduction`**
- Pages: 04-pdl-completeness.html, 06-ctl.html
- Sentence: $X\subset\Phi$ が無矛盾で、各 $B\in\Sigma$ について $B\in X$ または $\neg B\in X$ となるとき、$X$ を**極大**という。極大な集合全体を $W$ とする。$w\in W$ について $\widehat{w}\defeq\bigwedge w$、$Y\subset W$ について $\widehat{
  - `logic:pdl-axioms`: NG — In the card, 無矛盾 is defined only for finite sets X as not proving the negation of their conjunction, whereas the sentence applies it to an arbitrary subset X of Φ, so the meaning is not exactly the same notion.
  - `logic:prop-deduction`: OK

## 「辞書式順序」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `set:well-order-sum-product-def` → **no candidate fits**
- Pages: 05-ltl.html
- Sentence: 段階 $s=0,1,2,\dots$ で有限列を延ばす。段階 $s$ の初めの列の最後を $x$ とし、$l\defeq(s\bmod r)+1$ とする（$r=0$ なら何もしない）。$E_{l}\in x$ なら、\ref{logic:ltl-fulfil} の列のうち長さが最小で、そのうち（$W$ の並べ方による辞書式順序で）最初のものを $x$ の後につなぐ。最後に、\ref{logic:ltl-successor.2} で最後の元の後続のうち最初のものを一つつなぐ。各段階で列は 1 以上延びるので、極限として無限列 $\pi$ が得られる。
  - `set:well-order-sum-product-def`: NG — It refers to a lexicographic order on finite sequences determined by an ordering of W, not the lexicographic product of two well-ordered sets defined in the card.
  - `top:double-arrow`: NG — Here "辞書式順序" refers to a lexicographic order on finite sequences (words), not the lexicographic order on $[0,1]\times\{0,1\}$ defining the double arrow space.

## 「計算可能」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `comp:L-computable` → **fits: `comp:mapping-reducible`**
- Pages: 14-hoare-arithmetic.html
- Sentence: > 参考：『コンピュータサイエンスにおける様相論理』（ユーザー指定の参考書。本文のテキストは未入手のため、構成は標準的な内容によった）。証明には計算可能性の系列のプログラミング言語 L（\ref{comp:page-language-L}）と燃料つきの実行（\ref{comp:fuel-semantics}）、表現可能性定理（\ref{comp:decidable-representable}）、停止問題（\ref{comp:halting-L}）を使う。
  - `comp:L-computable`: NG — Here "計算可能性" refers to the general notion of computability used to structure the proof, not specifically to the card's definition of an L-computable partial function.
  - `comp:mapping-reducible`: OK

