# Verification tracker: `05-geometry-topology/01-general-topology/05-advanced-properties/02-cantor-set.html`

<!-- source: 05-geometry-topology/01-general-topology/05-advanced-properties/02-cantor-set.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 5 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems and their proofs are essentially correct. The problems concentrate in the supplement: Sierpiński's theorem is stated without the 'countably infinite' hypothesis, the Alexandrov–Urysohn characterization omits 'nonempty' and the precise compact-interior condition, the Hahn–Mazurkiewicz sketch is misleading, the claim that every Polish space is a continuous image of $\N^{\N}$ omits 'nonempty', and the hypcheck side remark about $2^{I}$ is imprecise. These are all kind-5/6 issues in side remarks and should be corrected.

## Issues

### ISSUE-0001 [Open] Sierpiński's theorem misstated: countably infinite, not merely countable
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement says "孤立点をもたない可算距離空間はすべて $\mathbb{Q}$ と同相である（シェルピンスキの定理）". Sierpiński's theorem characterizes $\mathbb{Q}$ as the unique countably infinite metric space that is (topologically) countable, has no isolated points, and is not discrete; more precisely, every countably infinite metric space with no isolated points is homeomorphic to $\mathbb{Q}$. A finite space with no isolated points does not exist, but a one-point space is a countable metric space with no isolated points? No—a singleton has an isolated point. However, the statement as written omits "countably infinite" and, more importantly, the standard statement requires the space to be countable and have no isolated points; a finite discrete space has isolated points, so the only issue is that "可算" should be "可算無限". Also the parenthetical "可算距離空間は自動的に完全不連結" is false: a two-point space with the indiscrete topology is countable and connected (though not metrizable); among metrizable countable spaces, $\{0\}\cup\{1/n\}$ is countable metric and not totally disconnected (it has a nontrivial connected component? actually it is totally disconnected). The claim that countable metric spaces are automatically totally disconnected is false: consider $\mathbb{Q}$ with a metric—totally disconnected, but a countable metric space can contain an interval? No, an interval is uncountable. Still, the assertion is imprecise and not needed. The main error is the missing "infinite" and the misattribution of the exact hypothesis.
- **Proposed fix:** Replace with: "孤立点をもたない可算無限距離空間はすべて $\mathbb{Q}$ と同相である（シェルピンスキの定理、\ref{top:sierpinski-q}）。" and delete the parenthetical "（可算距離空間は自動的に完全不連結）", which is not part of the theorem and is misleading.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Alexandrov–Urysohn characterization of Baire space misstated
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement states: "零次元のポーランド空間でコンパクト集合が内部をもたないものは $\N^{\N}$（ベール空間）、したがって無理数全体と同相である". The correct Alexandrov–Urysohn theorem characterizes $\N^{\N}$ as the unique (up to homeomorphism) nonempty zero-dimensional Polish space in which every compact subset has empty interior—but the space must also be nonempty and, crucially, the statement as given omits that the space must be nonempty and that "zero-dimensional" here means having a base of clopen sets (which for Polish spaces is equivalent to the small inductive dimension being 0). More seriously, the phrase "コンパクト集合が内部をもたない" must be "every compact subset has empty interior", and the space must be nonempty; otherwise the empty space is a counterexample. Also, the irrationals being homeomorphic to $\N^{\N}$ is a separate result (\ref{top:irrationals-nn}), correctly cited, but the sentence conflates the characterization with the corollary.
- **Proposed fix:** Rewrite as: "空でない零次元ポーランド空間で、すべてのコンパクト部分集合が内部をもたないものは $\N^{\N}$（ベール空間）と同相である（アレクサンドロフ–ウリゾーンの定理、\tref{top:alexandrov-urysohn-nn}）。特に無理数全体は $\N^{\N}$ と同相である（\ref{top:irrationals-nn}）。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Hahn–Mazurkiewicz attribution and 'local connectedness' remark imprecise
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says combining Alexandroff–Hausdorff with the Peano curve gives 'the characterization of compact metric spaces that are continuous images of $[0,1]$ (Hahn–Mazurkiewicz theorem)' and that one should 'connect the surjection from $\mathcal{C}$ using local connectedness on the intervals of the complement'. The Hahn–Mazurkiewicz theorem characterizes continuous images of $[0,1]$ among compact metric spaces as exactly the nonempty compact, connected, locally connected metric spaces. The sketch given ('glue using local connectedness on the complement intervals') is not a correct outline: local connectedness is a hypothesis on the target, not a tool applied to complement intervals of $\mathcal{C}$; the standard proof uses the fact that a compact connected locally connected metric space is a continuous image of $[0,1]$ via a chain/Peano-continuum argument, not by gluing a Cantor surjection along complement intervals. The remark is at best a vague and misleading sketch, and the attribution of the method is imprecise.
- **Proposed fix:** Replace with: "ハーン–マズルキェヴィチの定理は、空でないコンパクト距離空間が $[0,1]$ の連続像となるのは、それが連結かつ局所連結であるとき、かつそのときに限ると述べる。アレクサンドロフ–ハウスドルフの定理と組み合わせると、$\mathcal{C}$ からの全射を連結成分ごとに $[0,1]$ の上へつぶすことで、連結かつ局所連結なコンパクト距離空間が $[0,1]$ の連続像になることが分かる。"
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Claim that every Polish space is a continuous image of $\N^{\N}$ needs the space to be nonempty
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement states "すべてのポーランド空間は $\N^{\N}$ の連続像である". This is true for nonempty Polish spaces (a standard result: every nonempty Polish space is a continuous image of $\N^{\N}$), but the empty space is Polish and is not the image of $\N^{\N}$ under any map (since $\N^{\N}\neq\emptyset$). The omission of 'nonempty' makes the statement false.
- **Proposed fix:** Change to: "空でないポーランド空間はすべて $\N^{\N}$ の連続像である".
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0005 [Open] Hypcheck remark on non-countable products is vague and potentially misleading
- **Category:** Supplement/remark error
- **Location:** hypcheck (Alexandroff–Hausdorff proof)
- **Detail:** The hypcheck says: "非可算の積 $[0,1]^{I}$ を使うと、$2^{I}$ の連続像として一般のコンパクトハウスドルフ空間を扱う議論があることが知られている". This is a side comment about a different approach. As stated it is imprecise: a general compact Hausdorff space need not be a continuous image of $2^{I}$ for a set $I$ in the way suggested (the standard result is that every compact Hausdorff space is a continuous image of a closed subset of $2^{I}$, i.e., a zero-dimensional compact space, via the Stone–Čech / Gleason-type results, not directly of $2^{I}$). The claim as written ('$2^{I}$ の連続像として一般のコンパクトハウスドルフ空間を扱う') is not a correct general statement.
- **Proposed fix:** Either delete the sentence, or replace with: "一般のコンパクトハウスドルフ空間は $2^{I}$ の閉部分集合の連続像として扱える（コンパクトハウスドルフ空間は零次元コンパクト空間の連続像である）が、$2^{I}$ 自身の連続像とは限らない。"
- **Reported:** 2026-10-28 (8ccef3d)
