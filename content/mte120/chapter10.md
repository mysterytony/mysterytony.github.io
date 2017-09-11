# Chapter 10 Sinusoidal Steady-State Analysis$\newcommand{\b}{\mathbf}$

## 10.1 Introduction

Consider the experiment illustrated in Figure 10.1-1.

![](http://tonyli.tk/notes/mte120/10.1.1.png)

Here, a function generator provides the input to a linear circuit and the oscilloscope displays the output, or response, of the linear circuit. The linear circuit itself consists of resistors, capacitors, inductors, and perhaps dependent sources and/or op amps. The function generator allows us to choose from several types of input function. These input functions are called waveforms or waves. A typical function generator will provide square waves, pulse waves, triangular waves, and sinusoidal waves.

The output of the circuit will consist of two parts: a transient part that dies out as time increases and a steady-state part that persists. Typically, the transient part dies out quickly, perhaps in a couple of milliseconds. We expect that the oscilloscope in Figure 10.1-1 will display the steady-state response of the linear circuit to the input provided by the function generator.

Suppose we select a sinusoidal input. The function generator permits us to adjust the amplitude, phase angle, and frequency of the input. We notice that no matter what adjustments we make, the (steady-state) response is always a sine wave at the same frequency as the input. The amplitude and phrase angle of the output differ from input, but the frequency is always the same.

Suppose we select a square wave input. The steady-state response is not a square wave. Similarly, the steady-state responses to pulse waves and triangular waves do not have the same shape as the input.

Linear circuits with sinusoidal inputs that are at steady state are called ac  circuits. The electric power system that provides us with convenient electricity is a very large ac circuit. AC circuits are the subject of this chapter. In particular, we will see that

*	It's useful to associate a complex number with a sinusoid. Doing so allows us to define phasors and impedances.
*	Using phasors and impedances, we obtain a new representation of the linear circuit, called the "frequency-domain representation".
*	We can analyze ac circuit in the frequency domain to determine their steady-state response.

## 10.2 Sinusoidal Sources

In this chapter, we will begin to consider electric circuits in which the source voltage or source current is sinusoidal. Such circuits play a prominent role in both communication systems and in power systems. There are so many important applications of these circuits that it is difficult to overstate their importance.

Consider a circuit having sinusoidal inputs. The inputs to a circuit are the independent voltage source voltages and the independent current source currents, so we are considering a circuit having sinusoidal source voltages and source currents. For now, assume that all of the sinusoidal inputs have the same frequency.

In chapter 8 and 9, we've seen that the output or response of such circuit consists of the sum of the natural response and the forced response, for example,

$$v(t) = v_n(t) +v_f(t)$$

When all of the inputs to the circuit are sinusoids having the same frequency, the forced response $v_f(t)$ is also a sinusoid having the same frequency as the inputs. As time goes on, the transient part of the response dies out. The part of the response that is left is called the steady-state response. Once the transient part of the response has died out, we way that the circuit is "at steady state." In the case of sinusoidal inputs having the same frequency, the steady-state response is equal to the forced response, a sinusoid at the input frequency.

We can choose the output of our circuit to be any voltage or current that is of interest to us. We conclude that when a circuit satisfies the two conditions that (1) all of the inputs are sinusoidal and have the same frequency and (2) the circuit is at steady state, then all of the currents and voltages are sinusoidal and have the frequency as the inputs. Traditionally, sinusoidal currents have been called alternating currents (ac) and circuit that satisfy the above condition are called ac circuits.

To summarize, an ac circuit is a steady-state circuit in which all of the inputs are sinusoidal and have the same frequency. All of the currents and voltages of an ac circuit are sinusoidal at the input frequency.

![](http://tonyli.tk/notes/mte120/10.2.1.png)

Consider the sinusoidal function

$$v(t) = A \sin(\omega t) V$$

shown in Figure 10.2-1. The parameter $A$ in the equation and also in the figure is called the amplitude of the sinusoid. The sinusoid is a periodic function defined by the property

$$v(t+T)=v(t)$$

for all time. The constant $T$ is called the "period of oscillation" or just the "period". The reciprocal of $T$ defines the frequency or number of cycles per second, denoted by $f$, where

$$f = \frac{1}{T}$$

The unit of frequency are hertz (Hz) in honor of the scientist Heinrich Hertz. The angular frequency of the sinusoidal function is

$$\omega = 2\pi f = \frac{2 \pi}{T}$$

The units of angular frequency are radians per second.

Next, consider the effect of replacing $t$ by $t+t_a$ where $t_a$ is some arbitrary constant time. As shown in Figure 10.2-3, $v(t+t_a)$ is a sinusoid that is identical to $v(t)$ except that $v(t-t_a)$ is advanced from $v(t)$ by time $t_a$. We have

$$v(t+t_a) = A\sin(\omega (t+t_a)) = A\sin(\omega t + \omega t_a) = A \sin (\omega t + \theta) V$$

where $\theta$ is in radian and is called the phase angle of the sinusoid $A \sin(\omega t + \theta)$. The phase angle in radian is related to the time $t_a$ by

$$\theta = \omega t_a = \frac{2\pi}{T} t_a$$

Similarly, replacing $t$ by $t-t_d$ produces a sinusoid that is identical to $v(t)$ except that $v(t-t_d)$ is delayed from $v(t)$ by

$$\theta = - \omega t_d = - \frac{2\pi}{T} t_d$$

Notice that an advance or delay of a full period leaves a sinusoid unchanged, that is $v(t \pm T) = v(t)$. Consequently, an advance by time $t_a$ is equivalent to a delay by time $T-t_a$. Similarly, a delay by time $t_d$ is equivalent to an advance by time $T-t_d$.

Next, consider the problem of obtaining an analytic representation $A \cos(\omega t + \theta)$ of a sinusoid that is given graphically. This problem is frequently encountered by engineers and engineering students in the laboratory. Frequently, an engineer will see a sinusoidal displayed on an oscilloscope and need to represent that voltage using an equation. The analytic representation of the sinusoid is obtained in three steps. The first two are straightforward. The first requires some attention. The procedure is illustrated in Figure 10.2-5, which shows two sinusoidal voltages.

![](http://tonyli.tk/notes/mte120/10.2.5.png)

1.	 Measure the amplitude, $A$. The location of the time axis may not be obvious when the sinusoidal voltage is displayed on an oscilloscope, so it may be more convenient to measure the peak-to-peak amplitude $2A$ as shown.
2.	Measure the period $T$ in s and calculate the frequency $\omega = 2\pi / T$ in rad/s.
3.	Pick a time and measure the voltage at that time. For example, $t= t_1 = 0.15 s$ at the point marked in the figure. Notice that $v_1(t_1) = v_2(t_1) = 10.6066V$, but $v_1(t_1)$ and $v_2(t_1)$ are clearly not the same sinusoid. The additional information needed to distinguish these two sinusoids is that $v_1(t)$ is increasing (positive slope) at time $t_1$, whereas $v_2(t)$ is decreasing (negative slope) at time $t_1$. Finally, calculate the phase angle $\theta$ of a sinusoidal voltage $v(t)$ as


$$\theta = \begin{cases} - \cos ^{-1} \left( \frac{v(t_1)}{A} \right) - \omega t_1 & \text{when } v(t) \text{ is increasing at time } t_1 \\\
 \cos ^{-1} \left( \frac{v(t_1)}{A} \right) - \omega t_1 & \text{when } v(t) \text{ is decreasing at time } t_1
\end{cases}$$

## 10.3 Phasors and Sinusoids

A current or voltage in an ac circuit is a sinusoid at the input frequency. Such a current or voltage is characterized by its amplitude and phrase angle.

A phasor is a complex number that is used to represent the amplitude and phase angle of a sinusoid. The relationship between the sinusoid and the phasor is described by

$$ A \cos(\omega + \theta) \quad \leftrightarrow \quad A \angle \theta $$

There are a couple of things that we should notice. First, the sinusoid is represented using the cosine rather than the sine function. Second, the phasor is a complex number represented in polar form. The magnitude of the phasor is equal to the amplitude of the sinusoid, and the angle of the phasor is equal to the phase angle of the sinusoid.

We will use the lowercase $i$ and $v$ to indicate a sinusoidal current or voltage, often with a subscript. Often, we will explicitly indicate that a sinusoid is function of time, but sometimes we will write $i_1$ instead of $i_1(t)$. We will use bold upper case $\mathbf{I}$ and $\mathbf{V}$ to indicate the corresponding phasor current or voltage with the same subscript. In general, the phasors are functions of the input frequency. In an ac circuit, the input frequency is fixed and we often shorten $\mathbf{I}_1(\omega)$ to $\mathbf{I}_1$.

Figure 10.3-1a shows the phasor as a complex number $\mathbf{V}$, represented by a point in the complex plane. In Figure 10.3-1a, a line segment is drawn from the origin of the complex plane to the point representing the phasor. The angle of this line segment $\theta$ , measured counter-clockwise from the real axis, is the angle of the phasor. The length of the line segment $A$ is called the magnitude of the phasor. The polar form represents the phasor in terms of its magnitude and angle. To indicate that $A$ is the magnitude of the phasor $\mathbf{V}$ and that $\theta$ is the angle of $\mathbf{V}$, we write

$$A = |\mathbf{V}| \quad \theta = \angle \mathbf{V}$$

![](http://tonyli.tk/notes/mte120/10.3.1.png)

Figure 10.3-1b shows an alternate representation of the phasor $\mathbf{V}$. As before, $\mathbf{V}$ is represented by a point in the complex plane. In Figure 10.3-1b, the real numbers $a$ and $b$ are identified by the projections of the point onto the real and imaginary axis. Consequently, $a$ is called the **real part** of $\mathbf{V}$ and $b$ is called the **imaginary part** of $\mathbf{V}$. We write

$$a = Re\\{\mathbf{V}\\} \quad b = Im\\{\mathbf{V}\\}$$

and represent $\mathbf{V}$ as a complex number in rectangular form as

$$\mathbf{V} = a+ jb$$

where $j = \sqrt{-1}$

![](http://tonyli.tk/notes/mte120/10.3.2.png)

Figure 10.3-2 shows a phasor $\mathbf{V}$ with $Re\\{\mathbf{V}\\}<0$. Notice that $\theta$, not $\psi$ is the angle of $\mathbf{V}$. Since a phasor can be expressed in both rectangular and polar forms, we write

$$ a + jb = \mathbf{V} = A \angle \theta$$

The trigonometry of Figure 10.3-1 and 10.3-2 provides the following equations for converting between the rectangular and polar forms of phasor.

$$a = A\cos (\theta) \quad b = A\sin (\theta) \quad A = \sqrt{a^2 + b^2}$$

and

$$\theta = 
\begin{cases} \tan^{-1} \left(\frac ba \right) & a > 0 \\\
180 ^{\circ} - \tan^{-1} \left( \frac{b}{-a} \right) & a < 0 \end{cases}$$

Several special cases are worth noticing:

$$1 = 1 \angle 0 \quad j = 1 \angle 90 \quad -1 = 1 \angle \pm 180 \quad -j = 1\angle -90 = 1 \angle 270$$

Next, consider doing arithmetic with phasors. Suppose we have two phasors, $\mathbf{V}_1$ and $\mathbf{V}_2$, each represented in both rectangular and polar forms. That is

$$\mathbf{V}_1 = a+jb = E \angle \theta \quad \mathbf{V}_2 = c + jd = F \angle \psi$$

where, for example, $a$ and $b$, the real and imaginary parts of $\mathbf{V}_1$, can be calculated from $E$ and $\theta$, the magnitude and angle of $\mathbf{V}_1$. Phasor are added using the rectangular forms of the phasors as follows:

$$\mathbf{V}_1 + \mathbf{V}_2 = (a+jb) + (c+jd) = (a+c) + j(b+d)$$

$$\mathbf{V}_1 - \mathbf{V}_2 = (a+jb) - (c+jd) = (a-c) + j(b-d)$$

Phasors are multiplied and divided using the polar forms of the phasors as follows:

$$\mathbf{V}_1 \cdot \mathbf{V}_2 = (E\angle \theta)(F\angle \psi) = EF \angle(\theta + \psi)$$

$$\frac{\mathbf{V}_1}{\mathbf{V}_2} = \frac{A \angle \theta}{B \angle \psi} = \frac{A}{B} \angle (\theta - \psi)$$

The conjugate of the phasor $\mathbf{V}_1 = a + jb$ is denoted as $\mathbf{V}_1^*$ and is defined as

$$\begin{align\*} \mathbf{V}_1^* &= (a+jb)^* = a - jb \\\
&= (E \angle \theta)^* = E \angle - \theta \end{align\*}$$

Two phasors $\mathbf{V}_1$ and $\mathbf{V}_2$ are equal to each other if and only if one of the following two conditions is satisfied:

1.	Both $Re\\{\mathbf{V}_1\\} = Re\\{\mathbf{V}_2\\}$ and $Im\\{\mathbf{V}_1\\} = Im\\{\mathbf{V}_2\\}$.
2.	Both $|\mathbf{V}_1|=|\mathbf{V}_2|$ and $\angle \mathbf{V}_1 = \angle \mathbf{V}_2$.

Conditions 1 and 2 are not independent. If $\mathbf{V}_1=\mathbf{V}_2$, then both conditions are satisfied. In either conditions is satisfied, then $\mathbf{V}_1=\mathbf{V}_2$ and the other condition is also satisfied.

The use of phasors to represent sinusoids is based on Euler's formulas. Euler's formula is

$$e^{j\psi} = \cos \psi + j \sin \psi$$

Consequently,

$$A e^{j\psi} = A \cos \psi + j A\sin \psi$$

Using the equations we have

$$A \cos \psi + j A \sin \psi = A \angle \psi$$

Consequently

$$A e^{j\psi} = A \angle \psi$$

$A e^{j\psi}$ is called the exponential form of a phasor. The conversion between the polar and exponential forms is immediate. In both, $A$ is the amplitude of the sinusoid and $\psi$ is the phase angle of the sinusoid.

Next, consider

$$A e^{j(\omega t + \theta)} = A \cos(\omega t + \theta) + j A \sin(\omega t + \theta)$$

Taking the real part of the both sides gives

$$A \cos (\omega t + \theta) = Re\\{ Ae^{j(\omega t + \theta)} \\} = Re \\{ A e^{j\theta} e^{j\omega t} \\}$$

Consider a sinusoid and corresponding phasor

$$v(t) = A \cos(\omega t + \theta) V \quad \mathbf{V}(\omega) = A \angle \theta = A e^{j\theta} V$$

Substituting gives

$$v(t) = Re \\{ \mathbf{V} (\omega) e^{j\omega t} \\}$$

Next, consider a KVL or KCL equation from an ac circuit, for example,

$$0 = \sum_i v_i(t)$$

We can write it as:

$$0 = \sum_i Re\\{ \mathbf{V}_i(\omega) \\} = Re \\{ e^{j\omega t} \sum_i \mathbf{V}_i (\omega) \\}$$

It is required to be true for all values of time $t$. Let $t=0$. Then $e^{j\omega t}=e^0=1$ and it becomes

$$0 = Re \\{\sum_i \mathbf{V}_1(\omega) \\}$$

Next, let $t = \pi/(2 \omega)$. Then $e^{j\omega t}=e^{-j \pi /2} = -j$ and it becomes

$$0 = Re \\{ -j\sum_i \mathbf{V}_i(\omega) \\} = Im \\{ \sum_i \mathbf{V}_i(\omega) \\}$$

Together, they indicates that the phasor $a$ an $\sum_i \mathbf V_i(\omega)$ are equal.

In summary, if a set of sinusoidal voltages $v_i(t)$ satisfy KVL for an ac circuit, the corresponding phasor voltage $\mathbf V_i(\omega)$ satisfy the same KVL equation. Similarly, if a set of sinusoidal currents $i_i(t)$ satisfy KCL for an ac circuit, the corresponding phasor currents $\mathbf{I}_i (\omega)$ satisfy the same KCL equation.

## 10.4 Impedance

We've seen that all of the currents and voltages of an ac circuit are sinusoids at the input frequency. Figure 10.4-1a shows an element of an ac circuit. The element voltage and element current are labeled as $v(t)$ and $i(t)$. We can write

$$v(t) = V_m \cos (\omega t + \theta) V \quad i(t) = I_m \cos (\omega t + \psi) A$$

where $V_m$ and $I_m$ are the amplitudes of the sinusoidal voltage and current, $\theta$ and $\psi$ are the phase angles of the voltage and current, and $\omega$ is the input frequency. The corresponding phasors are

$$\mathbf V(\omega) = V_m \angle \theta V \quad \mathbf I(\omega) = I_m \angle \psi A$$

Figure 10.3-1b shows the circuit element again, not labeled with the phasor voltage and current $\mathbf V(\omega)$ and $\mathbf I(\omega)$. Notice that the voltage and current adhere to the passive convention in both Figure 10.3-1a and Figure 10.4-1b.

The impedance of an element of an ac circuit is defined to be the ratio of the voltage phasor to the current phasor. The impedance is denoted as $\mathbf Z(\omega)$ so

$$\mathbf Z (\omega) = \frac{\mathbf V(\omega)}{\mathbf I (\omega)} = \frac{V_m \angle \theta}{I_m \angle \psi} = \frac{V_m}{I_m} \angle (\theta - \psi) \Omega$$

Consequently,

$$\mathbf V (\omega) = \mathbf Z (\omega) \mathbf I (\omega)$$

![](http://tonyli.tk/notes/mte120/10.4.1.png)

which is **Ohm's law for ac circuits**. The admittance of an element of an ac circuit is the reciprocal of its impedance. The admittance is denoted as $\mathbf Y (\omega)$ so

$$\mathbf Y (\omega) = \frac{1}{\mathbf Z (\omega)} = \frac{\mathbf I (\omega)}{\mathbf V (\omega)}$$

To distinguish the two representations of the circuit element in Figure 10.4-1, we say the Figure 10.4-1a represents the circuit element in the **time domain** and Figure 10.4-1b represents the circuit element in the **frequency domain**.

Consider a capacitor in an ac circuit as shown in Figure 10.4-2a. We know that the capacitor voltage is a sinusoid at the input frequency so we can write

$$v_C(t) = A \cos (\omega t + \theta) V$$

The corresponding capacitor current is

$$i_C(t) = C \frac{d}{dt} v_C(t) = - C \omega A \sin (\omega t + \theta) = C \omega A \sin(\omega t + \theta + 90^{\circ}) A$$

The phasor corresponding to the capacitor voltage and current are

$$\mathbf V_C(\omega) = A\angle \theta \quad \mathbf I_C(\omega) = C\omega A\angle (\theta + 90^{\circ})(A \angle \theta) = j \omega C A \angle \theta A$$

The impedance of the capacitor is given by the ratio of the voltage phasor to the current phasor:

$$\mathbf Z_C(\omega) = \frac{\mathbf V_C(\omega)}{\mathbf I_C (\omega)} = \frac{A \angle \theta}{j\omega CA \angle \theta} = \frac{1}{j\omega C} \Omega$$

By convention, we label the capacitor by its impedance in the frequency domain as shown in Figure 10.4-ab. Using the equation we write:

$$\mathbf V_C(\omega) = \frac{1}{j\omega C} \mathbf I_C(\omega)$$

![](http://tonyli.tk/notes/mte120/10.4.2.png)

Figure 10.4-3 shows an inductor in an ac circuit. We know that the inductor current is a sinusoid at the input frequency, so we can write

$$i_L(t) = A \cos (\omega t + \theta) A$$

The corresponding inductor voltage is

$$v_L(t) = L \frac{d}{dt} i_L(t) = - L\omega A \sin(\omega t + \theta) = L \omega A \cos (\omega t + \theta + 90^{\circ}) V$$

The phasors corresponding to the inductor current and voltage are

$$\mathbf I_L (\omega) = A \angle \theta \quad \mathbf V_L(\omega) L \omega A \angle (\theta + 90^{\circ}) = j \omega L A \angle \theta V$$

The impedance of the inductor is given by the ratio of the voltage phasor to the current phasor:

$$\mathbf Z_L(\omega) = \frac{\mathbf V_L(\omega)}{\mathbf I_L(\omega)} = \frac{j\omega LA \angle \theta}{A \angle \theta} = j\omega L \Omega$$

We label the inductor by its impedance in the frequency domain as shown in Figure 10.4-3b. Using the equation we write

$$\mathbf V_L(\omega) = j \omega L \mathbf I_L(\omega)$$

![](http://tonyli.tk/notes/mte120/10.4.3.png)

![](http://tonyli.tk/notes/mte120/10.4.4.png)

A resistor from an ac circuit in Figure 10.4-4a. We know that the resistor voltage is a sinusoid at the input frequency so we can write

$$v_R(t) = A \cos (\omega t + \theta)$$

The resistor current is

$$i_R(t) = \frac{v_R(t)}{R} = \frac{A}{R} \cos (\omega t + \theta)$$

The impedance of the resistor is the ratio of the voltage phasor to the current phasor:

$$\mathbf Z_R(\omega) = \frac{\mathbf V_R (\omega)}{\mathbf I_R (\omega)} = \frac{A \angle \theta}{\frac AR \angle \theta} = R \Omega$$

The impedance of a resistor is numerically equal to the resistance. Using the equation we write:

$$\mathbf V_R(\omega) = R \mathbf I_R(\omega)$$


Notice that in the time domain, voltage and currents are represented as sinusoids, while in the frequency domain, voltages and currents are represented as phasors. In the time domain,resistors, capacitors, and inductors are represented by their resistance, capacitance, or inductance, while in the frequency domain, resistors, capacitors, and inductors are represented by their impedance.

![](http://tonyli.tk/notes/mte120/10.4.9.png)

Consider a dependent source in an ac circuit as shown in Figure 10.4-9a. The controlling current $i_a(t)$ is a sinusoid at the input frequency.

$$i_a(t) = A \cos(\omega t + \theta)$$

The controlled voltage is given by

$$v_b(t) = K i_a(t) = KA\cos (\omega t + \theta)$$

The corresponding phasors are

$$\mathbf I_a(\omega) = A \angle \theta \quad \mathbf V_b(\omega) = KA \angle \theta = K \mathbf I_a (\omega)$$

Figure 10.4-9b shows the frequency domain representation of the dependent source.

## 10.5 Series and Parallel Impedances

Figure 10.5-1a shows a circuit called "Circuit A" connected to two series impedances. Using KCL in Figure 10.5-1 shows that

$$\mathbf I_1 = \mathbf I_2 = \mathbf I$$

Using Ohm's law in Figure 10.5-1a shows that

$$\b V_1 = \b Z_1 \b I_z = \b Z_1 \b I \quad \b V_2 = \b Z_2 \b I_z = \b Z_2 \b I$$

The impedance of the series combination of $\b Z_1$ and $\b Z_2$ is given by

$$\frac{\b V}{\b I} = \b Z_1 + \b Z_2$$

We call this impedance the equivalent impedance of the series impedance and write

$$\b Z_{eq} = \b Z_1 + \b Z_2$$

We say that the impedance $\b Z_eq$ is equivalent to the series combination of $\b Z_1$ and $\b Z_2$ because replacing $\b Z_1$ and $\b Z_2$ in Figure 10.5-1a by $\b Z_{eq}$ in Figure 10.5-1b will not change the current or voltage of any element of Circuit A. It generalizes to the case of $n$ series impedances.

$$\b Z_{eq} = \b Z_1 + ... + \b Z_n$$

![](http://tonyli.tk/notes/mte120/10.5.1.png)

The voltage across the impedance $\b Z_1$ and $\b Z_2$ in Figure 10.5-1a are given by

$$\b V_1 = \b Z_1 \b I = \frac{\b Z_1}{\b Z_1 + \b Z_2} \b V \quad \b V_2 = \b Z_2 \b I = \frac{\b Z_2}{\b Z_1 + \b Z_2} \b V$$

These equations show how $\b V$, the voltage across the series impedances, is divided between the individual impedances. They are called the voltage division equations.

![](http://tonyli.tk/notes/mte120/10.5.2.png)

Figure 10.5-2a shows a circuit called "Circuit A" connected to two parallel impedances. Using KVL in Figure 10.5-2a shows that

$$\b V_1 = \b V_2 = \b V$$

Using Ohm's law in Figure 10.5-2a shows that

$$\b I = \b I_1 + \b I_2 = \left( \frac 1{\b Z_1} + \frac 1{\b Z_2} \right)\b V$$

The impedance of the parallel combination of $\b Z_1$ and $\b Z_2$ is given by

$$\frac{\b V}{\b I} = \frac{1}{\frac{1}{\b Z_1} + \frac{1}{\b Z_2}}$$

We call this impedance the equivalent impedance of the parallel impedances and write

$$\b Z_{eq} = \frac{1}{\frac{1}{\b Z_1} + \frac{1}{\b Z_2}}$$

We say that the impedance $\b Z_{eq}$ is equivalent to the parallel combination of $\b Z_1$ and $\b Z_2$ because replacing $\b Z_1$ and $\b Z_2$ in Figure 10.5-2a by $\b Z_{eq}$ in Figure 10.5-2b will not change the current or voltage of any element of Circuit A. It generalizes to the case of $n$ series impedances

$$\b Z_{eq} \frac{1}{\frac{1}{\b Z_1} + ... + \frac{1}{\b Z_n}}$$

Equivalently, we can write in terms of admittances

$$\b Y_{eq} = \frac{1}{\b Z_{eq}} = \frac{1}{\b Z_1} + ... + \frac{1}{\b Z_n} = \b Y_1 + ... + \b Y_n$$

The currents the impedances $\b Z_1$ and $\b Z_2$ in Figure 10.5-2a are given by

$$\b I_1 = \frac{\b Z_2}{\b Z_1 + \b Z_2} \b I \quad \b I_2 = \frac{\b Z_1}{\b Z_1 + \b Z_2} \b I$$

These equations show how $\b I$, the current in the parallel impedances, is divided between the individual impedances. They are called the current division equations.

The voltage division and current division equations are summarized below:

|   | Equations |
|---|---|
| Voltage Division | $\b V_1 = \frac{\b Z_1}{\b Z_1 + \b Z_2} \b V$ |
| Current Division | $\b I_1 = \frac{\b I_2}{\b Z_1 + \b Z_2} \b I$ |

## 10.6 Mesh and Node Equations

We can analyze an ac circuit by writing and solving a set of simultaneous equations. Two methods, the node equations and the mesh equations, are quite popular. Before writing either the node equations or mesh equations, we represent the ac circuit in the frequency domain using phasors and impedances.

The node equations are a set of simultaneous equations in which the unknowns are the node voltages. We write the node equations by

1.	Expressing the element voltages and currents (for example, the current and voltage of an impedance) in terms of the node voltages.
2.	Applying KCL at nodes of the ac circuit.

After writing the solving the node equations, we can determine all of the voltages and currents of the ac circuit using Ohm's and Kirchhoff's laws.

![](http://tonyli.tk/notes/mte120/10.6.1.png)

Figure 10.6-1 illustrates techniques for expressing the element voltage and currents in terms of the node voltages. Figure 10.6-1a shows a generic circuit having node voltages $\b V_1$ and $\b V_2$ and element voltage $\b V_a$. We see that

$$\b V_a = \b V_1 - \b V_2$$

To remember this equation, we notice that $\b V_1$ is the node voltage near the plus sign of the polarity of $\b V_a$, and $\b V_2$ is the node voltage near the minus sign of the polarity of $\b V_a$. It is $\b V_2$ rather than $V_1$ that is negative.

In figure 10.6-1b, the element is a voltage source and $V_s$ is phasor voltage of the source. Noticing that $V_1$ is the node voltage near the plus sign of the polarity of $V_s$, we write

$$V_s = V_1 - V_2$$

In figure 10.6-1c, the element is an impedance. Notice that the voltage $V_1 - V_2$ across the impedance and current $I$ in the impedance adhere to the passive convention. Using Ohm's law, we write

$$I = \frac{V_1 - V_2}{Z}$$

The mesh equations are a set of simultaneous equations in which the unknowns are the mesh currents. We write the mesh equations by

1.	Expressing the elements voltages and currents (for example, the current and voltage of an impedance) in terms of the mesh currents.
2.	Applying KVL to the mesh currents.

After writing and solving the mesh equations, we can determine all of the voltages and currents of the ac circuit using Ohm's and Kirchhoff's laws.

![](http://tonyli.tk/notes/mte120/10.6.6.png)

Figure 10.6-6 illustrates techniques for expressing the element voltages and currents in terms of the mesh voltages. Figure 10.6-6a shows a generic circuit element that is in two meshes having mesh current $I_1$ and $I_2$. $I_a$ is the element current of the generic element. We see that

$$I_a = I_1 - I_2$$

To remember this equation we notice that $I_1$ has the same direction in the generic element as does $I_a$, while $I_2$ has the opposite direction in the generic element. It is $I_2$ rather than $I_1$ that's negative in the equation.

In figure 10.6-6b, the element is a current source that is in two meshes, and $I_s$ is the phasor current of the source. Noticing that $I_1$ has the same direction in the current source as $I_s$ and $I_2$ the opposite direction, we write

$$I_s = I_1 - I_2$$

In figure 10.6-6c, the element is an impedance. The current $I_1 - I_2$ is the impedance and the voltage $V$ across the impedance adhere to the passive convention. Using Ohm's law we write

$$V = Z( I_1 - I_2)$$

## 10.7 Thevenin and Norton Equivalent Circuits

In this section, we will determine the Thevenin and Norton equivalent circuits of an ac circuit.

Figure 10.7-1 illustrates the use of Thevenin and Norton equivalent circuits. In Figure 10.7-1a, an ac circuit is partitioned into two parts--circuit A and circuit B--that are connected at a single pair of terminals. (This is the only connection between circuit A and B. In particular, if the overall circuit contain a dependent source, then either both parts of that dependent source must be in circuit A or both parts must be in circuit B.) In Figure 10.7-1b, circuit A is replaced by its Thevenin equivalent circuit, which consists of a voltage source in series with an impedance. In Figure 10.7-1c, circuit A is replaced by its Norton equivalent circuit, which consists of a current source in parallel with an impedance. Replacing circuit A by its Thevenin or Norton equivalent circuit does not change the voltage or current of any element in circuit B. This means that if you looked at a list of values of the currents and voltages of all the circuit elements in circuit B, you could not tell whether circuit B was connected to circuit A or connected to its Thevenin equivalent or connected to its Norton equivalent circuit.

Finding the Thevenin or Norton equivalent circuit of circuit A involves three parameters: the open-circuit voltage $V_{oc}$, the short-circuit current $I_{sc}$, and the Thevenin impedance $Z_t$. Figure 10.7-2 illustrates the meaning of these three parameters. In Figure 10.7-2a, an open circuit is connected across the terminals of circuit A. The voltage across that open circuit is the open-circuit voltage $V_{oc}$. In Figure 10.7-2b, a short circuit is connected across the terminals of circuit A. The current in that short circuit is the short-circuit current, $I_sc$.

Figure 10.7-2c indicates that the Thevenin impedance $Z_t$ is the equivalent impedance of circuit $A^*$. Circuit $A^*$ is formed form circuit $A$ by replacing all the independent voltage sources by short circuits and replacing all the independent current sources by open circuits. (Dependent current and voltage sources are not replaced with open circuit short circuit.) Frequently, the Thevenin impedance $Z_t$ can be determined by repeatedly replacing series or parallel impedances by equivalent impedances.

**The open-circuit voltage $V_{oc}$, the short-circuit current $I_{sc}$, and the Thevenin impedance $Z_{t}$, are related by the equation**

$$V_{oc} = Z_t I_{sc}$$

![](http://tonyli.tk/notes/mte120/10.7.1.png)

![](http://tonyli.tk/notes/mte120/10.7.11.png)

The circuits connected to Circuit B in Figure 10.7-11a and b are equivalent to each other. The circuit in Figure 10.7-11b is the Norton equivalent of the circuit in Figure 10.7-11a, and the circuit in Figure 10.7-11a is the Thevenin equivalent of the circuit in Figure 10.7-11b. Consequently, we can replace a series combination of a voltage source and impedance by a parallel combination of a current source and an impedance, or vice versa, without changing the value of any current or voltage in circuit B. This equivalence is commonly referred to as a source transformation.

## 10.8 Superposition

Suppose we encounter a circuit that is at steady state and all of its inputs are sinusoidal but not all of the input sinusoids have the same frequency. Such a circuit is not an ac circuit and the currents and voltages will not be sinusoidal. We can analyze this circuit using the principle of superposition. The principle of superposition says that the output of a linear circuit due to several inputs working together is equal to the sum of the outputs working separately. The inputs to the circuit are the voltages of the independent voltage sources and the currents of the independent current sources. When we set all but one input to zero, the other inputs become 0-V voltage sources and 0-A current sources. Because 0-V voltage sources are equivalent to short circuits and 0-A current sources are equivalent to open circuits, we replace the sources corresponding to the other inputs by open or short circuits. We are left with a steady-state circuit having a single sinusoidal input. Such a circuit is an ac circuit and we analyze it using phasors and impedances. Thus, we use superposition to replace a circuit involving several sinusoidal inputs at different frequencies by several circuits each having a single sinusoidal input. We analyze each of the several ac circuits using phasors and impedances to obtain its sinusoidal output. The sum of those several sinusoidal outputs will be identical to the output of the original circuit.

## 10.9 Phasor Diagrams

Phasors representing the voltage or current of a circuit are time quantities transformed or converted into the frequency domain. Phasors are complex numbers and can be portrayed in a complex plane. The relationship of phasors on a complex plane is called a phasor diagram.

**A phasor diagram is a graphical representation of phasors and their relationship on the complex plane.**

![](http://tonyli.tk/notes/mte120/10.9.1.png)

Let us consider the series RLC circuit represented in the time domain in Figure 10.9-1a and in the frequency domain in Figure 10.9-1b. The phasor current in Figure 10.9-1b is

$$I = I_m \angle 0$$

The phasor voltage across the impedances in Figure 10.9-1b are given by

$$V_R = R(I_m \angle 0) = R I_m \angle 0 \quad V_L = j\omega L (I_m \angle 0) = \omega L I_m \angle 90$$

and

$$V_C = -j \frac{1}{\omega C} (I_m \angle 0) = \frac{I_m}{\omega C} \angle -90$$

These phasors are drawn in the complex plane in Figure 10.9-2a

Using KVL, we obtain

$$V_S= V_R + V_L + V_C = V_R + (V_L + V_C)$$

The phasor $V_L + V_C$ is given by

$$V_L + V_C = j\omega L (I_m \angle 0) - j\frac{1}{\omega C} (I_m \angle 0) = j \omega L - j \frac{1}{\omega C} (I_m \angle 0)$$

From Figure 10.9-1a, we see that $|V_L|>|V_C|$ so

$$V_L + V_C = j \left( \omega L - \frac{1}{\omega C} \right)(I_m \angle 0) = \left( \omega L - \frac{1}{\omega C} \right)(I_m \angle 90)$$

This phasor is shown in the complex plane in Figure 10.9-2b

Substituting gives

$$V_S = V_R + (V_L + V_C) = R I_m + j \left( \omega L - \frac{1}{\omega C} \right)(I_m)$$

This phasor is shown in the complex plane in Figure 10.9-2c

![](http://tonyli.tk/notes/mte120/10.9.2.png)

