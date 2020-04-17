import { Schema, model } from 'mongoose'

export default model('Department', new Schema({
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
  leader: {
    type: Schema.Types.ObjectId,
    ref: 'Employee',
    required: true,
  },
  specialties: {
    type: [Schema.Types.ObjectId],
    ref: 'Specialty',
    unique: true,
  },
}))
