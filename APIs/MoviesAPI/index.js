require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const fetch = require("node-fetch");
const logger = require("morgan")

app.use(logger("dev"))
app.use(express.static("public"))

const baseurl = "https://api.themoviedb.org/3/movie"

app.get("/", (req,res) => {
    res.redirect("/home")
})

app.get("/home", (req,res) => {
    res.render("home.ejs")
})

app.get("/nowplaying", (req,res) => {
    let route = `now_playing?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
    let endpoint = `${baseurl}/${route}`

    fetch(endpoint)
    .then(response => {
    if(response.ok){
        return response.json()
        }
        throw Error("You broke it :(")
    })
    .then(data =>{
        let movie = data.results
        res.render("movies.ejs", {movie})
    })
    .catch(error => {
        console.log("There is an error: ", error)
        res.send("There is an error")
    })
})

app.listen(port, () => {
    console.log(`This app is listening on port: ${port}`)
})