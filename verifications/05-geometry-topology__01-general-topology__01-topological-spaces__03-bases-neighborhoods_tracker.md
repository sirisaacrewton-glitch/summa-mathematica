# Verification tracker: `05-geometry-topology/01-general-topology/01-topological-spaces/03-bases-neighborhoods.html`

<!-- source: 05-geometry-topology/01-general-topology/01-topological-spaces/03-bases-neighborhoods.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The core definitions, theorems and proofs (base criterion, subbase generation, neighbourhood and neighbourhood-base axioms, countability propositions, Sorgenfrey non-second-countability) are logically sound. The genuine problems are concentrated in the supplement and hypcheck side comments: the supplement wrongly asserts that Lindelöfness is inherited by closed subspaces and wrongly claims the Sorgenfrey plane witnesses failure of normality under products, and two hypcheck counterexamples are misdescribed (the (V2) example actually violates (V3), and the (N4) example does not clearly violate (N4) as stated).

## Issues

### ISSUE-0001 [Open] Lindelöfness is not inherited by closed subspaces
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement claims that Lindelöfness, unlike separability, is inherited by closed subspaces. This is false: closed subspaces of Lindelöf spaces need not be Lindelöf. (Separability, by contrast, is inherited by open subspaces, not by closed ones; the contrast drawn is also wrong.) The standard correct statement is that Lindelöfness is weakly hereditary to closed subspaces only under extra hypotheses (e.g. in regular spaces closed subspaces of Lindelöf spaces are Lindelöf), but not in general.
- **Proposed fix:** Replace with: 「可分性は開部分空間に遺伝する。リンデレーフ性は閉部分空間に遺伝するとは限らない（正則空間では閉部分空間に遺伝する）。ゾルゲンフライ直線はリンデレーフだが、その二乗 $\R_{\ell}\times\R_{\ell}$（ゾルゲンフライ平面）はリンデレーフでない（反対角線 $\{(x,-x)\}$ が非可算な離散閉部分空間）。」
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Sorgenfrey plane does not show failure of normality under products
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The text says the Sorgenfrey plane shows that neither Lindelöfness nor normality is preserved by products. But the Sorgenfrey plane is a standard example of a normal space that is not Lindelöf; it does not witness failure of normality under products. The claim that it shows normality is not productive is therefore false.
- **Proposed fix:** Restrict the claim to Lindelöfness: 「この例は、リンデレーフ性が積で保たれないことを示す標準的な例である。」 Remove the reference to normality, or replace it with a correct example (e.g. the Sorgenfrey plane is normal but not Lindelöf, so it shows Lindelöfness is not implied by normality).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Hypcheck claim that (V2) counterexample satisfies (V3)
- **Category:** Supplement/remark error
- **Location:** top:neighborhood-base-axioms / hypcheck (V2)
- **Detail:** The hypcheck asserts that with $X=\{0,1,2\}$, $\mathcal{V}(0)=\{\{0,1\},\{0,2\}\}$, $\mathcal{V}(1)=\{\{1\}\}$, $\mathcal{V}(2)=\{\{2\}\}$ the family satisfies (V1) and (V3) but not (V2). Check (V3) for $V=\{0,1\}\in\mathcal{V}(0)$: one needs $W\in\mathcal{V}(0)$ such that for every $y\in W$ there is $V'\in\mathcal{V}(y)$ with $V'\subseteq\{0,1\}$. Taking $W=\{0,1\}$ fails at $y=1$ since the only element $\{1\}\subseteq\{0,1\}$ actually holds; taking $W=\{0,2\}$ fails at $y=2$ since $\{2\}\not\subseteq\{0,1\}$. So (V3) fails for this family, contradicting the claim that it satisfies (V3).
- **Proposed fix:** Use a correct example where only (V2) fails, e.g. $X=\{0,1,2\}$, $\mathcal{V}(0)=\{\{0,1\},\{0,2\}\}$, $\mathcal{V}(1)=\{\{0,1\}\}$, $\mathcal{V}(2)=\{\{0,2\}\}$; then (V1) and (V3) hold (for $V=\{0,1\}$ take $W=\{0,1\}$ and $V'=\{0,1\}\in\mathcal{V}(0),\mathcal{V}(1)$; similarly for $\{0,2\}$), but (V2) fails at $0$ since no element of $\mathcal{V}(0)$ is contained in $\{0,1\}\cap\{0,2\}=\{0\}$.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Hypcheck claim that (N4) counterexample satisfies (N1)-(N3)
- **Category:** Supplement/remark error
- **Location:** top:neighborhood-axioms / hypcheck (N4)
- **Detail:** The hypcheck claims $\mathcal{N}(0)=\{N:\{0,1\}\subseteq N\}$, $\mathcal{N}(1)=\{N:\{1,2\}\subseteq N\}$, $\mathcal{N}(2)=\{N:2\in N\}$ satisfies (N1)-(N3) but not (N4). However (N1) requires $N\in\mathcal{N}(x)\Rightarrow x\in N$: for $x=1$, $\{1,2\}\in\mathcal{N}(1)$ contains $1$, fine; but consider $N=\{1,2\}\in\mathcal{N}(1)$ and (N4): need $V\in\mathcal{N}(1)$ with $N\in\mathcal{N}(y)$ for all $y\in V$; taking $V=\{1,2\}$, at $y=2$ we need $\{1,2\}\in\mathcal{N}(2)$, i.e. $2\in\{1,2\}$, true. So (N4) actually holds for $N=\{1,2\}$ at $x=1$. The stated failure of (N4) is not correctly exhibited as described.
- **Proposed fix:** Replace with a verified example: $X=\{0,1\}$, $\mathcal{N}(0)=\{N:\{0,1\}\subseteq N\}$, $\mathcal{N}(1)=\{N:1\in N\}$. Then (N1)-(N3) hold, but (N4) fails at $x=0$ for $N=\{0,1\}$: any $V\in\mathcal{N}(0)$ equals $\{0,1\}$ and contains $1$, yet $\{0,1\}\notin\mathcal{N}(1)$ since $\{0,1\}\ni 1$ — actually $\{0,1\}\in\mathcal{N}(1)$; use instead $\mathcal{N}(1)=\{N:1\in N,\, N\neq\{0,1\}\}$ is not upward closed. A clean example: $X=\{0,1\}$, $\mathcal{N}(0)=\{\{0,1\}\}$, $\mathcal{N}(1)=\{\{1\}\}$; (N1)-(N3) hold, (N4) fails at $0$ since $\{0,1\}\notin\mathcal{N}(1)$.
- **Reported:** 2026-10-28 (8ccef3d)
