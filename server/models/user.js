const bcrypt = require('bcrypt-nodejs')
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const saltFactor = 10

const UserSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now }
})

/**
 * Compare user password to the stored password.
 */
UserSchema.methods.verifyPassword = function(password, callback) {
  bcrypt.compare(password, this.password, (err, isValid) => {
    if (err) return callback(err)

    callback(null, isValid)
  })
}

/**
 * Hash the users password before saving to the db.
 */
UserSchema.pre('save', function(next) {
  if (this.isModified('password')) {
    bcrypt.genSalt(saltFactor, (err, salt) => {
      if (err) return next()

      bcrypt.hash(this.password, salt, (err, hash) => {
        if (err) return next()

        this.password = hash
        next()
      })
    })
  }
})

mongoose.model('User', UserSchema)
