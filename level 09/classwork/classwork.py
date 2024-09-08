age = int(input("how old are you?:"))
if age > 18 or age == 18:
    print("you can buy gta 5")
else:
    print("you cant buy gta 5, download it from torent")

age_2 = int(input("how old are you?:"))
if age_2 > 10 and age_2 < 30:
    print("you are young")
elif age_2 < 10 or age_2 == 10:
    print("you are baby")
elif age_2 > 30 or age_2 == 30:
    print("you are old") 
