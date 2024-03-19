const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_LOCAL_URI);
    console.log(
      `MongoDB connected: ${connect.connection.host}, ${connect.connection.name}`
    );
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectDb;
