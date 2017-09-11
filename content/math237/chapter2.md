# Chapter 2: Limits

## 2.1 Definition of a Limit

Recall for a function $f(x)$ we define $\lim_{x\rightarrow a}f(x)=L$ to mean that the values of $f(x)$ can be made arbitrarily close to $L$ by taking $x$ sufficiently close to $a$. More precisely, for every $\epsilon>0$ there exists a $\delta>0$ such that

$$|f(x)-L|<\epsilon$$

whenever

$$0<|x-a|<\delta$$

Moreover, we showed that $\lim_{x\rightarrow a}f(x)=L$ if and only if $\lim_{x\rightarrow a^-}f(x)=L=\lim_{x\rightarrow a^+}f(x)$.

Similarly, for scalar functions $f(x,y)$, we want $\lim_{(x,y)\rightarrow (a,b)}f(x,y)=L$ to mean the values of $f(x,y)$ can be made arbitrarily close to $L$ by taking $(x,y)$ sufficiently close to $(a,b)$. For the one variable case we could only approach the limit from two directions, left and right. For multivariable scalar function our domain is now multidimensional, so we can approach the limits from infinitely many directions. Moreover, we are not restricted to straight lines either; we can approach $(a,b)$ along any smooth curve as well! Hence, to generalize the precise definition of a limit we need to generalize the concept of an interval.

#### Definition

An r-**neighborhood** of a point $(a,b)\in\mathbb{R}^2$ is a set

$$N_r(a,b)=\{(x,y)\in\mathbb{R}^2:||(x,y)-(a,b)||<r\}$$

#### Remark

Recall that $||(x,y)-(a,b)||$ is the Euclidean distance in $\mathbb{R}^2$ That is,

$$||(x,y)-(a,b)||=\sqrt{(x-a)^2+(y-b)^2}$$

#### Definition

Assume $f(x,y)$ is defined in a neighborhood of $(a,b)$, except possible at $(a,b)$. If for every $\epsilon>0$ there exists a $\delta>0$ such that

$$0<||(x,y)-(a,b)||<\delta$$

implies

$$|f(x,y)-L|<\epsilon$$

then 

$$\lim_{(x,y)\rightarrow (a,b)}f(x,y)=L$$

## 2.2 Limit Theorems

In extending our definition of a limit to functions $f(x,y)$ we would hope that we have preserved all of our properties of limits we had for single variable functions.

#### Theorem 1

If $\lim_{(x,y)\rightarrow (a,b)}f(x,y)$ and $\lim_{(x,y)\rightarrow (a,b)}g(x,y)$ both exist, then

1.	$lim_{(x,y)\rightarrow (a,b)}[f(x,y)+g(x,y)] = \lim_{(x,y)\rightarrow (a,b)}f(x,y) +\lim_{(x,y)\rightarrow (a,b)}g(x,y)$
2.	$lim_{(x,y)\rightarrow (a,b)}[f(x,y)g(x,y)] = \left[\lim_{(x,y)\rightarrow (a,b)}f(x,y)\right]\left[\lim_{(x,y)\rightarrow (a,b)}g(x,y)\right]$
3.	$lim_{(x,y)\rightarrow (a,b)}\frac{f(x,y)}{g(x,y)} = \frac{\lim_{(x,y)\rightarrow (a,b)}f(x,y)}{\lim_{(x,y)\rightarrow (a,b)}g(x,y)}$

>#### Proof
We will prove (1). Let $\epsilon>0$. Since $\lim_{(x,y)\rightarrow (a,b)}f(x,y)=L_1$ and $\lim_{(x,y)\rightarrow (a,b)}g(x,y)=L_2$ both exist, by definition of a limit, there exists a $\delta>0$ such that
$$0<||(x,y)-(a,b)||<\delta$$
implies $|f(x,y)-L_1|<\frac{1}{2}\epsilon$ and $|g(x,y)-L_2|<\frac{1}{2}\epsilon$
Thus, if $0<||(x,y)-(a,b)||<\delta$, then
$$\begin{align\*} |f(x,y)+g(x,y)-(L_1+L_2)| &= |\[f(x,y)-L-1\]+\[g(x,y)-L_2\]| \\\
&\leq |f(x,y)-L_1| + |g(x,y)-L_2| \quad \text{by the Triangle Inequality} \\\
&< \frac{\epsilon}{2} +\frac{\epsilon}{2} =\epsilon \end{align\*}$$
as required.

#### Theorem 2

If $\lim_{(x,y)\rightarrow (a,b)}f(x,y)$ exists, then the limit is unique.

>#### Proof
Assume that $\lim_{(x,y)\rightarrow (a,b)}f(x,y)=L_1$ and $\lim_{(x,y)\rightarrow (a,b)}f(x,y)=L_2$. Then we have
$$|L_1-L_2|=\left|\lim_{(x,y)\rightarrow (a,b)}f(x,y)- \lim_{(x,y)\rightarrow (a,b)}f(x,y)\right|=\left|\lim_{(x,y)\rightarrow (a,b)}[f(x,y)-f(x,y)]\right|=0$$
Hence, $L_1=L_2$ and so the limit is unique.

## 2.3 Proving a Limit Does Not Exist

