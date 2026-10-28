# Verification tracker: `05-geometry-topology/01-general-topology/05-advanced-properties/02-cantor-set.html`

<!-- source: 05-geometry-topology/01-general-topology/05-advanced-properties/02-cantor-set.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 10fede1, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main theorems (Alexandroff–Hausdorff, Brouwer's characterization) and their proofs are logically sound, with hypotheses properly used and cited results correctly applied. The problems and solutions are correct. The main issues are in the supplement: the Sierpiński theorem is stated without the essential non-compactness hypothesis (a genuine error, since compact countable metric spaces without isolated points are not homeomorphic to $\mathbb{Q}$), and the Hahn–Mazurkiewicz remark omits the connected and locally connected hypotheses. The Alexandrov–Urysohn and 'every Polish space is a continuous image of $\N^{\N}$' statements are essentially correct but imprecisely phrased.

## Issues

### ISSUE-0001 [Open] Sierpiński's theorem misstated: countability and compactness conditions
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement claims that 'every countable metric space without isolated points is homeomorphic to $\mathbb{Q}$' (Sierpiński's theorem). This is false as stated: the standard Sierpiński theorem requires the space to be countable, metrizable, and have no isolated points, but crucially it must also be *not compact* (or more precisely, the theorem characterizes $\mathbb{Q}$ as the unique countable, non-empty, non-compact, second-countable, zero-dimensional space without isolated points). A countable metric space without isolated points that is compact (e.g. $\mathbb{Q}\cap[0,1]$ is not compact, but consider a countable compact space like the one-point compactification of a countable discrete space, or $\omega+1$ with appropriate metric) is not homeomorphic to $\mathbb{Q}$. Indeed $\mathbb{Q}$ is not compact, so any compact countable metric space without isolated points (such spaces exist, e.g. $\{0\}\cup\{1/n\}$ has isolated points, but one can construct countable compact metric spaces with no isolated points) would be a counterexample. The parenthetical '(countable metric spaces are automatically totally disconnected)' is also imprecise: countable metric spaces are totally disconnected only if they have no nontrivial connected subsets, which is true for countable spaces (a countable connected metric space would have to be a point), so that part is acceptable, but the main statement needs the non-compactness hypothesis.
- **Proposed fix:** Replace with: 'コンパクト性を外すと、孤立点をもたずコンパクトでない可算距離空間はすべて $\mathbb{Q}$ と同相であること（シェルピンスキの定理、\ref{top:sierpinski-q}）...' i.e. add the hypothesis that the space is not compact (equivalently, that it is not a compact space), since $\mathbb{Q}$ itself is not compact and the theorem characterizes $\mathbb{Q}$ among countable non-compact metric spaces without isolated points.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0002 [Open] Alexandrov–Urysohn characterization of Baire space needs more care
- **Category:** Supplement/remark error
- **Location:** supplement / 前提を変えると
- **Detail:** The supplement states that 'zero-dimensional Polish spaces in which compact sets have empty interior are homeomorphic to $\N^{\N}$ (Baire space), hence to the irrationals (Alexandrov–Urysohn)'. The correct Alexandrov–Urysohn theorem states that a zero-dimensional Polish space is homeomorphic to $\N^{\N}$ if and only if it is non-empty, has no isolated points, and every non-empty open set is not compact (equivalently, no point has a compact neighborhood / compact sets have empty interior). The phrasing 'compact sets have empty interior' is close but the standard hypothesis is that the space is nowhere locally compact, i.e. no non-empty open set has compact closure. These are essentially equivalent for zero-dimensional Polish spaces, so this is borderline; however the statement as written omits the requirement that the space be non-empty and second-countable (Polish already gives second-countable). This is a minor imprecision rather than a clear error, so I flag it only lightly.
- **Proposed fix:** State precisely: '空でなく、孤立点をもたず、どの空でない開集合もコンパクトでないような零次元ポーランド空間は $\N^{\N}$ と同相である（アレクサンドロフ–ウリゾーン）'.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0003 [Open] Hahn–Mazurkiewicz attribution and 'local connectedness' phrasing
- **Category:** Supplement/remark error
- **Location:** supplement / 似た定理
- **Detail:** The supplement says that combining Alexandroff–Hausdorff with the Peano curve yields 'the characterization of compact metric spaces that are continuous images of $[0,1]$ (Hahn–Mazurkiewicz theorem)' and that the proof idea is to 'connect the surjection from $\mathcal{C}$ using local connectedness on the intervals of the complement'. The Hahn–Mazurkiewicz theorem characterizes compact, connected, locally connected metric spaces as exactly the continuous images of $[0,1]$. The supplement's phrasing 'コンパクト距離空間のうち $[0,1]$ の連続像になるものの特徴づけ' is correct in content, but the claim that the proof 'connects the surjection from $\mathcal{C}$ using local connectedness' is vague and not a standard argument; more importantly, the statement as given does not mention the key hypotheses (connected and locally connected), so a reader could think any compact metric space qualifies. This is an imprecision in a side remark.
- **Proposed fix:** Clarify: 'コンパクト距離空間が $[0,1]$ の連続像となるのは、連結かつ局所連結であるとき、かつそのときに限る（ハーン–マズルキェヴィチの定理）'.
- **Reported:** 2026-10-28 (10fede1)

### ISSUE-0004 [Open] Every Polish space is a continuous image of Baire space — needs precision
- **Category:** Unsupported fact
- **Location:** supplement / 似た定理
- **Detail:** The supplement states 'すべてのポーランド空間は $\N^{\N}$ の連続像であることが知られている' (every Polish space is a continuous image of $\N^{\N}$). This is true for non-empty Polish spaces (the empty space is trivially a continuous image too, so it is fine), and it is a standard fact. However, as stated without the non-empty qualification and without citation, it is a stated-only fact. It is essentially correct, so this is borderline; I note it only because the page gives no reference and the empty-space edge case is glossed over. Given the instruction to prefer no report over speculative ones, I will not flag this as an error.
- **Proposed fix:** No change needed; optionally add '空でない' for full precision.
- **Reported:** 2026-10-28 (10fede1)
