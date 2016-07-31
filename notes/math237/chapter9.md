# Chapter 9 Critical Points

Recall from single variable calculus that if $x=a$ is a local extremeum of $f(x)$, then either $f'(a) = 0$ or $f'(a)$ does not exist. Such points are of interest and are called critical points of $f$. But recall that a critical point is not necessarily a local extremeum. For example $f(x) =x ^3$ at $x=0$.

In this chapter, we extend these ideas to functions $f(x,y)$. The second degree Taylor polynomial will be used to generalize the second derivative test for local extrema. These ideas will be applied to optimization problems in Chapter 10.

## 9.1 Local Extrema and Critical Points

We begin with the definition of local extrema.

#### Definition

A point $(a,b)$ is a **local maximum point** of $f$ if $f(x,y) \leq f(a,b)$ for all $(x,y)$ in some neighborhood of $(a,b)$.

A point $(a,b)$ is a **local minimum point** of $f$ if $f(x,y) \geq f(a,b)$ for all $(x,y)$ in some neighborhood of $(a,b)$.

Thinking geometrically, if $(a,b)$ is a local maximum/minimum point of $f$ and $f$ has continuous partial derivatives, then $(a,b)$ is a local maximum/minimum point of the cross-sections $f(x,b)$ and $f(a,y)$. Thus $(a,b)$ is a critical point of both of these cross-sections and so both partial derivatives of $f$ will be zero and the tangent plane will be horizontal.

#### Theorem 1

If $(a,b)$ is a local maximum or minimum point of $f$, then

$$f_x(a,b) = 0 = f_y(a,b)$$

or at least one of $f_x$ or $f_y$ does not exist at $(a,b)$.

>#### proof
Consider the function $g$ defined by $g(x) = f(x,b)$. If $(a,b)$ is a local maximum/minimum point of $f$, then $x=a$ is a local maximum/minimum point of $g$, and hence either $g'(a)=0$ or $g'(a)$ does not exist. Thus it follows that either $f_x(a,b) = 0$ or $f_x(a,b)$ does not exist. A similar argument gives $f_y(a,b) = 0$ or $f_y(a,b)$ does not exist.

#### Definition

A point $(a,b)$ in the domain of $f(x,y)$ is called a **critical point** of $f$ if

$$\frac{\partial f}{\partial x}(a,b) = 0 = \frac{\partial f}{\partial y}(a,b)$$

or if at least one of the partial derivatives does not exist at $(a,b)$.

#### Definition

A critical point $(a,b)$ of $f(x,y)$ is called a **saddle point** of $f$ if in every neighborhood of $(a,b)$ there exist points $(x_1,y_1)$ and $(x_2, y_2)$ such that

$$f(x_1,y_1) > f(a,b) \text{ and } f(x_2,y_2) < f(a,b)$$

The problem that we are faced with has two parts:

1.	Given $f(x,y)$, find all critical points of $f$.
2.	Determine whether the critical points are local maxima, minima or saddle points.

#### Remark

1.	It is essential to solve equations systematically, by considering all possible cases, in order to find all critical points.
2.	You should be aware that we can only explicitly find the critical points for simple functions $f$. The equations

$$\frac{\partial f}{\partial x} = 0 \quad \frac{\partial f}{\partial y} = 0$$

are a system of equations which are generally non-linear, and there is no general algorithms for solving such systems exactly. There are, however, numerical methods for finding approximate solutions, one of which is a generalization of Newton's method. If you review the one variable case, you might see how to generalize it, using the tangent plane.

## 9.2 The Second Derivative Test

### Review of the 1-D Case

For $f(x)$ the second degree Taylor polynomial approximation is

$$f(x) \approx f(a) + f'(a)(x-a) + \frac 12 f''(a)(x-a)^2$$

for $x$ sufficiently close to $a$. If $x=a$ is a critical point of $f$, then $f'(a) = 0$, and the approximation can be rearranged to give

$$f(x) - f(a) = \approx \frac 12 f''(a)(x-a)^2$$

Thus, for $x$ sufficiently close to $a$, $f(x)-f(a)$ has the same sign as $f''(a)$. If $f''(a) > 0$, then $f(x)-f(a) >0$ for sufficiently close to $a$, and $x=a$ is a local minimum point. If $f''(a) < 0$ then $f(x)-f(a)<0$ for $x$ sufficiently close to $a$, and $x=a$ is a local maximum point. There is no conclusion if $f''(a)=0$.

