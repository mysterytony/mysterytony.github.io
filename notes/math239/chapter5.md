# Chapter 5 Trees

## 5.1 Trees

A very special and important kind of graph is a **tree**.

#### 5.1.1 Definition

A **tree** is a connected graph with no cycles.

#### 5.1.2 Lemma

There is a unique path between every pair of vertices $u$ and $v$ in a tree $T$.

>#### Proof
For any 2 vertices $u$ and $v$ in $T$, there is at least 1 path joining them since $T$ is connected. Since $T$ has no cycles, there is at most one path by Corollary 4.10.4. The establishes the result.
$\square$

#### 5.1.3 Every edge of a tree $T$ is a bridge

>#### Proof
An edge $e$ of $T$ is not in a cycle, so by Theorem 4.10.3, $e$ is a bridge.


#### 5.1.4 Theorem

A three with at least two vertices has at least two vertices of degree one.

>### Proof
Find a longest path $w_0,...,w_n$ in the tree $T$, say between vertices $u=w_0$ and $v=w_n$. This path has length at least one, since any edge in the non-trivial tree is a path of length one, so $u\neq v$.
Thus one vertex adjacent to $v$ is in the path, namely $w_{n-1}$. If $deg(v) > 1$ there must be another vertex, $w$ adjacent to $v$, vertex $w$ cannot be in the path, since this would imply a cycle in $T$, whereas $T$ has no cycles. Since $w$ is not in the path, we can extend the path by adding edge $u,w$ to it, and we get a longer path $w_0,...,w_nw$. This is a contradiction. Hence $deg(v)=1$. Similarly $deg(u)=1$, which proves the theorem.
$\square$

This proof works if, instead of choosing a longest path, we choose a path which is not a subgraph of a path in $T$ with more edges. (We might say that our path is "maximal under inclusion".) The advantage of this choice is that it is easier to decide if a path is maximal under inclusion than to decide if it is a longest path--for to do the latter we must consider all paths in the tree.

One main property of trees is that any three with $p$ vertices have the same number of edges: $p-1$.

#### 5.1.5 Theorem

If $T$ is a tree, then $|E(T)| = |V(T)|-1$

>#### Proof
The proof is by mathematical induction on $p$, the number of vertices. When $p=1$ there is just one tree. It has one vertex and no edges. It is called the "trivial" tree, and the theorem holds for it.
Suppose that the theorem is true on fewer than $p$ vertices, and let $T$ by any tree with $p$ vertices, for $p\geq 2$. By the previous theorem, there is a vertex $u$ in $T$ with degree one. Let $v$ be the neighbor of $u$ in $T$ and let $e$ be the edge $u,v$. Since $e$ is a bridge, $T \setminus e$ is not connected and, by Lemma 4.10.2, it has exactly two components, one of which is the vertex $u$. The other component is a connected graph on $p-1$ vertices with no cycles. Therefore it is a tree and, by induction, it has exactly $p-2$ edges. This implies that $|E(T)|=p-1$
$\square$

In Theorem 5.1.4, we proved that every tree has at least two vertices of degree one. The following alternative proof gives more detailed information about how many vertices of degree one a tree can have given the degree of other vertices.

#### Alternate proof to Theorem 5.1.4

Let $T$ be a tree and let $n_r$ denote the number of vertices of degree $r$ in $T$. Set $p=|V(T)|$ and assume $p \geq 2$. By Theorem 4.3.1 we have

$$2p-2 = \sum_{v \in V(T)} deg(v)$$

and therefore

$$-2 = \sum_{v} (deg(v)-2) = \sum_{r=0}^{n-1}n_r(r-2)$$

In the last sum, $n_0=0$ (because tree are connected) and so we find that

$$-2 = -n_1 + \sum_{r \geq 3} (r-2)n_r$$

Therefore

$$n_1 = 2 + \sum_{r \geq 3} (r-2) n_r$$

Since $(r-2) n_r \geq 0$ when $r \geq 3$ it follows that $n_1 \geq 2$.

$\square$

The vertices of degree 1 in a tree are often called "end-vertices" or sometimes "leaves". The above proof implies that if $T$ contains a vertex of degree $r$, where $r \geq 3$, then $n_1 \geq 2 + (r-2)=r$. 

## 5.2 Spanning Threes

A spanning subgraph which is also a tree is called a **spanning tree**. The reason that spanning threes are important is that, of all the spanning subgraphs, they have the fewest edges while remaining connected.

#### 5.2.1 Theorem

A graph $G$ is connected if and only if it has a spanning tree.

#### Proof

("if" part) We are given that $G$ has a spanning tree $T$. Then Lemma 5.1.2 implies that there is a path in $T$ between every pair of vertices of $T$. But each of these paths is also contained in $G$, and $G$ has the same vertices as $T$, so from Definition 4.8.1, we conclude that $G$ is connected.

("only if" part) We are given that $G$ is connected. If $G$ has no cycles, then $G$ itself is a spanning tree of $G$. Otherwise $G$ has a cycle. Remove any edge $e$ of some cycle. Then $G-e$ is connected, by Theorem 4.10.3, and has fewer cycles than $G$.

