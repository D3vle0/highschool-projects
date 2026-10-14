#UDP 클라이언트 프로그램

import socket
BUFFSIZE = 1024
port = 5000

sock = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
while True:
    msg = input("Message to send: ")
    
    sock.sendto(msg.encode(),('서버 IP', port))
    data = sock.recvfrom(1024)
    
    print( data )