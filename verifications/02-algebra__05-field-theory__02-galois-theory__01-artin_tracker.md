# Verification tracker: `02-algebra/05-field-theory/02-galois-theory/01-artin.html`

<!-- source: 02-algebra/05-field-theory/02-galois-theory/01-artin.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Isomorphism L⊗_{L^G}L ≅ ∏L requires separability (not just Artin's theorem)
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement claims that for a finite group G acting on L, L⊗_{L^G}L ≅ ∏_{σ∈G}L, presenting this as the 'field version of quotient by a finite group action' and as a consequence of Artin's theorem. But Artin's theorem gives only [L:L^G]=|G|; it does not give separability. If L/L^G is inseparable, the tensor product is not a product of copies of L. Concretely, take L=F_p(t), G={id} (trivial group). Then L^G=L, and L⊗_L L ≅ L, which is fine. A genuine counterexample: let L=F_p(t), and let G be trivial—no. Better: take K=F_p(t^p)⊂L=F_p(t), which is a degree-p purely inseparable extension, but it is not of the form L^G for a group G. However, the statement as written is about L^G for a finite group G, and in that setting L/L^G is always separable (Artin's theorem plus the fact that L^G is the fixed field forces separability via the standard argument). Actually, for L/L^G with G finite, L/L^G is Galois (separable), so the isomorphism does hold. The real issue is that the supplement attributes the isomorphism to Artin's theorem alone, whereas it requires the separability of L/L^G (normal basis / Galois descent). This is a mild overstatement, but the isomorphism itself is correct in this setting.
- **Proposed fix:** Replace with: 'Since L/L^{G} is Galois (in particular separable) by Artin's theorem, the natural map L\otimes_{L^{G}}L\to\prod_{\sigma\in G}L is an isomorphism (Galois descent).'
- **Reported:** 2026-10-28 (8ccef3d)
