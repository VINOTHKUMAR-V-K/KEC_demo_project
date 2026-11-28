let mongoose = require("mongoose");
const connectDB = async () => {
  await mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.log("Mongodb error", err);
    });
};
module.exports = connectDB;