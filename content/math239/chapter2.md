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

The coefficient is zero if $n-k$ is odd. If $n-k$ is even then the required coefficient occurs for $i=\frac{n-k}2$ and is

$${\frac{n-k}2+k-1 \choose k-1}={\frac{n+k-2}2 \choose k-1}$$

Thus this is the number of $k$-part composition of $n$ in which each part is odd.

$\square$

#### 2.1.4 Problem

How many compositions of $n$ are there with $k$ parts, each part at most 5?

In this case let $S=\\\{1,2,3,4,5 \\\}^k$, and the required compositions are the elements of $S$ of weight $n$. Thus the required generating series is

$$\begin{align\*} \Phi_S(x) &= \Phi_{\\\{1,2,3,4,5\\\}^k}(x) \\\
&= (\Phi_{\\\{1,2,3,4,5\\\}}(x))^k \text{ , by Product Lemma} \\\
&= (x^1+x^2+x^3+x^4+x^5)^k \\\
&= (x(1-x^5)(1-x)^{-1})^k \text{ by finite Geometric Sum} \\\
&= x^k(1-x^5)^k(1-x)^{-k}\end{align\*}$$

Therefore, the number of composition is

$$\begin{align\*} 
[x^n] x^k(1-x^5)^k(1-x)^{-k} &= [x^{n-k}] \sum_{i \geq 0} {k \choose i} (-x^5)^i \sum_{j \geq 0} {j+k-1 \choose k-1}x^j \\\
&= [x^{n-k}] \sum_{i \geq 0} \sum_{j \geq 0} {k \choose i} (-1)^i {j+k-1 \choose k-1} x^{5i+j} \\\
&= \sum_{i=0}^{\left\lfloor{\frac{n-k}{5}}\right\rfloor} {k \choose i}(-1)^i{n-k-5i+k-1 \choose k-1}\end{align\*}$$

where $\left\lfloor{\frac{n-k}{5}}\right\rfloor$ is the "integer part" of $\frac{n-k}5$.

$\square$

#### 2.1.5 Problem

How many compositions of $n$ are there, $n\geq 0$?

Here we let $S=\cup_{k\geq 0}\mathbb{N}^k$, where the term $k=0$ is the empty composition (of 0). Then the compositions of $n$ are elements of $S$ of weight $n$, so the generating series is

$$\begin{align\*}
\Phi_S(x) &= \Phi_{\cup_{k\geq 0}\mathbb{N}^k}(x) \\\
&= \sum_{k\geq 0} \Phi_{\mathbb{N}^k}(x) \text{ , by Sum Lemma} \\\
&= \sum_{k\geq 0} (\Phi_{\mathbb{N}}(x))^k \text{ , by Product Lemma} \\\
&= \sum_{k\geq 0}\left(\sum_{i\geq 1}x^i\right)^k \\\
&= \sum_{k\geq 0}(x(1-x)^{-1})^k \text{ , by Geometric Series} \\\
&= \left(1+\frac{x}{1-2x}\right)
\end{align\*}$$

Hence the number of compositions is

$$\begin{align\*}
\[x^n\]\left(1+\frac{x}{1-2x}\right) &=\[x^n\]\left(1+\sum_{i\geq 0}2^ix^{i+1}\right) \\\
&=
\begin{cases} 
1 & \quad n=0 \\\ 
2^{n-1} & \quad n \geq 1 
\end{cases}
\end{align\*}$$

$\square$

#### 2.1.6 Problem

How many compositions of $n$ are there where each part is odd?

Let $\mathbb{N}_{odd}=\\\{1,3,5,7,...\\\}$. The set of all compositions where each part is odd is

$$S=\cup_{k \geq 0} \mathbb{N}_{odd}^k$$

The generating series of $\mathbb{N}_{odd}$ is

$$\Phi_{\mathbb{N}_{odd}}(x) = x +x^3+x^5+\cdots =\frac{x}{1-x^2}$$

By the product lemma, the generating series for compositions with $k$ odd parts is then

$$\Phi_{\mathbb{N}_{odd}^k}(x) =\left(\frac{x}{1-x^2}\right)^k$$

By the sum lemma, the generating series for our problem is

