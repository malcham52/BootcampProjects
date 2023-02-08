const animals = require('animals')
const pets = require('log.pets')

console.log(animals());
console.log(pets.lion());
console.log(pets.zoo(animals(),animals(),animals()));
console.log(`# of animals in generator: ${animals.words.length}`)
let gani = animals.words.filter((g) => {return g.startsWith("g")}).length
if(gani >0){
console.log(`# of animals starting with G: ${gani}`)
}
else{
    console.log(`# of animals starting with G: No Matches Found`)
}