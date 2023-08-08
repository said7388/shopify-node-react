import mongoose from 'mongoose';
//for production
const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // dbName: "gpt4_db",
      dbName: process.env.MONGODB_NAME,
    });
    console.log(`MongoDb Connected ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error ${error.message}`);
    process.exit(1);
  }
};

export default connectDb;