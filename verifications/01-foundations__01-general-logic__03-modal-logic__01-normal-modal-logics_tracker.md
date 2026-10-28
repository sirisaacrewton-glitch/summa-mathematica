# Verification tracker: `01-foundations/01-general-logic/03-modal-logic/01-normal-modal-logics.html`

<!-- source: 01-foundations/01-general-logic/03-modal-logic/01-normal-modal-logics.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is a careful, largely correct development of normal modal logic: the unique-readability lemma, the normality theorem, the replacement and second-substitution theorems, the K4 modality reduction, the S4 14-modality and S5 6-modality theorems, and the two translations are all sound, and the hypchecks correctly identify where each hypothesis is used. The main issues found are in the closing supplement: the analogy between the S4 14-modality theorem and Kuratowski's closure–complement problem is overstated as 'the same structure' when the two are distinct statements that merely share the number 14 and the interior/closure intuition, and the McKinsey–Tarski attribution is hedged as 'unverified' despite being a standard correct theorem. The boxdot supplement's counterexample argument is correct. No logical gaps or missing hypotheses were found in the proofs.

## Issues

### ISSUE-0001 [Open] Kuratowski's 14-set problem mischaracterized as 'same structure'
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から：様相代数 / 位相との類比)
- **Detail:** The supplement says that \ref{logic:s4-fourteen} (S4 has at most 14 modalities) 'has the same structure' as Kuratowski's closure–complement problem (at most 14 distinct sets from iterating interior, closure, complement). This is imprecise/overstated. The 14 modalities of S4 are equivalence classes of modalities under S4-provable equivalence; the Kuratowski 14 sets arise from a specific free algebra (the interior/closure/complement operations on an arbitrary topological space), and the number 14 coincides but the two statements are not the same result. In particular the S4 count is about modalities built from \Box and \neg (with \Diamond as abbreviation), while Kuratowski's problem concerns the two operators int and cl (closure) plus complement, and the extremal example is a specific subset of the reals, not a general algebraic fact about S4. The claim that they have 'the same structure' is a loose analogy presented as a structural identity.
- **Proposed fix:** Replace with: 'This is analogous to (but not identical with) Kuratowski's closure–complement problem: in a topological space, repeatedly applying interior, closure and complement to a subset yields at most 14 distinct sets, and 14 is attained (e.g. by a suitable subset of $\mathbb{R}$). The number 14 in \ref{logic:s4-fourteen} counts equivalence classes of modalities under $\mathsf{S4}$-provable equivalence, which is a different (algebraic) statement; the coincidence of the number 14 reflects the shared interior/closure intuition rather than a literal identity of the two theorems.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] McKinsey–Tarski attribution hedged as 'unverified' but stated as known
- **Category:** Supplement/remark error
- **Location:** supplement (位相との類比), last sentence
- **Detail:** The sentence 'S4 is complete with respect to interior operators on topological spaces (McKinsey–Tarski theorem) is known, it is said (unverified on this site)' is a correct attribution (McKinsey–Tarski 1944: S4 is the logic of interior algebras / topological Boolean algebras), so the mathematical content is fine. However, the parenthetical '(本サイトでは未確認)' presents a standard, correct theorem as unverified, which is an imprecise side comment. This is borderline; the substantive mathematical claim is correct.
- **Proposed fix:** State it plainly: 'S4 is complete with respect to topological interior operators (the McKinsey–Tarski theorem).' and drop the '(unverified on this site)' hedge, or move the hedge to a note that the proof is not given here.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that E → replacement 'generally fails' justified only by semantics, and the boxdot example
- **Category:** Supplement/remark error
- **Location:** supplement (前件の $\boxdot$ は外せない)
- **Detail:** The supplement claims (a) $\mathsf{K4}\nvdash\Box(\varphi\leftrightarrow\psi)\to(\chi[\varphi/p]\leftrightarrow\chi[\psi/p])$ with example $\chi=p,\varphi=q,\psi=\bot$, arguing via the $\top$-translation that $\top\to(q\leftrightarrow\bot)$ is not a tautology; and (b) that $E\to(\chi[\varphi/p]\leftrightarrow\chi[\psi/p])$ fails for $\chi=\Box p$, noting that 'both translations send it to a tautology, so showing this requires Kripke semantics.' Part (a) is correct: the $\top$-translation of $\Box(q\leftrightarrow\bot)\to(q\leftrightarrow\bot)$ is $\top\to(q^{t}\leftrightarrow\bot)$, i.e. $\top\to(q\leftrightarrow\bot)$, not a tautology, and since the $\top$-translation maps K4-theorems to tautologies (\ref{logic:modal-translations}.2), the formula is not a K4-theorem. Part (b) is also correct in substance. However, the parenthetical remark that 'both translations send it to a tautology' is imprecise: for $\chi=\Box p$, the formula $E\to(\Box\varphi\leftrightarrow\Box\psi)$ under the erasure translation becomes $E^{e}\to(\varphi^{e}\leftrightarrow\psi^{e})$, which is a tautology, and under the $\top$-translation becomes $E^{t}\to(\top\leftrightarrow\top)$, also a tautology — so indeed neither translation refutes it, which is what the text says. This part is accurate. No error here beyond the mild imprecision already noted; the statement is essentially correct.
- **Proposed fix:** No change needed; optionally clarify that for $\chi=\Box p$ the erasure translation gives the tautology $(\varphi^{e}\leftrightarrow\psi^{e})\to(\varphi^{e}\leftrightarrow\psi^{e})$ and the $\top$-translation gives $\top\to(\top\leftrightarrow\top)$, so a Kripke countermodel is required.
- **Reported:** 2026-10-28 (10fede1)
