# Working With Formulas

## Evaluation of Formulas

#### Evaluating Formulas

Recall that propositional logic is **compositional**. The value of two sub-formulas, determines the value of their composition using a propositional connective. Given a valuation $t$:

*	$p^t=t(p)$
*	$(\lnot \alpha)^t=$
	*	$T$ if $\alpha ^t=F$
	*	$F$ if $\alpha ^t=T$
*	$(\alpha \land \beta)=$
	*	$T$ if $\alpha^t=\beta^t=T$
	*	$F$ otherwise
*	$(\alpha \lor \beta)^t =$
	*	$T$ if $\alpha^t=T$ or $\beta^t=T$
	*	$F$ otherwise
*	$(\alpha \rightarrow \beta)^t=$
	*	$T$ if $\alpha^t=F$ or $\beta^t=T$
	*	$F$ otherwise
*	$(\alpha \leftrightarrow \beta)=$
	*	$T$ if $\alpha^t=\beta^t$
	*	$F$ otherwise

Using these rules, we can build a **truth table** considering all combinations.

For a formula with $n$ variables, the full truth table has $2^n$ lines.

## Semantic Properties of Formulas

#### Tautology, Satisfaction, Contradiction

**Definition**

A formula $\alpha$ is a **tautology** if and only if for every truth valuation $t$, $\alpha^t=T$.

A formula $\alpha$ is a **contradiction** if and only if for every truth valuation $t$, $\alpha^t=F$.

A formula $\alpha$ is **satisfiable** if and only if there is some truth valuation $t$ such that $\alpha^t=T$.

Note: a formula is satisfiable if and only if it is not a contradiction.

#### "Short-Cutting" a Truth Table

Let $A$ be a truth value; that is $A\in\{T,F\}$, we can combine it with other truth values as follows

| Formula | Result |
|---|---|
| $\lnot T$ | $F$ |
| $\lnot F$ | $T$ |
|||
| $A\land T$ | $A$ |
| $A\land F$ | $F$ |
| $T\land A$ | $A$ |
| $F\land A$ | $F$ |
| $A\land A$  | $A$ |
|||
| $A\lor T$ | $T$ |
| $A\lor F$ | $A$ |
| $T\lor A$ | $T$ |
| $F\lor A$ | $A$ |
| $A\lor A$  | $A$ |
|||
| $A\rightarrow T$ | $T$ |
| $A\rightarrow F$ | $\lnot A$ |
| $T\rightarrow A$ | $A$ |
| $F\rightarrow A$ | $T$ |
| $A\rightarrow A$  | $T$ |
|||
| $A\leftrightarrow T$ | $A$ |
| $A\leftrightarrow F$ | $\lnot A$ |
| $T\leftrightarrow A$ | $A$ |
| $F\leftrightarrow A$ | $\lnot A$ |
| $A\leftrightarrow A$  | $T$ |

We can use these rules to evaluate a formula, by using a **valuation tree**.

## Equivalence

#### Equivalence of Formulas

Suppose that a formula $\alpha \leftrightarrow \beta$ is a tautology.

Then $\alpha$ and $\beta$ must have the same final column in their truth tables--they have the same value under any valuation.

If symbols: $\alpha^t=\beta^t$, for every valuation $t$.

Such formulas are called **equivalent** formulas. We use the notation
$$\alpha \equiv \beta$$
to mean that $\alpha$ and $\beta$ are equivalent.

#### Substitution

**Substitution** is needed to carefully prove the equivalence of formulae. A more robust definition of substitution will be needed later, for predicate logic.

**Definition**

Let $p$ be a propositional variable. Let $\varphi$, $\psi$ be any formulae. Then $\varphi[\psi/p]$ denotes the formula obtained by replacing all copies of $p$ in $\phi$ with $\psi$.

#### Substitution Lemma

**Lemma**

Let $p$ be a propositional variable. Let $\varphi$ be a tautology. Let $\psi$ be any formula. Then $\varphi[\psi/p]$ is a tautology.

#### Substitution Lemma (Variation)

**Lemma**

Let $p$ be a propositional variable. Let $\varphi$ be an unsatisfiable formula. Let $\psi$ be any formula. Then $\varphi[\psi/p]$ is an unsatisfiable formula.

#### Equivalent is Equivalent

**Equivalent formulas are equivalent in any context.

**Theorem**

Let $p$ be a propositional variable. Let $\varphi, \alpha, \beta$ be any formulae. If $\alpha \leftrightarrow \beta$ is a tautology, then $\varphi[\alpha/p]\leftrightarrow\varphi[\beta/p]$ is a tautology.

#### Algebra of Formulas

Many equivalences of formulas look much like rules of ordinary arithmetic and algebra. (We will show how to prove these equivalence later, using the notion of **entailment**)

