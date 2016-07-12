# CS 246 Brad Lushman Lecture Notes

## Lecture 1

Brad Lushman, DC 3110, bmlushma@uwaterloo.ca

Software:
*	putty.exe
*	winscp
*	xming for xwindows
*	cygwin: Linux-like environment for Windows

Modules:
*	Linux shell
*	C++
*	Tools
*	Software Engineering

### Module 1 - Linux Shell
### Shell - interface to OS - get the OS to do things, e.g. run programs, manage files
*	graphical (click with mouse/touch interface)
*	command-line (type commands at a prompt, more versatile)

This course - sh (command line)

type `echo $0` should output `-sh`

Linux File System
*	command `cat`: displays the contents of a file
	*	e.g.: `cat /usr/share/dict/words
*	`^c` to stop (ctrl-c)
*	`ls` list files in current dir (non-hidden files)
*	`ls -a` all files including hidden
*	hidden files start with `.`
*	`pwd` prints the current directory

what if you just type `cat`? nothing happens, `cat` is waiting for input

```sh
cat
some words
some words
```

it prints everything you have typed

maybe useful if we can capture the output files

`cat > output.txt`

`^D` to stop: ^D at the beginning of a line, it sends end-of-file (EOF) signal to cat

In general: `command args > ` executes command args & captures the output in file instead of sending to screen, it is called output redirection

can also redirect input: `cat < inputfile.txt`
*	takes input from inputfile.txt instead of the keyboard
*	displays contents of inputfile.txt
*	seems equivalent to `cat inputfile.txt`

what's the difference? **(important)**

`cat inputfile.txt`
*	passes the name `inputfile.txt` as an argument to cat. cat opens the file
*	opens the file inputfile.txt and displays its contents

`cat < inputfile.txt`
*	the shell opens the file and passes its contents to cat in place of the keyboard

`wc output.txt` word count
*	note the difference between `wc output.txt` and `wc < output.txt`

also: `cat *.txt` globbing pattern
*	`*` = match any sequence of chars
*	shell finds all files in the current directory that match the pattern & and substitutes on the command line
*	it will be transformed into -> `cat a.txt b.txt c.txt …`
*	`cat *` prints everything except the hidden files
*	`cat < *.txt` error, shell will only attack one file to the input stream
*	more globbing pattern -Linux sheet

Many (but not all) programs accept both kinds of input

can do both input and output redirection

`cat < input.txt > output.txt` takes chars from input.txt and sends to output.txt, copies the file

by default, stdin == keyboard, stdout/stderr == screen
*	`<` connects stdin to a file
*	`>` connects stdout to a file
*	`2>` connects stderr to a file
	*	stderr is a separate output stream for error messages
	*	so output & errors messages can go to separate places
	*	so error messages don't clutter output files and corrupt formatting
	*	also: stdout may be buffered -system may wait to accumulate output before actually displaying (flushing) it
	*	stderr is never buffered -get error messages immediately

### Pipes
*	uses output of one program as input of another
*	set 2nd program's stdin to 1st program's stdout

example: how many words occur in the first 20 lines of sample.txt?

tools:
*	`head -n file` first n lines
*	`wc -w` just the words

solution:

```sh
head -20 smaple.txt | wc -w
```

## Lecture 2

Pipe: connect standard out (stdout) from one program to the standard in (stdin) of another program

Suppose we had N files, words1.txt, words2.txt ... each has 1 word/line

Want: a duplicate free list of all words in these files

`uniq` remove consecutive duplicate lines in input

`sort` sort lines of input

solution:

```sh
cat words*.txt | sort | uniq
sort words*.txt | uniq
```

(`sort` may be more efficient than we use `cat` to open every file and ship information around)

Question: Can we use the output of one program as parameters to another?

`echo "Today is $(date) and I am $(whoami)"`

shell executes `date` & `whoami` and substitutes them with their output

warning: use of single quote

`echo 'Today is $(date) and I am $(whoami)'` will literally print

`Today is $(date) and I am $(whoami)`

single quote: substitution

single & double quotes prevent globing pattern expansion (suppresses glob substitution)

### Pattern matching in text files

`egrep` ("extended global regular expression print") or `grep -E` does the same job

template: `egrep pattern files` print every line that contains the pattern in the file

Example: print every line in index.html that contains "cs246"

`egrep cs246 index.html`

Example: how many lines contain "cs246" or "CS246"

`egrep "cs246|CS246" index.html | wc -l`

`egrep "(cs|CS)246" index.html |wc -l` bracket sub-pattern

egrep patterns are called regular expressions

these are NOT globing pattern

Examples:
`(c|C)(s|S)246` matches "cs246" "CS246" "cS246" and "Cs246"

`[cC][sS]246` is equivalent to the above

syntax `[...]` matches any 1 character in ... `"[a1z2]"` == `"(a|1|z|2)"`

`[^...]` match any 1 character not in the square brackets

`[^cC]` match anything not a "c" or "C"

`"[cC][sS] ?246"` allows for an optional space between "cs" and "246"

`?` says to match 0 or 1 occurrences of the preceding expression

`*` syntax match 0 or many occurrences of the preceding pattern

`'(cs)*246` matches "246" "cs246" "cscs246" "cscscs246" ...

at least 1 occurrence: `cs(cs)*246`

`(cs)+246` syntax `+` says to match 1 or more occurrences of the preceding expression

`.` matches any single character

`.*` matches any string at all (also the empty string) 

`.+` matches all nonempty string

`egrep "(cs).*(246)" index.html` fetch any lines that contain "cs" followed by any sequence of characters, followed by "246"

`^` matches beginning of line 

`$` matches the end of line

`^cs246`  matches lines that start with "cs246" 

`cs246$` matches lines that end with "cs246"

Example: Lines of even length? 

`^(..)*$`

Example: List files whose name contain exactly one "a" 

`ls | egrep "^[^a]*(a)[^a]*$"`
 
## Lecture 3

All words in the global dictionary that start with `e` and have 5 chars. 

`egrep '^e....$' /usr/share/dict/words`

### Permissions

`ls -l` "long form" listing

Format

`-rw-r----- 1 j2smith j2smith 25 Sep 9 15:27 abc.txt` 

groups: 
*	a user can belong to one or more groups 
*	a file can be associated with one group

type:
*	`-` ordinary file
*	`d` directory

permissions
*	3 groups of 3 bits, user group & other 
*	user bits apply to the file's owner 
*	group bits apply to the members of the file group (other than the owner) 
*	other bits apply to everyone else

`r` read bit, `w` write bit, `x` execute bit

| Bit | Meaning for ordinary files | Meaning for directory |
|-----|----------------------------|-----------------------|
| `r` | file's contents can be read | directory's contents can be read (e.g. `ls` works, globing works) |
| `w` | file's contents can be modified | directory's content can be modified (can add/remove files) |
| `x` | file can be executed as a program | directory can be navigated (can `cd` into the directory) |

directory `x` bit is not set = no access at all to the directory, nor to any files within it, nor to any subdirectory.

changing permissions: `chmod mode file` 

mode: user types, operator, permissions

user types:
*	`u` for user (owner)
*	`g` for group
*	`o` for other
*	`a` for all

operator:
*	`+` add perm
*	`-` subtract perm
*	`=` set perm exactly

perm:
*	`r` read
*	`w` write
*	`x` execute

given other read permission: `chmod o+r file` 

make everyone permission `rx` `chmod a=rx file` 

give the owner full control `chmod u=rwx file`

### Shell Script

files containing sequences of shell commands executed as programs.

e.g. print date, current dir, current dir

```sh
#!/bin/sh # "shebang" line execute this file a sh script
date
whoami
pwd
```

give the file execute permission: `chmod u+x myscript` 

run the file `./myscript`

Variables 

`x=1` (NO spaces)

`echo $x`

Use `$` when fetching the value of a variable. 

No `$` when setting a variable  (`$` = fetching the value of)

good practice: ${x} brace brackets

all variables contain strings (x above is the string "1")

e.g.

```sh
>dir=~/cs246 
>echo ${dir} 
/u/bmlushma/cs246 
>ls ${dir} 
contents of the directory
```

Some global variable

`PATH`
*	list of directory
*	when you type a command, shell searches these directories in order for a program with that name

`echo *` prints every file in the dir

`echo "*"` `echo '*'` print `*` , suppress globbing

`echo "$PATH"` prints the path

`echo '$PATH'` prints `$PATH`

`$` expression happens in double quotes, but not single quotes

Special variable for script

`$1, $2, …` command line args

e.g.
check whether a word is in the dictionary

`./isItAWord hello`

```sh
#!/bin/sh
egrep "^$1$" /usr/share/dict/words
```

*	prints nothing if not found
*	prints the word if found

e.g. a good password should not be in the dictionary

```sh
#!/bin/sh
egrep "^$1$" /usr/share/dict/words > /dev/null #suppress output
```

every program returns a status code when it's finished.

`egrep` returns 0 if found, 1 if not found

(usually 0 = success, non-zero = failure)

`$?` = status code of most recently executed command

```sh
if [ $? -eq 0 ]; then
	echo Bad password
else
	echo May be a good password
fi
```

verify # of arguments, print error msg if wrong

```sh
usage () {
	echo "usage: $0 password" # $0 is the name of the program/script
}

if [ $# -neq 1 ]; then # $# is the number of arguments
	usage
	exit 1
fi
```

```sh
if [ cond ]; then
…
elif [ cond ]; then
…
else
…
fi
```

loops: print `#s` from `1` to `$1`

```sh
#!/bin/sh
x=1
while [ $x -le $1 ]; do
	echo $x
	x=$((x+1)) # $((...)) for arithmetic
done
```

e.g. rename all `.cpp` files to `.cc`

```sh
#!/bin/sh
for name in *.cpp; do  # sets the var to each word in the given list
	mv ${name} ${name%cpp}cc
done
```

How many times does word `$1` occur in file `$2`?

```sh
#!/bin/sh
x=0
for word in $(cat "$2"); do # surround vars with double quotes
	if [ word == $1 ]; then
		x = $((x+1))
	fi
done
```

## Lecture 4

Example: payday is the last Friday of the month, when is this month's payday? 2 tasks: compute date & format answer

```sh
#!/bin/sh
answer() {
	if [ $1 -eq 31 ]; then
		echo "This month: the 31st"
	else
		echo "This month: the ${1}th"
	fi
}
answer $(cal | awk '{print $6}' | egrep "[0-9]" | tail -1)
```

inside the function `$1 $2` are the parameters of the function

generalize to any month

`cal June 2016` gives June 2016 calendar, so let `payday June 2016` gives June's payday

```sh
#!/bin/sh
answer() {
	if [ $2 ]; then
		preamble=$2
	else
		preamble="This month"
	fi

	if [ $1 -eq 31 ]; then
		echo "${preamble}: the 31st"
	else
		echo "${preamble}: the ${1}st"
	fi
}

answer $(cal $1 $2 | awk '{print $6}' | egrep "[0-9]" | tail -1) $1
# empty string if not supplied
```

### SE topic: testing

*	Essential part of program development
	*	ongoing, not just at the end
	*	begin before you start coding
	*	test suites - expected behavior
*	is not debugging, cannot debug without testing
*	cannot guarantee correctness - can only prove wrongness
*	ideally, developer & tester are different people
*	Human testing: humans look over code, fine flaws, code inspection, walk through
*	Machine testing: run program on selected input, check against spec. cannot check everything, choose test cases carefully
*	Black/White/Grey-box testing: no/full/some knowledge of program implementation

start with black-box, supplement with white box

*	various classes of input, e.g. numeric ranges, positive vs negative
*	boundaries of valid data ranges (edge cases)
*	multiple simultaneous boundaries (corner cases)
*	intuition/experience, guess at likely errors
*	extreme cases

White box
*	execute all logical path of the program
*	make sure every function runs

performance testing
*	is the program fast enough?

progression testing
*	make sure new changes to the program don't break all test cases
*	test suites, testing scripts

### Module 2: C++

Hello world in C:

```C
#include <stdio.h>
int main() {
	printf("Hello World\n");
	return 0;
}
```

Hello world in C++

