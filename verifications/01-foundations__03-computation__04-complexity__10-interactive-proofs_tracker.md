# Verification tracker: `01-foundations/03-computation/04-complexity/10-interactive-proofs.html`

<!-- source: 01-foundations/03-computation/04-complexity/10-interactive-proofs.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main definitions, theorems and proofs (GNI ∈ IP, IP ⊆ PSPACE, TQBF ∈ IP via arithmetization, IP = PSPACE) are logically sound. The genuine problems concentrate in the supplement and in the problem solution: the attribution of the public-coin result to Goldwasser–Sipser is wrong (AM = IP is due to Lund–Fortnow–Karloff–Nisan), the claim that MIP = NEXP 'leads to' the PCP theorem is imprecise, the GNI protocol is overstated as a zero-knowledge example, the AP/PSPACE analogy is imprecise, and the Pratt-certificate claim in the #SAT solution is not justified as stated.

## Issues

### ISSUE-0001 [Open] 公開硬貨で IP は変わらないという記述は誤り
- **Category:** Supplement/remark error
- **Location:** supplement「前提を変えると」
- **Detail:** 公開硬貨（public-coin）の対話証明系は Goldwasser–Sipser により定義されたが、公開硬貨で得られるクラスは IP と等しいとは限らない。実際 Goldwasser–Sipser は private-coin の IP を導入し、公開硬貨では（当時）グラフ非同型すら扱えないことを示した。公開硬貨で IP が変わらない（AM = IP）ことは後に Lund–Fortnow–Karloff–Nisan によって示された結果であり、Goldwasser–Sipser の帰結ではない。
- **Proposed fix:** 「検証者の乱数を証明者に見せる（公開硬貨）制限をしても IP は変わらない（これは Goldwasser–Sipser が導入した公開硬貨モデルに対し、後に Lund–Fortnow–Karloff–Nisan が AM = IP を示したもの）」。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] MIP = NEXP の帰属と PCP 定理への接続の不正確さ
- **Category:** Supplement/remark error
- **Location:** supplement「前提を変えると」
- **Detail:** MIP = NEXP は Babai–Fortnow–Lund で正しいが、「後者（MIP = NEXP）が PCP 定理につながる」という記述は不正確である。PCP 定理（Arora–Safra, Arora–Lund–Motwani–Sudan）は NP の証明検証に関する定理で、MIP = NEXP から直接導かれるものではない（両者は関連するが、系として述べるのは言い過ぎ）。
- **Proposed fix:** 「MIP = NEXP（Babai–Fortnow–Lund）が知られている。PCP 定理（NP の証明は定数個のビットを乱数で読むだけで検査できる）はこれとは別個の（関連するが独立な）結果である」。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] グラフ非同型の証明系がゼロ知識の典型例であるという記述
- **Category:** Supplement/remark error
- **Location:** supplement「似た定理」
- **Detail:** 本ページの GNI の証明系（ef{comp:gni-in-ip}）は検証者が挑戦を出す型だが、これはゼロ知識証明ではない。ゼロ知識性（検証者が「同型でない」以外何も学ばない）を示すにはシミュレータの構成が必要で、本ページの手続きはそのままでは zero-knowledge とは言えない。GNI のゼロ知識証明は別途構成される（Goldreich–Micali–Wigderson など）。「典型例でもある」は誇張。
- **Proposed fix:** 「グラフ非同型にはゼロ知識証明も知られており（Goldreich–Micali–Wigderson）、検証者が挑戦を出す型の代表例である。ただし本ページの手続き自体がゼロ知識であることを示すには別の議論（シミュレータ）が必要である」。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] IP ⊆ PSPACE と AP ⊆ PSPACE の「和 vs 最大」の対応の不正確さ
- **Category:** Supplement/remark error
- **Location:** supplement「似た定理」
- **Detail:** 「検証者の乱数の節点では最大の代わりに和（平均）をとる点だけが違う」という記述は不正確である。IP ⊆ PSPACE の再帰では、証明者の節点が最大、検証者の（乱数で分岐する）節点が和であり、AP ⊆ PSPACE では存在節点が最大（OR）、全称節点が最小（AND）に対応する。対応を述べるなら「証明者の節点＝存在（最大）、検証者の乱数節点＝和」と両方書くべきで、「最大の代わりに和」だけでは誤解を招く。
- **Proposed fix:** 「証明者の節点では最大（存在に対応）、検証者の乱数で分岐する節点では和（平均）をとる点が、AP ⊆ PSPACE のゲーム木評価（存在＝最大、全称＝最小）との違いである」。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0005 [Open] 問題の解答におけるプラットの証明書と素数探索の記述
- **Category:** Unsupported fact
- **Location:** comp:prob-ip-sum-check / solution
- **Detail:** 「プラットの証明書。多項式時間で検査できることが知られている」という記述は、素数性の証明書（Pratt certificate）の検査が多項式時間でできるという主張だが、Pratt certificate の検査は一般には多項式時間とは限らない（原始根の存在確認や因数分解を含むため）。素数性が P に属すること（AKS）や、素数性が IP に属すること（Goldwasser–Kilian, Adleman–Huang）は別の結果である。解答の枠組みで素数 q を検証者に検査させるには、これらの結果を正しく引用すべき。
- **Proposed fix:** 「素数性は IP に属する（Goldwasser–Kilian, Adleman–Huang）ので、証明者が q とその素数性の対話証明を送り、検証者が検査すればよい」に修正する。
- **Reported:** 2026-10-28 (8ccef3d)
