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

use `for in` to loop through an object:

```js
var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o) {
    alert(key); // 'name', 'age', 'city'
}
```

to filter out inherited properties:

```js
var o = {
    name: 'Jack',
    age: 20,
    city: 'Beijing'
};
for (var key in o) {
    if (o.hasOwnProperty(key)) {
        alert(key); // 'name', 'age', 'city'
    }
}
```

use `for in` to loop through an array:

```js
var a = ['A', 'B', 'C'];
for (var i in a) {
    alert(i); // '0', '1', '2'
    alert(a[i]); // 'A', 'B', 'C'
}
```

**note** use `for in` for an array, you get `String`, not `Number`

---

use `Map`

```js
var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
m.get('Michael'); // 95
```

`Map` has the following methods:

```js
var m = new Map(); // empty map
m.set('Adam', 67); // add a new key-value pair
m.set('Bob', 59);
m.has('Adam'); // true, m has 'Adam'
m.get('Adam'); // 67
m.delete('Adam'); // remove key-value pair
m.get('Adam'); // undefined
```

Since one key only pairs with one value, if you set multiple values for the same key, subsequent values will replace the previous ones.

```js
var m = new Map();
m.set('Adam', 67);
m.set('Adam', 88);
m.get('Adam'); // 88
```

---

use `Set`.

```js
var s1 = new Set(); // empty Set
var s2 = new Set([1, 2, 3]); // contains 1, 2, 3
```

duplicated elements will be removed:

```js
var s = new Set([1, 2, 3, 3, '3']);
s; // Set {1, 2, 3, "3"}
```

use `add(key)` to add elements to `Set`, and use `delete(key)` to delete elements.

---

ES6 uses a new standard `iterable`. `Map`, `Set` and `Array` are all `iterable`. `iterable` can use `for of` to loop through.

```js
var a = ['A', 'B', 'C'];
var s = new Set(['A', 'B', 'C']);
var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
for (var x of a) { // loop through Array
    alert(x);
}
for (var x of s) { // loop through Set
    alert(x);
}
for (var x of m) { // loop through Map
    alert(x[0] + '=' + x[1]);
}
```

`for in` vs `for of`? For example, `Array` is also an object and so:

```js
var a = ['A', 'B', 'C'];
a.name = 'Hello';
for (var x in a) {
    alert(x); // '0', '1', '2', 'name'
}
```

which includes the indexes and the `name` property. `for of` fixes this problem as it only loop through the elements/values.

---

Use `forEach(callback)` for `iterable`:

```js
var a = ['A', 'B', 'C'];
a.forEach(function (element, index, array) {
    // element: current element
    // index: current index
    // array: the array itself
    alert(element);
});

var s = new Set(['A', 'B', 'C']);
s.forEach(function (element, sameElement, set) {
    alert(element);
});

var m = new Map([[1, 'x'], [2, 'y'], [3, 'z']]);
m.forEach(function (value, key, map) {
    alert(value);
});
```

If you are uninterested in some parameters, you may omit them:

```js
var a = ['A', 'B', 'C'];
a.forEach(function (element) {
    alert(element);
});
```

---

You can pass any numbers of parameters to a function:

```js
var abs = function (x) {
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}

abs(10); // returns 10
abs(10, 'blablabla'); // returns 10
abs(); // returns NaN, the x in the function body will be undefined
```

check for `undefined` in a function:

```js
function abs(x) {
    if (typeof x !== 'number') {
        throw 'Not a number';
    }
    if (x >= 0) {
        return x;
    } else {
        return -x;
    }
}
```

---

JavaScript provides `arguments` in a function, it works like an array but not an array.

```js
function foo(x) {
    alert(x); // 10
    for (var i=0; i<arguments.length; i++) {
        alert(arguments[i]); // 10, 20, 30
    }
}
foo(10, 20, 30);
```

Use `arguments`, you get all the arguments without parameters:

```js
function abs() {
    if (arguments.length === 0) {
        return 0;
    }
    var x = arguments[0];
    return x >= 0 ? x : -x;
}

abs(); // 0
abs(10); // 10
abs(-9); // 9
```

Usually, use `arguments` to check the number of parameters passed in.

```js
// foo(a[, b], c)
// receive 2 or 3 parameters, if only 2, make b null
function foo(a, b, c) {
    if (arguments.length === 2) {
        // only got a and b, c is undefined
        c = b;
        b = null;
    }
}
```

---

Use `rest`:

```js
function foo(a, b) {
    var i, rest = [];
    if (arguments.length > 2) {
        for (i = 2; i<arguments.length; i++) {
            rest.push(arguments[i]);
        }
    }
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

// can be rewritten as

function foo(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

foo(1, 2, 3, 4, 5);
// a = 1
// b = 2
// Array [ 3, 4, 5 ]

foo(1);
// a = 1
// b = undefined
// Array []
```

