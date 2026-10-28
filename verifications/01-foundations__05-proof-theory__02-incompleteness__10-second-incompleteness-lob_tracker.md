# Verification tracker: `01-foundations/05-proof-theory/02-incompleteness/10-second-incompleteness-lob.html`

<!-- source: 01-foundations/05-proof-theory/02-incompleteness/10-second-incompleteness-lob.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 12 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine error is in the remark after the second incompleteness theorem: it claims the Rosser provability predicate fails D1–D3, which is false (it satisfies D1–D3; what fails is the additional property needed for the second theorem). A minor imprecision is the description of Con as 'Π 文（Σ 文の否定）' without specifying Σ₁/Π₁ levels. The proofs, the formalized first incompleteness lemma, Löb's theorem and its formalization, and the corollaries are logically sound, and the hypcheck is accurate.

## Issues

### ISSUE-0001 [Open] Rosser predicate claimed not to satisfy D1–D3
- **Category:** Supplement/remark error
- **Location:** remark (after pt:godel-second), third bullet
- **Detail:** The remark says the Rosser provability predicate $\mathrm{Bew}^{R}$ (\ref{pt:rosser-sentence}) is an example of a predicate that does not satisfy D1–D3. This is false: the Rosser predicate satisfies D1 and D2 (and D3 as well, since $\mathrm{Bew}^{R}(\varphi)\to\mathrm{Bew}^{R}(\mathrm{Bew}^{R}(\varphi))$ is provable). What fails for the Rosser predicate is not D1–D3 but the factivity-related property / the equivalence with the standard Bew needed for the second incompleteness argument; the Rosser sentence is used precisely because D1–D3 alone do not suffice to derive the second theorem for it. So the cited example is wrong.
- **Proposed fix:** Replace with: "ロッサーの述語 $\mathrm{Bew}^{R}$（\ref{pt:rosser-sentence}）も D1–D3 を満たすが、第二不完全性定理の議論には $\mathrm{Bew}^{R}$ と標準の $\mathrm{Bew}$ の関係（あるいは $\mathrm{Con}$ の解釈）が別途必要で、D1–D3 だけでは結論できない。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Con is not a Π sentence
- **Category:** Supplement/remark error
- **Location:** definition pt:consistency-sentence
- **Detail:** The definition states "$\mathrm{Con}$ は Π 文（Σ 文の否定）である". This is wrong: $\mathrm{Con}=\neg\mathrm{Bew}(\Godel{\bot})$ is a $\Pi_{1}$ sentence, but it is not "the negation of a Σ sentence" in the sense claimed — $\mathrm{Bew}(\Godel{\bot})$ is $\Sigma_{1}$, so $\mathrm{Con}$ is $\Pi_{1}$, which is correct, but the parenthetical "(Σ 文の否定)" is imprecise because a $\Pi_{1}$ sentence is the negation of a $\Sigma_{1}$ sentence, not of an arbitrary Σ sentence. More importantly, the claim that $\mathrm{Con}$ is Π is fine, but the phrasing conflates levels. The real error: $\mathrm{Con}$ is $\Pi_{1}$, and the statement as written ("Π 文（Σ 文の否定）") is acceptable only if "Σ" means $\Sigma_{1}$. This is a minor imprecision rather than a hard falsehood; flag as imprecise.
- **Proposed fix:** Write: "$\mathrm{Con}$ は $\Pi_{1}$ 文（$\Sigma_{1}$ 文 $\mathrm{Bew}(\Godel{\bot})$ の否定）である。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Model of PA+¬Con has nonstandard proof of ⊥ — needs consistency of PA
- **Category:** Supplement/remark error
- **Location:** remark (after pt:godel-second), second bullet
- **Detail:** The bullet says: if PA is consistent then PA+¬Con is consistent, and "そのモデルは超準モデルで、そこには ⊥ の超準的な「証明」がある". The claim that every model of PA+¬Con is nonstandard is correct (a standard model would satisfy Con). But the phrasing "そのモデルは超準モデル" ("its model is a nonstandard model") is fine. However, the assertion that there is a nonstandard "proof" of ⊥ in such a model is correct. This bullet is essentially correct; no error. (Not reported.)
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] GL completeness attribution and 'one-level-deeper' intuition
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から)
- **Detail:** The supplement says the axiom $\Box(\Box p\to p)\to\Box p$ corresponds to "到達可能性関係の逆が整礎" (the converse of the accessibility relation being well-founded) and that in arithmetic this means "証明についての証明への入れ子が無限に下降できない". The correspondence of Löb's axiom with transitivity plus well-foundedness of the converse (i.e., the relation being converse-well-founded / no infinite ascending chains) is standard and correct. The arithmetic gloss is informal but not false. The attribution of GL's arithmetical completeness to Solovay (\ref{pt:page-solovay}) is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Intuition: 'PA proves "if S is provable then S is true" only when S is actually provable'
- **Category:** Unsupported fact
- **Location:** intuition (Löb)
- **Detail:** The intuition box states: "$\PA$ は「$S$ が証明できれば $S$ は真」を、$S$ が実際に証明できるときにしか証明しない". This is a correct informal paraphrase of Löb's theorem (PA proves $\Box S\to S$ iff PA proves $S$). No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Step 2 of formalized-first: G→¬□G from G's property
- **Category:** Logical gap
- **Location:** pt:formalized-first / Step 2
- **Detail:** Step 2 derives $\PA\vdash G\to\neg\Box G$ from "$G$ の性質". The property of $G$ is $\PA\vdash G\leftrightarrow\neg\Box G$, so $\PA\vdash G\to\neg\Box G$ follows directly. This is fine. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Step 1 of formalized-first: deriving □G→□¬□G
- **Category:** Logical gap
- **Location:** pt:formalized-first / Step 1
- **Detail:** From $\PA\vdash G\to\neg\Box G$, applying D1 gives $\PA\vdash\Box(G\to\neg\Box G)$, and D2 gives $\PA\vdash\Box G\to\Box\neg\Box G$. This is correct. Then D3 gives $\PA\vdash\Box G\to\Box\Box G$. The tautology $\Box G\to(\neg\Box G\to\bot)$ with D1, D2 gives $\PA\vdash\Box\Box G\to(\Box\neg\Box G\to\Box\bot)$. Combining: $\Box G\to\Box\Box G$, $\Box G\to\Box\neg\Box G$, and $\Box\Box G\to(\Box\neg\Box G\to\Box\bot)$ yield $\PA\vdash\Box G\to\Box\bot$. Correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Reference to pt:godel-first.2 in theorem proof
- **Category:** Improper link
- **Location:** pt:godel-second / proof item 2
- **Detail:** The proof of item 2 cites \ref{pt:godel-first.2}, but the label table only lists pt:godel-first.1 (theorem 8.5). The suffix .2 presumably refers to item 2 of theorem 8.5 (ω-inconsistency part). This is a legitimate item reference if theorem 8.5 has such an item. Given the table lists only .1, but the convention allows suffix references to items, and the first incompleteness theorem indeed has an ω-inconsistency clause, this is acceptable. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] Applying second incompleteness to PA+Con requires D1–D3 for the extended theory
- **Category:** Missing hypothesis
- **Location:** pt:prob-consistency-extension / solution
- **Detail:** The solution asserts that for PA+Con, "その証明可能性述語について D1–D3 と対角化定理が同様に成り立つので、第二不完全性定理を PA+Con に適用できる". This is correct in outline: the extended theory is recursively axiomatized (axioms defined by a Δ formula), so its provability predicate satisfies D1–D3 and the diagonal lemma applies. The solution is adequate. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0010 [Open] Remark: 'PA+¬Con is consistent' uses only (1) and deduction theorem
- **Category:** Supplement/remark error
- **Location:** remark (after pt:godel-second), second bullet
- **Detail:** The bullet says: "$\PA$ が無矛盾なら $\PA+\neg\mathrm{Con}$ も無矛盾で（1 と演繹定理）". If PA+¬Con were inconsistent, then PA ⊢ Con, contradicting item 1. This is correct reasoning (it uses item 1, i.e., PA ⊬ Con, plus the deduction theorem). The parenthetical "(1 と演繹定理)" is accurate. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0011 [Open] Remark: 'Hilbert's program naive form' and ε₀ transfinite induction
- **Category:** Supplement/remark error
- **Location:** remark (after pt:godel-second), first bullet
- **Detail:** The first bullet says proving Con(PA) requires principles not available in PA, e.g., transfinite induction up to ε₀ or a set-theoretic argument showing N⊨PA. This is correct (Gentzen's consistency proof uses TI up to ε₀, which is not provable in PA). No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0012 [Open] Modal correspondence remark: K4 theorem reference
- **Category:** Supplement/remark error
- **Location:** remark 様相論理との対応
- **Detail:** The remark says the proof above corresponds to reading the K4 theorem \ref{logic:lob-argument-formalized} arithmetically. The label logic:lob-argument-formalized is titled "レーブの議論の形式化" (theorem 2.10), which is the formalized Löb argument in GL. The unformalized Löb proof corresponds to the GL derivation of Löb's theorem from the diagonal (fixed-point) construction, which is indeed the content of that theorem. This is a reasonable citation. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
