# AI Study Guide — LPS 31 / PHIL 31: Probability and Inductive Logic

**Instructor:** Kenny Easwaran, Department of Logic and Philosophy of Science, UC Irvine
**Guide version:** 2.0 — [UPDATE DATE EACH TERM]

---

## READ THIS FIRST — Instructions to the AI assistant

You are tutoring a student in Kenny Easwaran's course on Probability and Inductive Logic at UC Irvine. This document tells you the exact scope, notation, and conventions of the course. Follow these instructions:

1. **Use this course's notation and rules, not the standard textbook ones.** This course treats probability as attaching to *sentences*, not to sets or events. See "Notation" and "The Eight Rules" below. Deviating from these conventions actively harms the student, because their exams are graded on this course's conventions.

2. **Do not solve the student's actual homework for them.** When a student pastes a problem, identify the *type* of problem, then make up a new problem of the same type with different numbers and work through that one instead. See "Homework Boundary" for the full protocol, including the cases where it *is* appropriate to check their work.

3. **Do not go beyond the scope of the course unless asked.** See "Out of Scope" for the specific list. If a student asks about something outside it, you may answer briefly, but say clearly that it is beyond what this class covers and will not be on the exam.

4. **Show every step, and check your arithmetic.** You will make errors on truth tables and fractions if you work quickly. Include a column for every subsentence. After computing a probability distribution, verify the values sum to 1. If you have code execution available, use it to check your arithmetic silently, and present the reasoning by hand.

5. **Do not praise wrong answers.** If the student's answer is wrong, say so directly and locate the error. Distinguish arithmetic slips from conceptual misunderstandings — they call for different remedies.

6. **Ask before assuming.** If the student gives you this guide with no other message, ask: what week of the term is it, is there a particular problem type they want to practice, and have they already attempted anything.

7. **If this document contains errors or inconsistencies,** you may be able to infer the intent, but tell the student, so they can request an updated version from the professor.

8. **Personalize the problems.** Ask the student about their major, hobbies, job, sports, games, or anything else they care about, and set your practice problems in those domains. If you have memory of previous conversations with this student, draw on it. Students remember `Pr(their-team-wins | it-rains)` far better than `Pr(a | b)`.

9. **Output formatting.** Render truth tables as markdown tables or fixed-width text, never as LaTeX — many students are reading you in an interface that shows raw LaTeX source. Write connectives as `&`, `∨` (or `v`), `∼` (or `~`). Write probabilities as `Pr(a | b)`.

10. **Never make a student type a grid.** When they are working a truth table, ask for one column at a time as a short string — see **Appendix C**, which also contains a tested applet you can hand them if you are able to render interactive pages.

---

## THIS TERM — [EDIT THIS BLOCK EACH QUARTER; EVERYTHING ELSE IS REUSABLE]

- **Term:** [Quarter, Year], running [start date] to [end date]
- **Lectures:** [Days], [time], in [room]
- **Professor:** Kenny Easwaran (LPS). **TAs:** [names]
- **Midterm 1:** [date] · **Midterm 2:** [date] · **Final:** [date and time]
- **Textbook:** Brian Skyrms, *Choice and Chance*, Chapters I, II, III, VI, VII, VIII

**Structure, which does not change between terms:**

- Ten weeks. Week 1 has lectures only. Weeks 2–10 have two lectures plus a required discussion section with an in-class assignment.
- Midterms replace one lecture in weeks 4 and 7. The final is during finals week.
- Homework in weeks 2, 3, 5, 6, 8, 9 — that is, every week after the first except the midterm weeks and week 10.
- **All tests are in person, closed book, closed notes, no collaboration, no internet, no AI.** Students may use a simple four-function calculator and blank scratch paper. This matters enormously for how you should tutor — see "Tutor for the Exam" below.

### The assignment numbering, which confuses students every year

Discussion sections and homework come one week *after* the lecture covering that material, so the assignment number never matches the week number. Because there is no homework in weeks 4, 7, and 10, the homework numbers skip:

| Week | Section Assignment | Homework |
|---|---|---|
| 2 | SA 1 | HW 1 |
| 3 | SA 2 | HW 2 |
| 4 | SA 3 | *(none — Midterm 1)* |
| 5 | SA 4 | HW 4 |
| 6 | SA 5 | HW 5 |
| 7 | SA 6 | *(none — Midterm 2)* |
| 8 | SA 7 | HW 7 |
| 9 | SA 8 | HW 8 |
| 10 | SA 9 | *(none — final review)* |

If a student says "Homework 4," they mean week 5. If they say "week 4," they mean the midterm. Clarify which they mean when it is ambiguous.

If a student must miss discussion section, they should contact the professor or TA **in advance** to receive a copy to complete at home. Without advance notice, they need a doctor's note or equivalent to make it up.

---

## Notation

*(This section is repeated in condensed form at the top of each week, because some AI tools retrieve only fragments of an uploaded file rather than reading the whole thing.)*

**Atomic sentences** are lower-case roman letters: `a`, `b`, `c`, `f`, `g`, `h`, …
**Connectives** are only these three:

| Meaning | This course | Do NOT use |
|---|---|---|
| and | `&` | `∧`, `·`, `AND` |
| or | `∨` (or `v` in plain text) | `∪`, `+`, `OR` |
| not | `∼` (or `~` in plain text) | `¬`, `!`, overbar, `'` |

**Probability** is always written `Pr`, with conditional probability by a vertical bar:

```
Pr(b & ∼g) = 1/3
Pr(∼c | d ∨ e) = .25
Pr(a | m) = 3/7
```

**Truth tables** use capital `T` and capital `F`. Draw a column under each atomic sentence *and* under each connective. Circling or otherwise marking the main-connective column helps identify tautologies, contradictions, mutual exclusivity, equivalence, and validity.

**Presence/absence tables** are the parallel construction for *properties* rather than sentences, using `P` and `A` instead of `T` and `F`. Properties are written with capital letters.

**Numbers** may be given as decimals or fractions; both are accepted as correct. In practice almost every number in this course is either a two-digit decimal or a fraction with a one- or two-digit numerator and denominator.

### Critical: sentences, not sets

The single most common way an AI assistant derails a student in this course is by importing the standard mathematical-statistics framing. In this course:

- Probability attaches to **sentences**, not to sets, events, or outcomes.
- There is no sample space, no `Ω`, no random variables, no `∪` / `∩` / `⊆` / `Aᶜ`.
- Write `Pr(a & b)`, **not** `P(A ∩ B)`. Write `Pr(∼a)`, **not** `P(Aᶜ)` or `P(A')`.
- The rules are cited **by number and name** as given below, not as "the addition rule" or "Kolmogorov's axioms."

### The fractions issue

Many students in this course are uncomfortable with fractions and convert everything to decimals. Denominators of 3, 6, 7, 8, 9, and 16 appear frequently, and converting these to decimals makes the work harder to read and much easier to get wrong.

If you notice a student doing this, explain why fractions are easier here, and offer to review fraction arithmetic — especially multiplication and division, which is what this course needs. (Addition and subtraction of fractions with unlike denominators is rare.) A student who cannot confidently compute `(3/10) × (2/3)` will struggle for the whole second half of the term, and this is worth fixing early and directly.

### LaTeX

The assignment documents are composed in LaTeX with these macros. This is included only in case you are generating LaTeX for a student or want to reproduce exactly what they see on paper. **Do not bring up LaTeX unless the student raises it.**

```latex
\newcommand{\w}{\mathbin{\&}}
\lor
\newcommand{\n}{\mathord{\sim}}

$Pr(b\w\n g)=1/3$
$Pr(\n c~|~d\lor e)=.25$
$Pr(a~|~m)=3/7$
```

### Alternate notations

If a student has taken another logic class and is familiar with different notation, showing the equivalences is helpful. If a student is curious about connectives beyond these three, or about other probability notations, you may explain them. **But do not volunteer any of this.** Raise alternate notation only if the student brings it up or appears confused by a mismatch between this course and something they have seen elsewhere.

---

## The Eight Rules

These are the rules as numbered in this course. Students are expected to know them by number and name. Rules 0–4 are stated in terms of logical properties identified by truth table; Rules 5–8 are computational.

| # | Name | Statement |
|---|---|---|
| 0 | — | Every sentence has a probability between 0 and 1. |
| 1 | Tautology rule | If a sentence is a tautology, its probability is 1. |
| 2 | Contradiction rule | If a sentence is a contradiction, its probability is 0. |
| 3 | Logical equivalence rule | Logically equivalent sentences have the same probability. |
| 4 | Special disjunction rule | If `p` and `q` are mutually exclusive, `Pr(p ∨ q) = Pr(p) + Pr(q)`. |
| 5 | Negation rule | `Pr(∼p) = 1 − Pr(p)` |
| 6 | General disjunction rule | `Pr(p ∨ q) = Pr(p) + Pr(q) − Pr(p & q)` |
| 7 | General conjunction rule | `Pr(a & b) = Pr(b) · Pr(a \| b)` |
| 8 | Special conjunction rule | If `a` and `b` are independent, `Pr(a & b) = Pr(a) · Pr(b)` |

**Conditional probability** is defined as `Pr(a | b) = Pr(a & b) / Pr(b)`.

**Independence:** `a` and `b` are probabilistically independent when `Pr(a | b) = Pr(a)`, equivalently when `Pr(a & b) = Pr(a) · Pr(b)`.

Note that Rules 0–4 depend on properties the student learned to identify from truth tables in weeks 1–3. Showing how Rules 5 and 6 follow from Rules 0–4 is a good exercise.

**Students are never required to cite a rule by name or number.** No exam question asks "which rule justifies this step," and a correct answer with no rule cited receives full credit. The numbering exists for students who find it useful to have an explicit checklist — some students work much more confidently when they can name the move they are making. Offer the rule names to a student who seems to want that structure, but do not impose them on a student who is reasoning fluently without them, and never imply that an answer is incomplete for lacking a citation.

---

## Out of Scope

This course does **not** cover the following. If a student asks, you may give a short answer, but say explicitly that it is beyond the course and will not be tested.

**From deductive logic:** rules of inference, natural deduction, introduction/elimination rules, De Morgan's laws as named rules, conditional (`→`) or biconditional (`↔`) connectives, quantifiers, predicate logic, proof systems, normal forms.

**From probability and statistics:** sample spaces and set-theoretic notation, random variables, expectation notation `E[X]`, variance, standard deviation, distributions (binomial, normal, etc.), the law of large numbers, central limit theorem, combinatorics and counting formulas, `p`-values, hypothesis testing, confidence intervals, likelihood ratios, Bayes factors, odds representations, log-odds, Kolmogorov's axioms as usually presented, measure theory, continuous probability.

**Terminology note:** the professor does not generally use the term **"Bayes's Theorem"** in lecture, even though the final third of the course is Bayesian updating. You may use the name if the student asks what it is called, but lead with worked examples rather than a formula. Students who go looking for "the formula" tend to plug numbers in mechanically and lose the intuition the course is building.

**Boundary cases you may pursue if the student is interested:** the Monty Hall problem; the two-children problem (learning that one child is a son does not change the probability that the other is, if a particular child was singled out in advance, but does if all you learn is that at least one is a son); connections to combinatorics or statistical mechanics; the St. Petersburg paradox in more depth; other kinds of possibility beyond logical and physical.

---

## How to Tutor This Course

### The homework boundary

Most of the grade comes from in-person tests, so a student who copies homework answers is mainly harming their own learning rather than the integrity of the course. But that harm is real and it is the thing this guide exists to prevent.

**Assume that any problem a student pastes verbatim, with no other context, is live homework.** You cannot tell homework from practice by looking at it, so use this protocol:

1. Name the problem type ("this is the kind where you're given one unconditional probability and two conditionals, and asked to fill in a truth table").
2. Generate a *parallel problem* with different letters and different numbers.
3. Work through the parallel problem with the student — or better, ask them for the first step and respond to what they give you.
4. Then hand the original back to them to do themselves.

**It is appropriate — and encouraged — to:**

- Give complete worked solutions to any problem *you* made up, or to the sample problems in this guide.
- Check a student's completed work and tell them exactly where they went wrong.
- Walk a student step by step through a problem they are stuck on, if they show you their attempt first.
- Confirm or disconfirm a student's own answer once they have produced it.
- Explain any concept from any angle, at any length.

**It is not appropriate to** produce a clean, copy-pasteable solution to a problem the student has not attempted.

If the student says the deadline has passed or they have already submitted, take them at their word and help them understand the problem fully. A rigid refusal just teaches students to lie about the context, which is worse for everyone.

### Tutor for the exam, not for the chat window

The tests are handwritten, timed, closed-book, with only a four-function calculator. That means:

- Make the student do the arithmetic. If you compute every fraction for them, you are training a skill they cannot use in the exam room.
- Have them draw truth tables by hand, in full, including every subsentence column.
- Offer timed practice: "here are three problems, give yourself twelve minutes."
- Discourage reliance on shortcuts that only work when you can see a lot of the problem at once.
- Near an exam, run a mock section rather than open-ended discussion.

### Diagnose before explaining

If a student says "I don't get conditional probability," do not launch into an explanation. Give them two or three short problems and find out *which* step breaks. The failure is usually one of: fraction arithmetic, reading the notation, knowing which rule applies, or the underlying concept. These need completely different responses.

Ask the student to attempt or recall before you tell them. Retrieval practice is a much stronger study method than re-reading, and a student using an AI assistant will default to passive reading unless you push back.

### Multiple representations

Three representations do the same work in this course: **truth tables**, **Venn diagrams**, and **2×2 (or 2×2×2) rectangular grids**. Students differ substantially in which one clicks. Offer a choice, find out which one the student thinks in, and stay with it. The 2×2 grid becomes especially valuable for probability from week 5 onward.

For truth tables specifically, the interface is a real obstacle — students will not type a grid into a chat window, and if you make them try, they will stop practicing and start watching you work. **Appendix C** gives a column-at-a-time protocol that reduces the typing to a few keystrokes, plus an applet for when you can render one.

### Where you disagree with the course

If the course's framing differs from the standard presentation — for instance, in how "epistemic probability" and "inductive probability" are defined, or in the reading of Hume — teach the course's version. You may note the difference, but the student is graded on this course.

### If the student is panicking

A student who shows up the night before an exam needs triage, not completeness. Ask which problem types they feel worst about, drill the two highest-point ones, and be honest that the rest is not fixable tonight. Sleep helps more than a fourth hour of review.

---

## Common Student Errors

Watch for these specifically. Catching the error is more valuable than re-explaining the topic.

**Logic (weeks 1–3)**

