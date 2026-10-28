# Verification tracker: `05-geometry-topology/03-algebraic-geometry/02-schemes/03-properties.html`

<!-- source: 05-geometry-topology/03-algebraic-geometry/02-schemes/03-properties.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect claim that reduced equals geometrically reduced over perfect fields
- **Category:** Supplement/remark error
- **Location:** remark グロタンディークの設計 / item 3
- **Detail:** The remark states 「完全体上では被約と幾何的に被約が一致することが知られている」. This is false as stated for arbitrary (not necessarily finite type / locally of finite presentation) schemes over a perfect field. The standard result is: for a scheme locally of finite presentation over a field k, X is geometrically reduced over k iff X is reduced and k is perfect (or more precisely, reduced + k perfect implies geometrically reduced only under finite presentation). Without finite presentation, reducedness need not be preserved by arbitrary field extensions. Since the surrounding discussion is about general schemes and the remark does not impose finite type, the statement is overstated.
- **Proposed fix:** Replace with: 「$k$ 上局所有限型（有限表示）なスキーム $X$ については、$k$ が完全体なら $X$ が被約であることと幾何的に被約であることは同値である（本サイト未収録）。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Nagata pathologies do not all vanish over excellent bases as claimed
- **Category:** Supplement/remark error
- **Location:** remark グロタンディークの設計 / item 4
- **Detail:** The remark claims 「とくに体や Z 上有限型のスキームでは、永田の病理はすべて起こらない」. This is too strong. While excellent rings exclude the specific pathologies listed (infinite Krull dimension, non-finite normalization, non-catenary), the phrase 「永田の病理はすべて起こらない」 overstates: excellent rings are not universally catenary-free of all pathologies, and more importantly the cited pathologies (infinite dimension, non-catenary) are properties of rings, not of finite-type schemes over a field. Over a field, finite-type schemes are automatically excellent and catenary, so the statement is vacuously fine for those, but the blanket claim that all Nagata pathologies disappear is imprecise because Nagata also constructed other counterexamples (e.g. to the finiteness of normalization in dimension > 2 over non-excellent DVRs) that are not covered by the excellent condition alone in the way stated.
- **Proposed fix:** Replace with: 「とくに体や $\mathbb{Z}$ 上有限型のスキームは優秀であり、上に挙げたような病理（無限次元・非鎖状・正規化の非有限性）は起こらない。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Fiber product in locally ringed spaces: claim needs care
- **Category:** Supplement/remark error
- **Location:** supplement 前提を変えると
- **Detail:** The supplement states 「局所環付き空間の圏でもファイバー積が存在し、スキームのファイバー積と一致することが知られている」. In the category of locally ringed spaces, fiber products do NOT generally exist (the category of locally ringed spaces does not have all fiber products; the fiber product of locally ringed spaces can fail to exist, and even when it exists it need not agree with the scheme-theoretic one). The correct statement is that fiber products exist in the category of ringed spaces, and the inclusion of locally ringed spaces into ringed spaces does not preserve them in general. This is a genuine false claim.
- **Proposed fix:** Replace with: 「環付き空間の圏ではファイバー積が存在するが、局所環付き空間の圏では一般には存在しない。スキームの圏はファイバー積をもち、それは環付き空間としてのファイバー積と一致する（本サイト未収録）。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Counterexample: Spec A is one point but A not noetherian — check the ring
- **Category:** Unsupported fact
- **Location:** counterexample 台がネーター空間でもネータースキームとは限らない
- **Detail:** The counterexample takes A = k[x_1,x_2,...]/m^2 with m=(x_1,x_2,...). The claim that Spec A is a single point is correct (m A is the unique prime). However the statement 「$A$ はネーター環でない」 is correct, but the reasoning 「$Ax_i = kx_i$」 requires that x_i x_j = 0 for all i,j including i=j, which holds since m^2=0. This is fine. But the claim that the underlying space is noetherian is correct. No error here; the environment is a counterexample, not a fact. Actually this is fine.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
