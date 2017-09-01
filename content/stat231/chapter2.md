# Chapter 2: Statistical Models and Maximum Likelihood Estimation

## 2.1 Choosing a Statistical Model

A statistical model is a mathematical model that incorporates probability in some way. As described in Chapter 1, our interest here is in studying variability and uncertainty in populations and processes and drawing inferences where warranted in the presence of this uncertainty. This will be done by considering random variables that represent characteristics of randomly selected units or individuals in the population or process, and by studying the probability distributions of these random variables. It is very important to be clear about what the "target" population or process is, and exactly how the variables being considered are defined and measured.

A preliminary step in probability and statistics is the choice of a statistical model to suit a given application. The choice of a model is usually driven by some combination of the following three factors:

1.	Background knowledge or assumptions about the population or process which lead to certain distributions.
2.	Past experience with data sets from the population or process, which has shown that certain distribution are suitable.
3.	A current data set, against which models can be assessed.

In probability theory, there is a large emphasis on factor 1 above, and there many "families" of probability distributions that describe certain types of situations. For example, the Binomial distribution was derived as a model for outcomes in repeated independent trials with two possible outcomes on each trial while the Poisson distribution was derived as a model for the random occurrence of events in time or space. The Gaussian or Normal distribution, on the other hand, is often used to represent the distributions of continuous measurements such as the heights or weights of individuals. This choice is based largely past experience that such models are suitable and on mathematical convenience.

In choosing a model we usually consider families of probability distributions. To be specific, we suppose that for a random variable $Y$ we have a family of probability functions/probability density functions, $f(y;\theta)$ indexed by the parameter $\theta$ (which may be a vector of values). In order to apply the model to a specific problem we need a value for $\theta$. The process of selecting a value for $\theta$ based on the observed data is referred as "estimating" the value of $\theta$ or "fitting" the model. The next section describes the most widely used method for estimating $\theta$.

Most applications requires a sequence of steps in the formulation of a model. In particular, we often start with some family of models in mind, but find after examining the data set and fitting the model that is unsuitable in certain respects. We then try other models, and perhaps look at more data, in order to work towards a satisfactory model. This is usually an iterative process, which is sometimes represented by diagrams such as

