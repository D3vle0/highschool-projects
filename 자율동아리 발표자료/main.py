import help
import sys
import prob
import hashlib
# from pwn import *

FLAG="FLAG{4ndr0id+pwnt00ls=b3st_pr0b_3v3r!!}"

def choice():
    clear1=0
    clear2=0
    while 1:
        if clear1 * clear2:
            print(FLAG)
            sys.exit(0)
        if clear1:
            print("1. Encryption (solved)")
        else:
            print("1. Encryption")
        if clear2:
            print("2. Decryption (solved)")
        else:
            print("2. Decryption")
        print("3. Help")
        try:
            main_choice=int(input("> "))
        except:
            sys.exit(0)
        if main_choice == 3:
            help.help()
        elif main_choice == 1:
            for i in range(100):
                prob.encryption()
            clear1=1
        elif main_choice == 2:
            for i in range(100):
                prob.decryption()
            clear2=1
        else:
            sys.exit(0)

if __name__ == "__main__":
    help.banner()
    choice()
