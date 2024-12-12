#include <stdio.h>

int main()
{
    int myInt = 3;
    printf("Before: The reference of `myInt`: %p\n", (void *)&myInt);

    myInt = 5;
    printf("After : The reference of `myInt`: %p\n", (void *)&myInt);
    return 0;
}
