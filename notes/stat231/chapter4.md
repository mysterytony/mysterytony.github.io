# Chapter 4: Estimation

## 4.1 Statistical Models and Estimation

In statistical estimation we use two models:

1.	A model for variation in the population or process being studied which includes the attributes which are to be estimated
2.	A model which takes in to account how the data were collected and which is constructed in conjunction with the model in (1)

We use these two models for estimating the unknown attributes based on the observed data and determining the uncertainty in the estimates. The unknown attributes are usually represented by unknown parameters $\theta$ in the models or by functions of the unknown parameters. We have already seen in Chapter 2, that these unknown parameters can be estimated using the method of maximum likelihood and invariance property of maximum likelihood estimates.

Several issues arise:

1.	Where do we get our probability model? What if it is not a good description of the population or process?
2.	The estimation of parameters or population attributes depends on data collected from the population or process, and the likelihood function is based on the probability of the observed data. This implies that factors associated with the selection of sample units or the measurement of variates (e.g. measurement error) must be included in the model.
3.	Suppose in the model chosen the population mean is represented by the parameter $\theta$. The sample mean $\bar{y}$ is an estimate of $\theta$, but not usually equal to it. How far away from $\theta$ is $\bar{y}$ likely to be?

## 4.2 Estimators and Sampling Distributions

Suppose that some attribute of interest for a population or process can be represented by a parameter $\theta$ in a statistical model. We assume that $\theta$ can be estimated using a random sample drawn from the population or process in question. Recall in Chapter 2, that a point estimate of $\theta$, denoted $\hat{\theta}$, was defined as a function of the observed sample $y_1,...,y_n$,

$$\hat{\theta}=g(y_1,...,y_n)$$

For example,

$$\hat{\theta}=\bar{y}=\frac{1}{n}\sum_{i=1}^{n}y_i$$

is a point estimate of $\theta$ if $y_1,...,y_n$ is an observed random sample from a Poisson distribution with mean $\theta$.

For method of maximum likelihood provides a general method for obtaining estimates, but other method exist. For example, if $\theta=E(Y)=\mu$ is the average value of $y$ in the population, then the sample mean $\bar{\theta}=\hat{y}$ is an intuitively sensible estimate; it is the maximum likelihood estimate of $\theta$ if $Y$ has a $G(\theta, \sigma)$ distribution but because of Central Limit Theorem it is a good estimate of $\theta$ more generally.

The problem facing us in this chapter is how to determine or quantify the uncertainty in an estimate. We do this using **sampling distribution**, which are based on the following idea. If we select random samples on repeated occasions, then the estimates $\hat{\theta}$ obtained from the different samples may vary.

More precisely, we define the idea as follows. Let the random variables $Y_1,...Y_n$ represent the observations in a random sample, and associate with the estimate $\hat{\theta}$ given by a random variable

$$\tilde{\theta} = \bar{Y} = \frac{1}{n}\sum_{i=1}^{n}Y_i$$

is a random variable and $\hat{\theta} = \bar{y}$ is a numerical value. We call $\tilde{\theta}$ the **estimator** of $\theta$ corresponding to $\hat{\theta}$ (We will always use $\hat{\theta}$ to denote an estimate, that is, a numerical value, and $\tilde{\theta}$ to denote the corresponding estimator, the random variable).

#### Definition 22

A (point) **estimator** $\tilde{\theta}$ is a random variable which is a function $\tilde{\theta}(Y_1,...,Y_n)$ of the random variables $Y_1,...,Y_n$. The distribution of $\tilde{\theta}$ is called the **sampling distribution of the estimator**.

Since $\tilde{\theta}$ is a function of the random variables $Y_1,...,Y_n$ we can find its distribution, at least in principle. Two ways to do this are (i) using mathematics and (ii) by computer simulation. Once we know the sampling distribution of an estimator $\tilde{\theta}$ when we are in a position to express the uncertainly in an estimate.

#### Example 4.2.1

Suppose we have a variate of interest (for example, the height in meters of a male in the population) whose distribution it is reasonable to model as a $G(\mu, \sigma)$ random variable. Suppose also that we plan to take a random sample $Y_1,...Y_n$ to estimate the unknown mean $\mu$ where $Y_i\sim G(\mu, \sigma)$, $i=1,2,...$. The maximum likelihood estimator of $\mu$ is

