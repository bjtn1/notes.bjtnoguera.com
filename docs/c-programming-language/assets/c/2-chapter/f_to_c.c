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
