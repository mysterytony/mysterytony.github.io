# Chapter 7 Multinomial Models And Goodness of Fit Tests

## 7.1 Likelihood Ratio Test for the Multinomial Model

Many important hypothesis testing problems can be addressed using Multinomial models. Suppose the data arise from a Multinomial models. Suppose the data arise from a Multinomial distribution with joint probability function

$$f(y_1,...,y_k;\theta_1,...,\theta_k) = \frac{n!}{y_1!...y_k!}\theta_1^{y_1}...\theta_k^{y_k}$$

where $y_i=0,1,...$ and $\sum_{j=1}^k y_i = n$. The Multinomial probability $\theta_j$ satisfy $0 < \theta_j < 1$ and $\sum_{j=1}^k \theta_j = 1$ so there are actually only $k-1$ unknown parameters in this model. The likelihood function is

$$L(\theta_1,...,\theta_k)=\frac{n!}{y_1!...y_k!}\theta_1^{y_1}...\theta_k^{y_k}$$

or more simply

$$L(\theta) = \prod_{j=1}^k \theta_j^{k_j}$$

where $\theta =(\theta_1,...,\theta_k)$. It can be shown that $L(\theta)$ is maximized by $\hat \theta = (\hat \theta_1,...,\hat \theta)$ where $\hat \theta_j = y_i/n, j = 1,2,...,k$.

Suppose that we wish to test the hypothesis that the probabilities $\theta_1,...,\theta_k$ are related in some way, for example, that they are all functions of a parameter $\alpha$, such that

$$H_0: \theta_j = \theta_j(\alpha) \text{ for } j=1,2,...,k$$

where $\alpha$ is a vector of length $p < k-1$. In other words, we assume that there are $p$ parameters to be estimated in the hypothesized model determined. A likelihood ratio test is based on the likelihood ratio statistic

$$\Lambda=-2\log \left[ \frac{L(\theta_0)}{L(\theta)} \right]$$

where $\theta_0$ maximizes $L(\theta)$ assuming the null hypothesis is true.

The test statistic can be written in s simple form. Let $\theta = (\theta_1(\tilde \alpha),...,\theta_k(\tilde \alpha))$ denote the maximum likelihood estimator of $\theta$ under the null hypothesis. Then

$$\Lambda = 2 \sum_{j=1}^k Y_j \log \left[ \frac{\tilde \theta_j}{\theta_j (\tilde\alpha)} \right]$$

Noting that $\tilde \theta_j = Y_j/n$ and defining the expected frequencies under $H_0$ as

$$E_j = n \theta_j (\tilde \alpha) \quad \text{for } j = 1,2,...,k$$

we can rewrite $\Lambda$ as

$$\Lambda = 2 \sum_{j=1}^k Y_j \log \left( \frac{Y_j}{E_j} \right)$$

Let

$$\lambda =  2 \sum_{j=1}^k y_j \log \left( \frac{y_j}{e_j} \right)$$

be the observed value of $\Lambda$. Note that the value of $\lambda$ will be close to 0 if the observed values $y_1,...,y_k$ are close to the expected values $e_1,...,e_k$ where $e_j = n \theta_j(\tilde\alpha), j=1,...,k$ and that the value of $\lambda$ will be large if the $y_i$'s and $e_j$'s differ greatly.

If $n$ is large and $H_0$ is true then the distribution of $\Lambda$ is approximately $\mathcal X^2 (k-p-1)$. This enables us to compute $p$-values from observed data by using the approximation

$$p-\text{value} =P(\Lambda \geq \lambda;H_0) \approx P(W \geq \lambda) \text{ where } W \sim \mathcal X^2(k-p-1)$$

This approximation is accurate when $n$ is large and none of the $\theta_j$'s is too small. In particular, the expected frequencies determined assuming $H_0$ is true should all be at least 5 to use the Chi-squared approximation.

An alternative test statistic that was developed historically before the likelihood ratio test statistic is the Person goodness of fit statistic

$$D=\sum_{j=1}^k \frac{(Y_j-E_j)^2}{E_j}$$

with observed value

$$d=\sum_{j=1}^k \frac{(y_j-e_j)^2}{e_j}$$

The Pearson goodness of fit statistic has similar properties to $\Lambda$, that is, $d$ takes on small values if the $y_i$ and $e_i$ are close in value and $d$ takes on large values if the $y_i$ and $e_i$ differ greatly. It also turns out that, like $\Lambda$, the statistic $D$ has limiting $\mathcal X^2 (k-p-1)$ distribution when $H_0$ is true.

The reminder of this chapter consists of the application of the general methods above to some important testing problems.

## 7.2 Goodness of Fit Tests

Recall from Section 2.4 that one way to check the fit of a probability distribution is by comparing the observed frequencies $f_j$ and the expected frequencies $e_j=n \hat p_j$. As indicated there we did not know how close the observed and expected frequencies needed to be to conclude that the model was adequate. It is possible to test the correctness of a model by using the Multinomial model.

## 7.3 Two-Way (Contingency) Tables

Often we want to assess whether two factors or variates appear to be related. One tool for doing this is to test the hypothesis that the factors are independent and thus statistically unrelated. We will consider this in the case where both variates are discrete, and take on a fairly small number of possible values. This turns out to cover a great many important settings.

Two types of studies give rise to data that can be used to test independence, and in both cases the data can be arranged as frequencies in a two-way table. These tables are also called contingency tables.

#### Cross-Classification of a Random Sample of Individuals

Suppose that individuals or items in a population can be classified according to each of two factors $A$ and $B$. For $A$, an individual can be any of $a$ mutually exclusive types $A_1,...,A_a$ and for $B$ an individual can be any of $b$ mutually exclusive types $B_1,...,B_b$ where $a \geq 2$ and $b \geq 2$.

