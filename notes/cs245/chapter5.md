# Proofs in Propositional Logic: Resolution

## Notions of Proof

#### What Is a Proof?

A **proof** is a formal demonstration that a statement is true.

*	It must be mechanically checkable. A reader need not apply any intuition or insight to verify that it is correct.
*	In fact, a computer could verify its correctness.

A proof is generally syntactic, rather than semantic.

*	Syntactic rules permit mechanical checking.
*	The rules are chosen for semantic reasons, but their use remains purely syntactic.

#### What Makes a Proof?

Generically, a proof consists of a list of formulas.

*	The assumptions, if any, are listed first.
*	Each subsequent formula must be a valid **inference** from preceding formulas.
	That is, there is an **inference rule** (defined by the proof system) that justifies the formula, based on the previous ones.
*	The final formula is the conclusion.

The key here is the set of inference rules. A set of inference rules defines a **proof system**.

We notate "there is a proof with assumption $\Sigma$ and conclusion $\varphi$" by
$$\Sigma \vdash \varphi$$

#### Inference Rules

In general, an inference rule is written as
$$\frac{\alpha_1 \quad \alpha_2 \cdots \alpha_i}{\beta}$$

This means suppose that each of the formulas $\alpha_1, \alpha_2,...,\alpha_i$ already appears in the proof (either assumed or previously inferred). Then one may infer the formula $\beta$.

#### Conjunctive Normal Form

The Resolution rule can only be used successfully on formulas of a restricted form.

**Conjunctive normal form (CNF)**:

*	A **literal** is a (propositional variable or the negation of a variable.)
*	A **clause** is a disjunction of literals.
*	A formula is in **conjunctive normal form** if it is a conjunction of clauses.

In other words, a formula is in CNF if and only if

*	its only connectives are $\lnot$, $\lor$, $land$.
*	$\lnot$ applies only to variables.
*	$\lor$ applies only to sub-formulas with no occurrence of $\land$.

#### Converting to CNF

1.	Eliminate implication and equivalence.

	Replace $(\alpha \rightarrow \beta)$ by $(\lnot \alpha \lor \beta)$

	Replace $(\alpha \leftrightarrow \beta)$ by $(\lnot \alpha \lor) \land (\alpha \lor \lnot \beta)$.

2.	Apply De Morgan's and double-negation laws as often as possible.
	
	Replace $\lnot (\alpha \lor \beta)$ by $\lnot \alpha \land \lnot \beta$.

	Replace $\lnot (\alpha \land \beta)$ by $\lnot \alpha \lor \lnot \beta$.

	Replace $\lnot \lnot \alpha$ by $\alpha$.

3.	Transform into a conjunction of clauses using distributivity.
	
	Replace $(\alpha \lor (\beta \land \gamma))$ by $((\alpha \lor \beta) \land (\alpha \lor \gamma))$.

4.	Simplify using idempotence, contradiction, excluded middle and Simplification I & II