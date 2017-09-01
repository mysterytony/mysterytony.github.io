# Chapter 4: The Linear Approximation

## 4.1 Partial Derivatives

A scalar function $f(x,y)$ can be differentiated in two natural ways

1.	Treat $y$ as a constant and differentiate with respect to $x$ to obtain $\frac{\partial f}{\partial x}$.
2.	Treat $x$ as a constant and differentiate with respect to $y$ to obtain $\frac{\partial f}{\partial y}$.

The derivatives $\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$ are called the (first) **partial derivatives** of $f$.

#### Definition

The **partial derivatives** $\frac{\partial f}{\partial x}$ and $\frac{\partial f}{\partial y}$ of $f(x,y)$ are defined by

$$\frac{\partial f}{\partial x}(x,y)=\lim_{h\rightarrow 0}\frac{f(x+h,y)-f(x,y)}{h}$$

$$\frac{\partial f}{\partial y}(x,y)=\lim_{h\rightarrow 0}\frac{f(x,y+h)-f(x,y)}{h}$$

Typically one tries to calculate the partial derivatives by using the standard rules for differentiation of functions of one variable. However, if these cannot be applied, then the definition of the partial derivatives must be used.

#### Remark

The partial derivatives of $f(x,y)$ are also denoted by $f_x$ and $f_y$, i.e.

$$\frac{\partial f}{\partial x}=f_x \quad \frac{\partial f}{\partial y}=f_y$$

This is called the **subscript notation**. It is sometimes convenient to use the **operator notation** $D_1f$ and $D_2f$ for the partial derivatives of $f(x,y)$. The notation $D_1f$ means: differentiate $f$ with respect to the variable in the first position, holding the other fixed. In the independent variables are $x$ and $y$, then

$$D_1f=\frac{\partial f}{\partial x} \quad D_2f=\frac{\partial f}{\partial y}$$

#### Generalization

We can extend what we have done for scalar functions of two variables to scalar functions of $n$ variables $f(\mathbf{x}), \mathbf{x}\in\mathbb{R}^n$. To take the partial derivative of $f$ with respect to its $i$-th variable, we hold all the other variables constant and differentiate with respect to the $i$-th variable.

## 4.2 Higher-Order Partial Derivatives

#### Second Partial Derivatives

Observe that the partial derivatives of a scalar function of two variables are both scalar functions of two variables. Therefore, we can take the partial derivatives of the partial derivatives of any scalar function.

In how many ways can one calculate a second partial derivative of $f(x,y)$? Since both the partial derivatives of $f$ have two partial derivatives, there are four possible second partial derivatives of $f$. There are: 

$\frac{\partial^2 f}{\partial x^2}=\frac{\partial}{\partial x}\left(\frac{\partial f}{\partial x}\right)$, i.e. differentiate $\frac{\partial f}{\partial x}$ with respect to $x$, with $y$ fixed. 

$\frac{\partial^2 f}{\partial y \partial x}=\frac{\partial}{\partial y}\left(\frac{\partial f}{\partial x}\right)$, i.e. differentiate $\frac{\partial f}{\partial x}$ with respect to $y$, with $x$ fixed.

Similarly,

$$\frac{\partial^2 f}{\partial x \partial y}=\frac{\partial}{\partial x}\left(\frac{\partial f}{\partial y}\right), \quad \frac{\partial^2 f}{\partial y^2}=\frac{\partial}{\partial y}\left(\frac{\partial f}{\partial y}\right)$$

It is often convenient to use the subscript notation or the operator notation:

$$\frac{\partial^2 f}{\partial x^2}=f_{xx}=D_1^2f, \quad \frac{\partial^2 f}{\partial y \partial x}=f_{xy}=D_2D_1f$$

$$\frac{\partial^2 f}{\partial x \partial y}=f_{yx}=D_1D_2f, \quad \frac{\partial^2 f}{\partial y^2}=f_{yy}=D_2^2f$$

