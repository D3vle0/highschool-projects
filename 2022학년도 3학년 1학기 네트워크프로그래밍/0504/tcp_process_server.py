# 3회차
import socket
table = {"1": "one", "2": "two", "3": "three", "4": "four", "5": "five", "6": "six", "7": "seven", "8": "eight", "9": "nine", "10": "ten"}

# s=socket.socket(socket.AF_INET,socket.SOCK_STREAM)
s=socket.socket()
address=("172.16.0.242", 5001)
s.bind(address)
s.listen(10)
print("waiting...")

c_socket, c_addr = s.accept()
print("connection from", c_addr)

while 1:
    data = c_socket.recv(1024).decode()
    try:
        resp=table[data]
    except:
        c_socket.send("try again".encode())
    else:
        print(resp)
        c_socket.send(resp.encode())