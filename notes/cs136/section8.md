[<- Go Back](http://tonyli.tk/)

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

