# Chapter 3: Continuous Functions

## 3.1 Definition of Continuous Function

In many situations, we shall require that a function $f(x,y)$ is **continuous**. Intuitively, this means that the graph of $f$ (the surface $z=f(x,y)$) has no "breaks" or "holes" in it. As with functions of one variable, continuity is defined by using limits.

#### Definition

A function $f(x,y)$ is **continuous** at $(a,b)$ if and only if

$$\lim_{(x,y)\rightarrow (a,b)}f(x,y)=f(a,b)$$

Additionally, if $f$ is continuous at every point in a set $D\subset \mathbb{R}^2$, then we say that $f$ is continuous on $D$.

#### Remark

There are really three requirements in this definition:

1.	$\lim_{(x,y)\rightarrow (a,b)}f(x,y)$ exists
2.	$f$ is defined at $(a,b)$
3.	the the stated equality

## 3.2 The Continuity Theorems

One can often quickly prove that a function is continuous by applying certain theorem. The idea is to view a given function as being formed form simple functions by certain basic operations, which we now define.

#### Definition

If $f(x,y)$ and $g(x,y)$ are scalar functions and $(x,y)\in D(f)\cap D(g)$, then:

1.	the **sum** $f+g$ is defined by
	$$(f+g)(x,y)=f(x,y)+g(x,y)$$
2.	the **product** $fg$ is defined by
	$$(fg)(x,y)=f(x,y)g(x,y)$$
3.	the **quotient** $\frac{f}{g}$ is defined by
	$\left(\frac{f}{g}\right)(x,y)=\frac{f(x,y)}{g(x,y)}$ if $g(x,y)\neq 0$

#### Definition

For scalar functions $g(t)$ and $f(x,y)$ the **composite function** $f\circ g$ is defined by

$$(g\circ f)(x,y)=g(f(x,y))$$

for all $(x,y)\in D(f)$ for which $f(x,y)\in D(g)$.

When composing multivariable functions, it is very important to make sure the range of the inner function is a subset of the domain of the outer function.

We shall refer to the following theorems collectively as the **Continuity Theorems**

#### Theorem 1

If $f$ and $g$ are both continuous at $(a,b)$, then $f+g$ and $fg$ are continuous at $(a,b)$.

>#### Proof
We prove the result for $f+g$. By the hypothesis and the continuous function we have that
$$\lim_{(x,y)\rightarrow (a,b)}f(x,y)=f(a,b), \quad \lim_{(x,y)\rightarrow (a,b)}g(x,y)=g(a,b)$$
Hence, by definition of the sum and limit properties, we get
$$\lim_{(x,y)\rightarrow (a,b)}(f+g)(x,y)=\lim_{(x,y)\rightarrow (a,b)}f(x,y)+\lim_{(x,y)\rightarrow (a,b)}g(x,y)=f(a,b)+g(a,b)=(f+g)(a,b)$$

#### Theorem 2

If $f$ and $g$ are both continuous at $(a,b)$ and $g(a,b)\neq 0$, the the quotient $\frac{f}{g}$ is continuous at $(a,b)$.

#### Theorem 3

If $f(x,y)$ is continuous at $(a,b)$ and $g(t)$ is continuous at $f(a,b)$, then the composition $g\circ f$ is continuous at $(a,b)$.

>#### Proof
Let $\epsilon >0$. By definition of continuity we have that
$$\lim_{t\rightarrow f(a,b)}g(t)=g(f(a,b))$$
So, by definition of a limit there exists a $\delta_1>0$ such that
$$|t-f(a,b)|<\delta_1 \text{ implies } |g(t)-g(f(a,b))|<\epsilon$$
Similarly, we have that
$$\lim_{(x,y)\rightarrow (a,b)}f(x,y)=f(a,b)$$
Hence, given the above $\delta_1$, there exist a $\delta>0$ such that
$$||(x,y)-(a,b)||<\delta \text{ implies } |f(x,y)-f(a,b)|<\delta_1$$
Combining we get
$$||(x,y)-(a,b)||<\delta \text{ implies } |f(x,y)-f(a,b)|<\delta_1 \text{ implies } |g(f(x,y))-g(f(a,b))|<\epsilon$$
or equivalently,
$$||(x,y)-(a,b)||<\delta \text{ implies } |(g\circ f)(x,y)-(g\circ f)(a,b)|<\epsilon$$
Consequently, by definition of a limit,
$$\lim_{(x,y)\rightarrow (a,b)}(g\circ f)(x,y) =(g\circ f)(a,b)$$
which proves that $g\circ f$ is continuous at $(a, b)$

Before we can apply these theorems, we need a list of basic functions which are known to be continuous on their domains:

*	the constant function $f(x,y)=k$
*	the power functions $f(x,y)=x^n$, $f(x,y)=y^n$
*	the logarithm function $\ln(\cdot)$
*	the exponential function $e^(\cdot)$
*	the trigonometric functions, $\sin(\cdot), \cos(\cdot)$, etc.
*	the inverse trigonometric functions, $\arcsin(\cdot)$, etc.
*	the absolute value function $|\cdot|$

## 3.3 Limits Revised

So far in this chapter, we have shown how to prove that a function is continuous at a point essentially "by inspection", using the Continuity Theorems. This makes it easy to evaluate $\lim_{(x,y)\rightarrow (a,b)}f(x,y)$ if $f$ is continuous at $(a,b)$. In particular, if $f$ is continuous at $(a,b)$, then $\lim_{(x,y)\rightarrow (a,b)}f(x,y)$ can be evaluated simply evaluating $f(a,b)$.

#### Remark

In applying the Squeeze Theorem one has to prove that $\lim_{(x,y)\rightarrow (a,b)}B(x,y)=0$. One hopes to be able to evaluate this limit by inspection, and so one tries to set up the inequality in Squeeze Theorem so that $B(x,y)$ is continuous at $(a,b)$.

