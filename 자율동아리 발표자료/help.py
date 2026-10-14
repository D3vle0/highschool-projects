import sys
def help():
    print("* each category contains 100 probs *")
    print("Encryption example: if your problem is...")
    print("187\n296\n345")
    print("then your hash value is sha1(\"[0, 3, 6, 7, 8, 5, 2, 1, 4]\") == 6fc102fa063e2ecf81c8e42751381357b3deb16b\n")
    print("Decryption example: if your problem is...")
    print("6fc102fa063e2ecf81c8e42751381357b3deb16b")
    print("then write down the pattern like this: ")
    print("187\n296\n345")
    print("="*20)
    print("this is a rainbow table http://bit.do/untrust-android-rainbowtable")
    sys.exit(0)

def banner():
    print("===== Welcome to untrust android forensics prob =====")
    banner="""
             _                  _                        _           _     _ 
 _   _ _ __ | |_ _ __ _   _ ___| |_       __ _ _ __   __| |_ __ ___ (_) __| |
| | | | '_ \| __| '__| | | / __| __|____ / _` | '_ \ / _` | '__/ _ \| |/ _` |
| |_| | | | | |_| |  | |_| \__ \ ||_____| (_| | | | | (_| | | | (_) | | (_| |
 \__,_|_| |_|\__|_|   \__,_|___/\__|     \__,_|_| |_|\__,_|_|  \___/|_|\__,_|
                                                                             
"""
    print(banner)
