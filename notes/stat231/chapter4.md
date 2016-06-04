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