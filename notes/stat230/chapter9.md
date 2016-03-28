[<- Go Back](../../index.html)

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



