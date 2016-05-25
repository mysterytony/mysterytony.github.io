# Section 8: Arrays & Strings

#### Arrays

C only has two built-in types of "compound" data storage:
*	structures
*	arrays

```C
int my_array[6] = {4,8,15,16,23,42};
```

An arrays is a data structure that contains a **fixed number** of elements that all have the **same type**.

**Because arrays are built-in to C, they are used for many tasks where lists are used in Racket, but arrays and lists are very different.**

To define an array we must know the **length** of the array **in advance**.

Each individual value in the array is known as an **element**. To access an element, its **index** is required.

The first element of `my_array` is at index `0`, and it is written as `my_array[0]`.

The second element is `my_array[1]` and the last is `my_array[5]`.

**In computer science we often start counting at 0.**

#### Array Initialization

Arrays can only be initialized with braces (`{}`).

```C
int a[6] = {4, 8, 15, 16, 23, 42};

a = {0, 0, 0, 0, 0, 0}; // INVALID 
a = ??? ; // INVALID
```

Once defined, the entire array cannot be assigned to at once.

Each individual element must be mutated.

```C
for (int i=0; i < 6; ++i) {
	a[i] = 0; 
}
```

Like variables, the value of an uninitialized array depends on the scope of the array: 

```C
int a[5];
```

*	uninitialized global arrays are zero-filled. 
*	 uninitialized local arrays are filled with arbitrary (“garbage”) values from the stack.

If there are not enough elements in the braces, the remaining values are initialized to zero (even with local arrays).

```C
int b[5] = {1, 2, 3}; // b[3] & b[4] = 0 
int c[5] = {0}; // c[0]...c[4] = 0
```

If an array is initialized, the length of the array can be omitted from the declaration and automatically determined from the number of elements in the initialization.

```C
int a[] = {4, 8, 15, 16, 23, 42}; // int a[6] = ...
```

This syntax is only allowed if the array is initialized.

```C
int b[]; // INVALID
```

#### Array size

The **length** of an array is the number of elements in the array.

The **size** of an array is the number of bytes it occupies in memory.

An array of $k$ elements, each of size $s$, requires exactly $k\times s$ bytes.

In the C memory array elements are adjacent to each other. Each element of an array is placed in memory immediately after the previous element.

If `a` is an integer array with six elements (`int a[6]`) the size of `a` is: $6\times 4 = 24$.

#### Array length

C does not explicitly keep track of the array **length** as part of the array data structure.

**You must keep track of the array length separately.**

Typically, the array length is stored in a separate variable.

```C
const int a_length = 6; 
int a[a_length] = {4, 8, 15, 16, 23, 42};
```

#### The array identifier

The **value** of an array (`a`) is the same as the **address** of the array (`&a`), which is also the address of the first element (`&a[0]`).

```C
int a[] = {4, 8, 15, 16, 23, 42};
printf("%p %p %p\n", a, &a, &a[0]);
printf("%d %d\n", a[0], *a);

0x5000 0x5000 0x5000 
4 4
```

Dereferencing the array (`*a`) is equivalent to referencing the first element (`a[0]`).

#### Passing arrays to functions

When an array is passed to a function only the **address** of the array is copied into the stack frame. This is more efficient than copying the entire array to the stack.

Typically, the length of the array is unknown, and is provided as a separate parameter.

As we have seen before, passing an address to a function allows the function to change (mutate) the contents at that address.

```C
void array_add1(int a[], int len) {
	for (int i = 0; i < len; ++i) { 
		++a[i];
	}
}
```

It's good style to use the `const` keyword to prevent mutation and communicate that no mutation occurs.

```C
int sum_array(const int a[], int len) {
	int sum = 0;
	for (int i = 0; i < len; ++i) {
		sum += a[i];
	}
	return sum;
}
```

#### Pointer arithmetic

We have not yet discussed any **pointer arithmetic**.

