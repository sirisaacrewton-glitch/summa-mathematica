# Verification tracker: `01-foundations/06-category-theory/02-monoidal-categories/08-braids.html`

<!-- source: 01-foundations/06-category-theory/02-monoidal-categories/08-braids.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems (braid category is braided monoidal, freeness/Joyal–Street, coherence) and their proofs are essentially correct, and the cited labels match their uses. The genuine problems are confined to the closing supplement: the configuration-space statement confuses ordered and unordered point configurations (the ordered version gives the pure braid group, contradicting the page's own opening remark), and the $E_{n}$-operad remark's '1-dimensional truncation' phrasing is imprecise. Both are supplement-level errors of the kind flagged as high-priority.

## Issues

### ISSUE-0001 [Open] Configuration space fundamental group: ordered vs unordered points
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement claims that the fundamental group of the configuration space of $n$ points in the plane is the braid group $B_{n}$, and that in dimension $\ge 3$ it is the symmetric group $\mathfrak{S}_{n}$. This is only true for the space of *unordered* $n$-point subsets (UConf). For the *ordered* configuration space (FConf), the fundamental group is the pure braid group $P_{n}$ in the plane, and the pure braid group (not $\mathfrak{S}_{n}$) in dimension $\ge 3$. The page's own opening remark correctly notes that Mac Lane's ordered-points description gives the pure braid group, so this supplement contradicts the page's own correction.
- **Proposed fix:** Replace with: 「これは、平面内の $n$ 点の**順序を無視した**配置空間（$n$ 点集合の空間）の基本群が組紐群 $B_{n}$、3 次元以上では対称群 $\mathfrak{S}_{n}$ になることの圏論的な影である（順序つきの配置空間の基本群は、平面では純組紐群 $P_{n}$、3 次元以上では自明）」。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] E_n-operad claim: '1-dimensional truncation' and E_infty
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement says the phenomenon is generalized in homotopy theory as "$E_{1}$, $E_{2}$, $E_{\infty}$ algebras (their 1-dimensional truncation)". The parenthetical "1-dimensional truncation" is imprecise/incorrect: $E_{n}$-algebras are not obtained by truncating in dimension; rather $E_{1}$ corresponds to (braided) monoidal, $E_{2}$ to braided monoidal, and $E_{\infty}$ to symmetric monoidal structures. The correspondence is between the operad $E_{n}$ and the level of commutativity, not a dimensional truncation of a single object.
- **Proposed fix:** Replace with: 「ホモトピー論では、$E_{1}$ 代数がモノイダル、$E_{2}$ 代数が組紐モノイダル、$E_{\infty}$ 代数が対称モノイダルな構造に対応するという形で一般化されるとされる」.
- **Reported:** 2026-10-28 (8ccef3d)
