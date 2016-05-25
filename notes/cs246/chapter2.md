#	C++

##	2.1 Design

*	**Design** is a plan for solving a problem, but leads to multiple solutions
*	Need the ability to compare designs
*	2 measures: coupling and cohesion
*	**Coupling** is degree of interdependence **among** programming modules
*	Aim is to achieve lowest coupling or highest independence (i.e., each module can stand alone or close to it)
*	Module is read and understood as a unit => changes do not effect other modules and can be isolated for testing purpose (like stereo components)
*	**Cohesion** is degree of element association **within** a module (focus)
*	Elements can be a statement, group of statements, or calls to other modules
*	Alternate names for cohesion: binding, functionality, modular strength
*	Highly cohesive module has strongly and genuinely related elements
*	**Low cohesion** (module elements NOT related) => **loose coupling**
*	**High cohesion** (module elements related) => tight coupling

## 2.2 C/C++ Composition

*	C++ is composed of 3 languages:
	1.	**Before** compilation, preprocessor language (cpp) modifies (text-edits) the program
	2.	**During** compilation, template (generic) language adds new types and routines
	3.	**During** compilation,
		*	C programming language specifying basic declaration and control flow.
		*	C++ programming language specifying advanced declarations and control flow
*	A programmer uses the three programming languages as follows:
	user edits -> **preprocessor edits** -> **templates expand** -> **compilation** (-> linking/loading -> execution)
*	C is composed of language 1 & 3
*	The compiler interface controls all of these steps
	C/C++ header files & C/C++ source files -> (preprocessor) cpp -> preprocessed source code -> (translator) cc1plus -> assembly code -> (assembler) as -> object code -> other object-code file and libraries id (liner) -> ./a.out & object

## 2.3 First Program

Java:

```Java
import java.lang.*; // implicit
class Hello {
	public static
	void main( String[ ] args ) {
		System.out.println("Hello!");
		System.exit( 0 );
	}
}
```

C:

```C
#include <stdio.h>
int main() {
	printf( "Hello!\n" );
	return 0;
}
```

C++:

```CPP
#include <iostream> // access to output
using namespace std; // direct naming
int main() { // program starts here
	cout << "Hello!" << endl;
	return 0; // return 0 to shell, optional
}
```

*	`#include <iostream>` copies (imports) basic I/O descriptions (no equivalent in Java)
*	`using namespace std` allows imported I/O names to accessed directly (otherwise qualification is necessary)
*	`cout<<"Hello!"<<endl` prints "Hello!" to standard output, called `cout` (`System.out` in Java, `stdout` in C)
*	`endl` starts a newline after "Hello!" (`println` in Java, `\n` in C)
*	Routine `exit` (Java `System.exit`) terminates a program at any location and returns a code to the shell, e.g., `exit(0)` (`#include<cstdlib>`)
	*	Literals `EXIT_SUCCESS` and `EXIT_FAILURE` indicate successful or unsuccessful termination results.
	*	e.g., `return EXIT_SUCCESS` or `exit(EXIT_FAILURE)`
*	C program-file use suffix `.c`; C++ program-file use suffixes `.C/.cpp/.cc`
*	Compile with `g++` command:

```Bash
$ g++ -Wall -g -std=c++11 -o firstprog firstprog.cc # compile, create "a.out"
$ ./firstprog
```

*	`-W`kind generate warning message for this "kind" of situation
	*	`-Wall` print all warning messages
	*	`-Werror` make warnings into errors so program does not compile
*	`-g` add symbol-table information to object file for debugging
*	`-std=c++11` allow new C++ 11 extensions
*	`-o` file containing the executable (`a.out` default)
*	create shell alias for `g++` use options `g++ -Wall -g -std=c++11`

## 2.4 Comment

*	Comment may appear where whitespace (space, table, newline) is allowed
*	`/*...*/` comment cannot be nested
*	Be extremely careful in using this comment to elide/comment-out code

## 2.5 Declaration

*	A declaration introduces names or redeclares names from previous declarations.

### 2.5.1 Basic Types

| Java | C/C++ |
|---|---|
| `boolean` | `bool` |
| `char` | `char / wchar_t` |
| `byte` | `char / wchar_t` |
| `int`  | `int` |
| `float` | `float` |
| `double` | `double` |

*	C/C++ treat `char / wchar_t` as character and integral type.
*	Java types `short` and `long` are created using type qualifiers.

### 2.5.2 Variable Declaration

*	C/C++ declaration: type followed by list of identifiers, except label with an implicit type (same in Java)

| Java/C/C++ |
|---|
| `char a, b, c, d;` |
| `int i, j, k;` |
| `double x, y, z;` |

*	Declarations may have an initializing assignment:

```CPP
int i = 3; int i = 3, j = i, k = f( j );
int j = 4 + i;
int k = f( j );
```

*	C restricts initializer elements to be constant for global declarations.

### 2.5.3 Type Qualifier

*	Other integral types are composed with type qualifiers modifying integral types `char` and `int`
*	C/C++ provide size (`short`, `long`) and signed-ness (`signed` => positive/negative, `unsigned` => positive only) qualifiers
*	`int` provides **relative** machine-specific types: usually `int` $\geq$ 4 bytes for 32/64-bit computer, `long` $\geq$ `int`, `long long` $\geq$ `long`
*	`#include <climits>` specifies names for lower/upper bounds of a type's range of value for a machine
*	C/C++ provide two basic real-floating types `float` and `double`, and real-floating type generated with type qualifier.
*	`#include <cfloat>` specifies names for precision and magnitude of real-floating values.

### 2.5.4 Literals

*	Variables contain values; values have **constant** (C) or **literal** (C++) meaning.
*	C/C++ and Java share almost all the same literals for the basic types.

| Type | Literals |
|---|---|
| boolean | `false, true` |
| character | `'a' 'b' 'c'` |
| string | `"abc" "a b c"` |
| integral | `123 -456 0133 0xfe` |
| real-floating | `.1 1. -1. 0.52 -6.6e-2` |

*	Use the right literal for a variable's type:

```CPP
bool b = true; // not 1
int i = 1; // not 1.0
double d = 1.0 // not 1
char c = ’a’; // not 97
const char *cs = "a"; // not ’a’
```

*	Literals are **undesignated**, compiler chooses smallest type, or **designated**, programmer chooses type with suffixes: `L/l` => `long`, `LL/ll` => `long long`, `U/u` => unsigned, and `F/f` => `float`

```CPP
-3 // undesignated, int
-3L // designated, long int
1000000000000000000 // undesignated, long long int (why?)
1000000000000000000LL // designated, long long int
4U // designated, unsigned int
100000000000000000ULL // designated, unsigned long long int
3.5E3 // undesignated, double
3.5E3F // designated, float
```

*	Juxtaposed string literals are concatenated

```CPP
"John" // divide literal for readability
"Doe"; // even over multiple lines
"JohnDoe";
```

*	Every string literal is implicitly terminated with a character `\0` (**sentinel**)
