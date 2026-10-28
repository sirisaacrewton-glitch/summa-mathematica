# Verification tracker: `01-foundations/06-category-theory/05-higher-categories/06-segal-condition.html`

<!-- source: 01-foundations/06-category-theory/05-higher-categories/06-segal-condition.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Nerve is not characterized by unique inner-horn filling
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement claims that the nerve is exactly the quasi-category whose inner horns have *unique* fillings. This is false. A simplicial set in which every inner horn has a unique filler is a nerve of a category only under an additional condition; uniqueness of inner-horn fillers alone does not force the Segal condition. Concretely, the nerve of a category has unique inner-horn fillers, but the converse fails: e.g. a simplicial set with X_0 = *, X_1 = {*}, but with an extra nondegenerate 2-simplex (so X_2 has two elements) has unique inner-horn fillers (the only inner horn Λ^2_1 has a single vertex and a single edge, filled uniquely by the extra 2-simplex) yet fails the Segal condition since γ_2 is not injective. So 'unique inner-horn filling' does not characterize nerves; the correct characterization is the Segal condition (plus the analogous higher conditions), not unique horn filling.
- **Proposed fix:** Replace with: 「内側の角への写像の全射性（一意性を外したもの）を要求すると**準圏**（ボードマン–フォークトの弱カン複体）になる。神経は準圏の特別な場合である。ただし『内側の角の充填が一意』という条件だけでは神経を特徴づけられない（例えば X_{0}, X_{1} が一点で、退化でない 2 単体を余分に持つ単体的集合は内側の角の充填が一意だがセガール条件を満たさない）。神経の特徴づけは本ページのセガール条件（および高次の同型条件）で与えられる。」
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Internal-category nerve characterization needs more than a single isomorphism condition
- **Category:** Supplement/remark error
- **Location:** supplement (似た定理)
- **Detail:** The supplement says that for the nerve of an internal category 'the same characterization holds by the map to the iterated pullback being an isomorphism'. For an internal category in a general category with finite limits, being a nerve requires more than the single Segal-type isomorphism to the iterated pullback; one also needs the underlying simplicial object to be 'discrete' / the analogue of the condition that the Segal maps are isomorphisms together with the appropriate discreteness (e.g. the object of objects being recovered correctly, and for the characterization of nerves among simplicial objects one needs the full Segal condition plus that X_0 detects the relevant structure). Stated as 'the same characterization holds by the map to the iterated pullback being an isomorphism' it is imprecise/overstated for a general internal-category setting.
- **Proposed fix:** Soften to: 「内部圏の神経でも、反復引き戻しへのセガール型の写像が同型であることが本質的な役割を果たす（一般の内部圏の設定では、これに加えて台となる単体的対象が適切な離散性・完全性の条件を満たす必要がある）。」
- **Reported:** 2026-10-28 (8ccef3d)
