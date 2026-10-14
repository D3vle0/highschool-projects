from pydoc import cli
import socket
import time

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
address = ("", 5001)
s.bind(address)
s.listen(5)

while 1:
    client, addr = s.accept()
    print("Connection requested from", addr)
    print(time.ctime(time.time()))
    client.send(time.ctime(time.time()).encode())
    client.send("\n 3321 배상혁 completed".encode())

    client.close()
