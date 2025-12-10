import mongoose from 'mongoose'

const connectToMongo = async (mongo_db_uri) => {
  await mongoose.connect(mongo_db_uri);
  mongoose.pluralize(null);
  console.log("Connected to MongoDB");
}

export default connectToMongo