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

argument must be a directory and not a file
`cd :` move to home directory, same as `cd ~`
