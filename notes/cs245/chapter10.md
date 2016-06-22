# Syntax of Predicate Logic

#### The Language of First-Order Logic

The seven kinds of symbols

1.	Constants symbols
	Usually $c,d,c_1,c_2,...,d_1,d2,...$
2.	Variables
	Usually $x,y,z,...,x_1,x_2,...,y_1,y_2,...$
3.	Function symbols
	Usually $f,g,h,...,f_1,f_2,...,g_1,g_2,...$
4.	Predicate symbols
	Usually $P,Q,...,P_1,P_2,...,Q_1,Q_2...,$
5.	Connectives:
	$\lnot, \land, \lor, \rightarrow, \leftrightarrow$
6.	Quantifiers:
	$\forall, \exists$
7.	Punctuation:
	$'(' ')' '\cdot' ','$

The last three kinds of symbols--connectives, quantifiers, and punctuation--will have their meaning fixed by the syntax and semantics.

The first four kinds--constants, variables, functions, and predicates--are not restricted. They may be assigned any meaning, consistent with their kind and arity.

#### Terms

In FOL, we need to consider two kinds of expressions:

*	those that can have a truth value, called **formulas**, and
*	those that refer to an object of the domain, called **terms**

Definition: the set of terms is defined inductively as follows:

1.	Each constant symbol is a term, and each variable is a term.
	Such term are called **atomic** terms
2.	It $t_1,...,t_n$ are terms and $f$ is an $n$-ary function symbol, then $f(t_1,...,t_n)$ is a term. If $n=2$ (a binary function symbol), we may write $(t_1 \quad f \quad t_2)$ instead of $f(f_1,f_2)$.
3.	Nothing else is a term.

#### Examples of Terms

Example 1:

If 0 is constant symbol, $x$ and $y$ are variables, and $s^{(1)}$ and $+^{(2)}$ are function symbols, then 0, $x$ and $y$ are terms, as are $s(0)$ and $+(x, s(y))$.

The expressions $s(x,y)$ and $s+x$ are not terms.

The superscripts on the function symbols indicate the "arity" of each function:

*	$s^{(1)}$ indicates that $s$ is a unary function, and
*	$+^{(2)}$ indicates that $+$ is a binary function.

Why the given examples which fail to be terms are correct:

*	$s(x,y)$ is not a term because $s$ is unary, not binary, and
*	$s+x$ is not a term because $s$ is unary, not nullary

Example 2:

Suppose $f$ is a unary function symbol, $g$ is a binary function symbol, and $a$ is a constant symbol.

Then $g(f(a),a)$ and $f(g(a, f(a)))$ are terms.

The expression $g(a)$ and $f(f(a), a)$ are not terms.

#### Atomic Formulas

As in propositional logic, a formula represents a proposition (a true/false statement). The relation symbols produce propositions.

Definition:

An **atomic formula** (or atom) is an expression of the form

$$P(t_1,...,t_n)$$

where $P$ is an $n$-ary relation symbol and each $t_i$ is a term $(1\leq i\leq n)$.

If $P$ has arity 2, the atom $P(t_1, t_2)$ may alternatively be written  $(t_1 \quad P \quad t_2)$.

The relation symbols produce propositions. In detail, semantically, the relation will evaluate to true if the tuple of interest lies in the relation, and to false otherwise.

#### General Formulas

We define the set of formulas of first-order logic inductively as follows.

1.	An atomic formula is a formula.
2.	If $\alpha$ is a formula, then $(\lnot \alpha)$ is a formula.
3.	If $\alpha$ and $\beta$ are formulas, and $\star$ is a binary connective symbol, then $(\alpha \star \beta)$ is a formula.
4.	If $\alpha$ is a formula and $x$ is a variable, then each of $(\forall x \cdot \alpha)$ and $(\exists x \cdot \alpha)$ is a formula
5.	Nothing else is a formula

In case 4, the formula $\alpha$ is called the **scope** for the quantifier. The quantifier keeps the same scope if it is included in a larger formula.

The **scope** of a variable is determined by the quantifier. We need to keep careful track of the scope because

*	the same variable can occur in different places in a formula, and
*	we will soon discuss **substitutions**, where understanding the scope is crucial to doing the substitution correctly.

Here is a natural example of a first-order formula which uses the quantifier $\forall$:

$$\begin{align\*}
\mathcal{D} &= \mathbb{R} \\\
\varphi &=  (x^2 \geq 0) \text{ ,then construct the formula} \\\
& (\forall x \cdot (x^2 \geq 0))
\end{align\*}$$

In more detail, let $\mathcal{L}$ be a language having

*	constants: $\\\{0\\\}$
*	variables: $\\\{x\\\}$
*	functions: $\\\{*^{(2)}\\\}$
*	relations: $\\\{\geq^{(2)}\\\}$

