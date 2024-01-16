/*
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
