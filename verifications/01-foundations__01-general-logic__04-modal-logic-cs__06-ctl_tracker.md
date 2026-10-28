# Verification tracker: `01-foundations/01-general-logic/04-modal-logic-cs/06-ctl.html`

<!-- source: 01-foundations/01-general-logic/04-modal-logic-cs/06-ctl.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect claim that AF AG p is strictly stronger than A F G p
- **Category:** Supplement/remark error
- **Location:** remark after logic:ctl-not-ltl, item 2
- **Detail:** The remark states that $\mathbf{AF}\,\mathbf{AG}\,p$ is strictly stronger than $\mathbf{A}\mathbf{F}\mathbf{G}p$. In fact $\mathbf{AF}\,\mathbf{AG}\,p$ implies $\mathbf{A}\mathbf{F}\mathbf{G}p$ (if some reachable state satisfies $\mathbf{AG}p$, then along every path we eventually reach a state from which $p$ holds forever, so $\mathbf{F}\mathbf{G}p$ holds on every path). The converse fails, as the page's own problem logic:prob-ctl-ag-ef-ltl demonstrates. Hence $\mathbf{AF}\,\mathbf{AG}\,p$ is strictly *weaker* than $\mathbf{A}\mathbf{F}\mathbf{G}p$, not stronger. The direction of the strictness is reversed.
- **Proposed fix:** $\mathbf{AF}\,\mathbf{AG}\,p$ は $\mathbf{A}\mathbf{F}\mathbf{G}p$ より真に弱い（$\mathbf{AF}\,\mathbf{AG}\,p\to\mathbf{A}\mathbf{F}\mathbf{G}p$ は妥当だが逆は成り立たない。問題 \ref{logic:prob-ctl-ag-ef-ltl} の例を参照）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Wrong direction of implication in the AG EF r counterexample
- **Category:** Supplement/remark error
- **Location:** problem logic:prob-ctl-agef / solution
- **Detail:** The solution argues: $\mathcal{M}_{3},a\models\mathbf{AG}\,\mathbf{EF}\,r$, every path of $\mathcal{M}_{1}$ from $a$ is also a path of $\mathcal{M}_{3}$ from $a$, and if $\mathbf{AG}\,\mathbf{EF}\,r$ were equivalent to $\mathbf{A}\varphi$ then by Step 1 of logic:ctl-not-ltl $\mathcal{M}_{1},a\models\mathbf{A}\varphi$, contradiction. But Step 1 of logic:ctl-not-ltl gives the implication in the direction 'fewer paths $\Rightarrow$ more likely to satisfy $\mathbf{A}\varphi$': from $\mathcal{M}_{3},a\models\mathbf{A}\varphi$ and Paths$(\mathcal{M}_{1},a)\subseteq$ Paths$(\mathcal{M}_{3},a)$ one gets $\mathcal{M}_{1},a\models\mathbf{A}\varphi$, which is consistent with $\mathcal{M}_{1},a\not\models\mathbf{AG}\,\mathbf{EF}\,r$; no contradiction arises. The correct argument must use the reverse inclusion: the paths of $\mathcal{M}_{3}$ from $a$ (e.g. the path that alternates $a,b,a,b,\dots$) are not all paths of $\mathcal{M}_{1}$, so one must instead exhibit a model with *more* paths satisfying $\mathbf{AG}\,\mathbf{EF}\,r$ while a submodel with fewer paths fails it, and apply Step 1 in the direction 'if $\mathcal{M}_{3},a\models\mathbf{A}\varphi$ and Paths$(\mathcal{M}_{1},a)\subseteq$ Paths$(\mathcal{M}_{3},a)$ then $\mathcal{M}_{1},a\models\mathbf{A}\varphi$' — which requires $\mathcal{M}_{1}$ to have *fewer* paths and still satisfy $\mathbf{AG}\,\mathbf{EF}\,r$, the opposite of the construction given.
- **Proposed fix:** Use the inclusion in the correct direction: take $\mathcal{M}_{3}$ with $R=\{(a,a),(a,b),(b,a),(b,b)\}$ and $\mathcal{M}_{1}$ with $R=\{(a,a),(a,b),(b,b)\}$; then Paths$(\mathcal{M}_{1},a)\subseteq$ Paths$(\mathcal{M}_{3},a)$. If $\mathbf{AG}\,\mathbf{EF}\,r$ were $\mathbf{A}\varphi$, then $\mathcal{M}_{3},a\models\mathbf{A}\varphi$ would give $\mathcal{M}_{1},a\models\mathbf{A}\varphi$ by Step 1 of \ref{logic:ctl-not-ltl}, i.e. $\mathcal{M}_{1},a\models\mathbf{AG}\,\mathbf{EF}\,r$, contradicting $\mathcal{M}_{1},a\not\models\mathbf{AG}\,\mathbf{EF}\,r$. (The current text states the inclusion but applies Step 1 as if it went the other way; the fix is to note that $\mathcal{M}_{3}$ has *more* paths and $\mathcal{M}_{1}$ *fewer*, so satisfaction transfers from $\mathcal{M}_{3}$ to $\mathcal{M}_{1}$.)
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Incorrect claim that AG EF r is not LTL-expressible via the same path-inclusion argument
- **Category:** Supplement/remark error
- **Location:** remark after logic:ctl-not-ltl, item 1
- **Detail:** Item 1 says 'the same argument (inclusion of sets of path-sequences) shows $\mathbf{AG}\,\mathbf{EF}\,r$ is not LTL-expressible'. But $\mathbf{AG}\,\mathbf{EF}\,r$ is *not* of the form $\mathbf{A}\varphi$ with $\varphi$ an LTL path formula in general, and the simple path-inclusion argument used for $\mathbf{EF}p$ does not directly apply: $\mathbf{AG}\,\mathbf{EF}\,r$ is a genuine branching-time property whose non-expressibility requires the more delicate argument of problem logic:prob-ctl-agef (comparing two models where one has more paths). The parenthetical '(same argument)' overstates the analogy; the actual proof is the separate problem, and the remark's phrasing suggests the trivial inclusion argument suffices, which it does not (as the flawed solution to that problem shows).
- **Proposed fix:** 同じ経路の列の集合の包含という素朴な議論だけでは $\mathbf{AG}\,\mathbf{EF}\,r$ の非表現性は出ない。問題 \ref{logic:prob-ctl-agef} では、経路の集合がより大きいモデルで成り立ち、小さいモデルで成り立たないことを用いる別の議論が必要である。
- **Reported:** 2026-10-28 (10fede1)
