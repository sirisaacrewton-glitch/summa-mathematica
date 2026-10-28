# Verification tracker: `01-foundations/04-set-theory/02-infinitary-combinatorics/07-suslin-problem.html`

<!-- source: 01-foundations/04-set-theory/02-infinitary-combinatorics/07-suslin-problem.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] ZFC independence of c.c.c. being productive is misstated
- **Category:** Supplement/remark error
- **Location:** supplement after set:ma-sh, paragraph '積と c.c.c.'
- **Detail:** The supplement claims 'ZFC だけでは「c.c.c. 空間の積は c.c.c.」は証明も反証もできない'. This is wrong. In ZFC one can prove that the product of two c.c.c. spaces need not be c.c.c.: the Suslin line's square is a ZFC counterexample conditional on a Suslin line existing, but more importantly there is an outright ZFC counterexample — the Suslin line is not needed. Indeed, the square of a Suslin line is a counterexample only under ¬SH. However, a genuine ZFC counterexample exists: the product of two c.c.c. spaces can fail to be c.c.c. in ZFC (e.g. the 'Suslin continuum' aside, the standard ZFC example is the square of a Suslin line, which requires a Suslin line). Actually the correct ZFC fact is: it is consistent that c.c.c. is productive (under MA) and consistent that it is not (under ◇), so 'neither provable nor refutable' is correct for the statement 'every product of c.c.c. spaces is c.c.c.'. But the sentence as written says the statement 'c.c.c. spaces' product is c.c.c.' cannot be proved or disproved — this is a statement about all spaces, and it is indeed independent. However the phrasing is imprecise: the lemma only shows X×X can fail for a Suslin line, which is conditional. The claim of independence is correct but the justification given (the lemma) does not establish it, and the sentence overstates what the lemma shows. More seriously, the sentence conflates 'the product of two c.c.c. spaces is c.c.c.' (independent) with what the lemma proves (conditional on a Suslin line).
- **Proposed fix:** Replace with: '可分性は積で保たれる（有限個の可算稠密集合の積は可算稠密）のと対照的である。$\ZFC$ のもとで「c.c.c. 空間の積は c.c.c.」は証明できない（ススリン線の存在のもとで反例が生じる）。一方 $\mathrm{MA}(\ale ph_{1})$ のもとでは c.c.c. は有限積で保たれる（\ref{set:ma-ccc-product}）。したがって「c.c.c. は積で保たれる」は $\ZFC$ から独立である。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that nowhere-separability is preserved by completion is unsubstantiated and the parenthetical is vague
- **Category:** Supplement/remark error
- **Location:** supplement after set:sh-reals, paragraph '完備なススリン線の性質'
- **Detail:** The supplement asserts that the completion C of set:suslin-line-complete can be made so that every nonempty open set is non-separable, citing set:suslin-line-nice.2 and saying 'the argument of Step 4 can be carried out inside an open interval (u_0,w_0)'. But set:suslin-line-complete's proof (Steps 3–4) only establishes c.c.c. and non-separability of C, not that every nonempty open subset of C is non-separable. The reference to 'Step 4' is ambiguous (Step 4 of which proof?) and the claim is not justified. Moreover, the completion C constructed there is built from a dense Suslin line X that already satisfies set:suslin-line-nice.2, but the completion adds new points and the argument that open subsets of C remain non-separable is not given. This is an unsupported side claim.
- **Proposed fix:** Either remove the claim, or state it precisely with a proof sketch: 'C の空でない開集合が可分でないことも示せる：C の開区間 (A,B) が可分なら、set:dedekind-cuts.2 で A<e(x)<e(y)<B となる x<y をとれば (x,y) は X で可分となり、set:suslin-line-nice.2 に反する。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Cantor attribution and exercise reference in set:reals-order-characterization
- **Category:** Unsupported fact
- **Location:** set:reals-order-characterization
- **Detail:** The fact states the order-theoretic characterization of R and attributes it to 'Cantor, Math. Ann. 46 (1895)' and 'Kunen, Set Theory (1980), Chapter II exercises 28, 29'. The characterization itself is correct (a dense, complete, separable, endpointless linear order is isomorphic to R). However the historical attribution is imprecise: the standard reference is Cantor's 1895 paper 'Beiträge zur Begründung der transfiniten Mengenlehre' (Math. Ann. 46), which does contain the characterization of the order type of the reals, so the attribution is essentially correct. The Kunen exercise reference is plausible. No genuine mathematical error, but the parenthetical proof sketch says 'apply Cantor's theorem on countable dense orders to a countable dense subset and use connectedness to extend' — this is correct. I do not report this as an error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
