// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  // Ajoutez d'autres champs selon vos besoins
});

module.exports = mongoose.model('User', userSchema);