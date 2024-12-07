import mongoose from "mongoose";
// import process.env
// add process.env
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`MongoDB Connected : ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error : ${error.message}`);
    process.exit(1);
  }
};
export default connectDB;
