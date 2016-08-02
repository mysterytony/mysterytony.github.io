# Chapter 8 Matchings

## 8.1 Matching

A **matching** in a graph $G$ is a set $M$ of edges of $G$ such that no two edges in $M$ have a common end. (Another way to express the condition is that in the spanning subgraph of $G$ with edge set $M$, every vertex has degree at most 1.) So $M$ matches certain pairs of adjacent vertices--hence the name. The thick edges in Figure 8.1 form a matching. We say that a vertex $v$ of $G$ is **saturated** by $M$, or that $M$ **saturates** $v$, if $v$ is incident with an edge in $M$. Of course, every graph has a matching; for example the empty set $\emptyset$ is always a matching. The question we will be most interested in is to find a largest matching in $G$, called a **maximum matching** of $G$. In Figure 8.1 the matching $M$ indicated there has size 3, and therefore is not a maximum matching, since it is easy to find a matching of size 4. A special kind of maximum matching is one having size $p/2$, that is, one that saturates every vertex, called a **perfect matching**. Of course, not every graph has a perfect matching.

We will be concentrating on matching problems for bipartite graphs. Here is a way to restate the problem in case $G$ is bipartite.

**Job assignment problem**. We are given a set $A$ of workers and a set $B$ of jobs, and for each job, the set of workers capable of doing the job. We want to assign as many jobs as possible to workers able to do them, but each worker is to be assigned to at most one job, and each job is to be assigned to at most one worker.

![](tonyli.tk/notes/math239/8.1.png)

Why is the job assignment problem equivalent to the maximum matching problem of bipartite graphs? For the data of the job assignment problem we can construct a bipartite graph $G$ with vertex set $A \cup B$ and with $u \in A$ adjacent to $v\in B$ if and only if worker $u$ can do job $v$. Conversely, given a bipartite graph with bipartition $A,B$ we make a worker for each element of $A$ a job for each element of $B$ and declare worker $u$ to be able to do job $v$ if and only if $u,v \in E(G)$. The condition that jobs be assigned to workers that can do them, means that an assignment is a set of edges. The condition that each worker be assigned to at most one job and that each job be assigned to at most one worker, corresponds to the condition that the assigned edges form a matching.

If we have a matching $M$ of $G$, certain kinds of paths are useful for obtaining a larger matching. We say that a path $v_0,...,v_n$ is an **alternating path** with respect to $M$ if one of the following is true

$$\\{v_i, v_{i+1}\\} \in M \text{ if } i \text{ is even and }\\{v_i, v_{i+1}\\} \notin M \text{ if } i \text{ is odd}$$

That is, edges of the path are alternately in and not in $M$. An **augmenting path** with respect to $M$ is an alternating path joining two distinct vertices neither of which is saturated by $M$. Note that augmenting paths have odd length because they begin and end with non-matching edges.

#### 8.1.1 Lemma

If $M$ has an augmenting path, it is not a maximum matching.

## 8.2 Covers

A **cover** of a graph $G$ is a set $C$ of vertices such that every edge of $G$ has at least one end in $C$. It is easy to find large covers, just as it is easy to find small matchings. For example, in any graph $G$, $V(G)$ is a cover. Also, if $G$ is bipartite with bipartition $A,B$, then $A$ is a cover, and so is $B$. A very useful observation about matchings and covers is the following.

#### 8.2.1 Lemma

If $M$ is a matching of $G$ and $C$ is a cover of $G$, then $|M| \leq |C|$.

#### 8.2.2 Lemma

If $M$ is matching and $C$ is a cover and $|M|=|C|$, then $M$ is a maximum matching and $C$ is a minimum cover.

## 8.3 Konig's Theorem

#### 8.3.1 Theorem

In a bipartite graph the maximum size of a matching is the minimum size of a cover.

Through minimum covers have the same size as maximum matching in bipartite graphs, this is not true in general.

Let $A,B$ be a bipartition of $G$, and let $M$ be a matching of $G$. In the following **$XY$ construction** we use alternating paths to define sets $X,Y$ and show that they they have certain properties. This will allow us to prove Konig's Theorem, and also to give an efficient algorithm to find a maximum matching.

Let $X_0$ be the set of vertices in $A$ not saturated by $M$ and let $Z$ denote the set of vertices in $G$ that are joined by to a vertex in $X_0$ by an alternating path. If $v \in Z$ we use $P(v)$ to denote an alternating path that joins $v$ to $X_0$. Now define:

1.	$X = A \cap Z$
2.	$Y = B \cap Z$

Notice that any alterning path $P(v)$ has even length if $v\in X$ and odd length if $v \in Y$. Since the first edge of any alternating path beginning at a vertex in $X_0$ is not a matching edge, and every second edge is a matching edge, it follows that

*	If $v\in X$, then the last edge of $P(v)$ is in $M$
*	if $v\in Y$, then the last edge of $P(v)$ is not in $M$.

One more easy observation: If $w$ is a vertex of an alternating path $P(v)$ from $X_0$ to $v\in Z$ then $w \in Z$.

#### 8.3.2 Lemma

Let $M$ be a matching of bipartite graph $G$ with bipartition $A,B$ and let $X$ and $Y$ be defined above. Then:

1.	there is no edge of $G$ from $X$ to $B \setminus Y$
2.	$C = Y \cup (A \setminus X)$ is a cover of $G$
3.	There is no edge of $M$ from $Y$ to $A \setminus X$
4.	$|M|=|C|-|U|$ where $U$ is the set of unsaturated vertices in $Y$.
5.	There is an augmenting path to each vertex in $U$.


#### An algorithm for maximum matching in bipartite graphs

The $XY$ -construction and Lemma 8.3.2 essentially provides an algorithm to find a maximum matching:

Step 1: Begin with any matching $M$.

Step 2: Construct $X$ and $Y$.

Step 3:  If there is an unsaturated vertex $v$ in $Y$, find an augmenting path $P(v)$ ending at $v$, use it to construct a larger matching $M_0$, and replace $M$ by $M_0$. Then go to Step 2.

Step 4: If every vertex in $Y$ is saturated, stop. $M$ is a maximum matching, and $C = Y \cup (A \setminus X)$ is a cover of minimum size.

## 8.4 Application of Konig's Theorem

#### 8.4.1 Theorem (Hall's Theorem)

A bipartite graph $G$ with bipartition $A,B$ has a matching saturating every vertex in $A$, if and only if very subset $D$ of $A$ satisfies

$$|N(D)| \geq |D|$$

## 8.6 Perfect Matchings in Bipartite Graphs

#### 8.6.1 Corollary

A bipartite graph $G$ with bipartition $A,B$ has a perfect matching if and only if $|A| =|B|$ and every subset $D$ of $A$ satisfies

$$|N(D)| \geq |D|$$

#### 8.6.2 Theorem

If $G$ is a $k$-regular bipartite graph with $k \geq 1$, then $G$ has a perfect matching.

