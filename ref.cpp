#include <iostream>

int main()
{
    // int myInt = 10;
    // int *ptrOld = &myInt;

    int myInt = 10;
    int &ref = myInt; // ref is a reference to myInt
    std::cout << &myInt << "\n"
              << &ref << std::endl; // Same address
    std::cout << ref << std::endl;

    // std::cout << "Address of old `myInt`: " << ptrOld << std::endl;
    // std::cout << "Address of old `myInt`: " << &myInt << std::endl;
    // std::cout << "Value of old `myInt`: " << *ptrOld << std::endl;
    // std::cout << "Value of old `myInt`: " << &ptrOld << std::endl;

    // myInt = 20;
    // int *ptrNew = &myInt;
    // std::cout << "Address of new `myInt`: " << ptrNew << std::endl;
    // std::cout << "Address of old `myInt`: " << &myInt << std::endl;
    // std::cout << "Value of new `myInt`: " << *ptrNew << std::endl;

    return 0;
}