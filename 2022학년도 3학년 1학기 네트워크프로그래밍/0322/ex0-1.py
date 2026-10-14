print(2+3)
print(50-5*6)
print((50-5*6)/4)
print(8/5)
print(17//3)
print(17 % 3)
print(2**7)

print(10+20)
print("10+20")
print("abc"*3)
x = 25
y = 32
z = x+y
print(x, y)
print(x, '+', y, '=', z)

n=10
print("n=%d" % n)
m=5.2
print("m=%f, n=%d" % (m,n))

n=input("Enter a number: ")
print(n, type(n))
print(int(n), type(int(n)))
print(float(n), type(float(n)))
print(str(n), type(str(n)))

name=input("Enter your name: ")
print("Hello", name)

print("The temperature in Fahrenheit is", (9/5)*float(input("Enter the temperature in Celsius: "))+32)