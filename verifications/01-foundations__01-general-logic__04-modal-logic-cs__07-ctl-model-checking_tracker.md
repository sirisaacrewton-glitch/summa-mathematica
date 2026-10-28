# Verification tracker: `01-foundations/01-general-logic/04-modal-logic-cs/07-ctl-model-checking.html`

<!-- source: 01-foundations/01-general-logic/04-modal-logic-cs/07-ctl-model-checking.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main genuine problem is the remark claiming CTL* model checking is PSPACE-complete, which is false (it is 2EXPTIME-complete). The fairness remark is somewhat overstated. The proofs and fixed-point characterizations are otherwise correct.

## Issues

### ISSUE-0001 [Open] CTL* model checking is not PSPACE-complete
- **Category:** Supplement/remark error
- **Location:** remark / item 3
- **Detail:** The remark states that CTL* model checking is PSPACE-complete. This is wrong: CTL* model checking is 2EXPTIME-complete (Emerson–Jutla, Kupferman–Vardi). Only LTL model checking is PSPACE-complete (Sistla–Clarke 1985).
- **Proposed fix:** LTL のモデル検査は PSPACE 完全（Sistla–Clarke 1985）だが、CTL* のモデル検査は 2EXPTIME 完全である（Emerson–Jutla 1988, Kupferman–Vardi）。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Fairness claim: CTL with fairness is not simply polynomial
- **Category:** Supplement/remark error
- **Location:** remark / item 2
- **Detail:** The remark says CTL model checking under fairness constraints is polynomial. For CTL with fairness constraints this is not generally true; the polynomial-time result (Clarke–Emerson–Sistla 1986, Emerson–Lei 1986) concerns CTL with fairness / CTL_F, but the standard statement is that CTL model checking with fairness constraints is polynomial only for the restricted logic; for full CTL with fairness the problem is more subtle. The claim as stated is overstated.
- **Proposed fix:** 公平性制約のもとでの CTL のモデル検査は、制約の個数を k とすると O(|F|·(|S|+|R|)·k) 程度の多項式時間でできる（Clarke–Emerson–Sistla 1986, Emerson–Lei 1986）。ただしこれは公平性を満たす経路のみを考える CTL の拡張に対する結果である。
- **Reported:** 2026-10-28 (8ccef3d)
