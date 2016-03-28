[<- Go Back](../../index.html)

#Chapter 5: Inverses and Determinants$\newcommand{\v}{\vec}$$\newcommand{\b}{\mathbb}$$\newcommand{\vsetk}{\v{v_1},\cdots,\v{v_k}}$$\newcommand{\vsetn}{\v{v_1},\cdots,\v{v_n}}$$\newcommand{\vx}{\vec{x}}$$\newcommand{\bv}{\mathbb{V}}\newcommand{\x}{\times}$$\newcommand{\bm}{\begin{bmatrix}}$$\newcommand{\bmend}{\end{bmatrix}}$$\newcommand{\vm}{\begin{vmatrix}}$$\newcommand{\vmend}{\end{vmatrix}}$

## 5.1 Matrix Inverses

#### Definition: Left and Right Inverse

Let $A$ be an $m\x n$ matrix. If $B$ is an $n\x m$ matrix such that $AB=I_m$, then $B$ is called a **right inverse** of $A$. If $C$ is an $n\x n$ matrix such at $CA=I_m$, then $C$ is called a **left inverse** of $A$.

>How would we try to find a right inverse of an $m\x n$ matrix $A$? We want to find an $n\x m$ matrix $B=\begin{bmatrix}\v{b_1} & \cdots & \v{b_m}\end{bmatrix}$ such that

>$$\begin{align\*} 
I_m &= AB \\\
I_m &= A\begin{bmatrix}\v{b_1} & \cdots & \v{b_m}\end{bmatrix} \\\
\begin{bmatrix}\v{e_1} & \cdots & \v{e_m}\end{bmatrix} &= \begin{bmatrix}A\v{b_1} & \cdots & A\v{b_m}\end{bmatrix}
\end{align\*}$$

>Comparing columns, we see that we need to find $\v{b_i}$ such that $A\v{b_i}=\v{e_i}$ for $1\leq i\leq m$. But, this is just solving m systems of linear equations with the same coefficient matrix. To do this, we row reduce the multiple augmented matrix $\begin{bmatrix}A&|&I_m\end{bmatrix}$ to RREF.

>For This to work, we require that all m system are consistent. So by Theorem 2.2.5(3), rank(A) = m. Hence, by Theorem 2.2.4, we must $n\geq m$.

>Moreover, if $n<m$, then by Theorem 2.2.5(2) we will have infinitely many solutions and hence infinitely many right inverses.

>On the other hand, if $n<m$, then all the systems cannot be consistent and hence $A$ cannot have a right inverse.

#### Theorem 1

If $A$ is an $m\x n$ matrix with $m>n$, then $A$ cannot have a right inverse.

#### Corollary 2

If $A$ is an $m\x n$ matrix with $m<n$, then $A$ cannot have a left inverse.

#### Definition: Square Matrix

An $n\x n$ matrix is called a **square matrix**

#### Theorem 3

If $A$, $B$, and $C$ are $n\x n$ matrices such that $AB=I=BA$, then $B=C$.

#### Definition: Matrix Inverse, Invertible

Let $A$ be an $n\x n$ matrix. If $B$ is a matrix such that $AB=I=BA$, then $B$ is called the **inverse** of $A$. We write $B=A^{-1}$ and we say the $A$ is **invertible**.

#### Remarks

1.	Observe from the definition that if $B=A^{-1}$, then $B$ is invertible and $A=B^{-1}$.
2.	In the definition we said that $B$ is 'the' inverse of $A$. The fact that the inverse of a matrix is unique follows immediately from Theorem 3.

#### Theorem 4

If $A$ and $B$ are $n\x n$ matrices such that $AB=I$, then $A$ and $B$ are invertible and rank$A$=rank$B=n$.

#### Theorem 5

If $A$ and $B$ are invertible matrices and $c\in\b{R}$ with $c\neq0$, then

1.	$(cA)^{-1}=\frac{1}{c}A^{-1}$
2.	$(A^T)^{-1}=(A^{-1})^T$
3.	$(AB)^{-1}=B^{-1}A^{-1}$

#### Theorem 6

If $A$ is an $n\x n$ matrix such that rank$A=n$, then $A$ is invertible.

>The columns of the inverse are the vectors $\v{b_i}$ such that $A\v{b_i}=\v{e_i}$ for $1\leq i\leq n$. Since each of these systems have the same coefficient matrix $A$, we can solve them by making one multiple augmented matrix and row reducing. In particular, assuming that $A$ is invertible we get
$$[A|I]~[I|A^{-1}]$$

#### Theorem 7: Invertible Matrix Theorem

For any $n\x n$ matrix $A$, the following are equivalent:

