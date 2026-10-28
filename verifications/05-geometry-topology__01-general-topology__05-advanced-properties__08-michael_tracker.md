# Verification tracker: `05-geometry-topology/01-general-topology/05-advanced-properties/08-michael.html`

<!-- source: 05-geometry-topology/01-general-topology/05-advanced-properties/08-michael.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] σ-locally finite refinement does not imply paracompact without regularity
- **Category:** Supplement/remark error
- **Location:** supplement / 正則性を外すと
- **Detail:** The supplement claims that $\R_{K}$ satisfies condition 2 (every open cover has a σ-locally finite open refinement) because it is Lindelöf, but is not paracompact. This is wrong: in a Lindelöf space, any countable subcover $\{U_{n}\}$ gives $\mathcal{V}_{n}=\{U_{n}\}$, which is a σ-locally finite open refinement, so condition 2 holds. But by \ref{top:lf-closed-to-lf-open} (which needs no regularity), condition 2 ⇒ condition 3 ⇒ condition 4 ⇒ locally finite open refinement, so $\R_{K}$ would be paracompact (it is Hausdorff). Indeed $\R_{K}$ is Lindelöf Hausdorff, hence paracompact. So the example does not show that regularity can be dropped from 2 ⇒ paracompact; in fact 2 ⇒ paracompact holds without regularity (only Hausdorff is needed for the definition). The claim is false.
- **Proposed fix:** Replace with: "**正則性を外すと.** 3 ⇒ 4（局所有限な細分から局所有限な閉細分）には正則性が必要である。実際 $\R_{K}$ はハウスドルフかつリンデレーフなので 2 をみたし（可算部分被覆から σ 局所有限な開細分が得られる）、したがってパラコンパクトでもある。しかし正則でないので、3 ⇒ 4 の議論は使えない。" (Note: 2 ⇒ paracompact does not require regularity; only 3 ⇒ 4 does.)
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Sorgenfrey plane is not a product counterexample for paracompactness
- **Category:** Supplement/remark error
- **Location:** text after corollary regular-lindelof-paracompact
- **Detail:** The text says "ゾルゲンフライ平面（その二乗）は正規でないのでパラコンパクトでない。パラコンパクト性は有限直積でも保たれない。" This is a non sequitur: the Sorgenfrey plane is the square of the Sorgenfrey line, and the Sorgenfrey line is itself paracompact (it is Lindelöf and regular). So the Sorgenfrey plane is exactly a finite product of paracompact spaces that fails to be paracompact — that part is fine — but the reasoning given ("not normal hence not paracompact") is correct only because paracompact Hausdorff ⇒ normal. The real issue is that the sentence as written suggests the failure is due to the factors not being paracompact, which is false. More importantly, the claim "パラコンパクト性は有限直積でも保たれない" is correct, but the justification via the Sorgenfrey plane requires noting the Sorgenfrey line is paracompact, which is not stated and is non-obvious from the cited results.
- **Proposed fix:** Rewrite: "ゾルゲンフライ直線はリンデレーフかつ正則なのでパラコンパクトである（\ref{top:regular-lindelof-paracompact}）。しかしその二乗であるゾルゲンフライ平面は正規でなく（\ref{top:sorgenfrey-plane}）、\ref{top:paracompact-normal} によりパラコンパクトでない。よってパラコンパクト性は有限直積で保たれない。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Hypcheck claim about well-ordered index set is imprecise
- **Category:** Supplement/remark error
- **Location:** hypcheck / σ 局所有限の「可算」
- **Detail:** The hypcheck says the argument works for any well-ordered index set, but Step 4 needs that the set of indices $m \le n$ below any given $n$ is finite, which fails for a general well-ordered set (e.g. $\omega+1$: the predecessor set of the top element is infinite). So the remark overstates the generality.
- **Proposed fix:** Replace with: "添字集合が有限の predecessor をもつ整列集合（例えば $\N$）なら同じ議論が通る。一般の整列集合では $n$ より前の段が無限個になりうるので Step 4 が破綻する。"
- **Reported:** 2026-10-28 (8ccef3d)
