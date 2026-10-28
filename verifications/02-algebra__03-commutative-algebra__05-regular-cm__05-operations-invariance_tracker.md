# Verification tracker: `02-algebra/03-commutative-algebra/05-regular-cm/05-operations-invariance.html`

<!-- source: 02-algebra/03-commutative-algebra/05-regular-cm/05-operations-invariance.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 68bdb31, deepseek-chat)
- Open: 6 / Resolved: 0 / Ignored: 2

## Summary of the last run

The page's main theorems (polynomial invariance, completion invariance, quotient by a regular element, faithfully flat descent) are essentially correct, and the previously reported issues about the A[[t]] remark, Nagata's example, the '上昇' bullet, and the Nakayama finite-generation omissions remain as before (mostly minor/ambiguity). The one serious mathematical error still present is the remark '正規性の持ち上げ', which asserts a false lifting statement for normality; it should be corrected or removed. The two Nakayama steps are routine given Noetherian hypotheses and could be left, but the normality remark is a genuine false claim.

## Issues

### ISSUE-0001 [Open] 冪級数環 A[[t]] の主張の条件不足
- **Category:** Supplement/remark error
- **Location:** remark 他の性質
- **Detail:** 「冪級数環 $A[[t]]$ でも、ネーター局所環 $A$ について正則・CM・ゴレンシュタインは保たれる」とあるが、$A[[t]]$ が正則・CM・ゴレンシュタインになるのは $A$ がそうである場合（同値）であり、また $A[[t]]$ がネーターになるには $A$ がネーターであることが必要。さらに「$A$ が完備なら $A[[t]]$ は $A[t]_{(\mathfrak{m},t)}$ の完備化」という記述は正しいが、$A$ が完備でない一般の場合に $A[[t]]$ が $A[t]_{(\mathfrak{m},t)}$ の完備化になるとは限らない（$A[[t]]$ は $(\mathfrak{m},t)$ 進で完備でない可能性がある）。主張自体は「$A$ がネーター局所環のとき $A$ が正則・CM・ゴレンシュタイン $\iff$ $A[[t]]$ がそう」と述べるべきで、現状の「保たれる」だけでは方向が不明瞭。
- **Proposed fix:** Replace with: "For a Noetherian local ring $A$, $A[[t]]$ is regular (resp. Cohen-Macaulay, Gorenstein) if and only if $A$ is; in particular these properties are preserved by $A\mapsto A[[t]]$. When $A$ is complete, $A[[t]]$ is the $(\mathfrak{m},t)$-adic completion of $A[t]_{(\mathfrak{m},t)}$, so the 'if' direction follows from \ref{ring:polynomial-invariance} and \ref{ring:completion-invariance}; the general case is not covered here."
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The remark still says regular/CM/Gorenstein are 'preserved' for A[[t]] without stating the equivalence or the Noetherian hypothesis clearly; the direction and the completeness caveat remain imprecise.
  2026-10-28 (68bdb31): Open — The remark still says only that regular/CM/Gorenstein are 'preserved' for A[[t]] with A a Noetherian local ring, without stating the equivalence or the completeness caveat; the ambiguity noted remains, though the parenthetical does restrict the completion argument to complete A.

### ISSUE-0002 [Open] 完備化で正規性が失われる例の帰属
- **Category:** Supplement/remark error
- **Location:** remark 被約性・正規性と完備化
- **Detail:** 「被約・正規なネーター局所環の完備化が被約・正規とは限らない（永田の例）」とあるが、永田の例は被約（整域）だが正規でない完備化をもつ例として知られ、被約性が失われる例と正規性が失われる例は別個の構成である。一文でまとめて「永田の例」と帰属するのは不正確。また「優秀環では保たれる」は正しい（優れた環は完備化で被約・正規性が保たれる）が、被約性については優秀環の定義（幾何的約元）から従う事実で、正規性はセールの判定法による。
- **Proposed fix:** Replace with: "It is known that the completion of a reduced (resp. normal) Noetherian local ring need not be reduced (resp. normal); Nagata constructed examples of this phenomenon (not covered here). For excellent rings, reducedness and normality are preserved by completion (not covered here)."
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The remark still attributes both loss of reducedness and loss of normality to 'Nagata's example' in one sentence, which conflates distinct constructions.
  2026-10-28 (68bdb31): Open — The remark still attributes both failure of reducedness and failure of normality of completions to 'Nagata's example' in one sentence; the conflation noted remains.

