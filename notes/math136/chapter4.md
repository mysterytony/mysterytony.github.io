#Chapter 4: Vector Spaces$\newcommand{\v}{\vec}$$\newcommand{\b}{\mathbb}$$\newcommand{\vsetk}{\v{v_1},\cdots,\v{v_k}}$$\newcommand{\vsetn}{\v{v_1},\cdots,\v{v_n}}$$\newcommand{\vx}{\vec{x}}$$\newcommand{\bv}{\mathbb{V}}$
## 4.1: Vector Spaces

#### Definition: Vector Space

A set $\bv$ with an operation of **addition**, denoted $\v{x}+\v{y}$, and an operation of **scalar multiplication**, denoted $c\v{x}$, is called a **vector space over** $\b{R}$ if for every $\v{v},\v{x},\v{y}\in\bv$ and $c,d\in\b{R}$ we have:

* V1: $\v{x}+\v{y}\in\bv$
* V2: $(\v{x}+\v{y})+\v{v}=\v{x}+(\v{y}+\v{v})$
* V3: $\v{x}+\v{y}=\v{y}+\v{x}$
* V4: There is a vector $\v{0}\in\bv$, called the **zero vector**, such that $\v{x}+\v{0}=\v{x}$ for all $\v{x}\in\bv$
* V5: There exists an element $(-\v{x})\in\bv$, called the **additive inverse** of $\v{x}$, such that $\v{x}+(-\v{x})=\v{0}$
* V6: $c\v{x}\in\bv$
* V7: $c(d\v{x})=(cd)\v{x}$
* V8: $(c+d)\v{x}=c\v{x}+d\v{x}$
* V9: $c(\v(x)+\v{y})=c\v{x}+c\v{y}$
* V10: $1\v{x}=\v{x}$

We call the elements of $\bv$ vectors

#### Remarks

1. We sometimes denote addition by $\v{x}\bigoplus\v{y}$ and scalar multiplication by $c\bigotimes\v{x}$ to distinguish these from "normal" operation of addition and scalar multiplication
2. In some cases, when working with multiple vector spaces, we denote the zero vector in a vector space $\bv$ by $\v{0}_\bv$
3. Then ten vector space axioms define a "structure" for the set based on the operations of addition and scalar multiplication. The study of vector spaces is the study of this structure. Note that there may be additional operation defined on some vector spaces that are not included in this structure. 
4. The definition of a vector space makes sense if the scalars are allowed to be taken from any set that has all the same important properties as $\b{R}$. Such sets are call **fields**.

Let $\v{V}={\v{0}}$, it is called the **trivial vector space**

#### Theorem 1

If $\bv$ is a vector space, then

1. $0\v{x}=\v{0}$ for all $\v{x}\in\bv$
2. $(-\v{x})=(-1)\v{x}$ for all $\v{x}\in\bv$

#### Remark

Observe that Theorem 1 implies that the zero vector in a vector space is unique, as is the additive inverse of any vector in the vector space.

#### Definition: Subspace

Let $\bv$ be a vector space. If $\b{S}$ is a subspace of $\bv$ and $\b{S}$ is a vector space under the same operation as $\bv$, then $\b{S}$ is called a **subspace** of $\bv$

#### Theorem 2: Subspace Test

If $\b{S}$ is a non-empty subset of $\bv$ such that $\v{x}+\v{y}\in\b{S}$ and $c\v{x}\in\b{S}$ for all $\v{x},\v{y}\in\b{S}$ and $c\in\b{R}$ under the operation of $\bv$, then $\b{S}$ is a subspace of $\bv$.

#### Remark

1.	It is very important to always remember to check that $\b{S}$ is a subset of $\bv$ and is non-empty as part of the Subspace Test.
2.	As before, we will say that $\b{S}$ is **closed under addition** if $\v{x}+\v{y}\in\b{S}$ for all $\v{x},\v{y}\in\b{S}$, and we will say that $\b{S}$ is **closed under scalar multiplication** if $c\v{s}\in\b{S}$ for all $\v{x}\in\b{S}$ and $c\in\b{R}$

