// Core modules -
// http, https, fs, path, os 
const bodyParser = require('body-parser')
const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const express = require('express');

const app = express();

// app.use((req, res, next) => {
//     console.log("HI")
//     next() // allows the request to continue to the next middleware in line
// })

app.use(bodyParser.urlencoded({ extended: false }))

app.use('/admin', adminRoutes)
app.use(shopRoutes)
    
app.use('/', (req, res, next) => {
    res.status(404).send('<h1>Not found</h2>')
})

app.listen(4000)

// const server = http.createServer(app)

// server.listen(4000);
