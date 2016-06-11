# Chapter 6: The Chain Rule

## 6.1 Basic Chain Rule in Two Dimensions

### Review of the Chain Rule for $f(x(t))$

Let $T=f(x)$ be the temperature of a heated metal rod as a function of the position $x$. An ant runs on the rod, with its position given by $x=x(t)$ as a function of time $t$. Find an expression for the time rate of change of temperature as experienced by the ant.

We have 

$$T=f(x), \quad x=x(t)$$

The Chain Rule states that

$$\frac{dT}{dt}=\frac{dT}{dx}\frac{dx}{dt}$$

This commonly used Leibniz form of the Chain Rule involves an abuse of notation, Since $T$ is used in two different contexts. A precise statement is

$$\frac{d}{dt}f(x(t))=f'(x(t))x'(t)$$

Alternatively, one can define the **composite function** $T$ by

$$T(t)=f(x(t))$$

and write

$$T'(t)=f'(x(t))x'(t)$$

Note that $f'(x(t))$ is the derivative of the function $f(x)$ evaluated at $x(t)$. It is essential in what follows to understand these different ways of writing the 1-D chain rule.

### The Chain Rule for $f(x(t),y(t))$

In order to provide  a physical context, suppose that the surface temperature of a pond is $T=f(x,y)$ as a function of position $(x,y)$. A duck swims on the pond, with its position given by

$$x=x(t), \quad y=y(t)$$

as a function of time $t$. Find an expression for the time rate of change of temperature as experienced by the duck.

We have 

$$T(t) = f(x,y), \text{ where } x=x(t), y=y(t)$$

so that the temperature experienced by the duck depends on the time $t$. In a time change $\Delta t$, $x$ and $y$ change by

$$\Delta x=x(t+\Delta t)-x(t), \quad \Delta y=y(t+\Delta t)-y(t)$$

By the increment form of the linear approximation, the change in $T$ corresponding to changes $\Delta x$ and $\Delta y$ is approximated by

$$\Delta T \approx \frac{\partial T}{\partial x}\Delta x+\frac{\partial T}{\partial y}\Delta y$$

for $\Delta x$ and $\Delta y$ sufficiently small. Divided by $\Delta t$, let $\Delta t \rightarrow 0$, and use the definition of derivative to get $\frac{dT}{dt}$ on the left side of the equation. Assuming that $T$ is differentiable at $(x,y)$, then as $\Delta x$ and $\Delta y \rightarrow 0$, the error in the linear approximation tends to zero, and sot he approximation becomes increasingly accurate, leading to

$$\frac{dT}{dt}=\frac{\partial T}{\partial x}\frac{dx}{dt}+\frac{\partial T}{\partial y}\frac{dy}{dt}$$

This is the simplest example of the Chain Rule in two dimensions, and should be compared with previous equation. A precise form of equation which avoids abuse of notation, is

$$\frac{d}{dt}f(x(t),y(t))=f_x(x(t),y(t))x'(t)+f_y(x(t),y(t))y'(t)$$

Alternatively, define the composite function $T$ by

$$T(t)=f(x(t),y(t))$$

and write

$$T'(t)=f_x(x(t),y(t))x'(t)+f_y(x(t),y(t))y'(t)$$

Note that $f_x(x(t),y(t))$ is the partial derivative of the function $f(x,y)$ with respect to $x$, evaluated at $(x(t),y(t))$.

#### Remark

The preceding "derivation" is intended to make the Chain Rule plausible, but is NOT a proof. The difficulty lies in the approximation sign $\approx$. This can be remedied by keeping track of the error in the linear approximation, and leads to a proof. Note that a hypothesis on the function $f$, stronger than existence of the partial derivatives, is required.

#### Theorem 1 (Chain Rule)

Let $G(t)=f(x(t),y(t))$, and let $a=x(t_0)$ and $b=y(t_0)$. If $f$ is differentiable at $(a,b)$ and $x'(t_0)$ and $y'(t_0)$ exist, then $G'(t_0)$ exists and is given by

$$G'(t_0)=f_x(a,b)x'(t_0)+f_y(a,b)y'(t_0)$$

