import { Schema, model } from 'mongoose'

export default model('Commission', new Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  leaderID: {
    type: Schema.Types.ObjectId,
    ref: 'Employee',
    unique: true,
    required: true,
  },
}))
