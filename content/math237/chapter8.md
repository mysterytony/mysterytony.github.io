# Chapter 8 Taylor Polynomials and Taylor's Theorem

For a function of one variable $f$, the second derivative $f''$ plays an important role in approximating $f(x)$. Geometrically, $f''$ determines whether the graph of $f$ is concave up or concave down. Thus, if the graph of $f$ is concave up near $x$ $(f''(x)>0)$, then the linear approximation formula gives a value for $f(x)$ which is too small. The second derivative can in fact be used to estimate the error through Taylor's formula. In addition, $f''$ can be used to increase the accuracy of the linear approximation by defining a quadratic approximation, the second degree Taylor polynomial.

In this chapter, we extend these ideas to functions of two variables.

## 8.1 The Taylor Polynomial of Degree 2

### Review of the 1-D case

For a function of one variable, $f(x)$, the Taylor polynomial of degree 2 at $a$ is denoted by $P_{2,a}(x)$, and is defined by

$$P_{2,a}(x) = f(a) + f'(a)(x-a) + \frac 12 f'' (a)(x-a)^2$$

Observe that $P_{2,a}(x)$ is the sum of the linear approximation $L_a(x)$ and a term which is of second degree in $(x-a)$. The coefficient of this term is determined by requiring that the second derivative of $P_{2,a}(x)$ equals the second derivative of $f$ at $a$:

$$P_{2,a}'' (a) = f''(a)$$

### The 2-D case

Suppose that $f(x,y)$ has continuous second partials at $(a,b)$. The Taylor polynomial of $f$ of degree 2 at $(a,b)$ is denoted $P_{2,(a,b)}(x,y)$ and is obtained by adding appropriate 2nd degree terms in $(x-a)$ and $(y-b)$ to the linear approximation $L_{(a,b)}(x,y)$. Consider

$$P_{2,(a,b)}(x,y)=L_{(a,b)}(x,y)+A(x-a)^2+B(x-a)(y-b)+C(y-b)^2$$

where $A,B,C$ are constants. Using it we can find that the second partial derivative of $P_{2,(a,b)}(x,y)$ is

$$\frac{\partial^2 P_{2,(a,b)}}{\partial x^2} = 2A$$

since $L_{(a,b)}(x,y)$ does not contribute to the second derivatives as it is of first degree in $x$ and $y$.

Similarly, finding the other second partial derivatives of $P_{2,(a,b)}(x,y)$ gives

$$\frac{\partial^2 P_{2,(a,b)}}{\partial x \partial y} = B$$

$$\frac{\partial^2 P_{2,(a,b)}}{\partial y^2} = 2C$$

Requiring that the second partial derivatives of $P_{2,(a,b)}$ equal the second partial derivatives of $f$ at $(a,b)$ leads to

$$2A = \frac{\partial^2 f}{\partial x^2}(a,b) \quad B=\frac{\partial^2 f}{\partial x \partial y}(a,b) \quad 2C=\frac{\partial^2 f}{\partial y^2}(a,b)$$

We then substitute these into the equation and write out the expression for $L_{(a,b)}(x,y)$, to obtain the required formula.

#### Definition

The **second degree Taylor polynomial** $P_{2,(a,b)}$ of $f(x,y)$ at $(a,b)$ is given by

$$P_{2,(a,b)}(x,y)=f(a,b)+f_x(a,b)(x-a)+f_y(a,b)(y-b)+\frac 12[f_{xx}(a,b)(x-a)^2+2f_{xy}(a,b)(x-a)(y-b)+f_{yy}(a,b)(y-b)^2]$$

In general, it approximates $f(x,y)$ for $(x,y)$ sufficiently close to $(a,b)$:

$$f(x,y) \sim P_{2,(a,b)}(x,y)$$

with better accuracy than the linear approximation.

We now ask: how large is the error if we use the approximation

$$f(x,y) \approx P_{2,(a,b)}(x,y)$$

To answer this question, we need to extend Taylor's Theorem to function of two variables $f(x,y)$.

## 8.2 Taylor's Formula with Second Degree Reminder

### Review of a 1-D case

#### Theorem 1

If $f''(x)$ exists on $[a,x]$, then there exists a number $c$ between $a$ and $x$ such that

$$f(x)=f(a)+f'(a)(x-a)+R_{1,a}(x)$$

