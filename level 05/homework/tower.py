from turtle import *
hideturtle()
speed(10)
penup()
goto(-200, -200)
pendown()
begin_fill()
color("green")
forward(400)
left(90)
forward(100)
left(90)
forward(400)
left(90)
forward(100)
end_fill()
left(180)
penup()
forward(100)
right(90)
forward(100)
pendown()
color("black")
begin_fill()
left(90)
forward(200)
right(90)
forward(50)
right(90)
forward(100)
left(90)
forward(100)
left(90)
forward(100)
right(90)
forward(50)
right(90)
forward(200)
right(90)
forward(200)
end_fill()
penup()
right(90)
forward(200)
pendown()
color("lime")
begin_fill()
right(30)
forward(45)
right(115)
forward(50)
end_fill()
color("green")
penup()
right(35)
forward(70)
pendown()
color("black")
begin_fill()
left(90)
forward(25)
right(90)
forward(30)
right(90)
forward(25)
end_fill()
right(180)
forward(75)
begin_fill()
left(90)
forward(30)
right(90)
forward(25)
right(90)
forward(30)
end_fill()
color("green")
right(90)
penup()
forward(38)
right(90)
pendown()
color("black")
begin_fill()
forward(30)
left(90)
forward(25)
left(90)
forward(30)
end_fill()
left(90)
penup()
color("green")
forward(62)
left(90)
forward(100)
pendown()
color("lime")
begin_fill()
right(30)
forward(45)
right(115)
forward(50)
end_fill()
penup()
color("blue")
right(35)
forward(200)
right(90)
forward(165)
right(90)
forward(30)
color("white")
write("G", font=("Arial", 40, "bold"))
right(90)
forward(50)
left(90)
color("lime")
write("O", font=("Arial", 40, "bold"))
right(90)
forward(50)
left(90)
color("white")
write("A", font=("Arial", 40, "bold"))
left(180)
forward(28)
right(90)
forward(183)
right(90)
pendown()
color("brown")
width(5)
forward(50)
right(90)
color("green")
begin_fill()
circle(40)
end_fill()
penup()
goto(150, -100)
pendown()
color("brown")
left(90)
forward(50)
right(90)
color("green")
begin_fill()
circle(40)
end_fill()
penup()
goto(-200, 200)
pendown()
color("yellow")
width(3)
for i in range(30):
    begin_fill()
    left(45)
    forward(50)
    left(90)
    forward(50)
    end_fill()
exitonclick()