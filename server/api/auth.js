const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')

router.route('/auth/login')
  .post((req, res) => {
    console.log('asd')
  })

router.route('/auth/register')
  .post((req, res) => {
    res.json({
      msg: 'success!'
    })
  })

module.exports = router