Recall for a function of one variable, we often showed a limit did not exist by showing the left-hand limit did not equal to the right-hand limit and using the fact that 
Recall for a function of one variable, we often showed a limit did not exist by showing the left-hand limit did not equal to the right-hand limit and using the fact that the limit is unique. For multivariable functions, we will essentially do the same thing, only now we have to remember that we are able to approach $(a,b)$ along any smooth curve.

## 2.4 Proving a Limit Exists

Since we cannot use the previous methods to prove a limit exists, we prove another theorem to help us.

#### Theorem 1 (Squeeze Theorem)

If there exists a function $B(x,y)$ such that

$$|f(x,y)-L|\leq B(x,y), \text{for all} (x,y)\neq(a,b)$$

in some neighborhood of $(a,b)$ and $\lim_{(x,y)\rightarrow (a,b)}B(x,y)=0$, then

$$\lim_{(x,y)\rightarrow (a,b)}f(x,y)=L$$

>#### Proof
Let $\epsilon>0$. Since $\lim_{(x,y)\rightarrow (a,b)}B(x,y)=0$ we have that there exists a $\delta>0$ such that
$$0<||(x,y)-(a,b)||<\delta \text{ implies } |B(x,y)-0|<\epsilon$$
Hence, if $0<||(x,y)-(a,b)||<\epsilon$, then we have
$$|f(x,y)-L|\leq B(x,y)=|B(x,y)|<\epsilon$$
as our hypothesis requires that $B(x,y)\geq 0$ for all $(x,y)\neq (a,b)$ in the neighborhood of $(a,b)$. Therefore, by definition of a limit, we have
$$\lim_{(x,y)\rightarrow (a,b)}f(x,y)=L$$

#### Remark

Be careful when working with inequalities! For example, the statement

$$x<x^2$$

is false! if $|x|<1$.

Before one can apply the Squeeze Theorem, one must have a possible limiting value $L$ in mind. Of course if you are asked to

$$\text{Prove that } \lim_{(x,y)\rightarrow (a,b)}f(x,y)=L$$

you are given the limiting value $L$, and can apply the Squeeze Theorem directly. On the other hand, if you are asked to

$$\text{Determine whether } \lim_{(x,y)\rightarrow (a,b)}f(x,y) \text{exists, and if so find its value}$$

you should begin by letting $(x,y)$ approach $(a,b)$ along straight lines of different slope.

If the limiting value of $f(x,y)$ depends on the slope, then $\lim f(x,y)$ does not exist.

If the limiting value of $f(x,y)$ does not depend on the slope and equals $L$, say, then $\lim f(x,y)$ may exist and if it does exist, it equals $L$.

You should then try to apply the Squeeze Theorem to prove that the limit does exist and equals to $L$.

If you fail to derive a suitable inequality, you cannot draw a conclusion, and you are faced with a dilemma...

perhaps a suitable inequality does exist, but you were not skillful enough to drive it, or

perhaps if you let $(x,y)$ approach $(a,b)$ along curves, then you may get a limiting value other than $L$ along one of those curves, in which case $\lim f(x,y)$ does not exist.

#### Remark

The concept of a neighborhood, the definition of a limit, the Squeeze Theorem and the limit theorems are all valid for scalar functions $f(x),x\in\mathbb{R}^n$. In fact, to generalize these concepts, one only needs to recall that if $\mathbf{x}=(x_1,...,x_n)$ and $\mathbf{a}=(a_1,...,a_n)$ are in $\mathbb{R}^n$, the Euclidean distance from $x$ to $a$ is

$$||\mathbf{x}-\mathbf{a}||=\sqrt{(x_1-a_1)^2+\cdots+(x_n-a_n)^2}$$

## 2.5 Appendix

The following statements can be taken as axioms which define the notion of "less than" for real numbers.

**Trichotomy Property**: for any real numbers $a$ and $b$, one an only one of the following holds:

$$a=b \quad a<b \quad b<a$$

**Transitivity Property**: If $a<b$ and $b<c$, then $a<c$.

**Addiction Property**: If $a<b$, then for all $c$, $a+c<b+c$.

**Multiplication Property**: If $a<b$ and $c<0$, then $bc<ac$.

Using these properties one can deduce other results.

The **absolute value** of a real number $a$ is defined by

$$|a|= \begin{matrix} a \text{ if } a \geq 0 \\\ -a \text{ if } a < 0 \end{matrix}$$

Three frequently used results, which follows from the axioms, are listed below.

1.	$|a|=\sqrt{a^2}$
2.	$|a|<b$ if and only if $-b<a<b$.
3.	The Triangle Inequality: $|a+b|\leq |a|+|b|$ for all $a,b\in\mathbb{R}$.

#### Remark

When using the Squeeze Theorem, the most commonly used inequalities are:

1.	The Triangle Inequality
2.	If $c>0$ then $a<a+c$
3.	The cosine inequality $2|x||y|\leq x^2+y^2$

One particularly common use of (2) is for things like

$$|x|=\sqrt{x^2}\leq\sqrt{x^2+y^2}$$

We again stress that it is very important that one be careful when working with inequalities. Another common mistake is

$$\text{if } c>0, \text{ then } |a+c|\leq|a+c$$