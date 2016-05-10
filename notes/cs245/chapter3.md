[<- Go Back](http://tonyli.tk/)

# Semantics of Propositional Logic

#### Semantics

The **semantics** of a logic describes how to interpret the well-formed formulas of the logic.

The semantics of propositional logic is "compositional"; in other words, the meaning of a whole formula derives from the meaning of its parts.

In propositional logic, we need to give meaning to atoms, connectives, and formulas.

#### Valuations: the status of atoms

#### Definition

A **truth valuation** is a function with the set of all proposition symbols as domain and $\{F, T\}$ as range.

In other words, a truth valuation assigns a value to every propositional variable.

*	If $t(p)=T$, then we say/write, "$t$ makes $p$ true".
*	If $t(p)=F$, then we say/write, "$t$ makes $p$ false".

A propositional variable has no intrinsic meaning; it gets a meaning only via a valuation.

#### Compound formulas

Let $\varphi$ and $\eta$ be two formulas that express propositions $A$ and $B$. Intuitively, we give the following meanings to combinations.

*	$\lnot \varphi$ Not $A$
*	$\varphi \land \eta$ $A$ and $B$
*	$\varphi \lor \eta$ $A$ or $B$
*	$\varphi \rightarrow \eta$ If $A$ then $B$
*	$\varphi \leftrightarrow \eta$ $A$ iff $B$

#### Semantics of Connectives

Formally, a connective represents a function from truth values to truth values.

The connective $\lnot$ is unary; it maps one value to one value. We can show its function in a picture, known as a **truth table**:

| $\varphi$ | $(\lnot \varphi)$ |
|-----------|-------------------|
| T         | F                 |
| F         | T                 |

The other connectives are binary; they map two values to one value. Thus their truth tables require four lines to cover the possibilities.

#### Truth tables for connectives

The binary connectives:

| $\varphi$ | $\eta$ | $(\varphi \land \eta)$ | $(\varphi \lor \eta)$ | $(\varphi \rightarrow \eta)$ | $(\varphi \leftrightarrow \eta)$ |
|---|---|---|---|---|---|
| T | T | T | T | T | T |
| T | F | F | T | F | F |
| F | T | F | T | T | F |
| F | F | F | F | T | T |

$\land$ is as expected: $(\varphi \land \eta)$ is true if and only if both $\varphi$ and $\eta$ are true.

The column for $\lor$ shows that it means "one or the other or both". (This is called "inclusive or").

#### "If-then"

Some people find the meaning of $\rightarrow$ rather unintuitive. You may want to think of $\rightarrow$ as meaning **truth is preserved**.

*	The meaning of $T\rightarrow T$ is $T$ because truth is preserved.
*	The meaning of $T\rightarrow F$ is $F$ because truth is not preserved.
*	The meaning of $F\rightarrow T$ and $F\rightarrow F$ are both $T$, because there is no truth to preserve.

#### Summary: value of a formula

Fix a truth valuation $t$. Every formula $\varphi$ has a value under $t$, denoted $\varphi^t$, determined as follows

1.	$p^t=t(p)$
2.	$(\lnot \varphi)^t =$
	*	$T$ if $\varphi ^t= F$
	*	$F$ if $\varphi ^t= T$ 
3.	$(\varphi \land \eta)^t =$
	*	$T$ if $\varphi^t=\eta^t=T$
	*	$F$ otherwise
4.	$(\varphi \lor \eta)^t =$
	*	$T$ if $\varphi^tT$ or $\eta^t=T$
	*	$F$ otherwise
5.	$(\varphi \rightarrow \eta)=$
	*	$T$ if $\varphi^t=F$ or $\eta^t=T$
	*	$F$ otherwise
6.	$(\varphi \leftrightarrow \eta)=$
	*	$T$ if $\varphi^t=\eta^t$
	*	$F$ otherwise

The value of a formula comes from the values of its variables, combined as given by its connectives.

The valuation $t$ is necessary. Without a valuation, a formula has no value.

#### Unique Readability of Formulas

#### Theorem

Every formula has a unique derivation as a well-formed formula. That is, each formula has exactly one of the six forms:

*	an atom
*	$(\lnot \varphi)$
*	$(\varphi \land \eta)$
*	$(\varphi \lor \eta)$
*	$(\varphi \rightarrow \eta)$
*	$(\varphi \leftrightarrow \eta)$

In each case, it is of that form in exactly one way.

As an example, consider $((p\land q)\rightarrow r)$. It can be formed from the two formulas $(p\land q)$ and $r$ using the connective $\rightarrow$.

If we tried to form it using $\land$, the two parts would need to be $(p$ and $q)\rightarrow r$, but neither of those is a formula.

#### Mathematical Induction

#### Principle of mathematical induction:

Suppose we establish two things: that

*	0 has property $P$, and that
*	whenever any number has property $P$, then the next number also has property $P$.

Then we may conclude that every natural number has property $P$.

#### Observations / Techniques

**To talk about something, give it a name.** e.g. property $P$, number $k$, etc.

**A formula is a textual object.** In this text, we can substitute one symbol or expression for another. For example, we put $"k+1"$ in place of $"k"$.

**The induction principle gives a "template" for a proof:**

*	The proof has two parts: the "basis" and the "inductive step"
*	In the inductive step, hypothesize $P(k)$ and prove $P(k+1)$ from it.

#### Simple Induction vs. Strong Induction

|      | Simple Induction | Strong Induction |
|---|---|---|
| Basis | Show $Q(0)$      | Show $P(0)$      |
| Ind. Hypothesis | $Q(k)$ holds | $P(m)$ holds, for every $m\leq k$ |
| Ind. Step | Show $Q(k+1)$ holds | Show $P(k+1)$ holds |
| Conclusion | $Q(k)$ holds for every $k$ | $P(k)$ holds for every $k$ |

What is the difference? No difference!

Define $Q(k)$ as a the property "$P(m)$ holds, for every $m\leq k$".

*	$Q(0)$ is equivalent to $P(0)$.
*	$Q(k+1)$ is equivalent to "$Q(k)$ and $P(k+1)$". To prove $Q(k+1)$ from $Q(k)$, need only to prove $P(k+1)$.
*	"$Q(k)$ for every $k$" is equivalent to "$P(k) for every $k$".

#### Structural Induction

A formula is not a natural number, but it suffices to prove any one of the following.

For every natural number $n$, every formula with $n$ or fewer symbols has property $P$.

OR

For every natural number $n$, every formula with $n$ or fewer connectives has property $P$.

OR

For every natural number $n$, every formula whose parse tree has height $n$ or less has property $P$.

OR

For every natural number $n$, every formula producible with $n$ or fewer uses of the formation rules has property $p$.

In each of these formulations, the induction step requires showing that if $P(\varphi)$ and $P(\eta)$, then $P((\lnot \varphi))$ and $P((\varphi \star \eta))$. Formula $\varphi$ and $\eta$ have smaller $n$ values than $(\lnot \varphi)$ and $(\varphi \star \eta)$ do.

#### The Principle of Structural Induction

#### Theorem. 

Let $R$ be a property. Suppose that

1.	for each atomic formula $p$, we have $R(p)$; and
2.	for each formula $\varphi$, if $R(\varphi)$ then $R((\lnot \varphi))$; and
3.	for each pair of formulas $\varphi$ and $\eta$, and each connective $\star$, if $R(\varphi)$ and $R(\eta)$ then $R((\varphi \star \eta))$

Then $R(\varphi)$ for every formula $\varphi$.

Use of this principle is called **structural induction**.

Structural induction is a special case of mathematical induction.

We will define the semantics (meaning) of a formula from its syntax. Thus **unique formation ensures unambiguous formulas**.

**Given a formula, determine its sub-formulas by counting parentheses**.