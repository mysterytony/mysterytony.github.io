# Chapter 5: Tests of Hypotheses

## 5.1 Introduction

What does it mean to test a hypothesis in the light of observed data or information? When studying tests of hypothesis it is helpful to draw an analogy with the criminal court system used in many places in the world, where the two hypothesis "the defendant is innocent" and "the defendant is guilty" are not treated symmetrically. In these courts, the court assumes a priori that the first hypothesis, "the defendant is innocent" is true, and then the prosecution attempts to find sufficient evidence to show that this hypothesis of innocence is not plausible. There is no requirement that the defendant be proved innocent. At the end of the trial the judge or jury may conclude that there was insufficient evidence for a finding of guilty and the defendant is then exonerated. Of course there are two types of errors that this system can (and inevitably does) make; convict an innocent defendant or fail to convict a guilty defendant. The two hypotheses are usually not given equal weight a priori because these two errors have very different consequences.

Statistical tests of hypotheses are analogous to this legal example. We often begin by specifying a single "default" hypothesis ("the defendant is innocent" in the legal context) and then check whether the data collected is unlikely under this hypothesis. This default hypothesis is often referred to as the "null" hypothesis and is denoted $H_0$ ("null" is used because it often means a new treatment has no effect). Of course, there is an alternative hypothesis, which may not always be specified. In many cases the alternative hypothesis is simple that $H_0$ is not true.

We will outline the logic of tests of hypotheses in the first example, the claim that I have ESP. In an effort to prove or disprove this claim, an unbiased observer tosses a fair coin 100 times and before each toss I guess the outcome of the toss. We count $Y$, the number of correct guesses which we can assume has a Binomial distribution with $n=100$. The probability that I guess the outcome correctly on a given toss is an unknown parameter $\theta$. If I have no unusual ESP capacity at all, then we would assume $\theta=0.5$, whereas if I have some form of ESP, either a positive attraction or an aversion to the correct answer, then we expect $\theta \neq 0.5$. We begin by asking the following questions in this context:

1.	Which of the two possibilities, $\theta=0.5$ or $\theta\neq 0.5$, should be assigned to $H_0$, the null hypothesis?
2.	What observed values of $Y$ would lead to us to conclude that the data provide no evidence against $H_0$ and what observed values of $Y$ would lead us to conclude that the data provide strong evidence against $H_0$?

In answer to question (1), hopefully you observed that these two hypotheses ESP and no ESP are not equally credible and decided that the null hypothesis should be $H_0:\theta=0.5$ or $H_0:$ I do not have ESP.

To answer question (2), we note that observed values of $Y$ that are very small (e.g. 0-10) or very large (e.g. 90-100) would clearly lead us to believe that $H_0$ is false, whereas values near 50 are perfectly consistent with $H_0$. This leads naturally to the concept of a **test statistic** or **discrepancy measure**.

#### Definition 38

A **test statistic** or **discrepancy measure** $D$ is a function of the data $Y$ that is constructed to measure the degree of agreement between the data $Y$ and the null hypothesis $H_0$.

Usually we define $D$ so that $D=0$ represents the best possible agreement between the data and $H_0$, and values of $D$ not close 0 indicate poor agreement. A general method for constructing test statistics will be described in section 5.3, but in this example, it seems natural to use $D(Y)=|Y-50|$.

Question (3) could be resolved easily if we could specify a threshold value for $D$, or equivalently some function of $D$ is $d=|52-50|=2$. One might ask what is the probability, when $H_0$ is true, the discrepancy measure results in a value less than $d$. Equivalently, what is the probability, assuming $H_0$ is true, that the discrepancy measure is greater than or equal to $d$? In other words we want to determine $P(D\geq d;H_0)$ where the notation "$;H_0$" means "assuming that $H_0$ is true". We can compute this easily in the example. If $H_0$ is true then $Y \sim \text{Binomial}(100,0.5)$ and

