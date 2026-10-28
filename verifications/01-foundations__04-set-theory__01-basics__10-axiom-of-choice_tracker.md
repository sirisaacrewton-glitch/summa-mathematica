# Verification tracker: `01-foundations/04-set-theory/01-basics/10-axiom-of-choice.html`

<!-- source: 01-foundations/04-set-theory/01-basics/10-axiom-of-choice.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main concerns are in the supplements: the attribution of the countable-pairs counterexample to the Feferman–Levy model rather than Cohen's model, a minor imprecision in the Tychonoff/Hausdorff remark, and a subtle imprecision in the Solovay-model discussion. The proofs and the main theorem statements appear sound.

## Issues

### ISSUE-0001 [Open] Countable union of countable sets without AC
- **Category:** Supplement/remark error
- **Location:** supplement after set:feferman-levy
- **Detail:** The supplement says that in the Feferman–Levy model a family of countably many 2-element sets without a choice function exists, and that this is consistent with ZF. But in that model $\R$ is a countable union of countable sets, which already implies a countable family of 2-element sets without a choice function (a countable union of pairs without a selector follows from a countable union of countable sets being non-well-orderable in the relevant sense). More importantly, the claim as stated ("countably many pairs without a choice function is consistent with ZF") is true but is not a consequence of the Feferman–Levy model in the way stated; the standard reference for pairs is Cohen's model, not Feferman–Levy. The attribution is imprecise.
- **Proposed fix:** Replace with: "同様に、可算個の 2 元集合の族で選択関数をもたないものが存在することも ZF と無矛盾である（コーエンのモデル；Jech 前掲書を参照）。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Hausdorff-space Tychonoff strictly weaker than AC
- **Category:** Supplement/remark error
- **Location:** supplement (他の同値物), Tychonoff bullet
- **Detail:** The text says the Hausdorff-space version of Tychonoff is strictly weaker than AC, citing Halpern–Lévy. Halpern–Lévy (1971) showed that the Tychonoff theorem for compact Hausdorff spaces is strictly weaker than AC, so the attribution is essentially right, but the statement as written ("コンパクト空間の任意の直積はコンパクト" is equivalent to AC, and the Hausdorff version is strictly weaker) needs the hypothesis that the spaces are compact Hausdorff and that the product is taken with the product topology; as stated it is acceptable. No change strictly required, but the phrasing "ハウスドルフ空間に限った版" should read "コンパクトハウスドルフ空間に限った版".
- **Proposed fix:** Change "ハウスドルフ空間に限った版" to "コンパクトハウスドルフ空間に限った版".
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Solovay model and aleph_1 reals
- **Category:** Supplement/remark error
- **Location:** supplement (ZF では逆向きの単射が作れない例)
- **Detail:** The text claims that in Solovay's model every uncountable set of reals contains a perfect set and there is no set of reals of cardinality $\aleph_{1}$. This is correct for the Solovay model (assuming an inaccessible), but the sentence says "ZFC + 到達不能基数が存在する が無矛盾ならば ZF と無矛盾" — the consistency of "there is no injection $\omega_{1}\to\mathcal{P}(\omega)$" requires the inaccessible, and the statement as phrased is acceptable. However, the parenthetical "濃度 $\aleph_{1}$ の実数の集合がない" is a consequence, not an equivalent, and the claim that this shows no injection $\omega_{1}\to\mathcal{P}(\omega)$ needs $\omega_{1}$ to be the true $\omega_{1}$; in Solovay's model $\omega_{1}$ is not well-orderable in the sense needed. This is a subtle imprecision.
- **Proposed fix:** Rephrase: "ソロヴェイのモデル（到達不能基数を仮定）では $\R$ のすべての非可算部分集合が完全集合を含み、したがって $\omega_{1}$ から $\mathcal{P}(\omega)$ への単射は存在しない。"
- **Reported:** 2026-10-28 (8ccef3d)