Repeat this process, removing an edge on a cycle at each state, until we have a connected, spanning subgraph with no cycles. This subgraph is a spanning tree of $G$.

$\square$

To show that a graph is connected, using the definition, you need to give a path between any pair of vertices. However, Theorem 5.2.1 provides a much more succinct method: give a spanning tree. 

#### 5.2.2 Corollary

If $G$ is connected, with $p$ vertices and $q=p-1$ edges, then $G$ is a tree.

#### Proof

Let $G$ be a connected graph with $p$ vertices and $q = p-1$ edges. By Theorem 5.2.1 $G$ has a spanning tree $T$. Not $T$ is a tree with $p$ vertices, so by Theorem 5.1.5, $T$ has $p-1$ edges. However, as $G$ has only $p-1$ edges, it must be the case that $G=T$. Therefore $G$ is a tree.

$\square$

#### 5.2.3 Theorem

If $T$ is a spanning tree of $G$ and $e$ is an edge not in $T$, then $T+e$ contains exactly one cycle $C$. Moreover, if $e'$ is any edge on $C$, then $T + e - e'$ is also a spanning tree of $G$.

#### Proof

Let $e = u,v$. Any cycle in $T+e$ must use $e$, since $T$ has no cycles. Such a cycle consists of $e$ along with a $u,v$ path in $T$. By Lemma 5.1.2, there is a unique $u,v$ path in $T$, hence there is exactly one cycle $C$ in $T+e$.

If $e'$ is any edge in $C$, then $e'$ is not a bridge (Theorem 4.10.3). So $T+e-e'$ is still connected. Since it has $n-1$ edges, by Corollary 5.2.2, it is a tree.

#### 5.2.4 Theorem

If $T$ is a spanning tree of $G$ and $e$ is an edge in $T$, then $T-e$ has 2 components. If $e'$ is in the cut induced by one of the components, then $T-e+e'$ is also a spanning three of $G$.

#### Proof

The first statement is a direct consequence of Lemma 4.10.2. Let $C_1$ and $C_2$ be the two components of $T-e$. Suppose $e' =u,v$ where $u\in V(C_1) \quad v\in V(C_2)$.

We wish to show that $T-e+e'$ is connected using Theorem 4.8.2. Let $x \in V(C_1)$. For any $y\in V(C_1)$, there exists an $x,y$path since $C_1$ is connected. Suppose $y \in V(C_2)$. Since $C_1$ and $C_2$ are connected, there exist an $x,u$-path $P_1$ and a $v,y$ path $P_2$. Then $P_1,e,P_2$ form an $xy$-path. Since there exists an $xy$-path for any vertex $y$, $T-e+e'$ is connected.

Since $T-e+e'$ has $n-1$ edges, by Corollary 5.2.2, it is a tree.

$\square$

## 5.3 Characterizing Bipartite Graphs

Using Theorem 5.2.1 we will prove an important characterization of bipartite graphs. Note that, we can convince someone that a graph is bipartite by giving them a bipartition. However, it is not so clear how you would convince them that a graph does not have a bipartition. (Checking every partition of $V(G)$ would be tedious.)

One idea is to note that any subgraph of a bipartite is bipartite, and so we could try to find a subgraph that is "obviously" not bipartite. An **odd cycle** is a cycle on an odd number of vertices.

#### 5.3.1 Lemma

An odd cycle is not bipartite.

#### Proof

Suppose that $C$ is a cycle with vertex set

$$\\{−k,−k+1,...,k\\}$$

where $i~i+1$ if $−k \leq i <k$ and $k~−k$. Suppose $C$ is bipartite with bipartition $(A,B)$. Without loss of generality, $0 \in A$. Then $1,−1 \in B$ and it follows easily that for $j =1,...,k$, the vertices $j$ and $−j$ must be in the same partition. But $k$ and $−k$ are adjacent and they are in the same partition. This is a contradiction, hence $C$ is not bipartite.

$\square$

So you could certify a graph is not bipartite by producing a subgraph that is an odd cycle. It is quite surprising, but this is all you need to do. 

The converse is also true, as we see in the following result.

#### 5.3.2 Theorem

A graph is bipartite if and only if it has no odd cycles.

#### Proof

Given Lemma 5.3, it suffices to prove that if $G$ is not bipartite, then it contains an odd cycle. Since $G$ is not bipartite, at least one component $H$ of $G$ is not bipartite. (If all components are bipartite, then we could find a bipartition of $G$ by combining the bipartitions of the individual components.) Since $H$ is connected, by Theorem 5.2.1, there exists a spanning tree $T$ in $H$. Trees are bipartite (see Problem Set 5.1, Problem 2), so let $(A,B)$ be a bipartition of $T$. Since $H$ is not bipartite, $(A,B)$ is not a bipartition of $H$ and therefore there exists an edge $\\{u,v\\}$ of $H$ such that both $u$ and $v$ are in $A$, or both are in $B$. By swapping $A$ and $B$ if needed, we may assume that $u,v \in A$. Since $T$ is connected, there exists a $u,v$-path $P$ in $T$, with vertices $x_0x_1...x_n$ where $u=x_0$ and $v=x_n$. Since $x_0=u\in A$ and $T$ is bipartite, the vertices along $P$ must alternate between $A$ and $B$. So $x_0,x_2,x_4,... \in A$ and $x_1,x_3,x_5,...\in B$. Since $x_n \in A$, $n$ must be even, hence $P$ has even length. However, $x_0x_n =uv \in E(H)$, so $P+\\{u,v\\}$ is an odd cycle in $H$, which is in $G$. Hence $G$ contains an odd cycle, as claimed.

