import { Schema, model } from 'mongoose'

export default model('Admin', new Schema({
  login: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
}), 'admin')
