# Verification tracker: `01-foundations/01-general-logic/04-modal-logic-cs/13-hoare-logic.html`

<!-- source: 01-foundations/01-general-logic/04-modal-logic-cs/13-hoare-logic.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Assignment axiom remark: fresh variable is 'always substitutable'
- **Category:** Supplement/remark error
- **Location:** remark (after logic:hoare-rules), item 2
- **Detail:** The remark says the new variable $y$ is 'always substitutable (\ref{logic:fresh-renaming})'. But \ref{logic:fresh-renaming} (corollary 2.7, 'renaming by a new variable') is about renaming bound variables; it does not state that a fresh variable is substitutable for $x$ in $\psi$. The actual reason $y$ is substitutable for $x$ in $\psi$ is simply that $y$ does not occur in $\psi$ (a variable not occurring in a formula is substitutable for any variable). The citation is used for a claim it does not make, and the stated justification is imprecise.
- **Proposed fix:** Replace with: 'In the form used here, the fresh variable $y$ does not occur in $\psi$, hence is substitutable for $x$ in $\psi$ (a variable not occurring in a formula is substitutable for any variable), so no renaming of bound variables is needed.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Hypcheck: 'mechanical' derivation requires decidable Th(A)
- **Category:** Supplement/remark error
- **Location:** hypcheck (logic:cook-completeness), second bullet
- **Detail:** The hypcheck says that to derive triples 'mechanically' one needs $\mathrm{Th}(\mathfrak{A})$ to be decidable. This is overstated/imprecise: the consequence rule requires deciding whether $\mathfrak{A}\models\varphi\to\varphi'$, i.e. an oracle for the theory; decidability is sufficient but not necessary (recursive enumerability of the valid implications, or merely having an oracle, suffices). The claim as stated is stronger than warranted.
- **Proposed fix:** Replace with: 'To derive triples effectively one needs an oracle deciding (or at least enumerating) the valid implications $\mathfrak{A}\models\varphi\to\varphi'$; decidability of $\mathrm{Th}(\mathfrak{A})$ is a sufficient, but not necessary, condition.'
- **Reported:** 2026-10-28 (8ccef3d)
