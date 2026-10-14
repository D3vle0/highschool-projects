# 12회차
import tkinter
import tkinter.font
import socket

window = tkinter.Tk()
window.title('시간 카운터')
window.geometry('400x200')
window.resizable(0,0)

font = tkinter.font.Font(size=30)
label = tkinter.Label(window, text="", font=font)
label.pack()
sock = socket.socket(socket.AF_INET,socket.SOCK_DGRAM)
port = 5000

cnt = 0
send_text = ''
def get_1sec():
    global cnt
    now_cnt = str(cnt)
    cnt = cnt + 1
    send_text = now_cnt+'_'+'3321'
    sock.sendto(send_text.encode(),('172.16.1.73', 5000))
    label.config(text=now_cnt)
    window.after(1000,get_1sec)

get_1sec()

window.mainloop()


