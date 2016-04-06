[<- Go Back](http://tonyli.tk/)

#Chapter 6: Eigenvectors and Diagonalization$\newcommand{\v}{\vec}$$\newcommand{\b}{\mathbb}$$\newcommand{\vsetk}{\v{v_1},\cdots,\v{v_k}}$$\newcommand{\vsetn}{\v{v_1},\cdots,\v{v_n}}$$\newcommand{\vx}{\vec{x}}$$\newcommand{\bv}{\mathbb{V}}\newcommand{\x}{\times}$$\newcommand{\bm}{\begin{bmatrix}}$$\newcommand{\bmend}{\end{bmatrix}}$$\newcommand{\vm}{\begin{vmatrix}}$$\newcommand{\vmend}{\end{vmatrix}}$

## 6.1 Matrix of a Linear Mapping, Similar Matrices

#### Matrix of a Linear Operator

>The standard matrix $[L]$ of a linear operator $L:\b{R}^n \rightarrow \b{R}^n$ satisfies $L(\vx)=[L]\vx$. Thus, to define the matrix $[L]_B$ of $L$ with respect to any basis $B$ of $\b{R}^n$, we mimic this formula in $B$-coordinates instead of standard coordinates. That is, we want
$$[L(\vx)]_B=[L]_B [\vx]_B$$
Let $B={\v{v}_1,...,\v{v}_n}$. Then, we can write $\vx = b_1\v{v}_1+\cdots +b_n\v{v}_n$ and we get
$$\begin{align\*} [L(\vx)]_B &= [L( b_1\v{v}_1+\cdots +b_n\v{v}_n)]_B \\\
&= [b_1L(\v{v}_1)+\cdots +b_nL(\v{v}_n)]_B \\\
&= b_1[L(\v{v}_1)]_B +\cdots +b_n[L(\v{v}_n)]_B \\\
&= \bm [L(\v{v}_1)]_B & \cdots & [L(\v{v}_n)]_B \bmend \bm b_1 \\\ \vdots \\\ b_n \bmend \end{align\*}$$
Therefore, we have $[L(\vx)]_B$ as a product of a matrix and $[\vx]_B$ as desired.

#### Definition: B-matrix

Let $B=\\{\vsetn\\}$ be a basis for $\b{R}^n$ and let $L:\b{R}^n\rightarrow \b{R}^n$ be a linear operator. The **$B$-matrix** of $L$ is defined to be
$$[L]_B = \bm [L(\v{v}_1)]_B & \cdots & [L(\v{v}_n)]_B \bmend$$
It satisfies $[L(\vx)]_B=[L]_B [\vx]_B$.

#### Definition: Diagonal Matrix

An $n\x n$ matrix $D$ is said to be a **diagonal matrix** if $d_{ij}=0$ for all $i\neq j$. We denote a diagonal matrix by
$$diag \\{d_{11},d_{22},...,d_{nn} \\}$$

#### Similar Matrices

Let $L:\b{R}^n \rightarrow \b{R}^n$ be a linear operator with standard matrix $A=[L]$ and let $B=\\{\vsetn\\}$ be a basis for $\b{R}^n$. Then by definition, we have
$$[L]_B=\bm [A\v{v}_1]_B & \cdots & [A\v{v}_n]_B \bmend$$

We know that the change of coordinates matrix from $B$-coordinates to $S$-coordinates is $P=[\v{v}_1 \cdots \v{v}_n]$. Hence, we have $[\vx]_B = P^{-1}\vx$ for any $vx\in \b{R}^n$. Since $A\v{v}_i\in\b{R}^n$ for $1\leq i \leq n$, we can get
$$\begin{align\*} 
[L]_B &= \bm [A\v{v}_1]_B & \cdots & [A\v{v}_n]_B \bmend \\\
&= \bm P^{-1}A\v{v}_1 & \cdots & P^{-1}A\v{v}_n \bmend \\\
&= P^{-1}A \bm \v{v}_1 & \cdots & \v{v}_n \bmend \\\
&= P^{-1}AP \end{align\*}$$

#### Remark

You can also show that $[L]_B = P^{-1}[L]P$, by showing that $[L]_B[\vx]_B=P{-1}[L]P[\vx]_B$ for all $\vx\in\b{R}$ by simplifying the right hand side of the equation.

#### Theorem 1

If $A$ and $B$ are $n\x n$ matrices such that $P^{-1}AP=B$ for some invertible matrix $P$, then
1.	rankA = rankB
2.	detA = detB
3.	trA = trB where tr A is defined by $\sum_{i=1}^{n}a_{ii}$ and is called the trace of a matrix

#### Definition: Similar

If $A$ and $B$ be $n\x n$ matrices such that $P^{-1}AP=B$ for some invertible matrix $P$, then $A$ is said to be **similar** to $B$.

#### Remark

Observe that if $P^{-1}AP=B$, then taking $Q=p^{-1}$ we get the $Q$ is an invertible matrix such that $A=PBP^{-1}=Q^{-1}BQ$. So, the similarity property is symmetric. In particular, we usually will just say that $A$ and $B$ are similar.


## 6.2 Eigenvalues and Eigenvectors

Let $A=[L]$ be the standard matrix of a linear operator $L:\b{R}^n\rightarrow \b{R}^n$. To determine how to construct an invertible matrix $P$ such that $P^{-1}AP=D$ is diagonal, we work in reverse. That is, we will assume that such a matrix $P$ exists and use this to find that properties $P$ and $D$ must have.

Let$P=[\v{v}_1 \cdots \v{v}_n]$ and let $D= diag(\lambda_1,...,\lambda_n)=[\lambda_1\v{e}_1 \cdots \lambda_n \v{e}_n]$ such that $P^{-1}AP=D$, or alternately $AP=PD$. This gives
$$\begin{align\*} A[\v{v}_1 \cdots \v{v}_n] &= P[\lambda_1\v{e}_1 \cdots \lambda_n \v{e}_n] \\\
[A\v{v}_1 \cdots A\v{v}_n] &= [\lambda_1 P \v{e}_1 \cdots \lambda_n P \v{e}_n] \\\
[A\v{v}_1 \cdots A\v{v}_n] &= [\lambda_1 v{v}_1 \cdots \lambda_n v{v}_n] \end{align\*}$$

Thus, we must have $A\v{v}_i=\lambda_i \v{v}_i$ for $1\leq i \leq n$. Moreover, for $P$ to be invertible, the columns of $P$ must be linearly independent. In particular, $\v{v}_1\neq\v{0}$ for $1\leq i \leq n$.

#### Definition: Eigenvalue, Eigenvector & Eigenpair

Let $A$ be an $n\x n$ matrix. If there exists a vector $\v{v}\neq \v{0}$ such that $A\v{v}=\lambda\v{v}$, then $\lambda$ is called an **eigenvalue** of $A$ and $\v{v}$ is called an **eigenvector** of $A$ corresponding to $\lambda$. The pair $(\lambda, \v{v})$ is called an **eigenpair**.

#### Definition

Let $L:\b{R}^n\rightarrow\b{R}^n$ be a linear operator. If there exists a vector $\v{v}\neq\v{0}$ such that $L(\v{v})=\lambda \v{v}$, then $\lambda$ is call an **eigenvalue** of $L$ and $\v{v}$ is call an **eigenvector** of $L$ corresponding to $\lambda$.

#### Definition: Characteristic Polynomial

Let $A$ be an $n\x n$ matrix. the **characteristic polynomial** of $A$ is the $n$-th degree polynomial
$$C(\lambda)=det(A-\lambda I)$$

#### Theorem 1

A scalar $\lambda$ is an eigenvalue of an $n\x n$ matrix $A$ if and only if $C(\lambda)=0$.

We also see that the set of all eigenvectors associated with an eigenvalue $\lambda$ is the nullspace of $A-\lambda I$ not including the zero vector.

#### Definition: Eigenspace

Let $A$ be an $n\x n$ matrix with eigenvalue $\lambda$. We call the nullspace of $A-\lambda I$ the **eigenspace** of $\lambda$. The eigenspace is denoted $E_\lambda$.

#### Remarks
1.	It is important to remember that the set of all eigenvectors for the eigenvalue $\lambda$ of $A$ is all vectors in $E_\lambda$ excluding the zero vector.
2.	Since the eigenspace is just the nullspace of $A-\lambda I$, it is also a subspace of $\b{R}^n$.

#### Theorem 2

If $A$ is an $n\x n$ upper or lower triangular matrix, then the eigenvalues of $A$ are the diagonal entries of $A$.

#### Definition: Algebraic Multiplicity & Geometric Multiplicity

Let $A$ be an $n\x n$ matrix with eigenvalue $\lambda_1$. the **algebraic multiplicity** of $\lambda_1$, denoted $a_{\lambda_1}$, is the number of times that $\lambda_1$ is a root of the characteristic polynomial $C(\lambda)$. That is if $C(\lambda)=(\lambda-\lambda_1)^kC_1(\lambda)$, where $C_1(\lambda_1)\neq 0$, then $a_{\lambda_1}=k$. The **geometric multiplicity** of $\lambda$, denoted $g_{\lambda_1}$, is the dimension of its eigenspace. So, $g_{\lambda_1}=dim(E_{\lambda_1})$.

#### Lemma 3

Let $A$ and $B$ be similar matrices, then $A$ and $B$ have the same characteristic polynomial and hence the same eigenvalues.

#### Theorem 4

If $A$ is an $n\x n$ matrix with eigenvalue $\lambda_1$, then $1\leq g_{\lambda_1} \leq a_{\lambda_1}$.

## 6.3 Diagonalization

#### Definition: Diagonalizable

An $n\x n$ matrix $A$ is said to be **diagonalizable** if $A$ is similar to a diagonal matrix $D$. If $P^{-1}AP=D$, then we way that $P$ **diagonalizes** $A$.

#### Theorem 1: Diagonalization Theorem

An $n\x n$ matrix $A$ is diagonalizable if and only if there exists a basis $\\{\vsetn\\}$ for $\b{R}^n$ of eigenvectors of $A$.

#### Lemma 2

If $A$ is an $n\x n$ matrix with eigenpairs $(\lambda_1,\v{v}_1),...,(\lambda_k,\v{v}_k)$ where $\lambda_i \neq \lambda_j$ for $i\neq j$, then $\\{\vsetk\\}$ is linearly independent.

#### Theorem 3

If $A$ is an $n\x n$ matrix with district eigenvalues $\lambda_1,...,\lambda_k$ and $B_i=\\{\v{v_{i,1}},...,\v{v_{i,g_{\lambda_i}}}\\}$ is a basis for the eigenspace of $\lambda_i$ for $1\leq i \leq k$, then $B_1\cup ... \cup B_k$ is a linearly independent set.

#### Corollary 4

If $A$ is an $n\x n$ matrix with distinct eigenvalues $\lambda_1,...,\lambda_k$, then $A$ is diagonalizable if and only if $g_{\lambda_i}=a_{\lambda_i}$ for $1\leq i\leq k$.

#### Corollary 5

If $A$ is an $n\x n$ matrix with $n$ distinct eigenvalues, then $A$ is diagonalizable.

#### Algorithm

To diagonalize an $n\x n$ matrix $A$, or show that $A$ is not diagonalizable:

1.	Find and factor the characteristic polynomial $C(\lambda)=det(A-\lambda I)$.
2.	Let $\lambda_1,...,\lambda_n$ denote the $n$-root of $C(\lambda)$ (repeated according to multiplicity). If any of the eigenvalues $\lambda_i$ are not real, then $A$ is not diagonalizable over $\b{R}$.
3.	Find a basis for the eigenspace of each $\lambda_i$ by finding a basis for the nullspace of $A-\lambda_i I$.
4.	If $g_{\lambda_i}<a_{\lambda_i}$ for any $\lambda_i$, then $A$ is not diagonalizable. Otherwise, form a basis $\\{\v{v}_1,...,\v{v}_n\\}$ for $\b{R}^n$ of eigenvectors of $A$ by using Theorem 3. Let $P=[\v{v}_1 \cdots \v{v}_n]$. Then, $P^{-1}AP=diag(\lambda_1,...,\lambda_n)$ where $\lambda_i$ is an eigenvalue corresponding to the eigenvector $\v{v}_i$ for $1\leq i\leq n$.

#### Remark

It is important to remember that the answer is not unique. We can arrange the linearly independent eigenvectors of $A$ as the columns of $P$ in any order. We only have to ensure the entry $d_{ii}$ in $D$ is an eigenvalue of $A$ of the eigenvector in the $i$-th column of $P$.

#### Theorem 6

If $\lambda_1,...,\lambda_n$ are all the eigenvalues of an $n\x n$ matrix $A$, then
$$trA=\lambda_1 + \cdots + \lambda_n$$

## 6.4 Powers of Matrices

#### Theorem 1

Let $A$ be an $n\x n$ matrix. If there exists a matrix $P$ and diagonal matrix $D$ such that $P^{-1}AP=D$, then
$$A^{k}=PD^kP^{-1}$$

