# Verification tracker: `02-algebra/03-commutative-algebra/03-homological-methods/04-regular-ufd.html`

<!-- source: 02-algebra/03-commutative-algebra/03-homological-methods/04-regular-ufd.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorem and the four lemmas are logically sound: Nagata's criterion, the locally-free-implies-projective lemma, the stably-free lemma and the determinant argument for stably free ideals are correctly applied, and the induction in the Auslander–Buchsbaum proof is valid. The only genuine problem is in the supplement, which misdescribes the geometry: it claims the height-1 prime $\mathfrak{p}=(x,z)$ is 'not defined by one equation' (it is a Weil divisor, just not Cartier) and identifies $(x)$ with the symbolic square $\mathfrak{p}^{(2)}$, which is false since $\mathfrak{p}^{(2)}=\mathfrak{p}^{2}=(x^{2},xz,z^{2})$. The hypcheck counterexample and the PID power-series proposition check out.

## Issues

### ISSUE-0001 [Open] Supplement misidentifies the non-Cartier divisor and the role of (x)
- **Category:** Supplement/remark error
- **Location:** supplement (ring:sec-ru-power-series)
- **Detail:** The supplement says the line $x=z=0$ (i.e. $\mathfrak{p}$) is not defined by one equation, but that "$\mathfrak{p}^{(2)}$ に相当する $(x)$" is defined by the single equation $x=0$. This is wrong on two counts. (1) The prime $\mathfrak{p}=(x,z)$ is a height-1 prime of the 2-dimensional ring $A$, hence has codimension 1, so it IS a divisor (Weil divisor) on $\operatorname{Spec}A$; the correct statement is that it is a Weil divisor that is not Cartier (not locally principal), not that it is "not defined by one equation" in the sense of not being a divisor. (2) The ideal $(x)$ is not the symbolic square $\mathfrak{p}^{(2)}$; indeed $\mathfrak{p}^{(2)}=\mathfrak{p}^{2}=(x^{2},xz,z^{2})$ (since $\mathfrak{p}$ is prime, $\mathfrak{p}^{(2)}=\mathfrak{p}^{2}$), and $(x)\neq\mathfrak{p}^{(2)}$. Moreover $(x)$ is not $\mathfrak{p}$-primary and its zero locus is the divisor $\{x=0\}$, which is a different (Cartier) divisor, not "$\mathfrak{p}^{(2)}$". The parenthetical "$x=0$ の上では $z^{2}=0$" describes the non-reduced structure of the divisor $\{x=0\}$ (where $z^{2}=xy$ becomes $z^{2}=0$), which is unrelated to $\mathfrak{p}^{(2)}$.
- **Proposed fix:** Replace the last sentence with: "問題の錐 $z^{2}=xy$ では、高さ 1 の素イデアル $\mathfrak{p}=(x,z)$ はヴェイユ因子を与えるが、局所的に単項でない（Step 3）のでカルティエ因子ではない。一方 $(x)$ は単項イデアルで定まるカルティエ因子 $\{x=0\}$ を与える（この因子の上では $z^{2}=0$ となり、$\{x=0\}$ は被約でない）。"
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Hypcheck counterexample: k[[x,y,z]]/(z^2-xy) is not a local domain of the stated kind / claim about UFD is fine but 'CM な局所整域' needs the ring to be a domain which holds; however the example is 2-dimensional and the parenthetical is correct—re-examine
- **Category:** Supplement/remark error
- **Location:** hypcheck, first bullet
- **Detail:** The hypcheck states that $k[[x,y,z]]/(z^{2}-xy)$ is a Cohen–Macaulay local domain that is not a UFD, used to show regularity cannot be dropped. This is correct (it is a 2-dimensional CM normal?—actually it is not normal, but it is a domain and CM, and not a UFD as shown in the problem). No error here; the example is valid. (No issue.)
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