where

$$R_{1,a}(x) = \frac 12 f''(c) (x-a)^2$$

On recalling that

$$L_a(x) = f(a) + f'(a)(x-a)$$

we see that the term $R_{1,a}(x)$ represents the error in using the linear approximation. Keep in mind that you can't evaluate this expression, because you don't know the value of $c$. We only know that $c$ lies between $a$ and $x$. However this formula is useful, because it gives a way of finding an upper bound for the error.

If $f$ has a continuous second derivative on an interval $[a - \delta,a + \delta]$ centered on $a$, then $f''$ is bounded on this interval. That is, there exists a number $B$ such that

$$|f''(x)|\leq B \quad \text{for all } x \in [a-\delta, a+\delta]$$

By equations

$$\begin{align\*} |f(x)-L_a(x)| &= |R_{1,a}(x)| \\\
&= | \frac 12 f''(c)(x-a)^2| \\\
&= \frac 12 |f''(c)| (x-a)^2 \\\
&\leq \frac 12 B (x-a)^2 \end{align\*}$$

for all $x\in [a-\delta, a+ \delta]$. Knowing $f''(x)$, you can find a value for $B$.

### The 2-D Case

In order to generalize Taylor's formula to the case of $f(x,y)$, observe that $R_{1,a}(x)$ in the equation has the same form as the second derivative term in $P_{2,a}(x)$, except that $f''$ is evaluated at $c$ instead of at $a$. Knowing the term of $P_{2,(a,b)}(x,y)$ leads to Taylor's Theorem.

#### Theorem 2 (Taylor's Theorem)

If $f(x,y)\in C^2$ in some neighborhood $N(a,b)$ of $(a,b)$ then for all $(x,y) \in N(a,b)$, there exists a point $(c,d)$ on the line segment joining $(a,b)$ and $(x,y)$ such that

$$f(x,y)=f(a,b)+f_x(a,b)(x-a)+f_y(a,b)(y-b)+R_{1,(a,b)}(x,y)$$

where

$$R_{1,(a,b)}(x,y)=\frac{1}{2!}(f_{xx}(c,d)(x-a)^2+2f_{xy}(c,d)(x-a)(y-b)+f_{yy}(c,d)(y-b)^2)$$

>#### Proof
The idea is to reduce the given function $f$ of two variables to a function $g$ of one variable, by considering only points on the line segment joining $(a,b)$ and $(x,y)$
We parameterize the line segment $L$ from $(a,b)$ to $(x,y)$ by
$$L(t) = (a + t(x-a), b + t(y-b)) \quad 0 \leq t \leq 1$$
For simplicity write $h=x-a$ and $k-y-b$. Then $x-a = h$, $y-b = k$, and Taylor's formula assumes the form
$$f(x,y) = f(a,b)+f_x(a,b)h + f_y(a,b)k + R_{1,(a,b)}(x,y)$$
where
$$R_{1,(a,b)}(x,y) = \frac{1}{2!} (f_{xx}(c,d)h^2 + 2f_{xy}(c,d)hk + f_{yy}(c,d)k^2)$$
Define $g$ by
$$g(t) = f(L(t)) \quad 0 \leq t \leq 1$$
Since $f$ has continuous second partials by hypothesis, we can apply the Chain Rule to conclude that $g'$ and $g''$ are continuous and are given by
$$g'(t) = f_x(L(t))h + f_y(L(t))k$$
$$g''(t) = f_{xx}(L(t))h^2 + 2f_{xy}(L(t))hk + f_{yy}(L(t))k^2 \quad 0 \leq t \leq 1$$
Since $g''$ is continuous on the interval $[0,1]$, Taylor's formula may be applied to $g$ on this interval. That is, we can set $x=1$ and $a=0$ in equation. It follows that there exists a number $c$, with $0 < c < 1$, such that
$$g(1) = g(0) + g'(0) + \frac 12 g''(c)$$
Each term in this equation can be calculated using the above equations, giving
$$g(1) =f((a,b) + [(x,y)-(a,b)]) = f(x,y)$$
$$g(0) = f(a,b)$$
$$g'(0) = f_x(a,b)h + f_y(a,b)k$$
In addition, if we let $(c,d) = L(c)$ then
$$\frac 12 g''(c) = R_{1,(a,b)}(x,y)$$
and it becomes precisely the modified version of Taylor's formula

