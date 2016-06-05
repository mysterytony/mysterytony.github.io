# Chapter 2 Compositions and Strings

## 2.1 Compositions of an Integer

#### 2.1.1 Definition

For nonnegative integer $n$ and $k$, a **composition** of $n$ with $k$ parts is an ordered list $(c_1,...,c_k)$ of positive integers $c_1,...,c_k$, such that $c_1+...+c_k=n$. The positive integer $c_1,...,c_k$ are called the **parts** of the composition. There is one composition of $0$, the **empty** composition, which is a composition with $0$ parts.

The compositions of $4$ are $(4)$, with 1 part; $(3,1),(2,2),(1,3)$, with $2$ parts; $(2,1,1),(1,2,1),(1,1,2)$, with $3$ parts; and $(1,1,1,1)$, with $4$ parts. Thus these are eight compositions of $4$, one with $1$ part, three with $2$ parts, three with $3$ parts, and one with $4$ parts.

Let $\mathbb{N}=\{1,2,3,4,...\}$ be the set of all positive integers. Then each part of a composition is in $\mathbb{N}$.

#### 2.1.2 Problem

How many compositions of $n$ are there with $k$ parts, for $n\geq k \geq 1$?

We let $S=\mathbb{N}^k$. Then a composition $(c_1,...,c_k)$ of $n$ with $k$ parts is an element of $S$ with the restriction that $c_1+...c_k=n$ Now let $w(c_1,...,c_k)=c_1+...c_k$, and $w(c_i)=c_i$ for $c_i\in\mathbb{N}$, $i=1,...,k$. Then the compositions of $n$ with $k$ parts are the elements of $S$ of weight $n$, and we have $w(c_1,...,c_k)=w(c_1)+...+w(c_k)$. Thus the generating series for the number of compositions of $n$ with $k$ parts is:

$$\begin{align\*} \Phi_S(x) &= \Phi_{\mathbb{N}^k}(x) \\\
&= (\Phi_{\mathbb{N}}(x))^k \\\
&= \left(\sum_{i\geq 1}x^i\right)^k \\\
&= (x(1-x)^{-1})^k \end{align\*}$$

Therefore, the number of compositions of $n$ with $k$ parts is

$$\begin{align\*} \[x^n\]x^k(1-x)^{-k} &= \[x^{n-k}\](1-x)^{-k} \\\
&= {n-k+k-1 \choose k-1} \\\
&= {n-1 \choose k-1} \end{align\*}$$

Thus there are ${n-1 \choose  k-1}$ compositions of $n$ with $k$ parts, for $n\geq k\geq 1$.

The solution method adapts easily to many problems involving compositions. In general, we will be asking questions in the form of "how many compositions of $n$ has such and such properties?" And the way we are going to answer them is to follow these steps:

1.	Find the set $S$ of all compositions that satisfy these properties (without regard for what $n$ is);
2.	Find the generating series for $S$ (the weight of a composition is the sum of its parts, so we can apply the Sum and Product Lemmas);
3.	The answer to our question is the coefficient of $x^n$ in $\Phi_S(x)$. Find an explicit formula for this coefficient if possible.

#### 2.1.3 Problem

How many $k$-part compositions of $n$ are there in which each part is an odd number?

In this case let $S=\mathbb{N}^k_{odd}$, where $\mathbb{N}_{odd}=\{1,3,5,7,...\}$. Then the required compositions are the elements of $S$ of weight $n$, so the required generating series is

$$\begin{align\*} \Phi_S(x) &= \Phi_{\mathbb{N}^k_{odd}}(x) \\\
&= \left(\Phi_{\mathbb{N}\_{odd}}(x) \right)^k,\quad \text{by Product Lemma} \\\
&= \left(\sum_{i\geq 0}x^{2i+1}\right)^k \\\
&= (x(1-x^2)^{-1})^k, \quad \text{by Geometric Series} \end{align\*}$$

It follows that the number of compositions of the required form is

$$\begin{align\*} 
\[x^n\] (x(1-x^2)^{-1})^k &= \[x^n\] x^k (1-x^2)^{-k} \\\
&= \[x^{n-k}\](1-x^2)^{-k} \\\
&= \[x^{n-k}\]\sum_{i\geq 0}{i+k-1 \choose k-1}x^{2i} \end{align\*}$$