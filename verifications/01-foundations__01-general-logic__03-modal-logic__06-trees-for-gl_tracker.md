# Verification tracker: `01-foundations/01-general-logic/03-modal-logic/06-trees-for-gl.html`

<!-- source: 01-foundations/01-general-logic/03-modal-logic/06-trees-for-gl.html -->
<!-- Managed by scripts/verify.py (GitHub Actions). To dispute an [Open] issue, add a line starting with
     **Opus Rebuttal:** at the end of that issue and push; the next run judges it. Do not edit other lines. -->

- Last verified: 2026-10-28 (commit 8ccef3d, deepseek-chat)
- Open: 1 / Resolved: 0 / Ignored: 0

## Summary of the last run

The page is largely correct: the tableau definitions, termination lemma, soundness and completeness proofs, and the K/Löb-rule results are coherent, and the cited labels match their uses. The main concern is the remark offering an 'alternative proof' of the cwf-not-modal proposition, whose inference from a non-cwf frame to K ⊬ A is not justified without invoking soundness of K over all frames, and which leans on the very content of the cited proposition. A minor hypcheck phrasing about K4 is imprecise but not a genuine mathematical error. No issues in the proofs themselves were found.

## Issues

### ISSUE-0001 [Open] Remark's alternative proof of cwf-not-modal is circular/incorrect
- **Category:** Supplement/remark error
- **Location:** remark (sec-k-lob-rule)
- **Detail:** The remark claims that from the Löb-rule closure of K one gets an alternative proof that no modal formula characterizes conversely well-founded frames. The argument runs: if such an A existed, since there is a non-conversely-well-founded frame, K ⊬ A; then by \ref{logic:tableau-k} A fails on a finite loop-free (hence conversely well-founded) frame, contradiction. But the step 'K ⊬ A' from 'there is a non-conversely-well-founded frame' is exactly what is needed: A characterizes conversely well-founded frames means A is valid on exactly those frames, so on a non-cwf frame A is false, hence K ⊬ A — that part is fine. The real problem is the conclusion: A failing on a finite loop-free frame contradicts that A characterizes cwf frames only if A is valid on ALL cwf frames, which is the defining property, so the contradiction does follow. However the remark misattributes the role: the cited \ref{logic:cwf-not-modal} already states the result, and the 'alternative proof' actually uses the very content of that proposition (that A is valid on all cwf frames) rather than the Löb rule; the Löb-rule corollary is not what drives the contradiction. More seriously, the remark asserts 'K ⊬ A' merely from the existence of a non-cwf frame, but validity of A on a frame is not the same as A being a theorem of K unless soundness+completeness of K over all frames is invoked; the remark does not invoke it, so the inference 'K ⊬ A' is unjustified as written.
- **Proposed fix:** Replace with: 'If some formula A were valid on exactly the conversely well-founded frames, then since there exist non-conversely-well-founded frames on which A fails, A is not valid on all frames; by the soundness of K (\ref{logic:kripke-k-sound}) K ⊬ A. By \ref{logic:tableau-k} there is a finite loop-free frame (hence conversely well-founded) and a world where A is false, contradicting that A is valid on all conversely well-founded frames.'
- **Reported:** 2026-10-28 (8ccef3d)
