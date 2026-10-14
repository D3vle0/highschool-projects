# 8회차
from PIL import Image
import pytesseract
import socket
BUFSIZE = 1024
port = 5000
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

image_path = r'./test6.png'

pytesseract.pytesseract.tesseract_cmd = '/opt/homebrew/bin/tesseract'
text = pytesseract.image_to_string(Image.open(image_path), lang='eng')
print(text)

sock.sendto(text[0:31].encode(), ('192.168.0.2', port))