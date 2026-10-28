# Verification tracker: `05-geometry-topology/01-general-topology/07-uniform-spaces/04-dieudonne-completion.html`

<!-- source: 05-geometry-topology/01-general-topology/07-uniform-spaces/04-dieudonne-completion.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 16 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem and its proof are correct. The serious problems are in the supplement: (1) the claim that Dieudonné completeness is preserved by arbitrary products is false, and the justification via product of complete uniformities is invalid; (2) the example $[0,\omega_{1})$ is wrongly claimed to be non-Dieudonné-complete, whereas it is in fact Dieudonné complete (being a GO-space); (3) the Sorgenfrey plane example is correct but its justification relies on the false product claim. The Shirota theorem remark and the $\mathbb{Q}$ example are correct. The proofs of the lemma, theorem, corollary, and problems are sound.

## Issues

### ISSUE-0001 [Open] Dieudonné completeness is not preserved by arbitrary products
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると, 逆向き)
- **Detail:** The supplement claims that Dieudonné completeness is preserved by arbitrary products ("デュドネ完備性は任意の直積と閉部分空間で保たれる"). This is false. Dieudonné completeness is preserved by closed subspaces and by arbitrary products only when the factors are, e.g., metric (or more generally when the product of the universal uniformities is complete). In general the product of Dieudonné complete spaces need not be Dieudonné complete; the standard correct statement is that Dieudonné completeness is preserved by closed subspaces and by arbitrary products of metric spaces (or of spaces whose universal uniformity is complete in a compatible way), not by arbitrary products. The parenthetical justification ("各因子の完備な一様構造の積一様構造が完備であることから従う") is also wrong: the product of the compatible complete uniformities is a compatible uniformity on the product, but it need not equal (or be contained in) the universal uniformity of the product, so it does not show the product is Dieudonné complete.
- **Proposed fix:** Replace with: "デュドネ完備性は閉部分空間で保たれる。また距離空間の任意個の直積はデュドネ完備である（各因子の完備距離の積から定まる一様構造が普遍一様構造に含まれるため）。しかし一般のデュドネ完備空間の直積はデュドネ完備とは限らない。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] The Sorgenfrey plane is not paracompact but the parenthetical justification is misattributed
- **Category:** Supplement/remark error
- **Location:** supplement (逆向き)
- **Detail:** The supplement uses the Sorgenfrey plane as an example of a Dieudonné complete space that is not paracompact, citing \ref{top:sorgenfrey-plane}. The Sorgenfrey plane is indeed not paracompact (it is separable but not Lindelöf, hence not paracompact), and it is Dieudonné complete since it is a closed subspace of a product of two Sorgenfrey lines, each of which is Dieudonné complete (being a GO-space / suborderable, hence Dieudonné complete). However, the sentence as written asserts the preservation of Dieudonné completeness under arbitrary products as the reason, which is the false claim above. The example itself is correct, but the stated general principle justifying it is not.
- **Proposed fix:** Keep the example but justify it correctly: "ゾルゲンフライ平面はゾルゲンフライ直線の 2 つの積の閉部分空間であり、ゾルゲンフライ直線はデュドネ完備（順序位相をもつので）だから、閉部分空間で保たれることよりデュドネ完備である。一方パラコンパクトでない。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Shirota's theorem statement about mu X = upsilon X
- **Category:** Supplement/remark error
- **Location:** supplement (ヒューイット実コンパクト化)
- **Detail:** The supplement states "可測基数がなければ μX = υX となることが知られている（シロタの定理）". Shirota's theorem states that a Dieudonné complete space is realcompact iff it contains no closed discrete subspace of measurable cardinality; equivalently, under the nonexistence of measurable cardinals, every Dieudonné complete space is realcompact. The statement μX = υX for all Tychonoff X under no measurable cardinals is a correct consequence (since μX is Dieudonné complete, hence realcompact, and υX is the realcompactification, so μX = υX). This is essentially correct, though the attribution and formulation are acceptable. No error to report here beyond noting it is fine.
- **Proposed fix:** No change needed; the statement is correct as a consequence of Shirota's theorem.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] The space [0, omega_1) is Dieudonné complete
- **Category:** Supplement/remark error
- **Location:** supplement (デュドネ完備でない例)
- **Detail:** The supplement claims that the ordinal space $[0,\omega_{1})$ is NOT Dieudonné complete and that $\mu[0,\omega_{1})=[0,\omega_{1}]$. This is false. The space $[0,\omega_{1})$ is a normal, countably paracompact, collectionwise normal space; more directly, it is an ordered space and hence Dieudonné complete (every GO-space / linearly ordered topological space is Dieudonné complete). Indeed $[0,\omega_{1})$ is realcompact (it is a union of compact initial segments and is Dieudonné complete), and its Dieudonné completion is itself, not $[0,\omega_{1}]$. The claim that continuous real-valued functions on $[0,\omega_{1})$ are eventually constant is true, but this shows $[0,\omega_{1})$ is pseudocompact-like in the sense that it has few functions; it does not make it Dieudonné incomplete. In fact $[0,\omega_{1})$ is Dieudonné complete.
- **Proposed fix:** Replace with a correct example of a non-Dieudonné-complete space, e.g.: "デュドネ完備でない例として、可算でない閉離散部分空間をもつ実コンパクトでない空間、例えば $\omega_{1}$ 個の離散点の直和や、$\Psi$ 空間などがある。あるいは $[0,\omega_{1})$ は実はデュドネ完備である（順序位相をもつ空間はデュドネ完備）ことに注意。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Dieudonné completeness is the weakest version among complete metrizability and Čech completeness
- **Category:** Supplement/remark error
- **Location:** supplement (似た定理)
- **Detail:** The supplement says "デュドネ完備性はすべての距離化可能空間がもつ、最も弱い版である". This is correct in the sense that every metrizable space is Dieudonné complete, and Dieudonné completeness is weaker than complete metrizability and Čech completeness. However, the phrasing "最も弱い版" could be read as claiming Dieudonné completeness is the weakest among all completeness notions, which is not precise. But since it is qualified by "すべての距離化可能空間がもつ", it is acceptable. No error to report.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] The rational sequence converging to sqrt(2) is not Cauchy in the universal uniformity
- **Category:** Unsupported fact
- **Location:** text after corollary (dieudonne-examples)
- **Detail:** The text claims that a sequence of rationals converging to $\sqrt{2}$ is not Cauchy in the universal uniformity, justified by the continuous function $q\mapsto 1/(q-\sqrt{2})$ on $\mathbb{Q}$. This is correct: the pseudometric $|1/(y-\sqrt{2})-1/(z-\sqrt{2})|$ is continuous on $\mathbb{Q}$ and the sequence diverges under it, so it is not Cauchy in the universal uniformity. This is a valid argument. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Step 3 of normal-cover-pseudometric: support containment
- **Category:** Logical gap
- **Location:** top:normal-cover-pseudometric / Step 3
- **Detail:** In Step 3, the argument concludes $B_{d}(y,1)\subseteq V$ where $V$ is some element of $\mathcal{V}$ containing $\operatorname{supp} p_{s}$. The step shows $z\in\operatorname{supp} p_{s}$ when $d(y,z)<1$, using $u_{s}(y)=1$ and $|u_{s}(y)-u_{s}(z)|<1$ implies $u_{s}(z)>0$. This is correct: $u_{s}(z)>0$ implies $z\in\operatorname{supp} u_{s}=\operatorname{supp} p_{s}$. The support of $p_{s}$ is contained in some $V\in\mathcal{V}$ by the definition of partition of unity subordinate to $\mathcal{V}$. This is fine.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Step 1 of normal-cover-pseudometric: continuity of m(x)
- **Category:** Logical gap
- **Location:** top:normal-cover-pseudometric / Step 1
- **Detail:** Step 1 defines $m(x)=\max_{s} p_{s}(x)$ and claims it is continuous because locally only finitely many $p_{s}$ are nonzero. This is correct for a locally finite partition of unity. The normalization $u_{s}=p_{s}/m$ is continuous and $\max_{s} u_{s}(x)=1$. This is fine.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] Paracompact space is normal and Hausdorff hence Tychonoff
- **Category:** Missing hypothesis
- **Location:** top:paracompact-dieudonne / proof
- **Detail:** The proof says "パラコンパクト空間は正規（\ref{top:paracompact-normal}）でハウスドルフなのでチコノフ". The definition of paracompact in this site includes Hausdorff (as noted in the notation section: "パラコンパクト（ハウスドルフを含む）"). Normal + Hausdorff implies Tychonoff (completely regular). This is correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0010 [Open] Citation of top:universal-uniformity-properties.1 in dieudonne-via-universal
- **Category:** Improper link
- **Location:** top:dieudonne-via-universal / proof
- **Detail:** The proof cites \ref{top:universal-uniformity-properties.1} to say $\mathcal{U}_{X}$ induces the topology. That is exactly item 1 of the proposition. Correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0011 [Open] Citation of top:unif-separation for Hausdorffness of U_X
- **Category:** Improper link
- **Location:** top:dieudonne-completion / proof
- **Detail:** The proof says $\mathcal{U}_{X}$ is Hausdorff by \ref{top:unif-separation}. Since $X$ is Tychonoff hence $T_{1}$, and the uniformity induces the topology, the uniformity is Hausdorff. This is a correct use of the separation theorem.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0012 [Open] Uniqueness of extension uses Hausdorffness of Y
- **Category:** Logical gap
- **Location:** top:dieudonne-completion / proof (一意性)
- **Detail:** The uniqueness argument: two continuous extensions agreeing on dense $X$ agree everywhere since $Y$ is Hausdorff. This is correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0013 [Open] Existence of extension via unif-extension requires completeness of target
- **Category:** Logical gap
- **Location:** top:dieudonne-completion / proof (延長の存在)
- **Detail:** The proof takes a complete uniformity $\mathcal{W}$ on $Y$ (possible since $Y$ is Dieudonné complete), notes $f$ is uniformly continuous by \ref{top:universal-uniformity-properties.3}, and applies \ref{top:unif-extension} to get a uniformly continuous extension. The theorem \ref{top:unif-extension} requires the target to be complete and the source dense in a complete space. Here $\mu X$ is the completion of $(X,\mathcal{U}_{X})$, so $X$ is dense and $\mu X$ complete. This is correct.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0014 [Open] Problem: closed subspace of Dieudonné complete is Dieudonné complete
- **Category:** Logical gap
- **Location:** top:prob-dc-closed-subspace / solution
- **Detail:** The solution takes a complete uniformity $\mathcal{V}$ on $X$, restricts to closed $A$, and shows the restricted uniformity is complete. The argument: a Cauchy filter in $\mathcal{V}_{A}$ maps to a Cauchy filter in $X$ (by \ref{top:cauchy-filter-basic.3}), converges to $x$, and since filter elements are in $A$, $x\in\overline{A}=A$. This is correct. The citation of \ref{top:unif-complete-closed} is also appropriate.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0015 [Open] Problem: compact Hausdorff has unique uniformity and mu K = K
- **Category:** Logical gap
- **Location:** top:prob-dc-compact / solution
- **Detail:** The solution cites \ref{top:compact-unique-uniformity} for uniqueness of the compatible uniformity and \ref{top:compact-complete-totally-bounded} for completeness of compact uniform spaces. Both are correct uses.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0016 [Open] Dieudonné completeness preserved by closed subspaces and products
- **Category:** Unsupported fact
- **Location:** supplement (逆向き)
- **Detail:** As noted above, the claim that Dieudonné completeness is preserved by arbitrary products is false. This is the main error. The closed subspace part is correct.
- **Proposed fix:** See proposed fix for the product claim: restrict to products of metric spaces or note that general products need not be Dieudonné complete.
- **Reported:** 2026-10-28 (10fede1)
