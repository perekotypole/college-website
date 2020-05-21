import { Schema, model } from 'mongoose'

export default model('Tag', new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
}))
