import { Schema, model } from 'mongoose'

export default model('Token', new Schema({
  value: {
    type: String,
  },
  userID: {
    type: Schema.Types.ObjectId,
    ref: 'Admin',
  },
}))
