print()
a = "hello Alex"
b = "hello Alex"
print(f'1. {id(a) == id(b) = }')

a, b = "hello Alex", "hello Alex"
print(f'2. {id(a) == id(b) = }')

a, b = float(1000), float(1000)
print(f'3. {id(a) == id(b) = }')

print(f'4-1. {id(int(1000.0)) = }')
print(f'4-2. {id(int(2000.0)) = }')
print(f'4-3. {id(int(1000.0)) == id(int(2000.0)) = }')
