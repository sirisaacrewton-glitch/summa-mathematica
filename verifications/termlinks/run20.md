# Term-link check

- Date: 2026-10-28, model deepseek-chat; groups checked: 311 of 311; default fits: 265; problems: 46
- Usage: 335 calls, 189774 prompt tokens (105960 cache hits), 3474 completion tokens

Each entry: the term, the series, the definition the linker chose (NG), and the first candidate that fits (fix with \term[語]{label} or a rule in tools/terms.json), or none.

## 「ノルム」 in 05-geometry-topology/04-differential-geometry/01-curves
- Default: `lin:inner-product` → **fits: `calc:norm`**
- Pages: 01-curves-frenet.html
- Sentence: - $\mathbb{R}^{n}$ の標準内積を $\langle x,y\rangle=\sum_{i}x_{i}y_{i}$、ノルムを $|x|=\langle x,x\rangle^{1/2}$ と書く（\ref{lin:inner-product}）。コーシー–シュワルツの不等式 \tref{lin:cauchy-schwarz}、グラム–シュミットの直交化 \ref{lin:gram-schmidt}。
  - `lin:inner-product`: NG — ノルムは内積から導かれる量として言及されているが、カードが定義する「内積」そのものではなく、ノルムの定義は別の概念である。
  - `comp:pi11-norm`: NG — This "ノルム" is the Euclidean norm on $\mathbb{R}^{n}$, not a function from a subset of $\N$ to ordinals.
  - `calc:norm`: OK

## 「一次独立」 in 05-geometry-topology/04-differential-geometry/01-curves
- Default: `mod:free-module` → **no candidate fits**
- Pages: 01-curves-frenet.html
- Sentence: 2. すべての $t$ で $c'(t),\dots,c^{(n-1)}(t)$ が一次独立であるとき、$c$ を**フレネ曲線**とよぶ（本サイトでの呼び名）。$n=2$ では正則曲線と同じ、$n=3$ では $c'$ と $c''$ が一次独立ということである。
  - `mod:free-module`: NG — This is linear independence of derivative vectors in differential geometry, not the module-theoretic notion defined in the card.

## 「一次結合」 in 05-geometry-topology/04-differential-geometry/01-curves
- Default: `mod:generated-submodule` → **no candidate fits**
- Pages: 01-curves-frenet.html
- Sentence: 3. 逆に $e_{k}$（$k\le n-1$）は $c',\dots,c^{(k)}$ の $C^{\infty}$ 級の関数を係数とする一次結合である。
  - `mod:generated-submodule`: NG — Here "一次結合" means a linear combination with coefficients that are smooth functions, not the finite R-linear combination of elements of a generating set defined in the card.

## 「下界」 in 05-geometry-topology/04-differential-geometry/01-curves
- Default: `calc:supremum` → **no candidate fits**
- Pages: 03-total-curvature-fenchel.html
- Sentence: > 資料：Klingenberg『A Course in Differential Geometry』第 2 章 2.4（演習 2.4.9, 2.4.10：フェンチェルの定理とその証明の筋道）。ホーンの補題（Klingenberg が R. A. Horn の論文として引用）の証明と、球面上の距離の下界の証明は、自分で書き下ろした。空間曲線の等号成立条件とファーリ–ミルナーの定理は事実として述べる。
  - `calc:supremum`: NG — Here "下界" means a lower bound for a distance on the sphere, which matches the card's definition of a lower bound in a totally ordered set.

## 「動標構」 in 05-geometry-topology/04-differential-geometry/01-curves
- Default: `surf:frenet-frame` → **no candidate fits**
- Pages: 01-curves-frenet.html
- Sentence: thrm{SO}(n)$ の曲線が初期値を除いて一意に決まる」ことと、「曲線は $E$ の第 1 行を積分して決まる」ことの組み合わせである。初期値の取り替えが右からの直交行列の掛け算、すなわち合同変換に対応する。これはリー群の中の曲線を、そのリー環の中の曲線（対数微分）から復元する話の最も簡単な場合であり、カルタンの動標構法の出発点とされる。
  - `surf:frenet-frame`: NG — 「動標構」は曲線に沿って動く標構（moving frame）を指す一般概念であり、カードが定義するフレネ標構／フレネ曲線そのものではない。

## 「単射」 in 05-geometry-topology/04-differential-geometry/01-curves
- Default: `set:injection-surjection` → **no candidate fits**
- Pages: 01-curves-frenet.html, 02-plane-curves-global.html
- Sentence: **Step 3（2）.** 【主張：$\det R=1$ なら標準フレネ標構は $(Re_{i})$ で曲率は変わらない】$(B\circ c)^{(k)}=Rc^{(k)}$。$R$ は単射なので一次独立性は保たれる。$R$ は内積を保つので $(Re_{1},\dots,Re_{n})$ は正規直交で、$\langle Re_{1},\dots,Re_{k}\rangle=R\langle c',\dots,c^{(k)}\rangle$、$\langle Re_{k},Rc^{(k)}\rangle=
  - `set:injection-surjection`: NG — Here 単射 refers to the linear map $R$ being injective (one-to-one), which is the same notion as the card's definition of injective function, so it should be ok—wait, the card defines 単射 for a function $f\colon A\to B$ via inverse relation being a function; a linear map being injective is the same notion, so this is ok.

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
  - `set:relation`: NG — Here "定義域" refers to the domain of a curve parametrization (an interval of parameter values), not the domain of a relation as a set of ordered pairs.
  - `logic:rm-continuous-code`: OK

