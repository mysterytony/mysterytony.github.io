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