```cpp
#include <iostream>

using namespace std;

int main() {
	cout<<"Hello World"<<endl;
	return 0;
}
```

*	`main` must return int in C++
*	`stdio.h` `printf` still available in C++
*	preferred C++ I/O: header `<iostream>`
*	output: `std::cout<<...<<...<<...`
*	`std::endl` = end of line
*	`using namespace std`, let you say `cout/endl` instead of `std::cout//std::endl`
*	return statement, returns status code to shell (`$?`)
	if left out, main returns 0
*	compiling C++ programs:
	`g++-5 -std=c++14 program.cc -o program` <- the name of the executable binary (if not specified: `a.out`)
	or if you modified `.profile`

	`g++14 program.cc -o program`
*	to run: `./program`

### I/O

*	`cout`: for printing to stdout
*	`cin`: for reading from stdin
*	`cerr`: for printing to stderr

I/O operator:
*	`<<`: "put to" (output)
*	`>>`: "get from" (input)

`cerr<<x` `cin>>x`

operator "points" in the direction information flow

add two numbers:

```cpp
#include <iostream>
using namespace std;
int main() {
	int x,y;
	cin >> x >> y;
	cout << x+y << endl;
	return 0;
}
```

`cin` ignores white spaces

`cin>>x>>y` gets two ints from stdin skipping whiltespace (space tab newline)

what if the input doesn't contain an integer next?
*	statement fails, value of var is undefined

what if the input is exhausted? (EOF) before you get two ints? - same

if the read fails, `cin.fail()` fill be true

if EOF, `cin.eof()` and `cin.fail()` will both be true

but not until the attempted read fails

example: read all ints from stdin, echo them one per line stop at bad input or EOF

```cpp
﻿int main() {
	int i;
	while (true) {
		cin >> i;
		if (cin.fail()) break;
		cout << i << endl;
	}
}
```

## Lecture 5

Example 1.0

Read all ints from stdin + echo, one per line, to stdout. Stop on bad input or EOF

```cpp
1 ﻿int main() {
2     int i;
3     while (true) {
4         cin >> i;
5         if (cin.fail()) break;
6         cout << i << endl;
7     }
8 }
```

Note

There is an implicit conversion from cin to bool 
*	lets cin be used as a condition.
*	true if eof/fail/bad bits are clear
*	false if any of eof/fail/bad is set

Example 2.0

```cpp
1 ﻿int main() {
2     int i;
3     while (true) {
4         cin >> i;
5         if (!cin) break;
6         cout << i << endl;
7     }
8 }
```


Note `>>` is C's right bitshift operator

`a>>b` shifts `a`'s bits `b` positional to the right

`21 >> 3 = 2`

But when LHS is `cin`, `>>` is the "get from" operator.

operator `>>` input: LHS `cin`  (`istream`)
                              
RHS data (several possible types)

output: return `cin` back (`istream`)

This is why we can write `cin >> x >> y >> z;`

Example 3.0

```cpp
1 ﻿int main () {
2     int i;
3     while (true) {
4         if (!(cin>>i)) break;
5         cout<<i<<endl;
6     }
7 }
```

Example 4.0

```cpp
1 ﻿int main () {
2     int i;
3     while (cin>>i) {
4         cout<<i<<endl;
5     }
6 }
```

Example

Read all ints and echo to stdout until EOF. Skip non-integer input.

```cpp
1 ﻿int main() {
2     int i;
3     while (true) {
4         if (!(cin>>i)) {
5             if (cin.eof()) break;
6             cin.clear(); // clear the fail bit
7             // the bad character is still at input
8             cin.ignore(); // ignore the current input char
9         } else {
10             cout << i << endl;
11         }
12     }
13 }
```

### Reading Strings

type `std::string` (`#include <string>`)

```cpp
1 ﻿int main() {
2     string s;
3     cin >> s; // read a string
4     cout << s << endl;
5 }
```

*	skips leading white space
*	stops at whitespace

what if we want the whitespace? `getline(cin, s)`
*	reads from current position to the next new line into `s`

```cpp
1 ﻿cout << 95 << endl; // prints 95
```

what if we want to print a number in hexadecimal?

```cpp
1 ﻿cout << hex << 95 << endl; // prints 5f
```

I/O manipulator, all subsequent ints printed in hex

```cpp
1 ﻿cout << dec;// go back to decimal
```

Other manipulators: see notes `#include <iomanip>`

Stream abstraction applies to other sources of data

Files: Read from a file instead of `stdin`

`std::ifstream` read from a file

`std::ofstream` write to a file

### File access in C

```C
1 ﻿#include <stdio.h>
2 int main() {
3     char s[256];
4     FILE *file = fopen("suite.txt", "r");
5     while (true) {
6         fscanf(file, "%255s", s);
7         if (feof(file)) break;
8         printf("%s\n", s);
9     }
10     fclose(file);
11 }
```

C++:

```cpp
1 ﻿#include <iostream>
2 #include <fstream>
3 using namespcae std;
4 int main () {
5     ifstream file{"suite.txt"}; //declaring an ifstream opens the file
6     string s;
7     while (file >> s) {
8         cout << s << endl;
9     } // file is closed when the ifstream (file) goes out of scope
10 }
```

Anything you can do with `cin/cout`, you can also to with an `ifstream/ofstream`

Example: Strings - attach a stream to a string variable and read from/write to the string

```cpp
1 ﻿#include <sstream>
2 std::istringstream; //read from a string
3 std::ostringstream; //write to a string
```

```cpp
1 ﻿int hi = 100;
2 int lo = 1;
3 ostringstream ss;
4 ss << "Enter a # between " << lo << " and " << hi;
5 string s = ss.str();
6 cout << s << endl;
```

Example
convert string to #

```cpp
1 ﻿int n;
2 while (true) {
3     cout << "Enter a number " << endl;
4     string s;
5     cin >> s;
6     istringstream ss {s};
7     if (ss > n); break; // stop if the string contains a #
8     cout << "I said, ";
9 }
10 cout << "You entered " << n << endl;
```

Example: echo #, skip non-#

```cpp
1 ﻿int main() {
2     string s;
3     while (cin >> s) {
4         istringstream ss{s};
5         int n;
6         if (ss >> n) cout << n << endl;
7     }
8 }
```

###Strings

In C: array of char (`char *` or `char[]`) terminated by `\0`
*	must explicitly manage memory - allocate more memory as strings get larger
*	easy to overwrite `\0` and corrupt the string

C++: grow as needed (no need to manage memory)
*	safer to manipulate

Example

```cpp
string s = "hello";
string s{"Hello"};
```

`'h' 'e' 'l' 'l' 'o' '\0'`

C++ string created from C string on initialization

String operation:

equality/inequality: `s1==s2, s1!=s2`

comparison: `s1<=s2` (lexicographic)

length: `s.length();`

get individual chars `s[0] s[1]`

concat:  `s3 = s1+s2; s3+=s4;`

### Default function parameters

```cpp
1 ﻿void printSuiteFile(string name = "suite.txt") { // default value
2     ifstream file {name};
3     string s;
4     while (file>>s) cout << s << endl;
5 }
6 printSuiteFile("suite2.txt");
7 printSuiteFile(); // prints from suite.txt
```

Note: optional parameters must be last

C:

```C
1 ﻿int negInt(int n) {return -n;}
2 bool negBool(bool b) {return !b;}
```

C++: functions with different parameter lists can share the same name (overload)

```cpp
1 ﻿int neg(int n){return -n;}
2 bool neg(bool b){return !b;}
```

compiler will use # and types of args to decide which neg is being called

## Lecture 6

### Overloading

C:

```C
1 ﻿int negInt(int n) {return -n;}
2 bool negBool(bool b) {return !b;}
```

C++:

```cpp
1 ﻿int neg(int n) {return -n;}
2 bool neg(bool b) {return !b;}
```

compiler uses numbers & types of arguments to decide which `neg` is being called.

overloads must differ in number or type of argument, may not differ in just return type;

we have seen this already: `>>`, `<<` are overloaded - behavior depends on types of args.

### struct:

```cpp
1 ﻿struct Node{
2     int data;
3     Node *next;
4 };
```

wrong:

```cpp
1 ﻿struct Node {
2     int data;
3     Node next;
4 };
```

```cpp
1 ﻿Node n1 {5, nullptr};
```

syntax for null pointers in C++, do not use NULL or 0 in this class.

```cpp
1 ﻿const Node n2=n1;
```

immutable copy of n1

recall:

```cpp
1 ﻿void inc (int n) {n=n+1;}
2 
3 int x=5;
4 inc(x);
5 cout<<x<<endl;
```

prints 5, `inc` gets a copy of `x`, increments the copy, original unchanged.

if a function needs to modify an argument pass a ptr:

```cpp
1 ﻿void inc (int *n) {*n=*n+1;}
2 
3 int x;
4 inc(&x);
5 count<<x<<endl;
```

x's address passed by value (copied), `inc` changed the data at that address, visible to the caller

Q: why `cin>>x` and not `cin>>&x`

A: C++ has another ptr-like type: references

### References

```cpp
1 ﻿int y=10;
2 int &z=y; // z is an lvaule reference to int (y)
3 // like a const ptr
4 // similar to int * const z = &y; <- the pointer is const
```

in all cases, `z` be behaviors exactly like `y`. `z` is an alias ("another name") for `y`

things you can't do with lvalue references
*	leave them uninitialized, e.g. `int &x;` <- Wrong
*	must be initialized with something that has an address (an lvalue), since refs are ptrs, e.g. `int &x =3;` <- Wrong
*	int `&x = y + z;` <- Wrong
*	create a ptr to a reference `int &*x;` <- Wrong
*	reference to ptr is ok: `int *&x;`  <- OK
*	create a reference to a reference: `int &&r;` <- Wrong, this means something different
*	create an array of references `int &r[3]={n,n,n};` <- Wrong

what can you do?
*	pass as function parameters
*	`void inc (int &n) {n=n+1;}`
*	no ptr deref, const, ptr to the arg (x) changes to n affect x

```cpp
1 ﻿int x = 5;
2 inc (x);
3 cout << x << endl; // prints 6
```

`cin` takes `x` as a reference.

```cpp
1 ﻿istream &operator >>(istream &in, int &n);
```

pass by value e.g. `int f (int n) {…}` copies the argument

if the argument is big, the copy is expensive.

slow:

```cpp
1 ﻿struct ReallyBig {...};
2 int f (ReallyBig rb) {...};
```

avoid copy, alias, fast

```cpp
1 ﻿int g (ReallyBig &rb) {...}
```

but could change `rb` in the caller

```cpp
1 ﻿int h (const ReallyBig &rb) {...}
```

fast, no copy, the parameter cannot be changed

advice: perfer pass by const ref over pass by value for anything larger than an int, unless the function needs to make a copy anyway, then maybe use pass by value

```cpp
1 ﻿int f (int &n) {...}
2 int g (const int &n) {...}
3 
4 f(5);// not allowd, can't initialize an lvalue reference to a literal value
5 // if n changes, can't change the literal 5
6 
7 g(5); // it is allowed
8 // since n will not be changed, compiler allows this.
```

compiler creates a temporary location in memory to hold the 5, so the ref n has something to point at.

### Dynamic Memory Allocation

C:

```cpp
1 ﻿int *p = malloc(... *sizeof(int));
2 ...
3 free(p);
```
DON’T USE THESE IN C++

C++:

```cpp
1 ﻿// new & delete type-aware, less error-prone
2 
3 struct Node {
4     int data;
5     Node *next;
6 };
7 
8 Node *np = new Node;
9 
10 delete np;
```

all local vars reside on the stack

variables are deallocated when their scope ends (stack is popped)

allocated memory resides on the heap

remains allocated until delete is called

if you don't delete all allocated memory: memory leak - program will eventually fail

we regard as incorrect

```cpp
1 ﻿Node getMeANode() {
2     Node n;
3     return n;
4 }
5 // may be expensive
6 // n copied into caller's frame
7 
8 // return n ptr (ref) instead?
9 
10 Node &getMeANode() {
11     Node n;
12     return n;
13 }
14 // BAD: returns ref to stack allocated data which is dead on return
15 
16 Node *getMeANode() {
17     Node *p = new Node;
18     return p;
19 }
20 // OK and fast and safe,
21 // but the caller has to remember to delete it
```

