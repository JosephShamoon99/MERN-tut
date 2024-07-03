const express = require('express') 
require('dotenv').config() 
const workoutRoutes = require('./routes/workouts') 


// app
const app = express() 

// middleware
app.use(express.json()) //saves post information to request body and allows you to access it

app.use((req, res, next) => { 
    console.log(req.path, req.method) 
    next()
})


// routes
app.use('/api/workouts', workoutRoutes)

// listen for request
app.listen(process.env.PORT, () => { 
    console.log('listening on port', process.env.PORT)
}) 

