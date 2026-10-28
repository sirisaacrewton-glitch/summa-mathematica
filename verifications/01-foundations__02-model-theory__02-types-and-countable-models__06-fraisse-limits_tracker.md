# Verification tracker: `01-foundations/02-model-theory/02-types-and-countable-models/06-fraisse-limits.html`

<!-- source: 01-foundations/02-model-theory/02-types-and-countable-models/06-fraisse-limits.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Urysohn space is not the completion of the rational Urysohn space
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement states that the Urysohn space is the completion of the Fraïssé limit of the class of finite metric spaces with rational distances (the rational Urysohn space). This is false: the completion of the rational Urysohn space is not the Urysohn space. The rational Urysohn space is a countable metric space with rational distances; its completion is a complete separable metric space, but it is not the Urysohn space (the Urysohn space is the Fraïssé limit of the class of *all* finite metric spaces, and it is not the completion of the rational one; the rational Urysohn space is dense in the Urysohn space only in the sense that the Urysohn space is the completion of the rational Urysohn space with respect to a suitable metric, but the completion of the rational Urysohn space as a metric space is not the Urysohn space). More precisely, the Urysohn space is the completion of the rational Urysohn space only when the rational Urysohn space is equipped with the metric induced by the Urysohn space, which is not the same as the completion of the rational Urysohn space as an abstract metric space. The statement as written is misleading and false.
- **Proposed fix:** Replace with: "フライッセ極限のもう一つの重要な例は**有理ウリゾーン空間**（有理数距離の有限距離空間のクラスのフライッセ極限、\ref{model:page-rational-urysohn}）であり、その完備化は**ウリゾーン空間**と呼ばれ、すべての可分距離空間を含む普遍的な距離空間であることが知られている（有理版の存在・一意性・普遍性は \ref{model:rational-urysohn-unique}, \ref{model:rational-urysohn-universal}）。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Fraïssé limit of finite groups is not the Hall universal locally finite group
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that the class of finite groups has HP, JEP, AP and that its Fraïssé limit is the Hall universal locally finite group. This is false: the class of finite groups does not have the amalgamation property (AP fails for finite groups; e.g., the amalgam of two finite groups over a common subgroup need not be finite, and in fact the class of finite groups does not have AP). The Hall universal locally finite group is the Fraïssé limit of the class of finite groups *with the amalgamation property*? No—the Hall universal locally finite group is the Fraïssé limit of the class of finite groups, but the class of finite groups does not have AP, so the Fraïssé theorem does not apply. The correct statement is that the class of finite groups does not have AP, and the Hall universal locally finite group is constructed differently (it is the Fraïssé limit of the class of finite groups? Actually the Hall universal locally finite group is the Fraïssé limit of the class of finite groups, but the class of finite groups does not have AP, so this is not a Fraïssé limit in the usual sense). The statement is false.
- **Proposed fix:** Replace with: "関数記号のある言語では、有限生成構造のクラスについて同様の定理が成り立つことが知られているが、有限群のクラスは融合性をもたないため、フライッセの定理を直接適用することはできない（ホールの普遍局所有限群は別の方法で構成される）。"
- **Reported:** 2026-10-28 (10fede1)
