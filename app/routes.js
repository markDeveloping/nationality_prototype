var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('reserved')
})

// add your routes here
router.get('/reserved', function (req, res) {
  res.render('reserved')
})

router.get('/non-reserved', function (req, res) {
  res.render('non_reserved')
})

router.get('/reserved_plus', function (req, res) {
  res.render('reserved_plus')
})

router.get('/non-reserved', function (req, res) {
  res.render('non-reserved_plus')
})

module.exports = router