$$\begin{align\*}
\Phi_S(x) &= \sum_{k\geq 0} \Phi_{\mathbb{N}\_{odd}^k} \\\
&= \sum_{k \geq 0} \left(\frac{x}{1-x^2}\right)^k \\\
&= \frac{1}{1-\frac{x}{1-x^2}} \text{ by Geometric Series} \\\
&= \frac{1-x^2}{1-x-x^2} \end{align\*}$$

The answer to our question is $\[x^n\]\frac{1-x^2}{1-x-x^2}$

$\square$

Here we could not use existing tools to figure out an explicit formula for the coefficient of $\frac{1-x^2}{1-x-x^2}$. But let's derive a recurrence based on the method described in Problem 1.7.1. If we let $\Phi_S(x)=\sum a_x x^n$, then we get

$$1-x^2=(1-x-x^2)\sum_{n\geq 0}a_n x^n = a_0 +(a_1 - a_0)x + \sum+{n\geq 2}(a_n-a_{n-1}-a_{n-2})x^n$$

By comparing coefficients on both sides, we get

$$a_0=1, a_1=1,a_2=1,a_n=a_{n-1}+a_{n-2} \text{ for } n\geq 3$$

Other than $a_0$, the rest are terms in the Fibonacci sequence. So for $n\geq 1$, the number of compositions of $n$ where each part is odd is the $n$-th term in the Fibonacci sequence.

## 2.3 Binary Strings

#### 2.3.1 Definition

A **binary string** or $\\\{0,1\\\}$-**string** is a string of 0's and 1's, its **length** is the number of occurrences of 0 and 1 in the string.

For example, 01101 is a binary string of length five. We will use $l(\alpha)$ to denote the length of a string $\alpha$. There is a single string, $\epsilon$, of length 0, called the **empty string**. Now there are clearly $2^n$ binary strings of length $n$, since there are 2 choices, 0 or 1, for each of the $n$ symbols in a string of length $n$. In this section, we count the number of binary strings of length $n$ subject to various restrictions. For example, we might consider strings that have no three consecutive onces. Since we will always be interested in the number of strings of a given length, the generating series for strings in this section will all use the length of a string as the weight function. Thus, for a set $A$ of binary string, we have

$$\Phi_A(x)= \sum_{\alpha \in A}x^{l(\alpha)}$$

We will build up longer binary strings by piecing together short binary strings. If $a_1$ and $a_2$ are binary strings, then $a_1 a_2$ is the string formed by **concatenating** $a_1$ and $a_2$. For example, if $a_1=0100$ and $a_2=001$, then $a_1a_2=0100001$. Further, if $A$ and $B$ are set of binary strings, we define

$$AB=\\\{ab:a\in A, b\in B\\\}$$

We also define

$$A^{*}=\\\{\epsilon\\\}\cup A \cup AA \cup AAA \cdots = \\\{\epsilon\\\}\cup A \cup A^2 \cup A^3 \cdots$$

So $A^{*}$ is the set of strings formed by concatenating any number of strings in $A$. For example, in this notation, the set of all binary string is given by $\\\{0,1\\\}^{*}$.

For $\\\{0,1\\\}$-string $a,b$, we say that $b$ is a **substring** of $a$ if $a=cbd$ for some binary string $c,d$. Our problems will often be expressed in terms of the **blocks** of a binary string, which are maximal nonempty substrings consisting of only 0's or only 1's. For example, the string 00111001 has four blocks: (00, 111, 00, 1).

#### 2.3.2 Problem

Let $a_n$ be the number of $\\\{0,1\\\}$-strings of length $n$ which contain no three consecutive 1's (or which contain no substring "111"). Prove that

$$a_n=\[x^n\] \frac{1+x+x^2}{1-x-x^2-x^3} \text{, for } n \geq 0$$

Let $S$ by the set of binary strings with no three consecutive 1's. We will decompose each string by decomposing it after every occurrence of 0. For example, the string 00011010100 decomposes into (0,0,0,110,10,10,0) and the string 10111001 decomposes into (10,1110,0,1). This decomposition has two important properties. First, each string is decomposed uniquely. Second, the decomposition does not separate consecutive ones, so a string is in $S$ if and only if no piece in the decomposition contains three consecutive ones. So just by examining the pieces, we that $S$ contains the first but not the second. When we decompose a string in S, each piece will be in $\\\{0,10,110\\\}$, except possibly for the last piece which can be 1 or 11. so we can write $S$ as

