const mongoose = require('mongoose');
const config = require('config');
const db = require('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log('mongo db connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
