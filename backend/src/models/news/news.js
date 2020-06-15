import { Schema, model } from 'mongoose'

export default model('News', new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  views: {
    type: Number,
    default: () => 0,
  },
  description: {
    type: String,
    trim: true,
  },
  mainTag: {
    type: Schema.Types.ObjectId,
    ref: 'Tag',
  },
  optionalTags: {
    type: [Schema.Types.ObjectId],
  },
  mainImage: {
    type: Schema.Types.ObjectId,
    ref: 'Image',
  },
  imagesList: {
    type: [Schema.Types.ObjectId],
    ref: 'Image',
    alias: 'images',
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
  avdert: {
    type: Boolean,
    default: false,
  },
  text: {
    type: String,
  },
  documentsList: {
    type: [Schema.Types.ObjectId],
    ref: 'Document',
    alias: 'documents',
  },
}).index({ title: 'text' }), 'news')