### Operator Overloading

Give our own meanings to C++ operators

```cpp
1 ﻿struct vec {
2     int x, y;
3 }
4 
5 vec operator+ (const vec &1, const vec &2) {
6     vec v {v1.x + v2.x, v1.y + v2.y};
7     return v;
8 }
```

## Lecture 7

```cpp
1 ﻿struct Node {
2     int data;
3     Node *next;
4 };
5 
6 Node *np = new Node;
7 
8 delete np;
```

```cpp
1 ﻿Node *myArray = new Node[10];
2 
3 delete [] myArray;
```

use `delete` with ordinary new

use `delete []` with array new, don’t mix them

```cpp
1 ﻿struct Vec {
2     int x, y;
3 };
4 
5 Vec operator+ (const Vec &v1, const Vec &v2) {
6     Vec v {v1.x + v2.x, v1.y + v2.y};
7     return v;
8 }
9 
10 Vec operator* (const int k, const Vec &v) {
11     return {k * v.x, k * v.y};
12 }
13 
14 Vec operator* (const Vec &v, const int k) {
15     return k * v;
16 }
```

```cpp
1 ﻿struct Grade {
2     int theGrade;
3 };
4 
5 ostream & operator << (ostream &out, const Grade &g) {
6     out << g.theGrade << '%';
7     return out;
8 }
9 
10 istream & operator >> (istream &in, Grade &g) {
11     in >> g.theGrade;
12     if (g.theGrade < 0) g.theGrade = 0;
13     if (g.theGrade > 100) g.theGrade = 100;
14     return in;
15 }
```

### The Preprocessor

Transforms the program before the compiler sees it.

`#...` -> preprocessor directive, e.g., `#include`

including old C headers - new naming convention 

e.g., instead of `#include <stdio.h>` use `#include <cstdio>`

`#define VAR VALUE` -> sets a preprocessor value, then all occurrences of VAR in the source file are replaced with VALUE

e.g.

```cpp
1 ﻿#define MAX 10
2 
3 int x[MAX];
4 
5 // transformed to
6 
7 int x[10];
```

use `const` definition instead

```cpp
1 ﻿#define FLAG // sets var FLAG, value is the empty string.
```

Defined constants useful for conditional compilation.

```cpp
1 ﻿#define IOS 1
2 #define BBOS 2
3 #define OS BBOS
4 #if OS == IOS
5     short int publicLKey; // removed if OS != IOS
6 #elif OS == BBOS
7     long long int publicKey; // removed if OS != BBOS
8 #endif
```

special case:

```cpp
1 ﻿#if 0
2 ...
3 #endif
4 // never true, all inner text is removed before it gets to the compiler
5 // heavy duty comment out
6 // does nest
```

can also define symbols via compiler arguments

```cpp
1 ﻿int main() {
2     cout << X << endl;
3 }
4 
5 // command line:
6 g++14 -DX=15 define.cc -o define
7 ./define
8 15
```

```cpp
1 ﻿#ifdef NAME
2 #ifndef NAME // true if name has/has not been defined
```

```cpp
1 ﻿int main() {
2     #ifdef DEBUG
3         cerr << "setting x=1" << endl;
4     #endif
5     
6     int x= 1;
7     while (x < 10) {
8         ++x;
9         #ifdef DEBUG
10             cerr << "x= " << x << endl;
11         #endif
12     }
13     cout << x << endl;
14 }
```

```sh
g++14 -DDEBUG debug.cc -o debug
```

### Separate Compilation

split programs into composable modules, which provide interface & implementation

interface: type definition, function header `.h` file

implementation: full definition for every provided functions `.cc` file

Recall

*	declaration - assert existence
*	definition - full detail, allocate space (vars/functions)

```cpp
1 ﻿// interface vec.h
2 struct Vec {
3     int x, y;
4 };
5 
6 Vec operator + (const Vec &v1, const Vec &v2);
7 
8 // main.cc
9 #include "vec.h"
10 int main () {
11     Vec v {1,2};
12     v = v + v;
13 }
14 
15 // impementation vec.cc
16 #include "vec.h" // so we get struct definition
17 Vec operator + (const Vec &v1, const Vec &v2) {
18     return {v1.x + v2.x, v1.y + v2.y};
19 }
```

compiling separately

```sh
g++14 -c vec.cc
g++14 -c main.c  # -> compile only, don’t link
#-c produces an object file (.o)
g++14 vec.o main.o -o main # -> invokes the linker
```

suppose we write a linear algebra module

```cpp
1 ﻿//linalg.h
2 #include "vec.h"
3 
4 //linalg.cc
5 #include "linalg.h"
6 #include "vec.h"
7 
8 //main.cc
9 #include "linalg.h"
10 #include "vec.h"
11 
12 //main.cc, linalg.cc include both linalg.h, vec.h
```

need to prevent files from being included more than once.

```cpp
1 ﻿//vec.h use #include guard
2 #ifndef _VEC_H_
3 #define _VEC_H_
4 
5 #endif
```

first time which is included symbol `_VEC_H_`, so file is included subsequently,` _VEC_H_` is defined so contents are suppressed.

Always put `#include` guards in `.h` files

Never put `using namespace std` in header files

the using directive will forced on any client who includes the file

so use the prefix `std::` in headers

Never include `.cc` files

Never compile `.h` files

## Lecture 8

### Classes

can put functions inside structs.

```cpp
1 ﻿struct student {
2     int assigns, mt, final;
3     float grade() {
4         return assigns * 0.4 + mt * 0.2 + final *0.4;
5     }
6 };
7 
8 student s{60,70,80};
9 cout<<s.grade()<<endl;
```

class - essentially a struct type that can contain functions

C++ has a class keyword

object - an instance of a class

function `grade()` called a member function (or method)

what do assngs, mt, final mean inside of `grade(){…}`?

they are fields of the current object, upon which grade was invoked.

```cpp
1 ﻿student billy{...};
2 billy.grade(); // uses billy's assng, mt, final
```
formally, methods take a hidden extra parameter called `this` pointer to the object on which the method was invoked

```cpp
1 ﻿billy.grade(); // this == &billy
```

can write:

```cpp
1 ﻿struct student P
2     float grade() {
3         return this->assign * 0.4 + this->mt * 0.2 + this->final * 0.4;
4     }
5 }
```

### Initializing Objects

Student `billy {60,70,80};` Ok but limited

Better - include a method that does initialization - a constructor (ctor)

```cpp
1 ﻿struct student {
2     int assns, mt, final;
3     float grade() {...};
4     student(int assigns, int mt, int final) {
5         this->assns = assns;
6         this->mt = mt;
7         this->final = final;
8     }
9 };
```

```cpp
1 ﻿student billy {60, 70, 80};
```

if a ctor has been defined, thse are passed as args to the constructor.

if no constructor has been defined, then these initialize the individual fields of student

or

```cpp
1 ﻿student billy = student{60,70,80};
```

or

```cpp
1 ﻿student billy (60, 70, 80);
2 student billy = student(60, 70, 80);
```

uniform initialization

```cpp
1 ﻿string s = "hello";
2 string s("hello");
3 string s{"hello"};
4 
5 int x = 5;
6 int x(5);
7 int x{5};
```

heap allocation: `student *pBilly = new student{60, 70, 80};`

advantages of ctors: default params, overloading, sanity check

```cpp
1 ﻿struct student {
2     student (int assns = 0, int mt = 0, int final = 0) {
3         ...
4     }
5 };
6 
7 student jone {70, 80}; // 70 80 0
8 student newkid; // 0 0 0
```

note:

every class comes with a default (i.e. zero argument) ctor (which just default constructs any fields that are objects)

e.g. `Vec v; // default ctor (does nothing in this case)`

but, the built in default ctor goes away if you provide any ctor

```cpp
1 ﻿struct Vec {
2     int x, y;
3     Vec (int x, int y) {
4         this->x = x;
5         this->y = y;
6     }
7 };
8 
9 Vec v; // error!
10 Vec v {1,2}; // ok
```

what if a struct contain constants or ref

```cpp
1 ﻿struct myStruct {
2     const int myConst; // must be initialized
3     int &myRef; // must be initialized
4 };
```

initialize:

```cpp
1 ﻿int z;
2 struct myStruct {
3     const int myConst = 5;
4     int &myRef = z;
5 };
6 
7 // But does every instance of myStruct need to have the same value of myConst, myRef?
```

```cpp
1 ﻿struct Student {
2     const int id;
3     // constant doesn't change but not the same for all studnet
4     ...
5 };
```

fields must be fully constructed by then

what happens when an object is created
*	space is allocated
*	fields are constructed <- need to put our initializations here
*	constructor body runs 

### member initialization list (MIL)

```cpp
1 ﻿struct Student {
2     const int id;
3     int assns, mt, final;
4     Student(int id, int assns, int mt, int final):
5         id{id}, assn{assn}, mt{mt}, final{final} {}
6 };
```

Note

can initialize any field this way, not just consts and refs

sometimes more efficient than setting fields in ctor body (without run default ctor in step 2 then reassign in step 3)

fields are initialized in the order in which they are declared in the struct, even if the MIL orders them differently

what if a field is initialized in line and in the MIL?

```cpp
1 ﻿struct Vec{
2     int x=0, y=0;
3     Vec (int x): x{x} {}
4 };
```

```cpp
1 ﻿student billy {60, 70, 80};
2 student bobby {billy};
```

### the copy constructor

invoked when constructing on object as a copy of another

Note: every class comes with
*	a default ctor (default - constructs all fields that are objects, lost if you define any ctor)
*	a copy constructor (just copies all fields)
*	a copy assignment operator
*	a destructor
*	a move ctor
*	a move assignment operator

building your own copy ctor

```cpp
1 ﻿struct Student {
2     ...
3     Student() {...}
4     Student(const Student &other):
5         assgn{other.assgn}, mt{other.mt}, final{other.final} {}
6 };
```

when is the built in copy ctor not correct

## Lecture 9

```cpp
1 ﻿struct Student {
2     int assns, mt, final;
3     ...
4     Student (const Student &other):
5         assns{other.assns}, mt{other.mt}, final{other.final} {}
6 };
```

```cpp
1 ﻿Node *n = new Node{1, new Node{2, new Node{3, nullptr}}};
2 Node m = *n;
3 Node *p = new Node {*n};
```

simple copy fields => only first node is actually copied (shallow copy)

if you want a deep copy (copy the whole list), write your own copy ctor

```cpp
1 ﻿struct Node {
2     ...
3     Node (const Node &other):
4         data{other.data}, next{other.next? new Node {*other.next}: nullptr} {}
5 };
```

recursive copies the rest of the list

the copy ctor is called:

1.	when an object is initialized with another object (same class)
2.	when an object is passed by value
3.	when an object is returned from a function

(exception to all 3, later)

Careful with ctors that can take on parameter

```cpp
1 ﻿struct Node {
2     ...
3     Node (int data): data{data}, next{nullptr}{}
4 };
```

single-arg ctors create implicit conversions

e.g.

```cpp
Node n{4};
Node n{5};
// but also
Node n = 4; // implicit conversion from int to Node
```

```cpp
int f(Node n){…}
f(4); //works, 4 implicitly converted to Node
```

Danger 
*	accidentally pass an int to a function taking a Node
*	silent conversion, compiler does not signal an error
*	potential errors not caught

Good idea: disable the implicit conversion, make the ctor explicit

```cpp
1 ﻿struct Node {
2     ...
3     explicit Node(int d): data{d}, next{nullptr}{}
4 };
Node n{4}; // still okay
Node n = 4; // not legal now
f(4); // not legal now
```

### Destructors

When an object is destroyed (stack allocated: goes out of scope, heap allocated: it is deleted)

a method called the destructor (dtor) runs

Specifically:
1.	dtor body runs
2.	field's dtors are invoked in reverse declaration order
3.	space is deallocated

classes come with a dtor (runs dtor for all fields, that are objects)

