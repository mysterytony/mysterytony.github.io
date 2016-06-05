# Chapter 4: Estimation

## 4.1 Statistical Models and Estimation

In statistical estimation we use two models:

1.	A model for variation in the population or process being studied which includes the attributes which are to be estimated
2.	A model which takes in to account how the data were collected and which is constructed in conjunction which the model in (1)

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

where $\bar{Y}\sim G(\mu, \sigma/\sqrt{n})$. If we knew $\sigma$ we could determine how often the estimator $\tilde{\mu}=\bar{Y}$ is within s specified amount of the mean.

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

A $100\%$ likelihood interval for $\theta$ is the set $\{\theta : R(\theta)\geq p\}$.

Actually, $\{\theta : R(\theta)\geq p\}$ is not necessarily an interval unless $R(\theta)$ is unimodal, but this is the case for all models that we consider here. The motivation for this approach is that the values of $\theta$ that give large values of $L(\theta)$ and hence $R(\theta)$, are the most plausible in light of the data. The main challenge is to decide what $p$ to choose; we show later that choosing $p\in\[0.10,0.15\]$ is often useful. 

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

If $p=0.95$ indicates that $95\%$ of the samples that we would draw from this model result in an interval which includes the true value of the parameter. This gives us some confidence that for a particular sample, such as the one at ahnd, and true value of the parameter is contained in the interval.

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

---
end page 121