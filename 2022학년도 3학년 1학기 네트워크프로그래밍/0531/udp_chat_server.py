# 9회차
import socket
port = 5000
maxsize = 1024
sock = socket.socket(socket.AF_INET,socket.SOCK_DGRAM) # UDP
sock.bind(('172.16.0.145', port)) # create server socket

print("Waiting for client")
while True:
    print("<- ", end ='')
    data, addr = sock.recvfrom(maxsize) # receive data (1024 bytes) from client
    print(data.decode()) # print received data
    print(addr) # print client address and port
    resp = input("-> ") # input message
    sock.sendto(resp.encode(),addr) # send message to client
    