when do we need to write one?

```cpp
1 ﻿Node *np = new Node {1, new Node {2, new Node {3, nullptr}}};
2 // if np goes out of scope, the pointer is reclaimed (stack allocated) and list is leaked
3 
4 delete np; // calls *np's dtor, which doesn't do anything
5 // 1 will be free, 2 & 3 leaked
6 
7 // write a dtor to ensure the whoe list is freed
8 struct Node {
9     ...
10     ~Node() {
11         delete next;
12     }
13 };
```

recursively calls `*next`'s dtor, so the whole list is deallocated

### Copy Assignment Operator

```cpp
1 ﻿Student billy {60, 70, 80};
2 Student jane {billy}; // copy ctor
3 Student joey; // default ctor
4 joey = billy; // copy, but not construction
5 // copy assignment operator, uses compiler'supplied default
```

```cpp
1 ﻿struct Node {
2     ...
3     Node &operator= (const Node &other) {
4         // return the value assigned
5         // cascading works
6         data = other.data;
7		  delete next;
8         next = other.next ? new Node{*other.next}: nullptr;
9         return *this;
10    }
11 }; // DANGEROUS
```

```cpp
Node n{1,new Node{2, new Node{3, nullptr}}};
n=n;
```

deletes `n` & then tries to copy `n` to `n`

undefined behavior

when writing `operator=` always watch out self assignment

```cpp
1 ﻿struct Node {
2     ...
3     Node &opeartor= (const Node &other) {
4         if (this == &other) return *this;
5         data = other.data;
6         delete next;
7         next = other.next? new Node{*other.next}: nullptr;
8         return *this;
9     }
10 };
```

Better:

```cpp
1 ﻿Node &operator= (const Node &other) {
2     if (this==&other) return *this;
3     Node *temp = next;
4     next = other.next?new Node{*other.next}:nullptr;
5     data = other.data;
6     delete temp;
7     return *this;
8 }
```

alternative: copy and swap idiom

```cpp
1 ﻿#include <utility>
2 
3 struct Node {
4     ...
5     void swap (Node & other) {
6         using std::swap;
7         swap (data, other.data);
8         swap (next, other.next);
9     }
10     
11     Node &operator= (const Node &other) {
12         Node temp = other;
13         swap (temp);
14         return *this;
15     }
16 };
```

### Rvalues and Rvalues refernces

an lvalue is anything with an address

an lvalue reference (&) is like a const. ptr with auto-deref, always initialized to an lvalue

Now, consider

```cpp
1 ﻿Node n{1, new Node{2, nullptr}};
2 Node m=n; // copy ctor
3 Node m2;
4 m2 = n; // copy assignment operator
5 
6 Node plusOne(Node n) {
7     for (Node *p = &n; p; p=p->next) {
8         ++p->data;
9     }
10     return n;
11 }
12 
13 Node m3 = plusOne(n); // copy constructor
```

but what is "other" here? 

complier creates a temporary object to hold the result of `plusOne`

other is a reference to this temporary object

copy ctor deep copies from the temp object

the temp is just going to be discarded anyway as soon as the statement 
ends.

wasteful to do a full copy

## Lecture 10

```cpp
1 ﻿Node n {1, new Node {2, nullptr}};
2 Node n2 = n; // copy ctor
3 Node n3 = plusOne(n); // copy ctor
4 // other reference to temporary object
5 // deep copy from temp object, why not just steal the data?
```

Need to be able to tell whether other is a reference to a temporary object or a standalone object

C++ rvalue reference `Node &&` is a reference to a temporary object (rvalue) of type Node

version of the ctor that take a `Node &&`

```cpp
1 ﻿struct Node {
2     ...
3     Node (Node &&other) :
4         data {other.data},
5         next {other.next} {
6         other.next = nullptr;
7     }
8 };
```

when other is destroyed, the nodes (other.next) is not destroyed with it.

Similarly:

```cpp
1 ﻿Node m;
2 m = addOne(n); // assignment from temporary
3 
4 struct Node {
5     ...
6     Node &operator= (Node &&other) {
7         // steal other's data
8         // destroy my old data
9         using std::swap;
10        swap(data, other.data);
11        swap(next, other.data);
12        return *this;
13     }
14 };
```

temp will be destroyed and take our old data with it

if you don’t define move ctor/move assign, the copy reversion will be used

if the move version is are defined, they replace to the copy versions where the arguments is a temporary (rvalue)

### Copy/Move Elision

```cpp
1 ﻿Vec makeAVec() {return {0,0};} // basic ctor
2 
3 Vec v = makeAVec(); // what runs? copy ctor? move ctor?
```

in g++, just the basic ctor ran, no copy ctor, no move ctor

in some circumstances, the compiler is allowed to skip calling copy/move ctors (but doesn’t have to)

in this example: `makeAVec` writes its result (`{0,0}`) directly into the space occupied by `v` in the caller, rather than copy it later

example:

```cpp
1 ﻿void doSomething (Vec v) { } // pass by value, copy ctor
2 
3 doSomething (makeAVec());
4 // result of makeAVec written directly into param, no copy
```

this is allows, even if it would change the behavior of the program (e.g. if ctor print things)

you don’t have to know exactly when copy/move elision is allows, just that it is allowed

if you need all of the ctors to run,
`g++14 -fno-elide-constructors`

but this can slow down your program considerably

in summary, rule of five: if you need a customer version of any one of
*	copy ctor
*	copy assign
*	dtor
*	move ctor
*	move assign

then you usually need a custom version of all 5

Note: `operator=` is a member function, not standalone

when an operator is a member function, this plays a role of the LHS operand

e.g.

```cpp
1 ﻿struct Vec {
2     int x, y;
3     
4     Vec operator+ (const Vec &v) {
5         return {x+v.x, y+v.y};
6     }
7     
8     Vec operator* (const int k) {
9         return {x*k, y*k}; // implements v*k
10     }
11     
12 };
```

how do we implement k*v, can’t be a member, must be a non-member (as before)

### I/O operators:

```cpp
1 ﻿struct Vec {
2     ostream &operator<< (ostream &out) {
3         return out<<x<<' '<<y;
4     }
5 };
```

what's wrong with this? `v << cout`

so define `<<` `>>` as standalone function


certain operators must be members
*	`operator =`
*	`operator []`
*	`operator ->`
*	`operator ()`
*	`operator T (where T is a type)`

### Arrays and Objects

```cpp
1 ﻿struct Vec {
2     int x, y;
3     Vec (int x, int y):
4         x {x}, y {y} {}
5 };
6 
7 // WRONG:
8 Vec *vp = new Vec[10];
9 Vec moreVec[15];
```

must be initialized individual , wants to call default ctor on each item, there isn't one, can't initialize.

Options:

1. Provide a default ctor
2. For stack array:
`Vec moreVecs[3] = {{0,0} {1,3} {2,4}};`
3. For heap arrays: create an array of ptrs
`Vec **moreVec = new Vec*[3]`

### Separate Compilation for Classes

Node.h

```cpp
1 ﻿#ifndef _NODE_H_
2 #define _NODE_H_
3 
4 struct Node {
5     int data;
6     Node *next;
7     
8     explicit Node (int d, Node *n = nullptr);
9     Node (const Node &n);
10 };
11 
12 #endif
```

Node.cc

```cpp
1 ﻿#include "Node.h"
2 
3 Node::Node (int data, Node *next):
4     data {data}, next {next} {}
5 
6 Node::Node (const Node &n):
7     data {n.data}, next {...} {}
```

`::` called the scope resolution operator
Node:: means in the context of struct Node, the LHS is a class, not an object

### Const Object

```cpp
1 ﻿int f (const Node &n) { ... }
2 // arise often, especially as params
```

what is a const object? can't change its fields

can we call methods on a `const` object?

yes, can call methods that promise not to modify fields

```cpp
1 ﻿struct Student {
2     float grade() const;
3 };
```

doesn't modify fields, compiler checks that `const` methods don’t modify fields, only `const` methods can be called on `const` objects

want to collect usage stats on student objects.

```cpp
1 ﻿struct Studnet {
2     int numCalls = 0;
3     float Grade () { // not can't call on const students
4         ++ numCalls; // changing numCallsaffects the physical constness
5         // i.e. bit patter of the obj, but not logical constness
6     }
7 };
```

want to be able to update some fields even if the object is const, declare the field mutable

```cpp
1 ﻿struct Studnet {
2     mutable int numCalls = 0;
3     float grade() const {
4         ++ numCalls;
5         return 100;
6     }
7 };
```

## Lecture 11

recall

```cpp
1 ﻿Struct Student {
2     int assns, mt, final;
3     mutable int numMethodCalls = 0;
4     float grade() const {
5         ++ numMethodCalls;
6         return 0;
7     }
8 };
```

### Static Field & Method

`numMethodCalls` track the number of times a method was called a particular object

what if we want to track the number of times a method is called over all student objects

or what if we want to track how many students are created

### Static Members

associated with the class itself, not with any particular object

```cpp
1 ﻿struct Student {
2     ...
3     static int numInstances;
4     Student() {
5         numInstances++;
6     }
7 };
```

`int Student::numInstances = 0; // in .cc file`
*	static fields must be defined external to the class

### Static Methods
*	don’t depend on a specific instance
*	can only access static fields & call other static methods

```cpp
1 ﻿struct Student {
2     static int numInstances;
3     static void printNumInstances(){
4         cout << numInstances << endl;
5     }
6 };
7 
8 Student billy;
9 Student jane;
10 Student::printNumInstances();
```

### Invariants and Encapsulation

```cpp
1 ﻿struct Node {
2     int data;
3     Node *next;
4     Node (int d, Node *n);
5     ~Node(){ delete next;}
6 }
7 
8 Node n1 {1, new Node {2, nullptr}};
9 Node n2 {2, nullptr};
10 Node n3 {4, &n2};
```

what happens when these go out of scope?

`n1` - dtor runs, list is deleted, ok

`n2` `n3` go out of scope, `n3`'s dtor attempts to delete `n2`

but `n2` is on the stack, not on the heap, undefined behavior

class `Node` relies on an assumption to proper operation that next is either `nullptr` or a valid ptr to the heap

this is an invariant - a statement that holds true - that next is either `nullptr` or valid heap ptr - upon which Node relies. but we can't guarantee this invariant - no control over the user - can't guarantee any invariant

e.g. a stack - invariant - last item pushed is first item popped
*	but not if the client can manipulate the underlying data

hard to reason about programs if you can't rely on invariants

introduce encapsulation, want clients to treat objects as black boxes - capsules
*	implementation details sealed away
*	can only interact via provided methods
*	creates an abstraction, regains control over our objects

```cpp
1 ﻿struct Vec {
2     Vec (int x, int y);
3 private:
4     int x, y;
5 public:
6     Vec operator+ (const Vec &v);
7 }
```

`public`: anyone can see

`private`: can only be accessed inside `class Vec`

default visibility in struct - `public`

in general want field to be `private`, only method should be `public`

better to have default visibility - `private`

switch from struct to class

```cpp
1 ﻿class Vec {
2     int x, y;
3 public:
4     Vec (int x, int y);
5     Vec operator+ (const Vec &v);
6 };
```

different between struct and class is default visibility

public in struct, private in class

```cpp
1 ﻿// list.h
2 class List {
3     struct Node; // private nested class, only accessible within List
4     Node *theList = nullptr;
5 public:
6     void addToFront (int n);
7     int ith (int i);
8     ~List();
9 };
10 
11 // list.cc
12 #include "list.h"
13 
14 struct List::Node {
15     int data;
16     Node *next;
17     Node (int d, Node *n){}
18     ~Node(){delete next};
19 };
20 
21 void List::addToFront (int n) {
22     theList = new Node {n, theList};
23 }
24 
25 int List::ith (int i) {
26     Node *cur = theList;
27     for (int n=0;n<i && cur; ++n, cur=cur->next);
28     return cur->data;
29 }
30 
31 List::~List(){delete theList;}
```

only List can create/manipulate Node objects,

can guarantee the invariant the `next` is always `nullptr` or a valid heap pointer

