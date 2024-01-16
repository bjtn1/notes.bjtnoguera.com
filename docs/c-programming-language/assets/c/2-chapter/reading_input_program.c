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
