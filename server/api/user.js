import express from 'express'
import mongoose from 'mongoose'

const router = express.Router()
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