but now we can’t traverse the list from node to node as would a liked list

repeatedly calling `ith` to access the whole list is $O(n^2)$ time

but we can't expose the nodes or we lose encapsulation

### SE topic: design patterns

certain problems arise frequently
keep track of good solutions, use them in similar situations

iterator pattern

create a class that manages access to `Nodes`

abstraction of a pointer

walk the list without exposing the actual pointers

```cpp
1 ﻿class List {
2     struct Node;
3     Node *theList;
4 public:
5     class Iterator {
6         Node *p;
7     public:
8         explicit Iterator(Node *p):p{p}{}
9         int &operator* {return p->data;}
10         Iterator &operator++() {
11             p=p->next;
12             return *this;
13         }
14         bool operator== (const Iterator &other) {
15             return p==other.p;
16         }
17         bool operator!= (const Iterator &other) {
18             return p!=other.p;
19         }
20     };
21     
22     Iterator begin() { return Iterator (theList); }
23     Iterator end() { return Iterator (nullptr); }
24 };
```

```cpp
1 ﻿// client:
2 
3 int main () {
4     List l;
5     l.addToFront(1);
6     l.addToFront(2);
7     l.addToFront(3);
8     for (List::Iterator it=l.begin(); it != l.end(); it++) {
9         cout << *it << endl;
10     }
11 }
```

shortcut: automatic type deduction

```cpp
auto x = y; // gives x the same type as y
```

alt:

```cpp
for (auto it=l.begin();...)
```

shortcut

```cpp
for (auto n: l) { // ranged based for loop
	cout << n << endl;
}
```

available for any class with 
*	methods `begin`, `end` that produce iterators
*	iterators must support  `!=` `++` `*`

if you want to modify the items in the list (or save copying)

```cpp
1 ﻿for (auto &n : l) {
2     ++ n;
3 }
```

## Lecture 12

Recall:

```cpp
1 ﻿class List {
2     struct Node;
3     Node *theList;
4 public:
5     class Iterator {
6         Node *p;
7     public:
8         explicit Iterator (Node *p);
9     };
10     
11     Iterator begin() {return Iterator{theList};}
12     Iterator end() {return Iterator{nullptr};}
13 };
```

But List client can create iterators directly

```cpp
1 ﻿auto it = List::Iterator (nullptr);
```

violates encapsulation - client should be called begin/end

we would 
*	make Iterator's ctor private 
*	then client can’t call `List::Iterator`
*	but then neither can List
*	solution: give List privileged access to Iterator - make it a `friend`

```cpp
1 ﻿class List {
2     ...
3 public:
4     class Iterator {
5         Node *p;
6         explicit Iterator (Node *p);
7     public:
8         ...
9         friend class List;
10     };
11     ...
12 };
```

Now, List can still create iterators, but client can only create iterators by calling begin/end

Give your classes as few friends as possible (weakens encapsulation)

Once again, keep fields private,

What if you want to give clients access to fields? Use accessors/mutator (getter/setter) method

```cpp
1 ﻿class Vec {
2     int x, y;
3 public:
4     int getX() const { return x;}
5     void setY(int newY) {y = newY;}
6 };
```

What about operator `<<`? needs `x` & `y`, but can’t be a member function. If `getX` and `getY` defined, it is okay

but if you don’t want to provide getX, getY, make `operator<<` a friend function

```cpp
1 ﻿// .h
2 class Vec {
3     ...
4 public:
5     ...
6     friend std::ostream &operator<< (std::ostream &out, const Vec &v);
7 };
```

```cpp
1 ﻿// .cc
2 ostream &operator<< (ostream &out, const Vec &v) {
3     return out << v.x << ' ' << v.y << endl;
4 }
```

### Tool Topic Make:

Separate compilation:

```sh
g++14 -c list.cc
g++14 -c node.cc
g++14 -c iter.cc
g++14 -c main.cc
g++14 main.o iter.o node.o list.o -o myprogram
```

why do we do this? so we don’t have to recompile files that haven't changed.

but how do we keep track of what’s changed & what hasn't Let Linux help you with - `make`

Create a Makefile that says which files depend on which other files

```
myprogra: main.o list.o node.o iter.o
	g++-5 -std=c++14 main.o list.o node.o iter.o -o myprogram

list.o: list.cc list.h node.h
	g++-5 -std=c++14 -c list.cc

node.o: node.cc node.h list.h
	g++-5 -std=c++14 -c node.cc

iter.o : iter.cc list.h
	g++-5 -std=c++14 -c iter.cc

main.o: main.cc list.h
	g++-5 -std=c++14 -c main.cc
```

then from the command list: 

```sh
make
```

- builds the whole project

now, change `iter.cc`

```sh
make
```

- recompiles `iter.cc`
- relinks `myprogram`

Command `make` - builds the first target (`myprogram`) in the Makefile

what does my target depend on? `main.o list.o …`

recursively build these, if necessary

common practice: put a target clean: at the bottom of the Makefile to remove all binaries

```
…
.PHONY: clean

clean:
	rm *.o myprogram
```

generalize with variables

```
CXX = g++-5 (complier's name)
CXXFLAGS = -std=c++14 -Wall (options for the compiler)
```

e.g.

```
iter.o: iter.cc iter.h
	${CXX} ${XXFLAGS} -c iter.cc
```


shortcut: for any rule of the form

`x.o: x.cc a.h …`

can leave out the build command, make guesses that the build command is `${CXX} ${CXXFLAGS} -c x.cc -o x.o`

biggest problem with writing  Makefiles
*	writing dependencies
*	and maintaining them if they change

can get help from g++

```sh
g++14 -MMD -c iter.cc
```
*	creates `iter.o` and `iter.d`
*	now just include this in the Makefile

```
CXX = g++-5
CXXFLAGS = -std=c++14 -Wall -MMD
OBJECTS = main.o list.o iter.o node.o
DEPENDS = ${OBJECTS: .o=.d}
EXEC = myProgram

${EXEC}: ${OBJECTS}
	${CXX} ${CXXFLAGS} ${OBJECTS} -o ${EXEC}

-include ${DEPENDS}
```

as the project expands just add `.o` files in the Makefile

### System Modelling

Building a system involves identifying obstruction and formalizing the relationships among them

helps to map out relationships

popular standard: UML (Unified Modeling Language)

Modeling a class

| Vec |
|-----|
|-x: Integer|
|-x: Integer|
||
|+getX: Integer|
|+getY: Integer|

`-` private

`+` public

relationship: composition

```cpp
1 ﻿class Vec {
2     int x, y;
3 public:
4     Vec (int x, int y);
5 };
6 
7 class Basis {
8     Vec v1, v2;
9 };
10 
11 Basis b; // WRONG can't initialize v1, v2
12 // default ctor for b calls default ctor for v1, v2 which don't exist
13 
14 class Basis {
15     Vec v1, v2;
16 public:
17     Basis(): v1{1,0}, v2{0,1}{}
18 };
```

embedding one obj(v1) into another (b) - called composition

relationship between basis and vec is called "owns-a"
A basis owns two vecs

If A owns a B, then typically:
*	B has no identity outside of A
*	if A is destroyed, B is destroyed
*	if A is copied, B is copied

## Lecture 13

If A "owns" B, then typically
*	B has no identity outside of A (B is part of A)
*	A destroyed => B destroyed
*	A copied => B copied  (deep copies)

Implementation: usually as composition of classes

Means A owns some number of B

Can annotate with multiplicities, field names, etc.

### Aggregation

Compare parts in a car ("owns a") vs car parts in a catalogue.

The catalogue contains the parts, but the parts have an independent existence.

This is a "has a" (aggregation) relationship

If A has a B, then typically,
*	B has an existence apart from its association with A
*	If A is destroyed, B lives on
*	If A is copied, B is not (shallow copies), copies of A share the same B

e.g. Parts in a catalogue, ducks in a pond

Typical implementation: pointer fields

```cpp
1 ﻿class Pond {
2     Duck *ducks;
3 };
```

### Specialization / Generalization (Inheritance)

Suppose you want to track your collection of books

```cpp
1 ﻿class Book {
2     String title, author;
3     int numPages;
4 public:
5     Book(...){}
6 };
```

For textbooks, also want the topic

```cpp
1 ﻿class Text {
2     string title, author;
3     int numPages;
4     string topic;
5 public: Text (){}
6 };
```

For comic books, want the hero

```cpp
1 ﻿class Comic {
2     string title, author;
3     int numPages;
4     string hero;
5 public : Comic(){}
6 };
```

This is ok, but it does not capture any relationships among books, text, comic.

And how do we create an array (or other collection) with a mixture of these?

Could:
*	Use a Union

```cpp
1 ﻿union BookTypes {Book *b, Text *t, Comic *c};
2 BookTypes myBooks[20];
```

But does not know which is which

*	Array of void *
Both solutions subvert the type system

Rather, observe, text and comics are kinds of books, books with extra features.

C++ model with inheritance

```cpp
1 ﻿class Book { // Base class or superclass
2     string title, author;
3     int numPages;
4 public:
5     Book() {}
6 };
7 
8 class Text : public Book { // derived class, subclasses
9     string topic;
10 public:
11     Text () {}
12 };
13 
14 class Comic : public Book {
15     string hero;
16 public:
17     Comic () {}
18 };
```

Derived classes inherit fields and methods from the base class

So Text, Comic get title, author numPages fields

Any method that can be invoked on Book can be called on Text, Comic

Who can see these members?

Title, author, numPages - private in Book

Can Text, comic see them? No - even subclasses can't see them

How do we initialize Text?

```cpp
1 ﻿// WRONG!!
2 class Text : public Book {
3     string topic;
4 public:
5     Text (string title, string author, int numPages, string topic):
6         title{title}, author {author}, numPages {numPages}, topics {topics}
7     {}
8 };
```

Wrong for two reasons
*	 Title etc are not accessible to Text
*	Once again, when an object B constructed
	*	Space is allocated
	*	Superclass part is constructed
	*	Fields are constructed
	*	Ctor body runs
		And (b) doesn’t work, Book has no default ctor

Fix: invoke `Book`'s ctor in `Text`'s member initialization list (MIL)

```cpp
1 ﻿class Text : public Book {
2     string topic;
3 public:
4     Text (string title, string author, int numPages, string topics)
5         : Book {title, author, numPages}, topics {topic}{}
6 };
```

If the super class has no default ctor, subclass must invoke a Book ctor in its MIL

Good reasons to keep superclass fields inaccessible to subclasses
If you want to give subclasses access to certain members, use protected access:

```cpp
1 ﻿class Book {
2 protected: // accessible to the book itself and its subclasses
3     string title, author;
4     int numPages;
5 public:
6     BookP(...);
7 };
```

```cpp
1 ﻿class Text : public Book {
2     ...
3 public:
4     ...
5     void addAuthor(string newAuthor) {
6         author += newAuthor;
7     }
8 };
```

Not a good idea to give subclasses unlimited access to fields.

Better make fields private, but provide protected accessors

```cpp
1 ﻿class Book {
2     stirng title, author;
3     int numPages;
4 protected:
5     string getTitle () const;
6     void setAuthoer (string newAuthor);
7 public:
8     Book (...);
9     bool isItHeavy () const;
10 };
```

Relationship among Book, Text, Comic is called "is a"

Implement "is a" by public inheritance

Now consider the method `isItHeavy` when is a book heavy

For ordinary books: > 200 pages

For text > 500 pages

For comic > 30 pages

```cpp
1 ﻿class Book {
2     ...
3 public:
4     ...
5     bool isItHeavy () const {return numPages > 200; }
6 };
7 
8 class Text : public Book {
9     ...
10 public:
11     ...
12     bool isItHeavy () const {return numPages > 500; }
13 };
14 
15 Book b {"A small book", "Papa smurf", 50};
16 Comic c {"A big comic", "...", 40, "..."};
17 
18 cout << b.isItHeavy() << endl; // false
19 cout << c.isItHeavy() << endl; // true
20 
21 Book b = Comic {"A big comic", "...", 40, "..."};
22 
23 cout << b.isItHeavy() << endl; // ??
```