$$S=\\\{0,10,110\\\}^*\\\{\epsilon,1,11\\\}$$

Since the length is additive under composition, we can use this expression for $S$ together with the Sum and Product Lemmas to compute $\Phi_S(x)$. Note that

$$\Phi_{\\\{0,10,110\\\}}(x) = x+x^2+x^3$$

and

$$\Phi_{\\\{\epsilon,1,11\\\}}(x)=1+x+x^2$$

Moreover

$$\\\{0,10,110\\\}^*=\\\{\epsilon\\\}\cup\\\{0,10,110\\\}\cup\\\{0,10,110\\\}^2\cdots$$

So

$$\begin{align\*} \Phi_{\\\{0,10,110\\\}^{\*}}(x) &= 1 + \Phi_{\\\{0,10,110\\\}}(x) + \left(\Phi_{\\\{0,10,110\\\}}(x)\right)^2 + \cdots \\\
&= \frac{1}{1-\Phi_{\\\{0,10,110\\\}}(x)}\end{align\*}$$

Therefore

$$\begin{align\*} \Phi_S(x) &= \frac{1}{1-\Phi_{\\\{0,10,110\\\}}(x)} \Phi_{\\\{\epsilon,1,11\\\}}(x) \\\
&=\frac{1+x+x^2}{1-x-x^2-x^3} \end{align\*}$$

as required.

$\square$

## 2.4 Unambiguous Expressions

The solution to Problem 2.3.2 glosses over a subtle but important point. We used the Product Lemma to expand $Phi_{AB}(x)$, but the Product Lemma concerns the expansion of $Phi_{A\times B}(x)$. The sets $A\times B$ and $AB$ are closely related:

$$AB=\\\{ab: (a,b)\in A\times B\\\}$$

So concatenation defines a map from $A\times B$ to $AB$. The problem lies in the fact that this map need not be a bijection; that is, there may be distinct pairs $(a_1,b_1)$ and $(a_2,b_2)$ in $A\times B$ with $a_1b_1=a_2b_2$. Moreover, when this happens, we will not have $\Phi_{AB}(x)=\Phi_{A\times B}(x)$.

We say that the expression $AB$ is **ambiguous** if there exist distinct pairs  $(a_1,b_1)$ and $(a_2,b_2)$ in $A\times B$ with $a_1b_1=a_2b_2$, otherwise, we say that $AB$ is an **unambiguous expression**. In other words, $AB$ is unambiguous if each string uniquely decomposes into a string in $A$ concatenated with a string in $B$. Note that if $A$ and $B$ are finite sets, then $AB$ is unambiguous if and only if $|AB|=|A \times B|$.

We will use similar terminology for other constructions of binary string. For example, the expression $A \cup B$ is unambiguous when $A \cap B = \emptyset$. More generally, we will compose expressions for sets of strings using concatenation and union of smaller sets; such an expression is unambiguous when each concatenation operation and each union operation is unambiguous. Thus $A^{\*}$ is unambiguous if the sets $\\\{\epsilon\\\}, A, A^2 ,...$ are disjoint and, for each $i\in N_{\geq 0}$, $A^i$ is unambiguous.

It is important to note that it is the description of the set of strings using sum, concatenation and the $\*$-operation which might be ambiguous. A set of strings itself is never ambiguous or unambiguous.

## 2.5 Some Decomposition Rules

Let's return briefly to the solution of Problem 2.3.2. We expressed the set $S$ as

$$\\\{ 0,10,110 \\\}^{\*}\\\{\epsilon,1,11\\\}$$

It is not difficult to show directly that this expression is unambiguous, however, the reason that it is unambiguous is implicit in our solution. We considered the decomposition of a binary string into a sequence of substrings, obtained by breaking the string after each occurrence of 0. The expression above is generating the pieces of that decomposition. Since the decomposition rule is unambiguous, the expression is unambiguous.

Here are some of the common decomposition rules for the set $S$ of all binary strings.

*	Decompose a string after each 0 or 1. Each piece in the decomposition will be either 0 or 1. This gives rise to the expression

