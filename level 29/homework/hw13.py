numbers = [31, 33, 35, 37, 39, 41, 43, 45, 47, 49]
max1 = min(numbers)
numbers.pop(0)
max2 = min(numbers)
numbers.pop(0)
max3 = min(numbers)
numbers.pop(0)
print(max1 + max2 + max3)