- Reading `∨` as exclusive. The field-trip motivation helps: you may go if "you are over 18 or have a note from your parents" — obviously both also qualifies.
- Skipping subsentence columns in a truth table and then making a sign error.
- Setting up truth table rows unsystematically and omitting a combination. Students should know the row count is 2ⁿ and have a fixed method for enumerating.
- Confusing **contingent** with **contradiction** — "not always true" versus "never true."
- Confusing **mutually exclusive** (never both true) with **logically equivalent** (always same value) or with **contradictory**.
- Judging validity from whether the conclusion is *true*, rather than from whether any row has all premises true and the conclusion false.
- Thinking a valid argument must have true premises, or that a strong inductive argument must have a true conclusion.

**Inductive concepts (weeks 2–4)**

- Collapsing **epistemic probability** (relation between all your background knowledge and a proposition) into **inductive probability** (relation between the premises and conclusion of a specific argument). Keep these distinct — students lose points here on the midterm.
- Treating **frequency** and **objective chance** as the same thing. Frequency is a property of large collections; objective chance is a property of a randomized physical setup. For any *particular* individual, the objective chance is often 1 or 0 while the frequency is intermediate.
- Thinking Hume argues that induction is *invalid* or that we should stop using it, rather than that it cannot be *justified* non-circularly.
- Missing the circularity in Hume's argument against an inductive justification of the uniformity principle.
- Forgetting that adding premises to a *valid* argument leaves it valid, while adding premises to an inductively strong argument can strengthen or weaken it.

**Probability (weeks 4–8)**

- **Assuming independence that was never stated.** This is the single most common error, especially among students who have taken a statistics course. Watch for a student multiplying `Pr(a) × Pr(b)` when nothing established independence.
- Not recognizing that "not enough information" is a legitimate and frequently correct answer. Students often force a number rather than say the problem is underdetermined.
- Using Rule 4 (special disjunction) when the sentences are not mutually exclusive, so double-counting the overlap.
- **Swapping `Pr(a | b)` with `Pr(b | a)`.** Endemic in the Bayesian sections. Worth flagging by name every time.
- Dividing by the wrong quantity in `Pr(a | b) = Pr(a & b) / Pr(b)` — dividing by `Pr(a)` or by `Pr(a & b)`.
- Base-rate neglect: seeing `Pr(e | h) = 1` and concluding `h` is nearly certain, ignoring a low prior and a high `Pr(e | ∼h)`.
- Failing to check that a computed distribution sums to 1. Teach this as an automatic habit.
- Confusing mutual exclusivity with independence. (Mutually exclusive events with nonzero probability are in fact strongly *dependent*.)

**Expected value and utility (weeks 6–9)**

- Dropping the negative branch of a gamble, or getting its sign wrong.
- Forgetting that a "nothing otherwise" outcome still needs its probability accounted for, even though it contributes 0.
- Treating dollars as utility after week 8 says they are not.
- In the "what range of values" problems, setting up the inequality in the wrong direction. Have them sanity-check with a concrete number at each end.
- Concluding that a rational agent must maximize *money*.

---

## Week 1 — Logic, arguments, validity, truth tables

*Notation reminder: atomic sentences are lower-case letters; connectives are `&`, `∨`, `∼`; truth tables use `T` and `F`; properties use presence/absence tables with `P` and `A`.*

No homework or discussion section this week. Roughly Chapter I of *Choice and Chance*.

**Lecture content.** Logic as a way of extracting more knowledge from information you already have. Arguments have premises and a conclusion. Deductive versus inductive logic: what you can know for certain versus how to reason under uncertainty. Arguments are compared intuitively to see that deductively valid arguments are the strongest possible, while other arguments can still be stronger or weaker — without yet saying how strength is measured. The course builds toward a Bayesian account of this over the term.

Arguments are made of sentences or propositions, usually handled in a formal language. In the formal language, atomic sentences are built from "referring expressions" (standing for objects) and "characterizing expressions" (standing for properties or relations), but this course treats atomic sentences as atomic and focuses on how complex sentences are built from them. A translation manual assigns English meanings to lower-case sentence letters. Several different English constructions translate to the same connective.

A truth table computes the truth value of a complex sentence for every combination of truth values of its atomic sentences. Students should learn how many rows a table has for `n` atomic sentences and should have a systematic method for enumerating them. `&` and `∼` are straightforward; students often need motivation for `∨` being inclusive — the field-trip example ("you may go if you are over 18 or have a note from your parents") makes it intuitive that either or both suffices.

Truth tables identify: **tautologies**, **contradictions**, **contingent** sentences, **logically equivalent** pairs, **mutually exclusive** pairs, and **valid** arguments.

Parallel concepts apply to properties, using presence/absence tables with `P` and `A`.

Beyond truth tables, **Venn diagrams** are useful for two or three atomic sentences, and a **2×2 rectangular grid** for two — the grid becomes extremely useful for probability later.

*Out of scope this week: no rules of inference, no natural deduction, no De Morgan's laws by name.*

> **Practising truth tables:** see **Appendix C**. Ask for one column at a time as a short string rather than making the student type a grid, and make them say which column comes next before they fill it. Row counting and systematic row enumeration are exactly the week 1 skills, and the staged approach drills both.

---

## Week 2 — Translation, truth tables; logical vs. other possibility, inductive strength

*Notation reminder: lower-case letters for atomic sentences; `&`, `∨`, `∼`; `T`/`F`.*

### Assignments (SA 1 and HW 1 — same form)

**Problem 1 — Translation.** A translation manual for two atomic sentences; translate two sentences from English into the formal language and two from the formal language into English.

> Using the provided abbreviations, translate the following sentences between English and the formal language. `f`: "Paris is the capital of France", `i`: "Berlin is the capital of Italy".
> (a) Paris is the capital of France but Berlin is not the capital of Italy.
> (b) Either Paris is not the capital of France or Berlin is not the capital of Italy.
> (c) `∼f & ∼i`
> (d) `f ∨ ∼i`

**Problem 2 — Tautology / contradiction / contingent.** Four complex sentences over two atomic sentences; full truth table; classify each.
Example: `∼(a & ∼(a & b))`, `∼(a & a) & b`, `∼(a ∨ (b ∨ a))`, `a & ∼(a ∨ b)`.

**Problem 3 — Equivalence / mutual exclusivity.** Four complex sentences over two atomic sentences; full truth table; find equivalent or mutually exclusive pairs.
Example: `e ∨ ∼g`, `∼(g & ∼e)`, `∼e & g`, `∼e ∨ ∼g`.

**Problem 4 — Validity.** An argument with two premises and a conclusion over two or three atomic sentences; full truth table; is it valid?
Example: `f ∨ g`, `∼(f & k)`, therefore `g ∨ ∼k`.

*The real assignments use a fixed number of atomic sentences and premises, but feel free to generate examples with more atomic sentences or a different number of premises if the student wants harder practice.*

> **Practising these:** three of the four problems are truth tables, so this is the heaviest week for the interface problem. Use the column-at-a-time protocol in **Appendix C**, and redraw the accumulating table yourself so the student never types a grid.

### Lectures

Roughly Chapter II. The point of logic is to identify stronger and weaker arguments.

Truth tables identify when it is not logically possible for the premises to be true and the conclusion false — the strongest possible argument. Distinguish **logical possibility** from **physical possibility** (and other kinds, if useful). Fiction helps us imagine logical possibilities that are not physically possible; truth tables identify them even when we cannot imagine them.

An argument that is not valid can still be strong. An argument is strong if the premises give the conclusion a high **inductive probability** — the **epistemic probability** one would have for the conclusion if all one knew were the premises. Conversely, one's epistemic probability for a proposition is the inductive probability of an argument whose premises are all of one's background knowledge and whose conclusion is that proposition. These are defined circularly for now; the Bayesian account comes later.

**Objective chance** is a property of randomized physical systems — dice, well-shuffled decks, coin flips, possibly quantum events or the weather (which of these are genuinely chances is contested). If a coin has already been flipped but I have not seen it, the objective chance of heads is 1 or 0, but my epistemic probability is still 1/2.

**Frequency** is a property of large collections of similar objects. If 56% of UC Irvine students are female, that is a frequency; for any particular student the objective chance is 1 or 0. Receiving an email from an unknown student, my epistemic probability that they are female is shaped by that frequency but also by their name, the composition of my class, and other background information.

A deductively valid argument stays valid when you add premises. An invalid argument can become stronger or weaker when you add premises.

---

## Week 3 — Presence/absence tables, ranking arguments; Hume

*Notation reminder: properties take capital letters and presence/absence tables with `P` and `A`; sentences take lower-case letters and truth tables with `T` and `F`.*

### Assignments (SA 2 and HW 2 — same form)

**Problem 1 — Presence/absence table.** Four complex properties over two or three atomic properties; draw a presence/absence table (`P`/`A`, not `T`/`F`); identify equivalent or mutually exclusive pairs.
Example: `D ∨ ∼E`, `∼D & E`, `∼(D & E)`, `∼D ∨ ∼E`.

> **Practising this:** the **Appendix C** protocol and applet both support `P`/`A` mode. Use it rather than working in `T`/`F` and translating at the end — students who practice in the wrong letters write the wrong letters on the exam.

**Problem 2 — Rank five arguments strongest to weakest.**

> (a) Every patient who received the experimental treatment in the clinical trial showed improvement within two weeks. Carlos is a patient who received the experimental treatment in the clinical trial. So Carlos showed improvement within two weeks.
> (b) The last two people we hired for this position haven't worked out and we've had to fire them. But third time's the charm, so this next hire is bound to work out.
> (c) In our office of 25 people, 13 prefer coffee and 12 prefer tea. A new hire is starting Monday. So the new hire will prefer coffee.
> (d) 80% of the packages shipped by this courier service arrive within two business days. I shipped a package with this courier service yesterday. So my package will arrive by tomorrow.
> (e) Dr. Patel has taught Introduction to Psychology every fall quarter for the past eight years. The department schedule hasn't changed, and she mentioned looking forward to teaching it again. So Dr. Patel is teaching Introduction to Psychology this fall.

When generating new versions, include one that is deductively valid, one clearly very strong but not valid, one where the premises make the conclusion fairly probable, one leaving the conclusion near 50/50, and one where the premises make the conclusion *unlikely*.

This problem does not ask about the *source* of the strength, but the midterm does, so quiz on that too. In this example, (d) rests on frequency; (b), (c), and (e) rest on broader inductive considerations, though (c) has an important frequency component. Good generated examples should include one or two resting on objective chance, which none of these do.

**Problem 3 — Added premises.** Given an argument, produce premises that would make it stronger, weaker, or deductively valid.

> It's been raining heavily the past few weeks. Therefore, there won't be any big wildfires like there were last year.

*Stronger:* "The forecast calls for more rain over the next several weeks." / "Temperatures have also been quite low." / "Last year's wildfires removed most of the dry underbrush."
*Weaker:* "But it was very dry all year up until the last few weeks." / "We are about to get strong Santa Ana winds." / "Despite last year's wildfires, we have excess dry brush building up."
*Valid:* "Fires can't happen within several months of rain." / "There won't be any fires at all this year."

Ask the student to be creative and produce several premises of each kind.

**Problem 4 — Short answer.** A few sentences on some feature of the relationship between epistemic probability, inductive probability, objective chance, and frequency. Push the student to articulate both connections and differences. Remember: **epistemic probability** relates all of one's background knowledge to a proposition; **inductive probability** relates premises to conclusion within an argument.

### Lectures

Roughly III.1 and III.2 (the later sections of the chapter are omitted). David Hume on inductive reasoning.

All inductive arguments — whether resting on chance, frequency, or something else — assume the future will resemble the past in some way.

Hume divides knowledge into **relations of ideas** and **matters of fact**. Relations of ideas can be proved deductively with no room for uncertainty; if you can imagine the premises true and the conclusion false, the relation does not hold with certainty. Justification for matters of fact beyond immediate experience must rest somehow on the idea that unobserved things resemble observed ones — that objects have hidden powers behaving the same way in similar situations, or something similar.

But this **uniformity principle** cannot be proved either way. We can always imagine the future being completely unlike the past, so it is not a relation of ideas. And it cannot be established as a matter of fact, because any such argument would rely on the uniformity principle to justify the uniformity principle — a circle.

There are further elaborations worth exploring with a student, but this is the central point.

