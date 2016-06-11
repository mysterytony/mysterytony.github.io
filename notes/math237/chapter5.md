# Chapter 5: Differentiable Functions

## 5.1 Definition of Differentiability

The linear approximation of $f(x,y)$ is

$$f(x,y)\approx L_{(a,b)}(x,y)$$

where

$$L_{(a,b)}(x,y)=f(a,b)+\nabla f(a,b)\cdot (x-a, y-b)$$

When making an approximation, it is important to ask: how large is the error?

The error (or "remainder") in the linear approximation is defined by

$$R_{1,(a,b)}(x,y)=f(x,y)-L_{(a,b)}(x,y)$$

We are interested in how large $R_{1,(a,b)}(x,y)$ is compared to the magnitude of the displacement, $||(x,y)-(a,b)||$.

### 1-D Case

In order to gain insight, we consider a function of one variable, $f(x)$. In this case

$$L_a(x)=f(a)+f'(a)(x-a)$$

The error is

$$R_{1,a}(x)=f(x)-L_a(x)$$

and the magnitude of the displacement is $|x-a|$. The following theorem shows that the error $R_{1(a,b)}(x,y)$ tends to zero faster than the displacement.

#### Theorem 1

If $f'(a)$ exists, then $\lim_{x\rightarrow a}\frac{|R_{1,a}(x)|}{|x-a|}=0$.

