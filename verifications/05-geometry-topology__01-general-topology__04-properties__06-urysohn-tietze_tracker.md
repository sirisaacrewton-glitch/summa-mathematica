# Verification tracker: `05-geometry-topology/01-general-topology/04-properties/06-urysohn-tietze.html`

<!-- source: 05-geometry-topology/01-general-topology/04-properties/06-urysohn-tietze.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Reference to non-existent label top:continuity-equivalents.3
- **Category:** Improper link
- **Location:** top:tietze-step / proof
- **Detail:** The proof of the approximation lemma cites \ref{top:continuity-equivalents.3}, but the label table only lists top:continuity-equivalents.5 (the quasi-base characterization). Item 3 of that theorem is not among the cited labels, so the citation cannot be verified against the given table and may point to the wrong item.
- **Proposed fix:** Replace \ref{top:continuity-equivalents.3} with the correct item of \ref{top:continuity-equivalents} that states 'f is continuous iff preimages of closed sets are closed' (or cite \ref{top:continuity-equivalents.5} together with the fact that $[-c,-c/3]$ and $[c/3,c]$ are closed in $\R$).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Sorgenfrey plane is not regular
- **Category:** Supplement/remark error
- **Location:** supplement / 正規性を弱めると
- **Detail:** The supplement lists the Sorgenfrey plane as an example of a space that is '正則だが正規でない' (regular but not normal). The Sorgenfrey plane is indeed not normal, but it is also not regular: it is a classical counterexample showing that the product of two normal (even perfectly normal, paracompact) spaces need not be normal, and the Sorgenfrey plane fails regularity (the antidiagonal and a point off it cannot be separated by disjoint open sets). So calling it regular is false.
- **Proposed fix:** Replace with: '正規でない空間の例としては、ゾルゲンフライ平面（正則ですらない）やニェミツキ平面 \ref{top:niemytzki-plane}（正則だが正規でない）がある。ニェミツキ平面では、交わらない閉集合の対で関数による分離ができないものがある。' i.e. keep only the Niemytzki plane as the regular-but-not-normal example and note the Sorgenfrey plane is not even regular.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Dugundji's theorem attribution and scope
- **Category:** Supplement/remark error
- **Location:** supplement / 類似の定理
- **Detail:** The supplement states Dugundji's extension theorem as: for metric spaces, a continuous function on a closed subset can be extended with values in a locally convex topological vector space. Dugundji's theorem (1951) states that for a metric space $X$, a closed subset $A$, and a locally convex topological vector space $Y$, every continuous $f\colon A\to Y$ extends to a continuous $F\colon X\to Y$ with $F[X]\subseteq\overline{\mathrm{conv}}(f[A])$. The statement as written omits the convex-hull condition but is otherwise essentially correct; however the phrase 'ノルム空間に値をとる場合を…証明した' attributes to the site's proof only the normed case, which is consistent. The main issue is that the claim '距離空間の場合は、\ref{top:urysohn-metric} と同様に DC を使わない構成もある' is stated without justification and is not established anywhere cited; it is an unsupported side claim.
- **Proposed fix:** Either remove the sentence '距離空間の場合は、\ref{top:urysohn-metric} と同様に DC を使わない構成もある。' or qualify it: '距離空間の場合、閉集合上の連続関数の延長は、ウリゾーン関数を距離で明示的に構成するのと同様の手法で、選択公理を仮定せずに構成できる（本サイトでは証明しない）。'
- **Reported:** 2026-10-28 (10fede1)
