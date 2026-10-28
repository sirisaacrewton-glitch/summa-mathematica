# Verification tracker: `05-geometry-topology/02-algebraic-topology/02-homology/11-axioms.html`

<!-- source: 05-geometry-topology/02-algebraic-topology/02-homology/11-axioms.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems (comparison theorem, uniqueness theorem, cellular chain complex, universal coefficient theorem) and their proofs are logically sound, with hypotheses properly verified and citations matching their targets. The genuine problems are concentrated in the supplements and side remarks: the claim that Betti numbers over a field depend on the characteristic is false (fields are flat over Z, so Betti numbers are characteristic-independent); the Moore-space attribution for non-naturality of the splitting is an unsupported side remark; the hypcheck's parenthetical that finite additivity follows from exactness and excision alone is incorrect; and the solution to the Cantor-set problem wrongly calls Čech H^0(C) countable when it is uncountable. All four are correctable with the proposed fixes.

## Issues

### ISSUE-0001 [Open] Betti numbers over a field do not depend on the characteristic
- **Category:** Supplement/remark error
- **Location:** supplement (一般化) after at:uct-homology
- **Detail:** The supplement claims that the Betti number $\dim_{k}H_{n}(X;k)$ can vary with the characteristic of $k$. This is false: for a field $k$, $\mathrm{Tor}_{1}^{\mathbb{Z}}(k,H_{n-1}(X))$ vanishes (since $k$ is flat over $\mathbb{Z}$), so $H_{n}(X;k)\cong H_{n}(X)\otimes k$ and $\dim_{k}H_{n}(X;k)=\operatorname{rank}H_{n}(X)$, independent of $k$. The example given ($\mathbb{R}P^{2}$: $\dim H_{1}(;\mathbb{Q})=0$, $\dim H_{1}(;\mathbb{F}_{2})=1$) is not a counterexample to a characteristic-dependent Betti number in the sense claimed; it only reflects that $H_{1}(\mathbb{R}P^{2};\mathbb{Z})=\mathbb{Z}/2$ has rank $0$, so both dimensions are actually $0$ over $\mathbb{Q}$ and $1$ over $\mathbb{F}_{2}$ only because $\mathbb{Z}/2\otimes\mathbb{F}_{2}\neq0$ — but the rank is $0$ in both cases, so the Betti number (rank) does not change. The statement as written is false.
- **Proposed fix:** Replace with: "体 $k$ 係数では $k$ は平坦なので $\mathrm{Tor}_{1}^{\mathbb{Z}}(k,H_{n-1}(X))=0$ となり $H_{n}(X;k)\cong H_{n}(X)\otimes k$。したがってベッチ数 $\dim_{k}H_{n}(X;k)$ は $k$ によらず $H_{n}(X)$ の階数に等しい（標数によらない）。標数によって変わりうるのは捩れ部分の情報であり、たとえば $H_{1}(\mathbb{R}P^{2};\mathbb{Z})=\mathbb{Z}/2$ は $\mathbb{F}_{2}$ 係数では $1$ 次元に現れるが $\mathbb{Q}$ 係数では消える。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that the splitting is not natural is asserted without justification and is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (一般化) after at:uct-homology
- **Detail:** The supplement states "分裂が自然でないことは、ムーア空間の間の写像で示せることが知られている". This is a side comment (kind 5) attributing a specific counterexample to Moore spaces without proof or reference. While the non-naturality of the splitting is a standard fact, the specific claim about Moore spaces is stated as known but is not substantiated and is not needed; it is an unsupported side remark.
- **Proposed fix:** Either remove the sentence, or state it precisely with a reference: "分裂は自然ではない（たとえば $H_{n}(X)\otimes G\to H_{n}(X;G)$ の分裂を自然に選ぶことは一般に不可能であることが知られている）．" and drop the unverified Moore-space attribution.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Hypcheck claim that additivity for finite sums follows from exactness and excision
- **Category:** Supplement/remark error
- **Location:** at:comparison-theorem / hypcheck (有限性)
- **Detail:** The hypcheck says "Step 3 の加法性（有限和なら完全性と切除から導けるが、ここでは公理として使った）". For a general homology theory satisfying only the stated axioms (which include additivity for arbitrary disjoint unions), finite additivity does follow from the additivity axiom, but the parenthetical claim that finite additivity is derivable from exactness and excision alone (without additivity) is not correct in general — finite additivity is an independent axiom for extraordinary theories. This is an overstated side remark.
- **Proposed fix:** Replace the parenthetical with: "Step 3 の加法性は公理（加法性）から従う（有限個の非交和は加法性公理の特別な場合）．"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Solution to at:prob-comparison-not-cw: imprecise claim about Čech H^0(C)
- **Category:** Supplement/remark error
- **Location:** solution of at:prob-comparison-not-cw
- **Detail:** The solution says "チェックコホモロジーでは $\check H^{0}(C)$ は局所定数関数 $C\to\mathbb{Z}$ の群で可算". For the Cantor set $C$, locally constant functions $C\to\mathbb{Z}$ are the same as continuous functions $C\to\mathbb{Z}$ (since $C$ is totally disconnected and $\mathbb{Z}$ is discrete), and there are uncountably many such functions (each clopen subset can independently map to $0$ or $1$). So $\check H^{0}(C)$ is uncountable, not countable. The claim "可算" is false.
- **Proposed fix:** Replace with: "チェックコホモロジーでは $\check H^{0}(C)$ は $C$ 上の局所定数関数 $C\to\mathbb{Z}$ の群で、$C$ の開かつ閉な部分集合が非可算個あるため非可算階数をもつ（特異 $H_{0}(C)$ の非可算自由群とは異なる）．"
- **Reported:** 2026-10-28 (10fede1)
