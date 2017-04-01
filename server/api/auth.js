const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')

router.route('/login')
  .post((req, res) => {
    console.log('asd')
  })

router.route('/register')
  .post((req, res) => {
    console.log('asd')
  })

module.exports = router
