# 11회차
from datetime import datetime
import socket
now = datetime.now()
temp_sec = now.second
sock = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
BUFFSIZE = 1024
port = 5000

print("현재 : ", now)
print("현재 날짜 : ", now.date())
print("현재 시간 : ", now.time())
print("timestamp : ", now.timestamp())
print("년 : ", now.year)
print("월 : ", now.month)
print("일 : ", now.day)
print("시 : ", now.hour)
print("분 : ", now.minute)
print("초 : ", now.second)
print("마이크로초 : ", now.microsecond)
print("요일 : ", now.weekday())
print("문자열 변환 : ", now.strftime('%Y-%m-%d %H:%M:%S'))

str_var = '' # string variable
while 1: # infinite loop
    now = datetime.now() # get current time
    if temp_sec != now.second : #  if second is changed
        print(now.second) # print second
        str_var = str(3321)+'_'+str(now.second) # save std number and second
        sock.sendto(str_var.encode(),('172.16.1.73', port)) # send data
    temp_sec = now.second # save current second
#1. 30번 라인이 왜 있는지 이유를 작성하시오.
# time.sleep() 이 없는 단순 while문이기 때문에 1초마다 값을 전송하기 위해서 현재 초 값을 임시 변수에 저장하고, 계속해서 비교를 하다가 다른 초값이 나오면 전송하고, 이전 초값이 나오면 전송하지 않는다.
#2. 23~30번 내의 코드를 자유롭게 분석하여 작성하시오.