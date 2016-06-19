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
	*	`"abc"` is 4 characters: `'a' 'b' 'c' '\0'` which occupies 4 bytes.
	*	String cannot contain a character with the value `'\0'`
	*	Computing string length requires `O(N)` search for `'\0'`
*	Escape sequence provides quoting of special characters in a character/string literal using a backslash `\`

| escape | meaning |
|---|---|
| `'\\'` | backslash |
| `'\''` | single quote |
| `'\"'` | double quote |
| `'\t' '\n'` | tab, new line |
| `'\0'` | string termination character |

*	C/C++ provides user literals (write-once/read-only) with type qualifier `const`

```CPP
const char Initial = 'D';
const short int Size = 3, SupSize = Size + 7;
const double PI = 3.14159;
```

*	C/C++ `const` variable **must** be assigned a value at declaration, the value can be the result of a expression.
*	A `const` variable can (only) appear in context where a literal can appear.

```CPP
Size = 7; //disallowed
```

*	**Good practice is to name literals so all usages can be changed via its initialization value.**

### 2.5.5 C++ String

*	`string (#include <string>)` is a sequence of characters with powerful operations performing actions on groups of characters.
*	C provided strings by an array of `char`, string literals, and library facilities.

```C
char s[10]; // string of at most 10 characters
```

*	Because C-string variable is fixed-sized array:
	*	management of variable-sized strings is the programmer's responsibility
	*	requiring complex storage management
*	C++ solves these problems by providing a "string" type:
	*	maintaining string length versus sentinel character `'\0'`
	*	managing storage for variable-size string

| C `char []` | C++ string |
|---|---|
| `strcpy` `strncpy` | `=` |
| `strcat` `strncat` | `+` |
| `strcmp` `strncmp` | `== != < <= > >=` |
| `strlen`           | `length` |
| `[]`               | `[]` |
|                    | `substr` |
|                    | `replace` |
| `strstr`           | `find` `rfind` |
| `strcspn`          | `find_first_of` `find_last_of` |
| `strspn`           | `find_first_not_of` `find_last_not_of` |
|                    | `c_str` |

*	`find` routines return value `string::npos` of type `string::size_type` if unsuccessful search
*	`c_str` converts a string to a `char *` pointer (`'\0'` terminated)
*	**Note different call syntax `c.substr(2,3)` versus `substr(c,2,3)`**
*	contrast C and C++ style strings (note the management of string storage)

```CPP
#include <string.h> // C string routines
#include <string> // C++ string routines
using namespace std;
int main () {
	// C++ string
	const string X = "abc", Y = "def", Z = "ghi";
	string S = X + Y + Z;
	// C string
	const char *x = "abc", *y = "def", *z = "ghi";
	char s[strlen(x)+strlen(y)+strlen(z)+1];
	strcpy(s, ""); // init to null string
	strcat(strcat(strcat(s,x),y),z);
}
```

*	**Good practice is NOT to iterate through the characters of a string variable!**

## 2.6 Input/Output

*	Input/Output (I/O) is divided into two kinds:
	*	**Formatted I/O** transfers data with implicit conversion of internal values to/from human-readable form
	*	**Unformatted I/O** transfers data without conversion, e.g., internal integer and real floating values

### 2.6.1 Formatted I/O

| C | C++ |
|---|-----|
| `#inlcude <stdio.h>` | `#include <iostream>` |
||
| `FILE` | `ifstream` `ofstream` |
||
| `in = fopen("f", "r")` | `ifstream in("f")` |
| `out = fopen("f", "w")` | `ofstream out("f")` |
| `close(in)` | scope ends, `in.close()` |
| `close(out)` | scope ends, `out.close()` |
||
| `fscanf(in, "%d", &i)` | `in>>T` |
| `fscanf(in, "%f", &f)` | |
| `fscanf(in, "%c", &c)` | |
| `fscanf(in, "%s", &s)` | |
| `feof(in)` | `in.fail()` |
| `fscanf` return value | `in.fail()` |
| | `in.clear()` |
| `fscanf(in, "%*[regexp]")` | `in.ignore(n,c)` |
||
| `fprintf(out),"%d",i)` | `out<<T` |
| `fprintf(out),"%f",f)` | |
| `fprintf(out),"%c",c)` | |
| `fprintf(out),"%s",s)` | |

*	Formatted I/O occurs to/from a **stream file**, and values are conversed based on the type of variables and format codes
*	C++ has three implicit stream files: `cin` `cout` and `cerr`, which are implicitly declared and opened
*	C has `stdin`, `stdout` and `stderr`, which are implicitly declared and opened
*	`#inlcude <iostream>` imports all necessary declarations to access `cin` `cout` and `cerr`
*	`cin` reads input from the keyboard
*	`cout/cerr` write to the terminal screen
*	**Error and debugging messages should always be written to `cerr`**
	*	normally not redirected by the shell
	*	unbuffered so output appears immediately
*	stream files other than 3 implicit ones require declaring each file object

```CPP
#include <fstream> // required for stream-file declarations
ifstream infile ("myinfile"); // input file
ofstream outfile ("myoutfile") // output file
```

*	file `types` `ifstream` `ofstream` indicate whether the file can be read or written
*	file name type `"myinfile" "myoutfile"` is `char *`
*	declaration opens an operating-system file making it accessible through the variable name:
	*	`infile` reads from file `myinfile`
	*	`outfile` writes to file `myoutfile`
	where both files are located in the directory where the program is run
*	check for successful opening of a file using the stream member `fail` e.g. `infile.fail()`, which returns `true` if the open failed and `false` otherwise

```CPP
if (infile.fail()) // open failed, print message and exit
if (outfile.fail()) // open failed, print message and exit
```

*	C++ I/O library overloads the bit-shift operators `<<` and `>>` to perform I/O
*	C I/O library uses `fscanf(outfile,...)` and `fprintf(infile,...)`, which have short forms `scanf(...)` and `printf(...)` for `stdin` and `stdout`
*	Both I/O libraries can cascade multiple I/O operations, i.e., input or output multiple values in a single expression.

#### 2.6.1.1 Formats

*	Format of input/output values is controlled via **manipulators** defined in `#include <iomanip>`

| manipulator | meaning |
|---|---|
| `oct (%o)` | integral values in octal |
| `dec (%d)` | integral values in decimal |
| `hex (%x)` | integral values in hexadecimal |
| `left` `right` | values with padding after / before values |
| `boolalpha` `noboolalpha` | bool values as false/true instead of 0/1 |
| `showbase` `noshowbase` | values with / without prefix 0 for octal & 0x for hex |
| `showpoint` `noshowpoint` | print decimal point if no fraction |
| `fixed` `scientific` | float-point values without / with exponent |
| `setfill('ch')` | padding character before/after value (default blank) |
| `setw(W) (%Wd)` | NEXT VALUE ONLY in minimum of W columns |
| `setprecision(P) %(Pf)` | faction of float-point values in maximum of P columns |
| `endl (\n)` | flush output buffer and start new line |
| `skipws / noskipws` | skip whitespace characters |

*	**Manipulators are not variables for input/output**, but control I/O formatting for all literals/variables after it, continuing to the next I/O expression for a specific stream file.
*	**Except manipulator `setw` which only applies to the next value in the I/O expression**
*	`endl` is not the same as `'\n'`, as `'\n'` does not flush buffered data
*	for input, `skipws/noskipws` toggle between ignoring whitespace between input tokens and reading whitespace

#### 2.6.1.2 Output

*	Java output style converts values to string, concatenates strings, and prints final long string:

```JAVA
System.out.println(i + " " + j); // build a string and print it
```

*	C/C++ output style has a list of formats and values, and output operation generate strings:

```CPP
cout << i << " " << j << endl; // print each string as formed
```

*	No implicit conversion from the basic types to string in C++
*	**While it is possible to use the Java string-concatenation style in C++, it is incorrect style**

#### 2.6.1.3 Input

*	C++ formatted input has implicit character conversion for all basic types and is extensible to user-defined types
*	Numeric input values are C/C++ undesignated literals: `3, 3.5e-1` separated by whitespace
*	Character/string input values are characters separated by whitespace
*	Type of operand indicates the kind of value expected in the stream
*	Input starts reading where the last input left off, and scans lines to obtain necessary number of values
*	C/C++ must attempt and read before end-of-file is set and can be tested
*	End of file is the detection the physical end of a file; there is no end-of-file character
*	In shell typing `ctrl-d` causes shell to close current input file marking its physical end
*	In C++, eof can be explicitly detected in two ways:
	*	stream member `eof` return true if the eof is reached and false otherwise
	*	stream member `fail` returns true for invalid or no value if eof is reached and false otherwise
*	Safer to check `fail` and then check `eof`
*	If `"abc"` is entered (invalid integer value), `fail` becomes true but `eof` is false
*	Generates infinite loop as invalid data is not skipped for subsequent reads
*	Stream is implicitly converted to bool in an integer `if !fail()` true, otherwise false
*	After unsuccessful read call `clear()`  to reset `fail()` before next read
*	`ignore` skips $n$ characters
*	`getline(stream, string, char)` reads strings with white spaces allowing different delimiting characters (no buffer overflow)

```CPP
getline(cin,c,' '); // read characters until ' ' => cin >> c
getline(cin,c,'@'); // read characters until '@'
getline(cin,c,'\n'); // read character until newline (default)
```

*	Read in file-names, which may contain spaces, and process each file:

```CPP
#include <fstream>
using namespace std;
int main() {
	ifstream fileName("filenames");
	string fileName;
	for ( ;; ) {
		getline(fileNames, fileName);
		if (fileNames.fail()) break;
		ifstream file(fileName);
		// read and process file
	}
}
```

*	In C, routine `feof` returns true when eof is reached `fscanf` returns EOF
*	Parameters in C are always passed by value, so arguments to `fscanf` must be preceded with & (except arrays) so they can be changed
*	`stringstream` allows I/O from a string
*	Tokenized whitespace separated word

```CPP
#include <sstream>
string tok, line = "  the \"quick\" brown\n";
stringstream ss;
ss.str(line);
while (ss >> tok) {
	cout << tok << endl;
}
ss.clear();
ss.str("17");
int i;
ss >> i;
cout << i << endl;
```

## 2.7 Expression

|   | C/C++ | Priority|
|---|-------|---------|
| postfix | `::` `.` `->` `[]` `call` `cast` | high |
| prefix (unary) | `+` `-` `!` `~` `&` `*` `cast` `new` `delete` `sizeof` | |
| binary | `*` `/` `%` | |
| | `+` `-` | |
| bit shift | `<<` `>>` | |
| relational | `<` `<=` `>` `>=` | |
| equality | `==` `!=` | |
| bitwise | `&` | |
| | `^` | |
| | `|` | |
| logical | `&&` | |
| | `||` | |
| conditional | `? :` | |
| assignment | `=` `+=` `-=` `*=` `/=` `%=` `<<=` `>>=` `&=` `^=` `|=` | |
| comma | `,` | low |

*	Subexpressions and argument evaluation is unspecified

```CPP
(i+j)*(k+j);       // either + done first
(i=j)+(j=i);       // either = done first
g(i) + f(k) +h(j); //g f or h called in any order
f(p++, p++, p++);  // arguments evaluated in any order
```

* **Beware of overflow**

```CPP
unsigned int a = 4294967295, b = 4294967295, c = 4294967295;
(a+b)/c;    // => 0 as a+b overflows leaving zero
(a/c)+(b/c) // => 2
```

**Perform divides before multiplies (if possible) to keep numbers small**

*	C++ relational/equality return `false / true`; C return `0/1`
*	General assignment operators only evaluate left-hand side once:

```CPP
v[f(3)] += 1;          // only calls f once
v[f(3)] = v[f(3)] + 1; // calls f twice
```

*	Bit-shift operators, `<<` (left), and `>>` (right) shift bits in integral variables left and right.
	*	left shift is multiplying by 2, modulus variable's size
	*	right shift is dividing by 2 if unsigned or positive
	*	undefined if right operand is negative or $\geq$ to length of left operand.

``` CPP
int x, y, z;
x = y = z = 1;
cout << (x << 1) << ’ ’ << (y << 2) << ’ ’ << (z << 3) << endl;
x = y = z = 16;
cout << (x >> 1) << ’ ’ << (y >> 2) << ’ ’ << (z >> 3) << endl;
2 4 8
8 4 2
```

### 2.7.1 Conversion

*	**Conversion** transforms a value of another type by changing the value of the new type's representation.
*	Conversions occur implicitly by compiler or explicitly by programmer using **cast** operator or C++ **static_cast** operator.

```CPP
int i; double d;
d = i; // implicit (compiler)
d = (double) i; // explicit with cast (programmer)
d = static cast<double>( i ); // C++
```

*	Two kinds of conversions:
	*	**widening/promotion** conversion, no information is lost
		bool -> char -> shoft int -> long int -> double
	*	**narrowing** conversion, information can be lost:
		double -> char -> short int -> long int -> double
*	C/C++ have implicit widening and narrowing conversions
*	**Beware of implicit narrowing conversions**

```CPP
int i; double d;
i = d = 3.5; // d -> 3.5
d = i = 3.5; // d -> 3.0 truncation
```

*	Good practice is to perform narrowing conversions explicitly with cast as documentation.

```CPP
int i; double d1 = 7.2, d2 = 3.5;
i = (int) d1; // explicit narrowing conversion
i = (int) d1 / (int) d2; // explicit narrowing conversions for integer division
i = static cast<int>(d1 / d2); // alternative technique after integer division
```

*	C++ supports casting among user defined types

### 2.7.2 Coercion

*	**Coercion** reinterprets a value to another type but the result is may not be meaningful in the new type's representation.
*	Some narrowing conversions are considered coercions.
	*	e.g. when a value is truncated or converting non-zero to `true`, the result is nonsense in the new type's representation.
*	Also, having type `char` represent ASCII characters and integral (byte) values allows:

```CPP
char ch = 'z' - 'a'; // character arithmetic
```

which is often unreasonable as it can generate an invalid character.

*	But the most common coercion is through pointers:

```CPP
int i, *ip = &i; // ip is a pointer to an integer
double d, *dp = &d; // dp is a pointer to a double
dp = (double *) ip; // lie, say dp points at double but really an integer
dp = reinterpret cast<double *>( ip );
```

using explicit cast, programmer has lied to compiler about type of `ip`

*	Signed/unsigned coercion

```CPP
unsigned int size;
cin >> size; // negatives become positives
if ( size < 0 ) cout << "invalid range" << endl;
int arr[size];
```

*	`size` is unsigned because an array cannot have negative size.
*	`cin` does not check for negative values for `unsigned` => 2 reads as 4294967294
*	Use safe coercion for checking range of size

```CPP
if ((int)size < 0) cout << "invalid range" << endl;
```

*	Must be consistent with types

```CPP
for ( int i = 0; i < size; i += 1 ) { }
. . .
test.cc:12:22: warning: comparison between signed and unsigned integer expressions
```

*	**Good practice is to limit narrowing conversions and NEVER lie about a variable's type**

## 2.8 Unformatted I/O

*	Expensive to convert from internal (computer) to external (human) forms (bits <=> characters)
*	When data does not have to be seen by a human, use efficient unformatted I/O so no conversions.
*	Uses same mechanisms as formatted I/O to connect variable to file (open / close)
*	`read` and `write` routines directly transfer bytes from/to a file, where each takes a pointer to the data and number of bytes of data.

```CPP
read( char *data, streamsize num );
write( char *data, streamsize num );
```

*	Read/write of types other than characters requires a coercion cast or C++ `reinterpret_cast`

```CPP
#include <iostream>
#include <fstream>
using namespace std;
int main() {
	const unsigned int size = 10;
	int arr[size];
	{ // read array
		ifstream infile( "myfile" ); // open input file “myfile”
		infile.read( reinterpret cast<char *>(&arr), size * sizeof( arr[0] ) ); // coercion
	} // close file
	. . . // modify array
	{ // print array
		ofstream outfile( "myfile" ); // open output file “myfile”
		outfile.write( (char *)&arr, size * sizeof( arr[0] ) ); // coercion
	} // close file
}
```

*	Need special command to view unformatted file as printable characters
*	E.g., view internal values as bytes sequence for 32-bit `int` values

```Bash
$ od -t u1 myfile
0000000 0 0 0 0 1 0 0 0 2 0 0 0 3 0 0 0
0000020 4 0 0 0 5 0 0 0 6 0 0 0 7 0 0 0
0000040 8 0 0 0 9 0 0 0
```

*	Coercion is unnecessary if buffer type was `void *`

## 2.9 Math Operations

*	`#include <cmath>` provides overloaded real-float mathematical-routine for types `float`, `double` and `long double`.

| operation  | routine  |   | operation  | routine     |
|------------|----------|---|------------|-------------|
| $\|x\|$    | `abs(x)` |   | $x \mod y$ | `fmod(x,y)` |
| $\arccos x$| `acos(x)`|   | $\ln x$    | `log(x)`    |
| $\arcsin x$| `asin(x)`|   | $\log x$   | `log10(x)`  |
| $\arctan x$| `atan(x)`|   | $x^y$      | `pow(x,y)`  |
| $\lceil{x}\rceil$ | `ceil(x)`|   | $\sin x$   | `sin(x)`    |
| $\cos x$ | `cos(x)` | | $\sinh x$ | `sinh(x)` |
| $\cosh x$ | `cosh(x)` | | $\sqrt{x}$ | `sqrt(x)` |
| $e^x$ | `exp(x)` | | $\tan x$ | `tan(x)` |
| $\lfloor{x}\rfloor$ | `floor(x)` | | $\tanh(x)$ | `tanh(x)` |

*	Some systems also provide `long double` math constants
*	`pow(x,y)` $(x^y)$ is computed using logarithm, $10^{y\log x}$ (versus repeated multiplication), when $y$ is non-integral value => $y\geq 0$

```CPP
pow( -2.0, 3.0 ); −23 = −2×−2×−2 = −8
pow( -2.0, 3.1 ); −23.1 = 103.1×log−2.0 = nan (not a number)
```

*	Quadratic roots of $ax^2+bx+c$ are $r=(-b\pm \sqrt{b^2-4ac})/2a$

```CPP
#include <iostream>
#include <cmath>
using namespace std;
int main() {
	double a = 3.5, b = 2.1, c = -1.2;
	double dis = sqrt( b * b - 4.0 * a * c ), dem = 2.0 * a;
	cout << "root1: " << ( -b + dis ) / dem << endl;
	cout << "root2: " << ( -b - dis ) / dem << endl;
}
```

## 2.10 Control Structures

*	block

```CPP
{ intermixed decls/stmts }
```

*	selection

```CPP
if ( bool-expr1 ) stmt1
else if ( bool-expr2 ) stmt2
. . .
else stmtN

switch ( integral-expr ) {
	case c1: stmts1; break;
	. . .
	case cN: stmtsN; break;
	default: stmts0;
}
```

*	looping

```CPP
while ( bool-expr ) stmt

do stmt while ( bool-expr ) ;

for (init-expr ;bool-expr ;incr-expr ) stmt
```

*	transfer

```CPP
break
continue
goto label
return [ expr ]
throw [ expr ]
```

*	label

```CPP
label: stmt
```

### 2.10.1 Block

*	Compound statement serves two purposes
	*	bracket several statements into a single statement
	*	introduce local declarations
*	**Good practice is use a block versus single statement to allow adding statements**
*	Nested block variables are allocated last-in first-out (LIFO) from the **stack** memory area

| code | static | heap | <- free memory -> | stack |
|------|--------|------|-------------------|-------|

*	Nested block declarations reduces declaration clutter at start of block
*	Variable names can be reused in different blocks, i.e., possible **shadow** (hiding) prior variables

```CPP
int i = 1; . . . // first i
{ int k = i, i = 2, j = i; . . . // k = first i, second i overrides first
	{ int i = 3;. . . // third i (overrides second)
```

### 2.10.2 Selection

*	C/C++ selection statements are `if` and `switch`
*	For nested `if` statements, `else` matches closest `if`, which results in the **dangling else** problem
*	Unnecessary equality for boolean as value is already `true` or `false`
*	Redundant `if` statement

```CPP
if ( a < b ) return true;
else return false;

return a<b;
```

*	Conversion causes problems (use `-Wall`)
*	Assign in expressions causes problems because conditional expression is tested for $\neq 0$
*	A `switch` statement selectively executes one of $N$ alternatives based on matching an **integral** value with a series of case clauses

```CPP
switch ( day ) { // integral expression
	// STATEMENTS HERE NOT EXECUTED!!!
	case Mon: case Tue: case Wed: case Thu: // case value list
	cout << "PROGRAM" << endl;
	break; // exit switch
	case Fri:
	wallet += pay;
	/* FALL THROUGH */
	case Sat:
	cout << "PARTY" << endl;
	wallet -= party;
	break; // exit switch
	case Sun:
	cout << "REST" << endl;
	break; // exit switch
	default: // optional
	cerr << "ERROR: bad day" << endl;
	exit( EXIT FAILURE ); // TERMINATE PROGRAM
}
```

*	Only one label for each `case` clause but a list of `case` clauses is allowed.

---

ends page 61