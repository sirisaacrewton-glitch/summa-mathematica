# Verification tracker: `01-foundations/01-general-logic/04-modal-logic-cs/14-hoare-arithmetic.html`

<!-- source: 01-foundations/01-general-logic/04-modal-logic-cs/14-hoare-arithmetic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 6 / Resolved: 0 / Ignored: 1

## Summary of the last run

The main theorem and its proof are sound: the compilation lemma, expressiveness of N, and the non-r.e. argument via K and its complement are correctly structured, and the previously flagged citation to comp:sigma1-recognizable.2 is now valid. The remaining problems are in the side material: the intuition's claim that 'only Σ₁ properties are r.e.' is false as stated, Remark 1's justification of Th(N)'s non-r.e.-ness via 'the same argument as Step 2' is imprecise, Remark 2 understates the impossibility result, and the solution to the total-correctness problem needs a small clarification that the enumeration consists of total functions.

## Issues

### ISSUE-0001 [Ignored: Valid Rebuttal] Citation to non-existent label comp:sigma1-recognizable.2
- **Category:** Improper link
- **Location:** theorem logic:hoare-n-not-re, Step 2
- **Detail:** Step 2 cites \ref{comp:sigma1-recognizable.2}, but the label table only lists comp:sigma1-recognizable.1 (theorem 2.7, Kleene normal form / Σ₁ and recognizability). There is no item 2 of that result in the table, so the citation target does not exist / does not say what is used. The claim needed is "if K and its complement are both Σ₁ (r.e.), then K is decidable", which is the standard Post/Δ₁ argument, not a consequence of the Kleene normal form theorem as listed.
- **Proposed fix:** Replace the citation with a correct one, e.g. cite the result establishing that a set that is both r.e. and co-r.e. is decidable (Post's theorem / closure of Δ₁ under complement), or add the one-line argument: if K is enumerated by a computable procedure and its complement too, run both enumerations in parallel until one of them lists the given e; this decides K.
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The label table now lists comp:sigma1-recognizable.2 as 'Δ₁ iff decidable', which is exactly what Step 2 uses, so the citation is correct.
**Opus Rebuttal:** The cited item exists and says exactly what is used (the earlier label table listed only one item per result; this was a bug in the verifier, now fixed: the table quotes every cited item). comp:sigma1-recognizable.2 is: a relation is $\Delta_{1}$ iff it is decidable.

### ISSUE-0002 [Open] Remark 1: Th(N) not r.e. attributed to 'same argument as Step 2'
- **Category:** Supplement/remark error
- **Location:** remark, item 1
- **Detail:** Remark 1 says Th(N) is not recursively enumerable and that this follows "by the same argument as Step 2". Step 2's argument is specific to the set of valid Hoare triples (via the reduction from K and its complement). The non-r.e.-ness of Th(N) is a different fact (it follows from the undecidability of Th(N) plus the fact that Th(N) is complete, so if it were r.e. it would be decidable, contradicting e.g. Gödel). Saying "the same argument as Step 2" is imprecise: Step 2 uses both Σ₁ directions (K and complement), which is not literally the argument for Th(N).
- **Proposed fix:** Reword: "Th(N) is not recursively enumerable: if it were r.e., then since Th(N) is complete (for every sentence φ, exactly one of φ, ¬φ is in Th(N)), we could decide membership in Th(N) by enumerating it and its negation-closure in parallel, contradicting the undecidability of Th(N) (Gödel)."
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — Remark 1 still says Th(N) is not r.e. 'by the same argument as Step 2', but Step 2's argument (K and complement both Σ₁) is specific to the Hoare-triple set and does not literally apply to Th(N); the remark remains imprecise.

### ISSUE-0003 [Open] Remark 2: restricting consequence rule to PA-provable implications
- **Category:** Supplement/remark error
- **Location:** remark, item 2
- **Detail:** Remark 2 claims that restricting the premise of the consequence rule to "PA ⊢ φ → φ'" yields a mechanically checkable system that is not complete for N. This is stated without qualification. The system so restricted is indeed mechanically checkable (PA-provability is r.e.), and by the theorem it cannot be complete for N — this part is fine. However, the remark as written is slightly overstated: it is not merely "not complete"; the correct statement is that no such r.e. system can be sound and complete for N (the theorem's second sentence). As a standalone remark it is acceptable but the phrasing "is not complete" understates that soundness+completeness is impossible, which is the actual content.
- **Proposed fix:** Reword: "Conversely, the system obtained by restricting the premise of the consequence rule to 'PA ⊢ φ → φ'' is mechanically checkable (PA-provability is r.e.), but by the theorem it cannot be both sound and complete for N."
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — Remark 2 still says only that the PA-restricted system 'is not complete', understating that no r.e. sound-and-complete system exists; the phrasing remains as before.

### ISSUE-0004 [Open] Intuition: 'only Σ₁ properties are r.e.' is false
- **Category:** Supplement/remark error
- **Location:** intuition, second paragraph
- **Detail:** The intuition says '帰納的に枚挙できるのは Σ₁ の性質だけなので' (only Σ₁ properties are recursively enumerable). This is false: every Δ₁ (decidable) property is also r.e., and Δ₁ properties are not Σ₁-complete; more importantly, r.e. sets are exactly the Σ₁ sets, but a set can be both Σ₁ and Π₁ (Δ₁) without being 'only Σ₁'. The intended claim is that the complement of a non-decidable Σ₁ set (like the non-halting set) is not r.e., i.e. Π₁-but-not-Σ₁ properties cannot be captured by an r.e. system. As written the sentence overstates and is incorrect.
- **Proposed fix:** Replace with: '帰納的に枚挙できる集合は Σ₁ の集合に限られる。停止しないこと（Π₁ の性質）は、対応する停止問題が決定不能であるため Σ₁ ですらない（そうでなければ Δ₁ となり決定可能になってしまう）。したがって Π₁ の性質をすべて捉える機械的な証明体系は存在しない。'
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0005 [Open] Remark 1: Th(N) non-r.e. justification
- **Category:** Supplement/remark error
- **Location:** remark, item 1
- **Detail:** Remark 1 asserts Th(N) is not r.e. 'by the same argument as Step 2 (or by Gödel's incompleteness theorem)'. Step 2's argument uses that both K and its complement are Σ₁; this does not transfer to Th(N). The correct argument is: Th(N) is complete and undecidable, so if it were r.e. it would be decidable, contradiction. The parenthetical 'same argument as Step 2' is misleading.
- **Proposed fix:** Replace with: 'Th(N) は完全かつ決定不能なので、もし帰納的に枚挙できれば決定可能となってしまい矛盾する。よって Th(N) は帰納的に枚挙できない。'
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0006 [Open] Remark 2 understates impossibility
- **Category:** Supplement/remark error
- **Location:** remark, item 2
- **Detail:** Remark 2 says the PA-restricted consequence rule yields a mechanically checkable system that 'is not complete' for N. The theorem's actual content is stronger: no r.e. system that is sound and complete for N exists. The remark's phrasing suggests only incompleteness, not the impossibility of sound+complete r.e. systems.
- **Proposed fix:** Replace with: '逆に、帰結規則の前提を「PA ⊢ φ → φ'」に制限した体系は機械的に検査できるが、上の定理により N について健全かつ完全なものにはなり得ない（健全ならば完全ではない）。'
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0007 [Open] Solution to prob-ha-total-not-re: diagonal argument for non-r.e.
- **Category:** Unsupported fact
- **Location:** solution to logic:prob-ha-total-not-re
- **Detail:** The solution claims that the set of indices of total functions is not r.e., and sketches a diagonal argument: given an enumeration e₀,e₁,…, the function k↦φ_{e_k}(k)+1 is total and differs from every φ_{e_k}. This argument is correct for showing the set is not r.e. only if one also notes that the enumeration is of total functions (so φ_{e_k}(k) is defined for all k, making the diagonal function total and computable). As written it is essentially fine, but the citation comp:prob-total-not-decidable only establishes undecidability, and the solution's claim that 'the same diagonal argument shows non-r.e.' needs the extra observation that the enumerated functions are total. This is a minor gap, not a falsehood.
- **Proposed fix:** Add: 'ここで枚挙はすべての入力で定義される関数のみを並べているので、φ_{e_k}(k) はすべての k で定義され、対角関数 k↦φ_{e_k}(k)+1 は計算可能な全域関数となる。'
- **Reported:** 2026-10-28 (048145a)
