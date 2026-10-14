import socket, threading

class ClientThread(threading.Thread):
    def __init__(self, clientAddress, clientsocket):
        threading.Thread.__init__(self)
        self.csocket = clientsocket
        print("New socket added:", clientAddress)

    def run(self):
        print("Connection from :", clientAddress)

        msg=""
        rtn=""
        while 1:
            data=self.csocket.recv(2048)
            msg=data.decode()

            # if msg != "":
            # if msg != "": 가 왜 있는지 생각하기
            # 위 문장을 삭제하고 클라이언트가 일방적으로 끊어버리는 것을 테스트해보자.

            # if msg != "" 가 있으면 메세지를 보내는 코드에서 BrokenPipeError가 발생한다. 파이썬 공식 문서에 따르면, 다른 쪽 끝이 닫힌 파이프에 쓰려고 하거나, 쓰기가 종료된 소켓에 쓰려고 할 때 발생한다. 쉽게 말하자면 프로세스가 파이프에 데이터를 쓰려고 하지만 반대쪽에서 받아주는 프로세스가 없을 때 발생한다.
            # if msg != "" 가 없으면 메세지를 받는 코드에서 ConnectionResetError가 발생한다. 파이썬 공식 문서에 따르면, 연결이 상대방에 의해 강제 종료될 때 발생한다.
            if msg == "quit":
                print("quit")
                break
            print("from:", clientAddress)
            print("from client:", msg)
            print("input to client: ")
            rtn=input()
            # self.csocket.send(bytes(rtn, "utf-8"))
            self.csocket.send(bytes(msg, "utf-8"))
            # 차이점 작성하기

            # rtn은 server가 client에게 보내는 메세지고, msg는 server가 client로부터 받은 메세지다.
            # 따라서 client에게 rtn을 보내면 server가 보내고자 하는 내용이 정상적으로 보내지지만 msg를 보내면 client로부터 받은 메세지를 보내게 되어서 결과적으로 client 측은 자신이 보낸 메세지를 그대로 받게 된다.
        
        print("Client at", clientAddress, " disconnected...")

LOCALHOST = "192.168.0.33"
PORT = 5001

# 서버 소켓 생성
server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
server.bind((LOCALHOST, PORT))
print("Server started")

while 1:
    server.listen(5)
    clientsock, clientAddress = server.accept()
    newthread = ClientThread(clientAddress, clientsock)
    newthread.start()