### The 2-D Case

For $f(x,y) \in C^2$, the second degree Taylor polynomial approximation is

$$f(x,y) = P_{2,(a,b)}(x,y)$$

for $(x,y)$ sufficiently close to $(a,b)$. If $(a,b)$ is a critical point of $f$ such that

$$f_x(a,b) = 0 = f_y(a,b)$$

then the approximation can be rearranged to yield

$$f(x,y)-f(a,b) \approx \frac 12 [f_{xx}(a,b)(x-a)^2+2f_{xy}(a,b)(x-a)(y-b)+f_{yy}(a,b)(y-b)^2]$$

for $(x,y)$ sufficiently close to $(a,b)$. The sign of the expression on the right will determine the sign of $f(x,y)-f(a,b)$, and hence whether $(a,b)$ is a local maximum, local minimum or saddle point.

The expression on the right is called a **quadratic form**, and at this state is is necessary to discuss some property of these objects.

### Quadratic Forms

#### Definition

A function $Q$ of the form

$$Q(u,v) = a_{11}u^2 + 2a_{12}uv + a_{22}v^2$$

where $a_{11}, a_{12}, a_{22}$ are constants, is called a **quadratic form** on $\mathbb R^2$.

It is important to observe that one can use matrix notation and write

$$Q(u,v) = \begin{bmatrix} u & v \end{bmatrix} \begin{bmatrix} a_{11} & a_{12} \\\ a_{12} & a_{22} \end{bmatrix} \begin{bmatrix} u \\\ v \end{bmatrix}$$

so that a quadratic form on $\mathbb R^2$ is determined by a $2 \times 2$ symmetric matrix.

We classify quadratic forms on $\mathbb R^2$ in the following way:

1.	If $Q(u,v) > 0$ for all $(u,v) \neq (0,0)$, then $Q(u,v)$ is said to be **positive definite**.
2.	If $Q(u,v) < 0$ for all $(u,v) \neq (0,0)$, then $Q(u,v)$ is said to be **negative definite**.
3.	If $Q(u,v) < 0$ for some $(u,v)$ and $Q(u,v) > 0$ for some other $(u,v)$, then $Q(u,v)$ is said to be **indefinite**.
4.	If $Q(u,v)$ does not satisfy any of 1-3, then $Q(u,v)$ is said to be **semidefinite**.

These terms are also used to describe the corresponding symmetric matrices.

#### Remark

Semidefinite quadratic forms may be split into two classes, positive semidefinite and negative semidefinite.

If $A$ is not a diagonal matrix, the nature of $A$ (or of $Q(u,v)$) is not immediately obvious. For example, even if all entries of $A$ are positive, it does not follow that $A$ is a positive definite matrix.

Having introduced quadratic forms, we return to the equation. Let

$$u =x-a \quad v = y-b$$

so that

$$f(x,y)-f(a,b) \approx \frac 12 [f_{xx}(a,b)u^2 + 2f_{xy}(a,b)uv +f_{yy}(a,b)v^2]$$

The matrix of the quadratic form on the right is the Hessian matrix of $f$ at $(a,b)$:

$$Hf(a,b) = \begin{bmatrix} f_{xx}(a,b) & f_{xy}(a,b) \\\ f_{xy}(a,b) & f_{yy}(a,b) \end{bmatrix}$$

It is thus plausible that if $Hf(a,b)$ is positive definite, then

$$f(x,y)-f(a,b) > 0 $$

for all $(u,v) \neq (0,0).$ i.e. for all $(a,b) \neq (a,b)$ (assuming, of course, that $(x,y)$ is sufficiently close to $(a,b)$ so that the approximation is sufficiently accurate). In other words, if $Hf(a,b)$ is positive definite, it is plausible that $(a,b)$ is a local minimum point of $f$. One can give similar arguments in the cases where $Hf(a,b)$ is negative definite or indefinite, leading to the following theorem.

#### Theorem 1 Second Partial Derivative Test

Suppose that $f(x,y) \in C^2$ in some neighborhood of $(a,b)$ and that $f_x(a,b)=0=f_y(a,b)$.