$$\tilde{\mu}=\bar{Y}=\frac{1}{n}\sum_{i=1}^{n}Y_i$$

where $\bar{Y}\sim G(\mu, \sigma/\sqrt{n})$. If we knew $\sigma$ we could determine how often the estimator $\tilde{\mu}=\bar{Y}$ is within a specified amount of the mean.

For example, if the variate is height and heights are measured in meters than we could determine how often the estimator $\tilde{\mu}=\bar{Y}$ is with in 0.01 meters of the true mean $\mu$ as follows:

$$P(|\tilde{\mu}-\mu|\leq 0.01)=P(\mu-0.01\leq\bar{Y}\leq\mu +0.01)=P(-0.01\sqrt{n}/\sigma \leq Z \leq 0.01\sqrt{n}/\sigma)$$

where $Z=(\bar{Y}-\mu)/(\sigma/\sqrt{n})\sim G(0,1)$

Suppose $\sigma = 0.07$ meters. If $n=50$ then

$$P(\tilde{\mu}-\mu|\leq 0.01)=P(-1.01\leq Z\leq 1.01)=0.688$$

and if $n=100$

$$P(|\tilde{\mu}-\mu|\leq 0.01)=P(-1.43\leq Z\leq 1.43) = 0.847$$

This illustrates the rather the intuitive fact that, the larger the sample size, the higher the probability the sample mean is within 0.01 meters of the true but unknown mean height $\mu$ in the population. It also allows us to express the uncertainty in an estimate $\hat{\mu}=\bar{y}$ from an observed sample $y_1,...,y_n$ by indicating the probability that any single random sample will given estimate within a certain distance of $\mu$.

#### Example 4.2.2

In the Example 4.2.1 we were able to determine the distribution of the estimator exactly, using properties of Gaussian random variables. We will also see that sometimes the approximate distribution of the estimator can be determined using the Central Limit Theorem. In some cases we need to use simulation to study the distribution. For example, suppose we have a random sample $y_1,...y_n$ which we have assumed comes from an Exponential$(\theta)$ distribution. The maximum likelihood estimate of $\theta$ is $\hat{\theta}=\bar{y}$. What is the sampling distribution of the estimator $\tilde{\theta}=\bar{Y}$? If $n=15$ we cannot use the Central Limit Theorem. Instead we examine the sampling distribution using simulation. This involves taking repeated samples $y_1,...,y_n$ given (possibly different) values of $bar{y}$ for each samples as follows:

1.	Generate a sample of size $n$. In $R$ this is done using the statement `y<-rexp(n,1/$\theta$)`.
2.	Compute $\hat{\mu}=\bar{y}$ from the sample. In $R$ this is done using the statement `ybar<-mean(y)`.

Repeat these two steps $k$ times. The $k$ values $\bar{y}_1,....,\bar{y}_k$ can then be considered as a sample from the distribution of $\tilde{\theta}$, and we can study the distribution by plotting a histogram of the values.

The approach illustrated in the preceding example can be used more generally. The main idea is that, for a given estimator $\tilde{\theta}$, we need to determine its sampling distribution in order to be able to compute probabilities of the from $P(|\tilde{\theta}-\theta|\leq \Delta)$ so that we can quantify the uncertainty of the estimate.

The estimates and estimators we have discussed so far are often referred to as **point estimates** and **point estimators**. This is because they consist of a single value or point. The discussion of sampling distributions shows how to address the uncertainty in an estimate. We also usually prefer to indicate explicitly the uncertainty in the estimate. This leads to the concept of an **interval estimate**, which takes the form

$$\[L(\mathbf{y}),U(\mathbf{y})\]$$

