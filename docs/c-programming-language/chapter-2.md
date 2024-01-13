---
description: "Learn about the fundamentals of the C programming language"
---

# Chapter 2: C fundamentals

> Here's the [link to my repo containing the exercises/projects for this chapter](https://github.com/bjtn1/c-programming-a-modern-approach)

## Chapter 2.1: A Bad Pun program
```c showLineNumbers
#include <stdio.h>

int main(void) {
    printf("To C, or not to C: that is the question.\n");
    return 0;
}
```


### Compiling and linking
> ❗️ I have an M2 MacBook, and I use `gcc` to compile c code

This compiles `pun.c` into an executable called `<name_of_output_file>`
```console
$ gcc -o <name_of_output_file> pun.c
```
```console
$ gcc -o pun pun.c
```

To run our program we can run
```console
$ ./pun
```
> ❗️ Make sure you `cd` into the folder where the `pun` executable lives


## Chapter 2.2: The General Form of a Simple Program
In general, a c program will look something like 
```c showLineNumbers
#directives

int main(void) {
    statements;
}
```

### Directives
`directives` modify the program before it's compiled (to add things like the print statement from the pun program) and always starts with a `#`


### `main`
`main` is the function that automatically gets run whenever the program gets executed.

`main` returns an `int` indicating whether or not the program ran successfully. The program terminates as soon as it reaches the `return 0;` statement

If `main` doesn't have a return statement, it'll still run, but your compiler will hate you and yell at you


### Comments in `c`
Comments in `c` look like this 
```c showLineNumbers
#include <stdio.h>

int main(void) {
    // Super useful comment!!11
    printf("sup\n");
    return 0;
}
```

If you want multi-line comments, do this
```c showLineNumbers
#include <stdio.h>

int main(void) {
    /* Super
     * useful
     * comment!!!11
     */
    printf("sup\n");
    return 0;
}
```
### Variables and assignment
Variables must be declared with the desired type before assignment or they must be declared and assigned on the same line

```c showLineNumbers
int main(void) {
    // You can declare more than one variable of the same type in one line
    int age, wheels_in_a_car, days_in_a_year;

    // Declaration and assignemtn on the same line is OK
    int height = 2;
    
    // Declaration first, assignment after is also OK
    int weight;
    weight = 3;

    // Assignment before declaration is WRONG
    width = 10; // Error on this line
    int width;
    
    return 0;
}
```

### Types and their size in bytes
| Type      | Size in bytes               |
| --------- | --------------------------- |
| `int`     | 2 to 4 (most likely 4)      |
| `float`   | 4                           |
| `double`  | 8                           |
| `char`    | 1                           |

`sizeof(some_type)` in c will return the size in bytes of `some_type`
> Don't worry about the `"%zu\n"` part for now.
```c showLineNumbers
#include <stdio.h>

int main(void) {
    printf("%zu\n", sizeof(int));       // Prints 4
    printf("%zu\n", sizeof(float));     // Prints 4
    printf("%zu\n", sizeof(double));    // Prints 8
    printf("%zu\n", sizeof(char));      // Prints 1
    return 0;
}
```


### Printing the values of variables (placeholders\format specifier)
| Format Specifier  | Type it Specifies |
| ----------------- | ----------------- |
| `%d`              | `int`             |
| `%f`              | `float`           |
| `%lf`             | `double`          |
| `%c`              | `char`            |

To print out the value of a variable, you have to type the format specifier and then type which variable you wanna print out. For example...

```c showLineNumbers
#include <stdio.h>

int main(void) {
    int height = 10;
    float length = 2.3;
    double width = 3.14;
    char a = "b";

    printf("%d\n", height);     // %d = placeholder for ints
    printf("%f\n", length);     // %f = placeholder for floats
    printf("%lf\n", width);     // %lf = placeholder for doubles
    printf("%c\n", a);          // %c = placeholder for char

    return 0;
}
```


### Program: Computing the Dimensional Weight of a Box

## Chapter 2.5: Reading input
# STOPPED AT PAGE 47