#### Remark

Let the one variable case, Taylor's Theorem for $f(x,y)$ is an existence theorem. That is, it only tells us that the point $(c,d)$ exists, but not how to find it.

#### Remark

The most important thing about the error term $R_{1,(a,b)}(x,y)$ is not its explicit form, but rather its dependence on the magnitude of the displacement $||(x,y)-(a,b)||$. We state the result as a Corollary.

#### Corollary 3

If $f(x,y) \in C^2$ in some closed neighborhood

$$N_\delta (a,b) = \\{ (x,y) \in \mathbb R^2 : ||(x,y)-(a,b)|| \leq \delta \\}$$

then there exists a positive constant $M$ such that

$$|R_{1,(a,b)}(x,y)| \leq M ||(x,y)-(a,b)||^2 \quad \text{for all } (x,y) \in N_\delta (a,b)$$

## 8.3 Generalizations

In order to define the Taylor polynomial $P_{k,(a,b)}(x,y)$ of degree $k$, in a concise manner, we introduce the differential operator

$$(x-a)D_1 + (y-b)D_2$$

where $D_1 = \frac{\partial}{\partial x}$ and  $D_2 = \frac{\partial}{\partial y}$ are the partial differential operators. Then we formally write

$$[(x-a)D_1 + (y-b)D_2]^2 = (x-a)^2D_1^2 + 2(x-a)(y-b)D_1D_2 +(y-b)^2D_2^2$$

Note that $D_1^2 = D_1D_1$. This means apply $D_1$ twice, i.e. take the second partial derivative with respect to the first variable.

In terms of this notation, the first degree Taylor polynomial $P_{1,(a,b)}(x,y)$ (which is the linear approximation $L_{(a,b)}(x,y)$) is written as

$$P_{1,(a,b)}(x,y) =f(a,b) + [(x-a)D_1 + (y-b)D_2] f(a,b)$$

and the second degree Taylor polynomial is written as

$$P_{2,(a,b)}(x,y) = P_{1,(a,b)} + \frac{1}{2!} [(x-a)D_1 + (y-b)D_2]^2f(a,b)$$

For $k=2,3,...$ we recursively define the $k$th degree Taylor polynomial by

$$P_{k,(a,b)}(x,y)=P_{k-1,(a,b)}(x,y) + \frac{1}{k!} [(x-a)D_1 + (y-b)D_2]^kf(a,b)$$

The expression $[(x-a)D_1 + (y-b)D_2]^k$ is expanded using the Binomial Theorem.

We now see that all of the results we had generalize in the expected way for all values of $k$.

#### Theorem 1 Taylor's Theorem of order $k$

If $f(x,y) \in C^{k+1}$ at each point on the line segment joining $(a,b)$ and $(x,y)$, then there exists a point $(c,d)$ on the line segment between $(a,b)$ and $(x,y)$ such that

$$f(x,y) = P_{k,(a,b)}(x,y) + R_{k,(a,b)}(x,y)$$

where

$$R_{k,(a,b)} = \frac{1}{(k+1)!} [(x-a)D_1+(y-b)D_2]^{k+1}f(c,d)$$

#### Corollary 2

If $f(x,y) \in C^k$ in some neighborhood of $(a,b)$, then

$$\lim_{(x,y) \rightarrow (a,b)} \frac{|f(x,y) - P_{k,(a,b)}(x,y)|}{||(x,y)-(a,b)||^k} = 0$$

#### Corollary 3

If $f(x,y) \in C^{k+1}$ in some closed neighborhood $N(a,b)$ of $(a,b)$, then there exists a constant $M > 0$ such that

$$|f(x,y) - P_{k,(a,b)}(x,y)| \leq M ||(x,y)-(a,b)||^{k+1}$$ 

for all $(x,y )\in N(a,b)$

The final state in the process of generalization is to consider functions of $n$ variables $f(x), x \in \mathbb R^n$. One has simply to replace the differential operator

$$[(x-a)D_1, (y-b)D_2]$$

by

$$[(x_1-a_1)D_1+...+(x_n-a_n)D_n]$$

which can be written concisely in vector notation as

$$[(x-a)\cdot \nabla]$$

where $\nabla = (D_1,...,D_n)$.