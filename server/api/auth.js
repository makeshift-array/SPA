import express from 'express'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import config from '../config'
import { success, error } from './api'

const router = express.Router()
const User = mongoose.model('User')

// TODO: Add JWT support
router.route('/auth')
  .get((req, res) => {
    jwt.verify(req.get('Authorization'), config.jwtSecret, (err, decoded) => {
      if (err) return res.json(error({ authorized: false }))

      res.json(success({ authorized: true }))
    })
  })

// TODO: Add JWT support
router.route('/auth/login')
  .post((req, res) => {
    let { email, password } = req.body

    User.findOne({ email }, (err, doc) => {
      if (err) return res.json(error(err))

      doc.verifyPassword(password, (err, isValid) => {
        if (err) return res.json(error(err))

        if (isValid) {
          const token = jwt.sign({ name: doc.name, email }, config.jwtSecret)

          res.json(success({ name: doc.name, email, token }))
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

      res.json(user)
    })
  })

module.exports = router
