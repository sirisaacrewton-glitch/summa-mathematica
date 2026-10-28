# Verification tracker: `01-foundations/06-category-theory/09-topos-theory/05-sites.html`

<!-- source: 01-foundations/06-category-theory/09-topos-theory/05-sites.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 2 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, the covering-sieve lemma, the site examples, the sheaf-on-a-site definition, the Yoneda reformulation, the comparison with spatial sheaves, the dense-monomorphism extension lemma, and the limits/exponentials theorem) is logically sound, and the hypcheck comments are accurate. The genuine problems are confined to side remarks: the solution's parenthetical identifying the dense-topology sheaves with the double-negation sheaves is mathematically false, and the Lawvere–Tierney remark overstates the correspondence beyond presheaf topoi. Both are supplement/remark-type errors; no proof-level gaps or improper links were found.

## Issues

### ISSUE-0001 [Open] Dense topology sheaves are not the double-negation sheaves
- **Category:** Supplement/remark error
- **Location:** solution (cat:prob-st-dense-topology)
- **Detail:** The parenthetical claims that sheaves for the topology where a sieve covers $U$ iff its union is dense are the sheaves for the $\neg\neg$ (double-negation) topology. This is false. The double-negation topology on $\mathcal{O}(X)$ is the topology whose covers are the families whose union is dense, but the double-negation *sheaf* condition is different: a $\neg\neg$-sheaf is a presheaf $P$ such that $P(U)\to P(V)$ is a bijection for every dense inclusion $V\subset U$ (dense monomorphisms), i.e. the double-negation sheaves are the presheaves that are invariant under restriction to dense open subsets. The topology described in the problem (dense-union covers) is the *dense topology*, whose sheaves are the presheaves satisfying the gluing condition only for dense covers, which is strictly weaker than the $\neg\neg$-sheaf condition. For example, on $X=\mathbb{R}$ the presheaf $P(U)=\mathbb{R}$ (constant) is a sheaf for the dense topology but not a $\neg\neg$-sheaf, since $P(\mathbb{R})\to P(\mathbb{R}\setminus\{0\})$ is not injective. So the identification is wrong.
- **Proposed fix:** Replace the parenthetical with: "（$X$ 上のこの位相（稠密位相）の層は、稠密開部分集合への制限について不変であるという $\neg\neg$ 位相の層の条件より弱い条件をみたす。両者は一般には一致しない。本サイト未収録。）" — i.e. state that the dense topology is not the double-negation topology and that their sheaf categories differ in general.
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Lawvere–Tierney topology correspondence stated without the subobject-classifier caveat
- **Category:** Supplement/remark error
- **Location:** supplement (ローヴェア–ティアニー位相)
- **Detail:** The supplement says that in a presheaf topos $\widehat{\mathbf{C}}$ Lawvere–Tierney topologies correspond one-to-one with Grothendieck topologies via $J(c)=\{S: j_{c}(S)=t_{c}\}$. This is correct for presheaf topoi, but the sentence is placed right after a general definition on an arbitrary topos $\mathcal{E}$ and reads as if the correspondence holds for any topos. For a general (non-presheaf) topos the correspondence is between Lawvere–Tierney topologies and *localizations* (left-exact idempotent adjunctions), not with Grothendieck topologies on a site directly; the bijection with Grothendieck topologies requires choosing a site presentation and is only canonical for presheaf topoi. The claim as written is overstated for the general topos context in which the definition is given.
- **Proposed fix:** Restrict the statement explicitly: "前層トポス $\widehat{\mathbf{C}}$ では、ローヴェア–ティアニー位相はグロタンディーク位相と一対一に対応する（$J(c)=\{S : j_{c}(S)=t_{c}\}$）。一般のトポスでは、ローヴェア–ティアニー位相は左完全な反射的部分圏（局所化）と一対一に対応する。"
- **Reported:** 2026-10-28 (8ccef3d)
