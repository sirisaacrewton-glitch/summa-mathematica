# Verification tracker: `01-foundations/03-computation/03-advanced-computability/10-creative-sets.html`

<!-- source: 01-foundations/03-computation/03-advanced-computability/10-creative-sets.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Citation of rm-code.3 which is not in the label table
- **Category:** Improper link
- **Location:** comp:smn-injective / proof
- **Detail:** The proof cites \ref{comp:rm-code.3} (a claim that the length lh of a code is read off from the code). The label table only lists comp:rm-code.2 (definition of register machine code). comp:rm-code.3 is not among the cited labels, so the citation cannot be verified against the table and may point to a nonexistent or wrong item.
- **Proposed fix:** Either add the missing label to the table / cite the correct existing result, or replace the citation by an explicit argument: since every exponent a_{q}+1 in the code \prod_{q<N}p(q)^{a_{q}+1} is at least 1, p(q) divides the code for all q<N and p(N) does not, hence \mathrm{lh}(s^{1}_{1}(e,y))=N.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Post introduced simple sets as 'c.e. non-computable and not m-complete'
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says Post introduced simple sets as 'c.e. non-computable sets that are not m-complete'. Historically Post (1944) introduced simple sets as c.e. sets whose complement is immune (infinite but containing no infinite c.e. subset); the property of being non-m-complete is a consequence (via productivity/creativity), not part of the definition or motivation. Stating it as Post's characterization is an overstatement/misattribution.
- **Proposed fix:** 単純集合はポストが「補集合が無限であるが認識可能な無限部分集合を含まない認識可能集合」として導入したもので、その結果として $m$ 完全でないことが従う。チューリング還元については…
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that Friedberg–Muchnik was needed because simple sets do not suffice for Turing reducibility
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The sentence 'for Turing reducibility that is not enough, and \ref{comp:friedberg-muchnik} was needed' is imprecise. Simple sets already give c.e. non-computable sets that are not Turing complete (Post's simple set is not m-complete, hence not 1-complete, and in fact not Turing complete since a simple set is not creative; more directly, Post showed simple sets are not complete via the fact that complete sets are creative). What Friedberg–Muchnik established is the existence of c.e. sets strictly between computable and the halting set in Turing degree (incomparable c.e. degrees), not merely 'non-complete' sets. The phrasing suggests simple sets fail to be non-Turing-complete, which is false.
- **Proposed fix:** 単純集合は $m$ 完全でない認識可能集合を与えるが、チューリング還元の下で計算不可能かつ停止問題に還元できない集合の存在は単純集合でも得られる。フリードバーグ–ムチニクの定理（\ref{comp:friedberg-muchnik}）はさらに進んで、計算不可能な認識可能集合のチューリング次数が計算可能次数と $\mathbf{0}'$ の間に真に位置する（互いに比較不能な認識可能次数が存在する）ことを示す。
- **Reported:** 2026-10-28 (10fede1)