$$\begin{align\*}
P(D\geq d; H_0) &= P(|Y-50|\geq |52-50|; H_0) \\\
&= P(|Y-50| \geq 2) \quad \text{where } Y \sim \text{Binomial}(100,0.5) \\\
&= 1 - P(49 \leq Y \leq 50) \\\
&\approx 0.76 \end{align\*}$$

How can we interpret this value in terms of the test of $H_0$? Roughly $76\%$ of claimants similarly tested for ESP, who have no abilities at all but simply randomly guess, will performs as well or better than I did. This does not prove I do not have ESP but it does indicate we have failed to find any evidence in these data to support rejecting $H_0$. There is no evidence against $H_0$ in the observed value $d=2$, and this was indicated by the high probability that when $H_0$ is true, we obtain at least this much measured disagreement with $H_0$.

We now proceed to a more formal treatment of hypothesis tests. We will concentrate on two types of hypotheses:

1.	The hypothesis $H: \theta = \theta_0$ where it is assumed that the data $Y$ have arisen from a family of distributions with probability (density) function $f(y;\theta)$ with parameter $\theta$.
2.	The hypothesis $H_0:Y\sim f_0(y)$ where it is assumed that the data $Y$ has a specified probability (density) function $f_0(y)$.

The ESP example is an example of a type (1) hypothesis. If we wish to determine if is reasonable to assume a given data set is a random sample from Exponential(1) distribution then this is an example of type (2) hypothesis. We will see more examples of type (2) hypothesis in Chapter 7.

A statistical test of hypothesis proceeds as follows. First, assume that the hypothesis $H_0$ will be tested using some random data $Y$. We then adopt a test statistic or discrepancy measure $D(Y)$ for which, normally, large values of $D$ are less consistent with $H_0$. Let $d=D(y)$ be the corresponding observed value of $D$. We then calculate the **p-value** or **observed significance** level of the test.

#### Definition 39

Suppose we use the test statistic $D=D(Y)$ to test the hypothesis $H_0$. Suppose also that $d=D(y)$ is the observed value of $D$. The **p-value** or **observed significance level** of the test of hypothesis $H_0$ using test statistic $D$ is

$$p \text{-value} = P(D\geq d;H_0)$$

In other words, the $p$-value is the probability (calculated assuming $H_0$ is true) of observing a value of the test statistic greater than or equal to the observed value of the test statistic. If $d$ (the observed value of $D$) is large and consequently the $p$-value $=P(D\geq d;H_0)$ is small then one of the following two statements is correct:

1.	$H_0$ is true but by chance we have observed an outcome that does not happen every often then $H_0$ is true.
2.	$H_0$ is false.

If the $p$-value is close to 0.05, then the even of observing a $D$ value as unusual or more unusual as we have observed happens only 5 times out of 100, that is, not very often. Therefore we interpret a $p$-value close to 0.05 as indicating that the observed data are providing evidence against $H_0$. If the $p$-value is very small, for example less than 0.001, then the event observing a $D$ value as unusual or more unusual as we have observed happens only 1 time out of 1000, that is, very rarely. Therefore we interpret a $p$-value close to 0.001 as indicating that the observed data are providing strong evidence against $H_0$. If the $p$-value is greater than 0.1, then the event of observing a $D$ value as unusual or more unusual as we have observed happens more than 1 time out of 10, that is, fairly often and therefore the observed data are consistent with $H_0$ and there is no evidence to support (2).

#### Remarks

1.	Note that the $p$-value is defined as $P(D\geq d;H_0)$ and not $P(D=d;H_0)$ even though the event that has been observed is $D=d$. If $D$ is a continuous random variable then $P(D=d;H_0)$ is always equal to zero which is not very useful. If $D$ is a discrete random variable with many possible values then $P(D=d;H_0)$ will be small which is also not very useful. Therefore to determine how unusual the observed result is we compare it to all the other results which are as unusual or more unusual than what has been observed.
2.	The $p$-value is not the probability that $H_0$ is true. This is a common misinterpretation.