>As with subspaces in Chapter 1, normally the easiest way to verify the set $\b{S}$ is non-empty is to check if the zero vector of $\bv$, is in $\b{S}$. Moreover, if $\v{0}_V\notin\b{S}$, then $\b{S}$ is not closed under scalar multiplication and hence is not subspace.

#### Definition: Span

Let $\b{B}=$ { $\vsetk$ } be a set of vector space $\bv$. We define the **span** of $\b{B}$ by 

Span $\b{B}$ = { $c_1\v{v_1}+\cdots+c_k\v{v_k}\|c_1,\cdots,c_k\in\b{R}$ }

We say the Span$\b{B}$ is **spanned** by $\b{B}$ and that $\b{B}$ is a **spanning set** for Span$\b{B}$

#### Theorem 3

If $\b{B}$ = {$\vsetk$} is a set of vectors in a vector space $\bv$, then Span$\b{B}$ is a subspace of $\bv$.

#### Theorem 4

Let $\bv$ be a vector space and $\vsetk\in\bv$. Then $\v{v_i}\in$ Span{$\v{v_1},\cdots,\v{v_{i-1}},\v{v_{i+1}},\cdots,\v{v_k}$} if and only if

Span{$\vsetk$}=Span{$\v{v_1},\cdots,\v{v_{i-1}},\v{v_{i+1}},\cdots,\v{v_k}$}

#### Definition: Linearly Dependent & Linearly Independent

A set of vectors {$\vsetk$} in a vector space $\bv$ is said to be **linearly dependent** if there exist coefficients $c_1,...,c_k$ not all zero such that

$$ \v{0}=c_1\v{v_1}+\cdots+c_k\v{v_k} $$

A set of vectors {$\vsetk$} is said to be **linearly independent** if the only solution to

$$ \v{0}=c_1\v{v_1}+\cdots+c_k\v{v_k} $$

is the trivial solution $c_1=\cdots=c_k=0$

#### Theorem 5

