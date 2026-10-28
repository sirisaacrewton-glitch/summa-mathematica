# Verification tracker: `05-geometry-topology/01-general-topology/04-properties/08-paracompactness.html`

<!-- source: 05-geometry-topology/01-general-topology/04-properties/08-paracompactness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 15 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The proofs (Dieudonné, compact exhaustion, σ-compact paracompactness, shrinking lemma, partition of unity, product with compact) are sound and their citations match. The main genuine problems are in the supplement: (1) the Engelking characterization (i) is misstated regarding the local-finiteness of supports, and the framing of (i)/(ii) as a single equivalence list conflates two distinct characterizations; (2) the supplement cites \ref{top:regular-hereditary} (hereditariness of regularity) for the non-normality of the Sorgenfrey plane, which is the wrong target — it should cite \ref{top:sorgenfrey-plane}. The intuition about fine sheaves is correct. No previously reported issues exist.

## Issues

### ISSUE-0001 [Open] Engelking equivalence (i) misstated: partition of unity characterization
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると (i)
- **Detail:** The supplement claims paracompactness is equivalent to (i) 'Hausdorff and every open cover has a subordinate partition of unity (without assuming local finiteness of supports)'. This is imprecise. The standard Engelking characterization (General Topology, Theorem 5.1.28 / 5.1.34 area) is: a Hausdorff space is paracompact iff every open cover admits a partition of unity subordinate to it (with locally finite supports). Dropping local finiteness of supports while keeping the sum condition does not by itself characterize paracompactness in the stated form; the parenthetical '台の局所有限性を仮定しない形' is misleading because the equivalence genuinely requires the locally finite support condition (or an equivalent formulation). As written the statement is not a correct characterization.
- **Proposed fix:** Replace (i) with: '(i) $X$ is Hausdorff and every open cover of $X$ admits a partition of unity subordinate to it (with locally finite supports, in the sense of Definition 8.7).' Remove the parenthetical about not assuming local finiteness of supports, or state precisely that the equivalence uses the locally finite support condition.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Michael's theorem statement conflated with Engelking (ii)
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると (ii)
- **Detail:** The supplement attributes to 'Michael's theorem' the statement '(ii) $T_{1}$ and regular, and every open cover has a σ-locally-finite open refinement'. Michael's theorem (as cited, \tref{top:michael}) is the characterization: a $T_{1}$ space is paracompact iff it is regular and every open cover has a σ-locally-finite (equivalently σ-discrete) open refinement. The phrasing here is acceptable in substance, but the supplement presents (i) and (ii) as jointly 'equivalent to paracompactness' under Engelking §5.1, which mixes two different characterizations (partition-of-unity vs. σ-locally-finite refinement) as if they were a single equivalence list. This is imprecise but the individual claims are essentially correct; the main defect is the framing.
- **Proposed fix:** State separately: 'A Hausdorff space is paracompact iff every open cover admits a subordinate partition of unity (Engelking). A $T_{1}$ space is paracompact iff it is regular and every open cover has a σ-locally-finite open refinement (Michael's theorem, Theorem 8.4 of the Michael page).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Sorgenfrey line paracompact via regular Lindelöf: citation mismatch
- **Category:** Supplement/remark error
- **Location:** supplement / 類似の定理
- **Detail:** The supplement says the Sorgenfrey line is paracompact 'because it is regular Lindelöf' and cites \see{top:sorgenfrey-paracompact}. The Sorgenfrey line is indeed Lindelöf and regular, so this reasoning is valid, but the cited result top:sorgenfrey-paracompact is Corollary 2.6 'ゾルゲンフライ直線はパラコンパクト' which presumably proves it directly; using \see (a non-logical pointer) is fine here since it is only guidance. However the parenthetical '(正則リンデレーフなので)' asserts the Sorgenfrey line is Lindelöf, which is true but is not established on this page nor cited; as a side comment it is a stated-only fact. It is correct, so not an error per se. No change strictly required, but the claim 'Lindelöf' should be attributed.
- **Proposed fix:** Either cite the Lindelöf property of the Sorgenfrey line explicitly, or rephrase: 'ゾルゲンフライ直線はパラコンパクト（\ref{top:sorgenfrey-paracompact}）だが…' without the unsupported parenthetical, or add a citation for its Lindelöfness.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Intuition: fine sheaf / vanishing cohomology claim overstated
- **Category:** Supplement/remark error
- **Location:** intuition / 高い視点から
- **Detail:** The intuition states 'the sheaf of continuous functions on a paracompact space is fine (細層), and higher cohomology vanishes'. The sheaf of continuous real-valued functions on a paracompact (Hausdorff) space is indeed a fine sheaf (partitions of unity give the fine structure), and fine sheaves on a paracompact space are acyclic, so higher sheaf cohomology vanishes. This is correct. However the phrasing 'これが 1 の分割が局所から大域への障害を消す理由である' is a heuristic and acceptable. No mathematical error. (Checked: fine sheaves are acyclic on paracompact spaces — correct.)
- **Proposed fix:** No change needed; statement is correct.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Example 4: ω₁ not paracompact 'follows from countably compact but not compact'
- **Category:** Unsupported fact
- **Location:** example / item 4
- **Detail:** The example says ω₁ is not paracompact, 'which follows from being countably compact but not compact', citing \ref{top:prob-cc-paracompact}. The reasoning requires the fact that a countably compact paracompact space is compact (a standard result). This is true, and the citation top:prob-cc-paracompact (problem 5.9) presumably establishes exactly this. So the claim is justified by citation. However, ω₁ with the order topology is countably compact but not compact, and a countably compact paracompact space is compact — correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Hypcheck: 'AC not used' in Dieudonné proof
- **Category:** Supplement/remark error
- **Location:** top:paracompact-normal / hypcheck
- **Detail:** The hypcheck claims '選択公理：使っていない（開近傍をすべて集めた族を使った）'. But the proof uses paracompactness to obtain a locally finite open refinement $\mathcal{V}$ of $\mathcal{U}\cup\{X\setminus F\}$. The definition of paracompactness (Definition 8.3) asserts existence of a refinement for every open cover; extracting a specific $\mathcal{V}$ from this existential is a choice (one selection per cover, but here only one cover is used, so it is a single instantiation, not AC). More importantly, the claim that no choice is used is essentially correct for this particular argument since only one refinement is chosen. However, the statement '使っていない' is slightly overstated because the passage from 'every cover has a refinement' to a specific $\mathcal{V}$ is a single existential instantiation, which is fine in ZF. So the hypcheck is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Shrinking lemma: transfinite construction uses choice at each stage but claim of 'AC' vs DC
- **Category:** Logical gap
- **Location:** top:shrinking-lemma / proof
- **Detail:** The shrinking lemma proof well-orders Λ (uses AC) and at each stage selects $W_{\alpha}$ via normality. The selection at each of κ many stages is a choice; the lemma states '選択公理を使う', which is consistent. The argument that $\{W_{\beta}\}_{\beta<\alpha}\cup\{V_{\beta}\}_{\beta\ge\alpha}$ is a cover uses point-finiteness correctly. The final step for α=κ is fine. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Partition of unity Step 1: applying shrinking lemma twice requires point-finiteness of (W_λ)
- **Category:** Logical gap
- **Location:** top:partition-of-unity-existence / Step 1
- **Detail:** Step 1 applies the shrinking lemma to $(V_{\lambda})$ (locally finite hence point-finite) to get $(W_{\lambda})$, then applies it again to $(W_{\lambda})$. The text notes '$W_{\lambda}\subseteq V_{\lambda}$ so $(W_{\lambda})$ is also point-finite'. This is correct: a refinement of a point-finite cover by a cover is point-finite. Fine. Also the shrinking lemma requires normality, which holds by Dieudonné. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] Partition of unity Step 2: Urysohn applied to disjoint closed sets requires normality and the sets are closed
- **Category:** Logical gap
- **Location:** top:partition-of-unity-existence / Step 2
- **Detail:** Step 2 applies Urysohn's lemma to $\overline{W'_{\lambda}}$ and $X\setminus W_{\lambda}$. These are disjoint closed sets since $\overline{W'_{\lambda}}\subseteq W_{\lambda}$. Normality gives Urysohn. Correct. The support computation $\operatorname{supp} g_{\lambda}\subseteq\overline{W_{\lambda}}$ uses $\{g_{\lambda}\neq0\}\subseteq W_{\lambda}$, correct. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0010 [Open] Product theorem Step 1: tube lemma requires K compact, but also need the U_i to be neighborhoods of x
- **Category:** Logical gap
- **Location:** top:paracompact-times-compact / Step 1
- **Detail:** Step 1: for fixed x, cover {x}×K by basic opens U_i×V_i with (x,k)∈U_i×V_i. Finitely many cover {x}×K. Then U^x=∩U_i is an open neighborhood of x and U^x×K⊆∪(U^x×V_i). This is the tube lemma argument and is correct. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0011 [Open] Product theorem Step 3: local finiteness of W'
- **Category:** Logical gap
- **Location:** top:paracompact-times-compact / Step 3
- **Detail:** Step 3: for (x,k), take N with N meeting finitely many O_s. Then N×K meets O_s×V^s_i only for those finitely many s and finitely many i. Correct. No gap.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0012 [Open] σ-compact paracompact theorem: K_{n-2} closed requires Hausdorff
- **Category:** Missing hypothesis
- **Location:** top:sigma-compact-paracompact / proof
- **Detail:** The proof uses that $K_{n-2}$ is closed, citing compact-Hausdorff-closed, which requires the space to be Hausdorff. The theorem hypothesis includes Hausdorff, and the hypcheck notes it. Correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0013 [Open] Compact exhaustion lemma: closed neighborhoods with compact closure require local compactness + Hausdorff
- **Category:** Missing hypothesis
- **Location:** top:compact-exhaustion / proof
- **Detail:** Uses \ref{top:lch-neighborhood-base} which gives, in a locally compact Hausdorff space, an open neighborhood with compact closure. The lemma hypothesis includes locally compact Hausdorff. Correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0014 [Open] Supplement cites \ref{top:regular-hereditary} for 'the Sorgenfrey plane is not normal'
- **Category:** Improper link
- **Location:** supplement / 類似の定理
- **Detail:** The supplement says the Sorgenfrey plane is not normal, citing '(\ref{top:regular-hereditary} の後の注意)'. But top:regular-hereditary is Proposition 1.9 '正則性の遺伝' (hereditariness of regularity), which is about regularity being hereditary, not about the Sorgenfrey plane's non-normality. The non-normality of the Sorgenfrey plane is established in top:sorgenfrey-plane (Theorem 2.7). The citation to top:regular-hereditary is a wrong target for this claim.
- **Proposed fix:** Replace the citation with \ref{top:sorgenfrey-plane}: 'その二乗は正規でないので（\ref{top:sorgenfrey-plane}）パラコンパクトでない。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0015 [Open] Example: Sorgenfrey plane non-normal cited to top:sorgenfrey-plane is correct
- **Category:** Improper link
- **Location:** example / 直積は一般には保たれない
- **Detail:** The example cites \ref{top:sorgenfrey-plane} for the Sorgenfrey plane being non-normal, which matches Theorem 2.7 'ゾルゲンフライ平面'. Correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
