# Verification tracker: `05-geometry-topology/01-general-topology/06-metric-spaces/08-dugundji.html`

<!-- source: 05-geometry-topology/01-general-topology/06-metric-spaces/08-dugundji.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem, its proof, the shadow-point lemma, the partition-of-unity lemma, and the corollaries are logically sound; the hypcheck is accurate. The only genuine problems are in the supplement's discussion of the normal-space case: the claim that c_0 is not complemented in l^infty is false (c_0 is complemented in l^infty; Phillips' theorem concerns non-complementability in the bidual), and the sentence is additionally garbled. These should be corrected.

## Issues

### ISSUE-0001 [Open] Incorrect claim about c_0 not complemented in l^infty
- **Category:** Supplement/remark error
- **Location:** supplement / 定義域
- **Detail:** The supplement states that "$c_{0}$ は $\ell^{\infty}$ で補完可能でない" (c_0 is not complemented in l^infty). This is false: c_0 IS complemented in l^infty (e.g. via a projection using a Banach limit / a mean on N). The classical Phillips theorem (Phillips 1940) states that c_0 is not complemented in (l^infty)^* = (c_0)^{**}, i.e. c_0 is not complemented in its bidual, equivalently l^1 is not complemented in (l^1)^{**}. The argument as written therefore does not establish the intended non-existence of a bounded linear extension operator, and the cited theorem is misapplied.
- **Proposed fix:** Replace with the correct statement: "$c_{0}$ は $\ell^{\infty}$ の部分空間としては補完可能である（バナッハ極限を用いた射影が存在する）が、フィリップスの定理（R. S. Phillips 1940）により $c_{0}$ はその二重双対 $(c_{0})^{**}\cong(\ell^{\infty})^{*}$ の中で補完可能でない。この事実を用いて、$\beta\mathbb{N}\setminus\mathbb{N}$ から $\beta\mathbb{N}$ への有界線形な拡張作用素が存在しないことが示される。" (Or simply remove the incorrect parenthetical claim and the flawed argument, replacing it with a correct reference.)
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Typo/repetition makes the Phillips statement garbled
- **Category:** Supplement/remark error
- **Location:** supplement / 定義域
- **Detail:** The sentence "$c_{0}$ は $\ell^{\infty}$ は $\ell^{\infty}$ で補完可能でない" is grammatically broken (repeats "$\ell^{\infty}$ は"). As written it is not a well-formed mathematical claim, and combined with the misattribution above it is misleading.
- **Proposed fix:** Correct to a single well-formed statement, e.g. "$c_{0}$ は $(c_{0})^{**}\cong(\ell^{\infty})^{*}$ の中で補完可能でない（フィリップスの定理）".
- **Reported:** 2026-10-28 (8ccef3d)
