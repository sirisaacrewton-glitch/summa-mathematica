# Verification tracker: `01-foundations/05-proof-theory/01-sequent-calculus/05-maehara-interpolation.html`

<!-- source: 01-foundations/05-proof-theory/01-sequent-calculus/05-maehara-interpolation.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Lindon's interpolation theorem misstated (sign condition)
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 / リンドンの補間定理
- **Detail:** The supplement says the interpolant built by the construction has the property that a relation symbol occurring positively (negatively) in the interpolant occurs with the same sign on both sides. This is not Lyndon's theorem. Lyndon's theorem states: if a relation symbol occurs only positively (or only negatively) in both A and B, then there is an interpolant in which that symbol occurs only positively (or only negatively). The claim as written (that the constructed interpolant's signs are limited to symbols appearing with the same sign on both sides) is a different and generally false statement; e.g. in case (1c) the interpolant is $\neg P$ where $P$ occurs positively in $\Gamma_{2}$ and negatively in $\Delta_{1}$, so $P$ appears negatively in $I$ while appearing positively on one side. The sign bookkeeping does not work as described.
- **Proposed fix:** Replace with: *リンドンの補間定理.* 関係記号 $R$ が $A$ と $B$ の両方で正の位置にしか現れない（または両方で負の位置にしか現れない）なら、$R$ が補間式でも正の位置にしか現れない（負の位置にしか現れない）ような補間式がとれる、という精密化が知られている（リンドンの補間定理）。前原の構成を符号の管理つきで行うことで得られるが、全部の場合の確認は本サイトでは行っていない。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that equality can appear in interpolant only if it appears on both sides
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討 / 等号
- **Detail:** The supplement states that in this page's LK, $=$ is an ordinary relation symbol, so $=$ can appear in the interpolant only when $=$ occurs on both sides. But the interpolant condition (iii) is $\mathrm{Rel}(I)\subseteq\mathrm{Rel}(\Gamma_{1},\Delta_{1})\cap\mathrm{Rel}(\Gamma_{2},\Delta_{2})$, which indeed forces $=$ to be common. However the sentence then contrasts this with 'genuine equality' where an interpolant consisting only of equality may be needed even with no common non-logical symbol. The contrast is misleading: in the present treatment $=$ is counted in Rel, so if $=$ is absent from one side it cannot appear in $I$; the remark's framing suggests the present system is weaker than needed, but the real issue is that the equality axioms (initial sequents) are not present, not that $=$ is treated as a relation symbol. As stated the sentence is imprecise about what fails.
- **Proposed fix:** Rewrite: 本ページの $\mathsf{LK}$ では $=$ を通常の関係記号として扱うので、条件 (iii) により $=$ が補間式に現れるのは両側に $=$ があるときに限られる。しかし本物の等号では、等号の初期シーケント（反射性・ライプニッツの原理）が導出に現れ、共通の非論理記号がなくても等号のみからなる補間式が必要になることがある（\ref{logic:craig-interpolation} の例 2）。等号の初期シーケントを加えた体系（\ref{pt:lk-equality}）で同じ構成を行うには、その体系のカット除去と、等号を関係記号として数えるか論理記号として扱うかの整合性が要る。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Daigneault attribution stated too vaguely / possibly misattributed
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から / 代数的には
- **Detail:** The supplement attributes work treating Craig and Beth theorems in the framework of polyadic algebras to A. Daigneault, hedged with 'と言われている'. Daigneault's well-known work is on polyadic algebras and algebraic logic (e.g. 'Freedom in polyadic algebras and two theorems of Beth and Craig', 1964), so the attribution is broadly plausible, but the sentence as written is a vague hearsay claim inside a supplement and is not verifiable from the page. Since the instruction is to check stated-only claims for accuracy, the hedged attribution is acceptable only if correct; the phrasing 'クレイグとベートの定理を扱った' is consistent with the literature. This is borderline; flagging as medium because the claim is stated without precision about what exactly was proved.
- **Proposed fix:** Make precise: 多進代数の枠組みでベートの定義可能性定理とクレイグの補間定理を代数的に導いたドゥエニョ（A. Daigneault）の研究がある（本サイトでは原論文を確かめていない）。
- **Reported:** 2026-10-28 (8ccef3d)
