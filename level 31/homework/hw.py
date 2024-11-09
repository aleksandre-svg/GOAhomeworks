list = ["aleqsandred", "ana", "tamuna", "giorgi", "lavrenti", "gabrieli", 'elene', "pavle", "demetre", "putin"]
for i in range(len(list)):
    for j in list:
        if len(j) >= 10:
            list.pop(i)
print(list)