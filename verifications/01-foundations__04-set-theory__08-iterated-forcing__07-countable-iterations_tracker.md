# Verification tracker: `01-foundations/04-set-theory/08-iterated-forcing/07-countable-iterations.html`

<!-- source: 01-foundations/04-set-theory/08-iterated-forcing/07-countable-iterations.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] 誤った「一般の ω₁-閉 ω₂-c.c. p.o. の可算台反復は ω₂-c.c. を保たない」
- **Category:** Supplement/remark error
- **Location:** supplement「前提の検討」第2項目
- **Detail:** supplement は「一般の ω₁-閉 ω₂-c.c. な p.o. の可算台反復では ω₂-c.c. は保たれない」と述べる。しかし本文の ω₂-c.c. の保存（\ref{set:cs-ad-cc}）は、各段階の p.o. が ω₁-閉かつ ω₂-c.c. であること（および標準的な名前の形）から示されており、実際には ω₁-閉 ω₂-c.c. な p.o. の可算台反復は ω₂-c.c. を保つ（Shelah の反復定理の特別な場合）。本文冒頭でも「ω₂-c.c. かつ ω₁-閉な p.o. で強制する」ことが基数保存の方法として述べられている。したがってこの主張は過度に一般化された誤りである。
- **Proposed fix:** Replace with: "\ref{set:cs-ad-cc} shows that the countable-support iteration of \emph{any} $\omega_{1}$-closed $\omega_{2}$-c.c. p.o.'s (with standard names) is again $\omega_{2}$-c.c.; what is special about the almost disjoint p.o. is that its first coordinate lies in the ground model, which makes the pigeonhole argument in Stage 2 work. The general preservation theorem for countable-support iterations of $\omega_{1}$-closed $\omega_{2}$-c.c. p.o.'s is a special case of Shelah's iteration theorem."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] 「固有な p.o. の可算台反復は固有」の帰属と「ω₁ を保つ」の位置づけ
- **Category:** Supplement/remark error
- **Location:** supplement「関連する結果」
- **Detail:** 「固有な p.o. の可算台反復は固有であり ω₁ を保つことが知られている」という記述は、固有性の可算台反復保存（Shelah）自体は正しいが、ω₁ の保存は固有性からではなく可算台反復が適切（proper）であることから従う、という点が混同されている。また「ボレル予想の無矛盾性（ラヴァー）」は固有強制の枠組みより前の結果であり、固有強制の理論の帰結として挙げるのは帰属として不正確である。
- **Proposed fix:** Rewrite: "Countable-support iterations of proper p.o.'s are proper (Shelah), hence preserve $\omega_{1}$; this yields the consistency of PFA. The consistency of the Borel conjecture (Laver) predates and does not rely on the general theory of proper forcing."
- **Reported:** 2026-10-28 (8ccef3d)
