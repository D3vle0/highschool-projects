#버튼 클릭으로 ON/OFF 제어
from tkinter import *
import socket

def button_command():
    global sock, btn_text, btn_color
    
    if btn_text == 'ON':
        btn_text = 'OFF'
        btn_color = 'blue'
        sock = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
        port = 5000
        sock.sendto("3321".encode(),('172.16.2.71', port))

    elif btn_text == 'OFF':
        btn_text = 'ON'
        btn_color = 'red'
    
    LED_button.configure(text=btn_text, bg=btn_color)    

root = Tk()
btn_color = 'red'
btn_text = 'ON'

LED_label = Label(text="LED")
LED_button = Button(text=btn_text, fg='blue',
                    bg=btn_color, command=button_command)

LED_label.grid(row=0, column=0)
LED_button.grid(row=0, column=1)

root.mainloop() #윈도우 루프 실행