where $L(\mathbf{y})$ and $U(\mathbf{y})$ are functions of the observed data $\mathbf{y}$. Notice that this provides an interval with endpoints $L$ and $U$ both of which depends on the data. In we let $L(\mathbf{Y})$ and $U(\mathbf{Y})$ represent the associated random variables then $\[L(\mathbf{y}),U(\mathbf{y})\]$ is a random interval. The probability that the parameter falls in this random interval is $P\[L(\mathbf{Y}) \leq \theta \leq U(\mathbf{Y})\]$ and hopefully this probability is large. This probability gives an indication how good the rule is by which the interval estimate was obtained. For example if $P\[L(\mathbf{Y}) \leq \theta \leq U(\mathbf{Y})\] = 0.95$ then this means that $95\%$ of the time, the true value of the parameter falls in the interval $\[L(\mathbf{y}),U(\mathbf{y})\]$ constructed from the data set $\mathbf{y}$. This means we can be reasonably safe in assuming, on this occasion, and for this data set, it does so. In general, uncertainty in an estimate is explicitly sated by giving the interval estimate along with the probability $P(\theta\in\[L(\mathbf{Y}),U(\mathbf{Y})])$.

## 4.3 Interval Estimation Using the Likelihood Function

The likelihood function can be used to obtain interval estimates for parameters in a very straightforward way. We do this here for the case in which the probability model involves only a single scalar parameter $\theta$. Individual models often have constraints on the parameters. For example in the Gaussian distribution, the mean can be any real number $\mu\in\mathbb{R}$ but the standard deviation must be positive, that is, $\sigma>0$. Similarly for the Binomial model the probability of success must lie in the interval $\[0,1\]$. These constraints are usually identified by requiring that the parameter falls in some set $\Omega$, called the **parameter space**.

#### Definition 23

Suppose $\theta$ is scalar and that some observed data (say a random sample $y_1,...,y_n$) have given a likelihood function $L(\theta)$. The **relative likelihood function** $R(\theta)$ is defined as

$$R(\theta)=\frac{L(\theta)}{L(\hat{\theta})} \quad \text{for } \theta\in\Omega$$

where $\hat{\theta}$ is the maximum likelihood estimate and $\Omega$ is the parameter space. Note that

$$0\leq R(\theta) \leq 1 \quad \text{for all } \theta\in\Omega$$

#### Definition 24

A $100 p \%$ likelihood interval for $\theta$ is the set $\\\{\theta : R(\theta)\geq p\\\}$.

Actually, $\\\{\theta : R(\theta)\geq p\\\}$ is not necessarily an interval unless $R(\theta)$ is unimodal, but this is the case for all models that we consider here. The motivation for this approach is that the values of $\theta$ that give large values of $L(\theta)$ and hence $R(\theta)$, are the most plausible in light of the data. The main challenge is to decide what $p$ to choose; we show later that choosing $p\in\[0.10,0.15\]$ is often useful. 

#### Example 4.3.1 Polls

Let $\theta$ be the proportion of people in a large population who have a specific characteristic. Suppose $n$ persons are randomly selected for a poll and $y$ people are observed to have the characteristic of interest. If we let $Y$ be the number who have the characteristic, then $Y\sim\text{Binomial}(n,\theta)$ is a reasonable model. As we have seen previously the likelihood function is

$$L(\theta)={n \choose y}\theta^y(1-\theta)^{n-y} \quad \text{for } 0<\theta <1$$

and the maximum likelihood estimate of $\theta$ is the sample proportion $\hat{\theta}=y/n$. The relative likelihood function is

$$R(\theta)=\frac{\theta^y(1-\theta)^{n-y}}{\hat{\theta}^y(1-\hat{\theta})^{n-y}} \quad \text{for } 0<\theta<1$$

#### Definition 15

The **log relative likelihood function** is

$$r(\theta)=\log R(\theta)=\log \left\[\frac{L(\theta)}{L(\hat{\theta})}\right\] = l(\theta)-l(\bar{\theta}) \quad \text{for }\theta\in\Omega$$

where $l(\theta)=\log L(\theta)$ is the log likelihood function.

It is often more convenient to compute $r(\theta)$ instead of $R(\theta)$ and to compute a $100p\%$ likelihood interval using the fact that $R(\theta)\geq p$ if and only if $r(\theta)\geq \log p$. While both plots are unimodal and have identical locations of the maximum, they differ in terms of the shape. The plot of the relative likelihood function resembles a Normal probability density function in shape while that of the log relative likelihood resembles a quadratic function of $\theta$. Likelihood intervals become narrower as the sample size increase, which reflects the fact that larger samples contain more information about $\theta$. Likelihood intervals cannot usually be found explicitly. 

