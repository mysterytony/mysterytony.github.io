# Chapter 7 Planar Graphs

## 7.1 Planarity

#### 7.1.1 Definition

A Graph $G$ is **planar** it if has a drawing in the plane so that its edge intersect only at their ends, and so that no two vertices coincide. The actual drawing is called a **planar embedding** of $G$, or a **planar map**.

For example, the 3-cube, which we previously considered is a planar graph, with a planar embedding given in Figure 7.1. A planar graph may have a number of essentially different embeddings.

![](http://tonyli.tk/notes/math239/7.1.png)

It is clear that a graph is planar if and only if each of its components is planar. So it is often sufficient to consider only connected planar graphs and connected planar embeddings.

A planar embedding partitions the plane into connected regions called **faces**; one of these regions, called the outer face, is unbounded. For example, the planar embedding given in Figure 7.2 has 4 faces, identified as $f_1,f_2,f_3,f_4$ in the diagram. In this case, the outer face is $f_4$.

![](http://tonyli.tk/notes/math239/7.2.png)

Consider a planar embedding a connected graph $G$. The subgraph formed by the vertices and edges in a face is called the **boundary** of the face. We say that two faces are **adjacent** if they are incident with a common edge. Assume, for the moment, that $G$ is connected. As one moves around the entire perimeter of a face $f$, one encounters the vertices and edges in a fixed order, say

$$W_f =(v_0,e_1,v_1,e_2,...,v_{n-1},e_n,v_n)$$

where $v_n=v_0$. This sequence is a closed walk of the graph $G$, and we call it the **boundary walk** of face $f$. (The boundary walk can start at any vertex, and can proceed around the perimeter in either a clockwise or counterclockwise direction.) The number of edges in the boundary wall $W_f$ is called the **degree** of the face $f$.

In Figure 7.1, all faces have degree 4. Note that a bridge of a planar embedding is incident with just one face, and is contained in the boundary walk of that face twice, once for each side. Thus a bridge contributes 2 to the degree of the face with which it is incident. On the other hand, if $e$ is an edge of a cycle of an embedding, $e$ is incident with exactly two faces, and is contained in the boundary walk of each face precisely once.

Every edge in a tree is a bridge, so a planar embedding of a three $T$ has a single face of degree $2|E(T)|=2|V(T)|-2$.

#### 7.1.2 Theorem

If we have a planar embedding of a connected graph $G$ with faces $f_1,...,f_s$ then

$$\sum_{i=1}^s deg(f_i) = 2 |E(G)|$$

#### Proof

Each edge has two sides, and when we sum the degrees of the faces we are counting the edges twice, once for each side.

$\square$

Note the similarity between Theorem 7.1.2 and Theorem 4.3.1. This theorem is colloquially known as the **Faceshaking Lemma** or the **Handshaking Lemma for Faces**. We shall make a direct link between these results later when we consider the dual of a planar embedding.

#### 7.1.3 Corollary

If the connected graph $G$ has a planar embedding with $f$ faces, the average degree of a face in the embedding is $\frac{2|E(G)|}{f}$.

## 7.2 Euler's Formula

There are often a number of completely different planar embeddings of a planar graph. However, every planar embedding of a given connected planar graph has the same number of faces, a fact that we can deduce from the following result, called **Euler's Formula**.

#### 7.2.1 Theorem Euler's Theorem

Let $G$ be a connected graph with $p$ vertices and $q$ edges. If $G$ has a planar embedding with $f$ faces, then

$$p-q+f=2$$

#### Proof

For each positive integer $p$, we prove this result by induction on $q$. Since $G$ is a connected, it has a spanning tree and so $q \geq p -1$.

As a tree has no cycles, any planar embedding of a tree has just one face, and the theorem holds.

So assume $q > p-1$, and assume inductively that Euler's formula is true for any connected graph on $p$ vertices with fewer than $q$ edges. Suppose that we have a planar embedding of $G$ with $f$ faces. Since $q \geq p$ we see that $G$ is not a tree and therefore it has an edge $e=uv$ that is not a bridge. Then we also have a planar embedding of $G \setminus e$ (the graph we get from $G$ by deleting the edge $e$). Since $G \setminus e$ has $p$ vertices and $q-1$ edges and is connected, it follows by induction that if it has $f_1$ faces, then

$$p-(q-1)+f_2=2$$

and therefore $f_1=q+1-p$. If we put $e$ back into our drawing, it divides a face into two. So the embedding of $G$ has one more face than that of $G \setminus e$. Hence the number of faces in the embedding of $G$ is $q + 2 - p$ and then

$$|V(G)|-|E(G)|+q+2-p=p-q+q+2-p=2$$

$\square$

As an example of Euler's Formula, consider the connected planar embedding in Figure 7.2. In this case there are 12 vertices, 14 edges and 4 faces and $12-14+4=2$, as expected.

## 7.4 Platonic Solids

Consider the two geometric solids in Figure 7.7; the cube and tetrahedron. These polyhedra exhibit a great deal of symmetry. In particular, the faces have the same degree and the vertices have the same degree. We call all such polyhedra **platonic solids**. Surprisingly, there are just five platonic solids: the tetrahedron, the cube, the octahedron, the dodecahedron, and the icosahedron. In this section we will outline a proof of this remarkable fact.

For each platonic solid, we can obtain a planar embedding in which all vertices have the same degree $d \geq 3$ and all faces have the same degree $d^\* \geq 3$;

![](http://tonyli.tk/notes/math239/7.7.png)

see Figure 7.8. We call a graph **platonic** if it admits a planar embedding in which each vertex has the same degree $d \geq 3$ and each face has the same degree $d^\* \geq 3$. We will show that the only platonic graphs are those in Figure 7.8, from which it is easy to deduce that there are just five platonic solids.

#### 7.4.1 Theorem

There are exactly five platonic graphs.

#### 7.4.2 Lemma

Let $G$ be a planar embedding with $p$ vertices, $q$ edges and $s$ faces, in which each vertex has degree $d \geq 3$ and each face has degree $d^\* \geq 3$. Then $(d, d^\*)$ is one of the five pairs.

$$\\{(3,3),(3,4),(4,3),(3,5)(5,3)\\}$$

(proof omitted)

![](http://tonyli.tk/notes/math239/7.8.png)

#### 7.4.3 Lemma

If $G$ is a platonic graph with $p$ vertices, $q$ edges and $f$ faces, where each vertex has degree $d$ and each face $d^\*$, then

$$q = \frac{2dd^\*}{2d+2d^\*-dd^\*}$$

and $p = 2q/d \quad f=2q/d^\*$

## 7.5 Nonplanar Graphs

In order to prove that a graph is planar, we can find a planar embedding. How would we prove that a graph is nonplanar? In this section we will see that in some case we can use Euler's formula to do this.

We need one technical result before we can start.

#### 7.5.1 Lemma

If $G$ is connected and not a tree, then in a planar embedding of $G$, the boundary of each face contains a cycle.

#### 7.5.2 Lemma

Let $G$ be a planar embedding with $p$ vertices and $q$ edges. If each face of $G$ has degree at least $d^\*$, then $(d^\*-2)q \leq d^\*(p-2)$.

Lemma 7.5.2 relies on a given planar embedding, since it involves the face degrees. We would like similar inequalities for planar graphs. The following lemma allows us to relate face degrees to the lengths of cycles, which are independent of the embedding. 

Note that a graph with $p$ vertices can have as many as $p(p−1)/2$ edges, a quadratic function of $p$. However, this is not the case for planar graphs. The following theorem shows that the number of edges in a planar graph is bounded by a linear function in the number of vertices p. (Note that if we allow multiple edges or loops, fixing p does not bound the number of edges; for example, the graph in Figure 7.9 has p=2 vertices and q edges for any positive integer q.)

#### 7.5.3 Theorem

In a connected planar graph with $p \geq 3$ vertices and $q$ edges, we have

$$q \geq 3p - 6$$

#### 7.5.4 Corollary

$K_5$ is a not planar.

#### 7.5.5 Corollary

A planar graph has a vertex of degree at most five.

#### 7.5.6 Lemma

$K_{3,3}$ is not planar.

## 7.6 Kuratowski’sTheorem

We have been able to prove by counting arguments that two graphs, $K_5$ and $K_{3,3}$, are not planar. We are going to see how we can use graphs based on $K_5$ and $K_{3,3}$ to certify that a graph is not planar.

First we need some language to properly state our result.

An **edge subdivision** of a graph $G$ is obtained by applying the following operation, independently, to each edge of $G$: replace the edge by a path of length 1 or more; if the path has length $m>1$, then there are $m−1$ new vertices and $m−1$ new edges created; if the path has length $m =1$, then the edge is unchanged. For example, Figure 7.11 shows a graph $H$, and an edge subdivision $G$ of $H$.

![](http://tonyli.tk/notes/math239/7.11.png)

Note that the operation of edge subdivision does not change planarity: if $G$ is a planar graph, then all edge subdivisions of $G$ are planar; if $G$ is nonplanar, then all edge subdivisions of $G$ are nonplanar. Similarly, note that if a graph $G$ has a nonplanar subgraph,then $G$ is nonplanar.

From these observations, we can immediately conclude that if a graph $G$ has a subgraph isomorphic to an edge subdivision of $K_{3,3}$ or $K_5$, then $G$ is nonplanar. One of the most famous results of graph theory, known as Kuratowski’s Theorem, establishes that the converse of this result is also true.

#### 7.6.1 Theorem

A graph is not planar if and only if it has a subgraph that is an edge subdivision of $K_5$ or $K_{3,3}$.

## 7.7 Coloring and Planar Graphs

#### 7.7.1 Definition

A $k$-coloring of a graph G is a function from $V(G)$ to a set of size $k$ (whose elements are called colors), so that adjacent vertices always have different colors. A graph with a $k$-coloring is called a $k$-colorable graph.

#### 7.7.2 Theorem

A graph is 2-colorable if and only if it is bipartite.

#### 7.7.3 Theorem

$K_n$ is $n$-color able, and not $k$-colorable for any $k<n$.

#### 7.7.4 Theorem

Every planar graph is 6-colorable.

#### 7.7.5 Definition

Let $G$ be a graph and let $e=xy$ be any edge of $G$. The graph $G / e$ obtained from $G$ by **contracting** the edge $e$ is the graph with vertex set $V(G) \setminus (x,y) \cup \\{z\\}$, where $z$ is new vertex and edge set

$$\\{\\{u,v\\}\in E(G):\\{u,v\\} \cap \\{x,y\\}=\emptyset \\} \cup \\{ \\{u,z \\} : u \notin \\{x,y\\},\\{u,w\\} \in E(G) \text{forsome } w \in \\{x,y\\} \\}$$

#### Remark

$G/e$ is planar whenever $G$ is. The converse of this is not true.

#### 7.7.6 Theorem

Every planar graph is 5-colorable.

#### 7.7.7 Theorem

Every planar graph is 4-colorable.