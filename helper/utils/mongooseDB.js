import mongoose from 'mongoose';

const connectDB = async () => {
  if (mongoose.connections[0].readyState === 1) return;
  try {
    await mongoose.connect(process.env.DB_URI);
    return;
  } catch (err) {
    throw new Error('Error happened in DB connection');
  }
};
export default connectDB;
