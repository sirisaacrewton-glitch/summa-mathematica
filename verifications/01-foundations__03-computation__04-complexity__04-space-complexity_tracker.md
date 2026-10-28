# Verification tracker: `01-foundations/03-computation/04-complexity/04-space-complexity.html`

<!-- source: 01-foundations/03-computation/04-complexity/04-space-complexity.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Savitch quadratic improvement status overstated
- **Category:** Supplement/remark error
- **Location:** supplement / 前提の検討
- **Detail:** The supplement says it is not known whether the square in Savitch's theorem can be improved, giving NSPACE(f) ⊆ SPACE(f^{1.5}) as an example. This is imprecise: for general space bounds f, Savitch's f^2 is essentially optimal in the sense that there are space bounds for which NSPACE(f) is not contained in SPACE(f^{2-ε}) (the quadratic lower bound of Fürer / the monotone case). What is open is whether NSPACE(f) ⊆ SPACE(f^{1.5}) for *specific* bounds like polynomial f (i.e., whether NPSPACE = PSPACE trivially, but whether NSPACE(n) ⊆ SPACE(n^{1.5}) etc.). Stating flatly that improvement is unknown for all f is false.
- **Proposed fix:** For general space bounds $f$, Savitch's $f^{2}$ cannot be improved to $f^{2-\varepsilon}$ in general (there are bounds for which $\mathrm{NSPACE}(f)\not\subseteq\mathrm{SPACE}(f^{2-\varepsilon})$). Whether $\mathrm{NSPACE}(f)\subseteq\mathrm{SPACE}(f^{1.5})$ holds for specific bounds such as polynomial $f$ (e.g. $\mathrm{NSPACE}(n)\subseteq\mathrm{SPACE}(n^{1.5})$) is not known.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Remark on removing the constructibility hypothesis
- **Category:** Supplement/remark error
- **Location:** remark after comp:savitch
- **Detail:** The remark claims the hypothesis that f(n) is computable in space O(f(n)) can be removed by 'trying f(n)=1,2,3,...'. This is imprecise: Savitch's theorem in full generality requires f to be space-constructible (or at least that the machine's actual space usage be bounded by a computable function); the standard statement needs constructibility. Simply enumerating values does not remove the need for a space bound on the simulation, and the claim as stated is overstated.
- **Proposed fix:** The hypothesis that $f$ is space-constructible (computable in space $O(f(n))$) is standard; Savitch's theorem is usually stated for space-constructible $f$. The statement can be adapted to any $f$ that bounds the actual space usage of the machine, but the constructibility assumption is not simply removable by enumeration.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Claim that alternating game is PSPACE-complete 'in general'
- **Category:** Supplement/remark error
- **Location:** comp:prob-formula-game / solution
- **Detail:** The parenthetical remark says such alternating games 'in general become PSPACE-complete'. This is too strong: only specific families (like TQBF / geography) are PSPACE-complete; not every alternating game is. The claim as stated is an overstatement.
- **Proposed fix:** The TQBF game (alternating quantifiers over a Boolean formula) is PSPACE-complete; more generally, many alternating two-player games of polynomial length are PSPACE-complete, but not every such game is.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] PSPACE-hardness of Go/Chess generalizations
- **Category:** Unsupported fact
- **Location:** supplement / 関連する結果
- **Detail:** The supplement states that many generalizations of n×n Go and Chess are PSPACE-hard. For Chess this is correct (generalized chess is EXPTIME-complete, hence PSPACE-hard), but for Go the standard result is that generalized Go (n×n) is EXPTIME-complete, not merely PSPACE-hard; stating 'PSPACE-hard' is technically true (EXPTIME-hard implies PSPACE-hard) but the phrasing groups them as if PSPACE-hard is the sharp result. More importantly, the claim 'many ... are PSPACE-hard' is acceptable but imprecise about the actual complexity (EXPTIME-complete).
- **Proposed fix:** Generalized geography is PSPACE-complete; generalized $n\times n$ Go and Chess are EXPTIME-complete (hence PSPACE-hard).
- **Reported:** 2026-10-28 (10fede1)
