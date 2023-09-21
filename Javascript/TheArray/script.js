var number = []
number.push(prompt("Give a number."))
number.push(prompt("Give another number."))
number.push(prompt("Give a number again."))
var x = 0

for(i=0; i<3; i++){
    x = x + Number(number[i]);
}
alert("The sum of your numbers is " + x + ".")