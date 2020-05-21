import { Schema, model } from 'mongoose'

export default model('Image', new Schema({
  path: {
    type: String,
    unique: true,
    required: true,
  },
}))
