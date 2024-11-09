user = int(input("Enter first number: "))
user1 = int(input("Enter second number: "))
def more_less(num1,num2):
    if num1 > num2:
        print(num1, ">", num2)
    elif num2 > num1:
        print(num2, ">", num1)
    else:
        print(num1, "=", num2)
more_less(user,user1)