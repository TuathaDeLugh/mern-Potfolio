import mongoose from "mongoose";

export const connectDatabase = () => {
  mongoose .connect(process.env.MONGO_URI).then((c) => {
      console.log(`Mongodb connected: ${c.connection.host}`);
    })
    .catch((e) => {
      console.log(e);
    });
};