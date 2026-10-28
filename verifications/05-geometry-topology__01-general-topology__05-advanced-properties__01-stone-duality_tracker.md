# Verification tracker: `05-geometry-topology/01-general-topology/05-advanced-properties/01-stone-duality.html`

<!-- source: 05-geometry-topology/01-general-topology/05-advanced-properties/01-stone-duality.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, lemma, theorems and proofs) is logically sound: the basic-set lemma, the Stone space construction, the representation theorem, the recovery theorem and the duality are correctly argued, and the hypcheck comments are accurate. The one genuine problem is in the supplement: the claim that the Stone representation theorem is equivalent over ZF to the Boolean prime ideal theorem is false, since the representation theorem is a ZF theorem while BPI is not; only the existence of ultrafilters (nonemptiness of Stone spaces) is equivalent to BPI. The remaining supplement statements (Priestley/Gelfand duality, the completeness-theorem analogy, the description of points as ultrafilters, and the dualizing-object remarks) are correct.

## Issues

### ISSUE-0001 [Open] Stone representation is not equivalent to BPI over ZF
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that the Stone representation theorem is equivalent (over ZF) to the Boolean prime ideal theorem (BPI). This is false: the Stone representation theorem is provable in ZF alone (without any choice), whereas BPI is not provable in ZF. The correct statement is that BPI is equivalent to the statement that every Boolean algebra has an ultrafilter (or that the Stone space of every nontrivial Boolean algebra is nonempty), i.e. to the existence part, not to the isomorphism B ≅ Clop(S(B)).
- **Proposed fix:** Replace with: 「選択公理（の弱い形）を外すと、超フィルターをもたない（あるいは少ない）ブール代数がありうる。ストーン空間が空でないこと（超フィルターの存在）はブール素イデアル定理と（ZF 上で）同値であることが知られている。一方、表現定理 B ≅ Clop(S(B)) の同型自体は ZF で証明できる（範囲外）。」
- **Reported:** 2026-10-28 (8ccef3d)
