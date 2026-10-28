# Verification tracker: `01-foundations/03-computation/02-computability/03-ackermann.html`

<!-- source: 01-foundations/03-computation/02-computability/03-ackermann.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main proof (loop-bound, non-primitive-recursiveness, computability via stack machine) is logically sound and the cited results are used correctly. The problems concentrate in the supplement: the claim that the graph of the Ackermann function is primitive recursive is false; the ordinal attribution ($\omega^{2}$ for Ackermann) is imprecise (should be $\omega^{\omega}$); the proof-theoretic attribution to Gentzen for the PA-provably-total classification is misleading (Wainer/Kreisel); and the 'stage $\omega$' phrasing conflates the function with the hierarchy level. The remark on the Peter-Robinson form and the growth formulas $A(1,y)=y+2$, $A(2,y)=2y+3$, $A(3,y)=2^{y+3}-3$ are correct.

## Issues

### ISSUE-0001 [Open] Ackermann graph primitive recursive claim
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (アッカーマン関数のグラフ)
- **Detail:** The supplement claims the relation $A(x,y)=z$ is primitive recursive, justified by 'the computation process is bounded by $z$'. This is false: the graph of the Ackermann function is not primitive recursive. The bounding argument fails because the intermediate values in the recursion are not bounded by $z$ (the recursion goes through $A(x+1,y)$ which can exceed $z$). The graph is, however, computable (recursively enumerable / decidable), so the intended point ('graph primitive recursive does not imply function primitive recursive') is misstated.
- **Proposed fix:** Replace with: 'The relation $A(x,y)=z$ is computable (its characteristic function is computable), but it is not primitive recursive; hence even a computable graph does not imply a primitive recursive function. (The graph of $A$ is in fact primitive recursive in a suitable sense only after bounding the recursion, which is not possible here.)' More conservatively: 'The graph of $A$ is computable but not primitive recursive, so a computable graph does not imply a primitive recursive function.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Ordinal assignment for primitive recursive vs Ackermann
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から (順序数で言えば...)
- **Detail:** The supplement says primitive recursive functions correspond to 'induction at each stage below $\omega$' and the Ackermann function requires 'induction along the lexicographic order of type $\omega^{2}$'. The standard proof-theoretic classification is: primitive recursive functions are provably total in $\mathrm{PA}$ with induction restricted to $\omega$ (i.e. $\mathrm{I}\Sigma_{1}$-type / $\omega$-fold), and the Ackermann function's totality is provable in $\mathrm{PA}$ but corresponds to the ordinal $\omega^{\omega}$ (the Hardy/Grzegorczyk hierarchy level), not $\omega^{2}$. The lexicographic order on $\N^{2}$ has order type $\omega^{2}$, but the recursion used to define $A$ is not simply lexicographic recursion on $\N^{2}$; the value $A(x+1,y+1)=A(x,A(x+1,y))$ requires nested recursion whose termination ordinal is $\omega^{\omega}$. Attributing $\omega^{2}$ to the Ackermann function understates the required ordinal and is imprecise.
- **Proposed fix:** Replace with: 'In ordinal terms, primitive recursive functions correspond to recursion below $\omega^{\omega}$ handled level by level, while the Ackermann function corresponds to the single limit stage $\omega^{\omega}$ (the Hardy hierarchy level $H_{\omega^{\omega}}$). The lexicographic order on $\N^{2}$ (type $\omega^{2}$) underlies the definition, but the nested call $A(x+1,y+1)=A(x,A(x+1,y))$ pushes the termination ordinal up to $\omega^{\omega}$.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Kreisel attribution for PA-provably-total functions
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (証明論との関係)
- **Detail:** The supplement states that computable functions whose totality is provable in $\mathrm{PA}$ are bounded by fast-growing functions indexed by ordinals below $\epsilon_{0}$, attributing this to Gentzen and Kreisel. The correct attribution for the characterization of $\mathrm{PA}$-provably-total functions via the fast-growing (Wainer) hierarchy below $\epsilon_{0}$ is the Wainer/Kreisel-Wainer theorem (and the Schwichtenberg classification); Gentzen is responsible for the consistency proof via $\epsilon_{0}$-induction, not for this function classification. Also the phrase 'ε₀ より小さい順序数で添え字付けた高速増加関数' is correct in substance (Wainer hierarchy below $\epsilon_{0}$), but the attribution to Gentzen is misleading.
- **Proposed fix:** Replace attribution with: 'It is known (Wainer, building on Kreisel; see also Schwichtenberg) that the computable functions provably total in $\mathrm{PA}$ are exactly those bounded by a fast-growing function indexed by an ordinal below $\epsilon_{0}$. Gentzen's contribution is the consistency proof via $\epsilon_{0}$-induction.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Ackermann function as stage omega
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (原始再帰関数は ω より小さい段階、アッカーマン関数は段階 ω に当たる)
- **Detail:** The claim that 'primitive recursive functions are the stages below $\omega$, and the Ackermann function is stage $\omega$' is imprecise. In the fast-growing hierarchy, primitive recursive functions are those dominated by some $F_{n}$ for finite $n$, i.e. below $\omega$; the Ackermann function is dominated by $F_{\omega}$, which is correct as a rough statement. However, the Ackermann function is not itself 'the stage $\omega$' function; it is comparable to $F_{\omega}$ but not equal, and the statement conflates the function with the hierarchy level. This is a minor imprecision but stated as fact.
- **Proposed fix:** Replace with: 'Primitive recursive functions are those dominated by some finite level $F_{n}$ ($n<\omega$) of the fast-growing hierarchy, while the Ackermann function grows like $F_{\omega}$ (the first limit level).'
- **Reported:** 2026-10-28 (10fede1)
