# Verification tracker: `01-foundations/02-model-theory/01-elementary-extensions/03-quantifier-elimination.html`

<!-- source: 01-foundations/02-model-theory/01-elementary-extensions/03-quantifier-elimination.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (QE definition, reduction lemma, DLO QE proof, model completeness, Robinson's test) is logically sound; the case analysis in Step 4 and the hypcheck are correct, and the problem solutions are valid. The only genuine concerns are in the supplement: the Morleyization remark is stated too strongly (QE requires adding defining axioms, not merely definable predicates), and the RCF model-completeness justification via definable order is compressed and slightly imprecise about how order-preservation yields elementarity. Both are medium-confidence supplement issues; no errors were found in the proved results or the stated facts.

## Issues

### ISSUE-0001 [Open] Morleyization claim is imprecise/false as stated
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討 first bullet
- **Detail:** The supplement says 'adding definable relations/functions to the language always yields quantifier elimination (Morleyization)'. This is not correct as stated: adding symbols for *all* definable relations does not by itself give QE in general; Morleyization works by adding, for each formula, a new relation symbol together with an axiom defining it by that formula, and then QE holds for the expanded theory. Merely adjoining predicates for the definable sets (without the defining axioms making them eliminable in the right syntactic sense) does not guarantee QE. The parenthetical identification with 'Morleyization' is thus an overstatement.
- **Proposed fix:** Replace with: 'By Morleyization — adding a new relation symbol $R_{\varphi}$ for each formula $\varphi$ together with the axiom $R_{\varphi}(\vec{x})\leftrightarrow\varphi(\vec{x})$ — every theory acquires quantifier elimination in the expanded language. Hence it is meaningful to ask in which language QE holds.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] RCF model completeness argument via 'not a square' is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討 third bullet
- **Detail:** The supplement claims the order of a real closed field is definable by '$0$-nonzero squares', that ring embeddings between real closed fields therefore preserve order, and that this gives elementary embedding in the ordered-ring language. The definition of the order via squares is $x<y \iff \exists z\,(z\neq 0 \wedge y-x = z^{2})$ (or $x\le y \iff \exists z\, y-x=z^2$); the phrase '0 でない平方' is loose. More importantly, deducing model completeness of RCF in the ring language from order-preservation of embeddings plus completeness in the ordered language requires that the ordered-ring language be an expansion by definitions and that QE/completeness transfer correctly; as written the argument is compressed and the step 'ring embedding preserves order, hence is elementary' needs the additional fact that the ordered field language is definitional over the ring language and that RCF is model complete there. This is a genuine gap in the stated justification.
- **Proposed fix:** State precisely: 'In a real closed field $x\le y \iff \exists z\,(y-x=z^{2})$, so the order is definable in the ring language; hence every ring embedding between real closed fields preserves the order and is an ordered-field embedding. Since RCF is model complete in the ordered language (\ref{model:rcf-complete.2}) and the order is definable, RCF is model complete in the ring language as well.'
- **Reported:** 2026-10-28 (8ccef3d)
