# Verification tracker: `02-algebra/03-commutative-algebra/02-commutative-algebra/02-noetherian-artinian.html`

<!-- source: 02-algebra/03-commutative-algebra/02-commutative-algebra/02-noetherian-artinian.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs are logically sound and the citations match their targets. The genuine problems are confined to side remarks: the description of the subgroup lattice of the Prüfer group in the example is incorrect, and two hypcheck comments misdescribe which steps require DC/AC and which implications are choice-free. All are fixable by rewording; no proof gap or missing hypothesis was found.

## Issues

### ISSUE-0001 [Open] Prüfer group description of subgroups is wrong
- **Category:** Supplement/remark error
- **Location:** example (item 3)
- **Detail:** The parenthetical claim that the subgroups of $\Z[1/p]/\Z$ are 'just the chain $p^{-n}\Z/\Z$' is false: for each $n$ the subgroup $p^{-n}\Z/\Z$ has $p^{n}$ elements and contains many proper subgroups (e.g. $\frac{1}{p}\Z/\Z\subset p^{-2}\Z/\Z$ is not of the form $p^{-m}\Z/\Z$ for $m\ge 2$; more generally $\frac{1}{p^{n}}\Z/\Z$ has subgroups of order $p^{j}$ for every $j\le n$). The correct statement is that the subgroups form the set $\{p^{-n}\Z/\Z\}_{n\ge 0}$ together with $0$, i.e. a chain, but each $p^{-n}\Z/\Z$ is a finite cyclic group with its own subgroups, so the phrase 'the chain only' misdescribes the subgroup lattice.
- **Proposed fix:** Replace the parenthetical with: '（部分群は $0$ と $p^{-n}\Z/\Z$ ($n\ge 0$) からなる鎖をなし、降鎖 $p^{-1}\Z/\Z\supset p^{-2}\Z/\Z\supset\cdots$ は止まらないが、各 $p^{-n}\Z/\Z$ は有限群で降鎖条件をみたすので全体としてアルティン加群。一方 $p^{-n}\Z/\Z$ は有限生成でないのでネーターでない。）'.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Hilbert basis theorem hypcheck overstates use of DC
- **Category:** Supplement/remark error
- **Location:** ring:hilbert-basis / hypcheck
- **Detail:** The hypcheck says that because Noetherian is defined by the ascending chain condition, invoking finite generation (\ref{ring:noetherian-module.3}) 'goes through 1⇒3 which uses DC'. But the implication 3⇒1 (finitely generated ⇒ ACC) is explicitly stated in the hypcheck of \ref{ring:noetherian-module} to use no choice, and only 1⇒2 uses DC. To obtain finite generation from the ACC one uses 1⇒2 (maximal condition, DC) then 2⇒3 (no choice), not 1⇒3. So the remark misidentifies which direction needs DC; the conclusion that DC is used is right but the stated reason ('1⇒3') is wrong.
- **Proposed fix:** Rewrite as: '有限生成性（\ref{ring:noetherian-module}.3）を昇鎖条件から導くには 1⇒2（極大条件、DC を使う）と 2⇒3（選択公理不要）を経由する。3⇒1 自体は選択公理を使わない。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Akizuki-Hopkins hypcheck: nilpotency needs more than minimal condition
- **Category:** Supplement/remark error
- **Location:** ring:akizuki-hopkins / hypcheck
- **Detail:** The hypcheck claims 'the argument for nilpotency itself uses only the minimal condition, i.e. DC'. But Step 3 uses that $\mathrm{nil}(A)=\mathrm{rad}(A)$ (via \ref{ring:nilradical}, which uses AC) to know $N=\mathrm{nil}(A)$ is the radical, and it also uses that $N$ is finitely generated (to take a common exponent $e$). The nilpotency of the nilradical of an Artinian ring is not derivable from the minimal condition alone in the way stated; the remark is imprecise about what is choice-free.
- **Proposed fix:** Replace with: '冪零性の議論（Step 3 の降鎖と極小元の議論）は極小条件（DC）で足りるが、$\mathrm{nil}(A)=\mathrm{rad}(A)$ を同定する箇所と $N$ の有限生成性は別に必要である。'
- **Reported:** 2026-10-28 (10fede1)
