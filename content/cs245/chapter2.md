# Syntax of Propositional Logic

#### Atomic and compound propositions

In propositional logic, simple **atomic** propositions are the basic building blocks.

We connect atomic propositions into **compound** propositions, and then analyze sets of interrelated propositions.

## Symbols, expressions and formulas

#### Symbols and expression

Propositions are represented by **formulas**.

A formula consists of a sequence of **symbols**.

There are three kinds:

*	**Propositional variables** Usually lowercase Latin letters
	e.g., $p,q,r$ perhaps with subscripts ($p_1,p_2,q_27$)
*	**Connectives** $\neg, \lor, \land, \rightarrow, \leftrightarrow$.
*	**Punctuation** only two such "(" and ")"

We call an arbitrary finite sequence of symbols an **expression** (or string).

#### Example: expression

An **expression** is finite sequence (or "string") of symbols.

The **length** of an expression is its number of symbols.

We often use a letter that is not formally a symbol in order to name an expression. For example, we might denote the expression above by $\alpha$. This is an example of a "meta-symbol". It is NOT a symbol!

#### Talking about expressions

Some terminology for expressions.

*	Two expression $\alpha$ and $\beta$ are **equal**, written as $\alpha = \beta$, iff they are the same length, say $n$, and if $n>0$ then for all $i\in[1..n]$ the $i$-th symbol of $\alpha$ is the same as the $i$-th symbol of $\beta$.
*	We write $\alpha \beta$ to mean the **concatenation** of two expression $\alpha$ and $\beta$. For example, if
$$\alpha = (\neg)()$$
and
$$\beta =\lor pq \rightarrow$$
then
$$\alpha \beta = (\neg)()\lor pq\rightarrow$$

#### Concatenation, formally

**Definition**

If $\alpha$ is an expression of length $i$ and $\beta$ is an expression of length $j$, the $\alpha \beta$ is an expression of length $i+j$. We have the $k$-th symbol of $\alpha \beta$ is

*	the $k$-th symbol of $\alpha$ if $k\leq i$
*	the $(k-i)$-th symbol of $\beta$ if $k>i$

#### Definition of "formula"

Let $P$ be a set of propositional variables. We define the set of **formulas over $P$** inductively as follows

1.	An expression consisting of a single symbol of $P$ is a formula.
2.	If $\varphi$ is a formula, then $(\neg\varphi)$ is a formula.
3.	If $\varphi$ is a formula and $\eta$ is a formula, then each of $(\varphi \land \eta)$, $(\varphi \lor \eta)$, $(\varphi \rightarrow \eta)$, $(\varphi \leftrightarrow \eta)$ is a formula.
4.	Nothing else is a formula

#### The six kinds of formulas

From the definition, we see there are six kinds of formulas.

*	A propositional variable is called an **atom**.
*	A formula $(\neg \varphi)$ is called a **negation**.
*	A formula $(\varphi \land \eta)$ is called a **conjunction**.
*	A formula $(\varphi \lor \eta)$ is called a **disjunction**.
*	A formula $(\varphi \rightarrow \eta)$ is called an **implication**.
*	A formula $(\varphi \leftrightarrow \eta)$ is called an **equivalence**.

