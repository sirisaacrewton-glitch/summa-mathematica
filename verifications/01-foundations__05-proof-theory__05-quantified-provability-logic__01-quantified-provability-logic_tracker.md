# Verification tracker: `01-foundations/05-proof-theory/05-quantified-provability-logic/01-quantified-provability-logic.html`

<!-- source: 01-foundations/05-proof-theory/05-quantified-provability-logic/01-quantified-provability-logic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect claim that pure predicate-logic valid/always-provable/always-true classes coincide
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (対照)
- **Detail:** The supplement claims that for pure predicate-logic sentences (no predicate letters? or with predicate letters?), the classes of valid sentences, always-provable sentences, and always-true sentences coincide, attributing this to a Hilbert–Bernays refinement of Löwenheim–Skolem. This is false as stated. If 'pure predicate logic' means formulas without predicate letters, then there are no predicate letters to realize, so 'always provable' and 'always true' trivially reduce to validity — but then the claim is vacuous, not a 'refinement of Löwenheim–Skolem'. If predicate letters are allowed, the claim is plainly false: e.g. $\Box\forall x\,Fx\to\forall x\,\Box Fx$ is always provable (the problem on this page), but $\forall x\,\Box Fx\to\Box\forall x\,Fx$ is not always true (the second problem), so the three classes do not coincide. The attribution to Hilbert–Bernays is also unsupported.
- **Proposed fix:** Replace with: '対照. 述語記号をもたない純粋な一階述語論理の文（$\Box$ を含まない文）については、妥当性・常に証明可能・常に真は一致する。しかし述語記号と $\Box$ を許すと、たとえば $\Box\forall x\,Fx\to\forall x\,\Box Fx$ は常に証明可能だが、$\forall x\,\Box Fx\to\Box\forall x\,Fx$ は常に真ではないので、三つのクラスは一致しない。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Misattribution of non-axiomatizability to Valdanyan's theorem
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (QGL)
- **Detail:** The supplement says Montagna (1984) gave an example of an always-provable sentence not provable in QGL, and that 'by Valdanyan's (1985) theorem, the set of always-provable sentences is not even axiomatizable (not recognizable)'. This conflates two distinct results. The non-recognizability ($\Pi^{0}_{2}$-completeness) of the set of always-provable QML sentences is Valdanyan's theorem, but the statement that QGL is incomplete (Montagna's example) is a separate fact. The phrasing 'by Valdanyan's theorem ... not axiomatizable' is imprecise: Valdanyan's theorem gives $\Pi^{0}_{2}$-completeness, which implies non-recognizability, but the sentence as written suggests Valdanyan's theorem is what shows QGL's incompleteness, which is Montagna's result. Also 'axiomatizable' should be 'recognizable (recursively enumerable)' to match the parenthetical.
- **Proposed fix:** Rewrite: 'QGL. $\mathsf{GL}$ に一階述語論理を加えた体系 QGL の定理は常に証明可能である。モンターニャ（1984）は QGL で証明できない常に証明可能な文の例を与え、QGL が完全でないことを示した。さらにヴァルダニャン（1985）の定理により、常に証明可能な文の集合は $\Pi^{0}_{2}$ 完全、したがって認識可能（帰納的可算）でない。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Overstated claim about forcing the standard model of arithmetic
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement says 'appropriate QML sentences can force that the interpretation of predicate letters is the standard model of natural numbers, from which the whole of arithmetic truth (Artemov) or all of $\Pi^{0}_{2}$ (Valdanyan) is embedded'. This is imprecise/overstated: QML sentences cannot force the predicate-letter interpretation to literally be the standard model $\mathcal{N}$ in a way that makes the set of always-true sentences arithmetically definable; rather, the argument shows that the set of always-true sentences is not arithmetical (Artemov) and the set of always-provable sentences is $\Pi^{0}_{2}$-complete (Valdanyan). The phrase 'force ... standard model' is a heuristic that, taken literally, is false (the interpretation is an arbitrary arithmetic formula, not a model).
- **Proposed fix:** Soften to: '次のページで見るように、述語記号の解釈を通じて算術の構造を QML の内部で「コード化」でき、そこから QML の問いに算術の真理の全体（アルテモフ：常に真な文の集合は算術的でない）や $\Pi^{0}_{2}$ の全体（ヴァルダニャン：常に証明可能な文の集合は $\Pi^{0}_{2}$ 完全）が埋め込まれる。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Remark on partial truth predicates for bounded logical complexity
- **Category:** Supplement/remark error
- **Location:** pt:truth-set-facts / item 2
- **Detail:** The remark states that for each $r$, the set $V_{r}$ of Gödel numbers of true sentences with at most $r$ logical symbols is arithmetical, justified by 'partial truth predicates of $\Sigma_{n}$ type'. This is essentially correct (bounded complexity truth is arithmetical), but the parenthetical 'Boolos Chapter 17 note; this site has not constructed partial truth predicates' is a side comment. The claim itself is fine; however the phrase '$\Sigma_{n}$ 型の部分的な真理述語' is vague. More importantly, the statement is true but the justification is only a citation to an unconstructed object. This is borderline; the main substantive issue is that the claim is stated without proof and relies on an unproven assertion. Since it is flagged as 'generally said' and the site has not constructed it, it is acceptable as a remark, but the precise claim that $V_{r}$ is arithmetical is correct. No change strictly required, but the vague '$\Sigma_{n}$ 型' should be made precise.
- **Proposed fix:** Make precise: '各 $r$ について $V_{r}$ は算術的である。実際、論理記号の出現が $r$ 個以下の文の真理は、その構文の複雑さに応じた有限段階の真理述語（$\Sigma_{n}$ 論理式で定義される）で判定できる。'
- **Reported:** 2026-10-28 (10fede1)
