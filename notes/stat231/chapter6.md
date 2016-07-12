# Chapter 6: Gaussian Response Models

## 6.1 Introduction

A response variate $Y$ is one whose distribution has parameters which depends on the value of other variates. For the Gaussian models we have studied so far, we assumed that we had a random sample $Y_1,...,Y_n$ from the same Gaussian distribution $G(\mu,\sigma)$. A Gaussian response model generalizes this to permit the parameters of the Gaussian distribution for $Y_i$ to depend on a vector $x_i$ of covariates (explanatory variates which are measured for the response variate $Y_i$). Gaussian models are by far the most common models used in statistics.

#### Definition 40

A Gaussian response model is one for which the distribution of the response variable $Y$, given the associated vector of **covariates** $x=(x_1,...,x_k)$ for an individual unit, is of the form

$$Y\sim G(\mu(x), \sigma(x))$$

If observations are made on $n$ randomly selected units we write the model as

$$Y_i \sim G(\mu(x_i), \sigma(x_i)) \quad \text{for } i = 1,2,...,n$$

In most examples we will assume $\sigma(x_i)=\sigma$ is constant. This assumption is not necessary but it does make the models easier to analyze. The choice of $\mu(x)$ is guided by past information and on current data from the population or process. The difference between various Gaussian response models is in the choice of the function $\mu(x)$ and the covariates. We often assume $\mu(x_i)$ is a **linear function** of the covariates. These models are called **Gaussian linear models** and can be written as

$$Y_i \sim G(\mu(x_i),\sigma) \text{ for } i = 1,...,n$$

with $\mu(x_i)=\beta_0+\sum_{j=1}^{k}\beta_j x_{ij}$

where $x_i = (x_{i1},...,x_{ik})$ is the vector of known covariates associated with unit $i$ and $\beta_0,...,\beta_k$ are unknown parameters. These models are also referred to as **linear regression models** and $\beta$ are call the regression coefficients.

#### Remark

Sometimes the model is written a little differently as

$$Y_i = \mu(x_i) + R_i \text{ where } R_i \sim G(0,\sigma)$$

This splits $Y_i$ into a deterministic component, $\mu(x_i)$ and a random component $R_i$

We now consider estimation and testing procedures for these Gaussian response models. We begin with models which have no covariates so that the observations are all from the same Gaussian distributions.

#### $G(\mu, \sigma)$ Model

In chapter 4 and t we discussed estimation and testing hypotheses for samples from a Gaussian distribution. Suppose that $Y\sim G(\mu, \sigma)$ models a response variate $y$ in some population or process. A random sample $Y_1,...,Y_n$ is selected, and we want to estimate the model parameters and possibly to test hypotheses about them. We can write this model in the form

$$Y_i = \mu + R_i \text{ where } R_i \sim G(0,\sigma)$$

so this is a special case of the Gaussian response model in which the mean function is constant. The estimator of the parameter $\mu$ that we used is the maximum likelihood estimator $\bar{Y}=\frac 1n \sum_{i=1}^{n}Y_i$. This estimator is also a "least squares estimator". \bar{Y} has the property that it is closer to the data than any other constant, or

$$\min_\mu \sum_{i=1}^{n} (Y_i-\mu)^2=\sum_{i=1}^{n}(Y_i-\bar{Y})^2$$

You should be able to verify this. It will turn out that the methods for estimation, constructing intervals and tests of hypothesis discussed earlier for the single Gaussian are all special case of the more general methods derived in section 6.5.

In the next section we begin with a simple generalization to the case in which the mean is a linear function of a single covariate.

## 6.2 Simple Linear Regression

Many studies involve covariates $x$, as described in section 6.1. In this section we consider the case in which there is a single covariate $x$. Consider the model with independent $Y_i$ such that

$$Y_i \sim G(\mu(x_i), \sigma) \text{ where } \mu(x_i)=\alpha+\beta x_i$$

This is of the form with $(\beta_0, \beta_1)$ replaced by $(\alpha, \beta)$.

The likelihood function for $(\alpha, \beta, \sigma)$ is

$$L(\alpha, \beta, \sigma) = \prod_{i=1}^{n} \frac{1}{\sqrt{2\pi} \sigma} \exp\left[ -1\frac{2\sigma^2} (y_i-\alpha-\beta x_i)^2 \right]$$