The subscript notation suggests that one could write the second partial derivatives in a $2\times 2$ matrix.

#### Definition

The **Hessian matrix** of $f(x,y)$, denoted by $Hf(x,y)$, is defined as

$$Hf(x,y)=\begin{bmatrix} f_{xx}(x,y) & f_{xy}(x,y) \\\ f_{yx}(x,y) & f_{yy}(x,y) \end{bmatrix}$$

#### Theorem 1 (Clairaut's Theorem)

If $f_{xy}$ and $ff_{yx}$ are defined in some neighborhood of $(a,b)$ and are both continuous at $(a,b)$, then

$$f_{xy}(a,b)=f_{yx}(a,b)$$

#### Higher-Order Partial

Of course, we can take higher-order partial derivatives in the expected way. In particular, observe that $f(x,y)$ has eight third partial derivatives. They are

$$f_{xxx},f_{xxy},f_{xyx},f_{xyy},f_{yxx},f_{yxy},f_{yyx},f_{yyy}$$

Not surprisingly, Clairaut's Theorem extends to higher-order partial derivatives as well. That is, if they are defined in a neighborhood of a point $(a,b)$ and are continuous at $(a,b)$, then the higher-order partial derivatives are equal regardless of the order the partial derivate are taken. For example,

$$f_{xxy}(a,b)=f_{xyx}(a,b)=f_{yxx}(a,b)$$

For many situations, we will want to require that a function have continuous partial derivatives of some order. Thus, we introduce some notation for this.

#### Remark

If the $k$-th partial derivatives of $f(x_1,...,x_n)$ are continuous, then we write

$$f\in C^k$$

and say "$f$ is in class $C^k$."

So, $f(x,y)\in C^2$ means that $f$ has continuous second partial derivatives, and therefore, by Clairaut's Theorem, we have thay $f_{xy}=f_{yx}$.

## 4.2 The Tangent Plane

The surface of a sphere has a tangent plane at each point $P$, namely the plane through $P$ that is orthogonal to the line joining $P$ and the center $O$. The tangent plane at $P$ can be thought of as the plane which best approximates the surface of the sphere near $P$.

This concept can be generalized to a surface defined by an equation of the form

$$z=f(x,y)$$

Let $C_1$ be the cross section $y=b$ of the surface, that is, $C_1$ is given by

$$z=f(x,b)$$

It follows that $\frac{\partial f}{\partial x}(a,b)$ equals the slope of the tangent line $L_1$ of $C_1$ at the point $P(a,b,f(a,b))$. A similar interpretation holds for $\frac{\partial f}{\partial y}(a,b)$ in terms of the cross section $z=f(a,y)$.

We provisionally define the tangent plane to the surface $z=f(x,y)$ at the point $P(a,b,f(a,b))$ to the plane which contains the tangent lines $L_1$ and $L_2$.

In order to derive the equation of the tangent plane, we note that any (non-vertical) plane through the point $P(a,b,f(a,b))$ has an equation of the form

$$z=f(a,b)+m(x-a)+n(y-b)$$

where $m$ and $n$ are constants. The intercept of this plane with the vertical plane $y=b$ is the line

$$z=f(a,b)+m(x-a)$$

We require this line to coincide with $L_1$. Thus the slope $m$ of the line must equal the slope $\frac{\partial f}{\partial x}(a,b)$ of the line $L_1$:

$$m=\frac{\partial f}{\partial x}(a,b)$$

A similar argument yields

$$n=\frac{\partial f}{\partial y}(a,b)$$

#### Definition

The **tangent plane** to $z=f(x,y)$ at the point $(a,b,f(a,b))$ is

$$z=f(a,b)+\frac{\partial f}{\partial x}(a,b)(x-a)+\frac{\partial f}{\partial y}(a,b)(y-b)$$

## 4.4 Linear Approximation for $z=f(x,y)$

#### Review of the 1-D case

