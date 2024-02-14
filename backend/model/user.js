

const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  userId: Number,
  Name: String,
  Email: String,
  Phone: String,
  Website: String,
  City: String,
  Company: String,
});

const User = mongoose.model('Users', userSchema);

module.exports = { User };
