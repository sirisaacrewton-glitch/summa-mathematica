# Verification tracker: `01-foundations/03-computation/04-complexity/04-space-complexity.html`

<!-- source: 01-foundations/03-computation/04-complexity/04-space-complexity.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is mathematically sound overall. The main proof (Savitch's theorem) and the TQBF PSPACE-completeness proof are correct. The supplement contains a few statements that are slightly imprecise or potentially misleading, particularly regarding the improvement of Savitch's theorem and the characterization of proper inclusions. These are minor and do not affect the core mathematics, but they are worth correcting for accuracy.

## Issues

### ISSUE-0001 [Open] Savitch の 2 乗の改善についての記述が不正確
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討
- **Detail:** 「サヴィッチの定理の 2 乗が改善できるかどうか（たとえば NSPACE(f)⊆SPACE(f^{1.5})）は知られていない」とあるが、これは誤り。Savitch の定理の 2 乗は一般には改善されていないが、本ページの設定（f(n)≥n、単一テープ）では NSPACE(f)⊆SPACE(f^2) の 2 乗は最良とは限らず、実際には NSPACE(f)⊆SPACE(f^2) の形の改善は知られていないという主張自体は正しいが、例として挙げた f^{1.5} は「知られていない」ではなく、一般には成り立たないことが知られている（NSPACE(f)⊆SPACE(f^{1.5}) は未解決ではなく、f によっては反例がある）。より正確には、Savitch の定理の 2 乗は本質的に最良であり、f^{1.5} への改善は一般には不可能であることが知られている（例：f(n)=n で NSPACE(n)⊆SPACE(n^{1.5}) は未解決だが、f を大きくすると反例がある）。したがって「知られていない」という記述は過度に一般化されており、誤解を招く。
- **Proposed fix:** Replace with: "サヴィッチの定理の 2 乗のオーダーが一般に改善できるかは未解決であるが、$f$ によっては $\mathrm{NSPACE}(f)\subseteq\mathrm{SPACE}(f^{1.5})$ が成り立たないことが知られている。$\mathrm{NSPACE}(n)\subseteq\mathrm{SPACE}(n^{1.5})$ のような具体的な改善は知られていない。"
- **Reported:** 2026-10-28 (8ccef3d)
