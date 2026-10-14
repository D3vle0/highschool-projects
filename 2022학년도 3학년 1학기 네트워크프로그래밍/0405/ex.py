k = ['a', 'b', 'c']
m = [1, 2, 3]
x = [k, m]
print(x)
print(x[0])
print(x[0][1])

n = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(n[0][0])
print(n[2][2])

squares = []
squares.append(36)
squares.append(7**2)
print(squares)

a_list = []
for i in range(10):
    a_list.append(i)
print(a_list)

L = [1, 2, 3]
M = [4, 5, 6]
N = []

for i in range(len(L)):
    N.append(L[i]+M[i])

print(N)

car=['bmw', 'audi', 'kia', 'hyundai']
car.sort()
print(car)

car.sort(reverse=1)
print("original list:", car)

print("\nsorted list:", sorted(car))

print("\noriginal list again:", car)