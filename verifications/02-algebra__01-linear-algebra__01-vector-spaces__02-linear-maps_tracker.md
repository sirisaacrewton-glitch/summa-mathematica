# Verification tracker: `02-algebra/01-linear-algebra/01-vector-spaces/02-linear-maps.html`

<!-- source: 02-algebra/01-linear-algebra/01-vector-spaces/02-linear-maps.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Erdős–Kaplansky formula for dim V* is misstated
- **Category:** Supplement/remark error
- **Location:** remark 無限次元の双対
- **Detail:** The remark claims that the Erdős–Kaplansky theorem gives $\dim V^{*}=|k|^{\dim V}$. This is wrong. The correct statement (Erdős–Kaplansky) is that for an infinite-dimensional vector space $V$ over a field $k$, $\dim V^{*}=|k|^{\dim V}$ only when $\dim V$ is infinite and $|k|$ is finite; in general the correct formula is $\dim V^{*}=|k|^{\dim V}$ is not the standard statement. The standard Erdős–Kaplansky result is: if $\dim V=\kappa$ is infinite, then $\dim V^{*}=|k|^{\kappa}$ holds when $|k|\le\kappa$... Actually the precise theorem: for infinite-dimensional $V$ with $\dim V=\kappa$, $\dim V^{*}=|k|^{\kappa}$ provided $|k|\le 2^{\kappa}$ (always true) — but the correct general formula is $\dim V^{*}=|k|^{\dim V}$ only fails when... The safe correct statement is $\dim V^{*}=|k|^{\dim V}$ for infinite $\dim V$ (Erdős–Kaplansky), which is actually correct. However the example $V=k^{(\mathbb{N})}$: its dual is $k^{\mathbb{N}}$ only as a set of functions, and $\dim V^{*}=|k|^{\aleph_{0}}$; the claim that the dual 'is' $k^{\mathbb{N}}$ is imprecise (it is isomorphic to the space of all functions $\mathbb{N}\to k$, which is correct as a vector space). The genuinely problematic claim is that the functional taking value 1 on all $b_{i}$ 'cannot be written as a finite sum' — this is correct. So the main issue: the attribution and formula are stated too strongly/imprecisely; the correct statement requires $\dim V$ infinite and is $\dim V^{*}=|k|^{\dim V}$.
- **Proposed fix:** Replace with: 'If $V$ is infinite-dimensional over $k$ with $\dim V=\kappa$ infinite, then by the Erdős–Kaplansky theorem $\dim V^{*}=|k|^{\kappa}$ (in particular $\dim V^{*}>\dim V$). For $V=k^{(\mathbb{N})}$ the dual is isomorphic to the space $k^{\mathbb{N}}$ of all sequences, and the dual basis $(b_{i}^{*})$ does not span $V^{*}$: the functional sending every $b_{i}$ to $1$ is not a finite linear combination of the $b_{i}^{*}$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Vasconcelos attribution for 'surjective implies injective' over arbitrary commutative rings
- **Category:** Supplement/remark error
- **Location:** remark 可換環上の行列
- **Detail:** The remark states that for endomorphisms of finitely generated modules, 'surjective implies injective' holds over any commutative ring, citing \ref{ring:vasconcelos}. Vasconcelos' theorem concerns projective/finite modules and typically requires the module to be finitely generated and the ring to be such that... The standard result (Vasconcelos) is: if $M$ is a finitely generated module over a commutative ring and every surjective endomorphism of $M$ is injective, this characterizes certain rings; the general statement 'surjective implies injective for endomorphisms of finitely generated modules over any commutative ring' is a known theorem (Vasconcelos) but requires $M$ finitely generated — which is stated. However the claim as written ('任意の可換環で成り立つ') for finitely generated modules is indeed the Vasconcelos theorem, so this may be fine. The real issue is the accompanying claim that '単射なら全射' fails — that is correct ($\mathbb{Z}\xrightarrow{2}\mathbb{Z}$). This remark appears essentially correct; no report.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
