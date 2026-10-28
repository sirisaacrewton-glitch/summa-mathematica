# Verification tracker: `01-foundations/03-computation/02-computability/07-turing-completeness.html`

<!-- source: 01-foundations/03-computation/02-computability/07-turing-completeness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 1

## Summary of the last run

The main proofs (tm-to-L, L-to-tm, equivalence corollary) are essentially sound. The previously reported two-stack issue remains open: the input/output encoding for the two-stack machine is not verified against the Turing-complete definition, and the one-stack non-completeness argument still relies on an unstated bridge from language recognition to function computation. The Minsky remark is correctly defended by the rebuttal. One new minor imprecision appears in the examples remark's characterization of why PDAs are not Turing complete.

## Issues

### ISSUE-0001 [Open] Two-stack machine: input preparation and output encoding not addressed
- **Category:** Supplement/remark error
- **Location:** comp:two-stack / proof
- **Detail:** The proof claims the two-stack machine can simulate a TM and hence is Turing complete. But the simulation represents a TM configuration as uqv with the left stack holding u and the right stack holding v. The input to the two-stack machine is a string (or number encoding), not a TM tape configuration. The proof says '入力を右のスタックに積み直す準備' but the input format for the two-stack machine is not defined, and more importantly the output must be in the form required by comp:tm-computes-function (leading 1s). The proof does not verify that the two-stack machine's output matches the dec/enc convention of the Turing-complete definition. This is a gap but arguably minor. However the more concrete issue: the claim '一本のスタックだけでは...チューリング完全でない' is justified only by citing that PDAs recognize context-free languages and {a^n b^n c^n} is not context-free. This shows PDAs cannot recognize some decidable languages, but Turing completeness is about computing partial functions on natural numbers, not recognizing languages. The connection requires an argument that a Turing-complete system could decide {a^n b^n c^n} (via encoding), which is not spelled out. This is a genuine gap in the non-Turing-completeness argument.
- **Proposed fix:** Add: 'A Turing-complete system can decide every decidable language: given a decidable language L with decider M, encode strings as numbers, and the Turing-complete system computes the characteristic function of the encoded set, hence decides membership. Since {a^n b^n c^n} is decidable but not context-free, and a one-stack machine (PDA) recognizes exactly the context-free languages, no one-stack machine can decide {a^n b^n c^n}; hence it is not Turing complete.'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The proof still does not define the input format for the two-stack machine nor verify the dec/enc output convention; and the non-Turing-completeness argument for one stack still only cites that PDAs recognize context-free languages and {a^n b^n c^n} is not context-free, without bridging language recognition to computing partial functions.

### ISSUE-0002 [Ignored: Valid Rebuttal] Minsky two-register machine encoding claim
- **Category:** Unsupported fact
- **Location:** comp:turing-complete-examples / remark
- **Detail:** The remark states: 'レジスタ $2$ 個のレジスタ機械（ミンスキー。入出力を $2^{m}$ で符号化する）'. Minsky's result is that two-register machines are Turing complete, but the standard encoding for input/output is not simply 2^m; Minsky's two-counter machine uses a specific encoding where a single number encodes the entire register contents (e.g., 2^a 3^b), and input/output conventions vary. The parenthetical '入出力を 2^m で符号化する' is a specific claim that may be inaccurate: with only two registers, one typically encodes a single input m as 2^m in one register and 0 in the other, but the output decoding is not simply 2^m. This is a minor factual imprecision in a side remark.
- **Proposed fix:** Replace with: 'レジスタ 2 個のレジスタ機械（ミンスキー）。入力を一方のレジスタに $2^{m}$ として符号化し、他方を 0 にしておけば、任意の計算可能関数を計算できる（出力は適切に復号する）。'
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The rebuttal correctly notes Minsky's standard two-counter encoding uses input n as 2^n and output as 2^{f(n)}, so the parenthetical is accurate.
**Opus Rebuttal:** Minsky's two-counter theorem is usually stated exactly with input $n$ encoded as $2^{n}$ and output as $2^{f(n)}$ (Minsky, Computation: Finite and Infinite Machines, 1967); the parenthetical is correct.

### ISSUE-0003 [Open] Claim that all listed non-Turing-complete systems halt or have bounded memory
- **Category:** Supplement/remark error
- **Location:** comp:turing-complete-examples / remark
- **Detail:** The remark says of for programs, finite automata and PDAs: 'どれも、すべてのプログラムが停止するか、または記憶が本質的に制限されている'. This is imprecise: a PDA has unbounded (though restricted, stack-only) memory, so '記憶が本質的に制限されている' is misleading for PDAs; and the disjunction is not a correct uniform characterization. The real reason PDAs are not Turing complete is the restricted access (LIFO only), not bounded memory.
- **Proposed fix:** Replace with: 'for プログラムはすべてのプログラムが停止する（全域的である）点で、有限オートマトンとプッシュダウンオートマトンは記憶へのアクセスが本質的に制限されている点（有限状態、またはスタックという LIFO 構造のみ）で、チューリング完全性を失っている。'
- **Reported:** 2026-10-28 (048145a)
