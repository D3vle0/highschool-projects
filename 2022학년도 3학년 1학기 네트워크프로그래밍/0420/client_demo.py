# 1회차
import socket

port=int(input("Port no: "))
address = ("192.168.0.2", port)

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect(address)
while True:
    msg=input("Message to send: ")
    s.send(msg.encode())
    data = s.recv(1024)
    print("Received message: %s" %data.decode())