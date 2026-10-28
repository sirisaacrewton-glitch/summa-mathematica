# Verification tracker: `01-foundations/06-category-theory/04-kan-extensions/05-category-of-elements.html`

<!-- source: 01-foundations/06-category-theory/04-kan-extensions/05-category-of-elements.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect characterization of Grothendieck fibration
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says that a Grothendieck fibration is obtained by dropping uniqueness of liftings and requiring only the existence of Cartesian morphisms. This is imprecise: a Grothendieck fibration requires that for every $e\in\mathbf{E}$ and every $f\colon c\to p(e)$ there exists a Cartesian morphism over $f$ with codomain $e$ (existence of Cartesian liftings), not merely 'existence of Cartesian morphisms' in general. The phrase as written could be read as just requiring some Cartesian morphism somewhere, which is far too weak. Also the correspondence is with pseudofunctors $\mathbf{C}^{\mathrm{op}}\to\mathbf{Cat}$; this part is fine, but the characterization of the fibration condition is stated too loosely.
- **Proposed fix:** Replace with: 「持ち上げの一意性を外し、各 $e\in\mathbf{E}$ と各 $f\colon c\to p(e)$ に対して $e$ を終域とする $f$ 上のデカルト射が存在することだけを要請したものが**グロタンディーク・ファイブレーション**（デカルト・ファイブレーション）で、擬関手 $\mathbf{C}^{\mathrm{op}}\to\mathbf{Cat}$ と（適切な 2 圏の意味で）対応することが知られている。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Covering spaces vs discrete fibrations over the fundamental groupoid
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement claims a correspondence between covering spaces (for good spaces) and discrete fibrations over the fundamental groupoid. This is not correct as stated: covering spaces correspond to functors from the fundamental groupoid to $\mathbf{Set}$ (i.e. to presheaves / actions), equivalently to discrete fibrations over the fundamental groupoid only after passing to the appropriate side. More precisely, covering spaces over a (semi-locally simply connected) space $X$ correspond to functors $\Pi_{1}(X)\to\mathbf{Set}$, which are the same as discrete *opfibrations* (or discrete fibrations over $\Pi_{1}(X)^{\mathrm{op}}$). Saying they correspond to 'discrete fibrations over the fundamental groupoid' in the same shape as \ref{cat:dfib-presheaf} (which is about presheaves = contravariant functors) is a variance error.
- **Proposed fix:** Replace with: 「良い空間での被覆空間は基本亜群 $\Pi_{1}(X)$ から $\mathbf{Set}$ への関手（すなわち $\Pi_{1}(X)^{\mathrm{op}}$ 上の前層、あるいは $\Pi_{1}(X)$ 上の離散オプファイブレーション）と対応し、\ref{cat:dfib-presheaf} と同じ形の『関手を総空間に広げる』構成であることが知られている（ここでは確かめていない）。」
- **Reported:** 2026-10-28 (10fede1)
