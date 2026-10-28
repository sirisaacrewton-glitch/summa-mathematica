# Verification tracker: `01-foundations/04-set-theory/01-basics/05-natural-numbers.html`

<!-- source: 01-foundations/04-set-theory/01-basics/05-natural-numbers.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions of natural number, ω, Peano axioms, ordinal sum/product and their laws, finite sequences) is logically sound: citations match their targets, hypotheses (α>0 in the multiplication laws, β limit in the sup formulas) are verified, and the counterexamples are correct. The genuine problems are confined to the supplements: the claim that H(ω_1) omits ${}^{\omega}\omega$ is false (all functions ω→ω are hereditarily countable), the Peano-uniqueness remark invokes transfinite recursion where only ω-recursion applies, and the 'both-sided distributivity on ω' remark is imprecise about which law is derived and how.

## Issues

### ISSUE-0001 [Open] H(ω_1) does not contain all functions ω→ω
- **Category:** Supplement/remark error
- **Location:** supplement (無限の長さの列)
- **Detail:** The supplement claims that in a model of ZFC without Power Set such as $H(\omega_{1})$ (the hereditarily countable sets), every function $\omega\to\omega$ exists as a set, but the set ${}^{\omega}\omega$ of all of them does not. The first half is false: a function $f\colon\omega\to\omega$ is a set of ordered pairs of natural numbers, and its transitive closure is countably infinite, so $f\in H(\omega_{1})$ — indeed every such $f$ is hereditarily countable. Hence ${}^{\omega}\omega\subseteq H(\omega_{1})$, and since $H(\omega_{1})$ is a set, ${}^{\omega}\omega$ exists there by Separation. So $H(\omega_{1})$ is not a counterexample; the claim that ${}^{\omega}A$ cannot be formed without Power Set is also too strong as stated (it fails for $A$ finite, and the real obstruction is that Replacement applied to $n\mapsto{}^{n}A$ yields only the countable family, whose union is the set of finite sequences).
- **Proposed fix:** Replace the sentence by: 「実際、冪集合の公理を除いた $\ZFC$ のモデル（たとえば遺伝的有限集合全体 $H(\omega)$ を台とするモデル）では $\omega$ が存在しても ${}^{\omega}\omega$ の存在は導けない。一般に置換公理で $n\mapsto{}^{n}A$ から得られるのは $\{{}^{n}A\mid n\in\omega\}$ とその和 $A^{<\omega}$ までであり、${}^{\omega}A$ を得るには冪集合の公理（またはそれに相当する強い公理）が必要である。」 (and drop the incorrect $H(\omega_{1})$ example).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Peano uniqueness via transfinite recursion is misapplied
- **Category:** Supplement/remark error
- **Location:** supplement (ペアノ構造の一意性)
- **Detail:** The supplement says that for any structure $(N,0_{N},s)$ satisfying (1)–(5), the recursion $h(0)=0_{N}$, $h(S(n))=s(h(n))$ defined by transfinite recursion (\ref{set:transfinite-recursion}) gives an isomorphism $\omega\to N$. But $\omega$ is a limit ordinal, and the recursion clause given is only the successor clause; transfinite recursion on an ordinal requires a value at limit stages (here $h(\omega)$ would be needed, and $\omega$ is not of the form $S(n)$). The recursion as written does not define $h$ on all of $\omega$ via \ref{set:transfinite-recursion}; the correct tool is the recursion theorem on $\omega$ (i.e. the induction principle (5) itself, or Dedekind's recursion theorem proved from it), not transfinite recursion on ordinals. The citation is thus used for something it does not supply.
- **Proposed fix:** Replace by: 「$(N,0_{N},s)$ が (1)〜(5) を満たすなら、$\omega$ 上の帰納法（(5)）を用いた再帰定理により $h(0)=0_{N}$, $h(S(n))=s(h(n))$ を満たす $h\colon\omega\to N$ が一意に定まり、これは同型 $\omega\to N$ になる（デデキント）。」 (cite the induction principle (5) rather than \ref{set:transfinite-recursion}).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Distributivity on ω: 'both sides' needs the commutativity caveat made precise
- **Category:** Supplement/remark error
- **Location:** supplement (有限の場合との対比)
- **Detail:** The supplement states that on $\omega$ addition and multiplication are commutative and the distributive law holds on both sides (by commutativity). This is acceptable only because commutativity is invoked, but as written it can be read as claiming $\alpha\cdot(\beta+\gamma)=(\alpha\cdot\beta)+(\alpha\cdot\gamma)$ and $(\beta+\gamma)\cdot\alpha=\beta\cdot\alpha+\gamma\cdot\alpha$ for natural numbers — the right distributive law $(\beta+\gamma)\cdot\alpha=\beta\cdot\alpha+\gamma\cdot\alpha$ is not among the results proved (only the left law \ref{set:ordinal-multiplication-laws}.3 is), and it follows only by combining the left law with commutativity (2)(3) of \ref{set:natural-arithmetic}. The sentence is imprecise about which law is derived and from what.
- **Proposed fix:** Replace by: 「\ref{set:natural-arithmetic} により $\omega$ の上では和も積も可換である。したがって左分配律 $\alpha\cdot(\beta+\gamma)=\alpha\cdot\beta+\alpha\cdot\gamma$（\ref{set:ordinal-multiplication-laws}.3）と可換性を組み合わせて右分配律 $(\beta+\gamma)\cdot\alpha=\beta\cdot\alpha+\gamma\cdot\alpha$ も $n,m,k\in\omega$ について成り立つ。非可換性・分配律の片側性は無限順序数に固有の現象である。」
- **Reported:** 2026-10-28 (8ccef3d)
