import mongoose from "mongoose";

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return;
  }
  try {
    await mongoose.connect(process.env.DB_URI);
    if (mongoose.connection.readyState === 1) {
      return;
    }
  } catch (error) {
    throw { result: "failed" };
  }
};

export default connectDB;