1.	If $Hf(a,b)$ is positive definite, then $(a,b)$ is a local minimum point of $f$.
2.	If $Hf(a,b)$ is negative definite, then $(a,b)$ is a local maximum point of $f$.
3.	If $Hf(a,b)$ is indefinite, then $(a,b)$ is a saddle point point of $f$.

#### Remark

1.	The argument preceding the theorem is not a proof, since it involves an approximation. One can use Taylor's formula and a continuity argument to give. See Section 9.3.
2.	Note the analogy with the second derivative test for functions of one variable. The requirement $g''(a) > 0$, which implies a local minimum, is replaced by the requirement that the matrix of second partial derivatives $Hf(a,b)$ be positive definite.

To help us classify the Hessian matrix we can use the following theorem from the theory of quadratic forms.

#### Theorem 2

If $Q(u,v) = a_{11}u^2 + 2a_{12}uv + a_{22}v^2$ and $D =a_{11}a_{22}-a_{12}^2$ then

1.	$Q$ is positive definite if and only if $D>0$ and $a_{11} > 0$.
2.	$Q$ is negative definite if and only if $D>0$ and $a_{11} < 0$.
3.	$Q$ is indefinite if and only if $D < 0$.
4.	$Q$ is semidefinite if and only if $D=0$.

#### Remark

Observe that $D$ is the determinant of the associated symmetric matrix.

### Degenerate Critical Points

We have seen that quadratic forms (i.e. symmetric matrices) can be classified into four types: positive definite, negative definite, indefinite and semidefinite. Note that the second partial derivative test gives a conclusion in the first three cases but makes no reference to the semidefinite case. In fact, if $Hf(a,b)$ is semidefinite, the critical point $(a,b)$ may be a local maximum point, a local minimum point or a saddle point. We justify this statement by considering the functions

$$f(x,y) = x^4 + y^4 \quad g(x,y) = x^4 - y^4 \quad h(x,y) = -x^4-y^4 $$

For each function $(0,0)$ is the only critical point, and the Hessian matrix at $(0,0)$ is the zero matrix, which is semidefinite. However, since

$$\begin{align\*}
f(x,y)-f(0,0) \geq 0 & \quad \text{for all } (x,y) \\\
g(x,0)-g(0,0) \geq 0 & \quad \text{for all } x \\\
g(0,y)-g(0,0) \leq 0 & \quad \text{for all } y \\\
h(x,y)-h(0,0) \leq 0 & \quad \text{for all } (x,y) \end{align\*}$$

it follows that $(0,0)$ is a local minimum point for $f$, a saddle point for $g$ and a local maximum point for $h$.

If $Hf(a,b)$ is semidefinite, so that the second partial derivative test gives no conclusion, we say that the critical point $(a,b)$ is **degenerate**. In order to classify the critical point, one has to investigate the sign of $f(x,y)-f(a,b)$ in a small neighborhood of $(a,b)$.

### Generalizations

The definitions of local maximum point, local minimum point and critical point can be generalized in the obvious way to function $f$ of $n$ variables.

The Hessian matrix of $f$ at $a$ is the $n \times n$ symmetric matrix given by

$$Hf(a) = \left[ \frac{\partial^2 f}{\partial x_i \partial y_j}(a) \right]$$

where $ii,j = 1,2,...,n$. The Hessian matrix can be classified as positive definite, negative definite, indefinite or semidefinite by considering the associated quadratic form in $\mathbb R^n$

$$Q(u) = \sum_{i,j=1}^n \frac{\partial^2 f}{\partial x_i \partial y_j}(a,b)u_iu_j$$

as in $\mathbb R^2$. The second derivative test as stated in $\mathbb R^2$ now holds in $\mathbb R^n$. It can be justified heuristically by using the second degree Taylor polynomial approximation,

$$f(x) = P_{2,a}(x)$$

which leads to

$$f(x)-f(a) = \frac{1}{2!}\sum_{i,j=1}^n \frac{\partial^2 f}{\partial x_i \partial y_j}(a,b)(x_i-a_i)(x_j-a_j)$$

generalizing equation.

For $n=2$, we have seen that one can classify $Hf(a,b)$ by using the determinant. This can be extended to the general case.

### Level Curves Near a Critical Point

