const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const modelController = require('./Controllers/controller.js')

const url ='mongodb://localhost:27017'
const app=express()
mongoose.connect(url)
const con= mongoose.connection

app.use(cors())

con.on('open', () => {
    console.log('connected')
})

app.use(cors())
app.use(express.json())

app.use('/controller',modelController)
app.listen(2000,() =>{
    console.log('server started')
})