# Term-link check

- Date: 2026-10-28, model deepseek-chat; groups checked: 9297 of 9300; default fits: 8040; problems: 1257
- Usage: 9790 calls, 5595641 prompt tokens (2856216 cache hits), 91556 completion tokens

Each entry: the term, the series, the definition the linker chose (NG), and the first candidate that fits (fix with \term[語]{label} or a rule in tools/terms.json), or none.

## 「コンパクト」 in 01-foundations/01-general-logic/01-propositional-logic
- Default: `top:compact` → **no candidate fits**
- Pages: 02-natural-deduction-completeness.html, 03-compactness.html
- Sentence: 1. **（弱化・有限性（構文論的コンパクト性））** $\Sigma\vdash\varphi$, $\Sigma\subset\Sigma'$ なら $\Sigma'\vdash\varphi$。$\Sigma\vdash\varphi$ なら有限の $\Sigma_{0}\subset\Sigma$ で $\Sigma_{0}\vdash\varphi$。
  - `top:compact`: NG — Here "コンパクト" refers to syntactic compactness of a deductive system (finite subtheory property), not topological compactness of a space or subset.

## 「下限」 in 01-foundations/01-general-logic/01-propositional-logic
- Default: `calc:supremum` → **no candidate fits**
- Pages: 04-intuitionistic.html
- Sentence: - 前順序（反射的・推移的な関係）、半順序、束（二元の上限・下限をもつ半順序）の用語は標準的なものを使う。前順序の間の随伴（ガロア接続）は \ref{cat:prob-galois-connection} のとおり。
  - `calc:supremum`: NG — Here "下限" refers to the meet (greatest lower bound) of two elements in a lattice, which is a special case of the infimum defined in the card, so it matches.

## 「交わり」 in 01-foundations/01-general-logic/01-propositional-logic
- Default: `set:boolean-algebra` → **no candidate fits**
- Pages: 03-compactness.html
- Sentence: rphi$ について「$\varphi$ を充足する割り当ての集合」は開かつ閉である（$\varphi$ の真理値は有限個の座標だけで決まる）。有限充足可能性は、これらの閉集合族が有限交叉性をもつことである。$\{0,1\}^{\mathrm{PV}}$ は\ref{top:tychonoff}によりコンパクトなので、交わりは空でない。これが「コンパクト性」という名前の由来である。$\mathrm{PV}$ が可算なら $\{0,1\}^{\omega}$ はカントール空間で、そのコンパクト性の証明が証明 2 のケーニッヒの補題にあたる。
  - `set:boolean-algebra`: NG — Here "交わり" means the intersection of a family of closed sets, not the meet (greatest lower bound) operation in a Boolean algebra.

## 「半順序」 in 01-foundations/01-general-logic/01-propositional-logic
- Default: `set:total-order` → **fits: `set:forcing-poset`**
- Pages: 03-compactness.html, 04-intuitionistic.html, 05-intuitionistic-kripke.html
- Sentence: 任意の半順序集合 $(P,\le)$ の順序は全順序に延長できることを、「有限の半順序は全順序に延長できる」ことを使ってコンパクト性定理から示せ。
  - `set:total-order`: NG — the sentence uses the non-strict order $\le$ (a reflexive partial order), whereas the card defines strict partial order with irreflexivity.
  - `set:forcing-poset`: OK

## 「始切片」 in 01-foundations/01-general-logic/01-propositional-logic
- Default: `set:initial-segment` → **no candidate fits**
- Pages: 01-syntax-semantics.html, 03-compactness.html
- Sentence: - **記号列.** 集合 $A$ の元の有限列を $A$ 上の記号列という。長さを $\lvert w\rvert$、連結を $uw$ と書き、$w=uv$ のとき $u$ を $w$ の始切片（$v\neq\varepsilon$ なら真の始切片）という。同じ記号列の二つの始切片は比較可能（短い方が長い方の始切片）である。記号列の一致を $=$ で表す。
  - `set:initial-segment`: NG — This "始切片" is an initial segment of a string (a prefix), not the set-theoretic predecessor set defined in the card.

## 「最小元」 in 01-foundations/01-general-logic/01-propositional-logic
- Default: `set:well-order` → **no candidate fits**
- Pages: 04-intuitionistic.html
- Sentence: **ハイティング代数**とは、最小元 $0$・最大元 $1$ をもつ束 $(H,\le,\wedge,\vee)$ と二項演算 $\Rightarrow$ の組で、すべての $a,b,c\in H$ について
  - `set:well-order`: NG — It refers to the least element of the whole lattice, not the $R$-least element of a subset under a well-order.

## 「直観主義命題論理」 in 01-foundations/01-general-logic/01-propositional-logic
- Default: `logic:ipc-formula` → **no candidate fits**
- Pages: 04-intuitionistic.html, 05-intuitionistic-kripke.html
- Sentence: 自然演繹（\ref{logic:prop-deduction}）から背理法 RAA を除き、代わりに「矛盾からは何でも導ける」規則（$\bot$E）を置いた体系が**直観主義命題論理** $\mathsf{NJ}$ である（\ref{logic:nj}）。直観主義論理では $\wedge$, $\vee$ を $\to$, $\bot$ で定義できないので、最初から記号として入れる。真理値 $\{0,1\}$ の意味論の代わりに**ハイティング代数**（\ref{logic:heyting-alg
  - `logic:ipc-formula`: NG — The card defines the set of formulas of intuitionistic propositional logic, not the proof system NJ itself.

## 「コンパクト」 in 01-foundations/01-general-logic/02-first-order-logic
- Default: `top:compact` → **no candidate fits**
- Pages: 04-natural-deduction.html, 06-derived-rules.html, 07-completeness.html, 08-completeness-alternative.html, 09-craig-robinson.html
- Sentence: 3. **（有限性・構文論的コンパクト性）** $\Sigma\vdash\varphi$ ならば、ある有限部分集合 $\Sigma_{0}\subset\Sigma$ について $\Sigma_{0}\vdash\varphi$。
  - `top:compact`: NG — This is syntactic compactness of a formal system, not topological compactness of a space or subset.

## 「下限」 in 01-foundations/01-general-logic/02-first-order-logic
- Default: `calc:supremum` → **no candidate fits**
- Pages: 07-completeness.html
- Sentence: キ代数）。完全な無矛盾集合は、この代数の超フィルターにあたり、リンデンバウムの補題は「フィルターは超フィルターに拡張できる」という事実の特別な場合である。命題論理では、完全性定理はブール代数の\ref{top:stone-representation}とほぼ同じ内容になる。一階述語論理では、量化子に対応する無限の上限・下限（$\forall x\,\varphi$ が代入例 $\varphi[t/x]$ の下限であること）を保つ超フィルターを選ぶ必要があり、ヘンキン公理がその役割を果たしている。
  - `calc:supremum`: NG — Here "下限" refers to an infimum in a lattice/Boolean-algebra sense (the meet of substitution instances), not the order-theoretic infimum of a subset of a totally ordered field as defined in the card.

## 「同型写像」 in 01-foundations/01-general-logic/02-first-order-logic
- Default: `set:order-isomorphism` → **no candidate fits**
- Pages: 03-semantics.html, 07-completeness.html, 09-craig-robinson.html
- Sentence: $\mathcal{L}$ 構造 $\mathcal{M},\mathcal{N}$ の間の**同型写像**とは、全単射 $h\colon M\to N$ で、すべての定数記号 $c$、関数記号 $f$、関係記号 $P$ と $a_{1},\dots,a_{n}\in M$ について
  - `set:order-isomorphism`: NG — It is a generalization: the card defines isomorphism for a single relation, while the sentence defines it for an entire first-order structure with constants, functions, and relations.

## 「命題論理」 in 01-foundations/01-general-logic/02-first-order-logic
- Default: `logic:prop-formula` → **no candidate fits**
- Pages: 07-completeness.html, 08-completeness-alternative.html
- Sentence: - 使う構文の結果：演繹定理・弱化・カット・有限性（\ref{logic:derivability-basic}）、矛盾と導出可能性（\ref{logic:consistency-basic}）、命題論理・量化子・等号の派生規則（\ref{logic:derived-propositional}, \ref{logic:derived-quantifier}, \ref{logic:derived-equality}）、新しい定数についての一般化（\ref{logic:generalization-constants}
  - `logic:prop-formula`: NG — the card defines the formal language of propositional formulas, not the logical system "propositional logic" referred to in the sentence.

## 「始切片」 in 01-foundations/01-general-logic/02-first-order-logic
- Default: `set:initial-segment` → **no candidate fits**
- Pages: 01-syntax.html
- Sentence: - **連結と始切片.** 記号列 $u,v$ を続けて並べた記号列を $uv$ と書く（連結）。$w=uv$ となる $v$ があるとき $u$ を $w$ の**始切片**といい、さらに $v\neq\varepsilon$ のとき**真の始切片**という。記号列は記号を横に並べて書く。たとえば $f\,\mathtt{(}\,x\,
  - `set:initial-segment`: NG — This "始切片" is an initial segment of a string (a prefix), not the set-theoretic predecessor set defined in the card.

## 「推論規則」 in 01-foundations/01-general-logic/02-first-order-logic
- Default: `logic:deduction-system` → **fits: `pt:pa-x`**
- Pages: 04-natural-deduction.html
- Sentence: 式、略記（$\neg\varphi\defeq\varphi\to\bot$ など）、自由変数は \ref{logic:formula}, \ref{logic:abbreviations}, \ref{logic:free-variables} のとおり。原始記号は $\bot,\to,\forall,=$ なので、推論規則もこの四つについてだけ定める。$\neg,\wedge,\vee,\exists$ の規則は \ref{logic:page-derived-rules} で導く。
  - `logic:deduction-system`: NG — 「推論規則」は導出を構成する規則全般を指す語であり、カードが定義する「導出」という概念そのものではない。
  - `pt:pa-x`: OK

## 「爆発律」 in 01-foundations/01-general-logic/02-first-order-logic
- Default: `logic:nj` → **no candidate fits**
- Pages: 04-natural-deduction.html, 05-soundness.html, 06-derived-rules.html, 09-craig-robinson.html
- Sentence: 1. **（爆発律）** $\Sigma\vdash\bot$ ならば、任意の $\varphi$ について $\Sigma\vdash\varphi$。
  - `logic:nj`: NG — 爆発律 (ex falso) is not one of the rules defining NJ; it is a derived principle, and the card's NJ system has no rule that directly produces an arbitrary $\varphi$ from $\bot$ except via $(\bot E)$, which is a rule of the derivation system rather than the named principle 爆発律.

## 「タブロー」 in 01-foundations/01-general-logic/03-modal-logic
- Default: `logic:tableau-saturated` → **no candidate fits**
- Pages: 06-trees-for-gl.html
- Sentence: **タブロー**（木の方法）は、論理式の否定を仮定して場合分けを進め、すべての場合が矛盾すれば元の論理式が定理であると判定する証明の探索法である。ここでは $\mathsf{GL}$ のためのタブローを、符号付き論理式の有限集合についての再帰的な手続きとして定式化し、(1) 手続きが必ず停止すること、(2) 閉じれば定理であること
  - `logic:tableau-saturated`: NG — タブロー is a proof-search method/tree procedure, not the property of being saturated or directly contradictory defined in the card.

## 「命題論理」 in 01-foundations/01-general-logic/03-modal-logic
- Default: `logic:prop-formula` → **no candidate fits**
- Pages: 01-normal-modal-logics.html
- Sentence: 命題論理に一項の結合子 $\Box$（「必然的に」「証明可能である」などと読む）を加えた**様相論理**を、ヒルベルト流の体系として定める。すべての恒真式と分配公理 $\Box(\varphi\to\psi)\to(\Box\varphi\to\Box\psi)$ を含み、モーダスポネンス・必然化則・一様代入則で閉じた論理式の
  - `logic:prop-formula`: NG — 命題論理 is a whole logic/system, not a propositional formula as defined by the card.

## 「始切片」 in 01-foundations/01-general-logic/03-modal-logic
- Default: `set:initial-segment` → **no candidate fits**
- Pages: 01-normal-modal-logics.html, 04-completeness-decidability.html
- Sentence: - (b) $\theta$ の任意の始切片 $u$ について $\lambda(u)\ge0$。
  - `set:initial-segment`: NG — Here "始切片" refers to an initial segment of the ordinal $\theta$ (a set of the form $\{v : v < u\}$), not the set $\mathrm{pred}(A,x,R)$ defined in the card.

## 「導出可能」 in 01-foundations/01-general-logic/03-modal-logic
- Default: `logic:derivability` → **no candidate fits**
- Pages: 02-gl-axioms.html
- Sentence: $ に対して $q\leftrightarrow(\Box q\to p)$ を証明できる文 $q$ がとれる。すると $\Box D$ が（必然化により）証明でき、この定理から $\Box(\Box p\to p)\to\Box p$ が得られる。これがレーブの定理の証明であり、上の証明は、算術の中で行う推論のうち「導出可能性条件」だけを使う部分を様相論理の言葉で書き出したものである。算術の側でこの定理を使うと、「$\mathsf{GL}$ の定理はどの算術的解釈でも証明できる」ことの別証明が得られる（\ref{pt:page-arithmetical-soundness}）。
  - `logic:derivability`: NG — Here "導出可能性条件" refers to the provability conditions (Hilbert–Bernays–Löb derivability conditions) in modal logic, not the specific relation $\Sigma\vdash\varphi$ defined in the card.

## 「選言」 in 01-foundations/01-general-logic/03-modal-logic
- Default: `logic:abbreviations` → **no candidate fits**
- Pages: 07-incomplete-modal-logic.html
- Sentence: edge\cdots\wedge C'_{k}\to B$、\ref{logic:normality.5} で $\Box B\in w$）。$\mathcal{B}$ は恒真式による同値を除いて有限なので、$Y$ はある有限部分 $Y_{0}$ と同値で、$\bigwedge Y_{0}$ はそれと両立する状態記述の選言と同値である。よって $Y\cup\{C\}$ が無矛盾な $C\in\mathcal{S}$ があり、Step 2 より $Y$ の各元 $E$ について $L\vdash C\to E$、したがって $Y\subset w_{C}$。$wRw_{C}$ で $\neg B\in w_{C}$ なので $w_{C}\
  - `logic:abbreviations`: NG — “選言” (disjunction) is not defined in the card; the card only gives abbreviations for logical connectives like ∧ and ∨, not the term “選言” itself.

## 「β 簡約」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `logic:beta-reduction` → **no candidate fits**
- Pages: 02-geach-logics.html
- Sentence: 計算機科学での読み方：$R$ をプログラムや遷移系の一歩とすると、1 は「どの状態でも止まらない（デッドロックがない）」、2 は「次の状態は高々一つ（決定的）」、4 は「二通りに進んでも一歩ずつで合流できる」。4 で $R$ を「0 歩以上何歩か進む」関係にとると、条件はラムダ計算の β 簡約の合流性（\tref{logic:church-rosser} の形）そのものになる。1 と 2 を合わせると「次の状態がちょうど一つ」で、$\mathsf{K}\{(0,0,1,1),(1,1,0,0)\}$ はそのようなフレームについて完全である（\ref{logic:geach-frame-completenes
  - `logic:beta-reduction`: NG — It refers to β-reduction as a relation/process, while the card defines β-reduction as a specific relation generated by the β-rule; the sentence uses it only as an analogy for confluence, not the defined notion itself.

## 「μ 計算」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `logic:mu-preformula` → **no candidate fits**
- Pages: 08-mu-calculus.html, 09-mu-approximants.html, 10-mu-calculus-logic.html, 11-parity-games.html, 12-mu-model-checking.html, 15-hoare-dynamic.html
- Sentence: > 参考：『コンピュータサイエンスにおける様相論理』（ユーザー指定の参考書。本文のテキストは未入手のため、構成は標準的な内容によった）。μ 計算は Kozen, *Results on the propositional μ-calculus*, Theoret. Comput. Sci. 27 (1983) による。代入の扱いは一階述語論理の代入（\ref{logic:page-substitution}）と同じ考え方で、ここでは束縛変数を付け替える形の定義
  - `logic:mu-preformula`: NG — the term refers to the μ-calculus (a logic/system), not to the notion of a "pre-formula" defined by the card.

## 「コード」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `comp:prime-sequence-code` → **no candidate fits**
- Pages: 14-hoare-arithmetic.html
- Sentence: $\iff$ ある時点で $p\ge N$ $\iff$ $M$ が停止する様相に達する（⇐ は停止までの歩数についての帰納法で導出を作り、⇒ は外側のループの導出についての帰納法）。初めの代入で、出発する状態によらず $M$ の入力状態 $\sigma_{n}$ から始まる。$P_{M,n}$ の記号列は $M$ のコードと $n$ から明らかな手続きで書き下せる。
  - `comp:prime-sequence-code`: NG — Here "コード" refers to the code of the Turing machine $M$ (a program encoding), not the code of a finite-support state $\sigma$ as defined in the card.

## 「プログラミング言語 L」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `comp:L-syntax` → **no candidate fits**
- Pages: 13-hoare-logic.html, 14-hoare-arithmetic.html
- Sentence: - プログラムの操作的意味論の考え方（規則で閉じた最小の関係、導出についての帰納法）は、プログラミング言語 L の場合（\ref{comp:L-semantics}）と同じである。
  - `comp:L-syntax`: NG — “プログラミング言語 L” refers to the whole language, not an individual L-program as defined by the card.

## 「一つでも」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `comp:ntm-definition` → **no candidate fits**
- Pages: 01-bisimulation.html
- Sentence: 」の定義、様相論理式で区別できないことは「観測で区別できない」ことの定義である。双模倣不変性は「同じ振る舞いなら観測で区別できない」を言い、この定理はその逆を、各状態から行ける先が有限個という条件の下で保証する。区別できない二つの状態があれば、相手の動きを「区別できない状態どうし」で真似し続けられる。真似できない動きが一つでもあれば、それを捕える論理式を有限個の連言で組み立てられる、というのが証明の要点で、「有限個」の所に像有限性が効く。
  - `comp:ntm-definition`: NG — Here "一つでも" means "even one" (a single non-imitable move), not the existential "at least one accepting branch" sense defined in the card.

## 「上に有界」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `calc:supremum` → **no candidate fits**
- Pages: 01-bisimulation.html
- Sentence: - Step 1 の戻りの条件には「$\mathcal{F}$ のどの点にも後続がある」ことを使った（$<$ が上に有界でないこと）。実際、フレーム $\mathcal{F}$ から反射的な一点への（全射な）有界射があるのは、$\mathcal{F}$ のどの点にも後続があるときに限る：行きの条件はつねに成り立ち、戻りの条件はちょうど「後続がある」ことである。有限でもよい：二点の往復 $(\{0,1\},\{(0,1),(1,0)\})
  - `calc:supremum`: NG — Here "上に有界" describes the strict order $<$ on $\mathcal{F}$ having no upper bound, which matches the card's notion of a subset being bounded above in a totally ordered set.

## 「下界」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `calc:supremum` → **no candidate fits**
- Pages: 01-bisimulation.html
- Sentence: 系の健全性・完全性・決定可能性を、計算量まで含めて見直す。$\mathsf{S5}$ の充足可能性は NP 完全（\tref{logic:s5-np-complete}）、$\mathsf{K}$ の充足可能性は PSPACE に属する（\tref{logic:k-pspace}。PSPACE 完全であること、すなわち下界は証明せず事実として述べる：\ref{logic:modal-complexity-fact}）。
  - `calc:supremum`: NG — Here "下界" means a lower bound in computational complexity, not an order-theoretic lower bound of a subset.

## 「割り当て」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `logic:assignment` → **no candidate fits**
- Pages: 01-bisimulation.html, 13-hoare-logic.html
- Sentence: $\mathsf{S5}$-充足可能性は NP 困難である】 $\Box$ を含まない論理式（命題論理式）$\varphi$ について、$\varphi$ が命題論理の意味で\term[充足可能]{logic:tautology} $\iff$ $\varphi$ が $\mathsf{S5}$-充足可能。⇒：充足する割り当てを一点の反射的なモデルの付値にすればよい。⇐：$\Box$ を含まないので、真になる世界での命題変数の真偽が充足する割り当てになる。$\varphi\mapsto\varphi$（論理結合子の略記の展開を含めても多項式時間）は SAT からの多項式時間還元であり、SAT は NP 完全（\ref{comp:cook-l
  - `logic:assignment`: NG — Here "割り当て" means a propositional truth assignment (valuation of propositional variables), not a variable assignment map into a structure's domain as defined in the card.

## 「可算」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `set:finite-set` → **no candidate fits**
- Pages: 01-bisimulation.html, 02-geach-logics.html
- Sentence: 「健全性」は定理が適切なフレームで妥当であること、「完全性」はその逆、「有限モデル性」は有限の適切なフレームだけで完全性が成り立つことである。有限モデル性と、公理系が有限（定理の全体が帰納的可算）であることを合わせると決定可能になる、というのが \ref{logic:modal-fmp-decidability} の議論の形であり、ここではさらに、判定にどれだけの資源が要るかまで評価した。表の「本サイト未収録」は、計算量が知られていないという意味ではない。ギーチ論理から下の行は、このページより後で（またはこの
  - `set:finite-set`: NG — “可算” here means recursively enumerable (computably enumerable), not the cardinal notion of being at most countable.

## 「命題論理」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `logic:prop-formula` → **no candidate fits**
- Pages: 01-bisimulation.html, 05-ltl.html, 10-mu-calculus-logic.html
- Sentence: 健全性と完全性（\ref{logic:page-modal-completeness}）から、$A$ が $L$-充足可能 $\iff L\nvdash\neg A$ である。命題論理の充足可能性（\ref{logic:tautology}）は、$\Box$ を含まない論理式についてのこの概念と一致する（\ref{logic:s5-np-complete} の Step 2）。
  - `logic:prop-formula`: NG — the term refers to the whole propositional logic system, not to the notion of a propositional formula defined by the card.

## 「定義域」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `set:relation` → **no candidate fits**
- Pages: 14-hoare-arithmetic.html
- Sentence: **Step 2.** 【主張：枚挙できれば $K$ が決定可能になる】 妥当な三つ組の全体が帰納的に枚挙できれば、計算可能な写像 $e\mapsto\{\top\}P_{e}\{\bot\}$ による逆像として、$K$ の補集合も帰納的に枚挙できる（Σ₁）。$K$ 自身も計算可能な部分関数の定義域なので Σ₁（\ref{comp:halting-L}、\ref{comp:sigma1-recognizable.1}）。両方が Σ₁ なら $K$ は Δ₁ で、\ref{comp:sigma1-recognizable.2} から決定可能となり、\ref{comp:halting-L} に反する。
  - `set:relation`: NG — Here 定義域 refers to the domain of a computable partial function, not the domain of a relation as defined in the card.
  - `logic:rm-continuous-code`: NG — Here "定義域" refers to the domain of a computable partial function, not the domain of a continuous function as defined in the card.

## 「推移的」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `logic:relation-properties` → **no candidate fits**
- Pages: 01-bisimulation.html, 02-geach-logics.html
- Sentence: - **推移的**：$[w]R^{t}[v]\iff$ すべての $\Box B\in\Sigma$ で、$w\models\Box B$ なら $v\models\Box B$ かつ $v\models B$。
  - `logic:relation-properties`: NG — Here "推移的" names a relation $R^{t}$ defined by a modal condition, not the transitivity property (if $wRx$ and $xRy$ then $wRy$) defined in the card.
  - `grp:faithful-transitive`: NG — This "推移的" is a relation on Kripke frames/models, not a group action being transitive.

## 「普遍性」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 04-pdl-completeness.html
- Sentence: 合わせて）「$\vdash X\to A\wedge[\alpha]X$ を満たすどの $X$ についても $\vdash X\to[\alpha^{\ast}]A$」、つまり最大の不動点であることを、有限の論理式の言葉で言っている。順序集合の言葉では、公理 6 が「不動点である」、公理 7 が「最大である」という**普遍性**にあたり、自然数の帰納法が「$\mathbb{N}$ は $0$ を含み後者で閉じた最小の集合」という普遍性であるのと、最小と最大を入れ替えた同じ構造をしている。この見方を一般の単調な写像に広げたのが様相 μ 計算で、そこでは不動点を作る演算子 $\mu,\nu$ が論理式の中に直接書ける（後のページで扱う予定）。
  - `cat:universal-arrow`: NG — Here「普遍性」means the universal property (extremal/initiality-finality characterization) of a fixed point, not the specific notion of a universal morphism (普遍射) defined in the card.

## 「決定可能」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `comp:recognizable-decidable` → **no candidate fits**
- Pages: 01-bisimulation.html, 14-hoare-arithmetic.html
- Sentence: ー–ミルナーの定理**、\tref{logic:hennessy-milner}）。このページでは双模倣を道具に、モデルを**木に展開**する方法と、モデルを有限に**フィルトレーション**で縮める方法を整え、\tref{logic:page-modal-completeness} で示した七つの体系の健全性・完全性・決定可能性を、計算量まで含めて見直す。$\mathsf{S5}$ の充足可能性は NP 完全（\tref{logic:s5-np-complete}）、$\mathsf{K}$ の充足可能性は PSPACE に属する（\tref{logic:k-pspace}。PSPACE 完全であること、すなわち下界は証明せず事実として述べ
  - `comp:recognizable-decidable`: NG — “決定可能性” here refers to the decidability of modal logics (whether a formula is satisfiable/valid), not the computability-theoretic notion of a language being decided by a Turing machine as defined in the card.

## 「線形時相論理」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `logic:ltl-syntax` → **no candidate fits**
- Pages: 05-ltl.html
- Sentence: プログラムの実行は状態の無限列と見なせる。**線形時相論理**（LTL、Pnueli 1977）は、その列の各時刻で「次の時刻に $A$」（$\mathbf{X}A$）、「$B$ になるまで $A$ が続き、いつか $B$ になる」（$A\,\mathbf{U}\,B$）といった性質を述べる論理である。「いつか $A$」$\mathbf{F}A$ と「ずっと $A$」$\ma
  - `logic:ltl-syntax`: NG — the term names the whole logic LTL, whereas the card defines only its formulas (a component notion), not the logic itself.

## 「計算可能」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `comp:L-computable` → **fits: `comp:mapping-reducible`**
- Pages: 14-hoare-arithmetic.html
- Sentence: > 参考：『コンピュータサイエンスにおける様相論理』（ユーザー指定の参考書。本文のテキストは未入手のため、構成は標準的な内容によった）。証明には計算可能性の系列のプログラミング言語 L（\ref{comp:page-language-L}）と燃料つきの実行（\ref{comp:fuel-semantics}）、表現可能性定理（\ref{comp:decidable-representable}）、停止問題（\ref{comp:halting-L}）を使う。
  - `comp:L-computable`: NG — Here "計算可能性" refers to the general notion of computability (the series/topic of computability), not specifically the L-computable partial functions defined in the card.
  - `comp:mapping-reducible`: OK

## 「関係の合成」 in 01-foundations/01-general-logic/04-modal-logic-cs
- Default: `set:relation-composition` → **no candidate fits**
- Pages: 03-pdl.html
- Sentence: et W\times W$ について、$R^{0}$ は恒等関係、$R^{n+1}\defeq R^{n}\circ R$（$wR^{n+1}v\iff wR^{n}u$ かつ $uRv$ となる $u$ がある）、$R^{\ast}\defeq\bigcup_{n\ge0}R^{n}$（**反射推移閉包**）。二つの関係の合成は $w(R\circ S)v\iff wRu$ かつ $uSv$ となる $u$ がある、とする（左から順に）。
  - `set:relation-composition`: NG — In the sentence, the composition \(R\circ S\) is defined with the order \(wRu\) and \(uSv\), which is the reverse of the card's definition \(S\circ R\) where \(\langle x,y\rangle\in R\) and \(\langle y,z\rangle\in S\).

## 「α 同値」 in 01-foundations/02-model-theory/01-elementary-extensions
- Default: `logic:mu-alpha` → **fits: `logic:lambda-substitution`**
- Pages: 02-elementary-chains.html, 04-acf.html
- Sentence: ag}_{\forall}(\mathcal{M})$ で $T\cup\{\sigma_{1},\dots,\sigma_{k}\}$ がモデルをもたないものがある。$\sigma_{j}=\forall\vec{y}_{j}\,\chi_{j}$（$\chi_{j}$ は量化子がない）と書き、束縛変数を取り替えて（α 同値、\ref{pt:alpha-semantics}）、$\vec{y}_{1},\dots,\vec{y}_{k}$ が互いに異なる変数の列であるとしてよい。$\sigma_{1}\wedge\dots\wedge\sigma_{k}$ に現れる $c_{a}$ を $c_{a_{1}},\dots,c_{a_{n}}
  - `logic:mu-alpha`: NG — In the sentence, α 同値 refers to renaming bound variables in first-order formulas, not to α-equivalence of μ-formulas defined via α-conversion of μY.C.
  - `logic:lambda-substitution`: OK

## 「クラス」 in 01-foundations/02-model-theory/01-elementary-extensions
- Default: `set:class` → **no candidate fits**
- Pages: 02-elementary-chains.html
- Sentence: - *普遍代数.* 等式で公理化できるクラス（多様体）は、準同型像・部分代数・直積で閉じたクラスと一致する（バーコフの HSP 定理）。Burris–Sankappanavar『A Course in Universal Algebra』の主題の一つで、本サイトでは普遍代数の系列で扱う予定である。ウォシュ–タルスキの定理はその「S」の部分の一階論理版とみなせる。
  - `set:class`: NG — Here "クラス" means a class of algebras (a collection of algebraic structures), not the set-theoretic class defined by a formula in the card.

## 「コンパクト」 in 01-foundations/02-model-theory/01-elementary-extensions
- Default: `top:compact` → **no candidate fits**
- Pages: 01-elementary-substructures.html, 02-elementary-chains.html, 03-quantifier-elimination.html
- Sentence: *内部に**、$\mathcal{M}$ と「同じことが同じ元について成り立つ」小さい部分構造（**初等部分構造**）を見つける。判定法は**タルスキ–ヴォートの判定法**で、構成の道具は、存在量化子の証拠を選ぶ**スコーレム関数**と、集合論の閉包補題（\ref{set:closure-lemma}）である。最後に、コンパクト性と組み合わせて、大きい**初等拡大**を作る上昇版を示す。
  - `top:compact`: NG — Here "コンパクト性" refers to compactness in model theory (compactness theorem for first-order logic), not topological compactness of a space.

## 「三角不等式」 in 01-foundations/02-model-theory/01-elementary-extensions
- Default: `calc:norm` → **no candidate fits**
- Pages: 06-ordered-fields.html
- Sentence: **5.** $\lvert ab\rvert$ は符号の場合分け。三角不等式：$-\lvert a\rvert\le a\le\lvert a\rvert$ を足して $-(\lvert a\rvert+\lvert b\rvert)\le a+b\le\lvert a\rvert+\lvert b\rvert$。最後：$\lvert a\rvert\le1$ なら明らか、$\lvert a\
  - `calc:norm`: NG — This is the scalar triangle inequality for absolute value, not the norm axiom \(N(x+y)\le N(x)+N(y)\) for a norm on a vector space.

## 「合成」 in 01-foundations/02-model-theory/01-elementary-extensions
- Default: `logic:while-program` → **fits: `set:relation-composition`**
- Pages: 02-elementary-chains.html
- Sentence: （$\mathcal{A}_{n}\preccurlyeq\mathcal{A}_{n+1}$, $\mathcal{B}_{n}\models T$）を作る。Step 1 を $\mathcal{A}_{n}$ に使えるのは、$\mathcal{A}_{n}\equiv\mathcal{M}$（初等埋め込みの合成）で $\mathcal{A}_{n}\models T_{\forall\exists}$ だからである。各段の構成で選択を繰り返すので、従属選択の原理（選択公理から従う）を使う。
  - `logic:while-program`: NG — Here "合成" means composition of elementary embeddings, not the sequential composition of while programs defined in the card.
  - `set:relation-composition`: OK

## 「命題論理」 in 01-foundations/02-model-theory/01-elementary-extensions
- Default: `logic:prop-formula` → **no candidate fits**
- Pages: 03-quantifier-elimination.html
- Sentence: - 命題論理の選言標準形（\ref{logic:normal-forms}）を使う。
  - `logic:prop-formula`: NG — 命題論理 is a logic system, not a propositional formula as defined in the card.

## 「大域的な条件」 in 01-foundations/02-model-theory/01-elementary-extensions
- Default: `logic:ltl-hintikka` → **no candidate fits**
- Pages: 01-elementary-substructures.html
- Sentence: **高い視点から.** 初等部分構造は、「$\mathcal{L}$ で表せる性質」だけを通して見たときに区別できない部分である。タルスキ–ヴォートの判定法は、この大域的な条件（すべての論理式）を、存在量化子についての局所的な閉包条件に帰着させる。スコーレム関数をすべて演算として言語に加えると（**スコーレム化**）、初等部分構造はちょうど「すべての演算で閉じた部分集合」、すなわち代数的な部分構造になる。これは、ベクトル空間の\term[部分空間]{lin:vector-space}が「演算
  - `logic:ltl-hintikka`: NG — Here "global condition" refers to a condition involving all formulas at once, not the H4 eventual-fulfillment condition defined in the card.

## 「従う」 in 01-foundations/02-model-theory/01-elementary-extensions
- Default: `logic:positional-strategy` → **no candidate fits**
- Pages: 01-elementary-substructures.html, 02-elementary-chains.html, 03-quantifier-elimination.html, 04-acf.html, 06-ordered-fields.html
- Sentence: 式から $\to$ だけで作られる。$\bot$ は両辺偽。$t=s$ は 1 から。$P(t_{1},\dots,t_{n})$ は、1 より両辺で同じ組 $(a_{1},\dots,a_{n})\in N^{n}$ が現れ、$P^{\mathcal{N}}=P^{\mathcal{M}}\cap N^{n}$ から従う。$\to$ は帰納法の仮定と充足の定義 4 による。
  - `logic:positional-strategy`: NG — Here "従う" means "follows from" (logical consequence), not a play following a positional strategy.

## 「推移的」 in 01-foundations/02-model-theory/01-elementary-extensions
- Default: `logic:relation-properties` → **no candidate fits**
- Pages: 01-elementary-substructures.html
- Sentence: る。とくに、$M$ で「非可算」と判定される集合 $a$ を $A$ に入れておけば、$a$ を含む可算な初等部分構造 $\mathcal{N}$ があり、$\mathcal{N}$ でも $a$ は「非可算」だが、$\mathcal{N}$ の中にある $a$ の $E$-元は可算個しかない。集合論では同様の議論が、推移的モデルとモストフスキ崩壊を組み合わせて使われる。
  - `logic:relation-properties`: NG — Here "推移的モデル" means a transitive set/model (closed under elements), not the transitivity property of a relation R as defined in the card.
  - `grp:faithful-transitive`: NG — Here "推移的" describes a model (transitive model) in set theory, not a group action being transitive.

## 「最大公約数」 in 01-foundations/02-model-theory/01-elementary-extensions
- Default: `grp:gcd` → **no candidate fits**
- Pages: 07-sturm.html, 08-rcf-qe.html
- Sentence: - 二つの多項式の**最大公約数**は、ユークリッドの互除法（(D1) の繰り返し）の最後の $0$ でない剰余として、定数倍を除いて定まる。
  - `grp:gcd`: NG — the card defines the gcd of integers via ideals in $\Z$, while the sentence concerns the gcd of polynomials, a different notion.

## 「線形写像」 in 01-foundations/02-model-theory/01-elementary-extensions
- Default: `mod:submodule-homomorphism` → **no candidate fits**
- Pages: 01-elementary-substructures.html
- Sentence: る区間 $(q_{k},q_{k+1})$（あるいは $(-\infty,q_{1})$, $(q_{n},\infty)$）に属する。同じ区間の有理数 $b$ をとり、$q_{1},\dots,q_{n}$ を固定して $a$ を $b$ に移す $\mathbb{R}$ の順序自己同型 $\pi$（その区間上の区分線形写像、他は恒等）を作る。\ref{logic:isomorphism-invariance} より $(\mathbb{R},<),\pi\circ v[x\mapsto a]\models\varphi$ で、$\pi\circ v[x\mapsto a]$ は $\mathrm{FV}(\varphi)$ 上で $v[
  - `mod:submodule-homomorphism`: NG — Here "線形写像" refers to a piecewise-linear map of an ordered interval, not an \(R\)-module homomorphism as defined in the card.

## 「要求」 in 01-foundations/02-model-theory/01-elementary-extensions
- Default: `logic:ctl-successor-def` → **no candidate fits**
- Pages: 01-elementary-substructures.html
- Sentence: $\mathcal{L}$ 構造 $\mathcal{N},\mathcal{M}$ の間の単射 $h\colon N\to M$ が**埋め込み**であるとは、\ref{logic:isomorphism-invariance} の同型写像の三つの条件（定数・関数・関係の保存）を満たすことをいう（全射は要求しない）。$h$ が**初等埋め込み**であるとは、任意の論理式 $\varphi$ と $\mathcal{N}$ の割り当て $v$ について $\mathcal{N},v\models\varphi\iff\mathcal{M},h\circ v\models\varphi$ となることをいう。
  - `logic:ctl-successor-def`: NG — Here「要求」means "require/demand" in ordinary mathematical prose, not the modal-logic technical term "request" defined in the card.

## 「近傍」 in 01-foundations/02-model-theory/01-elementary-extensions
- Default: `top:neighborhood` → **no candidate fits**
- Pages: 09-o-minimality.html
- Sentence: **Step 2（各区間で型は一つ）.** $(a_{i},a_{i+1})$ の点はすべて良い。「定数の近傍をもつ」「増加で連続の近傍をもつ」「減少で連続の近傍をもつ」点の集合 $U_{c},U_{+},U_{-}$ は定義可能な開集合で（近傍の点も同じ近傍をもつ）、互いに交わらない（無限集合の上で定数かつ単射にはなれず、増加かつ減少にもなれない）。\ref{model:o-minimal-basic.4} から、どれか一つ
  - `top:neighborhood`: NG — Here "近傍" means a small neighborhood interval around a point in the usual real-line sense, not the general topological notion of a neighborhood of a point defined via an open set $U$ with $x\in U\subseteq N$.

## 「選択」 in 01-foundations/02-model-theory/01-elementary-extensions
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 01-elementary-substructures.html, 02-elementary-chains.html, 03-quantifier-elimination.html, 09-o-minimality.html
- Sentence: 可算な言語と可算な $A$ の場合、上の証明は「可算個の選択」ではなく $M$ の部分集合全体の選択関数を使っている。この場合の主張（可算な初等部分構造の存在）は、選択公理の代わりに従属選択公理 $\mathrm{DC}$ で証明できるとされる（本サイトでは未確認）。一方、\ref{logic:ls-downward-weak} のように「どこかに可算なモデルがある」だけなら、
  - `logic:pdl-syntax`: NG — Here "選択" means the axiom of choice (set-theoretic selection), not the PDL program operator "choice" (α∪β).

## 「選言」 in 01-foundations/02-model-theory/01-elementary-extensions
- Default: `logic:abbreviations` → **no candidate fits**
- Pages: 03-quantifier-elimination.html, 04-acf.html
- Sentence: - 命題論理の選言標準形（\ref{logic:normal-forms}）を使う。
  - `logic:abbreviations`: NG — 「選言標準形」は複合語の一部であり、カードが定義する論理記号「∨」の略記としての選言を指しているわけではない。

## 「順序環」 in 01-foundations/02-model-theory/01-elementary-extensions
- Default: `model:ordered-field` → **no candidate fits**
- Pages: 06-ordered-fields.html, 08-rcf-qe.html
- Sentence: - **順序環の言語** $\mathcal{L}_{\mathrm{or}}\defeq\{0,1,+,-,\cdot,<\}$。環の言語 $\mathcal{L}_{\mathrm{ring}}$（\ref{model:page-acf}）に二項関係 $<$ を加えたもの。
  - `model:ordered-field`: NG — Here "順序環" refers to the language of ordered rings (a signature), not the algebraic structure of an ordered ring defined in the card.

## 「コンパクト」 in 01-foundations/02-model-theory/02-types-and-countable-models
- Default: `top:compact` → **no candidate fits**
- Pages: 01-types-omitting.html, 02-countable-models.html, 03-saturated-models.html, 04-indiscernibles.html, 05-random-graph.html, 08-rational-urysohn.html
- Sentence: up p(\vec{d})$（$\vec{d}$ は $\mathcal{L}_{M}$ にない新しい定数）が充足可能であることを示せば、\ref{model:elementary-diagram-lemma} と 1 の議論で、$\mathcal{M}$ の初等拡大（埋め込みの像を同一視する）が $p$ を実現する。コンパクト性より、有限個の $\varphi_{1},\dots,\varphi_{k}\in p$ と $\delta\in\mathrm{Eldiag}(\mathcal{M})$ について $\{\delta\}\cup\{\varphi_{i}(\vec{d})\}$ が充足可能であることを示せばよい（$\mathrm{
  - `top:compact`: NG — This use of コンパクト性 refers to compactness of first-order logic (finite satisfiability), not topological compactness of a space.

## 「共通部分」 in 01-foundations/02-model-theory/02-types-and-countable-models
- Default: `set:intersection-difference` → **no candidate fits**
- Pages: 06-fraisse-limits.html
- Sentence: 1. 有限線形順序のクラスは HP, JEP, AP をもち（二つの線形順序を共通部分に沿って合わせるには、点の大小を一つの線形順序にまとめればよい）、フライッセ極限は $(\mathbb{Q},<)$ である（\ref{model:cantor-dlo} から、端点のない稠密な可算線形順序は一意）。
  - `set:intersection-difference`: NG — Here "共通部分" refers to the intersection (overlap) of two linear orders along a common part, not the set-theoretic intersection of a family of sets as defined in the card.

## 「局所有限」 in 01-foundations/02-model-theory/02-types-and-countable-models
- Default: `top:locally-finite` → **no candidate fits**
- Pages: 06-fraisse-limits.html
- Sentence: **前提を変えると.** 関数記号のある言語では、有限生成構造のクラスについて同じ定理が成り立つことが知られている。たとえば有限群のクラスは HP, JEP, AP をもち、そのフライッセ極限はホールの普遍局所有限群であるとされる（ここでは確かめていない）。言語が無限でも、同型類が可算個なら存在と一意性は成り立つが、$\omega$ 範疇性は一般に失われる。
  - `top:locally-finite`: NG — Here "局所有限" is part of the proper name "ホールの普遍局所有限群" (Hall's universal locally finite group), a specific group-theoretic notion, not the topological definition of a locally finite family of sets.

## 「局所的な条件」 in 01-foundations/02-model-theory/02-types-and-countable-models
- Default: `logic:ltl-hintikka` → **no candidate fits**
- Pages: 06-fraisse-limits.html
- Sentence: **高い視点から：局所的な貼り合わせから大域的な対称性へ.** 融合性は「有限の断片どうしが、共通部分で矛盾なく貼り合わせられる」という局所的な条件であり、フライッセ極限はそれを無限回繰り返して作られる、あらゆる断片を「あらゆる位置に」含む構造である。比喩で言えば、ジグソーパズルのピースがどの二つも共通の縁で必ずつなげられるなら、すべてのピースを無限枚使って、どこから見ても同じ景色の一枚の絵が、ただ一通りに完成する。
  - `logic:ltl-hintikka`: NG — This use of "局所的な条件" refers to a local compatibility condition for gluing finite fragments in Fraïssé limits, not the H1–H3 local conditions on Hintikka sequences defined in the card.

## 「従う」 in 01-foundations/02-model-theory/02-types-and-countable-models
- Default: `logic:positional-strategy` → **no candidate fits**
- Pages: 02-countable-models.html, 03-saturated-models.html, 05-random-graph.html
- Sentence: i\in\mathrm{tp}^{\mathcal{M}}(\vec{a})\iff\varphi\in\mathrm{tp}^{\mathcal{N}}(h(\vec{a}))\iff\mathcal{N},h\circ v\models\varphi$。単射性は $\neg\,x_{1}=x_{2}$ に適用すれば従う。
  - `logic:positional-strategy`: NG — Here "従う" means "follows (logically) from applying the formula," not the game-theoretic notion of a play following a positional strategy.

## 「断片」 in 01-foundations/02-model-theory/02-types-and-countable-models
- Default: `logic:ctl-fragment` → **no candidate fits**
- Pages: 06-fraisse-limits.html
- Sentence: **高い視点から：局所的な貼り合わせから大域的な対称性へ.** 融合性は「有限の断片どうしが、共通部分で矛盾なく貼り合わせられる」という局所的な条件であり、フライッセ極限はそれを無限回繰り返して作られる、あらゆる断片を「あらゆる位置に」含む構造である。比喩で言えば、ジグソーパズルのピースがどの二つも共通の縁で必ずつなげられるなら、すべてのピースを無限枚使って、どこから見ても同じ景色の一枚の絵が、ただ一
  - `logic:ctl-fragment`: NG — Here "断片" means a finite piece of a structure in a Fraïssé-theoretic sense, not the labeled finite tree defined in the card.

## 「普遍性」 in 01-foundations/02-model-theory/02-types-and-countable-models
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 03-saturated-models.html, 05-random-graph.html, 06-fraisse-limits.html, 08-rational-urysohn.html
- Sentence: turated}）。本ページでは、パラメータつきの型を導入し、(1) どの構造も $\kappa^{+}$ 飽和な初等拡大をもつこと（\ref{model:saturated-extension}）、(2) $\kappa$ 飽和なモデルは濃度 $\le\kappa$ の初等的同値なモデルをすべて初等的に含むこと（**普遍性**、\ref{model:saturated-universal}）、(3) 同じ濃度の飽和モデルは同型であること（\ref{model:saturated-unique}）、(4) 可算飽和モデルが存在するための必要十分条件（\ref{model:countable-saturated}）を示す。
  - `cat:universal-arrow`: NG — Here "普遍性" refers to a property of saturated models (elementary embedding of all models of size ≤κ), not the category-theoretic universal morphism defined in the card.

## 「最小元」 in 01-foundations/02-model-theory/02-types-and-countable-models
- Default: `set:well-order` → **no candidate fits**
- Pages: 04-indiscernibles.html
- Sentence: $n=1$ の場合を $j\mapsto c_{j}$ に使い、無限集合 $J\subseteq\N$ と色 $c$ で $c_{j}=c$（$j\in J$）となるものをとる。$H\defeq\{x_{j}:j\in J\}$ とする。$H$ の $n+1$ 元部分集合の最小元を $x_{j}$ とすると、残りの元は $X_{j+1}$ に属し、$f$ の値は $f_{j}$ の値 $c_{j}=c$ である。
  - `set:well-order`: NG — It refers to the least element of a subset under the usual order on natural numbers, not specifically an $R$-minimal element of a well-order as defined in the card.

## 「有限生成」 in 01-foundations/02-model-theory/02-types-and-countable-models
- Default: `mod:generated-submodule` → **fits: `grp:generated-subgroup`**
- Pages: 06-fraisse-limits.html
- Sentence: **前提を変えると.** 関数記号のある言語では、有限生成構造のクラスについて同じ定理が成り立つことが知られている。たとえば有限群のクラスは HP, JEP, AP をもち、そのフライッセ極限はホールの普遍局所有限群であるとされる（ここでは確かめていない）。言語が無限でも、同型類が可算個なら存在と一意性は成り立つが、$\omega$ 範疇性は一般に失われる。
  - `mod:generated-submodule`: NG — This "有限生成" refers to finitely generated structures in model theory, not finitely generated modules over a ring as defined in the card.
  - `grp:generated-subgroup`: OK

## 「辞書式順序」 in 01-foundations/02-model-theory/02-types-and-countable-models
- Default: `set:well-order-sum-product-def` → **fits: `top:double-arrow`**
- Pages: 02-countable-models.html, 04-indiscernibles.html
- Sentence: $\mathrm{Th}(\Z,<)$ は $\omega$ 範疇的でないことを、$(\Z,<)$ と $(\Z\times\Z,<_{\mathrm{lex}})$（辞書式順序）を比べて示せ。（$(\Z\times\Z,<_{\mathrm{lex}})\equiv(\Z,<)$ は認めてよい。）
  - `set:well-order-sum-product-def`: NG — the card defines lexicographic product of well-orders, but here it is applied to $\Z$ which is not well-ordered.
  - `top:double-arrow`: OK

## 「選択」 in 01-foundations/02-model-theory/02-types-and-countable-models
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 02-countable-models.html, 03-saturated-models.html, 04-indiscernibles.html
- Sentence: - **2 の二分木**：各段の $\chi_{s}$ の選択は、可算個の論理式の列挙の中で最初のものをとれば選択公理なしで済む。
  - `logic:pdl-syntax`: NG — Here "選択" refers to choosing the first element in an enumeration (a selection/choice), not the PDL program operator "choice" (α∪β).

## 「選択公理」 in 01-foundations/02-model-theory/02-types-and-countable-models
- Default: `set:ax-choice` → **no candidate fits**
- Pages: 01-types-omitting.html, 02-countable-models.html, 03-saturated-models.html, 04-indiscernibles.html
- Sentence: - **選択公理**：言語が可算なので、列挙は具体的に与えられ、各段で最初の候補を選べばよい。コンパクト性定理も可算の場合で足りる。
  - `set:ax-choice`: NG — This use refers to a specific countable-instance choice principle, not the full axiom of choice for arbitrary sets.

## 「部分集合」 in 01-foundations/02-model-theory/02-types-and-countable-models
- Default: `set:subset` → **no candidate fits**
- Pages: 01-types-omitting.html, 03-saturated-models.html, 04-indiscernibles.html, 06-fraisse-limits.html, 08-rational-urysohn.html
- Sentence: 1. 型 $p(\vec{x})$ が $T$ と両立するための必要十分条件は、$T$ のあるモデルが $p$ を実現することである。また、$p$ の有限部分集合がすべて $T$ と両立すれば、$p$ は $T$ と両立する。
  - `set:subset`: NG — Here "部分集合" refers to a finite subset of the set of formulas $p$, not the set-theoretic subset relation $A\subseteq B$ defined in the card.

## 「順序数の和」 in 01-foundations/02-model-theory/02-types-and-countable-models
- Default: `set:ordinal-addition` → **no candidate fits**
- Pages: 03-saturated-models.html
- Sentence: - 基数 $\kappa$ について $\kappa^{+}$ は次の基数で、選択公理のもとで正則である（\ref{set:successor-regular}）：$\kappa^{+}$ 未満の長さの列の上界は $\kappa^{+}$ 未満で、濃度 $\le\kappa$ の集合の $\kappa^{+}$ 未満の順序数の和は $\kappa^{+}$ 未満。
  - `set:ordinal-addition`: NG — Here "順序数の和" refers to a sum of order types indexed by an ordinal (a supremum-type sum), not the binary ordinal addition $\alpha+\beta$ defined by concatenation in the card.
  - `cat:simplicial-category`: NG — This "順序数の和" refers to the sum of ordinals in set theory (bounded below $\kappa^{+}$), not the monoidal addition functor $+\colon\Delta\times\Delta\to\Delta$ on the simplex category defined in the card.

## 「コンパクト」 in 01-foundations/02-model-theory/03-ultraproducts
- Default: `top:compact` → **no candidate fits**
- Pages: 02-ultrapower-saturation.html, 03-ax-grothendieck.html
- Sentence: あることを意味し、この列を使うと、可算個の条件を「成分 $i$ ごとに、$i$ が多数派に残っている間だけ満たす」という形で一つずつ少しずつ満たす元が組める（Step 2）。各成分ではたかだか有限個の条件しか満たさないのに、多数決をとると可算個すべてを満たす――局所的な有限の努力が、大域的には無限の要求を満たすという、コンパクト性の具体的な実現である。代数的には、超積は圏論での**フィルター付き余極限**（直積の、補集合が小さい部分での同一視）として理解でき、ハルモスの多進代数の議論でも超積と同様の構成が現れると言われている（本サイトでは確かめていない）。
  - `top:compact`: NG — Here "コンパクト性" is used metaphorically for a finitary-local-to-global phenomenon, not the topological open-cover definition.

## 「下界」 in 01-foundations/02-model-theory/03-ultraproducts
- Default: `calc:supremum` → **no candidate fits**
- Pages: 02-ultrapower-saturation.html
- Sentence: 上界は $\lvert M^{\N}\rvert=\aleph_{0}^{\aleph_{0}}=2^{\aleph_{0}}$ から。下界：$N\defeq M^{\N}/U$ が可算とすると、$A\defeq N$ の上の型 $p(x)\defeq\{\neg\,x=c_{a}:a\in N\}$ は両立する（有限部分は $N$ が無限なので実現される）が、$N$ で実現されない。これは \ref{model:ultrapower-saturated-
  - `calc:supremum`: NG — Here "下界" refers to a lower bound in a partial order (the saturation argument), not the order-theoretic lower bound of a subset of a totally ordered field as defined in the card.

## 「余極限」 in 01-foundations/02-model-theory/03-ultraproducts
- Default: `cat:colimit` → **no candidate fits**
- Pages: 01-ultraproducts.html
- Sentence: **高い視点から：超積は「大きい集合への制限」の余極限である.** フィルター $\mathcal{F}$ の元 $X$ ごとに部分積 $\prod_{i\in X}\mathcal{M}_{i}$ を考え、$X\supset Y$ のとき制限写像 $\prod_{i\in X}\to\prod_{i\in Y}$ をとると、$\mathcal{F}$ は逆包含について有
  - `cat:colimit`: NG — the sentence describes a colimit of a diagram of restrictions, which matches the categorical definition of 余極限 as a universal cocone.

## 「同型写像」 in 01-foundations/02-model-theory/03-ultraproducts
- Default: `set:order-isomorphism` → **no candidate fits**
- Pages: 01-ultraproducts.html
- Sentence: ：$([g_{1}],\dots)\in P^{\mathcal{M}^{U}}\iff i_{0}\in\{i:(g_{1}(i),\dots)\in P^{\mathcal{M}_{i}}\}\iff(g_{1}(i_{0}),\dots)\in P^{\mathcal{M}_{i_{0}}}$。よって $h$ は同型写像である（\ref{logic:isomorphism-invariance} の意味）。単項超フィルターの超積は何も新しいものを作らない。
  - `set:order-isomorphism`: NG — Here "同型写像" refers to an isomorphism between first-order structures (model-theoretic isomorphism), not an order-isomorphism between relational structures as defined in the card.

## 「命題論理」 in 01-foundations/02-model-theory/03-ultraproducts
- Default: `logic:prop-formula` → **no candidate fits**
- Pages: 01-ultraproducts.html
- Sentence: 方法が**超積**である。「大多数」を測る道具が**超フィルター**で、**ウォシュの定理**は、論理式が超積で成り立つことと、成り立つ添字の集合が超フィルターに属することが同値であることを主張する。これを使うと、\ref{logic:compactness}を、証明体系も完全性定理も使わずに、意味論だけで証明できる。命題論理での同じ議論（\ref{logic:page-prop-compactness} の証明 3）の一階版である。
  - `logic:prop-formula`: NG — 命題論理 is a logic/system, not a propositional formula (論理式), which is what the card defines.

## 「従う」 in 01-foundations/02-model-theory/03-ultraproducts
- Default: `logic:positional-strategy` → **no candidate fits**
- Pages: 01-ultraproducts.html, 02-ultrapower-saturation.html
- Sentence: $、また $[w]=d\circ v$。よって $\lVert\varphi\rVert_{w}$ は、$\mathcal{M},v\models\varphi$ なら $I$、そうでなければ $\varnothing$ である。$I\in U$, $\varnothing\notin U$ とウォシュの定理から主張が従う。文については一致補題による。単射性：$a\neq b$ なら $\{i:a=b\}=\varnothing\notin U$ なので $d(a)\neq d(b)$。
  - `logic:positional-strategy`: NG — Here "従う" means "follows logically" (the claim follows from the theorem), not a play following a positional strategy.

## 「細かい」 in 01-foundations/02-model-theory/03-ultraproducts
- Default: `top:finer-coarser` → **no candidate fits**
- Pages: 01-ultraproducts.html
- Sentence: 系の余極限（有向和）と一致する：二つの列が同一視されるのは「ある大きい集合 $X$ 上で一致する」ときだからである。直観的には、超積は「無視できる添字の集合を捨てるたびに得られる積」の極限であり、$\mathcal{F}$ が超フィルターのとき、この極限はあらゆる性質について「成り立つ」か「成り立たない」かを決めるほど細かい。
  - `top:finer-coarser`: NG — Here "細かい" describes a filter being fine enough to decide every property, not the comparative strength of two topologies on the same set.

## 「行列式」 in 01-foundations/02-model-theory/03-ultraproducts
- Default: `lin:leibniz-formula` → **no candidate fits**
- Pages: 03-ax-grothendieck.html
- Sentence: 像は全射である、という形に一般化されることが知られている（アックス、グロタンディーク）。逆写像については、標数 $0$ の代数的閉体では全単射な多項式写像の逆写像も多項式写像であることが知られているが、正標数ではフロベニウス写像（\ref{model:prob-ag-frobenius}）のように成り立たない。「ヤコビ行列式が $0$ でない定数である多項式写像 $\mathbb{C}^{n}\to\mathbb{C}^{n}$ は単射か」という**ヤコビアン予想**は、$n\ge2$ で未解決の問題として知られている（学習データの時点での知識による）。
  - `lin:leibniz-formula`: NG — Here 行列式 refers to the Jacobian determinant of a polynomial map, not the determinant of a matrix as defined in the card.

## 「要求」 in 01-foundations/02-model-theory/03-ultraproducts
- Default: `logic:ctl-successor-def` → **no candidate fits**
- Pages: 02-ultrapower-saturation.html
- Sentence: も残らないような列があることを意味し、この列を使うと、可算個の条件を「成分 $i$ ごとに、$i$ が多数派に残っている間だけ満たす」という形で一つずつ少しずつ満たす元が組める（Step 2）。各成分ではたかだか有限個の条件しか満たさないのに、多数決をとると可算個すべてを満たす――局所的な有限の努力が、大域的には無限の要求を満たすという、コンパクト性の具体的な実現である。代数的には、超積は圏論での**フィルター付き余極限**（直積の、補集合が小さい部分での同一視）として理解でき、ハルモスの多進代数の議論でも超積と同様の構成が現れると言われている（本サイトでは確かめていない）。
  - `logic:ctl-successor-def`: NG — Here "要求" means a general demand/requirement (infinite demands being satisfied), not the modal-logic technical term defined in the card.

## 「選択」 in 01-foundations/02-model-theory/03-ultraproducts
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 01-ultraproducts.html, 02-ultrapower-saturation.html
- Sentence: - **選択公理**：Step 7 の $g$ の選択と、直積が空でないこと（\ref{model:ultraproduct-equivalence}）。
  - `logic:pdl-syntax`: NG — Here "選択" refers to choosing an element (the axiom of choice), not the PDL program operator "choice" (union of programs).

## 「1 の分割」 in 01-foundations/02-model-theory/04-uncountable-categoricity
- Default: `top:partition-of-unity` → **no candidate fits**
- Pages: 08-morley-rank.html
- Sentence: - **言語と $A$ の可算性**：2 ⇒ 1 の分割で、$\mathcal{L}_{A}$ 論理式が可算個であることに使った。
  - `top:partition-of-unity`: NG — Here "1 の分割" refers to splitting into cases 1 and 2 in a proof, not a partition of unity in topology.

## 「ランク」 in 01-foundations/02-model-theory/04-uncountable-categoricity
- Default: `logic:attractor` → **no candidate fits**
- Pages: 07-morley.html
- Sentence: 0}$ 範疇性を型空間の有限性で特徴づける。モーリーの定理は非可算範疇性を「$\omega$ 安定性 ＋ ヴォート対の非存在」で特徴づける。両方を満たす理論（完全に範疇的な理論）には、無限集合、標数 $p$ の無限体上のベクトル空間などがあり、代数的閉体は非可算でのみ範疇的である。モーリーの定理の証明で導入された概念（ランク、強極小集合、素モデル）は、シェラハの分類理論や、ザイルバー・フルショフスキーの幾何的モデル理論の出発点になったとされる。
  - `logic:attractor`: NG — This "ランク" refers to Morley rank in model theory, not the parity-game rank defined in the card.
  - `comp:tree-rank`: NG — This "ランク" refers to Morley rank in model theory, not the rank of a well-founded tree defined in the card.
  - `set:rank`: NG — Here "ランク" refers to Morley rank in model theory, not the set-theoretic rank of a well-founded set defined in the card.
  - `set:relation-rank`: NG — This "ランク" refers to Morley rank in model theory, not the rank of a well-founded relation defined in the card.
  - `pt:world-rank`: NG — This "ランク" refers to Morley rank in model theory, not the rank of a world in a finite transitive irreflexive frame.

## 「上界」 in 01-foundations/02-model-theory/04-uncountable-categoricity
- Default: `set:chain-maximal` → **no candidate fits**
- Pages: 05-strongly-minimal.html, 06-dimension.html, 07-morley.html
- Sentence: model:minimal-formula}）：定義可能な部分集合がすべて有限か補有限であり、その性質がどの初等拡大でも保たれる無限集合である。代数的閉体全体はその典型である。本ページでは、**代数的閉包**（\ref{model:algebraic-closure}）を定義し、強極小性が「有限か補有限かの判定に一様な上界があること」と同値であること（\ref{model:strongly-minimal-uniform}）、$\omega$ 安定な理論のモデルには極小な論理式があること（\ref{model:minimal-exists}）、ヴォート対がなければ極小な論理式は強極小であること（\ref{model:minimal-st
  - `set:chain-maximal`: NG — In the sentence, "上界" is used in the sense of a uniform bound on the size of finite-or-cofinite sets, not the order-theoretic upper bound of a subset defined in the card.

## 「二基数モデル」 in 01-foundations/02-model-theory/04-uncountable-categoricity
- Default: `model:two-cardinal-model` → **no candidate fits**
- Pages: 03-vaught-pairs.html
- Sentence: める）から $\mathcal{M}\prec\mathcal{N}$ で、$M\neq N$、$E(x,a)$ の定義する集合は $\mathcal{M}$ と $\mathcal{N}$ で同じ無限集合。よってヴォート対。（実際、\ref{model:prob-st-equivalence} の (ii) のような二基数モデルの源になる。）
  - `model:two-cardinal-model`: NG — 「二基数モデル」 refers to a two-cardinal model, which is a special case of the (κ,λ)-model notion (a model with a definable subset of a different cardinality), so it matches the card's definition.

## 「代入」 in 01-foundations/02-model-theory/04-uncountable-categoricity
- Default: `logic:substitution` → **no candidate fits**
- Pages: 01-stability.html
- Sentence: \vec{s}(a_{\vec{y}})/A)=\mathrm{tp}(\vec{s}(a_{\vec{z}})/A)$ である。実際、$A$ 上の論理式 $\varphi(\vec{v},a_{1},\dots,a_{l})$ について、$a_{j}=t_{a_{j}}(a_{\vec{i}_{a_{j}}})$ を代入すると、$\varphi(\vec{s}(a_{\vec{y}}),\vec{a})$ は、$\vec{y}$ と $\vec{x}\defeq\vec{i}_{a_{1}}\cdots\vec{i}_{a_{l}}$（$X$ の元）の成分を並べた組についての $\mathcal{L}^{\mathrm{Sk}}$ 論
  - `logic:substitution`: NG — This is a model-theoretic use of "代入" (substituting elements/terms into a formula), which is the same general notion as the card's syntactic substitution, but the sentence is a fragment and the term refers to substituting elements $a_j$ rather than a term $s$ for a variable $x$ as defined.
  - `logic:modal-substitution`: NG — This use of 代入 refers to substituting terms into a first-order formula in a model-theoretic context, not the modal-logic substitution map σ: PV → MForm defined in the card.
  - `logic:mu-substitution`: NG — This "代入" is substitution of elements/terms into a formula in a model-theoretic (Skolem) context, not the capture-avoiding syntactic substitution $A[B/X]$ defined by the card.
  - `logic:lambda-substitution`: NG — This "代入" is substitution of terms into a first-order formula, not the lambda-calculus substitution M[N/x] defined on the card.

## 「代数的閉包」 in 01-foundations/02-model-theory/04-uncountable-categoricity
- Default: `model:algebraic-closure` → **no candidate fits**
- Pages: 05-strongly-minimal.html, 06-dimension.html, 07-morley.html
- Sentence: クランの定理）では、モデルを「一つの定義可能集合の大きさ」で測る。その定義可能集合として使うのが**強極小集合**（\ref{model:minimal-formula}）：定義可能な部分集合がすべて有限か補有限であり、その性質がどの初等拡大でも保たれる無限集合である。代数的閉体全体はその典型である。本ページでは、**代数的閉包**（\ref{model:algebraic-closure}）を定義し、強極小性が「有限か補有限かの判定に一様な上界があること」と同値であること（\ref{model:strongly-minimal-uniform}）、$\omega$ 安定な理論のモデルには極小な論理式があること（\ref{model:mini
  - `model:algebraic-closure`: NG — Here "代数的閉包" refers to the algebraic closure of a field (代数的閉体), not the model-theoretic acl(A) defined in the card.

## 「可算」 in 01-foundations/02-model-theory/04-uncountable-categoricity
- Default: `set:finite-set` → **no candidate fits**
- Pages: 01-stability.html, 02-omega-stable.html, 03-vaught-pairs.html, 04-no-vaught-pairs.html, 05-strongly-minimal.html, 06-dimension.html, 07-morley.html, 08-morley-rank.html
- Sentence: **モーリーの範疇性定理**は、「可算言語の完全な理論が、ある非可算濃度で範疇的（その濃度のモデルが同型を除いて一つ）なら、すべての非可算濃度で範疇的である」と主張する。本ページから始まる系列でこの定理を証明する。証明の鍵は、モデルが実現する**型の個数**である。理論 $T$ が **$\omega$ 安定**（\ref{model:stable}）とは
  - `set:finite-set`: NG — Here "可算言語" means a language with countably many symbols, which is the same notion of countability as in the card (a set in bijection with a subset of ω), so it matches.

## 「合成」 in 01-foundations/02-model-theory/04-uncountable-categoricity
- Default: `logic:while-program` → **no candidate fits**
- Pages: 02-omega-stable.html, 07-morley.html
- Sentence: **Step 1（孤立の合成）.** $\mathrm{tp}(\vec{e}/A)$ が $\chi(\vec{y})$ で孤立し、$\mathrm{tp}(b/A\vec{e})$ が $\theta(x,\vec{e})$（$A$ のパラメータを含んでよい）で孤立するなら、$\mathrm{tp}(b\vec{e}/A)$ は $\chi(
  - `logic:while-program`: NG — Here "合成" refers to composing types/tuples in model theory, not the sequential composition of while-programs defined in the card.
  - `set:relation-composition`: NG — Here "合成" refers to composing types (complete types) in model theory, not the composition of binary relations as defined in the card.
  - `cat:category`: NG — Here 合成 refers to composing types (isolated types) in model theory, not composition of morphisms in a category.
  - `cat:non-symmetric-operad`: NG — This "合成" refers to composing types (isolated types) in model theory, not the operad composition operation γ defined in the card.

## 「基底」 in 01-foundations/02-model-theory/04-uncountable-categoricity
- Default: `mod:free-module` → **no candidate fits**
- Pages: 06-dimension.html, 07-morley.html
- Sentence: 強極小集合 $D=\varphi(\mathcal{M})$（\ref{model:minimal-formula}）の中では、代数的閉包が**交換法則**（\ref{model:exchange}）を満たす。これはベクトル空間の一次従属や体の代数的従属と同じ性質で、そこから**独立性**・**基底**・**次元**の理論が線形代数と同じように展開できる（\ref{model:dimension-well-defined}）。さらに、独立な組の型は一つに決まり（\ref{model:independent-same-type}）、基底の間の任意の全単射が初等的な写像になる。これが次ページのボールドウィン–ラクラン
  - `mod:free-module`: NG — This "基底" refers to a basis in the model-theoretic sense (a minimal/independent generating set for a strongly minimal set), not a basis of a free module over a ring as defined in the card.
  - `grp:free-abelian`: NG — This "基底" refers to a basis of a matroid-like independence structure (model-theoretic algebraic closure), not a basis of a free abelian group.

## 「始切片」 in 01-foundations/02-model-theory/04-uncountable-categoricity
- Default: `set:initial-segment` → **no candidate fits**
- Pages: 08-morley-rank.html
- Sentence: le\alpha$ については、各 $\psi_{i}$ に帰納法の仮定を使って $\beta=\gamma+1$ なら $\ge\gamma$、極限なら定義から。極限 $\lambda$ は定義から。well-defined 性：$\{\alpha:\mathrm{RM}(\varphi)\ge\alpha\}$ は始切片で、極限の段では定義 3 により閉じているので、空・ある $\alpha+1$ 未満のすべて・すべての順序数のいずれかである。
  - `set:initial-segment`: NG — Here "始切片" refers to an initial segment of the ordinals (a set closed downward under the ordering), which is the same notion as the card's definition applied to a well-order, so it matches.

## 「孤立型の稠密性」 in 01-foundations/02-model-theory/04-uncountable-categoricity
- Default: `model:isolated-dense` → **no candidate fits**
- Pages: 02-omega-stable.html, 04-no-vaught-pairs.html
- Sentence: - **孤立型の稠密性（$\omega$ 安定性）**：存在の証明で、タルスキ–ヴォートの条件を満たすための証拠を、孤立型を実現する元として選ぶのに使った。
  - `model:isolated-dense`: NG — the sentence uses the term as a proof technique in a specific existence argument, not as the definition that every consistent formula is contained in an isolated type.

## 「推移的」 in 01-foundations/02-model-theory/04-uncountable-categoricity
- Default: `logic:relation-properties` → **no candidate fits**
- Pages: 08-morley-rank.html
- Sentence: }$ 論理式 $\psi(x)$ のパラメータの有限集合を $F$ とすると、$F$ を固定する $G$ の元は $\psi(\mathcal{M})$ を保つ（同型は論理式の真偽を保つ）。$G$ のうち $F$ を固定する元は、$P\setminus F$ と $\neg P\setminus F$ のそれぞれの上で推移的に働くので、$\psi(\mathcal{M})\setminus F$ は、$P\setminus F$, $\neg P\setminus F$ のそれぞれを丸ごと含むか、交わらない。よって $\psi(\mathcal{M})$ は、$P$ の有限・補有限部分集合と、$\neg P$ の有限・補有限部分集合の和で
  - `logic:relation-properties`: NG — Here "推移的" describes a group action being transitive on a set, not a binary relation being transitive as defined in the card.
  - `grp:faithful-transitive`: NG — Here "推移的に働く" refers to a group acting transitively on each of two sets, which is the same notion as the card's definition of a transitive action (applied to each set separately), so it matches.

## 「要求」 in 01-foundations/02-model-theory/04-uncountable-categoricity
- Default: `logic:ctl-successor-def` → **no candidate fits**
- Pages: 03-vaught-pairs.html
- Sentence: 可算なモデルの有限組は可算個、型は可算個の条件で決まるので、要求は可算個である。
  - `logic:ctl-successor-def`: NG — Here「要求」refers to countable requirements in a model-theoretic/type context, not the modal-logic notion of a "request" ¬F at a world defined in the card.

## 「連言」 in 01-foundations/02-model-theory/04-uncountable-categoricity
- Default: `logic:abbreviations` → **no candidate fits**
- Pages: 01-stability.html, 03-vaught-pairs.html
- Sentence: は $B\defeq A\cup\{\vec{a}_{q}\text{ の成分}\}$ 上の $1$ 変数の完全型である。実際、有限個の $\varphi_{1},\dots,\varphi_{k}\in p$ の連言 $\psi$ について $\exists y\,\psi(\vec{x},y)\in p\restr{\vec{x}}=q$ なので $\mathcal{N}\models\exists y\,\psi(\vec{a}_{q},y)$（両立性）、完全性は $p$ の完全性から。$p\mapsto p(\vec{a}_
  - `logic:abbreviations`: NG — “連言” here means a conjunction of finitely many formulas, not the abbreviation of logical connectives defined in the card.

## 「選択」 in 01-foundations/02-model-theory/04-uncountable-categoricity
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 01-stability.html, 02-omega-stable.html
- Sentence: - **選択公理**：スコーレム化と、Step 2 の $t_{a}$, $\vec{i}_{a}$ の選択に使った。
  - `logic:pdl-syntax`: NG — Here "選択" refers to the axiom of choice / choosing witnesses, not the PDL program choice operator α∪β.

## 「非有界」 in 01-foundations/02-model-theory/04-uncountable-categoricity
- Default: `set:cofinal-map` → **no candidate fits**
- Pages: 08-morley-rank.html
- Sentence: ta_{i}\wedge\varphi$ は互いに交わらず $\vdash\varphi$ なので $\mathrm{RM}(\varphi)\ge\alpha+1$。極限 $\lambda$：各 $\alpha<\lambda$ で $\varphi$ か $\psi$ が $\ge\alpha$ なので、どちらかは非有界に多くの $\alpha<\lambda$ で $\ge\alpha$ となり、1 から $\ge\lambda$。
  - `set:cofinal-map`: NG — Here "非有界に多くの α<λ" means "unboundedly many α<λ" (cofinally many indices), not the card's notion of a subset of an ordinal being unbounded in that ordinal.

## 「アルファベット」 in 01-foundations/03-computation/01-automata
- Default: `logic:language` → **no candidate fits**
- Pages: 01-finite-automata.html, 02-regular-expressions.html, 05-cfl-pumping.html
- Sentence: - **アルファベット** $\Sigma$ は空でない有限集合で、その元を**文字**という。$\Sigma$ の文字の有限列を $\Sigma$ 上の**文字列**（語）といい、長さ $0$ の文字列を $\varepsilon$、文字列 $w$ の長さを $\lvert w\rvert$ と書く。文字列全体を $\Sigma^{\as
  - `logic:language`: NG — This "アルファベット" is an arbitrary nonempty finite set of symbols for string theory, not the specific union of logical and non-logical symbols defined in the card.

## 「クラス」 in 01-foundations/03-computation/01-automata
- Default: `set:class` → **no candidate fits**
- Pages: 01-finite-automata.html, 04-context-free.html, 07-deterministic-cfl.html
- Sentence: ン**は、有限個の状態だけを記憶しながら入力の文字列を一文字ずつ読み、最後に受理するかどうかを答える機械である。本ページでは、決定性有限オートマトン（DFA、\ref{comp:dfa}）と、各時点で複数の可能性を同時にたどる非決定性有限オートマトン（NFA、\ref{comp:nfa}）を定義し、両者が認識する言語のクラスが等しいこと（部分集合構成、\ref{comp:nfa-dfa-equivalence}）を示す。帰結として、DFA で認識できる言語（**正規言語**）は和・連接・スター（正規演算）と補集合・共通部分で閉じている（\ref{comp:regular-closure}）。
  - `set:class`: NG — Here "クラス" means a class of languages (a set-theoretic collection in automata theory), not the set-theoretic class defined by a logical formula in the card.

## 「反復」 in 01-foundations/03-computation/01-automata
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 03-nonregular.html, 04-context-free.html, 05-cfl-pumping.html, 06-fixed-points.html
- Sentence: 有限オートマトンの記憶は有限なので、十分長い文字列を読むと同じ状態を二度通る。その間の部分は何度繰り返しても（あるいは除いても）受理は変わらない。これが正規言語の**反復補題**（\tref{comp:pumping-regular}）で、言語が正規で**ない**ことを示す標準的な道具である。さらに、正規性を完全に特徴づける**マイヒル–ネローデの定理**（\tref{comp:myhill-nerode}）を示し、最小の DFA が一意であることを導く。
  - `logic:pdl-syntax`: NG — Here "反復" is part of "反復補題" (pumping lemma), not the PDL program iteration operator defined in the card.

## 「合成」 in 01-foundations/03-computation/01-automata
- Default: `logic:while-program` → **fits: `cat:category`**
- Pages: 01-finite-automata.html
- Sentence: で記述できる言語のことであり、代数的には「$\Sigma^{\ast}$ から有限モノイドへの準同型の、ある部分集合の逆像」として特徴づけられる（統語モノイド）。NFA は、写像の代わりに $Q\to\mathcal{P}(Q)$ という「多価な写像」（関係）を使う機械で、部分集合構成は、関係の合成を冪集合の上の写像の合成に直す操作――圏論で言えば冪集合モナドのクライスリ圏から集合の圏への移行――に当たる。たとえれば、NFA は分身の術を使える旅人で、部分集合構成は「すべての分身の居場所を一枚の地図に書き込みながら一人で旅をする」ことである。
  - `logic:while-program`: NG — Here "合成" refers to composition of relations/maps in automata theory, not the sequential composition P;Q of while programs defined in the card.
  - `set:relation-composition`: NG — Here 合成 refers to composition of relations (and of functions/maps), which matches the card's definition of relation composition; the sentence uses it in that same sense.
  - `cat:category`: OK

## 「従う」 in 01-foundations/03-computation/01-automata
- Default: `logic:positional-strategy` → **no candidate fits**
- Pages: 02-regular-expressions.html, 07-deterministic-cfl.html
- Sentence: othing$ から正規演算（和・連接・スター）だけで言語を組み立てる記法である（\ref{comp:regular-expression}）。本ページでは、正規表現で記述できる言語がちょうど正規言語であるという**クリーネの定理**（\tref{comp:kleene}）を示す。一方向は前のページの閉包性からただちに従う。他方向では、DFA の各状態 $i$ に「$i$ から受理されるまでに読む文字列の集合」$X_{i}$ を対応させると、$X_{i}$ たちが**言語の連立一次方程式**を満たすことに注目する。一つの方程式 $X=AX\cup B$ は**アーデンの補題**（\tref{comp:arden}）で $X=A^{\as
  - `logic:positional-strategy`: NG — Here "従う" means "follows logically/immediately from," not a play following a positional strategy.

## 「推論規則」 in 01-foundations/03-computation/01-automata
- Default: `logic:deduction-system` → **no candidate fits**
- Pages: 02-regular-expressions.html
- Sentence: - *クリーネ代数.* 正規表現の間の等式は、$\cup,\circ,{}^{\ast},\varnothing,\varepsilon$ についての有限個の公理と、アーデンの補題に当たる推論規則（$ax+b\le x\Rightarrow a^{\ast}b\le x$）から導けることが知られている（コーゼンによるクリーネ代数の完全性）。問題 \ref{comp:prob-arden-ends-01} の二つの式が等しいことも、この体系で導ける。
  - `logic:deduction-system`: NG — This "推論規則" refers to an inference rule in Kleene algebra (Arden's lemma), not the natural deduction derivation rules defined in the card.
  - `pt:pa-x`: NG — Here "推論規則" refers to an inference rule of Kleene algebra (Arden's lemma), not the inference rules of the sequent calculus PA(X) defined in the card.

## 「最小元」 in 01-foundations/03-computation/01-automata
- Default: `set:well-order` → **no candidate fits**
- Pages: 06-fixed-points.html
- Sentence: - 本ページでは $\mathcal{P}(\Sigma^{\ast})^{n}$ だけを扱ったが、クナスター–タルスキの定理は任意の完備束で、クリーネの不動点定理は最小元をもち上向きの鎖の上限をもつ半順序（$\omega$ 完備半順序）で、縮小写像の定理は完備距離空間（バナッハの不動点定理）で、同じ証明で成り立つ。
  - `set:well-order`: NG — It refers to a least element of a general poset, not specifically the R-minimal element of a subset in a well-order.

## 「準同型」 in 01-foundations/03-computation/01-automata
- Default: `ring:homomorphism` → **no candidate fits**
- Pages: 01-finite-automata.html
- Sentence:  を対応させ、\ref{comp:delta-hat} により自由モノイド $\Sigma^{\ast}$ の $Q$ への（右）作用を与える。正規言語とは、有限集合への作用と、その部分集合 $F$ と、一点 $q_{0}$ で記述できる言語のことであり、代数的には「$\Sigma^{\ast}$ から有限モノイドへの準同型の、ある部分集合の逆像」として特徴づけられる（統語モノイド）。NFA は、写像の代わりに $Q\to\mathcal{P}(Q)$ という「多価な写像」（関係）を使う機械で、部分集合構成は、関係の合成を冪集合の上の写像の合成に直す操作――圏論で言えば冪集合モナドのクライスリ圏から集合の圏への移行――に当たる。たとえれば
  - `ring:homomorphism`: NG — It refers to a monoid homomorphism, not a ring homomorphism as defined in the card.
  - `cat:t-algebra`: NG — Here "準同型" means a monoid homomorphism between monoids, not a homomorphism of T-algebras as defined in the card.
  - `grp:homomorphism`: NG — Here "準同型" refers to a monoid homomorphism between free monoids, whereas the card defines group homomorphisms; a monoid homomorphism is not a special case of a group homomorphism.
  - `mod:submodule-homomorphism`: NG — Here "準同型" means a monoid homomorphism between free monoids/finite monoids, not an R-module homomorphism as defined in the card.

## 「部分集合」 in 01-foundations/03-computation/01-automata
- Default: `set:subset` → **no candidate fits**
- Pages: 01-finite-automata.html, 02-regular-expressions.html, 04-context-free.html
- Sentence: 態だけを記憶しながら入力の文字列を一文字ずつ読み、最後に受理するかどうかを答える機械である。本ページでは、決定性有限オートマトン（DFA、\ref{comp:dfa}）と、各時点で複数の可能性を同時にたどる非決定性有限オートマトン（NFA、\ref{comp:nfa}）を定義し、両者が認識する言語のクラスが等しいこと（部分集合構成、\ref{comp:nfa-dfa-equivalence}）を示す。帰結として、DFA で認識できる言語（**正規言語**）は和・連接・スター（正規演算）と補集合・共通部分で閉じている（\ref{comp:regular-closure}）。
  - `set:subset`: NG — Here "部分集合" is part of "部分集合構成" (subset construction), a technical term for an algorithm, not the set-theoretic subset relation defined in the card.

## 「アルファベット」 in 01-foundations/03-computation/02-computability
- Default: `logic:language` → **no candidate fits**
- Pages: 06-turing-machines.html, 07-turing-completeness.html, 10-mapping-reducibility.html
- Sentence: - アルファベット、文字列、言語は \ref{comp:page-finite-automata} のとおり。
  - `logic:language`: NG — Here "アルファベット" refers to the alphabet of finite automata (a finite set of symbols), not the alphabet $A_{\mathcal{L}}$ of a first-order language defined in the card.

## 「クラス」 in 01-foundations/03-computation/02-computability
- Default: `set:class` → **no candidate fits**
- Pages: 02-primitive-recursive.html, 04-recursive-functions.html, 06-turing-machines.html, 08-decidability.html, 13-models-summary.html
- Sentence: **原始再帰関数**の全体 $\mathrm{PR}$ を、次の 5 条件を満たす最小の関数のクラスとする（関数は $\N^{k}\to\N$ の形で、$k\ge0$）。
  - `set:class`: NG — Here "クラス" means an arbitrary collection of functions in the informal sense, not a class as a definable collection $\{x\mid\varphi(x,\vec{p})\}$ of the set-theoretic definition.

## 「コード」 in 01-foundations/03-computation/02-computability
- Default: `comp:prime-sequence-code` → **no candidate fits**
- Pages: 01-language-L.html, 04-recursive-functions.html, 07-turing-completeness.html, 11-universal-smn.html
- Sentence: - 変数の個数を固定すると範囲が狭くなるかは自明でない。レジスタ機械では、レジスタ $2$ 個でも（入力と出力をうまくコード化すれば）すべての計算可能関数を計算できることが知られている（ミンスキー。\tref{comp:page-register-machines} で触れる）。
  - `comp:prime-sequence-code`: NG — Here "コード化" means encoding inputs/outputs, not the finite-support state code defined by the card.

## 「係数」 in 01-foundations/03-computation/02-computability
- Default: `comp:linear-system` → **no candidate fits**
- Pages: 09-reducibility.html
- Sentence: - *ヒルベルトの第 10 問題*：整数係数の多項式が整数解をもつかどうかは決定可能でない（マチャセビッチ、1970）。これも計算の過程を算術で表すという計算履歴の考え方の延長にある。
  - `comp:linear-system`: NG — Here "係数" means coefficients of a polynomial over the integers, not the language coefficients $A_{ij}, B_{i}$ in the system of language equations.

## 「停止している」 in 01-foundations/03-computation/02-computability
- Default: `comp:register-machine` → **no candidate fits**
- Pages: 04-recursive-functions.html, 11-universal-smn.html
- Sentence: とする（表示は \ref{comp:L-python-display} の約束による）。$j$ 周目の終わり（$j=0$ は 2 行目の後）で $y=j$, $w=g(\vec{x},j)$ であり、そこまで停止していることは「$z\le j$ のすべてで $g(\vec{x},z)\downarrow$」と同値である（$j$ に関する帰納法）。ループは $w=0$ となった最初の周回の後で止まる。したがって、プログラムが停止して $x_{0}=y$ となるのは、$g(\vec{x},y)=0$ かつ $z<y$ で $g(\vec{
  - `comp:register-machine`: NG — Here "停止している" describes a computation having already halted up to a stage, not the register-machine notion of a mode with program counter \(p\ge N\).

## 「全域的」 in 01-foundations/03-computation/02-computability
- Default: `logic:ctl-semantics` → **no candidate fits**
- Pages: 01-language-L.html, 02-primitive-recursive.html, 03-ackermann.html, 04-recursive-functions.html, 11-universal-smn.html
- Sentence: )\subseteq\N^{k}$ 上の写像のこと。$\vec{m}\in\mathrm{dom}(f)$ を $f(\vec{m})\downarrow$（**定義される**）、そうでないことを $f(\vec{m})\uparrow$ と書く。$\mathrm{dom}(f)=\N^{k}$ のとき $f$ は**全域的**である。
  - `logic:ctl-semantics`: NG — Here "全域的" means a partial function is total (defined on all of $\mathbb{N}^{k}$), not the totality condition on the accessibility relation $R$ in a CTL model.

## 「割り当て」 in 01-foundations/03-computation/02-computability
- Default: `logic:assignment` → **no candidate fits**
- Pages: 07-turing-completeness.html
- Sentence: 関数が、ちょうど L で計算できる部分関数であること（\ref{comp:L-equals-tm}）を示す。チューリング機械の様相を数で表すと一歩の動きが原始再帰的になるので、L で while ループ一つで模倣できる（\ref{comp:tm-to-L}）。逆に、レジスタ機械のレジスタを多テープ機械のテープに一つずつ割り当てれば、チューリング機械で模倣できる（\ref{comp:L-to-tm}）。これで、L・部分再帰関数・レジスタ機械・チューリング機械の四つが同じ部分関数を計算することが示されたことになる。この共通の能力をもつことを**チューリング完全**という（\ref{comp:turing-complete}）。チューリング完全な
  - `logic:assignment`: NG — Here "割り当て" means assigning registers to tapes (a mapping/allocation in computation), not a variable assignment map $v\colon\mathrm{Var}\to M$ in a structure.

## 「単調」 in 01-foundations/03-computation/02-computability
- Default: `comp:monotone-continuous` → **no candidate fits**
- Pages: 04-recursive-functions.html, 11-universal-smn.html
- Sentence: 2. （単調性）$E^{P}_{t}(\vec{v})=\vec{u}\neq\bot$ かつ $t\le t'$ なら $E^{P}_{t'}(\vec{v})=\vec{u}$。
  - `comp:monotone-continuous`: NG — Here "単調性" refers to a monotonicity property of an evaluation function over time, not the monotonicity of a function on sets of strings as defined in the card.

## 「反復」 in 01-foundations/03-computation/02-computability
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 03-ackermann.html, 08-decidability.html, 11-universal-smn.html
- Sentence: **高い視点から：二重の帰納法と演算の塔.** $A(1,\cdot)$, $A(2,\cdot)$, $A(3,\cdot)$, $A(4,\cdot)$ は、ほぼ「足し算、掛け算、累乗、累乗の塔」に当たり、$A(x+1,\cdot)$ は $A(x,\cdot)$ の反復である。for ループ一つは「既にある関数を、入力で決まる回数だけ反復する」ことしかできないので、入れ子の深さ $k$ のプログラムはこの塔の $k$ 段目程度までしか登れない。アッカーマン関数は塔の段数そのものを入力にとるので、どの有限の段にも収まらない。順序数で言えば、原始再帰は「$\omega$ 未満の各段階での
  - `logic:pdl-syntax`: NG — Here "反復" means iterating a function, not the PDL program operation α* defined in the card.

## 「強制」 in 01-foundations/03-computation/02-computability
- Default: `logic:ikripke-model` → **no candidate fits**
- Pages: 10-mapping-reducibility.html
- Sentence: - **修正版を経由すること**：最初のドミノを強制しないと、たとえば $[a/a]$ だけで一致ができてしまう。\ref{comp:mpcp-to-pcp} の $\star$ の工夫が最初のドミノを強制する。
  - `logic:ikripke-model`: NG — Here "強制する" means "force (the first domino to be used)", not the Kripke-model forcing relation \(w\Vdash\varphi\).

## 「従う」 in 01-foundations/03-computation/02-computability
- Default: `logic:positional-strategy` → **no candidate fits**
- Pages: 01-language-L.html, 02-primitive-recursive.html, 03-ackermann.html, 06-turing-machines.html, 09-reducibility.html, 12-recursion-theorem.html
- Sentence: e\Downarrow\sigma_{2}$。規則 4 を二度使って $\langle Q;R,\sigma_{1}\rangle\Downarrow\tau$、$\langle P;(Q;R),\sigma\rangle\Downarrow\tau$。逆も同様。停止しない場合は、片方が停止すれば他方も停止することから従う。
  - `logic:positional-strategy`: NG — Here「従う」means "follows from (the previous argument)", not a play following a positional strategy.

## 「普遍性」 in 01-foundations/03-computation/02-computability
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 02-primitive-recursive.html
- Sentence: **高い視点から：自然数の普遍性.** 原始再帰は「$0$ での値と、一歩進める規則を与えると関数がただ一つ決まる」という自然数の性質そのものである。圏論では、終対象 $1$ をもつ圏の**自然数対象** $(\N,0\colon1\to\N,S\colon\N\to\N)$ を「任意の $(A,a\colon1\to A,h\colon A\to 
  - `cat:universal-arrow`: NG — 普遍性 is the general property of being a universal morphism, while the card defines the specific notion 普遍射 (universal arrow); the term names the property, not the arrow itself.

## 「最小の機械」 in 01-foundations/03-computation/02-computability
- Default: `comp:min-tm-definition` → **no candidate fits**
- Pages: 12-recursion-theorem.html
- Sentence: 理**（\tref{comp:recursion-theorem}）で、「自分の記述を知っている機械」を作る一般的な方法を与える。本ページでは、まず自分自身を出力する機械（\ref{comp:self}）を作り、それを一般化して再帰定理を示す。応用として、$A_{\mathsf{TM}}$ の決定不能性の別証明、状態数最小の機械の集合が認識可能でないこと（\ref{comp:min-tm}）、計算可能な変換の不動点定理（\ref{comp:fixed-point}）を示す。
  - `comp:min-tm-definition`: NG — It refers to a machine with the minimum number of states, not a minimal TM in the sense of shortest encoding among equivalent TMs.

## 「構文木」 in 01-foundations/03-computation/02-computability
- Default: `comp:parse-tree` → **no candidate fits**
- Pages: 05-register-machines.html, 11-universal-smn.html
- Sentence: **高い視点から：構造化と平坦化.** L からレジスタ機械への翻訳は、入れ子の構文木を「番号の付いた一列の命令」に**平坦化**する操作で、コンパイラが行っていることの原型である。逆向きの \ref{comp:rm-to-L} は、どんなに絡まった goto の流れも「プログラムカウンタという変数を一つ持ち、`while (まだ動いている)` の中で場合分けする」ことで構造化できることを示している。後
  - `comp:parse-tree`: NG — 構文木 is a general syntax tree, not specifically a Chomsky-normal-form derivation tree with harvest and height as defined.

## 「無限集合」 in 01-foundations/03-computation/02-computability
- Default: `set:finite-set` → **no candidate fits**
- Pages: 11-universal-smn.html, 12-recursion-theorem.html
- Sentence: \sum_{w<x}\chi_{\N\setminus\mathrm{ran}H}(w)$ も原始再帰的。よって $f$ は原始再帰的（場合分け）。全単射：$\mathrm{ran}\,H$ は狭義増加列 $H(0)<H(1)<\cdots$ で、$H(n)\mapsto2n$ は偶数全体への全単射。補集合は 2 から無限集合で、小さい順に $w_{0}<w_{1}<\cdots$ と並べると $f(w_{k})=2k+1$ は奇数全体への全単射。$f^{-1}(2n)=H(n)$ なので、$f^{-1}$ が原始再帰的なら $H$ も原始再帰的になり矛盾。（なお $f^{-1}(y)=\mu x\,[f(x)=y]$ は計算可能である。計
  - `set:finite-set`: NG — Here "無限集合" refers to an infinite set of natural numbers in a concrete enumeration argument, not the general cardinal notion defined in the card (though it is consistent with it, the term is used informally for a specific infinite subset).

## 「現れる変数」 in 01-foundations/03-computation/02-computability
- Default: `logic:derivation-symbols` → **no candidate fits**
- Pages: 01-language-L.html
- Sentence: 規則 4 を使わずに作られるプログラムを **for プログラム**と呼び、その全体を $\mathrm{L}_{\mathrm{for}}$ と書く。プログラム $P$ に現れる変数の（有限）集合を $\mathrm{var}(P)$ と書く。$;$ の括弧は、意味が変わらない（問題 \ref{comp:prob-L-assoc}）ので省く。
  - `logic:derivation-symbols`: NG — This is about variables occurring in a program (a programming-language notion), not variables occurring in a derivation as defined in the card.

## 「直積」 in 01-foundations/03-computation/02-computability
- Default: `set:cartesian-product` → **no candidate fits**
- Pages: 08-decidability.html
- Sentence: 3. 対称差 $(L(B)\cap\overline{L(C)})\cup(\overline{L(B)}\cap L(C))$ を認識する DFA $D$ を直積構成（\ref{comp:dfa-boolean}）で作り、2 の判定機で $L(D)=\varnothing$ かどうかを判定する。
  - `set:cartesian-product`: NG — Here "直積" refers to the product construction of automata (DFA product), not the Cartesian product of two sets as defined in the card.
  - `mod:direct-sum`: NG — Here "直積" refers to the product construction of DFAs, not the direct product of modules defined in the card.

## 「要求」 in 01-foundations/03-computation/02-computability
- Default: `logic:ctl-successor-def` → **no candidate fits**
- Pages: 04-recursive-functions.html, 07-turing-completeness.html, 10-mapping-reducibility.html
- Sentence: 最小化の定義で「$z<y$ のすべてで $g(\vec{x},z)$ が定義される」ことを要求するのは、$y=0,1,2,\dots$ の順に $g$ を計算していく探索を表すためである。$g(\vec{x},0)$ の計算が止まらなければ、探索はそこで止まってしまい、$g(\vec{x},1)=0$ であっても先に進めない。この条件を外すと計算可能でない関数が生じる（問題 \ref{comp:prob-mu-
  - `logic:ctl-successor-def`: NG — Here「要求する」is the ordinary verb "to require," not the modal-logic technical term「要求」(a formula demanded at a world).

## 「語彙」 in 01-foundations/03-computation/02-computability
- Default: `logic:language` → **no candidate fits**
- Pages: 07-turing-completeness.html
- Sentence:  L $\to$ レジスタ機械 $\to$ TM $\to$ L（一歩の関数を経て）で輪になっている。チューリング完全性は、この輪の中に入れるかどうかを問う性質で、「自分の中で万能プログラムを書けるかどうか」と言い換えられる。比喩で言えば、チューリング完全な体系は「どんな言語の本でも、辞書を引きながら訳せる翻訳者」で、語彙（命令の種類）が貧しくても、時間さえかければ同じ内容を表せる。逆に、for プログラムのように「必ず終わる」ことが保証された体系は、その保証と引き換えに万能性を失う（\ref{comp:prob-no-total-enumeration} の対角線論法が、その理由である）。
  - `logic:language`: NG — Here "語彙" means the set of instructions/commands available in a computational system, not the three-set vocabulary of a first-order language.

## 「遷移関数」 in 01-foundations/03-computation/02-computability
- Default: `comp:dfa` → **no candidate fits**
- Pages: 06-turing-machines.html, 07-turing-completeness.html
- Sentence: - $\delta\colon(Q\setminus\{q_{\mathrm{acc}},q_{\mathrm{rej}}\})\times\Gamma\to Q\times\Gamma\times\{\mathrm{L},\mathrm{R}\}$ は遷移関数
  - `comp:dfa`: NG — This is the transition function of a Turing machine, not the DFA transition function δ: Q×Σ→Q defined in the card.

## 「選択」 in 01-foundations/03-computation/02-computability
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 06-turing-machines.html
- Sentence: elta\colon(Q\setminus\{q_{\mathrm{acc}},q_{\mathrm{rej}}\})\times\Gamma\to\mathcal{P}(Q\times\Gamma\times\{\mathrm{L},\mathrm{R}\})$ とした機械で、一段の動き $C\vdash C'$ は選択肢のどれか一つに従う。$w$ を**受理する**とは、$q_{0}w$ から受理時点表示に至る列が**一つでも**存在することをいう。すべての枝が停止するとき判定機という。
  - `logic:pdl-syntax`: NG — Here "選択" refers to choosing one of the possible moves of a nondeterministic Turing machine, not the PDL program operator α∪β.

## 「部分集合」 in 01-foundations/03-computation/02-computability
- Default: `set:subset` → **no candidate fits**
- Pages: 03-ackermann.html, 08-decidability.html
- Sentence: 原始再帰関数（＝for 計算可能関数）全体は、全域的な計算可能関数全体の真部分集合である。
  - `set:subset`: NG — It says "真部分集合" (proper subset), which is the strict case $A\subsetneq B$, not the card's general $\subseteq$ notion.

## 「コンパクト」 in 01-foundations/03-computation/03-advanced-computability
- Default: `top:compact` → **no candidate fits**
- Pages: 04-boundedness.html, 11-rice-shapiro.html, 13-low-basis.html
- Sentence: **高い視点から：Π¹₁ 集合の層と「コンパクトさ」.** \ref{comp:delta11-criterion} は、$\Pi^{1}_{1}$ 集合が $\Delta^{1}_{1}$ の層 $A_{\alpha}$ の、長さ $\omega_{1}^{\mathrm{CK}}$ の増大和であることを述べている。各点 $x\in A$ は「整礎性の証拠の高さ」
  - `top:compact`: NG — This use of「コンパクトさ」refers to a descriptive-analytic-set notion (a Π¹₁ set being a union of layers), not the topological compactness defined by open covers.

## 「テープ」 in 01-foundations/03-computation/03-advanced-computability
- Default: `comp:multitape-tm` → **no candidate fits**
- Pages: 02-turing-reducibility.html
- Sentence: 集合 $B$ についての**神託機械** $M^{B}$ は、通常のテープに加えて**問い合わせテープ**と、特別な状態 $q_{?}$, $q_{\mathrm{yes}}$, $q_{\mathrm{no}}$ をもつ TM である。$q_{?}$ に入ると、一段で、問い合わせテープの文字列 $y$ が $B$ に属すれば $q_{\mathrm{yes}}$ に、属さなければ $q_{
  - `comp:multitape-tm`: NG — The card defines a multi-tape Turing machine, whereas the sentence uses "テープ" as a component (a single tape) of an oracle machine, not the multi-tape machine notion itself.

## 「一階述語論理」 in 01-foundations/03-computation/03-advanced-computability
- Default: `set:first-order-language` → **no candidate fits**
- Pages: 01-logical-theories.html
- Sentence: - *チャーチの定理.* 一階述語論理の妥当な文の全体（関係記号を十分含む言語で）は決定可能でない。これは \ref{comp:arithmetic-undecidable} と同様の考え方と、有限公理化された算術の部分体系を使って示される。
  - `set:first-order-language`: NG — 一階述語論理 is first-order predicate logic, a broader logical framework, not the specific formal language of set theory defined in the card.

## 「位相空間」 in 01-foundations/03-computation/03-advanced-computability
- Default: `top:topological-space` → **no candidate fits**
- Pages: 04-boundedness.html
- Sentence: }^{\mathrm{CK}}$ の増大和であることを述べている。各点 $x\in A$ は「整礎性の証拠の高さ」によってどこかの層に入る。有界性定理は、$\Sigma^{1}_{1}$ の集合はこの層をすべて登りきることができず、どこかの層に収まると言っている。比喩で言えば、$\Sigma^{1}_{1}$ の集合は位相空間の**コンパクト集合**に似ている。開集合の増大列で覆われたコンパクト集合は、そのうちの一つに収まる。ここでは「増大する開集合の列」が「$\Delta^{1}_{1}$ の層」、「列の長さ $\omega$」が「$\omega_{1}^{\mathrm{CK}}$」に当たる。これは比喩であって、$\Sigma^{1}_
  - `top:topological-space`: NG — Here "位相空間" is used only as the ambient setting for compact sets in an analogy, not as the defined notion of a topological space (a pair $(X,\mathcal{O})$ satisfying the three topology axioms).

## 「優先度」 in 01-foundations/03-computation/03-advanced-computability
- Default: `logic:parity-game` → **no candidate fits**
- Pages: 08-friedberg-muchnik.html, 09-low-simple.html
- Sentence: > 資料：新井『数学基礎論』§6.4（定理 6.4.1, 6.4.3）を参考にした（本文は写していない）。優先論法の証明では、要求が「注意を要する」条件、証人の選び方、制限を明示的に定め、各要求が有限回しか作用しないことを優先度に関する帰納法で示した。
  - `logic:parity-game`: NG — Here "優先度" refers to a priority ordering used in a priority argument (priority method), not the parity-game priority function Ω: V → ℕ defined on the card.

## 「全域的」 in 01-foundations/03-computation/03-advanced-computability
- Default: `logic:ctl-semantics` → **no candidate fits**
- Pages: 03-analytical-hierarchy.html, 04-boundedness.html, 05-pi11-prewellordering.html, 06-hyperarithmetic.html, 10-creative-sets.html
- Sentence: 2. $e\in\N$ について、$\varphi_{e}$ が全域的で値が $\{0,1\}$ のとき $T(e)\defeq\{s:\varphi_{e}(s)=1\}$ とおく。$\mathrm{WT}\defeq\{e:\varphi_{e}\text{ は全域的で }\{0,1\}\text{ 値、}T(e)\text{ は整礎な木}\}$。
  - `logic:ctl-semantics`: NG — Here "全域的" means a total (everywhere-defined) computable function, not the totality of the accessibility relation in a CTL model.

## 「再帰的」 in 01-foundations/03-computation/03-advanced-computability
- Default: `comp:partial-recursive` → **no candidate fits**
- Pages: 05-pi11-prewellordering.html
- Sentence: **1, Step 2（最左の枝）.** $g(n)\defeq\min\{m:\bar{g}(n)^{\frown}\langle m\rangle\in\mathrm{IF}_{T}\}$ と再帰的に定める。$n$ についての帰納法で、$\bar{g}(n)\in\mathrm{IF}_{T}$ であり、したがって $g(n)$ が定義されることを示す。$n=0$：$T$ は枝をもつので $\langle\rangle\in\mathrm{IF}_{T}$。$\bar{g}(n)\in\mathrm{IF}_{T
  - `comp:partial-recursive`: NG — Here "再帰的に定める" means "define recursively/by recursion," not the card's notion of a relation being recursive (having a general recursive characteristic function).

## 「割り当て」 in 01-foundations/03-computation/03-advanced-computability
- Default: `logic:assignment` → **no candidate fits**
- Pages: 13-low-basis.html
- Sentence: $\PA$ の完全な無矛盾拡大全体は、ある計算可能な二分木の道全体と対応することが知られている（文を並べ、長さ $n$ 以下の証明で矛盾が出ない真理値の割り当てを木の元とする）。これを認めて、$\PA$ の低い完全な無矛盾拡大があることを示せ。
  - `logic:assignment`: NG — Here "割り当て" means an assignment of truth values to sentences (a valuation), not a map from variables to elements of a structure as in the card's first-order semantics definition.

## 「単射」 in 01-foundations/03-computation/03-advanced-computability
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 03-analytical-hierarchy.html, 04-boundedness.html, 09-low-simple.html, 10-creative-sets.html, 12-index-set-completeness.html
- Sentence: - 自然数の有限列は単射的に数で符号化され、列と符号を同一視する。$\N^{<\N}$ は有限列全体、$\lvert s\rvert$ は長さ、$s\subseteq t$ は $s$ が $t$ の始切片であること、$s^{\frown}t$ は連結、$\langle\rangle$ は空列。符号は $s\subsetneq t\Right
  - `set:injection-surjection`: NG — Here "単射的に" describes an injective encoding (a one-to-one map), which is the same notion as the card's definition of 単射 for a function.

## 「合成」 in 01-foundations/03-computation/03-advanced-computability
- Default: `logic:while-program` → **no candidate fits**
- Pages: 05-pi11-prewellordering.html, 10-creative-sets.html
- Sentence: **正規化が必要な理由.** 関係 $\le^{*}_{\varphi},<^{*}_{\varphi}$ は $\varphi$ の値の大小だけで決まるので、$\varphi$ に任意の狭義増加な順序数値関数を合成しても変わらない。たとえば $\varphi'(x)\defeq\omega_{1}+\varphi(x)$ も $\Pi^{1}_{1}$ ノルムだが、値はすべて $\omega_{1}^{\mathrm{CK}}$ を超える。正規化はこの任意性を取り除き、Step 3 で隙間のない値域を使えるようにする。
  - `logic:while-program`: NG — Here "合成" means composing functions (function composition), not the sequential composition of programs defined in the card.
  - `set:relation-composition`: NG — Here 合成 refers to composing functions (order-preserving ordinal-valued functions), not the composition of relations defined in the card.
  - `cat:category`: NG — Here "合成" means composing functions (applying one function after another), not the composition of morphisms in a category as defined in the card.
  - `cat:non-symmetric-operad`: NG — Here "合成" means composing functions (applying one function to the output of another), not the operad composition operation γ on P(k).

## 「基底」 in 01-foundations/03-computation/03-advanced-computability
- Default: `mod:free-module` → **no candidate fits**
- Pages: 05-pi11-prewellordering.html, 09-low-simple.html, 13-low-basis.html
- Sentence: \tref{comp:sigma11-separation}）、数についての**一様化**（\ref{comp:pi11-number-uniformization}）が順に導かれる。最後に、空でない $\Sigma^{1}_{1}$ の関数の集合が $\mathrm{WT}$ で計算可能な元をもつこと（**クリーネの基底定理**、\tref{comp:kleene-basis}）を示す。
  - `mod:free-module`: NG — Here "基底" refers to a basis theorem in computability theory (Kleene's basis theorem), not a basis of a module.
  - `grp:free-abelian`: NG — Here "基底" refers to a basis theorem for \(\Sigma^{1}_{1}\) sets (Kleene's basis theorem), not a basis of a free abelian group.

## 「始切片」 in 01-foundations/03-computation/03-advanced-computability
- Default: `set:initial-segment` → **no candidate fits**
- Pages: 03-analytical-hierarchy.html, 04-boundedness.html, 05-pi11-prewellordering.html, 06-hyperarithmetic.html, 08-friedberg-muchnik.html
- Sentence: - 自然数の有限列は単射的に数で符号化され、列と符号を同一視する。$\N^{<\N}$ は有限列全体、$\lvert s\rvert$ は長さ、$s\subseteq t$ は $s$ が $t$ の始切片であること、$s^{\frown}t$ は連結、$\langle\rangle$ は空列。符号は $s\subsetneq t\Rightarrow s<t$ を満たすとする。
  - `set:initial-segment`: NG — Here "始切片" means an initial segment of a finite sequence (a prefix), not the set-theoretic predecessor set pred(A,x,R) defined in the card.

## 「定義域」 in 01-foundations/03-computation/03-advanced-computability
- Default: `set:relation` → **no candidate fits**
- Pages: 07-post-theorem.html, 10-creative-sets.html, 11-rice-shapiro.html
- Sentence: $T_{M}(x,t,D)$ を「$D$ は有限な部分関数の符号で、$M$ を入力 $x$ の上で、問い合わせ $y$ には $D(y)$ で答えながら $t$ 段だけ模倣すると、すべての問い合わせが $D$ の定義域に属し、その間に受理する」とする。模倣は有限段なので $T_{M}$ は決定可能。
  - `set:relation`: NG — Here 定義域 refers to the domain of a partial function (a set of inputs where D is defined), not the domain of a relation as a set of ordered pairs.
  - `logic:rm-continuous-code`: NG — Here "定義域" refers to the domain of a finite partial function (a finite set of input-output pairs), not the domain of a continuous real function as defined in the card.

## 「強制」 in 01-foundations/03-computation/03-advanced-computability
- Default: `logic:ikripke-model` → **no candidate fits**
- Pages: 13-low-basis.html
- Sentence: いか。**低基底定理**（ヨックシュ–ソーア、\tref{comp:low-basis}）は、道として**低い**もの（ジャンプが $\varnothing'$ で計算できるもの、\ref{comp:low-set}）がとれることを示す。証明は、神託機械の停止・非停止を一つずつ $\varnothing'$ の助けで「強制」しながら部分木を絞っていく方法である。
  - `logic:ikripke-model`: NG — Here "強制" means forcing a Turing machine to halt or not halt by oracle computation, not the Kripke-model forcing relation defined in the card.

## 「従う」 in 01-foundations/03-computation/03-advanced-computability
- Default: `logic:positional-strategy` → **no candidate fits**
- Pages: 01-logical-theories.html, 08-friedberg-muchnik.html, 10-creative-sets.html, 12-index-set-completeness.html
- Sentence: い（\ref{comp:arithmetic-undecidable}）。こちらは、チューリング機械の計算が算術の $\Sigma$ 論理式で表せること（\ref{comp:tm-sigma-definable}）と、不完全性定理の系列のタルスキの定理（\ref{pt:tarski-undefinability}）から従う。
  - `logic:positional-strategy`: NG — Here "従う" means "follows from (is a consequence of)" a theorem, not a play following a positional strategy.

## 「直積」 in 01-foundations/03-computation/03-advanced-computability
- Default: `set:cartesian-product` → **no candidate fits**
- Pages: 01-logical-theories.html
- Sentence: - DFA・NFA、部分集合構成、直積構成は \ref{comp:page-finite-automata} のとおり。TM、決定可能・認識可能、符号化は \ref{comp:page-turing-machines} のとおり。
  - `set:cartesian-product`: NG — Here "直積構成" refers to the product construction on automata (a construction combining two automata), not the set-theoretic Cartesian product of two sets as defined in the card.
  - `mod:direct-sum`: NG — Here "直積" refers to the product construction of automata, not the direct product of modules defined in the card.

## 「真理値」 in 01-foundations/03-computation/03-advanced-computability
- Default: `logic:truth-assignment` → **no candidate fits**
- Pages: 13-low-basis.html
- Sentence: $\PA$ の完全な無矛盾拡大全体は、ある計算可能な二分木の道全体と対応することが知られている（文を並べ、長さ $n$ 以下の証明で矛盾が出ない真理値の割り当てを木の元とする）。これを認めて、$\PA$ の低い完全な無矛盾拡大があることを示せ。
  - `logic:truth-assignment`: NG — Here "真理値の割り当て" refers to a truth assignment (a valuation), not the truth value of a formula as defined in the card.
  - `set:truth-value`: NG — Here "真理値の割り当て" refers to an assignment of truth values (true/false) to sentences in a binary tree, not the Boolean-valued-model truth value $\lVert\varphi\rVert$ defined in the card.

## 「要求」 in 01-foundations/03-computation/03-advanced-computability
- Default: `logic:ctl-successor-def` → **no candidate fits**
- Pages: 04-boundedness.html, 05-pi11-prewellordering.html, 08-friedberg-muchnik.html, 09-low-simple.html, 10-creative-sets.html
- Sentence: - **$w(x)\in\mathrm{TR}$**：$\mathrm{WT}_{<\alpha}$ の $\Sigma^{1}_{1}$ 側の表示（\ref{comp:wt-below-delta11} の Step 1）で $e\in\mathrm{TR}$ を要求しているが、それは $w(x)$ について自動的に満たされる。
  - `logic:ctl-successor-def`: NG — Here "要求" means "requires/demands" in the sense of a condition requiring something, not the modal-logic technical term "要求" (a formula ¬F associated with a world).

## 「選択」 in 01-foundations/03-computation/03-advanced-computability
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 13-low-basis.html
- Sentence: **Step 3（$\varnothing'$ による計算）.** 各段の選択は「$U_{e}$ は無限か」という $\Pi_{1}$ の問いの答えで決まり、$\varnothing'$ で決定できる（\ref{comp:tree-infinite-pi1}）。$T_{e}$ を計算する機械の符号は、それまでの答えの列から計算可能に得られるので、$\varnothing'$ は $e$ について
  - `logic:pdl-syntax`: NG — Here "選択" means the choice made at each stage of a computation, not the PDL program operator α∪β (nondeterministic choice).

## 「部分体」 in 01-foundations/03-computation/03-advanced-computability
- Default: `fld:extension` → **no candidate fits**
- Pages: 01-logical-theories.html
- Sentence: - *チャーチの定理.* 一階述語論理の妥当な文の全体（関係記号を十分含む言語で）は決定可能でない。これは \ref{comp:arithmetic-undecidable} と同様の考え方と、有限公理化された算術の部分体系を使って示される。
  - `fld:extension`: NG — This use of 部分体 refers to a subsystem of arithmetic, not a subfield of a field as defined in the card.

## 「部分集合」 in 01-foundations/03-computation/03-advanced-computability
- Default: `set:subset` → **no candidate fits**
- Pages: 01-logical-theories.html, 02-turing-reducibility.html, 03-analytical-hierarchy.html, 04-boundedness.html, 05-pi11-prewellordering.html, 06-hyperarithmetic.html, 09-low-simple.html, 10-creative-sets.html, 11-rice-shapiro.html
- Sentence: - DFA・NFA、部分集合構成、直積構成は \ref{comp:page-finite-automata} のとおり。TM、決定可能・認識可能、符号化は \ref{comp:page-turing-machines} のとおり。
  - `set:subset`: NG — Here "部分集合構成" (subset construction) is a proper name for the powerset construction on automata, not the set-theoretic subset relation defined in the card.

## 「関数の極限」 in 01-foundations/03-computation/03-advanced-computability
- Default: `calc:function-limit` → **no candidate fits**
- Pages: 09-low-simple.html
- Sentence: ポストの問題（\tref{comp:page-friedberg-muchnik}）には、フリードバーグ–ムチニクの定理とは別の解き方がある。本ページでは、まずポストの**単純集合**（\ref{comp:simple-set}）を作る。次に、$\varnothing'$ で計算できる関数が計算可能な関数の極限としてちょうど表せること（**極限補題**、\tref{comp:limit-lemma}）を示し、ジャンプが $\varnothing'$ を超えない**低集合**（\ref{comp:low-set}）を導入する。最後に、優先論法で**単純な低集合**を作る（\ref{comp:low-simple-set}）。決
  - `calc:function-limit`: NG — This "極限" refers to a limit of computable functions in computability theory, not the ε-δ limit of a real function at a point.

## 「関数の集合」 in 01-foundations/03-computation/03-advanced-computability
- Default: `set:function-set` → **no candidate fits**
- Pages: 05-pi11-prewellordering.html
- Sentence: 1-reduction}）、$\Sigma^{1}_{1}$ の**分離定理**（\tref{comp:sigma11-separation}）、数についての**一様化**（\ref{comp:pi11-number-uniformization}）が順に導かれる。最後に、空でない $\Sigma^{1}_{1}$ の関数の集合が $\mathrm{WT}$ で計算可能な元をもつこと（**クリーネの基底定理**、\tref{comp:kleene-basis}）を示す。
  - `set:function-set`: NG — Here "関数の集合" is just the ordinary phrase "a set of functions" (a collection of $\Sigma^{1}_{1}$ functions), not the specific notation ${}^{B}A$ for the set of all functions from $B$ to $A$ defined in the card.

## 「集合の存在」 in 01-foundations/03-computation/03-advanced-computability
- Default: `set:ax-set-existence` → **no candidate fits**
- Pages: 03-analytical-hierarchy.html
- Sentence: - **解析的階層定理**：\ref{comp:wt-complete.3} で、$\Sigma^{1}_{1}$ でない $\Pi^{1}_{1}$ 集合の存在に使った。
  - `set:ax-set-existence`: NG — It refers to the existence of a specific $\Pi^{1}_{1}$ set, not the general axiom asserting that some set exists.

## 「RP」 in 01-foundations/03-computation/04-complexity
- Default: `comp:class-bpp` → **no candidate fits**
- Pages: 07-probabilistic-quantum.html, 13-primality-branching.html, 16-bpp-ph.html
- Sentence: き $F(\vec{r})=0$ となる確率は $1/3$ 以下（\ref{comp:schwartz-zippel}、$K=\mathbb{Q}$）。値 $F(\vec{r})$ の桁数は $n$ の多項式で抑えられる（各演算で桁数が高々足し算的に増える）ので、計算は多項式時間でできる。よって「$F\neq0$」は RP に属する。この問題が P に属するかどうかは知られていない。
  - `comp:class-bpp`: NG — RP is used here as a complexity class of a decision problem, but the card defines RP as a class of languages decided by probabilistic TMs with one-sided error, which is the same notion, so this should be ok—wait, the sentence says "F≠0 belongs to RP," which matches the class definition.

## 「クラス」 in 01-foundations/03-computation/04-complexity
- Default: `set:class` → **no candidate fits**
- Pages: 01-time-complexity.html, 02-np.html, 04-space-complexity.html, 05-logspace.html, 07-probabilistic-quantum.html, 08-circuits.html, 10-interactive-proofs.html, 11-parallel.html, 12-approximation-cryptography.html, 14-ph-karp-lipton.html, 15-ladner.html, 16-bpp-ph.html
- Sentence: 間**（\ref{comp:running-time}）を定め、多テープ機械を単一テープ機械で模倣すると時間が高々 2 乗になること（\ref{comp:multitape-time}）、非決定性機械を決定性機械で模倣すると指数時間かかること（\ref{comp:ntm-time}）を示す。多項式時間で決定できる言語のクラス **P**（\ref{comp:class-p}）は、合理的な決定性の計算模型の選び方によらない。P に属する問題の例として、グラフの到達可能性（\ref{comp:path-in-p}）、互いに素の判定（\ref{comp:relprime-in-p}）、文脈自由言語（\ref{comp:cfl-in-p}）を扱う
  - `set:class`: NG — Here "クラス" means a complexity class (a set of languages), not the set-theoretic class defined by a formula.

## 「スタック」 in 01-foundations/03-computation/04-complexity
- Default: `comp:pda` → **no candidate fits**
- Pages: 04-space-complexity.html, 09-alternation.html
- Sentence: **領域.** 再帰はスタックで実装する。一段の呼び出しで記録するのは $c_{1},c_{2},c_{m}$ と $\log_{2}t$（$O(f(n))$ ビット）で $O(f(n))$ 升。再帰の深さは $\log_{2}2^{df(n)}=df(n)$。よって全体で $O(f(n)\cdot f(n))=O(f(n)^{2})$。$M$ は
  - `comp:pda`: NG — Here "スタック" refers to a call stack used to implement recursion, not the stack of a pushdown automaton as defined in the card.

## 「テープ」 in 01-foundations/03-computation/04-complexity
- Default: `comp:multitape-tm` → **no candidate fits**
- Pages: 01-time-complexity.html, 02-np.html, 04-space-complexity.html, 05-logspace.html, 06-hierarchy.html, 09-alternation.html, 11-parallel.html
- Sentence: 1. 判定機 $M$（決定性、単一テープまたは多テープ）の**実行時間**とは、関数 $t_{M}\colon\N\to\N$、$t_{M}(n)\defeq$「長さ $n$ の入力の上で $M$ が停止するまでの段数の最大値」のこと。$t_{M}(n)\le t(n)$ がすべての $n$ で成り立つとき、$M$ は**時間 $t(n)$ の機械**という。
  - `comp:multitape-tm`: NG — The term "テープ" in the sentence refers to the tape of a Turing machine as a component, but the card defines the compound notion "多テープ機械" (multi-tape machine), not the single term "テープ" itself.

## 「ネット」 in 01-foundations/03-computation/04-complexity
- Default: `top:net` → **no candidate fits**
- Pages: 07-probabilistic-quantum.html
- Sentence: - *グローヴァーのアルゴリズム*（1996）：$N$ 個の候補から条件を満たすものを、神託への問い合わせ $O(\sqrt{N})$ 回で見つけられる。古典的な確率的計算では $\Omega(N)$ 回が必要であり、問い合わせの回数については $\Theta(\sqrt{N})$ が最適であることも知られている（ベネット–バーンスタイン–ブラサール–ヴァジラニ）。
  - `top:net`: NG — Here "ネット" is part of the proper name "Grover's algorithm" context (likely a mistranslation/rendering of "net" as in network or a name), not a net in the topological sense of a map from a directed set to a topological space.

## 「ノルム」 in 01-foundations/03-computation/04-complexity
- Default: `comp:pi11-norm` → **fits: `calc:norm`**
- Pages: 07-probabilistic-quantum.html
- Sentence: - 複素ベクトル空間 $\C^{N}$ の標準内積 $\langle u,v\rangle=\sum_{i}\overline{u_{i}}v_{i}$、ノルム $\lVert v\rVert$、ユニタリ行列（$U^{\ast}U=I$）、テンソル積 $\otimes$ を使う。
  - `comp:pi11-norm`: NG — This "ノルム" is the norm of a complex vector space (a distance-like function), not a function from a set of naturals to ordinals as in the definition card.
  - `lin:inner-product`: NG — ノルム is defined as the derived norm \(\|v\|=\sqrt{\langle v,v\rangle}\), not as the inner product itself, so the term refers to a notion only introduced within the card rather than the card's defined notion.
  - `calc:norm`: OK

## 「下界」 in 01-foundations/03-computation/04-complexity
- Default: `calc:supremum` → **no candidate fits**
- Pages: 06-hierarchy.html, 07-probabilistic-quantum.html, 08-circuits.html, 12-approximation-cryptography.html, 16-bpp-ph.html
- Sentence: - *自然な証明の壁*（ラズボロフ–ルーディック）と*代数化の壁*（アーロンソン–ウィグダーソン）：回路の下界や相対化しない議論についても、P 対 NP を解くのに使えない手法の種類が知られている。
  - `calc:supremum`: NG — Here "下界" means a lower bound on circuit size/complexity, not the order-theoretic lower bound of a subset as defined in the card.

## 「係数」 in 01-foundations/03-computation/04-complexity
- Default: `comp:linear-system` → **no candidate fits**
- Pages: 07-probabilistic-quantum.html, 10-interactive-proofs.html, 13-primality-branching.html
- Sentence: - 二項係数 $\binom{k}{j}$ と $\sum_{j}\binom{k}{j}=2^{k}$ を使う。有限集合 $S$ からの一様な選択の確率 $\Pr$ は、場合の数の比として扱う（有限の確率空間だけを使う）。
  - `comp:linear-system`: NG — Here "係数" means binomial coefficients, not the language coefficients in the system of language equations.

## 「充足可能」 in 01-foundations/03-computation/04-complexity
- Default: `logic:tautology` → **no candidate fits**
- Pages: 02-np.html, 08-circuits.html, 14-ph-karp-lipton.html, 15-ladner.html
- Sentence:  が多項式時間で決定できる言語のクラスと一致する（\ref{comp:np-ntm}）。本ページでは、多項式時間の写像還元（\ref{comp:poly-reduction}）を定め、NP の中で最も難しい問題である **NP 完全**問題（\ref{comp:np-complete}）を導入する。主定理は、命題論理の充足可能性問題 SAT が NP 完全であるという**クック–レヴィンの定理**（\tref{comp:cook-levin}）である。さらに、論理式を節の長さ 3 以下の連言標準形に直す変換（\ref{comp:tseitin}）で、3SAT も NP 完全であることを示す（\ref{comp:3sat-complete}）
  - `logic:tautology`: NG — The sentence uses "充足可能性" (satisfiability) as the name of the SAT problem, not the property of a formula set being satisfiable as defined in the card.
  - `logic:model`: NG — Here "充足可能" (satisfiable) refers to the satisfiability of propositional formulas (SAT), not the model-theoretic satisfiability of a set of first-order formulas defined in the card.
  - `logic:modal-satisfiable`: NG — This "充足可能" refers to propositional satisfiability (SAT), not satisfiability of modal formulas over a frame as defined in the card.
  - `logic:pdl-semantics`: NG — one short English sentence why
  - `logic:ltl-semantics`: NG — Here "充足可能" refers to propositional satisfiability (SAT), not the LTL satisfiability defined in the card.
  - `logic:ctl-semantics`: NG — This use of「充足可能」refers to propositional satisfiability (SAT), not the CTL truth/satisfiability defined in the card.
  - `logic:mu-semantics`: NG — This "充足可能" refers to propositional satisfiability (SAT) in complexity theory, not the modal μ-calculus notion of satisfiability defined in the card.

## 「公開鍵暗号」 in 01-foundations/03-computation/04-complexity
- Default: `comp:trapdoor-function` → **no candidate fits**
- Pages: 12-approximation-cryptography.html
- Sentence: 公開鍵暗号では、暗号化の方法を公開し、復号の方法だけを秘密にする。それには、ふつうは逆算が難しいが、秘密の情報があれば逆算が易しい関数が必要になる。
  - `comp:trapdoor-function`: NG — 「公開鍵暗号」は暗号方式そのものを指すのに対し、カードが定義するのはその構成要素である「落とし戸関数」であり、同じ概念ではない。

## 「再帰的」 in 01-foundations/03-computation/04-complexity
- Default: `comp:partial-recursive` → **no candidate fits**
- Pages: 09-alternation.html, 15-ladner.html
- Sentence: 時間 $cf(n)$ の交代判定機 $M$ を、決定性の機械 $S$ で模倣する。$S$ は $M$ の計算の木を深さ優先で調べ、各頂点が受理かを再帰的に求める。木の深さは $cf(n)$ 以下で、各頂点の子は $\delta$ の大きさで決まる定数個以下。
  - `comp:partial-recursive`: NG — Here "再帰的に" means recursively in the algorithmic sense of traversing a computation tree, not the computability-theoretic notion of a relation having a general recursive characteristic function.

## 「割り当て」 in 01-foundations/03-computation/04-complexity
- Default: `logic:assignment` → **no candidate fits**
- Pages: 02-np.html, 03-np-complete-problems.html, 04-space-complexity.html, 08-circuits.html, 10-interactive-proofs.html, 13-primality-branching.html, 14-ph-karp-lipton.html, 15-ladner.html
- Sentence: $\varphi$ の各部分論理式 $\theta$ に新しい変数 $z_{\theta}$ を割り当てる（変数 $p$ そのものには $z_{p}\defeq p$）。各部分論理式について、$z_{\theta}$ が $\theta$ の値と等しいことを表す節を作る：
  - `logic:assignment`: NG — Here "割り当てる" means assigning a fresh variable to each subformula, not a variable assignment map $v\colon\mathrm{Var}\to M$ as defined in the card.

## 「単調」 in 01-foundations/03-computation/04-complexity
- Default: `comp:monotone-continuous` → **no candidate fits**
- Pages: 08-circuits.html
- Sentence: を示すことは未解決である。$\mathrm{NP}\not\subseteq\mathrm{P}/\mathrm{poly}$ が示されれば $\mathrm{P}\neq\mathrm{NP}$ が従う（\ref{comp:time-to-size}）。制限された回路（深さ一定の $\mathrm{AC}^{0}$、単調回路）では、パリティが $\mathrm{AC}^{0}$ に入らないこと（ファースト–サックス–シプサー、アイタイ、ハスタード）や、クリークの単調回路計算量が指数的であること（ラズボロフ）が知られている（ここでは証明しない）。
  - `comp:monotone-continuous`: NG — Here "単調回路" means monotone circuits (built only from AND/OR gates, no negations), not the monotonicity of a function on a powerset lattice as defined in the card.

## 「合成」 in 01-foundations/03-computation/04-complexity
- Default: `logic:while-program` → **no candidate fits**
- Pages: 01-time-complexity.html, 02-np.html, 11-parallel.html, 13-primality-branching.html
- Sentence: **高い視点から：多項式という「単位」.** 多項式の全体は、和・積・合成で閉じた最小の「自然な」関数のクラスの一つで、プログラムを部品として組み合わせても多項式時間は保たれる（多項式時間の手続きを多項式回呼んでも多項式時間）。これは、原始再帰関数が合成と原始再帰で閉じていたこと（\ref{comp:page-primitive-recursive}）の計算量版である。比喩で言えば、P は「
  - `logic:while-program`: NG — Here "合成" refers to composition of polynomials/functions, not the sequential composition of while-programs defined in the card.
  - `set:relation-composition`: NG — Here 合成 refers to composition of functions/polynomials (and of complexity procedures), not the composition of binary relations defined in the card.
  - `cat:category`: NG — Here "合成" refers to composition of polynomial-time procedures/functions in computational complexity, not the composition operation of morphisms in a category as defined in the card.
  - `cat:non-symmetric-operad`: NG — Here "合成" refers to composition of functions/procedures in computational complexity, not the operad composition operation γ defined in the card.

## 「命題論理」 in 01-foundations/03-computation/04-complexity
- Default: `logic:prop-formula` → **no candidate fits**
- Pages: 02-np.html
- Sentence: 定性 TM が多項式時間で決定できる言語のクラスと一致する（\ref{comp:np-ntm}）。本ページでは、多項式時間の写像還元（\ref{comp:poly-reduction}）を定め、NP の中で最も難しい問題である **NP 完全**問題（\ref{comp:np-complete}）を導入する。主定理は、命題論理の充足可能性問題 SAT が NP 完全であるという**クック–レヴィンの定理**（\tref{comp:cook-levin}）である。さらに、論理式を節の長さ 3 以下の連言標準形に直す変換（\ref{comp:tseitin}）で、3SAT も NP 完全であることを示す（\ref{comp:3sat-compl
  - `logic:prop-formula`: NG — The card defines "命題論理の論理式" (propositional formulas), not the term "命題論理" (propositional logic) itself, which here refers to the logic system used in the satisfiability problem.

## 「回路計算量」 in 01-foundations/03-computation/04-complexity
- Default: `comp:boolean-circuit` → **no candidate fits**
- Pages: 08-circuits.html
- Sentence: hrm{P}\neq\mathrm{NP}$ が従う（\ref{comp:time-to-size}）。制限された回路（深さ一定の $\mathrm{AC}^{0}$、単調回路）では、パリティが $\mathrm{AC}^{0}$ に入らないこと（ファースト–サックス–シプサー、アイタイ、ハスタード）や、クリークの単調回路計算量が指数的であること（ラズボロフ）が知られている（ここでは証明しない）。
  - `comp:boolean-circuit`: NG — “回路計算量” here refers to circuit complexity in general (e.g., monotone circuit complexity), not specifically the size complexity $\mathrm{SIZE}_{A}(n)$ defined in the card.

## 「基底」 in 01-foundations/03-computation/04-complexity
- Default: `mod:free-module` → **no candidate fits**
- Pages: 07-probabilistic-quantum.html
- Sentence: の補助ビット $u$ を作り、$\mathrm{Tof}\lvert u,a,0\rangle=\lvert u,a,a\rangle$ で写してから $X$ で反転）、複製は $\mathrm{Tof}\lvert u,a,0\rangle=\lvert u,a,a\rangle$（$u=1$）。この回路 $R$ は基底ベクトルを基底ベクトルに移す置換行列で、$R\lvert x,r,0\cdots\rangle=\lvert x,r,M(x,r),\text{ごみ}\rangle$ となる（出力ビットを第 1 量子ビットに置くよう並べ替える）。
  - `mod:free-module`: NG — Here "基底" refers to a basis of a vector space (basis vectors of a quantum state space), not a basis of a module as a generating independent set in the module-theoretic sense.
  - `grp:free-abelian`: NG — Here 基底 means a basis vector of a quantum state space, not a basis of a free abelian group.

## 「多重線形」 in 01-foundations/03-computation/04-complexity
- Default: `lin:alternating-form` → **no candidate fits**
- Pages: 13-primality-branching.html
- Sentence: **似た定理.** \ref{comp:eq-robp-bpp} は多項式の恒等式の判定（\ref{comp:schwartz-zippel} の後の例）の特別な場合であり、ブール関数を「多重線形な多項式」に持ち上げる発想は、対話証明での #SAT の算術化（\ref{comp:page-interactive-proofs}）にそのまま引き継がれる。$\{0,1\}^{m}$ 上の関数は、多重線形な多項式としてただ一通りに表されるという事実（\ref{comp:robp-multilinear} の $\ch
  - `lin:alternating-form`: NG — Here "多重線形" describes a polynomial that is linear in each variable separately, not a map on a module that is A-linear in each variable as in the card's definition.

## 「対数領域還元」 in 01-foundations/03-computation/04-complexity
- Default: `comp:logspace-reduction` → **no candidate fits**
- Pages: 05-logspace.html, 11-parallel.html
- Sentence: は、入力の位置を指す数（ポインタ）を定数個持てる程度の記憶である。本ページでは、決定性・非決定性の対数領域のクラス L, NL を定め（\ref{comp:class-l-nl}）、$\mathrm{NL}\subseteq\mathrm{P}$（\ref{comp:nl-in-p}）、グラフの到達可能性 PATH が対数領域還元について NL 完全であること（\ref{comp:path-nl-complete}）、そして**イマーマン–セレプチェーニの定理** $\mathrm{NL}=\mathrm{coNL}$（\tref{comp:immerman-szelepcsenyi}）を示す。最後の定理は、到達できる頂点の**個数を数える**
  - `comp:logspace-reduction`: NG — the sentence uses "対数領域還元" as a reduction notion (a relation between problems), while the card defines it as a log-space computable function/transducer, not the reduction relation itself.

## 「局所的な条件」 in 01-foundations/03-computation/04-complexity
- Default: `logic:ltl-hintikka` → **no candidate fits**
- Pages: 02-np.html, 04-space-complexity.html
- Sentence: P はその計算量版で、「ある**多項式の長さの**証拠が存在し、その検査は**多項式時間**で済む」という形をしている。算術的階層での Σ₁ と Δ₁（決定可能）の差は対角線論法で示せたが、NP と P の差は、同じ方法では示せないことが知られている。クック–レヴィンの定理の証明は、「計算が正しいこと」を「表の各升目の局所的な条件の連言」として書き下すもので、計算を論理式に翻訳する点で、算術化（\ref{pt:page-arithmetization}）とまったく同じ発想である。比喩で言えば、数独の答えを確かめるのはやさしいが見つけるのは難しい。クック–レヴィンの定理は、あらゆる「確かめやすい問題」が一つのパズル（SAT）に翻訳できることを述べ
  - `logic:ltl-hintikka`: NG — Here "局所的な条件" refers to local constraints on adjacent cells in a computation tableau (Cook–Levin), not the H1–H3 local conditions of a Hintikka sequence.

## 「従う」 in 01-foundations/03-computation/04-complexity
- Default: `logic:positional-strategy` → **no candidate fits**
- Pages: 04-space-complexity.html, 07-probabilistic-quantum.html, 08-circuits.html, 12-approximation-cryptography.html, 13-primality-branching.html
- Sentence: - $\mathrm{P}\neq\mathrm{EXPTIME}$ は時間階層定理から従う（\ref{comp:page-hierarchy}）ので、$\mathrm{P}\subseteq\mathrm{NP}\subseteq\mathrm{PSPACE}\subseteq\mathrm{EXPTIME}$ の包含のうち少なくとも一つは真の包含であるが、どれかは分かっていない。
  - `logic:positional-strategy`: NG — Here "従う" means "follows logically from," not a play following a positional strategy.

## 「最小化」 in 01-foundations/03-computation/04-complexity
- Default: `comp:partial-recursive` → **no candidate fits**
- Pages: 12-approximation-cryptography.html
- Sentence: **最適化問題**とは、各入力 $x$ に空でない有限集合 $S(x)$（**実行可能解**の集合）と、各 $s\in S(x)$ の値 $c(s)\ge0$（整数）を対応させたものである。最小化問題では $\mathrm{OPT}(x)\defeq\min_{s\in S(x)}c(s)$、最大化問題では $\mathrm{OPT}(x)\defeq\max_{s\in S(x)}c(s)$ とする。$k\ge1$ について、各入力 $x$ に $s\in S(x)$ を出力するアルゴリズムが**近似比 $k
  - `comp:partial-recursive`: NG — Here "最小化" refers to a minimization problem (minimizing an objective function), not the μ-operator minimization of partial recursive functions defined in the card.

## 「正規言語」 in 01-foundations/03-computation/04-complexity
- Default: `comp:regular-language` → **no candidate fits**
- Pages: 01-time-complexity.html
- Sentence: 単一テープ機械では、$A$ は時間 $O(n\log n)$ で決定できる（残っている $0$ と $1$ を一つおきに消し、各回で個数の偶奇を比べる）。さらに、時間 $o(n\log n)$ の単一テープの判定機が決定する言語は正規言語に限ることが知られている（ハートマニスやヘニーによる）。本サイトでは示していない。このように、テープの本数で時間計算量は変わる。次の定理は、その違いが多項式の範囲に収まることを示す。
  - `comp:regular-language`: NG — Here "正規言語" refers to the regular languages (recognized by finite automata), which matches the card's definition of languages recognized by a DFA.

## 「相対化」 in 01-foundations/03-computation/04-complexity
- Default: `comp:oracle-classes` → **no candidate fits**
- Pages: 06-hierarchy.html, 07-probabilistic-quantum.html
- Sentence: 限して行う。系として $\mathrm{NL}\subsetneq\mathrm{PSPACE}$、$\mathrm{P}\subsetneq\mathrm{EXPTIME}$ が得られる（\ref{comp:hierarchy-separations}）。一方で、P 対 NP 問題は対角線論法では解けないことが、**相対化**の議論で示される：神託 $A$ で $\mathrm{P}^{A}=\mathrm{NP}^{A}$ となるもの（\ref{comp:bgs-equal}）と、神託 $B$ で $\mathrm{P}^{B}\neq\mathrm{NP}^{B}$ となるもの（\ref{comp:bgs-separate}）がある
  - `comp:oracle-classes`: NG — 「相対化」は神託機械の存在によってP対NP問題が解けないことを指す議論であり、カードが定義する神託付き計算量クラス$\mathrm{P}^{A}$や$\mathrm{NP}^{A}$そのものの定義ではない。
  - `set:relativization`: NG — This "相対化" refers to relativization with respect to an oracle in computational complexity theory, not the relativization of a formula to a class M in set theory.

## 「確率」 in 01-foundations/03-computation/04-complexity
- Default: `comp:probabilistic-tm` → **no candidate fits**
- Pages: 07-probabilistic-quantum.html, 10-interactive-proofs.html, 12-approximation-cryptography.html, 13-primality-branching.html, 16-bpp-ph.html
- Sentence: 計算の途中で**硬貨を投げてよい**としたら、何が効率よく計算できるか。本ページではまず、誤りの確率が $1/3$ 以下の多項式時間の確率的アルゴリズムで決定できる言語のクラス **BPP**（\ref{comp:class-bpp}）を定め、繰り返しで誤りを指数的に小さくできること（\ref{comp:amplification}）、$\mathrm{BPP}\subseteq\mathrm{PSPACE}$（\r
  - `comp:probabilistic-tm`: NG — Here "確率" refers to the error probability of a randomized algorithm (BPP), not the probability of a computation branch of a probabilistic Turing machine as defined in the card.

## 「要求」 in 01-foundations/03-computation/04-complexity
- Default: `logic:ctl-successor-def` → **no candidate fits**
- Pages: 07-probabilistic-quantum.html, 12-approximation-cryptography.html
- Sentence: - **一様性**：BQP の定義で回路の記述を多項式時間で出力できることを要求した。これがないと、回路の族に計算不能な情報を埋め込める。\ref{comp:bqp-in-pspace} で回路を多項式領域で得るのに使った。
  - `logic:ctl-successor-def`: NG — Here "要求" means "require/demand" in the sense of a definitional condition, not the modal-logic notion of a "request" (¬F at a world) defined in the card.

## 「計算可能」 in 01-foundations/03-computation/04-complexity
- Default: `comp:L-computable` → **fits: `comp:mapping-reducible`**
- Pages: 01-time-complexity.html, 09-alternation.html, 14-ph-karp-lipton.html, 15-ladner.html
- Sentence: 計算可能性理論は「計算できるか」を問うが、計算量理論は「どれだけの資源で計算できるか」を問う。本ページでは、チューリング機械（\ref{comp:turing-machine}）の**実行時間**（\ref{comp:running-time}）を定め、多テープ機械を単一テープ機械で模倣すると時間が高々 2 乗になること（\r
  - `comp:L-computable`: NG — Here "計算できる" is used in the informal sense of computability in general (and in the context of resource-bounded computation), not specifically the L-computable partial function notion defined in the card.
  - `comp:mapping-reducible`: OK

## 「計算可能な関係」 in 01-foundations/03-computation/04-complexity
- Default: `comp:computable-functional-relation` → **no candidate fits**
- Pages: 09-alternation.html
- Sentence: **似た定理.** 量化子による特徴づけ（問題 \ref{comp:prob-alt-collapse} で認めたもの）は、計算可能性理論の算術的階層（\ref{comp:page-turing-reducibility}）の「多項式時間版」である：$\Sigma_{k}^{0}$ が計算可能な関係に $k$ 個の交互の量化子を付けたものなら、$\Sigma_{k}^{\mathrm{P}}$ は多項式時間の関係に長さを制限した $k$ 個の交互の量化子を付けたものである。
  - `comp:computable-functional-relation`: NG — the sentence uses "計算可能な関係" only as a comparison point for the polynomial-time analogue, not with the card's oracle-machine definition.

## 「記号列」 in 01-foundations/03-computation/04-complexity
- Default: `set:first-order-language` → **no candidate fits**
- Pages: 02-np.html, 08-circuits.html, 09-alternation.html
- Sentence: **表.** 時点表示 $uqv$（$\lvert uv\rvert\le T+1$）を、長さ $m$ の記号列 $c_{1}\cdots c_{m}$（$c_{j}\in C\defeq Q\cup\Gamma$）で、$uqv$ の後に空白を補ったものとして表す。さらに位置 $0$ に左端を表す新しい記号 $\triangleright$ を、位置 $m+1,m+2$ に空白を置く。$T$ 段以内の計算では、ヘッドは位置 $T
  - `set:first-order-language`: NG — Here "記号列" means a finite string over the tape alphabet \(C=Q\cup\Gamma\) in a Turing machine context, not the finite sequence of basic symbols of the language of set theory as defined in the card.

## 「選択」 in 01-foundations/03-computation/04-complexity
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 01-time-complexity.html, 02-np.html, 07-probabilistic-quantum.html, 08-circuits.html, 09-alternation.html, 10-interactive-proofs.html, 12-approximation-cryptography.html, 14-ph-karp-lipton.html
- Sentence: $N$ の遷移関数の選択肢の数の最大を $b$ とする。\ref{comp:ntm} の模倣 $D$（3 テープ）は、計算木を幅優先で、長さ $1,2,\dots$ の選択の列 $\in\{1,\dots,b\}^{\ast}$ を順に試し、各列について入力から $N$ を最初から模倣する。計算木の深さは $t(n)$ 以下なので、試す列は高
  - `logic:pdl-syntax`: NG — Here "選択" means a choice/sequence of branch indices in a nondeterministic machine's computation tree, not the PDL program operator "choice" (union) defined in the card.

## 「部分和」 in 01-foundations/03-computation/04-complexity
- Default: `calc:series` → **no candidate fits**
- Pages: 03-np-complete-problems.html
- Sentence: NP 完全性は「3SAT をその問題に多項式時間で還元する」ことで示せる（\ref{comp:np-complete} の後の系）。本ページでは、グラフの**クリーク**（\ref{comp:clique-complete}）、**独立集合**と**頂点被覆**（\ref{comp:vc-complete}）、数の**部分和**（\ref{comp:subset-sum-complete}）の問題が NP 完全であることを示す。どの還元も、論理式の変数や節を、問題の中の小さな部品（**ガジェット**）に置き換えて作る。
  - `calc:series`: NG — Here "部分和" refers to the subset-sum problem (a number is a subset sum of a set), not the partial sums of a series as defined in the card.

## 「テープ」 in 01-foundations/03-computation/05-algorithmic-randomness
- Default: `comp:multitape-tm` → **no candidate fits**
- Pages: 01-kolmogorov.html
- Sentence: 文字列 $x$ の**記述**とは、TM $M$ と文字列 $w$ の組で、$M$ が $w$ の上で停止してテープに $x$ だけを残すもののことで、その長さは $\lvert\langle M,w\rangle\rvert$ とする。最短の記述（長さが同じなら辞書式最小）を $x$ の**最小記述** $d(x)$ といい、
  - `comp:multitape-tm`: NG — In the sentence, テープ refers to the single tape left with only x, not the k-tape machine notion defined in the card.

## 「下界」 in 01-foundations/03-computation/05-algorithmic-randomness
- Default: `calc:supremum` → **no candidate fits**
- Pages: 05-chaitin-incompleteness.html
- Sentence: **前提を変えると.** 健全性を「無矛盾性」に弱めると、\ref{comp:chaitin-k} は一般には成り立たない形になる（誤った下界を証明する無矛盾な理論がありうる）が、算術の $\Sigma_{1}$ 健全な理論については同様の結論が得られることが知られている。また、$L$ は理論の「情報量」（理論を枚挙する機械の記述の長さ）に比例して取れる、という形で、「公理系は自分の複雑さを大きく超える複雑さを証明できない」と解釈されることが多い（この解釈に
  - `calc:supremum`: NG — Here "下界" means a lower bound on complexity/information content in an informal sense, not the order-theoretic lower bound of a subset of a totally ordered set as defined in the card.

## 「係数」 in 01-foundations/03-computation/05-algorithmic-randomness
- Default: `comp:linear-system` → **no candidate fits**
- Pages: 01-kolmogorov.html
- Sentence: - \ref{comp:kolmogorov-bounds.3} の係数 $2$ は、$x$ の記述の終わりを示すための二倍化による。接頭辞のない（自己区切りの）記述方式を使う「接頭辞複雑性」では、$\log$ の項に改善できることが知られている。
  - `comp:linear-system`: NG — Here "係数" means a numerical coefficient (the factor 2), not a language used as a coefficient in a system of language equations.

## 「割り当て」 in 01-foundations/03-computation/05-algorithmic-randomness
- Default: `logic:assignment` → **no candidate fits**
- Pages: 02-prefix-free-complexity.html
- Sentence: mp:universal-prefix-machine}）、上界 $H(x)\le\lvert x\rvert+2\log\lvert x\rvert+O(1)$ と、これが $\lvert x\rvert+O(1)$ にはならないこと（\ref{comp:prefix-bounds}）を示す。さらに、望む長さの記述を割り当てる機械を作る**クラフト–チャイティンの定理**（\tref{comp:kraft-chaitin}）を証明し、その応用として、計算可能な重み $P(x)$ について $H(x)\le-\log P(x)+O(1)$ となること（\ref{comp:coding-weight}）を示す。
  - `logic:assignment`: NG — Here "割り当てる" means assigning descriptions/lengths to machines, not a variable assignment map $v\colon\mathrm{Var}\to M$ in a structure.

## 「単調」 in 01-foundations/03-computation/05-algorithmic-randomness
- Default: `comp:monotone-continuous` → **no candidate fits**
- Pages: 03-martin-lof.html, 04-martingales.html
- Sentence: $\Omega\defeq\sum_{p\in\mathrm{dom}(U)}2^{-\lvert p\rvert}$。クラフトの不等式から $0<\Omega\le1$。$U$ の定義域を数え上げ、段階 $s$ までに見つかった $p$ の和を $\Omega_{s}$ とすると、$\Omega_{s}$ は有理数で単調に増加し $\Omega$ に収束する。
  - `comp:monotone-continuous`: NG — Here "単調に増加" means monotonically increasing (a sequence), not the monotonicity of a function on sets defined in the card.

## 「始切片」 in 01-foundations/03-computation/05-algorithmic-randomness
- Default: `set:initial-segment` → **no candidate fits**
- Pages: 03-martin-lof.html
- Sentence: l-test}）——測度がいくらでも小さくなる、計算可能に数え上げられる「異常な列の集まり」の列——のどれにも引っかからない列を**ランダム**と定める。検定には**万能なもの**（\ref{comp:universal-ml-test}）があるので、ランダムでない列全体は測度 $0$ である。主定理は、ランダム性が「始切片が圧縮できない」こと、すなわち $H(X\restr n)\ge n-c$ と同値であるという**レヴィン–シュノアの定理**（\tref{comp:levin-schnorr}）である。最後に、万能な接頭辞なしの機械が停止する確率 **$\Omega$**（\ref{comp:chaitin-omega}）がランダム
  - `set:initial-segment`: NG — Here "始切片" means an initial segment (prefix) of an infinite binary sequence, not the set-theoretic predecessor set pred(A,x,R) defined in the card.

## 「従う」 in 01-foundations/03-computation/05-algorithmic-randomness
- Default: `logic:positional-strategy` → **no candidate fits**
- Pages: 02-prefix-free-complexity.html, 03-martin-lof.html, 04-martingales.html, 05-chaitin-incompleteness.html
- Sentence: $n$ に対応する文字列の長さは $\lfloor\log(n+1)\rfloor$ 程度なので、\ref{comp:prefix-bounds.2} から前半が従う。後半：$H(n)<\log n$ が $n\ge n_{0}$ のすべてで成り立つなら、$\sum_{n\ge n_{0}}2^{-H(n)}>\sum_{n\ge n_{0}}1/n=\infty$ となり \ref{comp:prefix-bounds.1} に矛盾する。
  - `logic:positional-strategy`: NG — Here "従う" means "follows (logically)" from a previous result, not a play following a positional strategy.

## 「断片」 in 01-foundations/03-computation/05-algorithmic-randomness
- Default: `logic:ctl-fragment` → **no candidate fits**
- Pages: 02-prefix-free-complexity.html
- Sentence: - **空きの長さを互いに異ならせる不変条件**：クラフト–チャイティンの定理で、空きの総量が足りれば十分長い区間があることに使った。この条件がないと、空きが細かく断片化して、総量は足りても割り当てられなくなる。
  - `logic:ctl-fragment`: NG — Here "断片化" means fragmentation of free space, not the labeled finite tree defined in the card.

## 「決定可能」 in 01-foundations/03-computation/05-algorithmic-randomness
- Default: `comp:recognizable-decidable` → **no candidate fits**
- Pages: 03-martin-lof.html, 04-martingales.html, 05-chaitin-incompleteness.html
- Sentence: _{s}<(q_{n+1}+2^{-n-1})-(q_{n+1}-2^{-n-1})=2^{-n}$。長さ $n$ 以下の $p$ で段階 $s$ までに停止していないものは、決して停止しない（停止すれば $\Omega\ge\Omega_{s}+2^{-n}$ となる）。よって $\mathrm{dom}(U)$ は決定可能になる。一方、$1^{e}0\in\mathrm{dom}(M)\iff e\in K$ となる接頭辞なしの機械 $M$（定義域 $\{1^{e}0:e\in K\}$ は接頭辞なし）があり、$M=M_{d}$ として $1^{e}0\in\mathrm{dom}(M)\iff1^{d}01^{e}0\in\mathr
  - `comp:recognizable-decidable`: NG — Here "決定可能" is used for the domain of a partial function being decidable, which matches the card's notion of a decidable (recursive) language/set, so it is the same notion.

## 「確率」 in 01-foundations/03-computation/05-algorithmic-randomness
- Default: `comp:probabilistic-tm` → **no candidate fits**
- Pages: 01-kolmogorov.html, 02-prefix-free-complexity.html, 03-martin-lof.html, 04-martingales.html
- Sentence: 械という「最も良い圧縮器」が、どんな特定の圧縮器にも定数の差でしか負けないことを述べている。しかし、その最良の圧縮率を計算することはできない（\ref{comp:k-uncomputable}）。たとえれば、「この文章はこれ以上要約できない」と判定する完全な要約器は存在しない、ということである。シャノンのエントロピーが確率分布についての平均的な情報量であるのに対し、$K$ は個々の対象についての情報量で、ランダムな源から来た文字列の $K$ の期待値はエントロピーにほぼ等しいことが知られている。
  - `comp:probabilistic-tm`: NG — Here "確率" refers to a probability distribution in information theory (Shannon entropy), not the branch probability of a probabilistic Turing machine.

## 「要求」 in 01-foundations/03-computation/05-algorithmic-randomness
- Default: `logic:ctl-successor-def` → **no candidate fits**
- Pages: 02-prefix-free-complexity.html, 03-martin-lof.html
- Sentence: **区間の割り当て.** 長さ $d$ の文字列 $p$ と、$[0,1)$ の**二進区間** $I_{p}$（長さ $2^{-d}$、左端は $2^{-d}$ の倍数）は一対一に対応する。要求 $(d_{i},x_{i})$ を順に処理し、各段階で、まだ割り当てていない部分（**空き**）を、長さが互いに異なる有限個の二進区間の非交和として保つ。初めの空きは $[0,1)=I_{\varepsilon}$。
  - `logic:ctl-successor-def`: NG — This "要求" means a request/pair to be processed in an interval-assignment algorithm, not the modal-logic notion of a requirement (¬F) at a world.

## 「計算可能な部分関数」 in 01-foundations/03-computation/05-algorithmic-randomness
- Default: `comp:L-computable` → **no candidate fits**
- Pages: 01-kolmogorov.html, 02-prefix-free-complexity.html, 03-martin-lof.html
- Sentence: $p\colon\{0,1\}^{\ast}\to\{0,1\}^{\ast}$ を計算可能な部分関数（**記述方式**）とし、$K_{p}(x)\defeq\min\{\lvert s\rvert:p(s)=x\}$（なければ $\infty$）とする。このとき定数 $c_{p}$ があって、すべての $x$ について $K(x)\le K_{p}(x)+c_{p}$。
  - `comp:L-computable`: NG — This is computability of a partial function on binary strings under a description method, not the card's notion of an L-computable partial function on $\N^{k}$.

## 「コード」 in 01-foundations/03-computation/06-lambda-calculus
- Default: `comp:prime-sequence-code` → **no candidate fits**
- Pages: 02-lambda-definability.html, 05-partial-definability.html
- Sentence: ラムダ項を自然数でコード化する（構文木を組のコードで表す。\ref{comp:tuple-code} と同様）。α 同値類の代表として、束縛変数を出現の位置で決まる名前に付け替えたものをとれば、二つのコードが同じ項を表すかは計算可能に判定できる。一段の簡約 $M\to_{\beta}N$ は、$M$ の基を一つ選んで代入を行う有限の操作なので
  - `comp:prime-sequence-code`: NG — This "コード" refers to encoding lambda terms as natural numbers via tuple codes, not the finite-support state code defined as a product of prime powers in the card.

## 「全域的」 in 01-foundations/03-computation/06-lambda-calculus
- Default: `logic:ctl-semantics` → **no candidate fits**
- Pages: 02-lambda-definability.html, 03-combinatory-logic.html, 05-partial-definability.html
- Sentence: $ 回適用する」項 $\underline{n}\defeq\lambda fx.f^{n}x$（**チャーチ数**、\ref{logic:church-numeral}）で表すと、算術の関数をラムダ項で表せるようになる（**ラムダ定義可能**、\ref{logic:lambda-definable}）。本ページでは、全域的な計算可能関数がすべてラムダ定義可能であること（\ref{logic:computable-lambda}）と、逆にラムダ定義可能な関数が計算可能であること（\ref{logic:lambda-computable}）を示す。前者では、クリーネの標準形（\ref{comp:normal-form}）を使い、原始再帰を対
  - `logic:ctl-semantics`: NG — Here "全域的" means total (defined on all inputs) for computable functions, not the totality condition on the accessibility relation R in a CTL model.

## 「再帰的」 in 01-foundations/03-computation/06-lambda-calculus
- Default: `comp:partial-recursive` → **no candidate fits**
- Pages: 01-untyped-lambda.html, 02-lambda-definability.html
- Sentence: $YF$ は $F(YF)$ に**簡約される**わけではない（両者は共通の項 $F(WW)$ に簡約されるだけ）が、チューリングの $\Theta$ では $\Theta F\twoheadrightarrow_{\beta}F(\Theta F)$ となる。不動点結合子により、再帰的な定義「$g=F(g)$」をラムダ計算の中で解ける。これは、\ref{comp:second-recursion-theorem}や\ref{pt:diagonal-lemma}と同じ「自己適用 $xx$」による不動点で、言語方程式の最小解（\ref{comp:page-fixed-points}）とは別系統の不動点で
  - `comp:partial-recursive`: NG — Here "再帰的な定義" means a self-referential (recursive) definition, not the card's notion of a relation being recursive (having a general recursive characteristic function).

## 「反復」 in 01-foundations/03-computation/06-lambda-calculus
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 02-lambda-definability.html
- Sentence: 計算可能関数がすべてラムダ定義可能であること（\ref{logic:computable-lambda}）と、逆にラムダ定義可能な関数が計算可能であること（\ref{logic:lambda-computable}）を示す。前者では、クリーネの標準形（\ref{comp:normal-form}）を使い、原始再帰を対の反復で、最小化を不動点結合子による探索で表す。これで、ラムダ計算が L やチューリング機械と同じ能力をもつ（チューリング完全である）ことが分かる。
  - `logic:pdl-syntax`: NG — Here "反復" refers to iterating a pair operation in primitive recursion, not the PDL program iteration operator α*.

## 「合成」 in 01-foundations/03-computation/06-lambda-calculus
- Default: `logic:while-program` → **no candidate fits**
- Pages: 02-lambda-definability.html, 03-combinatory-logic.html, 04-normalization.html, 05-partial-definability.html
- Sentence: 3. $\lambda f.\underline{n}(\underline{m}f)$。$\underline{m}f\twoheadrightarrow_{\beta}\lambda x.f^{m}x$ なので、$(\lambda x.f^{m}x)$ を $n$ 回合成した $\lambda x.f^{nm}x$ に簡約される（$n$ に関する帰納法：$\underline{n}G\twoheadrightarrow_{\beta}\lambda x.G^{n}x$ で、$G=\lambda x.f^{m}x$ のとき $G^{n}x\twoheadrightarrow_{\beta
  - `logic:while-program`: NG — Here "合成" means function composition (iterating a lambda term), not the sequential composition of while-programs defined in the card.
  - `set:relation-composition`: NG — Here 合成 refers to composing a function with itself n times (function iteration), not the composition of two relations as defined in the card.
  - `cat:category`: NG — Here "合成" refers to iterated function composition of a lambda term, not the category-theoretic composition operation defined in the card.
  - `cat:non-symmetric-operad`: NG — Here "合成" refers to repeated composition of functions (Church numerals), not the operad composition operation γ.

## 「基底」 in 01-foundations/03-computation/06-lambda-calculus
- Default: `mod:free-module` → **no candidate fits**
- Pages: 03-combinatory-logic.html
- Sentence: _{w}f(Yf)$ が \ref{logic:bracket-beta} から従う。また、全域的な計算可能関数は（チャーチ数の翻訳を通して）組合せ論理でも表せる（\ref{logic:computable-lambda} と \ref{logic:cl-lambda-translation.1}）ことが知られている。基底を $\{\mathsf{S},\mathsf{K}\}$ から一つの結合子に減らせること（たとえば $\iota$ 結合子）も知られている。
  - `mod:free-module`: NG — Here "基底" refers to a generating set of a combinatory logic (a basis of combinators), not a basis of a free module as defined in the card.
  - `grp:free-abelian`: NG — Here 基底 refers to a basis of combinatory logic (a generating set of combinators), not a basis of a free abelian group.

## 「従う」 in 01-foundations/03-computation/06-lambda-calculus
- Default: `logic:positional-strategy` → **no candidate fits**
- Pages: 01-untyped-lambda.html, 03-combinatory-logic.html
- Sentence: 本ページではこれを、**並行簡約**（\ref{logic:parallel-reduction}）と**完全展開**（\ref{logic:complete-development}）を使う高橋の方法で示す。系として正規形の一意性（\ref{logic:normal-form-unique}）と β 等式の無矛盾性が従う。最後に、すべての項が不動点をもつという**不動点定理**（\ref{logic:fixed-point-combinator}）を示す。計算可能性との関係（チャーチ数とラムダ定義可能性）は次のページで扱う。
  - `logic:positional-strategy`: NG — Here "従う" means "follows as a consequence" (is derived), not a play following a positional strategy.

## 「普遍性」 in 01-foundations/03-computation/06-lambda-calculus
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 02-lambda-definability.html
- Sentence: という値」ではなく「何かを $n$ 回繰り返す」という**振る舞い**そのもので、$\mathsf{T}$, $\mathsf{F}$ は「二つの選択肢のどちらを選ぶか」、対は「二つのものを関数に渡すこと」である。データ型を、それを使う方法（除去規則）で定義するこの発想は、チャーチ符号化と呼ばれ、型理論では帰納的な型の普遍性（始代数）に当たる。自然数のチャーチ数は、自然数対象の普遍性（\ref{comp:page-primitive-recursive} の補足）を「型のない世界で、任意の $f,x$ についての反復」として書いたものと見ることができる。比喩で言えば、ラムダ計算では「名詞」がなく「動詞」しかないが、動詞の使い方のパターンと
  - `cat:universal-arrow`: NG — 「普遍性」は普遍的性質（universal property）を指す語で、カードが定義する「普遍射」という特定の組 $(r,u)$ とは異なる概念である。

## 「最小元」 in 01-foundations/03-computation/06-lambda-calculus
- Default: `set:well-order` → **no candidate fits**
- Pages: 05-partial-definability.html
- Sentence: **高い視点から：「失敗」を項の中で表す.** 全域的な場合には「値が β 等しい」ことだけを見ればよかったが、部分関数では「値がない」ことも項で表さなければならない。ラムダ計算には「エラー」という特別な値がないので、「いつまでも頭部が決まらない」ことが未定義を表す。表示的意味論では、頭部正規形をもたない項は最小元 $\bot$ に解釈されることが知られており、本ページの構成は「探索が失敗する入力では、出力の項がどの段階でも $\bot$ から離れない」ように作ったものと見られる。比喩で言えば、「答えが見つかったら、その場で清書して提出する」受験生は、見つからない限り何も提出しない。これに対して「答えを探しながら、解答欄に先に定
  - `set:well-order`: NG — Here 最小元 refers to the least element ⊥ in a domain-theoretic order, not the R-minimal element of a subset in a well-order.

## 「構文木」 in 01-foundations/03-computation/06-lambda-calculus
- Default: `comp:parse-tree` → **no candidate fits**
- Pages: 02-lambda-definability.html
- Sentence: ラムダ項を自然数でコード化する（構文木を組のコードで表す。\ref{comp:tuple-code} と同様）。α 同値類の代表として、束縛変数を出現の位置で決まる名前に付け替えたものをとれば、二つのコードが同じ項を表すかは計算可能に判定できる。一段の簡約 $M\to_{\beta}N$ は、$M$ の基を一つ選んで代入を行う有限の操作なので、関係「$N$
  - `comp:parse-tree`: NG — 「構文木」は一般の構文解析木を指し、カードのチョムスキー標準形CFGに固有の「導出木」とは異なる概念である。

## 「現れる変数」 in 01-foundations/03-computation/06-lambda-calculus
- Default: `logic:derivation-symbols` → **no candidate fits**
- Pages: 03-combinatory-logic.html
- Sentence: 1. $[x]M$ に $x$ は現れず、$[x]M$ に現れる変数は $M$ に現れる $x$ 以外の変数である。
  - `logic:derivation-symbols`: NG — This sentence is about variables occurring in a lambda term $[x]M$, not about the set $\mathrm{Var}(D)$ of variables occurring in a derivation $D$ as defined in the card.

## 「組合せ論理」 in 01-foundations/03-computation/06-lambda-calculus
- Default: `logic:weak-reduction` → **no candidate fits**
- Pages: 03-combinatory-logic.html
- Sentence: **組合せ論理**は、ラムダ計算（\ref{logic:page-lambda-calculus}）から束縛変数を完全に取り除いた体系である。項は変数と二つの定数 $\mathsf{S}$, $\mathsf{K}$ を適用で組み合わせたものだけで、計算は**弱簡約** $\mathsf{K}PQ\to P$, $\mathsf{S
  - `logic:weak-reduction`: NG — the card defines combinatory logic terms and weak reduction, not the field "combinatory logic" itself.

## 「要求」 in 01-foundations/03-computation/06-lambda-calculus
- Default: `logic:ctl-successor-def` → **no candidate fits**
- Pages: 05-partial-definability.html
- Sentence: 条件 2 がないと、どの部分関数も「定義されるところで値を正しく返す」項をもつかどうかだけの問題になり、定義域の情報が失われる。文献によっては、条件 2 の代わりに「頭部正規形をもたない（可解でない）」ことを要求する定義もあると言われている（ここでは確かめていない）。本ページの構成は、そのより強い条件も満たす（\ref{logic:partial-computable-lambda.2}）。
  - `logic:ctl-successor-def`: NG — Here「要求する」means "to require/demand" in general prose, not the modal-logic technical term「要求」(a negated AX formula) defined in the card.

## 「選択」 in 01-foundations/03-computation/06-lambda-calculus
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 02-lambda-definability.html
- Sentence: **高い視点から：データは振る舞い.** チャーチ数 $\underline{n}$ は「$n$ という値」ではなく「何かを $n$ 回繰り返す」という**振る舞い**そのもので、$\mathsf{T}$, $\mathsf{F}$ は「二つの選択肢のどちらを選ぶか」、対は「二つのものを関数に渡すこと」である。データ型を、それを使う方法（除去規則）で定義するこの発想は、チャーチ符号化と呼ばれ、型理論では帰納的な型の普遍性（始代数）に当たる。自然数のチャーチ数は、自然数対象の普遍性（\ref{comp:page-primitive-recursive} の補足）を
  - `logic:pdl-syntax`: NG — Here "選択" means choosing between two options (a general notion), not the PDL program operator "choice" defined in the card.

## 「一つでも」 in 01-foundations/04-set-theory/01-basics
- Default: `comp:ntm-definition` → **no candidate fits**
- Pages: 03-relations-well-orders.html
- Sentence: どんな集合も、元を先頭から一列に（超限的に）並べることができる、という主張。並べ方が一つでもあれば、空でない部分集合からは「一番前の元」を選ぶことで一斉に元を選び出せるので、これは「空でない集合の族からいっせいに一つずつ元を選べる」という通常の形の選択公理と同値である（\ref{set:ac-equivalences}）。本サイトでは Kunen にならい、整列可能性の形を公理として採る。
  - `comp:ntm-definition`: NG — Here "一つでも" means "at least one" (existence of a single well-ordering), not the nondeterministic TM acceptance notion defined in the card.

## 「下界」 in 01-foundations/04-set-theory/01-basics
- Default: `calc:supremum` → **no candidate fits**
- Pages: 09-cardinal-arithmetic.html, 13-konig.html
- Sentence: **Step 2（和の下界）.** $\xi\mapsto(\xi,0)$ は単射 $\kappa\to\kappa\times\{0\}\cup\lambda\times\{1\}$ なので $\kappa\le\kappa\oplus\lambda$。
  - `calc:supremum`: NG — Here "下界" means a lower bound of a sum in the sense of an inequality estimate, not the order-theoretic lower bound of a subset of a totally ordered set as defined in the card.

## 「係数」 in 01-foundations/04-set-theory/01-basics
- Default: `comp:linear-system` → **no candidate fits**
- Pages: 10-axiom-of-choice.html
- Sentence: - 有理数係数の多項式の根となる複素数（代数的数）全体は、各次数・各係数ごとに高々有限個の根の和なので可算。ここでも、複素数を辞書式順序で並べるなど根に明示的な順番を付けられるので ZF で示せる。本定理の選択公理が効くのは、各 $X_{i}$ の数え方に標準的なものがない場合である。
  - `comp:linear-system`: NG — In the sentence, 係数 refers to coefficients of a polynomial over the rationals, not the languages $A_{ij}, B_{i}$ serving as coefficients in a system of language equations.

## 「全域的」 in 01-foundations/04-set-theory/01-basics
- Default: `logic:ctl-semantics` → **no candidate fits**
- Pages: 01-axioms-overview.html
- Sentence: 4. 部分的にしか意味をもたない演算（例：順序数の和 $\alpha+\beta$）は、本来の定義域の外では値を $\varnothing$ と約束して全域的な演算とする。
  - `logic:ctl-semantics`: NG — Here "全域的" means total (defined on the whole domain), not the CTL model's serial/total accessibility relation.

## 「内包公理」 in 01-foundations/04-set-theory/01-basics
- Default: `set:ax-comprehension` → **no candidate fits**
- Pages: 01-axioms-overview.html, 02-extensionality-comprehension.html, 08-cantor-theorem.html
- Sentence: 1. **NBG**（フォン・ノイマン＝ベルナイス＝ゲーデル）は、集合については $\ZF$ の公理を満たし、クラスの内包公理 $\exists X\,\forall y\,(y\in X\leftrightarrow\varphi(y))$ を、$\varphi$ の**束縛変数が集合だけを動く**場合に限って認める体系である。NBG は $\ZF$ の保存拡大であり（集合の変数だけを含む文について NBG $\vdash\varphi\i
  - `set:ax-comprehension`: NG — NBG's class comprehension axiom allows arbitrary formulas with class quantifiers (not only set-bounded ones), so it is not the same as the card's separation scheme.
  - `pt:l2-axioms`: NG — This is the class comprehension axiom of NBG set theory, not the second-order arithmetic comprehension axiom scheme defined in the card.

## 「再帰的」 in 01-foundations/04-set-theory/01-basics
- Default: `comp:partial-recursive` → **no candidate fits**
- Pages: 03-relations-well-orders.html, 05-natural-numbers.html, 06-classes-recursion.html, 07-cardinals.html, 09-cardinal-arithmetic.html
- Sentence: 「順に対応させていく」を超限再帰で定式化することもできるが、ここではもっと直接に、「$v$ の前の部分と $w$ の前の部分が同型になる組 $\langle v,w\rangle$」をすべて集めた集合 $f$ を作り、それが求める同型写像であることを示す。これにより超限再帰も置換公理を使った再帰的構成も不要になる。
  - `comp:partial-recursive`: NG — Here "再帰的構成" means a recursive/inductive construction in set theory, not the computability-theoretic notion of a relation being recursive (general recursive characteristic function).

## 「到達不能基数」 in 01-foundations/04-set-theory/01-basics
- Default: `set:inaccessible` → **no candidate fits**
- Pages: 07-cardinals.html, 09-cardinal-arithmetic.html, 10-axiom-of-choice.html, 12-cofinality.html
- Sentence: 択公理のもとでは本定理から従う（全射から単射を作れる：\ref{set:surjection-cardinality}）が、$\ZF$ だけでは証明できない。たとえば $\omega_{1}$（\ref{set:aleph}）から $\mathcal{P}(\omega)$ への単射が存在しない $\ZF$ のモデル（到達不能基数の存在が無矛盾ならば存在する。\ref{set:surjection-cardinality} の補足）では、$A=\mathcal{P}(\omega)$ と $B=\mathcal{P}(\omega)\times\{0\}\cup\omega_{1}\times\{1\}$ の間に両向きの全射がある（$\math
  - `set:inaccessible`: NG — the sentence only mentions the existence of an inaccessible cardinal as a consistency assumption, not the defined notion itself.

## 「割り当て」 in 01-foundations/04-set-theory/01-basics
- Default: `logic:assignment` → **no candidate fits**
- Pages: 07-cardinals.html, 08-cantor-theorem.html, 11-cardinal-exponentiation.html
- Sentence: 「$A$ の元を $B$ の相異なる元に一つずつ割り当てられる」ことを「$A$ は $B$ 以下の大きさ」と読む。有限集合では元の個数の比較と一致するが、個数を数えるという操作を経由しないので、無限集合にもそのまま使える。
  - `logic:assignment`: NG — Here "割り当てる" means assigning elements of one set to distinct elements of another (an injection), not a variable assignment map $v\colon\mathrm{Var}\to M$ in a structure.

## 「単調」 in 01-foundations/04-set-theory/01-basics
- Default: `comp:monotone-continuous` → **no candidate fits**
- Pages: 06-classes-recursion.html, 09-cardinal-arithmetic.html, 10-axiom-of-choice.html, 11-cardinal-exponentiation.html, 12-cofinality.html, 13-konig.html
- Sentence: 以下で積の単調性を次の形で使う：$x\cdot\beta\le x\cdot\gamma$（$\beta\le\gamma$。$x>0$ なら \ref{set:ordinal-multiplication-laws.6}、$x=0$ なら両辺 $0$）；$x\le x'\Rightarrow x\cdot\beta\le x'\c
  - `comp:monotone-continuous`: NG — This "単調" refers to monotonicity of ordinal multiplication, not the monotonicity of a function on sets of strings defined in the card.

## 「可算集合」 in 01-foundations/04-set-theory/01-basics
- Default: `set:finite-set` → **no candidate fits**
- Pages: 05-natural-numbers.html, 07-cardinals.html, 09-cardinal-arithmetic.html, 10-axiom-of-choice.html, 12-cofinality.html
- Sentence: **無限の長さの列.** 同じ方法で ${}^{\omega}A$（$A$ が 2 元以上）を作ることはできない。長さ $\omega$ の列は有限列の「極限」だが、それら全体を一つの集合に集める操作は置換公理からは得られない。実際、冪集合の公理を除いた $\ZFC$ のモデル（遺伝的可算集合全体 $H(\omega_{1})$ など）では、$\omega\to\omega$ の関数はどれも集合として存在するが、それら全体の集合 ${}^{\omega}\omega$ は存在しない。関数全体の集合 ${}^{B}A$ は冪集合の公理のもとで \fullref[関数の集合]{set:function-set}
  - `set:finite-set`: NG — the sentence discusses the set of all infinite sequences ${}^{\omega}A$ and does not use the term 可算集合 with the meaning defined in the card.

## 「同型写像」 in 01-foundations/04-set-theory/01-basics
- Default: `set:order-isomorphism` → **no candidate fits**
- Pages: 03-relations-well-orders.html, 04-ordinals.html
- Sentence: 前ページで作った順序対と直積を使って、関係と関数を集合として定義し、単射・全射・全単射を導入する。後半では全順序と**整列順序**を定義し、整列集合の「硬さ」（自分の始切片と同型にならない、同型写像はただ一つ）と、任意の二つの整列集合が比較できるという**比較定理**を詳しく証明する。最後に、選択公理を「任意の集合は整列できる」という形で導入する。
  - `set:order-isomorphism`: NG — the term 同型写像 appears only inside a parenthetical remark about well-ordered sets, not as the defined notion of an isomorphism between two relational structures ⟨A,R⟩ and ⟨B,S⟩.

## 「完全集合」 in 01-foundations/04-set-theory/01-basics
- Default: `comp:sigma-n-complete` → **no candidate fits**
- Pages: 10-axiom-of-choice.html
- Sentence:  $\in$ を移す）ので、これは $\omega_{1}$ への全射である。一方、「単射 $\omega_{1}\to\mathcal{P}(\omega)$ が存在しない」ことは、ZFC $+$「到達不能基数が存在する」が無矛盾ならば ZF と無矛盾である（ソロヴェイのモデルでは、$\R$ の非可算部分集合はすべて完全集合を含み、濃度 $\aleph_{1}$ の実数の集合がない。Solovay, *Ann. of Math.* 92 (1970)）。
  - `comp:sigma-n-complete`: NG — This "完全集合" means a perfect set (a closed set with no isolated points), not the computability-theoretic $\Sigma_{n}$-complete set defined in the card.

## 「引き戻し」 in 01-foundations/04-set-theory/01-basics
- Default: `cat:product` → **no candidate fits**
- Pages: 09-cardinal-arithmetic.html, 12-cofinality.html
- Sentence: **Step 3（(1)）.** 整列順序の部分集合への制限、および単射で引き戻した順序は整列順序である（\ref{set:well-orderable-iff-ordinal} Step 3 と同じ議論）。Step 1・2 より $\lhd$ は $\alpha\times\alpha$ の整列順序。
  - `cat:product`: NG — Here "引き戻し" refers to pulling back an order along an injection (preimage of a relation), not the categorical fiber product/pullback defined in the card.

## 「強制」 in 01-foundations/04-set-theory/01-basics
- Default: `logic:ikripke-model` → **no candidate fits**
- Pages: 03-relations-well-orders.html, 11-cardinal-exponentiation.html, 13-konig.html
- Sentence: 二つの整列集合が同型なら、その対応のさせ方には選択の余地がない：先頭は先頭へ、2 番目は 2 番目へ、…と強制的に決まる。
  - `logic:ikripke-model`: NG — Here "強制的に" means "forcibly/inevitably" in ordinary Japanese, not the Kripke-model forcing relation 強制.

## 「従う」 in 01-foundations/04-set-theory/01-basics
- Default: `logic:positional-strategy` → **no candidate fits**
- Pages: 01-axioms-overview.html, 02-extensionality-comprehension.html, 03-relations-well-orders.html, 04-ordinals.html, 05-natural-numbers.html, 07-cardinals.html, 08-cantor-theorem.html, 09-cardinal-arithmetic.html, 10-axiom-of-choice.html, 11-cardinal-exponentiation.html, 13-konig.html
- Sentence: 前半は推論規則が「真を真に移す」ように作られていることから従う。あるモデルで $\varphi$ も $\lnot\varphi$ も真になることはないので、$S$ はその両方を証明できない。集合論の独立性証明（たとえば CH の独立性）はすべてこの形で行われる：$\ZFC+\mathrm{CH}$ と $\ZFC+\lnot\mathrm{CH}$ のそれぞれにモデルを作れば、
  - `logic:positional-strategy`: NG — Here "従う" means "follows logically (is a consequence)", not "a play follows a strategy".

## 「意図された解釈」 in 01-foundations/04-set-theory/01-basics
- Default: `set:hereditary-set` → **no candidate fits**
- Pages: 01-axioms-overview.html, 02-extensionality-comprehension.html
- Sentence: 集合論を数学の基礎とするなら、変数が牛や豚のような集合でない対象を動く必要はない。$\ZFC$ の**意図された解釈**は、議論領域を遺伝的集合全体とし、$\in$ を本当の所属関係と解釈するものである。遺伝的集合の元はまた遺伝的集合なので、「すべての集合について」は「その元の元の…についても」をもれなく含む。このことが\ref{set:ax-extensionality}の正しさの根拠になる。例：$\varnothing$, $\
  - `set:hereditary-set`: NG — 「意図された解釈」はモデル理論における解釈の意味であり、遺伝的集合の定義とは異なる概念である。

## 「押し出し」 in 01-foundations/04-set-theory/01-basics
- Default: `cat:coequalizer` → **no candidate fits**
- Pages: 07-cardinals.html
- Sentence: 単射が両方向にあれば全単射がある、つまり $\preccurlyeq$ は $\approx$ を同一視すれば反対称的である。証明のアイデアは「$A$ のうち $g$ で $B$ から来ていない部分」を出発点として、$g\circ f$ で押し出していった部分 $C$ では $f$ を、それ以外では $g^{-1}$ を使う、というものである。$C$ の外の元は必ず $g$ の像に入っているので $g^{-1}$ が使え、$C$ が $g\circ f$ で閉じていることが二つの規則の衝突を防ぐ。
  - `cat:coequalizer`: NG — Here "押し出していった" is the ordinary verb "push forward/out," not the category-theoretic pushout (fibered coproduct).

## 「推移的」 in 01-foundations/04-set-theory/01-basics
- Default: `set:transitive-set` → **fits: `logic:relation-properties`**
- Pages: 04-ordinals.html, 05-natural-numbers.html, 07-cardinals.html, 09-cardinal-arithmetic.html, 10-axiom-of-choice.html
- Sentence: - $(A,R)$ が**全順序**（\fullref[全順序]{set:total-order}）とは、$R$ が $A$ 上で推移的・非反射的で、三分律 $\forall x,y\in A\,(x=y\lor xRy\lor yRx)$ を満たすこと（狭義の順序で考え、$R\subseteq A\times A$ は要求しない）。**整列順序**（\fullref[整列順序]{set:well-order}）とは、さらに $A$ の空でない任意の部
  - `set:transitive-set`: NG — Here "推移的" refers to a transitive relation on $A$, not a transitive set as defined in the card.
  - `logic:relation-properties`: OK

## 「推論規則」 in 01-foundations/04-set-theory/01-basics
- Default: `logic:deduction-system` → **no candidate fits**
- Pages: 01-axioms-overview.html
- Sentence: hi$ の**形式的証明**とは、論理式の有限列 $\varphi_{1},\dots,\varphi_{n}$ であって、$\varphi_{n}$ が $\varphi$ であり、各 $\varphi_{i}$ が「$S$ の元」「論理公理」「$\varphi_{1},\dots,\varphi_{i-1}$ から推論規則で得られるもの」のいずれかであるものをいう（論理公理と推論規則は純粋に記号の形だけで定義される。詳しくは \see{logic:deduction-system}）。そのようなものがあるとき $S\vdash\varphi$ と書く。$\varphi$ が文でない論理式のときは、$S\vdash\varphi$ は $
  - `logic:deduction-system`: NG — the card defines natural deduction derivations, not the inference rules of a Hilbert-style proof system mentioned in the sentence.
  - `pt:pa-x`: NG — the sentence uses 推論規則 for a general formal deduction system, not specifically the inference rules of the one-sided sequent calculus PA(X) defined in the card.

## 「極限基数」 in 01-foundations/04-set-theory/01-basics
- Default: `set:successor-cardinal` → **no candidate fits**
- Pages: 09-cardinal-arithmetic.html, 11-cardinal-exponentiation.html, 12-cofinality.html
- Sentence: 1. $n\in\omega$ ならば $n^{+}=n+1$。$\omega$ は後続基数ではない（したがって後続基数でも極限基数でもない）。
  - `set:successor-cardinal`: NG — According to the card, a limit cardinal must satisfy $\kappa>\omega$, so $\omega$ itself is neither a successor nor a limit cardinal, matching the sentence's claim.

## 「爆発律」 in 01-foundations/04-set-theory/01-basics
- Default: `logic:nj` → **no candidate fits**
- Pages: 01-axioms-overview.html
- Sentence: 形式的証明は「記号の意味には一切触れず、規則どおりに記号列を並べたもの」である。これによって「$\ZFC$ から CH は証明できない」が「そのような有限列は存在しない」という、はっきりした主張になる。矛盾する $S$ は（爆発律により）すべての文を証明してしまうので興味の対象にならない。背理法を形式化すると、$S\vdash\varphi$ と「$S\cup\{\lnot\varphi\}$ が矛盾する」とは同値になる。特に「$\ZFC\nvdash\lnot\mathrm{CH}$」は $\mathrm{Con}(\ZFC+\mathrm{
  - `logic:nj`: NG — 爆発律 (ex falso / ⊥E) is not defined in the card; the card defines the NJ derivation system and its rules, but does not introduce the principle of explosion as a named notion.

## 「要求」 in 01-foundations/04-set-theory/01-basics
- Default: `logic:ctl-successor-def` → **no candidate fits**
- Pages: 04-ordinals.html
- Sentence:  $(A,R)$ が**全順序**（\fullref[全順序]{set:total-order}）とは、$R$ が $A$ 上で推移的・非反射的で、三分律 $\forall x,y\in A\,(x=y\lor xRy\lor yRx)$ を満たすこと（狭義の順序で考え、$R\subseteq A\times A$ は要求しない）。**整列順序**（\fullref[整列順序]{set:well-order}）とは、さらに $A$ の空でない任意の部分集合 $Y$ が $R$-最小元（$m\in Y$ で $\forall y\in Y\,(y=m\lor mRy)$ となるもの）をもつことである。整列順序の部分集合は（同じ $R$ で
  - `logic:ctl-successor-def`: NG — Here "要求" is the ordinary verb "require/demand" (the relation R is not required to be a subset), not the modal-logic technical term for a formula demanded at a world.

## 「選択」 in 01-foundations/04-set-theory/01-basics
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 01-axioms-overview.html, 03-relations-well-orders.html, 04-ordinals.html, 05-natural-numbers.html, 06-classes-recursion.html, 09-cardinal-arithmetic.html, 10-axiom-of-choice.html, 11-cardinal-exponentiation.html, 12-cofinality.html, 13-konig.html
- Sentence: | 9 | 選択 | $\forall A\,\exists R\,(R$ は $A$ を整列する$)$ | \ref{set:ax-choice} |
  - `logic:pdl-syntax`: NG — Here "選択" refers to the set-theoretic Axiom of Choice (well-ordering), not the PDL program choice operator $\alpha\cup\beta$.

## 「部分群」 in 01-foundations/04-set-theory/01-basics
- Default: `grp:subgroup` → **no candidate fits**
- Pages: 07-cardinals.html, 10-axiom-of-choice.html
- Sentence: - *構造を保つ写像の場合*：同型の類似は一般に成り立たない。たとえば $[0,1]$ と $(0,1)$ は互いに相手の\term[部分空間]{top:subspace}に同相に埋め込めるが同相ではない（$[0,1]$ はコンパクト）。階数 2 と 3 の自由群も互いに相手の部分群として埋め込めるが同型ではない。集合という「構造のない」対象だからこそ、元ごとに $f$ と $g^{-1}$ を継ぎはぎできる。
  - `grp:subgroup`: NG — Here "部分群" refers to a subgroup of a free group in the group-theoretic sense, which matches the definition card.

## 「1 対 1」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 09-suslin-kurepa.html
- Sentence: \kappa$ の正則性と $\kappa>\omega$ から $\beta<\kappa$ で、$C(\beta)=f\restr{\beta}\notin T$ となる。逆に有限集合 $F\subseteq\kappa$ の特性関数の制限全体は道である。よって $T$ の道は $\kappa$ の有限部分集合と 1 対 1 に対応し、ちょうど $\kappa$ 本ある（\ref{set:kappa-finite-sequences}）。
  - `set:injection-surjection`: NG — Here "1 対 1 に対応し" means a bijective correspondence between two collections, not the definition of an injective function.

## 「c.c.c.」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `set:ccc-poset` → **fits: `set:ccc-space`**
- Pages: 03-martin-axiom.html
- Sentence: - 位相空間の可算鎖条件（c.c.c.）は \ref{set:ccc-space}、可算個の有限集合の Δ システム補題は \tref{set:delta-system-lemma} を参照。
  - `set:ccc-poset`: NG — This c.c.c. is the topological version (no uncountable family of pairwise disjoint nonempty open sets), not the partial-order anticchain definition on the card.
  - `set:ccc-space`: OK

## 「デデキント完備」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `set:order-dedekind-complete` → **no candidate fits**
- Pages: 07-suslin-problem.html
- Sentence: **さらに整える.** 次節で、端点を除いてデデキント完備化をとることで、端点がなく連結なススリン線が得られることを示す。
  - `set:order-dedekind-complete`: NG — It refers to the Dedekind completion construction, not the property of a linear order being Dedekind complete.

## 「ブール代数」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `set:boolean-algebra` → **no candidate fits**
- Pages: 03-martin-axiom.html, 06-ma-equivalents.html, 10-club-filter.html, 11-ulam-fodor.html
- Sentence: は、これから作りたい対象についての「部分的な情報」であり、$p\le q$ は「$p$ は $q$ より多くの情報をもつ（$q$ の言っていることをすべて言っている）」ことを表す。情報が多いほど「小さい」と書くのは強制法の慣習である。反対称律を要求しないのは、異なる条件が同じ情報を表すことを許しておくと、後で半順序からブール代数を作る（\ref{set:boolean-completion}）ときや反復強制法を扱うときに便利だからで、この一般性で余分な手間はかからない。
  - `set:boolean-algebra`: NG — This is a partial order (forcing poset) that need not be antisymmetric, whereas a Boolean algebra requires a genuine partial order with antisymmetry plus lattice, bounds, distributivity, and complements.

## 「上限」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `calc:supremum` → **no candidate fits**
- Pages: 02-ccc-spaces.html, 05-ma-reals.html, 06-ma-equivalents.html
- Sentence: $G_{i}^{0}$ に入るか否かで 2 値化される）と、$g_{\alpha}=g_{\beta}$ から「$\alpha$ 座標が $G_{\alpha}^{0}$、$\beta$ 座標が $G_{\beta}^{1}$」の基本開集合が $D$ を避ける。したがって \ref{set:hmp-theorem} の上限 $2^{\aleph_{0}}$ は最良である。
  - `calc:supremum`: NG — Here "上限" means an upper bound on a numerical value (the best possible bound), not the order-theoretic supremum of a subset as defined in the card.
  - `set:order-dedekind-complete`: NG — Here "上限" means an upper bound on a numerical value (the best possible bound), not the least upper bound of a bounded subset as defined in the card.
  - `logic:rm-analysis-defs`: NG — Here "上限" means an upper bound on a cardinal value (the best possible bound), not the supremum of a real sequence as defined in the card.

## 「下限」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `calc:supremum` → **no candidate fits**
- Pages: 04-ma-consequences.html, 06-ma-equivalents.html, 11-ulam-fodor.html
- Sentence: **極大概素族の最小の大きさ.** 無限な極大概素族の濃度の最小値を $\mathfrak{a}$ と書く。ZFC で $\aleph_{1}\le\mathfrak{a}\le2^{\aleph_{0}}$ であり（下限は \ref{set:ad-family-regular}、無限な極大概素族の存在はツォルンの補題 \tref{set:zorn} による）、この系は $\mathrm{MA}\Rightarrow\mathfrak{a}=2^{\aleph_{0}}$ を意味する。逆に $\aleph_{1}=\mathfrak{a
  - `calc:supremum`: NG — Here "下限" means a lower bound on the cardinal value (the inequality's lower end), not the order-theoretic infimum of a subset as defined in the card.

## 「全域的」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `logic:ctl-semantics` → **no candidate fits**
- Pages: 03-martin-axiom.html
- Sentence: - $D_{n}=\{p\mid n\in\dom p\}$（$n<\omega$）はすべて稠密で、すべての $D_{n}$ と交われば $f_{G}\colon\omega\to2$ は全域的な関数になる。$\varnothing$ もフィルターであり $f_{\varnothing}=\varnothing$ なので、稠密集合と交わることを要求しないと $f_{G}$ はいくらでも小さくなりうる。
  - `logic:ctl-semantics`: NG — Here "全域的" means a total function (defined on all of $\omega$), not the totality/Seriality condition on the accessibility relation $R$ in a CTL model.

## 「割り当て」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `logic:assignment` → **no candidate fits**
- Pages: 08-trees.html, 12-diamond.html
- Sentence: [F]$ なので $\ran t_{n}\cup\ran u\subseteq\ran u\cup t_{n}[F]$ であり、(iii) より $\omega\setminus(\ran u\cup\ran t_{n})$ は無限。その小さい方から $\lvert G\rvert$ 個の元を、$G$ の元に小さい順に割り当てる単射 $g\colon G\to\omega\setminus(\ran u\cup\ran t_{n})$ をとる（最小元をとるだけなので選択は要らない）。
  - `logic:assignment`: NG — Here "割り当てる" means assigning elements of G to ordinals (a bijection/ordering), not a variable assignment map v: Var → M in a structure.

## 「半順序」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `set:total-order` → **fits: `set:forcing-poset`**
- Pages: 01-almost-disjoint.html, 02-ccc-spaces.html
- Sentence: 概素族**である。後半では逆向きの現象、すなわち「小さい集合をたくさん集めると、その中に、どの 2 つの交わりも同じ集合になる大きな部分族が必ず含まれる」という **Δ システム補題**を示す。Δ システム補題は、次のページの可算鎖条件の直積の議論（\ref{set:ccc-product-finite}）や、強制法で半順序が可算鎖条件をもつことを示すときの基本的な道具である。
  - `set:total-order`: NG — Here "半順序" refers to a forcing poset (a set with a preorder/partial order used in forcing), not the strict partial order defined in the card.
  - `set:forcing-poset`: OK

## 「単調」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `comp:monotone-continuous` → **no candidate fits**
- Pages: 03-martin-axiom.html, 04-ma-consequences.html, 05-ma-reals.html, 07-suslin-problem.html, 14-partition-relations.html
- Sentence: - **$\omega$ 上の帰納法**（\ref{set:peano}）：(2) と (3) の単調性。
  - `comp:monotone-continuous`: NG — Here "単調性" refers to monotonicity of rules in an inductive definition (Peano arithmetic), not the monotonicity of a function on $\mathcal{P}(\Sigma^{\ast})^{n}$ as defined in the card.

## 「単項イデアル」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `ring:generated-ideal-def` → **no candidate fits**
- Pages: 11-ulam-fodor.html
- Sentence: **前提を変えると.** 単集合を含むという仮定を外すと成り立たない：$\alpha_{0}<\kappa$ を固定した単項イデアル $\{X\subseteq\kappa\mid\alpha_{0}\notin X\}$ は任意の完備性をもつが、正の集合はすべて $\alpha_{0}$ を含むので、2 つの交わらない正の集合すらない。
  - `ring:generated-ideal-def`: NG — Here "単項イデアル" refers to a principal ideal in the set-theoretic sense on a cardinal κ (ideals of subsets), not the ring-theoretic ideal generated by one element as defined in the card.

## 「反復」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 10-club-filter.html, 11-ulam-fodor.html
- Sentence: **Step 3（$\omega$ 回の反復）.** $\xi<\mu$ を任意にとり、$\omega$ 上の再帰（\ref{set:recursion-on-ordinal}）で $\xi_{0}=\xi$, $\xi_{n+1}=g(\xi_{n})$ と定め、$\gamma=\sup_{n<\omega}\xi_{n}$ とおく。Step 2 より $\x
  - `logic:pdl-syntax`: NG — Here "反復" means iterating a function ω times, not the PDL program iteration operator α*.

## 「可算鎖条件」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `set:ccc-poset` → **fits: `set:ccc-space`**
- Pages: 03-martin-axiom.html
- Sentence: - 位相空間の可算鎖条件（c.c.c.）は \ref{set:ccc-space}、可算個の有限集合の Δ システム補題は \tref{set:delta-system-lemma} を参照。
  - `set:ccc-poset`: NG — This is the topological c.c.c. (no uncountable family of pairwise disjoint nonempty open sets), not the partial-order anticlique definition on the card.
  - `set:ccc-space`: OK

## 「始切片」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `set:initial-segment` → **no candidate fits**
- Pages: 01-almost-disjoint.html, 09-suslin-kurepa.html, 11-ulam-fodor.html, 12-diamond.html, 13-diamond-plus.html, 14-partition-relations.html
- Sentence: ppa$ を直接扱う代わりに、$\kappa$ の**有界な**部分集合全体 $I$ を「土台」にする。$2^{<\kappa}=\kappa$ はちょうど $\lvert I\rvert=\kappa$ を意味するので、$I$ は $\kappa$ と同一視できる。$X\subseteq\kappa$ に対し、その「始切片」$X\cap\alpha$ を全部集めた $A_{X}\subseteq I$ を考えると、異なる $X,Y$ の始切片は、$X$ と $Y$ が初めて食い違う点より先では一致しえない。$\kappa=\omega$ で $X$ を 0-1 列とみれば、$I$ は有限 0-1 列の全体（二分木）、$A_{X}$ は二
  - `set:initial-segment`: NG — Here "始切片" means an initial segment $X\cap\alpha$ of a subset of an ordinal, not the set of predecessors $\mathrm{pred}(A,x,R)$ defined by a relation $R$.

## 「対称的」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `logic:relation-properties` → **no candidate fits**
- Pages: 04-ma-consequences.html, 07-suslin-problem.html
- Sentence: （第 2 項に \eqref{set:eq-ad-compatible} の前半を使った）。$r\le\langle s_{2},F_{2}\rangle$ も対称的に示される。
  - `logic:relation-properties`: NG — Here "対称的に" means "symmetrically/in the same way" (by an analogous argument), not the symmetry property of a relation.

## 「小さい集合」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `cat:universe` → **no candidate fits**
- Pages: 01-almost-disjoint.html, 10-club-filter.html, 11-ulam-fodor.html, 14-partition-relations.html, 15-luzin-sets.html
- Sentence: に素に並べれば、高々 $\kappa$ 個しかない。ところが「交わりが小さい」（濃度 $\kappa$ 未満）ことだけを要求すると、$\kappa$ の部分集合を $\kappa$ 個よりずっと多く、ときには $2^{\kappa}$ 個も並べることができる。これが**概素族**である。後半では逆向きの現象、すなわち「小さい集合をたくさん集めると、その中に、どの 2 つの交わりも同じ集合になる大きな部分族が必ず含まれる」という **Δ システム補題**を示す。Δ システム補題は、次のページの可算鎖条件の直積の議論（\ref{set:ccc-product-finite}）や、強制法で半順序が可算鎖条件をもつことを示すときの基本的な道具である。
  - `cat:universe`: NG — Here "小さい集合" is used informally to mean a set of size below a cardinal $\kappa$, not the category-theoretic notion of an element of a fixed universe $\mathcal{U}$.

## 「引き戻し」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `cat:product` → **no candidate fits**
- Pages: 06-ma-equivalents.html
- Sentence: 与えられた半順序 $\PP$ をブール完備化 $\mathbb{B}$ に埋め込み、$\mathbb{B}^{+}$ で見つけたフィルターを $\PP$ に引き戻す。難点は、引き戻した集合の 2 元が両立はするものの、共通拡大が引き戻しの中にあるとは限らないことである。そこで「$p,q$ の共通拡大であるか、どちらかと両立しない」元からなる稠密集合 $D_{pq}$ を追加で満たしておく。追加する稠密集合は $\lvert\PP\rvert^{2}$ 個なので、先に \ref{set:ma-sma
  - `cat:product`: NG — Here "引き戻す" means pulling back a filter along an embedding (inverse image), not the categorical pullback/fiber product defined in the card.

## 「強制」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `logic:ikripke-model` → **no candidate fits**
- Pages: 01-almost-disjoint.html, 02-ccc-spaces.html, 03-martin-axiom.html, 04-ma-consequences.html, 09-suslin-kurepa.html
- Sentence: れが**概素族**である。後半では逆向きの現象、すなわち「小さい集合をたくさん集めると、その中に、どの 2 つの交わりも同じ集合になる大きな部分族が必ず含まれる」という **Δ システム補題**を示す。Δ システム補題は、次のページの可算鎖条件の直積の議論（\ref{set:ccc-product-finite}）や、強制法で半順序が可算鎖条件をもつことを示すときの基本的な道具である。
  - `logic:ikripke-model`: NG — Here "強制" refers to forcing in set theory (forcing method), not the forcing relation in a Kripke model.

## 「従う」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `logic:positional-strategy` → **no candidate fits**
- Pages: 01-almost-disjoint.html, 02-ccc-spaces.html, 03-martin-axiom.html, 05-ma-reals.html, 06-ma-equivalents.html, 07-suslin-problem.html, 08-trees.html, 09-suslin-kurepa.html, 10-club-filter.html, 11-ulam-fodor.html, 12-diamond.html, 13-diamond-plus.html, 15-luzin-sets.html
- Sentence: 以上で $(\ast)_{n}$ が示され、定理が従う。
  - `logic:positional-strategy`: NG — Here "従う" means "follows (logically)" as a theorem consequence, not a play following a positional strategy.

## 「抽象」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `logic:lambda-term` → **no candidate fits**
- Pages: 06-ma-equivalents.html
- Sentence: 集合の包含・共通部分・和集合・補集合の抽象化である。「命題を含意で並べたもの」と見れば、$\wedge,\vee,-$ は論理積・論理和・否定にあたる。$\mathbf{0}\ne\mathbf{1}$ は、1 元だけの退化した代数を除くための約束で、これにより $\mathbb{B}^{+}\ne\varnothing$ となる。
  - `logic:lambda-term`: NG — Here "抽象化" means the general process of abstraction, not the lambda-calculus operation of abstraction (λx.M).

## 「推移的」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `set:transitive-set` → **fits: `logic:relation-properties`**
- Pages: 03-martin-axiom.html, 06-ma-equivalents.html, 08-trees.html, 09-suslin-kurepa.html
- Sentence: - **反射律**：Step 3。**推移律**：Step 2。**反対称律**：Step 2 で $p\ne r$ を示すのに使った。反対称律がなければ、$p\le q\le p$, $p\ne q$ のとき $p<q<p$ だが $p\not<p$ となり、$<$ は推移的でない。
  - `set:transitive-set`: NG — Here "推移的" refers to transitivity of a relation (推移律), not a transitive set.
  - `logic:relation-properties`: OK

## 「正規」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `set:normal-function` → **no candidate fits**
- Pages: 11-ulam-fodor.html
- Sentence: ppa)$。実際、閉非有界 $C_{\alpha}\subseteq X_{\alpha}$ を選べば $\mathop{\Delta}C_{\alpha}\subseteq\mathop{\Delta}X_{\alpha}$。$\kappa$ 上のフィルターで、この性質（対角共通部分で閉じていること）をもつものを**正規**という。$\kappa$ 上の正規フィルターで、すべての末端 $(\alpha,\kappa)$（$\alpha<\kappa$）を含むものは $\mathrm{Cub}(\kappa)$ を含むことが知られており、$\mathrm{Cub}(\kappa)$ はそのような正規フィルターのうち最小のものである。（末
  - `set:normal-function`: NG — Here "正規" defines a property of filters on κ (closure under diagonal intersections), not the increasing-and-continuous class function of Definition 6.13.
  - `lin:adjoint`: NG — This use of 正規 refers to normal filters on a cardinal κ, not normal operators on an inner product space.
  - `fld:normal`: NG — This use of 正規 refers to a normal filter on a cardinal κ, not a normal field extension.
  - `top:separation-axioms`: NG — Here “正規” refers to a normal filter on a cardinal κ, not the normal (T₄) separation axiom for topological spaces.

## 「測度」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `comp:cantor-measure` → **no candidate fits**
- Pages: 03-martin-axiom.html, 05-ma-reals.html, 06-ma-equivalents.html, 10-club-filter.html, 15-luzin-sets.html
- Sentence: 3. ルベーグ測度 $0$ の実数の集合を $\kappa$ 個合併しても、測度 $0$ か。
  - `comp:cantor-measure`: NG — Here "測度" refers to Lebesgue measure on the reals, not the algorithmic measure λ on Cantor space defined in the card.

## 「濃度」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `set:cardinality` → **no candidate fits**
- Pages: 01-almost-disjoint.html, 03-martin-axiom.html, 04-ma-consequences.html, 05-ma-reals.html, 06-ma-equivalents.html, 08-trees.html, 09-suslin-kurepa.html, 10-club-filter.html, 11-ulam-fodor.html, 12-diamond.html, 13-diamond-plus.html, 14-partition-relations.html, 15-luzin-sets.html
- Sentence: 互いに素な集合族は、無限の世界ではあまり多くとれない。$\kappa$ の空でない部分集合を互いに素に並べれば、高々 $\kappa$ 個しかない。ところが「交わりが小さい」（濃度 $\kappa$ 未満）ことだけを要求すると、$\kappa$ の部分集合を $\kappa$ 個よりずっと多く、ときには $2^{\kappa}$ 個も並べることができる。これが**概素族**である。後半では逆向きの現象、すなわち「小さい集合をたくさん集めると、その中に、どの 2 つの交わりも同じ集合になる大きな部
  - `set:cardinality`: NG — Here 濃度 refers to the cardinality of a set (the size κ), which matches the card's notion of cardinality, but the card defines it only for well-orderable sets via the least ordinal, whereas the sentence uses it for arbitrary cardinal comparisons; still, this is the same notion of cardinality, so it is ok.

## 「直積」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `set:cartesian-product` → **no candidate fits**
- Pages: 01-almost-disjoint.html, 02-ccc-spaces.html, 05-ma-reals.html
- Sentence: ずっと多く、ときには $2^{\kappa}$ 個も並べることができる。これが**概素族**である。後半では逆向きの現象、すなわち「小さい集合をたくさん集めると、その中に、どの 2 つの交わりも同じ集合になる大きな部分族が必ず含まれる」という **Δ システム補題**を示す。Δ システム補題は、次のページの可算鎖条件の直積の議論（\ref{set:ccc-product-finite}）や、強制法で半順序が可算鎖条件をもつことを示すときの基本的な道具である。
  - `set:cartesian-product`: NG — Here 直積 refers to a product of posets/forcing notions (the product construction in the ccc-product discussion), not the Cartesian product of two sets as defined in the card.
  - `mod:direct-sum`: NG — This "直積" refers to a product of forcing posets (set-theoretic product), not the direct product of a family of left R-modules as defined in the card.

## 「等質」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `set:partition-relation` → **no candidate fits**
- Pages: 14-partition-relations.html
- Sentence: *端等質性.* $i<j_{1}<\cdots<j_{n}$ なら $a_{j_{1}},\dots,a_{j_{n}}\in B_{i+1}$ なので、$f(\{a_{i},a_{j_{1}},\dots,a_{j_{n}}\})=f_{i}(\{a_{j_{1}},\dots,a_{j_{n}}\})=c_{i}$。すなわ
  - `set:partition-relation`: NG — This "端等質性" (end-homogeneity) is a different, specialized notion about sequences and colorings, not the card's definition of a subset $H$ being homogeneous for a coloring $f$.

## 「素イデアル」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `ring:prime-maximal-def` → **no candidate fits**
- Pages: 11-ulam-fodor.html
- Sentence: **弱到達不能基数では.** 証明は後続基数であることを本質的に使う。非可算基数 $\kappa$ 上に、単集合を含む $\kappa$-完備な**素イデアル**（双対が超フィルター）が存在するとき $\kappa$ を**可測基数**という。上の定理（の系 \ref{set:ulam-no-ultrafilter}）により可測基数は後続基数でなく、実際には強到達不能であって、その存在は ZFC では証明できない（\ref[可測基数]{set:measurable-card
  - `ring:prime-maximal-def`: NG — This is a set-theoretic ideal on a cardinal (a κ-complete prime ideal), not an ideal of a commutative ring as in the definition.

## 「落ちる」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `comp:ml-test` → **no candidate fits**
- Pages: 07-suslin-problem.html
- Sentence: このように「c.c.c. をもたない」か「可分である」かのどちらかに落ちる例ばかりで、ZFC の中で具体的なススリン線を作ることはできない（\ref{set:suslin-independence}）。
  - `comp:ml-test`: NG — Here "落ちる" means "falls into one of two cases," not failing a Martin-Löf test.

## 「要求」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `logic:ctl-successor-def` → **no candidate fits**
- Pages: 01-almost-disjoint.html, 03-martin-axiom.html, 04-ma-consequences.html, 08-trees.html, 10-club-filter.html, 11-ulam-fodor.html, 12-diamond.html, 13-diamond-plus.html
- Sentence: 互いに素な集合族は、無限の世界ではあまり多くとれない。$\kappa$ の空でない部分集合を互いに素に並べれば、高々 $\kappa$ 個しかない。ところが「交わりが小さい」（濃度 $\kappa$ 未満）ことだけを要求すると、$\kappa$ の部分集合を $\kappa$ 個よりずっと多く、ときには $2^{\kappa}$ 個も並べることができる。これが**概素族**である。後半では逆向きの現象、すなわち「小さい集合をたくさん集めると、その中に、どの 2 つの交わりも同じ集合になる大きな部分族が必ず含まれる」という **Δ シス
  - `logic:ctl-successor-def`: NG — Here「要求する」means "require/demand" in general set theory, not the modal-logic technical term "要求" (a negated AX formula's requirement) defined in the card.

## 「辞書式順序」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `set:well-order-sum-product-def` → **no candidate fits**
- Pages: 02-ccc-spaces.html, 07-suslin-problem.html, 09-suslin-kurepa.html
- Sentence: n,t)\mid n<\omega,\ t\in{}^{({}^{n}2)}\omega\}$ が可算であることを示せば、$E$ はその像なので可算である（可算集合 $T$ の単射 $T\to\omega$ を使い、各点に番号が最小の添字を対応させれば単射 $E\to\omega$ が得られる）。${}^{n}2$ を辞書式順序で $u_{0},\dots,u_{2^{n}-1}$ と並べ、$(n,t)$ に長さ $2^{n}$ の列 $\langle t(u_{0}),\dots,t(u_{2^{n}-1})\rangle\in{}^{<\omega}\omega$ を対応させる。列の長さから $n$ が、成分から $t$ が復元できるので
  - `set:well-order-sum-product-def`: NG — It refers to the lexicographic order on finite binary sequences, not the order on a product $A\times B$ defined by the card.
  - `top:double-arrow`: NG — The sentence uses 辞書式順序 for the lexicographic order on the finite set ${}^{n}2$, not for the lexicographic order on $[0,1]\times\{0,1\}$ defining the double arrow space.

## 「近傍」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `top:neighborhood` → **no candidate fits**
- Pages: 02-ccc-spaces.html, 05-ma-reals.html, 07-suslin-problem.html
- Sentence: は、2 つの元の交わりが、同じ $a$ についてなら $\{a\}\cup(a\setminus(F\cup F'))$、異なる $a,b$ についてなら有限集合 $a\cap b$ の部分集合（単集合 $\{n\}$ の和）になるからである。各 $a\in\mathcal{A}$ は無限集合なので、$a$ のどの基本近傍も $\omega$ の点を含み、$\omega$ は可算稠密である。よって $\Psi$ は可分で、\ref{set:separable-ccc} により c.c.c. をもつ。一方 $\mathcal{A}=\Psi\setminus\omega$ は（$\omega$ が開集合なので）閉集合で、各 $a$ につい
  - `top:neighborhood`: NG — Here "基本近傍" (basic neighborhood) refers to a local base element in the Ψ-space construction, not the general topological notion of neighborhood of a point defined in the card.

## 「連結」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `set:concatenation` → **fits: `top:connected`**
- Pages: 07-suslin-problem.html
- Sentence: 2. ススリン線があれば、稠密で、空でないどの開集合も可分でないススリン線がある。さらに、端点がなく連結なススリン線がある。
  - `set:concatenation`: NG — Here "連結" means connectedness of a topological space, not concatenation of sequences.
  - `pt:sequence-operations`: NG — This "連結" means connected (topological connectedness), not concatenation of finite sequences.
  - `top:connected`: OK

## 「連続関数」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `calc:function-limit` → **fits: `cx:limit-continuity`**
- Pages: 11-ulam-fodor.html
- Sentence: **$\omega_{1}$ 上の連続関数は最終的に定数.** （AC）$\omega_{1}$ に順序位相（\ref{top:order-topology}）を入れ、$F\colon\omega_{1}\to\R$ を連続とする。このとき、ある $\beta<\omega_{1}$ について $F$ は $(\beta,\omega_{1})$ 上で定数であ
  - `calc:function-limit`: NG — This is continuity in the order topology on the ordinal $\omega_{1}$, not the real-analysis $\varepsilon$-$\delta$ continuity of a function $f\colon D\to\mathbb{R}$ defined on a subset of $\mathbb{R}$.
  - `logic:rm-continuous-code`: NG — This "連続関数" is a continuous function between topological spaces (ordinal $\omega_{1}$ with order topology to $\mathbb{R}$), not the real-valued function with a "sign" $\Phi$ defined in the card.
  - `cx:limit-continuity`: OK

## 「選択」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 01-almost-disjoint.html, 02-ccc-spaces.html, 03-martin-axiom.html, 05-ma-reals.html, 06-ma-equivalents.html, 07-suslin-problem.html, 08-trees.html, 09-suslin-kurepa.html, 10-club-filter.html, 11-ulam-fodor.html, 12-diamond.html, 13-diamond-plus.html, 14-partition-relations.html
- Sentence: **(1)** 各 $D\in\mathcal{D}$ は空でない順序数の集合なので最小元 $\min D$ をもつ。$m\colon\mathcal{D}\to\kappa$, $D\mapsto\min D$ と定める（最小元をとるだけなので選択は要らない）。$D\ne D'$ なら $D\cap D'=\varnothing$ なので $\min D\ne\min D'$。よって $m$ は単射であり、$\lvert\mathcal{D}\rvert\le\kappa$。
  - `logic:pdl-syntax`: NG — Here "選択" refers to the axiom of choice, not the PDL program choice operator α∪β.

## 「部分和」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `calc:series` → **no candidate fits**
- Pages: 05-ma-reals.html
- Sentence: **一般化.** 同じ半順序を使うと、$\mathrm{MA}(\kappa)$ のもとで $\kappa$ 個のルベーグ可測集合の和は可測であり、その測度は可算個の部分和の測度に等しいことも示せる（Kunen 第 II 章 演習 25）。\ref{set:ma-baire} と本定理は、第一類集合のイデアルと測度 $0$ 集合のイデアルの**加法性**（それに属さない和を作るのに必要な最小の個数）がともに $2^{\aleph_{0}}$ であることを、MA のもとで主張している。
  - `calc:series`: NG — Here "部分和" refers to partial sums of an uncountable (κ-fold) sum of measurable sets, not the partial sums of a real series as defined in the card.

## 「順序同型」 in 01-foundations/04-set-theory/02-infinitary-combinatorics
- Default: `set:order-isomorphism` → **no candidate fits**
- Pages: 01-almost-disjoint.html, 07-suslin-problem.html, 08-trees.html, 09-suslin-kurepa.html, 10-club-filter.html, 12-diamond.html
- Sentence: - 順序数の集合 $x$ は $\in$ で整列されるので、順序型 $\operatorname{type}(x)$（\ref{set:order-type}）と、順序同型 $\operatorname{type}(x)\to x$ がただ一つ定まる（\ref{set:ordinal-type}, \ref{set:well-order-iso-unique}）。この同型による $\xi$ の像を $x$ の **$\xi$ 番目の元** と呼び $x(\xi)$ と書く（$0$ 番目が
  - `set:order-isomorphism`: NG — the card defines 順序同型 as an isomorphism between any two relational structures, while the sentence uses it for the specific order-isomorphism between an ordinal and a well-ordered set, which is a special case and thus acceptable—wait, that means it is ok.

## 「全射」 in 01-foundations/04-set-theory/03-well-founded-sets
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 02-size-of-wf.html, 06-mostowski.html
- Sentence: - *全射*：$t_{n}$ は狭義増加なので $t_{n}\ge n$、したがって $m<\omega$ は $m<t_{m+1}$ を満たし、$m\in\ran F_{m+1}\subseteq\ran F$。
  - `set:injection-surjection`: NG — This sentence does not use the term 全射 as a mathematical notion at all; it merely appears as a label, so it cannot carry the card's definition.

## 「再帰的」 in 01-foundations/04-set-theory/03-well-founded-sets
- Default: `comp:partial-recursive` → **no candidate fits**
- Pages: 01-cumulative-hierarchy.html, 05-wf-recursion.html, 06-mostowski.html
- Sentence: (3) はランクを「元のランクから再帰的に計算する規則」として述べたもので、実際のランクの計算はほとんどこれで行う。$\rank(y)$ は「$y$ のどの元よりも真に大きい最小の順序数」である。
  - `comp:partial-recursive`: NG — Here "再帰的" means "recursively (step by step)" in the sense of a recursive procedure, not the computability-theoretic notion of a relation being recursive (general recursive characteristic function).

## 「割り当て」 in 01-foundations/04-set-theory/03-well-founded-sets
- Default: `logic:assignment` → **no candidate fits**
- Pages: 02-size-of-wf.html, 05-wf-recursion.html
- Sentence: **濃度への応用.** $A\in\mathbf{WF}$ に対し $\{B\in\mathbf{WF}\mid B\approx A\}_{\min}$ は AC なしで定義でき、$A\approx B\iff$ 両者が一致する。これにより整列可能とは限らない集合にも「濃度」を割り当てられる（\ref{set:page-choice} の補足で触れた方法）。基礎の公理のもとでは $\mathbf{WF}=\mathbf{V}$ なので、すべての集合に適用できる。同様に「群の同型類」「順序型」なども集合として扱える。
  - `logic:assignment`: NG — Here "割り当てる" means assigning a cardinality to a set, not the first-order logic notion of a variable assignment map $v\colon\mathrm{Var}\to M$.

## 「反復」 in 01-foundations/04-set-theory/03-well-founded-sets
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 03-well-founded-relations.html
- Sentence: に含まれることは証明できないとされている（A. R. D. Mathias, *The strength of Mac Lane set theory*, Ann. Pure Appl. Logic 110 (2001) で扱われている話題。本サイトでは原典の該当箇所を未確認）。推移閉包の存在は、$\omega$ 回の反復をひとまとめにする置換公理に本質的に依存している。
  - `logic:pdl-syntax`: NG — Here "反復" refers to iterating an operation ω times in set theory, not the PDL program iteration operator α*.

## 「合成」 in 01-foundations/04-set-theory/03-well-founded-sets
- Default: `set:relation-composition` → **no candidate fits**
- Pages: 02-size-of-wf.html
- Sentence: - $\mathcal{B}\to\mathcal{P}(t)$, $S\mapsto S\setminus\{t\}$ は全単射（逆写像は $T\mapsto T\cup\{t\}$）。これと $b_{t}$、および $k\mapsto2^{t}+k$ を合成したものが $b_{t+1}\restr{\mathcal{B}}$ である。$k\mapsto2^{t}+k$ は単射（左簡約律 \ref{set:ordinal-addition-laws.6}）で、$2^{t}=\{k\mid k<2^{t}\}$ を $C=\{2^{t}+k\mid k<2^{t}\}$ の上
  - `set:relation-composition`: NG — Here "合成" refers to composition of functions/maps, which is a special case of the relation composition defined in the card, so it matches the same notion.
  - `logic:while-program`: NG — Here "合成" means composition of functions/maps, not the sequential composition of while-programs defined in the card.
  - `cat:category`: NG — Here "合成" refers to composing functions (ordinary function composition), not the composition operation of morphisms in a category as defined in the card.
  - `cat:non-symmetric-operad`: NG — Here "合成" means ordinary composition of functions/maps, not the operad composition operation γ defined in the card.

## 「大域的な条件」 in 01-foundations/04-set-theory/03-well-founded-sets
- Default: `logic:ltl-hintikka` → **no candidate fits**
- Pages: 04-foundation.html
- Sentence: **大域的な条件.** 基礎の公理は「空でないどの集合にも $\in$-極小元がある」、すなわち「$\in$ をどこまでも下へたどり続けることはできない」という主張で、$\in$ の鎖全体を一度に見ないと確かめられない。証明ではこれを**最小反例法**として使う：「悪い点」全体のなす $A$ の部分集合が空でなければ、その中に $\i
  - `logic:ltl-hintikka`: NG — This sentence uses "大域的な条件" for a property of the entire membership chain in set theory, not for the Hintikka sequence condition H4 defined in the card.

## 「対の公理」 in 01-foundations/04-set-theory/03-well-founded-sets
- Default: `set:ax-pairing` → **no candidate fits**
- Pages: 01-cumulative-hierarchy.html, 02-size-of-wf.html, 03-well-founded-relations.html, 04-foundation.html, 05-wf-recursion.html
- Sentence: - **置換公理**（上限の存在）、**和集合の公理・対の公理・冪集合の公理・分出公理**（各集合の存在。${}^{y}x$ の存在には冪集合の公理を使う：\ref{set:function-set}）。
  - `set:ax-pairing`: NG — The card states a weak pairing axiom (existence of a set containing both x and y), but the sentence lists 対の公理 as a standard axiom for constructing sets, which is the usual pairing axiom; the card's formulation is a nonstandard weak version, so the meaning differs.

## 「従う」 in 01-foundations/04-set-theory/03-well-founded-sets
- Default: `logic:positional-strategy` → **no candidate fits**
- Pages: 01-cumulative-hierarchy.html, 02-size-of-wf.html, 03-well-founded-relations.html, 04-foundation.html, 05-wf-recursion.html, 06-mostowski.html
- Sentence: - 体系の略号は \ref{set:zf-subsystems} に従う。$\ZF^{-}$ は $\ZF$ から基礎の公理を除いたもの、$\ZF^{-}-\mathrm{P}$ はさらに冪集合の公理を除いたものである。本ページの結果はすべて $\ZF^{-}$ で示す（選択公理は使わない）。累積階層の定義そのものが\ref{set:ax-power-set}を使う。
  - `logic:positional-strategy`: NG — Here "従う" means "follows/according to (a convention or reference)", not the game-theoretic notion of a play following a positional strategy.

## 「抽象」 in 01-foundations/04-set-theory/03-well-founded-sets
- Default: `logic:lambda-term` → **no candidate fits**
- Pages: 02-size-of-wf.html
- Sentence: $R(\alpha)$ と整礎集合のクラス $\mathbf{WF}$ を導入した。本ページでは、通常の数学で使う対象がすべて $\mathbf{WF}$ の中にあることを確かめる。具体的な対象（整数・有理数・実数・複素数）は $R(\omega+\omega)$ という比較的低い段階に入っており、群や位相空間のような抽象的な対象も、選択公理のもとで $\mathbf{WF}$ の中に同型なコピーをもつ。あわせて累積階層の各段階の大きさを求める：$R(n)$ は有限、$R(\omega)$ は可算（選択公理なしで、しかも具体的な全単射がある）、そして選択公理のもとで $\lvert R(\omega+\alpha)\rvert=\bet
  - `logic:lambda-term`: NG — Here "抽象的な対象" means abstract objects in general mathematics, not lambda abstraction.

## 「有限集合」 in 01-foundations/04-set-theory/03-well-founded-sets
- Default: `set:finite-set` → **no candidate fits**
- Pages: 01-cumulative-hierarchy.html, 02-size-of-wf.html, 04-foundation.html
- Sentence: $R(3)$ から初めて順序数でない元 $\{1\}=\{\{\varnothing\}\}$ が現れる。$R(4)$ は $R(3)$ の $16$ 個の部分集合からなる（\ref{set:r-n-finite}）。$R(\omega)=\bigcup_{n<\omega}R(n)$ は**遺伝的有限集合**全体であり、$R(\omega+1)=\mathcal{P}(R(\omega))$ はすでに非可算である。
  - `set:finite-set`: NG — the term "遺伝的有限集合" (hereditarily finite set) is a different notion from "有限集合" (finite set); the card defines finite sets, not hereditary finiteness.

## 「測度」 in 01-foundations/04-set-theory/03-well-founded-sets
- Default: `comp:cantor-measure` → **no candidate fits**
- Pages: 02-size-of-wf.html
- Sentence: **一般化.** 証明は群・位相空間に特有のことを何も使っていない。台集合 $A$ と、$A$ の元・部分集合・有限直積の部分集合などから作られる構造（環・体・順序集合・測度空間・多様体…）は、$A$ が整列可能であれば（AC がなくても）同じ方法で $\mathbf{WF}$ の中に同型なコピーをもつ。より一般に、$A$ が $\mathbf{WF}$ のある元と対等であれば十分である。
  - `comp:cantor-measure`: NG — Here "測度空間" (measure space) refers to a general structure/type of mathematical object, not the specific notion of measure λ defined in the card.

## 「結び」 in 01-foundations/04-set-theory/03-well-founded-sets
- Default: `set:boolean-algebra` → **no candidate fits**
- Pages: 03-well-founded-relations.html
- Sentence: 本ページでは、まず整礎関係を定義して基本性質を確かめ、それが整礎集合とどう結びつくかを調べる。$A\in\mathbf{WF}$ なら $\in$ は $A$ 上で整礎であるが、逆は一般には成り立たない。逆が成り立つのは $A$ が推移的なときであり、一般の $A$ については、$A$ を含む最小の推移的集合である**推移閉包** $\operatorname{trcl}(A)$ に移って判定す
  - `set:boolean-algebra`: NG — Here "結びつく" is the verb "to connect/link," not the lattice-theoretic join (supremum) defined in the card.

## 「要求」 in 01-foundations/04-set-theory/03-well-founded-sets
- Default: `logic:ctl-successor-def` → **no candidate fits**
- Pages: 03-well-founded-relations.html, 04-foundation.html
- Sentence: $R\subseteq A\times A$ を要求しないのは、$\in$ のように $A$ の外にも広がっている関係をそのまま扱うためである。実際に効いてくるのは $R$ の $A$ 上の部分 $R\cap(A\times A)$ だけである（\ref{set:wf-relation-basic.2}）。
  - `logic:ctl-successor-def`: NG — Here "要求" is the verb "require/demand" (the relation does not require R⊆A×A), not the modal-logic notion of a "request" formula at a world.

## 「選択」 in 01-foundations/04-set-theory/03-well-founded-sets
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 02-size-of-wf.html, 04-foundation.html, 05-wf-recursion.html, 06-mostowski.html
- Sentence: $h\colon R(n)\to t_{n}$ を全単射とする（存在を仮定した一つの写像をとるだけで、選択は行わない）。$X\mapsto h[X]$ は $\mathcal{P}(R(n))$ から $\mathcal{P}(t_{n})$ への全単射であり（逆写像は $Y\mapsto h^{-1}[Y]$）、\ref{set:binary-expansion} の $b_{t_{n}}$ と合成すると、全単射 $R(
  - `logic:pdl-syntax`: NG — Here "選択" refers to the axiom of choice (choosing a map), not the PDL program choice operator α∪β.

## 「コンパクト」 in 01-foundations/04-set-theory/04-consistency-proofs
- Default: `top:compact` → **no candidate fits**
- Pages: 06-appendices.html
- Sentence: と定める。$S\vdash\lnot\mathrm{CON}(\ulcorner S\urcorner)$（$\ulcorner\ZF\urcorner\subseteq\ulcorner S\urcorner$ なので）であり、すべての有限部分がモデルをもてば形式化された健全性とコンパクト性から $\mathrm{CON}(\ulcorner S\urcorner)$ となるので、この最大値は存在する。反映定理（\ref{set:reflection-axioms}）と \ref{set:relativization-vs-satisfaction} より、標準的な各 $n$ について $S\vdash
  - `top:compact`: NG — Here "コンパクト性" refers to the compactness theorem of first-order logic, not topological compactness of a space.

## 「再帰的」 in 01-foundations/04-set-theory/04-consistency-proofs
- Default: `comp:partial-recursive` → **no candidate fits**
- Pages: 06-appendices.html
- Sentence: メタの理論で $\varphi$ の構成に関する帰納法を行う（各段階は一つの $\ZF$ の定理である）。形式化された充足関係 $\models$ の再帰的な定義の各節（素論理式、$\lnot$、$\land$、$\exists$）が、相対化の定義の各節とちょうど対応する。$\exists x\,\psi$ の段では、$\models$ の定義の「ある $a\in M$ で $s$ を $a$ で延長した割り当てについて $\psi$ が真」と、$\exists x\,(
  - `comp:partial-recursive`: NG — Here "再帰的" describes a recursive definition of the satisfaction relation, not a relation whose characteristic function is general recursive as defined in the card.

## 「単射」 in 01-foundations/04-set-theory/04-consistency-proofs
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 02-absoluteness.html, 03-more-absoluteness.html, 04-h-kappa.html, 05-reflection.html
- Sentence: - (h) $R$ は単射
  - `set:injection-surjection`: NG — Here 単射 is applied to a relation $R$, not to a function $f\colon A\to B$ as in the card's definition.

## 「単調」 in 01-foundations/04-set-theory/04-consistency-proofs
- Default: `comp:monotone-continuous` → **no candidate fits**
- Pages: 05-reflection.html
- Sentence: - 条件 1 は Step 1 の単調性と Step 2（$\vec{y}$ を一つの $\mathbf{Z}(\xi)$ に集める）で、条件 2 は Step 2 で $\mathbf{Z}(\beta)$ の元がより前の段階に現れることに、条件 3 は $G_{i}$ の定義（最小の $\eta$ の存在）で使った。
  - `comp:monotone-continuous`: NG — the sentence uses "単調性" as a property of a step in a proof, not the monotonicity of a function on power sets as defined in the card.

## 「反復」 in 01-foundations/04-set-theory/04-consistency-proofs
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 05-reflection.html
- Sentence: る。$\mathbf{V}$ 全体を一つの集合で表すことはできないが、有限の言明は有限の情報しか要求しないので、十分遠くまで累積階層を登れば、その言明に必要な証人がすべてそろった段階に行き着く。証明の構造は、各言明の証人の現れる段階を関数 $F_{i}$ で測り、その「不動点」$\beta$ を $\omega$ 回の反復で作るという、順序数上の正規関数の不動点の構成と同じ形である（\ref{set:prob-reflection-club} は、その不動点全体が閉非有界集合をなすことに対応する）。モデル理論の言葉では、$R(\beta)$ や可算な $A$ は、与えられた有限個の論理式について $\mathbf{V}$ の「初等部分構
  - `logic:pdl-syntax`: NG — Here "反復" means iterating an operation ω times on ordinals, not the PDL program iteration operator α*.

## 「合成」 in 01-foundations/04-set-theory/04-consistency-proofs
- Default: `set:relation-composition` → **no candidate fits**
- Pages: 02-absoluteness.html, 03-more-absoluteness.html, 05-reflection.html
- Sentence: 第一・第三の同値は、合成した式の展開 $\exists\vec{u}\,(\bigwedge_{i}u_{i}=G_{i}(\vec{y})\land\varphi(\vec{u}))$ を相対化したものと、$\forall\vec{y}\,\exists!u\,(u=G_{i}(\vec{y}))$ が $\mathbf{M}$, $\ma
  - `set:relation-composition`: NG — Here "合成" refers to composing/substituting formulas (a syntactic operation on expressions), not the composition of two relations as defined in the card.
  - `logic:while-program`: NG — Here "合成" refers to composing formulas/functions (substitution into an expression), not the sequential composition of while-programs defined in the card.
  - `cat:category`: NG — This "合成" refers to composing formulas (substitution/expansion of a composed expression), not the composition of morphisms defined in the category card.
  - `cat:non-symmetric-operad`: NG — Here "合成" refers to composing formulas/functions in model theory, not the operad composition operation γ defined in the card.

## 「強制」 in 01-foundations/04-set-theory/04-consistency-proofs
- Default: `logic:ikripke-model` → **no candidate fits**
- Pages: 02-absoluteness.html, 05-reflection.html
- Sentence: *関連する結果.** 冪集合や基数であることのような、本質的に非有界な量化を含む概念は絶対的でない。これが独立性の証明で重要になる：小さなモデル $\mathbf{M}$ の中で「可算」と「非可算」が $\mathbf{V}$ と食い違うこと（スコーレムの逆説、\ref{logic:skolem-paradox}）が、強制法などの議論の出発点となる。
  - `logic:ikripke-model`: NG — Here "強制" refers to forcing (set theory), not the Kripke-model forcing relation defined in the card.

## 「従う」 in 01-foundations/04-set-theory/04-consistency-proofs
- Default: `logic:positional-strategy` → **no candidate fits**
- Pages: 02-absoluteness.html, 04-h-kappa.html, 05-reflection.html
- Sentence: 第一の同値は、相対化 $\exists x\,(\mathbf{M}(x)\land x\in y\land\varphi^{\mathbf{M}})$ で、$\mathbf{M}$ が推移的なので $x\in y$ から $\mathbf{M}(x)$ が従うことによる。第二は $\varphi$ の絶対性（$x\in y\in\mathbf{M}$ なので $x\in\mathbf{M}$）。第三は $\mathbf{N}$ の推移性による。
  - `logic:positional-strategy`: NG — Here "従う" means "follows logically" (is implied), not a play following a positional strategy.

## 「推移的」 in 01-foundations/04-set-theory/04-consistency-proofs
- Default: `set:transitive-set` → **fits: `logic:relation-properties`**
- Pages: 01-relativization.html, 02-absoluteness.html, 03-more-absoluteness.html, 04-h-kappa.html, 05-reflection.html, 06-appendices.html
- Sentence: 、しかもゲーデルの第二不完全性定理により $\ZF$ の中では形式化できない。しかし同じ考え方を**相対化**として定式化すると、「$\ZF^{-}$ が無矛盾なら $\ZF$ も無矛盾」のような**相対無矛盾性**の結果が得られる。本ページでは、論理式のクラスへの相対化を定義し、相対無矛盾性の基本補題を示したうえで、推移的なクラスで各公理が成り立つための簡単な十分条件を与え、$\mathbf{WF}$ と $R(\omega)$ が $\ZF-\mathrm{Inf}$ のモデルであることを示す。無限公理は定義された記号 $0$ と $S$ を含むので、その扱いは絶対性（次ページ）を待つ。（Kunen 第 IV 章 §1–2 に対応する
  - `set:transitive-set`: NG — Here "推移的なクラス" refers to a transitive class (a class closed under elements), not a transitive set as defined in the card; the notion is analogous but the card defines it specifically for sets.
  - `logic:relation-properties`: OK

## 「有限集合」 in 01-foundations/04-set-theory/04-consistency-proofs
- Default: `set:finite-set` → **no candidate fits**
- Pages: 01-relativization.html, 02-absoluteness.html, 03-more-absoluteness.html, 04-h-kappa.html
- Sentence: 2. $R(\omega)$（遺伝的有限集合）の中では、無限公理以外の $\ZF$ の公理と、無限公理の否定が真である。したがって $\ZF-\mathrm{Inf}\nvdash\mathrm{Inf}$：無限公理は他の公理から独立である。
  - `set:finite-set`: NG — “遺伝的有限集合” (hereditarily finite set) is a different notion from a finite set as defined by |A|<ω.

## 「濃度」 in 01-foundations/04-set-theory/04-consistency-proofs
- Default: `set:cardinality` → **no candidate fits**
- Pages: 04-h-kappa.html, 05-reflection.html
- Sentence: $\ZFC$ の中で、冪集合公理以外の $\ZFC$ の公理を満たす**集合**のモデルを作る重要な方法を述べる。無限基数 $\kappa$ について、推移閉包の濃度が $\kappa$ 未満である集合全体を $H(\kappa)$ とする。$\kappa$ が非可算な正則基数なら $H(\kappa)$ は $\ZFC-\mathrm{P}$ のモデルであり、さらに $\ZFC$ のモデルになるのは $\kappa$ が強到達不能であるときに限る。応用として、冪集合公理が他の公理
  - `set:cardinality`: NG — Here 濃度 refers to the cardinality of a set's transitive closure, which is the same notion defined in the card (the least ordinal equinumerous with a well-orderable set), just applied to a particular set.

## 「無限集合」 in 01-foundations/04-set-theory/04-consistency-proofs
- Default: `set:finite-set` → **no candidate fits**
- Pages: 06-appendices.html
- Sentence: - 証明は、\ref{set:interpretation-proof} を有限的に示しておけば全体として有限的である。したがって $S,T$ が実効的に与えられていれば、$S,T$ が無限集合を扱う理論であっても、相対無矛盾性の証明は完全に有限的に行える（「$T$ の矛盾の導出」を「$S$ の矛盾の導出」から具体的に作る手続きになる）。
  - `set:finite-set`: NG — Here "無限集合" refers to sets in an infinite theory/domain, not the defined notion of a set that is not finite (無限).

## 「真理値」 in 01-foundations/04-set-theory/04-consistency-proofs
- Default: `logic:truth-assignment` → **fits: `set:truth-value`**
- Pages: 04-h-kappa.html
- Sentence: いて絶対的である。問題は $\exists f$ という有界でない量化だが、\ref{set:h-kappa-functions} より、$\mathbf{M}$ の元の間の関数はすべて $\mathbf{M}$ に属するので、$\exists f$ を $\exists f\in\mathbf{M}$ に置き換えても真理値は変わらない。これを使って $\alpha<\kappa$ について順に確かめる。
  - `logic:truth-assignment`: NG — Here "真理値" refers to the truth value of a set-theoretic statement under a model/forcing interpretation, not the recursively defined truth value $\bar{v}(\varphi)$ of a propositional formula under an assignment $v$.
  - `set:truth-value`: OK

## 「要求」 in 01-foundations/04-set-theory/04-consistency-proofs
- Default: `logic:ctl-successor-def` → **no candidate fits**
- Pages: 01-relativization.html, 05-reflection.html, 06-appendices.html
- Sentence: 「$\ZF$ は無矛盾である。なぜなら、変数が整礎集合を動くと読めば公理はすべて真だから」という議論は、そのままでは $\mathbf{WF}$ という対象の存在を信じることを要求し、しかもゲーデルの第二不完全性定理により $\ZF$ の中では形式化できない。しかし同じ考え方を**相対化**として定式化すると、「$\ZF^{-}$ が無矛盾なら $\ZF$ も無矛盾」のような**相対無矛盾性**の結果が得られる。本ページでは、論理式のクラスへの相対化を定義し、相対無矛盾性の基本補題を示したうえで
  - `logic:ctl-successor-def`: NG — This "要求" means "requires/demands" in ordinary prose, not the modal-logic technical notion of a requirement (a negated formula) defined in the card.

## 「証人」 in 01-foundations/04-set-theory/04-consistency-proofs
- Default: `comp:mr-witness` → **no candidate fits**
- Pages: 05-reflection.html
- Sentence: 条件 2 は「$\mathbf{N}$ の中に証人がいるなら、$\mathbf{M}$ の中にも（$\mathbf{N}$ の目で見て正しい）証人がいる」という $\mathbf{M}$ の閉包条件である。右辺に現れる相対化はすべて $\mathbf{N}$ への相対化であり、$\mathbf{M}$ での真偽は現れない。これが判定法の使いやすさの理由である。
  - `comp:mr-witness`: NG — Here "証人" (witness) is used in the sense of a witness for a closure condition in a relativization argument, not the Miller–Rabin compositeness witness defined in the card.

## 「選択」 in 01-foundations/04-set-theory/04-consistency-proofs
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 04-h-kappa.html, 05-reflection.html, 06-appendices.html
- Sentence: - **選択.** \ref{set:ax-choice}は「すべての集合は整列可能」なので、$\forall A\in\mathbf{M}\,\exists R\in\mathbf{M}\,(R\text{ は }A\text{ を整列する})^{\mathbf{M}}$ を示せばよい。$A\in\mathbf{M}$ とし、$
  - `logic:pdl-syntax`: NG — Here "選択" refers to the axiom of choice (set-theoretic choice), not the PDL program choice operator α∪β defined in the card.

## 「部分体」 in 01-foundations/04-set-theory/04-consistency-proofs
- Default: `fld:extension` → **no candidate fits**
- Pages: 01-relativization.html, 04-h-kappa.html
- Sentence: - 集合論の言語（\ref{set:first-order-language}）の基本記号は $\land,\lnot,\exists,\in,=$ で、$\forall,\lor,\to$ や有界量化子は略記（\ref{set:formula-abbreviations}）。公理と部分体系の略号は \ref{set:zfc}, \ref{set:zf-subsystems} のとおり。形式的証明と $\mathrm{Con}(S)$ は \ref{set:formal-deduction}、解釈（構造）と健全性は \ref{set:interpretation}, \ref{set:model-con
  - `fld:extension`: NG — Here "部分体系" (subsystem) refers to a subsystem of axioms, not a subfield of a field.

## 「部分対象」 in 01-foundations/04-set-theory/04-consistency-proofs
- Default: `cat:subobject` → **no candidate fits**
- Pages: 01-relativization.html
- Sentence:  にある）ので、「部分集合」「対」などの素朴な概念は $\mathbf{V}$ と同じ意味になる。相対無矛盾性の証明は、住人の宇宙が $S$ を満たすことを示すことで、$S$ に「一つの世界」を与える、というモデル構成の最も素朴な形である。圏論的には、$\mathbf{M}$ への相対化は $\mathbf{V}$ の部分対象への制限で、推移性は「部分対象が元の取り方（$\in$）に関して閉じている」という条件にあたる。
  - `cat:subobject`: NG — Here "部分対象" refers to a subobject in the category-theoretic sense (a class/restriction of the universe $\mathbf{V}$), which matches the card's definition of subobject as an equivalence class of monomorphisms into an object.

## 「部分集合」 in 01-foundations/04-set-theory/04-consistency-proofs
- Default: `set:subset` → **no candidate fits**
- Pages: 01-relativization.html, 02-absoluteness.html, 03-more-absoluteness.html, 04-h-kappa.html, 05-reflection.html, 06-appendices.html
- Sentence: **関連する結果.** 相対化は、一階述語論理でいう**部分構造**（定義可能な部分集合への制限）への翻訳である（\ref{set:relativization-substructure}）。$\in$ も読み替える一般の翻訳（相対的解釈）は IV-06 で扱う予定。
  - `set:subset`: NG — Here "部分集合" refers to a definable subset used to form a substructure, not the subset relation $A\subseteq B$ defined in the card.

## 「集合の存在」 in 01-foundations/04-set-theory/04-consistency-proofs
- Default: `set:ax-set-existence` → **no candidate fits**
- Pages: 01-relativization.html, 04-h-kappa.html, 05-reflection.html
- Sentence: 3. $\{0\}$ の中では、外延性の公理・分出公理と「すべての集合は空」が真である。したがってこれら二つの公理だけからは空でない集合の存在は導けない。
  - `set:ax-set-existence`: NG — the sentence discusses non-empty set existence, not the axiom asserting some set exists.

## 「非有界」 in 01-foundations/04-set-theory/04-consistency-proofs
- Default: `set:cofinal-map` → **no candidate fits**
- Pages: 02-absoluteness.html, 05-reflection.html
- Sentence: **関連する結果.** 冪集合や基数であることのような、本質的に非有界な量化を含む概念は絶対的でない。これが独立性の証明で重要になる：小さなモデル $\mathbf{M}$ の中で「可算」と「非可算」が $\mathbf{V}$ と食い違うこと（スコーレムの逆説、\ref{logic:skolem-paradox}）が、強制法などの議論の出発点となる。
  - `set:cofinal-map`: NG — Here "非有界な量化" means unbounded quantification (over a proper class), not a subset of an ordinal being unbounded in it as defined in the card.

## 「始切片」 in 01-foundations/04-set-theory/05-definability
- Default: `set:initial-segment` → **no candidate fits**
- Pages: 02-ordinal-definable.html
- Sentence: $\omega^{<\omega}$ は $\lhd$ に関する $\mathbf{ON}^{<\omega}$ の始切片で、その順序型は $\omega^{2}$ である。実際、$\mu(t)=k$ となる $t\in\omega^{<\omega}$ の全体は、長さごとに有限個（長さ $l$ なら $(k+1)^{l}$ 個以下）で、長さは $0,1,2,\dots$ と無限に続くので、順序型 $\omega$ のブロックをなす。$k
  - `set:initial-segment`: NG — Here "始切片" means an initial segment of a well-order (a down-closed subset), which matches the card's definition of a down-closed initial segment, so it is the same notion.

## 「従う」 in 01-foundations/04-set-theory/05-definability
- Default: `logic:positional-strategy` → **no candidate fits**
- Pages: 01-formalizing-definability.html
- Sentence: - (e) の場合で、$A$ がスコーレム関数で閉じていることが本質的に使われた。他の場合は $A\subseteq B$ だけから従う。
  - `logic:positional-strategy`: NG — Here "従う" means "follows logically (is entailed)," not a play following a positional strategy.

## 「推移的」 in 01-foundations/04-set-theory/05-definability
- Default: `set:transitive-set` → **no candidate fits**
- Pages: 01-formalizing-definability.html, 02-ordinal-definable.html
- Sentence: hrm{Df}(A,n)$ を、$\ZF$ の中の一つの演算として定義する。構文論を形式化する代わりに、基本的な関係から出発して、補集合・共通部分・射影（$\lnot$, $\land$, $\exists$ に対応）で閉じた最小の集まりとして定めるのである。さらにその枚挙 $\mathrm{En}$ を定め、それらが推移的なモデルについて絶対的であることを示す。これは次ページの順序数定義可能集合と、第 VI 章の構成可能集合の土台になる。本ページの議論はすべて $\ZF-\mathrm{P}$ の中で行い、選択公理は（明記した \ref{set:downward-lst} を除いて）使わない。（Kunen 第 V 章冒頭と §1 に対応
  - `set:transitive-set`: NG — Here "推移的" describes a model (a set or class) being transitive in the sense that its elements are subsets, which matches the card's definition of a transitive set, so it is the same notion.
  - `logic:relation-properties`: NG — Here "推移的" describes a model being transitive (a set closed under elements), not a transitive relation as defined in the card.
  - `grp:faithful-transitive`: NG — Here "推移的" refers to a transitive set/model in set theory, not a transitive group action as defined in the card.

## 「選択」 in 01-foundations/04-set-theory/05-definability
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 01-formalizing-definability.html, 02-ordinal-definable.html
- Sentence: - AC は整列順序 $\lhd$（スコーレム関数の選択）と閉包補題で使った。
  - `logic:pdl-syntax`: NG — Here "選択" refers to the axiom of choice (a choice function), not the PDL program operator "selection" (α∪β).

## 「ランク」 in 01-foundations/04-set-theory/06-constructible-sets
- Default: `set:rank` → **fits: `logic:attractor`**
- Pages: 01-basic-properties-of-l.html, 02-zf-in-l.html, 03-ac-gch-in-l.html, 04-diamond-in-l.html
- Sentence: $x\in \mathbf{L}$ について、$x\in L_{\beta+1}$ となる最小の $\beta$ を $x$ の **$\mathbf{L}$-ランク**といい、$\rho(x)$ と書く。
  - `set:rank`: NG — It defines the rank relative to the constructible hierarchy \(L\) (the \(\mathbf{L}\)-rank \(\rho(x)\)), not the rank in the cumulative hierarchy \(\mathbf{WF}\) given by the card.
  - `logic:attractor`: OK

## 「上限」 in 01-foundations/04-set-theory/06-constructible-sets
- Default: `set:order-dedekind-complete` → **no candidate fits**
- Pages: 04-diamond-in-l.html
- Sentence: なる最小の順序数とする。これは $\omega_{1}$ 未満にとれる：$L_{\rho_{k}}$ は可算（\ref{set:l-alpha-size}）なので値 $H_{mn}(s)$ は可算個で、各値の $\mathbf{L}$-ランクは $\omega_{1}$ 未満、$\omega_{1}$ は正則なのでその上限は $\omega_{1}$ 未満。$\rho\defeq\sup_{k}\rho_{k}<\omega_{1}$（同じく正則性）は極限で、$L_{\rho}=\bigcup_{k}L_{\rho_{k}}$ は各 $H_{mn}$ で閉じている。よって $\rho\in C_{1}$、$\rho>\xi$。
  - `set:order-dedekind-complete`: NG — Here 上限 means the supremum of a set of ordinals (least upper bound), which matches the card's notion of 上限 as a least upper bound.
  - `logic:rm-analysis-defs`: NG — Here 上限 means the supremum of a set of ordinals, not the least upper bound of a real sequence as defined in the card.
  - `calc:supremum`: NG — Here "上限" means the supremum of a set of ordinals (least upper bound), which matches the card's definition of 上限 as the least upper bound of a subset of a totally ordered set.

## 「全順序」 in 01-foundations/04-set-theory/06-constructible-sets
- Default: `set:total-order` → **no candidate fits**
- Pages: 01-basic-properties-of-l.html, 03-ac-gch-in-l.html
- Sentence: - 本ページは \ref{set:definable-power-basic.4} と \ref{set:l-alpha-size} を除いて選択公理を使わない。$\mathcal{D}$ の定義は冪集合公理を使わないが、$L_{\alpha}$ を全順序数について定める再帰そのものは $\ZF$ の置換公理を使う。
  - `set:total-order`: NG — Here "全順序数" means "all ordinal numbers" (全 + 順序数), not the order-theoretic notion of a total order defined in the card.

## 「単調」 in 01-foundations/04-set-theory/06-constructible-sets
- Default: `comp:monotone-continuous` → **no candidate fits**
- Pages: 04-diamond-in-l.html
- Sentence: の順序数はない」（$\forall x\,(x\text{ は順序数}\to\exists y\,(y=S(x)))$）が成り立ち、順序数と $S$ は絶対的なので、$L_{\rho}$ の順序数 $\rho$ 未満の各 $\xi$ について $\xi+1\in L_{\rho}$、すなわち $\xi+1<\rho$。単調性：$\alpha\le\beta$ なら $q(\beta)>\beta\ge\alpha$ で $L_{q(\beta)}\prec L_{\omega_{1}}$ なので、$q(\alpha)$ の最小性より $q(\alpha)\le q(\beta)$。
  - `comp:monotone-continuous`: NG — Here "単調性" refers to monotonicity of the function $q$ on ordinals (order-preserving), not the monotonicity of a map on $\mathcal{P}(\Sigma^{\ast})^{n}$ defined in the card.

## 「始対象」 in 01-foundations/04-set-theory/06-constructible-sets
- Default: `cat:initial-terminal` → **no candidate fits**
- Pages: 02-zf-in-l.html
- Sentence: **高い視点から：L は「始対象」.** $\mathbf{L}$ は、$\mathbf{ON}$ を含む推移的なモデルの中で包含について最小であり、しかもどのモデルの中で作っても同じものになる（$\mathbf{L}^{M}=\mathbf{L}$）。これは代数学で、素体（$\mathbb{Q}$ や $\mathbb{F}_{p}$）がその標数の
  - `cat:initial-terminal`: NG — It uses "始対象" loosely as "minimal/initial object" in set-theoretic universes, not the category-theoretic universal property of an initial object.

## 「崩壊関数」 in 01-foundations/04-set-theory/06-constructible-sets
- Default: `set:collapse-function` → **no candidate fits**
- Pages: 04-diamond-in-l.html
- Sentence: 崩壊関数の定義 $G(x)=\{G(y):y\in Y\cap x\}$（\ref{set:collapse-function}）より、$\zeta<\alpha$ については $Y\cap\zeta=\zeta$ なので帰納法で $G(\zeta)=\zeta$、そして $G(\omega_{1})=\{G(\zeta):\
  - `set:collapse-function`: NG — This "崩壊関数" is a Mostowski collapse function on a well-founded relation, not the Mostowski collapse function defined in the card (the card's G maps A to V via G(x)={G(y) | y∈A ∧ yRx}, whereas the sentence's G(x)={G(y): y∈Y∩x} is a different collapse function).

## 「引き戻し」 in 01-foundations/04-set-theory/06-constructible-sets
- Default: `cat:product` → **no candidate fits**
- Pages: 03-ac-gch-in-l.html
- Sentence: En}(m_{X},L_{\beta},n_{X}+1)\}$ で $X$ が三つ組から復元される）。(c) は三つ組の集合 $\bigcup_{n}(\{n\}\times{}^{n}L_{\beta}\times\omega)$ 上の「$n$、次に $\lhd_{\beta}^{n}$、次に $m$」の辞書式順序を引き戻したもので、この順序は整列順序である。(a), (b) と合わせて、$\lhd_{\alpha}$ は $L_{\beta}$ を $\lhd_{\beta}$ で並べ、その後に新しい元を (c) で並べた整列順序である。
  - `cat:product`: NG — Here "引き戻し" means pulling back (transporting) an order along a map, not the categorical pullback/fiber product defined in the card.

## 「強制」 in 01-foundations/04-set-theory/06-constructible-sets
- Default: `logic:ikripke-model` → **no candidate fits**
- Pages: 02-zf-in-l.html, 03-ac-gch-in-l.html
- Sentence: -minimal-class} は「$\mathbf{L}$ は $\mathbf{ON}$ を含む $\ZF$ の推移的なモデルのうち最小」とも言い換えられる（$\mathbf{ON}\subseteq M$ なら真のクラスである）。$\mathbf{V}\neq \mathbf{L}$ の無矛盾性は第 VII 章の強制法で示す。また、ある大きな基数の存在（たとえば可測基数）は $\mathbf{V}\neq \mathbf{L}$ を導くことが知られている（スコットの定理として一般に知られている。本サイトでは扱っていない）。
  - `logic:ikripke-model`: NG — Here "強制" refers to forcing (forcing method in set theory), not the Kripke-model forcing relation defined in the card.

## 「従う」 in 01-foundations/04-set-theory/06-constructible-sets
- Default: `logic:positional-strategy` → **no candidate fits**
- Pages: 01-basic-properties-of-l.html, 02-zf-in-l.html, 03-ac-gch-in-l.html, 04-diamond-in-l.html
- Sentence: **2** を $\alpha$ に関する帰納法で示す。$\alpha=0$ と極限の場合は帰納法の仮定から直ちに従う（極限なら $L_{\alpha}\cap\mathbf{ON}=\bigcup_{\xi<\alpha}\xi=\alpha$）。$\alpha=\beta+1$ で $L_{\beta}\cap\mathbf{ON}=\beta$ とする。$L_{\beta}\subseteq L_{\alpha}\subsete
  - `logic:positional-strategy`: NG — Here "従う" means "follows (logically) from the induction hypothesis," not the game-theoretic "follows a strategy."

## 「抽象」 in 01-foundations/04-set-theory/06-constructible-sets
- Default: `logic:lambda-term` → **no candidate fits**
- Pages: 02-zf-in-l.html
- Sentence: - 本当に手間がかかるのは分出だけである。他の公理は「$\mathbf{L}$ が十分大きな集合を含む」ことしか主張せず、推移性と $L_{\alpha}\in \mathbf{L}$ から従う（この状況の抽象的な定式化は Kunen 第 V 章の演習 6 にある）。
  - `logic:lambda-term`: NG — Here "抽象" means "abstract (general) formulation," not lambda abstraction.

## 「断片」 in 01-foundations/04-set-theory/06-constructible-sets
- Default: `logic:ctl-fragment` → **no candidate fits**
- Pages: 03-ac-gch-in-l.html, 04-diamond-in-l.html
- Sentence: **高い視点から：自己相似性と凝縮.** \ref{set:l-subsets-early} の証明は、$\mathbf{L}$ の「どの断片を切り取って推移的につぶしても、また $\mathbf{L}$ の初めの部分 $L_{\delta}$ が現れる」という自己相似性（凝縮）に基づく。$A\subseteq L_{\alpha}$ を含む小さな初等部分構造をとってつぶすと $L_{\delta}$ になり、$\delta$ は大きさの制約から $\alp
  - `logic:ctl-fragment`: NG — This "断片" (fragment) refers to a cut-off piece of the constructible hierarchy in condensation arguments, not the labeled finite tree defined in the CTL card.

## 「選択」 in 01-foundations/04-set-theory/06-constructible-sets
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 04-diamond-in-l.html
- Sentence: 個の候補）が使える。$\lozenge^{-}$ から $\lozenge$ への変換では各 $\mathcal{A}_{\alpha}$ の枚挙を選ぶ必要があるが、$\mathbf{V}=\mathbf{L}$ のもとでは $<_{L}$ の $\mathcal{A}_{\alpha}$ への制限による枚挙をとれば、選択を使わずに列が具体的に定まる。
  - `logic:pdl-syntax`: NG — Here "選択" refers to the set-theoretic axiom of choice, not the PDL program choice operator α∪β.

## 「の整列順序」 in 01-foundations/04-set-theory/07-forcing
- Default: `set:l-alpha-well-order` → **no candidate fits**
- Pages: 03-zfc-in-mg.html
- Sentence: （$\Rightarrow$）$x$ の整列順序から、順序型を $\alpha$ として同型 $f\colon\alpha\to x$ をとればよい（\ref{set:ordinal-type}）。（$\Leftarrow$）$x,\alpha,f$ が \eqref{set:eq-ac-enumeration} のとおりとする。$z\in x$ に $g(z)\d
  - `set:l-alpha-well-order`: NG — one short English sentence why

## 「ススリン仮説」 in 01-foundations/04-set-theory/07-forcing
- Default: `set:suslin-hypothesis` → **no candidate fits**
- Pages: 07-further-results.html
- Sentence: を壊せることを述べるので、SH $+$ CH は無矛盾だと予想される。実際そうだが、その反復強制の議論（ジェンセンによる。Devlin–Johnsbråten 1974）は本書で扱うものより難しい。$\kappa>\omega_{1}$ ではすべての $\kappa$-ススリン木を壊すのはより難しく、$\kappa$-ススリン仮説の無矛盾性については未解決の問題がいくつもある、と Kunen（1980）は述べている。とくに GCH $+\omega_{2}$-SH が無矛盾かどうかは未解決とされ（\ref{set:destroy-suslin-tree} からすれば無矛盾である「はず」だが、Gregory 1976 は GCH $+\omega
  - `set:suslin-hypothesis`: NG — It refers to the generalized $\kappa$-Suslin hypothesis, a variant for uncountable $\kappa$, not the specific Suslin hypothesis about the Suslin line.

## 「ブール値モデル」 in 01-foundations/04-set-theory/07-forcing
- Default: `set:truth-value` → **no candidate fits**
- Pages: 06-boolean-valued-models.html, 07-further-results.html, 08-other-approaches.html
- Sentence: 5）。$i$ が同型なら、（$M$ に属する同型で）同型な p.o. は同じジェネリック拡大を与える。$\PP\subseteq\mathbb{Q}$ で $i$ が包含なら、大きい p.o. はより大きい拡大を与えると考えられ、これは第 VIII 章の反復強制で決定的に重要になる。最後に、これらの考え方を使って強制をブール値モデルと結びつける。（Kunen 第 VII 章 §7 に対応する。）
  - `set:truth-value`: NG — “ブール値モデル” is the Boolean-valued model itself, not the truth value defined in the card.

## 「ランダム」 in 01-foundations/04-set-theory/07-forcing
- Default: `comp:ml-test` → **no candidate fits**
- Pages: 04-finite-partial-functions.html
- Sentence: **高い視点から：情報の量と連続体.** $\mathrm{Fn}(\kappa\times\omega,2)$ のジェネリックな $G$ は、$\kappa$ 個の「互いに独立なランダムな実数」を $M$ に付け加える。c.c.c. は「各段階で可算個の選択肢しか残らない」という情報の少なさを表し、そのため新しい全射（基数の崩壊）は作られない。よい名前の数え上げは、「付け加えた実数から作れる実数」は $M$ の中の可算な情報（反鎖）の $\lambda$ 個の組で記述されるので $\kappa^{\l
  - `comp:ml-test`: NG — Here "ランダムな実数" means generic random reals in forcing, not Martin-Löf randomness of the definition card.

## 「上限」 in 01-foundations/04-set-theory/07-forcing
- Default: `set:order-dedekind-complete` → **no candidate fits**
- Pages: 03-zfc-in-mg.html, 04-finite-partial-functions.html, 05-larger-partial-functions.html, 06-boolean-valued-models.html, 07-further-results.html
- Sentence: - $M$ の公理は、分出（$\rho,\tau$）、置換（Step 1 の上限）、冪集合（$S$）、選択（$\dom(\sigma)$ の枚挙）のそれぞれで、$M[G]$ の対応する公理を示すのに使った。
  - `set:order-dedekind-complete`: NG — Here "上限" refers to the supremum used in the replacement axiom step (bounding ranks), not the Dedekind-completeness notion of a least upper bound of a bounded subset.
  - `logic:rm-analysis-defs`: NG — Here "上限" refers to the supremum used in the replacement axiom step of the forcing construction, not the supremum of a real sequence as defined in the card.
  - `calc:supremum`: NG — Here "上限" refers to an upper bound on the number of steps in a construction, not the least upper bound (supremum) of a subset of a totally ordered set as defined in the card.

## 「下限」 in 01-foundations/04-set-theory/07-forcing
- Default: `calc:supremum` → **no candidate fits**
- Pages: 07-further-results.html
- Sentence: - \ref{set:forcing-diamond} で $\omega_{1}$-閉性は、条件の可算な減少列の下限をとることに使われる。有限条件の $\mathrm{Fn}(\omega_{1},2)$ ではこの議論は使えない。
  - `calc:supremum`: NG — Here "下限" refers to the greatest lower bound (infimum) of a decreasing sequence of forcing conditions in a partial order, which is the same general notion of infimum/下限 defined in the card (greatest lower bound in a totally ordered set), so it matches.

## 「交わり」 in 01-foundations/04-set-theory/07-forcing
- Default: `set:boolean-algebra` → **no candidate fits**
- Pages: 04-finite-partial-functions.html
- Sentence: :fn-poset-basic}）。$J\neq\varnothing$ なら、各 $i\in I$ について $D_{i}\defeq\{p:i\in\dom(p)\}$ は稠密で、$I,J\in M$ なら絶対性より $D_{i}\in M$。したがって $G$ が $M$ 上ジェネリックなら各 $D_{i}$ と交わり、$\dom(\bigcup G)=I$。同様に $I$ が無限なら、各 $j\in J$ について $\{p:j\in\ran(p)\}$ は稠密で $M$ に属するので、$\ran(\bigcup G)=J$。以上で次が示された。
  - `set:boolean-algebra`: NG — Here "交わり" is the verb "intersects" (the filter meets each dense set), not the Boolean-algebra meet operation defined in the card.

## 「係数」 in 01-foundations/04-set-theory/07-forcing
- Default: `comp:linear-system` → **no candidate fits**
- Pages: 01-generic-extensions.html, 03-zfc-in-mg.html
- Sentence: 代入」して初めて $\tau_{G}$ という集合になる。$M[G]$ は $K[X]$ に $X=a$ を代入して得られる拡大体 $K(a)$ の類似であり、$\check{x}$ は定数多項式、$\Gamma$ は未知数 $X$ そのものにあたる。ジェネリック性は、$a$ が $K$ 上「超越的」（どんな $K$ 係数の方程式も満たさない）であることに似ていて、$G$ は $M$ の中のどんな稠密な「要請」も満たすが、$M$ の中のどの特定の集合でもない（\ref{set:generic-not-in-m}）。
  - `comp:linear-system`: NG — Here "係数" refers to coefficients of an equation over a field K (polynomial coefficients), not the language coefficients A_{ij}, B_{i} of the system of language equations defined in the card.

## 「再帰的」 in 01-foundations/04-set-theory/07-forcing
- Default: `comp:partial-recursive` → **no candidate fits**
- Pages: 02-forcing-relation.html, 08-other-approaches.html
- Sentence: **関連する結果.** 素論理式についての $\Vdash^{*}$ の再帰は、ブール値モデル $\mathbf{V}^{\mathbb{B}}$ での真理値 $\lVert\tau_{1}=\tau_{2}\rVert$ の再帰的な定義と本質的に同じである、と一般に言われている（Kunen 第 VII 章 §7 で扱われる）。
  - `comp:partial-recursive`: NG — Here "再帰" refers to a recursive definition/recursion on formulas, not the card's notion of a relation being recursive (having a general recursive characteristic function).

## 「割り当て」 in 01-foundations/04-set-theory/07-forcing
- Default: `logic:assignment` → **no candidate fits**
- Pages: 05-larger-partial-functions.html, 08-other-approaches.html
- Sentence: が $J$ 全体になるのに $(\lvert I\rvert\ge\lambda)^{M}$ を使う：$p\in\PP$ に対し $\lvert\dom(p)\rvert<\lambda\le\lvert I\rvert$ なので $I\setminus\dom(p)\neq\varnothing$、そこに $j$ を割り当てられる。）$\S5$ の議論で $\omega$ を $\lambda$ に置き換えると、$I=\kappa\times\lambda$, $J=2$ のとき $\bigcup G$ は $\lambda$ から $2$ への相異なる関数の $\kappa$-列を符号化していると考えられ、\ref{set:fn-man
  - `logic:assignment`: NG — Here "割り当てる" means assigning an element j to a set, not a variable assignment map v: Var → M as defined in the card.

## 「半順序」 in 01-foundations/04-set-theory/07-forcing
- Default: `set:total-order` → **fits: `set:forcing-poset`**
- Pages: 01-generic-extensions.html, 04-finite-partial-functions.html, 05-larger-partial-functions.html, 06-boolean-valued-models.html, 07-further-results.html
- Sentence: - 半順序（強制法の意味で）$\langle\PP,\le\rangle$（反射律と推移律を満たし、反対称律は要求しない）、両立・非両立 $p\perp q$、稠密集合、フィルターは \ref{set:forcing-poset}, \ref{set:compatible}, \ref{set:dense-set}, \ref{
  - `set:total-order`: NG — This "半順序" is a reflexive preorder used in forcing, not the irreflexive strict partial order defined in the card.
  - `set:forcing-poset`: OK

## 「単調」 in 01-foundations/04-set-theory/07-forcing
- Default: `comp:monotone-continuous` → **no candidate fits**
- Pages: 04-finite-partial-functions.html, 05-larger-partial-functions.html
- Sentence: **関連する結果.** 正則基数の冪 $2^{\kappa}$ の値を同時に（単調性とケーニッヒの補題の制約の範囲で）任意に指定できることはイーストンの定理（\ref{set:easton}）として知られ、第 VIII 章で扱われる。特異基数の冪にはシルバーの定理（\ref{set:silver}）のような $\ZFC$ の制約がある。
  - `comp:monotone-continuous`: NG — Here "単調性" refers to the monotonicity of the continuum function $\kappa \mapsto 2^{\kappa}$ in set theory, not the monotonicity of a map on $\mathcal{P}(\Sigma^{\ast})^{n}$ as defined in the card.

## 「反復」 in 01-foundations/04-set-theory/07-forcing
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 07-further-results.html
- Sentence: \ref{set:destroy-suslin-tree} が容易に証明されたからといって、SH の無矛盾性を示すのが易しいと考えてはならない。そのためには $M$ のすべての $\omega_{1}$-ススリン木を壊すために強制を超限回反復する必要がある。第 VIII 章でそのような反復を行い、$\mathrm{MA}+\lnot\mathrm{CH}$、したがって SH の無矛盾性を示す。\ref{set:destroy-suslin-tree} は $\omega_{2}$ を大きくせずに $\omega_{1}$-ススリン木を壊せることを述べるので
  - `logic:pdl-syntax`: NG — Here "反復" means iterating a forcing construction transfinitely, not the PDL program operation α*.

## 「合成」 in 01-foundations/04-set-theory/07-forcing
- Default: `set:relation-composition` → **fits: `cat:category`**
- Pages: 07-further-results.html
- Sentence: $\alpha<\kappa$ なら、$M$ の中に $\lambda$ から $\alpha$ の上への関数がある（$\alpha\ge1$ のとき）。$\bigcup G$ は $\omega$ から $\lambda$ の上への関数（\ref{set:fn-generic-onto}）なので、合成して（$\alpha$ は可算）$^{M[G]}$。よって $\omega_{1}^{M[G]}\ge\kappa$。一方 $(\lvert\PP\rvert=\lambda)^{M}$ なので $\PP$ は $M$ で $\kappa$-c.c.（反鎖の濃度は $\lvert\PP\rvert$ 以下）で、$\ka
  - `set:relation-composition`: NG — Here "合成" refers to composing functions (function composition), not the composition of arbitrary relations as defined in the card.
  - `logic:while-program`: NG — Here "合成" refers to composing functions, not the program composition constructor of while programs.
  - `cat:category`: OK

## 「対の公理」 in 01-foundations/04-set-theory/07-forcing
- Default: `set:ax-pairing` → **no candidate fits**
- Pages: 01-generic-extensions.html, 07-further-results.html
- Sentence: 名前の作り方の例として、$M[G]$ が $\ZFC$ のやさしい公理のいくつかを満たすことを確かめる。たとえば対の公理が成り立つのは、$\sigma,\tau\in M^{\PP}$ に対し、つねに $\{\sigma_{G},\tau_{G}\}$ を指す名前 $\mathrm{up}(\sigma,\tau)\in M^{\PP}$ を定義できるからである。
  - `set:ax-pairing`: NG — The card states only that some set contains both x and y, whereas the sentence uses the pairing axiom to obtain the two-element set {σ_G, τ_G} itself.

## 「対称的」 in 01-foundations/04-set-theory/07-forcing
- Default: `logic:relation-properties` → **no candidate fits**
- Pages: 03-zfc-in-mg.html
- Sentence: **関連する結果.** $\mathrm{Con}(\ZF)\to\mathrm{Con}(\ZF+\lnot\mathrm{AC})$ も強制法（対称的なモデル、あるいは $\mathbf{HOD}$ の変形）で示されることが知られている（Kunen 第 VII 章の演習でも扱われているとされる。本サイトでは扱っていない）。
  - `logic:relation-properties`: NG — Here "対称的なモデル" refers to a symmetric model in forcing/set theory, not the symmetry property of a binary relation R on W as defined in the card.

## 「引き戻し」 in 01-foundations/04-set-theory/07-forcing
- Default: `cat:product` → **no candidate fits**
- Pages: 06-boolean-valued-models.html
- Sentence: - \ref{set:complete-embedding-generic} の証明は、ジェネリック性の判定（\ref{set:generic-criterion}）で縮約（\ref{set:complete-embedding.3}）を本質的に使った。縮約がないと、$H$ の引き戻しは稠密集合と交わらないことがある（$\mathrm{Fn}(\kappa,2)\subseteq\mathrm{Fn}(\kappa,2,\omega_{1})$ の例）。
  - `cat:product`: NG — Here "引き戻し" refers to the preimage of a set under a map, not the categorical pullback (fiber product) defined in the card.

## 「弱到達不能」 in 01-foundations/04-set-theory/07-forcing
- Default: `set:inaccessible` → **no candidate fits**
- Pages: 04-finite-partial-functions.html, 05-larger-partial-functions.html, 07-further-results.html
- Sentence: 連続体は弱到達不能にもなりうる。
  - `set:inaccessible`: NG — 「連続体」は基数 \(2^{\aleph_{0}}\) を指し、一般に正則な極限基数であるとは限らないため、弱到達不能基数であるとは言えない。

## 「強制」 in 01-foundations/04-set-theory/07-forcing
- Default: `logic:ikripke-model` → **no candidate fits**
- Pages: 01-generic-extensions.html, 02-forcing-relation.html, 03-zfc-in-mg.html, 04-finite-partial-functions.html, 05-larger-partial-functions.html, 06-boolean-valued-models.html, 07-further-results.html, 08-other-approaches.html
- Sentence: 強制法（forcing）は、$\ZF+\mathbf{V}\neq \mathbf{L}$ や $\ZFC+\lnot\mathrm{CH}$ などの無矛盾性を示すための方法である。本ページでは、まずその理解の妨げとなるメタ数学的な問題と、それを回避する証明の構造を述べ、次に基礎モデル $M$ と $M$ 上ジェネリックな
  - `logic:ikripke-model`: NG — This "強制" refers to set-theoretic forcing (forcing method), not the Kripke-model forcing relation defined in the card.

## 「従う」 in 01-foundations/04-set-theory/07-forcing
- Default: `logic:positional-strategy` → **no candidate fits**
- Pages: 01-generic-extensions.html, 02-forcing-relation.html, 03-zfc-in-mg.html, 04-finite-partial-functions.html, 05-larger-partial-functions.html, 06-boolean-valued-models.html, 07-further-results.html, 08-other-approaches.html
- Sentence: 慣習に従い、$\langle\PP,\le,\mathbf{1}\rangle$ を単に $\PP$ と書くことが多い。$\PP\in M$ は $\PP,\le,\mathbf{1}\in M$ を意味する（$\mathbf{1}\in M$ は $M$ の推移性から従う）。二つの p.o. を扱うときは $\langle\PP,\le_{\PP},\mathbf{1}_{\PP}\rangle$, $\langle\mathbb{Q},\le_{\mathbb{Q}},\mathbf{1}_{\mathbb{Q}}\rangle$ のように書く。形式的には、集合 $\PP$ は順序 
  - `logic:positional-strategy`: NG — Here "従う" means "follows from (by transitivity)" or "according to convention," not a play following a positional strategy.

## 「抽象」 in 01-foundations/04-set-theory/07-forcing
- Default: `logic:lambda-term` → **no candidate fits**
- Pages: 01-generic-extensions.html, 06-boolean-valued-models.html, 08-other-approaches.html
- Sentence: $\PP\in M$ なら $G\in M$ となる（Kunen 第 VII 章の演習 A1）。そのような $\PP$ に MA や強制法を適用しても自明な結果しか得られないので、第 II 章・第 VII 章・第 VIII 章で考える半順序のほとんどは \eqref{set:eq-splitting} を満たす（ただし抽象的な理論では \eqref{set:eq-splitting} は必要ない）。
  - `logic:lambda-term`: NG — Here "抽象的" is an ordinary adjective meaning "abstract/general," not the lambda-calculus notion of abstraction (λx.M).

## 「推論規則」 in 01-foundations/04-set-theory/07-forcing
- Default: `logic:deduction-system` → **fits: `pt:pa-x`**
- Pages: 08-other-approaches.html
- Sentence: （命題記号 $p_{ni}$ をもつ長さ $2^{\omega}$ の文。Kunen の本文ではこの式が判読できなかったので、説明から復元した）とすると、$\varphi$ は妥当だが通常の無限論理の推論規則では導出できない。$\varphi$ はある適当なブール値の解釈で真理値 $\mathbf{0}$ をとるからである：$2^{\omega}$ の正則開集合代数（$\mathrm{Fn}(\omega,2)$ の完備化。演習 G9）で、$p_{ni}$ に真理値 $\{f\in{}^{\omega}2:f(n)=i\}
  - `logic:deduction-system`: NG — the sentence uses "推論規則" for the inference rules of ordinary infinitary logic, not the specific inductively defined notion of a natural-deduction derivation (導出) given in the card.
  - `pt:pa-x`: OK

## 「細かい」 in 01-foundations/04-set-theory/07-forcing
- Default: `top:finer-coarser` → **no candidate fits**
- Pages: 06-boolean-valued-models.html
- Sentence: は命題は真か偽のどちらかだが、ブール値モデルでは命題は $\mathbb{B}$ の値をとり、ジェネリックなフィルター $G$（$\mathbb{B}$ の $M$ 上の超フィルター）は「どの値を真とみなすか」を一つ選んで二値化する操作である。完全な埋め込み $\PP\to\mathbb{Q}$ は、粗い情報の空間から細かい情報の空間への射であり、細かい側で二値化すれば粗い側も自動的に二値化される（\ref{set:complete-embedding-generic}）。
  - `top:finer-coarser`: NG — Here "細かい" describes finer information in forcing/Boolean-valued models, not the finer topology in the definition card.

## 「結び」 in 01-foundations/04-set-theory/07-forcing
- Default: `set:boolean-algebra` → **no candidate fits**
- Pages: 06-boolean-valued-models.html, 08-other-approaches.html
- Sentence: 同型なら、（$M$ に属する同型で）同型な p.o. は同じジェネリック拡大を与える。$\PP\subseteq\mathbb{Q}$ で $i$ が包含なら、大きい p.o. はより大きい拡大を与えると考えられ、これは第 VIII 章の反復強制で決定的に重要になる。最後に、これらの考え方を使って強制をブール値モデルと結びつける。（Kunen 第 VII 章 §7 に対応する。）
  - `set:boolean-algebra`: NG — the sentence does not use the term 結び at all; it only mentions ブール値モデル (Boolean-valued models), so the linked definition of 結び (join) is not the meaning in context.

## 「要求」 in 01-foundations/04-set-theory/07-forcing
- Default: `logic:ctl-successor-def` → **no candidate fits**
- Pages: 01-generic-extensions.html, 02-forcing-relation.html, 06-boolean-valued-models.html, 08-other-approaches.html
- Sentence: - 半順序（強制法の意味で）$\langle\PP,\le\rangle$（反射律と推移律を満たし、反対称律は要求しない）、両立・非両立 $p\perp q$、稠密集合、フィルターは \ref{set:forcing-poset}, \ref{set:compatible}, \ref{set:dense-set}, \ref{set:poset-filter} のとおり。$\mathrm{MA}(\aleph_{0})$（\re
  - `logic:ctl-successor-def`: NG — This "要求" is not the modal-logic notion of a requirement (a negated AX formula in a world); it is used in the unrelated context of forcing/posets.

## 「証人」 in 01-foundations/04-set-theory/07-forcing
- Default: `comp:mr-witness` → **no candidate fits**
- Pages: 07-further-results.html
- Sentence: 最大原理を使わずに、$\mathbf{1}\Vdash\exists x\,(\sigma\in x\land\tau\in x)$ から $G$ によらない証人の名前を具体的に与えよ。また、$p\Vdash\exists x\,(x\in\sigma)$ のとき、$p\Vdash\pi\in\sigma$ となる $\pi\in\dom(\sigma)$ があるとは限らないことを例で示せ（ヒント：$\sigma=\{\langle\check{0},q\rangle,\lan
  - `comp:mr-witness`: NG — This "証人" (witness) is a set-theoretic/forcing witness, not the primality-test witness defined in the card.

## 「選択」 in 01-foundations/04-set-theory/07-forcing
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 03-zfc-in-mg.html, 04-finite-partial-functions.html, 05-larger-partial-functions.html, 07-further-results.html
- Sentence: **選択.** $M[G]$ は $\ZF$ を満たすので、\ref{set:ac-enumeration}（$\ZF$ の定理）は $M[G]$ で成り立つ（\ref{set:relativized-proof}）。したがって $M[G]$ で \eqref{set:eq-ac-enumeration} を示せばよい。$x=
  - `logic:pdl-syntax`: NG — Here "選択" refers to the set-theoretic Axiom of Choice, not the PDL program choice operator α∪β defined in the card.

## 「選言」 in 01-foundations/04-set-theory/07-forcing
- Default: `logic:abbreviations` → **no candidate fits**
- Pages: 08-other-approaches.html
- Sentence: }$ の正則開集合代数（$\mathrm{Fn}(\omega,2)$ の完備化。演習 G9）で、$p_{ni}$ に真理値 $\{f\in{}^{\omega}2:f(n)=i\}$ を割り当てればよい。現代的に言えば、$\varphi$ が拡大 $\mathbf{V}^{\mathbb{B}}$ で妥当でないのは、選言 $\bigvee_{f\in{}^{\omega}2}$ の $f$ が $\mathbf{V}$ の関数だけを動くからである（ジェネリックな実数はそのどれとも異なる）。無限論理でのブール値の方法については Karp (1964) を参照（Kunen による）。
  - `logic:abbreviations`: NG — Here "選言" refers to an infinite disjunction (a join in a Boolean algebra), not the logical disjunction connective defined by the card.

## 「開被覆」 in 01-foundations/04-set-theory/07-forcing
- Default: `top:compact` → **no candidate fits**
- Pages: 02-forcing-relation.html
- Sentence: 大域的な真理.** 条件 $p$ は「$G$ についての有限の部分情報」、$p\Vdash\varphi$ は「その情報だけで $\varphi$ の真偽が確定する」ことである。これは層の理論で、開集合 $U$ の上の切断が、$U$ の各点での振る舞いをすべて決めることに似ている。$p$ の下で稠密な集合が「$U$ の開被覆」、\ref{set:forcing-star-dense} が「真理は局所的な性質で、開被覆の上で真なら全体で真」（張り合わせ）にあたる。実際、強制法は位相空間 $\PP$（あるいはその正則開集合代数）の上の層として定式化でき、$\Vdash$ は層のトポス内部の論理（クリプキ–ジョイアル意味論）の特別な場合であると
  - `top:compact`: NG — 「開被覆」は位相空間の被覆の概念を指す用語であり、カードが定義する「コンパクト」や「有限交叉性」の定義そのものではない。

## 「の整列順序」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `set:l-alpha-well-order` → **no candidate fits**
- Pages: 06-ma-consistency.html
- Sentence: igma_{\xi}$ を「選ぶ」ことを $M$ の中の超限再帰として正当化するには、$M$ の AC から、大きさ $\kappa$ の各集合に型 $\kappa$ の整列を定義可能な仕方で割り当てられるわけではない、という点に注意が要る。Kunen の処方は、最初に $M$ の中で $R(\kappa^{+})$ の整列順序 $\lhd$ を一つ固定し、列挙も $\sigma_{\xi}$ も $\lhd$ について最初のものをとる、というものである。構成全体が $R(\kappa^{+})^{M}$ の中に留まることは帰納法で容易に確かめられる、と Kunen は述べている（本サイトでは詳細を確かめていない）。
  - `set:l-alpha-well-order`: NG — the sentence uses a well-ordering of $R(\kappa^{+})$ fixed inside $M$, not the specific recursive well-ordering $\lhd_{\alpha}$ of $L_{\alpha}$ defined on the card.

## 「よい名前」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `set:nice-name` → **no candidate fits**
- Pages: 02-cohen-model.html, 03-kurepa-independence.html, 04-easton-forcing.html, 06-ma-consistency.html, 07-countable-iterations.html
- Sentence: et:product-lemma}）、\ref{set:product-generic-factor} は \ref{set:page-products}、同型な p.o. の拡大（\ref{set:isomorphism-same-extension}）は \ref{set:page-embeddings-bvm}、よい名前（\ref{set:nice-name}, \ref{set:nice-name-exists}）と \ref{set:continuum-kappa}, \ref{set:ccc-preserves}, \ref{set:fn-ccc} は \ref{set:page-fn-forcing}、強制の系（\ref{se
  - `set:nice-name`: NG — the sentence only cites the reference labels for “よい名前” without using the term in a mathematical assertion, so it cannot be judged as having the card’s defined meaning.

## 「イデアル」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `set:ideal` → **no candidate fits**
- Pages: 05-iterated-forcing.html, 06-ma-consistency.html, 07-countable-iterations.html
- Sentence: ——この二段階の拡大を、$M$ の中の一つの p.o. $\PP*\pi$ による一段階の拡大として実現する。$\mathbb{Q}\notin M$ でもよい点が積（\ref{set:page-products}）との違いである。これを超限回繰り返したものが**反復強制**であり、極限段階では条件の「台」を指定されたイデアルに制限する。主な結果は、二段階反復の分解定理（\ref{set:two-step-factor}）、κ-c.c. の二段階での保存（\ref{set:two-step-cc}）と有限台反復での保存（\ref{set:fs-iteration-cc}）、および「小さい集合は途中の段階に現れる」こと（\ref{set:it
  - `set:ideal`: NG — This "イデアル" is an ideal on the forcing conditions (a set of conditions closed under taking stronger conditions), not the set-theoretic ideal on a set $A$ defined in the card.
  - `ring:ideal`: NG — This use of イデアル refers to an ideal on the forcing conditions (a set-theoretic object in iterated forcing), not an ideal of a commutative ring as defined in the card.
  - `ag:algebraic-set`: NG — Here "イデアル" refers to an ideal on the forcing poset's support (a set-theoretic ideal of subsets), not the ideal of polynomials vanishing on a set as defined in the card.

## 「イーストン台」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `set:easton-po` → **no candidate fits**
- Pages: 04-easton-forcing.html
- Sentence: 限個の正則基数の冪を同時に変える方法を示す。GCH を満たす $M$ から出発すると、正則基数の冪 $2^{\kappa}$ は、単調性と $\cf(2^{\kappa})>\kappa$ という「明らかな」制約を満たす限りどんな値にもできる（**イーストンの定理**、\ref{set:easton}）。鍵は、適当な「イーストン台」をもつ積の p.o. $\PP(E)$ と、それを各 $\lambda$ で「$\lambda$ 以下の部分」と「$\lambda$ より上の部分」の積に分解することである。（Kunen 第 VIII 章 §4 に対応する。）
  - `set:easton-po`: NG — 「イーストン台」は台（support）を指す用語であり、カードが定義する添字関数 $E$ や p.o. $\PP(E)$ そのものではない。

## 「コンパクト」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `top:compact` → **no candidate fits**
- Pages: 03-kurepa-independence.html, 04-easton-forcing.html, 05-iterated-forcing.html
- Sentence: **関連する結果.** $\lnot\mathrm{KH}$ と $\omega_{2}$ の到達不能性の関係のように、小さな基数の組合せ論的性質の無矛盾性の強さが大きな基数で測られる例は多い（たとえば $\omega_{2}$ に木の性質があることは $\omega_{2}$ が $\mathbf{L}$ で弱コンパクトであることと等無矛盾であることが知られている。一般にはこう言われている。本サイトでは扱っていない）。
  - `top:compact`: NG — Here "弱コンパクト" refers to the large-cardinal notion of weak compactness, not topological compactness of a space as defined in the card.

## 「ブール値モデル」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `set:truth-value` → **no candidate fits**
- Pages: 05-iterated-forcing.html
- Sentence: **関連する結果.** 二段階反復の分解定理の逆（$G*H$ のジェネリック性）も成り立つ（Kunen の演習）。$\PP*\pi$ の完備化はブール代数の言葉では $\mathbb{B}*\dot{\mathbb{C}}$ として記述され、多くの教科書（たとえば Jech の *Set Theory*）ではブール値モデルの枠組みで反復を扱うと一般に言われている（本サイトでは確かめていない）。非 c.c.c. な p.o. の反復には可算台反復（本章 §7 に対応するページで扱う予定）や、さらに「固有強制」（proper forcing）の理論が用いられることが知られている。
  - `set:truth-value`: NG — the card defines the truth value of a formula, not the notion of a Boolean-valued model.

## 「ランダム」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `comp:ml-test` → **no candidate fits**
- Pages: 02-cohen-model.html, 05-iterated-forcing.html
- Sentence: の実数を決めるのに使われるのは、$G$ のうち可算個の座標だけである。これは確率論で、無限個の独立な確率変数の積空間の上の可測関数が可算個の座標にしか依存しないことに似ている。コーエン実数は「$M$ のどの無限集合も二分する」（\ref{set:cohen-real-splits}）という意味で $M$ に対して十分にランダムであり、その結果、$M$ で作った小さな極大族は、壊れるもの（独立族）と壊れないもの（CH のもとで作った概素族）に分かれる。
  - `comp:ml-test`: NG — Here "ランダム" refers to Cohen reals being sufficiently random with respect to the model M (forcing-theoretic genericity), not Martin-Löf randomness of a binary sequence.

## 「下界」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `calc:supremum` → **no candidate fits**
- Pages: 03-kurepa-independence.html, 04-easton-forcing.html, 07-countable-iterations.html
- Sentence: - $\omega_{1}$-閉性は、各 $f$ について $q_{f}$ をとるところでだけ使った（長さ $\omega$ の減少列の下界）。
  - `calc:supremum`: NG — Here "下界" refers to a lower bound of a decreasing sequence of length ω in a forcing/order-theoretic sense, not the definition of lower bound of a subset of a totally ordered set K as given in the card.

## 「交わり」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `set:boolean-algebra` → **no candidate fits**
- Pages: 07-countable-iterations.html
- Sentence: 各 $x_{i}$ は大きさ $\omega_{1}$ で、相異なる二元の交わりは空なので概素族である。極大性：$y\subseteq\omega_{1}$、$\lvert y\rvert=\omega_{1}$ とする。$y=\bigcup_{i<\lambda}(y\cap x_{i})$ で、$\lambda\le\omega$ なので、すべての $y\cap x_{i}$ が可算なら $y
  - `set:boolean-algebra`: NG — Here "交わり" means set intersection, not the Boolean-algebra meet operation defined in the card.

## 「代数的閉包」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `model:algebraic-closure` → **no candidate fits**
- Pages: 06-ma-consistency.html
- Sentence: 」（\ref{set:iteration-small-sets}）ことが、最終モデルでの任意の依頼がいずれかの段階の待ち行列に並んでいたことを保証する。代数的に言えば、$M[G]$ は「すべての小さい c.c.c. な方程式系に解を付け加えた」閉包であり、MA は「小さい c.c.c. な系はつねに解ける」という一種の代数的閉包性として読める（これは本サイトの比喩である）。
  - `model:algebraic-closure`: NG — Here "代数的閉包" is used as a metaphor for a forcing extension closing under solutions of small c.c.c. systems, not the model-theoretic acl(A) defined in the card.

## 「係数」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `comp:linear-system` → **no candidate fits**
- Pages: 01-products.html
- Sentence: **高い視点から：直積と逐次的な構成.** 積の補題は、テンソル積 $A\otimes B$ を「まず $A$ を係数に拡大し、その上で $B$ を拡大する」$(A\otimes_{K}K')\otimes\cdots$ と見る代数学の状況に似ている。$\PP_{0}\times\PP_{1}$ による強制は二つの独立な情報を同時に付け加えるが、それは一方を付け加えた世界 $M[G_{0}]$ から見て、もう一方を付け加えることと同じ
  - `comp:linear-system`: NG — Here "係数" means coefficients of a tensor product / field extension in algebra, not the coefficient languages $A_{ij},B_{i}$ of a system of language equations.

## 「共終な枝」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `set:tree-path` → **no candidate fits**
- Pages: 05-iterated-forcing.html
- Sentence: を**言っていない**：$\mathbb{Q}$ は $M$ で c.c.c. でも、$\PP$-ジェネリック拡大で c.c.c. でなくなることがありうる（c.c.c. は絶対的でない）。たとえばススリン木 $T$（を逆順にした p.o.）は $M$ で c.c.c. だが、$T$ 自身で強制した拡大では $T$ に共終な枝ができ、枝の各点の枝に属さない直後の点を集めると非可算反鎖が得られる（\ref{set:destroy-suslin-tree}）。したがって $\PP=\mathbb{Q}=T$ では \ref{set:two-step-cc} の仮定が満たされない。
  - `set:tree-path`: NG — It refers to a cofinal branch through a Suslin tree, not specifically a path through a general $\kappa$-tree as defined in the card.

## 「共終数」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `set:cofinality` → **no candidate fits**
- Pages: 04-easton-forcing.html, 05-iterated-forcing.html, 06-ma-consistency.html
- Sentence: $M$ の中で $E$ を添字関数、$\PP=\PP(E)$ とし、GCH が成り立つとする。このとき $\PP$ は共終数（したがって基数）を保つ。
  - `set:cofinality`: NG — Here "共終数" refers to the cofinality of a cardinal/poset preserved by the map $\PP$, not the least ordinal $\alpha$ admitting a cofinal map from $\alpha$ to a given ordinal $\beta$ as defined in the card.

## 「割り当て」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `logic:assignment` → **no candidate fits**
- Pages: 01-products.html, 02-cohen-model.html, 06-ma-consistency.html
- Sentence: $D\defeq\{\langle p,q\rangle:\exists n\in\dom(p)\cap\dom(q)\,(p(n)\neq q(n))\}$ は $\PP\times\PP$ で稠密で $M$ に属する（$\langle p,q\rangle$ に対し、両方の定義域にない $n$ で異なる値を割り当てる）。$\langle p,q\rangle\in G\times G$ なら $p,q\in G$ は両立するので、共通の定義域では値が一致する。よって $(G\times G)\cap D=\varnothing$。
  - `logic:assignment`: NG — Here "割り当てる" means assigning different values to a number n, not a variable assignment map v: Var → M as defined in the card.

## 「半順序」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `set:total-order` → **fits: `set:forcing-poset`**
- Pages: 05-iterated-forcing.html, 06-ma-consistency.html
- Sentence: - $M$ は $\ZFC$ の c.t.m.。p.o.（強制法の意味の半順序、\ref{set:forcing-poset}）は狭義でなくてよい：$p\le p'\le p$ でも $p=p'$ とは限らない。
  - `set:total-order`: NG — Here "半順序" refers to a forcing poset with a reflexive preorder, not the strict (irreflexive) partial order defined in the card.
  - `set:forcing-poset`: OK

## 「単射」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 04-easton-forcing.html, 05-iterated-forcing.html, 06-ma-consistency.html
- Sentence: theta)^{+}$）。$M[G]$ で $2^{\kappa}\ge E(\kappa)$ を見るには、$\PP$ の因子 $\mathrm{Fn}(E(\kappa),2,\kappa)^{M}$ が $\kappa$ の相異なる部分集合の $E(\kappa)$-列を加えることを使う。形式的には、$M$ の中で単射 $h\colon E(\kappa)\times\kappa\to E(\kappa)$ をとり、$M[G]$ の中で $\alpha<E(\kappa)$ について
  - `set:injection-surjection`: NG — Here 単射 refers to an injective function $h\colon E(\kappa)\times\kappa\to E(\kappa)$, which matches the card's definition of injective (逆関係が関数), so it is the same notion.

## 「単調」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `comp:monotone-continuous` → **no candidate fits**
- Pages: 04-easton-forcing.html, 05-iterated-forcing.html
- Sentence: 無限個の正則基数の冪を同時に変える方法を示す。GCH を満たす $M$ から出発すると、正則基数の冪 $2^{\kappa}$ は、単調性と $\cf(2^{\kappa})>\kappa$ という「明らかな」制約を満たす限りどんな値にもできる（**イーストンの定理**、\ref{set:easton}）。鍵は、適当な「イーストン台」をもつ積の p.o. $\PP(E)$ と、それを各 $\lambda$ で「$\lambda$ 以下の部分」と「$\l
  - `comp:monotone-continuous`: NG — Here "単調性" refers to the monotonicity of the function $\kappa\mapsto 2^{\kappa}$ (an order-preserving property on cardinals), not the monotonicity of a map on $\mathcal{P}(\Sigma^{\ast})^{n}$ as defined in the card.

## 「反復」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 02-cohen-model.html, 03-kurepa-independence.html, 04-easton-forcing.html, 05-iterated-forcing.html, 06-ma-consistency.html, 07-countable-iterations.html
- Sentence: 、次の補題の証明とまったく同様である。一般に、コーエンモデルは $\mathrm{Fn}(I,2)$ の形の p.o. だけを使って証明できる MA の帰結を満たす。$\mathrm{MA}+\lnot\mathrm{CH}$ のモデルを得るには（第 VIII 章 §6）、あらゆる c.c.c. な p.o. で強制を反復しなければならない。
  - `logic:pdl-syntax`: NG — Here "反復" means iterating forcing over posets (iterated forcing), not the PDL program iteration operator α*.

## 「可算条件のレヴィ崩壊」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `set:levy-countable` → **no candidate fits**
- Pages: 05-iterated-forcing.html
- Sentence: - 通常のレヴィ崩壊 $\mathrm{Lv}(\alpha)$（\ref{set:levy-collapse}）は、$\mathbb{Q}_{\xi}=\mathrm{Fn}(\omega,\xi)$ を有限台で反復したもの、可算条件のレヴィ崩壊（\ref{set:levy-countable}）は $\mathbb{Q}_{\xi}=\mathrm{Fn}(\omega_{1},\xi,\omega_{1})^{M}$ を可算台で反復したものである。
  - `set:levy-countable`: NG — the card defines the Kurepa-related poset \(\mathrm{Lv}'(\kappa)\) of finite conditions, not the countable-support Lévy collapse \(\mathrm{Fn}(\omega_{1},\xi,\omega_{1})^{M}\) mentioned in the sentence.

## 「同型写像」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `set:order-isomorphism` → **no candidate fits**
- Pages: 05-iterated-forcing.html
- Sentence: $ は $M$ の中の同型で、$j\circ i_{\xi,\xi+1}=i$（\ref{set:two-step-iteration} の $i$）である。$K\defeq j[G_{\xi+1}]$ は $M$ 上 $\PP_{\xi}*\pi_{\xi}$-ジェネリックで $M[K]=M[G_{\xi+1}]$（同型写像による、\ref{set:isomorphism-same-extension}）、$i^{-1}[K]=i_{\xi,\xi+1}^{-1}[G_{\xi+1}]=G_{\xi}$。\ref{set:two-step-factor} の $H$ はちょうど $H_{\xi}$ であり、$H_{\xi}$ は $M[G
  - `set:order-isomorphism`: NG — Here "同型" refers to an isomorphism between models/structures in forcing, not the order-isomorphism (bijection preserving a relation R to S) defined in the card.

## 「基数の和」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `set:cardinal-sum-product` → **fits: `set:cardinal-sum-general`**
- Pages: 04-easton-forcing.html
- Sentence:  p\restr{\dom(E^{-}_{\lambda})},p\restr{\dom(E^{+}_{\lambda})}\rangle$ が同型である。制限は 3 の (a)〜(c) を保ち、逆に二つの成分を合わせたものも (c) を満たす（正則な $\lambda'$ について、$\lambda'$ 未満の二つの基数の和は $\lambda'$ 未満）。順序と $\mathbf{1}$ は成分ごとなので保たれる。
  - `set:cardinal-sum-product`: NG — Here "基数の和" refers to the sum of two cardinals less than λ′ (an ordinal/cardinal addition bound), not the specific cardinal addition operation κ⊕λ defined via disjoint union in the card.
  - `set:cardinal-sum-general`: OK

## 「完備ブール代数」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `set:complete-boolean-algebra` → **no candidate fits**
- Pages: 05-iterated-forcing.html
- Sentence: **有限台反復の「標準性」.** 同じ p.o. を表す名前は多数ある。$\mathbf{1}\Vdash\pi=\pi'$（最大元と順序の一致も含めて）でも $\PP*\pi$ と $\PP*\pi'$ は同型とは限らないが、同型な完備化をもつ（同じ完備ブール代数に稠密に埋め込める、\ref{set:dense-embedding}）。これを $\PP\approx\mathbb{Q}$ と書くと、$\mathbf{1}\Vdash\pi=\pi'$ なら $M$ で $\PP*\pi\approx\PP*\pi'$ であり、無限の反復でも有限台なら同様である。一方、各 $\p
  - `set:complete-boolean-algebra`: NG — Here "完備ブール代数" refers to the completion (完備化) of a partial order—the complete Boolean algebra into which the p.o. is densely embedded—not to the general notion of a complete Boolean algebra as defined in the card.

## 「完全集合」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `comp:sigma-n-complete` → **no candidate fits**
- Pages: 03-kurepa-independence.html
- Sentence: を使って、条件の二分木 $\langle p_{s}:s\in{}^{<\omega}2\rangle$ を作り、そこから $T$ の一つのレベルに $2^{\omega}$ 個の点を埋め込むことである。これはカントール集合 ${}^{\omega}2$ をある空間に埋め込んで「連続体濃度の部分集合をもつ」ことを示す、完全集合の議論（完全集合性質の証明など）と同じ形である。閉性は「二分木の枝ごとに極限の条件がとれる」ことを保証し、レベルの可算性が $2^{\omega}$ 個の点を受け入れられないことで矛盾が生じる。
  - `comp:sigma-n-complete`: NG — Here "完全集合" means a perfect set (a closed set with no isolated points) in topology, not the computability-theoretic notion of a $\Sigma_{n}$-complete set defined in the card.

## 「強制」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `logic:ikripke-model` → **no candidate fits**
- Pages: 01-products.html, 02-cohen-model.html, 03-kurepa-independence.html, 04-easton-forcing.html, 05-iterated-forcing.html, 06-ma-consistency.html, 07-countable-iterations.html
- Sentence: 二つの p.o. の積で強制することは、一方で強制してから、その拡大の上でもう一方で強制することと同じである（**積の補題**）。これは反復強制の最も簡単な場合であり、次ページ以降でコーエンのモデルの性質を調べるのに使う。（Kunen 第 VIII 章 §1 に対応する。）
  - `logic:ikripke-model`: NG — This "forcing" is set-theoretic forcing (Cohen models), not the Kripke-model forcing relation defined in the card.

## 「後続基数」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `set:successor-cardinal` → **no candidate fits**
- Pages: 04-easton-forcing.html, 06-ma-consistency.html
- Sentence: bda<\theta$、すなわち $\theta$ は特異とする。$B$ を $\theta$ の有界な部分集合の集合とする。正則な $\delta<\theta$ について $\lvert\mathcal{P}(\delta)\rvert=E^{*}(\delta)\le E^{*}(\theta)$ で、正則基数（後続基数）は $\theta$ で共終なので $\lvert B\rvert\le E^{*}(\theta)$。$\theta$ に共終な列 $\langle\theta_{\alpha}:\alpha<\lambda\rangle$ を固定すると、$g\mapsto\bigcup\{g(\alpha):\alpha<\la
  - `set:successor-cardinal`: NG — In the sentence, "後続基数" is used as a parenthetical example of a regular cardinal, not with the card's definition as the least cardinal greater than an ordinal.

## 「従う」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `logic:positional-strategy` → **no candidate fits**
- Pages: 01-products.html, 02-cohen-model.html, 04-easton-forcing.html, 05-iterated-forcing.html, 06-ma-consistency.html, 07-countable-iterations.html
- Sentence: ジェネリック性は $i_{0},i_{1}$ の完全性（\ref{set:product-embeddings}）と \ref{set:complete-embedding-generic} から従う。$\langle p_{0},p_{1}\rangle\in G$ なら、$G$ は上に閉じているので $\langle p_{0},\mathbf{1}\rangle,\langle\mathbf{1},p_{1}\rangle\in G$、よって $\langle p_{0},p_{1}\rangle\in i_
  - `logic:positional-strategy`: NG — Here "従う" means "follows logically from," not a play following a positional strategy.

## 「抽象」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `logic:lambda-term` → **no candidate fits**
- Pages: 05-iterated-forcing.html
- Sentence: 次の補題は反復強制の構成の抽象的な順序論的性質をまとめたものである。
  - `logic:lambda-term`: NG — Here「抽象的」means "abstract/general" as an adjective describing order-theoretic properties, not the lambda-calculus notion of abstraction (λx.M).

## 「推移的」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `set:transitive-set` → **fits: `logic:relation-properties`**
- Pages: 05-iterated-forcing.html, 06-ma-consistency.html
- Sentence: $r\le p$ より $r\Vdash\tau\le_{\pi}\sigma$、$\langle r,\rho\rangle\le\langle q,\tau\rangle$ より $r\Vdash\rho\le_{\pi}\tau$。$\mathbf{1}\Vdash$「$\le_{\pi}$ は $\pi$ 上の推移的な関係」なので、$r\Vdash\rho\le_{\pi}\sigma$ かつ $r\Vdash\sigma\in\pi$（$\le_{\pi}$ は $\pi\times\pi$ の部分集合であることが強制されている）。よって $\langle r,\sigma\rangle\in\PP*\pi$ で、$r\le r
  - `set:transitive-set`: NG — Here "推移的" describes a relation being transitive, not a set being transitive as defined in the card.
  - `logic:relation-properties`: OK

## 「極小元」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `set:well-founded-class-relation` → **no candidate fits**
- Pages: 05-iterated-forcing.html
- Sentence:  有限台で同じ $\mathbb{Q}_{n}=\mathrm{Fn}(1,2)$ を $\omega$ 回反復すると、$\PP_{n}$ は有限の p.o. $\mathrm{Fn}(n,2)$ と、$\PP_{\omega}$ は $\mathrm{Fn}(\omega,2)$ と同型である。有限の p.o. では極小元（全域関数 $n\to2$）の集合が $M$ に属する稠密集合なので、$G_{n}$ はある極小元 $s$ を含み、$G_{n}=\{q:s\le q\}\in M$、よって $M[G_{n}]=M$。したがって $\bigcup_{n}M[G_{n}]=M$ だが、$G_{\omega}$ は $M$ に属さない（\
  - `set:well-founded-class-relation`: NG — Here "極小元" means a minimal element of a partial order (no element strictly below it), not the $\mathbf{R}$-minimal element defined via a well-founded relation on a class.

## 「正則」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `set:regular-cardinal` → **no candidate fits**
- Pages: 03-kurepa-independence.html, 04-easton-forcing.html, 05-iterated-forcing.html, 06-ma-consistency.html, 07-countable-iterations.html
- Sentence: の大きさは $\omega_{1}$ 未満）が使える。同じ定義域が $\kappa$ 回現れる場合は、その定義域 $d$ 上の関数の可能性は、$\mu\defeq\sup\{\lvert\alpha\rvert:\langle\alpha,\xi\rangle\in d\}$（$d$ は可算なので $\kappa$ の正則性より $\mu<\kappa$）について $\prod_{\langle\alpha,\xi\rangle\in d}\lvert\alpha\rvert\le\mu^{\omega}\le2^{\mu\cdot\omega}<\kappa$ 通りなので、相異なるという仮定に反する。そうでなければ根 $r$ の Δ 
  - `set:regular-cardinal`: NG — Here “正則性” refers to the regularity of the cardinal $\kappa$ (i.e. $\cf(\kappa)=\kappa$), which matches the card’s definition of a regular cardinal, so the term is used with the defined meaning.
  - `cx:holomorphic`: NG — Here "正則性" refers to the regularity property of the cardinal $\kappa$ (cofinality equals $\kappa$), not complex differentiability/analyticity of a function.
  - `top:separation-axioms`: NG — Here "正則性" refers to the regularity of the cardinal $\kappa$ (a set-theoretic property), not the topological separation axiom 正則 defined in the card.
  - `ag:regular-function`: NG — This use of 正則 refers to the regularity of the cardinal κ (a set-theoretic property), not to a regular function on a quasi-affine variety as defined in the card.
  - `ag:quasi-projective-regular`: NG — Here "正則" refers to the regularity of the cardinal $\kappa$ (a set-theoretic notion), not to a regular function on a quasi-projective variety.

## 「濃度」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `set:cardinality` → **no candidate fits**
- Pages: 03-kurepa-independence.html, 04-easton-forcing.html
- Sentence: a<\kappa$ なら $(\bigcup G)_{\alpha}(\xi)\defeq(\bigcup G)(\alpha,\xi)$ で定まる写像は $\omega_{1}$ から $\alpha$ の上への写像である。よって $\omega_{1}$ と $\kappa$ の間の順序数はすべて $M[G]$ で濃度 $\le\omega_{1}$ となり、$\kappa=\omega_{2}^{M[G]}$。
  - `set:cardinality`: NG — Here 濃度 refers to cardinality in the sense of the cardinality of an ordinal/set (a cardinal number comparison), which matches the card's notion of 濃度 as the least ordinal equinumerous with a well-orderable set.

## 「直積」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `set:cartesian-product` → **no candidate fits**
- Pages: 01-products.html, 04-easton-forcing.html, 05-iterated-forcing.html, 07-countable-iterations.html
- Sentence: **高い視点から：直積と逐次的な構成.** 積の補題は、テンソル積 $A\otimes B$ を「まず $A$ を係数に拡大し、その上で $B$ を拡大する」$(A\otimes_{K}K')\otimes\cdots$ と見る代数学の状況に似ている。$\PP_{0}\times\PP_{1}$ による強制は二つの独立な情報を同時に付け加え
  - `set:cartesian-product`: NG — Here 直積 refers to the Cartesian product of forcing notions $\PP_{0}\times\PP_{1}$, which is indeed the set-theoretic product of two posets, matching the card's definition of $A\times B$ as ordered pairs.
  - `mod:direct-sum`: NG — Here "直積" refers to the Cartesian product of forcing posets $\PP_{0}\times\PP_{1}$, not the direct product of modules defined in the card.

## 「確率」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `comp:probabilistic-tm` → **no candidate fits**
- Pages: 02-cohen-model.html
- Sentence: **高い視点から：局所性.** コーエン強制の「小さな台」は、ジェネリックな対象が「局所的には小さな部分からしか決まらない」ことを表す。$M[G]$ の一つの実数を決めるのに使われるのは、$G$ のうち可算個の座標だけである。これは確率論で、無限個の独立な確率変数の積空間の上の可測関数が可算個の座標にしか依存しないことに似ている。コーエン実数は「$M$ のどの無限集合も二分する」（\ref{set:cohen-real-splits}）という意味で $M$ に対して十分にランダムであり、その結果、$M$ で作った小さな極大族は、壊れるもの（独立族）と
  - `comp:probabilistic-tm`: NG — Here "確率" refers to probability in general probability theory (probability variables/measure spaces), not the specific probability of computation branches of a probabilistic Turing machine defined in the card.

## 「稠密」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `set:dense-set` → **fits: `set:separable-subset`**
- Pages: 01-products.html, 02-cohen-model.html, 03-kurepa-independence.html, 04-easton-forcing.html, 05-iterated-forcing.html, 06-ma-consistency.html, 07-countable-iterations.html
- Sentence: eneric-factor} より $G_{0}=i_{0}^{-1}[G_{0}\times G_{1}]$ は $M$ 上 $\PP_{0}$-ジェネリック。$G_{1}$ が $M[G_{0}]$ 上 $\PP_{1}$-ジェネリックであることを示すため、$D\in M[G_{0}]$ を $\PP_{1}$ で稠密とする。$D=\tau_{G_{0}}$ となる $\tau\in M^{\PP_{0}}$ と、
  - `set:dense-set`: NG — This is about a set being dense in a partial order (forcing), which matches the card's definition of a dense subset of a partial order.
  - `set:separable-subset`: OK

## 「結び」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `set:boolean-algebra` → **no candidate fits**
- Pages: 01-products.html
- Sentence: 積は通常ジェネリックでない（Kunen 第 VIII 章の演習 J1）。$G_{0}\times G_{1}$ がジェネリックであるためには、$G_{1}$ が $M[G_{0}]$ 上ジェネリックであることが必要である。次の定理がそれを示し、$\PP_{0}\times\PP_{1}$ による強制を二段階の反復強制と結びつける。
  - `set:boolean-algebra`: NG — The term 結び in the sentence is a verb meaning "to connect/link" (結びつける), not the Boolean-algebra join (supremum) defined in the card.

## 「要求」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `logic:ctl-successor-def` → **no candidate fits**
- Pages: 04-easton-forcing.html, 05-iterated-forcing.html, 06-ma-consistency.html
- Sentence: \}$ そのものである。$\dom(E)$ は基数だけを含むので、(c) が新しいことを言うのは $\lambda$ が弱到達不能のときだけで、そのとき $\lambda$ 未満の $\kappa$ のうち $\lambda$ 未満個を除いて $p(\kappa)$ が $\mathbf{1}$（$=0$）であることを要求する。
  - `logic:ctl-successor-def`: NG — This "要求する" means "requires/demands" in a set-theoretic forcing context, not the modal-logic technical term "要求" (a negated AX formula's negated subformula).

## 「逆極限」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `cat:limit` → **fits: `ring:inverse-limit`**
- Pages: 05-iterated-forcing.html
- Sentence: to\PP$ に当たるのが完全な埋め込み $i$ の「縮約」で、\ref{set:two-step-factor} は「全空間のジェネリック点は、底空間のジェネリック点と、その上のファイバーのジェネリック点の組である」と読める。超限回の反復は、この束を繰り返し積み重ねた塔であり、極限では「台」を制限することで塔の極限（逆極限の\term[部分空間]{top:subspace}）を選ぶ。有限台は「有限個の座標しか動かさない」という意味で直和的、完全極限は直積的な極限に当たる、という比喩が成り立つ（これは本サイトの比喩であり、厳密な圏論的対応を主張するものではない）。
  - `cat:limit`: NG — Here "逆極限" (inverse limit) refers to a limit of an inverse system, which is a special case of the categorical limit defined in the card, so it matches the notion.
  - `ring:inverse-limit`: OK

## 「選択」 in 01-foundations/04-set-theory/08-iterated-forcing
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 06-ma-consistency.html, 07-countable-iterations.html
- Sentence: **段階 6：選択の正当化.** 列挙や $\sigma_{\xi}$ を「選ぶ」ことを $M$ の中の超限再帰として正当化するには、$M$ の AC から、大きさ $\kappa$ の各集合に型 $\kappa$ の整列を定義可能な仕方で割り当てられるわけではない、という点に注意が要る。Kunen の処方は、最初に $M$ の中で $
  - `logic:pdl-syntax`: NG — Here「選択」means "choice" (as in the axiom of choice / choosing elements), not the PDL program operator "choice" (union of programs).

## 「1 の分割」 in 01-foundations/05-proof-theory/01-sequent-calculus
- Default: `top:partition-of-unity` → **no candidate fits**
- Pages: 05-maehara-interpolation.html
- Sentence: 分割 $[A\,;\ ]\Rightarrow[\ ;B]$ について証明の構成をたどる。3 は場合 5（第 2 の側）で、2 の分割 $[\forall y\,Q(y)\,;P(x)]\Rightarrow[\ ;Q(x)]$ の補間式をそのまま使う。2 は場合 6（第 1 の側）で、1 の分割 $[Q(x),\forall y\,Q(y)\,;P(x)]\Rightarrow[\ ;Q(x)]$ の補間式は場合 (1b) より $Q(x)$ である。第 1 の側 $\forall y\,Q(y)\Rightarrow$ の自由変数は $\varnothing$ で $x$ を含まないので場合 (6b) にな
  - `top:partition-of-unity`: NG — This "分割" refers to a partition/sequent split in a proof, not a partition of unity in topology.

## 「両立」 in 01-foundations/05-proof-theory/01-sequent-calculus
- Default: `set:compatible` → **no candidate fits**
- Pages: 01-alpha-equivalence.html, 02-sequent-calculus.html, 05-maehara-interpolation.html
- Sentence: -equivalence}）、それが同値関係であることを循環なしに示す（\ref{pt:alpha-equivalence-relation}）。その上で、代入による特徴づけ（\ref{pt:alpha-characterization}）、束縛変数の付け替え（\ref{pt:alpha-renaming}）、代入との両立（\ref{pt:alpha-substitution}）、捕獲を避ける代入（\ref{pt:capture-avoiding-substitution}）を導き、意味論と自然演繹の導出可能性が α 同値で不変であること（\ref{pt:alpha-semantics}, \ref{pt:alpha-derivabil
  - `set:compatible`: NG — Here "両立" means compatibility of a relation with substitution, not the poset compatibility relation defined in the card.

## 「二項関係」 in 01-foundations/05-proof-theory/01-sequent-calculus
- Default: `set:relation` → **no candidate fits**
- Pages: 01-alpha-equivalence.html, 02-sequent-calculus.html, 05-maehara-interpolation.html
- Sentence: 論理式の二項関係 $\varphi\equiv_{\alpha}\psi$ を、$c(\varphi)$ に関する再帰で次のように定める。
  - `set:relation`: NG — Here "二項関係" refers to a binary relation between formulas (α-equivalence), which is a relation as a set of ordered pairs, but the card defines a general "関係" (relation) on a set, not specifically a binary relation between two distinct sets; the term is a variant/special case not matching the card's defined notion of relation on $A$.

## 「全域的」 in 01-foundations/05-proof-theory/01-sequent-calculus
- Default: `logic:ctl-semantics` → **no candidate fits**
- Pages: 03-cut-elimination.html
- Sentence: この無矛盾性の証明は、意味論（モデルの存在）を使わない純粋に構文論的なものである。ただし、カットを除くと導出の大きさは一般に超指数関数的に増えうるので、この議論を算術の中で形式化するには、そのような増加をする関数が全域的であることを使う必要がある、と一般に言われている（本サイトでは確かめていない）。
  - `logic:ctl-semantics`: NG — Here "全域的" describes a function being total (defined on all inputs), not the totality/Seriality of the accessibility relation R in a CTL model.

## 「反射律」 in 01-foundations/05-proof-theory/01-sequent-calculus
- Default: `set:forcing-poset` → **no candidate fits**
- Pages: 01-alpha-equivalence.html
- Sentence: **反射律.** $\forall x\,\alpha$ について、$\alpha$ について新しく $x$ と異なる $z$ をとると、帰納法の仮定より $(z\ x)\cdot\alpha\equiv(z\ x)\cdot\alpha$。
  - `set:forcing-poset`: NG — 反射律 here refers to a proof step in a syntactic/induction argument, not the reflexivity condition on a partial order as defined in the card.

## 「命題論理」 in 01-foundations/05-proof-theory/01-sequent-calculus
- Default: `logic:prop-formula` → **no candidate fits**
- Pages: 05-maehara-interpolation.html, 07-herbrand.html
- Sentence: 代数的には、補間定理は「共通の部分言語の理論を通じた二つの理論の貼り合わせがうまくいく」という**融合性**（amalgamation）の性質と結びつくことが一般に知られている。論理式を同値性で割ったリンデンバウム代数を考えると、命題論理ではブール代数の、一階述語論理ではハルモスの**多進代数**（polyadic algebra）やタルスキらの**円柱代数**（cylindric algebra）の性質として述べ直される。多進代数の枠組みでクレイグとベートの定理を扱ったドゥエニョ（A. Daigneault）の研究があると言われている（本サイトでは原
  - `logic:prop-formula`: NG — the card defines the formal language of propositional formulas, not the logical system “propositional logic” referred to in the sentence.

## 「定義による拡大」 in 01-foundations/05-proof-theory/01-sequent-calculus
- Default: `set:defined-notions` → **no candidate fits**
- Pages: 06-beth-definability.html
- Sentence: 圏論的に言い直すと、$T$ のモデルの圏から $\mathcal{L}$ 構造の圏への忘却関手が対象について単射である（暗の定義）ならば、$T$ は $\mathcal{L}$ のある理論の**定義による拡大**になっている（明示的な定義）、ということである（これは本サイトの要約である）。代数論理では、ハルモスの多進代数の枠組みで、ベートの定理を代数の性質として述べ直したドゥエニョの研究があると言われている（本サイトでは原論文を確かめていない）。
  - `set:defined-notions`: NG — the card defines defined relations and operations (definitional abbreviations), not the model-theoretic notion of a definitional extension of a theory.

## 「導出に関する帰納法」 in 01-foundations/05-proof-theory/01-sequent-calculus
- Default: `comp:L-semantics` → **no candidate fits**
- Pages: 04-equivalence-of-systems.html, 05-maehara-interpolation.html
- Sentence: より強く、$\vdash_{\mathrm{Cut}}\Gamma\Rightarrow\Delta$ なら $\Gamma\cup\neg\Delta\vdash_{\mathrm{ND}}\bot$ を、導出に関する帰納法で示す。そうすれば $\Delta=\{\varphi\}$ のとき $\Gamma\cup\{\neg\varphi\}\vdash_{\mathrm{ND}}\bot$ で、RAA より $\Gamma\vdash_{\mathrm{ND}}\varphi$。以下 $\Sigma\defeq\Gamma\cup\n
  - `comp:L-semantics`: NG — This is induction on a sequent-calculus derivation (proof tree), not on the derivation of the evaluation relation $\Downarrow$ defined in the card.

## 「従う」 in 01-foundations/05-proof-theory/01-sequent-calculus
- Default: `logic:positional-strategy` → **no candidate fits**
- Pages: 02-sequent-calculus.html, 05-maehara-interpolation.html
- Sentence: 集合が交換を、初期シーケントと L$\bot$ の文脈 $\Gamma,\Delta$ が弱化を、L$\forall$ の前提に主論理式 $\forall x\,A$ を残すことと L$\to$ の文脈の共有が縮約の多くを、それぞれ吸収している。両者が同じシーケントを導出することは、以下の補題（弱化・縮約の許容性）から従う、と一般に言われている。
  - `logic:positional-strategy`: NG — Here「従う」means "follows logically (is derivable)", not "a play follows a positional strategy".

## 「推論規則」 in 01-foundations/05-proof-theory/01-sequent-calculus
- Default: `logic:deduction-system` → **fits: `pt:pa-x`**
- Pages: 02-sequent-calculus.html
- Sentence: ゲンツェンのシーケント計算 $\mathsf{LK}$ を、構造規則（弱化・縮約）を推論規則に吸収した形（一般に G3 型と呼ばれる形）で定義し、その構造的性質を示す。中心は、導出の高さを増やさずに、(1) 項を代入する（固有変数の一斉付け替えを含む、\ref{pt:lk-substitution}）、(2) 論理式を加える（弱化、\ref{pt:lk-weakening}）、(3) 規則を逆にたどる（反転、
  - `logic:deduction-system`: NG — 「推論規則」はシーケント計算の規則（LK の規則）を指しており、カードが定義する自然演繹の「導出」とは異なる概念である。
  - `pt:pa-x`: OK

## 「現れる変数」 in 01-foundations/05-proof-theory/01-sequent-calculus
- Default: `logic:derivation-symbols` → **no candidate fits**
- Pages: 04-equivalence-of-systems.html
- Sentence: 汎化を定理にだけ許すのは、仮定に自由に現れる変数について汎化すると健全でなくなるからである（$P(x)\vdash\forall x\,P(x)$ を許してはならない）。定義から、$\Gamma\vdash_{\mathsf{H}}$ は仮定（$\varphi\in\Gamma$ なら $\Gamma\vdash_{\mathsf{H}}\varphi$）、弱化、モ
  - `logic:derivation-symbols`: NG — the sentence uses "現れる変数" to mean free variables occurring in a formula/assumption, not the set Var(D) of variables occurring in a derivation as defined in the card.

## 「結び」 in 01-foundations/05-proof-theory/01-sequent-calculus
- Default: `set:boolean-algebra` → **no candidate fits**
- Pages: 02-sequent-calculus.html, 05-maehara-interpolation.html
- Sentence: シーケントの論理式を「使える資源」と見ると、弱化は資源を捨てること、縮約は資源を複製することに当たる。本ページの定式化では、これらを推論規則に組み込んでおき、補題として「捨ててもよい」「複製を一つにまとめてもよい」ことを示した。この見方を推し進め、弱化や縮約を制限した論理が線形論理や関連論理であり、資源の計算や型理論と結びついている、と一般に説明される（これは本サイトの比喩と要約である）。
  - `set:boolean-algebra`: NG — In the sentence, 結びついている means "connected/associated," not the Boolean-algebra join (supremum) defined in the card.

## 「要求」 in 01-foundations/05-proof-theory/01-sequent-calculus
- Default: `logic:ctl-successor-def` → **no candidate fits**
- Pages: 01-alpha-equivalence.html
- Sentence: 「$z$ は $\varphi_{1},\dots,\varphi_{k}$ について新しい」とは $z\notin\mathrm{Var}(\varphi_{1})\cup\dots\cup\mathrm{Var}(\varphi_{k})$ のことをいう（変数の有限集合 $V$ を加えて $z\notin V$ も要求することがある）。
  - `logic:ctl-successor-def`: NG — Here "要求" means "require/demand" in the ordinary sense, not the technical notion of a "request" (a negated formula ¬F at a world) defined in the card.

## 「証明可能」 in 01-foundations/05-proof-theory/01-sequent-calculus
- Default: `logic:derivability` → **fits: `set:formal-deduction`**
- Pages: 07-herbrand.html
- Sentence: 一階述語論理の証明可能性は、一般には命題論理に帰着しない。しかし、全称論理式 $\forall\vec{x}\,B$（$B$ は量化子を含まない）だけからなる前件の場合には帰着する：$\forall\vec{x}\,B\Rightarrow$ がカットなしで導出できることと、有限個の**代入例** $B(\vec{t}_{1}),\dots
  - `logic:derivability`: NG — the sentence uses "証明可能性" (provability) as a general concept, but the card defines 導出可能性 (derivability) via a specific natural-deduction derivation relation, not the term 証明可能.
  - `set:formal-deduction`: OK

## 「Δ 論理式」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `pt:sigma-formula` → **no candidate fits**
- Pages: 01-peano-arithmetic.html, 02-beta-function.html, 03-sequence-coding.html, 05-arithmetization.html, 06-derivability-d1-d2.html, 07-formalized-sigma1-completeness.html, 08-diagonal-first-incompleteness.html, 09-rosser-tarski.html, 10-second-incompleteness-lob.html
- Sentence: 2. Δ 論理式全体は、原子論理式を含み、$\neg,\wedge,\vee,\to$ と有界量化で閉じている。
  - `pt:sigma-formula`: NG — According to the card, a Δ formula is one where both φ and ¬φ are Σ formulas, not simply a class closed under the listed operations; the sentence describes a different (syntactic closure) characterization.

## 「クラス」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `set:class` → **no candidate fits**
- Pages: 04-representability.html
- Sentence: $\mathcal{C}$ を、零関数 $Z^{k}$、後者 $S$、射影 $U^{k}_{i}$、和 $x+y$、積 $x\cdot y$、大小の特性関数 $\chi_{<}$ を含み、合成と**正則な**最小化で閉じた最小の関数のクラスとする（原始再帰は含めない）。$\chi_{R}\in\mathcal{C}$ となる関係 $R$ を **$\mathcal{C}$ 関係**という。
  - `set:class`: NG — Here "クラス" means a collection of functions closed under certain operations, not a class as a logical formula-defined collection of sets.

## 「コード」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `comp:prime-sequence-code` → **no candidate fits**
- Pages: 02-beta-function.html, 03-sequence-coding.html, 05-arithmetization.html, 06-derivability-d1-d2.html, 07-formalized-sigma1-completeness.html, 08-diagonal-first-incompleteness.html, 09-rosser-tarski.html
- Sentence: $(a,b)$ の組が「長さを指定しない有限列のコード」の役割を果たす。β 関数の補題は、どんな長さのどんな列もコード化でき、しかもコードの大きさを列の項と長さから評価できることを主張する。この評価は、後で「$x$ は項（論理式、証明）のコードである」といった概念を**有界な量化子で**、したがって Δ 論理式で書くのに使う（\ref{pt:page-sequence-coding}）。
  - `comp:prime-sequence-code`: NG — This "コード" refers to a code for finite sequences via the β function, not the prime-factorization code of a finite-support state σ defined in the card.

## 「一階述語論理」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `set:first-order-language` → **no candidate fits**
- Pages: 01-peano-arithmetic.html, 04-representability.html, 05-arithmetization.html
- Sentence: - 導出可能性 $\Sigma\vdash\varphi$ は一階述語論理の自然演繹による（\ref{logic:derivability}）。\ref{logic:completeness}より、文の集合 $T$ と論理式 $\varphi$ について、$T\vdash\varphi$ は「$T$ のすべてのモデル $\mathcal{M}$ とすべての割り当て $v$ で $\mathc
  - `set:first-order-language`: NG — 一階述語論理 is first-order predicate logic, a broader logical system, not the specific formal language of set theory defined in the card.

## 「両立」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `set:compatible` → **no candidate fits**
- Pages: 01-peano-arithmetic.html
- Sentence: (2) $\mathrm{Prime}(x)\defeq\underline{1}<x\wedge\forall y<x\,(y\mid x\to y=\underline{1})$（$y=0$ は $0\mid x$ が $x=0$ を意味し、$1<x$ と両立しないので問題ない）。(1) より $y\mid x$ は Δ で、Δ 論理式は $\to,\wedge$ と有界量化で閉じているので、$\mathrm{Prime}(x)$ は Δ 論理式である。
  - `set:compatible`: NG — Here "両立しない" means "is incompatible with" in the sense of logical consistency (cannot both hold), not the poset compatibility relation defined in the card.

## 「代入」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `logic:substitution` → **no candidate fits**
- Pages: 01-peano-arithmetic.html, 04-representability.html, 05-arithmetization.html, 06-derivability-d1-d2.html, 07-formalized-sigma1-completeness.html, 08-diagonal-first-incompleteness.html
- Sentence: m{O2}$ は「$m<n+1\iff m<n$ または $m=n$」）。帰納法の公理：$y_{i}$ に値 $b_{i}$ を割り当てた割り当てを $u$ とし、$A\defeq\{n\in\N:\mathcal{N},u[x\mapsto n]\models\varphi\}$ とおく。前件が成り立つなら、意味論的代入補題（\ref{logic:semantic-substitution}）より $0\in A$ かつ「$n\in A\Rightarrow n+1\in A$」なので、自然数の帰納法により $A=\N$、すなわち後件 $\forall x\,\varphi$ が成り立つ。無矛盾性は \ref{logic:satisf
  - `logic:substitution`: NG — This occurrence refers to semantic substitution (the semantic substitution lemma), not the syntactic substitution operation defined in the card.
  - `logic:modal-substitution`: NG — This "代入" refers to semantic assignment/variable valuation in first-order logic, not the syntactic substitution map on modal formulas defined in the card.
  - `logic:mu-substitution`: NG — the sentence uses "代入" for a semantic assignment of values to variables (semantic substitution lemma), not the syntactic substitution of a formula for a variable defined in the card.
  - `logic:lambda-substitution`: NG — This is semantic substitution (assignment modification) in model theory, not the lambda-calculus syntactic substitution M[N/x] defined by the card.

## 「全域的」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `logic:ctl-semantics` → **no candidate fits**
- Pages: 04-representability.html, 05-arithmetization.html
- Sentence: 前のページまでで、原始再帰関数が $\PA$ の Σ 論理式で定義できることを見た（\ref{pt:primitive-recursive-definable}）。本ページでは、これを**すべての全域的な計算可能関数**に広げ、しかもそれが帰納法の公理をまったく含まない非常に弱い有限公理系 **$\mathsf{Q}$**（ロビンソン算術、\ref{pt:robinson-q}）ですでに成り立つことを示す（**表現可能性定理**、\tref{comp:representability}）：全域的な計算可能関数 $f$
  - `logic:ctl-semantics`: NG — Here "全域的" means total (defined on all inputs) for computable functions, not the totality condition on the accessibility relation R in a CTL model.

## 「再帰的」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `comp:partial-recursive` → **no candidate fits**
- Pages: 05-arithmetization.html
- Sentence: 各述語・関数は、\ref{pt:course-of-values} の Step 5 により、標準構造では定義の場合分けを満たすただ一つの関数である。一方、メタの概念（項であること、$\mathrm{FV}$、代入、代入可能性）の再帰的な定義（\ref{logic:free-variables}, \ref{logic:substitution}, \ref{logic:substitutable}）をコードに移すと、\ref{pt:godel-injective}（成分が一意に定まること）により、同じ場合分けを満たす関数になる。よって両者は一致する
  - `comp:partial-recursive`: NG — Here "再帰的" describes a recursive (inductive) definition in the metatheory, not a relation whose characteristic function is general recursive as defined in the card.

## 「合成」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `logic:while-program` → **fits: `set:relation-composition`**
- Pages: 03-sequence-coding.html, 04-representability.html, 05-arithmetization.html, 08-diagonal-first-incompleteness.html
- Sentence: が成り立つ。また、Σ 関数の合成は Σ 関数である。
  - `logic:while-program`: NG — Here "合成" refers to composition of Σ functions, not the sequential composition of while programs defined in the card.
  - `set:relation-composition`: OK

## 「始切片」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `set:initial-segment` → **no candidate fits**
- Pages: 01-peano-arithmetic.html, 04-representability.html, 09-rosser-tarski.html
- Sentence: $d$ は標準構造 $\mathcal{N}$ から任意のモデル $\mathcal{M}$ への埋め込みであり（1, 3）、その像は $\mathcal{M}$ の**始切片**である（4）。すなわち、どのモデルも「始めの部分に本物の自然数のコピーをもち、その先に（あれば）超準的な元が続く」形をしている。
  - `set:initial-segment`: NG — Here "始切片" means an initial segment of a model's order (an isomorphic copy of the standard naturals closed downward), not the set-theoretic predecessor set $\mathrm{pred}(A,x,R)$ defined in the card.

## 「従う」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `logic:positional-strategy` → **no candidate fits**
- Pages: 01-peano-arithmetic.html, 03-sequence-coding.html, 04-representability.html, 05-arithmetization.html, 06-derivability-d1-d2.html, 08-diagonal-first-incompleteness.html, 09-rosser-tarski.html, 10-second-incompleteness-lob.html
- Sentence: **Step 3（$\wedge,\vee$）.** 略記の意味（\ref{logic:abbreviation-semantics}）から直ちに従う。
  - `logic:positional-strategy`: NG — In the sentence, 従う means "follows immediately (from the semantics)," not a play following a positional strategy as defined in the card.

## 「推論規則」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `logic:deduction-system` → **fits: `pt:pa-x`**
- Pages: 04-representability.html, 06-derivability-d1-d2.html
- Sentence: **原始再帰的算術 $\mathsf{PRA}$**：言語にすべての原始再帰関数の記号をもち、それらの定義の等式（\ref{comp:primitive-recursive.1}〜\ref[5]{comp:primitive-recursive.5} を等式として書いたもの）と、量化子を含まない論理式についての帰納法の推論規則「$\varphi(0)$ と $\varphi(x)\to\varphi(S(x))$ から $\varphi(x)$」をもつ、量化子を使わない体系。スコーレム（1923）に始まり、テイトは「有限の立場の数学」の形式化とみなせると論じた。
  - `logic:deduction-system`: NG — Here "推論規則" refers to an inference rule of a formal system (a rule for deriving formulas), not to a natural deduction derivation (導出) as defined in the card.
  - `pt:pa-x`: OK

## 「整礎」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `set:well-founded-relation` → **fits: `set:well-founded-class-relation`**
- Pages: 10-second-incompleteness-lob.html
- Sentence: 理は、十分に強い無矛盾な理論は自分の無矛盾性を知り得ないという、理論の自己認識の限界を述べている。レーブの定理はそれをさらに一般化し、理論が自分の健全性を信じられるのは「すでに知っていること」についてだけだと言う。様相論理の側から見ると、$\Box(\Box p\to p)\to\Box p$ は「到達可能性関係の逆が整礎」という帰納法の原理だった（\ref{logic:gl}）。算術では、証明可能性の「一段深い」層（証明についての証明）への入れ子が無限に下降できない、ということに当たる。実際、この直観を正確にしたのが、$\mathsf{GL}$ が算術の証明可能性の論理として完全であるというソロヴェイの定理（\ref{pt:page-
  - `set:well-founded-relation`: NG — Here "整礎" refers to the converse of the accessibility relation being well-founded in modal logic (a property of a relation), which matches the card's notion of a well-founded relation, so it is the same notion.
  - `set:well-founded-class-relation`: OK

## 「有界量化」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `pt:sigma-formula` → **no candidate fits**
- Pages: 01-peano-arithmetic.html, 03-sequence-coding.html, 04-representability.html, 05-arithmetization.html
- Sentence: - 有界量化子：変数 $x$ を含まない項 $t$ について $\forall x<t\,\varphi\defeq\forall x\,(x<t\to\varphi)$、$\exists x<t\,\varphi\defeq\exists x\,(x<t\wedge\varphi)$。$t\le s\defeq(t<s\vee 
  - `pt:sigma-formula`: NG — 有界量化 is a bounded quantifier, not the Σ/Δ formula classes defined in the card.

## 「構文の算術化」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `pt:syntax-predicates` → **no candidate fits**
- Pages: 04-representability.html
- Sentence: 3. 全域的な関数 $f$ について、(a) $f$ は計算可能、(b) $f$ のグラフは $\mathcal{N}$ で狭義の Σ 論理式により定義できる、は同値であり、このとき (c) $f$ はある論理式によって $\mathsf{Q}$ で表現される。（逆の (c)⇒(a) は構文の算術化を使うので、\see{pt:q-representable-computable} で示す。）
  - `pt:syntax-predicates`: NG — 「構文の算術化」は論理式や項を数でコード化する手法を指し、カードが定義する述語・関数（Var, Tm, Fm など）の個別定義とは異なる。

## 「現れる変数」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `logic:derivation-symbols` → **no candidate fits**
- Pages: 01-peano-arithmetic.html, 05-arithmetization.html
- Sentence: - $S(x)$ は $\varphi$ の中で $x$ に代入可能である。実際、$S(x)$ に現れる変数は $x$ だけで、$\varphi$ の中で自由な $x$ の出現が $\forall x$ の作用域に入ることはない（\ref{logic:substitutable}）。
  - `logic:derivation-symbols`: NG — Here "現れる変数" refers to variables occurring in the term $S(x)$, not the set $\mathrm{Var}(D)$ of variables occurring in a derivation as defined in the card.

## 「表現可能」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `comp:representable` → **no candidate fits**
- Pages: 04-representability.html
- Sentence: 的な計算可能関数は、和・積・大小の特性関数から**合成と（正則な）最小化だけで**作れることを示す（\ref{pt:kleene-class-computable}）。原始再帰は、ゲーデルの β 関数（\ref{pt:beta}）で最小化に置き換えられる。次に算術の側で、この二つの操作が $\mathsf{Q}$ での表現可能性を保つことを示す（\ref{comp:representability}）。ここで使う $\mathsf{Q}$ の性質は、数項の計算と、数項より小さい元が数項であること（\ref{pt:q-numerals}）と、大小の三分律だけである。最後に、$\N$ で Σ 論理式によって定義できる関係がちょうど半決定可能な関
  - `comp:representable`: NG — one short English sentence why
  - `logic:t-representable`: NG — the sentence uses 表現可能性 for provability/definability in the theory Q, not the card’s notion of a function being representable by a closed term in type theory.
  - `logic:f-representable-def`: NG — This occurrence is about representability in Robinson arithmetic Q, not about System F representability as defined in the card.

## 「要求」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `logic:ctl-successor-def` → **no candidate fits**
- Pages: 01-peano-arithmetic.html, 04-representability.html
- Sentence: る。これは集合論で、Σ₁ 論理式が推移的な構造の拡大で上に保たれる（証拠が小さい構造にあれば大きい構造にもある）という絶対性の現象と同じ形である。有界量化子は「すでに見えている範囲」だけを調べ、存在量化子は「証拠を一つ見せる」だけなので、構造を外側に広げても真理は失われない。逆に全称量化子は「すべてを調べ尽くす」ことを要求するので、新しい元が加わると偽になりうる。計算論の言葉では、Σ 文は「探索すればいつか証拠が見つかる」主張（半決定可能な主張）であり、Σ 完全性は「そのような証拠は形式的な証明に変換できる」ことを述べている。
  - `logic:ctl-successor-def`: NG — Here「要求する」means "demand/require" in general prose, not the modal-logic technical term「要求」(a negated AX formula) defined in the card.

## 「計算可能関数」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `comp:L-computable` → **fits: `comp:mapping-reducible`**
- Pages: 03-sequence-coding.html, 04-representability.html
- Sentence: 再帰的でないが、二重の列を使えば Σ 論理式で定義でき、$\PA$ で関数的であることも示せる、とされる（Boolos 第 2 章。本サイトでは詳細を確認していない）。一方、Σ 論理式で定義される全域関数のうち $\PA$ で関数的と証明できるものには限りがある（どの $\PA$ で関数的な Σ 関数よりも速く増加する計算可能関数がある）ことが知られている、とされる。
  - `comp:L-computable`: NG — the sentence uses "計算可能関数" only as a general class in a comparison about growth rates, not with the card's specific definition of L-computable total functions.
  - `comp:mapping-reducible`: OK

## 「選言」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `logic:abbreviations` → **no candidate fits**
- Pages: 01-peano-arithmetic.html, 04-representability.html, 05-arithmetization.html
- Sentence: **3.** $n<m$ なら 2 より $d(n)<d(m)$（右辺の選言の一つ）。$n\ge m$ なら $d(n)<d(m)$ とすると 2 より $d(n)=d(k)$（ある $k<m\le n$）。一方 $k<n$ なので前半より $d(k)<d(n)=d(k)$ となり \ref{pt:pa-order.4} に反する。単射性：$n\neq m$ なら $n<m$ か $m<n$ 
  - `logic:abbreviations`: NG — 選言 is used as an ordinary mathematical term (disjunction), not as the abbreviation defined in the card.

## 「関手」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `cat:functor` → **no candidate fits**
- Pages: 05-arithmetization.html
- Sentence: **高い視点から：自己言及の土台.** ゲーデル数化は、構文という「言語の外の世界」を、算術という「言語が語る世界」の中に写す関手のようなものである。本ページで示したのは、この写しが構文の操作（代入、規則の適用）を**算術の中で計算可能な操作**（Σ 関数）に写すということである。とくに $\mathrm{sub}$ と $\mathrm{num}$ により、論理式が「自分自身のコードを自分に代入した結果」について語れるようになる。これが次のペー
  - `cat:functor`: NG — This is a metaphorical use of "functor" (an analogy for Gödel numbering), not the precise category-theoretic functor defined in the card.

## 「非有界」 in 01-foundations/05-proof-theory/02-incompleteness
- Default: `set:cofinal-map` → **no candidate fits**
- Pages: 05-arithmetization.html
- Sentence: \mathrm{num}$ により、論理式が「自分自身のコードを自分に代入した結果」について語れるようになる。これが次のページ以降の対角化の土台になる。構文の概念が Δ 論理式で書けるのは、それらが「部分を調べ尽くせば決まる」有限的な概念だからであり、証明可能性 $\mathrm{Bew}$ だけが「証明を探す」という非有界な探索を含むので Σ にとどまる。
  - `set:cofinal-map`: NG — Here "非有界" describes an unbounded search in a computability/proof-search sense, not the set-theoretic unboundedness of a subset of an ordinal as defined in the card.

## 「コード」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `comp:prime-sequence-code` → **no candidate fits**
- Pages: 05-fixed-point-second-proof.html, 07-solovay.html, 08-gls-uniform-completeness.html
- Sentence: くの自己言及的な算術の文の記述にそのまま対応する。Boolos は、$p$ だけを含む $B$ に対して、自由変数 $x$ を一つもつ算術の論理式 $[B](x)$ を、$p$ を $x$ に、$\Box C$ を「$\{C\}(x)$ が証明可能」に置き換えて定める（$\{C\}(x)$ は、$x$ が文 $S$ のコードのとき $C^{\ast}$（$p^{\ast}=S$）のコードを返す関数の項で、$\to$ のコードの組み立てと「$\mathrm{Bew}(\Godel{F})$ のコード」を返す関数から作る）。すると $p^{\ast}=S$ のとき $\PA\vdash B^{\ast}\leftrightarrow[B](\
  - `comp:prime-sequence-code`: NG — Here "コード" refers to Gödel codes of formulas/sentences, not the finite-support state code defined in the card.

## 「ソロヴェイの階層」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `pt:solovay-hierarchy` → **no candidate fits**
- Pages: 03-reflection-incompactness.html
- Sentence: **関連する結果.** ソロヴェイの階層定理は、閉様相論理式の標準形定理（\ref{pt:letterless-normal-form}）が「閉」であることに本質的に依存することを示している。一方、\ref{pt:page-fixed-point-theorem}は、$p$ について様相の下にしか現れない方程式の解は閉様相論理式や $p$ 以外の変数の論理式
  - `pt:solovay-hierarchy`: NG — ソロヴェイの階層 is a different hierarchy (Solovay's arithmetical/letterless hierarchy), not the $H_{n}$ hierarchy of one-variable formulas defined in the card.

## 「一つでも」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `comp:ntm-definition` → **no candidate fits**
- Pages: 03-reflection-incompactness.html
- Sentence: 閉様相論理式は、$\mathsf{GL}$ で $\Box^{n}\bot$ たちの真理関数的な組み合わせと同値だった（\ref{pt:letterless-normal-form}）。すなわち「様相の中に真理関数的な結合を入れ子にする」必要がない。命題変数が一つでもあると、そうはならないことを示す。
  - `comp:ntm-definition`: NG — In the sentence "一つでも" means "even one" (if there is even one propositional variable), not the "at least one branch exists" acceptance notion from the card.

## 「下限」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `calc:supremum` → **no candidate fits**
- Pages: 03-reflection-incompactness.html
- Sentence: - 鳩の巣補題（\ref{pt:reflection-pigeonhole}）は推移性だけを使い、逆整礎性は使わない。レイヴァントの定理と反映原理の下限では、$\mathsf{GL}$ の健全性・完全性を通して有限・推移的・非反射的なモデルを使う。
  - `calc:supremum`: NG — Here "下限" means a lower bound on the strength/scope of the reflection principle, not the order-theoretic infimum of a subset as defined in the card.

## 「付値」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `logic:assignment` → **fits: `logic:kripke-model`**
- Pages: 02-letterless-normal-form.html, 04-fixed-point-theorem.html, 05-fixed-point-second-proof.html, 06-interpolation.html, 08-gls-uniform-completeness.html
- Sentence: - **閉であること**：命題変数の場合がないので、付値 $V$ は一度も使われない。命題変数 $p$ があると、ランク $0$ の二つの世界で $p$ の真理値が異なりうるので、この補題は成り立たない。
  - `logic:assignment`: NG — Here "付値" (valuation) assigns truth values to propositional variables, whereas the card defines 割り当て as a mapping from variables to elements of a structure's domain.
  - `logic:kripke-model`: OK

## 「係数」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `comp:linear-system` → **no candidate fits**
- Pages: 06-interpolation.html
- Sentence: **高い視点から：一意性は存在を生む.** ベートの定理の考え方は、「方程式の解が高々一つなら、その解は係数だけで書ける」というものである。これは代数で、多項式の根がガロア群の作用で動かないなら係数の有理式で書ける、という原理に似ている：ここでは「$p$ を $q$ に取り替える」操作が、$D$ を満たす限り $p$ を動かさないこと（ベルナルディの補題）が、$p$ が共通の語彙（$p$ 以外の命題変数）で定義できること（補
  - `comp:linear-system`: NG — Here "係数" refers to coefficients of a polynomial/equation in the algebraic sense, not the languages $A_{ij}, B_{i}$ serving as coefficients in a system of language equations.

## 「値域」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `set:relation` → **no candidate fits**
- Pages: 03-reflection-incompactness.html
- Sentence: 否定を仮定すると、各 $j\in\{0,1,\dots,n\}$ に対して $w_{j}\not\models\Box A_{i}\to A_{i}$ となる $i=f(j)<n$ がとれる。$f\colon\{0,\dots,n\}\to\{0,\dots,n-1\}$ で、定義域が $n+1$ 個、値域が $n$ 個なので（鳩の巣原理）、$j<k\le n$ で $f(j)=f(k)=i$ となるものがある。このとき $w_{j}\not\models A_{i}$ かつ $w_{k}\models\Box A_{i}$。一方、$w_{k}Rw_{k-1}R\cdots Rw_{j}$ と推移性より $w_{k}Rw
  - `set:relation`: NG — Here "値域" means the range (image) of the function $f$, not the range of a relation as defined in the card.

## 「再帰的」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `comp:partial-recursive` → **no candidate fits**
- Pages: 02-letterless-normal-form.html, 04-fixed-point-theorem.html, 06-interpolation.html, 07-solovay.html
- Sentence: ![B]\!]$ に属するか属さないかなので、$d(B)\in[\![B]\!]$ なら補有限、そうでなければ $[\![B]\!]\subset[0,d(B))$ で有限（\ref{pt:trace-finite-cofinite} とも整合する）。最後の主張は、定義に従って $m\le d(B)$ についての所属を再帰的に計算すればよい（$[\![\Box C]\!]$ の $m$ での値は $C$ の $[0,m)$ での値だけで決まる）。
  - `comp:partial-recursive`: NG — Here "再帰的に計算" means computing recursively/iteratively by following the definition, not the technical notion of a relation being recursive (general recursive characteristic function).

## 「割り当て」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `logic:assignment` → **no candidate fits**
- Pages: 01-arithmetical-soundness.html, 03-reflection-incompactness.html, 04-fixed-point-theorem.html, 08-gls-uniform-completeness.html
- Sentence: 様相論理の $\Box$ を「$\PA$ で証明可能」と読むとき、どの様相論理の原理が正しいか。これを正確に問うために、命題変数に算術の文を割り当てる**算術的解釈**を定める。本ページでは、$\mathsf{GL}$ の定理はどの算術的解釈のもとでも $\PA$ で証明でき（**算術的健全性**）、$\mathsf{GL}$ に反映原理 $\Box A\to A$ を加えた $\mathsf{GLS}$ の定理はどの算術的解釈のもとでも真であることを示す。逆（算
  - `logic:assignment`: NG — Here “割り当てる” means assigning arithmetic sentences to propositional variables (an arithmetic interpretation), not a variable assignment map $v\colon\mathrm{Var}\to M$ in a structure.

## 「単射」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 02-letterless-normal-form.html, 08-gls-uniform-completeness.html
- Sentence: この階段の高さについての有限または補有限の条件の代数（$\N$ の有限・補有限部分集合のなすブール代数に、演算 $X\mapsto\{n:[0,n)\subset X\}$ を加えたもの）と同型になる：トレース写像は、閉様相論理式の $\mathsf{GL}$ 同値類のなすリンデンバウム代数からこの代数への同型である（単射は \ref{pt:trace-provability}、全射は有限集合・補有限集合がそれぞれ \ref{pt:normal-form-by-trace} の形の論理式のトレースとして実現されることによる）。算術の側では、$\Box^{n}\bot$ は「$n$ 回反復した矛盾性」であり、$\PA$ から見た世界の高さ
  - `set:injection-surjection`: NG — Here 単射 refers to injectivity of the trace map (a function being one-to-one), which matches the card's definition of 単射.

## 「反復」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 02-letterless-normal-form.html, 03-reflection-incompactness.html
- Sentence: $\nvdash\neg B$ ならば、ある $n$ で $\nvdash B\to\neg\Box^{n}\bot$。算術では：$\PA+S$ が無矛盾な定数文 $S$ は、ある $n$ について $(\neg\Box^{n}\bot)^{\ast}$（$n$ 回反復した無矛盾性の主張）を $\PA$ 上で含意しない。
  - `logic:pdl-syntax`: NG — Here "反復" refers to iterating a formula \(n\) times (a meta-level repetition), not the PDL program iteration operator \(\alpha^{\ast}\) defined in the card.

## 「合成」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `logic:while-program` → **fits: `cat:category`**
- Pages: 07-solovay.html
- Sentence: のコードを作る関数を $\sigma_{j}(y)$ とする（$\mathrm{sub}$, $\mathrm{num}$ と論理記号のコードを組み立てる関数の合成なので Σ 関数。$\exists,\le$ は略記を展開する）。$i\in W'$ について
  - `logic:while-program`: NG — Here "合成" means composition of functions, not the sequential composition of while programs defined in the card.
  - `set:relation-composition`: NG — Here "合成" refers to composing functions (building a code by combining functions), not the composition of relations defined in the card.
  - `cat:category`: OK

## 「命題的付値」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `logic:modal-tautology` → **no candidate fits**
- Pages: 01-arithmetical-soundness.html, 04-fixed-point-theorem.html
- Sentence: - 様相論理式、恒真式（命題的付値による）、正規様相論理、$\mathsf{K4}$, $\mathsf{GL}$ と $\mathsf{GL}$ の基本定理は \ref{logic:page-normal-modal-logics}, \ref{logic:page-gl-axioms} のとおり。様相論理式を $A,B$ で表す。
  - `logic:modal-tautology`: NG — the sentence only mentions 命題的付値 as a parenthetical qualifier for 恒真式 and does not use the term with the definition's meaning.

## 「命題論理」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `logic:prop-formula` → **no candidate fits**
- Pages: 01-arithmetical-soundness.html, 02-letterless-normal-form.html, 07-solovay.html
- Sentence: - 一階の文を素文（\ref{logic:prime-sentence}）上の命題論理の論理式とみる見方と、命題論理の導出は一階の導出であること（\ref{logic:prop-derivation-lift}）を使う。
  - `logic:prop-formula`: NG — 命題論理 is a logic/system, whereas the card defines 命題論理の論理式 (propositional formulas), not 命題論理 itself.

## 「定数文」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `pt:constant-sentence` → **no candidate fits**
- Pages: 02-letterless-normal-form.html, 03-reflection-incompactness.html
- Sentence: す。さらに、有限・推移的・非反射的なフレームの世界の**ランク**と閉様相論理式の**トレース**を導入し、閉様相論理式の真理はランクだけで決まることを示す。これにより、閉様相論理式に対してはソロヴェイの定理（\ref{pt:page-solovay}）の特別な場合が簡単に証明でき、ハーヴェイ・フリードマンが提起した「定数文の真偽の判定」の問題が解ける。（Boolos 第 7 章前半に対応する。）
  - `pt:constant-sentence`: NG — This "定数文" refers to closed modal formulas (constant sentences in provability logic), not the minimal set of $\mathcal{L}_{\mathrm{ar}}$ sentences built from $\bot$, $S$, $S'$, $\to$, and $\mathrm{Bew}$ as defined in the card.

## 「局所的な条件」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `logic:ltl-hintikka` → **no candidate fits**
- Pages: 03-reflection-incompactness.html
- Sentence: **高い視点から：鎖の長さを数える論理.** 本ページの結果はすべて、有限・推移的・非反射的なフレームの**鎖の長さ**についての組合せ論である。反映原理 $\Box A\to A$ は「ここでは $A$ の成り立ちが下へ降りたときに崩れない」という局所的な条件で、鳩の巣補題は「$n$ 個の局所条件では、長さ $n$ の鎖のどこかで全部が同時に成り立つ点が出てしまう」ことを言う。$\Diamond^{n}\top$（「下に長さ $n$ の鎖がある」）はまさに鎖の長さを測る物差しなので、$n$ 個未満の反映原理では長さ $n$ を保証できない。算術の側では、鎖の長さは「無矛盾性
  - `logic:ltl-hintikka`: NG — Here "局所的な条件" refers to a condition on individual points/frames (reflection principle), not to Hintikka sequences satisfying H1–H3.

## 「従う」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `logic:positional-strategy` → **no candidate fits**
- Pages: 02-letterless-normal-form.html, 03-reflection-incompactness.html, 04-fixed-point-theorem.html, 06-interpolation.html, 08-gls-uniform-completeness.html
- Sentence: レーブの公理 $\Box(\Box A\to A)\to\Box A$ の $A=\Box^{n}\bot$ の場合により、右辺から $\Box\Box^{n}\bot=\Box^{n+1}\bot$ が従う。ここで $\mathsf{GL}$ の公理 $\mathrm{L}$ を使った。
  - `logic:positional-strategy`: NG — This "従う" means "follows logically" from an axiom, not a play following a positional strategy.

## 「推移閉包」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `set:transitive-closure` → **no candidate fits**
- Pages: 03-reflection-incompactness.html
- Sentence: eq\{\Diamond p_{0}\}\cup\{\Box(p_{i}\to\Diamond p_{i+1}):i<n\}$ に含まれる。$W\defeq\{w,w_{0},w_{1},\dots,w_{n}\}$、矢印を $w\to w_{0}\to w_{1}\to\cdots\to w_{n}$、$R$ をその推移閉包（一本以上の矢印で到達可能）、$p_{i}$ は $i\le n$ のとき $w_{i}$ でだけ真（$i>n$ ではどこでも偽）とする。有限・推移的で、矢印が一直線に進むので非反射的。$w\models\Diamond p_{0}$（$wRw_{0}$）。$i<n$ とし、$wRx$, $x\models p_{i}
  - `set:transitive-closure`: NG — Here "推移閉包" refers to the transitive closure of a relation (reachability via one or more arrows), not the transitive closure of a set as defined in the card.

## 「推論規則」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `logic:deduction-system` → **fits: `pt:pa-x`**
- Pages: 01-arithmetical-soundness.html, 08-gls-uniform-completeness.html
- Sentence: $\mathsf{GL}$ の定理すべてと、形 $\Box A\to A$ の様相論理式すべてを公理とし、推論規則をモーダスポネンスだけとする体系を $\mathsf{GLS}$ という。
  - `logic:deduction-system`: NG — 「推論規則」 refers to inference rules generally, not the specific inductive definition of a 導出 (derivation) given in the card.
  - `pt:pa-x`: OK

## 「普遍性」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 06-interpolation.html
- Sentence: 書ける、という原理に似ている：ここでは「$p$ を $q$ に取り替える」操作が、$D$ を満たす限り $p$ を動かさないこと（ベルナルディの補題）が、$p$ が共通の語彙（$p$ 以外の命題変数）で定義できること（補間定理）を導く。補間式は、$A$ と $C$ の間の「共通言語への射影」として、圏論でいう押し出しの普遍性に似た役割を果たす：$A$ から $C$ への含意は、必ず共通語彙の論理式を経由して分解できるのである。
  - `cat:universal-arrow`: NG — 「普遍性」はここでは押し出しの普遍射が持つ普遍的性質（普遍性）を指す比喩的用法であり、定義5.1の「普遍射」という特定の組の概念そのものを指しているわけではない。

## 「有界量化」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `pt:sigma-formula` → **no candidate fits**
- Pages: 07-solovay.html, 08-gls-uniform-completeness.html
- Sentence: **複雑さ.** $\mathrm{Pf}$ は Δ、$\sigma_{j}$ は Σ 関数なので、$\mathrm{Pf}(x,\sigma_{j}(y))$ とその否定は Σ（関数的な論理式の略記の二通りの読み、\ref{pt:functional-formula}）。有界量化と $\wedge,\vee,\exists$ で閉じているので（\ref{pt:sigma-closure}）$B$ は Σ で、対角化定理より $H$ も Σ にとれる。
  - `pt:sigma-formula`: NG — 有界量化 is a syntactic construction (bounded quantification), not the notion of a Σ or Δ formula defined by the card.

## 「極大元」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `set:chain-maximal` → **no candidate fits**
- Pages: 03-reflection-incompactness.html
- Sentence: $R$ は推移的。矢印は段をちょうど $1$ 下げるので、$wRx$ なら $x$ の段は $w$ の段より小さく、$R$ は逆整礎（空でない集合の中で段が最小の元が $R$-極大元）。よって $\mathsf{GL}$ の定理はすべての世界で真であり（\ref{logic:kripke-soundness.3}）、$\mathsf{GL}$ で同値な論理式は各世界で同じ真理値をもつ。
  - `set:chain-maximal`: NG — Here "R-極大元" means an element maximal with respect to the relation R (no x with wRx), which matches the card's definition of 極大元 in a poset.

## 「決定可能」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `comp:recognizable-decidable` → **no candidate fits**
- Pages: 01-arithmetical-soundness.html, 02-letterless-normal-form.html, 05-fixed-point-second-proof.html, 07-solovay.html, 08-gls-uniform-completeness.html
- Sentence: 可能性述語が満たす性質のうち、命題論理の組み合わせで表せる部分がすべて $\mathsf{GL}$ に含まれることの半分を述べ、ソロヴェイの定理が残りの半分を与える。すると、証明可能性についての問い（たとえば「無矛盾性の無矛盾性は証明できるか」）は、有限の手続きで決定できる様相論理の問い（$\mathsf{GL}$ は決定可能。\ref{logic:page-modal-completeness}）に変わる。これは、群の元についての等式の問いが、群の公理から導けるかどうかの問いに変わるのと似ている：$\mathsf{GL}$ は「証明可能性」という構造の等式論である。$\mathsf{GL}$ と $\mathsf{GLS}$ の違いは、「
  - `comp:recognizable-decidable`: NG — Here "決定可能" refers to decidability of the modal logic GL (a set of formulas), not to a language being decided by a Turing machine as defined in the card.

## 「無矛盾」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `logic:derivability` → **fits: `set:formal-deduction`**
- Pages: 01-arithmetical-soundness.html, 02-letterless-normal-form.html, 03-reflection-incompactness.html, 04-fixed-point-theorem.html, 05-fixed-point-second-proof.html, 06-interpolation.html, 07-solovay.html
- Sentence: 以下、文 $S$ について「$S$ は証明可能」を $\mathrm{Bew}(\Godel{S})$、「$S$ は $\PA$ と無矛盾」を $\neg\mathrm{Bew}(\Godel{\neg S})$ で表す。$\mathsf{GL}$ の定理 $A$ から、\ref{pt:gl-arithmetical-soundness} により、$A$ の任意の翻訳が $\PA$ の定理として得られる。
  - `logic:derivability`: NG — Here "S is consistent with PA" means the union/theory PA+S is consistent, not that the set Σ of formulas is consistent as defined (Σ⊢⊥), so it is a different (though related) notion.
  - `logic:pdl-axioms`: NG — Here "無矛盾" is used in the sense of a sentence being consistent with PA (i.e., its negation is not provable), not the card's definition of a finite set being consistent (not proving a conjunction's negation).
  - `logic:ltl-axioms`: NG — Here "無矛盾" means consistency of a theory (PA), not the card's definition of a finite set of formulas being consistent (not proving a conjunction's negation).
  - `set:formal-deduction`: OK

## 「算術化」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `comp:arithmetization` → **no candidate fits**
- Pages: 05-fixed-point-second-proof.html
- Sentence: t}=S$ のとき $\PA\vdash B^{\ast}\leftrightarrow[B](\Godel{S})$ となり、「$\PA\vdash S\leftrightarrow[B](\Godel{S})$ を満たす $S$」は \ref{pt:fixed-point-arith} により分類される。本サイトの算術化（\ref{pt:syntax-predicates}）でも、これらの関数は Δ の関数を表す論理式として定義でき、同じ対応が得られるはずだが、詳細は省略する。
  - `comp:arithmetization`: NG — This use of 算術化 refers to arithmetization of syntax (Gödel numbering), not the polynomial truth-value encoding defined in the card.

## 「証明可能」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `logic:derivability` → **fits: `set:formal-deduction`**
- Pages: 01-arithmetical-soundness.html, 02-letterless-normal-form.html, 04-fixed-point-theorem.html, 05-fixed-point-second-proof.html, 07-solovay.html, 08-gls-uniform-completeness.html
- Sentence: 様相論理の $\Box$ を「$\PA$ で証明可能」と読むとき、どの様相論理の原理が正しいか。これを正確に問うために、命題変数に算術の文を割り当てる**算術的解釈**を定める。本ページでは、$\mathsf{GL}$ の定理はどの算術的解釈のもとでも $\PA$ で証明でき（**算術的健全性**）、$\mathsf{GL}$ に反映原理 $\Box A\to A$ を
  - `logic:derivability`: NG — 証明可能 is used for provability in PA, which is the same notion as 導出可能 (derivability) in the card's natural deduction system, so it matches.
  - `set:formal-deduction`: OK

## 「還元」 in 01-foundations/05-proof-theory/03-provability-logic
- Default: `comp:mapping-reducible` → **no candidate fits**
- Pages: 08-gls-uniform-completeness.html
- Sentence: **関連する結果.** $\mathsf{GLS}$ は正規でなく（\ref{pt:gls-not-normal}）、一様代入でも閉じていないが、$A\mapsto A^{\mathrm{S}}$ によって $\mathsf{GL}$ に還元される。$\mathsf{GLV}$ も一様代入で閉じていない体系の例である。Boolos 第 17, 18 章では、量化子を含む証明可能性論理が決定不能になることが示される（本サイトの量化された証明可能性論理の系列で扱う予定）。
  - `comp:mapping-reducible`: NG — Here "還元" means a reduction/translation of one logic to another via a mapping, not the computability-theoretic mapping reduction of languages defined in the card.

## 「クラス」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `set:class` → **no candidate fits**
- Pages: 01-grz.html, 04-glb-semantics.html
- Sentence: 二点の全関係のフレームは反射的・推移的なので $\mathsf{S4}$ に適切で、例で見たとおり公理はそこで偽。$\mathsf{Grz}$ の定理は有限・推移的・反射的・反対称的なフレームで妥当だが、このフレームは反対称的でないので矛盾はない。反例のフレームが「クラスター」（相異なる二点が互いに見合う）をもつことが、$\mathsf{Grz}$ と $\mathsf{S4}$ の違いである。
  - `set:class`: NG — Here "クラスター" (cluster) is a modal-logic frame concept, not the set-theoretic class defined in the card.

## 「コード」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `comp:prime-sequence-code` → **no candidate fits**
- Pages: 04-glb-semantics.html, 05-glb-completeness.html
- Sentence: $a$ が $\mathrm{all}(a_{1},a_{2})$ の形（$\mathrm{fst}(a)=5$、$a_{1}$ は変数、$a_{2}$ は論理式のコード）であるとき、
  - `comp:prime-sequence-code`: NG — Here "コード" refers to the code of a logical formula (via a different coding scheme), not the code of a finite-support state σ defined by the card.

## 「両立」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `set:compatible` → **no candidate fits**
- Pages: 02-set-theory.html, 03-analysis.html, 05-glb-completeness.html
- Sentence: - $\Delta^{-}$（外した形）を $W_{1}$ の世界に課すのは、箱の比較を世界ごとに効かせるためである。根 $w_{0}$ には $\Delta^{-}$ を課さない（$\neg A$ と両立するとは限らない）。そのため $W^{\ast}$ を $w_{0}$ から生成される部分に制限した。
  - `set:compatible`: NG — Here "両立する" means logical compatibility (¬A is consistent with the root's theory), not the poset notion of having a common extension.

## 「全順序」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `set:total-order` → **no candidate fits**
- Pages: 02-set-theory.html
- Sentence: 後半：$W=\{r,a,b\}$、$rRa$, $rRb$ だけのフレームは有限前整列（ランク $\rho(r)=1$, $\rho(a)=\rho(b)=0$ で \ref{pt:prewellordering-rank} の条件を満たす）だが全順序でない。$p$ を $a$ でだけ、$q$ を $b$ でだけ真とすると、$a\models\Box p\land p\land\neg q$（$a$ は何も見ないので $\Box p$ は真）、$b\models\Box q\land q\land\neg p$ なので、$r$ で $\mathsf{J}$ の公理は
  - `set:total-order`: NG — In the card, 全順序 is a strict total order on a set, whereas here it refers to a frame/relation being totally ordered, and the example is a prewellorder that is not a total order, so the notion is not the same.

## 「内包公理」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `set:ax-comprehension` → **fits: `pt:l2-axioms`**
- Pages: 03-analysis.html
- Sentence: - 内包公理図式：$X$ を自由に含まない任意の論理式 $A(x)$（一階・二階のパラメータを含んでよい）についての $\exists X\,\forall x\,(Xx\leftrightarrow A(x))$
  - `set:ax-comprehension`: NG — 内包公理 is the unrestricted comprehension axiom schema, whereas the card gives the restricted separation (分出) schema with the condition $x\in z$.
  - `pt:l2-axioms`: OK

## 「再帰的」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `comp:partial-recursive` → **no candidate fits**
- Pages: 01-grz.html, 03-analysis.html
- Sentence: 様相論理式 $A$ の **⊡ 翻訳** $A^{\boxdot}$ を、$A$ のすべての $\Box$ を $\boxdot$ に置き換えたものとして再帰的に定める：$p^{\boxdot}\defeq p$、$\bot^{\boxdot}\defeq\bot$、$(A\to B)^{\boxdot}\defeq A^{\boxdot}\to B^{\boxdot}$、$(\Box A)^{\boxdot}\defeq\boxdot A^{\boxdot}=A^{\box
  - `comp:partial-recursive`: NG — Here "再帰的に" means "by recursion/recursively defined," not the computability-theoretic notion of a relation being recursive (general recursive characteristic function).

## 「前整列」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `comp:pi11-norm` → **no candidate fits**
- Pages: 02-set-theory.html, 03-analysis.html
- Sentence: \rho(w)=i>j=\rho(x)$ とする。ランクの定義より $w=w_{i}Rw_{i-1}R\cdots Rw_{0}$ となる $w_{k}$（$\rho(w_{k})=k$）がとれ、$x$ についても $x=x_{j}R\cdots Rx_{0}$ がとれる。推移性より $wRw_{j}$（$j<i$）。前整列の条件を $wRw_{j}$ と $y=x$ に適用すると $wRx$ または $xRw_{j}$。$xRw_{j}$ なら $xRw_{j}Rw_{j-1}R\cdots Rw_{0}$ より $\rho(x)\ge j+1$ となり矛盾する。よって $wRx$。値域：$\rho(w)=i>0$ なら $\rho(x
  - `comp:pi11-norm`: NG — This use of 前整列 refers to a prewellordering relation's property (a wellorder-like condition on R), not the card's definition of Π¹₁ prewellordering as every Π¹₁ set having a Π¹₁ norm.

## 「割り当て」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `logic:assignment` → **no candidate fits**
- Pages: 02-set-theory.html, 03-analysis.html, 04-glb-semantics.html
- Sentence: 各命題変数に集合論の言語の文を割り当てる写像 $\ast$ を固定する。
  - `logic:assignment`: NG — This is an assignment of formulas to propositional variables, not a variable assignment into a structure's domain as defined in the card.

## 「単調」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `comp:monotone-continuous` → **no candidate fits**
- Pages: 02-set-theory.html
- Sentence: - 「$\omega$ の有限部分集合上の構造で、最初の $j$ 個の $\theta_{i}$ を部分的に満たし、各点に $o(M)$ 未満の順序数のラベル $f$ を $\in$ に沿って単調に付けたもの」全体に、延長の順序 $\prec$ を入れた木 $\langle X,\prec\rangle$ を考える。$o(M)\in N$ なので $X\in N$。
  - `comp:monotone-continuous`: NG — Here "単調" describes labels increasing along the relation $\in$ (order-preserving), not the monotonicity of a function on $\mathcal{P}(\Sigma^{\ast})^{n}$ as defined in the card.

## 「反復」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 04-glb-semantics.html
- Sentence: **関連する結果.** ジャパリゼは、$\Box$ と $[1],[2],\dots$（ω 証明可能性、さらにその反復）をもつ多様相論理 $\mathsf{GLP}$ を導入し、その算術的完全性を示した。$\mathsf{GLP}$ は後に、ベクレミシェフによって算術の順序数解析に応用されている（一般にはこう言われているが、本サイトでは扱っていない）。
  - `logic:pdl-syntax`: NG — Here "反復" refers to iterating a modal operator (iterated provability), not the PDL program iteration operation α* defined in the card.

## 「合併」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `set:union` → **no candidate fits**
- Pages: 04-glb-semantics.html
- Sentence: athrm{ωPf}(y,\mathrm{imp}(x,x'))$, $\mathrm{ωPf}(y',x)$ なら、$y\ast y'$ の後に $\to$E の行 $\ell$ を加えた $z'\defeq y\ast y'\ast[\ell]$ は導出で、最後の行の仮定は $y$ と $y'$ の最後の行の仮定の合併である。各仮定は（どの $z$ についても）$\mathrm{Ax}_{\PA}$ か $\mathrm{ωAx}(\cdot,z)$ を満たすので、$\mathrm{ωPf}(z',x')$。
  - `set:union`: NG — Here "合併" refers to the union (merging) of the assumption sets of two derivations, which is the same notion as the set union defined in the card.

## 「命題論理」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `logic:prop-formula` → **no candidate fits**
- Pages: 03-analysis.html
- Sentence: $A_{h}$ は $\Pi^{1}_{1}$ 文なので (iv) より $\vdash A_{h}\to\Theta(\Godel{A_{h}})$。2 と (ii)（$\neg S_{w}$ と $S_{w}\lor X$ から $X$ を導く命題論理の推論を $\Theta$ の中で行う）より、$\vdash A_{h}\to\Theta(\Godel{\bigvee\{S_{x}:wRx\}})$。$S_{w}$ はこれらの $A_{h}$（の $AB_{h}$）の選言を導くので結論を得る。
  - `logic:prop-formula`: NG — 命題論理 here refers to the propositional reasoning/inference system used inside Θ, not the set of propositional formulas defined by the card.

## 「固有変数」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `pt:lk` → **fits: `pt:pa-x`**
- Pages: 04-glb-semantics.html
- Sentence: \PA+\neg S\vdash\neg\varphi(\underline{n})$ とする（$x$ だけが自由変数としてよい。他の自由変数は全称閉包で扱う）。$E\defeq\neg S\to\neg\varphi(x)$ とすると、$\neg S$ を仮定とする導出に →I を使うと（$\neg S$ は文なので固有変数の条件は問題にならない） $\PA\vdash E[\underline{n}/x]$。また $\forall x\,E$ と $\neg S$ から $\forall x\,\neg\varphi(x)$、$\PA+\neg S\vdash\exists x\,\varphi(x)$ と矛盾するので、$\PA\vda
  - `pt:lk`: NG — Here "固有変数" refers to the eigenvariable condition in natural deduction (→I), not the eigenvariable of the (R∀) rule defined in the card.
  - `pt:pa-x`: OK

## 「始切片」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `set:initial-segment` → **no candidate fits**
- Pages: 03-analysis.html
- Sentence: - 有限列の符号 $s$ に対し $s\ast t$ は連結、$[\,]$ は空列、$\langle i\rangle$ は長さ 1 の列。関数 $f\colon\omega\to\omega$ について $\bar{f}(x)\defeq[f(0),\dots,f(x-1)]$（長さ $x$ の始切片の符号）。
  - `set:initial-segment`: NG — Here "始切片" refers to an initial segment of a sequence (a finite prefix), not the set-theoretic predecessor set defined in the card.

## 「導出可能」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `logic:derivability` → **no candidate fits**
- Pages: 03-analysis.html, 04-glb-semantics.html
- Sentence: GL}$ になる、という Solovay の定理（1976 年に予告され、証明は Boolos の本で初めて公表された）を証明する（\ref{pt:analysis-omega-theorem}）。健全性の側では、$\omega$ 規則を使った証明可能性が $\Pi^{1}_{1}$ 完全であることを解析学の中で示し、導出可能性条件の類似を得る。完全性の側では、ソロヴェイ文を一変数の述語から作る代わりに、文 $S_{0},\dots,S_{n}$ を**同時に対角化**で作る（Dzhaparidze、de Jongh–Jumelet–Montagna の手法）。そこで「どちらが先に $\omega$ 規則で証明されるか」を比較するために、$
  - `logic:derivability`: NG — Here "導出可能性条件" refers to provability conditions in modal logic (the Hilbert–Bernays–Löb derivability conditions), not the natural-deduction derivability relation $\Sigma\vdash\varphi$ defined in the card.

## 「帰納法の公理」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `pt:peano-arithmetic` → **fits: `pt:l2-axioms`**
- Pages: 03-analysis.html
- Sentence: - 帰納法の公理（一つの二階論理式）$X0\land\forall x\,(Xx\to XSx)\to\forall x\,Xx$、
  - `pt:peano-arithmetic`: NG — This is the second-order induction axiom, whereas the card defines the first-order induction axiom schema with a separate axiom for each formula.
  - `pt:l2-axioms`: OK

## 「強制」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `logic:ikripke-model` → **no candidate fits**
- Pages: 02-set-theory.html
- Sentence: }$、後者は「有限狭義全順序」を特徴づける公理を加えた体系 $\mathsf{J}$ であり、どちらも Solovay（1975 年秋）による（\ref{pt:transitive-models-theorem}, \ref{pt:universes-theorem}）。証明には集合論の比較的高度な事実（構成可能集合、強制法、Jensen–Karp の定理）を使う。（Boolos, *The Logic of Provability* 第 13 章に対応する。）
  - `logic:ikripke-model`: NG — Here "強制法" (forcing method) is set-theoretic forcing, not the Kripke-model forcing relation 強制 defined in the card.

## 「従う」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `logic:positional-strategy` → **no candidate fits**
- Pages: 02-set-theory.html, 03-analysis.html, 04-glb-semantics.html, 05-glb-completeness.html
- Sentence: (a), (b) は定義から明らか（個数と連続体についての場合分けが互いに排反で尽くされている）。(e) は仮定から従う。
  - `logic:positional-strategy`: NG — Here "従う" means "follows logically from the assumptions," not a play following a positional strategy.

## 「推論規則」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `logic:deduction-system` → **fits: `pt:pa-x`**
- Pages: 03-analysis.html, 04-glb-semantics.html
- Sentence: 2. **$\mathrm{An}_{\omega}$** の定理とは、解析学のすべての公理を含み、通常の論理の推論規則と $\omega$ 規則で閉じたすべての集合に属する文のことをいう。$\omega\vdash F$ で $F$ が $\mathrm{An}_{\omega}$ の定理であることを表し、$F$ は**$\omega$ 規則のもとで（解析学で）証明可能**であるという。
  - `logic:deduction-system`: NG — 「推論規則」は証明体系で推論を許す規則全般を指す語であり、カードが定義する「導出」という個々の証明図（対象）とは異なる概念である。
  - `pt:pa-x`: OK

## 「最小元」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `set:well-order` → **no candidate fits**
- Pages: 03-analysis.html
- Sentence: h(m)Rx$ かつ $\Theta(\Godel{\neg S_{x}})$ となる $x$ がある。$h(m)$ の後続点は有限個なので、そのうち $\Theta(\Godel{\neg S_{x}})$ となるもの全体の中で $\preceq$ について最小の $x$ をとれる（(P2) による比較と、有限集合の最小元の存在）。$h(m)$ の任意の後続点 $y$ について、$\Theta(\Godel{\neg S_{y}})$ なら最小性より $\rho(\Godel{\neg S_{x}},\Godel{\neg S_{y}})$、そうでなければ (P4) より同じ式が成り立つ。よって $h\ast x$ は OK で、$A_
  - `set:well-order`: NG — It refers to a least element of a finite set under the order $\preceq$, not specifically an $R$-least element of a subset in a well-order as defined.

## 「様相化されている」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `pt:modalized` → **no candidate fits**
- Pages: 06-glb-fixed-point.html
- Sentence: $A$ が **$p$ について様相化されている**とは、$\bot$、$p$ 以外の命題変数、$\Box D$、$[1]D$ から $\to$ で組み立てられることをいう（$p$ のすべての出現が $\Box$ か $[1]$ の作用域にある）。
  - `pt:modalized`: NG — It adds the modality $[1]D$ to the generating set, so it is a different (broader) notion than the card's definition, which only allows $\Box D$.

## 「直観主義命題論理」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `logic:ipc-formula` → **no candidate fits**
- Pages: 01-grz.html
- Sentence: 常に証明可能な様相論理式、常に真な様相論理式が、ともにちょうどグジェゴルチクの体系 $\mathsf{Grz}$ の定理であることを示す（Boolos 第 12 章の主定理）。$\mathsf{Grz}$ は $\mathsf{S4}$ より真に強く、有限・推移的・反射的・反対称的なフレームについて完全である。最後に、直観主義命題論理との関係に触れる。
  - `logic:ipc-formula`: NG — the term refers to the whole logical system, not to the set of formulas defined in the card.

## 「要求」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `logic:ctl-successor-def` → **no candidate fits**
- Pages: 04-glb-semantics.html
- Sentence: R$ と「$R_{1}$ で移っても $R$ の見える範囲は変わらない」の両方で表そうとすると矛盾する。イグナチェフの工夫は、$R_{1}$ で移っても $R$ の景色が変わらない（$\Box$ から見て区別できない）世界へ移る、という構造だけを残し、$R_{1}\subset R$ は必要な有限個の論理式についてだけ要求する、というものである。
  - `logic:ctl-successor-def`: NG — Here "要求する" means "require/demand" in general prose, not the technical notion of a "要求" (a negated formula ¬F demanded at a world) defined in the card.

## 「証人」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `comp:mr-witness` → **no candidate fits**
- Pages: 05-glb-completeness.html
- Sentence: athrm{Ax}_{\PA}(A^{a}_{i})$ かつ（$\neg F(A^{a}_{i})$ または $\neg\mathrm{Bew}(t(A^{a}_{i},z))$）で、$\neg Q(a,c_{j},z)$ となり $\mathrm{ωPf}(a,c_{j})$ に反する。したがって $\Theta$（証人 $b$）。
  - `comp:mr-witness`: NG — Here "証人" (witness) is used in the logical sense of a witness term in a proof, not the Miller–Rabin compositeness witness defined in the card.

## 「証明可能」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `logic:derivability` → **no candidate fits**
- Pages: 01-grz.html, 02-set-theory.html, 03-analysis.html, 04-glb-semantics.html, 05-glb-completeness.html, 06-glb-fixed-point.html
- Sentence: $\Box$ を「証明可能」と読むと $\Box p\to p$ は常に証明可能ではない。しかし $\Box A$ を「$A$ は証明可能で、しかも真」と読めば、$\mathsf{S4}$ の定理はすべて保たれる。本ページでは、この読み方のもとで常に証明可能な様相論理式、常に真な様相論理式が、ともにちょうどグジェゴルチクの体系 $\mathsf
  - `logic:derivability`: NG — 証明可能 is used for provability in modal logic, not the card's derivability from a set of formulas (though related, the card defines 導出可能, not 証明可能).
  - `set:formal-deduction`: NG — Here "証明可能" refers to provability in modal logic (a modal operator reading), not the card's formal proof from a set $S$ of sentences.

## 「証明者」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `comp:interactive-proof` → **no candidate fits**
- Pages: 01-grz.html, 04-glb-semantics.html
- Sentence: **高い視点から：「証明可能かつ真」は知識の論理になる.** $\Box$ を「証明可能」と読むと $\mathsf{GL}$ は「自己を信頼できない証明者」の論理であり、$\Box A\to A$ は成り立たない。そこに「真である」を付け加えると、$\boxdot$ は「証明され、実際に正しい」、すなわち知識のような様相になり、$\mathsf{S4}$（知識の論理の典型）の公理が回復する。しかし単なる $\mathsf{S4}$ ではなく、逆整礎性の名残であるグジェゴ
  - `comp:interactive-proof`: NG — Here "証明者" refers to a prover in provability logic (a formal theory proving statements), not the interactive-proof prover defined in the card.

## 「連結」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `set:concatenation` → **no candidate fits**
- Pages: 02-set-theory.html, 03-analysis.html, 04-glb-semantics.html
- Sentence: - *区分的連結性*（$wR_{\mathsf{J}}x$, $wR_{\mathsf{J}}y$ なら $xR_{\mathsf{J}}y$, $x=y$, $yR_{\mathsf{J}}x$ のいずれか）。そうでないとすると、$\Box B\in x$, $B\notin y$ となる $B$、$\Box C\in y$, $C
  - `set:concatenation`: NG — Here "連結" refers to connectedness of a relation (a property of a relation), not the concatenation of sequences defined in the card.
  - `top:connected`: NG — This "連結" (connectedness) refers to a property of an accessibility relation in modal logic, not topological connectedness of a space.

## 「連言」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `logic:abbreviations` → **no candidate fits**
- Pages: 01-grz.html, 02-set-theory.html, 03-analysis.html, 04-glb-semantics.html, 05-glb-completeness.html, 06-glb-fixed-point.html
- Sentence: 真理の述語は算術で定義できない（タルスキの定理、\ref{pt:page-rosser-tarski}）が、特定の文 $S$ の真理は $S$ 自身で表せる。これが ${}^{\ast}(\Box A)$ の第二の連言肢である。
  - `logic:abbreviations`: NG — 「連言肢」は連言の構成部分を指す語であり、カードが定義する論理式の略記「連言」そのものではない。

## 「選言」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `logic:abbreviations` → **no candidate fits**
- Pages: 02-set-theory.html, 03-analysis.html, 05-glb-completeness.html
- Sentence: \mathsf{K4}\vdash\Box(C\land\Box C)\leftrightarrow\Box C$（$\Box$ は連言と可換で、$\Box C\to\Box\Box C$）であり、$\mathsf{GL}\supseteq\mathsf{K4}$（\ref{logic:gl-four}）なので、第一の選言肢は $\Box(\Box C\to\Box D)$ と同値。第二は $\Box(\Box D\to C)\land\Box(\Box D\to\Box C)$ と同値なので、$\Box(\Box D\to\Box C)$ を導く。
  - `logic:abbreviations`: NG — “選言” here refers to a disjunction (a logical connective), not the abbreviation scheme defined in the card.

## 「還元」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `comp:mapping-reducible` → **no candidate fits**
- Pages: 04-glb-semantics.html
- Sentence: 件を示し、ジャパリゼの体系 $\mathsf{GLB}$ が算術的に健全であることを証明する。次に、$\mathsf{GLB}$ には自然なクリプキ意味論がないことを見て、イグナチェフに従い、クリプキ意味論をもつ部分体系 $\mathsf{IDzh}$ を導入し、その健全性・完全性と、$\mathsf{GLB}$ への還元に使う補題を示す。$\mathsf{GLB}$ の算術的完全性は次ページで証明する。（Boolos 第 15 章前半に対応する。）
  - `comp:mapping-reducible`: NG — Here "還元" refers to a reduction between modal logics (translating one system into another), not the computability-theoretic mapping reduction defined in the card.

## 「部分体」 in 01-foundations/05-proof-theory/04-provability-logic-extensions
- Default: `fld:extension` → **no candidate fits**
- Pages: 04-glb-semantics.html
- Sentence: $（ω 証明可能）をもつ様相論理が現れる。本ページでは、ω 証明可能性を算術の中で定式化してその導出可能性条件を示し、ジャパリゼの体系 $\mathsf{GLB}$ が算術的に健全であることを証明する。次に、$\mathsf{GLB}$ には自然なクリプキ意味論がないことを見て、イグナチェフに従い、クリプキ意味論をもつ部分体系 $\mathsf{IDzh}$ を導入し、その健全性・完全性と、$\mathsf{GLB}$ への還元に使う補題を示す。$\mathsf{GLB}$ の算術的完全性は次ページで証明する。（Boolos 第 15 章前半に対応する。）
  - `fld:extension`: NG — Here "部分体系" means a subsystem of a logical system, not a subfield of a field.

## 「クラス」 in 01-foundations/05-proof-theory/05-quantified-provability-logic
- Default: `set:class` → **no candidate fits**
- Pages: 01-quantified-provability-logic.html
- Sentence: - *対照.* 純粋な述語論理の文では、妥当な文、常に証明可能な文、常に真な文の三つのクラスが一致する（ヒルベルト–ベルナイスによるレーヴェンハイム–スコーレムの定理の算術的な精密化による、と言われている）。
  - `set:class`: NG — Here "クラス" means an arbitrary collection/class of sentences in the metatheoretic sense, not a class as a definable collection $\{x\mid\varphi(x,\dots)\}$ in the set-theoretic sense defined by the card.

## 「コンパクト」 in 01-foundations/05-proof-theory/05-quantified-provability-logic
- Default: `top:compact` → **no candidate fits**
- Pages: 02-artemov.html
- Sentence: **高い視点から：模型の中の自然数.** QML の文 $\{T\}\wedge D$ は「述語記号の解釈は、等号で割れば自然数そのものである」と述べる一つの公理系として働く。一階の公理だけでは非標準的な元を排除できない（コンパクト性）が、$\Box$ を通じて「解釈が証明可能性について安定（真なら証明可能）」であることを要求すると、解釈は計算可能になり、計算可能な模型は標準モデルしかない（テネンバウム）。たとえれば、一階の言葉だけでは偽物の自然数を見分けられないが、「各事実に証明書が付いていること」を要求すると偽物は自分の正体を隠せなくなる、と
  - `top:compact`: NG — Here "コンパクト性" refers to the compactness theorem of first-order logic, not compactness of a topological space.

## 「一階述語論理」 in 01-foundations/05-proof-theory/05-quantified-provability-logic
- Default: `set:first-order-language` → **no candidate fits**
- Pages: 01-quantified-provability-logic.html, 03-vardanyan.html
- Sentence: - *QGL.* $\mathsf{GL}$ に一階述語論理を加えた体系の定理は常に証明可能だが、モンターニャ（1984）がこの体系で証明できない常に証明可能な文の例を与え、ヴァルダニャン（1985）の定理によって、常に証明可能な文の集合はそもそも公理化できない（認識可能でない）ことがわかった、と Boolos は述べている。
  - `set:first-order-language`: NG — 一階述語論理 is first-order predicate logic, a broader logical system, not the specific formal language of set theory defined in the card.

## 「停止して」 in 01-foundations/05-proof-theory/05-quantified-provability-logic
- Default: `comp:register-machine` → **no candidate fits**
- Pages: 02-artemov.html
- Sentence: **準備.** $C(e,x,z)$ を「符号 $e$ のチューリング機械は入力 $x$ の上で停止して $z$ を出力する」を自然に表す Σ 論理式とし、$C_{0}(x)\defeq C(x,x,0)$, $C_{1}(x)\defeq C(x,x,1)$ とする。(T6) は機械の出力の一意性で、$\PA$ の定理である。
  - `comp:register-machine`: NG — This "停止して" refers to a Turing machine halting on input, not to a register machine halting from a state as defined in the card.

## 「割り当て」 in 01-foundations/05-proof-theory/05-quantified-provability-logic
- Default: `logic:assignment` → **no candidate fits**
- Pages: 01-quantified-provability-logic.html, 03-vardanyan.html, 04-one-predicate-letter.html
- Sentence: 命題の証明可能性論理では、命題変数に算術の文を割り当てたとき常に証明可能な様相論理式は $\mathsf{GL}$ で、常に真なものは $\mathsf{GLS}$ でちょうど公理化され、どちらも決定可能だった（\ref{pt:page-solovay}, \ref{pt:page-gls-uniform-completeness}）。本系列では、述語記号と量化子をもつ様
  - `logic:assignment`: NG — Here "割り当て" means assigning arithmetic sentences to propositional variables (a translation/mapping between languages), not a variable assignment map $v\colon\mathrm{Var}\to M$ in a structure.

## 「単射」 in 01-foundations/05-proof-theory/05-quantified-provability-logic
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 02-artemov.html, 04-one-predicate-letter.html
- Sentence: 以下 $\ast$ を任意の実現とし、「$\PA\vdash$」の主張では $\PA$ の中で議論する。$\{T\}^{\ast}$ を仮定すると、(T1)〜(T5) の括弧変換の翻訳、たとえば「$E^{\ast}$ は同値関係」「$S^{\ast}$ は全域で $E^{\ast}$ について関数的・単射」「$\neg(S^{\ast}(x,y)\wedge Z^{\ast}(y))$」などが使える。
  - `set:injection-surjection`: NG — Here 単射 describes a functional relation being injective, not a function $f\colon A\to B$ as in the card's definition.

## 「受理計算」 in 01-foundations/05-proof-theory/05-quantified-provability-logic
- Default: `comp:nfa` → **no candidate fits**
- Pages: 01-quantified-provability-logic.html
- Sentence: 3. $R$ を認識する神託機械の符号を $e$ とすると、$\vec{i}\in R\iff$ $A$ について正しい受理計算がある。（受理と停止を区別する場合は、拒否するときループするように機械を修正しておく。）
  - `comp:nfa`: NG — Here "受理計算" refers to an accepting computation of a Turing machine/oracle machine, not the NFA accepting computation defined in the card.

## 「完全集合」 in 01-foundations/05-proof-theory/05-quantified-provability-logic
- Default: `comp:sigma-n-complete` → **no candidate fits**
- Pages: 03-vardanyan.html
- Sentence: - QML、実現、翻訳、常に証明可能・常に真、上界（\ref{pt:qml-upper-bounds}）、相対化された階層・$T^{A}$ とその基本性質（\ref{pt:relative-t-basic}）・完全集合（\ref{pt:relative-hierarchy}, \ref{pt:complete-not-sigma}）、$V$ と $V_{r}$（\ref{pt:truth-set-facts}）は \ref{pt:page-quantified-provability-logic} のとおり。
  - `comp:sigma-n-complete`: NG — the card defines "完全集合" as a Σₙ-complete set under many-one reducibility, but the sentence uses it as a topic label for relative hierarchy/completeness results, not asserting the set-theoretic completeness property.

## 「強制」 in 01-foundations/05-proof-theory/05-quantified-provability-logic
- Default: `logic:ikripke-model` → **no candidate fits**
- Pages: 01-quantified-provability-logic.html, 02-artemov.html
- Sentence: 様さは、$\mathsf{GL}$ という有限の規則の体系ですべて捉えられた。量化子が加わると、述語記号に割り当てる論理式の自由度が、算術の構造（加法と乗法）そのものを QML の中に「模型」として作ることを許してしまう。次のページで見るように、適切な QML の文が「述語記号の解釈が自然数の標準的な模型である」ことを強制でき、そこから QML の問いに算術の真理の全体（アルテモフ）や $\Pi^{0}_{2}$ の全体（ヴァルダニャン）が埋め込まれる。たとえれば、命題論理は「部品の性質」しか語れないが、量化子が加わると「部品で機械を組み立てる設計図」が書けるようになり、設計図の正しさの判定が機械（算術）の難しさを丸ごと引き継ぐ、という
  - `logic:ikripke-model`: NG — Here "強制でき" means "can force/compel" in the sense of imposing a condition, not the Kripke-model forcing relation $w\Vdash\varphi$ defined in the card.

## 「従う」 in 01-foundations/05-proof-theory/05-quantified-provability-logic
- Default: `logic:positional-strategy` → **no candidate fits**
- Pages: 02-artemov.html
- Sentence: 、テネンバウムの定理の議論によって模型が標準モデルそのものになることを導く（\ref{pt:artemov-lemma-8}）。こうして、$S$ が真であることと $\{T\}\wedge D\to\{S\}$ が常に真であることが同値になり（\ref{pt:artemov-theorem}）、タルスキの定理から結論が従う。
  - `logic:positional-strategy`: NG — Here "従う" means "follows logically (as a consequence)", not a play following a positional strategy.

## 「断片」 in 01-foundations/05-proof-theory/05-quantified-provability-logic
- Default: `logic:ctl-fragment` → **no candidate fits**
- Pages: 01-quantified-provability-logic.html, 03-vardanyan.html, 04-one-predicate-letter.html
- Sentence: - QML から等号・関数記号を除いたのは Boolos の設定に従ったものである。等号を加えた場合（等号を算術の等号と解釈する）の決定可能な断片は、この系列の後のページで扱う。
  - `logic:ctl-fragment`: NG — Here "断片" means a decidable fragment (subsystem) of a logic, not the labeled finite tree defined in the card.

## 「有界量化」 in 01-foundations/05-proof-theory/05-quantified-provability-logic
- Default: `pt:sigma-formula` → **no candidate fits**
- Pages: 02-artemov.html
- Sentence: 変数を上限とする有界量化子だけを使う狭義の Σ 論理式 $F(\vec{x})$（\ref{pt:sigma-formula}。$\forall z<t$ は $\exists w\,(w=t\wedge\forall z<w)$ と書き直して、上限が変数であるとしてよい）について
  - `pt:sigma-formula`: NG — 有界量化 is a quantifier concept, not the defined notion of a Σ or Δ formula.

## 「決定可能」 in 01-foundations/05-proof-theory/05-quantified-provability-logic
- Default: `comp:recognizable-decidable` → **no candidate fits**
- Pages: 01-quantified-provability-logic.html, 02-artemov.html, 03-vardanyan.html, 04-one-predicate-letter.html
- Sentence: 命題の証明可能性論理では、命題変数に算術の文を割り当てたとき常に証明可能な様相論理式は $\mathsf{GL}$ で、常に真なものは $\mathsf{GLS}$ でちょうど公理化され、どちらも決定可能だった（\ref{pt:page-solovay}, \ref{pt:page-gls-uniform-completeness}）。本系列では、述語記号と量化子をもつ様相論理式（**量化様相論理**）について同じ問いを考え、答えが極端に否定的であることを示す：常に証明可能な文の集合は $\Pi^{0}_{2}$ 完全
  - `comp:recognizable-decidable`: NG — Here "決定可能" refers to decidability of modal logics (a set of formulas being recursive), not a Turing machine deciding a language as defined in the card.

## 「真理集合」 in 01-foundations/05-proof-theory/05-quantified-provability-logic
- Default: `logic:mu-semantics` → **no candidate fits**
- Pages: 01-quantified-provability-logic.html, 03-vardanyan.html
- Sentence: - $V\defeq\{\Godel{\sigma}:\sigma\text{ は }\mathcal{L}_{\mathrm{ar}}\text{ の文で }\mathcal{N}\models\sigma\}$（**真理集合**）。
  - `logic:mu-semantics`: NG — This "真理集合" is the set of Gödel numbers of true sentences of arithmetic, not the truth set of a modal μ-calculus formula defined via a labeled transition system and valuation.

## 「算術化」 in 01-foundations/05-proof-theory/05-quantified-provability-logic
- Default: `comp:arithmetization` → **no candidate fits**
- Pages: 03-vardanyan.html
- Sentence: 式 $F_{e,i}$ を「$\forall m\,(\forall j<m\,\neg T^{G}(\underline{e},\underline{i},j)\to G\text{ は }m\text{ で }V\text{ を近似する})$」を表すもの（$T^{G}$ は神託として $G$ を使う $T$ 述語を算術化したもの）とし、QML の文 $\psi_{e,i}\defeq\mathcal{I}\wedge\{F_{e,i}\}$ とする。このとき
  - `comp:arithmetization`: NG — Here "算術化" means arithmetizing a predicate (representing it by an arithmetic formula), not the specific polynomial truth-value encoding of propositional formulas defined in the card.

## 「要求」 in 01-foundations/05-proof-theory/05-quantified-provability-logic
- Default: `logic:ctl-successor-def` → **no candidate fits**
- Pages: 02-artemov.html, 04-one-predicate-letter.html
- Sentence: 高い視点から：模型の中の自然数.** QML の文 $\{T\}\wedge D$ は「述語記号の解釈は、等号で割れば自然数そのものである」と述べる一つの公理系として働く。一階の公理だけでは非標準的な元を排除できない（コンパクト性）が、$\Box$ を通じて「解釈が証明可能性について安定（真なら証明可能）」であることを要求すると、解釈は計算可能になり、計算可能な模型は標準モデルしかない（テネンバウム）。たとえれば、一階の言葉だけでは偽物の自然数を見分けられないが、「各事実に証明書が付いていること」を要求すると偽物は自分の正体を隠せなくなる、ということである。
  - `logic:ctl-successor-def`: NG — Here “要求する” is the ordinary verb “to require/demand,” not the technical notion of a “要求” (requirement) defined in the card.

## 「証明可能」 in 01-foundations/05-proof-theory/05-quantified-provability-logic
- Default: `logic:derivability` → **fits: `set:formal-deduction`**
- Pages: 01-quantified-provability-logic.html, 02-artemov.html, 03-vardanyan.html, 04-one-predicate-letter.html
- Sentence: - 算術の言語 $\mathcal{L}_{\mathrm{ar}}=\{0,S,+,\cdot\}$、$\PA$、標準モデル $\mathcal{N}$、Σ 論理式、証明可能性述語 $\mathrm{Bew}$、自由変数に数項を代入した $\mathrm{Bew}[F]$（\ref{pt:bew-bracket}）とその D1・D2（\ref{pt:bew-bracket-nec}, \ref{pt:bew-bracket-mp}）、形式化された Σ 完全性 $\PA\vdash F\to
  - `logic:derivability`: NG — 証明可能 is the proof-theoretic notion of provability (⊢), while the card defines 導出可能 (derivability) and 無矛盾性 (consistency), not 証明可能.
  - `set:formal-deduction`: OK

## 「証明書」 in 01-foundations/05-proof-theory/05-quantified-provability-logic
- Default: `comp:class-np` → **no candidate fits**
- Pages: 02-artemov.html
- Sentence: 系として働く。一階の公理だけでは非標準的な元を排除できない（コンパクト性）が、$\Box$ を通じて「解釈が証明可能性について安定（真なら証明可能）」であることを要求すると、解釈は計算可能になり、計算可能な模型は標準モデルしかない（テネンバウム）。たとえれば、一階の言葉だけでは偽物の自然数を見分けられないが、「各事実に証明書が付いていること」を要求すると偽物は自分の正体を隠せなくなる、ということである。
  - `comp:class-np`: NG — Here "証明書" is used metaphorically for a certificate attached to each fact in a computability/model-theory analogy, not the NP witness string $c$ for a verifier as defined in the card.

## 「連言」 in 01-foundations/05-proof-theory/05-quantified-provability-logic
- Default: `logic:abbreviations` → **no candidate fits**
- Pages: 02-artemov.html, 03-vardanyan.html, 04-one-predicate-letter.html
- Sentence: 算術の文 $T$ を、$\PA$ の次の定理の連言とする（すべて 6 種類の原子論理式で書いておく。$\{T\}$ はそれを括弧変換したもの）。
  - `logic:abbreviations`: NG — 「連言」は論理式の連接（∧）を指す語であり、カードが定義する略記の対象ではない。

## 「還元」 in 01-foundations/05-proof-theory/05-quantified-provability-logic
- Default: `comp:mapping-reducible` → **no candidate fits**
- Pages: 03-vardanyan.html
- Sentence: **結論.** $n\mapsto\phi_{n}$ は $S$ を常に証明可能な文の集合に還元するので、後者は $\Pi^{0}_{2}$ 完全。後半は \ref{pt:complete-not-sigma.1}。公理系の定理の集合は認識可能だからである。
  - `comp:mapping-reducible`: NG — Here "還元する" is used in the general sense of reducing one set to another (a many-one reduction), which matches the card's notion of 写像還元, so it is the same notion.

## 「量化様相論理」 in 01-foundations/05-proof-theory/05-quantified-provability-logic
- Default: `pt:qml` → **no candidate fits**
- Pages: 01-quantified-provability-logic.html, 03-vardanyan.html
- Sentence: 可能な様相論理式は $\mathsf{GL}$ で、常に真なものは $\mathsf{GLS}$ でちょうど公理化され、どちらも決定可能だった（\ref{pt:page-solovay}, \ref{pt:page-gls-uniform-completeness}）。本系列では、述語記号と量化子をもつ様相論理式（**量化様相論理**）について同じ問いを考え、答えが極端に否定的であることを示す：常に証明可能な文の集合は $\Pi^{0}_{2}$ 完全（ヴァルダニャン）、常に真な文の集合は算術的でない（アルテモフ）。本ページでは、量化様相論理式の算術的な翻訳を定義し、二つの集合の複雑さの**上界**と簡単な例を示す（\ref{pt:qml-up
  - `pt:qml`: NG — the term names the whole logic (a theory/language), while the card defines a single formula, not the logic itself.

## 「の整列順序」 in 01-foundations/05-proof-theory/06-second-order-arithmetic
- Default: `set:l-alpha-well-order` → **no candidate fits**
- Pages: 03-choice-and-transfinite.html
- Sentence: （$H_{\theta}(X,Y)$ は「$Y$ は $X$ に沿った $\theta$ の超限階層」という算術的論理式）は、$\neg\mathrm{WO}(X)$ が $\Sigma^{1}_{1}$ なので $\Pi^{1}_{2}$ の形をもち、本当の整列順序に沿った超限再帰で階層が作れるので $\mathcal{P}(\N)$ で真である。Step 1 によりこれらはすべて $\mathcal{S}$ で成り立つ。
  - `set:l-alpha-well-order`: NG — the term refers to a genuine well-order in general, not specifically the recursive well-order $\lhd_{\alpha}$ on $L_{\alpha}$ defined by the card.

## 「二項演算」 in 01-foundations/05-proof-theory/06-second-order-arithmetic
- Default: `grp:binary-operation` → **no candidate fits**
- Pages: 01-language-and-subsystems.html
- Sentence: 1. **二階算術の言語** $\mathcal{L}_{2}$ は、**数変数** $i,j,k,m,n,x,y,\dots$（自然数を動く）と**集合変数** $X,Y,Z,\dots$（自然数の集合を動く）、定数 $0,1$、二項演算 $+,\cdot$、関係 $<$, $=$（数の間）と $\in$（数と集合の間）からなる。**項**は数変数と $0,1$ から $+,\cdot$ で作り、**原子論理式**は $t=s$, $t<s$, $t\in X$ の形とする。論理式は原子論理式から命題結合子、**数量化子** $\forall n,\e
  - `grp:binary-operation`: NG — Here "二項演算" refers to binary operation symbols in a formal language, not a map $X\times X\to X$ on a set as defined in the card.

## 「値域」 in 01-foundations/05-proof-theory/06-second-order-arithmetic
- Default: `set:relation` → **no candidate fits**
- Pages: 03-choice-and-transfinite.html
- Sentence: 列 $f(x)\defeq((Z)_{x+1}\text{ の番号})$ は $f(x+1)<_{X}f(x)$ を満たす。$\Sigma^{1}_{1}\text{-}\mathsf{DC}_{0}\vdash\mathsf{ACA}_{0}$（\ref{pt:choice-inclusions}）なので $f$ の値域が存在し、それは最小元をもたない空でない集合となって $\mathrm{WO}(X)$ に反する。
  - `set:relation`: NG — Here "値域" means the range of the function $f$ (the set of its values), whereas the card defines it as the range of a relation $R$; a function is a special case of a relation, so this is the same notion.

## 「全域的」 in 01-foundations/05-proof-theory/06-second-order-arithmetic
- Default: `logic:ctl-semantics` → **no candidate fits**
- Pages: 01-language-and-subsystems.html
- Sentence: (i))$（$i<y$）」の存在で $f(\vec{x},y)=z$ を $\Sigma^{0}_{1}$ に、そのような列すべてで $\sigma(y)=z$ として $\Pi^{0}_{1}$ に書き、$\Delta^{0}_{1}\text{-}\mathsf{CA}$ を使う。両者が同値であることと、$f$ が全域的であること（そのような列が各 $y$ に存在すること）は、$y$ に関する $\Sigma^{0}_{1}$ 帰納法による（列を一つ延ばす）。最小化：$f(\vec{x})=\mu y\,[g(\vec{x},y)=0]$ で、$\forall\vec{x}\,\exists y\,g(\vec{x},y)=0$ のと
  - `logic:ctl-semantics`: NG — Here "全域的" means the function f is total (defined for every y), not that the accessibility relation R is total as in the CTL model definition.

## 「全射」 in 01-foundations/05-proof-theory/06-second-order-arithmetic
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 03-choice-and-transfinite.html
- Sentence: ことと定義すること、整列性の正しさ.** 二階算術の選択公理は、「各 $x$ に証拠がある」から「証拠の列がある」を導く。これは、存在量化子 $\forall x\,\exists Y$ を関数（スコーレム関数）$x\mapsto(Z)_{x}$ に置き換える操作で、論理の言葉では**スコーレム化**、圏論の言葉では「全射が切断をもつ」ことに当たる。一様化定理は、その切断を**定義可能に**選べる場合があることを言っており、そのとき選択は内包公理（定義による集合の存在）に吸収される。β モデルは、「整列している」という判断を誤らないモデルである。比喩で言えば、ω モデルは「数え間違えない」観測者、β モデルはさらに「無限に下り続ける階段
  - `set:injection-surjection`: NG — Here "全射" refers to a surjective function in the category-theoretic sense (epimorphism/surjection having a section), not the specific set-theoretic definition of a surjection $f\colon A\to B$ with $\ran(f)=B$ given in the card.

## 「再帰的」 in 01-foundations/05-proof-theory/06-second-order-arithmetic
- Default: `comp:partial-recursive` → **no candidate fits**
- Pages: 01-language-and-subsystems.html, 03-choice-and-transfinite.html
- Sentence: 1. $\mathsf{RCA}_{0}$（再帰的内包公理）＝ 基本公理 ＋ $\Sigma^{0}_{1}$ 帰納法 ＋ $\Delta^{0}_{1}\text{-}\mathsf{CA}$。
  - `comp:partial-recursive`: NG — Here "再帰的" modifies 内包公理 (comprehension axiom) in the context of second-order arithmetic, referring to computable/recursive sets, not the card's definition of a relation being recursive via a general recursive characteristic function.

## 「反復」 in 01-foundations/05-proof-theory/06-second-order-arithmetic
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 01-language-and-subsystems.html
- Sentence: となるものが存在する（$X$ に沿って $\theta$ を超限回反復した階層が存在する）。
  - `logic:pdl-syntax`: NG — Here "反復" means iterating a set-theoretic operation transfinitely, not the PDL program repetition operator α*.

## 「合成」 in 01-foundations/05-proof-theory/06-second-order-arithmetic
- Default: `logic:while-program` → **fits: `set:relation-composition`**
- Pages: 01-language-and-subsystems.html
- Sentence: 5. 全域関数の全体は、合成・原始再帰・（全域性が保証された）最小化で閉じている。
  - `logic:while-program`: NG — Here "合成" refers to composition of total functions, not the sequential composition of while programs defined in the card.
  - `set:relation-composition`: OK

## 「基底」 in 01-foundations/05-proof-theory/06-second-order-arithmetic
- Default: `mod:free-module` → **no candidate fits**
- Pages: 01-language-and-subsystems.html, 03-choice-and-transfinite.html
- Sentence: athsf{RCA}_{0}\subsetneq\mathsf{WKL}_{0}$（$\mathrm{REC}$ では $\mathsf{WKL}$ が成り立たない。計算可能な道をもたない計算可能な無限二分木がある、クリーネ）、$\mathsf{WKL}_{0}\subsetneq\mathsf{ACA}_{0}$（低基底定理による $\mathsf{WKL}_{0}$ の ω モデルで $\varnothing'$ を含まないものがある、ヨックシュ–ソーア）、$\mathsf{ACA}_{0}\subsetneq\mathsf{ATR}_{0}$、そして $\mathsf{ATR}_{0}\subsetneq\Pi^{1}_{1}\t
  - `mod:free-module`: NG — Here "基底" refers to a basis of a formal system (a low basis theorem / ω-model context), not a basis of a module as in the card.
  - `grp:free-abelian`: NG — Here "基底" refers to a basis in reverse mathematics (low basis theorem), not a basis of a free abelian group.

## 「完全集合」 in 01-foundations/05-proof-theory/06-second-order-arithmetic
- Default: `comp:sigma-n-complete` → **no candidate fits**
- Pages: 03-choice-and-transfinite.html
- Sentence: - *$\mathsf{ATR}_{0}$ の典型的な定理.* 可算整列順序の比較可能性、ルージンの分離定理、ベール空間の非可算閉集合が完全集合を含むことなどが $\mathsf{ATR}_{0}$ と同値である（田中の本の定理群 4。本サイトでは示していない）。
  - `comp:sigma-n-complete`: NG — Here "完全集合" means a perfect set (a closed set with no isolated points), not the computability-theoretic notion of a $\Sigma_{n}$-complete set defined in the card.

## 「対関数」 in 01-foundations/05-proof-theory/06-second-order-arithmetic
- Default: `pt:pairing` → **no candidate fits**
- Pages: 01-language-and-subsystems.html, 03-choice-and-transfinite.html
- Sentence: 3. 対関数 $(m,n)\defeq\frac{(m+n)(m+n+1)}{2}+m$ と、集合の直積 $X\times Y$、関数 $f\colon X\to Y$（対の集合として）。有限列の数による符号化。
  - `pt:pairing`: NG — This is Cantor's pairing function, a different formula from the card's definition \(2\cdot((x+y)\cdot(x+y)+x+1)\).

## 「従う」 in 01-foundations/05-proof-theory/06-second-order-arithmetic
- Default: `logic:positional-strategy` → **no candidate fits**
- Pages: 01-language-and-subsystems.html, 02-aca0-conservativity.html
- Sentence: $\mathsf{ACA}_{0}$ 以上の体系では、算術的内包公理と集合についての帰納法の公理から、算術的論理式すべての帰納法が従う（論理式 $\varphi$ が定める集合をとって帰納法の公理を使う）。体系の名前と典型的な定理の対応（\ref{logic:page-rm-rca0} で扱う）は、一般に次のように言われている。$\mathsf{RCA}_{0}$：計算可能な数学（中間値の定理など）。$\mathsf{WKL}_{0}$：コンパクト性
  - `logic:positional-strategy`: NG — Here "従う" means "follows (is derivable) from the axioms," not the game-theoretic notion of a play following a positional strategy.

## 「有界量化」 in 01-foundations/05-proof-theory/06-second-order-arithmetic
- Default: `pt:sigma-formula` → **no candidate fits**
- Pages: 01-language-and-subsystems.html, 02-aca0-conservativity.html
- Sentence: - 算術の言語、数項、有界量化子、ロビンソン算術 $\mathsf{Q}$、$\mathrm{I}\Sigma_{1}$ と $\mathsf{PRA}$ の位置づけは \ref{pt:page-peano-arithmetic}, \ref{comp:page-representability} のとおり。
  - `pt:sigma-formula`: NG — 有界量化 is a syntactic notion (bounded quantification), not the Σ/Δ formula classification defined in the card.

## 「算術的」 in 01-foundations/05-proof-theory/06-second-order-arithmetic
- Default: `pt:l2-hierarchy` → **no candidate fits**
- Pages: 01-language-and-subsystems.html, 02-aca0-conservativity.html, 03-choice-and-transfinite.html
- Sentence: cal{P}(\N)$ について、ω モデル $\mathcal{S}$ が $\mathsf{ACA}_{0}$ のモデルであることと、$\mathcal{S}$ がチューリングイデアルで跳躍について閉じている（$X\in\mathcal{S}$ なら $X'\in\mathcal{S}$）ことは同値である。とくに、算術的な集合（ある $n$ で $\emptyset^{(n)}$ から計算可能な集合）全体 $\mathrm{ARITH}$ は $\mathsf{ACA}_{0}$ の最小の ω モデルである。
  - `pt:l2-hierarchy`: NG — In the card, "算術的" means a formula with no set quantifiers, whereas in the sentence it refers to sets computable from some finite jump $\emptyset^{(n)}$, a different notion.

## 「要求」 in 01-foundations/05-proof-theory/06-second-order-arithmetic
- Default: `logic:ctl-successor-def` → **no candidate fits**
- Pages: 01-language-and-subsystems.html
- Sentence: 停止集合 $K=\{e:\exists t\,T_{1}(e,e,t)\}$ は、パラメータのない $\Sigma^{0}_{1}$ 論理式（クリーネの $T$ 述語を表現する論理式 \ref{comp:representability} を使う）で定義される。算術的内包公理はその集合の存在を要求するが、$K$ は計算可能でない（\ref{comp:halting-L}）ので $\mathrm{REC}$ に属さない。$\mathrm{REC}$ で論理式を解釈すると数の領域が $\N$ なので、論理式は本当に $K$ を定義し、$\mathrm{REC}$ にはその集合がない。
  - `logic:ctl-successor-def`: NG — Here "要求する" means "requires/demands" in the ordinary sense, not the modal-logic technical notion of a "要求" (requirement) defined in the card.

## 「解析学」 in 01-foundations/05-proof-theory/06-second-order-arithmetic
- Default: `pt:analysis` → **no candidate fits**
- Pages: 01-language-and-subsystems.html
- Sentence: **二階算術**は、自然数と、自然数の**集合**の二種類の対象を扱う理論である。実数・連続関数・可算な代数的構造などは自然数の集合で符号化できるので、通常の数学の多くの部分（解析学、可算代数、組合せ論）がこの言語で表せる。本ページでは、二階算術の言語と構造（\ref{pt:l2-language}）、論理式の階層（\ref{pt:l2-hierarchy}）を定め、集合の存在を主張する**内包公理**の強さに応じて、五つの部分体系 $\mathsf{RCA}_{0}$, $\mathsf{WKL
  - `pt:analysis`: NG — Here "解析学" refers to ordinary mathematical analysis (a branch of mathematics), not the specific formal theory defined in the card.

## 「計算可能」 in 01-foundations/05-proof-theory/06-second-order-arithmetic
- Default: `comp:L-computable` → **fits: `comp:mapping-reducible`**
- Pages: 01-language-and-subsystems.html, 03-choice-and-transfinite.html
- Sentence: 入する。これらは**逆数学**（\ref{logic:page-rm-rca0}）で、定理を証明するのに必要十分な公理を測る物差しとして使われる。後半では、最も弱い $\mathsf{RCA}_{0}$ の中での基本的な議論（\ref{pt:rca0-basic}）と、標準的な自然数をもつモデル（**ω モデル**）が計算可能性の言葉で特徴づけられること（\ref{pt:omega-rca0}, \ref{pt:omega-aca0}）を示す。
  - `comp:L-computable`: NG — Here "計算可能性" refers to computability theory in general (the informal notion used to characterize ω-models), not specifically the L-computable partial functions defined in the card.
  - `comp:mapping-reducible`: OK

## 「選択」 in 01-foundations/05-proof-theory/06-second-order-arithmetic
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 03-choice-and-transfinite.html
- Sentence: }\text{-}\mathsf{AC}$ は、「各 $x$ について条件 $\varphi(x,\cdot)$ を満たす集合がある」なら、それらを一斉に選んだ列 $((Z)_{x})_{x}$ があるという主張で、集合論の可算選択公理に当たる。$\mathcal{C}\text{-}\mathsf{DC}$ は、前の選択 $X$ に依存して次の選択 $Y$ をする操作を可算回続けられるという主張である。
  - `logic:pdl-syntax`: NG — Here "選択" refers to the axiom of choice (choosing elements from sets), not the PDL program operator α∪β (nondeterministic choice).

## 「選言」 in 01-foundations/05-proof-theory/06-second-order-arithmetic
- Default: `logic:abbreviations` → **no candidate fits**
- Pages: 03-choice-and-transfinite.html
- Sentence: x)$ なので $Y=\{0\}$）。$\Sigma^{1}_{k}\text{-}\mathsf{AC}$ で $\forall x\,\theta(x,(W)_{x})$ となる $W$ をとり、$X\defeq\{x:0\in(W)_{x}\}$ とおく。$\varphi(x)$ なら $\theta$ の第一の選言肢は偽なので第二が真で $0\in(W)_{x}$、すなわち $x\in X$。$x\in X$ なら $0\in(W)_{x}$ で第一の選言肢が偽なので第二が真で $\neg\psi(x)$。
  - `logic:abbreviations`: NG — 「選言」は日本語の論理学用語で「論理和（∨）」を指し、カードが定義する略記（¬, ⊤, ∧, ∨, ↔, ∃, ≠ などの記号列の定義）とは異なる概念である。

## 「部分体」 in 01-foundations/05-proof-theory/06-second-order-arithmetic
- Default: `fld:extension` → **no candidate fits**
- Pages: 01-language-and-subsystems.html
- Sentence: **高い視点から：集合の宇宙を細かく刻む.** 集合論 $\mathsf{ZFC}$ が「すべての集合」を一度に与えるのに対し、二階算術の部分体系は「どの集合が存在すると認めるか」を段階的に増やす。$\mathsf{RCA}_{0}$ は「計算できる集合」、$\mathsf{ACA}_{0}$ は「算術的に定義できる集合」（停止問題を何度でも解ける神託を使える世界）、$\Pi^{1}_{1}\text{-}\mathsf{CA}_{0}$ は「整列順序かどうか
  - `fld:extension`: NG — Here "部分体系" (subsystem) refers to a subsystem of second-order arithmetic, not a subfield of a field.

## 「集合の存在」 in 01-foundations/05-proof-theory/06-second-order-arithmetic
- Default: `set:ax-set-existence` → **no candidate fits**
- Pages: 01-language-and-subsystems.html, 02-aca0-conservativity.html, 03-choice-and-transfinite.html
- Sentence: の二種類の対象を扱う理論である。実数・連続関数・可算な代数的構造などは自然数の集合で符号化できるので、通常の数学の多くの部分（解析学、可算代数、組合せ論）がこの言語で表せる。本ページでは、二階算術の言語と構造（\ref{pt:l2-language}）、論理式の階層（\ref{pt:l2-hierarchy}）を定め、集合の存在を主張する**内包公理**の強さに応じて、五つの部分体系 $\mathsf{RCA}_{0}$, $\mathsf{WKL}_{0}$, $\mathsf{ACA}_{0}$, $\mathsf{ATR}_{0}$, $\Pi^{1}_{1}\text{-}\mathsf{CA}_{0}$（\ref{pt:big-fi
  - `set:ax-set-existence`: NG — Here「集合の存在」 refers to the set-existence claim of the comprehension axiom in second-order arithmetic, not the pure logical axiom \(\exists x\,(x=x)\) asserting that some set exists.

## 「飽和」 in 01-foundations/05-proof-theory/06-second-order-arithmetic
- Default: `model:saturated` → **no candidate fits**
- Pages: 03-choice-and-transfinite.html
- Sentence: $\Sigma^{1}_{1}\text{-}\mathsf{AC}_{0}$ の保存性.* $\Sigma^{1}_{1}\text{-}\mathsf{AC}_{0}$ は $\Pi^{1}_{2}$ 文について $\mathsf{ACA}_{0}$ の保存拡大である（バーワイズ–シュリップ）。証明には**再帰的に飽和なモデル**が使われる（田中の本の §3.2）。
  - `model:saturated`: NG — Here "飽和" modifies "モデル" in the sense of recursively saturated models from second-order arithmetic, not the model-theoretic κ-saturation defined in the card.
  - `top:saturated-set`: NG — Here "飽和なモデル" refers to recursively saturated models in model theory, not the saturated-set notion (preimage of fibers under a surjection) defined in the card.

## 「コンパクト」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `top:compact` → **no candidate fits**
- Pages: 01-rca0-analysis.html, 02-wkl0.html, 03-aca0.html, 04-ramsey.html, 06-friedman.html
- Sentence: 値のように、近似の手続きが一般には書けない（最大値を与える点が計算できない連続関数がある）定理は、$\mathsf{RCA}_{0}$ を超える公理を要する。比喩で言えば、$\mathsf{RCA}_{0}$ は「電卓とストップウォッチだけで解析学をする」体系で、逆数学はどの定理がそれだけで済み、どの定理が無限の探索（コンパクト性や完備性）を本質的に要するかを分類する。
  - `top:compact`: NG — Here "コンパクト性" refers to a property used in reverse mathematics as an infinite search principle, not the topological definition of compactness given in the card.

## 「コード」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `comp:prime-sequence-code` → **no candidate fits**
- Pages: 01-rca0-analysis.html, 02-wkl0.html
- Sentence: 1. $\N\defeq\{n:n=n\}$。数の対 $(k,l)$ は整数 $k-l$ を表すとし、$(k,l)\equiv_{\mathbb{Z}}(m,n):\iff k+n=l+m$。各同値類で（対のコードが）最小のものを代表とし、その全体を $\mathbb{Z}$ とする。和と積は $(k,l)+(m,n)\defeq(k+m,l+n)$, $(k,l)\cdot(m,n)\defeq(km+ln,kn+lm)$ の代表として定める。
  - `comp:prime-sequence-code`: NG — Here "コード" refers to a code for a pair of natural numbers representing an integer, not the finite-support state code defined in the card.

## 「不動点」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `pt:fixed-point` → **no candidate fits**
- Pages: 01-rca0-analysis.html, 02-wkl0.html
- Sentence: $\mathsf{RCA}_{0}$ で、定義域が $[0,1]$ を含み値が $[0,1]$ に入る連続関数 $f$ は不動点をもつ。
  - `pt:fixed-point`: NG — This is the analytic fixed-point notion for continuous functions, not the provability-logic fixed point defined in the card.

## 「両立」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `set:compatible` → **no candidate fits**
- Pages: 01-rca0-analysis.html
- Sentence: 4. $p+q$, $p\cdot q$ は実数で、$=_{\mathbb{R}}$ について両立する。$(\mathbb{R},+,\cdot,<_{\mathbb{R}},=_{\mathbb{R}})$ はアルキメデス的順序体の公理を満たす。
  - `set:compatible`: NG — Here "両立する" means the two real-number expressions are compatible/consistent with respect to equality, not the poset notion of having a common lower bound.

## 「交わり」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `set:boolean-algebra` → **no candidate fits**
- Pages: 05-harrington-forcing.html
- Sentence: $ となるものに選ぶ（$D_{i}$ の稠密性）。$F\defeq\{T'\in P:\exists i\,(T_{i}\le T')\}$ は、(i) は定義から、(ii) は $T_{i},T_{j}$ のうち添字の大きい方が共通の下界になることから、フィルターである。各 $D_{i}$ と $T_{i+1}$ で交わり、$T\in F$。
  - `set:boolean-algebra`: NG — Here "交わり" means the intersection of sets (or meeting with $D_i$ and $T_{i+1}$), not the lattice meet/join operation defined in the Boolean algebra card.

## 「値域」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `set:relation` → **no candidate fits**
- Pages: 01-rca0-analysis.html, 03-aca0.html
- Sentence: 実数を**デデキントの切断**で定めない理由：切断の列 $(X_{n})$ が与えられても、各 $X_{n}$ から一つの無理数を引いた切断の列の存在は $\mathsf{RCA}_{0}$ では示せないことが知られている（田中の本に、値域が計算可能でない計算可能関数を使った具体例がある）。和や差のような基本的な演算が列に対して実行できないのは、解析学を展開するのに致命的である。
  - `set:relation`: NG — Here "値域" refers to the range of a computable function, not the range of a relation as defined in the card.

## 「全域的」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `logic:ctl-semantics` → **no candidate fits**
- Pages: 01-rca0-analysis.html
- Sentence: **添字の選択.** $g(k)\defeq\mu n\,[\beta_{n}-\alpha_{n}<2^{-k}]$ とする。比較は有理数の比較なので、$g$ のグラフは有界な論理式で定義できる。$g$ が全域的であること：$\lim(b_{n}-a_{n})=0$ から $b_{n}-a_{n}<2^{-k-1}$ となる $n$ があり、(1) から $b-a$ は単調減少なので $n\ge k+3$ としてよい。すると $\beta_{n}-\alpha_{n}\le(b_{n}-a_{n})+2^{-n+1}<2^{-
  - `logic:ctl-semantics`: NG — Here "全域的" means the function g is total (defined on all inputs), not that the accessibility relation R is total/serial as in the CTL model definition.

## 「半順序」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `set:total-order` → **fits: `set:forcing-poset`**
- Pages: 05-harrington-forcing.html
- Sentence: 1. **強制条件**の集合を $P\defeq\{T\in\mathcal{S}:\mathfrak{M}\models\text{「}T\text{ は }2^{<\N}\text{ の無限部分木」}\}$ とし、$T'\le T:\iff T'\subseteq T$ で半順序を入れる（$T'$ の方が「強い」条件）。
  - `set:total-order`: NG — This is a partial order defined with the non-strict inclusion relation $\subseteq$, which is reflexive, whereas the card defines a strict partial order satisfying irreflexivity.
  - `set:forcing-poset`: OK

## 「単調」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `comp:monotone-continuous` → **no candidate fits**
- Pages: 01-rca0-analysis.html, 03-aca0.html, 04-ramsey.html, 05-harrington-forcing.html, 06-friedman.html
- Sentence: \,[\beta_{n}-\alpha_{n}<2^{-k}]$ とする。比較は有理数の比較なので、$g$ のグラフは有界な論理式で定義できる。$g$ が全域的であること：$\lim(b_{n}-a_{n})=0$ から $b_{n}-a_{n}<2^{-k-1}$ となる $n$ があり、(1) から $b-a$ は単調減少なので $n\ge k+3$ としてよい。すると $\beta_{n}-\alpha_{n}\le(b_{n}-a_{n})+2^{-n+1}<2^{-k-1}+2^{-k-2}<2^{-k}$。よって \ref{pt:rca0-basic.5} で $g$ は全域的な関数として存在する。
  - `comp:monotone-continuous`: NG — Here "単調減少" means monotonically decreasing (a property of a real sequence), not the monotonicity of a map on power sets defined in the card.

## 「可算」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `set:finite-set` → **no candidate fits**
- Pages: 01-rca0-analysis.html, 02-wkl0.html, 04-ramsey.html, 05-harrington-forcing.html, 06-friedman.html
- Sentence: 田中の本と Simpson の本によれば、ほかに次の定理も $\mathsf{RCA}_{0}$ で証明できることが知られている：縮小写像についてのバナッハの不動点定理、完備可分距離空間のベールの範疇定理、代数学の基本定理、「無矛盾で完全な（可算言語の）理論はモデルをもつ」。いずれも、存在を主張する対象を**計算する手続き**（探索や近似）が具体的に書けるという共通点をもつ。一方、二次元以上のブラウワーの不動点定理や、$[0,1]$ 上の連続関数の最大値の存在は、$\mathsf{RCA}_{0}$ では証明できず、$\mathsf{WKL}_{0}$ と同値
  - `set:finite-set`: NG — Here "可算言語" means a countable language (a language with countably many symbols), which is a different notion from the card's definition of a set being 可算 (countable).

## 「合成」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `logic:while-program` → **no candidate fits**
- Pages: 01-rca0-analysis.html, 04-ramsey.html, 06-friedman.html
- Sentence: **極限の構成.** $c_{k}\defeq\alpha_{g(k+1)}$ とする（原始再帰的な操作の合成なので関数として存在する）。$m\defeq g(k+1)$, $m'\defeq g(k+i+1)$ とすると、(1) から二つの区間は共通の点 $z$ をもち、$\beta_{m}-\alpha_{m}<2^{-k-1}$, $\beta_{m'}-\alpha_{m'}<2^{-k-i-1}$ なので
  - `logic:while-program`: NG — Here "合成" means composition of primitive recursive operations, not the sequential composition of while programs defined in the card.
  - `set:relation-composition`: NG — Here "合成" refers to composition of primitive recursive operations (functions), not the composition of relations defined in the card.
  - `cat:category`: NG — Here "合成" refers to composition of recursive operations/functions, not the composition of morphisms in a category as defined in the card.
  - `cat:non-symmetric-operad`: NG — Here "合成" means composition of primitive recursive operations (functions), not the operad composition operation γ defined in the card.

## 「命題論理」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `logic:prop-formula` → **no candidate fits**
- Pages: 02-wkl0.html
- Sentence:  が $T$ に属する $\iff$ 付値 $p_{i}\mapsto t(i)$（$i<k$）が、$\Gamma$ の元のうちコードが $k$ 未満で変数が $p_{0},\dots,p_{k-1}$ だけのものをすべて真にする」で定める（有界な条件なので存在する）。$\Gamma$ が（有限的に）充足可能、すなわち命題論理の完全性（コンパクト性）の有限版により各有限部分が充足可能なら、$T$ は各長さに元をもつ無限木である。$\mathsf{WKL}$ で道 $f$ をとると、付値 $p_{i}\mapsto f(i)$ は $\Gamma$ のすべての元を真にし、その付値で真になる論理式全体（$\Delta^{0}_{1}$ で定義で
  - `logic:prop-formula`: NG — “命題論理” here names the whole logical system, not an individual propositional formula as defined by the card.

## 「基底」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `mod:free-module` → **no candidate fits**
- Pages: 01-rca0-analysis.html, 02-wkl0.html, 03-aca0.html, 04-ramsey.html, 05-harrington-forcing.html
- Sentence: 理が必要か」を、二階算術の部分体系（\ref{pt:big-five}）を物差しにして測る。典型的な結果は「$\mathsf{RCA}_{0}$ の上で $\varphi$ は $\mathsf{WKL}_{0}$（あるいは $\mathsf{ACA}_{0}$）と同値である」という形をとる。そのためには、まず最も弱い基底の体系 $\mathsf{RCA}_{0}$ の中で実数や連続関数を扱えるようにしなければならない。本ページでは、実数を**速く収束する有理数列**として符号化し（\ref{logic:rm-real}）、その大小と演算を定め（\ref{logic:rm-real-order}）、$\mathsf{RCA}_{0}$ 
  - `mod:free-module`: NG — Here "基底" means a base system (of a logical theory), not a basis of a module.
  - `grp:free-abelian`: NG — Here "基底" means a base system (of a formal theory), not a basis of a free abelian group.

## 「始切片」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `set:initial-segment` → **no candidate fits**
- Pages: 02-wkl0.html, 03-aca0.html, 04-ramsey.html, 05-harrington-forcing.html, 06-friedman.html
- Sentence: - 二階算術、$\mathsf{RCA}_{0}$, $\mathsf{WKL}_{0}$、二分木と道、$2^{<\N}$、$\sigma\subseteq\tau$（始切片）は \ref{pt:page-soa-subsystems} のとおり（\ref{pt:big-five}, \ref{pt:wkl-atr-axioms}）。$\sigma i$ は $\sigma$ の後に文字 $i\in\{0,1\}$ を付けた列。
  - `set:initial-segment`: NG — Here "始切片" refers to an initial segment of a binary sequence (σ⊆τ), not the set-theoretic predecessor set pred(A,x,R) defined in the card.

## 「存在量化子」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `logic:abbreviations` → **no candidate fits**
- Pages: 05-harrington-forcing.html
- Sentence: mathcal{S}\cup\{G\}$ をパラメータとする $\Sigma^{0}_{1}$）と書けるので、$t\in X$ の正の出現を $\chi_{1}(t)$、負の出現を $\neg\chi_{2}(t)$ で置き換えると、$\Sigma^{0}_{1}$ 論理式を $\wedge,\vee$, 有界量化子、存在量化子で組み合わせた形になる。有界な全称量化子を存在量化子の外に出すには有界収集原理 $\mathrm{B}\Sigma^{0}_{1}$ が要るが、これは $\Sigma^{0}_{1}$ 帰納法から従うことが知られており（本サイトでは示していない）、\ref{pt:generic-path-induction} により 
  - `logic:abbreviations`: NG — 存在量化子 is the existential quantifier symbol ∃, while the card defines it only as an abbreviation for ¬∀¬, not the quantifier itself as a primitive notion.

## 「強制」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `logic:ikripke-model` → **no candidate fits**
- Pages: 05-harrington-forcing.html, 06-friedman.html
- Sentence: logic:wkl-not-rca}）。それにもかかわらず、**$\mathsf{WKL}_{0}$ で証明できる $\Pi^{1}_{1}$ 文は、すでに $\mathsf{RCA}_{0}$ で証明できる**（ハーリントンの定理、\tref{pt:harrington}）。本ページではこれを、集合論で開発された**強制法**を二階算術の可算モデルに適用して証明する。要点は、$\mathsf{RCA}_{0}$ の可算モデル $(M,\mathcal{S})$ の無限二分木に「ジェネリックな」道 $G$ を付け加えても、$\Sigma^{0}_{1}$ 帰納法が壊れないこと（\ref{pt:generic-path-induction
  - `logic:ikripke-model`: NG — Here "強制法" means set-theoretic forcing (Cohen forcing), not the Kripke-model forcing relation defined in the card.

## 「従う」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `logic:positional-strategy` → **no candidate fits**
- Pages: 02-wkl0.html, 03-aca0.html, 04-ramsey.html, 05-harrington-forcing.html, 06-friedman.html
- Sentence: できる（**低い**）道をもつ（ヨックシュ–ソーア、\tref{comp:low-basis}）。これを繰り返すと、すべての元が低い $\mathsf{WKL}_{0}$ の ω モデルが作れ、$\varnothing'$ を含まないので $\mathsf{WKL}_{0}\neq\mathsf{ACA}_{0}$ が従う。
  - `logic:positional-strategy`: NG — Here "従う" means "follows logically" (is derived), not a play following a positional strategy.

## 「有界量化」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `pt:sigma-formula` → **no candidate fits**
- Pages: 05-harrington-forcing.html, 06-friedman.html
- Sentence: $ は $\mathcal{S}\cup\{G\}$ をパラメータとする $\Sigma^{0}_{1}$）と書けるので、$t\in X$ の正の出現を $\chi_{1}(t)$、負の出現を $\neg\chi_{2}(t)$ で置き換えると、$\Sigma^{0}_{1}$ 論理式を $\wedge,\vee$, 有界量化子、存在量化子で組み合わせた形になる。有界な全称量化子を存在量化子の外に出すには有界収集原理 $\mathrm{B}\Sigma^{0}_{1}$ が要るが、これは $\Sigma^{0}_{1}$ 帰納法から従うことが知られており（本サイトでは示していない）、\ref{pt:generic-path-inductio
  - `pt:sigma-formula`: NG — the card defines Σ/Δ formulas, not the notion of bounded quantification itself.

## 「有限部分被覆」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `top:compact` → **no candidate fits**
- Pages: 02-wkl0.html
- Sentence: *有限部分被覆.* $\mathsf{WKL}$ から $T$ は有限で、ある $n$ で長さ $n$ の列は $T$ に属さない。すなわち長さ $n$ のどの $s$ にも、$i<n$, $i\in U$ で $p_{i}<a_{s}\le b_{s}<q_{i}$ となるものがある。$U'\defeq\{i\in U:i<n\}
  - `top:compact`: NG — the sentence uses "finite subcover" only as a label and does not assert the compactness definition (finite subcover of an open cover).

## 「特異」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `set:regular-cardinal` → **no candidate fits**
- Pages: 02-wkl0.html, 04-ramsey.html
- Sentence: ）。逆向き（2〜5 から $\mathsf{WKL}$）は、$\mathsf{WKL}$ が成り立たないと仮定し、道をもたない無限二分木 $T$ の極小の非元 $B$ に対応する区間 $[a_{s},b_{s}]$（$s\in B$）を使う：これらは $[0,1]$ を「端点だけを共有して」覆う無限個の閉区間の族（**特異閉被覆**）になり、区間 $[a_{s},b_{s}]$ の上で高さ $\lvert s\rvert$ の山形の関数をつなぐと、連続だが有界でない関数ができる（3 の反例）。高さを変えれば 4・5 の反例も同様に作れる。6 は、$\mathsf{WKL}_{0}$ で一様連続性を使って有限の組合せ論（スペルナーの補題）
  - `set:regular-cardinal`: NG — Here “特異閉被覆” means a singular (special/peculiar) closed cover, not the set-theoretic notion of a singular ordinal/cardinal.

## 「稠密集合」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `set:dense-set` → **no candidate fits**
- Pages: 05-harrington-forcing.html
- Sentence: > 主な資料は田中一之『逆数学と 2 階算術』第 3 章 §3.3（命題 3.19、補題 3.20–3.24、定理 3.25）。証明は自分の言葉で組み立て直し、稠密集合 $E_{k}$ の稠密性、$\Sigma^{0}_{1}$ 論理式の正規形、$D_{b}$ の稠密性の証明の細部を補って書いた。
  - `set:dense-set`: NG — This "dense set" refers to a dense subset of a partial order (forcing/density in the sense of the card), but the sentence's $E_{k}$ and $D_{b}$ are dense sets in a different context (reverse mathematics/2nd-order arithmetic), so the notion may not match the card's definition.

## 「等質」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `set:partition-relation` → **no candidate fits**
- Pages: 04-ramsey.html
- Sentence: （このような列を**前等質**という。$k+1$ 個組の色が最初の $k$ 個だけで決まる。）
  - `set:partition-relation`: NG — 「前等質」は「等質」とは別の概念であり、定義14.1の等質集合の定義を指していない。

## 「算術的」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `pt:l2-hierarchy` → **no candidate fits**
- Pages: 03-aca0.html, 04-ramsey.html, 05-harrington-forcing.html, 06-friedman.html
- Sentence: 、$m=\max(m',m'')$ より先の $x_{n}\in I$ は、\ref{logic:rm-real-order.2} により中点以下か中点以上かのどちらかで、$I'$ か $I''$ に入り、矛盾する。$[-b,b]$ は有限個の $I_{0,j}$（$-b\le j<b$）の和なので、同じ議論を有限回（算術的帰納法で）繰り返して、ある $j_{0}$ で $(0,j_{0})\in W$ となる。以下、$j_{k+1}$ を $\{2j_{k},2j_{k}+1\}$ のうち $(k+1,j)\in W$ となる最小の $j$ と定める（上の事実から存在する）。$W$ をパラメータとする原始再帰なので、関数 $k\maps
  - `pt:l2-hierarchy`: NG — Here "算術的帰納法" means arithmetic induction (ordinary induction on natural numbers), not the logical class of arithmetic formulas defined in the card.

## 「細かい」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `top:finer-coarser` → **no candidate fits**
- Pages: 02-wkl0.html
- Sentence: も属さないとする。原始再帰で $f(n)$ を、$x$ が $I_{f\restr n\,0}$ に属するなら $0$、$I_{f\restr n\,1}$ に属するなら $1$ と定める（$x$ は $I_{f\restr n}$ の中央の隙間に属さないので、二つのどちらかに属し、隙間の幅 $3^{-n-1}$ より細かい $x$ の近似で判定できる）。$f$ は $T$ の道でないので、ある $n$ で $f\restr n\notin T$、最小の $n$ をとると $f\restr n\in B$ で、$x\in I_{f\restr n}\subseteq J_{f\restr n}$。
  - `top:finer-coarser`: NG — Here "細かい" describes a finer approximation scale (width smaller than \(3^{-n-1}\)), not a finer topology on a set.

## 「行き止まり」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `logic:evaluation-game` → **no candidate fits**
- Pages: 02-wkl0.html, 03-aca0.html
- Sentence: 値性（\ref{logic:heine-borel-wkl}）は、$[0,1]$ とカントール空間の間の連続な全射（二進展開）と、カントール集合の埋め込み（三進展開）を通して、二つのコンパクト性が互いに導けることを形式化したものである。比喩で言えば、$\mathsf{WKL}_{0}$ は「無限に分かれる道を進むとき、行き止まりにならない道が少なくとも一本は存在すると信じてよい」体系で、その道を具体的に計算する方法は与えない。この「存在だけを認め、計算は求めない」中間の強さが、解析学の多くの定理（コンパクト性に基づくもの）にちょうど合っている。
  - `logic:evaluation-game`: NG — Here "行き止まり" is used metaphorically for a dead-end path in an infinite binary tree (Kőnig's lemma), not the two designated loop vertices $\top_{0},\top_{1}$ of the evaluation game.

## 「要求」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `logic:ctl-successor-def` → **no candidate fits**
- Pages: 05-harrington-forcing.html
- Sentence: 可算なら、$\mathcal{L}_{2}$ の論理式とパラメータの組は可算個しかないので、$\mathrm{Def}(\mathfrak{M})$ は可算である。$G$ は一般に $\mathcal{S}$ に属さない「外から付け加える」集合で、ジェネリック性は「$\mathfrak{M}$ で記述できるどんな稠密な要求も、どこかで満たしている」ことを表す。
  - `logic:ctl-successor-def`: NG — Here "要求" means a dense set/condition in forcing (a set-theoretic notion), not the modal-logic "requirement" defined in the card.

## 「解析学」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `pt:analysis` → **no candidate fits**
- Pages: 01-rca0-analysis.html, 02-wkl0.html, 05-harrington-forcing.html, 06-friedman.html
- Sentence: *で定めない理由：切断の列 $(X_{n})$ が与えられても、各 $X_{n}$ から一つの無理数を引いた切断の列の存在は $\mathsf{RCA}_{0}$ では示せないことが知られている（田中の本に、値域が計算可能でない計算可能関数を使った具体例がある）。和や差のような基本的な演算が列に対して実行できないのは、解析学を展開するのに致命的である。
  - `pt:analysis`: NG — Here "解析学" refers to the mathematical field of analysis (developing analysis), not the specific formal theory defined in the card.

## 「計算可能」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `comp:L-computable` → **no candidate fits**
- Pages: 01-rca0-analysis.html, 02-wkl0.html, 03-aca0.html, 04-ramsey.html, 05-harrington-forcing.html
- Sentence: }_{0}$ 内包公理で $\mathbb{Z},\mathbb{Q}$ は集合として存在する。$\mathbb{Q}$ が順序体の公理を満たすことは、$\mathsf{RCA}_{0}$ の一階の部分（$\mathrm{I}\Sigma_{1}$ を含む）での通常の計算で確かめられる。以下、有理数の四則と大小の比較は計算可能（$\Sigma^{0}_{0}$ で定義できる）である。
  - `comp:L-computable`: NG — Here "計算可能" refers to computability of arithmetic operations and comparisons on rationals, not the definition of a computable partial function computed by an L program.
  - `comp:mapping-reducible`: NG — Here "計算可能" refers to arithmetic operations on rationals being computable (definable by a $\Sigma^{0}_{0}$ formula), not to a function on strings computed by a Turing machine as in the card.

## 「距離」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `top:metric-topology` → **no candidate fits**
- Pages: 01-rca0-analysis.html
- Sentence: {5}{8}L_{n}=u_{n+1}-\frac{1}{8}L_{n}$、後者の場合 $x_{n}\ge a-\frac{1}{8}L_{n}>u_{n}+\frac{3}{8}L_{n}=v_{n+1}+\frac{1}{8}L_{n}$。どちらでも、$x_{n}$ は $[u_{n+1},v_{n+1}]$ から距離 $\frac{1}{8}L_{n}$ 以上離れている。
  - `top:metric-topology`: NG — Here "距離" means the numerical distance between a point and an interval, not a metric function on a set as defined in the card.

## 「近似列」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `logic:mu-approximant` → **no candidate fits**
- Pages: 01-rca0-analysis.html
- Sentence: べられない（$<_{\mathbb{R}}$ は $\Sigma^{0}_{1}$）が、各 $a_{n}$ の有理数の近似 $\alpha_{n}$ と、区間の長さ $\beta_{n}-\alpha_{n}$ は計算で比べられる。そこで「十分短くなった区間」の番号 $g(k)$ を探索で求め、その左端を並べると極限の近似列になる。$\lim(b_{n}-a_{n})=0$ という仮定が、この探索が必ず止まることを保証している。
  - `logic:mu-approximant`: NG — Here "近似列" means a sequence of rational approximations converging to a real number, not the transfinite recursion sequence of subsets defined in the card.

## 「選択」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 01-rca0-analysis.html
- Sentence: **添字の選択.** $g(k)\defeq\mu n\,[\beta_{n}-\alpha_{n}<2^{-k}]$ とする。比較は有理数の比較なので、$g$ のグラフは有界な論理式で定義できる。$g$ が全域的であること：$\lim(b_{n}-a_{n})=0$ から $b_{n}-a_{n}<2^{-k-1}$ となる $n
  - `logic:pdl-syntax`: NG — Here "選択" refers to choosing an index (index selection), not the PDL program operator "choice" (α∪β).

## 「部分体」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `fld:extension` → **no candidate fits**
- Pages: 01-rca0-analysis.html
- Sentence: **逆数学**は、通常の数学の定理 $\varphi$ について、「$\varphi$ を証明するにはどの集合存在公理が必要か」を、二階算術の部分体系（\ref{pt:big-five}）を物差しにして測る。典型的な結果は「$\mathsf{RCA}_{0}$ の上で $\varphi$ は $\mathsf{WKL}_{0}$（あるいは $\mathsf{ACA}_{0}$）と同値である」という形をとる。そのためには、まず最も弱い基底の体系 $\mathsf{R
  - `fld:extension`: NG — Here "部分体系" means subsystem of second-order arithmetic, not a subfield of a field.

## 「部分集合」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `set:subset` → **no candidate fits**
- Pages: 02-wkl0.html, 03-aca0.html, 04-ramsey.html, 05-harrington-forcing.html, 06-friedman.html
- Sentence: $ に属するとは、ある $i\in U$ で $p_{i}<x<q_{i}$ となることとする。$U$ が $[0,1]$ を**覆う**とは、$0\le x\le1$ となるすべての実数 $x$ が $U$ に属することをいう。**ハイネ–ボレルの定理**とは「$[0,1]$ を覆う開集合の符号 $U$ に対し、有限部分集合 $U'\subseteq U$ で $[0,1]$ を覆うものがある」という主張である。
  - `set:subset`: NG — Here "部分集合" refers to a finite subset U' of U used in a covering, not the subset relation A⊆B defined by the card.

## 「開被覆」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `top:compact` → **no candidate fits**
- Pages: 02-wkl0.html
- Sentence: - ハイネ–ボレルの定理を「可算な開被覆」に限ったのは、二階算術で表せる被覆が可算なものだけだからである。
  - `top:compact`: NG — 「開被覆」 is a component of the definition of compactness, not the defined term itself (the card defines コンパクト and 有限交叉性).

## 「開集合の符号」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `logic:open-cover-code` → **no candidate fits**
- Pages: 01-rca0-analysis.html, 02-wkl0.html
- Sentence: - 連続関数の符号の定義は、文献によって細部が異なる（Simpson は開集合の符号と同様の形で定めている）。
  - `logic:open-cover-code`: NG — This sentence refers to the coding/sign of a continuous function, not the coding of open intervals as a set of codes defining an open set.

## 「非有界」 in 01-foundations/05-proof-theory/07-reverse-mathematics
- Default: `set:cofinal-map` → **no candidate fits**
- Pages: 03-aca0.html
- Sentence: $ を満たし、第一成分の集合 $Y_{Z}\defeq\{n:\exists m\,(n,m)\in Z\}$ が $j$ 個以上の元をもつものが存在する」とする。$Z$ の元についての量化子と $Y_{Z}$ の元の個数は、有限集合の符号についての有界な条件なので、$\theta$ は（$\exists Z$ だけを非有界にもつ）$\Sigma^{0}_{1}$ 論理式である。$Z$ は $Y_{Z}$ の各元が $\varphi$ を満たす証拠を一緒に記録したものである。
  - `set:cofinal-map`: NG — Here "非有界" modifies a quantifier in a formula (an unbounded existential), not a subset of an ordinal being unbounded as defined in the card.

## 「の整列順序」 in 01-foundations/05-proof-theory/08-ordinal-analysis
- Default: `set:l-alpha-well-order` → **no candidate fits**
- Pages: 01-epsilon0.html
- Sentence: 2. $o$ は $(\mathrm{OT},\prec)$ から $(\varepsilon_{0},<)$ への順序同型である。とくに $\prec$ は $\mathrm{OT}$ 上の整列順序で、順序型は $\varepsilon_{0}$。
  - `set:l-alpha-well-order`: NG — one short English sentence why

## 「係数」 in 01-foundations/05-proof-theory/08-ordinal-analysis
- Default: `comp:linear-system` → **no candidate fits**
- Pages: 01-epsilon0.html, 05-goodstein.html
- Sentence: - **割り算の一意性**：\ref{pt:cantor-normal-form} の存在（係数が有限であること）と一意性で使った。
  - `comp:linear-system`: NG — Here "係数" refers to coefficients in Cantor normal form (ordinal arithmetic), not the language coefficients in the system of language equations.

## 「全射」 in 01-foundations/05-proof-theory/08-ordinal-analysis
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 01-epsilon0.html, 04-gentzen-wellordering.html
- Sentence: 全射性：$\alpha<\varepsilon_{0}$ についての超限帰納法。$\alpha=0$ なら $o(0)=0$。$\alpha>0$ なら標準形 $\omega^{\alpha_{1}}+\cdots+\omega^{\alpha_{k}}$ をとり、\ref{pt:epsilon0-basic.4} から 
  - `set:injection-surjection`: NG — Here "全射性" (surjectivity) refers to a property being proved by transfinite induction, not a surjective function as defined in the card.

## 「分配律」 in 01-foundations/05-proof-theory/08-ordinal-analysis
- Default: `set:boolean-algebra` → **no candidate fits**
- Pages: 01-epsilon0.html
- Sentence: plication-laws}, \ref{set:ordinal-exponentiation}, \ref{set:ordinal-exponentiation-basic}, \ref{set:ordinal-exponentiation-laws}）。とくに次を断りなく使う：和は右の引数について狭義増加；積の左分配律 $\alpha\cdot(\beta+\gamma)=\alpha\cdot\beta+\alpha\cdot\gamma$；割り算（$\delta>0$ なら $\gamma=\delta\cdot\xi+\eta$, $\eta<\delta$ と一意に書ける）；引き算（$\alpha\le\beta$ なら $
  - `set:boolean-algebra`: NG — This is the left distributive law for ordinal multiplication, not the Boolean-algebra distributive law defined in the card.

## 「割り当て」 in 01-foundations/05-proof-theory/08-ordinal-analysis
- Default: `logic:assignment` → **no candidate fits**
- Pages: 03-gentzen-bound.html, 06-hydra.html
- Sentence: - *ゲンツェンの無矛盾性証明.* ゲンツェン（1936）は、$\PA$ の証明に順序数を割り当て、カットを減らす変換で順序数が減ることを示して、$\mathsf{PRA}$ に $\varepsilon_{0}$ までの（量化子のない論理式についての）超限帰納法を加えた体系で $\mathrm{Con}(\PA)$ を証明した。本ページの方法（ω 規則による無限の導出）は、シュッテらによる後の整理であると言われて
  - `logic:assignment`: NG — Here "割り当て" means assigning ordinals to proofs, not a variable assignment map $v\colon\mathrm{Var}\to M$ in a structure.

## 「単調」 in 01-foundations/05-proof-theory/08-ordinal-analysis
- Default: `comp:monotone-continuous` → **no candidate fits**
- Pages: 01-epsilon0.html, 02-omega-logic.html, 03-gentzen-bound.html, 05-goodstein.html, 06-hydra.html
- Sentence: 左の不等式は和が右の引数について増加することから。右：$\omega^{\alpha_{i}}\le\omega^{\alpha_{1}}$ なので、和は $\omega^{\alpha_{1}}\cdot k$ 以下（和の左の引数についての単調性を $k$ 回使う）で、$\omega^{\alpha_{1}}\cdot k<\omega^{\alpha_{1}}\cdot\omega=\omega^{\alpha_{1}+1}$（積の右の引数についての狭義単調性）。
  - `comp:monotone-continuous`: NG — Here 単調 refers to monotonicity of ordinal addition/multiplication, not the fixed-point definition for functions on sets of strings.

## 「合成」 in 01-foundations/05-proof-theory/08-ordinal-analysis
- Default: `logic:while-program` → **no candidate fits**
- Pages: 02-omega-logic.html, 05-goodstein.html
- Sentence: - **$2^{\gamma}+2^{\gamma}\le2^{\alpha}$**：\ref{pt:omega-cut-elimination} で、二つの前提を簡約で合成した高さを抑えるのに使った（$\gamma<\alpha$ から $\gamma+1\le\alpha$）。
  - `logic:while-program`: NG — Here "合成" means combining two premises in a proof (composition of derivations), not the sequential composition P;Q of while-programs.
  - `set:relation-composition`: NG — Here 合成 means "combine/compose two premises in a proof," not the composition of two relations as defined in the card.
  - `cat:category`: NG — Here "合成" means combining two premises in a proof (a colloquial/compositional use), not the categorical composition operation on morphisms defined in the card.
  - `cat:non-symmetric-operad`: NG — Here "合成" refers to combining two derivation heights in a cut-elimination argument, not the operad composition operation γ defined in the card.

## 「増加列」 in 01-foundations/05-proof-theory/08-ordinal-analysis
- Default: `logic:rm-analysis-defs` → **no candidate fits**
- Pages: 01-epsilon0.html
- Sentence: **1.** $\omega_{0}=1<\omega=\omega_{1}$。$\omega_{n}<\omega_{n+1}$ なら $\omega^{\cdot}$ の狭義単調性から $\omega_{n+1}<\omega_{n+2}$。最大元のない増加列の上限なので極限順序数。
  - `logic:rm-analysis-defs`: NG — Here "増加列" refers to an increasing sequence of ordinals, not a sequence of real numbers as defined in the card.

## 「崩壊関数」 in 01-foundations/05-proof-theory/08-ordinal-analysis
- Default: `set:collapse-function` → **no candidate fits**
- Pages: 02-omega-logic.html
- Sentence: - *より強い体系.* 実数の集合やより強い帰納法を含む体系の順序数解析では、ω 規則に加えて、**崩壊関数**（大きな順序数の情報を可算順序数に圧縮する関数）を使ったカット除去が必要になる（新井、ポーラース）。$\varepsilon_{0}$ を超える順序数表記系が、そこで初めて本質的に使われる。
  - `set:collapse-function`: NG — This "崩壊関数" is a collapsing function in ordinal analysis compressing large ordinals to countable ones, not the Mostowski collapse function on a well-founded class relation.

## 「従う」 in 01-foundations/05-proof-theory/08-ordinal-analysis
- Default: `logic:positional-strategy` → **no candidate fits**
- Pages: 02-omega-logic.html, 03-gentzen-bound.html
- Sentence: ,A_{i},G$ で、同じ規則（主論理式は $\Gamma^{-},A_{i}$ に属する。カットなら同じカット論理式）を適用して $\vdash^{\alpha}_{c}\Gamma^{-},A_{i}$。$G=F$ となる前提があれば、その結果は $\Gamma^{-},A_{i}$ そのもので、単調性から直ちに従う。
  - `logic:positional-strategy`: NG — Here "従う" means "follows logically (from monotonicity)," not the game-play sense of following a positional strategy.

## 「急増加関数」 in 01-foundations/05-proof-theory/08-ordinal-analysis
- Default: `pt:hardy-functions` → **no candidate fits**
- Pages: 05-goodstein.html
- Sentence: $\PA$ の強さは、超限帰納法（\ref{pt:pa-proof-theoretic-ordinal}）だけでなく、「$\PA$ で全域性が証明できる計算可能関数がどれだけ速く増加しうるか」でも測れる。本ページでは、$\varepsilon_{0}$ 未満の順序数で添字付けられた急増加関数の族（**ハーディ関数** $H_{\alpha}$、\ref{pt:hardy-functions}）を定義し、その基本性質を示す。次に、自然数を「遺伝的な $k$ 進表示」で書いて底を一つずつ上げながら $1$ を引いていく**グッドスタイン列**を定義し、それが必ず $0$ に達することを、$\varepsilo
  - `pt:hardy-functions`: NG — 「急増加関数」 is a different hierarchy (the fast-growing hierarchy \(F_{\alpha}\)), whereas the card defines the Hardy hierarchy \(H_{\alpha}\), which is a distinct (slower-growing) family.

## 「証明可能」 in 01-foundations/05-proof-theory/08-ordinal-analysis
- Default: `logic:derivability` → **fits: `set:formal-deduction`**
- Pages: 03-gentzen-bound.html, 05-goodstein.html, 06-hydra.html
- Sentence: - *証明可能な再帰関数.* 同じ方法で、$\PA$ で全域性が証明できる関数が、$\varepsilon_{0}$ 未満の順序数で添字付けた急増加階層（ハーディ階層など）の関数で抑えられることが示せる（新井の本の §8.4.3）。
  - `logic:derivability`: NG — 証明可能 here means provable in PA, i.e. derivability (⊢) as defined, but the term is used as an adjective for a recursive function's totality being provable, which is the same derivability notion applied to a formula, so it matches.
  - `set:formal-deduction`: OK

## 「部分体」 in 01-foundations/05-proof-theory/08-ordinal-analysis
- Default: `fld:extension` → **no candidate fits**
- Pages: 04-gentzen-wellordering.html
- Sentence: 2. **帰納法の強さとの対応.** 同様の解析を部分体系に適用すると、$\Sigma_{n}$ 論理式の帰納法だけを許す体系 $\mathrm{I}\Sigma_{n}$（$n\ge1$）の証明論的順序数は $\omega_{n+1}$ であることが知られている（本サイトでは示していない）。
  - `fld:extension`: NG — Here "部分体系" means a subsystem of a formal theory, not a subfield of a field.

## 「順序数」 in 01-foundations/05-proof-theory/08-ordinal-analysis
- Default: `set:ordinal` → **no candidate fits**
- Pages: 01-epsilon0.html, 02-omega-logic.html, 03-gentzen-bound.html, 04-gentzen-wellordering.html, 05-goodstein.html, 06-hydra.html
- Sentence: **順序数解析**は、算術の体系 $T$ が「どれだけ長い整列順序について超限帰納法を証明できるか」を順序数で測る。ペアノ算術 $\PA$ の場合、その限界は**$\varepsilon_{0}$**（$\omega,\omega^{\omega},\omega^{\omega^{\omega}},\dots$ の上限）である（
  - `set:ordinal`: NG — 「順序数解析」は複合語であり、文中の「順序数」は解析の対象・尺度として用いられているだけで、定義4.3の順序数そのものを指しているわけではない。

## 「IP」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `comp:interactive-proof` → **no candidate fits**
- Pages: 07-identity-types.html, 08-univalence.html
- Sentence: 「$a=_{A}a$ の元はすべて $\mathrm{refl}_{a}$ に等しい」（**恒等の証明の一意性**、UIP。同値な形として公理 K）は、本ページの規則からは証明できない。型を亜群（対象を点、同型射を道）と解釈するモデルで UIP が偽になることによる：M. Hofmann and T. Streicher, The groupoid interpretation of type theory（*Twenty-Five Ye
  - `comp:interactive-proof`: NG — Here "IP" is not the complexity class IP but likely "identity proof" (UIP), unrelated to the interactive proof definition.

## 「シーケント」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `pt:lk` → **no candidate fits**
- Pages: 01-simply-typed.html
- Sentence: は項の上では β 簡約 $(\lambda x.M)N\to_{\beta}M[N/x]$ そのものである。したがって、正規形の項は回り道のない導出（**正規な導出**）に対応する。次の強正規化定理は、どんな導出も、回り道の除去をどの順序で行っても有限回で正規な導出に至ることを示す。これは自然演繹の**正規化定理**（シーケント計算のカット除去 \ref{pt:page-cut-elimination} に当たる）の、含意の部分の証明になっている。
  - `pt:lk`: NG — In the sentence, "シーケント" refers to a sequent calculus derivation/proof, not the definition of a sequent as a pair of finite multisets of formulas.
  - `pt:g-omega`: NG — Here "シーケント" refers to sequent calculus derivations in general, not the specific finite set of closed formulas defined in the card.

## 「ホモトピー」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `at:homotopy` → **no candidate fits**
- Pages: 01-simply-typed.html, 05-lambek.html, 06-dependent-types.html
- Sentence: - *ホモトピー型理論.* 依存型理論の型を空間、項を点、恒等型を道とみなす解釈がある（\ref{logic:page-identity-types}, \ref{logic:page-hott}）。
  - `at:homotopy`: NG — Here "ホモトピー" modifies "型理論" (homotopy type theory), naming a field/theory rather than denoting a continuous map H as defined in the card.
  - `logic:homotopy-funext`: NG — In the sentence, "ホモトピー" is part of the compound term "ホモトピー型理論" (homotopy type theory), not the homotopy relation $f\sim g$ defined in the card.

## 「不動点」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `pt:fixed-point` → **no candidate fits**
- Pages: 01-simply-typed.html
- Sentence: - 強正規化定理は、型を付けた体系では「すべての計算が止まる」ことを保証する。その代わり、型の付く項で定義できる関数は限られ（\ref{logic:page-lambda-definability} の補足）、単純型付きラムダ計算はチューリング完全でない。不動点結合子 $Y$ には型が付かない。
  - `pt:fixed-point`: NG — Here "不動点" refers to a fixed-point combinator in lambda calculus, not the provability-logic fixed point of a modal formula.

## 「両立」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `set:compatible` → **no candidate fits**
- Pages: 04-ccc-semantics.html, 05-lambek.html, 06-dependent-types.html, 08-univalence.html
- Sentence: 3. （両立性）各構成子と両立する：$M=M'$, $N=N'$ から $\langle M,N\rangle=\langle M',N'\rangle$, $\pi_{i}M=\pi_{i}M'$, $MN=M'N'$。$\Gamma,x{:}A\vdash M=M':B$ から $\Gamma\vdash\lambda x{:
  - `set:compatible`: NG — Here "両立する" means compatible/consistent in a type-theoretic sense, not the poset compatibility relation defined in the card.

## 「代入」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `logic:substitution` → **fits: `logic:lambda-substitution`**
- Pages: 01-simply-typed.html, 02-system-t.html, 03-system-f.html, 04-ccc-semantics.html, 05-lambek.html, 06-dependent-types.html, 07-identity-types.html
- Sentence: - ラムダ項、自由変数、代入、代入の補題、$\to_{\beta}$, $\twoheadrightarrow_{\beta}$、正規形は \ref{logic:page-lambda-calculus} のとおり。
  - `logic:substitution`: NG — This "代入" refers to substitution in lambda terms, not the first-order logic substitution on terms and formulas defined in the card.
  - `logic:modal-substitution`: NG — This "代入" refers to substitution in lambda calculus, not the modal-logic substitution map σ: PV → MForm defined in the card.
  - `logic:mu-substitution`: NG — This sentence refers to substitution in lambda calculus, not the capture-avoiding substitution for modal μ-formulas defined in the card.
  - `logic:lambda-substitution`: OK

## 「全射」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 05-lambek.html
- Sentence: - 圏同値と、その「充満忠実かつ本質的全射」による特徴づけは \ref{cat:equivalence-of-categories}, \ref{cat:equivalence-characterization}、充満・忠実は \ref{cat:full-faithful} のとおり。
  - `set:injection-surjection`: NG — Here "本質的全射" (essentially surjective) refers to essential surjectivity of a functor on objects up to isomorphism, not the surjectivity of a function onto its codomain as defined in the card.

## 「割り当て」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `logic:assignment` → **no candidate fits**
- Pages: 01-simply-typed.html, 03-system-f.html, 04-ccc-semantics.html
- Sentence: 2. $\Delta\vdash A$ なら、$\Delta=\{B_{1},\dots,B_{k}\}$ の各 $B_{i}$ に異なる変数 $x_{i}$ を割り当てた文脈 $\Gamma$ と、項 $M$ で $\Gamma\vdash M:A$ となるものがある。
  - `logic:assignment`: NG — Here "割り当てる" means assigning distinct variables to formulas (a mapping from formulas to variables), not the semantic valuation map $v\colon\mathrm{Var}\to M$ from the definition card.

## 「半順序」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `set:total-order` → **no candidate fits**
- Pages: 05-lambek.html
- Sentence: {Cl}(T)$ で「$A$ から $B$ への射があるか」だけを見ると、$\wedge,\to,\top$ だけの直観主義命題論理（基本型を命題変数とみる）の導出可能性の前順序になる。これを同値な論理式で割ったものは、デカルト閉な前順序、すなわち $\wedge$, $\Rightarrow$, $\top$ をもつ半順序である（例：論理式の圏、\ref{cat:cartesian-closed} の例 4）。構文圏は、この「導けるかどうか」の情報に「どう導くか（証明）」の情報を加えたものである。
  - `set:total-order`: NG — Here "半順序" refers to a partial order in the sense of a preorder quotiented by equivalence (a poset), which is the reflexive partial order, not the strict (非反射律) partial order defined in the card.
  - `set:forcing-poset`: NG — In the sentence, "半順序" refers to a partially ordered set (poset) obtained by quotienting a preorder, which is the standard order-theoretic notion, not the forcing-specific definition of a preorder (reflexive and transitive relation on a nonempty set) given in the card.

## 「原始再帰関数」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `comp:primitive-recursive` → **no candidate fits**
- Pages: 02-system-t.html, 03-system-f.html
- Sentence: は、これに自然数の型 $\mathrm{N}$ と、すべての型で使える**原始再帰の演算子**（再帰子）$\mathrm{R}$ を加えた体系である。本ページでは、T の項も強正規化可能であること（\ref{logic:t-strong-normalization}）を、テイトの還元可能性の方法を拡張して示す。T では原始再帰関数（\ref{logic:t-primitive-recursive}）だけでなく、高い型の再帰を使ってアッカーマン関数（\ref{logic:t-ackermann}）も表せる。一方、T で表せる関数は計算可能な全域関数の真部分集合である（\ref{logic:t-not-all}）。T で表せる関数は、ちょうどペアノ
  - `comp:primitive-recursive`: NG — This is about a primitive recursion operator/recursor in a typed system, not the class of primitive recursive functions defined by the card.

## 「反射律」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `set:forcing-poset` → **no candidate fits**
- Pages: 04-ccc-semantics.html, 05-lambek.html, 07-identity-types.html
- Sentence: 2. （同値関係）反射律・対称律・推移律。
  - `set:forcing-poset`: NG — This is the reflexivity axiom for equivalence relations, not the partial-order reflexivity defined in the card.

## 「反復」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 02-system-t.html, 03-system-f.html
- Sentence: **反復.** $\mathrm{It}\defeq\lambda f\,n.\,\mathrm{R}\,(f\,\underline{1})\,(\lambda a\,b.\,f\,a)\,n:(\mathrm{N}\to\mathrm{N})\to\mathrm{N}\to\mathrm{N}$（型 $\mathrm{N}
  - `logic:pdl-syntax`: NG — This “反復” is a lambda-calculus iterator (Church-style iteration), not the PDL program iteration operator α* defined in the card.

## 「合成」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `logic:while-program` → **no candidate fits**
- Pages: 02-system-t.html, 03-system-f.html, 04-ccc-semantics.html, 05-lambek.html, 06-dependent-types.html, 07-identity-types.html, 08-univalence.html
- Sentence: 原始再帰関数の定義（\ref{comp:primitive-recursive}）についての帰納法。ゼロ関数 $\lambda\vec{x}.0$、後者 $\mathrm{S}$、射影 $\lambda\vec{x}.x_{i}$ は明らか。合成 $f(\vec{x})=g(h_{1}(\vec{x}),\dots,h_{m}(\vec{x}))$ は $\lambda\vec{x}.G(H_{1}\vec{x})\cdots(H_{m}\vec{x})$（各 $H_{i}\vec{x}$ はまず数項に簡約し、それから $G$ を簡約する）。原始再帰 $h(\
  - `logic:while-program`: NG — Here "合成" refers to composition of primitive recursive functions, not the sequential composition P;Q of while programs.
  - `set:relation-composition`: NG — Here "合成" refers to composition of primitive recursive functions, not the set-theoretic composition of relations defined in the card.
  - `cat:category`: NG — Here "合成" refers to composition of primitive recursive functions, not composition of morphisms in a category.
  - `cat:non-symmetric-operad`: NG — Here "合成" refers to composition of primitive recursive functions, not the operad composition operation γ defined in the card.

## 「命題論理」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `logic:prop-formula` → **no candidate fits**
- Pages: 03-system-f.html, 05-lambek.html
- Sentence: に、型変数についての全称量化 $\forall\alpha.A$ を加えると、「任意の型 $\alpha$ について働く」**多相的な**関数に型が付けられるようになる。これが**System F**（ジラール 1972、レイノルズ 1974）である。カリー＝ハワード対応のもとで、System F は直観主義の**二階命題論理**（命題変数についての量化をもつ論理）に対応する。本ページでは、System F の型の付く項が強正規化可能であること（\ref{logic:f-strong-normalization}）を、ジラールの**還元可能性候補**の方法で示す。この証明は、型 $\forall\alpha.A$ の解釈を「すべての候補にわ
  - `logic:prop-formula`: NG — the sentence speaks of second-order propositional logic with quantification over propositional variables, whereas the card defines only quantifier-free propositional formulas.

## 「命題論理の論理式」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `logic:prop-formula` → **no candidate fits**
- Pages: 03-system-f.html
- Sentence: - *二階命題論理.* カリー＝ハワード対応のもとで、System F の型は直観主義の二階命題論理の論理式で、$\forall\alpha$ は命題変数についての量化である。$A\wedge B$, $A\vee B$, $\bot$, $\exists\alpha.A$ はそれぞれ $\forall\alpha.(A\to B\to\alpha)\to\alpha$, $\forall\alpha.(A\to\alpha
  - `logic:prop-formula`: NG — It refers to second-order propositional logic formulas with quantifiers over propositional variables, whereas the card defines only quantifier-free first-order propositional formulas built from PV, ⊥, and →.

## 「圏論的意味論」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `logic:ccc-interpretation` → **no candidate fits**
- Pages: 05-lambek.html
- Sentence: （二重否定除去）を加えた場合、デカルト閉圏で $\neg A\defeq(A\to0)$ と始対象 $0$ を使って二重否定除去 $(\neg\neg A)\to A$ を自然に実現すると、圏は前順序（ブール代数）に潰れてしまうことが知られている（ジョワイヤルの補題とされる。詳細は範囲外）。このため、古典論理の証明の「圏論的意味論」には別の工夫が要る。
  - `logic:ccc-interpretation`: NG — the card defines the interpretation of terms in a structure (a term-model semantics), not the general categorical semantics of proofs/logics referred to by the term.

## 「型付け」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `logic:typing-rules` → **no candidate fits**
- Pages: 03-system-f.html, 04-ccc-semantics.html
- Sentence: 2. ($\forall$E) の場合に、$B$ の解釈 $[\![B]\!]_{\rho}$ を共通部分の一つの成分として取り出した。$B$ は $\forall\alpha.A$ より複雑な型でもよく（例：$\lambda x.xx$ の型付け）、型の大きさについての帰納法では扱えない。これが単純型の場合（型についての帰納法で $\mathrm{Red}_{A}$ を定義）と本質的に違う点である。
  - `logic:typing-rules`: NG — Here "型付け" refers to assigning a type to a specific untyped term (e.g., typing of $\lambda x.xx$), not to the typing judgment/rule system defined in the card.

## 「外延的」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `set:extensional-relation` → **no candidate fits**
- Pages: 05-lambek.html, 07-identity-types.html
- Sentence: | 証明の外延的な同一視 | η 等式 | 普遍性の一意性の部分 |
  - `set:extensional-relation`: NG — This use of 外延的 refers to extensional identification in proofs (η-equality), not the set-theoretic extensional relation on a class defined in the card.

## 「従う」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `logic:positional-strategy` → **no candidate fits**
- Pages: 02-system-t.html, 03-system-f.html, 04-ccc-semantics.html, 06-dependent-types.html
- Sentence: - **$\mathrm{Red}_{\mathrm{N}}=\mathrm{SN}$**：再帰子の引数 $t$ について強正規化性だけを使えばよいことにした。これにより $\mathrm{S}$ の還元可能性も直ちに従う。
  - `logic:positional-strategy`: NG — In the sentence 従う means "follows (as a consequence)", not a play following a positional strategy.

## 「推移閉包」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `set:transitive-closure` → **no candidate fits**
- Pages: 02-system-t.html
- Sentence: を基とし、項の文脈について閉じた一段の簡約を $\to$、その反射推移閉包を $\twoheadrightarrow$ と書く。
  - `set:transitive-closure`: NG — Here "推移閉包" refers to the reflexive transitive closure of a reduction relation, not the transitive closure of a set as defined in the card.

## 「普遍性」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 04-ccc-semantics.html, 05-lambek.html
- Sentence: β 等式は「組を作ってから取り出す」「関数を作ってから適用する」という回り道を消す規則で、証明の正規化（\ref{logic:page-curry-howard}）に当たる。η 等式は「組はその成分で決まる」「関数はその値で決まる」という**外延性**で、圏論の側では普遍性の「一意性」の部分に当たる（\ref{logic:ccc-soundness} の証明で、η 等式の健全性は一意性からだけ出てくる）。代入の規則 4 は、弱化（$N_{i}$ を変数にとる）と、等しいものに等しいものを代入してよいことを一度に表す。
  - `cat:universal-arrow`: NG — 普遍性 is used as a general property (uniqueness part), not specifically the universal morphism defined in the card.

## 「標準的な構成」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `set:number-systems-construction` → **no candidate fits**
- Pages: 05-lambek.html
- Sentence: > 資料フォルダに参考書がなく、標準的な構成（J. Lambek and P. J. Scott, *Introduction to Higher Order Categorical Logic*, Cambridge University Press, 1986 の第 I 部の内容に当たるもの）を、前ページの記法に合わせて本サイトで組み立てた。
  - `set:number-systems-construction`: NG — Here "標準的な構成" refers to a reconstruction of material from Lambek–Scott's book, not the standard construction of number systems defined in the card.

## 「決定可能」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `comp:recognizable-decidable` → **no candidate fits**
- Pages: 07-identity-types.html, 08-univalence.html
- Sentence: **前提を変えると.** 恒等型に**反映規則**（$p:a=b$ から $a\equiv b$ を導く）を加えた**外延的型理論**では、UIP と関数外延性が成り立つが、型の検査（$a:A$ かどうかの判定）が決定不能になることが知られている。本ページの**内包的**な恒等型は、型検査の決定可能性を保つ代わりに、等しさが豊かな構造（高次の亜群）をもつ。
  - `comp:recognizable-decidable`: NG — Here "決定可能" is used as the property of type checking being decidable, not the computability-theoretic notion of a language being decidable by a Turing machine as defined in the card.

## 「無限集合」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `set:finite-set` → **no candidate fits**
- Pages: 05-lambek.html
- Sentence: $\to$ だけの純粋な単純型付きラムダ計算（基本型一つ）について、βη 等式は、基本型を無限集合と解釈した $\mathbf{Set}$ での解釈（集合論的な関数の全体の階層）一つだけに対しても完全である。H. Friedman, Equality between functionals（*Logic Colloquium*, Lecture Notes in Mathematics 453, Springer,
  - `set:finite-set`: NG — It refers to an infinite set in the semantic model, not the defined notion of a set that is not finite (though related, the sentence uses it as a basic type interpretation, not the cardinality definition).

## 「爆発律」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `logic:nj` → **no candidate fits**
- Pages: 06-dependent-types.html
- Sentence: 1. **爆発律** $\neg P\to(P\to Q)$：$\lambda n.\,\lambda p.\,\mathrm{ind}_{\mathsf{0}}(n\,p)$（族は定数の $Q$）。
  - `logic:nj`: NG — 爆発律 (ex falso / explosion) is not among the rules defining NJ in the card; the card's NJ lacks an explosion rule (⊥E only gives φ from ⊥, not the general ¬P→(P→Q) as a named principle), so the term is not the notion defined there.

## 「直観主義命題論理」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `logic:ipc-formula` → **no candidate fits**
- Pages: 01-simply-typed.html, 04-ccc-semantics.html, 05-lambek.html
- Sentence: 型なしラムダ計算（\ref{logic:page-lambda-calculus}）の項に**型**を付けると、型 $A\to B$ の項は「$A$ を受け取り $B$ を返す関数」になる。**単純型付きラムダ計算**（\ref{logic:typing-rules}）の型付け規則は、直観主義命題論理の含意の自然演繹（\ref{logic:nj-implication}）の規則と一字一句同じ形をしている。これが**カリー＝ハワード対応**（\ref{logic:curry-howard}）で、型は命題、項は証明、β 簡約は証明の**正規化**（回り道の除去）に対応する。本ページでは、簡約で型が保たれること（\ref
  - `logic:ipc-formula`: NG — the card defines the formulas of intuitionistic propositional logic, not the logic itself as a whole.

## 「真のクラス」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `set:class` → **no candidate fits**
- Pages: 06-dependent-types.html
- Sentence: - 型 $\mathsf{0}$, $\mathsf{1}$, $\mathsf{2}$ は空型・単位型・二元型。太字は真のクラスと圏に使うので（START の規則）、型にはサンセリフ体を使う。
  - `set:class`: NG — Here "真のクラス" refers to proper classes in the set-theoretic sense, but the sentence uses it only as a typographic convention (boldface for proper classes and categories), not as the defined notion itself.

## 「要求」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `logic:ctl-successor-def` → **no candidate fits**
- Pages: 03-system-f.html, 04-ccc-semantics.html, 05-lambek.html
- Sentence: n\,m:(\beta\to\beta)\to\beta\to\beta$。($\to$I) と ($\forall$I) で $\lambda m\,n.\,n\,m:\mathrm{Nat}\to\mathrm{Nat}\to\mathrm{Nat}$。（単純型では $m$ と $n$ の型が異なる型変数の具体化を要求するので、同じ $\mathrm{Nat}$ 型では型が付かない。多相性がここで本質的に使われている。）
  - `logic:ctl-successor-def`: NG — Here「要求する」means "requires/demands" in general, not the technical notion of a "request" (要求) defined in the card.

## 「証人」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `comp:mr-witness` → **no candidate fits**
- Pages: 06-dependent-types.html
- Sentence: この対応は、ブラウワー–ハイティング–コルモゴロフ解釈（$\forall x\,P(x)$ の証明は各 $x$ に $P(x)$ の証明を与える手続き、$\exists x\,P(x)$ の証明は証人 $a$ と $P(a)$ の証明の組）を、そのまま型の規則にしたものである。$\exists$ の証明が証人を**取り出せる形で**含むことが、次の定理の鍵になる。
  - `comp:mr-witness`: NG — Here "証人" means a witness for an existential quantifier, not the Miller–Rabin compositeness witness defined in the card.

## 「証明書」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `comp:class-np` → **no candidate fits**
- Pages: 02-system-t.html
- Sentence: **高い視点から：型は停止性の証明書.** T の項の型は、その計算が停止することの証明書になっている：型 $\mathrm{N}\to\mathrm{N}$ をもつことは、それだけで全域関数を表すことを保証する。その代償として、T は計算可能な全域関数のすべては表せない（\ref{logic:t-not-all}）。これは、停止性を保証する任意の「安全
  - `comp:class-np`: NG — Here "証明書" means a certificate of termination in type theory, not the NP witness string for a verifier as defined in the card.

## 「論理式」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `pt:omega-language` → **fits: `logic:pdl-syntax`**
- Pages: 01-simply-typed.html, 02-system-t.html, 04-ccc-semantics.html, 05-lambek.html
- Sentence: 命題変数と $\to$ だけからなる論理式について、判断 $\Delta\vdash A$（$\Delta$ は論理式の有限集合）を次の規則で導かれるものとする：$A\in\Delta$ なら $\Delta\vdash A$；$\Delta,A\vdash B$ なら $\Delta\vdash A\to B$（$\to$ 導入）；$\Delta\vdash
  - `pt:omega-language`: NG — This card defines formulas over a language with function/relation symbols and $\wedge,\vee,\forall,\exists$, whereas the sentence's formulas are built from propositional variables and $\to$ (propositional logic), a different notion.
  - `logic:formula`: NG — This is about propositional logic formulas built from propositional variables and →, not first-order L-formulas with terms, predicates, quantifiers, and ⊥ as defined in the card.
  - `logic:pdl-syntax`: OK

## 「辞書式順序」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `set:well-order-sum-product-def` → **no candidate fits**
- Pages: 02-system-t.html
- Sentence: の辞書式順序（自然数の対なので整礎）による帰納法で示す。$\mathrm{R}\,U\,V\,t$ は中立（引数を三つもつ）なので、(CR3) により、一段の簡約先がすべて $\mathrm{Red}_{A}$ に属することを示せばよい。簡約先は次のどれかである。
  - `set:well-order-sum-product-def`: NG — “辞書式順序” here is the dictionary order on pairs of natural numbers, not the order product $\mathbf{A}\otimes\mathbf{B}$ of well-ordered sets defined in the card.
  - `top:double-arrow`: NG — It refers to the lexicographic order on pairs of natural numbers, not the specific lexicographic order on $[0,1]\times\{0,1\}$ used to define the double arrow space.

## 「逆の道」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `at:path` → **no candidate fits**
- Pages: 08-univalence.html
- Sentence: ite}」で、$p\equiv\mathrm{refl}_{x}$ のとき右辺は $u^{-1}\cdot u$（$u\defeq f_{x,x}\mathrm{refl}_{x}$）で、群の法則（\ref{logic:groupoid-laws}）$u^{-1}\cdot u=\mathrm{refl}_{x}$ の逆の道が $C(x,x,\mathrm{refl}_{x})$ の元になる。
  - `at:path`: NG — Here "逆の道" refers to the inverse path in the groupoid sense (the reverse of a path/morphism), which matches the card's definition of the reverse path $\bar\gamma(s)=\gamma(1-s)$.

## 「選択」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `logic:pdl-syntax` → **no candidate fits**
- Pages: 06-dependent-types.html
- Sentence: **前提を変えると.** 存在量化 $\exists$ を Σ 型でなく、「証明が高々一つしかないように潰した型」（命題的切り詰め $\Vert\sum_{x:A}P(x)\Vert$。ホモトピー型理論で導入される）で読むと、上の形の選択原理は一般には証明できず、集合論の選択公理に近い強い原理になる。その場合、選択原理と排中律の関係はディアコネスク–グッドマン–マイヒルの定理（選択公理から排中律が従う。トポスでの形）の類似として知られている（詳細は範囲外）。
  - `logic:pdl-syntax`: NG — Here "選択" refers to the axiom of choice (選択公理), not the PDL program operator "choice" (α∪β).

## 「還元」 in 01-foundations/05-proof-theory/09-type-theory
- Default: `comp:mapping-reducible` → **no candidate fits**
- Pages: 01-simply-typed.html, 02-system-t.html, 03-system-f.html
- Sentence: > 資料フォルダに参考書がなく、標準的な定義と証明（テイトの還元可能性の方法、ジラールの『Proofs and Types』で知られている形）を本サイトで組み立てた。
  - `comp:mapping-reducible`: NG — This "還元" refers to Tate's method of reduction in number theory, not the computability-theoretic mapping reduction defined in the card.

## 「下界」 in 01-foundations/06-category-theory/01-basics
- Default: `calc:supremum` → **no candidate fits**
- Pages: 06-limits.html, 12-special-aft.html
- Sentence: 4. **半順序.** 積は下限（最大下界）、余積は上限。極限は「錐の頂点のうち最大のもの」で、存在するとは限らない。
  - `calc:supremum`: NG — This is about limits and colimits in a partially ordered set (category theory), not the lower bound of a subset of a totally ordered field as defined in the card.

## 「下限」 in 01-foundations/06-category-theory/01-basics
- Default: `calc:supremum` → **no candidate fits**
- Pages: 06-limits.html
- Sentence: 4. **半順序.** 積は下限（最大下界）、余積は上限。極限は「錐の頂点のうち最大のもの」で、存在するとは限らない。
  - `calc:supremum`: NG — This "下限" refers to the greatest lower bound in a partially ordered set (category-theoretic product), not the infimum of a subset of a totally ordered field as defined in the card.

## 「反射的」 in 01-foundations/06-category-theory/01-basics
- Default: `cat:reflective-subcategory` → **fits: `logic:relation-properties`**
- Pages: 01-categories.html, 08-equivalence.html, 11-adjoints-topology.html
- Sentence: 6. **前順序.** 集合 $P$ 上の反射的かつ推移的な関係 $\le$（前順序）に対し、$\operatorname{Ob}=P$, $\operatorname{Mor}=\{(p,q):p\le q\}$, $\operatorname{dom}(p,q)=p$, $\operatorname{cod}(p,q)=q$, $(q,r)\circ(p,q)=
  - `cat:reflective-subcategory`: NG — In the sentence "反射的" describes a reflexive relation on a set, not a reflective subcategory with a left adjoint inclusion functor.
  - `logic:relation-properties`: OK

## 「普遍性」 in 01-foundations/06-category-theory/01-basics
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 03-constructions.html, 04-comma-free-quotient.html, 05-yoneda.html, 06-limits.html, 07-adjunctions.html, 08-equivalence.html, 11-adjoints-topology.html, 12-special-aft.html
- Sentence: **類似の定理.** 積圏の普遍性（\ref{cat:product-category-universal}）は、集合・群・位相空間の直積の普遍性と同じ形をしている。これらを統一するのが、圏の中の積（\ref{cat:product}）である。$\mathbf{Cat}$ の中の積がちょうど積圏である。
  - `cat:universal-arrow`: NG — 「普遍性」は普遍的性質（universal property）を指す語で、カードが定義する「普遍射」という特定の組 $(r,u)$ とは異なる概念である。

## 「最小元」 in 01-foundations/06-category-theory/01-basics
- Default: `set:well-order` → **no candidate fits**
- Pages: 02-functors.html, 11-adjoints-topology.html
- Sentence: 4. 半順序では、始対象は最小元、終対象は最大元。
  - `set:well-order`: NG — In a partial order, a least element need not be an $R$-least element of a well-order, and the card defines "$R$-最小元" only within a total order.

## 「直積」 in 01-foundations/06-category-theory/01-basics
- Default: `mod:direct-sum` → **fits: `set:cartesian-product`**
- Pages: 01-categories.html, 03-constructions.html, 05-yoneda.html, 06-limits.html, 07-adjunctions.html, 09-adjoints-limits.html, 11-adjoints-topology.html, 12-special-aft.html
- Sentence: 条件 1〜5 は、集合論の基本的な操作（対、直積、冪集合、和集合、無限集合、置換による像）で $\mathcal{U}$ の外に出ないことを言っている。したがって、実数・群・位相空間など通常の構成はすべて $\mathcal{U}$ の中で行え、$\mathcal{U}$ を「ふつうの数学の世界」とみなせる。$\mathcal{U}$ 自身は小さくない（下の \re
  - `mod:direct-sum`: NG — This use of 直積 refers to the Cartesian product of sets in set theory, not the direct product of a family of left R-modules as defined in the card.
  - `set:cartesian-product`: OK

## 「集合の存在」 in 01-foundations/06-category-theory/01-basics
- Default: `set:ax-set-existence` → **no candidate fits**
- Pages: 10-adjoint-functor-theorem.html
- Sentence: \ref{cat:initial-object-existence} の証明の Step 4 で、$w$ からすべての対象への射があること（弱始性）をどこで使ったか。また、弱始集合の存在は始対象の存在のために必要であることを示せ。
  - `set:ax-set-existence`: NG — In the sentence, 集合の存在 refers to the existence of a weak initial set (弱始集合の存在), not the axiom asserting that some set exists.

## 「テンソル積」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `ha:tensor-product` → **no candidate fits**
- Pages: 11-symmetric-monoidal-closed.html
- Sentence: 対称モノイダル閉圏（閉圏。\ref{cat:closed-category}）は、「テンソル積 $\otimes$」と「準同型の空間 $[b,c]$」が随伴 $\mathbf{V}(a\otimes b,c)\cong\mathbf{V}(a,[b,c])$ で結ばれた圏で、集合と写像・加群とテンソル積・ベクトル空間の線形代数に共通する構造を抜き出したものである。このページでは、内部 hom の計算規則（カリー
  - `ha:tensor-product`: NG — This is the tensor product in a symmetric monoidal closed category, a general categorical notion, not the specific tensor product of modules over a ring defined by the card.
  - `rep:constructions`: NG — This is the general tensor product in a symmetric monoidal closed category, not the specific representation-theoretic tensor product defined on group representations in the card.

## 「トレース」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `lin:eigen-def` → **fits: `cat:trace-dimension`**
- Pages: 05-closed-categories.html
- Sentence: **続き.** 内部 hom の計算規則（カリー化・余極限の保存）、双対対象・コンパクト閉圏・トレースは \ref{cat:page-symmetric-monoidal-closed} で扱う。
  - `lin:eigen-def`: NG — Here "トレース" refers to the trace in a compact closed/symmetric monoidal category, not the matrix trace defined in the card.
  - `pt:trace`: NG — This "トレース" refers to the trace in compact closed categories, not the trace of a closed modal formula defined by structural recursion on $B$.
  - `cat:trace-dimension`: OK

## 「両側加群」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `mod:module` → **no candidate fits**
- Pages: 02-monoids-actions.html, 11-symmetric-monoidal-closed.html
- Sentence: **一般化.** モノイドの右作用と、両側の作用（両側加群）も同様に定義できる。余等化子があれば、右作用 $b\square c\to b$ と左作用 $c\square a\to a$ から「テンソル積」$b\square_{c}a$ を二つの射 $b\square(c\square a)\rightrightarrows b\square a$ の余等化子として作れ、環上
  - `mod:module`: NG — 両側加群 is a bimodule (left and right actions), which is not the same as the left R-module defined in the card.

## 「二項演算」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `grp:binary-operation` → **no candidate fits**
- Pages: 01-monoidal.html
- Sentence: 対象が一つの厳密モノイダル圏は、集合（射の全体）と二つの二項演算 $\circ$, $\square$ で、交換法則 $(f'\square g')\circ(f\square g)=(f'\circ f)\square(g'\circ g)$ を満たし共通の単位元 $1_{e}$ をもつものと同じであることを確かめ、このとき $\circ=\square$ で、可換であることを示
  - `grp:binary-operation`: NG — In the sentence "二項演算" refers to two binary operations on the set of morphisms of a strict monoidal category, which matches the card's definition of a map $X\times X\to X$.

## 「充満」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `cat:full-faithful` → **no candidate fits**
- Pages: 06-monoidal-functors.html
- Sentence:  2 は「強モノイダル関手で厳密モノイダル圏と同値なら、結合のコヒーレンスが成り立つ」ことを示している。ただし本ページの証明はコヒーレンスを使って厳密化したので、これを組み合わせてコヒーレンスを「証明」すると循環論法になる。循環しない道として、問題 \ref{cat:prob-mf-cayley} の $T$ の像（の充満化）を使って、コヒーレンスを使わずに厳密化する方法が Mac Lane の演習 3 に挙げられている（ここでは確かめていない）。
  - `cat:full-faithful`: NG — Here "充満化" (fullification) refers to the full subcategory/closure construction, not the property of a functor being full as defined in the card.

## 「全射」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 01-monoidal.html, 03-simplicial.html, 04-cartesian-closed.html, 06-monoidal-functors.html, 07-symmetric-coherence.html, 08-braids.html
- Sentence: f,g,h\colon D\to D$ で $f\times(g\times h)=(f\times g)\times h$。両辺に第一射影 $p_{1}\colon D\times D=D\to D$ を合成すると $f\circ p_{1}=(f\times g)\circ p_{1}$、$p_{1}$ はエピ射（全射）なので $f=f\times g$。第二射影で同様に $f\times g=g$。よって任意の $f,g$ が等しくなり、矛盾。（Mac Lane は J. Isbell によるとしている。）
  - `set:injection-surjection`: NG — Here "全射" is used as a parenthetical gloss for "エピ射" (epimorphism), which is a categorical notion not the same as the set-theoretic surjectivity defined in the card.

## 「共通部分」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `cat:subobject` → **fits: `set:intersection-difference`**
- Pages: 05-closed-categories.html
- Sentence: **1.** 条件「すべての $C$ で $A\cap C$ が閉」は、有限個の和と任意個の共通部分で保たれる（$\varnothing$ と全体も満たす）。$A$ が $Y$ で閉なら、$C$ はコンパクトなので閉で、$A\cap C$ は閉。$KY$ の位相は細かいので、ハウスドルフ性は受け継がれ、$\varepsilon_{Y}$ は連続。
  - `cat:subobject`: NG — Here "共通部分" means the set-theoretic intersection of subsets, not the categorical pullback of a family of subobjects defined in the card.
  - `set:intersection-difference`: OK

## 「剰余類」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `grp:coset` → **no candidate fits**
- Pages: 07-symmetric-coherence.html
- Sentence: Lane, *Categories for the Working Mathematician* 第 XI 章 §1。Mac Lane は (i) 対称群の表示を「知られている」として引用し、(ii)「$\alpha$ が恒等射と仮定してよい」とし、(iii) 単位を含む場合を読者に委ねている。本ページでは (i) を剰余類の数え上げで証明し（\ref{cat:coxeter-presentation}）、(ii) を前ページの厳密化への組紐の移送（\ref{cat:braiding-strictification}）と共役の計算（\ref{cat:basic-arrows-to-moves}）で正当化し、(iii) も同じ議論に含めた。
  - `grp:coset`: NG — Here「剰余類の数え上げ」refers to counting cosets (a set of cosets), not a single left/right coset as defined in the card.

## 「単位元」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `grp:group` → **no candidate fits**
- Pages: 01-monoidal.html, 02-monoids-actions.html
- Sentence: 対象が一つの厳密モノイダル圏は、集合（射の全体）と二つの二項演算 $\circ$, $\square$ で、交換法則 $(f'\square g')\circ(f\square g)=(f'\circ f)\square(g'\circ g)$ を満たし共通の単位元 $1_{e}$ をもつものと同じであることを確かめ、このとき $\circ=\square$ で、可換であることを示せ（エックマン–ヒルトンの議論）。
  - `grp:group`: NG — Here "単位元" refers to the common identity element of two binary operations in a strict monoidal category, not the identity element of a group as defined in the card.
  - `ring:ring`: NG — Here "単位元" refers to the common identity element of two binary operations in a monoidal category, not the multiplicative identity 1 of a ring as defined in the card.

## 「反射的」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `cat:reflective-subcategory` → **no candidate fits**
- Pages: 04-cartesian-closed.html
- Sentence: - *反射的対象.* $D\cong D^{D}$ となる対象 $D$（型なしラムダ計算のモデル。\ref{logic:page-lambda-calculus}）があるデカルト閉圏では、ローヴェアの定理から $D$ のすべての自己射が不動点をもつ。これは型なしラムダ計算の\term[不動点結合子]{logic:fixed-poi
  - `cat:reflective-subcategory`: NG — This "反射的" refers to reflexive objects satisfying $D\cong D^{D}$, not a reflective subcategory with a left adjoint inclusion functor.
  - `logic:relation-properties`: NG — This "反射的" refers to reflexive objects in a Cartesian closed category, not a reflexive relation on a set $W$.

## 「可算」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `set:finite-set` → **no candidate fits**
- Pages: 02-monoids-actions.html
- Sentence: d-object}）。集合の圏ではふつうのモノイド、アーベル群のテンソル積では環、自己関手の合成ではモナド（\ref{cat:monad}）になる。本ページでは、コヒーレンス定理（\tref{cat:coherence}）を使って一般の結合律（\ref{cat:general-associative-law}）を示し、可算の余積が $\square$ と両立するとき**自由モノイド**が「すべての長さの積の余積」として作れること（\ref{cat:free-monoid-monoidal}）を示す。最後にモノイドの**作用**（加群の一般化）を扱う。
  - `set:finite-set`: NG — Here "可算" means countable (likely "countable coproduct"), not the set-theoretic finiteness/countability notion defined in the card.

## 「右剰余類」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `grp:coset` → **no candidate fits**
- Pages: 07-symmetric-coherence.html
- Sentence: $w_{k}\defeq s_{n-1}s_{n-2}\cdots s_{k}$（$1\le k\le n-1$）、$w_{n}\defeq$ 空語とし、右剰余類の集合 $X\defeq\{Hw_{1},\dots,Hw_{n}\}$ が右からの $s_{i}$ の積で閉じることを示す。$1\le i\le n-1$, $1\le k\le n$ について：
  - `grp:coset`: NG — The sentence uses "右剰余類" but writes the set as $\{Hw_{1},\dots,Hw_{n}\}$, which are left cosets, not right cosets.

## 「基底」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `mod:free-module` → **no candidate fits**
- Pages: 06-monoidal-functors.html, 09-doctrinal-adjunction.html, 11-symmetric-monoidal-closed.html
- Sentence: （テンソル積の普遍性、双線形写像は基底の組の上の値で決まり任意の値をとれること、自由アーベル群の普遍性）が $C$ について自然で、合成が $F_{2}$ との合成で与えられることと\ref{cat:yoneda-lemma}から従う。
  - `mod:free-module`: NG — Here "基底" refers to a basis of a tensor product/bilinear map context (a generating set over which values are freely assigned), not specifically the module-theoretic basis defined in the card.
  - `grp:free-abelian`: NG — Here "基底" refers to a basis of a tensor product/bilinear map context (a generating set for a free abelian group or module), which matches the card's notion of a basis of a free abelian group.

## 「対称射」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `cat:symmetric-monoidal` → **no candidate fits**
- Pages: 11-symmetric-monoidal-closed.html
- Sentence: **Step 4（4）.** $-\otimes b$ は左随伴なので余極限を保つ。$a\otimes-$ は対称射 $\gamma$ により $-\otimes a$ と自然同型。$[b,-]$ は右随伴なので極限を保つ。$[-,c]$：余極限 $b=\operatorname{colim}b_{i}$ について、任意の $x$ で
  - `cat:symmetric-monoidal`: NG — 「対称射」 refers to the symmetry morphism $\gamma$ of a symmetric monoidal category, not to the notion of a symmetric monoidal category defined in the card.

## 「導来関手」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `ha:left-derived-functor` → **no candidate fits**
- Pages: 11-symmetric-monoidal-closed.html
- Sentence: act}（テンソル積と $\Hom$ の随伴 \ref{ha:tensor-hom-adjunction} から示した）の圏論的な言い換えである。逆に、左完全でないこと（$\Z\xrightarrow{2}\Z$ に $\otimes\Z/2\Z$）は、左随伴が極限（核）を保つとは限らないことの例で、そのずれを測るのが導来関手 $\operatorname{Tor}$（\ref{ha:tor}）である。
  - `ha:left-derived-functor`: NG — 導来関手 is a general notion, while the card defines only the specific left derived functor \(L_{n}F\), so the term as used (referring to Tor as a derived functor) is broader than the card's definition.

## 「忠実」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `cat:full-faithful` → **fits: `mod:annihilator`**
- Pages: 01-monoidal.html, 09-doctrinal-adjunction.html
- Sentence: **Step 0（忠実性）.** $1_{e}\square f=1_{e}\square g$ なら $f=g$：$\lambda$ の自然性から $f=\lambda_{y}\circ(1_{e}\square f)\circ\lambda_{x}^{-1}$。同様に $f\square1_{e}=g\square1_{e}$ なら $
  - `cat:full-faithful`: NG — Here "忠実性" refers to a faithfulness property of a specific comparison map (injectivity of a square/map), not the faithfulness of a functor as defined in the card.
  - `grp:faithful-transitive`: NG — Here "忠実" (faithful) describes a functor preserving the identity condition, not a group action whose kernel is trivial as defined in the card.
  - `mod:annihilator`: OK

## 「普遍性」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 02-monoids-actions.html, 05-closed-categories.html, 06-monoidal-functors.html, 07-symmetric-coherence.html, 08-braids.html, 11-symmetric-monoidal-closed.html
- Sentence: > 資料：Mac Lane, *Categories for the Working Mathematician* 第 VII 章 §3–§4。自由モノイドの構成で Mac Lane が「大きいが型どおりの図式」として略した結合律と普遍性の確認は、コヒーレンス定理に帰着させて補った。
  - `cat:universal-arrow`: NG — 「普遍性」は普遍射が持つ性質を指す語であり、普遍射そのものを定義する本カードの用語とは異なる概念を指している。

## 「最小元」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `set:well-order` → **no candidate fits**
- Pages: 04-cartesian-closed.html
- Sentence: ハイティング代数で $\neg p\defeq(p\Rightarrow\bot)$（$\bot$ は最小元）とすると、$p\le\neg\neg p$ は常に成り立つが、$\neg\neg p\le p$ は一般には成り立たないことを、実数直線の開集合の束で示せ。
  - `set:well-order`: NG — Here "最小元" means the least element of the whole lattice (bottom element), not the $R$-minimal element of a subset in a well-order.

## 「構造射」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `ring:algebra` → **no candidate fits**
- Pages: 07-symmetric-coherence.html, 08-braids.html, 09-doctrinal-adjunction.html
- Sentence: ダル圏は、対象が自然数 $n$、射 $n\to n$ が $\mathfrak{S}_{n}$ の元、$n\neq m$ なら射なし、という置換の圏であることが、ここでの議論（$\mathfrak{S}_{n}$ の関係と $\gamma$ の関係の一致）から従う（普遍性の確認は略す）。比喩で言えば、対称モノイダル圏の構造射は「紐を自由に通り抜けられるあやとり」で、どう絡めても結局は両端の対応（置換）しか記憶されない。紐が互いに通り抜けられない（3 次元の）世界にすると、絡み方そのもの（組紐）が記憶され、それが次ページの組紐モノイダル圏である。
  - `ring:algebra`: NG — Here "構造射" refers to the structure morphisms of a symmetric monoidal category (braiding/associativity/unit constraints), not the structure homomorphism $\iota_{B}:A\to B$ of an algebra over a ring.
  - `cat:t-algebra`: NG — Here 構造射 refers to the structure morphisms of a symmetric monoidal category (braiding/symmetry), not the structure map $h\colon Tx\to x$ of a T-algebra.

## 「結合子」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `cat:monoidal-category` → **no candidate fits**
- Pages: 01-monoidal.html, 02-monoids-actions.html, 05-closed-categories.html, 06-monoidal-functors.html, 07-symmetric-coherence.html, 08-braids.html, 11-symmetric-monoidal-closed.html
- Sentence: **Step 3（結合子）.** $\beta=\alpha_{x,y,z}$。$\alpha$ の自然性で $\delta$ を内側に移すと、$r(x),r(y),r(z)$ のうちどれが $e$ かで次の等式に帰着する（$a,b,c$ は $r(x),r(y),r(z)$ のうち $e$ でないもの）。
  - `cat:monoidal-category`: NG — Here "結合子" refers to the associator isomorphism $\alpha_{x,y,z}$ of a monoidal category, which is a component of the monoidal structure, not the monoidal category itself as defined in the card.
  - `logic:weak-reduction`: NG — Here "結合子" (combinator) refers to a specific element β in a coend/diagrammatic construction, not a variable-free CL term built from S and K.

## 「自然数」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `set:natural-number` → **no candidate fits**
- Pages: 07-symmetric-coherence.html, 08-braids.html
- Sentence: **高い視点から：コヒーレンスは「自由対称モノイダル圏」の計算.** \ref{cat:free-monoidal-category} の類似として、一つの対象で生成される自由な厳密対称モノイダル圏は、対象が自然数 $n$、射 $n\to n$ が $\mathfrak{S}_{n}$ の元、$n\neq m$ なら射なし、という置換の圏であることが、ここでの議論（$\mathfrak{S}_{n}$ の関係と $\gamma$ の関係の一致）から従う（普遍性の確認は略す）。比喩で言えば、対称モノイダル圏の構造射は「紐を自由に通
  - `set:natural-number`: NG — Here 自然数 refers to the counting numbers indexing objects of the free symmetric monoidal category, not the von Neumann ordinal definition given in the card.

## 「表現可能関手」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `cat:representable-functor` → **no candidate fits**
- Pages: 10-lawvere-metric.html
- Sentence: 1. 表現可能関手 $y_{a}\defeq d(a,-)\colon X\to\mathbf{V}_{\infty}$ は $\mathbf{V}_{\infty}$ 関手である。
  - `cat:representable-functor`: NG — In the sentence, "表現可能関手" refers to the functor $y_{a}=d(a,-)$, which is a representable functor in the enriched sense, but the card defines it as a functor to $\mathbf{Set}$ having a representation, not an enriched $\mathbf{V}_{\infty}$-functor.

## 「距離」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `top:metric-topology` → **no candidate fits**
- Pages: 10-lawvere-metric.html
- Sentence: $\mathbf{V}_{\infty}$ 関手 $F\colon X\to\mathbf{V}_{\infty}$（例 4 の距離での非拡大写像）は、条件
  - `top:metric-topology`: NG — Here “距離” refers to a metric used in an example, but the sentence does not define or use the general notion of distance as in the card; it merely mentions a specific distance in an example.

## 「逆像」 in 01-foundations/06-category-theory/02-monoidal-categories
- Default: `set:function` → **no candidate fits**
- Pages: 03-simplicial.html
- Sentence: **Step 4（厳密モノイダル）.** $f+g$ の各点の逆像の大きさの列は、$f$ と $g$ の列を並べたものなので $F(f+g)=Ff\square Fg$。$F\mu=\mu'^{(2)}=\mu'$、$F\eta=\mu'^{(0)}=\eta'$。
  - `set:function`: NG — Here "逆像" (preimage) refers to the fibers/preimages of individual points under $f+g$ in a combinatorial/species sense, not the set-theoretic inverse image $f^{-1}[D]$ of a subset as defined in the card.
  - `cat:inverse-image`: NG — Here "逆像" means the preimage of a point under a map (fiber), not the inverse image sheaf/presheaf defined in the card.

## 「位相空間」 in 01-foundations/06-category-theory/03-monads
- Default: `top:topological-space` → **no candidate fits**
- Pages: 01-monads-algebras.html, 04-algebras-compact.html
- Sentence: ** 前順序 $P$（を圏とみたもの）のモナドは、単調写像 $T$ で $x\le Tx$, $TTx\le Tx$ を満たすものと同じである（前順序では図式は自動的に可換）。$x\le Tx$ から $Tx\le TTx$ なので、$P$ が半順序なら $TTx=Tx$：モナドは**閉包作用素**にほかならない（例：位相空間の部分集合の閉包、部分群の生成）。
  - `top:topological-space`: NG — Here "位相空間" refers to a topological space whose subsets have closures, matching the card's definition, so it is the same notion.

## 「全射」 in 01-foundations/06-category-theory/03-monads
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 02-kleisli.html, 04-algebras-compact.html, 05-comonads-homology.html
- Sentence: $L$ を $F\mathbf{X}$ への関手とみると、充満忠実（Step 4）で、どの対象 $Fx$ も $Lx$ に等しいので本質的全射。\ref{cat:equivalence-characterization} により圏同値。
  - `set:injection-surjection`: NG — Here "本質的全射" (essentially surjective) is a special case/variant of surjectivity on objects, not the surjectivity of a function as defined in the card.

## 「共通部分」 in 01-foundations/06-category-theory/03-monads
- Default: `cat:subobject` → **fits: `set:intersection-difference`**
- Pages: 04-algebras-compact.html
- Sentence: 等式で割る）.** $\mathrm{Tm}(X)$ 上の合同関係（演算と両立する同値関係）で、$E$ の等式 $u\approx v$ の変数に項を代入したものの組 $(u(t_{1},\dots),v(t_{1},\dots))$ をすべて含む最小のものを $\equiv_{E}$ とする（そのような合同関係全体の共通部分）。$FX\defeq\mathrm{Tm}(X)/{\equiv_{E}}$ は $\Omega$ 代数で、$E$ を満たす：$u_{FX}([t_{1}],\dots)=[u(t_{1},\dots)]=[v(t_{1},\dots)]=v_{FX}([t_{1}],\dots)$。
  - `cat:subobject`: NG — In the sentence, 共通部分 means the intersection of a family of congruence relations (a set-theoretic intersection), not the pullback of a family of subobjects in a category.
  - `set:intersection-difference`: OK

## 「単射」 in 01-foundations/06-category-theory/03-monads
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 02-kleisli.html
- Sentence: \mathbf{1}$, $G\colon\mathbf{1}\to\mathbf{Set}$（$G$ は一点集合を選ぶ）から定まる。$\mathbf{Set}_{T}$ の対象はすべての集合で、各 hom は一点なので、$L\colon\mathbf{Set}_{T}\to\mathbf{1}$ は充満忠実だが対象で単射でなく、同型ではない（圏同値ではある）。一般に $L$ は像 $F\mathbf{X}$ への圏同値で、$F$ が対象で単射なら同型になる。
  - `set:injection-surjection`: NG — Here "単射" refers to injectivity on objects of a functor (a category-theoretic notion), not the set-theoretic injective function defined in the card.

## 「合同関係」 in 01-foundations/06-category-theory/03-monads
- Default: `cat:congruence` → **no candidate fits**
- Pages: 04-algebras-compact.html
- Sentence: **Step 2（等式で割る）.** $\mathrm{Tm}(X)$ 上の合同関係（演算と両立する同値関係）で、$E$ の等式 $u\approx v$ の変数に項を代入したものの組 $(u(t_{1},\dots),v(t_{1},\dots))$ をすべて含む最小のものを $\equiv_{E}$ とする（そのような合同関係全体の共通部分）。$FX\defeq\mathrm{Tm}(X)/{\e
  - `cat:congruence`: NG — This is a congruence relation on a term algebra (compatible with operations), not a congruence on hom-sets of a category as defined in the card.

## 「完備」 in 01-foundations/06-category-theory/03-monads
- Default: `cat:limit` → **no candidate fits**
- Pages: 01-monads-algebras.html
- Sentence: X}^{T}$ と忘却関手が、$T$ を与える随伴をなす（\ref{cat:eilenberg-moore-adjunction}）。さらに、$T$ を与えるどの随伴からも $\mathbf{X}^{T}$ への**比較関手**がただ一つある（\ref{cat:comparison-functor}）。群・環上の加群・完備束などは、それぞれ適当なモナドの代数として捉え直せる。
  - `cat:limit`: NG — Here "完備束" (complete lattice) means order-completeness, not the category-theoretic completeness of having all small limits.
  - `set:complete-boolean-algebra`: NG — Here "完備" modifies "束" (lattice) meaning a complete lattice, not a complete Boolean algebra as defined in the card.
  - `ring:completion`: NG — Here "完備" means complete lattice (order-theoretic completeness), not the \(I\)-adic completeness of a module defined in the card.
  - `top:complete-metric`: NG — Here "完備" refers to complete lattices (order-theoretic completeness), not completeness of a metric space as defined in the card.
  - `top:cauchy-filter`: NG — Here "完備束" means a complete lattice (order-theoretic completeness), not completeness of a uniform space as defined in the card.
  - `ag:proper`: NG — Here "完備" means complete lattice (order-theoretic completeness), not a proper scheme over a field.

## 「普遍性」 in 01-foundations/06-category-theory/03-monads
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 04-algebras-compact.html, 05-comonads-homology.html
- Sentence: **Step 3（普遍性）.** $(\Omega,E)$ 代数 $A$ と $a\colon X\to A$ について、$\bar{a}$ の核 $\{(s,t):\bar{a}s=\bar{a}t\}$ は合同関係で、$A$ が $E$ を満たすので代入例をすべて含む。よって $\equiv_{E}\subseteq\ker\bar{a}
  - `cat:universal-arrow`: NG — 「普遍性」はここでは普遍射の定義ではなく、合同関係が代入例をすべて含むという普遍性（性質）を指しており、カードの普遍射の定義とは異なる。

## 「極限」 in 01-foundations/06-category-theory/03-monads
- Default: `cat:limit` → **no candidate fits**
- Pages: 04-algebras-compact.html
- Sentence: at:algebras-monadic}）。もう一つは、それとは一見無関係な**コンパクトハウスドルフ空間**の圏の忘却関手 $\mathbf{CHaus}\to\mathbf{Set}$ もモナド的であること（\ref{cat:chaus-monadic}）である。後者は、コンパクトハウスドルフ空間を「超フィルターの極限をとる演算をもつ代数系」とみなせることを意味する。
  - `cat:limit`: NG — Here "極限" refers to the limit of an ultrafilter (a topological/convergence notion), not the categorical limit of a diagram as defined in the card.

## 「直積」 in 01-foundations/06-category-theory/03-monads
- Default: `mod:direct-sum` → **fits: `set:cartesian-product`**
- Pages: 01-monads-algebras.html, 04-algebras-compact.html
- Sentence: モノイド $(M,\cdot,e)$ の定義で、集合 $M$ を自己関手 $T$ に、直積 $M\times M$ を合成 $T\circ T$ に、乗法 $M\times M\to M$ を $\mu\colon T^{2}\Rightarrow T$ に、単位元 $1\to M$ を $\eta\colon1\Rightarrow T$ に置き換えたものである。プログラムの言葉では、$Tx$ は「$x$
  - `mod:direct-sum`: NG — This use of 直積 refers to the Cartesian product of a set with itself in the context of monoids, not the direct product of a family of left R-modules as defined in the card.
  - `set:cartesian-product`: OK

## 「コンパクト」 in 01-foundations/06-category-theory/04-kan-extensions
- Default: `top:compact` → **no candidate fits**
- Pages: 01-filtered-colimits.html
- Sentence: ＝「有限が近似できる」.** フィルター付き圏の条件は「有限個のものは、いつか一つの段にまとめられ、いつか等しくなる」ことを言う。比喩で言えば、フィルター付き余極限は「十分先まで待てば、どんな有限の情報も確定する」過程の極限であり、有限個の等式で書ける構造（有限の極限、代数系の演算）と相性がよい。これが「有限表示」や「コンパクト対象」という概念の出発点になる。
  - `top:compact`: NG — Here "コンパクト" refers to compact objects in category theory (preservation of filtered colimits), not topological compactness as defined in the card.

## 「全射」 in 01-foundations/06-category-theory/04-kan-extensions
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 01-filtered-colimits.html, 03-kan.html, 04-pointwise-kan.html, 05-category-of-elements.html
- Sentence: **Step 1（全射）.** $([j_{p},x_{p}])_{p}$ を右辺の元とする。$\mathbf{P}$ の対象は有限個なので、$j_{p}\to k$ をまとめて一つの $k$ に移し、$x_{p}\in F(p,k)$ としてよい。各射 $u\colon p\to p'$ について、族の条件 $[k,F(u,k)x_{p}
  - `set:injection-surjection`: NG — This use of 全射 is a proof step heading about surjectivity, not a reference to the definition card's notion of a surjective function between sets.

## 「単射」 in 01-foundations/06-category-theory/04-kan-extensions
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 01-filtered-colimits.html, 04-pointwise-kan.html, 05-category-of-elements.html
- Sentence: **Step 2（単射）.** $\kappa[k,y]=\kappa[k',y']$ とする。$k,k'$ を共通の $l$ に移し、$y,y'\in\mathrm{Lim}_{p}F(p,l)$ としてよい。各 $p$ で $[l,y_{p}]=[l,y'_{p}]$ なので、\ref{cat:filtered-colimit-set.
  - `set:injection-surjection`: NG — This use of 単射 refers to injectivity of the map κ, which matches the card's definition of an injective function (逆関係が関数), so it is the same notion.

## 「各点的」 in 01-foundations/06-category-theory/04-kan-extensions
- Default: `cat:pointwise-kan` → **no candidate fits**
- Pages: 04-pointwise-kan.html
- Sentence: - **余冪とコエンドの存在**：$L$ の定義に使った。$\mathbf{A}$ が余完備ならつねに存在する。逆（左カン拡張が存在すればこの公式で与えられる）は一般には主張しない（各点的でないカン拡張がありうる）。
  - `cat:pointwise-kan`: NG — one short English sentence why

## 「同じ向き」 in 01-foundations/06-category-theory/04-kan-extensions
- Default: `lin:orientation` → **no candidate fits**
- Pages: 05-category-of-elements.html
- Sentence: $ 自身が $\mathbf{DFib}(\mathbf{C})$ の射 $\pi_{P}\circ q\to\pi_{P}$ になる。これは \ref{cat:dfib-presheaf} で $\widehat{\mathbf{C}}/P$ の対象に対応し、\ref{cat:slice-presheaf} の同値と同じ向きの対応を与える。
  - `lin:orientation`: NG — This use of「同じ向き」refers to a direction of correspondence between categories, not the orientation of bases in a finite-dimensional real vector space defined in the card.

## 「基底」 in 01-foundations/06-category-theory/04-kan-extensions
- Default: `mod:free-module` → **no candidate fits**
- Pages: 02-ends.html
- Sentence: 余米田の補題は「どの関手 $F$ も、表現可能関手 $\mathbf{C}(c,-)$ の重みつきの和として表せる」ことを言う：$F\cong\int^{c}Fc\times\mathbf{C}(c,-)$（$a$ について自然）。比喩で言えば、表現可能関手は「基底ベクトル」で、$Fc$ がその「係数」に当たる。
  - `mod:free-module`: NG — Here "基底" is used metaphorically for a basis of representable functors in a category-theoretic sense, not the module-theoretic basis defined in the card.
  - `grp:free-abelian`: NG — Here "基底" refers to a basis of a vector space (basis vectors), not a basis of a free abelian group as defined in the card.

## 「幾何学的実現」 in 01-foundations/06-category-theory/04-kan-extensions
- Default: `cat:tensor-as-coend` → **fits: `cat:classifying-space`**
- Pages: 02-ends.html
- Sentence: apsto\Delta^{n}$ について、$\int^{n}X_{n}\times\Delta^{n}$（$X_{n}\times\Delta^{n}$ は $X_{n}$ 個の $\Delta^{n}$ の直和）は、$n$ 単体ごとに標準単体を一つずつとり、面と退化の作用素に従って貼り合わせた空間で、$X$ の**幾何学的実現**と呼ばれる（Mac Lane の記述による）。
  - `cat:tensor-as-coend`: NG — 「幾何学的実現」はコエンドによる空間の構成を指し、カードが定義する「関手のテンソル積」とは異なる概念である。
  - `cat:classifying-space`: OK

## 「普遍性」 in 01-foundations/06-category-theory/04-kan-extensions
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 01-filtered-colimits.html, 02-ends.html, 03-kan.html, 04-pointwise-kan.html
- Sentence: **Step 4（一意性と普遍性）.** 各 $\pi_{j}$ を準同型にする $S$ の群構造は、Step 1 の式で決まるので一意。群への余錐 $\lambda_{j}\colon Gj\to T$ について、集合の写像 $f\colon S\to T$ で $f\pi_{j}=\lambda_{j}$ となるものがただ一つあり、$f(\pi_
  - `cat:universal-arrow`: NG — 「普遍性」は普遍射の定義そのものではなく、普遍射が持つ一意存在という性質を指す語であり、カードの定義する「普遍射」とは異なる概念である。

## 「束縛変数」 in 01-foundations/06-category-theory/04-kan-extensions
- Default: `set:free-bound-variable` → **fits: `logic:free-variables`**
- Pages: 02-ends.html
- Sentence: }\times\mathbf{C}\to\mathbf{X}$ の**エンド** $\int_{c}S(c,c)$（\ref{cat:end}）は、「対角成分 $S(c,c)$ をすべての $c$ について両立させて集めたもの」で、極限の一種である（\ref{cat:end-as-limit}）。積分の記号を使うのは、束縛変数・変数変換・フビニの定理（\ref{cat:fubini-ends}）など、積分と同じ規則に従うからである。最も重要な例は、自然変換の集合がエンドであること $\mathrm{Nat}(U,V)=\int_{c}\mathbf{X}(Uc,Vc)$（\ref{cat:nat-as-end}）で、米田の補題もエンドの等式
  - `set:free-bound-variable`: NG — Here "束縛変数" refers to bound variables in the sense of the dummy variable of an integral/end (a bound variable of a quantifier-like operator), which is the same notion of a variable bound by an operator as in the card's definition of bound variable.
  - `logic:free-variables`: OK

## 「準同型」 in 01-foundations/06-category-theory/04-kan-extensions
- Default: `cat:t-algebra` → **fits: `grp:homomorphism`**
- Pages: 01-filtered-colimits.html, 02-ends.html, 04-pointwise-kan.html
- Sentence: る。$k,k'$ を共通の $l$ に移したのち、\ref{cat:filtered-colimit-set.2} を $a,a'$ の像と $b,b'$ の像に使い、さらに共通の $w\colon l\to m$ にまとめると、$m$ 段で $a$ と $a'$ の像、$b$ と $b'$ の像がそれぞれ一致する。群準同型は積を保つので $ab$ と $a'b'$ の像も $m$ 段で一致し、$\pi_{k}(ab)=\pi_{k'}(a'b')$。
  - `cat:t-algebra`: NG — Here "準同型" refers to a group homomorphism (群準同型), not a homomorphism of T-algebras as defined in the card.
  - `grp:homomorphism`: OK

## 「アーベル群」 in 01-foundations/06-category-theory/05-higher-categories
- Default: `grp:abelian-group` → **no candidate fits**
- Pages: 02-nerve-realization.html, 05-crossed-modules.html
- Sentence: の圏（\ref{cat:page-elements}）上の余極限による実現は、コエンドによる左カン拡張の公式（\ref{cat:lan-coend}）の言い換えである。$\mathbf{Cat}$ の神経の場合、実現は単体的集合から生成元と関係で圏を作る操作（基本圏）になることが知られている。ドルド–カンの対応（単体的アーベル群と鎖複体）も、同じ型の随伴から得られることが知られている。
  - `grp:abelian-group`: NG — Here "アーベル群" refers to simplicial abelian groups in the Dold–Kan correspondence, not the definition of an abelian group as a commutative group.

## 「フォーク」 in 01-foundations/06-category-theory/05-higher-categories
- Default: `cat:split-fork` → **no candidate fits**
- Pages: 06-segal-condition.html
- Sentence: 全単射性を、単体的空間（各 $X_{n}$ が位相空間や単体的集合）での「弱ホモトピー同値」に弱めると**セガール空間**になり、これは $(\infty,1)$ 圏のモデルの一つの出発点であることが知られている。別の弱め方として、「内側の角」への写像の全射性（一意性を外したもの）を要求すると**準圏**（ボードマン–フォークトの弱カン複体）になり、神経はちょうど「内側の角の充填が一意」な準圏であることが知られている（ここでは扱わない）。
  - `cat:split-fork`: NG — Here "フォークト" is part of the proper name "ボードマン–フォークト" (Boardman–Vogt), not the categorical notion of fork defined in the card.

## 「ホモロジー」 in 01-foundations/06-category-theory/05-higher-categories
- Default: `ha:homology` → **no candidate fits**
- Pages: 05-crossed-modules.html
- Sentence: によるとされる。$\mathbf{Cat}$ の中の群（厳密 2 群）は、問題 \ref{cat:prob-cm-kernel-central} の $\pi_{0}=P/\partial H$, $\pi_{1}=\ker\partial$ と、$\pi_{0}$ の $\pi_{1}$ への作用、さらに 3 次のコホモロジー類 $k\in H^{3}(\pi_{0},\pi_{1})$ によって、適切な同値（弱同値）を除いて分類されることが知られている（マックレーン–ホワイトヘッド 1950、シン 1975 などとされる。ここでは証明しない）。これは連結な空間の 2 次元までのホモトピー型の分類にあたる。
  - `ha:homology`: NG — Here "ホモロジー" appears only inside the compound term "コホモロジー類" (cohomology class), which is a different notion from the chain-complex homology defined in the card.

## 「両側加群」 in 01-foundations/06-category-theory/05-higher-categories
- Default: `mod:module` → **no candidate fits**
- Pages: 04-bicategories.html
- Sentence: 2 圏（\ref{cat:page-2-categories}）では 1 射の横の合成が厳密に結合的だった。しかし自然に現れる例の多くでは、合成は「同型を除いて」しか結合的でない。たとえば環を対象、両側加群を 1 射とし、テンソル積で合成すると、$C\otimes(B\otimes A)$ と $(C\otimes B)\otimes A$ は同型だが等しくはない。この「同型を除いた 2 圏」が**双圏**（\ref{cat:bicategory}）で、対象が一つの双圏はちょうどモノイダル圏である（\ref{cat:mo
  - `mod:module`: NG — 両側加群 is a bimodule (left and right module structures), not the left R-module defined in the card.

## 「交換子」 in 01-foundations/06-category-theory/05-higher-categories
- Default: `grp:commutator-subgroup` → **no candidate fits**
- Pages: 05-crossed-modules.html
- Sentence: いが、これだけでは主張が成り立たない（\ref{cat:precrossed-counterexample}）。標準的な定義（Whitehead による）に従い**パイエルの等式** ${}^{\partial h}h'=hh'h^{-1}$ を加えた。また Mac Lane が「計算で示せる」「読者に委ねる」とした、交換子の条件から合成が作れること（\ref{cat:reflexive-graph-category}）と、逆向きの構成を証明した。
  - `grp:commutator-subgroup`: NG — Here 交換子 refers to commutators in a crossed module/Peyre setting, not the group commutator $[x,y]=xyx^{-1}y^{-1}$ defined in the card.

## 「代数系」 in 01-foundations/06-category-theory/05-higher-categories
- Default: `cat:variety` → **no candidate fits**
- Pages: 05-crossed-modules.html
- Sentence: ** パイエルの等式を外した前交差加群では、\ref{cat:precrossed-counterexample} のとおり群の中の圏にならない。逆に、群の中の圏の条件を「群の中の亜群」に弱めても何も変わらない（群の中の圏は自動的に亜群、\ref{cat:prob-ic-groupoid}）。群の圏を一般の「群らしい」代数系の圏（環、リー代数など）に取り替えても、内部圏と交差加群の類似物の対応が成り立つことが知られている（ここでは扱わない）。
  - `cat:variety`: NG — Here "代数系" is used generically for algebraic structures like rings and Lie algebras, not specifically for an Ω-algebra as defined in the card.

## 「充満」 in 01-foundations/06-category-theory/05-higher-categories
- Default: `cat:full-faithful` → **no candidate fits**
- Pages: 01-internal-categories.html
- Sentence: **充満.** 単体的集合の射 $\phi\colon N\mathbf{C}\to N\mathbf{D}$ をとる。$F$ を対象の上で $\phi_{0}$、射の上で $\phi_{1}$ とする。
  - `cat:full-faithful`: NG — This sentence uses "充満" as a section heading/label, not as the property of a functor being full as defined in the card.

## 「全射」 in 01-foundations/06-category-theory/05-higher-categories
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 06-segal-condition.html
- Sentence: - *結合律*：合成可能な $f,g,h$ について、$\gamma_{3}$ の**全射性**から $w_{01}=f$, $w_{12}=g$, $w_{23}=h$ となる $w\in X_{3}$ がある。\ref{cat:edges-compose} を繰り返し使うと、$w_{02}=g\circ f$, $w_{13}=h\circ g$ で、
  - `set:injection-surjection`: NG — It refers to surjectivity of the map $\gamma_{3}$, which matches the card's notion of 全射 (surjective function).

## 「単射」 in 01-foundations/06-category-theory/05-higher-categories
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 04-bicategories.html, 06-segal-condition.html
- Sentence: t:monads-in-spans}）は「自分自身との積から自分への写像をもつ行列」で、行列成分 $C_{(x,y)}$ が $x$ から $y$ への射の集合、行列の積の写像が合成にあたる。比喩で言えば、圏とは「射の行列がモノイドになったもの」である。同様に、両側加群の双圏の中のモナドは環の拡大、関係の双圏（スパンを単射的なものに制限）の中のモナドは前順序になる、と言われる。
  - `set:injection-surjection`: NG — Here "単射的" modifies spans (monomorphisms), not a function being injective as defined in the card.

## 「厳密に」 in 01-foundations/06-category-theory/05-higher-categories
- Default: `cat:monadic` → **no candidate fits**
- Pages: 04-bicategories.html
- Sentence: 2 圏（\ref{cat:page-2-categories}）では 1 射の横の合成が厳密に結合的だった。しかし自然に現れる例の多くでは、合成は「同型を除いて」しか結合的でない。たとえば環を対象、両側加群を 1 射とし、テンソル積で合成すると、$C\otimes(B\otimes A)$ と $(C\otimes B)\otimes A$ は同型だが等しくはない。この「同型を除いた 2 圏」が**双圏**（\
  - `cat:monadic`: NG — Here "厳密に" modifies the associativity of composition in a 2-category, not the notion of a monadic functor defined in the card.

## 「基底」 in 01-foundations/06-category-theory/05-higher-categories
- Default: `mod:free-module` → **no candidate fits**
- Pages: 05-crossed-modules.html
- Sentence: 示.** 群の中の圏（厳密 2 群）は、対象・射の両方に群構造をもつ「2 次元の群」である。交差加群はその座標表示で、$P$ が対象（0 次元の部分）、$H=\ker s$ が「単位元から出る射」（1 次元の部分）、$\partial$ が射の終域、作用が対象による射の平行移動にあたる。比喩で言えば、ベクトル空間の元を基底で成分表示するように、2 群を「始点が原点の矢印の群」と「点の群」に分けて記述したもの、と言える。パイエルの等式は、2 次元の群でエックマン–ヒルトンの議論が課す可換性（\ref{cat:eckmann-hilton}）を、この座標で書いたものである。
  - `mod:free-module`: NG — Here "基底" is used metaphorically for a basis of a vector space in an analogy, not as a basis of a module in the sense of the card.
  - `grp:free-abelian`: NG — Here 基底 refers to a basis of a vector space, not a basis of an abelian group as defined in the card.

## 「幾何学的実現」 in 01-foundations/06-category-theory/05-higher-categories
- Default: `cat:tensor-as-coend` → **fits: `cat:classifying-space`**
- Pages: 02-nerve-realization.html
- Sentence: 2. **幾何学的実現.** $K\colon\Delta_{+}\to\mathbf{Top}$ を標準単体 $n+1\mapsto\Delta^{n}$ とすると、$N_{K}$ は特異単体的集合（\ref{cat:simplicial-object} の例 1）で、実現 $\lvert-\rvert$ は単体的集合の**幾何学的実現*
  - `cat:tensor-as-coend`: NG — 幾何学的実現 is the geometric realization of a simplicial set, not the tensor product of functors defined in the card.
  - `cat:classifying-space`: OK

## 「普遍性」 in 01-foundations/06-category-theory/05-higher-categories
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 02-nerve-realization.html, 03-2-categories.html, 04-bicategories.html
- Sentence: **Step 1（左辺の記述）.** 余極限の普遍性から、$\mathbf{E}(\lvert P\rvert,e)$ は余錐 $(\varphi_{(c,x)}\colon Kc\to e)_{(c,x)\in\int P}$ の集合と一対一に対応する（$g\mapsto(g\circ\iota_{(c,x)})$）。余錐の条件は、$\int P$ の各射 $f\co
  - `cat:universal-arrow`: NG — 「普遍性」は普遍的性質（universal property）を指す語で、カードが定義する「普遍射」という特定の組 $(r,u)$ とは異なる概念である。

## 「準同型」 in 01-foundations/06-category-theory/05-higher-categories
- Default: `cat:t-algebra` → **fits: `grp:homomorphism`**
- Pages: 01-internal-categories.html, 04-bicategories.html, 05-crossed-modules.html
- Sentence: 1. $\mathbf{Grp}$ の内部圏：群 $C_{0},C_{1}$ と、準同型 $s,t,i,m$（$C_{2}$ は $C_{1}\times C_{1}$ の部分群）で内部圏の公理を満たすもの。
  - `cat:t-algebra`: NG — Here "準同型" refers to group homomorphisms between groups in an internal category, not homomorphisms of T-algebras.
  - `grp:homomorphism`: OK

## 「部分群」 in 01-foundations/06-category-theory/05-higher-categories
- Default: `grp:subgroup` → **no candidate fits**
- Pages: 01-internal-categories.html, 05-crossed-modules.html
- Sentence: 1. $\mathbf{Grp}$ の内部圏：群 $C_{0},C_{1}$ と、準同型 $s,t,i,m$（$C_{2}$ は $C_{1}\times C_{1}$ の部分群）で内部圏の公理を満たすもの。
  - `grp:subgroup`: NG — Here "部分群" refers to a subgroup of the fiber product $C_{1}\times C_{1}$ in the internal category sense, not the group-theoretic subgroup defined by the card.

## 「カウフマン括弧」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `cat:kauffman-crossing` → **no candidate fits**
- Pages: 05-ribbon-tangles.html
- Sentence: $\theta$ を加えたものが**リボン圏**で、そのストリング図式は帯（リボン）の図式として 3 次元のアイソトピーで不変になる。結び目や絡み目は「入力も出力もない」図式なので、リボン圏の中で値（スカラー）をもち、結び目の不変量が得られる。本ページでは、具体的なリボン構造の源として**テンパリー–リーブ圏**と**カウフマン括弧**の組紐を構成し、ライデマイスター移動での不変性を計算で確かめて**ジョーンズ多項式**を導く。
  - `cat:kauffman-crossing`: NG — カウフマン括弧 is a polynomial invariant of link diagrams, not the Kaufman crossing definition (a weighted sum of two smoothings) given in the card.

## 「コンパクト」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `top:compact` → **no candidate fits**
- Pages: 07-tannaka.html
- Sentence: > 淡中双対性の一般形（コンパクト群、代数群、淡中圏）は本ページの最後で知られている事実として述べる。
  - `top:compact`: NG — Here "コンパクト群" means a compact topological group, which is a special case of a compact topological space, so it matches the card's notion.

## 「テンソル積」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `rep:constructions` → **no candidate fits**
- Pages: 05-ribbon-tangles.html, 06-hopf.html, 07-tannaka.html
- Sentence: {N}$、$\mathbf{TL}(n,m)$ を $P(n,m)$ を基底とする自由 $k$ 加群とし、合成を「$D\in P(n,m)$ の上に $E\in P(m,l)$ を積み、中央の $m$ 点でつないで、できた閉じた輪 $c$ 個を消して $\delta^{c}$ を掛ける」の $k$ 双線形な延長とする。テンソル積は横の並置（$n\otimes m=n+m$）。
  - `rep:constructions`: NG — Here "テンソル積" denotes horizontal juxtaposition of diagrams (a monoidal/tensor product of the Temperley–Lieb category), not the tensor product of representations defined in the card.
  - `ha:tensor-product`: NG — Here "テンソル積" denotes juxtaposition of diagrams (a monoidal/tensor product of a diagrammatic category), not the tensor product of modules defined by the balanced-map universal property.

## 「ファイバー関手」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `fld:fiber-functor` → **no candidate fits**
- Pages: 07-tannaka.html
- Sentence: ホップ代数 $H$ から表現の圏を作った（\ref{cat:page-hopf}）のと逆に、表現の圏と忘却関手（**ファイバー関手**）から $H$ を復元できる：忘却関手の自然な自己準同型の全体が $H$ で、モノイダル構造が余積を復元する。とくに有限群 $G$ は、表現の圏の忘却関手の**モノイダルな自然自己同型の群**として復元される（**淡中双対性**）。指標表が等しい $D_{4}$ と $Q_{8}$ は、モノイダル構造とファイバー関
  - `fld:fiber-functor`: NG — ファイバー関手 here is a forgetful functor from a representation category, not the functors $F$ or $\Phi$ defined in the card.

## 「モノイド」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `cat:monoid-object` → **no candidate fits**
- Pages: 01-enriched.html, 02-day-convolution.html, 03-string-diagrams.html, 06-hopf.html, 07-tannaka.html
- Sentence: \mathbf{Ab}$ は強モノイダル（$\mathbb{Z}[X\times Y]\cong\mathbb{Z}[X]\otimes\mathbb{Z}[Y]$）で、圏 $\mathbf{C}$ から**自由な前加法圏** $\mathbb{Z}\mathbf{C}$（射の形式的な整数係数の和）を作る。対象が一つ（モノイド $G$）なら群環・モノイド環 $\mathbb{Z}[G]$。
  - `cat:monoid-object`: NG — Here "モノイド" refers to a monoid object in the category of sets (an ordinary monoid/group-like object), not a monoid in a monoidal category as defined by the card.

## 「両側加群」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `mod:module` → **no candidate fits**
- Pages: 03-string-diagrams.html, 04-rigid-pivotal.html
- Sentence: s\in\operatorname{End}(I)$ と $a$ について、$s\otimes1_{a}$ と $1_{a}\otimes s$（どちらも $a\to a$）を比べる。組紐モノイダル圏では両者が等しいことを示し、一般のモノイダル圏では等しいとは限らないことを、環 $R=\mathbb{Q}[t]$ 上の両側加群の圏（$\otimes_{R}$、単位 $R$）の例で確かめよ。
  - `mod:module`: NG — 両側加群 is a bimodule (left and right module structures), which is not the same notion as the (left) module defined in the card.

## 「乗法」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `cat:monad` → **fits: `ring:ring`**
- Pages: 04-rigid-pivotal.html
- Sentence: - **ピボタル構造のモノイダル性**：巡回性（\ref{cat:trace-cyclic}）には $\delta$ の自然性だけを使い、モノイダル性は使っていない。モノイダル性は、トレースの乗法性 $\operatorname{tr}(f\otimes g)=\operatorname{tr}(f)\operatorname{tr}(g)$ を（組紐をもつ場合などに）示すときに要る。
  - `cat:monad`: NG — Here "乗法性" refers to multiplicativity of the trace (a product-preserving property), not the monad multiplication natural transformation μ.
  - `ring:ring`: OK

## 「交換子」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `grp:commutator-subgroup` → **no candidate fits**
- Pages: 06-hopf.html
- Sentence: 双代数 $H$ の元 $x$ で $\Delta(x)=x\otimes1+1\otimes x$ をみたすものを**原始元**という。原始元全体は交換子 $[x,y]=xy-yx$ で閉じる（リー代数をなす）ことを示し、ホップ代数では $S(x)=-x$, $\varepsilon(x)=0$ であることを示せ。
  - `grp:commutator-subgroup`: NG — This "交換子" is the ring-theoretic commutator $[x,y]=xy-yx$ in a bialgebra, not the group commutator $xyx^{-1}y^{-1}$ defined in the card.

## 「位数」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `grp:abelian-group` → **no candidate fits**
- Pages: 07-tannaka.html
- Sentence: ga'F\cong\omega$ がモノイダルな同型）は存在しない：存在すれば $\operatorname{Aut}^{\otimes}(\omega)\cong\operatorname{Aut}^{\otimes}(\omega')$、すなわち $D_{4}\cong Q_{8}$ となり矛盾（$D_{4}$ は位数 2 の元を 5 個、$Q_{8}$ は 1 個もつ）。モノイダル構造は、指標表（融合規則）より多くの情報（結合子の情報）を持っている。実際、$\operatorname{Rep}(D_{4})$ と $\operatorname{Rep}(Q_{8})$ はファイバー関手との両立を課さなくてもモノイダル圏として同値で
  - `grp:abelian-group`: NG — Here "位数" means the order of an element (the number of elements in the cyclic subgroup it generates), not the order of a group as defined in the card.
  - `grp:element-order`: NG — Here "位数" refers to the order (number of elements) of a group, not the order of an element as defined in the card.
  - `cx:isolated-singularity`: NG — Here "位数" means the order (number of elements) of a group, not the order of a pole as defined in the card.
  - `cx:elliptic-function`: NG — Here 位数 means the order (number of elements) of a group, not the number of poles of an elliptic function.

## 「余単位」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `cat:unit-counit` → **no candidate fits**
- Pages: 06-hopf.html
- Sentence: 群 $G$ の表現どうしのテンソル積が再び表現になるのは、群環 $k[G]$ に「余積」$g\mapsto g\otimes g$ があるからである。一般に、代数 $H$ の加群の圏に、台のベクトル空間のテンソル積を使ったモノイダル構造を入れることと、$H$ に**双代数**の構造（余積と余単位）を入れることは同じである。さらに、**対合射**（アンチポード）があるとき（**ホップ代数**）有限次元加群の圏は剛性になり、**$R$ 行列**があるとき（**準三角ホップ代数**）組紐モノイダル圏になる。
  - `cat:unit-counit`: NG — Here "余単位" is the counit of a coalgebra/bialgebra (a linear map \(H\to k\)), not the counit of an adjunction defined in the card.
  - `cat:comonad`: NG — Here "余単位" is the counit of a bialgebra/Hopf algebra (a map \(H\to k\)), not the counit natural transformation \(L\Rightarrow 1_{\mathbf{X}}\) of a comonad.

## 「全単射」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 02-day-convolution.html, 06-hopf.html, 07-tannaka.html
- Sentence: イダル圏 $\mathbf{C}$ 上の前層の圏に、テンソル積をコエンドで延長した**デイ畳み込み** $F\circledast G$ を入れ、$\widehat{\mathbf{C}}$ がモノイダル閉圏になり、米田埋め込みが強モノイダル関手になることを示す。デイ畳み込みのモノイドは緩いモノイダル関手で、有限集合の全単射の圏の上では「種」（記号列）の積になり、オペラッド（\ref{cat:page-operads}）の準備になる。
  - `set:injection-surjection`: NG — Here 全単射 refers to bijections in the category of finite sets (a categorical/structural notion), not the set-theoretic injective-surjective function definition given in the card.

## 「単位子」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `cat:monoidal-category` → **no candidate fits**
- Pages: 02-day-convolution.html, 03-string-diagrams.html, 06-hopf.html
- Sentence: **Step 2（単位子）.** $\widehat{\mathbf{C}}(\mathbf{y}I\circledast F,H)$ は $\mathbf{C}(a,I)\times Fb\to H(a\otimes b)$ の自然な族で、$a$ について米田の補題を使うと $Fb\to H(I\otimes b)$ の自然な族、$H(\l
  - `cat:monoidal-category`: NG — 「単位子」はここでは米田の補題を用いて導かれる自然変換（unit）を指しており、モノイダル圏の単位対象 $e$ とは異なる概念である。

## 「厳密に」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `cat:monadic` → **no candidate fits**
- Pages: 03-string-diagrams.html, 05-ribbon-tangles.html
- Sentence: ル積は、平面上の図式で表せる：対象を縦の線（ストリング）、射を箱、合成を縦の積み重ね、テンソル積を横の並置とする。図式の値（射）が「箱を上下にずらしても変わらない」ことが**交換法則**で、ジョイアル–ストリートの定理によれば、平面の変形（アイソトピー）で移りあう図式は同じ射を表す。本ページでは、図式を「層」の列として厳密に定義し、交換による不変性を証明する。応用として、単位対象の自己準同型のモノイド $\operatorname{End}(I)$ が可換であることを図式で示す。双対の「カップとキャップ」、組紐の「交差」とライデマイスター移動も導入する。
  - `cat:monadic`: NG — Here "厳密に" means "rigorously/precisely" (defining diagrams rigorously), not the technical sense of "strictly monadic" from the card.

## 「可換群」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `grp:abelian-group` → **no candidate fits**
- Pages: 06-hopf.html
- Sentence: 1. 可換かつ余可換な $H$（たとえば可換群の群環）で $R=1\otimes1$ なら、組紐は通常の入れ替え $\tau$（対称）。
  - `grp:abelian-group`: NG — Here "可換群" refers to a commutative group used as an example (a group ring of a commutative group), which matches the card's definition of a commutative/abelian group.

## 「可逆元」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `ring:unit` → **no candidate fits**
- Pages: 06-hopf.html, 07-tannaka.html
- Sentence: 双代数 $H$ と可逆元 $R=\sum_{i}s_{i}\otimes t_{i}\in H\otimes H$ で
  - `ring:unit`: NG — In the card 可逆元 means a unit of a ring, but here it refers to an invertible element of the algebra $H\otimes H$ (a unit in that algebra), which is a different object than a unit of $H$.

## 「変形」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `cat:2-functor` → **no candidate fits**
- Pages: 03-string-diagrams.html, 06-hopf.html
- Sentence: モノイダル圏の射の合成とテンソル積は、平面上の図式で表せる：対象を縦の線（ストリング）、射を箱、合成を縦の積み重ね、テンソル積を横の並置とする。図式の値（射）が「箱を上下にずらしても変わらない」ことが**交換法則**で、ジョイアル–ストリートの定理によれば、平面の変形（アイソトピー）で移りあう図式は同じ射を表す。本ページでは、図式を「層」の列として厳密に定義し、交換による不変性を証明する。応用として、単位対象の自己準同型のモノイド $\operatorname{End}(I)$ が可換であることを図式で示す。双対の「カップとキャップ」、組紐の「交差」とライデマイスター移動も導入する
  - `cat:2-functor`: NG — Here "変形" means a planar isotopy of string diagrams, not a deformation between 2-natural transformations as defined in the card.

## 「左作用」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `cat:monoid-action` → **fits: `grp:group-action`**
- Pages: 03-string-diagrams.html
- Sentence: \cong R$。両側加群 $M$ について、$R\otimes_{R}M\cong M$ と $M\otimes_{R}R\cong M$ を通すと、$s\otimes1_{M}$ は左からの $s$ の作用、$1_{M}\otimes s$ は右からの $s$ の作用である。$M=\mathbb{Q}[t]$ に、左作用を通常の掛け算、右作用を $m\cdot r\defeq m\,r(-t)$ で入れる（$t\mapsto-t$ は環の自己同型なので両側加群）。$s=t$ について、左作用は $m\mapsto tm$、右作用は $m\mapsto-tm$ で異なる。したがって $s\otimes1_{M}\neq1_{M}\oti
  - `cat:monoid-action`: NG — This is a ring/module action on an abelian group, not a monoid acting on an object of a monoidal category as in the card.
  - `grp:group-action`: OK

## 「引き戻し」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `cat:product` → **no candidate fits**
- Pages: 06-hopf.html
- Sentence: **Step 1（1 ⇒ 2）.** $\Delta$ が代数準同型なので $M\otimes N$ は $H\otimes H$ 加群を $\Delta$ で引き戻した $H$ 加群、$\varepsilon$ が代数準同型なので $k$ は $H$ 加群。$H$ 線形写像のテンソル積は $H$ 線形。結合子 $(L\otimes M)\otimes N\cong L\otimes(M\otimes N)$ が $H$ 線形なのは余結合律 $(\Delta\otimes1)\Del
  - `cat:product`: NG — Here "引き戻し" means restricting scalars along a map (pulling back a module structure), not the categorical pullback/fiber product defined in the card.

## 「普遍性」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 02-day-convolution.html, 06-hopf.html
- Sentence: **Step 1.** 等化子・積の普遍性と転置 $\mathbf{V}(x,[y,z])\cong\mathbf{V}(x\otimes y,z)$ により、$x\to\prod_{a}[Fa,Ga]$ は族 $\theta_{a}:x\otimes Fa\to Ga$ と、それが二つの射を等化することは、成分ごとに転置した上の等式と同じ。
  - `cat:universal-arrow`: NG — 「普遍性」はここでは等化子・積が持つ普遍射としての性質（普遍的性質）を指し、カードが定義する「普遍射」そのものではない。

## 「構造射」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `cat:t-algebra` → **no candidate fits**
- Pages: 01-enriched.html, 02-day-convolution.html, 03-string-diagrams.html, 04-rigid-pivotal.html, 06-hopf.html
- Sentence: tegory}, \ref{cat:symmetric-monoidal}）。既存のページの $\square$, $e$ をここでは $\otimes$, $I$ と書く。コヒーレンス定理（\tref{cat:coherence}, \ref{cat:symmetric-coherence-general}）により、構造射 $\alpha,\lambda,\varrho$ は省略して書くことがある（省略した等式はコヒーレンスで保証される）。
  - `cat:t-algebra`: NG — Here "構造射" refers to the associator and unitors of a symmetric monoidal category, not the structure map of a T-algebra.
  - `ring:algebra`: NG — Here "構造射" refers to the associator and unitors (α, λ, ρ) of a symmetric monoidal category, not the structure morphism ι_B of an algebra over a ring.

## 「準同型」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `cat:t-algebra` → **no candidate fits**
- Pages: 06-hopf.html, 07-tannaka.html
- Sentence: 3. **包絡環** $U(\mathfrak{g})$（リー代数 $\mathfrak{g}$）：$x\in\mathfrak{g}$ について $\Delta(x)=x\otimes1+1\otimes x$, $\varepsilon(x)=0$, $S(x)=-x$（これらが代数準同型（$S$ は反準同型）として延びることは包絡環の普遍性による。本サイト未収録）。
  - `cat:t-algebra`: NG — Here "準同型" refers to algebra homomorphisms of the enveloping algebra (Hopf algebra structure maps), not homomorphisms of T-algebras.
  - `grp:homomorphism`: NG — This is about algebra homomorphisms (and an antipode as an anti-homomorphism), not group homomorphisms between groups as defined in the card.
  - `ring:homomorphism`: NG — It refers to a homomorphism of (associative) algebras, not of rings as defined in the card.
  - `mod:submodule-homomorphism`: NG — This is a Hopf algebra (algebra) homomorphism, not an \(R\)-module homomorphism between modules over a ring as defined in the card.

## 「直積」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `mod:direct-sum` → **fits: `set:cartesian-product`**
- Pages: 02-day-convolution.html, 07-tannaka.html
- Sentence: 群 $G$ 上の関数 $f,g$ の畳み込み $(f*g)(c)=\sum_{ab=c}f(a)g(b)$ は、デイ畳み込みの式で、和をコエンドに、$a\otimes b=c$ を射 $c\to a\otimes b$ の集合に、数の積を集合の直積に置き換えたものである。比喩で言えば、デイ畳み込みは「モノイダル圏の掛け算の表を、前層という『重み付きの対象の分布』に線形に（余極限を保つように）延長する」操作で、米田埋め込みは「点への集中した分布（デルタ関数）」に当たる。デルタ関数どうしの畳み込みが積の点のデルタ関数になること（$\delta_{a}*\delta_
  - `mod:direct-sum`: NG — Here "直積" refers to the Cartesian product of sets (in a monoidal category context), not the direct product of a family of left R-modules as defined in the card.
  - `set:cartesian-product`: OK

## 「結合子」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `cat:monoidal-category` → **no candidate fits**
- Pages: 02-day-convolution.html, 06-hopf.html, 07-tannaka.html
- Sentence: **Step 1（結合子）.** \ref{cat:day-universal} の Step 3 から、$\widehat{\mathbf{C}}((F\circledast G)\circledast K,H)$ と $\widehat{\mathbf{C}}(F\circledast(G\circledast K),H)$ は、それぞれ
  - `cat:monoidal-category`: NG — 「結合子」 here refers to an associator (a structural isomorphism), not a monoidal category itself.
  - `logic:weak-reduction`: NG — Here "結合子" refers to a combinator in category theory (a composite/connecting morphism), not a variable-free CL term as defined in the card.

## 「記号列」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `set:first-order-language` → **no candidate fits**
- Pages: 02-day-convolution.html
- Sentence: {C}$ 上の前層の圏に、テンソル積をコエンドで延長した**デイ畳み込み** $F\circledast G$ を入れ、$\widehat{\mathbf{C}}$ がモノイダル閉圏になり、米田埋め込みが強モノイダル関手になることを示す。デイ畳み込みのモノイドは緩いモノイダル関手で、有限集合の全単射の圏の上では「種」（記号列）の積になり、オペラッド（\ref{cat:page-operads}）の準備になる。
  - `set:first-order-language`: NG — Here "記号列" means a string of symbols in a combinatorial/operadic sense (a "species" word), not the formal finite sequence of basic symbols of the language of set theory defined in the card.

## 「連結成分」 in 01-foundations/06-category-theory/06-enriched-rigid
- Default: `top:components` → **no candidate fits**
- Pages: 01-enriched.html
- Sentence: 3. **連結成分** $\pi_{0}:\mathbf{CGHaus}\to\mathbf{Set}$ は積を保つ（$X\times Y$ の弧状連結成分は成分の積：道は成分ごとの道）ので、弧状連結成分 $\pi_{0}$ を使えば、位相的に豊穣された圏から「ホモトピー類」の圏が作れる。$\mathbf{V}$ 自身に施すと、射は写像
  - `top:components`: NG — Here 連結成分 refers to path-connected components (弧状連結成分) and the functor π₀, not the connected components defined in the card.

## 「ストリング図式」 in 01-foundations/06-category-theory/07-operads
- Default: `cat:string-diagram` → **no candidate fits**
- Pages: 04-little-disks.html, 05-eckmann-hilton.html
- Sentence: ストリング図式で「動ける次元が増えると並び順が意味を失う」と述べた（\tref{cat:page-string-diagrams}）のと同じことが、ここでは空間の言葉で起こる。1 次元の区間の中の小区間は互いを追い越せないので順序が残る（$\pi_{0}\mathcal{C}_{1}=\mathrm{Ass}$）が、2 次元の正方形
  - `cat:string-diagram`: NG — the card defines "層" and "図式" separately, not the compound term "ストリング図式" as a single notion.

## 「ベクトル空間」 in 01-foundations/06-category-theory/07-operads
- Default: `lin:vector-space` → **no candidate fits**
- Pages: 02-operads.html, 06-e2-braided.html, 07-infinite-loop.html
- Sentence: 4. **ベクトル空間のオペラッド**（$\times$ を $\otimes$ に変える）：リー代数のオペラッド $\mathrm{Lie}$ は、$\mathrm{Lie}(k)$ が自由リー代数の中の $k$ 変数の多重線形な元の空間（次元 $(k-1)!$）であるもの。
  - `lin:vector-space`: NG — Here "ベクトル空間" modifies "オペラッド" as part of the compound term "ベクトル空間のオペラッド" (vector space operad), not the linear-algebra notion of a vector space defined in the card.

## 「ホモロジー」 in 01-foundations/06-category-theory/07-operads
- Default: `ha:homology` → **no candidate fits**
- Pages: 07-infinite-loop.html
- Sentence: 2. **群完備化定理**：$E_{\infty}$ 空間 $Y$ の群完備化 $\Omega BY$ について、$\pi_{0}\Omega BY=K(\pi_{0}Y)$ で、ホモロジーは $\pi_{0}Y$ を逆元にした局所化になる（D. McDuff–G. Segal, 1976）。
  - `ha:homology`: NG — This "ホモロジー" refers to the homology of a group completion/localization in the McDuff–Segal sense, not the homology $H_{n}(C)$ of a chain complex defined in the card.

## 「モノイド」 in 01-foundations/06-category-theory/07-operads
- Default: `cat:monoid-object` → **no candidate fits**
- Pages: 02-operads.html, 03-little-intervals.html, 04-little-disks.html, 05-eckmann-hilton.html, 06-e2-braided.html, 07-infinite-loop.html
- Sentence: の出力をもつ演算の集まり」と、その合成（入力に別の演算の出力を差し込む）を抽象化したものである。対象 $X$ の上の演算 $X^{k}\to X$ の全体（**自己準同型オペラッド**）が典型で、オペラッドの**代数**とは、オペラッドの演算を $X$ の上の具体的な演算として実現したもの。結合的な二項演算をもつ構造（モノイド）や可換モノイドは、最も単純なオペラッドの代数として現れる。次ページ以降では、位相空間のオペラッド（小区間・小円板）が「ホモトピーを除いて結合的・可換」な構造を記述し、ループ空間を特徴づけることを見る。
  - `cat:monoid-object`: NG — Here "モノイド" refers to a set with an associative binary operation (an algebraic monoid), not a monoid object in a monoidal category as defined in the card.

## 「二項演算」 in 01-foundations/06-category-theory/07-operads
- Default: `grp:binary-operation` → **no candidate fits**
- Pages: 02-operads.html, 05-eckmann-hilton.html
- Sentence:  個の入力と 1 個の出力をもつ演算の集まり」と、その合成（入力に別の演算の出力を差し込む）を抽象化したものである。対象 $X$ の上の演算 $X^{k}\to X$ の全体（**自己準同型オペラッド**）が典型で、オペラッドの**代数**とは、オペラッドの演算を $X$ の上の具体的な演算として実現したもの。結合的な二項演算をもつ構造（モノイド）や可換モノイドは、最も単純なオペラッドの代数として現れる。次ページ以降では、位相空間のオペラッド（小区間・小円板）が「ホモトピーを除いて結合的・可換」な構造を記述し、ループ空間を特徴づけることを見る。
  - `grp:binary-operation`: NG — In the sentence, "二項演算" refers to a binary operation as a special case of an operad operation, but the card defines it as a map $X\times X\to X$; the sentence's usage is compatible, yet the term is used within a broader operad context where "演算" means $k$-ary operations, so the specific binary map definition is not the notion being linked.

## 「代数系」 in 01-foundations/06-category-theory/07-operads
- Default: `cat:variety` → **no candidate fits**
- Pages: 02-operads.html
- Sentence: オペラッドは、代数系の公理を「どんな演算があり、どう合成できるか」（形）と「その演算が何をするか」（中身、代数）に分ける。モノイドの公理（結合律）は、オペラッド $\mathrm{Ass}^{\mathrm{ns}}$ では「$k$ 変数の演算がちょうど一つ」という形の情報に吸収される。比喩で言えば、オペラッドは楽譜の様式（何声で、どう重
  - `cat:variety`: NG — 「代数系」は一般的な代数構造を指す語で、カードが定義する型 $\Omega$ と等式集合 $E$ からなる特定の $(\Omega,E)$ 代数の概念とは異なる。

## 「位相空間」 in 01-foundations/06-category-theory/07-operads
- Default: `top:topological-space` → **no candidate fits**
- Pages: 02-operads.html, 03-little-intervals.html, 04-little-disks.html
- Sentence: のである。対象 $X$ の上の演算 $X^{k}\to X$ の全体（**自己準同型オペラッド**）が典型で、オペラッドの**代数**とは、オペラッドの演算を $X$ の上の具体的な演算として実現したもの。結合的な二項演算をもつ構造（モノイド）や可換モノイドは、最も単純なオペラッドの代数として現れる。次ページ以降では、位相空間のオペラッド（小区間・小円板）が「ホモトピーを除いて結合的・可換」な構造を記述し、ループ空間を特徴づけることを見る。
  - `top:topological-space`: NG — Here "位相空間のオペラッド" refers to an operad built from topological spaces (little intervals/discs), not the notion of a topological space itself as defined by the three topology axioms.

## 「単位律」 in 01-foundations/06-category-theory/07-operads
- Default: `cat:category` → **no candidate fits**
- Pages: 02-operads.html, 03-little-intervals.html, 05-eckmann-hilton.html
- Sentence: 2. （単位律）$\gamma(1;d)=d$、$\gamma(c;1,\dots,1)=c$。
  - `cat:category`: NG — This "単位律" is a unit law for a different structure (a pairing/operation γ), not the identity-law condition (C3) in the definition of a category.
  - `cat:monad`: NG — This "単位律" is a unit law for a bicategory's composition (identity 1-cells), not the monad unit law defined in the card.

## 「厳密に」 in 01-foundations/06-category-theory/07-operads
- Default: `cat:monadic` → **no candidate fits**
- Pages: 03-little-intervals.html, 04-little-disks.html, 05-eckmann-hilton.html
- Sentence: 2. 長さ $r\ge0$ のループ $\ell:[0,r]\to X$ を許す**モーア・ループ空間**では、長さを足すつなぎ合わせが厳密に結合的で、$\Omega X$ とホモトピー同値な位相モノイドが得られる（本サイト未収録）。
  - `cat:monadic`: NG — Here "厳密に" modifies associativity of loop concatenation (strict associativity), not the strict sense of a monadic functor as defined in the card.

## 「変形」 in 01-foundations/06-category-theory/07-operads
- Default: `cat:2-functor` → **no candidate fits**
- Pages: 06-e2-braided.html
- Sentence: $E_{2}$ 構造は「可換だが、交換の仕方（右回り・左回り）を記憶している」構造である。二つの物を平面上で入れ替えるとき、時計回りに回すか反時計回りに回すかで、同じ結果（位置の入れ替え）でも異なる道になる。この記憶が組紐で、3 次元以上では二つの回り方を連続に変形できるので記憶は消え（対称）、1 次元ではそもそも入れ替えられない（非可換）。比喩で言えば、$E_{1}$ は一本道、$E_{2}$ は広場（人どうしの入れ替わりの軌跡が組紐になる）、$E_{3}$ 以上は空中（軌跡の絡みはほどける）。
  - `cat:2-functor`: NG — Here "変形" means continuously deforming paths in a space (a topological/homotopy notion), not a deformation between 2-natural transformations as defined in the card.

## 「射影」 in 01-foundations/06-category-theory/07-operads
- Default: `cat:product` → **no candidate fits**
- Pages: 01-loops-suspensions.html, 07-infinite-loop.html
- Sentence: **Step 2（$S^{n}\approx(\R^{n})^{*}$）.** $n\ge2$ では立体射影（\ref{top:rn-one-point}）で $N\leftrightarrow\infty$。$n=1$ は Step 1。
  - `cat:product`: NG — Here "射影" refers to stereographic projection, not the projection morphisms of a categorical product.
  - `cat:category-of-elements`: NG — Here "射影" refers to stereographic projection, not the projection functor from a category of elements.
  - `grp:direct-product`: NG — Here "射影" refers to stereographic projection, not the group-theoretic projection map defined in the card.

## 「普遍性」 in 01-foundations/06-category-theory/07-operads
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 01-loops-suspensions.html, 06-e2-braided.html, 07-infinite-loop.html
- Sentence: - 部分空間・商位相の普遍性は \ref{top:initial-topology-universal}, \ref{top:final-topology-universal} のとおり。
  - `cat:universal-arrow`: NG — 普遍性 (universal property) is a general concept, not the specific notion of a universal arrow from/to a functor defined in the card.

## 「準同型」 in 01-foundations/06-category-theory/07-operads
- Default: `cat:t-algebra` → **fits: `grp:homomorphism`**
- Pages: 05-eckmann-hilton.html, 06-e2-braided.html, 07-infinite-loop.html
- Sentence: 2. 群の圏 $\mathbf{Grp}$ の群対象（群の準同型を積とする群）はアーベル群と同じもの。
  - `cat:t-algebra`: NG — This “準同型” refers to group homomorphisms, not homomorphisms of T-algebras as defined in the card.
  - `grp:homomorphism`: OK

## 「直積」 in 01-foundations/06-category-theory/07-operads
- Default: `mod:direct-sum` → **fits: `set:cartesian-product`**
- Pages: 01-loops-suspensions.html, 02-operads.html, 05-eckmann-hilton.html
- Sentence: 基点付き空間の圏 $\mathbf{Top}_{*}$ では、直積 $Z\times Y$ の代わりに、二つの「軸」$Z\vee Y$ をつぶした**スマッシュ積** $Z\wedge Y$（\ref{cat:smash-product}）が、基点付き写像の空間 $\mathrm{Map}_{*}(Y,X)$ の左随伴になる（\ref{cat:smash-hom-adjunction
  - `mod:direct-sum`: NG — This is the categorical product in the category of based spaces (the smash product's context), not the direct product of modules defined in the card.
  - `set:cartesian-product`: OK

## 「神経」 in 01-foundations/06-category-theory/07-operads
- Default: `cat:nerve-realization-def` → **no candidate fits**
- Pages: 07-infinite-loop.html
- Sentence: - 単体的対象・単体的集合と神経 $N\mathbf{C}$（$N_{n}\mathbf{C}$ は長さ $n$ の合成可能な射の列）は \ref{cat:simplicial-object}, \ref{cat:page-internal-categories}。関手のテンソル積（コエンド）は \ref{cat:tensor-as-coend}。
  - `cat:nerve-realization-def`: NG — This "nerve" is the simplicial nerve of a category (a simplicial set of composable arrows), not the functor $N_{K}\colon\mathbf{E}\to\widehat{\mathbf{C}}$ defined in the card.

## 「自己準同型」 in 01-foundations/06-category-theory/07-operads
- Default: `ring:homomorphism` → **no candidate fits**
- Pages: 02-operads.html
- Sentence: **オペラッド**は「$k$ 個の入力と 1 個の出力をもつ演算の集まり」と、その合成（入力に別の演算の出力を差し込む）を抽象化したものである。対象 $X$ の上の演算 $X^{k}\to X$ の全体（**自己準同型オペラッド**）が典型で、オペラッドの**代数**とは、オペラッドの演算を $X$ の上の具体的な演算として実現したもの。結合的な二項演算をもつ構造（モノイド）や可換モノイドは、最も単純なオペラッドの代数として現れる。次ページ以降では、位相空間のオペラッド（小区間・小円板）が「ホモトピーを除いて結合的・可換」な構造を記
  - `ring:homomorphism`: NG — Here "自己準同型" refers to endomorphisms of an object \(X\) in the operad sense (maps \(X^{k}\to X\)), not ring endomorphisms as defined in the card.

## 「近傍」 in 01-foundations/06-category-theory/07-operads
- Default: `top:neighborhood` → **no candidate fits**
- Pages: 03-little-intervals.html, 04-little-disks.html
- Sentence: 交わらない}\}$ で、内部が交わらないことは $b_{1}\le a_{2}$ または $b_{2}\le a_{1}$。前者の集合 $U_{\mathrm{id}}=\{0\le a_{1}<b_{1}\le a_{2}<b_{2}\le1\}$ は空でない内部（たとえば $(0.1,0.2,0.3,0.4)$ の近傍）をもつ凸集合で 4 次元、後者 $U_{(12)}$ も同様。両者は交わらない（$b_{1}\le a_{2}<b_{2}\le a_{1}<b_{1}$ は不可能）。作用 $(c_{1},c_{2})\cdot(12)=(c_{2},c_{1})$ は $U_{\mathrm{id}}$ を $U_{(12)}$ 
  - `top:neighborhood`: NG — Here "近傍" is used in the everyday sense of a small neighborhood around a point in a Euclidean space, not as the topological notion of a neighborhood of a point in a topological space defined via an open set $U$ with $x\in U\subseteq N$.

## 「1 射」 in 01-foundations/06-category-theory/08-sheaf-cohomology
- Default: `cat:2-category` → **no candidate fits**
- Pages: 03-direct-inverse-image.html
- Sentence: 局所同相 $p:E\to Y$ について、ファイバー積 $X\times_{Y}E\defeq\{(x,e) : f(x)=p(e)\}$（$X\times E$ の\term[部分空間]{top:subspace}）の第 1 射影 $q$ は局所同相である。$Y$ 上の層 $G$ について、$f^{-1}G\cong\Gamma(-,X\times_{Y}\operatorname{Et}(G))$。
  - `cat:2-category`: NG — Here "第 1 射影" (first projection) is a projection map in a fiber product, not a 1-morphism of a 2-category.

## 「ホモロジー」 in 01-foundations/06-category-theory/08-sheaf-cohomology
- Default: `ha:homology` → **no candidate fits**
- Pages: 04-abelian-sheaves.html, 05-flasque-cech.html, 06-singular-comparison.html
- Sentence: bf{Ab}(\{*\})\to\mathbf{Ab}$ の圏同値（$F(\emptyset)=0$ で、$F$ は $F(\{*\})$ だけで決まる）で完全。入射分解に $\Gamma$ を施した複体は $0\to\Gamma F\to\Gamma I^{0}\to\cdots$ が完全なので、$q\ge1$ のコホモロジーは $0$。
  - `ha:homology`: NG — In the sentence "コホモロジー" (cohomology) is used, which is the dual notion of the homology defined in the card, not the same notion.

## 「入射」 in 01-foundations/06-category-theory/08-sheaf-cohomology
- Default: `cat:coequalizer` → **no candidate fits**
- Pages: 04-abelian-sheaves.html, 05-flasque-cech.html, 06-singular-comparison.html
- Sentence: - **選択公理**：入射対象の構成（可除群の入射性、各点での延長の選択）と、導来関手の定義（入射分解の選択）で使う。どこで使うかは各証明と最後の hypcheck に書く。
  - `cat:coequalizer`: NG — In the sentence 入射 means "injective object" (homological algebra), not the coproduct injection morphism defined in the card.

## 「共通部分」 in 01-foundations/06-category-theory/08-sheaf-cohomology
- Default: `cat:subobject` → **fits: `set:intersection-difference`**
- Pages: 01-presheaves-sheaves.html, 03-direct-inverse-image.html, 06-singular-comparison.html
- Sentence: （2 元以上）について $F(U)=A$（制限は恒等写像）は層でない：$F(\emptyset)=A$ は 1 点でない（空の被覆の条件に反する）。$\emptyset$ を除いて考えても、交わらない空でない開集合 $U_{1},U_{2}$ があれば、$a\neq b$ を $U_{1},U_{2}$ に置いた族は（共通部分 $\emptyset$ 上で）両立するのに、$U_{1}\cup U_{2}$ 上の切断に貼り合わない。
  - `cat:subobject`: NG — Here "共通部分" refers to the intersection of open sets (the empty set), not the pullback/meet of subobjects as defined in the card.
  - `set:intersection-difference`: OK

## 「同相写像」 in 01-foundations/06-category-theory/08-sheaf-cohomology
- Default: `top:homeomorphism` → **no candidate fits**
- Pages: 02-sheafification.html
- Sentence: を並べた空間 $\operatorname{Et}(F)=\bigsqcup_{x}F_{x}$ に位相を入れた**エタール空間**を作り、その連続な切断の層を $F^{+}$ とする。層化は、層から前層への包含関手の左随伴で、茎を変えない。逆に、層はそのエタール空間の切断の層として復元でき、層の圏は「$X$ 上の局所同相写像」の圏と同値になる。層を「$X$ の上に広がった空間」として見ることができる。
  - `top:homeomorphism`: NG — the sentence uses 局所同相写像 (local homeomorphism), not 同相写像 (homeomorphism).

## 「基底」 in 01-foundations/06-category-theory/08-sheaf-cohomology
- Default: `mod:free-module` → **no candidate fits**
- Pages: 06-singular-comparison.html
- Sentence: $\Delta^{q}\defeq\{(t_{0},\dots,t_{q})\in\mathbb{R}^{q+1} : t_{i}\ge0,\ \sum t_{i}=1\}$ とし、連続写像 $\tau:\Delta^{q}\to U$ を $U$ の**特異 $q$ 単体**、それらを基底とする自由アーベル群を $S_{q}(U)$、境界を $\partial\tau\defeq\sum_{k}(-1)^{k}\tau\circ\delta_{k}$（$\delta_{k}$ は $k$ 番目の面への埋め込み）とする。アーベル群 $A$ について $S^{q}(U)\defeq\operatorname
  - `mod:free-module`: NG — Here "基底" means a generating set (basis) of a free abelian group, which matches the module-theoretic definition of a basis as an independent generating system.
  - `grp:free-abelian`: NG — Here "基底" means a generating basis of a free abelian group on the set of singular simplices, which matches the card's notion of a basis of a free abelian group.

## 「射影」 in 01-foundations/06-category-theory/08-sheaf-cohomology
- Default: `cat:product` → **no candidate fits**
- Pages: 02-sheafification.html, 05-flasque-cech.html
- Sentence: 前層 $F$ について、集合 $\operatorname{Et}(F)\defeq\bigsqcup_{x\in X}F_{x}$ と、射影 $p:\operatorname{Et}(F)\to X$（$F_{x}$ を $x$ に送る）を考える。開集合 $U$ と $s\in F(U)$ について $[U,s]\defeq\{s_{x} : x\in U\}$ とおき、これらを開基とする位相を入れたものを $F$ の**エタール空間**という。
  - `cat:product`: NG — Here "射影" means a projection map from the étalé space to the base space, not the projection morphisms of a categorical product as defined in the card.
  - `cat:category-of-elements`: NG — Here 射影 is a projection map from an étalé space to the base space, not the projection functor from a category of elements to the base category.
  - `grp:direct-product`: NG — This "射影" is a projection map from the étalé space to the base space, not the coordinate projection from a direct product of groups defined in the card.

## 「導来関手」 in 01-foundations/06-category-theory/08-sheaf-cohomology
- Default: `ha:left-derived-functor` → **no candidate fits**
- Pages: 03-direct-inverse-image.html, 04-abelian-sheaves.html
- Sentence:  $f^{-1}$ の完全性.** $f^{-1}$ は左随伴なので余極限を保ち、さらに茎が $G_{f(x)}$ で、茎をとる操作が有限の極限と交換するので有限の極限も保つ（完全）。$f_{*}$ は右随伴なので極限を保つが、余極限は一般に保たない。アーベル群の層では $f_{*}$ は左完全だが右完全でなく、その右導来関手 $R^{q}f_{*}$（**高次順像**）が層コホモロジーの相対版になる。これらは知られている（本サイト未収録）。$f^{-1}$ が有限の極限を保つことは、$(f^{-1}\dashv f_{*})$ がトポスの間の**幾何学的射**であることを意味し、トポスの点（\ref{cat:page-sheaf-topo
  - `ha:left-derived-functor`: NG — the sentence refers to right derived functors \(R^{q}f_{*}\), whereas the card defines left derived functors \(L_{n}F\).

## 「局所連結」 in 01-foundations/06-category-theory/08-sheaf-cohomology
- Default: `top:locally-connected` → **no candidate fits**
- Pages: 06-singular-comparison.html
- Sentence: **前提を変えると.** 局所可縮性は「各近傍 $U$ が、包含 $V\to U$ が正の次数の特異コホモロジーに $0$ を誘導する近傍 $V$ を含む」（コホモロジー的局所連結性）に弱められることが知られている（本サイト未収録）。
  - `top:locally-connected`: NG — Here「局所連結性」refers to cohomological local connectedness (a vanishing condition on singular cohomology), not the topological local connectedness defined in the card.

## 「引き戻し」 in 01-foundations/06-category-theory/08-sheaf-cohomology
- Default: `cat:product` → **no candidate fits**
- Pages: 03-direct-inverse-image.html, 06-singular-comparison.html
- Sentence: 連続写像 $f:X\to Y$ は層を二方向に運ぶ。$X$ 上の層 $F$ の**順像** $f_{*}F$ は $V\mapsto F(f^{-1}V)$ で、定義はすぐだが茎は簡単に計算できない。$Y$ 上の層 $G$ の**逆像** $f^{-1}G$ は「$G$ の切断を $f$ で引き戻したもの」で、定義には層化が要るが、茎は $G_{f(x)}$ と簡単に計算でき、エタール空間の引き戻しとしても記述できる。二つは随伴 $f^{-1}\dashv f_{*}$ をなす。開集合への制限、1 点への制限（茎）、大域切断、摩天楼層、定数層はすべてこの二つの特別な場合である。最後に、アーベル群の層について、開集
  - `cat:product`: NG — Here "引き戻し" refers to pulling back sections along a continuous map (inverse image sheaf), not the categorical fiber product/pullback defined in the card.

## 「普遍性」 in 01-foundations/06-category-theory/08-sheaf-cohomology
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 02-sheafification.html, 03-direct-inverse-image.html, 04-abelian-sheaves.html
- Sentence: 2. （普遍性）層 $G$ への前層の射 $\varphi:F\to G$ に対し、$\varphi=\varphi^{+}\circ\eta$ となる層の射 $\varphi^{+}:F^{+}\to G$ がただ一つある。
  - `cat:universal-arrow`: NG — 「普遍性」はここでは層化の普遍性（射の一意存在）を指し、カードの「普遍射」の定義そのものではない。

## 「最小元」 in 01-foundations/06-category-theory/08-sheaf-cohomology
- Default: `set:well-order` → **no candidate fits**
- Pages: 03-direct-inverse-image.html
- Sentence: 1. **開集合への制限**：開集合の包含 $j:U\to X$ について、$U$ の開集合 $W$ は $X$ でも開なので、$V\supset j(W)$ の族は最小元 $W$ をもち、$(j^{\mathrm{p}}G)(W)=G(W)$。これは層なので $j^{-1}G=G|_{U}$（$W\mapsto G(W)$, $W\subset U$）。
  - `set:well-order`: NG — Here "最小元" refers to a least element under set inclusion in a family of open sets, not the $R$-minimal element of a well-order as defined in the card.

## 「有限生成」 in 01-foundations/06-category-theory/08-sheaf-cohomology
- Default: `mod:generated-submodule` → **no candidate fits**
- Pages: 05-flasque-cech.html
- Sentence: **計算の観点.** 有限な開被覆と、各交わりで値が有限生成アーベル群の層について、チェック複体は有限生成自由加群（の積）の複体で、コホモロジーは整数行列のスミス標準形（\ref{mod:smith-pr-euclidean}）で計算できる（原始再帰的）。ルレイの定理は「良い被覆」さえ見つければ層コホモロジーが有限の線形代数に帰着することを述べている。
  - `mod:generated-submodule`: NG — Here "有限生成" modifies abelian groups (finite generation in the group/module sense), which matches the card's notion of a finitely generated module over a ring (abelian group = $\mathbb{Z}$-module), so it is the same notion.
  - `grp:generated-subgroup`: NG — Here "有限生成" modifies an abelian group (a sheaf of finitely generated abelian groups), not a group generated by a finite generating set as defined in the card, so the notion differs.
  - `ring:generated-ideal-def`: NG — Here "有限生成" modifies an abelian group (finite generation as a group), not an ideal generated by a finite set in a commutative ring as defined in the card.

## 「準同型」 in 01-foundations/06-category-theory/08-sheaf-cohomology
- Default: `cat:t-algebra` → **fits: `grp:homomorphism`**
- Pages: 01-presheaves-sheaves.html, 03-direct-inverse-image.html, 04-abelian-sheaves.html, 05-flasque-cech.html
- Sentence: - 値を群・アーベル群・環にとる前層（$F(U)$ が群で制限が準同型）も同様に定義し、層の条件は台集合について課す。
  - `cat:t-algebra`: NG — Here "準同型" refers to a group homomorphism between groups $F(U)$, not a homomorphism of T-algebras.
  - `grp:homomorphism`: OK

## 「特異ホモロジー」 in 01-foundations/06-category-theory/08-sheaf-cohomology
- Default: `at:singular-homology` → **no candidate fits**
- Pages: 06-singular-comparison.html
- Sentence: いずれも特異ホモロジーの標準的な教科書（たとえば A. Hatcher, *Algebraic Topology*, §2.1 と命題 2.21、そのコホモロジー版 §3.1）に証明がある。
  - `at:singular-homology`: NG — Here "特異ホモロジー" refers to the mathematical notion as a topic of textbooks, not an instance of the homology group defined by the card.

## 「神経」 in 01-foundations/06-category-theory/08-sheaf-cohomology
- Default: `cat:nerve-realization-def` → **no candidate fits**
- Pages: 05-flasque-cech.html, 06-singular-comparison.html
- Sentence: チェック複体は、被覆の**神経**（添字の組 $(i_{0},\dots,i_{p})$ で $U_{\sigma}\neq\emptyset$ のものを $p$ 単体とする単体的集合）の上で、係数を場所ごとに変えたコチェイン複体である。単体的集合（\ref{cat:page-simplicial}）の言葉では、$p\mapsto\prod F(U
  - `cat:nerve-realization-def`: NG — This "nerve" is the nerve of a cover (a simplicial set of index tuples), not the categorical nerve $N_{K}(e)=\mathbf{E}(K-,e)$ defined in the card.

## 「自由アーベル群」 in 01-foundations/06-category-theory/08-sheaf-cohomology
- Default: `grp:free-abelian` → **no candidate fits**
- Pages: 06-singular-comparison.html
- Sentence: $\Delta^{q}\defeq\{(t_{0},\dots,t_{q})\in\mathbb{R}^{q+1} : t_{i}\ge0,\ \sum t_{i}=1\}$ とし、連続写像 $\tau:\Delta^{q}\to U$ を $U$ の**特異 $q$ 単体**、それらを基底とする自由アーベル群を $S_{q}(U)$、境界を $\partial\tau\defeq\sum_{k}(-1)^{k}\tau\circ\delta_{k}$（$\delta_{k}$ は $k$ 番目の面への埋め込み）とする。アーベル群 $A$ について $S^{q}(U)\defeq\operatorname{Hom}(S_{q
  - `grp:free-abelian`: NG — Here "自由アーベル群" is the free abelian group on the set of singular q-simplices as generators, which matches the card's notion of a free abelian group with a basis (the singular simplices), so it is the same notion.

## 「逆像」 in 01-foundations/06-category-theory/08-sheaf-cohomology
- Default: `set:function` → **fits: `cat:inverse-image`**
- Pages: 01-presheaves-sheaves.html, 02-sheafification.html
- Sentence: **高い視点.** 茎をとる関手 $F\mapsto F_{x}$ は、点 $x\colon\{*\}\to X$ に沿った逆像（\ref{cat:page-direct-inverse-image}）で、有限の極限と任意の余極限を保つ。トポスの言葉では、点はこのような「茎の関手」として定義される。
  - `set:function`: NG — This "逆像" is the inverse image functor along a point in a topos/site-theoretic sense, not the set-theoretic inverse image $f^{-1}[D]$ defined in the card.
  - `cat:inverse-image`: OK

## 「開被覆」 in 01-foundations/06-category-theory/08-sheaf-cohomology
- Default: `top:compact` → **no candidate fits**
- Pages: 01-presheaves-sheaves.html, 02-sheafification.html, 03-direct-inverse-image.html, 04-abelian-sheaves.html, 05-flasque-cech.html, 06-singular-comparison.html
- Sentence: - 開集合 $U$ の**開被覆** $U=\bigcup_{i\in I}U_{i}$（$U_{i}$ は開）。$I=\emptyset$ も許す（そのとき $U=\emptyset$）。$U_{ij}\defeq U_{i}\cap U_{j}$。
  - `top:compact`: NG — the term "開被覆" is an open cover, which is the object used in the definition of compactness, not the notion of compactness itself.

## 「イデアル」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `ring:ideal` → **no candidate fits**
- Pages: 02-sheaf-topos.html
- Sentence: - 冪対象の証明で $P$ が任意の前層でよかった（$Q$ が層なら $Q^{P}$ は層）ことは、層の圏が前層の圏の中で「冪のイデアル」（exponential ideal）になっている、と言い表されることが知られている。
  - `ring:ideal`: NG — Here "イデアル" is part of the phrase "冪のイデアル" (exponential ideal), a category-theoretic notion, not a ring-theoretic ideal as defined in the card.
  - `set:ideal`: NG — This "exponential ideal" is a category-theoretic notion (a subcategory closed under exponentials), not the set-theoretic ideal defined on a set $A$.
  - `ag:algebraic-set`: NG — Here "イデアル" is part of the category-theoretic term "exponential ideal" (冪のイデアル), not the vanishing ideal $I(Y)$ of a subset defined in the card.

## 「エタール空間」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `cat:etale-space` → **no candidate fits**
- Pages: 06-site-sheafification.html
- Sentence: 一般のサイト $(\mathbf{C},J)$ には点がないので、空間のときのようにエタール空間を使って層化することはできない。代わりに、被覆ふるい上の両立する族を「被覆を細かくする」方向に余極限をとる **+ 構成** $P\mapsto P^{+}$ を使う。これを 2 回施した $P^{++}$ が層化で、包含 $\mathbf{Sh}(\mathbf{C},J)\to\widehat{\mathbf{C}
  - `cat:etale-space`: NG — the sentence uses "エタール空間" only as an analogy for ordinary spaces and explicitly says this construction is unavailable on a general site, whereas the card defines the étale space of a presheaf on a topological space.

## 「ガロア拡大」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `fld:galois-extension` → **no candidate fits**
- Pages: 09-etale-site.html
- Sentence: - $\Omega/K$ はガロア拡大（有限次でも無限次でもよい）、$G=\operatorname{Gal}(\Omega/K)$ にクルル位相（\ref{fld:krull-topology}）を入れる。有限ガロア部分拡大 $N$ について $G_{N}\defeq\operatorname{Gal}(\Omega/N)$ は開正規部分群で、制限 $G
  - `fld:galois-extension`: NG — the card defines Galois extension only for finite-degree extensions, while the sentence explicitly allows infinite-degree Galois extensions.

## 「ガロア群」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `fld:galois-extension` → **no candidate fits**
- Pages: 09-etale-site.html
- Sentence: 層は一つの集合ではなく、$G$ が連続に作用する集合である。これは、軌道空間 $\ast/\!/G$（ホモトピー論の分類空間 $BG$）の上の局所系に当たる。比喩で言えば、ザリスキ位相は「$K$ の元を見る目」、エタール位相は「$K$ の代数的閉包の中で、$K$ からは区別できない共役な元たちの入れ替え」まで見る目で、ガロア群はその「見えない内部の対称性」である。
  - `fld:galois-extension`: NG — Here "ガロア群" refers to the absolute Galois group acting on a set in the étale topology context, not the Galois group $\operatorname{Gal}(L/K)$ of a finite Galois extension as defined in the card.

## 「グラフ」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `cat:graph` → **no candidate fits**
- Pages: 03-topos-basics.html
- Sentence: **Step 2（グラフ）.** $f\colon T\to X$ について、$\langle1_{T},f\rangle\colon T\to T\times X$ は（$\pi_{1}$ との合成が $1_{T}$ なので）モノ射で、四角形
  - `cat:graph`: NG — Here "グラフ" refers to the graph of a function (the map $t\mapsto(t,f(t))$), not a directed graph with vertices, edges, and source/target maps as defined in the card.

## 「ホモロジー」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `ha:homology` → **no candidate fits**
- Pages: 09-etale-site.html
- Sentence: ークのガロア理論（\ref{fld:grothendieck-galois}）によりこのサイトは有限な連続 $G$ 集合の圏（$G=\operatorname{Gal}(\Omega/K)$）と同値で、その上の層の圏は**連続な $G$ 集合の圏**と同値になる。大域切断は $G$ 不変元をとる操作に対応し、エタールコホモロジーはガロアコホモロジーになる。最後に、環のザリスキ被覆と、エタール位相の定義を述べる。
  - `ha:homology`: NG — one short English sentence why

## 「モナド的」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `cat:monadic` → **no candidate fits**
- Pages: 01-presheaf-topos.html
- Sentence: - **トポスの余極限.** Mac Lane §IV.10 は、トポスの公理から有限余極限の存在が従うことを述べている。証明には冪対象 $\Omega^{X}$ を使うモナド的な議論（パレの定理）が要ると言われている（ここでは扱わない）。
  - `cat:monadic`: NG — Here "モナド的" describes a style of argument (monadic-style reasoning), not a right adjoint functor that is monadic in the sense of the comparison functor being an isomorphism.

## 「モノイド」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `cat:monoid-object` → **no candidate fits**
- Pages: 01-presheaf-topos.html
- Sentence: 2. **モノイド.** モノイド $M$ を対象一つの圏と見ると、前層は右 $M$ 集合（$x\cdot(mn)=(x\cdot m)\cdot n$, $x\cdot1=x$）で、ふるいは右イデアル（$I\subseteq M$, $IM\subseteq I$）。$\Omega$ は右イデアルの集合に作用 $I\cdot m\de
  - `cat:monoid-object`: NG — This "monoid" is an ordinary algebraic monoid (a set with associative multiplication and identity), not a monoid object in a monoidal category as defined in the card.

## 「下限」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `calc:supremum` → **no candidate fits**
- Pages: 04-presheaf-heyting.html
- Sentence: - **ハイティング代数**は、最大元・最小元・二項の上限 $\vee$・下限 $\wedge$ をもつ束で、$c\wedge a\le b\iff c\le(a\Rightarrow b)$ を満たす二項演算 $\Rightarrow$ をもつもの（\ref{cat:page-cartesian-closed} の例 3）。$\neg a\defeq(a\Rightarrow\bot)$。
  - `calc:supremum`: NG — Here "下限" refers to the binary meet (greatest lower bound of two elements) in a lattice, not the infimum of a subset as defined in the card.

## 「乗法群」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `ring:unit` → **no candidate fits**
- Pages: 09-etale-site.html
- Sentence: rm{et}}(\operatorname{Spec}K,-)$（\ref{cat:sheaf-cohomology} と同様に右導来関手で定める）は、連続な $G$ 加群の不変部分の右導来関手、すなわち**ガロアコホモロジー** $H^{q}(G,M)$ である。これが連続コチェインによるコホモロジーと一致すること、乗法群について $H^{1}(G,\Omega^{\times})=0$（ヒルベルトの定理 90 の一般形。巡回の場合は \ref{fld:hilbert-90}）は知られている（本サイト未収録）。
  - `ring:unit`: NG — Here "乗法群" refers to the multiplicative group $\Omega^{\times}$ of a field (a specific group of units), not the general notion of the unit group $A^{\times}$ of a ring as defined in the card.

## 「代数の準同型」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `ring:algebra` → **no candidate fits**
- Pages: 09-etale-site.html
- Sentence: \operatorname{Map}_{G}(X,\Omega)$（$X\in\mathbf{C}_{G}$）の形のものの充満部分圏を $\mathbf{E}_{K}$ とする（小さい）。$\mathbf{E}_{K}^{\mathrm{op}}$ の対象 $A$ 上のふるい $S$（$A\to B$ の形の $K$ 代数の準同型の集合）が**エタール被覆**であるとは、有限個の $u_{i}:A\to B_{i}$ を含み $A\to\prod_{i}B_{i}$ が単射となることをいう。$(\mathbf{E}_{K}^{\mathrm{op}},J_{\mathrm{et}})$ を $K$ の**小エタールサイト**という。
  - `ring:algebra`: NG — Here "K 代数の準同型" means a homomorphism of K-algebras in the sense of the card (a ring homomorphism compatible with the structure maps), so it matches the defined notion.

## 「充満」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `cat:full-faithful` → **no candidate fits**
- Pages: 08-giraud-theorem.html, 09-etale-site.html
- Sentence: (G3) から余等化子で、\ref{cat:regular-epi-kernel-pair.1} から核対の余等化子なので、$xe_{S}=[x_{f}]$、すなわち $xf=x_{f}$（$f\in S$）となる $x:c\to X$ がただ一つある（一意性は $e_{S}$ のエピ性）。$\mathbf{C}$ は充満なので $\Phi c=\mathbf{C}(-,c)=\mathbf{y}c$。
  - `cat:full-faithful`: NG — Here "充満" describes the category $\mathbf{C}$ itself, not a functor, so it does not match the card's definition of a full functor.

## 「全射」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 03-topos-basics.html, 05-sites.html, 06-site-sheafification.html, 07-giraud-axioms.html, 08-giraud-theorem.html, 09-etale-site.html
- Sentence: 値なモノ射は同じ特性射をもつ（1 で $f=1_{X}$）ので写像は定まる。**単射**：$\chi_{m}=\chi_{m'}$ なら、$m$ と $m'$ はどちらも同じ射 $\chi_{m}$ に沿った $\mathrm{true}$ の引き戻しで、引き戻しは同型を除いて一意なので $m\equiv m'$。**全射**：$\varphi\colon X\to\Omega$ について、$\mathrm{true}$ の $\varphi$ に沿った引き戻し $m\colon S\to X$（有限極限の存在から）はモノ射（\ref{cat:pullback-monic}。$\mathrm{true}$ はモノ射）で、$S\to1$ 
  - `set:injection-surjection`: NG — Here 全射 is used as the name of a property in a categorical (topos-theoretic) context, not the surjectivity of a function $f\colon A\to B$ as defined in the card.

## 「分類トポス」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `cat:continuous-gsets` → **no candidate fits**
- Pages: 09-etale-site.html
- Sentence: **分類トポス.** $\mathbf{B}G$ は「$G$ 主束の分類トポス」と呼ばれ、トポス $\mathcal{E}$ から $\mathbf{B}G$ への幾何学的射は $\mathcal{E}$ の中の $G$ トルソー（主等質空間）と対応することが知られている（本サイト未収録）。$G$ が有限群（離散）なら $\math
  - `cat:continuous-gsets`: NG — 「分類トポス」は \(G\) 主束を分類するトポスの概念であり、カードが定義する連続 \(G\) 集合の圏 \(\mathbf{B}G\) そのものの定義ではない。

## 「加群」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `mod:module` → **no candidate fits**
- Pages: 09-etale-site.html
- Sentence: アーベル群の対象どうしも圏同値で対応するので、小エタールサイト上のアーベル群の層は**連続な $G$ 加群**（作用が連続なアーベル群）と対応し、大域切断 $\Gamma$ は不変部分 $M\mapsto M^{G}$ に対応する。したがってエタールコホモロジー $H^{q}_{\mathrm{et}}(\operatorname{Spec}K,-)$（\ref{cat:sheaf-cohomology} と同様に右導来関
  - `mod:module`: NG — Here "G 加群" means a module over the group ring (a G-module), not a module over a general ring R as defined in the card.
  - `ag:o-module`: NG — Here "加群" refers to a continuous \(G\)-module (a module with a continuous group action), not an \(\mathcal{O}_{X}\)-module over a ringed space as defined in the card.

## 「右随伴」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `cat:adjunction` → **no candidate fits**
- Pages: 01-presheaf-topos.html, 04-presheaf-heyting.html, 06-site-sheafification.html
- Sentence: **Step 5.** 有限積は各点ごとに存在する（記法）。Step 3, 4 は、$(Q^{P},\mathrm{ev})$ が \ref{cat:exponential-universal} の普遍性をもつことを言っているので、$-\times P$ は右随伴 $(-)^{P}$ をもつ。
  - `cat:adjunction`: NG — In the sentence, \((-)^{P}\) is stated to be the right adjoint of \(-\times P\), whereas the card defines the right adjoint as the functor \(G\) in \(F\dashv G\), so the term is used with the opposite role.
  - `cat:adjunction-in-2-category`: NG — In the sentence, "右随伴" refers to the right adjoint of $-\times P$, i.e. the functor $(-)^{P}$ is the right adjoint, whereas the card defines "右随伴" as $g$ being the right adjoint of $f$ (with $f\dashv g$); here the term is used for the right adjoint functor itself, which matches the card's notion (the functor $g$ in $f\dashv g$), so it is actually the same notion.

## 「導来関手」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `ha:left-derived-functor` → **no candidate fits**
- Pages: 09-etale-site.html
- Sentence:  加群**（作用が連続なアーベル群）と対応し、大域切断 $\Gamma$ は不変部分 $M\mapsto M^{G}$ に対応する。したがってエタールコホモロジー $H^{q}_{\mathrm{et}}(\operatorname{Spec}K,-)$（\ref{cat:sheaf-cohomology} と同様に右導来関手で定める）は、連続な $G$ 加群の不変部分の右導来関手、すなわち**ガロアコホモロジー** $H^{q}(G,M)$ である。これが連続コチェインによるコホモロジーと一致すること、乗法群について $H^{1}(G,\Omega^{\times})=0$（ヒルベルトの定理 90 の一般形。巡回の場合は \ref{fld
  - `ha:left-derived-functor`: NG — The term "導来関手" (derived functor) is a general notion, whereas the card defines specifically the left derived functor \(L_{n}F\); the sentence refers to right derived functors, which is not the notion defined by the card.

## 「普遍性」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 01-presheaf-topos.html, 03-topos-basics.html, 05-sites.html, 07-giraud-axioms.html, 08-giraud-theorem.html
- Sentence: ・演習問題 6.3.26・6.3.27、S. Mac Lane, *Categories for the Working Mathematician*, 2nd ed., §IV.10 を参考にした（本文は写していない）。冪対象については、同書の「前層は表現可能関手の余極限」による証明ではなく、成分を直接書いて自然性と普遍性を確かめた。
  - `cat:universal-arrow`: NG — 「普遍性」は普遍射が持つ性質を指す語であり、普遍射そのものの定義とは異なる。

## 「最小元」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `set:well-order` → **no candidate fits**
- Pages: 04-presheaf-heyting.html, 07-giraud-axioms.html
- Sentence: - **ハイティング代数**は、最大元・最小元・二項の上限 $\vee$・下限 $\wedge$ をもつ束で、$c\wedge a\le b\iff c\le(a\Rightarrow b)$ を満たす二項演算 $\Rightarrow$ をもつもの（\ref{cat:page-cartesian-closed} の例 3）。$\neg a\defeq(a\Rig
  - `set:well-order`: NG — It refers to the least element of a lattice/poset, not specifically the $R$-least element of a subset under a well-order as defined in the card.

## 「有限次元」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `lin:dimension` → **no candidate fits**
- Pages: 09-etale-site.html
- Sentence: **Step 1（有限部分への帰着）.** $A\in\mathbf{Et}_{\Omega/K}$ について $F(A)$ は有限（$\lvert F(A)\rvert=\dim A$）。各 $\varphi\in F(A)$ の像は有限次元なので、有限個の生成元を含む有限ガロア部分拡大 $N$ がとれる（\ref{fld:finite-galois-exhaustion.1}、合成で有向）。すべての $\varphi$ について共通の $N$ をとると、$\operatorname{Hom}_{K}(A,N)=\operatorname{Hom}_{K}
  - `lin:dimension`: NG — Here "有限次元" describes the image of each $\varphi$ as a finite-dimensional vector space, which matches the card's definition of having finite dimension.
  - `at:cw-complex`: NG — Here "finite-dimensional" refers to a field extension having finite degree over K, not to a CW complex being finite-dimensional in the sense of the card.

## 「有限群」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `grp:abelian-group` → **no candidate fits**
- Pages: 05-sites.html, 09-etale-site.html
- Sentence: **位相の例.** スキームのエタール位相（エタール射の全射族で覆う）、平坦位相、群の作用の圏の位相などがある。副有限群 $G$ について、連続な $G$ 集合の圏はある位相の層の圏と同値で、体 $k$ の有限エタール代数の圏（\ref{fld:grothendieck-galois}）の反対圏に適切な位相を入れたサイトの層の圏は、$\operatorname{Gal}(k^{\mathrm{sep}}/k)$ の連続な作用をもつ集合の
  - `grp:abelian-group`: NG — Here "有限群" is part of "副有限群" (profinite group), a distinct notion, not the definition of a finite group.

## 「準同型」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `cat:t-algebra` → **fits: `grp:homomorphism`**
- Pages: 01-presheaf-topos.html, 04-presheaf-heyting.html
- Sentence: 終対象は自明な群 $1$ で、$\mathrm{true}\colon1\to\Omega$ の像は単位元 $\{e\}$。単射な準同型はモノ射である（$m\circ\alpha=m\circ\beta$ から各元で $\alpha=\beta$）。部分対象分類子があれば、単射な準同型 $m\colon S\to X$ は $\chi\colon X\to\Omega$ に沿った $\mathrm{true}$ の引き戻しで、それは集合として $\{x
  - `cat:t-algebra`: NG — Here "準同型" means a group homomorphism, not a homomorphism of T-algebras as defined in the card.
  - `grp:homomorphism`: OK

## 「生成系」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `mod:generated-submodule` → **fits: `cat:internal-equivalence-relation`**
- Pages: 05-sites.html
- Sentence: **グロタンディーク・トポスとジローの定理.** サイト上の層の圏と圏同値な圏を**グロタンディーク・トポス**という。ジローの定理は、グロタンディーク・トポスを「小さい生成系をもち、余極限が引き戻しで安定で、余積が交わらず、同値関係が有効な、局所的に小さい圏」として内在的に特徴づける（公理は \ref{cat:giraud-axioms}、証明は \ref{cat:sheaves-giraud} と \ref{cat:giraud-theorem}）。
  - `mod:generated-submodule`: NG — This "生成系" (generating set of a Grothendieck topos) is a different notion from the module-theoretic generating system defined in the card.
  - `cat:internal-equivalence-relation`: OK

## 「稠密」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `cat:dense-functor` → **no candidate fits**
- Pages: 05-sites.html, 07-giraud-axioms.html, 08-giraud-theorem.html
- Sentence: 部分前層 $A\subset B$ が **$J$ 稠密**であるとは、各 $b\in B(d)$ について $S_{b}\defeq\{g:e\to d : b\cdot g\in A(e)\}$ が $J(d)$ に入ることをいう。このとき、$J$ 層 $Q$ について、制限 $\widehat{\mathbf{C}}(B,Q)\to\widehat{\mathbf{C
  - `cat:dense-functor`: NG — This is a different notion: "dense with respect to a Grothendieck topology $J$" for a subpresheaf, not density of a functor via colimits.
  - `set:dense-set`: NG — This is a different notion: J-dense subsheaf relative to a Grothendieck topology J, not density in a partial order.
  - `set:separable-subset`: NG — This is a different notion: "J-dense" is a Grothendieck-topology density condition on a subpresheaf, not topological density of a subset D in a space A.
  - `pt:tree-forcing`: NG — This is a different notion: density of a subpresheaf with respect to a Grothendieck topology \(J\), not density of a subset of forcing conditions in a poset.
  - `top:separable-space`: NG — This is a different, category-theoretic notion of "dense" (relative to a Grothendieck topology $J$), not the topological density $\overline{D}=X$ defined in the card.

## 「等質空間」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `grp:faithful-transitive` → **no candidate fits**
- Pages: 09-etale-site.html
- Sentence: **分類トポス.** $\mathbf{B}G$ は「$G$ 主束の分類トポス」と呼ばれ、トポス $\mathcal{E}$ から $\mathbf{B}G$ への幾何学的射は $\mathcal{E}$ の中の $G$ トルソー（主等質空間）と対応することが知られている（本サイト未収録）。$G$ が有限群（離散）なら $\mathbf{B}G$ は前層トポス $\widehat{G}$（$G$ を 1 対象の圏と見る）で、\ref{cat:sheaves-continuous-gsets} は「有限 $G$ 集合と全射位相の層 ＝ すべての $G$ 集合
  - `grp:faithful-transitive`: NG — Here "等質空間" is used in the sense of a $G$-torsor (principal homogeneous space), which is a stronger/different notion than the card's definition of a homogeneous space as a transitive $G$-set (a torsor requires freeness, i.e., trivial stabilizers).

## 「被覆」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `cat:continuous-gsets` → **no candidate fits**
- Pages: 09-etale-site.html
- Sentence: 体 $K$ の有限エタール代数（\ref{fld:etale-algebra}）を「$\operatorname{Spec}K$ 上の被覆空間」とみなし、射の族が「全射的」であるときに被覆とすると、サイト（**小エタールサイト**）が得られる。グロタンディークのガロア理論（\ref{fld:grothendieck-galois}）によりこのサイトは有限な連続 $G$ 集合の圏（$G=\operatorname{Gal}(\Omega/K)$）と同値で、その上の層の圏は**連続な $G$ 集合の圏**と
  - `cat:continuous-gsets`: NG — This use of 被覆 refers to a covering family in the étale site (surjective families of étale morphisms), not the definition card's notion of a sieve being a cover in the topos-theoretic sense.
  - `at:covering`: NG — This is a Grothendieck topology covering (a family of morphisms), not a covering map in the sense of the card's definition.

## 「被覆空間」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `at:covering` → **no candidate fits**
- Pages: 09-etale-site.html
- Sentence: 体 $K$ の有限エタール代数（\ref{fld:etale-algebra}）を「$\operatorname{Spec}K$ 上の被覆空間」とみなし、射の族が「全射的」であるときに被覆とすると、サイト（**小エタールサイト**）が得られる。グロタンディークのガロア理論（\ref{fld:grothendieck-galois}）によりこのサイトは有限な連続 $G$ 集合の圏（$G=\operatorname{Gal}(\Omega/K)$）と同値で、その
  - `at:covering`: NG — Here "被覆空間" is used in the Grothendieck/étale sense (a finite étale algebra over Spec K), not the topological covering-space notion defined by the card.

## 「転置」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `cat:adjunction` → **no candidate fits**
- Pages: 01-presheaf-topos.html, 03-topos-basics.html
- Sentence: **Step 3（転置の構成）.** $\varphi\colon R\times P\to Q$ について、$r\in R(c)$ に対し
  - `cat:adjunction`: NG — Here 転置 refers to the transpose/currying of a map $\varphi\colon R\times P\to Q$ (a bijection between $\mathbf{Set}(R\times P,Q)$ and $\mathbf{Set}(R,Q^{P})$), not the adjunction transpose $\varphi(f)$ between hom-sets $\mathbf{A}(Fx,a)\cong\mathbf{X}(x,Ga)$ defined in the card.
  - `lin:dual-space`: NG — Here "転置" refers to transposing a map between sets/modules in a different construction, not the dual/transpose of a linear map defined in the card.

## 「逆像」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `cat:inverse-image` → **fits: `set:function`**
- Pages: 01-presheaf-topos.html, 04-presheaf-heyting.html
- Sentence: )$ で、すべての $s\in\Omega(1)$ について $a^{\ast}(u(s))=v(a^{\ast}s)$ を満たす組である。$\Omega(0)=\{\emptyset,\{1_{0}\}\}$ で、$a^{\ast}$ による\term[逆像]{set:function}は $\emptyset$ の逆像が $\{\emptyset\}$（1 点）、$\{1_{0}\}$ の逆像が $\{\{a\},t_{1}\}$（2 点）。$v$ を決めると、$u(\emptyset)$ は $v(\emptyset)$ の逆像から、$u(\{a\})$ と $u(t_{1})$ は $v(\{1_{0}\})$ の逆像から自由に
  - `cat:inverse-image`: NG — This "逆像" refers to the set-theoretic preimage of a function, not the (pre)sheaf inverse image defined in the card.
  - `set:function`: OK

## 「連続写像」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `top:continuous` → **no candidate fits**
- Pages: 08-giraud-theorem.html
- Sentence: **幾何学的射.** グロタンディーク・トポスの間の**幾何学的射** $f:\mathcal{F}\to\mathcal{E}$ は、左完全な左随伴 $f^{*}$ をもつ関手 $f_{*}$ のこと。連続写像 $X\to Y$ は $\mathbf{Sh}(X)\to\mathbf{Sh}(Y)$ の幾何学的射を誘導する（\ref{cat:inverse-direct-adjunction}）。ジローの定理と同じ方法で、「$\mathcal{E}$ から $\widehat{\mathbf{C}}$ への幾何学的射 ＝ $
  - `top:continuous`: NG — Here "連続写像" refers to a continuous map between topological spaces, which is exactly the notion defined in the card (a map continuous at every point), so the term matches the definition.

## 「開被覆」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `top:compact` → **no candidate fits**
- Pages: 02-sheaf-topos.html, 05-sites.html
- Sentence: - 開集合 $U$ の**開被覆** $U=\bigcup_{i\in I}U_{i}$（$U_{i}$ は開。$I=\emptyset$ も許す）、$U_{ij}\defeq U_{i}\cap U_{j}$、両立する族、**層**と層の圏 $\mathbf{Sh}(X)$（$\widehat{\mathcal{O}(X)}$ の充満部分圏）の定義
  - `top:compact`: NG — 「開被覆」は被覆する族のことであり、カードが定義する「コンパクト」や「有限交叉性」とは異なる概念である。

## 「順序同型」 in 01-foundations/06-category-theory/09-topos-theory
- Default: `set:order-isomorphism` → **no candidate fits**
- Pages: 08-giraud-theorem.html
- Sentence: 各 $Z\in\mathbf{E}$ について、$W\mapsto\Phi W$ は $Z$ の部分対象と $\Phi Z$ の部分層の間の順序同型。
  - `set:order-isomorphism`: NG — Here "順序同型" refers to an order isomorphism between a poset of subobjects and a poset of subsheaves, not the isomorphism of relational structures ⟨A,R⟩ defined in the card.

## 「エルミート」 in 02-algebra/01-linear-algebra/01-vector-spaces
- Default: `lin:adjoint` → **no candidate fits**
- Pages: 03-rank-elimination.html
- Sentence: み、行列式や逆行列もこの手間で計算できる（\ref{lin:page-determinant-properties}）。浮動小数点の計算では、絶対値の最も大きいピボットを選ぶ（**部分ピボット選択**）ことで誤差の増幅を抑えるのが標準的とされる。可換環上では割り算ができないので、ユークリッド環上では互除法による行変形でエルミート標準形・スミス標準形（\ref{mod:smith-normal-form}）を作る。また体上では $\mathrm{SL}_{n}$ は (III) 型の基本行列だけで生成されるが、一般の可換環ではそうとは限らず、その差が代数的 K 理論の $SK_{1}$ で測られることが知られている（本サイト未収録）。
  - `lin:adjoint`: NG — Here "エルミート" refers to Hermite normal form (エルミート標準形), not a self-adjoint operator/matrix as defined in the card.

## 「定義域」 in 02-algebra/01-linear-algebra/01-vector-spaces
- Default: `set:relation` → **no candidate fits**
- Pages: 02-linear-maps.html
- Sentence: 線形写像は基底の行き先だけで決まり、基底を固定すると行列と一対一に対応して、合成は行列の積になる。核と像の次元の和は定義域の次元（**次元定理**）で、これから有限次元では単射・全射・全単射が同値になる。商空間と双対空間を定義し、転置写像と零化空間の次元から「行の階数＝列の階数」を導く。
  - `set:relation`: NG — Here 定義域 means the domain of a linear map, not the domain of a relation as defined in the card.
  - `logic:rm-continuous-code`: NG — Here "定義域" refers to the domain of a linear map between vector spaces, not the domain of a continuous real function as defined in the card.

## 「普遍性」 in 02-algebra/01-linear-algebra/01-vector-spaces
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 01-spaces-bases.html, 02-linear-maps.html
- Sentence: - 一次独立・基底・自由加群・標準基底 $k^{(I)}$ は \ref{mod:free-module}、自由加群の普遍性（基底の行き先を任意に決めると線形写像が一意に定まる）は \ref{mod:free-module-universal}。
  - `cat:universal-arrow`: NG — 「普遍性」は普遍射そのものではなく、普遍射が持つ一意存在という性質を指す語であり、カードの定義する「普遍射」とは異なる概念である。

## 「準同型」 in 02-algebra/01-linear-algebra/01-vector-spaces
- Default: `grp:homomorphism` → **fits: `mod:submodule-homomorphism`**
- Pages: 01-spaces-bases.html
- Sentence: - 体 $k$ 上の**ベクトル空間**とは $k$ 加群のこと（\ref{mod:module}）。部分加群を**部分空間**、加群の準同型を**線形写像**という。部分加群・生成された部分加群・直和・同型定理は \ref{mod:submodule-basic}, \ref{mod:generated-submodule}, \ref{mod:direct-sum}, \ref{mod:isomorphism-theorems}。
  - `grp:homomorphism`: NG — Here "準同型" refers to a module homomorphism (linear map), not a group homomorphism as defined in the card.
  - `cat:t-algebra`: NG — Here "準同型" refers to a homomorphism of modules (linear map), not a homomorphism of T-algebras.
  - `ring:homomorphism`: NG — Here "準同型" refers to a homomorphism of modules (linear map), not a ring homomorphism as defined in the card.
  - `mod:submodule-homomorphism`: OK

## 「PID」 in 02-algebra/01-linear-algebra/02-determinants
- Default: `ring:pid` → **no candidate fits**
- Pages: 03-minors.html
- Sentence: 式は、積について**コーシー–ビネの公式** $\det(AB)_{I,J}=\sum_{K}\det A_{I,K}\det B_{K,J}$ に従う。体上では、階数は 0 でない小行列式の最大のサイズに等しい。可換環上では $k$ 次小行列式の生成するイデアル（**行列式イデアル**）が可逆行列による変形で不変で、PID 上ではスミス標準形の単因子の積を与える。ほかに、一般化されたラプラス展開、余因子行列の小行列式についてのヤコビの定理と、そこから従うデスナノ–ヤコビの恒等式（ドジソンの凝縮法）を示す。
  - `ring:pid`: NG — Here "PID" refers to a principal ideal domain, which matches the card's definition of 単項イデアル整域.

## 「グラム行列」 in 02-algebra/01-linear-algebra/02-determinants
- Default: `lin:bilinear-form` → **no candidate fits**
- Pages: 03-minors.html
- Sentence: **似た定理.** グラム行列式 $\det({}^{t}XX)=\sum_{K}(\det X_{K,[m]})^{2}$（コーシー–ビネで $Y={}^{t}X$）は、$\mathbb{R}^{n}$ の $m$ 個のベクトルが張る平行体の $m$ 次元体積の 2 乗が、座標部分空間への射影の体積の 2 乗の和であること（ピタゴラスの定理の高次
  - `lin:bilinear-form`: NG — It refers to the Gram determinant (グラム行列式), not the Gram matrix itself.

## 「ノルム」 in 02-algebra/01-linear-algebra/02-determinants
- Default: `lin:inner-product` → **fits: `calc:norm`**
- Pages: 01-definitions.html
- Sentence: 用（基底によらない定義）、(D4) 第 1 列についての余因子展開による帰納的定義、の同値性を示す。(D3) から乗法性 $\det(AB)=\det A\det B$ が直ちに従う。体上では (D5) 掃き出し法のピボットの積、(D6) 乗法的で基本行列に対する値が決まった関数、とも一致する。固有値・外積代数・体積・ノルムによる定義は後の頁で扱う（最後の注意に一覧）。
  - `lin:inner-product`: NG — ノルム is only mentioned as a later definition of determinant, not defined as the inner-product norm from the card.
  - `comp:pi11-norm`: NG — This "ノルム" refers to a vector/matrix norm (or determinant-related norm), not the computability-theoretic norm function from a set $A\subseteq\N$ to ordinals defined in the card.
  - `calc:norm`: OK

## 「交換子」 in 02-algebra/01-linear-algebra/02-determinants
- Default: `grp:commutator-subgroup` → **no candidate fits**
- Pages: 01-definitions.html
- Sentence: （2）を含み、これが「$\operatorname{Alt}^{n}(A^{n})$ は階数 1 の自由加群」という普遍性の形である。(D6) で $T_{ij}(c)$ の条件は、$|k|\ge3$ なら乗法性から自動的に従う（$T_{ij}((a-1)b)$ は $D_{i}(a)$ と $T_{ij}(b)$ の交換子で、$f$ の値は可換な $k$ に入るので $1$）。
  - `grp:commutator-subgroup`: NG — Here "交換子" refers to a commutator of two matrices/linear maps in a general algebraic setting, not specifically the group-theoretic commutator $[x,y]=xyx^{-1}y^{-1}$ defined in the card.

## 「小行列式による」 in 02-algebra/01-linear-algebra/02-determinants
- Default: `calc:dx-minor` → **no candidate fits**
- Pages: 03-minors.html
- Sentence: **計算の観点.** ドジソンの凝縮法は、デスナノ–ヤコビの恒等式を繰り返して $n$ 次の行列式を、隣接する $2\times2$ の行列式の計算の繰り返しで求める方法で、途中の内部の小行列式で割るので、それが $0$ になると工夫が要る。小行列式による階数の判定は、記号的な成分の行列や、パラメータに依存する行列の階数の変化（\ref{ag:elimination-theorem} の Step 3）を調べるのに使われる。
  - `calc:dx-minor`: NG — the term is used as a general phrase about minors, not as the specific definition of the differential form \(dx_{A}\).

## 「普遍性」 in 02-algebra/01-linear-algebra/02-determinants
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 01-definitions.html
- Sentence: - 自由加群・標準基底・自由加群の普遍性は \ref{mod:free-module}, \ref{mod:free-module-universal}。階数の一意性は \ref{mod:rank-invariance}。
  - `cat:universal-arrow`: NG — 「普遍性」は普遍射が持つ性質を指す語であり、普遍射そのものの定義とは異なる。

## 「有限生成」 in 02-algebra/01-linear-algebra/02-determinants
- Default: `grp:generated-subgroup` → **fits: `ring:generated-ideal-def`**
- Pages: 01-definitions.html, 02-properties.html
- Sentence: - **自由であること**：\ref{lin:det-endomorphism} で $\operatorname{Alt}^{n}(M)$ が階数 1 の自由加群であることに使う。有限生成射影加群では、局所的に自由なので同じ定義が局所的に通る。
  - `grp:generated-subgroup`: NG — Here "有限生成" modifies a module (有限生成射影加群), not a group, so it is a different notion from the group-theoretic definition on the card.
  - `ring:generated-ideal-def`: OK

## 「線形写像の行列」 in 02-algebra/01-linear-algebra/02-determinants
- Default: `lin:matrix-of-map` → **no candidate fits**
- Pages: 01-definitions.html
- Sentence: 線形写像の行列式は、基底を選ばずに、体積を測る交代形式が何倍になるかとして定義でき、どの基底で表した行列の行列式とも一致する。
  - `lin:matrix-of-map`: NG — the sentence uses "線形写像の行列式" (determinant of a linear map), not the matrix/representation matrix defined in the card.

## 「自己準同型」 in 02-algebra/01-linear-algebra/02-determinants
- Default: `ring:homomorphism` → **no candidate fits**
- Pages: 01-definitions.html, 02-properties.html
- Sentence: 2. $f\in\operatorname{End}_{A}(M)$ について $f^{*}\omega\defeq\omega(f-,\dots,f-)$ は $\operatorname{Alt}^{n}(M)$ の自己準同型で、ただ一つの $c_{f}\in A$ により $f^{*}\omega=c_{f}\omega$（すべての $\omega$）。$\det f\defeq c_{f}$ とおく（**(D3)**）。
  - `ring:homomorphism`: NG — Here "自己準同型" refers to an endomorphism of the module $\operatorname{Alt}^{n}(M)$ (an $A$-module endomorphism), not an endomorphism of a ring as defined in the card.

## 「転置」 in 02-algebra/01-linear-algebra/02-determinants
- Default: `lin:dual-space` → **no candidate fits**
- Pages: 01-definitions.html, 02-properties.html, 03-minors.html
- Sentence: 行列式は、列について多重線形で、同じ列が二つあれば 0 になり、単位行列で 1 になる、という三つの性質だけでただ一つに決まる。転置しても値は変わらない。
  - `lin:dual-space`: NG — Here "転置" refers to matrix transpose, not the transpose of a linear map between dual spaces as defined in the card.
  - `cat:adjunction`: NG — This "転置" refers to matrix transpose, not the adjunction's transposition of a morphism.

## 「ライプニッツの式」 in 02-algebra/01-linear-algebra/03-eigen
- Default: `lin:leibniz-formula` → **no candidate fits**
- Pages: 03-functions.html
- Sentence: ライプニッツの式で各項は $n$ 個の成分の積で、積の微分法則から $\frac{d}{ds}\det X=\sum_{j}\det X^{[j]}$（$X^{[j]}$ は第 $j$ 列を微分したもの）。第 $j$ 列で余因子展開すると $\det X^{[j]}=\sum_{i}x_{ij}'\Delta_{ij}$。よって和は 
  - `lin:leibniz-formula`: NG — Here "ライプニッツの式" refers to the Leibniz formula for the derivative of a determinant, not the definition of the determinant itself.

## 「作用素ノルム」 in 02-algebra/01-linear-algebra/03-eigen
- Default: `calc:operator-norm` → **no candidate fits**
- Pages: 03-functions.html
- Sentence: - $X\in M_{n}(\mathbb{C})$ の**作用素ノルム**を $\|X\|\defeq\max_{i}\sum_{j}|x_{ij}|$（最大行和）とする。$\|X+Y\|\le\|X\|+\|Y\|$, $\|XY\|\le\|X\|\|Y\|$, $|x_{ij}|\le\|X\|$（$\|Xv\|_{\infty}\le\|X\|\|v\|_{\infty}$ によ
  - `calc:operator-norm`: NG — It defines the operator norm as the maximum row sum, not the supremum of |Ax| over the unit ball.

## 「剰余体」 in 02-algebra/01-linear-algebra/03-eigen
- Default: `ring:local-ring` → **no candidate fits**
- Pages: 01-eigenvalues.html
- Sentence: 可換環 $A$ 上の冪零行列 $X$ について、$\chi_{X}-t^{n}$ の係数はすべて冪零であることが知られている（各素イデアル $\mathfrak{p}$ について剰余体 $\kappa(\mathfrak{p})$ 上で上の命題を使い、冪零根基が素イデアルの共通部分であること \ref{ring:nilradical} を使う）。とくに $\operatorname{tr}X$ は冪零だが $0$ とは限らない：$A=k[\varepsilon]/(\varepsilon^{2})$
  - `ring:local-ring`: NG — Here 剰余体 means the residue field κ(𝔭)=Frac(A/𝔭) at a prime ideal, not the residue field A/𝔪 of a local ring as defined in the card.

## 「基底」 in 02-algebra/01-linear-algebra/03-eigen
- Default: `mod:free-module` → **no candidate fits**
- Pages: 01-eigenvalues.html, 02-jordan.html, 03-functions.html, 04-exercises.html
- Sentence: - 線形写像と行列・基底変換・次元定理・直和は \ref{lin:matrix-correspondence}, \ref{lin:change-of-basis}, \ref{lin:rank-nullity}, \ref{lin:sum-direct-sum}。
  - `mod:free-module`: NG — Here "基底" appears only as part of the compound term "基底変換" (change of basis), not as the module-theoretic notion of a basis defined in the card.
  - `grp:free-abelian`: NG — Here 基底 refers to a basis of a vector space in linear algebra, not a basis of a free abelian group.

## 「対称群」 in 02-algebra/01-linear-algebra/03-eigen
- Default: `grp:symmetric-group` → **no candidate fits**
- Pages: 02-jordan.html
- Sentence: 般固有空間（$\operatorname{Spec}k[t]$ の点ごとの局所化）に分け、各点でヤング図形（細胞の大きさの分割）を与える」分類で、\ref{lin:jordan-normal-form.2} は分割を $\dim\ker$ の差から読む公式である。冪零行列の相似類が $n$ の分割と一対一であることは、対称群の表現論や旗多様体の幾何（シュプリンガー対応）の出発点になっている。比喩で言えば、行列の相似類は、各固有値という「部屋」ごとに積まれた積み木（ジョルダン細胞）の形で、その形は「何回 $X-\lambda$ を掛けると消えるか」を数えるだけで読み取れる。
  - `grp:symmetric-group`: NG — Here "対称群" refers to the symmetric group in the context of representation theory and flag varieties, which matches the definition (the symmetric group $S_{n}$), so it is the same notion.

## 「微分係数」 in 02-algebra/01-linear-algebra/03-eigen
- Default: `calc:derivative` → **no candidate fits**
- Pages: 03-functions.html
- Sentence: 行列の多項式 $f(X)$ は $f$ を最小多項式で割った余りだけで決まり、固有値での値（と微分係数）から補間で求まる。これを使って、べき級数で定まる関数（とくに**行列の指数関数** $e^{X}$）を扱い、$e^{X+Y}=e^{X}e^{Y}$（$XY=YX$）と $\det e^{X}=e^{\operatorname{tr}X}$ を示す。固有多項式の係数はトレースの冪から**ニュートンの恒等式**で決まり
  - `calc:derivative`: NG — Here "微分係数" refers to the derivative values of a polynomial at eigenvalues (used in Hermite interpolation), not the real-analysis limit definition of derivative at a point on an interval.

## 「最大公約数」 in 02-algebra/01-linear-algebra/03-eigen
- Default: `grp:gcd` → **no candidate fits**
- Pages: 02-jordan.html
- Sentence: **Step 2（2）.** $I_{j}(tI-X)$ の生成元のモニックな最大公約数は、$k[t]$ で計算しても $K[t]$ で計算しても同じ（ユークリッドの互除法は係数体を拡げても同じ結果を与え、$\gcd$ は $k[t]$ に入る）。$K$ 上で相似なら $K[t]$ で一致し、したがって $k[t]$ でも一致する。
  - `grp:gcd`: NG — the card defines gcd for integers in $\Z$, while the sentence uses gcd for polynomials in $k[t]$ (a different ring).

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
  - `grp:generated-subgroup`: NG — Here "有限生成" modifies modules over a PID, not groups, so it is a different (though analogous) notion from the card's finitely generated group.
  - `ring:generated-ideal-def`: NG — Here "有限生成" modifies 加群 (modules), not ideals, so it does not have the card's ideal-theoretic meaning.
  - `mod:generated-submodule`: OK

## 「次元」 in 02-algebra/01-linear-algebra/03-eigen
- Default: `lin:dimension` → **no candidate fits**
- Pages: 01-eigenvalues.html, 02-jordan.html, 04-exercises.html
- Sentence: orname{tr}X$ と $\det X$ を含む。**ケーリー–ハミルトンの定理** $\chi_{X}(X)=0$ を任意の可換環上で余因子行列から証明する。体上では、固有値は $\chi_{X}$ の根で、**最小多項式**は $\chi_{X}$ を割り切り同じ根をもつ。対角化可能性を最小多項式・固有空間の次元で特徴付け、固有多項式が一次式に分解すれば三角化できること、冪零行列の固有多項式が $t^{n}$ でトレースが $0$ であることを示す。
  - `lin:dimension`: NG — Here "次元" refers to the dimension of an eigenspace (a subspace), which is the same notion as the vector-space dimension defined in the card.
  - `cat:trace-dimension`: NG — Here "次元" refers to the dimension of an eigenspace in linear algebra, not the categorical dimension $\dim a=\operatorname{tr}(1_{a})$ defined in the card.
  - `ring:krull-dimension`: NG — Here "次元" refers to the dimension of an eigenspace (a vector space dimension), not the Krull dimension of a ring defined in the card.
  - `ag:dimension`: NG — Here "次元" refers to the dimension of an eigenspace (a vector space dimension), not the dimension of a topological space defined via chains of irreducible closed subsets.

## 「転置」 in 02-algebra/01-linear-algebra/03-eigen
- Default: `lin:dual-space` → **no candidate fits**
- Pages: 02-jordan.html, 03-functions.html, 04-exercises.html
- Sentence: **Step 3（3）.** $tI-{}^{t}X={}^{t}(tI-X)$ で、転置しても小行列式の集合は変わらない（\ref{lin:det-characterization.4}）ので、行列式イデアルが一致する。
  - `lin:dual-space`: NG — Here "転置" refers to the transpose of a matrix (${}^{t}X$), not the transpose of a linear map $f^{*}:W^{*}\to V^{*}$ defined in the card.
  - `cat:adjunction`: NG — This "転置" refers to matrix transpose, not the adjunction's transposed morphism φ(f).

## 「連結成分」 in 02-algebra/01-linear-algebra/03-eigen
- Default: `top:components` → **no candidate fits**
- Pages: 03-functions.html
- Sentence: **似た定理.** ゲルシュゴリンの定理は列についても成り立ち（転置）、各連結成分に含まれる固有値の個数は円板の個数に等しいことも知られている（連続性による議論）。
  - `top:components`: NG — Here "連結成分" refers to connected components of a graph (eigenvalue distribution), not the topological connected component defined in the card.

## 「エルミート形式」 in 02-algebra/01-linear-algebra/04-forms
- Default: `lin:inner-product` → **no candidate fits**
- Pages: 01-bilinear.html
- Sentence: $V^{*}$ を同時に基底変換する」ことにあたる（相似 $P^{-1}XP$ が $V\to V$ の変換であるのと対照的）。非退化な対称形式の自己同型群が直交群 $\mathrm{O}(B)$、非退化な交代形式の自己同型群がシンプレクティック群 $\mathrm{Sp}_{2m}$ で、古典群の分類はこの二種類（とエルミート形式によるユニタリ群）の形式の分類に帰着する。パフィアンは $\mathrm{Sp}_{2m}\subset\mathrm{SL}_{2m}$（$\det P=\operatorname{Pf}({}^{t}PJP)=\operatorname{Pf}J=1$）を与える。比喩で言えば、対称形式は空間に「長さの物差し」を、交
  - `lin:inner-product`: NG — エルミート形式は内積そのものではなく、内積が定める（または内積を含む）より広い概念であり、カードの定義する「内積」とは同一の概念ではない。

## 「コンパクト」 in 02-algebra/01-linear-algebra/04-forms
- Default: `top:compact` → **no candidate fits**
- Pages: 02-inner-product.html
- Sentence: - **有限次元**：随伴の存在と、シューア分解の帰納法に使う。無限次元（ヒルベルト空間）では、コンパクト自己随伴作用素のスペクトル定理など関数解析の議論が要る。
  - `top:compact`: NG — Here "コンパクト" modifies "自己随伴作用素" (compact self-adjoint operator), meaning a compact operator in functional analysis, not a compact topological space or subset as defined in the card.

## 「ユニタリ」 in 02-algebra/01-linear-algebra/04-forms
- Default: `lin:adjoint` → **no candidate fits**
- Pages: 01-bilinear.html, 02-inner-product.html
- Sentence: 時に基底変換する」ことにあたる（相似 $P^{-1}XP$ が $V\to V$ の変換であるのと対照的）。非退化な対称形式の自己同型群が直交群 $\mathrm{O}(B)$、非退化な交代形式の自己同型群がシンプレクティック群 $\mathrm{Sp}_{2m}$ で、古典群の分類はこの二種類（とエルミート形式によるユニタリ群）の形式の分類に帰着する。パフィアンは $\mathrm{Sp}_{2m}\subset\mathrm{SL}_{2m}$（$\det P=\operatorname{Pf}({}^{t}PJP)=\operatorname{Pf}J=1$）を与える。比喩で言えば、対称形式は空間に「長さの物差し」を、交代形式は「向き
  - `lin:adjoint`: NG — Here ユニタリ refers to the unitary group preserving a Hermitian form, not the unitary operator defined by $f^{*}f=1$.

## 「同じ向き」 in 02-algebra/01-linear-algebra/04-forms
- Default: `lin:orientation` → **no candidate fits**
- Pages: 02-inner-product.html
- Sentence: 二つのベクトルの内積の大きさは、長さの積を超えず、等しくなるのは二つが同じ向き（または逆向き）に並んでいるときだけである。ここから三角不等式が従う。
  - `lin:orientation`: NG — Here "同じ向き" refers to two vectors pointing in the same direction (parallel vectors), not to ordered bases having a positive-determinant change-of-basis matrix.

## 「最小多項式」 in 02-algebra/01-linear-algebra/04-forms
- Default: `fld:minimal-polynomial` → **no candidate fits**
- Pages: 02-inner-product.html
- Sentence: - 双線形形式・直交補空間・シルヴェスターの判定法は \ref{lin:bilinear-form}, \ref{lin:orthogonal-complement}, \tref{lin:sylvester-criterion}。固有値・三角化・対角化・同時対角化・最小多項式は \ref{lin:char-poly}, \ref{lin:triangularization}, \ref{lin:diagonalizable}, \ref{lin:simultaneous-diagonalization}, \ref{lin:minimal-polynomial}。代数学の基本定理（$\ma
  - `fld:minimal-polynomial`: NG — In this sentence "最小多項式" refers to the minimal polynomial of a linear operator (linear algebra), not the minimal polynomial of an algebraic element over a field extension as defined in the card.

## 「正規」 in 02-algebra/01-linear-algebra/04-forms
- Default: `lin:adjoint` → **no candidate fits**
- Pages: 02-inner-product.html, 03-exercises.html
- Sentence: langle e_{i},v\rangle e_{i}$ は $V=W\oplus W^{\perp}$ に沿った射影で、$\|v-P_{W}v\|<\|v-w\|$（$w\in W$, $w\neq P_{W}v$）。$W=\operatorname{Col}(X)$ なら $P_{W}v=Xc$ の $c$ は**正規方程式** $X^{*}Xc=X^{*}v$ の解。
  - `lin:adjoint`: NG — Here 正規 refers to the normal equations, not a normal operator as defined in the card.
  - `set:normal-function`: NG — Here "正規" is part of "正規方程式" (normal equation) in linear algebra, not the set-theoretic notion of a normal function on ordinals.
  - `fld:normal`: NG — Here "正規" is part of "正規方程式" (normal equation) in linear algebra, not the field-theory notion of a normal extension.
  - `top:separation-axioms`: NG — Here "正規" is part of "正規方程式" (normal equation) in linear algebra, not the separation axiom notion of normal topological space.

## 「自己準同型」 in 02-algebra/01-linear-algebra/04-forms
- Default: `ring:homomorphism` → **no candidate fits**
- Pages: 02-inner-product.html
- Sentence: 有限次元内積空間の自己準同型 $f$ について、$\langle fv,w\rangle=\langle v,f^{*}w\rangle$ となる $f^{*}$ がただ一つあり（**随伴**）、正規直交基底での行列は $[f]^{*}$。$f^{*}=f$ を**自己随伴**（行列は**エルミート**、実なら**対称**）、$f^{*}f=1$
  - `ring:homomorphism`: NG — Here "自己準同型" means an endomorphism of an inner product space (a linear map), not a ring endomorphism as defined in the card.

## 「連続関数」 in 02-algebra/01-linear-algebra/04-forms
- Default: `calc:function-limit` → **no candidate fits**
- Pages: 02-inner-product.html
- Sentence: もとでの転置である。スペクトル定理は「正規作用素の可換な $*$ 部分環 $\mathbb{C}[X,X^{*}]$ は、固有空間への直交射影で張られる $\mathbb{C}^{r}$ と同型」すなわち有限集合（スペクトル）上の関数環であることを言い、ゲルファント–ナイマルクの定理（可換 C* 環はコンパクト空間上の連続関数環）の有限次元版である。特異値分解は、両側のユニタリ群 $\mathrm{U}(m)\times\mathrm{U}(n)$ による $M_{m\times n}$ の軌道が特異値の列で分類されることを言う。比喩で言えば、正規作用素は直交する方向ごとに独立に伸び縮みする（回転を含む）変換で、一般の変換は特異値分解によっ
  - `calc:function-limit`: NG — Here "連続関数環" means the ring of continuous functions on a compact space, not the real-analysis notion of a continuous function defined in the card.
  - `logic:rm-continuous-code`: NG — Here "連続関数環" refers to the ring of continuous functions on a compact space (Gelfand–Naimark), not the specific notion of a continuous function's "sign" defined in the card.
  - `cx:limit-continuity`: NG — “連続関数” here refers to continuous functions on a compact space in the Gelfant–Naimark theorem, not the complex-function continuity definition on a subset of $\C$ given in the card.

## 「部分環」 in 02-algebra/01-linear-algebra/04-forms
- Default: `ring:subring` → **no candidate fits**
- Pages: 02-inner-product.html
- Sentence: 内積は $V\cong\bar{V}^{*}$ という同一視（$v\mapsto\langle v,-\rangle$）を与え、随伴はこの同一視のもとでの転置である。スペクトル定理は「正規作用素の可換な $*$ 部分環 $\mathbb{C}[X,X^{*}]$ は、固有空間への直交射影で張られる $\mathbb{C}^{r}$ と同型」すなわち有限集合（スペクトル）上の関数環であることを言い、ゲルファント–ナイマルクの定理（可換 C* 環はコンパクト空間上の連続関数環）の有限次元版である。特異値分解は、両側のユニタリ群 $\ma
  - `ring:subring`: NG — Here "部分環" refers to a *-subalgebra of operators (a subring closed under the adjoint), not a subring of a ring containing 1 in the sense of definition 1.11.

## 「上界」 in 02-algebra/01-linear-algebra/05-multilinear
- Default: `set:chain-maximal` → **no candidate fits**
- Pages: 03-applications.html
- Sentence: 3. $2\times2$ 行列の積を表すテンソル（$M_{2}\otimes M_{2}\otimes M_{2}$ の元）の階数は $7$ で（ストラッセンの上界とウィノグラードの下界）、これが掛け算 7 回の行列積アルゴリズムを与える。一般の行列積の計算量の指数 $\omega$ の決定は未解決の問題である。
  - `set:chain-maximal`: NG — Here "上界" means an upper bound on the rank (an upper estimate), not an upper bound of a subset in a partially ordered set as defined in the card.

## 「下界」 in 02-algebra/01-linear-algebra/05-multilinear
- Default: `calc:supremum` → **no candidate fits**
- Pages: 03-applications.html
- Sentence: 3. $2\times2$ 行列の積を表すテンソル（$M_{2}\otimes M_{2}\otimes M_{2}$ の元）の階数は $7$ で（ストラッセンの上界とウィノグラードの下界）、これが掛け算 7 回の行列積アルゴリズムを与える。一般の行列積の計算量の指数 $\omega$ の決定は未解決の問題である。
  - `calc:supremum`: NG — Here "下界" refers to a lower bound on the tensor rank (a complexity-theoretic bound), not the order-theoretic lower bound of a subset of a totally ordered set as defined in the card.

## 「代数の準同型」 in 02-algebra/01-linear-algebra/05-multilinear
- Default: `ring:algebra` → **no candidate fits**
- Pages: 01-tensor.html, 02-exterior.html
- Sentence: 自由加群のテンソル積の基底、$M^{*}\otimes N\cong\operatorname{Hom}(M,N)$（有限生成自由なとき）、線形写像のテンソル積（クロネッカー積）のトレースと行列式を示す。続いて**テンソル代数** $T(M)=\bigoplus_{k}M^{\otimes k}$ の普遍性（線形写像は代数の準同型に一意に延びる）を示し、ベクトル空間上の $(p,q)$ 型テンソル、成分の変換法則、縮約、トレースが縮約であることを述べる。
  - `ring:algebra`: NG — Here "代数の準同型" refers to an algebra homomorphism between tensor algebras (a map preserving multiplication), not specifically a homomorphism of algebras over a commutative ring A as defined in the card.

## 「代数閉包」 in 02-algebra/01-linear-algebra/05-multilinear
- Default: `fld:algebraically-closed` → **no candidate fits**
- Pages: 04-exercises.html
- Sentence: $Ae_{i}\wedge Ae_{j}=\sum_{k<l}\det A_{\{k,l\},\{i,j\}}e_{k}\wedge e_{l}$（展開して $e_{k}\wedge e_{l}$ の係数を集める）。行列式：代数閉包で $A$ を上三角化すると $\Lambda^{2}A$ も（適当な順序で）三角になり、対角成分は $\lambda_{i}\lambda_{j}$（$i<j$）、積は $(\lambda_{1}\lambda_{2}\lambda_{3})^{2}$。例：$\Lambda^{2}A=\begin{pmatrix}-
  - `fld:algebraically-closed`: NG — Here "代数閉包" refers to an algebraic closure of the base field used to triangularize a matrix, not the field-theoretic notion of an algebraic closure as a specific algebraic extension defined in the card.

## 「対称」 in 02-algebra/01-linear-algebra/05-multilinear
- Default: `lin:bilinear-form` → **no candidate fits**
- Pages: 01-tensor.html, 02-exterior.html, 03-applications.html
- Sentence: テンソル積は、双線形写像という非線形な対象を線形写像に変える普遍的な構成で、圏論的には加群の圏を**対称モノイダル閉圏**（$\operatorname{Hom}$ が右随伴）にする（\ref{ha:tensor-hom-adjunction}）。有限次元ベクトル空間の圏では各対象が双対 $V^{*}$ をもち、$V^{*}\otimes V\to k$（縮約）と $k\to V\otimes V^{*}$（恒等写像）が
  - `lin:bilinear-form`: NG — Here "対称" is part of "対称モノイダル閉圏" (symmetric monoidal closed category), not the symmetry of a bilinear form.
  - `lin:adjoint`: NG — Here「対称」 refers to a symmetric monoidal closed category, not a self-adjoint operator (Hermitian/symmetric matrix).

## 「普遍性」 in 02-algebra/01-linear-algebra/05-multilinear
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 01-tensor.html, 02-exterior.html
- Sentence: 可換環 $A$ 上の加群のテンソル積（加群論で定義済み）を、線形代数の言葉で整理する。多重線形写像の普遍性、自由加群のテンソル積の基底、$M^{*}\otimes N\cong\operatorname{Hom}(M,N)$（有限生成自由なとき）、線形写像のテンソル積（クロネッカー積）のトレースと行列式を示す。続いて**テンソル代数** $T(M)=\bigoplus_{k}M^{\otimes k}$ の普遍性（線形写像
  - `cat:universal-arrow`: NG — 「普遍性」は普遍的性質という一般的な概念を指し、カードが定義する「普遍射」という特定の組（対象と射）とは異なる。

## 「有限生成」 in 02-algebra/01-linear-algebra/05-multilinear
- Default: `ring:generated-ideal-def` → **fits: `mod:generated-submodule`**
- Pages: 02-exterior.html
- Sentence: 2. $M$ が有限生成自由なら、$\langle\varphi_{1}\wedge\dots\wedge\varphi_{k},v_{1}\wedge\dots\wedge v_{k}\rangle\defeq\det(\varphi_{i}(v_{j}))$ は完全な対を与え、$\Lambda^{k}(M^{*})\cong(\Lambd
  - `ring:generated-ideal-def`: NG — Here "有限生成" modifies a module $M$ (finitely generated free module), not an ideal as in the card's definition.
  - `grp:generated-subgroup`: NG — Here "有限生成" modifies a module (有限生成自由加群), not a group, so it is not the group-theoretic notion defined in the card.
  - `mod:generated-submodule`: OK

## 「正規」 in 02-algebra/01-linear-algebra/05-multilinear
- Default: `lin:adjoint` → **no candidate fits**
- Pages: 03-applications.html
- Sentence: **Step 2（2）.** 前半は定義、後半は \ref{lin:exterior-basis} の展開 $v_{1}\wedge\dots\wedge v_{k}=\sum_{I}\det X_{I,[k]}e_{I}$ と正規直交性（あるいは $G={}^{t}XX$ とコーシー–ビネ）。
  - `lin:adjoint`: NG — Here「正規」is part of「正規直交性」meaning orthonormality, not the normal operator (f*f=ff*) defined in the card.
  - `set:normal-function`: NG — Here "正規直交性" refers to orthonormality of a basis, not the set-theoretic notion of a normal (increasing and continuous) class function.
  - `fld:normal`: NG — Here "正規直交性" means orthonormality of a basis, not the field-theoretic notion of a normal extension.
  - `top:separation-axioms`: NG — Here "正規" is part of "正規直交性" (orthonormality), not the normal/separation axiom for topological spaces.

## 「自己同型」 in 02-algebra/01-linear-algebra/05-multilinear
- Default: `ring:homomorphism` → **no candidate fits**
- Pages: 03-applications.html
- Sentence: うど二つ（$V\neq0$）。その一方を選ぶことを**向き付け**という。$\Lambda^{n}V\cong\mathbb{R}$ の $0$ でない元 $\omega$ を一つ選ぶことと同値で（$b_{1}\wedge\dots\wedge b_{n}$ が $\omega$ の正の倍数になる基底が「正の向き」）、自己同型 $f$ は $\det f>0$ のとき**向きを保つ**。
  - `ring:homomorphism`: NG — Here "自己同型" refers to an automorphism of a vector space (a bijective linear map), not an automorphism of a ring as defined in the card.
  - `grp:homomorphism`: NG — Here "自己同型" refers to an automorphism of a vector space (a linear isomorphism), not an automorphism of a group as defined in the card.

## 「転置」 in 02-algebra/01-linear-algebra/05-multilinear
- Default: `lin:dual-space` → **no candidate fits**
- Pages: 01-tensor.html
- Sentence: s}(v)w_{s}$ の像は $\langle w_{1},\dots,w_{r}\rangle$ に含まれ、$\varphi_{s}$ が一次独立なので $(\varphi_{s}(v))_{s}$ は $k^{r}$ 全体を動き（$V\to k^{r}$, $v\mapsto(\varphi_{s}(v))$ の転置が単射：\ref{lin:dual-properties}）、像はちょうど $\langle w_{s}\rangle$、階数 $r$。とくに $t\neq0$ なら $\Theta(t)\neq0$ で単射。有限階数の $f$ は、像の基底 $w_{1},\dots,w_{r}$ と $f(v)=\sum\varph
  - `lin:dual-space`: NG — Here "転置" refers to the transpose of the linear map $V\to k^{r}$ (the dual map), which matches the card's definition of the transpose $f^{*}(\varphi)=\varphi\circ f$.
  - `cat:adjunction`: NG — Here 転置 refers to the transpose of a linear map (a matrix/linear-algebra notion), not the adjunction transpose φ(f) defined in the card.

## 「ホモロジー」 in 02-algebra/02-group-theory/01-groups
- Default: `ha:homology` → **no candidate fits**
- Pages: 07-extensions.html
- Sentence: **コホモロジーとの関係.** $N$ が可換なとき、$G/N$ の $N$ による拡大（$G/N$ の $N$ への作用を固定したもの）の同値類は、群のコホモロジー $H^{2}(G/N,N)$ と一対一に対応し、分裂する拡大は $0$ にあたる。上の証明の「$m$ 乗根をとって平均する」操作は、$\abs{G/N}$ が $\ab
  - `ha:homology`: NG — one short English sentence why

## 「推移的」 in 02-algebra/02-group-theory/01-groups
- Default: `grp:faithful-transitive` → **no candidate fits**
- Pages: 07-extensions.html
- Sentence: - 推移的：$S,T\in\mathcal{T}$ について、$a^{m}=d(S,T)^{-1}$ となる $a\in N$ をとる。Step 1 の関係式から $d(aS,T)=d(aS,S)\,d(S,T)=a^{m}d(S,T)=e$、すなわち $a\cdot[S]=[T]$。
  - `grp:faithful-transitive`: NG — Here "推移的" describes a group action being transitive (some $a$ maps $[S]$ to $[T]$), which matches the card's definition of a transitive action.
  - `logic:relation-properties`: NG — Here "推移的" is used as a label for a step in a proof (a transitive relation between distances), not the property of a relation R on W being transitive as defined in the card.

## 「普遍性」 in 02-algebra/02-group-theory/01-groups
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 04-normal-quotient.html, 05-homomorphism-theorems.html, 06-products.html
- Sentence: **可換化.** $G/[G,G]$ を $G$ の**可換化**（abelianization）という。「$G$ から可換群への準同型は $G/[G,G]$ を経由する」という普遍性をもつ（
  - `cat:universal-arrow`: NG — 「普遍性」は普遍射の性質を指す一般的な語であり、カードが定義する「普遍射」そのものではない。

## 「生成された部分代数」 in 02-algebra/02-group-theory/01-groups
- Default: `ring:multivariate-polynomial` → **no candidate fits**
- Pages: 01-groups-subgroups.html
- Sentence: 高い視点（普遍代数）.** 群を、二項演算・単項演算 $a\mapsto a^{-1}$・定数 $e$ をもつ代数系とみると、部分群は「すべての演算で閉じた部分集合」（部分代数）にほかならない。このとき条件 $H\neq\emptyset$ は定数 $e$ で閉じることに吸収される。部分代数の共通部分は部分代数なので、生成された部分代数 $\ang{S}$ が「最小の閉じた集合」として定まり、それが項（ここでは語 $x_{1}\cdots x_{k}$）の値全体と一致する、という \ref{grp:generated-subgroup-words} の形は、どんな代数系でも成り立つ一般的な構造である。
  - `ring:multivariate-polynomial`: NG — This is the general universal-algebra notion of a subalgebra generated by a set, not the specific commutative-algebra notion of a subalgebra of an $A$-algebra generated by elements $b_{1},\dots,b_{n}$.

## 「射影」 in 02-algebra/02-group-theory/02-group-actions
- Default: `grp:direct-product` → **no candidate fits**
- Pages: 06-simplicity-an.html
- Sentence: **Step 3（$N\cap A_{n}=\{e\}$）.** 自然な射影 $S_{n}\to S_{n}/A_{n}$ を $N$ に制限したものは、核が $N\cap A_{n}=\{e\}$ なので単射で、$\abs{N}\le\abs{S_{n}/A_{n}}=2$。$\abs{N}=2$ なら、位数 $2$ の正規部分群は中心に含まれる（\ref{grp:prob-normal-o
  - `grp:direct-product`: NG — Here 射影 refers to the natural quotient map $S_{n}\to S_{n}/A_{n}$, not the coordinate projection $p_{i}$ defined in the card.
  - `cat:product`: NG — Here "射影" means the quotient map $S_{n}\to S_{n}/A_{n}$, not a projection from a categorical product as in the card.
  - `cat:category-of-elements`: NG — Here 射影 means the natural quotient map $S_{n}\to S_{n}/A_{n}$, not the projection $\pi_{P}\colon\int P\to\mathbf{C}$ from the category of elements.

## 「ファイバー積」 in 02-algebra/02-group-theory/03-sylow
- Default: `grp:subdirect-product` → **no candidate fits**
- Pages: 05-subgroups-of-products.html
- Sentence: である（商群 $Q\defeq G_{2}/N_{2}$ 上の**ファイバー積**）。
  - `grp:subdirect-product`: NG — ファイバー積 (fiber product) is a categorical construction, not the same notion as 部分直積 defined by the projection-surjectivity condition.
  - `cat:product`: NG — In the sentence "fiber product" refers to a fiber product of groups over a quotient group (a pullback in the category of groups), which matches the categorical pullback/fiber product notion defined in the card.

## 「引き戻し」 in 02-algebra/02-group-theory/03-sylow
- Default: `cat:product` → **no candidate fits**
- Pages: 04-solvable-nilpotent.html, 05-subgroups-of-products.html
- Sentence: 2. **昇中心列**：$Z_{0}(G)\defeq\{e\}$ とし、$Z_{i+1}(G)$ を $Z_{i+1}(G)/Z_{i}(G)=Z(G/Z_{i}(G))$ となる部分群（対応定理で引き戻したもの）とする。
  - `cat:product`: NG — Here "引き戻し" means taking the preimage of a subgroup under the quotient map, not the categorical pullback (fiber product) defined in the card.

## 「生成元」 in 02-algebra/02-group-theory/03-sylow
- Default: `grp:generated-subgroup` → **fits: `grp:presentation`**
- Pages: 02-sylow-applications.html, 04-solvable-nilpotent.html, 05-subgroups-of-products.html, 06-preservation-table.html
- Sentence: **Step 6（3：存在）.** $U$ の生成元 $u$ をとり、$\theta(k)\defeq u^{k}$ とすると単射準同型 $\Z/p\Z\to\Aut(\Z/q\Z)$ で、半直積 $\Z/q\Z\rtimes_{\theta}\Z/p\Z$ は位数 $pq$ の非可換群（\ref{grp:semidirect-group}）。$\Z/pq\Z$ は可換
  - `grp:generated-subgroup`: NG — Here "生成元" means a generator (single element) of the group $U$, whereas the card defines 生成元 as a generating set of $G$; a single element is a special case, but the card's notion is a set of generators, and the sentence uses it for an element of $U$ generating $U$ — this is the standard special case, so it should be ok.
  - `grp:presentation`: OK

## 「1 対 1」 in 02-algebra/02-group-theory/04-finite-abelian
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 01-structure.html
- Sentence: 有限次元ベクトル空間 $V$ とその双対空間 $V^{*}$ の関係（$V\cong V^{*}$ だが標準的な同型はなく、$V\cong V^{**}$ は標準的、\term[部分空間]{lin:vector-space}と零化空間が 1 対 1 に対応する）と同じことが、有限アーベル群とその指標群の間で成り立つ。
  - `set:injection-surjection`: NG — Here "1 対 1 に対応する" means a bijective correspondence between subspaces and annihilators, not the definition of an injective map between sets.

## 「下限」 in 02-algebra/02-group-theory/04-finite-abelian
- Default: `calc:supremum` → **no candidate fits**
- Pages: 02-minimal-decomposition.html
- Sentence: **Step 3（下限 $t\ge s$）.** $t$ 項の巡回分解 $A\cong\bigoplus_{i=1}^{t}\Z/n_{i}$ があれば、各成分の $1$ に対応する $t$ 個の元が $A$ を生成するので $t\ge d(A)=s$。
  - `calc:supremum`: NG — Here "下限" means a lower bound on the number of generators (a minimal value), not the order-theoretic infimum defined in the card.

## 「単射」 in 02-algebra/02-group-theory/04-finite-abelian
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 01-structure.html
- Sentence: **Step 2（2）.** $\mathrm{ev}(a)$ は $\hat A$ 上の準同型で、$a\mapsto\mathrm{ev}(a)$ も準同型。単射：$a\neq0$ とし、$H=\langle a\rangle$（位数 $m>1$）とすると、$H\cong\Z/m\Z$ の上の指標 $ka\mapsto k/m+\Z$ は $a$ で $0$ でない。1 からこれは $\chi\in\hat A$ に延長でき、$\mathrm{ev}(a)(\chi)=\chi
  - `set:injection-surjection`: NG — Here 単射 refers to the map $a\mapsto\mathrm{ev}(a)$ being injective, which matches the card's definition of an injective function (逆関係が関数), so it is the same notion.

## 「可換」 in 02-algebra/02-group-theory/04-finite-abelian
- Default: `grp:abelian-group` → **no candidate fits**
- Pages: 01-structure.html, 02-minimal-decomposition.html
- Sentence: - **可換**：$\ang{c}$ の正規性と剰余群、内部直和の扱いに使った。
  - `grp:abelian-group`: NG — one short English sentence why

## 「次元」 in 02-algebra/02-group-theory/04-finite-abelian
- Default: `lin:dimension` → **no candidate fits**
- Pages: 01-structure.html, 02-minimal-decomposition.html
- Sentence: e^{2\pi ix}$ は $\Q/\Z$ から $\mathbb{C}^{\times}$ の有限位数の元（1 の冪根）全体への同型なので、$\hat A$ は $\Hom(A,\mathbb{C}^{\times})$（有限群 $A$ の像は有限位数の元からなる）と同じものである。表現論ではこちらの形で使う（1 次元の表現）。
  - `lin:dimension`: NG — Here "1 次元の表現" refers to the dimension of a representation (a vector space over $\mathbb{C}$), which is the same notion of dimension as defined for vector spaces in the card.
  - `cat:trace-dimension`: NG — Here "次元" means the dimension of a representation (1-dimensional representation), not the categorical dimension defined as the trace of the identity morphism.
  - `ring:krull-dimension`: NG — Here "次元" refers to the dimension of a representation (1-dimensional representation), not the Krull dimension of a ring.
  - `ag:dimension`: NG — Here "1 次元の表現" means a one-dimensional representation (vector-space dimension), not the Krull dimension of a topological space defined in the card.

## 「位数」 in 02-algebra/02-group-theory/05-infinite-abelian
- Default: `grp:abelian-group` → **fits: `grp:element-order`**
- Pages: 01-free-abelian.html, 02-divisible.html, 04-pure-bounded.html, 05-ext-whitehead.html
- Sentence: - 元の位数は \ref{grp:element-order}。位数有限の元を**捩れ元**という。
  - `grp:abelian-group`: NG — This "位数" refers to the order of an element, not the order |G| of a group as defined in the card.
  - `grp:element-order`: OK

## 「全単射」 in 02-algebra/02-group-theory/05-infinite-abelian
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 02-divisible.html
- Sentence: **Step 3（3）.** 可除群 $\mathbb{Q}/\Z$ の準素成分は可除：$x\in P$, $n=p^{a}n'$（$p\nmid n'$）とする。$n'$ は $P$ 上で全単射（$\ang{b_{k}}$ 上で $n'$ 倍は位数と\term[互いに素]{grp:gcd}なので単射、有限集合上で全射）で、$p^{a}b_{k+a}=b_{k}$ から $p^{a}$ 倍は全射。
  - `set:injection-surjection`: NG — Here 全単射 describes the multiplication-by-$n'$ map being bijective on $P$, which matches the card's definition of a bijection (injective and surjective).

## 「共役」 in 02-algebra/02-group-theory/05-infinite-abelian
- Default: `grp:conjugacy-class` → **no candidate fits**
- Pages: 03-torsion-free.html
- Sentence: **高い階数.** \ref{grp:indecomposable-rank-two} の素数を増やすと、任意の可算な階数の直既約な捩れのない群が作れる。有限階数の捩れのない群の分類は「ワイルド」（行列の同時共役の分類を含む）であることが知られており、完全な不変量は期待できない。
  - `grp:conjugacy-class`: NG — Here "共役" refers to simultaneous conjugacy of matrices, not conjugacy classes of elements in a group.

## 「和集合」 in 02-algebra/02-group-theory/05-infinite-abelian
- Default: `set:union` → **no candidate fits**
- Pages: 02-divisible.html, 03-torsion-free.html
- Sentence: **Step 1（1）.** $m/p^{k}+\Z=mb_{k}$ なので和集合。$b_{n}$ の位数は $p^{n}$（$jb_{n}=0\iff p^{n}\mid j$）。$pb_{n+1}=b_{n}$ は定義から。
  - `set:union`: NG — Here "和集合" is a typo/abbreviation for "和集合" meaning the sum (union) in the group sense—actually it denotes the coset sum $m/p^k + \mathbb{Z}$, not the set-theoretic union of a family of sets as defined in the card.

## 「導来関手」 in 02-algebra/02-group-theory/05-infinite-abelian
- Default: `ha:left-derived-functor` → **no candidate fits**
- Pages: 05-ext-whitehead.html
- Sentence: > 資料：ホモロジー代数の部分は本サイトの導来関手の系列による。ホワイトヘッドの問題の独立性は S. Shelah の結果で、証明は本サイトの範囲外とする（出典は \ref{grp:fact-shelah}）。
  - `ha:left-derived-functor`: NG — 「導来関手」 is the general derived functor, while the card defines specifically the left derived functor \(L_{n}F\), so the term as used is broader than the defined notion.

## 「普遍性」 in 02-algebra/02-group-theory/05-infinite-abelian
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 01-free-abelian.html, 05-ext-whitehead.html
- Sentence: 2. （**普遍性**）$X$ を $F$ の基底とする。アーベル群 $G$ と写像 $f\colon X\to G$ について、$f$ を延長する準同型 $\bar{f}\colon F\to G$ がただ一つある。
  - `cat:universal-arrow`: NG — 普遍性 here refers to the universal property of a free group, not specifically a universal arrow from an object to a functor as defined in the card.

## 「結合法則」 in 02-algebra/02-group-theory/05-infinite-abelian
- Default: `grp:group` → **no candidate fits**
- Pages: 02-divisible.html
- Sentence: **Step 2（公理）.** スカラー倍の分配法則・結合法則は、両辺に分母の積を掛けて整数倍の等式に帰着させ、Step 1 の一意性を使えば確かめられる。たとえば $\frac{m}{n}(v+w)$ は $n(x+y)=m(v+w)$（$nx=mv$, $ny=mw$）の解なので $\frac{m}{n}v+\frac{m}{n}w$ に等しい。
  - `grp:group`: NG — Here 結合法則 refers to associativity of scalar multiplication, not the group axiom defining a group.

## 「位数」 in 02-algebra/02-group-theory/06-presentations
- Default: `grp:abelian-group` → **no candidate fits**
- Pages: 01-free-groups.html, 02-presentations.html
- Sentence: 等写像なので互いに逆（\ref{grp:homomorphism-basic.6}）。別証明：$F(X)\cong F(Y)$ なら可換化も同型で $\Z^{\abs{X}}\cong\Z^{\abs{Y}}$、$2$ で割ると $(\Z/2\Z)^{\abs{X}}\cong(\Z/2\Z)^{\abs{Y}}$ で位数を比べて $\abs{X}=\abs{Y}$。
  - `grp:abelian-group`: NG — Here "位数" refers to the cardinality (order) of the sets $X$ and $Y$, not the order of a group as defined in the card.
  - `grp:element-order`: NG — Here "位数" refers to the cardinality (order) of a group, not the order of an element as defined in the card.
  - `cx:isolated-singularity`: NG — Here "位数" means the cardinality (order) of a group, not the order of a pole as defined in the card.
  - `cx:elliptic-function`: NG — Here 位数 means the cardinality (order) of a group, not the number of poles of an elliptic function.

## 「全射」 in 02-algebra/02-group-theory/06-presentations
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 01-free-groups.html, 02-presentations.html
- Sentence: **Step 3（1）.** 全射：簡約語 $u$ について $\sigma_{u}\in G$ で $\varepsilon(\sigma_{u})=u$（Step 1）。単射：$g\in G$ は Step 2 より $g=\sigma_{u}$（$u$ 簡約）と書け、$\varepsilon(g)=u$ なので $g=\sigma_{\varep
  - `set:injection-surjection`: NG — Here 全射 refers to surjectivity of the map ε from G to the set of reduced words, which matches the card's definition of a surjective function.

## 「射影」 in 02-algebra/02-group-theory/06-presentations
- Default: `grp:direct-product` → **no candidate fits**
- Pages: 02-presentations.html
- Sentence: - 正規部分群・正規閉包・剰余群・自然な射影は \ref{grp:normal-subgroup}, \ref{grp:normal-closure}, \ref{grp:quotient-group}。準同型・生成元で決まること・分解定理・第一同型定理は \ref{grp:homomorphism}, \ref{grp:homomorphism-basic},
  - `grp:direct-product`: NG — Here "射影" refers to the natural projection map from a group to a quotient group, not the coordinate projection defined in the card.
  - `cat:product`: NG — In this sentence "射影" refers to the natural projection map of a quotient group, not the projection morphisms of a categorical product.
  - `cat:category-of-elements`: NG — This "射影" refers to a natural projection in group theory, not the projection functor from a category of elements defined in the card.

## 「1 対 1」 in 02-algebra/02-group-theory/07-representations
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 01-representations.html, 03-character-tables.html
- Sentence: 1 次元表現は準同型 $G\to\mathbb{C}^{\times}$ で、同値なものは等しい（$1\times1$ 行列の共役は同じ）。これは $G/[G,G]$ からの準同型と 1 対 1 に対応し（\ref{grp:abelianization-universal}）、有限可換群 $A=G/[G,G]$ の準同型 $A\to\mathbb{C}^{\times}$ は指標群 $\hat A$（\ref{grp:dual-group} の後の注意）の元で、$\lvert\hat A\rvert=\lve
  - `set:injection-surjection`: NG — Here "1 対 1 に対応し" means a one-to-one correspondence (bijection between homomorphisms), not the definition of an injective function.

## 「スカラー倍」 in 02-algebra/02-group-theory/07-representations
- Default: `mod:module` → **no candidate fits**
- Pages: 01-representations.html, 03-character-tables.html, 05-integrality.html
- Sentence: 3. $G$ の中心 $Z(G)$ の元は既約表現の上でスカラー倍として作用する。
  - `mod:module`: NG — Here "スカラー倍" means multiplication by a scalar (an element of the base field) acting on a representation, not the module scalar multiplication map $R\times M\to M$ defined in the card.

## 「両側加群」 in 02-algebra/02-group-theory/07-representations
- Default: `mod:module` → **no candidate fits**
- Pages: 04-induced.html
- Sentence: のテンソル積 $M\otimes_{R}N$（$M$ は右 $R$ 加群、$N$ は左 $R$ 加群）とその普遍性は \ref{mod:page-tensor-products} の一般論による。$\mathbb{C}[G]$ は左から $\mathbb{C}[G]$、右から $\mathbb{C}[H]$ が作用する両側加群。
  - `mod:module`: NG — 両側加群 is a bimodule (left and right module structures), which is not defined in the card; the card only defines left/right modules and modules over a commutative ring.

## 「位数」 in 02-algebra/02-group-theory/07-representations
- Default: `grp:abelian-group` → **fits: `grp:element-order`**
- Pages: 02-characters.html, 03-character-tables.html, 04-induced.html, 05-integrality.html
- Sentence: 2（2）.** $\mathbb{C}$ は代数閉体なので $\rho(g)$ は上三角化でき、対角成分 $\lambda_{1},\dots,\lambda_{n}$（$n=\dim V$）が固有多項式の根（重複度込み）で、$\chi(g)=\sum\lambda_{j}$。$g^{m}=1$（$m$ は $g$ の位数）なので $\rho(g)^{m}$ は単位行列で、上三角行列の冪の対角成分 $\lambda_{j}^{m}$ は $1$。よって $\lvert\lambda_{j}\rvert=1$ で、三角不等式から $\lvert\chi(g)\rvert\le n$。
  - `grp:abelian-group`: NG — Here "位数" means the order of a group element (the least $m$ with $g^{m}=1$), not the order $\abs{G}$ of a group as defined in the card.
  - `grp:element-order`: OK

## 「共役」 in 02-algebra/02-group-theory/07-representations
- Default: `grp:conjugacy-class` → **no candidate fits**
- Pages: 01-representations.html, 02-characters.html, 03-character-tables.html, 04-induced.html, 05-integrality.html
- Sentence: 1 次元表現は準同型 $G\to\mathbb{C}^{\times}$ で、同値なものは等しい（$1\times1$ 行列の共役は同じ）。これは $G/[G,G]$ からの準同型と 1 対 1 に対応し（\ref{grp:abelianization-universal}）、有限可換群 $A=G/[G,G]$ の準同型 $A\to\mathbb{C}^{\times}$ は指標群 $\hat A$（\ref{grp:dual-group} の後
  - `grp:conjugacy-class`: NG — Here "共役" refers to conjugation of matrices (similarity of 1×1 matrices), not conjugacy of group elements as defined in the card.

## 「基本部分群」 in 02-algebra/02-group-theory/07-representations
- Default: `grp:basic-subgroup` → **no candidate fits**
- Pages: 04-induced.html
- Sentence: **ブラウアーの定理.** すべての指標は、基本部分群（巡回群と $p$ 群の直積）の 1 次元指標の誘導指標の整数係数の一次結合で書けることが知られている（ブラウアーの誘導定理。本サイト未収録）。
  - `grp:basic-subgroup`: NG — This "基本部分群" is Brauer's elementary subgroup (direct product of a cyclic group and a p-group), not the pure subgroup with divisible quotient defined in the card.

## 「射影」 in 02-algebra/02-group-theory/07-representations
- Default: `grp:direct-product` → **no candidate fits**
- Pages: 02-characters.html
- Sentence: 表現 $V$ について $e\defeq\frac{1}{\lvert G\rvert}\sum_{g\in G}\rho(g)$ は $V$ から $V^{G}$ への射影（$e^{2}=e$、像は $V^{G}$）で、
  - `grp:direct-product`: NG — This "射影" is a linear projection operator (idempotent map onto $V^{G}$), not the coordinate projection $p_{i}$ defined in the card.
  - `cat:product`: NG — This "射影" means an idempotent linear projection onto invariants, not a projection morphism from a categorical product as defined in the card.
  - `cat:category-of-elements`: NG — Here "射影" means an idempotent linear projection onto the invariant subspace, not the projection functor from a category of elements.

## 「指標」 in 02-algebra/02-group-theory/07-representations
- Default: `grp:dual-group` → **fits: `rep:character`**
- Pages: 01-representations.html
- Sentence: }k\nmid\lvert G\rvert$ ならすべての表現は既約表現の直和に分かれる。このページでは表現の基本的な例と、直和・テンソル積・双対・$\Hom$ という構成を定義し、シューアの補題を表現の言葉で述べ直す。次のページ（\ref{rep:page-characters}）では、表現を「トレースの関数」である指標で調べる。
  - `grp:dual-group`: NG — Here「指標」means the character (trace function) of a representation, not a homomorphism from a finite abelian group to $\Q/\Z$.
  - `rep:character`: OK

## 「推移的」 in 02-algebra/02-group-theory/07-representations
- Default: `grp:faithful-transitive` → **no candidate fits**
- Pages: 03-character-tables.html
- Sentence: 既約指標、列＝共役類」に並べたものを**指標表**という。指標表は直交関係（\ref{rep:orthogonality}, \ref{rep:characters-basis}）を満たす正方行列で、少ない手がかりから全体が決まることが多い。このページでは、1 次元の指標（可換化と双対群）、剰余群からの持ち上げ、2 重推移的な作用、という三つの道具を用意し、$D_{4}$, $Q_{8}$, $A_{4}$, $S_{4}$ の指標表を計算する。また、指標表から正規部分群がすべて読み取れることを示す。
  - `grp:faithful-transitive`: NG — Here "推移的" modifies "作用" (a doubly transitive action), which is the group-action notion defined in the card, so it matches.
  - `logic:relation-properties`: NG — Here "推移的" describes a group action (2-transitive action), not a binary relation on a set as defined in the card.

## 「有限生成」 in 02-algebra/02-group-theory/07-representations
- Default: `grp:generated-subgroup` → **fits: `mod:generated-submodule`**
- Pages: 05-integrality.html
- Sentence: - 整な元・整閉包（整な元の和・積は整）・整であることの特徴付け（有限生成加群に含まれれば整）は \ref{ring:integral-def}, \ref{ring:integral-closure}, \ref{ring:integral-criterion}。$\Z$ は UFD なので正規で（\ref{ring:ufd-normal}）、$\Q$ の元で $\Z$ 上整なものは整数。
  - `grp:generated-subgroup`: NG — Here "有限生成" refers to finitely generated modules (integral elements lying in a finitely generated module), not finitely generated groups.
  - `ring:generated-ideal-def`: NG — Here "有限生成" modifies a module (有限生成加群), not an ideal, so it is a different notion from the card's finitely generated ideal.
  - `mod:generated-submodule`: OK

## 「正規直交基底」 in 02-algebra/02-group-theory/07-representations
- Default: `lin:inner-product` → **no candidate fits**
- Pages: 02-characters.html
- Sentence: 表現 $\rho$ の**指標**とは、各 $g$ に行列 $\rho(g)$ のトレースを対応させる関数 $\chi(g)=\operatorname{tr}\rho(g)$ である。指標は数を並べただけのものだが、複素数体上では表現を同型を除いて完全に決め、既約表現の指標は類関数の空間の正規直交基底をなす（**直交関係**）。これにより、表現の既約分解の重複度は指標の内積で計算できる。前のページ（\ref{rep:page-representations}）の構成と、複素群環の構造（\ref{mod:group-algebra-structure}）を使う。
  - `lin:inner-product`: NG — It refers to an orthonormal basis of the space of class functions, not the orthonormal system/basis of an inner product space defined in the card.

## 「生成元」 in 02-algebra/02-group-theory/07-representations
- Default: `grp:generated-subgroup` → **no candidate fits**
- Pages: 01-representations.html, 05-integrality.html
- Sentence: es gw$ は双線形写像 $(v,w)\mapsto gv\otimes gw$ から得られる線形写像 $\rho(g)\otimes\sigma(g)$ で、$(\rho(g)\otimes\sigma(g))(\rho(h)\otimes\sigma(h))=\rho(gh)\otimes\sigma(gh)$（生成元で確かめる）、$g=1$ で恒等写像。$\Hom$：$(g(hf))(v)=g\,(hf)(g^{-1}v)=gh\,f(h^{-1}g^{-1}v)=((gh)f)(v)$。
  - `grp:generated-subgroup`: NG — Here "生成元" refers to generators of a group action/representation (checking on generators), not the generating set of a subgroup as defined in the card.
  - `grp:presentation`: NG — Here "生成元" refers to generators of a group action/representation (checking on generators), not the generators $X$ of a group presentation as defined in the card.

## 「可算無限」 in 02-algebra/03-commutative-algebra/01-basics
- Default: `set:finite-set` → **no candidate fits**
- Pages: 01-rings-ideals.html
- Sentence: - **両側の逆元**：1 は、片側だけの逆元が両側にあれば一致するという主張。片側の逆元だけでは一意性も可逆性も言えない：可算無限次元の数列空間 $V$ の $\End(V)$ で、右シフト $s$ と左シフト $t$ は $ts=1$ だが $st\neq 1$ である。可換環ではこの区別は起きない。
  - `set:finite-set`: NG — Here「可算無限次元」describes the dimension of a vector space (countably infinite dimension), not a set being countably infinite as defined in the card.

## 「基底」 in 02-algebra/03-commutative-algebra/01-basics
- Default: `mod:free-module` → **no candidate fits**
- Pages: 04-polynomial-rings.html
- Sentence: **保存の性質.** 「$A$ がネーター環なら $A[x]$, $A[[x]]$ もネーター環」（ヒルベルトの基底定理 \tref{ring:hilbert-basis} とその冪級数版）、「$A$ が UFD なら $A[x]$ も UFD」（\ref{ring:polynomial-ufd}）など、多項式環・冪級数環への性質の遺伝は \ref{ring:page-preservation-table} にまとめる。
  - `mod:free-module`: NG — Here "基底" is part of the proper name "ヒルベルトの基底定理" (Hilbert's basis theorem), not the module-theoretic notion of a basis defined in the card.
  - `grp:free-abelian`: NG — Here "基底" refers to a basis of an ideal/module generating set in the Hilbert basis theorem, not a basis of a free abelian group.

## 「普遍性」 in 02-algebra/03-commutative-algebra/01-basics
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 02-quotient-rings.html, 04-polynomial-rings.html, 05-localization.html
- Sentence: 群を正規部分群で割って剰余群を作ったように、環はイデアルで割って**剰余環**を作れる（\ref{ring:quotient-ring}）。このページでは、剰余環の構成と普遍性（\ref{ring:factor-through-quotient}）、\ref{ring:first-isomorphism}、\ref{ring:correspondence}を述べ、整数の剰余環 $\Z/n\Z$ を詳しく調べる。後半では環の直積と冪等元による分解（\ref{ring:idempotent-de
  - `cat:universal-arrow`: NG — 「普遍性」は普遍射の定義そのものではなく、普遍射が持つ性質を指す語であり、カードの定義する「普遍射」とは異なる概念である。

## 「最小元」 in 02-algebra/03-commutative-algebra/01-basics
- Default: `set:well-order` → **no candidate fits**
- Pages: 06-ideal-arithmetic.html
- Sentence: +(b)=(\gcd(a,b))$（\ref{ring:ideal-operations.4}）、$(a)\cap(b)=(\operatorname{lcm}(a,b))$（$c$ が $a$ と $b$ の倍数 $\iff$ $\operatorname{lcm}$ の倍数）。$0$ が関わる場合は $(0)$ が最小元なので直接確かめられ、以下 $a,b,c>0$ とする。素数 $p$ ごとの指数 $v_{p}$ を見ると、$v_{p}(\gcd)=\min$, $v_{p}(\operatorname{lcm})=\max$ なので、示すべき式 $\operatorname{lcm}(a,\gcd(b,c))=\gcd(\oper
  - `set:well-order`: NG — Here "最小元" refers to the least element of the set of ideals under inclusion (a minimum in a partially ordered set), not the $R$-least element of a subset in a well-order.

## 「有限生成」 in 02-algebra/03-commutative-algebra/01-basics
- Default: `ring:generated-ideal-def` → **no candidate fits**
- Pages: 04-polynomial-rings.html, 06-ideal-arithmetic.html
- Sentence: n B$ について、$A$ の像と $b_{1},\dots,b_{n}$ を含む最小の部分環を $A[b_{1},\dots,b_{n}]$ と書き、$b_{1},\dots,b_{n}$ で**生成された部分代数**という。$B=A[b_{1},\dots,b_{n}]$ となる有限個の元があるとき、$B$ を**有限生成 $A$ 代数**（**有限型**の $A$ 代数）という。
  - `ring:generated-ideal-def`: NG — Here "有限生成" modifies an $A$-algebra (finite generation as an algebra), not an ideal as defined in the card.
  - `grp:generated-subgroup`: NG — This is about finitely generated algebras over a ring, not finitely generated groups as defined in the card.
  - `mod:generated-submodule`: NG — This defines a finitely generated algebra (finite type), not a finitely generated module as in the card.

## 「近傍」 in 02-algebra/03-commutative-algebra/01-basics
- Default: `top:neighborhood` → **no candidate fits**
- Pages: 04-polynomial-rings.html, 05-localization.html
- Sentence: **多項式環と冪級数環の比較.** $K$ を体とすると、$K[x]$ は極大イデアルを無限個もつ（例えば $x-a$, $a\in K$。$K$ が有限でも、既約多項式は無限個ある）のに対し、$K[[x]]$ は局所環である。幾何的には、$K[x]$ が直線全体の関数、$K[[x]]$ が原点の「無限小近傍」の関数にあたる。$K[[x]]$ は離散付値環の典型例であり（\ref{ring:dvr}）、多変数の $K[[x_{1},\dots,x_{n}]]$ は完備な正則局所環の基本例になる（\ref{ring:page-completion}）。
  - `top:neighborhood`: NG — Here "近傍" is used in the geometric/intuitive sense of an infinitesimal neighborhood, not the topological definition of a neighborhood of a point in a topological space.

## 「逆像」 in 02-algebra/03-commutative-algebra/01-basics
- Default: `set:function` → **no candidate fits**
- Pages: 01-rings-ideals.html, 02-quotient-rings.html, 03-prime-maximal.html, 05-localization.html, 06-ideal-arithmetic.html
- Sentence: 3. $A$ の部分環の像は $B$ の部分環、$B$ の部分環の逆像は $A$ の部分環である。特に $\im f$ は $B$ の部分環。
  - `set:function`: NG — Here "逆像" refers to the preimage of a subring under a ring homomorphism, which is the same set-theoretic inverse image notion defined in the card (applied to a subset that happens to be a subring).
  - `cat:inverse-image`: NG — This "逆像" refers to the preimage of a subset under a ring homomorphism, not the inverse image sheaf defined in the card.

## 「1 対 1」 in 02-algebra/03-commutative-algebra/02-commutative-algebra
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 03-integral-extensions.html
- Sentence: \bar B$ の素イデアル）\ref{ring:localization-primes} から、$\mathfrak{q}\cap(A\setminus\mathfrak{p})=\emptyset$ となる $\mathfrak{q}\in\Spec B$ は $\Spec B_{\mathfrak{p}}$ と 1 対 1 に対応し、さらに $\mathfrak{q}\supset\mathfrak{p}B$ という条件は $\mathfrak{q}B_{\mathfrak{p}}\supset\mathfrak{p}B_{\mathfrak{p}}$ に対応する（\ref{ring:prime-preimage}）。$\mathfra
  - `set:injection-surjection`: NG — Here "1 対 1 に対応" means a bijective correspondence between two sets, not an injective function as defined in the card.

## 「コンパクト」 in 02-algebra/03-commutative-algebra/02-commutative-algebra
- Default: `top:compact` → **no candidate fits**
- Pages: 12-operations-commute.html
- Sentence: 対）。さらに平坦なので有限の極限（核・有限共通部分・有限直積）とも交換する。交換しないのは無限の極限（無限直積・逆極限＝冪級数や完備化）である。$\Hom(M,-)$ や $M\otimes-$ が「有限表示なら」交換するのは、$M$ が有限個の自由加群の有限の余極限（余核）で書けるからで、圏論の言葉では有限表示加群がコンパクト対象（$\Hom(M,-)$ がフィルター付き余極限と交換する）であることに対応する。これは解釈であり、このページの証明はこの一般論を使っていない。
  - `top:compact`: NG — Here "コンパクト" refers to a compact object in a category (Hom commutes with filtered colimits), not topological compactness of a space or subset.

## 「トレース」 in 02-algebra/03-commutative-algebra/02-commutative-algebra
- Default: `lin:eigen-def` → **no candidate fits**
- Pages: 03-integral-extensions.html, 10-integral-closure-finiteness.html
- Sentence: **続き.** 整閉包の商体・トレース・有限性・ネーターの有限性定理・付値環による特徴付けは \ref{ring:page-integral-closure-finiteness}、クルル＝秋月の定理・ネーター正規整域の構造・正規性のセールの判定法は \ref{ring:page-krull-akizuki-normality} で扱う。
  - `lin:eigen-def`: NG — Here "トレース" refers to the field trace in integral closure theory, not the matrix trace defined in the card.
  - `pt:trace`: NG — This "トレース" refers to the field trace in commutative algebra (integral closure), not the trace of a closed modal formula defined in the card.
  - `cat:trace-dimension`: NG — Here "トレース" refers to the field trace in commutative algebra/integral closure, not the categorical trace of a self-morphism defined on the card.

## 「位数」 in 02-algebra/03-commutative-algebra/02-commutative-algebra
- Default: `grp:abelian-group` → **fits: `grp:element-order`**
- Pages: 04-primary-decomposition.html, 13-local-global.html
- Sentence: **Step 1.** $\operatorname{Ann}(x)=n\Z$（$n$ は $x$ の位数）が素イデアルになるのは $n$ が素数のとき。$p\mid\abs{M}$ ならコーシーの定理から位数 $p$ の元があり $p\Z\in\operatorname{Ass}$。逆に位数 $p$ の元があれば $p\mid\abs{M}$（ラグランジュ）。$0$ は零化イデアルにならない（有限群の元は有限位数）。
  - `grp:abelian-group`: NG — Here "位数" means the order of an element (the least positive n with nx=0), whereas the card defines it as the order |G| of a group.
  - `grp:element-order`: OK

## 「単項イデアル」 in 02-algebra/03-commutative-algebra/02-commutative-algebra
- Default: `ring:generated-ideal-def` → **no candidate fits**
- Pages: 08-dimension-theory.html, 09-principal-ideal-theorem.html, 11-krull-akizuki-normality.html
- Sentence: **多項式環の\term[次元]{ring:krull-dimension}.** 体 $k$ 上の $k[x_{1},\dots,x_{n}]$ の次元は $n$ である。これはクルルの単項イデアル定理（\ref{ring:page-principal-ideal-theorem}）か、ネーターの正規化と超越次数を使って示す。
  - `ring:generated-ideal-def`: NG — It refers to Krull's principal ideal theorem, a named theorem about principal ideals, not the definition of a principal ideal itself.

## 「双対基底」 in 02-algebra/03-commutative-algebra/02-commutative-algebra
- Default: `lin:dual-space` → **no candidate fits**
- Pages: 10-integral-closure-finiteness.html
- Sentence: 3. $L/K$ が分離的なら、トレース形式 $(y,z)\mapsto\operatorname{Tr}(yz)$ は非退化：$K$ 上の基底 $v_{1},\dots,v_{n}$ に対し、$\operatorname{Tr}(v_{i}v_{j}^{*})=\delta_{ij}$ となる**双対基底** $v_{1}^{*},\dots,v_{n}^{*}$ がある。
  - `lin:dual-space`: NG — This is the dual basis with respect to the trace bilinear form in field theory, not the dual basis of the dual space defined via $b_{i}^{*}(b_{j})=\delta_{ij}$ in the card.

## 「接錐」 in 02-algebra/03-commutative-algebra/02-commutative-algebra
- Default: `ring:associated-graded` → **no candidate fits**
- Pages: 06-filtrations.html
- Sentence: pset\cdots$ は、環を「$I$ でどれだけ割り切れるか」で層別する**フィルトレーション**を与える（\ref{ring:filtration}）。両者を結ぶのが**リース代数** $\bigoplus I^{n}$ と**随伴次数環** $\bigoplus I^{n}/I^{n+1}$ であり、局所環を「接錐」という次数環で近似する手段になる。このページの中心は**アルティン＝リースの補題**（\tref{ring:artin-rees}）で、部分加群に制限した $I$ 進フィルトレーションが元のものと「ほぼ同じ」であることを述べる。これは次のページの完備化とクルルの交叉定理、さらに次元論の基礎となる。
  - `ring:associated-graded`: NG — 接錐 is the tangent cone, a geometric object, not the associated graded ring defined in the card.

## 「普遍性」 in 02-algebra/03-commutative-algebra/02-commutative-algebra
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 01-local-properties.html, 02-noetherian-artinian.html, 05-nullstellensatz.html, 12-operations-commute.html
- Sentence: - 環は可換、加群は $A$ 加群。環の局所化・普遍性・素イデアルの対応・$A_{\mathfrak{p}}$ は \ref{ring:localization}, \ref{ring:localization-universal}, \ref{ring:localization-primes}, \ref{ring:localization-at-prime}。テンソル
  - `cat:universal-arrow`: NG — 「普遍性」は普遍射の定義そのものではなく、普遍射が持つ性質を指す抽象的な概念である。

## 「根基」 in 02-algebra/03-commutative-algebra/02-commutative-algebra
- Default: `ring:radical-ideal` → **no candidate fits**
- Pages: 02-noetherian-artinian.html, 03-integral-extensions.html, 04-primary-decomposition.html, 05-nullstellensatz.html, 09-principal-ideal-theorem.html, 12-operations-commute.html, 13-local-global.html
- Sentence: $ 加群。完全列は \ref{mod:exact-sequence}、局所化と完全性は \ref{ring:page-local-properties}、素イデアルと積は \ref{ring:prime-contains-product}、中国剰余定理は \tref{ring:chinese-remainder}、冪零根基とジャコブソン根基は \ref{ring:nilradical}, \ref{ring:jacobson-radical}。
  - `ring:radical-ideal`: NG — Here 根基 refers to the nilradical/Jacobson radical (radicals of the ring), not the radical of a specific ideal as defined in the card.

## 「短完全」 in 02-algebra/03-commutative-algebra/02-commutative-algebra
- Default: `ha:chain-complex` → **no candidate fits**
- Pages: 07-completion.html
- Sentence: 逆系の短完全列 $0\to(M'_{n})\to(M_{n})\to(M''_{n})\to 0$（各 $n$ で短完全で、$\theta$ と可換）について、$0\to\varprojlim M'_{n}\to\varprojlim M_{n}\to\varprojlim M''_{n}$ は完全である。さらに $(M'_{n})$ の $\theta'_{n+1}$ がすべて全射なら、$\varprojlim M_{n}\to\va
  - `ha:chain-complex`: NG — This "短完全" refers to a short exact sequence of inverse systems, not a short exact sequence of chain complexes as defined in the card.

## 「近傍」 in 02-algebra/03-commutative-algebra/02-commutative-algebra
- Default: `top:neighborhood` → **no candidate fits**
- Pages: 06-filtrations.html
- Sentence: **Step 2（2）.** 相対位相の基本近傍は $I^{n}M\cap N$ で、\ref{ring:artin-rees}から $(I^{n}M\cap N)$ は $N$ の安定な $I$ フィルトレーション。1 から $N$ の $I$ 進位相と一致する。
  - `top:neighborhood`: NG — Here "近傍" is used in the phrase "基本近傍" (basic neighborhoods) in the context of a filtration topology, not as a neighborhood of a point in a topological space as defined in the card.

## 「部分和」 in 02-algebra/03-commutative-algebra/02-commutative-algebra
- Default: `calc:series` → **no candidate fits**
- Pages: 07-completion.html
- Sentence: mpletion-flat} から $\hat A/\mathfrak{m}\hat A\cong A/\mathfrak{m}$ は体で、$\mathfrak{m}\hat A=\hat A_{1}$ の元 $x$ について $1-x$ は単元（逆元 $\sum_{k}x^{k}$ は $\hat A$ で収束する：部分和は $\hat A/\hat A_{n}$ で定まる）。\ref{ring:local-ring-criterion.3} から局所環。
  - `calc:series`: NG — In the sentence "部分和" refers to partial sums in the completion $\hat A$ used to show $\sum_{k}x^{k}$ converges, not the partial sums $s_{N}=\sum_{n=0}^{N}a_{n}$ of a real sequence defining a series as in the card.

## 「開被覆」 in 02-algebra/03-commutative-algebra/02-commutative-algebra
- Default: `top:compact` → **no candidate fits**
- Pages: 13-local-global.html
- Sentence: し（\ref{ring:local-properties} の続き）、局所的でない性質には反例を与える。さらに、素イデアルごとの局所化ではなく、有限個の元 $f_{1},\dots,f_{n}$（$(f_{1},\dots,f_{n})=A$）による局所化 $A_{f_{i}}$（幾何的には $\Spec A$ の有限開被覆）について局所的な性質を調べる。ネーター性は後者の意味では局所的だが、前者の意味では局所的でない。
  - `top:compact`: NG — 「開被覆」 is an open cover, whereas the card defines compactness and finite intersection property, not the notion of an open cover itself.

## 「非分離」 in 02-algebra/03-commutative-algebra/02-commutative-algebra
- Default: `fld:separable-polynomial` → **no candidate fits**
- Pages: 10-integral-closure-finiteness.html
- Sentence:  は有限生成 $A$ 加群になり（\ref{ring:integral-closure-finite}）、$A$ が PID なら階数 $[L:K]$ の自由加群になる。代数的整数環 $\mathcal{O}_{L}$ が $\Z^{[L:\Q]}$ と同型になるのはこの特別な場合である。体上の有限生成整域については、非分離な場合も含めて整閉包が有限であること（**ネーターの有限性定理**、\tref{ring:noether-finiteness}）を示す。最後に、整閉包を付値環の共通部分として特徴付ける（\ref{ring:integral-closure-valuations}）。
  - `fld:separable-polynomial`: NG — “非分離” is the negation of “分離的” (inseparable), whereas the card defines the positive notion separable; it is not the same notion nor a special case of it.

## 「非退化」 in 02-algebra/03-commutative-algebra/02-commutative-algebra
- Default: `lin:bilinear-form` → **no candidate fits**
- Pages: 10-integral-closure-finiteness.html
- Sentence: $A$ の $L$ における整閉包 $B$ を調べる。$B$ の商体は $L$ で（\ref{ring:clearing-denominators}）、$B$ の元の最小多項式・トレース・ノルムは $A$ に属する（\ref{ring:integral-trace-norm}）。$L/K$ が分離的なら、トレース形式の非退化性から $B$ は有限生成 $A$ 加群になり（\ref{ring:integral-closure-finite}）、$A$ が PID なら階数 $[L:K]$ の自由加群になる。代数的整数環 $\mathcal{O}_{L}$ が $\Z^{[L:\Q]}$ と同型になるのはこの特別な場合である。体上の有限生成整
  - `lin:bilinear-form`: NG — This "非退化" refers to the non-degeneracy of the trace form (a bilinear form on a field extension), not the non-degeneracy of a bilinear form $B:V\times V\to k$ defined via $B^{\flat}:V\to V^{*}$ being an isomorphism as in the card.

## 「ホモトピー」 in 02-algebra/03-commutative-algebra/03-homological-methods
- Default: `at:homotopy` → **no candidate fits**
- Pages: 01-koszul-depth.html
- Sentence: は可換、$A$ は環、$M$ は $A$ 加群。鎖複体・ホモロジー・長完全列は \ref{ha:chain-complex}, \ref{ha:homology}, \ref{ha:long-exact-sequence}、連結射のジグザグの公式は \ref{ha:connecting-natural}、鎖ホモトピーとホモトピー不変性は \ref{ha:chain-homotopy}, \ref{ha:homotopy-invariance}。鎖複体の微分は $d$ と書き、次数を下げる（$d\colon C_{p}\to C_{p-1}$）。
  - `at:homotopy`: NG — This use of ホモトピー refers to chain homotopy of chain complexes, not the homotopy of continuous maps defined in the card.
  - `logic:homotopy-funext`: NG — In the sentence, ホモトピー refers to chain homotopy between chain maps in homological algebra, not the type-theoretic homotopy defined as a pointwise path $f\sim g$.

## 「全射」 in 02-algebra/03-commutative-algebra/03-homological-methods
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 01-koszul-depth.html, 02-projective-dimension.html, 04-regular-ufd.html
- Sentence: **Step 2（$d\ge 1$：$M/yM$ への帰着）.** $I$ の中の極大な $M$ 正則列の最初の元 $y\in I$ をとる。$y$ は $M$ の非零因子で、$I(M/yM)\neq M/yM$（$yM\subset IM\neq M$ なので $M/yM\to M/IM\neq 0$ が全射）。\ref{ring:depth-ext} の Step 2 と同じ議論（$y\in I$ が $\operatorname{Ext}^{i}(A/I,-)$ を消すことから得られる短完全列 $0\to\operatorname{Ext}^{i}(A/I,M)\to\operatorname{Ext}^{i}(A/I
  - `set:injection-surjection`: NG — Here 全射 refers to a surjective map $M/yM\to M/IM$, which matches the card's definition of surjectivity, so it is the same notion.

## 「単射」 in 02-algebra/03-commutative-algebra/03-homological-methods
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 02-projective-dimension.html, 04-regular-ufd.html
- Sentence: **Step 2（入射分解と余シジジー）.** 2 を仮定し、$N$ を任意にとる。十分な入射対象（\ref{ha:enough-injectives}）を使って、単射 $N\to E^{0}$（$E^{0}$ 入射的）、その余核 $C^{1}$ の単射 $C^{1}\to E^{1}$、… と続け、$C^{0}\defeq N$ として短完全列 $0\to C^{j}\to E^{j}\to C^{j+1}\to 0$（$E^{j}$ は入射的）を作る（従属選択公理で各段の選択を並
  - `set:injection-surjection`: NG — Here "単射" means an injective map (monomorphism) in the category-theoretic sense, which matches the card's definition of injective function, so it is the same notion.

## 「安定」 in 02-algebra/03-commutative-algebra/03-homological-methods
- Default: `ring:filtration` → **no candidate fits**
- Pages: 04-regular-ufd.html
- Sentence: とり、$x$ を逆元にした環 $A[1/x]$ の高さ 1 の素イデアルが単項であることを示す。そのために、セールの判定法（\ref{ring:serre-regularity}）から得られる「有限な自由分解」と、局所化での正則性（\ref{ring:regular-localization}）を使い、最後に行列式で「安定自由な階数 1 のイデアルは単項」を示す（\ref{ring:stably-free-principal}）。$A[1/x]$ から $A$ に戻るところで\ref{ring:nagata-criterion}を使う。
  - `ring:filtration`: NG — Here "安定自由" (stably free) is a module-theoretic term, not the stabilization of an $I$-filtration defined in the card.

## 「局所的」 in 02-algebra/03-commutative-algebra/03-homological-methods
- Default: `ring:local-property-def` → **no candidate fits**
- Pages: 04-regular-ufd.html
- Sentence: 正則局所環は一意分解環である（**アウスランダー＝ブクスバウムの定理**、\ref{ring:regular-ufd}）。幾何的には「非特異点の近くでは、余次元 1 の部分多様体は局所的に一つの方程式で定義される」ことを意味する。証明は\term[次元]{ring:krull-dimension}についての帰納法で、正則なパラメーター $x$ を一つとり、$x$ を逆元にした環 $A[1/x]$ の高さ 1 の素イデアルが単項であることを示す。そのために、セールの判定法（\ref{ring:serre
  - `ring:local-property-def`: NG — Here "局所的に" is an adverb meaning "locally" in the geometric sense (near each point), not the ring-theoretic property P being "local" as defined in the card.

## 「準同型」 in 02-algebra/03-commutative-algebra/03-homological-methods
- Default: `ring:homomorphism` → **fits: `grp:homomorphism`**
- Pages: 01-koszul-depth.html
- Sentence: 3. $A$ 準同型 $\varphi\colon M\to N$ は鎖写像 $K(\boldsymbol{x};\varphi)\colon K(\boldsymbol{x};M)\to K(\boldsymbol{x};N)$ を誘導し（各成分で $\varphi$ を施す）、$A$ 加群の短完全列 $0\to M'\to M\to 
  - `ring:homomorphism`: NG — Here "準同型" refers to a homomorphism of $A$-modules (a module homomorphism), not a ring homomorphism as defined in the card.
  - `cat:t-algebra`: NG — Here "準同型" refers to an A-module homomorphism, not a homomorphism of T-algebras.
  - `grp:homomorphism`: OK

## 「近傍」 in 02-algebra/03-commutative-algebra/03-homological-methods
- Default: `top:neighborhood` → **no candidate fits**
- Pages: 02-projective-dimension.html
- Sentence: **高い視点：保存則.** 公式は「深さ（$\mathfrak{m}$ の中で独立に方程式を課せる余地）」と「射影次元（自由加群から $M$ を作るまでに必要な関係の階層の数）」が足して一定になることを言う。幾何的には、$\operatorname{Spec}A$ の閉点の近傍で $M$ が「どれだけ特異か」を、自由分解の長さと正則列の長さの二通りに測っていて、両者が互いに補い合う。射影次元が有限な加群の存在そのものが環に制約を与えることもあり、例えば \ref{ring:auslander-buchsbaum-corollaries.2} から、$k$ の射影次元が有限なら $\opera
  - `top:neighborhood`: NG — This use of 近傍 refers to a neighborhood of a closed point in the Zariski/geometric sense, not the general topological definition of a neighborhood of a point in a topological space given in the card.

## 「零点集合」 in 02-algebra/03-commutative-algebra/03-homological-methods
- Default: `ring:algebraic-set` → **fits: `ag:algebraic-set`**
- Pages: 01-koszul-depth.html
- Sentence: **高い視点：導来的な零点集合.** \ref{ring:koszul-order-independent.3} から $H_{p}(\boldsymbol{x};A)\cong\operatorname{Tor}_{p}^{\mathbb{Z}[t_{1},\dots,t_{n}]}(A,\mathbb{Z})$ である。幾何的には、写像 $\o
  - `ring:algebraic-set`: NG — 零点集合 (zero set) is the set of common zeros, i.e. $V(S)$, whereas the card defines 零点イデアル (vanishing ideal) $I(X)$, which is a different notion.
  - `ag:algebraic-set`: OK

## 「ユークリッド関数」 in 02-algebra/03-commutative-algebra/04-integral-domains
- Default: `ring:euclidean-domain` → **no candidate fits**
- Pages: 01-euclid-pid-ufd.html
- Sentence: **計算の観点.** $\Z$ の互除法の割り算の回数は、小さい方の数の桁数の定数倍以下である（ラメの定理）。ベズーの係数まで含めて多項式時間（\ref{comp:class-p}）で計算できる。余りつきの割り算とユークリッド関数が原始再帰的に計算できる表示をもつユークリッド環では、互除法は原始再帰的である（反復回数が $\delta$ の値で抑えられる。\ref{mod:smith-pr-euclidean}）。一方、一意分解の「分解」を求めるのは別の問題である。$\Z$ の素因数分解には多項式時間のアルゴリズムが知られていない（素数判定は多
  - `ring:euclidean-domain`: NG — ユークリッド関数 is the map δ used in the definition, not the Euclidean ring itself.

## 「位数」 in 02-algebra/03-commutative-algebra/04-integral-domains
- Default: `grp:abelian-group` → **no candidate fits**
- Pages: 04-valuation-rings.html, 05-dedekind.html
- Sentence: **Step 1（1）.** $v(1)=v(1)+v(1)$ から $v(1)=0$、$v(-1)\cdot 2=v(1)=0$ で全順序群には位数 $2$ の元がない（$\gamma>0$ なら $2\gamma>\gamma>0$）ので $v(-1)=0$。和と積で閉じることは付値の条件から。$x\in K^{\times}$ について $v(x)+v(x^{-1})=0$ なので一方は $\ge 0$。単元 $\iff v(x)\ge 0$ かつ $v(x^
  - `grp:abelian-group`: NG — Here "位数" means the order of an element (the least positive n with a^n=1), not the order |G| of a group as defined in the card.
  - `grp:element-order`: NG — Here "位数" refers to the order of an element in an ordered group (no element of order 2), which matches the card's definition of the order of a group element.
  - `cx:isolated-singularity`: NG — Here "位数" means the order of an element in a group, not the order (pole order) of a pole as defined in the card.
  - `cx:elliptic-function`: NG — In the sentence, 位数 means the order of an element in an ordered group, not the number of poles of an elliptic function.

## 「可算」 in 02-algebra/03-commutative-algebra/04-integral-domains
- Default: `set:finite-set` → **no candidate fits**
- Pages: 01-euclid-pid-ufd.html
- Sentence: - **選択公理**：PID で既約元分解が存在することの証明（\ref{ring:pid-ufd}）で、従属選択公理（可算回の選択）を使う。それ以外は使わない。
  - `set:finite-set`: NG — Here "可算回の選択" means countably many choices (a countable number of selections), not a set being countable as defined in the card.

## 「基底」 in 02-algebra/03-commutative-algebra/04-integral-domains
- Default: `mod:free-module` → **no candidate fits**
- Pages: 08-preservation-table.html
- Sentence: 2. ヒルベルトの基底定理 \tref{ring:hilbert-basis}。
  - `mod:free-module`: NG — Here "基底" refers to a finite generating set in the Hilbert basis theorem (ring theory), not a basis of a free module as defined in the card.
  - `grp:free-abelian`: NG — Here "基底" refers to a Hilbert basis (a finite generating set of an ideal), not a basis of a free abelian group.

## 「局所的」 in 02-algebra/03-commutative-algebra/04-integral-domains
- Default: `ring:local-property-def` → **no candidate fits**
- Pages: 04-valuation-rings.html, 05-dedekind.html, 06-prufer.html, 09-counterexamples.html
- Sentence: g:valuation-properties}）を示し、離散付値環を五通りに特徴付ける（\ref{ring:dvr-characterization}）。最後の特徴付け「\term[次元]{ring:krull-dimension} $1$ のネーター正規局所整域」は、\ref{ring:page-dedekind}の局所的な姿である。
  - `ring:local-property-def`: NG — Here「局所的」means "local" in the sense of a local ring (局所環), not the property P being local/global as defined in the card.

## 「普遍性」 in 02-algebra/03-commutative-algebra/04-integral-domains
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 02-gauss-lemma.html, 09-counterexamples.html
- Sentence: g$ を原始的とし、$fg$ が原始的でないとする。$c(fg)$ は単元でないので、ある既約元 $p$（一意分解環では素元。\ref{ring:ufd-criterion}）で割り切れる。$\pi:A\to A/(p)$ と、係数ごとの還元 $\bar\pi:A[x]\to(A/(p))[x]$ を考える（多項式環の普遍性 \ref{ring:polynomial-universal} から環準同型）。
  - `cat:universal-arrow`: NG — 「普遍性」here refers to the universal property of polynomial rings, not the categorical notion of a universal morphism defined in the card.

## 「根基」 in 02-algebra/03-commutative-algebra/04-integral-domains
- Default: `ring:radical-ideal` → **no candidate fits**
- Pages: 04-valuation-rings.html
- Sentence: riterion}、ベズー整域・GCD 整域は \ref{ring:page-gcd-bezout}、正規環は \ref{ring:normal-domain}、整であることの特徴付けは \ref{ring:integral-criterion}、中山の補題は \tref{ring:nakayama}、ネーター環の冪零根基は \ref{ring:noetherian-prime-product}。
  - `ring:radical-ideal`: NG — Here "根基" is part of "冪零根基" (nilradical), which is the radical of the zero ideal, not the radical of a general ideal as defined in the card.

## 「極大イデアル」 in 02-algebra/03-commutative-algebra/04-integral-domains
- Default: `ring:prime-maximal-def` → **no candidate fits**
- Pages: 01-euclid-pid-ufd.html, 03-gcd-bezout.html, 04-valuation-rings.html, 05-dedekind.html, 06-prufer.html, 08-preservation-table.html, 09-counterexamples.html
- Sentence: 2. $p$ が既約元なら $(p)$ は極大イデアルで、したがって $p$ は素元である。
  - `ring:prime-maximal-def`: NG — In a general commutative ring an irreducible element need not generate a maximal ideal (this holds only in a PID/UFD context), so the term is used with an unjustified stronger meaning than the card's definition.

## 「部分集合」 in 02-algebra/03-commutative-algebra/04-integral-domains
- Default: `set:subset` → **no candidate fits**
- Pages: 04-valuation-rings.html
- Sentence: - $y^{-1}\mathfrak{m}\subset\mathfrak{m}$ なら、$\mathfrak{m}$ は $A[y^{-1}]$ 加群として忠実（$K$ の部分集合なので、$0$ でない元を掛けても $0$ にならない）で $A$ 上有限生成なので、\ref{ring:integral-criterion.4} から $y^{-1}$ は $A$ 上整、正規性から $y^{-1}\in A$ となり矛盾。よって $y^{-1}\mathfrak{m}$ は $\mathfrak{
  - `set:subset`: NG — Here "部分集合" refers to a subset of the field $K$ (a set-theoretic subset), which matches the card's definition of subset via $A\subseteq B$.

## 「ゴレンシュタイン環」 in 02-algebra/03-commutative-algebra/05-regular-cm
- Default: `ring:gorenstein` → **fits: `ring:regular-ring`**
- Pages: 03-cohen-macaulay.html, 04-gorenstein.html
- Sentence: 5. ゴレンシュタイン環・完全交叉（\tref{ring:page-gorenstein}）は CM。
  - `ring:gorenstein`: NG — the card defines the local notion (Gorenstein local ring), while the sentence speaks of Gorenstein rings in general, a broader notion not given by this definition.
  - `ring:regular-ring`: OK

## 「フィルトレーション」 in 02-algebra/03-commutative-algebra/05-regular-cm
- Default: `ring:filtration` → **no candidate fits**
- Pages: 04-gorenstein.html
- Sentence: - 素イデアルによるフィルトレーション（\ref{ring:prime-filtration}）$0=M_{0}\subset\cdots\subset M_{n}=M$, $M_{i}/M_{i-1}\cong A/\mathfrak{p}_{i}$ では、$A/\mathfrak{p}_{i}$ が $M$ の部分商なので $\mathfrak{p}_
  - `ring:filtration`: NG — This filtration is an ascending chain of submodules, whereas the card defines a descending chain satisfying \(IM_{n}\subset M_{n+1}\).
  - `logic:filtration`: NG — This is a filtration of a module by prime ideals in commutative algebra, not the modal-logic filtration of a Kripke model defined in the card.

## 「上界」 in 02-algebra/03-commutative-algebra/05-regular-cm
- Default: `set:chain-maximal` → **no candidate fits**
- Pages: 02-depth.html
- Sentence: 1. 正則局所環 $A$ では $\operatorname{depth}A=\dim A$（正則なパラメーター系が正則列で、長さ $\dim A$。\ref{ring:depth-le-dim} の上界と合わせて）。
  - `set:chain-maximal`: NG — Here「上界」means an upper bound for a numerical quantity (depth ≤ dim), not an upper bound of a subset in a partially ordered set as defined in the card.

## 「下限」 in 02-algebra/03-commutative-algebra/05-regular-cm
- Default: `calc:supremum` → **no candidate fits**
- Pages: 04-gorenstein.html
- Sentence: **Step 4（長さの下限）.** $\operatorname{gr}R\cong k[X,Y,Z]$（\ref{ring:regular-gr}）なので $\ell(R/\mathfrak{m}_{R}^{3})=1+3+6=10$。$((\boldsymbol{f})+\mathfrak{m}_{R}^{3})/\mathfrak{m}_
  - `calc:supremum`: NG — Here "下限" means a lower bound on a length/number in a computation, not the order-theoretic infimum of a subset of an ordered set as defined in the card.

## 「共通部分」 in 02-algebra/03-commutative-algebra/05-regular-cm
- Default: `set:intersection-difference` → **no candidate fits**
- Pages: 03-cohen-macaulay.html, 05-operations-invariance.html
- Sentence: 3. 被約な $1$ 次元ネーター局所環は CM：被約なネーター環では随伴素イデアルは極小素イデアルに限る（$\mathfrak{p}=\operatorname{Ann}(x)$, $x\neq 0$ なら、極小素イデアルの共通部分は $0$ なので $x\notin\mathfrak{q}$ となる極小素イデアル $\mathfrak{q}$ があり、$\mathfrak{p}x=0\in\mathfrak{q}$ から $\mathfrak{p}\subset\mathfrak{q}$、極小性から $\mathfrak{p}=\mathfra
  - `set:intersection-difference`: NG — Here「共通部分」means the intersection of prime ideals in a ring, not the set-theoretic intersection defined in the card.

## 「可逆」 in 02-algebra/03-commutative-algebra/05-regular-cm
- Default: `ring:fractional-ideal` → **no candidate fits**
- Pages: 05-operations-invariance.html
- Sentence: regular-examples.4}）。$k[[x]]$ に $s^{2}=1+x$ となる $s=1+c_{1}x+c_{2}x^{2}+\cdots$ がある（$x^{n}$ の係数を比べると $2c_{n}+(c_{1},\dots,c_{n-1}\text{ の式})=\delta_{n1}$ で、$2$ が可逆なので順に解ける）。すると $g=(y-xs)(y+xs)$。$y-xs\in g\hat R$ なら $y-xs=(y-xs)(y+xs)h$ で、整域 $k[[x,y]]$（\ref{ring:preservation-table}）で簡約して $1=(y+xs)h$ となるが、$y+xs$ は極大イデアルに属し矛
  - `ring:fractional-ideal`: NG — Here "可逆" means 2 is invertible (a unit) in the power series ring, not an invertible fractional ideal as defined in the card.

## 「局所的」 in 02-algebra/03-commutative-algebra/05-regular-cm
- Default: `ring:local-property-def` → **no candidate fits**
- Pages: 03-cohen-macaulay.html
- Sentence: **幾何的な意味.** CM 性は「局所的にどこでも同じ\term[次元]{ring:krull-dimension}で、埋め込まれた低次元の部分をもたない」性質の強いもので、代数多様体の交わりの重複度が「素朴に数えた値（長さ）」と一致するための条件（$\ell(A/(x))=e(x;A)$）としても現れる。セールの「交叉重複度」の理論や、双対性（CM なら双
  - `ring:local-property-def`: NG — Here "局所的に" is used in the geometric/intuitive sense of "locally everywhere the same dimension," not the technical algebraic definition of a local property via localizations at primes/maximal ideals.

## 「接錐」 in 02-algebra/03-commutative-algebra/05-regular-cm
- Default: `ring:associated-graded` → **no candidate fits**
- Pages: 01-regular-local-rings.html
- Sentence: **高い視点.** $\mathfrak{m}/\mathfrak{m}^{2}$ の双対 $(\mathfrak{m}/\mathfrak{m}^{2})^{*}$ は点での**ザリスキ接空間**で、\ref{ring:regular-gr} は「正則点では接錐が接空間全体（線形空間）になる」ことを言っている。特異点では接錐が線形でない錐（例：$y^{2}=x^{2}$ の二本の直線、$y^{2}=0$ の重直線）になる（\ref{ring:associated-graded} の後の例）。
  - `ring:associated-graded`: NG — 接錐 (tangent cone) is a geometric cone, not the associated graded ring itself, though it is defined via the associated graded ring.

## 「根基」 in 02-algebra/03-commutative-algebra/05-regular-cm
- Default: `ring:radical-ideal` → **no candidate fits**
- Pages: 03-cohen-macaulay.html
- Sentence: thfrak{m}B+fB$ の場合）.** $f$ はモニックなので $(A/(\boldsymbol{x}))[x]$ の非零因子（最高次の係数が $1$）で、$x_{1},\dots,x_{d},f$ は $B$ 正則列、$B_{P}$ 正則列でもある。$(\boldsymbol{x},f)$ を含む素イデアルは根基をとって $\mathfrak{m}B+fB$ を含み、$B/(\mathfrak{m}B+fB)\cong k[x]/(\bar f)$ は体なので、そのような素イデアルは $P$ だけ。よって $P$ は $(\boldsymbol{x},f)$ 上の極小素イデアルで $\operatorname{ht}P\le 
  - `ring:radical-ideal`: NG — Here "根基" refers to taking the radical of an ideal (根基をとって), which matches the card's definition of the radical $\sqrt{I}$ of an ideal.

## 「極大元」 in 02-algebra/03-commutative-algebra/05-regular-cm
- Default: `set:chain-maximal` → **no candidate fits**
- Pages: 02-depth.html
- Sentence: thfrak{p},M/xM)$。中山の補題から $N/xN\neq 0$ なので、$\mathfrak{p}$ と $x$ に消される $0$ でない元 $\bar m\in M/xM$ がある。$\operatorname{Ann}(\bar m)\supset\mathfrak{p}+xA$ を含む零化イデアルの極大元は随伴素イデアル（\ref{ring:ass-nonempty} の Step 2 の議論）。
  - `set:chain-maximal`: NG — Here "極大元" refers to a maximal element of a set of annihilator ideals ordered by inclusion, which matches the order-theoretic definition of a maximal element in a poset.

## 「正則元」 in 02-algebra/03-commutative-algebra/05-regular-cm
- Default: `ring:regular-sequence` → **no candidate fits**
- Pages: 02-depth.html, 05-operations-invariance.html
- Sentence: **Step 2（帰納法）.** $\operatorname{depth}M$ についての帰納法。$0$ なら明らか。$\operatorname{depth}M\ge 1$ なら $\mathfrak{m}$ の中の $M$ 正則元 $x$ をとると、$\operatorname{depth}M/xM=\operatorname{depth}M-1$（\ref{ring:depth-ext} の Step 2 の短完全列から）。Step 1 の $\mathfrak{q}$ について、$x$ は非零因子なので $x\notin\mathfrak{
  - `ring:regular-sequence`: NG — 「正則元」 is a single element that is a non-zero-divisor, whereas the card defines a regular sequence (正則列), a different notion.

## 「ユークリッド関数」 in 02-algebra/04-associative-rings/01-module-theory
- Default: `ring:euclidean-domain` → **no candidate fits**
- Pages: 06-pid-modules.html
- Sentence: ユークリッド環 $A$ の原始再帰的な表示で、余りつきの割り算 $(a,b)\mapsto(q,r)$（$a=qb+r$、$r=0$ または $\delta(r)<\delta(b)$）とユークリッド関数 $\delta$ も原始再帰的とする。このとき $X\mapsto(P,D,Q)$（$PXQ=D$ はスミス標準形）を計算する原始再帰関数がある。
  - `ring:euclidean-domain`: NG — ユークリッド関数はカードで定義されたユークリッド環の写像 δ を指す用語であり、環そのものの定義ではない。

## 「両側加群」 in 02-algebra/04-associative-rings/01-module-theory
- Default: `mod:module` → **no candidate fits**
- Pages: 01-modules.html, 04-tensor-products.html
- Sentence: - **4 の前提「可換」**：$(af)(bm)=a\,b\,f(m)$ を $b\,(a f(m))$ と書き直すのに $ab=ba$ を使った。非可換環では $af$ は一般に左 $R$ 準同型でなく、$\Hom_{R}(M,N)$ は単に可換群である（$M$ や $N$ が両側加群なら、そこから加群の構造が入る）。
  - `mod:module`: NG — 両側加群 is a bimodule (left and right module structures), which is not defined in the card; the card only defines left/right modules and modules over commutative rings.

## 「可算無限」 in 02-algebra/04-associative-rings/01-module-theory
- Default: `set:finite-set` → **no candidate fits**
- Pages: 01-modules.html
- Sentence: **前提「可換」**：Step 1 で $\mathfrak{m}M$ が部分加群で $M/\mathfrak{m}M$ が $A/\mathfrak{m}$ 上のベクトル空間になることに使った（$a(bm)=(ab)m$ を $\mathfrak{m}$ の元の位置を入れ替えて使う）。非可換環では偽：体 $K$ 上の可算無限次元ベクトル空間 $V$（基底 $e_{0},e_{1},\dots$）と $R=\End_{K}(V)$ について、左 $R$ 加群として $R\cong R^{2}$ となる。実際、$e_{n}\mapsto(e_{n/2},0)$（$n$ 偶数）、$(0,e_{(n-1)/2})$（$n$ 奇数）は線形同型 $\
  - `set:finite-set`: NG — Here "可算無限次元" means countably infinite dimension (a basis indexed by the natural numbers), not a countably infinite set as defined in the card.

## 「完備化」 in 02-algebra/04-associative-rings/01-module-theory
- Default: `calc:cauchy-construction` → **fits: `ring:completion`**
- Pages: 05-flatness.html
- Sentence: })\to(B,\mathfrak{n})$ が局所的（$\mathfrak{m}B\subset\mathfrak{n}$）で $B$ が平坦なら、3 から $B$ は忠実平坦（$\mathfrak{m}B\subset\mathfrak{n}\neq B$ で、極大イデアルは $\mathfrak{m}$ だけ）。完備化 $\hat A$ はこの典型例になる（\ref{ring:page-completion}）。
  - `calc:cauchy-construction`: NG — This "完備化" refers to ring-theoretic completion (inverse limit), not the construction of the reals via Cauchy sequences.
  - `ring:completion`: OK

## 「忠実」 in 02-algebra/04-associative-rings/01-module-theory
- Default: `mod:annihilator` → **no candidate fits**
- Pages: 05-flatness.html
- Sentence: だけで判定する方法**（\ref{mod:flat-ideal-criterion}）を、指標加群（\ref{mod:character-module}）を使って示し、$\Z$ 上では平坦であることとねじれがないことが同値であることを導く（\ref{mod:flat-z}）。最後に、テンソル積が完全性を「反映」する**忠実平坦**な加群を特徴付ける（\ref{mod:faithfully-flat}）。局所化が平坦であることは、加群の局所化を導入する \ref{ring:page-local-properties} で扱う。
  - `mod:annihilator`: NG — the sentence uses 忠実 as part of 忠実平坦 (faithfully flat), not the notion of a faithful module Ann(M)=0 defined in the card.
  - `cat:full-faithful`: NG — Here "忠実" is part of the term "忠実平坦" (faithfully flat) for modules, not the faithfulness of a functor as defined in the card.
  - `grp:faithful-transitive`: NG — Here "忠実" is part of "忠実平坦" (faithfully flat) in module theory, not faithfulness of a group action as defined in the card.

## 「普遍性」 in 02-algebra/04-associative-rings/01-module-theory
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 01-modules.html, 02-exact-sequences.html, 03-projective-injective.html, 04-tensor-products.html
- Sentence: る。体上の線形写像を一つ固定したベクトル空間は多項式環上の加群とみなせる。このページでは、加群・部分加群・剰余加群・準同型を定義して同型定理（\tref{mod:isomorphism-theorems}）を述べ、生成系と有限生成性、零化イデアルと巡回加群（\ref{mod:cyclic-module}）、直積と直和の普遍性（\ref{mod:direct-sum-universal}）、自由加群（\ref{mod:free-module}）を調べる。最後に、可換環上の自由加群の階数が一意に定まることを示す（\ref{mod:rank-invariance}）。
  - `cat:universal-arrow`: NG — 「普遍性」は普遍的性質（universal property）を指す語で、普遍射という特定の組を定義する概念とは異なる。

## 「最小多項式」 in 02-algebra/04-associative-rings/01-module-theory
- Default: `fld:minimal-polynomial` → **no candidate fits**
- Pages: 01-modules.html
- Sentence: 2. $K[x]$ 加群としての $(V,T)$（\ref{mod:module-examples.6}）で、$\operatorname{Ann}(V)$ は $f(T)=0$ となる多項式全体であり、$V$ が有限次元なら $0$ でない（ケイリー＝ハミルトンの定理）。その単項生成元が $T$ の最小多項式である。
  - `fld:minimal-polynomial`: NG — This "minimal polynomial of T" is the monic generator of the annihilator ideal of a linear operator, not the minimal polynomial of an element α in a field extension K⊂L.

## 「決定可能」 in 02-algebra/04-associative-rings/01-module-theory
- Default: `comp:recognizable-decidable` → **no candidate fits**
- Pages: 06-pid-modules.html
- Sentence: 環 $A$ の**表示**とは、自然数の部分集合 $C$（元の**コード**の集合）から $A$ への全射 $c\mapsto[c]$ のことをいう。$C$ が決定可能で、$+,-,\times$ に対応する $C$ 上の関数と、関係「$[c]=[c']$」が計算可能なとき**計算可能な表示**、これらがすべて原始再帰的なとき**原始再帰的な表示**という。行列はコードの組として扱う。
  - `comp:recognizable-decidable`: NG — Here "決定可能" refers to a decidable subset of natural numbers (computability of a set), not specifically to a language decided by a Turing machine as defined in the card.

## 「準同型」 in 02-algebra/04-associative-rings/01-module-theory
- Default: `mod:submodule-homomorphism` → **fits: `grp:homomorphism`**
- Pages: 01-modules.html, 02-exact-sequences.html, 03-projective-injective.html, 04-tensor-products.html, 05-flatness.html, 06-pid-modules.html
- Sentence: - 群論から、可換群・部分群・剰余群・準同型定理・対応定理・第二・第三同型定理（\ref{grp:abelian-group}, \ref{grp:quotient-group}, \ref{grp:first-isomorphism}, \ref{grp:correspondence}, \ref{grp:second-isomorphism}, \ref{g
  - `mod:submodule-homomorphism`: NG — In this sentence "準同型" refers to group homomorphisms from group theory, not the $R$-module homomorphism defined in the card.
  - `cat:t-algebra`: NG — This occurrence refers to group homomorphisms in group theory, not homomorphisms of T-algebras as defined in the card.
  - `grp:homomorphism`: OK

## 「細かい」 in 02-algebra/04-associative-rings/01-module-theory
- Default: `top:finer-coarser` → **no candidate fits**
- Pages: 06-pid-modules.html
- Sentence: 1+\sqrt{-19})/2]$ など）で、自然な表示のもとでスミス標準形が原始再帰的に計算できない例を、本サイトは確かな文献で確認できていない。整数論で現れる PID では、イデアルの生成元を求める問題（単項イデアル問題）が計算量の上で難しくなりうることは知られているが（未収録）、それは原始再帰的かどうかよりずっと細かい（多項式時間かどうかの）問題である。
  - `top:finer-coarser`: NG — Here「細かい」means more fine-grained/detailed (about complexity distinctions), not the topological sense of a finer topology.

## 「計算可能」 in 02-algebra/04-associative-rings/01-module-theory
- Default: `comp:L-computable` → **no candidate fits**
- Pages: 06-pid-modules.html
- Sentence: 環 $A$ の**表示**とは、自然数の部分集合 $C$（元の**コード**の集合）から $A$ への全射 $c\mapsto[c]$ のことをいう。$C$ が決定可能で、$+,-,\times$ に対応する $C$ 上の関数と、関係「$[c]=[c']$」が計算可能なとき**計算可能な表示**、これらがすべて原始再帰的なとき**原始再帰的な表示**という。行列はコードの組として扱う。
  - `comp:L-computable`: NG — Here "計算可能" refers to computability of functions on codes in a computability-theoretic sense, which matches the card's notion of a computable partial function (with decidability of C and computability of the operations), so it is the same notion.
  - `comp:mapping-reducible`: NG — Here "計算可能" refers to computability of functions/relations on codes in computable algebra (a different notion from the card's TM-based definition of computable functions on strings).
  - `comp:computable-functional-relation`: NG — This "computable" refers to computable presentations of rings (functions/relations on codes), not the computability of a relation relative to function oracles as defined in the card.

## 「イデアル」 in 02-algebra/04-associative-rings/02-noncommutative-rings
- Default: `ring:ideal` → **no candidate fits**
- Pages: 01-noncommutative-rings.html, 03-wedderburn-artin.html, 04-jacobson-radical.html
- Sentence: 掛け算の順序を入れ替えられない環を**非可換環**という。行列環 $M_{n}(R)$、加群の自己準同型環 $\End_{R}(M)$、四元数体 $\mathbb{H}$、群環などがその代表で、線形代数・表現論・作用素環で自然に現れる。可換環との最初の違いはイデアルで、左から掛けて閉じるもの・右から掛けて閉じるもの・両方の三種類を区別する必要がある（\ref{mod:one-sided-ideal}）。このページでは、行列環の両側イデアルが係数環の両側イデアルと一対一に対応すること（\ref{mod:matrix-ideals}）を示して、斜体上の行列環が**単純環**であること
  - `ring:ideal`: NG — the card defines ideals only for commutative rings, whereas the sentence explicitly discusses one-sided ideals in noncommutative rings, a different notion.
  - `set:ideal`: NG — This is a ring-theoretic (one-sided/two-sided) ideal, not the set-theoretic ideal on a set defined by the card.
  - `ag:algebraic-set`: NG — This "イデアル" refers to one-sided/two-sided ideals in a possibly noncommutative ring, not the vanishing ideal $I(Y)$ of a subset of $k^{n}$ defined in the card.

## 「コンパクト」 in 02-algebra/04-associative-rings/02-noncommutative-rings
- Default: `top:compact` → **no candidate fits**
- Pages: 05-maschke.html
- Sentence: **高い視点.** マシュケの定理の証明の平均化 $\frac{1}{\abs{G}}\sum_{g}g(\cdot)g^{-1}$ は、「群について不変なものを作る射影」で、コンパクト群ではハール測度による積分に置き換わる（ワイルのユニタリ・トリック）。ホモロジー代数の言葉では、$\abs{G}$ が可逆なら群コホモロジー $H^{n}(G,V)$ が $n\ge 1$ で消えることと同じ現象である（知られている事実）。
  - `top:compact`: NG — Here "コンパクト群" refers to a compact topological group, a special case of a compact topological space, so it matches the card's notion.

## 「ユニタリ」 in 02-algebra/04-associative-rings/02-noncommutative-rings
- Default: `lin:adjoint` → **no candidate fits**
- Pages: 05-maschke.html
- Sentence: **高い視点.** マシュケの定理の証明の平均化 $\frac{1}{\abs{G}}\sum_{g}g(\cdot)g^{-1}$ は、「群について不変なものを作る射影」で、コンパクト群ではハール測度による積分に置き換わる（ワイルのユニタリ・トリック）。ホモロジー代数の言葉では、$\abs{G}$ が可逆なら群コホモロジー $H^{n}(G,V)$ が $n\ge 1$ で消えることと同じ現象である（知られている事実）。
  - `lin:adjoint`: NG — Here "ユニタリ" is part of "ワイルのユニタリ・トリック" (Weyl's unitary trick), a proper name for a technique, not the definition of a unitary operator $f^{*}f=1$.

## 「両側加群」 in 02-algebra/04-associative-rings/02-noncommutative-rings
- Default: `mod:module` → **no candidate fits**
- Pages: 07-wedderburn-principal.html
- Sentence: - 代数 $S$ 上の**両側加群** $M$ は、左右から $S$ が作用し $(am)b=a(mb)$、$k$ の作用が左右で一致するもの。
  - `mod:module`: NG — 両側加群 is a bimodule (left and right actions compatible), not the left/right R-module defined in the card.

## 「位数」 in 02-algebra/04-associative-rings/02-noncommutative-rings
- Default: `grp:abelian-group` → **fits: `grp:element-order`**
- Pages: 01-noncommutative-rings.html, 02-semisimple-modules.html, 03-wedderburn-artin.html, 05-maschke.html
- Sentence: $n\ge 1$ について $\Phi_{n}(x)\defeq\prod(x-\zeta)$（$\zeta$ は位数がちょうど $n$ の $1$ の複素 $n$ 乗根全体を走る）とおくと、
  - `grp:abelian-group`: NG — Here "位数" refers to the order of a root of unity (its multiplicative order), not the order $\abs{G}$ of a group as defined in the card.
  - `grp:element-order`: OK

## 「次元」 in 02-algebra/04-associative-rings/02-noncommutative-rings
- Default: `lin:dimension` → **no candidate fits**
- Pages: 02-semisimple-modules.html, 03-wedderburn-artin.html, 05-maschke.html, 06-density-commutativity.html, 07-wedderburn-principal.html
- Sentence: > Anderson–Fuller *Rings and Categories of Modules* §9 を参考にした。重複度の一意性は、組成列（ジョルダン＝ヘルダー）を使わず、$\Hom(T,M)$ の次元で数える形にした。
  - `lin:dimension`: NG — Here "次元" refers to the dimension of the vector space Hom(T,M), which is exactly the linear-algebra dimension defined in the card.
  - `cat:trace-dimension`: NG — Here "次元" refers to the dimension of a vector space $\Hom(T,M)$, not the categorical dimension $\dim a=\operatorname{tr}(1_{a})$ defined in the card.
  - `ring:krull-dimension`: NG — Here "次元" refers to the dimension of the vector space Hom(T,M), not the Krull dimension of a ring.
  - `ag:dimension`: NG — Here "次元" refers to the dimension of the vector space Hom(T,M), not the Krull dimension of a topological space defined in the card.

## 「逆像」 in 02-algebra/04-associative-rings/02-noncommutative-rings
- Default: `set:function` → **no candidate fits**
- Pages: 07-wedderburn-principal.html
- Sentence: /J$ は半単純で根基 $0$ なので $J(A')\subset J/J^{2}$、逆に冪零な両側イデアルは根基に含まれる。\ref{mod:nil-in-radical}）で、$(J/J^{2})^{2}=0$。Step 2 から部分代数 $B/J^{2}\subset A'$（$B\supset J^{2}$ は逆像）で $B/J^{2}\cong A/J$。
  - `set:function`: NG — Here "逆像" refers to the preimage of a subalgebra under a quotient map, which is a special case of the card's inverse image $f^{-1}[D]$, so it matches.
  - `cat:inverse-image`: NG — Here "逆像" means the preimage of a subalgebra under a quotient map, not the (sheaf-theoretic) inverse image of a presheaf along a continuous map as defined in the card.

## 「代数閉包」 in 02-algebra/05-field-theory/01-extensions
- Default: `fld:algebraically-closed` → **no candidate fits**
- Pages: 02-algebraic-extensions.html, 04-algebraic-closure.html, 05-normal.html, 06-separable.html, 07-finite-fields.html
- Sentence: 拡大 $L/K$ について、$K$ 上代数的な $L$ の元全体 $\bar K_{L}$ は $L$ の部分体である。これを $L$ における $K$ の**相対代数閉包**という。特に、$\C$ の元で $\Q$ 上代数的なもの（**代数的数**）全体 $\bar{\Q}_{\C}$ は体である。
  - `fld:algebraically-closed`: NG — It defines the relative algebraic closure inside an extension, not an algebraic closure field of $K$ as in the card.

## 「加群」 in 02-algebra/05-field-theory/01-extensions
- Default: `mod:module` → **no candidate fits**
- Pages: 02-algebraic-extensions.html
- Sentence: **高い視点.** \ref{fld:finite-algebraic.3} は、環論の「有限生成かつ整 ⇔ 有限加群」（\ref{ring:page-integral-extensions}）の体の場合である：体上では「代数的」と「整」は同じ（最小多項式をモニックにできる）。相対代数閉包は整閉包の類似で、\ref{fld:page-algebraic-closure}は「代数拡大で、それ以上代数的に大きくできない」体として次の次のペ
  - `mod:module`: NG — Here "有限加群" means a finitely generated module over a field (i.e., a finite-dimensional vector space), which is a special case of the module notion defined in the card, so the term matches the definition.
  - `ag:o-module`: NG — Here "加群" is used in the phrase "有限加群" (finite module over a ring/field in integral extensions), not as an \(\mathcal{O}_{X}\)-module on a ringed space.

## 「可算」 in 02-algebra/05-field-theory/01-extensions
- Default: `set:finite-set` → **no candidate fits**
- Pages: 04-algebraic-closure.html
- Sentence: - **選択公理**：存在（極大イデアルの存在と、可算個の構成の選択）と一意性・埋め込み（ツォルンの補題）で使う。
  - `set:finite-set`: NG — Here "可算個" means countably many elements (a countable collection), not the card's definition of a set being countable (|A| ≤ ω).

## 「合成体」 in 02-algebra/05-field-theory/01-extensions
- Default: `fld:compositum` → **no candidate fits**
- Pages: 05-normal.html
- Sentence: （AC）有限次拡大 $L/K$ と、$L$ を含む代数的閉体 $\Omega$ について、$K$ 埋め込み $\sigma\colon L\to\Omega$ 全体の像の合成体 $N\defeq\prod_{\sigma}\sigma(L)$ は、$L$ を含む $K$ 上有限次の正規拡大で、$L\subset N'\subset\Omega$ となる $K$ 上の正規拡大 $N'$ はすべて $N$ を含む。$N$ を $L/K$ の（$\Omega$ の中の）**正規閉包**という。
  - `fld:compositum`: NG — Here "合成体" refers to the compositum of the images σ(L) inside Ω (the subfield generated by their union), which matches the card's definition of compositum of subfields.

## 「普遍性」 in 02-algebra/05-field-theory/01-extensions
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 01-degree.html, 04-algebraic-closure.html
- Sentence: ef{ring:domain-field-def}）。体の準同型は単射（\ref{ring:field-ideals.2}）。標数・フロベニウス写像・素部分環は \ref{ring:characteristic}, \ref{ring:char-domain}, \ref{ring:prime-subring}、商体の普遍性は \ref{ring:fraction-field}。
  - `cat:universal-arrow`: NG — 「普遍性」はここでは商体の普遍性という別の概念を指し、普遍射の定義ではない。

## 「有限生成」 in 02-algebra/05-field-theory/01-extensions
- Default: `ring:generated-ideal-def` → **no candidate fits**
- Pages: 02-algebraic-extensions.html
- Sentence: **高い視点.** \ref{fld:finite-algebraic.3} は、環論の「有限生成かつ整 ⇔ 有限加群」（\ref{ring:page-integral-extensions}）の体の場合である：体上では「代数的」と「整」は同じ（最小多項式をモニックにできる）。相対代数閉包は整閉包の類似で、\ref{fld:page-algebraic-closure}は「代数拡大で、それ以上代数的に大きくできない
  - `ring:generated-ideal-def`: NG — Here "有限生成" refers to a finitely generated algebra (ring) over a field, not a finitely generated ideal as defined in the card.
  - `grp:generated-subgroup`: NG — Here "有限生成" refers to a finitely generated ring/algebra (or module), not a finitely generated group as defined in the card.
  - `mod:generated-submodule`: NG — Here "有限生成" refers to a finitely generated ring/algebra (有限生成環・代数), not a finitely generated module as defined in the card.

## 「次元」 in 02-algebra/05-field-theory/01-extensions
- Default: `lin:dimension` → **no candidate fits**
- Pages: 01-degree.html, 05-normal.html, 07-finite-fields.html
- Sentence: 体 $K$ を部分体として含む体 $L$ を $K$ の**拡大体**といい、$L/K$ と書く（\ref{fld:extension}）。$L$ は $K$ 上のベクトル空間なので、その次元として**拡大次数** $[L:K]$ が定まり、塔 $K\subset L\subset M$ について $[M:K]=[M:L][L:K]$ が成り立つ（\ref{fld:tower-law}）。$L$ の元 $\alpha$ が $K$ 係数の多項式の根になるとき**代数的**といい、そのような多項式のうち次数最
  - `lin:dimension`: NG — This "次元" is the dimension of \(L\) as a vector space over \(K\) (the extension degree), which is exactly the vector-space dimension defined in the card, so it matches.
  - `cat:trace-dimension`: NG — This "次元" is the dimension of a vector space (field extension degree), not the categorical trace/dimension of a dualizable object defined in the card.
  - `ring:krull-dimension`: NG — Here "次元" refers to the dimension of \(L\) as a vector space over \(K\) (the extension degree), not the Krull dimension of a ring.
  - `ag:dimension`: NG — Here "次元" refers to the dimension of a vector space over a field, not the dimension of a topological space defined via chains of irreducible closed subsets.

## 「準同型」 in 02-algebra/05-field-theory/01-extensions
- Default: `grp:homomorphism` → **fits: `ring:homomorphism`**
- Pages: 01-degree.html, 06-separable.html, 07-finite-fields.html
- Sentence: - 体は可換（\ref{ring:domain-field-def}）。体の準同型は単射（\ref{ring:field-ideals.2}）。標数・フロベニウス写像・素部分環は \ref{ring:characteristic}, \ref{ring:char-domain}, \ref{ring:prime-subring}、商体の普遍性は \ref{ring:fraction-field}。
  - `grp:homomorphism`: NG — It refers to a homomorphism of fields (a ring homomorphism), not the group homomorphism defined in the card.
  - `cat:t-algebra`: NG — This “準同型” refers to field homomorphisms, not homomorphisms of T-algebras.
  - `ring:homomorphism`: OK

## 「ホモロジー」 in 02-algebra/05-field-theory/02-galois-theory
- Default: `ha:homology` → **no candidate fits**
- Pages: 04-norm-kummer.html
- Sentence: **高い視点.** クンマー対は、短完全列 $1\to\mu_{n}\to\bar K^{\times}\xrightarrow{n}\bar K^{\times}\to1$ のガロアコホモロジーの長完全列とヒルベルト 90 から得られる同型 $K^{\times}/K^{\times n}\cong H^{1}(G_{K},\mu_{n})=\Hom(G_{K},\mu_{n})$ の言い換えである（$G_{K}$ は絶対ガロア群。無限次ガロア理論 \tref{fld:page-infinite-galois
  - `ha:homology`: NG — This “ホモロジー” refers to Galois cohomology (group cohomology), not the homology of a chain complex as defined in the card.

## 「乗法群」 in 02-algebra/05-field-theory/02-galois-theory
- Default: `ring:unit` → **no candidate fits**
- Pages: 03-cyclotomic.html, 04-norm-kummer.html
- Sentence: - ガウスの補題の帰結（$\Q[x]$ での分解は $\Z[x]$ でできる）は \ref{ring:gauss-irreducible}、分離性の判定は \ref{fld:separable-criterion}、乗法群の有限部分群は \ref{fld:finite-multiplicative-cyclic}、ガロア拡大と基本定理は \ref{fld:galois-equivalent}, \ref{fld:fundamental-theorem}。
  - `ring:unit`: NG — Here "乗法群" refers to the multiplicative group of a field (its nonzero elements), not specifically the unit group $A^{\times}$ of a general ring as defined in the card.

## 「位数」 in 02-algebra/05-field-theory/02-galois-theory
- Default: `grp:abelian-group` → **no candidate fits**
- Pages: 01-artin.html, 02-fundamental-theorem.html, 03-cyclotomic.html, 04-norm-kummer.html, 05-solvability.html, 06-discriminant.html, 07-constructions.html
- Sentence: 3. $x^{3}-2$ の分解体 $L=\Q(\sqrt[3]{2},\omega)$：$[L:\Q]=6$ でガロア（標数 $0$ の分解体）。$\operatorname{Gal}(L/\Q)$ は根 $\sqrt[3]{2}\omega^{k}$（$k=0,1,2$）の置換として忠実に作用し、位数 $6$ なので $S_{3}$ 全体と同型。
  - `grp:abelian-group`: NG — Here "位数" means the order (number of elements) of the Galois group, whereas the card defines 位数 as the order of a group—this is the same notion, so it should be ok; however the sentence's 位数 6 refers to the group order, matching the definition.
  - `grp:element-order`: NG — Here "位数" refers to the order (number of elements) of the Galois group, not the order of a group element as defined in the card.
  - `cx:isolated-singularity`: NG — Here "位数" means the order (number of elements) of the Galois group, not the order of a pole as defined in the card.
  - `cx:elliptic-function`: NG — Here "位数" means the order (cardinality) of a group, not the number of poles of an elliptic function.

## 「定規とコンパス」 in 02-algebra/05-field-theory/02-galois-theory
- Default: `fld:constructible` → **no candidate fits**
- Pages: 07-constructions.html
- Sentence: ガロア理論の古典的な応用を三つ扱う。(1) 定規とコンパスで作図できる数は、2 次拡大を繰り返して得られる数であり、ガロア閉包の次数が 2 の冪であるものと一致する。これから、立方体の倍積・角の 3 等分の不可能性と、正 $n$ 角形が作図できる $n$ の決定（ガウス＝ヴァンツェル）が従う。(2) 代数学の基本定理（$\mathbb{C}$ は代数閉体）を、実数の二つの解析
  - `fld:constructible`: NG — The term "定規とコンパス" refers to the drawing tools (ruler and compass), not the defined notion of constructible numbers itself.

## 「普遍性」 in 02-algebra/05-field-theory/02-galois-theory
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 06-discriminant.html
- Sentence: **Step 1（1）.** $S_{n}$ は変数の置換で $F$ の自己同型として作用し（\ref{ring:polynomial-universal} と商体の普遍性）、$E$ を固定する。\ref{fld:artin-theorem}から $F/F^{S_{n}}$ はガロアで $\operatorname{Gal}=S_{n}$、$[F:F^{S_{n}}]=n!$。一方 $F$ は $E$ 上 $\prod(T-x_{i})\in E[T]$ の分解体なので $[F:E]\l
  - `cat:universal-arrow`: NG — 「普遍性」here refers to the universal property of a quotient field (a universal mapping property), not a universal arrow/morphism as defined in the card.

## 「次元」 in 02-algebra/05-field-theory/02-galois-theory
- Default: `lin:dimension` → **no candidate fits**
- Pages: 04-norm-kummer.html
- Sentence: なら $q=1$ で $\operatorname{Tr}=\sum_{i}\sigma_{i}$。\ref{fld:dedekind-independence}から、相異なる $\sigma_{i}$ の係数 $1$ の和は $0$ 写像でない。$\operatorname{Tr}$ は $K$ 線形で値は $1$ 次元の $K$ にあるので、$0$ でなければ全射。
  - `lin:dimension`: NG — Here "1次元" refers to the dimension of the field $K$ as a vector space over itself, which is the same notion of dimension (dimension of a vector space over a field) defined in the card.
  - `cat:trace-dimension`: NG — Here "1次元" refers to the dimension of a vector space over $K$, not the categorical dimension $\dim a$ of a dualizable object defined in the card.
  - `ring:krull-dimension`: NG — Here "次元" refers to the dimension of a vector space over $K$, not the Krull dimension of a ring.
  - `ag:dimension`: NG — Here "1次元" refers to the dimension of the field K as a vector space over itself, not the Krull dimension of a topological space defined in the card.

## 「ファイバー関手」 in 02-algebra/05-field-theory/03-advanced-galois-theory
- Default: `fld:fiber-functor` → **no candidate fits**
- Pages: 03-grothendieck-galois.html
- Sentence: の圏は、基本群 $\pi_{1}(X,x)$ が作用する集合の圏と同値で、対応は「基点の上のファイバー」をとる関手で与えられる。\ref{fld:fiber-functor} の $F(A)=\Hom_{K}(A,L)$ は、$\Spec A\to\Spec K$ の「幾何学的な点の上のファイバー」にあたる（それで**ファイバー関手**と呼ぶ）。体の拡大は「点の被覆」で、ガロア群は「点の基本群」である。
  - `fld:fiber-functor`: NG — Although the sentence calls $F(A)=\Hom_{K}(A,L)$ a fiber functor, the card defines this as the functor $F$ from étale $K$-algebras to $G$-sets, not the general fiber functor notion described in the sentence.

## 「位数」 in 02-algebra/05-field-theory/03-advanced-galois-theory
- Default: `grp:abelian-group` → **no candidate fits**
- Pages: 01-galois-connection.html, 03-grothendieck-galois.html
- Sentence: peratorname{Aut}(L/K)\rvert\le[L:K]$。\ref{fld:extension-count}）。\ref{fld:artin-theorem}から $[L:L^{H}]=\lvert H\rvert$。$H\subset\operatorname{Aut}(L/L^{H})$ で、右辺の位数は $[L:L^{H}]$ 以下（\ref{fld:extension-count}）なので、$H=\operatorname{Aut}(L/L^{H})$。
  - `grp:abelian-group`: NG — Here "位数" refers to the order (cardinality) of the automorphism group $H$, not the order of a group element as in the definition card, which defines 位数 as $\abs{G}$ for a group $G$.
  - `grp:element-order`: NG — Here "位数" means the order (cardinality) of the group $\operatorname{Aut}(L/L^{H})$, not the order of an element $a$ in a group as defined in the card.
  - `cx:isolated-singularity`: NG — Here "位数" means the order (cardinality) of a group, not the order of a pole.
  - `cx:elliptic-function`: NG — Here "位数" means the order (cardinality) of a group, not the number of poles of an elliptic function.

## 「全射」 in 02-algebra/05-field-theory/03-advanced-galois-theory
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 02-etale-algebras.html, 03-grothendieck-galois.html, 04-infinite-galois.html
- Sentence: $ から体 $L$ への $L$ 代数の準同型は $n$ 個の射影だけ（核は極大イデアルで、それは一つの成分を $0$ にするもの）なので、$\lvert\operatorname{Aut}(L/K)\rvert=\lvert\Hom_{K}(L,L)\rvert=n=[L:K]$（体の自己準同型は単射で、次数を比べて全射）。\ref{fld:galois-equivalent} から $L/K$ はガロア。
  - `set:injection-surjection`: NG — Here 全射 refers to surjectivity of a field self-homomorphism (a map being onto), which matches the card's definition of a surjective function, so it is the same notion.

## 「完備化」 in 02-algebra/05-field-theory/03-advanced-galois-theory
- Default: `calc:cauchy-construction` → **no candidate fits**
- Pages: 04-infinite-galois.html
- Sentence: $G_{K}=\operatorname{Gal}(K^{\mathrm{sep}}/K)$ は、\ref{fld:page-grothendieck-galois}の無限版で、$K$ のエタール代数の圏を「$G_{K}$ が連続に作用する有限集合の圏」として表す。$\hat\Z$ は「円周の基本群 $\Z$ の射有限完備化」で、有限体はこの意味で円周に似ている（ヴェイユ予想の考え方の出発点）。
  - `calc:cauchy-construction`: NG — This use of 完備化 refers to profinite completion of a group, not the construction of the real numbers via Cauchy sequences.
  - `ring:completion`: NG — This is profinite completion of a group, not the I-adic completion of a module defined in the card.
  - `top:completion`: NG — Here "完備化" means profinite completion of a group, not the metric-space completion defined in the card.

## 「普遍性」 in 02-algebra/05-field-theory/03-advanced-galois-theory
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 02-etale-algebras.html
- Sentence: **Step 4（4 と不等式）.** $\Hom_{K}(A,\bar K)\cong\Hom_{\bar K}(\bar A,\bar K)$（係数拡大の普遍性 \ref{mod:extension-of-scalars}）。$A=\prod_{j}A_{j}$（局所アルティン環、剰余体 $k_{j}$）とすると、体への準同型の核は素イデアルで、$A$ の素イデアルは $A_{1}\times\dots\times\mathfrak{m}_{j}\times\dots\tim
  - `cat:universal-arrow`: NG — 「普遍性」 here refers to the universal property of scalar extension (a general universal-property notion), not specifically to a universal arrow/morphism from an object to a functor as defined in the card.

## 「次元」 in 02-algebra/05-field-theory/03-advanced-galois-theory
- Default: `lin:dimension` → **no candidate fits**
- Pages: 02-etale-algebras.html
- Sentence: 体 $K$ 上の有限次元可換代数で、有限次分離拡大の直積と同型なものを**エタール代数**（有限分離代数）という。分離性は体の性質として定義したが（\ref{fld:separable-polynomial}）、エタール代数の言葉では「代数閉包へ係数拡大すると被約になる」「代数閉包への埋め込みがちょうど次元の個数だけある」と、元をとらずに言い換えられる。この言い換えで、ガロア拡大は「$L\otimes_{K}L\cong L^{[L:K]}$ となる拡大」、つまり「自分自身で係数拡大すると完全に分解する拡大」として特徴付けられる。次のページの\ref{fld:page-grothendieck-galois}では、エター
  - `lin:dimension`: NG — Here "次元" means the dimension of the algebra as a vector space over $K$ (the number of embeddings into the algebraic closure), which matches the card's definition of dimension as the cardinality of a basis.
  - `cat:trace-dimension`: NG — This "次元" means the dimension of a finite-dimensional algebra over a field, not the categorical dimension $\dim a=\operatorname{tr}(1_{a})$ defined in the card.
  - `ring:krull-dimension`: NG — Here "次元" refers to the dimension of a finite-dimensional algebra over a field (vector space dimension), not the Krull dimension of a ring defined in the card.
  - `ag:dimension`: NG — Here "次元" means the dimension of a finite-dimensional algebra over a field (a linear-algebra notion), not the Krull dimension of a topological space defined in the card.

## 「準同型」 in 02-algebra/05-field-theory/03-advanced-galois-theory
- Default: `grp:homomorphism` → **fits: `ring:homomorphism`**
- Pages: 02-etale-algebras.html, 03-grothendieck-galois.html, 04-infinite-galois.html
- Sentence: tep 4（4 と不等式）.** $\Hom_{K}(A,\bar K)\cong\Hom_{\bar K}(\bar A,\bar K)$（係数拡大の普遍性 \ref{mod:extension-of-scalars}）。$A=\prod_{j}A_{j}$（局所アルティン環、剰余体 $k_{j}$）とすると、体への準同型の核は素イデアルで、$A$ の素イデアルは $A_{1}\times\dots\times\mathfrak{m}_{j}\times\dots\times A_{r}$ の形なので、$\Hom_{K}(A,\bar K)=\bigsqcup_{j}\Hom_{K}(k_{j},\bar K)$。$\lvert\Hom
  - `grp:homomorphism`: NG — Here "準同型" refers to ring homomorphisms between rings/fields, not the group homomorphism defined in the card.
  - `cat:t-algebra`: NG — Here "準同型" means a ring homomorphism between fields/rings, not a homomorphism of T-algebras as defined in the card.
  - `ring:homomorphism`: OK

## 「直和」 in 02-algebra/05-field-theory/03-advanced-galois-theory
- Default: `mod:direct-sum` → **no candidate fits**
- Pages: 02-etale-algebras.html
- Sentence: **Step 1（1 ⇒ 3）.** $A=\prod_{j}L_{j}$ なら $\bar A=\prod_{j}(L_{j}\otimes_{K}\bar K)$（テンソル積は直積（有限直和）と交換）。$L_{j}=K(\alpha_{j})\cong K[x]/(f_{j})$（原始元定理 \tref{fld:primitive-element}、$f_{j}$ は分離的な最小多項式）なので、\ref{fld:simple-base-change} から $L_{j}\otimes\bar K\cong
  - `mod:direct-sum`: NG — Here "直和" refers to a finite direct sum of fields/modules used in the tensor product context, which matches the card's notion of direct sum (and finite direct product equals direct sum), so it is the same notion.
  - `rep:constructions`: NG — Here "直和" refers to the direct sum of algebras/fields in a tensor product decomposition, not the direct sum of group representations defined in the card.

## 「自己準同型」 in 02-algebra/05-field-theory/03-advanced-galois-theory
- Default: `ring:homomorphism` → **no candidate fits**
- Pages: 02-etale-algebras.html
- Sentence: 係数拡大の普遍性）。$L^{n}$ から体 $L$ への $L$ 代数の準同型は $n$ 個の射影だけ（核は極大イデアルで、それは一つの成分を $0$ にするもの）なので、$\lvert\operatorname{Aut}(L/K)\rvert=\lvert\Hom_{K}(L,L)\rvert=n=[L:K]$（体の自己準同型は単射で、次数を比べて全射）。\ref{fld:galois-equivalent} から $L/K$ はガロア。
  - `ring:homomorphism`: NG — Here "自己準同型" refers to a field endomorphism (a homomorphism from a field to itself), not a ring endomorphism as defined in the card, since the sentence concerns field homomorphisms $\Hom_{K}(L,L)$.

## 「近傍」 in 02-algebra/05-field-theory/03-advanced-galois-theory
- Default: `top:neighborhood` → **no candidate fits**
- Pages: 04-infinite-galois.html
- Sentence: **Step 3（2）.** $\operatorname{Gal}(L/L^{H})$ は 1 から閉で $H$ を含むので $\bar H\subset\operatorname{Gal}(L/L^{H})$。逆に $\sigma\in\operatorname{Gal}(L/L^{H})$ と基本近傍 $\sigma\operatorname{Gal}(L/N)$（$N\in\mathcal{N}$）をとる。制限の像 $H_{N}\subset\operatorname{Gal}(N/K)$ の固定体は $N^{H_{N}}=N\cap L^{H}$ で、$\sigma|_{N}$ はこれを固定するので、有限次の基
  - `top:neighborhood`: NG — Here "基本近傍" (basic neighborhood) refers to a neighborhood basis in the Krull topology on a Galois group, not a neighborhood of a point in a topological space as defined in the card.

## 「非可算」 in 02-algebra/05-field-theory/03-advanced-galois-theory
- Default: `set:finite-set` → **no candidate fits**
- Pages: 04-infinite-galois.html
- Sentence: 2. $\langle\varphi\rangle\cong\Z$ は閉でない：閉なら 1 から $G$ 全体だが、$G$ は非可算である（$n=k!$ の部分列について、$c_{j}\in\{0,1\}$ を選んで $\sum_{j<k}c_{j}\,j!\bmod k!$ を並べると両立する列になる。一般の $n$ の成分は $n\mid k!$ となる $k$ の値の $\bmod n$ で決まる。$c_{j}$ が初めて異なる $j$ で 
  - `set:finite-set`: NG — Here "非可算" describes the group $G$ as uncountable, which matches the card's definition of a set that is not countable (not equinumerous with a subset of $\omega$).

## 「代数閉包」 in 02-algebra/05-field-theory/04-transcendental-extensions
- Default: `fld:algebraically-closed` → **no candidate fits**
- Pages: 01-transcendence-basis.html, 02-separably-generated.html
- Sentence: - 代数拡大の推移性と相対代数閉包は \ref{fld:algebraic-transitive}, \ref{fld:relative-algebraic-closure}、代数閉包の存在と一意性は \ref{fld:algebraic-closure-existence}, \ref{fld:algebraic-closure-uniqueness
  - `fld:algebraically-closed`: NG — Here "代数閉包" refers to the algebraic closure of a field (existence and uniqueness), which matches the card's definition of 代数閉包 as an algebraic extension that is algebraically closed.

## 「基底」 in 02-algebra/05-field-theory/04-transcendental-extensions
- Default: `mod:free-module` → **no candidate fits**
- Pages: 01-transcendence-basis.html, 02-separably-generated.html
- Sentence: 代数的でない拡大を調べるには、ベクトル空間の基底に当たる**超越基底**を使う：拡大 $L/K$ の部分集合 $B$ で、$B$ の元の間に多項式の関係がなく（**代数的独立**）、$L$ が $K(B)$ 上代数的になるもの。ベクトル空間の基底と同じく、超越基底は存在し（選択公理）、その濃度は一定である（**超越次数**）。証明の鍵は、代数的従属性が一次従属性と同
  - `mod:free-module`: NG — This is about a transcendence basis of a field extension, not a basis of a free module as defined in the card.
  - `grp:free-abelian`: NG — Here 基底 refers to a transcendence basis of a field extension, not a basis of a free abelian group.

## 「有限生成」 in 02-algebra/05-field-theory/04-transcendental-extensions
- Default: `ring:generated-ideal-def` → **no candidate fits**
- Pages: 01-transcendence-basis.html, 02-separably-generated.html
- Sentence: - **選択公理**：超越基底の存在（ツォルンの補題）と、無限の場合の濃度の比較（基数の積）で使う。有限生成の拡大では使わない。
  - `ring:generated-ideal-def`: NG — Here "有限生成" refers to field extensions being finitely generated, not ideals in a commutative ring.
  - `grp:generated-subgroup`: NG — Here "有限生成" refers to finitely generated field extensions, not finitely generated groups as defined in the card.
  - `mod:generated-submodule`: NG — Here "有限生成" refers to finitely generated field extensions, not finitely generated modules as defined in the card.

## 「次元」 in 02-algebra/05-field-theory/04-transcendental-extensions
- Default: `lin:dimension` → **fits: `ring:krull-dimension`**
- Pages: 01-transcendence-basis.html, 02-separably-generated.html
- Sentence: 2. 体上有限生成な整域 $A$ の次元は $\operatorname{trdeg}_{K}\operatorname{Frac}A$（ネーターの正規化 \ref{ring:noether-normalization} で $A$ が $K[y_{1},\dots,y_{d}]$ 上整になるとき、$y_{i}$ が超越基底）。
  - `lin:dimension`: NG — This "次元" is the Krull dimension of a ring, not the dimension of a vector space as defined in the card.
  - `cat:trace-dimension`: NG — This "次元" is the Krull dimension of a ring, not the categorical dimension $\dim a=\operatorname{tr}(1_{a})$ defined in the card.
  - `ring:krull-dimension`: OK

## 「超越的」 in 02-algebra/05-field-theory/04-transcendental-extensions
- Default: `fld:minimal-polynomial` → **no candidate fits**
- Pages: 01-transcendence-basis.html, 02-separably-generated.html
- Sentence: $F:=K(S)$ とおく。$y$ は $F(x)$ 上代数的なので、分母を払って $0$ でない $P(X,T)\in F[X,T]$ で $P(x,y)=0$ となるものがある。$P=\sum_{i}G_{i}(T)X^{i}$（$G_{i}\in F[T]$）と書く。$y$ は $F$ 上超越的なので、$0$ でない $G_{i}$ について $G_{i}(y)\neq0$。よって $P(X,y)=\sum_{i}G_{i}(y)X^{i}$ は $F(y)$ 上の $0$ でない多項式で、$x$ を根にもつ。
  - `fld:minimal-polynomial`: NG — Here "超越的" is used for y over F, meaning y is transcendental over F, which matches the card's definition of being transcendental over a field (the kernel of the substitution map is zero).

## 「クラス」 in 02-algebra/06-homological-algebra/01-abelian-categories
- Default: `set:class` → **no candidate fits**
- Pages: 05-freyd-mitchell.html
- Sentence: - $\mathbf{A}$ の**充満部分圏** $\mathbf{B}$ は、対象の部分クラスと、その間の $\mathbf{A}$ の射すべてからなる部分圏。
  - `set:class`: NG — Here "クラス" refers to a collection of objects in a category (a categorical class), not the set-theoretic class defined by a logical formula in the card.

## 「ホモトピー」 in 02-algebra/06-homological-algebra/01-abelian-categories
- Default: `at:homotopy` → **no candidate fits**
- Pages: 04-chain-complexes.html
- Sentence: 渡される」ことを表す。比喩で言えば、三本の水路 $A$, $B$, $C$ が並んで流れているとき、$C$ でせき止められた水（$H_{n}(C)$ の元）は、行き場を失った分だけ一段下の $A$ に溢れ出す（$\delta_{n}$）。圏論的には、$H_{n}$ は鎖複体の圏からの加法関手で、鎖ホモトピーで割った圏（ホモトピー圏）を経由し、長完全列はその「三角形」の構造の影である。
  - `at:homotopy`: NG — This sentence uses "ホモトピー" only in the compound "鎖ホモトピー" (chain homotopy), a different notion from the topological homotopy of continuous maps defined in the card.
  - `logic:homotopy-funext`: NG — This use of ホモトピー refers to chain homotopy in homological algebra, not the type-theoretic homotopy defined as a pointwise identity type between dependent functions.

## 「ホモロジー」 in 02-algebra/06-homological-algebra/01-abelian-categories
- Default: `ha:homology` → **no candidate fits**
- Pages: 01-additive.html, 02-abelian.html, 03-diagram-lemmas.html, 04-chain-complexes.html
- Sentence: ホモロジー代数の内容は、読む順に次の三か所に分かれている。
  - `ha:homology`: NG — Here "ホモロジー" is part of the field name "homological algebra," not the homology group $H_{n}(C)$ defined in the card.

## 「モノイド」 in 02-algebra/06-homological-algebra/01-abelian-categories
- Default: `cat:monoid-object` → **no candidate fits**
- Pages: 01-additive.html
- Sentence: **一般化.** 零対象・有限の積・有限の余積をもつ圏で、標準的な射 $a\sqcup b\to a\times b$ がつねに同型なら、$f+f'\defeq\nabla(f\times f')\Delta$ で各 hom 集合が可換モノイドになり、さらに $1_{a}$ に加法逆元があれば加法圏になる（Mac Lane 第 VIII 章 §2 演習 4）。つまり加法構造は「積と余積の一致」から復元できる。無限の積と余積は一般に一致しない（$\mathbf{Ab}$ で $\bigoplus\mathbb{Z}\to\prod\mathbb{Z}$ は同型
  - `cat:monoid-object`: NG — Here "モノイド" refers to a monoid object in a monoidal category (the definition card's notion), but the sentence uses it for a commutative monoid structure on hom-sets, which is a different (enriched/ordinary algebraic) notion.

## 「全単射」 in 02-algebra/06-homological-algebra/01-abelian-categories
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 05-freyd-mitchell.html
- Sentence: **充満忠実.** 米田埋め込み（\ref{cat:yoneda-embedding}）。ここで $\mathbf{A}(-,a)$ は加法構造によって $\mathbf{Ab}$ 値の関手であり、米田の補題の全単射は加法的な自然変換についても同じ形で成り立つ。
  - `set:injection-surjection`: NG — Here 全単射 refers to a bijection between hom-sets/natural transformations in the Yoneda lemma, not a bijective function between sets as defined in the card.

## 「全射」 in 02-algebra/06-homological-algebra/01-abelian-categories
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 02-abelian.html, 03-diagram-lemmas.html, 05-freyd-mitchell.html
- Sentence: アーベル群や加群の圏では、核と余核が十分にあり、「単射は核、全射は余核」という性質が成り立つ。これを公理にしたものが**アーベル圏**（\ref{ha:abelian-category}）である。アーベル圏ではすべての射が「エピ射のあとにモノ射」に関手的に分解し（\ref{ha:image-factorization}）、像・余像・完全列という、加群の計算で使う概念がそのまま意味を
  - `set:injection-surjection`: NG — In category theory, 全射 refers to an epimorphism, not necessarily a surjective function as defined in the card.

## 「単射」 in 02-algebra/06-homological-algebra/01-abelian-categories
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 02-abelian.html, 03-diagram-lemmas.html, 04-chain-complexes.html, 05-freyd-mitchell.html
- Sentence: アーベル群や加群の圏では、核と余核が十分にあり、「単射は核、全射は余核」という性質が成り立つ。これを公理にしたものが**アーベル圏**（\ref{ha:abelian-category}）である。アーベル圏ではすべての射が「エピ射のあとにモノ射」に関手的に分解し（\ref{ha:image-factorization}）、像・余像・完全列という、加群の計算で使う概念がその
  - `set:injection-surjection`: NG — In category theory, 単射 here means a monomorphism (a categorical generalization), not necessarily an injective function as defined by the card.

## 「同値関係」 in 02-algebra/06-homological-algebra/01-abelian-categories
- Default: `cat:internal-equivalence-relation` → **no candidate fits**
- Pages: 03-diagram-lemmas.html
- Sentence: $\equiv$ は同値関係で、射 $f\colon a\to b$ は $x\equiv y$ を $fx\equiv fy$ に移す。また $x\equiv0$ と $x=0$ は同値。
  - `cat:internal-equivalence-relation`: NG — Here "同値関係" refers to an ordinary equivalence relation on elements (a set-theoretic relation), not the internal equivalence relation given by a monomorphism $R\to A\times A$ in a finitely complete category as defined in the card.

## 「同型射」 in 02-algebra/06-homological-algebra/01-abelian-categories
- Default: `cat:isomorphism` → **no candidate fits**
- Pages: 02-abelian.html
- Sentence: アーベル圏で、モノ射かつエピ射である射は同型射である。
  - `cat:isomorphism`: NG — In an abelian category a morphism that is both monic and epic is an isomorphism, which is exactly the notion defined by the card.

## 「推移律」 in 02-algebra/06-homological-algebra/01-abelian-categories
- Default: `set:total-order` → **no candidate fits**
- Pages: 03-diagram-lemmas.html
- Sentence: 反射律（$u=v=1$）と対称律は明らか。推移律：$xu=yv$, $yw=zr$（$u,v,w,r$ エピ）とし、$v$ と $w$ の引き戻し（$vv'=ww'$ となる $v',w'$）をとると、\ref{ha:pullback-epi} から $v',w'$ はエピ。$x(uv')=yvv'=yww'=z(rw')$ で、$uv'$, $rw'$ はエピ。$
  - `set:total-order`: NG — Here 推移律 refers to transitivity of a relation in a pullback argument, not the specific transitivity condition (2) of a strict partial order defined in the card.
  - `set:forcing-poset`: NG — This use of 推移律 refers to transitivity of a composition relation in a category-theoretic pullback argument, not the order-theoretic transitivity axiom of a forcing poset defined in the card.

## 「普遍性」 in 02-algebra/06-homological-algebra/01-abelian-categories
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 01-additive.html, 04-chain-complexes.html, 05-freyd-mitchell.html
- Sentence: 積の普遍性は「外から入ってくる射」、余積の普遍性は「外へ出ていく射」について述べる「外的な」条件だが、双積は $a,b,c$ とその間の射だけの等式という「内的な」条件である。前加法圏では、射を足せることがこの二つを結びつける：$1_{c}=i_{1}p_{1}+i_{2}p_{2}$ は「$c$ の元は $a$ 成分と $b$
  - `cat:universal-arrow`: NG — 「普遍性」は普遍射の性質を指す一般概念であり、カードが定義する「普遍射」そのものではない。

## 「準同型」 in 02-algebra/06-homological-algebra/01-abelian-categories
- Default: `cat:t-algebra` → **fits: `grp:homomorphism`**
- Pages: 01-additive.html, 05-freyd-mitchell.html
- Sentence: アーベル群や加群の圏では、準同型の和が定義でき、直積と直和が一致し、核と余核がある。本ページでは、これらの性質を圏の言葉で取り出す。零対象をもつ圏では**零射**と**核・余核**が定義でき（\ref{ha:kernel-cokernel}）、核と余核はガロア接続をなす。hom 集合がアーベル群で合成が双線形な圏（**前加法圏**、\ref{ha:p
  - `cat:t-algebra`: NG — Here "準同型" refers to homomorphisms of abelian groups/modules, not T-algebra homomorphisms as defined in the card.
  - `grp:homomorphism`: OK

## 「逆像」 in 02-algebra/06-homological-algebra/01-abelian-categories
- Default: `cat:inverse-image` → **fits: `set:function`**
- Pages: 01-additive.html
- Sentence: 2. 基点付き集合の圏では、一点集合が零対象で、$f$ の核は基点の逆像の包含。エピ射は核で決まらない（$\mathbf{Grp}$ とは違う）。
  - `cat:inverse-image`: NG — Here "逆像" means the preimage of a point under a map (a set-theoretic fiber), not the inverse image sheaf/presheaf defined in the card.
  - `set:function`: OK

## 「全射」 in 02-algebra/06-homological-algebra/02-derived-functors
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 01-projective-resolutions.html, 04-injective-modules.html, 05-extensions.html, 06-tensor-tor.html, 08-projective-dimension.html
- Sentence: **1.** $\mathbf{A}(P,-)$ は左完全（\ref{ha:hom-left-exact}）なので、完全であることはエピ射を全射に写すことと同値である（左完全な関手が短完全列 $0\to a\to b\xrightarrow{e}c\to0$ を $0\to\cdot\to\cdot\to\cdot$ の完全列に写すので、右端の全射性だけが残る。任意のエピ $e$ は $\ker e$ と合わせて短完全列をなす）。$\mathbf{A}(P,e
  - `set:injection-surjection`: NG — Here 全射 refers to surjectivity of the induced map on hom-sets (an epimorphism being mapped to a surjective function), not the surjectivity of a function $f\colon A\to B$ as defined in the card.

## 「列の連結」 in 02-algebra/06-homological-algebra/02-derived-functors
- Default: `set:concatenation` → **no candidate fits**
- Pages: 09-delta-functors.html
- Sentence: 上げられ、これは核の間の射 $\gamma\colon k_{a''}\to a'$ を誘導して、短完全列の射 $(\gamma,\ast,1)\colon E_{a''}\to(0\to a'\to a\to a''\to0)$ を与える。$\delta^{T}$, $\delta^{S}$ の自然性から、それぞれの列の連結射を $\delta^{T}_{E}$, $\delta^{T}$ などと書けば $\delta^{T}=T_{n-1}(\gamma)\delta^{T}_{E}$, $\delta^{S}=S_{n-1}(\gamma)\delta^{S}_{E}$。よって
  - `set:concatenation`: NG — Here "列の連結射" refers to the connecting homomorphism of an exact sequence, not the concatenation of two sequences as defined in the card.

## 「導来関手」 in 02-algebra/06-homological-algebra/02-derived-functors
- Default: `ha:left-derived-functor` → **no candidate fits**
- Pages: 01-projective-resolutions.html, 02-derived-functors.html, 03-tor-ext.html, 04-injective-modules.html, 06-tensor-tor.html, 07-ext-injective.html, 09-delta-functors.html
- Sentence: 導来関手（\ref[導来関手]{ha:page-derived-functors}）を定義するための準備として、**射影対象**（\ref{ha:projective}）と**射影分解**（\ref{ha:projective-resolution}）を扱う。主定理は**比較定理**（\ref{ha:comparison-th
  - `ha:left-derived-functor`: NG — “導来関手” is the general derived functor, while the card defines specifically the left derived functor \(L_{n}F\), a special case rather than the same notion.

## 「普遍性」 in 02-algebra/06-homological-algebra/02-derived-functors
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 09-delta-functors.html
- Sentence: > 資料：本ページは特定の教科書の記述によらず、標準的な議論に従って組み立てた。馬蹄補題の射への拡張と普遍性の証明は本サイトで書き下ろした。
  - `cat:universal-arrow`: NG — 「普遍性」は普遍射が持つ性質を指す語であり、カードが定義する「普遍射」という構成概念そのものではない。

## 「有限生成」 in 02-algebra/06-homological-algebra/02-derived-functors
- Default: `ring:generated-ideal-def` → **fits: `mod:generated-submodule`**
- Pages: 06-tensor-tor.html
- Sentence: 有限生成の自由右 $R$ 加群 $R^{k}$ は平坦であることを示せ。
  - `ring:generated-ideal-def`: NG — Here "有限生成" modifies a module (finitely generated module), not an ideal as defined in the card.
  - `grp:generated-subgroup`: NG — Here "有限生成" modifies a module, not a group, so it is a different notion (finitely generated module) than the group-theoretic definition on the card.
  - `mod:generated-submodule`: OK

## 「準同型」 in 02-algebra/06-homological-algebra/02-derived-functors
- Default: `cat:t-algebra` → **fits: `grp:homomorphism`**
- Pages: 01-projective-resolutions.html, 03-tor-ext.html, 04-injective-modules.html, 05-extensions.html, 06-tensor-tor.html, 09-delta-functors.html
- Sentence: $P\neq0$ を有限アーベル群、$m\defeq\lvert P\rvert$ とし、$P$ を生成する元 $p_{1},\dots,p_{k}$ をとる。$Q\defeq(\mathbb{Z}/m^{2})^{k}$ から $P$ への準同型 $\pi$ を、第 $i$ 成分の生成元を $p_{i}$ に送るものとして定める（$m^{2}p_{i}=0$ なので定まる）。$\pi$ は全射で、$\mathbf{FinAb}$ で全射はエピ射である。
  - `cat:t-algebra`: NG — Here "準同型" means a group homomorphism between abelian groups, not a homomorphism of T-algebras.
  - `grp:homomorphism`: OK

## 「細かい」 in 02-algebra/06-homological-algebra/02-derived-functors
- Default: `top:finer-coarser` → **no candidate fits**
- Pages: 05-extensions.html
- Sentence: よって $u\ne0$ の $p-1$ 個の拡大はどれも中央が $\mathbb{Z}/p^{2}$ だが、$j$ が $1\mapsto u^{-1}p$ と異なり、\ref{ha:ext1-classifies} から互いに同値でない。拡大の同値は「中央の加群の同型」より細かい分類である。
  - `top:finer-coarser`: NG — Here「細かい」means a finer classification (more discriminating), not a finer topology as defined in the card.

## 「線形写像」 in 02-algebra/06-homological-algebra/02-derived-functors
- Default: `mod:submodule-homomorphism` → **no candidate fits**
- Pages: 06-tensor-tor.html
- Sentence: 右 $R$ 加群 $M$ と左 $R$ 加群 $N$ の**テンソル積** $M\otimes_{R}N$（\ref{ha:tensor-product}）は、「$R$ 上で双線形な写像」を線形写像に置き換える普遍的なアーベル群である。テンソル積と hom の**随伴**（\ref{ha:tensor-hom-adjunction}）から、関手 $M\otimes_{R}-$ が右完全であること（\ref{ha:tensor-right-exact}）が従い、その左導来関手として **Tor**（\ref{ha:
  - `mod:submodule-homomorphism`: NG — Here "線形写像" refers to a general linear map in the context of bilinear maps, not specifically an $R$-module homomorphism as defined in the card.

## 「自己準同型」 in 02-algebra/06-homological-algebra/02-derived-functors
- Default: `ring:homomorphism` → **no candidate fits**
- Pages: 06-tensor-tor.html
- Sentence: 3. $M\otimes_{R}R\cong M$（$m\otimes r\mapsto mr$）で、これは右加群 $M$ と、$R$ の自己準同型（右からの掛け算）について自然である。
  - `ring:homomorphism`: NG — Here "自己準同型" refers to an endomorphism of the module $M$ (right multiplication by $R$), not an endomorphism of a ring as defined in the card.

## 「イデアル」 in 03-number-theory/01-algebraic-number-theory/01-number-fields
- Default: `ag:algebraic-set` → **fits: `ring:ideal`**
- Pages: 06-class-group.html
- Sentence: 代数体 $K$ を $\mathbb{R}^{r_{1}}\times\mathbb{C}^{r_{2}}\cong\mathbb{R}^{n}$ に埋め込むと、$\mathcal{O}_{K}$ やイデアルは**格子**になり、その基本領域の体積は $\sqrt{|d_{K}|}$ で測れる。**ミンコフスキーの凸体定理**（体積の大きい対称な凸集合は格子点を含む）を使うと、各イデアル類にノルムが $(2/\pi)^{r_{2}}\sqrt{|d_{K}|}$ 以下の整イデアルがあることが分かり、**イデアル類群は有限*
  - `ag:algebraic-set`: NG — Here "イデアル" means a fractional/integral ideal of the ring of integers \(\mathcal{O}_{K}\), not the ideal \(I(Y)\) of polynomials vanishing on a subset \(Y\subset k^{n}\) as defined in the card.
  - `set:ideal`: NG — This is the ring-theoretic notion of an ideal in a number field's ring of integers, not the set-theoretic ideal (a family of subsets of a set closed under unions and subsets) defined in the card.
  - `ring:ideal`: OK

## 「イデアル類群」 in 03-number-theory/01-algebraic-number-theory/01-number-fields
- Default: `ring:class-group` → **no candidate fits**
- Pages: 05-quadratic-cyclotomic.html, 06-class-group.html
- Sentence: 側では、フロベニウス元 $\sigma_{q}$ が 2 次部分体を固定するか、すなわち $q\bmod p$ が平方か、$(\tfrac{q}{p})$。(a) は「$q$ を法とする」条件、(b) は「$p$ を法とする」条件で、その一致が相互法則である。圏論的には、アーベル拡大の圏と「合同条件で定まる素数の集合（イデアル類群の指標）」の圏の対応（類体論）の最も簡単な場合で、ガロア群の側の「局所的な情報（フロベニウス）」が「大域的な合同条件」と結びつくことを表す。比喩で言えば、同じ山（$q$ の分解）を北（$\bmod q$）から見た地図と南（$\bmod p$）から見た地図が、必ず同じ形をしていることの保証である。
  - `ring:class-group`: NG — the sentence uses イデアル類群 only in a parenthetical analogy about class field theory, not as the Dedekind domain ideal class group defined in the card.

## 「コンパクト」 in 03-number-theory/01-algebraic-number-theory/01-number-fields
- Default: `top:compact` → **no candidate fits**
- Pages: 06-class-group.html
- Sentence: 2. $X$ がコンパクトなら、$\operatorname{vol}(X)\ge2^{n}\operatorname{covol}(\Lambda)$ で十分。
  - `top:compact`: NG — Here "コンパクト" refers to a compact manifold/space in a volume inequality context, not the topological open-cover definition given in the card.

## 「コンパクト化」 in 03-number-theory/01-algebraic-number-theory/01-number-fields
- Default: `top:compactification` → **no candidate fits**
- Pages: 06-class-group.html
- Sentence: $\operatorname{Cl}(\mathcal{O}_{K})$ は $\operatorname{Spec}\mathcal{O}_{K}$ のピカール群（\ref{ag:cl-dedekind}）で、その有限性は「算術的な曲線」に無限素点（実・複素埋め込み）を加えて「コンパクト化」したことの帰結と見ることができる：格子 $j(\mathcal{O}_{K})$ の体積が有限であることが、関数体の場合の「射影曲線の次数 0 の因子類が有限個（有限体上）」に対応する。アラケロフ幾何はこの見方を体系化し、$\log|d_{K}|$ を「種数」の類似として扱う。比喩で言えば、ミンコフスキーの定理は「十
  - `top:compactification`: NG — Here "コンパクト化" refers to adding infinite places to an arithmetic curve (Arakelov compactification), not the topological notion of a compact Hausdorff space with dense embedding defined in the card.

## 「上界」 in 03-number-theory/01-algebraic-number-theory/01-number-fields
- Default: `set:chain-maximal` → **no candidate fits**
- Pages: 02-prime-decomposition.html
- Sentence: **Step 4（指数の上界）.** $\prod_{i}\mathfrak{P}_{i}^{e_{i}}\subset p\mathcal{O}_{K}+\prod_{i}g_{i}(\theta)^{e_{i}}\mathcal{O}_{K}$（積を展開すると、$p$ を因子に含まない項は $\prod g_{i}(\theta)^{e_{i
  - `set:chain-maximal`: NG — Here "上界" means an upper bound on exponents (a numerical bound), not an upper bound of a subset in a partially ordered set as defined in the card.

## 「位数」 in 03-number-theory/01-algebraic-number-theory/01-number-fields
- Default: `grp:abelian-group` → **no candidate fits**
- Pages: 01-rings-of-integers.html, 03-decomposition-inertia.html, 04-ramification-discriminant.html, 05-quadratic-cyclotomic.html, 06-class-group.html
- Sentence: **Step 1（背理法の設定）.** $p$ が指数を割り切るとすると、$\mathcal{O}_{K}/\mathbb{Z}[\theta]$ は位数 $p$ の元をもつ（コーシーの定理 \tref{grp:cauchy}）ので、$\xi\in\mathcal{O}_{K}\setminus\mathbb{Z}[\theta]$ で $p\xi\in\mathbb{Z}[\theta]$ となるものがある。$\xi=(a_{0}+a_{1}\theta+\dots+
  - `grp:abelian-group`: NG — Here "位数" means the order of an element (the smallest positive n with g^n=e), not the order |G| of a group as defined in the card.
  - `grp:element-order`: NG — Here "位数" means the order (size) of a quotient group, not the order of a single group element as defined in the card.
  - `cx:isolated-singularity`: NG — Here "位数" means the order of an element in a finite group, not the order (pole degree) of a pole as defined in the card.
  - `cx:elliptic-function`: NG — In the sentence, 位数 means the order of an element in a finite group, not the number of poles of an elliptic function.

## 「分解体」 in 03-number-theory/01-algebraic-number-theory/01-number-fields
- Default: `fld:splitting-field` → **no candidate fits**
- Pages: 03-decomposition-inertia.html
- Sentence: 1. ガロアの基本定理で $D_{\mathfrak{P}}$, $I_{\mathfrak{P}}$ に対応する中間体 $K^{D}\subset K^{I}$ を**分解体**・**惰性体**という。$\mathfrak{P}$ の下にある素イデアルは、$K^{D}$ で相対次数・分岐指数がともに 1、$K^{I}/K^{D}$ で惰性的（相対次数 $f$）、$K/K^{I}$ で完全分岐（分岐指数 $e$）となることが知られている（相対拡大での分解の理論が要るので本サイト未収録）。
  - `fld:splitting-field`: NG — This "分解体" is the decomposition field (fixed field of the decomposition group) in algebraic number theory, not the splitting field of a polynomial over $K$.

## 「判別式」 in 03-number-theory/01-algebraic-number-theory/01-number-fields
- Default: `fld:discriminant` → **no candidate fits**
- Pages: 01-rings-of-integers.html, 02-prime-decomposition.html, 04-ramification-discriminant.html, 05-quadratic-cyclotomic.html, 06-class-group.html, 07-units.html
- Sentence: {Q}$ の有限次拡大）の中で $\mathbb{Z}$ 上整な元全体 $\mathcal{O}_{K}$ を**整数環**という。$\mathcal{O}_{K}$ は階数 $[K:\mathbb{Q}]$ の自由 $\mathbb{Z}$ 加群で（環論の結果）、その基底（**整数環の基底**、整基底）から定まる**判別式** $d_{K}$ は $K$ の最も基本的な不変量である。この頁では、判別式と「指数」の関係を使って整数環を決める方法を示し、2 次体・$p$ 次円分体・$\mathbb{Q}(\sqrt[3]{2})$ の整数環と判別式を計算する。
  - `fld:discriminant`: NG — This is the discriminant of a number field (an ideal/norm-based invariant), not the polynomial discriminant defined by the card.

## 「可算」 in 03-number-theory/01-algebraic-number-theory/01-number-fields
- Default: `set:finite-set` → **no candidate fits**
- Pages: 06-class-group.html
- Sentence: - 体積：$\mathbb{R}^{n}$ のルベーグ測度 $\operatorname{vol}$ の、平行移動不変性・可算加法性・線形写像 $T$ による像の体積 $|\det T|\operatorname{vol}$・直方体と円板の体積（\ref[ルベーグ測度]{meas:lebesgue-measure}）を使う。測度論の系列で扱う予定。
  - `set:finite-set`: NG — Here "可算加法性" means countable additivity of a measure, not the set-theoretic notion of a countable set defined in the card.

## 「基底の判別式」 in 03-number-theory/01-algebraic-number-theory/01-number-fields
- Default: `nt:discriminant-basis` → **no candidate fits**
- Pages: 04-ramification-discriminant.html
- Sentence: **前提を弱めると.** デデキント環 $A$ 上の相対拡大 $L/F$ では、判別式は $A$ のイデアル $\mathfrak{d}_{L/F}$（局所的な基底の判別式で生成）として定義され、「$\mathfrak{p}$ が分岐 $\iff\mathfrak{p}\mid\mathfrak{d}_{L/F}$」と $N_{L/F}(\mathfrak{D}_{L/F})=\mathfrak{d}_{L/F}$ が同じ形で成り立つ（剰余拡大が分離的なら）。
  - `nt:discriminant-basis`: NG — the card defines the discriminant of a basis over $\mathbb{Q}$ in a number field, while the sentence uses the relative discriminant ideal of an extension of Dedekind rings, a different (generalized) notion.

## 「完備化」 in 03-number-theory/01-algebraic-number-theory/01-number-fields
- Default: `calc:cauchy-construction` → **no candidate fits**
- Pages: 04-ramification-discriminant.html
- Sentence: k{D}_{K}$ を割り切る $\iff$ $e(\mathfrak{P})>1$ で、$v_{\mathfrak{P}}(\mathfrak{D}_{K})\ge e(\mathfrak{P})-1$、等号は $p\nmid e(\mathfrak{P})$（**順分岐**）のときに限ることが知られている（局所化・完備化して計算する。本サイト未収録）。また $\mathcal{O}_{K}=\mathbb{Z}[\theta]$ なら $\mathfrak{D}_{K}=f'(\theta)\mathcal{O}_{K}$（オイラーの補題 $\operatorname{Tr}(\theta^{i}/f'(\theta))$ の計算によ
  - `calc:cauchy-construction`: NG — the card defines the construction of the real numbers via Cauchy sequences, not the general notion of completion referenced in the sentence.
  - `ring:completion`: NG — Here 完備化 refers to completing a local field (p-adic completion), not the I-adic completion of a module defined in the card.
  - `top:completion`: NG — Here "完備化" means completing a local field (localization/completion in algebraic number theory), not the metric-space completion defined in the card.

## 「推移律」 in 03-number-theory/01-algebraic-number-theory/01-number-fields
- Default: `set:total-order` → **no candidate fits**
- Pages: 02-prime-decomposition.html
- Sentence: **Step 2（正規）.** $\mathcal{O}_{K}$ は $\mathbb{Z}$ の $K$ における整閉包で、整閉包の推移律（\ref{ring:integral-closure}）から $K$ の元で $\mathcal{O}_{K}$ 上整なものは $\mathbb{Z}$ 上整、すなわち $\mathcal{O}_{K}$ に入る。$\operatorname{Frac}\mathcal{O}_{K}=K$（\ref{nt:integ
  - `set:total-order`: NG — This “推移律” refers to transitivity of integral closure in ring theory, not the transitivity condition in the definition of a partial order.
  - `set:forcing-poset`: NG — This "推移律" refers to transitivity of integral closure in ring theory, not the transitivity axiom of a partial order in forcing.

## 「普遍性」 in 03-number-theory/01-algebraic-number-theory/01-number-fields
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 07-units.html
- Sentence: bb{Z}^{r}\to0$ で、$\mathbb{Z}^{r}$ の基底 $e_{i}$ の逆像 $\varepsilon_{i}$ を選ぶと、$\mathbb{Z}^{r}\to\mathcal{O}_{K}^{\times}$, $e_{i}\mapsto\varepsilon_{i}$ は分裂を与え（自由加群の普遍性 \ref{mod:free-module-universal}）、$\mathcal{O}_{K}^{\times}\cong\mu_{K}\times\mathbb{Z}^{r}$。
  - `cat:universal-arrow`: NG — 「普遍性」 here refers to the universal property of free modules, not the categorical notion of a universal morphism defined in the card.

## 「有限生成」 in 03-number-theory/01-algebraic-number-theory/01-number-fields
- Default: `mod:generated-submodule` → **no candidate fits**
- Pages: 06-class-group.html
- Sentence: ** 類 $c$ をとり、$c^{-1}$ の整イデアル $\mathfrak{a}$ をとる（分数イデアル $\mathfrak{c}$ について、$0\neq d\in\mathbb{Z}$ で $d\mathfrak{c}\subset\mathcal{O}_{K}$ となるもの：$\mathfrak{c}$ は有限生成で、生成元の分母を払う）。\ref{nt:small-norm-element} の $\alpha\in\mathfrak{a}$ について $\alpha\mathcal{O}_{K}\subset\mathfrak{a}$ なので、含むは割るから $\alpha\mathcal{O}_{K}=\mathfrak{
  - `mod:generated-submodule`: NG — Here "有限生成" describes a fractional ideal as a module over the ring of integers, which is the same module-theoretic notion of finite generation defined in the card.
  - `grp:generated-subgroup`: NG — Here "有限生成" refers to a finitely generated module/ideal over $\mathcal{O}_{K}$, not a finitely generated group as defined in the card.
  - `ring:generated-ideal-def`: NG — Here "有限生成" describes a fractional ideal, not an ideal generated by a finite set as defined in the card.

## 「有限生成」 in 03-number-theory/01-algebraic-number-theory/01-number-fields
- Default: `grp:generated-subgroup` → **fits: `ring:generated-ideal-def`**
- Pages: 07-units.html
- Sentence: **前提を弱めると.** 有限個の素イデアルの集合 $S$ を加えた **$S$ 単数**（$S$ の外では単元）の群は $\mu_{K}\times\mathbb{Z}^{r+|S|}$ と同型である（同じ方法で、$S$ の素イデアルでの付値の座標を加える）。関数体では、単数群は定数体の乗法群と有限生成自由群の積になる（無限遠の点の個数で階数が決まる）。
  - `grp:generated-subgroup`: NG — Here "有限生成" describes a free group (a group-theoretic notion), but the sentence is about function fields and unit groups, not the subgroup generated by a set as defined in the card.
  - `ring:generated-ideal-def`: OK

## 「有限群」 in 03-number-theory/01-algebraic-number-theory/01-number-fields
- Default: `grp:abelian-group` → **no candidate fits**
- Pages: 06-class-group.html, 07-units.html
- Sentence: 2. ノルムが与えられた値以下の整イデアルは有限個。したがって $\operatorname{Cl}(\mathcal{O}_{K})$ は有限群で、その位数 $h_{K}$ を**類数**という。
  - `grp:abelian-group`: NG — Here "有限群" refers to the ideal class group being finite, which is the standard group-theoretic meaning of a finite group (a group of finite order), matching the card's definition.

## 「直和」 in 03-number-theory/01-algebraic-number-theory/01-number-fields
- Default: `mod:direct-sum` → **no candidate fits**
- Pages: 08-p-adic.html
- Sentence: **Step 4（2：階数）.** $\hat{\mathcal{O}}_{\mathfrak{P}_{i}}$ は 1 から有限生成 $\mathbb{Z}_{p}$ 加群（$\mathbb{Z}_{p}^{n}$ の直和因子）で、整域なので捩れがなく、PID $\mathbb{Z}_{p}$ 上自由（\ref{mod:pid-submodule-free}）。階数は $\dim_{\mathbb{F}_{p}}\hat{\mathcal{O}}_{\mathfrak{P}_{i}}/p=\dim_{\mathbb{F}_{p}}\ma
  - `mod:direct-sum`: NG — Here "直和因子" (direct summand) refers to a summand in a direct sum decomposition, which is a related but distinct notion from the definition of direct sum of a family of modules.
  - `rep:constructions`: NG — Here "直和因子" means a direct summand of a module, not the direct sum of representations defined in the card.

## 「零化イデアル」 in 03-number-theory/01-algebraic-number-theory/01-number-fields
- Default: `mod:annihilator` → **no candidate fits**
- Pages: 04-ramification-discriminant.html
- Sentence: 形式が非退化であることは同値で、判別式はトレース形式の行列式として「エタールでないファイバーの場所」を切り出す（\ref{nt:dedekind-discriminant}）。共役差積はトレースの双対として定義される「相対的な微分形式」の層（$\Omega_{\mathcal{O}_{K}/\mathbb{Z}}$ の零化イデアル）であることが知られており、判別式はその次数（ノルム）である。比喩で言えば、判別式は被覆の継ぎ目の目録で、共役差積は各継ぎ目の深さまで記録した詳細な目録である。
  - `mod:annihilator`: NG — Here "零化イデアル" refers to the annihilator ideal of the module of relative differentials $\Omega_{\mathcal{O}_{K}/\mathbb{Z}}$, which is exactly the notion defined in the card (the annihilator of a module), so it matches.

## 「非退化」 in 03-number-theory/01-algebraic-number-theory/01-number-fields
- Default: `lin:bilinear-form` → **no candidate fits**
- Pages: 01-rings-of-integers.html, 04-ramification-discriminant.html
- Sentence: - トレースとノルム（掛け算写像のトレースと行列式）、共役による表示、トレース形式の非退化性は \ref{ring:trace-norm}, \ref{ring:trace-conjugates}。整な元のトレース・ノルム・最小多項式は $A$ に入る（$A$ 正規）は \ref{ring:integral-trace-norm}。整閉包の有限性（PID 上なら自由）は \ref{ring:integral
  - `lin:bilinear-form`: NG — It refers to nondegeneracy of the trace form (a bilinear form), which is the same notion as the card's definition of a nondegenerate bilinear form.

## 「三角不等式」 in 04-analysis/01-real-analysis/01-real-numbers
- Default: `calc:norm` → **no candidate fits**
- Pages: 01-ordered-fields.html, 02-continuity-axioms.html
- Sentence: O1) $a<b\Rightarrow a+c<b+c$、(O2) $0<a,0<b\Rightarrow0<ab$ を満たす体）と、その基本性質（$a\neq0$ なら $a^{2}>0$、$1>0$、標数 $0$、$a<b$, $c>0$ なら $ac<bc$、絶対値 $|a|\defeq\max(a,-a)$ の三角不等式と $|ab|=|a||b|$、$0<a<b$ なら $0<b^{-1}<a^{-1}$）は \ref{model:ordered-field}, \ref{model:ordered-field-basic} による。$a\le b$ は「$a<b$ または $a=b$」。
  - `calc:norm`: NG — Here 三角不等式 refers to the triangle inequality for the absolute value on an ordered field, not the norm axiom for a function on a real vector space.

## 「引き戻し」 in 04-analysis/01-real-analysis/01-real-numbers
- Default: `calc:pullback` → **no candidate fits**
- Pages: 01-ordered-fields.html
- Sentence: n\mathbb{Q}$ なので、$\sigma_{\pm}(a+b\sqrt2)\defeq a\pm b\sqrt2\in\mathbb{R}$ はどちらも単射な環準同型。$x>_{\pm}y\iff\sigma_{\pm}(x)>\sigma_{\pm}(y)$ は順序体の順序（$\mathbb{R}$ の順序の引き戻し）で、$>_{+}$ では $\sqrt2>0$、$>_{-}$ では $\sqrt2<0$。
  - `calc:pullback`: NG — Here "引き戻し" refers to pulling back an order on $\mathbb{R}$ via a map, not the pullback of a differential form as defined in the card.
  - `cat:product`: NG — Here "引き戻し" refers to pulling back an order structure along a map (preimage of a relation), not the categorical fiber product/pullback defined in the card.

## 「次元」 in 04-analysis/01-real-analysis/01-real-numbers
- Default: `lin:dimension` → **no candidate fits**
- Pages: 05-series.html
- Sentence: - $\mathbb{R}$ では、すべての再配列が収束すること（**無条件収束**）と絶対収束は同値である（\ref{calc:absolute-rearrangement} とリーマンの再配列定理）。無限次元のバナッハ空間では、無条件収束するが絶対収束しない級数が必ず存在する（ドヴォレツキー–ロジャースの定理、知られている）。
  - `lin:dimension`: NG — Here "次元" refers to the dimension of a Banach space (infinite-dimensional), which is a different notion from the algebraic dimension defined via cardinality of a basis in the card.
  - `cat:trace-dimension`: NG — Here "次元" refers to the dimension of a Banach space (infinite-dimensional), not the categorical dimension defined via trace in the card.
  - `ring:krull-dimension`: NG — This "次元" refers to the dimension of a Banach space (linear/algebraic-topological dimension), not the Krull dimension of a ring defined in the card.
  - `ag:dimension`: NG — Here "次元" refers to the dimension of a Banach space (a linear-algebraic/topological notion), not the dimension of a topological space defined via chains of irreducible closed subsets.

## 「細かい」 in 04-analysis/01-real-analysis/01-real-numbers
- Default: `top:finer-coarser` → **no candidate fits**
- Pages: 05-series.html
- Sentence: **前提を変えると.** 根判定法・比判定法は $\alpha=1$ では無力で、より細かい判定法（ラーベの判定法、ガウスの判定法、積分判定法）がある（知られている。積分判定法は \ref[微分積分学の基本定理]{calc:page-fundamental-theorem} の後で扱える）。
  - `top:finer-coarser`: NG — Here "細かい" means more refined/detailed (stronger in a general sense), not the finer topology defined via subset inclusion of topologies on the same set.

## 「連続」 in 04-analysis/01-real-analysis/01-real-numbers
- Default: `calc:function-limit` → **no candidate fits**
- Pages: 01-ordered-fields.html, 02-continuity-axioms.html, 03-construction.html, 04-sequences.html, 06-exercises.html
- Sentence: 実数の性質は、「四則演算ができる」（体）、「大小が比べられ、演算と両立する」（順序体）、「すき間がない」（連続の公理）の三段に分けて理解できる。このページでは前の二段を扱う。任意の順序体が有理数体 $\mathbb{Q}$ を含むこと、「自然数がいくらでも大きくなる」という**アルキメデスの原理**とその言い換え、それが成り立たない順序体（無限小を含む体）の例、そして第三段で使う上限・下限の定義を述べる。次ページ \ref[連
  - `calc:function-limit`: NG — Here "連続" refers to the completeness axiom of the real numbers (no gaps), not continuity of a function at a point.
  - `cx:limit-continuity`: NG — Here “連続” refers to the completeness axiom (連続の公理) of the real numbers, not continuity of a complex function as defined in the card.
  - `top:continuous`: NG — Here "連続" refers to the completeness axiom of the real numbers (order-theoretic continuity), not continuity of a map between topological spaces.

## 「エルミート」 in 04-analysis/01-real-analysis/02-calculus
- Default: `lin:adjoint` → **no candidate fits**
- Pages: 08-exp-log.html
- Sentence: - $\pi$ や $e^{\pi}$ の無理性・超越性、$e$ の超越性（エルミート）、$\pi$ の超越性（リンデマン）は知られている（本サイト未収録）。
  - `lin:adjoint`: NG — Here "エルミート" refers to the mathematician Hermite (who proved e's transcendence), not the Hermitian matrix notion defined in the card.

## 「乗法群」 in 04-analysis/01-real-analysis/02-calculus
- Default: `ring:unit` → **no candidate fits**
- Pages: 08-exp-log.html, 09-trig.html
- Sentence: - 指数関数は複素数でも同じ冪級数で定義でき、$e^{ix}=\cos x+i\sin x$ から三角関数が得られる（\ref[三角関数と円周率]{calc:page-trig}）。$\exp$ は加法群 $\mathbb{R}$ から乗法群 $(0,\infty)$ への連続な同型で、連続な準同型 $\mathbb{R}\to(0,\infty)$ は $x\mapsto a^{x}$ の形に限る（知られている。連続性を外すと、選択公理のもとで病的な解がある）。
  - `ring:unit`: NG — Here "乗法群" refers to the multiplicative group of positive reals $(0,\infty)$, not the unit group $A^{\times}$ of a ring as defined in the card.

## 「可算」 in 04-analysis/01-real-analysis/02-calculus
- Default: `set:finite-set` → **no candidate fits**
- Pages: 01-continuity.html, 02-derivatives.html, 04-riemann-integral.html
- Sentence: - **可算選択公理**：2 で $x_{n}\in A_{n}$ を選ぶのに使った。$\ZF$ だけでは、「すべての実関数で点列連続と連続が同値」を証明できないことが知られている（この同値性は、実数の部分集合の可算族についての選択公理と同値になることが知られている。Herrlich『Axiom of Choice』などにある）。
  - `set:finite-set`: NG — Here "可算" modifies "族" (family) as part of the fixed term "可算選択公理" (countable axiom of choice), meaning a countable family, not the definition of a set being countable.

## 「対数関数」 in 04-analysis/01-real-analysis/02-calculus
- Default: `calc:log` → **no candidate fits**
- Pages: 09-trig.html
- Sentence: - 指数関数・対数関数、冪級数の項別微分は \ref{calc:page-exp-log}, \tref{calc:page-power-series}。中間値の定理 \ref{calc:interval-theorems}、逆関数 \ref{calc:continuous-inverse}, \ref{calc:chain-rule}、ア
  - `calc:log`: NG — 「対数関数」は一般の対数関数を指し、カードが定義する自然対数（底 $e$ の特定の対数）とは異なる。

## 「指数法則」 in 04-analysis/01-real-analysis/02-calculus
- Default: `calc:general-power` → **no candidate fits**
- Pages: 08-exp-log.html
- Sentence: 指数関数を冪級数 $\exp x=\sum\frac{x^{n}}{n!}$ として定義し、$\exp'=\exp$ と加法定理 $\exp(x+y)=\exp x\exp y$ を示す。その逆関数として自然対数 $\log$ を定め、正の数の実数乗 $a^{x}$ を定義して、有理数乗と一致することと指数法則を確かめる。さらに、増大度の比較、$e$ の無理性、$\log(1+x)$ の級数を扱う。最後に、指数関数を使って、すべての点で何回でも微分できるが冪級数で表せない関数と、任意の数列をテイラー係数にもつ $C^{\infty}$ 級関数（**ボレルの定理**）を構成する。
  - `calc:general-power`: NG — 指数法則 is a law/property about exponents, not the definition of real exponentiation \(a^{x}\defeq\exp(x\log a)\).

## 「次元」 in 04-analysis/01-real-analysis/02-calculus
- Default: `lin:dimension` → **no candidate fits**
- Pages: 05-fundamental-theorem.html, 10-gamma.html
- Sentence: **高い視点.** 基本定理は、微分 $d$ と積分 $\int$ が互いに逆であるという、一次元のストークスの定理 $\int_{[a,b]}dF=\int_{\partial[a,b]}F=F(b)-F(a)$ であり、多様体の上のストークスの定理に一般化される（多様体論で扱う予定）。比喩で言えば、積分は「各瞬間の速度を足し合わせて全体の移動距離を出す」操作で、基本定理は「移動距離は出発点と到着点の位置の差だけ
  - `lin:dimension`: NG — Here "一次元" refers to the dimension of the interval [a,b] as a 1-dimensional manifold, not the dimension of a vector space as defined in the card.
  - `cat:trace-dimension`: NG — Here "次元" means the dimension of an interval/manifold (one-dimensional), not the categorical dimension defined as the trace of the identity morphism.
  - `ring:krull-dimension`: NG — Here "一次元" refers to the dimension of an interval in calculus, not the Krull dimension of a ring.
  - `ag:dimension`: NG — Here "一次元" means one-dimensional (the interval [a,b]), not the dimension of a topological space as defined in the card.

## 「細かい」 in 04-analysis/01-real-analysis/02-calculus
- Default: `top:finer-coarser` → **no candidate fits**
- Pages: 11-exercises.html
- Sentence: ilon>0$ とし、振幅が $\varepsilon$ 以上の点の集合 $D_{\varepsilon}$ は閉集合で（コンパクト）、不連続点に含まれるので測度 $0$。有限個の開区間（長さの合計 $<\varepsilon$）で覆える。残りのコンパクト集合上では各点の振幅が $\varepsilon$ 未満なので、細かい分割で各小区間の振幅を $\varepsilon$ 未満にできる。上和と下和の差は $2M\varepsilon+\varepsilon(b-a)$ 以下（$M=\sup\lvert f\rvert$）。
  - `top:finer-coarser`: NG — Here "細かい分割" means a fine partition (small subintervals), not a finer topology as defined in the card.

## 「開被覆」 in 04-analysis/01-real-analysis/02-calculus
- Default: `top:compact` → **no candidate fits**
- Pages: 01-continuity.html
- Sentence: et\{f<c\}$。(⇐) $c\defeq f(a)+\varepsilon$ とする。2：定義の組み合わせ。3：$M\defeq\sup f\in(-\infty,+\infty]$ とし、最大値をとらないとする。すると $[a,b]=\bigcup_{c<M}\{f<c\}$（$c$ は実数）で、1 からこれは開被覆。(HB) から有限個 $\{f<c_{1}\},\dots,\{f<c_{k}\}$ で覆え、$f<\max c_{i}<M$ となり $M$ が上限であることに反する（$M=+\infty$ でも同じ）。
  - `top:compact`: NG — Here "開被覆" refers to a cover by the specific sets $\{f<c\}$, i.e., an open cover of $[a,b]$, which is consistent with the definition's use of open covers, so it matches the notion.

## 「1 対 1」 in 04-analysis/01-real-analysis/03-multivariable-calculus
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 07-change-of-variables.html
- Sentence: t|$ 倍になる】座標の入れ替え $P$、および 1 つの座標の $\lambda$ 倍（$\lambda\neq0$）$D$ は、閉直方体を閉直方体に写し、体積をそれぞれ $1=|\det P|$ 倍、$|\lambda|=|\det D|$ 倍する。$E$ を含む閉直方体 $R$ の分割は $T(R)$ の分割に 1 対 1 に対応し、$\chi_{T(E)}$ のダルブー和は $\chi_{E}$ のダルブー和の $|\det T|$ 倍。よって $v(T(E))=|\det T|v(E)$。
  - `set:injection-surjection`: NG — Here "1 対 1 に対応" means a one-to-one correspondence (bijection between partitions), not the definition of an injective function.

## 「ホモロジー」 in 04-analysis/01-real-analysis/03-multivariable-calculus
- Default: `ha:homology` → **no candidate fits**
- Pages: 09-differential-forms.html
- Sentence: .** ストークスの定理は、境界付きの多様体（さらには角付き多様体）の上で $\int_{M}d\omega=\int_{\partial M}\omega$ の形に一般化される。そこでは $M$ を立方体の像に分ける代わりに 1 の分割を使う。ポアンカレの補題の「閉形式なのに完全でない」形式の空間は**ド・ラーム・コホモロジー**を定め、$\mathbb{R}^{2}\setminus\{0\}$ の例は、それが円周の 1 次コホモロジー $\mathbb{R}$ を検出していることにあたる（知られている）。
  - `ha:homology`: NG — one short English sentence why

## 「上限」 in 04-analysis/01-real-analysis/03-multivariable-calculus
- Default: `calc:supremum` → **fits: `set:order-dedekind-complete`**
- Pages: 01-euclidean-space.html, 05-multiple-integrals.html, 08-parameter-integrals.html
- Sentence: \sum_{j}a_{ij}x_{j}$ で、コーシー–シュワルツから $|\sum_{j}a_{ij}x_{j}|^{2}\le(\sum_{j}a_{ij}^{2})|x|^{2}$。$i$ について足すと $|Ax|^{2}\le(\sum_{i,j}a_{ij}^{2})|x|^{2}$。$|x|\le1$ で上限をとって右の不等式。左：$x=e_{j}$ とすると $|Ae_{j}|\ge|a_{ij}|$ なので $\|A\|\ge|a_{ij}|$。
  - `calc:supremum`: NG — Here "上限" means the supremum taken over $|x|\le 1$ (an operator norm), not the least upper bound of a subset as defined in the card.
  - `set:order-dedekind-complete`: OK

## 「可算」 in 04-analysis/01-real-analysis/03-multivariable-calculus
- Default: `set:finite-set` → **no candidate fits**
- Pages: 05-multiple-integrals.html, 08-parameter-integrals.html, 11-exercises.html
- Sentence: - **体系**：$\mathsf{ZF}$。選択公理を使わない（「測度 $0$ の集合の可算和」は一般論としては使わない）。
  - `set:finite-set`: NG — Here "可算和" means a countable union (a sum indexed by a countable set), not the cardinality property of a set being countable as defined in the card.

## 「基底」 in 04-analysis/01-real-analysis/03-multivariable-calculus
- Default: `mod:free-module` → **no candidate fits**
- Pages: 01-euclidean-space.html, 07-change-of-variables.html, 09-differential-forms.html
- Sentence: 上からの評価 $N(x)\le C|x|$ は三角不等式だけで出る（基底の長さの最大値を使う）。難しいのは下からの評価で、これは「単位球面の上で $N$ が $0$ に近い値をとらない」ことを言っている。$N$ は単位球面上で $0$ にならないので、球面がコンパクトなら最小値は正である。有限次元であることは、このコンパクト性（ハイネ–ボレル）を通じて使われる。
  - `mod:free-module`: NG — Here "基底" means a basis of a vector space in the sense of a coordinate system (used to bound |x| via the maximum length of basis vectors), which is the same notion as the module-theoretic basis defined in the card.
  - `grp:free-abelian`: NG — Here "基底" means a basis of a vector space/normed space (used to bound |x| via the maximum length of basis vectors), not a basis of a free abelian group.

## 「完備化」 in 04-analysis/01-real-analysis/03-multivariable-calculus
- Default: `calc:cauchy-construction` → **fits: `top:completion`**
- Pages: 10-limit-interchange.html
- Sentence: $(m,n)\mapsto a_{mn}$ を $(\N\cup\{\infty\})^{2}$ の角 $(\infty,\infty)$ まで連続に延長できるかという問題である。一様収束はその延長が存在するための条件で、一様構造（\ref{top:page-uniform-spaces}）の言葉では「一様連続な写像は完備化に延長できる」（\ref{top:uniform-extension}）の一例と見なせる。
  - `calc:cauchy-construction`: NG — the card defines the construction of the reals via Cauchy sequences, not the general notion of completion (完備化) used in the sentence.
  - `ring:completion`: NG — This "完備化" refers to the completion of a uniform space (topological completion), not the $I$-adic completion of a module defined in the card.
  - `top:completion`: OK

## 「定義域」 in 04-analysis/01-real-analysis/03-multivariable-calculus
- Default: `set:relation` → **no candidate fits**
- Pages: 04-inverse-implicit.html, 10-limit-interchange.html
- Sentence: ヤコビ行列の階数が一定なら、定義域と値域の座標をうまく取り替えると、写像は最初のいくつかの座標をそのまま残して残りを 0 にする標準形になる。
  - `set:relation`: NG — Here 定義域 refers to the domain of a smooth map in the rank theorem, not the domain of a relation as a set of ordered pairs.
  - `logic:rm-continuous-code`: NG — Here "定義域" refers to the domain of a general map (the manifold coordinate domain), not the specific real-function domain defined via the sign relation Φ.

## 「微分可能」 in 04-analysis/01-real-analysis/03-multivariable-calculus
- Default: `calc:derivative` → **no candidate fits**
- Pages: 02-differentiability.html, 03-higher-derivatives.html, 04-inverse-implicit.html, 08-parameter-integrals.html, 09-differential-forms.html, 10-limit-interchange.html, 11-exercises.html
- Sentence: となるとき、$f$ は $a$ で**（全）微分可能**であるといい、$A$ を $f$ の $a$ での**（全）微分**と呼んで $Df(a)$ と書く（一意性は次の命題）。$U$ のすべての点で微分可能なとき、$f$ は $U$ で微分可能という。
  - `calc:derivative`: NG — This is the multivariable (total) differentiability definition, not the single-variable derivative definition in the card.

## 「直積」 in 04-analysis/01-real-analysis/03-multivariable-calculus
- Default: `grp:direct-product` → **no candidate fits**
- Pages: 04-inverse-implicit.html, 06-fubini.html
- Sentence: r$ 行の $D_{u'}k$ 倍を下から引く）で $\begin{pmatrix}I_{r}&0\\0&D_{u''}k\end{pmatrix}$ になるので、階数は $r+\operatorname{rank}D_{u''}k$。よって $G(V_{0})$ の上で $D_{u''}k=0$。$0$ を中心とする直積の形の開集合 $V'\defeq B'\times B''\subset G(V_{0})$（$B'\subset\mathbb{R}^{r}$, $B''\subset\mathbb{R}^{n-r}$ は開球）をとると、各 $u'$ について $u''\mapsto k(u',u'')$ は凸集合 $B''$ 上で
  - `grp:direct-product`: NG — Here "直積" refers to a Cartesian product of open sets in analysis, not the direct product of groups defined in the card.
  - `set:cartesian-product`: NG — Here "直積" refers to a Cartesian product of open sets (a product of balls), which is a special case of the set-theoretic direct product defined in the card, so it matches.

## 「級数」 in 04-analysis/01-real-analysis/03-multivariable-calculus
- Default: `calc:series` → **no candidate fits**
- Pages: 01-euclidean-space.html, 04-inverse-implicit.html, 06-fubini.html, 10-limit-interchange.html, 11-exercises.html
- Sentence: 1. （**ノイマン級数**）$H\in M_{n}(\mathbb{R})$、$\|H\|<1$ なら、$I-H$ は可逆で
  - `calc:series`: NG — Here "級数" is part of the proper name "ノイマン級数" (Neumann series), a matrix power series, not the general convergence-of-partial-sums notion defined in the card.

## 「開被覆」 in 04-analysis/01-real-analysis/03-multivariable-calculus
- Default: `top:compact` → **no candidate fits**
- Pages: 05-multiple-integrals.html
- Sentence: 1k$ 未満となる開球 $O$ の全体とする。$R\setminus\bigcup J_{j}$ の点 $x$ では $\omega_{f}(x)<\frac1k$ なので $x$ はある $O\in\mathcal{B}$ に属し、$\{J_{j}\}\cup\mathcal{B}$ はコンパクト距離空間 $R$ の開被覆（$R$ との共通部分をとる）。そのルベーグ数 $\lambda$（\tref{top:lebesgue-number}）について、小直方体の直径が $\lambda$ 未満の分割 $P$ をとる。各小直方体は、ある $J_{j}$ に含まれるか、ある $O\in\mathcal{B}$ に含まれる（$M_{Q}-m_
  - `top:compact`: NG — the card defines compactness and finite intersection property, not the term "open cover" itself.

## 「鞍点」 in 04-analysis/01-real-analysis/03-multivariable-calculus
- Default: `calc:hessian` → **no candidate fits**
- Pages: 03-higher-derivatives.html, 11-exercises.html
- Sentence: 3. $\nabla f(a)=0$ で $Hf(a)$ が不定値（${}^{t}vHv>0>{}^{t}wHw$ となる $v,w$ がある）なら、$f$ は $a$ で極値をとらない（**鞍点**）。
  - `calc:hessian`: NG — 鞍点 is not defined in the card; the card defines Hessian matrix, critical point, and local min/max, but not saddle point.

## 「グラム行列」 in 04-analysis/01-real-analysis/04-vector-analysis
- Default: `lin:bilinear-form` → **no candidate fits**
- Pages: 02-surface-integrals.html
- Sentence: urve-length}）の 2 次元以上の類似として、パラメータで表された曲面の**面積**を定義する。曲線の長さが $\int|\gamma'|$ だったのに対し、$k$ 次元のパラメータ曲面 $\varphi$ の面積は $\int\sqrt{\det({}^{t}D\varphi\,D\varphi)}$（**グラム行列式**の平方根）で、これはコーシー–ビネの公式から「各座標 $k$ 平面への射影の面積の 2 乗和の平方根」に等しい（前ページまでの $dx_{I}$ を使って書ける）。$\mathbb{R}^{3}$ の曲面では、これは外積 $|\varphi_{u}\times\varphi_{v}|$ である。面積がパラメータの
  - `lin:bilinear-form`: NG — It refers to the Gram determinant (グラム行列式) of the differential, not the Gram matrix defined in the card.

## 「ホモロジー」 in 04-analysis/01-real-analysis/04-vector-analysis
- Default: `ha:homology` → **no candidate fits**
- Pages: 01-curves-line-integrals.html
- Sentence: **一般化.** \ref{vec:conservative-field} は「連結な開集合の上で、1 形式が完全 $\iff$ すべての閉曲線（サイクル）の上の積分が $0$」と言い換えられ、ド・ラーム・コホモロジーの $H^{1}$ が、閉形式を閉曲線上の積分で調べることで決まることの最も簡単な場合である。$\mathbb{R}^{2}\setminus\{0\}$ の例では、閉形式 $\omega$ の閉曲線に沿った積分は $2\pi\times$（原点の周りの回転数）で、$H^{1}(\mathbb{R}^{2}\setmi
  - `ha:homology`: NG — one short English sentence why

## 「体積」 in 04-analysis/01-real-analysis/04-vector-analysis
- Default: `calc:jordan-measurable` → **no candidate fits**
- Pages: 02-surface-integrals.html, 04-exercises.html
- Sentence: $\sqrt{\det({}^{t}AA)}$ は、$a_{1},\dots,a_{k}$ の張る $k$ 次元平行体の $k$ 次元体積である。補題はそれを「座標 $k$ 平面 $\{x_{I}\}$ への射影の（符号付き）体積 $dx_{I}(a)$ の 2 乗和の平方根」と表す：$k=1$ なら三平方の定理、$k=2$, $n=3$ なら「平行四辺形の面積の 2 乗は、3 つの座標平面への射影の面積の 2 乗の和」（ド・グアの定理の一般化）。$k=
  - `calc:jordan-measurable`: NG — This "k-dimensional volume" of a parallelepiped is a geometric measure, not the Jordan measure/volume of a bounded set defined via the characteristic function in the card.
  - `nt:lattice`: NG — Here "体積" means the k-dimensional volume of a parallelepiped in Euclidean space, not the covolume of a lattice defined in the card.

## 「外積」 in 04-analysis/01-real-analysis/04-vector-analysis
- Default: `calc:wedge-product` → **no candidate fits**
- Pages: 02-surface-integrals.html
- Sentence: int\sqrt{\det({}^{t}D\varphi\,D\varphi)}$（**グラム行列式**の平方根）で、これはコーシー–ビネの公式から「各座標 $k$ 平面への射影の面積の 2 乗和の平方根」に等しい（前ページまでの $dx_{I}$ を使って書ける）。$\mathbb{R}^{3}$ の曲面では、これは外積 $|\varphi_{u}\times\varphi_{v}|$ である。面積がパラメータの取り方によらないことを変数変換公式から示し、関数の**面積分**、ベクトル場の**流束**を定義して、流束が 2 形式の積分と一致することを示す。
  - `calc:wedge-product`: NG — Here 外積 refers to the vector cross product $|\varphi_{u}\times\varphi_{v}|$, not the wedge product of alternating forms defined in the card.
  - `lin:exterior-algebra`: NG — Here 外積 refers to the cross product of vectors in $\mathbb{R}^{3}$, not the exterior (wedge) product defined in the card.

## 「導関数」 in 04-analysis/01-real-analysis/04-vector-analysis
- Default: `calc:derivative` → **no candidate fits**
- Pages: 01-curves-line-integrals.html
- Sentence: - 全微分・連鎖律・勾配 \ref{calc:total-derivative}, \ref{calc:multivariable-chain-rule}, \ref{calc:gradient}、平均値の不等式 \tref{calc:mean-value-inequality}、偏導関数が連続なら微分可能 \ref{calc:continuous-partials-differentiable}。
  - `calc:derivative`: NG — Here "偏導関数" (partial derivative) is a different notion from the single-variable derivative function defined in the card.
  - `cx:holomorphic`: NG — Here "導関数" appears only as part of the phrase "偏導関数" (partial derivative), which is a different notion from the complex derivative defined in the card.

## 「微分可能」 in 04-analysis/01-real-analysis/04-vector-analysis
- Default: `calc:derivative` → **no candidate fits**
- Pages: 01-curves-line-integrals.html
- Sentence: - 全微分・連鎖律・勾配 \ref{calc:total-derivative}, \ref{calc:multivariable-chain-rule}, \ref{calc:gradient}、平均値の不等式 \tref{calc:mean-value-inequality}、偏導関数が連続なら微分可能 \ref{calc:continuous-partials-differentiable}。
  - `calc:derivative`: NG — Here "微分可能" refers to differentiability of multivariable functions (total differentiability), not the single-variable derivative defined in the card.

## 「次元」 in 04-analysis/01-real-analysis/04-vector-analysis
- Default: `lin:dimension` → **no candidate fits**
- Pages: 02-surface-integrals.html, 03-integral-theorems.html
- Sentence: 曲線の長さ（\ref{vec:c1-curve-length}）の 2 次元以上の類似として、パラメータで表された曲面の**面積**を定義する。曲線の長さが $\int|\gamma'|$ だったのに対し、$k$ 次元のパラメータ曲面 $\varphi$ の面積は $\int\sqrt{\det({}^{t}D\varphi\,D\varphi)}$（**グラム行列式**の平方根）で、これはコ
  - `lin:dimension`: NG — Here "2次元以上" means spatial dimension (number of coordinates), not the dimension of a vector space as defined in the card.
  - `cat:trace-dimension`: NG — Here "次元" means the geometric dimension (2次元以上 = two or more dimensions), not the categorical dimension $\dim a$ defined in the card.
  - `ring:krull-dimension`: NG — one short English sentence why
  - `ag:dimension`: NG — Here "次元" refers to the dimension of a parameterized surface (the number of parameters), not the dimension of a topological space defined via chains of irreducible closed subsets.

## 「積分可能」 in 04-analysis/01-real-analysis/04-vector-analysis
- Default: `calc:riemann-integrable` → **no candidate fits**
- Pages: 02-surface-integrals.html
- Sentence: を $\varphi$ の **$k$ 次元面積**という（$\sqrt{g_{\varphi}}$ は連続で、\ref{calc:jordan-measurable-criterion.3} から積分可能）。$k=1$ では曲線の長さ（\ref{vec:c1-curve-length}）に、$k=n$ では $\int_{D}|\det D\varphi|$ に一致する。$n=3$, $k=2$ では $A(\varphi)=\int_{D}|\varphi_{u}\times\varphi_{v}|\,du\,dv$
  - `calc:riemann-integrable`: NG — Here "積分可能" refers to Riemann-integrability of the function $\sqrt{g_{\varphi}}$ in the sense of the card's definition, so it matches.

## 「近傍」 in 04-analysis/01-real-analysis/04-vector-analysis
- Default: `top:neighborhood` → **no candidate fits**
- Pages: 02-surface-integrals.html, 03-integral-theorems.html
- Sentence: - **パラメータ曲面**：$D\subset\mathbb{R}^{k}$ をコンパクトなジョルダン可測集合とし、$D$ の近傍で定義された $C^{1}$ 級写像 $\varphi\colon D\to\mathbb{R}^{n}$ を **$k$ 次元のパラメータ曲面**という。$\varphi_{u_{j}}\defeq\partial_{j}\varphi$。$D\varphi(u)$ の階数が $\operatorname{int}D
  - `top:neighborhood`: NG — Here "近傍" means a neighborhood of the set $D$ in the ambient Euclidean space, not a neighborhood of a point $x$ in a topological space as defined in the card.

## 「連続」 in 04-analysis/01-real-analysis/04-vector-analysis
- Default: `calc:function-limit` → **no candidate fits**
- Pages: 01-curves-line-integrals.html, 02-surface-integrals.html, 03-integral-theorems.html
- Sentence: - 全微分・連鎖律・勾配 \ref{calc:total-derivative}, \ref{calc:multivariable-chain-rule}, \ref{calc:gradient}、平均値の不等式 \tref{calc:mean-value-inequality}、偏導関数が連続なら微分可能 \ref{calc:continuous-partials-differentiable}。
  - `calc:function-limit`: NG — Here "連続" refers to partial derivatives being continuous (a property of functions), which matches the definition of continuity of a function, so it is the same notion.
  - `cx:limit-continuity`: NG — Here "連続" refers to continuity of partial derivatives in multivariable real calculus, not continuity of a complex function as defined in the card.
  - `top:continuous`: NG — Here "連続" refers to partial derivatives being continuous (real analysis), not continuity of a map between topological spaces as defined in the card.

## 「ノルム」 in 04-analysis/02-complex-analysis/01-basics
- Default: `lin:inner-product` → **fits: `calc:norm`**
- Pages: 02-line-integrals.html
- Sentence: $\C=\R^{2}$ とみると、複素数の絶対値はユークリッドのノルムで、複素数値の積分は $\R^{2}$ 値の積分と同じものである。\ref{vec:vector-integral-inequality} を使う（区分的に連続なら区間ごとに使い、三角不等式で足す）。
  - `lin:inner-product`: NG — ノルム is only defined in the card as the derived quantity $\|v\|=\sqrt{\langle v,v\rangle}$; the card's defined notion is 内積, not ノルム itself.
  - `comp:pi11-norm`: NG — This "ノルム" means the Euclidean norm (absolute value) on $\R^{2}$, not a function from a subset of $\N$ to ordinals as in the definition card.
  - `calc:norm`: OK

## 「定数項」 in 04-analysis/02-complex-analysis/01-basics
- Default: `ring:degree` → **no candidate fits**
- Pages: 05-singularities.html
- Sentence: infty$ が $f$ の除去可能な特異点または極であるとする（ある $R$ について $f$ は $\{|z|>R\}$ で正則）。このとき $f$ は有理関数で、極を $p_{1},\dots,p_{k}$、その主要部を $Q_{j}\bigl(\frac{1}{z-p_{j}}\bigr)$（$Q_{j}$ は定数項のない多項式）とすると、多項式 $P$ があって
  - `ring:degree`: NG — Here "定数項のない多項式" means a polynomial with zero constant term, which is the same notion as the constant term defined in the card (the coefficient $f_{0}$), so the term is used with the card's meaning.

## 「対数関数」 in 04-analysis/02-complex-analysis/01-basics
- Default: `calc:log` → **no candidate fits**
- Pages: 01-power-series.html
- Sentence: 程式による特徴づけと等角性を示す。次に、複素係数の冪級数が収束円の中で正則であること（項別に微分してよいこと）を、実数の場合（\ref{calc:power-series-differentiation}）の平均値の定理に頼らずに直接示し、冪級数で局所的に表される関数（解析関数）を定義する。最後に、指数関数・三角関数・対数関数を複素変数に延ばし、対数の主値が正則であること、平方根は $\mathbb{C}\setminus\{0\}$ 全体では連続に選べないことを示す。
  - `calc:log`: NG — Here "対数関数" refers to the complex logarithm (extending the logarithm to a complex variable), not specifically the real natural logarithm defined as the inverse of exp on ℝ.

## 「導関数」 in 04-analysis/02-complex-analysis/01-basics
- Default: `cx:holomorphic` → **fits: `calc:derivative`**
- Pages: 01-power-series.html, 02-line-integrals.html, 03-cauchy-theorem.html, 04-cauchy-formula.html, 05-singularities.html, 06-exercises.html
- Sentence: - 実 2 変数の写像の全微分 \ref{calc:total-derivative}、偏導関数が連続なら微分可能 \ref{calc:continuous-partials-differentiable}、連鎖律 \ref{calc:multivariable-chain-rule}、微分が $0$ なら定数 \ref{calc:zero-derivative-constant}。
  - `cx:holomorphic`: NG — Here "導関数" refers to partial derivatives of a real multivariable map, not the complex derivative defined in the card.
  - `calc:derivative`: OK

## 「微分係数」 in 04-analysis/02-complex-analysis/01-basics
- Default: `calc:derivative` → **no candidate fits**
- Pages: 01-power-series.html
- Sentence: 全微分 $Df(a)$ は一般には任意の $2\times2$ 実行列で、平面を斜めに引き伸ばしたりつぶしたりできる。コーシー–リーマンの方程式は、その行列が「回転と拡大」（複素数倍）の形であるという条件にほかならない。4 個の偏微分係数のうち、自由なのは 2 個だけになる。
  - `calc:derivative`: NG — Here "偏微分係数" means partial derivative coefficients (entries of the Jacobian), not the derivative coefficient f'(a) defined in the card.

## 「微分可能」 in 04-analysis/02-complex-analysis/01-basics
- Default: `calc:derivative` → **no candidate fits**
- Pages: 01-power-series.html, 02-line-integrals.html, 04-cauchy-formula.html, 05-singularities.html
- Sentence: 複素数の範囲で関数を微分するとき、差分商の分母 $h$ は実数ではなく複素数で、$0$ に平面のあらゆる方向から近づく。その極限が方向によらずに存在するという条件（**複素微分可能性**）は、実 2 変数の写像としての微分可能性よりずっと強く、実部と虚部が**コーシー–リーマンの方程式**で結びつくことと同値になる。このページでは、複素微分と正則関数を定義し、コーシー–リーマンの方程式による特徴づけと等角性を示す。次に、複素係数の冪級数が収束円の中で正則であること（項別に微分してよいこと）を、実数の場合（\ref{calc:power-se
  - `calc:derivative`: NG — It refers to complex differentiability, a different notion from the card's real-valued derivative on an interval.

## 「行列式」 in 04-analysis/02-complex-analysis/01-basics
- Default: `lin:leibniz-formula` → **no candidate fits**
- Pages: 01-power-series.html
- Sentence: 第 2 式にコーシー–リーマンの方程式 $u_{y}=-v_{x}$, $v_{y}=u_{x}$ を代入すると $-uv_{x}+vu_{x}=0$。第 1 式と合わせて、$(u_{x},v_{x})$ は行列 $\begin{pmatrix}u&v\\v&-u\end{pmatrix}$ の核に入る。この行列式は $-(u^{2}+v^{2})=-k\neq0$ なので $u_{x}=v_{x}=0$、すなわち $f'=0$。2 により定数。
  - `lin:leibniz-formula`: NG — Here "行列式" refers to the determinant of the specific 2×2 matrix \(\begin{pmatrix}u&v\\v&-u\end{pmatrix}\), which is exactly the Leibniz determinant of a matrix, so it matches the card's definition.

## 「ホモロジー」 in 04-analysis/02-complex-analysis/02-residues
- Default: `ha:homology` → **no candidate fits**
- Pages: 01-winding-number.html, 02-residue-theorem.html
- Sentence: gamma}\frac{dz}{z-a}$ である。このページでは、回転数が整数であり、代数的位相幾何学の閉道の写像度（\ref{at:degree-loop}）と一致することを示す。そのうえで、領域の外の点についての回転数がすべて $0$ になる閉曲線（の和）に対して、コーシーの積分定理と積分公式が成り立つこと（**ホモロジー版のコーシーの定理**）を、ディクソンによる短い証明で示す。最後に、単連結な領域ではこの条件が自動的に満たされるので、正則関数は原始関数をもち、零点のない正則関数は正則な対数と冪根をもつ。
  - `ha:homology`: NG — Here "ホモロジー" refers to a homology class of cycles in complex analysis (Cauchy's theorem for homology), not the homology group of a chain complex defined in the card.

## 「ラプラス方程式」 in 04-analysis/02-complex-analysis/02-residues
- Default: `cx:harmonic` → **no candidate fits**
- Pages: 04-harmonic.html
- Sentence: ラプラス方程式 $\Delta u=u_{xx}+u_{yy}=0$ を満たす関数を**調和関数**という。平面の調和関数は、正則関数の実部とほぼ同じものである：正則関数の実部は調和で、逆に単連結な領域の調和関数は正則関数の実部になる（**調和共役**の存在）。このことから、調和関数は何回でも微分でき、平均値の性質と最大値原理を満た
  - `cx:harmonic`: NG — The term "ラプラス方程式" refers to the equation itself, not to a harmonic function as defined in the card.

## 「冪級数」 in 04-analysis/02-complex-analysis/02-residues
- Default: `cx:complex-power-series` → **no candidate fits**
- Pages: 02-residue-theorem.html
- Sentence: **3（1 を含む）.** $(z-a)^{m}f(z)=\sum_{n\ge-m}c_{n}(z-a)^{n+m}$ は $a$ の近くで冪級数（除去可能）で、$(z-a)^{m-1}$ の係数が $c_{-1}$。テイラー係数の公式（\ref{cx:power-series-holomorphic.3}）から主張。$m=1$ が 1。
  - `cx:complex-power-series`: NG — It refers to a Laurent series with negative powers, not a power series $\sum_{n\ge0}c_{n}(z-a)^{n}$ as defined.
  - `calc:power-series`: NG — It allows negative powers (n≥−m), so it is a Laurent series, not a power series as defined.

## 「収束半径」 in 04-analysis/02-complex-analysis/02-residues
- Default: `cx:complex-power-series` → **no candidate fits**
- Pages: 02-residue-theorem.html
- Sentence: **Step 2（主要部を引く）.** $a_{j}$ での主要部を $P_{j}(z)\defeq\sum_{n\ge1}c^{(j)}_{-n}(z-a_{j})^{-n}$ とする。これは $w=\frac{1}{z-a_{j}}$ の冪級数で、収束半径は $\infty$（\ref{cx:laurent} の Step 5 で $r=0$）なので、$P_{j}$ は $\C\setminus\{a_{j}\}$ で正則。$g\defeq f-\sum_{j}P_{j}$ は各 $a_{j}$ で除去可能（主要部が消える）なので、$U'\defeq U\setminu
  - `cx:complex-power-series`: NG — Here "収束半径" refers to the radius of convergence of a power series in \(w=1/(z-a_{j})\), which is exactly the notion defined by the card (a power series centered at \(0\) in the variable \(w\)), so it matches.
  - `calc:power-series`: NG — Here "収束半径" refers to the radius of convergence of a power series in $w=1/(z-a_{j})$, which is exactly the notion defined in the card (a power series centered at $0$ in the variable $w$), so it matches.

## 「定義域」 in 04-analysis/02-complex-analysis/02-residues
- Default: `set:relation` → **no candidate fits**
- Pages: 01-winding-number.html
- Sentence: 証明の要は、二つの関数 $h(z)=\int_{\Gamma}\frac{f(z)-f(w)}{z-w}dw$（$U$ の上で定義される）と $h_{1}(z)=\int_{\Gamma}\frac{f(w)}{w-z}dw$（回転数が $0$ の点の上で定義される）が、共通の定義域で一致し、つなぐと整関数になること。零ホモローグの仮定は、二つの定義域を合わせると平面全体になることを保証する。あとは無限遠で $0$ になる整関数は $0$ という、リウヴィルの定理だけである。
  - `set:relation`: NG — Here 定義域 means the domain of a function (the set where a function is defined), not the domain of a relation as defined in the card.
  - `logic:rm-continuous-code`: NG — Here "定義域" refers to the domain of the complex functions $h$ and $h_{1}$ (subsets of $\mathbb{C}$), not the domain of a continuous real function as defined in the card.

## 「有理型」 in 04-analysis/02-complex-analysis/02-residues
- Default: `cx:meromorphic` → **no candidate fits**
- Pages: 02-residue-theorem.html, 03-definite-integrals.html
- Sentence: - $f$ が $a$ で有理型（正則または極）で $f\not\equiv0$ のとき、$\operatorname{ord}_{a}f$ を、零点ならその位数、極なら位数のマイナス、それ以外は $0$ と定める。
  - `cx:meromorphic`: NG — Here "有理型 at a point" means meromorphic in a neighborhood of $a$ (holomorphic or a pole), which is a local special case of the card's global definition on an open set, but the sentence's parenthetical restricts it to "holomorphic or pole at $a$," a local notion not identical to the card's definition of a meromorphic function on $U$.

## 「次元」 in 04-analysis/02-complex-analysis/02-residues
- Default: `lin:dimension` → **no candidate fits**
- Pages: 01-winding-number.html
- Sentence: 1}(\C\setminus\{a\})\cong\mathbb{Z}$）であり、零ホモローグはその類が $U$ の 1 次ホモロジーで $0$ であることに対応する（平面の開集合 $U$ では、$H_{1}(U)$ の類が $U$ の外の各点のまわりの回転数で判定できることが知られている。アレクサンダー双対性の 2 次元の場合にあたる。未収録）。積分 $\int_{\Gamma}f\,dz$ は、閉 1 形式 $f\,dz$ とホモロジー類の対で、コーシーの定理は「正則関数の微分形式 $f\,dz$ は閉形式である」ことと同じ内容である。
  - `lin:dimension`: NG — This use of 次元 refers to the dimension in Alexander duality (2-dimensional case), not the dimension of a vector space as defined in the card.
  - `cat:trace-dimension`: NG — This use of 次元 refers to the topological dimension of a plane open set, not the categorical dimension defined as the trace of the identity morphism.
  - `ring:krull-dimension`: NG — one short English sentence why
  - `ag:dimension`: NG — This use of「次元」refers to the dimension of a homology class or the 2-dimensional case of Alexander duality, not the dimension of a topological space defined as the supremum of lengths of chains of irreducible closed subsets.

## 「線積分」 in 04-analysis/02-complex-analysis/02-residues
- Default: `vec:line-integral` → **no candidate fits**
- Pages: 01-winding-number.html, 02-residue-theorem.html, 04-harmonic.html
- Sentence: $ 級。像 $\gamma^{*}$、閉曲線、複素線積分 \ref{cx:contour-integral}、基本性質 \ref{cx:contour-integral-basic}、長さによる評価 \tref{cx:ml-inequality}、曲線との合成の微分 \ref{cx:chain-rule-curve}、線積分の基本定理と原始関数の存在 \tref{cx:fundamental-theorem-contour}, \ref{cx:primitive-existence}。
  - `vec:line-integral`: NG — This is a table-of-contents/index listing of topics (including complex line integrals), not a use of the term with the card's specific meaning of a line integral of a vector field along a piecewise $C^{1}$ curve.

## 「連続」 in 04-analysis/02-complex-analysis/02-residues
- Default: `cx:limit-continuity` → **no candidate fits**
- Pages: 01-winding-number.html, 02-residue-theorem.html, 03-definite-integrals.html, 04-harmonic.html
- Sentence: - 積分記号下の微分（パラメータ積分の連続性）\ref{calc:differentiation-under-integral.1}、連続関数の累次積分の順序交換 \ref{calc:fubini-continuous}、測度 0 の集合 \ref{calc:measure-zero-rn}, \ref{calc:measure-zero-rn-propert
  - `cx:limit-continuity`: NG — This "連続" refers to continuity of functions in real analysis (parameter integrals, iterated integrals), not the complex-function continuity defined in the card.
  - `top:continuous`: NG — Here "連続" refers to continuity of functions on Euclidean/integral settings, not specifically continuity of a map between topological spaces as defined in the card.

## 「ホモロジー」 in 04-analysis/02-complex-analysis/03-global
- Default: `ha:homology` → **no candidate fits**
- Pages: 04-riemann-mapping.html
- Sentence: - 単連結領域で回転数が消える \ref{cx:simply-connected-homologous}、正則な対数と冪根 \ref{cx:holomorphic-log}、原始関数の存在 \ref{cx:primitive-existence}、ホモロジー版のコーシーの定理 \tref{cx:cauchy-homology}。
  - `ha:homology`: NG — Here "ホモロジー" refers to homology of cycles/domains in complex analysis (Cauchy's theorem in homology form), not the homology of a chain complex defined in the card.

## 「一次独立」 in 04-analysis/02-complex-analysis/03-global
- Default: `mod:free-module` → **no candidate fits**
- Pages: 06-elliptic-functions.html
- Sentence: $e^{z}$ は周期 $2\pi i$ をもつ一重周期の関数である。では、実数上一次独立な二つの周期をもつ（**二重周期**の）関数はあるか。正則なものは定数しかない（リウヴィルの定理）が、極を許せば豊富に存在する。それが**楕円関数**で、楕円の弧長の積分の逆関数として歴史的に現れた。このページでは、楕円関数の基本的な性質（リウヴィルの定理群：周期平行四辺形の中の留数の和は $0$、零点と極の個数は等し
  - `mod:free-module`: NG — Here "一次独立" means linear independence over the reals (実数上一次独立), not linear independence of a family of elements of a left R-module as defined in the card.

## 「下限」 in 04-analysis/02-complex-analysis/03-global
- Default: `calc:supremum` → **no candidate fits**
- Pages: 01-representations.html
- Sentence: $P$ が $0$ でない点の近くで、$P_{N}\to P$ と $P_{N}'\to P'$（ワイエルシュトラスの収束定理）が広義一様、$P$ は $0$ でないので $\frac{P_{N}'}{P_{N}}\to\frac{P'}{P}$ も広義一様（$P_{N}$ は一様に $P$ に近く、$|P|$ は正の下限をもつ）。$\frac{P_{N}'}{P_{N}}=\sum_{n\le N}\frac{a_{n}'}{1+a_{n}}$（積の微分）。
  - `calc:supremum`: NG — Here "下限" means a positive lower bound (minimum value) of the modulus |P|, not the infimum of a subset as defined in the card.

## 「定義域」 in 04-analysis/02-complex-analysis/03-global
- Default: `set:relation` → **no candidate fits**
- Pages: 01-representations.html
- Sentence: は有理型で、$\operatorname{Re}z>0$ では関数等式を $n+1$ 回使って $\Gamma(z)$ と一致する。$\Gamma_{(n)}$ と $\Gamma_{(n')}$ は共通の定義域で一致する（一致の定理）ので、これらをつないで $\C$ 上の有理型関数を得る。一意性は一致の定理から。
  - `set:relation`: NG — Here 定義域 refers to the domain of a meromorphic function (an open subset of $\C$), not the domain of a relation as a set of ordered pairs.
  - `logic:rm-continuous-code`: NG — Here "定義域" refers to the domain of a meromorphic function on $\mathbb{C}$ (a complex domain), not the domain of a continuous real function as defined in the card.

## 「有界」 in 04-analysis/02-complex-analysis/03-global
- Default: `calc:supremum` → **no candidate fits**
- Pages: 01-representations.html, 03-normal-families.html, 04-riemann-mapping.html, 05-analytic-continuation.html, 06-elliptic-functions.html, 07-exercises.html
- Sentence:  は同じ極と主要部（$n$ で $\frac{1}{(z-n)^{2}}$）をもつ。右辺は補正なしで広義一様収束する。差は整関数で、周期 $1$ をもち、帯 $0\le\operatorname{Re}z\le1$ で $|\operatorname{Im}z|\to\infty$ のとき両方とも $0$ に近づくので有界、リウヴィルの定理から定数 $0$。よって $\frac{\pi^{2}}{\sin^{2}\pi z}=\sum_{n\in\mathbb{Z}}\frac{1}{(z-n)^{2}}$。
  - `calc:supremum`: NG — Here "有界" means bounded on the strip (a function bounded in absolute value), not the order-theoretic boundedness of a subset of an ordered set defined in the card.
  - `logic:rm-analysis-defs`: NG — Here "有界" describes a function on a strip being bounded, not a real sequence bounded by a rational number as defined in the card.

## 「真性特異点」 in 04-analysis/02-complex-analysis/03-global
- Default: `cx:isolated-singularity` → **no candidate fits**
- Pages: 02-mobius.html
- Sentence: **Step 1（無限遠点は真性特異点でない）.** $f$ を単射な整関数とする。開写像定理から $V\defeq f(\mathbb{D})$ は開集合。$\infty$ が $f$ の真性特異点なら、カゾラーティ–ワイエルシュトラス（$g(w)=f(1/w)$ に適用）から $f(\{|z|>1\})$ は稠密で、開集合 $V$ と交わる。すると $
  - `cx:isolated-singularity`: NG — the card defines an isolated singularity at a finite point $a$ via a Laurent expansion on a punctured disk, whereas the sentence applies "真性特異点" to the point at infinity, which is not covered by that definition.

## 「線積分」 in 04-analysis/02-complex-analysis/03-global
- Default: `vec:line-integral` → **no candidate fits**
- Pages: 03-normal-families.html
- Sentence: ce}、コーシーの評価式 \ref{cx:cauchy-estimates}、偏角の原理 \tref{cx:argument-principle}、零点の\term[位数]{cx:zero-order} \ref{cx:zero-order}、一致の定理 \tref{cx:identity-theorem}、一様収束と線積分 \ref{cx:uniform-limit-integral}。
  - `vec:line-integral`: NG — This is a table-of-contents entry listing a topic ("uniform convergence and line integrals"), not a use of the term with the card's specific definition.

## 「自己同型」 in 04-analysis/02-complex-analysis/03-global
- Default: `grp:homomorphism` → **no candidate fits**
- Pages: 02-mobius.html, 04-riemann-mapping.html, 07-exercises.html
- Sentence: $T(z)=\frac{az+b}{cz+d}$ の形の写像（**一次分数変換**、メビウス変換）は、リーマン球面の上の全単射で、円と直線を円と直線に写し、角度を保つ。このページでは、一次分数変換の基本性質（行列との対応、円の保存、複比）を整えたうえで、正則関数の基本的な領域の**自己同型群**（自分自身への双正則写像の全体）を決定する。中心となる道具は**シュワルツの補題**（単位円板から単位円板への正則写像で原点を止めるものは、原点からの距離を縮める）で、これから単位円板の自己同型はすべて一次分数変換であることが分かる。平面・リーマン球面・上半平面についても同様の決定を行う。
  - `grp:homomorphism`: NG — Here "自己同型" means a biholomorphic map of a domain (complex analysis), not a group automorphism as defined in the card.
  - `ring:homomorphism`: NG — Here "自己同型" means a biholomorphic self-map of a domain (complex analysis), not a ring isomorphism from a ring to itself.

## 「被覆空間」 in 04-analysis/02-complex-analysis/03-global
- Default: `at:covering` → **no candidate fits**
- Pages: 05-analytic-continuation.html
- Sentence: その一意性と、道を少し動かしても結果が変わらないことを示す。その帰結が**モノドロミー定理**で、端点を止めてホモトープな道に沿った接続は同じ結果を与える。とくに単連結な領域では、すべての道に沿って接続できる関数の芽は、領域全体の正則関数を定める。最後に、どの方向にも接続できない例（自然境界）を挙げ、層とエタール空間・被覆空間の言葉との関係を述べる。
  - `at:covering`: NG — Here "被覆空間" is used loosely in the context of étale spaces and covering spaces, but the sentence does not assert the specific covering-map definition (local homeomorphism with evenly covered neighborhoods); it is a general reference to the notion, not a use matching definition 2.1's precise meaning.

## 「距離」 in 04-analysis/02-complex-analysis/03-global
- Default: `top:metric-topology` → **no candidate fits**
- Pages: 02-mobius.html, 03-normal-families.html, 05-analytic-continuation.html
- Sentence: で、円と直線を円と直線に写し、角度を保つ。このページでは、一次分数変換の基本性質（行列との対応、円の保存、複比）を整えたうえで、正則関数の基本的な領域の**自己同型群**（自分自身への双正則写像の全体）を決定する。中心となる道具は**シュワルツの補題**（単位円板から単位円板への正則写像で原点を止めるものは、原点からの距離を縮める）で、これから単位円板の自己同型はすべて一次分数変換であることが分かる。平面・リーマン球面・上半平面についても同様の決定を行う。
  - `top:metric-topology`: NG — Here "距離" means the Euclidean distance between points (a metric), which matches the card's definition of a distance function on a set.

## 「近傍」 in 04-analysis/02-complex-analysis/03-global
- Default: `top:neighborhood` → **no candidate fits**
- Pages: 01-representations.html, 05-analytic-continuation.html, 07-exercises.html
- Sentence: **Step 2（零点）.** $z_{0}\in U$ と、その近傍の閉円板 $K\subset U$ をとる。$N_{0}$ を $s\defeq\sup_{K}\sum_{n>N_{0}}|a_{n}|<\log2$ となるようにとる。$Q_{M}\defeq\prod_{n=N_{0}+1}^{M}(1+a_{n})$ は $K$ 上一様に $Q$ に収束し（Step 1 と同じ
  - `top:neighborhood`: NG — Here "近傍" refers to a neighborhood in the complex plane (a disk around a point), not the general topological-space neighborhood defined in the card.

## 「開写像」 in 04-analysis/02-complex-analysis/03-global
- Default: `top:homeomorphism` → **no candidate fits**
- Pages: 02-mobius.html, 04-riemann-mapping.html, 07-exercises.html
- Sentence: - 最大値原理 \tref{cx:maximum-principle}、除去可能特異点定理 \tref{cx:removable-singularity}、開写像定理 \tref{cx:open-mapping}、局所逆関数と双正則写像 \ref{cx:local-inverse}、等角性 \ref{cx:conformal}、一致の定理 \tref{cx:identity-theorem}、偏角の原理 \tref{cx:argument-principle}。
  - `top:homeomorphism`: NG — In this sentence 開写像 refers to the open mapping theorem in complex analysis, not the topological definition of an open map given in the card.

## 「開集合」 in 04-analysis/02-complex-analysis/03-global
- Default: `top:topological-space` → **no candidate fits**
- Pages: 01-representations.html, 02-mobius.html, 03-normal-families.html, 04-riemann-mapping.html, 05-analytic-continuation.html, 07-exercises.html
- Sentence: $U$ を開集合、$a_{n}$ を $U$ で正則な関数とし、$\sum_{n}|a_{n}(z)|$ が $U$ 上で広義一様収束するとする。
  - `top:topological-space`: NG — Here "開集合" refers to an open set in the complex plane (a domain for holomorphic functions), not an open set of a general topological space as defined by the topology axioms.

## 「リーマン積分」 in 05-geometry-topology/01-general-topology/01-topological-spaces
- Default: `calc:riemann-integrable` → **no candidate fits**
- Pages: 05-nets-filters.html
- Sentence: 3. **リーマン和.** 区間 $[a,b]$ の分割（分点と代表点の組）を細分の順序で有向集合とみると、リーマン和は $\R$ のネットで、リーマン積分はその極限である。
  - `calc:riemann-integrable`: NG — the sentence uses "リーマン積分" as the limit of Riemann sums (a net limit), whereas the card defines it as the common value of upper and lower integrals.

## 「単射」 in 05-geometry-topology/01-general-topology/01-topological-spaces
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 01-topologies.html, 03-bases-neighborhoods.html
- Sentence: 有限な集合は補可算なので、補有限位相は補可算位相に含まれる。真の包含：$X$ の可算無限部分集合 $C$ をとると、$X\setminus C$ は補可算だが補有限でない。ただし、非可算集合が可算無限部分集合をもつことは $\ZF$ だけでは証明できず、可算選択公理を使えば証明できる（$\omega$ から無限集合への単射を作るのに、可算回の選択をする）。$\ZF$ だけでは、可算無限部分集合をもたない無限集合（デデキント有限な無限集合）の存在が否定できない。
  - `set:injection-surjection`: NG — Here 単射 refers to an injection from $\omega$ into an infinite set, which matches the card's definition of an injective function (逆関係が関数), so it is the same notion.

## 「始切片」 in 05-geometry-topology/01-general-topology/01-topological-spaces
- Default: `set:initial-segment` → **no candidate fits**
- Pages: 01-topologies.html
- Sentence: 同時に確認すること（無限の共通部分）はできない。比喩で言えば、位相は「どこまで細かく見分けられるか」を決める眼鏡で、強い位相ほど度の強い眼鏡である。離散位相はすべての点を見分け、密着位相は何も見分けない。計算可能性の系列のカントール空間の位相（\ref{comp:page-analytical-hierarchy} の始切片 $\bar{f}(n)$ による近さ）は、この見方の典型である。
  - `set:initial-segment`: NG — Here "始切片" refers to an initial segment of a sequence (the restriction $\bar{f}(n)$), not the set-theoretic predecessor set $\mathrm{pred}(A,x,R)$ defined in the card.

## 「引き戻し」 in 05-geometry-topology/01-general-topology/01-topological-spaces
- Default: `cat:product` → **no candidate fits**
- Pages: 04-continuous-maps.html
- Sentence: **高い視点から：連続性は「観測の引き戻し」.** 開集合を観測可能な性質と読む見方（\ref{top:page-topologies} の補足）では、$f$ が連続であるとは、「$f(x)$ についての観測可能な性質」が「$x$ についての観測可能な性質」に引き戻されることである。比喩で言えば、出力を有限の精度で知りたければ、入力を有限の精度で知れば足りる。
  - `cat:product`: NG — Here "引き戻し" refers to pulling back observations/properties along a map (preimage), not the categorical fiber product limit.

## 「普遍性」 in 05-geometry-topology/01-general-topology/01-topological-spaces
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 04-continuous-maps.html
- Sentence: 位相であること：逆像は和・共通部分と交換するので (O1)〜(O3) が成り立つ。最強であること：各 $f_{i}$ を連続にする位相の開集合は条件を満たすので、終位相に含まれる。普遍性：「⇐」：$W\subseteq Z$ 開なら、$f_{i}^{-1}[g^{-1}[W]]=(g\circ f_{i})^{-1}[W]$ は開なので、$g^{-1}[W]$ は終位相で開。一意性は始位相と双対的。
  - `cat:universal-arrow`: NG — 普遍性 here refers to the universal property of the final topology, not a universal morphism (普遍射) as defined in the card.

## 「最小元」 in 05-geometry-topology/01-general-topology/01-topological-spaces
- Default: `set:well-order` → **no candidate fits**
- Pages: 01-topologies.html, 03-bases-neighborhoods.html
- Sentence: 3. $X$ 上の位相の全体は、包含について完備束をなす（最小元は密着位相、最大元は離散位相）。
  - `set:well-order`: NG — Here "最小元" refers to the least element of a complete lattice under inclusion, not the $R$-minimal element of a well-order as defined in the card.

## 「直積」 in 05-geometry-topology/01-general-topology/01-topological-spaces
- Default: `grp:direct-product` → **fits: `set:cartesian-product`**
- Pages: 04-continuous-maps.html
- Sentence: **同相写像**で、同相な空間は位相的には区別できない（\ref{top:homeomorphism}）。後半では、写像の族を連続にする最弱の位相（**始位相**、\ref{top:initial-topology}）と最強の位相（**終位相**、\ref{top:final-topology}）を導入する。部分空間・直積・商の位相はすべてこの二つの特別な場合である。
  - `grp:direct-product`: NG — This "直積" refers to the product topology on a product space, not the direct product of groups defined in the card.
  - `set:cartesian-product`: OK

## 「開被覆」 in 05-geometry-topology/01-general-topology/01-topological-spaces
- Default: `top:compact` → **no candidate fits**
- Pages: 03-bases-neighborhoods.html
- Sentence: 第一可算とは各点の近傍が可算個で代表できること、第二可算とは開集合全体が可算個の開基から作れること、リンデレーフとはどんな開被覆も可算個で足りることである。
  - `top:compact`: NG — 「開被覆」は定義カード内でコンパクト性を定義するために使われている用語であり、カードが定義しているのは「コンパクト」と「有限交叉性」であって「開被覆」自体の定義ではない。

## 「普遍性」 in 05-geometry-topology/01-general-topology/02-constructions
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 01-subspaces-products.html, 02-quotients.html
- Sentence: - 位相・開基・準開基・閉包・連続写像・同相・始位相とその普遍性は前ページまでのとおり（\ref{top:topological-space}, \ref{top:base}, \ref{top:subbase}, \ref{top:interior-closure}, \ref{top:continuous}, \ref{top:homeomorphism}, \ref{top:
  - `cat:universal-arrow`: NG — 「普遍性」は普遍射が持つ性質を指す語であり、普遍射そのものの定義とは異なる。

## 「直積」 in 05-geometry-topology/01-general-topology/02-constructions
- Default: `grp:direct-product` → **fits: `set:cartesian-product`**
- Pages: 01-subspaces-products.html, 02-quotients.html
- Sentence: 位相空間から新しい位相空間を作る基本的な方法は、部分集合に位相を制限すること（**部分空間**、\ref{top:subspace}）と、空間の族の直積集合に位相を入れること（**直積空間**、\ref{top:product-topology}）である。どちらも前ページの始位相（\ref{top:initial-topology}）の特別な場合で、それぞれ包含写像・射影を連続にする最弱の位相として特徴づけられる。直積位相は位相空間の圏での積であり（\ref{top:
  - `grp:direct-product`: NG — This use refers to the product topology on a product of topological spaces, not the group-theoretic direct product defined in the card.
  - `set:cartesian-product`: OK

## 「貼り合わせ」 in 05-geometry-topology/01-general-topology/02-constructions
- Default: `top:adjunction-space` → **no candidate fits**
- Pages: 02-quotients.html
- Sentence: 図形の一部を「貼り合わせる」操作を位相で表したのが**商空間**である。区間の両端を同一視すると円になり、正方形の対辺を同一視するとトーラスになる。商空間の位相は、射影を連続にする最強の位相（前ページまでの**終位相**、\ref{top:final-topology}）として定まり（\ref{top:quotient-topology}）、
  - `top:adjunction-space`: NG — 「貼り合わせ」 here refers to the general operation of identifying parts of a figure via a quotient space, not specifically the adjunction space construction of gluing $X$ to $Y$ along a map $f$ on a closed subspace $A$.
  - `cat:site-sheaf`: NG — This use of「貼り合わせる」refers to the geometric operation of gluing topological spaces (forming quotient spaces), not the sheaf-theoretic gluing of a compatible family to a section.

## 「閉集合」 in 05-geometry-topology/01-general-topology/02-constructions
- Default: `top:closed-set` → **no candidate fits**
- Pages: 01-subspaces-products.html, 02-quotients.html, 03-order-topology.html
- Sentence: 2. $A$ の閉集合は、$X$ の閉集合 $F$ による $F\cap A$ の形の集合である。$B\subseteq A$ の $A$ での閉包は $\overline{B}\cap A$（$\overline{B}$ は $X$ での閉包）。
  - `top:closed-set`: NG — Here "閉集合" means closed subsets of the subspace \(A\) (i.e., \(F\cap A\) with \(F\) closed in \(X\)), which is the relative/subspace topology notion, not the card's definition of a closed subset of \(X\).

## 「開被覆」 in 05-geometry-topology/01-general-topology/02-constructions
- Default: `top:compact` → **no candidate fits**
- Pages: 03-order-topology.html
- Sentence: - **3 の主張**：点列についての主張で、$\omega_{1}$ は**点列コンパクト**だがコンパクトでない（開被覆 $\{[0,\beta):\beta<\omega_{1}\}$ は有限部分被覆をもたない）。コンパクト性と点列コンパクト性の違いの標準的な例である（\ref{top:compact}）。
  - `top:compact`: NG — 「開被覆」はコンパクト性の定義に現れる用語であり、カードが定義する「コンパクト」や「有限交叉性」そのものではない。

## 「可算」 in 05-geometry-topology/01-general-topology/03-function-spaces
- Default: `set:finite-set` → **no candidate fits**
- Pages: 01-function-space-topologies.html
- Sentence: $X$ をチコノフ空間（完全正則かつ $T_{1}$）とする。$C_{p}(X,\R)$ が第一可算であることと、$X$ が可算であることは同値である。
  - `set:finite-set`: NG — Here "可算" refers to first countability (第一可算) of a function space, not the cardinality notion of a countable set defined in the card.

## 「左随伴」 in 05-geometry-topology/01-general-topology/03-function-spaces
- Default: `cat:adjunction` → **fits: `cat:adjunction-in-2-category`**
- Pages: 02-exponential-law.html
- Sentence: **高い視点から：指数法則は随伴.** \ref{top:exponential-bijective} は、$X$ が局所コンパクトハウスドルフなら、関手 $-\times X$ が $C_{c}(X,-)$ の左随伴であること（\ref{cat:adjunction}）を言っている：$\mathbf{Top}(Z\times X,Y)\cong\mathbf{Top}(Z,C_{c}(X,Y))$。評価写像はこの随伴の余単位にあたる。比喩で言えば、「二つの入力をとる機械」と「一つ目の入力を受け取ると、二つ目の入力を待つ機械を返す機
  - `cat:adjunction`: NG — In the sentence, "左随伴" refers to the functor $-\times X$ being a left adjoint of $C_{c}(X,-)$, which matches the card's definition of left adjoint (the left functor $F$ in an adjunction $F\dashv G$).
  - `cat:adjunction-in-2-category`: OK

## 「有限次元」 in 05-geometry-topology/01-general-topology/03-function-spaces
- Default: `lin:dimension` → **no candidate fits**
- Pages: 03-ascoli.html
- Sentence: コンパクト空間 $X$ 上の連続写像の空間 $C(X,Y)$（一様収束位相）で、どのような部分集合がコンパクトな閉包をもつか。有限次元空間なら「有界閉」が答えだが、関数空間では有界だけでは足りない（$x^{n}$ の列は $[0,1]$ 上で有界だが、一様収束する部分列をもたない）。不足しているのは「関数たちが一斉に連続であること」すなわち**同等連続性**（\ref{top:equicontinuous}）で、**アスコリ–アルツェラの定理**（\
  - `lin:dimension`: NG — Here "有限次元空間" refers to a finite-dimensional function space (a topological/functional-analytic notion), not the linear-algebra dimension of a vector space defined in the card.
  - `at:cw-complex`: NG — Here "有限次元空間" refers to a finite-dimensional topological/vector space in the context of function spaces, not a finite-dimensional CW complex as defined in the card.

## 「直積」 in 05-geometry-topology/01-general-topology/03-function-spaces
- Default: `grp:direct-product` → **fits: `set:cartesian-product`**
- Pages: 01-function-space-topologies.html, 02-exponential-law.html, 03-ascoli.html
- Sentence: $f\mapsto(f(x))_{x\in X}$ により $C(X,Y)$ を直積 $Y^{X}=\prod_{x\in X}Y$ の部分集合とみると、各点収束位相は直積位相の相対位相に一致する。とくに、$C_{p}(X,Y)$ の網 $(f_{\lambda})$ が $f$ に収束することと、各 $x$ で $f_{\lambda}(x)\to f(x)$ となることは同値である。また $Y$ 
  - `grp:direct-product`: NG — This is the product topology on an arbitrary product of topological spaces, not the direct product of groups with componentwise group operation defined in the card.
  - `set:cartesian-product`: OK

## 「一階述語論理」 in 05-geometry-topology/01-general-topology/04-properties
- Default: `set:first-order-language` → **no candidate fits**
- Pages: 02-compactness.html
- Sentence: 所的な性質」も有限回の確認で全体に広がる。コンパクト性は、無限集合の上でこの議論を可能にする性質である：各点のまわりで成り立つ性質（各点の近傍で関数が有界、など）は、有限個の近傍で全体が覆えるので、全体で成り立つ。比喩で言えば、コンパクト空間は「どれだけ細かく区切っても、有限枚の地図で全土が描ける国」である。命題論理・一階述語論理の\ref{logic:compactness}は、ストーン空間のコンパクト性として、この意味のコンパクト性と一致する。
  - `set:first-order-language`: NG — 一階述語論理 is a logic (first-order predicate logic), not the set-theoretic language/syntax defined in the card.

## 「完備」 in 05-geometry-topology/01-general-topology/04-properties
- Default: `top:complete-metric` → **no candidate fits**
- Pages: 05-connectedness.html, 06-urysohn-tietze.html
- Sentence: - **上限の性質（実数の完備性）**：区間 ⇒ 連結の核心。$\mathbb{Q}$ では偽：$\mathbb{Q}=(\mathbb{Q}\cap(-\infty,\sqrt{2}))\sqcup(\mathbb{Q}\cap(\sqrt{2},\infty))$ で、$\mathbb{Q}$ は連結でない（しかも順序の意味では「区間」）。
  - `top:complete-metric`: NG — Here "完備性" refers to the least-upper-bound (order) completeness of the reals, not the metric completeness defined by convergence of Cauchy sequences.
  - `set:complete-boolean-algebra`: NG — Here "完備" refers to the completeness of the real numbers (order-completeness/Dedekind completeness), not the completeness of a Boolean algebra as defined in the card.
  - `cat:limit`: NG — Here "完備" refers to the completeness of the real numbers (order completeness), not the category-theoretic completeness defined in the card.
  - `ring:completion`: NG — This "完備" refers to order completeness (least-upper-bound property) of the reals, not the $I$-adic completion of a module.
  - `top:cauchy-filter`: NG — Here "完備" refers to the least-upper-bound (order) completeness of the reals, not the convergence of all Cauchy filters in a uniform space.
  - `ag:proper`: NG — Here "完備" refers to the completeness of the real numbers (order completeness), not a proper scheme over a field.

## 「定義域」 in 05-geometry-topology/01-general-topology/04-properties
- Default: `set:relation` → **fits: `logic:rm-continuous-code`**
- Pages: 03-tychonoff.html
- Sentence: 包含 $\{0,1\}\subseteq[0,1]$ の直積 $\{0,1\}^{\N}\to[0,1]^{\N}$ は連続な単射（普遍性）で、定義域はコンパクト、値域はハウスドルフなので埋め込み（\ref{top:compact-to-hausdorff}）で、像はコンパクトなので閉（\ref{top:compact-hausdorff-closed}）。
  - `set:relation`: NG — Here 定義域 refers to the domain of a function (a map between spaces), not the domain of a relation as defined in the card.
  - `logic:rm-continuous-code`: OK

## 「普遍性」 in 05-geometry-topology/01-general-topology/04-properties
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 03-tychonoff.html, 07-stone-cech.html
- Sentence: 包含 $\{0,1\}\subseteq[0,1]$ の直積 $\{0,1\}^{\N}\to[0,1]^{\N}$ は連続な単射（普遍性）で、定義域はコンパクト、値域はハウスドルフなので埋め込み（\ref{top:compact-to-hausdorff}）で、像はコンパクトなので閉（\ref{top:compact-hausdorff-closed}）。
  - `cat:universal-arrow`: NG — 「普遍性」 here refers to a universal property (a characterizing property), not a universal morphism/arrow as defined in the card.

## 「有界」 in 05-geometry-topology/01-general-topology/04-properties
- Default: `calc:supremum` → **no candidate fits**
- Pages: 02-compactness.html, 05-connectedness.html, 06-urysohn-tietze.html, 07-stone-cech.html, 09-local-connectedness.html
- Sentence: **コンパクト性**は、「無限のものを有限で押さえられる」性質で、開被覆がつねに有限部分被覆をもつこととして定義される（\ref{top:compact}）。閉区間 $[a,b]$ はコンパクトであり（\ref{top:interval-compact}）、$\R^{n}$ の有界閉集合はコンパクトである（**ハイネ＝ボレルの定理**、\tref{top:heine-borel}）。コンパクト空間上の実数値連続関数は最大値をとる（\tref{top:extreme-value}）。本ページでは、コンパクト性の同値な言い換え（有限交叉性、ネット、超フィルター）と、ハウスドルフ空間との関係（\ref
  - `calc:supremum`: NG — Here "有界" is used as part of "有界閉集合" (bounded closed set) in $\R^{n}$, referring to boundedness in the metric/Euclidean sense, not the order-theoretic boundedness (upper/lower bounds in a totally ordered set) defined in the card.
  - `logic:rm-analysis-defs`: NG — Here "有界" refers to a bounded subset of $\R^{n}$ (bounded set), not a bounded sequence as defined in the card.

## 「直積」 in 05-geometry-topology/01-general-topology/04-properties
- Default: `grp:direct-product` → **fits: `set:cartesian-product`**
- Pages: 01-separation-axioms.html, 02-compactness.html, 03-tychonoff.html, 05-connectedness.html, 07-stone-cech.html, 08-paracompactness.html, 09-local-connectedness.html
- Sentence: - 位相・閉包・近傍・基本近傍系・連続写像・部分空間・直積・ネットの収束・距離位相は前ページまでのとおり（\ref{top:closure-neighborhood}, \ref{top:neighborhood-base}, \ref{top:continuous}, \ref{top:subspace}, \ref{top:product-topology}, \ref{
  - `grp:direct-product`: NG — Here 直積 refers to the product topology on a product space, not the direct product of groups defined in the card.
  - `set:cartesian-product`: OK

## 「論理式」 in 05-geometry-topology/01-general-topology/04-properties
- Default: `logic:formula` → **fits: `logic:prop-formula`**
- Pages: 03-tychonoff.html
- Sentence: 4. **命題論理のコンパクト性.** 命題変数の集合 $P$ について、付値の空間 $\{0,1\}^{P}$ はコンパクトで、論理式 $\varphi$ を満たす付値の集合 $[\varphi]$ は閉集合（$\varphi$ に現れる有限個の変数の値だけで決まる）。有限充足可能な論理式の集合 $\Sigma$ について $\{[\varphi]:\varphi\in\Sigma\}$ は有限交叉性をもち、共通部分の元が $\Sigma$ を満たす
  - `logic:formula`: NG — This is propositional logic, whereas the card defines first-order logic formulas over a language $\mathcal{L}$ with quantifiers and terms.
  - `logic:prop-formula`: OK

## 「開基」 in 05-geometry-topology/01-general-topology/04-properties
- Default: `top:base` → **no candidate fits**
- Pages: 01-separation-axioms.html, 08-paracompactness.html
- Sentence: $K\defeq\{1/n:n\ge1\}$ とし、$\R$ に、通常の開集合と、$U\setminus K$（$U$ は通常の開集合）の形の集合の全体を開基とする位相を入れる（**$K$ 位相**）。開基の条件 (B2) は、$(U\setminus K)\cap V=(U\cap V)\setminus K$ などから成り立つ。この位相は通常の位相より強いのでハウスドルフ。$K$ は閉集合（補集合 $\R\setminus K$ は開基の元）で $0\notin K$ 
  - `top:base`: NG — Here "開基" is used as a base for a topology (a collection whose unions give the open sets), which matches the card's definition, but the sentence also calls elements of this base "開基の元" and treats the base as generating a topology — this is consistent; however, the phrase "通常の開集合と…の形の集合の全体を開基とする位相" uses 開基 correctly as a base, so the answer should be ok.

## 「開被覆」 in 05-geometry-topology/01-general-topology/04-properties
- Default: `top:compact` → **no candidate fits**
- Pages: 02-compactness.html, 03-tychonoff.html, 04-local-compactness.html, 08-paracompactness.html
- Sentence: **コンパクト性**は、「無限のものを有限で押さえられる」性質で、開被覆がつねに有限部分被覆をもつこととして定義される（\ref{top:compact}）。閉区間 $[a,b]$ はコンパクトであり（\ref{top:interval-compact}）、$\R^{n}$ の有界閉集合はコンパクトである（**ハイネ＝ボレルの定理**、\tref{top:heine-borel}）。コンパ
  - `top:compact`: NG — the term 開被覆 is used as part of the definition of compactness, not defined by the card itself.

## 「スカラー倍」 in 05-geometry-topology/01-general-topology/05-advanced-properties
- Default: `mod:module` → **no candidate fits**
- Pages: 09-michael-selection.html
- Sentence: とおく。台は局所有限なので、各点の近傍で有限和になり、$f$ は連続（\ref{top:locally-finite-sum} と同じ議論。有限和の連続性は $E$ の加法とスカラー倍の連続性による）。
  - `mod:module`: NG — Here "スカラー倍" refers to scalar multiplication in a topological vector space E, not the module scalar multiplication defined in the card.

## 「ベール空間」 in 05-geometry-topology/01-general-topology/05-advanced-properties
- Default: `top:baire-space` → **no candidate fits**
- Pages: 02-cantor-set.html, 07-rationals-characterization.html, 12-implication-map.html
- Sentence: **前提を変えると.** コンパクト性を外すと、孤立点をもたない可算距離空間はすべて $\mathbb{Q}$ と同相であること（シェルピンスキの定理、\ref{top:sierpinski-q}。可算距離空間は自動的に完全不連結）や、零次元のポーランド空間でコンパクト集合が内部をもたないものは $\N^{\N}$（ベール空間）、したがって無理数全体と同相であること（アレクサンドロフ–ウリゾーン、\tref{top:alexandrov-urysohn-nn}, \ref{top:irrationals-nn}）が成り立つ。
  - `top:baire-space`: NG — Here "ベール空間" denotes the Baire space \(\mathbb{N}^{\mathbb{N}}\), a specific topological space, not the property of being a Baire space as defined in the card.

## 「レトラクション」 in 05-geometry-topology/01-general-topology/05-advanced-properties
- Default: `cat:monic-epic` → **fits: `at:homotopy-equivalent`**
- Pages: 02-cantor-set.html
- Sentence: $F\subseteq2^{\N}$ が空でない閉集合なら、連続写像 $r\colon2^{\N}\to F$ で $r|_{F}=1_{F}$ となるもの（**レトラクション**）がある。
  - `cat:monic-epic`: NG — This is a topological retraction (a continuous map restricting to the identity on a subspace), not the categorical retraction defined in the card as the right-inverse $r$ satisfying $r\circ m=1_{a}$.
  - `at:homotopy-equivalent`: OK

## 「上界」 in 05-geometry-topology/01-general-topology/05-advanced-properties
- Default: `set:chain-maximal` → **no candidate fits**
- Pages: 06-beta-n.html
- Sentence: **上界.** $\Phi$ は連続関数 $\N\to[0,1]$ 全体、すなわち $[0,1]^{\N}$ で、濃度 $\mathfrak{c}^{\aleph_{0}}=\mathfrak{c}$。$\beta\N\subseteq[0,1]^{\Phi}$ なので $\lvert\beta\N\rvert\le\math
  - `set:chain-maximal`: NG — Here "上界" is used as a section heading/label for an upper bound in the cardinality argument, not as the order-theoretic upper bound of a subset defined in the card.

## 「全射」 in 05-geometry-topology/01-general-topology/05-advanced-properties
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 01-stone-duality.html, 02-cantor-set.html, 03-perfect-maps.html, 04-quotient-products.html, 05-countable-compactness.html, 09-michael-selection.html, 10-preservation.html, 11-operations-commute.html
- Sentence: **Step 3（全射）.** \ref{top:stone-space-of-ba} の閉開集合の形。
  - `set:injection-surjection`: NG — Here "全射" is used as a step label referring to surjectivity, but the sentence does not actually assert or use the mathematical property of a map being surjective as defined in the card.

## 「全順序」 in 05-geometry-topology/01-general-topology/05-advanced-properties
- Default: `set:total-order` → **no candidate fits**
- Pages: 07-rationals-characterization.html
- Sentence: **線形順序.** 反射律・反対称律と全順序性は定義から。推移律：$x\prec y\prec z$ で、$x,y$ が初めて分かれる段を $n$、$y,z$ を $m$ とする。$n\le m$ なら段 $n$ で $A_{n}(y)=A_{n}(z)$ なので、$x$ と $z$ も段 $n$ で初めて分かれ $x\prec z$。$m<n$ も同様。
  - `set:total-order`: NG — This "全順序" refers to a linear order on sequences (lexicographic order), not the strict total order defined by the card's trichotomy/irreflexivity conditions.

## 「始切片」 in 05-geometry-topology/01-general-topology/05-advanced-properties
- Default: `set:initial-segment` → **no candidate fits**
- Pages: 02-cantor-set.html
- Sentence: $T\defeq\{x\restriction n:x\in F,n\ge0\}$（$F$ の元の始切片全体）とする。$F$ が閉なので、$x\in F\iff$ すべての $n$ で $x\restriction n\in T$（$x\notin F$ なら $x$ のある筒集合 $[x\restriction n]$ が $F$ と交わらない）。また $T$ の各元 $s$ は $T$ の中で延長できる（$s=y\r
  - `set:initial-segment`: NG — Here "始切片" means an initial segment of a sequence/function (a restriction $x\upharpoonright n$), not the set of predecessors $\mathrm{pred}(A,x,R)$ defined in the card.

## 「引き戻し」 in 05-geometry-topology/01-general-topology/05-advanced-properties
- Default: `cat:product` → **no candidate fits**
- Pages: 10-preservation.html
- Sentence: - **「被覆の性質」**（コンパクト・リンデレーフ・可算コンパクトなど）は、閉部分空間と連続像にはよく伝わるが、一般の部分空間には伝わらない。開被覆を引き戻したり押し出したりできるのは、閉集合と連続写像の向きだからである。
  - `cat:product`: NG — Here "引き戻し" refers to pulling back an open cover along a map (preimage), not the categorical fiber product/pullback defined in the card.

## 「押し出し」 in 05-geometry-topology/01-general-topology/05-advanced-properties
- Default: `cat:coequalizer` → **no candidate fits**
- Pages: 10-preservation.html, 11-operations-commute.html
- Sentence: - **「被覆の性質」**（コンパクト・リンデレーフ・可算コンパクトなど）は、閉部分空間と連続像にはよく伝わるが、一般の部分空間には伝わらない。開被覆を引き戻したり押し出したりできるのは、閉集合と連続写像の向きだからである。
  - `cat:coequalizer`: NG — Here "押し出し" is used informally to mean pushing a cover forward along a map, not the category-theoretic pushout (fibered coproduct) defined in the card.

## 「普遍性」 in 05-geometry-topology/01-general-topology/05-advanced-properties
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 04-quotient-products.html, 06-beta-n.html, 10-preservation.html, 11-operations-commute.html
- Sentence: $\bar{H}$ は well-defined で $\bar{H}\circ(q\times1)=H$。$[0,1]$ は局所コンパクトハウスドルフなので、\ref{top:whitehead-product} から $q\times1$ は商写像で、商写像の普遍性（\ref{top:quotient-universal}）から $\bar{H}$ は連続。
  - `cat:universal-arrow`: NG — Here「普遍性」 refers to the universal property of quotient maps, not the categorical notion of a universal arrow from/to a functor defined in the card.

## 「有界」 in 05-geometry-topology/01-general-topology/05-advanced-properties
- Default: `calc:supremum` → **no candidate fits**
- Pages: 05-countable-compactness.html, 06-beta-n.html, 09-michael-selection.html, 10-preservation.html, 12-implication-map.html
- Sentence: コンパクト性（\ref{top:compact}）を弱めた性質として、可算な開被覆についてだけ有限部分被覆を要求する**可算コンパクト性**、点列が収束部分列をもつことを要求する**点列コンパクト性**、実数値連続関数が有界であることを要求する**擬コンパクト性**がある（\ref{top:countably-compact}）。距離空間ではこれらはすべてコンパクト性と一致する（\ref{top:compact-metric-equivalents}）が、一般の位相空間では異なる。本ページでは、可算コンパクト性の言い換え（\ref{top
  - `calc:supremum`: NG — Here "有界" refers to a real-valued continuous function being bounded, not a subset of an ordered set having upper and lower bounds as defined in the card.
  - `logic:rm-analysis-defs`: NG — Here “有界” refers to a continuous function being bounded, not to a real sequence being bounded as defined in the card.

## 「正則」 in 05-geometry-topology/01-general-topology/05-advanced-properties
- Default: `top:separation-axioms` → **no candidate fits**
- Pages: 03-perfect-maps.html, 08-michael.html, 10-preservation.html, 12-implication-map.html
- Sentence: p-criteria}）。**完全写像**（\ref{top:perfect-map}）は、閉写像でかつ各点の逆像がコンパクトなもので、コンパクトハウスドルフ空間の商写像の典型である。本ページでは、閉写像の逆像による特徴づけ（\ref{top:closed-map-fibers}）から始めて、完全写像がハウスドルフ性・正則性・局所コンパクト性・第二可算性（**重み**）を保つこと（\ref{top:perfect-preserves}）を示し、可分距離空間の完全写像による像が距離化可能であること（\see{top:perfect-image-metrizable}）を導く。特に、コンパクト距離空間を閉な同値関係で割った商はコンパクト距離
  - `top:separation-axioms`: NG — the sentence uses 正則性 as a property preserved by perfect maps, not the separation axiom definition of regular spaces given in the card.
  - `set:regular-cardinal`: NG — Here “正則性” refers to the regularity (T3) separation axiom in topology, not the cofinality-based notion of a regular ordinal.
  - `cx:holomorphic`: NG — Here "正則性" refers to the regularity (T3) separation axiom in topology, not complex differentiability.
  - `ag:regular-function`: NG — Here "正則性" refers to the separation axiom (regularity) in topology, not the notion of a regular function on a quasi-affine variety.
  - `ag:quasi-projective-regular`: NG — Here “正則性” refers to the separation axiom (regularity) of topological spaces, not the regularity of functions on quasi-projective varieties defined in the card.

## 「準同型」 in 05-geometry-topology/01-general-topology/05-advanced-properties
- Default: `grp:homomorphism` → **no candidate fits**
- Pages: 01-stone-duality.html, 11-operations-commute.html
- Sentence: - ブール代数の**準同型**は、$\wedge$, $\vee$, $-$, $\mathbf{0}$, $\mathbf{1}$ を保つ写像。全単射な準同型を**同型**という。
  - `grp:homomorphism`: NG — It defines a Boolean-algebra homomorphism, not a group homomorphism as in the card.
  - `cat:t-algebra`: NG — This is a Boolean algebra homomorphism, not a homomorphism of T-algebras as defined in the card.
  - `ring:homomorphism`: NG — This is a Boolean algebra homomorphism, not a ring homomorphism as defined in the card.
  - `mod:submodule-homomorphism`: NG — This is a Boolean algebra homomorphism, not an \(R\)-module homomorphism as defined in the card.

## 「無限集合」 in 05-geometry-topology/01-general-topology/05-advanced-properties
- Default: `set:finite-set` → **no candidate fits**
- Pages: 05-countable-compactness.html, 07-rationals-characterization.html, 10-preservation.html, 11-operations-commute.html, 12-implication-map.html
- Sentence: - 点列 $(x_{n})$ の**集積点**とは、$x$ のどの近傍 $U$ についても $\{n:x_{n}\in U\}$ が無限集合となる点 $x$ である。部分列の極限は集積点である。
  - `set:finite-set`: NG — Here "無限集合" refers to an infinite set of indices, which matches the card's definition of a set that is not finite, so it is the same notion.

## 「直積」 in 05-geometry-topology/01-general-topology/05-advanced-properties
- Default: `grp:direct-product` → **fits: `set:cartesian-product`**
- Pages: 05-countable-compactness.html, 08-michael.html, 10-preservation.html, 11-operations-commute.html, 12-implication-map.html
- Sentence: - **$T_{1}$**：4 ⇒ 3 で、有限集合が閉であることに使った。$T_{1}$ がないと 4 ⇒ 3 は成り立たない：二点 $\{a,b\}$ の密着空間と $\N$（離散）の直積で、点列 $(n,a)$ は集積点をもたないが、無限集合はどれも集積点をもつ（$(n,a)$ の近傍は $(n,b)$ を含む）。
  - `grp:direct-product`: NG — This "直積" is the product of topological spaces, not the direct product of groups defined in the card.
  - `set:cartesian-product`: OK

## 「直積・直和」 in 05-geometry-topology/01-general-topology/05-advanced-properties
- Default: `mod:direct-sum` → **no candidate fits**
- Pages: 10-preservation.html
- Sentence: 分離公理・コンパクト性・可算公理・連結性・距離化可能性などの性質が、部分空間・直積・直和をとる操作や、商写像・連続写像・開写像・閉写像・完全写像の像で保たれるかを、二つの表にまとめる（\ref{top:preservation-table-constructions}, \ref{top:preservation-table-maps}）。各欄には、保たれるなら証明への参照を、保たれないなら反例への参照を
  - `mod:direct-sum`: NG — This is about topological spaces and operations on them, not modules over a ring as defined in the card.

## 「素イデアル」 in 05-geometry-topology/01-general-topology/05-advanced-properties
- Default: `ring:prime-maximal-def` → **no candidate fits**
- Pages: 01-stone-duality.html
- Sentence: - **選択公理**：Step 4 の超フィルターの存在だけに使った（ブール素イデアル定理と呼ばれる、$\mathrm{AC}$ より真に弱い原理で足りることが知られている）。
  - `ring:prime-maximal-def`: NG — Here "ブール素イデアル" (Boolean prime ideal) refers to a prime ideal in a Boolean algebra, not the ring-theoretic prime ideal defined in the card.

## 「細かい」 in 05-geometry-topology/01-general-topology/05-advanced-properties
- Default: `top:finer-coarser` → **no candidate fits**
- Pages: 07-rationals-characterization.html
- Sentence: という三つの性質で位相的に特徴づけられる（**シェルピンスキーの定理**、\tref{top:sierpinski-q}）。たとえば $\mathbb{Q}\times\mathbb{Q}$ や $\mathbb{Q}$ の中のカントール集合の有理点なども、すべて $\mathbb{Q}$ と同相である。証明は、空間を細かい開かつ閉な集合（**閉開集合**）に入れ子に分割していき（\ref{top:clopen-partitions}）、その分割に沿った辞書式順序で空間を**端点のない可算な稠密線形順序**にし（\ref{top:partition-order}）、その順序位相がもとの位相と一致することを示して、\ref{model:ca
  - `top:finer-coarser`: NG — Here "細かい" describes open-and-closed sets being fine-grained (small), not a finer topology as defined in the card.

## 「線形写像」 in 05-geometry-topology/01-general-topology/05-advanced-properties
- Default: `mod:submodule-homomorphism` → **no candidate fits**
- Pages: 09-michael-selection.html
- Sentence: **似た定理.** \ref{top:tietze}・\ref{top:dugundji}は、\ref{top:paracompact-banach-extension} のように選択定理の特別な場合として見ることができる。関数解析では、バナッハ空間の間の全射有界線形写像が連続な（線形とは限らない）右逆写像をもつこと（バートル–グレイヴスの定理）が、この定理から導かれることが知られている（開写像定理を使う。ここでは扱わない）。
  - `mod:submodule-homomorphism`: NG — This is a bounded linear map between Banach spaces (functional analysis), not an \(R\)-module homomorphism as defined in the card.

## 「閉開集合」 in 05-geometry-topology/01-general-topology/05-advanced-properties
- Default: `top:stone-space` → **no candidate fits**
- Pages: 01-stone-duality.html, 02-cantor-set.html, 05-countable-compactness.html, 07-rationals-characterization.html, 12-implication-map.html
- Sentence: - 位相空間 $X$ の開かつ閉な集合（**閉開集合**）全体を $\mathrm{Clop}(X)$ と書く。これは $\cap$, $\cup$, 補集合で閉じ、$X\neq\varnothing$ ならブール代数である。
  - `top:stone-space`: NG — The term "閉開集合" is a general topological notion (a clopen set), not the Stone space defined in the card.

## 「順序同型」 in 05-geometry-topology/01-general-topology/05-advanced-properties
- Default: `set:order-isomorphism` → **no candidate fits**
- Pages: 07-rationals-characterization.html
- Sentence: ていき（\ref{top:clopen-partitions}）、その分割に沿った辞書式順序で空間を**端点のない可算な稠密線形順序**にし（\ref{top:partition-order}）、その順序位相がもとの位相と一致することを示して、\ref{model:cantor-dlo}で $\mathbb{Q}$ と順序同型にする、という流れで行う。
  - `set:order-isomorphism`: NG — the card defines order isomorphism for arbitrary relations, while the sentence uses it specifically for linear orders, which is a special case and thus acceptable—wait, that would be ok; the real issue is the term is used as "順序同型にする" meaning make order-isomorphic, matching the definition's notion of isomorphism between ordered structures.

## 「順序型」 in 05-geometry-topology/01-general-topology/05-advanced-properties
- Default: `set:order-type` → **no candidate fits**
- Pages: 07-rationals-characterization.html
- Sentence: 1. $\mathcal{P}_{n+1}$ の元は $\mathcal{P}_{n}$ のある元（**親**）に含まれる空でない閉開集合で、各 $A\in\mathcal{P}_{n}$ は $\mathcal{P}_{n+1}$ の自分の**子**（可算個、$3$ 個以上）の和である。子には順序型が有限か $\omega$ の線形順序が与えられている。
  - `set:order-type`: NG — Here "順序型" refers to the order type of a linear order on the children (finite or ω), which is the same notion of order type as defined for well-ordered sets, so it matches the card's meaning.

## 「リンデレーフ」 in 05-geometry-topology/01-general-topology/06-metric-spaces
- Default: `top:second-countable` → **no candidate fits**
- Pages: 01-completeness.html, 04-metrization.html, 09-baire-space-nn.html
- Sentence: **類似の定理.** バナッハの不動点定理は、常微分方程式の解の存在と一意性（ピカール–リンデレーフの定理）や陰関数定理の証明に使われる。コンパクトな距離空間上では、$d(Tx,Ty)<d(x,y)$（$x\neq y$）だけで不動点の存在と一意性が言える（エーデルシュタインの定理）。
  - `top:second-countable`: NG — Here "リンデレーフ" refers to the Picard–Lindelöf theorem (a person's name), not the Lindelöf property of topological spaces defined in the card.

## 「一様距離」 in 05-geometry-topology/01-general-topology/06-metric-spaces
- Default: `top:uniform-topology` → **no candidate fits**
- Pages: 01-completeness.html, 03-compact-metric.html
- Sentence: $S$ を集合、$(Y,e)$ を完備距離空間とし、$B(S,Y)$ を $S$ から $Y$ への有界な写像（像が有界）全体に一様距離
  - `top:uniform-topology`: NG — one short English sentence why

## 「位相」 in 05-geometry-topology/01-general-topology/06-metric-spaces
- Default: `top:topological-space` → **no candidate fits**
- Pages: 01-completeness.html, 02-baire.html, 03-compact-metric.html, 04-metrization.html, 05-complete-metrizability.html, 06-nagata-smirnov.html, 08-dugundji.html, 09-baire-space-nn.html, 10-cech-completeness.html, 11-hyperspaces.html, 12-fractals.html
- Sentence: > 資料：内田伏一『集合と位相』§26。完備化の構成は、コーシー列の同値類による方法ではなく、有界連続関数の空間への埋め込み（クラトフスキー埋め込み）を用いた。文章は本サイトで書き下ろした。
  - `top:topological-space`: NG — This sentence is a bibliographic note about a textbook and does not use "位相" with the meaning of a topology on a set.

## 「可算無限」 in 05-geometry-topology/01-general-topology/06-metric-spaces
- Default: `set:finite-set` → **no candidate fits**
- Pages: 09-baire-space-nn.html
- Sentence: **高い視点から.** $\N^{\N}$ は「無限に分岐する木の無限の枝」全体であり、$2^{\N}$ は「二分木の枝」全体である。どちらの特徴づけも、空間を閉開集合の木（ルジン図式）で表し、枝と点を対応させるという同じ発想に立つ。各節点での分岐の数が有限かつ $2$ 以上ならカントール空間、常に可算無限なら $\N^{\N}$ になる。分岐数を決めるのは局所的なコンパクト性の有無で、比喩で言えば、コンパクトな片は「有限個の部屋に区切れる部屋」、内部をもたないコンパクト集合しかない空間は「どう区切っても無限個の部屋が出てくる部屋」である。この意味で $\N^{\N}$ は「至るところコンパクトでない」零次元ポーランド空
  - `set:finite-set`: NG — Here "可算無限" describes the number of branches at each node (countably infinite branching), not a set whose cardinality equals $\omega$ as defined in the card.

## 「定義域」 in 05-geometry-topology/01-general-topology/06-metric-spaces
- Default: `set:relation` → **fits: `logic:rm-continuous-code`**
- Pages: 08-dugundji.html
- Sentence: - **定義域.** 定義域を正規空間に広げると、$\R$ や $\R^{n}$ 値ならティーツェの定理（\ref{top:tietze}）で延長できるが、線形な拡張作用素（\ref{top:dugundji-linear}）は一般に存在しない。たとえば $\beta\N$ の閉集合 $\beta\N\setminus\N$（\re
  - `set:relation`: NG — This "定義域" refers to the domain of a function/extension problem in topology, not the domain of a relation as defined in the card.
  - `logic:rm-continuous-code`: OK

## 「小さい集合」 in 05-geometry-topology/01-general-topology/06-metric-spaces
- Default: `cat:universe` → **no candidate fits**
- Pages: 02-baire.html
- Sentence: **測度との比較.** 「小さい集合」の二つの概念、第一類（位相的）とルベーグ測度 $0$（測度論的）は一致しない。$\R$ は第一類集合と測度 $0$ の集合の和に分けられる（問題 \ref{top:prob-meager-null}）。
  - `cat:universe`: NG — Here "小さい集合" means a topologically small (meager/first-category) set, not an element of a fixed universe \(\mathcal{U}\) as defined in the card.

## 「微分係数」 in 05-geometry-topology/01-general-topology/06-metric-spaces
- Default: `calc:derivative` → **no candidate fits**
- Pages: 07-nowhere-differentiable.html
- Sentence: 微分係数を $a$ とすると、$\delta>0$ で $0<\lvert y-x\rvert<\delta$ なら $\lvert f(y)-f(x)\rvert\le(\lvert a\rvert+1)\lvert y-x\rvert$。$\lvert y-x\rvert\ge\delta$ なら $\lvert f(y)
  - `calc:derivative`: NG — Here "微分係数" is used as a bound constant $a$ in an inequality, not as the derivative value $f'(a)$ defined by the card.

## 「微分可能」 in 05-geometry-topology/01-general-topology/06-metric-spaces
- Default: `calc:derivative` → **no candidate fits**
- Pages: 02-baire.html, 07-nowhere-differentiable.html
- Sentence: **類似の定理.** 関数解析では、本定理から**一様有界性原理**（バナッハ–シュタインハウスの定理）、**開写像定理**、**閉グラフ定理**が導かれる。また、$C([0,1],\R)$ の中で「どの点でも微分可能でない関数」全体は剰余集合であり、とくに空でない（バナッハ、マズルキェヴィチ、1931 年）。これは、具体的な例（ワイエルシュトラス関数）を作らずに存在を示す典型例である。
  - `calc:derivative`: NG — Here "微分可能" is used in the phrase "どの点でも微分可能でない関数" (a function differentiable at no point), which matches the card's definition of differentiability at a point, so it is the same notion.

## 「普遍性」 in 05-geometry-topology/01-general-topology/06-metric-spaces
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 01-completeness.html, 10-cech-completeness.html
- Sentence:  を通してただ一通りに分解する」と言っており、完備化 $X\mapsto\widehat{X}$ は包含関手の左随伴、すなわち完備距離空間の部分圏は反射部分圏である（\ref{cat:reflective-subcategory}）。ストーン–チェックのコンパクト化（\ref{top:stone-cech}）と同じ形の普遍性である。
  - `cat:universal-arrow`: NG — 「普遍性」は普遍射が持つ一意存在という性質を指す語であり、カードが定義する「普遍射」という対象そのものではない。

## 「有界」 in 05-geometry-topology/01-general-topology/06-metric-spaces
- Default: `calc:supremum` → **fits: `logic:rm-analysis-defs`**
- Pages: 01-completeness.html, 02-baire.html, 03-compact-metric.html, 05-complete-metrizability.html, 07-nowhere-differentiable.html, 08-dugundji.html, 11-hyperspaces.html
- Sentence: > 資料：内田伏一『集合と位相』§26。完備化の構成は、コーシー列の同値類による方法ではなく、有界連続関数の空間への埋め込み（クラトフスキー埋め込み）を用いた。文章は本サイトで書き下ろした。
  - `calc:supremum`: NG — Here "有界連続関数" means bounded continuous functions, a different (though related) use of 有界 than the card's definition of a bounded subset of an ordered set.
  - `logic:rm-analysis-defs`: OK

## 「直積」 in 05-geometry-topology/01-general-topology/06-metric-spaces
- Default: `grp:direct-product` → **fits: `set:cartesian-product`**
- Pages: 02-baire.html, 04-metrization.html, 05-complete-metrizability.html, 09-baire-space-nn.html, 10-cech-completeness.html
- Sentence: **前提を変えると.** ベール空間の開部分空間はベール空間であり、完備距離空間の $G_{\delta}$ 部分空間（完備距離化可能な空間。\ref{top:gdelta-characterization}）もベール空間である。一方、ベール空間の直積はベール空間とは限らないことが知られている（J. C. Oxtoby の 1961 年の論文に始まる研究がある。ここでは扱わない）。
  - `grp:direct-product`: NG — This "直積" refers to the product of Baire spaces (a topological product), not the direct product of groups defined in the card.
  - `set:cartesian-product`: OK

## 「細かい」 in 05-geometry-topology/01-general-topology/06-metric-spaces
- Default: `top:finer-coarser` → **no candidate fits**
- Pages: 03-compact-metric.html
- Sentence: 一般の位相空間では、コンパクト性（有限部分被覆）と点列コンパクト性（収束部分列）は異なる概念である（\ref{top:compact} の後の補足）。距離空間では両者は一致し、さらに「**完備かつ全有界**」とも同値になる（\ref{top:compact-metric-equivalents}）。全有界とは「どんなに細かい解像度でも、有限個の点で全体を近似できる」という性質であり、コンパクト性を「有限の近似ができて（全有界）、穴がない（完備）」と分解して理解できる。応用として、\ref{top:lebesgue-number}と、コンパクト距離空間上の連続写像が一様連続であること（\ref{top:heine-cantor}）を示す。
  - `top:finer-coarser`: NG — Here「細かい」describes the fineness of a resolution/approximation, not the comparative strength of two topologies on the same set.

## 「部分空間」 in 05-geometry-topology/01-general-topology/06-metric-spaces
- Default: `top:subspace` → **no candidate fits**
- Pages: 01-completeness.html, 02-baire.html, 04-metrization.html, 05-complete-metrizability.html, 08-dugundji.html, 09-baire-space-nn.html, 10-cech-completeness.html
- Sentence: 有理数列がその例である。コーシー列がすべて収束する空間を**完備**という（\ref{top:complete-metric}）。完備性は解析学の存在定理（縮小写像の不動点定理 \tref{top:banach-fixed-point}、ベールのカテゴリー定理など）の土台である。また、どの距離空間も、完備な空間の稠密な部分空間として「穴を埋める」ことができ、その埋め方は本質的に一意である（**完備化**、\ref{top:completion}）。
  - `top:subspace`: NG — Here "部分空間" means a subspace of a metric space (a subset with the induced metric), not specifically the topological subspace defined via the relative topology on a subset of a topological space.

## 「閉開集合」 in 05-geometry-topology/01-general-topology/06-metric-spaces
- Default: `top:stone-space` → **no candidate fits**
- Pages: 09-baire-space-nn.html
- Sentence: > 資料：本ページは特定の教科書の記述によらず、標準的な議論（閉開集合の木による構成）に従って組み立てた。各証明は本サイトで書き下ろした。
  - `top:stone-space`: NG — 「閉開集合」はストーン空間の定義ではなく、その定義に現れる構成要素（閉かつ開な集合）を指す用語である。

## 「開写像」 in 05-geometry-topology/01-general-topology/06-metric-spaces
- Default: `top:homeomorphism` → **no candidate fits**
- Pages: 02-baire.html, 04-metrization.html, 09-baire-space-nn.html
- Sentence: **類似の定理.** 関数解析では、本定理から**一様有界性原理**（バナッハ–シュタインハウスの定理）、**開写像定理**、**閉グラフ定理**が導かれる。また、$C([0,1],\R)$ の中で「どの点でも微分可能でない関数」全体は剰余集合であり、とくに空でない（バナッハ、マズルキェヴィチ、1931 年）。これは、具体的な例（ワイエルシュトラス関数）を作らずに存在を示す典型例である。
  - `top:homeomorphism`: NG — Here "開写像定理" is a proper name for a theorem in functional analysis, not the general notion of an open map defined in the card.

## 「関数の集合」 in 05-geometry-topology/01-general-topology/06-metric-spaces
- Default: `set:function-set` → **no candidate fits**
- Pages: 07-nowhere-differentiable.html
- Sentence: ory}を使えば、そのような関数が**存在する**だけでなく、連続関数全体の空間 $C[0,1]$ の中で「ほとんどすべて」（第一類集合の補集合）であることが示せる（**バナッハの定理**、\tref{top:nowhere-differentiable-generic}）。鍵は、ある点でリプシッツ的な増加の評価をもつ関数の集合 $E_{n}$（\ref{top:lipschitz-at-point-sets}）が閉かつ内部をもたないことで、内部をもたないことは、折れ線で近似してから急な鋸歯を加えることで示す。
  - `set:function-set`: NG — Here "関数の集合" is used generically to mean a set of functions (the set $E_{n}$), not the specific cardinal-exponentiation notation ${}^{B}A$ defined in the card.

## 「零次元」 in 05-geometry-topology/01-general-topology/06-metric-spaces
- Default: `top:stone-space` → **no candidate fits**
- Pages: 09-baire-space-nn.html
- Sentence: 念）は、カントール空間 $2^{\N}$（\ref{top:page-cantor-set}）や有理数 $\mathbb{Q}$（\ref{top:page-rationals-characterization}）と並んで、位相的性質だけで特徴づけられる空間である。**アレクサンドロフ–ウリゾーンの定理**は、空でない零次元ポーランド空間で、どのコンパクト集合も内部をもたないものは $\N^{\N}$ と同相であることを言う。系として、無理数全体は $\N^{\N}$ と同相であり、また、同じ「木の構成」から、空でないポーランド空間はすべて $\N^{\N}$ の連続像であることが従う。
  - `top:stone-space`: NG — Here "零次元" (zero-dimensional) is used in the sense of a Polish space with a clopen base (dimension theory), not specifically the compact Hausdorff Stone space defined in the card.

## 「可算」 in 05-geometry-topology/01-general-topology/07-uniform-spaces
- Default: `set:finite-set` → **no candidate fits**
- Pages: 02-pseudometrics.html
- Sentence: mity}）。本ページの主定理は、逆に**すべての一様構造は擬距離の族から作られる**ことである（\ref{top:uniformity-from-pseudometrics}）。その鍵は、近縁の列から擬距離を組み立てる**距離化補題**（\ref{top:unif-metrization-lemma}）で、ここから「可算基をもつハウスドルフ一様構造は距離化可能」（\ref{top:countable-base-metrizable}）と、「一様構造から来る位相はちょうど完全正則な位相」（\ref{top:uniformizable-completely-regular}）が従う。
  - `set:finite-set`: NG — Here "可算基" means a countable base (a set-theoretic countability property of a base), not the definition's notion of a set being countable (|A| ≤ ω).

## 「引き戻し」 in 05-geometry-topology/01-general-topology/07-uniform-spaces
- Default: `cat:product` → **no candidate fits**
- Pages: 03-uniform-completeness.html
- Sentence: {X_{d}},\iota_{d})$ をとる（\ref{top:completion-exists}）。$\pi_{d}\colon X\to\widehat{X_{d}}$, $x\mapsto\iota_{d}([x])$ について、$\widehat{X_{d}}$ の距離一様構造の $\pi_{d}$ による引き戻しは $d$ の一様構造である（$\iota_{d}$ は等長）。
  - `cat:product`: NG — Here "引き戻し" refers to the pullback (inverse image) of a uniform structure along a map, not the categorical pullback/fiber product defined in the card.

## 「普遍性」 in 05-geometry-topology/01-general-topology/07-uniform-spaces
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 03-uniform-completeness.html, 04-dieudonne-completion.html
- Sentence: チコノフ空間 $X$ に、連続関数 $f\colon X\to[0,1]$ 全体による始一様構造（\ref{top:initial-uniformity}）$\mathcal{U}_{\beta}$ を入れる。その完備化 $\widehat{X}$ と埋め込み $\iota$ は、ストーン–チェックのコンパクト化の普遍性（\ref{top:stone-cech}）をもち、したがって $\beta X$ と同相である（$X$ を固定して）。
  - `cat:universal-arrow`: NG — 「普遍性」here refers to the universal property of the Stone–Čech compactification, not the categorical notion of a universal morphism defined in the card.

## 「直積」 in 05-geometry-topology/01-general-topology/07-uniform-spaces
- Default: `grp:direct-product` → **fits: `set:cartesian-product`**
- Pages: 01-uniform-spaces.html, 02-pseudometrics.html, 03-uniform-completeness.html, 04-dieudonne-completion.html
- Sentence: 「一様な近さ」だけを公理化したもので、$X\times X$ の部分集合（**近縁**）の族として与えられる（\ref{top:uniformity}）。本ページでは、一様構造が定める位相（\ref{top:unif-topology}）、一様連続写像（\ref{top:unif-continuous}）、始一様構造と直積（\ref{top:initial-uniformity}）を扱い、一様空間の位相が正則で、ハウスドルフ性が近縁の共通部分で判定できること（\ref{top:unif-separation}）を示す。
  - `grp:direct-product`: NG — Here "直積" refers to the product uniformity on a product of uniform spaces, not the direct product of groups defined in the card.
  - `set:cartesian-product`: OK

## 「距離化可能」 in 05-geometry-topology/01-general-topology/07-uniform-spaces
- Default: `top:metrizable` → **no candidate fits**
- Pages: 02-pseudometrics.html, 04-dieudonne-completion.html
- Sentence: 逆に**すべての一様構造は擬距離の族から作られる**ことである（\ref{top:uniformity-from-pseudometrics}）。その鍵は、近縁の列から擬距離を組み立てる**距離化補題**（\ref{top:unif-metrization-lemma}）で、ここから「可算基をもつハウスドルフ一様構造は距離化可能」（\ref{top:countable-base-metrizable}）と、「一様構造から来る位相はちょうど完全正則な位相」（\ref{top:uniformizable-completely-regular}）が従う。
  - `top:metrizable`: NG — Here "距離化可能" refers to metrizability of a uniform structure (by a metric inducing the uniformity), not the card's notion of a topological space being metrizable via a distance whose metric topology matches the given topology.

## 「集積点」 in 05-geometry-topology/01-general-topology/07-uniform-spaces
- Default: `top:boundary` → **fits: `top:net`**
- Pages: 03-uniform-completeness.html, 04-dieudonne-completion.html
- Sentence: - フィルター、その収束と集積点、像フィルター、コンパクト性のフィルターによる言い換え、超フィルターは \ref{top:filter-convergence}, \ref{top:image-filter}, \ref{top:compact-equivalents}, \ref{top:ultrafilter-cluster} のとおり。距離空間
  - `top:boundary`: NG — Here "集積点" refers to cluster points of filters, a different notion from accumulation points of a subset defined via neighborhoods meeting $A\setminus\{x\}$.
  - `top:net`: OK

## 「チコノフの板」 in 05-geometry-topology/01-general-topology/08-counterexamples
- Default: `top:tychonoff-plank` → **no candidate fits**
- Pages: 03-tychonoff-plank.html
- Sentence: コンパクトハウスドルフ空間は正規である（\ref{top:compact-hausdorff-normal}）が、その部分空間はチコノフ空間（完全正則）にはなっても正規とは限らない。**チコノフの板**（\ref{top:tychonoff-plank}）は、順序数の空間の直積 $[0,\omega_{1}]\times[0,\omega]$ から角の一点を除いた空間で、これが正規でないこと（\ref{top:tychonoff-plank-not-normal}）を示す。準備として、最大元をもつ順序数の空間がコ
  - `top:tychonoff-plank`: NG — The sentence defines the Tychonoff plank as the product with one corner point removed, which is the card's "punctured Tychonoff plank," not the full plank.

## 「上界」 in 05-geometry-topology/01-general-topology/08-counterexamples
- Default: `set:chain-maximal` → **no candidate fits**
- Pages: 04-double-arrow.html
- Sentence: **$s\in S$.** $s=m$ なら明らか。$s>m$ なら、$U$ は $s$ の基本近傍を含むので、$a<s$ で $(a,s]\subseteq U$ となる $a$ がある。$a$ は $S$ の上界でない（$s$ が最小の上界）ので、$x>a$ となる $x\in S$ があり、$[m,s]\subseteq[m,x]\cup(a,s]$ は有限個で覆える。
  - `set:chain-maximal`: NG — Here "上界" (upper bound) is used in the sense of least upper bound / supremum context ("s が最小の上界"), which is a specific case of the card's general upper bound notion, but the sentence treats it as the least upper bound, a distinct notion.

## 「上限」 in 05-geometry-topology/01-general-topology/08-counterexamples
- Default: `calc:supremum` → **no candidate fits**
- Pages: 02-sorgenfrey.html, 03-tychonoff-plank.html, 04-double-arrow.html
- Sentence: **前提を変えると.** 半開区間を $(a,b]$ にした上限位相も同じ性質をもつ。$\R_{\ell}$ は**完全正規**（閉集合がすべて $G_{\delta}$）でもあることが知られている。ゾルゲンフライ平面の正規でないことは、\ref{top:page-niemytzki}と同じくジョーンズの補題による。正規空間とコンパクト空間の直積は正規とは限らないが、パラコンパクト
  - `calc:supremum`: NG — Here "上限位相" (upper limit topology) uses 上限 as part of a compound meaning "upper limit," not the supremum of a set as defined in the card.
  - `set:order-dedekind-complete`: NG — Here "上限" is part of the compound "上限位相" (upper limit topology), not the least-upper-bound notion defined in the card.
  - `logic:rm-analysis-defs`: NG — Here "上限" is part of the compound "上限位相" (upper limit topology), not the supremum of a real sequence as defined in the card.

## 「下限」 in 05-geometry-topology/01-general-topology/08-counterexamples
- Default: `calc:supremum` → **no candidate fits**
- Pages: 02-sorgenfrey.html, 04-double-arrow.html
- Sentence: **ゾルゲンフライ直線** $\R_{\ell}$（下限位相、\ref{top:page-bases-countability} の例）は、実数に半開区間 $[a,b)$ を開基とする位相を入れた空間である。$\R_{\ell}$ はリンデレーフで正規（\ref{top:sorgenfrey-normal}）だが、その二乗の**ゾルゲンフライ平面** $\R_{\ell}\
  - `calc:supremum`: NG — Here "下限" refers to the lower-limit (half-open interval) topology, not the infimum of a set as defined in the card.

## 「境界点」 in 05-geometry-topology/01-general-topology/08-counterexamples
- Default: `top:boundary` → **no candidate fits**
- Pages: 01-niemytzki-plane.html
- Sentence: - *他の境界点 $p'=(x',0)$ で.* $\overline{D_{r}(p)}$ と $p'$ のユークリッド距離 $d$ は正（閉円板が $x$ 軸と交わるのは $p$ だけ）。$b<d/2$ の接円板 $D_{b}(p')$ はユークリッドの円板 $B(p',d)$ に含まれるので、$\{p'\}\cup D_{b}(
  - `top:boundary`: NG — the card defines 境界 (boundary) as a set, not 境界点 (boundary point), which is a different notion.

## 「完備」 in 05-geometry-topology/01-general-topology/08-counterexamples
- Default: `top:complete-metric` → **no candidate fits**
- Pages: 04-double-arrow.html
- Sentence: より弱い可分性と第一可算性を両方もっても、コンパクトハウスドルフ空間は距離化可能とは限らない。その典型例が**アレクサンドロフの二重矢印空間**（\ref{top:double-arrow}）で、区間 $[0,1]$ の各点を「上の矢印」と「下の矢印」の二点に分け、辞書式順序の順序位相を入れたものである。本ページでは、完備な全順序の順序位相はコンパクトであること（\ref{top:complete-order-compact}）を示し、二重矢印空間がコンパクトハウスドルフ・可分・第一可算でありながら、ゾルゲンフライ直線を部分空間に含むために距離化可能でないこと（\ref{top:double-arrow-properties}）を示す。
  - `top:complete-metric`: NG — Here "完備" refers to order-completeness (Dedekind completeness) of a linear order, not metric completeness of a metric space as defined in the card.
  - `set:complete-boolean-algebra`: NG — Here "完備" refers to order-completeness of a linear order (every subset has a supremum), not completeness of a Boolean algebra.
  - `cat:limit`: NG — Here "完備" means order-complete (every subset has a supremum/infimum), not the category-theoretic completeness of having all limits.
  - `ring:completion`: NG — This "完備" means order-complete (Dedekind completeness) in order topology, not the \(I\)-adic completion of a module.
  - `top:cauchy-filter`: NG — Here "完備" refers to order-completeness (Dedekind completeness) of a linear order, not completeness of a uniform space as defined in the card.
  - `ag:proper`: NG — Here "完備" refers to order-completeness of a linear order, not the scheme-theoretic properness defined in the card.

## 「最小元」 in 05-geometry-topology/01-general-topology/08-counterexamples
- Default: `set:well-order` → **no candidate fits**
- Pages: 04-double-arrow.html
- Sentence: 最小元 $m$ と最大元 $M$ をもつ完備な全順序集合 $L$ は、順序位相でコンパクトである。
  - `set:well-order`: NG — It refers to the least element of the whole ordered set \(L\), not the \(R\)-least element of a subset \(X\subseteq A\) as defined in the card.

## 「直積」 in 05-geometry-topology/01-general-topology/08-counterexamples
- Default: `grp:direct-product` → **fits: `set:cartesian-product`**
- Pages: 02-sorgenfrey.html, 03-tychonoff-plank.html
- Sentence: \ell}$ はリンデレーフで正規（\ref{top:sorgenfrey-normal}）だが、その二乗の**ゾルゲンフライ平面** $\R_{\ell}\times\R_{\ell}$ はリンデレーフでも正規でもない（\ref{top:sorgenfrey-plane}）。したがって、正規性もリンデレーフ性も有限の直積で保たれない。ほかにも、$\R_{\ell}$ のコンパクト集合はすべて可算であること（\ref{top:sorgenfrey-compact}）など、通常の実数直線との違いを示す。
  - `grp:direct-product`: NG — Here "直積" refers to the product of topological spaces, not the direct product of groups defined in the card.
  - `set:cartesian-product`: OK

## 「閉開集合」 in 05-geometry-topology/01-general-topology/08-counterexamples
- Default: `top:stone-space` → **no candidate fits**
- Pages: 02-sorgenfrey.html
- Sentence: $\R_{\ell}$ の各 $[a,b)$ は閉開集合である。したがって $\R_{\ell}$ は閉開集合の基をもち、$T_{1}$ かつ正則で、完全不連結である。
  - `top:stone-space`: NG — 「閉開集合」はストーン空間の定義ではなく、その性質を述べるために使われている用語であり、カードが定義する「ストーン空間」そのものを指していない。

## 「下限」 in 05-geometry-topology/01-general-topology/09-topological-groups
- Default: `calc:supremum` → **no candidate fits**
- Pages: 01-topological-groups.html, 02-group-uniformities.html
- Sentence: **前提を変えると.** 乗法の連続性だけを要求し逆元の連続性を外したもの（半位相群・準位相群）では、ここでの議論の多くが成り立たない。たとえば $\mathbb{R}$ に下限位相（ゾルゲンフライ直線）を入れたものは加法が連続だが逆元が連続でない。局所コンパクトなハウスドルフ位相群には、平行移動で不変な測度（ハール測度）がただ一つ（定数倍を除いて）存在することが知られている（ここでは扱わない）。
  - `calc:supremum`: NG — Here "下限位相" (lower limit topology) is a topological term, not the greatest lower bound (infimum) defined in the card.

## 「可算」 in 05-geometry-topology/01-general-topology/09-topological-groups
- Default: `set:finite-set` → **no candidate fits**
- Pages: 02-group-uniformities.html
- Sentence: ハウスドルフな位相群 $G$ が $e$ で可算な近傍基をもつなら、$G$ の位相を定める距離 $d$ で、**左不変**（すべての $g,x,y$ で $d(gx,gy)=d(x,y)$）なものがある。
  - `set:finite-set`: NG — Here "可算" modifies "近傍基" (a countable neighborhood base), meaning countably many neighborhoods, not that the set itself is countable in the cardinal sense defined by the card.

## 「普遍性」 in 05-geometry-topology/01-general-topology/09-topological-groups
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 01-topological-groups.html
- Sentence: $\varphi\colon\mathbb{R}\to S^{1}$, $t\mapsto e^{2\pi it}$ は連続な全射準同型で核は $\mathbb{Z}$。誘導される $\bar{\varphi}\colon\mathbb{R}/\mathbb{Z}\to S^{1}$ は連続な全単射準同型（商写像の普遍性）。$\mathbb{R}/\mathbb{Z}$ は $[0,1]$ の連続像なのでコンパクト（$\pi[[0,1]]=\mathbb{R}/\mathbb{Z}$）、$S^{1}$ はハウスドルフなので、$\bar{\varphi}$ は同相写像（\ref{top:compact-to-hausdorff}）。
  - `cat:universal-arrow`: NG — Here「普遍性」 refers to the universal property of the quotient map (a coequalizer/quotient universal property), not to a universal arrow from/to a functor as defined in the card.

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
  - `top:separation-axioms`: NG — Here "正規" means normal subgroup (the subgroup is mapped to itself under conjugation), not the normal/separation axiom for topological spaces.
  - `set:normal-function`: NG — Here "正規" refers to a normal subgroup in group theory, not a normal (strictly increasing and continuous) class function on the ordinals.
  - `lin:adjoint`: NG — Here 正規 means "normal" as in a normal subgroup/topological group, not a normal operator on an inner product space.
  - `fld:normal`: NG — Here "正規" refers to a normal subgroup (or normal topological group), not a normal field extension as defined in the card.

## 「部分空間」 in 05-geometry-topology/01-general-topology/09-topological-groups
- Default: `top:subspace` → **no candidate fits**
- Pages: 01-topological-groups.html
- Sentence: 2. $GL_{n}(\mathbb{R})\subseteq\mathbb{R}^{n^{2}}$（部分空間）：積の成分は多項式、逆行列の成分は余因子を行列式で割った有理式（分母は $GL_{n}$ 上で $0$ でない）なので連続。
  - `top:subspace`: NG — Here "部分空間" means a subset/subspace of $\mathbb{R}^{n^{2}}$ in the topological sense, which matches the card's definition of a topological subspace.

## 「1 対 1」 in 05-geometry-topology/02-algebraic-topology/01-homotopy
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 03-van-kampen.html
- Sentence: 。$S^{1}$ の閉道 $\varphi$ と $I$ の閉道 $\varphi\circ p\restriction I$（$p(s)=e^{2\pi is}$）を同一視する（$p\restriction I$ はコンパクトからハウスドルフへの連続全射なので商写像で、$I$ の閉道は $S^{1}$ からの写像と 1 対 1 に対応する）。
  - `set:injection-surjection`: NG — Here "1 対 1 に対応する" means a one-to-one correspondence (bijection between sets of maps), not the definition of an injective function.

## 「CW 対」 in 05-geometry-topology/02-algebraic-topology/01-homotopy
- Default: `at:subcomplex` → **no candidate fits**
- Pages: 04-homotopy-groups.html, 06-hurewicz-whitehead.html
- Sentence: artial I^{k-1}\times\{0\}$。$E\colon\partial I^{k}\times I\to\partial I^{k}$ を、$J^{k-1}$ の上では $D$、底面の上では、$(x,0)\mapsto(x,0)$ と $\partial I^{k-1}$ の上の $D_{t}$ から CW 対 $(I^{k-1},\partial I^{k-1})$ のホモトピー拡張性質（\ref{at:cw-hep}）で得られるホモトピー（値は $\partial I^{k}$ の中にとれる：$Y=\partial I^{k}$ として適用）と定める。両者は $\partial I^{k-1}\times\{0\}\ti
  - `at:subcomplex`: NG — The sentence uses "CW 対 $(I^{k-1},\partial I^{k-1})$" as a pair satisfying the homotopy extension property, which matches the card's definition of a CW pair (a CW complex with a subcomplex), so it is the same notion—wait, that means it should be ok.

## 「中間体」 in 05-geometry-topology/02-algebraic-topology/01-homotopy
- Default: `fld:extension` → **no candidate fits**
- Pages: 02-covering-spaces.html
- Sentence: | 中間体 $K$ | 中間被覆 $\tilde B\to E\to B$ |
  - `fld:extension`: NG — Here "中間体" refers to an intermediate covering/space in topology, not a field intermediate field as defined in the card.

## 「向き付け」 in 05-geometry-topology/02-algebraic-topology/01-homotopy
- Default: `lin:orientation` → **no candidate fits**
- Pages: 03-van-kampen.html, 06-hurewicz-whitehead.html
- Sentence: 4. **種数 $h$ の向き付け不可能な閉曲面** $N_{h}$：$h$ 個の円周のブーケに語 $a_{1}^{2}\cdots a_{h}^{2}$ で貼ったもの。
  - `lin:orientation`: NG — Here "向き付け不可能" means non-orientable (a property of a surface), not the act of choosing an orientation as defined in the card.

## 「多重線形」 in 05-geometry-topology/02-algebraic-topology/01-homotopy
- Default: `lin:alternating-form` → **no candidate fits**
- Pages: 04-homotopy-groups.html
- Sentence: > 資料：標準的な内容（Massey『Algebraic Topology: An Introduction』、小松・中岡・菅原『位相幾何学 I』のホモトピー群の章など）。$\pi_{k}(S^{n})=0$ の証明は、単体近似の代わりに区分的な多重線形近似を使う形で自分で書き下ろした。
  - `lin:alternating-form`: NG — Here "多重線形近似" refers to piecewise multilinear approximation of maps, not the algebraic definition of a multilinear map on a module.

## 「定義域」 in 05-geometry-topology/02-algebraic-topology/01-homotopy
- Default: `set:relation` → **no candidate fits**
- Pages: 01-fundamental-group.html
- Sentence: - **定義域と値域が $D^{2}$**：Step 2 の判別式（$|x|\le1$）と Step 3（$|f(x)|\le1$）に使った。$D^{2}$ と同相な空間（閉三角形など）でも成り立つ（同相で移す）。開円板では偽：$x\mapsto\frac{x+e_{1}}{2}$ は開円板 $\{|x|<1\}$ を自分自身に移す
  - `set:relation`: NG — Here 定義域 refers to the domain of a function (the set of inputs), not the domain of a relation as defined in the card.
  - `logic:rm-continuous-code`: NG — Here "定義域" refers to the domain of a map on a disk (a set), not the specific real-function domain notion defined in the card.

## 「小区間オペラッド」 in 05-geometry-topology/02-algebraic-topology/01-homotopy
- Default: `cat:little-intervals-operad` → **no candidate fits**
- Pages: 01-fundamental-group.html
- Sentence: 同じ基本群は、ループ空間の弧状連結成分の集合 $\pi_{0}(\Omega X)$ として小区間オペラッドの作用からも得られる（\ref{cat:fundamental-group-loops}。$\Omega X$ の点が閉道、$\Omega X$ の道が閉道のホモトピーに対応するので、同じ集合と同じ積である）。この見方では、結合律が「ホモトピーを除いて」しか成り立たないこと（\ref{at:path-groupoid.
  - `cat:little-intervals-operad`: NG — 「小区間オペラッド」は小区間の族に合成・対称群作用を備えたオペラッド構造を指す語であり、文はその作用を用いて基本群を得る文脈で使っているが、カードは「小区間」とそのオペラッド $\mathcal{C}_{1}$ の定義であって、用語「小区間オペラッド」自体の定義を与えていない。

## 「引き戻し」 in 05-geometry-topology/02-algebraic-topology/01-homotopy
- Default: `cat:product` → **no candidate fits**
- Pages: 01-fundamental-group.html
- Sentence: いときは、$\pi_{1}(X)$ は $\pi_{1}(U)$ と $\pi_{1}(V)$ の $\pi_{1}(U\cap V)$ 上の融合積になる（\ref[ファン・カンペンの定理]{at:page-van-kampen}）。この命題はその特別な場合で、証明の Step 2・3（ルベーグ数による分割と、基点への引き戻し）はファン・カンペンの定理の「生成」の部分と同じである。
  - `cat:product`: NG — Here "引き戻し" refers to pulling back a path/loop to a basepoint (a topological operation), not the categorical fiber product defined in the card.

## 「普遍性」 in 05-geometry-topology/02-algebraic-topology/01-homotopy
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 01-fundamental-group.html, 03-van-kampen.html, 06-hurewicz-whitehead.html
- Sentence: 射影 $p_{X},p_{Y}$ の誘導準同型を並べた $\Phi\defeq(p_{X*},p_{Y*})$ が同型であることを示す。**全射**：$X$ の閉道 $\alpha$ と $Y$ の閉道 $\beta$ に対し $\gamma(s)\defeq(\alpha(s),\beta(s))$ は直積位相の普遍性で連続な閉道で、$\Phi[\gamma]=([\alpha],[\beta])$。**単射**：$\Phi[\gamma]=1$ なら $p_{X}\circ\gamma\simeq c$ のホモトピー $F$ と $p_{Y}\circ\gamma\simeq c$ のホモトピー $G$ があり、$(F,G)$ は
  - `cat:universal-arrow`: NG — 「普遍性」はここでは直積位相の普遍性（写像の一意存在）を指し、カードの普遍射の定義とは異なる。

## 「有限生成」 in 05-geometry-topology/02-algebraic-topology/01-homotopy
- Default: `mod:generated-submodule` → **no candidate fits**
- Pages: 04-homotopy-groups.html
- Sentence: 単連結な有限単体複体の高次ホモトピー群 $\pi_{n}$ は有限生成アーベル群で、計算可能である（ブラウンの定理、1957 として知られている）。ただし計算量は一般に非常に大きい。基本群が自明でないと、$\pi_{1}$ の自明性すら決定不能（\ref{at:page-van-kampen} の計算の観点）なので、事情は大きく異なる。球面のホモトピー群 $\pi_{k}(S^{n})$
  - `mod:generated-submodule`: NG — It refers to finitely generated abelian groups (a special case of finitely generated modules over $\mathbb{Z}$), which matches the card's notion of a module having a finite generating set.
  - `grp:generated-subgroup`: NG — Here "有限生成" describes abelian groups (finitely generated abelian groups), not groups generated by a finite set in the sense of the group-theory definition card, though the underlying notion is analogous.
  - `ring:generated-ideal-def`: NG — Here "有限生成" modifies an abelian group (finitely generated group), not an ideal in a commutative ring as defined in the card.

## 「標準近傍」 in 05-geometry-topology/02-algebraic-topology/01-homotopy
- Default: `at:covering` → **no candidate fits**
- Pages: 02-covering-spaces.html
- Sentence: > 資料：被覆空間の理論は標準的な内容で、Massey『Algebraic Topology: An Introduction』第 V 章などにある。証明は自分で書き下ろした。訳語は小松・中岡・菅原『位相幾何学 I』（被覆・標準近傍・被覆変換群・普遍被覆・正則被覆・弱局所単連結）。
  - `at:covering`: NG — This is a bibliography note listing the Japanese translation of the term, not a use of the mathematical notion itself.

## 「短完全列」 in 05-geometry-topology/02-algebraic-topology/01-homotopy
- Default: `ha:exact-sequence` → **no candidate fits**
- Pages: 05-fibrations.html
- Sentence: **高い視点.** ファイブレーションは「ホモトピーの意味での束」で、その長完全列はホモトピー論における短完全列の役割を果たす。道の空間のファイブレーション $\Omega B\to PB\to B$（$PB$ は基点から出る道の空間で可縮）からは $\pi_{n}(\Omega B)\cong\pi_{n+1}(B)$ が従う（知られている：$\Omega B$ のホモトピー群が 1 次ずれて $B$ のホモトピー群になる。\
  - `ha:exact-sequence`: NG — It uses "short exact sequence" loosely/analogically for a long exact sequence's role in homotopy theory, not the card's definition of a short exact sequence of objects.
  - `mod:exact-sequence`: NG — Here "短完全列" is used metaphorically for a long exact sequence in homotopy theory, not the algebraic short exact sequence \(0\to L\to M\to N\to 0\) defined in the card.

## 「細かい」 in 05-geometry-topology/02-algebraic-topology/01-homotopy
- Default: `top:finer-coarser` → **no candidate fits**
- Pages: 04-homotopy-groups.html
- Sentence: **高い視点.** ホモトピー群は「球面という探針で空間を探る」不変量で、ホモロジーより細かい（$S^{2}$ のホモロジーは次数 $2$ までしかないが、$\pi_{3}(S^{2})\cong\mathbb{Z}$、$\pi_{4}(S^{2})\cong\mathbb{Z}/2$ など無限に続く。知られている）。比喩で言えば、ホモロジーは「穴の数を数える会計」で、ホモトピー群は「穴を通してどれだけ複雑に巻
  - `top:finer-coarser`: NG — Here "細かい" means finer as an invariant (distinguishing more), not the topology comparison defined in the card.

## 「自己同型」 in 05-geometry-topology/02-algebraic-topology/01-homotopy
- Default: `grp:homomorphism` → **no candidate fits**
- Pages: 02-covering-spaces.html
- Sentence: ファン・カンペンの定理]{at:page-van-kampen}）で、$a\mapsto(1\,2)$, $b\mapsto(1\,3)$ で定まる $\{1,2,3\}$ への推移的作用の安定化群 $H$ は指数 3、$N(H)/H$ は $\{1,2,3\}$ の $\mathfrak{S}_{3}$ 集合としての自己同型群で自明。対応する 3 葉の被覆の被覆変換群は自明である。
  - `grp:homomorphism`: NG — Here "自己同型群" refers to the automorphism group of a set with a group action (a permutation group), not the automorphism group of a group as defined in the card.
  - `ring:homomorphism`: NG — Here "自己同型" means an automorphism of a set with a group action (an $\mathfrak{S}_{3}$-set), not an automorphism of a ring as defined in the card.

## 「被覆度」 in 05-geometry-topology/02-algebraic-topology/01-homotopy
- Default: `at:covering` → **no candidate fits**
- Pages: 02-covering-spaces.html
- Sentence: 3. $E$ が弧状連結なら作用は推移的で、$Hg\mapsto e_{0}\cdot g$ は右剰余類の集合 $H\backslash\pi_{1}(B,b_{0})$ から $F$ への全単射。とくに葉の数（被覆度）$|F|$ は指数 $[\pi_{1}(B,b_{0}):H]$ に等しい。
  - `at:covering`: NG — 「被覆度」は被覆の葉の数を指す別の概念であり、カードが定義する被覆写像そのものではない。

## 「距離」 in 05-geometry-topology/02-algebraic-topology/01-homotopy
- Default: `top:metric-topology` → **no candidate fits**
- Pages: 04-homotopy-groups.html
- Sentence: **Step 4（基点の取り替え）.** $f\colon(I^{n},\partial I^{n})\to(X,x_{1})$ について、$\gamma f$ を「$I^{n}$ の中心に縮めた立方体（一辺 $\frac12$）で $f$、その外側の殻では、中心からの放射方向の距離に応じて $\gamma$ を走る（外側の境界で $x_{0}$、内側の境界で $x_{1}$）」写像とする。$\gamma$ と $f$ のホモトピーを同じ式に入れればホモトピーになり、$(\gamma\eta)f\simeq\gamma(\eta f)$、$c_{x_{0}}f\simeq f$、$\gamma(f
  - `top:metric-topology`: NG — Here "距離" refers to the radial distance from the center in the cube, not a metric function on a set as defined in the card.

## 「重心」 in 05-geometry-topology/02-algebraic-topology/01-homotopy
- Default: `at:barycentric-subdivision` → **no candidate fits**
- Pages: 06-hurewicz-whitehead.html
- Sentence: **Step 2（境界全体は $0$）.** $\Psi\colon(I^{n},\partial I^{n})\to(\partial\Delta^{n+1},v_{0})$ を、同相 $\Sigma^{n}\cong\partial\Delta^{n+1}$（$\partial\Delta^{n+1}$ は重心からの放射で $S^{n}$ と同相）で基点を頂点 $v_{0}$ に写すものから作る。$H(s,t)\defeq\tau((1-t)\Psi(s)+tv_{0})$ は、$\Delta^{n+1}$ の凸性から定義でき、$s\in\partial I^{n}$ では $\tau(v_{0})=x_{0}$ なので r
  - `at:barycentric-subdivision`: NG — Here "重心" refers to the barycenter of the simplex \(\Delta^{n+1}\) used for radial projection, which matches the card's definition of the barycenter \(b_{\lambda}=\frac{1}{n+1}\sum_i w_i\).

## 「閉包」 in 05-geometry-topology/02-algebraic-topology/01-homotopy
- Default: `top:interior-closure` → **no candidate fits**
- Pages: 02-covering-spaces.html, 03-van-kampen.html
- Sentence: | 分離閉包 $k^{\mathrm{sep}}$ | 普遍被覆 $\tilde B$ |
  - `top:interior-closure`: NG — Here "閉包" is part of "分離閉包" (separable closure), a field-theoretic notion, not the topological closure of a subset defined in the card.
  - `logic:ltl-size`: NG — Here "閉包" refers to the separable closure of a field, not the closure CL(A) of a logical formula defined in the card.
  - `logic:ctl-closure`: NG — Here "閉包" refers to the separable closure of a field, not the CTL closure set CL(A) defined in the card.
  - `set:pred-closure`: NG — Here "閉包" is part of "分離閉包" (separable closure), a field-theoretic notion, not the set-theoretic closure cl(A,x,R) defined in the card.

## 「開被覆」 in 05-geometry-topology/02-algebraic-topology/01-homotopy
- Default: `top:compact` → **no candidate fits**
- Pages: 01-fundamental-group.html, 02-covering-spaces.html, 03-van-kampen.html, 05-fibrations.html
- Sentence: **Step 2（分割）.** $x_{0}$ を基点とする閉道 $\gamma$ をとる。$\{\gamma^{-1}(U),\gamma^{-1}(V)\}$ はコンパクト距離空間 $I$ の開被覆なので、ルベーグ数 $\delta$（\tref{top:lebesgue-number}）がある。$1/N<\delta$ とし、$[\frac{k-1}{N},\frac{k}{N}]$ ごとに $\gamma$ の像を含む $L_{k}\in\{U,V\}$ を選ぶ（$U$ に入れば $U$、そうでなければ $V
  - `top:compact`: NG — 「開被覆」 is the covering family itself, whereas the card defines compactness in terms of open coverings, not the term "open cover."

## 「関係式」 in 05-geometry-topology/02-algebraic-topology/01-homotopy
- Default: `grp:presentation` → **no candidate fits**
- Pages: 03-van-kampen.html
- Sentence: $X$ の閉道は、$U$ の中の閉道と $V$ の中の閉道をつないだものに変形できる（全射）。そのような分解の仕方の違いは、「同じ集合の中の閉道をまとめる」と「$U\cap V$ の中の閉道を $U$ のものと見るか $V$ のものと見るか」の 2 種類の操作だけで説明できる（単射）。前者が自由積の積、後者が融合の関係式である。
  - `grp:presentation`: NG — Here "関係式" refers to a defining relation in an amalgamated product (identifying elements), not the presentation relation $w=e$ defined in the card.

## 「ネット」 in 05-geometry-topology/02-algebraic-topology/02-homology
- Default: `top:net` → **no candidate fits**
- Pages: 02-singular.html, 13-kunneth.html
- Sentence: 割が、$n$ について両立するように（$\partial$ と可換に）選べる」ことで、これは鎖複体の圏での $\Delta^{n}\times I$ の「アイレンバーグ–ジルバーの写像」の最初の例である（\ref[アイレンバーグ–スティーンロッドの公理と一意性]{at:page-homology-axioms} のキュネットの定理で再び現れる）。比喩で言えば、ホモトピーは空間の中で写像を動かす「時間」で、プリズム作用素はその時間方向に単体を引き伸ばしてできる角柱であり、ホモロジーではこの角柱が「始めと終わりの差」を境界として吸収してしまう。
  - `top:net`: NG — This sentence does not use the term "ネット" at all; it discusses chain complexes and prism operators, so the linked definition of a net in topology is irrelevant.

## 「ノルム」 in 05-geometry-topology/02-algebraic-topology/02-homology
- Default: `lin:inner-product` → **fits: `calc:norm`**
- Pages: 05-degree.html
- Sentence: 1：$H(x,t)\defeq\frac{(1-t)f(x)-tx}{|(1-t)f(x)-tx|}$。分母が $0$ なら $(1-t)f(x)=tx$ で、ノルムをとると $1-t=t$、すなわち $t=\frac12$ で $f(x)=x$ となり仮定に反する。$H$ は $f$ から $a$ へのホモトピー。2：$\frac{(1-t)f(x)+tx}{|\cdots|}$ で同様（分母が $0$ なら $f(x)=-x$）。最後：$n$ が偶数なら $(-1)^{n+1}
  - `lin:inner-product`: NG — the card defines the inner product and only introduces the norm as a derived notation, not as the defined term itself.
  - `comp:pi11-norm`: NG — Here "ノルム" means the norm (length) of a vector, not a function from a set of naturals to ordinals as in the definition card.
  - `calc:norm`: OK

## 「ファイバー」 in 05-geometry-topology/02-algebraic-topology/02-homology
- Default: `at:covering` → **fits: `at:serre-fibration`**
- Pages: 07-cw-topology.html
- Sentence: 関数 $(\phi^{n-1}_{s},(\chi^{\alpha}_{s})_{\alpha})$ は連続で、$\partial D_{\alpha}$ の上で $\chi^{\alpha}_{s}=\psi_{s}=\phi^{n-1}_{s}\circ\varphi_{\alpha}$ なので $q_{n}$ のファイバーの上で一定。商写像の普遍性から $\phi^{n}_{s}$ は連続。(i)・(ii)・(iv) は Step 2 (e) から成り立つ。
  - `at:covering`: NG — Here "fiber" means a level set of the map $q_{n}$, not the preimage $p^{-1}(b)$ of a covering map as defined in the card.
  - `cat:discrete-fibration`: NG — Here "fiber" means a preimage of a point under the map $q_{n}$, not the fiber $p^{-1}(c)$ of a discrete fibration as defined in the card.
  - `at:serre-fibration`: OK

## 「ホモトピー」 in 05-geometry-topology/02-algebraic-topology/02-homology
- Default: `at:homotopy` → **no candidate fits**
- Pages: 01-simplicial.html, 02-singular.html, 03-excision.html, 04-jordan-brouwer.html, 05-degree.html, 06-cellular.html, 07-cw-topology.html, 08-simplicial-singular.html, 09-approximation.html, 10-sphere-maps.html, 11-axioms.html, 12-uniqueness-infinite.html, 13-kunneth.html, 14-manifold-complexes.html
- Sentence: サイクル・ホモロジーは \ref{ha:chain-complex}, \ref{ha:homology}（アーベル群の圏で使う：$Z_{n}=\ker\partial_{n}$, $B_{n}=\operatorname{im}\partial_{n+1}$, $H_{n}=Z_{n}/B_{n}$）。鎖ホモトピーとホモトピー不変性は \ref{ha:chain-homotopy}, \ref{ha:homotopy-invariance}。
  - `at:homotopy`: NG — This "ホモトピー" refers to chain homotopy between chain maps in homological algebra, not a homotopy between continuous maps of topological spaces as defined in the card.
  - `logic:homotopy-funext`: NG — This "ホモトピー" refers to chain homotopy in homological algebra, not the type-theoretic homotopy defined as a pointwise identity type between dependent functions.

## 「ホモトープ」 in 05-geometry-topology/02-algebraic-topology/02-homology
- Default: `at:homotopy` → **no candidate fits**
- Pages: 01-simplicial.html, 02-singular.html, 05-degree.html, 06-cellular.html, 08-simplicial-singular.html, 09-approximation.html, 10-sphere-maps.html, 11-axioms.html, 12-uniqueness-infinite.html
- Sentence: **Step 5.** Step 2〜4 から、被約鎖複体 $\tilde C^{\mathrm{or}}(K)$ 上で $\partial h+h\partial=1$（次数 $-1$ では $\varepsilon h_{-1}=1$）。恒等写像が $0$ と鎖ホモトープなので $\tilde H_{n}(K)=0$（\ref{ha:homotopy-invariance}）。
  - `at:homotopy`: NG — Here "鎖ホモトープ" (chain homotopic) refers to a homotopy between chain maps, not a homotopy between continuous maps as defined in the card.

## 「位数」 in 05-geometry-topology/02-algebraic-topology/02-homology
- Default: `grp:abelian-group` → **no candidate fits**
- Pages: 11-axioms.html, 14-manifold-complexes.html
- Sentence: 有限 CW 複体 $X$ について、$H_{n}(X;\mathbb{Q})=0$ がすべての $n\ge1$ で成り立ち、ある素数 $p$ で $H_{n}(X;\mathbb{F}_{p})=0$（すべての $n\ge1$）なら、$H_{n}(X)$（$n\ge1$）は $p$ と互いに素な位数の有限群であることを示せ。
  - `grp:abelian-group`: NG — Here "位数" means the order (cardinality) of a finite group, which matches the card's definition of 位数 as |G|.
  - `grp:element-order`: NG — Here "位数" means the order (cardinality) of a finite group $H_{n}(X)$, not the order of an element in a group as defined in the card.
  - `cx:isolated-singularity`: NG — Here "位数" means the order (cardinality) of a finite group, not the order of a pole as defined in the card.
  - `cx:elliptic-function`: NG — Here "位数" means the order (cardinality) of a finite group, not the number of poles of an elliptic function.

## 「可算」 in 05-geometry-topology/02-algebraic-topology/02-homology
- Default: `set:finite-set` → **no candidate fits**
- Pages: 03-excision.html, 07-cw-topology.html, 11-axioms.html
- Sentence: - **$V$ への変位レトラクト**：Step 1 で使った。外すと偽：$X=[0,1]$, $A=\{0\}\cup\{1/k:k\ge1\}$ では $X/A$ は無限個の円周のつながったもの（ハワイの耳飾りと同相であることが知られている）で、$H_{1}(X,A)$ は可算階数の自由アーベル群だが $H_{1}(X/A)$ は非可算であることが知られている（本サイト未収録）。
  - `set:finite-set`: NG — Here 可算 modifies the rank of a free abelian group (countably infinite rank), not a set being countable in the card's sense.

## 「同じ向き」 in 05-geometry-topology/02-algebraic-topology/02-homology
- Default: `lin:orientation` → **no candidate fits**
- Pages: 01-simplicial.html
- Sentence: 辺の面はすべて $v$ とする。正方形 $[0,1]^{2}$ を対角線で 2 つの三角形に分け、対辺を同じ向きに貼り合わせたものの記録である（$a$ は下辺＝上辺、$b$ は右辺＝左辺、$c$ は対角線）。
  - `lin:orientation`: NG — Here "同じ向き" refers to the orientation of edges being glued together in a cell complex, not to ordered bases of a vector space having a positive-determinant change-of-basis matrix.

## 「境界点」 in 05-geometry-topology/02-algebraic-topology/02-homology
- Default: `top:boundary` → **no candidate fits**
- Pages: 04-jordan-brouwer.html, 14-manifold-complexes.html
- Sentence: **一般化.** 領域不変性から、境界付き多様体の境界点と内点が位相的に区別されること（「境界の不変性」）が従う（多様体論の系列で扱う予定）。補集合のホモロジーの計算は、アレクサンダー双対性 $\tilde H_{i}(S^{n}\setminus K)\cong\check H^{n-i-1}(K)$（$K$ はコンパクトで局所可縮とは限らない。右辺はチェックコホモロジー
  - `top:boundary`: NG — 「境界点」は多様体の境界の点（局所的に半空間に同相）を指し、カードの位相的境界 $\partial A$ の点とは異なる概念である。

## 「定義域」 in 05-geometry-topology/02-algebraic-topology/02-homology
- Default: `set:relation` → **no candidate fits**
- Pages: 06-cellular.html, 08-simplicial-singular.html, 09-approximation.html, 10-sphere-maps.html
- Sentence: $q\colon S^{k-1}\to\mathbb{R}P^{k-1}$ と両立するので、連続写像 $\mathbb{R}P^{k-1}\cup_{q}D^{k}\to\mathbb{R}P^{k}$ を誘導する。これは全単射（$x_{k+1}\ne0$ の類は $x_{k+1}>0$ の代表をただ 1 つもつ）で、定義域はコンパクト（$\mathbb{R}P^{k-1}\sqcup D^{k}$ の像）、値域はハウスドルフ（$S^{k}$ の異なる 2 つの類 $\{\pm x\}$, $\{\pm y\}$ は、4 点の距離の最小値の半分を半径とする球の和で分離できる）なので同相（\ref{top:compact-to-hausdo
  - `set:relation`: NG — Here 定義域 refers to the domain of a continuous map, not the set of first coordinates of ordered pairs in a relation as defined in the card.
  - `logic:rm-continuous-code`: NG — Here "定義域" refers to the domain of a continuous map between topological spaces, not the specific notion of a real function's domain defined via the sign relation Φ.

## 「押し出し」 in 05-geometry-topology/02-algebraic-topology/02-homology
- Default: `cat:coequalizer` → **no candidate fits**
- Pages: 07-cw-topology.html, 09-approximation.html, 12-uniqueness-infinite.html
- Sentence: $y$ を含む胞体の中に小さな球をとり、それより高い次元の胞体には、球（とそれまでに作った部分）に接する部分に、境界から内側へ伸びる薄い「襟」を継ぎ足していく。襟は半径方向に外側へ押し出すことで、1 段低い部分へ変形レトラクトできる。この押し出しを高い次元から順に、時間を $\frac14$, $\frac18$, … と細かく刻んで行えば、全体を $y$ まで縮められる。
  - `cat:coequalizer`: NG — Here "押し出し" means a geometric push/retraction of a collar, not the categorical pushout (fibered coproduct) defined in the card.

## 「普遍性」 in 05-geometry-topology/02-algebraic-topology/02-homology
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 05-degree.html, 06-cellular.html, 07-cw-topology.html, 12-uniqueness-infinite.html
- Sentence: **Step 1（$g_{\pm}$）.** $f\circ p_{\pm}$ は $\partial D^{m}$ を $y_{0}$ に写すので、商写像の普遍性（\ref{top:quotient-universal}）と同相 $D^{m}/\partial D^{m}\cong S^{m}$ から $g_{\pm}$ が一意に定まる。
  - `cat:universal-arrow`: NG — Here "普遍性" refers to the universal property of a quotient map, not the categorical notion of a universal morphism (普遍射) defined in the card.

## 「有限群」 in 05-geometry-topology/02-algebraic-topology/02-homology
- Default: `grp:abelian-group` → **no candidate fits**
- Pages: 11-axioms.html
- Sentence: 有限 CW 複体 $X$ について、$H_{n}(X;\mathbb{Q})=0$ がすべての $n\ge1$ で成り立ち、ある素数 $p$ で $H_{n}(X;\mathbb{F}_{p})=0$（すべての $n\ge1$）なら、$H_{n}(X)$（$n\ge1$）は $p$ と互いに素な位数の有限群であることを示せ。
  - `grp:abelian-group`: NG — Here "有限群" refers to a finitely generated abelian group (a group of finite order in the homology sense), not the group-theoretic notion of a finite group defined in the card.

## 「準同型」 in 05-geometry-topology/02-algebraic-topology/02-homology
- Default: `mod:submodule-homomorphism` → **no candidate fits**
- Pages: 11-axioms.html
- Sentence: 2. **（ホモトピー）** 対の写像として（各時刻で $A$ を $B$ に写す）ホモトープな写像は同じ準同型を誘導する。
  - `mod:submodule-homomorphism`: NG — This "準同型" refers to a homomorphism induced on (co)homology groups by a continuous map, not an \(R\)-module homomorphism as defined in the card.
  - `cat:t-algebra`: NG — Here "準同型" refers to a homomorphism induced by homotopic maps in homotopy theory, not a homomorphism of T-algebras as defined in the card.
  - `grp:homomorphism`: NG — Here "準同型" refers to an induced homomorphism between homotopy or homology groups, not the group homomorphism defined in the card.
  - `ring:homomorphism`: NG — Here "準同型" refers to a homomorphism induced on (co)homology groups, not a ring homomorphism as defined in the card.

## 「直積」 in 05-geometry-topology/02-algebraic-topology/02-homology
- Default: `grp:direct-product` → **no candidate fits**
- Pages: 09-approximation.html, 11-axioms.html, 12-uniqueness-infinite.html
- Sentence: - CW 複体とその位相 \ref{at:cw-complex}, \ref{at:page-cw-topology}（部分複体 \ref{at:subcomplex}、閉集合の判定 \tref{at:cw-closed-criterion}、直積の上の連続性 \tref{at:cw-coherent-product}、有限部分複体 \ref{at:cw-finite-subcomplex}、ホモトピー拡張性質 \ref{at:cw-hep}）。
  - `grp:direct-product`: NG — Here "直積" refers to the product of topological spaces (product topology), not the direct product of groups defined in the card.
  - `set:cartesian-product`: NG — Here "直積" refers to the product topology on a product of CW complexes, not the set-theoretic Cartesian product of two sets as defined in the card.

## 「被覆」 in 05-geometry-topology/02-algebraic-topology/02-homology
- Default: `at:covering` → **no candidate fits**
- Pages: 03-excision.html, 07-cw-topology.html
- Sentence: **Step 2（被覆）.** $n\ge1$ とし、$U\defeq S^{n}\setminus\{N\}$, $V\defeq S^{n}\setminus\{S\}$（$N=e_{n+1}$, $S=-e_{n+1}$）。開集合で、立体射影で $\mathbb{R}^{n}$ と同相なので可縮、被約ホモロジーは $0$（\ref{a
  - `at:covering`: NG — Here "被覆" is used as a section heading for a covering of the sphere by two open sets, not the covering-space map defined in the card.
  - `cat:continuous-gsets`: NG — Here "被覆" refers to an open cover of a topological space, not a sieve covering in the topos-theoretic sense defined in the card.

## 「部分複体」 in 05-geometry-topology/02-algebraic-topology/02-homology
- Default: `at:simplicial-complex` → **fits: `at:subcomplex`**
- Pages: 09-approximation.html, 11-axioms.html, 12-uniqueness-infinite.html, 14-manifold-complexes.html
- Sentence: - CW 複体とその位相 \ref{at:cw-complex}, \ref{at:page-cw-topology}（部分複体 \ref{at:subcomplex}、閉集合の判定 \tref{at:cw-closed-criterion}、直積の上の連続性 \tref{at:cw-coherent-product}、有限部分複体 \ref{at:cw-finite-subcomplex}、ホモトピー拡張性質 \ref{at:cw-hep}）
  - `at:simplicial-complex`: NG — This "部分複体" refers to a subcomplex of a CW complex, not a subset of a simplicial complex satisfying condition (a).
  - `at:subcomplex`: OK

## 「開被覆」 in 05-geometry-topology/02-algebraic-topology/02-homology
- Default: `top:compact` → **no candidate fits**
- Pages: 03-excision.html, 04-jordan-brouwer.html, 07-cw-topology.html, 09-approximation.html
- Sentence: **Step 3（十分細かくすると小さくなる）.** 特異単体 $\sigma$ について、$\{\sigma^{-1}(\operatorname{int}U)\}$ はコンパクト距離空間 $\Delta^{n}$ の開被覆なのでルベーグ数 $\delta$ がある。\ref{at:subdivision-diameter} から、$(\frac{n}{n+1})^{m}\operatorname{diam}\Delta^{n}<\delta$ なら $S^{m}\iota_{n}$ の各単体はある $\sigma^{-1}(\opera
  - `top:compact`: NG — “開被覆” is the covering being used, not the compactness property defined in the card.

## 「非可算」 in 05-geometry-topology/02-algebraic-topology/02-homology
- Default: `set:finite-set` → **no candidate fits**
- Pages: 02-singular.html, 03-excision.html, 11-axioms.html
- Sentence: $S_{n}(X)$ は（$X$ が 1 点でなければ）非可算階数の自由アーベル群で、定義から直接ホモロジーを計算することはできない。計算は、ホモトピー不変性・長完全列・切除を使って有限の鎖複体（単体的・胞体的鎖複体）に帰着して行う（\ref[CW 複体と胞体ホモロジー]{at:page-cellular-homology}, \ref[単体的ホモロジーと特異ホモロジーの一致]{
  - `set:finite-set`: NG — Here "非可算階数" means the rank is uncountable, not that the set itself is uncountable as defined in the card.

## 「順序数」 in 05-geometry-topology/02-algebraic-topology/02-homology
- Default: `set:ordinal` → **no candidate fits**
- Pages: 01-simplicial.html
- Sentence: **高い視点.** Δ 複体は、順序数の圏 $\Delta$ の単射だけからなる部分圏 $\Delta_{\mathrm{inj}}$ からの前層 $\Delta_{\mathrm{inj}}^{\mathrm{op}}\to\mathbf{Set}$ にほかならない（$d_{i}$ は面の埋め込み $\delta_{i}$ に対応する。単体的集合 \re
  - `set:ordinal`: NG — Here "順序数" refers to the ordinal numbers as objects of the category $\Delta$ (the simplex category), which is the standard notion of ordinals, so it does match the definition card.

## 「ネット」 in 05-geometry-topology/02-algebraic-topology/03-cohomology
- Default: `top:net` → **no candidate fits**
- Pages: 02-cup-product.html, 05-orientation.html, 06-poincare-duality.html
- Sentence: **一般化.** 同じ議論で $S^{2}\times S^{2}$ と $S^{2}\vee S^{2}\vee S^{4}$ も区別できる（前者では 2 次の 2 つの生成元の積が $H^{4}$ の生成元になる。これはコホモロジーのキュネットの定理 $H^{*}(X\times Y)\cong H^{*}(X)\otimes H^{*}(Y)$（$H^{*}$ が有限生成自由なとき）から従い、知られている）。カップ積の非自明性は、ホップ不変量（$S^{2n-1}\to S^{n}$ の写像を区別する）や、リュステルニク–シュニレルマン圏数の下界（カップ長）
  - `top:net`: NG — Here "ネット" is part of "キュネットの定理" (Künneth theorem), not a net in the topological sense.

## 「下界」 in 05-geometry-topology/02-algebraic-topology/03-cohomology
- Default: `calc:supremum` → **no candidate fits**
- Pages: 02-cup-product.html
- Sentence: ジーのキュネットの定理 $H^{*}(X\times Y)\cong H^{*}(X)\otimes H^{*}(Y)$（$H^{*}$ が有限生成自由なとき）から従い、知られている）。カップ積の非自明性は、ホップ不変量（$S^{2n-1}\to S^{n}$ の写像を区別する）や、リュステルニク–シュニレルマン圏数の下界（カップ長）にも使われる（本サイト未収録）。
  - `calc:supremum`: NG — Here "下界" means a lower bound for the Lusternik–Schnirelmann category (a numerical lower estimate), not a lower bound of a subset in an ordered set as defined in the card.

## 「交代形式」 in 05-geometry-topology/02-algebraic-topology/03-cohomology
- Default: `lin:alternating-form` → **no candidate fits**
- Pages: 06-poincare-duality.html
- Sentence: \langle a\cup b,[M]\rangle$ は対称でユニモジュラ（行列式 $\pm1$）な整数係数の双線形形式で、その符号数（実数上の正負の固有値の数の差）は向き付けられたコボルディズムの不変量であることが知られている（交叉形式。$\mathbb{C}P^{2}$ では $(1)$）。$4m+2$ 次元では交代形式になる。
  - `lin:alternating-form`: NG — It refers to an alternating bilinear form on a manifold's homology (intersection form), not the alternating $n$-form on an $A$-module defined in the card.

## 「写像度」 in 05-geometry-topology/02-algebraic-topology/03-cohomology
- Default: `at:degree-loop` → **fits: `at:degree`**
- Pages: 01-singular-cohomology.html, 05-orientation.html
- Sentence: プ積により環の構造をもつ、という利点がある。このページでは定義と**普遍係数定理**、公理の成立を示し、層の理論のページ（\ref{cat:page-singular-comparison}）で引用した二つの事実 (H)・(S) を証明する。応用として、$\mathbb{Z}/2$ 係数の「転送」の完全列から、奇写像の写像度が奇数であることと**ボルスク–ウラムの定理**を導く。
  - `at:degree-loop`: NG — This "写像度" refers to the degree of an odd map between spheres (a homological/cohomological degree), not the winding number of a loop $S^{1}\to S^{1}$ defined in the card.
  - `at:degree`: OK

## 「双対写像」 in 05-geometry-topology/02-algebraic-topology/03-cohomology
- Default: `at:duality-map` → **no candidate fits**
- Pages: 06-poincare-duality.html
- Sentence: gma)$ を係数とする点）。$\mu_{B}$ は生成元なので $\varphi\mapsto\varphi(\mu_{B})$ は同型。開直方体 $\prod(a_{i},b_{i})$ は $\mathbb{R}^{n}$ と同相（座標ごとの同相 $(a,b)\cong\mathbb{R}$）で、向きの同相写像は双対写像と両立するので同型。
  - `at:duality-map`: NG — Here "双対写像" refers to the orientation-preserving homeomorphism $(a,b)\cong\mathbb{R}$ being compatible with the dual (vector-space) map, not the Poincaré-duality cap-product map $D_{M}$ defined in the card.

## 「固有値」 in 05-geometry-topology/02-algebraic-topology/03-cohomology
- Default: `lin:eigen-def` → **no candidate fits**
- Pages: 06-poincare-duality.html
- Sentence: **交叉形式.** 向き付けられた閉 $4m$ 次元多様体では、$H^{2m}(M;\mathbb{Z})/\text{ねじれ}$ 上の $\langle a\cup b,[M]\rangle$ は対称でユニモジュラ（行列式 $\pm1$）な整数係数の双線形形式で、その符号数（実数上の正負の固有値の数の差）は向き付けられたコボルディズムの不変量であることが知られている（交叉形式。$\mathbb{C}P^{2}$ では $(1)$）。$4m+2$ 次元では交代形式になる。
  - `lin:eigen-def`: NG — Here "固有値" refers to eigenvalues of a real symmetric bilinear form (signature), not eigenvalues of a linear endomorphism as defined in the card.

## 「基底」 in 05-geometry-topology/02-algebraic-topology/03-cohomology
- Default: `mod:free-module` → **no candidate fits**
- Pages: 02-cup-product.html, 04-counterexamples.html, 06-poincare-duality.html
- Sentence: イン $\varphi$ について $\delta\varphi(U)=\varphi(\partial U)=\varphi(a)+\varphi(b)-\varphi(c)=\delta\varphi(L)$。よってコサイクルは $\varphi(c)=\varphi(a)+\varphi(b)$ を満たすもので、基底 $\alpha$（$a\mapsto1,b\mapsto0,c\mapsto1$）、$\beta$（$a\mapsto0,b\mapsto1,c\mapsto1$）。0 コチェインの余境界は $0$（辺の両端が同じ頂点）なので $H^{1}=\mathbb{Z}\alpha\oplus\mathbb{Z}\beta$
  - `mod:free-module`: NG — Here "基底" means a basis of a cochain complex (a set of generators for $H^{1}$), not a linearly independent generating set of a module as defined in the card.
  - `grp:free-abelian`: NG — Here "基底" refers to a basis of a cochain group (dual basis elements α, β), not a basis of a free abelian group as defined in the card.

## 「導来関手」 in 05-geometry-topology/02-algebraic-topology/03-cohomology
- Default: `ha:left-derived-functor` → **no candidate fits**
- Pages: 04-counterexamples.html
- Sentence: - 層コホモロジーは層の圏の大域切断の右導来関手で、短完全列から長完全列が得られる（\ref{ha:derived-long-exact}）。チェック複体の $\check H^{0}(\mathcal{U},F)=F(X)$（\ref{cat:cech-basic}）。軟層：パラコンパクト空間上の実数値連続関数の層 $\mathcal{C}_{X}$ は軟で、軟層
  - `ha:left-derived-functor`: NG — “導来関手” is the general notion, while the card defines only the left derived functor \(L_{n}F\), so the term as used is broader than the definition.

## 「引き戻し」 in 05-geometry-topology/02-algebraic-topology/03-cohomology
- Default: `cat:product` → **no candidate fits**
- Pages: 01-singular-cohomology.html, 06-poincare-duality.html
- Sentence:  Z_{n}$ による制限 $i_{n}^{*}$（$\psi\in\mathrm{Hom}(Z_{n},G)$ を $C_{n}$ に延ばして $\delta$ をとり、$C_{n+1}$ で評価すると $\psi(\partial c)$ で、これは $B_{n}$ 上の $\psi$ を $\partial$ で引き戻したもの）。
  - `cat:product`: NG — Here "引き戻し" refers to pulling back a function/cochain along the boundary map ∂ (precomposition), not the categorical fiber product/pullback defined in the card.

## 「普遍性」 in 05-geometry-topology/02-algebraic-topology/03-cohomology
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 01-singular-cohomology.html
- Sentence: **Step 1（誘導写像）.** $f$ は $\pi$ のファイバーをファイバーに写すので、商写像の普遍性から $\bar f\colon\mathbb{R}P^{n}\to\mathbb{R}P^{n}$, $\bar f\pi=\pi f$ が定まる。$f\circ\tilde\sigma_{1}$, $f\circ a\tilde\sigma_{1}=a f\tilde\sigma_{1}$ は $\bar f\si
  - `cat:universal-arrow`: NG — 普遍性 (universal property) is the general concept, not the specific notion of a universal morphism (普遍射) defined in the card.

## 「有限生成」 in 05-geometry-topology/02-algebraic-topology/03-cohomology
- Default: `mod:generated-submodule` → **no candidate fits**
- Pages: 02-cup-product.html, 06-poincare-duality.html
- Sentence: s S^{2}$ と $S^{2}\vee S^{2}\vee S^{4}$ も区別できる（前者では 2 次の 2 つの生成元の積が $H^{4}$ の生成元になる。これはコホモロジーのキュネットの定理 $H^{*}(X\times Y)\cong H^{*}(X)\otimes H^{*}(Y)$（$H^{*}$ が有限生成自由なとき）から従い、知られている）。カップ積の非自明性は、ホップ不変量（$S^{2n-1}\to S^{n}$ の写像を区別する）や、リュステルニク–シュニレルマン圏数の下界（カップ長）にも使われる（本サイト未収録）。
  - `mod:generated-submodule`: NG — This use of 有限生成 refers to finitely generated cohomology groups (as modules), not to finitely generated modules in the sense of the card's module-theoretic definition, though it is the same general notion applied to cohomology rings/groups.
  - `grp:generated-subgroup`: NG — Here "有限生成" refers to a finitely generated module/cohomology ring, not a finitely generated group as defined in the card.
  - `ring:generated-ideal-def`: NG — Here "有限生成" refers to a finitely generated module/cohomology ring, not a finitely generated ideal as defined in the card.

## 「特性写像」 in 05-geometry-topology/02-algebraic-topology/03-cohomology
- Default: `at:cw-complex` → **no candidate fits**
- Pages: 02-cup-product.html
- Sentence: $\theta(x)=\sigma_{x}$（特性写像）で、$\sigma_{x}\restriction[e_{0},\dots,e_{p}]=\sigma_{\text{前面}}$、$\sigma_{x}\restriction[e_{p},\dots,e_{n}]=\sigma_{\text{後面}}$（実現の同値関係から）なので、$\theta^{\#}(\var
  - `at:cw-complex`: NG — Here "特性写像" refers to a map $\theta$ from a simplex to its characteristic map $\sigma_{x}$ in a simplicial realization, not the CW-complex characteristic map $\Phi_{\alpha}\colon D^{n}_{\alpha}\to X$ defined in the card.

## 「直積」 in 05-geometry-topology/02-algebraic-topology/03-cohomology
- Default: `grp:direct-product` → **no candidate fits**
- Pages: 03-cech-comparison.html
- Sentence: の直積になる。これは集合 $I_{\tau}$ の上の「すべての組を単体とする」複体の添加コチェイン複体。
  - `grp:direct-product`: NG — Here "直積" refers to a product of cochain complexes (or sets), not the direct product of groups with componentwise group operation as defined in the card.
  - `set:cartesian-product`: NG — It refers to a product of cochain complexes, not the Cartesian product of two sets as defined in the card.

## 「細かい」 in 05-geometry-topology/02-algebraic-topology/03-cohomology
- Default: `top:finer-coarser` → **no candidate fits**
- Pages: 04-counterexamples.html
- Sentence: at:cohomology-agreement}）。このページでは、局所的に悪い空間でこれらが食い違う例を、証明付きで挙げる。特異理論は**道**（連続写像）で空間を探るので、道でたどれない構造（振動する曲線の極限など）を見落とす。チェック理論と層理論は**開集合の重なり**で探るので、そうした構造を捉える一方、無限に細かい構造（カントール集合の各点）を「連続性」でまとめてしまう。
  - `top:finer-coarser`: NG — Here「細かい」describes infinitely fine structure of a space, not the comparative strength of two topologies on the same set.

## 「行列式」 in 05-geometry-topology/02-algebraic-topology/03-cohomology
- Default: `lin:leibniz-formula` → **no candidate fits**
- Pages: 05-orientation.html, 06-poincare-duality.html
- Sentence: 一般化.** 境界付き多様体では、$H_{n}(M,\partial M)$ に基本類があり、向き付け可能な境界付き多様体の境界 $\partial M$ の基本類は $\partial[M]=[\partial M]$ で与えられる（ルフシェッツ双対性の準備。知られている）。滑らかな多様体では、向きは座標変換のヤコビ行列式の符号として定義でき、ここでのホモロジー的な向きと一致する（\ref{at:prob-degree-reflection-composition} の線形写像の写像度 $=\det$ の符号による。多様体論の系列で扱う予定）。
  - `lin:leibniz-formula`: NG — Here "行列式" refers to the Jacobian determinant of a coordinate change, not the determinant of a matrix in $M_{n}(A)$ as defined by the Leibniz formula.

## 「被覆度」 in 05-geometry-topology/02-algebraic-topology/03-cohomology
- Default: `at:covering` → **no candidate fits**
- Pages: 01-singular-cohomology.html
- Sentence: **高い視点.** 転送 $\tau$ は、有限被覆 $E\to B$ について鎖のレベルで「各単体をそのすべての持ち上げの和に送る」写像で、一般に $\pi_{*}\tau_{*}$ は被覆度倍になる。$\mathbb{Z}/2$ 係数の完全列はスミス理論（$\mathbb{Z}/p$ の作用の不動点集合の研究）の原型である（知られている）。比喩で言えば、奇写像は「表と裏の対応を崩さない」写像で、その情報が $\mathbb{R}P^{n}$ の上に降りたときに、各次数の $\mathbb{Z}/2$ を順
  - `at:covering`: NG — 「被覆度」は被覆写像の定義（全射・標準近傍・葉）を指す語ではなく、写像の多重度を表す別の概念である。

## 「近傍」 in 05-geometry-topology/02-algebraic-topology/03-cohomology
- Default: `top:neighborhood` → **no candidate fits**
- Pages: 03-cech-comparison.html, 04-counterexamples.html, 06-poincare-duality.html
- Sentence: **アレクサンダー–スパニエのコホモロジー.** 関数 $\varphi\colon X^{p+1}\to A$ を、「対角線のある近傍で $0$」なら $0$ とみなした商（局所的に $0$ な関数で割る）を $p$ コチェインとし、$\delta\varphi(x_{0},\dots,x_{p+1})=\sum(-1)^{k}\varphi(x_{0},\dots,\widehat{x_{k}},\dots,x_{p+1})$ とした理論を**アレ
  - `top:neighborhood`: NG — Here "近傍" means a neighborhood of the diagonal in the product space, which is the same topological notion of neighborhood (of a point/subset) as in the card, so it matches.

## 「逆像」 in 05-geometry-topology/02-algebraic-topology/03-cohomology
- Default: `set:function` → **no candidate fits**
- Pages: 03-cech-comparison.html, 04-counterexamples.html, 05-orientation.html
- Sentence: a}$ が空なら成分は $0$、空でなければ可縮で、(H)（\ref{at:cohomology-sheaf-facts}）から $0\to A\to S^{0}(U_{\sigma};A)\to S^{1}(U_{\sigma};A)\to\cdots$（$A$ は定数コチェイン）は完全。直積が完全であるには各成分で逆像を同時に選ぶ必要があるが、$U_{\sigma}$ ごとに可縮化のホモトピーを 1 つ固定すると、プリズム作用素の双対と 1 点の余鎖複体の縮約から、添加列の縮約（$\delta h+h\delta=1$）が明示的に得られる。よって $C^{p}\defeq\prod_{\sigma}\underline{A}(U_{
  - `set:function`: NG — This occurrence of 逆像 refers to choosing preimages of cochain components in a cohomology/sheaf context, not the set-theoretic inverse image $f^{-1}[D]$ defined in the card.
  - `cat:inverse-image`: NG — Here "逆像" refers to choosing preimages of elements under a map (set-theoretic inverse images), not the inverse image (pullback) of a (pre)sheaf defined in the card.

## 「逆極限」 in 05-geometry-topology/02-algebraic-topology/03-cohomology
- Default: `cat:limit` → **no candidate fits**
- Pages: 04-counterexamples.html
- Sentence: 1. $\check H^{1}(\mathbb{H};\mathbb{Z})\cong\bigoplus_{n\ge1}\mathbb{Z}$（可算）。$\mathbb{H}$ は有限個の円周のブーケ $\bigvee_{n\le N}C_{n}$ の逆極限で、コンパクト空間のチェックコホモロジーは逆極限を余極限に移す（連続性）ことによる。
  - `cat:limit`: NG — 「逆極限」は図式の極限（圏論的極限）とは異なり、ここでは位相空間の逆系の射影極限を指す別概念である。
  - `ring:inverse-limit`: NG — Here "逆極限" refers to an inverse limit of topological spaces (a limit in the category of spaces), not the inverse limit of a sequence of modules with connecting homomorphisms as defined in the card.

## 「連結成分」 in 05-geometry-topology/02-algebraic-topology/03-cohomology
- Default: `top:components` → **no candidate fits**
- Pages: 05-orientation.html
- Sentence:  の類 $\alpha_{K}$ を定め、$\alpha_{K}|_{A}=\alpha$。$i>n$ なら Step 3 で $\alpha_{K}=0$ なので $\alpha=0$。$i=n$ で $\alpha|_{x}=0$（$x\in A$）なら、$\alpha_{K}$ は $K$ の各成分（立方体の和の連結成分で、$A$ と交わる）の点で $0$…とするため、$K$ を $A$ と交わる立方体だけにとっておく：各立方体 $Q$ は $A$ の点 $x$ を含み、$\alpha_{K}|_{Q}\in H_{n}(\mathbb{R}^{n}|Q)\cong H_{n}(\mathbb{R}^{n}|x)$（Step 2）は 
  - `top:components`: NG — Here "連結成分" refers to the connected components of a union of cubes in a cubical complex, which is the same general topological notion of connected component as defined in the card.

## 「部分群」 in 05-geometry-topology/02-algebraic-topology/03-cohomology
- Default: `grp:subgroup` → **no candidate fits**
- Pages: 04-counterexamples.html, 05-orientation.html
- Sentence: $H^{1}(W,\underline{\mathbb{Z}})\ne0$。より詳しく、$H^{1}(W,\underline{\mathbb{Z}})\cong C(W,S^{1})/p\circ C(W,\mathbb{R})$（連続写像 $W\to S^{1}$ の群を、連続な対数をもつものの部分群で割ったもの）で、$J$ を 1 点に潰す写像 $\kappa\colon W\to W/J\cong S^{1}$ の類は $0$ でない。
  - `grp:subgroup`: NG — Here "部分群" refers to a subgroup of the group of continuous maps $W\to S^{1}$, which is the same group-theoretic notion of subgroup as in the card.

## 「非輪状モデル」 in 05-geometry-topology/02-algebraic-topology/03-cohomology
- Default: `at:free-on-models` → **no candidate fits**
- Pages: 02-cup-product.html
- Sentence: > 資料：標準的な内容（Massey『Singular Homology Theory』、Fulton『Algebraic Topology』のカップ積の章など）。次数付き可換性は非輪状モデルによる証明を、Δ 複体での計算は自分で書き下ろした。
  - `at:free-on-models`: NG — 「非輪状モデル」はここでは証明手法としてのモデル（非輪状なモデル関手）を指し、カードが定義する「モデル上で非輪状な関手」という性質とは異なる概念を指している。

## 「非退化」 in 05-geometry-topology/02-algebraic-topology/03-cohomology
- Default: `lin:bilinear-form` → **no candidate fits**
- Pages: 06-poincare-duality.html
- Sentence: これが**ポアンカレ双対性**で、多様体の（コ）ホモロジーに強い対称性を課す。証明は、コンパクトでない多様体にも通用する形（コンパクト台コホモロジー）で、$\mathbb{R}^{n}$ から始めてマイヤー–ヴィートリスと増大列の和で一般の多様体に広げる。応用として、カップ積による双線形形式の非退化性、奇数次元の閉多様体のオイラー標数が $0$ であること、$\mathbb{C}P^{n}$ と $\mathbb{R}P^{n}$ のコホモロジー環を示す。
  - `lin:bilinear-form`: NG — It refers to nondegeneracy of the cup-product bilinear form on cohomology, not the bilinear-form notion defined in the card.

## 「アフィン空間」 in 05-geometry-topology/03-algebraic-geometry/01-varieties
- Default: `ag:algebraic-set` → **no candidate fits**
- Pages: 01-affine-sets.html, 03-projective-varieties.html
- Sentence: 代数閉体 $k$ 上の $n$ 次元**アフィン空間** $\mathbb{A}^{n}=k^{n}$ の中で、多項式の共通零点として表される集合を**代数的集合**という。代数的集合を閉集合とする位相が**ザリスキ位相**で、零点定理により、代数的集合は多項式環の根基イデアルと一対一に対応する。この対応で、既約な集合は素イデアルに、点は極大イデアルに対応する。ザリスキ
  - `ag:algebraic-set`: NG — アフィン空間 is the ambient space $k^{n}$ itself, not the zero set $V(T)$ that the card defines as an algebraic set.

## 「ベクトル空間」 in 05-geometry-topology/03-algebraic-geometry/01-varieties
- Default: `lin:vector-space` → **no candidate fits**
- Pages: 06-nonsingular.html
- Sentence:  が**非特異**であるとは、$\mathcal{O}_{Y,P}$ が正則局所環であることをいう。そうでない点を**特異点**という。すべての点が非特異な $Y$ を**非特異**（**滑らか**）という。$\mathfrak{m}_{P}$ を $\mathcal{O}_{Y,P}$ の極大イデアルとして、$k$ ベクトル空間 $T_{P}Y\defeq(\mathfrak{m}_{P}/\mathfrak{m}_{P}^{2})^{*}$ を**ザリスキ接空間**という。
  - `lin:vector-space`: NG — Here "k ベクトル空間" refers to the tangent space as a vector space over k, which is the standard notion of vector space, but the card defines specific examples/subspaces rather than the general definition; however, the term is used in its general sense, not matching the card's specific content.

## 「全単射」 in 05-geometry-topology/03-algebraic-geometry/01-varieties
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 01-affine-sets.html, 02-affine-varieties.html, 03-projective-varieties.html
- Sentence: **Step 1（1）.** 閉集合の減少列 $Y_{1}\supset Y_{2}\supset\cdots$ は根基イデアルの増加列 $I(Y_{1})\subset I(Y_{2})\subset\cdots$ を与える（対応は包含を逆にする全単射）。$A$ はネーター（基底定理）なので増加列は止まり、閉集合の列も止まる。\term[部分空間]{top:subspace}の閉集合は閉集合との共通部分なので、部分空間もネーター的。
  - `set:injection-surjection`: NG — Here 全単射 refers to an order-reversing bijection between decreasing closed-set chains and increasing ideal chains, not the set-theoretic bijection between a domain and codomain defined in the card.

## 「単射」 in 05-geometry-topology/03-algebraic-geometry/01-varieties
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 01-affine-sets.html, 02-affine-varieties.html, 04-dimension.html, 05-rational-maps.html, 07-curves.html
- Sentence: - **$k$ が代数閉体**：零点定理による対応（\ref{ag:algebraic-radical-correspondence}）と、点＝極大イデアル（弱形の零点定理）に使った。$k=\mathbb{R}$ なら $V(x^{2}+1)=\emptyset=V(1)$ で、対応は単射でない。
  - `set:injection-surjection`: NG — Here 単射 refers to the map between varieties/ideals being injective, which is the same notion of injective function (a special case), so it matches the card's definition.

## 「和集合」 in 05-geometry-topology/03-algebraic-geometry/01-varieties
- Default: `set:union` → **no candidate fits**
- Pages: 01-affine-sets.html
- Sentence: 零点定理は、代数（根基イデアル）と幾何（代数的集合）の間の辞書で、包含を逆にする（ガロア接続、\ref{fld:polarity} と同じ形）。既約性⇔素、点⇔極大、和集合⇔共通部分（積）、共通部分⇔和、という翻訳が成り立つ。ザリスキ位相が粗いのは、図形を「多項式で区別できる範囲」でしか見ないからで、比喩で言えば、ピントを多項式の次数に合わせた解像度の低い写真である。それでも有限性（ネーター性）があるので、すべての図形は有限個の「既約な部品」に一意に分解できる。圏論的には、この辞書は「有
  - `set:union`: NG — Here "和集合" refers to the union operation in the algebra-geometry dictionary (union of varieties corresponds to intersection of ideals), not the set-theoretic union of a family of sets as defined in the card.

## 「基底」 in 05-geometry-topology/03-algebraic-geometry/01-varieties
- Default: `mod:free-module` → **no candidate fits**
- Pages: 01-affine-sets.html, 03-projective-varieties.html, 04-dimension.html, 06-nonsingular.html
- Sentence: - 根基・根基イデアルは \ref{ring:radical-ideal}、ネーター環とヒルベルトの基底定理は \ref{ring:noetherian-artinian-def}, \tref{ring:hilbert-basis}、多項式環の一意分解性は \ref{ring:polynomial-ufd}。
  - `mod:free-module`: NG — Here "基底定理" (basis theorem) refers to a theorem name, not a basis of a module as defined in the card.
  - `grp:free-abelian`: NG — Here "基底" refers to a basis of a ring/module in the context of the Hilbert basis theorem, not a basis (free generating set) of an abelian group as defined in the card.

## 「完備化」 in 05-geometry-topology/03-algebraic-geometry/01-varieties
- Default: `calc:cauchy-construction` → **no candidate fits**
- Pages: 07-curves.html
- Sentence: 3. **永田の完備化定理**（1962）：有限型の分離スキーム（たとえば多様体）は、完備な（固有な）スキームの開部分スキームとして埋め込める。曲線では非特異射影モデルがその役割を果たす。永田の名前は「病理的な反例」だけでなく、このような基礎定理にも残っている。
  - `calc:cauchy-construction`: NG — This "完備化" refers to Nagata's completion theorem in algebraic geometry (embedding a scheme into a complete/proper scheme), not the construction of the reals via Cauchy sequences of rationals.
  - `ring:completion`: NG — This "完備化" refers to Nagata's completion/compactification theorem (embedding a scheme into a proper scheme), not the $I$-adic completion of a module defined in the card.
  - `top:completion`: NG — This is scheme-theoretic completion/compactification in algebraic geometry, not the metric-space completion defined in the card.

## 「定義域」 in 05-geometry-topology/03-algebraic-geometry/01-varieties
- Default: `set:relation` → **fits: `logic:rm-continuous-code`**
- Pages: 02-affine-varieties.html, 05-rational-maps.html, 07-curves.html
- Sentence: 3. 二つの正則関数が空でない開集合上で一致すれば、それらの定義域の共通部分全体で一致する（**一致の原理**）。
  - `set:relation`: NG — Here "定義域" means the domain of a holomorphic function (its set of definition), not the domain of a relation as defined in the card.
  - `logic:rm-continuous-code`: OK

## 「引き戻し」 in 05-geometry-topology/03-algebraic-geometry/01-varieties
- Default: `cat:product` → **no candidate fits**
- Pages: 05-rational-maps.html, 07-curves.html
- Sentence: のをとると、$W$ 上で $\varphi=(f_{0}:\dots:f_{n})$, $\psi=(g_{0}:\dots:g_{n})$（$f_{l},g_{l}\in\mathcal{O}(W)$, $f_{i}=1$, $g_{j}=1$）と書ける（$U_{i}\cong\mathbb{A}^{n}$ の座標の引き戻し）。$\varphi(Q)=\psi(Q)$ $\iff$ 斉次座標が比例 $\iff$ すべての $l,m$ で $f_{l}(Q)g_{m}(Q)=f_{m}(Q)g_{l}(Q)$。正則関数は連続なので、これは $W$ の閉集合。閉であることは局所的なので、一致の集合は $X$ で閉。
  - `cat:product`: NG — Here "引き戻し" means the pullback (inverse image) of coordinates under a morphism, not the categorical fiber product limit.

## 「普遍性」 in 05-geometry-topology/03-algebraic-geometry/01-varieties
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 02-affine-varieties.html
- Sentence: - 局所化 $B_{f}$, $B_{\mathfrak{p}}$ とその普遍性は \ref{ring:localization}, \ref{ring:localization-universal}。多項式環の普遍性は \ref{ring:multivariate-universal}。
  - `cat:universal-arrow`: NG — 「普遍性」は普遍射が持つ性質を指す語であり、普遍射そのものの定義とは異なる。

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
  - `grp:generated-subgroup`: NG — Here "有限生成" modifies a ring (finitely generated integral domain), meaning finitely generated as an algebra over a base field, not finitely generated as a group.
  - `ring:generated-ideal-def`: OK

## 「正規化」 in 05-geometry-topology/03-algebraic-geometry/01-varieties
- Default: `ring:normal-domain` → **no candidate fits**
- Pages: 04-dimension.html, 07-curves.html
- Sentence: ネーターの正規化定理から、代数的に独立な $y_{1},\dots,y_{d}\in B$ で $B$ が $R\defeq k[y_{1},\dots,y_{d}]$ 上整なものがある。整拡大は\term[次元]{ring:krull-dimension}を保つので $\dim B=\dim R=d$。$B$ の元は $R$ 上整な
  - `ring:normal-domain`: NG — Here "正規化" refers to Noether normalization (ネーターの正規化定理), not the integral closure/normalization $\bar A^{K}$ defined in the card.

## 「無限遠点」 in 05-geometry-topology/03-algebraic-geometry/01-varieties
- Default: `top:one-point-compactification` → **no candidate fits**
- Pages: 07-curves.html
- Sentence: $\mathbb{P}^{1}$ の関数体は $k(t)$ で、$C_{k(t)}$ の元は $k[t]_{(t-a)}$（$a\in k$、$\mathbb{P}^{1}$ の点 $(1:a)$）と $k[t^{-1}]_{(t^{-1})}$（無限遠点 $(0:1)$）。実際、$k(t)$ の DVR で $k$ を含むものは、$t$ を含めば $k[t]$ を含み \ref{ag:affine-curve-valuations} から $k[t]_{(t-a)}$、含まなければ $t^{-1}\in\mathfrak{m}$ で無限遠点のもの。$C_{K}$ と 
  - `top:one-point-compactification`: NG — Here "無限遠点" refers to the point $(0:1)$ of the projective line $\mathbb{P}^{1}$, not to the added point $\infty$ in a one-point compactification.
  - `cx:riemann-sphere`: NG — the term 無限遠点 here denotes the point $(0:1)$ of the projective line $\mathbb{P}^{1}$, not the point $\infty$ in the one-point compactification $\widehat{\C}$ of $\C$ defined in the card.

## 「近傍」 in 05-geometry-topology/03-algebraic-geometry/01-varieties
- Default: `top:neighborhood` → **no candidate fits**
- Pages: 02-affine-varieties.html, 03-projective-varieties.html, 05-rational-maps.html, 07-curves.html
- Sentence: **Step 2（全射：主開集合による被覆）.** $\varphi\in\mathcal{O}(D(f))$ をとる。各点 $P\in D(f)$ に $\varphi=g/h$（近傍 $V$ 上）をとり、$V$ を主開集合 $D(h')\subset V\cap D(h)$（$P\in D(h')$）に縮め、$g\mapsto gh'$, $h\mapsto hh'$ と取り替えると、$D(hh')=D(h')$ 上で $\varphi=gh'/(hh')$。よって近傍は分母の主開集合 $D(h)
  - `top:neighborhood`: NG — Here "近傍" means an open neighborhood of a point in a scheme, which matches the topological notion of neighborhood (an open set containing the point), so it is the same notion.

## 「開被覆」 in 05-geometry-topology/03-algebraic-geometry/01-varieties
- Default: `top:compact` → **no candidate fits**
- Pages: 02-affine-varieties.html, 04-dimension.html
- Sentence:  D(h)$（$P\in D(h')$）に縮め、$g\mapsto gh'$, $h\mapsto hh'$ と取り替えると、$D(hh')=D(h')$ 上で $\varphi=gh'/(hh')$。よって近傍は分母の主開集合 $D(h)$ にとれる。$Y$ はネーター空間なので開集合 $D(f)$ は準コンパクト（開被覆の和の増加列は止まる）で、有限個の $D(h_{1}),\dots,D(h_{m})$ で覆え、$D(h_{i})$ 上 $\varphi=g_{i}/h_{i}$。
  - `top:compact`: NG — 「開被覆」はコンパクト性の定義で使われる概念を指す語であり、カードが定義する「コンパクト」や「有限交叉性」そのものではない。

## 「アフィン空間」 in 05-geometry-topology/03-algebraic-geometry/02-schemes
- Default: `ag:algebraic-set` → **no candidate fits**
- Pages: 03-properties.html
- Sentence: 1. **アフィン空間**：$\mathbb{A}^{n}_{R}\defeq\operatorname{Spec}R[x_{1},\dots,x_{n}]$ について $\mathbb{A}^{n}_{R}\times_{R}\mathbb{A}^{m}_{R}\cong\mathbb{A}^{n+m}_{R}$（$R[x]\otimes
  - `ag:algebraic-set`: NG — アフィン空間 is defined as Spec R[x_1,...,x_n], not as a zero set V(T) of an ideal.

## 「オイラー標数」 in 05-geometry-topology/03-algebraic-geometry/02-schemes
- Default: `ag:degree-divisor` → **no candidate fits**
- Pages: 09-riemann-roch.html
- Sentence: で決まる（**リーマン–ロッホの定理**）。証明は、因子を 1 点ずつ動かす短完全列と、オイラー標数の加法性による。系として、主因子の次数が $0$ であることやリーマンの不等式を導く。セール双対性 $H^{1}(\mathcal{L}(D))\cong H^{0}(\mathcal{L}(K-D))^{\vee}$ を加えると古典的な形になる（双対性は本サイト未収録）。
  - `ag:degree-divisor`: NG — Here "オイラー標数" refers to the Euler characteristic of a coherent sheaf/line bundle (additivity in short exact sequences), whereas the card defines $\chi(D)=h^{0}(D)-h^{1}(D)$ for divisors—related but the sentence's usage is the general sheaf Euler characteristic, not the card's divisor-specific definition.
  - `surf:triangulation`: NG — Here "オイラー標数" refers to the Euler characteristic of a divisor/line bundle (additivity in short exact sequences), not the Euler characteristic of a triangulation of a surface defined in the card.

## 「コンパクト」 in 05-geometry-topology/03-algebraic-geometry/02-schemes
- Default: `top:compact` → **no candidate fits**
- Pages: 01-spectrum.html, 04-separated-proper.html, 05-quasi-coherent.html
- Sentence: 変関手で、次ページで見るように可換環の圏と（アフィンスキームの圏の）反対圏は同値になる。比喩で言えば、すべての可換環は、ある空間の上の「関数の環」として読める。体は 1 点、DVR は「点とその周り」、$\mathbb{Z}$ は「素数を点とする曲線」、双対数は「1 点と、その点での接方向」である。ゲルファント双対性（コンパクト空間と C* 環）が「点の値」だけで空間を復元するのに対し、スキームは「局所化」で復元するので、冪零元という「無限小の情報」も失われない。
  - `top:compact`: NG — Here "コンパクト" refers to compact Hausdorff spaces in Gelfand duality (compact spaces paired with C*-algebras), which is a specific context not matching the general topological definition of compactness given in the card.

## 「コンパクト化」 in 05-geometry-topology/03-algebraic-geometry/02-schemes
- Default: `top:compactification` → **no candidate fits**
- Pages: 04-separated-proper.html
- Sentence: 2. **永田のコンパクト化**：ネーターな $S$ 上の分離的・有限型の射 $X\to S$ は、開埋め込み $X\hookrightarrow\bar{X}$ と固有射 $\bar{X}\to S$ の合成に分解することが知られている（永田雅宜、1962〜63 年。本サイト未収録）。SGA 4 では、エタールコホモロジーの「コンパクト台の順像
  - `top:compactification`: NG — This is Nagata's compactification in algebraic geometry (a proper scheme compactification over a base), not the topological compactification by a compact Hausdorff space defined in the card.

## 「ホモロジー」 in 05-geometry-topology/03-algebraic-geometry/02-schemes
- Default: `ha:homology` → **no candidate fits**
- Pages: 04-separated-proper.html, 05-quasi-coherent.html, 07-divisors.html, 08-cohomology.html, 09-riemann-roch.html
- Sentence: 2. **永田のコンパクト化**：ネーターな $S$ 上の分離的・有限型の射 $X\to S$ は、開埋め込み $X\hookrightarrow\bar{X}$ と固有射 $\bar{X}\to S$ の合成に分解することが知られている（永田雅宜、1962〜63 年。本サイト未収録）。SGA 4 では、エタールコホモロジーの「コンパクト台の順像」$Rf_{!}$ がこの分解を使って定義されたことが知られている。
  - `ha:homology`: NG — one short English sentence why

## 「乗法群」 in 05-geometry-topology/03-algebraic-geometry/02-schemes
- Default: `ring:unit` → **no candidate fits**
- Pages: 06-proj.html
- Sentence: 次数付き環 $S$ は、乗法群 $\mathbb{G}_{m}$ の $\operatorname{Spec}S$ への作用（$\lambda\cdot s=\lambda^{d}s$, $s\in S_{d}$）と同じものである。$\operatorname{Proj}S$ は、$\operatorname{Spec}S$ から「錐の頂点」$V(
  - `ring:unit`: NG — Here 乗法群 refers to the multiplicative group scheme $\mathbb{G}_{m}$, not the group of units $A^{\times}$ of a ring as defined in the card.

## 「全射」 in 05-geometry-topology/03-algebraic-geometry/02-schemes
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 01-spectrum.html, 03-properties.html, 04-separated-proper.html, 05-quasi-coherent.html, 06-proj.html, 07-divisors.html, 08-cohomology.html
- Sentence: **Step 2（2）.** 芽 $s_{\mathfrak{p}}$ に $s(\mathfrak{p})\in A_{\mathfrak{p}}$ を対応させる。全射：$a/f\in A_{\mathfrak{p}}$（$f\notin\mathfrak{p}$）は $D(f)$ 上の切断 $\mathfrak{q}\mapsto a/f$ の芽の像。単射：$s,t$ が近傍 $V$ 上でそれぞれ $a/f$, $b/g$ で表され $a/f=b/g$ in $A_{\mathfr
  - `set:injection-surjection`: NG — This "全射" (surjective) refers to a map between stalks being surjective, not the set-theoretic surjectivity of a function \(f\colon A\to B\) as defined in the card.

## 「単射」 in 05-geometry-topology/03-algebraic-geometry/02-schemes
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 01-spectrum.html, 04-separated-proper.html, 05-quasi-coherent.html, 06-proj.html, 07-divisors.html, 08-cohomology.html
- Sentence: _{\mathfrak{p}}$ に $s(\mathfrak{p})\in A_{\mathfrak{p}}$ を対応させる。全射：$a/f\in A_{\mathfrak{p}}$（$f\notin\mathfrak{p}$）は $D(f)$ 上の切断 $\mathfrak{q}\mapsto a/f$ の芽の像。単射：$s,t$ が近傍 $V$ 上でそれぞれ $a/f$, $b/g$ で表され $a/f=b/g$ in $A_{\mathfrak{p}}$ なら、$h\notin\mathfrak{p}$ で $h(ag-bf)=0$。$D(fgh)\cap V$ の各点 $\mathfrak{q}$ で $a/f=b/g$ in
  - `set:injection-surjection`: NG — This "単射" refers to injectivity of a map between stalks (a scheme-theoretic/localization statement), not the set-theoretic definition of an injective function between sets as given in the card.

## 「基底」 in 05-geometry-topology/03-algebraic-geometry/02-schemes
- Default: `mod:free-module` → **no candidate fits**
- Pages: 02-schemes.html, 03-properties.html, 04-separated-proper.html, 06-proj.html, 07-divisors.html, 08-cohomology.html, 09-riemann-roch.html
- Sentence: 遍性から $A_{g}\to\mathcal{O}_{X}(X_{\varphi(g)})=(f_{*}\mathcal{O}_{X})(D(g))$ が一意に定まり、$D(g')\subset D(g)$ の制限と両立する（普遍性の一意性）。$\mathcal{O}(D(g))=A_{g}$ なので、これは主開集合の基底の上の層の射で、$\mathcal{O}$ の切断は主開集合の上の切断の貼り合わせ（層の条件）なので、層の射 $f^{\#}:\mathcal{O}\to f_{*}\mathcal{O}_{X}$ に一意に延びる。茎の準同型 $f^{\#}_{x}:A_{f(x)}\to\mathcal{O}_{X,x}$ は $a
  - `mod:free-module`: NG — Here "基底" means a basis of a topology (a collection of open sets), not a basis of a module as in the definition card.
  - `grp:free-abelian`: NG — Here "基底" means a basis of open sets (a topological base), not a basis of a free abelian group.

## 「完全列」 in 05-geometry-topology/03-algebraic-geometry/02-schemes
- Default: `mod:exact-sequence` → **no candidate fits**
- Pages: 07-divisors.html
- Sentence: \tref{ring:nagata-criterion}（ネーター整域 $A$ と素元 $x$ について、$A_{x}$ が一意分解環なら $A$ も）は、正規な場合には除去完全列の言い換えである：$Z=V(x)$ は素因子で $[Z]=[\operatorname{div}x]=0$、$U=D(x)=\operatorname{Spec}A_{x}$ なので、\ref{ag:cl-excision} から $\operatorname{Cl}(\operatorname{Spec}A)\con
  - `mod:exact-sequence`: NG — Here "除去完全列" refers to an excision exact sequence in divisor class groups, not the module-theoretic exact sequence defined in the card.
  - `ha:exact-sequence`: NG — Here "除去完全列" refers to an excision exact sequence in algebraic K-theory/Chow groups, not the abelian-category notion of exact sequence defined in the card.

## 「導来関手」 in 05-geometry-topology/03-algebraic-geometry/02-schemes
- Default: `ha:left-derived-functor` → **no candidate fits**
- Pages: 08-cohomology.html
- Sentence: 層コホモロジー（\ref{cat:sheaf-cohomology}）をスキームの準連接層に使う。中心は**セールの消滅定理**：アフィンスキーム上の準連接層の高次コホモロジーは消える。証明は、主開集合の被覆のチェック複体が完全であるという代数的な計算と、それを導来関手のコホモロジーに移す「カルタンの補題」型の帰納法による（ネーター性は使わない）。系として、分離スキームではアフィン開被覆のチェック複体でコホモロジーが計算でき、$\mathbb{P}^{1}_{A}$ 上の $\mathcal{O}(m)$ のコホモロジーを具体的に求める。
  - `ha:left-derived-functor`: NG — the card defines the left derived functor \(L_{n}F\), a specific construction, while the term "導来関手" in the sentence refers to derived functors in general (used to compute sheaf cohomology), not specifically the left derived functor as defined.

## 「引き戻し」 in 05-geometry-topology/03-algebraic-geometry/02-schemes
- Default: `cat:product` → **no candidate fits**
- Pages: 02-schemes.html, 03-properties.html, 05-quasi-coherent.html, 06-proj.html
- Sentence: Y,\mathfrak{m}}\to K$ は局所的でない（$\mathfrak{m}$ の元が単元に写る）。$\operatorname{Hom}(R,K)$ の元 $R\hookrightarrow K$ に対応する正しい射は、点を生成点 $0$ に写すものである。局所性の条件がないと、「どの点に写るか」と「関数の引き戻し」が整合しない。
  - `cat:product`: NG — Here "引き戻し" refers to pullback of functions (precomposition), not the categorical pullback/fiber product defined in the card.

## 「普遍性」 in 05-geometry-topology/03-algebraic-geometry/02-schemes
- Default: `cat:universal-arrow` → **no candidate fits**
- Pages: 01-spectrum.html, 02-schemes.html, 03-properties.html, 04-separated-proper.html
- Sentence: つ可換環。素イデアル・極大イデアル・素イデアルの逆像は素・根基＝素イデアルの共通部分は \ref{ring:prime-maximal-def}, \ref{ring:prime-preimage}, \ref{ring:nilradical}, \ref{ring:radical-properties}。局所化とその普遍性・素イデアルの対応は \ref{ring:localization}, \ref{ring:localization-universal}, \ref{ring:localization-primes}, \ref{ring:localization-at-prime}。
  - `cat:universal-arrow`: NG — 普遍性 (universal property) is a general concept, not the specific notion of a universal morphism (普遍射) defined in the card.

## 「有限生成」 in 05-geometry-topology/03-algebraic-geometry/02-schemes
- Default: `ring:generated-ideal-def` → **no candidate fits**
- Pages: 03-properties.html, 06-proj.html
- Sentence: 有限型**：$Y$ のアフィン開被覆 $\{\operatorname{Spec}B_{i}\}$ と、各 $f^{-1}(\operatorname{Spec}B_{i})$ のアフィン開被覆 $\{\operatorname{Spec}A_{ij}\}_{j}$ で、$A_{ij}$ が（$f^{\#}$ による）有限生成 $B_{i}$ 代数となるものがある。
  - `ring:generated-ideal-def`: NG — Here "有限生成" modifies algebras over a ring (finitely generated $B_i$-algebras), not ideals generated by a finite set, so it is a different notion.
  - `grp:generated-subgroup`: NG — Here "有限生成" modifies algebras over a ring (finitely generated as a module/algebra), not finitely generated groups as defined in the card.
  - `mod:generated-submodule`: NG — Here "有限生成" modifies algebras over a ring (finitely generated $B_i$-algebras), not finitely generated modules as defined in the card.

## 「有限生成」 in 05-geometry-topology/03-algebraic-geometry/02-schemes
- Default: `mod:generated-submodule` → **fits: `grp:generated-subgroup`**
- Pages: 05-quasi-coherent.html, 08-cohomology.html, 09-riemann-roch.html
- Sentence: 接**であるとは、$X$ のアフィン開被覆 $U_{i}=\operatorname{Spec}A_{i}$ と $A_{i}$ 加群 $M_{i}$ で $\mathcal{F}|_{U_{i}}\cong\widetilde{M_{i}}$ となるものがあることをいう。$X$ がネーターで、$M_{i}$ をすべて有限生成にとれるとき**連接**という。
  - `mod:generated-submodule`: NG — This use of 有限生成 refers to finitely generated modules over the rings $A_{i}$ in the definition of coherent sheaves, which is the same module-theoretic notion as in the card.
  - `grp:generated-subgroup`: OK

## 「準同型」 in 05-geometry-topology/03-algebraic-geometry/02-schemes
- Default: `grp:homomorphism` → **no candidate fits**
- Pages: 03-properties.html
- Sentence: $i$ は閉集合への同相なので、$i(x)$ の近傍 $W$ について $i^{-1}(W)$ は $x$ の近傍の共終な系をなし、$(i_{*}\mathcal{O})_{i(x)}=\mathcal{O}_{\operatorname{Spec}A/I,x}$。$\mathfrak{p}\in V(I)$ では茎の準同型は $A_{\mathfrak{p}}\to(A/I)_{\mathfrak{p}}$, $a/s\mapsto\bar{a}/\bar{s}$ で全射。$\mathfrak{p}\notin V(I)$ では、$\mathfrak{p}$ の近傍 $D(g)$ で $V(I)$ と交わらないものがあり、$(i_{*}
  - `grp:homomorphism`: NG — This "準同型" refers to a homomorphism of stalks/local rings in algebraic geometry, not the group homomorphism defined in the card.
  - `cat:t-algebra`: NG — Here "準同型" refers to a homomorphism of stalks/local rings in algebraic geometry, not a homomorphism of T-algebras.
  - `ring:homomorphism`: NG — Here "準同型" refers to a homomorphism of stalks/local rings in algebraic geometry, not specifically the ring homomorphism definition given (though related, the sentence uses it for stalk maps).
  - `mod:submodule-homomorphism`: NG — This "準同型" refers to a homomorphism of stalks of sheaves/rings, not an \(R\)-module homomorphism as defined in the card.

## 「無限位数」 in 05-geometry-topology/03-algebraic-geometry/02-schemes
- Default: `grp:element-order` → **no candidate fits**
- Pages: 07-divisors.html
- Sentence: **Step 3（無限位数）.** $mH=\operatorname{div}(f)$ とすると、$\operatorname{div}(f)|_{\mathbb{A}^{n}}=0$ なので \ref{ag:cl-ufd.1} から $f,f^{-1}\in k[y_{1},\dots,y_{n}]$、$f\in k^{\times}$。よ
  - `grp:element-order`: NG — This use of "無限位数" (infinite order) refers to a divisor/valuation-theoretic notion in algebraic geometry, not the order of a group element as defined in the card.

## 「行列式」 in 05-geometry-topology/03-algebraic-geometry/02-schemes
- Default: `lin:leibniz-formula` → **no candidate fits**
- Pages: 04-separated-proper.html, 09-riemann-roch.html
- Sentence: - 線形代数：$N\times M$ 行列の定める線形写像 $k^{M}\to k^{N}$ が全射 $\iff$ ある $N$ 次小行列式が $0$ でない（\ref{lin:rank-minors}。線形代数の系列で扱う予定）。
  - `lin:leibniz-formula`: NG — It refers to minors (小行列式) of a non-square matrix, not the determinant of a square matrix as defined in the card.

## 「距離」 in 05-geometry-topology/03-algebraic-geometry/02-schemes
- Default: `top:metric-topology` → **no candidate fits**
- Pages: 09-riemann-roch.html
- Sentence: **計算の観点.** $\ell(D)$ は、$K$ の基底をとって極の位数の条件を線形方程式として書けば計算できる（ブリル–ネーターのアルゴリズムなど）。代数曲線の符号（ゴッパ符号）の次元と最小距離の評価は、リーマン–ロッホの定理から直接得られる。
  - `top:metric-topology`: NG — Here "距離" refers to the minimum distance of an error-correcting code, not a metric on a set.

## 「近傍」 in 05-geometry-topology/03-algebraic-geometry/02-schemes
- Default: `top:neighborhood` → **no candidate fits**
- Pages: 01-spectrum.html, 02-schemes.html, 03-properties.html, 04-separated-proper.html, 05-quasi-coherent.html, 07-divisors.html, 09-riemann-roch.html
- Sentence: atorname{Spec}A$ について、$\mathcal{O}(U)$ を、写像 $s:U\to\coprod_{\mathfrak{p}\in U}A_{\mathfrak{p}}$（$s(\mathfrak{p})\in A_{\mathfrak{p}}$）で、各点 $\mathfrak{p}\in U$ に近傍 $V\subset U$ と $a,f\in A$ があって、$V\subset D(f)$ かつ $V$ の各点 $\mathfrak{q}$ で $s(\mathfrak{q})=a/f\in A_{\mathfrak{q}}$ となるものの全体とする。点ごとの和・積で環になり、制限は写像の制限。
  - `top:neighborhood`: NG — Here "近傍" is used in the sense of an open neighborhood in a topological space (the Zariski topology on Spec A), which matches the card's definition of a neighborhood (a set containing an open set around the point), so it is the same notion.

## 「部分集合」 in 05-geometry-topology/03-algebraic-geometry/02-schemes
- Default: `set:subset` → **no candidate fits**
- Pages: 01-spectrum.html, 02-schemes.html, 03-properties.html, 04-separated-proper.html
- Sentence: $\operatorname{Spec}A$ を $A$ の素イデアルの集合とする。部分集合 $T\subset A$ について $V(T)\defeq\{\mathfrak{p} : \mathfrak{p}\supset T\}$、$f\in A$ について $D(f)\defeq\operatorname{Spec}A\setminus V(f)=\{\mathfrak{p} : f\notin\mat
  - `set:subset`: NG — Here "部分集合" refers to a subset of the ring $A$ (a set of elements), not the subset relation $A\subseteq B$ between sets as defined in the card.

## 「開被覆」 in 05-geometry-topology/03-algebraic-geometry/02-schemes
- Default: `top:compact` → **no candidate fits**
- Pages: 02-schemes.html, 03-properties.html, 04-separated-proper.html, 05-quasi-coherent.html, 06-proj.html, 07-divisors.html, 08-cohomology.html
- Sentence: e{Spec}(-),X):\mathbf{Ring}\to\mathbf{Set}$ を対応させる。米田の補題と \ref{ag:morphisms-to-affine} から、$X\mapsto h_{X}$ は充満忠実で、スキームは「環から集合への関手」のうち、局所的に表現可能なもの（ザリスキ位相の層で、アフィン開被覆をもつもの）として特徴づけられることが知られている。$h_{X}(R)$ は「$R$ に値をとる $X$ の点」で、方程式系 $X=\operatorname{Spec}\mathbb{Z}[x]/(f)$ については $h_{X}(R)=\{a\in R^{n} : f(a)=0\}$ という素朴な解の集合である。
  - `top:compact`: NG — 「開被覆」 is used as a component of the definition (a cover by open sets), not as the term being defined as compact.

## 「一次独立」 in 05-geometry-topology/04-differential-geometry/01-curves
- Default: `mod:free-module` → **no candidate fits**
- Pages: 01-curves-frenet.html
- Sentence: 2. すべての $t$ で $c'(t),\dots,c^{(n-1)}(t)$ が一次独立であるとき、$c$ を**フレネ曲線**とよぶ（本サイトでの呼び名）。$n=2$ では正則曲線と同じ、$n=3$ では $c'$ と $c''$ が一次独立ということである。
  - `mod:free-module`: NG — This is linear independence of vectors in differential geometry, not the module-theoretic notion defined in the card.

## 「動標構」 in 05-geometry-topology/04-differential-geometry/01-curves
- Default: `surf:frenet-frame` → **no candidate fits**
- Pages: 01-curves-frenet.html
- Sentence: thrm{SO}(n)$ の曲線が初期値を除いて一意に決まる」ことと、「曲線は $E$ の第 1 行を積分して決まる」ことの組み合わせである。初期値の取り替えが右からの直交行列の掛け算、すなわち合同変換に対応する。これはリー群の中の曲線を、そのリー環の中の曲線（対数微分）から復元する話の最も簡単な場合であり、カルタンの動標構法の出発点とされる。
  - `surf:frenet-frame`: NG — 「動標構」は曲線に沿った正規直交標構（フレネ標構）を指す用語ではなく、カルタンの方法を指す文脈で用いられており、カードのフレネ標構の定義とは異なる。

## 「単射」 in 05-geometry-topology/04-differential-geometry/01-curves
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 01-curves-frenet.html, 02-plane-curves-global.html
- Sentence: **Step 3（2）.** 【主張：$\det R=1$ なら標準フレネ標構は $(Re_{i})$ で曲率は変わらない】$(B\circ c)^{(k)}=Rc^{(k)}$。$R$ は単射なので一次独立性は保たれる。$R$ は内積を保つので $(Re_{1},\dots,Re_{n})$ は正規直交で、$\langle Re_{1},\dots,Re_{k}\rangle=R\langle c',\dots,c^{(k)}\rangle$、$\langle Re_{k},Rc^{(k)}\rangle=
  - `set:injection-surjection`: NG — Here 単射 refers to a linear map being injective (one-to-one), which is the same notion as the card's definition of injective function, so it should be ok—wait, the card defines 単射 for a function $f\colon A\to B$ via inverse relation being a function, and a linear map $R$ being injective is exactly this notion, so it matches.

## 「同じ向き」 in 05-geometry-topology/04-differential-geometry/01-curves
- Default: `lin:orientation` → **no candidate fits**
- Pages: 02-plane-curves-global.html
- Sentence: 閉曲線とは、一周すると出発点に同じ向き・同じ速さで戻ってきて、それを繰り返す曲線である。単純閉曲線とは、一周の間に自分自身と交わらない閉曲線である。
  - `lin:orientation`: NG — Here "同じ向き" means the same direction of motion along a curve, not the equivalence of ordered bases defined by a positive-determinant change-of-basis matrix.

## 「周期」 in 05-geometry-topology/04-differential-geometry/01-curves
- Default: `surf:closed-curve` → **no candidate fits**
- Pages: 02-plane-curves-global.html, 03-total-curvature-fenchel.html
- Sentence: - $\mathbf{u}(\alpha)\defeq(\cos\alpha,\sin\alpha)$ と書く。三角関数の基本性質と加法定理 \ref{calc:trig-properties}、周期 $2\pi$ \ref{calc:circle-parametrization}、逆正接 \ref{calc:arctan}。$\mathbb{R}^{2}$ を $\mathbb{C}$ とみると $\mathbf{u}(\alpha)=e^{i\alpha}$ なので、極形式（\ref{calc:polar-fo
  - `surf:closed-curve`: NG — The term "周期" here refers to the period of trigonometric functions, not the period of a closed curve as defined in the card.

## 「定義域」 in 05-geometry-topology/04-differential-geometry/01-curves
- Default: `set:relation` → **fits: `logic:rm-continuous-code`**
- Pages: 01-curves-frenet.html
- Sentence: 2})$ のまま（\ref{surf:curvature-invariance.1}）。$a^{2}+b^{2}=1/(\kappa^{2}+\tau^{2})$ なので、これは $\kappa$, $\tau$ に等しい。\ref{surf:fundamental-theorem-curves.2} から結論が従う（定義域は平行移動 $s\mapsto s+\text{定数}$ で合わせる。常らせんは全区間 $\mathbb{R}$ で定義されているので、制限すればよい）。
  - `set:relation`: NG — Here 定義域 refers to the domain of a curve parametrization (an interval of parameter values), not the domain of a relation as a set of ordered pairs.
  - `logic:rm-continuous-code`: OK

## 「積分可能」 in 05-geometry-topology/04-differential-geometry/01-curves
- Default: `calc:riemann-integrable` → **no candidate fits**
- Pages: 01-curves-frenet.html
- Sentence: **類似の定理.** 曲面に対しては、第一基本形式・第二基本形式がガウス方程式とコダッツィ＝マイナルディ方程式をみたせば曲面が合同を除いて一意に存在するという定理（ボネの定理。\see{surf:fundamental-theorem-surfaces}）がある。曲線の場合と違い、曲面では与えるデータが積分可能条件（偏微分の順序交換）をみたす必要がある。
  - `calc:riemann-integrable`: NG — Here "積分可能条件" refers to integrability conditions (equality of mixed partials) for PDEs, not Riemann integrability of a function.

## 「距離」 in 05-geometry-topology/04-differential-geometry/01-curves
- Default: `top:metric-topology` → **no candidate fits**
- Pages: 01-curves-frenet.html, 03-total-curvature-fenchel.html
- Sentence: 1. $c(s)$ と $s=0$ での接触平面の距離は $\frac{|\kappa\tau|}{6}|s|^{3}+o(s^{3})$。
  - `top:metric-topology`: NG — Here "距離" means the distance between a curve and a plane, not a metric function on a set as defined in the card.

## 「逆像」 in 05-geometry-topology/04-differential-geometry/01-curves
- Default: `set:function` → **no candidate fits**
- Pages: 02-plane-curves-global.html
- Sentence: otation-number-properties.2}、$n_{c}=1$）。$\theta(\mathbb{R})=\mathbb{R}$ なので、$\theta(p)=\beta-\frac\pi2$ となる最小の $p$ と、$\theta(q)=\beta+\frac\pi2$ となる最大の $q$ がある（逆像は閉集合で、$\theta$ の単調性と $\theta(t\pm L)=\theta(t)\pm2\pi$ から有界）。$[p,q]$ では $\theta-\beta\in[-\frac\pi2,\frac\pi2]$ で $g'\ge0$、$[q,p+L]$ では $\theta-\beta\in[\frac\p
  - `set:function`: NG — Here "逆像" refers to the preimage of a set under the map θ (the inverse image f^{-1}[D]), which matches the card's definition of 逆像.
  - `cat:inverse-image`: NG — This "逆像" means the preimage of a set under a map, not the inverse image (pullback) of a (pre)sheaf along a morphism.

## 「閉集合」 in 05-geometry-topology/04-differential-geometry/01-curves
- Default: `top:closed-set` → **no candidate fits**
- Pages: 02-plane-curves-global.html
- Sentence: }$ で $h_{t_{0}}\le0$ である】$S_{\pm}\defeq\{t_{0}\in\mathbb{R}\mid\text{すべての }t\text{ で }\pm h_{t_{0}}(t)\ge0\}$ とおく。$h_{t_{0}}(t)$ は $t_{0}$ について連続なので、$S_{\pm}$ は閉集合の共通部分として閉集合で、凸性から $S_{+}\cup S_{-}=\mathbb{R}$。$t_{0}\in S_{+}\cap S_{-}$ なら $h_{t_{0}}\equiv0$ で、$c$ は $c(t_{0})$ での接線に含まれ、\ref{surf:closed-curve-not-in-line} 
  - `top:closed-set`: NG — Here "閉集合" refers to a closed set in $\mathbb{R}$ (closed under limits in the usual topology), which is the same notion as the card's definition since $\mathbb{R}$ is a topological space.

## 「ノルム」 in 05-geometry-topology/04-differential-geometry/02-surfaces
- Default: `lin:inner-product` → **fits: `calc:norm`**
- Pages: 04-geodesics.html
- Sentence: )-F(y)|\le\Lambda|x-y|$ となるものがある】$W$ は開なので $\bar B\subset W$ となる $r$ がある。$\bar B$ はコンパクト（\ref{top:heine-borel}）で、$|F|$ と $\|DF\|$（作用素ノルムは $M_{N}(\mathbb{R})$ 上のノルムなので連続、\ref{calc:operator-norm-properties.5}）は連続なので最大値 $M$, $\Lambda$ をとる（\ref{top:extreme-value}）。$\bar B$ は凸なので\ref{calc:mean-value-inequality} から $\Lambda$ がリ
  - `lin:inner-product`: NG — While the card defines the norm \(\|v\|\) induced by an inner product, the sentence uses "ノルム" to refer to an operator norm on \(M_{N}(\mathbb{R})\), which is a different (though related) notion not defined by the card.
  - `comp:pi11-norm`: NG — Here "ノルム" means the operator norm (a norm on matrices), not a function from a set of naturals to ordinals as in the definition card.
  - `calc:norm`: OK

## 「リンデレーフ」 in 05-geometry-topology/04-differential-geometry/02-surfaces
- Default: `top:second-countable` → **no candidate fits**
- Pages: 04-geodesics.html
- Sentence: 動**が、速度ベクトルの共変微分が $0$ の曲線として**測地線**（曲面の上の「まっすぐな」曲線）が定まる。曲面上の曲線の曲率は、法線方向の**法曲率**と接平面内の**測地的曲率**に分かれ、測地線とは測地的曲率が $0$ の曲線である。測地線の存在と一意性のために、常微分方程式の解の局所存在と一意性（ピカール–リンデレーフ）をこのページで証明し、最後に**指数写像**を定める。
  - `top:second-countable`: NG — Here "リンデレーフ" refers to the Picard–Lindelöf theorem on ODE existence/uniqueness, not the Lindelöf covering property defined in the card.

## 「一次独立」 in 05-geometry-topology/04-differential-geometry/02-surfaces
- Default: `mod:free-module` → **no candidate fits**
- Pages: 01-regular-surfaces.html, 02-second-fundamental-form.html, 05-gauss-bonnet-local.html
- Sentence: $U\subset\mathbb{R}^{2}$ を開集合とする。$C^{\infty}$ 級の写像 $f\colon U\to\mathbb{R}^{3}$ で、各 $u\in U$ で $f_{1}(u),f_{2}(u)$ が一次独立（$Df(u)$ が単射）であるものを**曲面片**（正則なパラメータ付けられた曲面）という。
  - `mod:free-module`: NG — Here "一次独立" refers to linear independence of vectors in \(\mathbb{R}^{3}\) over \(\mathbb{R}\), which is the special case of the module-theoretic definition with \(R=\mathbb{R}\), so it matches.

## 「定義域」 in 05-geometry-topology/04-differential-geometry/02-surfaces
- Default: `set:relation` → **no candidate fits**
- Pages: 06-gauss-bonnet-global.html
- Sentence: 向き $N$ があれば、どの点のまわりにも正の向きの局所パラメータ表示がある：$f$ の単位法ベクトル $n$ は $N\circ f$ か $-N\circ f$ で、$\langle n,N\circ f\rangle$ は連続で $\pm1$ の値をとるので、連結な定義域（たとえば円板）では一定。$-N\circ f$ なら座標 $u^{1},u^{2}$ を入れ替える（\ref{surf:reparametrization-tangent.2}）。
  - `set:relation`: NG — Here "定義域" means the domain of a parametrization (a surface patch), not the domain of a relation as defined in the card.
  - `logic:rm-continuous-code`: NG — Here "定義域" refers to the domain of a parametrization (a subset of $\mathbb{R}^{2}$), not the domain of a continuous function $f\colon\mathrm{dom}f\subseteq\mathbb{R}\to\mathbb{R}$ as defined in the card.

## 「引き戻し」 in 05-geometry-topology/04-differential-geometry/02-surfaces
- Default: `cat:product` → **no candidate fits**
- Pages: 01-regular-surfaces.html
- Sentence: **高い視点.** 第一基本形式は $\mathbb{R}^{3}$ の内積を $f$ で引き戻したもの $f^{*}\langle\ ,\ \rangle$ で、各点の接平面（あるいは地図の $\mathbb{R}^{2}$）に正定値な内積を与える。このような「点ごとに滑らかに変わる内積」がリーマン計量であり、曲面論のうち第一基本形式だけで決まる部分（長さ・角・面積、そして驚異の定理によるとガウス曲率）は、空間 
  - `cat:product`: NG — Here "引き戻し" means pulling back a metric/inner product along a map (differential-geometric pullback), not the categorical fiber product limit defined in the card.

## 「曲率」 in 05-geometry-topology/04-differential-geometry/02-surfaces
- Default: `surf:frenet-curvature` → **no candidate fits**
- Pages: 01-regular-surfaces.html, 02-second-fundamental-form.html, 03-theorema-egregium.html, 04-geodesics.html, 05-gauss-bonnet-local.html, 06-gauss-bonnet-global.html
- Sentence: 線を定義する。次に、曲面片を貼り合わせてできる部分集合として**正則曲面**を定め、貼り合わせの写像が自動的に滑らかになることを逆関数定理で示す。後半では、曲面の上の長さ・角・面積を測る道具である**第一基本形式**を導入する。第一基本形式は曲面の「内在的な」幾何（曲面に住む者が測れる量）の基礎であり、次のページ以降の曲率の議論、とくにガウスの驚異の定理の出発点になる。
  - `surf:frenet-curvature`: NG — Here 曲率 refers to curvature of surfaces (Gaussian curvature), not the curvature of a Frenet curve defined in the card.

## 「有界」 in 05-geometry-topology/04-differential-geometry/02-surfaces
- Default: `calc:supremum` → **no candidate fits**
- Pages: 04-geodesics.html, 06-gauss-bonnet-global.html
- Sentence: **Step 4（局所一意性）.** 【主張：$x(t_{0})=y(t_{0})$ なら、$t_{0}$ を含むある区間で $x=y$】$x(t_{0})$ を中心に Step 1 の $r,M,\Lambda$ をとる。連続性から、$t_{0}$ を含む有界閉区間 $J$ で $x,y$ はともに $\bar B$ に値をとる。$D\defeq|x-y|$ は $D(t)\le|\int_{t_{0}}^{t}\Lambda D|$ をみたし、$J$ 上 $D\le C$。帰納的に $D(t)\le C\Lambda^{j}|t-t_{0}|^{j}/j!\to0$。
  - `calc:supremum`: NG — Here "有界閉区間" means a bounded closed interval (bounded as a set of real numbers), which is the same notion of boundedness defined in the card.
  - `logic:rm-analysis-defs`: NG — Here "有界閉区間" means a bounded closed interval, not a bounded sequence as defined in the card.

## 「標準基底」 in 05-geometry-topology/04-differential-geometry/02-surfaces
- Default: `mod:free-module` → **no candidate fits**
- Pages: 05-gauss-bonnet-local.html
- Sentence: - $\mathbb{R}^{3}$ の正の向きの正規直交基底 $(a,b,c)$（$\det(a,b,c)=1$）については $a\times b=c$, $b\times c=a$, $c\times a=b$（標準基底を写す行列式 $1$ の直交行列 $R$ について $Ra\times Rb=R(a\times b)$、\ref{surf:second-form-invariance} の証明の計算）。
  - `mod:free-module`: NG — Here "標準基底" refers to the standard orthonormal basis of $\mathbb{R}^{3}$ as a Euclidean/vector space, not the standard basis $e_{i}$ of the free module $R^{(I)}$ defined in the card.

## 「次元」 in 05-geometry-topology/04-differential-geometry/02-surfaces
- Default: `lin:dimension` → **no candidate fits**
- Pages: 01-regular-surfaces.html, 03-theorema-egregium.html, 04-geodesics.html, 06-gauss-bonnet-global.html
- Sentence: {p}S=\nabla F(p)^{\perp}$】局所パラメータ表示 $f$ について $F(f(u))=a$ を微分すると、連鎖律から $\langle\nabla F(f(u)),f_{i}(u)\rangle=0$。よって $T_{p}S\subset\nabla F(p)^{\perp}$ で、両辺とも 2 次元なので等しい。
  - `lin:dimension`: NG — Here "2 次元" refers to the dimension of a tangent plane/manifold in geometry, not the dimension of a vector space as defined by the basis cardinality in the card.
  - `cat:trace-dimension`: NG — Here "次元" means the dimension of a manifold (2-dimensional), not the categorical dimension $\dim a$ defined via trace in the card.
  - `ring:krull-dimension`: NG — Here "次元" refers to the dimension of tangent spaces/planes in differential geometry, not the Krull dimension of a ring.
  - `ag:dimension`: NG — Here "次元" refers to the dimension of a tangent plane as a vector space (2-dimensional), not the dimension of a topological space defined via chains of irreducible closed subsets.

## 「符号付き曲率」 in 05-geometry-topology/04-differential-geometry/02-surfaces
- Default: `surf:signed-curvature` → **no candidate fits**
- Pages: 02-second-fundamental-form.html, 04-geodesics.html, 05-gauss-bonnet-local.html
- Sentence:  $(\rho(t),z(t))$（$\rho>0$）が弧長で径数づけられている（$\rho'^{2}+z'^{2}=1$）回転面 $f(t,\varphi)=(\rho\cos\varphi,\rho\sin\varphi,z)$ について、座標方向は主方向で、主曲率は $\rho'z''-\rho''z'$（母線の符号付き曲率）と $z'/\rho$、ガウス曲率は $K=-\rho''/\rho$。
  - `surf:signed-curvature`: NG — the card defines signed curvature of a plane curve, but here the term refers to the signed curvature of the generating meridian curve in a surface context, which is a different notion.

## 「細かい」 in 05-geometry-topology/04-differential-geometry/02-surfaces
- Default: `top:finer-coarser` → **no candidate fits**
- Pages: 06-gauss-bonnet-global.html
- Sentence: 閉じた曲面のガウス曲率をすべて足し合わせると、曲面の細かい形にはよらず、穴の数だけで決まる値（オイラー標数の $2\pi$ 倍）になる。曲面をどんなに曲げたりへこませたりしても、ガウス曲率の合計は変わらない。
  - `top:finer-coarser`: NG — Here "細かい" describes the fine/detailed shape of a surface, not a finer topology in the sense of the definition.

## 「線形写像」 in 05-geometry-topology/04-differential-geometry/02-surfaces
- Default: `mod:submodule-homomorphism` → **no candidate fits**
- Pages: 02-second-fundamental-form.html, 04-geodesics.html, 05-gauss-bonnet-local.html
- Sentence: 2. 線形写像 $\mathcal{S}_{u}\colon T_{u}f\to T_{u}f$ を $\mathcal{S}_{u}(f_{i}(u))\defeq-n_{i}(u)$（$i=1,2$）で定め、**形作用素**（ワインガルテン写像）という。すなわち $\mathcal{S}_{u}=-Dn(u)\circ Df(u
  - `mod:submodule-homomorphism`: NG — This is a differential-geometric shape operator (Weingarten map) between tangent spaces, not an \(R\)-module homomorphism as defined in the card.

## 「速さ」 in 05-geometry-topology/04-differential-geometry/02-surfaces
- Default: `surf:regular-curve` → **no candidate fits**
- Pages: 02-second-fundamental-form.html, 04-geodesics.html
- Sentence: \perp}=T_{u}f$ を同一視して見たものである。ガウス曲率はその行列式なので、\ref{surf:gauss-map-area} のとおり「ガウス写像が面積を何倍にするか（向きも込めて）」を表す。曲線で曲率が接ベクトルの写像（\ref{surf:page-plane-curves-global} の回転数）の速さだったことの、曲面での類似である。
  - `surf:regular-curve`: NG — Here "速さ" refers to the speed of a map of tangent vectors (the derivative of the tangent map), not the speed |c'(t)| of a regular curve as defined in the card.

## 「速度ベクトル」 in 05-geometry-topology/04-differential-geometry/02-surfaces
- Default: `surf:regular-curve` → **no candidate fits**
- Pages: 01-regular-surfaces.html, 03-theorema-egregium.html, 04-geodesics.html
- Sentence: 曲面片とは、平面の地図の上の各点を空間の点に対応させた、折れ目もつぶれもない滑らかな曲面のことである。各点で座標の二方向の速度ベクトルが張る平面が接平面で、それに垂直な長さ 1 のベクトルが単位法ベクトルである。
  - `surf:regular-curve`: NG — This is the velocity vector of a surface parametrization (partial derivatives), not the derivative of a regular curve as defined in the card.

## 「連結成分」 in 05-geometry-topology/04-differential-geometry/02-surfaces
- Default: `top:components` → **no candidate fits**
- Pages: 02-second-fundamental-form.html
- Sentence: **1.** $\tilde n=\varepsilon\,n\circ\phi$（\ref{surf:reparametrization-tangent.2}。$\varepsilon$ は $V$ の連結成分ごとに一定だが、点ごとの式なので問題ない）。$\tilde n_{i}=\varepsilon\sum_{k}\frac{\partial u^{k}}{\partial v^{i}}n_{k}$、$\tilde f_{j}=\sum_{l}\frac{\partial u^{l}}{\partial v^{j}}f_
  - `top:components`: NG — Here "連結成分" refers to a connected component of the parameter domain $V$ (a region in $\mathbb{R}^2$), which is exactly the topological notion defined in the card, so it matches.

