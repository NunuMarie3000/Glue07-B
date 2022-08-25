const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()

const users = require('./users.json')
app.use(cors());

app.get('/', (req, res)=>{
    try {
        res.send('Homepage')
    } catch (error) {
        res.status(400).send(error)
    }
})

app.get('/home', (req, res)=>{
    try {
        res.send('<h1>Warm welcome message</h1>')
    } catch (error) {
        res.status(400).send(error)
    }
})

app.get('/users', (req, res)=>{
    try {
        res.send({data: users})
    } catch (error) {
        res.status(400).send(error)
    }
})


app.listen(process.env.PORT, ()=>{
    console.log('Server is up and running')
})