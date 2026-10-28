# Verification tracker: `02-algebra/02-group-theory/03-sylow/02-sylow-applications.html`

<!-- source: 02-algebra/02-group-theory/03-sylow/02-sylow-applications.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Counting argument in supplement misattributes n=12 to p²q lemma
- **Category:** Supplement/remark error
- **Location:** supplement / 数え上げの論法
- **Detail:** The supplement says the "count elements of order r until they exceed the group" argument was used for n=30, 56 and for n=12 in \ref{grp:p2q-not-simple}. But in the proof of \ref{grp:p2q-not-simple}, the n=12 case (p=2, q=3) is handled by counting elements of order 3 (8 elements) and concluding n_{2}=1 — that part is indeed a counting argument. However, the supplement's phrasing lumps n=12 under the p²q lemma as if the counting method there is the same 'exceeds the group' overflow argument, whereas in the p²q proof the count (8 elements of order 3, leaving 4) does not 'overflow' the group; it is a 'remaining elements must form the Sylow subgroup' argument, not an 'exceeds the whole' argument. This is imprecise but arguably minor. More importantly, the n=30 case in Step 4 does use the overflow (44>30), and n=56 uses the 'remaining 8 elements' argument, not overflow. So the supplement's characterization 'count elements of order r to overflow the whole group' does not accurately describe the n=56 and n=12 arguments, which are 'remaining elements' arguments rather than overflow arguments.
- **Proposed fix:** Rewrite: 「$n=30$ では位数 $5$・$3$ の元を数えて全体を超えることを示す論法を、$n=56$ と \ref{grp:p2q-not-simple} の $n=12$ では、位数 $r$ の元を数えた残りの元がシロー部分群をなすことを示す論法を用いた。これらはシローの定理と並ぶ基本的な手法である。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that next smallest nonabelian simple group is order 168 needs precision
- **Category:** Supplement/remark error
- **Location:** supplement / 次に小さい非可換単純群
- **Detail:** The supplement states that after A_{5} the next is a group of order 168 isomorphic to PSL_{2}(F_{7}). This is correct (the simple group of order 168 is PSL_{2}(7) ≅ PSL_{2}(F_{7})), and it is standard that no nonabelian simple group has order strictly between 60 and 168. The statement is accurate. However, the phrase '位数 60 から 168 までのすべての位数について同様の議論が要り' (a similar argument is needed for all orders from 60 to 168) is slightly overstated: the standard proof does not require case-by-case Sylow analysis for every order in that range in the same style; many orders are excluded by more general results (e.g., Burnside p^a q^b, or the embedding argument). This is a side comment that overstates the difficulty/method but is not strictly false. Given the instruction to prefer no report over speculative ones, this is borderline; I flag it as imprecise.
- **Proposed fix:** Soften to: 「その証明には位数 $60$ より大きく $168$ 未満の群が単純でないことの確認が必要で、ここでは扱わない。」
- **Reported:** 2026-10-28 (10fede1)
