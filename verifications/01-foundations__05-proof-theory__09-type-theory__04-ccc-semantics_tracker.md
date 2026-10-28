# Verification tracker: `01-foundations/05-proof-theory/09-type-theory/04-ccc-semantics.html`

<!-- source: 01-foundations/05-proof-theory/09-type-theory/04-ccc-semantics.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The proofs (uniqueness of typing, weakening/substitution, context universality, renaming and substitution lemmas, soundness, Peirce non-inhabitation) are sound and the cited labels match their uses. The only genuine problems are in the supplement: the unqualified identifications of dependent type theory with locally cartesian closed categories and of linear types with symmetric monoidal closed categories are overstated, since the full systems require additional structure beyond those categories. These should be qualified.

## Issues

### ISSUE-0001 [Open] Dependent type theory corresponds to locally cartesian closed categories — imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 一般化：型の構成と圏の構造
- **Detail:** The supplement states that dependent type theory corresponds to locally cartesian closed categories. This is only true for a restricted fragment (dependent function types, Σ-types, and extensional identity types à la Seely). Martin-Löf type theory with intensional identity types is not modeled by an arbitrary LCCC; the correspondence requires additional structure (e.g. a comprehension category with unit, or a split fibration with suitable structure). Stated as an unqualified identification it is overstated.
- **Proposed fix:** 依存型理論（依存関数型・Σ型・外延的同一視型をもつ断片）は局所デカルト閉圏に対応することが知られている（R. A. G. Seely 1984 に始まる）。内包的同一視型をもつマルティン＝レーフ型理論には、局所デカルト閉圏に加えてさらに構造（コンパニオン付きのコンパンション圏など）が必要である。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Linear types correspond to symmetric monoidal closed categories — imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 一般化：型の構成と圏の構造
- **Detail:** The supplement says linear types (variables used exactly once) correspond to symmetric monoidal closed categories. Symmetric monoidal closed categories model linear lambda calculus with a symmetric tensor, but the 'exactly once' discipline alone (without symmetry) corresponds to (non-symmetric) monoidal closed categories; and the correspondence with *linear logic* proper requires more (the ! modality, duals for classical linear logic). The unqualified identification is imprecise.
- **Proposed fix:** 線形型（各変数をちょうど一回使う）の計算は対称モノイダル閉圏で解釈できる。線形論理全体（! や双対を含む）にはさらに構造（モノイダル・コモナドや *-自律圏）が必要である。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Removing products still requires finite products — but the claim about 'pure →' is fine; the issue is the claim that products are needed for context interpretation
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says that even for the pure →-only calculus, interpreting contexts requires products, so the interpreting category needs finite products. This is correct for the chosen interpretation (contexts as iterated products). However, the sentence '積と単位型を除いた純粋な → だけの計算でも、文脈の解釈に積が要る' is slightly misleading: one can interpret the →-only calculus in a cartesian closed category where contexts are still interpreted as products — which is exactly what is said. This is not an error. (No issue.)
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
