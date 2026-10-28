# Verification tracker: `02-algebra/03-commutative-algebra/01-basics/03-prime-maximal.html`

<!-- source: 02-algebra/03-commutative-algebra/01-basics/03-prime-maximal.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 4 / Resolved: 0 / Ignored: 0

## Summary of the last run

The main body (definitions, propositions, prime avoidance, Krull existence, local rings, nilradical, Jacobson radical) is logically sound. The genuine problems concentrate in the side remarks: the supplement's claim that prime ideal existence is 'strictly weaker than AC' is an open problem, not a theorem; the Hodges attribution is stated for commutative rings where the correct equivalent is the Boolean prime ideal theorem; the Noetherian remark misattributes the choice strength; and the prime-avoidance hypcheck's 'at most two non-prime' justification is not properly supported by the induction as written.

## Issues

### ISSUE-0001 [Open] Boolean prime ideal theorem is not strictly weaker than AC
- **Category:** Supplement/remark error
- **Location:** supplement (選択公理なしでは)
- **Detail:** The supplement claims that 'every nonzero commutative ring has a prime ideal' is strictly weaker than the axiom of choice (equivalent to the Boolean prime ideal theorem). The equivalence with BPI is correct, but 'strictly weaker than AC' is not a theorem: it is a well-known open problem whether BPI implies AC (BPI is strictly weaker than AC in ZF is not known; only that BPI does not imply AC in ZF is open, while BPI is known not to imply some consequences of AC). Stating '真に弱い' as established fact is an overstatement.
- **Proposed fix:** 「零環でない可換環はすべて素イデアルをもつ」はブール素イデアル定理と同値であることが知られている。ブール素イデアル定理が選択公理より真に弱いか否かは（ZF 上で）未解決である。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0002 [Open] Hodges attribution: maximal ideal existence equivalent to AC
- **Category:** Supplement/remark error
- **Location:** theorem ring:maximal-ideal-existence / hypcheck (選択公理)
- **Detail:** The hypcheck asserts that 'every nonzero commutative ring has a maximal ideal' implies AC over ZF, citing Hodges 1979. What Hodges (1979) proved is that 'every nonzero ring with unit has a maximal ideal' (for not-necessarily-commutative rings) implies AC. For commutative rings the statement is equivalent to the Boolean prime ideal theorem (a strictly weaker principle, and whether it implies AC is open). So the claim as stated for commutative rings is too strong / misattributed.
- **Proposed fix:** 「零環でない可換環はすべて極大イデアルをもつ」はブール素イデアル定理と同値である。ホッジス（1979）は、単位的環（可換とは限らない）に関する同様の命題から選択公理が導けることを示した。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0003 [Open] Noetherian: maximal ideal existence needs only DC?
- **Category:** Supplement/remark error
- **Location:** theorem ring:maximal-ideal-existence / hypcheck (ネーター環)
- **Detail:** The hypcheck says that for Noetherian rings maximal ideal existence follows 'without Zorn's lemma (with only the axiom of dependent choice)'. In fact for a Noetherian ring one argues directly: if (a) is proper, either it is maximal or pass to a strictly larger finitely generated ideal; the ascending chain condition terminates this, giving a maximal ideal with no choice at all (in ZF). Attributing it to 'dependent choice only' is imprecise and understates that no choice is needed.
- **Proposed fix:** ネーター環では、真のイデアル (a) から始めて、極大でなければ真に大きい有限生成イデアルへ移る操作を昇鎖条件で止めれば極大イデアルが得られる。これは選択公理（従属選択公理も）を使わない。
- **Reported:** 2026-10-28 (8ccef3d)

### ISSUE-0004 [Open] Prime avoidance: 'at most two non-prime ideals' claim
- **Category:** Supplement/remark error
- **Location:** theorem ring:prime-avoidance / hypcheck (前提「素イデアル」)
- **Detail:** The hypcheck claims that among p_1,...,p_n at most two may fail to be prime, and that the induction still works. But the induction step applies the hypothesis to the n-1 ideals obtained by deleting p_k; if two of the original ideals are non-prime, then for some k the remaining set still contains two non-prime ideals, and the induction hypothesis (which requires at most two non-primes among the smaller family) is not directly available in the form stated. The standard sharp statement is: prime avoidance holds if all but at most two of the ideals are prime, but the proof must be organized so that the two possibly-non-prime ideals are always kept as the 'last' ones; the present phrasing 'n≥3 なら p_n は素' is not justified by the induction as written.
- **Proposed fix:** Correct statement: the lemma holds when at most two of the ideals fail to be prime. Proof: order so that the possibly non-prime ideals are p_1,p_2; for n=2 no primality is needed; for n≥3 apply the induction to p_1,...,p_{n-1} (still at most two non-prime) and use primality only of p_n in Step 2.
- **Reported:** 2026-10-28 (8ccef3d)
