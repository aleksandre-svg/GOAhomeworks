inte = int(input("write some numbers:"))
text = input("write some text:")
type_one = type(inte)
type_two = type(text)
print(type_one)
print(type_two)

goa = "goa is best"
type_of_string = type(goa)
print(type_of_string)

text_one = "hey"
print(int(text_one))
# თუ სტრინგში წერია ტექსტი მისი გადაქცევა ინტეჯერად შეუძლებელია მაგრამ თუ სტრინგში რიცხვი წერია ("10") მაშნ შეიძლება რადგან ინტეჯერი მოიცავს მარტო რიცხვებს

# ეს კოდი ქმნის 2 ცვლადს რომლის მნიშვნოლობებია ორი string 10 პრინტ ფუნქციაში ამ ორ ცვლადს გადააქცევს ინტეჯერად და მიუმატებს ერთმანებს რისი პასუხიცაა 20, თუ ინტეჯერად არ გადავაქცევდით იგი დაწერდა 1010
num1 = "10"
num2 = "10"
print(int(num1) + int(num2))

# string მონაცემთა ტიპი მოიცავს ტექსტური ტიპის ინფორმაცია, integer მოიცავს მარტო მთელ რიცხვებს, float კი არამთელ და ნაშთიან ირცხვებს (100.5 და ა.შ)

