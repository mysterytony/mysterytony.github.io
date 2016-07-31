# Chapter 13 Jacobians and Inverse Mappings

## 13.1 The Inverse Mapping Theorem

Our goal now is to find a condition which will guarantee that a mapping $(u,v) = F(x,y)$ has an inverse. We start by defining inverse mappings in the expected way.

#### Definition

Let $F$ be a mapping from a set $D_{xy}$ onto a set $D_{uv}$. If there exists a mapping $F^{-1}$, called the **inverse of** $F$ which maps $D_{uv}$ into $D_{xy}$ such that

$$(x,y)=F^{-1}(u,v) \quad \text{if and only if} \quad (u,v)= F(x,y)$$

then $F$ is said to be **invertible** on $D_{xy}$.

As usual, we have

$$(F^{-1} \circ F)(x,y) = (x,y) \quad \text{for all } (x,y) \in D_{xy}$$

$$(F \circ F^{-1})(u,v) = (u,v) \quad \text{for all } (u,v) \in D_{uv}$$

Recall that a function being invertible is related to it being one-to-one.

#### Definition

A mapping $F$ form $\mathbb R^2$ to $\mathbb R^2$ is said to be **one-to-one** on a set $D_{xy}$ if and only if $F(a,b)=F(c,d)$ implies $(a,b)=(c,d)$, for all $(a,b), (c,d) \in D_{xy}$.

#### Theorem 1

Let $F$ be a mapping from a set $D_{xy}$ onto a set $D_{uv}$. If $F$ is one-to-one on $D_{xy}$, then $F$ is invertible on $D_{xy}$.

Now recall from Calculus 1 that if $f'(x)>0$ for all $x\in[a,b]$, then $f$ is one-to-one on $[a,b]$ and hence has an inverse on $[a,b]$. Thus, for a mapping $F$, it makes sense to investigate the relation between the derivative matrix $DF$ of $F$ and $F$ being invertible. We start with the following theorem.

#### Theorem 2

Consider a mapping $F$ which maps $D_{xy}$ into $D_{uv}$. If $F$ has continuous partial derivatives at $\mathbf x \in D_{xy}$ and there exists an inverse mapping $F^{-1}$ of $F$ which has continuous partial derivatives at $\mathbf u = F(\mathbf x) \in D_{uv}$, then

$$DF^{-1}(\mathbf u)DF(\mathbf x) = I$$

>#### Proof
By the Chain Rule in Matrix Form we get
$$DF^{-1}(u)DF(x)=D(F^{-1} \circ F)(x)$$
By above equation we have
$$D(F^{-1} \circ F)(x) = Dx = \begin{bmatrix} \frac{\partial x}{\partial x} & \frac{\partial x}{\partial y} \\\ \frac{\partial y}{\partial x} & \frac{\partial y}{\partial y} \end{bmatrix} = \begin{bmatrix} 1 & 0 \\\ 0 & 1 \end{bmatrix} = I$$
as required.
$\square$

#### Remark

The fact that we could solve and obtain a unique solution for $x$ and $y$ in the preceding example proves that $F$ has an inverse mapping on $\mathbb R^2$. It is only in simple examples that one can carry out this step. Hence it is useful to develop a test to determine if a mapping $F$ has an inverse mapping.

The determinant of the derivative matrix plays an important role in the study of mappings and in their application to multiple integrals.

#### Definition

The **Jacobian** of a mapping

$$(u,v) =F(x,y) = (u(x,y),v(x,y))$$

is denoted $\frac{\partial (u,v)}{\partial (x,y)}$, and is defined by

$$\frac{\partial (u,v)}{\partial (x,y)} = det [DF(x,y)] = det \begin{bmatrix} \frac{\partial u}{\partial x} & \frac{\partial u}{\partial y} \\\ \frac{\partial v}{\partial x} & \frac{\partial v}{\partial y} \end{bmatrix}$$

One can interpret Theorem 2 as asserting that if a mapping $F$ is invertible then its derivative matrix $DF(x,y)$ is invertible, and its inverse matrix is the derivative $DF^{-1}(u,v)$ of the inverse map. Recall from linear algebra that a square matrix has an inverse matrix if and only if its determinant is non-zero. Thus, it follows from Theorem 2 that is a mapping $F$ has an inverse mapping $F^{-1}$ (and both mappings have continuous partial derivatives), then the Jacobian of $F$ is non-zero. This is stated as a corollary to Theorem 2.

#### Corollary 3

Consider a mapping defined by

$$(u,v) = F(x,y) = (f(x,y),g(x,y))$$

which maps a subset $D_{xy}$ on a subset $D_{uv}$. Suppose that $f$ and $g$ have continuous partials on $D_{xy}$. If $F$ has an inverse mapping $F^{-1}$, with continuous partial on $D_{uv}$, then the Jacobian on $F$ is non-zero:

$$\frac{\partial (u,v)}{\partial (x,y)} \neq 0 \quad \text{on } D_{xy}$$

#### Remark

The notation $\frac{\partial (u,v)}{\partial (x,y)}$ for the Jacobian reminds one which partial derivatives have to be calculated. Thus, if $F$ maps $(x,y) \rightarrow (u,v)$ and is one-to-one, then the inverse $F^{-1}$ maps $(u,v) \rightarrow (x,y)$, and the Jacobian of the inverse is denoted by

$$\frac{\partial (x,y)}{\partial (u,x)} = det [DF^{-1}(u,v)] = det \begin{bmatrix} \frac{\partial x}{\partial u} & \frac{\partial x}{\partial v} \\\ \frac{\partial y}{\partial u} & \frac{\partial y}{\partial v} \end{bmatrix}$$

