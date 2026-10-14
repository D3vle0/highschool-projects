import socket
port=5000
BUFSIZE=1024
address=("192.168.0.2", port)

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect(address)

while True:
    msg=input("Message to send: ")
    try:
        n=s.send(msg.encode())
    except:
        print("송신 연결이 종료되었습니다.")
        retry=input("계속? (y/n)")
        if retry == "n":
            s.close()
            break
        else:
            continue
    else:
        print("{} bytes sent".format(n)) # 전송된 바이트 수
    try:
        data=s.recv(BUFSIZE)
    except:
        print("수신 연결이 종료되었습니다.")
        s.close()
        break
    else:
        print("Received message: %s" %data.decode())