# 2회차
import socket, time
port=5000
# BUFSIZE=1024
address=("192.168.0.2", port)

s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
# s.connect(address)
while True:
    msg=input("Message to send: ")
    s.sendto(msg.encode(), address)