The following table gives a rough guideline for interpreting $p$-values. There are only guidelines for this course. The interpretation of $p$-value must always be made in the context of a given study.

| $p$-value | Interpretation |
|-----------|----------------|
| $p$-value $>0.10$ | No evidence against $H_0$ based on the observed data |
| $0.05<p$-value$\leq 0.10$ | Weak evidence against $H_0$ based on the observed data |
| $0.01<p$-value$\leq 0.05$ | Evidence against $H_0$ based on the observed data |
| $0.001<p$-value$\leq 0.01$ | Strong evidence against $H_0$ based on the observed data |
| $p$-value $\leq 0.001$ | Very strong evidence against $H_0$ based on the observed data |

Note that we do not claim that $H_0$ is true, only that there is no evidence in light of the data that it is not true. Similarly in the legal example, if we do not find evidence against $H_0$: "defendant is innocent", this does not mean we have proven he or she is innocent, only that, for the given data, the amount of evidence against $H_0$ was insufficient to conclude otherwise.

The approach to testing a hypothesis described above is very general and straightforward, but a few points should be stressed.

1.	If the $p$-value is very small we would conclude that there is strong evidence against $H_0$ in light of the observed data; this is often termed "statistically significant" evidence against $H_0$. We believe that statistical evidence is best measured when we interpret p-value as in the table. However, it is still common in some areas of research to adopt a threshold p-value such 0.05 and "rejecting $H_0$" when every the p-value is below this threshold. This may be necessary when there are only two possible decisions from which to choose. For example in a trial, a person is either convicted or acquitted of a crime. In the examples in these course notes we report the p-value and use the guidelines in the table to make a conclusion about whether there is evidence against $H_0$ or not. We emphasize the point that any decisions which are made after determining the p-value for a given hypothesis $H_0$ must be made in the context of the empirical study.
2.	If the p-value is not small, we do not conclude that $H_0$ is true. We simply say there is no evidence against $H_0$ in light of the observed data. The reason for this "hedging" is that in most setting a hypothesis may never be strictly true. Hypotheses can be "disproved" but not proved.
3.	Just because there is strong evidence against a hypothesis $H_0$, there is no implication about how "wrong" $H_0$ is. A test of hypothesis should always by supplemented with an interval estimate that indicates the magnitude of the departure from $H_0$
4.	It is important to keep in mind that although we might be able to find **statistically significant** evidence against a given hypothesis, this does not mean that the differences found are of **practical significance**. For example, suppose an insurance company randomly select a large number of policies in two different years and find a statistically significant difference in the mean value of policies sold in those two years of $\$$5.21. This difference would probably not be of practical significance if the average value of policies sold in a year was greater than $\$$1000. Similarly, if we collect large amount of financial data, it is quite easy to find evidence against the hypothesis that stock or stock index returns are Normally distributed. Nevertheless for small amounts of data and for the pricing of options, such an assumption is usually made and considered useful. Finally suppose we compared two cryptographic algorithm using the number of cycles per byte as the unit of measurement. A mean difference of two cycles per byte might be found to be statistically significant but the decision about whether this difference is of practical importance or not is best left to a computer scientist who studies algorithms.
5.	When the observed data provide strong evidence against the null hypothesis, researchers often have an alternative hypothesis in mind. For example, suppose a standard pain reliever provides relief in about 50$\%$ of cases and researchers at a pharmaceutical company have developed a new pain reliever that they wish to test. The null hypothesis is $H_o:P(\text{relief})=0.5$. Suppose there is strong evidence against $H_0$ based on the data. The researchers will want to know in which direction that evidence lies. If the probability of relief is greater than 0.5$\%$ the researchers might consider adopting the drug or doing further testing, but if the probability of relief is less than 0.5 then the pain reliever would probably be abandoned. The choice of the discrepancy measure $D$ is often made with a particular alternative in mind.

