# Verification tracker: `02-algebra/02-group-theory/07-representations/02-characters.html`

<!-- source: 02-algebra/02-group-theory/07-representations/02-characters.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main text (definitions, propositions, orthogonality theorem, basis theorem, examples, problems) is logically sound: the proofs correctly use the invariant-dimension lemma, Schur's lemma, and the group-algebra structure theorem, and the cited labels match their uses. The genuine problems are confined to the supplement: the positive-characteristic remark's parenthetical example ('p 個の直和は指標 0') is not a valid illustration and the characteristic-0 claim needs the algebraically-closed/semisimple hypothesis, and the 'high viewpoint' paragraph overstates what Theorem 1 establishes about the representation ring being isomorphic to the class-function ring.

## Issues

### ISSUE-0001 [Open] Positive-characteristic claim about characters determining representations is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement, paragraph 1 (一般の体では)
- **Detail:** The supplement says: '標数 0 なら指標は表現を決めるが、正標数では χ_V = χ_W でも V ≇ W となりうる（p 個の直和は指標 0）'. The parenthetical justification is wrong as stated: 'p 個の直和は指標 0' is not a valid example of two non-isomorphic representations with equal characters. In characteristic p, the regular representation of a group of order divisible by p has character 0 at every element (since the permutation matrices have zero diagonal for g≠1 and the identity contributes |G|≡0), so the regular representation has character 0, equal to the character of the zero representation, and these are non-isomorphic. But 'p 個の直和' (a direct sum of p copies of something) does not by itself give character 0. The correct statement is that in characteristic p dividing |G|, the regular representation has character identically 0, equal to the trivial (zero) representation's character, while being non-isomorphic to it. Also '標数 0 なら指標は表現を決める' requires the field to be algebraically closed (or at least a splitting field) and semisimplicity; over a non-algebraically-closed field of characteristic 0 characters need not determine representations.
- **Proposed fix:** Replace with: '標数 $0$ の代数閉体上では（完全可約性より）指標は表現を同型を除いて決める。標数 $p>0$ で $p\mid\lvert G\rvert$ のときは、正則表現の指標は恒等的に $0$（$g\neq1$ では対角成分 $0$、$g=1$ では $\lvert G\rvert\equiv0$）で、零表現の指標と一致するが両者は同型でない。'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Grothendieck group / representation ring statement is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement, paragraph 3 (高い視点)
- **Detail:** The supplement claims the map [V]↦χ_V gives a ring homomorphism from the representation ring (Grothendieck group) to the class-function ring, and that '定理 1 は、これが C を係数にすると同型であることを述べている'. Theorem 1 (rep:characters-basis) only states that irreducible characters form an orthonormal basis of Cl(G); it does not by itself assert that the representation ring tensored with C is isomorphic to Cl(G). The isomorphism of the complexified representation ring with Cl(G) requires additionally that the classes [V_i] are a Z-basis of the representation ring (i.e., the Grothendieck group is free on the irreducible classes), which is not established on this page. So attributing the ring isomorphism to '定理 1' overstates what the theorem says.
- **Proposed fix:** Replace with: '指標は表現環（グロタンディーク群）から類関数環への環準同型 $[V]\mapsto\chi_{V}$ を与える（積はテンソル積）。定理 1 により、この写像を $\mathbb{C}$ 係数に拡張すると類関数の空間 $\operatorname{Cl}(G)$ への全射線形写像になり、既約指標が基底をなすことから単射でもある（表現環の複素化が $\operatorname{Cl}(G)$ に同型）。'
- **Reported:** 2026-10-28 (8ccef3d)
