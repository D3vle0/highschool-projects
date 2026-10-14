str1="this is a literal string"
print(str1, type(str1))

exam=85
report=85
print(exam>=80 and report>=80)
print(exam>=90 or report>=90)

print(not(exam<90))

if int(input("정수 입력: ")) >= 90:
    print("합격입니다.")

print("이 영화를 보실 수 있습니다.") if int(input("나이를 입력하시오: ")) >= 19 else print("이 영화를 보실 수 없습니다.")

year=int(input("년도를 입력하시오: "))
if year % 4 == 0 and year % 100 != 0 or year % 400 == 0:
    print("윤년입니다.")
else:
    print("윤년이 아닙니다.")

num=int(input("type int number: "))
if num>0:
    print("양수입니다")
elif num==0:
    print("0")
else:
    print("음수립니다")

i=1
sum=0
while i<=100:
    sum+=i
    i+=1
print(sum)

# import hashlib

# print(hashlib.md5(("pythonisfun").encode()).hexdigest())

# password=""
# while hashlib.md5((password).encode()).hexdigest()!="fe6ac033580f26373ba8138bf090cb1b":
#     password=input("암호 입력")
# print("로그인 성공")

for i in range(1,6,1):
    print("9 *", i, "=", 9*i)

for i in range(10000):
    print("welcome")

n=int(input("정수를 입력하시오: "))
fact=1
for i in range(1,n+1):
    fact*=i
print(n, "! =", fact)

import random
print("동전 던지기 게임을 시작합니다.")
coin=random.randint(0,1)
if coin==0:
    print("앞면")
else:
    print("뒷면")

