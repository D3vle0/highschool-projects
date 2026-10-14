# 17~20회차
from tkinter import *
import socket, time
host = "172.17.4.32"
port = 5000
sock = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)

def button1_command():
    global sock, btn1_text, btn1_color
    
    if btn1_text == "ON":
        btn1_text = "OFF"
        sock = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
        sock.sendto("b".encode(),(host, port))

    elif btn1_text == "OFF":
        btn1_text = "ON"
        sock = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
        sock.sendto("a".encode(),(host, port))
    
    built_in_LED_button.configure(text=btn1_text, bg=btn1_color)

def button2_command():
    global sock, btn2_text, btn2_color
    
    if btn2_text == "ON":
        btn2_text = "OFF"
        sock = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
        sock.sendto("f".encode(),(host, port))

    elif btn2_text == "OFF":
        btn2_text = "ON"
        sock = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
        sock.sendto("e".encode(),(host, port))
    
    LED_button.configure(text=btn2_text, bg=btn2_color)

def button3_command():
    global sock, btn3_text, btn3_color
    
    if btn3_text == "ON":
        btn3_text = "OFF"
        sock = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
        sock.sendto("d".encode(),(host, port))

    elif btn3_text == "OFF":
        btn3_text = "ON"
        sock = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
        sock.sendto("c".encode(),(host, port))
    
    servo_button.configure(text=btn3_text, bg=btn3_color)

def button4_command():
    global sock, btn4_text, btn4_color
    
    if btn4_text == "ON":
        sock = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
        while 1:
            time.sleep(0.1)
            sock.sendto("a".encode(),(host, port))
            time.sleep(0.1)
            sock.sendto("b".encode(),(host, port))

    elif btn4_text == "OFF":
        btn4_text = "ON"
        sock = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
        sock.sendto("c".encode(),(host, port))
    
    nuclear_button.configure(text=btn4_text, bg=btn4_color)

root = Tk()
btn1_color = "black"
btn2_color = "black"
btn3_color = "black"
btn4_color = "black"
btn1_text = "OFF"
btn2_text = "OFF"
btn3_text = "OFF"
btn4_text = "OFF"

built_in_LED_label = Label(text="Built in LED")
built_in_LED_button = Button(text=btn1_text, fg="black",
                    bg=btn1_color, command=button1_command)
built_in_LED_label.grid(row=0, column=0)
built_in_LED_button.grid(row=0, column=1)

LED_label = Label(text="LED")
LED_button = Button(text=btn2_text, fg="black",
                    bg=btn2_color, command=button2_command)
LED_label.grid(row=1, column=0)
LED_button.grid(row=1, column=1)

servo_label = Label(text="Servo")
servo_button = Button(text=btn3_text, fg="black",
                    bg=btn3_color, command=button3_command)
servo_label.grid(row=2, column=0)
servo_button.grid(row=2, column=1)

nuclear_label = Label(text="NUCLEAR")
nuclear_button = Button(text=btn4_text, fg="black",
                    bg=btn4_color, command=button4_command)
nuclear_label.grid(row=3, column=0)
nuclear_button.grid(row=3, column=1)

root.mainloop()