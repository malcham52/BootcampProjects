const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const fetch = require('node-fetch')
const logger = require('morgan')

app.use(logger("dev"))
app.use(express.static("public"))

const baseurl = 'https://api.coindesk.com/v1/bpi'

app.get('/', (req, res) => {
    res.redirect('/home')
})

app.get('/home', (req, res) => {
    res.render("home.ejs", {rate : "Choose a currency", currency: "", symbol: ""})
})

app.get('/getmoney', (req, res) => {
    let route = 'currentprice.json'
    let choice = req.query.country
    let endpoint = `${baseurl}/${route}`

    fetch(endpoint)
    .then(response => {
        if(response.ok){
        return response.json()
        }
        throw Error("You broke it :(")
    })
    .then(data => {
        let rate = data.bpi[choice].rate_float.toFixed(2)
        let symbol = data.bpi[choice].symbol
        res.render('home.ejs', {rate: rate, currency: choice, symbol: symbol})
    })
    .catch(err => {
        console.log("There is an error: ", err)
        res.send("There is an error")
    })
})

app.listen(port, () =>{
    console.log(`This app is listening on port ${port}`)
})

