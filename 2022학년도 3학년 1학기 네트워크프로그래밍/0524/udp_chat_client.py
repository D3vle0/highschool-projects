import socket

BUFSIZE=1024
port=5001

sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

while 1:
    msg = input('Message to send: ')
    sock.sendto(msg.encode(), ('192.168.0.20', port))
    data = sock.recvfrom(BUFSIZE)
    print(data)