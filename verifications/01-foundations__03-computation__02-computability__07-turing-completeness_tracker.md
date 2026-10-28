# Verification tracker: `01-foundations/03-computation/02-computability/07-turing-completeness.html`

<!-- source: 01-foundations/03-computation/02-computability/07-turing-completeness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Two-stack machine proof: left-move case mishandles the head symbol
- **Category:** Supplement/remark error
- **Location:** comp:two-stack / proof
- **Detail:** In the simulation, the right stack holds $v$ with the head symbol $b$ on top. For $\delta(q,b)=(r,c,\mathrm{L})$ the text says 'replace $b$ on the right stack by $c$, then pop the top symbol $a$ of the left stack and push it onto the right stack'. But after replacing $b$ by $c$ and pushing $a$, the top of the right stack is $a$, which is correct for the new head position; however the text also says for the R case 'pop $b$ from the right stack, push $c$ onto the left stack' — in the R case the head symbol $b$ must be written to the left stack (correct) but the right stack then loses $b$ and the new head is the next symbol, which is fine. The genuine problem is the L case when the left stack is empty: the text says 'if empty, do not move', but the head symbol $b$ has already been replaced by $c$ on the right stack, so the configuration is consistent; this is actually fine. The real gap: in the R case, after popping $b$ and pushing $c$ to the left stack, if the right stack becomes empty a blank must be pushed — the text does mention this. On closer inspection the L-case description 'replace $b$ by $c$' is not a single stack operation (a stack can only push/pop the top), so it requires popping $b$ and pushing $c$, which is fine. The description is thus essentially correct but the L-case omits that when the left stack is empty the head symbol $b$ must still be overwritten by $c$ before 'not moving'; as written 'if empty, do not move' could be read as skipping the write of $c$.
- **Proposed fix:** In the $\delta(q,b)=(r,c,\mathrm{L})$ case: pop $b$ from the right stack and push $c$; then if the left stack is nonempty, pop its top symbol $a$ and push it onto the right stack (the head moves left onto $a$); if the left stack is empty, push a blank onto the right stack (the head stays at the left end, now reading a blank). In both subcases the symbol $c$ has been written at the old head cell.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that removing computability of encoding trivializes Turing completeness
- **Category:** Supplement/remark error
- **Location:** comp:sec-turing-complete / supplement (前提の検討)
- **Detail:** The supplement says: 'If one removes the requirement that the encoding be computable, one can embed the answer to the halting problem into the encoding and make it appear that anything can be computed.' This is imprecise: the definition of Turing completeness only requires that every L-computable $f$ be represented as $\mathrm{dec}\circ S\circ\mathrm{enc}$; if $\mathrm{enc},\mathrm{dec}$ are arbitrary (non-computable) bijections, then indeed any sufficiently rich $\mathcal{S}$ can simulate, but the statement 'anything can be computed' overstates it — the requirement is only that L-computable functions be captured, and a non-computable encoding does not by itself make $\mathcal{S}$ compute non-computable functions in any intrinsic sense. The claim as phrased ('何でも計算できるように見せかけられる') is an overstatement.
- **Proposed fix:** If the requirement that the encoding be computable is dropped, then a non-computable encoding/decoding can be used to disguise arbitrary behaviour, so that even a very weak system may appear Turing complete; this is why the definition restricts to computable encodings. It does not, however, make the system compute non-computable functions intrinsically.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Minsky two-register machine encoding claim
- **Category:** Unsupported fact
- **Location:** comp:turing-complete-examples / remark
- **Detail:** The remark states that a register machine with 2 registers is Turing complete, 'encoding input/output by $2^{m}$'. This is the standard Minsky result, but the parenthetical is imprecise: with two registers and the usual inc/dec/jz instructions, one register is used as a program counter-like auxiliary and the other holds $2^{m}$ (or a pairing encoding); the phrase '入出力を $2^{m}$ で符号化する' alone does not describe a correct encoding for $k$-ary inputs. As stated it is at best incomplete and could be read as a false claim that a single number $2^{m}$ encodes arbitrary tuples.
- **Proposed fix:** A register machine with only two registers is Turing complete (Minsky); inputs and outputs are encoded as natural numbers (e.g. via a pairing function, or $2^{m}$ for a single input), and the simulation uses one register as an auxiliary counter.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Rule 110 and Game of Life attribution
- **Category:** Supplement/remark error
- **Location:** comp:turing-complete-examples / remark
- **Detail:** The remark lists 'cellular automaton Rule 110 (Cook 2004)' and 'Conway's Game of Life' as generally known Turing-complete systems. Rule 110's Turing completeness (Cook 2004) is correct. The Game of Life's Turing completeness is also established (e.g. Rendell's construction), so this is acceptable; however the list groups 'tag systems, Post canonical systems' with these without qualification, which is fine. No error here on verification.
- **Proposed fix:** No change needed; the attributions are correct.
- **Reported:** 2026-10-28 (10fede1)