C allows an integer to be added to a pointer, but the result may not be what you expect.

If `p` is a pointer, the value of (`p+1`) **depends on the type** of the pointer `p`.

`(p+1)` adds the `sizeof` whatever `p` points at.

#### Pointer arithmetic rules

*	When adding an integer `i` to a pointer `p`, the address computed by `(p+i)` in C is given in "normal" arithmetic by:
$$p+i\times sizeof(*p)$$
*	Subtracting an integer from a pointer `(p-i)` works in the same way.
*	Mutable pointers can be incremented (or decremented). `++p` is equivalent to `p = p + 1`.
*	You can subtract a pointer `q` from another pointer `p` if the pointers are the same type (point to the same type). The value of `(p-q)` in C is given in "normal" arithmetic by:
$$(p-q)/sizeof(*p)$$
In other words, if `p=q+i` then `i=p-q`.
*	Pointers (of the same type) can be compared with the comparison operator: `<, <=, ==, !=, >=, >`

#### Pointer arithmetic and arrays

Pointer arithmetic is useful working with **arrays**.

Recall that for an array `a`, the value of `a` is the address of the first element (`&a[0]`).

Using pointer arithmetic, the address of the second element `&a[1]` is `(a+1)`, and it can be references as `*(a+1)`.

**The array indexing syntax [] is an operator that performs pointer arithmetic. `a[i]` is equivalent to `*(a+i)`**

In **array pointer notation**, square brackets `[]` are not used, and all array elements are accessed through pointer arithmetic.

```C
int sum_array(const int *a, int len) {
	int sum = 0; 
	for (const int *p = a; p < a + len; ++p) {
		sum += *p;
	}
	return sum;
}
```

Note that the above code behaves identically to the previously defined `sum_array`:

```C
int sum_array(const int a[], int len) {
	int sum = 0;
	for (int i = 0; i < len; ++i) { 
		sum += a[i];
	}
	return sum;
}

```

The choice of notation (pointers or []) is a matter of style and context. You are expected to be comfortable with both.

C makes no distinction between the following two function declarations:

```C
int array_function(int a[], int len) {...} // a[] 
int array_function(int *a, int len) {...} // *a
```

In most contexts, there is no practical difference between an array identifier and a (constant) pointer.

#### Array map

Aside from the function pointer parameter syntax, the definition of `array_map` is straightforward.

```C
// effects: replaces each element a[i] with f(a[i])
void array_map(int (*f)(int), int a[], int len) {
	for (int i=0; i < len; ++i) {
		a[i] = f(a[i]);
	}
}
```

#### Selection sort

In **selection sort**, the smallest element is selected to be the first element in the new sorted sequence, and then the next smallest element is selected to be the second element, and so on.

```C
void selection_sort(int a[], int len) {
	for (int i=0; i < len - 1; ++i) {
		int pos = i;
		for (int j = i + 1; j < len; ++j) {
			if (a[j] < a[pos]) {
				pos = j;
			}
		}
		swap(&a[i], &a[pos]); // see Section 05
	}
}
// Notes:
// i: loops from 0 ... len-2 and represents the
// "next" element to be replaced
// j: loops from i+1 ... len-1 and is "searching"
// for the next smallest element
// pos: position of the "next smallest"
```

#### Quicksort

Quicksort is an example of a "divide & conquer" algorithm.

First, an element is selected as a "pivot" element.

The list is then **partitioned** (divided) into two sub-groups: elements less than (or equal to) the pivot and those greater then the pivot.

Finally, each sub-group is then sorted (conquered).

In our C implementation of quick sort, we:

*	select the first element of the array as our "pivot"
*	move all elements that are larger than the pivot to the back of the array
*	move ("swap") the pivot into the correct position
*	recursively sort the "smaller than" sub-array and the "larger then" sub-array

The core quick sort function `quick_sort_range` has parameters for the range of elements (`first` and `last`) to be sorted, so a wrapper function is quired.

