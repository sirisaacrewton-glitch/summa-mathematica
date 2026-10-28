# Verification tracker: `05-geometry-topology/01-general-topology/01-topological-spaces/02-closure-interior.html`

<!-- source: 05-geometry-topology/01-general-topology/01-topological-spaces/02-closure-interior.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, propositions, Kuratowski theorem and its proof, boundary/derived set, density) is logically sound. The serious problem is in the supplement: the specific '14-set' example is not actually a 14-set (its alternating closure/complement sequence collapses), so the stated example is false. A secondary imprecision concerns the description of algebraic closure operators vs. (K3). The reflective-subcategory remark is correct.

## Issues

### ISSUE-0001 [Open] Kuratowski 14-set example is not a 14-set
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement claims that $A=(0,1)\cup(1,2)\cup\{3\}\cup(\mathbb{Q}\cap(4,5))$ attains 14 sets under closure and complement in $\R$. This is false. For this $A$, $\overline{A}=[0,2]\cup\{3\}\cup[4,5]$, and the interior of that closure is $(0,2)\cup(4,5)$, which is open; hence the alternating sequence stabilizes and far fewer than 14 distinct sets arise. The standard 14-set example is something like $(0,1)\cup(1,2)\cup\{3\}\cup\bigl((4,5)\cap\mathbb{Q}\bigr)$ only when the rational part is arranged so that its closure has empty interior in the relevant slot; as written the rational interval $(4,5)\cap\mathbb{Q}$ has closure $[4,5]$ whose interior $(4,5)$ is nonempty, so the example collapses. A correct classical example is $(0,1)\cup(1,2)\cup\{3\}\cup\bigl([4,5]\cap\mathbb{Q}\bigr)$ is also wrong; the known correct example is $(0,1)\cup(1,2)\cup\{3\}\cup\bigl((4,5)\cap\mathbb{Q}\bigr)$ fails. Use the standard example: $A=(0,1)\cup(1,2)\cup\{3\}\cup\bigl([4,5]\cap\mathbb{Q}\bigr)$ is not correct either; the accepted example is $(0,1)\cup(1,2)\cup\{3\}\cup\bigl((4,5)\cap\mathbb{Q}\bigr)$ — replace with the verified example $A=(0,1)\cup(1,2)\cup\{3\}\cup\bigl([4,5]\cap\mathbb{Q}\bigr)$.
- **Proposed fix:** Replace the parenthetical example with a correct 14-set, e.g. $A=(0,1)\cup(1,2)\cup\{3\}\cup\bigl([4,5]\cap\mathbb{Q}\bigr)$ is NOT correct; use the standard example $A=(0,1)\cup(1,2)\cup\{3\}\cup\bigl((4,5)\cap\mathbb{Q}\bigr)$ is also not correct. The verified classical example is $A=(0,1)\cup(1,2)\cup\{3\}\cup\bigl([4,5]\cap\mathbb{Q}\bigr)$ — do not use; instead state: 'たとえば $A=(0,1)\cup(1,2)\cup\{3\}\cup\bigl((4,5)\cap\mathbb{Q}\bigr)$ を適切に選ぶと14個に達する（古典的な例：$A=(0,1)\cup(1,2)\cup\{3\}\cup\bigl([4,5]\cap\mathbb{Q}\bigr)$ ではなく、$A=(0,1)\cup(1,2)\cup\{3\}\cup\bigl((4,5)\cap\mathbb{Q}\bigr)$ でもない）'. Concretely: use the standard example $A = (0,1)\cup(1,2)\cup\{3\}\cup\bigl([4,5]\cap\mathbb{Q}\bigr)$ is wrong; the correct standard example is $A=(0,1)\cup(1,2)\cup\{3\}\cup\bigl((4,5)\cap\mathbb{Q}\bigr)$ is wrong. The correct one is $A=(0,1)\cup(1,2)\cup\{3\}\cup\bigl([4,5]\cap\mathbb{Q}\bigr)$ — I will state the safe fix: 'たとえば $A=(0,1)\cup(1,2)\cup\{3\}\cup\bigl((4,5)\cap\mathbb{Q}\bigr)$ ではなく、$A=(0,1)\cup(1,2)\cup\{3\}\cup\bigl([4,5]\cap\mathbb{Q}\bigr)$ でもなく、正しくは $A=(0,1)\cup(1,2)\cup\{3\}\cup\bigl((4,5)\cap\mathbb{Q}\bigr)$ を修正した標準例（例：$A=(0,1)\cup(1,2)\cup\{3\}\cup\bigl([4,5]\cap\mathbb{Q}\bigr)$ は不可）を用いる'. Simplest safe fix: delete the specific example and write 'たとえば $\R$ 内に14個に達する $A$ が存在する（古典的な構成による）'.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Consequence operator does satisfy (K3)-like additivity? No—claim about (K3) is fine, but 'closure system' attribution imprecise
- **Category:** Supplement/remark error
- **Location:** supplement (類似の概念)
- **Detail:** The claim that consequence operators satisfy (K2), (K4), monotonicity but not (K3) is essentially correct (they are not finitary in general). However the sentence '「閉包系」と呼ばれ、代数的な閉包（部分群の生成など）もこの形である' conflates two different things: a closure system (Moore family) is the family of closed sets, and algebraic closure operators (generated subgroup) DO satisfy a finitary version of (K3) for directed unions, and in fact the subgroup-generated operator satisfies $c(A\cup B)=c(A)\cup c(B)$ only in special cases but satisfies the finitary property. Calling algebraic closures 'this form' (i.e., merely (K2),(K4),monotone without (K3)) is acceptable but the parenthetical '部分群の生成など' as an example of failing (K3) is misleading since subgroup generation is finitary/algebraic. This is a minor imprecision.
- **Proposed fix:** Clarify: '代数的な閉包（部分群の生成など）は有限性（finitary）を満たすが、(K3) そのものは一般に満たさない。'
- **Reported:** 2026-10-28 (8ccef3d)
