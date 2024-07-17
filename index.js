//Print statement
// console.log("Deploying Backend Code!")

// -------------------------------------------
//Expressjs hellow world code


require('dotenv').config()
// console.log(process.env) // remove this after you've confirmed it is working
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    // console.log("You are at the twitter route.")
    res.send("gauravyadav_70.com")
})

app.get('/login', (req, res) => {
    res.send('<h1>You are at the login route.</h1>')
})
app.get('/meriKshi', (req, res) => {
    res.send('<h1>At this route, Kshi loves you.</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})


