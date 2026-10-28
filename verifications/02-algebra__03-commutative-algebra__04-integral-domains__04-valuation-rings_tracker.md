# Verification tracker: `02-algebra/03-commutative-algebra/04-integral-domains/04-valuation-rings.html`

<!-- source: 02-algebra/03-commutative-algebra/04-integral-domains/04-valuation-rings.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main definitions, propositions and the DVR characterization proof are logically sound; the cited labels match their uses. The genuine problems are confined to side remarks: the supplement's statement that the normalization equals the intersection of valuation rings needs the precise hypotheses (valuation rings of the fraction field containing $A$, equality with the integral closure in $K$), and the notation's claim that AC is used only for Nakayama is inaccurate given the Zorn-based existence theorem in the supplement. Both are precision issues of medium confidence rather than outright errors.

## Issues

### ISSUE-0001 [Open] Normalization equals intersection of valuation rings: needs the fraction field / integral closure context
- **Category:** Supplement/remark error
- **Location:** supplement / 付値環の存在（シュヴァレー）
- **Detail:** The supplement states that the normalization of a domain $A$ equals the intersection of all valuation rings of the fraction field containing $A$. As stated this is imprecise: the intersection must be taken over valuation rings $V$ of the fraction field $K=\mathrm{Frac}(A)$ with $A\subset V$ (not over arbitrary valuation rings containing $A$ in some larger field), and the equality is with the integral closure of $A$ in $K$. Also the existence statement 'maximal ideal of $V$ lies over $\mathfrak{p}$' should say $\mathfrak{p} = \mathfrak{m}_{V}\cap A$ (i.e. $\mathfrak{m}_{V}$ contracts to $\mathfrak{p}$), which is what '$\mathfrak{p}$ の上にある' means but is left ambiguous. The claim itself is a standard theorem (Atiyah–Macdonald Ch. 5), so the issue is precision of hypotheses, not falsity.
- **Proposed fix:** Let $K=\mathrm{Frac}(A)$. For a subring $A\subset K$ and a prime $\mathfrak{p}\subset A$ there is a valuation ring $V$ of $K$ with $A\subset V$ and $\mathfrak{m}_{V}\cap A=\mathfrak{p}$ (Zorn). Consequently the integral closure of $A$ in $K$ equals $\bigcap_{V} V$, the intersection over all valuation rings $V$ of $K$ with $A\subset V$.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] AC usage claim in notation is inaccurate
- **Category:** Supplement/remark error
- **Location:** notation / 選択公理 bullet
- **Detail:** The notation says the axiom of choice is used only for Nakayama's lemma. But the supplement's existence theorem for valuation rings explicitly invokes Zorn's lemma (a form of AC), and the proof of the DVR characterization (Step 5) uses Nakayama. So the blanket statement 'used only for Nakayama' is false as a description of the page's actual dependencies.
- **Proposed fix:** Replace with: 'The axiom of choice is used only in Nakayama's lemma (Step 5 of the DVR characterization) and in the Zorn's-lemma argument for the existence of valuation rings in the supplement.'
- **Reported:** 2026-10-28 (8ccef3d)