A set of vectors {$\vsetk$} in a vector space is linearly dependent if and only if $\v{v_i}\in$ Span{$\v{v_1},\cdots,\v{v_{i-1}},\v{v_{i+1}},\cdots,\v{v_k}$ for some $i$, $1\leq i\leq k$ 

#### Theorem 6

Any Set of vectors {$\vsetk$} in a vector space which contains the zero vector is linearly dependent

## 4.2 Bases and Dimension

#### Definition: Basis

Let $\bv$ be a vector space. The set B is call a **basis** for $\bv$ if B is linearly independent spanning set for $\bv$.

We define a basis for {$\v{0_\bv}$} to be the empty set.

#### Algorithm: Finding a basis

Let $\bv$ be a vector space. To find a basis for $\bv$,
1.	Find the general form of a vector $\v{x}$
2.	Write the general form of $\v{x}$ as a linear combination of $\vsetk$ in $\bv$
3.	Check if B={$\vsetk$} is linearly independent. It it is, then stop as B is a basis.
4.	If B is linearly dependent, pick some vector that can be written as a linear combination of the other vectors in B and remove it from the set using Theorem 4.1.4. Repeat this until the set is linearly independent.

#### Theorem 1

Let B={$\vsetn$} be a basis for a vector space $\bv$ and let C={$\v{w_1},\cdots,\v{w_k}$} be a set in $\bv$. If $k>n$, then C is linearly dependent.

#### Theorem 2

If B={$\vsetn$} and C={$\v{w_1},\cdots,\v{w_k}$} are bases for a vector space $\bv$, then $k=n$.

#### Definition: Dimension

If B={$\vsetn$} is a basis for a vector space $bv$, then we say the **dimension** of $bv$ is $n$ and write
$$ dimV=n $$
If $\bv$ is the trivial vector space, then dimV=0. If $bv$ does not have a basis with a finite number of vectors in it, then $bv$ is said to be infinite **dimensional**.

#### Theorem 3

If $\bv$ is an n-dimensional vector space with $n>0$, then

1.	a set of more than n vectors in $\bv$ must be linearly dependent
2.	a set of fewer than n vectors in $\bv$ cannot span $\bv$
3.	a Set of n vectors in $\bv$ is linearly independent if and only if it spans $\bv$

#### Theorem 4

If $\bv$ is an n-dimensional vector space and {$\vsetk$} is a linearly independent set in $bv$ with $k<n$, then there exist vectors $\v{w_{k+1}},\cdots,\v{w_n}$ in $\bv$ such that {$\vsetk, \v{w_{k+1}},\cdots,\v{w_n}$} is a basis for $\bv$

#### Corollary 5

If $\b{S}$ is a subspace of a finite dimensional vector space $\bv$, then $dim\b{S}\leq dim\bv$

## 4.3: Coordinates

#### Theorem 1

If B={$\vsetk$} is a basis for a vector space $\bv$, then every $\v{v}\in\bv$ can be written as a unique linear combination of the vectors in B

#### Definition: B-Coordinates

Let B={$\vsetn$} be a basis for a vector space $\bv$. If $\v{v}=b_1\v{v_1}+\cdots+b_n\v{v_n}$, then $b_1,\cdots,b_n$ are called the **B-coordinates** of $\v{v}$, and we define the **B-coordinate vector** by

$$[\v{v}]_B=\begin{bmatrix}b_1 \\\ \vdots \\\ b_n\end{bmatrix}$$

#### Theorem 2

If $\bv$ is a vector space with basis B={$\vsetn$}, then for any $\v{v},\v{w}\in\bv$ and $s,t\in\b{R}$ we have
$$[s\v{v}+t\v{w}]_B=s[\v{v}]_B+t[\v{w}]_B$$

#### Change of Coordinates

We have seen how to find different bases for a vector space $\bv$ and how to find the coordinates of a vector $\v{v}\in\bv$ with respect to any basis B of $\bv$. In some cases, it is useful to have a quick way of determining the coordinates of $\v{v}$ with respect to some basis C for $\bv$ if we are given the coordinates of $\v{v}$ with respect to the basis B of $\bv$.

For example, in some applications it is useful to write polynomials in terms of powers of x-c for some real c. That is, given a polynomial $p(x)=a_0+a_1x+...+a_nx^n$, we want to write it in the form $p(x)=b_0+b_1(x-c)+b_2(x-c)^2+...+b_n(x-c)^n$. Such a situation may arise if the values of x you are working with are very close to c. If you are working with many polynomials, then it would be very helpful to have a fast way of converting each polynomial. We can rephrase this problem in terms of linear algebra.

Let S={$1,x,...,x^n$} be the standard basis for $P_n(\b{R})$. Given $[p(x)]_S=\begin{bmatrix}a_0 \\\ \vdots \\\ a_n\end{bmatrix}$ we want to determine $[p(x)]_B$ where B is the basis B={$1,x-c,(x-c)^2,...,(x-c)^n$} for $P_n(\b{R})$

Since taking coordinates is a linear operation by Theorem 2, we get
$$\begin{align\*}
[p(x)]_B &= [a_01+a_1x+...+a_nx^n]_B \\\
&= a_0[1]_B + a_1[x]_B + ... + a_n[x^n]_B \\\
&= \begin{bmatrix} [1]_B & [x]_B & \cdots & [x^n]_B\end{bmatrix}
	\begin{bmatrix} a_0 \\\ \vdots \\\ a_n \end{bmatrix}\end{align\*}$$

So, the multiplication of this matrix and the coordinate vector of p(x) with respect to the standard basis gives us the coordinates of p(x) with respect to the new basis B.

#### Definition: Change of Coordinates Matrix

Let B = {$\vsetn$} and C both be bases for a vector space $\bv$. The **change of coordinates matrix** from B-coordinates to C-coordinates is defined by
$$_CP_B=\begin{bmatrix}[\v{v_1}]_C & \cdots & [\v{v_n}]_C \end{bmatrix}$$
and for any $\vx\in\bv$ we have
$$[\vx]_C=_CP_B[\vx]_B$$

#### Theorem 3

If B and C are bases for an n-dimensional vector space $\bv$, then the change of coordinate matrices $_CP_B$ and $_BP_C$ satisfy $_CP_B$$_BP_C=I=_BP_C$$_CP_B$