NO!!! B is not heavy. `Book::isItHeavy()` is what runs

`Book b = Comic {…}`

Tries to fit a comic object where there is only space for a book. Comic is sliced - hero field is chopped off, comic coerced into a book

So Book `b = Comic {…}` converts a Comic into a Book and `Book::isItHeavy` runs

When access objects through pointers,

Slicing is unnecessary and does not occur.

```cpp
1 ﻿Comic c {...,...,40,...};
2 
3 Book *pb = &c;
4 Comic *pc = &c;
5 
6 cout << pc->isItHeavy(); // true
7 cout << pb->isItHeavy(); // false
```

Still, `Book::isItHeavy()` runs when we access `pb->isItHeavy()`

Same object behaves different, depending on what type of ptr points to it.

## Lecture 14

```cpp
1 ﻿Comic c {...,...,40,...};
2 Book *pb = &c;
3 Comic *pc = &c;
4 
5 pc->isItHeavy() // true
6 pc->isItHEavy() // false
```

Compiler uses the typr of the ptr (or ref) to decide which isItHeavy to run.

Does not consider the actual type of the object

So a comic is only a comic if a comic ptr points at it.

How do you make Comic act like a comic even when pointed at by a Book ptr?

### Declare the method virtual

```cpp
1 ﻿class Book {
2     ...
3 protected:
4     int numPages;
5 public:
6     Book();
7     virtual book isItHeavy() const;
8 };
9 
10 class Comic : public Book {
11     ...
12 public:
13     bool isItHeavy() override;
14 };
15 
16 Comic c {...};
17 Book *pb = &c; // true
18 Book &rb = c; // true
19 Comic *pc = c; // true
20 Book b = c; // false
```

Virtual methods - chosen based on the actual type of the object at runtime.

Accommodates multiple types under one abstraction: **polymorphism** ("many forms")

Note: this is why a function void f (istream &in)
Can be passed an ifsream - ifstream is a subclass of istream

```cpp
DANGER
1 ﻿class One {
2     int x, y;
3 public:
4     One (int x=0, int y=0)
5         : x{x}, y{y} {}
6 };
7 
8 class Two : public One {
9     int z;
10 public:
11     Two (int x=0,int y=0, int z=0)
12         : One{x,y}, z{z} {}
13 };
14 
15 void f (One *a)
16 {
17     a[0] = {6,7};
18     a[1] = {8,9};
19 }
20 
21 Two myArray[] = {{1,2,3},{4,5,6}};
22 
23 f(myArray);
myArray:
123	456

myArray
678	956
```

Never use arrays of objects polymorphically

If you want polymorphism - array of ptrs

Dtor revisited

```cpp
1 ﻿class X {
2     int *x;
3 public:
4     X (int n) : x{new int[n]} {}
5     ~X () { delete [] x; }
6 };
7 
8 class Y {
9     int *y;
10 public:
11     Y (int m, int n) :X{n} y{new int[m]} {}
12     ~Y () {delete [] y;}
13 };
14 
15 //USE valgrid to use detect leak
```

```cpp
1 ﻿X *myX = new Y {5, 10};
2 delete myXl
```

leaks memory!

Calls `~X` but not `~Y`

So only x, but not y, is freed

To ensure that deletion through a superclass ptr calls the subclass dtor - declare the dtor virtual

```cpp
1 ﻿class X{
2     ...
3 public:
4     ...
5     virtual ~X();
6 };
7 
```

ALWAYS make the dtor virtual in classes that are meant to be classes

even if the virtual dtor does nothing

If class is not meant to be subclass declare it final

```cpp
1 ﻿class Y final : public X {
2     ...
3 };
```

### Pure virtual methods abstraction class

```cpp
1 ﻿class Student {
2 protected:
3     int numCourses;
4 public:
5     ...
6     virtual int fees () const;
7 };
8 
9 // 2 kinds of students: regular & coop
10 
11 class Regular : public Student {
12 public:
13     int fees () const override;
14 };
15 
16 class CoOp : public Student {
17 public:
18     int fees () const override;
19 };
```

What do we put for `Student::fees`?

Don’t know - every student should be regular or coop

Can explicitly `give Student::fees` no implementation

```cpp
1 ﻿class Student {
2     ...
3 public:
4     virtual int fees () const = 0;
5     // no implementation called a pure virtual method
6 };
```

A class with a pure virtual method cannot be instantiated
Called an abstract class

`Student s; // not allows, purpose is to organize subclass`

Subclasses of abstract classes are abstract, unless they implement ALL pure virtual method.

Non-abstract classes are called concrete classes.

UML virtual & pure virtual method: italics

Abstract class - class name in italics, protected: #

### Inheritance and copy/move

```cpp
1 ﻿class Book {
2     ...
3 public:
4     // defines all copy/move operations
5 };
6 
7 class Text : public Book {
8     ...
9 public:
10     // des not define copy / move operations
11 };
12 
13 Text t {"Algorithms", "CLRS", 500, "CS"};
14 Text t2 = t; // no copy ctor in text - what happens?
```

*	Calls Book's copy ctor
*	Then goes field-by-field (i.e. default behavior) for the Text part
*	Same for other operators

To write your own:

```cpp
1 ﻿Text::Text (const Text &other)
2     : Book {Text}, topic {other.topic} {}
3 
4 Text &Text::operator= (const Text &other) {
5     Book::operator= (other);
6     topic = other.topic;
7     return *this;
8 }
9 
10 Text::Text (Text &&other)
11     : Book {std::move(other)}, topic{std::move(other)} {}
12 
13 
14 Text &Text::operator= (Text &&other) {
15     Book::operator= (std::move (other));
16     topic = std::move(other.topic);
17 }
```

Even though other points at an rvalue, other itself is an lvalue

`Std::move()` forces lvalue x to be treated as an rvalue, so that move version of operations run

## Lecture 15

```cpp
Text t1 {...}, t2 {...};
Book *pb1 = &t1, *pb2 = &t2;
*pb1 = *pb2; // Book::operator= runs
```

Partial assignment - copies only the Book part

How can we fix this? Try making `operator=` virtual

```cpp
class Book {
	...
public:
	virtual Book & operator= (const Book & other);
};

class Text : public Book {
	...
public:
	Text & operator= (const Book &other) override;
};
```

