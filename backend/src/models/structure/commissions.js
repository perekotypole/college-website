import { Schema, model } from 'mongoose'

export default model('Commission', new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  icon: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  leader: {
    type: Schema.Types.ObjectId,
    ref: 'Employee',
    unique: true,
    required: true,
  },
  members: {
    type: [Schema.Types.ObjectId],
    ref: 'Employee',
  },
}))