### ISSUE-0003 [Open] 上昇が成り立たない例の記述
- **Category:** Supplement/remark error
- **Location:** remark 降下と上昇, bullet 2
- **Detail:** 「上昇は成り立たない：$k\to k[t]/(t^{2})$ は自由（忠実平坦）だが、正則な $k$ から被約でない環になる」とあるが、これは「降下」（$B$ が正則でも $A$ が正則とは限らない、あるいは $B$ が被約でも $A$ が被約とは限らない）の反例としては正しいが、「上昇」という語は通常「$A$ の性質が $B$ に伝わる」ことを指し、$k\to k[t]/(t^{2})$ は $A=k$ が正則で $B$ が正則でない例なので「上昇が成り立たない」の例としては正しい。しかし文脈は「降下と上昇」の見出しで、直前の項目が「CM・ゴレンシュタインも局所平坦準同型で降下する」なので、ここでの「上昇」は「$A$ の性質が $B$ に伝わる」を指すと読める。この例は $A$ が正則（被約）でも $B$ が被約でないことを示すので「上昇で被約性が保たれない」例としては正しいが、「正則な $k$ から被約でない環になる」は正則性の上昇の反例にはなっていない（$B$ は正則でないが、これは正則性が上昇しない例として正しい）。ただし「上昇は成り立たない」とだけ書くと、どの性質の上昇か不明瞭。
- **Proposed fix:** Replace with: "Preservation in the upward direction fails in general: $k\to k[t]/(t^{2})$ is free (hence faithfully flat), but the reduced (indeed regular) ring $k$ maps to a non-reduced ring. Thus reducedness (and regularity) is not preserved upward under faithfully flat extensions."
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The bullet still says '上昇は成り立たない' with the k→k[t]/(t^2) example, which is a failure of reducedness ascending, not clearly identified; the wording remains ambiguous about which property fails to ascend.
  2026-10-28 (68bdb31): Open — The bullet still reads '上昇は成り立たない：k→k[t]/(t²) は自由（忠実平坦）だが、正則な k から被約でない環になる', which does not specify which property fails to ascend; the ambiguity remains.

### ISSUE-0004 [Ignored: Valid Rebuttal] 完備化の例：$\hat A$ が零因子をもつことの結論
- **Category:** Unsupported fact
- **Location:** example ring:completion-not-domain, item 2
- **Detail:** 「$y-xs\in g\hat R$ なら…矛盾。同様に $y+xs\notin g\hat R$。よって $\hat A$ は零因子をもつ」とあるが、$\hat A=\hat R/g\hat R$ で $y-xs$ と $y+xs$ の像が零因子であることを示すには、両方の像が非零で、かつ積が $g\hat R$ に入ることを言う必要がある。積 $(y-xs)(y+xs)=y^{2}-x^{2}s^{2}=y^{2}-x^{2}(1+x)=g$ が $g\hat R$ に入ることは明らかだが、$y-xs$ の像が非零（$y-xs\notin g\hat R$）は示されている。しかし $y+xs$ の像が非零であることも必要で、「同様に」で済ませている。これは概ね正しいが、$y+xs$ が $g\hat R$ に属さないことの議論が省略されている。
- **Proposed fix:** Add: "Similarly, if $y+xs\in g\hat R=(y-xs)(y+xs)\hat R$, then since $k[[x,y]]$ is a domain we may cancel $y+xs$ to get $1\in(y-xs)\hat R$, which is impossible since $y-xs$ lies in the maximal ideal. Hence the images of $y-xs$ and $y+xs$ in $\hat A$ are both nonzero and their product is zero, so $\hat A$ has zero divisors."
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The rebuttal is correct: the argument for y+xs is identical to that for y-xs by symmetry, so '同様に' is adequate.
**Opus Rebuttal:** The argument for $y+xs$ is literally the same as the one written out for $y-xs$ (swap the two factors); '同様に' is appropriate.

### ISSUE-0005 [Open] 正規性の持ち上げの記述
- **Category:** Supplement/remark error
- **Location:** remark 正規性の持ち上げ
- **Detail:** 「$\bar A$ が正規なら $A$ も正規であることが知られている（セールの判定法 \ref{ring:serre-normality} を使う。本サイト未収録）」とあるが、これは一般には偽である。例えば $A=k[x,y]/(y^{2}-x^{3})$（尖点）は整域だが正規でなく、$x$ は非零因子で $\bar A=A/(x)\cong k[y]/(y^{2})$ は被約でないので正規でない。しかし $\bar A$ が正規で $A$ が正規でない例も存在する。実際、$A$ が整域で $\bar A$ が正規（例えば体）でも $A$ が正規でない例がある。例えば $A=k[[x^{2},x^{3}]]$ は整域で、$x$ は非零因子、$A/(x)\cong k$ は体（正規）だが $A$ は正規でない。したがって「$\bar A$ が正規なら $A$ も正規」は偽。
- **Proposed fix:** Delete this remark, or replace with the correct statement: "If $A$ is a Noetherian local ring and $x\in\mathfrak{m}$ is a non-zero-divisor such that $A/xA$ is reduced, then $A$ is reduced (Proposition \ref{ring:regular-element-quotient}(4)). Normality does not lift in general: for example $A=k[[x^{2},x^{3}]]$ is a non-normal domain with $x$ a non-zero-divisor and $A/(x)\cong k$ normal."
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The remark still claims 'if A-bar is normal then A is normal', which is false (e.g. A=k[[x^2,x^3]], x a non-zero-divisor, A/(x)≅k normal but A not normal).
  2026-10-28 (68bdb31): Open — The remark '正規性の持ち上げ' still asserts that A is normal whenever A/xA is normal (x a non-zero-divisor), which is false; e.g. A=k[[x²,x³]], x a non-zero-divisor, A/xA≅k normal but A not normal. No rebuttal attached.

