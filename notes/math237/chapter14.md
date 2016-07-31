# Chapter 14 Double Integrals

## 14.1 Definition of Double Integrals

Recall, to find the area under a continuous curve $y = f(x)$ over a closed interval $[a,b]$ we used a single integral which we define as a limit of Riemann sums:

$$\int_a^b f(x) dx = \lim_{n \rightarrow \infty} \sum_{i=1}^n f(x_i) \Delta x_i$$

where $\Delta x_i$ is the length of the $i$-th subinterval in some decomposition (i.e. partition) of the interval $[a,b]$ and $x_i$ is some point in the $i$-th subinterval.

We found that the single integral had many applications beside calculating areas under curves. We can use single integrals for finding mass of thin rods, calculating work, and for finding volumes of revolution. However, what if we want to calculate the mass of a thin plate, or to find the volume of some complicated regions? For these, we use double integrals.

Let $D$ be a closed and bounded set in $\mathbb R^2$ whose boundary is a piecewise smooth closed curve. Let $f(x,y)$ be a function which is bounded on $D$, that is, there exists a number $M$ such that $|f(x,y)|\leq M$ for all $(x,y) \in D$.

Subdivide $D$ by means of straight lines parallel to the axes, forming a partition $P$ of $D$. Label the $n$ rectangles that lie completely in $D$, in some specific order, and denote their areas by $\Delta A_i, i=1,...,n$. Choose a point $(x_i,y_i)$ in the $i$-th rectangle and from the Riemann sum

$$\sum_{i=1}^n f(x_i, y_i) \Delta A_i$$

#### Definition

Let $D \subset \mathbb R^2$ be closed and bounded. Let $P$ be a partition of $D$ as described above, and let $|\Delta P|$ denote the length of the longest side of all rectangles in partition $P$. A function $f(x,y)$ which is bounded on $D$ is **integrable** on $D$ if all Riemann sums approaches the same value as $|\Delta P| \rightarrow 0$

#### Definition

If $f(x,y)$ is integrable on a closed bounded set $D$, then we define the **double integral** of $f$ on $D$ as

$$\iint_D f(x,y) dA = \lim_{\Delta P \rightarrow 0} \sum_{i=1}^n f(x_i, y_i) \Delta A_i$$

Is there any guarantee that the limiting process in the definition of the double integral actually leads to a unique value, i.e., that the limit exists? It is possible to define weird functions for which the limit does not exist, i.e., which are not integrable on $D$. However, if $f$ is continuous on $D$, it can be proved that $f$ is integrable on $D$, that is the double integral of $f$ does exist. Functions which are discontinuous on $D$ may be integrable on $D$. For example, if $f$ is continuous in $D$ except at points which lie on a curve $C$ ($f$ is piece-wise continuous), then $f$ is integrable. The proof of these results are beyond the scope of this course.

### Interpretation of the Double Integral

When you encounter the double integral symbol

$$\iint_D f(x,y) dA$$

think of "limit of a sum". In itself, the double integral is a mathematically defined object. It has many interpretations depending on the meaning that you assign to the integrand $f(x,y)$. The "$dA$" in the double integral symbol should remind you of the area of a rectangle in a partition of $D$.

### Double Integral as Area

The simplest interpretation is when you specialize $f$ to be the constant function with value unity:

$$f(x,y)=1 \quad \text{for all } (x,y) \in D$$

Then the Riemann sum simply sums the areas of all rectangles in $D$, and the double integral serves to define the area $A(D)$ of the set $D$:

$$A(D) = \iint_D 1 \, dA$$

### Double Integral as Volume

If $f(x,y) \geq 0$ for all $(x,y) \in D$, then the double integral

$$\iint_D f(x,y) dA$$

can be interpreted as the volume $V(S)$ of the 3-D set defined by

$$S = \\{(x,y,z) | 0 \leq z \leq f(x,y), (x,y)\in D \\}$$

which represents the solid below the surface $z = f(x,y)$ and above the set $D$ in the $xy$-plane. The justification is as follows.

The partition $P$ of $D$ decomposes the solid $S$ into vertical "columns". The height of the column above the $i$-th rectangle is approximately $f(x_i,y_i)$, and so its volume is approximately

$$f(x_i,y_i)\Delta A_i$$

The Riemann sum thus approximates the volume $V(S)$:

$$V(S) \approx \sum_{i=1}^n f(x_i,y_i) \Delta A_i$$

As $|\Delta P| \rightarrow 0$ the partition becomes increasingly fine, so the error in the approximation will tend to zero. Thus, the volume $V(S)$ is

$$V(S) = \iint_D f(x,y) dA$$

### Double Integral as Mass

Think of a thin flat plate of metal whose density varies with position. Since the plate is thin, it is reasonable to describe the varying density by an "area density", that is a function $f(x,y)$ that gives the mass per unit area at position $(x,y)$. In other words, the mass of a small rectangle of area $\Delta A_i$ located at position $(x_i,y_i)$ will approximately

$$\Delta M_i \approx f(x_i, y_i) \Delta A_i$$

