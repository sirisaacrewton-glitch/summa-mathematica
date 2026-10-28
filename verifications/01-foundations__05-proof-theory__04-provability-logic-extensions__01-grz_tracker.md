# Verification tracker: `01-foundations/05-proof-theory/04-provability-logic-extensions/01-grz.html`

<!-- source: 01-foundations/05-proof-theory/04-provability-logic-extensions/01-grz.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Grz frames are not exactly reflexive partial orders; converse well-foundedness is also required
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点から
- **Detail:** The supplement says that adding the diagonal to a non-reflexive conversely well-founded order (GL) yields a reflexive partial order, and that this is the frame of Grz. But a reflexive partial order need not be conversely weakly well-founded (e.g. the natural numbers with ≤). The Grz frames are exactly the transitive, reflexive, antisymmetric, conversely weakly well-founded frames (as stated in pt:grz-frame-correspondence). The sentence omits the converse well-foundedness condition, so it is imprecise/overstated.
- **Proposed fix:** In frame terms, adding the diagonal ($R^{+}$) to a transitive, irreflexive, conversely well-founded relation (a GL frame) yields a transitive, reflexive, antisymmetric, conversely weakly well-founded relation, i.e. a Grz frame; conversely $R\mapsto R^{-}$ removes the diagonal. The converse well-foundedness is essential: a reflexive partial order that is not conversely well-founded (e.g. $(\mathbb{N},\le)$) is not a Grz frame.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Grz is not simply 'the reflexive version of GL'
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果
- **Detail:** The claim that Grz can be regarded as the 'reflexive version' of GL, with frames corresponding via $R\mapsto R^{+}$ and $R\mapsto R^{-}$, is only true restricted to conversely well-founded (resp. conversely weakly well-founded) relations. Without that restriction the correspondence fails: e.g. $(\mathbb{N},\le)$ is reflexive/transitive/antisymmetric but its $R^{-}$ is not conversely well-founded, so it is not a GL frame. The statement as written is overstated.
- **Proposed fix:** Restricted to conversely well-founded relations, GL frames and Grz frames correspond via $R\mapsto R^{+}$ and $R\mapsto R^{-}$ (pt:reflexive-closure-boxdot). This is precisely the correspondence between converse well-foundedness and converse weak well-foundedness; it does not hold for arbitrary transitive reflexive relations.
- **Reported:** 2026-10-28 (10fede1)
