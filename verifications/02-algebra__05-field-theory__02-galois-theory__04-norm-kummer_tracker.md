# Verification tracker: `02-algebra/05-field-theory/02-galois-theory/04-norm-kummer.html`

<!-- source: 02-algebra/05-field-theory/02-galois-theory/04-norm-kummer.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The proofs of the norm/trace embedding formula, transitivity, Hilbert 90 (both forms), the cyclic corollary, Kummer's theorem and Artin–Schreier are sound, and the examples check out. The main genuine problem is in the supplement's 'higher viewpoint' paragraph, which incorrectly identifies $H^{1}(G_{K},\mu_{n})$ with $\Hom(G_{K},\mu_{n})$ without the hypothesis $\mu_{n}\subset K$ and misdescribes how the Kummer pairing arises from the long exact sequence. A second, minor imprecision concerns the computational remark about finding $y$ in Hilbert 90.

## Issues

### ISSUE-0001 [Open] Incorrect claim that the Kummer pairing comes from the long exact sequence via Hilbert 90
- **Category:** Supplement/remark error
- **Location:** supplement / 高い視点
- **Detail:** The supplement claims that the Kummer pairing is obtained from the long exact sequence of Galois cohomology of $1\to\mu_{n}\to\bar K^{\times}\xrightarrow{n}\bar K^{\times}\to1$ together with Hilbert 90, giving $K^{\times}/K^{\times n}\cong H^{1}(G_{K},\mu_{n})=\Hom(G_{K},\mu_{n})$. This is wrong: the connecting map of the long exact sequence gives $K^{\times}/K^{\times n}\cong H^{1}(G_{K},\mu_{n})$, but $H^{1}(G_{K},\mu_{n})$ is *not* $\Hom(G_{K},\mu_{n})$ in general (that identification would require $\mu_{n}$ to be trivial as a $G_{K}$-module, i.e. $\mu_{n}\subset K$; and even then $H^{1}(G_{K},\mu_{n})=\Hom(G_{K},\mu_{n})$ only for the continuous homomorphisms, and the Kummer pairing is between $G_{K}$ and $K^{\times}/K^{\times n}$, not an identification of the latter with $\Hom(G_{K},\mu_{n})$). The equality $H^{1}(G_{K},\mu_{n})=\Hom(G_{K},\mu_{n})$ is stated without the hypothesis $\mu_{n}\subset K$ and is false in general (e.g. $K=\Q$, $n=3$: $H^{1}(G_{\Q},\mu_{3})$ is not $\Hom(G_{\Q},\mu_{3})$).
- **Proposed fix:** Replace with: "The Kummer sequence $1\to\mu_{n}\to\bar K^{\times}\xrightarrow{n}\bar K^{\times}\to1$ yields, via Hilbert 90 ($H^{1}(G_{K},\bar K^{\times})=0$), the connecting isomorphism $K^{\times}/K^{\times n}\cong H^{1}(G_{K},\mu_{n})$. When $\mu_{n}\subset K$ (so $\mu_{n}$ is a trivial $G_{K}$-module), this becomes $H^{1}(G_{K},\mu_{n})=\Hom_{\mathrm{cont}}(G_{K},\mu_{n})$, and the Kummer pairing is the perfect pairing $G_{K}\times K^{\times}/K^{\times n}\to\mu_{n}$ obtained from this identification."
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Claim that Hilbert 90's y can be found by trying basis elements is imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 計算の観点
- **Detail:** The supplement says the $y$ of Hilbert 90 can be found by trying basis elements $z$ in order, since $y_{z}=\sum_{\tau}a_{\tau}\tau(z)$ is $K$-linear in $z$ so some basis element gives $y_{z}\neq0$. This is correct as far as it goes (the map $z\mapsto y_{z}$ is $K$-linear and nonzero, hence nonzero on some basis element), so the statement is essentially valid. However, the phrase "デデキントの補題の証明どおり" (as in the proof of Dedekind's lemma) is misleading: Dedekind's lemma is used to show the map is nonzero, not to produce the element. This is a minor imprecision, not a mathematical error; no correction strictly required.
- **Proposed fix:** Optionally clarify: "Since $z\mapsto y_{z}$ is a nonzero $K$-linear map (nonzero by Dedekind's lemma), it is nonzero on at least one element of any $K$-basis, so $y$ is found after finitely many trials."
- **Reported:** 2026-10-28 (10fede1)