A drawback with the approach to testing described so far is that we do not have a general method for choosing the test statistic or discrepancy measure $D$. Often there are "intuitively obvious" test statistics that can be used; this was the case in the examples in this section. In section 5.3 we will see how to use the likelihood function to construct a test statistic in more complicated situation where it is not always easy to come up with an intuitive test statistic.

A final point is that once we have specified a test statistic $D$, we need to be able to compute the p-value for the observed data. Calculating probabilities involving $D$ brings us back to distribution theory. In most cases the exact p-value is difficult to determine mathematically, and we must use either an approximation or computer simulation. Fortunately, for the tests considered in section 5.3 we can use an approximation based on the $\mathcal{X}^2$ distribution.

For the Gaussian model with unknown mean and standard deviation we use test statistics based on the pivotal quantities that were used in Chapter 4 for constructing confidence intervals.

## 5.2 Tests of Hypotheses for Parameters in the $G(\mu,\sigma)$ Model

Suppose that $Y\sim G(\mu, \sigma)$ models a variate $y$ in some population or process. A random sample $Y_1,...,Y_n$ is selected, and we want to test hypotheses concerning one of the two parameters $(\mu, \sigma)$. The maximum likelihood estimator of $\mu4 and $\sigma^2$ are

$$\tilde{\mu}=\bar{Y}=\frac 1n \sum_{i=1}^{n}Y_i \quad \text{and} \quad \tilde{\sigma}^2=\frac 1n \sum_{i=1}^{n}(Y_i-\bar{Y})^2$$

As usual we prefer to use the sample variance estimator

$$S^2 = \frac{1}{n-1} \sum_{i=1}^{n}(Y_i-\bar{Y})^2$$

to estimate $\sigma^2$.

Recall from chapter 4 that

$$T = \frac{\bar{Y}-\mu}{S/\sqrt{n}} \sim t_{n-1}$$

We use this pivotal quantity to construct a test of hypothesis for the parameter $\mu$ when the standard deviation $\sigma$ is unknown.

#### Hypothesis Test for $\mu$

For a Normally distributed population, we may wish to test a hypothesis $H_0: \mu=\mu_0$ where $\mu_0$ is some specified value. To do this we can use the test statistic

$$D = \frac{|\bar{Y}-\mu_0|}{S/\sqrt{n}}$$

We then obtain a p-value from the $t$ distribution as follows. Let

$$d=\frac{|\bar{y}-\mu_0|}{s/\sqrt{n}}$$


be the value of $D$ observed in a sample with mean $\bar{y}$ and standard deviation $s$, then

$$\begin{align\*}
p\text{-value} &= P(D\geq d; H_0 \text{ is true}) \\\
&= P(|T| \geq d) \\\
&= 2(1-P(T \leq d))\end{align\*}$$

#### One-sided hypothesis tests

The values of the parameter to be considered when $H_0$ is not true are often described as an alternative hypothesis which is denoted by $H_A$. Suppose data on the effects of a new treatment follow a $G(\mu, \sigma)$ distribution and that the new treatment can either have no effect represented by $\mu = \mu_0$ or a beneficial effect represented by $\mu > \mu_0$. In this example the null hypothesis is $H_0: \mu = \mu_0$ and the alternative hypothesis is $H_A: \mu > \mu_0$. To test $H_0:\mu = \mu_0$ using this alternative we could use the test statistic

$$D = \frac{\bar{Y}-\mu_0}{S/\sqrt{n}}$$

so that large values of $D$ provide evidence against $H_0$ in the direction of the alternative $\mu = \mu_0$. Under $H_0:\mu = \mu_0$ the test statistic $D$ has a $t_{n-1}$ distribution. Let the observed value be

$$d = \frac{\bar{y}-\mu_0}{s/\sqrt{n}}$$

Then

$$p\text{-value} = P(D\geq d;H_0\text{ is true}) = 1-P(T\leq d)$$

#### Relationship between Hypothesis Testing and Interval Estimation

