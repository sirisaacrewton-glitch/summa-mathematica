# Verification tracker: `01-foundations/04-set-theory/01-basics/01-axioms-overview.html`

<!-- source: 01-foundations/04-set-theory/01-basics/01-axioms-overview.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the axiom table, the definitional-extension facts, the finiteness-of-proofs proposition and the soundness/completeness fact are all stated accurately, and the cited labels match their use. The genuine problems are concentrated in the side remarks: the claim that NF's consistency was long an open problem is outdated (Jensen 1969 + Specker settle it relative to ZF), the assertion that Foundation is never used in ordinary mathematics is overstated, and the example's justification that ZFC refutes ∀x∃y(y∈x) omits the extensionality step needed to identify the empty set as a counterexample.

## Issues

### ISSUE-0001 [Open] NF の無矛盾性は未解決ではない
- **Category:** Supplement/remark error
- **Location:** supplement (他の集合論) / 「性質の違う体系」
- **Detail:** 「NF の無矛盾性は長く未解決の問題であった」は誤り。Jensen (1969) が NFU（urelements 付き）の無矛盾性を ZF の無矛盾性から示し、NF 自身については Jensen の結果と Specker の定理（NF は選択公理の否定を証明する）を組み合わせて、NF が無矛盾であることと NFU + 「集合の全体は無限」が無矛盾であることが同値であることが知られている。したがって NF の無矛盾性は ZF の無矛盾性に相対化されて解決済みであり、「長く未解決」と現在形で述べるのは不正確。
- **Proposed fix:** NF の無矛盾性は ZF の無矛盾性に相対化されて示されている（Jensen 1969 による NFU の結果と Specker の定理を組み合わせる）。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] 「通常の数学に基礎の公理はまったく使われない」は過剰
- **Category:** Supplement/remark error
- **Location:** set:ax-foundation / intuition
- **Detail:** 「通常の数学の展開（順序数・基数・実数の構成など）には基礎の公理はまったく使われない」は強すぎる。順序数や累積階層 V_{α} の理論、∈ に関する整礎性を用いる議論（例：整礎帰納法による定義、ランク付け）では基礎の公理が実際に使われる。基礎の公理なしでも多くの数学は展開できるが「まったく使われない」は言えない。
- **Proposed fix:** 通常の数学の展開の多くは基礎の公理なしでも行えるが、順序数や累積階層の理論など、∈ に関する整礎性を本質的に用いる議論では基礎の公理が使われる。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] 「ZFC から反証される」の根拠が不正確
- **Category:** Supplement/remark error
- **Location:** example (解釈) / 「すべての集合は元をもつ」
- **Detail:** 例は「∀x∃y(y∈x) は ZFC から反証される（空集合）」と述べるが、空集合の存在だけでは反証にならない。∀x∃y(y∈x) の否定 ∃x∀y(y∉x) は、空集合の存在（set:empty-set）と外延性から従う。引用先 set:empty-set は空集合の存在と一意性のみで、反証の論理（外延性による ∀y(y∉x) の同定）が省略されており、根拠として不十分。
- **Proposed fix:** この解釈では ∀x∃y(y∈x) が真になるが、ZFC では空集合 ∅（set:empty-set）が ∀y(y∉∅) を満たし、外延性により ∃x∀y(y∉x) が成り立つので、∀x∃y(y∈x) は反証される。
- **Reported:** 2026-10-28 (8ccef3d)
