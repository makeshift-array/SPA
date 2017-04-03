import express from 'express'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import config from '../config'
import { success, error } from './api'

const router = express.Router()
const User = mongoose.model('User')

router.route('/auth')
  .get((req, res) => {
    jwt.verify(req.get('Authorization'), config.jwtSecret, (err, decoded) => {
      if (err) return res.json(error({ authorized: false }))

      // Regenerate token to keep the session alive.
      const token = jwt.sign(decoded, config.jwtSecret)

      res.json(success({ authorized: true, user: decoded, token }))
    })
  })

// TODO: Validation
router.route('/auth/login')
  .post((req, res) => {
    const { email, password } = req.body

    if (!email) return res.json(error('Email is required.', 'email'))
    if (!password) return res.json(error('Password is required.', 'password'))

    User.findOne({ email }, (err, doc) => {
      if (err) return res.json(error(err))
      if (doc === null) return res.json(error('Invalid user or password.'))

      doc.verifyPassword(password, (err, isValid) => {
        if (err) return res.json(error(err))

        if (isValid) {
          const user = { id: doc._id, name: doc.name, email }
          const token = jwt.sign(user, config.jwtSecret)

          res.json(success({ authorized: true, user, token }))
        } else {
          res.json(error('Invalid username or password.'))
        }
      })
    })
  })

router.route('/auth/register')
  .post((req, res) => {
    const user = new User(req.body)

    user.save(err => {
      if (err) return res.json(error(err))

      const registeredUser = { id: user._id, name: user.name, email: user.email }
      const token = jwt.sign(registeredUser, config.jwtSecret)

      res.json(success({ authorized: true, registeredUser, token }))
    })
  })

module.exports = router
