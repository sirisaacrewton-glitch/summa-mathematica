# Verification tracker: `01-foundations/03-computation/04-complexity/03-np-complete-problems.html`

<!-- source: 01-foundations/03-computation/04-complexity/03-np-complete-problems.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page's proofs (CLIQUE, IS/VC, SUBSET-SUM reductions from 3SAT) are logically sound, and the cited labels match their uses. The supplements, remark, and hypcheck were checked individually; the only questionable item is the categorical phrasing in the '高い視点から' supplement, which conflates 'maximum element in a preorder' with 'terminal object' and is imprecise, though it is a side comment rather than a load-bearing claim. All other stated-only facts (unary SUBSET-SUM in P, base >= 6, Karp's 21 problems, HAMPATH gadget, binary search for min vertex cover) are correct. I report the categorical imprecision as a medium-confidence supplement error; no serious logical or hypothesis problems were found.

## Issues

### ISSUE-0001 [Open] Categorical claim: NP-complete problems are a terminal object / maximum in a preorder
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement claims that 'categorically, in the preorder whose morphisms are polynomial-time reductions, NP-complete problems are the maximum element (terminal object) of the part NP'. This is imprecise: in the preorder of languages under polynomial-time reduction, NP-complete problems are maximum among NP (every NP language reduces to them), but they are not a terminal object in the categorical sense (a terminal object would require a unique morphism to it, whereas reductions are many). Also 'maximum element' and 'terminal object' are conflated. The claim overstates/misstates the categorical content.
- **Proposed fix:** Replace with: '多項式時間還元を射とする前順序（NP 上の還元可能性）の中で、NP 完全問題は NP に属する言語全体の最大元にあたる（すべての NP 言語がそこへ還元される）。ただし射は一意ではないので圏論的な終対象ではない。'
- **Reported:** 2026-10-28 (8ccef3d)
