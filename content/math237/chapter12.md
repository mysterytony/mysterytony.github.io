# Chapter 12 Mapping of $\mathbb R^2$ into $\mathbb R^2$

In part I, we studied scalar-valued functions, that is, functions which map a subset of $\mathbb R^n$ into $\mathbb R$. We now extend the ideas of differential calculus to more general functions.

#### Definition

A function whose domain is a subset of $\mathbb R^n$ and whose codomain is $\mathbb R^m$ is called a **vector-valued** function.

You have already worked with the simplest type of vector-valued functions. Consider parametric equations $x=f(t), y=g(t)$ for a curve in $\mathbb R^2$: These two scalar equations can be written as a vector equation:

$$(x,y) = F(t) = (f(t),g(t))$$

The function $F$ maps $t$ to $F(t)$, so the domain of $F$ is a subset of $\mathbb R$ and its codomain is $\mathbb R^2$. Consequently, $F$ is a vector-valued function.

#### Remark

While we represent $(f(t),g(t))$ as a point in $\mathbb R^2$, remember that it can be thought of as a position vector.

#### Definition

A vector-valued function whose domain is a subset of $\mathbb R^n$ and whose codomain is a subset of $\mathbb R^n$ is called a **mapping**.

## 12.1 The Geometry of Mapping

A pair of equations

$$\begin{align\*}
u &= f(x,y) \\\
v &= g(x,y) \end{align\*}$$

associates with each point $(x,y) \in \mathbb R^2$ a single point $(u,v) \in \mathbb R^2$, and thus defines a vector-valued function

$$(u,v) = F(x,y) = (f(x,y), g(x,y))$$

The scalar functions $f$ and $g$ are called the **component functions** of the mapping.

Mapping of $\mathbb R^2$ into $\mathbb R^2$ have many applications, such as defining curvilinear coordinate system, and performing a change of variables in multiple integrals. They are used in applied mathematics, in statistics, and in computer graphics for simplifying problems in two or more variables.

In general, if a mapping $F$ from $\mathbb R^2$ to $\mathbb R^2$ acts on a curve $C$ in its domain, it will determine a curve in its range, denoted by $F(C)$ and called the **image of $C$ under $F$**.

More generally, if a mapping $F$ from $\mathbb R^2$ to $\mathbb R^2$ acts on any subset $S$ in its domain it will determine a set $F(S)$ in its range, called the **image of $S$ under $F$**.

In order to develop an intuitive geometric understanding of a mapping it is helpful to determine the images of different curves and sets under the mapping. In general, a mapping will deform a given curve or set.

#### Remark

1.	Observe that each of the images are exactly what we would get if we sketched the equations as in chapter 11.
2.	The mapping from polar coordinates to Cartesian coordinates is non-linear. The image of a straight like is not necessarily a straight line.

## 12.2 The Linear Approximation of a Mapping

Consider a mapping $F$ defined by $u =f(x,y), v = g(x,y)$. We assume that $F$ has continuous partial derivatives. By this we mean that the component function $f$ and $g$ have continuous partial derivatives.

The image of a point $(a,b)$ in the $xy$-plane is the point $(c,d)$ in the $uv$-plane, where

$$c = f(a,b) \quad d = g(a,b)$$

As usual, we want to approximate the image $(c + \Delta u, d = \Delta v)$ of a nearby point $(a+ \Delta x, b+\Delta y)$.

We do this by using the linear approximation for $f(x,y)$ and $g(x,y)$ separately.

We get

$$\Delta u \approx \frac{\partial f}{\partial x}(a,b) \Delta x + \frac{\partial f}{\partial y}(a,b) \Delta y$$

$$\Delta v \approx \frac{\partial g}{\partial x}(a,b) \Delta x + \frac{\partial g}{\partial y}(a,b) \Delta y$$

for $\Delta x$ and $\Delta y$ sufficiently small. This can be written in matrix form as:

$$\begin{bmatrix} \Delta u \\\ \Delta v \end{bmatrix} \approx
\begin{bmatrix}
\frac{\partial f}{\partial x}(a,b) & \frac{\partial f}{\partial y}(a,b) \\\ \frac{\partial g}{\partial x}(a,b) & \frac{\partial g}{\partial y}(a,b)
\end{bmatrix}
\begin{bmatrix} \Delta x \\\ \Delta y \end{bmatrix}$$

where the product on the right side of the equation is matrix multiplication.

