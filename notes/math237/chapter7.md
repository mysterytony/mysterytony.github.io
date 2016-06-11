# Chapter 7: Directional Derivatives and the Gradient Vector

In this chapter we introduce the concept of the directional derivative of a function. This leads to a geometrical interpretation of the gradient vector.

## 7.1 Directional Derivatives

### Motivation

Let $z=f(x,y)$ represent the height of a mountain. The level curves $f(x,y)=C$ represent the contour lines. Suppose that a skier is at the point $P(a,b)$, in what direction should he move in order to lose height as rapidly as possible?

In order to answer such a question, we have to generalize the idea of the partial derivative. One can think of $\frac{\partial f}{\partial x}$ as the rate of change of $f(x,y)$ in the $x$-direction and $\frac{\partial f}{\partial y}$ as the rate of change of $f(x,y)$ in the $y$-direction. Our aim is to define a derivative which gives the rate of change of $f(x,y)$ in any specified direction.

We are given a function $f(x,y)$, a point $(a,b)$, and unit vector $\hat{u}=(u_1,u_2)$ (i.e. $||u||=1$). If $L$ is the line through $(a,b)$ in the direction $\hat{u}$, then $L$ has vector equation

$$(x,y)=(a,b)+s\hat{u}=(a+su_1,b+su_2), \text{ for } s\in \mathbb{R}$$

At points on the line $L$, $f(x,y)$ has value $f(a+su_1,b+su_2)$, and this defines a function of one variable $s$. Thus, the rate of change of $f$ at $(a,b)$ in the direction of $\hat{u}$ is just the derivative of this function with respect to $s$ evaluated at $s=0$. Hence, we make the following definition.

#### Definition

The **directional derivative** of $f(x,y)$ at a point $(a,b)$ in the direction of a unit vector $\hat{u}=(u_1,u_2)$ is defined by

$$D_{\hat{u}}f(a,b)=\frac{d}{ds}f(a+su_1,b+su_2)_{s=0}$$

#### Remark

Observe that this definition is assuming that $f(a+su_1,a+su_2)$ is differentiable at $s=0$. A more precise definition would be

$$D_{\hat{u}}f(a,b)=\lim_{s\rightarrow 0}\frac{f(a+su_1,b+su_2)-f(a,b)}{s}$$

provided the limit exists.

We now derive a simple formula for calculating the directional derivative in terms of the partial derivatives.

#### Theorem 1

If $f(x,y)$ is differentiable at $(a,b)$ and $\hat{u}$ is a unit vector, then

$$D_{\hat{u}}f(a,b)=\nabla f(a,b)\cdot \hat{u}$$

>#### Proof
Let $\hat{u}=(u_1,u_2)$. Since $f$ is differentiable at $(a,b)$ we can apply the chain rule to get
$$\begin{align\*} 
D_{ \hat{u} } f(a,b) &= \frac{d}{ds} f(a+su_1,b+su_2) \\\
&= \left[ D_1 f(a+su_1,b+su_2) \frac{d}{ds} (a+su_1) + D_2 f(a+su_1,b+su_2) \frac{d}{ds} (b+su_2) \right\] \\\
&= [ D_1 f(a+su_1,b+su_2) u_1 + D_2 f(a+su_1,b+su_2) u_2\] \\\
&= D_1 f(a,b) u_1 + D_2 f(a,b) u_2 \\\
&= \nabla f(a,b) \cdot (u_1,u_2)
\end{align\*}$$
$\square$

#### Remark

1.	Be careful to check the condition of the theorem before applying it. If $f$ is not differentiable at $(a,b)$, then we must apply the definition.
2.	If we choose $\hat{u}=\hat{i}=(1,0)$ or $\hat{u}=\hat{j}=(0,1)$, then the directional derivative is equal to the partial derivative $f_x$ or $f_y$ respectively.
3.	The definition of the directional derivative and the theorem can be extended to higher dimensions in the expected way.

#### Remark

When the directional derivative is applied, $(x,y)$ usually represents the position, and $f(x,y)$ represents the physical quantity, e.g. temperature or height above sea level. Because the parameter $s$ in the definition represents distance along the line $L$, the directional derivative represents a rate of change with respect to distance.

## 7.2 The Gradient Vector in Two Dimensions

### The Greatest Rate of Change

In general, for a function $f(x,y)$, the directional derivative $D_{\hat{u}}f(a,b)$ has infinitely many values corresponding to all possible directions $\hat{u}$ at $(a,b)$. It is natural to ask:

"In which direction $\hat{u}$ does $D_{\hat{u}}f(a,b)$ has its largest value?"

This is easily answered using Theorem 7.1.1 and the following property of the dot product:

$$\vec{u}\cdot \vec{v}= ||\vec{u}||||\vec{v}||\cos\theta$$

where $\theta$ is the angle between $\vec{u}$ and $\vec{v}$.