For a function $f(x)$ the tangent line can be used to approximate the graph of the function near the point of tangency. Recall that the equation of the tangent line to $y=f(x)$ at the point $(a,f(a))$ is

$$y=f(a)+f'(a)(x-a)$$

The function $L_a$ defined by

$$L_a(x)=f(a)+f'(a)(x-a)$$

is called the **linearization** of $f$ at $a$ since $L_a(x)$ approximates $f(x)$ for $x$ sufficiently close to $a$.

For $x$ sufficiently close to $a$, the approximation

$$f(x)\approx L_a(x)$$

is called the **linear approximation** of $f$ at $a$.

#### 2-D case

For a function $f(x,y)$, the tangent plane can be used to approximate the surface $z=f(x,y)$ near the point of tangency.

#### Definition

For a function $f(x,y)$ we define the **linearization** $L_{(a,b)}(x,y)$ of $f$ at $(a,b)$ by

$$L_{(a,b)}(x,y)=f(a,b)+\frac{\partial f}{\partial x}(a,b)(x-a)+\frac{\partial f}{\partial y}(a,b)(y-b)$$

We call the approximation

$$f(x,y)\approx L_{(a,b)}(x,y)$$

the **linear approximation** of $f(x,y)$ at $(a,b)$.

#### Increment Form of the Linear Approximation

Suppose that we know $f(a,b)$ and want to calculate $f(x,y)$ at a nearby point. Let

$$\Delta x=x-a, \quad \Delta y=y-b$$

and

$$\Delta f=f(x,y)-f(a,b)$$

The linear approximation is

$$f(x,y)=\approx f(a,b)+\frac{\partial f}{\partial x}(a,b)(x-a)+\frac{\partial f}{\partial y}(a,b)(y-b)$$

This can be rearranged to yield

$$\Delta f\approx \frac{\partial f}{\partial x}(a,b)\Delta x+\frac{\partial f}{\partial y}(a,b)\Delta y$$

This gives an approximation for the change $\Delta f$ in $f(x,y)$ due to a change $(\Delta x,\Delta y)$ away from the point $(a,b)$.

## 4.5 Linear Approximation in Higher Dimensions

#### Linear Approximation in $\mathbb{R}^3$

Consider a function $f(x,y,z)$. By analogy withe case of a function of two variables, we define the linearization of $f$ at $\mathbf{a}=(a,b,c)$ by

$$L_a(x,y,z)=f(\mathbf{a})+f_x(\mathbf{a})(x-a)+f_y(\mathbf{a})(y-b)+f_z(\mathbf{a})(z-c)$$

The notation is becoming cumbersome, but one can improve matters by noting that the final three terms can be represented by the dot product of the vectors

$$(x,y,z)-(a,b,c)=(x-a,y-b,z-c), \quad \text{and} \quad (f_x(\mathbf{a}),f_y(\mathbf{a}),f_z(\mathbf{a}))$$

The second vector is called the **gradient** of $f$ at $\mathbf{a}$, denoted $\nabla f(\mathbf{a})$.

#### Definition

Suppose that $f(x,y,z)$ has partial derivatives at $\mathbf{a}\in\mathbb{R}^3$. The **gradient** of $f$ at $\mathbf{a}$ is is defined by

$$\nabla f(\mathbf{a})=\left(f_x(\mathbf{a}),f_y(\mathbf{a}),f_z(\mathbf{a})\right)$$

#### Definition

Suppose that $f(\mathbf{x}),x\in\mathbb{R}^3$ has partial derivatives at $\mathbf{a}$. The **linearization** of $f$ at $\mathbf{a}$ is defined by

$$L_a(\mathbf{x})=f(\mathbf{a})+\nabla f(\mathbf{a})\cdot (\mathbf{x}-\mathbf{a})$$

The **linear approximation** of $f$ at $\mathbf{a}$ is

$$f(\mathbf{x})\approx f(\mathbf{a})+\nabla f(\mathbf{a})\cdot (\mathbf{x}-\mathbf{a})$$