# Verification tracker: `03-number-theory/01-algebraic-number-theory/01-number-fields/05-quadratic-cyclotomic.html`

<!-- source: 03-number-theory/01-algebraic-number-theory/01-number-fields/05-quadratic-cyclotomic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Reference to nonexistent label nt:euler-criterion.4
- **Category:** Improper link
- **Location:** nt:gauss-sum / Step 3 and Step 4
- **Detail:** The proof cites \ref{nt:euler-criterion.4} twice (Step 3: "平方剰余と非剰余は同数（\ref{nt:euler-criterion.4}）"; Step 4: "平方の群、\ref{nt:euler-criterion.4}"). The label table lists only nt:euler-criterion.2 (item 2, multiplicativity). Item 4 of Euler's criterion (squares form the unique index-two subgroup) is the relevant statement, but the cited label nt:euler-criterion.4 is not in the table, so the link is broken/incorrect.
- **Proposed fix:** Cite the correct item: use \ref{nt:euler-criterion.4} only if that label exists; otherwise cite \ref{nt:euler-criterion} (the whole proposition) or the specific item that states "the squares form the unique index-two subgroup of F_p^×". In Step 3 the count of squares vs non-squares follows from item 4; in Step 4 the uniqueness of the index-two subgroup also follows from item 4.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Reference to nonexistent label nt:euler-criterion.3
- **Category:** Improper link
- **Location:** nt:quadratic-reciprocity / Step 4
- **Detail:** Step 4 cites \ref[3]{nt:euler-criterion.3} to justify multiplicativity of the Legendre symbol. The label table lists nt:euler-criterion.2 as the multiplicativity statement (item 2); nt:euler-criterion.3 is not in the table. The citation target is wrong.
- **Proposed fix:** Replace \ref[3]{nt:euler-criterion.3} with \ref{nt:euler-criterion.2} (multiplicativity of the Legendre symbol).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Overstated claim that Jacobi symbol reciprocity avoids factorization
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を弱めると
- **Detail:** The supplement says the Jacobi symbol reciprocity lets one compute Legendre symbols "without prime factorization (same effort as the Euclidean algorithm)". This is essentially correct for computing (a/n) for odd n, but the phrasing "ルジャンドル記号の計算を素因数分解なしに行える" is imprecise: to evaluate (a/p) for a prime p via Jacobi reciprocity one still needs p to be prime (or to know the Jacobi symbol equals the Legendre symbol), and the Jacobi symbol (a/n)=1 does not imply a is a square mod n. The claim as stated could mislead. However, this is a minor imprecision rather than a false statement; the standard fact (Jacobi reciprocity holds and enables Euclidean-algorithm computation) is correct.
- **Proposed fix:** Clarify: "For odd n the Jacobi symbol satisfies the same reciprocity law, so (a/n) can be computed by a Euclidean-algorithm recursion without factoring n; when n=p is prime this equals the Legendre symbol." This avoids implying that Jacobi symbol =1 certifies a square.
- **Reported:** 2026-10-28 (10fede1)
