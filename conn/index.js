const mongoose = require("mongoose");
const URI =
  "mongodb+srv://root:dbconnect@cluster0-dyfwc.mongodb.net/Cluster0?retryWrites=true&w=majority";
const connectDB = async () => {
  await mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useNewUrlParser: true,
    })
    .then((data) => {
      console.log(`DB connected`);
      // console.log(data);
    })
    .catch((err) => {
      console.log(`Can't connect to DB ${err}`);
    });
  mongoose.set("useCreateIndex", true);
};

module.exports = connectDB;
