def even_or_odd(num):
    if num % 2 == 0:
        return num, "is evem"
    else:
        return num, "is odd"
print(even_or_odd(int(input("Print any number: "))))