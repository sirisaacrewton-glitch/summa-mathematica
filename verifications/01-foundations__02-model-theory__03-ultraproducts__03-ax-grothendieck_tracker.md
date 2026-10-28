# Verification tracker: `01-foundations/02-model-theory/03-ultraproducts/03-ax-grothendieck.html`

<!-- source: 01-foundations/02-model-theory/03-ultraproducts/03-ax-grothendieck.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The core proofs (Lemma 3.1 sentence construction, Lemma 3.3 finite subfield, Theorem 3.4 positive characteristic, Theorem 3.5 transfer via Lefschetz principle and ultraproduct) are logically sound and correctly cite the listed results. The genuine problems are confined to the supplement: the claim that bijective polynomial maps over characteristic-0 algebraically closed fields have polynomial inverses is false for n≥2, the Jacobian conjecture is misstated as an injectivity question rather than an automorphism/inverse question, and the Ramsey analogy conflates two different transfer directions. No issues in the proofs or hypcheck.

## Issues

### ISSUE-0001 [Open] Inverse of bijective polynomial map in char 0
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement claims that over an algebraically closed field of characteristic 0, the inverse of a bijective polynomial map is again a polynomial map. This is false in general for n≥2. The correct statement is the polynomial inverse is polynomial only under additional hypotheses (e.g. the map is injective with invertible Jacobian / is an automorphism, or n=1). A bijective polynomial endomorphism of C^n need not be an automorphism for n≥2 (this is exactly the content of the Jacobian conjecture being open, and bijective alone is insufficient).
- **Proposed fix:** Replace with: '逆写像については、標数 $0$ では一変数の場合は全単射な多項式写像の逆も多項式写像である（次数から従う）が、$n\ge2$ では全単射だけでは逆が多項式写像になるとは限らず、ヤコビ行列式が非零定数という追加条件の下での逆写像の多項式性がヤコビアン予想である。正標数ではフロベニウス写像のように全単射でも逆が多項式写像でない例がある。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Jacobian conjecture phrasing
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement states the Jacobian conjecture as the question 'is a polynomial map C^n→C^n with nonzero constant Jacobian determinant injective?'. The Jacobian conjecture is properly the statement that such a map (nonzero constant Jacobian) is an automorphism, i.e. has a polynomial inverse (equivalently is injective/surjective). Framing it merely as 'is it injective' is imprecise; the standard conjecture asserts invertibility with polynomial inverse. Also the claim that it is 'unresolved for n≥2' is correct, but the formulation as injectivity is a misstatement of the conjecture.
- **Proposed fix:** State: 'ヤコビ行列式が $0$ でない定数である多項式写像 $\mathbb{C}^{n}\to\mathbb{C}^{n}$ は全単射で逆も多項式写像か、というヤコビアン予想は $n\ge2$ で未解決である。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Ramsey's theorem analogy via compactness
- **Category:** Supplement/remark error
- **Location:** supplement (似た定理)
- **Detail:** The supplement says the ultraproduct method is 'the same form' as passing between finite and infinite versions of Ramsey's theorem via compactness. The finite-to-infinite transfer for Ramsey's theorem is a genuine compactness argument, but the Ax–Grothendieck ultraproduct argument transfers from positive characteristic to characteristic 0 (a different axis), not from finite to infinite. The analogy conflates two distinct transfers and is misleading as stated.
- **Proposed fix:** Rephrase: '超積による方法は、一階の文が極限（超積）で保たれることを使う点で、ラムゼーの定理の有限版から無限版をコンパクト性で導く議論と同種の「移行」である（ただし本証明の超積は標数 $p$ から標数 $0$ への移行であり、有限から無限への移行とは方向が異なる）。'
- **Reported:** 2026-10-28 (8ccef3d)
