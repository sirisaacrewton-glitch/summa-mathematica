# Verification tracker: `01-foundations/03-computation/02-computability/07-turing-completeness.html`

<!-- source: 01-foundations/03-computation/02-computability/07-turing-completeness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main theorems (comp:tm-to-L, comp:L-to-tm, comp:L-equals-tm) are well-argued with appropriate citations. The supplements and remarks are mostly accurate. The most notable potential issue is the non-Turing-completeness argument for one-stack machines, which relies on a language-recognition argument that is not fully connected to the function-computation definition of Turing completeness; this is a minor gap. The Minsky two-register encoding parenthetical is slightly imprecise. Other remarks (Blum axioms, BSS machines, category analogy, for programs) are acceptable as informal or correct. No serious logical errors or missing hypotheses were found in the proofs.

## Issues

### ISSUE-0001 [Open] Two-stack machine: input preparation and output encoding not addressed
- **Category:** Supplement/remark error
- **Location:** comp:two-stack / proof
- **Detail:** The proof claims the two-stack machine can simulate a TM and hence is Turing complete. But the simulation represents a TM configuration as uqv with the left stack holding u and the right stack holding v. The input to the two-stack machine is a string (or number encoding), not a TM tape configuration. The proof says '入力を右のスタックに積み直す準備' but the input format for the two-stack machine is not defined, and more importantly the output must be in the form required by comp:tm-computes-function (leading 1s). The proof does not verify that the two-stack machine's output matches the dec/enc convention of the Turing-complete definition. This is a gap but arguably minor. However the more concrete issue: the claim '一本のスタックだけでは...チューリング完全でない' is justified only by citing that PDAs recognize context-free languages and {a^n b^n c^n} is not context-free. This shows PDAs cannot recognize some decidable languages, but Turing completeness is about computing partial functions on natural numbers, not recognizing languages. The connection requires an argument that a Turing-complete system could decide {a^n b^n c^n} (via encoding), which is not spelled out. This is a genuine gap in the non-Turing-completeness argument.
- **Proposed fix:** Add: 'A Turing-complete system can decide every decidable language: given a decidable language L with decider M, encode strings as numbers, and the Turing-complete system computes the characteristic function of the encoded set, hence decides membership. Since {a^n b^n c^n} is decidable but not context-free, and a one-stack machine (PDA) recognizes exactly the context-free languages, no one-stack machine can decide {a^n b^n c^n}; hence it is not Turing complete.'
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Minsky two-register machine encoding claim
- **Category:** Unsupported fact
- **Location:** comp:turing-complete-examples / remark
- **Detail:** The remark states: 'レジスタ $2$ 個のレジスタ機械（ミンスキー。入出力を $2^{m}$ で符号化する）'. Minsky's result is that two-register machines are Turing complete, but the standard encoding for input/output is not simply 2^m; Minsky's two-counter machine uses a specific encoding where a single number encodes the entire register contents (e.g., 2^a 3^b), and input/output conventions vary. The parenthetical '入出力を 2^m で符号化する' is a specific claim that may be inaccurate: with only two registers, one typically encodes a single input m as 2^m in one register and 0 in the other, but the output decoding is not simply 2^m. This is a minor factual imprecision in a side remark.
- **Proposed fix:** Replace with: 'レジスタ 2 個のレジスタ機械（ミンスキー）。入力を一方のレジスタに $2^{m}$ として符号化し、他方を 0 にしておけば、任意の計算可能関数を計算できる（出力は適切に復号する）。'
- **Reported:** 2026-10-28 (8ccef3d)
