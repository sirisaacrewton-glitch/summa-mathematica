# Verification tracker: `01-foundations/04-set-theory/01-basics/07-cardinals.html`

<!-- source: 01-foundations/04-set-theory/01-basics/07-cardinals.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 7 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page's main proofs (Schröder–Bernstein, cardinality properties, pigeonhole principle, finite set properties) are logically sound and the cited labels are used correctly. The genuine problems are concentrated in the supplements and examples: the justification of the cardinality definition contains a reversed/meaningless sentence, the surjection-counterexample in the Schröder–Bernstein supplement uses a surjection $\mathcal{P}(\omega)\to\omega_{1}$ that cannot exist in the very model invoked, the Dedekind-finite supplement's description of the shift map is incomplete, the example citing Hessemberg's theorem for $\omega+\omega$ is not supported, and the $H(\omega_{1})$ claim overstates which axioms it satisfies (replacement fails). These are all fixable by rewording; no proof-level gaps were found.

## Issues

### ISSUE-0001 [Open] 誤った「最小元より大きい」という正当化
- **Category:** Supplement/remark error
- **Location:** set:cardinality supplement「定義が正当であること」
- **Detail:** 「$\beta\approx A$ かつ $\beta>\alpha_{0}$ なる $\beta$ は、最小元より大きい」という文は無意味/誤りである。$\beta>\alpha_{0}$ なる $\beta$ が $\{\beta\in\alpha_{0}+1\mid\beta\approx A\}$ の最小元より大きいことは自明ではなく、実際には $\alpha_{0}$ がその集合の最小元であることから従う（$\beta>\alpha_{0}$ なら $\beta\ge\alpha_{0}$）。議論の筋（$\alpha_{0}+1$ 内の最小元がクラス全体の最小元）は正しいが、この一文は論理的に逆で、根拠になっていない。
- **Proposed fix:** Replace with: "$\beta\approx A$ かつ $\beta>\alpha_{0}$ なら $\beta\ge\alpha_{0}$ であり、$\alpha_{0}$ 自身が $\beta\approx A$ を満たすので、$\{\beta\in\alpha_{0}+1\mid\beta\approx A\}$ の最小元は $\alpha\approx A$ となる順序数全体の最小元でもある。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] 全射版の反例の記述が不正確
- **Category:** Supplement/remark error
- **Location:** set:schroder-bernstein supplement「前提を変えると」全射の場合
- **Detail:** 「$\mathcal{P}(\omega)\approx\mathcal{P}(\omega)\times 2$ と、$\ZF$ で作れる全射 $\mathcal{P}(\omega)\to\omega_{1}$ を使う」とあるが、$\omega_{1}$ から $\mathcal{P}(\omega)$ への単射が存在しないモデルでは、そもそも全射 $\mathcal{P}(\omega)\to\omega_{1}$ が存在しない（全射があれば選択公理なしで $\omega_{1}\preccurlyeq\mathcal{P}(\omega)$ の単射が得られる）。したがってこの構成は成立せず、反例の説明として誤り。$B$ への全射は $\mathcal{P}(\omega)\times\{0\}\cup\omega_{1}\times\{1\}\to\omega_{1}$ を第2成分への射影で作るべきで、$\mathcal{P}(\omega)\to\omega_{1}$ への全射は不要かつ不可能。
- **Proposed fix:** Replace the parenthetical with: "（$B\to\omega_{1}$ は第2成分への射影 $\mathcal{P}(\omega)\times\{0\}\cup\omega_{1}\times\{1\}\to\omega_{1}$ が全射、$A\to B$ は $x\mapsto(x,0)$ が全射、$B\to A$ は第1成分への射影が全射）".
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] 「$\omega_{1}$ から $\mathcal{P}(\omega)$ への単射が存在しない」モデルの仮定が過剰/不正確
- **Category:** Supplement/remark error
- **Location:** set:schroder-bernstein supplement「前提を変えると」全射の場合
- **Detail:** 反例に必要なのは「$\omega_{1}\preccurlyeq\mathcal{P}(\omega)$ の単射が存在しない」こと（すなわち $\omega_{1}\not\preccurlyeq\mathcal{P}(\omega)$）であり、これは到達不能基数の存在を仮定しなくても（例えば $\omega_{1}$ が特異基数となるモデルなど）成り立ちうる。また「到達不能基数の存在が無矛盾ならば存在する」という帰属は、引用先の補足に依存するが、ここでの主張としては過大な仮定を課しており、反例の必要十分な条件を述べていない。
- **Proposed fix:** Replace with: "$\omega_{1}\not\preccurlyeq\mathcal{P}(\omega)$ が成り立つ $\ZF$ のモデル（例えば $\omega_{1}$ が可算和で表されるモデル）では…"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] 「$\omega$ の像の上でずらせば」の記述が不正確
- **Category:** Supplement/remark error
- **Location:** set:finite-basic supplement「デデキント有限」
- **Detail:** 「$\lvert A\rvert\ge\omega$ なら $\omega\preccurlyeq A$ で、$\omega$ の像の上で $n\mapsto n+1$ とずらせば真部分集合への全単射が作れる」とあるが、$\omega\preccurlyeq A$ から得られる単射 $i\colon\omega\to A$ の像 $i[\omega]$ 上で $i(n)\mapsto i(n+1)$ とずらし、$A\setminus i[\omega]$ 上では恒等とすることで初めて $A$ から真部分集合への全単射になる。像の上だけでずらすと $A$ 全体の写像にならず、記述が不完全。
- **Proposed fix:** Replace with: "$\omega\preccurlyeq A$ なら単射 $i\colon\omega\to A$ をとり、$i(n)\mapsto i(n+1)$（$n\in\omega$）、$x\mapsto x$（$x\in A\setminus i[\omega]$）と定めれば、$A$ から真部分集合 $A\setminus\{i(0)\}$ への全単射が得られる。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0005 [Open] 「$\omega+\omega$ や $\omega\cdot\omega$ も $\omega$ と対等」の根拠が不適切
- **Category:** Supplement/remark error
- **Location:** set:cardinal example 第1項目
- **Detail:** 「$\omega+\omega$ や $\omega\cdot\omega$ も $\omega$ と対等で、基数ではない（\ref{set:kappa-times-kappa} を参照）」とあるが、\ref{set:kappa-times-kappa}（ヘッセンベルクの定理）は基数 $\kappa$ について $\kappa\times\kappa\approx\kappa$ を述べるもので、$\omega+\omega$ や $\omega\cdot\omega$ が $\omega$ と対等であることの直接の根拠にはならない（$\omega\cdot\omega$ は $\omega\times\omega$ の順序型で、ヘッセンベルクの定理を $\kappa=\omega$ に適用すれば $\omega\times\omega\approx\omega$ は言えるが、$\omega+\omega$ については別途議論が必要）。引用が主張を支えていない。
- **Proposed fix:** Replace with: "同様に $\omega+\omega$ や $\omega\cdot\omega$ も $\omega$ と対等で基数ではない（$\omega\cdot\omega$ は $\omega\times\omega$ の順序型であり、$\omega$ が基数であることと \ref{set:kappa-times-kappa} から $\omega\times\omega\approx\omega$、$\omega+\omega$ は $\omega\times 2$ と対等で同様）。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0006 [Open] 「$H(\omega_{1})$ は冪集合の公理以外の $\ZFC$ の公理を満たす」の過大な主張
- **Category:** Supplement/remark error
- **Location:** set:finite-set supplement
- **Detail:** 「遺伝的に可算な集合全体 $H(\omega_{1})$ は冪集合の公理以外の $\ZFC$ の公理を満たし、その中ではすべての集合が可算である」とあるが、$H(\omega_{1})$ は置換公理を満たさない（置換公理の図式は $H(\kappa)$ で一般には成立しない）。正しくは $H(\omega_{1})$ は $\ZFC$ から冪集合の公理と置換公理を除いた理論（$\ZFC^{-}$ や $\ZFC$ の「冪集合なし」版）のモデルであり、「冪集合の公理以外の $\ZFC$ の公理を満たす」は誤り。
- **Proposed fix:** Replace with: "$\ZFC$ の中で、遺伝的に可算な集合全体 $H(\omega_{1})$ は冪集合の公理と置換公理を除く $\ZFC$ の公理を満たし、その中ではすべての集合が可算である（Kunen, *Set Theory*, 第 IV 章）。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0007 [Open] 「$\omega_{1}$ から $\mathcal{P}(\omega)$ への単射が存在しないモデル」の存在主張
- **Category:** Supplement/remark error
- **Location:** set:schroder-bernstein supplement「前提を変えると」全射の場合
- **Detail:** 「$\omega_{1}$ から $\mathcal{P}(\omega)$ への単射が存在しない $\ZF$ のモデル（到達不能基数の存在が無矛盾ならば存在する）」とあるが、$\omega_{1}\not\preccurlyeq\mathcal{P}(\omega)$ が成り立つモデルの存在は到達不能基数の存在を必要としない（例えば $\omega_{1}$ が可算和で表されるモデルや、$\mathrm{cf}(\omega_{1})=\omega$ となるモデル）。到達不能基数の存在を仮定するのは過剰で、誤った帰属。
- **Proposed fix:** Replace with: "$\omega_{1}\not\preccurlyeq\mathcal{P}(\omega)$ が成り立つ $\ZF$ のモデル（例えば $\omega_{1}$ が可算和で表されるモデル）では…"
- **Reported:** 2026-10-28 (8ccef3d)