Note: different return types, but parameter types must be the same, or it is not an override (and won't compile).

Assignment to a Book object to a Text variable would be allowed:

```cpp
Text t {...};
Book b {...};
Text *pt = &t;
Book &pb = &b;
*pt = *pb;
```

Uses a Book to assign a Text, BAD but it compiles.

Also:

```cpp
Comic c {...};
Comic *pc = &c;
*pt = *pc;
```

If `operator=` is non-virtual, partial assignment though base class parts;

If `virtual`, compiler allows mixed assignment.

Recommendation:	All super classes should be `abstract`.

Rewrite Book hierarchy:

| Abstract Book |   |   |
|---|---|---|
| /\ | | |
| \|\| | |
| Normal Book | Text | Comic |

```cpp
class AbstractBook {
	string title, author;
	int numPages;
protected:
// protected modifier prevents assignment through base class pointers from compiling
// but implementation still available to subclasses
	Abstract Book & operator= (const Abstract Book & other);
public:
	Abstract Book (...);
	virtual ~AbstractBook () = 0; // Need at least one pure virtual method
	// If you don't have one, use the dtor
};

class NormalBook : public AbstractBook {
public:
	NormalBook (...);
	~NormalBook (...);
	NormalBook & operator= (const NormalBook & other) {
		AbstractBook::operator= (other);
		return *this;
	}
}

// Other classes - similar
```

This solution prevents partial & mixed assignment.

Note: `virtual` dtor MUST be implemented, even though it is pure virtual.

`AbstractBook::~AbstractBook() {}`

### Templates

Huge topic - just the highlights

```cpp
class List {
	struct Node;
	Node *p;
	...
};

class List::Node {
	int data;
	Node * next;
};
```

What if you want to store something else? Whole new class?

Or a `template` - class parameterized by a type

```cpp
template <typename T> class stack {
	int size;
	int cap;
	T * contents;
public:
	Stack () {...}
	void push (T x) {...}
	T top () {...}
	void pop() {...}
};

template <typename T> class List {
	struct Node {
		T data;
		Node * next;
	};
	Node * theList;
public:
	class Iterator {
		Node *p;
		explicit Iterator (Node * p) : p{p} {}
	public:
		T & operator* () {return p->data; }
	}

	T ith (int i) {...}
	void addToFront (T n) {...}
}


// Client:
List <int> l1;
List <List <int>> l2;
l1.addToFront(3);
l2.addToFront(l1);
for (List<int>::Iterator it = l1.begin(); it != l1.end(); ++it) {
	...
}
```

Compiler specializes templates at the source code level, before compilation.

Note: all template code in `.h` file

### The Standard Template Library (STL)

Large # of useful templates

e.g. dynamic-length arrays: `vector`

```cpp
#include <vector>

using namespace std;

vector <int> v {4,5};
v.emplace_back(6); // 4,5,6
v.emplace_back(7); // 4,5,6,7

// Note:

vector <int> v (4,5); // produce {5,5,5,5}
```

looping over vectors:

```cpp
for (int i=0;i<v.size();++i) {
	cout << v[i] << endl;
}

for (vector<int>::iterator it = v.begin(); it != v.end(); ++i) {

}

// or

for (auto n : v) {
	...
}

// to iterate in reverse

for (vector<int>::reverse_iterator it = v.rbegin(); it != v.rend(); ++i) {

}
```

use iterator to remove items from a vector

```cpp
auto it = v.erase (v.begin()); // erase item 0
// returns an iterator to the first item after the erase

it = v.erase (v.begin() + 3); // erase 4th item

it = v.erase(it); // erase item pointed by it

it = v.erase(it.end()-1); // erase the last item

v.pop_back() // remove last element
```

`v[i];`

*	returns the ith element of v
*	unchecked: if you go out of bounds - undefined behavior

`v.at(i)`

*	check version of `v[i]`
*	what happens when you go out of bounds?

Problem:

*	vector's code can detect the error, but doesn't know what to do about it.
*	client can respond, but can't detect the error

C solution:

*	function return a status code or set the global variable error number
*	leads to awkward programming
*	encourages programmers to ignore error checks

C++ solution:

*	when an error condition occurs, the function raises an exception

## Lecture 16

### Exception

C++ when an error condition arises, function raises an exception.

What happens? By default, execution stops. But we can write *handlers* to *catch* exceptions and deal with them.

`vector<T>::at` raises an exception `std::out_of_range` when it fails.

Handles as follows:

```cpp
#include <stdexcept>
...
try {
	cout << v.at(1000) << endl; // statement that may raise an exception go in the try block
} catch (out_of_range r) { // exception type and actual object
	cerr << "range error" << r.what() << endl;
}
```

Now consider:

```cpp
void f() {
	throw out_of_range ("f");
}

void g() { f(); }
void h() { g(); }

int main() {
	try {
		h();
	} catch (out_of_range) {
		...
	}
}
```

What happens? `main` calls `h`, `h` calls `g`, `g` calls `f`, `f` throws. `g` has no handler for `out_of_range`, control goes back through the call chain (*unwinds* the stack) until a handler is found.

control goes all the way back to `main`, `main` handles the exception. If no handlers in the entire call chain, program terminates.

What is `out_of_range`? A class.

`throw out_of_range {"f"};` invokes `out_of_range`'s ctor with argument "f" <- auxiliary info

To examine that info:

```cpp
try {...}
catch (out_of_range ex) {
	cout << ex.what() << endl;
}
```

A handler can do part of the recovery job - execute some corrective code and throw another exception.

```cpp
try {...}
catch (someErrorType s) {
	...
	throw SomeOtherException("...");
}
```

OR: throw the same exception:

```cpp
try {...}
catch (someErrorType s) {
	...
	throw;
}
```

`throw;` 

*	actual type of `s` is retained

`throw s;`

*	`s` may be a subtype of `someErrorType`
*	rethrows a new exception of type `someErrorType`

A handler can act as a catch-all:

```cpp
try {}
catch (...) { // literally dot dot dot
	//...
}
```

You can throw anything you want. Don't have to throw objects.

Define your own classes (or use appropriate existing ones) for errors

```cpp
class BadInput {};
try {
	int n;
	if (!(cin>>n)) throw BadInput{};
} catch (BadInput &) { // caught by reference, prevents slicing
	cerr << "Input not well-formed" << endl;
}
```

Note:

```cpp
class BaseExn {};
class DrivedExn : public BaseExn {} ;

void f() {
	DrivedExn d;
	BaseExn &b = d;
	throw b;
}
...
try {
	f();
}
catch (BaseExn &b) {}
catch (DerivedExn &d) {}
```

Which handler runs? `BaseExn` handler runs, the type of the reference (i.e. the static type of the object) determines the handler.

Some standard exceptions:

`length_error`: attempting to resize strings/vectors that are too long

`bad_alloc`: `new` fails

`ios::failure`: I/O streams fails in some way

NEVER EVER, let a dtor throw an exception. If the dtor that throws is executed during stack unwinding while dealing with another exception, you now have two active unhandled exceptions and the program will abort immediately.

### Design Pattern continued

Guiding principle: program with interfaces, not implementations

*	abstract base classes to define interface
*	work with pointers and references to abstract base classes and call their methods
*	concrete subclasses can be swapped in and out
*	abstraction over a variety of behaviors

```cpp
class List {
	struct Node;
	Node theList;
public:
	class Iterator : AbstractIterator {

	};
};

class AbstractIterator {
public:
	virtual int & operator* () = 0;
	virtual AbstractIterator & operator++ () = 0;
	virtual bool operator!= (...) = 0;
	virtual ~AbstractIterator();
};

class Set {
public:
	class Iterator : public AbstractIterator {

	};
};
```

Then you can write code that operates over iterators:

```cpp
template <typename T>
void foreach (AbstractIterator start, AbstractIterator end, T f) {
	while (start != end) {
		f (*start); // f has to be something callable
		++ start;
	}
} // works on lists and sets

List &l;
foreach (l1.begin(), l1.end(), somefunction);
```

### Observer Pattern

publish-subscribe model

One class: publisher/subject - generates data

One ore more subscriber/observer - receives data and react to it

e.g.

publisher: spreadsheet cells;
observer: charts - cell changes => charts update

can be many different kinds of observer objects - subject should not need to know details

![observer-pattern-uml](http://tonyli.tk/notes/cs246/observer-pattern-uml.png "observer-pattern-uml")

## Lecture 17

Sequence of method calls:

1.	Subject's state is updated
2.	Subject's `notifyObservers()` calls each observer's notify
3.	Each observer calls `ConcreteSubject::getState` to query the sate & acts accordingly

Example: Horse races

Subject - publishers winners

Observer - individual bettors

```cpp
class Subject {
	vector <Observer *> observers;
public:
	Subject();
	void attach(Observer *ob) {
		observers.emplace_back(ob);
	}
	void detach(Observer *ob) {
		// remove ob from observers
	}
	void notifyObservers() {
		for (auto &ob : observers) ob->notify();
	}
	virtual ~Subject() = 0;
};

Subject::~Subject() {}

class Observer {
public:
	virtual void notify() = 0;
	virtual ~Observer();
};

class HorseRace : public Subject{
	ifstream in; // source of data
	string lastWinner;
public:
	HorseRace(string source): in{source} {}
	bool runRace(); // turn if successful
	string getState() {return lastWinner;}
};

class Bettor : public Observer {
	HorseRace * subject;
	string name, myHorse;
public:
	Bettor (...) : ... {
		subject->attach(this);
	}
	void notify() override {
		string winner = subject->getState();
		cout << ((winner == myHorse) ? "Win!" : "Lose") << endl;
	}
	~Better() {
		subject->detach(this);
	}
}

int main() {
	HorseRace hr;
	Bettor Larry (&hr, "Larry", "RunLikeACow");
	// ... other bettors
	while (hr.runRace()) {
		hr.notifyObservers();
	}
}
```

### Simplifications

1.	If only one subject, could merge subject and concrete subject
2.	If the state is trivial (so that just being notified tells you all you need to know) don't need `getState`
3.	If the subject is the observer, (e.g. cells in a grid) could merge these classes

### Decorator Pattern

want to enhance an object at runtime (add functionality/features)

e.g. window system: start with a basic window, add scrollbar, add menu

want to choose these enhancement at runtime

![decorator-pattern-uml](http://tonyli.tk/notes/cs246/decorator.png "decorator-pattern-uml")

Component - defines the interface - operations your objects will provide

ConcreteComponent - implements the interface

Decorators - all inherit from Decorator, which inherits from component

Every Decorator is a component and every Decorator has a component

e.g. Window with scrollbar is a window and has a ptr to the underlying plain window

Window with a scrollbar and menu is a window and has a ptr to window with scrollbar which has a pointer to a basic window.

e.g. Pizza

```cpp
class Pizza {
public:
	virtual float price() const = 0;
	virtual string desc() const = 0;
	virtual ~Pizza();
};

class CrustAndSauce : public Pizza {
public:
	float price() const override { return 5.99; }
	float desc() const override { return "Piazza"; }
};

class Decorator : public Pizza {
protected:
	Pizza *component;
public:
	Decorator(Piazza *p): component{p} {}
	virtual ~Decorator() {delete component; }
};

class StuffedCrust : public Decorator {
public:
	StuffedCrust (Pizza *p): Decorator{p} {}
	float price() const override { return component->price() + 2.69; }
	string desc() const override { return component->desc() + " with stuffed crust"; }
};

class Topping : public Decorator {
	string theTopping;
public:
	Topping (Pizza *p, string topping) : Decorator {p}, theTopping {topping} {}
	float price() const override { return component->price() + 0.75; }
	string desc() const override { return component->desc() + " with " + topping; }
};

int main() {
	Pizza *p1 = new CrustAndSauce;
	p1 = new Topping (p1, "cheese");
	p1 = new Topping (p1, "mushrooms");
	p1 = new StuffedCrust(p1);
	cout << p1->desc() << " " << p1->price() << endl;
	delete p1;
}
```

### Factory Method Pattern

Write a video game with 2 kinds of enemies: turtles and bullets

System randomly sends turtles & bullets, but bullets become more frequent in later levels

Never know exactly which enemy comes next, so don't call ctors directly.

![factory-pattern-uml](http://tonyli.tk/notes/cs246/genericUml.png "factory-pattern-uml")

Instead, put a factory method inside level that creates enemies

```cpp
class Level {
public:
	virtual Enemy * createEnemy() = 0;
};

class NormalLevel : public Level {
public:
	Enemy * createEnemy () override {
		// mostly turtles
	}
};

class Castle : public Level {
public:
	Enmey * createEnemy () override {
		// mostly bullets
	}
};

int main () {
	Level *l = new NormalLevel;
	Enemy *e = l->createEnemy();
}
```

## Lecture 18

### Template Method Pattern

Want subclasses to override superclass behavior, but some aspect must stay the same.

e.g. there are red and green turtles

```cpp
class Turtle {
public:
	void Draw () {
		drawHead();
		drawShell();
		drawFeet();
	}

private:
	void drawHead();
	void drawFeetw();
	virtual void drawShell () = 0;
};

class RedTurtle : public Turtle {
	void drawShell () override; // draw red shell
};

class GreenTurtle : public Turtle {
	void drawShell () override; // draw green shell
};
```

Subclasses can't change the way a turtle is `draw` (`head, shell, feet`) but can change the way the shell is drawn.

Extension: The Non-Virtual Interface (NVI) idiom

*	A public virtual method is really two things:
	*	An interface to the client
	*	Indicates provided behavior with pre/post conditions
	*	An interface to subclasses
	*	A "hook" to insert specialized behavior
*	Hard to separate these idea is they are tied to the same functions
	*	What if you later want to separate the customizable behavior into two functions, maybe with some unchanging code in between, while still providing clients the same interface?
	*	How could you make sure overriding function conform to the pre/post conditions.

The NVI idioms ways:
*	All public methods should be non-virtual
*	All virtual method should be private or at least protected.
*	Except the dtor

Example

```cpp
class DigitalMedia {
public:
	virtual void play() = 0;
};

// In NVI

class DigitalMedia {
public:
	void play() {
		doPlay();
		// can add before/after code
		// e.g. check copyright, update play count
	}
private:
	virtual void doPlay() = 0;
	// add another virtual "hook"
	virtual void displayCoverArt();
}
```

Extends template method: puts every virtual method inside a template method.

### STL Maps

for creating dictionaries

e.g. "arrays" that map strings to ints

```cpp
#include <map>

std::map <string, int> m;
m["abc"] = 1;
m["def"] = 4;
cout << m["ghi"] << endl; // print 0
cout << m["abc"] << endl; // print 1
```

if the key is not present, it is inserted, and the value is default constructed (for int, 0)

`m.erase("abc");`

`if (m.count("abc"))` 0 = not found, 1 = found

Iterating over a map: sorted key order fields

```cpp
for (auto &p : m) {
	count  << p.first << ' ' << p.second << endl;
}
```

`p`'s type is `pair<string, int> &` (utility)

### Tools Debugger

GUN debugger `gbd`

To use: must compile with `-g` (enables debugging info)

To run the debugger: `gdb ./a.out`

Command:

*	`r` (run) runs the program, if the program crashes - tells you which line
*	`bt` (backtrace) prints the chain of function calls that got you here
*	`l` (list) list the source surrounding the current point of execution
*	`p` (print) print the value of a var/expr

Break points: tell gdb to stop the program at certain points so you can see what's going on

`break f` break when entering function f

`break myfile.cc:15` break on myfile.cc like 15

`s` step - run one like

`c` continue - run till next breakpoint

### Visitor Pattern

For implementing double dispatch

virtual methods chosen based on the actual type (at runtime) of the object on which it is called

What if you want to choose based on two objects?

e.g. Striking enemies with various weapons

Want something like `virtual void strike(Enemy &e, Weapon &w)`

```cpp
class Enemy {
	virtual void beStuckBy (Weapon &w);
	// choose based on enemy, not on weapon
};

class Weapon {
	virtual void strike (Enemy &e);
	// choose based on weapon but not on enemy
};
```

Trick to get dispatch based on both:

Combine overriding with overloading

```cpp
class Enemy {
public:
	virtual void beStruckBy (Weapon &w)  = 0;
};

class Turtle : public Enemy {
public:
	void beStruckBy (Weapon &w) override {w.strike(*this);}
};

class Bullet : public Enemy {
public:
	void beStruckBy(Weapon &w) override {w.strike(*this);}
};

class Weapon {
public:
	virtual void strike (Turtle &t) = 0;
	virtual void strike (Bullet &b) = 0;
};

class Stick : public Weapon {
public:
	void strike (Turtle &t) override {
		// strike turtle with stick
	}

	void strike (Bullet &b) override {
		// strike bullet with stick
	}
};
```

```cpp
Enemy *e = new Bullet;
Weapon *w = new Rock;

e->beStruckBy(*w);
```

What happens?

`Bullet::beStruckBy` runs (virtual method)

*	calls `weapon::strike`, `*this` is Bullet
*	Bullet version of strike chosen at compile time
*	Virtual method call resolves to `Rock::strike(Bullet &);`

## Lecture 19

Recall: visitor pattern

```cpp
class Enemy {
public:
	virtual void beStruckedBy (Weapon & w) = 0;
};

class Turtle : public Enemy {
public:
	void beStruckedBy (Weapon & w) override { w.strike(*this); }
};

class Weapon {
public:
	virtual void strike (Turtle & t) = 0;
	virtual void strike (Bullet & t) = 0;
};

class Stick : public Weapon {
public:
	void strike (Turtle & t) override {
		// strike turtle with stick
	}
	void strike (Bullet & b) override {
		// strike bullet with stick
	}
};
```

Visitor can be used to add functionality to existing classes, without changing or recompiling the classes themselves.

E.g. Add a visitor to the Book hierarchy

```cpp
class Book {
public:
	virtual void accept (BookVisitor & bv) { bv.visit(*this); }
};
class Text : public Book {
public:
	void accept (BookVisitor &bv) override { bv.visit(*this); }
};
class BookVisitor {
public:
	virtual void visit (Book &b) = 0;
	virtual void visit (Text &t) = 0;
	virtual void visit (Comic &c) = 0;
};
```

Application: track how many books of each type I have. Use a `map<string.int>` - could add `virtual void updateCatalogue()` to each classes or write a visitor

```cpp
class Catalogue : public BookVisitor {
	map <string, int> theCat;
public:
	map <string, int> getCatalogue() { return theCat; }
	void visit (Book &b) { ++ theCat[b.getAuthor()]; }
	void visit (Text &t) { ++ theCat[b.getTopic()]; }
	void visit (Comic &c) { ++ theCat[b.getHero()]; }
};
```

book includes BookVisitor, BookVisitor includes text, text includes book - circular include dependency - won't be included - Text doesn't know what Book is.

### Compilation Dependencies

When does a compilation dependency exist?

Consider:

```cpp
class A {};

//compilation dependency need to know how big A is to know how big B,C are
#include "a.h"
class B : public A {};

#include "a.h"
class C {
	A myA;
};

// all pointers are the same size
class A;
class D {
	A * myA;
};

// affects type-checking only
class A;
class E {
	A f(A x);
};
```

If there is no compilation dependency necessitated by the code, don't introduce one with extra `#include`

when class A changes, only A, B, C need recompilation.

Now, in the implementation of D, E

```cpp
// b.cc
#include "a.h"
void D::f () {
	myA -> someMethod ();
}
```

need to know about class A here, a true compilation dependency

Do the `#include` in the `.cc` instead of the `.h`, where possible.

Now, consider the `XWindow` class

```cpp
class XWindow {
	Display *d;
	Window w;
	int s;
	GC gc;
	unsigned long colors [10];
public:
	...
};
```

This is private data, yet we can look at it, do we know what it all means, do we care?

What if I add or change a private member? All clients must recompile. Would be better to hide these details away.

Solution: pimpl idiom ("pointer to implementation")

crate a second class XWindowImpl

```cpp
// XWindowImpl.h

#include <X11/Xlib.h>

struct XWindowImpl {
	Display *d;
	Window w;
	int s;
	GC gc;
	unsigned long color [10];
};

// ====

// window.h

// no need to include xlib.h
class XWindowImpl; // forward declare

class XWindow {
	XWindowImpl * pImpl;
public:
	...
};

// window.cc

#include "window.h"
#include "XWindowImpl.h"

XWindow::XWindow (...) : pImpl {new XWindowImpl} {}

// destroy pImpl in dtor

// Other method: replace fields d,w,s with pImpl->d pImpl->w ...
```

If you keep all private fields in `XWindowImpl` then only window.cc needs to be recompiled if you change `XWindow`'s implementation.

Generalization: What if there are several possible window implementation XWindows and YWindows? Then make the Impl struct a superclass

pImpl idiom with class hierarchy of implementation is call the **bridge pattern**

![bridge-uml](http://tonyli.tk/notes/cs246/Bridge.png "bridge-uml")

### Measures of Design Quality

Coupling and cohesion

coupling: the degree of which distinct program modules depends on each other.

Low:

*	module communication via function calls with basic params/results
*	modules pass arrays/structs back and forth
*	modules affect each other's control flow

## Lecture 20

*	modules share global data

High:

*	modules have access to each other's implementation (friends)

High Coupling:

*	changes to one module require greater changes to other modules
*	harder to reuse individual modules

Cohesion : how closely elements of a module are related to each other

Low:

*	arbitrary grouping of unrelated elements (e.g. `<utility>`)
*	elements share a common theme, otherwise unrelated, perhaps some common base code (e.g. `<algorithm>`)
*	elements manipulate state over the life of an object (e.g. open/read/close files)
*	elements pass data to each other

High:

*	elements cooperate to perform exactly one task

Low Cohesion:

*	poorly organized code
*	hard to understand, maintain

Goal: low coupling, high cohesion

### Decoupling the Interface (MVC)

Your primary program classes should not print things!

```cpp
class ChessBoard {
	...
	void f() {
		cout << "your move.";
	}
};
```

Bad design - inhibits code reuse

What if you want to reuse `ChessBoard`, but not have it print to `stdout`?

One solution: give the class stream object on which it can do I/O

```cpp
class ChessBoard {
	istream &in;
	ostream &out;
public:
	ChessBoard (istream &in, ostream &out) : in {in}, out {out} {}
};
```

Better: but what if we don't want to use stream at all?

Your chessboard class should not be interacting at all

Single responsibility principle: "A class should have only one reason to change"

game state and communication are two reason to change

Better: Communicate with chessboard via params and results and occasionally via exns

So should main do all the communication and then call ChessBoard methods?

No, hard to reuse code if it is in main

Should have a class to manage interaction, that is separate from the game state class.

Pattern: Model View Controller (MVC)

Separate the distinct notions of the data (or state), the presentation of the data, and the control of the data

Model: the main data you are manipulating (e.g. game state)

View: how the model is displayed

Controller: how the model is manipulated

Model: 

*	can have multiple views (e.g. text and graphics)
*	doesn't need to know about their details
*	class observer pattern (or could communicate through controller)

Controller:

*	mediates control flow between model and view
*	may encapsulate turn-taking, or full game rules
*	may communicate with the users for input (or this could be the view)

By decoupling presentation and control, MVC promotes reuse

### Exception Safety

Consider:

```cpp
void f() {
	MyClass *p = new MyClass;
	MyClass mc;
	g();
	delete p;
}
```

no leaks, but what if `g()` raises an exception

What is guaranteed?

During stack unwinding, all stack allocated data is cleaned up, dtors run, memory is reclaimed

heap allocated data is not deleted

If `g` throws, `*p` is leaked but `mc` is not.

```cpp
void f() {
	MyClass *p = new MyClass;
	MyClass m
	try {
		g();
	} catch (...) {
		delete p;
		throw;
	}
	delete p;
}
```

Tedious, error-prone, duplicates code: how else can we guarantee that something (i.e. `delete p`) will happen no matter how we exit f (i.e. normally or exceptionally)?

Some language: `finally` clauses guarantee certain final actions, not C++

Only thing you can count on in C++ - dtors for stack allocated data will run

Use stack-allocated data as much as possible - use the guarantee to your advantage

C++ idiom: RAII - Resource Acquisition Is Initialization

Every resource should be wrapped in a stack-allocated object, whose dtor deletes it.

```cpp
void h() {
	ifstream f {"file"}; // acquiring the resource ("file") = initializing the object (f)
	// the file is guaranteed to be closed when f is popped from the stack (f's dtor runs)
}
```

This can be done with dynamic memory

`class std::unique_ptr <T>`   (`#include <memory>`) takes a `T*` in the ctor - dtor will delete the ptr.

in between, can dereference just like a ptr

```cpp
void f() {
	auto p = std::make_unique <MyClass> (/* ctor arguments*/);
	// std::unique_ptr <MyClass>
	// allocates a MyClass on the heap
	MyClass mc;
	g();
}
```


## Lecture 21

```cpp
void f() {
	MyClass *p = new MyClass;
	MyClass mc;
	g(); // may throw
	delete p;
}

void f() {
	auto p = make_unique<MyClass>(); // std::unique_ptr<MyClass>
	MyClass mc;
	g();
}
```

Difficulty:

```cpp
class c {...};
...
unique_ptr<c> p {new C{...}};
unique_ptr<c> q = p; // won't compile
```

What happens when a `unique_ptr` is copied? don't want to delete the same ptr twice.

Instead: copying is disabled for `unique_ptr`, they can only be moved.

```cpp
template<typename T> class unique_ptr {
	T * ptr;

public:
	unique_ptr (T *p): ptr{p}{}
	~unique_ptr() {delete ptr;}
	unique_ptr (const unique_ptr<T> &other) = delete;
	unique_ptr<T> &operator= (const unique_ptr <T> &other) = delete;
	unique_ptr<T> (unique_ptr<T> &&other) : ptr{other.ptr}{ other.ptr = nullptr;}
	unique_ptr<T> &operator= (unique_ptr<T> &other) {
		using std::swap;
		swap(ptr, other.ptr);
		return *this;
	}
	T &operator*() {return *ptr;}
};
```

If you need to be able to copy ptrs, `std::shared_ptr`

```cpp
void f() {
	auto p1 = std::make_shared<MyClass> ();
	if (...) {
		auto p2 = p1;
	} // p2 is popped, not deleted
} // p1 is popped, deleted
```
Shared ptrs maintain a reference count, count of all shared pointers pointing at the same obj. Memory is freed when the last shared ptr holding the object is destroyed.

Use shared ptrs & unique ptrs instead of raw ptrs as much as possible. Dramatically fewer opportunities for leaks.

3 levels of exceptions safety for a function f:

1.	Basic guarantee - if an exn occurs, the program will be in a valid state - nothing is leaked, class invariants maintained.
2.	Strong guarantee - if an exn is raised while executing f, the state of the program will be as if f had not been called.
3.	No-throw guarantee - f will never throw (or propagate) an exn, and will always accomplish its task.

```cpp
class A {...};
class B {...};
class C {
	A a;
	B b;
public:
	void f() {
		a.method1(); // may throw (strong guarantee)
		b.method2(); // may throw (strong guarantee)
	}
};
```

Is `c::f` exception safe?

if `a.method1()` throws, nothing has happened yet - OK

if `b.method2()` throws, effects of `method1` must be undone to offer the strong guarantee, very hard or impossible if `method1` has non-local side-effects

thus, probably not exception safe.

If `A::method1` and `B:method2` do not have non-local side-effects, can use copy-and-swap

```cpp
class C {
	...
	void f () {
		A atemp = a;
		B btemp = b;

		atemp.method1();
		btemp.method2() // if these throw original a & b still intact

		a = atemp;
		b = btemp; // but what if copy assignment throws
	}
};
```

Better if the swap was nothrow (copying ptrs cannot throw)

use the pImpl idiom

```cpp
struct CImpl {
	A a;
	B b;
};

class C {
	unique_ptr<CImpl> pImpl;
	...
	void f() {
		auto temp = make_unique<CImpl> (*pImpl);
		temp->a.method1();
		temp->b.method2();
		std::swap(pImpl, temp); // no throw
	}
};
```

If either `A::method1` or `B::method` offer no exception safety guarantee, then neither can `c::f`

### Exception safety & the STL: vector

vectors - encapsulate a heap-allocated array, follow RAII, when a stack_allocated vector goes out of scope, the internal heap-allocated array is freed.

```cpp
void f () {
	vector <MyClass> v;
	...
} // v goes out of scope, array is freed, MyClass dtor runs on all objs in the vector

// but

void g () {
	vector <MyClass *> v;
	...
} // array is freed, ptr don't have dtors, so any objects pointed at by the ptrs are not deleted.
// v does not know whether the ptrs own the objects they point at

// but

void h () {
	vector <shared_ptr<MyClass>> v;
	...
} // array is freed, shared_ptr dtor run, so objects are deleted if no other shared_ptr at them
// dont have to do any explicit deallocation
```

`vector<T>::emplace_back`

*	offers the strong guarantee
*	if the array is full (i.e. size == cap)
*	allocate a new array, copy object over (copy ctor) delete old array
*	if a copy ctor throws, destroy the new array, original array still intact, strong guarantee

But copying is expensive, and old data will be thrown away, wouldn't moving the obj be more efficient?

*	alloc a new array
*	move the obj over (move ctor) - if move ctor throws, can't offer strong guarantee, original no longer intact
*	delete old array

if the move ctor offers the no-throw guarantee, `emplace_back` will use the move ctor, otherwise it will use the copy ctor, which will be slower

so your move operation should provide no throw guarantee, and you should indicate that they do:

```cpp
class MyClass {
	...
	MyClass (MyClass && other) noexcept {...}
	MyClass &operator= (MyClass && other) noexcept {...}
};
```

If you know a function will not never throw or propagate an exception, declare it `noexcept`, facilitates optimization, at minimum swap & moves should be `noexcept`