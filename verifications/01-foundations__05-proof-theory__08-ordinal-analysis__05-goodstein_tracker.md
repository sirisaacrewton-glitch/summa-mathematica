# Verification tracker: `01-foundations/05-proof-theory/08-ordinal-analysis/05-goodstein.html`

<!-- source: 01-foundations/05-proof-theory/08-ordinal-analysis/05-goodstein.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 7 / Resolved: 0 / Ignored: 1

## Summary of the last run

The page's main proofs (Hardy function properties, base-bump/ordinal correspondence, Goodstein termination) are essentially correct. The genuine problems concentrate in the remark after pt:hardy-basic and the supplement: the Ackermann comparison for H_{ω^ω} is a clear overstatement, the H_{ω^3} tower description is loose, and the fast-growing-hierarchy identification and 'exactly' characterization are imprecise. The previously reported supplement error about individual Goodstein termination being PA-provable remains open and is the most serious issue.

## Issues

### ISSUE-0001 [Open] Individual Goodstein termination is not provable in PA via Gentzen wellordering
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The supplement claims that for each fixed m the termination of the Goodstein sequence is provable in PA, justified by \ref{pt:gentzen-wellordering} (that PA proves wellordering of every initial segment below ε₀). This is wrong. The proof of termination for a fixed m uses transfinite induction along the ordinal o_{2}(m), which can be as large as ω-towers of height depending on m; these ordinals are not bounded below ε₀ uniformly, and PA does not prove wellordering (or even the relevant transfinite induction principle) for such ordinals. Indeed, if PA proved termination for each fixed m, then by Σ₁-completeness/formalized computation one could derive the uniform Π₂ statement, contradicting Kirby–Paris. The correct statement is that PA proves termination only for those m whose o_{2}(m) lies below a fixed bound for which it proves wellordering (e.g. below ω-towers of bounded height), not for all m.
- **Proposed fix:** Replace with: 'The proof of Goodstein's theorem uses only the wellordering of ε₀. For a fixed m, termination follows from wellordering of the single ordinal o_{2}(m); however, PA does not prove wellordering of o_{2}(m) for arbitrary m (the ordinals o_{2}(m) are unbounded in ε₀). Hence PA proves termination only for those m whose o_{2}(m) lies below a bound for which it proves transfinite induction, and the uniform statement for all m is unprovable.'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still claims each fixed-m termination is provable in PA via \ref{pt:gentzen-wellordering}, but PA does not prove wellordering of the initial segment o_2(m) for arbitrary m (these ordinals are unbounded below ε₀); the rebuttal is empty and the error remains.

### ISSUE-0002 [Open] H_{ω^ω} vs Ackermann growth rate claim
- **Category:** Supplement/remark error
- **Location:** remark after pt:hardy-basic
- **Detail:** The remark states that H_{ω^ω}(x)=H_{ω^x}(x) has growth comparable to the Ackermann function. This is imprecise: the Ackermann function corresponds to level ω in the fast-growing hierarchy F_ω, and H_{ω^ω} grows much faster than the Ackermann function (H_{ω^ω} is roughly at the level of F_{ω} iterated, far exceeding a single Ackermann-type function). The claim 'same order of growth as Ackermann' is an overstatement/misidentification.
- **Proposed fix:** Replace with: 'H_{ω}(x)=2x corresponds to a low level; H_{ω^ω} already grows far faster than the Ackermann function (which sits at level ω of the fast-growing hierarchy).'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The remark still says H_{ω^ω} has growth comparable to the Ackermann function; H_{ω^ω} grows far faster than Ackermann (which is at level F_ω), so the claim remains an overstatement.

### ISSUE-0003 [Open] H_{ω^3} description as tower of height x
- **Category:** Supplement/remark error
- **Location:** remark after pt:hardy-basic
- **Detail:** The remark says H_{ω^3}(x) is '2^x x composed x times, giving an exponential tower of height about x'. Composing 2^x·x x times does not yield a tower of height x; iterating g(x)=2^x·x gives growth of tower height roughly x but the precise description 'exponential tower of height about x' is loose. More importantly, the claim that H_{ω^3} is a tower of height x is an imprecise characterization; the actual value is the x-fold iterate of 2^y·y, which is a tower of height x+O(1) but the statement as written ('指数の塔の高さが x 程度') is acceptable informally. This is borderline; flagging as imprecise.
- **Proposed fix:** State precisely: 'H_{ω^3}(x) is the x-fold iterate of y↦2^y·y applied to x, which grows like an exponential tower of height roughly x.'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The remark still describes H_{ω^3}(x) as an exponential tower of height about x; this is a loose characterization of the x-fold iterate of 2^y·y and remains imprecise.

### ISSUE-0004 [Open] Fast-growing hierarchy identification H_{ω^α}=F_α and characterization of provably recursive functions
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果, first bullet
- **Detail:** The supplement states H_{ω^α}=F_α 'under suitable conventions' and that the PA-provably-recursive functions are 'exactly those dominated by some F_α (α<ε₀)'. The identification H_{ω^α}=F_α is not literally correct with the standard definitions given here: with F_{α+1}(x)=F_α^{(x)}(x) and H_{ω^{α+1}}(x)=H_{ω^α}^{(x)}(x), one gets H_{ω^α}=F_α only up to a shift/offset, and the base cases differ (F_0(x)=x+1 vs H_1(x)=x+1, H_ω(x)=2x). The 'exactly' characterization is also slightly off: the provably recursive functions are those dominated by some H_α (equivalently F_α) for α<ε₀, which is correct in spirit, but combined with the imprecise H_{ω^α}=F_α it is misleading.
- **Proposed fix:** Replace with: 'The fast-growing hierarchy F_0(x)=x+1, F_{α+1}(x)=F_α^{(x)}(x), F_λ(x)=F_{λ[x]}(x) is closely related: H_{ω^α} and F_α grow at the same rate (they dominate each other up to a shift of index/argument). The PA-provably-recursive functions are exactly those dominated by some F_α with α<ε₀.'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still asserts H_{ω^α}=F_α and the 'exactly' characterization of PA-provably-recursive functions; the identification is only up to shift/convention and the 'exactly' phrasing remains slightly off.

