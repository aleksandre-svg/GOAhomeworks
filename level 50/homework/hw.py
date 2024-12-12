import random
list = [',', 'd', 'r', 'h', 'f', 't', ',', 'd', 'r', 'h', 'f', 't', ',', 'd', 'r', 'h', 'f', 't']
list1 = []
list2 = []
list3 = []
list4 = []
list5 = []
def random_students(arr):
    i = 0
    while i != 20:
        em = list1.append(random.choice(arr))
        arr.pop(em[range(0, 5)])
        em1 = list2.append(random.choice(arr))
        arr.pop(em1)
        em2 = list3.append(random.choice(arr))
        arr.pop(em2)
        em3 = list4.append(random.choice(arr))
        arr.pop(em3)
        em4 = list5.append(random.choice(arr))
        arr.pop(em)
        i += 1
    return em, em1, em2, em3, em4
print(random_students(list))


