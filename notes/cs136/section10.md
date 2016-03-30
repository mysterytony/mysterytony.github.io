[<- Go Back](http://tonyli.tk/)

# Dynamic Memory & ADTs in C

#### The heap

The **heap** is the final section in the C memory model.

It can be thought of a "big pile" (or "pool") of memory that is available to your program.

Memory is **dynamically** "borrowed" from the heap. We call this **allocation**.

When the borrowed memory is no longer needed, it can be "returned" and possible **reused**. We call this **deallocation**.

If too much memory has already been allocated, attempts to borrow additional memory fail.

low

| stack frame    |
|----------------|
| code           |
| read-only data |
| global data    |
| heap $\downarrow$|
|                |
| stack $\uparrow$|

high

#### malloc

The `malloc` (memory allocation) function obtains memory the heap dynamically. It is provided in `<stdlin.h>`.

```C
// malloc(s) requests s bytes of memory from the heap
//	and returns a pointer to a block of s bytes, or
//	NULL if not enough memory is available
// time: O(1)
```

For example, if you want enough space for an array of 100 ints.

```C
int *my_array = malloc(100 *sizeof(int));
```

or an array of n `struct posn`:

```C
struct posn *my_posn_array = malloc(n * sizeof(struct posn));
```

**You should always use `sizeof` with `malloc` to improve portability and to improve communication.**

Seashell will allow

```C
int *my_array = malloc(400);
```

instead of

```C
int *my_array = malloc(100 * sizeof(int));
```

but the latter is much better style and is more portable.

>Strictly speaking, the type of the `malloc` parameter is `size_t`,
which is a special type produced by the `sizeof` operator.
`size_t` and `int` are different types of integers.
Seashell is mostly forgiving, but in other C environments using
an int when C expects a `size_t` may generate a warning.
The proper `printf` placeholder to print a `size_t` is `%zd`.

>The declaration for the malloc function is:
`void *malloc(size_t s);`
The return type is a `(void *)` (void pointer), a special pointer
that can point at any type.
`int *pi = malloc(sizeof(int));`
`struct posn *pp = malloc(sizeof(struct posn));`

An unsuccessful call of `malloc` returns `NULL`.

In practice it's good style to check every `malloc` return value and gracefully handle a `NULL` instead of crashing.

```C
int *my_array = malloc(n * sizeof(int));
if (my_array == NULL) {
	printf(""Sorry dude, I'm out of memory! I'm exiting....\n");
	exit(EXIT_FAILURE);
}
```

In the "real world" you should always perform this check, but in this course, you do not have to check a `NULL` return value unless instructed otherwise.

The heap memory proved by `malloc` is **uninitialized**.

```C
int *p = malloc(sizeof(int));
printf("the mystery value is: %d\n", *p);
```

Although `malloc` is very complicated, for the purposes of this course, you can assume that `malloc` is $O(1)$.

>There is also a `calloc` function which essentially calls `malloc` and then "initialize" the memory by filling it with zeros. `calloc` is $O(n)$, where $n$ is the size of the block.

#### free

For every block of memory obtained through `malloc`, you must eventually `free` the memory (when the memory is no longer in use).

```C
// free(p) returns memory at a p back to the heap
// requiresL p must be from a previous malloc
// effects: the memory at p is invalid
// time: $O(1)$
```

**In the Seashell environment, you must `free` every block**

```C
int *my_array = malloc(n * sizeof(int));
// ...
// ...
free(my_array);
```

#### Invalid after free

Once a block of memory is `free`, reading from or writing to that memory is invalid and may cause errors (or unpredictable results).

Similarly, it is invalid to `free` memory that was not returned by a `malloc` or that has already been `free`.

```C
int *p = malloc(sizeof(int));
free(p);
int k = *p; // INVALID
*p = 42; // INVALID
free(p); // INVALID
p = NULL; // GOOD STYLE
```

Pointer variables may still contain the address of the memory that was freed, so it is often good style to assign `NULL` to a freed pointer variable.

#### Memory leaks

A memory leak occurs when allocated memory is not eventually freed.

Programs that leak memory may suffer degraded performance or eventually crash.

```C
int *ptr;
ptr = malloc(sizeof(int));
ptr = malloc(sizeof(int)); // memory leak!
```

In this example, the address from the original `malloc` has been overwritten.

That memory is now "lost" (or leaked) and so it can never by freed.

#### Garbage collection

Many modern languages (including Racket) have a **garbage collector**.

A garbage collector **detects** when memory is no longer in use and **automatically** frees memory and returns it to the heap.

One disadvantage of a garbage collector is that it can be slow and affect performance, which is a concern in high performance computing.

#### Merge sort

In section 09 we saw a Racket implementation of the divide and conquer algorithm **merge sort** that is $O(n\logn)$.

In merge sort, the data is split into two smaller groups. After each smaller group is sorted, they are merged together.

To simplify our C implementation, we will use a `merge` helper function.

```C
// merge(dest, src1, len1, src2, len2) modifies dest to contain
//	the elements from both src1 and src2 in sorted order
// requires: length of dest is at least (len1 + len2)
//			 src1 and src2 are sorted
// effects: modifies dest
// time: O(n), where n is len1 + len2

void merge(int dest[], const int src1[], int len1, const int src2[], int len2) {
	int pos1 = 0;
	int pos2 = 0;
	for (int i = 0; i < len1 + len2; ++i) {
		if (pos1 == len1 || (pos2 < len2 && src2[pos2] < src1[pos1])) {
			dest[i] = src2[pos2];
			++pos2;
		} else {
			dest[i] = src1[pos1];
			++pos1;
		}
	}
}

void merge_sort(int a[], int len) {
	if (len <= 1) return;
	int llen = len / 2;
	int rlen = len - llen;

	int *left = malloc(llen * sizeof(int));
	int *right = malloc(rlen * sizeof(int));

	for (int i = 0; i < llen; ++i) left[i] = a[i];
	for (int i = 0; i < rlen; ++i) right[i] = a[i + llen];

	merge_sort(left, llen);
	merge_sort(right, rlen);

	merge(a, left, llen, right, rlen);

	free(left);
	free(right);
}
```

#### Duration
Using dynamic (heap) memory, a function can obtain memory that **persists** after the function has returned.

```C
// build_array(n) returns a new array initialized with
// values a[0] = 0, a[1] = 1, ... a[n-1] = n-1
// effects: allocates a heap array (caller must free)
int *build_array(int len) {
	assert(len > 0);
	int *a = malloc(len * sizeof(int));
	for (int i=0; i < len; ++i) {
		a[i] = i;
	}
	return a; // array exists beyond function return
}
```

The caller (client) is responsible for freeing the memory (the contract should communicate this).

The `<string.h>` function `strdup` makes a duplicate of a string.

```C
// my_strdup(s) makes a duplicate of s
// effects: allocates memory (caller must free)
char *my_strdup(const char *s) {
	char *newstr = malloc((strlen(s) + 1) * sizeof(char));
	strcpy(newstr, s);
	return newstr;
}
```

Recall that the `strcpy(dest, src)` copies the characters from `src` to `dest`, and the `dest` array must be large enough.

When allocating memory for strings, don't forget to the include space for the null terminator.

#### Resizing arrays

Because `malloc` requires the size of the block of memory to be allocated, it does not seem to solve the problem:

"What if we do not know the length of an array in advance?"

To solve this problem, we can **resize** an array by:
*	creating a new array
*	copying the items from the old to the new array
*	free the old array

#### realloc

To make resizing arrays easier, there is a `realloc` function.

```C
// realloc(p, newsize) resizes the memory block at p
// 	to be newsize and returns a pointer to the
// 	new location, or NULL if unsuccessful
// requires: p must be from a previous malloc/realloc
// effects: the memory at p is invalid (freed)
// time: O(n), where n is newsize
```

Similar to our previous example, `realloc` preserves the contents from the old array location.

```C
int *my_array = malloc(100 * sizeof(int));
// stuff happens
my_array = realloc(my_array, 101 * sizeof(int));
```

The pointer returned by `realloc` may actually be the original pointer, depending on the circumstances.

Regardless, after `realloc` **only the new returned pointer can be used**. You should assume that the parameter of `realloc` was freed and is not invalid.

Typically, `realloc` is used to request a larger size and the additional memory is uninitialized.

If the size is smaller, the extraneous memory is discarded.

>`realloc(NULL, s)` behaves the same as `malloc(s)`.
`realloc(ptr, 0)` behaves the same as `free(ptr)`.

#### String I/O: strings of unknown size

