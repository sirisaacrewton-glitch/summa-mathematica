# Verification tracker: `02-algebra/04-associative-rings/02-noncommutative-rings/03-wedderburn-artin.html`

<!-- source: 02-algebra/04-associative-rings/02-noncommutative-rings/03-wedderburn-artin.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

(none)

## Issues

### ISSUE-0001 [Open] Morita equivalence direction stated incorrectly
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** The supplement says "$M_{n}(D)$ と $D$ の加群の圏は同値" (the module category of $M_{n}(D)$ is equivalent to that of $D$). This is false: $M_{n}(D)$-Mod is equivalent to $D$-Mod (via the column module $D^{n}$), not to $D$-Mod. The category of $D$-modules is equivalent to the category of modules over $M_{n}(D^{\mathrm{op}})$, and $M_{n}(D)$-Mod is equivalent to $D$-Mod only through the simple module $D^{n}$ with endomorphism ring $D^{\mathrm{op}}$. As written, the claim that $M_{n}(D)$-Mod $\simeq$ $D$-Mod is wrong (e.g. $M_{n}(D)$-Mod $\simeq$ $D^{\mathrm{op}}$-Mod, and $D$-Mod $\simeq$ $D^{\mathrm{op}}$-Mod only when $D$ is commutative).
- **Proposed fix:** The theorem can be rephrased as: the module category of a semisimple ring $R=\prod_{i}M_{n_{i}}(D_{i})$ is equivalent to the product of the categories of $D_{i}$-vector spaces (Morita equivalence: $M_{n}(D)$-Mod is equivalent to $D$-Mod via the column module $D^{n}$, whose endomorphism ring is $D^{\mathrm{op}}$).
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Semisimple algebra over non-algebraically-closed field: endomorphism ring can be larger
- **Category:** Supplement/remark error
- **Location:** solution / mod:prob-wa-c-algebra
- **Detail:** The solution states "代数閉体でない体上では自己準同型環が係数体より大きくなりうる（$V_{1}$）". For $V_{1}=\mathbb{C}$ over $R=\mathbb{C}\times M_{2}(\mathbb{R})$, the endomorphism ring is $\mathbb{C}^{\mathrm{op}}=\mathbb{C}$, which equals the coefficient field $\mathbb{C}$ (the base field is $\mathbb{R}$ here, but the simple module is a $\mathbb{C}$-vector space). The remark is imprecise: the endomorphism ring of a simple module over a semisimple algebra is a division ring containing the base field, and it can be strictly larger than the base field (e.g. $\mathbb{H}$ over $\mathbb{R}$), but the example $V_{1}$ does not illustrate this since $\End(V_{1})=\mathbb{C}$ is exactly the field acting, not larger than the relevant coefficient field.
- **Proposed fix:** Replace with: "Over a field that is not algebraically closed, the endomorphism ring of a simple module can be a division ring strictly larger than the base field (e.g. $\mathbb{H}$ as a simple module over itself over $\mathbb{R}$); here $\End(V_{1})=\mathbb{C}$ equals the field $\mathbb{C}$ acting on $V_{1}$."
- **Reported:** 2026-10-28 (8ccef3d)
