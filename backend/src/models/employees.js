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
  commissionID: {
    type: Schema.Types.ObjectId,
    ref: 'Commission',
    required: true,
  },
  contacts: {
    type: Schema.Types.Mixed,
  },
  achievement: {
    type: [String],
    trim: true,
    alias: 'achv',
  },
}))