1.	$A$ is invertible
2.	The RREF of $A$ is $I$
3.	rank$A=n$
4.	The system of equations $A\vx=\v{b}$ is consistent with a unique solution for all $\v{b}\in\b{R}^n$
5.	The nullspace of $A$ is {$\v{0}$}
6.	The columns of $A$ forms a basis for $\b{R}^n$
7.	The rows of $A$ forms a basis for $\b{R}^n$
8.	$A^T$ is invertible

>This theorem says that if any one of the eight items are true for an $n\x n$ matrix, then all of the other items are also true.

>Once we have found $A^{-1}$ we can solve any system of linear equation with coefficient matrix $A$ very quickly. Moreover, at first glance, it might seem like we are solving the system of linear equations without row reducing. However, this is an illusion. The row operations are in fact "stored" inside of the inverse of the matrix (we used row operations to find the inverse).

## 5.2 Elementary Matrices

>Consider the system of linear equation $A\v{x}=\v{b}$ where $A$ is invertible. We compare our two methods of solving this system. First, we can solve this system using the methods of Chapter 2 to row reduce the augmented matrix:
$$[A|\v{b}]~[I|\vx]$$
Alternately, we find $A^{-1}$ using the method in the previous section. We row reduce
$$[A|I]~[I|A^{-1}]$$
and then solve the system by computing $\vx=A^{-1}\v{b}$.

>Observe that in both methods we can use exactly the same row operations to row reduce $A$ to $I$. In the first method, we are applying those row operations directly to $\v{b}$ to determine $\vx$. Thus, in the second method the row operations used are being "stored" inside of $A^{-1}$ and the matrix vector product $A^{-1}\v{b}$ is "performing" those row operations on $\v{b}$ so that we get the same answer as in the first method.

>This not only shows us that $A^{-1}$ is made of elementary row operations, but also that there is a close connection between matrix multiplication and performing elementary row operations.

#### Definition: Elementary Matrix

An $n\x n$ matrix $E$ is call an **elementary matrix** if it can be obtained from the $n\x n$ identity matrix by performing exactly one elementary row operation.

>It is clear that the RREF of every elementary matrix is $I$; we just need to perform the inverse (opposite) row operation to turn the elementary matrix $E$ back to $I$. Thus, we not only have that every elementary matrix is invertible, but the inverse is the elementary matrix associated with the reverse row operation.

#### Theorem 1

If $E$ is an elementary matrix, then $E$ is invertible and $E^{-1}$ is also an elementary matrix.

#### Theorem 2

If $A$ is an $m\x n$ matrix and $E$ is the $m\x m$ elementary matrix corresponding to the row operation $R_i+cR_j$, for $i\neq j$, then $EA$ is the matrix obtained from $A$ by performing the row operation $R_i+cR_j$ on $A$.

#### Theorem 3

If $A$ is an $m\x n$ matrix and $E$ is the $m\x m$ elementary matrix corresponding to the row operation $cR_i$, then $EA$ is the matrix obtained from $A$ by performing the row operation $cR_i$ on $A$.

#### Theorem 4

If $A$ is an $m\x n$ matrix and $E$ is the $m\x m$ elementary matrix corresponding to the row operation $R_i\leftrightarrow R_j$, for $i\neq j$, then $EA$ is the matrix obtained from $A$ by performing the row operation $R_i\leftrightarrow R_j$ on $A$.

#### Corollary 5

If $A$ is an $m\x n$ matrix and $E$ is an $m\x m$ elementary matrix, then
$$rank(EA)=rank(A)$$

#### Theorem 6

If $A$ is an $m\x m$ matrix with reduced row echelon form $R$, then there exist a sequence $E_1,...,E_k$ of $m\x m$ elementary matrices such that $E_k\cdots E_2E_1A=R$. In particular,
$$A=E_1^{-1}E_2^{-1}\cdots E_k^{-1}R$$

>If $A$ is invertible, then we get that the RREF of $A$ is $I$. So, we can write $A$ entirely as a product of elementary matrices. Moreover, by Theorem 6 we have
$$E_k\cdots E_1A=I$$
and
$$A^{-1}=E_k\cdots E_i$$
Consequently, we can also write $A^{-1}$ as s product of elementary matrices. In particular, we have proven the following corollary

#### Corollary 7

If $A$ is an $n\x n$ invertible matrix, then $A$ and $A^{-1}$ can be written as a product of elementary matrices.

#### Theorem 8

If $E$ is an $m\x m$ elementary matrix, then $E_T$ is an elementary matrix.

## 5.3 Determinants

#### Definition: $2\x 2$ Determinant

Let $A=\bm a & b \\\ b & d \bmend$. The **determinant** of $A$ is
$$detA=ad-bc$$

#### Remark

The determinant is often denoted by vertical straight lines:
$$\vm a & b \\\ c & d \vmend = det \bm a & b \\\ b & d \bmend = ad-bc$$