Commutativity

$$\alpha \land \beta \equiv \beta \land \alpha$$
$$\alpha \lor \beta \equiv \beta \lor \alpha$$
$$\alpha \leftrightarrow \beta \equiv \beta \leftrightarrow \alpha$$

Associativity

$$\alpha \land (\beta \land \gamma) \equiv (\alpha \land \beta) \land \gamma$$
$$\alpha \lor (\beta \lor \gamma) \equiv (\alpha \lor \beta) \lor \gamma$$

Distributivity

$$\alpha \lor (\beta \land \gamma) \equiv (\alpha \lor \beta) \land (\alpha \lor \gamma)$$
$$\alpha \land (\beta \lor \gamma) \equiv (\alpha \land \beta) \lor (\alpha \land \gamma)$$

Idempotence

$$\alpha \lor \alpha \equiv \alpha$$
$$\alpha \land \alpha \equiv \alpha$$

Double Negation

$$\lnot (\lnot \alpha) \equiv \alpha$$

De Morgan's Law

$$\lnot (\alpha \land \beta) = \lnot \alpha \lor \lnot \beta$$
$$\lnot (\alpha \lor \beta)  = \lnot \alpha \land \lnot \beta$$

Simplification I (Absorption)

$$\alpha \land T \equiv \alpha$$
$$\alpha \lor T \equiv T$$
$$\alpha \land F \equiv F$$
$$\alpha \lor F \equiv \alpha$$

Simplification II

$$\alpha \lor (\alpha \land \beta) \equiv \alpha$$
$$\alpha \land (\alpha \lor \beta) \equiv \alpha$$

Implication

$$\alpha \rightarrow \beta \equiv \lnot \alpha \lor \beta$$

Contrapositive

$$\alpha \rightarrow \beta \equiv \lnot \beta \rightarrow \lnot \alpha$$

Equivalence

$$\alpha \leftrightarrow \beta \equiv (\alpha \rightarrow \beta) \land (\beta \rightarrow \alpha)$$

Excluded Middle

$$\alpha \lor \lnot \alpha \equiv T$$

Contradiction

$$\alpha \land \lnot \alpha \equiv F$$

## Entailment

#### Satisfiability of Sets of Formulas

The notion of satisfiability extends to sets of formulas.

Let $\Sigma$ denote a set of formulas and $t$ a valuation. Define

$\Sigma^t$
	*	$T$ if for each $\beta\in\Sigma, \beta^t=T$
	*	$F$ otherwise

When $\Sigma^t=T$, we say that $t$ **satisfies** $\Sigma$.

A set $\Sigma$ is **satisfiable** iff there is some valuation $t$ such that $\Sigma^t=T$.

#### Logical Consequence, a.k.a. Entailment

Let $\Sigma$ be a set of formulas, and let $\alpha$ be a formula. We say that

*	$\alpha$ is a **logical consequence** of $\Sigma$, or
*	$\Sigma$ **(semantically) entails** $\alpha$, or
*	in symbols, $\Sigma \models \alpha$,

if and only if for any truth valuation $t$, if $\Sigma^t=T$ then also $\alpha^t=T$.

We write $\Sigma \not\models \alpha$ for "not $\Sigma \models \alpha$". That is, there exists a truth valuation $t$ such that $\Sigma^t=T$ and $\alpha^t=F$.

#### Equivalence and Entailment

Equivalence can be expressed using the notion of entailment.

**Lemma**

$\alpha \equiv \beta$ if and only if both $\{\alpha\}\models\beta$ and $\{\beta\}\models\alpha$.

## Algebra of Formulas

**Theorem**

$\Sigma \models (\varphi \rightarrow \psi)$ if and only if $\Sigma\cup \{\varphi\} \models \psi$.

## Alternative Sets of Connectives

#### Definability of Connectives

Formulas $\alpha \rightarrow \beta$ and $\lnot \alpha \lor \beta$ are equivalent.

Thus $\rightarrow$ is said to be **definable** in terms of $\lnot$ and $\lor$.

There are actually sixteen possible binary connectives.

Of those, two are essentially nullary (they ignore the values they connect).

For others are essentially unary (they ignore one value but not the other).

#### Adequate Sets

A set of connectives is said to be **adequate** iff any $n$-ary ($n\geq 1$) connective can be defined in terms of the ones in the set.

**Lemma**

$\{\land, \lor, \lnot\}$ is an adequate set of connectives.

**Lemma**

Each of the sets $\{\land, \lnot\}$, $\{\lor, \lnot\}$, and $\{\rightarrow, \lnot\}$ is adequate.

**Theorem**

The set $\{\land, \lor\}$ is not an adequate set of connectives.