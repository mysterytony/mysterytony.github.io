# Chapter 8 The Complete Response of RL and RC Circuit

## 8.1 Introduction

In this chapter, we consider the response of RL and RC circuits to abrupt changes. The abrupt change might be a change to the circuit, as when a switch opens or closes. Alternately, the abrupt change might be a change to the input to the circuit, as when the voltage of a voltage source is a discontinuous function of time.

RL and RC circuit are called first-order circuits. In this chapter, we will do the following:

*	Develop vocabulary that will help us talk about the response of a first-order circuit.
*	Analyze first-order circuits with inputs that are constant after some particular time, $t_0$.
*	Introduce the notion of a stable circuit and use it to identify stable first-order circuits.
*	Analyze first-order circuits that experience more than one abrupt change.
*	Introduce the step function and use it to determine the step response of a first-order circuit.
*	Analyze first-order circuits with inputs that are not constant.

## 8.2 First-Order Circuit

Circuits that contain capacitors and inductors can be represented by differential equations. The order of the differential equations is usually equal to the number of the capacitors plus the number of inductors in the circuit.

**Circuit that contain only one inductor and no capacitors or only one capacitor and no inductors can be represented by a first-order differential equation. These circuits are called first-order circuits.**

Thevenin and Norton equivalent circuits simplify the analysis of first-order circuits by showing that all first-order circuits are equivalent to one of two simple first-order circuits. Below shows how this is accomplished. A first-order circuit is partitioned into two parts. One part is the circuit--everything except that capacitor or inductor. If it is a capacitor, then the rest of the circuit is replaced by its Thevenin equivalent circuit. The result is a simple first-order circuit--a series circuit consisting of a voltage source, a resistor, and a capacitor. On the other hand, if the energy storage element is an inductor, then the rest of the circuit is replaced by its Norton equivalent circuit. The result is another simple first-order circuit--a parallel circuit consisting of a current source, a resistor, and an inductor. Indeed, all first-order circuits are equivalent to one of these two simple first-order circuits.

![](./8.2.1.png)

![](./8.2.2.png)

When the input to a circuit is sinusoidal, the steady-state response is also sinusoidal. Furthermore, the frequency of the response sinusoid must be the same as the frequency of the input sinusoid. The circuit shown above is at steady state before the switch is closed. The steady-state capacitor voltage will be

$$v(t) = B \cos(1000t + \psi), \quad t < 0 $$

The switch closes at time $t=0$. The value of the capacitor voltage at the time the switch closes is

$$v(0) = B \cos (\psi), \quad t =0 $$

After the switch closes, the response will consist of two parts: a transient part that eventually dies out and a steady-state part. The steady-state part of the response will be sinusoidal and will have the frequency of the input. For a first-order circuit, the transient part of the response is exponential. Indeed, we consider first-order circuits separately to take advantage of the simple form of the transient response of these circuits. After the switch is closed, the capacitor voltage is

$$v(t) = Ke^{-t/\tau} + M \cos (1000t + \delta)$$

Notice that $Ke^{-t/\tau}$ goes to zero at $t$ becomes large. This is the transient part of the response, which dies out, leaving the steady-state response, $M \cos(1000 t + \delta)$.

As a matter of vocabulary, the "transient part of the response" is frequently shortened to the **transient response**, and the "steady-state part of the response" is shortened to the "steady-state response". The response, $v(t)$, is called the **complete response** to the contrast in with the transient and steady-state responses.

**complete response = transient response + steady-state response**

>(The term transient response is used in two different ways by electrical engineers. Sometimes it refers to the “transient part of the complete response,” and at other times, it refers to a complete response, which includes a transient part. In particular, PSpice uses the term transient response to refer to the complete response. This can be confusing, so the term transient response must be used carefully.) 

In general, the complete response of a first-order circuit can be represented as the sum of two parts, the **natural response** and the **forced response**:

**complete response = natural response + forced response**

The natural response is the general solution of the differential equation representing the first-order circuit, when the input is set to zero. The forced response is a particular solution of the differential equation representing the circuit.

The complete response of a first-order circuit will depend on an initial condition, usually a capacitor voltage or an inductor current at a particular time. Let $t_0$ denote the time at which the initial condition is given. The natural response of a first-order circuit will be of the form

**$$ \text{natural response}  = Ke^{-(t-t_0)/\tau}$$**

When $t_0 = 0$, then

$$\text{natural response} = Ke^{-t/\tau}$$

The constant $K$ in the natural response depends on the initial condition, for example, the capacitor voltage at time $t_0$.

In this chapter, we will consider three cases. In these cases, the input to the circuit after the disturbance will be (1) a constant, for example,

$$v_s(t) = V_0$$

or (2) an exponential, for example,

$$v_s(t) = V_0e^{-t/\tau}$$

or (3) a sinusoid, for example,

$$v_s(t) = V_0 \cos (\omega t + \theta)$$

These three cases are special because the forced response will have the same form as the input. For example, in the above figure, both the forced response and input are sinusoidal, and the frequency of the forced response is the same as the frequency of the input. For another inputs, the forced response is not a square wave.

When the input is a constant or a sinusoid, the forced response is also called the steady-state response, and the natural response is called the transient response.

Here is out plan for finding the complete response of first-order circuits:

Step 1: Find the forced response before the disturbance. Evaluate this response at time $t = t_0$ to obtain the initial condition of the energy storage element.

Step 2: Find the forced response after the disturbance.

Step 3: Add the natural response $= Ke^{-t/\tau}$ to the forced response to get the complete response. Use the initial condition to evaluate the constant $K$.

## 8.3 The Response of a First-Order Circuit to a Constant Input

In this section, we find the complete response of a first-order circuit when the input to the circuit is constant after time $t_0$. Figure 8.3-1 illustrates this situation. In Figure 8.3-1a, we find a first-order circuit that contains a single capacitor and no inductors. This circuit is at steady state before the switch closes, disturbing the steady state. The time at which steady state is disturbed is denoted as $t_0$. In Figure 8.3-1a, $t_0 = 0$. Closing the switch removes the resistor $R_1$ from the circuit. (A closed switch is modeled by a short circuit. A short circuit in parallel with a resistor is equivalent to a short circuit.) After the switch closes, the circuit can be represented as shown in Figure 8.3-1b. In Figure 8.3-1b, the part of the circuit that is connected to the capacitor has been replaced by its Thevenin equivalent circuit. Therefore,

$$V_{oc} = \frac{R_3}{R_2 + R_3} V_s \text{ and } R_t = \frac{R_2 R_3}{R_2+ R_3}$$

Let's represent the circuit in Figure 8.3-1b by a differential equation. The capacitor current is given by

$$i(t) = C \frac{d}{dt} v(t)$$

![](./8.3.1.png)

![](./8.3.2.png)

