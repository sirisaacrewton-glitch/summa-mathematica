# Verification tracker: `05-geometry-topology/04-differential-geometry/02-surfaces/06-gauss-bonnet-global.html`

<!-- source: 05-geometry-topology/04-differential-geometry/02-surfaces/06-gauss-bonnet-global.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 9 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] K≡0 does not imply torus; K<0 does not imply genus ≥2
- **Category:** Supplement/remark error
- **Location:** supplement (位相との関係)
- **Detail:** The supplement claims: 'とくに $K>0$ のコンパクトな曲面は球面と同相で、$K\equiv0$ ならトーラスと同相、$K<0$ なら種数 $2$ 以上である。' The first part is fine (K>0 ⇒ χ>0 ⇒ g=0). But K≡0 gives χ=0, which only forces g=1 (torus) among orientable surfaces — that part is actually OK for orientable compact surfaces. However 'K<0 everywhere ⇒ genus ≥2' is false: a flat torus has K≡0, but one can also have a torus with K≤0 and K<0 at some points (e.g. a torus of revolution has K<0 on the inner part), so 'K<0 なら種数2以上' is wrong if read as 'K takes a negative value'. Even read as 'K<0 everywhere', a torus cannot have K<0 everywhere (Gauss-Bonnet forces χ<0), so that reading is vacuous but the statement as written ('K<0 なら種数2以上') is ambiguous and, on the natural reading 'K attains a negative value', false (torus of revolution). Also 'K≡0 ならトーラスと同相' is correct only for orientable surfaces, which is stated, so fine.
- **Proposed fix:** Replace with: 'とくに $K>0$ が至る所で成り立てば球面と同相であり、$K\equiv 0$ ならばトーラスと同相である。$K<0$ となる点をもつだけでは種数は決まらない（トーラスでも内側に $K<0$ の点をもつ）。$K<0$ が至る所で成り立てば $\chi<0$、すなわち種数 $2$ 以上である。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Gauss map degree statement needs orientation/nonvanishing K care
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement says '$\iint K\,dA$ はガウス写像 $N\colon S\to S^{2}$ の写像度の $4\pi$ 倍でもある'. This is correct for a closed oriented surface in R^3 with the outward (or consistent) unit normal and the standard orientation on S^2, and it is a standard fact. However, the degree formula $\deg N = \chi/2$ requires that N be a map between oriented manifolds with the induced orientations; the statement as given is essentially correct. The only imprecision: it should specify that $S^{2}$ carries its standard orientation and that $N$ is the unit normal defining the orientation. This is minor; but combined with the reference to surf:gauss-map-area (which says K is the area expansion factor of the Gauss map), the claim is fine. Not reporting as an error beyond noting the orientation convention.
- **Proposed fix:** Add: '（$S^{2}$ には標準的な向きをとり、$N$ は $S$ の向きを定める単位法ベクトル場とする。）'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Step 4 algebra typo in the chain of equalities
- **Category:** Logical gap
- **Location:** surf:gauss-bonnet-global / Step 4
- **Detail:** Step 4 writes '$\iint K\,dA=2\pi F-(3\pi F-2\pi V)=2\pi V-\pi F=2\pi V-2\pi E+2\pi F$（$\pi F=2\pi E-2\pi F$）'. The intermediate '$2\pi V-\pi F$' is correct, and the final expression uses $3F=2E$, i.e. $\pi F = 2\pi E - 2\pi F$; the parenthetical is a correct restatement of $3F=2E$. The algebra is actually correct: $2\pi V-\pi F = 2\pi V - \pi F$ and substituting $\pi F = 2\pi E - 2\pi F$ gives $2\pi V - 2\pi E + 2\pi F$. So no error. (Checked: $3F=2E \Rightarrow \pi F = \tfrac{2}{3}\pi E$; then $2\pi V - \pi F = 2\pi V - \tfrac{2}{3}\pi E$, while $2\pi V - 2\pi E + 2\pi F = 2\pi V - 2\pi E + \tfrac{4}{3}\pi E = 2\pi V - \tfrac{2}{3}\pi E$. Equal.) No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Example: torus 3 meridians and 3 parallels gives V=9,E=27,F=18?
- **Category:** Supplement/remark error
- **Location:** example (unnamed)
- **Detail:** The example claims: torus divided by 3 meridians and 3 parallels into 9 quadrilaterals, each split by a diagonal into 2 triangles, giving V=9, E=27, F=18, χ=0. Check: 3 meridians and 3 parallels on a torus intersect in 3×3=9 vertices. Edges: each meridian is cut by 3 parallels into 3 edges, so 3 meridians give 9 edges; similarly 3 parallels give 9 edges; total 18 edges from the grid. Adding one diagonal per quadrilateral: 9 diagonals, so E=18+9=27. Faces: 9 quadrilaterals each split into 2 triangles = 18 faces. V=9, E=27, F=18 gives χ=9-27+18=0. Correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Problem solution: '等号は K≥0 のとき' for ∫|K|≥∫K
- **Category:** Supplement/remark error
- **Location:** surf:prob-gg-no-negative-sphere / solution
- **Detail:** The solution says '$\iint|K|\ge\iint K=2\pi\cdot2=4\pi$。等号は $K\ge0$ のとき。' Equality in $\int|K|\ge\int K$ holds iff $K\ge 0$ everywhere (since $|K|-K = 2\max(-K,0)\ge0$ with equality iff $K\ge0$ pointwise). This is correct. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0006 [Open] Fact 6.4(2): sum of interior angles at a vertex is 2π
- **Category:** Unsupported fact
- **Location:** surf:triangulation-facts.2
- **Detail:** Fact 6.4(2) states that at each vertex the sum of interior angles of the triangles having that vertex is $2\pi$. This is true for a triangulation of a surface (the link of a vertex is a circle, and the angles around sum to a full turn) provided the triangles meet only along edges/vertices as in the definition. It is stated as a fact without proof, which is acceptable per the page's convention. However, strictly, this requires that the triangles around a vertex form a single cyclic fan covering a neighborhood — which follows from the triangulation conditions (each edge in exactly two triangles, intersections are vertices/edges). The fact is correctly stated. No issue.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0007 [Open] Corollary 6.5 (curvature sign) item 3: χ=0 implies K takes both signs
- **Category:** Supplement/remark error
- **Location:** surf:curvature-sign-euler / statement 3
- **Detail:** Statement 3 says: '$\chi=0$ なら、$K$ は正の値と負の値の両方をとる。' This is false as stated: a flat torus has χ=0 and K≡0, taking neither positive nor negative values. The proof uses 'コンパクトな正則曲面には K>0 の点がある' (surf:prob-sf-compact-elliptic), which is itself false for a flat torus (K≡0). So both the statement and the proof are wrong. The correct statement: if χ=0 and K is not identically zero, then K takes both positive and negative values; or: if χ=0 then either K≡0 or K attains both signs.
- **Proposed fix:** Replace statement 3 with: '$\chi=0$ のとき、$K\equiv 0$ であるか、または $K$ は正の値と負の値の両方をとる。' And in the proof, replace the appeal to surf:prob-sf-compact-elliptic with: if K is not identically 0 and χ=0, then since ∫K=0, K must take both a positive and a negative value (a continuous function with ∫K=0 that is not identically 0 cannot be ≥0 everywhere unless it is ≡0).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0008 [Open] Use of surf:prob-sf-compact-elliptic to claim every compact surface has K>0 point
- **Category:** Improper link
- **Location:** surf:curvature-sign-euler / proof of 3
- **Detail:** The proof cites \ref{surf:prob-sf-compact-elliptic} for 'コンパクトな正則曲面には K>0 の点がある'. Even if that problem asserts existence of an elliptic point for some class of surfaces, it cannot hold for all compact regular surfaces (flat torus is a counterexample). Using it here is both an improper link and a false premise.
- **Proposed fix:** Remove the citation and the claim; argue instead: if χ=0 then ∫K dA=0; if K were ≥0 everywhere and positive somewhere, the integral would be positive, so either K≡0 or K takes a negative value; similarly K cannot be ≤0 everywhere unless ≡0, so in the non-flat case K takes both signs.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0009 [Open] Supplement: 'K<0 なら種数2以上' and 'K≡0 ならトーラスと同相'
- **Category:** Supplement/remark error
- **Location:** supplement (位相との関係)
- **Detail:** As noted, 'K<0 なら種数2以上' is false if it means 'K attains a negative value' (torus of revolution has K<0 on inner part and genus 1). It is only true if 'K<0 everywhere'. The supplement should make the quantifier explicit.
- **Proposed fix:** Write: '$K<0$ が至る所で成り立てば $\chi<0$、すなわち種数 $2$ 以上である。$K<0$ となる点が存在するだけでは種数は決まらない。'
- **Reported:** 2026-10-28 (10fede1)
