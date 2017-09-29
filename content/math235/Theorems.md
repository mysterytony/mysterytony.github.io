# Chapter 7 Fundamental Subspaces

### Fundamental Subspaces

Let $A$ be an $m \times n$ matrix. The **four fundamental subspaces** pf $A$ are

1. $\text{Col}(A) = \{A\vec x \in \mathbb{R}^n\}$, called the **column space**,
2. $\text{Row}(A) = \{A^T\vec x \in \mathbb R ^m\}$, called the **row space**,

# Chapter 8 Linear Mappings

## 8.4 Isomorphism

### Ont-To-One Onto

Let $L:\mathbb V \rightarrow \mathbb W$ be a linear mapping. $L$ is called **one-to-one** (injective) if for every $\vec u, \vec v \in \mathbb V$ such that $L (\vec u) = L(\vec v)$, we must have $\vec u = \vec v$.

$L$ is called **onto** (surjective) if for every $\vec w \in \mathbb W$, there exists $\vec v \in \mathbb V$ such that $L(\vec v) = \vec w$.

### Lemma 1

Let $L : \mathbb V \rightarrow \mathbb W$ be a linear mapping. $L$ is one-to-one if and only if $\text{Ker}(L)=\{\vec 0\}$.

### Isomorphism Isomorphic

A vector space $\mathbb V$ is said to be **isomorphic** to a vector space $\mathbb W$ if there exists a linear mapping $L:\mathbb V \rightarrow \mathbb W$ which is one-to-one and onto. $L$ is called an **isomorphism** from $\mathbb V$ to $\mathbb W$.

