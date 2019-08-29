const express = require('express');
const path = require('path')

const router = express.Router();

router.get('/add-product',(req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'))
    // next() no need to call
})

router.post('/product',(req, res, next) => {
    console.log(req.body)
    res.redirect('/')
})


module.exports = router