Suppose $y_1,...,y_n$ is an observed random sample form the $G(\mu,\sigma)$ distribution. Suppose we test $H_0:\mu=\mu_0$. Now

$$\begin{align\*}
& p-value \geq 0.05 \\\
&\Leftrightarrow P\left( \frac{|\bar{Y}-\mu_0|}{S/\sqrt{n}} \geq \frac{|\bar{y}-\mu_0|}{s/\sqrt{n}}; H_0:\mu=\mu_0 \text{ is true} \right) \geq 0.05 \\\
&\Leftrightarrow P\left( |T| \leq \frac{|\bar{y}-\mu_0|}{s/\sqrt{n}} \right) \leq 0.95 \\\
&\Leftrightarrow \mu_0 \in [\bar{y} \pm as/\sqrt{n}]\end{align\*}$$

which is a $95\%$ confidence interval for $\mu$. In other words, the p-value for testing $H_0:\mu=mu_0$ is greater than or equal to 0.05 if and only if the value $\mu=\mu_0$ is inside a $95\%$ confidence interval for $\mu$ (assuming we use the same pivotal quantity).

More generally, suppose we have data $y$, a model $f(y;\theta)$ and we use the same pivotal quantity to construct a confidence interval for $\theta$ and a test of the hypothesis $H_0:\theta = \theta_0$. Then the parameter $\theta=\theta_0$ is inside a $100q\%$ confidence interval for $\theta$ if and only if the p-value for testing $H_0:\theta = \theta_0$ is greater than $1-q$.

#### Hypothesis tests for $\sigma$

Suppose that we have a sample $Y_1,...,Y_n$ of independent random variables each from the same $G(\mu, \sigma)$ distribution. Recall that we used the pivotal quantity

$$\frac{(n-1)S^2}{\sigma^2} = \frac{1}{\sigma^2}\sum_{i=1}^{n}(Y_i-\bar{Y})^2\sim \mathcal{X}^2(n-1)$$

to construct confidence intervals for the parameter $\sigma$. We may also wish to test a hypothesis such as $H_0: \sigma = \sigma_0$. One approach is to use a likelihood ratio test statistic which is described in the next section. Alternatively we could use the test statistic

$$U = \frac{(n-1)S^2}{\sigma_0^2}$$

for testing $H_0:\sigma = \sigma_0$. Large value of $U$ and small values of $U$ provides evidence against $H_0$. Now $U$ has a Chi-squared distribution when $H_0$ is true and the Chi-squared distribution is not symmetric which makes the determination of "large" and "small" values somewhat problematic. The following simpler calculation approximates the p-value:

1.	Let $u=(n-1)s^2/\sigma_0^2$ denote the observed value of $U$ from the data.
2.	If $u$ is large (that is, if $P(U\leq u)>1/2$) compute the p-value as

$$p-value = 2P(U\geq u)$$

3.	If $u$ is small (that is, if $P(U\leq u) < 1/2$) compute the p-value as

$$p-value = 2P(U \leq u)$$

## 5.3 Likelihood Ratio Test of Hypotheses - One Parameter

When a pivotal quantity exists then it is usually straightforward to construct a test of hypothesis as we have seen section 5.2 for the Gaussian distribution parameters. When a pivotal quantity does not exist then a general method for finding a test statistic with good properties can be based on the likelihood function. In chapter 2 we used likelihood functions to gauge the plausibility of the parameter values in the light of the observed data. It should seem natural, then, to base a test of hypothesis on a likelihood value or, in comparing the plausibility of two values, a ratio of the likelihood values. Let us suppose, for example, that we are engaged in an argument over the value of a parameter $\
theta$ in a given model. I claim that the parameter value is $\theta_0$ where as your claim is $\theta_1$. Having some data $y$ at hand, it would seem reasonable to attempt to settle this argument using the ratio of the likelihood values at these two values, that is,

$$\frac{L(\theta_0)}{L(\theta_1)}$$

