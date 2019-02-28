var express = require('express')

var router = express.Router()

var burger = require('../models/burger')

router.get('/', function (req, res) {
  burger.selectAll(function (data) {
    res.render('index', { burgers: data })
  })
});

router.post('/', function (req, res) {
  burger.insertOne(req.body, function (data) {
    res.send(data)
  })
})

router.put('/update/:id', function (req, res) {
  burger.updateOne(req.body, function (data) {
    res.send(data)
  })
})

router.get('*', function (req, res) {
  res.redirect('/')
})




module.exports = router