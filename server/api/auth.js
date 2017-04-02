import express from 'express'
import mongoose from 'mongoose'
import { success, error } from './api'

const router = express.Router()
const User = mongoose.model('User')

// TODO: Add JWT support
router.route('/auth')
  .get((req, res) => {
    res.json(error({ authorized: false }))
  })

// TODO: Add JWT support
router.route('/auth/login')
  .post((req, res) => {
    let { email, password } = req.body

    User.findOne({ email }, (err, doc) => {
      if (err) return res.json(error(err))

      doc.verifyPassword(password, (err, isValid) => {
        if (err) return res.json(error(err))

        isValid ? 
          res.json(success({ name: doc.name, email })) :
          res.json(error('Invalid username or password.'))
      })
    })
  })

router.route('/auth/register')
  .post((req, res) => {
    const user = new User(req.body)

    user.save(err => {
      if (err) return res.json(error(err))

      res.json(user)
    })
  })

module.exports = router
