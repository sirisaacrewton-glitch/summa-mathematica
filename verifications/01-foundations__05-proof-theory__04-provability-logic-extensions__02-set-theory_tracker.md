# Verification tracker: `01-foundations/05-proof-theory/04-provability-logic-extensions/02-set-theory.html`

<!-- source: 01-foundations/05-proof-theory/04-provability-logic-extensions/02-set-theory.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Jensen–Karp does not make the frame a prewellordering
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から：モデルの「高さ」が作るフレーム
- **Detail:** The supplement claims that Jensen–Karp guarantees that 'a higher model always sees the theory of a lower model (as another model)', so that 'the theories seen are determined by height alone', and that this is exactly the prewellordering structure 'points of the same rank see the same points'. This is false. Jensen–Karp only says: if $o(M)<o(N)$ and $M\models\chi$, then $N\models$ 'there is a transitive model of $\chi$'. It gives no information about which models of height $<o(N)$ exist inside $N$, and in particular it does not imply that two models of the same height see the same set of theories. Indeed, in the (A)⇒(B) proof the worlds $S_{(i,j)}$ of the same rank $i$ are distinguished precisely by the continuum value, and a model of height $>o(M)$ need not contain any model of the same height as $M$ at all (e.g. $L_{\alpha}$ with $\alpha$ the least height of a model of ZF contains no model of ZF of that height). So the asserted 'reflection' of the prewellordering structure is not a consequence of Jensen–Karp.
- **Proposed fix:** Replace the sentence with: 'Jensen–Karp only guarantees that a higher model $N$ sees *some* model of the theory of a lower model $M$; it does not say which models of height $<o(N)$ lie inside $N$. The prewellordering structure arises because the worlds are the statements $S_{(i,j)}$ indexed by height $i$ and a further parameter $j$ (the continuum value), and a world of height $i$ sees exactly the worlds of smaller height, regardless of $j$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] GL.3 is not the logic of all finite strict linear orders as a frame condition on arbitrary (rooted) frames
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果
- **Detail:** The supplement states 'GL.3 (this page's J) is generally known to be complete with respect to finite strict linear orders.' As a completeness statement this is acceptable, but combined with the earlier parenthetical claim (in the definition of J) that the axiom is 'valid on exactly the finite strict linear orders among rooted finite transitive irreflexive frames', the supplement overstates: GL.3 is the logic of finite strict linear orders, but its axiom is also valid on some non-linear rooted frames (e.g. the two-point irreflexive frame with no relation, i.e. the one-point frame, and more generally frames whose generated subframes are linear), so 'exactly' is wrong. The claim as written in the supplement ('complete with respect to finite strict linear orders') is fine, but the surrounding text asserts an exact frame correspondence that fails.
- **Proposed fix:** In the parenthetical after the definition of J, replace 'exactly the finite strict linear orders' by 'all finite strict linear orders (and it is complete for them); it is not valid on all rooted finite transitive irreflexive frames, e.g.\ on the frame $\{r,a,b\}$ with $rRa,rRb$ only.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Jensen–Karp fact stated without the requirement that $N$ end-extends or that heights are comparable inside $N$
- **Category:** Unsupported fact
- **Location:** pt:jensen-karp
- **Detail:** The fact is stated as: if $M,N$ are transitive models, $o(M)<o(N)$, $M\models\chi$, then $N\models$ 'there is a transitive model of $\chi$'. As stated this is the standard Jensen–Karp theorem and is fine, but the subsequent sketch says '$o(M)\in N$ since $X\in N$', which requires $o(M)<o(N)$ and $o(M)$ to be an element of $N$; this holds because $N$ is a transitive model of ZF and $o(M)<o(N)$ implies $o(M)\in N$ only if $o(M)$ is an ordinal $<o(N)$, which is true since $o(M)$ is an ordinal and $N$ contains all ordinals below $o(N)$. This step is correct. However the sketch's claim 'well-foundedness is absolute for transitive models, so $X$ is ill-founded in $N$ as well' needs $X\in N$ and the tree relation $\prec\in N$; this is asserted but the absoluteness of well-foundedness is only for the *tree* being ill-founded, which is $\Sigma_1$ and hence upward absolute, not 'absolute'. The direction needed (ill-founded in V implies ill-founded in N) is the wrong direction of absoluteness: ill-foundedness is $\Sigma_1$ and goes *upward*, so from $N\subseteq V$ ill-founded in $N$ implies ill-founded in $V$, not conversely. The sketch as written has the absoluteness direction backwards.
- **Proposed fix:** Correct the sketch: ill-foundedness of a tree is $\Sigma_1$ and hence upward absolute; to transfer ill-foundedness from $\mathbf{V}$ down to $N$ one uses that $N$ is a model of ZF and that the descending sequence can be found inside $\mathbf{L}^{N}$ by a Levy–Shoenfield absoluteness argument (as Boolos does), not bare absoluteness of well-foundedness. Replace '整礎性は推移的モデルについて絶対的なので、$X$ は $N$ の中でも整礎でない' by 'ill-foundedness is $\Sigma_1$; using the Levy–Shoenfield absoluteness theorem inside $N$ (or replacing $N$ by $\mathbf{L}^{N}$ and using AC) one obtains a descending sequence in $N$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Hypcheck claim that the infinity of $\alpha$ with $L_{\alpha}\models ZF$ is not provable in ZF is imprecise
- **Category:** Supplement/remark error
- **Location:** hypcheck (after (C)⇒(A))
- **Detail:** The hypcheck says: 'This assumption cannot be proved in ZF (from the discussion on the page on ZF in L, if ZF is consistent then there are also models in which no such $\alpha$ exists, it is generally said).' This is imprecise: if there is *one* $\alpha$ with $L_{\alpha}\models ZF$, then there are unboundedly many (by taking $L_{\beta}$ for $\beta$ the height of a model inside $L_{\alpha}$, etc.), so 'infinitely many' is equivalent to 'at least one', and the non-provability in ZF is just the non-provability of Con(ZF)-type statements. The phrasing 'there are also models in which no such $\alpha$ exists' is correct only for models of ZF + Con(ZF) failing, but the parenthetical is vague and the equivalence 'infinitely many iff at least one' is not mentioned, which matters because the theorem's hypothesis is stated as 'infinitely many'.
- **Proposed fix:** Replace by: 'The hypothesis that there are infinitely many $\alpha$ with $L_{\alpha}\models ZF$ is equivalent to the existence of at least one such $\alpha$ (heights of models of ZF are unbounded below any model), and this is not provable in ZF if ZF is consistent, since it implies Con(ZF).'
- **Reported:** 2026-10-28 (10fede1)