$$S=\\\{0,1\\\}^{\*}$$

*	Decompose a string after each occurrence of 0. Each piece in the decomposition will be from $\\\{0,10,110,...\\\}=\\\{1\\\}^{\*}\\\{0\\\}$ except possibly for the last piece which may consist only of 1's. This gives rise to the expression

$$S=(\\\{1\\\}^{\*}\\\{0\\\})^{\*}\\\{1\\\}^{\*}$$

*	Decompose a string after each block of 0's. Each piece in the decomposition, except possibly the first and last pieces, will consist of a block of 1's followed by a block of 0's. The first piece may consist only of a block of 0's and the last piece may consist only of a block of 1's. This gives rise to the expression

$$s=\\\{0\\\}^{\*}(\\\{1\\\}\\\{1\\\}^{\*}\\\{0\\\}\\\{0\\\}^{\*})^{\*}\\\{1\\\}^{\*}$$

Moreover, since each of these decomposition rules in unambiguous, the corresponding expressions are unambiguous.

## 2.6 Sum and Product Rules for Strings

If $A$ and $B$ are sets of strings and $A \cap B=\emptyset$, then

$$\Phi_{A\cup B}(x)=\Phi_A(x)+\Phi_B(x)$$

as we would hope. We also have the following.

#### 2.6.1 Theorem

Let $A,B$ be sets of binary strings

a.	If the expression $AB$ is unambiguous, then

$$\Phi_{AB}(x)=\Phi_A(x)\Phi_B(x)$$

b.	If the expression $A^{\*}$ is unambiguous, then

$$\Phi_{A^{\*}}(x)=(1-\Phi_A(x))^{-1}$$

>#### Proof
(a)
$$\Phi_{AB}(x) = \sum_{s \in AB} x ^{l(s)} = \sum_{a\in A} \sum_{b \in B} x^{l(ab)}$$
since $s=ab$ for unique $a \in A$ and $b \in B$. But $\text{length} (ab) = \text{length}(a) + \text{length}(b)$ for all $\\{0,1\\}$-string $a$, $b$, so
$$\begin{align\*} \Phi_{AB}(x) &= \sum_{a \in A} \sum_{b\in B} x^{l(a)+l(b)} \\\
&= \sum_{a\in A}x^{l(a)} \sum_{b \in B}x^{l(b)} \\\
&= \Phi_A(x) \Phi_B(x) \end{align\*}$$
(b)
$$\Phi_{A^\*}(x) = \sum_{k \geq 0} \Phi_A^k (x)$$
by the Sum Lemma, since $A^\*$ is unambiguous. Note that $\epsilon \notin A$, so the constant term of $\Phi_A(x)$ is $0$. Not $\Phi_{A^k} (x) = (\Phi_A(x))^k$ from part (a), so
$$\Phi_{A^\*}(x) = \sum_{k \geq 0} (\Phi_A(x))^k = (1-\Phi_A(x))^{-1}$$
by Geometric Series
$\square$

## 2.7 Decomposition Using Blocks

The following problems involve considering strings subject to a condition on their blocks.

#### 2.7.1 Problem

Let $b_n$ by the number of $\\{0,1\\}$-strings of length $n$ in which no block has length exactly two. Prove that

$$b_n = [x^n] \frac{1-x^2+x^3}{1-2x+x^2-x^3} \quad n \geq 0$$

Let $B$ be the set of all $\\{0,1\\}$-strings in which no block has length exactly two. Consider decomposing a string after each block of 1s. Except possibly for the first and last piece, each piece has the form

$$\\{0,000,0000,...\\}\\{1,111,1111,...\\}$$

The first piece may consist only of 1s and last piece may consist only of 0s. This gives the expression

$$B = \\{\epsilon, 1,111,1111,...\\}(\\{0,000,0000,...\\}\\{1,111,1111,...\\})^\*\\{\epsilon,0,000,0000,...\\}$$

Moreover, since the decomposition rule is unambiguous, the expression is unambiguous. So

$$\begin{align\*}
\Phi_B(x) &= \frac{(1+x+x^3+x^4+...)^2}{1-(x+x^3+x^4+...)^2} \\\
&= \frac{(1+x+\frac{x^3}{1-x})^2}{1- (x+\frac{x^3}{1-x})^2} \\\
&= \frac{1+x+\frac{x^3}{1-x}}{1-(x+\frac{x^3}{1-x})} \\\
&= \frac{1-x^2+x^3}{1-2x +x^2-x^3} \end{align\*}$$

