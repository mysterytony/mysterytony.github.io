[<- Go Back](http://tonyli.tk/)

# Efficiency

#### Algorithms

An **algorithm** is step-by-step description of how to solve a problem.

Algorithms are not restricted to computing. For example, every day you might use an algorithm to select which clothes to wear.

For most of this course, the problems are function descriptions (interfaces) and we work with implementations of algorithms that solve those problems.

There are many objective and subjective methods for comparing algorithms:
*	How easy is it to understand?
*	How easy is it to implement?
*	How accurate is it?
*	How robust is it? (Can it handle errors as well?)
*	How adaptable is it? (can it be used to solve similar problems?)
*	How fast (**efficient**) is it?

In this course, we use **efficiency** to objectively compare algorithms.

#### Efficiency

The most common measure of efficiency is **time efficiency**, or how long it takes an algorithm to solve a problem. Unless we specify otherwise, we always mean **time efficiency**.

Another efficiency measure is **space efficiency**, or how much space (memory) an algorithm requires to solve a problem.

#### Running time

To quantify efficiency, we are interested in measuring the **running time** of an algorithm.

What **unit of measure** should we use? Seconds?

"My algorithm can sort one billion integers in 9.037 seconds."

*	What year did you make this statement?
*	What machine & model did you use? (With how much RAM?)
*	What computer language & operating system did you use?
*	Was that the actual CPU time, or the total time elapsed?
*	How accurate is the time measurement? Is the 0.037 relevant?

Measuring running times in seconds can be problematic. What are the alternatives?

Typically, we measure the number of **elementary operations** required to solve the problem.
*	In C, we can count the number of operations, or in other words, the number of operators executed.
*	In Racket, we can count the total number of (substitution) steps required, although that can be  deceiving for built-in functions.

**You are not expect to count the exact the number of operations. We only count operations in these notes for illustrative purposes. We introduce some simplification shortcuts soon.**

#### Input size

What is the number of operations executed for this implementation?

```C
int sum_array(const int a[], int len) {
	int sum = 0;
	int i = 0;
	while (i < len) {
		sum = sum + a[i];
		i = i + 1;
	}
	return sum;
}
```

The running time **depends on the length** of the array.

If there are $n$ items in the array, it requires $7n+3$ operations.

**We are always interested in the running time with respect to the size of the input.**

Traditionally, the variable $n$ is used to represent the **size** (or **length**) of the input. $m$ and $k$ are also popular when where is more than one input.

Often, $n$ is obvious from the context, but if there is any ambiguity you should clearly state what $n$ represents.

For example, with lists of strings, $n$ may represent the number of strings in the list, or it may represent the length of all the strings in the list.

The running **T**ime of an implementation is a **function** of $n$ and is written as $T(n)$.

There may also be another **attribute** of the input that is also important.

For example, with trees, we use $n$ to represent the number of nodes in the tree and $h$ to represent the height of the tree.

#### Algorithm Comparison

Problem: Write a function to determine if an array of positive integers contains at least $e$ even numbers and $o$ odd numbers.

```C
// check_array(a, len, e, o) determines if array a
// 		contains at least e even numbers and
// 		at least o odd numbers
// requires: 	len > 0
// 				elements of a > 0
// 				e, o >= 0
```

Homer, Bart, and Lisa are debating the best algorithm for implementing `check_array`.

Bart just wants to count the total number of odd numbers in the entire array.

```C
bool bart(const int a[], int len, int e, int o) {
	int odd_count = 0;
	for (int i = 0; i < len; i = i + 1) {
		odd_count = odd_count + (a[i] % 2);
	}
	return (odd_count >= o) && (len - odd_count >= e);
}
```

According to Lisa, if there are $n$ elements in the array, $T(n)=8n+7$.

Homer is lazy, and he doesn't want to check all of the elements in the array if he doesn't have too.

```C
bool homer(const int a[], int len, int e, int o) {
	// only loop while it's still possible
	while (len > 0 && e + o <= len) {
		if (a[len - 1] % 2 == 0) { // even case:
			if (e > 0) {
				e = e - 1; // only decrement e if e > 0
			}
		} else if (o > 0) {
			o = o - 1;
		}
		if (e == 0 && o == 0) {
			return true;
		}
		len = len - 1;
	}
	return false;
}
```

The problem with analyzing Homer's code is that it depends not just on the length of the array, but on the content of the array and the parameters $e$ and $o$.

```C
int a[10] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

// these will be fast:
bool fast1 = homer(a, 10, 0, 11); // false;
bool fast2 = homer(a, 10, 1, 0); // true;

// these will be slower:
bool slow1 = homer(a, 10, 5, 5); // true;
bool slow2 = homer(a, 10, 6, 4); // false;
```

For Homer's code, the **best case** is when it can `return` immediately, and the **worst case** is when all of the array elements are visited.

For Bart's code, the best case is the same as the words case

Homer:

$T(n) = 4$ (best case)

$T(n)= 17 n + 1$ (worst case)

Bart:

$T(n) = 8 n + 7$ (all cases)

Which implementation is more efficient?
Is it more "fair" to compare against the best case or the worst case?

#### Worst case running time

Typically, we want to be conservative (pessimistic) and use the worst case.

**Unless otherwise specified, the running time of an algorithm is the worst case running time.**

Comparing the worst case, Bart's implementation $(8n+7)$ is more efficient than Homer's $(17n+1)$.

#### Big O notation

In practice, we are not concerned with the difference between the running time $(8n+7)$ and $(17n+1)$.

We are interested in the **order** of a running time. The order is the **"dominant" term** in the running time **without any constant coefficients**.

The dominant term in both $(8n+7)$ and $(17n+1)$ is $n$, and so they are both "order $n$".

To represent orders, we use **Big O notation**.

Instead of "order $n$" we use $O(n)$.

The "dominant" term is the term that grows the largest when $n$ is very large $(n\rightarrow \infty)$. The order is also known as the "growth rate".

**In this course, we encounter only a few orders (arranged from smallest to largest):
$O(1),O(\log n),O(n),O(n\log n),O(n^2),O(n^3),O(2^n)$

Examples:
*	$2016 = O(1)$
*	$100000 + n = O(n)$
*	$n+n\log n = O(nlog n)$
*	$999n +  0.01n^2 = O(n^2)$
*	$\frac{n(n+1)(2n+1)}{6} = O(n^3)$
*	$n^3+2^n=O(2^n)$

When comparing algorithms, the most efficient algorithm is the one with the lost order.

For example an $O(n\log n)$ algorithms is more efficient than an $O(n^2)$ algorithm.

If two algorithms have the same order, they are considered **equivalent**.

Both Homer's and Bart's implementations are $O(n)$, so they are equivalent.

#### Big O arithmetic

When adding to orders, the result is the largest of the two orders.

*	$O(\log n) + O(n) = O(n)$
*	$O(1) + O(1) = O(1)$

When multiplying two orders, the result is the product of the two orders.

*	$O(\log n)\times O(n) = O(n\log n)$
*	$O(1) \times O(n) = O(n)$

#### Algorithms analysis

An important skill in Computer Science is the ability to **analyze** a function and determine the order of the running time.

In this course, our goal is to give you experience and work toward building your intuition:

```C
int sum_array(const int a[], int len) {
	int sum = 0;
	for (int i = 0; i < len; ++i) {
		sum += a[i];
	}
	return sum;
}
```

"Clearly, each element is visited once, so the running time is $O(n)$".

#### Contract update

You should include the `time` (efficiency) of each function that is not $O(1)$ and is not obviously $O(1)$.

If there is any ambiguity as how $n$ is measured, it should be specified.

```C
// sum_array(const int a[], int len) sums the elements
// 		of array a
// time: O(n), n is the len of a
```

#### Analyzing simple functions

First consider simple functions

```C
int max(int a, int b) {
	if (a > b) return a;
	return b;
}
```

In no other functions are called, there must be a fixed number of operators. Each operators is $O(1)$, so the running time is:
$$O(1)+O(1)+\cdots+O(1)=O(1)$$

If a simple function calls other functions, its running time will depend on those functions.

#### Built in functions

Consider the following two implementations.

```C
// is_len_two(s) determines if the length of s is exactly 2
bool is_len_two_a(const char *s) {
	return strlen(s) == 2;
}
bool is_len_two_b(const char *s) {
	return s[0] && s[1] && (s[2] == 0);
}
```

The running time of `a` if $O(n)$, while the running time of `b` is $O(1)$.

**While using a function that is built-in or provided by a module (library) you should always be aware of the running time.**

#### C running times (strings & I/O)

`<string.h>` functions (e.g. `strlen`, `strcpy`) are $O(n)$, where $n$ is the length of the string. For `strcmp`, $n$ is the length of the smallest string.

`<stdio.h>` functions `printf` and `scanf` are $O(1)$, except when working with strings (`"%s"`), which are $O(n)$, where $n$ is the length of the string.

Note that the string literal used with `printf` must always be constant length (i.e., `printf("literal")`).

#### Racket running times (lists)

Elementary list functions are $O(1)$:

`cons`, `cons?`, `empty`, `empty?`, `rest`, `first`, `second`, `tenth`

List functions that process the full list are typically $O(n)$:

`length`, `last`, `reverse`, `append`

Abstract list functions (e.g., `map`, `filter`) depend on the consumed function, but are $O(n)$ for straightforward $O(1)$ functions.

The exception is Racket's `sort`, which is $O(n\log n)$.

#### Racket running times (equality)

We can assume (numeric equality) is $O(1)$.

`symbol=?` is $O(1)$, but `string=?` is $O(n)$, where $n$ is the length of the smallest string.

Racket's generic `equal?` is deceiving: its running time is $O(n)$, where $n$ is the size of the smallest argument.

Because (`member` `e` `lst`) depends on `equal?`, its running time is $O(nm)$ where $n$ is the length of the `lst` and $m$ is the size of `e`.

#### Array efficiency

One of the significant differences between arrays and lists is that any element of an array can be accessed in constant time regardless of the index or the length of the array.

To access the $i$-th element in an **array** (e.g., `a[i]`) is always $O(1)$.

To access the $i$-th element in a **list** (e.g., `list-ref`) is $O(i)$.

#### Iterative analysis

**Iterative analysis** uses **summations**.

```C
for (i = 1; i <= n; ++i) {
	printf("*");
}
```

$$T(n)=\sum_{i=1}^{n}O(1)=O(1)+\cdots +O(1)=n\times O(1)=O(n)$$

Because we are primarily interested in orders,

$\sum_{i=0}^{n-1}O(x)$, $\sum_{i=1}^{10n}O(x)$, or $\sum_{i=1}^{n/2}O(x)$ are equivalent$^*$ to $\sum_{i=1}^{n}O(x)$

$^*$ unless $x$ is exponential (e.g., $O(2^i)$).

#### Procedure for iteration

1.	Work from the innermost loop to the outermost
2.	Determine the number of iterations in the loop (in the worst case) in relation to the size of the input ($n$) or an outer loop counter
3.	Determine the running time per iteration
4.	Write the summations and simplify the expression

```C
sum = 0;
for (i = 0; i < n; ++i) {
	sum += i;
}
```

$$\sum_{i=0}^{n}O(1) =O(n)$$

#### Common summations

$$\sum_{i=1}^{\log n}O(1) = O(\log n)$$
$$\sum_{i=1}^{n}O(1) = O(n)$$
$$\sum_{i=1}^{n}O(n) = O(n^2)$$
$$\sum_{i=1}^{n}O(i) = O(n^2)$$
$$\sum_{i=1}^{n}O(i^2) = O(n^3)$$

The summation index should reflect the number of iterations in relation to the size of the input and does not necessarily reflect the actual loop counter values.

```C
k = n; // n is size of the input
while (k > 0) {
	printf("*");
	k -= 10;
}
```

There are $n/10$ iterations. Because we are only interested in the order, $n/10$ and $n$ are equivalent.

$$\sum_{i=1}^{n/10}O(1)=O(n)$$

When the loop counter changes geometrically, the number of iterations is often logarithmic.

```C
k = n; // n is size of the input
while (k > 0) {
	printf("*");
	k /= 10;
}
```

There are $\log_{10}n$ iterations.

$$\sum_{i=1}^{\log n}O(1)=O(\log n)$$

When working with nested loops, evaluate the innermost loop first.

```C
for (i = 0; i < n; ++i) {
	for (j = 0; j < i; ++j) {
		printf("*");
	}
	printf("\n");
}
```

Inner loop: $\sum_{j=0}^{i-1}O(1)=O(i)$
Outer loop: $\sum_{i=0}^{n-1}(O(1)+O(i))=O(n^2)$

Do **NOT** put the `strlen` function within a loop.

```C
int char_count(char c, char *s) {
	int count = 0;
	for (int i=0; i < strlen(s); ++i) { // BAD !!!!
		if (s[i] == c) ++count;
	}
	return count;
}
```

By using $O(n)$ function `strlen` inside of the loop, the function becomes $O(n^2)$ instead of $O(n)$.

**Unfortunately, this mistake is common amongst beginners. This will be harshly penalized on assignments & exams.**

#### Recursive relations

To determine the running time of a recursive function we must determine the **recurrence relation**. For example,

$$T(n)=O(n)+T(n-1)$$

We can then look up the recurrence relation in a table to determine the closed-from (non recursive) running time.

$$T(n)=O(n)+T(n-1)=O(n^2)$$

The recurrence relations we encounter in this course are:
each element.

>
|                                   |               |
|-----------------------------------|---------------|
| $T(n)=O(1)+T(n-k_1)$              | $=O(n)$       |
| $T(n)=O(n)+T(n-k_1)$              | $=O(n^2)$     |
| $T(n)=O(n^2)+T(n-k_2)$            | $=O(n^2)$     |
|                                   |               |
| $T(n)=O(1)+T(\frac{n}{k_2})$      | $=O(\log n)$  |
| $T(n)=O(1)+k_2T(\frac{n}{k_2})$   | $=O(n)$       |
| $T(n)=O(n)+k_2T{\frac{n}{k_2}}$   | $=O(n\log n)$ |
|                                   |               |
| $T(n)=O(1)+T(n-k_1)+T(n-k_1^{'})$ | $=O(2^n)$     |

where $k_1, k_1^{'}\leq 1$ and $k_2>1$

**This table will be provided on exams.**

#### Procedure for recursive functions

1.	Identify the order of the function excluding any recursion
2.	Determine the size of the input for the next recursive calls
3.	Write the full recurrence relation (combine step 1 & 2)
4.	Look up the closed-form solution in a table

```Racket
(define (sum lon)
(cons 	[(empty? lon) 0]
[else (+ (first lon) (sum (rest lon)))]))
```

1.	non-recursive function is $O(1)$ `(empty?, first, rest)`
2.	size of the recursion: $n-1$ `(rest lon)`
3.	$T(n)=O(1)+T(n-1)$ (combine 1 & 2)
4.	$T(n)=O(n)$ (table lookup)

#### Revisiting sorting algorithms

No introduction to efficiency is complete without a discussion of **sorting algorithms**.

First we will analyze two recursive sorting algorithms in Racket.

For simplicity, we only consider sorting numbers.

When sorting strings or large data structures, you must also include the time to compare each element.

>When analyzing sorting algorithms, one measure of running time is the number of comparisons.

#### Insertion sort

Recall **insertion sort**, where we start with an empty (sorted) sequence, and then **insert** each element into the sorted sequence, maintaining the order after each insert.

```Racket
(define (insert n slon)
	(cond 	[(empty? slon) (cons n empty)]
			[(<= n (first slon)) (cons n slon)]
			[else (cons (first slon) (insert n (rest slon)))]))
```

$$T(n)=O(1) + T(n-1) = O(n)$$

```Racket
(define (insertion-sort lon)
	(cond 	[(empty? lon) empty]
			[else (insert (first lon) (insertion-sort (rest lon)))]))
```

$$T(n)=O(n)+T(n-1)=O(n^2)$$

#### Merge sort

In **merge sort**, the list is split into two separate lists. After the two lists are sorted they are `merged` together.

This is another example of a divide and conquer algorithm.

The lists are divided into two smaller problems, which are then sorted (conquered). The results are combined to solve the original problem.

For merge sort, we need a function to `merge` two sorted lists.

```Racket
(define (merge slon1 slon2)
	(cond 	[(empty? slon1) slon2]
			[(empty? slon2) slon1]
			[(< (first slon1) (first slon2))
				(cons (first slon1) (merge (rest slon1) slon2))]
			[else (cons (first slon2)
				(merge slon1 (rest slon2)))]))
```

If the size of the two lists are $m$ and $p$, then the recursive calls are either $[(m-1)]$ and $p]$ or $[m$ and $(p-1)]$.

However, if we define $n=m+p$ (the combined size of both lists), then each recursive call is of size $(n-1)$.

$$T(n) = O(1) + T(n-1) = O(n)$$

Now, we can complete `merge-sort`.

```Racket
(define (merge-sort lon)
	(define len (length lon))
	(define mid (quotient len 2))
	(define left (drop-right lon mid)) ; O(n)
	(define right (take-right lon mid)) ; O(n)
	(cond 	[(<= len 1) lon]
			[else (merge (merge-sort left)
				(merge-sort right))]))
```

$$T(n)= O(n)+2T(n/2)=O(n\log n)$$

#### Selection sort

Recall our C implementation of selection sort:

```C
void selection_sort(int a[], int len) {
	for (int i=0; i < len - 1; ++i) {
		int pos = i;
		for (int j = i + 1; j < len; ++j) {
			if (a[j] < a[pos]) {
				pos = j;
			}
		}
		swap(&a[i], &a[pos]);
	}
}
```

$$T(n)=\sum_{i=1}^{n}\sum_{j=i}^{n}O(1)=O(n^2)$$

#### Quick sort

In our C implementation of quick sort, we:
1.	select the first element of the array as our "pivot". $O(1)$
2.	move all elements that are larger than the pivot to the back of the array. $O(n)$.
3.	move ("swap") the pivot into the correct position. $O(1)$.
4.	recursively sort the "smaller then" sub-array and the "larger than" sub-array. $T(?)$.

When the pivot is in the middle it splits the sublists equally, so

$$T(n)=O(n)+2T(n/2) =T(n\log n)$$

But that is the best case. In the worst case, the "pivot" is the smallest (or largest element), so one of the sublists is empty and the other is of size $(n-1)$.

$$T(n)=O(n)+T(n-1)=O(n^2)$$

#### Sorting summary

| Algorithm | best case | worst case |
|---|---|---|
| insertion sort | $O(n)$ | $O(n^2)$ |
| selection sort | $O(n^2)$ | $O(n^2)$ |
| merge sort | $O(n\log n)$ | $O(n\log n)$ |
| quick sort | $O(n\log n)$ | $O(n^2)$ |

#### Binary search

In section 08, we implemented binary search on a sorted array.

```C
int find_sorted(int item, const int a[], int len) {
	// ...
	while (low <= high) {
		int mid = low + (high - low) / 2;
		// ...
		if (a[mid] < item) {
			low = mid + 1;
		} else {
			high = mid - 1;
			//...
```

In each iteration, the size of the search range $(n=$ high-low$)$ was halved, so the running time is:
$$ T(n)=\sum_{i=1}^{\log_{2} n}O(1)=O(\log n)$$

#### Algorithm Design

In this introductory course, the algorithms we develop will be mostly straightforward.

To provide some insight into algorithm design, we will introduce a problem that is simple to describe, but hard to solve efficiently.

We will present four different algorithms to solve this problem, each with a different running time.

#### The maximum subarray problem

Problem: Given an array of integers, find the **maximum sum** of any contiguous sequence (subarray) of elements.

For example, for the following array:

| 31 | -41 | 59 | 26 | -53 | 58 | 97 | -93 | -23 | 84 |
|----|-----|----|----|-----|----|----|-----|-----|----|

the maximum sum is 187

| 31 | -41 | `59` | `26` | `-53` | `58` | `97` | -93 | -23 | 84 |
|----|-----|----|----|-----|----|----|-----|-----|----|

##### Solution A: $O(n^3)$

```C
// for every start position i and ending position j
// loop between them (k) summing elements
int max_subarray(const int a[], int len) {
	int maxsofar = 0;
	for (i = 0; i < len; ++i) {
		for (j = i; j < len; ++j) {
			int sum = 0;
			for (k = i; k <= j; ++k) {
				sum += a[k];
			}
			maxsofar = max(maxsofar, sum);
		}
	}
	return maxsofar;
}
```

$$T(n)=\sum_{i=1}^{n}\sum_{j=i}^{n}\sum_{k=i}^{j}O(1)=O(n^3)$$

##### Solution B: $O(n^2)$

```C
// for every start position i,
// check if the sum from i...j is the max
int max_subarray(const int a[], int len) {
	int maxsofar = 0;
	for (i = 0; i < len; ++i) {
		int sum = 0;
		for (j = i; j < len; ++j) {
			sum += a[j];
			maxsofar = max(maxsofar, sum);
		}
	}
	return maxsofar;
```

$$T(n)=\sum_{i=1}^{n}\sum_{j=i}^{n}O(1)=O(n^3)$$

##### Solution C: $O(n\log n)$

We will only describe this recursive divide and conquer approach.
1.	Find the midpoint position m. $O(1)$
2.	Find (a) the maximum subarray from $(0...m-1)$, and $(b)$ the maximum subarray from $(m+1...len-1)$. $2T(n/2)$
3.	Find (c) the maximum subarray that includes m. $O(n)$
4.	Find the maximum of (a), (b) and (c). $O(1)$

$$T(n)=O(n)+2T(n/2)=O(n\log n)$$

##### Solution D: $O(n)$

```C
// for each position i, keep track of
// the maximum subarray ending at i
int max_subarray(const int a[], int len) {
	int maxsofar = 0;
	int maxendhere = 0;
	for (i = 0; i < len; ++i) {
		maxendhere = max(maxendhere + a[i], 0);
		maxsofar = max(maxsofar, maxendhere);
	}
	return maxsofar;
}
```

#### Space complexity

