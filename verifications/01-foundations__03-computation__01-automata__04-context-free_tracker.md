# Verification tracker: `01-foundations/03-computation/01-automata/04-context-free.html`

<!-- source: 01-foundations/03-computation/01-automata/04-context-free.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Wrong example of a non-deterministic context-free language
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The supplement claims that $\{ww^{R}\}$ is not deterministic context-free. This is false: $\{ww^{R}\}$ is a deterministic context-free language (a deterministic PDA can push the first half and match it against the second half). The standard example of a context-free language that is not deterministic is $\{w w^{R} \mid w\}$'s cousin $\{a^{n}b^{n}\} \cup \{a^{n}b^{2n}\}$ or, more famously, the set of even-length palindromes over $\{0,1\}$ is deterministic, whereas $\{w w \mid w\in\{0,1\}^{*}\}$ (same word twice, not reversed) is the classic non-deterministic CFL. So the parenthetical counterexample is wrong.
- **Proposed fix:** Replace the example: 決定性文脈自由言語は文脈自由言語より真に少ないことが知られている（たとえば $\{ww \mid w\in\{0,1\}^{*}\}$ は文脈自由だが決定性ではない）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Misattributed reference to Sipser
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討, first bullet
- **Detail:** The text says this is treated in "Sipser 第 2 章 §4". Sipser's Chapter 2 is on context-free languages; the non-equivalence of deterministic and non-deterministic PDAs is not proved there (Sipser only mentions it in passing / exercises). The chapter/section reference is inaccurate.
- **Proposed fix:** Remove the specific chapter/section citation, or state it as a known result without attributing a precise section: 決定性と非決定性の PDA が定める言語クラスが異なることは知られている（Sipser では演習で触れられる程度）。
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Closure properties: complement claim needs care
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果, first bullet
- **Detail:** The bullet says context-free languages are not closed under intersection and complement. Non-closure under intersection is correct. Non-closure under complement is also true, but the phrasing "共通部分と補集合では閉じていない" is fine; however the parenthetical "(次のページ)" points to a page that may not contain these closure results. This is a minor pointer issue; the mathematical claim itself is correct, so no fix to the math is needed beyond ensuring the pointer is valid.
- **Proposed fix:** Ensure the referenced page actually states non-closure under intersection and complement; otherwise remove the pointer or state the results here.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Schützenberger correspondence overstated
- **Category:** Supplement/remark error
- **Location:** supplement / 関連する結果, third bullet
- **Detail:** The claim that context-free languages arise as the least solution of a system of polynomial equations over languages, attributed to Schützenberger's algebraic characterization, is imprecise. The algebraic characterization (Schützenberger / Chomsky–Schützenberger) concerns the generating functions / algebraic series of unambiguous or arbitrary CFLs, and the least-fixed-point description of CFLs as solutions of grammar equations is standard but not specifically "Schützenberger's algebraic characterization". The attribution conflates two distinct results.
- **Proposed fix:** 文脈自由言語は文法の規則を言語の連立方程式とみなしたときの最小解として得られる。さらに（Chomsky–Schützenberger により）文脈自由言語の生成関数は代数的級数である、と分けて述べる。
- **Reported:** 2026-10-28 (10fede1)
