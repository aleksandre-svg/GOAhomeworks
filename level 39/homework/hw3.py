def name_first(name):
    alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    f = name[0].lower()

    if f in alphabet:
        positio = alphabet.index(f) + 1
        return positio
    else:
        return "error"

print(name_first(input("Enter your name: ")))