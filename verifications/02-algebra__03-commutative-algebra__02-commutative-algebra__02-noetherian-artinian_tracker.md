# Verification tracker: `02-algebra/03-commutative-algebra/02-commutative-algebra/02-noetherian-artinian.html`

<!-- source: 02-algebra/03-commutative-algebra/02-commutative-algebra/02-noetherian-artinian.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs are essentially correct. The genuine problems are in the side comments: the description of the subgroup lattice of the Prüfer group in the example is false (it has many more subgroups than the single chain), the justification that $K[x]/(f)$ is Artinian omits the finite-dimensionality step, and the hypcheck for the Noetherian-module characterization wrongly claims that 2⇒1 needs no choice although Step 1 uses DC to derive it. All other statements, citations and proofs check out.

## Issues

### ISSUE-0001 [Open] Prüfer group description of subgroups is wrong
- **Category:** Supplement/remark error
- **Location:** example (item 3)
- **Detail:** The claim that the subgroups of $\Z[1/p]/\Z$ are 'only the chain $p^{-n}\Z/\Z$' is false: for each $n$ the subgroup $p^{-n}\Z/\Z$ is finite cyclic of order $p^{n}$, and it has many proper subgroups (e.g. the unique subgroup of order $p^{m}$ for each $m\le n$). The correct statement is that the subgroups form the chain $0\subset p^{-1}\Z/\Z\subset p^{-2}\Z/\Z\subset\cdots$ (each $p^{-n}\Z/\Z$ being cyclic, so its subgroups are among the $p^{-m}\Z/\Z$ with $m\le n$). The conclusion (Artinian but not Noetherian) is correct, but the parenthetical justification is false.
- **Proposed fix:** Replace the parenthetical with: '（部分群は $0\subset p^{-1}\Z/\Z\subset p^{-2}\Z/\Z\subset\cdots$ という鎖をなし、各 $p^{-n}\Z/\Z$ は位数 $p^{n}$ の巡回群なので、その部分群もこの鎖に現れる。よって降鎖は止まるが、この鎖は無限に真に上昇するのでネーター加群でない。）'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Wrong reason for $K[x]/(f)$ being Artinian
- **Category:** Supplement/remark error
- **Location:** example (item 2)
- **Detail:** The text says a finite-dimensional algebra over $K$ is Artinian because 'ideals are $K$-subspaces so descending chains stop'. But a descending chain of ideals is a descending chain of subspaces, and subspaces of a finite-dimensional space satisfy the descending chain condition, so the conclusion is right; however the stated reason 'ideals are subspaces' alone does not give the DCC unless one notes finite dimension. More importantly, the parenthetical is imprecise: it should say that ideals are $K$-subspaces of a finite-dimensional space, hence any descending chain of ideals is a descending chain of subspaces, which stabilizes by finite dimension. As written ('イデアルは $K$ 部分空間なので降鎖は止まる') the inference is missing the finite-dimensionality step, which is the essential hypothesis.
- **Proposed fix:** Rewrite as: '（イデアルは有限次元 $K$ ベクトル空間の部分空間であり、部分空間の降鎖は次元が真に減少しない限り止まるので、イデアルの降鎖も止まる。）'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Hypcheck claim that 2⇒1 needs no choice is questionable
- **Category:** Supplement/remark error
- **Location:** ring:noetherian-module / hypcheck
- **Detail:** The hypcheck states that '2⇒1 (from maximal/minimal element to chain condition) and 3⇒1 do not use the axiom of choice'. The direction 2⇒1 is proved in Step 1 by contradiction using DC to build the ascending chain, so it does use DC; the statement in the hypcheck that 2⇒1 needs no choice contradicts Step 1, which explicitly invokes DC. (3⇒1 indeed needs no choice.) This is an internal inconsistency in a side comment.
- **Proposed fix:** Change the hypcheck to: '**従属選択公理**：Step 1（1⇒2 の対偶、すなわち 2⇒1）で使った。3⇒1 は選択公理を使わない。'
- **Reported:** 2026-10-28 (8ccef3d)