or more simply

$$L(\alpha, \beta, \sigma) = \sigma^{-n} \exp \left[ -\frac{1}{2\sigma^2} \sum_{i=1}^{n} (y_i-\alpha-\beta x_i)^2 \right]$$

The log likelihood function is

$$l(\alpha, \beta, \sigma) = -n\log \sigma - \frac{1}{2\sigma^2} \sum_{i=1}^{n} (y_i-\alpha-\beta x_i)^2$$

To obtain the maximum likelihood estimates we solve the three equations simultaneously. We obtain the maximum likelihood estimators

$$\tilde\beta = \frac{S_{xy}}{S_{xx}}$$

$$\tilde\alpha = \bar{Y} - \tilde\beta \bar x$$

$$\tilde\sigma^2 = \frac 1n \sum_{i=1}^n (Y_i-\tilde\alpha-\tilde\beta x_i)^2$$

We will use

$$S_e^2 = \frac{1}{n-2} (S_{yy}-\tilde\beta S_{xy})$$

as the estimator for $\sigma^2$ rather than the maximum likelihood estimator $\sigma^2$ since it can be shown that $E(S_e^2)=\sigma^2$. Note that $S_e^2$ can be more easily calculated using

$$S_e^2 = \frac{1}{n-2} (S_{yy}-\tilde\beta S_{xy})$$

#### Least squares estimation

If we are given the data $(x_i,y_i)$ then one criterion which could be used to obtain a line of "best fit" to these data is to fit the line which minimizes the sum of the squares of the distances between the observed points $(x_i,y_i)$ and the fitted line $y=\alpha + \beta x$. Mathematically this means we want to find the values of $\alpha$ and $\beta$ which minimize the function

$$g(\alpha, \beta) = \sum_{i=1}^n (y_i - (\alpha + \beta x_i))^2$$

Such estimate are called **least squares estimates**. To find the least squares estimates we need to solve the two equations simultaneously. We note that this is equivalent to solving the maximum likelihood equations. In summary we have that the least squares estimates and the maximum likelihood estimates obtained are the same estimates. Of course the method of least squares only provides point estimates of the unknown parameter $\alpha$ and $\beta$ while assuming the model allows us to obtain both estimates and confidence intervals for the unknown parameters. We now show how to obtain confidence intervals based on the model.

#### Distribution of the estimator $\tilde\beta$

Notice that we can rewrite the expression for $\tilde\beta$ as

$$\tilde\beta = \frac{S_{xy}}{S_{xx}} = \sum_{i=1}^{n} a_i Y_i \quad \text{where } a_i=\frac{(x_i-\bar{x})}{S_{xx}}$$

to make it clear that $\tilde\beta$ is a linear combination of the Normal random variables $Y_i$ and is therefore Normally distributed with easily obtained expected value and variance. In fact it is easy to show that these non-random coefficients satisfy $\sum_{i=1}^n a_i=0$ and $\sum_{i=1}^{n} a_i x_i=1$ and $\sum_{i=1}^{n} a_i^2 =1/S_{xx}$. Therefore

$$E(\tilde\beta) = \beta$$

Similarly

$$Var(\tilde\beta) = \frac{\sigma^2}{S_{xx}}$$

In summary

$$\tilde\beta \sim G(\beta, \frac{\sigma}{\sqrt{S_{xx}}})$$

#### Confidence intervals for $\beta$ and test of hypothesis of no relationship

Confidence intervals for $\beta$ are important because the parameter $\beta$ represents the increase in the mean value of $Y$, resulting from an increase of one unit in the value of $x$. As well, if $\beta = 0$ then $x$ has no effect on $Y$ (within the model)

Since

$$\frac{\tilde\beta - \beta}{\sigma/\sqrt{S_{xx}}} \sim G(0,1)$$

holds independently of

$$\frac{(n-2)S_e^2}{\sigma^2} \sim \mathcal{X}^2(n-2)$$

then it follows that

$$\frac{\tilde\beta - \beta}{S_e / \sqrt{S_{xx}}} \sim t(n-2)$$