>#### Proof
By definition of the derivative,
$$G'(t_0)=\lim_{t\rightarrow t_0}\frac{G(t)-G(t_0)}{t-t_0}$$
provided that this limit exists. By definition of $G(t)$,
$$G(t)-G(t_0)=f(x(t),y(t))-f(x(t_0),y(t_0))$$
Since $f$ is differentiable we can write
$$f(x,y)=f(a,b)+f_x(a,b)(x-a)+f_y(a,b)(y-b)+R_{1,(a,b)}(x,y)$$
where
$$\lim_{(x,y)\rightarrow (a,b)}\frac{|R_{1,(a,b)}(x,y)|}{\sqrt{(x-a)^2+(y-b)^2}}=0$$
Since $a=x(t_0)$, $b=y(t_0)$, it follows from equations that
$$\frac{G(t)-G(t_0)}{t-t_0}=f_x(a,b)\left\[\frac{x(t)-x(t_0)}{t-t_0}\right\]+f_y(a,b)\left\[\frac{y(t)-y(t_0)}{t-t_0}\right\]+\frac{R_{1,(a,b)}(x(t),y(t))}{t-t_0}$$
You can now see the Chain Rule taking shape. We have to prove that
$$\lim_{t\rightarrow t_0}\frac{|R_{1,(a,b)}(x(t),y(t))|}{|t-t_0|}=0$$
Define $E(x,y)$ by
$$E(x,y)=\begin{matrix} \frac{R_{1,(a,b)}(x,y)}{\sqrt{(x-a)^2+(y-b)^2}} \\\ 0 \end{matrix}$$
By the definition of continuity, $E$ is continuous at $(a,b)$. From the definition of $E$,
$$R_{1,(a,b)}(x,y)=E(x,y)\sqrt{(x-a)^2+(y-b)^2}$$
Since $a=x(t_0)$ and $b=y(t_0)$
$$\frac{|R_{1,(a,b)}\left(x(t),y(t)\right)|}{|t-t_0|}=\left|E\left(x(t),y(t)   \right)\right|\sqrt{\left[\frac{x(t)-x(t_0)}{t-t_0}\right\]^2+\left[\frac{y(t)-y(t_0)}{t-t_0}\right\]^2}$$
Since $x'(t_0)$ and $y'(t_0)$ exist and the fact $E$ is continuous at $(a,b)$ we get
$$\lim_{t\rightarrow t_0}\frac{|R_{1,(a,b)}\left(x(t),y(t)\right)|}{|t-t_0|}=E(x(t_0),y(t_0))\sqrt{[x'(t_0)]^2+[y'(t_0)]^2}=0$$
It now follows from equations that $G'(t_0)$ exists, and is given by the desired chain rule formula.

#### Remark

When first studying the Chain Rule you might think that hypothesis that $f$ is differentiable could be replaced by the weaker hypothesis that $f_x(a,b)$ and $f_y(a,b)$ exist.

#### Remark

In practice it is convenient to use stronger hypotheses in the Chain Rule. In particular, we usually assume that $f$ has continuous partial derivatives at $(a,b)$ and $x'(t)$ and $y'(t)$ are both continuous at $t_0$. This also allows one to obtain the stronger conclusion that $G'(t)$ is continuous at $t_0$. These hypotheses can usually be checked quickly, either by using the Continuity Theorems, or in more theoretical situations, by using given information.

#### Remark

One can interpret the result geometrically in terms of the path of the duck and the level curves of the temperature function (the isothermal curves).

### The Vector Form of the Basic Chain Rule

So far, we have seen that for a composite function formed from

$$T(t)=f(x,y), \text{ with } x=x(t), y=y(t)$$

the Chain Rule reads

$$\frac{dT}{dt}=\frac{\partial f}{\partial x}\frac{dx}{dt}+\frac{\partial f}{\partial y}\frac{dy}{dt}$$

Observe that the right side is the scalar product of the gradient vector

$$\nabla f=\left(\frac{\partial f}{\partial x},\frac{\partial f}{\partial y}\right)$$

and the vector

$$\frac{d\mathbf{x}}{dt}=\left(\frac{dx}{dt},\frac{dy}{dt}\right)$$

Thus, we obtain

$$\frac{dT}{dt}=\nabla f \cdot \frac{d\mathbf{x}}{dt}$$

So, we have

$$\frac{d}{dt}f(\mathbf{x}(t))=\nabla f(\mathbf{x}(t))\cdot\frac{d\mathbf{x}}{dt}(t)$$

with $\mathbf{x}(t)=(x(t),y(t))$.

In this vector form, the Chain Rule holds for any differentiable function $f(\mathbf{x})$, $\mathbf{x}\in\mathbb{R}$.

## 6.2 Extensions of the Basic Chain Rule

So far, we have considered composite functions formed from differentiable functions

$$u=f(x,y), \text{ with } x=x(t), \quad y=y(t)$$

In this situation, the different variables are referred to as follows:

$u$: dependent variable

$x,y$: intermediate variable

$t$: independent variable

| u |   |
|---|---|
| / | \\ |
| x | y |
| \| | \| |
| t | t |

