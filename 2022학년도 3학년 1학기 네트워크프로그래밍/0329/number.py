from ast import Num
import random
secret_num = random.randint(1, 20)
try_num = 0
guess = 0
while guess != secret_num and try_num < 3:
    guess = eval(input("숫자를 입력하시오: "))
    try_num = try_num + 1
    if guess < secret_num:
        print("더 큽니다. 남은횟수:", 3-try_num, "\n")
    elif guess > secret_num:
        print("더 작습니다. 남은횟수:", 3-try_num, "\n")
    else:
        print("정답입니다.")

if try_num == 3 and guess != secret_num:
    print("정답은", secret_num, "입니다.")
