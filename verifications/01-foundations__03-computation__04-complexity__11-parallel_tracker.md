# Verification tracker: `01-foundations/03-computation/04-complexity/11-parallel.html`

<!-- source: 01-foundations/03-computation/04-complexity/11-parallel.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Log-space uniformity vs standard NC^1: containment direction is wrong
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると)
- **Detail:** The supplement says that NC^1 defined with log-space uniformity *contains* the standard NC^1 ("対数領域一様性で定義した NC^1 は標準的な NC^1 を含む"). This is backwards. Log-space uniformity is a *stronger* (more restrictive) uniformity condition than the usual DLOGTIME uniformity used for the standard NC^1. A stronger restriction yields a *smaller* class, so log-space-uniform NC^1 is contained in (is a subset of) the standard (DLOGTIME-uniform) NC^1, not the other way around. The parenthetical "等しいかどうかはここでは扱わない" also misleads: the containment direction is known, only equality is open.
- **Proposed fix:** Replace with: "Sipser の注によれば、対数領域一様性は DLOGTIME 一様性より強い条件であり、したがって対数領域一様性で定義した $\mathrm{NC}^{1}$ は標準的な（DLOGTIME 一様な）$\mathrm{NC}^{1}$ に含まれる（両者が等しいかどうかはここでは扱わない）。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Determinant is not known to be in NC
- **Category:** Supplement/remark error
- **Location:** supplement (似た定理)
- **Detail:** The supplement states that "整数の割り算や行列式の計算は NC に属することが知られている（行列式はチストフ・ベルコウィッツらによる）". This is false as stated. Csanky's algorithm (and the Berkowitz/Chistov algorithms) place the determinant in NC^2 (equivalently in NC), but the *integer* determinant is not known to be in NC: the determinant of an integer matrix can be computed in NC only after reducing to a field/ring where division is available; over the integers the value can be exponentially large and the problem is not known to lie in NC (it is in NC over fields, and integer determinant is in DET/P). More importantly, the standard statement is that determinant is in NC (over a field), while integer division is in NC — but the phrasing lumps them together as if integer determinant were known to be in NC, which overstates the literature. Also Berkowitz's result is for the determinant over arbitrary commutative rings (division-free), giving NC^2, so citing it for "integer determinant in NC" is imprecise.
- **Proposed fix:** Replace with: "逆に、体上の行列式の計算は NC に属することが知られており（チャンスキーの算法、および除法を用いないベルコウィッツの算法により $\mathrm{NC}^{2}$ に属する）、整数の割り算も NC に属する。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] NC^1 ⊆ L direction of uniformity remark
- **Category:** Supplement/remark error
- **Location:** supplement (前提を変えると) / hypcheck
- **Detail:** The supplement's claim that changing uniformity to DLOGTIME changes the definition of small classes like NC^1 is fine, but combined with the reversed containment it produces a false statement. Additionally, the hypcheck comment "一様でない回路族では決定不能な言語も決定できる" is correct (non-uniform circuits decide undecidable languages), so no issue there. The main error is the reversed containment already reported.
- **Proposed fix:** See the fix for the reversed containment; no separate change needed for the hypcheck.
- **Reported:** 2026-10-28 (10fede1)