>#### Proof
By equation,
$$\frac{|R_{1,a}(x)|}{|x-a|}=\left| \frac{f(x)-f(a)-f'(a)(x-a)}{x-a} \right| = \left| \frac{f(x)-f(a)}{x-a} -f'(a) \right|$$
The result follows, since the hypothesis and the definition of derivative imply that
$$\lim_{x\rightarrow a}\frac{f(x)-f(a)}{x-1}=f'(a)$$
$\square$

It can be shown if one replaces the tangent line $y=L_a(x)$ by any other straight line $y=f(a)+m(x-a)$ through the point $(a,f(a))$, the error will not satisfy the conclusion of the theorem. Thus the property

$$\lim_{x\rightarrow a}\frac{|R_{1,a}(x)|}{|x-a|}=0$$

characterizes the tangent line at $(a,f(a))$ as the best straight line approximation to the graph $y=f(x)$ near $(a,f(a))$.

### 2-D Case

The situation if different for a function $f(x,y)$ of two variables whose partial derivatives exist at $(a,b)$. In general, it does not follow that the error tends to zero faster than the displacement. For example

$$\lim_{(x,y)\rightarrow (a,b)}\frac{|R_{1,(a,b)}(x,y)|}{||(x,y)-(a,b)||}=0$$

is not valid. Since this is a desirable property, we incorporate it into a definition.

#### Definition

A function $f(x,y)$ is **differentiable** at $(a,b)$ if there is a linear function $L(x,y)=f(a,b)+c(x-a)+d(y-b)$ such that

$$\lim_{(x,y)\rightarrow (a,b)}\frac{|R_{1,(a,b)(x,y)}|}{||(x,y)-(a,b)||}=0$$

where

$$R_{1,(a,b)}(x,y)=f(x,y)-L(x,y)$$

#### Theorem 2

If $f(x,y)$ is differentiable at $(a,b)$ with linear function

$$L(x,y)=f(a,b)+c(x-a)+d(y-b)$$

Then $L(x,y)$ is the linear approximation of $f$ at $(a,b)$. That is, $c=f_x(a,b)$ and $d=f_y(a,b)$.

>#### Proof
Since $f$ is differentiable at $(a,b)$ we have
$$\lim_{(x,y)\rightarrow (a,b)}\frac{|R_{1,(a,b)}(x,y)|}{||(x,y)-(a,b)||}=0$$
Hence, the limit is 0 along any path. Along the path along $y=b$, we get
$$\begin{align\*}
0 &= \lim_{x\rightarrow a}\frac{|f(x,b)-f(a,b)-c(x-a)-d(b-b)|}{||(x,b)-(a,b)||} \\\
&= \lim_{x \rightarrow a} \frac{|f(x,b)-f(a,b)-c(x-a)|}{|x-a|} \\\
&= \lim_{x \rightarrow a} \left| \frac{f(x,b)-f(a,b)}{x-a} - c \right| \\\
&= f_x(a,b)-c \\\
c &= f_x(a,b)\end{align\*}$$
Similarly, approaching along $x=a$ we get that $d=f_y(a,b)$
$\square$

#### Remark

1.	Theorem 2 tells us that $L(x,y)$ in the definition of differentiability is always the linear approximation. Hence, to prove a function is differentiable at a point we need to prove that

$$\lim_{(x,y)\rightarrow (a,b)}\frac{|R_{1,(a,b)}(x,y)|}{||(x,y)-(a,b)||}=0$$

where

$$R_{1,(a,b)}(x,y)=f(x,y)-L(x,y)$$

2.	Observe that for the linear approximation to exist at $(a,b)$ both partial derivatives of $f$ must exist at $(a,b)$. However, both partial derivatives existing does not guarantee that $f$ will be differentiable. We say that the partial derivatives of $f$ existing at $(a,b)$ is necessary but not sufficient.

3.	Like the 1-D case, Theorem 2 proves that the tangent plane gives the best linear approximation to the graph $z=f(x,y)$ near $(a,b)$. Moreover, it tells us that the linear approximation is a "good approximation" if and only if $f$ is differentiable at $(a,b)$.

#### Definition

Consider a function $f(x,y)$ which is differentiable at $(a,b)$. The **tangent plane** of the surface $z=f(x,y)$ at $(a,b,f(a,b))$ is the graph of the linearization. That is, the tangent plane is given by

$$z=f(a,b)+\frac{\partial f}{\partial x}(a,b)(x-a)+\frac{\partial f}{\partial y}(a,b)(y-b)$$

#### Remark

Since $f$ is assumed to be differentiable at $(a,b)$, the error in approximating the surface by the tangent plane tends to zero faster than the displacement $||(x,y)-(a,b)||$. We have shown that no other plane through the point $(a,b,f(a,b))$ has this property. Thus the tangent plane is that best approximates the surface near the point $(a,b,f(a,b))$. In this case, we say that at the point $(a,b,f(a,b))$ the surface $z=f(a,b)$ is **smooth**.

## 5.2 Differentiability and Continuity

Recall from Calculus 1 that if $f(x)$ is differentiable at $x=a$, then $f$ is continuous at $a$. We will prove that this result also holds for scalar functions $f(x,y)$. But, we first show that a function $f(x,y)$ can fail to be continuous at a point $(a,b)$ even if the partial derivatives exist at $(a,b)$.

#### Remark

When investigating the limit, it is not necessary to consider the limit along all straight lines which approach $(0,0)$. It is sufficient to show that $f(x,y)$ does not tend to $f(0,0)$ along one straight line which approaches $(0,0)$

#### Theorem 1

If $f(x,y)$ is differentiable at $(a,b)$, then $f$ is continuous at $(a,b)$

>#### Proof
The error $R_{1,(a,b)}(x,y)$ is defined by
$$R_{1,(a,b)}(x,y)=f(x,y)-L_{(a,b)}(x,y)$$
On using the definition of $L_{(a,b)}(x,y)$, this equation can be rearranged to read
$$f(x,y)=f(a,b)+\nabla f(a,b)\cdot (x-a,y-b)+R_{1,(a,b)}(x,y)$$
We can write
$$R_{1,(a,b)}(x,y)=\frac{R_{1,(a,b)}(x,y)}{||(x,y)-(a,b)||}||(x,y)-(a,b)||, \text{ for } (x,y)\neq (a,b)$$
Since $f$ is differentiable and by the limit theorems, we get
$$\lim_{(x,y)\rightarrow (a,b)}R_{1,(a,b)}(x,y)=0$$
It now follows from equation that
$$\lim_{(x,y) \rightarrow (a,b)}=f(a,b)+0+0=f(a,b)$$
ans so by definition, $f$ is continuous at $(a,b)$.
$\square$

## 5.3 Continuous Partial Derivatives and Differentiability

We need an efficient way of proving that a given function $f$ is differentiable at a typical point. In this section, we present a theorem for this purpose, which states that if the partial derivatives of $f(x,y)$ are continuous at $(a,b)$, then $f$ is differentiable at $(a,b)$.

To prove this theorem, we will require an extremely important theorem from Calculus 1, the Mean Value Theorem.

#### Theorem 1 (Mean Value Theorem)

If $f(t)$ is continuous on the closed interval $\[t_1,t_2\]$ and $f$ is differentiable on the open interval $(t_1,t_2)$, then there exists $t_0\in (t_1,t_2)$ such that

$$f(t_2)-f(t-1)=f'(t_0)(t_2-t_1)$$

#### Theorem 2

If $\frac{\partial f}{\partial x}$ $\frac{\partial f}{\partial y}$ are continuous at $(a,b)$, then $f(x,y)$ is differentiable at $(a,b)$.

>#### Proof
We derive an expression for the error $R_{1,(a,b)}(x,y)$, given by
$$R_{1,(a,b)}(x,y)=f(x,y)-f(a,b)-f_x(a,b)(x-a)-f_y(a,b)(y-b)$$
Since $f_x$ and $f_y$ are continuous then $f_x$ and $f_y$ exist in some neighborhood $B(a,b)$. For $(x,y)\in B(a,b)$. We write
$$f(x,y)-f(a,b)=\left\[f(x,y)-f(a,y)\right\]+\left\[f(a,y)-f(a,b)\right\]$$
by adding and subtracting $f(a,y)$. The Mean Value Theorem can be applied to each bracket, since one variable is held fixed, and the partial derivatives are assumed to exist. For the first bracket:
$$f(x,y)-f(a,y)=f_x(\bar{x},y)(x-a)$$
where $\bar{x}$ lies between $a$ and $x$. By adding and subtracting $f_x(a,b)(x-a)$, we obtain
$$f(x,y)-f(a,y)=f_x(a,b)(x-a)+A(x-a)$$
where
$$A=f_x(\bar{x},y)-f_x(a,b)$$
Similarly for the second bracket:
$$\begin{align\*} f(a,y)-f(a,b) &= (a,\bar{y})(y-b) \\\
&= f_y(a,b)(y-b) + B(y-b)\end{align\*}$$
where $B=f_y(a,\bar{y})-f_y(a,b)$
and $\bar{y}$ lies between $b$ and $y$.
Substitute equations to obtain
$$R_{1,(a,b)}(x,y)=A(x-a)+B(y-b)$$
It follows by the triangle inequality that
$$0 \leq \frac{|R_{1,(a,b)}(x,y)|}{||(x,y)-(a,b)||} \leq \frac{|A||x-a|}{\sqrt{(x-a)^2+(y-b)^2}}+\frac{|B||y-b|}{\sqrt{(x-a)^2+(y-b)^2}}\leq |A| +|B|$$
We can now apply the Squeeze Theorem
As $(x,y)\rightarrow (a,b)$, it follows that
$$(\bar{x},y)\rightarrow (a,b) \text{ and } (a,\bar{y})\rightarrow (a,b)$$
Since $f_x$ and $f_y$ are continuous at $(a,b)$, it follows that
$$\lim_{(x,y)\rightarrow (a,b)}A=0 \text{ and } \lim_{(x,y)\rightarrow (a,b)}B=0$$
and the Squeeze Theorem now imply
$$\lim_{(x,y)\rightarrow (a,b)}\frac{|R_{1,(a,b)}(x,y)}{||(x,y)-(a,b)||}=0$$
so that $f$ is differentiable at $(a,b)$
$\square$

#### Remark

The converse of Theorem 2 is not true. That is $f(x,y)$ being differentiable at $(a,b)$ does not imply that $f_x$ and $f_y$ are both continuous at $(a,b)$.

### Summary

Theorem 2 makes it easy to prove that a function $f$ is differentiable at a typical point. One simply differentiates $f$ to obtain the partial derivatives $f_x$ and $f_y$, and then you check that partials are continuous function by inspection, referring to the Continuity Theorem. It is not necessary to use the definition of a differentiable function at an exceptional point.

### Generalization

The definition of a differentiable function and theorems 1 and 2 are valid for function of $n$ variables. The only change is that there are $n$ partial derivatives.

## 5.4 Linear Approximation Revisited

The error in the linear approximation for $f(x,y)$ is defined by

$$R_{1,(a,b)}(x,y)=f(x,y)-L_{(a,b)}(x,y)$$

where

$$L_{(a,b)}(x,y)=f(a,b)+\nabla f(a,b)\cdot ((x,y)-(a,b))$$

It is convenient to rearrange the definition of $R_{1,(a,b)}(x,y)$ to read

$$f(x,y) \approx f(a,b)+\nabla f(a,b)\cdot (x-a, y--b)$$

for $(x,y)$ sufficiently close to $(a,b)$, arises if one neglects the error term. In general, one has no information about $R_{1,(a,b)}(x,y)$, and so it is not clear whether the approximation is reasonable. However, Theorem 2 provides an important piece of information about $R_{1,(a,b)}(x,y)$, namely that if the partial derivatives of $f$ are continuous at $(a,b)$, then

$$\lim_{(x,y)\rightarrow (a,b)}\frac{|R_{1,(a,b)}(x,y)}{||(x,y)-(a,b)||}=0$$

i.e. the error tends to zero faster than the displacement. In this case, the approximation is reasonable for $(x,y)$ sufficiently close to $(a,b)$, and we say that $L_{(a,b)}(x,y)$ is a good approximation of $f(x,y)$ near $(a,b)$.