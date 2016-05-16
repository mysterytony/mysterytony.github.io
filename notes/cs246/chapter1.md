[<- Go Back](http://tonyli.tk/)

# Shell

*	Computer interaction requires mechanisms to display information operations.
*	Two main approaches are graphical and command line.
*	**Graphical user interface** (GUI):
	*	icons represent actions (programs) and data (files)
	*	click on icon launches (start) a program or displays data
	*	program may pop up a dialog box for arguments to affect its execution.
*	**Command-line interface** (shell):
	*	text strings access programs (commands) and data (file names)
	*	command typed after a prompt in an interactive area to start it
	*	arguments follow the command to affect its execution.
*	Graphical interface easy for simple tasks, but seldom programmable for complex operations.
*	Command-line interface harder for simple tasks (more typing), but allows programming.
*	**Shell** is a program that reads commands and interprets them.
*	Provide a simple programming-language with string variables and few statements.
*	Unix shells falls into two basic camps: **sh (ksh, bash)** and **csh (tcsh)**, each with slightly different syntax and semantics.
*	Command line begins with **prompt** $ (sh) or % $ (csh)
*	Command types after prompt not executed until Enter key pressed
*	Command comment begins with hash (#) and continues to end of line.
*	Multiple commands on command line separated by semi-colon
*	Commands can be edited on the command line
*	Arrow keys $\uparrow, \downarrow$ move forward/backward through command history
*	Tab key auto-completes partial command/file names
*	Most commands have **options**, specified with a minus followed by one or more characters, which affect how the command operates.
*	Options are normally processed left to right; one option may cancel another.
*	No standardization for command option names and syntax.
*	Shell command terminates with `exit`
*	Shell operation return an **exit status** via optional integer N (return node)
	*	exit status defaults to zero if unspecified, which usually means success.
	*	[N] is in range 0 - 255
	*	larger values are truncated
	*	negative values become unsigned
	*	Exist status can be read after execution and used to control further execution

## 1.1 File System

*	Shell commands interact extensively with the **file system**.
*	Files are containers for data stored on persistent storage (usually disk).
*	File names organized in N-ary tree: directories are vertexes, files are leaves.
*	Information is stored at specific locations in the hierarchy.
*	Directory name "/" is the root of the file system (Windows uses "\").
*	`bin`,`lib`,`usr`,`include`: system commands, system libaray and include files.
*	`tmp`: temporary files created by commands (**shared among all users**).
*	`home` or `u`: user files are located in this directory.
*	Directory for a particular user is called their **home directory**
*	Shell special character `~` (tilde) expands to user's home directory
*	Every directory contains 2 special directories:
	*	`.` points to current directory
	*	`..` points to parent directory above the current directory
*	**Hidden files** contain administrative information and start with `.`.
*	Each file has a unique path-name referenced with an absolute pathname.
*	**Absolute pathname** is a list of all the directory names from the root of the file name separated by the forward slash character "/"
*	Shell provides concept of **working directory (current directory)**, which is the active location in the file hierarchy.
*	After sign on, the working directory starts at user's home directory.
*	File name not starting with "/" is prefixed with working directory to create necessary absolute pathname.
*	**Relative pathname** is file name/path prefixed with working directory.

## 1.2 Quoting

*	**Quoting** controls how shell interprets strings of characters.
*	**Blackslash (\\)** escape any character, including special character.

```Bash
$ echo .[!.]* # globbing pattern
.bashrc .emacs .login .vimrc
$ echo \.\[\!\.\]\* # print globbing pattern
.[!.]*
```

*	**Backquote (`) or $()** execute text as a command, and substitute with command output.

```Bash
$ echo 8whoami 8
# $ whoami => jfdoe
jfdoe
$ echo $(date)
Tue Dec 15 22:44:23 EST 2015
```

*	Globbing does not occur within a single/double quoted string.
*	**Single quote (')** protect everything (even newline) except single quote

```Bash
$ echo Book Report #2
Book Report
$ echo ’Book Report #2’
Book Report #2
$ echo ’.[!.]*’ # no globbing
.[!.]*
$ echo ’\.\[\!\.\]\*’ # no escaping
\.\[\!\.\]\*
$ echo ’8whoami8’ # no backquote
8whoami 8
$ echo ’abc # yes newlineEnter
> cdf’ # prompt “>” means current line is incomplete
abc # yes newline
cdf
$ echo ’\’’ # no escape single quote
>
```

*	**Double quote (")** protect everything except double quote, backquote, and dollar sign

```Bash
$ echo ".[!.]*" # protect special characters
.[!.]*
$ echo "\.\[\!\.\]\*" # no escaping
\.\[\!\.\]\*
$ echo "8whoami8" # yes backquote
cs246
$ echo "abc # yes newlineEnter
> cdf"
abc # yes newline
cdf
$ echo "\"" # yes escape double quote
"
```

*	String concatenation happens if text is adjacent to a string

```Bash
$ echo xxx"yyy" "a"b"c"d a"b"c"d"
xxxyyy abcd abcd
```
*	To stop prompting or output from any shell command, type <ctrl>-c, causing shell to interrupt current command.

## 1.3 Shell Commands

*	A command typed after the prompt is executed by the shell or the shell calls a command program.
*	Shell command read/write shell information/state.
*	`help`: display information about bash commands (not sh or csh).

```Bash
$ help cd
cd: cd [-L|-P] [dir]
Change the shell working directory. . .
```

Without argument, list all bash commands

*	`cd`: change the working directory

```Bash
$ cd . # change to current directory
$ cd . . # change to parent directory
$ cd cs246 # change to subdirectory
$ cd cs246/a1 # change to subsubdirectory
```

*	`pwd`: print absolute path for working directory

```Bash
$ pwd
/u/jfdoe/cs246
```

*	`history` and "!" (bang!): print a numbered history of most recent commands entered and access them.
	*	`!N` return command `N`
	*	`!!` return last command
	*	`!xyz` return last command starting with the string "xyz"

*	`alias`: substitution string for command name.
*	`type`: indicate how name is interpreted as command.
*	`echo`: write arguments, separated by spaces and terminated with newline.
*	`time`: executed a command and print a time summary.

## 1.4 System Commands

*	Command programs called by shell.
*	`sh / bash / csh / tsch`: start subshell to switch among shells.
*	`chsh`: set login shell
*	`man`: print information about command, option names and function.
*	`cat/more/less`: print files
*	`mkdir`: create a new directory at specified location in file hierarchy.
*	`ls`: list the directories and files in the specified directory.
	*	`-a` lists all files, including hidden files
	*	`-l` generates a long lists (details) for each file
	*	no file/directory name implies working directory
*	`cp`: copy files; with the `-r` option, copy directories.
	*	`-i` prompt for verification if a target file is being replaced.
	*	`-r` recursively copy contents of a source directory to a target directory.
*	`mv`: move files and/or directories to another location i the file hierarchy.
	*	rename source-file if target-file does not exist; otherwise replace target-file.
	*	`-i` prompt for verification if a target file is being replaced.
*	`rm`: remove (delete) files; with the `-r` option, remove directories.
	*	`-i` prompt for verification for each file/directory being removed.
	*	`-f` (default) do not prompt for removal verification for each file/directory.
	*	`-r` recursively delete the contents of a directory.
	*	**UNIX does not give a second chance to recover deleted files; be careful when using `rm`, especially with globbing**
	*	UW has hidden directory .snapshot in every directory containing backups of all files in that directory.
*	`alias`: setting command options for particular commands.
*	Alias can be overridden by quoting or escaping the command name.
*	`lp/lpstat/lprm/lpstat`: add, query and remove files from the printer queues.
	*	if no printer is specified, use default printer (ljp_3016 in MC3016)
	*	`lpstat`: `-d` prints default printer, `-p` without printer-name lists all printers.
	*	each job on a printer's queue has a unique number.
	*	use this number to remove a job from a print queue
*	`cmp/diff` compare 2 files and print differences.
	*	return 0 if files equal (no output) and non-zero otherwise (output difference).
	*	`cmp` generates the first difference between the files.
	*	`diff` generates output describing how to change first file into second file.
	*	Useful for checking output from previous program with current program.
	*	`ssh`L (secure shell) encrypted, remote-login between hosts.
	*	To allow a remote computer to create windows on local computer, the local computer must install an X Windows Server.
	*	`scp` (secure copy) encrypted, remote-copy between hosts
	*	`sshfs` (secure shell file system) encrypted, remote-file system between hosts
	*	Make an alias to simplify the `sshfs` command.

## 1.5 Source-Code Management

*	As a program develops, it changes in many ways.
	*	UNIX files do not support the temporal development of a program (version control) i.e. history of program over time.
	*	Access to older versions of a program is useful.
		*	backing out changes because of design problems.
		*	multiple development versions for different companies/countries/research
*	Program development is often performed by multiple developers each making independent changes.
	*	Sharing using files can damage file content for simultaneous writes.
	*	Merging changes from different developers is tricky and time consuming.
To solve these problems, a **source-code management system** (SCMS) us used to provide versioning and control cooperative work.
*	SCMS can provide centralized or distributed versioning (CVS/DVS)
	*	CVS global repository, checkout working copy
	*	DVS global repository, pull local mirror, checkout working copy

### 1.5.1 Global Repository

*	**gitlab** is a University global (cloud) repository for
	*	storing git repositories,
	*	sharing repositories among students doing group project.
*	Perform the following steps to setup your userid in the global repository.
*	Log in `https://git.uwaterloo.ca/cs246/1161` with your WatIAM userid/password via LDAP login

#### 1.5.2 Local Repository

*	**git** is a distributed source-code management-system using the **copy-modify-merge** model.
	*	master copy of all **project** files kept in a **global repository**.
	*	multiple versions of the project files managed in the repository.
	*	developers **pull** a local copy (mirror) of the global repository for modification,
	*	developers **push** committed changes from local repository with integration using **text merging**.
*	`config`: registering

```Bash
$ git config --global user.name "Jane F Doe"
$ git config --global user.email jfdoe@uwaterloo.ca
$ git config --list
Jane F Doe
jfdoe@uwaterloo.ca
```

*	`clone`: checkout branch or paths to working tree
*	`pull`: update changes from global repository.

## 1.6 Pattern Matching

*	Shells provide pattern matching of file names, **globbing** (regular expressions), to reduce typing lists of file names.
*	Different shells and commands support slightly different forms and syntax for patterns.
*	Pattern matching is provided by characters,`* ? { } [ ]`, denoting different **wildcards**
*	Patterns are composable: multiple wild-cards joined into complex pattern
*	E.g., if the working directory is `/u/jfdoe/cs246/a1`
	*	matches 0 or more characters
	```Bash
	$ echo q* # shell globs “q*” to match file names, which echo prints
	q1x.C q2y.h q2y.cc q3z.cpp
	```
	* ? matches 1 character
	```Bash
	$ echo q*.??
	q2y.cc
	```
	*	{. . .,. . .} matches any alternative in the set (at least one comma)
	```Bash
	$ echo *.{C,cc,cpp}
	q1x.C q2y.cc q3z.cpp
	$ echo *.{C} # no comma => print pattern
	*.{C}
	```
	*	[. . .] matches 1 character in the set
	```Bash
	$ echo q[12]*
	q1x.C q2y.h q2y.cc
	```
	*	[!. . .] (^ csh) matches 1 character not in the set
	```Bash
	$ echo q[!1]*
	q2y.h q2y.cc q3z.cpp
	1.6. PATTERN MATCHING 17
	```
	*	Create ranges using hyphen (dash)
	```Bash
	[0-3] # => 0 1 2 3
	[a-zA-Z] # => lower or upper case letter
	[!a-zA-Z] # => any character not a letter
	```
	∗	Hyphen is escaped by putting it at start or end of set
	```Bash
	[-?*]* # => matches file names starting with -, ?, or *
	```
*	If globbing pattern does not match any files, the pattern becomes the argument (including
wildcards).
*	Hidden files, starting with “.” (dot), are ignored by globbing patterns
*	Pattern .* matches all hidden files:
	*	match “.”, then zero or more characters, e.g., .bashrc, .login, etc., and “.”, “ . .”
	*	matching “.”, “ . .” can be dangerous
	```Bash
	$ rm -r .* # remove hidden files, and current/parent directory!!!
	```
*	Pattern .[!.]* matches all single “.” hidden files but not “ .” and “ . .” directories.
*	`find`: search for names in the file hierarchy `find [file/directory-list] [expr]`
	*	if `[file/directory-list]` omitted, search working directory, "."
	*	if `[expr]` omitted, match all file names
	*	`-name` pattern restrict file names to globbing pattern
	*	`-type f | d` select files of type file or directory
	*	`-maxdepth N` recursively descend at most `N` directory levels (0 at working directory)
	*	logical `not and or`
	```Bash
	-not expr
	expr -a expr
	expr -o expr
	```
*	`egrep`: (extended global regular expression print)
	*	`-i` ignore case in both pattern and input files
	*	`-r` recursively examine files in directories
	*	`-n` prefix each matching line with line number
	*	`-v` select non-matching lines (invert matching)

## 1.7 File Permission

*	UNIX supports security for each file or directory based on 3 kinds of users:
	*	user: owner of the file
	*	group:	arbitrary name associated with a set of userids
	*	other: any other users
*	File or directory has permissions, read, write, and execute/search for the 3 sets of users.
	* Read/write allow specified set of users to read/write a file/directory
	*	Executable/searchable:
		*	file: execute as a command, e.g. file contains a program or shell script.
		*	directory: traverse through directory node but not read (cannot read file names)
*	Use `ls -l` command to print file permission information.
*	Columns are: permissions, # of directories (including . and ..), owner, group, file size, change data, file name.
*	Permission information is:
	d = directory, user permission, group permission, other permission
*	In general, never allow "other" to read or write files
*	Defaults permissions (usually) on
	*	file: `rw-r-----`
	*	directory:	`rwx------`
*	`chgrp`: change group-name associated with file.
*	Creating/deleting group-names is done by system administrator.
*	`chmod`: add or remove from any of the 3 security levels
*	To achieve desired access, must associate permission along entire pathname and files

## 1.8 Input/Output Redirection

*	Every command has three standard files: input (0), output (1), and error (2).
*	By default, these are connect to the keyboard (input) and screen (output/error).
*	To close an input file from the keyboard, type control-D causing the shell to close the keyboard input file.
*	Redirection allows
	*	input from a file (faster than typing at keyboard)
	*	saving output to a file for subsequent examination or processing
*	Redirection performed using operators < for input and > / >> for output to/from other sources.
	*	`<` means read input from file rather than keyboard
	*	`>` (same as `1>`) `1>` `2>` means file and write output/errors to file rather than screen
	*	`>>` means create if needed file and append output/errors to file rather than screen.
*	Command is usually unaware of redirection.
*	Can tie standard error to output (And vice versa) using `>&` both write to same place.
*	Order of typing redirection files is important.
*	To ignore output, redirect to pseudo-file `/dev/null`
*	Source and target cannot be the same for redirection.
*	Redirection requires explicit creation of intermediate (temporary) files
*	Shell pipe operator `|` makes standard output for a command the standard input for the next command, without creating intermediate file.
*	Standard error is not piped unless redirect to standard output.

## 1.9 Script

*	A **shell program* or **script** is a file (scriptfile) containing shell commands to be executed.

```Bash
#!/bin/bash [ -x ]
date # shell and OS commands
whoami
echo Hi There
```

*	First line begins with magic comment: `#!` (sha-bang) with shell pathname for executing the script.
*	Forces specific shell to be used, which is run as a subshell.
*	If `#!` is missing, the subshell is the same as the invoking shell for sh shell (bash) and sh is used for csh shells (tcsh).
*	Optional `-x` is for debugging and prints trace of the script during execution.
*	Script can be invoked directly using a specific shell:

```Bash
$ bash scriptfile # direct invocation
Sat Dec 19 07:36:17 EST 2009
jfdoe
Hi There!
```

or as a command if it has executable permissions.

```Bash
$ chmod u+x scriptfile # Magic, make script file executable
$ ./scriptfile # command execution
Sat Dec 19 07:36:17 EST 2009
jfdoe
Hi There!
```

*	Script can have parameters.

```Bash
#!/bin/bash [ -x ]
date
whoami
echo ${1} # parameter for 1st argument
```

*	Arguments are passed on the command line:

```Bash
$ ./scriptfile "Hello World"
Sat Dec 19 07:36:17 EST 2009
jfdoe
Hello World
$ ./scriptfile Hello World
Sat Dec 19 07:36:17 EST 2009
jfdoe
Hello
```

*	Special parameter variables to access arguments/results
	*	`${#}` number of arguments, excluding script name
	*	`${0}` always name of shell script
	*	`${1}, ${2}, ${3}` refers to arguments by position
	*	`${*}` and `${@}` list all arguments, excluding script name
		Difference occurs inside double quotes:
		*	`${*}` arguments as a single string string e.g., `"${1} ${2} . . ."`
		*	`${@}` arguments as separate strings e.g., `"${1}" "${2}" . . .`
	*	`${$}` process id of executing script
	*	`${?}` exit status of the last command executed

## 1.10 Shift

*	`shift [N]`: destructively shift parameters to the left `N` positions.
	*	If no N, 1 is assumed.
	*	If N is 0 or greater than ${#}, there is no shift.
		```Bash
		$ cat scriptfile
		#!/bin/bash
		echo ${1}; shift 1
		echo ${1}; shift 2
		echo ${1}; shift 3
		echo ${1}
		$ ./scriptfile 1 2 3 4 5 6 7
		1
		2
		4
		7
		```

## 1.11 Shell Variables

*	Each shell has a set of environment (global) and script (local/parameters) variables.
*	Variable-name syntax: `[_a-zA-Z][_a-zA-Z0-9]*`, "*" is repetition modifier.
*	**Case-sensitive**
*	**Keywords** are reserved identifiers
*	Variable is declared **dynamically** by assigning a value with operator "=" **No spaces before or after "="**
*	Variable can be removed

```Bash
$ unset var # remove variable
$ echo var is ${var}
var is # no value for undefined variable “var”
```

*	**Variable ONLY holds string value (arbitrary length)**.
*	Variable's value is deferences using operators `$` or `${}`

```Bash
$ echo $a1 ${a1}
/u/jfdoe/cs246/a1 /u/jfdoe/cs246/a1
$ cd $a1 # or ${a1}
```

*	Dereferencing an undefined variable returns an empty string.

```Bash
$ echo var is ${var} # no value for undefined variable “var”
var is
$ var=Hello
$ echo var is ${var}
var is Hello
```

*	**Beware concatenation**
*	Always use braces to allow concatenation with other text.
*	Shell has 3 sets of variables: environment, local, routine parameters.
*	New variable declare on the local list.
*	A variable is moved to environment list if exported.

```Bash
$ export var # move from local to environment list
```

*	Login shell starts with a number of useful environment variable

```Bash
$ set # print variables/routines (and values)
HOME=/u/jfdoe # home directory
HOSTNAME=linux006.student.cs # host computer
PATH=. . . # lookup directories for OS commands
SHELL=/bin/bash # login shell
```

*	A script executes in its own subshell with a copy of calling shell's environment variables (works across different shells), but not calling shell's local or arguments.
*	When a (sub)shell ends, changes to its environment variables do not affect the containing shell (**environment variables only affect subshells**).
*	**Only put a variable in the environment list to make it accessible by subshells.**

## 1.12 Arithmetic

*	Arithmetic requires integers

```Bash
$ i=3+1
$ j=${i}+2
$ echo ${i} ${j}
3+1 3+1+2
```

*	Arithmetic is performed by
	*	Converting a string to an integer (if possible)
	*	Performing an integer operation
	*	Converting the integer result back to a string
*	Bash performs these steps by with shell-command operator `$((expression))`.

```Bash
$ echo $((3 + 4 - 1))
6
$ echo $((3 + ${i} * 2))
8
$ echo $((3 + ${k})) # k is unset
bash: 3 + : syntax error: operand expected (error token is " ")
```

*	Basic integer operation `+ - * / %` with usual precedence and `()`.
*	For shells without arithmetic shell-command (e.g. sh, csh), use system command `expr`

```Bash
$ expr 3 + 4 - 1 # for sh, csh
6
$ expr 3 + ${i} \* 2 # escape *
8
$ expr 3 + ${k} # k is unset
expr: non-numeric argument
```

## 1.13 Routine

*	Routine is a script in a script

```Bash
routine name() { # number of parameters depends on call
	# commands
}
```

*	Invoke like a script.
*	Variables/routines should be created before used.
*	E.g. create a routine to print incorrect usage-message.

```Bash
usage() {
echo "Usage: ${0} -t -g -e input-file [ output-file ]"
exit 1 # terminate script with non-zero exit code
}
usage # call, no arguments
```

*	Routine arguments are accessed the same as in a script

```Bash
cat scriptfile
#!/bin/bash
rtn() {
	echo ${#} # number of command-line arguments
	echo ${0} ${1} ${2} ${3} ${4} # arguments passed to routine
	echo "${*}" # all arguments as a single string
	echo "${@}" # all arguments as separate strings
	echo ${$} # process id of executing subshell
	return 17 # routine exit status
}
rtn a1 a2 a3 a4 a5 # invoke routine
echo ${?} # print routine exit status
exit 21 # script exit status
$ ./scriptfile # run script
5 # number of arguments
scriptfile a1 a2 a3 a4 # script-name / args 1-5
a1 a2 a3 a4 a5 # args 1-5, 1 string
a1 a2 a3 a4 a5 # args 1-5, 5 strings
27028 # process id of subshell
17 # routine exit status
$ echo ${?} # print script exit status
21
```

*	`source` filename: execute commands from a file in the current shell.
	*	For convenience or code sharing, subdivided script into multiple files.
	*	No `#!...` at top, because not invoked directly like a script.
	*	Sourcing file includes it into current shell script and evaluates lines.
	*	Created or modified variables/routines from sourced file immediately affect current shell.

## 1.14 Control Structures

*	Shell provides control structures for conditional and iterative execution; syntax for bash is presented

### 1.14.1 Test

*	Test (`[]`) command compares strings, integers and queries files.
*	Test expression is constructed using the following:

| Test | Operation | Priority |
|---|---|---|
| `! expr` | not | high |
| `\( expr \)` | evaluation order (must be escaped) |  |
| `expr1 -a expr2` | logical and (not short-circuit) |  |
| `expr1 -o expr2` | logical or (not short-circuit) | low |

*	Test comparison is performed using the following:

| test | operation |
|---|---|
| string1 = string2 | equal (not ==) |
| string1 != string2 | not equal |
| integer1 -eq integer2 | equal |
| integer1 -ne integer2 | not equal |
| integer1 -ge integer2 | greater or equal |
| integer1 -gt integer2 | greater |
| integer1 -le integer2 | less or equal |
| integer1 -lt integer2 | less |
| -d file | exists and directory |
| -e file | exists |
| -f file | exists and regular file |
| -r file | exists with read permission |
| -w file | exists with write permission |
| -x file | exists with executable or searchable |

*	Logical operators `-a` (and) and `-o` (or) evaluate both operands.
*	`test` returns 0 if expression is true and 1 otherwise (counter intuitive)

```Bash
$ i=3
$ test 3 -lt 4 # integer test
$ echo ${?} # true
0
$ [ 8whoami 8 = "jfdoe" ] # string test, need spaces
$ echo ${?} # false
1
$ [ 2 -lt ${i} -o 8whoami 8 = "jfdoe" ] # compound test
$ echo ${?} # true
0
$ [ -e q1.cc ] # file test
$ echo ${?} # true
0
```

### 1.14.2 Selection

*	An `if` statement provides conditional control-flow.

```Bash
if test-command
	then
		commands
elif test-command
	then
		commands
...
else
	commands
fi

if test-command ; then
	commands
elif test-command ; then
	commands
else
	commands
fi
```

*	test-command is evaluated; exit status of zero implies true, otherwise false.
*	Check for different conditions:

```Bash
if [ "8whoami8" = "jfdoe" ] ; then
	echo "valid userid"
else
	echo "invalid userid"
fi
if diff file1 file2 > /dev/null ; then # ignore diff output, check exit status
	echo "same files"
else
	echo "different files"
fi
if [ -x /usr/bin/cat ] ; then
	echo "cat command available"
else
	echo "no cat command"
fi
```

*	**Beware unset variables or values with special characters (e.g. blanks)**

```Bash
if [ ${var} = ’yes’ ] ; then . . . # var unset => if [ = ’yes’ ]
bash: [: =: unary operator expected
if [ ${var} = ’yes’ ] ; then . . . # var=“a b c” => if [ a b c = ’yes’ ]
bash: [: too many arguments
if [ "${var}" = ’yes’ ] ; then . . . # var unset => if [ “” = ’yes’ ]
if [ "${var}" = ’yes’ ] ; then . . . # var=“a b c” => if [ “a b c” = ’yes’ ]
```

*	**When dereferencing, always quote variables**, except for safe variables `${#} ${$} ${?}` which generate numbers.
*	A `case` statement selectively executes one of N alternatives based on matching a string expression with a series of pattern (globbing) e.g.

```Bash
case expression in
	pattern | pattern | . . . ) commands ;;
	. . .
	* ) commands ;; # optional match anything (default)
esac
```

*	When a pattern is matched, the commands are executed up to `;;` and control exists the `case` statement.
*	If no pattern is matched, the `case` statement does nothing.
*	E.g. command with only one of these options: `-h, --help, -v, --verbose, -f file, --file file` use `case` statement to process option:

```Bash
usage() { . . . } # print message and terminate script
verbose=no # default value
case "${1}" in # process single option
	’-h’ | ’--help’ ) usage ;;
	’-v’ | ’--verbose’ ) verbose=yes ;;
	’-f’ | ’--file’ ) # has additional argument
		shift 1 # access argument
		file="${1}"
		;;
	* ) usage ;; # default, has to be one argument
esac
if [ ${#} -ne 1 ] ; then usage ; fi # check only one argument remains
. . . # execute remainder of command
```

### 1.14.3 Looping

*	`while` statement executes its commands zero or more times.

```Bash
while test-command
	do
		commands
done

while test-command ; do
	commands
done
```

*	test-command is evaluated; exit status of zero implies true, otherwise false.
*	Check for different conditions:

```Bash
# print command-line parameters, destructive
while [ "${1}" != "" ] ; do # string compare
	echo "${1}"
	shift # destructive
done

# print command-line parameters, non-destructive
i=1
while [ ${i} -le ${#} ] ; do
	eval echo "\${${i}}" # second substitution of “${1}” to its value
	i=$((${i} + 1))
done

# process files data1, data2, . . .
i=1
file=data${i}
while [ -f "${file}" ] ; do # file regular and exists?
	. . . # process file
	i=$((${i} + 1)) # advance to next file
	file=data${i}
done
```

*	`for` statement is a specialized `while` statement for iterating with an index over list or whitespace-delimited strings.

```Bash
for index [ in list ] ; do
	commands
done

for name in ric peter jo mike ; do
	echo ${name}
done

for arg in "${@}" ; do # process parameters, why quotes?
	echo ${arg}
done
```

*	Or over a set of values:

```Bash
for (( init-expr; test-expr; incr-expr )) ; do # double parenthesis
	commands
done
for (( i = 1; i <= ${#}; i += 1 )) ; do
	eval echo "\${${i}}" # second substitution of “${1}” to its value
done
```

*	Use directly on command line (rename `.cpp` file into `.cc`)

```Bash
$ for file in *.cpp ; do mv "${file}" "${file%cpp}"cc ; done
```
`%` removes matching suffix; `#` removes matching prefix

*	A `while/for` loop may contain `break` and `continue` to terminate loop or advance to the next loop iteration.

```Bash
i=1 # process files data1, data2, . . .
while [ 0 ] ; do # while true, infinite loop
	file=data${i} # create file name
	if [ ! -f "${file}" ] ; then break ; fi # file not exist, stop ?
		. . . # process file
	if [ ${?} -ne 0 ] ; then continue ; fi # bad return, next file
		. . . # process file
		i=$((${i} + 1)) # advance to next file
done