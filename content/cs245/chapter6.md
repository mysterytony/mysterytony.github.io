# Proofs in Propositional Logic: Natural Deduction

## Introduction

#### Why Another Proof System?

The Resolution system is both sound and complete. Why do we need another proof system?

*	Resolution proofs are fine for computers, but people normally reason quite differently. To model what people do, we must take another approach.
*	Resolution is closely tied to propositional logic. Extending it to other forms of logic requires significant additional techniques.

Thus we will consider a system called Natural Deduction.

*	It closely follows how people (mathematicians, at least) normally make formal arguments.
*	It extends easily to more-powerful forms of logic.

#### Overview of Natural Deduction

As in Resolution, a proof in Natural Deduction consists of a collection of formulas, in some order, each with a justification.

It has some contrast, however.

*	It does a direct proof, rather than a refutation.
*	Assumptions (formulas without a justification) play a crucial role.
*	Using an assumption creates a "sub-proof". Formulas inside a sub-proof may not be used outside of it. An inference rule may refer to a completed sub-proof.

We use the same notation as before for existence of a proof. If there is a proof of a formula $\varphi$ from a set $\Sigma$ of assumptions, we write
$$\Sigma \vdash_{ND} \varphi$$ or simply $$\Sigma \vdash \varphi$$

## Basic Rules

#### The Basic Rules of Natural Deduction

The simplest rule is, if you have a formula in the proof already, you may write it down again. This is called **reflexivity**.

We will write rules like this:

| Name | $\vdash$ notation | inference notation |
|------|-------------------|--------------------|
| Reflexivity, or Premise | $\Sigma$, $\varphi \vdash \varphi$ | $\frac{\varphi}{\varphi}$ |

The notation on the right is as we had before: if we have the formula above the line available, we may write the formula below the line in the proof.

The version in the center reminds us of the role of the assumptions in Natural Deduction. Other rules will make more use of it.

## Conjunction Rules

#### Rules for Conjunction: $\land i$

Each connective symbol has an "introduction role" to conclude formulas that contain it, and an "elimination rule" to conclude a formula that removes it from an earlier formula.

We start with the introduction rule for $\land$

| Name | $\vdash$ notation | inference notation |
|---|---|---|
| $\land$ introduction $\land i$ | If $\Sigma\vdash\varphi$ and $\Sigma\vdash\alpha$, then $\Sigma\vdash\varphi\land\alpha$ | $\frac{\varphi \quad \alpha}{\varphi\land\alpha}$ |

Rule $\land i$ means

If each of the formulas $\varphi$ and $\alpha$ already appears in the proof, then we may write the formula $\varphi \land \alpha$ as the next formula of the proof.

#### Rules for Conjunction: $\land e$

The elimination rule for $\land$ basically "undoes" the introduction.

| Name | $\vdash$ notation | inference notation |
|---|---|---|
| $\land$ elimination $(\land e)$ | If $\Sigma \vdash \varphi \land \alpha$, then $\Sigma \vdash \varphi$ and $\Sigma \vdash \alpha$ | $\frac{\varphi \land \alpha}{\varphi} \quad \frac{\varphi \land \alpha}{\alpha}$ |

Rule $\land e$ means

If the formula $\varphi \land \alpha$ already appears in the proof, then we may write either $\varphi$ or $\alpha$ as the next formula of the proof.

## Implication Rules

#### Rules for Implication: $\rightarrow e$

The rule $\rightarrow$ elimination requires two formulas earlier in the proof.

| Name | $\vdash$ notation | inference notation |
|---|---|---|
| $\rightarrow$ elimination $(\rightarrow e)$ | If $\Sigma\vdash\varphi\rightarrow\alpha$ and $\Sigma\vdash\varphi$, then $\Sigma\vdash\alpha$ | $\frac{\varphi\rightarrow\alpha\quad\varphi}{\alpha}$ |

In words:

If you have that $\varphi$ implies $\alpha$, and also $\varphi$, than you may conclude $\alpha$.

This rule is sometimes referred to by its Latin name, *modus ponens*.

#### Rules for Implication: $\rightarrow i$

The $\rightarrow$ introduction rule is our first to employ a sub-proof.

| Name | $\vdash$ notation | inference notation |
|---|---|---|
| $\rightarrow$ introduction $(\rightarrow i)$ | If $\Sigma,\varphi\vdash\alpha$, then $\Sigma\vdash\varphi\rightarrow\alpha$ | $\frac{\boxed{\begin{matrix}\varphi \\\ \vdots \\\ \alpha \end{matrix}}}{\varphi\rightarrow\alpha}$ |

The rule uses the formula $\varphi$ as a **hypothesis**, or **assumption**. The assumption functions as a premise in the sub-proof, but it is not a premise of the main proof.

The "box" around the sub-proof of $\Sigma,\varphi\vdash\alpha$ reminds us that nothing inside the sub-proof may come out. Outside of the sub-proof, we may use only the whole sub-proof, in a rule (like $\rightarrow$ introduction) that specifies a sub-proof.

