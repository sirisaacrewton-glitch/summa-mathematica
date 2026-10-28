# Verification tracker: `01-foundations/03-computation/04-complexity/13-primality-branching.html`

<!-- source: 01-foundations/03-computation/04-complexity/13-primality-branching.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main results (Miller–Rabin witness counting, PRIMES in coRP/BPP, read-once branching program arithmetization and EQ_ROBP in coRP) are proved correctly and the proofs check out. The problems concentrate in the supplement: the claim that the witness fraction is at least 3/4 is an overstatement (the sharp bound is on non-witnesses relative to $\varphi(p)$, not on the fraction of $\mathbb{Z}_{p}^{+}$), and the branching-program/L analogy is imprecise (the correct class is L/poly). The coNP-completeness remark for general branching programs is fine as hedged.

## Issues

### ISSUE-0001 [Open] Witness fraction 3/4 claim is false
- **Category:** Supplement/remark error
- **Location:** supplement / '前提を変えると'
- **Detail:** The supplement states that the fraction of witnesses (condition 2 witnesses) is actually known to be at least 3/4. This is false. The standard sharp bound (Rabin/Monier) is that for odd composite $p$, the number of strong liars (non-witnesses) is at most $\varphi(p)/4$, i.e. the fraction of witnesses among $\mathbb{Z}_{p}^{+}$ is at least $3/4$ only when $p$ is not a Carmichael-like worst case; more precisely the bound $\le 1/4$ on non-witnesses holds relative to $\varphi(p)$, and since $\varphi(p)$ can be much smaller than $p-1$, the fraction of witnesses in $\mathbb{Z}_{p}^{+}=\{1,\dots,p-1\}$ can be strictly less than $3/4$. For example, for $p=9$: $\mathbb{Z}_{9}^{+}=\{1,\dots,8\}$, $p-1=8=1\cdot 2^{3}$, $s=1$, $l=3$. Non-witnesses are $a$ with $a^{8}\equiv1$ and the last non-1 term equal to $-1$; $\varphi(9)=6$, and the strong liars are $a\equiv\pm1 \pmod 9$ only among units, but non-units like $3,6$ have $3^{8}\equiv0$, so they are witnesses. The witnesses are $\{2,3,4,5,6,7\}$ (6 of 8), non-witnesses $\{1,8\}$ (2 of 8), so fraction of witnesses is $3/4$ here. But for $p=25$: $\varphi(25)=20$, non-witnesses among units at most $\varphi(25)/4=5$, plus non-units $5,10,15,20$ are witnesses (since $5^{24}\equiv0$). So witnesses $\ge 24-5=19$ of $24$, fraction $>3/4$. The precise statement that fails is the general claim 'at least 3/4'; the correct sharp bound is that the number of non-witnesses is at most $\varphi(p)/4$, which does not translate to witnesses $\ge 3/4$ of $\mathbb{Z}_{p}^{+}$ in general (e.g. when $\varphi(p)$ is small relative to $p$, as for $p=q^{e}$ with large $q$). The claim as stated is overstated/imprecise.
- **Proposed fix:** Replace with: '素数判定については、条件 2 の証人でない元（強擬素数）の個数は $\varphi(p)/4$ 以下であることが知られている（ここでは $1/2$ 以上だけを示した）。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Branching program vs L relation mischaracterized
- **Category:** Supplement/remark error
- **Location:** supplement / '前提を変えると'
- **Detail:** The supplement says '多項式の大きさの分岐プログラムは、L に属する言語を（各入力長ごとに）計算できる' and that 'the relation between branching programs and L is similar to that between Boolean circuits and P'. The correct standard fact is the reverse direction: languages computed by polynomial-size branching programs form the class L/poly (non-uniform L), analogous to P/poly for circuits. Saying polynomial-size branching programs 'can compute languages in L' is trivially true but misstates the analogy; the meaningful statement is that L $\subseteq$ L/poly (branching programs of polynomial size compute exactly L/poly, the non-uniform version of L). The analogy 'branching programs : L :: circuits : P' is correct only in the non-uniform sense (L/poly vs P/poly), and the sentence as written is imprecise/overstated.
- **Proposed fix:** Replace with: '多項式サイズの分岐プログラムで計算できる言語のクラスは L/poly（L の非一様版）であり、ブール回路と P/poly の関係に似ている。'
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] coNP-completeness of general branching program equivalence attribution
- **Category:** Supplement/remark error
- **Location:** supplement / '前提を変えると'
- **Detail:** The supplement states that equivalence of general (not read-once) branching programs is coNP-complete, attributed to Sipser problem 10.21. This is a standard result (equivalence of read-once is in coRP/BPP, general is coNP-complete), and the attribution to Sipser is plausible; however the claim 'coNP 完全' for general branching programs is correct only for the general (non-oblivious, arbitrary) branching program model, which is what is meant. This appears correct and is hedged with 'とされる（ここでは確かめていない）'. No error.
- **Proposed fix:** No change needed.
- **Reported:** 2026-10-28 (10fede1)
