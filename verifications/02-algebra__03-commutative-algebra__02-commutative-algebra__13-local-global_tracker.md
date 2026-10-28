# Verification tracker: `02-algebra/03-commutative-algebra/02-commutative-algebra/13-local-global.html`

<!-- source: 02-algebra/03-commutative-algebra/02-commutative-algebra/13-local-global.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine issue is in the supplement: the claim that $\Z[\sqrt{-5}]$ has DVR localizations at all maximal ideals is false because the zero ideal is prime and the localization at $(0)$ is a field, not a DVR. The remark about recovering domain-ness is mathematically sound. No other errors of the six kinds were found; the proofs and citations appear consistent with the cited results.

## Issues

### ISSUE-0001 [Open] Z[√-5] is not a DVR at every maximal ideal
- **Category:** Supplement/remark error
- **Location:** supplement (数論的な性質)
- **Detail:** The supplement claims that for $A=\Z[\sqrt{-5}]$ every localization $A_{\mathfrak{m}}$ at a maximal ideal is a DVR. This is false: $A$ is a Dedekind domain, so $A_{\mathfrak{m}}$ is a DVR exactly when $\mathfrak{m}$ is a nonzero prime, but the zero ideal $(0)$ is prime (the ring is a domain) and $A_{(0)}=\Q(\sqrt{-5})$ is a field, not a DVR (a field is not a discrete valuation ring, since it has no nonzero nonunit). Also the phrase 'localization at every maximal ideal' is fine for maximal ideals, but the parenthetical '(PID・UFD)' applied to all localizations including the field case is misleading. The claim that $(2,1+\sqrt{-5})$ is locally principal but not free is correct, but the DVR claim needs correction.
- **Proposed fix:** Replace with: '$\Z[\sqrt{-5}]$ is a Dedekind domain, so for every nonzero prime ideal $\mathfrak{p}$ the localization $\Z[\sqrt{-5}]_{\mathfrak{p}}$ is a DVR (hence a PID and a UFD), while $\Z[\sqrt{-5}]$ itself is neither a PID nor a UFD; the ideal $(2,1+\sqrt{-5})$ is locally principal (locally free of rank 1) but not free.'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Reduced + unique minimal prime implies domain: the 'unique minimal prime' condition is not local
- **Category:** Supplement/remark error
- **Location:** remark 局所的でない性質をどう回復するか
- **Detail:** The remark states: '(AC) if $A$ is reduced and has a unique minimal prime ideal $\mathfrak{p}_{0}$, then $A$ is a domain.' This is correct. But it then says '被約は局所的だが、「極小素イデアルがただ一つ」は局所的でない（2 の例）'. The example 2 is $A=k\times k$, which has two minimal primes, so it shows that 'unique minimal prime' fails for a ring whose localizations are all fields (domains). However, the claim that 'having a unique minimal prime is not local' needs the precise statement: it is not a local property in the sense of the definition, since $k\times k$ has all localizations domains (unique minimal prime) but itself has two minimal primes. This is essentially correct, but the phrasing '被約は局所的だが' combined with the example may suggest reducedness is what fails; actually reducedness is local and holds here. The statement is essentially correct but imprecise: the example shows 'unique minimal prime' is not local, which is right. No error, but the wording could mislead. Given the instruction to prefer no report over speculative ones, this is borderline; I will not report it as an error since the mathematical content is correct.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that 'finitely generated' is recovered by finite cover is correct, but the remark's 'domain' recovery uses nilradical theorem correctly
- **Category:** Supplement/remark error
- **Location:** remark
- **Detail:** The remark's argument: if $A$ is reduced and has a unique minimal prime $\mathfrak{p}_{0}$, then every prime contains $\mathfrak{p}_{0}$ (true, since minimal primes are contained in every prime? Actually every prime contains a minimal prime, and if there is only one minimal prime $\mathfrak{p}_{0}$, then every prime contains $\mathfrak{p}_{0}$). Then $\mathrm{nil}(A)=\mathfrak{p}_{0}$ by \ref{ring:nilradical} (nilradical = intersection of all primes = intersection of primes containing $\mathfrak{p}_{0}$ = $\mathfrak{p}_{0}$ since $\mathfrak{p}_{0}$ is prime and among the primes). Reduced implies $\mathfrak{p}_{0}=0$, which is prime, so $A$ is a domain. This is correct. The parenthetical '素イデアルの減少鎖の共通部分は素イデアルなので、ツォルンの補題が使える' is a justification that minimal primes exist, which is standard. No error.
- **Reported:** 2026-10-28 (10fede1)