>We, of course, want to extend the definition of the determinant to $n\x n$ matrices. So, we next consider the $3\x 3$ case. Let $A = \bm a_{11} & a_{12} & a_{13} \\\ a_{21} & a_{22} & a_{23} \\\ a_{31} & a_{32} & a_{33} \bmend$. It can be show that $A$ is invertible if and only if
$$a_{11}a_{22}a_{33}-a_{11}a_{23}a_{32}-a_{12}a_{21}a_{33}+a_{13}a_{21}a_{32}+a_{12}a_{23}a_{31}-a_{13}a_{22}a_{31}\neq 0$$
Thus, we define
$$detA=a_{11}a_{22}a_{33}-a_{11}a_{23}a_{32}-a_{12}a_{21}a_{33}+a_{13}a_{21}a_{32}+a_{12}a_{23}a_{31}-a_{13}a_{22}a_{31}$$

>However, we would like to write the formula in a nicer form. Moreover, we would like to find some sort of pattern with this and the $2\x 2$ determinant so that we can figure out how to define the determinant for general $n\x n$ matrices. We observe that
$$a_{11}a_{22}a_{33}-a_{11}a_{23}a_{32}-a_{12}a_{21}a_{33}+a_{13}a_{21}a_{32}+a_{12}a_{23}a_{31}-a_{13}a_{22}a_{31}$$
$$=a_{11}(a_{22}a_{23}-a{23}a{32})-a_{21}(a_{12}a_{33}-a_{13}a_{32})+a_{31}(a_{12}a_{23}-a_{13}a_{22})$$
$$=a_{11}\vm a_{22} & a_{23} \\\ a_{32} & a_{33}\vmend - a_{21}\vm a_{12} & a_{13} \\\ a_{32} & a_{33}\vmend + a_{31}\vm a_{22} & a_{13} \\\ a_{22} & a_{23}\vmend$$
Therefore, the $3\x 3$ determinant can be written as a linear combination of $2\x 2$ determinants of submatrices of $A$ where the coefficients are (plus or minus) the coefficients from the first column of $A$.

>To extend all of this to $n\x n$ matrices we will recursively use the same pattern.

#### Definition: Cofactor

Let $A$ be an $n\x n$ matrix with $n\geq 2$. Let $A(i,j)$ be the $(n-1)\x (n-1)$ matrix obtained from $A$ by deleting the $i$-th row and the $j$-th column. The **cofactor** of $a_{ij}$ is
$$C_{ij}=(-1)^{i+j}detA(i,j)$$

#### Definition: $n\x n$ Determinant

Let $A$ be an $n\x n$ matrix with $n\geq 2$. The **determinant** of $A$ is defined to be
$$detA=\sum_{i=1}^{n}a_{i1}C_{i1}$$
where the determinant of a $1\x 1$ matrix is defined by $det[c]=c$.

#### Remarks

1.	Notice that the definition of a determinant is recursive. The determinant of an $n\x n$ matrix is defined in terms of cofactors which are determinants of $(n-1)\x (n-1)$ matrices.
2.	As we did with $2\x 2$ matrices, we often represent the determinant of a matrix with vertical straight likes.

>We did not have to use the coefficients and cofactors from the first column of the matrix. We can in fact use the coefficients and cofactors from any row or column of the matrix. For $n\x n$ matrices we have the following theorem.

#### Theorem 1

Let $A$ be an $n\x n$ matrix. For any $i$ with $1\leq i\leq n$
$$detA=\sum_{k=1}^{n}a_{ik}C_{ik}$$
called **the cofactor expansion across the $i$-th row**, OR for any $j$ with $1\leq j\leq n$
$$detA=\sum_{k=1}^{n}a_{kj}C{kj}$$
call **the cofactor expansion across the $j$-th column**.

#### Definition: Upper Triangular & Lower Triangular

An $m\x n$ matrix $U$ is said to be **upper triangular** if $u_{ij}=0$ whenever $i>j$. An $m\x n$ matrix $L$ is said to be **lower triangular** if $l_{ij} = 0$ whenever $i<j$.

#### Theorem 2

If an $n\x n$ matrix $A$ is upper triangular or lower triangular, then
$$detA=a_{11}a_{22}\cdots a_{nn}$$

#### Theorem 3

If $A$ is an $n\x n$ matrix and $B$ is the matrix obtained from $A$ by multiplying one row of $A$ by $c\in\b{R}$, then $detB=cdetA$.

#### Theorem 4

If $A$ is an $n\x n$ matrix and $B$ is the matrix obtained from $A$ by swapping two rows of $A$, then $detB=-detA$.

#### Corollary 5

If an $n\x n$ matrix $A$ has two identical rows, then $detA=0$.

#### Theorem 6

If $A$ is an $n\x n$ matrix and $B$ is the matrix obtained from $A$ by adding a multiple of one row of $A$ to another row, then $detB = detA$.

#### Corollary 7