*	Values of $\theta$ inside a $50\%$ likelihood interval are very plausible in light of the observed data.
*	Values of $\theta$ inside a $10\%$ likelihood interval are plausible in light of the observed data.
*	Values of $\theta$ outside a $10\%$ likelihood interval are implausible in light of the observed data.
*	Values of $\theta$ outside a $1\%$ likelihood interval are very implausible in light of the observed data.

The one apparent shortcoming of likelihood intervals so far is that we do not know how probable it is that a given interval will contain the true parameter value. As a result we also do have have a basis for the choice of $p$.

## 4.4 Confidence Intervals and Pivotal Quantities

Suppose we assume that the model chosen for the data $\mathbf{y}$ is correct and that the interval estimate for the parameter $\theta$ is given by $\[L(y),U(y)\]$. To quantify the uncertainty in the interval estimate we look at an important property of the corresponding interval estimator $\[L(Y),U(Y)\]$ called the **coverage probability** which is defined as follows.

#### Definition 26

The value

$$C(\theta)=P\[L(Y)\leq \theta \leq U(Y)\]$$

is called the **coverage probability** for the interval estimator $\[L(Y),U(Y)\]$.

The parameter $\theta$ is an unknown fixed constant associated with the population. It is not random variable and therefore does not have a distribution. Suppose we were about to draw a random sample of the same size from the same population and the true value of the parameter was $\theta$. Suppose also that we knew that we would construct an interval of the form $\[L(y),U(y)\]$ once we had collected the data. Then the probability that $\theta$ will be contained in this new interval is $C(\theta)$.

#### Definition 27

A $100p\%$ confidence interval for a parameter is an interval estimate $\[L(y),U(y)\]$ for which

$$P\[L(Y)\leq \theta \leq U(Y)\]=p$$

where $p$ is called the confidence coefficient.

If $p=0.95$ indicates that $95\%$ of the samples that we would draw from this model result in an interval which includes the true value of the parameter. This gives us some confidence that for a particular sample, such as the one at hand, and true value of the parameter is contained in the interval.

#### Example 4.4.1 Gaussian distribution with known standard deviation

Suppose $Y_1,...,Y_n$ is a random sample from a $G(\mu,1)$ distribution, that is, $\mu=E(Y_i)$ is unknown but $sd(Y_i)=1$ is known. Consider the interval

$$\[\bar{Y}-1.96n^{-1/2},\bar{Y}+1.96n^{-1/2}\]$$

where $\bar{Y}=\frac{1}{n}\sum_{i=1}^{n}Y_i$ is the sample mean. Since $\bar{Y}\sim G(\mu, 1/\sqrt{n})$, then $P=0.95$.

Thus, the interval is a 95% confidence interval for the unknown mean $\mu$. This is an example in which the confidence coefficient does not depend on the unknown parameter, an extremely desirable feature of an interval estimator.

### Pivotal Quantities

#### Definition 28

A pivotal quantity $Q=Q(Y;\theta)$ is a function of the data $Y$ and the unknown parameter $\theta$ such that the distribution of the random variable $Q$ is fully known. That is, probability statements such as $P(Q\geq a)$ and $P(Q\leq b)$ depends on $a$ and $b$ but not on $\theta$ or any other unknown information.

We now describe how a pivotal quantity can be used to construct a confidence interval. We begin with the statement $P\[a\leq Q(Y;\theta) \leq b\]=p$ where $Q(Y;\theta)$ is a pivotal quantity whose distribution is completely known. Suppose that we can re-express the inequality $a\leq Q(Y;\theta) \leq b$ in the form $L(Y)\leq \theta \leq U(Y)$ for some functions $L$ and $U$. Then since

$$\begin{align\*} p &= P\[a\leq Q(Y;\theta) \leq b\] \\\
&= P\[L(Y)\leq \theta \leq U(Y)\] \\\
&= P(\theta\in \[L(Y), U(Y)\])\end{align\*}$$

