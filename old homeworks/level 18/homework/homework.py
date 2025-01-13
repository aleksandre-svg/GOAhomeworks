balance = 1200
# აქაუნთში შესვლა(თითქოს)
personal = int(input("enter your personal number:"))
pin = int(input("enter your pin:"))
print("your balance:", balance)
bank = int(input("choose an option:1.withdraw money 2.Deposit money 3.get credit 4.Credit repayment"))

while True:
        if bank == 1: # ფულის გამოტანა
            withdraw = int(input("how much?:"))
            if withdraw > balance:
                print("you dont have enough money, your balance:", balance)
                bank = int(input("choose an option:1.withdraw money 2.Deposit money 3.get credit 4.Credit repayment"))
            elif withdraw <= balance:
                balance = balance - withdraw
                print("your balance:", balance)
                bank = int(input("choose an option:1.withdraw money 2.Deposit money 3.get credit 4.Credit repayment"))
                
        elif bank == 2: # ფულის ჩარიცხვა
            deposit = int(input("how much?:"))
            balance = balance + deposit
            print("Great! your balance:", balance)
            bank = int(input("choose an option:1.withdraw money 2.Deposit money 3.get credit 4.Credit repayment"))
        elif bank == 3: # კრედიტის აღება
             krediti = int(input("how much:"))
             balance = balance + krediti
             print("your balance:", balance, "your debt:", krediti)
             bank = int(input("choose an option:1.withdraw money 2.Deposit money 3.get credit 4.Credit repayment"))
        if bank == 4 and krediti > 0: # კრედიტის გადახდა
                repayment = int(input("how much:"))
                krediti = krediti - repayment
                if krediti > 0:
                     print("your balance:", balance, "your debt:", krediti)
                     bank = int(input("choose an option:1.withdraw money 2.Deposit money 3.get credit 4.Credit repayment"))
                elif krediti <= 0:
                    print("your balance:", balance)
                    bank = int(input("choose an option:1.withdraw money 2.Deposit money 3.get credit 4.Credit repayment"))
        elif bank == 4 and krediti <= 0:
            print("you dont have any credit")
            print("your balance:", balance)
            bank = int(input("choose an option:1.withdraw money 2.Deposit money 3.get credit 4.Credit repayment"))