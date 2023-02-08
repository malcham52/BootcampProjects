const marvel = require('marvel-characters');

console.log(marvel());
console.log(marvel.characters.length);

let man = marvel.characters.filter(function(char){
    return char.startsWith("Man");
})
console.log(man)

if(marvel.characters.indexOf("Iron Man") != -1){
    let indexi = marvel.characters.indexOf("Iron Man")
    console.log(marvel.characters[indexi])
}
else{
    console.log("Iron Man Does Not Exist")
}

if(marvel.characters.indexOf("Batman") != -1){
    let indexb = marvel.characters.indexOf("Iron Man")
    console.log(marvel.characters[indexb])
}
else{
    console.log("No matches Found")
}

// console.log(marvel());
// console.log(marvel());
