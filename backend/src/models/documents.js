import { Schema, model } from 'mongoose'

export default model('Document', new Schema({
  name: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
    unique: true,
  },
}))