## 「歪対称」 in 05-geometry-topology/04-differential-geometry/01-curves
- Default: `lin:bilinear-form` → **no candidate fits**
- Pages: 01-curves-frenet.html
- Sentence: 微分幾何学の最初の対象として、$\mathbb{R}^{n}$ の中の曲線を扱う。曲線の各点に、曲線の微分 $c',c'',\dots$ から決まる正規直交基底（**フレネ標構**）を立てると、その動きは歪対称で三重対角な行列で表され（**フレネ–セレの公式**）、行列の成分として**曲率**が定まる。主定理は**曲線論の基本定理**で、弧長で径数づけた曲線は、曲率の組によって向きを保つ合同変換を除いて一意に決まり、しかも曲率の組は（正値条件の下で）自由に与えられる。存在の証明には線形常微分方程式の解の存在と一意性を使うので
  - `lin:bilinear-form`: NG — Here "歪対称" describes a matrix (the Frenet frame's connection matrix), not a bilinear form as defined in the card, though it is the analogous notion.

## 「積分可能」 in 05-geometry-topology/04-differential-geometry/01-curves
- Default: `calc:riemann-integrable` → **no candidate fits**
- Pages: 01-curves-frenet.html
- Sentence: **類似の定理.** 曲面に対しては、第一基本形式・第二基本形式がガウス方程式とコダッツィ＝マイナルディ方程式をみたせば曲面が合同を除いて一意に存在するという定理（ボネの定理。\see{surf:fundamental-theorem-surfaces}）がある。曲線の場合と違い、曲面では与えるデータが積分可能条件（偏微分の順序交換）をみたす必要がある。
  - `calc:riemann-integrable`: NG — Here "積分可能条件" refers to integrability conditions (equality of mixed partials), not Riemann integrability of a function as defined in the card.

## 「距離」 in 05-geometry-topology/04-differential-geometry/01-curves
- Default: `top:metric-topology` → **no candidate fits**
- Pages: 01-curves-frenet.html, 03-total-curvature-fenchel.html
- Sentence: 1. $c(s)$ と $s=0$ での接触平面の距離は $\frac{|\kappa\tau|}{6}|s|^{3}+o(s^{3})$。
  - `top:metric-topology`: NG — Here "距離" means the distance between a curve and a plane, not a metric function on a set as defined in the card.

## 「逆像」 in 05-geometry-topology/04-differential-geometry/01-curves
- Default: `set:function` → **no candidate fits**
- Pages: 02-plane-curves-global.html
- Sentence: otation-number-properties.2}、$n_{c}=1$）。$\theta(\mathbb{R})=\mathbb{R}$ なので、$\theta(p)=\beta-\frac\pi2$ となる最小の $p$ と、$\theta(q)=\beta+\frac\pi2$ となる最大の $q$ がある（逆像は閉集合で、$\theta$ の単調性と $\theta(t\pm L)=\theta(t)\pm2\pi$ から有界）。$[p,q]$ では $\theta-\beta\in[-\frac\pi2,\frac\pi2]$ で $g'\ge0$、$[q,p+L]$ では $\theta-\beta\in[\frac\p
  - `set:function`: NG — Here "逆像" refers to the preimage of a set under the map θ, which matches the card's definition f^{-1}[D]={x∈A | f(x)∈D}.
  - `cat:inverse-image`: NG — Here "逆像" means the preimage of a set under a map, not the inverse image (pullback) of a (pre)sheaf along a morphism as defined in the card.

## 「ノルム」 in 05-geometry-topology/04-differential-geometry/02-surfaces
- Default: `lin:inner-product` → **fits: `calc:norm`**
- Pages: 04-geodesics.html
- Sentence: )-F(y)|\le\Lambda|x-y|$ となるものがある】$W$ は開なので $\bar B\subset W$ となる $r$ がある。$\bar B$ はコンパクト（\ref{top:heine-borel}）で、$|F|$ と $\|DF\|$（作用素ノルムは $M_{N}(\mathbb{R})$ 上のノルムなので連続、\ref{calc:operator-norm-properties.5}）は連続なので最大値 $M$, $\Lambda$ をとる（\ref{top:extreme-value}）。$\bar B$ は凸なので\ref{calc:mean-value-inequality} から $\Lambda$ がリ
  - `lin:inner-product`: NG — the sentence uses "ノルム" (norm) as an operator norm on matrices, whereas the card defines the norm $\|v\|=\sqrt{\langle v,v\rangle}$ induced by an inner product.
  - `comp:pi11-norm`: NG — This "ノルム" refers to an operator norm on matrices, not the norm function from a set of naturals to ordinals defined in the card.
  - `calc:norm`: OK

