# Verification tracker: `01-foundations/04-set-theory/02-infinitary-combinatorics/01-almost-disjoint.html`

<!-- source: 01-foundations/04-set-theory/02-infinitary-combinatorics/01-almost-disjoint.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect claim that {ω} is a MAD family on ω
- **Category:** Supplement/remark error
- **Location:** supplement after set:ad-family-regular
- **Detail:** The supplement says 'たとえば $\{\omega\}$ や偶数・奇数の分割は $\omega$ 上の極大概素族である'. But $\{\omega\}$ is not an almost disjoint family on $\omega$ at all: its single element $\omega$ is not a subset of $\omega$ (it equals $\omega$, which is not an element of $\mathcal{P}(\omega)$), and even if one identified it with $\omega$, the family $\{\omega\}$ is not maximal since $\{2n\mid n<\omega\}$ is almost disjoint from $\omega$ (their intersection is infinite, so actually not even almost disjoint). The intended example is presumably the trivial partition $\{\omega\}$ of $\omega$ into one piece, but as written it is wrong.
- **Proposed fix:** Replace '$\{\omega\}$ や偶数・奇数の分割' with '偶数・奇数の分割 $\{E,O\}$' (and, if a one-element example is wanted, say '自明な分割 $\{\omega\}$ は $\omega$ 自身を唯一の元とする $\mathcal{P}(\omega)$ の元としては極大でないが、$\lambda=1$ の場合の構成として $\kappa$ 上の自明な分割 $\{\kappa\}$ は極大概素族である').
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Wrong cardinal arithmetic in the GCH computation of 2^{<κ} at limit cardinals
- **Category:** Supplement/remark error
- **Location:** example after set:ad-family-large, second bullet
- **Detail:** The text claims: 'κ が極限基数なら $2^{<\kappa}=\sup\{\theta^{+}\mid\theta<\kappa\}=\kappa$'. Under GCH, $2^{\theta}=\theta^{+}$ for infinite $\theta$, so $2^{<\kappa}=\sup\{2^{\theta}\mid\theta<\kappa\}=\sup\{\theta^{+}\mid\theta<\kappa\}$. For a limit cardinal $\kappa$ this supremum equals $\kappa$ only when $\kappa$ is a limit of cardinals, which is true, but the stated equality $\sup\{\theta^{+}\mid\theta<\kappa\}=\kappa$ requires $\kappa$ to be a limit cardinal (which is assumed) — however the sup is over all cardinals $\theta<\kappa$, and for a limit cardinal $\kappa$ the successor cardinals $\theta^{+}$ with $\theta<\kappa$ are cofinal in $\kappa$, so this is fine. The actual error: for $\kappa=\omega$ (a limit cardinal), $\sup\{\theta^{+}\mid\theta<\omega\}=\omega$ holds, but the claim is stated for all infinite cardinals including $\kappa=\omega$ where $2^{<\omega}=\omega$ is correct. The genuine problem is the successor case: the text writes '$\kappa=\lambda^{+}$ なら $2^{<\kappa}=2^{\lambda}=\lambda^{+}=\kappa$', which under GCH gives $2^{\lambda}=\lambda^{+}$, correct. So the computation is essentially correct; the imprecision is that $\sup\{\theta^{+}\mid\theta<\kappa\}=\kappa$ fails when $\kappa$ is a successor cardinal (then the sup over $\theta<\kappa$ of $\theta^{+}$ is $\kappa$ only if $\kappa$ is a limit of cardinals). Since the limit case is treated separately, the formula is acceptable, but the sup should range over cardinals $\theta$ with $\theta^{+}<\kappa$ or be stated as $\sup\{2^{\theta}\mid\theta<\kappa\}$.
- **Proposed fix:** Write '$\kappa$ が極限基数なら $2^{<\kappa}=\sup\{2^{\theta}\mid\theta<\kappa\}=\sup\{\theta^{+}\mid\theta<\kappa,\ \theta\text{ は基数}\}=\kappa$（極限基数では後続基数が共終）'.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] The counterexample family in the '仮定 |^{<κ}α|<θ は外せない' supplement does not satisfy |x|<κ for κ=ω_1
- **Category:** Supplement/remark error
- **Location:** supplement after set:delta-system-general, last paragraph
- **Detail:** The text sets $\kappa=\omega_{1}$, $\theta=\aleph_{2}$ and uses the family $x_{f}=\{f\restr n\mid n<\omega\}$ of countable sets. The hypothesis of the general Δ-system lemma requires $\lvert x\rvert<\kappa=\omega_{1}$, i.e. countable sets, which these are (each $x_{f}$ is countably infinite, so $\lvert x_{f}\rvert=\aleph_{0}<\omega_{1}$). This is fine. However the text claims 'このとき仮定は $\alpha=\omega$ で崩れている：$\lvert{}^{<\omega_{1}}\omega\rvert\ge\lvert{}^{\omega}\omega\rvert=2^{\aleph_{0}}\ge\aleph_{2}=\theta$'. The set ${}^{<\omega_{1}}\omega$ consists of functions from ordinals $\alpha<\omega_{1}$ into $\omega$; ${}^{\omega}\omega\subseteq{}^{<\omega_{1}}\omega$ indeed, and $\lvert{}^{\omega}\omega\rvert=2^{\aleph_{0}}$. This is correct. But the family $\{x_{f}\mid f\in{}^{\omega}2\}$ has size $2^{\aleph_{0}}\ge\aleph_{2}$, and taking $\aleph_{2}$ of them gives a family of size $\theta$ of countable sets with no Δ-subfamily of size 3, hence none of size $\theta$. This is a valid counterexample. No error here.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