`rest` must be the last parameter, and use `...` to identify. Parameters will bond with `a` and `b` first and fill `rest` with the rest of parameters. If parameters are not enough, `rest` will be an empty array (**note** not `undefined`).

---

JavaScript adds `;` after `return` and so:

```js
function foo() {
    return { name: 'foo' };
}
foo(); // { name: 'foo' }

function foo() {
    return
        { name: 'foo' };
}
foo(); // undefined
```

the above code is translated to

```js
function foo() {
    return;
        { name: 'foo' };
}
```

this is correct form:

```js
function foo() {
    return { 
        name: 'foo'
    };
}
```

---

Variable naming overlap in a function:


```js
function foo() {
    var x = 1;
    function bar() {
        var x = 'A';
        alert('x in bar() = ' + x); // 'A'
    }
    alert('x in foo() = ' + x); // 1
    bar();
}
```

---

```js
'use strict';

function foo() {
    var x = 'Hello, ' + y;
    alert(x); // Hello, undefined
    var y = 'Bob';
}

foo();
```

JavaScript raises the declaration of a variable but not its initiation. Even with `use strict` and `y` is declared after `x`, `var x = 'Hello, ' + y;` does not dive an error, but `alert(x);` gives `undefined`.

The above function is equivalent to:

```js
function foo() {
    var y; // raises y's declaration
    var x = 'Hello, ' + y;
    alert(x);
    y = 'Bob';
}
```

Usually, declare all the variables first:


```js
function foo() {
    var
        x = 1, // x init 1
        y = x + 1, // y init 2
        z, i; // z & i are undefined
    // other stuff
    for (i=0; i<100; i++) {
        ...
    }
}
```

---

All variables not in a function is in global scope. JavaScript has a `window` object, and all global variables are properties of `window`.

```js
var course = 'Learn JavaScript';
alert(course); // 'Learn JavaScript'
alert(window.course); // 'Learn JavaScript'

function foo() {
    alert('foo');
}
foo(); // call foo() directly
window.foo(); // call foo() via window
```

Since JavaScript only has one global variable `window`, and so if two variables have the same name, it will cause trouble. To avoid this, only define one global variable and binds all others as its properties.

```js
// only global variable
var MYAPP = {};

// other variables:
MYAPP.name = 'myapp';
MYAPP.version = 1.0;

// other functions:
MYAPP.foo = function () {
    return 'foo';
};
```

---

There is no local scope:

```js
function foo() {
    for (var i=0; i<100; i++) {
        //
    }
    i += 100; // can still use i
}
```

Use `let` to replace `var` to create local scope:

```js
function foo() {
    var sum = 0;
    for (let i=0; i<100; i++) {
        sum += i;
    }
    i += 1; // SyntaxError
}
```

---

Use `const` to define a constant:

```js
const PI = 3.14;
PI = 3; // some browsers donit support but don't give an error
PI; // 3.14
```

---

In a method, `this` is a special variable. It always points to the current object.

```js
var xiaoming = {
    name: 'xiaoming',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};

xiaoming.age; // function xiaoming.age()
xiaoming.age(); // 26 this year
```

If we separate them:

```js
function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: 'xiaoming',
    birth: 1990,
    age: getAge
};

xiaoming.age(); // 26
getAge(); // NaN
```

Why `Nan`? If you use `this`, what does `this` point to? If we call `xiaoming.age()`, `this` is `xiaoming`, and the result meets expectation. If we call `age()` directly, `this` will be the global object, a.k.a. `window`.

Also, if you write this way:

```js
var fn = xiaoming.age; // get xiaoming's age method
fn(); // NaN
```

Still does not work. To guarantee `this` points to the right object, methods must be invoked in the form of `obj.xxx()`.

Because of this big designing mistake, ECMA decides that under `use strict` mode, `this` in a function will be `undefined` and so you will receive an error.

```js
'use strict';

var xiaoming = {
    name: 'xiaoming',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};
var fn = xiaoming.age;
fn(); // Uncaught TypeError: Cannot read property 'birth' of undefined
```

```js
'use strict';

var xiaoming = {
    name: 'xiaoming',
    birth: 1990,
    age: function () {
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - this.birth;
        }
        return getAgeFromBirth();
    }
};

xiaoming.age(); // Uncaught TypeError: Cannot read property 'birth' of undefined
```

Will receive an error. Since the inner function's `this` is `undefined`, we can use capture `this` first:

```js
'use strict';

var xiaoming = {
    name: 'xiaoming',
    birth: 1990,
    age: function () {
        var that = this; // capture this
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - that.birth; // use that instead of this
        }
        return getAgeFromBirth();
    }
};

xiaoming.age(); // 26
```

---

We can redirect `this` with `apply`.

```js
function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: 'xiaoming',
    birth: 1990,
    age: getAge
};

xiaoming.age(); // 26
getAge.apply(xiaoming, []); // 26, this points to xiaoming, and parameters are empty
```

