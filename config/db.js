const url = "mongodb://127.0.0.1:27017/kida"
const prodUrl = "mongodb+srv://haftomg96:Flahtom@cluster0.uieqssh.mongodb.net/"
const mongoose = require("mongoose");


mongoose.connect(prodUrl,{
    useNewUrlParser: true,
}) .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

  