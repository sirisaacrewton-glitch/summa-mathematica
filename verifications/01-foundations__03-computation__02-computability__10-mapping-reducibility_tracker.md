# Verification tracker: `01-foundations/03-computation/02-computability/10-mapping-reducibility.html`

<!-- source: 01-foundations/03-computation/02-computability/10-mapping-reducibility.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main text (definitions, propositions, the EQ_TM theorem, the MPCP/PCP reductions and the problems) is logically sound and correctly cited. The genuine problems are confined to the supplement: the PCP undecidability threshold is misstated, the claim that all nontrivial decidable languages form a single minimal many-one class is false, and the description of Post's problem / Turing degrees is imprecise.

## Issues

### ISSUE-0001 [Open] PCP undecidability threshold misstated
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討
- **Detail:** The supplement claims PCP is decidable for at most 2 domino types and undecidable for 5 or more types. The known result is that PCP is decidable for at most 2 domino types and undecidable already for 7 types (and the bound has been lowered to 5 in recent work). Saying "5 or more" is wrong: the undecidability for 5 types is a recent sharp result, not a classical threshold, and the phrasing "5 種類以上（最近の結果ではさらに少数）" is internally inconsistent (5 is already the minimum known).
- **Proposed fix:** ポストの対応問題は、ドミノが $2$ 種類以下なら決定可能、$7$ 種類以上で決定不能であることが古典的に知られており、近年では $5$ 種類でも決定不能であることが示されている。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Decidable languages do not form a single minimal class
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement says "決定可能な言語（自明なものを除く）は最小の類をなし", i.e. all nontrivial decidable languages form one minimal equivalence class under $\le_{\mathrm{m}}$. This is false: decidable languages fall into infinitely many distinct many-one degrees (e.g. $\varnothing$, $\Sigma^{\ast}$, and finite nonempty sets are pairwise incomparable under $\le_{\mathrm{m}}$). Only the trivial languages $\varnothing$ and $\Sigma^{\ast}$ are $\le_{\mathrm{m}}$-equivalent to each other, and they are the minimum degree.
- **Proposed fix:** 決定可能な言語は $\le_{\mathrm{m}}$ に関して最小の類（$\varnothing$ と $\Sigma^{\ast}$ の類）より上に無数の類をなす。$A_{\mathsf{TM}}$ は認識可能な言語の中の最大の類をなす。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Post's problem conflated with Turing degrees
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement says the question of how many classes lie between the decidable class and $A_{\mathsf{TM}}$ is "ポストの問題" and is handled in the theory of Turing degrees. Post's problem concerns the existence of a c.e. set that is neither computable nor complete with respect to Turing reducibility (Turing degrees), not many-one degrees. The number of many-one degrees between the computable degree and the complete c.e. many-one degree is a different (and also nontrivial) question; attributing it to Post's problem and to Turing degree theory is imprecise.
- **Proposed fix:** この二つの間の類の構造（特に、計算可能でも完全でもない認識可能な言語の存在）はポストの問題として知られ、チューリング次数の理論で扱われる。
- **Reported:** 2026-10-28 (8ccef3d)
