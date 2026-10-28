# Verification tracker: `01-foundations/01-general-logic/03-modal-logic/02-gl-axioms.html`

<!-- source: 01-foundations/01-general-logic/03-modal-logic/02-gl-axioms.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the derivations of axiom 4, the Löb rule, the modal second incompleteness form, the formalized Löb argument, and the four fixed points are sound, and citations match their targets. The main genuine problems are confined to side comments: the Löb-rule hypcheck misdescribes why \boxdot is needed (it is stronger than \varphi, not weaker), and the supplement's characterization of GL frames is stated as a definitional fact although completeness/characterization is a nontrivial result deferred to another page. The Banach analogy is adequately hedged. No proof-level gaps or missing hypotheses were found.

## Issues

### ISSUE-0001 [Open] Incorrect reading of the boxdot hypothesis in Löb rule hypcheck
- **Category:** Supplement/remark error
- **Location:** logic:lob-rule / hypcheck
- **Detail:** The hypcheck says that using \boxdot\varphi_{i} is needed 'to bring it inside \Box', and that weakening \boxdot\varphi_{i} to \varphi_{i} would prevent this. But \boxdot\varphi_{i} = \varphi_{i}\wedge\Box\varphi_{i} is stronger than \varphi_{i}, so weakening it to \varphi_{i} makes the hypothesis weaker, not the conclusion harder to derive in the stated sense. The actual reason \boxdot is needed is that the antecedent must be boxed (via \Box\alpha) to apply axiom L; the comment's explanation ('cannot be brought inside \Box') is imprecise/misleading about which direction the strengthening goes.
- **Proposed fix:** Replace the hypcheck comment with: 'The \boxdot\varphi_{i} form is needed because Step 1 must derive \Box\alpha (with \alpha=\varphi_{1}\wedge\cdots\wedge\varphi_{n}) in order to apply axiom L; the plain \varphi_{i} would not give \Box\alpha. Note \boxdot\varphi_{i} is stronger than \varphi_{i}.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Overstated claim that GL Kripke frames are exactly transitive conversely well-founded frames
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から)
- **Detail:** The supplement states 'GL のクリプキフレームはちょうど推移的で逆向きに整礎なものである'. This is the standard characterization of the *class of frames validating GL* (GL-frames), but as stated it can be read as claiming that every transitive conversely well-founded frame is a GL-frame, which is true, yet the phrasing 'GL のクリプキフレーム' is ambiguous between 'frames validating GL' and 'frames on which GL is sound/complete'. The completeness direction (GL is characterized by finite transitive irreflexive frames) is a nontrivial theorem not established on this page; stating it as a definitional fact without qualification is an overstatement relative to what has been proved here.
- **Proposed fix:** Rephrase to: 'GL を妥当にするクリプキフレームはちょうど推移的で逆向きに整礎なフレームである（この特徴づけと完全性は \ref{logic:page-kripke-semantics} で示す）。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Banach fixed point analogy stated slightly too strongly
- **Category:** Supplement/remark error
- **Location:** supplement (不動点と縮小写像)
- **Detail:** The analogy is hedged ('直観的な比喩であり、厳密な対応を主張するものではない'), which is fine, but the sentence 'これは、距離空間で縮小写像がただ一つの不動点をもつこと（バナッハの不動点定理）の類比としてしばしば説明される' is acceptable. No error; however the preceding claim that '\Box の中に閉じ込められた p は解の決定に一段遅れて効く' is informal but not false. This is borderline; flagging only the imprecision that GL fixed points are unique *provably in GL* (provable equivalence), not literally unique formulas.
- **Proposed fix:** Add: '一意性は「GL で証明可能に同値」という意味での一意性である（構文的に同一の式が一意というわけではない）。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Remark on GL not proving Box bot relies on problem not yet proved
- **Category:** Unsupported fact
- **Location:** remark after logic:gl-consistent
- **Detail:** The remark correctly notes that (\Box\bot)^{t}=\top so the top translation cannot show \mathsf{GL}\nvdash\Box\bot, and points to problem \ref{logic:prob-gl-not-box-diamond}. This is a legitimate pointer, not a logical dependency, so it is acceptable. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
