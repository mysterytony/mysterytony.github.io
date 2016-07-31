# Chapter 3 Recurrences, Binary Threes and Sorting

## 3.1 Coefficients of Rational Functions

Suppose that we have computed that the generating series for the sequences $\\{a_n\\}_{n\geq 0}$ is

$$\Phi_A(x) = \sum_{n \geq 0} a_n x^n = \frac{1}{(1-2x)(1-3x)}$$

We show one way we can use this to produce an explicit formula for the terms of the sequence. The firs step is to notice that

$$\frac{1}{(1-2x)(1-3x)} = \frac{-2}{1-2x} + \frac{3}{1-3x}$$

It follows that

$$\begin{align\*}
a_n = [x^n] \Phi_A(x) &= [x^n]\frac{-2}{1-2x} + [x^n]\frac{3}{1-3x}\\\
&= (-2) [x^n] \frac{1}{1-2x} + 3[x^n]\frac{1}{1-3x} \\\
&= -2^{n+1} + 3^{n+1} \end{align\*}$$

We will show how we can compute coefficients whenever the generating series is a rational function whose denominator has constant term 1 and factors into linear terms. Suppose that we have

$$\Phi_A(x) = \frac{f(x)}{g(x)}$$

This $\Phi_A(x)$ is a rational function. If this rational function is not proper, that is, if $deg(f) \geq deg(x)$ then

$$f(x) = q(x) g(x) + r(x)$$

where $deg(r) < deg(x)$ and

$$\Phi_A(x) = q(x) = \frac{r(x)}{g(x)}$$

This means that we can compute the coefficients of rational function provided we can do it for proper rational functions. We can do this in two steps.

#### 3.1.1 Lemma

If $f(x)$ is a polynomial of degree less than $r$, then there is a polynomial $P(x)$ with degree less than $r$ such that

$$[x^n] = \frac{f(x)}{(1-\theta x)^r} = P(n) \theta ^n$$

>#### Proof
Recall that, since $g_1$ and $g_2$ are coprime, we can use the extended Euclidean algorithm to find polynomials $a_1$ and $a_2$ such that $deg(a_1) < deg(g_2)$, $deg(a_2) < deg(g_1)$ and
$$a_1(x) g_1(x) + a_2(x) g_2(x) = 1$$
Suppose now that $deg(f) < deg(g)$, let the polynomial $b_1(x)$ be the remainder when we divide $f(x)a_1(x)$ by $g_2(x)$ and let the polynomial $b_2(x)$ be the remainder when we divide $f(x)a_2(x)$ by $g_1(x)$. Then the modulo $g(x) = g_1(x)g_x(x)$ we have
$$b_1(x)g_1(x)+b_2(x)g_2(x) \equiv f(x)$$
Since both side have degree less than degree of $g$, they are equal
$\square$

The previous two lemmas yield the following theorem. Note that the number $\theta_i$ are the reciprocals of the zero of $g(x)$ and the integer $m_i$ is the multiplicity of $\theta_i^{-1}$ as a zero of $g(x)$.

#### 3.1.3 Theorem
 
Suppose $f$ and $g$ are polynomials such that $deg(f) < deg(g)$. If for $i=1,...,k$ there are complex numbers $\theta_i$ and positive integers $m_i$ such that

$$g(x) = \prod_{i} (1-\theta_i x)^{m_i}$$

then there are polynomials $P_i$ such that $deg(P_i) < m_i$ and

$$[x^n] \frac{f(x)}{g(x)} = \sum_{i=1}^k P_i(n) \theta_i^n$$

## 3.2 Solutions to Recurrence Equations

In earlier sections we have met linear recurrences for sequences, when the generating series for the sequence is a rational function.

#### 3.2.1 Theorem

Let $C(x) = \sum_{n\geq 0} c_n x^n$ where the coefficients $c_n$ satisfy the recurrence

$$c_n + q_1 c_{n-1} + ... + q_k c_{n-k} = 0 \quad (n \geq k)$$

If

$$g(x) := 1 + q_1x +... + q_k x^k$$

there is a polynomial $f(x)$ with degree less than $k$ such that

$$C(x) = \frac{f(x)}{g(x)}$$

>#### Proof
From the rule for the coefficients of a product of power series, if $n \geq k$ then
$$c_n + q_1 c_{n-1} +... + q_k c_{n-k} = \[x^n\] (1+q_1x + ... + q_kx^k) C(x)$$
So $[x^n]g(x)C(x) = 0$ if $n\geq k$ and therefore $g(x)C(x) = f(x)$ for some polynomial $f(x)$ of degree less than $k$.
$\square$

The recurrence is called a **homogeneous equation** because the right-hand size of the equation is zero. The polynomial $h(x) = x^k g(x^{-1})$ in this theorem is called the **characteristic polynomial** of the recurrence. USe Theorem 3.1.3 23 have at once:

#### 3.2.2 Theorem

Suppose $(c_n)_{n\geq 0}$ satisfies the recurrence equation. If the characteristic polynomial of this recurrence has root $\beta_i$ with multiplicity $m_i$, for $i=1,...,j$, then the general solution is

$$c_n = P_1(n)\beta_1^n + ... + P_j(n)\beta_j^n$$

where $P_i(n)$ is a polynomial in $n$ with degree less than $m_i$, and these polynomials are determined by the $c_0,...,c_{k-1}$.

Recall that to find roots of a polynomial, we use the Factor Theorem: if $F(x)$ is a polynomial and $F(a)=0$ then $x-a$ is a factor of $F(x)$.