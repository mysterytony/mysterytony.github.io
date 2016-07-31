# Chapter 10 Optimization Problems

## 10.1 The Extreme Value Theorem

As we saw in Calculus 1, one is often interested in finding the largest or smallest possible value of a function $f$ on some specified set $S$. We start with some standard definitions.

#### Definition

Given a function $f(x,y)$ and a set $S \subset \mathbb R^2$

1.	A point $(a,b) \in S$ is an **absolute maximum point** of $f$ on $S$ if

$$f(x,y) \leq f(a,b) \quad \text{for all } (x,y) \in S$$

The value $f(a,b)$ is called the **absolute maximum value** of $f$ on $S$.

2.	A point $(a,b) \in S$ is an **absolute minimum value** of $f$ on $S$ if

$$f(x,y) \geq f(a,b) \quad \text{for all } (x,y) \in S$$

The value $f(a,b)$ is called the **absolute minimum value** of $f$ on $S$.

### The Extreme Value Theorem

Whether or not $f$ has a maximum/minimum value on $S$ depends on $f$ and on the set $S$. Recall from Calculus 1 that the Extreme Value Theorem gives conditions which imply the existence of a maximum value and minimum value of $f$ on an interval $I$. Here is the theorem.

#### Theorem 1 The Extreme Value Theorem

If $f(x)$ is continuous on a finite closed interval $I$, then there exists $c_1, c_2$ \in I$ such that

$$f(c_1) \leq f(x) \leq f(c_2) \quad \text{for all } x \in I$$

For our purpose, the important thing is to be able to give counterexamples to show that the conclusion may not be valid if the hypotheses are not satisfied.

In order to generalize this theorem to functions of two variables, we need to generalize the concept of a finite closed interval to set in $\mathbb R^2$.

#### Definition

A set $S \subset \mathbb R^2$ is said to be **bounded** if and only if it is contained in some neighborhood of the origin.

Observe that the definition implies that every point in $S$ must have finite distance from the origin.

Intuitively, a "boundary point" of a set $S \subset \mathbb R^2$ is a point which lies on the "edge" of $S$. Here is the definition.

#### Definition

Given a set $S \subset \mathbb R^2$, a point $(a,b) \in \mathbb R^2$ is said to be a **boundary point** of $S$ if and only if every neighborhood of $(a,b)$ contains at least one point in $S$ and one point not in $S$.

#### Definition

The set $B(S)$ of all boundary points of $S$ is called the **boundary** of $S$.

#### Definition

A set $S \subset \mathbb R^2$ is said to be **closed** if $S$ contains all of its boundary points.

Observe that the concept of a "closed set" in $\mathbb R^2$ generalizes the idea of a closed interval in $\mathbb R$.

We can now state the generalization of the Extreme Value Theorem to $\mathbb R^2$.

#### Theorem 2

If $f(x,y)$ is continuous on a closed and bounded set $S \subset \mathbb R^2$, then there exists points $(a,b), (c,d) \in S$ such that

$$f(a,b) \leq f(x,y) \leq f(c,d) \quad \text{for all } (x,y) \in S$$

#### Remark

A function $f(x,y)$ may have an absolute maximum and/or an absolute minimum on a set $S \subset \mathbb R^2$ even if the conditions are not satisfied. We just cannot guarantee the existence with the theorem.

## 10.2 Algorithm for Extreme Values

Recall that if $f(x)$ is continuous, then the maximum value and minimum value of $f$ on an interval $[a,b]$ occur either at a critical point of $f$ (i.e. $f'(c) = 0$, or $f'(c)$ does not exist) or at an endpoint of the interval. Moreover, our algorithm for finding the maximum and/or minimum value for $f$ on $[a,b]$ was to find the values of $f$ at any critical points of $f$ in $[a,b]$ and compare them to the values of $f$ at the endpoints $x=a$ and $x=b$.

This approach can be generalized to $f(x,y)$. Let $S \subset \mathbb R^2$ be a closed and bounded set, with boundary $B(S)$ and suppose that $f$ is continuous on $S$. The maximum value and minimum value of $f$ on $S$ occur either at a critical point of $f$ that is in $S$, or at a point on the boundary of $S$. Thus, we get the following procedure which corresponds to what we were doing for functions of one variable in Calculus 1.

#### Algorithm

Let $S \subset \mathbb R^2$ be closed an bounded. To find the maximum and/or minimum value of a function $f(x,y)$ that is continuous on $S$.

1.	Find all critical points of $f$ that are contained in $S$. Evaluate $f$ at each such point.
2.	Find the maximum and minimum points of $f$ on the boundary $B(S)$.
3.	The maximum value of $f$ on $S$ is the largest value of the function found in steps (1) and (2). The minimum value of $f$ on $S$ is the smallest value of the function found in steps (1) and (2).

#### Remark

1.	It is possible for the maximum and/or minimum to occur at more than one point in $S$.
2.	It is not necessary to determine whether the critical points are local maximum or minimum points.

## 10.3 Optimization with Constraints

To do step 2 of our algorithm for finding extreme values, we saw that we find the maximum and/or minimum of $f$ on the boundary by finding a parametric representation for the boundary. Of course, in many cases this may be extremely difficult to do. So we now derive another algorithm which will allow us to find the maximum and/or minimum of $f$ on a curve $g(x,y)=k$ without having to parameterize the curve.

### Method of Lagrange Multipliers

We want to find the maximum and/or minimum value of $f(x,y)$ subject to the constant $g(x,y)=k$, or more geometrically, find the maximum value of $f(x,y)$ on the curve $g(x,y)=k$.

