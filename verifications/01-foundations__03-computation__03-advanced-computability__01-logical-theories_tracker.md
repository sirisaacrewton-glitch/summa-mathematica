# Verification tracker: `01-foundations/03-computation/03-advanced-computability/01-logical-theories.html`

<!-- source: 01-foundations/03-computation/03-advanced-computability/01-logical-theories.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine concern is the supplement's complexity claim about Presburger arithmetic (double-exponential lower bound attributed to Fischer–Rabin), which overstates/misattributes the known result; the quantifier-elimination remark about congruence predicates is imprecise. Other checked items (the automaton lemma, the undecidability proof via Tarski, the problem solutions) are sound.

## Issues

### ISSUE-0001 [Open] Presburger decision complexity misattributed to Fischer–Rabin
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討
- **Detail:** The supplement says deciding Th(N,+) requires double exponential time, attributed to Fischer–Rabin. The known Fischer–Rabin (1974) result is a double-exponential *lower bound on the length of formulas* in quantifier elimination, giving a triple-exponential decision procedure; the standard complexity statement is that Presburger arithmetic is decidable in at most double exponential time (and requires at least exponential time / is not elementary-lower in the general sense). Stating 'double exponential time is necessary' as a lower bound is not the established attribution.
- **Proposed fix:** Replace with: '決定には二重指数時間の上界が知られており（量化子消去の式の長さが二重指数的に増大するというフィッシャー–ラビンの結果に基づく）、実際に非常に遅い。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Quantifier elimination for Presburger needs congruences, not just 'k で割った余り'
- **Category:** Supplement/remark error
- **Location:** supplement / プレスブルガー算術
- **Detail:** The claim that quantifier elimination requires adding predicates 'k で割った余りが r' is imprecise: one must add, for each modulus, the divisibility/congruence predicates (e.g. k | x, or x ≡ r mod k) uniformly for all k, and the resulting language must be expanded accordingly. As stated it is vague but essentially correct in spirit; however the phrasing 'k で割った余りが r' without specifying that all moduli k are needed is imprecise.
- **Proposed fix:** State: '量化子消去には、各 k に対する合同式 x ≡ r (mod k)（割り切れることを含む）を言語に加える必要がある。'
- **Reported:** 2026-10-28 (8ccef3d)
