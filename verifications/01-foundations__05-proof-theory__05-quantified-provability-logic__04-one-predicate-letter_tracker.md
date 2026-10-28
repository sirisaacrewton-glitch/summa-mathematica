# Verification tracker: `01-foundations/05-proof-theory/05-quantified-provability-logic/04-one-predicate-letter.html`

<!-- source: 01-foundations/05-proof-theory/05-quantified-provability-logic/04-one-predicate-letter.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] B' is not true at every point; B'(x) is true only for x≥10
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement says "$F=B'$ はどの点でも真だが" (B' is true at every point). But by \ref{pt:one-letter-B-prime}, for $x\ge10$, $B'(x)$ is true iff $D(x-10)$ is true, and $D$ is an arbitrary arithmetic formula (in the proof of the theorem, $D$ is chosen to approximate $V$ up to $i$, so it is not everywhere true). Only $B$ (not $B'$) is everywhere true, since $\theta$ is false everywhere. So the claim that $B'$ is true at every point is false.
- **Proposed fix:** Replace with: "$B$ はどの点でも真だが、$B'$ は $x\ge10$ では $D(x-10)$ の真偽に従う（$B$ と $B'$ が一致するのは $\theta$ が存在しない場合、または $x<10$ の場合である）。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] The claim that Bew[B(0)∨B(x)] depends on how far PA knows θ is false is misleading
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement says "$\mathrm{Bew}[B(0)\vee B(x)]$ が証明可能かどうかは、$\PA$ が $\theta$ の偽をどこまで知っているかに依存する". But by \ref{pt:one-letter-encoding-truth} and \ref{pt:one-letter-B-prime}, whether $\mathrm{Bew}[B(0)\vee B(x)]$ is true is determined by whether $x\ge10$ (for $B$) or by $D$ (for $B'$), not by "how far PA knows θ is false". In fact $\PA\nvdash\neg\exists y\,\theta(y)$ (problem), so PA never proves θ false at any point; the truth of these Bew statements is governed by the set-theoretic emptiness of $\bigcap C(c)$, not by partial knowledge of θ's falsity. The sentence mischaracterizes the mechanism.
- **Proposed fix:** Replace with: "$\mathrm{Bew}[B(0)\vee B(x)]$ の真偽は、$\theta$ の偽についての $\PA$ の部分的な知識ではなく、集合の族 $C(\cdot)$ の共通部分が空かどうか（すなわち $x\ge10$ か否か）で決まる。$\PA$ は $\theta$ がどこでも偽であることを証明できないが、それは共通部分の空性の判定を妨げない。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Monadic predicate logic without □ is decidable, but adding one level of □ does not by itself give Π⁰₂-completeness
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果
- **Detail:** The supplement says "様相 $\Box$ を一段加えるだけで、決定不能性の程度が $\Pi^{0}_{2}$ 完全まで跳ね上がる". This is imprecise: the $\Pi^{0}_{2}$-completeness is a property of the provability interpretation (QML over PA with the provability modality), not of adding a modal operator to pure monadic predicate logic. A bare modal system with one monadic predicate and no nesting is not automatically $\Pi^{0}_{2}$-complete; the arithmetic interpretation is essential. As stated, the sentence overstates the result.
- **Proposed fix:** Replace with: "1 項述語記号だけの純粋な述語論理では妥当性は決定可能だが、証明可能性様相 $\Box$ を（入れ子なしで）一段加え、算術の証明可能性として解釈すると、常に証明可能な文の集合は $\Pi^{0}_{2}$ 完全、常に真な文の集合は $V$ で $\Pi^{0}_{1}$ 完全になる。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Hypcheck claim that symmetry is needed so that f_l identifies equivalent tuples is imprecise
- **Category:** Supplement/remark error
- **Location:** hypcheck / 対称な関係と正の定義
- **Detail:** The hypcheck says symmetry is needed "\ref{pt:one-letter-encoding.4}, \ref[5]{pt:one-letter-encoding.5} で、集合 $\{p,q,r\}$ だけで組を判定する（$f_{l}$ が同値な組を同一視する）ために要る". But the identification of tuples by $f_{l}$ (i.e. $f_{l}(p,q)=f_{l}(p',q')$ iff $\{p,q\}=\{p',q'\}$) is a property of the chosen $f_{l}$, not a consequence of symmetry of the relations. What symmetry of $A',M',A'',M''$ is actually used for is that the truth of the relation depends only on the underlying set, so that membership in $\bigcap C(c)$ can be decided from $\{p,q\}$ (or $\{p,q,r\}$) alone. The stated reason conflates the two.
- **Proposed fix:** Replace with: "対称性は、\ref{pt:one-letter-encoding.4}, \ref[5]{pt:one-letter-encoding.5} で、関係の真偽が組の順序でなく台集合 $\{p,q\}$（$\{p,q,r\}$）だけで決まるために要る。$f_{l}$ が同値な組を同一視することと合わせて、共通部分の空性が台集合で判定できる。"
- **Reported:** 2026-10-28 (10fede1)
