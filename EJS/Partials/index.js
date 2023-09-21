const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const logger = require('morgan')
app.use(logger("dev"));


app.get('/', (req,res) => {    
    res.render("home.ejs");
})

app.get('/about', (req,res) => {    
    res.render("about.ejs");
})

app.get('/contact', (req,res) => {    
    res.render("contact.ejs");
})

app.listen(port, () =>{
    console.log(`This server is listening on port: ${port}`)
})