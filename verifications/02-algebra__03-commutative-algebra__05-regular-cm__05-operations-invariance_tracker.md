# Verification tracker: `02-algebra/03-commutative-algebra/05-regular-cm/05-operations-invariance.html`

<!-- source: 02-algebra/03-commutative-algebra/05-regular-cm/05-operations-invariance.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Power series ring preservation claim for non-complete A
- **Category:** Supplement/remark error
- **Location:** remark 他の性質 (ring:sec-oi-polynomial)
- **Detail:** The remark claims that for a Noetherian local ring A, regularity/CM/Gorenstein are preserved by A[[t]]. It justifies this only for complete A (via A[[t]] = completion of A[t]_{(m,t)}). For general (non-complete) Noetherian local A, the statement 'regular/CM/Gorenstein is preserved by A[[t]]' is not established by the given argument, and the parenthetical '一般の場合は本サイト未収録' acknowledges this. However the sentence as written ('冪級数環 A[[t]] でも...保たれることが知られている') asserts the general result as known, which is a stronger claim than what is justified. Actually the general statement is true (A[[t]] is a faithfully flat extension and one can use the fiber A[[t]]/mA[[t]] = k[[t]]), but the text does not supply this and the phrasing is imprecise about which case is proven. This is borderline; the claim itself is true, so I flag only the imprecision that the justification given covers only complete A while the assertion is stated for all Noetherian local A.
- **Proposed fix:** Restrict the asserted-and-justified statement to complete A, and state the general case as a separate known fact with a correct reason: 'For a complete Noetherian local ring A, A[[t]] is the completion of A[t]_{(\mathfrak{m},t)}, so regularity/CM/Gorenstein pass to A[[t]] by this theorem and \ref{ring:completion-invariance}. For general Noetherian local A the same holds because A[[t]] is a faithfully flat local extension of A with regular fiber k[[t]] (regular, CM, Gorenstein descend along such extensions); this is not treated on this site.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Normality lifting remark lacks hypotheses
- **Category:** Supplement/remark error
- **Location:** remark 正規性の持ち上げ (ring:sec-oi-quotient)
- **Detail:** The remark states 'if \bar A is normal then A is normal' using Serre's criterion. This is true when A is Noetherian and x is a non-zero-divisor (the setting of the proposition), but as stated in the remark it omits that A is Noetherian and x is a non-zero-divisor, and also that A is a domain (normality requires domain). Without these the claim can fail. The remark should reference the ambient hypotheses of the proposition.
- **Proposed fix:** State: 'Let (A,\mathfrak{m}) be a Noetherian local ring and x\in\mathfrak{m} a non-zero-divisor. If \bar A=A/xA is normal (in particular a domain), then A is a domain and normal; this follows from Serre's criterion \ref{ring:serre-normality} (not treated on this site).'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Descent remark on CM/Gorenstein and dimension formula
- **Category:** Supplement/remark error
- **Location:** remark 降下と上昇 (ring:sec-oi-descent)
- **Detail:** The remark says CM and Gorenstein descend along locally flat homomorphisms using the dimension formula dim B = dim A + dim B/mB. This is correct for the CM part, but for Gorenstein descent one additionally needs the fiber to be Gorenstein (or a Gorenstein fiber condition); the dimension formula alone does not give Gorenstein descent. The statement as written overstates what the dimension formula yields.
- **Proposed fix:** State: 'CM descends along a local flat homomorphism \varphi:(A,\mathfrak{m})\to(B,\mathfrak{n}) using the dimension formula \dim B=\dim A+\dim B/\mathfrak{m}B; Gorenstein descends when in addition the closed fiber B/\mathfrak{m}B is Gorenstein (e.g. a field). These are not treated on this site.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Table: A/xA => A for domain/reduced/normal marked yes
- **Category:** Supplement/remark error
- **Location:** table 操作と性質 (ring:table-operations-invariance) and remark 表の根拠
- **Detail:** The table marks 'A/xA => A' as :yes: for 整域, 被約, 正規. For 整域 and 被約 this is correct (proposition 4). For 正規, the remark itself says the normal case of 'A/xA => A' is 未収録 (not treated), yet the table marks it :yes:. This is an inconsistency: the table asserts a result the text does not prove and explicitly says is not covered. (The statement is in fact true, but the table's justification is missing and contradicts the remark.)
- **Proposed fix:** Either mark the 正規 entry of the 'A/xA => A' column as :partial: / add a footnote 'not treated on this site', or add a citation. Concretely, change the remark to: '剰余は \ref{ring:regular-element-quotient}（正則の :partial: は x\notin\mathfrak{m}^{2} のとき、整域・被約の A/xA\Rightarrow A を含む）と \ref{ring:regular-element-quotient-counterexamples}。正規の A/xA\Rightarrow A は本サイト未収録（表では未証明として扱う）。'
- **Reported:** 2026-10-28 (10fede1)
