import socket
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect(("192.168.0.2", 5000))
print("time:", s.recv(128).decode())