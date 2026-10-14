def func(a,b=2,c=3):
    print(a,b,c)
    return a+b+c

print(func(4,5))
print(func(5,c=7))

sum=lambda a,b:a+b
print(sum(10,20))
print(sum(20,20))

a=12
print("Decimal:",a)
print("Binary:",bin(a))
print("Hexadecimal:",hex(a))
print("Octal:",oct(a))

b='1110'
print("0b1110:",int(b,2))
c='213'
print("0b213:",int(c,8))
d='a02d'
print("0xa02d:",int(d,16))