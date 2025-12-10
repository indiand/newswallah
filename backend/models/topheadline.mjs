import mongoose from 'mongoose'

const SourceSchema = new mongoose.Schema({
  id: {
    type: String,
    default: null
  },
  name: {
    type: String
  }
});

const NewsSchema = new mongoose.Schema({
  source: {
    type: SourceSchema
  },
  author: {
    type: String,
    default: null
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  urlToImage: {
    type: String,
    default: null
  },
  publishedAt: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

export default mongoose.model('topheadlines', NewsSchema);

