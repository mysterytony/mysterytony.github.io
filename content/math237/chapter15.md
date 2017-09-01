# Chapter 15 Triple Integrals

## 15.1 Definition of Triple Integrals

Let $D$ be a closed bounded set in $\mathbb R^3$ whose boundVry consists of a finite number of surface elements which are smooth except possibly at isolated points. Let $f(x,y,z)$ by a function which is bounded on $D$. Subdivide $D$ by means of three families of planes which are parallel to $xy$ $yz$ and $xz$ planes respectively, forming a partition $P$ of $D$.

Label the $N$ rectangular blocks that lie completely in $D$ in some specific order, and denote their volumes by $\Delta V_i, i = 1,...,n$. Choose an arbitrary point $(x_i,y_i,z_i)$ in the $i$-th block, $i=1,...,n$ and form the Riemann sum

$$\sum_{i=1}^n f(x_i,y_i,z_i) \Delta V_i$$

Let $\Delta P$ denote the maximum of the dimensions of all rectangular blocks in the partition $P$.

#### Definition

A function $f(x,y,z)$ which is bounded on a closed bounded set $D \in \mathbb R^3$ is said to be **integrable** on $D$ if and only if all Riemann sums approach the same value as $\Delta P \rightarrow 0$.

#### Definition

If $f(x,y,z)$ is integrable on a closed bounded set $D$, then we define the **triple integral** of $f$ over $D$ as

$$\iiiint_{D} f(x,y,z) \, dV = \lim_{\Delta P \rightarrow 0} \sum_{i=1}^n f(x_i,y_i,z_i) \Delta V_i$$

Is there any guarantee that the limiting process in the definition of the triple integral actually leads to a unique value, i.e., that the limit exists? It is possible to define weird functions for which the limit does not exist, i.e., which are not integrable on $D$. However, if $f$ is continuous on $D$, it can be proved that $f$ is integrable on $D$. Functions which are discontinuous in $D$ may be integrable on $D$. For example, if $f$ is continuous on $D$ except at points which lie on a surface or curve in $D$, then $f$ is integrable on $D$.

### Interpretation of the Triple Integral

When you encounter the triple integral symbol

$$\iiiint_D f(x,y,z) \, dV$$

you should think of "limit of a sum". In itself, the triple integral is a mathematically defined object. It has many interpretations, depending on the interpretation that you assign to the integrand $f(x,y,z)$. The "$dV$" in the triple integral symbol should remind you of the volume of a rectangular block in a partition of $D$.

### Triple Integral as Volume

The simplest interpretation is when you specialize $f$ to be the constant function with value unity:

$$f(x,y,z)=1 \quad \text{for all }(x,y,z) \in D$$

Then, the Riemann sum simply sums the volumes of all rectangular blocks in $D$, and the triple integral over $D$ serves to define the volume $V(D)$ of the set $D$:

$$V(D) \iiiint_D 1 \, dV$$

### Triple Integral as Mass

Think of a planet or start whose density varies with position. Let $D$ denote the subset of $\mathbb R^3$ occupied by the star. Let $f(x,y,z)$ denote the density (mass per unit volume) at position $(x,y,z)$. The mass of all small rectangular block located within the star at position $(x_i,y_i,z_i)$ will be approximately

$$\Delta M_i \approx f(x_i,y_i,z_i) \Delta V_i$$

Thus, the Riemann sum corresponding to a partition $P$ of $D$

$$\sum_{i=1}^n f(x_i,y_i,z_i) \Delta V_i$$

will approximate the total mass $M$ of the star, and the triple integral of $f$ over $D$, being the limit of the Riemann sum, will represent the total mass:

$$M = \iiiint_D f(x,y,z) \, dV$$

### Average Value of a Function

By analogy with functions of one and two variables we can use the triple integral to define the average value of a function $f(x,y,z)$ over a closed and bounded set $D \subset \mathbb R^3$.

#### Definition

Let $D \subset \mathbb R^3$ be closed and bounded with volume $V(D)\neq 0$, and let $f(x,y,z)$ be a bounded and integrable function on $D$. The **average value** of $f$ over $D$ is defined by

$$f_{avg} = \frac{1}{V(D)} \iiiint_{D} f(x,y,z) \, dV$$

### Properties of the Triple Integral

Of course, the triple integral satisfies the same basic properties as the double integral.

#### Theorem 1 Linearity

If $D \subset \mathbb R^3$ is a closed and bounded set and $f$ and $g$ are two integrable functions on $D$, then for any constant $c$:

$$\iiint_D (f+g) \, dV = \iiint_D f \, dV + \iiint_D g \, dV$$

$$\iiint_D c f \, dV = c \iiint f \, dV$$

#### Theorem 2 Basic Inequality

If $D \subset \mathbb R^3$ is a closed and bounded set and $f$ and $g$ are two integrable functions on $D$ such that $f(x,y,z) \leq g(x,y,z)$ for all $(x,y) \in D$, then

$$\iiint_D f \, dV \leq \iiint_D g \, dV$$

#### Theorem 3 Absolute Value Inequality

If $D \subset \mathbb R^3$ is a closed and bounded set and $f$ is an integrable function on $D$, then

$$\left| \iiint_D f \, dV \right| \leq \iiint_D |f| \, dV$$

#### Theorem 4 Decomposition

Assume $D\in \mathbb R^3$ is closed and bounded set and $f$ is an integrable function on $D$. If $D$ is decomposed into two closed and bounded subsets $D_1$ and $D_3$ by a piecewise smooth curve $C$, then

$$\iiint_D f \, dV = \iiint_{D_1} f \, dV + \iiint_{D_3} f \, dV$$

## 15.2 Iterated Integrals

