# Verification tracker: `02-algebra/03-commutative-algebra/02-commutative-algebra/11-krull-akizuki-normality.html`

<!-- source: 02-algebra/03-commutative-algebra/02-commutative-algebra/11-krull-akizuki-normality.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Krull domain characterization: intersection must be locally finite, not just any intersection
- **Category:** Supplement/remark error
- **Location:** supplement (クルル整域)
- **Detail:** The supplement says a Krull domain is an integral domain having "the property of \ref{ring:normal-intersection-dvr} (a locally finite intersection of DVRs)". But \ref{ring:normal-intersection-dvr} only states $A=\bigcap_{\operatorname{ht}\mathfrak{p}=1}A_{\mathfrak{p}}$; it does not assert local finiteness (that each nonzero element is a unit in all but finitely many $A_{\mathfrak{p}}$). The defining property of a Krull domain requires the intersection to be locally finite (equivalently, the family of height-one primes is locally finite). Without local finiteness the bare equality $A=\bigcap A_{\mathfrak{p}}$ is not the definition of a Krull domain, so the attribution of "the property of \ref{ring:normal-intersection-dvr}" as the definition is imprecise/overstated.
- **Proposed fix:** A Krull domain is an integral domain that is the **locally finite** intersection of discrete valuation rings (each nonzero element is a unit in all but finitely many of them); a Noetherian normal domain satisfies this because the intersection $A=\bigcap_{\operatorname{ht}\mathfrak{p}=1}A_{\mathfrak{p}}$ over height-one primes is locally finite.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] UFD is a Krull domain: needs to be a UFD (not just any factorization)
- **Category:** Supplement/remark error
- **Location:** supplement (クルル整域)
- **Detail:** The supplement states that Noetherian normal domains and UFDs are examples of Krull domains. This is correct for UFDs (a UFD is a Krull domain), so this particular claim is fine; however the accompanying claim that "being a UFD is equivalent to the divisor class group being trivial" is stated as 'known' but is only true for Krull domains (and requires the class group to be the divisor class group). As stated it is acceptable, but the phrase '一意分解環はその例である' together with the class-group equivalence should be qualified to Krull domains. This is a minor imprecision rather than a falsehood.
- **Proposed fix:** For a Krull domain, being a UFD is equivalent to its divisor class group being trivial; in particular every UFD is a Krull domain.
- **Reported:** 2026-10-28 (10fede1)