Another similar function is `call()`. `apply()` put parameters in an array, and `call()` does not.

```js
Math.max.apply(null, [3, 5, 4]); // 5
Math.max.call(null, 3, 5, 4); // 5
```

---

Use `apply()` to change dynamic function's behavior. Suppose we want to count the number of times the function `parseInt()` is called:

```js
var count = 0;
var oldParseInt = parseInt; // save the original function

window.parseInt = function () {
    count += 1;
    return oldParseInt.apply(null, arguments); // call the original function
};

// test:
parseInt('10');
parseInt('20');
parseInt('30');
count; // 3
```
---

High-order function. Pass a function to a function.

```js
function add(x, y, f) {
    return f(x) + f(y);
}
add(-5, 6, Math.abs); // 11
```

---

`map()` and `reduce()`

```js
function pow(x) {
    return x * x;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.map(pow); // [1, 4, 9, 16, 25, 36, 49, 64, 81]
```

```
[x1,x2,x3,x4].reduce(f) = f(f(f(x1,x2),x3),x4)
```

```js
var arr = [1, 3, 5, 7, 9];
arr.reduce(function (x, y) {
    return x * 10 + y;
}); // 13579
```

---

`filter()`

```js
var arr = [1, 2, 4, 5, 6, 9, 10, 15];
var r = arr.filter(function (x) {
    return x % 2 !== 0;
});
r; // [1, 5, 9, 15]
```

---

`sort()`

```js
['Google', 'Apple', 'Microsoft'].sort(); // ['Apple', 'Google', 'Microsoft'];

// apple is at the last
['Google', 'apple', 'Microsoft'].sort(); // ['Google', 'Microsoft", 'apple']

// convert to string and then sort
[10, 20, 1, 2].sort(); // [1, 10, 2, 20]
```

use callback to sort numbers:

```js
var arr = [10, 20, 1, 2];
arr.sort(function (x, y) {
    if (x < y) {
        return -1;
    }
    if (x > y) {
        return 1;
    }
    return 0;
}); // [1, 2, 10, 20]
```

sort ignore case:

```js
var arr = ['Google', 'apple', 'Microsoft'];
arr.sort(function (s1, s2) {
    x1 = s1.toUpperCase();
    x2 = s2.toUpperCase();
    if (x1 < x2) {
        return -1;
    }
    if (x1 > x2) {
        return 1;
    }
    return 0;
}); // ['apple', 'Google', 'Microsoft']
```

`sort()` will change the current array,

```js
var a1 = ['B', 'A', 'C'];
var a2 = a1.sort();
a1; // ['A', 'B', 'C']
a2; // ['A', 'B', 'C']
a1 === a2; // true, a1 & a2 are the object
```

---

**Closure**

```js
function lazy_sum(arr) {
    var sum = function () {
        return arr.reduce(function (x, y) {
            return x + y;
        });
    }
    return sum;
}
var f = lazy_sum([1, 2, 3, 4, 5]); // function sum()
f(); //15
```

`laze_sum()` will return a new function, even for same parameters:

```js
var f1 = lazy_sum([1, 2, 3, 4, 5]);
var f2 = lazy_sum([1, 2, 3, 4, 5]);
f1 === f2; // false
```

```js
function count() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        arr.push(function () {
            return i * i;
        });
    }
    return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];

f1(); // 16
f2(); // 16
f3(); // 16
```

Since `i` is 4 at the end of the loop, all reference to `i` will be 4. Use another function for loop in closure.

```js
function count() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        arr.push((function (n) {
            return function () {
                return n * n;
            }
        })(i));
    }
    return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];

f1(); // 1
f2(); // 4
f3(); // 9
```

Use closure to store "private" variables:

```js
function create_counter(initial) {
    var x = initial || 0;
    return {
        inc: function () {
            x += 1;
            return x;
        }
    }
}

var c1 = create_counter();
c1.inc(); // 1
c1.inc(); // 2
c1.inc(); // 3

var c2 = create_counter(10);
c2.inc(); // 11
c2.inc(); // 12
c2.inc(); // 13
```

---

Array function:

```js
x => x * x

function (x) {
    return x * x;
}
```

```js
// 2 parameters
(x, y) => x * x + y * y

// no parameters
() => 3.14

// any number of parameters
(x, y, ...rest) => {
    var i, sum = x + y;
    for (i=0; i<rest.length; i++) {
        sum += rest[i];
    }
    return sum;
}
```

If you wish to return an object:

```js
// SyntaxError:
x => { foo: x }

// ok:
x => ({ foo: x })
```


---

ends http://www.liaoxuefeng.com/wiki/001434446689867b27157e896e74d51a89c25cc8b43bdb3000/001435119854495d29b9b3d7028477a96ed74db95032675000

> **Reference:**
> http://www.liaoxuefeng.com/
