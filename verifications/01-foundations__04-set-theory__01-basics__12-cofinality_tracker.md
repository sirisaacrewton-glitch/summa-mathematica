# Verification tracker: `01-foundations/04-set-theory/01-basics/12-cofinality.html`

<!-- source: 01-foundations/04-set-theory/01-basics/12-cofinality.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Wrong direction of the collapse in the Gitik/Kunen supplement
- **Category:** Supplement/remark error
- **Location:** supplement after set:omega1-singular-without-ac
- **Detail:** The supplement says Kunen (1980) left open whether ZF proves the existence of a cardinal of cofinality $>\omega$, and that Gitik's result settled this negatively. This is backwards. Gitik's theorem (assuming large cardinals) is that in ZF it is consistent that *all* uncountable cardinals are singular with cofinality $\omega$; that is a *positive* answer to 'can ZF prove there is a cardinal of cofinality $>\omega$?' only in the sense that it shows the opposite is consistent, i.e. ZF cannot prove the existence of such a cardinal. So the existence question is answered *negatively* (ZF does not prove it), which is what the text says, but the framing 'Kunen wrote it was open, Gitik settled it negatively' is imprecise: Gitik's result is a consistency result showing that the existence of a cardinal of cofinality $>\omega$ is not provable in ZF, not that such cardinals cannot exist. More importantly, the final sentence 'the dependence of \ref{set:successor-regular} on AC is in this sense irremovable' is correct, but the preceding claim that Kunen listed it as open and Gitik 'negatively resolved' it is a misstatement of what Gitik proved (he proved a consistency result, not a refutation).
- **Proposed fix:** Rewrite: 'Kunen (1980) noted that it was open whether ZF proves the existence of a cardinal of cofinality $>\omega$. Gitik's theorem shows (assuming the consistency of large cardinals) that it is consistent with ZF that every uncountable cardinal has cofinality $\omega$; hence ZF cannot prove the existence of a cardinal of cofinality $>\omega$. In this sense the use of AC in \ref{set:successor-regular} cannot be removed.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Gitik's hypothesis and conclusion stated too strongly
- **Category:** Unsupported fact
- **Location:** fact set:omega1-singular-without-ac
- **Detail:** The fact states Gitik proved, assuming consistency of 'appropriate large cardinals', the consistency of ZF + 'every uncountable cardinal has cofinality $\omega$'. Gitik's actual theorem (All uncountable cardinals can be singular, 1980) assumes the consistency of a proper class of strongly compact cardinals (or similar very strong large cardinal hypothesis), and concludes the consistency of ZF + DC + 'every uncountable cardinal is singular' (with all uncountable cardinals of cofinality $\omega$ in the stronger version). The phrase 'appropriate large cardinals' is vague but not false; however the statement that in the Feferman-Levy model 'the set of reals is a countable union of countable sets' is correct only for the Feferman-Levy model specifically, and the fact attributes it correctly. The main imprecision is that Gitik's result requires DC to be dropped or a specific formulation; stating it as plain ZF + 'all uncountable cardinals have cofinality $\omega$' is acceptable. No change strictly required, but the hypothesis should be made precise.
- **Proposed fix:** State: 'Gitik (1980) showed that, assuming the consistency of a proper class of strongly compact cardinals, ZF + "every uncountable cardinal has cofinality $\omega$" is consistent.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that $2^{\aleph_0}$ can be weakly inaccessible needs care
- **Category:** Supplement/remark error
- **Location:** hypcheck of set:strong-implies-weak
- **Detail:** The hypcheck says 'without GCH, e.g. $2^{\aleph_{0}}$ can be a weakly inaccessible cardinal (next fact)'. This is a known consistency result (assuming large cardinals, $2^{\aleph_0}$ can be weakly inaccessible), but it is stated as if it were a theorem of ZFC or an obvious consequence. It is only a consistency statement requiring large cardinal hypotheses, and the referenced 'next fact' (set:inaccessible-unprovable) does state it as a consistency result. The phrasing 'でありうる' (can be) is acceptable as a consistency claim, but it should be flagged as requiring consistency assumptions, not asserted flatly.
- **Proposed fix:** Change to: 'without GCH, it is consistent (assuming suitable large cardinals) that $2^{\aleph_{0}}$ is weakly inaccessible (see the next fact), so a weakly inaccessible cardinal need not be strongly inaccessible.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Overstated claim about $\mathbf{L}$ and weakly inaccessible cardinals
- **Category:** Supplement/remark error
- **Location:** supplement after set:inaccessible-unprovable
- **Detail:** The supplement says: 'In the case of weakly inaccessible cardinals, combining with the fact that in the constructible universe $\mathbf{L}$ weakly inaccessible cardinals become strongly inaccessible yields the same conclusion.' This is essentially correct: in $\mathbf{L}$, GCH holds, so weakly inaccessible = strongly inaccessible, and $V_{\kappa}\cap\mathbf{L}$ gives a model of ZFC. However, the argument as stated is slightly imprecise: one needs that a weakly inaccessible cardinal $\kappa$ in $V$ remains weakly inaccessible (hence strongly inaccessible) in $\mathbf{L}$, which is true since $\mathbf{L}$ computes cardinals correctly and GCH holds in $\mathbf{L}$. The statement is acceptable but the reasoning 'weakly inaccessible become strongly inaccessible' should note GCH in $\mathbf{L}$.
- **Proposed fix:** Clarify: 'In $\mathbf{L}$, GCH holds, so every weakly inaccessible cardinal is strongly inaccessible there; hence if a weakly inaccessible cardinal exists, then in $\mathbf{L}$ there is a strongly inaccessible cardinal, and $V_{\kappa}^{\mathbf{L}}$ is a model of ZFC, giving the same conclusion.'
- **Reported:** 2026-10-28 (10fede1)
