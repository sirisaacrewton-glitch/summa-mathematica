# Verification tracker: `01-foundations/03-computation/02-computability/10-mapping-reducibility.html`

<!-- source: 01-foundations/03-computation/02-computability/10-mapping-reducibility.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main definitions, propositions, lemmas and the undecidability theorem are logically sound: the mapping-reduction basics, the $EQ_{\mathsf{TM}}$ argument, the MPCP and PCP reductions, and the final theorem all check out, and the hypcheck comments are accurate. The genuine problems are confined to the supplement: the PCP decidability threshold ('5 or more') is wrong (the classical bound is 7, later lowered to 5 and 4), and the discussion of 'Post's problem' conflates the many-one degree structure with Turing degrees. The completeness bullet is acceptable.

## Issues

### ISSUE-0001 [Open] PCP undecidability threshold misstated
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, second bullet
- **Detail:** The supplement claims PCP is decidable for at most 2 domino types and undecidable for 5 or more types. The standard result is that PCP is decidable for 2 domino types but undecidable already for 7 types (and the bound has been lowered to 5 by Neary, and further to 4 by Dong and Liu). So '5 or more' is not the correct threshold; the claim as stated is imprecise/overstated.
- **Proposed fix:** ポストの対応問題は、ドミノが $2$ 種類以下なら決定可能、$7$ 種類以上で決定不能になる（Neary により $5$ 種類、Dong–Liu により $4$ 種類以上でも決定不能であることが示されている）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Post's problem conflated with Turing degrees
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から：前順序としての難しさ
- **Detail:** The supplement says the question of how many classes lie between the decidable class and the class of $A_{\mathsf{TM}}$ is 'Post's problem' and is treated in the theory of Turing degrees. Post's problem concerns the existence of a c.e. set that is neither computable nor complete with respect to Turing reducibility (solved by Friedberg–Muchnik), and it lives in the Turing degrees, not in the $\le_{\mathrm{m}}$ (many-one) preorder. The number of $\le_{\mathrm{m}}$-degrees between the computable degree and the complete c.e. degree is a different question; the statement mixes the two notions.
- **Proposed fix:** この二つの間にどれだけの類があるかは、$\le_{\mathrm{m}}$ の類（多対一次数）に関する問いである。なお、チューリング還元の下で計算可能でも完全でもない帰納的可算集合の存在を問うのがポストの問題であり、これはチューリング次数の理論で扱われる（Friedberg–Muchnik により解決）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] HALT_TM claimed complete for recognizable languages
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果, 完全性 bullet
- **Detail:** The bullet says $\mathit{HALT}_{\mathsf{TM}}$ and $\mathit{PCP}$ are 'complete in the same sense' among recognizable languages. $\mathit{PCP}$ is indeed $\le_{\mathrm{m}}$-complete for the recognizable languages (it is undecidable and $A_{\mathsf{TM}}\le_{\mathrm{m}}\mathit{PCP}$). But $\mathit{HALT}_{\mathsf{TM}}$ as usually defined is the set of $\langle M,w\rangle$ where $M$ halts on $w$; this is recognizable and $A_{\mathsf{TM}}\le_{\mathrm{m}}\mathit{HALT}_{\mathsf{TM}}$, so it is complete — this part is fine. However the claim that $\mathit{PCP}$ is complete requires that $\mathit{PCP}$ be recognizable, which is true, and the reduction $A_{\mathsf{TM}}\le_{\mathrm{m}}\mathit{PCP}$ is established on this page, so this is acceptable. No error here; retained only for completeness of checking.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
