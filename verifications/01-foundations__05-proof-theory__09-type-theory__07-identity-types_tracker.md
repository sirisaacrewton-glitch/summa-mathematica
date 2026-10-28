# Verification tracker: `01-foundations/05-proof-theory/09-type-theory/07-identity-types.html`

<!-- source: 01-foundations/05-proof-theory/09-type-theory/07-identity-types.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Extensional type theory: UIP and function extensionality
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that in extensional type theory (identity reflection rule) both UIP and function extensionality hold. UIP does follow from the reflection rule (proof irrelevance for identity proofs). However, function extensionality is NOT a consequence of the reflection rule alone in the usual intensional-to-extensional setup; the standard result (Martin-Löf 1975) is that extensional type theory validates UIP and makes type checking undecidable, but function extensionality requires additional principles (e.g. it holds in extensional type theory only because the reflection rule plus the presence of a proof-irrelevant equality makes all proofs of a proposition equal, but the standard statement is that extensional TT has UIP, not that it has function extensionality as a derived rule). The claim as stated is overstated.
- **Proposed fix:** Replace with: 「恒等型に反映規則（$p:a=b$ から $a\equiv b$ を導く）を加えた外延的型理論では、UIP（恒等の証明の一意性）が成り立ち、型の検査が決定不能になることが知られている。本ページの内包的恒等型は型検査の決定可能性を保つ代わりに、等しさが豊かな構造をもつ。」 (Remove the claim that function extensionality holds.)
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Based path induction equivalence direction
- **Category:** Supplement/remark error
- **Location:** remark 基点付き道帰納法
- **Detail:** The remark states that based path induction and full path induction are equivalent, and that full path induction follows from based path induction. This is correct in HoTT (based path induction implies full path induction). However, the remark says '逆に基点付き道帰納法から道帰納法も導けるので、二つは同値である' — this is a standard and correct fact (HoTT book Lemma 1.11.2 / Exercise). No error here. Actually this is fine.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
