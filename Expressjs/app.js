// Core modules -
// http, https, fs, path, os 
const bodyParser = require('body-parser')
const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')
const express = require('express');
const path = require('path');
const expressHbs = require('express-handlebars')
const app = express();

// app.use((req, res, next) => {
//     console.log("HI")
//     next() // allows the request to continue to the next middleware in line
// })

app.engine('handlebars', expressHbs())
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use('/admin', adminData.routes)
app.use(shopRoutes)

app.use((req, res, next) => {
    res.status(404).send('<h1>Not found</h2>')
})

app.listen(4000)

// const server = http.createServer(app)

// server.listen(4000);