If $A$ is an $n\x n$ matrix and $E$ is an $n\x n$ elementary matrix then
$$detEA = detE detA$$

#### Theorem 8: Addition to the Invertible Matrix Theorem

An $n\x n$ matrix $A$ is invertible if and only if $detA \neq 0$

#### Theorem 9

If $A$ and $B$ are $n\x n$ matrices, then $det(AB)=detA detB$

#### Corollary 10

If $A$ is an invertible matrix, then $detA^{-1}=\frac{1}{detA}$

#### Theorem 11

If $A$ is an $n\x n$ matrix, then $detA = detA^T$

## 5.4 Determinants and Systems of Equations

>The Invertible Matrix Theorem shows us that there is a close connection between whether an $n\x n$ matrix $A$ is invertible, the number of solutions of the system of linear equations $A\vx=\v{b}$, and the determinant of $A$. We now examine this relationship a little further by looking at how to use determinants to find the inverse of a matrix and to solve systems of linear equations.


>Observe that we can write the inverse of a matrix $A=\bm a_{11} & a_{12} \\\ a_{21} & a_{22} \bmend$ in the form
$$A^{-1}=\frac{1}{detA}\bm a_{22} & -a_{12} \\\ -a_{21} & a_{11} \bmend = \frac{1}{detA}\bm C_{11} & C_{32} \\\ C_{12} & C_{22} \bmend$$
That is, the entries of $A^{-1}$ are the cofactors of $A$. In particular,
$$A_{ij}^{-1}= \frac{1}{detA} C_{ji}$$
It is important to take careful notice of the change of order in the subscripts in the line above.

#### Lemma 1

If $A$ is an $n\x n$ matrix with cofactors $C_{ji}$ and $i\neq j$, then
$$\sum_{k=1}^{n} A_{ik} C_{jk}=0$$

#### Theorem 2

If $A$ is an invertible $n\x n$ matrix, then $A_{ij}^{-1}=\frac{1}{detA} C_{ji}$

#### Definition: Cofactor matrix

Let $A$ be an $n\x n$ matrix. The **cofactor matrix**, cof$A$, of $A$ is the matrix whose $ij$-th entry is the $ij$-th cofactor of $A$. That is
$$cofA_{ij}=C_{ij}$$

#### Definition: Adjugate

Let $A$ be an $n\x n$ matrix. The **adjugate** of $A$ is the matrix defined by
$$adjA_{ij}=C_{ij}$$
In particular, $adjA=(cofA)^T$

#### Remark

By Theorem 2, we have that $A^{-1}=\frac{1}{detA}adjA$

>Consider the system of linear equations $A\vx=\v{b}$ where $A$ is an $n\x n$ matrix. If $A$ is invertible, then we know this has unique solution
$$\vx=A^{-1}\v{b}=\frac{1}{detA}(adjA)\v{b}=\frac{1}{detA}\bm C_{11} & \cdots & C_{n1} \\\ \vdots & & \vdots \\\ C_{1n} & \cdots & C_{nn} \bmend \bm b_1 \\\ \vdots \\\ b_n \bmend$$

#### Theorem 3: Cramer's Rule

If $A$ is an $n\x n$ invertible matrix, then the solution $\vx$ of $A\vx=\v{b}$ is given by
$$x_i=\frac{detA_i}{detA},1\leq i\leq n$$
where $A_i$ is the matrix obtained from $A$ by replacing the $i$-th column of $A$ by $\v{b}$

## 5.5 Area and Volume

>Let $\v{u}=\bm u_1 \\\ u_2 \bmend$ and $\v{v}=\bm v_1 \\\ v_2 \bmend$ be two non-zero vectors in $\b{R}^2$. We can from a parallelogram in $\b{R}^2$ with corner points $(0,0),(u_1,u_2),(v_1,v_2),(u_1+v_1,u_2+v_2)$. This is called the **parallelogram induced by $\v{u}$ and $\v{v}$**

>The area of the parallelogram is given by $Area(\v{u},\v{v})=|det[\v{u} \v{v}]|$.

#### Remark

Observe that the determinant can gave a negative answer because the angle $\theta$ from $\v{u}$ to $\v{v}$ was greater than $\pi$ radians. In particular, if we swap $\v{u}$ and $\v{v}$, that is swap the columns of the matrix $[\v{u} \v{v}]$, then we will multiply the determinant by -1. In a similar way, we can use the result above to get geometric confirmation of many of the properties of determinants.

>We can repeat what we did above to find the volume of a parallelepiped induced by three vectors $\v{u},\v{v},\v{w}$ in $\b{R}^3$

>The volume of the parallelepiped is given by $Volume(\v{u},\v{v},\v{w})=\left|det\bm u_1 & v_1 & w_1 \\\ u_2 & v_2 & w_2 \\\ u_3 & v_3 & w_3 \bmend \right|$
