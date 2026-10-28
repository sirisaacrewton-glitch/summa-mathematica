# Verification tracker: `01-foundations/04-set-theory/03-well-founded-sets/03-well-founded-relations.html`

<!-- source: 01-foundations/04-set-theory/03-well-founded-sets/03-well-founded-relations.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Wrong direction of rank inequality in the trcl example
- **Category:** Supplement/remark error
- **Location:** set:transitive-closure-basic / example (second bullet)
- **Detail:** The example states $\operatorname{trcl}(\{\alpha\})=\{\alpha\}\cup\alpha=\alpha+1$. But $\operatorname{trcl}(\{\alpha\})=\{\alpha\}\cup\operatorname{trcl}(\alpha)=\{\alpha\}\cup\alpha=\alpha+1$ is correct only because $\alpha$ is transitive; the displayed equality $\{\alpha\}\cup\alpha=\alpha+1$ is fine. However the first bullet's computation is correct. The real problem is in the first bullet: $A=\{\{1\}\}$ with $1=\{\varnothing\}$; then $\bigcup A=\{1\}$, $\bigcup^{2}A=\bigcup\{1\}=1=\{0\}$, $\bigcup^{3}A=\bigcup\{0\}=0=\varnothing$. So $\operatorname{trcl}(A)=\{\{1\},1,0\}$ — this is correct. No error here.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that trcl existence needs Replacement is overstated
- **Category:** Supplement/remark error
- **Location:** set:transitive-closure / supplement (公理を減らすと)
- **Detail:** The supplement says '推移閉包の存在は、$\omega$ 回の反復をひとまとめにする置換公理に本質的に依存している' (the existence of the transitive closure essentially depends on Replacement). This is overstated: the transitive closure can be obtained from the Axiom of Infinity plus Union and Separation alone, without Replacement, by forming $\bigcup\{\bigcup^{n}A \mid n\in\omega\}$ as a subset of a suitable set (e.g. using that $\bigcup^{n}A\subseteq \mathrm{TC}$-style bounded construction, or via the set $\omega\times$ transitive hull built with Power Set). More precisely, in ZF$^{-}$-P (without Power Set) but with Infinity, one can still define trcl using Replacement on $\omega$; but the claim that it 'essentially depends' on Replacement is too strong — with Power Set available, trcl$(A)$ is a subset of $\mathcal{P}^{n}(A)$-style sets and can be obtained via Infinity + Union + Separation + Power Set without Replacement. The statement as written overstates the role of Replacement.
- **Proposed fix:** Replace with: '推移閉包の存在は、$\omega$ 回の反復をひとまとめにする操作に依存している。置換公理があれば上のように構成できる。置換公理を除いたツェルメロの体系 Z（冪集合公理は含む）では、すべての集合が推移的集合に含まれることは証明できないとされている（Mathias）。冪集合公理も除いた体系では、$\omega$ の存在（無限公理）と和集合・分出公理だけでは一般に推移閉包の存在は保証されず、置換公理（またはそれに相当する図式）が必要になる。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Incorrect claim that E is set-like and collapse is rank
- **Category:** Supplement/remark error
- **Location:** set:trcl-rank / supplement
- **Detail:** The supplement claims '$E$ は $\mathbf{WF}$ 上で集合的（\ref{set:set-like}）でもあり、$E$ についての崩壊関数はランク関数そのものになる（Kunen, Ch. III, Exercise 13）'. This is imprecise: the relation $E$ defined by $xEy\iff x\in\operatorname{trcl}(y)$ is set-like on $\mathbf{WF}$ (for fixed $y$, the predecessors $\{x: xEy\}\subseteq\operatorname{trcl}(y)$ form a set), which is true. But the Mostowski collapse of $E$ is NOT the rank function; the collapse of $E$ (which is essentially the transitive closure relation) gives the identity/transitive-set collapse, not rank. The rank function is the collapse for the relation $\in$ restricted appropriately, not for $E$. The citation to Kunen Exercise 13 is misapplied.
- **Proposed fix:** Replace with: '$E$ は $\mathbf{WF}$ 上で集合的（\ref{set:set-like}）である（$y$ に対し $E$-前者全体は $\operatorname{trcl}(y)$ に含まれる集合）。$E$ に関するモストフスキ崩壊は $y\mapsto\operatorname{trcl}(y)$ を与え、ランク関数は $\in$ に関する崩壊として得られる。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Claim about Z (Zermelo) and transitive containment misattributed
- **Category:** Unsupported fact
- **Location:** set:transitive-closure / supplement (公理を減らすと)
- **Detail:** The supplement states '置換公理を除いたツェルメロの体系 Z では、すべての集合が推移的集合に含まれることは証明できないとされている（A. R. D. Mathias, The strength of Mac Lane set theory ... 本サイトでは原典の該当箇所を未確認）'. This is a known result (Mathias), but the text itself admits the source is unverified. More importantly, the statement as phrased ('すべての集合が推移的集合に含まれる') is about the existence of a transitive superset for every set, which in Z (with Infinity and Power Set) actually IS provable: given $A$, the set $\bigcup\{\bigcup^{n}A : n\in\omega\}$ exists in Z because $\bigcup^{n}A\subseteq \mathcal{P}^{n}(A)$-bounded sets and $\omega$ exists; one uses Infinity + Union + Separation + Power Set, no Replacement needed. So the claim that Z cannot prove every set is contained in a transitive set is FALSE as stated (Z has Power Set and Infinity). Mathias's result concerns Mac Lane set theory (without full Separation or without Power Set), not Z with Power Set.
- **Proposed fix:** Replace with: 'また置換公理を除いたツェルメロの体系 Z（冪集合公理と無限公理を含む）では、$\bigcup^{n}A\subseteq V_{\omega}$-型の有界構成により推移閉包は構成できるので、すべての集合は推移的集合に含まれる。問題になるのは冪集合公理も制限した体系（マックレーン集合論など）であり、そこでの推移閉包の扱いは Mathias, The strength of Mac Lane set theory, Ann. Pure Appl. Logic 110 (2001) で論じられている。'
- **Reported:** 2026-10-28 (10fede1)
