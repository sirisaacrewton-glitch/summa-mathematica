# Verification tracker: `04-analysis/02-complex-analysis/03-global/05-analytic-continuation.html`

<!-- source: 04-analysis/02-complex-analysis/03-global/05-analytic-continuation.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Riemann surface of sqrt z is not a 2-fold cover of C\{0}
- **Category:** Supplement/remark error
- **Location:** cx:sec-ac-natural-boundary / supplement (層と被覆空間の言葉で)
- **Detail:** The supplement claims that the Riemann surface of $\sqrt z$ is a 2-fold covering. The Riemann surface of $\sqrt z$ is the germ space of $\sqrt z$, which is homeomorphic to $\C\setminus\{0\}$ itself (the map germ $\mapsto$ value is a homeomorphism), and the natural projection to $\C\setminus\{0\}$ is the identity, i.e. a 1-fold (homeomorphic) cover, not a 2-fold cover. The 2-to-1 map $w\mapsto w^{2}$ is the map from the Riemann surface to $\C\setminus\{0\}$ composed with squaring, not the covering projection of the etale space. So the statement '2重被覆' is false as a description of the etale space over $\C\setminus\{0\}$. (The Log surface being the universal cover of $\C\setminus\{0\}$ is correct.)
- **Proposed fix:** Replace with: 「$\operatorname{Log}$ のリーマン面は $\C\setminus\{0\}$ の普遍被覆（無限巡回被覆）であり、$\sqrt z$ のリーマン面は $\C\setminus\{0\}$ 自身と同相で、射影は同相写像（1重被覆）になる。2価性は写像 $w\mapsto w^{2}$ を通して現れる。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Hadamard gap theorem statement imprecise
- **Category:** Supplement/remark error
- **Location:** cx:sec-ac-natural-boundary / supplement (類似の定理)
- **Detail:** The supplement states Hadamard's gap theorem as: a power series whose nonzero-coefficient exponents have gaps bounded below by a fixed ratio has its circle of convergence as a natural boundary. The standard Hadamard gap theorem requires the gap condition $n_{k+1}/n_{k} \ge q > 1$ (a fixed ratio strictly greater than 1) AND that the radius of convergence be finite (here 1). The phrase '一定の比以上で広がる' is acceptable if it means ratio $\ge q>1$, but the statement omits the essential requirement that the radius of convergence is finite/nonzero; without it (e.g. an entire lacunary series) there is no circle of convergence to be a natural boundary. Also the example $\sum z^{2^{n}}$ has ratio $2$, consistent, but the general statement as written is missing the finite-radius hypothesis.
- **Proposed fix:** State: 「収束半径 $R$ が $0<R<\infty$ で、係数が $0$ でない冪の指数 $n_{k}$ が $n_{k+1}/n_{k}\ge q>1$（ある定数 $q$）を満たす冪級数は、収束円 $|z|=R$ を自然境界にもつ（アダマールの間隙定理）。」
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Hypcheck counterexample: paths through origin and homotopy in C
- **Category:** Supplement/remark error
- **Location:** cx:monodromy / hypcheck
- **Detail:** The hypcheck says: in $U=\C$, $\varphi=[\operatorname{Log}]_{1}$, the unit circle path $\gamma_{0}$ based at 1 and the constant path $\gamma_{1}$ are homotopic in $\C$ (via a path through the origin), but the terminal germs differ. This is correct as a statement that the hypothesis 'continuable along every $\gamma_{s}$' cannot be dropped: the homotopy exists in $\C$ (which is simply connected), and the failure is precisely that the intermediate paths passing through 0 are not continuable. However, the parenthetical '(原点を通る道を経由して)' is slightly misleading: a homotopy between the circle and the constant path in $\C$ need not pass through the origin at the level of the paths themselves being continuable; the point is that some intermediate path in any such homotopy must pass through 0. The claim is essentially correct, but the wording could be read as saying the homotopy is 'via a path through the origin' rather than 'some intermediate path necessarily passes through the origin'. This is a minor imprecision, not a mathematical error.
- **Proposed fix:** Clarify: 「…ホモトープである（ただしそのホモトピーの途中には原点を通る道が必ず現れ、その道に沿っては接続できない）。」
- **Reported:** 2026-10-28 (10fede1)
