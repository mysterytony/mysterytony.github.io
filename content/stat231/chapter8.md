# Chapter 8 Causal Relationships

## 8.1 Establish Causation

As mentioned in Chapters 1 and 3, many studies are carried out with causal objectives in mind. That is, we would like to be able to establish or investigate a possible cause and effect relationship between variables $X$ and $Y$. 

We use the word "causes" often; for example we might say that "gravity causes dropped objects to fall to the ground", or that "smoking causes lung cancer". The concept of **causation** (as in "$X$ causes $Y$") is nevertheless hard to define. One reason is that the "strengths" of causal relationships vary a lot. For example, on earth gravity may always lead to a dropped object falling to the ground; however, not everyone who smokes gets lung cancer.

Idealized definitions of causation are often of the following form. Let $y$ be a response variate associated with units in a population or process, and let $x$ be an explanatory variate associated with some factor that may affect $y$. Then, if all other factors that affect $y$ are held constant, let us change $x$ (or observe different values of $x$) and see if $y$ changes. If $y$ changes then we say that $x$ has a causal effect on $y$.

In fact, this definition is not broad enough, because in many settings a change in $x$ may only lead to a change in $y$ in some probabilistic sense. For example, giving an individual person at risk of stroke a small daily dose of aspirin instead of a placebo may not necessarily lower their risk. (Not everyone is helped by this medication.) However, on average the effect is to lower the risk of stroke. One way to measure this is by looking at the probability a randomly selected person has a stroke (say within 3 years) if they are given aspirin versus if they are not. 

Therefore, a better idealized definition of causation is to say that changing $x$ should result in a change in some attribute of the random variable $Y$ (for example, its mean or some probability such as $P(Y>0)$). Thus we revise the definition above to say:

**If all other factors that affect $Y$ are held constant, let us change $x$ (or observe different values of $x$) and see if some specified attribute of $Y$ changes. If the specified attribute of $Y$ changes then we say $x$ has a causal effect on $Y$.**

These definitions are unfortunately unusable in most settings since we cannot hold all other factors that affect $y$ constant; often we don’t even know what all the factors are. However, the definition serves as a useful ideal for how we should carry out studies in order to show that a causal relationship exists. We try to design studies so that alternative (to the variate $x$) explanations of what causes changes in attributes of $y$ can be ruled out, leaving $x$ as the causal agent. This is much easier to do in experimental studies, where explanatory variables may be controlled, than in observational studies. 

## 8.2 Experimental Studies

Suppose we want to investigate whether a variate $x$ has a causal effect on a response variate $Y$. In an experimental setting we can control the values of $x$ that a unit "sees". In addition, we can use one or both of the following devices for ruling out alternative explanations for any observed changes in $Y$ that might be caused by $x$:

1.	Hold other possible explanatory variate fixed.
2.	Use randomization to control for other variates.

## 8.3 Observational Studies

In observational studies there are often unmeasured factors that affect the response $Y$. If these factors are also related to the explanatory variable $x$ whose (potential) causal effect we are trying to assess, then we cannot easily make any inferences about causation. For this reason, we try in observational studies to measure other important factors besides $x$. 

For example, Problem 1 at the end of Chapter 7 discusses an observational study on whether rust-proofing prevents rust. It is clear that an unmeasured factor is the care a car owner takes in looking after a vehicle; this could quite likely be related to whether a person decides to have their car rust-proofed.

## 8.4 Clofibrate Study

In the early seventies, the Coronary Drug Research Group implemented a large medical trial in order to evaluate an experimental drug, clofibrate, for its effect on the risk of heart attacks in middle-aged people with heart trouble. Clofibrate operates by reducing the cholesterol level in the blood and thereby potentially reducing the risk of heart disease

(rest of this section omitted, see book page 261)