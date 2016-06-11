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

---
ends page 43