The tree diagram illustrates the "chain of dependence". Observe, that our chain rule above makes sense from the point of view of rate of change. From the dependence diagram, we clearly see that the values of $u$ are dependent on $x$ and $y$ which are each dependent on $t$. Thus, the rate of change of $u$ should be the sum of the rate of change with respect to its $x$-component and with respect to its $y$-component. The term $\frac{\partial u}{\partial x}\frac{dx}{dt}$ calculates the rate of change of $u$ with respect to those $t$'s that affect $u$ through $x$. Similarly, $\frac{\partial u}{\partial y}\frac{dy}{dt}$ calculates the rate of change of $u$ with respect to those $t$'s that affect $u$ through $y$.

We now discuss the cause where there is more than one independent variable.

Let

$$u=f(x,y), \text{ with } x=x(s,t), \quad y=y(s,t)$$

all be differentiable. Then $u$ is a composite function of two independent variables $s$ and $t$. Since $u$ is not a function of two variables, we want to write a chain rule for $\frac{\partial u}{\partial x}$ and $\frac{\partial u}{\partial t}$. We observe this is very similar to the case above. For $\frac{\partial u}{\partial x}$, the rate of change of $u$ with respect to those $s$'s that affect $u$ through $x$ is now $\frac{\partial u}{\partial x}\frac{\partial x}{\partial s}$, since $x$ is a function of two variables. Continuing this we get

$$\frac{\partial u}{\partial s}=\frac{\partial u}{\partial x}\frac{\partial x}{\partial s}+\frac{\partial u}{\partial y}\frac{\partial y}{\partial s}$$

$$\frac{\partial u}{\partial t}=\frac{\partial u}{\partial x}\frac{\partial x}{\partial t}+\frac{\partial u}{\partial y}\frac{\partial y}{\partial t}$$

| u |   |   |   |
|---|---|---|---|
| / |   | \\|   |
| x |   | y |   |
| / | \\| / | \\|
| s | t | s | t |

#### Remark

1.	It is important to understand the difference between the various partial derivatives and to know which variable is held constant.
2.	Equations of the form $x=x(s,t), y=y(s,t)$ can be thought of as defining a change of coordinates in 2-space.

#### Algorithm

To write the chain rule from a dependence diagram we:

1.	Take all possible paths from the differentiated variable to the differentiating variable.
2.	For each link in a given path, differentiate the upper variable with respect to the lower variable being careful to consider if this is a derivative or a partial derivative. Multiply all such derivatives in that path.
3.	Add the product from step 2 together to complete the chain rule.

#### Remark

As we have seen above, for the chain rule to be valid, each function that we take the (partial) derivative of must be differentiable.

It is essential to distinguish between

$\frac{dT}{dt}$: the ordinary derivative of $T$ as a composite function of $t$.

$\frac{\partial T}{\partial t}$: the partial derivative of $T$ as the given function of $x,y,t$ with $x,y$ held fixed.

In order to emphasize which variables are held fixed, one can write:

$$\left(\frac{\partial T}{\partial t}\right)_{x,y}$$

In order to avoid abuse of notation, i.e. using $T$ to denote two different functions, one can write

$$T(t)=f(x(t),y(t),t)$$

so that $T(t)$ s the function which measure the temperature at the duck's position at time $t$ and $f(x,y,t)$ is the temperature of the water at position $(a,b)$ at time $t$. Then the Chain Rule reads

$$\frac{dT}{dt}(t)=f_x(x(t),y(t),t)x'(t)+f_y(x(t),y(t),t)y'(t)+f_t(x(t),y(t),t)$$

or more concisely

$$T'(t)=f_xx'(t)+f_yy'(t)+f_t(x)$$

## 6.3 The Chain Rule for Second Partial Derivatives

In some situations, it is necessary to be able to calculate second derivatives of composite functions using the Chain Rule. One encounters this problem when working with partial differential equations which involve second derivatives e.g. Laplace's equation

$$u_{xx}+u_{yy}=0$$

It also arises when working with Taylor Polynomials and in the proof of Taylor's formula.

#### Remark

Observe, if we had substituted in $x=e^u$ at the beginning, we would get

$$z'(u)=f'(e^u)e^u$$

Hence, taking the derivative with respect to $u$ we would get

$$\begin{align\*} z''(u) &= \frac{d}{du}(f'(e^u))e^u+f'(e^u)\frac{d}{du}(e^u) \text{ by Product Rule}\\\
&=\left(f''(e^u)\frac{d}{du}e^u\right)e^u + f'(e^u)e^u \text{ by Chain Rule} \\\
&=(f''(e^u)e^u)e^u+f'(e^u)e^u \end{align\*}$$

Thus we see that our dependence diagram algorithm not only calculates the necessary chain rules, but also includes the necessary product rules.

