# Verification tracker: `02-algebra/02-group-theory/07-representations/03-character-tables.html`

<!-- source: 02-algebra/02-group-theory/07-representations/03-character-tables.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine issue is an improper citation: the proof of rep:normal-subgroups-from-table cites rep:schur-and-decomposition.1, but only rep:schur-and-decomposition.4 exists in the label table; the intended result is the irreducible decomposition theorem. The supplements are essentially accurate (the Galois action permutes rows of the character table, and S_n characters are integers), and the worked examples for D_4, Q_8, A_4, S_4 check out numerically. No other genuine logical, hypothesis, or factual errors were found.

## Issues

### ISSUE-0001 [Open] Wrong reference for irreducible decomposition in normal-subgroup proof
- **Category:** Improper link
- **Location:** rep:normal-subgroups-from-table / proof
- **Detail:** The proof cites \ref{rep:schur-and-decomposition.1} to justify that the regular representation of G/N is a direct sum of irreducible representations. But the label table lists only rep:schur-and-decomposition.4 (theorem 1.6, 既約分解とシューアの補題). Item .1 is not in the table, so the citation points to a non-existent item; the decomposition statement is presumably item .4 (or the whole theorem).
- **Proposed fix:** Replace \ref{rep:schur-and-decomposition.1} with \ref{rep:schur-and-decomposition.4} (the irreducible decomposition theorem), which is the result actually needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Galois group permutes rows, not columns, and only for rational-valued tables
- **Category:** Supplement/remark error
- **Location:** supplement / 指標表に現れる数
- **Detail:** The supplement claims that Gal(Q(ζ_m)/Q) permutes the rows of the character table. In general the Galois action σ ↦ σ(χ) sends an irreducible character to another irreducible character, i.e. it permutes the ROWS (characters), not the columns (conjugacy classes). The text says '行を並べ替える' which is rows, so that part is fine; however the statement as written is imprecise: the Galois action permutes rows only when the values lie in Q(ζ_m) and the permutation is on the set of irreducible characters, and it fixes a row iff that character is rational-valued. More importantly, the claim that 'S_n の指標はすべて整数' is correct, but the justification 'g と g^k (k は位数と互いに素) が共役' is only true in S_n (it fails in general groups), which is fine here since it is stated for S_n. The real issue: the sentence 'ガロア群 Gal(Q(ζ_m)/Q) は既約指標の行を並べ替える' is stated without the hypothesis that all character values lie in Q(ζ_m) for a common m (true for finite groups), and without noting the action is on characters. This is essentially correct but the phrasing '行を並べ替える' could be misread; the substantive error is minor. Given the instruction to prefer no report over speculative ones, this is borderline; the clearest genuine imprecision is that the Galois group acts on the set of irreducible characters (rows) and this requires the values to be algebraic integers in a cyclotomic field, which holds. I will not report this as it is essentially correct.
- **Proposed fix:** No change needed; optionally clarify: 'Gal(Q(ζ_m)/Q) acts on the set of irreducible characters by σ·χ = σ∘χ, permuting the rows; a row is fixed iff its values are rational.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Dixon–Schneider method attribution
- **Category:** Supplement/remark error
- **Location:** supplement / 計算の観点
- **Detail:** The supplement attributes character-table algorithms to 'ディクソン＝シュナイダーの方法' (Dixon–Schneider method). The standard attribution is the Dixon–Schneider algorithm (Dixon 1967, Schneider 1990s) for computing character tables, which is correct. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
