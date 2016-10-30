Because the flaw in JavaScript's design, always use `===` for comparison instead of `==`

---

`NaN` is special and not equal to any other numbers, including itself:

```js
NaN === NaN; // yields false
```

The only way is use `isNaN()` function:

```js
isNaN(NaN); // true
```

---

In the earlier stage of JavaScript, use of `var` isn't mandatory. This decision leads serious impacts: if a variable is used without `var` declaration, then this variable will be in the global scope.

```js
i = 10; // i is global variable
```

If a variable `i` is used in the same webpage but different JavaScript files, the `i` will be used across the files and is hard to debug.

---

Use `\n` for multi-line string is tedious. ES6 added a new standard for multi-line string:

```js
alert('this string
has
multiple lines');
```

---

To append multiple strings together, you can use string template:

```js
var name = "Bob";
var age = 19;
var msg = '${Bob} is ${age} years old`;
```

---

String is not mutate-able. If you try:

```js
var s = "test";
s[0] = 'x';
```

will not give errors or any effects to `s`

---

If you give an array's `length` a new value, it will affect the array's length:

```js
var arr = [1,2,3];
arr.length; // 3
arr.length = 6;
arr; // [1,2,3,undefined,undefined,undefined]
arr.length = 2;
arr; // [1,2]
```

---

When you assign a value to an index out of an array, the array's length will change:

```js
var arr = [1,2,3];
arr[5] = 'x';
arr; // [1,2,3,undefined,undefined,'x']
```

---

`push()` will push elements to the end of an array, and `pop()` will return the last element and delete it from the array;

```js
var arr = [1,2];
arr.push('a', 'b');
arr; //[1,2,'a','b']
```

Similarly, use `unshift()` to add elements to the beginning, and `shift()` to remove elements from the beginning:

```js
var arr = [1, 2];
arr.unshift('A', 'B'); // gives the array's length 4
arr; // ['A', 'B', 1, 2]
arr.shift(); // 'A'
arr; // ['B', 1, 2]
arr.shift(); arr.shift(); arr.shift(); // shift 3 times
arr; // []
arr.shift(); // empty array shift will give error but return undefined
arr; // []
```

---

`splice()` is a very powerful function to arrays: it delete some elements from a certain index, and add some at that index.

```js
var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
// delete 3 elements from index 2 and insert 2 element
arr.splice(2, 3, 'Google', 'Facebook'); // return the delete elements as an array ['Yahoo', 'AOL', 'Excite']
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
// just deletion
arr.splice(2, 2); // ['Google', 'Facebook']
arr; // ['Microsoft', 'Apple', 'Oracle']
// just addition
arr.splice(2, 0, 'Google', 'Facebook'); // return [] the empty array
arr; // ['Microsoft', 'Apple', 'Google', 'Facebook', 'Oracle']
```

---

`concat()` can accept any number of elements and arrays and add them all into array:

```js
var arr = ['a', 'b', 'c'];
arr.concat(1,2,[3,4]); // ['a','b','c',1,2,3,4]
```

---

`join()` joins all elements with a string:

```js
var arr = ['a', 'b', 'c', 1, 2, 3];
arr.join('-'); // 'a-b-c-1-2-3'
```

---

If an object has an invalid property name, you should quote with `''` and access with `[]`:

```js
var tom = {
  name: 'tom',
  'middle-school': 'No.1 Middle School'
};

tom.name; // 'tom'
tom['name']; // 'tom'
tom['middle-school'] // 'No.1 Middle School'
```

---

If you access a non-existing property, JavaScript gives `undefined` instead of error:

```js
var tom = {
  name: 'tom'
};

tom.age; // undefined
```

---

Because JavaScript is dynamically typed language, you can add or delete a property of an object:

```js
var tom = {
  name: 'tom'
};

tom.age; // undefined
tom.age = 18; // added a new age property
tom.age; // 18
delete tom.age; // deleted age property
tom.age; // undefined
delete tom.age; // delete a non-existing has no effects
```

---

If you would check if a property exist:

```js
var tom = {
  name: 'tom',
  age: '18'
};

'name' in tom; // true
'school' in tom; // false
```

---

Be careful, inherited properties may exist even if you did not declare:

```js
'toString' in tom; // true
```

Because `toString` is defined in `object` and so does `tom`

---

To check if an object itself has a property that is not inherited, use `hasOwnProperty()`

```js
var tom = {
  name: 'tom'
};

tom.hasOwnProperty('name'); // true
tom.hasOwnProperty('toString'); // false
```

---
