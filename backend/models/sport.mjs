import mongoose from 'mongoose'


const SourceSchema = new mongoose.Schema({
  id: {
    type: String,
    default: null
  },
  name: {
    type: String,
    required: true
  }
});

const NewsSchema = new mongoose.Schema({
  source: {
    type: SourceSchema,
    required: true
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
    type: Date,
    required: true
  },
  content: {
    type: String,
    required: true
  }
});

export default mongoose.model('sports', NewsSchema);