The Riemann sum corresponding to a partition $P$ of $D$ will approximate the total $M$ of the plate $D$, and the double integral of $f$ over $F$, being the limit of the sum, will represent the total mass:

$$M = \iint_D f(x,y) dA$$

### Double Integral as Probability

Let $f(x,y)$ be the probability density of a continuous 2-D random variable $(X,Y)$. The probability that $(X,y) \in D$, a given subset of $\mathbb R^2$, is

$$P((X,Y)\in D) = \iint_D f(x,y) dA$$

### Average Value of a Function

The double integral is also used to define the average value of a function $f(x,y)$ over a set $D \subset \mathbb R^2$.

Recall for a function of one variable, $f(x)$, the average value of $f$ over an interval $[a,b]$, denoted $f_{av}$, is defined by

$$f_{av} = \frac{1}{b-a} \in_a^b f(x) dx$$

Similarly, for a function of two variables $f(x,y)$, we can define the average value of $f$ over a closed and bounded subset $D$ of $\mathbb R^2$ by

$$f_{av} = \frac{1}{A(D)} \iint_D f(x,y) dA$$

### Properties of the Double Integral

The basic properties of single integrals can be generalized to double integrals. We do not give the proofs but point out that the results are plausible if one thinks in terms of Riemann sums.

#### Theorem 1 Linearity

If $D \subset \mathbb R^2$ is a closed and bounded set and $f$ and $g$ are two integrable functions on $D$, then for any constant $c$:

$$\iint_D (f+g) \, dA = \iint_D f \, dA + \iint_D g \, dA$$

$$\iint_D c f \, dA = c \iint f \, dA$$

#### Theorem 2 Basic Inequality

If $D \subset \mathbb R^2$ is a closed and bounded set and $f$ and $g$ are two integrable functions on $D$ such that $f(x,y) \leq g(x,y)$ for all $(x,y) \in D$, then

$$\iint_D f \, dA \leq \iint_D g \, dA$$

#### Theorem 3 Absolute Value Inequality

If $D \subset \mathbb R^2$ is a closed and bounded set and $f$ is an integrable function on $D$, then

$$\left| \iint_D f \, dA \right| \leq \iint_D |f| \, dA$$

#### Theorem 4 Decomposition

Assume $D\in \mathbb R^2$ is closed and bounded set and $f$ is an integrable function on $D$. If $D$ is decomposed into two closed and bounded subsets $D_1$ and $D_2$ by a piecewise smooth curve $C$, then

$$\iint_D f \, dA = \iint_{D_1} f \, dA + \iint_{D_2} f \, dA$$

#### Remark

1.	The Basic Inequality can be used to obtain an estimate for a double integral that cannot be evaluated exactly.
2.	The decomposition property is essential for dealing with complicated regions of integration and with discontinuous integrands.

## 14.2 Iterated Integrals

It is clear that double integrals can be evaluated approximately by using a computer to evaluate a suitable Riemann sum. The accuracy would depend on how find a partition you choose. But it is natural to ask: is it possible to calculate double integral exactly, using methods that work for single integrals? For sufficiently simple functions and regions of integration, the answer is YES. The idea is to write the double integral as a succession of two single integrals, called an **iterated integral**. We will derive a method for doing this by using the interpretation of the double integral as volume.

Let $D$ be a region in the $xy$-plane and let $f$ be a function such that $f(x,y) \geq 0$ for all $(x,y) \in D$. If $V$ denotes the volume of the solid above $D$ and below the surface $z = f(x,y)$, then we have

$$V = \iint_D f(x,y) dA$$

Assume that the region $D$ lies between vertical lines $x = x_l$ and $x= x_u$ with $x_l < x_u$ and has top curve $y = y_u(x)$ and bottom curve $y = y_l(x)$. That is, $D$ is described by the inequalities

$$y_l(x) \leq y \leq y_u(x) \quad x_l \leq x \leq x_u$$

Now, recall from Calculus 2 that we can find a volume of a region by integrating over all possible cross-sectional areas. That is,

$$V = \int_{x_l}^{x_u} A(x) dx$$

where $A(x)$ is the cross-sectional area of the solid for any fixed value of $x$. But, we know that the cross-sectional area $A(x)$ is the area under the cross-section $z=f(x,y)$, and thus is given by a single integral

$$A(x) = \int_{y_l(x)}^{y_u(x)} f(x,y) dy$$

Hence the volume of the region is

$$V = \int_{x_l}^{x_u} \int_{y_l(x)}^{y_u(x)} f(x,y) \, dy \, dx$$

Thus, we have

$$\iint_D f(x,y) \, dA = \int_{x_l}^{x_u} \int_{y_l(x)}^{y_u(x)} f(x,y) \, dy \, dx$$

as desired.

#### Theorem 1

Let $D \subset \mathbb R^2$ be defined by

$$y_l(x) \leq y \leq y_u(x) \quad x_l \leq x \leq x_u$$

where $y_l(x)$ and $y_u(x)$ are continuous for $x_l \leq x \leq x_u$. If $f(x,y)$ is continuous on $D$, then