This pivotal quantity can be used to obtain confidence intervals for $\beta$ and to construct tests of hypotheses about $\beta$.

Using $t$-table find the constant $a$ such that $P(-a\leq T\leq a)=p$ where $T\sim t(n-2)$. 

Therefore a $100p\%$ confidence interval for $\beta$ is given by

$$[\hat\beta \pm as_e/\sqrt{S_{xx}}]$$

To test the hypothesis of no relationship or $H_0:\beta = 0$ we use the test statistic

$$\frac{|\tilde\beta - 0|}{S_e/\sqrt{S_{xx}}}$$

with observed value

$$\frac{|\hat\beta - 0|}{s_e/\sqrt{S_{xx}}}$$

then p-value is given by

$$p-value = 2 \left( 1-P\left( T \leq \frac{|\hat{\beta}-0|}{s_e/\sqrt{S_{xx}}} \right) \right)$$

Note also that it can be used to obtain confidence interval or tests for $\sigma$, but these are usually of less interest than inference about $\beta$ or the other quantities below.

#### Remark

In regression models we often "redefine" a covariate $x_i$ as $x_i'=x_i-c$ where $c$ is a constant value that makes $\sum_{i=1}^n x_i'$ close to zero. (Often we take $c=\bar{x}$).
The reason for doing this are that it reduces round-off errors in calculations, and that it makes the parameter $\alpha$ more interpretable. Note that $\beta$ does not change if we "center" $x_i$ this way, because