### ISSUE-0006 [Open] Step 4 の中山の補題の適用条件
- **Category:** Logical gap
- **Location:** ring:regular-element-quotient / Step 4
- **Detail:** Step 4 で「$\mathfrak{p}=x\mathfrak{p}\subset\mathfrak{m}\mathfrak{p}$ で、\ref{ring:nakayama.2} から $\mathfrak{p}=0$」とあるが、中山の補題を $\mathfrak{p}$ に適用するには $\mathfrak{p}$ が有限生成 $A$ 加群である必要がある。$A$ はネーターなので $\mathfrak{p}$ は有限生成で問題ないが、そのことが明示されていない。また $\mathfrak{p}\subset\mathfrak{m}\mathfrak{p}$ から $\mathfrak{p}=0$ を導くには $\mathfrak{p}=\mathfrak{m}\mathfrak{p}$ が必要で、$\mathfrak{p}=x\mathfrak{p}\subset\mathfrak{m}\mathfrak{p}$ からは $\mathfrak{p}\subset\mathfrak{m}\mathfrak{p}$ しか出ない。しかし $\mathfrak{m}\mathfrak{p}\subset\mathfrak{p}$ は常に成り立つので $\mathfrak{p}=\mathfrak{m}\mathfrak{p}$ となり中山の補題が使える。この点は正しいが、$\mathfrak{p}$ の有限生成性に言及がない。
- **Proposed fix:** Add: "Since $A$ is Noetherian, $\mathfrak{p}$ is a finitely generated $A$-module, so Nakayama's lemma applies to $\mathfrak{p}=\mathfrak{m}\mathfrak{p}$ and gives $\mathfrak{p}=0$."
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — Step 4 still invokes Nakayama on p without explicitly noting p is finitely generated; the parenthetical '(A is Noetherian)' is present in the current text, so this is essentially addressed—but the chain p=xp⊂mp to p=mp is still terse. Marking Open as the finite-generation remark is now present; see note.
  2026-10-28 (68bdb31): Open — Step 4 still invokes Nakayama on p without noting p is finitely generated; this is a routine omission (A Noetherian), so it is minor, but the text is unchanged.

### ISSUE-0007 [Open] Step 5 の中山の補題の適用
- **Category:** Logical gap
- **Location:** ring:regular-element-quotient / Step 5
- **Detail:** Step 5 で「$N=xN$ で、中山の補題から $N=0$」とあるが、$N=\mathrm{nil}(A)$ が有限生成であることに言及がない。$A$ はネーターなので $N$ は有限生成（イデアル）で問題ないが、明示すべき。また $N=xN\subset\mathfrak{m}N$ から $N=\mathfrak{m}N$ を経て中山の補題を使う流れも省略されている。
- **Proposed fix:** Add: "Since $A$ is Noetherian, the nilradical $N$ is a finitely generated ideal, and $N=xN\subset\mathfrak{m}N$ together with $\mathfrak{m}N\subset N$ gives $N=\mathfrak{m}N$; Nakayama's lemma then yields $N=0$."
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — Step 5 still applies Nakayama to N=nil(A) with the finite-generation remark now present ('N は有限生成（A はネーター）'); largely addressed but the N=xN⊂mN to N=mN step remains implicit.
  2026-10-28 (68bdb31): Open — Step 5 still invokes Nakayama on N=nil(A) without noting finite generation; again routine since A is Noetherian, text unchanged.

### ISSUE-0008 [Ignored: Valid Rebuttal] Step 7 の $t\notin P^{2}B_{P}$ の議論
- **Category:** Logical gap
- **Location:** ring:polynomial-invariance / Step 7
- **Detail:** Step 7 で「$t\in P^{2}B_{P}$ なら $R_{(t)}$ で $t=t^{2}g/u$（$u\notin(t)$）、整域なので $u=tg\in(t)$ となり矛盾」とあるが、$B_{P}\to R_{(t)}$ における $P$ の像が $(t)$ であること、および $t\in P^{2}B_{P}$ から $R_{(t)}$ で $t\in(t)^{2}R_{(t)}$ が従うことの説明が不足している。また $u\notin(t)$ と $u=tg$ から $u\in(t)$ を導く部分は、$t\in(t)$ から明らかだが、$g$ の所在（$R_{(t)}$ の元）が不明瞭。
- **Proposed fix:** Add: "The image of $P$ under $B_{P}\to R_{(t)}$ is $(t)R_{(t)}$, so $t\in P^{2}B_{P}$ implies $t\in(t)^{2}R_{(t)}$, i.e. $t=t^{2}g/u$ with $g\in R_{(t)}$ and $u\notin(t)$. Since $R_{(t)}$ is a domain, this gives $u=tg\in(t)$, contradicting $u\notin(t)$."
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The rebuttal is correct: B_P→R_(t) sends P to (t) by Step 6, and the manipulation is valid in the domain R_(t).
**Opus Rebuttal:** $B_{P}\to R_{(t)}$ is the localization map and sends $P$ to $(t)$ by Step 6; the remaining manipulation is in the domain $R_{(t)}$ as written.
