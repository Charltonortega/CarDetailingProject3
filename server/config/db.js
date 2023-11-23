const mongoose = require('mongoose');


const mongoURI = 'mongodb://127.0.0.1:27017/car-rental-app';

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

  