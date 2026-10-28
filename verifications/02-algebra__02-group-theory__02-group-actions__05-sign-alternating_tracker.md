# Verification tracker: `02-algebra/02-group-theory/02-group-actions/05-sign-alternating.html`

<!-- source: 02-algebra/02-group-theory/02-group-actions/05-sign-alternating.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is logically sound overall: the sign homomorphism, the generation of A_n by 3-cycles, the conjugacy of 3-cycles in A_n for n≥5, and the non-existence of a subgroup of order 6 in A_4 are all proved correctly, and the cited labels match their use. The only genuine issue is a slightly overstated/imprecise claim in the hypcheck of grp:3cycles-conjugate-an, where the splitting of the 8 three-cycles of A_4 into two classes of size 4 is asserted without fully justifying that two distinct classes actually occur (the centralizer computation alone gives class size 4 but not the existence of a second class). This is a minor supplement-level imprecision.

## Issues

### ISSUE-0001 [Open] A_4 の 3 巡回置換の共役類の記述が不正確
- **Category:** Supplement/remark error
- **Location:** grp:3cycles-conjugate-an / hypcheck
- **Detail:** hypcheck は「$A_{4}$ の 3 巡回置換 $8$ 個は、$A_{4}$ の中では $4$ 個ずつ二つの共役類に分かれる」と述べる。$8$ 個が $4+4$ に分かれること自体は正しいが、これは $A_{4}$ の 3 巡回置換全体についての主張であり、$n=4$ で定理が偽であることの根拠としては「$8$ 個が二つの類に分かれる」だけでは不十分で、実際に二つの異なる類が存在すること（例：$(1\ 2\ 3)$ と $(1\ 3\ 2)$ が $A_{4}$ で共役でないこと）を述べる必要がある。中心化群の計算 $12/3=4$ は正しいが、$4$ 個ずつ二つに分かれるという結論は中心化群の位数だけからは直ちに出ず、$S_{4}$ での共役類が $8$ 個であることと合わせて初めて従う。現状の記述は結論を先取りしており、根拠が不足している。
- **Proposed fix:** Replace the hypcheck sentence with: "$n=4$ では偽：$A_{4}$ の 3 巡回置換は $8$ 個あり、$S_{4}$ ではすべて共役だが、$(1\ 2\ 3)$ の $A_{4}$ での中心化群は $\ang{(1\ 2\ 3)}$（位数 $3$）なので $A_{4}$ での共役類の大きさは $12/3=4$ であり、$8$ 個は $4$ 個ずつ二つの類に分かれる（例えば $(1\ 2\ 3)$ と $(1\ 3\ 2)$ は $A_{4}$ で共役でない）。"
- **Reported:** 2026-10-28 (8ccef3d)
