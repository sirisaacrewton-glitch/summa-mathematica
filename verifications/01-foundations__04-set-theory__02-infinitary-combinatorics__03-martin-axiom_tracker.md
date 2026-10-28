# Verification tracker: `01-foundations/04-set-theory/02-infinitary-combinatorics/03-martin-axiom.html`

<!-- source: 01-foundations/04-set-theory/02-infinitary-combinatorics/03-martin-axiom.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 7 / Resolved: 0 / Ignored: 1

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] MA does not imply 2^{aleph_0} is regular
- **Category:** Supplement/remark error
- **Location:** supplement after set:ma-consistency
- **Detail:** The supplement claims 'MA は $2^{\aleph_{0}}$ が正則であることを導く（\ref{set:ma-continuum-regular}）'. This is false: MA is consistent with $2^{\aleph_{0}}=\aleph_{2}$ (regular) but MA alone does not force regularity of the continuum. In fact MA + $2^{\aleph_{0}}$ singular is consistent (e.g. by adding many Cohen reals to a model of MA, or via the standard result that MA is preserved by c.c.c. forcing and $2^{\aleph_{0}}$ can be made singular, e.g. $\aleph_{\omega}$). The cited corollary set:ma-continuum-regular presumably states that under MA, $2^{\aleph_{0}}$ is regular only when combined with additional hypotheses, or the citation is being misused. The claim that 'limiting $\kappa$ to regular is essential' is therefore also unsupported: MA + $2^{\aleph_{0}}=\kappa$ is consistent for singular $\kappa$ with $\mathrm{cf}(\kappa)>\omega$ (Solovay–Tennenbaum iteration works for any $\kappa$ with $\kappa^{<\kappa}=\kappa$, including singular ones like $\aleph_{\omega}$ when $\aleph_{\omega}^{<\aleph_{\omega}}=\aleph_{\omega}$ fails, but for $\kappa=\aleph_{\omega+1}$ etc.).
- **Proposed fix:** Replace with: 'MA のもとで $2^{\aleph_{0}}$ が正則になるのは、$2^{\aleph_{0}}$ が後続基数である場合など追加の仮定があるときである（\ref{set:ma-continuum-regular} を参照）。実際、MA と $2^{\aleph_{0}}$ が特異基数である模型も無矛盾である。' Or remove the claim that regularity is essential and state only that Solovay–Tennenbaum produces models with $2^{\aleph_{0}}=\kappa$ for regular $\kappa$ with $\kappa^{<\kappa}=\kappa$.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still claims MA implies 2^{aleph_0} is regular and that restricting kappa to regular is essential; this is false (MA is consistent with a singular continuum, e.g. by c.c.c. forcing adding Cohen reals to a model of MA, which preserves MA and makes 2^{aleph_0} singular). The cited corollary set:ma-continuum-regular cannot support this.

### ISSUE-0002 [Ignored: Valid Rebuttal] Solovay–Tennenbaum fact states regularity requirement incorrectly
- **Category:** Unsupported fact
- **Location:** set:ma-consistency
- **Detail:** The fact states: '$\kappa>\aleph_{1}$ が正則基数で $2^{<\kappa}=\kappa$ を満たすならば...'. The actual Solovay–Tennenbaum theorem requires $\kappa^{<\kappa}=\kappa$ (not $2^{<\kappa}=\kappa$), and $\kappa$ need not be regular—the iteration works for any $\kappa$ with $\kappa^{<\kappa}=\kappa$ and $\mathrm{cf}(\kappa)>\omega$. Writing $2^{<\kappa}=\kappa$ is a different (stronger in some cases, weaker in others) condition and is not the standard hypothesis. Also the requirement $\kappa>\aleph_{1}$ should be $\kappa\ge\aleph_{1}$ or $\kappa>\aleph_{0}$ with $\kappa^{<\kappa}=\kappa$.
- **Proposed fix:** State: '$\kappa$ が $\kappa^{<\kappa}=\kappa$ を満たす基数ならば、c.c.c. をもつ半順序による強制拡大で $\mathrm{MA}+2^{\aleph_{0}}=\kappa$ を成り立たせることができる（Solovay–Tennenbaum 1971）。特に $\kappa=\aleph_{2}$ や、$\kappa$ が正則で $2^{<\kappa}=\kappa$ を満たすならばこれが適用できる。'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — For regular kappa, 2^{<kappa}=kappa is equivalent to kappa^{<kappa}=kappa, and Kunen VIII.6.3 states exactly kappa>aleph_1 regular with 2^{<kappa}=kappa; the rebuttal is correct.
**Opus Rebuttal:** Kunen's statement (Thm VIII.6.3, also Solovay–Tennenbaum) is exactly: $\kappa>\aleph_{1}$ regular with $2^{<\kappa}=\kappa$. For regular $\kappa$, $2^{<\kappa}=\kappa$ is equivalent to $\kappa^{<\kappa}=\kappa$, so there is no discrepancy; regularity is needed since $2^{\aleph_{0}}$ has uncountable cofinality and MA implies $2^{\aleph_{0}}$ regular.