the interval $\[L(y),U(y)\]$ is a $100p\%$ confidence interval for $\theta$. The confidence coefficient for the interval $\[L(y),U(y)\]$ is equal to $p$ which does not depend on $\theta$. The confidence coefficient does depend on $a$ and $b$, but there are determined by the known distribution of $Q(Y;\theta)$.

## 4.5 The Chi-squared and $t$ Distributions

In this section we introduce two new distributions, the Chi-squared distribution and the Student $t$ distribution. These two distributions play an important role in constructing confidence intervals and the tests of hypotheses to be discussed in Chapter 5.

### The $\mathcal{X}^2$ (Chi-squared) Distribution

To define the Chi-squared distribution we first recall the Gamma function and its properties:

$$\Gamma(\alpha) = \int_{0}^{\infty} y^{\alpha-1}e^{-y}dy \quad \text{for } \alpha > 0$$

#### Properties of the Gamma Function:

1.	$\Gamma(\alpha)=(\alpha-1)\Gamma(\alpha-1)$
2.	$\Gamma(\alpha)=(\alpha-1)! \quad \text{for } \alpha = 1,2,3...$
3.	$\Gamma(1/2)=\sqrt{\pi}$

The $\mathcal{X}^2(k)$ distribution is a continuous family of distributions on $(0,\infty)$ with probability density function of the form

$$f(x;k)=\frac{1}{2^{k/2}\Gamma(k/2)}x^{(k/2)-1}e^{-x/2} \quad \text{for } x > 0$$

where $k \in \\\{1,2,...\\\}$ is a parameter of the distribution. We write $X\sim \mathcal{X}^2{k}$. The parameter $k$ is referred to as the **"degrees of freedom"** (d.f.) parameter. For $k=2$, the probability density function is the Exponential $(2)$ probability density function. For $k>2$, the probability density function is unimodal with maximum value at $x=k-2$. For values of $k>30$, the probability density function resembles that of a $N(k,2k)$ probability function.

The cumulative distribution function, $F(x;k)$, can be given in closed algebraic form for even values of $k$.

If $X \sim \mathcal{X}^2 (k)$ then

$$E(X)=k \quad \text{and} \quad Var(X)=2k$$

#### Theorem 29

Let $W_1,...,W_n$ be independent random variables with $W_i \sim \mathcal{X}^2 (k_i)$. Then 

$$S=\sum_{i=1}^n W-i \sim \mathcal{X}^2 \left( \sum_{i=1}^n k_i \right)$$

#### Theorem 30

If $Z \sim G(0,1)$ then the distribution of $W = Z^2$ is $\mathcal{X}^2 (1)$

#### Corollary 31

If $Z_1,...,Z_n$ are mutually independent $G(0,1)$ random variables and $S=\sum_{i=1}^n Z_i^2$, then $S\sim \mathcal{X}^2(n)$.

### Student's $t$ Distribution

Student's $t$ distribution (or more simply the $t$ distribution) has probability density function

$$f(t;k)=c_k(1+\frac{t^2}{k})^{-(k+1)/2} \quad \text{for } t\in\mathbb{R} \quad \text{and } k= 1,2,...$$

where the constant $c_k$ is given by

$$c_k \frac{\Gamma(\frac{k+1}{2})}{\sqrt{k\pi}\Gamma(\frac k2)}$$

The parameter $k$ is call the **degree of freedom**. We write $T\sim t(k)$ to indicate that the random variable $T$ has a Student $t$ distribution with $k$ degrees of freedom.

The $t$ probability density function is similar to that of the $G(0,1)$ distribution in several respects: it is symmetric about the origin, it is unimodal, and indeed for large value of $k$, the graph of the probability density function $f(t;k)$ is indistinguishable from that of the $G(0,1)$ probability density function. The primary difference, for small $k$, is in the tail of the distribution. The $t$ probability density function has fatter "tails" or more area in the extreme left and right tails.

The $t$ distribution arises as a result of the following theorem involving the ratio of a $N(0,1)$ random variable and an independent Chi-squared random variable.

#### Theorem 32

Suppose $Z \sim G(0,1)$ and $U \sim X^2(k)$ independently. Let

$$T=\frac{Z}{\sqrt{U/k}}$$

