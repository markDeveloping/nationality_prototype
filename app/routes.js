var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// add your routes here
router.get('/reserved', function (req, res) {
  res.render('index')
})

router.get('/non-reserved', function (req, res) {
  res.render('non_reserved')
})


module.exports = router
