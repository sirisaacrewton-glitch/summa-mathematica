# Verification tracker: `01-foundations/01-general-logic/02-first-order-logic/04-natural-deduction.html`

<!-- source: 01-foundations/01-general-logic/02-first-order-logic/04-natural-deduction.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the definition of derivations, the basic properties (weakening, finiteness, deduction theorem, cut), and the consistency proposition are sound, and the worked examples (identity, double-negation elimination, quantifier examples, equality symmetry/transitivity, Peirce, quantifier swap) check out. Two side-comment issues remain: the remark on the sequent formulation of the eigenvariable condition overstates that weakening breaks the condition and requires renaming (it does not, since one weakens the already-quantified conclusion), and the Peirce's law solution mislabels the first RAA use as 'explosion' citing a proposition that itself depends on RAA. No issues in the core proofs were found.

## Issues

### ISSUE-0001 [Open] Weakening in sequent form does not break the eigenvariable condition
- **Category:** Supplement/remark error
- **Location:** logic:nd-formulation-remark, first bullet
- **Detail:** The remark claims that if the eigenvariable condition is stated in sequent form as "$x$ not free in $\Sigma$" (i.e. $\Sigma\vdash\psi$ implies $\Sigma\vdash\forall x\,\psi$ when $x\notin\mathrm{FV}(\Sigma)$), then adding extra formulas to $\Sigma$ during weakening can break the condition, so renaming of eigenvariables is needed. This is false: weakening replaces $\Sigma$ by a superset $\Sigma'$, and if $x\notin\mathrm{FV}(\Sigma)$ then certainly $x\notin\mathrm{FV}(\Sigma')$ is not automatic, but the standard sequent formulation of the rule is applied to the *specific* $\Sigma$ at hand, and the derivation of $\Sigma'\vdash\forall x\,\psi$ is obtained by weakening the *conclusion* $\Sigma\vdash\forall x\,\psi$ (which is already a $\forall$-formula), not by re-applying $\forall$I. So no renaming is required; the claim that weakening breaks the condition and forces eigenvariable renaming is incorrect as stated.
- **Proposed fix:** Replace with: "If the eigenvariable condition is stated in sequent form as '$x$ is not free in $\Sigma$' for the rule deriving $\Sigma\vdash\forall x\,\psi$ from $\Sigma\vdash\psi$, weakening is still unproblematic: one weakens the already-derived conclusion $\Sigma\vdash\forall x\,\psi$ to $\Sigma'\vdash\forall x\,\psi$ rather than re-applying $\forall$I. The two formulations (condition on $\mathrm{A}(D)$ versus on $\Sigma$) yield the same derivability relation."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that the two RAA uses in Peirce's law are 'explosion' and 'genuine RAA'
- **Category:** Supplement/remark error
- **Location:** logic:prob-nd-peirce / solution
- **Detail:** The solution says the first RAA use is 'as explosion (ex falso)' citing logic:consistency-basic.1, and the second is 'genuine RAA'. But the first RAA derives $\psi$ from $\bot$ with no assumption $\neg\psi$ to discharge — this is exactly the RAA rule instance with empty discharged set, which coincides with ex falso. Calling it 'explosion' via logic:consistency-basic.1 is a mischaracterization: proposition 4.6.1 (explosion) is itself proved *using* RAA, so citing it here as the justification is circular in spirit and mislabels the step. The step is a direct application of the RAA rule of the system, not of the derived explosion principle.
- **Proposed fix:** Replace with: "RAA is used twice: the first time with an empty discharged set (deriving $\psi$ from $\bot$, which is the same rule instance that yields ex falso), and the second time as the genuine reductio discharging $\neg\varphi$. The second RAA cannot be eliminated (Peirce's law is not derivable in intuitionistic logic)."
- **Reported:** 2026-10-28 (10fede1)
