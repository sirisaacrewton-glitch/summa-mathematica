# Verification tracker: `01-foundations/04-set-theory/08-iterated-forcing/06-ma-consistency.html`

<!-- source: 01-foundations/04-set-theory/08-iterated-forcing/06-ma-consistency.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem and its proof are essentially correct and well-structured. The problems are concentrated in the supplement and side remarks: (1) the claim that countable-support iteration does not preserve c.c.c. is false (countable support preserves c.c.c.; it is properness that finite support fails to preserve), (2) the PFA remark conflates the consistency assumption with the consequence, and (3) the parenthetical after the Solovay–Tennenbaum theorem misdescribes the κ=ω₁ case (the conclusion is MA+CH, not merely MA(ω)). The hypcheck note about κ=ω is essentially correct but could be sharpened. No issues were found in the core proof steps.

## Issues

### ISSUE-0001 [Open] 可算台反復で c.c.c. が保たれないという記述
- **Category:** Supplement/remark error
- **Location:** supplement「前提の検討」第3項目
- **Detail:** 「可算台では一般に c.c.c. は保たれない」は誤り。可算台反復（countable support iteration）は c.c.c. を保つ（Shelah の定理）。c.c.c. を保たないのは可算台反復で proper 性を扱う場合ではなく、逆に有限台反復が c.c.c. を保つのに対し、可算台反復は c.c.c. を保つが proper 性も保つ。いずれにせよ「可算台では c.c.c. が保たれない」という主張は文献に反する。有限台を使う理由は c.c.c. の保存ではなく、proper 性を保たないことや、より単純であることにある。
- **Proposed fix:** Replace with: 「有限台を使うのは、c.c.c. の保存（\ref{set:fs-iteration-cc}）と、小さい集合が途中の段階に現れる性質（\ref{set:iteration-small-sets}）を同時に得るためである。可算台反復も c.c.c. を保つ（Shelah）が、本証明で使う \ref{set:iteration-small-sets} 型の補題は有限台に合わせて述べており、また可算台では固有性を保てる一方で c.c.c. の議論が複雑になる。」
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] PFA が 2^{aleph_0}=aleph_2 を導くという記述の位置づけ
- **Category:** Supplement/remark error
- **Location:** supplement「関連する結果」
- **Detail:** PFA が 2^{\aleph_{0}}=\aleph_{2} を導くこと自体は正しい（MA を含み、MA から 2^{\aleph_{0}} が正則、かつ PFA は 2^{\aleph_{0}}\le\aleph_{2} を強制する）。しかし「超コンパクト基数を仮定」と併記した直後に「PFA は 2^{\aleph_{0}}=\aleph_{2} を導く」と書くと、PFA の無矛盾性の前提（超コンパクト）と混同されやすい。また PFA の無矛盾性は超コンパクト基数の存在から従うという主張は正しいが、正確には「超コンパクト基数の存在を仮定すれば PFA の無矛盾性が示せる」であり、PFA 単独が 2^{\aleph_{0}}=\aleph_{2} を導くのは ZFC の定理（PFA からの帰結）である。文意は取れるが、前提と帰結の区別が曖昧。
- **Proposed fix:** 「超コンパクト基数の存在を仮定すると PFA の無矛盾性が示せる。さらに PFA（したがって MA）から 2^{\aleph_{0}}=\aleph_{2} が従う。」と前提と帰結を分けて述べる。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] κ=ω₁ のときの結論の記述
- **Category:** Supplement/remark error
- **Location:** theorem set:solovay-tennenbaum 直後の括弧書き
- **Detail:** 「κ=ω₁ のときは 2^{<ω₁}=ω₁ が CH であり、結論は CH と MA(ω) だけになる」とあるが、これは誤り。2^{<ω₁}=ω₁ は CH（2^{ω}=ω₁）と同値ではなく、実際には 2^{ω}≤ω₁ を意味する（2^{<ω₁}=sup_{n}2^{ω_n} ではなく、2^{<ω₁}=⋃_{α<ω₁}2^{α} の濃度）。CH は 2^{ω}=ω₁ であり、2^{<ω₁}=ω₁ は CH より弱い（2^{ω}<ω₁ でも成り立ちうるが、ω₁ が基数なので 2^{ω}≥ω₁ より CH と同値になる、という点は正しい）。しかし「結論は CH と MA(ω) だけになる」は誤り：κ=ω₁ のとき結論は MA と 2^{ω}=ω₁、すなわち MA+CH であり、MA(ω) だけでなく MA 全体（全ての λ<ω₁ について MA(λ)、すなわち MA(ℵ₀) 以上の MA）が成り立つ。MA(ω) は ZFC の定理なので「MA(ω) だけ」は無意味に弱い。
- **Proposed fix:** 「κ=ω₁ のときは 2^{<ω₁}=ω₁ が CH と同値であり、結論は MA+CH（すなわち MA と 2^{ω}=ω₁）になる。」
- **Reported:** 2026-10-28 (8ccef3d)
