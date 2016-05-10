[<- Go Back](http://tonyli.tk/)

# Working With Formulas

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

#### Tautology, Satisfaction, Contradiction

#### Definition

A formula $\alpha$ is a **tautology** if and only if for every truth valuation $t$, $\alpha^t=T$.

A formula $\alpha$ is a **contradiction** if and only if for every truth valuation $t$, $\alpha^t=F$.

A formula $\alpha$ is **satisfiable** if and only if there is some truth valuation $t$ such that $\alpha^t=T$.

Note: a formula is satisfiable if and only if it is not a contradiction.