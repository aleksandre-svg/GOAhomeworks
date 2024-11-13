def more_or_less(num1,num2):
    if num1 > num2:
        return num1, ">", num2
    elif num2 > num1:
        return num2, ">", num1
    else:
        return num1, "=", num2
print(more_or_less(int(input("Print first number: ")), int(input("Print second number: "))))