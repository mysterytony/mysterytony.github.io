# Proof

## What is Logic?

#### Logic: What and Why

**Logic** is the systematic study of the principles of reasoning and inference.

We use logic throughout computer science,

*	To model the computer hardware, software and embedded systems we create or encounter, in order to reason about those objects in a
mathematically precise and rigorous manner.
*	To understand how to develop systems that can themselves apply reason and make inferences ("artificial intelligence")

Historically, logic and CS are closely linked.

*	To define and build a "computer" requires deep ideas from logic.
*	Computer science gave the first real definition of "rigorous argument": an argument that may be checked by a machine.

## Propositional Logic

#### Propositions

A **proposition** is a declarative sentence that is either **true** or **false**.

#### Translating from English to propositional logic

English phrases for connectives

*	$\lnot p$:	not $p$; $p$ does not hold; $p$ is false; it is not the case that $p$
*	$p\land q$:	$p$ and $q$; $p$ but $q$; not only $p$ but $q$; $p$ while $q$; $p$ despite $q$; $p$ yet $q$; $p$ although $q$
*	$p\lor q$:	$p$ or $q$; $p$ or $q$ or both; $p$ and/or $q$; $p$ unless $q$
*	$p \rightarrow q$:	if $p$ then $q$; $p$ implies $q$; $q$ if $p$; $p$ only if $q$; $q$ when $p$
*	$p\leftrightarrow q$:	$p$ if and only if ($p$ iff $q$); $p$ is equivalent to $q$; $p$ exactly if $q$; $p$ is necessary and sufficient for $q$

#### The Aspects of Logic

Propositional logic is a form of **symbolic** logic. that is, it uses strings of symbols to represent propositions and to build arguments.

A symbolic logic is formalized by the following:

**Syntax**: What statements to we consider?

**Semantics**: What does a statement mean?

**Proof procedures**: Given a statement, can we prove it true?