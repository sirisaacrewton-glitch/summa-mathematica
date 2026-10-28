# Verification tracker: `02-algebra/02-group-theory/02-group-actions/03-burnside-counting.html`

<!-- source: 02-algebra/02-group-theory/02-group-actions/03-burnside-counting.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 3 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and proofs (Burnside's lemma, necklace and bracelet counts, Jordan's theorem, commuting probability, and the two problems) are logically sound. The genuine problems are confined to side remarks: the n=6,k=2 example misinterprets the necklace-bracelet difference and gives a 'mirror pair' that is actually a single necklace; the Burnside hypcheck gives a false justification for why faithfulness is unnecessary; and the Jordan hypcheck misleadingly implies the result fails for infinite X when only finiteness of G matters.

## Issues

### ISSUE-0001 [Open] Incorrect claim about the difference in the n=6,k=2 example
- **Category:** Supplement/remark error
- **Location:** example (after grp:bracelet-count)
- **Detail:** The example claims that the difference 14-13=1 means there is exactly one pair of mirror-image necklaces that are distinct as necklaces but coincide under reflection, and gives 白白黒白黒黒 and 白白黒黒白黒 as such a pair. This is false. The number of bracelets equals (N + number of reflection-fixed necklaces)/2, so the difference N - B equals half the number of necklaces fixed by some reflection, not the number of mirror pairs. For n=6,k=2 there are actually 2 necklaces fixed by a reflection (the all-white and all-black ones), giving difference 1, and the two colorings cited (白白黒白黒黒 and 白白黒黒白黒) are in fact the same necklace (one is a rotation of the other), so they do not even form a mirror pair.
- **Proposed fix:** The difference $N-B$ equals half the number of necklaces fixed by some reflection. For $n=6,k=2$ the reflection-fixed necklaces are exactly the two monochromatic ones (白白白白白白 and 黒黒黒黒黒黒), so $N-B=2/2=1$. (The two colorings 白白黒白黒黒 and 白白黒黒白黒 are rotations of each other and hence the same necklace.)
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Wrong reason given for why the faithful hypothesis is unnecessary
- **Category:** Supplement/remark error
- **Location:** grp:burnside-lemma / hypcheck
- **Detail:** The hypcheck says that if the action is not faithful, the kernel elements fix every point and 'the sum and |G| increase by the same factor'. This is not a valid argument: passing to a non-faithful action does not multiply |G| by anything, and the kernel elements contribute |X| each to the sum, not a uniform factor. The conclusion (faithfulness is not needed) is correct, but the stated justification is false.
- **Proposed fix:** The action need not be faithful: the proof of the lemma never uses faithfulness, and the identity $\sum_{x\in O}\abs{G_{x}}=\abs{G}$ holds for every orbit regardless of the kernel.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Misleading remark that the theorem fails for infinite groups/sets
- **Category:** Supplement/remark error
- **Location:** grp:jordan-derangement / hypcheck
- **Detail:** The hypcheck states that for infinite groups or infinite sets the statement 'can fail' (偽になりうる). This is misleading: Jordan's theorem (a transitive action of a finite group on a set with at least 2 points has a fixed-point-free element) does not require X to be finite; only the finiteness of G is needed. The remark suggests the finiteness of X is essential, which is not the case.
- **Proposed fix:** Only the finiteness of $G$ is needed; $X$ may be infinite. (The proof via Burnside's lemma uses $\abs{X/G}=1$ and $\sum_{g}\abs{X^{g}}=\abs{G}$, which is valid for infinite $X$ as long as $G$ is finite.)
- **Reported:** 2026-10-28 (8ccef3d)