Then $T$ has **Student's $t$ distribution with $k$ degrees of freedom**.

## 4.6 Likelihood-Based Confidence Intervals

We will now show that likelihood intervals are also confidence intervals. Recall the relative likelihood

$$R(\theta) = \frac{L(\theta)}{L(\hat{\theta})}$$

is a function of the maximum likelihood estimate $\hat{\theta}$. Replace the estimate $\hat{\theta}$ by the random variable (the estimator) $\tilde{\theta}$ and define the random variable $\Lambda (\theta)$

$$\Lambda(\theta) = -2\log \left\[ \frac{L(\theta)}{L{\tilde{\theta}}} \right\]$$

where $\tilde\theta$ is the maximum likelihood estimator. The random variable $\Lambda(\theta)$ is called the **likelihood ratio statistic**. The following theorem implies that $\Lambda(\theta)$ is an asymptotic pivotal quantity.

#### Theorem 33

If $L(\theta)$ is based in $Y=(Y_1,...,Y_n)$, a random sample of size $n$, and if $\theta$ is the true value of the scalar parameter, then (under mild mathematical conditions) the distribution $\Lambda(\theta)$ converges to a $\mathcal{X}^2(1)$ distribution as $n\rightarrow \infty$.

This theorem means that $\Lambda(\theta)$ can be used as a pivotal quantity for sufficiently large $n$ in order to obtain approximate confidence interval for $\theta$.

#### Theorem 34

A $100p\%$ likelihood interval in an approximately $100q\%$ where $q=2P(Z \leq \sqrt{-2\log p})-1$ and $Z\sim N(0,1)$.

#### Theorem 35

If $a$ is a value such that

$$p=2P(Z\leq a)-1 \quad \text{where } Z \sim N(0,1)$$

then the likelihood interval $\\\{\theta: R(\theta) \geq e^{-a^2/2}\\\}$ is an approximate $100p\%$ confidence interval.

## 4.7 Confidence Interval for Parameters in the $G(\mu, \sigma)$ Model

Suppose that $Y\sim G(\mu, \sigma)$ models a response variate $y$ in some population or process. A random sample $Y_1,...,Y_n$ is selected, and we want to estimate the model parameters. We have already seen that the maximum likelihood estimators of $\mu$ and $\sigma^2$ are

$$\tilde{\mu} = \bar{Y} = \frac 1n \sum_{i=1}^n Y_i \quad \text{and} \quad \tilde{\sigma}^2 = \frac 1n \sum_{i=1}^n (Y_i-\bar{Y})^2 $$

A closely related point estimator of $\sigma^2$ is the sample variance,

$$S^2 = \frac 1 {n-1} \sum_{i=1}^n (Y_i-\bar{Y})^2$$

which differs from $\sigma^2$ only by the choice of denominator. Indeed if $n$ is large there is very little difference between $S^2$ and $\tilde{\sigma}^2$. Note that the sample variance has the advantage that it is an "unbiased" estimator, that is, $E(S^2)=\sigma^2$. This follows since

$$E\[(Y_i-\mu)^2\]=Var(Y_i)=\sigma^2 \quad E\[(\bar{Y}-\mu)^2\]=Var(\bar{Y})=\frac {\sigma^2} n$$

and

$$E(S^2) = \sigma^2$$

### Confidence Intervals for $\mu$

If $\sigma$ were known then

$$Z=\frac{\bar{Y}-\mu}{\sigma / \sqrt{n}} \sim G(0,1)$$

would be a pivotal quantity that could be used to obtain confidence intervals for $\mu$. However, $\sigma$ is generally unknown. Fortunately it turns out that if we simply replace $\sigma$ with either the maximum likelihood estimator $\tilde{\sigma}$ or the sample variance $S$ in $Z$, then we still have a pivotal quantity. We will write the pivotal quantity in terms of $S$. The pivotal quantity is

$$T=\frac{\bar{Y}-\mu}{S/\sqrt{n}}$$

Since $S$, unlike $\sigma$, is a random variable the distribution $T$ is no longer $G(0,1)$. The random variable $T$ actually has a $t$ distribution.


#### Theorem 36

