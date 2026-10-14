def func1():
    v = 10
    print("func1()의 v=", v)


def func2():
    global v
    v = 20
    print("func2()의 변경된 전역 v=", v)

v = 100

print("main()의 v=", v)
func1()
func2()
print("main()의 v=", v)

def total(*num):
    sum=0
    for n in sum:
        sum+=n
    return sum

print(total(1,2,3))
print(total(1,2,3,4,5))