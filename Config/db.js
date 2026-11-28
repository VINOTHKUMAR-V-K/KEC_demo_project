let mongoose = require("mongoose");
const connectDB = async () => {
  await mongoose
    .connect("mongodb://localhost:27017/KEC_DB")
    .then(() => {
      console.log("Database connected successfully");
    })
    .catch((err) => {
      console.log("Mongodb error", err);
    });
};
module.exports = connectDB;