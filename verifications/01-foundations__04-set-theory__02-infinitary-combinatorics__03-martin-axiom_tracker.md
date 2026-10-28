# Verification tracker: `01-foundations/04-set-theory/02-infinitary-combinatorics/03-martin-axiom.html`

<!-- source: 01-foundations/04-set-theory/02-infinitary-combinatorics/03-martin-axiom.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the definitions, the Rasiowa–Sikorski argument for MA(aleph_0), the falsity of MA(2^{aleph_0}), and the c.c.c.-necessity proposition are sound. The main problems are in the supplements and stated-only facts: (1) the supplement after set:ma-consistency falsely claims MA implies 2^{aleph_0} is regular and that regularity is essential for Solovay–Tennenbaum; (2) the Solovay–Tennenbaum fact uses the wrong hypothesis 2^{<kappa}=kappa instead of kappa^{<kappa}=kappa; (3) the PFA attribution is imprecise; (4) the intuition overstates MA as the strongest consistent principle of its form. These are the most serious issues; the proofs themselves check out.

## Issues

### ISSUE-0001 [Open] MA does not imply 2^{aleph_0} is regular
- **Category:** Supplement/remark error
- **Location:** supplement after set:ma-consistency
- **Detail:** The supplement claims 'MA は $2^{\aleph_{0}}$ が正則であることを導く（\ref{set:ma-continuum-regular}）'. This is false: MA is consistent with $2^{\aleph_{0}}=\aleph_{2}$ (regular) but MA alone does not force regularity of the continuum. In fact MA + $2^{\aleph_{0}}$ singular is consistent (e.g. by adding many Cohen reals to a model of MA, or via the standard result that MA is preserved by c.c.c. forcing and $2^{\aleph_{0}}$ can be made singular, e.g. $\aleph_{\omega}$). The cited corollary set:ma-continuum-regular presumably states that under MA, $2^{\aleph_{0}}$ is regular only when combined with additional hypotheses, or the citation is being misused. The claim that 'limiting $\kappa$ to regular is essential' is therefore also unsupported: MA + $2^{\aleph_{0}}=\kappa$ is consistent for singular $\kappa$ with $\mathrm{cf}(\kappa)>\omega$ (Solovay–Tennenbaum iteration works for any $\kappa$ with $\kappa^{<\kappa}=\kappa$, including singular ones like $\aleph_{\omega}$ when $\aleph_{\omega}^{<\aleph_{\omega}}=\aleph_{\omega}$ fails, but for $\kappa=\aleph_{\omega+1}$ etc.).
- **Proposed fix:** Replace with: 'MA のもとで $2^{\aleph_{0}}$ が正則になるのは、$2^{\aleph_{0}}$ が後続基数である場合など追加の仮定があるときである（\ref{set:ma-continuum-regular} を参照）。実際、MA と $2^{\aleph_{0}}$ が特異基数である模型も無矛盾である。' Or remove the claim that regularity is essential and state only that Solovay–Tennenbaum produces models with $2^{\aleph_{0}}=\kappa$ for regular $\kappa$ with $\kappa^{<\kappa}=\kappa$.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Solovay–Tennenbaum fact states regularity requirement incorrectly
- **Category:** Unsupported fact
- **Location:** set:ma-consistency
- **Detail:** The fact states: '$\kappa>\aleph_{1}$ が正則基数で $2^{<\kappa}=\kappa$ を満たすならば...'. The actual Solovay–Tennenbaum theorem requires $\kappa^{<\kappa}=\kappa$ (not $2^{<\kappa}=\kappa$), and $\kappa$ need not be regular—the iteration works for any $\kappa$ with $\kappa^{<\kappa}=\kappa$ and $\mathrm{cf}(\kappa)>\omega$. Writing $2^{<\kappa}=\kappa$ is a different (stronger in some cases, weaker in others) condition and is not the standard hypothesis. Also the requirement $\kappa>\aleph_{1}$ should be $\kappa\ge\aleph_{1}$ or $\kappa>\aleph_{0}$ with $\kappa^{<\kappa}=\kappa$.
- **Proposed fix:** State: '$\kappa$ が $\kappa^{<\kappa}=\kappa$ を満たす基数ならば、c.c.c. をもつ半順序による強制拡大で $\mathrm{MA}+2^{\aleph_{0}}=\kappa$ を成り立たせることができる（Solovay–Tennenbaum 1971）。特に $\kappa=\aleph_{2}$ や、$\kappa$ が正則で $2^{<\kappa}=\kappa$ を満たすならばこれが適用できる。'
- **Reported:** 2026-10-28 (8ccef3d)
**Opus Rebuttal:** Kunen's statement (Thm VIII.6.3, also Solovay–Tennenbaum) is exactly: $\kappa>\aleph_{1}$ regular with $2^{<\kappa}=\kappa$. For regular $\kappa$, $2^{<\kappa}=\kappa$ is equivalent to $\kappa^{<\kappa}=\kappa$, so there is no discrepancy; regularity is needed since $2^{\aleph_{0}}$ has uncountable cofinality and MA implies $2^{\aleph_{0}}$ regular.

### ISSUE-0003 [Open] PFA attribution and claim about proper forcing
- **Category:** Supplement/remark error
- **Location:** supplement after set:ma-ccc-necessary
- **Detail:** The supplement says 'PFA は $2^{\aleph_{0}}=\aleph_{2}$ を導く（Todorčević, Veličković）'. PFA implies $2^{\aleph_{0}}=\aleph_{2}$ is a theorem of Foreman–Magidor–Shelah (and independently of Veličković–Todorčević for the continuum value). The attribution to 'Todorčević, Veličković' alone is imprecise; the standard reference is Foreman–Magidor–Shelah, 'Martin's Maximum, saturated ideals, and non-regular ultrafilters I' (1988), and Veličković–Todorčević for related results. Also 'c.c.c. な半順序と可算閉な半順序をともに含む「適正（proper）」な半順序' is correct as a description of proper forcing, but the claim that PFA is 'MA に類似した公理' for proper posets is fine. The attribution is the issue.
- **Proposed fix:** Change to: 'PFA は $2^{\aleph_{0}}=\aleph_{2}$ を導く（Foreman–Magidor–Shelah 1988）。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Claim that MA is 'strongest consistent' of its form
- **Category:** Supplement/remark error
- **Location:** intuition after set:ma
- **Detail:** The intuition says 'MA はこの形の主張のうち矛盾しない最強のものである'. This is an overstatement: MA is the strongest of the form 'MA($\kappa$) for all $\kappa<2^{\aleph_{0}}$', but there are stronger principles (e.g. PFA, MM) consistent with ZFC that imply MA. The phrase 'この形の主張のうち' may be intended to restrict to the MA($\kappa$) family, in which case it is correct, but as written it is ambiguous and can be read as claiming MA is the strongest consistent combinatorial principle of this type, which is false.
- **Proposed fix:** Clarify: 'MA は「すべての $\kappa<2^{\aleph_{0}}$ について MA($\kappa$)」という形の主張のうち矛盾しない最強のものである（より強い原理 PFA や MM は別の形をとる）。'
- **Reported:** 2026-10-28 (8ccef3d)
