# Verification tracker: `01-foundations/05-proof-theory/02-incompleteness/03-sequence-coding.html`

<!-- source: 01-foundations/05-proof-theory/02-incompleteness/03-sequence-coding.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main genuine problems are in the side comments: the intuition and supplement claim that FinSeq selects a minimal/canonical representative of each sequence, but the minimality clause as written does not implement this and the uniqueness actually comes from the law of finite sequences; this should be corrected. The remark on the Ackermann function and 'faster-growing' Sigma functions is imprecise and partly misattributed. The proofs and the main theorems (pairing, finite-sequence law, normalization, recursion) appear logically sound.

## Issues

### ISSUE-0001 [Open] FinSeq does not select a minimal representative; the minimality condition is vacuous
- **Category:** Supplement/remark error
- **Location:** pt:finseq (definition) / intuition / supplement
- **Detail:** The definition of FinSeq(s) requires s=((a,b),k) and that for all (c,d)<(a,b) there is i<k with β(c,d,i)≠β(a,b,i). The intuition and supplement claim this picks the *minimal* (a,b) representing the sequence, and that FinSeq 'exactly' embeds finite sequences into N by choosing a least representative. But the condition is vacuous: for any (a,b) with a,b<s, the pair (c,d)=(0,0) satisfies (0,0)<(a,b) (since (0,0)=2 and (x,y)≥2), and β(0,0,i)=rm(1,1+i)=0 for all i, so if β(a,b,i)=0 for all i<k the condition fails; more importantly the condition does not force minimality — it only excludes pairs whose β-values agree with a smaller pair on all i<k, which is not the same as being the least representative. In fact the 'law of finite sequences' (pt:finseq-law) is what gives uniqueness, and it holds for *any* (a,b), not because of minimality. The claim that FinSeq selects a canonical minimal representative is false as stated; the minimality clause as written does not achieve this (e.g. it does not compare β-values of all smaller pairs correctly, and the bound c,d<s together with the specific inequality does not implement 'least (a,b)').
- **Proposed fix:** Either (a) remove the minimality claim: state that FinSeq(s) merely says s=((a,b),k) codes the length-k sequence i↦β(a,b,i), and that uniqueness of the code follows from the law of finite sequences (pt:finseq-law), not from a minimality condition; or (b) if a canonical representative is desired, replace the condition by the genuine minimality condition: s=((a,b),k) ∧ ∀(c,d)<(a,b) ∃i<k β(c,d,i)≠β(a,b,i) is *not* sufficient — instead require (a,b) to be the least pair (under the pairing order) whose β-values agree with the sequence on all i<k, i.e. ∀(c,d)<(a,b) ∃i<k β(c,d,i)≠β(a,b,i) together with the correct comparison, and prove existence via the least-element principle. In the supplement, replace 'FinSeq chooses the least representative' by 'the law of finite sequences guarantees that the length and entries determine the code, so the coding is injective on sequences of a fixed length'.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Remark on Ackermann function and 'faster-growing' Sigma functions is imprecise/unsupported
- **Category:** Supplement/remark error
- **Location:** remark (pt:sec-primitive-recursion)
- **Detail:** The remark states the Ackermann function is Sigma definable via 'double sequences' and PA-provably functional, citing Boolos ch.2, and then claims there is a computable function growing faster than every PA-provably-functional Sigma function. The Ackermann function is indeed provably total in PA and Sigma-definable, but the second claim as phrased ('どの PA で関数的な Σ 関数よりも速く増加する計算可能関数がある') is a diagonalization statement that needs precise formulation (it is true that there are computable functions not provably total in PA, e.g. via the Paris–Harrington / Goodstein-type results, but 'faster growing than every PA-provably-functional Sigma function' is not literally correct: one can dominate any single such function, but the statement as written conflates 'not provably total' with 'faster growing'). Also the attribution to Boolos ch.2 for the second claim is not accurate.
- **Proposed fix:** Rewrite: 'The Ackermann function is not primitive recursive but is Σ definable and PA-provably total (Boolos, Ch. 2). More generally, not every computable Σ-definable function is PA-provably total: there are computable functions whose totality is not provable in PA (e.g. by diagonalizing against the PA-provably-total Σ functions).' Remove the 'faster growing than every PA-provably-functional Σ function' phrasing or replace it by the precise diagonalization statement.
- **Reported:** 2026-10-28 (8ccef3d)
