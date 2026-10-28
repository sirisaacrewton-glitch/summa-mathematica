# Verification tracker: `01-foundations/05-proof-theory/04-provability-logic-extensions/01-grz.html`

<!-- source: 01-foundations/05-proof-theory/04-provability-logic-extensions/01-grz.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, the ⊡-translation, the Grz system, the main theorem and its lemmas, and the frame-correspondence proposition) is logically sound and the citations match the label table. The problems are confined to the supplement: the claim that transitivity is derivable from K plus the Grzegorczyk axiom alone overstates what the proof of \ref{pt:grz-contains-s4} shows, and the remarks identifying GL and Grz frames via $R^{\pm}$ and calling Grz the 'reflexive version of GL' are imprecise about the infinite-frame and dependent-choice caveats.

## Issues

### ISSUE-0001 [Open] Grz is not obtained by adding Grzegorczyk's axiom to K alone
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The supplement says that the proof of 4 in \ref{pt:grz-contains-s4} shows that transitivity is derivable from K plus Grzegorczyk's axiom alone. This is false: the proof of 4 uses the Grzegorczyk axiom only at the substitution instance $p\mapsto C$, but it also uses the T-instance $\Box A\to A$ (proved in the same proposition from the Grzegorczyk axiom) and, crucially, the modal reasoning in Steps 1–3 is carried out in K but the final step needs T to obtain $\Box A\to A$; more importantly, the derivation of 4 in the text relies on the T schema already established, and the claim that K + Grz proves 4 (i.e. that K + Grz contains K4) is not what the proof shows. In fact K + Grz does not prove $\Box A\to\Box\Box A$ in general without T; the argument as written uses $\mathsf{Grz}\vdash\Box A\to A$ (T) to conclude. So the remark overstates what the proof establishes.
- **Proposed fix:** Replace with: "The proof of 4 in \ref{pt:grz-contains-s4} shows that, once the T-instance $\Box A\to A$ has been derived from the Grzegorczyk axiom, the 4-instance follows using the Grzegorczyk axiom at the instance $p\mapsto C=A\wedge(\Box A\to\Box\Box A)$; it does not show that transitivity is derivable from K plus the Grzegorczyk axiom alone."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Frame correspondence for Grz stated as necessary and sufficient without the finite/Noetherian caveat
- **Category:** Supplement/remark error
- **Location:** pt:grz-frame-correspondence / supplement 関連する結果
- **Detail:** The proposition claims that validity of the Grzegorczyk axiom on a frame is equivalent to R being transitive, reflexive and conversely weakly well-founded, using dependent choice for the 'necessary' direction. The supplement then says GL and Grz frames correspond via $R\mapsto R^{+}$ and $R\mapsto R^{-}$, and that this is 'the correspondence between converse well-foundedness and converse weak well-foundedness'. But \ref{pt:reflexive-closure-boxdot}.1 only shows that $R$ transitive irreflexive gives $R^{+}$ transitive reflexive antisymmetric, and conversely; it does not establish that converse well-foundedness of $R$ corresponds to converse weak well-foundedness of $R^{+}$ in the presence of infinite ascending chains. Indeed a transitive irreflexive conversely well-founded $R$ gives $R^{+}$ conversely weakly well-founded, but the converse direction (from $R^{+}$ conversely weakly well-founded to $R$ conversely well-founded) can fail for infinite frames without dependent choice, and the supplement's blanket statement 'this is the correspondence between converse well-foundedness and converse weak well-foundedness' is imprecise: converse weak well-foundedness of $R^{+}$ is strictly weaker than converse well-foundedness of $R$ on infinite frames (e.g. an infinite ascending chain $w_{0}Rw_{1}R\cdots$ has $R^{+}$ with no weak maximal element issue only because each $w_{i}$ sees $w_{i+1}\neq w_{i}$, so $R^{+}$ is not conversely weakly well-founded either; but the identification of the two notions is not justified by the cited lemma).
- **Proposed fix:** Replace with: "$\mathsf{GL}$ frames (transitive, irreflexive, conversely well-founded) and $\mathsf{Grz}$ frames (transitive, reflexive, antisymmetric, conversely weakly well-founded) are related by $R\mapsto R^{+}$ and $R\mapsto R^{-}$ as in \ref{pt:reflexive-closure-boxdot}; note that converse well-foundedness of $R$ implies converse weak well-foundedness of $R^{+}$, but the two notions are not literally the same on infinite frames."
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Claim that Grz is 'the reflexive version of GL' is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果
- **Detail:** The supplement states that Grz can be seen as the 'reflexive version' of GL and that GL and Grz frames correspond via $R\mapsto R^{+}$, $R\mapsto R^{-}$. While there is a correspondence at the level of the ⊡-translation (Lemma \ref{pt:reflexive-closure-boxdot}), Grz is not simply 'GL made reflexive': GL is not contained in Grz, nor Grz in GL, and the logics are not related by adding/removing T alone (Grz = K + Grz-axiom, and S4Grz = S4 + Grz-axiom; GL = K4 + Löb). The phrase 'reflexive version of GL' overstates the relationship.
- **Proposed fix:** Replace with: "$\mathsf{Grz}$ is related to $\mathsf{GL}$ through the ⊡-translation: $\mathsf{GL}\vdash A^{\boxdot}$ iff $A$ is valid on all finite reflexive antisymmetric transitive frames (condition 9), and the frame operations $R\mapsto R^{+}$, $R\mapsto R^{-}$ of \ref{pt:reflexive-closure-boxdot} mediate this correspondence; this does not mean that Grz is obtained from GL by simply adding reflexivity."
- **Reported:** 2026-10-28 (8ccef3d)
