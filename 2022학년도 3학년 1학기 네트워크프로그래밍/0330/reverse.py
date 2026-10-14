outStr = ""
count, i = 0, 0
inStr = input("type string: ")
count = len(inStr)
for i in range(count):
    outStr += inStr[count-(i+1)]

print("reversed string: %s" % outStr)
