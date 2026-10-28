# Verification tracker: `01-foundations/02-model-theory/03-ultraproducts/01-ultraproducts.html`

<!-- source: 01-foundations/02-model-theory/03-ultraproducts/01-ultraproducts.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, the ultrafilter lemma, Łoś's theorem, the semantic compactness proof, and the problems) is logically sound: hypotheses (AC, ultrafilter, finite intersection property) are used where needed and the citations match their targets. The genuine problems are confined to the closing supplement: the reduced product is described as a colimit when it is an inverse limit (a real mathematical error), and the propositional-case comparison overstates the collapse of the finite ultrapower as requiring no quotient. A minor imprecision concerns attributing the model-size bound to the compactness proof.

## Issues

### ISSUE-0001 [Open] Reduced product as colimit: direction of the system is wrong
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点から) at end of page
- **Detail:** The supplement claims that the reduced product is the colimit (direct limit) of the directed system of partial products $\prod_{i\in X}\mathcal{M}_{i}$ with restriction maps for $X\supset Y$. But the restriction maps go from $\prod_{i\in X}$ to $\prod_{i\in Y}$ when $X\supset Y$, i.e. from larger index sets to smaller ones; the system is directed by reverse inclusion, and the natural maps go *into* the small products, so the reduced product is the **inverse** limit (projective limit) of this system, not the colimit. Indeed the colimit of the restrictions would be the union/direct limit over larger sets, which is not the quotient. The identification "two sequences are equal iff they agree on some large set $X$" is exactly the inverse-limit (thread) description.
- **Proposed fix:** Replace "余極限（有向和）" by "逆極限（射影極限）": the reduced product $\prod_{i}M_{i}/\mathcal{F}$ is the inverse limit of the directed system $(\prod_{i\in X}M_{i})_{X\in\mathcal{F}}$ with restriction maps $\prod_{i\in X}\to\prod_{i\in Y}$ for $X\supset Y$; two sequences are identified precisely when they agree on some $X\in\mathcal{F}$.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Propositional case is not literally an ultrapower of {0,1}
- **Category:** Supplement/remark error
- **Location:** supplement (命題論理との対応)
- **Detail:** The supplement says the propositional construction "amounts to taking the ultrapower of the set {0,1}" and that "the ultrapower of a finite set is the same as the original set (problem \ref{model:prob-ultrapower-finite}), so no quotient was needed." This is imprecise: the propositional assignment is defined by $\bar v(p)=1\iff\{\Delta:\bar v_{\Delta}(p)=1\}\in U$, which is a *definition* of a two-valued function, not the quotient $\{0,1\}^{I}/U$. The quotient $\{0,1\}^{I}/U$ is (by the cited problem) isomorphic to $\{0,1\}$, but the identification of a class $[g]$ with its value still requires the argument that some $Y_{k}\in U$; the text presents the collapse as automatic ("no quotient needed"), which misstates the logic. Also calling it "the ultrapower of {0,1}" conflates the set of truth values with the structure of propositions.
- **Proposed fix:** Rephrase: the propositional truth assignment is $\bar v(p)=1\iff\{\Delta:\bar v_{\Delta}(p)=1\}\in U$; this is the same as reading off the value of the class $[\Delta\mapsto\bar v_{\Delta}(p)]$ in the ultrapower $\{0,1\}^{I}/U$, which by problem \ref{model:prob-ultrapower-finite} is canonically isomorphic to $\{0,1\}$ (some $Y_{k}\in U$ determines the value). So the quotient is present but collapses to the original two-element set.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Compactness proof does not by itself give the bound |L|+aleph_0
- **Category:** Supplement/remark error
- **Location:** supplement (二つの証明の比較)
- **Detail:** The supplement asserts that the syntactic (completeness-based) proof of compactness "also simultaneously gives the upper bound on the cardinality of the model, $|\mathcal{L}|+\aleph_{0}$." The completeness/Henkin proof does yield a model of size at most $|\mathcal{L}|+\aleph_{0}$, so this is essentially correct for the Henkin construction; however, as stated it is a claim about "the proof of \ref{logic:compactness}" whose content is not verified here, and the contrast drawn ("the ultraproduct is generally large, apply downward Löwenheim–Skolem afterwards") is correct. This is borderline; the only genuine imprecision is attributing the size bound to the compactness proof rather than to the Henkin model construction.
- **Proposed fix:** State it as: the Henkin/completeness construction yields a model of cardinality at most $|\mathcal{L}|+\aleph_{0}$, whereas the ultraproduct built here may be large; to obtain a small model apply \ref{model:downward-lowenheim-skolem} afterwards.
- **Reported:** 2026-10-28 (8ccef3d)
