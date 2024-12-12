def showThese(old_str, new_str, old_int, new_int, prompt):
    print()
    print(prompt)
    print(f'  {old_str=} \t {id(old_str=)}')   # 注意id。
    print(f'  {new_str=} \t {id(new_str)=:<20}', end='')   # 注意id。
    print(f'{new_str is old_str=}')   # 檢查兩者的id是否相同。
    print()
    print(f'  {old_int=} \t {id(old_int=)}')       # 注意id。
    print(f'  {new_int=} \t {id(new_int)=:<20}')   # 注意id。
    print(f'{new_int is old_int=}')   # 檢查兩者的id是否相同。
    print()

old_str = 'Alex'
old_int = 3
new_str = old_str
new_int = old_int
showThese(old_str, new_str, old_int, new_int, 'Before change')

old_str = 'Wallace'
old_int = 5
showThese(old_str, new_str, old_int, new_int, 'After change')
