# Verification tracker: `05-geometry-topology/03-algebraic-geometry/02-schemes/07-divisors.html`

<!-- source: 05-geometry-topology/03-algebraic-geometry/02-schemes/07-divisors.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Nagata criterion remark: Cl(Spec A) ≅ Cl(Spec A_x) = 0 is not what excision gives
- **Category:** Supplement/remark error
- **Location:** remark ナガタの判定法は除去完全列
- **Detail:** The remark claims that since Z=V(x) is a prime divisor with [Z]=[div x]=0 and U=D(x)=Spec A_x, the excision sequence gives Cl(Spec A) ≅ Cl(Spec A_x) = 0. But excision (ag:cl-excision.2) only gives exactness of Z → Cl X → Cl U → 0, i.e. Cl U ≅ Cl X / ⟨[Z]⟩. Since [Z]=0 this yields Cl X ≅ Cl U, which is correct, but the remark's phrasing 'Cl(Spec A) ≅ Cl(Spec A_x) = 0' silently assumes Cl(Spec A_x)=0 (that A_x is a UFD), which is exactly the hypothesis of Nagata's criterion, not a consequence of excision. As written the sentence reads as if excision alone produces the vanishing. Also the parenthetical '(ナガタの判定法自体は正規性を仮定せずに成り立つ)' is fine, but the main chain conflates the hypothesis with the conclusion.
- **Proposed fix:** Rewrite: 'Z=V(x) is a prime divisor with [Z]=[div x]=0, and U=D(x)=Spec A_x. By \ref{ag:cl-excision} the sequence Z → Cl(Spec A) → Cl(Spec A_x) → 0 is exact; since [Z]=0 the map Cl(Spec A) → Cl(Spec A_x) is an isomorphism. Hence if A_x is a UFD, i.e. Cl(Spec A_x)=0, then Cl(Spec A)=0, and by \ref{ag:cl-ufd} A is a UFD. (Nagata's criterion itself holds without the normality assumption.)'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Hypcheck: 'the definition of prime divisor only uses that its local ring is a DVR' is imprecise
- **Category:** Supplement/remark error
- **Location:** hypcheck, 正規性 bullet
- **Detail:** The hypcheck says: 'この頁の素因子の定義は「素因子の局所環が DVR」(余次元 1 で正則) しか使わないので、主因子と Cl の定義はその仮定だけで成り立つ.' This is misleading: the definition of prime divisor (definition ag:weil-divisor) requires O_{X,η_Y} to be a DVR to define v_Y, and the finiteness lemma ag:divisor-finite (needed to define div(f) as a finite sum) uses that X is Noetherian and integral, and the proof of ag:divisor-finite Step 2 uses that prime divisors have dimension exactly 1 (codimension 1), not merely that the local ring is a DVR. Moreover the claim that 'codimension 1 and regular' suffices is not the same as 'local ring is a DVR' in general (a 1-dimensional regular local ring is a DVR, but the parenthetical equates the two without the Noetherian hypothesis). The statement overstates what is needed.
- **Proposed fix:** Replace with: 'The definition of prime divisor only requires that O_{X,η_Y} be a DVR (equivalently, for a Noetherian local ring, that it be 1-dimensional and regular); together with Noetherianity and integrality this suffices to define principal divisors and Cl. Normality is not needed for these definitions, only for the identification with the UFD condition (\ref{ag:cl-ufd}) and for \ref{ag:cartier-weil}.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Supplement: 'Cartier divisors and Pic are defined for non-normal integral schemes and ag:cacl-pic holds without Noetherian or normal' — needs care about the constant sheaf K
- **Category:** Supplement/remark error
- **Location:** supplement, 前提を弱めると
- **Detail:** The supplement asserts that for any integral scheme (no Noetherian, no normal) Cartier divisors and Pic are defined and ag:cacl-pic holds 'since the proof does not use them'. This is essentially correct for integral schemes, but the statement 'ヴェイユ因子の側は「余次元 1 での正則性」があれば定義できる' is imprecise: to define Weil divisors one needs that the local rings at generic points of codimension-1 irreducible closed subsets are DVRs (so that v_Y is defined), and one also needs the finiteness of div(f) (ag:divisor-finite), which uses Noetherianity. Without Noetherianity div(f) may be an infinite sum, so Weil divisors and Cl are not automatically defined. The sentence as written suggests 'regularity in codimension 1' alone suffices, omitting the finiteness/Noetherian requirement.
- **Proposed fix:** Replace with: 'For a non-normal integral scheme, Cartier divisors and Pic are still defined, and \ref{ag:cacl-pic} holds for any integral scheme (neither Noetherian nor normal is used). On the Weil side, one needs that the local rings at generic points of codimension-1 irreducible closed subsets are DVRs (regularity in codimension 1) in order to define v_Y, and Noetherianity (or a suitable finiteness condition) in order that div(f) be a finite sum.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Remark: 'the converse fails' style claim about non-singular ⟺ UFD is stated too strongly
- **Category:** Supplement/remark error
- **Location:** remark ヴェイユ、カルティエ、アウスランダー＝ブクスバウム、グロタンディーク, item 2
- **Detail:** Item 2 says '非特異なら一致する' (on a non-singular scheme Weil = Cartier) reducing to 'regular local rings are UFDs'. This is correct. However the surrounding remark (item 1) says the ruling Y of the quadric cone 'cannot be defined by one equation near the vertex (Step 4)' and hence is not Cartier, while '2Y=div(y) is a Cartier divisor'. The claim that 2Y is Cartier is true, but the remark does not note that the vertex is the only non-regular point and that away from it Y is Cartier; more importantly, the phrase 'Step 4 の議論' refers to a proof that Y is not principal (not that it is not Cartier). The non-Cartier statement is proved in problem ag:prob-dv-cone-not-cartier, not in Step 4. This is a misdirected pointer rather than a false statement, but it is imprecise.
- **Proposed fix:** Change '（Step 4 の議論）' to '（\ref{ag:prob-dv-cone-not-cartier}）' and add: 'Y is Cartier away from the vertex; only at the vertex does it fail to be locally principal.'
- **Reported:** 2026-10-28 (10fede1)
