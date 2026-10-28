# Verification tracker: `02-algebra/06-homological-algebra/02-derived-functors/05-extensions.html`

<!-- source: 02-algebra/06-homological-algebra/02-derived-functors/05-extensions.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definition, lemma, theorem with its six-step proof, corollary, Baer sum, and the Z/p example) is logically sound: the pushout construction, the well-definedness and bijectivity of Θ, the splitting criterion, and the Baer-sum additivity are all correctly argued, and citations match their targets. The only genuine problem is in the supplement: the discussion of group extensions by H^2 mischaracterizes why the degree shifts to 2, implying the central object need not be a module, whereas the H^2 classification requires A to be an abelian Π-module. I flag that as a supplement error with a concrete corrected wording.

## Issues

### ISSUE-0001 [Open] Group extensions classified by H^2 require abelian A with given action; the 'because central object is a group' explanation is wrong
- **Category:** Supplement/remark error
- **Location:** supplement (似た定理)
- **Detail:** The supplement states that equivalence classes of group extensions of Π by a Π-module A with prescribed conjugation action are classified by H^2(Π,A). This is correct only when A is abelian (a Π-module). The subsequent explanation claims the reason group extensions are classified by H^2 = Ext^2 while module extensions are classified by Ext^1 is 'because in a group extension the central object is a group rather than a module'. This is misleading: the H^2 classification itself requires A to be an abelian group (a module), and the shift to degree 2 comes from the nonabelian/group structure of the total group and the conjugation action, not from A being non-module. As stated the sentence suggests A need not be a module, which is false.
- **Proposed fix:** Replace with: '群 $\Pi$ の $\Pi$ 加群 $A$ による拡大のうち、共役作用が与えられたものの同値類は $H^{2}(\Pi,A)$ で分類される（ここで $A$ はアーベル群であることが本質的である）。加群の拡大が $\mathrm{Ext}^{1}$ で分類されるのに対し群の拡大が $H^{2}=\mathrm{Ext}^{2}_{\mathbb{Z}\Pi}(\mathbb{Z},A)$ で分類されるのは、群の拡大では中央の対象 $A$ に $\Pi$ が共役で作用し、その作用の整合性（結合則）が2次のコサイクル条件として現れるためである。'
- **Reported:** 2026-10-28 (8ccef3d)
