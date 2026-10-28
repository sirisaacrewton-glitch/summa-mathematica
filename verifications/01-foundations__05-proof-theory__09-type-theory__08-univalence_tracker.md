# Verification tracker: `01-foundations/05-proof-theory/09-type-theory/08-univalence.html`

<!-- source: 01-foundations/05-proof-theory/09-type-theory/08-univalence.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The proofs (qinv-isequiv, two-distinct, universe-not-set, Hedberg's theorem and lemma, 2-is-set) are sound and the cited labels match their uses. The only genuine issue is a minor imprecision in the supplement's discussion of the relationship between univalence and UIP: it says they are 'incompatible' when in fact univalence proves the negation of UIP (a stronger statement), and the phrasing 'どちらも本ページの基本規則とは両立する' could be sharpened. All other supplements, remarks, and the stated fact about the circle's fundamental group are accurate and properly attributed.

## Issues

### ISSUE-0001 [Open] Univalence and UIP are not merely 'incompatible' but UIP is outright refutable
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement says '逆に一価性公理を仮定すると、UIP は偽になる（\ref{logic:universe-not-set}）' and then 'どちらも本ページの基本規則とは両立するが、互いには両立しない'. The first sentence is fine (universe-not-set gives ¬isSet(U), hence UIP fails). But the closing sentence 'they are incompatible with each other' is weaker/imprecise: under univalence, UIP is not merely 'not simultaneously assumable' but is provably false (a negated statement is derivable). More importantly, the claim 'UIP を仮定すると、すべての型が集合になり' is correct, but the phrase 'どちらも本ページの基本規則とは両立する' is imprecise: UIP is consistent with the basic rules (MLTT), and univalence is consistent (via simplicial model), but the statement that they are 'incompatible' should be stated as 'univalence proves the negation of UIP', which is stronger than mere incompatibility. This is a minor overstatement/imprecision.
- **Proposed fix:** Replace with: '一価性公理を仮定すると UIP は単に両立しないだけでなく、実際に偽であることが証明できる（\ref{logic:universe-not-set} より $\neg\mathrm{isSet}(\mathcal{U})$、したがって UIP の否定）。UIP は本ページの基本規則と無矛盾であり、一価性公理も（単体的モデルで）無矛盾であるが、両者を同時に公理として仮定することはできない。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] h-level / homotopy-group correspondence is imprecise for propositions
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から)
- **Detail:** The supplement states '命題は空か一点（に可縮）、集合は各連結成分が可縮な空間（離散空間）、亜群は 2 次以上のホモトピー群が消える空間である'. The characterization of sets as spaces whose connected components are contractible is correct (0-truncated). The characterization of groupoids as spaces with trivial homotopy groups of degree ≥2 is correct (1-truncated). However, '命題は空か一点（に可縮）' — a proposition (h-level -1) is a type with at most one point up to homotopy, i.e., either empty or contractible; this is correct. But the phrase '亜群は 2 次以上のホモトピー群が消える空間' — a groupoid (1-type) has trivial π_n for n≥2, correct. This appears fine. No issue here.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