## 「リンデレーフ」 in 05-geometry-topology/04-differential-geometry/02-surfaces
- Default: `top:second-countable` → **no candidate fits**
- Pages: 04-geodesics.html
- Sentence: 動**が、速度ベクトルの共変微分が $0$ の曲線として**測地線**（曲面の上の「まっすぐな」曲線）が定まる。曲面上の曲線の曲率は、法線方向の**法曲率**と接平面内の**測地的曲率**に分かれ、測地線とは測地的曲率が $0$ の曲線である。測地線の存在と一意性のために、常微分方程式の解の局所存在と一意性（ピカール–リンデレーフ）をこのページで証明し、最後に**指数写像**を定める。
  - `top:second-countable`: NG — Here "リンデレーフ" refers to the Picard–Lindelöf theorem on ODE existence/uniqueness, not the Lindelöf covering property defined in the card.

## 「全曲率」 in 05-geometry-topology/04-differential-geometry/02-surfaces
- Default: `surf:total-curvature` → **no candidate fits**
- Pages: 06-gauss-bonnet-global.html
- Sentence: _{0}^{2\pi}\int_{0}^{2\pi}\cos\theta\,d\theta\,d\varphi=0$。正の部分は $|\theta|<\frac\pi2$ で $\int_{-\pi/2}^{\pi/2}\cos\theta\,d\theta\cdot2\pi=4\pi$、負の部分は $-4\pi$。（全曲率 $\pm4\pi$ は、外側半分のガウス写像が単位球面を一回覆うことに対応する。）
  - `surf:total-curvature`: NG — This refers to the total curvature of a surface (Gauss map degree, ±4π), not the total curvature of a closed curve defined in the card.

## 「定義域」 in 05-geometry-topology/04-differential-geometry/02-surfaces
- Default: `set:relation` → **no candidate fits**
- Pages: 06-gauss-bonnet-global.html
- Sentence: 向き $N$ があれば、どの点のまわりにも正の向きの局所パラメータ表示がある：$f$ の単位法ベクトル $n$ は $N\circ f$ か $-N\circ f$ で、$\langle n,N\circ f\rangle$ は連続で $\pm1$ の値をとるので、連結な定義域（たとえば円板）では一定。$-N\circ f$ なら座標 $u^{1},u^{2}$ を入れ替える（\ref{surf:reparametrization-tangent.2}）。
  - `set:relation`: NG — Here "定義域" means the domain of a parametrization (a subset of the parameter plane), not the domain of a relation as defined in the card.
  - `logic:rm-continuous-code`: NG — Here "定義域" refers to the domain of a parametrization (a subset of $\mathbb{R}^{2}$), not the domain of a continuous function $f\colon\mathrm{dom}f\subseteq\mathbb{R}\to\mathbb{R}$ as defined in the card.

## 「引き戻し」 in 05-geometry-topology/04-differential-geometry/02-surfaces
- Default: `cat:product` → **fits: `mfd:pullback`**
- Pages: 01-regular-surfaces.html
- Sentence: **高い視点.** 第一基本形式は $\mathbb{R}^{3}$ の内積を $f$ で引き戻したもの $f^{*}\langle\ ,\ \rangle$ で、各点の接平面（あるいは地図の $\mathbb{R}^{2}$）に正定値な内積を与える。このような「点ごとに滑らかに変わる内積」がリーマン計量であり、曲面論のうち第一基本形式だけで決まる部分（長さ・角・面積、そして驚異の定理によるとガウス曲率）は、空間 
  - `cat:product`: NG — Here "引き戻し" refers to pulling back an inner product via a map (pullback of a differential form/metric), not the categorical pullback (fiber product) defined in the card.
  - `mfd:pullback`: OK

## 「曲率」 in 05-geometry-topology/04-differential-geometry/02-surfaces
- Default: `surf:frenet-curvature` → **no candidate fits**
- Pages: 01-regular-surfaces.html, 02-second-fundamental-form.html, 03-theorema-egregium.html, 04-geodesics.html, 05-gauss-bonnet-local.html, 06-gauss-bonnet-global.html
- Sentence: 線を定義する。次に、曲面片を貼り合わせてできる部分集合として**正則曲面**を定め、貼り合わせの写像が自動的に滑らかになることを逆関数定理で示す。後半では、曲面の上の長さ・角・面積を測る道具である**第一基本形式**を導入する。第一基本形式は曲面の「内在的な」幾何（曲面に住む者が測れる量）の基礎であり、次のページ以降の曲率の議論、とくにガウスの驚異の定理の出発点になる。
  - `surf:frenet-curvature`: NG — Here 曲率 refers to curvature of surfaces (Gaussian curvature), not the first curvature of a Frenet curve as defined in the card.