## 5.6 Minimum Spanning Tree

In the minimum spanning tree (MST) problem, we are given a connected graph $G$ and a weight function on the edges $w :E(G) \rightarrow R$. The goal is to find a spanning tree in $G$ whose total edge weight is minimized.

For example, in the graph to the left, we have a connected graph with the edges being labeled with their weights. In the graph to the right, we have a spanning tree of total weight 31. But is there another spanning tree of smaller weight?

![](http://tonyli.tk/notes/math239/spanningtree.png)

This problem is useful in the design of various networks, such as computer networks, road networks, and power grids. The edge weights would represent the costs of building between the two locations. A minimum spanning tree would represent the least amount of cost required to completely connect every location.

There are several efficient algorithms that can solve the MST problem. We present Prim’s algorithm here. The idea of Prim’s algorithm is that we start with a vertex, and iteratively grow the tree one edge at a time. Each time we grow the tree, we increase the total weight as small as possible.

#### Prim's Algorithm

1.	Let $v$ be an arbitrary vertex in $G$, let $T$ be the tree consists of just $v$.
2.	While $T$ is not a tree...
	a.	Look at all the edges in the cut induced by $V(T)$
	b. Let $e=uv$ be an edge with the smallest weight in the cut (where $u \in V(T), v \notin V(T))$
	c.	Add $v$ to $V(T)$ and add $e$ to $E(T)$

Here is an illustration of the algorithm using the example above. We start with the vertex a. In the first iteration, we look at the edges in the cut induced by $\\{a\\}$, which are $\\{ab,ac,ae\\}$. Since $ac$ has the smallest weight, we add it to the tree along with vertex $c$.

In the second iteration, we look at the edges in the cut induced by $\\{a,c\\}$, which are $\\{ab,cd,ce,ae\\}$. Since $ae$ has the smallest weight, we add it to the tree along with the vertex $e$.

We repeat this process until we have a spanning tree. We claim that the tree we produce is a minimum spanning tree.

![](http://tonyli.tk/notes/math239/prim.png)

Prim's algorithm is a greedy algorithm, meaning at each step in the process, we pick the edge that is "best" for our problem. But how do we know that it will always produce a tree of minimum wight? This requires the following proof. For any graph $H$, we will use the notation $w(H) \sum_{e \in E(H)} w(e)$.

#### 5.6.1 Theorem

Prim’s algorithm produces a minimum spanning tree for $G$.

#### Proof

Let $T_1,T_2,...,T_n$ be the trees produced by the algorithm at each step, where the order of selection of the edges is $e_1,...,e_{n-1}$. We will prove by induction on $k$ that there exists a MST containing $T_k$ as a subgraph.

Base case: for $k=1$, it is just a vertex, so every MST contains $T_1$ as a subgraph.

Induction hypothesis: assume that there exists a MST containing $T_k$ as a subgraph.

Induction step: we need to prove that there is a MST containing $T_{k+1}$ as a subgraph.

Let $T^\*$ be a MST that contains $T_k$ as a subgraph, which is assumed by the induction hypothesis. If $T^\*$ also contains $e_k$, then $T^\*$ contains $T_{k+1}$ as a subgraph, and we are done. If not, then $e_k \notin E(T^\*)$. This means that $T^\* + e_k$ contains a unique cycle $C$. Now $C-e_k$ is a path between two endpoints of $e_k$, one of which is in $V(T_k)$ and the other is not. Therefore, there is at least one edge $e'$ in $C-e_k$ in the cut induced by $V(T_k)$. By Theorem 5.2.3, $T' = T^\* +e_k -e'$ is also a spanning tree.

In Prim's algorithm, when we picked $e_k$, it is an edge in the cut induced by $V(T_k)$ of minimum weight. So $w(e') \geq w(e_k)$. If $w(e') > w(e_k)$, then $w(T')=w(T^\*) + w(e_k)-w(e') < w(T^\*)$, which is not possible since $T^\*$ is a minimum spanning tree. Therefore, $w(e') = w(e_k)$, which means that $w(T') =w(T^\*)$. So $T'$ is also a minimum spanning tree, which contains all edges in $T_{k+1}$. Therefore, $T'$ is the tree we are looking for.

This induction tells us that there is a MST that contains $T_n$, meaning $T_n$ must equal to the MST. Hence the algorithm produces a MST.

$\square$