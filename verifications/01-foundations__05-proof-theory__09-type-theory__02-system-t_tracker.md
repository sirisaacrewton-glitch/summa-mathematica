# Verification tracker: `01-foundations/05-proof-theory/09-type-theory/02-system-t.html`

<!-- source: 01-foundations/05-proof-theory/09-type-theory/02-system-t.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the strong normalization proof via reducibility, the representability of primitive recursive and Ackermann functions, and the diagonal argument for the proper-subset theorem are sound, and the citations match their targets. The genuine problems are confined to the supplement and one remark: the System F / second-order arithmetic correspondence is stated too strongly and ambiguously, the justification that strong normalization of T implies Con(PA) is imprecise about what is actually needed, and the remark on 'type nesting depth' increasing growth rate is vague and unsubstantiated. No issues in the proofs or definitions were found.

## Issues

### ISSUE-0001 [Open] System F represents exactly the functions provably total in second-order arithmetic — overstated
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (System F)
- **Detail:** The supplement claims that the functions representable in System F are exactly those whose totality is provable in second-order arithmetic (attributed to Girard). The standard result (Girard) is that the functions representable in System F are exactly the functions provably total in second-order Peano arithmetic (PA2), but the precise correspondence is delicate; more importantly the phrase "二階算術" is ambiguous (PA2 vs. a weak second-order arithmetic). The claim as stated ("であることが知られている（ジラール）") is stated more strongly than the literature supports without specifying which second-order system. This is an unsupported/overstated attribution.
- **Proposed fix:** System F で表現可能な関数は、二階ペアノ算術 $\PA^{2}$ で全域性が証明できる関数とちょうど一致することが知られている（ジラール）。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Claim that strong normalization of T yields consistency of PA needs the right direction
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討 (first bullet)
- **Detail:** The supplement says "すべての項について一度に示すことは PA ではできないことが知られている（T の強正規化から PA の無矛盾性が従うため）". The parenthetical justification is imprecise: what yields Con(PA) is the formalized strong normalization of T together with the fact that T represents all primitive recursive functions (and the Dialectica/interpretation of PA in T). Strong normalization alone, as a statement about T's reduction, does not by itself give Con(PA) unless combined with the representation theorem and the interpretation. As stated it is an overstatement of the logical dependency.
- **Proposed fix:** T の強正規化を（原始再帰関数の表現可能性と合わせて）PA の中で形式化できると PA の無矛盾性が導かれてしまうため、T の強正規化を PA で一様に示すことはできない（ゲーデルの第二不完全性定理）。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Universe/type nesting depth claim about growth rate is vague and unsubstantiated
- **Category:** Supplement/remark error
- **Location:** remark after logic:t-ackermann
- **Detail:** The remark states "再帰子の型の複雑さ（型の入れ子の深さ）を上げるごとに、表せる関数の増加速度が上がることが知られている". This is a vague, unqualified claim. In System T the recursor is available at all finite types uniformly, so "raising the nesting depth" is not a well-defined operation producing a hierarchy of systems with strictly increasing growth rates; the statement as written is imprecise and not a standard cited result.
- **Proposed fix:** 型 $\mathrm{N}\to\mathrm{N}$ のような高階の再帰子を用いると、型 $\mathrm{N}$ の再帰子（原始再帰）では表せない関数（アッカーマン関数など）が表せる。
- **Reported:** 2026-10-28 (8ccef3d)
