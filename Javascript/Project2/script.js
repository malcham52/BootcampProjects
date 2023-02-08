var Name = prompt("Tell me your name.")
var number1 = prompt("Give me a number.")
var number2 = prompt("Give me another number.")

function day(x){
    return "You are going to have a wonderful day " + x + "."
}

function number(x,y){
    var z = Number(x) + Number(y)
    return "By the way, the sum of your numbers is " + z + "."
}

document.write(day(Name));
document.write("<p>" + number(number1, number2));