Then we may define atomic terms $0$ and $x$, and

$$\begin{align\*}
\text{term } &: \quad (x\*x) \\\
\text{atomic formula} &: \quad ((x\*x)\geq 0) \\\
\text{formula} &: \quad (\forall x \cdot ((x\*x)\geq 0))
\end{align\*}$$

We may then interpret this model via the model $\mathcal{M}$, having:

$$\begin{align\*}
\mathcal{D} = dom (\mathcal{M}) &= \mathbb{R} \\\
0^{\mathcal{M}} &= 0 \\\
\*^{\mathcal{M}} &= \text{ usual multiplication} \\\
\geq^{\mathcal{M}} &= \text{ usual } \geq \text{ in } \mathbb{R}
\end{align\*}$$

which interprets the formula as the familiar (true) statement from arithmetic that **the square of any real number is a non-negative real number**.

#### Parse Trees

Parse trees for FOL formulas are similar to parse trees for propositional formulas.

*	Quantifiers $\forall x$ and $\exists y$ form nodes in the same way as negation (i.e., only the one sub-tree)
*	A predicate $P(t_1,...t_n)$ has node labeled $P$ with a sub-tree for each of the terms $t_1,...,t_n$

As always, the domain must be understood before we define variables, predicates and so on.

The domain need not be stated inside the formula itself.

For the formula:

$$
\left(
\forall x \cdot
	\left(\left(
		P(x) \rightarrow Q(x)
	\right)
		\land S(x,y)
	\right)
\right)
$$

|   |   | $\forall x$   |   |   |
|---|---|---|---|---|
| | | $\land$ | | |
| | $\rightarrow$ | | $S$ |
| $P$ | $Q$ || $x$ | $y$ |
| $x$ | $x$ || $x$ | $y$ |

#### Semantics: Interpretations

We shall cover more about syntax later, but we first start the discussion of semantics.

Definition: Fix a set $\mathcal{L}$ of constant symbols, function symbols, and relation symbols.

An **interpretation**, or **model**, $\mathcal{M}$ (for the set $\mathcal{L}$) consists of

*	A non-empty set $dom(\mathcal{M})$, called the domain (or universe) of $\mathcal{M}$.
*	For each constant symbol $c$, a member $c^\mathcal{M}$ of $dom(\mathcal{M})$.
*	For each function symbol $f^{(i)}$, an $i$-ary function $f^\mathcal{M}$.
*	For each relation symbol $R^{(i)}$, an $i$-ary relation $\mathcal{R}^{\mathcal{M}}$.

*	We use the symbol $\mathcal{L}$ for the set of symbols because, in model theory (the subject to which this material properly belongs), this set is called a **language**.

#### Values of Variable-Free Terms

For terms and formulas that contain no variables (and hence contain no quantifiers), an interpretation suffices to specify their meaning. The meaning arises in the obvious fashion from the syntax of the term or formula.

Definition, fix an interpretation $\mathcal{M}$. For each term $t$ containing no variables, the value of $t$ under interpretation $\mathcal{M}$, denoted $t^{\mathcal{M}}$, is as follows:

*	If $t$ is a constant $c$, the value $t^{\mathcal{M}}$ is $c^\mathcal{M}$.
*	If $t$ is $f(t_1,...,t_n)$, the value $t^\mathcal{M}$ is $f^\mathcal{M}(t_1^\mathcal{M},...,t_n^\mathcal{M})$

Note that the definition of $t^\mathcal{M}$ uses the recursive definition of the term $t$ from earlier.

The value of a term is always a member of the domain of $\mathcal{M}$.

#### Formulas with Variable-Free Terms

Formulas get values in much the same fashion as terms, except that values of formulas lie in $\\\{F,T\\\}$.

Definition: Fix an interpretation $\mathcal{M}$. For each formula $\alpha$ containing no variables (and hence containing no quantifiers), the value of $\alpha$ under interpretation $\mathcal{M}$, denoted $\alpha^\mathcal{M}$, is as follows:

*	If $\alpha$ is $R(t_1,...,t_n)$ then

$$\alpha^\mathcal{M} =
\begin{cases}
T \quad \text{if } \langle t_1^\mathcal{M},...,t_n^\mathcal{M} \rangle \in \mathcal{R}^\mathcal{M} \\\
F \quad \text{otherwise}
\end{cases}$$

*	If $\alpha$ is $(lnot \beta)$ or $(\beta \star \gamma)$ for a binary connective $\star$, then $\alpha^\mathcal{M}$ is determined by $\beta^\mathcal{M}$ and $\gamma^\mathcal{M}$ in the same way as for propositional logic.

---
ends page 166