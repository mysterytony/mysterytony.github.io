# Soundness and Completeness of Natural Deduction

#### Soundness and Completeness

As with Resolution, we want Natural Deduction to be both sound and complete.

**Soundness** of Natural Deduction means that the conclusion of a proof is always a logical consequence of the premises. That is,

$$\text{If }\Sigma\vdash_{ND}\varphi, \text{ then }\Sigma\models\varphi$$

**Completeness** of Natural Deduction means that all logical consequences in propositional logic are provable in Natural Deduction. That is

$$\text{If }\Sigma\models\varphi, \text{ then } \Sigma\vdash_{ND}\varphi$$

As on the slide, our next major goal is to prove the **soundness** and **completeness** of Natural Deduction. These two results connect provability (syntactic) with entailment (semantic), in both directions.

1.	**Soundness**: If $\Sigma\vdash\varphi$, then $\Sigma\models\varphi$.
2.	**Completeness**: If $\Sigma\models\varphi$, then $\Sigma\vdash\varphi$.

These proofs will both be simplest, if we can work with the **smallest** possible set of Natural Deduction rules. We need to make certain that all Natural Deduction rules can be derived from our minimal set.

#### Minimal Inference Rules

From now on, write $\bot$ for "falsity"

Base:

$$\frac{}{\Sigma\vdash\varphi}\text{ Axiom if }\varphi\in\Sigma$$

Induction:

$$\frac{\Sigma\vdash\varphi\quad\Sigma\vdash(\varphi\rightarrow\psi)}{\Sigma\vdash\psi},\rightarrow e$$

$$\frac{\Sigma\cup\{\varphi\}\vdash\psi}{\Sigma\vdash(\varphi\rightarrow\psi)}, \rightarrow i$$

$$\frac{\Sigma\cup\{(\varphi\rightarrow\bot)\}\vdash\bot}{\Sigma\vdash\varphi}, \text{Reductio ad absurdum (RAA)}$$

#### Deriving All Natural Deduction Rules

$\land i$

$$\frac{\varphi\quad\psi}{((\varphi\rightarrow(\psi\rightarrow\bot))\bot)}$$

$\land e(left)$

$$\frac{((\varphi\rightarrow(\psi\rightarrow\bot))\bot)}{\varphi}$$

$\land e(right)$

$$\frac{((\varphi\rightarrow(\psi\rightarrow\bot))\bot)}{\psi}$$

*	Recall that proof rules in any proof system, including Natural Deduction, are **purely syntactic**.
*	However, we want to make our syntactic rules agree with our **semantic intuition** as much as possible.

$\lor i(left)$

$$\frac{\varphi}{((\varphi\rightarrow\bot)\rightarrow\bot)}$$

$\lor i(right)$

$$\frac{\psi}{((\varphi\rightarrow\bot)\rightarrow\bot)}$$

$\lor e$

$$\frac{((\varphi\rightarrow\bot)\rightarrow\bot)\quad(\varphi\rightarrow\alpha)\quad(\psi\rightarrow\alpha)}{\alpha}$$

*	To introduce $(\lnot \varphi)$, we introduce $(\varphi\rightarrow\bot)$ using the $\rightarrow i$ rule.
*	To eliminate $(\lnot \varphi)$, we eliminate $(\varphi\rightarrow\bot)$ using the $\rightarrow e$ rule.

By now, we are convinced that all propositional formulae can be written using only $\{\rightarrow, \bot\}$.

This fact is analogous to the fact that $\{\rightarrow,\lnot\}$ is an adequate set of connectives for propositional logic.

#### Substitution Theorem

If $\Sigma\vdash\varphi$, then $(\Sigma\vdash\varphi)\[\psi/p\]$, for any propositional variable $p$ and any formula $\psi$.

#### Weakening Theorem

If $\Sigma\vdash\varphi$, then $\Sigma\cup\Sigma'\vdash\varphi$, for any $\Sigma'$.

#### Inconsistent/Consistent

We call $\Sigma$ **inconsistent$** if $\Sigma\vdash\bot$.

We call $\Sigma$ **consistent** if it is not inconsistent.

**Entailment and Provability**

We call $\Sigma$ **unsatisfiable** if no valuation $t$ makes $\Sigma^t=T$.

Recall, if $\Sigma$ is unsatisfiable then $\Sigma\models\varphi$ for any $\varphi$.

Similarly, if $\Sigma$ is inconsistent then $\Sigma\vdash\varphi$, for any $\varphi$.

#### Lemma

$\Sigma\vdash\varphi$ if and only if $\Sigma\cup(\varphi\rightarrow\bot)$ is inconsistent.

#### Compactness

We already showed that if $\Sigma\vdash\varphi$, then there is a finite subset $\Sigma_0\subset\Sigma$ such that $\Sigma_0\vdash\varphi$.

Applying soundness, we have that if $\Sigma\models\varphi$, then there is a finite subset $\Sigma_0\subset\Sigma$ such that $\Sigma_0\models\varphi$.

There is corresponding result about finiteness in the other direction, called **Compactness**.

#### Compactness Theorem

If every finite subset $\Sigma_0\subset\Sigma$ is satisfiable, then $\Sigma$ is satisfiable.

#### Definition

We use the notation

$$\mod(\Sigma)=\{t|\Sigma^t=T\}$$

i.e., $\mod{\Sigma}$ denotes the set of valuations which satisfy $\Sigma$.

#### Definition

A set $S$ of valuations is called **definable** if

$$S=\mod(\Sigma), \text{ for some set } \Sigma \text{ of formulae}$$

#### Motivation

*	A strength of Natural Deduction is that it gives well with our intuition in searching for and writing proofs.
*	A weakness of Natural Deduction is that there is no algorithm for searching for proofs.
*	Introducing sequent calculus provides a proof system in which there is an algorithm for finding a proof, if one exists.

---
ends page  115