If $f(x,y)$ has a local maximum (or minimum) at $(a,b)$ relative to nearby points on the curve $g(x,y) = k$ and $\nabla g(a,b) \neq (0,0)$, then by the Implicit Function Theorem, $g(x,y)=k$ can be described by parametric equations

$$x = p(t) \quad y = q(t)$$

with $p$ and $q$ differentiable, and $(a,b) = (p(t_0),q(t_0))$ for some $t_0$. Define

$$u(t) = f(p(t), q(t))$$

The function $u$ gives the values of $f$ on the constraint curve, and hence has a local maximum (or minimum) at $t_0$. It follows that

$$u'(t_0) = 0$$

Assuming $f$ is differentiable we can apply the Chain Rule to get

$$u'(t) = f_x(p(t),q(t))p'(t) +f_y(p(t),q(t))q'(t)$$

Evaluating this at $t_0$ and using the equation gives

$$0 = f_x(a,b)p'(t_0) + f_y(a,b)q'(t_0)$$

This can be written as

$$\nabla f(a,b) \cdot (p'(t_0),q'(t_0)) = 0$$

Recall the geometric interpretation of the gradient vector $\nabla g(a,b)$ proven in Theorem 7.2.2 that $\nabla g(a,b)$, if non-zero, is orthogonal to the level curve $g(x,y) =k$ at $(a,b)$. Thus, since $(p'(t_0), q'(t_0))$ is the tangent vector to the constraint curve we also have

$$\nabla g(a,b) \cdot (p'(t_0),q'(t_0)) = 0$$

Since we are working in two dimensions, equations imply that $\nabla f(a,b)$ and $\nabla g(a,b)$ have the same direction. In other words, there exists a constant $\lambda$ such that

$$\nabla f(a,b) = \lambda \nabla g(a,b)$$

To summarize, we have shown that:

If $f(x,y)$ has a local maximum or minimum at $(a,b)$ relative to points of the curve $g(x,y)=k$, then one of the following conditions holds:

1.	$\nabla f(a,b) = \lambda \nabla g(a,b) \quad \text{for some constant } \lambda$
2.	$\nabla g(a,b) = 0$
3.	$(a,b)$ is an end point of the curve $g(x,y) = k$

Case (2) and (3) are both exceptional. Observe that case (2) must be included since we assumed that $\nabla g(a,b) \neq (0,0)$ in the preceding derivation.

This leads to the following procedure, called the **Method of Lagrange Multiplier**.

#### Algorithm (Lagrange Multiplier Algorithm)

To find the maximum value and minimum value of a differentiable function $f(x,y)$ subject to the constraint $g(x,y)= k$, evaluate $f(x,y)$ at all points $(a,b)$ which satisfy one of the following conditions.

1.	$\nabla f(a,b) = \lambda \nabla g(a,b)$ and $g(a,b) =k$
2.	$\nabla g(a,b) = (0,0)$ and $g(a,b) = k$
3.	$(a,b)$ is an end point of the curve $g(x,y)=k$

The maximum/minimum value of $f(x,y)$ is the largest/smallest value of $f$ obtained at the points found in 1-3

To find the points $(a,b)$ in (1) we have to solve the system of 3 equations in 3 unknowns

$$\begin{align\*} 
f_x(x,y) &= \lambda g_x(x,y) \\\
f_y(x,y) &= \lambda g_y(x,y) \\\
g(x,y) &= k \end{align\*}$$

for $x$ and $y$. It is important that this does systematically so that you can ensure that you have found all possible points.

#### Remark

1.	The variable $\lambda$, called the **Lagrange multiplier**, is not required for our purpose and so should be eliminated. However, in some real world applications, the value of $\lambda$ can be extremely useful.
2.	In the curve $g(x,y)=k$ is unbounded, then one must consider $\lim_{||(x,y)||\rightarrow \infty} f(x,y)$ for $(x,y)$ satisfying $g(x,y)=k$.

### Functions of Three Variables

We can generalize the algorithm for $f(x,y)$ to work for functions of three variables $f(x,y,z)$.

#### Algorithm

To find the maximum/minimum value of $f(x,y,z)$ subject to $g(x,y,z)=k$, evaluate $f(x,y,z)$ at all points $(a,b,c)$ which satisfy one of the following:

1.	$\nabla f(a,b,c) = \lambda \nabla g(a,b,c)$ and $g(a,b,c)=k$
2.	$\nabla g(a,b,c) = (0,0,0)$ and $g(a,b,c) = k$
3.	$(a,b,c)$ is a boundary point of the surface $g(x,y,z)=k$

the maximum/minimum value of $f(x,y,z)$ is the largest/smallest value of $f$ obtained form all points found in 1-3.

#### Remark

If condition (1) in the algorithm holds, it follows that the level surface $f(x,y,z)=f(a,b,c)$ and the constraint surface $g(x,y,z)=k$ are tangent at the point $(a,b,c)$, since their normals coincide.

### Generalization

The method of Lagrange multipliers can be generalized to functions of $n$ variables $f(x), x\in \mathbb R^n$ and with $r$ constraints of the form

$$g_1(x)=0 \quad g_2(x)=0 \quad \cdots \quad g_r(x)=0$$

In order to find the possible maximum and minimum points of $f$ subject to the constraint, one has to find all points $a$ such that

$$\nabla f(a) = \lambda_1 \nabla g_1(a) + \cdots + \lambda_r \nabla g_r(a) \quad g_i(a) = 0 \quad 1 \leq i \leq r$$

The scalers $\lambda_1,...,\lambda_r$ are the Lagrange multipliers. When $r=1$, and $n=2$ or $3$ this reduces to the previous algorithms.