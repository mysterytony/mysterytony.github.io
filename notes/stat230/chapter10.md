# Chapter 10: C.L.T. Normal Approximations and M.G.F.s

## 10.1 Central Limit Theorem and Normal Approximations

The Normal distribution can, under certain conditions, be used to approximate probabilities for linear combinations of variables having a non-Normal distribution. This remarkable property follows from an amazing result called the Central Limit Theorem.

#### Theorem Central Limit Theorem

If $X_1,...,X_n$ be independent random variables all having the same distribution, with mean $\mu$ and variance $\sigma^2$, then as $n\rightarrow \infty$, the cumulative distribution function of the random variable
$$\frac{\sum_{i=1}^{n}X_i-n\mu}{\sigma \sqrt{n}}=\frac{S_n-n\mu}{\sigma\sqrt{n}}$$
approaches the $N(0,1)$ cumulative distribution function. Similarly, the cumulative distribution function of
$$\frac{\bar{X}-\mu}{\sigma/\sqrt{n}}$$
approaches the $N(0,1)$ cumulative distribution function.

This is a theorem about limits. We will use it when $n$ is large, but finite, to approximate the distribution of $S_n$ or $\bar{X}$ by a Normal distribution. That is, we will use 

$S_n=\sum_{i=1}^{n}X_i$ has approximately a $N(n\mu, n\sigma^2)$ distribution for large $n$

and

$\bar{X}=\frac{1}{n}\sum_{i=1}^{n}X_i$ has approximately a $N(\mu,\frac{\sigma^2}{n})$ distribution for large $n$.

Not that as $n\rightarrow \infty$, both distribution $N(n\mu,n\sigma^2)$ and $N(\mu,\sigma^2/n)$ fail to exist. (The former because both $n\mu$ and $n\sigma^2\rightarrow\infty$, and latter because $\sigma^2/n\rightarrow 0$).

#### Note
1.	The Central Limit Theorem does not hold if the common mean $\mu$ and variance $\sigma^2$ do not exist.
2.	We use the Central Limit Theorem to approximate the distribution of the sum $S_n=\sum_{i=1}^{n}X_i$ or average $\bar{X}=\frac{1}{n}\sum_{i=1}^{n}X_i$. The accuracy of the approximation depends on $n$ (bigger is better) and also on the actual distribution of the $X_i$'s. The approximation works better for small $n$ when the shape of the probability function / probability density function of $X_i$ is symmetric (the $U(a,b)$ pdf) or nearly symmetric ($Poi(5)$ pf).
3.	 If the $X_i$ themselves have a Normal distribution, the $S_n$ and $\bar{X}$ have exactly Normal distributions for all values of $n$.

#### Note
1.	A continuity correction should not be applied when approximating a continuous distribution by the Normal distribution. Since the correction involves going halfway to the next possible value, there would be no adjustment to make if the random variable takes on real values.
2.	Rather than trying to guess or remember when to add 0.5 and when to subtract 0.5, it is often helpful to sketch a histogram and shade the bars you wish to include. It should be obvious which value to use.
3.	Whenever approximating the probability of a single value for a discrete distribution, such as $P(X=50)$ when $X$ is $Bin(100,0.5)$ you need to use the continuity correction. Otherwise, for approximating the Binomial with large $n$, it is not necessary to use the correction.

#### Normal Approximation to the Poisson Distribution

Let $X$ be a random variable with $Poi(\mu)$ distribution and suppose $\mu$ is large. For the moment suppose that $\mu$ is an integer and recall that if we add $\mu$ independent Poisson random variables, each with parameter 1, then the sum has the Poisson distribution with parameter $\mu$. In general a Poisson random variable with large expected value can be written as the sum of a large number of independent random variables, and so the Central Limit Theorem implies that is much be closed to Normally distributed.

#### Theorem: Normal Approximation to Poisson

Suppose $X\backsim Poi(\mu)$. Then the cumulative distribution function of the standardized random variable
$$Z=\frac{X-\mu}{\sqrt{\mu}}$$
approaches that of a standard Normal random variable as $\mu\rightarrow\infty$.

#### Normal Approximation to the Binomial Distribution

It is well-known that the probability histogram for a Binomial distribution, at least for large values of $n$; resembles a bell-shaped or Normal curve.