Recall from linear algebra that $det (AB) = det A det B$ for all $n \times n$ matrices $A, B$. We can thus deduce from Theorem 2 a simple relationship between the Jacobian of a mapping and the Jacobian of the inverse mapping. We state this as a corollary to Theorem 2.

#### Corollary 4 Inverse Property of the Jacobian

If the hypotheses of Theorem 2 hold, then

$$\frac{\partial (x,y)}{\partial (u,v)} = \frac{1}{\frac{\partial (u,v)}{\partial (x,y)}}$$

(Proof omitted, see book 154)

#### Theorem 5 Inverse Mapping Theorem

If a mapping $(u,v) = F(x,y)$ has continuous partial derivatives in some neighborhood of $(a,b)$ and $\frac{\partial (x,y)}{\partial (u,v)} \neq 0$ at $(a,b)$, then there is a neighborhood of $(a,b)$ in which $F$ has an inverse mapping $(x,y) = F^{-1}(u,v)$ which has continuous partial derivatives.

## 13.2 Geometrical Interpretation of the Jacobian

In this section we explain the geometric interpretation of the Jacobian of a mapping. This interpretation is based on the following result from linear algebra. The area of a parallelogram which is defined by two vectors $\begin{bmatrix} a_1 \\\ a_2\end{bmatrix}$ and $\begin{bmatrix} b_1 \\\ b_2\end{bmatrix}$ is given by

$$Area = \left| det \begin{bmatrix} a_1 & b_1 \\\ a_2 & b_2 \end{bmatrix} \right|$$

We calculate the area of the image in the $uv$-plane, of a small rectangle in the $xy$-plane under a mapping $F$.

We approximate the image of the rectangle defined by the vectors $\vec{PQ}$ and $\vec{PR}$ as a parallelogram defined by the vectors $\vec{P'Q'}$ and $\vec{P'R'}$, and use the linear approximation to approximate $\vec{P'Q'}$ and $\vec{P'R'}$.

Since $\vec{PQ} \begin{bmatrix} \Delta x \\\ 0 \end{bmatrix}$ and $\vec{PR} = \begin{bmatrix} 0 \\\ \Delta y \end{bmatrix}$, we obtain

$$\vec{P'Q'} \approx \begin{bmatrix} u_x & u_y \\\ v_x & v_y \end{bmatrix} \vec{PQ} \begin{bmatrix} \Delta x \\\ 0 \end{bmatrix} = \begin{bmatrix} u_x \Delta x \\\ v_x \Delta x \end{bmatrix}$$

$$\vec{P'R'} \approx \begin{bmatrix} u_x & u_y \\\ v_x & v_y \end{bmatrix} \vec{PQ} \begin{bmatrix} 0 \\\ \Delta y \end{bmatrix} = \begin{bmatrix} u_y \Delta y \\\ v_y \Delta y \end{bmatrix}$$

for $\Delta x$ and $\Delta y$ sufficiently small. Note that the partial derivatives are evaluated at $P$. We have

$$\Delta A_{xy} = \Delta x \Delta y$$

and so, since $\Delta x$ and $\Delta y$ are positive, by the definition of the Jacobian

$$\Delta A_{uv} \approx \left| \frac{\partial (u,v)}{\partial (x,y)} \right| \Delta A_{xy}$$

where the Jacobian is evaluated at $P$.

In words, the Jacobian of mapping $F$ describes the extend to which $F$ increases or decreases areas. We can think of the Jacobian of $F$ as a magnification factor for (very small) areas that are mapped by $F$. Keep in mind that the basic relation is an approximation, which is valid only for small areas, ans which becomes increasingly accurate as $\Delta x$ and $\Delta y$ tends to zero.

#### Remark

For a linear mapping $(u,v) = F(x,y) = (ax+by, cx+dy)$ where $a,b,c,d$ are constants, the derivative matrix is

$$DF(x,y) = \begin{bmatrix} a & b \\\ c & d \end{bmatrix}$$

and thus the linear approximation is exact by Taylor's Theorem since all second partial are zero. Therefore, for a linear mapping the approximation becomes an exact relation.

### Generalization

At the end of Section 12.2, we generalized the concept of a mapping $F$ from $\mathbb R^2$ to $\mathbb R^2$ to a mapping $F$ from $\mathbb R^n$ to $\mathbb R^m$, and defined the $m \times n$ derivative matrix $DF(x)$. If $m=n$, then we can define the Jacobian of the mapping, as follows.

#### Definition

For a mapping defined by

$$u = F(x) = (f_1(x),...,f_n(x))$$

where $u = (u_1,...,u_n)$ and $x = (x_1,...,x_n)$, the **Jacobian** of $F$ is

$$\frac{\partial (u_1,...,u_n)}{\partial (x_1,...,x_n)} = det[DF(x,y)] = det \begin{bmatrix} \frac{\partial f_1}{\partial x_1} & \cdots & \frac{\partial f_1}{\partial x_n} \\\ \vdots & \quad & \vdots \\\ \frac{\partial f_n}{\partial x_1} & \cdots & \frac{\partial f_n}{\partial x_n} \end{bmatrix}$$

### Geometrical Interpretation of the Jacobian in 3-D

(omitted, see book 160)

## 13.3 Constructing Mappings

When performing change of variables in double and triple integrals in Chapter 14 and 15, it will be very important to be able to invent an invertible mapping which transforms one region to another, simpler region.

