using System;

class Program
{
    unsafe static void Main(string[] args)
    {
        int myInt1 = 3;
        int* address1 = &myInt1;
        Console.WriteLine($"value of `myInt1`: {myInt1}\t address of `myInt1`: {(long)address1:X}");

        int myInt2 = 3;
        int* address2 = &myInt2;
        Console.WriteLine($"value of `myInt2`: {myInt2}\t address of `myInt2`: {(long)address2:X}");

        Console.WriteLine($"address1 == address2: {address1 == address2}");
    }
}