$$E(Y|x)=\alpha+\beta x = \alpha + \beta(x'+c)=(\alpha+\beta c)+ \beta x'$$

Thus, the intercept $\alpha$ changes if we redefine $x$, but not $\beta$. In the examples we consider here we have kept the given definition of $x_i$ for simplicity.

#### Confidence Interval for the mean response $\mu(x)=\alpha + \beta x$

We are often interested in estimating the quantity $\mu(x) = \alpha + \beta x$ since it represents the mean response at a specified value of the covariate $x$. We can obtain a pivotal quantity for doing this. The maximum likelihood estimator of $\mu(x)$ obtained by replacing the unknown values of $\alpha$, $\beta$ by their maximum likelihood estimators,

$$\tilde\mu(x) = \tilde\alpha + \tilde\beta x = \bar{Y}+\tilde\beta(x-\bar{x})$$

since $\tilde\alpha = \bar{Y} - \tilde\beta \bar{x}$. Since

$$\tilde\beta = \frac{S_{xy}}{S_{xx}}$$

we can rewrite $\tilde\mu(x)$ as

$$\tilde\mu(x) = \bar{Y}+\tilde\beta(x-\bar{x})=\sum_{i=1}^{n} a_i Y_u \text{ where } a_i = \frac 1n + (x-\bar{x}) \frac{(x_i-\bar{x})}{S_{xx}}$$

Since $\tilde\mu(x)$ is a linear combination of Gaussian random variables it has a Gaussian distribution. We can use the above equation to determine the mean and variance of the random variable $\tilde\mu(x)$.

Therefore

$$E(\tilde\mu(x)) = \mu(x)$$

In other words $(\tilde\mu(x))$ is an unbiased estimator of $\mu(x)$. Also

$$Var(\tilde\mu(x)) = \sigma^2 \left( \frac{1}{n} + \frac{(x-\bar{X})^2}{S_{xx}} \right)$$

Note that the variance of $\tilde\mu$ is smallest in the middle of the data, or when $x$ is close to $\bar{x}$ and much larger when $(x-\bar{x})^2$ is large. In summary, we have shown that

$$\tilde\mu(x) \sim G \left( \mu(x), \sigma\sqrt{\frac{1}{n} + \frac{(x-\bar{x})^2}{S_{xx}}} \right)$$

#### Remark

Note that since $\alpha = \mu(0)$, a $95\%$ confidence interval for $\alpha$, is given with $x= 0$ which gives

$$\tilde\alpha \pm as_e \sqrt{\frac 1n + \frac{\bar{x}^2}{S_{xx}}}$$

In fact one can see that if $\bar{x}$ is large in magnitude (which means the average $x_i$ is large), then the confidence interval for $\alpha$ will be very wide. This would be disturbing if the value $x=0$ is a value of interest.

#### Prediction Interval for Future Response

Suppose we want to estimate or predict the $Y$ value for a random unit, not part of the sample, which has a specific value $x$ for its covariate. We can obtain a pivotal quantity that can be used to give a prediction interval (or interval estimate) for the future response $Y$, as follows

Note that $Y\sim G(\mu(x), \sigma)$ or alternatively

$$Y = \mu(x) +R$$

is independent of $Y_1,...,Y_n$. For a point estimator of $Y$ it is natural to use the maximum likelihood estimator $\tilde\mu(x)$ or $\mu(x)$. Moreover the error in the point estimator of $Y$ is given by

$$Y -\tilde\mu(x) = R + (\mu(x) - \tilde\mu(x))$$

Since $R$ is independent of $\tilde\mu(x)$ (it is not connected to the existing sample), it is the sum of independent distributed random variables and is consequently Normally distributed. Since

$$E(Y -  \tilde\mu(x)) = 0$$

and

$$Var(Y - \tilde\mu(x)) = \sigma^2 \left( 1+\frac 1n + \frac{(x-\bar{x})^2}{S_{xx}} \right)$$

we have

$$Y -\tilde\mu(x) \sim G \left( 0,\sigma \left( 1+\frac 1n + \frac{(x-\bar x)^2}{S_{xx}} \right)^{1/2} \right)$$

#### Remark

Care must be taken in constructing prediction intervals for values of $x$ which lie outside the interval of observed $x_i$'s since this assumes that the linear relationship holds beyond the observed data. It is dangerous since there are no data to support the assumption.

#### Remark

Note that the confidence interval for $\mu(x)$ and the prediction interval for $Y$ are winder the further away $x$ is from $\bar{x}$. Thus, as we move further away from the "middle" of the $x$'s in the data, we get winder and winder intervals for $\mu(x)$ and $Y$.

#### Checking the Model Assumptions for Simple Linear Regression

There are two main components in Gaussian linear response models:

1.	The assumption that $Y_i$ (given any covariates $x_i$) is Gaussian with constant standard deviation $\sigma$
2.	The assumption that $E(Y_i)=\mu(x_i)$ is a linear combination of observed covariates with unknown coefficients

Models should always be checked. In problems with only one $x$ covariate, a plot of the fitted line superimposed on the scatterplot of the data shows pretty clearly how well the model fits. If there are two or more covariates in the model, residual plots, which are described below, are very useful for checking the model assumptions.

Residuals are defined as the difference between the observed response and the fitted values. Consider the simple linear regression model for which $Y_i \sim G(\mu_i, \sigma)$ where $\mu_i = \alpha + \beta x_i$ and $R_i = Y_i -\mu_i \sim G(0, \sigma)$ The residuals are given by

$$\hat{r}_i = y_i - \hat\mu_i = y_i - \hat\alpha - \hat\beta x_i$$

The idea behind the $\hat{r}_i$ is that they can be thought of as "observed" $R_i$. This isn't exactly correct since we are using $\hat{\mu}$ instead of $\mu$ in $\hat{r}$, but if the model is correct, then the $\hat{r}$ should behave roughly like a random sample from the $G(0,\sigma)$ distribution. The $\hat{r}$ do have some features that can be used to check the model assumptions. Recall that the maximum likelihood estimate of $\alpha$ is $\hat{\alpha} = \bar{y} - \hat{\beta} \bar{x}$ which implies that $\bar{y} - \hat{\alpha} -\hat{\beta} \bar{x} = 0$ or

$$\frac{1}{n} \sum_{i=1}^n \hat{r}_i = 0$$

so that the average of the residuals is always zero.

Residual plots can be used to check the model assumptions. Here are three residual plots which can be used:

1.	Plot points $(x_i, \hat{r}_i)$ if the model is satisfactory the points should lie more or less horizontally within a constant band around the line $\hat{r}_i=0$
2.	Plot points $(\hat{\mu}_1, \hat{r}_i)$ if the model is satisfactory the points should lie more or less horizontally within a constant band around the line $\hat{r}_i=0$
3.	Plot a Normal qqplot of the residuals. If the model is satisfactory the points should lie more or less along a straight line.

