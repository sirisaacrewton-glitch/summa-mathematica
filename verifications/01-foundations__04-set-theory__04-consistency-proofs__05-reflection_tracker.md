# Verification tracker: `01-foundations/04-set-theory/04-consistency-proofs/05-reflection.html`

<!-- source: 01-foundations/04-set-theory/04-consistency-proofs/05-reflection.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Reflection principle is not equivalent to Replacement
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The supplement claims that the reflection scheme is 'strong enough to replace the axiom of replacement' and that 'under the other axioms of ZF, the reflection scheme is equivalent to the replacement scheme'. This is false as stated. The reflection scheme (for a fixed finite list of formulas, over the other axioms) is a theorem scheme of ZF, but it does not imply Replacement: over ZF minus Replacement (e.g. Zermelo set theory Z plus the reflection scheme) one cannot derive Replacement. Reflection only asserts the existence of R(β) reflecting finitely many formulas; it does not give the bounding/collection power of Replacement. The commonly cited equivalence is between Replacement and certain reflection principles only in the presence of enough Power Set plus additional hypotheses, and even then the standard statement is that Replacement is equivalent to the scheme 'every formula is reflected by some V_α' only over a sufficiently strong base (and this is a subtle result, not a general fact). Stating it as 'generally said to be equivalent' overstates the literature.
- **Proposed fix:** Replace with: '置換公理は $F_{i}$ の定義と $\beta_{p}$ の再帰で本質的に使った。反映原理の図式は $\ZF$ の定理図式であり、$\ZF$ の他の公理から置換公理を導くものではない（置換公理を除いた体系に反映原理を加えても置換公理は導けない）。' i.e. 'Replacement is used essentially in defining $F_{i}$ and in the recursion for $\beta_{p}$. The reflection scheme is a theorem scheme of $\ZF$; it does not by itself yield Replacement (adding it to ZF without Replacement does not recover Replacement).'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Kunen exercise attribution about β=ω_β is misstated
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, fourth bullet
- **Detail:** The supplement says Kunen states as an exercise that some finite fragment of ZF forces the reflecting β to satisfy β=ω_β. In Kunen's treatment the relevant exercise concerns showing that one can find a finite fragment such that any β reflecting it is a limit of the hierarchy with β=ω_β (or that reflection can be arranged at such β), but the phrasing 'forces the reflecting β to satisfy β=ω_β' is imprecise: reflection gives β arbitrarily large, and one can additionally arrange β=ω_β, but a finite fragment does not 'force every reflecting β' to be of that form. As stated it is an overstatement of what the exercise establishes.
- **Proposed fix:** Rephrase: 'Kunen は演習として、$\ZF$ の有限個の公理を適切に選べば、それらを反映する $\beta$ として $\beta=\omega_{\beta}$ を満たすものをとれることを示している（Kunen 第 IV 章演習 10 による。本サイトでは確かめていない）。' i.e. 'one can choose the finite fragment so that there exist arbitrarily large reflecting β with β=ω_β', not that every reflecting β satisfies it.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] NBG is a conservative extension of ZF — attribution and precision
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果
- **Detail:** The supplement states NBG is finitely axiomatizable and a conservative extension of ZF, adding 'it is generally said so; not treated here'. The conservative-extension claim is correct (NBG is a conservative extension of ZF for sentences in the language of ZF), and finite axiomatizability of NBG is correct. However the hedge 'generally said' is misleading for a precise theorem, and more importantly the finite axiomatizability of NBG is only true for NBG with the restriction that comprehension applies to formulas not quantifying over proper classes (i.e. the usual finitely axiomatizable NBG); the statement as given is acceptable but the 'generally said' framing understates a definite theorem. This is a minor precision issue rather than a falsehood.
- **Proposed fix:** State it as a definite theorem: 'NBG（クラスを対象に含むフォン・ノイマン–ベルナイス–ゲーデルの集合論）は有限公理化可能であり、$\ZF$ の保存拡大である（本サイトでは扱わない）。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] R(β) and countable A as 'elementary substructures' of V
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement says that in model-theoretic terms R(β) and the countable A are 'elementary substructures' of V for the given finitely many formulas. This is imprecise: R(β) is only an elementary substructure of V with respect to the finite set of formulas listed (a partial elementary substructure), not an elementary substructure in the usual sense (which requires all formulas). Calling it '初等部分構造' without the qualifier 'for these finitely many formulas' overstates the result; the qualifier appears earlier in the sentence but the phrase 'にあたり' reads as an unqualified identification.
- **Proposed fix:** Make the qualification explicit: 'モデル理論の言葉では、$R(\beta)$ や可算な $A$ は、与えられた有限個の論理式 $\varphi_{1},\dots,\varphi_{n}$ に関する限りにおいて $\mathbf{V}$ の初等部分構造とみなせる（すべての論理式についての初等部分構造ではない）。'
- **Reported:** 2026-10-28 (8ccef3d)
