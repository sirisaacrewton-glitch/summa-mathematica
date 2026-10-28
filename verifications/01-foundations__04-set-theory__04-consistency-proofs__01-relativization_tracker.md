# Verification tracker: `01-foundations/04-set-theory/04-consistency-proofs/01-relativization.html`

<!-- source: 01-foundations/04-set-theory/04-consistency-proofs/01-relativization.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect claim that {1} is not in ω
- **Category:** Supplement/remark error
- **Location:** set:prob-omega-plus-one / solution
- **Detail:** The solution claims $\{x\in 2:x=1\}=\{1\}\notin\omega$ because ω is transitive. This is false: $1\in\omega$ and $\{1\}\in\omega$ (since $\{1\}=2\in\omega$). So the example does not show that Comprehension fails in ω. In fact Comprehension does hold in ω (ω is a model of ZF−Inf, as the page's own theorem set:wf-relativization shows, since $\omega=R(\omega)$). The problem's premise that Comprehension is false in ω is itself wrong.
- **Proposed fix:** Replace the solution: ω is transitive so Extensionality holds; Pairing holds since $k=\max(m,n)+1\in\omega$. Comprehension also holds in ω (ω is a model of ZF−Inf, cf. set:wf-relativization), so the answer to the problem should be that both Extensionality and Pairing are true, and Comprehension is true as well. If a failure of Comprehension is desired, use a non-transitive class, e.g. $\mathbf{M}=\{\emptyset,\{\emptyset\}\}$ where $\{x\in\{\emptyset\}:x=\emptyset\}=\{\emptyset\}\notin\mathbf{M}$.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Misleading claim that {0} satisfies only Extensionality and Comprehension
- **Category:** Supplement/remark error
- **Location:** set:sec-informal-consistency, item 3
- **Detail:** Item 3 says 'in {0}, the Axiom of Extensionality, the Comprehension schema and "every set is empty" are true. Hence from these two axioms alone one cannot derive the existence of a nonempty set.' But {0} also satisfies Pairing, Union, Power Set, Replacement, Foundation, and Choice (it is a model of ZF−Inf plus ¬Inf), so the informal argument as stated is not a faithful illustration of 'these two axioms alone'. More importantly, the conclusion 'from Extensionality + Comprehension one cannot derive ∃x∃y(x≠y)' is correct, but the stated justification via {0} is imprecise because {0} satisfies far more than the two axioms.
- **Proposed fix:** State precisely: 'In $\mathbf{M}=\{0\}$ the Axioms of Extensionality and Comprehension (and in fact all axioms of ZF−Inf) hold together with $\forall y\,(y=0)$; hence Extensionality and Comprehension alone do not prove the existence of a nonempty set.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Overstated claim about the categorical interpretation of relativization
- **Category:** Supplement/remark error
- **Location:** supplement, '高い視点から' paragraph
- **Detail:** The sentence 'Categorically, relativization to M is restriction to a subobject of V, and transitivity is the condition that the subobject is closed under the membership relation' is imprecise/overstated: V is a proper class, not an object of a category in the usual sense, and 'subobject' is not the correct notion here (M need not be a subset of V in the object-language sense; it is a definable class). This is a loose analogy presented as a mathematical identification.
- **Proposed fix:** Soften to: 'Informally, relativization to a definable class $\mathbf{M}$ can be viewed as restricting attention to $\mathbf{M}$; when $\mathbf{M}$ is transitive, this restriction preserves the meaning of $\in$ and of bounded notions such as subset and pair.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Hypcheck comment on Foundation is imprecise
- **Category:** Supplement/remark error
- **Location:** set:wf-relativization / hypcheck
- **Detail:** The hypcheck says 'we did not use the Axiom of Foundation: the argument is carried out in ZF− and we showed that Foundation holds inside WF.' But the proof of set:foundation-in-wf-subclass uses rank and the well-foundedness of WF, which is fine in ZF−; however the statement 'we showed Foundation holds inside WF' is about the relativized axiom, not about the ambient theory, and the comment could be read as claiming the ambient argument is foundation-free in a stronger sense. This is a minor imprecision rather than a falsehood; the substantive content is correct.
- **Proposed fix:** Rephrase: 'The ambient argument is carried out in $\ZF^{-}$ (no use of the ambient Foundation axiom is needed beyond the definition of $\mathbf{WF}$ and rank); what is shown is that the relativized Foundation axiom $(\mathrm{Found})^{\mathbf{N}}$ holds.'
- **Reported:** 2026-10-28 (10fede1)
