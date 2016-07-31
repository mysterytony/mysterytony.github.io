# Chapter 11 Coordinate Systems

A **coordinate system** is a system for representing the location of a point in a space by an ordered $n$-tuple. We call the elements of the $n$-tuple the **coordinates** of the point.

We are used to using the Cartesian coordinate system in which the location of the point is represented by the directed distance from a set of perpendicular axes which all interest at point $O$. However, you may also be used to other coordinate systems. For example, the geographic coordinate system represents location on the earth by longitude, latitude and altitude.

We will no look at three other important coordinate systems: polar coordinates, cylindrical coordinates and spherical coordinates.

## 11.1 Polar Coordinates

As in all coordinate systems, we must have a frame of reference for our coordinate system. So, in a plane we choose a point $O$ called the **pole** (or origin). From $O$ we draw a ray called the **polar axis**. Generally, the polar axis is drawn horizontally to the right to match the positive $x$-axis in Cartesian coordinates.

Let $P$ be any other point in the plane. We will represent the position of $P$ by the ordered pair $(r, \theta)$ where $r \geq 0$ is the length of the line $OP$ and $\theta$ is the angle between the polar axis and $OP$. We call $r$ and $\theta$ the polar coordinates of $P$.

#### Remark

1.	We assume, as usual, that an angle $\theta$ is considered positive if measured in the counterclockwise direction from the polar axis and negative if measured in the clockwise direction.
2.	We represent the point $O$ by the polar coordinates $(0,\theta)$ for any value of $\theta$.
3.	We are restricting $r$ to be non-negative to coincide with the interpretation of $r$ as distance. Many textbook do not put this restrictions on $r$.
4.	Since we use the distance $r$ from the pole in our representation, polar coordinates are suited for solving problems in which there is symmetry about the pole.

Here is one important difference between polar coordinates and Cartesian coordinates. In Cartesian coordinates each point has a unique representation $(x,y)$. However, observe that a point $P$ can have infinitely many representations in polar coordinates. In particular

$$(r, \theta) = (r, \theta + 2\pi k) \quad k \in \mathbb Z$$

### Relationship to Cartesian Coordinates

If we now place the pole $O$ at the origin of the Cartesian plane and lie the polar axis along the positive $x$-axis, we can find a relationship between the coordinates of a point $P$ in the two coordinate systems. In particular, we see from the diagram that

$$x = r\cos \theta \quad y = r\sin \theta \quad r = \sqrt{x^2+y^2} \quad \tan \theta = \frac yx$$

#### Remark

The equation $\tan \theta = \frac yx$ does not uniquely determine $\theta$, since over $0 \leq \theta \leq 2\pi$ each value of $\tan \theta$ occurs twice. One must be careful to choose the $\theta$ which lies in the correct quadrant.

### Graphs in Polar Coordinates

The graph of an explicitly defined polar equation $r = f(\theta)$ or $\theta = f(r)$, or an implicitly defined polar equation $f(r,\theta) =0$, is a curve that consists of all points that have at least one polar representation $(r, \theta)$ that satisfies the equation of the curve.

### Area in Polar Coordinates

We now wish to derive the formula for computing area between curves in Polar coordinates. Clearly this will be a little different than before as it does not make sense to use rectangles to find our era. In Polar coordinates, it is natural to use sectors of a circle.

Recall that if $\theta_1$ and $\theta_2$, $\theta_2 > \theta_1$, are two angles in a circle of radius $r$, then the area between them is

$$\frac{\theta_2 - \theta_1}{2\pi} \cdot \pi r^2 = \frac 12 r^2 (\theta_2 - \theta_1)$$

We now derive the area as before. We divide the region bounded by $\theta = a$, $\theta = b$ and $r = f(\theta)$ into subregions $\theta_0,...,\theta_n$ of equal difference $\Delta \theta$, then for each subregion $\theta_i$, $0 \leq i \leq n$ we pick some point $\theta_i^\*$ with  $\theta_i \leq \theta_i^\* \leq \theta_{i+1}$. We then form the sector between $\theta_1$ and $\theta_{i+1}$ with radius $f(\theta_i^\*)$. The area of this sector is

$$\frac 12 [f(\theta_i^\*)]^2\Delta \theta$$

Hence the area is approximately

$$\sum_{i=0}^{n-1} \frac 12 [f(\theta_i^\*)]^2\Delta \theta$$

