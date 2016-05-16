[<- Go Back](http://tonyli.tk/)

# Chapter 1 Combinatorial Analysis $\newcommand{\ra}{\rightarrow}$

## 1.1 Introduction

A **composition** of a non-negative integer $n$ is a sequence $(m_1,...,m_r)$ of positive integers such that
$$m_1+...+m_r=n$$

The numbers $m_1,...,m_r$ are the **parts** of the composition.

We define the **weight** of a composition to be the sum of its parts.

A **binary string** of length $n$ is a sequence $a_1...a_n$ where each $a_i$ is 0 or 1. Clearly there are $2^n$ binary strings of length $n$.

## 1.2 Sums and Products

We recall if $A$ and $B$ are sets, then the **union** $A\cup B$ is defined by
$$A\cup B := \\{x:x\in A \quad or \quad x\in B\\}$$

If $A$ and $B$ are **disjoint**, that is, $A\cap B=\emptyset$ then
$$|A\cup B|=|A|+|B|$$

Here $|S|$ denotes the number of elements in the set $S$.

The **Cartesian product** $A\times B$ of sets $A$ and $B$ is the set of all ordered pairs whose first element is an element of $A$ and the second element is an element of $B$, that is
$$A\times B := \\{(a,b):a\in A, b\in B\\}$$

Then, we can similarly define the **Cartesian power** $A^k$ as ordered $k$-tuples of elements from $A$.
$$A^k := \\{(a_1,a_2,...,a_k):a_1,...,a_k\in A\\}$$

When $A$ is finite, $|A^k|=|A|^k$.

## 1.3 Binomial Coefficients

#### 1.3.1 Theorem

For non-negative integer $n$ and $k$, the number of $k$-element subsets of an $n$-element set is
$$\frac{n(n-1)\cdots (n-k+1)}{k!}$$

>####Proof
Let $L$ be the set of all ordered lists of $k$ distinct numbers from the set $\\{1,...,n\\}$. There are $n$ choices for the first number in the list, and then there are $n-1$ remaining choices for the second number. In general, when choosing the $i$-th number in our list, we have already used $i-1$ of the $n$ numbers and, hence, we have $n-i+1$ numbers of choose from. Thus,
$$|L|=n(n-1)\cdots (n-k+1)$$
Now consider a different way of generating the element of $L$. We first choose the $k$ elements and then order the elements in all possible ways. Let there be $x$ ways to choose $k$ elements from $\\{1,...,n\\}$. There are $k!$ ways to order, or permute, each $k$-element set. Thus
$$|L|=x(k!)$$
Hence,
$$x=\frac{n(n-1)\cdots (n-k+1)}{k!}$$

We define $n \choose k$, which we read as "$n$ choose $k$", to be the number of $k$-element subsets of $\\{1,...,n\\}$. So by Theorem 1.3.1,
$${n \choose k} = \frac{n(n-1)\cdots (n-k+1)}{k!}$$

Note that ${n \choose k} = 0$ whenever $n<k$ as it should be. $0!=1$ and ${n \choose 0}=1$

$${n \choose k}=\frac{n(n-1)\cdots (n-k+1)}{k!}=\frac{n!}{k!(n-k)!}=\frac{n!}{(n-k)!(n-(n-k))!}={n \choose n-k}$$

## 1.4 Bijections (One-to-One Correspondence)

Let $S$ an $T$ be sets. Let $f:S\ra T$ be a function (or mapping). In particular, this means that for any $x\in S,f(x)$ is an element in $T$. Then

*	$f$ is **1-1** or **injective** if for any $x_1,x_2\in S,f(x_1)=f(x_2)$ implies $x_1=x_2$. In other words, every element in $S$ is being mapped to a unique element in $T$.
*	$f$ is **onto** or **surjective** if for all $y\in T$, there exists $x\in S$ such that $f(x)=y$. In other words, every element in $T$ is being mapped to from some element in $S$.
*	$f$ is a **1-1 correspondence** or **bijection** if it is both 1-1 and onto.

In combinatorics, we use mappings to compare the cardinalities of finite sets $S$ and $T$. If there exists a mapping $f:S\ra T$ that 1-1, then $|S|\leq |T|$. This is because the $|S|$ elements of $S$ must be mapped to distinct elements in $T$, so there must be at least $|S|$ distinct elements in $T$. 

On the other hand, if there exists a mapping $f:S\ra T$ that is onto, then $|S|\geq |T|$. This is because for the $|T|$ elements in $T$, each must be mapped to be a distinct element in $S$. Therefore, if there exists a bijection $f:S\ra T$, then $|S|=|T|$, as $f$ is both 1-1 and onto

Bijection have the nice property that they "pair up" elements of $S$ with elements of $T$ exactly. This gives a *correspondence* between elements of $S$ and $T$.

For $f:S\ra T$, the **inverse** of $f$ is a function $f^{-1}:T\ra S$ such that for all $x\in S$, $f^{-1}(f(x))=x$, and for all $y\in T, f(f^{-1}(y))=y$.

#### 1.4.1 Theorem

If a function $f:S\ra T$ has an inverse, then $f$ is a bijection.

>#### Proof
Let $f^{-1}:T\ra S$ be an inverse of $f$. We need to prove that $f$ is 1-1 and onto. Suppose $f(x_1)=f(x_2)$. Then $f^{-1}(f(x_1))=f^{-1}(f(x_2))$. By definition of inverse, $x_1=x_2$, so $f$ is 1-1. Let $y\in T$. Since $f^{-1}$ is a function, $f^{-1}(y)=x$ for some $x\in S$. Then $f(f^{-1}(y))=x$, and by the definition of inverse, $y=f(x)$. Therefore, $x$ is mapped to $y$, and $f$ is onto.

Usually if a bijection is clear, its inverse is also clear. So in most cases, instead of proving that a function is 1-1 and onto, we can simply provide the inverse function.

## 1.5 Combinatorial Proofs

Any proof that involves some kind of counting argument is a *combinatorial proof*.

#### 1.5.1 Theorem

For any non-negative integer $n$,
$$(1+x)^n=\sum_{k=0}^{n}{n \choose k}x^k$$

This is also known as the **binomial theorem**.

>#### Proof
We first expand $(1+x)^n$ algebraically:
$$\begin{align\*} (1+x)^n &= (1+x)(1+x)\cdots (1+x) \\\
&= \left(\sum_{a_1\in \{1,x\}}a_1\right)\cdots \left(\sum_{a_n\in\{1,x\}}a_n\right) \\\
&= \sum_{a_1\in \{1,x\}} \cdots \sum_{a_n\in\{1,x\}} a_1\cdots a_n \\\
&= \sum_{(a_1,...,a_n)\in\{1,x\}^n}  a_1\cdots a_n \end{align\*}$$
Define $S_k$ to be the set of elements of $\{1,x\}^n$ where exactly $k$ of the $n$ terms are $x$'s. So if $(a_1,...,a^n)\in S_k$, then $a_1\cdots a_n=x^k$. Also,
$${1,x}^n=S_0\cup\cdots\cup S_n$$
This is a disjoint union of sets, so we can break up the sum at the end of the equation above to get
$$\begin{align\*} (1+x)^n &= \sum_{k=0}^{n}\left(\sum_{(a_1,...,a_n)\in S_k} a_1\cdots a_n\right) \\\
&= \sum_{k=0}^{n}\left(\sum_{(a_1,...,a_n)\in S_k} x^k\right) \\\
&= \sum_{k=0}^{n} |S_k|x^k \end{align\*}$$
Let $T_k$ be the set of all subsets of $\{1,...,n\}$ of size $k$. Then there is a bijection between $S_k$ and $T_k$, define $f:S_k\ra T_k$ by $f(a_1,...,a_n)=\{i|a_i=x\}$. This gives us $|S_k|=|T_k|={n \choose k}$. Therefore,
$$(1+x)^n=\sum_{k=0}^{n} {n \choose k}x^k$$.

## 1.6 Generating Series

#### 1.6.2 Definition

Let $S$ be a set of configurations with weight function $w$. The **generating series** for $S$ with respect to $w$ is defined by
$$\Phi_S(x)=\sum_{\sigma\in S} x^{w(\sigma)}$$

By collecting like-powers of $x$ in $\sigma_S(x)$, we get
$$\begin{align\*} \Phi_S(x) &= \sum_{\sigma\in S} x^{w(\sigma)} \\\
&= \sum_{k\geq 0} \left(\sum_{\sigma\in S,w(\sigma)=k} 1\right) x^k \\\
&= \sum_{k\geq 0} a_k x^k \end{align\*}$$
where $a_k$ denotes the number of elements in $S$ with weight $k$. That is, the coefficient of $x^k$ in $\Phi_S(x)$ counts the number of elements of weight $k$ in $S$.

#### 1.6.3 Theorem

Let $\Phi_S(x)$ be the generating series for a finite set $S$ with respect to a weight function $w$. Then,

1.	$\Phi_S(1)=|S|$
2.	the sum of the weights of the elements in $S$ is $\Phi_S'(1)$
3.	the average weight of an element in $S$ is $\frac{\Phi_S'(1)}{\Phi_S(1)}$

>#### Proof
Note that
$$\Phi_S(1) = \sum_{\sigma\in S} 1^{w(\sigma)} = |S|$$
which proves (1). Similarly,
$$\Phi_S'(x)=\sum_{\sigma\in S} w(\sigma)x^{w(\sigma)-1}.$$
Thus,
$$\Phi_S'(1)=\sum_{\sigma\in S} w(\sigma)$$
which proves (2). Finally, (3) follows immediately from (1) and (2).

## 1.7 Formal Power Series

Let $(a_0, a_1, a_2,...)$ be a sequence of rational numbers; then $A(x)=a_0+a_1x+a_2x^2+\cdots$ is called a **formal power series**. We say that $a_n$ is the **coefficient** of $x_n$ in $A(x)$ and write $a_n=[x^n]A(x)$. A formal power series should be regarded as a way of encoding a sequence of numbers. Thus two formal power series are equal if and only if they have the same sequence of coefficients.

In many respects, formal power series behave much like polynomials; for example, addition and multiplication are well defined. If $A(x)=a_0+a_1x+a_2x^2+\cdots$ and $B(x)=b_0+b_1x+b_2x^2+\cdots$ are formal power series then we define
$$A(x)+B(x)=\sum_{n\geq 0}(a_n+b_n)x^n$$
and
$$A(x)B(x)=\sum_{n\geq 0}\left(\sum_{k=0}^{n}a_kb_{n-k}\right)x^n$$

We need to be a bit careful when performing infinite sums and products, but here there is no ambiguity, since there are only finitely many terms contributing to any given coefficient. Thus $A(x)+B(x)$ and $A(x)B(x)$ are well defined.

In many of the problems that we will encounter, we will need to solve linear equations; given two formal power series $P(x)$ and $Q(x)$ we will want to find a formal power series $A(x)$ such that $Q(x)A(x)=P(x)$. 

#### 1.7.2 Theorem

Let $A(x)=a_0+a_1x+a_2x^2+\cdots$, $P(x)=p_0+p_1x+p_2x^2+\cdots$, and $Q(x)=1-q_1x-q_2x^2-\cdots$ be formal power series. Then
$$Q(x)A(x)=P(x)$$
if and only if for each $n\geq 0$,
$$a_n=p_n+q_1a_{n-1}+q_2a_{n-2}+\cdots+q_na_o$$

>#### Proof
By definition, $Q(x)A(x)=P(x)$ if and only if 
$\[x^n\](Q(x)A(x))=\[x^n\]P(x)$ for all $n\geq 0$. Now $\[x^n\]P(x)=p_n$ and 
$$\[x^n\](Q(x)A(x))=a_n-q_1a_{n-1}-q_2a_{n-2}-\cdots -q_na_0$$
Therefore $Q(x)A(x)=P(x)$ if and only if, for each $n\geq 0$,
$$a_n-(q_1a_{n-1}+q_2a_{n-2}+\cdots q_na_0)=p_n$$
The result follows by a simple rearrangement of this equation.

#### 1.7.3 Corollary

Let $P(x)$ and $Q(x)$ be formal power series. If the constant term of $Q(x)$ is non-zero, then there is a formal power series $A(x)$ satisfying
$$Q(x)A(x)=P(x)$$
Moreover, the solution, $A(x)$, is unique.

>#### Proof
If $Q(0)\neq 0$, then, by dividing both $P(x)$ and $Q(x)$ by $Q(0)$, we may assume that $Q(0)=1$. Then we can write $Q(x)=1-q_1x-q_2x^2-\cdots$ and $P(x)=p_0+p_1x+p_2x^2+\cdots$. Now by Theorem 1.7.2, $A(x)=a_0+a_1x+\cdots$ satisfies $Q(x)A(x)=P(x)$ if and only if for each $n\geq 0$,
$$a_n=p_n+q_1a_{n-1}+\cdots q_na_0$$.
Thus $a_0=p_0$ and, for each $n>0$, we can determine $a_n$ uniquely from $a_0,...,a_{n-1}$. So a solution exists and it is unique.

#### 1.7.4 Definition

We say that $B(x)$ is the **inverse** of $A(x)$ if
$$A(x)B(x)=1$$
we denote this by $B(x)=A(x)^{-1}$

The formal power series $1+x+x^2+\cdots$ arises frequently, since it is the generating series for the non-negative integers. We call this a **geometric series**. The powers of geometric series arise often in problems that will face later.

#### 1.7.8 Theorem

A formal power series has an inverse if and only if it has a non-zero constant term. Moreover, if the constant term is non-zero, then the inverse is unique.

>#### Proof
Let $Q(x)$ be a formal power series. Then a formal power series $A(x)$ is the inverse of $Q(x)$ if and only if it satisfies the linear equation
$$Q(x)A(x)=1$$
If $Q(0)\neq 0$, by Corollary 1.7.3, the above equation has a unique solution. Hence $Q(x)$ has an inverse and it is unique. If $Q(0)=0$, then the constant term on the right side of the above equation is $1$, but the constant term on the left is $Q(0)A(0)=0$, so there is no solution and, hence, $Q(x)$ does not have an inverse.

As with polynomials, we can also consider the composition of formal power series.

#### 1.7.9 Definition

The **composition** of formal power series $A(x)=a_0+a_1x+a_2x^2+\cdots$ and $B(x)$ is defined by
$$A(B(x))=a_0+a_1B(x)+a_2B(x)^2+\cdots$$
However, unlike for polynomials, this composition operation is not always well defined.

#### 1.7.10 Theorem

If $A(x)$ and $B(x)$ are formal power series with the constant term of $B(x)$ equal to zero, then $A(B(x))$ is a formal power series.

>#### Proof
We can write $A(x)=a_0+a_1x+\cdots$ and $B(x)=xC(x)$. Then
$$\begin{align\*} A(B(x)) &= A(xC(x)) \\\
&= a_0+a_1xC(x)+a_2(xC(x))^2+\cdots \\\
&= a_0+a_1xC(x)+a_2x^2(C(x))^2 +\cdots \end{align\*}$$
For each $k\geq 0$, note that $a_kx^k(C(x))^k$ is a formal power series (since it is the product of formal power series). Moreover, for each $n<k$, we have $\[x^n\](a_kx^k(C(x))^k)=0$. Therefore,
$$\begin{align\*} \[x^n\]A(B(x)) &= \[x^n\](a_0+a_1xC(x)+a_2x^2(C(x))^2+\cdots) \\\
&= \[x^n\](a_0+a_1xC(x)+a_2x^2(C(x))^2+\cdots+a_nx^n(C(x))^n)\end{align\*}$$
Now, $a_0+a_1xC(x)+\cdots+a_nx^n(C(x))^n$ is a formal power series (since it is a finite sum of formal power series), so $\[x^n\]A(B(x))$ is well defined.

## 1.8 The Sum and Product Lemmas

#### 1.8.1 Theorem (The Sum Lemma)

Let $(A,B)$ be a partition of $S$. (That is, $A$ and $B$ are disjoint sets whose union is $S$) Then,
$$\Phi_S(x)=\Phi_A(x)+\Phi_B(x)$$

>#### Proof
$$\begin{align\*} \Phi_S(x) &= \sum_{\sigma\in S}x^{w(\sigma)} \\\
&= \sum_{\sigma\in A}x^{w(\sigma)} + \sum_{\sigma\in B}x^{w(\sigma)} \\\
&= \Phi_A(x) + \Phi_B(x)\end{align\*}$$
as required.

More generally, if $A$ and $B$ are sets where $A\cap B$ need not be empty, then
$$\Phi_{A\cup B}(x)=\Phi_A(x)+\Phi_B(x)-\Phi_{A\cap B}(x)$$

#### 1.8.2 Theorem (The Product Lemma)

Let $A$ and $B$ be sets of configurations with weight function $\alpha$ and $\beta$ respectively. If $w(\sigma)=\alpha(a)+\beta(b)$ for each $\sigma=(a,b)\in A\times B$, then
$$\Phi_{A\times B}(x)=\Phi_A(x)\Phi_B(x)$$

>#### Proof
$$\begin{align\*} \Phi_{A\times B}(x) &= \sum_{\sigma\in A\times B}x^{w(\sigma)} \\\
&= \sum_{(a,b)\in A\times B} x^{\alpha(a)+\beta(b)} \\\
&= \left(\sum_{a\in A}x^{\alpha(a)}\right)\left(\sum_{b\in B}x^{\beta(b)}\right) \\\
&= \Phi_A(x)\Phi_B(x) \end{align\*}$$
as required.

More generally, if $A_1,...,A_k$ are sets then $A_1\times\cdots\times A_k$ denotes the set of all $k$-tuples $(a_1,a_2,...,a_k)$ where $a_i\in A$ for all $i$. Now, suppose that $\alpha_i$ is a weight function for $A_i$ and that $w$ is a weight function for $A_1\times\cdots\times A_k$. If $w(\sigma)=\alpha_1(a_1)+\cdots +\alpha_k(a_k)$ for each $k$-tuple $\sigma=(a_1,...,a_k)$, then
$$\Phi_{A_1\times\cdots\times A_k}(x)=\Phi_A1(x)\cdots \Phi_Ak(x)$$

#### 1.8.5 Theorem

For any positive integer $k$ and non-negative integer $n$,

