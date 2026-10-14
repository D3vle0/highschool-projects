import socket
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect(("172.17.2.101", 5000))
print("time:", s.recv(1024).decode())