![statistical theta](http://tonyli.tk/notes/stat231/ch2pg55.PNG)

Statistical devotes considerable effort to the steps of this process. However, in this course we will focus on settings in which the models are not too complicated, so that model formulation problems are minimized. There are several distributions that you should review before continuing since they will appear frequently in these notes. You should also consult the Table of Distributions in these course notes for a condensed table of properties of these distributions including their moment generating function and their moments.

#### Properties of Discrete versus Continuous Random Variables

| Property | Discrete | Continuous |
|---|---|---|
| c.d.f | $F(x)=P(X\leq x)=\sum_{t\leq x} P(X=t)$ $F$ is a right continuous step function for all $x\in \mathbb{R}$ | $F(x)=P(X\leq x)=\int_{-\infty}^{x}f(t)dt$ $F$ is a continuous function for all $x\in \mathbb{R}$ |
| p.f./p.d.f. | $f(x)=P(X=x)$ | $f(x)=\frac{d}{dx}F(x)\neq P(X=x)=0$ |
| Probability of an event | $P(X\in A)=\sum_{x\in A}P(X=x)=\sum_{x\in A} f(x)$ | $P(a<X\leq b)=F(b)-F(a)=\int_{a}^bf(x)dx$ |
| Total probability | $\sum_{all \quad x}P(X=x)=\sum_{all \quad x}f(x)=1$ | $\int_{-\infty}^{\infty}f(x)dx=1$ |
| Expectation | $E\[g(X)\]=\sum_{all \quad x}g(x)f(x)$ | $E\[g(X)\]=\int_{-\infty}^{\infty}g(x)f(x)dx$ |

#### Binomial Distribution

The discrete random variable (r.v.) $Y$ has a Binomial distribution if its probability function is of the form 

$$P(Y=y;\theta)=f(y;\theta)={n \choose y}\theta^y(1-\theta)^{n-y}$$

for $y=0,...n$

where $\theta$ is a parameter with $0<\theta<1$. For convenience we write $Y\sim$ Binomial $(n, \theta)$. Recall that $E(Y)=n\theta$ and $Var(Y)=n\theta(1-\theta)$.

#### Poisson Distribution

The discrete random variable $Y$ has a Poisson distribution if its probability function is of the form

$$f(y;\theta)=\frac{\theta^y e^{-\theta}}{y!}$$

for $y=0,1,2,...$

where $\theta$ is a parameter with $\theta > 0$. We write $Y\sim$ Poisson $(\theta)$. Recall that $E(Y)=\theta$ and $Var(Y)=\theta$.

#### Exponential Distribution

The continuous random variable $Y$ has an Exponential distribution if its probability density function is of the form

$$f(y;\theta)=\frac{1}{\theta}e^{-y/\theta}$$

for $y>0$

where $\theta$ is a parameter with $\theta>0$. We write $Y\sim$ Exponential $(\theta)$. Recall that $E(Y)=\theta$ and $Var(Y)=\theta^2$.

#### Gaussian (Normal) Distribution

The continuous random variable $Y$ has a Gaussian or Normal distribution if its probability density function is of the form

$$f(y;\mu,\sigma)=\frac{1}{\sqrt{2}\pi\sigma}\exp{\left[-\frac{1}{2\sigma^2}(y-\mu)^2\right]}$$

for $y\in \mathbb{R}$

where $\mu$ and $\sigma$ are parameters, with $\mu\in\mathbb{R}$ and $\sigma>0$. Recall that $E(Y)=\mu$, $Var(Y)=\sigma^2$, and standard deviation of $Y$ is $sd(Y)=\sigma$. We write either $Y\sim G(\mu,\sigma)$ or $Y\sim N(\mu, \sigma^2)$.

#### Multinomial Distribution

The Multinomial distribution is a multivariate distribution in which the discrete random variable;s $Y_1,...,Y_k$ have the joint probability function

$$P(Y_1=y_1,...,Y_k=y_k;\theta)=f(y_1,...,y_k;\theta)=\frac{n!}{y_1!\cdots y_k!}\theta_1^{y_1}\cdots \theta_k^{y_k}$$

where $y_i=0,1,...$ for $i=1,..,k$ and $\sum_{i=1}^{k}y_i=n$. The elements of the parameter vector $\theta=(\theta_1,...,\theta_k)$ satisfy $0<\theta_i<1$ for $i=1,...,k$ and $\sum_{i=1}^{k}\theta_i=1$. This distribution is a generalization of the Binomial distribution. It arises when there are repeated independent trials, where each trial has $k$ possible outcomes and the probability outcomes $i$ occurs is $\theta_i$. If $Y_i,i=1,2,...,k$ is the number of times that outcome $i$ occurs in a sequence of $n$ independent trials, then $(Y_1,...Y_k)$ have the joint probability function. We write $(Y_1,...Y_k)\sim$ Multinomial $(n;\theta)$.

Since $\sum_{i=1}^{k}Y_i=n$ we can rewrite $f(y_1,...,y_k;\theta)$ using only $k-1$ variables, say $y_1,...,y_{k-1}$ by replacing $y_k$ with $n-y_1-...-y_{k-1}$. We see that the Multinomial distribution with $k=2$ is just the Binomial distribution, where the two possible outcomes are $S$ (Success) or $F$ (Failure).

We now turn to the problem of fitting a model. This requires estimating or assigning numerical values to the parameters in the model.

## 2.2 Estimation of Parameters and the Method of Maximum Likelihood

Suppose a probability distribution that serves as a model for some random process depends on an unknown parameter $\theta$ (possible a vector). In order to use the model we have to "estimate" or specify a value for $\theta$. To do this we usually rely on some data set that has been collected for the random variable in question. It is important that data set be collected carefully, and we consider this issue in Chapter 3. For example, suppose that the random variable $Y$ represents the weight of a randomly chosen female in some population, and that we consider a Gaussian model, $Y\sim G(\mu,\sigma)$. Since $E(Y)=\mu$, we might decide to randomly select, say 50 females from the population, measure their weights $y_1,...,y_{50}$, and use the average,

$$\hat{\mu}=\bar{y}=\frac{1}{50}\sum_{i=1}^{50}y_i$$

to estimate $\mu$. This seems sensible and similar ideas can be developed for other parameters; in particular, note that $\sigma$ must also be estimated, and you might think about how you could use $y_1,...,y_{50}$ to do this. Note that although we are estimating the parameter $\mu$ we did not write $\mu=\bar{y}$. We introduced a special notation $\hat{\mu}$. This serves a dual purpose, both to remind you that $\bar{y}$ is not exactly equal to the unknown value of the parameter $\mu$, but also indicate that $\hat{\mu}$ is a quantity derived from the data and depends on the sample. A different draw of the sample will result in a different value for $\hat{\mu}$.

#### Definition 7

An estimate of a parameter is the value of a function of the observed data $y_1,...,y_n$ and other known quantities such as the sample size $n$. We use $\hat{\theta}$ to denote an estimate of the parameter $\theta$.

Note that $\hat{\theta}=\hat{\theta}(y_1,...,y_n)=\hat{\theta}(y)$ depends on the sample $y=(y_1,...,y_n)$ drawn. A function of the data which does not involve any unknown quantities such as unknown parameters is call a statistic. The numerical summaries discussed in Chapter 1 are all examples of statistics. A point estimate is also a statistic.

Instead of ad hoc approach to estimation as in (2.2), it is desirable to have a general methods for estimating parameters. The method of **maximum likelihood** is a very general method, which we now describe.

Let the discrete random variable $Y$ represent potential data that will be used to estimate $\theta$, and let $y$ represent the actual observed data that are obtained in a specific application. Note that to apply the method of maximum likelihood, we must know how the data $y$ were collected. It is usually assumed here that the data set consists of measurements on a random sample of population units.

#### Definition 8

The likelihood function for $\theta$ is defined as

$$L(\theta)=L(\theta;y)=P(Y=y;\theta)$$

for $\theta \in \Omega$

where the parameter space $\Omega$ is the set of possible values for $\theta$.

Note that the likelihood function is a function of the parameter $\theta$ and the given data $y$. For convenience we usually write just $L(\theta)$. Also, the likelihood function is the probability what we observe that random observation $y$, considered as a function of the parameter $\theta$. Obviously values of the parameter that make our observation $y$ more probable would seem more credible or likely than those that make it less probable. Therefore values of $\theta$ for which $L(\theta)$ is large are more consistent with the observed data $y$. This seems like a "sensible" approach, and it turns out to have very good properties.

#### Definition 9

The value of $\theta$ which maximizes $L(\theta)$ for given data $y$ is called the maximum likelihood estimate (MLE) of $\theta$. It is the value of $\theta$ which maximizes the probability of observing the data $y$. The value is denoted by $\hat{\theta}$.

#### Definition 10

The **relative likelihood function** is defined as

$$R(\theta)=\frac{L(\theta)}{L(\hat{\theta})}$$

for $\theta\in\Omega$.

Note that $0\leq R(\theta) \leq 1$ for all $\theta \in \Omega$.

Sometimes it is easier to work with the $\log$ of the likelihood function.

#### Definition 11

The **log likelihood function** is defined as

$$l(\theta)=\log L(\theta)$$

for $\theta\in\Omega$.

Because functions are often (but not always!) maximized by setting their derivatives equal to zero, we can usually obtain $\hat{\theta}$ by solving the equation

$$\frac{d}{d\theta}l(\theta)=0$$

#### Likelihood function for a random sample

In many applications the data set $Y=(Y_1,...,Y_n)$ are independent and identically distributed random variables each with probability function $f(y;\theta)$, $\theta\in\Omega$. We refer to $Y=(Y_1,...,Y_n)$ as a random sample from the distribution $f(y;\theta)$. In this case the observed data are $y=(y_1,...,y_n)$ and

$$L(\theta)=\prod_{i=1}^nf(y_i;\theta)$$

for $\theta\in\Omega$.

#### Combining likelihoods based on independent experiments

In we have two data sets $y_1$ and $y_2$ from two independent studies for estimating $\theta$, then since the corresponding random variables $Y_1$ and $Y_2$ are independent we have

$$P(Y_1=y_1,Y_2=y_2;\theta)=P(Y_1=y_1;\theta)\times P(Y_2=y_2;\theta)$$

and we obtain the "combined" likelihood function $L(\theta)$ based on $y_1$ and $y_2$ together as 
$$L(\theta)=L_1(\theta)\times L_2(\theta)$$

for $\theta\in\Omega$

where $L_j(\theta)=P(Y_i=y_i;\theta)$, $j=1,2$. This idea, of course, can be extended to more than two independent studies.

## 2.3 Likelihood Functions for Continuous Distributions

Recall that we define likelihoods for discrete random variables as the probability of observing the data $y$ or

$L(\theta)=L(\theta;y)=P(Y=y;\theta)$

For continuous distributions, $P(Y=y;\theta)$ is unsuitable as a definition of the likelihood since it always equals zero. In the continuous case, we define the likelihood function similarly to the discrete case but with the probability function $P(Y=y;\theta)$ replaced by the joint probability density function evaluated at the observed values. If $Y_1,...,Y_n$ are independent and identically distributed random variables each with probability density function $f(y;\theta)$ then the joint probability density function of $(Y_1,.,,,Y_n)$ is

$$\prod_{i=1}^{n}f(y_i;\theta)$$

and we use this to construct the likelihood function.

#### Definition 12

If $y_1,...,y_n$ are the observed values of a random sample from a distribution with probability density function $f(y;\theta)$, then the likelihood function is defined as

$$L(\theta)=L(\theta;y)=\prod_{i=1}^{n}f(y_i;\theta)$$

## 2.4 Likelihood Functions for Multinomial Models

Multinomial models are used in many statistical applications. From section 2.1, the Multinomial joint probability function is

$$f(y_1,...,y_k;\theta)=\frac{n!}{y_1!...y_k!}\prod_{i=1}^{k}\theta_{i}^{y_i}$$

for $y_i=0,1,...$ where $\sum y_i=n$.

The likelihood function for $\theta=(\theta_1,...,\theta_k)$ based on data $y_1,...,y_k$ is given by

$$L(\theta)=L(\theta_1,...,\theta_k)=\frac{n!}{y_1!...y_k!}\prod_{i=1}^k\theta_i^{y_i}$$

or more simply,

$$L(\theta)=\prod_{i=1}^k \theta_i^{y_i}$$

The log likelihood function is

$$l(\theta)=\sum_{i=1}^k\log \theta_i$$

If $y_i$ represents the number of times outcome $i$ occurred in $n$ trials, $i=1,2,...,k$, then it can be shown that

$$\hat{\theta}_i=\frac{y_i}{n}$$

are the maximum likelihood estimation of $\theta_1,...,\theta_k$.

## 2.5 Invariance Property of Maximum Likelihood Estimates

Many statistical problems involve the estimation of attributes of a population or process. These attributes can often be represented as an unknown parameter or parameters in a statistical model. The method of maximum likelihood gives us a general method for estimating these unknown parameters. Sometimes the attribute of interest is a function of the unknown parameters. Fortunately the method of maximum likelihood allows us to estimate functions of unknown parameters with very little extra work. This property is called the invariance property of maximum likelihood estimates and can be stated as follows:

#### Theorem 13

If $\hat{\theta}$ is the maximum likelihood estimate of $\theta$ then $g(\theta)$ is the maximum likelihood estimate of $g(\theta)$

## 2.6 Checking the Model

The models used in this course are probability distributions for random variables that represent variates in a population or process. A typical model has probability density function $f(y;\theta)$ if the variate $Y$ is continuous, or probability function $f(y;\theta)$ if $Y$ is discrete, where $\theta$ is (possibly) a vector of parameter values. If a family of models is to be used for some purpose then it is important to check that the model with random samples of $y$-values from the population or process.

#### Graphical Checks of Models

We may also use graphical techniques for checking the fit of a model. These methods are particularly useful for continuous data.

#### Empirical Cumulative Distribution Functions

A second graphical procedure is to plot the empirical cumulative distribution function $\hat{F}(y)$ and then to superimpose on this a plot of the model-based cumulative distribution function. The objective is to compare two cumulative distribution functions, one that we hypothesized is the cumulative distribution function for the population, and the other obtained from the sample. If they differ a great deal, this would suggest that the hypothesized distribution is a poor fit.

#### QQplots

An alternative view, which is really just another method of graphing the empirical cumulative distribution function, tailored to the Normal distribution, is a graph called a qqplot. Suppose the data $Y_i,i=1,2,...,n$ were in fact drawn from the $G(\mu,\sigma)$ distribution so that the standardized variables, after we order them from smallest $Y_{(1)}$ to largest $Y_{(n)}$, are

$$Z_{(i)}=\frac{Y_{(i)}-\mu}{\sigma}$$

These behave like the ordered values from a sample of the same size taken from the $G(0,1)$ distribution. If $\Phi$ denotes the standard Normal cumulative distribution function then for $0<u<1$

$$P(\Phi(Z)\leq u)=P(Z\leq \Phi^{-1}(u))=\Phi(\Phi^{-1}(u))=u$$

so that $\Phi(Z)$ has a Uniform distribution. It is easy to check that the expected value of the $i$'th largest value in a random sample of size $n$ from a Uniform$(0,1)$ to be close to $\frac{i}{n+1}$. In other words we expect $Z_{(i)}=(Y_{(i)}-\mu)/\sigma$ to be approximately $\Phi^{-1}\left(\frac{i}{n+1}\right)$ or $Y_{(i)}$ to be roughly a linear function of $\Phi^{-1}\left(\frac{i}{n+1}\right)$. This is the basic argument underlying the qqlot. **If the distribution is actually Normal, then a plot should be approximately linear**.

Similarly if the data obtain from an Exponential distribution we expect a plot to be approximately linear where $F^{-1}(u)$ is the inverse of the Exponential$(1)$ cumulative distribution function given by $F^{-1}(u)=-\ln(1-u)$.