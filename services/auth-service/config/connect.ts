
import mongoose from "mongoose";
import environment from "./environment";
import ErrorHandler from "../../../shared/errors/errorHandler";


const connectDB = async () => {
  try {

    const conn = await mongoose.connect(environment.MONGODB_URI);
    console.log("MongoDB connected");


    return conn;
  } catch (error) {
    console.error('Database connection error:', error);
    throw new ErrorHandler.CustomError(`Database connection error: ${error}`, 500);

  }
};

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to DB');
});

mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error:', err);
  throw new ErrorHandler.CustomError(`Database connection error: ${err.message}`, 500);
});


export default connectDB;