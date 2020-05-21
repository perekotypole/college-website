import { Schema, model } from 'mongoose'

export default model('Employee', new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  works: {
    type: [String],
    trim: true,
  },
  administration: {
    type: Boolean,
    default: false,
  },
  contacts: {
    phone: {
      type: String,
    },
    email: {
      type: String,
    },
  },
  achievement: {
    type: [String],
    trim: true,
    alias: 'achv',
  },
  photo: {
    type: Schema.Types.ObjectId,
    ref: 'Image',
    unique: true,
  },
}))