#### Theorem 1

If $f(x,y)$ is differentiable at $(a,b)$ and $\nabla f(a,b)\neq (0,0)$, then the largest value of $D_{\hat{u}}f(a,b)$ is $||\nabla f(a,b)||$, and occurs when $\hat{u}$ is in the direction of $\nabla f(a,b)$.

>#### Proof
Since $f$ is differentiable at $(a,b)$ and $||\hat{u}||=1$, we have
$$\begin{align\*} D_{\hat{u}}f(a,b) &= \nabla f(a,b)\cdot \hat{u} \\\
&= ||\nabla f(a,b)||||\hat{u}||\cos\theta \\\
&= ||\nabla f(a,b)||\cos\theta \end{align\*}$$
where $\theta$ is the angle between $\hat{u}$ and $\nabla f(a,b)$. Thus, $D_{\hat{u}}f(a,b)$ assumes its largest value when $\cos\theta=1$ i.e. $\theta=0$. Consequently, the largest value of $D_{\hat{u}}f(a,b)$ is $||\nabla f(a,b)||$ and occurs when $\hat{u}$ is in the direction of $\nabla f(a,b)$.
$\square$

#### Remark

Theorem 1 also applies in any dimension. That is, if $f(\mathbf{x}), \mathbf{x}\in\mathbb{R}^n$, is differentiable at $\mathbf{a}$ and $\hat{u}\in\mathbb{R}^n$ is a unit vector, then the largest value of $D_{\hat{u}}f(\mathbf{a})$ is $||\nabla f(\mathbf{a})||$, and it occurs when $\hat{u}$ is in the direction of $\nabla f(\mathbf{a})$.

### The Gradient and the Level Curves of $f$

People who have experience reading contour maps know that the direction of steepest ascent is orthogonal to the contour lines. In mathematical terms, this means the direction of greatest rate of change of $f$, which we have shown in the direction of the gradient of $f$, is orthogonal to the level curves of $f$.

We now derive this result analytically.

#### Theorem 2

If $f(x,y)\in C^1$ in a neighborhood of $(a,b)$ and $\nabla f(a,b)\neq (0,0)$, then $\nabla f(a,b)$ is orthogonal to the level curve $f(x,y)=k$ through $(a,b)$.

>#### Proof
Since $\nabla f(a,b)\neq (0,0)$, by the Implicit Function Theorem, the level curve $f(x,y)=k$ can be described by parametric equations $x=x(t)$, $y=y(t)$ for $t\in \mathbb{I}$ where $x(t)$ and $y(t)$ are differentiable. Hence, the level curve may be written as $f(x(t),y(t))=k,t\in\mathbb{I}$. Suppose
$$a=x(t_0),\quad b=y(t_0) \quad \text{for some } t_0\in\mathbb{I}$$
Since $f$ is differentiable, we can take the derivative of this equation with respect to $t$ using the chain rule to get
$$f_x(x(t),y(t))x'(t)+f_y(x(t),y(t))y'(t)=0$$
On setting $t=t_0$ we get
$$\nabla f(a,b) \cdot (x'(t_0),y'(t_0))=0$$
Thus, $\nabla f(a,b)$ is orthogonal to $(x'(t_0),y'(t_0))$ which is tangent to the level curve.
$\square$

### Gradient Vector Field

Given a function $f(x,y)$ that is differentiable at $(x,y)$, the gradient of $f$ at $(x,y)$ is defined by

$$\nabla f(x,y) = (f_x(x,y),f_y(x,y))$$

The gradient of $f$ associates a vector with each point of the domain of $f$, and is referred to as a **vector field**. It is represented graphically by drawing $\nabla f(a,b)$ as a vector emanating from the corresponding point $(a,b)$.

Theorem 1 and 2 show that the gradient vector field has important geometric properties:

1.	It gives the direction in which the function has its largest rate of change.
2.	It gives the direction that is orthogonal to the level curves of the function.

If the level curves are contour lines, then a curve such $C$ which intersects the level curves orthogonally, would define a curve of steepest ascent on the surface.

#### Remark

Vector field and gradient vector field will be studied in detail in Calculus 4 (AMath 231)

## 7.3 The Gradient Vector in Three Dimensions

One cannot visualize the graph $w=f(x,y,z)$ of a function $f(x,y,z)$, because four dimensions are required. One can again insight into such a function, however, by considering the level surfaces in $\mathbb{R}^3$ defined by

$$f(x,y,z)=k, \quad \text{where } k\in R(f)$$

#### Theorem 1

If $f(x,y,z)\in C^1$ in a neighborhood of $(a,b,c)$ and $\nabla f(a,b,c) \neq (0,0,0)$, then $\nabla f(a,b,c)$ is orthogonal to the level surface $f(x,y,z)=k$ through $(a,b,c)$