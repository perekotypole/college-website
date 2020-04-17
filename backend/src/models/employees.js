import { Schema, model } from 'mongoose'

export default model('Employee', new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  work: {
    type: [String],
    trim: true,
  },
  administration: {
    type: Boolean,
    default: false,
  },
  commission: {
    type: Schema.Types.ObjectId,
    ref: 'Commission',
    required: true,
  },
  contacts: {
    type: Map,
    of: String,
  },
  achievement: {
    type: [String],
    trim: true,
    alias: 'achv',
  },
  image: {
    type: Schema.Types.ObjectId,
    ref: 'Image',
    unique: true,
  },
}))
