# First-Order Predicate Logic

#### What Propositional Logic Cannot Express

Propositional logic dealt with logical forms of compound propositions. It worked well with relationships like *not, or if/then*.

We would like to have a way to talk about **individual** (also called **objects**) and in addition to talk about some objects, and all objects, without enumerating all objects in a set.

This requires extensions to Propositional Logic.

Some example statements:

>Not all birds can fly.
Every student is younger than some instructor.

These refer to things: birds, students, instructors. They also refer to properties of things, either as individuals (ability to fly) or in combination (relative age).

We would like to make such statements in our logic and to combine them with the connectives of propositional logic.

More examples:

>For any natural number $n$, there is a prime number greater than $n$.
$2^{100}$ is a natural number.
There is a prime number greater than $2^{100}$.
There is a number $c$ such that for every input of $n$ characters, the program executes at most $c\cdot n^2$ operations.

**First-Order Logic (FOL)**, also called **Predicate Logic**, gives us a language to express statements about objects and their properties.

#### Ingredients of FOL

FOL is expressed with the following ingredients:

*	A domain of objects (individual) 
	(e.g. the set of natural number, people)
*	Name of individuals (e.g. '0', Prime Minister)
	(also called "constants")
*	Variables (denoting "generic" objects)
*	Relations (e.g. equal, younger-than, etc.)
*	Functions (e.g. '+', mother-of)
*	Quantifiers
*	Propositional connectives

#### Domains

A **domain** is a set of objects. In principle, any non-empty set can be a domain: the natural numbers, people now alive, $\\\{T,F\\\}$, etc.

Normally, one or more objects in the domain will have a name: e.g., 0, Stephen Harper, T, etc. Such name are called **constant symbols**.

#### Predicates/Relations

A **predicate**, or **relation**, represents a property that an individual, or collection of individuals, may (or may not) have. In English, we might express as

>"... is a student"

In symbolic logic, we write "$S(x)$" to mean "$x$ has property $S$"

For example, if $S$ is the property of being a student, then "Alex is a student" becomes "$S(Alex)$".

Similarly, we might use $I(Sam)$ for "Sam is an instructor" and $Y(Alex, Sam)$" for "Alex is younger than Sam".

#### Representing Relations

Mathematically, we represent a relation by the set of all things that have the property. If $S$ is the set of all students, then $x\in S$ means $x$ is a student. The only restriction on a relation is that it must be a subset of the domain.

A $k$-ary relation is a set of $k$-tuple of domain elements. For example, the binary relation less-than, over a domain $D$, is represented by the set

$$\\\{\langle x,y \rangle \in D^2|x<y\\\}$$

(In a "relational database", the listing of such a set is called a "table")

#### Variables

**Variables** make statements more expressive.

You may think of a variable as a "place holder", or "blank", that can be replaced by a concrete object.

Alternatively, a variable is a name without a fixed referent. Which object the name refers to can vary from time to time.

A variable lets us refer to an object, without specifying--perhaps without even knowing--which particular object it is. Thus we can express a relation "in the abstract".

$$\begin{align\*} S(x): & x \text{ is a student} \\\
I(x): & x \text{ is an instructor} \\\
Y(x,y): & x \text{ is younger than y} \end{align\*}$$

#### Uses of Variables

In general, we use variables that range over the domain to make general statements, such as

$$x^2 \geq 0$$

and in expressing conditions which individuals may or may not satisfy, such as

$$x+x=x*x$$

This latter condition is satisfied by only two numbers: 0 and 2.

The meaning of such expression will depend on the domain. For example, the formula $x^2<x$ is always fast over the domain of integers, but not over the domain of rational numbers.

#### Quantifiers

How to handle "Every student $x$ is younger than some professor $y$"?

In math-speak, we say "for all" to express "every" and "there exist" to express "some". A familiar example from calculus:

>For all $\epsilon>0$, there exists $\delta>0$ such that for all $y$, if $|x-y|<\delta$ then $|f(x)-f(y)|<\epsilon$.

"For all" is denoted $\forall$, the **universal quantifier** symbol, and

"there exists" is denoted by $\exists$, the **existential quantifier** symbol.

In FOL, the above comes out as the formula:

$$\forall \epsilon \cdot 
\left(
	\epsilon > 0 \rightarrow \exists \delta \cdot
	\left(
		\delta > 0 \land \forall y \cdot
		\left(
			|x-y| < \delta \rightarrow |f(x)-f(y)|<\epsilon
		\right)
	\right)
\right)
$$

#### Quantifier Examples

Quantifiers require a variable: $\forall x$ (for all $x$) or $\exists z$ (there exists $z$).

For example, the statement "Not all birds can fly" can be written as

$$
\lnot 
\left(
	\forall x \cdot
	\left(
		B(x)\rightarrow F(x)
	\right)
\right)
$$

"Every student is younger than some instructor" can become

$$
\forall x \cdot
\left(
	S(x)\rightarrow
	\left(
		\exists y \cdot
		\left(
			I(y) \land Y(x,y)
		\right)
	\right)
\right)
$$

#### Functions

In addition to predicates and quantifiers, first-order logic extends propositional logic by using **functions** as well. to see why, consider the following statement.

>Every child is younger than its mother

One might try to express this statement in FOL by the formula

$$
\forall x \cdot \forall y \cdot
\left(
	\left(
		C(x) \land M(y, x)
	\right)
	\rightarrow Y(x,y)
\right)
$$

But this allows $x$ to have several mothers!

**Functions** in FOL gives us a way to express statements more concisely. The previous example can be expressed as

$$
\forall x \cdot
\left(
	C(x) \rightarrow Y(x, m(x))
\right)
$$

Where $m$ denotes the function that takes one argument and returns the mother of that argument.

Formally, we represent a $k$-ary function $f$ as the $k+1$-ary relation $R_j$ given by

$$R_f=
\\\{
	\langle
	x_1,...,x_k,x_{k+1}
	\rangle
	\in D^{k+1} | f(x_1,...,x_k)=x_{k+1}
\\\}
$$

#### Further Examples

More examples:

Alex and Sam have the same maternal grandmother:

$$m(m(a))=m(m(s))$$

Some program computes the squaring function:

$$\exists p \cdot \forall x \cdot r(p,x)=x*x$$

These use $m(\cdot)$ as "mother-of" and $r(\cdot, \cdot)$ as "result-of".