#### 2.7.2 Problem

Find the generating series with respect to length for $\\{0,1\\}$-strings in which an odd block of 0's is never followed by an odd block of 1's.

Let $S$ be the set of all $\\{0,1\\}$-string in which an odd block of "0"s is never followed by an odd block of "1"s. We decompose a binary string after each block of 1s, so a string has required property if and only if each of the pieces has. Decomposing all $\\{0,1\\}$-strings in this way gives rise to the unambiguous expression

$$\\{0,1\\}^\* = \\{1\\}^\*(\\{0\\}\\{0\\}^\*\\{1\\}\\{1\\}^\*)^\*\\{0\\}^\*$$

We are excluding pieces of the form $\\{0\\}\\{00\\}^\*\\{1\\}\\{11\\}^\*$. So

$$S = \\{1\\}^\* M^\* \\{0\\}^\*$$

where

$$M = \\{0\\}\\{0\\}^\*\\{1\\}\\{1\\}^\* \\ \\{0\\}\\{00\\}^\*\\{1\\}\\{11\\}^\* $$

Thus

$$\Psi_M(x) = \frac{x}{1-x}\frac{x}{1-x}-\frac{x}{1-x^2}\frac{x}{1-x^2} = \frac{x^3(2+x)}{(1-x^2)^2}$$

and the required generating series is

$$\Psi_{1^\* M^\* 0^\*} = \frac{(1+x)^2}{1-2x^2(1+x)}$$

## 2.8 Recursive Decompositions of Binary Strings

Another type of decomposition that is often useful is a **recursive** decomposition, in which a set id decomposed in terms of itself. For example, let $S$ be the set of all $\\{0,1\\}$-strings. We can define $S$ in the following way.

1.	The empty string in $S$
2.	Any other element of $S$ consists of a symbol (either 0 or 1) followed by an element of $S$

Such a definition, in which the set $S$ is defined in terms of itself, is called a **recursive definition**. This leads immediately to the recursive decomposition.

$$S = \\{\epsilon\\} \cup \\{0,1\\} S$$

Here the right side gives an unambiguous expression for $S$ and so from this we obtain

$$\Phi_S (x) = 1+ \Phi_{\\{0,1\\}}(x) \Phi_S(x)$$

Solving for $\Phi_S(x)$ gives

$$(1-\Phi_{\\{0,1\\}}(x))\Phi_S(x) = 1$$

so

$$\Phi_S(x) = (1-\Phi_{\\{0,1\\}}(x))^{-1} = (1-2x)^{-1} = \sum_{n \geq 2^n x^n}$$

as expected.

Below we give a different solution to Problem 2.3.2 based on a recursive decomposition; we restate the problem here for convenience.

#### 2.8.1 Problem

Let $a_n$ be the number of $\\{0,1\\}$-strings of length $n$ which contain no three consecutive 1's. Prove that

$$a_n = [x^n] \frac{1+x+x^2}{1-x-x^2-x^3} \quad \text{for } n \geq 0$$

Let $S$ be the set of all $\\{0,1\\}$-strings that do not contain three consecutive 1s. Consider decomposing a string after the first occurrence of 0. The strings $\\{\epsilon, 1,11\\}$ are indecomposable. Every other string $\sigma \in S$ can be written as $\sigma = \sigma_1 \sigma_2$ where $\sigma_1 \in \\{0,10,110\\}$ and $\sigma_2 \in S$. This gives rise to the expression

$$S = \\{\epsilon, 1, 11 \\} \cup \\{0,10,110\\} S$$

Moreover the right hand size is an unambiguous expression, so

$$\Phi_S(x) = (1+x+x^2) + (x+x^2+x^3) \Phi_S(x)$$

Solving this gives

$$\Phi_S(x) = \frac{1+x+x^2}{1-x-x^2-x^3}$$

as required.

In the previous problem we forbade the substring $111$. The technique used does not adapt well to more complicated forbidden substrings, but such problems can be handled using the method outlined in the following two problems.