```C
void quick_sort_range(int a[], int first, int last) {
	if (last <= first) return; // length is <= 1
	int pivot = a[first]; // first element is the pivot
	int pos = last; // where to put next larger
	for (int i = last; i > first; --i) {
		if (a[i] > pivot) {
			swap(&a[pos], &a[i]);
			--pos;
		}
	}
	swap(&a[first], &a[pos]); // put pivot in correct place
	quick_sort_range(a, first, pos-1);
	quick_sort_range(a, pos+1, last);
}
void quick_sort(int a[], int len) {
	quick_sort_range(a, 0, len-1);
}
```

#### Binary search

In Racket, the built-in function `member` can be used to determine if a list contains an element.

We can write a similar function in C that finds the index of an element in an array:

```C
// find(item, a, len) finds the index of item in a,
// or -1 if it does not exist
int find(int item, const int a[], int len) {
	for (int i=0; i < len; ++i) {
		if (a[i] == item) {
			return i;
		}
	}
	return -1;
}
```

But what if the array was previously sorted?

We can use **binary search** to find the element faster:

```C
int find_sorted(int item, const int a[], int len) {
	int low = 0;
	int high = len-1;
	while (low <= high) {
		int mid = low + (high - low) / 2;
		if (a[mid] == item) {
			return mid;
		} else if (a[mid] < item) {
			low = mid + 1;
		} else {
			high = mid - 1;
		}
	}
	return -1;
}
```

#### Multi-dimensional data

All of the arrays seen so far have been one-dimensional arrays.

We can represent multi-dimensional data by "mapping" the higher dimensions done to one.

For example, consider a 2D array with 2 rows and 3 columns.

```
1 2 3
7 8 9
```

We can represent the data in a simple one-dimensional array.

```C
int data[6] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
```

To access the entry in row `r` and column `c`, we simply access the element at `data[r*3+c]`.

In general, it would be `data[row * NUMCOLS + col]`.

#### Fixed-Length arrays

A significant limitation of an array is that you need to know the length of the array **in advance**.

In some applications, it may be "appropriate" to have a **maximum length** for an array.

In general, maximums should only be used when appropriate:

*	They are wasteful if the maximum is excessively large
*	They are restrictive if the maximum is too small.

When working with maximum-length arrays, we need to keep track if 

*	the "actual" length of the array, and
*	the maximum possible length.

To illustrate fixed-length arrays, we will implement an integer **stack** structure with a maximum length of 100 elements.

The `len` field will keep track of the actual length of the stack.

```C
struct stack {
	int len;
	int maxlen;
	int data[100];
};
```

We will need to provide a `stack_init` function to initialize the structure:

```C
void stack_init(struct stack *s) {
	assert(s);
	s->len = 0;
	s->maxlen = 100;
}
```

Ignoring the `push` operation for now, we can write the rest of the stack implementation:

```C
bool stack_is_empty(const struct stack *s) {
	assert(s);
	return s->len == 0;
}

int stack_top(const struct stack *s) {
	assert(s);
	assert(s->len);
	return s->data[s->len - 1];
}

// note: stack_pop returns the element popped
int stack_pop(struct stack *s) {
	assert(s);
	assert(s->len);
	s->len -= 1;
	return s->data[s->len];
}
```
What happens if we exceed the maximum length when we try to `push` an element?

There are a few possibilities:

*	the stack is not modified and an error message is displayed
*	a special return value can be used
*	an assertion fails (terminating the program)
*	the program explicitly **terminates** with an error message

Any approach may be appropriate as long as the contract properly documents the behavior.

The `exit` function (part of `<stdlib.h>`) stops program execution. It is useful for "fatal" errors.

The argument passed to `exit` is equivalent to the `return` value of `main`.

For convenience, `<stdlib.h>` defines `EXIT_SUCCESS(0)` and `EXIT_FAILURE` (non-zero).