## 「標準基底」 in 05-geometry-topology/04-differential-geometry/02-surfaces
- Default: `mod:free-module` → **no candidate fits**
- Pages: 05-gauss-bonnet-local.html
- Sentence: - $\mathbb{R}^{3}$ の正の向きの正規直交基底 $(a,b,c)$（$\det(a,b,c)=1$）については $a\times b=c$, $b\times c=a$, $c\times a=b$（標準基底を写す行列式 $1$ の直交行列 $R$ について $Ra\times Rb=R(a\times b)$、\ref{surf:second-form-invariance} の証明の計算）。
  - `mod:free-module`: NG — Here 標準基底 means the standard orthonormal basis of $\mathbb{R}^{3}$, not the standard basis $e_{i}$ of the free module $R^{(I)}$ defined in the card.

## 「次元」 in 05-geometry-topology/04-differential-geometry/02-surfaces
- Default: `lin:dimension` → **no candidate fits**
- Pages: 01-regular-surfaces.html, 03-theorema-egregium.html, 04-geodesics.html, 06-gauss-bonnet-global.html
- Sentence: {p}S=\nabla F(p)^{\perp}$】局所パラメータ表示 $f$ について $F(f(u))=a$ を微分すると、連鎖律から $\langle\nabla F(f(u)),f_{i}(u)\rangle=0$。よって $T_{p}S\subset\nabla F(p)^{\perp}$ で、両辺とも 2 次元なので等しい。
  - `lin:dimension`: NG — Here "次元" refers to the dimension of a tangent plane (a 2-dimensional manifold), not the dimension of a vector space as defined in the card.
  - `cat:trace-dimension`: NG — Here "次元" means the dimension of a manifold (2-dimensional), not the categorical dimension $\dim a$ defined via trace in the card.
  - `ring:krull-dimension`: NG — Here "次元" refers to the dimension of a tangent plane/vector space (linear algebra dimension), not the Krull dimension of a ring defined in the card.
  - `ag:dimension`: NG — Here "次元" refers to the dimension of a tangent plane as a vector space (2-dimensional), not the dimension of a topological space defined via chains of irreducible closed subsets.

## 「符号付き曲率」 in 05-geometry-topology/04-differential-geometry/02-surfaces
- Default: `surf:signed-curvature` → **no candidate fits**
- Pages: 02-second-fundamental-form.html, 04-geodesics.html, 05-gauss-bonnet-local.html
- Sentence:  $(\rho(t),z(t))$（$\rho>0$）が弧長で径数づけられている（$\rho'^{2}+z'^{2}=1$）回転面 $f(t,\varphi)=(\rho\cos\varphi,\rho\sin\varphi,z)$ について、座標方向は主方向で、主曲率は $\rho'z''-\rho''z'$（母線の符号付き曲率）と $z'/\rho$、ガウス曲率は $K=-\rho''/\rho$。
  - `surf:signed-curvature`: NG — the card defines signed curvature of a plane curve, but the sentence uses it for the curvature of a meridian curve in a surface context, which is a different notion.

## 「線形写像」 in 05-geometry-topology/04-differential-geometry/02-surfaces
- Default: `mod:submodule-homomorphism` → **no candidate fits**
- Pages: 02-second-fundamental-form.html, 04-geodesics.html, 05-gauss-bonnet-local.html
- Sentence: 2. 線形写像 $\mathcal{S}_{u}\colon T_{u}f\to T_{u}f$ を $\mathcal{S}_{u}(f_{i}(u))\defeq-n_{i}(u)$（$i=1,2$）で定め、**形作用素**（ワインガルテン写像）という。すなわち $\mathcal{S}_{u}=-Dn(u)\circ Df(u
  - `mod:submodule-homomorphism`: NG — Here "線形写像" refers to a linear map between tangent spaces in differential geometry, not specifically an R-module homomorphism as defined in the card.

## 「速さ」 in 05-geometry-topology/04-differential-geometry/02-surfaces
- Default: `surf:regular-curve` → **no candidate fits**
- Pages: 02-second-fundamental-form.html, 04-geodesics.html
- Sentence: \perp}=T_{u}f$ を同一視して見たものである。ガウス曲率はその行列式なので、\ref{surf:gauss-map-area} のとおり「ガウス写像が面積を何倍にするか（向きも込めて）」を表す。曲線で曲率が接ベクトルの写像（\ref{surf:page-plane-curves-global} の回転数）の速さだったことの、曲面での類似である。
  - `surf:regular-curve`: NG — Here "速さ" refers to the speed of a map of tangent vectors (the derivative of the tangent map), not the speed |c'(t)| of a regular curve as defined in the card.

