# Sequent Calculus (LK)

#### Motivation

*	A strength of Natural Deduction is that it gives well with our intuition in searching for and writing proofs.
*	A weakness of Natural Deduction is that there is no algorithm for searching for proofs.
*	Introducing sequent calculus provides a proof system in which there is an algorithm for finding a proof, if one exists.

#### Definition

Idea: make a proof system that manipulates **assumptions** as well as the formula that is being proven.

Let $\Gamma$ and $\Delta$ be sets of formula, we call $\Gamma \vdash \Delta$ a **sequent**.

We write $\Gamma \vdash \Delta$ to indicate that $\Gamma$ proves **at least one** formula in $\Delta$.

**Notation:** in sequent we write

*	$\Gamma,\varphi$ for $\Gamma \cup \\\{\varphi\\\}$ and
*	$\Gamma, \Delta$ for $\Gamma \cup \Delta$

#### Identity Rules

$$\frac{}{\Gamma, \varphi \vdash \varphi, \Delta} \text{(Axiom)}$$

$$\frac{\Gamma \vdash \varphi, \Delta \quad \Gamma, \varphi \vdash \Delta}{\Gamma \vdash \Delta} \text{(Cut)}$$

#### Logical Rules:

$$\frac{\Gamma\vdash\varphi,\Delta}{\Gamma,(\lnot\varphi)\vdash\Delta} (\lnot L)$$

$$\frac{\Gamma,\varphi \vdash \Delta}{\Gamma\vdash(\lnot\varphi),\Delta}(\lnot R)$$

$$\frac{\Gamma\vdash\varphi,\Delta \quad \Gamma, \psi\vdash\Delta}{\Gamma,(\varphi\rightarrow\psi)\vdash\Delta}(\rightarrow L)$$

$$\frac{\Gamma,\varphi\vdash\psi,\Delta}{\Gamma\vdash(\varphi\rightarrow\psi),\Delta}(\rightarrow R)$$

The formula $(\lnot \varphi)$ and $(\varphi \rightarrow \psi)$ in the $\lnot L$, $\lnot R$, $\rightarrow L$ and $\rightarrow R$ rules are called **principal formula** of the inference.

The formula $\varphi$ is called the **cut formula** in the Cut inference.

Note: in many (more formal) definitions of LK, sequents are formed by two **sequences** of formula; then additional **structural inference rules**, such as exchange (allowing to swap formula in the sequence), contraction (allowing to remove adjacent duplicate formula), etc., are needed.

Similarly, $\bot \vdash_{LK} \varphi$ for any formula $\varphi$.

#### Soundness

If $\Gamma\vdash\varphi$ then $\Gamma \models \varphi$

#### Weakening

If $\Gamma\vdash_{LK}\Delta$ then also $\Gamma, \Gamma' \vdash_{LK} \Delta, \Delta'$ for any sets of formula $\Gamma'$ and $\Delta'$.

#### Deduction theorem

If $\Gamma \vdash (\varphi \rightarrow \psi), \Delta$ then also $\Gamma, \varphi \vdash \psi, \Delta$. We get $\Gamma, \varphi \vdash \varphi\rightarrow\psi,\psi,\Delta$ by weakening from our assumption; then

$$\frac{\frac{\vdots}{\Gamma,\varphi\vdash\varphi\rightarrow\psi,\psi,\Delta}(Wkn) \quad \frac{\frac{}{\Gamma,\varphi\vdash\varphi,\psi\Delta}(Ax) \quad \frac{}{\Gamma,\varphi,\psi\vdash\psi,\Delta}(Ax)}{\Gamma,\varphi,\varphi\rightarrow\psi\vdash\psi,\Delta}(\rightarrow L)}{\Gamma,\varphi \vdash, \psi, \Delta} (Cut)$$

#### Completeness: reduction from Hilbert System

If $\Gamma\models\varphi$ then $\Gamma\vdash\varphi$.

#### Cut Elimination - Motivation

Apart from the Cut rule, all rules have the property that the formula above the line are subformula of the formula below the line.

So if we could eliminate the Cut rule, then we would be able to search for a proof algorithmically.

*	Start with the conclusion at the bottom
*	Select a formula in the conclusion to decompose (going upwards) according to one of the non-Cut rules.
*	The new formula get simpler at every step
*	There are finitely many choices available ( and finitely many new branches created) at every step.
*	Hence after finitely many steps, our process will terminate.
*	If at that point all branches have arrived at the Axiom, then we have a proof. Otherwise, no proof exists.

#### Theorem

For every proof of a sequent $\Gamma\vdash\Delta$ in LK there is also proof of the same sequent in LK\\{Cut}

#### Remark on the Proof

It bears repeating that the induction step performs induction simultaneously on

*	the size of the proof, and
*	complexity of the cut formula.