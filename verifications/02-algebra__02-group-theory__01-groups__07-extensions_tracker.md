# Verification tracker: `02-algebra/02-group-theory/01-groups/07-extensions.html`

<!-- source: 02-algebra/02-group-theory/01-groups/07-extensions.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Sylow p-subgroup application: commutativity of P is not automatic
- **Category:** Supplement/remark error
- **Location:** supplement / 応用
- **Detail:** The supplement says: "シロー $p$ 部分群 $P$ が可換で正規なら、$G\cong P\rtimes(G/P)$。例えば位数 $pq$ の群（\ref{grp:order-pq}）が半直積になることは、この定理からもわかる。" The first sentence is fine (P abelian normal, gcd(|P|,(G:P))=1 since P is a Sylow p-subgroup). But the example is imprecise: for a group of order pq, a Sylow p-subgroup is abelian only when it is cyclic of prime order p (which it is, since |P|=p), so that part is fine. However the claim "位数 pq の群が半直積になる" needs the Sylow p-subgroup (or q-subgroup) to be normal, which is guaranteed by Sylow's theorem (n_p ≡ 1 mod p, n_p | q), not merely by Schur–Zassenhaus. As stated, the sentence suggests Schur–Zassenhaus alone yields the semidirect decomposition, which is misleading: the theorem requires a normal abelian subgroup as hypothesis. The normality must be supplied separately.
- **Proposed fix:** For a group of order $pq$ with $p<q$ primes, Sylow's theorem gives a normal Sylow $q$-subgroup $Q$ (since $n_{q}\equiv 1\pmod q$ and $n_{q}\mid p$, so $n_{q}=1$). Then $Q$ is abelian and $\gcd(q,p)=1$, so the abelian Schur–Zassenhaus theorem applies to give $G\cong Q\rtimes P$ with $P$ a Sylow $p$-subgroup. (The normality of $Q$ comes from Sylow, not from Schur–Zassenhaus.)
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] H^2 vanishing requires trivial action / correct coefficient module
- **Category:** Supplement/remark error
- **Location:** supplement / コホモロジーとの関係
- **Detail:** The supplement states: "$\abs{G/N}$ が $\abs{N}$ と互いに素なら $H^{2}(G/N,N)=0$ となる". This is only true when the action of $G/N$ on $N$ is trivial (or more precisely, the vanishing of $H^{2}(Q,A)$ for a $Q$-module $A$ with $|Q|$ invertible in $A$ requires that $A$ be a module over $\Z[1/|Q|]$, which holds when $|A|$ is coprime to $|Q|$ AND the action is through automorphisms of order dividing... actually the standard statement is: if $|Q|$ is invertible on $A$ (i.e. multiplication by $|Q|$ is an automorphism of $A$), then $H^{n}(Q,A)=0$ for $n\ge 1$). Here $N$ is abelian and $G/N$ acts on $N$ by conjugation; since $|N|$ is coprime to $|G/N|$, multiplication by $m=|G/N|$ is indeed an automorphism of $N$ (as shown in Step 4), so $H^{2}(G/N,N)=0$ does hold. So the statement is actually correct given the coprimality. However, the phrase "$G/N$ の $N$ への作用を固定したもの" is fine. The claim is essentially correct. No issue.
- **Proposed fix:** No change needed; the vanishing of $H^{2}(G/N,N)$ follows because multiplication by $m=|G/N|$ is an automorphism of $N$ when $\gcd(m,|N|)=1$.
- **Reported:** 2026-10-28 (10fede1)
