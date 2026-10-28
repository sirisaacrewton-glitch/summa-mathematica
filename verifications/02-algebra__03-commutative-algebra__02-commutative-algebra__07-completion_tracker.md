# Verification tracker: `02-algebra/03-commutative-algebra/02-commutative-algebra/07-completion.html`

<!-- source: 02-algebra/03-commutative-algebra/02-commutative-algebra/07-completion.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Hensel's lemma example: x^2-2 over Z_7 has no root
- **Category:** Supplement/remark error
- **Location:** supplement (ヘンゼルの補題)
- **Detail:** The supplement claims that in $\Z_{7}$ the polynomial $x^{2}-2$ has a root because $3^{2}=9\equiv 2 \pmod 7$. But $2$ is not a quadratic residue mod $7$: the squares mod $7$ are $0,1,2,4$, and indeed $3^{2}=9\equiv 2 \pmod 7$ is correct, so $2$ IS a square mod 7. However, the real issue is that $x^{2}-2$ does have a root in $\Z_{7}$ since $2$ is a QR mod 7 and $7\nmid 2$, so by Hensel it lifts. Wait—$3^{2}=9\equiv 2 \pmod 7$ is true, so the example is actually valid. Let me recheck: squares mod 7 are $1,4,2,2,4,1$ for $1,2,3,4,5,6$, so $2$ is a square. The example is correct.
- **Proposed fix:** No change needed; the example is valid.
- **Reported:** 2026-10-28 (10fede1)