Suppose $Y_1,...,Y_n$ is a random sample from the $G(\mu, \sigma)$ distribution with sample mean $\bar{Y}$ and sample variance $S^2$. Then

$$T=\frac{\bar{Y}-\mu}{S/\sqrt{n}} \sim t(n-1)$$

In other words if we replace $\sigma$ in the pivotal quantity by its estimator $S$, the distribution of the resulting pivotal quantity has a $t(n-1)$ distribution rather than a $G(0,1)$ distribution. The degrees of freedom are inherited from the degrees of freedom of the Chi-squared random variable $U$ or from $S^2$.

We now show how to use the $t$ distribution to obtain a confidence interval for $\mu$ when $\sigma$ is unknown. Since it has a $t$ distribution with $n-1$ degrees of freedom which is a completely known distribution, we can use this pivotal quantity to construct a $100p\%$ confidence interval for $\mu$. Since $t$ distribution is symmetric we determine the constant $a$ such that $P(-a\leq T\leq a)=p$ using the $t$ table.

$$
\begin{align\*}
p &= P(-a \leq T \leq a) \\\
&= P\left(-a \leq \frac{\bar{Y}-\mu}{S/\sqrt{n}} \leq a\right) \\\
&= P(\bar{Y} -aS/\sqrt{n} \leq \mu \leq \bar{Y} + aS/\sqrt{n})
\end{align\*}
$$

a $100p\%$ confidence interval for $\mu$ is given by

$$\[ \bar{y} - as/sqrt{n}, \bar{y} + as/sqrt{n}\]$$

As usual the method used to construct this interval implies that $100p\%$ of the confidence intervals constructed from samples drawn from this population contain the true value of $\mu$.

We note that this interval is of the form $\mu \pm as/\sqrt{n}$ or

$$\text{estimate } \pm a \times \text{ estimated standard deviation of estimator}$$

Recall that a confidence interval for $\mu$ in the case of a $G(\mu, \sigma)$ population when $\sigma$ is known has a similar form

$$\text{estimate } \pm a \times \text{ standard deviation of estimator}$$

except that the standard deviation of the estimator is known in this case and the value of $a$ is taken from a $G(0,1)$ distribution rather than the $t$ distribution.

### Behavior as $n\rightarrow\infty$

As $n$ increases, confidence intervals behave in a largely predictable fashion. First the estimated standard deviation gets closer to the true standard deviation $\sigma$. Second as the degree of freedom increase, the $t$ distribution approaches the Gaussian so that the quantiles of the $t$ distribution approach that of the $G(0,1)$ distribution.

### Sample size required for a given width of confidence interval for $\mu$

If we know the value of $\sigma$ approximately, we can determine the value of $n$ needed to make a $95\%$ confidence interval a given length. This is used in deciding how large a sample to take in a future study. A $95\%$ confidence interval using the Normal quantiles takes the form $y \pm 1.96\sigma/\sqrt{n}$. If we wish a $95\%$ confidence interval of the form $\bar{y} \pm d$ (the width of the confidence interval is then $2d$), we should choose

$$n\approx (1.96\sigma/d)^2$$

We would usually choose $n$ a little larger than this formula gives to accommodate the fact that we used Normal quantiles rather than the quantiles of the $t$ distribution which are larger in value.

### Confidence Intervals for $\sigma^2$ and $\sigma$

Suppose that $Y_1,...,Y_n$ is random sample from the $G(\mu, \sigma)$ distribution. We have seen that there are two closely related estimators for the population variance, $\tilde{\sigma}^2$ and the sample variance $S^2$. We use $S^2$ to build a confidence interval for the parameter $\sigma^2$. Such a construction depends on the following result.

#### Theorem 37

Suppose $Y_1,...,Y_n$ is a random sample from the $G(\mu, \sigma)$ distribution with sample variance $S^2$. Then the random variable

$$\frac{(n-1)S^2}{\sigma^2} = \frac{1}{\sigma^2} \sum_{i=1}^{n} (Y_1-\bar{Y})^2$$

has a Chi-squared distribution with $n-1$ degrees of freedom.

