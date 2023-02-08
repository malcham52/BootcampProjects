const hearts = require('ascii-heart');

console.log(hearts());
console.log(hearts(10, 10));
console.log(hearts(40, 40, {
    fill: "❤"
}));
console.log(hearts(5,5,{fill: 'M'}));
console.log(hearts(10,10,{fill: 'G'}));