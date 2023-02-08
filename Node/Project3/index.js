const express = require('express')
const pokemon = require('pokemon')
const app = express()
const port = 3000

app.get('/', function(req,res){
    res.send("I am the Pokemon root route")
})

app.get('/pokemon', function(req,res){
    res.send(pokemon.random())
})

app.get('/dex', function(req,res){
    let dex = []
    for(let i=0; i<5; i++){
        dex[i] = pokemon.random()
    }
    res.send(dex)
})

app.get('/pokemon/dex', function(req,res){
    function randomNumber(min, max){
        return Math.floor(Math.random() * (max-min) + min)
    }
    let dex2 =[]
    for(let i=0; i<5; i++){
    dex2[i] = {
        pokemon: pokemon.random(),
        attack: randomNumber(50,100),
        defense: randomNumber(0,100)}
    }
    res.send(dex2)
})

app.get('/battle', function(req,res){
    function randomNumber(min, max){
        return Math.floor(Math.random() * (max-min) + min)
    }
    let pokemon1 = {
        pokemon: pokemon.random(),
        attack: randomNumber(50,100),
        defense: randomNumber(0,100)};
    let pokemon2 = {
        pokemon: pokemon.random(),
        attack: randomNumber(50,100),
        defense: randomNumber(0,100)};
if(pokemon2.defense < pokemon1.attack){
    res.send(`And the winner is ${pokemon1.pokemon} with an attack of ${pokemon1.attack} and a defense of ${pokemon1.defense} vs ${pokemon2.pokemon} with an attack of ${pokemon2.attack} and a defense of ${pokemon2.defense}. (Assuming ${pokemon1.pokemon} went first)`)
}
else{
    res.send(`And the winner is ${pokemon2.pokemon} with an attack of ${pokemon2.attack} and a defense of ${pokemon1.defense} vs ${pokemon1.pokemon} with an attack of ${pokemon1.attack} and a defense of ${pokemon1.defense}. (Assuming ${pokemon1.pokemon} went first)`)
}
})

app.listen(port, function(){
    console.log(`this server is listening on port: ${port}`)
})