We will now show how we can use Theorem 37 to construct a $100\%$ confidence interval for the parameter $\sigma^2$ or $\sigma$. First note that it is a pivotal quantity since its distribution is completely known. Using Chi-table to find constants $a$ and $b$ such that

$$P(a \leq U \leq b)=p$$

where $U\sim \mathcal{X}^2(n-1)$. Since

$$
\begin{align\*}
p &= P(a \leq U \leq b) \\\
&= P\left( \sqrt{\frac{(n-1)S^2}{b}} \leq \sigma \leq \sqrt{\frac{(n-1)S^2}{1}} \right)
\end{align\*}
$$

a $100\%$ confidence interval for $\sigma^2$ is

$$\left\[ \frac{(n-1)s^2}{b} , \frac{(n-1)s^2}{a} \right\]$$

and a $100p\%$ confidence interval for $\sigma$ is

$$\left\[ \sqrt{\frac{(n-1)s^2}{b}} , \sqrt{\frac{(n-1)s^2}{a}} \right\]$$

As usual the choice for $a$ $b$ is not unique. For convenience, $a$ and $b$ are usually chosen such that

$$P(U\leq a)=P(U > b) = \frac{1-p} 2$$

where $U\sim \mathcal{X}^2(n-1)$

Note that, unlike confidence intervals for $\mu$, the confidence interval for $\sigma^2$ is not symmetric about $s^2$, the estimator of $\sigma^2$. This happens of course because $\mathcal{X}^2(n-1)$ distribution is not symmetric.

In some application we are interested in an upper bound on $\sigma$ (because small $\sigma$ is "good" in some sense). In this case we take $b=\infty$ and find $a$ such that $P(a \leq U)=p$ or $P(U \leq a)=1-p$ so that a one-sided $100p\%$ confidence interval for $\sigma$ is

$$\left\[0 , \sqrt{\frac{(n-1)s^2}{a}} \right\]$$

### Prediction Interval for a Future Observation

In chapter 3 23 mentioned that a common type of statistical problem was a predictive problem in which the experimenter wishes to predict the response of a variate for a given unit. This is often the case in finance or in economics. For example, financial institutions need to predict the price of a stock or interest rate in a week or a month because this effects the value of their investments. We will not show how to do this in the case where the Gaussian model for the data is valid.

Suppose that $y_1,...,y_n$ is an observed random sample from a $G(\mu, \sigma)$ population and that $Y$ is an new observation which is to be drawn at random from the same $G(\mu, \sigma)$ population. We want to estimate $Y$ and obtain an interval of values for $Y$. As usual we estimate the unknown parameter $\mu$ and $\sigma$ using $\hat{\mu}=\bar{y}$ and $s$ respectively. Our best point estimate of $Y$ based on the data we have already observed is $\hat{\mu}$ with corresponding estimator $\tilde{\mu}=\bar{Y}\sim N(\mu, \sigma^2/n)$. To obtain an interval of values for $Y$ we note that $Y\sim G(\mu, \sigma)$ independently of $\tilde{\mu}=\bar{Y}\sim n(\mu, \sigma^2/n)$. Since $E(Y-\tilde{\mu})=\mu-\mu=0$ and $Var(Y-\tilde{\mu})=\sigma^2+\sigma^2/n$ therefore

$$Y-\tilde{\mu}=Y-\bar{Y} \sim N\left( 0, \sigma^2\left( 1+\frac 1n \right) \right)$$

Also

$$\frac{Y-\bar{Y}}{S\sqrt{1+\frac 1n}} \sim t(n-1)$$

is a pivotal quantity which can be used to obtain an interval value for $Y$. Let $a$ be the value such that $P(-a \leq T \leq a)=p$ which is obtained from $t$ table.

Therefore

$$\left\[ \bar{y}-as\sqrt{1+\frac 1n}, \bar{y}+as\sqrt{1+\frac 1n} \right\]$$

is an interval of values for the future observation $Y$ with confidence coefficient $p$. The interval is called a $100p\%$ **prediction interval** instead of a confidence interval since $Y$ is not a parameter but a random variable. Note that the interval is wider than a $100p\%$ confidence interval for mean $\mu$. This makes sense since $mu$ is an unknown constant with no variability while $Y$ is a random variable with its own variability $\sigma^2$.