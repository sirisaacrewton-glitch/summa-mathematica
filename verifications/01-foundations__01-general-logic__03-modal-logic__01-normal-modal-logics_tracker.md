# Verification tracker: `01-foundations/01-general-logic/03-modal-logic/01-normal-modal-logics.html`

<!-- source: 01-foundations/01-general-logic/03-modal-logic/01-normal-modal-logics.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, the normality theorem, replacement theorem, K4/⊡ results, the 14-modality theorem, S5 results, and the two translations) is logically sound; proofs check out and citations match their targets. The genuine problems are concentrated in the final supplement: the topological interior axioms are misstated (`\mathrm{int}(X)=X` for a general set `X` is false, and `\subset` should be `\subseteq`), the correspondence between `\Box\top`/conjunction and the displayed axioms is muddled, the Kuratowski analogy is overstated as 'the same structure', the McKinsey–Tarski theorem is over-hedged, and the '⊡ cannot be dropped' supplement asserts a failure case without a concrete counterexample. These are supplement-level issues (kind 5) and do not affect the proved results.

## Issues

### ISSUE-0001 [Open] Topological interior axioms misstated (int(X)=X and int A ⊂ A)
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から：様相代数 / 位相との類比)
- **Detail:** The supplement lists the interior operator's properties as `\mathrm{int}(X)=X`, `\mathrm{int}(A\cap B)=\mathrm{int}A\cap\mathrm{int}B`, `\mathrm{int}A\subset A`, `\mathrm{int}\,\mathrm{int}A=\mathrm{int}A`. The first line is wrong: the correct axiom is `\mathrm{int}(X)=X` only if `X` denotes the whole space, but as written `\mathrm{int}(X)=X` with `X` a set is false in general (interior of an arbitrary set need not equal the set). Also `\mathrm{int}A\subset A` should be `\mathrm{int}A\subseteq A` (equality is possible). More importantly, the correspondence claimed is imprecise: `\Box\top` corresponds to `\mathrm{int}(X)=X` (the whole space), and the conjunction-preservation corresponds to `\mathrm{int}(A\cap B)=\mathrm{int}A\cap\mathrm{int}B`; but the text lumps `\Box\top` and conjunction preservation together as corresponding to the first displayed line, which mixes two distinct axioms. The statement `\mathrm{int}(X)=X` is only correct when `X` is the whole space, so as displayed it is a false identity for a general set `X`.
- **Proposed fix:** Replace the displayed list by the correct interior axioms: `\mathrm{int}(U)=U` where `U` is the whole space, `\mathrm{int}(A\cap B)=\mathrm{int}A\cap\mathrm{int}B`, `\mathrm{int}A\subseteq A`, `\mathrm{int}\,\mathrm{int}A=\mathrm{int}A`. And state the correspondence precisely: `\Box\top` corresponds to `\mathrm{int}(U)=U`, conjunction preservation to `\mathrm{int}(A\cap B)=\mathrm{int}A\cap\mathrm{int}B`, axiom T to `\mathrm{int}A\subseteq A`, axiom 4 to idempotence.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that the 14 modalities correspond to Kuratowski's 14-set theorem is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (位相との類比)
- **Detail:** The supplement says `\ref{logic:s4-fourteen}` (S4 has at most 14 modalities) 'has the same structure' as Kuratowski's closure–complement problem (at most 14 distinct sets from closure and complement). This is a genuine analogy but the claim as stated is misleading: Kuratowski's theorem concerns closure and complement (and yields at most 14 sets), while the S4 modality count concerns `\Box,\Diamond` (interior/closure) and negation; the numbers coincide but the underlying combinatorial statements are different (Kuratowski: closure+complement generate ≤14 sets; S4: ≤14 normal-form modalities). Calling them 'the same structure' overstates the connection.
- **Proposed fix:** Soften to: 'This is analogous to (but not identical with) Kuratowski's closure–complement theorem, which states that at most 14 distinct sets are obtained by repeatedly applying closure and complement; the number 14 coincides, but the two statements concern different operations.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] McKinsey–Tarski completeness hedged as 'unconfirmed' but stated as known
- **Category:** Supplement/remark error
- **Location:** supplement (位相との類比)
- **Detail:** The sentence 'S4 is complete with respect to interior operators on topological spaces (McKinsey–Tarski theorem) is known, it is said (unconfirmed on this site)' is a correct mathematical attribution (McKinsey–Tarski 1944), but the hedging 'とされる（本サイトでは未確認）' presents a well-established theorem as uncertain. This is not a mathematical error but an imprecise/over-hedged claim in a supplement; per the rules, overstated or imprecise claims in supplements count. The theorem is standard and should be stated plainly.
- **Proposed fix:** State plainly: 'It is a theorem of McKinsey and Tarski (1944) that S4 is complete with respect to topological interior operators (topological semantics).' Remove the 'unconfirmed' hedge.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Claim that the ⊡ in the antecedent of the second substitution theorem cannot be dropped: the given counterexample reasoning is incomplete
- **Category:** Supplement/remark error
- **Location:** supplement (前件の ⊡ は外せない)
- **Detail:** The supplement claims `\mathsf{K4}\nvdash\Box(\varphi\leftrightarrow\psi)\to(\chi[\varphi/p]\leftrightarrow\chi[\psi/p])` with the example `\chi=p, \varphi=q, \psi=\bot`, reducing to `\Box(q\leftrightarrow\bot)\to(q\leftrightarrow\bot)`, and argues via the `\top`-translation that it maps to `\top\to(q\leftrightarrow\bot)`, which is not a tautology, hence not a K4 theorem. This is correct as far as it goes (the `\top`-translation is sound for K4, so a non-tautological translation implies non-theorem). However, the supplement then says the variant with antecedent `E` alone 'also fails in general when `\chi=\Box p`', and adds 'in the two translations both map to tautologies, so showing this requires Kripke semantics'. This is correct but the sentence 'the two translations both map to tautologies' is only true for the specific `\chi=\Box p` case; as a general remark it is imprecise. More seriously, the claim that `E\to(\chi[\varphi/p]\leftrightarrow\chi[\psi/p])` fails for `\chi=\Box p` is asserted without a concrete counterexample or proof, only deferred to Kripke semantics. This is an unsupported assertion in a supplement.
- **Proposed fix:** Either supply the concrete Kripke countermodel (e.g. a K4 frame with a point where `q\leftrightarrow\bot` holds but `\Box p` and `\Box\bot` differ), or weaken to: 'The variant with antecedent `E` alone also fails in general (e.g. `\chi=\Box p`); a Kripke countermodel witnesses this.'
- **Reported:** 2026-10-28 (8ccef3d)