If a random sample of $n$ individuals is selected, let $y_{ji}$ denote the number that have $A$-type $A_i$ and $B$-type $B_j$. The observed data may be rearranged in a two-way table.

|  | $B_1$ | ... | $B_b$ | Total |
|---|---|---|---|---|
| $A_1$ | $y_{11}$ | ... | $y_{1b}$ | $r_1$ |
| ... | ... | | ... | ... |
| $A_a$ | $y_{a1}$ | ... | $y_{ab}$ | $r_a$ |
| Total | $c_1$ | ... | $c_b$ | $n$ |

where $r_i = \sum_{j=1}^b y_{ij}$, $c_j=\sum_{j=1}^a y_{ij}$ and $\sum_{i=1}^a \sum_{j=1}^b y_{ij} n$. Let $\theta_{ij}$ be the probability a randomly selected individual is combined type $(A_i, B_j)$ and note that $\sum_{i=1}^a \sum_{j=1}^b \theta_{ij} = 1$. The $a \times b$ frequencies $(Y_{11},...,Y_{ab})$ follow a Multinomial distribution with $k=ab$ classes.

To test independence of the $A$ and $B$ classifications, we test the hypothesis

$$H_0:\theta_{ij} = \alpha_{i} \beta_{j} \text{ for } i=1,...,a; \, j=1,...,b$$

where $0 < \alpha_i , \beta_j < 1$, $\sum_{i=1}^a = \sum_{j=1}^b = 1$. Note that

$$\alpha_i = P(\text{an individual is type } A_i)$$

and

$$\beta_i = P(\text{an individual is type } B_i)$$

and that is the standard definition for independent events: $P(A_i \cap B_j) = P(A_i)P(B_j)$.

We recognize that testing falls into the general framework of Section 7.1, where $k=ab$, and the number of parameters estimated is $p =( a−1)+(b−1) = a+b−2$. All that needs to be done in order to use the statistics  to test $H_0$ is to obtain the maximum likelihood estimates $\hat \alpha \hat beta$ under the model, and then then calculate the expected frequencies $e_{ij}$.

The likelihood function for $y_{ij}$ is

$$L_1(\alpha, \beta) = \prod_{i=1}^a \prod_{j=1}^b [\theta_{ij} (\alpha, \beta)]^{y_{ij}} = \prod_{i=1}^a \prod_{j=1}^b (\alpha_i \beta_j)^{y_{ij}}$$

The log likelihood function $l(\alpha, \beta) = \log L(\alpha, \beta)$ must be maximized subject to the linear constraints $\sum_{i=1}^a = \sum_{j=1}^b = 1$. The maximum likelihood estimates can be shown to be

$$\hat \alpha_i = \frac{r_i}{n}, \hat \beta_i = \frac{c_i}{n}$$

and the expected frequencies are given by

$$e_{ij} = n \hat \alpha_i \hat \beta_j = \frac{r_i c_j}{n}$$

The observed value of the likelihood ratio statistic for testing the hypothesis is then

$$\lambda 2 \sum_{i=1}^a \sum_{j=1}^b y_{ij} \log \left( \frac{y_{ij}}{e_{ij}} \right)$$

The degree of freedom for the Chi-squared approximation are

$$k-p-q = (ab-1)-(a-1+b-1)=(a-1)(b-1)$$

and the approximate $p$-value is given by

$$p-\text{value} = P(\Lambda \geq \lambda; H_0)\approx P(W \geq \lambda) \quad\text{where } W \sim \mathcal X^2 ((a-1)(b-1))$$

#### Testing Equality of Multinomial Parameters from Two or More Groups

A similar problem arises when individuals in a population can be one of $b$ types $B_1,..,B_b$ but where the population is sub-divided into $a$ groups $A_1,...,A_a$. In this case we might be interested in whether the proportions of individuals of types $B_a,...,B_b$ are the same for each group. This is essentially the same as the question of independence in the preceding section: we want to know whether the probability $\theta_{ij}$ that a person in population group $i$ is $B$-type $B_j$ is the same for all $i=1,2,...,a$. That is, $\theta_{ij}=P(B_j|A_i)$ and we want to know if this depends on $A_i$ or not.

Although the framework is superficially the same as the preceding section, the details are a little different. In particular, the probabilities $\theta_{ij}$ satisfy

$$\theta_{i1}+...+\theta_{ib}=1, \text{ for each } i =1,2,...,a$$

and the hypothesis we are interested in testing is

$$H_o=0: \theta_1=...=\theta_a$$

where $\theta_i=(\theta_{i1},...,\theta_{ib})$. Furthermore, the data in this case arise by selecting specified number of individuals $n_i$ from groups $i=1,2,...,a$ and so there are actually $a$ Multinomial distributions, Multinomial $(n_i;\theta_{i1},...,\theta_{ib})$.

If we denote the observed frequency of $B_j$ type individuals in the sample from the $i$-th group as $y_{ij}$, then it can be shown that the likelihood ratio statistic for testing is exactly the same, where now the expected frequencies $e_{ij}$ are given by

$$e_{ij} = n_i \left( \frac{y_{+j}}{n} \right) \quad i=1,...,a \quad j=1,...,b$$

where $n=n_1+n_2+...+n_a$ and $y_{+j}=\sum_{i=1}^a y_{ij}$. Since $n_i = y_{i+} = \sum_{j=1}^b y_{ij}$ the expected frequencies have exactly the same form as in the preceding section, when we lay out the data in a two-way table with $a$ rows and $b$ columns.