### ISSUE-0005 [Ignored: Valid Rebuttal] L(m)=H_{o_2(m)}(3)-3 attribution to Cichon
- **Category:** Unsupported fact
- **Location:** pt:kirby-paris-goodstein / proof sketch
- **Detail:** The proof sketch asserts L(m)=H_{o_2(m)}(3)-3 'is known (Cichon)'. The exact formula depends on the precise convention for the fundamental sequences and the Hardy hierarchy; with the definitions on this page the formula holds for the examples checked, but the general identity as stated (with argument 3 and the specific o_2) is a strong claim attributed to Cichon that is not literally standard in this exact form. This is a stated-only fact used as a load-bearing step; it should be flagged as convention-dependent.
- **Proposed fix:** Soften to: 'With the fundamental sequences and Hardy hierarchy fixed as on this page, one has L(m)=H_{o_2(m)}(3)-3 (this identity is sensitive to the choice of fundamental sequences; cf. Cichon's work on Goodstein functions).'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The page fixes its fundamental sequences and Hardy hierarchy and cites Cichon for the identity under those conventions; the rebuttal correctly notes the identity is convention-dependent and the page's conventions are Cichon's.
**Opus Rebuttal:** The page fixes its fundamental sequences and Hardy hierarchy and states the identity for those conventions, citing Cichon 1983; the identity is convention-dependent as every such identity is, and the page's conventions are Cichon's.

### ISSUE-0006 [Open] H_{ω^ω} vs Ackermann growth rate claim
- **Category:** Supplement/remark error
- **Location:** remark after pt:hardy-basic
- **Detail:** The remark states that H_{ω^ω}(x)=H_{ω^x}(x) has growth comparable to the Ackermann function. This is imprecise: the Ackermann function corresponds to level ω in the fast-growing hierarchy F_ω, and H_{ω^ω} grows much faster than the Ackermann function (H_{ω^ω} is roughly at the level of F_{ω} iterated, far exceeding a single Ackermann-type function). The claim 'same order of growth as Ackermann' is an overstatement/misidentification.
- **Proposed fix:** Replace with: '$H_{\omega^{\omega}}(x)=H_{\omega^{x}}(x)$ grows far faster than the Ackermann function; the Ackermann function is at the level of $H_{\omega}$ (equivalently $F_{\omega}$), while $H_{\omega^{\omega}}$ already dominates every $H_{\omega^{n}}$.'
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0007 [Open] H_{ω^3} description as tower of height x
- **Category:** Supplement/remark error
- **Location:** remark after pt:hardy-basic
- **Detail:** The remark says H_{ω^3}(x) is '2^x x composed x times, giving an exponential tower of height about x'. Composing 2^x·x x times does not yield a tower of height x; iterating g(x)=2^x·x gives growth of tower height roughly x but the precise description 'exponential tower of height about x' is loose. More importantly, the claim that H_{ω^3} is a tower of height x is an imprecise characterization; the actual value is the x-fold iterate of 2^y·y, which is a tower of height x+O(1) but the statement as written ('指数の塔の高さが x 程度') is acceptable informally. This is borderline; flagging as imprecise.
- **Proposed fix:** Replace with: '$H_{\omega^{3}}(x)$ is the $x$-fold iterate of $y\mapsto 2^{y}y$ at $x$, which is an exponential tower of height $x+O(1)$.'
- **Reported:** 2026-10-28 (048145a)

### ISSUE-0008 [Open] Fast-growing hierarchy identification H_{ω^α}=F_α and characterization of provably recursive functions
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果, first bullet
- **Detail:** The supplement states H_{ω^α}=F_α 'under suitable conventions' and that the PA-provably-recursive functions are 'exactly those dominated by some F_α (α<ε₀)'. The identification H_{ω^α}=F_α is not literally correct with the standard definitions given here: with F_{α+1}(x)=F_α^{(x)}(x) and H_{ω^{α+1}}(x)=H_{ω^α}^{(x)}(x), one gets H_{ω^α}=F_α only up to a shift/offset, and the base cases differ (F_0(x)=x+1 vs H_1(x)=x+1, H_ω(x)=2x). The 'exactly' characterization is also slightly off: the provably recursive functions are those dominated by some H_α (equivalently F_α) for α<ε₀, which is correct in spirit, but combined with the imprecise H_{ω^α}=F_α it is misleading.
- **Proposed fix:** Replace with: 'The fast-growing hierarchy $F_{0}(x)=x+1$, $F_{\alpha+1}(x)=F_{\alpha}^{(x)}(x)$, $F_{\lambda}(x)=F_{\lambda[x]}(x)$ is also widely used; with the conventions here $H_{\omega^{\alpha}}$ and $F_{\alpha}$ agree up to a shift in the argument (and a small offset in the base cases). The PA-provably-recursive functions are exactly those dominated by some $H_{\alpha}$ (equivalently $F_{\alpha}$) with $\alpha<\varepsilon_{0}$.'
- **Reported:** 2026-10-28 (048145a)
