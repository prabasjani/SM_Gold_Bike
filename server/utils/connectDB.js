import mongoose from "mongoose";

export const connDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("DB Connected...");
  } catch (error) {
    console.log(`DB connection Failed: ${error.message}`);
  }
};
