import mongoose, { Schema } from 'mongoose'
import bcrypt from 'mongoose-bcrypt'

const userSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  updatedAt: { type: Date, default: Date.now },
  createdAt: { type: Date, default: Date.now }
})

// Hash password on save.
userSchema.plugin(bcrypt)

mongoose.model('User', userSchema)