As usual we define the likelihood function $L(\theta)=L(\theta;y)=f(y;\theta)$ where $f(y;\theta)$ is the probability density function of the random variable $Y$ representing the data. If the value of the ratio $L(\theta_0)/L(\theta_1)$ is much greater than one then the data support the value $\theta_0$ more then $\theta_1$.

Let us now consider testing the plausibility of my hypothesized value $\theta_0$ against an unspecified alternative. In this case it is natural to replace $\theta_1$ by the value which appears most plausible given the data, that is, the maximum likelihood estimate $\hat{\theta}$. The resulting ratio is just the value of the relative likelihood function at $\theta_0$:

$$R(\theta_0) = \frac{L(\theta_0)}{L(\hat\theta)}$$

If $R(\theta_0)$ is close to one, then $\theta_0$ is plausible in light of the observed data, but if $R(\theta_0)$ is very small and close to zero, then $\theta_0$ is not plausible in light of the observed data and this suggest evidence against $H_0$. Therefore the corresponding random variable $L(\theta_0)/L(\tilde\theta)$ appears to be a natural statistic for testing $H_0:\theta=\theta_0$. This only leaves determining the distribution of $L(\theta_0)/L(\tilde\theta)$ under $H_0$ so we can determine p-values. Equivalently, we usually work instead with a simple function of $L(\theta_0)/L(\tilde\theta)$. We use the likelihood ratio statistic which was introduced in chapter 4:

$$\Lambda(\theta_0) = -2 \log \left[ \frac{L(\theta_0)}{L(\tilde\theta)} \right]$$

We choose this particular function because, if $H_0:\theta=\theta_0$ is true, then $\Lambda(\theta_0)\sim \mathcal{X}^2(1)$. Note that small values of $R(\theta_0)$ correspond to large observed values of $\Lambda(\theta_0)$ and therefore large observed value of $\Lambda(\theta_0)$ indicate evidence against the hypothesis $H_0:\theta = \theta_0$. Notice that the more plausible values of the parameter $\theta$ correspond to larger values of $R(\theta)$ or equivalently, in the bottom panel, to small values of $\Lambda(\theta)$.

To determine the p-value we first calculate the observed value of $\Lambda$, denoted by $\lambda(\theta_0)$ and given by

$$\lambda(\theta_0) = -2 \log \left( \frac{L(\theta_0)}{L(\tilde\theta)} \right)$$

where $R(\theta_0)$ is the relative likelihood function evaluated at $\theta = \theta_0$. The approximate p-value is then

$$\begin{align\*}
p-value & \approx P(W \geq \lambda(\theta_0)) \text{ where } W \sim \mathcal{X}^2(1) \\\
& = P(|Z| \geq \sqrt{\lambda(\theta_0)}) \text{ where } Z \sim G(0,1) \\\
& = 2 (1-P(Z \leq \sqrt{\lambda(\theta_0)}))\end{align\*}$$

Let us summarize the construction of a test from the likelihood function. Let the random variable (or vector of random variables) $Y$ represent data generated from a distribution with probability function or probability density function $f(y;\theta)$ which depends on the scalar parameter $\theta$. Let $\Omega$ be the parameter space for $\theta$. Consider a hypothesis of the form

$$H_0:\theta=\theta_0$$

where $\theta_0$ is a single point (hence of dimension 0). We can test $H_0$ using our test statistic the likelihood ratio test statistic $\Lambda$.Then large observed values of $\Lambda$ correspond to a disagreement between the hypothesis and the data and so provide evidence against $H_0$. Moreover, if $H_0:\theta=\theta_0$ is true, $\Lambda(\theta_0)$ has approximately a $\mathcal{X}^2(1)$ distribution so that an approximate p-value is obtained. The theory behind the approximation is based on a result which shows that under $H_0$ the distribution of $\Lambda$ approaches $\mathcal{X}^2(1)$ as the size of the data set becomes large.