Thus, as we let the number of subdivisions go to infinity and hence letting each of the $\Delta \theta_i$ tend to 0 we get

$$A= \lim_{||\Delta \theta_i|| \rightarrow 0} \sum_{i=0}^{n-1} \frac 12 [f(\theta_i^\*)]^2\Delta \theta = \int_a^b \frac 12 [f(\theta)]^2 d\theta$$

#### Algorithm

To find the area between two curves in Polar coordinates, we use the same method we used for doing this in Cartesian coordinates.

1.	Find the points of intersections.
2.	Graph the curves and split the desired region into easily integrable regions.
3.	Integrate.

#### Remark

Finding points of intersection can be tricky, especially at the pole/origin which does not have a unique representation: $(0,\theta)$ for any $\theta$ represents the origin, so simply setting expressions equal to each other may "miss" that point. It is essential to sketch the region when find points of intersection.

## 11.2 Cylindrical Coordinates

Observe that we can extend polar coordinates to 3-dimensional space by introducing another axis, called the **axis of symmetry**, through the pole perpendicular to the polar plane. We then represent any point $P$ in the space by the cylindrical coordinates $(r,\theta,z)$ where $r$ and $\theta$ are as in polar coordinates and $z$ is the height above (or below) the polar plane. Thus, as in Polar coordinates, we have the restrictions $r\geq 0$, $0 \leq \theta \leq 2 \pi$.

#### Remark

Notation for cylindrical coordinates may vary from author to author. In particular, in the sciences they generally use the Standard ISO 31-11 notation which gives the cylindrical coordinates as $(\rho, \phi, z)$.

If we place the pole at the origin and the polar axis along the positive $x$-axis as in polar coordinates and place the axis of symmetry along the $z$-axis we then can relate a point $P$ in cylindrical and Cartesian coordinates by

$$x = r\cos \theta \quad y = \sin \theta \quad z = z \quad r = \sqrt{x^2 + y^2} \quad \tan \theta = \frac yx \quad z=z$$

#### Remark

Cylindrical coordinates are useful when there is symmetry about the axis. Thus, it is sometimes desirable to lie the polar axis and axis of symmetry along different axes.

### Graphs in Cylindrical Coordinates

As with functions $z = f(x,y)$, the graphs of functions $z = f(r,\theta)$, or more generally, $f(r,\theta,z)=0$ are surfaces in $\mathbb R^3$.

## 11.3 Spherical Coordinates

In 2-dimensional space, we saw that polar coordinates were useful for problems which where symmetric about the origin. We now extend this idea to another 3-dimensional coordinate system called **spherical coordinates**.

As we did in cylindrical coordinates, we will use the pole $O$ and polar axis from polar coordinates and draw another axis $z$ perpendicular to the polar plane. Let $P$ be any point in 3-dimensional space. We will represent $P$ by the coordinates $(\rho, \psi, \theta)$ where $\rho \geq 0$ is the length of the line $OP$, $\theta$ is the angle between the positive $z$-axis and the line $OP$.

Since we are keeping the same interpretation of $\theta$ from cylindrical coordinates, it tells us the orientation of $P$ around the $z$-axis. Therefore, we only want $\phi$ to indicate the "tilt" of the point with the $z$-axis. So, we restrict $0 \leq \phi \leq \pi$.

Thus, our restrictions in spherical coordinates are $\rho \geq 0$, $0 \leq \theta < 2\pi$ and $0 \leq \phi \leq \pi$.

#### Remark

The symbols used for spherical coordinates also vary from author to author as does the order in which they are written. In mathematics, it is not uncommon to find $\rho$ replaced by $r$. The standard ISO 31-11 convection uses $\phi$ as the polar angle and $\theta$ as the angle with the positive $z$-axis. Therefore, it is very important to understand which notation is being used when reading an article.

From the diagram, we see that we can convert a point from Cartesian coordinates to spherical coordinates with the equations:

$$x=\rho\sin\phi\cos\theta \quad y=\rho\sin\phi\sin\theta \quad z=\rho\cos\phi \quad \rho=\sqrt{x^2+y^2+z^2} \quad \tan\theta=\frac yx \quad \cos\phi \frac{z}{\sqrt{x^2+y^2+z^2}}$$

### Graphs in Spherical Coordinates

As with cylindrical coordinates, the graph of a function $f(\rho, \phi, \theta)=0$ in spherical coordinates gives a surface in $\mathbb R^3$.