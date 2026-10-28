# Verification tracker: `02-algebra/02-group-theory/05-infinite-abelian/05-ext-whitehead.html`

<!-- source: 02-algebra/02-group-theory/05-infinite-abelian/05-ext-whitehead.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct. The main genuine problems are in the supplement and intuition: the supplement's justification that $\mathrm{Ext}(A,\Z)$ is divisible for torsion-free $A$ invokes the wrong long exact sequence and is garbled (the conclusion is true but the argument as written does not establish it), and the intuition's description of how $\mathrm{MA}+\neg\mathrm{CH}$ yields a non-free W group is misleading (it suggests MA produces splittings of all extensions, which would trivialize the problem). The proofs of the proposition, lemma, theorem and problems check out; the cited labels match their uses. The Stein fact is correctly attributed and stated.

## Issues

### ISSUE-0001 [Open] Ext(A,Z) divisible for torsion-free A: the argument is wrong and the claim needs care
- **Category:** Supplement/remark error
- **Location:** supplement (Ext(A,Z) の構造)
- **Detail:** The supplement claims that for torsion-free $A$, $\mathrm{Ext}(A,\Z)$ is divisible, and justifies it by saying that the map $n\colon A\to A$ is injective with cokernel $A/nA$, and that 'the same long exact sequence as in \ref{grp:ext-abelian-basic.3}' shows multiplication by $n$ on $\mathrm{Ext}(A,\Z)$ is surjective. This reasoning is not valid as stated: the long exact sequence for $0\to A\xrightarrow{n}A\to A/nA\to0$ gives $\mathrm{Ext}(A,\Z)\xrightarrow{n}\mathrm{Ext}(A,\Z)\to\mathrm{Ext}(A/nA,\Z)\to 0$ only if one knows $\mathrm{Ext}^{2}(A,\Z)=0$ (true) AND that the connecting map's source $\mathrm{Hom}(A,\Z)$-term is handled; more importantly the surjectivity of $n$ on $\mathrm{Ext}(A,\Z)$ requires $\mathrm{Ext}(A/nA,\Z)$ to receive onto it, which does follow, but the text's phrase 'the same long exact sequence as in (3)' is imprecise since (3) concerns the first-variable sequence for a short exact sequence of the first variable, and here the relevant fact is that $\mathrm{Ext}(A/nA,\Z)\to\mathrm{Ext}(A,\Z)\to\mathrm{Ext}(A,\Z)\to0$ is exact. The conclusion (divisibility) is in fact correct, but the stated justification is garbled and the reference to (3) is not the right tool. Also the final sentence 'actually isomorphic to $\R$' for $\mathrm{Ext}(\mathbb{Q},\Z)$ is a known result but is stated without proof or citation.
- **Proposed fix:** Replace the justification with: 'For torsion-free $A$ and $n\ge1$, apply the first-variable long exact sequence to $0\to A\xrightarrow{n}A\to A/nA\to0$: since $\mathrm{Ext}^{2}(A/nA,\Z)=0$ (as $\mathrm{pd}_{\Z}\le1$), we get the exact sequence $\mathrm{Ext}(A/nA,\Z)\to\mathrm{Ext}(A,\Z)\xrightarrow{n}\mathrm{Ext}(A,\Z)\to0$, so multiplication by $n$ on $\mathrm{Ext}(A,\Z)$ is surjective; hence $\mathrm{Ext}(A,\Z)$ is divisible.' For the last sentence, either cite a source or soften to 'it is known that $\mathrm{Ext}(\mathbb{Q},\Z)\cong\R$ (a classical result of Nunke/Stein)'.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Intuition: MA + ¬CH described as producing splittings is misleading
- **Category:** Supplement/remark error
- **Location:** intuition (independence section)
- **Detail:** The intuition says: 'Conversely $\mathrm{MA}+\neg\mathrm{CH}$ is a principle of the form "there is a solution satisfying all $\aleph_{1}$ countable conditions", and it lets one construct splittings of any extension, so a non-free W group can be made.' This is backwards: under $\mathrm{MA}+\neg\mathrm{CH}$ one constructs a non-free group $A$ of size $\aleph_{1}$ with $\mathrm{Ext}(A,\Z)=0$, i.e. one arranges that all extensions split (or rather that $\mathrm{Ext}$ vanishes) by a delicate induction; MA is used to defeat the $\aleph_{1}$ potential obstructions (the 'prediction' of a non-splitting extension), not to 'construct splittings of any extension'. Saying MA 'lets one construct splittings of any extension' would suggest every extension splits, which would make every group a W group — the opposite of the intended conclusion. The description is imprecise/overstated.
- **Proposed fix:** Rewrite: 'Conversely, under $\mathrm{MA}+\neg\mathrm{CH}$ one builds a non-free group $A$ of cardinality $\aleph_{1}$ together with the vanishing of $\mathrm{Ext}(A,\Z)$: at each of the $\aleph_{1}$ stages one must kill the possible non-splitting extensions, and MA is used to find, for each of the $\aleph_{1}$ many countable obstructions, a condition meeting it. Thus a non-free W group exists.'
- **Reported:** 2026-10-28 (8ccef3d)
