import socket

port = 5001
BUFSIZE = 1024
address = ("192.168.0.20", port)

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect(address)

while 1:
    msg = input("Message to send: ")
    try:
        n = s.send(msg.encode())
    except:
        print("송신 연결 종료됨")
        retry = input("continue? (y/n)")
        if retry == "n":
            s.close()
            break
        else:
            continue
    else:
        print("{} bytes sent".format(n))
    try:
        data = s.recv(BUFSIZE)
    except:
        print("수신 연결 종료됨")
        s.close()
        break
    else:
        print("Received message: %s" %data.decode())