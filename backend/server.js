require('dotenv').config()
const express = require('express')
const workoutRoutes = require('./routes/workouts')//change to whatever in future
const userRoutes = require('./routes/user')
const mongoose = require('mongoose')

var PORT = process.env.PORT || 4000

//express app
const app = express()

//middleware
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//routes
app.use('/api/workouts', workoutRoutes)
app.use('/api/user', userRoutes)

//connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to DB!")
        app.listen(PORT, () => {
            console.log(`listening on port ${PORT}!\nhttp://localhost:4000`)
        })
    })
    .catch((error) => {
        console.log(error)
    })



