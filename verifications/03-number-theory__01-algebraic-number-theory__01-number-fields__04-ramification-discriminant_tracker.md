# Verification tracker: `03-number-theory/01-algebraic-number-theory/01-number-fields/04-ramification-discriminant.html`

<!-- source: 03-number-theory/01-algebraic-number-theory/01-number-fields/04-ramification-discriminant.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect parenthetical description of the different as annihilator of Ω
- **Category:** Supplement/remark error
- **Location:** remark 判別式は「被覆の分岐の総量」
- **Detail:** The remark says the different (共役差積) is 'the sheaf of relative differentials (the annihilator ideal of $\Omega_{\mathcal{O}_{K}/\mathbb{Z}}$)'. This is imprecise/wrong: the different $\mathfrak{D}_{K}$ is the annihilator of $\Omega_{\mathcal{O}_{K}/\mathbb{Z}}$ (i.e. $\mathfrak{D}_{K}=\operatorname{Ann}(\Omega_{\mathcal{O}_{K}/\mathbb{Z}})$), not 'the sheaf $\Omega$ itself' nor 'the annihilator ideal of $\Omega$' phrased as if $\Omega$ were the different. As written it conflates the different with the module of differentials.
- **Proposed fix:** The different $\mathfrak{D}_{K}$ is the annihilator ideal of the module of relative differentials: $\mathfrak{D}_{K}=\operatorname{Ann}_{\mathcal{O}_{K}}(\Omega_{\mathcal{O}_{K}/\mathbb{Z}})$, and the discriminant is its norm.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Euler's lemma attribution / formula for different when O_K = Z[θ]
- **Category:** Supplement/remark error
- **Location:** remark 共役差積と分岐の精密な関係
- **Detail:** The remark states that if $\mathcal{O}_{K}=\mathbb{Z}[\theta]$ then $\mathfrak{D}_{K}=f'(\theta)\mathcal{O}_{K}$, attributing it to 'Euler's lemma $\operatorname{Tr}(\theta^{i}/f'(\theta))$'. The formula $\mathfrak{D}_{K}=f'(\theta)\mathcal{O}_{K}$ is correct, but the parenthetical 'オイラーの補題' (Euler's lemma) is a misattribution: this is not Euler's lemma but a standard computation of the dual basis (the trace-dual of the power basis). Calling it Euler's lemma is a false historical attribution.
- **Proposed fix:** If $\mathcal{O}_{K}=\mathbb{Z}[\theta]$ with minimal polynomial $f$, then $\mathfrak{D}_{K}=f'(\theta)\mathcal{O}_{K}$; this follows from the dual-basis computation $\operatorname{Tr}(\theta^{i}/f'(\theta))=0$ for $i<n-1$ and $=1$ for $i=n-1$.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Hypcheck comment on non-perfect residue fields is misleading
- **Category:** Supplement/remark error
- **Location:** hypcheck, first bullet
- **Detail:** The hypcheck says that if the residue field is not perfect (function field extensions with inseparable residue extensions), then 'even with $e=1$ it can appear in the discriminant' and that one should 'include separability of the residue extension in the definition of unramified'. For the absolute extension $K/\mathbb{Q}$ the residue fields are finite (hence perfect), so this caveat is irrelevant here; more importantly, the statement as phrased suggests the trace form detects inseparability of the residue extension, which is not what the cited Step 3 uses. The trace form of $\mathcal{O}_{K}/\mathfrak{P}$ over $\mathbb{F}_{p}$ is nondegenerate precisely because finite fields are perfect; the comment's generalization is stated loosely and could be read as claiming the discriminant criterion fails for $K/\mathbb{Q}$, which it does not.
- **Proposed fix:** For $K/\mathbb{Q}$ all residue fields are finite, hence perfect, so the trace form in Step 3 is always nondegenerate when $e=1$. The caveat about inseparable residue extensions only arises for relative extensions over a base with imperfect residue fields, where one must include separability of the residue extension in the definition of unramified.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Ramified primes of Q(ζ_p) claim relies on sign of cyclotomic discriminant
- **Category:** Unsupported fact
- **Location:** example 2 次体と円分体の分岐, item 2
- **Detail:** The example states $d_{K}=\pm p^{p-2}$ for $K=\mathbb{Q}(\zeta_{p})$ ($p$ odd prime) and concludes only $p$ ramifies. The discriminant of $\mathbb{Q}(\zeta_{p})$ is $\pm p^{p-2}$ (sign $(-1)^{(p-1)/2}$), which is correct, but the example writes '$\pm$' and then uses it to conclude 'only $p$ ramifies' via Dedekind's theorem. This is fine mathematically, but the '$\pm$' is imprecise given that Proposition 4.6 (sign $=(-1)^{r_2}$) is available on the same page and determines the sign exactly. Not false, but the stated-only value is weaker/imprecise than what the page's own results give.
- **Proposed fix:** For $K=\mathbb{Q}(\zeta_{p})$ with $p$ odd prime, $d_{K}=(-1)^{(p-1)/2}p^{p-2}$, so only $p$ ramifies.
- **Reported:** 2026-10-28 (10fede1)