We generalize the method used in Section 14.2, and show how to express a triple integral as a 3-fold iterated integral. This enables you to evaluate triple integrals exactly for sufficiently simple functions and integration sets.

Consider a set $D \subset \mathbb R^3$ which is described by inequalities of the form

$$z_l(x,y) \leq z \leq z_r(x,y)$$

and 

$$(x,y) \in D_{xy}$$

here $D_{xy}$ is a closed bounded subset of $\mathbb R^3$ whose boundary is a piecewise smooth closed curve, and $z_l, z_u$ are continuous functions on $D_{xy}$. Think of the set $D$ as being the 3-D region with bottom surface $z = z_l(x,y)$ and top surface $z = z_u(x,y)$, where the extent is defined by the 2-D set $D_{xy}$.

In order to write a tripe integral as an iterated integral, take an arbitrary point $(x,y) \in D_{xy}$. Then you integrate $f(x,y,z)$ with respect to $z$ from $z_l(x,y)$ to $z_u(x,y)$, and integrate the result over $D_{xy}$, as a double integral.

This procedure essentially sums over all rectangular blocks in a partition of $D$, and hence gives the triple integrals of $f(x,y,z)$ over $D$.

#### Theorem 1

Let $D$ be the subset of $\mathbb R^3$ defined by

$$z_l(x,y) \leq z \leq z_u(x,y) \quad (x,y) \in D_{xy}$$

where $z_l$ and $z_u$ are continuous functions on $D_{xy}$, and $D_{xy}$ is a closed bounded subset in $\mathbb R^2$, whose boundary is a piecewise smooth closed curve. If $f(x,y,z)$ is continuous on $D$, then

$$\iiint_D f(x,y,z) dV = \iint_{D_{xy}} \int_{z_l(x,y)}^{z_u(x,y)} f(x,y,z) \, dz \, dA$$

#### Remark

As with double iterated integrals, we are doing partial integration. That is, to evaluate the inner integral of

$$\iint_{D_{xy}} \int_{z_l(x,y)}^{z_u(x,y)} f(x,y,z) \, dz \, dA$$

we hold $x$ and $y$ constant and integrate with respect to $z$.

Keep in mind that when evaluating a triple integral, it is not essential to integrate first with respect to $z$. One chooses the order of the integration that is most convenient.

## 15.3 The Change of Variable Theorem

A mapping $F$ from $\mathbb R^3$ to $\mathbb R^3$ can be used to simplify a triple integral

$$\iiint_{D_{xyz}} G(x,y,z) dV$$

either by changing the integrand $G(x,y,z)$ or by deforming the set $D_{xyz}$ in $xyz$ space into a simpler shape $D_{uvw}$ in $uvw$ space, thereby simplifying the limits of integration. In this type of calculation it is convenient to replace the symbol "$dV$" in the triple integral by "$dx\, dy\, dz$" if one is working in $xyz$ space, and by "$du\, dv\, dw$" if one is working in $uvw$ space.

#### Theorem 1 change of Variable Theorem

Let 

$$x = f(u,v,w) \quad y = g(u,v,w) \quad z = h(u,v,w)$$

be a one-to-one mapping of $D_{uvw}$ onto $D_{xyz}$, with $f,g,h$ having continuous partials, and

$$\frac{\partial (x,y,z)}{\partial (u,v,w)} \neq 0 \text{ on } D_{uvw}$$

If $G(x,y,z)$ is continuous on $D_{xyz}$, then

$$\iiint_{D_{xyz}} G(x,y,z) dV = \iiint_{D_{uvw}} G(f(u,v,w),g(u,v,w),h(u,v,w)) \left| \frac{\partial (x,y,z)}{\partial (u,v,w)} \right| dV$$

### Triple Integrals in Cylindrical Coordinates

Recall that the mapping from Cartesian coordinates to cylindrical coordinates is

$$x=r\cos\theta \quad y = r\sin\theta \quad z = z$$

with $r \geq 0$, $0 \leq \theta < 2\pi$, and the Jacobian is $\frac{\partial (x,y,z)}{\partial (u,v,w)} = r$. Since we need $\frac{\partial (x,y,z)}{\partial (u,v,w)} \neq 0$, we must again restrict $r >0$. So for cylindrical coordinates, the formula in the Change of Variable Theorem reads

$$\iiint_{D_{xyz}} H(x,y,z) \, dx\, dy\, dz = \iiint_{D_{r\theta z}} H(r\cos\theta, r\sin\theta,z) r \, dr\, d\theta \, dz$$

### Triple Integrals in Spherical Coordinates

Recall that the mapping from spherical coordinates to Cartesian coordinates are

$$x = \rho \sin \phi \cos \theta \quad y = \rho \sin \phi \cos \theta \quad z = \rho \cos \phi$$

with $\rho \geq 0$, $0 \leq \psi\leq \pi$, $0 \leq \theta  < 2\pi$ and Jacobian

$$\frac{\partial (x,y,z)}{\partial (\rho, \theta,\phi)} = \rho^2 \sin \phi$$

Thus, for spherical coordinates, we must restrict $\rho >0$ and $0 < \phi < \pi$ so that the Jacobian is non-zero and the mapping is one-to-one. Observe that this means we are not just removing one point, but the entire $z$-axis. However, this still will not affect our result as the triple integral over the $z$-axis is 0. Hence, the Change of Variable in spherical coordinates reads:

$$\iiint_{D_{xyz}} H(x,y,z) dV = \iiint_{D_{\rho \theta\phi}}H(\rho\sin\phi\cos\theta, \rho \sin \phi \cos \theta, \rho \cos \phi) \rho^2 \sin \phi \, d\rho \, d\theta \, d\phi$$