## 「速度ベクトル」 in 05-geometry-topology/04-differential-geometry/02-surfaces
- Default: `surf:regular-curve` → **fits: `mfd:velocity`**
- Pages: 01-regular-surfaces.html, 03-theorema-egregium.html, 04-geodesics.html
- Sentence: 曲面片とは、平面の地図の上の各点を空間の点に対応させた、折れ目もつぶれもない滑らかな曲面のことである。各点で座標の二方向の速度ベクトルが張る平面が接平面で、それに垂直な長さ 1 のベクトルが単位法ベクトルである。
  - `surf:regular-curve`: NG — This use refers to the velocity vectors of a surface parametrization (partial derivatives), not the velocity vector \(c'(t)\) of a regular curve as defined in the card.
  - `mfd:velocity`: OK

## 「連結成分」 in 05-geometry-topology/04-differential-geometry/02-surfaces
- Default: `top:components` → **no candidate fits**
- Pages: 02-second-fundamental-form.html
- Sentence: **1.** $\tilde n=\varepsilon\,n\circ\phi$（\ref{surf:reparametrization-tangent.2}。$\varepsilon$ は $V$ の連結成分ごとに一定だが、点ごとの式なので問題ない）。$\tilde n_{i}=\varepsilon\sum_{k}\frac{\partial u^{k}}{\partial v^{i}}n_{k}$、$\tilde f_{j}=\sum_{l}\frac{\partial u^{l}}{\partial v^{j}}f_
  - `top:components`: NG — Here "連結成分" refers to a connected component of the parameter domain $V$ in a differential-geometry/reparametrization context, not the topological connected component defined in the card (the sum of all connected sets containing a point).

## 「面積要素」 in 05-geometry-topology/04-differential-geometry/02-surfaces
- Default: `vec:k-area` → **no candidate fits**
- Pages: 01-regular-surfaces.html, 05-gauss-bonnet-local.html, 06-gauss-bonnet-global.html
- Sentence: 3. **球面**（緯度・経度）：$\rho=r\cos\theta$, $z=r\sin\theta$ なので $E=r^{2}$, $F=0$, $G=r^{2}\cos^{2}\theta$。面積要素は $r^{2}\cos\theta\,d\theta\,d\varphi$ で、$\int_{0}^{2\pi}\int_{-\pi/2}^{\pi/2}r^{2}\cos\theta\,d\theta\,d\varphi=4\pi r^{2}$（境界で正則でない点は測度 $0$ で、面積の値は \ref{vec:k
  - `vec:k-area`: NG — The card defines the $k$-dimensional area (the integral itself), while "面積要素" refers to the area element (the integrand factor), which is a different notion.

## 「イデアル」 in 05-geometry-topology/04-differential-geometry/03-manifolds
- Default: `ring:ideal` → **no candidate fits**
- Pages: 01-smooth-manifolds.html
- Sentence: ty}$ 級であること**：Step 2 でアダマールの補題を使い、係数 $h_{i}$ が再び滑らか（したがって芽として $v$ を施せる）であることに使った。$C^{k}$ 級（$k<\infty$）の多様体で同じように導分を定義すると、この議論は通らない。実際、$m$ で $0$ になる $C^{k}$ 級の芽のイデアル $\mathfrak{m}$ について $\mathfrak{m}/\mathfrak{m}^{2}$ は無限次元になることが知られており（Warner §1.21 が文献を挙げている）、下の補足の同型 $T_{m}M\cong(\mathfrak{m}/\mathfrak{m}^{2})^{*}$ は $C^{k}
  - `ring:ideal`: NG — This use of イデアル refers to an ideal in a ring of C^k germs, which matches the definition of an ideal in a commutative ring.
  - `set:ideal`: NG — This is the ideal $\mathfrak{m}$ of germs vanishing at a point in a ring of functions, not an ideal of subsets of a set as defined in the card.
  - `ag:algebraic-set`: NG — Here "イデアル" means the ideal $\mathfrak{m}$ of smooth germs vanishing at $0$ in a ring of functions, not the vanishing ideal $I(Y)$ of a subset of $k^{n}$ as defined in the card.

## 「上界」 in 05-geometry-topology/04-differential-geometry/03-manifolds
- Default: `set:chain-maximal` → **no candidate fits**
- Pages: 04-integration-stokes.html
- Sentence: \varepsilon})\omega$ の台はコンパクトで $U$ に含まれるので、その積分は $\int_{\varphi(U)}(1-h_{\varepsilon}\circ\varphi^{-1})g$。$\int_{M}h_{\varepsilon}\omega$ の絶対値は、$\psi$ による表示の係数の上界 $C$ を使って $C\cdot v(B(0,2\varepsilon))\to0$（$\varepsilon\to0$）。また $\int_{\varphi(U)}(1-h_{\varepsilon}\circ\varphi^{-1})g$ は、$\varepsilon\to0$ で広義積分 $\int_{\var
  - `set:chain-maximal`: NG — Here "上界" means an upper bound for the coefficients in a local coordinate representation, not an upper bound of a subset in a partially ordered set as defined in the card.

## 「基底」 in 05-geometry-topology/04-differential-geometry/03-manifolds
- Default: `mod:free-module` → **no candidate fits**
- Pages: 01-smooth-manifolds.html, 02-partitions-submanifolds.html, 03-forms-on-manifolds.html, 04-integration-stokes.html
- Sentence: - 本ページは Warner『Foundations of Differentiable Manifolds and Lie Groups』第 1 章の前半を参考にした。接ベクトルを関数の芽の上の導分として定義する流儀は同書に従い、基底の存在の証明は、芽の剰余環 $\mathfrak{m}/\mathfrak{m}^{2}$ を経由せずに直接示す形にした。
  - `mod:free-module`: NG — Here "基底" refers to a basis of a vector space/module of derivations (a spanning independent set), which matches the module-theoretic definition of a basis as an independent generating set.
  - `grp:free-abelian`: NG — Here 基底 refers to a basis of a tangent space (a vector-space basis), not a basis of a free abelian group as defined in the card.

## 「定義域」 in 05-geometry-topology/04-differential-geometry/03-manifolds
- Default: `set:relation` → **no candidate fits**
- Pages: 01-smooth-manifolds.html, 02-partitions-submanifolds.html, 04-integration-stokes.html
- Sentence: （定義域はそれぞれ $S^{d}\setminus\{N\}$, $S^{d}\setminus\{S\}$）からなるアトラスで $d$ 次元の可微分多様体になる。
  - `set:relation`: NG — Here "定義域" refers to the domain of coordinate charts (open subsets of the sphere), not the domain of a relation as a set of ordered pairs.
  - `logic:rm-continuous-code`: NG — Here "定義域" refers to the domain of a chart/coordinate map on a manifold, not the domain of a continuous function as defined in the card.

## 「導関数」 in 05-geometry-topology/04-differential-geometry/03-manifolds
- Default: `calc:derivative` → **no candidate fits**
- Pages: 01-smooth-manifolds.html, 03-forms-on-manifolds.html, 04-integration-stokes.html
- Sentence: **Step 1（滑らかさは局所的）.** 【主張：$\mathbb{R}^{d}$ の開集合 $W$ 上の写像 $h$ が、$W$ の各点の開近傍の上で $C^{\infty}$ 級なら、$h$ は $W$ 上で $C^{\infty}$ 級である】偏導関数の存在と連続性は各点の近傍だけで決まるから（\ref{calc:ck-map}）。
  - `calc:derivative`: NG — Here "導関数" refers to partial derivatives of a map on an open set in $\mathbb{R}^{d}$, not the derivative function of a single-variable function as defined in the card.
  - `cx:holomorphic`: NG — This sentence uses 導関数 only implicitly in the context of partial derivatives of a real map, not the complex derivative of a holomorphic function defined in the card.

## 「局所表示」 in 05-geometry-topology/04-differential-geometry/03-manifolds
- Default: `mfd:local-representative` → **fits: `mfd:smooth-map`**
- Pages: 03-forms-on-manifolds.html
- Sentence: **1.** $\varphi^{-1}$ の局所表示は恒等写像なので、\ref{mfd:differential-properties.3} から $d(\varphi^{-1})_{a}(e_{j})=\left.\partial/\partial x_{j}\right|_{m}$。両辺は $w$ について交代多重線形なので、$w=(e_{j_{1}},\dots,
  - `mfd:local-representative`: NG — Here "局所表示" refers to the local representation of the map $\varphi^{-1}$ (a local coordinate expression of a map), not the local representation of a differential form $\omega$ as defined in the card.
  - `mfd:smooth-map`: OK

## 「平行」 in 05-geometry-topology/04-differential-geometry/03-manifolds
- Default: `surf:parallel` → **no candidate fits**
- Pages: 02-partitions-submanifolds.html
- Sentence: **Step 1（はめ込み）.** 【主張：1 の座標近傍がとれる】\ref{calc:constant-rank-theorem} の最後の主張（$Df$ が単射なら $\alpha$ は平行移動にとれ、階数一定は自動）から、$0$ を含む開集合 $V'$ と、$b$ を含む開集合 $W$ 上の $C^{\infty}$ 微分同相写像 $\beta\colon W\to\beta(W)$ があって、$V'$ 上で $\beta\circ H(x)=(x,0)$（$\alpha(0)=0$ なので $\alp
  - `surf:parallel`: NG — Here "平行移動" means a translation (parallel shift) of coordinates, not a vector field being parallel along a curve.

## 「引き戻し」 in 05-geometry-topology/04-differential-geometry/03-manifolds
- Default: `cat:product` → **fits: `mfd:pullback`**
- Pages: 01-smooth-manifolds.html
- Sentence: 写像の微分とは、出発点での「微分する方向」を、写像で行き先へ運ぶ操作である。行き先の関数を微分するには、写像で引き戻してから元の方向に微分すればよい。
  - `cat:product`: NG — Here "引き戻し" refers to pulling back a function along a map (precomposition), not the categorical fiber product/pullback defined in the card.
  - `mfd:pullback`: OK

## 「微分」 in 05-geometry-topology/04-differential-geometry/03-manifolds
- Default: `mfd:cotangent-space` → **no candidate fits**
- Pages: 01-smooth-manifolds.html, 02-partitions-submanifolds.html, 03-forms-on-manifolds.html, 04-integration-stokes.html
- Sentence: 面も $\mathbb{R}^{3}$ の部分空間として定義した。このページでは、外側の空間を使わずに「各点のまわりが $\mathbb{R}^{d}$ の開集合と滑らかに同一視できる空間」を定義する。これが**可微分多様体**である。外側の空間がないので、接ベクトルを矢印として描くことはできない。代わりに「関数を方向微分する操作」として接ベクトルを定義し（**導分**）、接空間が座標の数と同じ次元のベクトル空間になることを示す。最後に、滑らかな写像の**微分**を定義し、多変数の微分積分の連鎖律がそのまま多様体に移ることを確かめる。
  - `mfd:cotangent-space`: NG — Here "微分" refers to the differential of a smooth map between manifolds, not the differential $df_{m}$ of a smooth function defined on a manifold as in the card.

## 「推移律」 in 05-geometry-topology/04-differential-geometry/03-manifolds
- Default: `set:total-order` → **no candidate fits**
- Pages: 01-smooth-manifolds.html
- Sentence: $\sim$ が同値関係であること（推移律は、二つの開集合の共通部分をとる）と、和・実数倍・積を共通の定義域の上で定めると $C^{\infty}_{m}$ が $\mathbb{R}$ 上の可換な多元環になること、値 $f(m)$ が代表元によらずに定まることは、定義からすぐ確かめられる（積が滑らかなことは \ref{mfd:smooth-map-crite
  - `set:total-order`: NG — In the card, 推移律 is the transitivity condition for a partial order, but here it refers to transitivity of an equivalence relation, a different notion.
  - `set:forcing-poset`: NG — 推移律 here refers to transitivity of an equivalence relation, not the transitivity condition in the definition of a partial order.

## 「次元」 in 05-geometry-topology/04-differential-geometry/03-manifolds
- Default: `lin:dimension` → **no candidate fits**
- Pages: 01-smooth-manifolds.html, 02-partitions-submanifolds.html, 03-forms-on-manifolds.html, 04-integration-stokes.html
- Sentence: は、外側の空間を使わずに「各点のまわりが $\mathbb{R}^{d}$ の開集合と滑らかに同一視できる空間」を定義する。これが**可微分多様体**である。外側の空間がないので、接ベクトルを矢印として描くことはできない。代わりに「関数を方向微分する操作」として接ベクトルを定義し（**導分**）、接空間が座標の数と同じ次元のベクトル空間になることを示す。最後に、滑らかな写像の**微分**を定義し、多変数の微分積分の連鎖律がそのまま多様体に移ることを確かめる。
  - `lin:dimension`: NG — Here "次元" refers to the dimension of a tangent vector space (a manifold's local dimension), which is the same linear-algebra notion of dimension defined by the card.
  - `cat:trace-dimension`: NG — Here "次元" means the dimension of a manifold (number of coordinates), not the categorical dimension $\dim a=\operatorname{tr}(1_{a})$ defined in the card.
  - `ring:krull-dimension`: NG — This "次元" refers to the dimension of a manifold (coordinate count), not the Krull dimension of a ring defined in the card.
  - `ag:dimension`: NG — Here "次元" refers to the dimension of a manifold (locally like $\mathbb{R}^{d}$), not the dimension of a topological space defined via chains of irreducible closed subsets.

## 「直積」 in 05-geometry-topology/04-differential-geometry/03-manifolds
- Default: `grp:direct-product` → **fits: `set:cartesian-product`**
- Pages: 01-smooth-manifolds.html
- Sentence: **Step 1（部分空間と直積）.** 【主張：ハウスドルフかつ第二可算な空間の部分空間と、二つの直積は、ハウスドルフかつ第二可算】ハウスドルフ性は \ref{top:hausdorff-properties.1}。$\mathcal{B}$ が $X$ の可算な開基なら $\{B\cap A:B\in\mathcal{B}\}$ は部分空間 $A
  - `grp:direct-product`: NG — This use of 直積 refers to the product of topological spaces, not the direct product of groups defined in the card.
  - `set:cartesian-product`: OK

## 「直積空間」 in 05-geometry-topology/04-differential-geometry/03-manifolds
- Default: `top:product-topology` → **no candidate fits**
- Pages: 01-smooth-manifolds.html
- Sentence: 5. $d_{1}$ 次元の $M_{1}$ と $d_{2}$ 次元の $M_{2}$ の直積空間 $M_{1}\times M_{2}$ は、$\{(U\times V,\varphi\times\psi)\}$（$(U,\varphi)$, $(V,\psi)$ はそれぞれ $M_{1}$, $M_{2}$ の座標近傍）をアトラスとして $d_{1}+d_{2}$ 次元の可微分多様体になる（**積多様体**）。
  - `top:product-topology`: NG — Here "直積空間" refers to the product of smooth manifolds with the product manifold structure, not the product topology on a family of topological spaces as defined in the card.

## 「計量」 in 05-geometry-topology/04-differential-geometry/03-manifolds
- Default: `surf:first-fundamental-form` → **no candidate fits**
- Pages: 02-partitions-submanifolds.html, 03-forms-on-manifolds.html
- Sentence: 可微分多様体の上で大域的な対象（関数・計量・積分）を作るときは、座標近傍の上で作ったものを貼り合わせる。そのための道具が**滑らかな 1 の分割**で、ここでハウスドルフ性と第二可算性が初めて効いてくる。後半では、多変数の微分積分の逆関数定理と階数定理を多様体に移し、**はめ込み**・**沈め込み**の局所的な標準形を得る。その帰結として、**正則値定理**（
  - `surf:first-fundamental-form`: NG — Here “計量” refers to a global metric (Riemannian metric) on a differentiable manifold, not specifically the first fundamental form of a surface patch as defined in the card.

## 「距離」 in 05-geometry-topology/04-differential-geometry/03-manifolds
- Default: `top:metric-topology` → **no candidate fits**
- Pages: 04-integration-stokes.html
- Sentence: 可測な $E$ で、$\tau^{-1}(K)\cap S\subset E\subset O\cap S$ となるものがある】$L\defeq\tau^{-1}(K)$ はコンパクトで $O$ に含まれるので、$\delta>0$ を $L$ の各点から $\mathbb{R}^{n}\setminus O$ までの距離の最小値より小さく、かつ $\delta\sqrt{n}$ もそれより小さくとる（$O=\mathbb{R}^{n}$ なら任意）。$\delta\mathbb{Z}^{n}$ を頂点とする一辺 $\delta$ の閉立方体のうち $L$ と交わるもの（有限個）の和を $E_{0}$ とし、$E\defeq E_{0}
  - `top:metric-topology`: NG — Here "距離" means the distance from a point to a set (an infimum value), not a metric function on $X\times X$ as defined in the card.

## 「速さ」 in 05-geometry-topology/04-differential-geometry/03-manifolds
- Default: `surf:regular-curve` → **no candidate fits**
- Pages: 01-smooth-manifolds.html
- Sentence: 曲線の速度ベクトルとは、関数を曲線に沿って眺めたときの変化の速さを測る操作である。
  - `surf:regular-curve`: NG — Here "速さ" means the rate of change of a function along the curve, not the norm of the velocity vector |c'(t)| as defined in the card.

## 「重積分」 in 05-geometry-topology/04-differential-geometry/03-manifolds
- Default: `calc:box-integral` → **no candidate fits**
- Pages: 04-integration-stokes.html
- Sentence: $\mathbb{R}^{n}$ の開集合の上では、$n$ 形式 $f\,dr_{1}\wedge\cdots\wedge dr_{n}$ の積分を $f$ の重積分として定義でき、座標を取り替えると変数変換公式のヤコビアン $\det D\tau$ が現れる（\ref{calc:pullback-properties.5}）。重積分の変数変換では $|\det D\tau|$ が現れるので、二つが一致するのは $\det D\tau>0$ のときである。このため、多様体の上で $
  - `calc:box-integral`: NG — In the sentence, 重積分 refers to the integral of an \(n\)-form on an open set in \(\mathbb{R}^{n}\) (a differential-form integral), not the Riemann integral over a box \(R\) defined in the card.

## 「開被覆」 in 05-geometry-topology/04-differential-geometry/03-manifolds
- Default: `top:compact` → **no candidate fits**
- Pages: 02-partitions-submanifolds.html, 04-integration-stokes.html
- Sentence: 可微分多様体 $M$ の開被覆 $(U_{\alpha})_{\alpha\in A}$ について、次が成り立つ。
  - `top:compact`: NG — 「開被覆」は定義カード内でコンパクト性を定義するために使われている用語であり、カードが定義しているのは「コンパクト」と「有限交叉性」であって開被覆そのものの定義ではない。

## 「非退化」 in 05-geometry-topology/04-differential-geometry/03-manifolds
- Default: `lin:bilinear-form` → **no candidate fits**
- Pages: 04-integration-stokes.html
- Sentence: **ポアンカレ双対性との関係.** コンパクトで向きづけられた連結な $n$ 次元多様体では $\int_{M}\colon H^{n}(M)\to\mathbb{R}$ は同型で、外積と積分による $H^{k}(M)\times H^{n-k}(M)\to\mathbb{R}$ は非退化であることが知られている（**ポアンカレ双対性**のド・ラーム版）。特異ホモロジーでの形は \see{at:page-orientation}。
  - `lin:bilinear-form`: NG — Here "非退化" describes a pairing between cohomology groups being nondegenerate, not a bilinear form $B:V\times V\to k$ with $B^{\flat}$ an isomorphism as defined in the card.

