[<- Go Back](http://tonyli.tk/)

# Chapter 1 Combinatorial Analysis

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

