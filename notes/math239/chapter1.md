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

