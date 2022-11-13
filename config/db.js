const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://digital-house:digital-house@cluster0.oyeknlw.mongodb.net/didtal-house?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
      }
    );

    console.log('MongoDB Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