### ISSUE-0003 [Open] PFA attribution and claim about proper forcing
- **Category:** Supplement/remark error
- **Location:** supplement after set:ma-ccc-necessary
- **Detail:** The supplement says 'PFA は $2^{\aleph_{0}}=\aleph_{2}$ を導く（Todorčević, Veličković）'. PFA implies $2^{\aleph_{0}}=\aleph_{2}$ is a theorem of Foreman–Magidor–Shelah (and independently of Veličković–Todorčević for the continuum value). The attribution to 'Todorčević, Veličković' alone is imprecise; the standard reference is Foreman–Magidor–Shelah, 'Martin's Maximum, saturated ideals, and non-regular ultrafilters I' (1988), and Veličković–Todorčević for related results. Also 'c.c.c. な半順序と可算閉な半順序をともに含む「適正（proper）」な半順序' is correct as a description of proper forcing, but the claim that PFA is 'MA に類似した公理' for proper posets is fine. The attribution is the issue.
- **Proposed fix:** Change to: 'PFA は $2^{\aleph_{0}}=\aleph_{2}$ を導く（Foreman–Magidor–Shelah 1988）。'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still attributes PFA => 2^{aleph_0}=aleph_2 to 'Todorčević, Veličković'; the standard attribution is Foreman–Magidor–Shelah (1988), so the attribution remains imprecise.

### ISSUE-0004 [Open] Claim that MA is 'strongest consistent' of its form
- **Category:** Supplement/remark error
- **Location:** intuition after set:ma
- **Detail:** The intuition says 'MA はこの形の主張のうち矛盾しない最強のものである'. This is an overstatement: MA is the strongest of the form 'MA($\kappa$) for all $\kappa<2^{\aleph_{0}}$', but there are stronger principles (e.g. PFA, MM) consistent with ZFC that imply MA. The phrase 'この形の主張のうち' may be intended to restrict to the MA($\kappa$) family, in which case it is correct, but as written it is ambiguous and can be read as claiming MA is the strongest consistent combinatorial principle of this type, which is false.
- **Proposed fix:** Clarify: 'MA は「すべての $\kappa<2^{\aleph_{0}}$ について MA($\kappa$)」という形の主張のうち矛盾しない最強のものである（より強い原理 PFA や MM は別の形をとる）。'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The intuition still says MA is 'the strongest consistent principle of this form'; as written this is an overstatement since PFA/MM are stronger consistent principles implying MA. The intended restriction to the MA(kappa) family is not made explicit.

