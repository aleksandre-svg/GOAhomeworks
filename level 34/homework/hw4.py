user = int(input("Enter number: "))
def more_than10(num):
    if num < 10:
        print(num)
    elif num >= 10:
        print("Wrong number")
more_than10(user)