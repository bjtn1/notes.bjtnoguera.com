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
:::note
By defaut, `c` will treat any floating point number as a `double` unless you specify that you want it to be treated as a `float`

Example:
```c showLineNumbers
// This will be treated as a double
// Equivalent to double MY_HEIGHT_IN_METERS = 2.56;
#define MY_HEIGHT_IN_METERS 2.56 

// This will be treated as a float because of the `f` specifier
// Equivalent to float FREEZING_POINT = 32.0;
#define FREEZING_POINT 32.0f 
```
:::

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
```c showLineNumbers
/*
 * dweight.c
 * A program to compute the dimensional weight of a box
 * From C Programming: A Modern Approach, 2nd Edition
 */
#include <stdio.h>

int main(void) {
  // Notice we don't yet know how to read input...
  // This is covered in the following section  
  int height, length, width, volume, weight;

  printf("Dimensions: %dx%dx%dx\n", length, width, height);
  printf("Volume (in cubic inches): %d\n", volume);
  printf("Dimensional weight (in pounds): %d\n", weight);

  return 0;
}
```
## Chapter 2.5: Reading input

Too read input, use `scanf()`

### How to use `scanf(string: identifier, &some_variable)`

Much like `printf()`, `scanf()` needs to know the ***type*** of the expected input, and the ***address of*** the variable in which to store it

Recall this table for available identifiers
| Format Specifier  | Type it Specifies |
| ----------------- | ----------------- |
| `%d`              | `int`             |
| `%f`              | `float`           |
| `%lf`             | `double`          |
| `%c`              | `char`            |


Let's look at an example
```c showLineNumbers
// reading_input_program.c
#include <stdio.h>

int main(void) {
    // 1. Declare the variable you want to store
    int age;

    // 2. Call scanf
    // 2.1 Use "%d" to specify that we expect an integer
    // 2.2 Use `&age` to specify the address of the variable we want to store the input in
    // "&age" can be read as "the address of `age`"
    scanf("%d", &age);
    
    // We can verify this worked by printing this out
    printf("%d", age);

    return 0;
}
```
> Compile with `gcc reading_input_program.c -o rip`. Run with `./rip`

### Computing the dimensional weight of a box (revisited)
Now that we know how to gather input from the user, we can change our `dweight.c` program

```c showLineNumbers
/*
 * dweight.c
 * A program to compute the dimensional weight of a box
 * From C Programming: A Modern Approach, 2nd Edition
 */
#include <stdio.h>

int main(void) {
  int height, length, width, volume, weight;

  printf("Enter the length of the box: ");
  scanf("%d", &length);

  printf("Enter the width of the box: ");
  scanf("%d", &width);

  printf("Enter the height of the box: ");
  scanf("%d", &height);

  volume = height * length * width;
  weight = (volume + 165) / 166;

  printf("Dimensions: %d x %d x %d\n", length, width, height);
  printf("Volume (in cubic inches): %d\n", volume);
  printf("Dimensional weight (in pounds): %d\n", weight);

  return 0;
}
```

## Chapter 2.6: Defining Names for Constants
To define constants in `c`, we use ***macro definitions*** which look like this
```c showLineNumbers
#define MY_CONSTANT VALUE_OF_MY_CONSTANT
```

Things to note here:
- No semicolon at the end
- No "=" sign

### Converting from Fahrenheit to Celsius
```c showLineNumbers
/*
 * f_to_c.c
 * A program to convert fahrenheit to celsius
 * From C Programming: A Modern Approach, 2nd Edition 
 * */
#include <stdio.h>

// The "f" at the end of 32.0 indicates that this should be treated as a float
// not as a double
#define FREEZING_POINT 32.0f
#define SCALE_FACTOR (5.0f / 9.0f)

int main(void) {
  float fahrenheit;
  float celsius;

  printf("Enter Fahrenheit temperature: ");
  scanf("%f", &fahrenheit);

  celsius = (fahrenheit - FREEZING_POINT) * SCALE_FACTOR;

  // `%.1f` indicates that we want to print this float with an accuracy of 1  number after the decimal
  printf("Celsius equivalent: %.1f\n", celsius);

  return 0;
}
```
## 2.7 Identifires
# STOPPED AT PAGE 50
