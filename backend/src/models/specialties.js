import { Schema, model } from 'mongoose'

export default model('Specialty', new Schema({
  code: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  departmentID: {
    type: Schema.Types.ObjectId,
    ref: 'Department',
    required: true,
  },
  qualification: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  terms: {
    full: {
      type: Number,
      min: 0,
    },
    basic: {
      type: Number,
      min: 0,
    },
  },
  forms: {
    fulltime: {
      type: Boolean,
      default: false,
    },
    external: {
      type: Boolean,
      default: false,
    },
  },
  professions: {
    type: [String],
    trim: true,
    lowercase: true,
  },
  description: {
    type: String,
    trim: true,
  },
}))
