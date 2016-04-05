[<- Go Back](http://tonyli.tk/)

# Chapter 40: Quantum Mechanics I: Wave Functions

>In Chapter 39 we found that particles can behave like waves. In fact, it turns out that we can use the wave picture to completely describe the behavior of a particle. This approach, called *quantum mechanics*, is the key to understanding the behavior of matter on the molecular, atomic and nuclear scales. In this chapter we'll see how to find the *wave function* of a particle by solving the *Schrodinger equation*, which is as fundamental to quantum mechanics as Newton's laws are to mechanics or as Maxwell's equations are to electromagnetism.

>We'll begin with a quantum-mechanical analysis of a *free particle* that moves along a straight like without being acted on by forces or any kind. We'll then consider particles that are acted on by forces and are trapped in *bound states*, just as electrons are bound within an atom. We'll see that solving the Schrodinger equation automatically gives the possible energy levels for the system.

>Besides energies, solving the Schrodinger equation gives us the probabilities of finding a particle in various regions. One surprising result is that there is a nonzero probability that microscopic particles will pass through thin barriers, even though such a process is forbidden by Newtonian mechanics.

>In this chapter we'll consider the Schrodinger equation for one-dimensional motion only. In Chapter 41 we'll see how to extend this equation to three-dimensional problems such as the hydrogen atom. The hydrogen-atom wave functions will in turn form the foundation for our analysis of more complex atoms, of the periodic table of the elements, of x-ray energy levels, and of other properties of atoms.

## 40.1 Wave Functions and the One-Dimensional Schrodinger Equation

>We have now seen compelling evidence that on an atomic or subatomic scale, an object such as an electron cannot be described simply as a classical, Newtonian point particle. Instead, we must take into account its wave characteristics. In the Bohr model of the hydrogen atom, we tried to have it both ways: We pictured the electron as a classical particle in a circular orbit around the nucleus, and used the de Broglie relationship between particle momentum and wavelength to explain why only orbits of certain radii are allowed. As we saw in section 39.6, however, the Heisenberg uncertainty principle tells us that a hybrid description of this kind can't be wholly correct. In this section we'll explore how to describe the state of a particle by using only the language of waves. This new description, called **quantum mechanics**, replaces the classical scheme of describing the state of particle by its coordinates and velocity components.

>Our new quantum-mechanical scheme for describing a particle has a lot in common with the language of classical wave motion. In section 15.3 we described transverse waves on a string by specifying the position of each point in the string at each instant of time by means of a *wave function* y(x, t) that represents the displacement from equilibrium, at time t, of a point on the string at a distance x from the origin. Once we know the wave function for a particular wave motion, we know everything there is to know about the motion. For example, we can find the velocity and acceleration of any point on the string at any time. We worked our specific forms for these functions for sinusoidal waves, in which each particles undergoes simple harmonic motion.

>We followed a similar pattern for sound waves in chapter 16. The wave function p(x, t) for a wave traveling along the x-direction represented the pressure variation at any point x and any time t. In section 32.3 we used two wave functions to describe the $\vec{E}$ and $\vec{B}$ fields in an electromagnetic wave.

>Thus it's natural to use a wave function as the central element of our new language of quantum mechanics. The customary symbol for this wave function is the Greek letter psi $\Psi$ or $\psi$. In general, we'll use an uppercase $\Psi$ to denote a function of all the space coordinates and time, and a lowercase $\psi$ for a function of the space coordinates only--not of time. Just as the wave function y(x, t) for mechanical waves on a string provides a complete description of the motion, so the wave function $\Psi(x,y,z,t)$ for a particle contains all the information that can be known about the particle.

#### Waves in One Dimension: Waves on a String

>The wave function of a particle depends in general on all three dimensions of space. For simplicity, however, we'll begin our study of these functions by considering one-dimensional motion, in which a particle of mass $m$ moves parallel to the x-axis and the wave function $\Psi$ depends on the coordinates $x$ and the time $t$ only.

>What does a one-dimensional quantum-mechanical wave look like, and what determines its properties? We can answer this question by first recalling the properties of a wave on a string. We saw in Section 15.3 that any wave function
y(x, t) that describes a wave on a string must satisfy the wave equation:

>$$\frac{\partial^2y(x,t)}{\partial x^2}= \frac{1}{v^2}\frac{\partial^2 y(x,t)}{\partial t^2}$$

>v is the speed of the wave, which is the same no matter what the wavelength. As an example, consider the following wave function for a wave of wavelength l and frequency f moving in the positive x-direction along a string:

>$$y(x,t)=A\cos (kx-\omega t) + B \sin(kx-\omega t)$$

>Here $k=2\pi\lambda$ is the wave number and $\omega = 2\pi f$ is the angular frequency. The quantities A and B are constants that determine the amplitude and phase of the wave.