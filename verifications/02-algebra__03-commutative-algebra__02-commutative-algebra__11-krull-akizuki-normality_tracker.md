# Verification tracker: `02-algebra/03-commutative-algebra/02-commutative-algebra/11-krull-akizuki-normality.html`

<!-- source: 02-algebra/03-commutative-algebra/02-commutative-algebra/11-krull-akizuki-normality.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Krull domain characterization misstated
- **Category:** Supplement/remark error
- **Location:** supplement (クルル整域)
- **Detail:** The supplement says a Krull domain is an integral domain having the property of \ref{ring:normal-intersection-dvr}, namely an intersection of DVRs. But \ref{ring:normal-intersection-dvr} only asserts that a Noetherian normal domain equals the intersection of its localizations at height-one primes (which are DVRs). The defining property of a Krull domain requires more: the intersection must be a *locally finite* intersection of DVRs (each nonzero element is a unit in all but finitely many of them), and the family must be the height-one primes. As written, the phrase '離散付値環の局所有限な共通部分' is parenthetically attached but the sentence 'the property of \ref{ring:normal-intersection-dvr}' identifies the property with mere intersection, which is imprecise/overstated: an arbitrary intersection of DVRs need not be Krull, and the Noetherian normal case is a special case where local finiteness is automatic. The claim that UFDs are Krull is correct, but the characterization as 'the property of \ref{ring:normal-intersection-dvr}' is not the definition.
- **Proposed fix:** A Krull domain is an integral domain that is the *locally finite* intersection $A=\bigcap_{v} A_{v}$ of discrete valuation rings $A_{v}$ inside its fraction field (each nonzero element is a unit in all but finitely many $A_{v}$). Noetherian normal domains and UFDs are examples; in the Noetherian normal case the local finiteness is automatic, which is why \ref{ring:normal-intersection-dvr} gives the intersection over height-one primes.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Integer ring free over Z needs finiteness input
- **Category:** Supplement/remark error
- **Location:** supplement (数論へ)
- **Detail:** The supplement claims that from \ref{ring:dedekind-extension} and \ref{ring:integral-closure-finite} it follows that the ring of integers of an algebraic number field is a Dedekind domain and a free $\Z$-module. \ref{ring:dedekind-extension} gives Dedekind, and \ref{ring:integral-closure-finite} gives finiteness of the integral closure, but freeness over $\Z$ requires additionally that the ring of integers is a finitely generated *torsion-free* $\Z$-module and that $\Z$ is a PID (structure theorem for finitely generated modules over a PID). The cited results alone do not yield freeness; the argument silently uses that $\Z$ is a PID and the module is torsion-free. This is an overstated derivation.
- **Proposed fix:** From \ref{ring:dedekind-extension} the ring of integers $\mathcal{O}_{K}$ is a Dedekind domain, and from \ref{ring:integral-closure-finite} it is a finitely generated $\Z$-module; since it is torsion-free and $\Z$ is a PID, the structure theorem for finitely generated modules over a PID shows $\mathcal{O}_{K}$ is a free $\Z$-module of rank $[K:\Q]$.
- **Reported:** 2026-10-28 (8ccef3d)
