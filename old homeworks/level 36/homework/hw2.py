def more_than_one(num):
    if num > 0:
        return num, "is more than 0"
    elif num == 0:
        return num, "equals zero"
    else:
        return num, "is less than 0"
print(more_than_one(int(input("Print any number: "))))