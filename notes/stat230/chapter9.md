[<- Go Back](http://tonyli.tk/)

# Chapter 9: Multivariate Distribution

## 9.1 Basic Terminology and Techniques

#### Joint Probability Functions:

First, suppose there are two discrete random variables $X$ and $Y$, and define the function
$$\begin{align\*} f(x,y) &= P(X=x \quad and \quad Y=y) \\\ &= P(X=x, Y=y)\end{align\*}$$

We call $f(x,y)$ the joint probability function of $(X,Y)$. The properties of a joint probability function are similar for those for a single variable; for two random variables we have $f(x,y)\geq 0$ for all $(x,y)$ and
$$\sum_{all(x,y)}f(x,y)=1$$

In general,
$$f(x_1,...,x_n)=P(X_1=x_1,...,X_n=x_n)$$
if there are $n$ random variables $X_1,...,X_n$

#### Marginal Distributions

If we're only interested in $X$, and don't care what value $Y$ takes, we can see that
$$\begin{align\*}P(X=0) &= P(X=0,Y=1)+P(X=0,Y=2) \\\ &= f(0,1) + f(0,2) \\\ &= 0.3\end{align\*}$$

In general, to find $f_1(x)$ we add over all values of $y$ where $X=x$, and to find $f_2(y)$ we add over all values of $x$ with $Y=y$. Then
$$f_1(x)=\sum_{all y}f(x,y)$$
$$f_2(y)=\sum_{all x}f(x,y)$$

#### Independent Random Variables

For events $A$ and $B$, we have defined $A$ and $B$ to be independent if and only if $P(AB)=P(A)P(B)$. This definition can be extended to random variables $(X,Y)$. Two random variable are independent if their joint probability function is the product of the marginal probability functions.

#### Definition

$X$ and $Y$ are **independent** random variables if $f(x,y)=f_1(x)f_2(y)$ for all values $(x,y)$.

>Be careful applying this definition. You can only conclude that $X$ and $Y$ are independent after checking all $(x,y)$ combinations. Each a single case where $f_1(x)f_2(y)\neq f(x,y)$ makes $X$ and $Y$ dependent random variables.

#### Conditional Probability Functions

Again we can extend a definition from events to random variables. For events $A$ and $B$, re call that
$$P(A|B)=\frac{P(AB)}{P(B)}$$ provided $P(B)>0$

Since
$$P(X=x|Y=y)=\frac{P(X=x, Y=y)}{P(Y=y)}$$ provided $P(Y=y)>0$,
we make the following definition.

#### Definition

The conditional probability function of $X$ given $Y=y$ is
$$f_1(x|y)=\frac{f(x,y)}{f_2{y}}$$
Similarly, the conditional probability function of $Y$ given $X=x$ is
$$f_2(y|x)=\frac{f(x,y)}{f_1(x)}$$

#### Functions of Random Variables

The most general method for finding the probability function for some function of random variables $X$ and $Y$ involves looking at every combination $(x,y)$ to see what values the function takes.

#### Theorem

If $X\backsim Poi(\mu_1)$ and  $Y\backsim Poi(\mu_2)$ independently then $T=X+Y\backsim Poi(\mu_1+\mu_2)$

#### Theorem

If $X\backsim Bin(n,p)$ and $Y\backsim Bin(m,p)$ independently then $T=X+Y\backsim Bin(n+m,p)$

## 9.2 Multinomial Distribution

It is a generalization of the Binomial model to the case where each trial has $k$ possible outcomes.

#### Physical Setup

Suppose an experiment is repeated independently $n$ times with $k$ distinct types of outcome each time. Let the probabilities of these $k$ types be $p_1,...,p_k$ each time. Let $X_1$ be the number of times the first type occurs, and $X_k$ the number of times the k-th type occurs. Then $(X_1,...,X_k)$ has a Multinomial distribution.

#### Note

1.	$p_1+\cdots+p_k=1$
2.	$X_1+\cdots+X_k=n$

#### Joint Probability Function

$$f(x_1,...,x_k)=\frac{n!}{x_1!\cdots x_k!}p_1^{x_1}\cdots p_k^{x_k}$$

The restriction on the $x_i$ are $x_i=0,1,...,n$ and $\sum_{i=1}^{k}x_i=n$

## 9.4 Expectation for Multivariate Distributions: Covariance and Correlation

#### Definition

$$E[g(X,Y)]=\sum_{all (x,y)}g(x,y)f(x,y)$$

#### Property of Multivariate Expectation

$$E[ag_1(X,Y)+bg_2(X,Y)]=aE[g_1(X,Y)]+bE[g_2(X,Y)]$$

#### Relationship between variables

Independence is a "yes/no" way of defining a relationship between variables. We all know that there can be different types of relationships between variables which are dependent. More generally, two random variables may be related (non-independent) in a probabilistic sense.

#### Definition

The **covariance** of $X$ and $Y$, denoted $Cov(X,Y)$ or $\sigma_{XY}$, is
$$Cov(X,Y)=E[(X-\mu_X)(Y-\mu_Y)]$$

Note that $Cov(X,Y)=E(XY)-E(X)E(Y)$

#### Interpretation of Covariance

1. Suppose large values of X tend to occur with large values of Y and small values of X with small values of Y. Then $(X-\mu_X)$ and $(Y-\mu_Y)$ will tend to be of the same sign, whether positive or negative. Thus $(X-\mu_X)(Y-\mu_Y)$ will be positive. Hence $Cov(X,Y)>0$.
2.	Suppose large values of X tend to occur with small values of Y and small values of X with large values of Y. Then $(X-\mu_X)$ and $(Y-\mu_Y)$ will tend to be opposite signs. Thus $(X-\mu_X)(Y-\mu_Y)$ will be negative. Hence $Cov(X,Y)<0$.

#### Theorem

If $X$ and $Y$ are independent then $Cov(X,Y)=0$

#### Theorem

Suppose random variables $X$ and $Y$ are independent random variables. Then if $g_1(X)$ and $g_2(Y)$ are any two functions,
$$E[g_1(X)g_2(Y)]=E[g_1(X)]E[g_2(Y)]$$

#### Caution

This result is not reversible. If $Cov(X,Y)=0$ we cannot conclude that $X$ and $Y$ are independent random variables.

#### Definition

The **correlation coefficient** of $X$ and $Y$ is
$$\rho=\frac{Cov(X,Y)}{\sigma_X \sigma_Y}$$

The correlation coefficient measures the strength of the linear relationship between $X$ and $Y$ and is simply a rescaled version of the covariance, scaled to lie in the interval [-1,1].

#### Properties of $\rho$

1.	Since $\sigma_X$ and $\sigma_Y$, the standard deviations of $X$ and $Y$, are both positive, $\rho$ will have the same sign as $Cov(X,Y)$. Hence the interpretation of the sign of $rho$ is the same as for $Cov(X,Y)$, and $\rho=0$ if $X$ and $Y$ are independent. When $\rho=0$ we way that $X$ and $Y$ are uncorrelated.
2.	$-1\leq \rho \leq 1$ and as $\rho \rightarrow \pm 1$ the relation between $X$ and $Y$ becomes one to one and linear.

## 9.5 Mean and Variance of a Linear Combination of Random Variables

#### Results for means:

1.	$E(aX+bY)=aE(X)+bE(Y)=a\mu_X+b\mu_Y$, when $a$ and $b$ are constants. (This follows from the definition of expected value.) In particular, $E(X+Y)=\mu_X+\mu_Y$ and $E(X-Y)=\mu_X-\mu_Y$.
2.	Let $a_i$ be constants (real numbers) and $E(X_i)=\mu_i$, $i=1,2,...,n$. Then $E(\sum_{i=1}^{n}a_iX_i)=\sum_{i=1}^{n}a_i\mu_i$. In particular, $E(\sum_{i=1}^{n}X_i)=\sum_{i=1}^{n}E(X_i)$.
3.	Let $X_1, X_2,...,X_n$ be random variables which have mean $\mu$. (You can imagine these being some sample results from an experiment such as recording the number of occupants in cars traveling over a toll bridge.) The sample mean is $\bar{X}=\frac{1}{n}\sum_{i=1}^{n}X_i$. Then $E(\bar{X})=\mu$.

#### Results for covariances:

1.	$Cov(X,X)=E[(X-\mu_X)(X-\mu_X)]=E[(X-\mu)^2]=Var(X)$
2.	$Cov(aX+bY,cU+dV)=acCov(X,U)+adCov(X,V)+bcCov(Y,U)+bdCov(Y,V)$ where $a,b,c,d$ are constants.

#### Results for variance:

1.	Variance of a linear combination
$$Var(aX+bY)=a^2Var(X)+b^2Var(Y)+2abCov(X,Y)$$
2.	Variance of a sum of independent random variables: Let $X$ and $Y$ be independent. Since $Cov(X,Y)=0$, result 1. gives
$$Var(X+Y)=\sigma_X^2+\sigma_Y^2$$
that is, for independent variables, the variance of a sum is the sum of the variance. Also note
$$Var(X-Y)=\sigma_X^2+(-1)^2\sigma_Y^2=\sigma_X^2+\sigma_Y^2$$
3.	Variance of a general linear combination of random variables: Let $a_i$ be constants and $Var(X_i)=\sigma_i^2$. Then
$$Var(\sum_{i=1}^{n}a_iX_i)=\sum_{i=1}^{n}\sigma_i^2 \sigma_i^2+2\sum_{i=1}^{n}\sum_{j=i+1}^{n}a_i a_j Cov(X_i, X_j)$$
This is a generalization of result 1, and can be proved using either of the methods used for 1.
4.	Variance of a linear combination of independent random variables: Special cases of result 3. are:
	1.	If $X_1,...,X_n$ are independent then $Cov(X_1,X_j)=0$, so that
		$$Var(\sum_{i=1}^{n}a_iX_i)=\sum_{i=1}^{n}\sigma_i^2\sigma_i^2$$
	2.	If $X_1,...,X_n$ are independent and all have the same variance $\sigma^2$, then
		$$Var(\bar{X})=\frac{\sigma^2}{n}$$

#### Remark

This result is a very important one in probability and statistics. To recap, it says that if $X_1,...,X_n$ are independent random variables with the same mean $\mu$ and the same variance $\sigma^2$, then the sample mean $\bar{X}=\frac{1}{n}\sum_{i=1}^{n}X_i$ has $E(\bar{X})=\mu$ and $Var(\bar{X})=\frac{\sigma^2}{n}$.

## 9.6 Linear Combinations of Independent Normal Random Variables

#### Theorem: Linear Combinations of Independent Normal Random Variables

1.	Let $X\backsim N(\mu,\sigma^2)$ and $Y=aX+b$, where $a$ and $b$ are constant real numbers. Then $Y\backsim N(a\mu+b,a^2\sigma^2)$
2.	Let $X\backsim N(\mu_1,\sigma_1^2)$ and $Y\backsim N(\mu_2,\sigma_2^2)$ independently, and let $a$ and $b$ be constants. Then $aX+bY\backsim N(a\mu_1+b\mu_2,a^2\sigma_1^2+b^2\sigma_2^2)$.
3.	Let $X_1,...,X_n$ be independent $N(\mu,\sigma^2)$ random variables. Then $\sum_{i=1}^{n}X_i\backsim N(n\mu,n\sigma^2)$ and $\bar{X}\backsim N(\mu,\sigma^2/n)$.

## 9.7 Indicator Random Variables

The results for linear combinations of random variables provide a way of breaking up more complicated problems, involving mean and variance, into simpler pieces using indicator variables; an indicator variable is just a binary variable (0 or 1) that indicates whether or not some event occurs.

#### Remark

If $X_i$ is a binary random variable with $P(X_i=1)=p=1-P(X_i=0)$ then $E(X_i)=p$ and $Var(X_i)=p(1-p)$. In some problems that $X_i$'s are not independent, and then we also need covariances.

**Consult the examples in the text book: page 221 to 225. Examples are not illustrated here as there is no significant amount of notes.**