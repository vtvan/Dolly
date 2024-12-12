#include <iostream>

int main()
{
    int myInt = 3;
    int *ptrMyInt1 = &myInt;
    std::cout << "Before: The address of `myInt`: " << (long)ptrMyInt1 << std::endl;

    myInt = 5;
    std::cout << "After : The address of `myInt`: " << (long)ptrMyInt1 << std::endl;

    return 0;
}
