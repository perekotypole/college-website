import { Schema, model } from 'mongoose'

export default model('Document', new Schema({
  document: {
    type: String,
    unique: true,
    required: true,
  },
}))
