# Verification tracker: `01-foundations/03-computation/01-automata/05-cfl-pumping.html`

<!-- source: 01-foundations/03-computation/01-automata/05-cfl-pumping.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The pumping lemma proof, the example, the closure proposition, the intersection-with-regular proposition, and the two problems are all logically sound. The only genuine issue is in the supplement: the statement that over a unary alphabet CFLs equal regular languages is attributed to being a corollary of Parikh's theorem, which is imprecise (Parikh gives semilinearity; regularity of unary semilinear sets is the actual step). The Chomsky hierarchy chain is correct. No logical gaps, missing hypotheses, or improper links were found.

## Issues

### ISSUE-0001 [Open] Unary CFL = regular: misattributed as corollary of Parikh
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討
- **Detail:** The claim that over a one-letter alphabet context-free languages coincide with regular languages is true, but it is not a corollary of Parikh's theorem. Parikh's theorem only gives semilinearity of the counting image; for a unary alphabet the image is the language itself, so semilinearity does give regularity, but the standard attribution is to the fact that a unary semilinear set is regular (or directly via the pumping lemma). Calling it 'パリクの定理の系' is at best imprecise; more importantly the statement as written ('一致することが知られている') is correct but the attribution is misleading. Also the second sentence '問題 5.7 はその特別な場合とも見られる' is fine. The main issue is the attribution.
- **Proposed fix:** Replace with: '一文字のアルファベットでは、文脈自由言語は正規言語に一致する（パリクの定理により像が半線形集合となり、一文字アルファベットでは半線形集合は正規であることから従う）。問題 5.7 はその特別な場合である。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Chomsky hierarchy inclusion chain overstated
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 / 階層
- **Detail:** The chain '正規 ⊊ 文脈自由 ⊊ 文脈依存 ⊊ 決定可能 ⊊ 認識可能' is stated with strict inclusions throughout. While regular ⊊ CFL ⊊ CSL ⊊ decidable ⊊ recognizable is the standard chain and each strictness holds, the notation '文脈依存' (context-sensitive) is standardly defined via length-noncontracting grammars, and CSL ⊊ decidable is correct (via the halting problem / the fact that not all decidable languages are context-sensitive). This is actually correct. However, the phrase 'チョムスキー階層の一部' is fine. No error here on reflection.
- **Proposed fix:** No change needed; the chain is correct.
- **Reported:** 2026-10-28 (10fede1)
