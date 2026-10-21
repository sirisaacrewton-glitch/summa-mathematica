/* 学習機能の差し込み設定（ページのパス → 直感イメージと演習の位置）。
 * 同期で読み込むので、本文の描画と同時に枠ができ、画面がずれない（CLS 対策）。
 * 演習の中身（パズルの手順など）は api/pro-content/<ページのラベル>.json に置き、開いたときに読む。
 * access: 'free' は無料お試し（各分野の最初の 1 つ）、'pro' は Pro プランで全体が開く。 */
window.SM_LEARN_MANIFEST = {
  // 可換環論の保存表：○× ゲーム
  '13-commutative-algebra/13F-arithmetic-rings/01-integral-domains/08-preservation-table.html': {
    interactive: [
      { id: 'qz-ring-preservation', type: 'quiz', target: 'ring:preservation-table', access: 'free', label: '○× ゲーム：環の性質は保たれる？',
        summary: '保存表から 10 問', yes: 'いつも保たれる', no: '保たれない例がある',
        tables: [ { label: 'ring:preservation-table', mode: 'grid', q: '「{row}」は {col} で保たれる？', notes: 'ring:preservation-notes' } ] }
    ]
  },
  // 群論の保存表と、極限の交換の一覧：○× ゲーム
  '20-group-theory/20D-abstract-finite-groups/01-sylow/06-preservation-table.html': {
    interactive: [
      { id: 'qz-group-preservation', type: 'quiz', target: 'grp:operations-table', access: 'free', label: '○× ゲーム：群の性質は保たれる？',
        summary: '2 つの表から 10 問', yes: 'いつも成り立つ', no: '成り立たない例がある',
        tables: [
          { label: 'grp:preservation-table', mode: 'grid', q: '「{row}」は「{col}」で保たれる？', notes: 'grp:preservation-notes' },
          { label: 'grp:operations-table', mode: 'rows', q: '{row}（いつも成り立つ？）' }
        ] }
    ]
  },
  '26-real-functions/26B-functions-of-several-variables/01-multivariable-calculus/10-limit-interchange.html': {
    interactive: [
      { id: 'qz-limit-interchange', type: 'quiz', target: 'calc:interchange-table', access: 'free', label: '○× ゲーム：その交換は正しい？',
        summary: '交換定理と反例から 10 問', yes: '正しい', no: '反例がある',
        items: [
          { q: '$[0,1]$ 上で各点収束する連続関数列の極限は連続？', a: 'no', why: '$x^{n}$ は $[0,1]$ で各点収束するが、極限は $x=1$ で不連続。' },
          { q: '$[0,1]$ 上で一様収束する連続関数列の極限は連続？', a: 'yes', why: '一様収束極限は連続（極限の順序を入れ替えられる）。' },
          { q: '$[0,1]$ 上で各点収束する積分可能な関数列について $\\lim\\int f_{n}=\\int\\lim f_{n}$？', a: 'no', why: '$n\\chi_{(0,1/n]}$ は $0$ に各点収束するが、積分はいつも $1$。' },
          { q: '$[a,b]$ 上で一様収束すれば $\\lim\\int_{a}^{b}f_{n}=\\int_{a}^{b}\\lim f_{n}$？', a: 'yes', why: '有界閉区間では $\\lvert\\int(f_{n}-f)\\rvert\\le(b-a)\\|f_{n}-f\\|\\to0$。' },
          { q: '$[0,\\infty)$ 上で一様収束すれば $\\lim\\int_{0}^{\\infty}f_{n}=\\int_{0}^{\\infty}\\lim f_{n}$？', a: 'no', why: '$\\frac1n\\chi_{[0,n]}$ は一様に $0$ に収束するが積分は $1$。面積が無限遠に逃げる。' },
          { q: '有界閉区間ごとの一様収束と可積分な優関数があれば、広義積分と極限は交換できる？', a: 'yes', why: '無限遠の部分を優関数で $n$ によらず小さくできる。' },
          { q: '一様収束する微分可能な関数列の極限は微分可能で、導関数は $\\lim f_{n}\'$？', a: 'no', why: '$\\frac{\\sin nx}{n}$ は一様に $0$ に収束するが、導関数 $\\cos nx$ は収束しない。' },
          { q: '$f_{n}\'$ が一様収束し、一点で $f_{n}$ が収束すれば $(\\lim f_{n})\'=\\lim f_{n}\'$？', a: 'yes', why: '項別微分の定理。' },
          { q: '収束する級数は、項を並べ替えても和が変わらない？', a: 'no', why: '条件収束する級数は、並べ替えで任意の値に収束させられる（リーマンの再配列定理）。' },
          { q: '絶対収束する級数は、項を並べ替えても和が変わらない？', a: 'yes', why: '絶対収束級数のすべての再配列は同じ和をもつ。' },
          { q: '二重級数で、行ごとの和の和と列ごとの和の和はいつも等しい？', a: 'no', why: '$a_{mm}=1$, $a_{m,m+1}=-1$ では $0$ と $1$。絶対収束なら等しい。' },
          { q: '二つの収束級数のコーシー積はいつも収束する？', a: 'no', why: '$\\sum\\frac{(-1)^{n}}{\\sqrt{n+1}}$ の自分自身とのコーシー積は、項が $0$ に収束しない。一方が絶対収束なら収束する（メルテンス）。' },
          { q: '$\\sum c_{n}$ が収束すれば $\\lim_{x\\to1-}\\sum c_{n}x^{n}=\\sum c_{n}$？', a: 'yes', why: 'アーベルの定理。' },
          { q: '$\\lim_{x\\to1-}\\sum c_{n}x^{n}$ が存在すれば $\\sum c_{n}$ は収束する？', a: 'no', why: '$c_{n}=(-1)^{n}$ では左辺は $\\frac12$ だが $\\sum(-1)^{n}$ は発散。' },
          { q: '長方形上の連続関数の二つの累次積分は等しい？', a: 'yes', why: 'フビニの定理（連続関数は積分可能で、内側の積分も存在する）。' },
          { q: '二つの累次積分がどちらも存在すれば等しい？', a: 'no', why: '$\\frac{x^{2}-y^{2}}{(x^{2}+y^{2})^{2}}$ で $\\frac{\\pi}{4}$ と $-\\frac{\\pi}{4}$（有界でない）。' },
          { q: '2 階の偏導関数がすべて存在すれば $\\partial_{1}\\partial_{2}f=\\partial_{2}\\partial_{1}f$？', a: 'no', why: '$\\frac{xy(x^{2}-y^{2})}{x^{2}+y^{2}}$ は原点で $1$ と $-1$。連続性（シュワルツ）が要る。' },
          { q: '$C^{2}$ 級の関数では偏微分の順序を入れ替えてよい？', a: 'yes', why: 'シュワルツの定理。' },
          { q: '$f$ と $\\partial_{x}f$ が連続なら、有界閉区間上の積分を積分記号の下で微分できる？', a: 'yes', why: '積分記号下の微分の定理。' },
          { q: '$\\partial_{x}f(x,y)$ がすべての点で存在すれば $\\frac{d}{dx}\\int_{0}^{1}f\\,dy=\\int_{0}^{1}\\partial_{x}f\\,dy$？', a: 'no', why: '$\\frac{x^{3}}{y^{2}}e^{-x^{2}/y}$ では $x=0$ で左辺 $1$、右辺 $0$。' },
          { q: '至るところ微分可能な $F$ について、いつも $\\int_{a}^{b}F\'=F(b)-F(a)$（リーマン積分）？', a: 'no', why: '$x^{2}\\sin(1/x^{2})$ の導関数は有界でなく、リーマン積分可能でない。$F\'$ が積分可能なら成り立つ。' },
          { q: 'コンパクト集合上で、連続関数の単調な列が連続関数に各点収束すれば一様収束？', a: 'yes', why: 'ディニの定理。' },
          { q: '二重数列で $\\lim_{m}\\lim_{n}a_{mn}$ と $\\lim_{n}\\lim_{m}a_{mn}$ がどちらも存在すれば等しい？', a: 'no', why: '$\\frac{m}{m+n}$ では $0$ と $1$。一方の極限が一様なら等しい（ムーア–オズグッド）。' }
        ] }
    ]
  },
  // 一般位相の一覧表：○× ゲーム（問題は表から作る）
  '54-general-topology/54D-general-properties/02-property-tables/01-preservation.html': {
    interactive: [
      { id: 'qz-preservation', type: 'quiz', target: 'top:preservation-table-maps', access: 'free', label: '○× ゲーム：その性質は保たれる？',
        summary: '2 つの表から 10 問', yes: 'いつも保たれる', no: '保たれない例がある',
        tables: [
          { label: 'top:preservation-table-constructions', mode: 'grid', q: '「{row}」は「{col}」で保たれる？', notes: 'top:preservation-notes' },
          { label: 'top:preservation-table-maps', mode: 'grid', q: '「{row}」は「{col}」で保たれる？', notes: 'top:preservation-notes' }
        ] }
    ]
  },
  '54-general-topology/54D-general-properties/02-property-tables/02-operations-commute.html': {
    interactive: [
      { id: 'qz-commute', type: 'quiz', target: 'top:commute-table-constructions', access: 'free', label: '○× ゲーム：入れ替えてよい？',
        summary: '2 つの表から 10 問', yes: 'いつも成り立つ', no: '成り立たない例がある',
        tables: [
          { label: 'top:commute-table-closure', mode: 'rows', q: '{row}（等号はいつも成り立つ？）' },
          { label: 'top:commute-table-constructions', mode: 'rows', q: '{row}（いつも成り立つ？）' }
        ] }
    ]
  },
  '54-general-topology/54D-general-properties/02-property-tables/03-implication-map.html': {
    interactive: [
      { id: 'qz-implication', type: 'quiz', target: 'top:non-implication-table', access: 'free', label: '○× ゲーム：その含意は正しい？',
        summary: '含意とその逆から 10 問', yes: '正しい', no: '反例がある',
        tables: [
          { label: 'top:implication-table', mode: 'rows', q: '「{row}」をみたす空間は「{c1}」をみたす？', answer: 'yes', why: 2 }
        ],
        items: [
          { q: '「T₀」をみたす空間は「T₁」をみたす？', a: 'no', why: 'シェルピンスキー空間は $T_{0}$ だが $T_{1}$ でない。' },
          { q: '「T₁」をみたす空間は「ハウスドルフ」をみたす？', a: 'no', why: '無限集合上の補有限位相は $T_{1}$ だがハウスドルフでない。' },
          { q: '「ハウスドルフ」をみたす空間は「T₃」をみたす？', a: 'no', why: '$K$ 位相の $\\R$ はハウスドルフだが正則でない。' },
          { q: '「T₃」をみたす空間は「チコノフ」をみたす？', a: 'no', why: '正則 $T_{1}$ だが完全正則でない空間がある（構成はこのサイトでは扱わない）。' },
          { q: '「チコノフ」をみたす空間は「T₄」をみたす？', a: 'no', why: 'ニェミツキ平面・ゾルゲンフライ平面はチコノフ空間だが正規でない。' },
          { q: '「T₄」をみたす空間は「パラコンパクト」をみたす？', a: 'no', why: '$[0,\\omega_{1})$ は $T_{4}$ だが、可算コンパクトでコンパクトでないのでパラコンパクトでない。' },
          { q: '「パラコンパクト」をみたす空間は「距離化可能」をみたす？', a: 'no', why: 'ゾルゲンフライ直線はパラコンパクトだが、可分で第二可算でないので距離化可能でない。' },
          { q: '「パラコンパクト」をみたす空間は「リンデレーフ」をみたす？', a: 'no', why: '非可算な離散空間は距離化可能（したがってパラコンパクト）だが、リンデレーフでない。' },
          { q: '「可算コンパクト」をみたす空間は「コンパクト」をみたす？', a: 'no', why: '$[0,\\omega_{1})$ は可算コンパクトだがコンパクトでない。' },
          { q: '「コンパクト」をみたす空間は「点列コンパクト」をみたす？', a: 'no', why: '$\\{0,1\\}^{\\mathcal{P}(\\N)}$ はコンパクトだが点列コンパクトでない。' },
          { q: '「擬コンパクト」をみたす空間は「可算コンパクト」をみたす？', a: 'no', why: 'Ψ 空間は擬コンパクトだが可算コンパクトでない。' },
          { q: '「リンデレーフ」をみたす空間は「第二可算」をみたす？', a: 'no', why: 'ゾルゲンフライ直線はリンデレーフだが第二可算でない。' },
          { q: '「第一可算 ＋ 可分」をみたす空間は「第二可算」をみたす？', a: 'no', why: 'ゾルゲンフライ直線は第一可算で可分だが第二可算でない。' },
          { q: '「可分」をみたす空間は「リンデレーフ」をみたす？', a: 'no', why: 'ゾルゲンフライ平面は可分だがリンデレーフでない。' },
          { q: '「コンパクト ＋ ハウスドルフ」をみたす空間は「可分」をみたす？', a: 'no', why: '非可算な離散空間の一点コンパクト化はコンパクトハウスドルフだが可分でない。' },
          { q: '「連結」をみたす空間は「弧状連結」をみたす？', a: 'no', why: '位相幾何学者のサイン曲線は連結だが弧状連結でない。' },
          { q: '「弧状連結」をみたす空間は「局所連結」をみたす？', a: 'no', why: '櫛形空間は弧状連結だが局所連結でない。' },
          { q: '「T₃ ＋ リンデレーフ」をみたす空間は「距離化可能」をみたす？', a: 'no', why: 'ゾルゲンフライ直線は $T_{3}$ でリンデレーフだが距離化可能でない。' },
          { q: '「コンパクト ＋ T₁」をみたす空間は「T₄」をみたす？', a: 'no', why: '補有限位相はコンパクトで $T_{1}$ だが正規でない。ハウスドルフ性が要る。' },
          { q: '「LCH」をみたす空間は「σ コンパクト」をみたす？', a: 'no', why: '$[0,\\omega_{1})$ は LCH だがリンデレーフでないので σ コンパクトでない。' },
          { q: '「コンパクト ＋ ハウスドルフ ＋ 第一可算」をみたす空間は「距離化可能」をみたす？', a: 'no', why: '二重矢印空間はコンパクトハウスドルフで第一可算だが、第二可算でないので距離化可能でない。' },
          { q: '「距離化可能」をみたす空間は「完備距離化可能」をみたす？', a: 'no', why: '$\\mathbb{Q}$ は距離化可能だが完備距離化可能でない（孤立点のない可算空間）。' },
          { q: '「ベール空間」をみたす空間は「距離化可能」をみたす？', a: 'no', why: '$[0,\\omega_{1}]$ はコンパクトハウスドルフなのでベール空間だが、第一可算でないので距離化可能でない。' },
          { q: '「可分 ＋ 距離化可能」をみたす空間は「リンデレーフ」をみたす？', a: 'yes', why: '距離化可能空間では、第二可算・可分・リンデレーフは同値。' }
        ] }
    ]
  },
  // 分野の概要ページ（index.html）：「この分野で学ぶこと」と分野全体の動画の枠
  '54-general-topology/index.html': {
    intuition: {
      kind: 'field',
      question: 'この分野で学ぶこと',
      text: '$\\varepsilon$-$\\delta$ 論法で連続性や収束を論じるとき、実際に使っているのは距離の値そのものではなく「点 $x$ の近く」という集まり（近傍）だけである。**一般位相**は、この「近さ」だけを開集合の族として公理化し、距離のない場面でも連続・収束・極限を語れるようにする分野である。\n\n' +
        '- **位相空間の基礎**：開集合・閉包・連続写像・同相。何を「同じ形」とみなすかを決める。\n' +
        '- **位相空間の基本的な構成**：部分空間・直積・商。たとえばトーラスは、正方形の向かい合う辺を貼り合わせた商空間として作れる。\n' +
        '- **位相空間の基本的な性質**：分離公理・コンパクト性・連結性。最大値の定理や中間値の定理が成り立つ理由を、この言葉で捉え直す。\n' +
        '- **距離空間・一様空間・関数空間**：距離をもつ空間に特有の性質（完備性など）と、関数の集まりに入れる位相。\n' +
        '- **特異な空間**：直感に反する反例。図は理解を助けるが、平面の絵に引きずられると「どんな空間でも 2 点は開集合で分けられる」のような誤った思い込みが生じる。原点が二つある直線などの反例で、仮定の必要性を確かめる。',
      videoTitle: '3 分イメージ：距離から「近さ」へ'
    }
  },
  '54-general-topology/54D-general-properties/01-separation-compactness/02-compactness.html': {
    intuition: {
      question: 'なぜこの概念が必要か？',
      text: '有限集合の上の関数は必ず最大値をとり、有限個の条件は同時に満たせる。**コンパクト性**は、無限集合にもこの「有限のように振る舞う」性質を持たせるための条件である。\n\n' +
        '比喩でいえば、どんな「見張りの配置」（開被覆）を渡されても、そのうち**有限人だけ残せば全域を見張れる**空間がコンパクトである。$(0,1]$ では、$0$ に近づくほど小さくなる見張りを並べると有限人では足りない（下の 🎮 で試せる）。$[0,1]$ では点 $0$ 自身を見張る人がその周りをまとめて受け持つので、有限人で足りる。',
      videoTitle: '1 分イメージ：開被覆と有限部分被覆'
    },
    interactive: [
      { id: 'mg-cover', type: 'minigame', target: 'top:compact', access: 'free', label: '開被覆で遊ぶ：$(0,1]$ と $[0,1]$', summary: '有限個で覆えるかを試す' },
      { id: 'pz-interval', type: 'puzzle', target: 'top:interval-compact', access: 'free', summary: '6 手順' },
      { id: 'pz-heine-borel', type: 'puzzle', target: 'top:heine-borel', access: 'pro', summary: '「⇐」の 5 手順' }
    ]
  }
};
