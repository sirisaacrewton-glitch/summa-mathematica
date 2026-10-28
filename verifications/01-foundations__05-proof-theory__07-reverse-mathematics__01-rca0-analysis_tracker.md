# Verification tracker: `01-foundations/05-proof-theory/07-reverse-mathematics/01-rca0-analysis.html`

<!-- source: 01-foundations/05-proof-theory/07-reverse-mathematics/01-rca0-analysis.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Monotone convergence is not equivalent to ACA₀
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The supplement claims that convergence of monotone bounded sequences of reals (existence of suprema) is not provable in RCA₀ and is equivalent to ACA₀. This is false: the monotone convergence theorem (and existence of suprema for bounded sequences of reals) is provable in RCA₀ (it is one of the standard basic results, cf. Simpson, Subsystems of Second Order Arithmetic, II.4 / X.1). What is not provable in RCA₀ is the existence of suprema of bounded sets of reals (or the least-upper-bound principle for arbitrary bounded sets), which is equivalent to ACA₀. The statement as written misattributes the equivalence.
- **Proposed fix:** The hypothesis $\lim(b_{n}-a_{n})=0$ cannot simply be dropped: the least-upper-bound principle for arbitrary bounded sets of reals (equivalently, the existence of suprema of bounded sets) is not provable in $\mathsf{RCA}_{0}$ and is equivalent to $\mathsf{ACA}_{0}$ over $\mathsf{RCA}_{0}$. (The monotone convergence theorem for sequences of reals, by contrast, is provable in $\mathsf{RCA}_{0}$.)
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Misattribution of real closedness of ℝ in RCA₀
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果, 実閉体 bullet
- **Detail:** The supplement says that the fact that $\mathbb{R}$ in $\mathsf{RCA}_{0}$ satisfies all theorems of the theory of real closed fields was shown by Simpson and Tanaka. The standard result is that $\mathsf{RCA}_{0}$ proves that the real numbers form a real closed field (this is a basic result, essentially due to the arithmetization in Simpson's book, II.9 / X.1); attributing it jointly to Simpson and Tanaka is not supported. Also the parenthetical 'since $\mathbb{R}$ is not a set' is misleading: real closedness is a statement about the algebraic/order structure of the reals as coded, and the point is that it requires the intermediate value theorem / quantifier elimination, not that $\mathbb{R}$ fails to be a set.
- **Proposed fix:** It is known (see Simpson, Subsystems of Second Order Arithmetic) that $\mathsf{RCA}_{0}$ proves that the real numbers, as coded by fast Cauchy sequences, form a real closed field, i.e. satisfy all theorems of the theory of real closed fields. This is not immediate because it requires the intermediate value theorem and quantifier elimination for real closed fields to be carried out in $\mathsf{RCA}_{0}$.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Computable IVT: zero may not be computable
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果, 計算可能解析学 bullet
- **Detail:** The supplement states that the computable version of the intermediate value theorem is exactly the bisection in the proof, and that 'a computable zero exists (not only in the case where there is no rational zero)'. This is imprecise/overstated: the effective IVT guarantees a computable zero only under additional hypotheses (e.g. the function is computable and has a zero, or one uses a signed/transversal version); in general a computable continuous $f$ with $f(0)<0<f(1)$ need not have a computable zero (the zero can be non-computable, e.g. by a standard construction encoding the halting set). The bisection here produces a zero only because the sign of $f(m_{n})$ is decidable in the specific $\mathsf{RCA}_{0}$ argument, which does not translate to a computable zero in general.
- **Proposed fix:** The computable version of the intermediate value theorem is the bisection used in the proof, but it yields a computable zero only under additional hypotheses (for instance when the function is computable and known to have a zero, or in a signed/transversal formulation). In general a computable continuous $f$ with $f(0)<0<f(1)$ need not have a computable zero.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Brouwer fixed point and maximum: WKL₀ vs. stronger systems
- **Category:** Supplement/remark error
- **Location:** remark logic:rm-rca0-theorems
- **Detail:** The remark states that Brouwer's fixed point theorem in dimension $\ge2$ and the existence of a maximum of a continuous function on $[0,1]$ are not provable in $\mathsf{RCA}_{0}$ and are equivalent to $\mathsf{WKL}_{0}$ (citing the WKL₀ page). This is wrong for both: the existence of a maximum of a continuous function on $[0,1]$ is equivalent to $\mathsf{WKL}_{0}$ (correct), but Brouwer's fixed point theorem in dimension $\ge2$ is not equivalent to $\mathsf{WKL}_{0}$; it is much stronger (it implies $\mathsf{WKL}_{0}$ and is related to systems beyond $\mathsf{ACA}_{0}$, e.g. it is not provable in $\mathsf{ACA}_{0}$ in the usual formulations). Grouping them as both equivalent to $\mathsf{WKL}_{0}$ is a false claim.
- **Proposed fix:** On the other hand, the existence of a maximum of a continuous function on $[0,1]$ is not provable in $\mathsf{RCA}_{0}$ and is equivalent to $\mathsf{WKL}_{0}$ (\ref{logic:page-rm-wkl0}). Brouwer's fixed point theorem in dimension $\ge2$ is not provable in $\mathsf{RCA}_{0}$ either, but it is much stronger than $\mathsf{WKL}_{0}$ (it is not provable in $\mathsf{ACA}_{0}$ in its usual formulation).
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0005 [Open] Completeness theorem listed as RCA₀-provable without qualification
- **Category:** Unsupported fact
- **Location:** remark logic:rm-rca0-theorems
- **Detail:** The remark lists 'a consistent complete (countable language) theory has a model' among theorems provable in $\mathsf{RCA}_{0}$. The Gödel completeness theorem for countable theories is indeed provable in $\mathsf{WKL}_{0}$, and the special case of a complete consistent theory is provable in $\mathsf{RCA}_{0}$; however, as stated ('無矛盾で完全な（可算言語の）理論はモデルをもつ') it is acceptable only if 'complete' is essential. The phrasing is borderline but the claim is essentially correct for complete theories; the risk is that readers infer the general completeness theorem is in $\mathsf{RCA}_{0}$, which is false (it is equivalent to $\mathsf{WKL}_{0}$). Since the statement explicitly says 'complete', this is not an error, but the surrounding list ('いずれも…計算する手続きが具体的に書ける') overstates: for a complete consistent theory the model is built by a Henkin construction, which is effective, so this is fine. No change strictly required; flag only if the general completeness theorem is intended.
- **Proposed fix:** If the general completeness theorem is intended, replace with: 'the completeness theorem for countable theories is equivalent to $\mathsf{WKL}_{0}$; the special case of a complete consistent theory is provable in $\mathsf{RCA}_{0}$.' Otherwise keep as is.
- **Reported:** 2026-10-28 (10fede1)