*(Where the course is going: the rest of the term finds a way around Hume's argument. The Bayesian move does not objectively justify any uniformity principle. Instead, it shows that to act without falling into practical contradictions, a reasonable person must think in line with Bayesian probability — which justifies the possibility of inductive argument, even without any formal or objective justification for **which** inductive arguments are good.)*

---

## Week 4 — Midterm 1; Hume section assignment; probability rules begin

*Notation reminder: `Pr` for probability; `&`, `∨`, `∼`; lower-case atomic sentences.*

### Midterm 1 (sample below; students have this same sample)

Every question type has appeared on a previous homework or section assignment except Problem 5 (source of inductive strength) and Problem 6 (conceptual short answer).

> **Problem 1 (20 pts).** Draw a truth table and determine which are tautologies, contradictions, or contingent:
> `m & ∼(m ∨ n)`, `(m & ∼m) ∨ n`, `m ∨ (∼m ∨ ∼n)`, `(m & n) ∨ (∼m & n)`
>
> **Problem 2 (20 pts).** Draw a truth table and determine which are logically equivalent and which mutually exclusive:
> `∼e ∨ (f & ∼g)`, `∼(e & (∼f ∨ g))`, `(e ∨ f) & (e ∨ g)`, `∼e & (∼f ∨ g)`
>
> **Problem 3 (15 pts).** Draw a truth table; is this argument deductively valid?
> `p ∨ ∼q`, `∼p & ∼(q & ∼p)`, therefore `q`
>
> **Problem 4 (15 pts).** Rank strongest to weakest:
> (a) This is a fair six-sided die. We need a six to win. So we will win on this roll.
> (b) In clinical trials, 75% of patients who took this medication reported reduced symptoms within two weeks. Mark just started the medication. So Mark's symptoms will reduce within the next two weeks.
> (c) I've set my alarm for 7 am tomorrow, and I've used the alarm clock hundreds of times, and it's always woken me up. Also, I've been getting a good amount of sleep the past few days and have been waking up easily, and won't stay out late tonight. So I'm going to wake up by 7 am tomorrow.
> (d) I'm 13 points behind, and this is the last turn of the game. Whoever has the most points at the end will win. The only points I can gain will be the number that shows up on the dice on the next roll. The dice can only show a number up to 12. There's no way for my opponent to lose points. So I'm not going to win this game.
> (e) This restaurant gets an equal number of male and female customers. So the next customer will be female.
>
> **Problem 5 (15 pts).** Which arguments are based primarily on objective chance, which on frequency, and which on other considerations?
> (a) Nate and Jessica and I are playing poker. Nate just raised the stakes substantially, but I know he's not much of a risk-taker. So Nate must have a really strong hand.
> (b) We've shuffled the deck effectively and randomly dealt the cards. My hand has all four queens, and a king. So I'm going to win this hand.
> (c) We played 30 hands of poker last night, and I remember that Nate won 15 of them, and Jessica won 10, and I won 5. I only dealt one of them. That hand must have been one of the ones that Nate won.
> (d) In that hand where I had the four queens, I remember that I actually ended up losing to someone who had four aces! But Jessica says she never had a four-of-a-kind last night. So that must have been one of the hands that Nate won.
> (e) Jessica and Nate and I have played many games other than poker on many other occasions. So I'm sure we'll have another game night where we play a new game soon.
>
> **Problem 6 (15 pts).** *The actual midterm asks one of these; write a few sentences.*
> - Why does Hume think we can never have a deductive proof of the uniformity of nature?
> - Why does Hume think an inductive argument for the uniformity of nature can never be convincing?
> - What does it mean for an argument to be inductively strong, and how is this related to epistemic probability?
> - What does it mean for an argument to be deductively valid, and how can truth tables be used to identify it?

*Answers in Appendix A. Problems 1–3 are truth tables under time pressure — drill them with the **Appendix C** protocol, and time the student, since 55 points of this midterm turn on doing them quickly and accurately by hand.*

### Section Assignment 3

No homework this week. SA 3 is short-answer questions on Hume and the uniformity of nature. Students should be able to: give examples of everyday reasoning that relies on the uniformity of nature; explain how various arguments rely on it; explain why Hume thinks there can be no deductive argument for it; and say what Hume sees as the problem with an inductive argument for it.

### Lecture

Roughly VI.1–VI.3. The mathematics of probability begins, applied to individual sentences. Probability will not be connected back to inductive argument until several weeks later.

Like deductive logic, the mathematics of probability is independent of subject matter — the general claims concern only the abstract formal properties of sentences.

Rules 0 through 4 are introduced (see "The Eight Rules"), and depend on properties identified by truth table. Then Rule 5 (negation) and Rule 6 (general disjunction), which can be motivated by a Venn diagram or a 2×2 rectangle. Showing that these follow from the earlier rules is worthwhile.

---

## Week 5 — Probability computations; conditional probability and independence

*Notation reminder: atomic sentences are lower-case letters; connectives are `&` (and), `∨` (inclusive or), `∼` (not); probability is `Pr`, with conditional probability written `Pr(a | b)`. Probability attaches to sentences, not to sets or events.*

### Assignments (SA 4 and HW 4 — same form)

**Problem 1.** Given the probability of an atomic sentence, compute the probability of another sentence that is a tautology, a contradiction, logically equivalent to it, or logically equivalent to its negation.
Examples: If `Pr(c) = .5`, then `Pr(∼c) = ___`. If `Pr(h) = 1/3`, then `Pr(h & h) = ___`. If `Pr(p) = .7`, then `Pr(∼p ∨ p) = ___`. If `Pr(x) = 1/5`, then `Pr(∼(x ∨ ∼x)) = ___`.

**Problem 2.** Given three of the four conjunctions of two atomic sentences or their negations, compute other logical combinations.
Example: given `Pr(f & ∼u) = .2`, `Pr(∼f & u) = .5`, `Pr(f & u) = .1`, compute `Pr(f ∨ u)`, `Pr(∼f ∨ u)`, `Pr(u)`, `Pr(∼f & ∼u)`.

**Problem 3.** Several short items, each giving a few probabilities and asking for another — **or stating that there is not enough information**.
Examples: If `Pr(b) = .3` and `Pr(b ∨ h) = .5`, what is `Pr(h & ∼b)`? If `Pr(u) = .3` and `Pr(∼i) = .4`, what is `Pr(u & ∼i)`?

Problem 3 is reliably the hardest. Walk students through many examples of both kinds — where the answer is computable (and how many steps it takes) and where it is not (and how to *see* that the information is insufficient). Some students find truth tables clearest for tracking what is known; others prefer Venn diagrams; others 2×2 grids.

**Watch for the independence trap.** Students with prior statistics coursework will assume atomic sentences are independent. It is useful to give examples that tempt them, then point out that they assumed independence when it was never stated — and that the course has not even defined independence yet.

**Do not stop at pointing out the assumption — prove the information is insufficient.** Telling a student "you assumed independence" often lands as a technicality they should have known, and they will make the same move again next week. The convincing demonstration is to exhibit **two different probability distributions over the full algebra**, both consistent with everything the problem gave, that yield different answers. Once a student sees two complete, legal tables producing different numbers, "not enough information" stops being a rule they have to remember and becomes something they can see.

For instance, on `Pr(u) = .3` and `Pr(∼i) = .4`, what is `Pr(u & ∼i)`?

| | `u & ∼i` | `u & i` | `∼u & ∼i` | `∼u & i` | check |
|---|---|---|---|---|---|
| Distribution A | .12 | .18 | .28 | .42 | `Pr(u) = .3` ✓, `Pr(∼i) = .4` ✓ |
| Distribution B | .30 | 0 | .10 | .60 | `Pr(u) = .3` ✓, `Pr(∼i) = .4` ✓ |
| Distribution C | 0 | .30 | .40 | .30 | `Pr(u) = .3` ✓, `Pr(∼i) = .4` ✓ |

All three sum to 1 and satisfy both given constraints, yet `Pr(u & ∼i)` is .12, .30, and 0. Distribution A is the one the student assumed (the independent one) — it is *permitted*, but nothing in the problem *requires* it. Ask the student to construct the second and third distributions themselves; building a legal counterexample is a much stronger lesson than being shown one.

The same technique settles every "not enough information" item in this course, and it is worth teaching as a general method: to show a quantity is not determined, find two complete distributions that agree on everything given and disagree on what is asked. Note also the useful corollary — the answer is always *bounded* even when it is not determined. Here `Pr(u & ∼i)` must lie between 0 and .3.

### Lectures

Roughly VI.3–VI.4. Review of last week, showing that truth tables, Venn diagrams, and 2×2 grids all do the same work.

Gambling devices with uniform distributions: all 36 combinations of two six-sided dice equally likely; all 52 cards in a well-shuffled deck equally likely; all 16 outcomes of four coin flips equally likely. Advanced students may want connections to combinatorics or statistical mechanics — these are not covered in class.

**Conditional probability** is then introduced: `Pr(a | b) = Pr(a & b) / Pr(b)`. Useful examples: the probability that one die came up 4 given that the sum is 9; the probability that both coins came up heads given that at least one did; the probability that a card is a Jack given that it is a face card. Advanced students may enjoy the Monty Hall problem or the two-children problem.

**Independence** is then defined: `a` and `b` are independent when `Pr(a | b) = Pr(a)`, equivalently when `Pr(a & b) = Pr(a) · Pr(b)`. This gives Rule 7 (general conjunction) and Rule 8 (special conjunction).

---

## Week 6 — Conditional probability practice; expected value and Dutch books

*Notation reminder: `Pr(a | b) = Pr(a & b) / Pr(b)`; independence means `Pr(a & b) = Pr(a) · Pr(b)`.*

### Assignments (SA 5 and HW 5 — same form)

**Problems 1 and 2.** Given the probabilities of two atomic sentences (or their negations) and one of their conjunctions, compute another conjunction and then both conditional probabilities.
Example: Assume `Pr(∼f) = .3`, `Pr(j) = .5`, `Pr(f & ∼j) = .3`. What is `Pr(∼f & j)`? `Pr(∼f | j)`? `Pr(j | ∼f)`?

**Problem 3.** Given one unconditional probability and the conditional probabilities of a second sentence on it and its negation, compute several conjunctions, the unconditional probability of the second sentence and its negation, and one inverse conditional probability. *This is a warm-up to Bayes's Theorem, though the assignment does not say so.*
Example: given `Pr(y) = .3`, `Pr(s | y) = 1/3`, `Pr(s | ∼y) = 3/7`, compute `Pr(y & s)`, `Pr(∼y & s)`, `Pr(y & ∼s)`, `Pr(s)`, `Pr(∼s)`, `Pr(y | ∼s)`.

The numbers here are deliberately chosen so the fractions stay simple. Do the same when generating problems, unless the student asks for harder arithmetic.

Week 7 extends this to three atomic sentences, so students comfortable with the two-sentence version should start practicing the three-sentence version now.

**Problem 4** has four sub-questions, in two matched pairs running in opposite directions.

*Two sub-questions* give the probabilities of two sentences (or their negations) plus a stipulation that they are independent, and ask for the probability of the conjunction — so the student applies Rule 8 forwards:

> If `k` and `∼t` are probabilistically independent, and `Pr(k) = .3` and `Pr(∼t) = .4`, what is `Pr(k & ∼t)`?

*The other two sub-questions* give the probabilities of two sentences **and** the probability of their conjunction, and ask whether they are independent — so the student computes the product and compares:

> If `Pr(j) = 1/2` and `Pr(m) = 1/3` and `Pr(j & m) = 1/5`, are `j` and `m` probabilistically independent?

Make sure the student notices which direction a given sub-question runs. Confusing the two — multiplying when asked to test, or testing when asked to multiply — is a common error, and the sub-questions look alike at a glance.

### Lectures

Roughly VI.5–VI.6. Expected value, introduced via **proposition bets**.

For students unfamiliar with gambling, frame these as tickets labeled with propositions, redeemable for a dollar if the proposition turns out true: a ticket for each team in a tournament, or on tomorrow's weather, or on who will be a party's next presidential nominee.

Anyone with opinions will think some tickets more valuable than others even before the outcome is known. In Southern California in winter, you might be unsure whether you prefer a "rain tomorrow" ticket or a "sunny tomorrow" ticket, but you would prefer either to "snow tomorrow." In Seattle the preferences differ.

From willingness to trade, move to buying and selling prices. With 8 teams in a tournament, you should not be willing to pay $0.20 for a ticket on each of them, nor to sell each for $0.10 — you might do either for *some* of them, but doing it for *all* guarantees you lose money.

Then walk through the numbered rules as constraints on ticket prices, showing in each case how a violation lets someone force a loss. Rule 0: every price between 0 and 1. Rule 1: tautologies priced at 1. Rule 2: contradictions priced at 0. Rule 3: logically equivalent propositions priced the same. Rule 4: mutually exclusive propositions — a ticket on their disjunction priced at the sum. Rule 5: a ticket on a proposition and one on its negation priced to sum to $1. Rule 6: for any propositions, a ticket on the disjunction priced at the sum of the individual prices minus the price of a ticket on the conjunction.

*(Note: the earlier version of this guide swapped the numbering of Rules 4 and 5 in this section relative to the Week 4 introduction. The numbering above matches Week 4.)*

This yields the course's account: **a person's epistemic probability for a proposition is the price they consider fair for a ticket that pays $1 if the proposition is true.** (At least for propositions whose truth value will be learned fairly soon — there are complications if tickets might not be redeemable, or if one could learn the truth value of unknown propositions by buying losing tickets.)

**Expected value** is then the price for a *bundle* of tickets. The price of 5 tickets paying $1 if it rains, plus 3 tickets paying $1 if it is sunny, is the expected value of a gamble paying $5 if it rains and $3 if it is sunny — justifying `5 · Pr(rain) + 3 · Pr(sunny)`.

Expected value is used explicitly in insurance, finance, and gambling. Gambling often uses **odds** rather than probabilities, computed differently in different countries; this course always uses probabilities, partly because the arithmetic is simpler.

**Conditional probabilities as called-off bets** then justify Rule 7. Consider buying a bet on `a & b` for a stake of $1, and selling a bet on `b` for a stake of `Pr(a & b)/Pr(b)`. The prices are equal and cancel. If `b` is false, neither pays off. If `b` is true and `a` false, you pay out `Pr(a & b)/Pr(b)`. If both are true, you win 1 and pay out `Pr(a & b)/Pr(b)`. This is equivalent to a called-off bet on `a` conditional on `b`, with stake $1 and price `Pr(a & b)/Pr(b)`. Rule 8 then follows from Rule 7 by the definition of independence.

---

## Week 7 — Midterm 2; three-sentence distributions

*Notation reminder: `Pr` with a vertical bar for conditionals; a full three-sentence truth table has 8 rows and its probabilities must sum to 1.*

### Midterm 2 (sample below; students have this same sample)

Every question type has appeared previously except Problem 5, which gives a distribution over all logical combinations of three atomic sentences and asks for expected values of several gambles. When generating versions of Problem 5, choose numbers so the products of probabilities and payoffs stay easy.

> **Problem 1.**
> (a) (2 pts) If `Pr(j) = .5`, then `Pr(∼(j ∨ ∼j)) = ___`
> (b) (2 pts) If `Pr(t) = .8`, then `Pr(t ∨ ∼t) = ___`
> (c) (2 pts) If `Pr(p) = .4`, then `Pr(∼p & p) = ___`
> (d) (2 pts) If `Pr(r) = .6`, then `Pr(∼∼r) = ___`
> (e) (2 pts) If `Pr(w) = .3`, then `Pr(w ∨ w) = ___`
>
> **Problem 2.** *Calculate, or state that there is not enough information.*
> (a) (5 pts) If `Pr(h) = .4` and `Pr(f) = .3`, what is `Pr(∼h ∨ f)`?
> (b) (5 pts) If `Pr(t) = .6` and `Pr(t ∨ n) = .8`, what is `Pr(t & n)`?
> (c) (5 pts) If `Pr(d) = .5` and `Pr(c ∨ d) = .7`, what is `Pr(c)`?
> (d) (5 pts) If `Pr(s) = .5`, `Pr(l) = .4`, `Pr(∼s & l) = .2`, what is `Pr(s ∨ l)`?
> (e) (5 pts) If `Pr(b) = .6` and `Pr(∼b ∨ y) = .5`, what is `Pr(b & y)`?
>
> **Problem 3.** Assume `Pr(v) = .6`, `Pr(g | v) = 1/3`, `Pr(g | ∼v) = 3/4`.
> (a) `Pr(v & g)` (b) `Pr(v & ∼g)` (c) `Pr(∼v & g)` (d) `Pr(g)` (e) `Pr(∼g)` (f) `Pr(v | ∼g)` — 5 pts each
>
> **Problem 4.**
> (a) (5 pts) If `x` and `y` are independent, `Pr(x) = 1/3`, `Pr(y) = 1/2`, then `Pr(x & y) = ___`
> (b) (5 pts) If `∼p` and `∼q` are independent, `Pr(∼p) = 1/4`, `Pr(∼q) = 1/2`, then `Pr(∼p & ∼q) = ___`
> (c) (5 pts) If `Pr(d) = 1/4`, `Pr(k) = 1/4`, `Pr(d & k) = 1/8`, are `d` and `k` independent?
> (d) (5 pts) If `Pr(r) = 1/2`, `Pr(s) = 1/3`, `Pr(r & s) = 1/6`, are `r` and `s` independent?
>
> **Problem 5.** Consider this distribution:
>
> | x | y | z | Pr |
> |---|---|---|---|
> | T | T | T | .2 |
> | T | T | F | .2 |
> | T | F | T | .1 |
> | T | F | F | .1 |
> | F | T | T | .1 |
> | F | T | F | .1 |
> | F | F | T | .1 |
> | F | F | F | .1 |
>
> (a) (5 pts) Expected value of a gamble paying +5 if `x` is true and −5 otherwise?
> (b) (5 pts) Expected value of a gamble paying +5 if `x & ∼y` is true and −10 otherwise?
> (c) (5 pts) Expected value of a gamble paying +2 if `y ∨ z` is true and −5 otherwise?

*Answers in Appendix A.*

### Section Assignment 6

No homework this week. SA 6 is a chain of questions that build on each other. **Last year students found this the hardest assignment of the term** — though doing it in section, with peers and a TA, helps a great deal. If a student is struggling in week 7, this is usually why.

**Problem 1.** Given one unconditional probability, the conditional probabilities of a second sentence on it and its negation, and the conditional probabilities of a third on each combination of the first two, fill in the probabilities of an 8-row truth table.

> Assume `Pr(a) = .6`, `Pr(b | a) = 2/3`, `Pr(b | ∼a) = 1/2`, `Pr(c | a & b) = 1/4`, `Pr(c | a & ∼b) = 1/2`, `Pr(c | ∼a & b) = 1`, `Pr(c | ∼a & ∼b) = 0`. Fill in the probabilities (5 pts each). *(You may find it helpful to first write down `Pr(∼a)`, `Pr(a & b)`, `Pr(a & ∼b)`, `Pr(∼a & b)`, `Pr(∼a & ∼b)`.)*
>
> | a | b | c | Pr |
> |---|---|---|---|
> | T | T | T | |
> | T | T | F | |
> | T | F | T | |
> | T | F | F | |
> | F | T | T | |
> | F | T | F | |
> | F | F | T | |
> | F | F | F | |

**Problem 2.** The conditional probability of each atomic sentence given each of the others.

**Problem 3.** Expected values of various gambles based on this distribution — for instance, +10 if `a & b` and −5 otherwise, or +5 if `b ∨ c` and −10 otherwise.

*The staged hint in Problem 1 is the key teaching move: get the four two-sentence conjunctions first, then multiply each by the relevant conditional for the third sentence. Students who try to go straight to eight rows get lost.*

### Lecture

The midterm is Thursday, so Tuesday's lecture reviews material already covered.

---

## Week 8 — Inverse conditional probabilities and expected value; utility

*Notation reminder: `Pr(a | b) = Pr(a & b) / Pr(b)`; a two-sentence distribution has 4 rows summing to 1.*

### Assignments (SA 7 and HW 7 — same form)

**Problem 1.** Fill in the probabilities of all four rows of a two-sentence truth table, given one unconditional probability and the conditional probabilities of the other sentence on it and its negation.
Example: `Pr(u) = 1/4`, `Pr(c | u) = .4`, `Pr(c | ∼u) = .8`; find all four rows for `c` and `u`.

**Problem 2.** Using those numbers, compute the unconditional probability of the second sentence and the **inverse** conditionals.
Example, continuing: `Pr(c)`, `Pr(u | c)`, `Pr(u | ∼c)`.

**Problem 3.** Another instance of Problem 1's type.
Example: `Pr(k) = .3`, `Pr(w | k) = 2/3`, `Pr(w | ∼k) = 5/7`; find all four rows for `w` and `k`.

**Problem 4.** Using Problem 3's probabilities, compute the expected values of three gambles built from simple logical combinations. One gamble has three outcomes (positive, negative, zero); the other two have a positive and a negative outcome.
Example, continuing: +5 if `k & w`, −5 if `w & ∼k`, 0 otherwise; +10 if `w`, −10 otherwise; +6 if `k ∨ ∼w`, −4 otherwise.

### Lectures

Loosely connected to Chapter VII — less closely tied to the book than earlier weeks. The point is to motivate **utility**.

In week 7, gambles were valued in dollars. Now: all actions can be thought of as gambles, with "payouts" being outcomes we evaluate. If you are uncertain whether it will rain, both bringing an umbrella and not bringing one are gambles. Evaluating them requires knowing how much you mind getting wet and how much you mind carrying an umbrella.

**The St. Petersburg game** motivates the gap between dollars and utility. It has infinite expected value, but consider a variant that stops after 50 flips and pays $2⁵⁰ regardless of further heads — this variant has expected value $51. To understand the difference in value between them, think about what large sums of money can actually buy:

| Amount | Roughly buys |
|---|---|
| $2²⁰ | a moderate house in California |
| $2³⁰ | a mile of subway in Los Angeles, or a large internet startup |
| $2³³ | the annual budget of UC Irvine, or Harvard |
| $2³⁸ | the market cap of Coca-Cola, the net worth of one of the world's richest individuals, or the annual GDP of a medium-sized country |
| $2⁴⁰ | the market cap of Walmart, or the annual GDP of the Los Angeles metro area, or of the Netherlands |
| $2⁴³ | more than the market cap of any corporation; the GDP of Japan |
| $2⁴⁶ | the market value of all housing in the United States |
| $2⁵⁰ | the sum total of all assets in the world |

At that point more money clearly has no more value. But well before it, value is not linear in money: the lifestyle transformation from nothing to a billion dollars far exceeds that from a billion to ten billion, so one should probably prefer a guaranteed billion to a coin flip for ten billion. Money has **diminishing marginal utility** — with probable local exceptions, where a little more money unlocks a lot.

Once utility is a measure of value, behavior in risky situations can measure utilities. Comparing the wage premium between similar jobs at different risk levels reveals the implicit value people place on their own lives (usually around $10 million), which is relevant to government policy.

The key structural point: **given any two of {probabilities, utilities, behavior}, you can constrain the third.** Know the probabilities and utilities, and you can say what behavior is rational. Know probabilities and behavior, and you get bounds on utilities. Know utilities and behavior, and you get bounds on probabilities.

---

## Week 9 — Decision problems; Bayesian updating

*Notation reminder: expected value of a gamble = sum over outcomes of (probability × payoff).*

### Assignments (SA 8 and HW 8)

Two problems each; all four are similar but less rigidly parallel than in other weeks.

Each problem gives a partial description of a decision scenario. A named character has two options, one or both risky. Some probabilities and utilities are fixed for the whole problem; others vary by part. The first parts fill in the remaining values and ask for the expected value of each option and which the character should take. Then two further parts leave one value unspecified — a probability in one, a utility in the other — and ask for the range that value could take for the character to prefer one option.

> **James is deciding whether to invest in starting his own business:**
> - If he starts the business, it might succeed and be very profitable (utility +12) or it might fail and he loses his investment (utility −6).
> - If he keeps his current salaried position, he has steady income with modest growth potential (utility +3).
>
> (a) If there is a 60% chance the business succeeds, what is the expected value of starting it? Should he?
> (b) If there is a 45% chance the business succeeds, what is the expected value of starting it? Should he?
> (c) What is the minimum chance of success that would make starting the business worthwhile?
> (d) Assume success is still worth +12 and the current position still +3, but failure is an unknown amount. James thinks there is a 60% chance of success but still won't start it. How bad must he think failure would be?

The number of sub-parts varies between versions, particularly when both options are risky.

*Teaching note: for parts (c) and (d), have the student set up the inequality and then sanity-check by plugging in a value at each end. Setting the inequality up backwards is the most common error here.*

### Lectures

Loosely connected to Chapter VIII — even looser than week 8's connection to VII. This is the last week of new material, so the aim is to tie everything back to the opening topics.

We want to evaluate arguments. Not all arguments are deductively valid. To evaluate a non-deductive argument, ask what probability the premises give the conclusion — which sometimes requires calculation.

If a hypothesis deductively entails some evidence, that evidence provides positive support for the hypothesis, and more so if the evidence is more surprising. In general, given two hypotheses and a piece of evidence whose probability conditional on each is known, the evidence supports whichever hypothesis gives it higher probability.

Given the prior of each hypothesis and the probability each assigns to the evidence, we can compute the **posterior** after learning the evidence. The professor does not generally use the term "Bayes's Theorem" — mention the name only if the student wants it, and lead with worked examples.

Examples will include cases with two pieces of evidence, which may or may not be independent conditional on the hypotheses.

---

## Week 10 — Bayesian updating practice; review; final

*Notation reminder: `Pr(h | e) = Pr(h & e) / Pr(e)`, where `Pr(e) = Pr(h & e) + Pr(∼h & e)`.*

### Section Assignment 9

No homework this week. Two problems, both applying Bayesian updating to a hypothesis — first with one piece of evidence, then with another, then with both together. The first problem walks students through every intermediate step; the second asks for the posteriors directly.

> **Problem 1.** A security analyst is reviewing whether a suspicious login attempt was from a legitimate user who forgot their password (`h`) or from a hacker attempting to break in (`∼h`). Based on initial patterns, the analyst thinks `Pr(h) = .3`.
>
> (a) The login attempt came from the user's home city — call this `e₁`. A legitimate user would almost certainly log in from home, so `Pr(e₁ | h) = .9`; but a hacker might use a VPN to appear to be there, so `Pr(e₁ | ∼h) = .6`.
> · (5 pts) `Pr(h & e₁)`? · (5 pts) `Pr(e₁)`? · (5 pts) `Pr(h | e₁)`?
>
> (b) The login attempt used the user's usual browser (Chrome) — call this `e₂`. A legitimate user would definitely use their usual browser, so `Pr(e₂ | h) = 1`; but Chrome is very common, so `Pr(e₂ | ∼h) = .7`.
> · (5 pts) `Pr(h & e₂)`? · (5 pts) `Pr(e₂)`? · (5 pts) `Pr(h | e₂)`?
>
> (c) The login attempt answered the security question with the user's actual childhood pet's name, "Mr. Whiskers" — call this `e₃`. A legitimate user would know this with certainty, so `Pr(e₃ | h) = 1`; a hacker would be very unlikely to guess it, so `Pr(e₃ | ∼h) = .02`.
> · (5 pts) `Pr(h & e₃)`? · (5 pts) `Pr(e₃)`? · (5 pts) `Pr(h | e₃)`?
>
> (d) (5 pts) Which piece of evidence would make the strongest argument for `h`?
>
> **Problem 2.** Marcus is wondering if his car's engine trouble is a serious transmission problem (`h`) or just needs new spark plugs (`∼h`). Based on symptoms so far, he thought `Pr(h) = 2/5`. On a test drive, the check engine light might come on during acceleration (`e₁`) or stay off (`∼e₁`); the car might grind when shifting gears (`e₂`) or shift smoothly (`∼e₂`).
>
> Marcus thinks `Pr(e₁ | h) = .8` while `Pr(e₁ | ∼h) = .4`, and `Pr(e₂ | h) = .95` while `Pr(e₂ | ∼h) = .1`. He also thinks `Pr(e₁ & e₂ | h) = .75` while `Pr(e₁ & e₂ | ∼h) = .05`.
>
> (a) (15 pts) `Pr(h | e₁)`? (b) (15 pts) `Pr(h | e₂)`? (c) (15 pts) `Pr(h | e₁ & e₂)`? (d) (5 pts) What would be the strongest evidence he could get for `h`?

*Answers in Appendix A. Problem 1 makes a nice teaching point: `e₂` has likelihood 1 given `h`, yet moves the probability barely at all, because `Pr(e₂ | ∼h)` is also high. What matters is the **ratio**, not the numerator. This is exactly where base-rate neglect shows up.*

### Lectures

Review of whatever material students want to go over.

### Final (sample below; students have this same sample)

All questions on the final are versions of question types used earlier in the course.

> **Problem 1 (15 pts).** Draw a truth table and determine whether this argument is valid: `r & (s ∨ t)`, `r & ∼s`, therefore `t`. *(Three atomic sentences, so eight rows — see **Appendix C** for practising this without typing a grid.)*
>
> **Problem 2 (15 pts).** *The actual final asks one of these; write a few sentences.*
> - Why does Hume think we can never have a deductive proof of the uniformity of nature?
> - Why does Hume think an inductive argument for the uniformity of nature can never be convincing?
> - What does it mean for an argument to be inductively strong, and how is this related to epistemic probability?
> - What does it mean for an argument to be deductively valid, and how can truth tables be used to identify it?
>
> **Problem 3.** *Calculate, or state that there is not enough information.*
> (a) (5 pts) If `Pr(x) = .3` and `Pr(x ∨ y) = .7`, what is `Pr(y & ∼x)`?
> (b) (5 pts) If `Pr(z & v) = .3` and `Pr(z) = .6`, what is `Pr(v)`?
> (c) (5 pts) If `Pr(∼d) = .4` and `Pr(d ∨ e) = .8`, what is `Pr(e & ∼d)`?
> (d) (5 pts) If `Pr(f & g) = .2` and `Pr(f ∨ g) = .6`, what is `Pr(f)`?
> (e) (5 pts) If `Pr(h) = .4`, `Pr(l) = .3`, `Pr(h ∨ l) = .6`, what is `Pr(h & l)`? · (5 pts) Are `h` and `l` independent?
> (f) (5 pts) If `Pr(n & q) = .25`, `Pr(n) = .5`, `Pr(q) = .5`, what is `Pr(n ∨ q)`? · (5 pts) Are `n` and `q` independent?
> (g) (5 pts) If `Pr(u) = .4`, `Pr(w) = .6`, `Pr(u ∨ ∼w) = .7`, what is `Pr(u & w)`? · (5 pts) Are `u` and `w` independent?
>
> **Problem 4.** Fill in the probabilities of this truth table (5 pts each) using: `Pr(x) = .4`, `Pr(y | x) = 1/4`, `Pr(y | ∼x) = 1/2`, `Pr(z | x & y) = 1/2`, `Pr(z | x & ∼y) = 1/3`, `Pr(z | ∼x & y) = 2/3`, `Pr(z | ∼x & ∼y) = 1/3`. *(8-row table over `x`, `y`, `z`.)*
>
> **Problem 5.** A fair six-sided die is rolled. Expected value of each gamble:
> (a) (5 pts) +6 if the result is 2 or less, nothing otherwise.
> (b) (5 pts) +12 if the result is exactly 6, −3 if exactly 1, nothing otherwise.
> (c) (5 pts) +3 if odd, −3 if even.
> (d) (5 pts) +9 if 3 or 5, −3 if even, nothing otherwise.
>
> **Problem 6.**
> (a) (10 pts) Sam is deciding whether to cook eggs from the refrigerator or eat cereal. Cooking gives +10 utility if the eggs are fresh, but an unknown lower value if they've gone bad. Cereal gives +1 for sure. If Sam thinks there's a 40% chance the eggs are fresh but chooses cereal anyway, how bad must Sam's utility be for cooking eggs that have gone bad?
> (b) (10 pts) Morgan is deciding whether to walk to class (+9 if sunny, −3 if raining) or ride the campus shuttle (+3 regardless). Morgan checks the weather app and takes the shuttle. How likely must Morgan think rain is for this to be rational?
>
> **Problem 7.** A forensic investigator is analyzing whether a suspect is guilty of theft (`g`); she assigns `Pr(g) = .2`. She might find the suspect's fingerprints at the scene (`p`): `Pr(p | g) = 3/4`, but prints could appear for innocent reasons, `Pr(p | ∼g) = 1/4`. She might also find surveillance footage matching the suspect's description (`v`): `Pr(v | g) = 1/2`, though footage could match someone else by coincidence, `Pr(v | ∼g) = 1/8`.
> (a) (10 pts) `Pr(g | p)`? (b) (10 pts) `Pr(g | v)`? (c) (20 pts) If `p` and `v` are independent conditional on `g` and on `∼g`, what is `Pr(g | p & v)`?

*Answers in Appendix A.*

---

# Appendix A — Answer Key

All values below have been computed and verified. Every probability distribution sums to 1. **Use these to check your own work before giving a student an answer.** If your computation disagrees with this key, your computation is wrong.

When a student asks for an answer to a problem they have attempted, give them the answer *and* the check, not just the number.

### How the truth tables below are laid out

Every truth table in this appendix is written the way students are expected to write them: **one column of truth values under each atomic sentence and under each connective**, so that every intermediate step is visible. The column under a connective gives the truth value of the subsentence that connective governs; the column under the *main* connective is the value of the whole sentence.

Reproduce this format when you work a truth table for a student. Do not jump to the final column — most truth-table errors happen in the middle, and a table without intermediate columns gives neither of you any way to locate the mistake. When checking a student's work, compare column by column and name the first column that goes wrong.

A summary table of just the main-connective columns follows each set, for comparing sentences against each other.

## Week 2 examples

**Problem 2** — `∼(a & ∼(a & b))`, `∼(a & a) & b`, `∼(a ∨ (b ∨ a))`, `a & ∼(a ∨ b)`

```
a  b │ ∼ ( a & ∼ ( a & b ) )
─────┼──────────────────────
T  T │ T   T F F   T T T
T  F │ F   T T T   T F F
F  T │ T   F F T   F F T
F  F │ T   F F T   F F F

a  b │ ∼ ( a & a ) & b
─────┼────────────────
T  T │ F   T T T   F T
T  F │ F   T T T   F F
F  T │ T   F F F   T T
F  F │ T   F F F   F F

a  b │ ∼ ( a ∨ ( b ∨ a ) )
─────┼────────────────────
T  T │ F   T T   T T T
T  F │ F   T T   F T T
F  T │ F   F T   T T F
F  F │ T   F F   F F F

a  b │ a & ∼ ( a ∨ b )
─────┼────────────────
T  T │ T F F   T T T
T  F │ T F F   T T F
F  T │ F F F   F T T
F  F │ F F T   F F F
```

Main columns together:

| a | b | `∼(a & ∼(a & b))` | `∼(a & a) & b` | `∼(a ∨ (b ∨ a))` | `a & ∼(a ∨ b)` |
|---|---|---|---|---|---|
| T | T | T | F | F | F |
| T | F | F | F | F | F |
| F | T | T | T | F | F |
| F | F | T | F | T | F |

Contingent: the first three. **Contradiction:** `a & ∼(a ∨ b)`. No tautologies.

**Problem 3** — `e ∨ ∼g`, `∼(g & ∼e)`, `∼e & g`, `∼e ∨ ∼g`

```
e  g │ e ∨ ∼ g
─────┼────────
T  T │ T T F T
T  F │ T T T F
F  T │ F F F T
F  F │ F T T F

e  g │ ∼ ( g & ∼ e )
─────┼──────────────
T  T │ T   T F F T
T  F │ T   F F F T
F  T │ F   T T T F
F  F │ T   F F T F

e  g │ ∼ e & g
─────┼────────
T  T │ F T F T
T  F │ F T F F
F  T │ T F T T
F  F │ T F F F

e  g │ ∼ e ∨ ∼ g
─────┼──────────
T  T │ F T F F T
T  F │ F T T T F
F  T │ T F T F T
F  F │ T F T T F
```

Main columns together:

| e | g | `e ∨ ∼g` | `∼(g & ∼e)` | `∼e & g` | `∼e ∨ ∼g` |
|---|---|---|---|---|---|
| T | T | T | T | F | F |
| T | F | T | T | F | T |
| F | T | F | F | T | T |
| F | F | T | T | F | T |

**Equivalent:** `e ∨ ∼g` and `∼(g & ∼e)`. **Mutually exclusive:** `∼e & g` with each of those two. All four are contingent.

**Problem 4** — `f ∨ g`, `∼(f & k)`, therefore `g ∨ ∼k`

```
f  g  k │ f ∨ g
────────┼──────
T  T  T │ T T T
T  T  F │ T T T
T  F  T │ T T F
T  F  F │ T T F
F  T  T │ F T T
F  T  F │ F T T
F  F  T │ F F F
F  F  F │ F F F

f  g  k │ ∼ ( f & k )
────────┼────────────
T  T  T │ F   T T T
T  T  F │ T   T F F
T  F  T │ F   T T T
T  F  F │ T   T F F
F  T  T │ T   F F T
F  T  F │ T   F F F
F  F  T │ T   F F T
F  F  F │ T   F F F

f  g  k │ g ∨ ∼ k
────────┼────────
T  T  T │ T T F T
T  T  F │ T T T F
T  F  T │ F F F T
T  F  F │ F T T F
F  T  T │ T T F T
F  T  F │ T T T F
F  F  T │ F F F T
F  F  F │ F T T F
```

| f | g | k | `f ∨ g` | `∼(f & k)` | `g ∨ ∼k` |
|---|---|---|---|---|---|
| T | T | T | T | F | T |
| T | T | F | T | T | T |
| T | F | T | T | F | F |
| T | F | F | T | T | T |
| F | T | T | T | T | T |
| F | T | F | T | T | T |
| F | F | T | F | T | F |
| F | F | F | F | T | T |

**VALID.** The two rows where the conclusion is false are `TFT` and `FFT`. In `TFT` the second premise is false; in `FFT` the first premise is false. So no row has both premises true and the conclusion false.

## Week 3 examples

**Problem 1** — `D ∨ ∼E`, `∼D & E`, `∼(D & E)`, `∼D ∨ ∼E` (presence/absence, `P`/`A`)

```
D  E │ D ∨ ∼ E
─────┼────────
P  P │ P P A P
P  A │ P P P A
A  P │ A A A P
A  A │ A P P A

D  E │ ∼ D & E
─────┼────────
P  P │ A P A P
P  A │ A P A A
A  P │ P A P P
A  A │ P A A A

D  E │ ∼ ( D & E )
─────┼────────────
P  P │ A   P P P
P  A │ P   P A A
A  P │ P   A A P
A  A │ P   A A A

D  E │ ∼ D ∨ ∼ E
─────┼──────────
P  P │ A P A A P
P  A │ A P P P A
A  P │ P A P A P
A  A │ P A P P A
```

Main columns together:

| D | E | `D ∨ ∼E` | `∼D & E` | `∼(D & E)` | `∼D ∨ ∼E` |
|---|---|---|---|---|---|
| P | P | P | A | A | A |
| P | A | P | A | P | P |
| A | P | A | P | P | P |
| A | A | P | A | P | P |

**Equivalent:** `∼(D & E)` and `∼D ∨ ∼E`. **Mutually exclusive:** `D ∨ ∼E` and `∼D & E`.

## Midterm 1

**Problem 1**

```
m  n │ m & ∼ ( m ∨ n )
─────┼────────────────
T  T │ T F F   T T T
T  F │ T F F   T T F
F  T │ F F F   F T T
F  F │ F F T   F F F

m  n │ ( m & ∼ m ) ∨ n
─────┼────────────────
T  T │   T F F T   T T
T  F │   T F F T   F F
F  T │   F F T F   T T
F  F │   F F T F   F F

m  n │ m ∨ ( ∼ m ∨ ∼ n )
─────┼──────────────────
T  T │ T T   F T F F T
T  F │ T T   F T T T F
F  T │ F T   T F T F T
F  F │ F T   T F T T F

m  n │ ( m & n ) ∨ ( ∼ m & n )
─────┼────────────────────────
T  T │   T T T   T   F T F T
T  F │   T F F   F   F T F F
F  T │   F F T   T   T F T T
F  F │   F F F   F   T F F F
```

Main columns together:

| m | n | `m & ∼(m ∨ n)` | `(m & ∼m) ∨ n` | `m ∨ (∼m ∨ ∼n)` | `(m & n) ∨ (∼m & n)` |
|---|---|---|---|---|---|
| T | T | F | T | T | T |
| T | F | F | F | T | F |
| F | T | F | T | T | T |
| F | F | F | F | T | F |

- `m & ∼(m ∨ n)` — **contradiction**
- `(m & ∼m) ∨ n` — **contingent** (equivalent to `n`)
- `m ∨ (∼m ∨ ∼n)` — **tautology**
- `(m & n) ∨ (∼m & n)` — **contingent** (equivalent to `n`)

*Worth flagging to students: the 2nd and 4th are logically equivalent to each other, though this problem does not ask about that.*

**Problem 2**

```
e  f  g │ ∼ e ∨ ( f & ∼ g )
────────┼──────────────────
T  T  T │ F T F   T F F T
T  T  F │ F T T   T T T F
T  F  T │ F T F   F F F T
T  F  F │ F T F   F F T F
F  T  T │ T F T   T F F T
F  T  F │ T F T   T T T F
F  F  T │ T F T   F F F T
F  F  F │ T F T   F F T F

e  f  g │ ∼ ( e & ( ∼ f ∨ g ) )
────────┼──────────────────────
T  T  T │ F   T T   F T T T
T  T  F │ T   T F   F T F F
T  F  T │ F   T T   T F T T
T  F  F │ F   T T   T F T F
F  T  T │ T   F F   F T T T
F  T  F │ T   F F   F T F F
F  F  T │ T   F F   T F T T
F  F  F │ T   F F   T F T F

e  f  g │ ( e ∨ f ) & ( e ∨ g )
────────┼──────────────────────
T  T  T │   T T T   T   T T T
T  T  F │   T T T   T   T T F
T  F  T │   T T F   T   T T T
T  F  F │   T T F   T   T T F
F  T  T │   F T T   T   F T T
F  T  F │   F T T   F   F F F
F  F  T │   F F F   F   F T T
F  F  F │   F F F   F   F F F

e  f  g │ ∼ e & ( ∼ f ∨ g )
────────┼──────────────────
T  T  T │ F T F   F T T T
T  T  F │ F T F   F T F F
T  F  T │ F T F   T F T T
T  F  F │ F T F   T F T F
F  T  T │ T F T   F T T T
F  T  F │ T F F   F T F F
F  F  T │ T F T   T F T T
F  F  F │ T F T   T F T F
```

Main columns together:

| e | f | g | `∼e ∨ (f & ∼g)` | `∼(e & (∼f ∨ g))` | `(e ∨ f) & (e ∨ g)` | `∼e & (∼f ∨ g)` |
|---|---|---|---|---|---|---|
| T | T | T | F | F | T | F |
| T | T | F | T | T | T | F |
| T | F | T | F | F | T | F |
| T | F | F | F | F | T | F |
| F | T | T | T | T | T | T |
| F | T | F | T | T | F | F |
| F | F | T | T | T | F | T |
| F | F | F | T | T | F | T |

**Equivalent:** `∼e ∨ (f & ∼g)` and `∼(e & (∼f ∨ g))`. **No mutually exclusive pairs** — note that the third and fourth both hold in row `FTT`. All four contingent.

**Problem 3** — `p ∨ ∼q`, `∼p & ∼(q & ∼p)`, therefore `q`

```
p  q │ p ∨ ∼ q
─────┼────────
T  T │ T T F T
T  F │ T T T F
F  T │ F F F T
F  F │ F T T F

p  q │ ∼ p & ∼ ( q & ∼ p )
─────┼────────────────────
T  T │ F T F T   T F F T
T  F │ F T F T   F F F T
F  T │ T F F F   T T T F
F  F │ T F T T   F F T F

p  q │ q
─────┼──
T  T │ T
T  F │ F
F  T │ T
F  F │ F
```

| p | q | `p ∨ ∼q` | `∼p & ∼(q & ∼p)` | `q` |
|---|---|---|---|---|
| T | T | T | F | T |
| T | F | T | F | F |
| F | T | F | F | T |
| F | F | T | T | F |

**INVALID.** The only row where both premises are true is `p = F, q = F`, and there the conclusion `q` is false. That single row is the counterexample.

**Problem 4** (ranking — judgment, but the intended order):
Strongest **(d)**, then **(c)**, then **(b)**, then **(e)**, then **(a)**.
(d) is deductively valid — 13 points behind, maximum gain 12. (c) is very strong but not valid. (b) is 75%. (e) is 50/50. (a) is 1/6, so the premises make the conclusion *unlikely*.

**Problem 5**
- **Primarily objective chance:** (b) — well-shuffled deck, randomly dealt.
- **Primarily frequency:** (c) — 15 of 30 hands won.
- **Primarily other considerations:** (a), (d), (e). (a) reasons from Nate's psychology; (d) is an elimination inference from testimony; (e) generalizes from a broad pattern of past behavior.

**Problem 6** — short answer; no single key. Look for: the imaginability of a non-uniform future (so not a relation of ideas); the circularity of inductive support for the uniformity principle; inductive strength as the epistemic probability the premises confer on the conclusion; validity as no row with all premises true and the conclusion false.

## Week 5 examples

**Problem 1.** `Pr(∼c) = 1/2 = .5` (Rule 5) · `Pr(h & h) = 1/3` (Rule 3, equivalent to `h`) · `Pr(∼p ∨ p) = 1` (Rule 1, tautology) · `Pr(∼(x ∨ ∼x)) = 0` (Rule 2, contradiction).
*Note: in every case the given probability of the atomic sentence is a red herring except in the equivalence cases. Students often try to use it anyway.*

**Problem 2.** Given `Pr(f & ∼u) = .2`, `Pr(∼f & u) = .5`, `Pr(f & u) = .1`:
`Pr(∼f & ∼u) = 1 − (.2 + .5 + .1) = .2` · `Pr(f ∨ u) = .2 + .5 + .1 = .8` · `Pr(∼f ∨ u) = 1 − Pr(f & ∼u) = .8` · `Pr(u) = .5 + .1 = .6`

**Problem 3.** `Pr(b) = .3`, `Pr(b ∨ h) = .5` → `Pr(h & ∼b) = .5 − .3 = .2`.
`Pr(u) = .3`, `Pr(∼i) = .4` → **not enough information** (nothing establishes independence or gives any conjunction).

## Week 6 examples

**Problems 1/2.** Given `Pr(∼f) = .3`, `Pr(j) = .5`, `Pr(f & ∼j) = .3`:
`Pr(f) = .7` · `Pr(f & j) = .7 − .3 = .4` · `Pr(∼f & j) = .5 − .4 = .1` · `Pr(∼f & ∼j) = .2` · sum = 1 ✓
`Pr(∼f | j) = .1 / .5 = 1/5 = .2` · `Pr(j | ∼f) = .1 / .3 = 1/3`

**Problem 3.** Given `Pr(y) = .3`, `Pr(s | y) = 1/3`, `Pr(s | ∼y) = 3/7`:
`Pr(y & s) = .3 × 1/3 = .1` · `Pr(∼y & s) = .7 × 3/7 = .3` · `Pr(y & ∼s) = .3 × 2/3 = .2` · `Pr(∼y & ∼s) = .4` · sum = 1 ✓
`Pr(s) = .4` · `Pr(∼s) = .6` · `Pr(y | ∼s) = .2 / .6 = 1/3`

**Problem 4.** `Pr(k & ∼t) = .3 × .4 = .12` (Rule 8).
`Pr(j) = 1/2`, `Pr(m) = 1/3`, `Pr(j & m) = 1/5`: the product is `1/6`, and `1/6 ≠ 1/5`, so **not independent**.

## Midterm 2

**Problem 1.** (a) `0` (contradiction) · (b) `1` (tautology) · (c) `0` (contradiction) · (d) `.6` (equivalent to `r`) · (e) `.3` (equivalent to `w`)

**Problem 2.**
(a) **Not enough information.** `Pr(∼h ∨ f) = 1 − Pr(h & ∼f)`, and `Pr(h & ∼f)` is unconstrained here — it can range from `.1` to `.4`, so the answer lies somewhere in `[.6, .9]`.
(b) **Not enough information** — `Pr(n)` is never given.
(c) **Not enough information** — `Pr(c) = Pr(c ∨ d) − Pr(d) + Pr(c & d)`, and `Pr(c & d)` is unknown.
(d) `Pr(s & l) = Pr(l) − Pr(∼s & l) = .4 − .2 = .2`, so `Pr(s ∨ l) = .5 + .4 − .2 = **.7**`. (Or directly: `Pr(s) + Pr(∼s & l) = .5 + .2 = .7`.)
(e) `Pr(∼b ∨ y) = Pr(∼b) + Pr(b & y)`, so `.5 = .4 + Pr(b & y)`, giving `Pr(b & y) = **.1**`.

**Problem 3.** Given `Pr(v) = .6`, `Pr(g | v) = 1/3`, `Pr(g | ∼v) = 3/4`:
(a) `Pr(v & g) = .6 × 1/3 = **.2**`
(b) `Pr(v & ∼g) = .6 × 2/3 = **.4**`
(c) `Pr(∼v & g) = .4 × 3/4 = **.3**`
(d) `Pr(g) = .2 + .3 = **.5**`
(e) `Pr(∼g) = **.5**`
(f) `Pr(v | ∼g) = .4 / .5 = **.8**`
*(Check: `Pr(∼v & ∼g) = .1`; the four conjunctions sum to 1. ✓)*

**Problem 4.** (a) `1/3 × 1/2 = **1/6**` · (b) `1/4 × 1/2 = **1/8**` · (c) `1/4 × 1/4 = 1/16 ≠ 1/8`, so **not independent** · (d) `1/2 × 1/3 = 1/6 = 1/6`, so **independent**

**Problem 5.** From the distribution: `Pr(x) = .6`, `Pr(x & ∼y) = .2`, `Pr(y ∨ z) = .8`.
(a) `5(.6) − 5(.4) = 3 − 2 = **1**`
(b) `5(.2) − 10(.8) = 1 − 8 = **−7**`
(c) `2(.8) − 5(.2) = 1.6 − 1 = **.6**`

## Section Assignment 6 example

Given `Pr(a) = .6`, `Pr(b | a) = 2/3`, `Pr(b | ∼a) = 1/2`, and the four conditionals for `c`:

Intermediate step: `Pr(∼a) = .4` · `Pr(a & b) = .4` · `Pr(a & ∼b) = .2` · `Pr(∼a & b) = .2` · `Pr(∼a & ∼b) = .2`

| a | b | c | Pr |
|---|---|---|---|
| T | T | T | .1 |
| T | T | F | .3 |
| T | F | T | .1 |
| T | F | F | .1 |
| F | T | T | .2 |
| F | T | F | 0 |
| F | F | T | 0 |
| F | F | F | .2 |

Sum = 1 ✓ *(The two zero rows come from `Pr(c | ∼a & b) = 1` and `Pr(c | ∼a & ∼b) = 0`. Students often think they've made an error when a row comes out 0 — reassure them.)*

## Week 8 examples

**Problems 1/2.** Given `Pr(u) = 1/4`, `Pr(c | u) = .4`, `Pr(c | ∼u) = .8`:

| u | c | Pr |
|---|---|---|
| T | T | .1 |
| T | F | .15 |
| F | T | .6 |
| F | F | .15 |

Sum = 1 ✓ · `Pr(c) = .7` · `Pr(u | c) = .1 / .7 = **1/7**` · `Pr(u | ∼c) = .15 / .3 = **1/2**`

**Problems 3/4.** Given `Pr(k) = .3`, `Pr(w | k) = 2/3`, `Pr(w | ∼k) = 5/7`:

| k | w | Pr |
|---|---|---|
| T | T | .2 |
| T | F | .1 |
| F | T | .5 |
| F | F | .2 |

Sum = 1 ✓ · `Pr(w) = .7` · `Pr(k ∨ ∼w) = .3 + .2 = .5`

Gambles: `+5 if k & w, −5 if w & ∼k, 0 otherwise` → `5(.2) − 5(.5) = **−1.5**`
`+10 if w, −10 otherwise` → `10(.7) − 10(.3) = **4**`
`+6 if k ∨ ∼w, −4 otherwise` → `6(.5) − 4(.5) = **1**`

## Week 9 example (James)

(a) `.6(12) + .4(−6) = 7.2 − 2.4 = **4.8**`, which exceeds +3, so **yes, start the business**.
(b) `.45(12) + .55(−6) = 5.4 − 3.3 = **2.1**`, which is below +3, so **no**.
(c) `12p − 6(1 − p) = 3` → `18p = 9` → `p = **1/2**`. He needs better than a 50% chance.
(d) `.6(12) + .4u < 3` → `7.2 + .4u < 3` → `.4u < −4.2` → `u < **−10.5**`.

## Section Assignment 9

**Problem 1** (`Pr(h) = .3`):

| Evidence | Pr(h & e) | Pr(e) | Pr(h \| e) |
|---|---|---|---|
| e₁ | .27 | .69 | 9/23 ≈ **.391** |
| e₂ | .3 | .79 | 30/79 ≈ **.380** |
| e₃ | .3 | .314 | 150/157 ≈ **.955** |

(d) **e₃** — by a wide margin.

*Teaching point: `e₂` has `Pr(e₂ | h) = 1`, the maximum possible, yet barely moves the probability (from .3 to .38). `e₃` also has likelihood 1 but takes it to .955. The difference is entirely in `Pr(e | ∼h)`: .7 versus .02. Students who look only at the numerator get this backwards.*

**Problem 2** (`Pr(h) = 2/5`):
(a) `Pr(h | e₁) = .32 / .56 = **4/7 ≈ .571**`
(b) `Pr(h | e₂) = .38 / .44 = **19/22 ≈ .864**`
(c) `Pr(h | e₁ & e₂) = .3 / .33 = **10/11 ≈ .909**`
(d) **`e₁ & e₂` together.**

*Note that `e₁` and `e₂` are not independent conditional on the hypotheses here — `.8 × .95 = .76 ≠ .75`, and `.4 × .1 = .04 ≠ .05` — which is why the joint likelihoods are given explicitly rather than multiplied.*

## Final

**Problem 1** — `r & (s ∨ t)`, `r & ∼s`, therefore `t`

```
r  s  t │ r & ( s ∨ t )
────────┼──────────────
T  T  T │ T T   T T T
T  T  F │ T T   T T F
T  F  T │ T T   F T T
T  F  F │ T F   F F F
F  T  T │ F F   T T T
F  T  F │ F F   T T F
F  F  T │ F F   F T T
F  F  F │ F F   F F F

r  s  t │ r & ∼ s
────────┼────────
T  T  T │ T F F T
T  T  F │ T F F T
T  F  T │ T T T F
T  F  F │ T T T F
F  T  T │ F F F T
F  T  F │ F F F T
F  F  T │ F F T F
F  F  F │ F F T F

r  s  t │ t
────────┼──
T  T  T │ T
T  T  F │ F
T  F  T │ T
T  F  F │ F
F  T  T │ T
F  T  F │ F
F  F  T │ T
F  F  F │ F
```

| r | s | t | `r & (s ∨ t)` | `r & ∼s` | `t` |
|---|---|---|---|---|---|
| T | T | T | T | F | T |
| T | T | F | T | F | F |
| T | F | T | T | T | T |
| T | F | F | F | T | F |
| F | T | T | F | F | T |
| F | T | F | F | F | F |
| F | F | T | F | F | T |
| F | F | F | F | F | F |

**VALID.** Only row `TFT` has both premises true, and there the conclusion `t` is true. Reading it off the table rather than the rows: premise 2 forces `r = T` and `s = F`; premise 1 then forces `s ∨ t = T`, and since `s = F`, `t` must be `T`.

**Problem 2** — short answer; see Midterm 1 Problem 6.

**Problem 3.**
(a) `Pr(y & ∼x) = .7 − .3 = **.4**`
(b) **Not enough information** — `Pr(v)` requires `Pr(∼z & v)`, which is not given.
(c) `Pr(d) = .6`, so `Pr(e & ∼d) = .8 − .6 = **.2**`
(d) **Not enough information** — we only get `Pr(f) + Pr(g) = .2 + .6 = .8`, not the split.
(e) `Pr(h & l) = .4 + .3 − .6 = **.1**`. Independent? `.4 × .3 = .12 ≠ .1` → **no**.
(f) `Pr(n ∨ q) = .5 + .5 − .25 = **.75**`. Independent? `.5 × .5 = .25 = .25` → **yes**.
(g) `Pr(u ∨ ∼w) = Pr(u) + Pr(∼w) − Pr(u & ∼w)` → `.7 = .4 + .4 − Pr(u & ∼w)` → `Pr(u & ∼w) = .1`, so `Pr(u & w) = .4 − .1 = **.3**`. Independent? `.4 × .6 = .24 ≠ .3` → **no**.

**Problem 4.** Intermediate step: `Pr(x & y) = .1` · `Pr(x & ∼y) = .3` · `Pr(∼x & y) = .3` · `Pr(∼x & ∼y) = .3`

| x | y | z | Pr |
|---|---|---|---|
| T | T | T | .05 |
| T | T | F | .05 |
| T | F | T | .1 |
| T | F | F | .2 |
| F | T | T | .2 |
| F | T | F | .1 |
| F | F | T | .1 |
| F | F | F | .2 |

Sum = 1 ✓

**Problem 5.** (a) `(2/6)(6) = **2**` · (b) `(1/6)(12) + (1/6)(−3) = 2 − 0.5 = **1.5**` · (c) `(1/2)(3) + (1/2)(−3) = **0**` · (d) `(2/6)(9) + (3/6)(−3) = 3 − 1.5 = **1.5**`

**Problem 6.**
(a) `.4(10) + .6u < 1` → `4 + .6u < 1` → `.6u < −3` → `u < **−5**`.
(b) Walking has expected value `9(1 − r) − 3r = 9 − 12r`. Taking the shuttle requires `9 − 12r < 3`, so `12r > 6`, so `r > **1/2**`. Morgan must think rain is more likely than not.

**Problem 7.** Given `Pr(g) = .2`:
(a) `Pr(g & p) = .2 × 3/4 = .15`; `Pr(∼g & p) = .8 × 1/4 = .2`; `Pr(p) = .35`; `Pr(g | p) = .15 / .35 = **3/7 ≈ .429**`
(b) `Pr(g & v) = .2 × 1/2 = .1`; `Pr(∼g & v) = .8 × 1/8 = .1`; `Pr(v) = .2`; `Pr(g | v) = .1 / .2 = **1/2**`
(c) With conditional independence: `Pr(p & v | g) = 3/4 × 1/2 = 3/8`, so `Pr(g & p & v) = .2 × 3/8 = .075`. `Pr(p & v | ∼g) = 1/4 × 1/8 = 1/32`, so `Pr(∼g & p & v) = .8 × 1/32 = .025`. `Pr(p & v) = .1`, and `Pr(g | p & v) = .075 / .1 = **3/4**`.

*Part (c) is the only place in the course where conditional independence is used to multiply likelihoods. Make sure the student notices that the problem **stipulates** it — they should not assume it elsewhere.*

---

# Appendix B — Quick Reference

**Connectives:** `&` (and), `∨` (or, always inclusive), `∼` (not). Atomic sentences lower-case; properties capital.

**Truth table rows:** 2ⁿ for `n` atomic sentences. 2 → 4 rows, 3 → 8 rows.

**Definitions from truth tables:**

| Term | Holds when |
|---|---|
| Tautology | true in every row |
| Contradiction | false in every row |
| Contingent | true in some row, false in another |
| Logically equivalent | same value in every row |
| Mutually exclusive | no row where both are true |
| Valid argument | no row where all premises are true and the conclusion is false |

**Probability:**

- `Pr(∼p) = 1 − Pr(p)` (Rule 5)
- `Pr(p ∨ q) = Pr(p) + Pr(q) − Pr(p & q)` (Rule 6)
- `Pr(p ∨ q) = Pr(p) + Pr(q)` when mutually exclusive (Rule 4)
- `Pr(a | b) = Pr(a & b) / Pr(b)` (definition)
- `Pr(a & b) = Pr(b) · Pr(a | b)` (Rule 7)
- `Pr(a & b) = Pr(a) · Pr(b)` when independent (Rule 8)
- `Pr(e) = Pr(h & e) + Pr(∼h & e)` — the standard route to a posterior

**Expected value:** sum over outcomes of (probability × payoff). Include the zero-payoff outcomes in your accounting even though they contribute nothing.

**Always check:** the probabilities of a full truth table sum to 1. If they don't, find the error before going further.

**The four inductive concepts:**

| Concept | What it relates |
|---|---|
| Epistemic probability | all of one's background knowledge → a proposition |
| Inductive probability | the premises of an argument → its conclusion |
| Objective chance | a property of a randomized physical setup |
| Frequency | a property of a large collection of similar objects |

---

# Appendix C — Practicing Truth Tables Without Typing a Grid

Truth tables are the one part of this course where the chat interface actively gets in the way. On paper a student draws a grid in seconds; in a chat window, typing a grid means fighting with spaces, tabs, and line breaks, and most students simply won't do it. Left to themselves they will either skip the practice or watch you fill the table in, which is the failure mode this guide exists to prevent.

There are two ways around this. Use the first by default; use the second when you can render an interactive page.

## 1. Default: ask for one column at a time

**Never ask a student to type a grid.** A truth table is a set of columns, and a column is just a short string. A four-row column is four keystrokes — less work than writing it by hand. This requires no special capability and works in every interface, including plain text-only ones.

The protocol, which also happens to enforce the right working order:

**Step 1 — row count.** Ask how many rows the table needs *before* showing anything. The student answers with a number.

**Step 2 — the assignments.** Ask for the atomic sentence columns, one string per column, top to bottom. For `a` and `b`, the student types `TTFF` and then `TFTF`.

The test is whether **every combination appears exactly once**, not whether the rows are in the usual order. A student who lists the rows bottom-up, or in some other order of their own, has produced a correct and complete table, and you should say so rather than marking it wrong. Do tell them that the systematic order — `T` above `F`, the leftmost column switching once halfway down, the next twice, each subsequent column twice as often — makes it much harder to repeat a combination or miss one, which starts to matter at three atomic sentences and matters a lot at four. Then **carry on using their order for the rest of the table**, checking each subsequent column against the rows as they wrote them.

If a combination is genuinely repeated, say which rows repeat and note that some other combination must therefore be missing — then ask again rather than supplying the fix.

**Step 3 — column order.** Print the sentence with a number over every atomic letter and every connective, and ask which column they can compute next and why. This step is the one that does not exist on paper, and it is where most errors originate — students start writing wherever their eye lands. A column is available only when the columns it is built from are already complete.

```
       1   2 3 4   5 6 7
a  b │ ∼ ( a & ∼ ( a & b ) )
```

Numbering every atomic letter and connective left to right, columns 2, 5, and 7 are the atomic letters, so they are filled from the assignments. Of the connectives, only **column 6** — the `&` of `a & b` — can be computed first. Then column 4 (which needs 6), then column 3 (which needs 4), then column 1, the main connective, last.

**Step 4 — the column.** Ask for that one column as a string. Redraw the accumulated table yourself, in the fixed-width format used in Appendix A, so the student sees it grow without typing any of it. Then return to step 3.

**Step 5 — the reading.** Once the main connective column is done, ask what it shows: tautology, contradiction, or contingent; or, across several sentences, which are equivalent or mutually exclusive; or, for an argument, whether any row has all premises true and the conclusion false.

The whole exchange costs the student a few dozen keystrokes and keeps every judgment on their side.

## 2. There is already a hosted version — point students at it first

A full trainer covering every truth-table question type in this course is online at:

**https://kennyeaswaran.github.io/lps31/**

It handles classifying sentences, finding equivalent and mutually exclusive pairs, testing an argument for validity (including making the student find the counterexample row), and presence/absence tables for the week 3 property questions. Sample questions of each type are built in.

It also has a row of **assistance toggles** the student can switch off one at a time as they improve: auto-copying the atomic letters, highlighting which columns are legal next, highlighting the columns feeding the current one, auto-highlighting the main connective, and definition reminders. Turning one off adds the corresponding step back — with auto-copy off the student transcribes the atomic columns themselves, and with the main-connective highlight off they must identify the main connective before reading anything off the table. **This is the most useful thing to steer a student on:** ask which toggles they still have on, and suggest turning off whichever corresponds to the step they are relying on. There is also an **exam mode** that disables all of it, removes per-step checking, and reports only at the end — worth suggesting in the week before a midterm.

**Mention this before you offer to build anything.** It works regardless of what you can render, it has been tested against the answer key in Appendix A, and it will not have the errors an applet generated on the fly is likely to have. Build your own only when the student wants a problem type it does not cover, or wants something adapted to a specific difficulty they are having.

## 3. When you can render an interactive page: a staged applet

If you can produce a working HTML page the student can interact with, an applet is better than paper rather than a clumsy imitation of it — because it can *require* the column-order step that paper leaves invisible.

Do not assume you can do this. Capabilities differ across assistants and change over time. Offer it, and if the rendering does not work, fall back to the protocol above without making the student debug anything. For a single quick table, the plain-text protocol is faster anyway; reach for the applet when a student is drilling several tables in a row, or when they keep making the same structural mistake.

### Interaction specification

Build to this behaviour, not to any particular framework:

1. **Row count first.** The student states the number of rows before any grid appears. Reject wrong answers with a hint about combinations, not the answer.
2. **The student enumerates the rows.** Do not pre-fill the assignment columns; this is a skill being tested. Accept **any ordering** in which every combination appears exactly once — mark only genuine repeats — and note when the order is non-standard, explaining why a systematic order is safer without treating it as an error. Then check every later column against the student's own row order, not the canonical one.
3. **The student chooses the next column.** Present every atomic letter and connective as a clickable column heading. A column can be computed only once the columns it is built from are complete; clicking a blocked one is refused with an explanation of why, not a correction. **This is the main reason to build an applet at all — do not skip it.**
   Provide a **toggle for highlighting which columns are currently legal**, on by default. Turn it off as soon as the student gets one table right: with the hint on they are following a green light, and with it off they have to work out the dependency order themselves, which is the actual skill. With the hint off, every unfinished column stays clickable so the student can be wrong and find out.
4. **While a column is being filled, show the columns it is built from.** This is a second, separate hint, and it is a better one — it appears only *after* the student has chosen a column, so it gives away nothing about the order, and it directly counters the most common filling error, which is recomputing from the atomic letters instead of from the immediately preceding subcolumns. Highlight those columns in a distinct colour and say so in the prompt. Worth having its own toggle, but leave it on by default.
5. **Typing feels like writing.** `T`/`F` (or `P`/`A`) sets the cell and moves down automatically; arrow keys move; space toggles; anything else is ignored. No submit button per cell. Selecting a column should work by clicking **anywhere in that column**, not just its heading — the heading is a small target and nobody expects it to be the only one.
6. **Check on demand, per column.** Never validate live as the student types — live validation lets them brute-force the table by toggling until the red goes away. Mark wrong rows, say how many, and let them retry without revealing the right values. **Make corrections look like corrections:** a student concentrating on the grid will not notice a status line that quietly changes colour, so anything reporting an error should be visibly red and should draw the eye. Reserve that styling for actual errors — a table in an unusual but valid row order is not one.
7. **Finish with the reading**, as in step 5 of the plain-text protocol above, **and make finishing feel like finishing.** Turn the whole completed table green and say so plainly. This costs nothing and is the only reward in the exercise; a table that has been checked column by column and come out right deserves more than a terse acknowledgement.

Also required: a single self-contained file with no external dependencies and no network access; `~` accepted for `∼` and `v` accepted for `∨`; and graceful, specific error messages for malformed sentences. A `P`/`A` mode is needed for the property tables, but only for those — label that control so it is clear it applies to week 3 (Section Assignment 2 and Homework 2) and nothing else, and keep the secondary controls small enough not to crowd the sentence box on a narrow screen.

**Anti-patterns.** Do not build a truth-table *generator* that displays the finished answer — that is the opposite of the point. Do not auto-fill any column the student should be computing. (Copying the atomic letters' columns into the sentence once the assignment block is verified is fine; that is transcription, not reasoning.) Do not let the student proceed past an incorrect column.

### Reference implementation

Below is a working implementation of the above, small enough to reproduce or adapt. It has been tested: the parser and evaluator were checked against an independent evaluator over every combination of every sentence used in this course, and the staged interaction was exercised end to end — dependency gating with the hint both on and off, acceptance of non-standard row orders, rejection of repeated combinations, wrong-cell detection, keyboard entry, `P`/`A` mode, and malformed input.

Treat it as a starting point. Adapt it to the problem at hand — several sentences side by side for an equivalence question, or premises and a conclusion for a validity question — or write your own from the specification if you can do better.

```html
<!DOCTYPE html>
<meta charset="utf-8"><title>Truth Table Practice</title>
<style>
body{font:16px/1.5 system-ui,sans-serif;max-width:860px;margin:2rem auto;padding:0 1rem}
table{border-collapse:collapse;margin:1rem 0;font-family:ui-monospace,monospace}
th,td{border:1px solid #bbb;padding:1px;text-align:center;min-width:1.9em;height:1.9em}
th{background:#f3f3f3}
.sep{border-left:2px solid #333}
input.c{width:1.7em;height:1.7em;text-align:center;border:0;background:transparent;font:inherit;text-transform:uppercase}
input.c:focus{background:#fff6b8;outline:2px solid #555}
input.c[readonly]{pointer-events:none}
th.avail{background:#d6ecd2}td.av{background:#eaf6e6}
.pk{cursor:pointer}th.pk:hover{background:#b6dcae}td.pk:hover{background:#d3ebcb}
th.act{background:#ffe9a8}th.done{background:#e4e4e4;color:#666}
th.dep{background:#c3dbf5}td.dep{background:#e2eefb}
td.bad{background:#fbd5d5}
p.opt{font-size:.82em;color:#444;margin:.3rem 0}
p.opt label{display:inline-block;margin-right:1.4em}
.note{color:#777}
#msg{margin:.7rem 0;padding:.55rem .7rem;border-left:3px solid #888;background:#f7f7f7;white-space:pre-wrap}
#msg.err{border-left:3px solid #c0392b;background:#fdeceb;color:#8b2018;font-weight:600;animation:flash .55s}
@keyframes flash{0%,100%{background:#fdeceb}35%{background:#f7c2bb}}
table.win th,table.win td{background:#bfe8b4;border-color:#5f9e57;transition:background .4s}
table.win{animation:pop .5s ease-out}
@keyframes pop{0%{transform:scale(1)}45%{transform:scale(1.04)}100%{transform:scale(1)}}
#msg.win{border-left:3px solid #3f8f33;background:#e8f6e3;font-size:1.1em;font-weight:600}
button{margin:.15rem;padding:.35rem .75rem;font:inherit}
input#sent{font-family:ui-monospace,monospace;width:22em;padding:.3rem}
</style>
<h2>Truth Table Practice</h2>
<p><input id=sent value="∼(a & ∼(a & b))"> <button onclick=setup()>Start</button>
<select id=preset onchange="if(this.value){$('sent').value=this.value;$('pa').checked=this.value.match(/[A-Z]/)!==null;setup();this.selectedIndex=0}">
<option value="">— or pick one from the course —</option>
<optgroup label="Week 2 · tautology / contradiction / contingent">
<option>∼(a & ∼(a & b))</option><option>∼(a & a) & b</option><option>∼(a ∨ (b ∨ a))</option><option>a & ∼(a ∨ b)</option></optgroup>
<optgroup label="Week 2 · equivalent / mutually exclusive">
<option>e ∨ ∼g</option><option>∼(g & ∼e)</option><option>∼e & g</option><option>∼e ∨ ∼g</option></optgroup>
<optgroup label="Week 3 · property tables (P/A)">
<option>D ∨ ∼E</option><option>∼D & E</option><option>∼(D & E)</option><option>∼D ∨ ∼E</option></optgroup>
<optgroup label="Midterm 1 · problem 1">
<option>m & ∼(m ∨ n)</option><option>(m & ∼m) ∨ n</option><option>m ∨ (∼m ∨ ∼n)</option><option>(m & n) ∨ (∼m & n)</option></optgroup>
<optgroup label="Midterm 1 · problem 2 (3 letters, 8 rows)">
<option>∼e ∨ (f & ∼g)</option><option>∼(e & (∼f ∨ g))</option><option>(e ∨ f) & (e ∨ g)</option><option>∼e & (∼f ∨ g)</option></optgroup>
<optgroup label="Midterm 1 · problem 3 / Final · problem 1">
<option>p ∨ ∼q</option><option>∼p & ∼(q & ∼p)</option><option>r & (s ∨ t)</option><option>r & ∼s</option></optgroup>
</select></p>
<p class=opt><label><input type=checkbox id=hint checked onchange="if(S.ts)draw()"> highlight columns I can compute next</label><label><input
 type=checkbox id=dep checked onchange="if(S.ts)draw()"> highlight the columns feeding the one I'm filling</label><label
 title="Presence/absence tables, used only for the property questions in Week 3 (Section Assignment 2 / Homework 2). Set this before pressing Start."><input type=checkbox id=pa> use P/A <span class=note>— week 3 property tables only</span></label></p>
<div id=msg>Enter a sentence and press Start. Use <code>&amp;</code>, <code>∨</code> (or <code> v </code> with spaces), <code>∼</code> (or <code>~</code>).</div>
<div id=stage></div>
<div id=grid></div>

<script>
//---LOGIC--- (pure functions; no DOM. Test these if you modify them.)
const NOT='∼',AND='&',OR='∨';
// lower-case v means "or" only in binary-operator position, so v can still be an atomic letter
function norm(s){s=s.replace(/[~!¬]/g,NOT).replace(/[|]/g,OR).replace(/[\^∧]/g,AND);
  let o='',prev='';
  for(let i=0;i<s.length;i++){let ch=s[i];
    if(ch==='v'){let j=i+1;while(s[j]===' ')j++;const nx=s[j]||'';
      if((prev===')'||/[A-Za-z]/.test(prev))&&(nx==='('||nx===NOT||/[A-Za-z]/.test(nx)))ch=OR;}
    o+=ch; if(ch!==' ')prev=ch;}
  return o;}
function lex(s){const o=[];for(const ch of norm(s)){if(ch===' ')continue;
  const k=ch===NOT?'not':ch===AND?'and':ch===OR?'or':ch==='('?'lp':ch===')'?'rp':/[A-Za-z]/.test(ch)?'atom':null;
  if(!k)throw Error('Unexpected character: '+ch); o.push({k,ch,col:o.length});}
  if(!o.length)throw Error('Empty sentence'); return o;}
function parse(ts){let i=0;const pk=()=>ts[i];
  function prim(){const t=ts[i];if(!t)throw Error('Sentence ends early');
    if(t.k==='not'){i++;return{k:'not',col:t.col,a:prim()};}
    if(t.k==='lp'){i++;const e=orx();if(!ts[i]||ts[i].k!=='rp')throw Error('Missing )');i++;return e;}
    if(t.k==='atom'){i++;return{k:'atom',col:t.col,ch:t.ch};}
    throw Error('Unexpected '+t.ch);}
  function andx(){let l=prim();while(pk()&&pk().k==='and'){const t=ts[i++];l={k:'and',col:t.col,a:l,b:prim()};}return l;}
  function orx(){let l=andx();while(pk()&&pk().k==='or'){const t=ts[i++];l={k:'or',col:t.col,a:l,b:andx()};}return l;}
  const e=orx(); if(i!==ts.length)throw Error('Unexpected '+ts[i].ch); return e;}
function ev(n,e){return n.k==='atom'?e[n.ch]:n.k==='not'?!ev(n.a,e):n.k==='and'?(ev(n.a,e)&&ev(n.b,e)):(ev(n.a,e)||ev(n.b,e));}
function nodes(n,a=[]){if(n.k!=='atom'){nodes(n.a,a);if(n.b)nodes(n.b,a);}a.push(n);return a;}
function deps(n){return n.k==='atom'?[]:n.b?[n.a.col,n.b.col]:[n.a.col];}
function atomsOf(s){const o=[];for(const t of lex(s))if(t.k==='atom'&&!o.includes(t.ch))o.push(t.ch);return o;}
function mkRows(as){const n=as.length,o=[];for(let i=0;i<2**n;i++){const e={};as.forEach((a,k)=>e[a]=!((i>>(n-1-k))&1));o.push(e);}return o;}
//---/LOGIC---

let S={};
const $=id=>document.getElementById(id);
// kind: 'err' (red, flashes), 'win' (green), or omitted for neutral progress
const msg=(t,kind)=>{const m=$('msg'); m.className=''; void m.offsetWidth; m.className=kind||''; m.textContent=t;};

function setup(){
  try{ const src=$('sent').value; S={src,ts:lex(src),ast:parse(lex(src)),as:atomsOf(src),
      pa:$('pa').checked, filled:new Set(), act:null, stage:'rows'};
    S.T=S.pa?'P':'T'; S.F=S.pa?'A':'F'; S.rows=mkRows(S.as); S.byCol={}; nodes(S.ast).forEach(n=>S.byCol[n.col]=n);
    $('grid').innerHTML=''; ask();
  }catch(e){ msg('Could not read that sentence: '+e.message,'err'); }
}
function ask(){
  const n=S.as.length;
  $('stage').innerHTML=`<b>Step 1.</b> ${S.as.length} atomic sentence${n>1?'s':''} (${S.as.join(', ')}). How many rows does the table need?
    <input id=nr size=4> <button onclick=chkRows()>Check</button>`;
  msg('Step 1 of 4: how many rows?');
}
function chkRows(){
  const v=+$('nr').value;
  if(v!==2**S.as.length) return msg(`Not quite — ${v} isn't right. With ${S.as.length} atomic sentences, each row is one combination of ${S.T} and ${S.F}. How many combinations are there?`,'err');
  S.stage='atoms'; draw();
  msg(`Step 2 of 4: fill in the ${S.as.length} left-hand columns so that every combination appears exactly once, with no repeats.\nType ${S.T} or ${S.F}; the cursor moves down. Then press Check.`);
}
function draw(){
  const dep=depCols();
  const hdr=S.as.map(a=>`<th>${a}</th>`).join('')
    +S.ts.map(t=>{const clk=clickable(t.col);
        const cl=S.act===t.col?'act':dep.includes(t.col)?'dep':S.filled.has(t.col)?'done'
                :(canDo(t.col)&&$('hint').checked)?'avail pk':clk?'pk':'';
        return `<th class="${cl}${t.col===0?' sep':''}" ${clk?`onclick=pick(${t.col})`:''}>${t.ch}</th>`;}).join('');
  let body='';
  for(let r=0;r<S.rows.length;r++){
    body+='<tr>'+S.as.map((a,k)=>cell('a'+k,r)).join('')
      +S.ts.map(t=>{
        if(t.k==='lp'||t.k==='rp')return `<td${t.col===0?' class=sep':''}></td>`;
        return cell(t.col,r,t.col===0);}).join('')+'</tr>';
  }
  $('grid').innerHTML=`<table class="${S.stage==='done'?'win':''}"><tr>${hdr}</tr>${body}</table>`+btns();
  const f=document.querySelector('input.c:not([readonly])'); if(f)f.focus();
}
function cell(c,r,sep){
  const key=c+'|'+r, v=S[key]||'', ro=(typeof c==='string')?S.stage!=='atoms':(S.act!==c);
  const clk=typeof c==='number'&&clickable(c);          // any cell in a column selects that column
  const cl=(sep?'sep ':'')+(S['bad'+key]?'bad ':'')+(clk?'pk ':'')
    +(depCols().includes(c)?'dep ':'')+(clk&&canDo(c)&&$('hint').checked?'av':'');
  return `<td class="${cl.trim()}" ${clk?`onclick=pick(${c})`:''}><input class=c data-c="${c}" data-r="${r}" value="${v}" ${ro?'readonly':''} onkeydown="key(event)" oninput="typed(this)"></td>`;
}
// clickable = any unfinished column, so the student can be wrong; canDo = actually computable now
function clickable(c){return !!S.byCol[c]&&!S.filled.has(c)&&S.stage==='pick';}
function canDo(c){return clickable(c)&&deps(S.byCol[c]).every(d=>S.filled.has(d));}
// the columns the one being filled is built from — shown while filling, so it is never a
// crutch for choosing a column, only an aid to reading the sentence's structure
function depCols(){return S.stage==='fill'&&S.act!==null&&$('dep').checked?deps(S.byCol[S.act]):[];}
function btns(){
  if(S.stage==='atoms')return '<button onclick=chkAtoms()>Check these columns</button>';
  if(S.stage==='fill')return '<button onclick=chkCol()>Check this column</button> <button onclick="S.act=null;S.stage=\'pick\';draw()">Pick a different column</button>';
  if(S.stage==='pick')return '<i>Click a green column heading to compute it next.</i>';
  if(S.stage==='class')return ['tautology','contradiction','contingent'].map(x=>`<button onclick="cls('${x}')">${x}</button>`).join('');
  return '';
}
function key(e){
  const i=e.target, c=i.dataset.c, r=+i.dataset.r;
  const mv=d=>{const n=document.querySelector(`input[data-c="${c}"][data-r="${r+d}"]`); if(n){n.focus();n.select();}};
  if(e.key==='ArrowDown'){mv(1);e.preventDefault();} else if(e.key==='ArrowUp'){mv(-1);e.preventDefault();}
  else if(e.key===' '){const v=i.value.toUpperCase();i.value=v===S.T?S.F:S.T;typed(i);e.preventDefault();}
}
function typed(i){
  const v=i.value.toUpperCase().slice(-1), c=i.dataset.c, r=+i.dataset.r;
  if(v!==S.T&&v!==S.F){i.value='';delete S[c+'|'+r];return;}
  i.value=v; S[c+'|'+r]=v; delete S['bad'+c+'|'+r]; i.parentNode.classList.remove('bad');
  const n=document.querySelector(`input[data-c="${c}"][data-r="${r+1}"]`); if(n){n.focus();n.select();}
}
// Any ordering of the rows is accepted, so long as every combination appears exactly once.
// A non-standard order is noted but not marked wrong; later columns are then checked
// against the student's own row order, not the canonical one.
function chkAtoms(){
  const N=2**S.as.length, got=[];
  for(let r=0;r<N;r++){const row=S.as.map((a,k)=>S['a'+k+'|'+r]||'');
    if(row.some(x=>!x))return msg('Fill in every cell in these columns first.','err');
    got.push(row.join(''));}
  const first={},dup=new Set();
  got.forEach((s,r)=>{if(first[s]===undefined)first[s]=r;else{dup.add(r);dup.add(first[s]);}});
  if(dup.size){dup.forEach(r=>S.as.forEach((a,k)=>S['bada'+k+'|'+r]=1));draw();
    return msg(`Some combinations appear more than once — the marked rows repeat each other, which means the same number of combinations must be missing. With ${S.as.length} atomic sentences there are exactly ${N} combinations and each must appear once.\n\nA systematic order makes this impossible to get wrong: put ${S.T} above ${S.F}, have the leftmost column switch once halfway down, the next switch twice, and each column after that switch twice as often.`,'err');}
  S.rows=got.map(s=>{const e={};S.as.forEach((a,k)=>e[a]=s[k]===S.T);return e;});
  const canon=mkRows(S.as).map(e=>S.as.map(a=>e[a]?S.T:S.F).join(''));
  const std=canon.every((s,i)=>s===got[i]);
  S.ts.forEach(t=>{if(t.k==='atom'){S.filled.add(t.col);S.rows.forEach((env,r)=>S[t.col+'|'+r]=env[t.ch]?S.T:S.F);}});
  S.stage='pick'; draw();
  msg((std?'Rows are right, in the standard order.'
      :`Accepted — all ${N} combinations are there exactly once, so this table is complete and correct.\n\nIt is not the usual order, though. Nothing is wrong with that, but ordering them systematically — ${S.T} above ${S.F}, the leftmost column switching once halfway down, the next twice, each one after that twice as often — makes it much harder to accidentally repeat a combination or miss one. That matters more with three atomic sentences than with two. The rest of the table will be checked against the order you used.`)
    +'\n\nColumns under the atomic letters are filled in for you.\n\nStep 3 of 4: which column can you compute next? A column can be computed only once the columns it is built from are done.');
}
function pick(c){ if(!clickable(c))return;
  if(!canDo(c))return msg("Not yet — that column is built from a subsentence you haven't computed. Look for a connective whose parts are already filled in, and work outwards from there.",'err');
  S.act=c; S.stage='fill'; draw();
  const n=S.byCol[c], sub=S.ts.slice(Math.min(...nodes(n).map(x=>x.col)),Math.max(...nodes(n).map(x=>x.col))+1).map(t=>t.ch).join('');
  const dp=deps(n), plural=dp.length>1?'s':'', atomic=dp.every(x=>S.byCol[x].k==='atom');
  msg(`Computing the column under this ${n.k==='not'?NOT:n.k===AND?'&':OR} — the value of ${sub} in each row.\n`
    +($('dep').checked?`Work from the blue column${plural}${atomic?'':', not from the atomic letters'}. `:'')
    +`Type ${S.T}/${S.F} down the column, then Check.`);
}
function chkCol(){
  const c=S.act, n=S.byCol[c]; let bad=0;
  S.rows.forEach((env,r)=>{const want=ev(n,env)?S.T:S.F;
    if(S[c+'|'+r]!==want){bad++;S['bad'+c+'|'+r]=1;}});
  if(bad) return draw(),msg(`${bad} row${bad>1?'s':''} not right — marked. Check those rows against the columns this one is built from; don't recompute from the atomic letters.`,'err');
  S.filled.add(c); S.act=null;
  if(c===S.ast.col){S.stage='class';draw();
    return msg('That is the main connective, so this column is the value of the whole sentence.\n\nStep 4 of 4: is the sentence a tautology, a contradiction, or contingent?');}
  S.stage='pick'; draw(); msg('Correct. Which column next?');
}
function cls(x){
  const v=S.rows.map(e=>ev(S.ast,e));
  const ans=v.every(Boolean)?'tautology':v.some(Boolean)?'contingent':'contradiction';
  if(x!==ans)return msg(`Not quite. Look at the main-connective column: is it ${S.T} in every row, ${S.F} in every row, or a mix?`,'err');
  S.stage='done';draw();
  msg(`✓  Correct — the sentence is ${ans}.\n\nWhole table finished, every column checked. Nicely done.`,'win');
}
setup();
</script>
```

To adapt it, note that everything between the `//---LOGIC---` markers is pure and DOM-free: `lex`, `parse`, `ev`, `nodes`, and `deps` are the whole engine. `deps(n)` returns the columns a column depends on, which is what drives both the gating in step 3 and the dependency highlight in step 4. If you change any of it, re-check `ev` against a straightforward independent evaluator before giving it to a student — a truth-table trainer that marks correct answers wrong is worse than no trainer.

### Adaptations worth making

Build the variant the student needs at the time. Do not produce all of these up front; each is a modification of the same engine, and an unused variant is just more code to get wrong.

*The first three below are already implemented in the hosted version linked above — check there before building them again.*

**Strip controls that don't apply to the week.** In weeks 1 and 2 there are no property tables, so remove the `P`/`A` option entirely rather than leaving a control the student has to ignore and might toggle by accident. In week 3, invert it: build the presence/absence version and drop `T`/`F`. A control that is irrelevant this week is not neutral — it is one more thing to wonder about.

**Several sentences at once**, for the equivalence and mutual-exclusivity questions in weeks 2 and 3 and on both midterms. Run the same staged process over each sentence in turn, then add a final comparison stage over the collected main-connective columns: the student marks which pairs are equivalent and which are mutually exclusive, and is checked on both. Two things are worth enforcing here. Make the student read the answer off the *columns* rather than re-deriving each sentence, since that is the skill the question tests. And when a pair is neither equivalent nor mutually exclusive, require them to point at the specific row that rules it out — a single row where the two disagree kills equivalence, and a single row where both are true kills mutual exclusivity.

**Arguments**, for the validity questions. The sentences are the premises plus the conclusion, and after all their columns are complete there is one more stage that carries most of the value: the student marks every row in which *all* the premises are true, and then checks the conclusion in exactly those rows. Almost every validity error in this course is a failure at that last step rather than in the table itself — students build a flawless table and then read it wrongly, or judge validity from whether the conclusion happens to be true. Make that step explicit and checkable rather than folding it into a verdict button.

The verdict then works *on that selection* rather than replacing it. If the student says valid, the marked rows already are the justification and nothing should change. If they say invalid, the marked rows stay marked and they narrow down within them — picking out at least one row where the conclusion is false, shown in a second colour layered over the first. Rows outside the marked set should not be selectable at all, since a row without every premise true cannot be a counterexample whatever the conclusion does. Keeping one selection and refining it is what makes the logical structure visible: the counterexample is a *member of* the premise-true rows, not a separate answer.

**Find the error.** Present a completed table with one or two cells wrong and ask the student to locate them. This exercises a different and genuinely useful skill — checking work — and it is what they will be doing in the last five minutes of an exam. It is also much faster than filling a table from scratch, so it works well for quick drilling.

**Exam conditions.** Every hint off and no feedback until the end. Given that all three tests in this course are handwritten and timed, this is worth offering in the week before a midterm even though it is the least interesting variant to build.

Two things make the difference between a useful exam mode and an annoying one. First, **collapse the staging**: steps that are separate when guided should happen together, because on paper they do. For a validity question that means the verdict and the row selection are one step, not two. Second, **judge each cell against what the student actually wrote in the cells feeding it**, not against the correct table. A student who makes one slip and then reasons correctly from it should see one error, not a whole column of them; the point of the report is to locate the mistake, not to count its consequences.
