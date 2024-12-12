#include <iostream>

int main()
{
    int value;
    std::cout << "Enter a value for the variable: ";
    if (std::cin >> value)
    {
        // Print the address of the variable
        std::cout << "The memory address of the variable is: " << &value << std::endl;
    }
    else
    {
        std::cout << "Invalid input. Please enter a valid integer." << std::endl;
    }

    std::cout << "Press Enter to exit..." << std::endl;
    std::cin.ignore(); // Clear the input buffer
    std::cin.get();    // Wait for user to press Enter
    return 0;
}
