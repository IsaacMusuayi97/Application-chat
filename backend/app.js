const express = require('express')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const cors = require("cors")

connectDB()

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/ChatRoute', require('./routes/ChatRoute'))
app.use('/api/message', require('./routes/MessageRoute'))
app.use('/api', require('./routes/UserRoute'))    


app.get('/', (req,res)=>{
    res.json(req.query)
})

// localhost:5000/12312



module.exports =  app