using System;

class Program
{
    unsafe static void Main(string[] args)
    {
        int myInt = 3;
        int* address1 = &myInt;
        Console.WriteLine($"value1 of `myInt`: {myInt}\t address1 of `myInt`: {(long)address1:X}");

        myInt = 5;
        int* address2 = &myInt;
        Console.WriteLine($"value2 of `myInt`: {myInt}\t address2 of `myInt`: {(long)address2:X}");

        Console.WriteLine($"address1 == address2: {address1 == address2}");
    }
}