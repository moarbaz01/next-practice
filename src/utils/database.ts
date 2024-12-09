import mongoose from "mongoose";

export const dbConnect = () => {
  mongoose
    .connect(process.env.MONGODB_URI!)
    .then(() => console.log("Database is successfully connected"))
    .catch((err) => {
      console.log("Error found : ", err);
    });
};