Observe that this resembles our usual form of the linear approximation where the $2\times 2$ matrix is taking the place of the "derivative". Thus we make the following definition.

#### Definition

The **derivative matrix** of a mapping defined by

$$F(x,y) = (f(x,y),g(x,y))$$

is denoted $DF$ and defined by

$$DF = \begin{bmatrix} \frac{\partial f}{\partial x} & \frac{\partial f}{\partial y} \\\ \frac{\partial g}{\partial x} & \frac{\partial g}{\partial y} \end{bmatrix}$$

If we introduce the column vectors

$$\Delta \mathbf u = \begin{bmatrix} \Delta u \\\ \Delta v \end{bmatrix} \quad \Delta \mathbf x = \begin{bmatrix} \Delta x \\\ \Delta y \end{bmatrix}$$

then the **increment form of the linear approximation for mappings** becomes

$$\Delta \mathbf u \approx DF(a,b) \Delta \mathbf x$$

for $\Delta \mathbf x$ sufficiently small. Thus, the **linear approximation for mappings** is

$$f(x,y) \approx f(a,b) + DF(a,b)\Delta \mathbf x$$

The geometrical interpretation of the linear approximation for mappings is this: the derivative matrix $DF(a,b)$ acts as a linear mapping on the displacement vector $\Delta \mathbf x$ to give an approximation of the image $\Delta \mathbf u$ of the displacement under $F$.

### Generalization

A mapping $F$ from $\mathbb R^n$ to $\mathbb R^m$ is defined by a set of $m$ component functions:

$$\begin{align\*}
u_1 &= f_1(x_1,...,x_n) \\\
&\vdots \\\
u_m &= f_m(x_1,...x_n)\end{align\*}$$

Or, in vector notation

$$\mathbf u = F(\mathbf x) = (f_1(\mathbf x),...,f_m(\mathbf x)) \quad \mathbf x \in \mathbb R^n$$

If we assume that $F$ has continuous partial derivatives, then the derivative matrix of $F$ is the $m\times n$ matrix defined by

$$DF(\mathbf x) = \begin{bmatrix} \frac{\partial f_1}{\partial x_1} & \cdot & \frac{\partial f_1}{\partial x_n} \\\
\vdots & \quad & \vdots \\\
\frac{\partial f_m}{\partial x_1} & \cdots \frac{\partial f_m}{\partial x_n} \end{bmatrix}$$

As expected, the linear approximation for $F$ at $\mathbf a$ is

$$F(\mathbf x) \approx F(\mathbf a) + DF(\mathbf a) \Delta \mathbf x$$

where

$$\Delta \mathbf u = \begin{bmatrix} \Delta u_1 \\\ \vdots \\\ \Delta u_m \end{bmatrix} \in \mathbb R^n \quad \Delta \mathbf x = \begin{bmatrix} \Delta x_1 \\\ \vdots \\\ \Delta x_n \end{bmatrix} \in \mathbb R^m$$

## 12.3 Composite Mappings and the Chain Rule

The next step in developing the theory of mappings is to study the composition of two mappings.

Consider successive mappings $F$ and $G$ of $\mathbb R^2$ into $\mathbb R^2$, defined by

$$F: \begin{cases} p = p(u,v) \\\ q = q(u,v) \end{cases} \quad G:\begin{cases} u = u(x,y) \\\ v = v(x,y) \end{cases}$$

The composition mapping $F \circ G$, defined by

$$\begin{cases} p = p(u(x,y), v(x,y)) \\\ q = q (u(x,y),v(x,y)) \end{cases}$$

maps the $xy$-plane directly into the $pq$-plane.

The question is this: how is the derivative matrix $D(F \circ G)$ of the composite mapping related to the derivative matrices $DF$ and $DG$ of the individual mappings?

The answer is: $D(F \circ G)(x,y)$ is the matrix product of $DF(u,b)$ and $DG(x,y)$, where $(u,v)=G(x,y)$.

We state this formally in the following theorem.

#### Theorem 1 Chain Rule in Matrix Form

Let $F$ and $G$ be mappings from $\mathbb R^2$ to $\mathbb R^2$. If $G$ has continuous partial derivatives at $(x,y)$ and $F$ has continuous partial derivatives at $(u,v)=G(x,y)$, then the composite mapping $F \circ G$ has continuous partial derivatives at $(x,y)$ and

$$D(F \circ G)(x,y) = DF(u,v)DG(x,y)$$

(proof omitted, see book page 148)

