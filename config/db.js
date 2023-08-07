const url = "mongodb://127.0.0.1:27017/kida"
const mongoose = require("mongoose");


mongoose.connect(url,{
    useNewUrlParser: true,
}) .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });