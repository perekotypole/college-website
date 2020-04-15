import { Schema, model } from 'mongoose'

export default model('News', new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  mainImageID: {
    type: Schema.Types.ObjectId,
    ref: 'Image',
  },
  description: {
    type: String,
    trim: true,
  },
  tagIDList: {
    type: [Schema.Types.ObjectId],
    ref: 'Tag',
  },
  publicationDate: {
    type: Date,
    default: Date.now,
    alias: 'public',
  },
  eventDate: {
    type: Date,
    alias: 'event',
  },
  page: {
    type: String,
  },
  imageIDList: {
    type: [Schema.Types.ObjectId],
    ref: 'Image',
    alias: 'images',
  },
  documentIDList: {
    type: [Schema.Types.ObjectId],
    ref: 'Document',
    alias: 'documents',
  },
  notification: {
    type: Boolean,
    default: false,
  },
}))
