# Verification tracker: `05-geometry-topology/01-general-topology/09-topological-groups/01-topological-groups.html`

<!-- source: 05-geometry-topology/01-general-topology/09-topological-groups/01-topological-groups.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Lower-limit topology on R is not a semitopological group under addition
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that R with the lower limit (Sorgenfrey) topology has continuous addition but discontinuous inverse. Addition is indeed continuous (it is continuous in the usual topology, and the Sorgenfrey topology is finer, so continuity is preserved). However, the inverse map x ↦ -x is also continuous: the preimage of [a,b) under negation is (-b,-a], which is open in the Sorgenfrey line since (-b,-a] = ⋃_{n} [-b+1/n, -a). Hence the example does not exhibit a semitopological group that fails to be a topological group.
- **Proposed fix:** Replace the example with a correct one, e.g.: 「たとえば $\mathbb{R}$ に下限位相（ゾルゲンフライ直線）を入れたものは加法について半位相群だが、逆元 $x\mapsto -x$ も連続なので位相群でもある。逆元が連続でない例としては、$\mathbb{R}$ に通常の位相を入れた群に一点コンパクト化の位相を加えたものなどがある」— or simply delete the sentence and state only that the results here need not hold without continuity of inversion.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Haar measure existence requires local compactness; uniqueness needs more care
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The statement '局所コンパクトなハウスドルフ位相群には、平行移動で不変な測度（ハール測度）がただ一つ（定数倍を除いて）存在する' is essentially correct (Haar's theorem), but as written it omits that the measure is a Radon measure and that uniqueness is up to a positive scalar; more importantly the phrase 'ただ一つ（定数倍を除いて）' is fine. This is acceptable, but the claim that it holds for all locally compact Hausdorff groups is correct. No error here; flagged only for completeness — no fix needed.
- **Proposed fix:** No change required; optionally specify '正の定数倍を除いて一意なラドン測度'.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] First-countable Hausdorff topological groups are metrizable — needs to be stated correctly
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The claim '第一可算なハウスドルフ位相群は距離化可能' is correct (Birkhoff–Kakutani). However, the sentence attributes this to the left uniformity of the group; the metrizability theorem requires the uniformity to be countably generated, which follows from first countability of the group, not merely from the existence of the left uniformity. As stated it is not false, but the justification 'を使うと' is imprecise: complete regularity follows from the uniformity, while metrizability additionally needs first countability. This is a minor imprecision, not a mathematical error.
- **Proposed fix:** 「位相群の左一様構造を使うと、位相群はすべて完全正則であることが示される。さらに第一可算なハウスドルフ位相群では左一様構造が可算生成となり、距離化可能である（Birkhoff–Kakutani の定理）。」
- **Reported:** 2026-10-28 (10fede1)