#### Theorem: Normal Approximation to Binomial

Suppose $X\backsim Bin(n,p)$. Then for $n$ large, the random variable
$$W=\frac{X-np}{\sqrt{np(1-p)}}$$
has approximately a $N(0,1)$ distribution.

#### Remark

We can write the Normal approximation either as $\frac{X-np}{\sqrt{np(1-np)}}\backsim N(0,1)$ approximately or as $X\backsim N(np,np(1-p))$ approximately.

The continuity correction method can be used there.

## 10.2 Moment Generating Function

There is a third type of function, the moment generating function is closely related to other transforms used in mathematics, the Laplace and Fourier transforms.

#### Definition

Consider a discrete random variable $X$ with probability fucntion $f(x)$. The moment generating function (mgf) of $X$ is defined as
$$M(t)=E(e^{tX})=\sum_{all x}e^{tX}f(x)$$
We will assume that the moment generating functions is defined and finite for values of $t$ in an interval around 0 (that is, for some $a>0,\sum_{x}e^{tX}f(x)<\infty$ for all $t\in[-a,a]$).

The moment of a random variable $X$  are the expectations of the functions $X^k$ for $k=1,2,...$. The expected value $E(X^k)$ is called the k-th moment of $X$. The mean $\mu=E(X)$ is therefore the first moment. It is often easy to find the moments of a probability distribution mathematically by using the moment generating function.

#### Theorem

Let the random variable $X$ have moment generating function $M(t)$. Then
$$E(X^k)=M^{(k)}(0)$$ for $k=1,2,...$
where $M^{(k)}(0)$ stands for $d^kM(t)/dt^k$ evaluated at $t=0$.

#### Theorem: Uniqueness Theorem for Moment Generating Functions:

Suppose that random variables $X$ and $Y$ have moment generating functions $M_X(t)$ and $M_Y(t)$ respectively. If $M_X(t)=M_Y(t)$ for all $t$ then $X$ and $Y$ have the same distribution.

#### Moment Generating Function of a Continuous Random Variable

For continuous random variables the moment generating function is defined in a manner analogous to discrete random variables.

#### Theorem

Consider a continuous random variable $X$ with probability density function $f(x)$. The moment generating function (mgf) of $X$ is defined as
$$M(t)=E(e^{tX})=\int_{-\infty}^{\infty}e^{tx}f(x)dx$$
We will assume that the moment generating function is defined and finite for values of $t$ in an interval around $0$ (that is, for some $a>0,\int_{-\infty}^{\infty}e^{tx}f(x)dx<\infty$ for all $t\in[-a,a]$).

#### Note

The moment generating function uniquely identifies continuous distributions as well.

## 10.3 Multivariate Moment Generating Functions

Suppose we have two possibly dependent random variables $(X, Y)$ and we wish to characterize their joint distribution using a moment generating function. Just as the probability function and the cumulative distribution function are, in this case, functions of two arguments, so is the moment generating function.

#### Definition

The joint moment generating function of $(X,Y)$ is
$$M(s,t)=E(e^{sX+tY})$$
Recall that if $X,Y$ are independent random variables and $g_1(X)$ an $g_2(Y)$ are any two functions, then
$$E[g_1(X)g_2(Y)]=E[g_1(X)]E[g_2(Y)]$$
and so with $g_1(X)=e^{sX}$ and $g_2(Y)=e^{tY}$ we obtain, for independent random variables $X, Y$
$$M(s,t)=M_X(s)M_Y(t)$$

Suppose $X,Y$ are independent discrete random variables with moment generating functions $M_X(t)$ and $M_Y(t)$ respectively. Suppose you wish the moment generating function of the sum $Z=X+Y$. 
$$M_Z(t)=M_X(t)M_Y(t)$$

#### Theorem

The moment generating function of the sum of independent random variables is the product of the individual moment generating functions.

#### Theorem

If $X_i\backsim N(\mu_i,\sigma_i^2),i=1,2,...,n$ independently and $a_1,...,a_n$ are constants, then $\sum_{i=1}^{n}a_iX_i\backsim N(\sum_{i=1}^{n}a_i\mu_i,\sum_{i=1}^{n}a_i^2\sigma_i^2)$.

