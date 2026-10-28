# Verification tracker: `01-foundations/03-computation/02-computability/11-universal-smn.html`

<!-- source: 01-foundations/03-computation/02-computability/11-universal-smn.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page's proofs (normal form theorem, smn theorem, second recursion theorem, halting problem, and the problems) are logically sound: the smn construction correctly handles register collisions via the bound r ≤ e, the shift P is correctly computed, and the hypcheck items are accurate. The main genuine problems are in the supplement: Rogers' isomorphism theorem is stated as a mere 'computable bijection' rather than a computable isomorphism (with computable inverse), and Rice's theorem is loosely attributed to a 'Turing machine version' although the displayed set uses the register-machine numbering φ. A third bullet about uniformity is imprecise but not false. No issues in the theorem/lemma/proof bodies were found.

## Issues

### ISSUE-0001 [Open] Rogers' isomorphism theorem misstated as 'computable bijection'
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (許容的な番号付け)
- **Detail:** The supplement claims that any two acceptable numberings are related by a computable bijection (Rogers' isomorphism theorem). Rogers' theorem gives a bijection that is an isomorphism of the numberings, i.e. it is computable together with its inverse (a computable isomorphism / recursive permutation), not merely a computable bijection. A computable bijection with non-computable inverse would not preserve the induced structure. The statement as written is weaker than the actual theorem and is imprecise.
- **Proposed fix:** 許容的な番号付けどうしは計算可能な全単射で移り合う（ロジャーズの同型定理）→ 許容的な番号付けどうしは、番号付けの同型を与える計算可能な全単射（逆も計算可能な全単射）で移り合う（ロジャーズの同型定理）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Rice's theorem attributed to the Turing-machine version only
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (ライスの定理)
- **Detail:** The supplement states Rice's theorem as '{e : φ_{e} ∈ C} is undecidable (the Turing-machine version of \ref{comp:rice})'. But φ_{e} is defined here via register machines (\ref{comp:index}), and the set {e : φ_{e} ∈ C} is exactly the statement about the numbering φ, not a 'Turing machine version'. The parenthetical is misleading: the cited \ref{comp:rice} is the Turing-machine formulation, whereas the displayed set uses the register-machine numbering. Since the two numberings are equivalent (\ref{comp:L-equals-rm}), the claim is true, but the attribution is imprecise.
- **Proposed fix:** 計算可能な部分関数の集合 C で自明でないものについて、{e : φ_{e} ∈ C} は決定不能である（\ref{comp:rice} はチューリング機械の番号付けについての同内容の定理で、\ref{comp:L-equals-rm} により本ページの φ の番号付けにもそのまま移る）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that the minimization in the normal form theorem is 'used only once' and T_k, U are fixed
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The bullet says the minimization is used only once and T_{k}, U do not depend on φ^{(k)}_{e}. This is essentially correct, but the phrase 'これは \ref{comp:normal-form-program} を一様にしたものである' overstates: \ref{comp:normal-form-program} concerns the normal form of each individual program, while here the normal form is uniform in e via the coding. This is a minor imprecision rather than a falsehood; however, the stronger issue is that the claim 'T_{k} and U are fixed independent of φ^{(k)}_{e}' is true only because the coding is fixed, which the bullet does not mention. Not a genuine error; no report needed beyond noting the uniformity claim is justified by the fixed coding.
- **Proposed fix:** 標準形定理で使う最小化は一度だけで、T_{k} と U は（固定したコード化のもとで）計算可能な部分関数 φ^{(k)}_{e} によらず固定されている。これは \ref{comp:normal-form-program} をコード e について一様にしたものである。
- **Reported:** 2026-10-28 (10fede1)