Consider a function $f \in C^2$. In Section 7.2 we discussed the fact that if $\nabla f(a,b) \neq (0,0)$, then the level curve of $f$ through $(a,b)$ is a smooth curve (at least sufficiently close to $(a,b)$). Also by continuity, $\nabla f(x,y) \neq(0,0)$ for all $(x,y)$ in some neighborhood of $(a,b)$. Thus, if $\nabla f(a,b) \neq (0,0)$, there will be some neighborhood of $(a,b)$ in which the level curves of $f$ are smooth non-intersecting curves.

A point at which $\nabla f(a,b) \neq (0,0)$ is called a **regular point** of $f$.

Assume that $f$ has continuous second partial derivatives, and approximate $f$ by its Taylor polynomial $P_{2,(a,b)}(x,y)$, calculated at the critical point:

$$f(x,y)\approx f(a,b)+\frac 12 [f_{xx}(a,b)(x-a)^2+2f_{xy}(a,b)(x-a)(y-b)+f_{yy}(a,b)(y-b)^2]$$

The constant term $f(a,b)$ and the factor $\frac 12$ in the equation do not make a significant difference to the shape of the level curves. So, it is plausible (and can be proven) that the level curves of $f$ will be approximated by the the level curves of $P_{2,(a,b)}(x,y)$ for $(x,y)$ sufficiently close to $(a,b)$.

Performing the translation $u = x-a$ and $v = y-b$, we get a quadratic form

$$Q(u,v) = a_{11} u^2 + 2a_{12}uv + a_{22}v^2$$

Therefore, to approximate the level curves of $f$ near a critical point, we can sketch the level curves of the associated quadratic form $Q(u,v)$.

### Convex Functions

### 1-D Case

We say that a twice differentiable function $f(x)$ is **strictly convex** if $f''(x)>0$ for all $x$ and $f$ is **convex** if $f''(x) \geq 0$ for all $x$. Thus the term convex means "concave up." Convex functions have two interesting properties.

#### Theorem 3

If $f(x)$ is twice continuously differentiable and strictly convex, then

1.	$f(x) > L_a(x) = f(a) +f'(x)(x-a)$ for all $x\neq a$, for any $a\in\mathbb R$.
2.	For $a<b$, $f(x)<f(a)+\frac{f(b)-f(a)}{b-a}(x-a)$ for $x\in (a,b)$

>#### Proof
(1) Follows from Taylor's Theorem: $f(x) = L_a(x) + \frac{f''(c)}{2}(x-a)^2$ where $c$ is between $a$ and $x$. Thus $R_{1,a}(x)>0$ for $x\neq a$, giving $f(x) > L_a(x)$ for all $x\neq a$.
(2) Let $g(x)=f(x)-\left[ f(a)+\frac{f(b)-f(a)}{b-a}(x-a) \right]$, Then $g(a) =g(b)=0$ and $g''(x)=f''(x)>0$. We must show that $g(x)>0$ for $x \in (a,b)$. By the Mean Value Theorem $\frac{f(b)-f(a)}{b-a}=f'(c)$ for some $c\in (a,b)$. Note that $g'(x) = f'(x)-\frac{f(b)-f(a)}{b-a} = f'(x)-f'(c)$. Thus $g'(c)-0$. Since $g''(x)>0$ then $g'(0)$ is strictly increasing. Since $g'(c)=0$ then $g'(x)<0$ on $[a,c)$ and $g'(x)>0$ on $(c,d]$. This implies that $g(x)$ is strictly decreasing on $[a,c]$ and strictly increasing on $[c,b]$. Since $g(a)=0$ then $g(x)<0$ on $(a,c]$ and on $[c,b)$. Therefore $g(x)<0$ on $(a,b)$, as required.
$\square$

#### Remark

(1) says that the graph of $f$ lies above any tangent line, and (2) says that any secant line lies above the graph of $f$.

### 2-D Case

Suppose $f(x,y)$ has continuous second partial derivatives. We say that $f$ is **strictly convex** if $Hf(x,y)$ is positive definite for all $(x,y)$. By Theorem 2, $f$ is strictly convex means $f_{xx}>0$ and $f_{xx}f_{yy}-f_{xy}^2 >0$ for all $(x,y)$. We get a result which is analogous to Theorem 3.

#### Theorem 4

If $f(x,y)$ has continuous second partial derivatives and is strictly convex, then

