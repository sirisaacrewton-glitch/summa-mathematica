# Verification tracker: `04-analysis/02-complex-analysis/02-residues/02-residue-theorem.html`

<!-- source: 04-analysis/02-complex-analysis/02-residues/02-residue-theorem.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problem is in the residue theorem's hypcheck: the example 1/sin(1/z) on U=C\{0} is presented as an admissible case, but that function is not meromorphic on U (0 is a non-isolated singularity), so it actually illustrates the failure of the hypothesis rather than its permissibility. All other supplements, examples and proofs checked out (Rouché counterexample, local mapping, open mapping, local inverse, residue computations, argument principle applications).

## Issues

### ISSUE-0001 [Open] Hypcheck example 1/sin(1/z) is not meromorphic on U=C\{0}
- **Category:** Supplement/remark error
- **Location:** cx:residue-theorem / hypcheck
- **Detail:** The hypcheck comment claims that the poles 1/(nπ) of 1/sin(1/z) accumulating at 0 are 'fine' with U=C\{0}. But 1/sin(1/z) is not meromorphic on U=C\{0}: 0 is a non-isolated singularity (a limit of poles), so the function is not meromorphic on the whole of U. The residue theorem's hypothesis 'S has no accumulation point in U' is precisely what fails here; the example illustrates the necessity of the hypothesis, not its permissibility.
- **Proposed fix:** Replace with a correct example: 'The hypothesis that S has no accumulation point in U is necessary: for f(z)=1/sin(1/z) the poles 1/(nπ) accumulate at 0, so f is not meromorphic on U=C\{0} and the residue theorem cannot be applied there. If instead one takes U=C\{0} and S={1/(nπ)} (which does accumulate at 0∈U), the hypothesis fails. Accumulation on the boundary of U is allowed: e.g. f(z)=1/sin(1/z) on U=C\{0} is not meromorphic, but a function whose poles accumulate only at a point outside U (e.g. at 0 with U=C\{0} replaced by a domain not containing 0) is fine.'
- **Reported:** 2026-10-28 (8ccef3d)
