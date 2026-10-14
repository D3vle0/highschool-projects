def squareArea(s):
    area=s*s
    return area

a=squareArea(5)
b=squareArea(7)
print("한 변의 길이가 %d인 정사각형의 넓이는 %d입니다." % (5, a))
print("한 변의 길이가 %d인 정사각형의 넓이는 %d입니다." % (7, b))

def sum(n):
    hab=0
    for i in range(1, n+1):
        hab+=i
    return hab

a=sum(10)
b=sum(50)
print(a)
print(b)

def den(n):
    cd= []
    for i in range(1, n+1):
        if n%i==0:
            cd.append(i)
    return cd

num=8
print("{}의 약수={}".format(num, den(num)))