#### Sub-Proof Rules

To use rule $\rightarrow i$, we must have a completed sub-proof.

Assumption Rule:

A sub-proof may be opened at any point. Its first line, labeled "assumption", may be any formula.

Sub-proof closure rules:

The most-recently opened sub-proof may be closed at any time. No formula inside a closed sub-proof may be referenced. Only the entire sub-proof may be used, once it is closed.

Finally: every sub-proof must be closed before the last line of the proof.

## Disjunction Rules

#### Rules for Disjunction: $\lor i$ and $\lor e$

Rule $\lor i$ is much like rule $\land i$. Rule $\lor e$, however, is more complicated.

| Name | $\vdash$ notation | inference notation |
|---|---|---|
| $\lor$ introduction $(\lor i)$ | If $\Sigma\vdash\varphi$, then $\Sigma\vdash\varphi\lor\alpha$ and $\Sigma\vdash\alpha\lor\varphi$ | $\frac{\varphi}{\varphi\lor\alpha}\quad\frac{\varphi}{\alpha\lor\varphi}$ |
| $\lor$ elimination $(\lor e)$ | If $\Sigma, \varphi_1\vdash\alpha$ and $\Sigma,\varphi_2\vdash\alpha$, then $\Sigma,\varphi_1\lor\varphi_2\vdash \alpha$ | $\frac{\varphi_1\lor\varphi_2 \quad \boxed{\begin{matrix}\varphi_1 \\\ \vdots \\\ \alpha\end{matrix}} \quad \boxed{\begin{matrix}\varphi_2 \\\ \vdots \\\ \alpha\end{matrix}}}{\alpha}$ |

Rule $\lor e$ is also known as "proof by cases".

## Negation

#### Negation

We shall treat negation by considering contradictions.

We shall use the notation $\bot$ to represent any contradiction. It may appear in proofs as if it were a formula.

The elimination rule for negation:

| Name | $\vdash$ notation | inference notation |
|---|---|---|
| $\bot$ introduction or $\lnot$ elimination $(\lnot e)$ | $\Sigma,\varphi,\lnot\varphi\vdash\bot$ | $\frac{\varphi\quad\lnot\varphi}{\bot}$ |

Formulas $\varphi$ and $\lnot\varphi$ cannot both be true--to have both is a contradiction.

If an assumption $\varphi$ leads to a contradiction, then drive $\lnot \varphi$.

| Name | $\vdash$ notation | inference notation |
|---|---|---|
| $\lnot$ introduction $(\lnot i)$ | $\Sigma,\varphi\vdash\bot$,then$\Sigma\vdash\lnot\varphi$ | $\frac{\boxed{\begin{matrix}\varphi \\\ \vdots \\\ \bot\end{matrix}}}{\lnot \varphi}$ |

#### The Last Two Basic Rules

Double-Negation Elimination:

| Name | $\vdash$ notation | inference notation |
|---|---|---|
| $\lnot\lnot$ elimination $(\lnot\lnot e)$ | If $\Sigma\vdash\lnot\lnot\varphi$, then $\Sigma\vdash\varphi$ | $\frac{\lnot\lnot\varphi}{\varphi}$ |

Contradiction Elimination:

| Name | $\vdash$ notation | inference notation |
|---|---|---|
| $\bot$ elimination $(\bot e)$ | If $\Sigma\vdash\bot$, then $\Sigma\vdash\varphi$ | $\frac{\bot}{\varphi}$ |

#### Derived Rules

Whenever we have a proof of the form $\Gamma\vdash\varphi$, we can consider it as a derived rule:

$$\frac{\Gamma}{\varphi}$$

If we use this in a proof, it can be replaced by the original proof of $\Gamma\vdash\varphi$. The result is a proof using only the basic rules.

Using derived rules does not expand the things that can be proved. But they can make it easier to find a proof.

## Additional Examples and Techniques

#### Some Useful Heuristics

Ideas to construct a proof:

1.	Start with the premises at the top and conclusion at the bottom.
2.	If you can apply an elimination rule to premises, do so. (In the case of $\lor$ elimination, open two sub-proofs).
3.	Next, work backwards from the end. If your target formula has a connective, try its introduction rule.
	This will yield a new target. Repeat step 2 and 3 with the new target, until you reach premises and/or available assumptions.
4.	Treat a subproof as if it were a full proof (with a new premise).

Sometimes these ideas will lead you to a proof; sometimes they will not. If not, try something else instead of an introduction rule.

#### Some Common Derived Rules

Proof by contradiction (reductio ad absurdum)

$$\text{if } \Sigma,\lnot\varphi\vdash\bot \text{, then } \Sigma\vdash\varphi$$

The "Law of Excluded Middle": $\vdash\varphi\lor\lnot\varphi$.

Double-Negation Introduction: $\text{if } \Sigma\vdash\varphi \text{ then } \Sigma\vdash\lnot\lnot\varphi$.