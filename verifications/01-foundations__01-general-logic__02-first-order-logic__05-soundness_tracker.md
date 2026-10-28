# Verification tracker: `01-foundations/01-general-logic/02-first-order-logic/05-soundness.html`

<!-- source: 01-foundations/01-general-logic/02-first-order-logic/05-soundness.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Intuitionistic system is not sound for classical semantics
- **Category:** Supplement/remark error
- **Location:** supplement / 直観主義論理
- **Detail:** The supplement claims that removing RAA (and adding explosion) yields intuitionistic natural deduction, and that the proof with the RAA case removed shows this system is sound with respect to the classical (Tarskian) semantics. This is false: intuitionistic logic is not sound for classical semantics. For example $\neg\neg\varphi\to\varphi$ is intuitionistically underivable but classically valid, so the classical semantics validates formulas not derivable in the intuitionistic system. The soundness proof without RAA only shows soundness for the classical semantics of the rules that remain, but the resulting system is not intuitionistic logic (it is a weaker system), and the claim that it is sound for classical semantics while being intuitionistic logic is contradictory.
- **Proposed fix:** Removing RAA (and adding explosion) gives a system that is sound for the classical semantics, but it is *weaker* than intuitionistic logic: for instance $\neg\neg\varphi\to\varphi$ is not derivable in it, yet it is classically valid, so this system is not sound for classical semantics in the sense of deriving all classically valid formulas. Intuitionistic logic itself is sound and complete with respect to Kripke semantics (not the classical Tarskian semantics); soundness and completeness for Kripke semantics are known but not treated in this series.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Explosion is not needed to characterize intuitionistic logic via RAA removal
- **Category:** Supplement/remark error
- **Location:** supplement / 直観主義論理
- **Detail:** The parenthetical '爆発律 $\bot\vdash\varphi$ は別に規則として加える' is imprecise: in the standard natural deduction presentation with $\bot$ and RAA, removing RAA and adding the explosion rule $\bot$-elim gives intuitionistic logic. But the text's framing that the resulting system 'is intuitionistic natural deduction' combined with the soundness claim is misleading, since the system with explosion and without RAA is indeed intuitionistic logic, which is *not* sound for classical semantics. The error is the soundness claim, already covered; this note is a secondary imprecision.
- **Proposed fix:** State explicitly: the system obtained by deleting RAA and adding $\bot$-elim is intuitionistic natural deduction; it is *not* sound for the classical Tarskian semantics (e.g. $\neg\neg\varphi\to\varphi$ is classically valid but not derivable), and its soundness/completeness is with respect to Kripke semantics.
- **Reported:** 2026-10-28 (10fede1)
