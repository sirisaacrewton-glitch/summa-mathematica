# Verification tracker: `02-algebra/03-commutative-algebra/02-commutative-algebra/13-local-global.html`

<!-- source: 02-algebra/03-commutative-algebra/02-commutative-algebra/13-local-global.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs (local properties list, finite-cover locality, unit-ideal powers) are correct. The serious problems are in the supplement: the claim that every localization of $\Z[\sqrt{-5}]$ at a maximal ideal is a DVR is false (it fails at the non-principal maximal ideal $(2,1+\sqrt{-5})$), and the accompanying claim that the ideal $(2,1+\sqrt{-5})$ is locally free of rank 1 is also false. The remark on recovering 'domain' is essentially correct but its justification should explicitly note that the unique minimal prime is prime so that the nilradical equals it.

## Issues

### ISSUE-0001 [Open] Z[√-5] is not a DVR at every maximal ideal
- **Category:** Supplement/remark error
- **Location:** supplement (数論的な性質)
- **Detail:** The supplement claims that for $A=\Z[\sqrt{-5}]$ every localization at a maximal ideal is a DVR. This is false: $A$ is a Dedekind domain but not a PID, so at a maximal ideal $\mathfrak{m}$ the localization $A_{\mathfrak{m}}$ is a DVR only when $\mathfrak{m}$ is principal (e.g. $(\sqrt{-5})$ or $(3,1+\sqrt{-5})$). At the non-principal maximal ideal $(2,1+\sqrt{-5})$ the localization is a Dedekind local domain whose maximal ideal is not principal, hence not a DVR (not a PID, not a UFD). The cited \ref{ring:z-sqrt-minus-5-dedekind} only gives that $A$ is Dedekind, which does not imply all localizations are DVRs.
- **Proposed fix:** Replace with: 「$\Z[\sqrt{-5}]$ はデデキント環だが PID でも UFD でもない。主イデアルでない極大イデアル（例えば $(2,1+\sqrt{-5})$）での局所化は DVR でなく、極大イデアルが単項でないデデキント局所環である。一方、主イデアルである極大イデアルでの局所化は DVR である。」 (i.e. state only that $A$ is Dedekind but neither PID nor UFD, and that at the non-principal maximal ideal $(2,1+\sqrt{-5})$ the localization is not a DVR.)
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] The ideal (2,1+√-5) is not locally free / not principal locally at (2,1+√-5)
- **Category:** Supplement/remark error
- **Location:** supplement (数論的な性質)
- **Detail:** The supplement says the ideal $(2,1+\sqrt{-5})$ is 'locally principal (a free module of rank 1)' but not free. Local freeness must be checked at every prime. At $\mathfrak{m}=(2,1+\sqrt{-5})$ the localization $\mathfrak{m}_{\mathfrak{m}}$ is the maximal ideal of the local ring $A_{\mathfrak{m}}$, which is not principal (since $\mathfrak{m}$ is not invertible/principal), so $\mathfrak{m}_{\mathfrak{m}}$ is not free of rank 1. Hence the ideal is not locally free, and the sentence misstates the example.
- **Proposed fix:** Replace with: 「イデアル $(2,1+\sqrt{-5})$ は自由加群でない（$A$ は UFD でないので階数 1 の非自由イデアルが存在する）。ただし $(2,1+\sqrt{-5})$ は局所自由でもない：$\mathfrak{m}=(2,1+\sqrt{-5})$ での局所化 $\mathfrak{m}_{\mathfrak{m}}$ は局所環 $A_{\mathfrak{m}}$ の極大イデアルで、単項でないため自由でない。」
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Reduced + unique minimal prime implies domain needs the ring to be nonzero / the argument via nilradical
- **Category:** Supplement/remark error
- **Location:** remark (局所的でない性質をどう回復するか)
- **Detail:** The remark states: (AC) if $A$ is reduced and has a unique minimal prime $\mathfrak{p}_{0}$, then $A$ is a domain. As stated this is correct for nonzero rings, but the given justification 'every prime contains a minimal prime, so all primes contain $\mathfrak{p}_{0}$, and by \ref{ring:nilradical} $\mathrm{nil}(A)=\mathfrak{p}_{0}$' is imprecise: \ref{ring:nilradical} gives $\mathrm{nil}(A)=\bigcap_{\mathfrak{p}\in\Spec A}\mathfrak{p}$, and the conclusion $\mathrm{nil}(A)=\mathfrak{p}_{0}$ requires that $\mathfrak{p}_{0}$ itself be prime (it is, being minimal) and that every prime contain it. The step 'every prime contains a minimal prime' uses Zorn on the set of primes contained in a given prime, which is fine, but the remark should note that $\mathfrak{p}_{0}$ is prime so that $\mathrm{nil}(A)=\mathfrak{p}_{0}$ is itself prime, and that reducedness gives $\mathfrak{p}_{0}=0$. The claim '被約は局所的だが「極小素イデアルがただ一つ」は局所的でない' is correct. The only genuine gap is that the equality $\mathrm{nil}(A)=\mathfrak{p}_{0}$ silently uses that $\mathfrak{p}_{0}$ is the intersection of all primes, i.e. that every prime contains a minimal prime, which is stated but the conclusion that $\mathfrak{p}_{0}$ is prime (hence $0$ is prime) should be made explicit.
- **Proposed fix:** Add: 「$\mathfrak{p}_{0}$ は極小素イデアルなので素イデアルであり、すべての素イデアルが $\mathfrak{p}_{0}$ を含むから $\mathrm{nil}(A)=\bigcap_{\mathfrak{p}}\mathfrak{p}=\mathfrak{p}_{0}$。被約性より $\mathfrak{p}_{0}=0$ で、$0$ が素イデアル、すなわち $A$ は整域。」
- **Reported:** 2026-10-28 (8ccef3d)