$$\iint_D f(x,y) dA = \int_{x_l}^{x_u} \int_{y_l(x)}^{y_u(x)} f(x,y) \, dy \, dx$$

#### Remark

Although the parenthesis around the inner integral are usually omitted, we must evaluate it first. Moreover, as in our interpretation of volume above, when evaluating the inner integral, we are integrating with respect to $y$ while hold $x$ constant. That is we are using **partial integration**.

Suppose now that the set $D$ can be described by inequalities of the form

$$x_l(y) \leq x \leq x_u(y) \quad y_l \leq y \leq y_u$$

where $y_l$ and $y_u$ are constants and $x_l(y)$ and $x_u(y)$ are continuous functions of $y$ on the interval

$$y_l \leq y \leq y_u$$

Then, by reversing the roles of $x$ and $y$ in Theorem 1, the double integral $\iint_D f(x,y) \, dA$ can be written as an iterated integral in the order "$x$ first, then $y$":

$$\iint_D f(x,y) dA = \int_{y_l}^{y_u} \int_{x_l(y)}^{x_u(y)} f(x,y) \, dy \, dx$$

When evaluating a double integral one must take into account two factors:

*	The shape of the region $D$
*	the form of the integrand $f(x,y)$

Either of these factors may make it desirable or even essential to use one order of integration instead of the other.

For more complicated regions we may not be able to apply our method above so easily. For example an annulus cannot be described by the usual inequalities since a vertical or a horizontal lines may intersect the boundary of $D$ in more than two points. A simple approach to evaluating the double integral where $D$ is the annulus is to let $D_1$ and $D_2$ denote the discs of radius $R_1$ and $R_2$ respectively. Then by the Decomposition Theorem and so the required integral is

$$\iint_D f(x,y) \, dA = \iint_{D_2} f(x,y) \, dA - \iint_{D_1} f(x,y) \, dA$$

Both integrals on the right can be written as iterated integrals in the usual way. However, for this or even more complicated regions, we can often make it simpler by applying a change of variables.

## 14.3 The Change of Variable Theorem

A mapping $F$ from $\mathbb R^2$ to $\mathbb R^2$ can be used to simplify a double integral

$$\iint_{D_{xy}} G(x,y) \, dA$$

either by changing the integrand $G(x,y)$, or by deforming the set $D_{xy}$ in the $xy$-plane into a simpler shape $D_{uv}$ in the $uv$-plane. The process is called a **change of variables** in the double integral. In this type of calculation it is convenient to replace the symbol "$dA$" in the double integral by "$dx \, dy$" if one is working in the $xy$-plane, and by "$du \, dv$" if one is working in the $uv$-plane.

In order to derive the change of variable formula for double integrals, we need the formula which describes how areas are related under a mapping $F$ given by

$$(x,y) = F(u,v) = (f(u,v),g(u,v))$$

The geometric interpretation of the Jacobian gives us

$$\Delta A_{xy} \approx \left| \frac{\partial (x,y)}{\partial (u,v)} \right| \Delta A_{uv}$$

for $\Delta u$ and $\Delta v$ sufficiently small where the Jacobian $\frac{\partial (x,y)}{\partial (u,v)}$ is evaluated at a point in the region. Notice that we have interchanged the roles of $(x,y)$ and $(u,v)$ in equations, as compared to Section 13.2.

#### Theorem 1 Change of Variable Theorem

Let each of $D_{uv}$ and $D_{xy}$ be a closed bounded set whose boundary is a piecewise-smooth closed curve. Let

$$(x,y)=F(u,v) =(f(u,v),g(u,v))$$

be an one-to-one mapping of $D_{uv}$ into $D_{xy}$ with $f,g \in C^1$, and $\frac{\partial (x,y)}{\partial (u,v)} \neq 0$ except for possibly on a finite collection of piecewise-smooth curves in $D_{uv}$. If $G(x,y)$ is continuous on $D_{xy}$, then

$$\iint_{D_{xy}} G(x,y) \, dx \, dy = \iint_{D_{uv}} H(f(u,v),g(u,v)) \frac{\partial (x,y)}{\partial (u,v)} \, du \, dv$$

### Double Integrals in Polar Coordinates

If the boundary of the region is a circle centered on the origin, or a circle that passes through the origin, it will often helpful to transform from polar to Cartesian coordinates. Recall that the mapping from polar to Cartesian coordinates is

$$(x,y)=F(r,\theta)=(r\cos\theta,r\sin\theta)$$

which has Jacobian,

$$\frac{\partial (x,y)}{\partial (r,\theta)} = r$$

Hence, we must restrict $r >0$ so that the mapping is one-to-one and the Jacobian is non-zero so that we can apply the Change of Variable Theorem. Note that we can make this restriction even if the origin is in the region as the integral over a single point is 0.

Because polar coordinates have a simple geometric interpretation one can obtain the $r$ and $\theta$ limits of integration directly from the diagram in the $xy$-plane, without drawing the region $D_{r\theta}$ in the same way as we did for finding areas in polar coordinates in Chapter 11.