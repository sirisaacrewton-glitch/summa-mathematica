# Verification tracker: `02-algebra/05-field-theory/01-extensions/03-splitting-fields.html`

<!-- source: 02-algebra/05-field-theory/01-extensions/03-splitting-fields.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (lemma, theorems, proofs, examples, problems) is logically sound: the extension lemma, the counting theorem, existence and uniqueness of splitting fields are correctly argued, and the examples (x^2-2, x^3-2, x^p-1, x^4-2, F_2 example) check out. The genuine problems are confined to the supplement: the description of the Galois group as the 'freedom in the choice of isomorphism' is imprecise, the two-cause characterization of failure of equality is mischaracterized for splitting fields, and the Fröhlich–Shepherdson claim is stated more strongly than supported. No issues in the proved results.

## Issues

### ISSUE-0001 [Open] Galois group described as the freedom in the choice of isomorphism
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** The supplement says the 'freedom in the choice' of the isomorphism between splitting fields is collected into the group of K-automorphisms (the Galois group). This is imprecise: the isomorphisms L→L' between two splitting fields are not a group, and the Galois group is the group of K-automorphisms of L (isomorphisms L→L fixing K), not the set of isomorphisms to another splitting field. The identification of 'freedom of choice' with the Galois group is only valid when L'=L and σ=id.
- **Proposed fix:** Replace with: 「分解体の一意性は『同型を除いて』であり、同型の取り方は一意でない。$L$ 自身への $K$ 同型（$K$ 自己同型）全体は群をなし、これがガロア群である。$\sigma=\id$, $L'=L$ の場合に \ref{fld:extension-count} を適用すると、$K$ 自己同型の個数は $[L:K]$ 以下である。」
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Two causes of failure of equality are not exhaustive / mischaracterized
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** The supplement claims the equality |Aut_K(L)| = [L:K] fails for exactly two reasons: roots missing from Ω (non-normality) and repeated roots (non-separability). For a splitting field L of f over K, L always contains all roots of f, so 'roots missing from Ω' cannot be the cause when Ω=L; the relevant failure for a splitting field is that the minimal polynomial of some α_i may have roots outside L (non-normality of L/K), which is a different statement. Also the count in \ref{fld:extension-count} concerns extensions into an arbitrary Ω, not just automorphisms of L, so the framing conflates two settings.
- **Proposed fix:** Replace with: 「$L/K$ が分解体のとき、$|\mathrm{Aut}_{K}(L)|=[L:K]$ が成り立つのは $L/K$ が正規かつ分離な場合（ガロア拡大）である。等号が崩れる原因は、$L/K$ が正規でないこと（ある $\alpha_{i}$ の最小多項式が $L$ に根を持たない。\ref{fld:page-normal}）と、分離でないこと（最小多項式が重根を持つ。\ref{fld:page-separable}）である。」
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Fröhlich–Shepherdson attribution and statement
- **Category:** Unsupported fact
- **Location:** supplement / 計算の観点
- **Detail:** The supplement states that 'among computable fields there are some for which no algorithm to decide irreducibility of polynomials exists (Fröhlich and Shepherdson, 1956)'. Fröhlich–Shepherdson (1956) is about the existence of explicit (computable) fields with undecidable problems, but the precise claim as stated (no irreducibility algorithm for some computable field) is stronger than what is standardly attributed and is stated without proof or reference. The date and attribution are also commonly given as 1956 for the Proc. LMS paper, but the exact claim needs qualification (e.g. 'there exists a computable field over which the irreducibility problem is undecidable').
- **Proposed fix:** Soften and qualify: 「計算可能な体の中には、多項式の既約性判定が決定不能であるものが存在する（フレーリッヒとシェファードソン、1956 年）。」 and, if a precise statement is desired, add 'over such a field there is no algorithm deciding irreducibility of a given polynomial' as the definition of undecidability rather than asserting a stronger negative result.
- **Reported:** 2026-10-28 (8ccef3d)
