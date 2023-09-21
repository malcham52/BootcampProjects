## Server with Pokemon

A basic server using information from the Pokemon module: "https://www.npmjs.com/package/pokemon"

Route Handlers

1) "/" response: "I am the Pokemon root route."

1) "/pokemon" response: a random pokemon. 

1) '/dex' response" an array of 5 pokemon - representing our Pokedex

1) 'pokemon/dex' response: an array of 5 Pokemon BUT each element is an object that includes:

        1. Name of Pokemon: String
        2. Attack - random number (50 - 100)
        3. Defense - random number (0 - 100)

1) '/battle' response: sends back a "winner" and a 'loser" between two Pokemon. Also sends a string that states the name, attack and defense of the winner and the loser:

        And the winner is Tepig with an attack of 76 and a defense of 3 versus Espurr who has an attack of 99 and a defense of 40