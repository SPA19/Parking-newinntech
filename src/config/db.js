import mongoose from "mongoose";

const connectDB = async () => {
  console.log(`Checking database connection...`);
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}`);
    console.log("MongoDB is conncested succesfully");
  } catch (error) {
    console.log("Unable to connect to the database: ");
    console.log(error.message);
  }
};

export default connectDB;
