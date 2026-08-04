# Notes for AI assistants working in this folder

This folder is Kenny Easwaran's study-material project for **LPS 31 / PHIL 31, Probability and Inductive Logic** (UC Irvine). It is simultaneously a working folder, a git repository, and the source of a live website.

## Do not run git commands here

**This is a request from the user, after a real incident.** Running `git status` (or anything else that touches the index) from a sandboxed shell can leave a stale `.git/index.lock` behind that the sandbox then cannot delete, which blocks the user from committing in GitHub Desktop until they remove it by hand.

Use `ls` to check file state. Leave every git operation — status, staging, committing, pushing — to the user in GitHub Desktop.

Related caution: the repository currently lives inside Dropbox, which is a known hazard (Dropbox syncs `.git` while git is writing to it). The user is aware and may move it. If it moves, this file should move with it.

## What is here

| File | Purpose |
|---|---|
| `LPS31-AI-study-guide.md` | The main deliverable. Written **for an AI assistant to read**, uploaded by a student at the start of a chat. Course scope, notation, tutoring policy, week-by-week content, a verified answer key (Appendix A), and truth-table practice guidance (Appendix C). |
| `how-to-study-with-AI.html` | Short student-facing page. Written for the student, not the assistant. Was a `.md` until it was converted to HTML so students read it in the browser rather than downloading it; there is deliberately no `.md` copy, to avoid two versions drifting apart. |
| `truth-table-trainer.html` | Self-contained interactive trainer, served on the website. No dependencies, no network. |
| `index.html` | Landing page for the site. Sections run: AI assistant → practice tools → notes → footer. |
| `.nojekyll` | **Do not delete.** Without it GitHub Pages runs Jekyll, which converts the `.md` files to HTML and breaks the download links. |

Published at **https://kennyeaswaran.github.io/lps31/** from the `main` branch, root folder. Editing a file here and pushing updates the site within about a minute.

## Standing conventions

**Verify, do not assert.** Everything in this project has been checked mechanically, and that expectation continues.

- The Appendix A answer key was computed in Python and cross-checked against an independent evaluator. All 792 truth-table cells across 29 tables verify. If you change a table or add a problem, re-run that check rather than reasoning it out by hand.
- The trainer is tested headlessly with `jsdom` before deployment — parser and evaluator against an independent evaluator over every sentence used in the course, plus an end-to-end walkthrough of all nine course problem sets in every mode. Do not edit and ship it without re-running those.
- Truth tables in the answer key show **one column under each atomic letter and each connective**, not just the final value. Generate them programmatically; they are too error-prone by hand.

**Appendix C's embedded applet is deliberately the compact single-sentence version**, not a copy of `truth-table-trainer.html`. It is small enough to survive being reproduced by an assistant, and free-tier ChatGPT chunks uploaded files for retrieval, so a 570-line code block would come back truncated. Keep them separate; the guide points at the hosted trainer for the full thing.

**Course notation** — the most common way to get this wrong is to import standard math-stats conventions. Probability attaches to *sentences*, not sets: `Pr(a & b)`, never `P(A ∩ B)`. Connectives are `&`, `∨`, `∼`. Rules are numbered 0–8 with Rule 4 = special disjunction and Rule 5 = negation (an earlier draft had these swapped in one section; the Week 4 numbering is authoritative). Students are never required to cite rules by number.

## Open question, unresolved

The trainer's presence/absence classification mode uses **"always present / never present / sometimes present"** as the property analogues of tautology/contradiction/contingent. The course has no stated terminology for these, so this was invented. It is flagged in the guide and with the user; if he supplies the wording he actually uses in lecture, change it in `truth-table-trainer.html` (the `askClassify` function) and in Appendix A.

## Tone

The user is the professor and knows this material far better than you do. He reviews carefully and catches real errors. Push back when something seems wrong, flag invented content rather than letting it pass as established, and say plainly when a check failed rather than reporting success.
