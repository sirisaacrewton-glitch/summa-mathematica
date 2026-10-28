# Verification tracker: `01-foundations/04-set-theory/02-infinitary-combinatorics/15-luzin-sets.html`

<!-- source: 01-foundations/04-set-theory/02-infinitary-combinatorics/15-luzin-sets.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems (CH existence, MA nonexistence, independence corollary) and their proofs are correct, and the problem solutions are fine. The serious problems are confined to the supplement: it asserts that Luzin sets have measure zero and that Sierpinski sets are meager, both of which are false as general statements (these are independent properties, not consequences of the definitions). The closing metaphor also misdescribes why MA kills Luzin sets. These should be corrected.

## Issues

### ISSUE-0001 [Open] Luzin set need not have measure zero
- **Category:** Supplement/remark error
- **Location:** supplement, first paragraph
- **Detail:** The supplement claims "ルジンの集合は測度 0 であり" (a Luzin set has measure zero). This is false as stated: a Luzin set is only guaranteed to meet every meager set countably, and there is no measure condition in the definition. Indeed, under CH one can construct a Luzin set of measure zero, but one can equally construct a Luzin set that is not of measure zero (e.g. by a similar transfinite construction avoiding measure-zero sets, or by taking a Luzin set and adding a measure-theoretically large set). The statement conflates the Luzin property with the Sierpinski property. The correct known fact is that a Luzin set is not necessarily null, and a Sierpinski set is not necessarily meager; the two notions are independent in general.
- **Proposed fix:** Replace with: "ルジンの集合は測度 0 とは限らず、シェルピンスキーの集合は第一類とは限らない（両者は一般に独立な概念である）。CH のもとでは測度 0 のルジンの集合や第一類のシェルピンスキーの集合も構成できる。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Sierpinski set need not be meager
- **Category:** Supplement/remark error
- **Location:** supplement, first paragraph
- **Detail:** The supplement states "シェルピンスキーの集合は第一類であることが知られている". This is false: a Sierpinski set is defined by meeting every measure-zero set countably, and nothing forces it to be meager. Under CH one can build a Sierpinski set that is meager, but also one that is not meager. The parenthetical justification ("R decomposes into a meager set and a null set") does not yield this conclusion either.
- **Proposed fix:** Remove the claim that a Sierpinski set is meager; state instead that a Sierpinski set is not necessarily meager, and that the meager/null analogues are independent notions.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] MA(aleph_1) does not make aleph_1 points coverable by one meager set
- **Category:** Supplement/remark error
- **Location:** supplement, third paragraph ("高い視点から")
- **Detail:** The metaphor says "MA のもとでは $\aleph_{1}$ 匹の魚の群れは一つの網（第一類集合）でまとめて捕まえられてしまう". This is imprecise/false: MA(aleph_1) implies that the union of aleph_1 meager sets is meager (via \ref{set:ma-baire}), so any aleph_1-sized set is meager, but it is not true that an arbitrary aleph_1-sized set is contained in a single meager set in a way that contradicts being a Luzin set for the right reason. More importantly, the actual reason a Luzin set cannot exist under MA is that an aleph_1-sized subset L' of L is itself meager (union of aleph_1 singletons), so L meets the meager set L' in the uncountable set L', violating the Luzin property. The metaphor's phrasing "one net catches the whole school" misstates this: the school L' is itself the meager set, not caught by an external net. This is a side-comment imprecision.
- **Proposed fix:** Rephrase: "MA のもとでは $\aleph_{1}$ 個の疎集合の和は第一類なので、$\aleph_{1}$ 個の点からなる集合それ自体が第一類集合になってしまい、ルジン性（第一類集合と可算でしか交わらない）に反する。"
- **Reported:** 2026-10-28 (8ccef3d)
