import { Schema, model } from 'mongoose'

export default model('Image', new Schema({
  image: {
    type: String,
    unique: true,
    required: true,
  },
}))
