number = int(input("Number: "))
num = 0
num2 = number % 2
while num < number:
    num = num + 1
    if num2 == 0:
        print(num, "ლუწია")
    else:
        print(num, "კენტია")