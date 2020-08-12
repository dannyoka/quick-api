const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = Person = mongoose.model("person", PersonSchema);
