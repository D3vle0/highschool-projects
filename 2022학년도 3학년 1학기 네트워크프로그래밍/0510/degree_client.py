# 4회차

# import module
from tkinter import *
from socket import *
import threading
import struct

# send celcius value to server
def calculate():
    global temp
    temp = float(entry1.get()) # get input value
    sock.send(str(temp).encode()) # send to server

# receive fahrenheit value from server
def handler(sock):
    while True:
        try:
            r_msg = socket.recv(1024) # receive 1024 bytes
        except:
            pass
        else:
            entry2.delete(0, END) # delete previous value
            entry2.insert(0, r_msg.decode()) # insert received value
            entry1.delete(0, END) # delete celcius value

# connect to server
sock = socket(AF_INET, SOCK_STREAM)
sock.connect(('192.168.0.2', 2500))

# create window
root=Tk()
message_label=Label(text="Enter the temperature (C):", font=("Verdana", 16)) # create label
entry1 = Entry(font=("Verdana", 16), width=5) # set label attributes

recv_label=Label(text="Temperature in F:", font=("Verdana", 16)) # create label
entry2 = Entry(font=("Verdana", 16), width=5) # set label attributes

calc_button=Button(text="send", font=("Verdana", 12), command=calculate) # create button

# set components' position
message_label.grid(row=0, column=0, sticky=W)
recv_label.grid(row=1, column=0, sticky=W)
entry1.grid(row=0, column=1)
entry2.grid(row=1, column=1)
calc_button.grid(row=0, column=2, padx=10, pady=10)

# create thread
cThread = threading.Thread(target=handler, args=(sock,))
cThread.daemon = True
cThread.start()

mainloop()