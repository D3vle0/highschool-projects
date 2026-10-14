# 16회차
import serial # import module
import time
import socket
port = 5000
maxsize = 1024
sock = socket.socket(socket.AF_INET,socket.SOCK_DGRAM) # create UDP socket
sock.bind(('172.17.4.32', port)) # bind port
print("Waiting for client")

py_serial = serial.Serial( # create serial object
    # Window
    port='COM9',    
    # 보드 레이트 (통신 속도)
    baudrate=9600,
    timeout = 1
)

while True:
    data, addr = sock.recvfrom(maxsize) # receive 1024 bytes from client
    print(data.decode()) # print received data
    command = data.decode() # convert to string

    if command != '' : # if command is not empty
        py_serial.write(command[0].encode()) # write command
        response = py_serial.readline() # read response
    
        sock.sendto(response,addr) # send response to client
        print(response[:len(response)-1].decode()) # print response