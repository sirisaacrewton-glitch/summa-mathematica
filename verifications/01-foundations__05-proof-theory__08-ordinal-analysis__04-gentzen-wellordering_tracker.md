# Verification tracker: `01-foundations/05-proof-theory/08-ordinal-analysis/04-gentzen-wellordering.html`

<!-- source: 01-foundations/05-proof-theory/08-ordinal-analysis/04-gentzen-wellordering.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] IΣ_n proof-theoretic ordinal is ω_{n+1} only for n≥1, and the indexing convention is off
- **Category:** Supplement/remark error
- **Location:** remark / item 2
- **Detail:** The remark states that for IΣ_n (n≥1) the proof-theoretic ordinal is ω_{n+1}. With the page's convention ω_0=1, ω_1=ω, ω_2=ω^ω, ..., the standard result is |IΣ_n| = ω_{n+1} only under a different indexing; in the usual convention |IΣ_1| = ω^ω = ω_2, |IΣ_2| = ω^{ω^ω} = ω_3, so |IΣ_n| = ω_{n+1} does hold with this page's ω_n (ω_0=1). However the claim as stated for n≥1 gives |IΣ_1|=ω_2=ω^ω which is correct, but the parenthetical '(n≥1)' combined with the page's ω_0=1 convention makes the formula ambiguous: for n=0 it would give |IΣ_0|=ω_1=ω, whereas IΣ_0 (=EFA-like) has ordinal ω^ω... Actually the precise standard fact is |IΣ_n| = ω_{n+1} where ω_0=1, ω_{k+1}=ω^{ω_k}, valid for n≥1; the statement is essentially correct but the indexing should be pinned to the page's ω_n definition to avoid the off-by-one reading.
- **Proposed fix:** With the page's convention $\omega_{0}=1$, $\omega_{n+1}=\omega^{\omega_{n}}$, the proof-theoretic ordinal of $\mathrm{I}\Sigma_{n}$ ($n\ge1$) is $\omega_{n+1}$ (so $|\mathrm{I}\Sigma_{1}|=\omega^{\omega}$, $|\mathrm{I}\Sigma_{2}|=\omega^{\omega^{\omega}}$, etc.).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Hardy hierarchy bound for PA-provable totality is stated with the wrong hierarchy/indexing
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果 (急増加関数)
- **Detail:** The supplement says: functions whose totality is provable in PA are dominated by some H_α with α<ε_0, citing Arai Thm 8.4.18, and that H_{ε_0}-growth functions (Goodstein length) are not PA-provably total. The standard result is usually phrased with the fast-growing (Wainer) hierarchy F_α, or with Hardy hierarchy H_α where the correspondence is H_{ε_0} ≈ F_{ε_0}; the claim that PA-provable-total functions are exactly those elementary-recursive in some H_α (α<ε_0) is correct, but the sentence 'H_{ε_0} 程度の増大度をもつ関数（グッドステイン列の長さなど）の全域性は PA で証明できない' conflates the Hardy and fast-growing hierarchies: the Goodstein length function has fast-growing rate F_{ε_0}, and its Hardy-rate counterpart is H_{ε_0}, so the identification 'H_{ε_0}-rate = Goodstein length' is imprecise (Goodstein length is F_{ε_0}-rate, which is H_{ε_0} only up to the standard H/F correspondence).
- **Proposed fix:** Functions whose totality is provable in $\PA$ are exactly those elementary-recursive in some $H_{\alpha}$ with $\alpha<\varepsilon_{0}$ (equivalently, dominated by some $F_{\alpha}$, $\alpha<\varepsilon_{0}$, in the fast-growing hierarchy). The Goodstein-length function has fast-growing rate $F_{\varepsilon_{0}}$ (Hardy rate $H_{\varepsilon_{0}}$), and its totality is not provable in $\PA$.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that 'unnatural' primitive recursive well-orderings of type ε_0 may fail initial-segment TI in PA is misleading
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The bullet says: even if the order type is ε_0, for an 'unnatural' encoding of a primitive recursive well-ordering, PA may fail to prove transfinite induction for its initial segments. This is imprecise: TI[≺] for a primitive recursive well-ordering ≺ of type ε_0 is a Π^1_1 statement, and whether PA proves TI[≺] depends on the presentation, but the standard fact is that PA proves TI[≺] for every primitive recursive well-ordering ≺ whose order type is < ε_0, and for order type exactly ε_0 it depends on the specific presentation (some presentations of type ε_0 are TI-provable in PA, e.g. via a path through the standard notation system, while others are not). The blanket statement 'cannot be proved for some unnatural encodings' is essentially correct in spirit but the parenthetical about '|T| definition has a problem with choice of well-ordering' is vague and could be read as claiming |T| is presentation-dependent, which it is not (|T| is sup over all primitive recursive well-orderings, so it is presentation-independent).
- **Proposed fix:** The definition $|T|=\sup\{|\prec| : \prec$ primitive recursive well-founded and $T\vdash\mathrm{TI}[\prec]\}$ is independent of the choice of presentation, since the supremum ranges over all primitive recursive well-orderings. What depends on the presentation is whether $T$ proves $\mathrm{TI}[\prec]$ for a specific $\prec$ of a given order type: for order types $<\varepsilon_{0}$ every primitive recursive presentation is TI-provable in $\PA$, while for order type $\varepsilon_{0}$ some presentations are and some are not.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Remark 1 overstates that a truth predicate is 'needed' to uniformize, and misattributes the role of Gentzen's bound theorem
- **Category:** Supplement/remark error
- **Location:** remark / item 1
- **Detail:** Remark 1 says that to combine the infinitely many proofs into one proof of 'for all n' one needs a device to handle formulas of arbitrary depth uniformly (a truth predicate), which PA lacks, and that \ref{pt:gentzen-bound} shows this uniformization is actually impossible. The claim that a truth predicate is 'needed' is too strong: uniformization would require a single formula expressing TI up to ε_0, and the obstruction is that PA does not prove TI[≺] for the standard ε_0 ordering (a Π^1_1 fact), not specifically the absence of a truth predicate. Also, \ref{pt:gentzen-bound} (Gentzen's bound theorem) shows that any primitive recursive well-ordering whose TI is PA-provable has order type < ε_0; it does show uniformization to ε_0 is impossible, but the phrasing 'this uniformization is actually impossible' should be tied to that statement rather than to the truth-predicate remark.
- **Proposed fix:** To combine the proofs for all $n$ into a single $\PA(X)$-proof of $\forall\gamma\,(\gamma\in X)$ one would need a single formula expressing transfinite induction up to $\varepsilon_{0}$; this is impossible because, by \ref{pt:gentzen-bound}, every primitive recursive well-ordering whose TI is provable in $\PA(X)$ has order type $<\varepsilon_{0}$. (A truth predicate is one possible uniformization device, but the obstruction is the bound theorem, not the absence of a truth predicate per se.)
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Solution to problem on TI[≺]+Con(PA) invokes 'PA(X) is conservative over PA' without the needed hypothesis on X
- **Category:** Unsupported fact
- **Location:** pt:prob-ti-epsilon0-con / solution
- **Detail:** The solution argues: if PA(X)⊢TI[≺] then PA(X)⊢Con(PA), and since PA(X)-provable X-free sentences are PA-provable (substituting x=x for X), PA⊢Con(PA), contradicting Gödel II. The step 'PA(X)-provable X-free sentences are PA-provable' is asserted via 'substituting x=x for X', but this substitution argument requires that the PA(X)-proof uses X only as a free set variable and that the resulting PA-proof is legitimate; this is correct for X-free conclusions, but the solution also says 'PA(X) is a conservative extension of PA' — PA(X) is conservative over PA only for X-free sentences, which is what is needed, but the phrase 'PA の保存拡大' (conservative extension of PA) is stated without the restriction 'for X-free sentences', which is false in general (PA(X) proves X-sentences not provable in PA).
- **Proposed fix:** For sentences not containing $X$, $\PA(X)$ is conservative over $\PA$: substituting $x=x$ for $X$ in a $\PA(X)$-proof of an $X$-free sentence yields a $\PA$-proof. Hence if $\PA(X)\vdash\mathrm{TI}[\prec]$ then $\PA\vdash\mathrm{Con}(\PA)$, contradicting Gödel's second incompleteness theorem.
- **Reported:** 2026-10-28 (10fede1)
