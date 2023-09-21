const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const logger = require('morgan')
app.use(logger("dev"));

const pizza = "I like my pizza with extra pineapple."
const cappuccino = "I like my cappuccino to be sweet."
const fries = "I like my fries crispy with extra salt"

app.get('/', (req,res) => {    
    res.render("home.ejs", {food1: pizza})
})

app.get('/about', (req,res) => {
    res.render("about.ejs", {food2: cappuccino})
})

app.get('/contact', (req,res) => {
    res.render("contact.ejs", {food3: fries})
})

app.listen(port, () =>{
    console.log(`This server is listening on port: ${port}`)
})