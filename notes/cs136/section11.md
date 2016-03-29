[<- Go Back](http://tonyli.tk/)

## Section 11: Linked Data Structures

#### Linked lists

Racket's like type is more commonly known as a **linked list**

![linked list](http://mysterytony.github.io/notes/cs136/sec11pg2.png)

Each **node** contains an **item** and a **link** (pointer) to the **next** node in the list.

The last node's link contains a special **sentinel value** to indicate it is the last node.

A linked list is usually represent as a link to the **front** of the list.

![linked list front](http://mysterytony.github.io/notes/cs136/sec11pg3.png)

Unlike arrays, linked list nodes are not arranged sequentially in memory. In general, there is no convenient way to "jump" to the $i$-th element in a linked list. The linked list must be **traversed** from the front. Traversing a linked list is $O(n)$.

A significant advantage of a linked list is that its length can easily change, and the length does not need to be known in advance.

The memory for each node is allocated dynamically.

#### Functional vs. Imperative approach

The core concept of a linked list data structure is independent of any single paradigm.

However, the approach used to **implement** and write functions that process linked lists are very different.

Programming with linked lists further illustrates the differences between the two paradigms.

#### Dynamic memory in Racket

Racket uses dynamic memory, but it is mostly *hidden* from the programmer.

The `cons` function dynamically creates a **new** linked list node.

The `list` function and quote list notation `'(1 2 3)` implicitly use `cons`.

The only other method of using dynamic memory in Racket is the constructor to `make` a **new** structure.

Knowing how `cons` uses dynamic memory, consider how the following Racket function `sqr-list` constructs a **new list**

```Racket
(define (sqr-list lst)
	(cond 	[(empty? lst) empty]
			[else (cons (sqr (first lst) (sqr-list (rest lst))))]))

(define a '(10 3 5 7))
(define b (sqr-list a))
```

![linked list racket](http://mysterytony.github.io/notes/cs136/sec11pg7.png)

In the functional programming paradigm, this is the only sensical meaning, because there is no mutation.

In the imperative programming paradigm, a "square list" function is more likely to **mutate** an existing list instead of producing a new list.

>In practice, most imperative list functions perform mutation. If the caller wants a new list (instead of mutating an existing one), they can first make a copy of the original list and then mutate the new copy.

#### Mixing paradigms

Problems may arise if we naively use the functional paradigm in an imperative environment without considering the consequences.

This is especially important in C, where there is no garbage collector.

| Functional (Racket) | Imperative (C)       |
|---------------------|----------------------|
| no mutation         | mutation             |
| garbage collector   | no garbage collector |
| hidden pointers     | explicit pointers    |

The following example highlights the potential problems.

Recall the `insert` function used in Racket's `insertion sort`.

```Racket
;; (insert n slon) inserts n into a sorted list of numbers
(define (insert n slon)
	(cons 	[(empty? slon) (cons n empty)]
			[(<= n (first slon)) (cons n slon)]
			[else (cons (first slon) (insert n (rest slon)))]))

(define a '(10 20 50 100))
(define b (insert 30 a))
```

![racket insert linked list](http://mysterytony.github.io/notes/cs136/sec11pg10.png)

The lists **share the last two nodes**

In Racket this behavior is completely transparent because there is **no mutation**, and there is ad **garbage collector**.

In an imperative language like C, this configuration is problematic.
*	If we apply a mutative function such as "square list" on `a`, then some of the elements of `b` will unexpectedly change.
*	If we explicitly `free` all of the memory for list `a`, then list `b`will become invalid.

List functions that perform computations and do not modify the list (or produce a new list) work well in both paradigms.

If a function mutates a list (or produces a "new" list), you should use caution to ensure that the result will not create further problems.

>In Racket, lists are immutable, and there is a special `mcons` function to generate a mutable list.
In the Scheme language, lists are mutable. This is one of the significant differences between Racket and Scheme.

#### Linked lists in C

There is no "official" way of implementing a linked list in C.

In this section we present a typical linked list structure that uses a **wrapper** strategy.