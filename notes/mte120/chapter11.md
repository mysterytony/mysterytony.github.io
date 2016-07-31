# Chapter 11 AC Steady-State Power

## 11.1 Introduction

In this chapter, we continue our study of ac circuits. In particular, we will see the following: 

*	The power supplied or received by any element of an ac circuit can be conveniently calculated after representing the circuit in the frequency domain. 
	Power in ac circuits is an important topic. Engineers have developed an extensive vocabulary to describe power in an ac circuit. We’ll encounter average power,real and reactive power, complex power, the power factor, rms values, and more. 
*	AC circuits that contain coupled inductors and/or ideal transformers can be conveniently analyzed in the frequency domain.
	Both coupled inductors and ideal transformers consist of magnetically coupled coils. (Coils may be tightly coupled or loosely coupled. The coils of an ideal transformer are perfectly coupled.) After representing coupled inductors and transformers in the frequency domain, we will be able to analyze ac circuits containing these devices.

## 11.2 Electric Power

Human civilization’s progress has been enhanced by society’s ability to control and distribute energy. Electricity serves as a carrier of energy to the user. Energy present in a fossil fuel or a nuclear fuel is converted to electric power to transport and readily distribute it to customers. By means of transmission lines, electric power is transmitted and distributed to essentially all the residences, industries, and commercial buildings in the United States and Canada.

Electric power may be transported readily with low attendant losses, and improved methods for safe handling of electric power have been developed over the past 90 years. Furthermore, methods of converting fossil fuels to electric power are well developed, economical, and safe. Means of converting solar and nuclear energy to electric power are currently in various stages of development or of proven safety. Geothermal energy, tidal energy, and wind energy may also be converted to electric power. The kinetic energy of falling water may readily be used to generate hydroelectric power.

## 11.3 Instantaneous Power and Average Power

We are interested in determining the power generated and absorbed in a circuit or in an element of a circuit. Electrical engineers talk about several types of power, for example, instantaneous power, average power, and complex power. We will start with an examination of the instantaneous power, which is the product of the time-domain voltage and current associated with one or more circuit elements. The instantaneous power is likely to be a complicated function of time. This prompts us to look for a simpler measure of the power generated and absorbed in  a circuit element, such as the average power.

Consider the circuit element shown in Figure 11.3-1. Notice that the element voltage $v(t)$ and the element current $i(t)$ adhere to the passive convention. The **instantaneous power** delivered to this circuit element is the product of the voltage $v(t)$ and the current $i(t)$, so that

$$p(t) = v(t)i(t)$$

The unit of power is watts (W). We can always calculate the instantaneous power because no restrictions have been placed on either $v(t)$ or $i(t)$. The instantaneous power can be a quite complicated function of $t$ when $v(t)$ or $i(t)$ is itself a complicated function of $t$.

![](11.3.1.png)

Suppose that the voltage $v(t)$ is period function having period $T$. That is

$$v(t) = v(t+T)$$

because the voltage repeats every $T$ seconds. Then, for a linear circuit, the current will also be periodic function having the same period, so

$$i(t) = i(t+T)$$

Therefore, the instantaneous power is

$$p(t) = v(t)i(t) = v(t+T)i(t+T)$$

The *average value* of a periodic function is the integral of the time function over a complete period, divided by the period. We use a capital $P$ to denote average power and a lowercase $p$ to denote instantaneous power. Therefore, the average power $P$ is given by

$$P = \frac{1}{T} \int_{t_0}^{t_0+T} p(t)dt$$

where $t_0$ is an arbitrary starting point in time.

Next, suppose that the voltage $v(t)$ is sinusoidal, that is

$$v(t) = V_m \cos (\omega t + \theta_V)$$

Then, for a linear circuit at steady state, the current will also be sinusoidal and will have the same frequency, so

$$i(t) = I_m \cos (\omega t + \theta_I)$$

The period and frequency of $v(t)$ and $i(t)$ are related by

$$\omega = \frac{2\pi}{T}$$

The instantaneous power delivered to the element is

$$p(t) = V_m I_m \cos (\omega t + \theta_V) \cos (\omega t + \theta_I)$$

Using the trigonometric identity for the product of two cosine functions,

$$p(t) = \frac{V_m I_m}{2} [\cos (\theta_V - \theta_I) + \cos (2\omega t + \theta_V + \theta_I)]$$

We see that the instantaneous power has two terms. The first term within the brackets is independent of time, and the second term varies sinusoidally over time at twice the radian frequency of $v(t)$.

The average power delivered to the element is

$$P = \frac 1T \int_0^T \frac{V_m I_m}{2} [\cos (\theta_V - \theta_I) + \cos (2\omega t + \theta_V + \theta_I)] dt$$

where we have chosen $t_0 = 0$. Then we have

$$P = \frac{V_m I_m \cos(\theta_V - \theta_I)}{2T} \int_0^T dt + \frac{V_m I_m}{2T} \int_0^T \cos (2\omega t+\theta_V + \theta_I)dt$$

The second integral is zero because the average value of the cosine function over a complete period is zero. Then we have

$$P = \frac{V_m I_m}{2} \cos (\theta_V - \theta_I)$$

## 11.4 Effective Value of a Periodic Waveform

