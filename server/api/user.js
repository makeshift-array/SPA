const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')

router.route('/user')
  .get((req, res) => {
    User.findOne({}, docs => {
      res.json(docs)
    })
  })
  .post((req, res) => {
    console.log('asd')
  })
  .put()
  .delete()

module.exports = router