### ISSUE-0005 [Open] Baire category supplement misidentifies the poset and the dense sets
- **Category:** Supplement/remark error
- **Location:** supplement after set:ma-omega
- **Detail:** The supplement says that for X a nonempty complete metric or compact Hausdorff space, taking PP to be the nonempty open sets ordered by inclusion, 'this theorem's argument is exactly the proof of the Baire category theorem', with D_n={p | closure(p) ⊆ U_n}. But with PP = nonempty open sets ordered by ⊆, the filter G produced by MA(omega) is a family of open sets closed upward and directed downward, and ⋃G need not be a single point; the standard Baire proof uses the poset of nonempty open sets with the *reverse* inclusion (p ≤ q iff p ⊆ q is the wrong direction for 'extension'), or better the poset of pairs (open set, radius bound) with reverse inclusion, and the filter's union is a point only because of the metric completeness / compactness argument, which is not carried out. As stated, 'the argument is exactly the Baire proof' is imprecise: the dense sets D_n = {p | closure(p) ⊆ U_n} are dense in the reverse-inclusion poset, not in the ⊆-poset as literally written (in the ⊆-poset, density requires extending upward, which fails).
- **Proposed fix:** Replace with: 'Take PP to be the nonempty open sets ordered by reverse inclusion (p ≤ q iff p ⊆ q). For a dense open U_n, D_n = {p | closure(p) ⊆ U_n} (and in the complete metric case also diam(p) < 1/(n+1)) is dense in PP. A filter meeting all D_n yields, via completeness (or compactness), a point in ⋂_n U_n; this is the Baire category theorem argument.'
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0006 [Open] 'MA is the strongest consistent principle of this form' overstated
- **Category:** Supplement/remark error
- **Location:** intuition after set:ma
- **Detail:** The intuition states 'MA はこの形の主張のうち矛盾しない最強のものである'. Read literally this claims MA is the strongest consistent combinatorial principle of this type, which is false: PFA and MM are consistent (relative to large cardinals) and strictly stronger than MA. Only within the family {MA(kappa) : kappa < 2^{aleph_0}} is MA the strongest consistent member, and this restriction is not stated.
- **Proposed fix:** 'MA は MA(kappa)（kappa < 2^{aleph_0}）という形の主張のうち矛盾しない最強のものである（より強い原理 PFA や MM は MA を導くが，それらは別の形の公理である）。'
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0007 [Open] Solovay–Tennenbaum fact: kappa > aleph_1 vs kappa >= aleph_1 and role of regularity
- **Category:** Unsupported fact
- **Location:** set:ma-consistency
- **Detail:** The fact states the general Solovay–Tennenbaum result for 'kappa > aleph_1 regular with 2^{<kappa}=kappa'. The case kappa = aleph_1 is excluded by 'kappa > aleph_1', yet MA + 2^{aleph_0} = aleph_1 is exactly CH + MA, which holds under CH (corollary set:ch-implies-ma), so the theorem's conclusion is true at kappa = aleph_1 as well; the strict inequality is a harmless but slightly misleading restriction. More importantly, the accompanying supplement (ISSUE-0001) draws the false conclusion that regularity is essential; the fact itself is correct for regular kappa, but the surrounding text misuses it.
- **Proposed fix:** State: 'kappa >= aleph_1 regular with 2^{<kappa} = kappa (equivalently kappa^{<kappa} = kappa)'. And in the supplement, remove the claim that regularity is essential; instead note only that the construction requires 2^{<kappa} = kappa.
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0008 [Open] Hypcheck comment on DC in set:ma-omega is imprecise
- **Category:** Supplement/remark error
- **Location:** set:ma-omega / hypcheck
- **Detail:** The hypcheck says 'what is actually needed is DC, and if PP is well-orderable (e.g. countable) then c can be replaced by the least element of a well-ordering, so ZF suffices'. This is imprecise: the recursion p_{n+1} = c({q in D_n | q <= p_n}) is a recursion along omega choosing one element from each nonempty set, which is exactly DC (dependent choice) in general; if PP is well-orderable, one needs a well-ordering of PP to pick the least element, and the existence of a well-ordering is not automatic in ZF without AC, so 'ZF suffices' is only true when a well-ordering of PP is given. The claim as stated ('PP が整列可能なら…ZF で済む') is acceptable if read as 'given a well-ordering', but the phrase 'ZF で済む' without qualification is misleading.
- **Proposed fix:** '実際に必要なのは従属選択公理 (DC) である。PP に整列順序が与えられていれば（たとえば PP が可算なら），c を整列順序の最小元で置き換えられ，その場合は ZF で済む。'
- **Reported:** 2026-10-28 (048145a)
