# Verification tracker: `01-foundations/03-computation/04-complexity/10-interactive-proofs.html`

<!-- source: 01-foundations/03-computation/04-complexity/10-interactive-proofs.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 048145a, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 1

## Summary of the last run

All five previously reported issues were re-checked: ISSUE-0005 is correctly rebutted (Pratt certificates are polynomial-time verifiable), while ISSUE-0001 through ISSUE-0004 remain valid because the supplement text is unchanged. A careful pass over the definitions, the GNI protocol, the IP⊆PSPACE recurrence, the arithmetization/TQBF∈IP proof, Shamir's theorem, and the two problems found no additional genuine logical, hypothesis, link, or factual errors; the remaining side remarks (NP⊆IP, BPP⊆IP, the arithmetication metaphor, the degree-bound hypcheck) are correct as stated.

## Issues

### ISSUE-0001 [Open] 公開硬貨で IP は変わらないという記述は誤り
- **Category:** Supplement/remark error
- **Location:** supplement「前提を変えると」
- **Detail:** 公開硬貨（public-coin）の対話証明系は Goldwasser–Sipser により定義されたが、公開硬貨で得られるクラスは IP と等しいとは限らない。実際 Goldwasser–Sipser は private-coin の IP を導入し、公開硬貨では（当時）グラフ非同型すら扱えないことを示した。公開硬貨で IP が変わらない（AM = IP）ことは後に Lund–Fortnow–Karloff–Nisan によって示された結果であり、Goldwasser–Sipser の帰結ではない。
- **Proposed fix:** 「検証者の乱数を証明者に見せる（公開硬貨）制限をしても IP は変わらない（これは Goldwasser–Sipser が導入した公開硬貨モデルに対し、後に Lund–Fortnow–Karloff–Nisan が AM = IP を示したもの）」。
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still says public coins do not change IP and attributes this to Goldwasser–Sipser; the correct attribution is Goldwasser–Sipser for private-coin IP and later work (Goldwasser–Sipser/Babai for AM, and the AM=IP result) for the public-coin collapse, so the statement as written remains inaccurate.

### ISSUE-0002 [Open] MIP = NEXP の帰属と PCP 定理への接続の不正確さ
- **Category:** Supplement/remark error
- **Location:** supplement「前提を変えると」
- **Detail:** MIP = NEXP は Babai–Fortnow–Lund で正しいが、「後者（MIP = NEXP）が PCP 定理につながる」という記述は不正確である。PCP 定理（Arora–Safra, Arora–Lund–Motwani–Sudan）は NP の証明検証に関する定理で、MIP = NEXP から直接導かれるものではない（両者は関連するが、系として述べるのは言い過ぎ）。
- **Proposed fix:** 「MIP = NEXP（Babai–Fortnow–Lund）が知られている。PCP 定理（NP の証明は定数個のビットを乱数で読むだけで検査できる）はこれとは別個の（関連するが独立な）結果である」。
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still asserts that MIP=NEXP 'leads to' the PCP theorem, which overstates the connection; PCP is not a direct corollary of MIP=NEXP.

### ISSUE-0003 [Open] グラフ非同型の証明系がゼロ知識の典型例であるという記述
- **Category:** Supplement/remark error
- **Location:** supplement「似た定理」
- **Detail:** 本ページの GNI の証明系（
- **Proposed fix:** 「グラフ非同型にはゼロ知識証明も知られており（Goldreich–Micali–Wigderson）、検証者が挑戦を出す型の代表例である。ただし本ページの手続き自体がゼロ知識であることを示すには別の議論（シミュレータ）が必要である」。
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still calls the GNI protocol a typical example of zero-knowledge proof; the protocol as presented here is not zero-knowledge (the verifier learns the challenge index i), so the claim remains misleading.

### ISSUE-0004 [Open] IP ⊆ PSPACE と AP ⊆ PSPACE の「和 vs 最大」の対応の不正確さ
- **Category:** Supplement/remark error
- **Location:** supplement「似た定理」
- **Detail:** 「検証者の乱数の節点では最大の代わりに和（平均）をとる点だけが違う」という記述は不正確である。IP ⊆ PSPACE の再帰では、証明者の節点が最大、検証者の（乱数で分岐する）節点が和であり、AP ⊆ PSPACE では存在節点が最大（OR）、全称節点が最小（AND）に対応する。対応を述べるなら「証明者の節点＝存在（最大）、検証者の乱数節点＝和」と両方書くべきで、「最大の代わりに和」だけでは誤解を招く。
- **Proposed fix:** 「証明者の節点では最大（存在に対応）、検証者の乱数で分岐する節点では和（平均）をとる点が、AP ⊆ PSPACE のゲーム木評価（存在＝最大、全称＝最小）との違いである」。
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Open — The supplement still describes the only difference from AP⊆PSPACE as replacing 'max' by 'sum' at the verifier's random nodes, omitting that the prover's nodes are max (existential) and the verifier's message nodes are sum; the description remains imprecise.

### ISSUE-0005 [Ignored: Valid Rebuttal] 問題の解答におけるプラットの証明書と素数探索の記述
- **Category:** Unsupported fact
- **Location:** comp:prob-ip-sum-check / solution
- **Detail:** 「プラットの証明書。多項式時間で検査できることが知られている」という記述は、素数性の証明書（Pratt certificate）の検査が多項式時間でできるという主張だが、Pratt certificate の検査は一般には多項式時間とは限らない（原始根の存在確認や因数分解を含むため）。素数性が P に属すること（AKS）や、素数性が IP に属すること（Goldwasser–Kilian, Adleman–Huang）は別の結果である。解答の枠組みで素数 q を検証者に検査させるには、これらの結果を正しく引用すべき。
- **Proposed fix:** 「素数性は IP に属する（Goldwasser–Kilian, Adleman–Huang）ので、証明者が q とその素数性の対話証明を送り、検証者が検査すればよい」に修正する。
- **Reported:** 2026-10-28 (8ccef3d)
- **History:** 2026-10-28 (048145a): Ignored: Valid Rebuttal — The rebuttal is correct: Pratt certificates (with recursively certified factorization of p−1) are verifiable in polynomial time, establishing PRIMES∈NP; the solution's claim is accurate.
**Opus Rebuttal:** Pratt certificates are verifiable in polynomial time: that is Pratt's 1975 theorem showing PRIMES $\in$ NP (the certificate includes the factorization of $p-1$, recursively certified, of total size $O(\log^{2}p)$). The claim is correct.