```C
if (something_bad) {
	printf("FATAL ERROR: Something bad happened!\n");
	exit(EXIT_FAILURE);
}
```

```C
// stack_push(item, s) pushes item onto stack s
// requires: s is a valid stack
// effects: modifies s
// if max stack size is exceeded,
// prints a message and exits
void stack_push(int item, struct stack *s) {
	assert(s);
	if (s->len == s->maxlen) {
		printf("FATAL ERROR: max stack size (%d) exceeded\n"
		,
		s->maxlen);
		exit(EXIT_FAILURE);
	}
	s->data[s->len] = item;
	s->len += 1;
}
```

#### Strings

There is no built-in C **string** type. The "convention" is that a C string is an **array of characters**, terminated by a **null character**.

```C
char my_string[4] = {'c', 'a', 't', '\0'};
```

The null character, also known as a null **terminator**, is a `char` with a value of zero. It is often written as `'\0'` instead of 0 to improve communication and indicate that a null character is intended.

**`'\0'` (ASCII 0) is different than '0' (ASCII 48), which is the character for the symbol zero.**

#### String initialization

`char` arrays also support a double quote (") **initialization** syntax. When combined with the automatic length declaration ([]), the length includes the null terminator.

The following definitions create equivalent 4-character arrays:

```C
char a[] = {'c', 'a', 't', '\0'};
char b[] = {'c', 'a', 't', 0};
char c[4] = {'c', 'a', 't'};
char d[] = {99, 97, 116, 0};
char e[4] = "cat";
char f[] = "cat";
```

This array **initialization** notation is different than the double quote notation used in expressions (e.g., in `printf("string")`).

#### Null termination

With null terminated strings, we do not have to pass the length to every function. It can be automatically determined.

```C
// e_count(s) counts the # of e's and E's in string s
int e_count(const char s[]) {
	int count = 0;
	int i = 0;
	while (s[i]) { // not the null terminator
		if ((s[i] == 'e')||(s[i] == 'E')) {
			++count;
		}
		++i;
	}
	return count;
}
```

As with "regular" arrays, it is good style to have `const` parameters to communicate that no changes (mutation) occurs to the string.

#### strlen

The `string` library (`#include <string.h>`) provides many useful functions for processing strings.

The `strlen` function returns the length of the string, not necessarily the length of the array. It does not include the null character.

#### Lexicographical order

Characters can be easily compared (`c1<c2`) as they are numbers, so the character **order** is determined by the ASCII table.

If we try to compare two strings (`s1<s2`), C compares their pointers, which is not helpful.

To compare strings we are typically interested in using a **lexicographical order**.

To compare two strings using a **lexicographical order**, we first compare the first character of each string. If they are different, the string with the smaller first character **precedes** the other string. Otherwise (the first characters are the same), the second characters are compared, and so on.

If the end of one string is encountered, it **precedes** the other string. Two strings are equal (the same) if they are the same length and all of their characters are identical.

The following strings are in lexicographical order:

```C
"" "a" "az" "c" "cab" "cabin" "cat" "catastrophe"
```

The `<string.h>` library function `strcmp` uses lexicographical ordering.

`strcmp(s1, s2)` returns zero if the strings are identical. If `s1` precedes `s2`, it returns a negative integer. Otherwise (`s1` follows `s2`) it returns a positive integer.

To compare if two strings are equal, use the `strcmp` function.

The equality operator (==) only compares the addresses of the strings, and not the contents of the arrays.

Lexicographical orders can be used to compare and sort any sequence of elements (array, lists, ...) and not just strings.

#### String I/O

The `printf` placeholder for strings is `%s`.

```C
char a[] = "cat";
printf("the %s in the hat\n", a);
```

`printf` prints out characters until the null character is encountered.

When using `%s` with `scanf`, it stops reading the string when a "white space" character is encountered (e.g., a space or \n).

`scanf("%s")` is useful for reading in one "word" at a time.

```C
char name[81];
printf("What is your first name?\n");
scanf("%s", name);
```

You must be very careful to reserve enough space for the string to be read in, and do not forget the null character.

In this banking example, entering a long command causes C to write characters beyond the length of the `command` array. Eventually, it overwrites the memory where `balance` is stored.

This is known as a **buffer overrun** (or buffer overflow). The C language is especially susceptible to buffer overruns, which can cause serious stability and security problems.

In this introductory course, having an array with an appropriate length and using `scanf` if "good enough".

In practice you would never use this insecure method for reading in a string.

Two additional `<string.h>` library functions that are useful, but susceptible to buffer overruns are:

`strcpy(char *dest, const char *src)` overwrites the contents of `dest` with the contents of `src`.

`strcat(char *dest, const char *src)` copies (appends or concatenates) `src` to the end of `dest`.

You should always ensure that the `dest` array is large enough (and don't forget the null terminator).

While writing to a buffer can cause dangerous buffer overruns, reading an improperly terminated string can also cause problems.

```C
char c[3] = "cat"; // NOT properly terminated!
printf("%s\n", c);
printf("The length of c is: %d\n", strlen(c));
cat???????????????????
The length of c is: ??
```

#### String literals

The C strings used in statements (e.g. with `printf` and `scanf`) are known as **string literals**.

```C
printf("i = %d\n", i);
printf("the value of j is %d\n", j);
```

For each string literal, a null-terminated `const char` array is created in the read-only data section.

In the code, the occurrence of the string literal is replaced with address of the corresponding array.

```C
void foo(int i, int j) {
	printf("i = %d\n", i);
	printf("the value of j is %d\n", j);
}
```

Although no array name is actually given to each literal, it is helpful to imagine that one is:

```C
const char foo_string_literal_1[] = "i = %d\n";
const char foo_string_literal_2[] = "the value of j is %d\n";

void foo(int i, int j) {
	printf(foo_string_literal_1, i);
	printf(foo_string_literal_2, j);
}
```

You should not try to modify a string literal. The behavior is undefined, and it causes an error in Seashell.

#### Arrays vs. pointers

Earlier, we said arrays and pointers are similar but **different**.

Consider the following two string definitions:

```C
void f(void) {
char a[] = "pointers are not arrays";
char *p = "pointers are not arrays";
...
}
```

*	The first reserves space for an initialized 24 character array (a) in the stack frame (24 bytes)
*	The second reserves space for a `char` pointer (p) in the stack frame (8 bytes), initialized to point at a string literal `(const char array)` created in the read-only data section.

```C
char a[] = "pointers are not arrays";
char *p = "pointers are not arrays";
char d[] = "different string";
```

`a` is a `char` array. The identifier a has a constant value (the address of the array), but the elements of a can be changed.

```C
a = d; // INVALID
a[0] = 'P'; // VALID
```

`p` is a `char` pointer. `p` is initialized to point at a string literal, but `p` can be changed to point at any char.

```C
p[0] = 'P'; // INVALID (p points at a const literal)
p = d; // VALID
p[0] = 'D'; // NOW VALID (p points at d)
```
#### Goals of this section

At the end of this section, you should be able to:

*	define and initialize arrays and strings
*	use iteration to loop through arrays
*	use pointer arithmetic
*	explain how arrays are represented in the memory model, and how the array index operator [] uses pointer arithmetic to access array elements in constant time
*	use both array index notation [] and array pointer notation and convert between the two
*	use fixed-length arrays
*	describe insertion sort, quicksort and binary search on a sorted array
*	represent multi-dimensional data in a single-dimensional array
*	explain and demonstrate the use of the null termination convention on strings
*	explain string literals and the difference between defining a string array and a string pointer
*	sort a string or sequence lexicographically
*	use I/O with strings and explain the consequences of buffer overruns
*	use `<string.h>` library functions (when provided with a well documented interface)

