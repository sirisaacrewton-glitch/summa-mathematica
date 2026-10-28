# Verification tracker: `02-algebra/04-associative-rings/02-noncommutative-rings/04-jacobson-radical.html`

<!-- source: 02-algebra/04-associative-rings/02-noncommutative-rings/04-jacobson-radical.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definition, characterization theorem, nil-in-radical, Nakayama, artinian radical, Hopkins–Levitzki) is logically sound and the citations match their targets. The serious problem is in the supplement: the claim that a perfect base field suffices for a Wedderburn complement $A=S\oplus J(A)$ is false in general—separability of $A/J(A)$ is required, which perfectness alone does not give when the semisimple quotient is noncommutative. The hypcheck example about $\Z_{(p)}$ is slightly imprecise but essentially correct.

## Issues

### ISSUE-0001 [Open] Perfect field does not guarantee a Wedderburn complement in general
- **Category:** Supplement/remark error
- **Location:** supplement / 有限次元代数
- **Detail:** The supplement claims that if $k$ is a perfect field (e.g. characteristic $0$), then there is a subalgebra $S\cong A/J(A)$ with $A=S\oplus J(A)$. This is false as stated: the existence of a Wedderburn complement (a splitting of $A\to A/J(A)$) requires $A/J(A)$ to be separable over $k$, which holds when $k$ is perfect AND $A/J(A)$ is commutative (or more generally when the semisimple quotient is separable). For a perfect field $k$ and a noncommutative semisimple quotient containing a matrix algebra $M_{n}(D)$ with $D/k$ inseparable (e.g. a division algebra of degree $p$ over a perfect field of characteristic $p$), no such complement need exist. The cited \ref{mod:perfect-semisimple-separable} presumably requires separability of the algebra, not merely perfectness of $k$.
- **Proposed fix:** Replace with: 'さらに、$A/J(A)$ が $k$ 上分離的（例えば $k$ が完全体で $A/J(A)$ が可換、または $k$ が標数 $0$）なら、$A/J(A)$ と同型な部分代数 $S$ があって $A=S\oplus J(A)$（ベクトル空間として）となる（ウェダーバーンの主定理）。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Z_(p) example: J is not nilpotent but the claim about Z/J being non-semisimple is only for Z
- **Category:** Supplement/remark error
- **Location:** hypcheck / 前提「左アルティン」
- **Detail:** The hypcheck says dropping 'left artinian' makes the statement false, citing $\Z$ ($J=0$, $\Z/J=\Z$ not semisimple) and $\Z_{(p)}$ ($J=p\Z_{(p)}$ not nilpotent). The $\Z$ example is fine. The $\Z_{(p)}$ example correctly shows $J$ need not be nilpotent, but the sentence structure could suggest it also shows $R/J$ non-semisimple; in fact $\Z_{(p)}/p\Z_{(p)}\cong\F_{p}$ IS semisimple. This is a minor imprecision but the two examples together do justify that both conclusions (semisimplicity of $R/J$ and nilpotency of $J$) can fail without the artinian hypothesis, so the claim is essentially correct.
- **Proposed fix:** Clarify: '$\Z$ では $J=0$ で $\Z/J=\Z$ は半単純でない（$R/J$ の半単純性が崩れる）。$\Z_{(p)}$ では $J=p\Z_{(p)}$ は冪零でない（$J$ の冪零性が崩れる）。'
- **Reported:** 2026-10-28 (8ccef3d)
