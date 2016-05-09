[<- Go Back](http://tonyli.tk/)

# Semantics of Propositional Logic

The **semantics** of a logic describes how to interpret the well-formed formulas of the logic.

The semantics of propositional logic is "compositional"; in other words, the meaning of a whole formula derives from the meaning of its parts.

In propositional logic, we need to give meaning to atoms, connectives, and formulas.

A **truth valuation** is a function with the set of all proposition symbols as domain and $\{F, T\}$ as range.

Let $\varphi$ and $\eta$ be two formulas that express propositions $A$ and $B$. Intuitively, we give the following meanings to combinations.

*	$\lnot \varphi$ Not $A$
*	$\varphi \land \eta$ $A$ and $B$
*	$\varphi \lor \eta$ $A$ or $B$
*	$\varphi \rightarrow \eta$ If $A$ then $B$
*	$\varphi \leftrightarrow \eta$ $A$ iff $B$

Formally, a connective represents a function from truth values to truth values.

The connective $\lnot$ is unary; it maps one value to one value. We can show its function in a picture, known as a **truth table**:

| $\varphi$ | $(\lnot \varphi)$ |
|-----------|-------------------|
| T         | F                 |
| F         | T                 |

The other connectives are binary; they map two values to one value. Thus their truth tables require four lines to cover the possibilities.

The binary connectives:

| $\varphi$ | $\eta$ | $(\varphi \land \eta)$ | $(\varphi \lor \eta)$ | $(\varphi \rightarrow \eta)$ | $(\varphi \leftrightarrow \eta)$ |
|---|---|---|---|---|---|
| T | T | T | T | T | T |
| T | F | F | T | F | F |
| F | T | F | T | T | F |
| F | F | F | F | T | T |

Every formula has a unique derivation as a well-formed formula. That is, each formula has exactly one of the six forms:

*	an atom
*	$(\lnot \varphi)$
*	$(\varphi \land \eta)$
*	$(\varphi \lor \eta)$
*	$(\varphi \rightarrow \eta)$
*	$(\varphi \leftrightarrow \eta)$

In each case, it is of that form in exactly one way.

Principle of mathematical induction:

Suppose we establish two things: that

*	0 has property $P$, and that
*	whenever any number has property $P$, then the next number also has property $P$.

Then we may conclude that every natural number has property $P$.

To talk about something, give it a name.

A formula is a textual object.

The induction principle gives a "template" for a proof:

*	The proof has two parts: the "basis" and the "inductive step"
*	In the inductive step, hypothesize $P(k)$ and prove $P(k+1)$ from it.

|      | Simple Induction | Strong Induction |
|---|---|---|
| Basis | Show $P(0)$      | Show $P(0)$      |
| Ind. Hypothesis | $P(k)$ holds | $P(m)$ holds, for every $m\leq k$ |
| Ind. Step | Show $P(k+1)$ holds | Show $P(k+1)$ holds |
| Conclusion | $P(k)$ holds for every $k$ | $P(k)$ holds for every $k$ |

Theorem. Let $R$ be a property. Suppose that

1.	for each atomic formula $p$, we have $R(p)$; and
2.	for each formula $\varphi$, if $R(\varphi)$ then $R((\lnot \varphi))$; and
3.	for each pair of formulas $\varphi$ and $\eta$, and each connective $\star$, if $R(\varphi)$ and $R(\eta)$ then $R((\varphi \star \eta))$

Then $R(\varphi)$ for every formula $\varphi$.

Use of this principle is called **structural induction**.