1.	$f(x,y)>L_{(a,b)}(x,y)$ for all $(x,y)\neq (a,b)$, and
2.	$f(a_1 + t(b_1-a_1), a_2 + t(b_2-a_2)) < f(a_1,a_2) + t[f(b_1,b_2)-f(a_1,a_2)]$ for $0<t<1$, $(a_1,a_2) \neq (b_1,b_2)$.

(proof omitted, see book page 104)

#### Remark

(1) says that the graph of $f$ lies above the tangent plane and (2) says that the cross-section of the graph of $f$ above the line segment from $(a_1,a_2)$ to $(b_1,b_2)$ lies below the secant line.

#### Theorem 5

If $f(x,y)\in C^2$ is strictly convex and has a critical point $(c,d)$, then $f(x,y) > f(c,d)$ for all $(x,y) \neq (c,d)$ and $f$ has no other critical point.

>#### Proof
Note that $L_{(c,d)}(x,y)=f(c,d)$. Thus, $f(x,y)>f(c,d)$ for all $(x,y) \neq (c,d)$ by Theorem 4, part (1). If $f$ has a second critical point $(c_1,d_1)$, then by the reasoning just given $f(c_1,d_1)>f(c,d)$ and $f(c,d)>f(c_1,d_,1)$ which is a contradiction.
$\square$

## 9.3 Proof of the Second Partial Derivative Test

We now want to prove part(1) of the second derivative test. The proof depends significantly on the hypothesis that the second partials of $f$ are continuous, and on a plausible property of positive definite matrices: if you make a small change to the entries of a positive definite matrix the new matrix is positive definite. This is proved separately as a lemma.

#### Lemma 1

Let $\begin{bmatrix} a & b \\\ b & c \end{bmatrix}$ be a positive definite matrix. If $|\tilde a - a|$, $|\tilde b - b|$ and $|\tilde c - c|$ are sufficiently small, then $\begin{bmatrix} \tilde a & \tilde b \\\ \tilde b & \tilde c \end{bmatrix}$ is positive definite.

>#### Proof
Let $Q$ and $\tilde Q$ be the quadratic forms determined by the given matrices, i.e.
$$Q(u,v) = au^2 + 2buv +cu^2$$
and similarly for $\tilde Q (u,v)$, We perform the change of variables
$$u = r \cos \theta \quad v = r \sin \theta$$
to obtain
$$Q(u,v) = r^2 p(\theta)$$
where
$$p(\theta) = a \cos^2 \theta + 2b \cos \theta \sin \theta + c \sin^2 \theta$$
Since for $r=1$, $Q(u,v) = p(\theta)$, and $Q$ is positive definite, we must have $p(\theta) >0$ for all $\theta$, $0 \leq \theta \leq 2\pi$.
Let
$$k = \min_{0 \leq \theta \leq 2 \pi} p(\theta)$$
Then $k>0$ and by equation,
$$Q(u,v) \geq kr^2 \quad \text{for all } (u,v) \neq (0,0)$$
We are given that $|\tilde a - a|$, $|\tilde b-b|$ and $|\tilde c - c|$ are sufficiently small. Let
$$\delta = \min \\{|\tilde a - a|$, $|\tilde b-b|$, $|\tilde c - c| \\}$$
By equation and the triangle inequality
$$\begin{align\*} |Q(u,v)-\tilde Q(u,v)| &\leq |\tilde a - a|u^2 + 2|\tilde b - b||u||v| + |\tilde c-c|v^2 \\\
&\leq \delta(u^2 + 2|u||v||v^2) \\\
&= \delta(|u|+|v|)^2 \\\
&= \delta r^2 (|\cos \theta| + |\sin \theta|)^2 \\\
&< 4 \delta r^2 \end{align\*}$$
We now choose $\delta = \frac 18 k$. Then
$$|Q(u,v)-\tilde Q(u,v)| < \frac 12 kr^2$$
which implies
$$\begin{align\*} \tilde Q(u,v) &\geq Q(u,v) - \frac 12 kr^2 \\\
&\geq kr^2 - \frac 12 kr^2 \\\
&= \frac 12 kr^2\end{align\*}$$
This allows that $\tilde Q(u,v)>0$ for all $(u,v) \neq (0,0)$. Therefore, $\tilde Q(u,v)$ is positive definite.
$\square$

#### Remark

The lemma is also true if "positive definite" is replaced by "negative definite" or "indefinite".

(The rest of Section 9.3 is omitted, see book page 105 to 107)