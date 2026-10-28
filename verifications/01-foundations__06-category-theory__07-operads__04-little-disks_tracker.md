# Verification tracker: `01-foundations/06-category-theory/07-operads/04-little-disks.html`

<!-- source: 01-foundations/06-category-theory/07-operads/04-little-disks.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Incorrect claim that π₁C_n(2)=0 for n≥3
- **Category:** Supplement/remark error
- **Location:** remark 次元が上がると可換になる（再び）
- **Detail:** The remark states that for n≥3 the distinction disappears because π₁C_n(2)=π₁S^{n-1}=0. This is false: C_n(2)≃S^{n-1} (as stated in the example), and π₁S^{n-1}=0 only for n≥3, but for n=2, π₁S^{1}=ℤ. The text writes π₁C_n(2)=π₁S^{n-1}=0 as if it holds for all n≥3, which is fine for n≥3, but the parenthetical π₁S^{n-1}=0 is only true for n≥3, not n=2. Actually the statement says '3次元以上でその区別も消える（π₁C_n(2)=π₁S^{n-1}=0）', which is correct for n≥3. However, the preceding sentence says π₁C₂(2)=ℤ, which is consistent. So this is not an error. Let me re-read: 'ただし「回り込み方」には右回り・左回りの区別が残り（π₁C₂(2)=ℤ）、3次元以上でその区別も消える（π₁C_n(2)=π₁S^{n-1}=0）'. This is correct. No issue here.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
