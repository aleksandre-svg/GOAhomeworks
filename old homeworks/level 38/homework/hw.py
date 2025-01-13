def calculator(num1,num2,move):
    if move == "+":
        return num1, "+", num2, "=", num1+num2
    elif move == "-":
        return num1, "-", num2, "=", num1-num2
    elif move == "/":
        return num1, "/", num2, "=", num1/num2
    elif move == "*":
        return num1, "*", num2, "=", num1*num2
    elif move == "%":
        return num1, "%", num2, "=", num1%num2
    elif move == "//":
        return num1, "//", num2, "=", num1//num2
    else:
        return "there is no move in python that u typed"
print(calculator(int(input("Print first number: ")), int(input("Print second number: ")), input("Print what move you want to do with this numbers: ")))