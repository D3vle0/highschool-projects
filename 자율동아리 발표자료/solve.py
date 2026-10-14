# !/usr/bin/python3
from pwn import *
import hashlib, sqlite3, json
p=remote("untrust.kro.kr", 31337)
p.sendlineafter("> ", "1")
for prob in range(100): ## encryption prob
    tmp=""
    path=[]
    for i in range(3):
        tmp+=p.recvline().decode()
    for i in tmp:
        if i != "\n":
            path.append(int(i))
    queue=[]
    for i in range(9):
        queue.append(path.index(i+1))
    p.sendlineafter("> ", hashlib.sha1(str(queue).encode()).hexdigest())
p.sendlineafter("> ", "2")
conn = sqlite3.connect("/root/untrust-android/GestureRainbowTable.db")
cur = conn.cursor()
for prob in range(100): ## decryption prob
    hash = p.recvline().decode()[:-1]
    cur.execute(f"SELECT pattern FROM RainbowTable WHERE hash = '{hash}'")
    rows = cur.fetchall()
    for row in rows:
        queue=json.loads(row[0])
    path=[0]*9
    for i in range(9):
        path[queue[i]]=i+1
    correct_answer = ""
    for i in range(9):
        if (i+1)%3:
            correct_answer += str(path[i])
        else:
            correct_answer += str(path[i]) + "\n"
    correct_answer = correct_answer[:-1]
    for i in range(3):
        p.sendlineafter("> ", correct_answer.split("\n")[i])
p.interactive()
