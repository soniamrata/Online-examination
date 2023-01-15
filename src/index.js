const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const route = require('./route/route.js')

app.use(express.json())

mongoose.connect('',{useNewUrlParser:true})
.then(() => console.log('mongoDB connected'))
.catch((err) => console.log(err.message))

app.use('/',route)

app.listen(port,function(){
    console.log("express app running on the port 3000")
})
