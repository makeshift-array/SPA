// TODO: Write an API abstraction class
const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const User = mongoose.model('User')

// TODO: Add JWT support
router.route('/auth')
  .get((req, res) => {
    res.json({ authorized: false })
  })

// TODO: Add JWT support
router.route('/auth/login')
  .post((req, res) => {
    let { email, password } = req.body

    User.findOne({ email }, (err, doc) => {
      if (err) return res.json({ status: 'error', err })

      doc.verifyPassword(password, (err, isValid) => {
        if (err) return res.json({ status: 'error', err })

        isValid ? 
          res.json({ status: 'success', name: doc.name, email }) :
          res.json({ status: 'error', msg: 'Invalid username or password.'})
      })
    })
  })

router.route('/auth/register')
  .post((req, res) => {
    const user = new User(req.body)

    user.save(err => {
      if (err) return res.json({ status: 'error', err })

      res.json(user)
    })
  })

module.exports = router
