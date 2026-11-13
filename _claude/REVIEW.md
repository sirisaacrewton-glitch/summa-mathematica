# 見直しの記録（2026-11-13 開始）

ページごとの「見直し」（Claude が証明を最初から読み直し、次の 5 点を片づけたこと）の記録。PROGRESS の「完了」は「書いた」の意味で、ここに行があるものだけが「見直し済み」。

## 1 ページの見直しでやること
1. **論理**：主張・証明・hypcheck・補足・問題の解答を読み、誤り・飛躍・仮定の不足・循環・強すぎる定理を直す。直したものは「修正」欄に一行ずつ。
2. **検証記録**：`verifications/<パス>_tracker.md` があれば、`[Open]` の指摘を一つずつ確かめ、正しいものは直し、誤検出なら ISSUE の末尾に `**Opus Rebuttal:** 理由（英語）` を書く。
3. **【主張】**：Step が 3 つ以上の主要な定理の証明で、`【主張：…】` のない Step に主張を付ける（START.md の「ステップの主張」の規則）。
4. **用語リンク**：ページの中で自動で結ばれた定義語のリンク先が、文脈の意味と合っているかを確かめ、合わないものは `\term[語]{ラベル}` か `tools/terms.json` で直す。
5. **台帳**：`_claude/UNPROVED.md` のそのページの項目のうち、A 区分（本文が依存）はすべて証明を足す。B 区分は数行〜1 ページで済むものだけ証明を足し、重いものは「別ページ候補」として残す。証明した項目は台帳の行に「済（日付）」を書く。

## 記録の形式（1 ページ 1 行）
| ページ | 見直し日 | 論理の修正 | 検証記録（Open→処理） | 【主張】を付けた数 | 用語リンク | 台帳（証明した／残した） | メモ |

## 記録
| ページ | 見直し日 | 論理の修正 | 検証記録 | 【主張】 | 用語リンク | 台帳 | メモ |
|---|---|---|---|---|---|---|---|
| 04-analysis/06-harmonic-analysis/03-real-variable/01-interpolation.html | 2026-11-13 | 層の公式の可測性を確率の系列（prb:tail-formula）に頼らず直接書いた／リース–ソーリン Step 1 の $Tf\in L^{q}$ の確認を補い、$M_{i}=0$ の場合も注記／ヤングの不等式：場合の条件を「$1<p<\infty$」に直し、稠密性の議論を単調収束に替えて延長が $f*g$ と一致することを示した／問題（円周のハウスドルフ–ヤング）の解答に単関数から $L^{p}$ への延長（ファトゥ）を補った／三線定理 Step 3 の $\varepsilon\to0$ を明示／ページ末の hypcheck を各証明の中へ移した | なし | 7（三線 3、リース–ソーリン 4）。直感 3 | 「実解析的」の誤リンク（文言変更）／「有界」→ fa:bounded-operator／「双対群」→ four:lc-character／「リンデレーフ」は規則で対処（top:second-countable を xfDeny） | 証明：IP4、IP9／残：IP1・2・3・5・6・7（B）、IP8・10（C） | A なし |
| 04-analysis/06-harmonic-analysis/03-real-variable/02-maximal-functions.html | 2026-11-13 | 補足の「縦横比が崩れる長方形」とサックスの例の混同を、ルベーグ点での失敗の具体例（平均が $\frac13$ にとどまる）を示して書き直した | なし | 1（four:approximate-identity-ae Step 5） | 誤りなし | 証明：MF4 のうち強極大関数の $L^{p}$ 有界性／残：MF4 の残り・MF3・8・9（C）、MF1・2・5・6・7（B） | |
| 04-analysis/06-harmonic-analysis/03-real-variable/03-poisson-fejer.html | 2026-11-13 | 記法の項の写し残り（2 進立方体の一文）を削除／PF4 の正値調和関数の表示に $\mu$ の条件 $\int(1+\vert y\vert)^{-n-1}d\mu<\infty$ を補った | なし | 0（既に全部あり）。直感 2 | 「ノルム」→ fa:normed-space／「ポアソン積分」（円板）→ cx:poisson-kernel | 証明：なし（PF4 は注記のみ）／残：PF1・2・3・5・7（B）、PF4・6（C） | 計算はすべて合っていた |
| 04-hilbert-transform | 2026-11-13 | 1 件（four:ht-l1-extension の Step 4 で測度収束の根拠が抜けていたのを補った） | 記録なし | 0 | 2 種（「実解析的な証明」の誤リンクを文言で解消、局所可積分 2 か所を \term） | 残：HT1〜HT8 | 38,225 字（もとから 35,000 字超） |
| 04-analysis/06-harmonic-analysis/03-real-variable/04-hilbert-transform.html | 2026-11-13 | 1 件（four:ht-l1-extension の Step 4 で測度収束の根拠が抜けていたのを補った） | 記録なし | 0 | 2 種（「実解析的な証明」の誤リンクを文言で解消、局所可積分 2 か所を \term） | 残：HT1〜HT8 | 38,225 字（もとから 35,000 字超） |
| 04-analysis/06-harmonic-analysis/03-real-variable/05-conjugate-function.html | 2026-11-13 | 0 件 | 記録なし | 0 | 局所可積分を \term。「基底」は規則で対応 | 残：CJ1〜CJ9 | 16,173 字 |
| 04-analysis/06-harmonic-analysis/03-real-variable/06-singular-integrals.html | 2026-11-13 | 1 件（CZ 評価の hypcheck「p=1,∞ で成り立たない」は n=1 では偽 → n≥2 に限定） | 記録なし | 新命題に 4 | 2 か所 \term（2 進立方体・ノルム）、直感の位置 1 | 済：SI10（four:si-cz-endpoint、p=1 と p=∞ の反例）、SI11／残：SI1〜9, SI12 | 37,533 字 |
| 04-analysis/06-harmonic-analysis/03-real-variable/07-multipliers-lp.html | 2026-11-13 | 2 件（ミフリンの Step 5 で A_p が A に比例することの省略を補った／Step 2 の主張の書式） | 記録なし | 1 | 4 か所に \term（全変動・双対空間・導関数・下半連続は 08） | 済：ML4（チャープとガウス関数の反例）、ML10（Sf∉L¹）／残：ML1〜3, 5〜9, 11〜15 | 32,816 字 |
| 04-analysis/06-harmonic-analysis/03-real-variable/08-fractional-integration.html | 2026-11-13 | 0 件（定数・ヘドベリ・HLS 弱型・ベッセル核を再計算） | 記録なし | 0 | 1 か所に \term（下半連続） | 残：FI1〜FI8 | 29,695 字 |
| 04-analysis/06-harmonic-analysis/03-real-variable/09-exercises.html | 2026-11-13 | 0 件（全解答をたどった） | 記録なし | 書式 1 | 誤りなし | 残：EX1（D）、EX2（C） | 41,975 字（もとから 35,000 字超） |
