# Verification tracker: `02-algebra/05-field-theory/02-galois-theory/04-norm-kummer.html`

<!-- source: 02-algebra/05-field-theory/02-galois-theory/04-norm-kummer.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (norm/trace via embeddings, transitivity, Hilbert 90, Kummer theory, Artin–Schreier) is logically sound: hypotheses such as separability, Galois, char not dividing n, and zeta in K are used and verified correctly, and the cited labels match their use. The genuine problems are confined to the supplement/remark: the cohomological description of the Kummer pairing omits the trivial-action hypothesis needed for H^1(G_K, mu_n) = Hom(G_K, mu_n), and the historical attribution of 'Theorem 90' to the 1897 Zahlbericht is imprecise.

## Issues

### ISSUE-0001 [Open] Incorrect claim that the Kummer pairing is obtained from the long exact sequence
- **Category:** Supplement/remark error
- **Location:** supplement (高い視点)
- **Detail:** The supplement claims that the Kummer pairing / the isomorphism $K^{\times}/K^{\times n}\cong H^{1}(G_{K},\mu_{n})=\Hom(G_{K},\mu_{n})$ is obtained from the long exact sequence of $1\to\mu_{n}\to\bar K^{\times}\xrightarrow{n}\bar K^{\times}\to1$ together with Hilbert 90. This is wrong: the connecting map of that sequence gives $K^{\times}/K^{\times n}\cong H^{1}(G_{K},\mu_{n})$, but the identification $H^{1}(G_{K},\mu_{n})=\Hom(G_{K},\mu_{n})$ requires $G_{K}$ to act trivially on $\mu_{n}$, i.e. $\mu_{n}\subset K$ (the Kummer hypothesis). Without that hypothesis $H^{1}(G_{K},\mu_{n})$ is not $\Hom(G_{K},\mu_{n})$ in general. Also Hilbert 90 ($H^{1}(G_{K},\bar K^{\times})=0$) is used to make the connecting map an isomorphism, not to produce the $\Hom$ identification. The sentence as written overstates and misattributes the role of the hypotheses.
- **Proposed fix:** Under the standing hypothesis $\mu_{n}\subset K$ (so $G_{K}$ acts trivially on $\mu_{n}$), the Kummer sequence $1\to\mu_{n}\to\bar K^{\times}\xrightarrow{n}\bar K^{\times}\to1$ yields, via Hilbert 90 ($H^{1}(G_{K},\bar K^{\times})=0$), the isomorphism $K^{\times}/K^{\times n}\cong H^{1}(G_{K},\mu_{n})=\Hom(G_{K},\mu_{n})$; the triviality of the action is what makes the last identification valid.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Hilbert's theorem 90 is not in the 1897 Zahlbericht
- **Category:** Supplement/remark error
- **Location:** remark コホモロジーの言葉
- **Detail:** The remark says Hilbert's original paper is 'the 1897 number-theoretic report (Zahlbericht), Theorem 90'. The Zahlbericht is indeed 1897, but the numbering 'Theorem 90' comes from the later 1932 Teubner edition of the Zahlbericht (in Hilbert's Gesammelte Abhandlungen), not from the 1897 original. Attributing the label 'Theorem 90' to the 1897 report is historically imprecise.
- **Proposed fix:** Hilbert's original statement is in the Zahlbericht (1897); the numbering 'Theorem 90' comes from the 1932 Teubner edition of the Zahlbericht. It is the cyclic version stated below.
- **Reported:** 2026-10-28 (8ccef3d)
