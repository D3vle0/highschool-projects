import random
print(random.randint(1,5))
print(random.random())
print(random.choice("hello"))

import os
os.system("calc")
print(os.getcwd())
print(os.chdir("/Users/devleo/Desktop/project/network-programming/0412"))
print(os.getcwd())

print(os.mkdir("ttt"))
print(os.listdir("/Users/devleo/Desktop/project/network-programming/0412"))
os.rmdir("ttt")
print(os.listdir("/Users/devleo/Desktop/project/network-programming/0412"))

import sys
print(sys.version)
print(sys.prefix)
print(sys.path)
# print(sys.stdin.readline())
print(sys.stdout.write("Hello World!"))

import math
print(math.pi)
print(math.sin(math.pi/6))
print(math.log10(2))

import time
print(time.time())
print(time.asctime())

b=0

try:
    a=1/b
except ZeroDivisionError:
    print("Error")
else:
    print("No Error")

try:
    a=int(input("Enter a number: "))
except Exception as e:
    print("Error", e)
else: 
    print(a)