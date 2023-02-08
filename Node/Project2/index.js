//I was able to build this without looking on my 4th attempt!

const express = require('express')
const app = express()
const port= 3000

app.get('/',function(req,res){
    res.send(console.log("Welcome to the basic server"))
})

app.listen(port,() => console.log(`This server is listening on port: ${port}`))