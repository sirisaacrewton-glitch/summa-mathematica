# Verification tracker: `01-foundations/05-proof-theory/04-provability-logic-extensions/06-glb-fixed-point.html`

<!-- source: 01-foundations/05-proof-theory/04-provability-logic-extensions/06-glb-fixed-point.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect claim that Dα are all false
- **Category:** Supplement/remark error
- **Location:** remark イグナチェフの標準形
- **Detail:** The remark states "$D\alpha$ はすべて偽なので、標準形から真偽が読み取れる" (all $D\alpha$ are false). This is false. In Ignatiev's/Boolos's letterless normal form for GLB, the closed formulas $D\alpha$ (indexed by ordinals $\alpha<\omega^{\omega}$) are not all false; they form a strictly decreasing (in truth strength) hierarchy analogous to $\Box^{n}\bot$ in GL, where $\Box^{n}\bot$ is true for some $n$ and false for others. Indeed $D0$ corresponds to something like $\Box\bot$ (true at dead ends), and the whole point of the normal form is that the truth value of a letterless formula is read off from which $D\alpha$ hold, not from all being false. If all $D\alpha$ were false, the normal form would collapse and could not distinguish truth values.
- **Proposed fix:** Replace with: "The formulas $D\alpha$ form a strictly decreasing hierarchy: $D\beta\to D\alpha$ is valid for $\alpha<\beta$, and for each world exactly one initial segment holds, so the truth value of a letterless formula is determined by the least $\alpha$ with $D\alpha$ false (equivalently, by which $D\alpha$ hold)."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Overstated claim about GLB containing GL with [1] for Box
- **Category:** Supplement/remark error
- **Location:** remark 箱を増やさない不動点
- **Detail:** The remark claims that GLB contains the system obtained by rewriting $\Box$ as $[1]$ in GL, justifying that if $A$ contains no $[1]$ then $H$ can be chosen without $[1]$. While the conclusion (GL fixed points transfer) is essentially correct, the stated justification is imprecise: GLB's $[1]$ satisfies distributivity, L"ob and necessitation, but the embedding of GL into GLB via $\Box\mapsto[1]$ requires that $[1]$ also satisfy the GL axioms in a way compatible with the bimodal interaction; the remark's parenthetical is a correct list of axioms but the claim that GLB "contains" this system needs the translation to be a faithful interpretation, which is not established here. This is a minor overstatement rather than a fatal error, but the justification as written is not a proof.
- **Proposed fix:** Soften to: "Since $[1]$ satisfies the distribution axiom, L"ob's axiom and necessitation, the G"odel translation $\Box\mapsto[1]$ embeds GL into GLB; hence GL fixed points give $[1]$-free solutions when $A$ is $[1]$-free." (and similarly for the $\Box$-free case).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Arithmetic reading of omega-provability self-reference
- **Category:** Unsupported fact
- **Location:** example ω 証明可能性についての自己言及
- **Detail:** The example asserts that the fixed point of $A=\neg[1]p$ is $\neg[1]\bot$ and that in arithmetic the sentence asserting "I am not omega-provable" is PA-equivalent to "PA is omega-consistent" ($\neg\omega\mathrm{Bew}(\Godel{\bot})$), and the fixed point of $A=[1]\neg p$ is equivalent to "PA is not omega-consistent". The identification of $\neg[1]\bot$ with $\neg\omega\mathrm{Bew}(\Godel{\bot})$ (i.e. omega-consistency) is a substantive claim requiring that $[1]\bot$ translate to $\omega\mathrm{Bew}(\bot)$; this is plausible but the example presents it as immediate from the fixed-point table without verifying the translation, and the claim that the second fixed point is "PA is not omega-consistent" needs the same justification. As stated without proof or citation to a result establishing the arithmetic interpretation of $[1]\bot$, this is an unsupported assertion.
- **Proposed fix:** Add a citation or justification: "Under the standard interpretation, $[1]\bot$ translates to $\omega\mathrm{Bew}(\bot)$, so $\neg[1]\bot$ expresses $\neg\omega\mathrm{Bew}(\bot)$, i.e. omega-consistency of PA (cf. the definition of $\omega\mathrm{Bew}$ and \ref{pt:omega-d12})."
- **Reported:** 2026-10-28 (10fede1)
